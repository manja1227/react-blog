(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(23),i=a.n(n),r=a(11),o=a(98),l=a(1),j=function(){return Object(l.jsxs)(o.a,{collapseOnSelect:!0,sticky:"top",expand:"lg",bg:"primary",variant:"dark",children:[Object(l.jsx)(r.b,{className:"navbar-brand nav-item nav-link",to:"/",children:"React-Blog"}),Object(l.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(l.jsxs)(o.a.Collapse,{id:"responsive-navbar-nav",children:[Object(l.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(l.jsx)(r.c,{exact:!0,className:"nav-item nav-link",to:"/",activeClassName:"active",children:"Home"}),Object(l.jsx)(r.c,{className:"nav-item nav-link",to:"/about",activeClassName:"active",children:"About"})]}),Object(l.jsxs)("div",{className:"navbar-nav",children:[Object(l.jsx)(r.c,{className:"nav-item nav-link",to:"/new_post",activeClassName:"active",children:"New Post"}),Object(l.jsx)(r.c,{className:"nav-item nav-link",to:"/account",activeClassName:"active",children:"Account"}),Object(l.jsx)(r.c,{className:"nav-item nav-link",to:"/logout",activeClassName:"active",children:"Logout"}),Object(l.jsx)(r.c,{className:"nav-item nav-link",to:"/login",activeClassName:"active",children:"Login"}),Object(l.jsx)(r.c,{className:"nav-item nav-link",to:"/register",activeClassName:"active",children:"Register"})]})]})]})},d=a(10),b=a(19),h=a(50),x=a(99),O=function(e){var t=e.post;return Object(l.jsx)(h.a,{className:"mt-3",style:{width:"350px"},children:Object(l.jsxs)(x.a,{style:{width:"350px"},children:[Object(l.jsxs)(x.a.Header,{style:{display:"flex"},children:[Object(l.jsx)("img",{style:{marginRight:"10px"},alt:"profile_pic",className:"rounded-circle article-img mr-3",src:"https://picsum.photos/seed/".concat(t.id,"/80/80")}),Object(l.jsxs)("div",{children:[Object(l.jsx)(r.b,{to:"/post/".concat(t.id),children:Object(l.jsx)(x.a.Title,{children:t.title.substr(0,20)})}),Object(l.jsx)(x.a.Subtitle,{className:"mb-2 text-muted",children:t.title.substr(0,15)})]})]}),Object(l.jsxs)(x.a.Body,{children:[Object(l.jsx)(x.a.Text,{className:"dotlines",children:t.body}),Object(l.jsx)(r.b,{to:"/post/".concat(t.id),children:Object(l.jsx)(x.a.Text,{children:"Read More..."})})]})]})})},m=a(51),u=a.n(m).a.create({baseURL:"https://jsonplaceholder.typicode.com/"}),p=a(91),v=a(92),f=a(93),g=a(94),y=a(26),C=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)({first:null,prev:null,next:null,last:null}),i=Object(b.a)(n,2),r=i[0],o=i[1],j=new URLSearchParams(Object(d.g)().search),h=j.get("_page")?j.get("_page"):1;return Object(c.useEffect)((function(){u.get("/posts?_page=".concat(h,"&_limit=6")).then((function(e){var t=function(e){var t=e.split(", ").map((function(e){return e.split("; ")})).map((function(e){return[e[1].replace(/"/g,"").replace("rel=",""),parseInt(e[0].slice(1,-1).split("=")[1])]}));return Object.fromEntries(t)}(e.headers.link);o(t),200===e.status&&s(e.data)})).catch((function(e){e.response&&(console.log(e),console.log(e.status),console.log(e.data))})),window.scrollTo(0,0)}),[h]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(p.a,{children:[Object(l.jsx)(v.a,{children:a.map((function(e){return Object(l.jsx)(O,{post:e},e.id)}))}),Object(l.jsx)(f.a,{className:"justify-content-md-center mt-3",children:Object(l.jsxs)(g.a,{children:[Object(l.jsx)(g.a.First,{href:"#/?_page=".concat(r.first)}),Object(l.jsx)(g.a.Prev,{href:"#/?_page=".concat(r.prev),disabled:"undefined"==="".concat(r.prev)}),Object(l.jsx)(y.f,{href:"#/?_page=".concat(h),active:!0,children:h}),Object(l.jsx)(g.a.Next,{href:"#/?_page=".concat(r.next),disabled:"undefined"==="".concat(r.next)}),Object(l.jsx)(g.a.Last,{href:"#/?_page=".concat(r.last)})]})})]})})},N=a(52),w=function(){var e=Object(d.h)().id,t=Object(c.useState)({title:"",body:""}),a=Object(b.a)(t,2),s=a[0],n=a[1];Object(c.useEffect)((function(){u.get("/posts/".concat(e)).then((function(t){console.log(t.data,e),200===t.status&&n(t.data)}))}),[e]);var i=Object(d.f)();return Object(l.jsx)(p.a,{className:"mt-3",children:Object(l.jsx)(f.a,{className:"justify-content-md-center mt-3",children:Object(l.jsxs)(x.a,{style:{width:"50%"},children:[Object(l.jsxs)(x.a.Header,{style:{display:"flex"},children:[Object(l.jsx)("img",{style:{marginRight:"10px"},alt:"profile_pic",className:"rounded-circle article-img mr-3",src:"https://picsum.photos/seed/".concat(s.id,"/80/80")}),Object(l.jsxs)("div",{children:[Object(l.jsx)(x.a.Title,{children:s.title.substr(0,20)}),Object(l.jsx)(x.a.Subtitle,{className:"mb-2 text-muted",children:s.title.substr(0,15)})]})]}),Object(l.jsx)(x.a.Body,{children:Object(l.jsx)(x.a.Text,{className:"dotlines",children:s.body})}),Object(l.jsxs)(x.a.Footer,{children:[Object(l.jsx)(N.a,{variant:"primary",size:"sm",onClick:function(){i.push("/update/post/".concat(s.id))},children:"Update"})," ",Object(l.jsx)(N.a,{variant:"danger",size:"sm",onClick:function(){u.delete("/posts/".concat(s.id)).then((function(e){alert("".concat(e.status," - ").concat(e.statusText)),i.push("/")})).catch((function(e){console.log(e),alert(e)}))},children:"Delete"})]})]})})})},T=a(100),k=a(95),G=a(97),S=a(96),I=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(p.a,{children:[Object(l.jsxs)(T.a,{children:[Object(l.jsx)(T.a.Image,{width:800,height:450,alt:"random.imagecdn.app",src:"https://random.imagecdn.app/800/450"}),Object(l.jsx)(T.a.Caption,{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]}),Object(l.jsx)("br",{}),Object(l.jsx)(k.a,{animation:"border",variant:"primary"}),Object(l.jsx)(k.a,{animation:"border",variant:"secondary"}),Object(l.jsx)(k.a,{animation:"border",variant:"success"}),Object(l.jsx)(k.a,{animation:"border",variant:"danger"}),Object(l.jsx)(k.a,{animation:"border",variant:"warning"}),Object(l.jsx)(k.a,{animation:"border",variant:"info"}),Object(l.jsx)(k.a,{animation:"border",variant:"light"}),Object(l.jsx)(k.a,{animation:"border",variant:"dark"}),Object(l.jsx)(k.a,{animation:"grow",variant:"primary"}),Object(l.jsx)(k.a,{animation:"grow",variant:"secondary"}),Object(l.jsx)(k.a,{animation:"grow",variant:"success"}),Object(l.jsx)(k.a,{animation:"grow",variant:"danger"}),Object(l.jsx)(k.a,{animation:"grow",variant:"warning"}),Object(l.jsx)(k.a,{animation:"grow",variant:"info"}),Object(l.jsx)(k.a,{animation:"grow",variant:"light"}),Object(l.jsx)(k.a,{animation:"grow",variant:"dark"}),Object(l.jsxs)(G.a,{as:S.a,children:[Object(l.jsx)(N.a,{variant:"success",children:"Split Button"}),Object(l.jsx)(G.a.Toggle,{split:!0,variant:"success",id:"dropdown-split-basic"}),Object(l.jsxs)(G.a.Menu,{children:[Object(l.jsx)(G.a.Item,{href:"#/action-1",children:"Action"}),Object(l.jsx)(G.a.Item,{href:"#/action-2",children:"Another action"}),Object(l.jsx)(G.a.Item,{href:"#/action-3",children:"Something else"})]})]})]})})},L=function(){return Object(l.jsx)("div",{children:"Account"})},P=a(9),B=function(){return Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(l.jsxs)(x.a,{className:"mt-4",style:{width:"450px"},children:[Object(l.jsx)(x.a.Header,{children:Object(l.jsx)(x.a.Title,{children:"Login to React-Blog"})}),Object(l.jsx)(x.a.Body,{children:Object(l.jsxs)(P.a,{children:[Object(l.jsxs)(P.a.Group,{controlId:"formBasicEmail",children:[Object(l.jsx)(P.a.Label,{children:"Email address"}),Object(l.jsx)(P.a.Control,{type:"email",placeholder:"Enter email"}),Object(l.jsx)(P.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(l.jsxs)(P.a.Group,{controlId:"formBasicPassword",children:[Object(l.jsx)(P.a.Label,{children:"Password"}),Object(l.jsx)(P.a.Control,{type:"password",placeholder:"Password"})]}),Object(l.jsx)(P.a.Group,{controlId:"formBasicCheckbox",children:Object(l.jsx)(P.a.Check,{type:"checkbox",label:"Check me out"})}),Object(l.jsx)(N.a,{variant:"primary",type:"submit",children:"Submit"})]})})]})})},A=function(){return Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(l.jsxs)(x.a,{className:"mt-2",style:{width:"450px"},children:[Object(l.jsx)(x.a.Header,{children:Object(l.jsx)(x.a.Title,{children:"Register to React-Blog"})}),Object(l.jsx)(x.a.Body,{children:Object(l.jsxs)(P.a,{children:[Object(l.jsxs)(f.a,{className:"mb-3",children:[Object(l.jsxs)(P.a.Group,{as:h.a,controlId:"formGridEmail",children:[Object(l.jsx)(P.a.Label,{children:"Email"}),Object(l.jsx)(P.a.Control,{type:"email",placeholder:"Enter email"})]}),Object(l.jsxs)(P.a.Group,{as:h.a,controlId:"formGridPassword",children:[Object(l.jsx)(P.a.Label,{children:"Password"}),Object(l.jsx)(P.a.Control,{type:"password",placeholder:"Password"})]})]}),Object(l.jsxs)(P.a.Group,{className:"mb-3",controlId:"formGridAddress1",children:[Object(l.jsx)(P.a.Label,{children:"Address"}),Object(l.jsx)(P.a.Control,{placeholder:"1234 Main St"})]}),Object(l.jsxs)(P.a.Group,{className:"mb-3",controlId:"formGridAddress2",children:[Object(l.jsx)(P.a.Label,{children:"Address 2"}),Object(l.jsx)(P.a.Control,{placeholder:"Apartment, studio, or floor"})]}),Object(l.jsxs)(f.a,{className:"mb-3",children:[Object(l.jsxs)(P.a.Group,{as:h.a,controlId:"formGridCity",children:[Object(l.jsx)(P.a.Label,{children:"City"}),Object(l.jsx)(P.a.Control,{})]}),Object(l.jsxs)(P.a.Group,{as:h.a,controlId:"formGridZip",children:[Object(l.jsx)(P.a.Label,{children:"Zip"}),Object(l.jsx)(P.a.Control,{})]})]}),Object(l.jsx)(P.a.Group,{className:"mb-3",id:"formGridCheckbox",children:Object(l.jsx)(P.a.Check,{type:"checkbox",label:"Check me out"})}),Object(l.jsx)(N.a,{variant:"primary",type:"submit",children:"Submit"})]})})]})})},_=a(18),E=function(){var e=Object(c.useState)({title:"",body:""}),t=Object(b.a)(e,2),a=t[0],s=t[1],n=Object(d.f)();return Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(l.jsxs)(x.a,{className:"mt-4",style:{width:"750px"},children:[Object(l.jsx)(x.a.Header,{children:Object(l.jsx)(x.a.Title,{children:"Add New Post"})}),Object(l.jsx)(x.a.Body,{children:Object(l.jsxs)(P.a,{onSubmit:function(e){e.preventDefault(),console.log(a),u({url:"/posts",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},data:a}).then((function(e){console.log(e.data),alert("".concat(e.status," - ").concat(e.statusText)),n.push("/posts/".concat(e.data.id))})).catch((function(e){console.log(e),alert(e)}))},children:[Object(l.jsxs)(P.a.Group,{as:f.a,children:[Object(l.jsx)(P.a.Label,{column:!0,sm:2,children:"Post Title"}),Object(l.jsx)(h.a,{sm:10,children:Object(l.jsx)(P.a.Control,{type:"text",placeholder:"Title",value:a.title,onChange:function(e){s(Object(_.a)(Object(_.a)({},a),{},{title:e.target.value}))}})})]}),Object(l.jsxs)(P.a.Group,{as:f.a,children:[Object(l.jsx)(P.a.Label,{column:!0,sm:2,children:"Post Body"}),Object(l.jsx)(h.a,{sm:10,children:Object(l.jsx)(P.a.Control,{as:"textarea",placeholder:"Body",rows:5,value:a.body,onChange:function(e){s(Object(_.a)(Object(_.a)({},a),{},{body:e.target.value}))}})})]}),Object(l.jsx)(P.a.Group,{as:f.a,children:Object(l.jsx)(h.a,{sm:{span:10,offset:2},children:Object(l.jsx)(N.a,{type:"submit",children:"Submit"})})})]})})]})})},F=function(){var e=Object(c.useState)({title:"",body:""}),t=Object(b.a)(e,2),a=t[0],s=t[1],n=Object(d.f)(),i=Object(d.h)().id;return Object(c.useEffect)((function(){u.get("/posts/".concat(i)).then((function(e){console.log(e),200===e.status&&s(e.data)}))}),[i]),Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(l.jsxs)(x.a,{className:"mt-4",style:{width:"750px"},children:[Object(l.jsx)(x.a.Header,{children:Object(l.jsx)(x.a.Title,{children:"Update Post"})}),Object(l.jsx)(x.a.Body,{children:Object(l.jsxs)(P.a,{onSubmit:function(e){e.preventDefault(),console.log(a);var t={url:"/posts/".concat(i),method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},data:a};u(t).then((function(e){console.log(e.data),alert("".concat(e.status," - ").concat(e.statusText)),n.push("/posts/".concat(e.data.id))})).catch((function(e){console.log(e),alert(e)}))},children:[Object(l.jsxs)(P.a.Group,{as:f.a,children:[Object(l.jsx)(P.a.Label,{column:!0,sm:2,children:"Post Title"}),Object(l.jsx)(h.a,{sm:10,children:Object(l.jsx)(P.a.Control,{type:"text",placeholder:"Title",value:a.title,onChange:function(e){s(Object(_.a)(Object(_.a)({},a),{},{title:e.target.value}))}})})]}),Object(l.jsxs)(P.a.Group,{as:f.a,children:[Object(l.jsx)(P.a.Label,{column:!0,sm:2,children:"Post Body"}),Object(l.jsx)(h.a,{sm:10,children:Object(l.jsx)(P.a.Control,{as:"textarea",placeholder:"Body",rows:5,value:a.body,onChange:function(e){s(Object(_.a)(Object(_.a)({},a),{},{body:e.target.value}))}})})]}),Object(l.jsx)(P.a.Group,{as:f.a,children:Object(l.jsx)(h.a,{sm:{span:10,offset:2},children:Object(l.jsx)(N.a,{type:"submit",children:"Submit"})})})]})})]})})},R=function(){return Object(l.jsx)("div",{children:"404: Page Not Found"})},H=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{path:"/",component:C,exact:!0}),Object(l.jsx)(d.a,{path:"/about",component:I}),Object(l.jsx)(d.a,{path:"/account",component:L}),Object(l.jsx)(d.a,{path:"/login",component:B}),Object(l.jsx)(d.a,{path:"/register",component:A}),Object(l.jsx)(d.a,{path:"/new_post",component:E}),Object(l.jsx)(d.a,{path:"/post/:id",exact:!0,children:Object(l.jsx)(w,{})}),Object(l.jsx)(d.a,{path:"/update/post/:id",exact:!0,children:Object(l.jsx)(F,{})}),Object(l.jsx)(d.a,{component:R})]})]})})};a(84),a(85);var U=function(){return Object(l.jsx)(H,{})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,101)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(U,{})}),document.getElementById("root")),D()}},[[86,1,2]]]);
//# sourceMappingURL=main.5b49172c.chunk.js.map