define(["js!//google-analytics.com/ga.js"],function(){return{trackPageView:function(e){var t=(e||z.w.location+"").replace("http://davidwalsh.name","");console.log("Page view: ",t),_gaq.push(["_trackPageview",t])},trackEvent:function(e,t){console.log("Page event: ",e),_gaq.push(["_trackEvent","Interactions",e,"",t||z.w.location,!0])}}});