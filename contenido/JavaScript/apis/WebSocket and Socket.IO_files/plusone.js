var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var k=void 0,n=!0,p=null,q=!1,aa=encodeURIComponent,r=window,ba=Object,s=document,u=String,ca=decodeURIComponent,da="appendChild",v="push",w="test",ea="exec",z="replace",fa="getElementById",A="concat",B="indexOf",ga="readyState",C="createElement",ha="firstChild",E="setAttribute",ia="getTime",ja="getElementsByTagName",G="length",H="split",J="location",K="style",ka="call",L="getAttribute",M="href",la="action",N="apply",O="parentNode",Q="join",R="toLowerCase";var S=r,T=s,ma=S[J],na=function(){},oa=/\[native code\]/,U=function(a,b,c){return a[b]=a[b]||c},pa=function(a){for(var b=0;b<this[G];b++)if(this[b]===a)return b;return-1},qa=/&/g,ra=/</g,sa=/>/g,ta=/"/g,ua=/'/g,va=function(a){return u(a)[z](qa,"&amp;")[z](ra,"&lt;")[z](sa,"&gt;")[z](ta,"&quot;")[z](ua,"&#39;")},V=function(){var a;if((a=ba.create)&&oa[w](a))a=a(p);else{a={};for(var b in a)a[b]=k}return a},W=function(a,b){return ba.prototype.hasOwnProperty[ka](a,b)},wa=function(a){if(oa[w](ba.keys))return ba.keys(a);
var b=[],c;for(c in a)W(a,c)&&b[v](c);return b},xa=function(a,b){a=a||{};for(var c in a)W(a,c)&&(b[c]=a[c])},X=U(S,"gapi",{});var ya=function(a,b,c){var e=RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(e[ea](a)||b[ea](a)))try{c=ca(a[2])}catch(d){}return c},za=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Aa=function(a){a=a.match(za);var b=V();b.j=a[1];b.c=a[3]?[a[3]]:[];b.e=a[5]?[a[5]]:[];return b},Ba=function(a){return a.j+(0<a.c[G]?"?"+a.c[Q]("&"):"")+(0<a.e[G]?"#"+a.e[Q]("&"):"")},Ca=function(a){var b=[];if(a)for(var c in a)W(a,c)&&a[c]!=p&&b[v](aa(c)+"="+aa(a[c]));return b},Da=function(a,
b,c){a=Aa(a);a.c[v][N](a.c,Ca(b));a.e[v][N](a.e,Ca(c));return Ba(a)};var Ea=function(a,b,c){if(S[b+"EventListener"])S[b+"EventListener"]("message",a,q);else if(S[c+"tachEvent"])S[c+"tachEvent"]("onmessage",a)};var Y;Y=U(S,"___jsl",V());U(Y,"I",0);U(Y,"hel",10);var Fa=function(a){return!Y.dpo?ya(a,"jsh",Y.h):Y.h},Ga=function(a){return U(U(Y,"H",V()),a,V())};var Ha=U(Y,"perf",V()),Ja=U(Ha,"g",V()),Ka=U(Ha,"i",V());U(Ha,"r",[]);V();V();var La=function(a,b,c){var e=Ha.r;"function"===typeof e?e(a,b,c):e[v]([a,b,c])},Ma=function(a,b,c){Ja[a]=!b&&Ja[a]||c||(new Date)[ia]();La(a)},Oa=function(a,b,c){b&&0<b[G]&&(b=Na(b),c&&0<c[G]&&(b+="___"+Na(c)),28<b[G]&&(b=b.substr(0,28)+(b[G]-28)),c=b,b=U(Ka,"_p",V()),U(b,c,V())[a]=(new Date)[ia](),La(a,"_p",c))},Na=function(a){return a[Q]("__")[z](/\./g,"_")[z](/\-/g,"_")[z](/\,/g,"_")};var Pa=V(),Qa=[],Z;Z={b:"callback",o:"sync",l:"config",d:"_c",g:"h",p:"platform",k:"jsl",TIMEOUT:"timeout",n:"ontimeout",t:"mh",q:"u"};Qa[v]([Z.k,function(a){for(var b in a)if(W(a,b)){var c=a[b];"object"==typeof c?Y[b]=U(Y,b,[])[A](c):U(Y,b,c)}if(b=a[Z.q])a=U(Y,"us",[]),a[v](b),(b=/^https:(.*)$/[ea](b))&&a[v]("http:"+b[1])}]);var Ra=decodeURI("%73cript");Pa.m=function(a){var b=Y.ms||"https://apis.google.com";a=a[0];if(!a||0<=a[B](".."))throw"Bad hint";return b+"/"+a[z](/^\//,"")};
var Sa=function(a){return a[Q](",")[z](/\./g,"_")[z](/-/g,"_")},Ta=function(a,b){for(var c=[],e=0;e<a[G];++e){var d=a[e];d&&0>pa[ka](b,d)&&c[v](d)}return c},Ua=/^[\/_a-zA-Z0-9,.\-!:=]+$/,Va=/^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,Wa=/\/cb=/g,Xa=/\/\//g,Ya=function(a){var b=T[C](Ra);b[E]("src",a);b.async="true";a=T[ja](Ra)[0];a[O].insertBefore(b,a)},$a=function(a,b){var c=b||{};"function"==typeof b&&(c={},c[Z.b]=b);var e=c,d=e&&e[Z.d];if(d)for(var h=0;h<Qa[G];h++){var f=Qa[h][0],g=Qa[h][1];
g&&W(d,f)&&g(d[f],a,e)}e=a?a[H](":"):[];if(!(d=c[Z.g]))if(d=Fa(ma[M]),!d)throw"Bad hint";h=d;f=U(Y,"ah",V());if(!f["::"]||!e[G])Za(e||[],c,h);else{d=[];for(g=p;g=e.shift();){var j=g[H]("."),j=f[g]||f[j[1]&&"ns:"+j[0]||""]||h,m=d[G]&&d[d[G]-1]||p,l=m;if(!m||m.hint!=j)l={hint:j,i:[]},d[v](l);l.i[v](g)}var x=d[G];if(1<x){var t=c[Z.b];t&&(c[Z.b]=function(){0==--x&&t()})}for(;e=d.shift();)Za(e.i,c,e.hint)}},Za=function(a,b,c){var e=a.sort();a=[];for(var d=k,h=0;h<e[G];h++){var f=e[h];f!=d&&a[v](f);d=f}a=
a||[];var g=b[Z.b],j=b[Z.l],d=b[Z.TIMEOUT],m=b[Z.n],l=p,x=q;if(d&&!m||!d&&m)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var e=U(Ga(c),"r",[]).sort(),t=U(Ga(c),"L",[]).sort(),D=[][A](e),P=function(a,b){if(x)return 0;S.clearTimeout(l);t[v][N](t,y);var d=((X||{}).config||{}).update;d?d(j):j&&U(Y,"cu",[])[v](j);if(b){Oa("me0",a,D);try{ab(function(){var a;a=c===Fa(ma[M])?U(X,"_",V()):V();a=U(Ga(c),"_",a);b(a)})}finally{Oa("me1",a,D)}}g&&g();return 1};0<d&&(l=S.setTimeout(function(){x=
n;m()},d));var y=Ta(a,t);if(y[G]){var y=Ta(a,e),I=U(Y,"CP",[]),F=I[G];I[F]=function(a){if(!a)return 0;Oa("ml1",y,D);var b=function(){I[F]=p;return P(y,a)};if(0<F&&I[F-1])I[F]=b;else for(b();(b=I[++F])&&b(););};if(y[G]){var Ia="loaded_"+Y.I++;X[Ia]=function(a){I[F](a);X[Ia]=p};a=c[H](";");a=(d=Pa[a.shift()])&&d(a);if(!a)throw"Bad hint:"+c;d=a=a[z]("__features__",Sa(y))[z](/\/$/,"")+(e[G]?"/ed=1/exm="+Sa(e):"")+("/cb=gapi."+Ia);h=d.match(Xa);f=d.match(Wa);if(!f||!(1===f[G]&&Va[w](d)&&Ua[w](d)&&h&&1===
h[G]))throw"Bad URL "+a;e[v][N](e,y);Oa("ml0",y,D);b[Z.o]||S.___gapisync?(b=a,"loading"!=T[ga]?Ya(b):T.write("<"+Ra+' src="'+encodeURI(b)+'"></'+Ra+">")):Ya(a)}else I[F](na)}else P(y)};var ab=function(a){if(Y.hee&&0<Y.hel)try{return a()}catch(b){Y.hel--,$a("debug_error",function(){r.___jsl.hefn(b)})}else return a()};X.load=function(a,b){return ab(function(){return $a(a,b)})};var bb=function(a){var b=r.___jsl=r.___jsl||{};b[a]=b[a]||[];return b[a]},cb=function(a){var b=r.___jsl=r.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg},db=function(a){return"object"===typeof a&&/\[native code\]/[w](a[v])},eb=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!db(a[c])&&!db(b[c])?eb(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=db(b[c])?[]:{},eb(a[c],b[c])):a[c]=b[c])},$=function(a){if(!a)return cb();a=a[H]("/");for(var b=
cb(),c=0,e=a[G];b&&"object"===typeof b&&c<e;++c)b=b[a[c]];return c===a[G]&&b!==k?b:k};var fb=function(a){var b=s[C]("div"),c=s[C]("a");c.href=a;b[da](c);b.innerHTML=b.innerHTML;return b[ha][M]},gb=function(a){a=a||"canonical";for(var b=s[ja]("link"),c=0,e=b[G];c<e;c++){var d=b[c],h=d[L]("rel");if(h&&h[R]()==a&&(d=d[L]("href")))if(d=fb(d))return d}return r[J][M]};var hb={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},ib=0,jb=function(a,b,c){var e;try{e=a[C]('<iframe frameborder="'+va(c.frameborder)+'" scrolling="'+va(c.scrolling)+'" name="'+va(c.name)+'"/>')}catch(d){e=a[C]("iframe")}for(var h in c)a=c[h],"style"==h&&"object"===typeof a?xa(a,e[K]):e[E](h,c[h]);for(;b[ha];)b.removeChild(b[ha]);b[da](e);c.allowtransparency&&(e.allowTransparency=n);return e};var kb=jb,jb=function(a,b,c,e,d,h){if((h||{}).allowPost&&2E3<e[G]){h=Aa(e);c.src="";c["data-postorigin"]=h.j;c=kb(a,b,c,e,d);var f;if(-1!=navigator.userAgent[B]("WebKit")){f=b[ha].contentWindow.document;f.open();e=f[C]("div");var g={},j=d+"_inner";g.name=j;g.src="";g.style="display:none";kb(a,e,g,"",j)}g=(e=h.c[0])?e[H]("&"):[];e=[];for(j=0;j<g[G];j++){var m=g[j][H]("=",2);e[v]([ca(m[0]),ca(m[1])])}h.c=[];g=Ba(h);h=a[C]("form");h.action=g;h.method="POST";h.target=d;h[K].display="none";for(d=0;d<e[G];d++)g=
a[C]("input"),g.type="hidden",g.name=e[d][0],g.value=e[d][1],h[da](g);b[da](h);h.submit();h[O].removeChild(h);f&&f.close();a=c}else a=kb(a,b,c,e,d);return a};var lb=/:([a-zA-Z_]+):/g,mb={style:"position:absolute;top:-10000px;width:300px;margin:0px;borderStyle:none"},nb="onPlusOne _ready _close,_open _resizeMe _renderstart oncircled".split(" "),ob=p,pb=U(Y,"WI",V()),qb=function(){var a=$("googleapis.config/sessionIndex");a==p&&(a=r.__X_GOOG_AUTHUSER);if(a==p){var b=r.google;b&&(a=b.authuser)}a==p&&(a=k,a==p&&(a=r[J][M]),a=a?ya(a,"authuser")||p:p);return a==p?p:u(a)},rb=function(a,b){if(!ob){var c=$("iframes/:socialhost:"),e=qb()||"0",d=qb();ob={socialhost:c,
session_index:e,session_prefix:d!==k&&d!==p&&""!==d?"u/"+d+"/":"",im_prefix:$("googleapis.config/signedIn")===q?"_/im/":""}}return ob[b]||""},sb=["style","data-gapiscan"],tb=function(a){var b=k;"number"===typeof a?b=a:"string"===typeof a&&(b=parseInt(a,10));return b},ub=function(){};var vb,wb,xb,yb,zb,Ab=/(?:^|\s)g-((\S)*)(?:$|\s)/,Bb={div:n,span:n};vb=U(Y,"SW",V());wb=U(Y,"SA",V());xb=U(Y,"SM",V());yb=U(Y,"FW",[]);zb=p;
var Db=function(a,b){Cb(k,q,a,b)},Cb=function(a,b,c,e){Ma("ps0",n);c=("string"===typeof c?s[fa](c):c)||T;var d;d=T.documentMode;if(c.querySelectorAll&&(!d||8<d)){d=e?[e]:wa(vb)[A](wa(wb))[A](wa(xb));for(var h=[],f=0;f<d[G];f++){var g=d[f];h[v](".g-"+g,"g\\:"+g)}d=c.querySelectorAll(h[Q](","))}else d=c[ja]("*");c=V();for(h=0;h<d[G];h++){f=d[h];var j=f,g=e,m=j.nodeName[R](),l=k;j[L]("data-gapiscan")?g=p:(0==m[B]("g:")?l=m.substr(2):(j=(j=u(j.className||j[L]("class")))&&Ab[ea](j))&&(l=j[1]),g=l&&(vb[l]||
wb[l]||xb[l])&&(!g||l===g)?l:p);g&&(f[E]("data-gapiscan",n),U(c,g,[])[v](f))}if(b)for(var x in c){b=c[x];for(e=0;e<b[G];e++)b[e][E]("data-onload",n)}for(var t in c)yb[v](t);Ma("ps1",n);((x=yb[Q](":"))||a)&&X.load(x,a);if(Eb(zb||{}))for(var D in c){a=c[D];t=0;for(b=a[G];t<b;t++)a[t].removeAttribute("data-gapiscan");Fb(D)}else{e=[];for(D in c){a=c[D];t=0;for(b=a[G];t<b;t++){f=a[t];d=D;g=h=f;f=V();l=0!=g.nodeName[R]()[B]("g:");j=0;for(m=g.attributes[G];j<m;j++){var P=g.attributes[j],y=P.name,P=P.value;
0<=pa[ka](sb,y)||(l&&0!=y[B]("data-")||"null"===P)||(l&&(y=y.substr(5)),f[y[R]()]=P)}l=f;g=g[K];(j=tb(g&&g.height))&&(l.height=u(j));(g=tb(g&&g.width))&&(l.width=u(g));Gb(d,h,f,e,b)}}Hb(x,e)}},Ib=function(a){var b=U(X,a,{});b.go||(b.go=function(b){return Db(b,a)},b.render=function(b,e){var d=e||{};d.type=a;var h=d.type;delete d.type;var f=("string"===typeof b?s[fa](b):b)||k,g={},j;for(j in d)W(d,j)&&(g[j[R]()]=d[j]);g.rd=1;d=[];Gb(h,f,g,d,0);Hb(h,d)})};var Fb=function(a,b){var c=U(Y,"watt",V())[a];b&&c?c(b):X.load(a,function(){var c=U(Y,"watt",V())[a],d=b&&b.iframeNode;!d||!c?(0,X[a].go)(d&&d[O]):c(b)})},Eb=function(){return q},Hb=function(){},Gb=function(a,b,c,e,d){switch(Jb(b,a)){case 0:Kb(a+"_annotation",b,c);break;case 1:Kb(a,b,c);break;case 2:if(b[O]){var h,f;h=f=a;"plus"==a&&c[la]&&(f=a+"_"+c[la],h=a+"/"+c[la]);(f=$("iframes/"+f+"/url"))||(f=":socialhost:/_/widget/render/"+h);h=f[z](lb,rb);f={};xa(c,f);f.hl=$("lang")||"en-US";f.origin=r[J].origin||
r[J].protocol+"//"+r[J].host;f.exp=$("iframes/"+a+"/params/exp");switch(a){case "plus":var g;g=f[M]?fb(f[M]):gb(c[la]?p:"publisher");f.url=g;delete f[M];break;case "plusone":f.url=c[M]?fb(c[M]):gb();g=c.db;var j=$();g==p&&j&&(g=j.db,g==p&&(g=j.gwidget&&j.gwidget.db));f.db=g||k;g=c.ecp;j=$();g==p&&j&&(g=j.ecp,g==p&&(g=j.gwidget&&j.gwidget.ecp));f.ecp=g||k;delete f[M];break;case "signin":f.url=gb()}f.hl=$("lang")||"en-US";Y.ILI&&(f.iloader="1");delete f["data-onload"];delete f.rd;g=$("inline/css");
"undefined"!==typeof g&&(0<d&&g>=d)&&(f.ic="1");g=/^#|^fr-/;d={};for(var m in f)W(f,m)&&g[w](m)&&(d[m[z](g,"")]=f[m],delete f[m]);m=[][A](nb);g=$("iframes/"+a+"/methods");"object"===typeof g&&oa[w](g[v])&&(m=m[A](g));for(var l in c)if(W(c,l)&&/^on/[w](l)&&("plus"!=a||"onconnect"!=l))m[v](l),delete f[l];delete f.callback;d._methods=m[Q](",");h=Da(h,f,d);c.rd?l=b:(l=s[C]("div"),b[E]("data-gapistub",n),l[K].cssText="position:absolute;width:100px;left:-10000px;",b[O].insertBefore(l,b));l.id||(b=l,U(pb,
a,0),m="___"+a+"_"+pb[a]++,b.id=m);b=V();b[">type"]=a;xa(c,b);l[E]("data-gwattr",Ca(b)[Q](":"));var x;f=h;b=l;l={allowPost:1,attributes:mb};m=b.ownerDocument;g=0;do d=l.id||["I",ib++,"_",(new Date)[ia]()][Q]("");while(m[fa](d)&&5>++g);if(!(5>g))throw Error("Error creating iframe id");j=m[J][M];g=V();var t=ya(j,"_bsh",Y.bsh);t&&(g._bsh=t);(j=Fa(j))&&(g.jsh=j);j=V();j.id=d;j.parent=m[J].protocol+"//"+m[J].host;var t=ya(m[J][M],"id",""),D=ya(m[J][M],"pfname","");(t=t?D+"/"+t:"")&&(j.pfname=t);l.hintInFragment?
xa(g,j):x=g;x=Da(f,x,j);f=V();xa(hb,f);xa(l.attributes,f);f.name=f.id=d;f.src=x;x=jb(m,b,f,x,d,l);b={};b.userParams=c;b.url=h;b.iframeNode=x;b.id=x[L]("id");c=b}else c=p;c&&((h=c.id)&&e[v](h),Fb(a,c))}},Jb=function(a,b){if(a&&1===a.nodeType&&b){if(wb[b])return 1;var c;if(c=xb[b])if(c=!!Bb[a.nodeName[R]()])c=(c=a.innerHTML)&&c[z](/^[\s\xa0]+|[\s\xa0]+$/g,"")?n:q;if(c)return 0;if(vb[b])return 2}return p},Kb=function(a,b,c){var e={};e.iframeNode=b;e.userParams=c;Fb(a,e)};U(X,"platform",{}).go=Db;Eb=function(a){for(var b=[Z.d,Z.k,Z.g],c=0;c<b[G]&&a;c++)a=a[b[c]];b=Fa(ma[M]);return!a||0!=a[B]("n;")&&0!=b[B]("n;")&&a!==b};Hb=function(a,b){var c=function(){Ea(e,"remove","de")},e=function(e){var f=e.data,g=e.origin;if(Lb(f,b)){var j=d;d=q;j&&Ma("rqe");$a(a,function(){j&&Ma("rqd");c();for(var a=U(Y,"RPMQ",[]),b=0;b<a[G];b++)a[b]({data:f,origin:g})})}};if(!(0===b[G]||!r.JSON||!r.JSON.parse)){var d=n;Ea(e,"add","at");$a(a,c)}};
Qa[v]([Z.p,function(a,b,c){zb=c;b&&yb[v](b);for(b=0;b<a[G];b++)vb[a[b]]=n;var e=c[Z.d].annotation||[];for(b=0;b<e[G];++b)wb[e[b]]=n;e=c[Z.d].bimodal||[];for(b=0;b<e[G];++b)xb[e[b]]=n;for(b=0;b<a[G];b++)Ib(a[b]);if(b=r.__GOOGLEAPIS)b.googleapis&&!b["googleapis.config"]&&(b["googleapis.config"]=b.googleapis),U(Y,"ci",[])[v](b),r.__GOOGLEAPIS=k;cb(n);e=r.___gcfg;b=bb("cu");if(e&&e!==r.___gu){var d={};eb(d,e);b[v](d);r.___gu=e}var e=bb("cu"),h=s.scripts||s[ja]("script")||[],d=[],f=[];f[v][N](f,U(Y,"us",
[]));for(var g=0;g<h[G];++g)for(var j=h[g],m=0;m<f[G];++m)j.src&&0==j.src[B](f[m])&&d[v](j);0==d[G]&&h[h[G]-1].src&&d[v](h[h[G]-1]);for(h=0;h<d[G];++h)if(!d[h][L]("gapi_processed")){d[h][E]("gapi_processed",n);(f=d[h])?(g=f.nodeType,f=3==g||4==g?f.nodeValue:f.textContent||f.innerText||f.innerHTML||""):f=k;if(f){for(;0==f.charCodeAt(f[G]-1);)f=f.substring(0,f[G]-1);g=k;try{g=(new Function("return ("+f+"\n)"))()}catch(l){}if("object"===typeof g)f=g;else{try{g=(new Function("return ({"+f+"\n})"))()}catch(x){}f=
"object"===typeof g?g:{}}}else f=k;f&&e[v](f)}h=bb("cd");e=0;for(d=h[G];e<d;++e)eb(cb(),h[e]);h=bb("ci");e=0;for(d=h[G];e<d;++e)eb(cb(),h[e]);e=0;for(d=b[G];e<d;++e)eb(cb(),b[e]);if("explicit"!=$("parsetags")){b=U(Y,"sws",[]);b[v][N](b,a);var t;if(c){var D=c[Z.b];D&&(t=function(){S.setTimeout(D,0)},delete c[Z.b])}if("complete"!==T[ga])try{Cb(k,n)}catch(P){}var y=function(){Cb(t,n)};if("complete"===T[ga])y();else{var I=q,F=function(){if(!I)return I=n,y[N](this,arguments)};S.addEventListener?(S.addEventListener("load",
F,q),S.addEventListener("DOMContentLoaded",F,q)):S.attachEvent&&(S.attachEvent("onreadystatechange",function(){"complete"===T[ga]&&F[N](this,arguments)}),S.attachEvent("onload",F))}}}]);var Mb=/^\{h\:'/,Nb=/^!_/,Lb=function(a,b){a=u(a);if(Mb[w](a))return n;a=a[z](Nb,"");if(!/^\{/[w](a))return q;try{var c=r.JSON.parse(a)}catch(e){return q}if(!c)return q;var d=c.f;return c.s&&d&&-1!=pa[ka](b,d)?("_renderstart"===c.s&&(c=c.a&&c.a[1],d=T[fa](d),c&&d&&ub(d[O],d,c)),n):q};ub=function(a,b,c){if(c.width&&c.height){a[K].cssText="";var e=c.width;c=c.height;var d=a[K];d.textIndent="0";d.margin="0";d.padding="0";d.background="transparent";d.borderStyle="none";d.cssFloat="none";d.styleFloat="none";d.lineHeight="normal";d.fontSize="1px";d.verticalAlign="baseline";a[K].display="inline-block";a=b[K];a.position="static";a.left=0;a.top=0;a.visibility="visible";e&&(a.width=e+"px");c&&(a.height=c+"px");b["data-csi-wdt"]=(new Date)[ia]()}};Ma("bs0",n,r.gapi._bs);Ma("bs1",n);delete r.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"services":{},"lexps":[69,71,79,74,45,17,86,83,82,92,94,88,61,90,30],"inline":{"css":1},"report":{},"oauth-flow":{},"isPlusUser":false,"iframes":{"additnow":{"url":"https://apis.google.com/additnow/additnow.html?bsv"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet?bsv"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv"},":socialhost:":"https://plusone.google.com","plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv"},":signuphost:":"https://plus.google.com","plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?bsv"},"plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026bsv"}},"debug":{"host":"https://plusone.google.com","reportExceptionRate":0.05,"rethrowException":true},"csi":{"rate":0.0},"googleapis.config":{"mobilesignupurl":"https://m.google.com/app/plus/oob?"}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.es.UKrYY4gUHWA.O/m\u003d__features__/am\u003dAQ/rt\u003dj/d\u003d1/rs\u003dAItRSTNrmmBrjHntyv299ndMLPmvkTRw-g","u":"https://apis.google.com/js/plusone.js","hee":true,"fp":"b2c7c063f9d374848e0d4d43aa4057bc99e65461","dpo":false},"platform":["plusone","plus","additnow","savetowallet","notifications","identity"],"fp":"b2c7c063f9d374848e0d4d43aa4057bc99e65461","annotation":[],"bimodal":[]}});