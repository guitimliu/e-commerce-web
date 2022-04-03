(function(){"use strict";var n={504:function(n,e,t){var r=t(963),a=t(252);function o(n,e,t,r,o,i){const u=(0,a.up)("NavMenu"),c=(0,a.up)("router-view"),s=(0,a.up)("FooterView");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(u),(0,a.Wm)(c),(0,a.Wm)(s)],64)}var i=t(577);const u={class:"bg-white sticky-top"},c={class:"container"},s={class:"navbar px-0 navbar-expand-lg navbar-light bg-white"},l=(0,a._)("a",{class:"navbar-brand position-absolute",href:"./index.html",style:{left:"50%",transform:"translate(-50%, -50%)",top:"50%"}}," Navbar ",-1),f=(0,a._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a._)("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse bg-white custom-header-md-open",id:"navbarNav"},v={class:"navbar-nav"},b=(0,a.uE)('<div class="d-flex"><a href="#"><i class="fas bi-heart me-5"></i></a><a href="./cart-2.html"><i class="fas fa-shopping-cart"></i></a></div>',1);function p(n,e,t,r,o,p){const m=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("div",c,[(0,a._)("nav",s,[l,f,(0,a._)("div",d,[(0,a._)("ul",v,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.menuData,(n=>((0,a.wg)(),(0,a.iD)("li",{class:"nav-item",key:n.name},[(0,a.Wm)(m,{class:"nav-link",to:n.link},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(n.name),1)])),_:2},1032,["to"])])))),128))])]),b])])])}var m={data(){return{menuData:[{name:"Home",link:"/"},{name:"About",link:"/about"},{name:"Products",link:"/products"}]}}},g=t(744);const h=(0,g.Z)(m,[["render",p]]);var w=h;const y={class:"bg-dark"},k={class:"container"},_={class:"d-flex align-items-center justify-content-between text-white py-4"},x={class:"mb-0"},O={class:"d-flex list-unstyled mb-0 h4"};function j(n,e,t,r,o,u){const c=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("div",k,[(0,a._)("div",_,[(0,a._)("p",x,(0,i.zw)(o.copyrightText),1),(0,a._)("ul",O,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.socialBtn,(n=>((0,a.wg)(),(0,a.iD)("li",{key:n.name},[(0,a.Wm)(c,{class:"text-white mx-3",to:n.link},{default:(0,a.w5)((()=>[(0,a._)("i",{class:(0,i.C_)(["bi",n.iconClass])},null,2)])),_:2},1032,["to"])])))),128))])])])])}var C={data(){return{copyrightText:"© 2022 LOGO All Rights Reserved.",socialBtn:[{name:"Facebook",link:"#",iconClass:"bi-facebook"},{name:"Instagram",link:"#",iconClass:"bi-instagram"},{name:"Line",link:"#",iconClass:"bi-line"}]}}};const T=(0,g.Z)(C,[["render",j]]);var D=T,N={components:{NavMenu:w,FooterView:D}};const P=(0,g.Z)(N,[["render",o]]);var E=P,A=t(119);const F=[{path:"/",name:"home",component:()=>t.e(823).then(t.bind(t,823))},{path:"/about",name:"about",component:()=>t.e(381).then(t.bind(t,381))},{path:"/products",name:"Products",component:()=>t.e(413).then(t.bind(t,413))}],M=(0,A.p7)({history:(0,A.r5)(),routes:F});var S=M;(0,r.ri)(E).use(S).mount("#app")}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(e,r,a,o){if(!r){var i=1/0;for(l=0;l<n.length;l++){r=n[l][0],a=n[l][1],o=n[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(u=!1,o<i&&(i=o));if(u){n.splice(l--,1);var s=a();void 0!==s&&(e=s)}}return e}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[r,a,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/"+n+"."+{381:"38aecd33",413:"b2f42895",823:"29ebb445"}[n]+".js"}}(),function(){t.miniCssF=function(n){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="e-commerce-web:";t.l=function(r,a,o,i){if(n[r])n[r].push(a);else{var u,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+o){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",e+o),u.src=r),n[r]=[a];var d=function(e,t){u.onerror=u.onload=null,clearTimeout(v);var a=n[r];if(delete n[r],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(n){return n(t)})),e)return e(t)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var n={143:0};t.f.j=function(e,r){var a=t.o(n,e)?n[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(t,r){a=n[e]=[t,r]}));r.push(a[2]=o);var i=t.p+t.u(e),u=new Error,c=function(r){if(t.o(n,e)&&(a=n[e],0!==a&&(n[e]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,a[1](u)}};t.l(i,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var a,o,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(e){return 0!==n[e]}))){for(a in u)t.o(u,a)&&(t.m[a]=u[a]);if(c)var l=c(t)}for(e&&e(r);s<i.length;s++)o=i[s],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(l)},r=self["webpackChunke_commerce_web"]=self["webpackChunke_commerce_web"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(504)}));r=t.O(r)})();
//# sourceMappingURL=app.0f816277.js.map