/*! For license information please see post_editor_block.js.LICENSE.txt */
(()=>{var __webpack_modules__={835:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__(596);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},519:(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__(835)()},596:module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},875:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__(79),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},504:(__unused_webpack_module,exports)=>{"use strict";var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a,this.context=b,this.refs=D,this.updater=e||B}function F(){}function G(a,b,e){this.props=a,this.context=b,this.refs=D,this.updater=e||B}E.prototype.isReactComponent={},E.prototype.setState=function(a,b){if("object"!=typeof a&&"function"!=typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")},E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")},F.prototype=E.prototype;var H=G.prototype=new F;H.constructor=G,C(H,E.prototype),H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}function O(a){return"object"==typeof a&&null!==a&&a.$$typeof===l}var P=/\/+/g;function Q(a,b){return"object"==typeof a&&null!==a&&null!=a.key?function(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,(function(a){return b[a]}))}(""+a.key):b.toString(36)}function R(a,b,e,d,c){var k=typeof a;"undefined"!==k&&"boolean"!==k||(a=null);var h=!1;if(null===a)h=!0;else switch(k){case"string":case"number":h=!0;break;case"object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return c=c(h=a),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",(function(a){return a}))):null!=c&&(O(c)&&(c=function(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;if(h=0,d=""===d?".":d+":",I(a))for(var g=0;g<a.length;g++){var f=d+Q(k=a[g],g);h+=R(k,b,e,f,c)}else if(f=function(a){return null===a||"object"!=typeof a?null:"function"==typeof(a=z&&a[z]||a["@@iterator"])?a:null}(a),"function"==typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)h+=R(k=k.value,b,e,f=d+Q(k,g++),c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}function S(a,b,e){if(null==a)return a;var d=[],c=0;return R(a,d,"","",(function(a){return b.call(e,a,c++)})),d}function T(a){if(-1===a._status){var b=a._result;(b=b()).then((function(b){0!==a._status&&-1!==a._status||(a._status=1,a._result=b)}),(function(b){0!==a._status&&-1!==a._status||(a._status=2,a._result=b)})),-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result}var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};exports.Children={map:S,forEach:function(a,b,e){S(a,(function(){b.apply(this,arguments)}),e)},count:function(a){var b=0;return S(a,(function(){b++})),b},toArray:function(a){return S(a,(function(a){return a}))||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}},exports.Component=E,exports.Fragment=p,exports.Profiler=r,exports.PureComponent=G,exports.StrictMode=q,exports.Suspense=w,exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,exports.cloneElement=function(a,b,e){if(null==a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){if(void 0!==b.ref&&(k=b.ref,h=K.current),void 0!==b.key&&(c=""+b.key),a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}},exports.createContext=function(a){return(a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:t,_context:a},a.Consumer=a},exports.createElement=M,exports.createFactory=function(a){var b=M.bind(null,a);return b.type=a,b},exports.createRef=function(){return{current:null}},exports.forwardRef=function(a){return{$$typeof:v,render:a}},exports.isValidElement=O,exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}},exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}},exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}},exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},exports.useCallback=function(a,b){return U.current.useCallback(a,b)},exports.useContext=function(a){return U.current.useContext(a)},exports.useDebugValue=function(){},exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)},exports.useEffect=function(a,b){return U.current.useEffect(a,b)},exports.useId=function(){return U.current.useId()},exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)},exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)},exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)},exports.useMemo=function(a,b){return U.current.useMemo(a,b)},exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)},exports.useRef=function(a){return U.current.useRef(a)},exports.useState=function(a){return U.current.useState(a)},exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)},exports.useTransition=function(){return U.current.useTransition()},exports.version="18.2.0"},79:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__(504)},250:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__(875)}},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={exports:{}};return __webpack_modules__[moduleId](module,module.exports,__webpack_require__),module.exports}__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),(()=>{"use strict";var jsx_runtime=__webpack_require__(250);const wp=window.wp,{G,Path,SVG}=wp.components,Icon=(0,jsx_runtime.jsx)(SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 152.02 156.4",children:(0,jsx_runtime.jsxs)(G,{children:[(0,jsx_runtime.jsx)(Path,{d:"M37.71,89.1c3.5,0,5.9-.8,7.2-2.3a8,8,0,0,0,2-5.4V35.7l17,45.1a12.68,12.68,0,0,0,3.7,5.4c1.6,1.3,4,2,7.2,2a12.54,12.54,0,0,0,5.9-1.4,8.41,8.41,0,0,0,3.9-5l18.1-50V81a8.53,8.53,0,0,0,2.1,6.1c1.4,1.4,3.7,2.2,6.9,2.2,3.5,0,5.9-.8,7.2-2.3a8,8,0,0,0,2-5.4V8.7a7.48,7.48,0,0,0-3.3-6.6c-2.1-1.4-5-2.1-8.6-2.1a19.3,19.3,0,0,0-9.4,2,11.63,11.63,0,0,0-5.1,6.8L74.91,67.1,54.41,8.4a12.4,12.4,0,0,0-4.5-6.2c-2.1-1.5-5-2.2-8.8-2.2a16.51,16.51,0,0,0-8.9,2.1c-2.3,1.5-3.5,3.9-3.5,7.2V80.8c0,2.8.7,4.8,2,6.2C32.21,88.4,34.41,89.1,37.71,89.1Z"}),(0,jsx_runtime.jsx)(Path,{d:"M149,116.6l-2.4-1.9a7.4,7.4,0,0,0-9.4.3,19.65,19.65,0,0,1-12.5,4.6h-21.4A37.08,37.08,0,0,0,77,130.5l-1.1,1.2-1.1-1.1a37.25,37.25,0,0,0-26.3-10.9H27a19.59,19.59,0,0,1-12.4-4.6,7.28,7.28,0,0,0-9.4-.3l-2.4,1.9A7.43,7.43,0,0,0,0,122.2a7.14,7.14,0,0,0,2.4,5.7A37.28,37.28,0,0,0,27,137.4h21.6a19.59,19.59,0,0,1,18.9,14.4v.2c.1.7,1.2,4.4,8.5,4.4s8.4-3.7,8.5-4.4v-.2a19.59,19.59,0,0,1,18.9-14.4H125a37.28,37.28,0,0,0,24.6-9.5,7.42,7.42,0,0,0,2.4-5.7A7.86,7.86,0,0,0,149,116.6Z"})]})});var prop_types=__webpack_require__(519),prop_types_default=__webpack_require__.n(prop_types);const edit_wp=window.wp,{Placeholder,PanelBody}=edit_wp.components,{BlockIcon,InspectorControls}=edit_wp.blockEditor,ServerSideRender=edit_wp.serverSideRender,allForms=window.mailpoet_forms;function Edit(_ref){let{attributes,setAttributes}=_ref;function selectFormSettings(){return(0,jsx_runtime.jsxs)("div",{className:"mailpoet-block-create-new-content",children:[(0,jsx_runtime.jsx)("a",{href:"admin.php?page=mailpoet-form-editor-template-selection",target:"_blank",className:"mailpoet-block-create-new-link",children:window.locale.createForm}),Array.isArray(allForms)?0===allForms.length?null:(0,jsx_runtime.jsxs)("select",{onChange:event=>{setAttributes({formId:parseInt(event.target.value,10)})},className:"mailpoet-block-create-forms-list",value:attributes.formId,children:[(0,jsx_runtime.jsx)("option",{value:"",disabled:!0,selected:!0,children:window.locale.selectForm}),allForms.map((form=>(0,jsx_runtime.jsx)("option",{value:form.id,children:form.name+("disabled"===form.status?` (${window.locale.inactive})`:"")})))]}):null]})}return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InspectorControls,{children:(0,jsx_runtime.jsx)(PanelBody,{title:"MailPoet Subscription Form",initialOpen:!0,children:selectFormSettings()})}),(0,jsx_runtime.jsxs)("div",{className:"mailpoet-block-div",children:[null===attributes.formId&&(0,jsx_runtime.jsx)(Placeholder,{className:"mailpoet-block-create-new",icon:(0,jsx_runtime.jsx)(BlockIcon,{icon:Icon,showColors:!0}),label:window.locale.subscriptionForm,children:selectFormSettings()}),null!==attributes.formId&&(0,jsx_runtime.jsx)(ServerSideRender,{block:"mailpoet/subscription-form-block-render",attributes:{formId:attributes.formId}})]})]})}Edit.propTypes={attributes:prop_types_default().shape({formId:prop_types_default().number}).isRequired,setAttributes:prop_types_default().func.isRequired};const form_block_wp=window.wp,{registerBlockType}=form_block_wp.blocks;registerBlockType("mailpoet/subscription-form-block-render",{title:window.locale.subscriptionForm,attributes:{formId:{type:"number",default:null}},supports:{inserter:!1}}),registerBlockType("mailpoet/subscription-form-block",{title:window.locale.subscriptionForm,icon:Icon,category:"widgets",example:{},attributes:{formId:{type:"number",default:null}},edit:Edit,save:()=>null})})()})();