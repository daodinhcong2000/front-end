(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[6],{476:function(e,t,s){"use strict";var r=s(473),a=s(39),i=s(0),n=s(479),d=s(200),o=s(2);t.a=function(e){var t=e.columns,s=e.usersData,l=Object(i.useState)([]),c=Object(a.a)(l,2),u=c[0],m=c[1],b=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}};return Object(o.jsx)("div",{children:Object(o.jsx)(n.e,{activePage:3,cleaner:!0,clickableRows:!0,columns:t,columnFilter:!0,columnSorter:!0,items:s,itemsPerPageSelect:!0,itemsPerPage:5,pagination:!0,scopedColumns:{status:function(e){return Object(o.jsx)("td",{children:Object(o.jsx)(n.a,{color:b(e.status),children:e.status})})},show_details:function(e){return Object(o.jsx)("td",{className:"py-2",children:Object(o.jsx)(n.b,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){!function(e){var t=u.indexOf(e),s=u.slice();-1!==t?s.splice(t,1):s=[].concat(Object(r.a)(u),[e]),m(s)}(e._id)},children:u.includes(e._id)?"Hide":"Show"})})},details:function(e){return Object(o.jsx)(n.d,{visible:u.includes(e._id),children:Object(o.jsxs)(n.c,{children:[Object(o.jsx)(d.a,{url:"https://res.cloudinary.com/accomerce/image/upload/v1638079096/spnftcg7vvjc0zvwxit6.png"}),Object(o.jsx)(n.b,{size:"sm",color:"info",children:"S\u1eeda"}),Object(o.jsx)(n.b,{size:"sm",color:"danger",className:"ml-1",children:"H\u1ee7y"})]})})}},selectable:!0,sorterValue:{column:"name",state:"asc"},tableFilter:!0,tableHeadProps:{color:"none"},tableProps:{striped:!0,hover:!0}})})}},505:function(e,t,s){"use strict";s.r(t);s(0);var r=s(476),a=s(2);t.default=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(r.a,{columns:[{label:"T\xean s\u1ea3n Ph\u1ea9m",key:"name",_style:{width:"40%"},_props:{className:"fw-semibold"}},{label:"Ng\xe0y b\xe1n",key:"registered"},{label:"T\xean shop",key:"role",filter:!1,sorter:!1,_style:{width:"20%"}},{label:"T\xecnh tr\u1ea1ng",key:"status",_style:{width:"20%"}},{key:"show_details",label:"",_style:{width:"1%"},filter:!1,sorter:!1,_props:{color:"primary",className:"fw-semibold"}}],usersData:[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active",_props:{color:"none",align:"middle"}},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned",_cellProps:{all:{className:"fw-semibold"},name:{color:"none"}}},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned",_props:{color:"none",align:"middle"}},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefect",registered:"2001/05/25",role:"Alien",status:"Don't panic!"}]})})}}}]);
//# sourceMappingURL=6.c233f764.chunk.js.map