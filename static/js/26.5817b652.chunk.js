(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1163:function(e,t,a){"use strict";a.r(t);var n=a(439),r=a.n(n),c=a(440),o=a(34),s=a(35),l=a(38),i=a(36),u=a(37),m=a(0),p=a.n(m),d=a(538),f=a(409),v=a(402),y=a(70),E=a(39),h=a(549),b=a(436),g=a(494),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),u=0;u<n;u++)s[u]=arguments[u];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={process:null,loading:!0},a.componentDidMount=function(){a.fetchProcess()},a.fetchProcess=Object(c.a)(r.a.mark(function e(){var t,n,c,o,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props,n=t.dashboard,c=t.history,!(o=t.match.params)||!o.uuid){e.next=6;break}return e.next=4,Object(b.Ab)(o.uuid);case 4:(s=e.sent).data?a.setState({process:s.data}):n&&c.push("/dashboard/process-services");case 6:a.setState({loading:!1});case 7:case"end":return e.stop()}},e)})),a.goBack=function(){var e=a.props,t=e.dashboard,n=e.history;return t?n.push("/dashboard/process-services"):n.push("/")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.intl.messages;return p.a.createElement(d.a,{type:"bottom",className:"ui-animate"},p.a.createElement(v.a,{size:"large",tip:"Loading...",spinning:this.state.loading},p.a.createElement("div",{key:"1",className:"row justify-content-md-center"},p.a.createElement("div",{className:"form-card__body col-md-5 p-1"},p.a.createElement("article",{className:"article"},p.a.createElement("div",{className:"box box-default"},p.a.createElement("div",{className:"box-body p-4"},p.a.createElement("section",{className:"form-v1-container"},p.a.createElement(function(){return p.a.createElement("article",{className:"pricing-table-v1"},p.a.createElement("header",null," ",p.a.createElement(h.c,null,p.a.createElement(f.a,{type:"check-circle"})," ",t.payment.cancel.canceled)," "),p.a.createElement("p",{className:"pricing-price"},t.payment.cancel.paymentProcessCanceled.toUpperCase()),p.a.createElement("p",{className:"pricing-price-detail"}),p.a.createElement("div",{className:"pricing-plan-details"},p.a.createElement("ul",null,p.a.createElement("li",null,p.a.createElement("div",{className:"row justify-content-md-center"},p.a.createElement("div",{className:"col-md-6 p-1"},p.a.createElement(f.a,{type:"check"})," ",t.payment.cancel.filename.toUpperCase()),p.a.createElement("div",{className:"col-md-6 p-1"},e.state.process?e.state.process.fileName:null))),p.a.createElement("li",null,p.a.createElement("div",{className:"row justify-content-md-center"},p.a.createElement("div",{className:"col-md-6 p-1"},p.a.createElement(f.a,{type:"check"})," ",t.payment.cancel.nameOfProcess.toUpperCase()),p.a.createElement("div",{className:"col-md-6 p-1"},e.state.process?(a=e.state.process.processName).charAt(0).toUpperCase()+a.slice(1):null))),p.a.createElement("li",null,p.a.createElement("div",{className:"row justify-content-md-center"},p.a.createElement("div",{className:"col-md-6 p-1"},p.a.createElement(f.a,{type:"check"})," ",t.payment.cancel.language.toUpperCase()),p.a.createElement("div",{className:"col-md-6 p-1"},e.state.process?p.a.createElement(p.a.Fragment,null,e.state.process.engineSource.toUpperCase(),p.a.createElement(f.a,{type:"arrow-right"}),e.state.process.engineTarget.toUpperCase()):null))),p.a.createElement("li",null,p.a.createElement("div",{className:"row justify-content-md-center"},p.a.createElement("div",{className:"col-md-6 p-1"},p.a.createElement(f.a,{type:"check"})," ",t.payment.cancel.status.toUpperCase()),p.a.createElement("div",{className:"col-md-6 p-1"},e.state.process?g.a.getStatusByText(e.state.process.status):null))),p.a.createElement("li",null,p.a.createElement("div",{className:"row justify-content-md-center"},p.a.createElement("div",{className:"col-md-6 p-1"},p.a.createElement(f.a,{type:"check"})," ",t.payment.cancel.quotedPrice.toUpperCase()),p.a.createElement("div",{className:"col-md-6 p-1"},e.state.process?p.a.createElement(p.a.Fragment,null,p.a.createElement(f.a,{type:"euro"})," \xa0",e.state.process.quoteSelected.price.toFixed(2)):null))))),p.a.createElement("footer",null,p.a.createElement(h.a,{onClick:e.goBack,type:"primary",className:"btn-cta w-100"},t.default.goBack.toUpperCase())));var a},null)))))))))}}]),t}(p.a.Component);t.default=Object(E.g)(Object(y.c)(N))},443:function(e,t,a){"use strict";t.__esModule=!0;var n,r=a(581),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return(0,c.default)(e)}},549:function(e,t,a){"use strict";a.d(t,"b",function(){return u}),a.d(t,"d",function(){return m}),a.d(t,"c",function(){return p}),a.d(t,"a",function(){return d});var n=a(108),r=a(71),c=a(427);function o(){var e=Object(n.a)(["\n  &.ant-btn-primary {\n    background-color: #fa8c15 !important;\n    border-color: #fbb878 !important;\n  }\n"]);return o=function(){return e},e}function s(){var e=Object(n.a)(["\n  color: #fa8c16 !important;\n"]);return s=function(){return e},e}function l(){var e=Object(n.a)(["\n  color: #ff4d4f !important;\n"]);return l=function(){return e},e}function i(){var e=Object(n.a)(["\n  color: #d46b08 !important;\n"]);return i=function(){return e},e}var u=r.c.h2(i()),m=r.c.h2(l()),p=r.c.h2(s()),d=Object(r.c)(c.a)(o())},581:function(e,t,a){e.exports={default:a(582),__esModule:!0}},582:function(e,t,a){a(574),a(583),e.exports=a(72).Array.from},583:function(e,t,a){"use strict";var n=a(187),r=a(179),c=a(186),o=a(584),s=a(585),l=a(195),i=a(586),u=a(587);r(r.S+r.F*!a(589)(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,r,m,p=c(e),d="function"==typeof this?this:Array,f=arguments.length,v=f>1?arguments[1]:void 0,y=void 0!==v,E=0,h=u(p);if(y&&(v=n(v,f>2?arguments[2]:void 0,2)),void 0==h||d==Array&&s(h))for(a=new d(t=l(p.length));t>E;E++)i(a,E,y?v(p[E],E):p[E]);else for(m=h.call(p),a=new d;!(r=m.next()).done;E++)i(a,E,y?o(m,v,[r.value,E],!0):r.value);return a.length=E,a}})},584:function(e,t,a){var n=a(180);e.exports=function(e,t,a,r){try{return r?t(n(a)[0],a[1]):t(a)}catch(o){var c=e.return;throw void 0!==c&&n(c.call(e)),o}}},585:function(e,t,a){var n=a(492),r=a(442)("iterator"),c=Array.prototype;e.exports=function(e){return void 0!==e&&(n.Array===e||c[r]===e)}},586:function(e,t,a){"use strict";var n=a(178),r=a(185);e.exports=function(e,t,a){t in e?n.f(e,t,r(0,a)):e[t]=a}},587:function(e,t,a){var n=a(588),r=a(442)("iterator"),c=a(492);e.exports=a(72).getIteratorMethod=function(e){if(void 0!=e)return e[r]||e["@@iterator"]||c[n(e)]}},588:function(e,t,a){var n=a(189),r=a(442)("toStringTag"),c="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,a,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=function(e,t){try{return e[t]}catch(a){}}(t=Object(e),r))?a:c?n(t):"Object"==(o=n(t))&&"function"==typeof t.callee?"Arguments":o}},589:function(e,t,a){var n=a(442)("iterator"),r=!1;try{var c=[7][n]();c.return=function(){r=!0},Array.from(c,function(){throw 2})}catch(o){}e.exports=function(e,t){if(!t&&!r)return!1;var a=!1;try{var c=[7],s=c[n]();s.next=function(){return{done:a=!0}},c[n]=function(){return s},e(c)}catch(o){}return a}}}]);
//# sourceMappingURL=26.5817b652.chunk.js.map