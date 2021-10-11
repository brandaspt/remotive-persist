(this["webpackJsonpremotive-persist"]=this["webpackJsonpremotive-persist"]||[]).push([[0],{108:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(22),s=c.n(a),r=c(15),i=c(7),o=c(112),j=c(8),l=(c(66),c(2)),b=Object(i.e)((function(e){var t=e.type,c=e.list,n=e.history;return Object(l.jsxs)("div",{className:"FavoritesIndicator d-flex align-items-center justify-content-center p-2 mx-2",onClick:function(){"companies"===t?n.push("/favoriteCompanies"):n.push("/favoriteJobs")},children:[Object(l.jsx)("p",{className:"m-0",children:"Favorite ".concat(t)}),Object(l.jsx)("div",{className:"num-of-favs d-flex align-items-center justify-content-center",children:c.length})]})})),m=(c(70),function(){var e=Object(j.d)((function(e){return e.favorites}));return Object(l.jsx)("div",{id:"fixed-compensator",children:Object(l.jsxs)(o.a,{fluid:!0,className:"TopBar d-flex align-items-center",children:[Object(l.jsx)(r.b,{to:"/",className:"mr-auto",children:Object(l.jsx)("h1",{className:"py-1 text-center m-0",children:"Remotive Strive"})}),Object(l.jsx)(b,{type:"companies",list:e.companies}),Object(l.jsx)(b,{type:"jobs",list:e.jobs})]})})}),u=c(16),d=c.n(u),O=c(21),f=c(23),p=c(17),x=c(113),h=c(114),y=c(116),v=c(117),N=c(53),g=c(49),_=c.n(g).a.create({baseURL:"https://remotive.io/api"}),S="ADD_COMPANY_TO_FAVORITES",w="REMOVE_COMPANY_FROM_FAVORITES",E="ADD_JOB_TO_FAVORITES",C="REMOVE_JOB_FROM_FAVORITES",T="SET_SEARCH_JOBS",k="SET_SEARCH_LOADING",A=function(e){return function(){var t=Object(f.a)(d.a.mark((function t(c,n){var a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:k,payload:!0}),t.prev=1,t.next=4,_.get(e);case 4:a=t.sent,s=a.data,c({type:T,payload:s.jobs}),c({type:k,payload:!1}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0),c({type:k,payload:!1});case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,c){return t.apply(this,arguments)}}()},F=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(p.a)(s,2),i=r[0],o=r[1],b=Object(n.useState)(""),m=Object(p.a)(b,2),u=m[0],g=m[1],S=Object(n.useCallback)(Object(f.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,_.get("/remote-jobs/categories");case 3:t=e.sent,c=t.data,a([{name:"All",id:0}].concat(Object(O.a)(c.jobs))),o(!1);case 7:case"end":return e.stop()}}),e)}))),[]);Object(n.useEffect)((function(){S()}),[S]);var w=Object(j.c)(),E=function(e){return w(A(e))};return Object(l.jsx)(x.a,{className:"d-flex flex-column align-items-start justify-content-center py-4",children:i?Object(l.jsx)(h.a,{animation:"border",variant:"info"}):Object(l.jsxs)("div",{className:"d-flex w-100 align-items-end justify-content-between",children:[Object(l.jsxs)(y.a,{children:[Object(l.jsx)(y.a.Toggle,{variant:"outline-secondary",children:"Categories"}),Object(l.jsx)(y.a.Menu,{children:c.map((function(e){return Object(l.jsx)(y.a.Item,{onSelect:function(){"All"===e.name?E("/remote-jobs?limit=200"):E("/remote-jobs?category=".concat(e.name))},children:e.name},e.id)}))})]}),Object(l.jsxs)(v.a.Group,{className:"d-flex m-0",children:[Object(l.jsx)(v.a.Control,{type:"text",placeholder:"Search",className:"mr-sm-2",value:u,onChange:function(e){return g(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&E("/remote-jobs?search=".concat(u))}}),Object(l.jsx)(N.a,{variant:"secondary",onClick:function(e){E("/remote-jobs?search=".concat(u))},children:"Search"})]})]})})},R=c(118),D=c(115),I=c(54),J=c.n(I),L=(c(93),c(94),function(e){var t=Object(j.d)((function(e){return e})),c=Object(j.c)(),n=function(e){return c(function(e){return{type:S,payload:e}}(e))},a=function(e){return c(function(e){return{type:w,payload:e}}(e))},s=function(e){return c(function(e){return{type:E,payload:e}}(e))},r=function(e){return c(function(e){return{type:C,payload:e}}(e))};return Object(l.jsx)("div",{className:"ToggleFavoriteIcon",children:e.companyName&&t.favorites.companies.includes(e.companyName)||e.job&&t.favorites.jobs.find((function(t){return t.id===e.job.id}))?Object(l.jsx)("i",{className:"fas fa-star",onClick:function(t){e.companyName?a(e.companyName):r(e.job.id)}}):Object(l.jsx)("i",{className:"far fa-star",onClick:function(t){e.companyName?n(e.companyName):s(e.job)}})})}),M=function(e){var t=e.job,c=Object(n.useState)(!1),a=Object(p.a)(c,2),s=a[0],i=a[1];return Object(l.jsx)(R.a,{className:"JobCard my-1",children:Object(l.jsxs)(R.a.Body,{children:[Object(l.jsxs)("div",{className:"d-flex align-items-center",children:[Object(l.jsx)(L,{job:t}),Object(l.jsx)(R.a.Title,{className:"my-0 ml-2 mr-4",children:t.title}),Object(l.jsx)(D.a,{variant:"info",className:"my-auto",children:t.category})]}),Object(l.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(R.a.Text,{className:"m-0",children:Object(l.jsxs)("small",{children:[Object(l.jsx)("i",{className:"fas fa-calendar-day"})," ",J()(new Date(t.publication_date)).fromNow()]})}),t.job_type&&Object(l.jsx)(R.a.Text,{className:"job-type m-0",children:Object(l.jsxs)("small",{children:[Object(l.jsx)("i",{className:"far fa-clock"})," ",t.job_type]})}),t.candidate_required_location&&Object(l.jsx)(R.a.Text,{className:"job-type m-0",children:Object(l.jsxs)("small",{children:[Object(l.jsx)("i",{className:"fas fa-map-marked-alt"})," ",t.candidate_required_location]})}),t.salary&&Object(l.jsx)(R.a.Text,{className:"m-0",children:Object(l.jsxs)("small",{children:[Object(l.jsx)("i",{className:"fas fa-money-bill-wave"})," ",t.salary]})})]}),Object(l.jsxs)("div",{className:"d-flex align-items-center",children:[Object(l.jsx)(L,{companyName:t.company_name}),Object(l.jsx)(r.b,{to:"/companies/".concat(t.company_name),children:Object(l.jsx)(R.a.Subtitle,{className:"m-0 ml-2 text-muted text-right",children:t.company_name})})]})]}),Object(l.jsx)(N.a,{variant:s?"warning":"secondary",size:"sm",className:"w-100 mt-2",onClick:function(){return i(!s)},children:s?"Hide Description":"Show Description"}),s&&Object(l.jsxs)("div",{className:"d-flex flex-column justify-content-end",children:[Object(l.jsx)(R.a.Text,{className:"mt-2 mb-0",children:Object(l.jsx)("small",{dangerouslySetInnerHTML:{__html:t.description}})}),Object(l.jsx)(N.a,{variant:s?"warning":"secondary",size:"sm",className:"mt-2",onClick:function(){return i(!s)},children:s?"Hide Description":"Show Description"})]})]})})},V=function(e){var t=e.jobsList,c=e.isLoading;return Object(l.jsx)(x.a,{className:"d-flex flex-column align-items-center justify-content-center py-4",children:c?Object(l.jsx)(h.a,{animation:"border",variant:"info"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Showing ".concat(t.length," ").concat(t.length>1?"jobs":"job","!")}),t.map((function(e){return Object(l.jsx)(M,{job:e},e.id)}))]})})},B=Object(j.b)((function(e){return e}),(function(e){return{getJobs:function(t){return e(A(t))}}}))((function(e){var t=e.search,c=e.getJobs;return Object(n.useEffect)((function(){c("/remote-jobs?limit=200")}),[c]),Object(l.jsxs)(o.a,{children:[Object(l.jsx)(F,{}),Object(l.jsx)(V,{jobsList:t.results,isLoading:t.loading})]})})),H=(c(95),Object(i.e)((function(e){var t=e.match,c=Object(n.useState)([]),a=Object(p.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)(!1),o=Object(p.a)(i,2),j=o[0],b=o[1],m=Object(n.useCallback)(Object(f.a)(d.a.mark((function e(){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,_.get("/remote-jobs?company_name=".concat(t.params.company_name));case 3:c=e.sent,n=c.data,r(n.jobs),b(!1);case 7:case"end":return e.stop()}}),e)}))),[t.params.company_name]);return Object(n.useEffect)((function(){m()}),[m]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h2",{className:"text-center text-muted my-1",children:["Company: ",t.params.company_name]}),Object(l.jsx)(V,{jobsList:s,isLoading:j})]})}))),P=function(){return Object(l.jsx)(o.a,{children:Object(l.jsx)(H,{})})},q=(c(96),function(e){var t=e.companyName;return Object(l.jsxs)("div",{className:"FavoriteItem text-center d-flex align-items-center justify-content-center m-3",children:[Object(l.jsx)(L,{companyName:t}),Object(l.jsx)(r.b,{to:"/companies/".concat(t),children:Object(l.jsx)("h2",{children:t})})]})}),z=Object(j.b)((function(e){return e}))((function(e){var t=e.favorites;return Object(l.jsxs)(o.a,{children:[Object(l.jsx)("h3",{className:"text-center my-4",children:"Favorite Companies"}),Object(l.jsx)("div",{className:"d-flex flex-wrap justify-content-center align-items-center",children:t.companies.map((function(e){return Object(l.jsx)(q,{companyName:e},e)}))})]})})),G=Object(j.b)((function(e){return e}))((function(e){var t=e.favorites;return Object(l.jsxs)(o.a,{children:[Object(l.jsx)("h3",{className:"text-center my-4",children:"Favorite Jobs"}),Object(l.jsx)(V,{jobsList:t.jobs})]})})),K=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(m,{}),Object(l.jsx)(i.a,{exact:!0,path:"/",component:B}),Object(l.jsx)(i.a,{exact:!0,path:"/favoriteCompanies",component:z}),Object(l.jsx)(i.a,{exact:!0,path:"/favoriteJobs",component:G}),Object(l.jsx)(i.a,{path:"/companies/:company_name",component:P})]})},U=(c(97),c(18)),X=c(55),Y=c(11),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne.favorites,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(Y.a)(Object(Y.a)({},e),{},{companies:[].concat(Object(O.a)(e.companies),[t.payload])});case w:return Object(Y.a)(Object(Y.a)({},e),{},{companies:Object(O.a)(e.companies.filter((function(e){return e!==t.payload})))});case E:return Object(Y.a)(Object(Y.a)({},e),{},{jobs:[].concat(Object(O.a)(e.jobs),[t.payload])});case C:return Object(Y.a)(Object(Y.a)({},e),{},{jobs:Object(O.a)(e.jobs.filter((function(e){return e.id!==t.payload})))});default:return e}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne.search,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(Y.a)(Object(Y.a)({},e),{},{results:t.payload});case k:return Object(Y.a)(Object(Y.a)({},e),{},{loading:t.payload});default:return e}},Z=c(32),$=c(56),ee=c.n($),te=c(57),ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.c,ne={favorites:{companies:[],jobs:[]},search:{results:[],loading:!1}},ae={key:"root",storage:ee.a,transforms:[Object(te.encryptTransform)({secretKey:"0d0b86132f5d6e2d2568393ed2307c4bc7a65785900621b9a3aef772d79c5dc4081e11120d1a25ab81c260b41d83e963"})]},se=Object(U.b)({favorites:Q,search:W}),re=Object(Z.persistReducer)(ae,se),ie=Object(U.d)(re,ce(Object(U.a)(X.a))),oe=Object(Z.persistStore)(ie),je=c(58);s.a.render(Object(l.jsx)(j.a,{store:ie,children:Object(l.jsx)(je.a,{persistor:oe,loading:null,children:Object(l.jsx)(r.a,{children:Object(l.jsx)(K,{})})})}),document.getElementById("root"))},66:function(e,t,c){},70:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){}},[[108,1,2]]]);
//# sourceMappingURL=main.52337e34.chunk.js.map