(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[9],{581:function(t,e,n){"use strict";n.d(e,"h",(function(){return u})),n.d(e,"j",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"g",(function(){return j})),n.d(e,"k",(function(){return h})),n.d(e,"i",(function(){return b})),n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return O})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return p})),n.d(e,"d",(function(){return x}));var c=n(57),a=n(91),r=Object(c.b)(!0),i="/user-service/api",s="/admin-service/api",o="/statistics-service/api",u=function(t){var e=Object(a.a)(t);return r({url:"".concat(i,"/users?").concat(e),method:"GET"})},l=function(t,e){return r({url:"".concat(i,"/users/").concat(t),method:"PUT",data:e})},d=function(t){return r({url:"".concat(i,"/users/").concat(t),method:"DELETE"})},j=function(t){if(null!=t)Object(a.a)(t);return r({url:"".concat(s,"/shops?").concat(""),method:"GET"})},h=function(t,e){return r({url:"".concat(s,"/shops/").concat(t,"/approval"),method:"PUT",data:e})},b=function(t,e){return r({url:"".concat(s,"/shops/").concat(t,"/active-status"),method:"PUT",data:e})},m=function(t){return r({url:"".concat(s,"/shops/").concat(t),method:"DELETE"})},O=function(t){var e=Object(a.a)(t);return r({url:"".concat(o,"/order-statistics?").concat(e),method:"GET"})},f=function(t,e){var n=Object(a.a)(e);return r({url:"".concat(o,"/sellers/").concat(t,"/order-statistics?").concat(n),method:"GET"})},p=function(t,e){var n=Object(a.a)(e);return r({url:"".concat(o,"/shops/").concat(t,"/order-statistics?").concat(n),method:"GET"})},x=function(t,e){var n=Object(a.a)(e);return r({url:"".concat(o,"/customers/").concat(t,"/order-statistics?").concat(n),method:"GET"})}},582:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var c=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='272 434.744 272 209.176 240 209.176 240 434.744 188.118 382.862 165.49 405.489 256 496 346.51 405.489 323.882 382.862 272 434.744' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M400,161.176c0-79.4-64.6-144-144-144s-144,64.6-144,144a96,96,0,0,0,0,192h80v-32H112a64,64,0,0,1,0-128h32v-32a112,112,0,0,1,224,0v32h32a64,64,0,0,1,0,128H320v32h80a96,96,0,0,0,0-192Z' class='ci-primary'/>"]},583:function(t,e,n){"use strict";n(0);var c=n(8),a=n(266),r=n(162),i=n(582),s=n(567),o=n(39),u=n(47),l=n(1),d=s.a.Title;e.a=function(t){var e=t.statistics,n=t.totalAmount,s=t.orderCount,j=t.title;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(c.g,{className:"mb-4",children:[Object(l.jsxs)(c.h,{children:[Object(l.jsxs)(c.I,{children:[Object(l.jsxs)(c.j,{sm:5,children:[Object(l.jsxs)(d,{level:3,children:[" ",j?j[0]:"Doanh thu b\xe1n h\xe0ng"]}),Object(l.jsxs)("div",{className:"small text-medium-emphasis",children:[j?j[1]:"T\u1ed5ng doanh thu:"," ",Object(u.a)(n)," VN\u0110"]})]}),Object(l.jsxs)(c.j,{sm:7,className:"d-none d-md-block",children:[Object(l.jsx)(c.e,{color:"primary",className:"float-end",children:Object(l.jsx)(o.a,{icon:i.a})}),Object(l.jsx)(c.f,{className:"float-end me-3",children:["Ng\xe0y","Th\xe1ng","N\u0103m"].map((function(t){return Object(l.jsx)(c.e,{color:"outline-secondary",className:"mx-0",active:"Ng\xe0y"===t,children:t},t)}))})]})]}),Object(l.jsx)(a.b,{style:{height:"300px",marginTop:"40px"},data:{labels:e?e.map((function(t){return t.date})):"",datasets:[{label:j?j[2]:"Doanh thu",backgroundColor:Object(r.hexToRgba)(Object(r.getStyle)("--cui-info"),10),borderColor:Object(r.getStyle)("--cui-info"),pointHoverBackgroundColor:Object(r.getStyle)("--cui-info"),borderWidth:2,data:e?e.map((function(t){return t.totalAmount})):"",fill:!0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{drawOnChartArea:!1}},y:{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}})]}),Object(l.jsx)(c.i,{})]}),Object(l.jsxs)(c.g,{className:"mb-4",children:[Object(l.jsxs)(c.h,{children:[Object(l.jsxs)(c.I,{children:[Object(l.jsxs)(c.j,{sm:5,children:[Object(l.jsx)(d,{level:3,children:"S\u1ed1 l\u01b0\u1ee3ng \u0111\u01a1n h\xe0ng"}),Object(l.jsxs)("div",{className:"small text-medium-emphasis",children:["T\u1ed5ng \u0111\u01a1n h\xe0ng: ",s]})]}),Object(l.jsxs)(c.j,{sm:7,className:"d-none d-md-block",children:[Object(l.jsx)(c.e,{color:"primary",className:"float-end",children:Object(l.jsx)(o.a,{icon:i.a})}),Object(l.jsx)(c.f,{className:"float-end me-3",children:["Ng\xe0y","Th\xe1ng","N\u0103m"].map((function(t){return Object(l.jsx)(c.e,{color:"outline-secondary",className:"mx-0",active:"Ng\xe0y"===t,children:t},t)}))})]})]}),Object(l.jsx)(a.b,{style:{height:"300px",marginTop:"40px"},data:{labels:e.map((function(t){return t.date})),datasets:[{label:"S\u1ed1 \u0111\u01a1n h\xe0ng",backgroundColor:Object(r.hexToRgba)(Object(r.getStyle)("--cui-info"),10),borderColor:Object(r.getStyle)("--cui-info"),pointHoverBackgroundColor:Object(r.getStyle)("--cui-info"),borderWidth:2,data:e.map((function(t){return t.orderCount})),fill:!0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{drawOnChartArea:!1}},y:{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}})]}),Object(l.jsx)(c.i,{})]})]})}},608:function(t,e,n){"use strict";n.r(e);var c=n(14),a=n(0),r=n(581),i=n(8),s=n(324),o=n(96),u=n(583),l=n(163),d=n.n(l),j=n(1),h=Object(j.jsx)(o.a,{style:{fontSize:24},spin:!0});e.default=function(){var t=Object(a.useState)([]),e=Object(c.a)(t,2),n=e[0],o=e[1],l=Object(a.useState)(""),b=Object(c.a)(l,2),m=b[0],O=b[1],f=Object(a.useState)([]),p=Object(c.a)(f,2),x=p[0],g=p[1],v=Object(a.useState)([]),y=Object(c.a)(v,2),T=y[0],N=y[1],C=Object(a.useState)([]),S=Object(c.a)(C,2),E=S[0],k=S[1],A=Object(a.useState)(!0),R=Object(c.a)(A,2),w=R[0],G=R[1];return Object(a.useEffect)((function(){Object(r.g)().then((function(t){o(t.data.data),G(!1)}))}),[]),Object(a.useEffect)((function(){""!=m&&1!=m&&Object(r.f)(m,{from:d()().subtract(30,"day"),to:d()()}).then((function(t){N(t.data.data.totalAmount),k(t.data.data.orderCount),g(t.data.data.statistics),G(!1)}))}),[m,w]),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"mb-3",id:"changeProduct",children:Object(j.jsxs)(i.u,{"aria-label":"Default select example",onChange:function(t){G(!0),O(t.target.value)},children:[Object(j.jsx)("option",{value:"1",children:"Ch\u1ecdn shop \u0111\u1ec3 xem"}),n.map((function(t){return Object(j.jsx)("option",{value:t._id,children:t.name},t._id)}))]})}),Object(j.jsx)(s.a,{spinning:w,indicator:h,children:null!=x?Object(j.jsx)(u.a,{statistics:x,totalAmount:T,orderCount:E}):"C\u1eeda h\xe0ng hi\u1ec7n t\u1ea1i ch\u01b0a c\xf3 doanh thu"})]})}}}]);
//# sourceMappingURL=9.1586dd7b.chunk.js.map