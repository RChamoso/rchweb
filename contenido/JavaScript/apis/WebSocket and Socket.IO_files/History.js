(function(){var e,t,n,r,i,s,o;Class.Binds=new Class({$bound:{},bound:function(e){return this.$bound[e]?this.$bound[e]:this.$bound[e]=this[e].bind(this)}}),e=Element.NativeEvents,t=window.location,n=function(e){return e.match(/^https?:\/\//)&&(e="/"+e.split("/").slice(3).join("/")),e},r=n(t.href),i=window.history,s="pushState"in i,o=s?"popstate":"hashchange",this.History=new new Class({Implements:[Class.Binds,Events],initialize:s?function(){e[o]=2,window.addEvent(o,this.bound("pop"))}:function(){var n;e[o]=1,window.addEvent(o,this.bound("pop")),this.hash=t.hash,n="onhashchange"in window;if(!n||document.documentMode!==undefined&&document.documentMode<=7)this.timer=this.check.periodical(200,this)},cleanURL:n,push:s?function(e,t,s){e=n(e),r&&r!=e&&(r=null),i.pushState(s||null,t||null,e),this.onChange(e,s)}:function(e){t.hash=n(e)},replace:s?function(e,t,r){i.replaceState(r||null,t||null,n(e))}:function(e){e=n(e),this.hash="#"+e,this.push(e)},pop:s?function(e){var i=n(t.href);if(i==r){r=null;return}this.onChange(i,e.event.state)}:function(){var e=t.hash;if(this.hash==e)return;this.hash=e,this.onChange(n(e.substr(1)))},onChange:function(e,t){this.fireEvent("change",[e,t||{}])},back:function(){i.back()},forward:function(){i.forward()},getPath:function(){return n(s?t.href:t.hash.substr(1))},hasPushState:function(){return s},check:function(){this.hash!=t.hash&&this.pop()}})}).call(this);