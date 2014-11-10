/*
 * timeago: a jQuery plugin, version: 0.9.2 (2010-09-14)
 * @requires jQuery v1.2.3 or later
 *
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2008-2010, Ryan McGeary (ryanonjavascript -[at]- mcgeary [*dot*] org)
 */
(function($) {
  $.timeago = function(timestamp) {
    if (timestamp instanceof Date) return inWords(timestamp);
    else if (typeof timestamp == "string") return inWords($.timeago.parse(timestamp));
    else return inWords($.timeago.datetime(timestamp));
  };
  var $t = $.timeago;

  $.extend($.timeago, {
    settings: {
      refreshMillis: 60000,
      allowFuture: false,
      strings: {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "ago",
        suffixFromNow: "from now",
        seconds: "less than a minute",
        minute: "about a minute",
        minutes: "%d minutes",
        hour: "about an hour",
        hours: "about %d hours",
        day: "a day",
        days: "%d days",
        month: "about a month",
        months: "%d months",
        year: "about a year",
        years: "%d years",
        numbers: []
      }
    },
    inWords: function(distanceMillis) {
      var $l = this.settings.strings;
      var prefix = $l.prefixAgo;
      var suffix = $l.suffixAgo;
      if (this.settings.allowFuture) {
        if (distanceMillis < 0) {
          prefix = $l.prefixFromNow;
          suffix = $l.suffixFromNow;
        }
        distanceMillis = Math.abs(distanceMillis);
      }

      var seconds = distanceMillis / 1000;
      var minutes = seconds / 60;
      var hours = minutes / 60;
      var days = hours / 24;
      var years = days / 365;

      function substitute(stringOrFunction, number) {
        var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction;
        var value = ($l.numbers && $l.numbers[number]) || number;
        return string.replace(/%d/i, value);
      }

      var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
        seconds < 90 && substitute($l.minute, 1) ||
        minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
        minutes < 90 && substitute($l.hour, 1) ||
        hours < 24 && substitute($l.hours, Math.round(hours)) ||
        hours < 48 && substitute($l.day, 1) ||
        days < 30 && substitute($l.days, Math.floor(days)) ||
        days < 60 && substitute($l.month, 1) ||
        days < 365 && substitute($l.months, Math.floor(days / 30)) ||
        years < 2 && substitute($l.year, 1) ||
        substitute($l.years, Math.floor(years));

      return $.trim([prefix, words, suffix].join(" "));
    },
    parse: function(iso8601) {
      var s = $.trim(iso8601);
      s = s.replace(/\.\d\d\d+/,""); // remove milliseconds
      s = s.replace(/-/,"/").replace(/-/,"/");
      s = s.replace(/T/," ").replace(/Z/," UTC");
      s = s.replace(/([\+-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
      return new Date(s);
    },
    datetime: function(elem) {
      // jQuery's `is()` doesn't play well with HTML5 in IE
      var isTime = $(elem).get(0).tagName.toLowerCase() == "time"; // $(elem).is("time");
      var iso8601 = isTime ? $(elem).attr("datetime") : $(elem).attr("title");
      return $t.parse(iso8601);
    }
  });

  $.fn.timeago = function() {
    var self = this;
    self.each(refresh);

    var $s = $t.settings;
    if ($s.refreshMillis > 0) {
      setInterval(function() { self.each(refresh); }, $s.refreshMillis);
    }
    return self;
  };

  function refresh() {
    var data = prepareData(this);
    if (!isNaN(data.datetime)) {
      $(this).text(inWords(data.datetime));
    }
    return this;
  }

  function prepareData(element) {
    element = $(element);
    if (!element.data("timeago")) {
      element.data("timeago", { datetime: $t.datetime(element) });
      var text = $.trim(element.text());
      if (text.length > 0) element.attr("title", text);
    }
    return element.data("timeago");
  }

  function inWords(date) {
    return $t.inWords(distance(date));
  }

  function distance(date) {
    return (new Date().getTime() - date.getTime());
  }

  // fix for IE6 suckage
  document.createElement("abbr");
  document.createElement("time");
})(jQuery);


(function(a){a.jGrowl=function(b,c){if(a("#jGrowl").size()==0){a('<div id="jGrowl"></div>').addClass((c&&c.position)?c.position:a.jGrowl.defaults.position).appendTo("body")}a("#jGrowl").jGrowl(b,c)};a.fn.jGrowl=function(b,d){if(a.isFunction(this.each)){var c=arguments;return this.each(function(){var e=this;if(a(this).data("jGrowl.instance")==undefined){a(this).data("jGrowl.instance",a.extend(new a.fn.jGrowl(),{notifications:[],element:null,interval:null}));a(this).data("jGrowl.instance").startup(this)}if(a.isFunction(a(this).data("jGrowl.instance")[b])){a(this).data("jGrowl.instance")[b].apply(a(this).data("jGrowl.instance"),a.makeArray(c).slice(1))}else{a(this).data("jGrowl.instance").create(b,d)}})}};a.extend(a.fn.jGrowl.prototype,{defaults:{pool:0,header:"",group:"",sticky:false,position:"top-right",glue:"after",theme:"default",themeState:"highlight",corners:"10px",check:250,life:3000,closeDuration:"normal",openDuration:"normal",easing:"swing",closer:true,closeTemplate:"&times;",closerTemplate:"<div>[ close all ]</div>",log:function(c,b,d){},beforeOpen:function(c,b,d){},afterOpen:function(c,b,d){},open:function(c,b,d){},beforeClose:function(c,b,d){},close:function(c,b,d){},animateOpen:{opacity:"show"},animateClose:{opacity:"hide"}},notifications:[],element:null,interval:null,create:function(b,c){var c=a.extend({},this.defaults,c);if(typeof c.speed!=="undefined"){c.openDuration=c.speed;c.closeDuration=c.speed}this.notifications.push({message:b,options:c});c.log.apply(this.element,[this.element,b,c])},render:function(d){var b=this;var c=d.message;var e=d.options;var d=a('<div class="jGrowl-notification '+e.themeState+" ui-corner-all"+((e.group!=undefined&&e.group!="")?" "+e.group:"")+'"><div class="jGrowl-close">'+e.closeTemplate+'</div><div class="jGrowl-header">'+e.header+'</div><div class="jGrowl-message">'+c+"</div></div>").data("jGrowl",e).addClass(e.theme).children("div.jGrowl-close").bind("click.jGrowl",function(){a(this).parent().trigger("jGrowl.close")}).parent();a(d).bind("mouseover.jGrowl",function(){a("div.jGrowl-notification",b.element).data("jGrowl.pause",true)}).bind("mouseout.jGrowl",function(){a("div.jGrowl-notification",b.element).data("jGrowl.pause",false)}).bind("jGrowl.beforeOpen",function(){if(e.beforeOpen.apply(d,[d,c,e,b.element])!=false){a(this).trigger("jGrowl.open")}}).bind("jGrowl.open",function(){if(e.open.apply(d,[d,c,e,b.element])!=false){if(e.glue=="after"){a("div.jGrowl-notification:last",b.element).after(d)}else{a("div.jGrowl-notification:first",b.element).before(d)}a(this).animate(e.animateOpen,e.openDuration,e.easing,function(){if(a.browser.msie&&(parseInt(a(this).css("opacity"),10)===1||parseInt(a(this).css("opacity"),10)===0)){this.style.removeAttribute("filter")}a(this).data("jGrowl").created=new Date();a(this).trigger("jGrowl.afterOpen")})}}).bind("jGrowl.afterOpen",function(){e.afterOpen.apply(d,[d,c,e,b.element])}).bind("jGrowl.beforeClose",function(){if(e.beforeClose.apply(d,[d,c,e,b.element])!=false){a(this).trigger("jGrowl.close")}}).bind("jGrowl.close",function(){a(this).data("jGrowl.pause",true);a(this).animate(e.animateClose,e.closeDuration,e.easing,function(){a(this).remove();var f=e.close.apply(d,[d,c,e,b.element]);if(a.isFunction(f)){f.apply(d,[d,c,e,b.element])}})}).trigger("jGrowl.beforeOpen");if(e.corners!=""&&a.fn.corner!=undefined){a(d).corner(e.corners)}if(a("div.jGrowl-notification:parent",b.element).size()>1&&a("div.jGrowl-closer",b.element).size()==0&&this.defaults.closer!=false){a(this.defaults.closerTemplate).addClass("jGrowl-closer ui-state-highlight ui-corner-all").addClass(this.defaults.theme).appendTo(b.element).animate(this.defaults.animateOpen,this.defaults.speed,this.defaults.easing).bind("click.jGrowl",function(){a(this).siblings().trigger("jGrowl.beforeClose");if(a.isFunction(b.defaults.closer)){b.defaults.closer.apply(a(this).parent()[0],[a(this).parent()[0]])}})}},update:function(){a(this.element).find("div.jGrowl-notification:parent").each(function(){if(a(this).data("jGrowl")!=undefined&&a(this).data("jGrowl").created!=undefined&&(a(this).data("jGrowl").created.getTime()+parseInt(a(this).data("jGrowl").life))<(new Date()).getTime()&&a(this).data("jGrowl").sticky!=true&&(a(this).data("jGrowl.pause")==undefined||a(this).data("jGrowl.pause")!=true)){a(this).trigger("jGrowl.beforeClose")}});if(this.notifications.length>0&&(this.defaults.pool==0||a(this.element).find("div.jGrowl-notification:parent").size()<this.defaults.pool)){this.render(this.notifications.shift())}if(a(this.element).find("div.jGrowl-notification:parent").size()<2){a(this.element).find("div.jGrowl-closer").animate(this.defaults.animateClose,this.defaults.speed,this.defaults.easing,function(){a(this).remove()})}},startup:function(b){this.element=a(b).addClass("jGrowl").append('<div class="jGrowl-notification"></div>');this.interval=setInterval(function(){a(b).data("jGrowl.instance").update()},parseInt(this.defaults.check));if(a.browser.msie&&parseInt(a.browser.version)<7&&!window.XMLHttpRequest){a(this.element).addClass("ie6")}},shutdown:function(){a(this.element).removeClass("jGrowl").find("div.jGrowl-notification").remove();clearInterval(this.interval)},close:function(){a(this.element).find("div.jGrowl-notification").each(function(){a(this).trigger("jGrowl.beforeClose")})}});a.jGrowl.defaults=a.fn.jGrowl.prototype.defaults})(jQuery);

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

(function( $ ){
  $.fn.autolink = function() {
    this.each( function() {
      var re, matches;
  		re = /(((http|https|ftp):\/\/|www\.)[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g;
  		$(this).html( $(this).html().replace(re, function(link) {
  		  var href;

  		  if ( /^www./.test(link) ) {
  		    href = 'http://' + link;
  		  }
  		  else {
  		    href = link;
  		  }

  		  return '<a href="' + href + '">' + link + '</a> ';
  		}));
    });
  };
})( jQuery );

/**
 * Unobtrusive scripting adapter for jQuery
 *
 * Requires jQuery 1.4.3 or later.
 * https://github.com/rails/jquery-ujs
 */

(function($) {
	// Triggers an event on an element and returns the event result
	function fire(obj, name, data) {
		var event = new $.Event(name);
		obj.trigger(event, data);
		return event.result !== false;
	}

	// Submits "remote" forms and links with ajax
	function handleRemote(element) {
		var method, url, data,
			dataType = element.attr('data-type') || ($.ajaxSettings && $.ajaxSettings.dataType);

		if (element.is('form')) {
			method = element.attr('method');
			url = element.attr('action');
			data = element.serializeArray();
			// memoized value from clicked submit button
			var button = element.data('ujs:submit-button');
			if (button) {
				data.push(button);
				element.data('ujs:submit-button', null);
			}
		} else {
			method = element.attr('data-method');
			url = element.attr('href');
			data = null;
		}

		$.ajax({
			url: url, type: method || 'GET', data: data, dataType: dataType,
			// stopping the "ajax:beforeSend" event will cancel the ajax request
			beforeSend: function(xhr, settings) {
				if (settings.dataType === undefined) {
					xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
				}
				return fire(element, 'ajax:beforeSend', [xhr, settings]);
			},
			success: function(data, status, xhr) {
				element.trigger('ajax:success', [data, status, xhr]);
			},
			complete: function(xhr, status) {
				element.trigger('ajax:complete', [xhr, status]);
			},
			error: function(xhr, status, error) {
				element.trigger('ajax:error', [xhr, status, error]);
			}
		});
	}

	// Handles "data-method" on links such as:
	// <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
	function handleMethod(link) {
		var href = link.attr('href'),
			method = link.attr('data-method'),
			csrf_token = $('meta[name=csrf-token]').attr('content'),
			csrf_param = $('meta[name=csrf-param]').attr('content'),
			form = $('<form method="post" action="' + href + '"></form>'),
			metadata_input = '<input name="_method" value="' + method + '" type="hidden" />';

		if (csrf_param !== undefined && csrf_token !== undefined) {
			metadata_input += '<input name="' + csrf_param + '" value="' + csrf_token + '" type="hidden" />';
		}

		form.hide().append(metadata_input).appendTo('body');
		form.submit();
	}

	function disableFormElements(form) {
		form.find('input[data-disable-with]').each(function() {
			var input = $(this);
			input.data('ujs:enable-with', input.val())
				.val(input.attr('data-disable-with'))
				.attr('disabled', 'disabled');
		});
	}

	function enableFormElements(form) {
		form.find('input[data-disable-with]').each(function() {
			var input = $(this);
			input.val(input.data('ujs:enable-with')).removeAttr('disabled');
		});
	}

	function allowAction(element) {
		var message = element.attr('data-confirm');
		return !message || (fire(element, 'confirm') && confirm(message));
	}

	$('a[data-confirm], a[data-method], a[data-remote]').live('click.rails', function(e) {
		var link = $(this);
		if (!allowAction(link)) return false;

		if (link.attr('data-remote')) {
			handleRemote(link);
			return false;
		} else if (link.attr('data-method')) {
			handleMethod(link);
			return false;
		}
	});

	$('form').live('submit.rails', function(e) {
		var form = $(this);
		if (!allowAction(form)) return false;

		if (form.attr('data-remote')) {
			handleRemote(form);
			return false;
		} else {
			disableFormElements(form);
		}
	});

	$('form input[type=submit], form button[type=submit], form button:not([type])').live('click.rails', function() {
		var button = $(this);
		if (!allowAction(button)) return false;
		// register the pressed submit button
		var name = button.attr('name'), data = name ? {name:name, value:button.val()} : null;
		button.closest('form').data('ujs:submit-button', data);
	});
	
	$('form').live('ajax:beforeSend.rails', function(event) {
		if (this == event.target) disableFormElements($(this));
	});

	$('form').live('ajax:complete.rails', function(event) {
		if (this == event.target) enableFormElements($(this));
	});
})( jQuery );

// Underscore.js 1.1.3
// (c) 2010 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){var p=this,C=p._,m={},j=Array.prototype,n=Object.prototype,i=j.slice,D=j.unshift,E=n.toString,q=n.hasOwnProperty,s=j.forEach,t=j.map,u=j.reduce,v=j.reduceRight,w=j.filter,x=j.every,y=j.some,o=j.indexOf,z=j.lastIndexOf;n=Array.isArray;var F=Object.keys,c=function(a){return new l(a)};if(typeof module!=="undefined"&&module.exports){module.exports=c;c._=c}else p._=c;c.VERSION="1.1.3";var k=c.each=c.forEach=function(a,b,d){if(s&&a.forEach===s)a.forEach(b,d);else if(c.isNumber(a.length))for(var e=
0,f=a.length;e<f;e++){if(b.call(d,a[e],e,a)===m)break}else for(e in a)if(q.call(a,e))if(b.call(d,a[e],e,a)===m)break};c.map=function(a,b,d){if(t&&a.map===t)return a.map(b,d);var e=[];k(a,function(f,g,h){e[e.length]=b.call(d,f,g,h)});return e};c.reduce=c.foldl=c.inject=function(a,b,d,e){var f=d!==void 0;if(u&&a.reduce===u){if(e)b=c.bind(b,e);return f?a.reduce(b,d):a.reduce(b)}k(a,function(g,h,G){d=!f&&h===0?g:b.call(e,d,g,h,G)});return d};c.reduceRight=c.foldr=function(a,b,d,e){if(v&&a.reduceRight===
v){if(e)b=c.bind(b,e);return d!==void 0?a.reduceRight(b,d):a.reduceRight(b)}a=(c.isArray(a)?a.slice():c.toArray(a)).reverse();return c.reduce(a,b,d,e)};c.find=c.detect=function(a,b,d){var e;A(a,function(f,g,h){if(b.call(d,f,g,h)){e=f;return true}});return e};c.filter=c.select=function(a,b,d){if(w&&a.filter===w)return a.filter(b,d);var e=[];k(a,function(f,g,h){if(b.call(d,f,g,h))e[e.length]=f});return e};c.reject=function(a,b,d){var e=[];k(a,function(f,g,h){b.call(d,f,g,h)||(e[e.length]=f)});return e};
c.every=c.all=function(a,b,d){b=b||c.identity;if(x&&a.every===x)return a.every(b,d);var e=true;k(a,function(f,g,h){if(!(e=e&&b.call(d,f,g,h)))return m});return e};var A=c.some=c.any=function(a,b,d){b=b||c.identity;if(y&&a.some===y)return a.some(b,d);var e=false;k(a,function(f,g,h){if(e=b.call(d,f,g,h))return m});return e};c.include=c.contains=function(a,b){if(o&&a.indexOf===o)return a.indexOf(b)!=-1;var d=false;A(a,function(e){if(d=e===b)return true});return d};c.invoke=function(a,b){var d=i.call(arguments,
2);return c.map(a,function(e){return(b?e[b]:e).apply(e,d)})};c.pluck=function(a,b){return c.map(a,function(d){return d[b]})};c.max=function(a,b,d){if(!b&&c.isArray(a))return Math.max.apply(Math,a);var e={computed:-Infinity};k(a,function(f,g,h){g=b?b.call(d,f,g,h):f;g>=e.computed&&(e={value:f,computed:g})});return e.value};c.min=function(a,b,d){if(!b&&c.isArray(a))return Math.min.apply(Math,a);var e={computed:Infinity};k(a,function(f,g,h){g=b?b.call(d,f,g,h):f;g<e.computed&&(e={value:f,computed:g})});
return e.value};c.sortBy=function(a,b,d){return c.pluck(c.map(a,function(e,f,g){return{value:e,criteria:b.call(d,e,f,g)}}).sort(function(e,f){var g=e.criteria,h=f.criteria;return g<h?-1:g>h?1:0}),"value")};c.sortedIndex=function(a,b,d){d=d||c.identity;for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(b)?e=g+1:f=g}return e};c.toArray=function(a){if(!a)return[];if(a.toArray)return a.toArray();if(c.isArray(a))return a;if(c.isArguments(a))return i.call(a);return c.values(a)};c.size=function(a){return c.toArray(a).length};
c.first=c.head=function(a,b,d){return b&&!d?i.call(a,0,b):a[0]};c.rest=c.tail=function(a,b,d){return i.call(a,c.isUndefined(b)||d?1:b)};c.last=function(a){return a[a.length-1]};c.compact=function(a){return c.filter(a,function(b){return!!b})};c.flatten=function(a){return c.reduce(a,function(b,d){if(c.isArray(d))return b.concat(c.flatten(d));b[b.length]=d;return b},[])};c.without=function(a){var b=i.call(arguments,1);return c.filter(a,function(d){return!c.include(b,d)})};c.uniq=c.unique=function(a,
b){return c.reduce(a,function(d,e,f){if(0==f||(b===true?c.last(d)!=e:!c.include(d,e)))d[d.length]=e;return d},[])};c.intersect=function(a){var b=i.call(arguments,1);return c.filter(c.uniq(a),function(d){return c.every(b,function(e){return c.indexOf(e,d)>=0})})};c.zip=function(){for(var a=i.call(arguments),b=c.max(c.pluck(a,"length")),d=Array(b),e=0;e<b;e++)d[e]=c.pluck(a,""+e);return d};c.indexOf=function(a,b){if(o&&a.indexOf===o)return a.indexOf(b);for(var d=0,e=a.length;d<e;d++)if(a[d]===b)return d;
return-1};c.lastIndexOf=function(a,b){if(z&&a.lastIndexOf===z)return a.lastIndexOf(b);for(var d=a.length;d--;)if(a[d]===b)return d;return-1};c.range=function(a,b,d){var e=i.call(arguments),f=e.length<=1;a=f?0:e[0];b=f?e[0]:e[1];d=e[2]||1;e=Math.max(Math.ceil((b-a)/d),0);f=0;for(var g=Array(e);f<e;){g[f++]=a;a+=d}return g};c.bind=function(a,b){var d=i.call(arguments,2);return function(){return a.apply(b||{},d.concat(i.call(arguments)))}};c.bindAll=function(a){var b=i.call(arguments,1);if(b.length==
0)b=c.functions(a);k(b,function(d){a[d]=c.bind(a[d],a)});return a};c.memoize=function(a,b){var d={};b=b||c.identity;return function(){var e=b.apply(this,arguments);return e in d?d[e]:d[e]=a.apply(this,arguments)}};c.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};c.defer=function(a){return c.delay.apply(c,[a,1].concat(i.call(arguments,1)))};var B=function(a,b,d){var e;return function(){var f=this,g=arguments,h=function(){e=null;a.apply(f,g)};d&&
clearTimeout(e);if(d||!e)e=setTimeout(h,b)}};c.throttle=function(a,b){return B(a,b,false)};c.debounce=function(a,b){return B(a,b,true)};c.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments));return b.apply(b,d)}};c.compose=function(){var a=i.call(arguments);return function(){for(var b=i.call(arguments),d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};c.keys=F||function(a){if(c.isArray(a))return c.range(0,a.length);var b=[],d;for(d in a)if(q.call(a,d))b[b.length]=d;return b};
c.values=function(a){return c.map(a,c.identity)};c.functions=c.methods=function(a){return c.filter(c.keys(a),function(b){return c.isFunction(a[b])}).sort()};c.extend=function(a){k(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};c.clone=function(a){return c.isArray(a)?a.slice():c.extend({},a)};c.tap=function(a,b){b(a);return a};c.isEqual=function(a,b){if(a===b)return true;var d=typeof a;if(d!=typeof b)return false;if(a==b)return true;if(!a&&b||a&&!b)return false;if(a.isEqual)return a.isEqual(b);
if(c.isDate(a)&&c.isDate(b))return a.getTime()===b.getTime();if(c.isNaN(a)&&c.isNaN(b))return false;if(c.isRegExp(a)&&c.isRegExp(b))return a.source===b.source&&a.global===b.global&&a.ignoreCase===b.ignoreCase&&a.multiline===b.multiline;if(d!=="object")return false;if(a.length&&a.length!==b.length)return false;d=c.keys(a);var e=c.keys(b);if(d.length!=e.length)return false;for(var f in a)if(!(f in b)||!c.isEqual(a[f],b[f]))return false;return true};c.isEmpty=function(a){if(c.isArray(a)||c.isString(a))return a.length===
0;for(var b in a)if(q.call(a,b))return false;return true};c.isElement=function(a){return!!(a&&a.nodeType==1)};c.isArray=n||function(a){return!!(a&&a.concat&&a.unshift&&!a.callee)};c.isArguments=function(a){return!!(a&&a.callee)};c.isFunction=function(a){return!!(a&&a.constructor&&a.call&&a.apply)};c.isString=function(a){return!!(a===""||a&&a.charCodeAt&&a.substr)};c.isNumber=function(a){return!!(a===0||a&&a.toExponential&&a.toFixed)};c.isNaN=function(a){return E.call(a)==="[object Number]"&&isNaN(a)};
c.isBoolean=function(a){return a===true||a===false};c.isDate=function(a){return!!(a&&a.getTimezoneOffset&&a.setUTCFullYear)};c.isRegExp=function(a){return!!(a&&a.test&&a.exec&&(a.ignoreCase||a.ignoreCase===false))};c.isNull=function(a){return a===null};c.isUndefined=function(a){return a===void 0};c.noConflict=function(){p._=C;return this};c.identity=function(a){return a};c.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};c.mixin=function(a){k(c.functions(a),function(b){H(b,c[b]=a[b])})};var I=
0;c.uniqueId=function(a){var b=I++;return a?a+b:b};c.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g};c.template=function(a,b){var d=c.templateSettings;d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.interpolate,function(e,f){return"',"+f.replace(/\\'/g,"'")+",'"}).replace(d.evaluate||null,function(e,f){return"');"+f.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,
"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');";d=new Function("obj",d);return b?d(b):d};var l=function(a){this._wrapped=a};c.prototype=l.prototype;var r=function(a,b){return b?c(a).chain():a},H=function(a,b){l.prototype[a]=function(){var d=i.call(arguments);D.call(d,this._wrapped);return r(b.apply(c,d),this._chain)}};c.mixin(c);k(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=j[a];l.prototype[a]=function(){b.apply(this._wrapped,arguments);
return r(this._wrapped,this._chain)}});k(["concat","join","slice"],function(a){var b=j[a];l.prototype[a]=function(){return r(b.apply(this._wrapped,arguments),this._chain)}});l.prototype.chain=function(){this._chain=true;return this};l.prototype.value=function(){return this._wrapped}})();



function ClearForm() {
  document.new_invitation.invitation_email.value= "";
}

function countdown(iso8601) {
  date = $.timeago.parse(iso8601)
  days = Math.round((date.getTime() - new Date().getTime()) / 1000 / 60 / 60 / 24);
  var suffix;
  
  if (days < -1) {
    days = -days;
    suffix = " days late";
  }
  else if (days == -1) {
    days = -days;
    suffix = " day late";
  }
  else if (days > 1 || days == 0) {
    suffix = " days";
  }
  else if (days == 1) {
    suffix = " day";
  };
  
  return (days + suffix);
}


jQuery(function() {

	var organization = $("#organization_nav h1 a").text();
	$("#organization_nav").hover(function() {
		$(this).find("a:first").text("Edit");
	}, function() {
		$(this).find("a:first").text(organization);
	});

  // Timeline

  var scroll = 448;
  var maxScroll = $("#months").width() - $("#timeline").width() - 870;
  var currentScroll = 0;

  function updateTimelineNavigation() {
    if($("#timeline").length > 0) {
      if (currentScroll < maxScroll) {
        $("a[href='#next']").addClass("active");
      } else {
        $("a[href='#next']").removeClass("active");
      }

      if (currentScroll >= scroll) {
        $("a[href='#prev']").addClass("active");
      } else {
        $("a[href='#prev']").removeClass("active");
      }
    }
  };
  updateTimelineNavigation();

  $("a[href='#next']").click(function() {
    if (currentScroll < maxScroll) {
      $("#timeline .project, .month, #today_bar").animate({ left: "-=" + scroll + "px" });
      currentScroll += scroll;
      updateTimelineNavigation();
    }
    return false;
  });

  $("a[href='#prev']").click(function() {
    if (currentScroll >= scroll) {
      $("#timeline .project, .month, #today_bar").animate({ left: "+=" + scroll + "px" });
      currentScroll -= scroll;
      updateTimelineNavigation();
    }
    return false;
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 37) {
      $("a[href='#prev']").click();
    }
    if (e.keyCode == 39) {
      $("a[href='#next']").click();
    }
  });

  if ($("#inner_timeline").length == 1) {
    var top = $("#inner_timeline").height() / 2 - $("#outer_timeline a.nav img").height() / 2
    $("#outer_timeline a.nav").css({ top: top + "px" });
  }

  // Filters
  var ProjectToggle = function(elements) {
    var self = this;
    self.elements = $(elements);
    self.elements.click(function() {
      $(this).addClass("selected").siblings().removeClass("selected");
      applyProjectFilters();
    });
    return self;
  };
  ProjectToggle.prototype.filterType = function() {
    var element = this.elements.first();
    return element.data("type");
  };
  ProjectToggle.prototype.filterValue = function() {
    var element = this.elements.filter(".selected");
    return element.data("value");
  };

  var ProjectCustomDropdown = function(element) {
    var self = this;
    self.element = $(element);
    self.options = self.element.find(".options");
    self.current = element.find(".current");
    /* self.current.css("width", _.max(_.map(self.options.children, function(option) { return $(option).width(); }))); */

    self.options.hide();
    self.element.click(function(e) {
      if($("body > .options").length == 0) {
        var select = self.options.clone();
        select.css({"display": "block", "position": "absolute", "left": e.pageX + "px", "top": e.pageY + "px"});
        var hide = function() {
          select.remove();
          $(this).unbind("click", hide);
        }
        select.click(function(e) {
          var selection = $(e.target);
          if(selection.data("value")) {
            self.current.text(selection.text());
            self.options.children().removeClass("selected");
            self.options.children("[data-value=" + selection.data("value") + "]").addClass("selected");
            applyProjectFilters();
            hide();
          }
          e.stopPropagation();
        });
        $("body").append(select).click(hide);
      }
      e.stopPropagation();
    });
    return self;
  };
  ProjectCustomDropdown.prototype.filterType = function() {
    return this.element.data("type");
  };
  ProjectCustomDropdown.prototype.filterValue = function() {
    var element = this.options.find(".selected");
    return element.data("value");
  };

  var projectFilters = [];
  projectFilters.push(new ProjectToggle($(".project_status a")));
  projectFilters.push(new ProjectCustomDropdown($(".project_mate")));

  applyProjectFilters();

  function applyProjectFilters() {
    var values = [];
    _.each(projectFilters, function(filter) {
      values.push([filter.filterType(), filter.filterValue()]);
    });

    var timelineProjects = $(".filterable_project").removeClass("dimmed");

    values = _.reject(values, function(val) { return val[1] == "all"; });
    if(_.isEmpty(values)) {
      timelineProjects.fadeTo("fast", 1.0);
    } else {
      _.each(values, function(val) {
        var type = val[0];
        var value = val[1];

        if(type == "user") {
          timelineProjects.filter(function() {
            return !_.include($(this).data("users"), parseInt(value));
          }).fadeTo("fast", 0.1).addClass("dimmed");
        } else if(type == "project_status") {
          $(".filterable_project[data-state!=" + value + "]").fadeTo("fast", 0.1).addClass("dimmed");
        }
      });
      timelineProjects.filter(function() { return !$(this).hasClass("dimmed")}).fadeTo("fast", 1.0);
    }
  }
  
  // Project form
  // $(".relatize").relatizeDate();
  $.timeago.settings.allowFuture = true;
  $("abbr.timeago").timeago();
  
  $.timeago.settings.strings = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: null,
    suffixFromNow: null,
    seconds: "Today",
    minute: "Today",
    minutes: "Today",
    hour: "Today",
    hours: "Today",
    day: "Yesterday",
    days: "%d days ago",
    month: "%d days ago",
    months: "%d months ago",
    year: "%d months ago",
    years: "%d years ago",
    numbers: []
  };
  
  $("abbr.date_to_words").timeago();
  
  $("abbr.countdown").text(function() {
    var text = countdown($(this).attr("title"));
    $(this).attr("title", text);
    return text;
  });
  
  if ( $('.datepicker').length ) {
    $(".datepicker").datepicker({ dateFormat: 'd MM yy' });
  };
  
  $(".project_state label.collection_radio").click(function() {
    $(this).addClass("selected").siblings().removeClass("selected");
  });

  $(".project_state input.radio").hide().filter(":checked").each(function() {
    $("label[for=" + this.id + "]").click();
  });
  
  $("input.person:checked").each(function(){
    $("label[for=" + $(this).attr("id") + "]").addClass("selected");
  });

  $("input.person").hide();
  
  $(".person label.collection_check_boxes").click(function() {
    if ($("#" + $(this).attr("for")).attr("checked") == true)
    {
      $(this).removeClass("selected");
    }
    else
    {
      $(this).addClass("selected");
    }
  });
  
  $(".copy_url").click(function() {
    $(this).focus().select();
  });

  $(".projectcontent, #timeline .project").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
  });

  $("#onav").hide(); 

  $("#organization_nav #control").click(function (e) {
    $(this).next("#onav").slideToggle("fast");
    e.stopPropagation();
  });
 
  $("body").click(function () {
    $("#onav").hide();
  });

  $("#timeline .project").hover(function() {
    $(this).css({ overflow: "visible" });
  }, function() {
    $(this).css({ overflow: "hidden" });
  });
  
  if ($.browser.webkit) {
      $('input').attr('autocomplete', 'off');
  }
  
  if ( $('meta[name="broadcast-title"]').length ) {
    $.jGrowl($('meta[name="broadcast-text"]').attr("content"), {
      sticky: true, 
      header: $('meta[name="broadcast-title"]').attr("content"),
      close: function() {
        $.ajax({
          url: $('meta[name="broadcast-url"]').attr("content"),
          type: 'POST'
        });
      }
    })
  }
  
  if ( $('.magic_datepicker').length ) {
    $(".magic_datepicker").datepicker({
      showOn: "button",
      buttonText: "\\",
      onSelect: function(dateText, inst) {
        $("#broadcast_expiry_1i").val(inst.selectedYear);
        $("#broadcast_expiry_2i").val(inst.selectedMonth + 1);
        $("#broadcast_expiry_3i").val(inst.selectedDay);
      }
    });
  };
  
  $("#demo a").click(function() {
    $("#spinner").show();
  });
  
  $("#more_statuses_link").css("display", "block");
  
  $("span.text").autolink();
});
