(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[7],{582:function(t,e,n){"use strict";n.d(e,"h",(function(){return u})),n.d(e,"j",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"g",(function(){return j})),n.d(e,"k",(function(){return h})),n.d(e,"i",(function(){return b})),n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return O})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return p})),n.d(e,"d",(function(){return x}));var c=n(57),a=n(91),r=Object(c.b)(!0),i="/user-service/api",s="/admin-service/api",o="/statistics-service/api",u=function(t){var e=Object(a.a)(t);return r({url:"".concat(i,"/users?").concat(e),method:"GET"})},l=function(t,e){return r({url:"".concat(i,"/users/").concat(t),method:"PUT",data:e})},d=function(t){return r({url:"".concat(i,"/users/").concat(t),method:"DELETE"})},j=function(t){if(null!=t)Object(a.a)(t);return r({url:"".concat(s,"/shops?").concat(""),method:"GET"})},h=function(t,e){return r({url:"".concat(s,"/shops/").concat(t,"/approval"),method:"PUT",data:e})},b=function(t,e){return r({url:"".concat(s,"/shops/").concat(t,"/active-status"),method:"PUT",data:e})},m=function(t){return r({url:"".concat(s,"/shops/").concat(t),method:"DELETE"})},O=function(t){var e=Object(a.a)(t);return r({url:"".concat(o,"/order-statistics?").concat(e),method:"GET"})},f=function(t,e){var n=Object(a.a)(e);return r({url:"".concat(o,"/sellers/").concat(t,"/order-statistics?").concat(n),method:"GET"})},p=function(t,e){var n=Object(a.a)(e);return r({url:"".concat(o,"/shops/").concat(t,"/order-statistics?").concat(n),method:"GET"})},x=function(t,e){var n=Object(a.a)(e);return r({url:"".concat(o,"/customers/").concat(t,"/order-statistics?").concat(n),method:"GET"})}},583:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var c=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='272 434.744 272 209.176 240 209.176 240 434.744 188.118 382.862 165.49 405.489 256 496 346.51 405.489 323.882 382.862 272 434.744' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M400,161.176c0-79.4-64.6-144-144-144s-144,64.6-144,144a96,96,0,0,0,0,192h80v-32H112a64,64,0,0,1,0-128h32v-32a112,112,0,0,1,224,0v32h32a64,64,0,0,1,0,128H320v32h80a96,96,0,0,0,0-192Z' class='ci-primary'/>"]},584:function(t,e,n){"use strict";var c=n(0),a=n(8),r=n(266),i=n(162),s=n(583),o=n(568),u=n(39),l=n(46),d=n(1),j=Object(c.lazy)((function(){return n.e(0).then(n.bind(null,585))})),h=o.a.Title;e.a=function(t){var e=t.statistics,n=t.totalAmount,c=t.orderCount,o=t.title;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(a.g,{className:"mb-4",children:[Object(d.jsxs)(a.h,{children:[Object(d.jsxs)(a.I,{children:[Object(d.jsxs)(a.j,{sm:5,children:[Object(d.jsxs)(h,{level:3,children:[" ",o?o[0]:"Doanh thu b\xe1n h\xe0ng"]}),Object(d.jsxs)("div",{className:"small text-medium-emphasis",children:[o?o[1]:"T\u1ed5ng doanh thu:"," ",Object(l.a)(n)," VN\u0110"]})]}),Object(d.jsxs)(a.j,{sm:7,className:"d-none d-md-block",children:[Object(d.jsx)(a.e,{color:"primary",className:"float-end",children:Object(d.jsx)(u.a,{icon:s.a})}),Object(d.jsx)(a.f,{className:"float-end me-3",children:["Ng\xe0y","Th\xe1ng","N\u0103m"].map((function(t){return Object(d.jsx)(a.e,{color:"outline-secondary",className:"mx-0",active:"Ng\xe0y"===t,children:t},t)}))})]})]}),Object(d.jsx)(r.b,{style:{height:"300px",marginTop:"40px"},data:{labels:e?e.map((function(t){return t.date})):"",datasets:[{label:o?o[2]:"Doanh thu",backgroundColor:Object(i.hexToRgba)(Object(i.getStyle)("--cui-info"),10),borderColor:Object(i.getStyle)("--cui-info"),pointHoverBackgroundColor:Object(i.getStyle)("--cui-info"),borderWidth:2,data:e?e.map((function(t){return t.totalAmount})):"",fill:!0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{drawOnChartArea:!1}},y:{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}})]}),Object(d.jsx)(a.i,{})]}),Object(d.jsxs)(a.g,{className:"mb-4",children:[Object(d.jsxs)(a.h,{children:[Object(d.jsxs)(a.I,{children:[Object(d.jsxs)(a.j,{sm:5,children:[Object(d.jsx)(h,{level:3,children:"S\u1ed1 l\u01b0\u1ee3ng \u0111\u01a1n h\xe0ng"}),Object(d.jsxs)("div",{className:"small text-medium-emphasis",children:["T\u1ed5ng \u0111\u01a1n h\xe0ng: ",c]})]}),Object(d.jsxs)(a.j,{sm:7,className:"d-none d-md-block",children:[Object(d.jsx)(a.e,{color:"primary",className:"float-end",children:Object(d.jsx)(u.a,{icon:s.a})}),Object(d.jsx)(a.f,{className:"float-end me-3",children:["Ng\xe0y","Th\xe1ng","N\u0103m"].map((function(t){return Object(d.jsx)(a.e,{color:"outline-secondary",className:"mx-0",active:"Ng\xe0y"===t,children:t},t)}))})]})]}),Object(d.jsx)(r.b,{style:{height:"300px",marginTop:"40px"},data:{labels:e.map((function(t){return t.date})),datasets:[{label:"S\u1ed1 \u0111\u01a1n h\xe0ng",backgroundColor:Object(i.hexToRgba)(Object(i.getStyle)("--cui-info"),10),borderColor:Object(i.getStyle)("--cui-info"),pointHoverBackgroundColor:Object(i.getStyle)("--cui-info"),borderWidth:2,data:e.map((function(t){return t.orderCount})),fill:!0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{drawOnChartArea:!1}},y:{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}})]}),Object(d.jsx)(a.i,{})]}),Object(d.jsx)(j,{})]})}},607:function(t,e,n){"use strict";n.r(e);var c=n(14),a=n(0),r=n(582),i=n(584),s=n(8),o=n(324),u=n(96),l=n(163),d=n.n(l),j=n(1),h=Object(j.jsx)(u.a,{style:{fontSize:24},spin:!0});e.default=function(){var t=Object(a.useState)([]),e=Object(c.a)(t,2),n=e[0],u=e[1],l=Object(a.useState)([]),b=Object(c.a)(l,2),m=b[0],O=b[1],f=Object(a.useState)([]),p=Object(c.a)(f,2),x=p[0],g=p[1],v=Object(a.useState)([]),y=Object(c.a)(v,2),T=y[0],N=y[1],S=Object(a.useState)(""),C=Object(c.a)(S,2),k=C[0],E=C[1],A=Object(a.useState)(!0),R=Object(c.a)(A,2),w=R[0],G=R[1];return Object(a.useEffect)((function(){Object(r.h)({roles:"customer"}).then((function(t){N(t.data.data.users),G(!1)}))}),[]),Object(a.useEffect)((function(){""!=k&&1!=k&&Object(r.d)(k,{from:d()().subtract(7,"day"),to:d()()}).then((function(t){O(t.data.data.totalAmount),g(t.data.data.orderCount),u(t.data.data.statistics),G(!1)}))}),[k,w]),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"mb-3",id:"changeProduct",children:Object(j.jsxs)(s.u,{"aria-label":"Default select example",onChange:function(t){G(!0),E(t.target.value)},children:[Object(j.jsx)("option",{value:"1",children:"Ch\u1ecdn kh\xe1ch h\xe0ng \u0111\u1ec3 xem"}),T.map((function(t){return Object(j.jsx)("option",{value:t._id,children:t.username},t._id)}))]})}),Object(j.jsx)(o.a,{spinning:w,indicator:h,children:null!=n?Object(j.jsx)(i.a,{statistics:n,totalAmount:m,orderCount:x,title:["S\u1ed1 l\u01b0\u1ee3ng chi ti\xeau","T\u1ed5ng chi ti\xeau","Chi ti\xeau"]}):"Kh\xe1ch h\xe0ng ch\u01b0a chi ti\xeau cho s\u1ea3n ph\u1ea9m n\xe0o"})]})}}}]);
//# sourceMappingURL=7.b03eddf1.chunk.js.map