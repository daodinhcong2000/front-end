(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[16],{584:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var c=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='272 434.744 272 209.176 240 209.176 240 434.744 188.118 382.862 165.49 405.489 256 496 346.51 405.489 323.882 382.862 272 434.744' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M400,161.176c0-79.4-64.6-144-144-144s-144,64.6-144,144a96,96,0,0,0,0,192h80v-32H112a64,64,0,0,1,0-128h32v-32a112,112,0,0,1,224,0v32h32a64,64,0,0,1,0,128H320v32h80a96,96,0,0,0,0-192Z' class='ci-primary'/>"]},604:function(e,t,a){"use strict";a.r(t);var c=a(24),n=a(0),i=a(8),s=a(266),r=a(162),o=a(584),l=a(43),d=a(265),j=a(324),b=a(96),h=a(49),u=a(163),m=a.n(u),O=a(37),p=a(1),x=Object(p.jsx)(b.a,{style:{fontSize:24},spin:!0}),f=Object(n.lazy)((function(){return a.e(1).then(a.bind(null,592))}));t.default=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],b=t[1],u=Object(n.useState)([]),g=Object(c.a)(u,2),y=g[0],v=g[1],N=Object(n.useState)([]),S=Object(c.a)(N,2),C=S[0],k=S[1],T=Object(n.useState)([]),A=Object(c.a)(T,2),R=A[0],w=A[1],z=Object(n.useState)(""),B=Object(c.a)(z,2),H=B[0],W=B[1],D=Object(n.useState)(!0),M=Object(c.a)(D,2),Z=M[0],_=M[1];return Object(n.useEffect)((function(){Object(d.g)(H,{from:m()().subtract(7,"day"),to:m()()}).then((function(e){v(e.data.data.totalAmount),k(e.data.data.orderCount),b(e.data.data.statistics),_(!1)}))}),[H]),Object(n.useEffect)((function(){Object(d.h)({}).then((function(e){w(e.data.data)})),""!=H&&1!=H||Object(l.h)().then((function(e){Object(d.f)(e.data.data._id,{from:m()().subtract(7,"day"),to:m()()}).then((function(e){v(e.data.data.totalAmount),k(e.data.data.orderCount),b(e.data.data.statistics),_(!1)}))}))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"mb-3",id:"changeProduct",children:Object(p.jsxs)(i.u,{"aria-label":"Default select example",onChange:function(e){_(!0),W(e.target.value)},children:[Object(p.jsx)("option",{value:"1",children:"Ch\u1ecdn shop \u0111\u1ec3 xem"}),R.map((function(e){return Object(p.jsx)("option",{value:e._id,children:e.name},e._id)}))]})}),Object(p.jsxs)(j.a,{indicator:x,spinning:Z,children:[Object(p.jsxs)(i.g,{className:"mb-4",children:[Object(p.jsxs)(i.h,{children:[Object(p.jsxs)(i.I,{children:[Object(p.jsxs)(i.j,{sm:5,children:[Object(p.jsx)("h4",{id:"traffic",className:"card-title mb-0",children:"Doanh thu b\xe1n h\xe0ng"}),Object(p.jsxs)("div",{className:"small text-medium-emphasis",children:["T\u1ed5ng doanh thu: ",Object(h.a)(y)," VN\u0110"]})]}),Object(p.jsxs)(i.j,{sm:7,className:"d-none d-md-block",children:[Object(p.jsx)(i.e,{color:"primary",className:"float-end",children:Object(p.jsx)(O.a,{icon:o.a})}),Object(p.jsx)(i.f,{className:"float-end me-3",children:["Ng\xe0y","Th\xe1ng","N\u0103m"].map((function(e){return Object(p.jsx)(i.e,{color:"outline-secondary",className:"mx-0",active:"Ng\xe0y"===e,children:e},e)}))})]})]}),Object(p.jsx)(s.b,{style:{height:"300px",marginTop:"40px"},data:{labels:a?a.map((function(e){return e.date})):[],datasets:[{label:"Doanh thu",backgroundColor:Object(r.hexToRgba)(Object(r.getStyle)("--cui-info"),10),borderColor:Object(r.getStyle)("--cui-info"),pointHoverBackgroundColor:Object(r.getStyle)("--cui-info"),borderWidth:2,data:a?a.map((function(e){return e.totalAmount})):[],fill:!0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{drawOnChartArea:!1}},y:{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}})]}),Object(p.jsx)(i.i,{})]}),Object(p.jsxs)(i.g,{className:"mb-4",children:[Object(p.jsxs)(i.h,{children:[Object(p.jsxs)(i.I,{children:[Object(p.jsxs)(i.j,{sm:5,children:[Object(p.jsx)("h4",{id:"traffic",className:"card-title mb-0",children:"S\u1ed1 l\u01b0\u1ee3ng \u0111\u01a1n h\xe0ng"}),Object(p.jsxs)("div",{className:"small text-medium-emphasis",children:["T\u1ed5ng \u0111\u01a1n h\xe0ng: ",C]})]}),Object(p.jsxs)(i.j,{sm:7,className:"d-none d-md-block",children:[Object(p.jsx)(i.e,{color:"primary",className:"float-end",children:Object(p.jsx)(O.a,{icon:o.a})}),Object(p.jsx)(i.f,{className:"float-end me-3",children:["Ng\xe0y","Th\xe1ng","N\u0103m"].map((function(e){return Object(p.jsx)(i.e,{color:"outline-secondary",className:"mx-0",active:"Ng\xe0y"===e,children:e},e)}))})]})]}),Object(p.jsx)(s.b,{style:{height:"300px",marginTop:"40px"},data:{labels:a?a.map((function(e){return e.date})):[],datasets:[{label:"S\u1ed1 \u0111\u01a1n h\xe0ng",backgroundColor:Object(r.hexToRgba)(Object(r.getStyle)("--cui-info"),10),borderColor:Object(r.getStyle)("--cui-info"),pointHoverBackgroundColor:Object(r.getStyle)("--cui-info"),borderWidth:2,data:a?a.map((function(e){return e.orderCount})):[],fill:!0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{drawOnChartArea:!1}},y:{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}})]}),Object(p.jsx)(i.i,{})]}),Object(p.jsx)(f,{})]})]})}}}]);
//# sourceMappingURL=16.4987ca2d.chunk.js.map