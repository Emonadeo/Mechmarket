(()=>{"use strict";var t={924:(t,e,r)=>{var n=r(144),a=r(968),s=r.n(a),l=r(345);const o={props:{placeholder:String,value:String}};var i=r(900);const c={components:{Textfield:(0,i.Z)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"textfield"},[r("input",{attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])}),[],!1,null,"7c6b69f2",null).exports,Btn:(0,i.Z)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn",on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)}),[],!1,null,"085cb2c0",null).exports},data:function(){return{search:""}}};const u={components:{TitleBar:(0,i.Z)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"titlebar"},[r("div",{staticClass:"control"},[r("textfield",{attrs:{placeholder:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),r("btn",{on:{click:function(e){return t.$store.dispatch("toggleTheme")}}},[t._v("D")])],1),t._v(" "),r("nav",{staticClass:"tabs"},[r("router-link",{staticClass:"tab",attrs:{to:{name:"selling"},selected:"selling"===this.$route.name}},[t._v("Selling")]),t._v(" "),r("router-link",{staticClass:"tab",attrs:{to:{name:"buying"},selected:"buying"===this.$route.name}},[t._v("Buying")]),t._v(" "),r("router-link",{staticClass:"tab",attrs:{to:{name:"trading"},selected:"trading"===this.$route.name}},[t._v("Trading")])],1)])}),[],!1,null,"0801fb02",null).exports},computed:{theme:function(){return this.$store.state.theme}}};const h=(0,i.Z)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"surface",class:t.theme,attrs:{id:"app"}},[r("title-bar"),t._v(" "),r("h1",[t._v("Hallo Welt")]),t._v(" "),r("p",[t._v("Lorem ipsum dolor sit amet")]),t._v(" "),r("router-view")],1)}),[],!1,null,null,null).exports;n.Z.use(s()),n.Z.use(l.Z);var m=new(s().Store)({strict:!0,state:{theme:window.localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")||"light"},mutations:{changeTheme:function(t,e){t.theme=e,window.localStorage.setItem("theme",e)}},actions:{toggleTheme:function(t){this.commit("changeTheme","dark"!==t.state.theme?"dark":"light")}}}),p=new l.Z({mode:"history",base:"/Mechmarket/",fallback:!1,routes:[{path:"/",name:"homepage"},{path:"/selling",name:"selling"},{path:"/buying",name:"buying"},{path:"/trading",name:"trading"}]});new n.Z({el:"#app",store:m,router:p,render:function(t){return t(h)}})}},e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.m=t,r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={179:0},e=[[924,197]],n=()=>{};function a(){for(var n,a=0;a<e.length;a++){for(var s=e[a],l=!0,o=1;o<s.length;o++){var i=s[o];0!==t[i]&&(l=!1)}l&&(e.splice(a--,1),n=r(r.s=s[0]))}return 0===e.length&&(r.x(),r.x=()=>{}),n}r.x=()=>{r.x=()=>{},l=l.slice();for(var t=0;t<l.length;t++)s(l[t]);return(n=a)()};var s=a=>{for(var s,l,[i,c,u,h]=a,m=0,p=[];m<i.length;m++)l=i[m],r.o(t,l)&&t[l]&&p.push(t[l][0]),t[l]=0;for(s in c)r.o(c,s)&&(r.m[s]=c[s]);for(u&&u(r),o(a);p.length;)p.shift()();return h&&e.push.apply(e,h),n()},l=self.webpackChunkmechmarket=self.webpackChunkmechmarket||[],o=l.push.bind(l);l.push=s})(),r.x()})();
//# sourceMappingURL=main.bundle.js.map