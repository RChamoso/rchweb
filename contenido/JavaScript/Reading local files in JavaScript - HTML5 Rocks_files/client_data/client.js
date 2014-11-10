var DISQUS=function(g){var d=g.DISQUS||{};d.AssertionError=function(a){this.message=a};d.AssertionError.prototype.toString=function(){return"Assertion Error: "+(this.message||"[no message]")};d.assert=function(a,b,e){if(!a)if(e)g.console&&g.console.log("DISQUS assertion failed: "+b);else throw new d.AssertionError(b);};var b=[];d.define=function(a,h){typeof a==="function"&&(h=a,a="");for(var e=a.split("."),c=e.shift(),f=d,o=(h||function(){return{}}).call({overwrites:function(c){c.__overwrites__=!0;
return c}},g);c;)f=f[c]?f[c]:f[c]={},c=e.shift();for(var j in o)o.hasOwnProperty(j)&&(!o.__overwrites__&&f[j]!==null&&d.assert(!f.hasOwnProperty(j),"Unsafe attempt to redefine existing module: "+j,!0),f[j]=o[j],b.push(function(c,f){return function(){delete c[f]}}(f,j)));return f};d.use=function(a){return d.define(a)};d.cleanup=function(){for(var a=0;a<b.length;a++)b[a]()};return d}(window);
DISQUS.define(function(g,d){var b=g.DISQUS,a=g.document,h=a.getElementsByTagName("head")[0]||a.body,e={running:!1,timer:null,queue:[]};b.defer=function(c,f){function a(){var c=e.queue;if(c.length===0)e.running=!1,clearInterval(e.timer);for(var f=0,b;b=c[f];f++)b[0]()&&(c.splice(f--,1),b[1]())}e.queue.push([c,f]);a();if(!e.running)e.running=!0,e.timer=setInterval(a,100)};b.each=function(c,f){var a=c.length,b=Array.prototype.forEach;if(isNaN(a))for(var h in c)c.hasOwnProperty(h)&&f(c[h],h,c);else if(b)b.call(c,
f);else for(b=0;b<a;b++)f(c[b],b,c)};b.extend=function(c){b.each(Array.prototype.slice.call(arguments,1),function(f){for(var a in f)c[a]=f[a]});return c};b.serializeArgs=function(c){var a=[];b.each(c,function(c,b){c!==d&&a.push(b+(c!==null?"="+encodeURIComponent(c):""))});return a.join("&")};b.isString=function(c){return Object.prototype.toString.call(c)==="[object String]"};b.serialize=function(c,a,h){a&&(c+=~c.indexOf("?")?c.charAt(c.length-1)=="&"?"":"&":"?",c+=b.serializeArgs(a));if(h)return a=
{},a[(new Date).getTime()]=null,b.serialize(c,a);a=c.length;return c.charAt(a-1)=="&"?c.slice(0,a-1):c};b.require=function(c,f,e,d,l){function g(a){if(a.type=="load"||/^(complete|loaded)$/.test(a.target.readyState))d&&d(),q&&clearTimeout(q),b.bean.remove(a.target,p,g)}var k=a.createElement("script"),p=k.addEventListener?"load":"readystatechange",q=null;k.src=b.serialize(c,f,e);k.async=!0;k.charset="UTF-8";(d||l)&&b.bean.add(k,p,g);l&&(q=setTimeout(function(){l()},2E4));h.appendChild(k);return b};
b.requireStylesheet=function(c,f,e){var d=a.createElement("link");d.rel="stylesheet";d.type="text/css";d.href=b.serialize(c,f,e);h.appendChild(d);return b};b.requireSet=function(a,f,h){var e=a.length;b.each(a,function(a){b.require(a,{},f,function(){--e===0&&h()})})};b.injectCss=function(c){var b=a.createElement("style");b.setAttribute("type","text/css");c=c.replace(/\}/g,"}\n");g.location.href.match(/^https/)&&(c=c.replace(/http:\/\//g,"https://"));b.styleSheet?b.styleSheet.cssText=c:b.appendChild(a.createTextNode(c));
h.appendChild(b)}});
DISQUS.define("JSON",function(){function g(a){return a<10?"0"+a:a}function d(a){c.lastIndex=0;return c.test(a)?'"'+a.replace(c,function(a){var c=j[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function b(a,c){var e,g,j,m,k=f,n,i=c[a];i&&typeof i==="object"&&typeof i.toJSON==="function"&&!h&&(i=i.toJSON(a));typeof l==="function"&&(i=l.call(c,a,i));switch(typeof i){case "string":return d(i);case "number":return isFinite(i)?String(i):"null";case "boolean":case "null":return String(i);
case "object":if(!i)return"null";f+=o;n=[];if(Object.prototype.toString.apply(i)==="[object Array]"){m=i.length;for(e=0;e<m;e+=1)n[e]=b(e,i)||"null";j=n.length===0?"[]":f?"[\n"+f+n.join(",\n"+f)+"\n"+k+"]":"["+n.join(",")+"]";f=k;return j}if(l&&typeof l==="object"){m=l.length;for(e=0;e<m;e+=1)g=l[e],typeof g==="string"&&(j=b(g,i))&&n.push(d(g)+(f?": ":":")+j)}else for(g in i)Object.hasOwnProperty.call(i,g)&&(j=b(g,i))&&n.push(d(g)+(f?": ":":")+j);j=n.length===0?"{}":f?"{\n"+f+n.join(",\n"+f)+"\n"+
k+"}":"{"+n.join(",")+"}";f=k;return j}}var a={},h=!1;if(typeof Date.prototype.toJSON!=="function")Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+g(this.getUTCMonth()+1)+"-"+g(this.getUTCDate())+"T"+g(this.getUTCHours())+":"+g(this.getUTCMinutes())+":"+g(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
c=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,f,o,j={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},l;a.stringify=function(a,c,h){var e;o=f="";if(typeof h==="number")for(e=0;e<h;e+=1)o+=" ";else typeof h==="string"&&(o=h);if((l=c)&&typeof c!=="function"&&(typeof c!=="object"||typeof c.length!=="number"))throw Error("JSON.stringify");return b("",{"":a})};a.parse=function(a,c){function b(a,
h){var e,f,d=a[h];if(d&&typeof d==="object")for(e in d)Object.hasOwnProperty.call(d,e)&&(f=b(d,e),f!==void 0?d[e]=f:delete d[e]);return c.call(a,h,d)}var h,a=String(a);e.lastIndex=0;e.test(a)&&(a=a.replace(e,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return h=eval("("+a+")"),
typeof c==="function"?b({"":h},""):h;throw new SyntaxError("JSON.parse");};var m={a:[1,2,3]},k,p;if(Object.toJSON&&Object.toJSON(m).replace(/\s/g,"")==='{"a":[1,2,3]}')k=Object.toJSON;typeof String.prototype.evalJSON==="function"&&(m='{"a":[1,2,3]}'.evalJSON(),m.a&&m.a.length===3&&m.a[2]===3&&(p=function(a){return a.evalJSON()}));(function(){var a=[1,2,3];typeof a.toJSON==="function"&&(a=a.toJSON(),h=!(a&&a.length===3&&a[2]===3))})();if(h||!k||!p)return{stringify:a.stringify,parse:a.parse};return{stringify:k,
parse:p}});
DISQUS.define("Bus",function(){function g(a){a=a.split("/");return a[0]+"//"+a[2]}var d=DISQUS.use("JSON"),b=window.location.hash.slice(1),a=window.parent,h=document.referrer,e={};e.client=g(document.location.href);e.host=h?g(h):e.client;return{origins:e,postMessage:function(c){c.sender=b;c=d.stringify(c);a.postMessage(c,e.host)},sendHostMessage:function(a,b){b=b||[];DISQUS.Bus.postMessage({scope:"host",name:a,data:b})},sendGlobalMessage:function(a,b){b=b||[];DISQUS.Bus.postMessage({scope:"global",name:a,
data:b})}}});_.extend(DISQUS.Bus,Backbone.Events);$(document).ready(function(){var g=window.addEventListener?window.addEventListener:window.attachEvent,d=window.addEventListener?"message":"onmessage";if(!g)throw Error("No event support.");g(d,function(b){var a=DISQUS.Bus,h=b.origin;if(!(h!=a.origins.client&&h!=a.origins.host)){var e;try{e=DISQUS.JSON.parse(b.data)}catch(c){return}b=e.data;switch(e.scope){case "client":a.trigger(b.eventName,b.data)}}},!1)});
DISQUS.define(function(g,d){var b={blocks:{},ISO_8601:"YYYY-MM-DDTHH:mm:ssZ",apiKey:"E8Uh5l5fHZ6gD8U3KycjAIAk46f68Zw7C6eW8WSjZvCLXebZ7p0r1yrYDrLilk2F",bean:require("bean"),debug:!1,browser:{mobile:navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i)},modules:{},strings:{translations:{}}};b.strings.get=_.bind(function(a){var b=this.translations[a];return b!==d?b:a},b.strings);b.interpolate=function(a,b){return a.replace(/%\(\w+\)s/g,function(c){var c=c.slice(2,-2),f="";c in b?f=
b[c]!==d&&b[c]!==null?b[c].toString():"":DISQUS.logError&&DISQUS.logError("Key `"+c+"` not found in context for: ",a);return f})};b.addBlocks=function(){return function(a){a(DISQUS)}};b.templateGlobals={urls:DISQUS.use("urls"),sso:null,gettext:b.strings.get};b.renderBlock=function(a,e){return DISQUS.blocks[a](b.templateGlobals,e)};b.assureOffset=function(a){return a.indexOf("+")>=0?a:a+"+00:00"};var a=b.Builder=function(){this.accum=[]};_.extend(a.prototype,{put:function(a){this.accum.push(a)},esc:function(a){return String(a).replace(/&/g,
"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")},compile:function(){return this.accum.join("")}});return b});
DISQUS.define("urls",function(){var g=DISQUS.debug?"/js/src/embed/next/vglnk.js":"/build/next/alfie.js",d=encodeURIComponent(document.referrer),b={root:"http://disqus.com",media:"http://mediacdn.disqus.com/1356037604",loading:"http://mediacdn.disqus.com/1356037604/html/simple-loading.html",realertime:"",login:"https://disqus.com/next/login/",api:"http://disqus.com/api/3.0/",apiSecure:"https://disqus.com/api/3.0/",logout:"http://disqus.com/logout/?redirect="+d,editProfile:"http://disqus.com/account/",
verifyEmail:"https://disqus.com/next/verify/",authorize:"https://disqus.com/api/oauth/2.0/authorize/",moderate:"http://disqus.com/admin/moderate/",oauth:{twitter:"http://disqus.com/_ax/twitter/begin/",google:"http://disqus.com/_ax/google/begin/",facebook:"http://disqus.com/_ax/facebook/begin/"},avatar:{generic:"http://mediacdn.disqus.com/1356037604/images/noavatar92.png"},linkAffiliatorClient:"http://mediacdn.disqus.com/1356037604"+g};window.location.protocol==="https:"&&(b=_.extend(b,{root:"",media:"",
loading:"/html/simple-loading.html",api:b.apiSecure,logout:"https://disqus.com/logout/?redirect="+d,editProfile:"https://disqus.com/account/",moderate:"https://disqus.com/admin/moderate/",oauth:{twitter:"https://disqus.com/_ax/twitter/begin/",google:"https://disqus.com/_ax/google/begin/",facebook:"http://disqus.com/_ax/facebook/begin/"},avatar:{generic:"/images/noavatar92.png"},linkAffiliatorClient:""+g}));return b});
DISQUS.define("api",function(){function g(a){function b(c){var d=c.originalEvent.origin;DISQUS.urls.apiSecure.slice(0,d.length)===d&&(c=DISQUS.JSON.parse(c.originalEvent.data),c.requestId===e&&(d=c.code===0?a.success:a.error,delete c.requestId,(d||function(){})(c),document.body.removeChild(g),document.body.removeChild(f),$(window).unbind("message",b)))}var e=_.uniqueId("ft_"),c=document.createElement("div"),f=document.createElement("form"),d="frame_"+e,g;c.innerHTML='<iframe name="'+d+'"></iframe>';
g=c.childNodes[0];f.target=d;f.action=a.url.replace(".json",".pm");f.method=a.method||"GET";a.data=_.extend(a.data,{callback:e,referrer:document.referrer});_.each(a.data,function(a,b){a===!0?a=[1]:a===!1?a=[0]:a===null?a=[""]:_.isArray(a)||(a=[a]);_.each(a,function(a){var c=document.createElement("input");c.type="hidden";c.name=b;c.value=a;f.appendChild(c)})});$(window).bind("message",b);document.body.appendChild(g);document.body.appendChild(f);f.submit()}function d(a){a=_.defaults(a,b);a.data=a.data||
{};a.data.api_key=DISQUS.apiKey;$.ajax(a)}var b={};return{defaults:function(a){var d,e,c;for(d in a)e=a[d],c=b[d],_.isObject(e)&&_.isObject(c)?_.extend(c,e):b[d]=e},headers:function(a){a=_.extend({},b.headers,a);return b.headers=_.pick(a,_.map(a,function(a,b){if(a)return b}))},getURL:function(a,b){b=b||{};if(b.secure||window.location.protocol==="https:")return DISQUS.urls.apiSecure+a;return DISQUS.urls.api+a},ajax:d,call:function(a,b){b=b||{};b.url=DISQUS.api.getURL(a,{secure:b.secure});b.data=_.extend(b.data||
{},{api_key:DISQUS.apiKey});(b.secure?g:d)(b)}}});(function(g){var d=DISQUS.Bus,b=DISQUS.api.getURL("internal/switches/list.jsonp");g.switches_jsonp_cb=function(a){d.sendHostMessage("switches.received",a.response)};d.on("fetch",function(a){a=a||{};a.data=a.data||{};a.data.callback="switches_jsonp_cb";a.data.api_key=DISQUS.apiKey;a=DISQUS.serialize(b,a.data,!1);DISQUS.require(a)});d.sendHostMessage("ready")})(this);