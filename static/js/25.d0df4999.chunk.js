(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1306:function(e,t,a){"use strict";a.r(t);var n=a(442),r=a.n(n),c=a(31),o=a(32),s=a(34),l=a(33),i=a(35),u=a(0),m=a.n(u),p=a(527),d=a(420),f=a(412),v=a(70),y=a(39),E=a(537),h=a(440),b=a(472),g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={process:null,loading:!0},a.componentDidMount=function(){a.fetchProcess()},a.fetchProcess=function(){var e,t,n,c,o;return r.a.async(function(s){for(;;)switch(s.prev=s.next){case 0:if(e=a.props,t=e.dashboard,n=e.history,!(c=e.match.params)||!c.uuid){s.next=6;break}return s.next=4,r.a.awrap(Object(h.Cb)(c.uuid));case 4:(o=s.sent).data?a.setState({process:o.data}):t&&n.push("/dashboard/process-services");case 6:a.setState({loading:!1});case 7:case"end":return s.stop()}})},a.goBack=function(){var e=a.props,t=e.dashboard,n=e.history;return t?n.push("/dashboard/process-services"):n.push("/")},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.intl.messages;return m.a.createElement(p.a,{type:"bottom",className:"ui-animate"},m.a.createElement(f.a,{size:"large",tip:"Loading...",spinning:this.state.loading},m.a.createElement("div",{key:"1",className:"row justify-content-md-center"},m.a.createElement("div",{className:"form-card__body col-md-5 p-1"},m.a.createElement("article",{className:"article"},m.a.createElement("div",{className:"box box-default"},m.a.createElement("div",{className:"box-body p-4"},m.a.createElement("section",{className:"form-v1-container"},m.a.createElement(function(){return m.a.createElement("article",{className:"pricing-table-v1"},m.a.createElement("header",null," ",m.a.createElement(E.c,null,m.a.createElement(d.a,{type:"check-circle"})," ",t.payment.cancel.canceled)," "),m.a.createElement("p",{className:"pricing-price"},t.payment.cancel.paymentProcessCanceled.toUpperCase()),m.a.createElement("p",{className:"pricing-price-detail"}),m.a.createElement("div",{className:"pricing-plan-details"},m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("div",{className:"row justify-content-md-center"},m.a.createElement("div",{className:"col-md-6 p-1"},m.a.createElement(d.a,{type:"check"})," ",t.payment.cancel.filename.toUpperCase()),m.a.createElement("div",{className:"col-md-6 p-1"},e.state.process?e.state.process.fileName:null))),m.a.createElement("li",null,m.a.createElement("div",{className:"row justify-content-md-center"},m.a.createElement("div",{className:"col-md-6 p-1"},m.a.createElement(d.a,{type:"check"})," ",t.payment.cancel.nameOfProcess.toUpperCase()),m.a.createElement("div",{className:"col-md-6 p-1"},e.state.process?(a=e.state.process.processName).charAt(0).toUpperCase()+a.slice(1):null))),m.a.createElement("li",null,m.a.createElement("div",{className:"row justify-content-md-center"},m.a.createElement("div",{className:"col-md-6 p-1"},m.a.createElement(d.a,{type:"check"})," ",t.payment.cancel.language.toUpperCase()),m.a.createElement("div",{className:"col-md-6 p-1"},e.state.process?m.a.createElement(m.a.Fragment,null,e.state.process.engineSource.toUpperCase(),m.a.createElement(d.a,{type:"arrow-right"}),e.state.process.engineTarget.toUpperCase()):null))),m.a.createElement("li",null,m.a.createElement("div",{className:"row justify-content-md-center"},m.a.createElement("div",{className:"col-md-6 p-1"},m.a.createElement(d.a,{type:"check"})," ",t.payment.cancel.status.toUpperCase()),m.a.createElement("div",{className:"col-md-6 p-1"},e.state.process?b.a.getStatusByText(e.state.process.status):null))),m.a.createElement("li",null,m.a.createElement("div",{className:"row justify-content-md-center"},m.a.createElement("div",{className:"col-md-6 p-1"},m.a.createElement(d.a,{type:"check"})," ",t.payment.cancel.quotedPrice.toUpperCase()),m.a.createElement("div",{className:"col-md-6 p-1"},e.state.process?m.a.createElement(m.a.Fragment,null,m.a.createElement(d.a,{type:"euro"})," \xa0",e.state.process.quoteSelected.price.toFixed(2)):null))))),m.a.createElement("footer",null,m.a.createElement(E.a,{onClick:e.goBack,type:"primary",className:"btn-cta w-100"},t.default.goBack.toUpperCase())));var a},null)))))))))}}]),t}(m.a.Component);t.default=Object(y.g)(Object(v.c)(g))},533:function(e,t,a){"use strict";t.__esModule=!0;var n,r=a(592),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return(0,c.default)(e)}},537:function(e,t,a){"use strict";a.d(t,"b",function(){return u}),a.d(t,"d",function(){return m}),a.d(t,"c",function(){return p}),a.d(t,"a",function(){return d});var n=a(109),r=a(71),c=a(433);function o(){var e=Object(n.a)(["\n  &.ant-btn-primary {\n    background-color: #fa8c15 !important;\n    border-color: #fbb878 !important;\n  }\n"]);return o=function(){return e},e}function s(){var e=Object(n.a)(["\n  color: #fa8c16 !important;\n"]);return s=function(){return e},e}function l(){var e=Object(n.a)(["\n  color: #ff4d4f !important;\n"]);return l=function(){return e},e}function i(){var e=Object(n.a)(["\n  color: #d46b08 !important;\n"]);return i=function(){return e},e}var u=r.c.h2(i()),m=r.c.h2(l()),p=r.c.h2(s()),d=Object(r.c)(c.a)(o())},592:function(e,t,a){e.exports={default:a(593),__esModule:!0}},593:function(e,t,a){a(652),a(594),e.exports=a(73).Array.from},594:function(e,t,a){"use strict";var n=a(188),r=a(181),c=a(186),o=a(595),s=a(596),l=a(191),i=a(597),u=a(598);r(r.S+r.F*!a(600)(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,r,m,p=c(e),d="function"==typeof this?this:Array,f=arguments.length,v=f>1?arguments[1]:void 0,y=void 0!==v,E=0,h=u(p);if(y&&(v=n(v,f>2?arguments[2]:void 0,2)),void 0==h||d==Array&&s(h))for(a=new d(t=l(p.length));t>E;E++)i(a,E,y?v(p[E],E):p[E]);else for(m=h.call(p),a=new d;!(r=m.next()).done;E++)i(a,E,y?o(m,v,[r.value,E],!0):r.value);return a.length=E,a}})},595:function(e,t,a){var n=a(184);e.exports=function(e,t,a,r){try{return r?t(n(a)[0],a[1]):t(a)}catch(o){var c=e.return;throw void 0!==c&&n(c.call(e)),o}}},596:function(e,t,a){var n=a(504),r=a(453)("iterator"),c=Array.prototype;e.exports=function(e){return void 0!==e&&(n.Array===e||c[r]===e)}},597:function(e,t,a){"use strict";var n=a(182),r=a(185);e.exports=function(e,t,a){t in e?n.f(e,t,r(0,a)):e[t]=a}},598:function(e,t,a){var n=a(599),r=a(453)("iterator"),c=a(504);e.exports=a(73).getIteratorMethod=function(e){if(void 0!=e)return e[r]||e["@@iterator"]||c[n(e)]}},599:function(e,t,a){var n=a(190),r=a(453)("toStringTag"),c="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,a,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=function(e,t){try{return e[t]}catch(a){}}(t=Object(e),r))?a:c?n(t):"Object"==(o=n(t))&&"function"==typeof t.callee?"Arguments":o}},600:function(e,t,a){var n=a(453)("iterator"),r=!1;try{var c=[7][n]();c.return=function(){r=!0},Array.from(c,function(){throw 2})}catch(o){}e.exports=function(e,t){if(!t&&!r)return!1;var a=!1;try{var c=[7],s=c[n]();s.next=function(){return{done:a=!0}},c[n]=function(){return s},e(c)}catch(o){}return a}}}]);
//# sourceMappingURL=25.d0df4999.chunk.js.map