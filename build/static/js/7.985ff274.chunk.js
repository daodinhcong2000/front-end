(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[7],{581:function(t,e,c){"use strict";c.d(e,"h",(function(){return u})),c.d(e,"j",(function(){return l})),c.d(e,"b",(function(){return d})),c.d(e,"g",(function(){return h})),c.d(e,"k",(function(){return j})),c.d(e,"i",(function(){return b})),c.d(e,"a",(function(){return m})),c.d(e,"c",(function(){return O})),c.d(e,"e",(function(){return f})),c.d(e,"f",(function(){return p})),c.d(e,"d",(function(){return x}));var n=c(50),a=c(91),r=Object(n.b)(!0),i="/user-service/api",s="/admin-service/api",o="/statistics-service/api",u=function(t){var e=Object(a.a)(t);return r({url:"".concat(i,"/users?").concat(e),method:"GET"})},l=function(t,e){return r({url:"".concat(i,"/users/").concat(t),method:"PUT",data:e})},d=function(t){return r({url:"".concat(i,"/users/").concat(t),method:"DELETE"})},h=function(t){if(null!=t)Object(a.a)(t);return r({url:"".concat(s,"/shops?").concat(""),method:"GET"})},j=function(t,e){return r({url:"".concat(s,"/shops/").concat(t,"/approval"),method:"PUT",data:e})},b=function(t,e){return r({url:"".concat(s,"/shops/").concat(t,"/active-status"),method:"PUT",data:e})},m=function(t){return r({url:"".concat(s,"/shops/").concat(t),method:"DELETE"})},O=function(t){var e=Object(a.a)(t);return r({url:"".concat(o,"/order-statistics?").concat(e),method:"GET"})},f=function(t,e){var c=Object(a.a)(e);return r({url:"".concat(o,"/sellers/").concat(t,"/order-statistics?").concat(c),method:"GET"})},p=function(t,e){var c=Object(a.a)(e);return r({url:"".concat(o,"/shops/").concat(t,"/order-statistics?").concat(c),method:"GET"})},x=function(t,e){var c=Object(a.a)(e);return r({url:"".concat(o,"/customers/").concat(t,"/order-statistics?").concat(c),method:"GET"})}},582:function(t,e,c){"use strict";c.d(e,"a",(function(){return n}));var n=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='272 434.744 272 209.176 240 209.176 240 434.744 188.118 382.862 165.49 405.489 256 496 346.51 405.489 323.882 382.862 272 434.744' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M400,161.176c0-79.4-64.6-144-144-144s-144,64.6-144,144a96,96,0,0,0,0,192h80v-32H112a64,64,0,0,1,0-128h32v-32a112,112,0,0,1,224,0v32h32a64,64,0,0,1,0,128H320v32h80a96,96,0,0,0,0-192Z' class='ci-primary'/>"]},583:function(t,e,c){"use strict";c(0);var n=c(8),a=c(266),r=c(162),i=c(582),s=c(567),o=c(39),u=c(47),l=c(1),d=s.a.Title;e.a=function(t){var e=t.statistics,c=t.totalAmount,s=t.orderCount,h=t.title;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(n.g,{className:"mb-4",children:[Object(l.jsxs)(n.h,{children:[Object(l.jsxs)(n.I,{children:[Object(l.jsxs)(n.j,{sm:5,children:[Object(l.jsxs)(d,{level:3,children:[" ",h?h[0]:"Doanh thu b\xe1n h\xe0ng"]}),Object(l.jsxs)("div",{className:"small text-medium-emphasis",children:[h?h[1]:"T\u1ed5ng doanh thu:"," ",Object(u.a)(c)," VN\u0110"]})]}),Object(l.jsxs)(n.j,{sm:7,className:"d-none d-md-block",children:[Object(l.jsx)(n.e,{color:"primary",className:"float-end",children:Object(l.jsx)(o.a,{icon:i.a})}),Object(l.jsx)(n.f,{className:"float-end me-3",children:["Ng\xe0y","Th\xe1ng","N\u0103m"].map((function(t){return Object(l.jsx)(n.e,{color:"outline-secondary",className:"mx-0",active:"Ng\xe0y"===t,children:t},t)}))})]})]}),Object(l.jsx)(a.b,{style:{height:"300px",marginTop:"40px"},data:{labels:e?e.map((function(t){return t.date})):"",datasets:[{label:h?h[2]:"Doanh thu",backgroundColor:Object(r.hexToRgba)(Object(r.getStyle)("--cui-info"),10),borderColor:Object(r.getStyle)("--cui-info"),pointHoverBackgroundColor:Object(r.getStyle)("--cui-info"),borderWidth:2,data:e?e.map((function(t){return t.totalAmount})):"",fill:!0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{drawOnChartArea:!1}},y:{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}})]}),Object(l.jsx)(n.i,{})]}),Object(l.jsxs)(n.g,{className:"mb-4",children:[Object(l.jsxs)(n.h,{children:[Object(l.jsxs)(n.I,{children:[Object(l.jsxs)(n.j,{sm:5,children:[Object(l.jsx)(d,{level:3,children:"S\u1ed1 l\u01b0\u1ee3ng \u0111\u01a1n h\xe0ng"}),Object(l.jsxs)("div",{className:"small text-medium-emphasis",children:["T\u1ed5ng \u0111\u01a1n h\xe0ng: ",s]})]}),Object(l.jsxs)(n.j,{sm:7,className:"d-none d-md-block",children:[Object(l.jsx)(n.e,{color:"primary",className:"float-end",children:Object(l.jsx)(o.a,{icon:i.a})}),Object(l.jsx)(n.f,{className:"float-end me-3",children:["Ng\xe0y","Th\xe1ng","N\u0103m"].map((function(t){return Object(l.jsx)(n.e,{color:"outline-secondary",className:"mx-0",active:"Ng\xe0y"===t,children:t},t)}))})]})]}),Object(l.jsx)(a.b,{style:{height:"300px",marginTop:"40px"},data:{labels:e.map((function(t){return t.date})),datasets:[{label:"S\u1ed1 \u0111\u01a1n h\xe0ng",backgroundColor:Object(r.hexToRgba)(Object(r.getStyle)("--cui-info"),10),borderColor:Object(r.getStyle)("--cui-info"),pointHoverBackgroundColor:Object(r.getStyle)("--cui-info"),borderWidth:2,data:e.map((function(t){return t.orderCount})),fill:!0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{drawOnChartArea:!1}},y:{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}})]}),Object(l.jsx)(n.i,{})]})]})}},606:function(t,e,c){"use strict";c.r(e);var n=c(14),a=c(0),r=c(581),i=c(583),s=c(8),o=c(324),u=c(96),l=c(163),d=c.n(l),h=c(1),j=Object(h.jsx)(u.a,{style:{fontSize:24},spin:!0});e.default=function(){var t=Object(a.useState)([]),e=Object(n.a)(t,2),c=e[0],u=e[1],l=Object(a.useState)([]),b=Object(n.a)(l,2),m=b[0],O=b[1],f=Object(a.useState)([]),p=Object(n.a)(f,2),x=p[0],g=p[1],v=Object(a.useState)([]),y=Object(n.a)(v,2),T=y[0],N=y[1],S=Object(a.useState)(""),C=Object(n.a)(S,2),k=C[0],E=C[1],A=Object(a.useState)(!0),R=Object(n.a)(A,2),w=R[0],G=R[1];return Object(a.useEffect)((function(){Object(r.h)({roles:"customer"}).then((function(t){N(t.data.data.users),G(!1)}))}),[]),Object(a.useEffect)((function(){""!=k&&1!=k&&Object(r.d)(k,{from:d()().subtract(30,"day"),to:d()()}).then((function(t){O(t.data.data.totalAmount),g(t.data.data.orderCount),u(t.data.data.statistics),G(!1)}))}),[k,w]),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"mb-3",id:"changeProduct",children:Object(h.jsxs)(s.u,{"aria-label":"Default select example",onChange:function(t){G(!0),E(t.target.value)},children:[Object(h.jsx)("option",{value:"1",children:"Ch\u1ecdn kh\xe1ch h\xe0ng \u0111\u1ec3 xem"}),T.map((function(t){return Object(h.jsx)("option",{value:t._id,children:t.username},t._id)}))]})}),Object(h.jsx)(o.a,{spinning:w,indicator:j,children:null!=c?Object(h.jsx)(i.a,{statistics:c,totalAmount:m,orderCount:x,title:["S\u1ed1 l\u01b0\u1ee3ng chi ti\xeau","T\u1ed5ng chi ti\xeau","Chi ti\xeau"]}):"Kh\xe1ch h\xe0ng ch\u01b0a chi ti\xeau cho s\u1ea3n ph\u1ea9m n\xe0o"})]})}}}]);
//# sourceMappingURL=7.985ff274.chunk.js.map