(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1285:function(e,t,n){"use strict";var a=n(0),r=n(18),o=n.n(r),c=n(104),l=n(102);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},u=function(e){return a.createElement(l.a,null,function(t){var n=t.getPrefixCls,r=e.prefixCls,c=e.className,l=s(e,["prefixCls","className"]),u=n("card",r),d=o()("".concat(u,"-grid"),c);return a.createElement("div",i({},l,{className:d}))})};function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},f=function(e){return a.createElement(l.a,null,function(t){var n=t.getPrefixCls,r=e.prefixCls,c=e.className,l=e.avatar,i=e.title,s=e.description,u=p(e,["prefixCls","className","avatar","title","description"]),f=n("card",r),m=o()("".concat(f,"-meta"),c),v=l?a.createElement("div",{className:"".concat(f,"-meta-avatar")},l):null,y=i?a.createElement("div",{className:"".concat(f,"-meta-title")},i):null,b=s?a.createElement("div",{className:"".concat(f,"-meta-description")},s):null,g=y||b?a.createElement("div",{className:"".concat(f,"-meta-detail")},y,b):null;return a.createElement("div",d({},u,{className:m}),v,g)})},m=n(875),v=n(590),y=n(647),b=n(427);function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function w(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",function(){return k});var C=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},k=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=w(this,j(t).apply(this,arguments))).onTabChange=function(t){e.props.onTabChange&&e.props.onTabChange(t)},e.renderCard=function(t){var n,r,l=t.getPrefixCls,i=e.props,s=i.prefixCls,u=i.className,d=i.extra,p=i.headStyle,f=void 0===p?{}:p,b=i.bodyStyle,g=void 0===b?{}:b,O=(i.noHovering,i.hoverable,i.title),w=i.loading,j=i.bordered,N=void 0===j||j,k=i.size,x=void 0===k?"default":k,P=i.type,S=i.cover,T=i.actions,H=i.tabList,D=i.children,_=i.activeTabKey,A=i.defaultActiveTabKey,K=C(i,["prefixCls","className","extra","headStyle","bodyStyle","noHovering","hoverable","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey"]),z=l("card",s),G=o()(z,u,(E(n={},"".concat(z,"-loading"),w),E(n,"".concat(z,"-bordered"),N),E(n,"".concat(z,"-hoverable"),e.getCompatibleHoverable()),E(n,"".concat(z,"-contain-grid"),e.isContainGrid()),E(n,"".concat(z,"-contain-tabs"),H&&H.length),E(n,"".concat(z,"-").concat(x),"default"!==x),E(n,"".concat(z,"-type-").concat(P),!!P),n)),L=0===g.padding||"0px"===g.padding?{padding:24}:void 0,M=a.createElement("div",{className:"".concat(z,"-loading-content"),style:L},a.createElement(v.a,{gutter:8},a.createElement(y.a,{span:22},a.createElement("div",{className:"".concat(z,"-loading-block")}))),a.createElement(v.a,{gutter:8},a.createElement(y.a,{span:8},a.createElement("div",{className:"".concat(z,"-loading-block")})),a.createElement(y.a,{span:15},a.createElement("div",{className:"".concat(z,"-loading-block")}))),a.createElement(v.a,{gutter:8},a.createElement(y.a,{span:6},a.createElement("div",{className:"".concat(z,"-loading-block")})),a.createElement(y.a,{span:18},a.createElement("div",{className:"".concat(z,"-loading-block")}))),a.createElement(v.a,{gutter:8},a.createElement(y.a,{span:13},a.createElement("div",{className:"".concat(z,"-loading-block")})),a.createElement(y.a,{span:9},a.createElement("div",{className:"".concat(z,"-loading-block")}))),a.createElement(v.a,{gutter:8},a.createElement(y.a,{span:4},a.createElement("div",{className:"".concat(z,"-loading-block")})),a.createElement(y.a,{span:3},a.createElement("div",{className:"".concat(z,"-loading-block")})),a.createElement(y.a,{span:16},a.createElement("div",{className:"".concat(z,"-loading-block")})))),F=void 0!==_,J=E({},F?"activeKey":"defaultActiveKey",F?_:A),R=H&&H.length?a.createElement(m.a,h({},J,{className:"".concat(z,"-head-tabs"),size:"large",onChange:e.onTabChange}),H.map(function(e){return a.createElement(m.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})})):null;(O||d||R)&&(r=a.createElement("div",{className:"".concat(z,"-head"),style:f},a.createElement("div",{className:"".concat(z,"-head-wrapper")},O&&a.createElement("div",{className:"".concat(z,"-head-title")},O),d&&a.createElement("div",{className:"".concat(z,"-extra")},d)),R));var W=S?a.createElement("div",{className:"".concat(z,"-cover")},S):null,q=a.createElement("div",{className:"".concat(z,"-body"),style:g},w?M:D),B=T&&T.length?a.createElement("ul",{className:"".concat(z,"-actions")},e.getAction(T)):null,I=Object(c.default)(K,["onTabChange"]);return a.createElement("div",h({},I,{className:G}),r,W,q,B)},e}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,a["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){"noHovering"in this.props&&(Object(b.a)(!this.props.noHovering,"Card","`noHovering` is deprecated, you can remove it safely or use `hoverable` instead."),Object(b.a)(!!this.props.noHovering,"Card","`noHovering={false}` is deprecated, use `hoverable` instead."))}},{key:"isContainGrid",value:function(){var e;return a.Children.forEach(this.props.children,function(t){t&&t.type&&t.type===u&&(e=!0)}),e}},{key:"getAction",value:function(e){return e.map(function(t,n){return a.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},a.createElement("span",null,t))})}},{key:"getCompatibleHoverable",value:function(){var e=this.props,t=e.noHovering,n=e.hoverable;return"noHovering"in this.props?!t||n:!!n}},{key:"render",value:function(){return a.createElement(l.a,null,this.renderCard)}}])&&O(n.prototype,r),i&&O(n,i),t}();k.Grid=u,k.Meta=f},1841:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var a=n(31),r=n(32),o=n(34),c=n(33),l=n(35),i=n(0),s=n.n(i),u=n(1824),d=n(590),p=n(647),f=n(412),m=n(1285),v=n(433),y=n(440),b=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!1,process:{fileName:null}},n.download=function(e){var t=n.state.process,a=t.fileDownload.file,r=t.fileDownload.fileType,o=t.fileDownload.filename;window.FileDownload(a,r,o).then(function(){return console.log("download successful.")}).catch(function(e){return u.a.error("download error: ",e)}),window.location="/"},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.uuid;this.setState({loading:!0}),Object(y.W)(t).then(function(t){e.setState({process:t.data,loading:!1})}).catch(function(t){e.setState({loading:!1})})}},{key:"render",value:function(){var e=this;return s.a.createElement(d.a,{type:"flex",justify:"space-around",align:"middle"},s.a.createElement(p.a,{xs:24,md:10},s.a.createElement(f.a,{spinning:this.state.loading,tip:"Loading..."},s.a.createElement(m.a,{style:{margin:100},title:"Download File"},s.a.createElement(d.a,null,s.a.createElement(p.a,null,s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},this.state.process.fileName?this.state.process.fileName:""))),s.a.createElement(d.a,null,s.a.createElement(p.a,null,s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement(v.a,{onClick:function(){e.download()},type:"primary",shape:"round",icon:"download",size:"large"},"Download"))))))))}}]),t}(i.Component)},590:function(e,t,n){"use strict";var a=n(1382);t.a=a.a},647:function(e,t,n){"use strict";var a=n(1296);t.a=a.a}}]);
//# sourceMappingURL=33.6828129b.chunk.js.map