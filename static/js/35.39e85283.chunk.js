(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1813:function(e,t,a){},1854:function(e,t,a){"use strict";a.r(t);var n=a(460),l=a(108),c=a(0),r=a.n(c),i=a(22),m=a(70),o=a(71),s=a(526),u=a(39),p=a(1849),E=a(1378),d=a(433),y=a(420),f=a(1283),v=a(1844),h=a(531),b=a(590),g=a(1433),x=a(442),N=a.n(x),O=a(42),j=function(e){var t=e.item,a=e.index,n=e.secret,l=e.formValues,c=e.uuid,i=e.loadingPay,m=e.pay;return r.a.createElement("article",{className:"pricing-table-v1"},r.a.createElement("header",{style:{height:80}}," ",r.a.createElement("h2",null,t.option)," "),r.a.createElement("p",{className:"pricing-price"}," \u20ac",t.price.toFixed(2)),r.a.createElement("p",{className:"pricing-price-detail"},"Aspernatur omnis nemo ",r.a.createElement("br",null)," omnis porro cupiditate quaera!"),r.a.createElement("div",{className:"pricing-plan-details",style:{textAlign:"left"}},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(y.a,{type:"check"})," At erat"),r.a.createElement("li",null,r.a.createElement(y.a,{type:"check"})," Sagittis aliquam"),r.a.createElement("li",null,r.a.createElement(y.a,{type:"check"})," Donec enim"),r.a.createElement("li",null,r.a.createElement(y.a,{type:"check"})," Tellus rutrum"))),r.a.createElement("footer",null,r.a.createElement(d.a,{loading:i==="quote".concat(a),onClick:function(){m("quote".concat(a))},className:"btn-cta w-100"},"Get it now")),r.a.createElement("form",{hidden:!0,id:"quote".concat(a),action:"".concat(O.a[O.a.default].hostApi,"/api/payment/pay"),method:"post"},r.a.createElement("input",{type:"text",name:"secret",value:n}),r.a.createElement("input",{type:"text",name:"billing",value:JSON.stringify(l)}),r.a.createElement("input",{type:"text",name:"uuid",value:c}),r.a.createElement("input",{type:"text",name:"quote",value:t.optionid}),r.a.createElement("input",{type:"text",name:"hostClient",value:O.a[O.a.default].hostClient})))},q=function(e){var t=e.item,a=e.index,n=e.secret,l=e.formValues,c=e.uuid,i=e.loadingPay,m=e.pay;return r.a.createElement("article",{className:"pricing-table-v1 pricing-table-highlight"},r.a.createElement("header",{style:{height:80}}," ",r.a.createElement("h2",null,t.option)," "),r.a.createElement("p",{className:"pricing-price"}," \u20ac",t.price.toFixed(2)," "),r.a.createElement("p",{className:"pricing-price-detail"},"Aspernatur omnis nemo ",r.a.createElement("br",null)," omnis porro cupiditate quaera!"),r.a.createElement("div",{className:"pricing-plan-details",style:{textAlign:"left"}},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(y.a,{type:"check"})," Laoreet id"),r.a.createElement("li",null,r.a.createElement(y.a,{type:"check"})," Quis blandit"),r.a.createElement("li",null,r.a.createElement(y.a,{type:"check"})," 100GB Leo vel"),r.a.createElement("li",null,r.a.createElement(y.a,{type:"check"})," 10 Ac felis"))),r.a.createElement("footer",null,r.a.createElement(d.a,{loading:i==="quote".concat(a),onClick:function(){m("quote".concat(a))},className:"btn-cta w-100"},"Get it now")),r.a.createElement("form",{hidden:!0,id:"quote".concat(a),action:"".concat(O.a[O.a.default].hostApi,"/api/payment/pay"),method:"post"},r.a.createElement("input",{type:"text",name:"secret",value:n}),r.a.createElement("input",{type:"text",name:"billing",value:JSON.stringify(l)}),r.a.createElement("input",{type:"text",name:"uuid",value:c}),r.a.createElement("input",{type:"text",name:"quote",value:t.optionid}),r.a.createElement("input",{type:"text",name:"hostClient",value:O.a[O.a.default].hostClient})))},k=function(e){var t=e.processSelected,a=e.secret,l=e.formValues,i=Object(c.useState)(!1),m=Object(n.a)(i,2),o=m[0],s=m[1],u=function(e){return N.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:s(e),document.getElementById(e).submit();case 2:case"end":return t.stop()}})};return t&&t.quotes?r.a.createElement("article",{className:"article"},r.a.createElement("div",{className:"row"},t.quotes.map(function(e,n){var c=n%2===0,i={item:e,index:n,secret:a,formValues:l,uuid:t.uuid,loadingPay:o,pay:u};return r.a.createElement("div",{className:"col-sm-auto col-md-6 col-lg-4 col-xsm-6"},c?r.a.createElement(j,i):r.a.createElement(q,i))}))):r.a.createElement("h1",null,"No Quotes")};a(1813);function w(){var e=Object(l.a)(["\n  margin: 5px;\n"]);return w=function(){return e},e}var S=p.a.Step,C=E.a.Option,V=a(671).default,A={display:"block",height:"30px",lineHeight:"30px"},F={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},I=Object(o.c)(d.a)(w()),L=Object.keys(V).map(function(e){return r.a.createElement(C,{key:e,value:e},V[e].name)});t.default=Object(i.c)(function(e){return{process:e.rootReducer.process}})(v.a.create()(Object(m.c)(Object(u.g)(function(e){var t=e.form,a=e.history,l=e.form.getFieldDecorator,i=e.intl.messages,m=e.process.processSelected,o=Object(c.useState)(0),u=Object(n.a)(o,2),d=u[0],x=u[1],N=Object(c.useState)("0"),O=Object(n.a)(N,2),j=O[0],q=O[1],w=Object(c.useState)(!1),C=Object(n.a)(w,2),G=C[0],J=C[1],P=Object(c.useState)(null),B=Object(n.a)(P,2),D=B[0],Q=(B[1],Object(c.useState)({name:"",address:"",country:"ES",vattax:""})),T=Object(n.a)(Q,2),_=T[0],H=T[1];Object(c.useEffect)(function(){m||a.push("/")},[a,m,e]);var R=[{title:i.payment.step1,icon:r.a.createElement(y.a,{type:"question-circle"}),content:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a.Group,{onChange:function(e){q(e.target.value)},defaultValue:j},r.a.createElement(f.a,{style:A,value:"0"},i.payment.question1),r.a.createElement(f.a,{style:A,value:"1"},i.payment.question2),r.a.createElement(f.a,{style:A,value:"2"},i.payment.question3)))},{title:i.payment.step2,icon:r.a.createElement(y.a,{type:"solution"}),content:r.a.createElement("div",{className:"col-12 p-4"},r.a.createElement(v.a,F,r.a.createElement(v.a.Item,{label:i.payment.form.name},l("name",{initialValue:_.name,rules:[{required:!0,message:i.payment.form.error.name}]})(r.a.createElement(h.a,null))),r.a.createElement(v.a.Item,{label:i.payment.form.address},l("address",{initialValue:_.address,rules:[{required:!0,message:i.payment.form.error.address}]})(r.a.createElement(h.a,null))),r.a.createElement(v.a.Item,{label:i.payment.form.country,hasFeedback:!0},l("country",{initialValue:_.country,rules:[{required:!0,message:i.payment.form.error.country}]})(r.a.createElement(E.a,{showSearch:!0,onChange:function(e){var t=_;t.country=e,H(t)},optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0},placeholder:i.payment.form.error.country},L))),"0"===j&&"ES"===_.country&&r.a.createElement(v.a.Item,{label:i.payment.form.vattax},l("vattax",{initialValue:_.vattax,rules:[{required:!0,message:i.payment.form.error.vattax}]})(r.a.createElement(h.a,null)))))},{title:i.payment.step3,icon:r.a.createElement(y.a,{type:"euro"}),content:r.a.createElement(b.a,{justify:"center",type:"flex"},r.a.createElement(k,{secret:D,formValues:_,processSelected:m||[]}),G&&r.a.createElement("div",{style:{marginTop:20}},r.a.createElement(g.a,{message:i.payment.alert,type:"info",showIcon:!0})))}];return r.a.createElement(s.a,{type:"bottom",className:"ui-animate"},r.a.createElement("div",{key:"1",className:"row justify-content-md-center"},r.a.createElement("div",{className:"form-card__body col-md-10 col-lg-10 col-xl-8 col-xxl p-4"},r.a.createElement("article",{className:"article"},r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-body p-4"},r.a.createElement("section",{className:"form-v1-container"},r.a.createElement("h2",null,i.payment.modal),r.a.createElement(p.a,{current:d},R.map(function(e){return r.a.createElement(S,{key:e.title,title:e.title,icon:e.icon})})),r.a.createElement("div",{className:"steps-content"},R[d].content),r.a.createElement("div",{className:"steps-action"},d>0&&r.a.createElement(I,{style:{marginLeft:8},onClick:function(){return function(){var e=1;2===d&&"2"===j&&(e=2),x(d-e)}()}},i.payment.previous),d<2&&r.a.createElement(I,{type:"primary",onClick:function(){return function(){if(1===d)t.validateFields(function(e,t){e||(t.continent=V[t.country].continent,"EU"===V[t.country].continent&&J(!0),x(d+1),H(t))});else{var e=1;0===d&&"2"===j&&(e=2),x(d+e)}}()}},i.payment.next)))))))))}))))}}]);
//# sourceMappingURL=35.39e85283.chunk.js.map