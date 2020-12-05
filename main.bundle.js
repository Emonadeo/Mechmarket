(()=>{"use strict";var t={7990:(t,e,r)=>{var n=r(144),a=r(7968),i=r.n(a);n.Z.use(i());const s=new(i().Store)({strict:!0,state:{theme:window.localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")||"light"},mutations:{updateTheme:function(t,e){t.theme=e,window.localStorage.setItem("theme",e)}},actions:{toggleTheme:function(t){this.commit("updateTheme","dark"!==t.state.theme?"dark":"light")}}});var o=r(8345);function c(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function l(t,e,r,n,a,i,s){try{var o=t[i](s),c=o.value}catch(t){return void r(t)}o.done?e(c):Promise.resolve(c).then(n,a)}function p(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function s(t){l(i,n,a,s,o,"next",t)}function o(t){l(i,n,a,s,o,"throw",t)}s(void 0)}))}}function h(){return(h=p(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",[]);case 2:if(r=c(new Set(c(e.matchAll(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]*\.[a-zA-Z0-9]*\b((.?[-a-zA-Z0-9@%_+~#\/])*)/g)).map((function(t){return t[0]}))))){t.next=5;break}return t.abrupt("return",{});case 5:return t.next=7,Promise.all(r.map(function(){var t=p(regeneratorRuntime.mark((function t(e){var r,n,a,i,s,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!/imgur\.com\/a\//.test(e)){t.next=14;break}return r=e.split("/").pop(),t.next=4,fetch("https://api.imgur.com/3/album/".concat(r,"/images"),{headers:{Authorization:"Client-ID 18506a441ae08ca"}});case 4:if((n=t.sent).ok){t.next=8;break}return console.warn("Invalid Imgur album! Cannot resolve ".concat(e)),t.abrupt("return",[]);case 8:return t.next=10,n.json();case 10:return a=t.sent,t.abrupt("return",a.data.map((function(t){return t.link})));case 14:if(!/imgur\.com\/gallery\//.test(e)){t.next=28;break}return i=e.split("/").pop(),t.next=18,fetch("https://api.imgur.com/3/gallery/".concat(i),{headers:{Authorization:"Client-ID 18506a441ae08ca"}});case 18:if((s=t.sent).ok){t.next=22;break}return console.warn("Invalid Imgur gallery! Cannot resolve ".concat(e)),t.abrupt("return",[]);case 22:return t.next=24,s.json();case 24:return o=t.sent,t.abrupt("return",o.data.images.map((function(t){return t.link})));case 28:/imgur\.com\/[A-Za-z0-9]*$/.test(e)&&(e="https://i.imgur.com/".concat(e.split("/").pop(),".jpg"));case 29:return t.abrupt("return",e);case 30:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 7:return r=(r=t.sent).flat().filter((function(t){return/\.(png|jpg|jpeg|gif|webp)\/?$/.test(t)})),t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}const f={getPictures:function(t){return h.apply(this,arguments)}};function m(t,e,r,n,a,i,s){try{var o=t[i](s),c=o.value}catch(t){return void r(t)}o.done?e(c):Promise.resolve(c).then(n,a)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var d=function(){function t(e,r,n,a,i,s,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.category=e,this.author=r,this.region=n,this.have=a,this.want=i,this.href=s,this.pictures=o}var e,r,n,a,i;return e=t,r=[{key:"title",get:function(){switch(this.category.toLowerCase()){case"selling":return this.have.join(", ");case"buying":return this.want.join(", ");case"trading":return"".concat(this.have.join(", ")," <-> ").concat(this.want.join(", "))}}}],n=[{key:"fromRedditPost",value:(a=regeneratorRuntime.mark((function e(r){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(t,e){return t.split("[H]")[1].split("[W]")[e?0:1].split(",").map((function(t){return t.trim()}))},n=function(t){return/\[\w+(-\w+)?]/.exec(t)[0].slice(1,-1)},e.t0=t,e.t1=r.link_flair_text,e.t2=r.author,e.t3=n(r.title),e.t4=a(r.title,!0),e.t5=a(r.title,!1),e.t6=r.url,e.next=11,f.getPictures(r.selftext);case 11:return e.t7=e.sent,e.abrupt("return",new e.t0(e.t1,e.t2,e.t3,e.t4,e.t5,e.t6,e.t7));case 13:case"end":return e.stop()}}),e)})),i=function(){var t=this,e=arguments;return new Promise((function(r,n){var i=a.apply(t,e);function s(t){m(i,r,n,s,o,"next",t)}function o(t){m(i,r,n,s,o,"throw",t)}s(void 0)}))},function(t){return i.apply(this,arguments)})}],r&&v(e.prototype,r),n&&v(e,n),t}();function g(t,e,r,n,a,i,s){try{var o=t[i](s),c=o.value}catch(t){return void r(t)}o.done?e(c):Promise.resolve(c).then(n,a)}const w=function(t,e,r){return(n=regeneratorRuntime.mark((function n(){var a,i,s,o,c,u;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=[],t&&a.push("flair:".concat(t)),e&&a.push("title:[".concat(e.toUpperCase())),r&&a.push(r),i=a.join(" "),(s=new URL("https://www.reddit.com/r/mechmarket/search/.json")).searchParams.append("restrict_sr","on"),s.searchParams.append("sort","new"),s.searchParams.append("q",i),n.next=11,fetch(s.toString());case 11:return o=n.sent,n.next=14,o.json();case 14:return c=n.sent,u=c.data.children.map((function(t){return t.data})),n.next=18,Promise.all(u.map(d.fromRedditPost));case 18:return n.abrupt("return",n.sent);case 19:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,a){var i=n.apply(t,e);function s(t){g(i,r,a,s,o,"next",t)}function o(t){g(i,r,a,s,o,"throw",t)}s(void 0)}))})();var n};const y={props:["type"]};var b=r(1900);const _=(0,b.Z)(y,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn",attrs:{type:t.type},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)}),[],!1,null,"afc85dd0",null).exports;const x={props:["name","type","placeholder","value","ariaLabel"]};const k=(0,b.Z)(x,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{staticClass:"textfield",attrs:{name:t.name,type:t.type,placeholder:t.placeholder,"aria-label":t.ariaLabel},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})}),[],!1,null,"7743490d",null).exports,C={components:{Btn:_,Textfield:k},data:function(){return{editing:!1}},computed:{region:function(){var t;return null===(t=this.$route.query.region)||void 0===t?void 0:t.toUpperCase()},regions:function(){var t;return null===(t=this.$route.query.region)||void 0===t?void 0:t.toUpperCase().split("-").filter((function(t){return t&&""!==t}))},global:function(){return!this.regions||0===this.regions.length}},methods:{edit:function(){this.editing=!0,this.$nextTick((function(){return document.getElementById("textfield").focus()}))},unedit:function(){var t=this;setTimeout((function(){return t.editing=!1}),1)}}};const P=(0,b.Z)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"region-picker"},[r("btn",{directives:[{name:"show",rawName:"v-show",value:!t.editing,expression:"!editing"}],class:{square:t.global},attrs:{type:"button"},on:{click:t.edit}},[t._l(t.regions,(function(e,n){return[r("span",[t._v(t._s(e))]),t._v(" "),n+1<t.regions.length?r("span",[t._v(" ¬ ")]):t._e()]})),t._v(" "),t.global?r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px"}},[r("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),r("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"}})]):t._e()],2),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.editing,expression:"editing"}],staticClass:"form"},[r("textfield",{attrs:{id:"textfield",name:"region",placeholder:"US-NJ",value:t.region},nativeOn:{blur:function(e){return t.unedit(e)}}}),t._v(" "),r("btn",[t._v("->")])],1)],1)}),[],!1,null,"749576ac",null).exports;const $={components:{Btn:_,Textfield:k},data:function(){return{editing:!1}}};const j=(0,b.Z)($,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search"},[r("textfield",{attrs:{name:"q",type:"text",placeholder:"Search","aria-label":"Search",value:t.$route.query.q},nativeOn:{focus:function(e){t.editing=!0},blur:function(e){t.editing=!1}}}),t._v(" "),r("btn",{directives:[{name:"show",rawName:"v-show",value:t.editing,expression:"editing"}]},[t._v("->")])],1)}),[],!1,null,"51a482aa",null).exports;const S={props:{to:String,tabs:Array[String]}};const T=(0,b.Z)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"tabs"},t._l(t.tabs,(function(e){return r("router-link",{key:e,staticClass:"tab",attrs:{to:{name:t.to,params:{category:e.toLowerCase()},query:t.$route.query},selected:t.$route.params.category===e.toLowerCase()}},[t._v("\n        "+t._s(e)+"\n    ")])})),1)}),[],!1,null,"52b882c8",null).exports;const Z={components:{Btn:_}};const q=(0,b.Z)(Z,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("btn",{staticClass:"theme-picker",on:{click:function(e){return t.$store.dispatch("toggleTheme")}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",viewBox:"0 0 6.3499998 6.35"}},[r("g",{attrs:{transform:"translate(0,-290.64998)"}},[r("path",{attrs:{d:"m 4.3466476,291.17915 a 2.8163548,2.8163548 0 0 1 0.3476437,1.34877 2.8163548,2.8163548 0 0 1 -2.8163547,2.81635 2.8163548,2.8163548 0 0 1 -1.34216911,-0.34104 2.8163548,2.8163548 0 0 0 2.46871101,1.46758 2.8163548,2.8163548 0 0 0 2.8163548,-2.81635 2.8163548,2.8163548 0 0 0 -1.4741857,-2.47531 z"}})])])])}),[],!1,null,"309d6ffe",null).exports,A={components:{ThemePicker:q}};const R=(0,b.Z)(A,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"titlebar"},[r("div",{staticClass:"slot"},[t._t("default")],2),t._v(" "),r("theme-picker")],1)}),[],!1,null,"5100a00d",null).exports;function E(t,e,r,n,a,i,s){try{var o=t[i](s),c=o.value}catch(t){return void r(t)}o.done?e(c):Promise.resolve(c).then(n,a)}var I,z;const B={props:{category:String},components:{Btn:_,RegionPicker:P,Search:j,Tabs:T,TitleBar:R,ThemePicker:q},data:function(){return{loading:!0,posts:[]}},computed:{query:function(){return this.$route.query.q},region:function(){return this.$route.query.region}},watch:{category:function(t){this.loadPosts.bind(this)(t,this.region,this.query)}},created:function(){this.loadPosts.bind(this)(this.category,this.region,this.query)},methods:{loadPosts:(I=regeneratorRuntime.mark((function t(e,r,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,w(e,r,n);case 3:this.posts=t.sent,this.loading=!1;case 5:case"end":return t.stop()}}),t,this)})),z=function(){var t=this,e=arguments;return new Promise((function(r,n){var a=I.apply(t,e);function i(t){E(a,r,n,i,s,"next",t)}function s(t){E(a,r,n,i,s,"throw",t)}i(void 0)}))},function(t,e,r){return z.apply(this,arguments)})}};const O=(0,b.Z)(B,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gallery surface"},[r("title-bar",[r("form",[r("search"),t._v(" "),r("region-picker")],1)]),t._v(" "),r("tabs",{attrs:{to:"gallery",tabs:["Selling","Buying","Trading"]}}),t._v(" "),r("main",{staticClass:"surface"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading"},[r("div",{staticClass:"surface"},[t._v("> loading...")])]),t._v(" "),t._l(t.posts,(function(e){return r("a",{staticClass:"post",attrs:{href:e.href}},[r("div",{staticClass:"overline"},[r("h2",[t._l(e.region.split("-"),(function(n,a){return[r("span",[t._v(t._s(n))]),t._v(" "),a+1<e.region.split("-").length?r("span",{staticClass:"sub"},[t._v(" ¬ ")]):t._e()]}))],2),t._v(" "),r("hr")]),t._v(" "),r("h1",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),r("div",{staticClass:"gallery"},t._l(e.pictures.slice(0,4),(function(t){return r("div",{staticClass:"img",style:{"background-image":"url("+t}})})),0),t._v(" "),e.pictures.length>4?r("p",{staticClass:"gallery-hint"},[t._v("\n                + "+t._s(e.pictures.length-4)+" more image"+t._s(5!==e.pictures.length?"s":"")+"\n            ")]):t._e()])}))],2)],1)}),[],!1,null,"2509c0da",null).exports;n.Z.use(o.Z);const L=new o.Z({mode:"history",base:"/Mechmarket/",fallback:!1,routes:[{path:"/",redirect:"/selling"},{path:"/:category",name:"gallery",component:O,props:!0},{path:"/:category/:post",name:"post"}]});const M={computed:{theme:function(){return this.$store.state.theme}}};const U=(0,b.Z)(M,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"surface",class:t.theme,attrs:{id:"app"}},[r("router-view")],1)}),[],!1,null,null,null).exports;new n.Z({el:"#app",store:s,router:L,render:function(t){return t(U)}})}},e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.m=t,r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={179:0},e=[[6981,964],[7990,964]],n=()=>{};function a(){for(var n,a=0;a<e.length;a++){for(var i=e[a],s=!0,o=1;o<i.length;o++){var c=i[o];0!==t[c]&&(s=!1)}s&&(e.splice(a--,1),n=r(r.s=i[0]))}return 0===e.length&&(r.x(),r.x=()=>{}),n}r.x=()=>{r.x=()=>{},s=s.slice();for(var t=0;t<s.length;t++)i(s[t]);return(n=a)()};var i=a=>{for(var i,s,[c,u,l,p]=a,h=0,f=[];h<c.length;h++)s=c[h],r.o(t,s)&&t[s]&&f.push(t[s][0]),t[s]=0;for(i in u)r.o(u,i)&&(r.m[i]=u[i]);for(l&&l(r),o(a);f.length;)f.shift()();return p&&e.push.apply(e,p),n()},s=self.webpackChunkmechmarket=self.webpackChunkmechmarket||[],o=s.push.bind(s);s.push=i})(),r.x()})();
//# sourceMappingURL=main.bundle.js.map