(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1307:function(e,t,a){"use strict";a.r(t);var r=a(442),n=a.n(r),c=a(31),o=a(32),s=a(34),l=a(33),i=a(35),u=a(0),m=a.n(u),p=a(527),d=a(420),f=a(433),v=a(412),y=a(70),E=a(39),h=a(440),b=a(472),g=a(537),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={process:null,loading:!0},a.componentDidMount=function(){a.fetchProcess()},a.fetchProcess=function(){var e,t,r,c,o;return n.a.async(function(s){for(;;)switch(s.prev=s.next){case 0:if(e=a.props,t=e.dashboard,r=e.history,!(c=e.match.params)||!c.uuid){s.next=6;break}return s.next=4,n.a.awrap(Object(h.Cb)(c.uuid));case 4:(o=s.sent).data?a.setState({process:o.data}):t&&r.push("/dashboard/process-services");case 6:a.setState({loading:!1});case 7:case"end":return s.stop()}})},a.goBack=function(){var e=a.props,t=e.dashboard,r=e.history;return t?r.push("/dashboard/process-services"):r.push("/")},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.intl.messages;return m.a.createElement(p.a,{type:"bottom",className:"ui-animate"},m.a.createElement(v.a,{size:"large",tip:"Loading...",spinning:this.state.loading},m.a.createElement("div",{key:"1",className:"row justify-content-md-center"},m.a.createElement("div",{className:"form-card__body col-md-5 p-1"},m.a.createElement("article",{className:"article"},m.a.createElement("div",{className:"box box-default"},m.a.createElement("div",{className:"box-body p-4"},m.a.createElement("section",{className:"form-v1-container"},m.a.createElement(function(){return m.a.createElement("article",{className:"pricing-table-v1"},m.a.createElement("header",null," ",m.a.createElement(g.d,null,m.a.createElement(d.a,{type:"check-circle"})," ",t.payment.error.canceled)," "),m.a.createElement("p",{className:"pricing-price"},t.payment.error.paymentProcessCanceled.toUpperCase()),m.a.createElement("p",{className:"pricing-price-detail"}),m.a.createElement("div",{className:"pricing-plan-details"},m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("div",{className:"row justify-content-md-center"},m.a.createElement("div",{className:"col-md-6 p-1"},m.a.createElement(d.a,{type:"check"})," ",t.payment.cancel.filename.toUpperCase()),m.a.createElement("div",{className:"col-md-6 p-1"},e.state.process?e.state.process.fileName:null))),m.a.createElement("li",null,m.a.createElement("div",{className:"row justify-content-md-center"},m.a.createElement("div",{className:"col-md-6 p-1"},m.a.createElement(d.a,{type:"check"})," ",t.payment.cancel.nameOfProcess.toUpperCase()),m.a.createElement("div",{className:"col-md-6 p-1"},e.state.process?(a=e.state.process.processName).charAt(0).toUpperCase()+a.slice(1):null))),m.a.createElement("li",null,m.a.createElement("div",{className:"row justify-content-md-center"},m.a.createElement("div",{className:"col-md-6 p-1"},m.a.createElement(d.a,{type:"check"})," ",t.payment.cancel.language.toUpperCase()),m.a.createElement("div",{className:"col-md-6 p-1"},e.state.process?m.a.createElement(m.a.Fragment,null,e.state.process.engineSource.toUpperCase(),m.a.createElement(d.a,{type:"arrow-right"}),e.state.process.engineTarget.toUpperCase()):null))),m.a.createElement("li",null,m.a.createElement("div",{className:"row justify-content-md-center"},m.a.createElement("div",{className:"col-md-6 p-1"},m.a.createElement(d.a,{type:"check"})," ",t.payment.cancel.status.toUpperCase()),m.a.createElement("div",{className:"col-md-6 p-1"},e.state.process?b.a.getStatusByText(e.state.process.status):null))),m.a.createElement("li",null,m.a.createElement("div",{className:"row justify-content-md-center"},m.a.createElement("div",{className:"col-md-6 p-1"},m.a.createElement(d.a,{type:"check"})," ",t.payment.cancel.quotedPrice.toUpperCase()),m.a.createElement("div",{className:"col-md-6 p-1"},e.state.process&&null!==e.state.process.quoteSelected?m.a.createElement(m.a.Fragment,null,m.a.createElement(d.a,{type:"euro"})," \xa0",e.state.process.quoteSelected.price.toFixed(2)):null))))),m.a.createElement("footer",null,m.a.createElement(f.a,{onClick:e.goBack,type:"danger",className:"btn-cta w-100"},t.default.goBack.toUpperCase())));var a},null)))))))))}}]),t}(m.a.Component);t.default=Object(E.g)(Object(y.c)(N))},533:function(e,t,a){"use strict";t.__esModule=!0;var r,n=a(592),c=(r=n)&&r.__esModule?r:{default:r};t.default=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return(0,c.default)(e)}},537:function(e,t,a){"use strict";a.d(t,"b",function(){return u}),a.d(t,"d",function(){return m}),a.d(t,"c",function(){return p}),a.d(t,"a",function(){return d});var r=a(109),n=a(71),c=a(433);function o(){var e=Object(r.a)(["\n  &.ant-btn-primary {\n    background-color: #fa8c15 !important;\n    border-color: #fbb878 !important;\n  }\n"]);return o=function(){return e},e}function s(){var e=Object(r.a)(["\n  color: #fa8c16 !important;\n"]);return s=function(){return e},e}function l(){var e=Object(r.a)(["\n  color: #ff4d4f !important;\n"]);return l=function(){return e},e}function i(){var e=Object(r.a)(["\n  color: #d46b08 !important;\n"]);return i=function(){return e},e}var u=n.c.h2(i()),m=n.c.h2(l()),p=n.c.h2(s()),d=Object(n.c)(c.a)(o())},592:function(e,t,a){e.exports={default:a(593),__esModule:!0}},593:function(e,t,a){a(652),a(594),e.exports=a(73).Array.from},594:function(e,t,a){"use strict";var r=a(188),n=a(181),c=a(186),o=a(595),s=a(596),l=a(191),i=a(597),u=a(598);n(n.S+n.F*!a(600)(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,n,m,p=c(e),d="function"==typeof this?this:Array,f=arguments.length,v=f>1?arguments[1]:void 0,y=void 0!==v,E=0,h=u(p);if(y&&(v=r(v,f>2?arguments[2]:void 0,2)),void 0==h||d==Array&&s(h))for(a=new d(t=l(p.length));t>E;E++)i(a,E,y?v(p[E],E):p[E]);else for(m=h.call(p),a=new d;!(n=m.next()).done;E++)i(a,E,y?o(m,v,[n.value,E],!0):n.value);return a.length=E,a}})},595:function(e,t,a){var r=a(184);e.exports=function(e,t,a,n){try{return n?t(r(a)[0],a[1]):t(a)}catch(o){var c=e.return;throw void 0!==c&&r(c.call(e)),o}}},596:function(e,t,a){var r=a(504),n=a(453)("iterator"),c=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||c[n]===e)}},597:function(e,t,a){"use strict";var r=a(182),n=a(185);e.exports=function(e,t,a){t in e?r.f(e,t,n(0,a)):e[t]=a}},598:function(e,t,a){var r=a(599),n=a(453)("iterator"),c=a(504);e.exports=a(73).getIteratorMethod=function(e){if(void 0!=e)return e[n]||e["@@iterator"]||c[r(e)]}},599:function(e,t,a){var r=a(190),n=a(453)("toStringTag"),c="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,a,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=function(e,t){try{return e[t]}catch(a){}}(t=Object(e),n))?a:c?r(t):"Object"==(o=r(t))&&"function"==typeof t.callee?"Arguments":o}},600:function(e,t,a){var r=a(453)("iterator"),n=!1;try{var c=[7][r]();c.return=function(){n=!0},Array.from(c,function(){throw 2})}catch(o){}e.exports=function(e,t){if(!t&&!n)return!1;var a=!1;try{var c=[7],s=c[r]();s.next=function(){return{done:a=!0}},c[r]=function(){return s},e(c)}catch(o){}return a}}}]);
//# sourceMappingURL=26.01db5c95.chunk.js.map