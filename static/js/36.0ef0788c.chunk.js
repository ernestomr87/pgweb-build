(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1090:function(e,a,t){"use strict";t.r(a);var c=t(445),n=t.n(c),r=t(446),s=t(34),l=t(35),o=t(38),m=t(36),i=t(37),p=t(0),u=t.n(p),d=t(558),f=t(410),E=t(402),v=t(70),b=t(39),y=t(569),h=t(444),N=t(509),g=function(e){function a(){var e,t;Object(s.a)(this,a);for(var c=arguments.length,l=new Array(c),i=0;i<c;i++)l[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={process:null,loading:!0},t.componentDidMount=function(){t.fetchProcess()},t.fetchProcess=Object(r.a)(n.a.mark(function e(){var a,c,r,s,l;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.props,c=a.dashboard,r=a.history,!(s=a.match.params)||!s.uuid){e.next=6;break}return e.next=4,Object(h.rb)(s.uuid);case 4:(l=e.sent).data?t.setState({process:l.data}):c&&r.push("/dashboard/process-services");case 6:t.setState({loading:!1});case 7:case"end":return e.stop()}},e)})),t.goBack=function(){var e=t.props,a=e.dashboard,c=e.history;return a?c.push("/dashboard/process-services"):c.push("/")},t}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.props.intl.messages;return u.a.createElement(d.a,{type:"bottom",className:"ui-animate"},u.a.createElement(E.a,{size:"large",tip:"Loading...",spinning:this.state.loading},u.a.createElement("div",{key:"1",className:"row justify-content-md-center"},u.a.createElement("div",{className:"form-card__body col-md-5 p-1"},u.a.createElement("article",{className:"article"},u.a.createElement("div",{className:"box box-default"},u.a.createElement("div",{className:"box-body p-4"},u.a.createElement("section",{className:"form-v1-container"},u.a.createElement(function(){return u.a.createElement("article",{className:"pricing-table-v1"},u.a.createElement("header",null," ",u.a.createElement(y.c,null,u.a.createElement(f.a,{type:"check-circle"})," ",a.payment.cancel.canceled)," "),u.a.createElement("p",{className:"pricing-price"},a.payment.cancel.paymentProcessCanceled.toUpperCase()),u.a.createElement("p",{className:"pricing-price-detail"}),u.a.createElement("div",{className:"pricing-plan-details"},u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement("div",{className:"row justify-content-md-center"},u.a.createElement("div",{className:"col-md-6 p-1"},u.a.createElement(f.a,{type:"check"})," ",a.payment.cancel.filename.toUpperCase()),u.a.createElement("div",{className:"col-md-6 p-1"},e.state.process?e.state.process.fileName:null))),u.a.createElement("li",null,u.a.createElement("div",{className:"row justify-content-md-center"},u.a.createElement("div",{className:"col-md-6 p-1"},u.a.createElement(f.a,{type:"check"})," ",a.payment.cancel.nameOfProcess.toUpperCase()),u.a.createElement("div",{className:"col-md-6 p-1"},e.state.process?(t=e.state.process.processName).charAt(0).toUpperCase()+t.slice(1):null))),u.a.createElement("li",null,u.a.createElement("div",{className:"row justify-content-md-center"},u.a.createElement("div",{className:"col-md-6 p-1"},u.a.createElement(f.a,{type:"check"})," ",a.payment.cancel.language.toUpperCase()),u.a.createElement("div",{className:"col-md-6 p-1"},e.state.process?u.a.createElement(u.a.Fragment,null,e.state.process.engineSource.toUpperCase(),u.a.createElement(f.a,{type:"arrow-right"}),e.state.process.engineTarget.toUpperCase()):null))),u.a.createElement("li",null,u.a.createElement("div",{className:"row justify-content-md-center"},u.a.createElement("div",{className:"col-md-6 p-1"},u.a.createElement(f.a,{type:"check"})," ",a.payment.cancel.status.toUpperCase()),u.a.createElement("div",{className:"col-md-6 p-1"},e.state.process?N.a.getStatusByText(e.state.process.status):null))),u.a.createElement("li",null,u.a.createElement("div",{className:"row justify-content-md-center"},u.a.createElement("div",{className:"col-md-6 p-1"},u.a.createElement(f.a,{type:"check"})," ",a.payment.cancel.quotedPrice.toUpperCase()),u.a.createElement("div",{className:"col-md-6 p-1"},e.state.process?u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,{type:"euro"})," \xa0",e.state.process.quoteSelected.price.toFixed(2)):null))))),u.a.createElement("footer",null,u.a.createElement(y.a,{onClick:e.goBack,type:"primary",className:"btn-cta w-100"},a.default.goBack.toUpperCase())));var t},null)))))))))}}]),a}(u.a.Component);a.default=Object(b.g)(Object(v.c)(g))},569:function(e,a,t){"use strict";t.d(a,"b",function(){return i}),t.d(a,"d",function(){return p}),t.d(a,"c",function(){return u}),t.d(a,"a",function(){return d});var c=t(108),n=t(72),r=t(450);function s(){var e=Object(c.a)(["\n  &.ant-btn-primary {\n    background-color: #fa8c15 !important;\n    border-color: #fbb878 !important;\n  }\n"]);return s=function(){return e},e}function l(){var e=Object(c.a)(["\n  color: #fa8c16 !important;\n"]);return l=function(){return e},e}function o(){var e=Object(c.a)(["\n  color: #ff4d4f !important;\n"]);return o=function(){return e},e}function m(){var e=Object(c.a)(["\n  color: #d46b08 !important;\n"]);return m=function(){return e},e}var i=n.c.h2(m()),p=n.c.h2(o()),u=n.c.h2(l()),d=Object(n.c)(r.a)(s())}}]);
//# sourceMappingURL=36.0ef0788c.chunk.js.map