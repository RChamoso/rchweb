/*global PushStream WebSocketWrapper EventSourceWrapper EventSource*/
/*jshint evil: true, plusplus: false, regexp: false */
/**
 * Copyright (C) 2010-2012 Wandenberg Peixoto <wandenberg@gmail.com>, Rogério Carvalho Schneider <stockrt@gmail.com>
 *
 * This file is part of Nginx Push Stream Module.
 *
 * Nginx Push Stream Module is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Nginx Push Stream Module is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Nginx Push Stream Module.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * pushstream.js
 *
 * Created: Nov 01, 2011
 * Authors: Wandenberg Peixoto <wandenberg@gmail.com>, Rogério Carvalho Schneider <stockrt@gmail.com>
 */
(function (window, document, undefined) {
  "use strict";

  /* prevent duplicate declaration */
  if (window.PushStream) { return; }

  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  var valueToTwoDigits = function (value) {
    return ((value < 10) ? '0' : '') + value;
  }

  var dateToUTCString = function (date) {
    var time = valueToTwoDigits(date.getUTCHours()) + ':' + valueToTwoDigits(date.getUTCMinutes()) + ':' + valueToTwoDigits(date.getUTCSeconds());
    return days[date.getUTCDay()] + ', ' + valueToTwoDigits(date.getUTCDate()) + ' ' + months[date.getUTCMonth()] + ' ' + date.getUTCFullYear() + ' ' + time + ' GMT';
  }

  var extend = function () {
    var object = arguments[0] || {};
    for (var i = 0; i < arguments.length; i++) {
      var settings = arguments[i];
      for (var attr in settings) {
        if (!settings.hasOwnProperty || settings.hasOwnProperty(attr)) {
          object[attr] = settings[attr];
        }
      }
    }
    return object;
  };

  var validChars  = /^[\],:{}\s]*$/,
      validEscape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
      validTokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
      validBraces = /(?:^|:|,)(?:\s*\[)+/g;

  var trim = function(value) {
    return value.replace(/^\s*/, "").replace(/\s*$/, "");
  };

  var parseJSON = function(data) {
    if (!data || !isString(data)) {
      return null;
    }

    // Make sure leading/trailing whitespace is removed (IE can't handle it)
    data = trim(data);

    // Attempt to parse using the native JSON parser first
    if (window.JSON && window.JSON.parse) {
      try {
        return window.JSON.parse( data );
      } catch(e) {
        if(PushStream.LOG_LEVEL == 'error'){ 
          throw "Invalid JSON: " + data;
        }else{
          return;
        }
      }
    }

    // Make sure the incoming data is actual JSON
    // Logic borrowed from http://json.org/json2.js
    if (validChars.test(data.replace(validEscape, "@").replace( validTokens, "]").replace( validBraces, "")) ) {
      return (new Function("return " + data))();
    }

    if(PushStream.LOG_LEVEL == 'error'){
      throw "Invalid JSON: " + data;
    }
  };

  var currentTimestampParam = function() {
    return { "_" : (new Date()).getTime() };
  };

  var objectToUrlParams = function(settings) {
    var params = settings;
    if (typeof(settings) === 'object') {
      params = '';
      for (var attr in settings) {
        if (!settings.hasOwnProperty || settings.hasOwnProperty(attr)) {
          params += '&' + attr + '=' + window.escape(settings[attr]);
        }
      }
      params = params.substring(1);
    }

    return params || '';
  };

  var addParamsToUrl = function(url, params) {
    return url + ((url.indexOf('?') < 0) ? '?' : '&') + objectToUrlParams(params);
  };

  var isArray = Array.isArray || function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  var isString = function(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
  };

  var Log4js = {
    logger: null,
    debug : function() { if  (PushStream.LOG_LEVEL === 'debug')                                         { Log4js._log.apply(Log4js._log, arguments); }},
    info  : function() { if ((PushStream.LOG_LEVEL === 'info')  || (PushStream.LOG_LEVEL === 'debug'))  { Log4js._log.apply(Log4js._log, arguments); }},
    error : function() {                                                                                  Log4js._log.apply(Log4js._log, arguments); },
    _log  : function() {
      if (!Log4js.logger) {
        var console = window.console;
        if (console && console.log) {
          if (console.log.apply) {
            Log4js.logger = console.log;
          } else if ((typeof console.log === "object") && Function.prototype.bind) {
            Log4js.logger = Function.prototype.bind.call(console.log, console);
          } else if ((typeof console.log === "object") && Function.prototype.call) {
            Log4js.logger = function() {
              Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments));
            };
          }
        }
      }

      if (Log4js.logger) {
        Log4js.logger.apply(window.console, arguments);
      }

      var logElement = document.getElementById(PushStream.LOG_OUTPUT_ELEMENT_ID);
      if (logElement) {
        var str = '';
        for (var i = 0; i < arguments.length; i++) {
          str += arguments[i] + " ";
        }
        logElement.innerHTML += str + '\n';

        var lines = logElement.innerHTML.split('\n');
        if (lines.length > 100) {
          logElement.innerHTML = lines.slice(-100).join('\n');
        }
      }
    }
  };

  var Ajax = {
    _getXHRObject : function() {
      var xhr = false;
      try { xhr = new window.XMLHttpRequest(); }
      catch (e1) {
        try { xhr = new window.XDomainRequest(); }
        catch (e2) {
          try { xhr = new window.ActiveXObject("Msxml2.XMLHTTP"); }
          catch (e3) {
            try { xhr = new window.ActiveXObject("Microsoft.XMLHTTP"); }
            catch (e4) {
              xhr = false;
            }
          }
        }
      }
      return xhr;
    },

    _send : function(settings, post) {
      settings = settings || {};
      settings.timeout = settings.timeout || 30000;
      var xhr = Ajax._getXHRObject();
      if (!xhr||!settings.url) { return; }

      Ajax.clear(settings);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          Ajax.clear(settings);
          if (settings.afterReceive) { settings.afterReceive(xhr); }
          if(xhr.status === 200) {
            if (settings.success) { settings.success(xhr.responseText); }
          } else {
            if (settings.error) { settings.error(xhr.status); }
          }
        }
      };

      if (settings.beforeOpen) { settings.beforeOpen(xhr); }

      var params = {};
      var body = null;
      var method = "GET";
      if (post) {
        body = objectToUrlParams(settings.data);
        method = "POST";
      } else {
        params = settings.data || {};
      }

      xhr.open(method, addParamsToUrl(settings.url, extend({}, params, currentTimestampParam())), true);

      if (settings.beforeSend) { settings.beforeSend(xhr); }

      var onerror = function() {
        try { xhr.abort(); } catch (e) { /* ignore error on closing */ }
        Ajax.clear(settings);
        settings.error(304);
      };

      if (post) {
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      } else {
        settings.timeoutId = window.setTimeout(onerror, settings.timeout + 2000);
      }

      xhr.send(body);
      return xhr;
    },

    _clear_script : function(script) {
      // Handling memory leak in IE, removing and dereference the script
      if (script) {
        script.onerror = script.onload = script.onreadystatechange = null;
        if (script.parentNode) { script.parentNode.removeChild(script); }
      }
    },

    _clear_timeout : function(settings) {
      if (settings.timeoutId) {
        settings.timeoutId = window.clearTimeout(settings.timeoutId);
      }
    },

    clear : function(settings) {
      Ajax._clear_timeout(settings);
      Ajax._clear_script(document.getElementById(settings.scriptId));
    },

    jsonp : function(settings) {
      settings.timeout = settings.timeout || 30000;
      Ajax.clear(settings);

      var head = document.head || document.getElementsByTagName("head")[0];
      var script = document.createElement("script");
      var startTime = new Date().getTime();

      var onerror = function() {
        Ajax.clear(settings);
        var endTime = new Date().getTime();
        settings.error(((endTime - startTime) > settings.timeout/2) ? 304 : 0);
      };

      var onload = function() {
        Ajax.clear(settings);
        settings.load();
      };

      script.onerror = onerror;
      script.onload = script.onreadystatechange = function(eventLoad) {
        if (!script.readyState || /loaded|complete/.test(script.readyState)) {
          onload();
        }
      };

      if (settings.beforeOpen) { settings.beforeOpen({}); }
      if (settings.beforeSend) { settings.beforeSend({}); }

      settings.timeoutId = window.setTimeout(onerror, settings.timeout + 2000);
      settings.scriptId = settings.scriptId || new Date().getTime();

      script.setAttribute("src", addParamsToUrl(settings.url, extend({}, settings.data, currentTimestampParam())));
      script.setAttribute("async", "async");
      script.setAttribute("id", settings.scriptId);

      // Use insertBefore instead of appendChild to circumvent an IE6 bug.
      head.insertBefore(script, head.firstChild);
    },

    load : function(settings) {
      return Ajax._send(settings, false);
    },

    post : function(settings) {
      return Ajax._send(settings, true);
    }
  };

  var escapeText = function(text) {
    return (text) ? window.escape(text) : '';
  };

  var unescapeText = function(text) {
    return (text) ? window.unescape(text) : '';
  };

  var parseMessage = function(messageText, keys) {
    var msg = messageText;
    if (isString(messageText)) {
      msg = parseJSON(messageText);
    }

    var message = {
        id     : msg[keys.jsonIdKey],
        channel: msg[keys.jsonChannelKey],
        data   : msg[keys.jsonDataKey], //data   : unescapeText(msg[keys.jsonDataKey]), FIX MARCO JSON
        tag    : msg[keys.jsonTagKey],
        time   : msg[keys.jsonTimeKey],
        eventid: msg[keys.jsonEventIdKey] || ""
    };

    return message;
  };

  var getBacktrack = function(options) {
    return (options.backtrack) ? ".b" + Number(options.backtrack) : "";
  };

  var getChannelsPath = function(channels) {
    var path = '';
    for (var channelName in channels) {
      if (!channels.hasOwnProperty || channels.hasOwnProperty(channelName)) {
        path += "/" + channelName + getBacktrack(channels[channelName]);
      }
    }
    return path;
  };

  var getSubscriberUrl = function(pushstream, prefix, extraParams) {
    var websocket = pushstream.wrapper.type === WebSocketWrapper.TYPE;
    var useSSL = pushstream.useSSL;
    var url = (websocket) ? ((useSSL) ? "wss://" : "ws://") : ((useSSL) ? "https://" : "http://");
    url += pushstream.host;
    url += ((!useSSL && pushstream.port === 80) || (useSSL && pushstream.port === 443)) ? "" : (":" + pushstream.port);
    url += prefix;

    var channels = getChannelsPath(pushstream.channels);
    if (pushstream.channelsByArgument) {
      var channelParam = {};
      channelParam[pushstream.channelsArgument] = channels.substring(1);
      extraParams = extend({}, extraParams, channelParam);
    } else {
      url += channels;
    }
    return addParamsToUrl(url, extraParams);
  };

  var getPublisherUrl = function(pushstream) {
    var channel = "";
    var url = (pushstream.useSSL) ? "https://" : "http://";
    url += pushstream.host;
    url += ((pushstream.port !== 80) && (pushstream.port !== 443)) ? (":" + pushstream.port) : "";
    url += pushstream.urlPrefixPublisher;
    for (var channelName in pushstream.channels) {
      if (!pushstream.channels.hasOwnProperty || pushstream.channels.hasOwnProperty(channelName)) {
        channel = channelName;
        break;
      }
    }
    url += "?id=" + channel;
    return url;
  };

  var extract_xss_domain = function(domain) {
    // if domain is an ip address return it, else return ate least the last two parts of it
    if (domain.match(/^(\d{1,3}\.){3}\d{1,3}$/)) {
      return domain;
    }

    var domainParts = domain.split('.');
    // window.domain="com.au" fails (illegal) on firefox we need to keep more than 2 parts in this case
    // always keep 2 domain parts , if 3 provided cut to 2, if 4 cut to 3.
    var keepNumber = Math.max(domainParts.length - 1, 2);

    return domainParts.slice(-1 * keepNumber).join('.');
  };

  var linker = function(method, instance) {
    return function() {
      return method.apply(instance, arguments);
    };
  };

  var clearTimer = function(timer) {
    if (timer) {
      clearTimeout(timer);
    }
    return null;
  };

  /* common callbacks */
  var onmessageCallback = function(event) {
    Log4js.info("[" + this.type + "] message received", arguments);
    var message = parseMessage(event.data, this.pushstream);
    this.pushstream._onmessage(message.data, message.id, message.channel, message.eventid, true);
  };

  var onopenCallback = function() {
    this.pushstream._onopen();
    Log4js.info("[" + this.type + "] connection opened");
  };

  var onerrorCallback = function(event) {
    Log4js.info("[" + this.type + "] error (disconnected by server):", event);
    if ((this.pushstream.readyState === PushStream.OPEN) &&
        (this.type === EventSourceWrapper.TYPE) &&
        (event.type === 'error') &&
        (this.connection.readyState === EventSource.CONNECTING)) {
      // EventSource already has a reconection function using the last-event-id header
      return;
    }
    this._closeCurrentConnection();
    this.pushstream._onerror({type: ((event && (event.type === "load")) || (this.pushstream.readyState === PushStream.CONNECTING)) ? "load" : "timeout"});
  };

  /* wrappers */

  var WebSocketWrapper = function(pushstream) {
    if (!window.WebSocket && !window.MozWebSocket) { if(PushStream.LOG_LEVEL == 'error'){ throw "WebSocket not supported"; }else{ return; } }
    this.type = WebSocketWrapper.TYPE;
    this.pushstream = pushstream;
    this.connection = null;
  };

  WebSocketWrapper.TYPE = "WebSocket";

  WebSocketWrapper.prototype = {
    connect: function() {
      this._closeCurrentConnection();
      var params = extend({}, this.pushstream.extraParams(), currentTimestampParam());
      var url = getSubscriberUrl(this.pushstream, this.pushstream.urlPrefixWebsocket, params);
      this.connection = (window.WebSocket) ? new window.WebSocket(url) : new window.MozWebSocket(url);
      this.connection.onerror   = linker(onerrorCallback, this);
      this.connection.onclose   = linker(onerrorCallback, this);
      this.connection.onopen    = linker(onopenCallback, this);
      this.connection.onmessage = linker(onmessageCallback, this);
      Log4js.info("[WebSocket] connecting to:", url);
    },

    disconnect: function() {
      if (this.connection) {
        Log4js.debug("[WebSocket] closing connection to:", this.connection.URL);
        this.connection.onclose = null;
        this._closeCurrentConnection();
        this.pushstream._onclose();
      }
    },

    _closeCurrentConnection: function() {
      if (this.connection) {
        try { this.connection.close(); } catch (e) { /* ignore error on closing */ }
        this.connection = null;
      }
    },

    sendMessage: function(message) {
      if (this.connection) { this.connection.send(message); }
    }
  };

  var EventSourceWrapper = function(pushstream) {
    if (!window.EventSource) { if(PushStream.LOG_LEVEL == 'error'){ throw "EventSource not supported"; }else{ return; } }
    this.type = EventSourceWrapper.TYPE;
    this.pushstream = pushstream;
    this.connection = null;
  };

  EventSourceWrapper.TYPE = "EventSource";

  EventSourceWrapper.prototype = {
    connect: function() {
      this._closeCurrentConnection();
      var params = extend({}, this.pushstream.extraParams(), currentTimestampParam());
      var url = getSubscriberUrl(this.pushstream, this.pushstream.urlPrefixEventsource, params);
      this.connection = new window.EventSource(url);
      this.connection.onerror   = linker(onerrorCallback, this);
      this.connection.onopen    = linker(onopenCallback, this);
      this.connection.onmessage = linker(onmessageCallback, this);
      Log4js.info("[EventSource] connecting to:", url);
    },

    disconnect: function() {
      if (this.connection) {
        Log4js.debug("[EventSource] closing connection to:", this.connection.URL);
        this._closeCurrentConnection();
        this.pushstream._onclose();
      }
    },

    _closeCurrentConnection: function() {
      if (this.connection) {
        try { this.connection.close(); } catch (e) { /* ignore error on closing */ }
        this.connection = null;
      }
    }
  };

  var StreamWrapper = function(pushstream) {
    this.type = StreamWrapper.TYPE;
    this.pushstream = pushstream;
    this.connection = null;
    this.url = null;
    this.frameloadtimer = null;
    this.pingtimer = null;
    this.iframeId = "PushStreamManager_" + pushstream.id;
  };

  StreamWrapper.TYPE = "Stream";

  StreamWrapper.prototype = {
    connect: function() {
      this._closeCurrentConnection();
      var domain = extract_xss_domain(this.pushstream.host);
      try {
        document.domain = domain;
      } catch(e) {
        Log4js.error("[Stream] (warning) problem setting document.domain = " + domain + " (OBS: IE8 does not support set IP numbers as domain)");
      }
      var params = extend({}, this.pushstream.extraParams(), currentTimestampParam(), {"streamid": this.pushstream.id});
      this.url = getSubscriberUrl(this.pushstream, this.pushstream.urlPrefixStream, params);
      Log4js.debug("[Stream] connecting to:", this.url);
      this.loadFrame(this.url);
    },

    disconnect: function() {
      if (this.connection) {
        Log4js.debug("[Stream] closing connection to:", this.url);
        this._closeCurrentConnection();
        this.pushstream._onclose();
      }
    },

    _clear_iframe: function() {
      var oldIframe = document.getElementById(this.iframeId);
      if (oldIframe) {
        oldIframe.onload = null;
        if (oldIframe.parentNode) { oldIframe.parentNode.removeChild(oldIframe); }
      }
    },

    _closeCurrentConnection: function() {
      this._clear_iframe();
      if (this.connection) {
        this.pingtimer = clearTimer(this.pingtimer);
        this.frameloadtimer = clearTimer(this.frameloadtimer);
        this.connection = null;
        this.transferDoc = null;
        if (typeof window.CollectGarbage === 'function') { window.CollectGarbage(); }
      }
    },

    loadFrame: function(url) {
      this._clear_iframe();
      try {
        var transferDoc = new window.ActiveXObject("htmlfile");
        transferDoc.open();
        transferDoc.write("<html><script>document.domain=\""+(document.domain)+"\";</script></html>");
        transferDoc.parentWindow.PushStream = PushStream;
        transferDoc.close();
        var ifrDiv = transferDoc.createElement("div");
        transferDoc.appendChild(ifrDiv);
        ifrDiv.innerHTML = "<iframe src=\""+url+"\"></iframe>";
        this.connection = ifrDiv.getElementsByTagName("IFRAME")[0];
        this.connection.onload = linker(onerrorCallback, this);
        this.transferDoc = transferDoc;
      } catch (e) {
        var ifr = document.createElement("IFRAME");
        ifr.style.width = "1px";
        ifr.style.height = "1px";
        ifr.style.border = "none";
        ifr.style.position = "absolute";
        ifr.style.top = "-10px";
        ifr.style.marginTop = "-10px";
        ifr.style.zIndex = "-20";
        ifr.PushStream = PushStream;
        document.body.appendChild(ifr);
        ifr.setAttribute("src", url);
        ifr.onload = linker(onerrorCallback, this);
        this.connection = ifr;
      }
      this.connection.setAttribute("id", this.iframeId);
      this.frameloadtimer = window.setTimeout(linker(onerrorCallback, this), this.pushstream.timeout);
    },

    register: function(iframeWindow) {
      this.frameloadtimer = clearTimer(this.frameloadtimer);
      iframeWindow.p = linker(this.process, this);
      this.connection.onload = linker(this._onframeloaded, this);
      this.pushstream._onopen();
      this.setPingTimer();
      Log4js.info("[Stream] frame registered");
    },

    process: function(id, channel, data, eventid) {
      this.pingtimer = clearTimer(this.pingtimer);
      Log4js.info("[Stream] message received", arguments);
      this.pushstream._onmessage(unescapeText(data), id, channel, eventid, true);
      this.setPingTimer();
    },

    _onframeloaded: function() {
      Log4js.info("[Stream] frame loaded (disconnected by server)");
      this.connection.onload = null;
      this.disconnect();
    },

    setPingTimer: function() {
      if (this.pingtimer) { clearTimer(this.pingtimer); }
      this.pingtimer = window.setTimeout(linker(onerrorCallback, this), this.pushstream.pingtimeout);
    }
  };

  var LongPollingWrapper = function(pushstream) {
    this.type = LongPollingWrapper.TYPE;
    this.pushstream = pushstream;
    this.connection = null;
    this.lastModified = null;
    this.etag = 0;
    this.connectionEnabled = false;
    this.opentimer = null;
    this.messagesQueue = [];
    this._linkedInternalListen = linker(this._internalListen, this);
    this.xhrSettings = {
        timeout: this.pushstream.longPollingTimeout,
        data: {},
        url: null,
        success: linker(this.onmessage, this),
        error: linker(this.onerror, this),
        load: linker(this.onload, this),
        beforeOpen: linker(this.beforeOpen, this),
        beforeSend: linker(this.beforeSend, this),
        afterReceive: linker(this.afterReceive, this)
    };
  };

  LongPollingWrapper.TYPE = "LongPolling";

  LongPollingWrapper.prototype = {
    connect: function() {
      this.messagesQueue = [];
      this._closeCurrentConnection();
      this.connectionEnabled = true;
      this.xhrSettings.url = getSubscriberUrl(this.pushstream, this.pushstream.urlPrefixLongpolling);
      var domain = extract_xss_domain(this.pushstream.host);
      var currentDomain = extract_xss_domain(window.location.hostname);
      this.useJSONP = (domain !== currentDomain) || this.pushstream.longPollingUseJSONP;
      this.xhrSettings.scriptId = "PushStreamManager_" + this.pushstream.id;
      if (this.useJSONP) {
        this.pushstream.longPollingByHeaders = false;
        this.xhrSettings.data.callback = "PushStreamManager[" + this.pushstream.id + "].wrapper.onmessage";
      }
      this._internalListen();
      this.opentimer = window.setTimeout(linker(onopenCallback, this), 5000);
      Log4js.info("[LongPolling] connecting to:", this.xhrSettings.url);
    },

    _listen: function() {
      if (this._internalListenTimeout) { clearTimer(this._internalListenTimeout); }
      this._internalListenTimeout = window.setTimeout(this._linkedInternalListen, this.pushstream.longPollingInterval);
    },

    _internalListen: function() {
      if (this.connectionEnabled) {
        this.xhrSettings.data = extend({}, this.pushstream.extraParams(), this.xhrSettings.data);
        if (this.useJSONP) {
          Ajax.jsonp(this.xhrSettings);
        } else if (!this.connection) {
          this.connection = Ajax.load(this.xhrSettings);
        }
      }
    },

    disconnect: function() {
      this.connectionEnabled = false;
      if (this.connection) {
        Log4js.debug("[LongPolling] closing connection to:", this.xhrSettings.url);
        this._closeCurrentConnection();
        this.pushstream._onclose();
      }
    },

    _closeCurrentConnection: function() {
      this.opentimer = clearTimer(this.opentimer);
      if (this.connection) {
        try { this.connection.abort(); } catch (e) { /* ignore error on closing */ }
        this.connection = null;
        this.lastModified = null;
        this.xhrSettings.url = null;
      }
    },

    beforeOpen: function(xhr) {
      if (this.lastModified === null) {
        var date = new Date();
        if (this.pushstream.secondsAgo) { date.setTime(date.getTime() - (this.pushstream.secondsAgo * 1000)); }
        this.lastModified = dateToUTCString(date);
      }

      if (!this.pushstream.longPollingByHeaders) {
        this.xhrSettings.data[this.pushstream.longPollingTagArgument] = this.etag;
        this.xhrSettings.data[this.pushstream.longPollingTimeArgument] = this.lastModified;
      }
    },

    beforeSend: function(xhr) {
      if (this.pushstream.longPollingByHeaders) {
        xhr.setRequestHeader("If-None-Match", this.etag);
        xhr.setRequestHeader("If-Modified-Since", this.lastModified);
      }
    },

    afterReceive: function(xhr) {
      if (this.pushstream.longPollingByHeaders) {
        this.etag = xhr.getResponseHeader('Etag');
        this.lastModified = xhr.getResponseHeader('Last-Modified');
      }
      this.connection = null;
    },

    onerror: function(status) {
      if (this.connectionEnabled) { /* abort(), called by disconnect(), call this callback, but should be ignored */
        if (status === 304) {
          this._listen();
        } else {
          Log4js.info("[LongPolling] error (disconnected by server):", status);
          this._closeCurrentConnection();
          this.pushstream._onerror({type: (status === 403) ? "load" : "timeout"});
        }
      }
    },

    onload: function() {
      this._listen();
    },

    onmessage: function(responseText) {
      Log4js.info("[LongPolling] message received", responseText);
      var lastMessage = null;
      var messages = isArray(responseText) ? responseText : responseText.split("\r\n");
      for (var i = 0; i < messages.length; i++) {
        if (messages[i]) {
          lastMessage = parseMessage(messages[i], this.pushstream);
          this.messagesQueue.push(lastMessage);
          if (!this.pushstream.longPollingByHeaders && lastMessage.time) {
            this.etag = lastMessage.tag;
            this.lastModified = lastMessage.time;
          }
        }
      }

      this._listen();

      while (this.messagesQueue.length > 0) {
        var message = this.messagesQueue.shift();
        this.pushstream._onmessage(message.data, message.id, message.channel, message.eventid, (this.messagesQueue.length === 0));
      }
    }
  };

  /* mains class */

  var PushStreamManager = [];

  var PushStream = function(settings) {
    settings = settings || {};

    this.id = PushStreamManager.push(this) - 1;

    this.useSSL = settings.useSSL || false;
    this.host = settings.host || window.location.hostname;
    this.port = settings.port || (this.useSSL ? 443 : 80);

    this.timeout = settings.timeout || 15000;
    this.pingtimeout = settings.pingtimeout || 30000;
    this.reconnecttimeout = settings.reconnecttimeout || 3000;
    this.checkChannelAvailabilityInterval = settings.checkChannelAvailabilityInterval || 60000;

    this.secondsAgo = Number(settings.secondsAgo);
    this.longPollingByHeaders     = (settings.longPollingByHeaders === undefined) ? true : settings.longPollingByHeaders;
    this.longPollingTagArgument   = settings.longPollingTagArgument  || 'tag';
    this.longPollingTimeArgument  = settings.longPollingTimeArgument || 'time';
    this.longPollingUseJSONP      = settings.longPollingUseJSONP     || false;
    this.longPollingTimeout       = settings.longPollingTimeout      || 30000;
    this.longPollingInterval      = settings.longPollingInterval     || 100;

    this.reconnecttimer = null;

    this.urlPrefixPublisher   = settings.urlPrefixPublisher   || '/pub';
    this.urlPrefixStream      = settings.urlPrefixStream      || '/sub';
    this.urlPrefixEventsource = settings.urlPrefixEventsource || '/ev';
    this.urlPrefixLongpolling = settings.urlPrefixLongpolling || '/lp';
    this.urlPrefixWebsocket   = settings.urlPrefixWebsocket   || '/ws';

    this.jsonIdKey      = settings.jsonIdKey      || 'id';
    this.jsonChannelKey = settings.jsonChannelKey || 'channel';
    this.jsonDataKey    = settings.jsonDataKey    || 'text';
    this.jsonTagKey     = settings.jsonTagKey     || 'tag';
    this.jsonTimeKey    = settings.jsonTimeKey    || 'time';
    this.jsonEventIdKey = settings.jsonEventIdKey || 'eventid';

    this.modes = (settings.modes || 'eventsource|websocket|stream|longpolling').split('|');
    this.wrappers = [];
    this.wrapper = null;

    this.onopen = null;
    this.onmessage = null;
    this.onerror = null;
    this.onstatuschange = null;

    this.channels = {};
    this.channelsCount = 0;
    this.channelsByArgument   = settings.channelsByArgument   || false;
    this.channelsArgument     = settings.channelsArgument     || 'channels';

    this.extraParams          = settings.extraParams          || this.extraParams;

    for (var i = 0; i < this.modes.length; i++) {
      try {
        var wrapper = null;
        switch (this.modes[i]) {
        case "websocket"  : wrapper = new WebSocketWrapper(this);   break;
        case "eventsource": wrapper = new EventSourceWrapper(this); break;
        case "longpolling": wrapper = new LongPollingWrapper(this); break;
        case "stream"     : wrapper = new StreamWrapper(this);      break;
        }
        this.wrappers[this.wrappers.length] = wrapper;
      } catch(e) { Log4js.info(e); }
    }

    this._setState(0);
  };

  /* constants */
  PushStream.LOG_LEVEL = 'none'; /* debug, info, error, none */
  PushStream.LOG_OUTPUT_ELEMENT_ID = 'Log4jsLogOutput';

  /* status codes */
  PushStream.CLOSED        = 0;
  PushStream.CONNECTING    = 1;
  PushStream.OPEN          = 2;

  /* main code */
  PushStream.prototype = {
    extraParams: function() {
      return {};
    },

    addChannel: function(channel, options) {
      if (escapeText(channel) !== channel) {
        if(PushStream.LOG_LEVEL == 'error'){
          throw "Invalid channel name! Channel has to be a set of [a-zA-Z0-9]";
        }else{
          return;
        }
      }
      Log4js.debug("entering addChannel");
      if (typeof(this.channels[channel]) !== "undefined") { if(PushStream.LOG_LEVEL == 'error'){ throw "Cannot add channel " + channel + ": already subscribed"; }else{ return; } }
      options = options || {};
      Log4js.info("adding channel", channel, options);
      this.channels[channel] = options;
      this.channelsCount++;
      if (this.readyState !== PushStream.CLOSED) { this.connect(); }
      Log4js.debug("leaving addChannel");
    },

    removeChannel: function(channel) {
      if (this.channels[channel]) {
        Log4js.info("removing channel", channel);
        delete this.channels[channel];
        this.channelsCount--;
      }
    },

    removeAllChannels: function() {
      Log4js.info("removing all channels");
      this.channels = {};
      this.channelsCount = 0;
    },

    _setState: function(state) {
      if (this.readyState !== state) {
        Log4js.info("status changed", state);
        this.readyState = state;
        if (this.onstatuschange) {
          this.onstatuschange(this.readyState);
        }
      }
    },

    connect: function() {
      Log4js.debug("entering connect");
      if (!this.host)                 { if(PushStream.LOG_LEVEL == 'error'){ throw "PushStream host not specified"; }else{ return; } }
      if (isNaN(this.port))           { if(PushStream.LOG_LEVEL == 'error'){ throw "PushStream port not specified"; }else{ return; } }
      if (!this.channelsCount)        { if(PushStream.LOG_LEVEL == 'error'){ throw "No channels specified"; }else{ return; } }
      if (this.wrappers.length === 0) { if(PushStream.LOG_LEVEL == 'error'){ throw "No available support for this browser"; }else{ return; } }

      this._keepConnected = true;
      this._lastUsedMode = 0;
      this._connect();

      Log4js.debug("leaving connect");
    },

    disconnect: function() {
      Log4js.debug("entering disconnect");
      this._keepConnected = false;
      this._disconnect();
      this._setState(PushStream.CLOSED);
      Log4js.info("disconnected");
      Log4js.debug("leaving disconnect");
    },

    _connect: function() {
      this._disconnect();
      this._setState(PushStream.CONNECTING);
      this.wrapper = this.wrappers[this._lastUsedMode++ % this.wrappers.length];

      try {
        this.wrapper.connect();
      } catch (e) {
        //each wrapper has a cleanup routine at disconnect method
        if (this.wrapper) {
          this.wrapper.disconnect();
        }
      }
    },

    _disconnect: function() {
      this.reconnecttimer = clearTimer(this.reconnecttimer);
      if (this.wrapper) {
        this.wrapper.disconnect();
      }
    },

    _onopen: function() {
      this.reconnecttimer = clearTimer(this.reconnecttimer);
      this._setState(PushStream.OPEN);
      if (this._lastUsedMode > 0) {
        this._lastUsedMode--; //use same mode on next connection
      }
    },

    _onclose: function() {
      this.reconnecttimer = clearTimer(this.reconnecttimer);
      this._setState(PushStream.CLOSED);
      this._reconnect(this.reconnecttimeout);
    },

    _onmessage: function(data, id, channel, eventid, isLastMessageFromBatch) {
      Log4js.debug("message", data, id, channel, eventid, isLastMessageFromBatch);
      if (id === -2) {
        if (this.onchanneldeleted) { this.onchanneldeleted(channel); }
      } else if ((id > 0) && (typeof(this.channels[channel]) !== "undefined")) {
        if (this.onmessage) { this.onmessage(data, id, channel, eventid, isLastMessageFromBatch); }
      }
    },

    _onerror: function(error) {
      this._setState(PushStream.CLOSED);
      this._reconnect((error.type === "timeout") ? this.reconnecttimeout : this.checkChannelAvailabilityInterval);
      if (this.onerror) { this.onerror(error); }
    },

    _reconnect: function(timeout) {
      if (this._keepConnected && !this.reconnecttimer && (this.readyState !== PushStream.CONNECTING)) {
        Log4js.info("trying to reconnect in", timeout);
        this.reconnecttimer = window.setTimeout(linker(this._connect, this), timeout);
      }
    },

    sendMessage: function(message, successCallback, errorCallback) {
      message = escapeText(message);
      if (this.wrapper.type === WebSocketWrapper.TYPE) {
        this.wrapper.sendMessage(message);
        if (successCallback) { successCallback(); }
      } else {
        Ajax.post({url: getPublisherUrl(this), data: message, success: successCallback, error: errorCallback});
      }
    }
  };

  PushStream.sendMessage = function(url, message, successCallback, errorCallback) {
    Ajax.post({url: url, data: escapeText(message), success: successCallback, error: errorCallback});
  };

  // to make server header template more clear, it calls register and
  // by a url parameter we find the stream wrapper instance
  PushStream.register = function(iframe) {
    var matcher = iframe.window.location.href.match(/streamid=([0-9]*)&?/);
    if (matcher[1] && PushStreamManager[matcher[1]]) {
      PushStreamManager[matcher[1]].wrapper.register(iframe);
    }
  };

  PushStream.unload = function() {
    for (var i = 0; i < PushStreamManager.length; i++) {
      try { PushStreamManager[i].disconnect(); } catch(e){}
    }
  };

  /* make class public */
  window.PushStream = PushStream;
  window.PushStreamManager = PushStreamManager;

  if (window.attachEvent) { window.attachEvent("onunload", PushStream.unload); }
  if (window.addEventListener) { window.addEventListener.call(window, "unload", PushStream.unload, false); }

})(window, document);/**
 * syncTabs 1.0 - Comunicacion entre ventanas y pestanas de un mismo dominio
 * Permite el envio de funciones y parametros para ser ejecutados en otras pestanas con el concepto de un master y muchos slave
 *
 * @author RodolfoGS - http://rodolfo.gs/
 *
 * @param roleCallbacks object - Funciones de callback a definir en el inicio
 * @return this
 */
function syncTabs(roleCallbacks){

	//Compatibilidad con navegadores obsoletos
	if(typeof localStorage === 'undefined' || typeof JSON === 'undefined'){
		var functions = ['add', 'registerCallback', 'getRole'],
				r = {};
		for(var i=0; i<functions.length; i++){
			r[functions[i]] = function(){};
		}
		return r;
	}

	//Almacenamiento de funciones de callback
	var callbacks = {
		'master': {'init': [], 'exit': [], 'interval': []},
		'slave': {'init': [], 'exit': [], 'interval': []},
		'functions': {}
	};
	for(var role in roleCallbacks){
		callbacks[role] = roleCallbacks[role];
	}

	//Keys
	var keys = {
		'data': 'syncTabs_Data',
		'ts': 'syncTabs_Ts',
		'masterAlive': 'syncTabs_MasterAlive' //Key para saber si el master esta vivo
	};

	var actual, //Como esta actuando en ese momento (slave o master)
			lastUpdate = +localStorage.getItem(keys['ts']), //Version ultimo mensaje recibido
			self = this;

	/**
	 * Ejecuto una funcion del listado de functions
	 *
	 * @param name string - Nombre de la funcion a ejecutar
	 * @param params array - Listado de parametros que va a recibir la funcion ejecutada
	 * @return void
	 */
	function execCallback(name, params){
		//La funcion no existe
		if(typeof callbacks['functions'][name] === 'undefined' && typeof console !== 'undefined' && typeof console.error !== 'undefined'){
			console.error("syncTabs: function '" + name + "' not exist");
			return;
		}

		if(typeof params === 'undefined'){
			params = [];
		}else if(typeof params != 'object'){
			params = [params];
		}

		//Ejecuto la funcion
		callbacks['functions'][name].apply(null, params);
	}

	/* Master */
	var master = {
		//Arranca como Master
		init: function(){
			actual = 'master';

			//Master alive
			var anteriorTs = +new Date();
			localStorage.setItem(keys['masterAlive'], anteriorTs);
			var interval = setInterval(function(){
				var auxTs = +localStorage.getItem(keys['masterAlive']);

				//Hay un master duplicado, lo cierro e inicio slave
				if(auxTs != anteriorTs){
					slave.init();
					clearInterval(interval);

					//Callbacks del usuario
					for(var i=0; i<callbacks['master']['exit'].length; i++){
						callbacks['master']['exit'][i].apply();
					}

					return;
				}

				anteriorTs = +new Date();
				localStorage.setItem(keys['masterAlive'], anteriorTs);
			}, 1000);

			//Callbacks del usuario
			for(var i=0; i<callbacks['master']['init'].length; i++){
				callbacks['master']['init'][i].apply();
			}
		}
	};
	/* FIN - Master */

	/* Slave */
	var slave = {
		//Arranca como Slave
		init: function(){
			actual = 'slave';

			var interval = setInterval(function(){
				//Verifica si el master esta vivo
				if(+new Date() - +localStorage.getItem(keys['masterAlive']) > 3000){
					master.init();
					clearInterval(interval);

					//Callbacks del usuario
					for(var i=0; i<callbacks['slave']['exit'].length; i++){
						callbacks['slave']['exit'][i].apply();
					}

					return;
				}
			}, 1000);

			//Callbacks del usuario
			for(var i=0; i<callbacks['slave']['init'].length; i++){
				callbacks['slave']['init'][i].apply();
			}
		}
	};
	slave.init();
	/* FIN - Slave */

	/**
	 * Devuelve todas las acciones en cola
	 *
	 * @return array - Funciones en cola
	 */
	function getQueue(){
		var queue = localStorage.getItem(keys['data']);
		return queue ? JSON.parse(queue) : [];
	};

	/**
	 * Agregar una accion a un queue
	 *
	 * @param name string - Nombre de la funcion a agregar
	 * @param params array - Parametros de la funcion
	 * return void
	 */
	this.add = function(name, params){
		var ts = +new Date(), //Version ts
				queue = getQueue(); //Obtengo las ultimas acciones y agrego la nueva

		//Elimino todas las acciones del queue que sean de hace mas de 3 segundos
		for(var i=queue.length-1; i>=0; i--){
			if(ts - queue[i].ts > 3000){
				queue = queue.splice(i + 1);
				break;
			}
		}

		queue.push({
			ts: ts,
			name: name,
			params: params
		});
		localStorage.setItem(keys['data'], JSON.stringify(queue));

		//Actualizo version ts
		localStorage.setItem(keys['ts'], ts);

		checkQueue(ts, queue);
	};

	/**
	 * Se queda comprobando en el queue actual si aparecen nuevas acciones, si aparecen las ejecuta
	 */
	function checkQueue(newTs, newQueue){
		if(typeof newTs === 'undefined'){
			newTs = +localStorage.getItem(keys['ts']);
		}
		if(lastUpdate == newTs){
			return;
		}

		var lastUpdateOld = lastUpdate;
		lastUpdate = newTs;

		//Obtengo las acciones
		if(typeof newQueue === 'undefined'){
			newQueue = getQueue();
		}

		//Recorro todas las acciones y ejecuto las nuevas
		for(var i=0; i<newQueue.length; i++){
			if(newQueue[i].ts > lastUpdateOld){
				execCallback(newQueue[i].name, newQueue[i].params);
			}
		}
	}
	setInterval(function(){ checkQueue() }, 1000);

	/**
	 * Registro de funciones de callback
	 *
	 * @param role string - A quien va dirigido el callback (master, slave o functions)
	 * @param name string - Nombre de la funcion a registrar
	 * @param fn function - Funcion a registrar
	 * @return void
	 */
	this.registerCallback = function(role, name, fn){
		//Funciones para el master o slave las agrega en un array
		if(role == 'master' || role == 'slave'){
			//Si ya paso el init, la ejecuta
			if(role == actual && name == 'init'){
				fn.apply();
			}

			callbacks[role][name].push(fn);
		}else{
			callbacks[role][name] = fn;
		}
	};

	/**
	 * Devuelve el role de la pestana actual (master o slave)
	 *
	 * @return string - Role de la pestana (master o slave)
	 */
	this.getRole = function(){
		return actual;
	};

	return this;
};


/**
 * Demo
 * /
var syncTabs = new syncTabs({
	'master': {
		'init': function(){
			console.log('master init');
		},

		'exit': function(){
			console.log('master exit');
		}
	},

	'slave': {
		'init': function(){
			console.log('slave init');
		},
		'exit': function(){
			console.log('slave exit');
		}
	},

	'functions': {
		'msg': function(msg){
			console.log(msg);
		}
	}
});

//Creacion de un callback en tiempo de ejecucion
syncTabs.registerCallback('functions', 'msg2', function(msg){
	console.log('Message 2:', msg);
});

console.log(syncTabs);

//Desde cualquier pestana ejecutar lo siguiente
//syncTabs.add('msg', 'Hola Mundo!')

/**/

//Inicializo plugin de syncTabs
var syncTabs = new syncTabs();function Realtime(server){
	//Compatibilidad con navegadores obsoletos a
	if(typeof Object.keys === 'undefined' || typeof localStorage === 'undefined' || typeof JSON === 'undefined'){
		var functions = ['addChannel', 'replaceChannel', 'removeChannel'],
				r = {};
		for(var i=0; i<functions.length; i++){
			r[functions[i]] = function(){};
		}
		return r;
	}

	var keys = {
		'channels': 'Realtime_channels',
		'myChannels': 'Realtime_myChannels_',
		'ping': 'Realtime_ping'
	};

	//Variables a utilizar cuando es Master
	var stream = null, //Mantiene la conexion de PushStream
			channels = {}, //Listado de canales conectados
			isConnect = false, //Esa abierta la conexion
			intervalAlive = false, //Interval para comprobar los canales Alive
			timerPing = false, //Timer para el ping keep-alive
			addChannelTimer = false;

	//Variables a utilizar siempre (Master y Slave)
	var myChannels = {}; //Canales de la pestana actual (incluye callback)

	/**
	 * Devuelve el listado de canales de cache
	 *
	 * @return object - Listado de canales escuchandose
	 */
	function getChannelsFromCache(){
		var r = localStorage.getItem(keys['channels']);
		return r ? JSON.parse(r) : {};
	}

	/**
	 * Agrega un canal a escuchar
	 *
	 * @param channelName string - Nombre del canal
	 * @param isPrivate boolean - Si es el canal privado o no
	 * @return void
	 */
	this.addChannel = function(channelName, callbackScope, callback){
		if(!channelName){
			return;
		}

		//Agrego a mi listado de canales
		myChannels[channelName] = {
			'scope': callbackScope,
			'callback': callback
		};

		//Actualizo alive del canal
		localStorage.setItem(keys['myChannels'] + channelName, +new Date());

		//Agrego al listado de canales
		channels = getChannelsFromCache();
		if(typeof channels[channelName] === 'undefined'){
			channels[channelName] = true;
			localStorage.setItem(keys['channels'], JSON.stringify(channels));
			syncTabs.add('addChannel', [channelName]);
		}
	};

	//Actualizo el alive de los canales que estoy escuchando
	setInterval(function(){
		var ts = +new Date();
		for(var channel in myChannels){
			localStorage.setItem(keys['myChannels'] + channel, ts);
		}
	}, 10000);

	/**
	 * Reemplaza un canal por otro en todos los que lo esten escuchando
	 * Utilizado para cambio de canal privado
	 *
	 * @param prevChannelName string - Nombre anterior del canal
	 * @param newChannelName string - Nuevo nombre del canal
	 * @return void
	 */
	this.replaceChannel = function(prevChannelName, newChannelName){
		//Obtengo todos los canales que se estan escuchando
		channels = getChannelsFromCache();

		//Si el canal previo se esta escuchando, lo reemplazo por el nuevo
		if(typeof channels[prevChannelName] !== 'undefined'){
			//Actualizo el ts del nuevo canal
			localStorage.setItem(keys['myChannels'] + newChannelName, +new Date());

			//Reemplazo el viejo canal
			delete channels[prevChannelName];
			channels[newChannelName] = true;

			//Actualizo lista de canales
			localStorage.setItem(keys['channels'], JSON.stringify(channels));
		}

		//Notifico el cambio de canales
		syncTabs.add('replaceChannel', [prevChannelName, newChannelName]);
	};

	/**
	 * Elimina un canal en todos los que lo esten escuchando
	 * Utilizado para cerrar sesion
	 *
	 * @param channelName string - Canal a eliminar
	 * @return void
	 */
	this.removeChannel = function(channelName){
		//Obtengo todos los canales que se estan escuchando
		channels = getChannelsFromCache();

		//Si el canal se estaba escuchando, lo elimino
		if(typeof channels[channelName] !== 'undefined'){
			delete channels[channelName];

			//Actualizo lista de canales
			localStorage.setItem(keys['channels'], JSON.stringify(channels));
		}

		//Notifico el cierre del canal
		syncTabs.add('removeChannel', [channelName]);
	};

	//Datos recibidos
	syncTabs.registerCallback('functions', 'receiveData', function(data, channel){
		//El usuario no esta escuchando este canal
		if(typeof channel === 'undefined' || typeof myChannels[channel] === 'undefined'){
			return;
		}

		//Ejecuto la funcion de callback de ese canal
		myChannels[channel]['callback'].apply(myChannels[channel]['scope'], [data, channel]);
	});

	/**
	 * Limpio los canales que no tienen actividad hace mucho tiempo (usado por el master)
	 *
	 * @return reconnect boolean - Los elimina de la conexion tambien
	 * @return integer - Cantidad de canales a desconectar (y ya los elimino de channels)
	 */
	function checkChannelsAlive(reconnect){
		var reconnect = (typeof reconnect === 'undefined') ? true : !!reconnect,
				newTs = +new Date(),
				count = 0;

		//Compruebo que todos los canales esten alive
		for(var channel in channels){
			if(newTs - +localStorage.getItem(keys['myChannels'] + channel) > 20000){
				localStorage.removeItem(keys['myChannels'] + channel);

				//Desconecto
				if(reconnect && isConnect){
					isConnect = false;
					stream.disconnect();
				}

				//Elimino el canal de la conexion
				if(reconnect){
					stream.removeChannel(channel);
				}

				//Elimino el canal
				delete channels[channel];

				count++;

				//TODO
				//Notificar al syncTabs que se desconecto ese canal, para avisar si alguien lo esta escuchando (user sleep plugin)
			}
		}

		//Actualizo localStorage de canales
		if(count){
			localStorage.setItem(keys['channels'], JSON.stringify(channels));
		}

		//Rehago la conexion
		if(reconnect && !isConnect && Object.keys(channels).length){
			isConnect = true;
			stream.connect();
		}

		return count;
	}


	function ping() {
		var lastPing = +localStorage.getItem(keys.ping), //Ultima vez pingeado
			now = +new Date, //Hora actual
			diff = now - lastPing,
			pingInterval = 900000;//Enviar cada 15 minutos
		if (diff > pingInterval) {
			$.ajax({
				type: 'post',
				url: '/ajax/liveupdate/ping',
				success: function() {
					localStorage.setItem(keys.ping, +new Date);
				}
			});
			pingIn = pingInterval;
		}else{
			pingIn = pingInterval - diff;
		}
		timerPing = setTimeout(ping, pingIn);
	}
	localStorage.setItem(keys.ping, +new Date);

	//Master init
	syncTabs.registerCallback('master', 'init', function(){
		//No se habia iniciado nunca la clase
		if(!stream){
			stream = new PushStream({
				host: server['host'],
				port: server['port'],
				modes: 'websocket'
			});

			//Al recibir datos lo envio a todos los slave
			stream.onmessage = function(data, id, channel) {
				syncTabs.add('receiveData', [data, channel]);
			};
		}

		//Obtengo los ultimos canales utilizados por el master
		channels = getChannelsFromCache();

		//Compruebo los canales alive
		checkChannelsAlive(false);
		intervalAlive = setInterval(function(){ checkChannelsAlive(); }, 10000);

		//Ping online tiempo sesion
		ping();

		//No hay ningun canal agregado por ahora, cuando se agregue uno se conectara
		if(!Object.keys(channels).length){
			return;
		}

		//Agrego todos los canales
		for(var channel in channels){
			stream.addChannel(channel);
		}

		//Hago la conexion
		isConnect = true;
		stream.connect();
	});

	//Master exit
	syncTabs.registerCallback('master', 'exit', function(){
		isConnect = false;
		stream.disconnect();
		stream.removeAllChannels();
		clearInterval(intervalAlive);
		clearInterval(timerPing);
	});

	//Se agrego un nuevo canal
	syncTabs.registerCallback('functions', 'addChannel', function(channelName){
		//No es el master o el canal ya se esta escuchando
		if(syncTabs.getRole() != 'master' || typeof channels[channelName] !== 'undefined'){
			return;
		}
		channels[channelName] = true;

		//Si estaba conectado, lo desconecto
		if(isConnect){
			isConnect = false;
			stream.disconnect();
		}
		stream.addChannel(channelName);

		clearInterval(addChannelTimer);
		addChannelTimer = setTimeout(function(){
			if(!isConnect){
				isConnect = true;
				stream.connect();
			}
		}, 500);
	});

	//Se reemplazo un canal
	syncTabs.registerCallback('functions', 'replaceChannel', function(prevChannelName, newChannelName){
		//Esta pestana esta escuchando el canal previo
		if(typeof myChannels[prevChannelName] !== 'undefined'){
			myChannels[newChannelName] = myChannels[prevChannelName];

			delete myChannels[prevChannelName];
			localStorage.removeItem(keys['myChannels'] + prevChannelName);
		}

		//Si es el master, rehace la conexion para escuchar el nuevo canal
		if(syncTabs.getRole() == 'master'){
			delete channels[prevChannelName];
			channels[newChannelName] = true;

			//Si estaba conectado, lo desconecto
			if(isConnect){
				stream.disconnect();
			}
			isConnect = true;

			//Reemplazo el canal y conecto
			stream.removeChannel(prevChannelName);
			stream.addChannel(newChannelName);
			stream.connect();
		}
	});

	//Se elimino un canal
	syncTabs.registerCallback('functions', 'removeChannel', function(channelName){
		//Esta pestana esta escuchando el canal
		if(typeof myChannels[channelName] !== 'undefined'){
			delete myChannels[channelName];
			localStorage.removeItem(keys['myChannels'] + channelName);
		}

		//Si es el master, rehace la conexion para eliminar el canal
		if(syncTabs.getRole() == 'master'){
			delete channels[channelName];

			//Si estaba conectado, lo desconecto
			if(isConnect){
				stream.disconnect();
			}
			isConnect = true;

			//Elimino el canal y conecto
			stream.removeChannel(channelName);
			stream.connect();
		}
	});

	Realtime = this;
};function notifications(channel, initCounts){
	//Compatibilidad con navegadores obsoletos 
	if(false){
		var functions = ['updateCounts', 'resetCount', 'showEvent'],
				r = {};
		for(var i=0; i<functions.length; i++){
			r[functions[i]] = function(){};
		}
		return r;
	}

	var counts = {
		'messages': 0,

		//Feeds
		'newsfeed': 0,
		'notification': 0,
		'thirdnotification': 0,
		'friendsfeed': 0,
		'mention': 0
	};
	for(var c in initCounts){
		if(typeof counts[c] !== 'undefined'){
			counts[c] = initCounts[c];
		}
	}

	var originalTitle = document.title, //Titulo original del documento
		feedsLimit = 40, //Límite de feeds a almacenar
		hoverOnHovercard = false, // Determina si se está haciendo hover sobre un item de la lista
		hoverOnList = false, // Determina si se está haciendo hover sobre un item de la lista
		leaveHovercard = false, // Timer para esconder la hover al hacer mouseleave de la misma
		autoScroll = false, // Timer para esconder la hover al hacer mouseleave de la misma
		types = ['shout', 'wallpost', 'post', 'tema', 'track', 'album'], // Tipos de feeds
		fixpos = $.browser.webkit ? 'offset' : 'position', // fix para positions/offsets
		box = $('#friends-live-activity'),
		itemHeight = box.find('.list-item:first').outerHeight() || 42;


	/**
	 * Actualiza el html de los contadores
	 *
	 * @param counts object - Listado de contadores a actualizar (ej. ['newsfeed': 5, 'notifications': 99])
	 * @return void
	 */
	this.updateCounts = function(list){
		for(var name in list){
			if(typeof counts[name] === 'undefined' || counts[name] == list[name]){
				continue;
			}
			counts[name] = list[name];

			switch(name){
				case 'messages':
				case 'notification':
					var value = (list[name] >= 100) ? '+99' : list[name];
					bubbleAlertUpdate(name, value);

					updateTitleCounts();
					break;

				case 'newsfeed':
				case 'thirdnotification':
					var value = counts[name],
							sum = counts['newsfeed'] + counts['thirdnotification'];
					if(value >= 100){
						value = '+99';
					}
					if(sum >= 100){
						sum = '+99';
					}

					bubbleAlertUpdate('mi', sum);
					updateTitleCounts();

					//Mas contenido
					if(value && typeof Feed2 === 'object' && Feed2.getConfig('feedName') == name){
						$('#Feed-reload').css('display', 'block');
					}

					//Esta visible el contador interno, le cambio el valor y lo muestro/oculto
					var el = $('#bubble-alert-' + name);
					if(el.length){
						el.html(value);
						if(value){
							el.removeClass('hide');
						}else{
							el.addClass('hide');
						}
					}
					break;

				case 'mention':
					var value = counts[name];

					//Mas contenido
					if(value && typeof Feed2 === 'object' && Feed2.getConfig('feedName') == name){
						$('#Feed-reload').css('display', 'block');
					}

					break;
			}
		}
	};

	/**
	 * Resetea un contador a 0 y se lo comunica al resto de las pestañas
	 *
	 * @param countName string - Nombre de contador a reiniciar
	 * @return void
	 */
	this.resetCount = function(countName){
		if(typeof counts[countName] === 'undefined'){
			return;
		}

		//Simulo un receiveData
		var data = {"counts":{}};
		data['counts'][countName] = 0;

		syncTabs.add('receiveData', [data, channel]);
	};

	/**
	 * Recibe un evento y lo envia a la funcion necesaria para mostrarlo segun el tipo
	 *
	 * @param event object - Evento a mostrar
	 * @return void - Envia el evento a la funcion necesaria
	 */
	this.showEvent = function(event){
		switch(event.feedName){
			case 'notification':
			case 'realtime':
				showRealTimeEvent(event);
				break;

			case 'friendsfeed':
				showFriendsFeedEvent(event);
				break;
		}
	};

	/**
	 * Muestra (elem) al nivel del item de la lista (item)
	 *
	 * @param elem dom-element - Elemento DOM de la Hovercard
	 * @param item dom-element - Elemento DOM del elemento de la lista
	 * @return void
	 */
	function showHovercard(elem, item) {
		hideHovercards();
		elem.show();
		setHovercardPosition(elem, item);
	};

	/**
	 * Posiciona la hovercard (elem) al nivel del item de la lista (item)
	 *
	 * @param elem dom-element - Elemento DOM de la Hovercard
	 * @param item dom-element - Elemento DOM del elemento de la lista
	 * @return void
	 */
	function setHovercardPosition(elem, item) {

		// Recompilación variada de posiciones necesarias para el cálculo
		var itemTopPosition = item[fixpos]().top;


		// Posiciono la hovercard al nivel del item de la lista
		if(itemTopPosition > 0) {

			var elemTopPosition = ($.browser.webkit ? 0 : box.parent()[fixpos]().top) + itemTopPosition,
				elemLeftPosition = $('#main')[$.browser.msie?'offset':fixpos]().left + 386;

			elem.css({
				position: 'absolute',
				top: elemTopPosition + 'px',
				left: elemLeftPosition + 'px'
			})
		}

		var windowHeight = $(window).height() + $(window).scrollTop(),
			elemHeight = elem.find('.shout-live').outerHeight(true),
			elemOffset = elem.offset().top;

		// Si la hovercard se iba hacia abajo, se la sube para que sea visible
		// y se le acomoda el piquito al nivel del item de la lista
		if(windowHeight > elemOffset && windowHeight < elemHeight + elemOffset && windowHeight > elemHeight + 20) {

			elem.css('top', windowHeight - (elemHeight + 20));
			var arrowTopPosition = -(windowHeight - (elemHeight + elemOffset + 28));

			if(arrowTopPosition < (elemHeight - 30)) { // 28px arrow height
				elem.find('.shout-arrow').css('top', arrowTopPosition + 'px');
			} else {
				elem.hide();
			}

		}

	};

	/**
	 * Oculta y las hovercards
	 *
	 * @return void
	 */
	function hideHovercards() {
		$('.shout-live-box:visible').hide().css('top', '0px').find('.shout-arrow').css('top', '8px');
	};

	/**
	 * Muestra un evento Real Time (bubble)
	 *
	 * @param event object - Evento a mostrar
	 * @return void - Muestra el bubble
	 */
	function showRealTimeEvent(event){

		var url = '/feed-markAsRead.php?feedName=' + event.feedName + '&id=' + event.id + '&to=' + encodeURIComponent(event.object.link);
		event.shortText = event.shortText.replace(/(<\/?)a(\s|>)/ig, '$1span$2');

		$.createNotification({
			content: [
				'<img href="'+event.image.href+'" src="' + event.image.src + '"> ',
				'<p>',
					'<i class="icon ' + event.actionName + '"></i> ',
					event.shortText,
				'</p>'
			].join(''),
			vertical: 'bottom',
			limit: 5,
			queue: true,
			duration: 10000,
			link: url
		});

	};

	/**
	 * Muestra un evento dirigido al friendsfeed
	 *
	 * @param event object - Evento a mostrar
	 * @return void - Muestra el evento en la lista
	 */
	function showFriendsFeedEvent(event){

		var feedList = $('#friends-live-activity');

		if(feedList.length){

			autoScroll = true;

			// Agrego el item a la lista
			feedList.prepend(tmpl('friendlist_item', event));

			if(!hoverOnHovercard && !hoverOnList) {
				feedList.scrollTo(0, 500);
			}

			// Mantenemos el scroll para evitar sacar de hover el elemento actual
			feedList[0].scrollTop += 42;

			// Hago aparecer lo nuevo con una simple animación
			feedList.find('.list-item:hidden').fadeIn(400);

			// Remuevo los feeds más viejos // -1 debido al índice 0 que es tomado en cuenta
			feedList.find('.list-item:gt('+(feedsLimit-1)+')').remove();
		}

	};


	/**
	 * Muestra/Oculta los bubble de contadores con efecto
	 *
	 * @param element object - Bubble a actualizar
	 * @param value string - Valor a utilizar
	 * @return void - Actualiza la burbuja
	*/
	function bubbleAlertUpdate(name, value){
		el = $('#bubble-alert-' + name);

		//No existe el elemento
		if(!el.length){
			return;
		}

		//Oculto
		if(!value){
			el.animate({bottom: '+=5px'}, 100, null, function(){
				$(this).animate({bottom: '-=5px'}, 100, null, function(){
					$(this).slideUp(100);
				});
			});
			return;
		}

		//Actualizo
		el.find('a span').html(value);
		el.slideDown(100, function(){
			$(this).animate({bottom: '+=5px'}, 100, null, function(){
				$(this).animate({bottom: '-=5px'}, 100)
			});
		});
	};

	/**
	 * Actualiza el contador en el titulo del documento
	 *
	 * @return void - Titulo del DOM actualizado
	 */
	function updateTitleCounts(){
		var count = 0;

		//Sumo todos los contadores
		for(var name in counts){
			//Friendsfeed no lo cuento
			if(name == 'friendsfeed'){
				continue;
			}

			count += counts[name];
		}

		//Parseo el contador como un string (con los parentesis y todo)
		if(count){
			count = '(' + ((count >= 100) ? '+99' : count) + ') ';
		}else{
			count = '';
		}

		//Actualizo el titulo
		if(document.title != count + originalTitle){
			document.title = count + originalTitle;
		}
	};

	box.on('scroll', function() {

		if(!autoScroll) {
			hideHovercards();
			autoScroll = false;
		}

	}).on('mouseenter', '#friends-live-activity .list-item', function(event) {

		hoverOnList = true;

		// mouse enter
		var item = $(this),
			type = item.data('type'),
			action = item.data('action') || 'none',
			delay = $(event.relatedTarget).is('.list-item') ? 0 : 900;

		if(!type || $.inArray(type, types) < 0) {
			return;
		}

		var id = item.data('id'),
			owner = item.data('owner'),
			elem = $('#shout-live-'+type+'-'+id);

		item.addClass('active');
		clearInterval(leaveHovercard);
		leaveHovercard = false;

		if(!elem.length) {

			if(item.hasClass('active')) {

				//item.addClass('loading');
				//hideHovercards();
				$.ajax({
					url: '/ajax/shout-live.php',
					type: 'post',
					data: {type: type, id: id, owner: owner, action: action},
					success: function(html) {

						elem = $(html).appendTo('body');
						//if(item.hasClass('active loading')) {
						if(item.hasClass('active')) {
							showHovercard(elem, item);
						}
					},
					complete: function() {
						//item.removeClass('loading');
					}
				});
			}

		} else {
			
			setTimeout(function() {
				if(item.hasClass('active')) {
					showHovercard(elem, item);
				}
			}, 200)

		}

	}).on('mouseleave', '#friends-live-activity .list-item', function(event) {

		hoverOnList = false;

		var item = $(this),
			target = $(event.relatedTarget);

		box.find('.list-item.active').removeClass('active');

		leaveHovercard = setTimeout(function() {
			if(!hoverOnHovercard) {
				hideHovercards();
			}
		}, 700)

	});

	$('body').on('mouseenter', '.shout-live-box' ,function() {

		hoverOnHovercard = true;

	}).on('mouseleave', '.shout-live-box', function() {

		hoverOnHovercard = false;

		setTimeout(function() {
			if(!hoverOnHovercard && !hoverOnList) {
				hideHovercards();
			}
		}, 1000);

	}).on('click', '.shout-live-box .shout-stats.like', function(event) {

		event.preventDefault();

		if($(this).hasClass('disabled')) {
			return;
		}

		var btn = $(this),
			counter = btn.find('a'),
			shout = btn.closest('.shout-live-box'),
			id = shout.data('id'),
			owner = shout.data('owner');
			
		ajax('shout', 'vote', {
			uuid: id,
			owner: owner,
			score: 1
		});

		counter.html(+counter.html()+1);
		btn.addClass('disabled applied');
	}).on('click', '.shout-live-box .shout-stats.reshout', function(event) {

		event.preventDefault();

		if($(this).hasClass('disabled')) {
			return;
		}

		var btn = $(this),
			counter = btn.find('a'),
			shout = btn.closest('.shout-live-box'),
			id = shout.data('id'),
			owner = shout.data('owner');
			
		ajax('shout', 'add', {
			parent_id: id,
			parent_owner: owner
		});

		counter.html(+counter.html()+1);
		btn.addClass('disabled applied');
	}).on('click', '.shout-live-box .shout-stats.favorite', function(event) {

		event.preventDefault();

		var btn = $(this),
			counter = btn.find('a'),
			shout = btn.closest('.shout-live-box'),
			id = shout.data('id'),
			owner = shout.data('owner'),
			counterValue = +counter.html();

		if(btn.hasClass('disabled applied')) {
			var module = 'favorite-del';
			btn.removeClass('disabled applied');
			if(counterValue > 0) --counterValue;
		} else {
			var module = 'favorite-add';
			btn.addClass('disabled applied');
			++counterValue;
		}
			
		ajax('shout', module, {
			uuid: id,
			owner: owner
		});

		counter.html(counterValue);
	}).on('click', '.shout-live-box .shout-stats.reply', function(event) {

		event.preventDefault();

		window.location.href = $(this).attr('url');

	}).on('click', '.shout-live-box .shout-body .shout-text', function(event) {

		var target = $(event.target);

		if(!target.is('a')) {
			event.preventDefault();
			window.open(target.attr('url'));
		}

	});

	//Agrego canal
	Realtime.addChannel(channel, this, function(data){
		//Llegaron nuevos contadores
		if(typeof data['counts'] !== 'undefined'){
			this.updateCounts(data['counts']);
		}
		//Llegaron nuevos eventos
		if(typeof data['event'] !== 'undefined'){
			this.showEvent(data['event']);
		}
	});

	updateTitleCounts();

	//Envio actualizacion de contadores a todas las pestanas
	syncTabs.add('receiveData', [{'counts': counts}, channel]);


	//Declaro notifications como global, no se vuelve a inicializar
	notifications = this;
}function Feed2(initConfig){
	var config = {
		'feedName': '',
		'filterName': '',
		'lastId': ''
	};

	var fetchOffset = 750,
		inProcess = {
			'nextPage': false,
			'load': false
		},
		self = this,
		errorTimer = false;

	if(window.location.hash){
		window.location.href = window.location.hash.substr(1);
	}

	/**
	 * Actualiza valor en la configuracion
	 *
	 * @param name string - Nombre del parametro a actualizar (valida contra config)
	 * @param value mixed - Valor a almacenar
	 * @return void - Actualiza config
	 */
	this.setConfig = function(name, value){
		if(typeof config[name] !== 'undefined'){
			config[name] = value;
		}
	};
	for(var c in initConfig){
		this.setConfig(c, initConfig[c]);
	}

	/**
	 * Devuelve un valor de la configuracion del feed actual
	 *
	 * @param name string - Nombre del parametro a obtener (valida contra config)
	 * @return mixed - Valor almacenado
	 */
	this.getConfig = function(name){
		return (typeof config[name] !== 'undefined') ? config[name] : false;
	};

	/**
	 * Muestra/Oculta los controles del HTML dependiendo del feed en el que esta
	 *
	 * @param element object - Elemento donde se realizo el click (al que hay que agregarle la clase active)
	 * @return void - Modifica el DOM
	 */
	function showControls(element){
		//Agrego active
		$('.Feed-load').removeClass('active');

		$(element).addClass('active');

		//Fix - Highlight pins
		$('.pin-highlight').removeClass('pin-highlight');
		if(config['feedName'] == 'pin'){
			$(element).parent().addClass('pin-highlight');
		}

		//Es un feed dentro del mi
		if($.inArray(config['feedName'], ['newsfeed', 'thirdnotification', 'favorite', 'mention']) != -1){
			var controlsName = 'mi';

			//Submenu active
			$('#menu .Feed-load[data-feedname="newsfeed"]').addClass('active');
		}
		//No es un feed dentro del mi
		else{
			var controlsName = config['feedName'];
		}

		//Submenu active
		$('#menu .Feed-load[data-feedname="' + controlsName + '"]').addClass('active');

		//Muestro/Oculto controles
		$('.Feed-controls:not(#Feed-controls-' + controlsName + ')').hide();
		$('#Feed-controls-' + controlsName).show();

		//Si se hizo click en el menu, busco el elemento correspondiente entre los controles
		if($(element).closest('#menu')){
			if(config['filterName']){
				$('#Feed-controls-' + controlsName + ' .Feed-load[data-feedname="' + config['feedName'] + '"][data-filtername="' + config['filterName'] + '"]').addClass('active');
			}else{
				$('#Feed-controls-' + controlsName + ' .Feed-load[data-feedname="' + config['feedName'] + '"]').addClass('active');
			}
		}
	}


	/**
	 * Carga un feed
	 *
	 * @param feedName string - Nombre del feed a cargar
	 * @param filterName string - Nombre del filtro a aplicar
	 * @param url string - URL a modificar en el history
	 * @param element object - Elemento en donde se realizo la accion
	 * @return void - Carga el nuevo feed
	 */
	this.load = function(feedName, filterName, url, element){
		if(typeof filterName === 'undefined'){
			filterName = '';
		}

		//Ya esta cargando este feed
		if(config['feedName'] == feedName && config['filterName'] == filterName && inProcess['load']){
			return;
		}

		$('#Feed-list').addClass('loading');
		$('#Feed-error, #Feed-reload').hide();
		inProcess['load'] = true;
		clearInterval(errorTimer);

		//Cambio de feed
		if(config['feedName'] != feedName || config['filterName'] != filterName){
			config['feedName'] = feedName;
			config['filterName'] = filterName;

			//Receteo nextPage
			inProcess['nextPage'] = false;

			//Modifico los controles visibles para el nuevo feed
			showControls(element);

			//Modifico el history
			if (typeof url !== 'undefined') {
				if(history && history.pushState){
					history.pushState({path: url}, document.title, url);
				}else{
					window.location.hash = url;
				}
			}

			//Scrolleo hacia el inicio si estoy muy abajo
			if($(window).scrollTop() > $('#Feed-list').offset().top){
				$.scrollTo('#menu', 250);
			}
		}

		//Reseteo contador del feed
		notifications.resetCount(config['feedName']);

		//FIX - Reseteo contador especial de menciones
		if(config['feedName'] == 'mention'){
			$('#bubble-alert-mention').addClass('hide');
		}

		/* Cargo el feed */
		$.ajax({
			type: 'POST',
			dataType: 'html',
			url: '/ajax/feed/fetch',
			data: {
				'feedName': feedName,
				'filterName': filterName
			},
			success: function(html){
				if(feedName != config['feedName'] || filterName != config['filterName']){
					return;
				}

				_gaq.push([ '_trackPageview', window.location.pathname ]);

				//Imprimo el contenido
				$('#Feed-list').html(html);

				//Respuestas rapidas
				$('.shout-quick-reply.ubertext-me').uberText({
					limit: 512,
					block: true,
					autogrow: true
				});

				if (feedName === 'newsfeed') {
					saveListsFromContext();
				}

			},
			error: function(error){
				if(feedName != config['feedName'] || filterName != config['filterName']){
					return;
				}

				//Forbidden
				if(error.status == 403){
					window.location.reload();
					return;
				}

				$('#Feed-list').html('');

				//Imprimo el contenido
				$('#Feed-error').show();

				errorTimer = setTimeout(function(){
					self.load(feedName, filterName, url);
				}, 5000);
			},
			complete: function(){
				if(feedName != config['feedName'] || filterName != config['filterName']){
					return;
				}

				inProcess['load'] = false;
				$('#Feed-list').removeClass('loading');
			}
		});
	};

	/**
	 * Carga la siguiente pagina del feed actual
	 *
	 * @return void - Carga la pagina y la imprime
	 */
	this.nextPage = function(){
		if(inProcess['load'] || inProcess['nextPage'] || !config['lastId']){
			return;
		}
		inProcess['nextPage'] = true;

		clearInterval(errorTimer);
		$('#Feed-error').hide();

		$('#Feed-loading').show();

		var feedName = config['feedName'],
			filterName = config['filterName'];

		$.ajax({
			type: 'POST',
			dataType: 'html',
			url: '/ajax/feed/fetch',
			data: {
				'feedName': feedName,
				'filterName': filterName,
				'lastId': config['lastId']
			},
			success: function(html){
				if(feedName != config['feedName'] || filterName != config['filterName']){
					return;
				}

				_gaq.push([ '_trackPageview', window.location.pathname ]);

				//Imprimo el contenido
				$('#Feed-list').append(html);

				//Respuestas rapidas
				$('.shout-quick-reply.ubertext-me').uberText({
					limit: 512,
					block: true,
					autogrow: true
				});

				if (feedName === 'newsfeed') {
					saveListsFromContext();
				}

			},
			error: function(error){
				if(feedName != config['feedName'] || filterName != config['filterName']){
					return;
				}

				//Forbidden
				if(error.status == 403){
					window.location.reload();
					return;
				}

				$('#Feed-error').show();

				errorTimer = setTimeout(function(){
					self.nextPage();
				}, 5000);
			},
			complete: function(){
				if(feedName != config['feedName'] || filterName != config['filterName']){
					return;
				}

				inProcess['nextPage'] = false;
				$('#Feed-loading').hide();
			}
		});
	};

	//Cambio de feed
	$(document.body).on('click', '.Feed-load', function(event){
		event.preventDefault();
		self.load($(this).data('feedname'), $(this).attr('data-filtername'), $(this).attr('href'), this);
	});

	//Reload
	$('#Feed-reload').on('click', function(event){
		event.preventDefault();
		self.load(config['feedName'], config['filterName']);
	});

	//Infinit Scroll con nextPage
	$(window).scroll(function(){
		if($(window).scrollTop() + fetchOffset >= $(document).height() - $(window).height()) {
			self.nextPage();
		}
	});

	//Back history
	$(window).on('popstate', function(event){
		if(event.originalEvent.state){
			window.location.replace(event.originalEvent.state.path);
		}
	});

	//Populares
	//Abrir popup
	$('#Feed-controls-popular .select-toggle').click(function() {
		var object = $(this),
			list = $('#Feed-controls-popular [data-for=' + object.attr('id') + ']');
		list.toggle();
		$('#Feed-controls-popular .select-list').not(list).hide();
	});

	//Seleccionar opcion popup
	$('#Feed-controls-popular .select-list a').click(function() {
		var object = $(this),
			list = object.closest('.select-list'),
			toggle = list.siblings('a');
		toggle.find('.label').html(object.html());
		list.hide();
	});

	//Seleccionar opcion populares
	$('#Feed-controls-popular [data-popular-set]').click(function(event) {
		var object = $(this),
			set = object.attr('data-popular-set').split(':'),
			options = $('#popular-options');
		options.attr('data-' + set[0], set[1]);
		options.attr('data-filtername', '{"sort":"' + options.attr('data-sort') + '","attachment":"' + options.attr('data-attachment') + '","interval":"' + options.attr('data-interval') + '"}');
		options.trigger('click');
		object.closest('li').siblings('li').find('a').removeClass('active')
		object.addClass('active');
		event.preventDefault();
	});

	// guardar listas del contexto
	if (config['feedName'] === 'newsfeed') {
		saveListsFromContext();
	}

	Feed2 = this;
};var Shout = new function (){
	
};function htmlspecialchars (string, quote_style, charset, double_encode) {
  // http://kevin.vanzonneveld.net
  // +   original by: Mirek Slugen
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   bugfixed by: Nathan
  // +   bugfixed by: Arno
  // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
  // +      input by: Ratheous
  // +      input by: Mailfaker (http://www.weedem.fr/)
  // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
  // +      input by: felix
  // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
  // %        note 1: charset argument not supported
  // *     example 1: htmlspecialchars("<a href='test'>Test</a>", 'ENT_QUOTES');
  // *     returns 1: '&lt;a href=&#039;test&#039;&gt;Test&lt;/a&gt;'
  // *     example 2: htmlspecialchars("ab\"c'd", ['ENT_NOQUOTES', 'ENT_QUOTES']);
  // *     returns 2: 'ab"c&#039;d'
  // *     example 3: htmlspecialchars("my "&entity;" is still here", null, null, false);
  // *     returns 3: 'my &quot;&entity;&quot; is still here'
  var optTemp = 0,
    i = 0,
    noquotes = false;
  if (typeof quote_style === 'undefined' || quote_style === null) {
    quote_style = 2;
  }
  string = string.toString();
  if (double_encode !== false) { // Put this first to avoid double-encoding
    string = string.replace(/&/g, '&amp;');
  }
  string = string.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  var OPTS = {
    'ENT_NOQUOTES': 0,
    'ENT_HTML_QUOTE_SINGLE': 1,
    'ENT_HTML_QUOTE_DOUBLE': 2,
    'ENT_COMPAT': 2,
    'ENT_QUOTES': 3,
    'ENT_IGNORE': 4
  };
  if (quote_style === 0) {
    noquotes = true;
  }
  if (typeof quote_style !== 'number') { // Allow for a single string or an array of string flags
    quote_style = [].concat(quote_style);
    for (i = 0; i < quote_style.length; i++) {
      // Resolve string input to bitwise e.g. 'ENT_IGNORE' becomes 4
      if (OPTS[quote_style[i]] === 0) {
        noquotes = true;
      }
      else if (OPTS[quote_style[i]]) {
        optTemp = optTemp | OPTS[quote_style[i]];
      }
    }
    quote_style = optTemp;
  }
  if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
    string = string.replace(/'/g, '&#039;');
  }
  if (!noquotes) {
    string = string.replace(/"/g, '&quot;');
  }

  return string;
}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false*/

var Mustache;

(function (exports) {
  if (typeof module !== "undefined" && module.exports) {
    module.exports = exports; // CommonJS
  } else if (typeof define === "function") {
    define(exports); // AMD
  } else {
    Mustache = exports; // <script>
  }
}((function () {

  var exports = {};

  exports.name = "mustache.js";
  exports.version = "0.7.0";
  exports.tags = ["{{", "}}"];

  exports.Scanner = Scanner;
  exports.Context = Context;
  exports.Writer = Writer;

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var nonSpaceRe = /\S/;
  var eqRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  function testRe(re, string) {
    return RegExp.prototype.test.call(re, string);
  }

  function isWhitespace(string) {
    return !testRe(nonSpaceRe, string);
  }

  var isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };

  function escapeRe(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }

  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  exports.escape = escapeHtml;

  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function () {
    return this.tail === "";
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function (re) {
    var match = this.tail.match(re);

    if (match && match.index === 0) {
      this.tail = this.tail.substring(match[0].length);
      this.pos += match[0].length;
      return match[0];
    }

    return "";
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function (re) {
    var match, pos = this.tail.search(re);

    switch (pos) {
    case -1:
      match = this.tail;
      this.pos += this.tail.length;
      this.tail = "";
      break;
    case 0:
      match = "";
      break;
    default:
      match = this.tail.substring(0, pos);
      this.tail = this.tail.substring(pos);
      this.pos += pos;
    }

    return match;
  };

  function Context(view, parent) {
    this.view = view;
    this.parent = parent;
    this.clearCache();
  }

  Context.make = function (view) {
    return (view instanceof Context) ? view : new Context(view);
  };

  Context.prototype.clearCache = function () {
    this._cache = {};
  };

  Context.prototype.push = function (view) {
    return new Context(view, this);
  };

  Context.prototype.lookup = function (name) {
    var value = this._cache[name];

    if (!value) {
      if (name === ".") {
        value = this.view;
      } else {
        var context = this;

        while (context) {
          if (name.indexOf(".") > 0) {
            var names = name.split("."), i = 0;

            value = context.view;

            while (value && i < names.length) {
              value = value[names[i++]];
            }
          } else {
            value = context.view[name];
          }

          if (value != null) {
            break;
          }

          context = context.parent;
        }
      }

      this._cache[name] = value;
    }

    if (typeof value === "function") {
      value = value.call(this.view);
    }

    return value;
  };

  function Writer() {
    this.clearCache();
  }

  Writer.prototype.clearCache = function () {
    this._cache = {};
    this._partialCache = {};
  };

  Writer.prototype.compile = function (template, tags) {
    var fn = this._cache[template];

    if (!fn) {
      var tokens = exports.parse(template, tags);
      fn = this._cache[template] = this.compileTokens(tokens, template);
    }

    return fn;
  };

  Writer.prototype.compilePartial = function (name, template, tags) {
    var fn = this.compile(template, tags);
    this._partialCache[name] = fn;
    return fn;
  };

  Writer.prototype.compileTokens = function (tokens, template) {
    var fn = compileTokens(tokens);
    var self = this;

    return function (view, partials) {
      if (partials) {
        if (typeof partials === "function") {
          self._loadPartial = partials;
        } else {
          for (var name in partials) {
            self.compilePartial(name, partials[name]);
          }
        }
      }

      return fn(self, Context.make(view), template);
    };
  };

  Writer.prototype.render = function (template, view, partials) {
    return this.compile(template)(view, partials);
  };

  Writer.prototype._section = function (name, context, text, callback) {
    var value = context.lookup(name);

    switch (typeof value) {
    case "object":
      if (isArray(value)) {
        var buffer = "";

        for (var i = 0, len = value.length; i < len; ++i) {
          buffer += callback(this, context.push(value[i]));
        }

        return buffer;
      }

      return value ? callback(this, context.push(value)) : "";
    case "function":
      var self = this;
      var scopedRender = function (template) {
        return self.render(template, context);
      };

      var result = value.call(context.view, text, scopedRender);
      return result != null ? result : "";
    default:
      if (value) {
        return callback(this, context);
      }
    }

    return "";
  };

  Writer.prototype._inverted = function (name, context, callback) {
    var value = context.lookup(name);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0)) {
      return callback(this, context);
    }

    return "";
  };

  Writer.prototype._partial = function (name, context) {
    if (!(name in this._partialCache) && this._loadPartial) {
      this.compilePartial(name, this._loadPartial(name));
    }

    var fn = this._partialCache[name];

    return fn ? fn(context) : "";
  };

  Writer.prototype._name = function (name, context) {
    var value = context.lookup(name);

    if (typeof value === "function") {
      value = value.call(context.view);
    }

    return (value == null) ? "" : String(value);
  };

  Writer.prototype._escaped = function (name, context) {
    return exports.escape(this._name(name, context));
  };

  /**
   * Calculates the bounds of the section represented by the given `token` in
   * the original template by drilling down into nested sections to find the
   * last token that is part of that section. Returns an array of [start, end].
   */
  function sectionBounds(token) {
    var start = token[3];
    var end = start;

    var tokens;
    while ((tokens = token[4]) && tokens.length) {
      token = tokens[tokens.length - 1];
      end = token[3];
    }

    return [start, end];
  }

  /**
   * Low-level function that compiles the given `tokens` into a function
   * that accepts three arguments: a Writer, a Context, and the template.
   */
  function compileTokens(tokens) {
    var subRenders = {};

    function subRender(i, tokens, template) {
      if (!subRenders[i]) {
        var fn = compileTokens(tokens);
        subRenders[i] = function (writer, context) {
          return fn(writer, context, template);
        };
      }

      return subRenders[i];
    }

    return function (writer, context, template) {
      var buffer = "";
      var token, sectionText;

      for (var i = 0, len = tokens.length; i < len; ++i) {
        token = tokens[i];

        switch (token[0]) {
        case "#":
          sectionText = template.slice.apply(template, sectionBounds(token));
          buffer += writer._section(token[1], context, sectionText, subRender(i, token[4], template));
          break;
        case "^":
          buffer += writer._inverted(token[1], context, subRender(i, token[4], template));
          break;
        case ">":
          buffer += writer._partial(token[1], context);
          break;
        case "&":
          buffer += writer._name(token[1], context);
          break;
        case "name":
          buffer += writer._escaped(token[1], context);
          break;
        case "text":
          buffer += token[1];
          break;
        }
      }

      return buffer;
    };
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have a fifth item: an array that contains
   * all tokens in that section.
   */
  function nestTokens(tokens) {
    var tree = [];
    var collector = tree;
    var sections = [];
    var token, section;

    for (var i = 0; i < tokens.length; ++i) {
      token = tokens[i];

      switch (token[0]) {
      case "#":
      case "^":
        token[4] = [];
        sections.push(token);
        collector.push(token);
        collector = token[4];
        break;
      case "/":
        if (sections.length === 0) {
          throw new Error("Unopened section: " + token[1]);
        }

        section = sections.pop();

        if (section[1] !== token[1]) {
          throw new Error("Unclosed section: " + section[1]);
        }

        if (sections.length > 0) {
          collector = sections[sections.length - 1][4];
        } else {
          collector = tree;
        }
        break;
      default:
        collector.push(token);
      }
    }

    // Make sure there were no open sections when we're done.
    section = sections.pop();

    if (section) {
      throw new Error("Unclosed section: " + section[1]);
    }

    return tree;
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens(tokens) {
    var token, lastToken, squashedTokens = [];

    for (var i = 0; i < tokens.length; ++i) {
      token = tokens[i];

      if (lastToken && lastToken[0] === "text" && token[0] === "text") {
        lastToken[1] += token[1];
        lastToken[3] = token[3];
      } else {
        lastToken = token;
        squashedTokens.push(token);
      }
    }

    return squashedTokens; 
  }

  function escapeTags(tags) {
    if (tags.length !== 2) {
      throw new Error("Invalid tags: " + tags.join(" "));
    }

    return [
      new RegExp(escapeRe(tags[0]) + "\\s*"),
      new RegExp("\\s*" + escapeRe(tags[1]))
    ];
  }

  /**
   * Breaks up the given `template` string into a tree of token objects. If
   * `tags` is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. ["<%", "%>"]). Of
   * course, the default is to use mustaches (i.e. Mustache.tags).
   */
  exports.parse = function (template, tags) {
    tags = tags || exports.tags;

    var tagRes = escapeTags(tags);
    var scanner = new Scanner(template);

    var tokens = [],      // Buffer to hold the tokens
        spaces = [],      // Indices of whitespace tokens on the current line
        hasTag = false,   // Is there a {{tag}} on the current line?
        nonSpace = false; // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace() {
      if (hasTag && !nonSpace) {
        while (spaces.length) {
          tokens.splice(spaces.pop(), 1);
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var start, type, value, chr;

    while (!scanner.eos()) {
      start = scanner.pos;
      value = scanner.scanUntil(tagRes[0]);

      if (value) {
        for (var i = 0, len = value.length; i < len; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push(["text", chr, start, start + 1]);
          start += 1;

          if (chr === "\n") {
            stripSpace(); // Check for whitespace on the current line.
          }
        }
      }

      start = scanner.pos;

      // Match the opening tag.
      if (!scanner.scan(tagRes[0])) {
        break;
      }

      hasTag = true;
      type = scanner.scan(tagRe) || "name";

      // Skip any whitespace between tag and value.
      scanner.scan(whiteRe);

      // Extract the tag value.
      if (type === "=") {
        value = scanner.scanUntil(eqRe);
        scanner.scan(eqRe);
        scanner.scanUntil(tagRes[1]);
      } else if (type === "{") {
        var closeRe = new RegExp("\\s*" + escapeRe("}" + tags[1]));
        value = scanner.scanUntil(closeRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(tagRes[1]);
        type = "&";
      } else {
        value = scanner.scanUntil(tagRes[1]);
      }

      // Match the closing tag.
      if (!scanner.scan(tagRes[1])) {
        throw new Error("Unclosed tag at " + scanner.pos);
      }

      tokens.push([type, value, start, scanner.pos]);

      if (type === "name" || type === "{" || type === "&") {
        nonSpace = true;
      }

      // Set the tags for the next time around.
      if (type === "=") {
        tags = value.split(spaceRe);
        tagRes = escapeTags(tags);
      }
    }

    tokens = squashTokens(tokens);

    return nestTokens(tokens);
  };

  // The high-level clearCache, compile, compilePartial, and render functions
  // use this default writer.
  var _writer = new Writer();

  /**
   * Clears all cached templates and partials in the default writer.
   */
  exports.clearCache = function () {
    return _writer.clearCache();
  };

  /**
   * Compiles the given `template` to a reusable function using the default
   * writer.
   */
  exports.compile = function (template, tags) {
    return _writer.compile(template, tags);
  };

  /**
   * Compiles the partial with the given `name` and `template` to a reusable
   * function using the default writer.
   */
  exports.compilePartial = function (name, template, tags) {
    return _writer.compilePartial(name, template, tags);
  };

  /**
   * Compiles the given array of tokens (the output of a parse) to a reusable
   * function using the default writer.
   */
  exports.compileTokens = function (tokens, template) {
    return _writer.compileTokens(tokens, template);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  exports.render = function (template, view, partials) {
    return _writer.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.
  exports.to_html = function (template, view, partials, send) {
    var result = exports.render(template, view, partials);

    if (typeof send === "function") {
      send(result);
    } else {
      return result;
    }
  };

  return exports;

}())));Mustache.escape = function(value){
  return htmlspecialchars(value, ['ENT_COMPAT', 'ENT_IGNORE'], 'UTF-8', false);
}/**
 * Va de un numero a otro con cambios constantes
 *
 * @param number integer - Numero actual
 * @param newNumber integer - Numero al que se quiere ir
 * @param inMiliseconds integer - Cuantos segundos tiene disponibles para llegar
 * @param scope object - Scope de la funcion callback
 * @param callback function - Funcion de callback a ejecutar cada vez que tiene un nuevo numero
 * @return this
 */
function GoToNumber(number, newNumber, inMiliseconds, scope, callback){
	var timer = false;

	this.setNumbers = function(number, newNumber){
		clearInterval(timer);

		number = parseInt(number);
		newNumber = parseInt(newNumber);

		var time = +new Date(), //Marca de tiempo al iniciar
			increase = number < newNumber, //El numero debe ir incrementandose
			missing = increase ? newNumber - number : number - newNumber, //Diferencia numerica
			velocity = Math.floor(inMiliseconds / missing); //Velocidad a la que debe ir para llegar a tiempo

		//Si la velocidad es 0, es porque es menor el tiempo que la diferencia numerica
		if(!velocity){
			return callback.apply(scope, [newNumber]);
		}

		//Defino el interval
		timer = setInterval(function(){
			//Nuevo number
			if(increase){
				number++;
			}else{
				number--;
			}

			//Corrijo errores por retrazos del interval
			var diffError = (increase ? newNumber - number : number - newNumber) - Math.round((inMiliseconds - (+new Date() - time)) / velocity);
			if(diffError != 0){
				if(increase){
					number += diffError;
				}else{
					number -= diffError;
				}
			}

			//Llego al final
			if(number == newNumber || (increase && number > newNumber) || (!increase && number < newNumber)){
				number = newNumber;
				callback.apply(scope, [number]);
				clearInterval(timer);
				return;
			}

			callback.apply(scope, [number]);
		}, velocity);
	};

	this.setNumbers(number, newNumber);

	return this;
}/**
 * Mantiene las estadisticas moviendose en tiempo real
 *
 * @param channel string - Canal donde escuchar las estadisticas
 * @param element object - El box que contiene las estadisticas
 * @param stats object - Estadisticas actuales
 * @return void
 */
function LiveStats(channel, element, stats){
	var numbers = {};

	//Inicializo todos los numeros
	for(var type in stats['new']){
		(function(){
			var numberElement = $(element).find('[data-stats="' + type + '"]');

			//Instancio la clase GoToNumber
			numbers[type] = new GoToNumber(stats['old'][type], stats['new'][type], 60000, this, function(number){
				numberElement.html(my_number_format(number));
			});
		})();
	}

	//Agrego el canal
	Realtime.addChannel(channel, this, function(newStats){
		for(var type in stats['new']){
			numbers[type].setNumbers(newStats['old'][type], newStats['new'][type]);
		}
	});
}/**
 * Mantiene una lista actualizada en tiempo real
 *
 * @param channel string - Canal a escuchar
 * @param element object - Lista del DOM
 * @param listSize integer - Tamano de la lista a mantener
 * @param template string - Template a imprimir cuando lleguen datos
 * @return void
 */
function LiveList(channel, element, listSize, template){
	var hover = false;

	//Hover list
	$(element).on('mouseenter', function(){
		hover = true;
	}).on('mouseleave', function(){
		hover = false;
	});

	Realtime.addChannel(channel, this, function(data){
		if(hover){
			return;
		}

		//Limite de la lista
		var list = $(element).children();
		for(var i=list.length-1; i>listSize-2; i--){
			$(list[i]).remove();
		}

		//Inserto nuevo item a la lista
		var newElement = $(Mustache.render(template, data)).hide().fadeIn(400);
		$(element).prepend(newElement);
	});
}/**
 * Configuracion de la home de Posts en tiempo real
 */
function HomePostsRealtime(channels, stats){
	if(typeof channels === 'undefined' || typeof stats === 'undefined'){
		return false;
	}

	/**
	 * Last comments
	 */
	LiveList(channels['lastComments'], $('#lastCommentsBox-data'), 10, $('#Mustache_lastComments').html());

	/**
	 * Last posts
	 */
	LiveList(channels['lastPosts'], $('#lastPostsBox-data'), 50, $('#Mustache_lastPosts').html());

	/**
	 * Stats
	 */
	LiveStats(channels['stats'], $('#estadisticasBox'), stats);


	HomePostsRealtime = this;
}/**
 * Configuracion de la home de Comunidades en tiempo real
 */
function HomeCommunitiesRealtime(channels, stats){
	if(typeof channels === 'undefined' || typeof stats === 'undefined'){
		return false;
	}

	/**
	 * Last comments
	 */
	LiveList(channels['lastComments'], $('#lastCommentsBox-data'), 10, $('#Mustache_lastComments').html());

	/**
	 * Last topics
	 */
	LiveList(channels['lastTopics'], $('#lastTopicsBox-data'), 20, $('#Mustache_lastTopics').html());

	/**
	 * Stats
	 */
	LiveStats(channels['stats'], $('#estadisticasBox'), stats);


	HomeCommunitiesRealtime = this;
}/**
 * Configuracion de la home de una Comunidad en tiempo real
 */
function HomeCommunityRealtime(channels){
	if(typeof channels === 'undefined'){
		return false;
	}

	/**
	 * Last comments
	 */
	LiveList(channels['lastComments'], $('#lastCommentsBox-data'), 10, $('#Mustache_lastComments').html());

	/**
	 * Last topics
	 */
	LiveList(channels['lastTopics'], $('#comm-thread-list'), 20, $('#Mustache_lastTopicsCommunity').html());


	HomeCommunityRealtime = this;
}/**
 * Configuracion de un Tema en tiempo real
 */
function TopicRealtime(channels){
	if(typeof channels === 'undefined'){
		return false;
	}

	/**
	 * Last comments
	 */
	LiveList(channels['lastComments'], $('#lastCommentsBox-data'), 10, $('#Mustache_lastComments').html());


	TopicRealtime = this;
}