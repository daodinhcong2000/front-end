(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[8],{559:function(e,t,n){var c=n(560);t.sendResponse=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Th\xe0nh c\xf4ng",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"OK",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:200;return function(s,r,i){r.status(c).json({success:!0,data:e,message:t,eMessage:n})}},t.sendError=function(e,t,n,s){n.status(e.status||500).json({success:!1,message:e.message,eMessage:e.eMessage||"",devInfo:c(c({},e),{},{stack:e.stack})})},t.CustomError=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400,c=new Error(e);return c.eMessage=t,c.status=n,c},t.ORDER_STATUSES={WAITING_FOR_SELLER_CONFIRM:"Waiting for seller confirm",IN_TRANSIT:"In transit",DELIVERED:"Delivered",CANCELLED_BY_CUSTOMER:"Cancelled by customer",CANCELLED_BY_SELLER:"Cancelled by seller"},t.ORDER_STATUSES_MAPPING={"Waiting for seller confirm":"Ch\u1edd ng\u01b0\u1eddi b\xe1n x\xe1c nh\u1eadn","In transit":"\u0110ang v\u1eadn chuy\u1ec3n",Delivered:"\u0110\xe3 giao h\xe0ng","Cancelled by customer":"H\u1ee7y b\u1edfi ng\u01b0\u1eddi mua","Cancelled by seller":"H\u1ee7y b\u1edfi ng\u01b0\u1eddi b\xe1n"}},560:function(e,t,n){var c=n(561);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},561:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},581:function(e,t,n){"use strict";n.r(t);var c=n(132),s=n(27),r=n(0),i=n(233),a=n(551),l=n(559),o=n(7),d=n(149),j=n(1);t.default=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],b=t[1],u=Object(r.useState)([]),h=Object(s.a)(u,2),O=h[0],p=h[1],m=Object(r.useState)("0"),f=Object(s.a)(m,2),x=f[0],g=f[1],v=Object(r.useState)([]),y=Object(s.a)(v,2),S=y[0],w=y[1],C=Object(d.b)(),_=C.error,E=(C.warn,C.info,C.success);Object(r.useEffect)((function(){Object(i.h)({}).then((function(e){b(e.data.data)}))}),[]),Object(r.useEffect)((function(){"0"!=x&&Object(i.d)(x,{}).then((function(e){e.data.data.map((function(e,t){e.idOrder=e._id})),p(e.data.data)}))}),[x]);var N=function(e){switch(e){case"Delivered":return"success";case"Waiting for seller confirm":return"warning";case"In transit":return"info";case"Cancelled by customer":case"Cancelled by seller":return"danger";default:return"primary"}};return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsxs)(a.g,{"aria-label":"Default select example",onChange:function(e){return g(e.target.value)},children:[Object(j.jsx)("option",{value:"0",children:"Ch\u1ecdn shop"}),n.map((function(e){return Object(j.jsx)("option",{value:e._id,children:e.name},e._id)}))]})}),Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)("h1",{children:"Loading posts..."}),children:Object(j.jsx)(a.i,{activePage:3,cleaner:!0,clickableRows:!0,columns:[{label:"T\xean ng\u01b0\u1eddi nh\u1eadn h\xe0ng",key:"name",_style:{width:"40%"},_props:{className:"fw-semibold"}},{label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",key:"phone"},{label:"\u0110\u1ecba ch\u1ec9",key:"receivingAddress",filter:!0,sorter:!1,_style:{width:"20%"}},{label:"Tr\u1ea1ng th\xe1i",key:"status",_style:{width:"20%"}},{key:"show_details",label:"",_style:{width:"1%"},filter:!1,sorter:!1,_props:{color:"primary",className:"fw-semibold"}}],columnFilter:!0,columnSorter:!0,items:O,itemsPerPageSelect:!0,itemsPerPage:5,pagination:!0,noItemsLabel:"Ch\u01b0a c\xf3 \u0111\u01a1n h\xe0ng n\xe0o.",scopedColumns:{name:function(e){return Object(j.jsxs)("td",{children:[e.customer.lastName," ",e.customer.firstName]})},phone:function(e){return Object(j.jsx)("td",{children:e.customer.phoneNumber})},status:function(e){return Object(j.jsx)("td",{children:Object(j.jsx)(a.a,{color:N(e.status),children:l.ORDER_STATUSES_MAPPING[e.status]})})},show_details:function(e){return Object(j.jsx)("td",{className:"py-2",children:Object(j.jsx)(a.b,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){!function(e){var t=S.indexOf(e),n=S.slice();-1!==t?n.splice(t,1):n=[].concat(Object(c.a)(S),[e]),w(n)}(e._id)},children:S.includes(e._id)?"Hide":"Show"})})},details:function(e){return Object(j.jsx)(a.e,{visible:S.includes(e._id),children:Object(j.jsxs)(a.c,{children:[Object(j.jsx)(o.x,{htmlFor:"exampleFormControlInput1",children:"Danh s\xe1ch s\u1ea3n ph\u1ea9m c\u1ee7a \u0111\u01a1n h\xe0ng"}),Object(j.jsxs)(o.O,{hover:!0,children:[Object(j.jsx)(o.R,{children:Object(j.jsxs)(o.T,{children:[Object(j.jsx)(o.S,{scope:"col",children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(j.jsx)(o.S,{scope:"col",children:"Size"}),Object(j.jsx)(o.S,{scope:"col",children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(j.jsx)(o.S,{scope:"col",children:"Gi\xe1 s\u1ea3n ph\u1ea9m"})]})}),e.items.map((function(e,t){return Object(j.jsx)(o.P,{children:Object(j.jsxs)(o.T,{children:[Object(j.jsx)(o.Q,{children:e.product.name}),Object(j.jsx)(o.Q,{children:e.size}),Object(j.jsx)(o.Q,{children:e.quantity}),Object(j.jsxs)(o.Q,{children:[e.price," VN\u0110"]})]})})}))]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)(o.t,{htmlFor:"exampleFormControlInput1",children:"N\u01a1i l\u1ea5y h\xe0ng"}),Object(j.jsx)(o.s,{type:"text",disabled:!0,value:e.sellingAddress})]}),Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsxs)(o.I,{children:[Object(j.jsxs)(o.j,{xs:!0,children:[Object(j.jsx)(o.t,{htmlFor:"exampleFormControlInput1",children:"Gi\xe1 v\u1eadn chuy\u1ec3n"}),Object(j.jsxs)(o.C,{children:[Object(j.jsx)(o.s,{type:"text",disabled:!0,value:e.shippingCost}),Object(j.jsx)(o.D,{children:"VN\u0110"})]})]}),Object(j.jsxs)(o.j,{xs:!0,children:[Object(j.jsx)(o.t,{htmlFor:"exampleFormControlInput1",children:"T\u1ed5ng gi\xe1 tr\u1ecb \u0111\u01a1n h\xe0ng"}),Object(j.jsxs)(o.C,{children:[Object(j.jsx)(o.s,{type:"text",disabled:!0,value:e.shippingCost+e.totalPrice}),Object(j.jsx)(o.D,{children:"VN\u0110"})]})]})]})}),"Waiting for seller confirm"==e.status?Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsxs)(o.I,{children:[Object(j.jsx)(o.j,{xs:!0,children:Object(j.jsxs)(a.b,{color:"success",onClick:function(){return t=e.idOrder,void Object(i.b)(x,t).then((function(e){E(e.data.message),window.location.reload(!1)})).catch((function(e){_(e.response.data.message)}));var t},children:[" ","X\xe1c nh\u1eadn"," "]})}),Object(j.jsx)(o.j,{children:Object(j.jsxs)(a.b,{color:"danger",onClick:function(){return t=e.idOrder,void Object(i.a)(x,t).then((function(e){E(e.data.message),window.location.reload(!1)})).catch((function(e){_(e.response.data.message)}));var t},children:[" ","H\u1ee7y"," "]})})]})}):""]})})}},sorterValue:{column:"name",state:"asc"},tableFilter:!0,tableProps:{striped:!0,hover:!0}})})]})}}}]);
//# sourceMappingURL=8.8ff25725.chunk.js.map