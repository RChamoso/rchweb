define(["js!//s3.buysellads.com/ac/bsa.js"],function(){return{reload:function(e){var t,n;$$("script[id^=_bsap_js_]").destroy(),t=$(z.d.body).hasClass("sns"),n=e?e.getElements(".ad"):$$(".ad"),n.each(function(e){var n,r=e.get("data-bsa");if(!r)return;if(e.getParent(".right")&&(t&&e.getParent(".right-dwb")||!t&&e.getParent(".right-sns")))return;n=r.split("|"),e.innerHTML='<div id="bsap_'+n[0]+'" class="bsarocks bsap_'+n[1]+'"></div>'}),_bsap.exec()}}});