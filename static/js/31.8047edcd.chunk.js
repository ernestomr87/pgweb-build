(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1209:function(e,t,n){},1373:function(e,t,n){"use strict";n.r(t);var a=n(446),r=n.n(a),o=n(447),c=n(504),s=n(0),i=n.n(s),u=n(25),l=n(70),d=n(15),m=n(1352),f=n(1125),p=n(474),h=n(410),g=n(1350),b=n(450),k=n(633),v=n(638),x=n(402),E=n(482),O=n(107),T=n(39),j=n(636),y=n.n(j),w=n(65),P=n.n(w),S=n(68),A=P()({loader:function(){return n.e(41).then(n.bind(null,1353))},loading:S.a}),z=P()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(8),n.e(6),n.e(13)]).then(n.bind(null,1366))},loading:S.a}),C=P()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(16)]).then(n.bind(null,1370))},loading:S.a}),F=P()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(27)]).then(n.bind(null,1354))},loading:S.a}),I=P()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(17)]).then(n.bind(null,1365))},loading:S.a}),L=P()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(21)]).then(n.bind(null,1368))},loading:S.a}),R=P()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(19)]).then(n.bind(null,1375))},loading:S.a}),U=P()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,1355))},loading:S.a}),D=P()({loader:function(){return n.e(38).then(n.bind(null,1356))},loading:S.a}),B=P()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(8),n.e(23)]).then(n.bind(null,1357))},loading:S.a}),H=P()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(22)]).then(n.bind(null,1358))},loading:S.a}),M=P()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(18)]).then(n.bind(null,1359))},loading:S.a}),Y=P()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(14)]).then(n.bind(null,1364))},loading:S.a}),q=P()({loader:function(){return Promise.all([n.e(6),n.e(10),n.e(40)]).then(n.bind(null,1129))},loading:S.a}),N=P()({loader:function(){return Promise.all([n.e(4),n.e(36)]).then(n.bind(null,1090))},loading:S.a}),Q=P()({loader:function(){return Promise.all([n.e(4),n.e(37)]).then(n.bind(null,1091))},loading:S.a}),W=P()({loader:function(){return Promise.all([n.e(4),n.e(35)]).then(n.bind(null,1092))},loading:S.a}),_=n(108),G=n(72),K=n(1351);function V(){var e=Object(_.a)(["\n  text-align: right;\n  text-decoration: underline;\n  color: rgb(0, 141, 255);\n  margin-right: 10px;\n  cursor: default;\n  &:hover {\n    background-color: unset !important;\n  }\n"]);return V=function(){return e},e}function J(){var e=Object(_.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin: 15px 20px 0 0px;\n"]);return J=function(){return e},e}function X(){var e=Object(_.a)(["\n  min-height: 100vh !important;\n"]);return X=function(){return e},e}function Z(){var e=Object(_.a)(["\n  cursor: pointer;\n"]);return Z=function(){return e},e}function $(){var e=Object(_.a)(["\n  height: 32px;\n  background: #ffffff;\n  margin: 16px;\n  img {\n    height: 50px;\n    margin-right: 16px;\n    margin-top: -10px;\n  }\n"]);return $=function(){return e},e}var ee=G.c.div($()),te=Object(G.c)(K.a)(Z()),ne=Object(G.c)(m.a)(X()),ae=G.c.div(J()),re=Object(G.c)(p.b.Item)(V()),oe=n(122),ce=n(509),se=n(43),ie=n(52),ue=n(444),le=n(143),de=n(130),me=n(741),fe=(n(1209),m.a.Header),pe=m.a.Content,he=m.a.Footer,ge=m.a.Sider;t.default=Object(u.c)(function(e){return{process:e.rootReducer.process,authState:e.rootReducer.auth,notificationState:e.rootReducer.notification,location:e.router.location,lang:e.rootReducer.auth.lang}},function(e){return{processAct:Object(d.a)(de,e),notificationAct:Object(d.a)(le,e),authAct:Object(d.a)(ie,e),authChangeLang:Object(d.a)(ie.changeLang,e)}})(Object(T.g)(Object(l.c)(function(e){var t=e.location.pathname,n=e.process,a=e.authState,u=e.intl.messages,l=e.notificationState.notifications?e.notificationState.notifications.length:0,d=Object(s.useState)(""),j=Object(c.a)(d,2),w=j[0],P=j[1],S=Object(s.useState)(!1),_=Object(c.a)(S,2),G=_[0],K=_[1],V=Object(s.useState)(e.notificationState.notifications),J=Object(c.a)(V,2),X=J[0],Z=J[1],$=Object(s.useState)(!1),ie=Object(c.a)($,2),le=ie[0],de=ie[1],be=Object(s.useState)(0),ke=Object(c.a)(be,2),ve=ke[0],xe=ke[1];Object(s.useEffect)(function(){var e=y.a.CancelToken.source();return Ee(e),Te(e),function(){e.cancel("Operation canceled by the user.")}},[]);for(var Ee=function(){var t=Object(o.a)(r.a.mark(function t(n){var a,o,c,s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.history,o=e.authAct.fetchUser,c=e.notificationAct.changeNotifications,de(!0),t.prev=2,t.next=5,Object(ue.U)(n);case 5:s=t.sent,o(s.data.user),c(s.data.user.Notifications),de(!1),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(2),oe.a.clearAppStorage(),a.push("/"),de(!1);case 16:case"end":return t.stop()}},t,null,[[2,11]])}));return function(e){return t.apply(this,arguments)}}(),Oe=function(){var e=Object(o.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ue.i)();case 3:Z([]),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),f.a.error(e.t0.message);case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(){return e.apply(this,arguments)}}(),Te=function(t){var n=e.processAct,a=n.getEngines,r=n.fetchRequest,o=n.fetchResponse;r(),Object(ue.B)(t).then(function(e){var t,n=e.data;n.process&&n.allowedFiles&&(a(n.process,n.process[0].name),xe((t="translation").charAt(0).toUpperCase()+t.slice(1)),P(n.allowedFiles),o())}).catch(function(e){o()})},je=function(t){(0,e.processAct.selectProcess)(t)},ye=function(t){(0,e.processAct.changeFileID)(t)},we=i.a.createElement(p.b,null,i.a.createElement(p.b.Item,{key:"2"},i.a.createElement(O.a,{to:"/dashboard/profile"},i.a.createElement(h.a,{type:"profile"})," \xa0\xa0",u.menus.profile)),i.a.createElement(p.b.Item,{key:"3",onClick:function(){var t=e.history;oe.a.clearAppStorage(),t.push("/")}},i.a.createElement(h.a,{type:"logout"})," ",u.menus.logout)),Pe=i.a.createElement(p.b,null,i.a.createElement(p.b.Item,{key:"en",disabled:"en"===e.lang,onClick:function(){e.authChangeLang("en")}},i.a.createElement("span",{role:"img","aria-label":"English"},"\ud83c\uddfa\ud83c\uddf8"),u.languages.en),i.a.createElement(p.b.Item,{key:"es",disabled:"es"===e.lang,onClick:function(){e.authChangeLang("es")}},i.a.createElement("span",{role:"img","aria-label":"Spanish"},"\ud83c\uddea\ud83c\uddf8"),u.languages.es)),Se=X.map(function(e,t){var n=ce.a.getStatusByText(e.type);return i.a.createElement(p.b.Item,{key:"noty".concat(t)},i.a.createElement(h.a,{type:"desktop"})," ",e.data.fileName," ",i.a.createElement(g.a,{style:{float:"right",margin:2,marginLeft:5},color:"#2db7f5"},n))}),Ae=[],ze=0,Ce=Se.length-1;Ce>=0&&(Ae.push(Se[Ce]),5!==++ze);Ce--);return Ae.push(i.a.createElement(re,{key:"more"},i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{onClick:Oe,style:{float:"left",marginBottom:5},size:"small",type:"primary"},"Clear"),i.a.createElement(O.a,{to:"/dashboard/process-services"},u.default.seeMore,"...")))),le?i.a.createElement(k.a,{justify:"center",type:"flex"},i.a.createElement(me.a,null),i.a.createElement(v.a,{xs:12,style:{display:"flex",justifyContent:"center",marginTop:60}},i.a.createElement(x.a,{size:"large",spinning:le,tip:u.default.loading+"..."}))):i.a.createElement(ne,null,i.a.createElement(me.a,null),i.a.createElement(ge,{width:256,collapsed:G},i.a.createElement(ee,null,G?i.a.createElement("img",{alt:"logo",src:se.a[se.a.default].logoMin}):i.a.createElement("img",{alt:"logo",src:se.a[se.a.default].logo})),i.a.createElement(D,{pathname:t,rol:a.user.rol})),i.a.createElement(m.a,null,i.a.createElement(fe,{style:{background:"#fff",padding:0}},i.a.createElement(h.a,{className:"trigger",type:G?"menu-unfold":"menu-fold",onClick:function(){K(!G)}}),i.a.createElement(ae,null,"user"!==a.user.rol||0===l&&i.a.createElement(te,{count:0},i.a.createElement(b.a,{disabled:0===l,style:{marginLeft:10},type:"primary",shape:"circle",icon:"notification"})),i.a.createElement(E.a,{overlay:Pe,placement:"bottomRight"},i.a.createElement(b.a,{style:{marginLeft:10},type:"primary",shape:"circle",icon:"global"})),i.a.createElement(E.a,{overlay:we,placement:"bottomRight"},i.a.createElement(b.a,{style:{marginLeft:10},type:"primary",shape:"circle",icon:"user"}))," "))," ",i.a.createElement(pe,{style:{margin:"0 16px"}},i.a.createElement(T.d,null,i.a.createElement(T.b,{exact:!0,path:"/dashboard",render:function(){return i.a.createElement(z,{user:a.user})}}),i.a.createElement(T.b,{exact:!0,path:"/dashboard/users",render:function(){return i.a.createElement(U,{userLogin:a.user})}}),i.a.createElement(T.b,{exact:!0,path:"/dashboard/users/:rol/:id",render:function(){return i.a.createElement(z,{userLogin:a.user})}}),i.a.createElement(T.b,{exact:!0,path:"/dashboard/process-services",render:function(){return i.a.createElement(C,{userLogin:a.user,typeOfUser:a.user.typeOfUser,changeFileID:ye,process:n,allowedFiles:w,defaultValue:ve,selectProcess:je,newProcess:!1})}}),i.a.createElement(T.b,{exact:!0,path:"/dashboard/process-services/new",render:function(){return i.a.createElement(C,{userLogin:a.user,typeOfUser:a.user.typeOfUser,changeFileID:ye,process:n,allowedFiles:w,defaultValue:ve,selectProcess:je,newProcess:!0})}}),i.a.createElement(T.b,{exact:!0,path:"/dashboard/process-services/:uuid/success",render:function(){return i.a.createElement(W,{dashboard:!0})}}),i.a.createElement(T.b,{exact:!0,path:"/dashboard/process-services/:uuid/cancel",render:function(){return i.a.createElement(N,{dashboard:!0})}}),i.a.createElement(T.b,{exact:!0,path:"/dashboard/process-services/:uuid/error",render:function(){return i.a.createElement(Q,{dashboard:!0})}}),i.a.createElement(T.b,{exact:!0,path:"/dashboard/profile",component:F}),i.a.createElement(T.b,{exact:!0,path:"/dashboard/stats/:userId",render:function(){return i.a.createElement(Y,{user:a.user})}}),i.a.createElement(T.b,{exact:!0,path:"/dashboard/stats",render:function(){return i.a.createElement(Y,{user:a.user})}}),i.a.createElement(A,{exact:!0,path:"/dashboard/configuration",user:a.user,component:I}),i.a.createElement(A,{exact:!0,path:"/dashboard/services",user:a.user,component:H}),i.a.createElement(A,{exact:!0,path:"/dashboard/nodes",user:a.user,component:L}),i.a.createElement(A,{exact:!0,path:"/dashboard/engines",user:a.user,client:!0,component:M}),i.a.createElement(A,{exact:!0,client:!0,path:"/dashboard/engines/user/:userId",user:a.user,component:M}),i.a.createElement(A,{exact:!0,user:a.user,client:!0,path:"/dashboard/models",component:R}),i.a.createElement(A,{exact:!0,path:"/dashboard/eds",user:a.user,component:B}),i.a.createElement(A,{exact:!0,path:"/dashboard/eds/:filter/:id",user:a.user,component:B}),i.a.createElement(T.b,{exact:!0,path:"/dashboard/404",render:function(){return i.a.createElement(q,{dashboard:!0})}}),i.a.createElement(T.a,{to:"/dashboard/404"}))),i.a.createElement(he,{style:{textAlign:"center"}},se.a[se.a.default].footer)))})))},444:function(e,t,n){"use strict";n.d(t,"jb",function(){return i}),n.d(t,"nb",function(){return u}),n.d(t,"mb",function(){return l}),n.d(t,"D",function(){return d}),n.d(t,"Z",function(){return m}),n.d(t,"Q",function(){return f}),n.d(t,"rb",function(){return p}),n.d(t,"B",function(){return h}),n.d(t,"E",function(){return g}),n.d(t,"u",function(){return b}),n.d(t,"i",function(){return k}),n.d(t,"kb",function(){return v}),n.d(t,"db",function(){return x}),n.d(t,"ib",function(){return E}),n.d(t,"ab",function(){return O}),n.d(t,"cb",function(){return T}),n.d(t,"bb",function(){return j}),n.d(t,"U",function(){return y}),n.d(t,"O",function(){return w}),n.d(t,"P",function(){return P}),n.d(t,"F",function(){return S}),n.d(t,"a",function(){return A}),n.d(t,"v",function(){return z}),n.d(t,"X",function(){return C}),n.d(t,"V",function(){return F}),n.d(t,"N",function(){return I}),n.d(t,"M",function(){return L}),n.d(t,"G",function(){return R}),n.d(t,"C",function(){return U}),n.d(t,"k",function(){return D}),n.d(t,"fb",function(){return B}),n.d(t,"qb",function(){return H}),n.d(t,"hb",function(){return M}),n.d(t,"h",function(){return Y}),n.d(t,"Y",function(){return q}),n.d(t,"f",function(){return N}),n.d(t,"w",function(){return Q}),n.d(t,"eb",function(){return W}),n.d(t,"l",function(){return _}),n.d(t,"H",function(){return G}),n.d(t,"lb",function(){return K}),n.d(t,"L",function(){return V}),n.d(t,"e",function(){return J}),n.d(t,"q",function(){return X}),n.d(t,"z",function(){return Z}),n.d(t,"t",function(){return $}),n.d(t,"gb",function(){return ee}),n.d(t,"K",function(){return te}),n.d(t,"T",function(){return ne}),n.d(t,"d",function(){return ae}),n.d(t,"ob",function(){return re}),n.d(t,"j",function(){return oe}),n.d(t,"p",function(){return ce}),n.d(t,"I",function(){return se}),n.d(t,"b",function(){return ie}),n.d(t,"n",function(){return ue}),n.d(t,"x",function(){return le}),n.d(t,"r",function(){return de}),n.d(t,"R",function(){return me}),n.d(t,"J",function(){return fe}),n.d(t,"c",function(){return pe}),n.d(t,"o",function(){return he}),n.d(t,"y",function(){return ge}),n.d(t,"A",function(){return be}),n.d(t,"g",function(){return ke}),n.d(t,"m",function(){return ve}),n.d(t,"s",function(){return xe}),n.d(t,"W",function(){return Ee}),n.d(t,"S",function(){return Oe}),n.d(t,"pb",function(){return Te});var a=n(121),r=n(122),o=n(43),c=n(636),s=o.a[o.a.default].hostApi,i=function(e){e?c.defaults.headers.common["x-access-token"]=e:delete c.defaults.headers.common["x-access-token"]},u=function(e){return c({method:"post",url:"".concat(s,"/api/auth/signup"),data:e})},l=function(e){return c({method:"post",url:"".concat(s,"/api/auth/signin"),data:e})},d=function(){return c.get("".concat(s,"/api/engines"))},m=function(){return c.get("".concat(s,"/api/engines/load"))},f=function(e){return c.get("".concat(s,"/api/process/").concat(e))},p=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c.get("".concat(s,"/api/process/").concat(e))},h=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c.get("".concat(s,"/api/engines/user"),{cancelToken:e.token})},g=function(){return c.get("".concat(s,"/api/typeOfPermits/engines"))},b=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c.get("".concat(s,"/api/file"),{responseType:"blob",params:Object(a.a)({},e)})},k=function(){return c.delete("".concat(s,"/api/notification"))},v=function(e){return c({method:"put",url:"".concat(s,"/api/process/downloaded"),data:e})},x=function(e){return c({method:"put",url:"".concat(s,"/api/process/removed"),data:e})},E=function(e){return c({method:"post",url:"".concat(s,"/api/process_file"),data:e})},O=function(e){return c({method:"post",url:"".concat(s,"/api/process/processFile"),data:e})},T=function(e){return c({method:"post",url:"".concat(s,"/api/process/quoteFile"),data:e})},j=function(e){return c({method:"post",url:"".concat(s,"/api/process/processFileAfterQuoteFile"),data:e})},y=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c.get("".concat(s,"/api/process/user"),{cancelToken:e.token})},w=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c.get("".concat(s,"/api/process/process"),{cancelToken:e.token})},P=function(e){return c.get("".concat(s,"/api/process/getProcessByListId"),{params:Object(a.a)({},e)})},S=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c.get("".concat(s,"/api/billing"),{params:Object(a.a)({},e)})},A=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"post",url:"".concat(s,"/api/billing"),data:Object(a.a)({},e)})},z=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"put",url:"".concat(s,"/api/billing"),data:Object(a.a)({},e)})},C=function(){var e=r.a.getToken();return c.defaults.headers.common["x-access-token"]=e,c.get("".concat(s,"/api/users/listAll"))},F=function(){var e=r.a.getToken();return c.defaults.headers.common["x-access-token"]=e,c.get("".concat(s,"/api/users/dashboard/user"))},I=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"post",url:"".concat(s,"/api/users/dashboard/user"),data:{id:e}})},L=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"post",url:"".concat(s,"/api/users/dashboard/client"),data:{id:e}})},R=function(){var e=r.a.getToken();return c.defaults.headers.common["x-access-token"]=e,c.get("".concat(s,"/api/users/dashboard/client"))},U=function(){var e=r.a.getToken();return c.defaults.headers.common["x-access-token"]=e,c.get("".concat(s,"/api/users/dashboard/admin"))},D=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"post",url:"".concat(s,"/api/users/create"),data:e})},B=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"put",url:"".concat(s,"/api/users/remove"),data:e})},H=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"put",url:"".concat(s,"/api/users/update"),data:e})},M=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"put",url:"".concat(s,"/api/users/profile"),data:e})},Y=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"put",url:"".concat(s,"/api/users/password"),data:e})},q=function(){var e=r.a.getToken();return c.defaults.headers.common["x-access-token"]=e,c.get("".concat(s,"/api/typeOfPermits/list"))},N=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"post",url:"".concat(s,"/api/typeOfPermits/add"),data:e})},Q=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"put",url:"".concat(s,"/api/typeOfPermits/edit"),data:e})},W=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"put",url:"".concat(s,"/api/typeOfPermits/remove"),data:e})},_=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"put",url:"".concat(s,"/api/typeOfPermits/default"),data:e})},G=function(){var e=r.a.getToken();return c.defaults.headers.common["x-access-token"]=e,c.get("".concat(s,"/api/configuration"))},K=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"put",url:"".concat(s,"/api/email"),data:e})},V=function(){var e=r.a.getToken();return c.defaults.headers.common["x-access-token"]=e,c.get("".concat(s,"/api/corp/nodes"))},J=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"post",url:"".concat(s,"/api/corp/nodes"),data:Object(a.a)({},e)})},X=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"delete",url:"".concat(s,"/api/corp/nodes"),data:Object(a.a)({},e)})},Z=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"put",url:"".concat(s,"/api/corp/nodes/enabled"),data:Object(a.a)({},e)})},$=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"put",url:"".concat(s,"/api/corp/nodes/disabled"),data:Object(a.a)({},e)})},ee=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"put",url:"".concat(s,"/api/corp/nodes/restart"),data:Object(a.a)({},e)})},te=function(){var e=r.a.getToken();return c.defaults.headers.common["x-access-token"]=e,c.get("".concat(s,"/api/corp/models"))},ne=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c.get("".concat(s,"/api/corp/models/trainings"),{params:Object(a.a)({},e)})},ae=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"post",url:"".concat(s,"/api/corp/models"),data:Object(a.a)({},e)})},re=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"post",url:"".concat(s,"/api/corp/models/train"),data:Object(a.a)({},e)})},oe=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"put",url:"".concat(s,"/api/corp/models"),data:Object(a.a)({},e)})},ce=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"delete",url:"".concat(s,"/api/corp/models"),data:Object(a.a)({},e)})},se=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c.get("".concat(s,"/api/corp/eds"),{params:Object(a.a)({},e)})},ie=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"post",url:"".concat(s,"/api/corp/eds"),data:Object(a.a)({},e)})},ue=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"delete",url:"".concat(s,"/api/corp/eds"),data:Object(a.a)({},e)})},le=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"put",url:"".concat(s,"/api/corp/eds/enabled"),data:Object(a.a)({},e)})},de=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"put",url:"".concat(s,"/api/corp/eds/disabled"),data:Object(a.a)({},e)})},me=function(){var e=r.a.getToken();return c.defaults.headers.common["x-access-token"]=e,c.get("".concat(s,"/api/corp/services"),{params:{}})},fe=function(){var e=r.a.getToken();return c.defaults.headers.common["x-access-token"]=e,c.get("".concat(s,"/api/corp/engines"),{params:{}})},pe=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"post",url:"".concat(s,"/api/corp/engines"),data:Object(a.a)({},e)})},he=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"delete",url:"".concat(s,"/api/corp/engines"),data:Object(a.a)({},e)})},ge=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"put",url:"".concat(s,"/api/corp/engines/enabled"),data:Object(a.a)({},e)})},be=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c.get("".concat(s,"/api/corp/engines/users/").concat(e),{params:{}})},ke=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"post",url:"".concat(s,"/api/corp/engines/users"),data:Object(a.a)({},e)})},ve=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"put",url:"".concat(s,"/api/corp/engines/users"),data:Object(a.a)({},e)})},xe=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"put",url:"".concat(s,"/api/corp/engines/disabled"),data:Object(a.a)({},e)})},Ee=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"post",url:"".concat(s,"/api/corp/engines/grantAll"),data:Object(a.a)({},e)})},Oe=function(e,t){var n=r.a.getToken();c.defaults.headers.common["x-access-token"]=n;var o={method:"post",url:"".concat(s,"/api/getStats"),data:Object(a.a)({},e)};return t&&t.token&&(o.cancelToken=t.token),c(o)},Te=function(e){var t=r.a.getToken();return c.defaults.headers.common["x-access-token"]=t,c({method:"post",url:"".concat(s,"/api/translate"),data:Object(a.a)({},e)})}},509:function(e,t,n){"use strict";var a=n(73),r=n.n(a),o={hasErrors:function(e){return Object.keys(e).some(function(t){return e[t]})},getBase64:function(e){return new Promise(function(t,n){var a=new FileReader;a.readAsDataURL(e);var r={fileName:e.name,fileType:e.type};a.onload=function(){r.file=a.result,t(r)},a.onerror=function(e){n(e)}})},checkFile:function(e,t){var n=e.name.substr(e.name.lastIndexOf(".")+1);return!!new RegExp(t,"gi").test(n)},getStatus:function(e){return(e=parseInt(e))<0?"Processing Error":3===e?"Waiting":5===e?"Waiting Quoting":6===e?"Quoting":7===e?"Quotes Ready":17===e?"Pending Accept/Reject":20===e?"Preprocessing":30===e?"Processing":40===e?"PostProcessing":100===e?"Finished":110===e||120===e?"Downloaded":"Waiting"},utcToLocal:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=r.a.utc(e).format("YYYY-MM-DD HH:mm:ss"),a=r.a.utc(n).toDate(),o=r()(a).local();return t?o.fromNow():o.format("YYYY-MM-DD ")},languages:{"en-gb":"English (UK)","en-GB":"English (UK)","en-us":"English (USA)","en-US":"English (USA)","pt-br":"Portuguese Brazil","pt-pt":"Portuguese Portugal","zh-cn":"Simplified Chinese","zh-tw":"Traditional Chinese",am:"Amharic",ar:"Arabic",auto:"Auto",bg:"Bulgarian",bn:"Bengali",ca:"Catalan",chr:"Cherokee",cs:"Czech",cy:"Welsh",da:"Danish",de:"German",el:"Greek",en:"English",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Persian",fi:"Finnish",fil:"Filipino",fr:"French",gu:"Gujarati",he:"Hebrew",hi:"Hindi",hr:"Croatian",hu:"Hungarian",id:"Indonesian",is:"Icelandic",it:"Italian",iw:"Hebrew",ja:"Japanese",kn:"Kannada",ko:"Korean",lt:"Lithuanian",lv:"Latvian",ml:"Malayalam",mr:"Marathi",ms:"Malay",nl:"Dutch",no:"Norwegian",pl:"Polish",pp:"Portuguese Portugal",pt:"Portuguese Brazil",ro:"Romanian",ru:"Russian",sk:"Slovak",sl:"Slovenian",sr:"Serbian",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",th:"Thai",tr:"Turkish",uk:"Ukrainian",ur:"Urdu",va:"Valencian",vi:"Vietnamese",zh:"Simplified Chinese"},getStatusByText:function(e){return{processing_error:"Processing Error",waiting:"Waiting",waiting_quoting:"Waiting Quoting",quoting:"Quoting",quote_ready:"Quotes Ready",pending_accept_reject:"Pending Accept/Reject",preprocessing:"Pre processing",processing:"Processing",post_processing:"Post Processing",finished:"Finished",downloaded:"Downloaded"}[e]}};t.a=o},741:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(0),r=n.n(a),o=n(1087),c=n(43),s=function(){return r.a.createElement(o.Helmet,null,r.a.createElement("title",null,c.a[c.a.default].title),r.a.createElement("link",{rel:"icon",href:"//img1.wsimg.com/isteam/ip/18813734-a6ed-4028-83ae-2c4c50ad0dd0/favicon/df1025de-4e50-4a59-99b1-a422ac836a4a.png/:/rs=w:16,h:16,m",sizes:"16x16"}),r.a.createElement("link",{rel:"icon",href:"//img1.wsimg.com/isteam/ip/18813734-a6ed-4028-83ae-2c4c50ad0dd0/favicon/df1025de-4e50-4a59-99b1-a422ac836a4a.png/:/rs=w:24,h:24,m",sizes:"24x24"}),r.a.createElement("link",{rel:"icon",href:"//img1.wsimg.com/isteam/ip/18813734-a6ed-4028-83ae-2c4c50ad0dd0/favicon/df1025de-4e50-4a59-99b1-a422ac836a4a.png/:/rs=w:32,h:32,m",sizes:"32x32"}),r.a.createElement("link",{rel:"icon",href:"//img1.wsimg.com/isteam/ip/18813734-a6ed-4028-83ae-2c4c50ad0dd0/favicon/df1025de-4e50-4a59-99b1-a422ac836a4a.png/:/rs=w:48,h:48,m",sizes:"48x48"}),r.a.createElement("link",{rel:"icon",href:"//img1.wsimg.com/isteam/ip/18813734-a6ed-4028-83ae-2c4c50ad0dd0/favicon/df1025de-4e50-4a59-99b1-a422ac836a4a.png/:/rs=w:64,h:64,m",sizes:"64x64"}),r.a.createElement("link",{rel:"apple-touch-icon-precomposed",href:"//img1.wsimg.com/isteam/ip/18813734-a6ed-4028-83ae-2c4c50ad0dd0/favicon/df1025de-4e50-4a59-99b1-a422ac836a4a.png/:/rs=w:57,h:57,m",sizes:"57x57"}),r.a.createElement("link",{rel:"apple-touch-icon",href:"//img1.wsimg.com/isteam/ip/18813734-a6ed-4028-83ae-2c4c50ad0dd0/favicon/df1025de-4e50-4a59-99b1-a422ac836a4a.png/:/rs=w:144,h:144,m",sizes:"144x144"}),r.a.createElement("link",{rel:"apple-touch-icon",href:"//img1.wsimg.com/isteam/ip/18813734-a6ed-4028-83ae-2c4c50ad0dd0/favicon/df1025de-4e50-4a59-99b1-a422ac836a4a.png/:/rs=w:167,h:167,m",sizes:"167x167"}),r.a.createElement("link",{rel:"apple-touch-icon",href:"//img1.wsimg.com/isteam/ip/18813734-a6ed-4028-83ae-2c4c50ad0dd0/favicon/df1025de-4e50-4a59-99b1-a422ac836a4a.png/:/rs=w:180,h:180,m",sizes:"180x180"}))},i=function(){return r.a.createElement(o.Helmet,null,r.a.createElement("title",null,c.a[c.a.default].title),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),r.a.createElement("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),r.a.createElement("meta",{name:"theme-color",content:"#d46b08"}))},u=function(){return r.a.createElement("div",null,"autheticity"===c.a.default&&r.a.createElement(s,null),"pangeanic"===c.a.default&&r.a.createElement(i,null))}}}]);
//# sourceMappingURL=31.8047edcd.chunk.js.map