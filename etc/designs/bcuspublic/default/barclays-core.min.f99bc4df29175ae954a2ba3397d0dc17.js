window.Modernizr=(function(B,c,g){var J="2.8.3",x={},z=true,M=c.documentElement,a="modernizr",I=c.createElement(a),F=I.style,L=c.createElement("input"),D=":)",b={}.toString,j=" -webkit- -moz- -o- -ms- ".split(" "),h="Webkit Moz O ms",G=h.split(" "),K=h.toLowerCase().split(" "),H={svg:"http://www.w3.org/2000/svg"},l={},p={},f={},e=[],k=e.slice,t,n=function(V,X,P,W){var O,U,R,S,N=c.createElement("div"),T=c.body,Q=T||c.createElement("body");
if(parseInt(P,10)){while(P--){R=c.createElement("div");
R.id=W?W[P]:a+(P+1);
N.appendChild(R)
}}O=["&#173;",'<style id="s',a,'">',V,"</style>"].join("");
N.id=a;
(T?N:Q).innerHTML+=O;
Q.appendChild(N);
if(!T){Q.style.background="";
Q.style.overflow="hidden";
S=M.style.overflow;
M.style.overflow="hidden";
M.appendChild(Q)
}U=X(N,V);
if(!T){Q.parentNode.removeChild(Q);
M.style.overflow=S
}else{N.parentNode.removeChild(N)
}return !!U
},o=(function(){var O={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};
function N(P,R){R=R||c.createElement(O[P]||"div");
P="on"+P;
var Q=P in R;
if(!Q){if(!R.setAttribute){R=c.createElement("div")
}if(R.setAttribute&&R.removeAttribute){R.setAttribute(P,"");
Q=r(R[P],"function");
if(!r(R[P],"undefined")){R[P]=g
}R.removeAttribute(P)
}}R=null;
return Q
}return N
})(),i=({}).hasOwnProperty,y;
if(!r(i,"undefined")&&!r(i.call,"undefined")){y=function(N,O){return i.call(N,O)
}
}else{y=function(N,O){return((O in N)&&r(N.constructor.prototype[O],"undefined"))
}
}if(!Function.prototype.bind){Function.prototype.bind=function d(P){var Q=this;
if(typeof Q!="function"){throw new TypeError()
}var N=k.call(arguments,1),O=function(){if(this instanceof O){var T=function(){};
T.prototype=Q.prototype;
var S=new T();
var R=Q.apply(S,N.concat(k.call(arguments)));
if(Object(R)===R){return R
}return S
}else{return Q.apply(P,N.concat(k.call(arguments)))
}};
return O
}
}function E(N){F.cssText=N
}function v(O,N){return E(j.join(O+";")+(N||""))
}function r(O,N){return typeof O===N
}function u(O,N){return !!~(""+O).indexOf(N)
}function A(P,N){for(var O in P){var Q=P[O];
if(!u(Q,"-")&&F[Q]!==g){return N=="pfx"?Q:true
}}return false
}function q(O,R,Q){for(var N in O){var P=R[O[N]];
if(P!==g){if(Q===false){return O[N]
}if(r(P,"function")){return P.bind(Q||R)
}return P
}}return false
}function m(R,N,Q){var O=R.charAt(0).toUpperCase()+R.slice(1),P=(R+" "+G.join(O+" ")+O).split(" ");
if(r(N,"string")||r(N,"undefined")){return A(P,N)
}else{P=(R+" "+(K).join(O+" ")+O).split(" ");
return q(P,N,Q)
}}l.flexbox=function(){return m("flexWrap")
};
l.canvas=function(){var N=c.createElement("canvas");
return !!(N.getContext&&N.getContext("2d"))
};
l.canvastext=function(){return !!(x.canvas&&r(c.createElement("canvas").getContext("2d").fillText,"function"))
};
l.webgl=function(){return !!B.WebGLRenderingContext
};
l.touch=function(){var N;
if(("ontouchstart" in B)||B.DocumentTouch&&c instanceof DocumentTouch){N=true
}else{n(["@media (",j.join("touch-enabled),("),a,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(O){N=O.offsetTop===9
})
}return N
};
l.geolocation=function(){return"geolocation" in navigator
};
l.postmessage=function(){return !!B.postMessage
};
l.websqldatabase=function(){return !!B.openDatabase
};
l.indexedDB=function(){return !!m("indexedDB",B)
};
l.hashchange=function(){return o("hashchange",B)&&(c.documentMode===g||c.documentMode>7)
};
l.history=function(){return !!(B.history&&history.pushState)
};
l.draganddrop=function(){var N=c.createElement("div");
return("draggable" in N)||("ondragstart" in N&&"ondrop" in N)
};
l.websockets=function(){return"WebSocket" in B||"MozWebSocket" in B
};
l.rgba=function(){E("background-color:rgba(150,255,150,.5)");
return u(F.backgroundColor,"rgba")
};
l.hsla=function(){E("background-color:hsla(120,40%,100%,.5)");
return u(F.backgroundColor,"rgba")||u(F.backgroundColor,"hsla")
};
l.multiplebgs=function(){E("background:url(https://),url(https://),red url(https://)");
return(/(url\s*\(.*?){3}/).test(F.background)
};
l.backgroundsize=function(){return m("backgroundSize")
};
l.borderimage=function(){return m("borderImage")
};
l.borderradius=function(){return m("borderRadius")
};
l.boxshadow=function(){return m("boxShadow")
};
l.textshadow=function(){return c.createElement("div").style.textShadow===""
};
l.opacity=function(){v("opacity:.55");
return(/^0.55$/).test(F.opacity)
};
l.cssanimations=function(){return m("animationName")
};
l.csscolumns=function(){return m("columnCount")
};
l.cssgradients=function(){var P="background-image:",O="gradient(linear,left top,right bottom,from(#9f9),to(white));",N="linear-gradient(left top,#9f9, white);";
E((P+"-webkit- ".split(" ").join(O+P)+j.join(N+P)).slice(0,-P.length));
return u(F.backgroundImage,"gradient")
};
l.cssreflections=function(){return m("boxReflect")
};
l.csstransforms=function(){return !!m("transform")
};
l.csstransforms3d=function(){var N=!!m("perspective");
if(N&&"webkitPerspective" in M.style){n("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(O,P){N=O.offsetLeft===9&&O.offsetHeight===3
})
}return N
};
l.csstransitions=function(){return m("transition")
};
l.fontface=function(){var N;
n('@font-face {font-family:"font";src:url("https://")}',function(R,S){var Q=c.getElementById("smodernizr"),O=Q.sheet||Q.styleSheet,P=O?(O.cssRules&&O.cssRules[0]?O.cssRules[0].cssText:O.cssText||""):"";
N=/src/i.test(P)&&P.indexOf(S.split(" ")[0])===0
});
return N
};
l.generatedcontent=function(){var N;
n(["#",a,"{font:0/0 a}#",a,':after{content:"',D,'";visibility:hidden;font:3px/1 a}'].join(""),function(O){N=O.offsetHeight>=3
});
return N
};
l.video=function(){var O=c.createElement("video"),N=false;
try{if(N=!!O.canPlayType){N=new Boolean(N);
N.ogg=O.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"");
N.h264=O.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"");
N.webm=O.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")
}}catch(P){}return N
};
l.audio=function(){var O=c.createElement("audio"),N=false;
try{if(N=!!O.canPlayType){N=new Boolean(N);
N.ogg=O.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"");
N.mp3=O.canPlayType("audio/mpeg;").replace(/^no$/,"");
N.wav=O.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"");
N.m4a=(O.canPlayType("audio/x-m4a;")||O.canPlayType("audio/aac;")).replace(/^no$/,"")
}}catch(P){}return N
};
l.localstorage=function(){try{localStorage.setItem(a,a);
localStorage.removeItem(a);
return true
}catch(N){return false
}};
l.sessionstorage=function(){try{sessionStorage.setItem(a,a);
sessionStorage.removeItem(a);
return true
}catch(N){return false
}};
l.webworkers=function(){return !!B.Worker
};
l.applicationcache=function(){return !!B.applicationCache
};
l.svg=function(){return !!c.createElementNS&&!!c.createElementNS(H.svg,"svg").createSVGRect
};
l.inlinesvg=function(){var N=c.createElement("div");
N.innerHTML="<svg/>";
return(N.firstChild&&N.firstChild.namespaceURI)==H.svg
};
l.smil=function(){return !!c.createElementNS&&/SVGAnimate/.test(b.call(c.createElementNS(H.svg,"animate")))
};
l.svgclippaths=function(){return !!c.createElementNS&&/SVGClipPath/.test(b.call(c.createElementNS(H.svg,"clipPath")))
};
function C(){x.input=(function(P){for(var O=0,N=P.length;
O<N;
O++){f[P[O]]=!!(P[O] in L)
}if(f.list){f.list=!!(c.createElement("datalist")&&B.HTMLDataListElement)
}return f
})("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
x.inputtypes=(function(Q){for(var P=0,O,S,R,N=Q.length;
P<N;
P++){L.setAttribute("type",S=Q[P]);
O=L.type!=="text";
if(O){L.value=D;
L.style.cssText="position:absolute;visibility:hidden;";
if(/^range$/.test(S)&&L.style.WebkitAppearance!==g){M.appendChild(L);
R=c.defaultView;
O=R.getComputedStyle&&R.getComputedStyle(L,null).WebkitAppearance!=="textfield"&&(L.offsetHeight!==0);
M.removeChild(L)
}else{if(/^(search|tel)$/.test(S)){}else{if(/^(url|email)$/.test(S)){O=L.checkValidity&&L.checkValidity()===false
}else{O=L.value!=D
}}}}p[Q[P]]=!!O
}return p
})("search tel url email datetime date month week time datetime-local number range color".split(" "))
}for(var w in l){if(y(l,w)){t=w.toLowerCase();
x[t]=l[w]();
e.push((x[t]?"":"no-")+t)
}}x.input||C();
x.addTest=function(O,P){if(typeof O=="object"){for(var N in O){if(y(O,N)){x.addTest(N,O[N])
}}}else{O=O.toLowerCase();
if(x[O]!==g){return x
}P=typeof P=="function"?P():P;
if(typeof z!=="undefined"&&z){M.className+=" "+(P?"":"no-")+O
}x[O]=P
}return x
};
E("");
I=L=null;
(function(X,Z){var T="3.7.0";
var Q=X.html5||{};
var U=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
var P=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
var ad;
var V="_html5shiv";
var N=0;
var ab={};
var R;
(function(){try{var ag=Z.createElement("a");
ag.innerHTML="<xyz></xyz>";
ad=("hidden" in ag);
R=ag.childNodes.length==1||(function(){(Z.createElement)("a");
var ai=Z.createDocumentFragment();
return(typeof ai.cloneNode=="undefined"||typeof ai.createDocumentFragment=="undefined"||typeof ai.createElement=="undefined")
}())
}catch(ah){ad=true;
R=true
}}());
function S(ag,ai){var aj=ag.createElement("p"),ah=ag.getElementsByTagName("head")[0]||ag.documentElement;
aj.innerHTML="x<style>"+ai+"</style>";
return ah.insertBefore(aj.lastChild,ah.firstChild)
}function Y(){var ag=W.elements;
return typeof ag=="string"?ag.split(" "):ag
}function ac(ag){var ah=ab[ag[V]];
if(!ah){ah={};
N++;
ag[V]=N;
ab[N]=ah
}return ah
}function aa(aj,ag,ai){if(!ag){ag=Z
}if(R){return ag.createElement(aj)
}if(!ai){ai=ac(ag)
}var ah;
if(ai.cache[aj]){ah=ai.cache[aj].cloneNode()
}else{if(P.test(aj)){ah=(ai.cache[aj]=ai.createElem(aj)).cloneNode()
}else{ah=ai.createElem(aj)
}}return ah.canHaveChildren&&!U.test(aj)&&!ah.tagUrn?ai.frag.appendChild(ah):ah
}function ae(ai,ak){if(!ai){ai=Z
}if(R){return ai.createDocumentFragment()
}ak=ak||ac(ai);
var al=ak.frag.cloneNode(),aj=0,ah=Y(),ag=ah.length;
for(;
aj<ag;
aj++){al.createElement(ah[aj])
}return al
}function af(ag,ah){if(!ah.cache){ah.cache={};
ah.createElem=ag.createElement;
ah.createFrag=ag.createDocumentFragment;
ah.frag=ah.createFrag()
}ag.createElement=function(ai){if(!W.shivMethods){return ah.createElem(ai)
}return aa(ai,ag,ah)
};
ag.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+Y().join().replace(/[\w\-]+/g,function(ai){ah.createElem(ai);
ah.frag.createElement(ai);
return'c("'+ai+'")'
})+");return n}")(W,ah.frag)
}function O(ag){if(!ag){ag=Z
}var ah=ac(ag);
if(W.shivCSS&&!ad&&!ah.hasCSS){ah.hasCSS=!!S(ag,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")
}if(!R){af(ag,ah)
}return ag
}var W={elements:Q.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:T,shivCSS:(Q.shivCSS!==false),supportsUnknownElements:R,shivMethods:(Q.shivMethods!==false),type:"default",shivDocument:O,createElement:aa,createDocumentFragment:ae};
X.html5=W;
O(Z)
}(this,c));
x._version=J;
x._prefixes=j;
x._domPrefixes=K;
x._cssomPrefixes=G;
x.hasEvent=o;
x.testProp=function(N){return A([N])
};
x.testAllProps=m;
x.testStyles=n;
x.prefixed=function(P,O,N){if(!O){return m(P,"pfx")
}else{return m(P,O,N)
}};
M.className=M.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(z?" js "+e.join(" "):"");
return x
})(this,this.document);
(function(ad,ac,ab){function aa(b){return"[object Function]"==P.call(b)
}function Z(b){return"string"==typeof b
}function Y(){}function X(b){return !b||"loaded"==b||"complete"==b||"uninitialized"==b
}function W(){var b=O.shift();
M=1,b?b.t?R(function(){("c"==b.t?L.injectCss:L.injectJs)(b.s,0,b.a,b.x,b.e,1)
},0):(b(),W()):M=0
}function V(x,w,v,t,q,p,n){function m(a){if(!g&&X(h.readyState)&&(y.r=g=1,!M&&W(),h.onload=h.onreadystatechange=null,a)){"img"!=x&&R(function(){I.removeChild(h)
},50);
for(var c in D[w]){D[w].hasOwnProperty(c)&&D[w][c].onload()
}}}var n=n||L.errorTimeout,h=ac.createElement(x),g=0,b=0,y={t:v,s:w,e:q,a:p,x:n};
1===D[w]&&(b=1,D[w]=[]),"object"==x?h.data=w:(h.src=w,h.type=x),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){m.call(this,b)
},O.splice(t,0,y),"img"!=x&&(b||2===D[w]?(I.insertBefore(h,J?null:Q),R(m,n)):D[w].push(h))
}function U(g,e,j,i,h){return M=0,e=e||"j",Z(g)?V("c"==e?G:H,g,e,this.i++,j,i,h):(O.splice(this.i++,0,g),1==O.length&&W()),this
}function T(){var b=L;
return b.loader={load:U,i:0},b
}var S=ac.documentElement,R=ad.setTimeout,Q=ac.getElementsByTagName("script")[0],P={}.toString,O=[],M=0,K="MozAppearance" in S.style,J=K&&!!ac.createRange().compareNode,I=J?S:Q.parentNode,S=ad.opera&&"[object Opera]"==P.call(ad.opera),S=!!ac.attachEvent&&!S,H=K?"object":S?"script":"img",G=S?"script":H,F=Array.isArray||function(b){return"[object Array]"==P.call(b)
},E=[],D={},C={timeout:function(d,c){return c.length&&(d.timeout=c[0]),d
}},N,L;
L=function(e){function c(i){var i=i.split("!"),h=E.length,q=i.pop(),p=i.length,q={url:q,origUrl:q,prefixes:i},o,l,j;
for(l=0;
l<p;
l++){j=i[l].split("="),(o=C[j.shift()])&&(q=o(q,j))
}for(l=0;
l<h;
l++){q=E[l](q)
}return q
}function n(b,t,r,q,p){var o=c(b),l=o.autoCallback;
o.url.split(".").pop().split("?").shift(),o.bypass||(t&&(t=aa(t)?t:t[b]||t[q]||t[b.split("/").pop().split("?")[0]]),o.instead?o.instead(b,t,r,q,p):(D[o.url]?o.noexec=!0:D[o.url]=1,r.load(o.url,o.forceCSS||!o.forceJS&&"css"==o.url.split(".").pop().split("?").shift()?"c":ab,o.noexec,o.attrs,o.timeout),(aa(t)||aa(l))&&r.load(function(){T(),t&&t(o.origUrl,p,q),l&&l(o.origUrl,p,q),D[o.url]=2
})))
}function m(x,w){function v(b,h){if(b){if(Z(b)){h||(r=function(){var i=[].slice.call(arguments);
q.apply(this,i),p()
}),n(b,r,w,0,u)
}else{if(Object(b)===b){for(g in o=function(){var a=0,i;
for(i in b){b.hasOwnProperty(i)&&a++
}return a
}(),b){b.hasOwnProperty(g)&&(!h&&!--o&&(aa(r)?r=function(){var i=[].slice.call(arguments);
q.apply(this,i),p()
}:r[g]=function(i){return function(){var a=[].slice.call(arguments);
i&&i.apply(this,a),p()
}
}(q[g])),n(b[g],r,w,g,u))
}}}}else{!h&&p()
}}var u=!!x.test,t=x.load||x.both,r=x.callback||Y,q=r,p=x.complete||Y,o,g;
v(u?x.yep:x.nope,!!t),t&&v(t)
}var k,f,d=this.yepnope.loader;
if(Z(e)){n(e,0,d,0)
}else{if(F(e)){for(k=0;
k<e.length;
k++){f=e[k],Z(f)?n(f,0,d,0):F(f)?L(f):Object(f)===f&&m(f,d)
}}else{Object(e)===e&&m(e,d)
}}},L.addPrefix=function(d,c){C[d]=c
},L.addFilter=function(b){E.push(b)
},L.errorTimeout=10000,null==ac.readyState&&ac.addEventListener&&(ac.readyState="loading",ac.addEventListener("DOMContentLoaded",N=function(){ac.removeEventListener("DOMContentLoaded",N,0),ac.readyState="complete"
},0)),ad.yepnope=T(),ad.yepnope.executeStack=W,ad.yepnope.injectJs=function(r,q,p,n,m,h){var g=ac.createElement("script"),f,b,n=n||L.errorTimeout;
g.src=r;
for(b in p){g.setAttribute(b,p[b])
}q=h?W:q||Y,g.onreadystatechange=g.onload=function(){!f&&X(g.readyState)&&(f=1,q(),g.onload=g.onreadystatechange=null)
},R(function(){f||(f=1,q(1))
},n),m?g.onload():Q.parentNode.insertBefore(g,Q)
},ad.yepnope.injectCss=function(b,n,m,l,k,h){var l=ac.createElement("link"),f,n=h?W:n||Y;
l.href=b,l.rel="stylesheet",l.type="text/css";
for(f in m){l.setAttribute(f,m[f])
}k||(Q.parentNode.insertBefore(l,Q),R(n,0))
}
})(this,document);
Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))
};
/*!
 * jQuery Javascript Library v1.11.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:42Z
 */
(function(b,a){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=b.document?a(b,true):function(c){if(!c.document){throw new Error("jQuery requires a window with a document")
}return a(c)
}
}else{a(b)
}}(typeof window!=="undefined"?window:this,function(a5,av){var aP=[];
var P=aP.slice;
var az=aP.concat;
var x=aP.push;
var bU=aP.indexOf;
var ac={};
var y=ac.toString;
var K=ac.hasOwnProperty;
var D={};
var ai="1.11.1",bI=function(e,i){return new bI.fn.init(e,i)
},E=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bS=/^-ms-/,aW=/-([\da-z])/gi,O=function(e,i){return i.toUpperCase()
};
bI.fn=bI.prototype={jquery:ai,constructor:bI,selector:"",length:0,toArray:function(){return P.call(this)
},get:function(e){return e!=null?(e<0?this[e+this.length]:this[e]):P.call(this)
},pushStack:function(e){var i=bI.merge(this.constructor(),e);
i.prevObject=this;
i.context=this.context;
return i
},each:function(i,e){return bI.each(this,i,e)
},map:function(e){return this.pushStack(bI.map(this,function(b7,b6){return e.call(b7,b6,b7)
}))
},slice:function(){return this.pushStack(P.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(b7){var e=this.length,b6=+b7+(b7<0?e:0);
return this.pushStack(b6>=0&&b6<e?[this[b6]]:[])
},end:function(){return this.prevObject||this.constructor(null)
},push:x,sort:aP.sort,splice:aP.splice};
bI.extend=bI.fn.extend=function(){var e,cb,b6,b7,ce,cc,ca=arguments[0]||{},b9=1,b8=arguments.length,cd=false;
if(typeof ca==="boolean"){cd=ca;
ca=arguments[b9]||{};
b9++
}if(typeof ca!=="object"&&!bI.isFunction(ca)){ca={}
}if(b9===b8){ca=this;
b9--
}for(;
b9<b8;
b9++){if((ce=arguments[b9])!=null){for(b7 in ce){e=ca[b7];
b6=ce[b7];
if(ca===b6){continue
}if(cd&&b6&&(bI.isPlainObject(b6)||(cb=bI.isArray(b6)))){if(cb){cb=false;
cc=e&&bI.isArray(e)?e:[]
}else{cc=e&&bI.isPlainObject(e)?e:{}
}ca[b7]=bI.extend(cd,cc,b6)
}else{if(b6!==undefined){ca[b7]=b6
}}}}}return ca
};
bI.extend({expando:"jQuery"+(ai+Math.random()).replace(/\D/g,""),isReady:true,error:function(e){throw new Error(e)
},noop:function(){},isFunction:function(e){return bI.type(e)==="function"
},isArray:Array.isArray||function(e){return bI.type(e)==="array"
},isWindow:function(e){return e!=null&&e==e.window
},isNumeric:function(e){return !bI.isArray(e)&&e-parseFloat(e)>=0
},isEmptyObject:function(i){var e;
for(e in i){return false
}return true
},isPlainObject:function(b7){var i;
if(!b7||bI.type(b7)!=="object"||b7.nodeType||bI.isWindow(b7)){return false
}try{if(b7.constructor&&!K.call(b7,"constructor")&&!K.call(b7.constructor.prototype,"isPrototypeOf")){return false
}}catch(b6){return false
}if(D.ownLast){for(i in b7){return K.call(b7,i)
}}for(i in b7){}return i===undefined||K.call(b7,i)
},type:function(e){if(e==null){return e+""
}return typeof e==="object"||typeof e==="function"?ac[y.call(e)]||"object":typeof e
},globalEval:function(e){if(e&&bI.trim(e)){(a5.execscript||function(i){a5["eval"].call(a5,i)
})(e)
}},camelCase:function(e){return e.replace(bS,"ms-").replace(aW,O)
},nodeName:function(i,e){return i.nodeName&&i.nodeName.toLowerCase()===e.toLowerCase()
},each:function(ca,cb,b6){var b9,b7=0,b8=ca.length,e=ad(ca);
if(b6){if(e){for(;
b7<b8;
b7++){b9=cb.apply(ca[b7],b6);
if(b9===false){break
}}}else{for(b7 in ca){b9=cb.apply(ca[b7],b6);
if(b9===false){break
}}}}else{if(e){for(;
b7<b8;
b7++){b9=cb.call(ca[b7],b7,ca[b7]);
if(b9===false){break
}}}else{for(b7 in ca){b9=cb.call(ca[b7],b7,ca[b7]);
if(b9===false){break
}}}}return ca
},trim:function(e){return e==null?"":(e+"").replace(E,"")
},makeArray:function(e,b6){var i=b6||[];
if(e!=null){if(ad(Object(e))){bI.merge(i,typeof e==="string"?[e]:e)
}else{x.call(i,e)
}}return i
},inArray:function(b8,b6,b7){var e;
if(b6){if(bU){return bU.call(b6,b8,b7)
}e=b6.length;
b7=b7?b7<0?Math.max(0,e+b7):b7:0;
for(;
b7<e;
b7++){if(b7 in b6&&b6[b7]===b8){return b7
}}}return -1
},merge:function(b9,b7){var e=+b7.length,b6=0,b8=b9.length;
while(b6<e){b9[b8++]=b7[b6++]
}if(e!==e){while(b7[b6]!==undefined){b9[b8++]=b7[b6++]
}}b9.length=b8;
return b9
},grep:function(e,cc,b9){var cb,b8=[],b6=0,b7=e.length,ca=!b9;
for(;
b6<b7;
b6++){cb=!cc(e[b6],b6);
if(cb!==ca){b8.push(e[b6])
}}return b8
},map:function(b7,cc,e){var cb,b9=0,ca=b7.length,b6=ad(b7),b8=[];
if(b6){for(;
b9<ca;
b9++){cb=cc(b7[b9],b9,e);
if(cb!=null){b8.push(cb)
}}}else{for(b9 in b7){cb=cc(b7[b9],b9,e);
if(cb!=null){b8.push(cb)
}}}return az.apply([],b8)
},guid:1,proxy:function(b8,b7){var e,b6,i;
if(typeof b7==="string"){i=b8[b7];
b7=b8;
b8=i
}if(!bI.isFunction(b8)){return undefined
}e=P.call(arguments,2);
b6=function(){return b8.apply(b7||this,e.concat(P.call(arguments)))
};
b6.guid=b8.guid=b8.guid||bI.guid++;
return b6
},now:function(){return +(new Date())
},support:D});
bI.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(b6,e){ac["[object "+e+"]"]=e.toLowerCase()
});
function ad(b6){var i=b6.length,e=bI.type(b6);
if(e==="function"||bI.isWindow(b6)){return false
}if(b6.nodeType===1&&i){return true
}return e==="array"||i===0||typeof i==="number"&&i>0&&(i-1) in b6
}var m=
/*!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-04-18
 */
(function(de){var cx,dh,cn,cG,cJ,ch,cV,dg,dl,cH,cW,cY,cB,co,c7,c2,df,ce,cE,c9="sizzle"+-(new Date()),cI=de.document,di=0,c3=0,b9=cz(),c8=cz(),cF=cz(),cD=function(i,e){if(i===e){cW=true
}return 0
},dd=typeof undefined,cP=1<<31,cN=({}).hasOwnProperty,db=[],dc=db.pop,cL=db.push,b7=db.push,cm=db.slice,cd=db.indexOf||function(dn){var dm=0,e=this.length;
for(;
dm<e;
dm++){if(this[dm]===dn){return dm
}}return -1
},b8="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",cp="[\\x20\\t\\r\\n\\f]",b6="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",cK=b6.replace("w","w#"),c5="\\["+cp+"*("+b6+")(?:"+cp+"*([*^$|!~]?=)"+cp+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+cK+"))|)"+cp+"*\\]",ck=":("+b6+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+c5+")*)|.*)\\)|)",cr=new RegExp("^"+cp+"+|((?:^|[^\\\\])(?:\\\\.)*)"+cp+"+$","g"),cu=new RegExp("^"+cp+"*,"+cp+"*"),cA=new RegExp("^"+cp+"*([>+~]|"+cp+")"+cp+"*"),ct=new RegExp("="+cp+"*([^\\]'\"]*?)"+cp+"*\\]","g"),cR=new RegExp(ck),cT=new RegExp("^"+cK+"$"),c1={ID:new RegExp("^#("+b6+")"),CLASS:new RegExp("^\\.("+b6+")"),TAG:new RegExp("^("+b6.replace("w","w*")+")"),ATTR:new RegExp("^"+c5),PSEUDO:new RegExp("^"+ck),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+cp+"*(even|odd|(([+-]|)(\\d*)n|)"+cp+"*(?:([+-]|)"+cp+"*(\\d+)|))"+cp+"*\\)|)","i"),bool:new RegExp("^(?:"+b8+")$","i"),needsContext:new RegExp("^"+cp+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+cp+"*((?:-\\d)?\\d*)"+cp+"*\\)|)(?=[^-]|$)","i")},cc=/^(?:input|select|textarea|button)$/i,cl=/^h\d$/i,cO=/^[^{]+\{\s*\[native \w/,cQ=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,c0=/[+~]/,cM=/'|\\/g,cs=new RegExp("\\\\([\\da-f]{1,6}"+cp+"?|("+cp+")|.)","ig"),c4=function(e,dn,i){var dm="0x"+dn-65536;
return dm!==dm||i?dn:dm<0?String.fromCharCode(dm+65536):String.fromCharCode(dm>>10|55296,dm&1023|56320)
};
try{b7.apply((db=cm.call(cI.childNodes)),cI.childNodes);
db[cI.childNodes.length].nodeType
}catch(cC){b7={apply:db.length?function(i,e){cL.apply(i,cm.call(e))
}:function(dp,dn){var e=dp.length,dm=0;
while((dp[e++]=dn[dm++])){}dp.length=e-1
}}
}function cv(du,dm,dy,dA){var dz,dr,ds,dw,dx,dq,dp,e,dn,dv;
if((dm?dm.ownerDocument||dm:cI)!==cB){cY(dm)
}dm=dm||cB;
dy=dy||[];
if(!du||typeof du!=="string"){return dy
}if((dw=dm.nodeType)!==1&&dw!==9){return[]
}if(c7&&!dA){if((dz=cQ.exec(du))){if((ds=dz[1])){if(dw===9){dr=dm.getElementById(ds);
if(dr&&dr.parentNode){if(dr.id===ds){dy.push(dr);
return dy
}}else{return dy
}}else{if(dm.ownerDocument&&(dr=dm.ownerDocument.getElementById(ds))&&cE(dm,dr)&&dr.id===ds){dy.push(dr);
return dy
}}}else{if(dz[2]){b7.apply(dy,dm.getElementsByTagName(du));
return dy
}else{if((ds=dz[3])&&dh.getElementsByClassName&&dm.getElementsByClassName){b7.apply(dy,dm.getElementsByClassName(ds));
return dy
}}}}if(dh.qsa&&(!c2||!c2.test(du))){e=dp=c9;
dn=dm;
dv=dw===9&&du;
if(dw===1&&dm.nodeName.toLowerCase()!=="object"){dq=ch(du);
if((dp=dm.getAttribute("id"))){e=dp.replace(cM,"\\$&")
}else{dm.setAttribute("id",e)
}e="[id='"+e+"'] ";
dx=dq.length;
while(dx--){dq[dx]=e+ci(dq[dx])
}dn=c0.test(du)&&cS(dm.parentNode)||dm;
dv=dq.join(",")
}if(dv){try{b7.apply(dy,dn.querySelectorAll(dv));
return dy
}catch(dt){}finally{if(!dp){dm.removeAttribute("id")
}}}}}return dg(du.replace(cr,"$1"),dm,dy,dA)
}function cz(){var i=[];
function e(dm,dn){if(i.push(dm+" ")>cn.cacheLength){delete e[i.shift()]
}return(e[dm+" "]=dn)
}return e
}function cj(e){e[c9]=true;
return e
}function cf(i){var dn=cB.createElement("div");
try{return !!i(dn)
}catch(dm){return false
}finally{if(dn.parentNode){dn.parentNode.removeChild(dn)
}dn=null
}}function dj(dm,dp){var e=dm.split("|"),dn=dm.length;
while(dn--){cn.attrHandle[e[dn]]=dp
}}function ca(i,e){var dn=e&&i,dm=dn&&i.nodeType===1&&e.nodeType===1&&(~e.sourceIndex||cP)-(~i.sourceIndex||cP);
if(dm){return dm
}if(dn){while((dn=dn.nextSibling)){if(dn===e){return -1
}}}return i?1:-1
}function cw(e){return function(dm){var i=dm.nodeName.toLowerCase();
return i==="input"&&dm.type===e
}
}function cb(e){return function(dm){var i=dm.nodeName.toLowerCase();
return(i==="input"||i==="button")&&dm.type===e
}
}function c6(e){return cj(function(i){i=+i;
return cj(function(dm,dr){var dp,dn=e([],dm.length,i),dq=dn.length;
while(dq--){if(dm[(dp=dn[dq])]){dm[dp]=!(dr[dp]=dm[dp])
}}})
})
}function cS(e){return e&&typeof e.getElementsByTagName!==dd&&e
}dh=cv.support={};
cJ=cv.isXML=function(e){var i=e&&(e.ownerDocument||e).documentElement;
return i?i.nodeName!=="HTML":false
};
cY=cv.setDocument=function(dm){var e,dn=dm?dm.ownerDocument||dm:cI,i=dn.defaultView;
if(dn===cB||dn.nodeType!==9||!dn.documentElement){return cB
}cB=dn;
co=dn.documentElement;
c7=!cJ(dn);
if(i&&i!==i.top){if(i.addEventListener){i.addEventListener("unload",function(){cY()
},false)
}else{if(i.attachEvent){i.attachEvent("onunload",function(){cY()
})
}}}dh.attributes=cf(function(dp){dp.className="i";
return !dp.getAttribute("className")
});
dh.getElementsByTagName=cf(function(dp){dp.appendChild(dn.createComment(""));
return !dp.getElementsByTagName("*").length
});
dh.getElementsByClassName=cO.test(dn.getElementsByClassName)&&cf(function(dp){dp.innerHTML="<div class='a'></div><div class='a i'></div>";
dp.firstChild.className="i";
return dp.getElementsByClassName("i").length===2
});
dh.getById=cf(function(dp){co.appendChild(dp).id=c9;
return !dn.getElementsByName||!dn.getElementsByName(c9).length
});
if(dh.getById){cn.find.ID=function(dr,dq){if(typeof dq.getElementById!==dd&&c7){var dp=dq.getElementById(dr);
return dp&&dp.parentNode?[dp]:[]
}};
cn.filter.ID=function(dq){var dp=dq.replace(cs,c4);
return function(dr){return dr.getAttribute("id")===dp
}
}
}else{delete cn.find.ID;
cn.filter.ID=function(dq){var dp=dq.replace(cs,c4);
return function(ds){var dr=typeof ds.getAttributeNode!==dd&&ds.getAttributeNode("id");
return dr&&dr.value===dp
}
}
}cn.find.TAG=dh.getElementsByTagName?function(dp,dq){if(typeof dq.getElementsByTagName!==dd){return dq.getElementsByTagName(dp)
}}:function(dp,dt){var du,ds=[],dr=0,dq=dt.getElementsByTagName(dp);
if(dp==="*"){while((du=dq[dr++])){if(du.nodeType===1){ds.push(du)
}}return ds
}return dq
};
cn.find.CLASS=dh.getElementsByClassName&&function(dq,dp){if(typeof dp.getElementsByClassName!==dd&&c7){return dp.getElementsByClassName(dq)
}};
df=[];
c2=[];
if((dh.qsa=cO.test(dn.querySelectorAll))){cf(function(dp){dp.innerHTML="<select msallowclip=''><option selected=''></option></select>";
if(dp.querySelectorAll("[msallowclip^='']").length){c2.push("[*^$]="+cp+"*(?:''|\"\")")
}if(!dp.querySelectorAll("[selected]").length){c2.push("\\["+cp+"*(?:value|"+b8+")")
}if(!dp.querySelectorAll(":checked").length){c2.push(":checked")
}});
cf(function(dq){var dp=dn.createElement("input");
dp.setAttribute("type","hidden");
dq.appendChild(dp).setAttribute("name","D");
if(dq.querySelectorAll("[name=d]").length){c2.push("name"+cp+"*[*^$|!~]?=")
}if(!dq.querySelectorAll(":enabled").length){c2.push(":enabled",":disabled")
}dq.querySelectorAll("*,:x");
c2.push(",.*:")
})
}if((dh.matchesSelector=cO.test((ce=co.matches||co.webkitMatchesSelector||co.mozMatchesSelector||co.oMatchesSelector||co.msMatchesSelector)))){cf(function(dp){dh.disconnectedMatch=ce.call(dp,"div");
ce.call(dp,"[s!='']:x");
df.push("!=",ck)
})
}c2=c2.length&&new RegExp(c2.join("|"));
df=df.length&&new RegExp(df.join("|"));
e=cO.test(co.compareDocumentPosition);
cE=e||cO.test(co.contains)?function(dq,dp){var ds=dq.nodeType===9?dq.documentElement:dq,dr=dp&&dp.parentNode;
return dq===dr||!!(dr&&dr.nodeType===1&&(ds.contains?ds.contains(dr):dq.compareDocumentPosition&&dq.compareDocumentPosition(dr)&16))
}:function(dq,dp){if(dp){while((dp=dp.parentNode)){if(dp===dq){return true
}}}return false
};
cD=e?function(dq,dp){if(dq===dp){cW=true;
return 0
}var dr=!dq.compareDocumentPosition-!dp.compareDocumentPosition;
if(dr){return dr
}dr=(dq.ownerDocument||dq)===(dp.ownerDocument||dp)?dq.compareDocumentPosition(dp):1;
if(dr&1||(!dh.sortDetached&&dp.compareDocumentPosition(dq)===dr)){if(dq===dn||dq.ownerDocument===cI&&cE(cI,dq)){return -1
}if(dp===dn||dp.ownerDocument===cI&&cE(cI,dp)){return 1
}return cH?(cd.call(cH,dq)-cd.call(cH,dp)):0
}return dr&4?-1:1
}:function(dq,dp){if(dq===dp){cW=true;
return 0
}var dw,dt=0,dv=dq.parentNode,ds=dp.parentNode,dr=[dq],du=[dp];
if(!dv||!ds){return dq===dn?-1:dp===dn?1:dv?-1:ds?1:cH?(cd.call(cH,dq)-cd.call(cH,dp)):0
}else{if(dv===ds){return ca(dq,dp)
}}dw=dq;
while((dw=dw.parentNode)){dr.unshift(dw)
}dw=dp;
while((dw=dw.parentNode)){du.unshift(dw)
}while(dr[dt]===du[dt]){dt++
}return dt?ca(dr[dt],du[dt]):dr[dt]===cI?-1:du[dt]===cI?1:0
};
return dn
};
cv.matches=function(i,e){return cv(i,null,null,e)
};
cv.matchesSelector=function(dm,dp){if((dm.ownerDocument||dm)!==cB){cY(dm)
}dp=dp.replace(ct,"='$1']");
if(dh.matchesSelector&&c7&&(!df||!df.test(dp))&&(!c2||!c2.test(dp))){try{var i=ce.call(dm,dp);
if(i||dh.disconnectedMatch||dm.document&&dm.document.nodeType!==11){return i
}}catch(dn){}}return cv(dp,cB,null,[dm]).length>0
};
cv.contains=function(e,i){if((e.ownerDocument||e)!==cB){cY(e)
}return cE(e,i)
};
cv.attr=function(dm,e){if((dm.ownerDocument||dm)!==cB){cY(dm)
}var i=cn.attrHandle[e.toLowerCase()],dn=i&&cN.call(cn.attrHandle,e.toLowerCase())?i(dm,e,!c7):undefined;
return dn!==undefined?dn:dh.attributes||!c7?dm.getAttribute(e):(dn=dm.getAttributeNode(e))&&dn.specified?dn.value:null
};
cv.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)
};
cv.uniqueSort=function(dn){var dp,dq=[],e=0,dm=0;
cW=!dh.detectDuplicates;
cH=!dh.sortStable&&dn.slice(0);
dn.sort(cD);
if(cW){while((dp=dn[dm++])){if(dp===dn[dm]){e=dq.push(dm)
}}while(e--){dn.splice(dq[e],1)
}}cH=null;
return dn
};
cG=cv.getText=function(dq){var dp,dm="",dn=0,e=dq.nodeType;
if(!e){while((dp=dq[dn++])){dm+=cG(dp)
}}else{if(e===1||e===9||e===11){if(typeof dq.textContent==="string"){return dq.textContent
}else{for(dq=dq.firstChild;
dq;
dq=dq.nextSibling){dm+=cG(dq)
}}}else{if(e===3||e===4){return dq.nodeValue
}}}return dm
};
cn=cv.selectors={cacheLength:50,createPseudo:cj,match:c1,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(cs,c4);
e[3]=(e[3]||e[4]||e[5]||"").replace(cs,c4);
if(e[2]==="~="){e[3]=" "+e[3]+" "
}return e.slice(0,4)
},CHILD:function(e){e[1]=e[1].toLowerCase();
if(e[1].slice(0,3)==="nth"){if(!e[3]){cv.error(e[0])
}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"));
e[5]=+((e[7]+e[8])||e[3]==="odd")
}else{if(e[3]){cv.error(e[0])
}}return e
},PSEUDO:function(i){var e,dm=!i[6]&&i[2];
if(c1.CHILD.test(i[0])){return null
}if(i[3]){i[2]=i[4]||i[5]||""
}else{if(dm&&cR.test(dm)&&(e=ch(dm,true))&&(e=dm.indexOf(")",dm.length-e)-dm.length)){i[0]=i[0].slice(0,e);
i[2]=dm.slice(0,e)
}}return i.slice(0,3)
}},filter:{TAG:function(i){var e=i.replace(cs,c4).toLowerCase();
return i==="*"?function(){return true
}:function(dm){return dm.nodeName&&dm.nodeName.toLowerCase()===e
}
},CLASS:function(e){var i=b9[e+" "];
return i||(i=new RegExp("(^|"+cp+")"+e+"("+cp+"|$)"))&&b9(e,function(dm){return i.test(typeof dm.className==="string"&&dm.className||typeof dm.getAttribute!==dd&&dm.getAttribute("class")||"")
})
},ATTR:function(dm,i,e){return function(dp){var dn=cv.attr(dp,dm);
if(dn==null){return i==="!="
}if(!i){return true
}dn+="";
return i==="="?dn===e:i==="!="?dn!==e:i==="^="?e&&dn.indexOf(e)===0:i==="*="?e&&dn.indexOf(e)>-1:i==="$="?e&&dn.slice(-e.length)===e:i==="~="?(" "+dn+" ").indexOf(e)>-1:i==="|="?dn===e||dn.slice(0,e.length+1)===e+"-":false
}
},CHILD:function(i,dp,dn,dq,dm){var ds=i.slice(0,3)!=="nth",e=i.slice(-4)!=="last",dr=dp==="of-type";
return dq===1&&dm===0?function(dt){return !!dt.parentNode
}:function(dz,dx,dC){var dt,dF,dA,dE,dB,dw,dy=ds!==e?"nextSibling":"previousSibling",dD=dz.parentNode,dv=dr&&dz.nodeName.toLowerCase(),du=!dC&&!dr;
if(dD){if(ds){while(dy){dA=dz;
while((dA=dA[dy])){if(dr?dA.nodeName.toLowerCase()===dv:dA.nodeType===1){return false
}}dw=dy=i==="only"&&!dw&&"nextSibling"
}return true
}dw=[e?dD.firstChild:dD.lastChild];
if(e&&du){dF=dD[c9]||(dD[c9]={});
dt=dF[i]||[];
dB=dt[0]===di&&dt[1];
dE=dt[0]===di&&dt[2];
dA=dB&&dD.childNodes[dB];
while((dA=++dB&&dA&&dA[dy]||(dE=dB=0)||dw.pop())){if(dA.nodeType===1&&++dE&&dA===dz){dF[i]=[di,dB,dE];
break
}}}else{if(du&&(dt=(dz[c9]||(dz[c9]={}))[i])&&dt[0]===di){dE=dt[1]
}else{while((dA=++dB&&dA&&dA[dy]||(dE=dB=0)||dw.pop())){if((dr?dA.nodeName.toLowerCase()===dv:dA.nodeType===1)&&++dE){if(du){(dA[c9]||(dA[c9]={}))[i]=[di,dE]
}if(dA===dz){break
}}}}}dE-=dm;
return dE===dq||(dE%dq===0&&dE/dq>=0)
}}
},PSEUDO:function(dn,dm){var e,i=cn.pseudos[dn]||cn.setFilters[dn.toLowerCase()]||cv.error("unsupported pseudo: "+dn);
if(i[c9]){return i(dm)
}if(i.length>1){e=[dn,dn,"",dm];
return cn.setFilters.hasOwnProperty(dn.toLowerCase())?cj(function(dr,dt){var dq,dp=i(dr,dm),ds=dp.length;
while(ds--){dq=cd.call(dr,dp[ds]);
dr[dq]=!(dt[dq]=dp[ds])
}}):function(dp){return i(dp,0,e)
}
}return i
}},pseudos:{not:cj(function(e){var i=[],dm=[],dn=cV(e.replace(cr,"$1"));
return dn[c9]?cj(function(dq,dv,dt,dr){var du,dp=dn(dq,null,dr,[]),ds=dq.length;
while(ds--){if((du=dp[ds])){dq[ds]=!(dv[ds]=du)
}}}):function(dr,dq,dp){i[0]=dr;
dn(i,null,dp,dm);
return !dm.pop()
}
}),has:cj(function(e){return function(i){return cv(e,i).length>0
}
}),contains:cj(function(e){return function(i){return(i.textContent||i.innerText||cG(i)).indexOf(e)>-1
}
}),lang:cj(function(e){if(!cT.test(e||"")){cv.error("unsupported lang: "+e)
}e=e.replace(cs,c4).toLowerCase();
return function(dm){var i;
do{if((i=c7?dm.lang:dm.getAttribute("xml:lang")||dm.getAttribute("lang"))){i=i.toLowerCase();
return i===e||i.indexOf(e+"-")===0
}}while((dm=dm.parentNode)&&dm.nodeType===1);
return false
}
}),target:function(e){var i=de.location&&de.location.hash;
return i&&i.slice(1)===e.id
},root:function(e){return e===co
},focus:function(e){return e===cB.activeElement&&(!cB.hasFocus||cB.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
},enabled:function(e){return e.disabled===false
},disabled:function(e){return e.disabled===true
},checked:function(e){var i=e.nodeName.toLowerCase();
return(i==="input"&&!!e.checked)||(i==="option"&&!!e.selected)
},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex
}return e.selected===true
},empty:function(e){for(e=e.firstChild;
e;
e=e.nextSibling){if(e.nodeType<6){return false
}}return true
},parent:function(e){return !cn.pseudos.empty(e)
},header:function(e){return cl.test(e.nodeName)
},input:function(e){return cc.test(e.nodeName)
},button:function(i){var e=i.nodeName.toLowerCase();
return e==="input"&&i.type==="button"||e==="button"
},text:function(i){var e;
return i.nodeName.toLowerCase()==="input"&&i.type==="text"&&((e=i.getAttribute("type"))==null||e.toLowerCase()==="text")
},first:c6(function(){return[0]
}),last:c6(function(e,i){return[i-1]
}),eq:c6(function(e,dm,i){return[i<0?i+dm:i]
}),even:c6(function(e,dn){var dm=0;
for(;
dm<dn;
dm+=2){e.push(dm)
}return e
}),odd:c6(function(e,dn){var dm=1;
for(;
dm<dn;
dm+=2){e.push(dm)
}return e
}),lt:c6(function(e,dp,dn){var dm=dn<0?dn+dp:dn;
for(;
--dm>=0;
){e.push(dm)
}return e
}),gt:c6(function(e,dp,dn){var dm=dn<0?dn+dp:dn;
for(;
++dm<dp;
){e.push(dm)
}return e
})}};
cn.pseudos.nth=cn.pseudos.eq;
for(cx in {radio:true,checkbox:true,file:true,password:true,image:true}){cn.pseudos[cx]=cw(cx)
}for(cx in {submit:true,reset:true}){cn.pseudos[cx]=cb(cx)
}function cU(){}cU.prototype=cn.filters=cn.pseudos;
cn.setFilters=new cU();
ch=cv.tokenize=function(dp,du){var i,dq,ds,dt,dr,dm,e,dn=c8[dp+" "];
if(dn){return du?0:dn.slice(0)
}dr=dp;
dm=[];
e=cn.preFilter;
while(dr){if(!i||(dq=cu.exec(dr))){if(dq){dr=dr.slice(dq[0].length)||dr
}dm.push((ds=[]))
}i=false;
if((dq=cA.exec(dr))){i=dq.shift();
ds.push({value:i,type:dq[0].replace(cr," ")});
dr=dr.slice(i.length)
}for(dt in cn.filter){if((dq=c1[dt].exec(dr))&&(!e[dt]||(dq=e[dt](dq)))){i=dq.shift();
ds.push({value:i,type:dt,matches:dq});
dr=dr.slice(i.length)
}}if(!i){break
}}return du?dr.length:dr?cv.error(dp):c8(dp,dm).slice(0)
};
function ci(dp){var dn=0,dm=dp.length,e="";
for(;
dn<dm;
dn++){e+=dp[dn].value
}return e
}function cq(dp,dm,dn){var e=dm.dir,dq=dn&&e==="parentNode",i=c3++;
return dm.first?function(dt,ds,dr){while((dt=dt[e])){if(dt.nodeType===1||dq){return dp(dt,ds,dr)
}}}:function(dv,dt,ds){var dw,du,dr=[di,i];
if(ds){while((dv=dv[e])){if(dv.nodeType===1||dq){if(dp(dv,dt,ds)){return true
}}}}else{while((dv=dv[e])){if(dv.nodeType===1||dq){du=dv[c9]||(dv[c9]={});
if((dw=du[e])&&dw[0]===di&&dw[1]===i){return(dr[2]=dw[2])
}else{du[e]=dr;
if((dr[2]=dp(dv,dt,ds))){return true
}}}}}}
}function dk(e){return e.length>1?function(dq,dp,dm){var dn=e.length;
while(dn--){if(!e[dn](dq,dp,dm)){return false
}}return true
}:e[0]
}function cy(dm,dq,dp){var dn=0,e=dq.length;
for(;
dn<e;
dn++){cv(dm,dq[dn],dp)
}return dp
}function cZ(e,dm,dn,dp,ds){var dq,dv=[],dr=0,dt=e.length,du=dm!=null;
for(;
dr<dt;
dr++){if((dq=e[dr])){if(!dn||dn(dq,dp,ds)){dv.push(dq);
if(du){dm.push(dr)
}}}}return dv
}function cg(dm,i,dp,dn,dq,e){if(dn&&!dn[c9]){dn=cg(dn)
}if(dq&&!dq[c9]){dq=cg(dq,e)
}return cj(function(dB,dy,dt,dA){var dD,dz,dv,du=[],dC=[],ds=dy.length,dr=dB||cy(i||"*",dt.nodeType?[dt]:dt,[]),dw=dm&&(dB||!i)?cZ(dr,du,dm,dt,dA):dr,dx=dp?dq||(dB?dm:ds||dn)?[]:dy:dw;
if(dp){dp(dw,dx,dt,dA)
}if(dn){dD=cZ(dx,dC);
dn(dD,[],dt,dA);
dz=dD.length;
while(dz--){if((dv=dD[dz])){dx[dC[dz]]=!(dw[dC[dz]]=dv)
}}}if(dB){if(dq||dm){if(dq){dD=[];
dz=dx.length;
while(dz--){if((dv=dx[dz])){dD.push((dw[dz]=dv))
}}dq(null,(dx=[]),dD,dA)
}dz=dx.length;
while(dz--){if((dv=dx[dz])&&(dD=dq?cd.call(dB,dv):du[dz])>-1){dB[dD]=!(dy[dD]=dv)
}}}}else{dx=cZ(dx===dy?dx.splice(ds,dx.length):dx);
if(dq){dq(null,dy,dx,dA)
}else{b7.apply(dy,dx)
}}})
}function da(ds){var dm,dq,dn,dr=ds.length,dv=cn.relative[ds[0].type],dw=dv||cn.relative[" "],dp=dv?1:0,dt=cq(function(i){return i===dm
},dw,true),du=cq(function(i){return cd.call(dm,i)>-1
},dw,true),e=[function(dy,dx,i){return(!dv&&(i||dx!==dl))||((dm=dx).nodeType?dt(dy,dx,i):du(dy,dx,i))
}];
for(;
dp<dr;
dp++){if((dq=cn.relative[ds[dp].type])){e=[cq(dk(e),dq)]
}else{dq=cn.filter[ds[dp].type].apply(null,ds[dp].matches);
if(dq[c9]){dn=++dp;
for(;
dn<dr;
dn++){if(cn.relative[ds[dn].type]){break
}}return cg(dp>1&&dk(e),dp>1&&ci(ds.slice(0,dp-1).concat({value:ds[dp-2].type===" "?"*":""})).replace(cr,"$1"),dq,dp<dn&&da(ds.slice(dp,dn)),dn<dr&&da((ds=ds.slice(dn))),dn<dr&&ci(ds))
}e.push(dq)
}}return dk(e)
}function cX(dn,dm){var e=dm.length>0,dp=dn.length>0,i=function(dz,dt,dy,dx,dC){var du,dv,dA,dE=0,dw="0",dq=dz&&[],dF=[],dD=dl,ds=dz||dp&&cn.find.TAG("*",dC),dr=(di+=dD==null?1:Math.random()||0.1),dB=ds.length;
if(dC){dl=dt!==cB&&dt
}for(;
dw!==dB&&(du=ds[dw])!=null;
dw++){if(dp&&du){dv=0;
while((dA=dn[dv++])){if(dA(du,dt,dy)){dx.push(du);
break
}}if(dC){di=dr
}}if(e){if((du=!dA&&du)){dE--
}if(dz){dq.push(du)
}}}dE+=dw;
if(e&&dw!==dE){dv=0;
while((dA=dm[dv++])){dA(dq,dF,dt,dy)
}if(dz){if(dE>0){while(dw--){if(!(dq[dw]||dF[dw])){dF[dw]=dc.call(dx)
}}}dF=cZ(dF)
}b7.apply(dx,dF);
if(dC&&!dz&&dF.length>0&&(dE+dm.length)>1){cv.uniqueSort(dx)
}}if(dC){di=dr;
dl=dD
}return dq
};
return e?cj(i):i
}cV=cv.compile=function(e,dn){var dp,dm=[],dr=[],dq=cF[e+" "];
if(!dq){if(!dn){dn=ch(e)
}dp=dn.length;
while(dp--){dq=da(dn[dp]);
if(dq[c9]){dm.push(dq)
}else{dr.push(dq)
}}dq=cF(e,cX(dr,dm));
dq.selector=e
}return dq
};
dg=cv.select=function(dn,e,dp,ds){var dq,dv,dm,dw,dt,du=typeof dn==="function"&&dn,dr=!ds&&ch((dn=du.selector||dn));
dp=dp||[];
if(dr.length===1){dv=dr[0]=dr[0].slice(0);
if(dv.length>2&&(dm=dv[0]).type==="ID"&&dh.getById&&e.nodeType===9&&c7&&cn.relative[dv[1].type]){e=(cn.find.ID(dm.matches[0].replace(cs,c4),e)||[])[0];
if(!e){return dp
}else{if(du){e=e.parentNode
}}dn=dn.slice(dv.shift().value.length)
}dq=c1.needsContext.test(dn)?0:dv.length;
while(dq--){dm=dv[dq];
if(cn.relative[(dw=dm.type)]){break
}if((dt=cn.find[dw])){if((ds=dt(dm.matches[0].replace(cs,c4),c0.test(dv[0].type)&&cS(e.parentNode)||e))){dv.splice(dq,1);
dn=ds.length&&ci(dv);
if(!dn){b7.apply(dp,ds);
return dp
}break
}}}}(du||cV(dn,dr))(ds,e,!c7,dp,c0.test(dn)&&cS(e.parentNode)||e);
return dp
};
dh.sortStable=c9.split("").sort(cD).join("")===c9;
dh.detectDuplicates=!!cW;
cY();
dh.sortDetached=cf(function(e){return e.compareDocumentPosition(cB.createElement("div"))&1
});
if(!cf(function(e){e.innerHTML="<a href='#'></a>";
return e.firstChild.getAttribute("href")==="#"
})){dj("type|href|height|width",function(i,e,dm){if(!dm){return i.getAttribute(e,e.toLowerCase()==="type"?1:2)
}})
}if(!dh.attributes||!cf(function(e){e.innerHTML="<input/>";
e.firstChild.setAttribute("value","");
return e.firstChild.getAttribute("value")===""
})){dj("value",function(i,e,dm){if(!dm&&i.nodeName.toLowerCase()==="input"){return i.defaultValue
}})
}if(!cf(function(e){return e.getAttribute("disabled")==null
})){dj(b8,function(i,e,dn){var dm;
if(!dn){return i[e]===true?e.toLowerCase():(dm=i.getAttributeNode(e))&&dm.specified?dm.value:null
}})
}return cv
})(a5);
bI.find=m;
bI.expr=m.selectors;
bI.expr[":"]=bI.expr.pseudos;
bI.unique=m.uniqueSort;
bI.text=m.getText;
bI.isXMLDoc=m.isXML;
bI.contains=m.contains;
var A=bI.expr.match.needsContext;
var a=(/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
var aL=/^.[^:#\[\.,]*$/;
function aR(b6,e,i){if(bI.isFunction(e)){return bI.grep(b6,function(b8,b7){return !!e.call(b8,b7,b8)!==i
})
}if(e.nodeType){return bI.grep(b6,function(b7){return(b7===e)!==i
})
}if(typeof e==="string"){if(aL.test(e)){return bI.filter(e,b6,i)
}e=bI.filter(e,b6)
}return bI.grep(b6,function(b7){return(bI.inArray(b7,e)>=0)!==i
})
}bI.filter=function(b7,e,b6){var i=e[0];
if(b6){b7=":not("+b7+")"
}return e.length===1&&i.nodeType===1?bI.find.matchesSelector(i,b7)?[i]:[]:bI.find.matches(b7,bI.grep(e,function(b8){return b8.nodeType===1
}))
};
bI.fn.extend({find:function(b6){var b9,b8=[],b7=this,e=b7.length;
if(typeof b6!=="string"){return this.pushStack(bI(b6).filter(function(){for(b9=0;
b9<e;
b9++){if(bI.contains(b7[b9],this)){return true
}}}))
}for(b9=0;
b9<e;
b9++){bI.find(b6,b7[b9],b8)
}b8=this.pushStack(e>1?bI.unique(b8):b8);
b8.selector=this.selector?this.selector+" "+b6:b6;
return b8
},filter:function(e){return this.pushStack(aR(this,e||[],false))
},not:function(e){return this.pushStack(aR(this,e||[],true))
},is:function(e){return !!aR(this,typeof e==="string"&&A.test(e)?bI(e):e||[],false).length
}});
var z,n=a5.document,bt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,bV=bI.fn.init=function(e,b6){var i,b7;
if(!e){return this
}if(typeof e==="string"){if(e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3){i=[null,e,null]
}else{i=bt.exec(e)
}if(i&&(i[1]||!b6)){if(i[1]){b6=b6 instanceof bI?b6[0]:b6;
bI.merge(this,bI.parseHTML(i[1],b6&&b6.nodeType?b6.ownerDocument||b6:n,true));
if(a.test(i[1])&&bI.isPlainObject(b6)){for(i in b6){if(bI.isFunction(this[i])){this[i](b6[i])
}else{this.attr(i,b6[i])
}}}return this
}else{b7=n.getElementById(i[2]);
if(b7&&b7.parentNode){if(b7.id!==i[2]){return z.find(e)
}this.length=1;
this[0]=b7
}this.context=n;
this.selector=e;
return this
}}else{if(!b6||b6.jquery){return(b6||z).find(e)
}else{return this.constructor(b6).find(e)
}}}else{if(e.nodeType){this.context=this[0]=e;
this.length=1;
return this
}else{if(bI.isFunction(e)){return typeof z.ready!=="undefined"?z.ready(e):e(bI)
}}}if(e.selector!==undefined){this.selector=e.selector;
this.context=e.context
}return bI.makeArray(e,this)
};
bV.prototype=bI.fn;
z=bI(n);
var bv=/^(?:parents|prev(?:Until|All))/,bz={children:true,contents:true,next:true,prev:true};
bI.extend({dir:function(b6,i,b8){var e=[],b7=b6[i];
while(b7&&b7.nodeType!==9&&(b8===undefined||b7.nodeType!==1||!bI(b7).is(b8))){if(b7.nodeType===1){e.push(b7)
}b7=b7[i]
}return e
},sibling:function(b6,i){var e=[];
for(;
b6;
b6=b6.nextSibling){if(b6.nodeType===1&&b6!==i){e.push(b6)
}}return e
}});
bI.fn.extend({has:function(b8){var b7,b6=bI(b8,this),e=b6.length;
return this.filter(function(){for(b7=0;
b7<e;
b7++){if(bI.contains(this,b6[b7])){return true
}}})
},closest:function(b9,b8){var ca,b7=0,b6=this.length,e=[],cb=A.test(b9)||typeof b9!=="string"?bI(b9,b8||this.context):0;
for(;
b7<b6;
b7++){for(ca=this[b7];
ca&&ca!==b8;
ca=ca.parentNode){if(ca.nodeType<11&&(cb?cb.index(ca)>-1:ca.nodeType===1&&bI.find.matchesSelector(ca,b9))){e.push(ca);
break
}}}return this.pushStack(e.length>1?bI.unique(e):e)
},index:function(e){if(!e){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1
}if(typeof e==="string"){return bI.inArray(this[0],bI(e))
}return bI.inArray(e.jquery?e[0]:e,this)
},add:function(e,i){return this.pushStack(bI.unique(bI.merge(this.get(),bI(e,i))))
},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))
}});
function aY(i,e){do{i=i[e]
}while(i&&i.nodeType!==1);
return i
}bI.each({parent:function(i){var e=i.parentNode;
return e&&e.nodeType!==11?e:null
},parents:function(e){return bI.dir(e,"parentNode")
},parentsUntil:function(b6,e,b7){return bI.dir(b6,"parentNode",b7)
},next:function(e){return aY(e,"nextSibling")
},prev:function(e){return aY(e,"previousSibling")
},nextAll:function(e){return bI.dir(e,"nextSibling")
},prevAll:function(e){return bI.dir(e,"previousSibling")
},nextUntil:function(b6,e,b7){return bI.dir(b6,"nextSibling",b7)
},prevUntil:function(b6,e,b7){return bI.dir(b6,"previousSibling",b7)
},siblings:function(e){return bI.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return bI.sibling(e.firstChild)
},contents:function(e){return bI.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:bI.merge([],e.childNodes)
}},function(e,i){bI.fn[e]=function(b8,b6){var b7=bI.map(this,i,b8);
if(e.slice(-5)!=="Until"){b6=b8
}if(b6&&typeof b6==="string"){b7=bI.filter(b6,b7)
}if(this.length>1){if(!bz[e]){b7=bI.unique(b7)
}if(bv.test(e)){b7=b7.reverse()
}}return this.pushStack(b7)
}
});
var aF=(/\S+/g);
var b2={};
function af(i){var e=b2[i]={};
bI.each(i.match(aF)||[],function(b7,b6){e[b6]=true
});
return e
}bI.Callbacks=function(ce){ce=typeof ce==="string"?(b2[ce]||af(ce)):bI.extend({},ce);
var b8,b7,e,b9,ca,b6,cb=[],cc=!ce.once&&[],i=function(cf){b7=ce.memory&&cf;
e=true;
ca=b6||0;
b6=0;
b9=cb.length;
b8=true;
for(;
cb&&ca<b9;
ca++){if(cb[ca].apply(cf[0],cf[1])===false&&ce.stopOnFalse){b7=false;
break
}}b8=false;
if(cb){if(cc){if(cc.length){i(cc.shift())
}}else{if(b7){cb=[]
}else{cd.disable()
}}}},cd={add:function(){if(cb){var cg=cb.length;
(function cf(ch){bI.each(ch,function(cj,ci){var ck=bI.type(ci);
if(ck==="function"){if(!ce.unique||!cd.has(ci)){cb.push(ci)
}}else{if(ci&&ci.length&&ck!=="string"){cf(ci)
}}})
})(arguments);
if(b8){b9=cb.length
}else{if(b7){b6=cg;
i(b7)
}}}return this
},remove:function(){if(cb){bI.each(arguments,function(ch,cf){var cg;
while((cg=bI.inArray(cf,cb,cg))>-1){cb.splice(cg,1);
if(b8){if(cg<=b9){b9--
}if(cg<=ca){ca--
}}}})
}return this
},has:function(cf){return cf?bI.inArray(cf,cb)>-1:!!(cb&&cb.length)
},empty:function(){cb=[];
b9=0;
return this
},disable:function(){cb=cc=b7=undefined;
return this
},disabled:function(){return !cb
},lock:function(){cc=undefined;
if(!b7){cd.disable()
}return this
},locked:function(){return !cc
},fireWith:function(cg,cf){if(cb&&(!e||cc)){cf=cf||[];
cf=[cg,cf.slice?cf.slice():cf];
if(b8){cc.push(cf)
}else{i(cf)
}}return this
},fire:function(){cd.fireWith(this,arguments);
return this
},fired:function(){return !!e
}};
return cd
};
bI.extend({Deferred:function(b6){var i=[["resolve","done",bI.Callbacks("once memory"),"resolved"],["reject","fail",bI.Callbacks("once memory"),"rejected"],["notify","progress",bI.Callbacks("memory")]],b7="pending",b8={state:function(){return b7
},always:function(){e.done(arguments).fail(arguments);
return this
},then:function(){var b9=arguments;
return bI.Deferred(function(ca){bI.each(i,function(cc,cb){var cd=bI.isFunction(b9[cc])&&b9[cc];
e[cb[1]](function(){var ce=cd&&cd.apply(this,arguments);
if(ce&&bI.isFunction(ce.promise)){ce.promise().done(ca.resolve).fail(ca.reject).progress(ca.notify)
}else{ca[cb[0]+"With"](this===b8?ca.promise():this,cd?[ce]:arguments)
}})
});
b9=null
}).promise()
},promise:function(b9){return b9!=null?bI.extend(b9,b8):b8
}},e={};
b8.pipe=b8.then;
bI.each(i,function(ca,b9){var cc=b9[2],cb=b9[3];
b8[b9[1]]=cc.add;
if(cb){cc.add(function(){b7=cb
},i[ca^1][2].disable,i[2][2].lock)
}e[b9[0]]=function(){e[b9[0]+"With"](this===e?b8:this,arguments);
return this
};
e[b9[0]+"With"]=cc.fireWith
});
b8.promise(e);
if(b6){b6.call(e,e)
}return e
},when:function(b9){var b7=0,cb=P.call(arguments),e=cb.length,b6=e!==1||(b9&&bI.isFunction(b9.promise))?e:0,ce=b6===1?b9:bI.Deferred(),b8=function(cg,ch,cf){return function(i){ch[cg]=this;
cf[cg]=arguments.length>1?P.call(arguments):i;
if(cf===cd){ce.notifyWith(ch,cf)
}else{if(!(--b6)){ce.resolveWith(ch,cf)
}}}
},cd,ca,cc;
if(e>1){cd=new Array(e);
ca=new Array(e);
cc=new Array(e);
for(;
b7<e;
b7++){if(cb[b7]&&bI.isFunction(cb[b7].promise)){cb[b7].promise().done(b8(b7,cc,cb)).fail(ce.reject).progress(b8(b7,ca,cd))
}else{--b6
}}}if(!b6){ce.resolveWith(cc,cb)
}return ce.promise()
}});
var ak;
bI.fn.ready=function(e){bI.ready.promise().done(e);
return this
};
bI.extend({isReady:false,readyWait:1,holdReady:function(e){if(e){bI.readyWait++
}else{bI.ready(true)
}},ready:function(e){if(e===true?--bI.readyWait:bI.isReady){return
}if(!n.body){return setTimeout(bI.ready)
}bI.isReady=true;
if(e!==true&&--bI.readyWait>0){return
}ak.resolveWith(n,[bI]);
if(bI.fn.triggerHandler){bI(n).triggerHandler("ready");
bI(n).off("ready")
}}});
function bm(){if(n.addEventListener){n.removeEventListener("DOMContentLoaded",bZ,false);
a5.removeEventListener("load",bZ,false)
}else{n.detachEvent("onreadystatechange",bZ);
a5.detachEvent("onload",bZ)
}}function bZ(){if(n.addEventListener||event.type==="load"||n.readyState==="complete"){bm();
bI.ready()
}}bI.ready.promise=function(b8){if(!ak){ak=bI.Deferred();
if(n.readyState==="complete"){setTimeout(bI.ready)
}else{if(n.addEventListener){n.addEventListener("DOMContentLoaded",bZ,false);
a5.addEventListener("load",bZ,false)
}else{n.attachEvent("onreadystatechange",bZ);
a5.attachEvent("onload",bZ);
var b7=false;
try{b7=a5.frameElement==null&&n.documentElement
}catch(b6){}if(b7&&b7.doScroll){(function i(){if(!bI.isReady){try{b7.doScroll("left")
}catch(b9){return setTimeout(i,50)
}bm();
bI.ready()
}})()
}}}}return ak.promise(b8)
};
var aC=typeof undefined;
var bh;
for(bh in bI(D)){break
}D.ownLast=bh!=="0";
D.inlineBlockNeedsLayout=false;
bI(function(){var b6,b7,e,i;
e=n.getElementsByTagName("body")[0];
if(!e||!e.style){return
}b7=n.createElement("div");
i=n.createElement("div");
i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
e.appendChild(i).appendChild(b7);
if(typeof b7.style.zoom!==aC){b7.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
D.inlineBlockNeedsLayout=b6=b7.offsetWidth===3;
if(b6){e.style.zoom=1
}}e.removeChild(i)
});
(function(){var b6=n.createElement("div");
if(D.deleteExpando==null){D.deleteExpando=true;
try{delete b6.test
}catch(i){D.deleteExpando=false
}}b6=null
})();
bI.acceptData=function(b6){var i=bI.noData[(b6.nodeName+" ").toLowerCase()],e=+b6.nodeType||1;
return e!==1&&e!==9?false:!i||i!==true&&b6.getAttribute("classid")===i
};
var by=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,aQ=/([A-Z])/g;
function bA(b7,b6,b8){if(b8===undefined&&b7.nodeType===1){var i="data-"+b6.replace(aQ,"-$1").toLowerCase();
b8=b7.getAttribute(i);
if(typeof b8==="string"){try{b8=b8==="true"?true:b8==="false"?false:b8==="null"?null:+b8+""===b8?+b8:by.test(b8)?bI.parseJSON(b8):b8
}catch(b9){}bI.data(b7,b6,b8)
}else{b8=undefined
}}return b8
}function Q(i){var e;
for(e in i){if(e==="data"&&bI.isEmptyObject(i[e])){continue
}if(e!=="toJSON"){return false
}}return true
}function bc(b7,i,b9,b8){if(!bI.acceptData(b7)){return
}var cb,ca,cc=bI.expando,cd=b7.nodeType,e=cd?bI.cache:b7,b6=cd?b7[cc]:b7[cc]&&cc;
if((!b6||!e[b6]||(!b8&&!e[b6].data))&&b9===undefined&&typeof i==="string"){return
}if(!b6){if(cd){b6=b7[cc]=aP.pop()||bI.guid++
}else{b6=cc
}}if(!e[b6]){e[b6]=cd?{}:{toJSON:bI.noop}
}if(typeof i==="object"||typeof i==="function"){if(b8){e[b6]=bI.extend(e[b6],i)
}else{e[b6].data=bI.extend(e[b6].data,i)
}}ca=e[b6];
if(!b8){if(!ca.data){ca.data={}
}ca=ca.data
}if(b9!==undefined){ca[bI.camelCase(i)]=b9
}if(typeof i==="string"){cb=ca[i];
if(cb==null){cb=ca[bI.camelCase(i)]
}}else{cb=ca
}return cb
}function ab(b9,b7,e){if(!bI.acceptData(b9)){return
}var cb,b8,ca=b9.nodeType,b6=ca?bI.cache:b9,cc=ca?b9[bI.expando]:bI.expando;
if(!b6[cc]){return
}if(b7){cb=e?b6[cc]:b6[cc].data;
if(cb){if(!bI.isArray(b7)){if(b7 in cb){b7=[b7]
}else{b7=bI.camelCase(b7);
if(b7 in cb){b7=[b7]
}else{b7=b7.split(" ")
}}}else{b7=b7.concat(bI.map(b7,bI.camelCase))
}b8=b7.length;
while(b8--){delete cb[b7[b8]]
}if(e?!Q(cb):!bI.isEmptyObject(cb)){return
}}}if(!e){delete b6[cc].data;
if(!Q(b6[cc])){return
}}if(ca){bI.cleanData([b9],true)
}else{if(D.deleteExpando||b6!=b6.window){delete b6[cc]
}else{b6[cc]=null
}}}bI.extend({cache:{},noData:{"applet ":true,"embed ":true,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){e=e.nodeType?bI.cache[e[bI.expando]]:e[bI.expando];
return !!e&&!Q(e)
},data:function(i,e,b6){return bc(i,e,b6)
},removeData:function(i,e){return ab(i,e)
},_data:function(i,e,b6){return bc(i,e,b6,true)
},_removeData:function(i,e){return ab(i,e,true)
}});
bI.fn.extend({data:function(b8,cb){var b7,b6,ca,b9=this[0],e=b9&&b9.attributes;
if(b8===undefined){if(this.length){ca=bI.data(b9);
if(b9.nodeType===1&&!bI._data(b9,"parsedAttrs")){b7=e.length;
while(b7--){if(e[b7]){b6=e[b7].name;
if(b6.indexOf("data-")===0){b6=bI.camelCase(b6.slice(5));
bA(b9,b6,ca[b6])
}}}bI._data(b9,"parsedAttrs",true)
}}return ca
}if(typeof b8==="object"){return this.each(function(){bI.data(this,b8)
})
}return arguments.length>1?this.each(function(){bI.data(this,b8,cb)
}):b9?bA(b9,b8,bI.data(b9,b8)):undefined
},removeData:function(e){return this.each(function(){bI.removeData(this,e)
})
}});
bI.extend({queue:function(b6,i,b7){var e;
if(b6){i=(i||"fx")+"queue";
e=bI._data(b6,i);
if(b7){if(!e||bI.isArray(b7)){e=bI._data(b6,i,bI.makeArray(b7))
}else{e.push(b7)
}}return e||[]
}},dequeue:function(b9,b8){b8=b8||"fx";
var i=bI.queue(b9,b8),ca=i.length,b7=i.shift(),e=bI._queueHooks(b9,b8),b6=function(){bI.dequeue(b9,b8)
};
if(b7==="inprogress"){b7=i.shift();
ca--
}if(b7){if(b8==="fx"){i.unshift("inprogress")
}delete e.stop;
b7.call(b9,b6,e)
}if(!ca&&e){e.empty.fire()
}},_queueHooks:function(b6,i){var e=i+"queueHooks";
return bI._data(b6,e)||bI._data(b6,e,{empty:bI.Callbacks("once memory").add(function(){bI._removeData(b6,i+"queue");
bI._removeData(b6,e)
})})
}});
bI.fn.extend({queue:function(e,i){var b6=2;
if(typeof e!=="string"){i=e;
e="fx";
b6--
}if(arguments.length<b6){return bI.queue(this[0],e)
}return i===undefined?this:this.each(function(){var b7=bI.queue(this,e,i);
bI._queueHooks(this,e);
if(e==="fx"&&b7[0]!=="inprogress"){bI.dequeue(this,e)
}})
},dequeue:function(e){return this.each(function(){bI.dequeue(this,e)
})
},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(b7,cb){var b6,b8=1,cc=bI.Deferred(),ca=this,e=this.length,b9=function(){if(!(--b8)){cc.resolveWith(ca,[ca])
}};
if(typeof b7!=="string"){cb=b7;
b7=undefined
}b7=b7||"fx";
while(e--){b6=bI._data(ca[e],b7+"queueHooks");
if(b6&&b6.empty){b8++;
b6.empty.add(b9)
}}b9();
return cc.promise(cb)
}});
var aE=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
var bT=["Top","Right","Bottom","Left"];
var S=function(i,e){i=e||i;
return bI.css(i,"display")==="none"||!bI.contains(i.ownerDocument,i)
};
var aB=bI.access=function(e,ca,cc,cb,b8,ce,cd){var b7=0,b6=e.length,b9=cc==null;
if(bI.type(cc)==="object"){b8=true;
for(b7 in cc){bI.access(e,ca,b7,cc[b7],true,ce,cd)
}}else{if(cb!==undefined){b8=true;
if(!bI.isFunction(cb)){cd=true
}if(b9){if(cd){ca.call(e,cb);
ca=null
}else{b9=ca;
ca=function(cf,i,cg){return b9.call(bI(cf),cg)
}
}}if(ca){for(;
b7<b6;
b7++){ca(e[b7],cc,cd?cb:cb.call(e[b7],b7,ca(e[b7],cc)))
}}}}return b8?e:b9?ca.call(e):b6?ca(e[0],cc):ce
};
var aM=(/^(?:checkbox|radio)$/i);
(function(){var i=n.createElement("input"),b8=n.createElement("div"),b6=n.createDocumentFragment();
b8.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
D.leadingWhitespace=b8.firstChild.nodeType===3;
D.tbody=!b8.getElementsByTagName("tbody").length;
D.htmlSerialize=!!b8.getElementsByTagName("link").length;
D.html5Clone=n.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";
i.type="checkbox";
i.checked=true;
b6.appendChild(i);
D.appendChecked=i.checked;
b8.innerHTML="<textarea>x</textarea>";
D.noCloneChecked=!!b8.cloneNode(true).lastChild.defaultValue;
b6.appendChild(b8);
b8.innerHTML="<input type='radio' checked='checked' name='t'/>";
D.checkClone=b8.cloneNode(true).cloneNode(true).lastChild.checked;
D.noCloneEvent=true;
if(b8.attachEvent){b8.attachEvent("onclick",function(){D.noCloneEvent=false
});
b8.cloneNode(true).click()
}if(D.deleteExpando==null){D.deleteExpando=true;
try{delete b8.test
}catch(b7){D.deleteExpando=false
}}})();
(function(){var b6,e,b7=n.createElement("div");
for(b6 in {submit:true,change:true,focusin:true}){e="on"+b6;
if(!(D[b6+"Bubbles"]=e in a5)){b7.setAttribute(e,"t");
D[b6+"Bubbles"]=b7.attributes[e].expando===false
}}b7=null
})();
var bG=/^(?:input|select|textarea)$/i,a6=/^key/,bM=/^(?:mouse|pointer|contextmenu)|click/,bC=/^(?:focusinfocus|focusoutblur)$/,bx=/^([^.]*)(?:\.(.+)|)$/;
function U(){return true
}function Z(){return false
}function am(){try{return n.activeElement
}catch(e){}}bI.event={global:{},add:function(b8,cd,ci,ca,b9){var cb,cj,ck,b6,cf,cc,ch,b7,cg,e,i,ce=bI._data(b8);
if(!ce){return
}if(ci.handler){b6=ci;
ci=b6.handler;
b9=b6.selector
}if(!ci.guid){ci.guid=bI.guid++
}if(!(cj=ce.events)){cj=ce.events={}
}if(!(cc=ce.handle)){cc=ce.handle=function(cl){return typeof bI!==aC&&(!cl||bI.event.triggered!==cl.type)?bI.event.dispatch.apply(cc.elem,arguments):undefined
};
cc.elem=b8
}cd=(cd||"").match(aF)||[""];
ck=cd.length;
while(ck--){cb=bx.exec(cd[ck])||[];
cg=i=cb[1];
e=(cb[2]||"").split(".").sort();
if(!cg){continue
}cf=bI.event.special[cg]||{};
cg=(b9?cf.delegateType:cf.bindType)||cg;
cf=bI.event.special[cg]||{};
ch=bI.extend({type:cg,origType:i,data:ca,handler:ci,guid:ci.guid,selector:b9,needsContext:b9&&bI.expr.match.needsContext.test(b9),namespace:e.join(".")},b6);
if(!(b7=cj[cg])){b7=cj[cg]=[];
b7.delegateCount=0;
if(!cf.setup||cf.setup.call(b8,ca,e,cc)===false){if(b8.addEventListener){b8.addEventListener(cg,cc,false)
}else{if(b8.attachEvent){b8.attachEvent("on"+cg,cc)
}}}}if(cf.add){cf.add.call(b8,ch);
if(!ch.handler.guid){ch.handler.guid=ci.guid
}}if(b9){b7.splice(b7.delegateCount++,0,ch)
}else{b7.push(ch)
}bI.event.global[cg]=true
}b8=null
},remove:function(b7,cd,ck,b8,cc){var ca,ch,cb,b9,cj,ci,cf,b6,cg,e,i,ce=bI.hasData(b7)&&bI._data(b7);
if(!ce||!(ci=ce.events)){return
}cd=(cd||"").match(aF)||[""];
cj=cd.length;
while(cj--){cb=bx.exec(cd[cj])||[];
cg=i=cb[1];
e=(cb[2]||"").split(".").sort();
if(!cg){for(cg in ci){bI.event.remove(b7,cg+cd[cj],ck,b8,true)
}continue
}cf=bI.event.special[cg]||{};
cg=(b8?cf.delegateType:cf.bindType)||cg;
b6=ci[cg]||[];
cb=cb[2]&&new RegExp("(^|\\.)"+e.join("\\.(?:.*\\.|)")+"(\\.|$)");
b9=ca=b6.length;
while(ca--){ch=b6[ca];
if((cc||i===ch.origType)&&(!ck||ck.guid===ch.guid)&&(!cb||cb.test(ch.namespace))&&(!b8||b8===ch.selector||b8==="**"&&ch.selector)){b6.splice(ca,1);
if(ch.selector){b6.delegateCount--
}if(cf.remove){cf.remove.call(b7,ch)
}}}if(b9&&!b6.length){if(!cf.teardown||cf.teardown.call(b7,e,ce.handle)===false){bI.removeEvent(b7,cg,ce.handle)
}delete ci[cg]
}}if(bI.isEmptyObject(ci)){delete ce.handle;
bI._removeData(b7,"events")
}},trigger:function(b6,cd,b9,ck){var ce,b8,ci,cj,cg,cc,cb,ca=[b9||n],ch=K.call(b6,"type")?b6.type:b6,b7=K.call(b6,"namespace")?b6.namespace.split("."):[];
ci=cc=b9=b9||n;
if(b9.nodeType===3||b9.nodeType===8){return
}if(bC.test(ch+bI.event.triggered)){return
}if(ch.indexOf(".")>=0){b7=ch.split(".");
ch=b7.shift();
b7.sort()
}b8=ch.indexOf(":")<0&&"on"+ch;
b6=b6[bI.expando]?b6:new bI.Event(ch,typeof b6==="object"&&b6);
b6.isTrigger=ck?2:3;
b6.namespace=b7.join(".");
b6.namespace_re=b6.namespace?new RegExp("(^|\\.)"+b7.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
b6.result=undefined;
if(!b6.target){b6.target=b9
}cd=cd==null?[b6]:bI.makeArray(cd,[b6]);
cg=bI.event.special[ch]||{};
if(!ck&&cg.trigger&&cg.trigger.apply(b9,cd)===false){return
}if(!ck&&!cg.noBubble&&!bI.isWindow(b9)){cj=cg.delegateType||ch;
if(!bC.test(cj+ch)){ci=ci.parentNode
}for(;
ci;
ci=ci.parentNode){ca.push(ci);
cc=ci
}if(cc===(b9.ownerDocument||n)){ca.push(cc.defaultView||cc.parentWindow||a5)
}}cb=0;
while((ci=ca[cb++])&&!b6.isPropagationStopped()){b6.type=cb>1?cj:cg.bindType||ch;
ce=(bI._data(ci,"events")||{})[b6.type]&&bI._data(ci,"handle");
if(ce){ce.apply(ci,cd)
}ce=b8&&ci[b8];
if(ce&&ce.apply&&bI.acceptData(ci)){b6.result=ce.apply(ci,cd);
if(b6.result===false){b6.preventDefault()
}}}b6.type=ch;
if(!ck&&!b6.isDefaultPrevented()){if((!cg._default||cg._default.apply(ca.pop(),cd)===false)&&bI.acceptData(b9)){if(b8&&b9[ch]&&!bI.isWindow(b9)){cc=b9[b8];
if(cc){b9[b8]=null
}bI.event.triggered=ch;
try{b9[ch]()
}catch(cf){}bI.event.triggered=undefined;
if(cc){b9[b8]=cc
}}}}return b6.result
},dispatch:function(e){e=bI.event.fix(e);
var b9,ca,ce,b6,b8,cd=[],cc=P.call(arguments),b7=(bI._data(this,"events")||{})[e.type]||[],cb=bI.event.special[e.type]||{};
cc[0]=e;
e.delegateTarget=this;
if(cb.preDispatch&&cb.preDispatch.call(this,e)===false){return
}cd=bI.event.handlers.call(this,e,b7);
b9=0;
while((b6=cd[b9++])&&!e.isPropagationStopped()){e.currentTarget=b6.elem;
b8=0;
while((ce=b6.handlers[b8++])&&!e.isImmediatePropagationStopped()){if(!e.namespace_re||e.namespace_re.test(ce.namespace)){e.handleObj=ce;
e.data=ce.data;
ca=((bI.event.special[ce.origType]||{}).handle||ce.handler).apply(b6.elem,cc);
if(ca!==undefined){if((e.result=ca)===false){e.preventDefault();
e.stopPropagation()
}}}}}if(cb.postDispatch){cb.postDispatch.call(this,e)
}return e.result
},handlers:function(e,b7){var b6,cc,ca,b9,cb=[],b8=b7.delegateCount,cd=e.target;
if(b8&&cd.nodeType&&(!e.button||e.type!=="click")){for(;
cd!=this;
cd=cd.parentNode||this){if(cd.nodeType===1&&(cd.disabled!==true||e.type!=="click")){ca=[];
for(b9=0;
b9<b8;
b9++){cc=b7[b9];
b6=cc.selector+" ";
if(ca[b6]===undefined){ca[b6]=cc.needsContext?bI(b6,this).index(cd)>=0:bI.find(b6,this,null,[cd]).length
}if(ca[b6]){ca.push(cc)
}}if(ca.length){cb.push({elem:cd,handlers:ca})
}}}}if(b8<b7.length){cb.push({elem:this,handlers:b7.slice(b8)})
}return cb
},fix:function(b8){if(b8[bI.expando]){return b8
}var b6,cb,ca,b7=b8.type,e=b8,b9=this.fixHooks[b7];
if(!b9){this.fixHooks[b7]=b9=bM.test(b7)?this.mouseHooks:a6.test(b7)?this.keyHooks:{}
}ca=b9.props?this.props.concat(b9.props):this.props;
b8=new bI.Event(e);
b6=ca.length;
while(b6--){cb=ca[b6];
b8[cb]=e[cb]
}if(!b8.target){b8.target=e.srcElement||n
}if(b8.target.nodeType===3){b8.target=b8.target.parentNode
}b8.metaKey=!!b8.metaKey;
return b9.filter?b9.filter(b8,e):b8
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(i,e){if(i.which==null){i.which=e.charCode!=null?e.charCode:e.keyCode
}return i
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(b7,b6){var e,b8,b9,i=b6.button,ca=b6.fromElement;
if(b7.pageX==null&&b6.clientX!=null){b8=b7.target.ownerDocument||n;
b9=b8.documentElement;
e=b8.body;
b7.pageX=b6.clientX+(b9&&b9.scrollLeft||e&&e.scrollLeft||0)-(b9&&b9.clientLeft||e&&e.clientLeft||0);
b7.pageY=b6.clientY+(b9&&b9.scrollTop||e&&e.scrollTop||0)-(b9&&b9.clientTop||e&&e.clientTop||0)
}if(!b7.relatedTarget&&ca){b7.relatedTarget=ca===b7.target?b6.toElement:ca
}if(!b7.which&&i!==undefined){b7.which=(i&1?1:(i&2?3:(i&4?2:0)))
}return b7
}},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==am()&&this.focus){try{this.focus();
return false
}catch(i){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===am()&&this.blur){this.blur();
return false
}},delegateType:"focusout"},click:{trigger:function(){if(bI.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();
return false
}},_default:function(e){return bI.nodeName(e.target,"a")
}},beforeunload:{postDispatch:function(e){if(e.result!==undefined&&e.originalEvent){e.originalEvent.returnValue=e.result
}}}},simulate:function(b6,b8,b7,i){var b9=bI.extend(new bI.Event(),b7,{type:b6,isSimulated:true,originalEvent:{}});
if(i){bI.event.trigger(b9,null,b8)
}else{bI.event.dispatch.call(b8,b9)
}if(b9.isDefaultPrevented()){b7.preventDefault()
}}};
bI.removeEvent=n.removeEventListener?function(i,e,b6){if(i.removeEventListener){i.removeEventListener(e,b6,false)
}}:function(b6,i,b7){var e="on"+i;
if(b6.detachEvent){if(typeof b6[e]===aC){b6[e]=null
}b6.detachEvent(e,b7)
}};
bI.Event=function(i,e){if(!(this instanceof bI.Event)){return new bI.Event(i,e)
}if(i&&i.type){this.originalEvent=i;
this.type=i.type;
this.isDefaultPrevented=i.defaultPrevented||i.defaultPrevented===undefined&&i.returnValue===false?U:Z
}else{this.type=i
}if(e){bI.extend(this,e)
}this.timeStamp=i&&i.timeStamp||bI.now();
this[bI.expando]=true
};
bI.Event.prototype={isDefaultPrevented:Z,isPropagationStopped:Z,isImmediatePropagationStopped:Z,preventDefault:function(){var i=this.originalEvent;
this.isDefaultPrevented=U;
if(!i){return
}if(i.preventDefault){i.preventDefault()
}else{i.returnValue=false
}},stopPropagation:function(){var i=this.originalEvent;
this.isPropagationStopped=U;
if(!i){return
}if(i.stopPropagation){i.stopPropagation()
}i.cancelBubble=true
},stopImmediatePropagation:function(){var i=this.originalEvent;
this.isImmediatePropagationStopped=U;
if(i&&i.stopImmediatePropagation){i.stopImmediatePropagation()
}this.stopPropagation()
}};
bI.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(i,e){bI.event.special[i]={delegateType:e,bindType:e,handle:function(b8){var b6,ca=this,b9=b8.relatedTarget,b7=b8.handleObj;
if(!b9||(b9!==ca&&!bI.contains(ca,b9))){b8.type=b7.origType;
b6=b7.handler.apply(this,arguments);
b8.type=e
}return b6
}}
});
if(!D.submitBubbles){bI.event.special.submit={setup:function(){if(bI.nodeName(this,"form")){return false
}bI.event.add(this,"click._submit keypress._submit",function(b7){var b6=b7.target,i=bI.nodeName(b6,"input")||bI.nodeName(b6,"button")?b6.form:undefined;
if(i&&!bI._data(i,"submitBubbles")){bI.event.add(i,"submit._submit",function(e){e._submit_bubble=true
});
bI._data(i,"submitBubbles",true)
}})
},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble;
if(this.parentNode&&!e.isTrigger){bI.event.simulate("submit",this.parentNode,e,true)
}}},teardown:function(){if(bI.nodeName(this,"form")){return false
}bI.event.remove(this,"._submit")
}}
}if(!D.changeBubbles){bI.event.special.change={setup:function(){if(bG.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){bI.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true
}});
bI.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false
}bI.event.simulate("change",this,e,true)
})
}return false
}bI.event.add(this,"beforeactivate._change",function(b6){var i=b6.target;
if(bG.test(i.nodeName)&&!bI._data(i,"changeBubbles")){bI.event.add(i,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){bI.event.simulate("change",this.parentNode,e,true)
}});
bI._data(i,"changeBubbles",true)
}})
},handle:function(i){var e=i.target;
if(this!==e||i.isSimulated||i.isTrigger||(e.type!=="radio"&&e.type!=="checkbox")){return i.handleObj.handler.apply(this,arguments)
}},teardown:function(){bI.event.remove(this,"._change");
return !bG.test(this.nodeName)
}}
}if(!D.focusinBubbles){bI.each({focus:"focusin",blur:"focusout"},function(b6,e){var i=function(b7){bI.event.simulate(e,b7.target,bI.event.fix(b7),true)
};
bI.event.special[e]={setup:function(){var b8=this.ownerDocument||this,b7=bI._data(b8,e);
if(!b7){b8.addEventListener(b6,i,true)
}bI._data(b8,e,(b7||0)+1)
},teardown:function(){var b8=this.ownerDocument||this,b7=bI._data(b8,e)-1;
if(!b7){b8.removeEventListener(b6,i,true);
bI._removeData(b8,e)
}else{bI._data(b8,e,b7)
}}}
})
}bI.fn.extend({on:function(b6,e,b9,b8,i){var b7,ca;
if(typeof b6==="object"){if(typeof e!=="string"){b9=b9||e;
e=undefined
}for(b7 in b6){this.on(b7,e,b9,b6[b7],i)
}return this
}if(b9==null&&b8==null){b8=e;
b9=e=undefined
}else{if(b8==null){if(typeof e==="string"){b8=b9;
b9=undefined
}else{b8=b9;
b9=e;
e=undefined
}}}if(b8===false){b8=Z
}else{if(!b8){return this
}}if(i===1){ca=b8;
b8=function(cb){bI().off(cb);
return ca.apply(this,arguments)
};
b8.guid=ca.guid||(ca.guid=bI.guid++)
}return this.each(function(){bI.event.add(this,b6,b8,b9,e)
})
},one:function(i,e,b7,b6){return this.on(i,e,b7,b6,1)
},off:function(b6,e,b8){var i,b7;
if(b6&&b6.preventDefault&&b6.handleObj){i=b6.handleObj;
bI(b6.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler);
return this
}if(typeof b6==="object"){for(b7 in b6){this.off(b7,e,b6[b7])
}return this
}if(e===false||typeof e==="function"){b8=e;
e=undefined
}if(b8===false){b8=Z
}return this.each(function(){bI.event.remove(this,b6,b8,e)
})
},trigger:function(e,i){return this.each(function(){bI.event.trigger(e,i,this)
})
},triggerHandler:function(e,b6){var i=this[0];
if(i){return bI.event.trigger(e,b6,i,true)
}}});
function B(e){var b6=d.split("|"),i=e.createDocumentFragment();
if(i.createElement){while(b6.length){i.createElement(b6.pop())
}}return i
}var d="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",aD=/ jQuery\d+="(?:null|\d+)"/g,M=new RegExp("<(?:"+d+")[\\s/>]","i"),b5=/^\s+/,aH=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,o=/<([\w:]+)/,b0=/<tbody/i,L=/<|&#?\w+;/,an=/<(?:script|style|link)/i,bW=/checked\s*(?:[^=]|=\s*.checked.)/i,bB=/^$|\/(?:java|ecma)script/i,ar=/^true\/(.*)/,aO=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,W={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:D.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},aT=B(n),k=aT.appendChild(n.createElement("div"));
W.optgroup=W.option;
W.tbody=W.tfoot=W.colgroup=W.caption=W.thead;
W.th=W.td;
function l(b8,e){var b6,b9,b7=0,ca=typeof b8.getElementsByTagName!==aC?b8.getElementsByTagName(e||"*"):typeof b8.querySelectorAll!==aC?b8.querySelectorAll(e||"*"):undefined;
if(!ca){for(ca=[],b6=b8.childNodes||b8;
(b9=b6[b7])!=null;
b7++){if(!e||bI.nodeName(b9,e)){ca.push(b9)
}else{bI.merge(ca,l(b9,e))
}}}return e===undefined||e&&bI.nodeName(b8,e)?bI.merge([b8],ca):ca
}function bY(e){if(aM.test(e.type)){e.defaultChecked=e.checked
}}function a3(i,e){return bI.nodeName(i,"table")&&bI.nodeName(e.nodeType!==11?e:e.firstChild,"tr")?i.getElementsByTagName("tbody")[0]||i.appendChild(i.ownerDocument.createElement("tbody")):i
}function u(e){e.type=(bI.find.attr(e,"type")!==null)+"/"+e.type;
return e
}function bf(i){var e=ar.exec(i.type);
if(e){i.type=e[1]
}else{i.removeAttribute("type")
}return i
}function bu(e,b7){var b8,b6=0;
for(;
(b8=e[b6])!=null;
b6++){bI._data(b8,"globalEval",!b7||bI._data(b7[b6],"globalEval"))
}}function at(cc,b6){if(b6.nodeType!==1||!bI.hasData(cc)){return
}var b9,b8,e,cb=bI._data(cc),ca=bI._data(b6,cb),b7=cb.events;
if(b7){delete ca.handle;
ca.events={};
for(b9 in b7){for(b8=0,e=b7[b9].length;
b8<e;
b8++){bI.event.add(b6,b9,b7[b9][b8])
}}}if(ca.data){ca.data=bI.extend({},ca.data)
}}function T(b8,i){var b9,b7,b6;
if(i.nodeType!==1){return
}b9=i.nodeName.toLowerCase();
if(!D.noCloneEvent&&i[bI.expando]){b6=bI._data(i);
for(b7 in b6.events){bI.removeEvent(i,b7,b6.handle)
}i.removeAttribute(bI.expando)
}if(b9==="script"&&i.text!==b8.text){u(i).text=b8.text;
bf(i)
}else{if(b9==="object"){if(i.parentNode){i.outerHTML=b8.outerHTML
}if(D.html5Clone&&(b8.innerHTML&&!bI.trim(i.innerHTML))){i.innerHTML=b8.innerHTML
}}else{if(b9==="input"&&aM.test(b8.type)){i.defaultChecked=i.checked=b8.checked;
if(i.value!==b8.value){i.value=b8.value
}}else{if(b9==="option"){i.defaultSelected=i.selected=b8.defaultSelected
}else{if(b9==="input"||b9==="textarea"){i.defaultValue=b8.defaultValue
}}}}}}bI.extend({clone:function(b6,b8,e){var ca,b7,cd,b9,cb,cc=bI.contains(b6.ownerDocument,b6);
if(D.html5Clone||bI.isXMLDoc(b6)||!M.test("<"+b6.nodeName+">")){cd=b6.cloneNode(true)
}else{k.innerHTML=b6.outerHTML;
k.removeChild(cd=k.firstChild)
}if((!D.noCloneEvent||!D.noCloneChecked)&&(b6.nodeType===1||b6.nodeType===11)&&!bI.isXMLDoc(b6)){ca=l(cd);
cb=l(b6);
for(b9=0;
(b7=cb[b9])!=null;
++b9){if(ca[b9]){T(b7,ca[b9])
}}}if(b8){if(e){cb=cb||l(b6);
ca=ca||l(cd);
for(b9=0;
(b7=cb[b9])!=null;
b9++){at(b7,ca[b9])
}}else{at(b6,cd)
}}ca=l(cd,"script");
if(ca.length>0){bu(ca,!cc&&l(b6,"script"))
}ca=cb=b7=null;
return cd
},buildFragment:function(b6,b8,cd,ci){var ce,ca,cc,ch,cj,cg,b7,cb=b6.length,b9=B(b8),e=[],cf=0;
for(;
cf<cb;
cf++){ca=b6[cf];
if(ca||ca===0){if(bI.type(ca)==="object"){bI.merge(e,ca.nodeType?[ca]:ca)
}else{if(!L.test(ca)){e.push(b8.createTextNode(ca))
}else{ch=ch||b9.appendChild(b8.createElement("div"));
cj=(o.exec(ca)||["",""])[1].toLowerCase();
b7=W[cj]||W._default;
ch.innerHTML=b7[1]+ca.replace(aH,"<$1></$2>")+b7[2];
ce=b7[0];
while(ce--){ch=ch.lastChild
}if(!D.leadingWhitespace&&b5.test(ca)){e.push(b8.createTextNode(b5.exec(ca)[0]))
}if(!D.tbody){ca=cj==="table"&&!b0.test(ca)?ch.firstChild:b7[1]==="<table>"&&!b0.test(ca)?ch:0;
ce=ca&&ca.childNodes.length;
while(ce--){if(bI.nodeName((cg=ca.childNodes[ce]),"tbody")&&!cg.childNodes.length){ca.removeChild(cg)
}}}bI.merge(e,ch.childNodes);
ch.textContent="";
while(ch.firstChild){ch.removeChild(ch.firstChild)
}ch=b9.lastChild
}}}}if(ch){b9.removeChild(ch)
}if(!D.appendChecked){bI.grep(l(e,"input"),bY)
}cf=0;
while((ca=e[cf++])){if(ci&&bI.inArray(ca,ci)!==-1){continue
}cc=bI.contains(ca.ownerDocument,ca);
ch=l(b9.appendChild(ca),"script");
if(cc){bu(ch)
}if(cd){ce=0;
while((ca=ch[ce++])){if(bB.test(ca.type||"")){cd.push(ca)
}}}}ch=null;
return b9
},cleanData:function(b6,ce){var b8,cd,b7,b9,ca=0,cf=bI.expando,e=bI.cache,cb=D.deleteExpando,cc=bI.event.special;
for(;
(b8=b6[ca])!=null;
ca++){if(ce||bI.acceptData(b8)){b7=b8[cf];
b9=b7&&e[b7];
if(b9){if(b9.events){for(cd in b9.events){if(cc[cd]){bI.event.remove(b8,cd)
}else{bI.removeEvent(b8,cd,b9.handle)
}}}if(e[b7]){delete e[b7];
if(cb){delete b8[cf]
}else{if(typeof b8.removeAttribute!==aC){b8.removeAttribute(cf)
}else{b8[cf]=null
}}aP.push(b7)
}}}}}});
bI.fn.extend({text:function(e){return aB(this,function(i){return i===undefined?bI.text(this):this.empty().append((this[0]&&this[0].ownerDocument||n).createTextNode(i))
},null,e,arguments.length)
},append:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var i=a3(this,e);
i.appendChild(e)
}})
},prepend:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var i=a3(this,e);
i.insertBefore(e,i.firstChild)
}})
},before:function(){return this.domManip(arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this)
}})
},after:function(){return this.domManip(arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this.nextSibling)
}})
},remove:function(e,b9){var b8,b6=e?bI.filter(e,this):this,b7=0;
for(;
(b8=b6[b7])!=null;
b7++){if(!b9&&b8.nodeType===1){bI.cleanData(l(b8))
}if(b8.parentNode){if(b9&&bI.contains(b8.ownerDocument,b8)){bu(l(b8,"script"))
}b8.parentNode.removeChild(b8)
}}return this
},empty:function(){var b6,e=0;
for(;
(b6=this[e])!=null;
e++){if(b6.nodeType===1){bI.cleanData(l(b6,false))
}while(b6.firstChild){b6.removeChild(b6.firstChild)
}if(b6.options&&bI.nodeName(b6,"select")){b6.options.length=0
}}return this
},clone:function(i,e){i=i==null?false:i;
e=e==null?i:e;
return this.map(function(){return bI.clone(this,i,e)
})
},html:function(e){return aB(this,function(b9){var b8=this[0]||{},b7=0,b6=this.length;
if(b9===undefined){return b8.nodeType===1?b8.innerHTML.replace(aD,""):undefined
}if(typeof b9==="string"&&!an.test(b9)&&(D.htmlSerialize||!M.test(b9))&&(D.leadingWhitespace||!b5.test(b9))&&!W[(o.exec(b9)||["",""])[1].toLowerCase()]){b9=b9.replace(aH,"<$1></$2>");
try{for(;
b7<b6;
b7++){b8=this[b7]||{};
if(b8.nodeType===1){bI.cleanData(l(b8,false));
b8.innerHTML=b9
}}b8=0
}catch(ca){}}if(b8){this.empty().append(b9)
}},null,e,arguments.length)
},replaceWith:function(){var e=arguments[0];
this.domManip(arguments,function(i){e=this.parentNode;
bI.cleanData(l(this));
if(e){e.replaceChild(i,this)
}});
return e&&(e.length||e.nodeType)?this:this.remove()
},detach:function(e){return this.remove(e,true)
},domManip:function(cd,ci){cd=az.apply([],cd);
var cb,b7,e,b9,cg,cc,ca=0,b8=this.length,cf=this,ch=b8-1,ce=cd[0],b6=bI.isFunction(ce);
if(b6||(b8>1&&typeof ce==="string"&&!D.checkClone&&bW.test(ce))){return this.each(function(cj){var i=cf.eq(cj);
if(b6){cd[0]=ce.call(this,cj,i.html())
}i.domManip(cd,ci)
})
}if(b8){cc=bI.buildFragment(cd,this[0].ownerDocument,false,this);
cb=cc.firstChild;
if(cc.childNodes.length===1){cc=cb
}if(cb){b9=bI.map(l(cc,"script"),u);
e=b9.length;
for(;
ca<b8;
ca++){b7=cc;
if(ca!==ch){b7=bI.clone(b7,true,true);
if(e){bI.merge(b9,l(b7,"script"))
}}ci.call(this[ca],b7,ca)
}if(e){cg=b9[b9.length-1].ownerDocument;
bI.map(b9,bf);
for(ca=0;
ca<e;
ca++){b7=b9[ca];
if(bB.test(b7.type||"")&&!bI._data(b7,"globalEval")&&bI.contains(cg,b7)){if(b7.src){if(bI._evalUrl){bI._evalUrl(b7.src)
}}else{bI.globalEval((b7.text||b7.textContent||b7.innerHTML||"").replace(aO,""))
}}}}cc=cb=null
}}return this
}});
bI.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,i){bI.fn[e]=function(b6){var b7,b9=0,b8=[],cb=bI(b6),ca=cb.length-1;
for(;
b9<=ca;
b9++){b7=b9===ca?this:this.clone(true);
bI(cb[b9])[i](b7);
x.apply(b8,b7.get())
}return this.pushStack(b8)
}
});
var aI,bl={};
function a4(e,b8){var i,b6=bI(b8.createElement(e)).appendTo(b8.body),b7=a5.getDefaultComputedStyle&&(i=a5.getDefaultComputedStyle(b6[0]))?i.display:bI.css(b6[0],"display");
b6.detach();
return b7
}function a0(b6){var i=n,e=bl[b6];
if(!e){e=a4(b6,i);
if(e==="none"||!e){aI=(aI||bI("<iframe frameborder='0' width='0' height='0'/>")).appendTo(i.documentElement);
i=(aI[0].contentWindow||aI[0].contentDocument).document;
i.write();
i.close();
e=a4(b6,i);
aI.detach()
}bl[b6]=e
}return e
}(function(){var e;
D.shrinkWrapBlocks=function(){if(e!=null){return e
}e=false;
var b7,i,b6;
i=n.getElementsByTagName("body")[0];
if(!i||!i.style){return
}b7=n.createElement("div");
b6=n.createElement("div");
b6.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
i.appendChild(b6).appendChild(b7);
if(typeof b7.style.zoom!==aC){b7.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
b7.appendChild(n.createElement("div")).style.width="5px";
e=b7.offsetWidth!==3
}i.removeChild(b6);
return e
}
})();
var aZ=(/^margin/);
var Y=new RegExp("^("+aE+")(?!px)[a-z%]+$","i");
var bq,G,bo=/^(top|right|bottom|left)$/;
if(a5.getComputedStyle){bq=function(e){return e.ownerDocument.defaultView.getComputedStyle(e,null)
};
G=function(cb,i,ca){var b8,b7,b9,e,b6=cb.style;
ca=ca||bq(cb);
e=ca?ca.getPropertyValue(i)||ca[i]:undefined;
if(ca){if(e===""&&!bI.contains(cb.ownerDocument,cb)){e=bI.style(cb,i)
}if(Y.test(e)&&aZ.test(i)){b8=b6.width;
b7=b6.minWidth;
b9=b6.maxWidth;
b6.minWidth=b6.maxWidth=b6.width=e;
e=ca.width;
b6.width=b8;
b6.minWidth=b7;
b6.maxWidth=b9
}}return e===undefined?e:e+""
}
}else{if(n.documentElement.currentStyle){bq=function(e){return e.currentStyle
};
G=function(ca,b7,b9){var cb,i,e,b6,b8=ca.style;
b9=b9||bq(ca);
b6=b9?b9[b7]:undefined;
if(b6==null&&b8&&b8[b7]){b6=b8[b7]
}if(Y.test(b6)&&!bo.test(b7)){cb=b8.left;
i=ca.runtimeStyle;
e=i&&i.left;
if(e){i.left=ca.currentStyle.left
}b8.left=b7==="fontSize"?"1em":b6;
b6=b8.pixelLeft+"px";
b8.left=cb;
if(e){i.left=e
}}return b6===undefined?b6:b6+""||"auto"
}
}}function a7(e,i){return{get:function(){var b6=e();
if(b6==null){return
}if(b6){delete this.get;
return
}return(this.get=i).apply(this,arguments)
}}
}(function(){var cb,b9,b7,ca,b6,b8,i;
cb=n.createElement("div");
cb.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
b7=cb.getElementsByTagName("a")[0];
b9=b7&&b7.style;
if(!b9){return
}b9.cssText="float:left;opacity:.5";
D.opacity=b9.opacity==="0.5";
D.cssFloat=!!b9.cssFloat;
cb.style.backgroundClip="content-box";
cb.cloneNode(true).style.backgroundClip="";
D.clearCloneStyle=cb.style.backgroundClip==="content-box";
D.boxSizing=b9.boxSizing===""||b9.MozBoxSizing===""||b9.WebkitBoxSizing==="";
bI.extend(D,{reliableHiddenOffsets:function(){if(b8==null){e()
}return b8
},boxSizingReliable:function(){if(b6==null){e()
}return b6
},pixelPosition:function(){if(ca==null){e()
}return ca
},reliableMarginRight:function(){if(i==null){e()
}return i
}});
function e(){var cf,cc,cd,ce;
cc=n.getElementsByTagName("body")[0];
if(!cc||!cc.style){return
}cf=n.createElement("div");
cd=n.createElement("div");
cd.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
cc.appendChild(cd).appendChild(cf);
cf.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
ca=b6=false;
i=true;
if(a5.getComputedStyle){ca=(a5.getComputedStyle(cf,null)||{}).top!=="1%";
b6=(a5.getComputedStyle(cf,null)||{width:"4px"}).width==="4px";
ce=cf.appendChild(n.createElement("div"));
ce.style.cssText=cf.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
ce.style.marginRight=ce.style.width="0";
cf.style.width="1px";
i=!parseFloat((a5.getComputedStyle(ce,null)||{}).marginRight)
}cf.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
ce=cf.getElementsByTagName("td");
ce[0].style.cssText="margin:0;border:0;padding:0;display:none";
b8=ce[0].offsetHeight===0;
if(b8){ce[0].style.display="";
ce[1].style.display="none";
b8=ce[0].offsetHeight===0
}cc.removeChild(cd)
}})();
bI.swap=function(b9,b8,ca,b7){var b6,i,e={};
for(i in b8){e[i]=b9.style[i];
b9.style[i]=b8[i]
}b6=ca.apply(b9,b7||[]);
for(i in b8){b9.style[i]=e[i]
}return b6
};
var bj=/alpha\([^)]*\)/i,aU=/opacity\s*=\s*([^)]*)/,H=/^(none|table(?!-c[ea]).+)/,bb=new RegExp("^("+aE+")(.*)$","i"),V=new RegExp("^([+-])=("+aE+")","i"),be={position:"absolute",visibility:"hidden",display:"block"},bD={letterSpacing:"0",fontWeight:"400"},aw=["Webkit","O","Moz","ms"];
function c(b8,b6){if(b6 in b8){return b6
}var b9=b6.charAt(0).toUpperCase()+b6.slice(1),e=b6,b7=aw.length;
while(b7--){b6=aw[b7]+b9;
if(b6 in b8){return b6
}}return e
}function r(ca,e){var cb,b8,b9,i=[],b6=0,b7=ca.length;
for(;
b6<b7;
b6++){b8=ca[b6];
if(!b8.style){continue
}i[b6]=bI._data(b8,"olddisplay");
cb=b8.style.display;
if(e){if(!i[b6]&&cb==="none"){b8.style.display=""
}if(b8.style.display===""&&S(b8)){i[b6]=bI._data(b8,"olddisplay",a0(b8.nodeName))
}}else{b9=S(b8);
if(cb&&cb!=="none"||!b9){bI._data(b8,"olddisplay",b9?cb:bI.css(b8,"display"))
}}}for(b6=0;
b6<b7;
b6++){b8=ca[b6];
if(!b8.style){continue
}if(!e||b8.style.display==="none"||b8.style.display===""){b8.style.display=e?i[b6]||"":"none"
}}return ca
}function aN(e,b6,b7){var i=bb.exec(b6);
return i?Math.max(0,i[1]-(b7||0))+(i[2]||"px"):b6
}function ax(b9,b6,e,cb,b8){var b7=e===(cb?"border":"content")?4:b6==="width"?1:0,ca=0;
for(;
b7<4;
b7+=2){if(e==="margin"){ca+=bI.css(b9,e+bT[b7],true,b8)
}if(cb){if(e==="content"){ca-=bI.css(b9,"padding"+bT[b7],true,b8)
}if(e!=="margin"){ca-=bI.css(b9,"border"+bT[b7]+"Width",true,b8)
}}else{ca+=bI.css(b9,"padding"+bT[b7],true,b8);
if(e!=="padding"){ca+=bI.css(b9,"border"+bT[b7]+"Width",true,b8)
}}}return ca
}function v(b8,i,e){var b7=true,b9=i==="width"?b8.offsetWidth:b8.offsetHeight,b6=bq(b8),ca=D.boxSizing&&bI.css(b8,"boxSizing",false,b6)==="border-box";
if(b9<=0||b9==null){b9=G(b8,i,b6);
if(b9<0||b9==null){b9=b8.style[i]
}if(Y.test(b9)){return b9
}b7=ca&&(D.boxSizingReliable()||b9===b8.style[i]);
b9=parseFloat(b9)||0
}return(b9+ax(b8,i,e||(ca?"border":"content"),b7,b6))+"px"
}bI.extend({cssHooks:{opacity:{get:function(b6,i){if(i){var e=G(b6,"opacity");
return e===""?"1":e
}}}},cssNumber:{columnCount:true,fillOpacity:true,flexGrow:true,flexShrink:true,fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":D.cssFloat?"cssFloat":"styleFloat"},style:function(b7,b6,cd,b8){if(!b7||b7.nodeType===3||b7.nodeType===8||!b7.style){return
}var cb,cc,ce,b9=bI.camelCase(b6),i=b7.style;
b6=bI.cssProps[b9]||(bI.cssProps[b9]=c(i,b9));
ce=bI.cssHooks[b6]||bI.cssHooks[b9];
if(cd!==undefined){cc=typeof cd;
if(cc==="string"&&(cb=V.exec(cd))){cd=(cb[1]+1)*cb[2]+parseFloat(bI.css(b7,b6));
cc="number"
}if(cd==null||cd!==cd){return
}if(cc==="number"&&!bI.cssNumber[b9]){cd+="px"
}if(!D.clearCloneStyle&&cd===""&&b6.indexOf("background")===0){i[b6]="inherit"
}if(!ce||!("set" in ce)||(cd=ce.set(b7,cd,b8))!==undefined){try{i[b6]=cd
}catch(ca){}}}else{if(ce&&"get" in ce&&(cb=ce.get(b7,false,b8))!==undefined){return cb
}return i[b6]
}},css:function(ca,b8,i,b9){var b7,cb,e,b6=bI.camelCase(b8);
b8=bI.cssProps[b6]||(bI.cssProps[b6]=c(ca.style,b6));
e=bI.cssHooks[b8]||bI.cssHooks[b6];
if(e&&"get" in e){cb=e.get(ca,true,i)
}if(cb===undefined){cb=G(ca,b8,b9)
}if(cb==="normal"&&b8 in bD){cb=bD[b8]
}if(i===""||i){b7=parseFloat(cb);
return i===true||bI.isNumeric(b7)?b7||0:cb
}return cb
}});
bI.each(["height","width"],function(b6,e){bI.cssHooks[e]={get:function(b8,b7,i){if(b7){return H.test(bI.css(b8,"display"))&&b8.offsetWidth===0?bI.swap(b8,be,function(){return v(b8,e,i)
}):v(b8,e,i)
}},set:function(b8,b9,i){var b7=i&&bq(b8);
return aN(b8,b9,i?ax(b8,e,i,D.boxSizing&&bI.css(b8,"boxSizing",false,b7)==="border-box",b7):0)
}}
});
if(!D.opacity){bI.cssHooks.opacity={get:function(i,e){return aU.test((e&&i.currentStyle?i.currentStyle.filter:i.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":e?"1":""
},set:function(b8,b9){var b7=b8.style,i=b8.currentStyle,e=bI.isNumeric(b9)?"alpha(opacity="+b9*100+")":"",b6=i&&i.filter||b7.filter||"";
b7.zoom=1;
if((b9>=1||b9==="")&&bI.trim(b6.replace(bj,""))===""&&b7.removeAttribute){b7.removeAttribute("filter");
if(b9===""||i&&!i.filter){return
}}b7.filter=bj.test(b6)?b6.replace(bj,e):b6+" "+e
}}
}bI.cssHooks.marginRight=a7(D.reliableMarginRight,function(i,e){if(e){return bI.swap(i,{display:"inline-block"},G,[i,"marginRight"])
}});
bI.each({margin:"",padding:"",border:"Width"},function(e,i){bI.cssHooks[e+i]={expand:function(b8){var b7=0,b6={},b9=typeof b8==="string"?b8.split(" "):[b8];
for(;
b7<4;
b7++){b6[e+bT[b7]+i]=b9[b7]||b9[b7-2]||b9[0]
}return b6
}};
if(!aZ.test(e)){bI.cssHooks[e+i].set=aN
}});
bI.fn.extend({css:function(e,i){return aB(this,function(ca,b7,cb){var b9,b6,cc={},b8=0;
if(bI.isArray(b7)){b9=bq(ca);
b6=b7.length;
for(;
b8<b6;
b8++){cc[b7[b8]]=bI.css(ca,b7[b8],false,b9)
}return cc
}return cb!==undefined?bI.style(ca,b7,cb):bI.css(ca,b7)
},e,i,arguments.length>1)
},show:function(){return r(this,true)
},hide:function(){return r(this)
},toggle:function(e){if(typeof e==="boolean"){return e?this.show():this.hide()
}return this.each(function(){if(S(this)){bI(this).show()
}else{bI(this).hide()
}})
}});
function J(b6,i,b8,e,b7){return new J.prototype.init(b6,i,b8,e,b7)
}bI.Tween=J;
J.prototype={constructor:J,init:function(b7,i,b9,e,b8,b6){this.elem=b7;
this.prop=b9;
this.easing=b8||"swing";
this.options=i;
this.start=this.now=this.cur();
this.end=e;
this.unit=b6||(bI.cssNumber[b9]?"":"px")
},cur:function(){var e=J.propHooks[this.prop];
return e&&e.get?e.get(this):J.propHooks._default.get(this)
},run:function(b6){var i,e=J.propHooks[this.prop];
if(this.options.duration){this.pos=i=bI.easing[this.easing](b6,this.options.duration*b6,0,1,this.options.duration)
}else{this.pos=i=b6
}this.now=(this.end-this.start)*i+this.start;
if(this.options.step){this.options.step.call(this.elem,this.now,this)
}if(e&&e.set){e.set(this)
}else{J.propHooks._default.set(this)
}return this
}};
J.prototype.init.prototype=J.prototype;
J.propHooks={_default:{get:function(i){var e;
if(i.elem[i.prop]!=null&&(!i.elem.style||i.elem.style[i.prop]==null)){return i.elem[i.prop]
}e=bI.css(i.elem,i.prop,"");
return !e||e==="auto"?0:e
},set:function(e){if(bI.fx.step[e.prop]){bI.fx.step[e.prop](e)
}else{if(e.elem.style&&(e.elem.style[bI.cssProps[e.prop]]!=null||bI.cssHooks[e.prop])){bI.style(e.elem,e.prop,e.now+e.unit)
}else{e.elem[e.prop]=e.now
}}}}};
J.propHooks.scrollTop=J.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now
}}};
bI.easing={linear:function(e){return e
},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2
}};
bI.fx=J.prototype.init;
bI.fx.step={};
var N,ae,bR=/^(?:toggle|show|hide)$/,bJ=new RegExp("^(?:([+-])=|)("+aE+")([a-z%]*)$","i"),bP=/queueHooks$/,aG=[h],a2={"*":[function(e,ca){var cc=this.createTween(e,ca),b8=cc.cur(),b7=bJ.exec(ca),cb=b7&&b7[3]||(bI.cssNumber[e]?"":"px"),i=(bI.cssNumber[e]||cb!=="px"&&+b8)&&bJ.exec(bI.css(cc.elem,e)),b6=1,b9=20;
if(i&&i[3]!==cb){cb=cb||i[3];
b7=b7||[];
i=+b8||1;
do{b6=b6||".5";
i=i/b6;
bI.style(cc.elem,e,i+cb)
}while(b6!==(b6=cc.cur()/b8)&&b6!==1&&--b9)
}if(b7){i=cc.start=+i||+b8||0;
cc.unit=cb;
cc.end=b7[1]?i+(b7[1]+1)*b7[2]:+b7[2]
}return cc
}]};
function bn(){setTimeout(function(){N=undefined
});
return(N=bI.now())
}function bH(b7,b9){var b8,e={height:b7},b6=0;
b9=b9?1:0;
for(;
b6<4;
b6+=2-b9){b8=bT[b6];
e["margin"+b8]=e["padding"+b8]=b7
}if(b9){e.opacity=e.width=b7
}return e
}function bd(b8,ca,b7){var i,b9=(a2[ca]||[]).concat(a2["*"]),e=0,b6=b9.length;
for(;
e<b6;
e++){if((i=b9[e].call(b7,ca,b8))){return i
}}}function h(b7,cc,e){var b6,cf,b9,ci,cj,cg,cb,ce,b8=this,cd={},i=b7.style,ca=b7.nodeType&&S(b7),ch=bI._data(b7,"fxshow");
if(!e.queue){cj=bI._queueHooks(b7,"fx");
if(cj.unqueued==null){cj.unqueued=0;
cg=cj.empty.fire;
cj.empty.fire=function(){if(!cj.unqueued){cg()
}}
}cj.unqueued++;
b8.always(function(){b8.always(function(){cj.unqueued--;
if(!bI.queue(b7,"fx").length){cj.empty.fire()
}})
})
}if(b7.nodeType===1&&("height" in cc||"width" in cc)){e.overflow=[i.overflow,i.overflowX,i.overflowY];
cb=bI.css(b7,"display");
ce=cb==="none"?bI._data(b7,"olddisplay")||a0(b7.nodeName):cb;
if(ce==="inline"&&bI.css(b7,"float")==="none"){if(!D.inlineBlockNeedsLayout||a0(b7.nodeName)==="inline"){i.display="inline-block"
}else{i.zoom=1
}}}if(e.overflow){i.overflow="hidden";
if(!D.shrinkWrapBlocks()){b8.always(function(){i.overflow=e.overflow[0];
i.overflowX=e.overflow[1];
i.overflowY=e.overflow[2]
})
}}for(b6 in cc){cf=cc[b6];
if(bR.exec(cf)){delete cc[b6];
b9=b9||cf==="toggle";
if(cf===(ca?"hide":"show")){if(cf==="show"&&ch&&ch[b6]!==undefined){ca=true
}else{continue
}}cd[b6]=ch&&ch[b6]||bI.style(b7,b6)
}else{cb=undefined
}}if(!bI.isEmptyObject(cd)){if(ch){if("hidden" in ch){ca=ch.hidden
}}else{ch=bI._data(b7,"fxshow",{})
}if(b9){ch.hidden=!ca
}if(ca){bI(b7).show()
}else{b8.done(function(){bI(b7).hide()
})
}b8.done(function(){var ck;
bI._removeData(b7,"fxshow");
for(ck in cd){bI.style(b7,ck,cd[ck])
}});
for(b6 in cd){ci=bd(ca?ch[b6]:0,b6,b8);
if(!(b6 in ch)){ch[b6]=ci.start;
if(ca){ci.end=ci.start;
ci.start=b6==="width"||b6==="height"?1:0
}}}}else{if((cb==="none"?a0(b7.nodeName):cb)==="inline"){i.display=cb
}}}function ao(b7,b9){var b6,i,ca,b8,e;
for(b6 in b7){i=bI.camelCase(b6);
ca=b9[i];
b8=b7[b6];
if(bI.isArray(b8)){ca=b8[1];
b8=b7[b6]=b8[0]
}if(b6!==i){b7[i]=b8;
delete b7[b6]
}e=bI.cssHooks[i];
if(e&&"expand" in e){b8=e.expand(b8);
delete b7[i];
for(b6 in b8){if(!(b6 in b7)){b7[b6]=b8[b6];
b9[b6]=ca
}}}else{b9[i]=ca
}}}function f(b6,ca,cd){var ce,e,b9=0,i=aG.length,cc=bI.Deferred().always(function(){delete b8.elem
}),b8=function(){if(e){return false
}var ck=N||bn(),ch=Math.max(0,b7.startTime+b7.duration-ck),cf=ch/b7.duration||0,cj=1-cf,cg=0,ci=b7.tweens.length;
for(;
cg<ci;
cg++){b7.tweens[cg].run(cj)
}cc.notifyWith(b6,[b7,cj,ch]);
if(cj<1&&ci){return ch
}else{cc.resolveWith(b6,[b7]);
return false
}},b7=cc.promise({elem:b6,props:bI.extend({},ca),opts:bI.extend(true,{specialEasing:{}},cd),originalProperties:ca,originalOptions:cd,startTime:N||bn(),duration:cd.duration,tweens:[],createTween:function(ch,cf){var cg=bI.Tween(b6,b7.opts,ch,cf,b7.opts.specialEasing[ch]||b7.opts.easing);
b7.tweens.push(cg);
return cg
},stop:function(cg){var cf=0,ch=cg?b7.tweens.length:0;
if(e){return this
}e=true;
for(;
cf<ch;
cf++){b7.tweens[cf].run(1)
}if(cg){cc.resolveWith(b6,[b7,cg])
}else{cc.rejectWith(b6,[b7,cg])
}return this
}}),cb=b7.props;
ao(cb,b7.opts.specialEasing);
for(;
b9<i;
b9++){ce=aG[b9].call(b7,b6,cb,b7.opts);
if(ce){return ce
}}bI.map(cb,bd,b7);
if(bI.isFunction(b7.opts.start)){b7.opts.start.call(b6,b7)
}bI.fx.timer(bI.extend(b8,{elem:b6,anim:b7,queue:b7.opts.queue}));
return b7.progress(b7.opts.progress).done(b7.opts.done,b7.opts.complete).fail(b7.opts.fail).always(b7.opts.always)
}bI.Animation=bI.extend(f,{tweener:function(i,b8){if(bI.isFunction(i)){b8=i;
i=["*"]
}else{i=i.split(" ")
}var b7,e=0,b6=i.length;
for(;
e<b6;
e++){b7=i[e];
a2[b7]=a2[b7]||[];
a2[b7].unshift(b8)
}},prefilter:function(i,e){if(e){aG.unshift(i)
}else{aG.push(i)
}}});
bI.speed=function(b6,b7,i){var e=b6&&typeof b6==="object"?bI.extend({},b6):{complete:i||!i&&b7||bI.isFunction(b6)&&b6,duration:b6,easing:i&&b7||b7&&!bI.isFunction(b7)&&b7};
e.duration=bI.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in bI.fx.speeds?bI.fx.speeds[e.duration]:bI.fx.speeds._default;
if(e.queue==null||e.queue===true){e.queue="fx"
}e.old=e.complete;
e.complete=function(){if(bI.isFunction(e.old)){e.old.call(this)
}if(e.queue){bI.dequeue(this,e.queue)
}};
return e
};
bI.fn.extend({fadeTo:function(e,b7,b6,i){return this.filter(S).css("opacity",0).show().end().animate({opacity:b7},e,b6,i)
},animate:function(ca,b7,b9,b8){var b6=bI.isEmptyObject(ca),e=bI.speed(b7,b9,b8),i=function(){var cb=f(this,bI.extend({},ca),e);
if(b6||bI._data(this,"finish")){cb.stop(true)
}};
i.finish=i;
return b6||e.queue===false?this.each(i):this.queue(e.queue,i)
},stop:function(b6,i,e){var b7=function(b8){var b9=b8.stop;
delete b8.stop;
b9(e)
};
if(typeof b6!=="string"){e=i;
i=b6;
b6=undefined
}if(i&&b6!==false){this.queue(b6||"fx",[])
}return this.each(function(){var cb=true,b8=b6!=null&&b6+"queueHooks",ca=bI.timers,b9=bI._data(this);
if(b8){if(b9[b8]&&b9[b8].stop){b7(b9[b8])
}}else{for(b8 in b9){if(b9[b8]&&b9[b8].stop&&bP.test(b8)){b7(b9[b8])
}}}for(b8=ca.length;
b8--;
){if(ca[b8].elem===this&&(b6==null||ca[b8].queue===b6)){ca[b8].anim.stop(e);
cb=false;
ca.splice(b8,1)
}}if(cb||!e){bI.dequeue(this,b6)
}})
},finish:function(e){if(e!==false){e=e||"fx"
}return this.each(function(){var b7,ca=bI._data(this),b6=ca[e+"queue"],i=ca[e+"queueHooks"],b9=bI.timers,b8=b6?b6.length:0;
ca.finish=true;
bI.queue(this,e,[]);
if(i&&i.stop){i.stop.call(this,true)
}for(b7=b9.length;
b7--;
){if(b9[b7].elem===this&&b9[b7].queue===e){b9[b7].anim.stop(true);
b9.splice(b7,1)
}}for(b7=0;
b7<b8;
b7++){if(b6[b7]&&b6[b7].finish){b6[b7].finish.call(this)
}}delete ca.finish
})
}});
bI.each(["toggle","show","hide"],function(b6,e){var b7=bI.fn[e];
bI.fn[e]=function(i,b9,b8){return i==null||typeof i==="boolean"?b7.apply(this,arguments):this.animate(bH(e,true),i,b9,b8)
}
});
bI.each({slideDown:bH("show"),slideUp:bH("hide"),slideToggle:bH("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,i){bI.fn[e]=function(b6,b8,b7){return this.animate(i,b6,b8,b7)
}
});
bI.timers=[];
bI.fx.tick=function(){var b7,b6=bI.timers,e=0;
N=bI.now();
for(;
e<b6.length;
e++){b7=b6[e];
if(!b7()&&b6[e]===b7){b6.splice(e--,1)
}}if(!b6.length){bI.fx.stop()
}N=undefined
};
bI.fx.timer=function(e){bI.timers.push(e);
if(e()){bI.fx.start()
}else{bI.timers.pop()
}};
bI.fx.interval=13;
bI.fx.start=function(){if(!ae){ae=setInterval(bI.fx.tick,bI.fx.interval)
}};
bI.fx.stop=function(){clearInterval(ae);
ae=null
};
bI.fx.speeds={slow:600,fast:200,_default:400};
bI.fn.delay=function(i,e){i=bI.fx?bI.fx.speeds[i]||i:i;
e=e||"fx";
return this.queue(e,function(b7,b6){var b8=setTimeout(b7,i);
b6.stop=function(){clearTimeout(b8)
}
})
};
(function(){var b6,b8,e,i,b7;
b8=n.createElement("div");
b8.setAttribute("className","t");
b8.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
i=b8.getElementsByTagName("a")[0];
e=n.createElement("select");
b7=e.appendChild(n.createElement("option"));
b6=b8.getElementsByTagName("input")[0];
i.style.cssText="top:1px";
D.getSetAttribute=b8.className!=="t";
D.style=/top/.test(i.getAttribute("style"));
D.hrefNormalized=i.getAttribute("href")==="/a";
D.checkOn=!!b6.value;
D.optSelected=b7.selected;
D.enctype=!!n.createElement("form").enctype;
e.disabled=true;
D.optDisabled=!b7.disabled;
b6=n.createElement("input");
b6.setAttribute("value","");
D.input=b6.getAttribute("value")==="";
b6.value="t";
b6.setAttribute("type","radio");
D.radioValue=b6.value==="t"
})();
var al=/\r/g;
bI.fn.extend({val:function(b7){var e,i,b8,b6=this[0];
if(!arguments.length){if(b6){e=bI.valHooks[b6.type]||bI.valHooks[b6.nodeName.toLowerCase()];
if(e&&"get" in e&&(i=e.get(b6,"value"))!==undefined){return i
}i=b6.value;
return typeof i==="string"?i.replace(al,""):i==null?"":i
}return
}b8=bI.isFunction(b7);
return this.each(function(b9){var ca;
if(this.nodeType!==1){return
}if(b8){ca=b7.call(this,b9,bI(this).val())
}else{ca=b7
}if(ca==null){ca=""
}else{if(typeof ca==="number"){ca+=""
}else{if(bI.isArray(ca)){ca=bI.map(ca,function(cb){return cb==null?"":cb+""
})
}}}e=bI.valHooks[this.type]||bI.valHooks[this.nodeName.toLowerCase()];
if(!e||!("set" in e)||e.set(this,ca,"value")===undefined){this.value=ca
}})
}});
bI.extend({valHooks:{option:{get:function(e){var i=bI.find.attr(e,"value");
return i!=null?i:bI.trim(bI.text(e))
}},select:{get:function(e){var cb,b7,cd=e.options,b9=e.selectedIndex,b8=e.type==="select-one"||b9<0,cc=b8?null:[],ca=b8?b9+1:cd.length,b6=b9<0?ca:b8?b9:0;
for(;
b6<ca;
b6++){b7=cd[b6];
if((b7.selected||b6===b9)&&(D.optDisabled?!b7.disabled:b7.getAttribute("disabled")===null)&&(!b7.parentNode.disabled||!bI.nodeName(b7.parentNode,"optgroup"))){cb=bI(b7).val();
if(b8){return cb
}cc.push(cb)
}}return cc
},set:function(ca,cb){var cc,b9,b7=ca.options,e=bI.makeArray(cb),b8=b7.length;
while(b8--){b9=b7[b8];
if(bI.inArray(bI.valHooks.option.get(b9),e)>=0){try{b9.selected=cc=true
}catch(b6){b9.scrollHeight
}}else{b9.selected=false
}}if(!cc){ca.selectedIndex=-1
}return b7
}}}});
bI.each(["radio","checkbox"],function(){bI.valHooks[this]={set:function(e,i){if(bI.isArray(i)){return(e.checked=bI.inArray(bI(e).val(),i)>=0)
}}};
if(!D.checkOn){bI.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value
}
}});
var ba,b3,bO=bI.expr.attrHandle,aq=/^(?:checked|selected)$/i,bN=D.getSetAttribute,bF=D.input;
bI.fn.extend({attr:function(e,i){return aB(this,bI.attr,e,i,arguments.length>1)
},removeAttr:function(e){return this.each(function(){bI.removeAttr(this,e)
})
}});
bI.extend({attr:function(b8,b7,b9){var e,b6,i=b8.nodeType;
if(!b8||i===3||i===8||i===2){return
}if(typeof b8.getAttribute===aC){return bI.prop(b8,b7,b9)
}if(i!==1||!bI.isXMLDoc(b8)){b7=b7.toLowerCase();
e=bI.attrHooks[b7]||(bI.expr.match.bool.test(b7)?b3:ba)
}if(b9!==undefined){if(b9===null){bI.removeAttr(b8,b7)
}else{if(e&&"set" in e&&(b6=e.set(b8,b9,b7))!==undefined){return b6
}else{b8.setAttribute(b7,b9+"");
return b9
}}}else{if(e&&"get" in e&&(b6=e.get(b8,b7))!==null){return b6
}else{b6=bI.find.attr(b8,b7);
return b6==null?undefined:b6
}}},removeAttr:function(b7,b9){var e,b8,b6=0,ca=b9&&b9.match(aF);
if(ca&&b7.nodeType===1){while((e=ca[b6++])){b8=bI.propFix[e]||e;
if(bI.expr.match.bool.test(e)){if(bF&&bN||!aq.test(e)){b7[b8]=false
}else{b7[bI.camelCase("default-"+e)]=b7[b8]=false
}}else{bI.attr(b7,e,"")
}b7.removeAttribute(bN?e:b8)
}}},attrHooks:{type:{set:function(e,i){if(!D.radioValue&&i==="radio"&&bI.nodeName(e,"input")){var b6=e.value;
e.setAttribute("type",i);
if(b6){e.value=b6
}return i
}}}}});
b3={set:function(i,b6,e){if(b6===false){bI.removeAttr(i,e)
}else{if(bF&&bN||!aq.test(e)){i.setAttribute(!bN&&bI.propFix[e]||e,e)
}else{i[bI.camelCase("default-"+e)]=i[e]=true
}}return e
}};
bI.each(bI.expr.match.bool.source.match(/\w+/g),function(b7,b6){var e=bO[b6]||bI.find.attr;
bO[b6]=bF&&bN||!aq.test(b6)?function(b9,b8,cb){var i,ca;
if(!cb){ca=bO[b8];
bO[b8]=i;
i=e(b9,b8,cb)!=null?b8.toLowerCase():null;
bO[b8]=ca
}return i
}:function(b8,i,b9){if(!b9){return b8[bI.camelCase("default-"+i)]?i.toLowerCase():null
}}
});
if(!bF||!bN){bI.attrHooks.value={set:function(i,b6,e){if(bI.nodeName(i,"input")){i.defaultValue=b6
}else{return ba&&ba.set(i,b6,e)
}}}
}if(!bN){ba={set:function(b6,b7,i){var e=b6.getAttributeNode(i);
if(!e){b6.setAttributeNode((e=b6.ownerDocument.createAttribute(i)))
}e.value=b7+="";
if(i==="value"||b7===b6.getAttribute(i)){return b7
}}};
bO.id=bO.name=bO.coords=function(b6,i,b7){var e;
if(!b7){return(e=b6.getAttributeNode(i))&&e.value!==""?e.value:null
}};
bI.valHooks.button={get:function(b6,i){var e=b6.getAttributeNode(i);
if(e&&e.specified){return e.value
}},set:ba.set};
bI.attrHooks.contenteditable={set:function(i,b6,e){ba.set(i,b6===""?false:b6,e)
}};
bI.each(["width","height"],function(b6,e){bI.attrHooks[e]={set:function(i,b7){if(b7===""){i.setAttribute(e,"auto");
return b7
}}}
})
}if(!D.style){bI.attrHooks.style={get:function(e){return e.style.cssText||undefined
},set:function(e,i){return(e.style.cssText=i+"")
}}
}var aJ=/^(?:input|select|textarea|button|object)$/i,F=/^(?:a|area)$/i;
bI.fn.extend({prop:function(e,i){return aB(this,bI.prop,e,i,arguments.length>1)
},removeProp:function(e){e=bI.propFix[e]||e;
return this.each(function(){try{this[e]=undefined;
delete this[e]
}catch(i){}})
}});
bI.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(b9,b7,ca){var b6,e,b8,i=b9.nodeType;
if(!b9||i===3||i===8||i===2){return
}b8=i!==1||!bI.isXMLDoc(b9);
if(b8){b7=bI.propFix[b7]||b7;
e=bI.propHooks[b7]
}if(ca!==undefined){return e&&"set" in e&&(b6=e.set(b9,ca,b7))!==undefined?b6:(b9[b7]=ca)
}else{return e&&"get" in e&&(b6=e.get(b9,b7))!==null?b6:b9[b7]
}},propHooks:{tabIndex:{get:function(i){var e=bI.find.attr(i,"tabindex");
return e?parseInt(e,10):aJ.test(i.nodeName)||F.test(i.nodeName)&&i.href?0:-1
}}}});
if(!D.hrefNormalized){bI.each(["href","src"],function(b6,e){bI.propHooks[e]={get:function(i){return i.getAttribute(e,4)
}}
})
}if(!D.optSelected){bI.propHooks.selected={get:function(i){var e=i.parentNode;
if(e){e.selectedIndex;
if(e.parentNode){e.parentNode.selectedIndex
}}return null
}}
}bI.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){bI.propFix[this.toLowerCase()]=this
});
if(!D.enctype){bI.propFix.enctype="encoding"
}var bL=/[\t\r\n\f]/g;
bI.fn.extend({addClass:function(cd){var b7,b6,ce,cb,b8,e,b9=0,ca=this.length,cc=typeof cd==="string"&&cd;
if(bI.isFunction(cd)){return this.each(function(i){bI(this).addClass(cd.call(this,i,this.className))
})
}if(cc){b7=(cd||"").match(aF)||[];
for(;
b9<ca;
b9++){b6=this[b9];
ce=b6.nodeType===1&&(b6.className?(" "+b6.className+" ").replace(bL," "):" ");
if(ce){b8=0;
while((cb=b7[b8++])){if(ce.indexOf(" "+cb+" ")<0){ce+=cb+" "
}}e=bI.trim(ce);
if(b6.className!==e){b6.className=e
}}}}return this
},removeClass:function(cd){var b7,b6,ce,cb,b8,e,b9=0,ca=this.length,cc=arguments.length===0||typeof cd==="string"&&cd;
if(bI.isFunction(cd)){return this.each(function(i){bI(this).removeClass(cd.call(this,i,this.className))
})
}if(cc){b7=(cd||"").match(aF)||[];
for(;
b9<ca;
b9++){b6=this[b9];
ce=b6.nodeType===1&&(b6.className?(" "+b6.className+" ").replace(bL," "):"");
if(ce){b8=0;
while((cb=b7[b8++])){while(ce.indexOf(" "+cb+" ")>=0){ce=ce.replace(" "+cb+" "," ")
}}e=cd?bI.trim(ce):"";
if(b6.className!==e){b6.className=e
}}}}return this
},toggleClass:function(b6,e){var i=typeof b6;
if(typeof e==="boolean"&&i==="string"){return e?this.addClass(b6):this.removeClass(b6)
}if(bI.isFunction(b6)){return this.each(function(b7){bI(this).toggleClass(b6.call(this,b7,this.className,e),e)
})
}return this.each(function(){if(i==="string"){var b9,b8=0,b7=bI(this),ca=b6.match(aF)||[];
while((b9=ca[b8++])){if(b7.hasClass(b9)){b7.removeClass(b9)
}else{b7.addClass(b9)
}}}else{if(i===aC||i==="boolean"){if(this.className){bI._data(this,"__className__",this.className)
}this.className=this.className||b6===false?"":bI._data(this,"__className__")||""
}}})
},hasClass:function(e){var b8=" "+e+" ",b7=0,b6=this.length;
for(;
b7<b6;
b7++){if(this[b7].nodeType===1&&(" "+this[b7].className+" ").replace(bL," ").indexOf(b8)>=0){return true
}}return false
}});
bI.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(b6,e){bI.fn[e]=function(b7,i){return arguments.length>0?this.on(e,null,b7,i):this.trigger(e)
}
});
bI.fn.extend({hover:function(e,i){return this.mouseenter(e).mouseleave(i||e)
},bind:function(e,b6,i){return this.on(e,null,b6,i)
},unbind:function(e,i){return this.off(e,null,i)
},delegate:function(e,i,b7,b6){return this.on(i,e,b7,b6)
},undelegate:function(e,i,b6){return arguments.length===1?this.off(e,"**"):this.off(i,e||"**",b6)
}});
var bp=bI.now();
var bQ=(/\?/);
var a1=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
bI.parseJSON=function(e){if(a5.JSON&&a5.JSON.parse){return a5.JSON.parse(e+"")
}var b7,b6=null,i=bI.trim(e+"");
return i&&!bI.trim(i.replace(a1,function(ca,b8,b9,cb){if(b7&&b8){b6=0
}if(b6===0){return ca
}b7=b9||b8;
b6+=!cb-!b9;
return""
}))?(Function("return "+i))():bI.error("Invalid JSON: "+e)
};
bI.parseXML=function(b7){var i,b6;
if(!b7||typeof b7!=="string"){return null
}try{if(a5.DOMParser){b6=new DOMParser();
i=b6.parseFromString(b7,"text/xml")
}else{i=new ActiveXObject("Microsoft.XMLDOM");
i.async="false";
i.loadXML(b7)
}}catch(b8){i=undefined
}if(!i||!i.documentElement||i.getElementsByTagName("parsererror").length){bI.error("Invalid XML: "+b7)
}return i
};
var b4,aa,ap=/#.*$/,R=/([?&])_=[^&]*/,ah=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,C=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,q=/^(?:GET|HEAD)$/,aK=/^\/\//,aV=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,w={},a9={},aX="*/".concat("*");
try{aa=location.href
}catch(bi){aa=n.createElement("a");
aa.href="";
aa=aa.href
}b4=aV.exec(aa.toLowerCase())||[];
function bK(e){return function(b9,ca){if(typeof b9!=="string"){ca=b9;
b9="*"
}var b6,b7=0,b8=b9.toLowerCase().match(aF)||[];
if(bI.isFunction(ca)){while((b6=b8[b7++])){if(b6.charAt(0)==="+"){b6=b6.slice(1)||"*";
(e[b6]=e[b6]||[]).unshift(ca)
}else{(e[b6]=e[b6]||[]).push(ca)
}}}}
}function p(e,b6,ca,b7){var i={},b8=(e===a9);
function b9(cb){var cc;
i[cb]=true;
bI.each(e[cb]||[],function(ce,cd){var cf=cd(b6,ca,b7);
if(typeof cf==="string"&&!b8&&!i[cf]){b6.dataTypes.unshift(cf);
b9(cf);
return false
}else{if(b8){return !(cc=cf)
}}});
return cc
}return b9(b6.dataTypes[0])||!i["*"]&&b9("*")
}function t(b6,b7){var e,i,b8=bI.ajaxSettings.flatOptions||{};
for(i in b7){if(b7[i]!==undefined){(b8[i]?b6:(e||(e={})))[i]=b7[i]
}}if(e){bI.extend(true,b6,e)
}return b6
}function g(cc,cb,b8){var e,b7,b6,b9,i=cc.contents,ca=cc.dataTypes;
while(ca[0]==="*"){ca.shift();
if(b7===undefined){b7=cc.mimeType||cb.getResponseHeader("Content-Type")
}}if(b7){for(b9 in i){if(i[b9]&&i[b9].test(b7)){ca.unshift(b9);
break
}}}if(ca[0] in b8){b6=ca[0]
}else{for(b9 in b8){if(!ca[0]||cc.converters[b9+" "+ca[0]]){b6=b9;
break
}if(!e){e=b9
}}b6=b6||e
}if(b6){if(b6!==ca[0]){ca.unshift(b6)
}return b8[b6]
}}function ag(cg,b8,cd,b6){var i,cb,ce,b9,b7,cf={},cc=cg.dataTypes.slice();
if(cc[1]){for(ce in cg.converters){cf[ce.toLowerCase()]=cg.converters[ce]
}}cb=cc.shift();
while(cb){if(cg.responseFields[cb]){cd[cg.responseFields[cb]]=b8
}if(!b7&&b6&&cg.dataFilter){b8=cg.dataFilter(b8,cg.dataType)
}b7=cb;
cb=cc.shift();
if(cb){if(cb==="*"){cb=b7
}else{if(b7!=="*"&&b7!==cb){ce=cf[b7+" "+cb]||cf["* "+cb];
if(!ce){for(i in cf){b9=i.split(" ");
if(b9[1]===cb){ce=cf[b7+" "+b9[0]]||cf["* "+b9[0]];
if(ce){if(ce===true){ce=cf[i]
}else{if(cf[i]!==true){cb=b9[0];
cc.unshift(b9[1])
}}break
}}}}if(ce!==true){if(ce&&cg["throws"]){b8=ce(b8)
}else{try{b8=ce(b8)
}catch(ca){return{state:"parsererror",error:ce?ca:"No conversion from "+b7+" to "+cb}
}}}}}}}return{state:"success",data:b8}
}bI.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:aa,type:"GET",isLocal:C.test(b4[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":aX,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":bI.parseJSON,"text xml":bI.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(i,e){return e?t(t(i,bI.ajaxSettings),e):t(bI.ajaxSettings,i)
},ajaxPrefilter:bK(w),ajaxTransport:bK(a9),ajax:function(ca,b7){if(typeof ca==="object"){b7=ca;
ca=undefined
}b7=b7||{};
var cj,cl,cb,cq,cf,b6,cm,b8,ce=bI.ajaxSetup({},b7),cs=ce.context||ce,ch=ce.context&&(cs.nodeType||cs.jquery)?bI(cs):bI.event,cr=bI.Deferred(),co=bI.Callbacks("once memory"),cc=ce.statusCode||{},ci={},cp={},b9=0,cd="canceled",ck={readyState:0,getResponseHeader:function(i){var e;
if(b9===2){if(!b8){b8={};
while((e=ah.exec(cq))){b8[e[1].toLowerCase()]=e[2]
}}e=b8[i.toLowerCase()]
}return e==null?null:e
},getAllResponseHeaders:function(){return b9===2?cq:null
},setRequestHeader:function(i,ct){var e=i.toLowerCase();
if(!b9){i=cp[e]=cp[e]||i;
ci[i]=ct
}return this
},overrideMimeType:function(e){if(!b9){ce.mimeType=e
}return this
},statusCode:function(i){var e;
if(i){if(b9<2){for(e in i){cc[e]=[cc[e],i[e]]
}}else{ck.always(i[ck.status])
}}return this
},abort:function(i){var e=i||cd;
if(cm){cm.abort(e)
}cg(0,e);
return this
}};
cr.promise(ck).complete=co.add;
ck.success=ck.done;
ck.error=ck.fail;
ce.url=((ca||ce.url||aa)+"").replace(ap,"").replace(aK,b4[1]+"//");
ce.type=b7.method||b7.type||ce.method||ce.type;
ce.dataTypes=bI.trim(ce.dataType||"*").toLowerCase().match(aF)||[""];
if(ce.crossDomain==null){cj=aV.exec(ce.url.toLowerCase());
ce.crossDomain=!!(cj&&(cj[1]!==b4[1]||cj[2]!==b4[2]||(cj[3]||(cj[1]==="http:"?"80":"443"))!==(b4[3]||(b4[1]==="http:"?"80":"443"))))
}if(ce.data&&ce.processData&&typeof ce.data!=="string"){ce.data=bI.param(ce.data,ce.traditional)
}p(w,ce,b7,ck);
if(b9===2){return ck
}b6=ce.global;
if(b6&&bI.active++===0){bI.event.trigger("ajaxStart")
}ce.type=ce.type.toUpperCase();
ce.hasContent=!q.test(ce.type);
cb=ce.url;
if(!ce.hasContent){if(ce.data){cb=(ce.url+=(bQ.test(cb)?"&":"?")+ce.data);
delete ce.data
}if(ce.cache===false){ce.url=R.test(cb)?cb.replace(R,"$1_="+bp++):cb+(bQ.test(cb)?"&":"?")+"_="+bp++
}}if(ce.ifModified){if(bI.lastModified[cb]){ck.setRequestHeader("If-Modified-Since",bI.lastModified[cb])
}if(bI.etag[cb]){ck.setRequestHeader("If-None-Match",bI.etag[cb])
}}if(ce.data&&ce.hasContent&&ce.contentType!==false||b7.contentType){ck.setRequestHeader("Content-Type",ce.contentType)
}ck.setRequestHeader("Accept",ce.dataTypes[0]&&ce.accepts[ce.dataTypes[0]]?ce.accepts[ce.dataTypes[0]]+(ce.dataTypes[0]!=="*"?", "+aX+"; q=0.01":""):ce.accepts["*"]);
for(cl in ce.headers){ck.setRequestHeader(cl,ce.headers[cl])
}if(ce.beforeSend&&(ce.beforeSend.call(cs,ck,ce)===false||b9===2)){return ck.abort()
}cd="abort";
for(cl in {success:1,error:1,complete:1}){ck[cl](ce[cl])
}cm=p(a9,ce,b7,ck);
if(!cm){cg(-1,"No Transport")
}else{ck.readyState=1;
if(b6){ch.trigger("ajaxSend",[ck,ce])
}if(ce.async&&ce.timeout>0){cf=setTimeout(function(){ck.abort("timeout")
},ce.timeout)
}try{b9=1;
cm.send(ci,cg)
}catch(cn){if(b9<2){cg(-1,cn)
}else{throw cn
}}}function cg(cw,i,cx,cu){var e,cA,cy,cv,cz,ct=i;
if(b9===2){return
}b9=2;
if(cf){clearTimeout(cf)
}cm=undefined;
cq=cu||"";
ck.readyState=cw>0?4:0;
e=cw>=200&&cw<300||cw===304;
if(cx){cv=g(ce,ck,cx)
}cv=ag(ce,cv,ck,e);
if(e){if(ce.ifModified){cz=ck.getResponseHeader("Last-Modified");
if(cz){bI.lastModified[cb]=cz
}cz=ck.getResponseHeader("etag");
if(cz){bI.etag[cb]=cz
}}if(cw===204||ce.type==="HEAD"){ct="nocontent"
}else{if(cw===304){ct="notmodified"
}else{ct=cv.state;
cA=cv.data;
cy=cv.error;
e=!cy
}}}else{cy=ct;
if(cw||!ct){ct="error";
if(cw<0){cw=0
}}}ck.status=cw;
ck.statusText=(i||ct)+"";
if(e){cr.resolveWith(cs,[cA,ct,ck])
}else{cr.rejectWith(cs,[ck,ct,cy])
}ck.statusCode(cc);
cc=undefined;
if(b6){ch.trigger(e?"ajaxSuccess":"ajaxError",[ck,ce,e?cA:cy])
}co.fireWith(cs,[ck,ct]);
if(b6){ch.trigger("ajaxComplete",[ck,ce]);
if(!(--bI.active)){bI.event.trigger("ajaxStop")
}}}return ck
},getJSON:function(e,i,b6){return bI.get(e,i,b6,"json")
},getscript:function(e,i){return bI.get(e,undefined,i,"script")
}});
bI.each(["get","post"],function(e,b6){bI[b6]=function(i,b8,b9,b7){if(bI.isFunction(b8)){b7=b7||b9;
b9=b8;
b8=undefined
}return bI.ajax({url:i,type:b6,dataType:b7,data:b8,success:b9})
}
});
bI.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,b6){bI.fn[b6]=function(i){return this.on(b6,i)
}
});
bI._evalUrl=function(e){return bI.ajax({url:e,type:"GET",dataType:"script",async:false,global:false,"throws":true})
};
bI.fn.extend({wrapAll:function(e){if(bI.isFunction(e)){return this.each(function(b6){bI(this).wrapAll(e.call(this,b6))
})
}if(this[0]){var i=bI(e,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){i.insertBefore(this[0])
}i.map(function(){var b6=this;
while(b6.firstChild&&b6.firstChild.nodeType===1){b6=b6.firstChild
}return b6
}).append(this)
}return this
},wrapInner:function(e){if(bI.isFunction(e)){return this.each(function(b6){bI(this).wrapInner(e.call(this,b6))
})
}return this.each(function(){var i=bI(this),b6=i.contents();
if(b6.length){b6.wrapAll(e)
}else{i.append(e)
}})
},wrap:function(e){var i=bI.isFunction(e);
return this.each(function(b6){bI(this).wrapAll(i?e.call(this,b6):e)
})
},unwrap:function(){return this.parent().each(function(){if(!bI.nodeName(this,"body")){bI(this).replaceWith(this.childNodes)
}}).end()
}});
bI.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||(!D.reliableHiddenOffsets()&&((e.style&&e.style.display)||bI.css(e,"display"))==="none")
};
bI.expr.filters.visible=function(e){return !bI.expr.filters.hidden(e)
};
var bw=/%20/g,aS=/\[\]$/,X=/\r?\n/g,b=/^(?:submit|button|image|reset|file)$/i,au=/^(?:input|select|textarea|keygen)/i;
function j(b6,b8,i,b7){var e;
if(bI.isArray(b8)){bI.each(b8,function(ca,b9){if(i||aS.test(b6)){b7(b6,b9)
}else{j(b6+"["+(typeof b9==="object"?ca:"")+"]",b9,i,b7)
}})
}else{if(!i&&bI.type(b8)==="object"){for(e in b8){j(b6+"["+e+"]",b8[e],i,b7)
}}else{b7(b6,b8)
}}}bI.param=function(e,b6){var b7,i=[],b8=function(b9,ca){ca=bI.isFunction(ca)?ca():(ca==null?"":ca);
i[i.length]=encodeURIComponent(b9)+"="+encodeURIComponent(ca)
};
if(b6===undefined){b6=bI.ajaxSettings&&bI.ajaxSettings.traditional
}if(bI.isArray(e)||(e.jquery&&!bI.isPlainObject(e))){bI.each(e,function(){b8(this.name,this.value)
})
}else{for(b7 in e){j(b7,e[b7],b6,b8)
}}return i.join("&").replace(bw,"+")
};
bI.fn.extend({serialize:function(){return bI.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var e=bI.prop(this,"elements");
return e?bI.makeArray(e):this
}).filter(function(){var e=this.type;
return this.name&&!bI(this).is(":disabled")&&au.test(this.nodeName)&&!b.test(e)&&(this.checked||!aM.test(e))
}).map(function(e,b6){var b7=bI(this).val();
return b7==null?null:bI.isArray(b7)?bI.map(b7,function(i){return{name:b6.name,value:i.replace(X,"\r\n")}
}):{name:b6.name,value:b7.replace(X,"\r\n")}
}).get()
}});
bI.ajaxSettings.xhr=a5.ActiveXObject!==undefined?function(){return !this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&bE()||bg()
}:bE;
var aA=0,aj={},ay=bI.ajaxSettings.xhr();
if(a5.ActiveXObject){bI(a5).on("unload",function(){for(var e in aj){aj[e](undefined,true)
}})
}D.cors=!!ay&&("withCredentials" in ay);
ay=D.ajax=!!ay;
if(ay){bI.ajaxTransport(function(e){if(!e.crossDomain||D.cors){var i;
return{send:function(b9,b6){var b7,b8=e.xhr(),ca=++aA;
b8.open(e.type,e.url,e.async,e.username,e.password);
if(e.xhrFields){for(b7 in e.xhrFields){b8[b7]=e.xhrFields[b7]
}}if(e.mimeType&&b8.overrideMimeType){b8.overrideMimeType(e.mimeType)
}if(!e.crossDomain&&!b9["X-Requested-With"]){b9["X-Requested-With"]="XMLHttpRequest"
}for(b7 in b9){if(b9[b7]!==undefined){b8.setRequestHeader(b7,b9[b7]+"")
}}b8.send((e.hasContent&&e.data)||null);
i=function(cd,cc){var cb,cg,ce;
if(i&&(cc||b8.readyState===4)){delete aj[ca];
i=undefined;
b8.onreadystatechange=bI.noop;
if(cc){if(b8.readyState!==4){b8.abort()
}}else{ce={};
cb=b8.status;
if(typeof b8.responseText==="string"){ce.text=b8.responseText
}try{cg=b8.statusText
}catch(cf){cg=""
}if(!cb&&e.isLocal&&!e.crossDomain){cb=ce.text?200:404
}else{if(cb===1223){cb=204
}}}}if(ce){b6(cb,cg,ce,b8.getAllResponseHeaders())
}};
if(!e.async){i()
}else{if(b8.readyState===4){setTimeout(i)
}else{b8.onreadystatechange=aj[ca]=i
}}},abort:function(){if(i){i(undefined,true)
}}}
}})
}function bE(){try{return new a5.XMLHttpRequest()
}catch(i){}}function bg(){try{return new a5.ActiveXObject("Microsoft.XMLHTTP")
}catch(i){}}bI.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){bI.globalEval(e);
return e
}}});
bI.ajaxPrefilter("script",function(e){if(e.cache===undefined){e.cache=false
}if(e.crossDomain){e.type="GET";
e.global=false
}});
bI.ajaxTransport("script",function(b6){if(b6.crossDomain){var e,i=n.head||bI("head")[0]||n.documentElement;
return{send:function(b7,b8){e=n.createElement("script");
e.async=true;
if(b6.scriptCharset){e.charset=b6.scriptCharset
}e.src=b6.url;
e.onload=e.onreadystatechange=function(ca,b9){if(b9||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;
if(e.parentNode){e.parentNode.removeChild(e)
}e=null;
if(!b9){b8(200,"success")
}}};
i.insertBefore(e,i.firstChild)
},abort:function(){if(e){e.onload(undefined,true)
}}}
}});
var bs=[],a8=/(=)\?(?=&|$)|\?\?/;
bI.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=bs.pop()||(bI.expando+"_"+(bp++));
this[e]=true;
return e
}});
bI.ajaxPrefilter("json jsonp",function(b7,e,b8){var ca,i,b6,b9=b7.jsonp!==false&&(a8.test(b7.url)?"url":typeof b7.data==="string"&&!(b7.contentType||"").indexOf("application/x-www-form-urlencoded")&&a8.test(b7.data)&&"data");
if(b9||b7.dataTypes[0]==="jsonp"){ca=b7.jsonpCallback=bI.isFunction(b7.jsonpCallback)?b7.jsonpCallback():b7.jsonpCallback;
if(b9){b7[b9]=b7[b9].replace(a8,"$1"+ca)
}else{if(b7.jsonp!==false){b7.url+=(bQ.test(b7.url)?"&":"?")+b7.jsonp+"="+ca
}}b7.converters["script json"]=function(){if(!b6){bI.error(ca+" was not called")
}return b6[0]
};
b7.dataTypes[0]="json";
i=a5[ca];
a5[ca]=function(){b6=arguments
};
b8.always(function(){a5[ca]=i;
if(b7[ca]){b7.jsonpCallback=e.jsonpCallback;
bs.push(ca)
}if(b6&&bI.isFunction(i)){i(b6[0])
}b6=i=undefined
});
return"script"
}});
bI.parseHTML=function(b8,b6,b7){if(!b8||typeof b8!=="string"){return null
}if(typeof b6==="boolean"){b7=b6;
b6=false
}b6=b6||n;
var i=a.exec(b8),e=!b7&&[];
if(i){return[b6.createElement(i[1])]
}i=bI.buildFragment([b8],b6,e);
if(e&&e.length){bI(e).remove()
}return bI.merge([],i.childNodes)
};
var b1=bI.fn.load;
bI.fn.load=function(b7,ca,cb){if(typeof b7!=="string"&&b1){return b1.apply(this,arguments)
}var e,b6,b8,i=this,b9=b7.indexOf(" ");
if(b9>=0){e=bI.trim(b7.slice(b9,b7.length));
b7=b7.slice(0,b9)
}if(bI.isFunction(ca)){cb=ca;
ca=undefined
}else{if(ca&&typeof ca==="object"){b8="POST"
}}if(i.length>0){bI.ajax({url:b7,type:b8,dataType:"html",data:ca}).done(function(cc){b6=arguments;
i.html(e?bI("<div>").append(bI.parseHTML(cc)).find(e):cc)
}).complete(cb&&function(cd,cc){i.each(cb,b6||[cd.responseText,cc,cd])
})
}return this
};
bI.expr.filters.animated=function(e){return bI.grep(bI.timers,function(i){return e===i.elem
}).length
};
var bX=a5.document.documentElement;
function br(e){return bI.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false
}bI.offset={setOffset:function(b7,ch,cb){var cd,ca,e,b8,b6,cf,cg,cc=bI.css(b7,"position"),b9=bI(b7),ce={};
if(cc==="static"){b7.style.position="relative"
}b6=b9.offset();
e=bI.css(b7,"top");
cf=bI.css(b7,"left");
cg=(cc==="absolute"||cc==="fixed")&&bI.inArray("auto",[e,cf])>-1;
if(cg){cd=b9.position();
b8=cd.top;
ca=cd.left
}else{b8=parseFloat(e)||0;
ca=parseFloat(cf)||0
}if(bI.isFunction(ch)){ch=ch.call(b7,cb,b6)
}if(ch.top!=null){ce.top=(ch.top-b6.top)+b8
}if(ch.left!=null){ce.left=(ch.left-b6.left)+ca
}if("using" in ch){ch.using.call(b7,ce)
}else{b9.css(ce)
}}};
bI.fn.extend({offset:function(i){if(arguments.length){return i===undefined?this:this.each(function(ca){bI.offset.setOffset(this,i,ca)
})
}var e,b9,b7={top:0,left:0},b6=this[0],b8=b6&&b6.ownerDocument;
if(!b8){return
}e=b8.documentElement;
if(!bI.contains(e,b6)){return b7
}if(typeof b6.getBoundingClientRect!==aC){b7=b6.getBoundingClientRect()
}b9=br(b8);
return{top:b7.top+(b9.pageYOffset||e.scrollTop)-(e.clientTop||0),left:b7.left+(b9.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}
},position:function(){if(!this[0]){return
}var b6,b7,e={top:0,left:0},i=this[0];
if(bI.css(i,"position")==="fixed"){b7=i.getBoundingClientRect()
}else{b6=this.offsetParent();
b7=this.offset();
if(!bI.nodeName(b6[0],"html")){e=b6.offset()
}e.top+=bI.css(b6[0],"borderTopWidth",true);
e.left+=bI.css(b6[0],"borderLeftWidth",true)
}return{top:b7.top-e.top-bI.css(i,"marginTop",true),left:b7.left-e.left-bI.css(i,"marginLeft",true)}
},offsetParent:function(){return this.map(function(){var e=this.offsetParent||bX;
while(e&&(!bI.nodeName(e,"html")&&bI.css(e,"position")==="static")){e=e.offsetParent
}return e||bX
})
}});
bI.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b6,i){var e=/Y/.test(i);
bI.fn[b6]=function(b7){return aB(this,function(b8,cb,ca){var b9=br(b8);
if(ca===undefined){return b9?(i in b9)?b9[i]:b9.document.documentElement[cb]:b8[cb]
}if(b9){b9.scrollTo(!e?ca:bI(b9).scrollLeft(),e?ca:bI(b9).scrollTop())
}else{b8[cb]=ca
}},b6,b7,arguments.length,null)
}
});
bI.each(["top","left"],function(e,b6){bI.cssHooks[b6]=a7(D.pixelPosition,function(b7,i){if(i){i=G(b7,b6);
return Y.test(i)?bI(b7).position()[b6]+"px":i
}})
});
bI.each({Height:"height",Width:"width"},function(e,i){bI.each({padding:"inner"+e,content:i,"":"outer"+e},function(b6,b7){bI.fn[b7]=function(cb,ca){var b9=arguments.length&&(b6||typeof cb!=="boolean"),b8=b6||(cb===true||ca===true?"margin":"border");
return aB(this,function(cd,cc,ce){var cf;
if(bI.isWindow(cd)){return cd.document.documentElement["client"+e]
}if(cd.nodeType===9){cf=cd.documentElement;
return Math.max(cd.body["scroll"+e],cf["scroll"+e],cd.body["offset"+e],cf["offset"+e],cf["client"+e])
}return ce===undefined?bI.css(cd,cc,b8):bI.style(cd,cc,ce,b8)
},i,b9?cb:undefined,b9,null)
}
})
});
bI.fn.size=function(){return this.length
};
bI.fn.andSelf=bI.fn.addBack;
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return bI
})
}var bk=a5.jQuery,I=a5.$;
bI.noConflict=function(e){if(a5.$===bI){a5.$=I
}if(e&&a5.jQuery===bI){a5.jQuery=bk
}return bI
};
if(typeof av===aC){a5.jQuery=a5.$=bI
}return bI
}));
(function(){var v=this;
var q=v._;
var i=Array.prototype,y=Object.prototype,B=Function.prototype;
var h=i.push,u=i.slice,e=i.concat,w=y.toString,n=y.hasOwnProperty;
var c=Array.isArray,x=Object.keys,j=B.bind;
var A=function(E){if(E instanceof A){return E
}if(!(this instanceof A)){return new A(E)
}this._wrapped=E
};
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=A
}exports._=A
}else{v._=A
}A.VERSION="1.7.0";
var f=function(F,E,G){if(E===void 0){return F
}switch(G==null?3:G){case 1:return function(H){return F.call(E,H)
};
case 2:return function(I,H){return F.call(E,I,H)
};
case 3:return function(I,H,J){return F.call(E,I,H,J)
};
case 4:return function(H,J,I,K){return F.call(E,H,J,I,K)
}
}return function(){return F.apply(E,arguments)
}
};
A.iteratee=function(F,E,G){if(F==null){return A.identity
}if(A.isFunction(F)){return f(F,E,G)
}if(A.isObject(F)){return A.matches(F)
}return A.property(F)
};
A.each=A.forEach=function(I,J,F){if(I==null){return I
}J=f(J,F);
var E,H=I.length;
if(H===+H){for(E=0;
E<H;
E++){J(I[E],E,I)
}}else{var G=A.keys(I);
for(E=0,H=G.length;
E<H;
E++){J(I[G[E]],G[E],I)
}}return I
};
A.map=A.collect=function(J,L,G){if(J==null){return[]
}L=A.iteratee(L,G);
var I=J.length!==+J.length&&A.keys(J),H=(I||J).length,F=Array(H),K;
for(var E=0;
E<H;
E++){K=I?I[E]:E;
F[E]=L(J[K],K,J)
}return F
};
var r="Reduce of empty array with no initial value";
A.reduce=A.foldl=A.inject=function(J,L,E,G){if(J==null){J=[]
}L=f(L,G,4);
var I=J.length!==+J.length&&A.keys(J),H=(I||J).length,F=0,K;
if(arguments.length<3){if(!H){throw new TypeError(r)
}E=J[I?I[F++]:F++]
}for(;
F<H;
F++){K=I?I[F]:F;
E=L(E,J[K],K,J)
}return E
};
A.reduceRight=A.foldr=function(I,K,E,G){if(I==null){I=[]
}K=f(K,G,4);
var H=I.length!==+I.length&&A.keys(I),F=(H||I).length,J;
if(arguments.length<3){if(!F){throw new TypeError(r)
}E=I[H?H[--F]:--F]
}while(F--){J=H?H[F]:F;
E=K(E,I[J],J,I)
}return E
};
A.find=A.detect=function(H,F,G){var E;
F=A.iteratee(F,G);
A.some(H,function(K,I,J){if(F(K,I,J)){E=K;
return true
}});
return E
};
A.filter=A.select=function(H,E,G){var F=[];
if(H==null){return F
}E=A.iteratee(E,G);
A.each(H,function(K,I,J){if(E(K,I,J)){F.push(K)
}});
return F
};
A.reject=function(G,E,F){return A.filter(G,A.negate(A.iteratee(E)),F)
};
A.every=A.all=function(J,E,G){if(J==null){return true
}E=A.iteratee(E,G);
var I=J.length!==+J.length&&A.keys(J),H=(I||J).length,F,K;
for(F=0;
F<H;
F++){K=I?I[F]:F;
if(!E(J[K],K,J)){return false
}}return true
};
A.some=A.any=function(J,E,G){if(J==null){return false
}E=A.iteratee(E,G);
var I=J.length!==+J.length&&A.keys(J),H=(I||J).length,F,K;
for(F=0;
F<H;
F++){K=I?I[F]:F;
if(E(J[K],K,J)){return true
}}return false
};
A.contains=A.include=function(F,E){if(F==null){return false
}if(F.length!==+F.length){F=A.values(F)
}return A.indexOf(F,E)>=0
};
A.invoke=function(G,H){var E=u.call(arguments,2);
var F=A.isFunction(H);
return A.map(G,function(I){return(F?H:I[H]).apply(I,E)
})
};
A.pluck=function(F,E){return A.map(F,A.property(E))
};
A.where=function(F,E){return A.filter(F,A.matches(E))
};
A.findWhere=function(F,E){return A.find(F,A.matches(E))
};
A.max=function(H,J,E){var M=-Infinity,K=-Infinity,L,G;
if(J==null&&H!=null){H=H.length===+H.length?H:A.values(H);
for(var I=0,F=H.length;
I<F;
I++){L=H[I];
if(L>M){M=L
}}}else{J=A.iteratee(J,E);
A.each(H,function(P,N,O){G=J(P,N,O);
if(G>K||G===-Infinity&&M===-Infinity){M=P;
K=G
}})
}return M
};
A.min=function(H,J,E){var M=Infinity,K=Infinity,L,G;
if(J==null&&H!=null){H=H.length===+H.length?H:A.values(H);
for(var I=0,F=H.length;
I<F;
I++){L=H[I];
if(L<M){M=L
}}}else{J=A.iteratee(J,E);
A.each(H,function(P,N,O){G=J(P,N,O);
if(G<K||G===Infinity&&M===Infinity){M=P;
K=G
}})
}return M
};
A.shuffle=function(I){var J=I&&I.length===+I.length?I:A.values(I);
var H=J.length;
var E=Array(H);
for(var F=0,G;
F<H;
F++){G=A.random(0,F);
if(G!==F){E[F]=E[G]
}E[G]=J[F]
}return E
};
A.sample=function(F,G,E){if(G==null||E){if(F.length!==+F.length){F=A.values(F)
}return F[A.random(F.length-1)]
}return A.shuffle(F).slice(0,Math.max(0,G))
};
A.sortBy=function(F,G,E){G=A.iteratee(G,E);
return A.pluck(A.map(F,function(J,H,I){return{value:J,index:H,criteria:G(J,H,I)}
}).sort(function(K,J){var I=K.criteria;
var H=J.criteria;
if(I!==H){if(I>H||I===void 0){return 1
}if(I<H||H===void 0){return -1
}}return K.index-J.index
}),"value")
};
var k=function(E){return function(H,I,G){var F={};
I=A.iteratee(I,G);
A.each(H,function(L,J){var K=I(L,J,H);
E(F,L,K)
});
return F
}
};
A.groupBy=k(function(E,G,F){if(A.has(E,F)){E[F].push(G)
}else{E[F]=[G]
}});
A.indexBy=k(function(E,G,F){E[F]=G
});
A.countBy=k(function(E,G,F){if(A.has(E,F)){E[F]++
}else{E[F]=1
}});
A.sortedIndex=function(L,J,K,G){K=A.iteratee(K,G,1);
var I=K(J);
var E=0,H=L.length;
while(E<H){var F=E+H>>>1;
if(K(L[F])<I){E=F+1
}else{H=F
}}return E
};
A.toArray=function(E){if(!E){return[]
}if(A.isArray(E)){return u.call(E)
}if(E.length===+E.length){return A.map(E,A.identity)
}return A.values(E)
};
A.size=function(E){if(E==null){return 0
}return E.length===+E.length?E.length:A.keys(E).length
};
A.partition=function(I,E,G){E=A.iteratee(E,G);
var H=[],F=[];
A.each(I,function(K,J,L){(E(K,J,L)?H:F).push(K)
});
return[H,F]
};
A.first=A.head=A.take=function(G,F,E){if(G==null){return void 0
}if(F==null||E){return G[0]
}if(F<0){return[]
}return u.call(G,0,F)
};
A.initial=function(G,F,E){return u.call(G,0,Math.max(0,G.length-(F==null||E?1:F)))
};
A.last=function(G,F,E){if(G==null){return void 0
}if(F==null||E){return G[G.length-1]
}return u.call(G,Math.max(G.length-F,0))
};
A.rest=A.tail=A.drop=function(G,F,E){return u.call(G,F==null||E?1:F)
};
A.compact=function(E){return A.filter(E,A.identity)
};
var D=function(G,K,E,F){if(K&&A.every(G,A.isArray)){return e.apply(F,G)
}for(var H=0,I=G.length;
H<I;
H++){var J=G[H];
if(!A.isArray(J)&&!A.isArguments(J)){if(!E){F.push(J)
}}else{if(K){h.apply(F,J)
}else{D(J,K,E,F)
}}}return F
};
A.flatten=function(F,E){return D(F,E,false,[])
};
A.without=function(E){return A.difference(E,u.call(arguments,1))
};
A.uniq=A.unique=function(L,H,K,F){if(L==null){return[]
}if(!A.isBoolean(H)){F=K;
K=H;
H=false
}if(K!=null){K=A.iteratee(K,F)
}var N=[];
var E=[];
for(var J=0,G=L.length;
J<G;
J++){var M=L[J];
if(H){if(!J||E!==M){N.push(M)
}E=M
}else{if(K){var I=K(M,J,L);
if(A.indexOf(E,I)<0){E.push(I);
N.push(M)
}}else{if(A.indexOf(N,M)<0){N.push(M)
}}}}return N
};
A.union=function(){return A.uniq(D(arguments,true,true,[]))
};
A.intersection=function(K){if(K==null){return[]
}var E=[];
var J=arguments.length;
for(var G=0,I=K.length;
G<I;
G++){var H=K[G];
if(A.contains(E,H)){continue
}for(var F=1;
F<J;
F++){if(!A.contains(arguments[F],H)){break
}}if(F===J){E.push(H)
}}return E
};
A.difference=function(F){var E=D(u.call(arguments,1),true,true,[]);
return A.filter(F,function(G){return !A.contains(E,G)
})
};
A.zip=function(H){if(H==null){return[]
}var G=A.max(arguments,"length").length;
var F=Array(G);
for(var E=0;
E<G;
E++){F[E]=A.pluck(arguments,E)
}return F
};
A.object=function(I,F){if(I==null){return{}
}var E={};
for(var G=0,H=I.length;
G<H;
G++){if(F){E[I[G]]=F[G]
}else{E[I[G][0]]=I[G][1]
}}return E
};
A.indexOf=function(I,G,H){if(I==null){return -1
}var E=0,F=I.length;
if(H){if(typeof H=="number"){E=H<0?Math.max(0,F+H):H
}else{E=A.sortedIndex(I,G);
return I[E]===G?E:-1
}}for(;
E<F;
E++){if(I[E]===G){return E
}}return -1
};
A.lastIndexOf=function(H,F,G){if(H==null){return -1
}var E=H.length;
if(typeof G=="number"){E=G<0?E+G+1:Math.min(E,G+1)
}while(--E>=0){if(H[E]===F){return E
}}return -1
};
A.range=function(J,G,I){if(arguments.length<=1){G=J||0;
J=0
}I=I||1;
var H=Math.max(Math.ceil((G-J)/I),0);
var F=Array(H);
for(var E=0;
E<H;
E++,J+=I){F[E]=J
}return F
};
var o=function(){};
A.bind=function(H,F){var E,G;
if(j&&H.bind===j){return j.apply(H,u.call(arguments,1))
}if(!A.isFunction(H)){throw new TypeError("Bind must be called on a function")
}E=u.call(arguments,2);
G=function(){if(!(this instanceof G)){return H.apply(F,E.concat(u.call(arguments)))
}o.prototype=H.prototype;
var J=new o;
o.prototype=null;
var I=H.apply(J,E.concat(u.call(arguments)));
if(A.isObject(I)){return I
}return J
};
return G
};
A.partial=function(E){var F=u.call(arguments,1);
return function(){var G=0;
var H=F.slice();
for(var I=0,J=H.length;
I<J;
I++){if(H[I]===A){H[I]=arguments[G++]
}}while(G<arguments.length){H.push(arguments[G++])
}return E.apply(this,H)
}
};
A.bindAll=function(H){var F,G=arguments.length,E;
if(G<=1){throw new Error("bindAll must be passed function names")
}for(F=1;
F<G;
F++){E=arguments[F];
H[E]=A.bind(H[E],H)
}return H
};
A.memoize=function(F,E){var G=function(J){var I=G.cache;
var H=E?E.apply(this,arguments):J;
if(!A.has(I,H)){I[H]=F.apply(this,arguments)
}return I[H]
};
G.cache={};
return G
};
A.delay=function(F,G){var E=u.call(arguments,2);
return setTimeout(function(){return F.apply(null,E)
},G)
};
A.defer=function(E){return A.delay.apply(A,[E,1].concat(u.call(arguments,1)))
};
A.throttle=function(F,H,L){var E,J,M;
var K=null;
var I=0;
if(!L){L={}
}var G=function(){I=L.leading===false?0:A.now();
K=null;
M=F.apply(E,J);
if(!K){E=J=null
}};
return function(){var N=A.now();
if(!I&&L.leading===false){I=N
}var O=H-(N-I);
E=this;
J=arguments;
if(O<=0||O>H){clearTimeout(K);
K=null;
I=N;
M=F.apply(E,J);
if(!K){E=J=null
}}else{if(!K&&L.trailing!==false){K=setTimeout(G,O)
}}return M
}
};
A.debounce=function(G,I,F){var L,K,E,J,M;
var H=function(){var N=A.now()-J;
if(N<I&&N>0){L=setTimeout(H,I-N)
}else{L=null;
if(!F){M=G.apply(E,K);
if(!L){E=K=null
}}}};
return function(){E=this;
K=arguments;
J=A.now();
var N=F&&!L;
if(!L){L=setTimeout(H,I)
}if(N){M=G.apply(E,K);
E=K=null
}return M
}
};
A.wrap=function(E,F){return A.partial(F,E)
};
A.negate=function(E){return function(){return !E.apply(this,arguments)
}
};
A.compose=function(){var E=arguments;
var F=E.length-1;
return function(){var H=F;
var G=E[F].apply(this,arguments);
while(H--){G=E[H].call(this,G)
}return G
}
};
A.after=function(F,E){return function(){if(--F<1){return E.apply(this,arguments)
}}
};
A.before=function(G,F){var E;
return function(){if(--G>0){E=F.apply(this,arguments)
}else{F=null
}return E
}
};
A.once=A.partial(A.before,2);
A.keys=function(G){if(!A.isObject(G)){return[]
}if(x){return x(G)
}var F=[];
for(var E in G){if(A.has(G,E)){F.push(E)
}}return F
};
A.values=function(I){var H=A.keys(I);
var G=H.length;
var E=Array(G);
for(var F=0;
F<G;
F++){E[F]=I[H[F]]
}return E
};
A.pairs=function(I){var G=A.keys(I);
var F=G.length;
var H=Array(F);
for(var E=0;
E<F;
E++){H[E]=[G[E],I[G[E]]]
}return H
};
A.invert=function(I){var E={};
var H=A.keys(I);
for(var F=0,G=H.length;
F<G;
F++){E[I[H[F]]]=H[F]
}return E
};
A.functions=A.methods=function(G){var F=[];
for(var E in G){if(A.isFunction(G[E])){F.push(E)
}}return F.sort()
};
A.extend=function(H){if(!A.isObject(H)){return H
}var G,I;
for(var E=1,F=arguments.length;
E<F;
E++){G=arguments[E];
for(I in G){if(n.call(G,I)){H[I]=G[I]
}}}return H
};
A.pick=function(G,I,E){var M={},K;
if(G==null){return M
}if(A.isFunction(I)){I=f(I,E);
for(K in G){var J=G[K];
if(I(J,K,G)){M[K]=J
}}}else{var L=e.apply([],u.call(arguments,1));
G=new Object(G);
for(var H=0,F=L.length;
H<F;
H++){K=L[H];
if(K in G){M[K]=G[K]
}}}return M
};
A.omit=function(G,H,E){if(A.isFunction(H)){H=A.negate(H)
}else{var F=A.map(e.apply([],u.call(arguments,1)),String);
H=function(J,I){return !A.contains(F,I)
}
}return A.pick(G,H,E)
};
A.defaults=function(H){if(!A.isObject(H)){return H
}for(var E=1,F=arguments.length;
E<F;
E++){var G=arguments[E];
for(var I in G){if(H[I]===void 0){H[I]=G[I]
}}}return H
};
A.clone=function(E){if(!A.isObject(E)){return E
}return A.isArray(E)?E.slice():A.extend({},E)
};
A.tap=function(F,E){E(F);
return F
};
var z=function(L,K,F,G){if(L===K){return L!==0||1/L===1/K
}if(L==null||K==null){return L===K
}if(L instanceof A){L=L._wrapped
}if(K instanceof A){K=K._wrapped
}var I=w.call(L);
if(I!==w.call(K)){return false
}switch(I){case"[object RegExp]":case"[object String]":return""+L===""+K;
case"[object Number]":if(+L!==+L){return +K!==+K
}return +L===0?1/+L===1/K:+L===+K;
case"[object Date]":case"[object Boolean]":return +L===+K
}if(typeof L!="object"||typeof K!="object"){return false
}var E=F.length;
while(E--){if(F[E]===L){return G[E]===K
}}var J=L.constructor,H=K.constructor;
if(J!==H&&"constructor" in L&&"constructor" in K&&!(A.isFunction(J)&&J instanceof J&&A.isFunction(H)&&H instanceof H)){return false
}F.push(L);
G.push(K);
var P,O;
if(I==="[object Array]"){P=L.length;
O=P===K.length;
if(O){while(P--){if(!(O=z(L[P],K[P],F,G))){break
}}}}else{var N=A.keys(L),M;
P=N.length;
O=A.keys(K).length===P;
if(O){while(P--){M=N[P];
if(!(O=A.has(K,M)&&z(L[M],K[M],F,G))){break
}}}}F.pop();
G.pop();
return O
};
A.isEqual=function(F,E){return z(F,E,[],[])
};
A.isEmpty=function(F){if(F==null){return true
}if(A.isArray(F)||A.isString(F)||A.isArguments(F)){return F.length===0
}for(var E in F){if(A.has(F,E)){return false
}}return true
};
A.isElement=function(E){return !!(E&&E.nodeType===1)
};
A.isArray=c||function(E){return w.call(E)==="[object Array]"
};
A.isObject=function(F){var E=typeof F;
return E==="function"||E==="object"&&!!F
};
A.each(["Arguments","Function","String","Number","Date","RegExp"],function(E){A["is"+E]=function(F){return w.call(F)==="[object "+E+"]"
}
});
if(!A.isArguments(arguments)){A.isArguments=function(E){return A.has(E,"callee")
}
}if(typeof/./!=="function"){A.isFunction=function(E){return typeof E=="function"||false
}
}A.isFinite=function(E){return isFinite(E)&&!isNaN(parseFloat(E))
};
A.isNaN=function(E){return A.isNumber(E)&&E!==+E
};
A.isBoolean=function(E){return E===true||E===false||w.call(E)==="[object Boolean]"
};
A.isNull=function(E){return E===null
};
A.isUndefined=function(E){return E===void 0
};
A.has=function(F,E){return F!=null&&n.call(F,E)
};
A.noConflict=function(){v._=q;
return this
};
A.identity=function(E){return E
};
A.constant=function(E){return function(){return E
}
};
A.noop=function(){};
A.property=function(E){return function(F){return F[E]
}
};
A.matches=function(E){var G=A.pairs(E),F=G.length;
return function(J){if(J==null){return !F
}J=new Object(J);
for(var I=0;
I<F;
I++){var K=G[I],H=K[0];
if(K[1]!==J[H]||!(H in J)){return false
}}return true
}
};
A.times=function(I,H,G){var E=Array(Math.max(0,I));
H=f(H,G,1);
for(var F=0;
F<I;
F++){E[F]=H(F)
}return E
};
A.random=function(F,E){if(E==null){E=F;
F=0
}return F+Math.floor(Math.random()*(E-F+1))
};
A.now=Date.now||function(){return new Date().getTime()
};
var g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};
var d=A.invert(g);
var p=function(I){var F=function(J){return I[J]
};
var H="(?:"+A.keys(I).join("|")+")";
var G=RegExp(H);
var E=RegExp(H,"g");
return function(J){J=J==null?"":""+J;
return G.test(J)?J.replace(E,F):J
}
};
A.escape=p(g);
A.unescape=p(d);
A.result=function(E,G){if(E==null){return void 0
}var F=E[G];
return A.isFunction(F)?E[G]():F
};
var l=0;
A.uniqueId=function(E){var F=++l+"";
return E?E+F:F
};
A.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
var t=/(.)^/;
var a={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"};
var b=/\\|'|\r|\n|\u2028|\u2029/g;
var C=function(E){return"\\"+a[E]
};
A.template=function(N,H,K){if(!H&&K){H=K
}H=A.defaults({},H,A.templateSettings);
var I=RegExp([(H.escape||t).source,(H.interpolate||t).source,(H.evaluate||t).source].join("|")+"|$","g");
var J=0;
var E="__p+='";
N.replace(I,function(P,Q,O,S,R){E+=N.slice(J,R).replace(b,C);
J=R+P.length;
if(Q){E+="'+\n((__t=("+Q+"))==null?'':_.escape(__t))+\n'"
}else{if(O){E+="'+\n((__t=("+O+"))==null?'':__t)+\n'"
}else{if(S){E+="';\n"+S+"\n__p+='"
}}}return P
});
E+="';\n";
if(!H.variable){E="with(obj||{}){\n"+E+"}\n"
}E="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+E+"return __p;\n";
try{var G=new Function(H.variable||"obj","_",E)
}catch(L){L.source=E;
throw L
}var M=function(O){return G.call(this,O,A)
};
var F=H.variable||"obj";
M.source="function("+F+"){\n"+E+"}";
return M
};
A.chain=function(F){var E=A(F);
E._chain=true;
return E
};
var m=function(E){return this._chain?A(E).chain():E
};
A.mixin=function(E){A.each(A.functions(E),function(F){var G=A[F]=E[F];
A.prototype[F]=function(){var H=[this._wrapped];
h.apply(H,arguments);
return m.call(this,G.apply(A,H))
}
})
};
A.mixin(A);
A.each(["pop","push","reverse","shift","sort","splice","unshift"],function(E){var F=i[E];
A.prototype[E]=function(){var G=this._wrapped;
F.apply(G,arguments);
if((E==="shift"||E==="splice")&&G.length===0){delete G[0]
}return m.call(this,G)
}
});
A.each(["concat","join","slice"],function(E){var F=i[E];
A.prototype[E]=function(){return m.call(this,F.apply(this._wrapped,arguments))
}
});
A.prototype.value=function(){return this._wrapped
};
if(typeof define==="function"&&define.amd){define("underscore",[],function(){return A
})
}}.call(this));
var BCUS=BCUS||{};
BCUS.Analytics=(function(){var b=function(j,k,g,m,d){d=d||"o";
s.linkType=d;
s.prop19=s.eVar44="";
s.linkTrackVars="prop19,eVar44";
if(m){if(m.indexOf("Home Carousel")!=-1){s.eVar5=m;
s.events="event10";
s.linkTrackVars="events,eVar5";
s.linkTrackEvents="event10"
}else{if(m.toLowerCase().indexOf("apply now")!=-1){s.eVar42=g.SubNavCpcValue;
s.events="event90";
s.linkTrackVars="events,eVar42";
s.linkTrackEvents="event90"
}else{if(m=="compareClick"){if(BCUS.DataStoreManager){var e="";
var l=BCUS.DataStoreManager.getData("card-cpc-array").split(",");
for(var h=0;
h<l.length;
h++){e=e+l[h]+":"
}if(e!==""){e=e.substring(0,e.length-1)
}if(!!e){s.eVar11=e;
s.events="event4";
s.pageName="BCUS:CARDS:COMPARE";
s.prop27="BCUS:CARDS:COMPARE";
s.linkTrackVars="events,eVar11,pageName,prop27";
s.linkTrackEvents="event4"
}BCUS.DataStoreManager.removeDataKey("card-cpc-array")
}}}}s.linkName=m;
var f=s.tl(this,s.linkType,s.linkName);
if(f){document.write(f)
}}else{var f=s.tl(this,s.linkType);
if(f){document.write(f)
}}},a=function(){var d=window.innerWidth||document.documentElement.clientWidth;
return(d<=880)
},c=function(h,p,g,m,o,d){while(o.indexOf("-")>-1){o=o.replace("-"," ")
}while(g.indexOf("-")>-1){g=g.replace("-"," ")
}while(p.indexOf("-")>-1){p=p.replace("-"," ")
}while(m.indexOf("-")>-1){m=m.replace("-"," ")
}var j=h,q="BCUS:",l=o,r="BCUS|"+p+"|",t=d,k="",i,n,f;
if(BCUS.DataStoreManager){f=BCUS.DataStoreManager.getData("compare");
if(f!=null){f="compare"
}BCUS.DataStoreManager.removeDataKey("compare")
}if(g!=""){l=g;
q+=g+":";
r+=g+"|"
}if(m!=""){q+=m+":";
r+=m+"|"
}q+=o;
if(d==="cardView"){k=o;
r+=k
}else{if(l=="security-center"&&g!=""){r+="article"
}else{if(m=="newsroom"&&m!=o){r+="article"
}else{r+=o
}}}if(d==="cardView"){if(BCUS.DataStoreManager){var n=BCUS.DataStoreManager.getData("card-explorer");
if(!!n){n=JSON.parse(n);
s.prop19=n.bcusCardExplorerValues;
s.eVar44=n.bcusCardExplorerValues;
s.linkTrackVars="prop19,eVar44"
}BCUS.DataStoreManager.removeDataKey("card-explorer")
}}if(o==="cards"){if(window.location.pathname.indexOf("list")>-1){q+=":list"
}else{q+=":grid"
}}i={bcusPageName:q.toUpperCase(),bcusChannel:l.toUpperCase(),bcusHierarchy:r.toUpperCase(),bcusPageCPC:k};
if(BCUS.DataStoreManager){n=BCUS.DataStoreManager.getData("tracking-data");
if(!!n){n=JSON.parse(n);
if(q!="BCUS:cards:grid"&&q!="BCUS:cards:list"){i=$.extend(i,n)
}}BCUS.DataStoreManager.removeDataKey("tracking-data")
}s.pageName=q.toUpperCase();
s.channel=l.toUpperCase();
s.hier3=r.toUpperCase();
s.prop23=s.eVar23=s.getDaysSinceLastVisit("s_lv");
s.prop27=s.pageName;
s.eVar41="BCUS.COM";
s.eVar12=i.bcusPageCPC;
var e=s.t();
if(e){document.write(e)
}};
return{recordEvent:b,recordPageView:c,isMobile:a}
})();
var BCUS=BCUS||{},ImageManager=function(a){this.init(a)
};
ImageManager.prototype={_cache:{},_config:{imageClass:"bcus-image--has-rendition",hasRetina:false,breakpoints:{mobile:{width:640,label:"mobile"},desktop:{label:"desktop"}}},_images:[],_state:null,init:function(a){if(a){this._applyOptions(a)
}this._setState();
this._loadImages();
this._setupCache();
this._addEvents()
},_applyOptions:function(a){if(a.breakpoints){this._config.breakpoints=a.breakpoints
}if(a.imageClass){this._config.imageClass=a.imageClass
}if(a.hasRetina){this._config.hasRetina=a.hasRetina
}},_windowPixelRatio:function(){var a=1;
if(window.screen.systemXDPI!==undefined&&window.screen.logicalXDPI!==undefined&&window.screen.systemXDPI>window.screen.logicalXDPI){a=window.screen.systemXDPI/window.screen.logicalXDPI
}else{if(window.devicePixelRatio!==undefined){a=window.devicePixelRatio
}}return a
},_setState:function(){var a=this,b=window.innerWidth||document.documentElement.clientWidth;
if(this._config.hasRetina&&this._windowPixelRatio()>=2){if(b>this._config.breakpoints.mobile.width){a._state=this._config.breakpoints.desktop.label+"-retina"
}else{a._state=this._config.breakpoints.mobile.label+"-retina"
}}else{if(b>this._config.breakpoints.mobile.width){a._state=this._config.breakpoints.desktop.label
}else{a._state=this._config.breakpoints.mobile.label
}}},_setupCache:function(){this._cache.window=$(window)
},_addEvents:function(){this._cache.window.on("resize",this._resize(this._defaultResizeCallback,150,this))
},_resize:function(d,c,a){var b;
return function(){var f=arguments,e=function(){b=null;
if(d){d.apply(a,f)
}};
clearTimeout(b);
b=setTimeout(e,c)
}
},_defaultResizeCallback:function(){var a=this,b=a._state,d={},c=0;
a._setState();
if(b!==a._state){for(;
c<a._images.length;
c++){d.width=a._images[c].width;
d.height=a._images[c].height;
this._updateImageSrc(a._images[c],d)
}}},_loadImages:function(b){var a=0;
var c={};
if(b){_config.imageClass=b
}this._images=$("."+this._config.imageClass);
for(;
a<this._images.length;
a++){c.width=this._images[a].width;
c.height=this._images[a].height;
this._updateImageSrc(this._images[a],c)
}},_updateImageSrc:function(c,b){var a=this,e=c.getAttribute("data-src-"+a._state),b=b||{},d=(this._config.hasRetina&&this._windowPixelRatio()>=2&&!_.isEmpty(b))||false;
if(!!e){if(c instanceof HTMLImageElement){c.setAttribute("src",e);
if(d){c.height=b.height;
c.width=b.width
}}else{$(c).css("background-image","url('"+e+"')")
}}}};
var BCUS=BCUS||{};
BCUS.Core=(function(){var f={},d=function(){e();
c();
a();
_checkForFocusInSupport();
b()
},e=function(){f.body=$("body");
f.skipToContent=$(".bcus-skipLink");
f.scrollBody=$("html,body")
},c=function(){f.skipToContent.on("click",_onSkipToContentClick);
f.body.on("keyup",g)
},g=function(h){if(h.target.className.indexOf("bcus-focus-keyboard")>-1||h.target.getAttribute("tabindex")==="0"){$(h.target).addClass("bcus-focus-keyboard--focused").on("blur",function(){$(h.target).off("blur").removeClass("bcus-focus-keyboard--focused")
})
}},b=function(){f.body.on("mousedown","*",function(h){if(($(this).is(":focus")||$(this).is(h.target))&&$(this).css("outline-style")=="none"){$(this).css("outline","none").on("blur",function(){$(this).off("blur").css("outline","")
})
}})
},a=function(){if(!Modernizr.input.placeholder){var h=document.getElementsByTagName("input");
for(var j=0,k=h.length;
j<k;
j++){if(h[j].getAttribute("placeholder")){h[j].style.cssText="color:#939393;font-style:italic;";
h[j].value=h[j].getAttribute("placeholder");
h[j].onclick=function(){if(this.value===this.getAttribute("placeholder")){this.value="";
this.style.cssText="color:#000;font-style:normal;"
}};
h[j].onblur=function(){if(this.value===""){this.value=this.getAttribute("placeholder");
this.style.cssText="color:#939393;font-style:italic;"
}}
}}}};
_checkForFocusInSupport=function(){if(navigator.userAgent.match(/firefox/i)){!function(){function i(m){var o="focus"===m.type?"focusin":"focusout",l=new CustomEvent(o,{bubbles:!0,cancelable:!1});
l.c1Generated=!0,m.target.dispatchEvent(l)
}function k(l){l.c1Generated||(j.removeEventListener("focus",i,!0),j.removeEventListener("blur",i,!0),j.removeEventListener("focusin",k,!0),j.removeEventListener("focusout",k,!0)),setTimeout(function(){j.removeEventListener("focusin",k,!0),j.removeEventListener("focusout",k,!0)
})
}var h=window,j=h.document;
void 0===h.onfocusin&&(j.addEventListener("focus",i,!0),j.addEventListener("blur",i,!0),j.addEventListener("focusin",k,!0),j.addEventListener("focusout",k,!0))
}()
}},_onSkipToContentClick=function(j){var i=j.target.getAttribute("href"),h=$(i).offset().top-97;
if(f.body.hasClass("card-details-page")){h+=100;
f.scrollBody.animate({scrollTop:h},300,0,function(){$(".bcus-navigation--secondary-list-link").first().focus()
})
}else{if(f.body.hasClass("benefits-page")){h+=100;
f.scrollBody.animate({scrollTop:h},300,0,function(){$(".bcus-navigation--secondary-list-link").first().focus()
})
}else{f.scrollBody.animate({scrollTop:h},300)
}}};
return{init:d}
})();
$(function(){BCUS.Core.init()
});
var BCUS=BCUS||{};
BCUS.Utils=(function(){var b={},g={defaultBreakpoint:680,defaultResizeTimeout:150},h=function(){j();
m();
v()
},j=function(){b.body=$("body")
},m=function(){},v=function(){var x=("createTouch" in document||navigator.msMaxTouchPoints)?true:false;
if(!!x){b.body.addClass("isTouch")
}},w=function(x){var y=window.innerWidth||document.documentElement.clientWidth,z=x||g.defaultBreakpoint;
if(y>=z){return false
}return true
},f=function(A,z){var x=false,y=z||g.defaultResizeTimeout;
return function(){var C=this,B=arguments;
clearTimeout(x);
x=setTimeout(function(){if(A){A.apply(C,B)
}x=null
},y)
}
},c=function(x,y,A){var z;
if(x==="js"){z=document.createElement("script");
z.setAttribute("type","text/javascript");
z.setAttribute("src",y)
}else{if(x==="css"){}}if(z.readyState){z.onreadystatechange=function(){if(z.readyState==="loaded"||z.readyState==="complete"){z.onreadystatechange=null;
if(A){A()
}}}
}else{z.onload=function(){if(A){A()
}}
}document.getElementsByTagName("head")[0].appendChild(z)
},d=function(x,y,z,B){var A;
return function(){var F=window,E=arguments,D=z&&!A,C=function(){A=null;
if(y){y.apply(F,E)
}};
clearTimeout(A);
A=setTimeout(C,B);
if(D){z.apply(F,E)
}if(x){x()
}}
},i=function(z,y){var x=0,A;
if(z&&y){if(typeof y==="string"){y=[y]
}for(;
x<y.length;
x++){if(z.className.indexOf(y[x]>-1)){if(z.classList){z.classList.remove(y[x])
}else{A="[\\s]*"+y[x];
A=new RegExp(A,"i");
z.className=z.className.replace(A,"")
}}}}},q=function(z,y){var x=0;
if(z&&y){if(typeof y==="string"){y=[y]
}for(;
x<y.length;
x++){if(z.className.indexOf(y[x])===-1){if(z.classList){z.classList.add(y[x])
}else{z.className=z.className+" "+y[x]
}}}}},a=function(x){for(var y in x){if(x.hasOwnProperty(y)){if(x[y]!==""||x[y]!==undefined||x[y]!==null){return false
}}}return true
},r=function(A){var y="/_jcr_content.pagefinder.json?reload="+A;
y=this.getHostName()+this.rootPage+y;
var z=this.currentPage;
var x=this;
var B={url:y,type:"get",currentPage:z,async:false};
$.ajax(B).done(function(E){if(typeof(E)=="string"){E=JSON.parse(E)
}var D=0;
for(;
D<E.length;
D++){if(E[D].path!=undefined||E[D].path!=null){var C=E[D].path.replace(/^\s+|\s+$/g,"")+"/";
var F=this.currentPage+"/";
if(F.indexOf(C)>-1||C.indexOf(F)>-1){x.path=E[D].path.replace(/^\s+|\s+$/g,"")
}}}})
},o=function(){if(!this.path){this.setPath(false)
}if(!this.path){this.setPath(true)
}return this.path
},l=function(x){this.currentPage=x.replace(/^\s+|\s+$/g,"")
},u=function(){return this.currentPage
},k=function(x){this.rootPage=x.replace(/^\s+|\s+$/g,"")
},e=function(){return this.rootPage
},t=function(){return this.pageMode
},p=function(x){this.pageMode=x.replace(/^\s+|\s+$/g,"")
},n=function(){var x=document.location.protocol+"//"+document.location.host;
return x
};
return{init:h,isBelowBreakpoint:w,resize:f,loadFile:c,scrollController:d,addClass:q,removeClass:i,isEmptyObject:a,browseCardUrl:o,setCurrentPage:l,getCurrentPage:u,setRootPage:k,getRootPage:e,setMode:p,getMode:t,setPath:r,getHostName:n}
})();
$(function(){BCUS.Utils.init()
});
var BCUS=BCUS||{};
BCUS.DataStoreManager=(function(){var d={},b=function(){c()
},c=function(){try{d.dataStore=window.sessionStorage
}catch(g){}},e=function(g,h){if(d.dataStore){if(g&&h){d.dataStore.setItem(g,h);
return true
}}return false
},f=function(g){if(d.dataStore){if(g){return d.dataStore.getItem(g)
}}},a=function(g){if(d.dataStore){if(g){d.dataStore.removeItem(g);
return true
}}return false
};
b();
return{storeData:e,getData:f,removeDataKey:a}
})();
var BCUS=BCUS||{};
BCUS.Popover=(function(){_createPopover=function(b,c,h,a){var g=$(b).offset().left;
var f=$(b).offset().top;
var e=document.createElement("div");
var d=document.createElement("div");
d.className="bcus-popover__notification-arrow-"+a;
e.appendChild(document.createTextNode(c));
e.appendChild(d);
e.className="bcus-popover__notification";
e.style.top=(f+h.y)+"px";
e.style.left=(g+h.x)+"px";
$("body").prepend(e)
},_destroyPopover=function(){$(".bcus-popover__notification").fadeOut(400,function(){$(this).remove()
})
};
return{createPopover:_createPopover,destroyPopover:_destroyPopover}
})();
var BCUS=BCUS||{};
BCUS.ContentManager=(function(){var d={},b=function(){c();
a()
},c=function(){d.sideBySideContent=$(".flexible-content--has-image-above, .flexible-content--no-image").not(".flexible-content--full-width");
d.contentArea=$("#content .par")
},a=function(){var g=0,f;
for(;
g<d.sideBySideContent.length;
g++){f=e();
d.contentArea[0].insertBefore(f,d.sideBySideContent[g]);
f.appendChild(d.sideBySideContent[g]);
if(d.sideBySideContent[g+1]){f.appendChild(d.sideBySideContent[g+1]);
BCUS.Utils.addClass(d.sideBySideContent[g+1],"bcus-flexible-content__floated--last")
}g=g+1
}},e=function(){var f=document.createElement("div");
f.className="flexible-content bcus-flexible-content__floated-container";
return f
};
return{init:b}
})();
var BCUS=BCUS||{};
BCUS.BuildModalBox=(function(){var b=function(i,d){var i=i;
var d=d;
var h=!!(navigator.userAgent.match(/Trident/)&&!navigator.userAgent.match(/MSIE/));
var g=window.navigator.userAgent;
var f=g.indexOf("MSIE ");
var e=g.indexOf("Trident ");
if((f>0||e>0)&&!h){c(i,d);
a()
}};
var c=function(f,d){var e="<div id='modalBox' class='bcus-modal'><div class='bcus-modal-content'><div><img src='"+f+"' alt='Modal lightbox' style='width:100%;'/>";
e=e+"<h2 class='bcus-home-explorer-fix'>It's time for an update.</h2>";
e=e+"<p class='bcus-modal-description'>To continue accessing and managing your account, please update your browser.</p></div><div class='bcus-button-center'><br>";
e=e+"<a class='bcus-modal-button-left bcus-home-feature-carousel-item-banner-button bcus-button bcus-button--blue' target='_blank' href='"+d+"'>Learn more</a>";
e=e+"<a class='bcus-modal-button-right bcus-home-feature-carousel-item-banner-button bcus-button bcus-button--white' href='#' id='rightBtn'>Remind me later</a><br><br><br><br></div></div></div>";
$("#dynamicContent").append(e)
};
var a=function(){var e=document.getElementById("modalBox");
e.style.display="block";
var d=document.getElementById("rightBtn");
if(d!=null){d.onclick=function(){e.style.display="none"
}
}if(d!=null){d.onmouseover=function(){$("#rightBtn").removeClass("bcus-button--white");
$("#rightBtn").addClass("bcus-button--blue")
}
}if(d!=null){d.onmouseout=function(){$("#rightBtn").removeClass("bcus-button--blue");
$("#rightBtn").addClass("bcus-button--white")
}
}};
return{init:b}
})();
var BCUS=BCUS||{};
$(function(){BCUS.Accordion.init(BCUS.CheckCookie.getCookie("wcmmode")=="edit")
});
var BCUS=BCUS||{};
BCUS.BenefitNavigation=(function(){var j={},O={headerHeight:68,secondaryNavHeight:60,navAnimationDuration:300,paddingForIndicator:20,secondaryNavBreakpoint:800},g=true,E=false,Q=0,F=false,G=[],H=[],J=function(){v();
n();
b();
B();
L()
},v=function(){j.sectionDisplayedEl=$(".bcus-navigation--secondary-list-item--current");
j.secondaryNav=$(".bcus-navigation--secondary-list");
j.secondaryNavContainer=$(".benefits-navigation");
j.anchorLinks=$(".bcus-navigation--secondary-list-link");
j.header=$(".bcus-card-details__hero-header");
j.activeIndicator=$(".bcus-navigation__secondary-active-indicator");
j.lastActiveLink=$(j.anchorLinks[0]);
j.secondaryNavSections=[];
j.scrollContent=$("body,html");
j.content=$(".content");
j.window=$(window);
j.document=$(document)
},n=function(){H.push(M)
},b=function(){j.sectionDisplayedEl.on("click",u);
j.sectionDisplayedEl.on("keypress",d);
j.document.on("click",C);
j.anchorLinks.on("click",a);
j.window.on("resize",y(e,150));
j.window.on("scroll",o(A,k,x,50))
},B=function(){g=r()
},r=function(){var S=window.innerWidth||document.documentElement.clientWidth;
if(S>O.secondaryNavBreakpoint){return true
}return false
},L=function(){O.lastScrollTop=j.document.scrollTop();
h();
R()
},R=function(){var T=0,X,S,V,W,U;
if(!!g){z()
}for(;
T<j.secondaryNavSections.length;
T++){X=$(j.secondaryNavSections[T]);
S=X.offset().top;
W=S-120;
U=W+X.height();
V=$(j.anchorLinks[0]);
if(O.lastScrollTop>=W&&O.lastScrollTop<U){V=$(j.anchorLinks[T]);
Q=T;
if(!g){K(V)
}else{c(V)
}f(V);
return
}}if(j.secondaryNavSections.length>0){f(V)
}},h=function(){var S=j.document.scrollTop(),T=0,U;
for(;
T<j.anchorLinks.length;
T++){U=j.anchorLinks[T].getAttribute("href");
U=U.replace(/\s+/,"");
j.secondaryNavSections[T]=$(U)[0]
}},f=function(S){$(".bcus-navigation__secondary-active-indicator").show();
if(!S.hasClass("bcus-navigation--secondary-list-link--active")){S.addClass("bcus-navigation--secondary-list-link--active")
}S.parent().siblings().find(".bcus-navigation--secondary-list-link--active").removeClass("bcus-navigation--secondary-list-link--active")
},I=function(){return $(".bcus-navigation--secondary-list-link--active")
},z=function(){var S=O.paddingForIndicator+j.lastActiveLink.width();
j.activeIndicator.width(S)
},K=function(S){var T=S||j.lastActiveLink;
j.sectionDisplayedEl.text(T.text())
},e=function(){var S=r();
if(g===S){return
}if(!!S){m()
}else{w()
}g=S
},w=function(){var S=I();
j.activeIndicator.addClass("bcus-navigation__secondary-active-indicator--hidden").removeAttr("style");
K(S)
},m=function(){var S=I(),U=S.position().left-(O.paddingForIndicator),T=S.width()+O.paddingForIndicator;
if(j.activeIndicator.hasClass("bcus-navigation__secondary-active-indicator--hidden")){j.activeIndicator.removeClass("bcus-navigation__secondary-active-indicator--hidden")
}else{z(S)
}j.activeIndicator.animate({left:"+="+U,width:T},300);
j.lastActiveLink=S
},d=function(T){var S=T.which;
if(S===13){j.sectionDisplayedEl.trigger("click")
}},u=function(T){T.preventDefault();
var S=$(T.target);
if(j.secondaryNav.hasClass("bcus-navigation--secondary-list--open")){N()
}else{t()
}},N=function(){j.sectionDisplayedEl.removeClass("bcus-navigation--secondary-list-item--pending");
j.secondaryNav.removeClass("bcus-navigation--secondary-list--open")
},t=function(){j.sectionDisplayedEl.addClass("bcus-navigation--secondary-list-item--pending");
j.secondaryNav.addClass("bcus-navigation--secondary-list--open")
},C=function(T){var S=$(T.target);
if(S.parents(".benefits-navigation").length===0){if(j.secondaryNav.hasClass("bcus-navigation--secondary-list--open")){N()
}}},a=function(T){T.preventDefault();
var S=0;
for(;
S<H.length;
S++){H[S](T)
}},M=function(W){var S,V,T,U;
S=$(W.target);
V=$(S.attr("href").replace(/\s+/,""));
T=V.offset().top-85;
if(!E){E=true;
f(S);
j.scrollContent.animate({scrollTop:T},O.navAnimationDuration,function(){E=false
});
if(!g&&j.secondaryNav.hasClass("bcus-navigation--secondary-list--open")){N()
}}},c=function(S){var U=j.lastActiveLink.offset().left-S.offset().left,T=S.width()+O.paddingForIndicator;
if(S.attr("href")!==j.lastActiveLink.attr("href")){j.activeIndicator.animate({left:"-="+U,width:T},300);
j.lastActiveLink=S
}},y=function(U,T){var S;
return function(){var X=this,W=arguments,V=function(){S=null;
if(U){U.apply(X,W)
}};
clearTimeout(S);
S=setTimeout(V,T)
}
},o=function(S,T,U,W){var V;
return function(){var aa=window,Z=arguments,Y=U&&!V,X=function(){V=null;
if(T){T.apply(aa,Z)
}};
clearTimeout(V);
V=setTimeout(X,W);
if(Y){U.apply(aa,Z)
}S()
}
},A=function(){p();
if(j.document.scrollTop()===O.lastScrollTop&&F){return
}if(!E&&j.secondaryNavSections.length>0){if(j.document.scrollTop()>O.lastScrollTop||!F){i();
if(!F){F=true
}}else{q()
}}},k=function(){O.lastScrollTop=j.document.scrollTop();
if(!!E){j.lastActiveLink=I()
}E=false
},x=function(){if(!!E){if(!!g){c(I())
}else{K(I())
}}},i=function(){var V=false,S=(Q+1)===j.secondaryNavSections.length?Q:Q+1,X=$(j.secondaryNavSections[S]),U=X.offset().top,W=X.height(),T=$(j.anchorLinks[S]);
if((j.document.scrollTop()>(U-150))&&(j.document.scrollTop()<(U+W))){if(!V){l(T);
Q=S;
V=true;
return
}}},q=function(){var V=false,U=Q===0?Q:Q-1,W=$(j.secondaryNavSections[U]),T=W.offset().top,S=$(j.anchorLinks[U]);
if((j.document.scrollTop()>(T-300))&&(j.document.scrollTop()<(T))){if(!V){l(S);
Q=U;
V=true;
return
}}},l=function(T){var S=0;
if(!g){K(T)
}else{c(T)
}f(T);
for(;
S<G.length;
S++){G[S](T)
}},p=function(){var S=O.headerHeight;
var T=$(".login-container");
if(T.is(":visible")&&!g){S+=T.height()
}if(j.document.scrollTop()>=S){if(!j.secondaryNavContainer.hasClass("bcus-navigation--secondary--fixed")){j.content.addClass("card-details-content--secondary-nav-fixed");
j.secondaryNavContainer.addClass("bcus-navigation--secondary--fixed")
}}else{j.content.removeClass("card-details-content--secondary-nav-fixed");
j.secondaryNavContainer.removeClass("bcus-navigation--secondary--fixed")
}},P=function(S){if(S){G.push(S)
}},D=function(S){if(S){H.push(S)
}};
return{init:J,addSectionViewCallback:P,addNavClickCallback:D}
})();
var BCUS=BCUS||{};
BCUS.CheckCookie=(function(){var c=function(e){var f=b(e);
return f
};
try{var b=function(f){var g=a("domainCPCCookie");
var h=a("cookieLastViewedCPC");
var e=null;
if((h!=="")&&$.inArray(h,f)>=0){e=h
}else{if((g!="")&&($.inArray(g,f)>=0)){e=g
}}return e
};
var a=function(g){var f=g+"=";
var e=document.cookie.split(";");
for(var h=0;
h<e.length;
h++){var j=e[h];
while(j.charAt(0)==" "){j=j.substring(1)
}if(j.indexOf(f)==0){return j.substring(f.length,j.length)
}}return""
}
}catch(d){console.log("BCUS|Cookie Check Exception",d)
}return{init:c,getCookie:a}
})();
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
;
window.matchMedia||(window.matchMedia=function(){var b=(window.styleMedia||window.media);
if(!b){var c=document.createElement("style"),a=document.getElementsByTagName("script")[0],d=null;
c.type="text/css";
c.id="matchmediajs-test";
if(!a){document.head.appendChild(c)
}else{a.parentNode.insertBefore(c,a)
}d=("getComputedStyle" in window)&&window.getComputedStyle(c,null)||c.currentStyle;
b={matchMedium:function(e){var f="@media "+e+"{ #matchmediajs-test { width: 1px; } }";
if(c.styleSheet){c.styleSheet.cssText=f
}else{c.textContent=f
}return d.width==="1px"
}}
}return function(e){return{matches:b.matchMedium(e||"all"),media:e||"all"}
}
}());
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
;
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
(function(b){var a=navigator.userAgent;
if(b.HTMLPictureElement&&((/ecko/).test(a)&&a.match(/rv\:(\d+)/)&&RegExp.$1<45)){addEventListener("resize",(function(){var i;
var h=document.createElement("source");
var c=function(j){var m,k;
var l=j.parentNode;
if(l.nodeName.toUpperCase()==="PICTURE"){m=h.cloneNode();
l.insertBefore(m,l.firstElementChild);
setTimeout(function(){l.removeChild(m)
})
}else{if(!j._pfLastSize||j.offsetWidth>j._pfLastSize){j._pfLastSize=j.offsetWidth;
k=j.sizes;
j.sizes+=",100vw";
setTimeout(function(){j.sizes=k
})
}}};
var e=function(){var j;
var k=document.querySelectorAll("picture > img, img[srcset][sizes]");
for(j=0;
j<k.length;
j++){c(k[j])
}};
var f=function(){clearTimeout(i);
i=setTimeout(e,99)
};
var d=b.matchMedia&&matchMedia("(orientation: landscape)");
var g=function(){f();
if(d&&d.addListener){d.addListener(f)
}};
h.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
if(/^[c|i]|d$/.test(document.readyState||"")){g()
}else{document.addEventListener("DOMContentLoaded",g)
}return f
})())
}})(window);
/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */
(function(O,g,u){g.createElement("picture");
var t,V,D,v;
var y={};
var J=false;
var Z=function(){};
var f=g.createElement("img");
var ad=f.getAttribute;
var C=f.setAttribute;
var L=f.removeAttribute;
var i=g.documentElement;
var P={};
var m={algorithm:""};
var p="data-pfsrc";
var c=p+"set";
var S=navigator.userAgent;
var b=(/rident/).test(S)||((/ecko/).test(S)&&S.match(/rv\:(\d+)/)&&RegExp.$1>35);
var G="currentSrc";
var l=/\s+\+?\d+(e\d+)?w/;
var r=/(\([^)]+\))?\s*(.+)/;
var z=O.picturefillCFG;
var w="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
var R="font-size:100%!important;";
var I=true;
var A={};
var ab={};
var j=O.devicePixelRatio;
var aa={px:1,"in":96};
var h=g.createElement("a");
var W=false;
var K=/^[ \t\n\r\u000c]+/,T=/^[, \t\n\r\u000c]+/,ae=/^[^ \t\n\r\u000c]+/,B=/[,]+$/,H=/^\d+$/,k=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
var M=function(ai,af,ah,ag){if(ai.addEventListener){ai.addEventListener(af,ah,ag||false)
}else{if(ai.attachEvent){ai.attachEvent("on"+af,ah)
}}};
var e=function(ag){var af={};
return function(ah){if(!(ah in af)){af[ah]=ag(ah)
}return af[ah]
}
};
function q(af){return(af==="\u0020"||af==="\u0009"||af==="\u000A"||af==="\u000C"||af==="\u000D")
}var o=(function(){var af=/^([\d\.]+)(em|vw|px)$/;
var ag=function(){var ak=arguments,aj=0,ai=ak[0];
while(++aj in ak){ai=ai.replace(ak[aj],ak[++aj])
}return ai
};
var ah=e(function(ai){return"return "+ag((ai||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig,"")+";"
});
return function(aj,ak){var ai;
if(!(aj in A)){A[aj]=false;
if(ak&&(ai=aj.match(af))){A[aj]=ai[1]*aa[ai[2]]
}else{try{A[aj]=new Function("e",ah(aj))(aa)
}catch(al){}}}return A[aj]
}
})();
var U=function(ag,af){if(ag.w){ag.cWidth=y.calcListLength(af||"100vw");
ag.res=ag.w/ag.cWidth
}else{ag.res=ag.d
}return ag
};
var Q=function(ah){if(!J){return
}var aj,ag,ai;
var af=ah||{};
if(af.elements&&af.elements.nodeType===1){if(af.elements.nodeName.toUpperCase()==="IMG"){af.elements=[af.elements]
}else{af.context=af.elements;
af.elements=null
}}aj=af.elements||y.qsa((af.context||g),(af.reevaluate||af.reselect)?y.sel:y.selShort);
if((ai=aj.length)){y.setupRun(af);
W=true;
for(ag=0;
ag<ai;
ag++){y.fillImg(aj[ag],af)
}y.teardownRun(af)
}};
t=(O.console&&console.warn)?function(af){console.warn(af)
}:Z;
if(!(G in f)){G="src"
}P["image/jpeg"]=true;
P["image/gif"]=true;
P["image/png"]=true;
function E(af,ah){var ag=new O.Image();
ag.onerror=function(){P[af]=false;
Q()
};
ag.onload=function(){P[af]=ag.width===1;
Q()
};
ag.src=ah;
return"pending"
}P["image/svg+xml"]=g.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1");
function n(){I=false;
j=O.devicePixelRatio;
A={};
ab={};
y.DPR=j||1;
aa.width=Math.max(O.innerWidth||0,i.clientWidth);
aa.height=Math.max(O.innerHeight||0,i.clientHeight);
aa.vw=aa.width/100;
aa.vh=aa.height/100;
v=[aa.height,aa.width,j].join("-");
aa.em=y.getEmValue();
aa.rem=aa.em
}function x(af,ah,aj,ag){var al,ai,am,ak;
if(m.algorithm==="saveData"){if(af>2.7){ak=aj+1
}else{ai=ah-aj;
al=Math.pow(af-0.6,1.5);
am=ai*al;
if(ag){am+=0.1*al
}ak=af+am
}}else{ak=(aj>1)?Math.sqrt(af*ah):af
}return ak>aj
}function Y(ag){var af;
var ai=y.getSet(ag);
var ah=false;
if(ai!=="pending"){ah=v;
if(ai){af=y.setRes(ai);
y.applySetCandidate(af,ag)
}}ag[y.ns].evaled=ah
}function F(ag,af){return ag.res-af.res
}function ac(af,ah,ai){var ag;
if(!ai&&ah){ai=af[y.ns].sets;
ai=ai&&ai[ai.length-1]
}ag=X(ah,ai);
if(ag){ah=y.makeUrl(ah);
af[y.ns].curSrc=ah;
af[y.ns].curCan=ag;
if(!ag.res){U(ag,ag.set.sizes)
}}return ag
}function X(ai,aj){var af,ag,ah;
if(ai&&aj){ah=y.parseSet(aj);
ai=y.makeUrl(ai);
for(af=0;
af<ah.length;
af++){if(ai===y.makeUrl(ah[af].url)){ag=ah[af];
break
}}}return ag
}function d(ak,aj){var ah,af,ai,al;
var ag=ak.getElementsByTagName("source");
for(ah=0,af=ag.length;
ah<af;
ah++){ai=ag[ah];
ai[y.ns]=true;
al=ai.getAttribute("srcset");
if(al){aj.push({srcset:al,media:ai.getAttribute("media"),type:ai.getAttribute("type"),sizes:ai.getAttribute("sizes")})
}}}function N(an,ao){function ar(av){var au,at=av.exec(an.substring(am));
if(at){au=at[0];
am+=au.length;
return au
}}var ah=an.length,ag,aq,ak,af,aj,am=0,ai=[];
function ap(){var aA=false,aB,ax,au,at,aD={},av,aC,az,aw,ay;
for(at=0;
at<aq.length;
at++){av=aq[at];
aC=av[av.length-1];
az=av.substring(0,av.length-1);
aw=parseInt(az,10);
ay=parseFloat(az);
if(H.test(az)&&(aC==="w")){if(aB||ax){aA=true
}if(aw===0){aA=true
}else{aB=aw
}}else{if(k.test(az)&&(aC==="x")){if(aB||ax||au){aA=true
}if(ay<0){aA=true
}else{ax=ay
}}else{if(H.test(az)&&(aC==="h")){if(au||ax){aA=true
}if(aw===0){aA=true
}else{au=aw
}}else{aA=true
}}}}if(!aA){aD.url=ag;
if(aB){aD.w=aB
}if(ax){aD.d=ax
}if(au){aD.h=au
}if(!au&&!ax&&!aB){aD.d=1
}if(aD.d===1){ao.has1x=true
}aD.set=ao;
ai.push(aD)
}}function al(){ar(K);
ak="";
af="in descriptor";
while(true){aj=an.charAt(am);
if(af==="in descriptor"){if(q(aj)){if(ak){aq.push(ak);
ak="";
af="after descriptor"
}}else{if(aj===","){am+=1;
if(ak){aq.push(ak)
}ap();
return
}else{if(aj==="\u0028"){ak=ak+aj;
af="in parens"
}else{if(aj===""){if(ak){aq.push(ak)
}ap();
return
}else{ak=ak+aj
}}}}}else{if(af==="in parens"){if(aj===")"){ak=ak+aj;
af="in descriptor"
}else{if(aj===""){aq.push(ak);
ap();
return
}else{ak=ak+aj
}}}else{if(af==="after descriptor"){if(q(aj)){}else{if(aj===""){ap();
return
}else{af="in descriptor";
am-=1
}}}}}am+=1
}}while(true){ar(T);
if(am>=ah){return ai
}ag=ar(ae);
aq=[];
if(ag.slice(-1)===","){ag=ag.replace(B,"");
ap()
}else{al()
}}}function a(am){var ah=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;
var ag=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
var aj;
var an;
var ao;
var af;
var ak;
var ap;
function al(aw){var az;
var ay="";
var au=[];
var ar=[];
var aq=0;
var ax=0;
var aA=false;
function av(){if(ay){au.push(ay);
ay=""
}}function at(){if(au[0]){ar.push(au);
au=[]
}}while(true){az=aw.charAt(ax);
if(az===""){av();
at();
return ar
}else{if(aA){if((az==="*")&&(aw[ax+1]==="/")){aA=false;
ax+=2;
av();
continue
}else{ax+=1;
continue
}}else{if(q(az)){if((aw.charAt(ax-1)&&q(aw.charAt(ax-1)))||!ay){ax+=1;
continue
}else{if(aq===0){av();
ax+=1;
continue
}else{az=" "
}}}else{if(az==="("){aq+=1
}else{if(az===")"){aq-=1
}else{if(az===","){av();
at();
ax+=1;
continue
}else{if((az==="/")&&(aw.charAt(ax+1)==="*")){aA=true;
ax+=2;
continue
}}}}}}}ay=ay+az;
ax+=1
}}function ai(aq){if(ah.test(aq)&&(parseFloat(aq)>=0)){return true
}if(ag.test(aq)){return true
}if((aq==="0")||(aq==="-0")||(aq==="+0")){return true
}return false
}an=al(am);
ao=an.length;
for(aj=0;
aj<ao;
aj++){af=an[aj];
ak=af[af.length-1];
if(ai(ak)){ap=ak;
af.pop()
}else{continue
}if(af.length===0){return ap
}af=af.join(" ");
if(!(y.matchesMedia(af))){continue
}return ap
}return"100vw"
}y.ns=("pf"+new Date().getTime()).substr(0,9);
y.supSrcset="srcset" in f;
y.supSizes="sizes" in f;
y.supPicture=!!O.HTMLPictureElement;
if(y.supSrcset&&y.supPicture&&!y.supSizes){(function(af){f.srcset="data:,a";
af.src="data:,a";
y.supSrcset=f.complete===af.complete;
y.supPicture=y.supSrcset&&y.supPicture
})(g.createElement("img"))
}if(y.supSrcset&&!y.supSizes){(function(){var ag="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
var ah="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
var af=g.createElement("img");
var ai=function(){var aj=af.width;
if(aj===2){y.supSizes=true
}D=y.supSrcset&&!y.supSizes;
J=true;
setTimeout(Q)
};
af.onload=ai;
af.onerror=ai;
af.setAttribute("sizes","9px");
af.srcset=ah+" 1w,"+ag+" 9w";
af.src=ah
})()
}else{J=true
}y.selShort="picture>img,img[srcset]";
y.sel=y.selShort;
y.cfg=m;
y.DPR=(j||1);
y.u=aa;
y.types=P;
y.setSize=Z;
y.makeUrl=e(function(af){h.href=af;
return h.href
});
y.qsa=function(af,ag){return("querySelector" in af)?af.querySelectorAll(ag):[]
};
y.matchesMedia=function(){if(O.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches){y.matchesMedia=function(af){return !af||(matchMedia(af).matches)
}
}else{y.matchesMedia=y.mMQ
}return y.matchesMedia.apply(this,arguments)
};
y.mMQ=function(af){return af?o(af):true
};
y.calcLength=function(af){var ag=o(af,true)||false;
if(ag<0){ag=false
}return ag
};
y.supportsType=function(af){return(af)?P[af]:true
};
y.parseSize=e(function(ag){var af=(ag||"").match(r);
return{media:af&&af[1],length:af&&af[2]}
});
y.parseSet=function(af){if(!af.cands){af.cands=N(af.srcset,af)
}return af.cands
};
y.getEmValue=function(){var af;
if(!V&&(af=g.body)){var ai=g.createElement("div"),ag=i.style.cssText,ah=af.style.cssText;
ai.style.cssText=w;
i.style.cssText=R;
af.style.cssText=R;
af.appendChild(ai);
V=ai.offsetWidth;
af.removeChild(ai);
V=parseFloat(V,10);
i.style.cssText=ag;
af.style.cssText=ah
}return V||16
};
y.calcListLength=function(ag){if(!(ag in ab)||m.uT){var af=y.calcLength(a(ag));
ab[ag]=!af?aa.width:af
}return ab[ag]
};
y.setRes=function(ai){var ah;
if(ai){ah=y.parseSet(ai);
for(var ag=0,af=ah.length;
ag<af;
ag++){U(ah[ag],ai.sizes)
}}return ah
};
y.setRes.res=U;
y.applySetCandidate=function(ak,aj){if(!ak.length){return
}var ar,ai,ah,ag,an,ao,am,al,aq;
var af=aj[y.ns];
var ap=y.DPR;
ao=af.curSrc||aj[G];
am=af.curCan||ac(aj,ao,ak[0].set);
if(am&&am.set===ak[0].set){aq=(b&&!aj.complete&&am.res-0.1>ap);
if(!aq){am.cached=true;
if(am.res>=ap){an=am
}}}if(!an){ak.sort(F);
ag=ak.length;
an=ak[ag-1];
for(ai=0;
ai<ag;
ai++){ar=ak[ai];
if(ar.res>=ap){ah=ai-1;
if(ak[ah]&&(aq||ao!==y.makeUrl(ar.url))&&x(ak[ah].res,ar.res,ap,ak[ah].cached)){an=ak[ah]
}else{an=ar
}break
}}}if(an){al=y.makeUrl(an.url);
af.curSrc=al;
af.curCan=an;
if(al!==ao){y.setSrc(aj,an)
}y.setSize(aj)
}};
y.setSrc=function(af,ag){var ah;
af.src=ag.url;
if(ag.set.type==="image/svg+xml"){ah=af.style.width;
af.style.width=(af.offsetWidth+1)+"px";
if(af.offsetWidth+1){af.style.width=ah
}}};
y.getSet=function(af){var ah,ak,aj;
var ag=false;
var ai=af[y.ns].sets;
for(ah=0;
ah<ai.length&&!ag;
ah++){ak=ai[ah];
if(!ak.srcset||!y.matchesMedia(ak.media)||!(aj=y.supportsType(ak.type))){continue
}if(aj==="pending"){ak=aj
}ag=ak;
break
}return ag
};
y.parseSets=function(aj,al,am){var ai,ak,ag,an;
var ah=al&&al.nodeName.toUpperCase()==="PICTURE";
var af=aj[y.ns];
if(af.src===u||am.src){af.src=ad.call(aj,"src");
if(af.src){C.call(aj,p,af.src)
}else{L.call(aj,p)
}}if(af.srcset===u||am.srcset||!y.supSrcset||aj.srcset){ai=ad.call(aj,"srcset");
af.srcset=ai;
an=true
}af.sets=[];
if(ah){af.pic=true;
d(al,af.sets)
}if(af.srcset){ak={srcset:af.srcset,sizes:ad.call(aj,"sizes")};
af.sets.push(ak);
ag=(D||af.src)&&l.test(af.srcset||"");
if(!ag&&af.src&&!X(af.src,ak)&&!ak.has1x){ak.srcset+=", "+af.src;
ak.cands.push({url:af.src,d:1,set:ak})
}}else{if(af.src){af.sets.push({srcset:af.src,sizes:null})
}}af.curCan=null;
af.curSrc=u;
af.supported=!(ah||(ak&&!y.supSrcset)||(ag&&!y.supSizes));
if(an&&y.supSrcset&&!af.supported){if(ai){C.call(aj,c,ai);
aj.srcset=""
}else{L.call(aj,c)
}}if(af.supported&&!af.srcset&&((!af.src&&aj.src)||aj.src!==y.makeUrl(af.src))){if(af.src===null){aj.removeAttribute("src")
}else{aj.src=af.src
}}af.parsed=true
};
y.fillImg=function(ah,ag){var ai;
var af=ag.reselect||ag.reevaluate;
if(!ah[y.ns]){ah[y.ns]={}
}ai=ah[y.ns];
if(!af&&ai.evaled===v){return
}if(!ai.parsed||ag.reevaluate){y.parseSets(ah,ah.parentNode,ag)
}if(!ai.supported){Y(ah)
}else{ai.evaled=v
}};
y.setupRun=function(){if(!W||I||(j!==O.devicePixelRatio)){n()
}};
if(y.supPicture){Q=Z;
y.fillImg=Z
}else{(function(){var ah;
var al=O.attachEvent?/d$|^c/:/d$|^c|^i/;
var ak=function(){var am=g.readyState||"";
af=setTimeout(ak,am==="loading"?200:999);
if(g.body){y.fillImgs();
ah=ah||al.test(am);
if(ah){clearTimeout(af)
}}};
var af=setTimeout(ak,g.body?9:99);
var ag=function(an,aq){var ap,ao;
var am=function(){var ar=(new Date())-ao;
if(ar<aq){ap=setTimeout(am,aq-ar)
}else{ap=null;
an()
}};
return function(){ao=new Date();
if(!ap){ap=setTimeout(am,aq)
}}
};
var ai=i.clientHeight;
var aj=function(){I=Math.max(O.innerWidth||0,i.clientWidth)!==aa.width||i.clientHeight!==ai;
ai=i.clientHeight;
if(I){y.fillImgs()
}};
M(O,"resize",ag(aj,99));
M(g,"readystatechange",ak)
})()
}y.picturefill=Q;
y.fillImgs=Q;
y.teardownRun=Z;
Q._=y;
O.picturefillCFG={pf:y,push:function(ag){var af=ag.shift();
if(typeof y[af]==="function"){y[af].apply(y,ag)
}else{m[af]=ag[0];
if(W){y.fillImgs({reselect:true})
}}}};
while(z&&z.length){O.picturefillCFG.push(z.shift())
}O.picturefill=Q;
if(typeof module==="object"&&typeof module.exports==="object"){module.exports=Q
}else{if(typeof define==="function"&&define.amd){define("picturefill",function(){return Q
})
}}if(!y.supPicture){P["image/webp"]=E("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==")
}})(window,document);
(function(b){var a=function(c){return c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")
};
b.picturefillBackgroundOptions={selector:"picturefill-background",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%"};
b.picturefillBackground=function(){var n=b.document.getElementsByClassName(b.picturefillBackgroundOptions.selector);
for(var h=0,m=n.length;
h<m;
h++){var d=n[h].getElementsByTagName("span"),l=[];
for(var g=0,k=d.length;
g<k;
g++){var c=d[g].getAttribute("data-src"),e=d[g].getAttribute("data-media");
if(c&&(!e||(b.matchMedia&&b.matchMedia(e).matches))){l.push(c)
}}if(l.length){c=l.pop();
var f=new RegExp(a(c));
if(!f.test(n[h].style.backgroundImage)){n[h].style.backgroundImage="url('"+c+"')";
n[h].style.backgroundSize=b.picturefillBackgroundOptions.backgroundSize;
n[h].style.backgroundRepeat=b.picturefillBackgroundOptions.backgroundRepeat;
n[h].style.backgroundPosition=b.picturefillBackgroundOptions.backgroundPosition
}}}};
if(b.addEventListener){b.addEventListener("load",b.picturefillBackground,false);
b.addEventListener("resize",b.picturefillBackground,false);
b.addEventListener("DOMContentLoaded",function(){b.picturefillBackground();
b.removeEventListener("load",b.picturefillBackground,false)
},false)
}else{if(b.attachEvent){b.attachEvent("onload",b.picturefillBackground)
}}}(this));
(function(d){var b=d.event,a,c;
a=b.special.debouncedresize={setup:function(){d(this).on("resize",a.handler)
},teardown:function(){d(this).off("resize",a.handler)
},handler:function(i,e){var h=this,g=arguments,f=function(){i.type="debouncedresize";
b.dispatch.apply(h,g)
};
if(c){clearTimeout(c)
}e?f():c=setTimeout(f,a.threshold)
},threshold:150}
})(jQuery);
(function(d){var c=d.event,a,e={_:0},f=0,g,b;
a=c.special.throttledresize={setup:function(){d(this).on("resize",a.handler)
},teardown:function(){d(this).off("resize",a.handler)
},handler:function(k,h){var j=this,i=arguments;
g=true;
if(!b){setInterval(function(){f++;
if(f>a.threshold&&g||h){k.type="throttledresize";
c.dispatch.apply(j,i);
g=false;
f=0
}if(f>9){d(e).stop();
b=false;
f=0
}},30);
b=true
}},threshold:0}
})(jQuery);
$(function(){var c=function(m){var l={};
if(m.indexOf("?")===0){m=m.substring(1)
}var k=m.split("&");
for(var h=0;
h<k.length;
h++){var j=k[h];
var g=j.indexOf("=");
if(g>-1){l[j.substring(0,g)]=j.substring(g+1)
}}return l
};
var f=function(i,h){var g=$('[data-vanity-id="'+i.toLowerCase()+'"]');
if(!g.length||(h&&g.data("vanitySkipCpc"))){g=$('[data-vanity-id="default"]')
}$("[data-vanity-id]").hide();
g.show()
};
var e=c(window.location.search||"");
var a=e.p;
var d=BCUS.CheckCookie.getCookie("cookieLastViewedCPC");
var b=BCUS.CheckCookie.getCookie("domainCPCCookie");
if(a){f(a,false)
}else{if(d){f(d,true)
}else{if(b){f(b,true)
}}}});
var BCUS=BCUS||{};
BCUS.QueryParamHelper=(function(){var a=function(f,d){if(!d){d=window.location.search
}var e=new RegExp("[\\?&]"+f+"=([^&#]*)"),c=e.exec(d);
return c?decodeURIComponent(c[1].replace(/\+/g," ")):""
},b=function(g,d,e){var f=new RegExp("[\\?&]"+g+"=([^&#]*)"),h=d.indexOf("?")!==-1?"&":"?",c=f.exec(d);
if(c){return d.replace(f,c[0].charAt(0)+g+"="+e)
}else{return d+h+g+"="+e
}};
return{getQueryParam:a,replaceQueryParam:b}
})();
var BCUS=BCUS||{};
BCUS.DynamicRefId=(function(){var e="referrerid",d="bcus-storefront-refid",f=BCUS.QueryParamHelper,c=function(){var g=f.getQueryParam(e,window.location.search);
if(g){document.cookie=d+"="+g+";path=/"
}},b=function(){return BCUS.CheckCookie.getCookie(d)
},a=function(g){return b()?f.replaceQueryParam(e,g,b()):g
};
return{init:c,getRefId:b,replaceRefId:a}
})();
$(function(){BCUS.DynamicRefId.init()
});