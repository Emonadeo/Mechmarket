(()=>{"use strict";var t={2356:(t,e,r)=>{var n=r(144),a=r(7968),s=r.n(a);n.Z.use(s());const i=new(s().Store)({strict:!0,state:{theme:window.localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")||"light"},mutations:{updateTheme:function(t,e){t.theme=e,window.localStorage.setItem("theme",e)}},actions:{toggleTheme:function(t){this.commit("updateTheme","dark"!==t.state.theme?"dark":"light")}}});var o=r(8345),u=r(1900);const c=(0,u.Z)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn",on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)}),[],!1,null,"085cb2c0",null).exports,l={components:{Btn:c},methods:{search:function(t){this.$store.commit("updateQuery",t.target.value)}}};const p=(0,u.Z)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"search"},[r("input",{attrs:{name:"q",type:"text",placeholder:"Search","aria-label":"Search"},domProps:{value:t.$route.query.q},on:{input:t.search}}),t._v(" "),r("btn",[t._v("->")])],1)}),[],!1,null,"0b5ade1e",null).exports;function f(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function m(t,e,r,n,a,s,i){try{var o=t[s](i),u=o.value}catch(t){return void r(t)}o.done?e(u):Promise.resolve(u).then(n,a)}function g(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var s=t.apply(e,r);function i(t){m(s,n,a,i,o,"next",t)}function o(t){m(s,n,a,i,o,"throw",t)}i(void 0)}))}}function d(t){return v.apply(this,arguments)}function v(){return(v=g(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.selftext){t.next=2;break}return t.abrupt("return",[]);case 2:if(r=f(new Set(f(e.selftext.matchAll(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]*\.[a-zA-Z0-9]*\b([-a-zA-Z0-9@:%_+.~#/]*)/g)).map((function(t){return t[0]}))))){t.next=5;break}return t.abrupt("return",{});case 5:return t.next=7,Promise.all(r.map(function(){var t=g(regeneratorRuntime.mark((function t(e){var r,n,a,s,i,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!/\/\/imgur\.com\/a\//.test(e)){t.next=11;break}return r=e.split("/").pop(),t.next=4,fetch("https://api.imgur.com/3/album/".concat(r,"/images"),{headers:{Authorization:"Client-ID 18506a441ae08ca"}});case 4:return n=t.sent,t.next=7,n.json();case 7:return a=t.sent,t.abrupt("return",a.data.map((function(t){return t.link})));case 11:if(!/\/\/imgur\.com\/gallery\//.test(e)){t.next=22;break}return s=e.split("/").pop(),t.next=15,fetch("https://api.imgur.com/3/gallery/".concat(s),{headers:{Authorization:"Client-ID 18506a441ae08ca"}});case 15:return i=t.sent,t.next=18,i.json();case 18:return o=t.sent,t.abrupt("return",o.data.images.map((function(t){return t.link})));case 22:/\/\/imgur\.com\/[A-Za-z0-9]*$/.test(e)&&(e="https://i.imgur.com/".concat(e.split("/").pop(),".jpg"));case 23:return t.abrupt("return",e);case 24:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 7:return r=(r=t.sent).flat().filter((function(t){return/\.(png|jpg|jpeg|gif|webp)\/?$/.test(t)})),t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return y.apply(this,arguments)}function y(){return(y=g(regeneratorRuntime.mark((function t(e){var r,n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e),t.t0=e,t.next="selling"===t.t0?4:17;break;case 4:return this.loading=!0,t.next=7,fetch("https://www.reddit.com/r/mechmarket/search/.json?q=flair:selling&restrict_sr=on&sort=new");case 7:return r=t.sent,t.next=10,r.json();case 10:return n=t.sent,a=n.data.children,t.next=14,Promise.all(a.map(function(){var t=g(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=/\[\w+(-\w+)?]/.exec(e.data.title)[0],t.t1=e.data.title.split("[H]")[1].split("[W]")[0].trim(),t.next=4,d(e.data);case 4:return t.t2=t.sent,t.abrupt("return",{region:t.t0,title:t.t1,pictures:t.t2});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 14:return this.posts=t.sent,this.loading=!1,t.abrupt("break",19);case 17:return this.posts=[],t.abrupt("break",19);case 19:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}const w={props:{flair:String},components:{Search:p,Btn:c},data:function(){return{loading:!0,posts:[]}},computed:{theme:function(){return this.$store.state.theme},query:function(){return this.$route.query.q}},watch:{flair:function(t){b.bind(this)(t)}},created:function(){b.bind(this)(this.flair)}};const _=(0,u.Z)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"surface",class:t.theme,attrs:{id:"app"}},[r("div",{staticClass:"titlebar"},[r("div",{staticClass:"control"},[r("search"),t._v(" "),r("btn",[t._v("US")]),t._v(" "),r("btn",{on:{click:function(e){return t.$store.dispatch("toggleTheme")}}},[t._v("D")])],1),t._v(" "),r("nav",{staticClass:"tabs"},[r("router-link",{staticClass:"tab",attrs:{to:{name:"home",params:{flair:"selling"},query:{q:t.$store.state.query}},selected:"selling"===t.$route.params.flair}},[t._v("\n                Selling\n            ")]),t._v(" "),r("router-link",{staticClass:"tab",attrs:{to:{name:"home",params:{flair:"buying"},query:{q:t.$store.state.query}},selected:"buying"===t.$route.params.flair}},[t._v("\n                Buying\n            ")]),t._v(" "),r("router-link",{staticClass:"tab",attrs:{to:{name:"home",params:{flair:"trading"},query:{q:t.$store.state.query}},selected:"trading"===t.$route.params.flair}},[t._v("\n                Trading\n            ")])],1)]),t._v(" "),r("main",{staticClass:"surface"},[t.loading?r("p",[t._v("...")]):t._e(),t._v(" "),t._l(t.posts,(function(e){return r("div",{staticClass:"post"},[r("div",{staticClass:"overline"},[r("h2",[t._v(t._s(e.region))]),t._v(" "),r("hr")]),t._v(" "),r("h1",[t._v(t._s(e.title))]),t._v(" "),r("div",{staticClass:"gallery"},t._l(e.pictures.slice(0,4),(function(t){return r("div",{staticClass:"img",style:{"background-image":"url("+t}})})),0),t._v(" "),e.pictures.length>4?r("p",{staticClass:"gallery-hint"},[t._v("\n                + "+t._s(e.pictures.length-4)+" more image"+t._s(5!==e.pictures.length?"s":"")+"\n            ")]):t._e()])}))],2)])}),[],!1,null,null,null).exports;n.Z.use(o.Z);const x=new o.Z({mode:"history",base:"/Mechmarket/",fallback:!1,routes:[{path:"/",redirect:"/selling"},{path:"/:flair",name:"home",component:_,props:!0}]});new n.Z({el:"#app",store:i,router:x,render:function(t){return t("router-view")}})}},e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.m=t,r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={179:0},e=[[6981,964],[2356,964]],n=()=>{};function a(){for(var n,a=0;a<e.length;a++){for(var s=e[a],i=!0,o=1;o<s.length;o++){var u=s[o];0!==t[u]&&(i=!1)}i&&(e.splice(a--,1),n=r(r.s=s[0]))}return 0===e.length&&(r.x(),r.x=()=>{}),n}r.x=()=>{r.x=()=>{},i=i.slice();for(var t=0;t<i.length;t++)s(i[t]);return(n=a)()};var s=a=>{for(var s,i,[u,c,l,p]=a,f=0,h=[];f<u.length;f++)i=u[f],r.o(t,i)&&t[i]&&h.push(t[i][0]),t[i]=0;for(s in c)r.o(c,s)&&(r.m[s]=c[s]);for(l&&l(r),o(a);h.length;)h.shift()();return p&&e.push.apply(e,p),n()},i=self.webpackChunkmechmarket=self.webpackChunkmechmarket||[],o=i.push.bind(i);i.push=s})(),r.x()})();
//# sourceMappingURL=main.bundle.js.map