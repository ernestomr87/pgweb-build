(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1207:function(e,n,t){},1359:function(e,n,t){"use strict";t.r(n);var a=t(446),r=t.n(a),c=t(447),o=t(504),i=t(0),s=t.n(i),u=t(25),l=t(70),d=t(15),m=t(1337),f=t(1123),p=t(474),h=t(410),g=t(1335),b=t(450),k=t(629),x=t(635),v=t(402),E=t(482),O=t(107),T=t(39),j=t(632),y=t.n(j),w=t(65),P=t.n(w),z=t(68),S=P()({loader:function(){return t.e(41).then(t.bind(null,1338))},loading:z.a}),A=P()({loader:function(){return Promise.all([t.e(0),t.e(2),t.e(8),t.e(6),t.e(13)]).then(t.bind(null,1352))},loading:z.a}),C=P()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(16)]).then(t.bind(null,1356))},loading:z.a}),F=P()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(27)]).then(t.bind(null,1339))},loading:z.a}),I=P()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(17)]).then(t.bind(null,1351))},loading:z.a}),R=P()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(21)]).then(t.bind(null,1354))},loading:z.a}),L=P()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(20)]).then(t.bind(null,1340))},loading:z.a}),U=P()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(19)]).then(t.bind(null,1341))},loading:z.a}),B=P()({loader:function(){return t.e(38).then(t.bind(null,1342))},loading:z.a}),D=P()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(8),t.e(23)]).then(t.bind(null,1343))},loading:z.a}),q=P()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(22)]).then(t.bind(null,1344))},loading:z.a}),H=P()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(18)]).then(t.bind(null,1345))},loading:z.a}),Q=P()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(14)]).then(t.bind(null,1350))},loading:z.a}),N=P()({loader:function(){return Promise.all([t.e(6),t.e(10),t.e(40)]).then(t.bind(null,1127))},loading:z.a}),W=P()({loader:function(){return Promise.all([t.e(4),t.e(36)]).then(t.bind(null,1089))},loading:z.a}),_=P()({loader:function(){return Promise.all([t.e(4),t.e(37)]).then(t.bind(null,1090))},loading:z.a}),M=P()({loader:function(){return Promise.all([t.e(4),t.e(35)]).then(t.bind(null,1091))},loading:z.a}),G=t(108),K=t(72),V=t(1336);function J(){var e=Object(G.a)(["\n  text-align: right;\n  text-decoration: underline;\n  color: rgb(0, 141, 255);\n  margin-right: 10px;\n  cursor: default;\n  &:hover {\n    background-color: unset !important;\n  }\n"]);return J=function(){return e},e}function X(){var e=Object(G.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin: 15px 20px 0 0px;\n"]);return X=function(){return e},e}function Y(){var e=Object(G.a)(["\n  min-height: 100vh !important;\n"]);return Y=function(){return e},e}function Z(){var e=Object(G.a)(["\n  cursor: pointer;\n"]);return Z=function(){return e},e}function $(){var e=Object(G.a)(["\n  height: 32px;\n  background: #ffffff;\n  margin: 16px;\n  img {\n    height: 50px;\n    margin-right: 16px;\n    margin-top: -10px;\n  }\n"]);return $=function(){return e},e}var ee=K.c.div($()),ne=Object(K.c)(V.a)(Z()),te=Object(K.c)(m.a)(Y()),ae=K.c.div(X()),re=Object(K.c)(p.b.Item)(J()),ce=t(121),oe=t(509),ie=t(43),se=t(52),ue=t(444),le=t(143),de=t(130),me=t(741),fe=(t(1207),m.a.Header),pe=m.a.Content,he=m.a.Footer,ge=m.a.Sider;n.default=Object(u.c)(function(e){return{process:e.rootReducer.process,authState:e.rootReducer.auth,notificationState:e.rootReducer.notification,location:e.router.location,lang:e.rootReducer.auth.lang}},function(e){return{processAct:Object(d.a)(de,e),notificationAct:Object(d.a)(le,e),authAct:Object(d.a)(se,e),authChangeLang:Object(d.a)(se.changeLang,e)}})(Object(T.g)(Object(l.c)(function(e){var n=e.location.pathname,t=e.process,a=e.authState,u=e.intl.messages,l=e.notificationState.notifications?e.notificationState.notifications.length:0,d=Object(i.useState)(""),j=Object(o.a)(d,2),w=j[0],P=j[1],z=Object(i.useState)(!1),G=Object(o.a)(z,2),K=G[0],V=G[1],J=Object(i.useState)(e.notificationState.notifications),X=Object(o.a)(J,2),Y=X[0],Z=X[1],$=Object(i.useState)(!1),se=Object(o.a)($,2),le=se[0],de=se[1],be=Object(i.useState)(0),ke=Object(o.a)(be,2),xe=ke[0],ve=ke[1];Object(i.useEffect)(function(){var e=y.a.CancelToken.source();return Ee(e),Te(e),function(){e.cancel("Operation canceled by the user.")}},[]);for(var Ee=function(){var n=Object(c.a)(r.a.mark(function n(t){var a,c,o,i;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.history,c=e.authAct.fetchUser,o=e.notificationAct.changeNotifications,de(!0),n.prev=2,n.next=5,Object(ue.U)(t);case 5:i=n.sent,c(i.data.user),o(i.data.user.Notifications),de(!1),n.next=16;break;case 11:n.prev=11,n.t0=n.catch(2),ce.a.clearAppStorage(),a.push("/"),de(!1);case 16:case"end":return n.stop()}},n,null,[[2,11]])}));return function(e){return n.apply(this,arguments)}}(),Oe=function(){var e=Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ue.i)();case 3:Z([]),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),f.a.error(e.t0.message);case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(){return e.apply(this,arguments)}}(),Te=function(n){var t=e.processAct,a=t.getEngines,r=t.fetchRequest,c=t.fetchResponse;r(),Object(ue.B)(n).then(function(e){var n,t=e.data;t.process&&t.allowedFiles&&(a(t.process,t.process[0].name),ve((n="translation").charAt(0).toUpperCase()+n.slice(1)),P(t.allowedFiles),c())}).catch(function(e){c()})},je=function(n){(0,e.processAct.selectProcess)(n)},ye=function(n){(0,e.processAct.changeFileID)(n)},we=s.a.createElement(p.b,null,s.a.createElement(p.b.Item,{key:"2"},s.a.createElement(O.a,{to:"/dashboard/profile"},s.a.createElement(h.a,{type:"profile"})," \xa0\xa0",u.menus.profile)),s.a.createElement(p.b.Item,{key:"3",onClick:function(){var n=e.history;ce.a.clearAppStorage(),n.push("/")}},s.a.createElement(h.a,{type:"logout"})," ",u.menus.logout)),Pe=s.a.createElement(p.b,null,s.a.createElement(p.b.Item,{key:"en",disabled:"en"===e.lang,onClick:function(){e.authChangeLang("en")}},s.a.createElement("span",{role:"img","aria-label":"English"},"\ud83c\uddfa\ud83c\uddf8"),u.languages.en),s.a.createElement(p.b.Item,{key:"es",disabled:"es"===e.lang,onClick:function(){e.authChangeLang("es")}},s.a.createElement("span",{role:"img","aria-label":"Spanish"},"\ud83c\uddea\ud83c\uddf8"),u.languages.es)),ze=Y.map(function(e,n){var t=oe.a.getStatusByText(e.type);return s.a.createElement(p.b.Item,{key:"noty".concat(n)},s.a.createElement(h.a,{type:"desktop"})," ",e.data.fileName," ",s.a.createElement(g.a,{style:{float:"right",margin:2,marginLeft:5},color:"#2db7f5"},t))}),Se=[],Ae=0,Ce=ze.length-1;Ce>=0&&(Se.push(ze[Ce]),5!==++Ae);Ce--);return Se.push(s.a.createElement(re,{key:"more"},s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,{onClick:Oe,style:{float:"left",marginBottom:5},size:"small",type:"primary"},"Clear"),s.a.createElement(O.a,{to:"/dashboard/process-services"},u.default.seeMore,"...")))),le?s.a.createElement(k.a,{justify:"center",type:"flex"},s.a.createElement(me.a,null),s.a.createElement(x.a,{xs:12,style:{display:"flex",justifyContent:"center",marginTop:60}},s.a.createElement(v.a,{size:"large",spinning:le,tip:u.default.loading+"..."}))):s.a.createElement(te,null,s.a.createElement(me.a,null),s.a.createElement(ge,{width:256,collapsed:K},s.a.createElement(ee,null,K?s.a.createElement("img",{alt:"logo",src:ie.a[ie.a.default].logoMin}):s.a.createElement("img",{alt:"logo",src:ie.a[ie.a.default].logo})),s.a.createElement(B,{pathname:n,rol:a.user.rol})),s.a.createElement(m.a,null,s.a.createElement(fe,{style:{background:"#fff",padding:0}},s.a.createElement(h.a,{className:"trigger",type:K?"menu-unfold":"menu-fold",onClick:function(){V(!K)}}),s.a.createElement(ae,null,"user"!==a.user.rol||0===l&&s.a.createElement(ne,{count:0},s.a.createElement(b.a,{disabled:0===l,style:{marginLeft:10},type:"primary",shape:"circle",icon:"notification"})),s.a.createElement(E.a,{overlay:Pe,placement:"bottomRight"},s.a.createElement(b.a,{style:{marginLeft:10},type:"primary",shape:"circle",icon:"global"})),s.a.createElement(E.a,{overlay:we,placement:"bottomRight"},s.a.createElement(b.a,{style:{marginLeft:10},type:"primary",shape:"circle",icon:"user"}))," "))," ",s.a.createElement(pe,{style:{margin:"0 16px"}},s.a.createElement(T.d,null,s.a.createElement(T.b,{exact:!0,path:"/dashboard",render:function(){return s.a.createElement(A,{user:a.user})}}),s.a.createElement(T.b,{exact:!0,path:"/dashboard/users",render:function(){return s.a.createElement(U,{userLogin:a.user})}}),s.a.createElement(T.b,{exact:!0,path:"/dashboard/users/:rol/:id",render:function(){return s.a.createElement(A,{userLogin:a.user})}}),s.a.createElement(T.b,{exact:!0,path:"/dashboard/process-services",render:function(){return s.a.createElement(C,{userLogin:a.user,typeOfUser:a.user.typeOfUser,changeFileID:ye,process:t,allowedFiles:w,defaultValue:xe,selectProcess:je})}}),s.a.createElement(T.b,{exact:!0,path:"/dashboard/process-services/new",render:function(){return s.a.createElement(C,{userLogin:a.user,typeOfUser:a.user.typeOfUser,changeFileID:ye,process:t,allowedFiles:w,defaultValue:xe,selectProcess:je,newProcess:!0})}}),s.a.createElement(T.b,{exact:!0,path:"/dashboard/process-services/:uuid/success",render:function(){return s.a.createElement(M,{dashboard:!0})}}),s.a.createElement(T.b,{exact:!0,path:"/dashboard/process-services/:uuid/cancel",render:function(){return s.a.createElement(W,{dashboard:!0})}}),s.a.createElement(T.b,{exact:!0,path:"/dashboard/process-services/:uuid/error",render:function(){return s.a.createElement(_,{dashboard:!0})}}),s.a.createElement(T.b,{exact:!0,path:"/dashboard/profile",component:F}),s.a.createElement(T.b,{exact:!0,path:"/dashboard/stats/:userId",render:function(){return s.a.createElement(Q,{user:a.user})}}),s.a.createElement(T.b,{exact:!0,path:"/dashboard/stats",render:function(){return s.a.createElement(Q,{user:a.user})}}),s.a.createElement(S,{exact:!0,path:"/dashboard/configuration",user:a.user,component:I}),s.a.createElement(S,{exact:!0,path:"/dashboard/services",user:a.user,component:q}),s.a.createElement(S,{exact:!0,path:"/dashboard/nodes",user:a.user,component:R}),s.a.createElement(S,{exact:!0,path:"/dashboard/engines",user:a.user,client:!0,component:H}),s.a.createElement(S,{exact:!0,client:!0,path:"/dashboard/engines/user/:userId",user:a.user,component:H}),s.a.createElement(S,{exact:!0,user:a.user,client:!0,path:"/dashboard/models",component:L}),s.a.createElement(S,{exact:!0,path:"/dashboard/eds",user:a.user,component:D}),s.a.createElement(S,{exact:!0,path:"/dashboard/eds/:filter/:id",user:a.user,component:D}),s.a.createElement(T.b,{exact:!0,path:"/dashboard/404",render:function(){return s.a.createElement(N,{dashboard:!0})}}),s.a.createElement(T.a,{to:"/dashboard/404"}))),s.a.createElement(he,{style:{textAlign:"center"}},ie.a[ie.a.default].footer)))})))},444:function(e,n,t){"use strict";t.d(n,"jb",function(){return s}),t.d(n,"nb",function(){return u}),t.d(n,"mb",function(){return l}),t.d(n,"D",function(){return d}),t.d(n,"Z",function(){return m}),t.d(n,"Q",function(){return f}),t.d(n,"rb",function(){return p}),t.d(n,"B",function(){return h}),t.d(n,"E",function(){return g}),t.d(n,"u",function(){return b}),t.d(n,"i",function(){return k}),t.d(n,"kb",function(){return x}),t.d(n,"db",function(){return v}),t.d(n,"ib",function(){return E}),t.d(n,"ab",function(){return O}),t.d(n,"cb",function(){return T}),t.d(n,"bb",function(){return j}),t.d(n,"U",function(){return y}),t.d(n,"O",function(){return w}),t.d(n,"P",function(){return P}),t.d(n,"F",function(){return z}),t.d(n,"a",function(){return S}),t.d(n,"v",function(){return A}),t.d(n,"X",function(){return C}),t.d(n,"V",function(){return F}),t.d(n,"N",function(){return I}),t.d(n,"M",function(){return R}),t.d(n,"G",function(){return L}),t.d(n,"C",function(){return U}),t.d(n,"k",function(){return B}),t.d(n,"fb",function(){return D}),t.d(n,"qb",function(){return q}),t.d(n,"hb",function(){return H}),t.d(n,"h",function(){return Q}),t.d(n,"Y",function(){return N}),t.d(n,"f",function(){return W}),t.d(n,"w",function(){return _}),t.d(n,"eb",function(){return M}),t.d(n,"l",function(){return G}),t.d(n,"H",function(){return K}),t.d(n,"lb",function(){return V}),t.d(n,"L",function(){return J}),t.d(n,"e",function(){return X}),t.d(n,"q",function(){return Y}),t.d(n,"z",function(){return Z}),t.d(n,"t",function(){return $}),t.d(n,"gb",function(){return ee}),t.d(n,"K",function(){return ne}),t.d(n,"T",function(){return te}),t.d(n,"d",function(){return ae}),t.d(n,"ob",function(){return re}),t.d(n,"j",function(){return ce}),t.d(n,"p",function(){return oe}),t.d(n,"I",function(){return ie}),t.d(n,"b",function(){return se}),t.d(n,"n",function(){return ue}),t.d(n,"x",function(){return le}),t.d(n,"r",function(){return de}),t.d(n,"R",function(){return me}),t.d(n,"J",function(){return fe}),t.d(n,"c",function(){return pe}),t.d(n,"o",function(){return he}),t.d(n,"y",function(){return ge}),t.d(n,"A",function(){return be}),t.d(n,"g",function(){return ke}),t.d(n,"m",function(){return xe}),t.d(n,"s",function(){return ve}),t.d(n,"W",function(){return Ee}),t.d(n,"S",function(){return Oe}),t.d(n,"pb",function(){return Te});var a=t(122),r=t(121),c=t(43),o=t(632),i=c.a[c.a.default].hostApi,s=function(e){e?o.defaults.headers.common["x-access-token"]=e:delete o.defaults.headers.common["x-access-token"]},u=function(e){return o({method:"post",url:"".concat(i,"/api/auth/signup"),data:e})},l=function(e){return o({method:"post",url:"".concat(i,"/api/auth/signin"),data:e})},d=function(){return o.get("".concat(i,"/api/engines"))},m=function(){return o.get("".concat(i,"/api/engines/load"))},f=function(e){return o.get("".concat(i,"/api/process/").concat(e))},p=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o.get("".concat(i,"/api/process/").concat(e))},h=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o.get("".concat(i,"/api/engines/user"),{cancelToken:e.token})},g=function(){return o.get("".concat(i,"/api/typeOfPermits/engines"))},b=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o.get("".concat(i,"/api/file"),{responseType:"blob",params:Object(a.a)({},e)})},k=function(){return o.delete("".concat(i,"/api/notification"))},x=function(e){return o({method:"put",url:"".concat(i,"/api/process/downloaded"),data:e})},v=function(e){return o({method:"put",url:"".concat(i,"/api/process/removed"),data:e})},E=function(e){return o({method:"post",url:"".concat(i,"/api/process_file"),data:e})},O=function(e){return o({method:"post",url:"".concat(i,"/api/process/processFile"),data:e})},T=function(e){return o({method:"post",url:"".concat(i,"/api/process/quoteFile"),data:e})},j=function(e){return o({method:"post",url:"".concat(i,"/api/process/processFileAfterQuoteFile"),data:e})},y=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o.get("".concat(i,"/api/process/user"),{cancelToken:e.token})},w=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o.get("".concat(i,"/api/process/process"),{cancelToken:e.token})},P=function(e){return o.get("".concat(i,"/api/process/getProcessByListId"),{params:Object(a.a)({},e)})},z=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o.get("".concat(i,"/api/billing"),{params:Object(a.a)({},e)})},S=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"post",url:"".concat(i,"/api/billing"),data:Object(a.a)({},e)})},A=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"put",url:"".concat(i,"/api/billing"),data:Object(a.a)({},e)})},C=function(){var e=r.a.getToken();return o.defaults.headers.common["x-access-token"]=e,o.get("".concat(i,"/api/users/listAll"))},F=function(){var e=r.a.getToken();return o.defaults.headers.common["x-access-token"]=e,o.get("".concat(i,"/api/users/dashboard/user"))},I=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"post",url:"".concat(i,"/api/users/dashboard/user"),data:{id:e}})},R=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"post",url:"".concat(i,"/api/users/dashboard/client"),data:{id:e}})},L=function(){var e=r.a.getToken();return o.defaults.headers.common["x-access-token"]=e,o.get("".concat(i,"/api/users/dashboard/client"))},U=function(){var e=r.a.getToken();return o.defaults.headers.common["x-access-token"]=e,o.get("".concat(i,"/api/users/dashboard/admin"))},B=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"post",url:"".concat(i,"/api/users/create"),data:e})},D=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"put",url:"".concat(i,"/api/users/remove"),data:e})},q=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"put",url:"".concat(i,"/api/users/update"),data:e})},H=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"put",url:"".concat(i,"/api/users/profile"),data:e})},Q=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"put",url:"".concat(i,"/api/users/password"),data:e})},N=function(){var e=r.a.getToken();return o.defaults.headers.common["x-access-token"]=e,o.get("".concat(i,"/api/typeOfPermits/list"))},W=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"post",url:"".concat(i,"/api/typeOfPermits/add"),data:e})},_=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"put",url:"".concat(i,"/api/typeOfPermits/edit"),data:e})},M=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"put",url:"".concat(i,"/api/typeOfPermits/remove"),data:e})},G=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"put",url:"".concat(i,"/api/typeOfPermits/default"),data:e})},K=function(){var e=r.a.getToken();return o.defaults.headers.common["x-access-token"]=e,o.get("".concat(i,"/api/configuration"))},V=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"put",url:"".concat(i,"/api/email"),data:e})},J=function(){var e=r.a.getToken();return o.defaults.headers.common["x-access-token"]=e,o.get("".concat(i,"/api/corp/nodes"))},X=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"post",url:"".concat(i,"/api/corp/nodes"),data:Object(a.a)({},e)})},Y=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"delete",url:"".concat(i,"/api/corp/nodes"),data:Object(a.a)({},e)})},Z=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"put",url:"".concat(i,"/api/corp/nodes/enabled"),data:Object(a.a)({},e)})},$=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"put",url:"".concat(i,"/api/corp/nodes/disabled"),data:Object(a.a)({},e)})},ee=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"put",url:"".concat(i,"/api/corp/nodes/restart"),data:Object(a.a)({},e)})},ne=function(){var e=r.a.getToken();return o.defaults.headers.common["x-access-token"]=e,o.get("".concat(i,"/api/corp/models"))},te=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o.get("".concat(i,"/api/corp/models/trainings"),{params:Object(a.a)({},e)})},ae=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"post",url:"".concat(i,"/api/corp/models"),data:Object(a.a)({},e)})},re=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"post",url:"".concat(i,"/api/corp/models/train"),data:Object(a.a)({},e)})},ce=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"put",url:"".concat(i,"/api/corp/models"),data:Object(a.a)({},e)})},oe=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"delete",url:"".concat(i,"/api/corp/models"),data:Object(a.a)({},e)})},ie=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o.get("".concat(i,"/api/corp/eds"),{params:Object(a.a)({},e)})},se=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"post",url:"".concat(i,"/api/corp/eds"),data:Object(a.a)({},e)})},ue=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"delete",url:"".concat(i,"/api/corp/eds"),data:Object(a.a)({},e)})},le=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"put",url:"".concat(i,"/api/corp/eds/enabled"),data:Object(a.a)({},e)})},de=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"put",url:"".concat(i,"/api/corp/eds/disabled"),data:Object(a.a)({},e)})},me=function(){var e=r.a.getToken();return o.defaults.headers.common["x-access-token"]=e,o.get("".concat(i,"/api/corp/services"),{params:{}})},fe=function(){var e=r.a.getToken();return o.defaults.headers.common["x-access-token"]=e,o.get("".concat(i,"/api/corp/engines"),{params:{}})},pe=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"post",url:"".concat(i,"/api/corp/engines"),data:Object(a.a)({},e)})},he=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"delete",url:"".concat(i,"/api/corp/engines"),data:Object(a.a)({},e)})},ge=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"put",url:"".concat(i,"/api/corp/engines/enabled"),data:Object(a.a)({},e)})},be=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o.get("".concat(i,"/api/corp/engines/users/").concat(e),{params:{}})},ke=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"post",url:"".concat(i,"/api/corp/engines/users"),data:Object(a.a)({},e)})},xe=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"put",url:"".concat(i,"/api/corp/engines/users"),data:Object(a.a)({},e)})},ve=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"put",url:"".concat(i,"/api/corp/engines/disabled"),data:Object(a.a)({},e)})},Ee=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"post",url:"".concat(i,"/api/corp/engines/grantAll"),data:Object(a.a)({},e)})},Oe=function(e,n){var t=r.a.getToken();o.defaults.headers.common["x-access-token"]=t;var c={method:"post",url:"".concat(i,"/api/getStats"),data:Object(a.a)({},e)};return n&&n.token&&(c.cancelToken=n.token),o(c)},Te=function(e){var n=r.a.getToken();return o.defaults.headers.common["x-access-token"]=n,o({method:"post",url:"".concat(i,"/api/translate"),data:Object(a.a)({},e)})}},509:function(e,n,t){"use strict";var a={hasErrors:function(e){return Object.keys(e).some(function(n){return e[n]})},getBase64:function(e){return new Promise(function(n,t){var a=new FileReader;a.readAsDataURL(e);var r={fileName:e.name,fileType:e.type};a.onload=function(){r.file=a.result,n(r)},a.onerror=function(e){t(e)}})},checkFile:function(e,n){var t=e.name.substr(e.name.lastIndexOf(".")+1);return!!new RegExp(n,"gi").test(t)},getStatus:function(e){return(e=parseInt(e))<0?"Processing Error":3===e?"Waiting":5===e?"Waiting Quoting":6===e?"Quoting":7===e?"Quotes Ready":17===e?"Pending Accept/Reject":20===e?"Preprocessing":30===e?"Processing":40===e?"PostProcessing":100===e?"Finished":110===e||120===e?"Downloaded":"Waiting"},languages:{"en-gb":"English (UK)","en-GB":"English (UK)","en-us":"English (USA)","en-US":"English (USA)","pt-br":"Portuguese Brazil","pt-pt":"Portuguese Portugal","zh-cn":"Simplified Chinese","zh-tw":"Traditional Chinese",am:"Amharic",ar:"Arabic",auto:"Auto",bg:"Bulgarian",bn:"Bengali",ca:"Catalan",chr:"Cherokee",cs:"Czech",cy:"Welsh",da:"Danish",de:"German",el:"Greek",en:"English",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Persian",fi:"Finnish",fil:"Filipino",fr:"French",gu:"Gujarati",he:"Hebrew",hi:"Hindi",hr:"Croatian",hu:"Hungarian",id:"Indonesian",is:"Icelandic",it:"Italian",iw:"Hebrew",ja:"Japanese",kn:"Kannada",ko:"Korean",lt:"Lithuanian",lv:"Latvian",ml:"Malayalam",mr:"Marathi",ms:"Malay",nl:"Dutch",no:"Norwegian",pl:"Polish",pp:"Portuguese Portugal",pt:"Portuguese Brazil",ro:"Romanian",ru:"Russian",sk:"Slovak",sl:"Slovenian",sr:"Serbian",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",th:"Thai",tr:"Turkish",uk:"Ukrainian",ur:"Urdu",va:"Valencian",vi:"Vietnamese",zh:"Simplified Chinese"},getStatusByText:function(e){return{processing_error:"Processing Error",waiting:"Waiting",waiting_quoting:"Waiting Quoting",quoting:"Quoting",quote_ready:"Quotes Ready",pending_accept_reject:"Pending Accept/Reject",preprocessing:"Pre processing",processing:"Processing",post_processing:"Post Processing",finished:"Finished",downloaded:"Downloaded"}[e]}};n.a=a},741:function(e,n,t){"use strict";t.d(n,"a",function(){return u});var a=t(0),r=t.n(a),c=t(1086),o=t(43),i=function(){return r.a.createElement(c.Helmet,null,r.a.createElement("title",null,o.a[o.a.default].title),r.a.createElement("link",{rel:"icon",href:"//img1.wsimg.com/isteam/ip/18813734-a6ed-4028-83ae-2c4c50ad0dd0/favicon/df1025de-4e50-4a59-99b1-a422ac836a4a.png/:/rs=w:16,h:16,m",sizes:"16x16"}),r.a.createElement("link",{rel:"icon",href:"//img1.wsimg.com/isteam/ip/18813734-a6ed-4028-83ae-2c4c50ad0dd0/favicon/df1025de-4e50-4a59-99b1-a422ac836a4a.png/:/rs=w:24,h:24,m",sizes:"24x24"}),r.a.createElement("link",{rel:"icon",href:"//img1.wsimg.com/isteam/ip/18813734-a6ed-4028-83ae-2c4c50ad0dd0/favicon/df1025de-4e50-4a59-99b1-a422ac836a4a.png/:/rs=w:32,h:32,m",sizes:"32x32"}),r.a.createElement("link",{rel:"icon",href:"//img1.wsimg.com/isteam/ip/18813734-a6ed-4028-83ae-2c4c50ad0dd0/favicon/df1025de-4e50-4a59-99b1-a422ac836a4a.png/:/rs=w:48,h:48,m",sizes:"48x48"}),r.a.createElement("link",{rel:"icon",href:"//img1.wsimg.com/isteam/ip/18813734-a6ed-4028-83ae-2c4c50ad0dd0/favicon/df1025de-4e50-4a59-99b1-a422ac836a4a.png/:/rs=w:64,h:64,m",sizes:"64x64"}),r.a.createElement("link",{rel:"apple-touch-icon-precomposed",href:"//img1.wsimg.com/isteam/ip/18813734-a6ed-4028-83ae-2c4c50ad0dd0/favicon/df1025de-4e50-4a59-99b1-a422ac836a4a.png/:/rs=w:57,h:57,m",sizes:"57x57"}),r.a.createElement("link",{rel:"apple-touch-icon",href:"//img1.wsimg.com/isteam/ip/18813734-a6ed-4028-83ae-2c4c50ad0dd0/favicon/df1025de-4e50-4a59-99b1-a422ac836a4a.png/:/rs=w:144,h:144,m",sizes:"144x144"}),r.a.createElement("link",{rel:"apple-touch-icon",href:"//img1.wsimg.com/isteam/ip/18813734-a6ed-4028-83ae-2c4c50ad0dd0/favicon/df1025de-4e50-4a59-99b1-a422ac836a4a.png/:/rs=w:167,h:167,m",sizes:"167x167"}),r.a.createElement("link",{rel:"apple-touch-icon",href:"//img1.wsimg.com/isteam/ip/18813734-a6ed-4028-83ae-2c4c50ad0dd0/favicon/df1025de-4e50-4a59-99b1-a422ac836a4a.png/:/rs=w:180,h:180,m",sizes:"180x180"}))},s=function(){return r.a.createElement(c.Helmet,null,r.a.createElement("title",null,o.a[o.a.default].title),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/favicons/apple-icon-57x57.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/favicons/apple-icon-60x60.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/favicons/apple-icon-72x72.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/favicons/apple-icon-76x76.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/favicons/apple-icon-114x114.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/favicons/apple-icon-120x120.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/favicons/apple-icon-144x144.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/favicons/apple-icon-152x152.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-icon-180x180.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-icon-192x192.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicons/favicon-96x96.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),r.a.createElement("link",{rel:"manifest",href:"/favicons/manifest.json"}),r.a.createElement("meta",{name:"msapplication-TileColor",content:"#ffffff"}),r.a.createElement("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),r.a.createElement("meta",{name:"theme-color",content:"#ffffff"}))},u=function(){return r.a.createElement("div",null,"autheticity"===o.a.default&&r.a.createElement(i,null),"pangeanic"===o.a.default&&r.a.createElement(s,null))}}}]);
//# sourceMappingURL=31.ba12f691.chunk.js.map