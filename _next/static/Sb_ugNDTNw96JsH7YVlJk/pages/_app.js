(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{0:function(e,t,r){r("J5xr"),e.exports=r("nOHt")},J5xr:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("YNMu")}])},Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("q1tI"),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r};function l(e){return function(t){return n.createElement(u,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return n.createElement(t.tag,i({key:r},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var r,o=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var a=e.attr,l=e.title,u=c(e,["attr","title"]);return n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:i({color:e.color||t.color},t.style,e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},YFqc:function(e,t,r){e.exports=r("cTJO")},YNMu:function(e,t,r){"use strict";r.r(t);var n=r("wx14"),o=r("BMxC"),a=r("CjxU"),i=r("mf32"),c=r("b9RQ"),l=r("nOHt"),u=r("q1tI"),s=r.n(u),f=r("+Cyc"),p=r("OQ2h"),h=r("Weur"),d=r("sK1y"),v=r("R77S"),m=u.createElement,y=function(e){return m(o.a,Object(n.a)({pos:"fixed",as:"header",top:"0",zIndex:4,left:"0",right:"0",borderBottomWidth:"1px",width:"full",height:"4rem"},e))},g=function(e){return m(f.a,Object(n.a)({as:"a","aria-label":"Go to Chakra UI's Github Repo",outline:"0",transition:"all 0.2s",borderRadius:"md",_focus:{boxShadow:"outline"}},{href:"https://github.com/gravel-form/chakra-ui",rel:"noopener noreferrer",target:"_blank",props:e}),m(o.a,{as:v.a,size:"8",color:"current"}))},b=function(e){return m(p.a,Object(n.a)({variant:"ghost",color:"current",ml:"2",fontSize:"20px"},e))},O=function(e){var t=Object(i.e)(),r=t.colorMode,o=t.toggleColorMode;return m(y,Object(n.a)({bg:{light:"white",dark:"gray.800"}[r]},e),m(h.a,{size:"100%",px:"6",align:"center",justify:"space-between"},m(h.a,{align:"center",mr:5},m(d.a,{fontSize:"2xl"},"Gravel Form")),m(h.a,{flex:{sm:"1",md:"none"},ml:5,align:"center",color:"gray.500",justify:"flex-end"},m(g,null),m(b,{"aria-label":"Switch to ".concat("light"===r?"dark":"light"," mode"),onClick:o,icon:"light"===r?"moon":"sun"}))))},w=r("zLVn");function j(e,t){if(null==e)return{};var r,n,o=Object(w.a)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var k=r("qWyU"),x=r("rePB"),E=r("YFqc"),P=r.n(E),C=u.createElement;function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){Object(x.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=function(e){var t=e.children,r=j(e,["children"]),o=!1;return Object(l.useRouter)().pathname===r.href&&(o=!0),C(P.a,Object(n.a)({passHref:!0},r),"function"===typeof t?t(o):t)},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/";return"".concat(t).concat(e.toLowerCase().split(" ").join("-"))},N=u.forwardRef((function(e,t){var r=e.children,a=e.icon,c=void 0===a?null:a,l=j(e,["children","icon"]),s=Object(i.e)().colorMode;return C(f.a,Object(n.a)({ref:t,as:"a",mx:-2,display:"flex",cursor:"pointer",px:"2",py:"1",transition:"all 0.2s",fontWeight:"medium",outline:"none",_focus:{shadow:"outline"},color:{light:"gray.700",dark:"whiteAlpha.700"}[s],_notFirst:{mt:1}},S(S({},l),{},{align:"center"})),c&&u.cloneElement(c,{mr:3}),C(o.a,null,r))})),U=(u.forwardRef((function(e,t){var r=e.href,o=j(e,["href"]);return C(_,{href:r},(function(e){return C(N,Object(n.a)({ref:t,"aria-current":e?"page":void 0,_hover:{color:e?"":"inherit"}},e&&{color:"teal.500",fontWeight:"semibold"},o))}))})),u.forwardRef((function(e,t){var r=e.href,o=j(e,["href"]),a=Object(i.e)().colorMode,c={light:"gray.900",dark:"whiteAlpha.900"},l={light:"teal.800",dark:"teal.200"},u={light:"teal.50",dark:"#308c7a4d"};return C(_,{href:r},(function(e){return C(N,Object(n.a)({ref:t,"aria-current":e?"page":void 0,_hover:{color:c[a],transform:"translateX(2px)"}},e&&{bg:u[a],rounded:"sm",color:l[a],_hover:{}},o))}))}))),z=s.a.createElement,W=function(e){return z(k.a,Object(n.a)({fontSize:"xs",color:"gray.400",letterSpacing:"wide",mb:2,textTransform:"uppercase"},e))},D=function(e){var t=e.contentHeight,r=void 0===t?"calc(100vh - 4rem)":t,a=j(e,["contentHeight"]);return z(o.a,Object(n.a)({top:"4rem",position:"relative",overflowY:"auto",borderRightWidth:"1px"},a),z(o.a,{as:"nav",height:r,"aria-label":"Main navigation",fontSize:"sm",p:"6"},z(o.a,{mb:"10"},z(W,null,"Examples"),z(U,{key:"basic",href:M("basic")},"Basic"),z(U,{key:"kitchen-sink",href:M("kitchen-sink")},"Kitchen Sink"),z(U,{key:"simple-middlewares",href:M("simple-middlewares")},"Simple Middlewares"),z(U,{key:"dynamic-array",href:M("dynamic-array")},"Dynamic Array"),z(U,{key:"calculated-field",href:M("calculated-field")},"Calculated Field"))))},I=function(e){return z(o.a,Object(n.a)({position:"fixed",left:"0",width:"100%",height:"100%",top:"0",right:"0"},e))},L=function(e){return z(I,e,z(D,null))},T=s.a.createElement,B=function(e){return T(o.a,Object(n.a)({as:"main",mx:"auto"},e))},H=function(e){var t=e.children;return T(o.a,null,T(O,null),T(L,{display:["none",null,"block"],maxWidth:"18rem",width:"full"}),T(o.a,{pl:[0,null,"18rem"],mt:"4rem"},T(B,null,t)))};t.default=function(e){var t,r=e.Component,n=e.pageProps;Object(l.useRouter)();return t=H,T(a.a,null,T(i.d,{value:"light"},T(c.a,null),T(t,null,T(r,n))))}},cTJO:function(e,t,r){"use strict";var n=r("/GRZ"),o=r("i2R6"),a=r("48fX"),i=r("tCBg"),c=r("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}var u=r("AroE"),s=r("7KCV");t.__esModule=!0,t.default=void 0;var f,p=s(r("q1tI")),h=r("QmWs"),d=r("g/15"),v=u(r("nOHt")),m=r("elyg");function y(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var g=new Map,b=window.IntersectionObserver,O={};function w(){return f||(b?f=new b((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var j=function(e){a(r,e);var t=l(r);function r(e){var o;return n(this,r),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,r=null,n=null;return function(o,a){if(n&&o===t&&a===r)return n;var i=e(o,a);return t=o,r=a,n=i,i}}((function(e,t){return{href:(0,m.addBasePath)(y(e)),as:t?(0,m.addBasePath)(y(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,n=t.target;if("A"!==r||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),i=a.href,c=a.as;if(function(e){var t=(0,h.parse)(e,!1,!0),r=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var l=window.location.pathname;i=(0,h.resolve)(l,i),c=c?(0,h.resolve)(l,c):i,e.preventDefault();var u=o.props.scroll;null==u&&(u=c.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](i,c,{shallow:o.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(r,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,o=(0,h.resolve)(e,r);return[o,n?(0,h.resolve)(e,n):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),O[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=w();return r?(r.observe(e),g.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),O[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||n),p.default.cloneElement(a,i)}}]),r}(p.Component);t.default=j}},[[0,0,1,8,2,7]]]);