(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[12],{548:function(t,e,n){"use strict";n.d(e,"h",(function(){return u})),n.d(e,"j",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"g",(function(){return j})),n.d(e,"k",(function(){return b})),n.d(e,"i",(function(){return h})),n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return f})),n.d(e,"e",(function(){return O})),n.d(e,"f",(function(){return p})),n.d(e,"d",(function(){return x}));var c=n(49),a=n(90),r=Object(c.b)(!0),s="/user-service/api",i="/admin-service/api",o="/statistics-service/api",u=function(t){var e=Object(a.a)(t);return r({url:"".concat(s,"/users?").concat(e),method:"GET"})},l=function(t,e){return r({url:"".concat(s,"/users/").concat(t),method:"PUT",data:e})},d=function(t){return r({url:"".concat(s,"/users/").concat(t),method:"DELETE"})},j=function(t){return null!=t&&(Object(a.a)(t),function(t){throw new Error('"'+t+'" is read-only')}("queryString")),r({url:"".concat(i,"/shops?").concat(""),method:"GET"})},b=function(t,e){return r({url:"".concat(i,"/shops/").concat(t,"/approval"),method:"PUT",data:e})},h=function(t,e){return r({url:"".concat(i,"/shops/").concat(t,"/active-status"),method:"PUT",data:e})},m=function(t){return r({url:"".concat(i,"/shops/").concat(t),method:"DELETE"})},f=function(t){var e=Object(a.a)(t);return r({url:"".concat(o,"/order-statistics?").concat(e),method:"GET"})},O=function(t,e){var n=Object(a.a)(e);return r({url:"".concat(o,"/sellers/").concat(t,"/order-statistics?").concat(n),method:"GET"})},p=function(t,e){var n=Object(a.a)(e);return r({url:"".concat(o,"/shops/").concat(t,"/order-statistics?").concat(n),method:"GET"})},x=function(t,e){var n=Object(a.a)(e);return r({url:"".concat(o,"/customers/").concat(t,"/order-statistics?").concat(n),method:"GET"})}},553:function(t,e,n){"use strict";var c=n(0),a=n(7),r=n(549),s=n(550),i=n(31),o=n(575),u=n(1),l=Object(c.lazy)((function(){return n.e(2).then(n.bind(null,554))}));e.a=function(t){var e=t.statistics,n=t.totalAmount,c=t.orderCount,d=t.title;return console.log("statistics",e),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(a.g,{className:"mb-4",children:[Object(u.jsxs)(a.h,{children:[Object(u.jsxs)(a.I,{children:[Object(u.jsxs)(a.j,{sm:5,children:[Object(u.jsx)("h4",{id:"traffic",className:"card-title mb-0",children:d?d[0]:"Doanh thu b\xe1n h\xe0ng"}),Object(u.jsxs)("div",{className:"small text-medium-emphasis",children:[d?d[1]:"T\u1ed5ng doanh thu:"," ",n,"VN\u0110"]})]}),Object(u.jsxs)(a.j,{sm:7,className:"d-none d-md-block",children:[Object(u.jsx)(a.e,{color:"primary",className:"float-end",children:Object(u.jsx)(i.a,{icon:o.a})}),Object(u.jsx)(a.f,{className:"float-end me-3",children:["Ng\xe0y","Th\xe1ng","N\u0103m"].map((function(t){return Object(u.jsx)(a.e,{color:"outline-secondary",className:"mx-0",active:"Ng\xe0y"===t,children:t},t)}))})]})]}),Object(u.jsx)(r.b,{style:{height:"300px",marginTop:"40px"},data:{labels:e?e.map((function(t){return t.date})):"",datasets:[{label:d?d[2]:"Doanh thu",backgroundColor:Object(s.hexToRgba)(Object(s.getStyle)("--cui-info"),10),borderColor:Object(s.getStyle)("--cui-info"),pointHoverBackgroundColor:Object(s.getStyle)("--cui-info"),borderWidth:2,data:e?e.map((function(t){return t.totalAmount})):"",fill:!0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{drawOnChartArea:!1}},y:{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}})]}),Object(u.jsx)(a.i,{})]}),Object(u.jsxs)(a.g,{className:"mb-4",children:[Object(u.jsxs)(a.h,{children:[Object(u.jsxs)(a.I,{children:[Object(u.jsxs)(a.j,{sm:5,children:[Object(u.jsx)("h4",{id:"traffic",className:"card-title mb-0",children:"S\u1ed1 l\u01b0\u1ee3ng \u0111\u01a1n h\xe0ng"}),Object(u.jsxs)("div",{className:"small text-medium-emphasis",children:["T\u1ed5ng \u0111\u01a1n h\xe0ng: ",c]})]}),Object(u.jsxs)(a.j,{sm:7,className:"d-none d-md-block",children:[Object(u.jsx)(a.e,{color:"primary",className:"float-end",children:Object(u.jsx)(i.a,{icon:o.a})}),Object(u.jsx)(a.f,{className:"float-end me-3",children:["Ng\xe0y","Th\xe1ng","N\u0103m"].map((function(t){return Object(u.jsx)(a.e,{color:"outline-secondary",className:"mx-0",active:"Ng\xe0y"===t,children:t},t)}))})]})]}),Object(u.jsx)(r.b,{style:{height:"300px",marginTop:"40px"},data:{labels:e.map((function(t){return t.date})),datasets:[{label:"S\u1ed1 \u0111\u01a1n h\xe0ng",backgroundColor:Object(s.hexToRgba)(Object(s.getStyle)("--cui-info"),10),borderColor:Object(s.getStyle)("--cui-info"),pointHoverBackgroundColor:Object(s.getStyle)("--cui-info"),borderWidth:2,data:e.map((function(t){return t.orderCount})),fill:!0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{drawOnChartArea:!1}},y:{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}})]}),Object(u.jsx)(a.i,{})]}),Object(u.jsx)(l,{})]})}},587:function(t,e,n){"use strict";n.r(e);var c=n(27),a=n(0),r=n(548),s=n(553),i=n(7),o=n(552),u=n.n(o),l=n(1);e.default=function(){var t=Object(a.useState)([]),e=Object(c.a)(t,2),n=e[0],o=e[1],d=Object(a.useState)([]),j=Object(c.a)(d,2),b=j[0],h=j[1],m=Object(a.useState)([]),f=Object(c.a)(m,2),O=f[0],p=f[1],x=Object(a.useState)([]),g=Object(c.a)(x,2),v=g[0],y=g[1],N=Object(a.useState)(""),T=Object(c.a)(N,2),S=T[0],E=T[1];return Object(a.useEffect)((function(){Object(r.h)({roles:"seller"}).then((function(t){y(t.data.data.users)}))}),[]),Object(a.useEffect)((function(){""!=S&&1!=S&&Object(r.e)(S,{from:u()().subtract(7,"day"),to:u()()}).then((function(t){h(t.data.data.totalAmount),p(t.data.data.orderCount),o(t.data.data.statistics)}))}),[S]),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"mb-3",id:"changeProduct",children:Object(l.jsxs)(i.u,{"aria-label":"Default select example",onChange:function(t){return E(t.target.value)},children:[Object(l.jsx)("option",{value:"1",children:"Ch\u1ecdn ng\u01b0\u1eddi b\xe1n \u0111\u1ec3 xem"}),v.map((function(t){return Object(l.jsx)("option",{value:t._id,children:t.username},t._id)}))]})}),null!=n?Object(l.jsx)(s.a,{statistics:n,totalAmount:b,orderCount:O}):"Ng\u01b0\u1eddi b\xe1n hi\u1ec7n t\u1ea1i ch\u01b0a c\xf3 doanh thu"]})}}}]);
//# sourceMappingURL=12.4c8b9a17.chunk.js.map