(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41],{1114:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var r=t(5893),i=t(6156),o=t(7329),u=t(1163),a=t(7294),l=t(4586),c=t(1277),s=t(7792);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(){var e=(0,u.useRouter)(),n=(0,a.useContext)(s.A8),t=n.probeData,d=n.handleSetProbes,v=(null===t||void 0===t?void 0:t.map((function(e){var n,t;return{id:e.id,url:null===e||void 0===e||null===(n=e.requests[0])||void 0===n?void 0:n.url,body:null===e||void 0===e||null===(t=e.requests[0])||void 0===t?void 0:t.body}})))[0],m=Object.keys(null===v||void 0===v?void 0:v.body).map((function(e){return{id:(0,l.Z)(),name:e,value:(null===v||void 0===v?void 0:v.body)[e]}})),p=(0,a.useState)((null===v||void 0===v?void 0:v.url)||""),h=p[0],b=p[1],x=(0,a.useState)(m||[{id:(0,l.Z)(),name:"",value:""}]),j=x[0],y=x[1],O=function(e,n,t){y((function(r){return r.map((function(r){return r.id===e?f(f({},r),{},(0,i.Z)({},n,t)):r}))}))};return(0,r.jsxs)(c.Ar,{children:[(0,r.jsx)(c.$y,{subtitle:"Add web form data"}),(0,r.jsx)("div",{className:"lg:py-20 xl:py-32 xl:px-80",children:(0,r.jsxs)("form",{className:"text-sm sm:text-lg",onSubmit:function(n){n.preventDefault();var t={};Object.values(j).filter((function(e){return e.name})).forEach((function(e){return t[e.name]=e.value})),d([{id:(0,l.Z)(),name:"",requests:[{url:h,body:t,timeout:1e4,method:"POST"}],incidentThreshold:5,recoveryThreshold:5,alerts:[]}]),e.push("/notifications")},children:[(0,r.jsxs)("fieldset",{children:[(0,r.jsxs)("div",{className:"space-y-8 mb-10",children:[(0,r.jsx)("p",{children:"What is the address (URL) of the web form?"}),(0,r.jsx)(c.oi,{id:"url",onChange:function(e){return b(e.target.value)},value:h,type:"url",placeholder:"https://example.com"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"mb-6",children:"What are the data to send?"}),j.map((function(e){var n=e.id,t=e.name,i=e.value;return(0,r.jsxs)("div",{className:"flex space-x-7 mb-6",children:[(0,r.jsx)("div",{className:"flex-1",children:(0,r.jsx)(c.oi,{id:"data".concat(n,"-name"),label:"Name",onChange:function(e){return O(n,"name",e.target.value)},value:t})}),(0,r.jsx)("div",{className:"flex-1",children:(0,r.jsx)(c.oi,{id:"data".concat(n,"-value"),label:"Value",onChange:function(e){return O(n,"value",e.target.value)},value:i})}),(0,r.jsx)("div",{className:"self-end py-3",children:(0,r.jsx)("button",{type:"button",className:"cursor-pointer underline focus:outline-none",onClick:function(){return function(e){y((function(n){return n.filter((function(n){return n.id!==e}))}))}(n)},children:"Remove"})})]},n)})),(0,r.jsx)("button",{className:"cursor-pointer underline focus:outline-none",type:"button",onClick:function(){y((function(e){return[].concat((0,o.Z)(e),[{id:(0,l.Z)(),name:"",value:""}])}))},children:"Add more data"})]})]}),(0,r.jsxs)("div",{className:"mt-12 py-3 space-x-7",children:[(0,r.jsx)(c.zx,{type:"button",outline:!0,onClick:function(){return e.back()},children:"Back"}),(0,r.jsx)(c.zx,{type:"submit",children:"Next"})]})]})})]})}},4496:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/web-form",function(){return t(1114)}])}},function(e){e.O(0,[774,523,799,277,888,179],(function(){return n=4496,e(e.s=n);var n}));var n=e.O();_N_E=n}]);