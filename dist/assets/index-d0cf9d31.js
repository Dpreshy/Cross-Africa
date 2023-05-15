var C8=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var yq=C8((wq,xd)=>{function P8(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var O8=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ux(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var As={},_8={get exports(){return As},set exports(e){As=e}},Oc={},C={},k8={get exports(){return C},set exports(e){C=e}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hl=Symbol.for("react.element"),N8=Symbol.for("react.portal"),E8=Symbol.for("react.fragment"),I8=Symbol.for("react.strict_mode"),T8=Symbol.for("react.profiler"),A8=Symbol.for("react.provider"),R8=Symbol.for("react.context"),F8=Symbol.for("react.forward_ref"),D8=Symbol.for("react.suspense"),M8=Symbol.for("react.memo"),L8=Symbol.for("react.lazy"),by=Symbol.iterator;function j8(e){return e===null||typeof e!="object"?null:(e=by&&e[by]||e["@@iterator"],typeof e=="function"?e:null)}var Bx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hx=Object.assign,Yx={};function Fa(e,t,n){this.props=e,this.context=t,this.refs=Yx,this.updater=n||Bx}Fa.prototype.isReactComponent={};Fa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wx(){}Wx.prototype=Fa.prototype;function ng(e,t,n){this.props=e,this.context=t,this.refs=Yx,this.updater=n||Bx}var rg=ng.prototype=new Wx;rg.constructor=ng;Hx(rg,Fa.prototype);rg.isPureReactComponent=!0;var wy=Array.isArray,Vx=Object.prototype.hasOwnProperty,ig={current:null},qx={key:!0,ref:!0,__self:!0,__source:!0};function Gx(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Vx.call(t,r)&&!qx.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:hl,type:e,key:o,ref:a,props:i,_owner:ig.current}}function z8(e,t){return{$$typeof:hl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function og(e){return typeof e=="object"&&e!==null&&e.$$typeof===hl}function U8(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Sy=/\/+/g;function Hf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?U8(""+e.key):t.toString(36)}function Bu(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case hl:case N8:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Hf(a,0):r,wy(i)?(n="",e!=null&&(n=e.replace(Sy,"$&/")+"/"),Bu(i,t,n,"",function(d){return d})):i!=null&&(og(i)&&(i=z8(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Sy,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",wy(e))for(var l=0;l<e.length;l++){o=e[l];var u=r+Hf(o,l);a+=Bu(o,t,n,u,i)}else if(u=j8(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=r+Hf(o,l++),a+=Bu(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Bl(e,t,n){if(e==null)return e;var r=[],i=0;return Bu(e,r,"","",function(o){return t.call(n,o,i++)}),r}function B8(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var At={current:null},Hu={transition:null},H8={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:Hu,ReactCurrentOwner:ig};$e.Children={map:Bl,forEach:function(e,t,n){Bl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Bl(e,function(){t++}),t},toArray:function(e){return Bl(e,function(t){return t})||[]},only:function(e){if(!og(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$e.Component=Fa;$e.Fragment=E8;$e.Profiler=T8;$e.PureComponent=ng;$e.StrictMode=I8;$e.Suspense=D8;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H8;$e.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hx({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ig.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)Vx.call(t,u)&&!qx.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:hl,type:e.type,key:i,ref:o,props:r,_owner:a}};$e.createContext=function(e){return e={$$typeof:R8,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:A8,_context:e},e.Consumer=e};$e.createElement=Gx;$e.createFactory=function(e){var t=Gx.bind(null,e);return t.type=e,t};$e.createRef=function(){return{current:null}};$e.forwardRef=function(e){return{$$typeof:F8,render:e}};$e.isValidElement=og;$e.lazy=function(e){return{$$typeof:L8,_payload:{_status:-1,_result:e},_init:B8}};$e.memo=function(e,t){return{$$typeof:M8,type:e,compare:t===void 0?null:t}};$e.startTransition=function(e){var t=Hu.transition;Hu.transition={};try{e()}finally{Hu.transition=t}};$e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$e.useCallback=function(e,t){return At.current.useCallback(e,t)};$e.useContext=function(e){return At.current.useContext(e)};$e.useDebugValue=function(){};$e.useDeferredValue=function(e){return At.current.useDeferredValue(e)};$e.useEffect=function(e,t){return At.current.useEffect(e,t)};$e.useId=function(){return At.current.useId()};$e.useImperativeHandle=function(e,t,n){return At.current.useImperativeHandle(e,t,n)};$e.useInsertionEffect=function(e,t){return At.current.useInsertionEffect(e,t)};$e.useLayoutEffect=function(e,t){return At.current.useLayoutEffect(e,t)};$e.useMemo=function(e,t){return At.current.useMemo(e,t)};$e.useReducer=function(e,t,n){return At.current.useReducer(e,t,n)};$e.useRef=function(e){return At.current.useRef(e)};$e.useState=function(e){return At.current.useState(e)};$e.useSyncExternalStore=function(e,t,n){return At.current.useSyncExternalStore(e,t,n)};$e.useTransition=function(){return At.current.useTransition()};$e.version="18.2.0";(function(e){e.exports=$e})(k8);const ne=Ux(C),Z0=P8({__proto__:null,default:ne},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y8=C,W8=Symbol.for("react.element"),V8=Symbol.for("react.fragment"),q8=Object.prototype.hasOwnProperty,G8=Y8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q8={key:!0,ref:!0,__self:!0,__source:!0};function Qx(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)q8.call(t,r)&&!Q8.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:W8,type:e,key:o,ref:a,props:i,_owner:G8.current}}Oc.Fragment=V8;Oc.jsx=Qx;Oc.jsxs=Qx;(function(e){e.exports=Oc})(_8);const Rs=As.Fragment,s=As.jsx,y=As.jsxs;var J0={},$d={},K8={get exports(){return $d},set exports(e){$d=e}},Jt={},X0={},Z8={get exports(){return X0},set exports(e){X0=e}},Kx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,N){var E=j.length;j.push(N);e:for(;0<E;){var U=E-1>>>1,D=j[U];if(0<i(D,N))j[U]=N,j[E]=D,E=U;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var N=j[0],E=j.pop();if(E!==N){j[0]=E;e:for(var U=0,D=j.length,H=D>>>1;U<H;){var W=2*(U+1)-1,oe=j[W],k=W+1,de=j[k];if(0>i(oe,E))k<D&&0>i(de,oe)?(j[U]=de,j[k]=E,U=k):(j[U]=oe,j[W]=E,U=W);else if(k<D&&0>i(de,E))j[U]=de,j[k]=E,U=k;else break e}}return N}function i(j,N){var E=j.sortIndex-N.sortIndex;return E!==0?E:j.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],d=[],c=1,f=null,g=3,$=!1,v=!1,b=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(j){for(var N=n(d);N!==null;){if(N.callback===null)r(d);else if(N.startTime<=j)r(d),N.sortIndex=N.expirationTime,t(u,N);else break;N=n(d)}}function S(j){if(b=!1,x(j),!v)if(n(u)!==null)v=!0,ee(P);else{var N=n(d);N!==null&&te(S,N.startTime-j)}}function P(j,N){v=!1,b&&(b=!1,m(R),R=-1),$=!0;var E=g;try{for(x(N),f=n(u);f!==null&&(!(f.expirationTime>N)||j&&!ie());){var U=f.callback;if(typeof U=="function"){f.callback=null,g=f.priorityLevel;var D=U(f.expirationTime<=N);N=e.unstable_now(),typeof D=="function"?f.callback=D:f===n(u)&&r(u),x(N)}else r(u);f=n(u)}if(f!==null)var H=!0;else{var W=n(d);W!==null&&te(S,W.startTime-N),H=!1}return H}finally{f=null,g=E,$=!1}}var _=!1,T=null,R=-1,Y=5,z=-1;function ie(){return!(e.unstable_now()-z<Y)}function M(){if(T!==null){var j=e.unstable_now();z=j;var N=!0;try{N=T(!0,j)}finally{N?L():(_=!1,T=null)}}else _=!1}var L;if(typeof p=="function")L=function(){p(M)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,F=J.port2;J.port1.onmessage=M,L=function(){F.postMessage(null)}}else L=function(){w(M,0)};function ee(j){T=j,_||(_=!0,L())}function te(j,N){R=w(function(){j(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){v||$||(v=!0,ee(P))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(j){switch(g){case 1:case 2:case 3:var N=3;break;default:N=g}var E=g;g=N;try{return j()}finally{g=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,N){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var E=g;g=j;try{return N()}finally{g=E}},e.unstable_scheduleCallback=function(j,N,E){var U=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?U+E:U):E=U,j){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=E+D,j={id:c++,callback:N,priorityLevel:j,startTime:E,expirationTime:D,sortIndex:-1},E>U?(j.sortIndex=E,t(d,j),n(u)===null&&j===n(d)&&(b?(m(R),R=-1):b=!0,te(S,E-U))):(j.sortIndex=D,t(u,j),v||$||(v=!0,ee(P))),j},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(j){var N=g;return function(){var E=g;g=N;try{return j.apply(this,arguments)}finally{g=E}}}})(Kx);(function(e){e.exports=Kx})(Z8);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zx=C,Kt=X0;function G(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jx=new Set,Fs={};function oo(e,t){wa(e,t),wa(e+"Capture",t)}function wa(e,t){for(Fs[e]=t,e=0;e<t.length;e++)Jx.add(t[e])}var wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ep=Object.prototype.hasOwnProperty,J8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cy={},Py={};function X8(e){return ep.call(Py,e)?!0:ep.call(Cy,e)?!1:J8.test(e)?Py[e]=!0:(Cy[e]=!0,!1)}function e6(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function t6(e,t,n,r){if(t===null||typeof t>"u"||e6(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Rt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xt[e]=new Rt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xt[t]=new Rt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xt[e]=new Rt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xt[e]=new Rt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xt[e]=new Rt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xt[e]=new Rt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xt[e]=new Rt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xt[e]=new Rt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xt[e]=new Rt(e,5,!1,e.toLowerCase(),null,!1,!1)});var ag=/[\-:]([a-z])/g;function sg(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ag,sg);xt[t]=new Rt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ag,sg);xt[t]=new Rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ag,sg);xt[t]=new Rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xt[e]=new Rt(e,1,!1,e.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xt[e]=new Rt(e,1,!1,e.toLowerCase(),null,!0,!0)});function lg(e,t,n,r){var i=xt.hasOwnProperty(t)?xt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t6(t,n,i,r)&&(n=null),r||i===null?X8(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Nr=Zx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hl=Symbol.for("react.element"),Vo=Symbol.for("react.portal"),qo=Symbol.for("react.fragment"),ug=Symbol.for("react.strict_mode"),tp=Symbol.for("react.profiler"),Xx=Symbol.for("react.provider"),e4=Symbol.for("react.context"),dg=Symbol.for("react.forward_ref"),np=Symbol.for("react.suspense"),rp=Symbol.for("react.suspense_list"),cg=Symbol.for("react.memo"),Ur=Symbol.for("react.lazy"),t4=Symbol.for("react.offscreen"),Oy=Symbol.iterator;function Ga(e){return e===null||typeof e!="object"?null:(e=Oy&&e[Oy]||e["@@iterator"],typeof e=="function"?e:null)}var Ge=Object.assign,Yf;function gs(e){if(Yf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yf=t&&t[1]||""}return`
`+Yf+e}var Wf=!1;function Vf(e,t){if(!e||Wf)return"";Wf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{Wf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gs(e):""}function n6(e){switch(e.tag){case 5:return gs(e.type);case 16:return gs("Lazy");case 13:return gs("Suspense");case 19:return gs("SuspenseList");case 0:case 2:case 15:return e=Vf(e.type,!1),e;case 11:return e=Vf(e.type.render,!1),e;case 1:return e=Vf(e.type,!0),e;default:return""}}function ip(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qo:return"Fragment";case Vo:return"Portal";case tp:return"Profiler";case ug:return"StrictMode";case np:return"Suspense";case rp:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case e4:return(e.displayName||"Context")+".Consumer";case Xx:return(e._context.displayName||"Context")+".Provider";case dg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cg:return t=e.displayName||null,t!==null?t:ip(e.type)||"Memo";case Ur:t=e._payload,e=e._init;try{return ip(e(t))}catch{}}return null}function r6(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ip(t);case 8:return t===ug?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function n4(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function i6(e){var t=n4(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yl(e){e._valueTracker||(e._valueTracker=i6(e))}function r4(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=n4(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bd(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function op(e,t){var n=t.checked;return Ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _y(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pi(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function i4(e,t){t=t.checked,t!=null&&lg(e,"checked",t,!1)}function ap(e,t){i4(e,t);var n=pi(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sp(e,t.type,n):t.hasOwnProperty("defaultValue")&&sp(e,t.type,pi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ky(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sp(e,t,n){(t!=="number"||bd(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ms=Array.isArray;function ua(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pi(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function lp(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(G(91));return Ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ny(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(G(92));if(ms(n)){if(1<n.length)throw Error(G(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pi(n)}}function o4(e,t){var n=pi(t.value),r=pi(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ey(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function a4(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function up(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?a4(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wl,s4=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wl=Wl||document.createElement("div"),Wl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ds(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},o6=["Webkit","ms","Moz","O"];Object.keys(bs).forEach(function(e){o6.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),bs[t]=bs[e]})});function l4(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||bs.hasOwnProperty(e)&&bs[e]?(""+t).trim():t+"px"}function u4(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=l4(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var a6=Ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dp(e,t){if(t){if(a6[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(G(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(G(61))}if(t.style!=null&&typeof t.style!="object")throw Error(G(62))}}function cp(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fp=null;function fg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hp=null,da=null,ca=null;function Iy(e){if(e=ml(e)){if(typeof hp!="function")throw Error(G(280));var t=e.stateNode;t&&(t=Ic(t),hp(e.stateNode,e.type,t))}}function d4(e){da?ca?ca.push(e):ca=[e]:da=e}function c4(){if(da){var e=da,t=ca;if(ca=da=null,Iy(e),t)for(e=0;e<t.length;e++)Iy(t[e])}}function f4(e,t){return e(t)}function h4(){}var qf=!1;function p4(e,t,n){if(qf)return e(t,n);qf=!0;try{return f4(e,t,n)}finally{qf=!1,(da!==null||ca!==null)&&(h4(),c4())}}function Ms(e,t){var n=e.stateNode;if(n===null)return null;var r=Ic(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(G(231,t,typeof n));return n}var pp=!1;if(wr)try{var Qa={};Object.defineProperty(Qa,"passive",{get:function(){pp=!0}}),window.addEventListener("test",Qa,Qa),window.removeEventListener("test",Qa,Qa)}catch{pp=!1}function s6(e,t,n,r,i,o,a,l,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(c){this.onError(c)}}var ws=!1,wd=null,Sd=!1,gp=null,l6={onError:function(e){ws=!0,wd=e}};function u6(e,t,n,r,i,o,a,l,u){ws=!1,wd=null,s6.apply(l6,arguments)}function d6(e,t,n,r,i,o,a,l,u){if(u6.apply(this,arguments),ws){if(ws){var d=wd;ws=!1,wd=null}else throw Error(G(198));Sd||(Sd=!0,gp=d)}}function ao(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g4(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ty(e){if(ao(e)!==e)throw Error(G(188))}function c6(e){var t=e.alternate;if(!t){if(t=ao(e),t===null)throw Error(G(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ty(i),e;if(o===r)return Ty(i),t;o=o.sibling}throw Error(G(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(G(189))}}if(n.alternate!==r)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?e:t}function m4(e){return e=c6(e),e!==null?y4(e):null}function y4(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=y4(e);if(t!==null)return t;e=e.sibling}return null}var v4=Kt.unstable_scheduleCallback,Ay=Kt.unstable_cancelCallback,f6=Kt.unstable_shouldYield,h6=Kt.unstable_requestPaint,Xe=Kt.unstable_now,p6=Kt.unstable_getCurrentPriorityLevel,hg=Kt.unstable_ImmediatePriority,x4=Kt.unstable_UserBlockingPriority,Cd=Kt.unstable_NormalPriority,g6=Kt.unstable_LowPriority,$4=Kt.unstable_IdlePriority,_c=null,Kn=null;function m6(e){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(_c,e,void 0,(e.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:x6,y6=Math.log,v6=Math.LN2;function x6(e){return e>>>=0,e===0?32:31-(y6(e)/v6|0)|0}var Vl=64,ql=4194304;function ys(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pd(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ys(l):(o&=a,o!==0&&(r=ys(o)))}else a=n&~i,a!==0?r=ys(a):o!==0&&(r=ys(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-En(t),i=1<<n,r|=e[n],t&=~i;return r}function $6(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function b6(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-En(o),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=$6(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function mp(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function b4(){var e=Vl;return Vl<<=1,!(Vl&4194240)&&(Vl=64),e}function Gf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-En(t),e[t]=n}function w6(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-En(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function pg(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-En(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ne=0;function w4(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var S4,gg,C4,P4,O4,yp=!1,Gl=[],Xr=null,ei=null,ti=null,Ls=new Map,js=new Map,Yr=[],S6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ry(e,t){switch(e){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":ei=null;break;case"mouseover":case"mouseout":ti=null;break;case"pointerover":case"pointerout":Ls.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":js.delete(t.pointerId)}}function Ka(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ml(t),t!==null&&gg(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function C6(e,t,n,r,i){switch(t){case"focusin":return Xr=Ka(Xr,e,t,n,r,i),!0;case"dragenter":return ei=Ka(ei,e,t,n,r,i),!0;case"mouseover":return ti=Ka(ti,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ls.set(o,Ka(Ls.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,js.set(o,Ka(js.get(o)||null,e,t,n,r,i)),!0}return!1}function _4(e){var t=Hi(e.target);if(t!==null){var n=ao(t);if(n!==null){if(t=n.tag,t===13){if(t=g4(n),t!==null){e.blockedOn=t,O4(e.priority,function(){C4(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vp(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fp=r,n.target.dispatchEvent(r),fp=null}else return t=ml(n),t!==null&&gg(t),e.blockedOn=n,!1;t.shift()}return!0}function Fy(e,t,n){Yu(e)&&n.delete(t)}function P6(){yp=!1,Xr!==null&&Yu(Xr)&&(Xr=null),ei!==null&&Yu(ei)&&(ei=null),ti!==null&&Yu(ti)&&(ti=null),Ls.forEach(Fy),js.forEach(Fy)}function Za(e,t){e.blockedOn===t&&(e.blockedOn=null,yp||(yp=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,P6)))}function zs(e){function t(i){return Za(i,e)}if(0<Gl.length){Za(Gl[0],e);for(var n=1;n<Gl.length;n++){var r=Gl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xr!==null&&Za(Xr,e),ei!==null&&Za(ei,e),ti!==null&&Za(ti,e),Ls.forEach(t),js.forEach(t),n=0;n<Yr.length;n++)r=Yr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yr.length&&(n=Yr[0],n.blockedOn===null);)_4(n),n.blockedOn===null&&Yr.shift()}var fa=Nr.ReactCurrentBatchConfig,Od=!0;function O6(e,t,n,r){var i=Ne,o=fa.transition;fa.transition=null;try{Ne=1,mg(e,t,n,r)}finally{Ne=i,fa.transition=o}}function _6(e,t,n,r){var i=Ne,o=fa.transition;fa.transition=null;try{Ne=4,mg(e,t,n,r)}finally{Ne=i,fa.transition=o}}function mg(e,t,n,r){if(Od){var i=vp(e,t,n,r);if(i===null)ih(e,t,r,_d,n),Ry(e,r);else if(C6(i,e,t,n,r))r.stopPropagation();else if(Ry(e,r),t&4&&-1<S6.indexOf(e)){for(;i!==null;){var o=ml(i);if(o!==null&&S4(o),o=vp(e,t,n,r),o===null&&ih(e,t,r,_d,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ih(e,t,r,null,n)}}var _d=null;function vp(e,t,n,r){if(_d=null,e=fg(r),e=Hi(e),e!==null)if(t=ao(e),t===null)e=null;else if(n=t.tag,n===13){if(e=g4(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return _d=e,null}function k4(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(p6()){case hg:return 1;case x4:return 4;case Cd:case g6:return 16;case $4:return 536870912;default:return 16}default:return 16}}var qr=null,yg=null,Wu=null;function N4(){if(Wu)return Wu;var e,t=yg,n=t.length,r,i="value"in qr?qr.value:qr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Wu=i.slice(e,1<r?1-r:void 0)}function Vu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ql(){return!0}function Dy(){return!1}function Xt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ql:Dy,this.isPropagationStopped=Dy,this}return Ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ql)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ql)},persist:function(){},isPersistent:Ql}),t}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vg=Xt(Da),gl=Ge({},Da,{view:0,detail:0}),k6=Xt(gl),Qf,Kf,Ja,kc=Ge({},gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ja&&(Ja&&e.type==="mousemove"?(Qf=e.screenX-Ja.screenX,Kf=e.screenY-Ja.screenY):Kf=Qf=0,Ja=e),Qf)},movementY:function(e){return"movementY"in e?e.movementY:Kf}}),My=Xt(kc),N6=Ge({},kc,{dataTransfer:0}),E6=Xt(N6),I6=Ge({},gl,{relatedTarget:0}),Zf=Xt(I6),T6=Ge({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),A6=Xt(T6),R6=Ge({},Da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),F6=Xt(R6),D6=Ge({},Da,{data:0}),Ly=Xt(D6),M6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z6(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=j6[e])?!!t[e]:!1}function xg(){return z6}var U6=Ge({},gl,{key:function(e){if(e.key){var t=M6[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?L6[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xg,charCode:function(e){return e.type==="keypress"?Vu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),B6=Xt(U6),H6=Ge({},kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jy=Xt(H6),Y6=Ge({},gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xg}),W6=Xt(Y6),V6=Ge({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),q6=Xt(V6),G6=Ge({},kc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Q6=Xt(G6),K6=[9,13,27,32],$g=wr&&"CompositionEvent"in window,Ss=null;wr&&"documentMode"in document&&(Ss=document.documentMode);var Z6=wr&&"TextEvent"in window&&!Ss,E4=wr&&(!$g||Ss&&8<Ss&&11>=Ss),zy=String.fromCharCode(32),Uy=!1;function I4(e,t){switch(e){case"keyup":return K6.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T4(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Go=!1;function J6(e,t){switch(e){case"compositionend":return T4(t);case"keypress":return t.which!==32?null:(Uy=!0,zy);case"textInput":return e=t.data,e===zy&&Uy?null:e;default:return null}}function X6(e,t){if(Go)return e==="compositionend"||!$g&&I4(e,t)?(e=N4(),Wu=yg=qr=null,Go=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return E4&&t.locale!=="ko"?null:t.data;default:return null}}var e9={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function By(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!e9[e.type]:t==="textarea"}function A4(e,t,n,r){d4(r),t=kd(t,"onChange"),0<t.length&&(n=new vg("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cs=null,Us=null;function t9(e){Y4(e,0)}function Nc(e){var t=Zo(e);if(r4(t))return e}function n9(e,t){if(e==="change")return t}var R4=!1;if(wr){var Jf;if(wr){var Xf="oninput"in document;if(!Xf){var Hy=document.createElement("div");Hy.setAttribute("oninput","return;"),Xf=typeof Hy.oninput=="function"}Jf=Xf}else Jf=!1;R4=Jf&&(!document.documentMode||9<document.documentMode)}function Yy(){Cs&&(Cs.detachEvent("onpropertychange",F4),Us=Cs=null)}function F4(e){if(e.propertyName==="value"&&Nc(Us)){var t=[];A4(t,Us,e,fg(e)),p4(t9,t)}}function r9(e,t,n){e==="focusin"?(Yy(),Cs=t,Us=n,Cs.attachEvent("onpropertychange",F4)):e==="focusout"&&Yy()}function i9(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nc(Us)}function o9(e,t){if(e==="click")return Nc(t)}function a9(e,t){if(e==="input"||e==="change")return Nc(t)}function s9(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var An=typeof Object.is=="function"?Object.is:s9;function Bs(e,t){if(An(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ep.call(t,i)||!An(e[i],t[i]))return!1}return!0}function Wy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vy(e,t){var n=Wy(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wy(n)}}function D4(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?D4(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function M4(){for(var e=window,t=bd();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bd(e.document)}return t}function bg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function l9(e){var t=M4(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&D4(n.ownerDocument.documentElement,n)){if(r!==null&&bg(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Vy(n,o);var a=Vy(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var u9=wr&&"documentMode"in document&&11>=document.documentMode,Qo=null,xp=null,Ps=null,$p=!1;function qy(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$p||Qo==null||Qo!==bd(r)||(r=Qo,"selectionStart"in r&&bg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ps&&Bs(Ps,r)||(Ps=r,r=kd(xp,"onSelect"),0<r.length&&(t=new vg("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qo)))}function Kl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ko={animationend:Kl("Animation","AnimationEnd"),animationiteration:Kl("Animation","AnimationIteration"),animationstart:Kl("Animation","AnimationStart"),transitionend:Kl("Transition","TransitionEnd")},eh={},L4={};wr&&(L4=document.createElement("div").style,"AnimationEvent"in window||(delete Ko.animationend.animation,delete Ko.animationiteration.animation,delete Ko.animationstart.animation),"TransitionEvent"in window||delete Ko.transitionend.transition);function Ec(e){if(eh[e])return eh[e];if(!Ko[e])return e;var t=Ko[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in L4)return eh[e]=t[n];return e}var j4=Ec("animationend"),z4=Ec("animationiteration"),U4=Ec("animationstart"),B4=Ec("transitionend"),H4=new Map,Gy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xi(e,t){H4.set(e,t),oo(t,[e])}for(var th=0;th<Gy.length;th++){var nh=Gy[th],d9=nh.toLowerCase(),c9=nh[0].toUpperCase()+nh.slice(1);xi(d9,"on"+c9)}xi(j4,"onAnimationEnd");xi(z4,"onAnimationIteration");xi(U4,"onAnimationStart");xi("dblclick","onDoubleClick");xi("focusin","onFocus");xi("focusout","onBlur");xi(B4,"onTransitionEnd");wa("onMouseEnter",["mouseout","mouseover"]);wa("onMouseLeave",["mouseout","mouseover"]);wa("onPointerEnter",["pointerout","pointerover"]);wa("onPointerLeave",["pointerout","pointerover"]);oo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));oo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));oo("onBeforeInput",["compositionend","keypress","textInput","paste"]);oo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));oo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));oo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f9=new Set("cancel close invalid load scroll toggle".split(" ").concat(vs));function Qy(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,d6(r,t,void 0,e),e.currentTarget=null}function Y4(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;Qy(i,l,d),o=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,d=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;Qy(i,l,d),o=u}}}if(Sd)throw e=gp,Sd=!1,gp=null,e}function Le(e,t){var n=t[Pp];n===void 0&&(n=t[Pp]=new Set);var r=e+"__bubble";n.has(r)||(W4(t,e,2,!1),n.add(r))}function rh(e,t,n){var r=0;t&&(r|=4),W4(n,e,r,t)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Hs(e){if(!e[Zl]){e[Zl]=!0,Jx.forEach(function(n){n!=="selectionchange"&&(f9.has(n)||rh(n,!1,e),rh(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zl]||(t[Zl]=!0,rh("selectionchange",!1,t))}}function W4(e,t,n,r){switch(k4(t)){case 1:var i=O6;break;case 4:i=_6;break;default:i=mg}n=i.bind(null,t,n,e),i=void 0,!pp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ih(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Hi(l),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}l=l.parentNode}}r=r.return}p4(function(){var d=o,c=fg(n),f=[];e:{var g=H4.get(e);if(g!==void 0){var $=vg,v=e;switch(e){case"keypress":if(Vu(n)===0)break e;case"keydown":case"keyup":$=B6;break;case"focusin":v="focus",$=Zf;break;case"focusout":v="blur",$=Zf;break;case"beforeblur":case"afterblur":$=Zf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=My;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=E6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=W6;break;case j4:case z4:case U4:$=A6;break;case B4:$=q6;break;case"scroll":$=k6;break;case"wheel":$=Q6;break;case"copy":case"cut":case"paste":$=F6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=jy}var b=(t&4)!==0,w=!b&&e==="scroll",m=b?g!==null?g+"Capture":null:g;b=[];for(var p=d,x;p!==null;){x=p;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,m!==null&&(S=Ms(p,m),S!=null&&b.push(Ys(p,S,x)))),w)break;p=p.return}0<b.length&&(g=new $(g,v,null,n,c),f.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",g&&n!==fp&&(v=n.relatedTarget||n.fromElement)&&(Hi(v)||v[Sr]))break e;if(($||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,$?(v=n.relatedTarget||n.toElement,$=d,v=v?Hi(v):null,v!==null&&(w=ao(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):($=null,v=d),$!==v)){if(b=My,S="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(b=jy,S="onPointerLeave",m="onPointerEnter",p="pointer"),w=$==null?g:Zo($),x=v==null?g:Zo(v),g=new b(S,p+"leave",$,n,c),g.target=w,g.relatedTarget=x,S=null,Hi(c)===d&&(b=new b(m,p+"enter",v,n,c),b.target=x,b.relatedTarget=w,S=b),w=S,$&&v)t:{for(b=$,m=v,p=0,x=b;x;x=fo(x))p++;for(x=0,S=m;S;S=fo(S))x++;for(;0<p-x;)b=fo(b),p--;for(;0<x-p;)m=fo(m),x--;for(;p--;){if(b===m||m!==null&&b===m.alternate)break t;b=fo(b),m=fo(m)}b=null}else b=null;$!==null&&Ky(f,g,$,b,!1),v!==null&&w!==null&&Ky(f,w,v,b,!0)}}e:{if(g=d?Zo(d):window,$=g.nodeName&&g.nodeName.toLowerCase(),$==="select"||$==="input"&&g.type==="file")var P=n9;else if(By(g))if(R4)P=a9;else{P=i9;var _=r9}else($=g.nodeName)&&$.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(P=o9);if(P&&(P=P(e,d))){A4(f,P,n,c);break e}_&&_(e,g,d),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&sp(g,"number",g.value)}switch(_=d?Zo(d):window,e){case"focusin":(By(_)||_.contentEditable==="true")&&(Qo=_,xp=d,Ps=null);break;case"focusout":Ps=xp=Qo=null;break;case"mousedown":$p=!0;break;case"contextmenu":case"mouseup":case"dragend":$p=!1,qy(f,n,c);break;case"selectionchange":if(u9)break;case"keydown":case"keyup":qy(f,n,c)}var T;if($g)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Go?I4(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(E4&&n.locale!=="ko"&&(Go||R!=="onCompositionStart"?R==="onCompositionEnd"&&Go&&(T=N4()):(qr=c,yg="value"in qr?qr.value:qr.textContent,Go=!0)),_=kd(d,R),0<_.length&&(R=new Ly(R,e,null,n,c),f.push({event:R,listeners:_}),T?R.data=T:(T=T4(n),T!==null&&(R.data=T)))),(T=Z6?J6(e,n):X6(e,n))&&(d=kd(d,"onBeforeInput"),0<d.length&&(c=new Ly("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:d}),c.data=T))}Y4(f,t)})}function Ys(e,t,n){return{instance:e,listener:t,currentTarget:n}}function kd(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ms(e,n),o!=null&&r.unshift(Ys(e,o,i)),o=Ms(e,t),o!=null&&r.push(Ys(e,o,i))),e=e.return}return r}function fo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ky(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=Ms(n,o),u!=null&&a.unshift(Ys(n,u,l))):i||(u=Ms(n,o),u!=null&&a.push(Ys(n,u,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var h9=/\r\n?/g,p9=/\u0000|\uFFFD/g;function Zy(e){return(typeof e=="string"?e:""+e).replace(h9,`
`).replace(p9,"")}function Jl(e,t,n){if(t=Zy(t),Zy(e)!==t&&n)throw Error(G(425))}function Nd(){}var bp=null,wp=null;function Sp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cp=typeof setTimeout=="function"?setTimeout:void 0,g9=typeof clearTimeout=="function"?clearTimeout:void 0,Jy=typeof Promise=="function"?Promise:void 0,m9=typeof queueMicrotask=="function"?queueMicrotask:typeof Jy<"u"?function(e){return Jy.resolve(null).then(e).catch(y9)}:Cp;function y9(e){setTimeout(function(){throw e})}function oh(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),zs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zs(t)}function ni(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ma=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Ma,Ws="__reactProps$"+Ma,Sr="__reactContainer$"+Ma,Pp="__reactEvents$"+Ma,v9="__reactListeners$"+Ma,x9="__reactHandles$"+Ma;function Hi(e){var t=e[Yn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Sr]||n[Yn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xy(e);e!==null;){if(n=e[Yn])return n;e=Xy(e)}return t}e=n,n=e.parentNode}return null}function ml(e){return e=e[Yn]||e[Sr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function Ic(e){return e[Ws]||null}var Op=[],Jo=-1;function $i(e){return{current:e}}function ze(e){0>Jo||(e.current=Op[Jo],Op[Jo]=null,Jo--)}function Me(e,t){Jo++,Op[Jo]=e.current,e.current=t}var gi={},Pt=$i(gi),zt=$i(!1),Xi=gi;function Sa(e,t){var n=e.type.contextTypes;if(!n)return gi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ut(e){return e=e.childContextTypes,e!=null}function Ed(){ze(zt),ze(Pt)}function e2(e,t,n){if(Pt.current!==gi)throw Error(G(168));Me(Pt,t),Me(zt,n)}function V4(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(G(108,r6(e)||"Unknown",i));return Ge({},n,r)}function Id(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gi,Xi=Pt.current,Me(Pt,e),Me(zt,zt.current),!0}function t2(e,t,n){var r=e.stateNode;if(!r)throw Error(G(169));n?(e=V4(e,t,Xi),r.__reactInternalMemoizedMergedChildContext=e,ze(zt),ze(Pt),Me(Pt,e)):ze(zt),Me(zt,n)}var dr=null,Tc=!1,ah=!1;function q4(e){dr===null?dr=[e]:dr.push(e)}function $9(e){Tc=!0,q4(e)}function bi(){if(!ah&&dr!==null){ah=!0;var e=0,t=Ne;try{var n=dr;for(Ne=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dr=null,Tc=!1}catch(i){throw dr!==null&&(dr=dr.slice(e+1)),v4(hg,bi),i}finally{Ne=t,ah=!1}}return null}var Xo=[],ea=0,Td=null,Ad=0,ln=[],un=0,eo=null,hr=1,pr="";function ji(e,t){Xo[ea++]=Ad,Xo[ea++]=Td,Td=e,Ad=t}function G4(e,t,n){ln[un++]=hr,ln[un++]=pr,ln[un++]=eo,eo=e;var r=hr;e=pr;var i=32-En(r)-1;r&=~(1<<i),n+=1;var o=32-En(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,hr=1<<32-En(t)+i|n<<i|r,pr=o+e}else hr=1<<o|n<<i|r,pr=e}function wg(e){e.return!==null&&(ji(e,1),G4(e,1,0))}function Sg(e){for(;e===Td;)Td=Xo[--ea],Xo[ea]=null,Ad=Xo[--ea],Xo[ea]=null;for(;e===eo;)eo=ln[--un],ln[un]=null,pr=ln[--un],ln[un]=null,hr=ln[--un],ln[un]=null}var Qt=null,Gt=null,We=!1,On=null;function Q4(e,t){var n=cn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function n2(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qt=e,Gt=ni(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qt=e,Gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=eo!==null?{id:hr,overflow:pr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=cn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qt=e,Gt=null,!0):!1;default:return!1}}function _p(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kp(e){if(We){var t=Gt;if(t){var n=t;if(!n2(e,t)){if(_p(e))throw Error(G(418));t=ni(n.nextSibling);var r=Qt;t&&n2(e,t)?Q4(r,n):(e.flags=e.flags&-4097|2,We=!1,Qt=e)}}else{if(_p(e))throw Error(G(418));e.flags=e.flags&-4097|2,We=!1,Qt=e}}}function r2(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qt=e}function Xl(e){if(e!==Qt)return!1;if(!We)return r2(e),We=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sp(e.type,e.memoizedProps)),t&&(t=Gt)){if(_p(e))throw K4(),Error(G(418));for(;t;)Q4(e,t),t=ni(t.nextSibling)}if(r2(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Gt=ni(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Gt=null}}else Gt=Qt?ni(e.stateNode.nextSibling):null;return!0}function K4(){for(var e=Gt;e;)e=ni(e.nextSibling)}function Ca(){Gt=Qt=null,We=!1}function Cg(e){On===null?On=[e]:On.push(e)}var b9=Nr.ReactCurrentBatchConfig;function Cn(e,t){if(e&&e.defaultProps){t=Ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Rd=$i(null),Fd=null,ta=null,Pg=null;function Og(){Pg=ta=Fd=null}function _g(e){var t=Rd.current;ze(Rd),e._currentValue=t}function Np(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ha(e,t){Fd=e,Pg=ta=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(jt=!0),e.firstContext=null)}function hn(e){var t=e._currentValue;if(Pg!==e)if(e={context:e,memoizedValue:t,next:null},ta===null){if(Fd===null)throw Error(G(308));ta=e,Fd.dependencies={lanes:0,firstContext:e}}else ta=ta.next=e;return t}var Yi=null;function kg(e){Yi===null?Yi=[e]:Yi.push(e)}function Z4(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,kg(t)):(n.next=i.next,i.next=n),t.interleaved=n,Cr(e,r)}function Cr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Br=!1;function Ng(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function J4(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ri(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Cr(e,n)}return i=r.interleaved,i===null?(t.next=t,kg(r)):(t.next=i.next,i.next=t),r.interleaved=t,Cr(e,n)}function qu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pg(e,n)}}function i2(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Dd(e,t,n,r){var i=e.updateQueue;Br=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,a===null?o=d:a.next=d,a=u;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=d:l.next=d,c.lastBaseUpdate=u))}if(o!==null){var f=i.baseState;a=0,c=d=u=null,l=o;do{var g=l.lane,$=l.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:$,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,b=l;switch(g=t,$=n,b.tag){case 1:if(v=b.payload,typeof v=="function"){f=v.call($,f,g);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,g=typeof v=="function"?v.call($,f,g):v,g==null)break e;f=Ge({},f,g);break e;case 2:Br=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else $={eventTime:$,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(d=c=$,u=f):c=c.next=$,a|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(c===null&&(u=f),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);no|=a,e.lanes=a,e.memoizedState=f}}function o2(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(G(191,i));i.call(r)}}}var X4=new Zx.Component().refs;function Ep(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ac={isMounted:function(e){return(e=e._reactInternals)?ao(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=It(),i=oi(e),o=xr(r,i);o.payload=t,n!=null&&(o.callback=n),t=ri(e,o,i),t!==null&&(In(t,e,i,r),qu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=It(),i=oi(e),o=xr(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ri(e,o,i),t!==null&&(In(t,e,i,r),qu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=It(),r=oi(e),i=xr(n,r);i.tag=2,t!=null&&(i.callback=t),t=ri(e,i,r),t!==null&&(In(t,e,r,n),qu(t,e,r))}};function a2(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Bs(n,r)||!Bs(i,o):!0}function e$(e,t,n){var r=!1,i=gi,o=t.contextType;return typeof o=="object"&&o!==null?o=hn(o):(i=Ut(t)?Xi:Pt.current,r=t.contextTypes,o=(r=r!=null)?Sa(e,i):gi),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ac,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function s2(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ac.enqueueReplaceState(t,t.state,null)}function Ip(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=X4,Ng(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=hn(o):(o=Ut(t)?Xi:Pt.current,i.context=Sa(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ep(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ac.enqueueReplaceState(i,i.state,null),Dd(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Xa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var r=n.stateNode}if(!r)throw Error(G(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===X4&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,e))}return e}function eu(e,t){throw e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function l2(e){var t=e._init;return t(e._payload)}function t$(e){function t(m,p){if(e){var x=m.deletions;x===null?(m.deletions=[p],m.flags|=16):x.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=ai(m,p),m.index=0,m.sibling=null,m}function o(m,p,x){return m.index=x,e?(x=m.alternate,x!==null?(x=x.index,x<p?(m.flags|=2,p):x):(m.flags|=2,p)):(m.flags|=1048576,p)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,x,S){return p===null||p.tag!==6?(p=hh(x,m.mode,S),p.return=m,p):(p=i(p,x),p.return=m,p)}function u(m,p,x,S){var P=x.type;return P===qo?c(m,p,x.props.children,S,x.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ur&&l2(P)===p.type)?(S=i(p,x.props),S.ref=Xa(m,p,x),S.return=m,S):(S=Xu(x.type,x.key,x.props,null,m.mode,S),S.ref=Xa(m,p,x),S.return=m,S)}function d(m,p,x,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=ph(x,m.mode,S),p.return=m,p):(p=i(p,x.children||[]),p.return=m,p)}function c(m,p,x,S,P){return p===null||p.tag!==7?(p=Ki(x,m.mode,S,P),p.return=m,p):(p=i(p,x),p.return=m,p)}function f(m,p,x){if(typeof p=="string"&&p!==""||typeof p=="number")return p=hh(""+p,m.mode,x),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Hl:return x=Xu(p.type,p.key,p.props,null,m.mode,x),x.ref=Xa(m,null,p),x.return=m,x;case Vo:return p=ph(p,m.mode,x),p.return=m,p;case Ur:var S=p._init;return f(m,S(p._payload),x)}if(ms(p)||Ga(p))return p=Ki(p,m.mode,x,null),p.return=m,p;eu(m,p)}return null}function g(m,p,x,S){var P=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:l(m,p,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Hl:return x.key===P?u(m,p,x,S):null;case Vo:return x.key===P?d(m,p,x,S):null;case Ur:return P=x._init,g(m,p,P(x._payload),S)}if(ms(x)||Ga(x))return P!==null?null:c(m,p,x,S,null);eu(m,x)}return null}function $(m,p,x,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(x)||null,l(p,m,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Hl:return m=m.get(S.key===null?x:S.key)||null,u(p,m,S,P);case Vo:return m=m.get(S.key===null?x:S.key)||null,d(p,m,S,P);case Ur:var _=S._init;return $(m,p,x,_(S._payload),P)}if(ms(S)||Ga(S))return m=m.get(x)||null,c(p,m,S,P,null);eu(p,S)}return null}function v(m,p,x,S){for(var P=null,_=null,T=p,R=p=0,Y=null;T!==null&&R<x.length;R++){T.index>R?(Y=T,T=null):Y=T.sibling;var z=g(m,T,x[R],S);if(z===null){T===null&&(T=Y);break}e&&T&&z.alternate===null&&t(m,T),p=o(z,p,R),_===null?P=z:_.sibling=z,_=z,T=Y}if(R===x.length)return n(m,T),We&&ji(m,R),P;if(T===null){for(;R<x.length;R++)T=f(m,x[R],S),T!==null&&(p=o(T,p,R),_===null?P=T:_.sibling=T,_=T);return We&&ji(m,R),P}for(T=r(m,T);R<x.length;R++)Y=$(T,m,R,x[R],S),Y!==null&&(e&&Y.alternate!==null&&T.delete(Y.key===null?R:Y.key),p=o(Y,p,R),_===null?P=Y:_.sibling=Y,_=Y);return e&&T.forEach(function(ie){return t(m,ie)}),We&&ji(m,R),P}function b(m,p,x,S){var P=Ga(x);if(typeof P!="function")throw Error(G(150));if(x=P.call(x),x==null)throw Error(G(151));for(var _=P=null,T=p,R=p=0,Y=null,z=x.next();T!==null&&!z.done;R++,z=x.next()){T.index>R?(Y=T,T=null):Y=T.sibling;var ie=g(m,T,z.value,S);if(ie===null){T===null&&(T=Y);break}e&&T&&ie.alternate===null&&t(m,T),p=o(ie,p,R),_===null?P=ie:_.sibling=ie,_=ie,T=Y}if(z.done)return n(m,T),We&&ji(m,R),P;if(T===null){for(;!z.done;R++,z=x.next())z=f(m,z.value,S),z!==null&&(p=o(z,p,R),_===null?P=z:_.sibling=z,_=z);return We&&ji(m,R),P}for(T=r(m,T);!z.done;R++,z=x.next())z=$(T,m,R,z.value,S),z!==null&&(e&&z.alternate!==null&&T.delete(z.key===null?R:z.key),p=o(z,p,R),_===null?P=z:_.sibling=z,_=z);return e&&T.forEach(function(M){return t(m,M)}),We&&ji(m,R),P}function w(m,p,x,S){if(typeof x=="object"&&x!==null&&x.type===qo&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Hl:e:{for(var P=x.key,_=p;_!==null;){if(_.key===P){if(P=x.type,P===qo){if(_.tag===7){n(m,_.sibling),p=i(_,x.props.children),p.return=m,m=p;break e}}else if(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ur&&l2(P)===_.type){n(m,_.sibling),p=i(_,x.props),p.ref=Xa(m,_,x),p.return=m,m=p;break e}n(m,_);break}else t(m,_);_=_.sibling}x.type===qo?(p=Ki(x.props.children,m.mode,S,x.key),p.return=m,m=p):(S=Xu(x.type,x.key,x.props,null,m.mode,S),S.ref=Xa(m,p,x),S.return=m,m=S)}return a(m);case Vo:e:{for(_=x.key;p!==null;){if(p.key===_)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){n(m,p.sibling),p=i(p,x.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=ph(x,m.mode,S),p.return=m,m=p}return a(m);case Ur:return _=x._init,w(m,p,_(x._payload),S)}if(ms(x))return v(m,p,x,S);if(Ga(x))return b(m,p,x,S);eu(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,x),p.return=m,m=p):(n(m,p),p=hh(x,m.mode,S),p.return=m,m=p),a(m)):n(m,p)}return w}var Pa=t$(!0),n$=t$(!1),yl={},Zn=$i(yl),Vs=$i(yl),qs=$i(yl);function Wi(e){if(e===yl)throw Error(G(174));return e}function Eg(e,t){switch(Me(qs,t),Me(Vs,e),Me(Zn,yl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:up(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=up(t,e)}ze(Zn),Me(Zn,t)}function Oa(){ze(Zn),ze(Vs),ze(qs)}function r$(e){Wi(qs.current);var t=Wi(Zn.current),n=up(t,e.type);t!==n&&(Me(Vs,e),Me(Zn,n))}function Ig(e){Vs.current===e&&(ze(Zn),ze(Vs))}var Ve=$i(0);function Md(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sh=[];function Tg(){for(var e=0;e<sh.length;e++)sh[e]._workInProgressVersionPrimary=null;sh.length=0}var Gu=Nr.ReactCurrentDispatcher,lh=Nr.ReactCurrentBatchConfig,to=0,qe=null,ot=null,ct=null,Ld=!1,Os=!1,Gs=0,w9=0;function $t(){throw Error(G(321))}function Ag(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!An(e[n],t[n]))return!1;return!0}function Rg(e,t,n,r,i,o){if(to=o,qe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gu.current=e===null||e.memoizedState===null?O9:_9,e=n(r,i),Os){o=0;do{if(Os=!1,Gs=0,25<=o)throw Error(G(301));o+=1,ct=ot=null,t.updateQueue=null,Gu.current=k9,e=n(r,i)}while(Os)}if(Gu.current=jd,t=ot!==null&&ot.next!==null,to=0,ct=ot=qe=null,Ld=!1,t)throw Error(G(300));return e}function Fg(){var e=Gs!==0;return Gs=0,e}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?qe.memoizedState=ct=e:ct=ct.next=e,ct}function pn(){if(ot===null){var e=qe.alternate;e=e!==null?e.memoizedState:null}else e=ot.next;var t=ct===null?qe.memoizedState:ct.next;if(t!==null)ct=t,ot=e;else{if(e===null)throw Error(G(310));ot=e,e={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},ct===null?qe.memoizedState=ct=e:ct=ct.next=e}return ct}function Qs(e,t){return typeof t=="function"?t(e):t}function uh(e){var t=pn(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=ot,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,u=null,d=o;do{var c=d.lane;if((to&c)===c)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var f={lane:c,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=f,a=r):u=u.next=f,qe.lanes|=c,no|=c}d=d.next}while(d!==null&&d!==o);u===null?a=r:u.next=l,An(r,t.memoizedState)||(jt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,qe.lanes|=o,no|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function dh(e){var t=pn(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);An(o,t.memoizedState)||(jt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function i$(){}function o$(e,t){var n=qe,r=pn(),i=t(),o=!An(r.memoizedState,i);if(o&&(r.memoizedState=i,jt=!0),r=r.queue,Dg(l$.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ct!==null&&ct.memoizedState.tag&1){if(n.flags|=2048,Ks(9,s$.bind(null,n,r,i,t),void 0,null),ft===null)throw Error(G(349));to&30||a$(n,t,i)}return i}function a$(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=qe.updateQueue,t===null?(t={lastEffect:null,stores:null},qe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function s$(e,t,n,r){t.value=n,t.getSnapshot=r,u$(t)&&d$(e)}function l$(e,t,n){return n(function(){u$(t)&&d$(e)})}function u$(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!An(e,n)}catch{return!0}}function d$(e){var t=Cr(e,1);t!==null&&In(t,e,1,-1)}function u2(e){var t=Hn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qs,lastRenderedState:e},t.queue=e,e=e.dispatch=P9.bind(null,qe,e),[t.memoizedState,e]}function Ks(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=qe.updateQueue,t===null?(t={lastEffect:null,stores:null},qe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function c$(){return pn().memoizedState}function Qu(e,t,n,r){var i=Hn();qe.flags|=e,i.memoizedState=Ks(1|t,n,void 0,r===void 0?null:r)}function Rc(e,t,n,r){var i=pn();r=r===void 0?null:r;var o=void 0;if(ot!==null){var a=ot.memoizedState;if(o=a.destroy,r!==null&&Ag(r,a.deps)){i.memoizedState=Ks(t,n,o,r);return}}qe.flags|=e,i.memoizedState=Ks(1|t,n,o,r)}function d2(e,t){return Qu(8390656,8,e,t)}function Dg(e,t){return Rc(2048,8,e,t)}function f$(e,t){return Rc(4,2,e,t)}function h$(e,t){return Rc(4,4,e,t)}function p$(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function g$(e,t,n){return n=n!=null?n.concat([e]):null,Rc(4,4,p$.bind(null,t,e),n)}function Mg(){}function m$(e,t){var n=pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ag(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function y$(e,t){var n=pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ag(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function v$(e,t,n){return to&21?(An(n,t)||(n=b4(),qe.lanes|=n,no|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,jt=!0),e.memoizedState=n)}function S9(e,t){var n=Ne;Ne=n!==0&&4>n?n:4,e(!0);var r=lh.transition;lh.transition={};try{e(!1),t()}finally{Ne=n,lh.transition=r}}function x$(){return pn().memoizedState}function C9(e,t,n){var r=oi(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$$(e))b$(t,n);else if(n=Z4(e,t,n,r),n!==null){var i=It();In(n,e,r,i),w$(n,t,r)}}function P9(e,t,n){var r=oi(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($$(e))b$(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,An(l,a)){var u=t.interleaved;u===null?(i.next=i,kg(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Z4(e,t,i,r),n!==null&&(i=It(),In(n,e,r,i),w$(n,t,r))}}function $$(e){var t=e.alternate;return e===qe||t!==null&&t===qe}function b$(e,t){Os=Ld=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function w$(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pg(e,n)}}var jd={readContext:hn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},O9={readContext:hn,useCallback:function(e,t){return Hn().memoizedState=[e,t===void 0?null:t],e},useContext:hn,useEffect:d2,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qu(4194308,4,p$.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qu(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qu(4,2,e,t)},useMemo:function(e,t){var n=Hn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Hn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=C9.bind(null,qe,e),[r.memoizedState,e]},useRef:function(e){var t=Hn();return e={current:e},t.memoizedState=e},useState:u2,useDebugValue:Mg,useDeferredValue:function(e){return Hn().memoizedState=e},useTransition:function(){var e=u2(!1),t=e[0];return e=S9.bind(null,e[1]),Hn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=qe,i=Hn();if(We){if(n===void 0)throw Error(G(407));n=n()}else{if(n=t(),ft===null)throw Error(G(349));to&30||a$(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,d2(l$.bind(null,r,o,e),[e]),r.flags|=2048,Ks(9,s$.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Hn(),t=ft.identifierPrefix;if(We){var n=pr,r=hr;n=(r&~(1<<32-En(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=w9++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_9={readContext:hn,useCallback:m$,useContext:hn,useEffect:Dg,useImperativeHandle:g$,useInsertionEffect:f$,useLayoutEffect:h$,useMemo:y$,useReducer:uh,useRef:c$,useState:function(){return uh(Qs)},useDebugValue:Mg,useDeferredValue:function(e){var t=pn();return v$(t,ot.memoizedState,e)},useTransition:function(){var e=uh(Qs)[0],t=pn().memoizedState;return[e,t]},useMutableSource:i$,useSyncExternalStore:o$,useId:x$,unstable_isNewReconciler:!1},k9={readContext:hn,useCallback:m$,useContext:hn,useEffect:Dg,useImperativeHandle:g$,useInsertionEffect:f$,useLayoutEffect:h$,useMemo:y$,useReducer:dh,useRef:c$,useState:function(){return dh(Qs)},useDebugValue:Mg,useDeferredValue:function(e){var t=pn();return ot===null?t.memoizedState=e:v$(t,ot.memoizedState,e)},useTransition:function(){var e=dh(Qs)[0],t=pn().memoizedState;return[e,t]},useMutableSource:i$,useSyncExternalStore:o$,useId:x$,unstable_isNewReconciler:!1};function _a(e,t){try{var n="",r=t;do n+=n6(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ch(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Tp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var N9=typeof WeakMap=="function"?WeakMap:Map;function S$(e,t,n){n=xr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ud||(Ud=!0,Bp=r),Tp(e,t)},n}function C$(e,t,n){n=xr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Tp(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Tp(e,t),typeof r!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function c2(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new N9;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=H9.bind(null,e,t,n),t.then(e,e))}function f2(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function h2(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=xr(-1,1),t.tag=2,ri(n,t,1))),n.lanes|=1),e)}var E9=Nr.ReactCurrentOwner,jt=!1;function Nt(e,t,n,r){t.child=e===null?n$(t,null,n,r):Pa(t,e.child,n,r)}function p2(e,t,n,r,i){n=n.render;var o=t.ref;return ha(t,i),r=Rg(e,t,n,r,o,i),n=Fg(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pr(e,t,i)):(We&&n&&wg(t),t.flags|=1,Nt(e,t,r,i),t.child)}function g2(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Wg(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,P$(e,t,o,r,i)):(e=Xu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Bs,n(a,r)&&e.ref===t.ref)return Pr(e,t,i)}return t.flags|=1,e=ai(o,r),e.ref=t.ref,e.return=t,t.child=e}function P$(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Bs(o,r)&&e.ref===t.ref)if(jt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(jt=!0);else return t.lanes=e.lanes,Pr(e,t,i)}return Ap(e,t,n,r,i)}function O$(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(ra,Yt),Yt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(ra,Yt),Yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Me(ra,Yt),Yt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Me(ra,Yt),Yt|=r;return Nt(e,t,i,n),t.child}function _$(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ap(e,t,n,r,i){var o=Ut(n)?Xi:Pt.current;return o=Sa(t,o),ha(t,i),n=Rg(e,t,n,r,o,i),r=Fg(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pr(e,t,i)):(We&&r&&wg(t),t.flags|=1,Nt(e,t,n,i),t.child)}function m2(e,t,n,r,i){if(Ut(n)){var o=!0;Id(t)}else o=!1;if(ha(t,i),t.stateNode===null)Ku(e,t),e$(t,n,r),Ip(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=hn(d):(d=Ut(n)?Xi:Pt.current,d=Sa(t,d));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==d)&&s2(t,a,r,d),Br=!1;var g=t.memoizedState;a.state=g,Dd(t,r,a,i),u=t.memoizedState,l!==r||g!==u||zt.current||Br?(typeof c=="function"&&(Ep(t,n,c,r),u=t.memoizedState),(l=Br||a2(t,n,l,r,g,u,d))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,J4(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Cn(t.type,l),a.props=d,f=t.pendingProps,g=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=hn(u):(u=Ut(n)?Xi:Pt.current,u=Sa(t,u));var $=n.getDerivedStateFromProps;(c=typeof $=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||g!==u)&&s2(t,a,r,u),Br=!1,g=t.memoizedState,a.state=g,Dd(t,r,a,i);var v=t.memoizedState;l!==f||g!==v||zt.current||Br?(typeof $=="function"&&(Ep(t,n,$,r),v=t.memoizedState),(d=Br||a2(t,n,d,r,g,v,u)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Rp(e,t,n,r,o,i)}function Rp(e,t,n,r,i,o){_$(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&t2(t,n,!1),Pr(e,t,o);r=t.stateNode,E9.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Pa(t,e.child,null,o),t.child=Pa(t,null,l,o)):Nt(e,t,l,o),t.memoizedState=r.state,i&&t2(t,n,!0),t.child}function k$(e){var t=e.stateNode;t.pendingContext?e2(e,t.pendingContext,t.pendingContext!==t.context):t.context&&e2(e,t.context,!1),Eg(e,t.containerInfo)}function y2(e,t,n,r,i){return Ca(),Cg(i),t.flags|=256,Nt(e,t,n,r),t.child}var Fp={dehydrated:null,treeContext:null,retryLane:0};function Dp(e){return{baseLanes:e,cachePool:null,transitions:null}}function N$(e,t,n){var r=t.pendingProps,i=Ve.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Me(Ve,i&1),e===null)return kp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Mc(a,r,0,null),e=Ki(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Dp(n),t.memoizedState=Fp,e):Lg(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return I9(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ai(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=ai(l,o):(o=Ki(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Dp(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Fp,r}return o=e.child,e=o.sibling,r=ai(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Lg(e,t){return t=Mc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function tu(e,t,n,r){return r!==null&&Cg(r),Pa(t,e.child,null,n),e=Lg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function I9(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=ch(Error(G(422))),tu(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Mc({mode:"visible",children:r.children},i,0,null),o=Ki(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Pa(t,e.child,null,a),t.child.memoizedState=Dp(a),t.memoizedState=Fp,o);if(!(t.mode&1))return tu(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(G(419)),r=ch(o,r,void 0),tu(e,t,a,r)}if(l=(a&e.childLanes)!==0,jt||l){if(r=ft,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Cr(e,i),In(r,e,i,-1))}return Yg(),r=ch(Error(G(421))),tu(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Y9.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Gt=ni(i.nextSibling),Qt=t,We=!0,On=null,e!==null&&(ln[un++]=hr,ln[un++]=pr,ln[un++]=eo,hr=e.id,pr=e.overflow,eo=t),t=Lg(t,r.children),t.flags|=4096,t)}function v2(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Np(e.return,t,n)}function fh(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function E$(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Nt(e,t,r.children,n),r=Ve.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&v2(e,n,t);else if(e.tag===19)v2(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Me(Ve,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Md(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fh(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Md(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fh(t,!0,n,null,o);break;case"together":fh(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ku(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),no|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,n=ai(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ai(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function T9(e,t,n){switch(t.tag){case 3:k$(t),Ca();break;case 5:r$(t);break;case 1:Ut(t.type)&&Id(t);break;case 4:Eg(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Me(Rd,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Me(Ve,Ve.current&1),t.flags|=128,null):n&t.child.childLanes?N$(e,t,n):(Me(Ve,Ve.current&1),e=Pr(e,t,n),e!==null?e.sibling:null);Me(Ve,Ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return E$(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(Ve,Ve.current),r)break;return null;case 22:case 23:return t.lanes=0,O$(e,t,n)}return Pr(e,t,n)}var I$,Mp,T$,A$;I$=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mp=function(){};T$=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Wi(Zn.current);var o=null;switch(n){case"input":i=op(e,i),r=op(e,r),o=[];break;case"select":i=Ge({},i,{value:void 0}),r=Ge({},r,{value:void 0}),o=[];break;case"textarea":i=lp(e,i),r=lp(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Nd)}dp(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Fs.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Fs.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Le("scroll",e),o||l===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};A$=function(e,t,n,r){n!==r&&(t.flags|=4)};function es(e,t){if(!We)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function bt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function A9(e,t,n){var r=t.pendingProps;switch(Sg(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(t),null;case 1:return Ut(t.type)&&Ed(),bt(t),null;case 3:return r=t.stateNode,Oa(),ze(zt),ze(Pt),Tg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,On!==null&&(Wp(On),On=null))),Mp(e,t),bt(t),null;case 5:Ig(t);var i=Wi(qs.current);if(n=t.type,e!==null&&t.stateNode!=null)T$(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(G(166));return bt(t),null}if(e=Wi(Zn.current),Xl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Yn]=t,r[Ws]=o,e=(t.mode&1)!==0,n){case"dialog":Le("cancel",r),Le("close",r);break;case"iframe":case"object":case"embed":Le("load",r);break;case"video":case"audio":for(i=0;i<vs.length;i++)Le(vs[i],r);break;case"source":Le("error",r);break;case"img":case"image":case"link":Le("error",r),Le("load",r);break;case"details":Le("toggle",r);break;case"input":_y(r,o),Le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Le("invalid",r);break;case"textarea":Ny(r,o),Le("invalid",r)}dp(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Jl(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Jl(r.textContent,l,e),i=["children",""+l]):Fs.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Le("scroll",r)}switch(n){case"input":Yl(r),ky(r,o,!0);break;case"textarea":Yl(r),Ey(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Nd)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=a4(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Yn]=t,e[Ws]=r,I$(e,t,!1,!1),t.stateNode=e;e:{switch(a=cp(n,r),n){case"dialog":Le("cancel",e),Le("close",e),i=r;break;case"iframe":case"object":case"embed":Le("load",e),i=r;break;case"video":case"audio":for(i=0;i<vs.length;i++)Le(vs[i],e);i=r;break;case"source":Le("error",e),i=r;break;case"img":case"image":case"link":Le("error",e),Le("load",e),i=r;break;case"details":Le("toggle",e),i=r;break;case"input":_y(e,r),i=op(e,r),Le("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ge({},r,{value:void 0}),Le("invalid",e);break;case"textarea":Ny(e,r),i=lp(e,r),Le("invalid",e);break;default:i=r}dp(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?u4(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&s4(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ds(e,u):typeof u=="number"&&Ds(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fs.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Le("scroll",e):u!=null&&lg(e,o,u,a))}switch(n){case"input":Yl(e),ky(e,r,!1);break;case"textarea":Yl(e),Ey(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pi(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ua(e,!!r.multiple,o,!1):r.defaultValue!=null&&ua(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Nd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return bt(t),null;case 6:if(e&&t.stateNode!=null)A$(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(G(166));if(n=Wi(qs.current),Wi(Zn.current),Xl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Yn]=t,(o=r.nodeValue!==n)&&(e=Qt,e!==null))switch(e.tag){case 3:Jl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jl(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yn]=t,t.stateNode=r}return bt(t),null;case 13:if(ze(Ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(We&&Gt!==null&&t.mode&1&&!(t.flags&128))K4(),Ca(),t.flags|=98560,o=!1;else if(o=Xl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(G(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(G(317));o[Yn]=t}else Ca(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;bt(t),o=!1}else On!==null&&(Wp(On),On=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ve.current&1?at===0&&(at=3):Yg())),t.updateQueue!==null&&(t.flags|=4),bt(t),null);case 4:return Oa(),Mp(e,t),e===null&&Hs(t.stateNode.containerInfo),bt(t),null;case 10:return _g(t.type._context),bt(t),null;case 17:return Ut(t.type)&&Ed(),bt(t),null;case 19:if(ze(Ve),o=t.memoizedState,o===null)return bt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)es(o,!1);else{if(at!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Md(e),a!==null){for(t.flags|=128,es(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Me(Ve,Ve.current&1|2),t.child}e=e.sibling}o.tail!==null&&Xe()>ka&&(t.flags|=128,r=!0,es(o,!1),t.lanes=4194304)}else{if(!r)if(e=Md(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),es(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!We)return bt(t),null}else 2*Xe()-o.renderingStartTime>ka&&n!==1073741824&&(t.flags|=128,r=!0,es(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Xe(),t.sibling=null,n=Ve.current,Me(Ve,r?n&1|2:n&1),t):(bt(t),null);case 22:case 23:return Hg(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Yt&1073741824&&(bt(t),t.subtreeFlags&6&&(t.flags|=8192)):bt(t),null;case 24:return null;case 25:return null}throw Error(G(156,t.tag))}function R9(e,t){switch(Sg(t),t.tag){case 1:return Ut(t.type)&&Ed(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Oa(),ze(zt),ze(Pt),Tg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ig(t),null;case 13:if(ze(Ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(Ve),null;case 4:return Oa(),null;case 10:return _g(t.type._context),null;case 22:case 23:return Hg(),null;case 24:return null;default:return null}}var nu=!1,St=!1,F9=typeof WeakSet=="function"?WeakSet:Set,ue=null;function na(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ke(e,t,r)}else n.current=null}function Lp(e,t,n){try{n()}catch(r){Ke(e,t,r)}}var x2=!1;function D9(e,t){if(bp=Od,e=M4(),bg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,d=0,c=0,f=e,g=null;t:for(;;){for(var $;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(u=a+r),f.nodeType===3&&(a+=f.nodeValue.length),($=f.firstChild)!==null;)g=f,f=$;for(;;){if(f===e)break t;if(g===n&&++d===i&&(l=a),g===o&&++c===r&&(u=a),($=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=$}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wp={focusedElem:e,selectionRange:n},Od=!1,ue=t;ue!==null;)if(t=ue,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ue=e;else for(;ue!==null;){t=ue;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,w=v.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:Cn(t.type,b),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(S){Ke(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,ue=e;break}ue=t.return}return v=x2,x2=!1,v}function _s(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Lp(t,n,o)}i=i.next}while(i!==r)}}function Fc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function jp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function R$(e){var t=e.alternate;t!==null&&(e.alternate=null,R$(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yn],delete t[Ws],delete t[Pp],delete t[v9],delete t[x9])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function F$(e){return e.tag===5||e.tag===3||e.tag===4}function $2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||F$(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Nd));else if(r!==4&&(e=e.child,e!==null))for(zp(e,t,n),e=e.sibling;e!==null;)zp(e,t,n),e=e.sibling}function Up(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Up(e,t,n),e=e.sibling;e!==null;)Up(e,t,n),e=e.sibling}var yt=null,Pn=!1;function Dr(e,t,n){for(n=n.child;n!==null;)D$(e,t,n),n=n.sibling}function D$(e,t,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(_c,n)}catch{}switch(n.tag){case 5:St||na(n,t);case 6:var r=yt,i=Pn;yt=null,Dr(e,t,n),yt=r,Pn=i,yt!==null&&(Pn?(e=yt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(Pn?(e=yt,n=n.stateNode,e.nodeType===8?oh(e.parentNode,n):e.nodeType===1&&oh(e,n),zs(e)):oh(yt,n.stateNode));break;case 4:r=yt,i=Pn,yt=n.stateNode.containerInfo,Pn=!0,Dr(e,t,n),yt=r,Pn=i;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Lp(n,t,a),i=i.next}while(i!==r)}Dr(e,t,n);break;case 1:if(!St&&(na(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ke(n,t,l)}Dr(e,t,n);break;case 21:Dr(e,t,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,Dr(e,t,n),St=r):Dr(e,t,n);break;default:Dr(e,t,n)}}function b2(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new F9),t.forEach(function(r){var i=W9.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:yt=l.stateNode,Pn=!1;break e;case 3:yt=l.stateNode.containerInfo,Pn=!0;break e;case 4:yt=l.stateNode.containerInfo,Pn=!0;break e}l=l.return}if(yt===null)throw Error(G(160));D$(o,a,i),yt=null,Pn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){Ke(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)M$(t,e),t=t.sibling}function M$(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vn(t,e),jn(e),r&4){try{_s(3,e,e.return),Fc(3,e)}catch(b){Ke(e,e.return,b)}try{_s(5,e,e.return)}catch(b){Ke(e,e.return,b)}}break;case 1:vn(t,e),jn(e),r&512&&n!==null&&na(n,n.return);break;case 5:if(vn(t,e),jn(e),r&512&&n!==null&&na(n,n.return),e.flags&32){var i=e.stateNode;try{Ds(i,"")}catch(b){Ke(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&i4(i,o),cp(l,a);var d=cp(l,o);for(a=0;a<u.length;a+=2){var c=u[a],f=u[a+1];c==="style"?u4(i,f):c==="dangerouslySetInnerHTML"?s4(i,f):c==="children"?Ds(i,f):lg(i,c,f,d)}switch(l){case"input":ap(i,o);break;case"textarea":o4(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var $=o.value;$!=null?ua(i,!!o.multiple,$,!1):g!==!!o.multiple&&(o.defaultValue!=null?ua(i,!!o.multiple,o.defaultValue,!0):ua(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ws]=o}catch(b){Ke(e,e.return,b)}}break;case 6:if(vn(t,e),jn(e),r&4){if(e.stateNode===null)throw Error(G(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(b){Ke(e,e.return,b)}}break;case 3:if(vn(t,e),jn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zs(t.containerInfo)}catch(b){Ke(e,e.return,b)}break;case 4:vn(t,e),jn(e);break;case 13:vn(t,e),jn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ug=Xe())),r&4&&b2(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(St=(d=St)||c,vn(t,e),St=d):vn(t,e),jn(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!c&&e.mode&1)for(ue=e,c=e.child;c!==null;){for(f=ue=c;ue!==null;){switch(g=ue,$=g.child,g.tag){case 0:case 11:case 14:case 15:_s(4,g,g.return);break;case 1:na(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(b){Ke(r,n,b)}}break;case 5:na(g,g.return);break;case 22:if(g.memoizedState!==null){S2(f);continue}}$!==null?($.return=g,ue=$):S2(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,u=f.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=l4("display",a))}catch(b){Ke(e,e.return,b)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(b){Ke(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:vn(t,e),jn(e),r&4&&b2(e);break;case 21:break;default:vn(t,e),jn(e)}}function jn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(F$(n)){var r=n;break e}n=n.return}throw Error(G(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ds(i,""),r.flags&=-33);var o=$2(e);Up(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=$2(e);zp(e,l,a);break;default:throw Error(G(161))}}catch(u){Ke(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function M9(e,t,n){ue=e,L$(e)}function L$(e,t,n){for(var r=(e.mode&1)!==0;ue!==null;){var i=ue,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||nu;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||St;l=nu;var d=St;if(nu=a,(St=u)&&!d)for(ue=i;ue!==null;)a=ue,u=a.child,a.tag===22&&a.memoizedState!==null?C2(i):u!==null?(u.return=a,ue=u):C2(i);for(;o!==null;)ue=o,L$(o),o=o.sibling;ue=i,nu=l,St=d}w2(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ue=o):w2(e)}}function w2(e){for(;ue!==null;){var t=ue;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:St||Fc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!St)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Cn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&o2(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}o2(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var c=d.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&zs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}St||t.flags&512&&jp(t)}catch(g){Ke(t,t.return,g)}}if(t===e){ue=null;break}if(n=t.sibling,n!==null){n.return=t.return,ue=n;break}ue=t.return}}function S2(e){for(;ue!==null;){var t=ue;if(t===e){ue=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ue=n;break}ue=t.return}}function C2(e){for(;ue!==null;){var t=ue;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fc(4,t)}catch(u){Ke(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Ke(t,i,u)}}var o=t.return;try{jp(t)}catch(u){Ke(t,o,u)}break;case 5:var a=t.return;try{jp(t)}catch(u){Ke(t,a,u)}}}catch(u){Ke(t,t.return,u)}if(t===e){ue=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ue=l;break}ue=t.return}}var L9=Math.ceil,zd=Nr.ReactCurrentDispatcher,jg=Nr.ReactCurrentOwner,fn=Nr.ReactCurrentBatchConfig,Se=0,ft=null,nt=null,vt=0,Yt=0,ra=$i(0),at=0,Zs=null,no=0,Dc=0,zg=0,ks=null,Lt=null,Ug=0,ka=1/0,sr=null,Ud=!1,Bp=null,ii=null,ru=!1,Gr=null,Bd=0,Ns=0,Hp=null,Zu=-1,Ju=0;function It(){return Se&6?Xe():Zu!==-1?Zu:Zu=Xe()}function oi(e){return e.mode&1?Se&2&&vt!==0?vt&-vt:b9.transition!==null?(Ju===0&&(Ju=b4()),Ju):(e=Ne,e!==0||(e=window.event,e=e===void 0?16:k4(e.type)),e):1}function In(e,t,n,r){if(50<Ns)throw Ns=0,Hp=null,Error(G(185));pl(e,n,r),(!(Se&2)||e!==ft)&&(e===ft&&(!(Se&2)&&(Dc|=n),at===4&&Wr(e,vt)),Bt(e,r),n===1&&Se===0&&!(t.mode&1)&&(ka=Xe()+500,Tc&&bi()))}function Bt(e,t){var n=e.callbackNode;b6(e,t);var r=Pd(e,e===ft?vt:0);if(r===0)n!==null&&Ay(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ay(n),t===1)e.tag===0?$9(P2.bind(null,e)):q4(P2.bind(null,e)),m9(function(){!(Se&6)&&bi()}),n=null;else{switch(w4(r)){case 1:n=hg;break;case 4:n=x4;break;case 16:n=Cd;break;case 536870912:n=$4;break;default:n=Cd}n=V$(n,j$.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function j$(e,t){if(Zu=-1,Ju=0,Se&6)throw Error(G(327));var n=e.callbackNode;if(pa()&&e.callbackNode!==n)return null;var r=Pd(e,e===ft?vt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Hd(e,r);else{t=r;var i=Se;Se|=2;var o=U$();(ft!==e||vt!==t)&&(sr=null,ka=Xe()+500,Qi(e,t));do try{U9();break}catch(l){z$(e,l)}while(1);Og(),zd.current=o,Se=i,nt!==null?t=0:(ft=null,vt=0,t=at)}if(t!==0){if(t===2&&(i=mp(e),i!==0&&(r=i,t=Yp(e,i))),t===1)throw n=Zs,Qi(e,0),Wr(e,r),Bt(e,Xe()),n;if(t===6)Wr(e,r);else{if(i=e.current.alternate,!(r&30)&&!j9(i)&&(t=Hd(e,r),t===2&&(o=mp(e),o!==0&&(r=o,t=Yp(e,o))),t===1))throw n=Zs,Qi(e,0),Wr(e,r),Bt(e,Xe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(G(345));case 2:zi(e,Lt,sr);break;case 3:if(Wr(e,r),(r&130023424)===r&&(t=Ug+500-Xe(),10<t)){if(Pd(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){It(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Cp(zi.bind(null,e,Lt,sr),t);break}zi(e,Lt,sr);break;case 4:if(Wr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-En(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*L9(r/1960))-r,10<r){e.timeoutHandle=Cp(zi.bind(null,e,Lt,sr),r);break}zi(e,Lt,sr);break;case 5:zi(e,Lt,sr);break;default:throw Error(G(329))}}}return Bt(e,Xe()),e.callbackNode===n?j$.bind(null,e):null}function Yp(e,t){var n=ks;return e.current.memoizedState.isDehydrated&&(Qi(e,t).flags|=256),e=Hd(e,t),e!==2&&(t=Lt,Lt=n,t!==null&&Wp(t)),e}function Wp(e){Lt===null?Lt=e:Lt.push.apply(Lt,e)}function j9(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!An(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wr(e,t){for(t&=~zg,t&=~Dc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-En(t),r=1<<n;e[n]=-1,t&=~r}}function P2(e){if(Se&6)throw Error(G(327));pa();var t=Pd(e,0);if(!(t&1))return Bt(e,Xe()),null;var n=Hd(e,t);if(e.tag!==0&&n===2){var r=mp(e);r!==0&&(t=r,n=Yp(e,r))}if(n===1)throw n=Zs,Qi(e,0),Wr(e,t),Bt(e,Xe()),n;if(n===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zi(e,Lt,sr),Bt(e,Xe()),null}function Bg(e,t){var n=Se;Se|=1;try{return e(t)}finally{Se=n,Se===0&&(ka=Xe()+500,Tc&&bi())}}function ro(e){Gr!==null&&Gr.tag===0&&!(Se&6)&&pa();var t=Se;Se|=1;var n=fn.transition,r=Ne;try{if(fn.transition=null,Ne=1,e)return e()}finally{Ne=r,fn.transition=n,Se=t,!(Se&6)&&bi()}}function Hg(){Yt=ra.current,ze(ra)}function Qi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,g9(n)),nt!==null)for(n=nt.return;n!==null;){var r=n;switch(Sg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ed();break;case 3:Oa(),ze(zt),ze(Pt),Tg();break;case 5:Ig(r);break;case 4:Oa();break;case 13:ze(Ve);break;case 19:ze(Ve);break;case 10:_g(r.type._context);break;case 22:case 23:Hg()}n=n.return}if(ft=e,nt=e=ai(e.current,null),vt=Yt=t,at=0,Zs=null,zg=Dc=no=0,Lt=ks=null,Yi!==null){for(t=0;t<Yi.length;t++)if(n=Yi[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Yi=null}return e}function z$(e,t){do{var n=nt;try{if(Og(),Gu.current=jd,Ld){for(var r=qe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ld=!1}if(to=0,ct=ot=qe=null,Os=!1,Gs=0,jg.current=null,n===null||n.return===null){at=1,Zs=t,nt=null;break}e:{var o=e,a=n.return,l=n,u=t;if(t=vt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,c=l,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var $=f2(a);if($!==null){$.flags&=-257,h2($,a,l,o,t),$.mode&1&&c2(o,d,t),t=$,u=d;var v=t.updateQueue;if(v===null){var b=new Set;b.add(u),t.updateQueue=b}else v.add(u);break e}else{if(!(t&1)){c2(o,d,t),Yg();break e}u=Error(G(426))}}else if(We&&l.mode&1){var w=f2(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),h2(w,a,l,o,t),Cg(_a(u,l));break e}}o=u=_a(u,l),at!==4&&(at=2),ks===null?ks=[o]:ks.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=S$(o,u,t);i2(o,m);break e;case 1:l=u;var p=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ii===null||!ii.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=C$(o,l,t);i2(o,S);break e}}o=o.return}while(o!==null)}H$(n)}catch(P){t=P,nt===n&&n!==null&&(nt=n=n.return);continue}break}while(1)}function U$(){var e=zd.current;return zd.current=jd,e===null?jd:e}function Yg(){(at===0||at===3||at===2)&&(at=4),ft===null||!(no&268435455)&&!(Dc&268435455)||Wr(ft,vt)}function Hd(e,t){var n=Se;Se|=2;var r=U$();(ft!==e||vt!==t)&&(sr=null,Qi(e,t));do try{z9();break}catch(i){z$(e,i)}while(1);if(Og(),Se=n,zd.current=r,nt!==null)throw Error(G(261));return ft=null,vt=0,at}function z9(){for(;nt!==null;)B$(nt)}function U9(){for(;nt!==null&&!f6();)B$(nt)}function B$(e){var t=W$(e.alternate,e,Yt);e.memoizedProps=e.pendingProps,t===null?H$(e):nt=t,jg.current=null}function H$(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=R9(n,t),n!==null){n.flags&=32767,nt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{at=6,nt=null;return}}else if(n=A9(n,t,Yt),n!==null){nt=n;return}if(t=t.sibling,t!==null){nt=t;return}nt=t=e}while(t!==null);at===0&&(at=5)}function zi(e,t,n){var r=Ne,i=fn.transition;try{fn.transition=null,Ne=1,B9(e,t,n,r)}finally{fn.transition=i,Ne=r}return null}function B9(e,t,n,r){do pa();while(Gr!==null);if(Se&6)throw Error(G(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(w6(e,o),e===ft&&(nt=ft=null,vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ru||(ru=!0,V$(Cd,function(){return pa(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=fn.transition,fn.transition=null;var a=Ne;Ne=1;var l=Se;Se|=4,jg.current=null,D9(e,n),M$(n,e),l9(wp),Od=!!bp,wp=bp=null,e.current=n,M9(n),h6(),Se=l,Ne=a,fn.transition=o}else e.current=n;if(ru&&(ru=!1,Gr=e,Bd=i),o=e.pendingLanes,o===0&&(ii=null),m6(n.stateNode),Bt(e,Xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ud)throw Ud=!1,e=Bp,Bp=null,e;return Bd&1&&e.tag!==0&&pa(),o=e.pendingLanes,o&1?e===Hp?Ns++:(Ns=0,Hp=e):Ns=0,bi(),null}function pa(){if(Gr!==null){var e=w4(Bd),t=fn.transition,n=Ne;try{if(fn.transition=null,Ne=16>e?16:e,Gr===null)var r=!1;else{if(e=Gr,Gr=null,Bd=0,Se&6)throw Error(G(331));var i=Se;for(Se|=4,ue=e.current;ue!==null;){var o=ue,a=o.child;if(ue.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(ue=d;ue!==null;){var c=ue;switch(c.tag){case 0:case 11:case 15:_s(8,c,o)}var f=c.child;if(f!==null)f.return=c,ue=f;else for(;ue!==null;){c=ue;var g=c.sibling,$=c.return;if(R$(c),c===d){ue=null;break}if(g!==null){g.return=$,ue=g;break}ue=$}}}var v=o.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var w=b.sibling;b.sibling=null,b=w}while(b!==null)}}ue=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,ue=a;else e:for(;ue!==null;){if(o=ue,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_s(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,ue=m;break e}ue=o.return}}var p=e.current;for(ue=p;ue!==null;){a=ue;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,ue=x;else e:for(a=p;ue!==null;){if(l=ue,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Fc(9,l)}}catch(P){Ke(l,l.return,P)}if(l===a){ue=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,ue=S;break e}ue=l.return}}if(Se=i,bi(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(_c,e)}catch{}r=!0}return r}finally{Ne=n,fn.transition=t}}return!1}function O2(e,t,n){t=_a(n,t),t=S$(e,t,1),e=ri(e,t,1),t=It(),e!==null&&(pl(e,1,t),Bt(e,t))}function Ke(e,t,n){if(e.tag===3)O2(e,e,n);else for(;t!==null;){if(t.tag===3){O2(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ii===null||!ii.has(r))){e=_a(n,e),e=C$(t,e,1),t=ri(t,e,1),e=It(),t!==null&&(pl(t,1,e),Bt(t,e));break}}t=t.return}}function H9(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=It(),e.pingedLanes|=e.suspendedLanes&n,ft===e&&(vt&n)===n&&(at===4||at===3&&(vt&130023424)===vt&&500>Xe()-Ug?Qi(e,0):zg|=n),Bt(e,t)}function Y$(e,t){t===0&&(e.mode&1?(t=ql,ql<<=1,!(ql&130023424)&&(ql=4194304)):t=1);var n=It();e=Cr(e,t),e!==null&&(pl(e,t,n),Bt(e,n))}function Y9(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Y$(e,n)}function W9(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(G(314))}r!==null&&r.delete(t),Y$(e,n)}var W$;W$=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||zt.current)jt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return jt=!1,T9(e,t,n);jt=!!(e.flags&131072)}else jt=!1,We&&t.flags&1048576&&G4(t,Ad,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ku(e,t),e=t.pendingProps;var i=Sa(t,Pt.current);ha(t,n),i=Rg(null,t,r,e,i,n);var o=Fg();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ut(r)?(o=!0,Id(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ng(t),i.updater=Ac,t.stateNode=i,i._reactInternals=t,Ip(t,r,e,n),t=Rp(null,t,r,!0,o,n)):(t.tag=0,We&&o&&wg(t),Nt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ku(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=q9(r),e=Cn(r,e),i){case 0:t=Ap(null,t,r,e,n);break e;case 1:t=m2(null,t,r,e,n);break e;case 11:t=p2(null,t,r,e,n);break e;case 14:t=g2(null,t,r,Cn(r.type,e),n);break e}throw Error(G(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Cn(r,i),Ap(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Cn(r,i),m2(e,t,r,i,n);case 3:e:{if(k$(t),e===null)throw Error(G(387));r=t.pendingProps,o=t.memoizedState,i=o.element,J4(e,t),Dd(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=_a(Error(G(423)),t),t=y2(e,t,r,n,i);break e}else if(r!==i){i=_a(Error(G(424)),t),t=y2(e,t,r,n,i);break e}else for(Gt=ni(t.stateNode.containerInfo.firstChild),Qt=t,We=!0,On=null,n=n$(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ca(),r===i){t=Pr(e,t,n);break e}Nt(e,t,r,n)}t=t.child}return t;case 5:return r$(t),e===null&&kp(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Sp(r,i)?a=null:o!==null&&Sp(r,o)&&(t.flags|=32),_$(e,t),Nt(e,t,a,n),t.child;case 6:return e===null&&kp(t),null;case 13:return N$(e,t,n);case 4:return Eg(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pa(t,null,r,n):Nt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Cn(r,i),p2(e,t,r,i,n);case 7:return Nt(e,t,t.pendingProps,n),t.child;case 8:return Nt(e,t,t.pendingProps.children,n),t.child;case 12:return Nt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Me(Rd,r._currentValue),r._currentValue=a,o!==null)if(An(o.value,a)){if(o.children===i.children&&!zt.current){t=Pr(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=xr(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var c=d.pending;c===null?u.next=u:(u.next=c.next,c.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Np(o.return,n,t),l.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(G(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Np(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Nt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ha(t,n),i=hn(i),r=r(i),t.flags|=1,Nt(e,t,r,n),t.child;case 14:return r=t.type,i=Cn(r,t.pendingProps),i=Cn(r.type,i),g2(e,t,r,i,n);case 15:return P$(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Cn(r,i),Ku(e,t),t.tag=1,Ut(r)?(e=!0,Id(t)):e=!1,ha(t,n),e$(t,r,i),Ip(t,r,i,n),Rp(null,t,r,!0,e,n);case 19:return E$(e,t,n);case 22:return O$(e,t,n)}throw Error(G(156,t.tag))};function V$(e,t){return v4(e,t)}function V9(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,t,n,r){return new V9(e,t,n,r)}function Wg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function q9(e){if(typeof e=="function")return Wg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dg)return 11;if(e===cg)return 14}return 2}function ai(e,t){var n=e.alternate;return n===null?(n=cn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xu(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Wg(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case qo:return Ki(n.children,i,o,t);case ug:a=8,i|=8;break;case tp:return e=cn(12,n,t,i|2),e.elementType=tp,e.lanes=o,e;case np:return e=cn(13,n,t,i),e.elementType=np,e.lanes=o,e;case rp:return e=cn(19,n,t,i),e.elementType=rp,e.lanes=o,e;case t4:return Mc(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xx:a=10;break e;case e4:a=9;break e;case dg:a=11;break e;case cg:a=14;break e;case Ur:a=16,r=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return t=cn(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Ki(e,t,n,r){return e=cn(7,e,r,t),e.lanes=n,e}function Mc(e,t,n,r){return e=cn(22,e,r,t),e.elementType=t4,e.lanes=n,e.stateNode={isHidden:!1},e}function hh(e,t,n){return e=cn(6,e,null,t),e.lanes=n,e}function ph(e,t,n){return t=cn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function G9(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gf(0),this.expirationTimes=Gf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vg(e,t,n,r,i,o,a,l,u){return e=new G9(e,t,n,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=cn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ng(o),e}function Q9(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function q$(e){if(!e)return gi;e=e._reactInternals;e:{if(ao(e)!==e||e.tag!==1)throw Error(G(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(G(171))}if(e.tag===1){var n=e.type;if(Ut(n))return V4(e,n,t)}return t}function G$(e,t,n,r,i,o,a,l,u){return e=Vg(n,r,!0,e,i,o,a,l,u),e.context=q$(null),n=e.current,r=It(),i=oi(n),o=xr(r,i),o.callback=t??null,ri(n,o,i),e.current.lanes=i,pl(e,i,r),Bt(e,r),e}function Lc(e,t,n,r){var i=t.current,o=It(),a=oi(i);return n=q$(n),t.context===null?t.context=n:t.pendingContext=n,t=xr(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ri(i,t,a),e!==null&&(In(e,i,a,o),qu(e,i,a)),a}function Yd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _2(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qg(e,t){_2(e,t),(e=e.alternate)&&_2(e,t)}function K9(){return null}var Q$=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gg(e){this._internalRoot=e}jc.prototype.render=Gg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));Lc(e,t,null,null)};jc.prototype.unmount=Gg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ro(function(){Lc(null,e,null,null)}),t[Sr]=null}};function jc(e){this._internalRoot=e}jc.prototype.unstable_scheduleHydration=function(e){if(e){var t=P4();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yr.length&&t!==0&&t<Yr[n].priority;n++);Yr.splice(n,0,e),n===0&&_4(e)}};function Qg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function k2(){}function Z9(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Yd(a);o.call(d)}}var a=G$(t,r,e,0,null,!1,!1,"",k2);return e._reactRootContainer=a,e[Sr]=a.current,Hs(e.nodeType===8?e.parentNode:e),ro(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Yd(u);l.call(d)}}var u=Vg(e,0,!1,null,null,!1,!1,"",k2);return e._reactRootContainer=u,e[Sr]=u.current,Hs(e.nodeType===8?e.parentNode:e),ro(function(){Lc(t,u,n,r)}),u}function Uc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var u=Yd(a);l.call(u)}}Lc(t,a,e,i)}else a=Z9(n,t,e,i,r);return Yd(a)}S4=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ys(t.pendingLanes);n!==0&&(pg(t,n|1),Bt(t,Xe()),!(Se&6)&&(ka=Xe()+500,bi()))}break;case 13:ro(function(){var r=Cr(e,1);if(r!==null){var i=It();In(r,e,1,i)}}),qg(e,1)}};gg=function(e){if(e.tag===13){var t=Cr(e,134217728);if(t!==null){var n=It();In(t,e,134217728,n)}qg(e,134217728)}};C4=function(e){if(e.tag===13){var t=oi(e),n=Cr(e,t);if(n!==null){var r=It();In(n,e,t,r)}qg(e,t)}};P4=function(){return Ne};O4=function(e,t){var n=Ne;try{return Ne=e,t()}finally{Ne=n}};hp=function(e,t,n){switch(t){case"input":if(ap(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ic(r);if(!i)throw Error(G(90));r4(r),ap(r,i)}}}break;case"textarea":o4(e,n);break;case"select":t=n.value,t!=null&&ua(e,!!n.multiple,t,!1)}};f4=Bg;h4=ro;var J9={usingClientEntryPoint:!1,Events:[ml,Zo,Ic,d4,c4,Bg]},ts={findFiberByHostInstance:Hi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},X9={bundleType:ts.bundleType,version:ts.version,rendererPackageName:ts.rendererPackageName,rendererConfig:ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=m4(e),e===null?null:e.stateNode},findFiberByHostInstance:ts.findFiberByHostInstance||K9,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{_c=iu.inject(X9),Kn=iu}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J9;Jt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qg(t))throw Error(G(200));return Q9(e,t,null,n)};Jt.createRoot=function(e,t){if(!Qg(e))throw Error(G(299));var n=!1,r="",i=Q$;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Vg(e,1,!1,null,null,n,!1,r,i),e[Sr]=t.current,Hs(e.nodeType===8?e.parentNode:e),new Gg(t)};Jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=m4(t),e=e===null?null:e.stateNode,e};Jt.flushSync=function(e){return ro(e)};Jt.hydrate=function(e,t,n){if(!zc(t))throw Error(G(200));return Uc(null,e,t,!0,n)};Jt.hydrateRoot=function(e,t,n){if(!Qg(e))throw Error(G(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Q$;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=G$(t,null,e,1,n??null,i,!1,o,a),e[Sr]=t.current,Hs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new jc(t)};Jt.render=function(e,t,n){if(!zc(t))throw Error(G(200));return Uc(null,e,t,!1,n)};Jt.unmountComponentAtNode=function(e){if(!zc(e))throw Error(G(40));return e._reactRootContainer?(ro(function(){Uc(null,null,e,!1,function(){e._reactRootContainer=null,e[Sr]=null})}),!0):!1};Jt.unstable_batchedUpdates=Bg;Jt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zc(n))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return Uc(e,t,n,!1,r)};Jt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Jt})(K8);var N2=$d;J0.createRoot=N2.createRoot,J0.hydrateRoot=N2.hydrateRoot;var Wd={},e7={get exports(){return Wd},set exports(e){Wd=e}},Fe={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc=60103,Hc=60106,vl=60107,xl=60108,$l=60114,bl=60109,wl=60110,Sl=60112,Cl=60113,Kg=60120,Pl=60115,Ol=60116,K$=60121,Z$=60122,J$=60117,X$=60129,e5=60131;if(typeof Symbol=="function"&&Symbol.for){var gt=Symbol.for;Bc=gt("react.element"),Hc=gt("react.portal"),vl=gt("react.fragment"),xl=gt("react.strict_mode"),$l=gt("react.profiler"),bl=gt("react.provider"),wl=gt("react.context"),Sl=gt("react.forward_ref"),Cl=gt("react.suspense"),Kg=gt("react.suspense_list"),Pl=gt("react.memo"),Ol=gt("react.lazy"),K$=gt("react.block"),Z$=gt("react.server.block"),J$=gt("react.fundamental"),X$=gt("react.debug_trace_mode"),e5=gt("react.legacy_hidden")}function Mn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Bc:switch(e=e.type,e){case vl:case $l:case xl:case Cl:case Kg:return e;default:switch(e=e&&e.$$typeof,e){case wl:case Sl:case Ol:case Pl:case bl:return e;default:return t}}case Hc:return t}}}var t7=bl,n7=Bc,r7=Sl,i7=vl,o7=Ol,a7=Pl,s7=Hc,l7=$l,u7=xl,d7=Cl;Fe.ContextConsumer=wl;Fe.ContextProvider=t7;Fe.Element=n7;Fe.ForwardRef=r7;Fe.Fragment=i7;Fe.Lazy=o7;Fe.Memo=a7;Fe.Portal=s7;Fe.Profiler=l7;Fe.StrictMode=u7;Fe.Suspense=d7;Fe.isAsyncMode=function(){return!1};Fe.isConcurrentMode=function(){return!1};Fe.isContextConsumer=function(e){return Mn(e)===wl};Fe.isContextProvider=function(e){return Mn(e)===bl};Fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bc};Fe.isForwardRef=function(e){return Mn(e)===Sl};Fe.isFragment=function(e){return Mn(e)===vl};Fe.isLazy=function(e){return Mn(e)===Ol};Fe.isMemo=function(e){return Mn(e)===Pl};Fe.isPortal=function(e){return Mn(e)===Hc};Fe.isProfiler=function(e){return Mn(e)===$l};Fe.isStrictMode=function(e){return Mn(e)===xl};Fe.isSuspense=function(e){return Mn(e)===Cl};Fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===vl||e===$l||e===X$||e===xl||e===Cl||e===Kg||e===e5||typeof e=="object"&&e!==null&&(e.$$typeof===Ol||e.$$typeof===Pl||e.$$typeof===bl||e.$$typeof===wl||e.$$typeof===Sl||e.$$typeof===J$||e.$$typeof===K$||e[0]===Z$)};Fe.typeOf=Mn;(function(e){e.exports=Fe})(e7);function c7(e){function t(D,H,W,oe,k){for(var de=0,Z=0,Ce=0,me=0,ge,he,ke=0,De=0,fe,O=fe=ge=0,I=0,A=0,re=0,q=0,V=W.length,se=V-1,ve,ae="",Te="",qa="",Ci="",rn;I<V;){if(he=W.charCodeAt(I),I===se&&Z+me+Ce+de!==0&&(Z!==0&&(he=Z===47?10:47),me=Ce=de=0,V++,se++),Z+me+Ce+de===0){if(I===se&&(0<A&&(ae=ae.replace(g,"")),0<ae.trim().length)){switch(he){case 32:case 9:case 59:case 13:case 10:break;default:ae+=W.charAt(I)}he=59}switch(he){case 123:for(ae=ae.trim(),ge=ae.charCodeAt(0),fe=1,q=++I;I<V;){switch(he=W.charCodeAt(I)){case 123:fe++;break;case 125:fe--;break;case 47:switch(he=W.charCodeAt(I+1)){case 42:case 47:e:{for(O=I+1;O<se;++O)switch(W.charCodeAt(O)){case 47:if(he===42&&W.charCodeAt(O-1)===42&&I+2!==O){I=O+1;break e}break;case 10:if(he===47){I=O+1;break e}}I=O}}break;case 91:he++;case 40:he++;case 34:case 39:for(;I++<se&&W.charCodeAt(I)!==he;);}if(fe===0)break;I++}switch(fe=W.substring(q,I),ge===0&&(ge=(ae=ae.replace(f,"").trim()).charCodeAt(0)),ge){case 64:switch(0<A&&(ae=ae.replace(g,"")),he=ae.charCodeAt(1),he){case 100:case 109:case 115:case 45:A=H;break;default:A=ee}if(fe=t(H,A,fe,he,k+1),q=fe.length,0<j&&(A=n(ee,ae,re),rn=l(3,fe,A,H,L,M,q,he,k,oe),ae=A.join(""),rn!==void 0&&(q=(fe=rn.trim()).length)===0&&(he=0,fe="")),0<q)switch(he){case 115:ae=ae.replace(_,a);case 100:case 109:case 45:fe=ae+"{"+fe+"}";break;case 107:ae=ae.replace(p,"$1 $2"),fe=ae+"{"+fe+"}",fe=F===1||F===2&&o("@"+fe,3)?"@-webkit-"+fe+"@"+fe:"@"+fe;break;default:fe=ae+fe,oe===112&&(fe=(Te+=fe,""))}else fe="";break;default:fe=t(H,n(H,ae,re),fe,oe,k+1)}qa+=fe,fe=re=A=O=ge=0,ae="",he=W.charCodeAt(++I);break;case 125:case 59:if(ae=(0<A?ae.replace(g,""):ae).trim(),1<(q=ae.length))switch(O===0&&(ge=ae.charCodeAt(0),ge===45||96<ge&&123>ge)&&(q=(ae=ae.replace(" ",":")).length),0<j&&(rn=l(1,ae,H,D,L,M,Te.length,oe,k,oe))!==void 0&&(q=(ae=rn.trim()).length)===0&&(ae="\0\0"),ge=ae.charCodeAt(0),he=ae.charCodeAt(1),ge){case 0:break;case 64:if(he===105||he===99){Ci+=ae+W.charAt(I);break}default:ae.charCodeAt(q-1)!==58&&(Te+=i(ae,ge,he,ae.charCodeAt(2)))}re=A=O=ge=0,ae="",he=W.charCodeAt(++I)}}switch(he){case 13:case 10:Z===47?Z=0:1+ge===0&&oe!==107&&0<ae.length&&(A=1,ae+="\0"),0<j*E&&l(0,ae,H,D,L,M,Te.length,oe,k,oe),M=1,L++;break;case 59:case 125:if(Z+me+Ce+de===0){M++;break}default:switch(M++,ve=W.charAt(I),he){case 9:case 32:if(me+de+Z===0)switch(ke){case 44:case 58:case 9:case 32:ve="";break;default:he!==32&&(ve=" ")}break;case 0:ve="\\0";break;case 12:ve="\\f";break;case 11:ve="\\v";break;case 38:me+Z+de===0&&(A=re=1,ve="\f"+ve);break;case 108:if(me+Z+de+J===0&&0<O)switch(I-O){case 2:ke===112&&W.charCodeAt(I-3)===58&&(J=ke);case 8:De===111&&(J=De)}break;case 58:me+Z+de===0&&(O=I);break;case 44:Z+Ce+me+de===0&&(A=1,ve+="\r");break;case 34:case 39:Z===0&&(me=me===he?0:me===0?he:me);break;case 91:me+Z+Ce===0&&de++;break;case 93:me+Z+Ce===0&&de--;break;case 41:me+Z+de===0&&Ce--;break;case 40:if(me+Z+de===0){if(ge===0)switch(2*ke+3*De){case 533:break;default:ge=1}Ce++}break;case 64:Z+Ce+me+de+O+fe===0&&(fe=1);break;case 42:case 47:if(!(0<me+de+Ce))switch(Z){case 0:switch(2*he+3*W.charCodeAt(I+1)){case 235:Z=47;break;case 220:q=I,Z=42}break;case 42:he===47&&ke===42&&q+2!==I&&(W.charCodeAt(q+2)===33&&(Te+=W.substring(q,I+1)),ve="",Z=0)}}Z===0&&(ae+=ve)}De=ke,ke=he,I++}if(q=Te.length,0<q){if(A=H,0<j&&(rn=l(2,Te,A,D,L,M,q,oe,k,oe),rn!==void 0&&(Te=rn).length===0))return Ci+Te+qa;if(Te=A.join(",")+"{"+Te+"}",F*J!==0){switch(F!==2||o(Te,2)||(J=0),J){case 111:Te=Te.replace(S,":-moz-$1")+Te;break;case 112:Te=Te.replace(x,"::-webkit-input-$1")+Te.replace(x,"::-moz-$1")+Te.replace(x,":-ms-input-$1")+Te}J=0}}return Ci+Te+qa}function n(D,H,W){var oe=H.trim().split(w);H=oe;var k=oe.length,de=D.length;switch(de){case 0:case 1:var Z=0;for(D=de===0?"":D[0]+" ";Z<k;++Z)H[Z]=r(D,H[Z],W).trim();break;default:var Ce=Z=0;for(H=[];Z<k;++Z)for(var me=0;me<de;++me)H[Ce++]=r(D[me]+" ",oe[Z],W).trim()}return H}function r(D,H,W){var oe=H.charCodeAt(0);switch(33>oe&&(oe=(H=H.trim()).charCodeAt(0)),oe){case 38:return H.replace(m,"$1"+D.trim());case 58:return D.trim()+H.replace(m,"$1"+D.trim());default:if(0<1*W&&0<H.indexOf("\f"))return H.replace(m,(D.charCodeAt(0)===58?"":"$1")+D.trim())}return D+H}function i(D,H,W,oe){var k=D+";",de=2*H+3*W+4*oe;if(de===944){D=k.indexOf(":",9)+1;var Z=k.substring(D,k.length-1).trim();return Z=k.substring(0,D).trim()+Z+";",F===1||F===2&&o(Z,1)?"-webkit-"+Z+Z:Z}if(F===0||F===2&&!o(k,1))return k;switch(de){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(ie,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return Z=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+Z+"-webkit-"+k+"-ms-flex-pack"+Z+k;case 1005:return v.test(k)?k.replace($,":-webkit-")+k.replace($,":-moz-")+k:k;case 1e3:switch(Z=k.substring(13).trim(),H=Z.indexOf("-")+1,Z.charCodeAt(0)+Z.charCodeAt(H)){case 226:Z=k.replace(P,"tb");break;case 232:Z=k.replace(P,"tb-rl");break;case 220:Z=k.replace(P,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+Z+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(H=(k=D).length-10,Z=(k.charCodeAt(H)===33?k.substring(0,H):k).substring(D.indexOf(":",7)+1).trim(),de=Z.charCodeAt(0)+(Z.charCodeAt(7)|0)){case 203:if(111>Z.charCodeAt(8))break;case 115:k=k.replace(Z,"-webkit-"+Z)+";"+k;break;case 207:case 102:k=k.replace(Z,"-webkit-"+(102<de?"inline-":"")+"box")+";"+k.replace(Z,"-webkit-"+Z)+";"+k.replace(Z,"-ms-"+Z+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return Z=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+Z+"-ms-flex-"+Z+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(R,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(R,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(z.test(D)===!0)return(Z=D.substring(D.indexOf(":")+1)).charCodeAt(0)===115?i(D.replace("stretch","fill-available"),H,W,oe).replace(":fill-available",":stretch"):k.replace(Z,"-webkit-"+Z)+k.replace(Z,"-moz-"+Z.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,W+oe===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(b,"$1-webkit-$2")+k}return k}function o(D,H){var W=D.indexOf(H===1?":":"{"),oe=D.substring(0,H!==3?W:10);return W=D.substring(W+1,D.length-1),N(H!==2?oe:oe.replace(Y,"$1"),W,H)}function a(D,H){var W=i(H,H.charCodeAt(0),H.charCodeAt(1),H.charCodeAt(2));return W!==H+";"?W.replace(T," or ($1)").substring(4):"("+H+")"}function l(D,H,W,oe,k,de,Z,Ce,me,ge){for(var he=0,ke=H,De;he<j;++he)switch(De=te[he].call(c,D,ke,W,oe,k,de,Z,Ce,me,ge)){case void 0:case!1:case!0:case null:break;default:ke=De}if(ke!==H)return ke}function u(D){switch(D){case void 0:case null:j=te.length=0;break;default:if(typeof D=="function")te[j++]=D;else if(typeof D=="object")for(var H=0,W=D.length;H<W;++H)u(D[H]);else E=!!D|0}return u}function d(D){return D=D.prefix,D!==void 0&&(N=null,D?typeof D!="function"?F=1:(F=2,N=D):F=0),d}function c(D,H){var W=D;if(33>W.charCodeAt(0)&&(W=W.trim()),U=W,W=[U],0<j){var oe=l(-1,H,W,W,L,M,0,0,0,0);oe!==void 0&&typeof oe=="string"&&(H=oe)}var k=t(ee,W,H,0,0);return 0<j&&(oe=l(-2,k,W,W,L,M,k.length,0,0,0),oe!==void 0&&(k=oe)),U="",J=0,M=L=1,k}var f=/^\0+/g,g=/[\0\r\f]/g,$=/: */g,v=/zoo|gra/,b=/([,: ])(transform)/g,w=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,x=/::(place)/g,S=/:(read-only)/g,P=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,T=/([\s\S]*?);/g,R=/-self|flex-/g,Y=/[^]*?(:[rp][el]a[\w-]+)[^]*/,z=/stretch|:\s*\w+\-(?:conte|avail)/,ie=/([^-])(image-set\()/,M=1,L=1,J=0,F=1,ee=[],te=[],j=0,N=null,E=0,U="";return c.use=u,c.set=d,e!==void 0&&d(e),c}var f7={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function h7(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var p7=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,E2=h7(function(e){return p7.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Vp={},g7={get exports(){return Vp},set exports(e){Vp=e}},Ee={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ht=typeof Symbol=="function"&&Symbol.for,Zg=ht?Symbol.for("react.element"):60103,Jg=ht?Symbol.for("react.portal"):60106,Yc=ht?Symbol.for("react.fragment"):60107,Wc=ht?Symbol.for("react.strict_mode"):60108,Vc=ht?Symbol.for("react.profiler"):60114,qc=ht?Symbol.for("react.provider"):60109,Gc=ht?Symbol.for("react.context"):60110,Xg=ht?Symbol.for("react.async_mode"):60111,Qc=ht?Symbol.for("react.concurrent_mode"):60111,Kc=ht?Symbol.for("react.forward_ref"):60112,Zc=ht?Symbol.for("react.suspense"):60113,m7=ht?Symbol.for("react.suspense_list"):60120,Jc=ht?Symbol.for("react.memo"):60115,Xc=ht?Symbol.for("react.lazy"):60116,y7=ht?Symbol.for("react.block"):60121,v7=ht?Symbol.for("react.fundamental"):60117,x7=ht?Symbol.for("react.responder"):60118,$7=ht?Symbol.for("react.scope"):60119;function en(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Zg:switch(e=e.type,e){case Xg:case Qc:case Yc:case Vc:case Wc:case Zc:return e;default:switch(e=e&&e.$$typeof,e){case Gc:case Kc:case Xc:case Jc:case qc:return e;default:return t}}case Jg:return t}}}function t5(e){return en(e)===Qc}Ee.AsyncMode=Xg;Ee.ConcurrentMode=Qc;Ee.ContextConsumer=Gc;Ee.ContextProvider=qc;Ee.Element=Zg;Ee.ForwardRef=Kc;Ee.Fragment=Yc;Ee.Lazy=Xc;Ee.Memo=Jc;Ee.Portal=Jg;Ee.Profiler=Vc;Ee.StrictMode=Wc;Ee.Suspense=Zc;Ee.isAsyncMode=function(e){return t5(e)||en(e)===Xg};Ee.isConcurrentMode=t5;Ee.isContextConsumer=function(e){return en(e)===Gc};Ee.isContextProvider=function(e){return en(e)===qc};Ee.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zg};Ee.isForwardRef=function(e){return en(e)===Kc};Ee.isFragment=function(e){return en(e)===Yc};Ee.isLazy=function(e){return en(e)===Xc};Ee.isMemo=function(e){return en(e)===Jc};Ee.isPortal=function(e){return en(e)===Jg};Ee.isProfiler=function(e){return en(e)===Vc};Ee.isStrictMode=function(e){return en(e)===Wc};Ee.isSuspense=function(e){return en(e)===Zc};Ee.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Yc||e===Qc||e===Vc||e===Wc||e===Zc||e===m7||typeof e=="object"&&e!==null&&(e.$$typeof===Xc||e.$$typeof===Jc||e.$$typeof===qc||e.$$typeof===Gc||e.$$typeof===Kc||e.$$typeof===v7||e.$$typeof===x7||e.$$typeof===$7||e.$$typeof===y7)};Ee.typeOf=en;(function(e){e.exports=Ee})(g7);var em=Vp,b7={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},w7={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},S7={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},n5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tm={};tm[em.ForwardRef]=S7;tm[em.Memo]=n5;function I2(e){return em.isMemo(e)?n5:tm[e.$$typeof]||b7}var C7=Object.defineProperty,P7=Object.getOwnPropertyNames,T2=Object.getOwnPropertySymbols,O7=Object.getOwnPropertyDescriptor,_7=Object.getPrototypeOf,A2=Object.prototype;function r5(e,t,n){if(typeof t!="string"){if(A2){var r=_7(t);r&&r!==A2&&r5(e,r,n)}var i=P7(t);T2&&(i=i.concat(T2(t)));for(var o=I2(e),a=I2(t),l=0;l<i.length;++l){var u=i[l];if(!w7[u]&&!(n&&n[u])&&!(a&&a[u])&&!(o&&o[u])){var d=O7(t,u);try{C7(e,u,d)}catch{}}}}return e}var k7=r5;function gr(){return(gr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var R2=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},qp=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Wd.typeOf(e)},Vd=Object.freeze([]),si=Object.freeze({});function Js(e){return typeof e=="function"}function F2(e){return e.displayName||e.name||"Component"}function nm(e){return e&&typeof e.styledComponentId=="string"}var Na=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",rm=typeof window<"u"&&"HTMLElement"in window,N7=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY);function _l(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var E7=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&_l(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(n+1),d=0,c=r.length;d<c;d++)this.tag.insertRule(u,r[d])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),ed=new Map,qd=new Map,Es=1,ou=function(e){if(ed.has(e))return ed.get(e);for(;qd.has(Es);)Es++;var t=Es++;return ed.set(e,t),qd.set(t,e),t},I7=function(e){return qd.get(e)},T7=function(e,t){t>=Es&&(Es=t+1),ed.set(e,t),qd.set(t,e)},A7="style["+Na+'][data-styled-version="5.3.6"]',R7=new RegExp("^"+Na+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F7=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},D7=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(R7);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(T7(d,u),F7(e,d,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(a)}}},M7=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},i5=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var u=l.childNodes,d=u.length;d>=0;d--){var c=u[d];if(c&&c.nodeType===1&&c.hasAttribute(Na))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Na,"active"),r.setAttribute("data-styled-version","5.3.6");var a=M7();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},L7=function(){function e(n){var r=this.element=i5(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var u=o[a];if(u.ownerNode===i)return u}_l(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),j7=function(){function e(n){var r=this.element=i5(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),z7=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),D2=rm,U7={isServer:!rm,useCSSOMInjection:!N7},o5=function(){function e(n,r,i){n===void 0&&(n=si),r===void 0&&(r={}),this.options=gr({},U7,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&rm&&D2&&(D2=!1,function(o){for(var a=document.querySelectorAll(A7),l=0,u=a.length;l<u;l++){var d=a[l];d&&d.getAttribute(Na)!=="active"&&(D7(o,d),d.parentNode&&d.parentNode.removeChild(d))}}(this))}e.registerId=function(n){return ou(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(gr({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new z7(a):o?new L7(a):new j7(a),new E7(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(ou(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(ou(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(ou(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=I7(a);if(l!==void 0){var u=n.names.get(l),d=r.getGroup(a);if(u&&d&&u.size){var c=Na+".g"+a+'[id="'+l+'"]',f="";u!==void 0&&u.forEach(function(g){g.length>0&&(f+=g+",")}),o+=""+d+c+'{content:"'+f+`"}/*!sc*/
`}}}return o}(this)},e}(),B7=/(a)(d)/gi,M2=function(e){return String.fromCharCode(e+(e>25?39:97))};function Gp(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=M2(t%52)+n;return(M2(t%52)+n).replace(B7,"$1-$2")}var ia=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},a5=function(e){return ia(5381,e)};function H7(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Js(n)&&!nm(n))return!1}return!0}var Y7=a5("5.3.6"),W7=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&H7(t),this.componentId=n,this.baseHash=ia(Y7,n),this.baseStyle=r,o5.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=Ea(this.rules,t,n,r).join(""),l=Gp(ia(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var u=r(a,"."+l,void 0,i);n.insertRules(i,l,u)}o.push(l),this.staticRulesId=l}else{for(var d=this.rules.length,c=ia(this.baseHash,r.hash),f="",g=0;g<d;g++){var $=this.rules[g];if(typeof $=="string")f+=$;else if($){var v=Ea($,t,n,r),b=Array.isArray(v)?v.join(""):v;c=ia(c,b+g),f+=b}}if(f){var w=Gp(c>>>0);if(!n.hasNameForId(i,w)){var m=r(f,"."+w,void 0,i);n.insertRules(i,w,m)}o.push(w)}}return o.join(" ")},e}(),V7=/^\s*\/\/.*$/gm,q7=[":","[",".","#"];function G7(e){var t,n,r,i,o=e===void 0?si:e,a=o.options,l=a===void 0?si:a,u=o.plugins,d=u===void 0?Vd:u,c=new c7(l),f=[],g=function(b){function w(m){if(m)try{b(m+"}")}catch{}}return function(m,p,x,S,P,_,T,R,Y,z){switch(m){case 1:if(Y===0&&p.charCodeAt(0)===64)return b(p+";"),"";break;case 2:if(R===0)return p+"/*|*/";break;case 3:switch(R){case 102:case 112:return b(x[0]+p),"";default:return p+(z===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(w)}}}(function(b){f.push(b)}),$=function(b,w,m){return w===0&&q7.indexOf(m[n.length])!==-1||m.match(i)?b:"."+t};function v(b,w,m,p){p===void 0&&(p="&");var x=b.replace(V7,""),S=w&&m?m+" "+w+" { "+x+" }":x;return t=p,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!w?"":w,S)}return c.use([].concat(d,[function(b,w,m){b===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,$))},g,function(b){if(b===-2){var w=f;return f=[],w}}])),v.hash=d.length?d.reduce(function(b,w){return w.name||_l(15),ia(b,w.name)},5381).toString():"",v}var s5=ne.createContext();s5.Consumer;var l5=ne.createContext(),Q7=(l5.Consumer,new o5),Qp=G7();function K7(){return C.useContext(s5)||Q7}function Z7(){return C.useContext(l5)||Qp}var J7=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Qp);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return _l(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Qp),this.name+t.hash},e}(),X7=/([A-Z])/,eS=/([A-Z])/g,tS=/^ms-/,nS=function(e){return"-"+e.toLowerCase()};function L2(e){return X7.test(e)?e.replace(eS,nS).replace(tS,"-ms-"):e}var j2=function(e){return e==null||e===!1||e===""};function Ea(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=Ea(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(j2(e))return"";if(nm(e))return"."+e.styledComponentId;if(Js(e)){if(typeof(d=e)!="function"||d.prototype&&d.prototype.isReactComponent||!t)return e;var u=e(t);return Ea(u,t,n,r)}var d;return e instanceof J7?n?(e.inject(n,r),e.getName(r)):e:qp(e)?function c(f,g){var $,v,b=[];for(var w in f)f.hasOwnProperty(w)&&!j2(f[w])&&(Array.isArray(f[w])&&f[w].isCss||Js(f[w])?b.push(L2(w)+":",f[w],";"):qp(f[w])?b.push.apply(b,c(f[w],w)):b.push(L2(w)+": "+($=w,(v=f[w])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||$ in f7?String(v).trim():v+"px")+";"));return g?[g+" {"].concat(b,["}"]):b}(e):e.toString()}var z2=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function rS(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Js(e)||qp(e)?z2(Ea(R2(Vd,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:z2(Ea(R2(e,n)))}var iS=function(e,t,n){return n===void 0&&(n=si),e.theme!==n.theme&&e.theme||t||n.theme},oS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,aS=/(^-|-$)/g;function gh(e){return e.replace(oS,"-").replace(aS,"")}var sS=function(e){return Gp(a5(e)>>>0)};function au(e){return typeof e=="string"&&!0}var Kp=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},lS=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function uS(e,t,n){var r=e[n];Kp(t)&&Kp(r)?u5(r,t):e[n]=t}function u5(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(Kp(a))for(var l in a)lS(l)&&uS(e,a[l],l)}return e}var d5=ne.createContext();d5.Consumer;var mh={};function c5(e,t,n){var r=nm(e),i=!au(e),o=t.attrs,a=o===void 0?Vd:o,l=t.componentId,u=l===void 0?function(p,x){var S=typeof p!="string"?"sc":gh(p);mh[S]=(mh[S]||0)+1;var P=S+"-"+sS("5.3.6"+S+mh[S]);return x?x+"-"+P:P}(t.displayName,t.parentComponentId):l,d=t.displayName,c=d===void 0?function(p){return au(p)?"styled."+p:"Styled("+F2(p)+")"}(e):d,f=t.displayName&&t.componentId?gh(t.displayName)+"-"+t.componentId:t.componentId||u,g=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,$=t.shouldForwardProp;r&&e.shouldForwardProp&&($=t.shouldForwardProp?function(p,x,S){return e.shouldForwardProp(p,x,S)&&t.shouldForwardProp(p,x,S)}:e.shouldForwardProp);var v,b=new W7(n,f,r?e.componentStyle:void 0),w=b.isStatic&&a.length===0,m=function(p,x){return function(S,P,_,T){var R=S.attrs,Y=S.componentStyle,z=S.defaultProps,ie=S.foldedComponentIds,M=S.shouldForwardProp,L=S.styledComponentId,J=S.target,F=function(oe,k,de){oe===void 0&&(oe=si);var Z=gr({},k,{theme:oe}),Ce={};return de.forEach(function(me){var ge,he,ke,De=me;for(ge in Js(De)&&(De=De(Z)),De)Z[ge]=Ce[ge]=ge==="className"?(he=Ce[ge],ke=De[ge],he&&ke?he+" "+ke:he||ke):De[ge]}),[Z,Ce]}(iS(P,C.useContext(d5),z)||si,P,R),ee=F[0],te=F[1],j=function(oe,k,de,Z){var Ce=K7(),me=Z7(),ge=k?oe.generateAndInjectStyles(si,Ce,me):oe.generateAndInjectStyles(de,Ce,me);return ge}(Y,T,ee),N=_,E=te.$as||P.$as||te.as||P.as||J,U=au(E),D=te!==P?gr({},P,{},te):P,H={};for(var W in D)W[0]!=="$"&&W!=="as"&&(W==="forwardedAs"?H.as=D[W]:(M?M(W,E2,E):!U||E2(W))&&(H[W]=D[W]));return P.style&&te.style!==P.style&&(H.style=gr({},P.style,{},te.style)),H.className=Array.prototype.concat(ie,L,j!==L?j:null,P.className,te.className).filter(Boolean).join(" "),H.ref=N,C.createElement(E,H)}(v,p,x,w)};return m.displayName=c,(v=ne.forwardRef(m)).attrs=g,v.componentStyle=b,v.displayName=c,v.shouldForwardProp=$,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Vd,v.styledComponentId=f,v.target=r?e.target:e,v.withComponent=function(p){var x=t.componentId,S=function(_,T){if(_==null)return{};var R,Y,z={},ie=Object.keys(_);for(Y=0;Y<ie.length;Y++)R=ie[Y],T.indexOf(R)>=0||(z[R]=_[R]);return z}(t,["componentId"]),P=x&&x+"-"+(au(p)?p:gh(F2(p)));return c5(p,gr({},S,{attrs:g,componentId:P}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?u5({},e.defaultProps,p):p}}),v.toString=function(){return"."+v.styledComponentId},i&&k7(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var Zp=function(e){return function t(n,r,i){if(i===void 0&&(i=si),!Wd.isValidElementType(r))return _l(1,String(r));var o=function(){return n(r,i,rS.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,gr({},i,{},a))},o.attrs=function(a){return t(n,r,gr({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(c5,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Zp[e]=Zp(e)});const h=Zp;var f5={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},U2=ne.createContext&&ne.createContext(f5),li=globalThis&&globalThis.__assign||function(){return li=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},li.apply(this,arguments)},dS=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function h5(e){return e&&e.map(function(t,n){return ne.createElement(t.tag,li({key:n},t.attr),h5(t.child))})}function Ae(e){return function(t){return ne.createElement(cS,li({attr:li({},e.attr)},t),h5(e.child))}}function cS(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=dS(e,["attr","size","title"]),l=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),ne.createElement("svg",li({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:u,style:li(li({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&ne.createElement("title",null,o),e.children)};return U2!==void 0?ne.createElement(U2.Consumer,null,function(n){return t(n)}):t(f5)}function fS(e){return Ae({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M14 325.3c2.3-4.2 5.2-4.9 9.7-2.5 10.4 5.6 20.6 11.4 31.2 16.7a595.88 595.88 0 0 0 127.4 46.3 616.61 616.61 0 0 0 63.2 11.8 603.33 603.33 0 0 0 95 5.2c17.4-.4 34.8-1.8 52.1-3.8a603.66 603.66 0 0 0 163.3-42.8c2.9-1.2 5.9-2 9.1-1.2 6.7 1.8 9 9 4.1 13.9a70 70 0 0 1-9.6 7.4c-30.7 21.1-64.2 36.4-99.6 47.9a473.31 473.31 0 0 1-75.1 17.6 431 431 0 0 1-53.2 4.8 21.3 21.3 0 0 0-2.5.3H308a21.3 21.3 0 0 0-2.5-.3c-3.6-.2-7.2-.3-10.7-.4a426.3 426.3 0 0 1-50.4-5.3A448.4 448.4 0 0 1 164 420a443.33 443.33 0 0 1-145.6-87c-1.8-1.6-3-3.8-4.4-5.7zM172 65.1l-4.3.6a80.92 80.92 0 0 0-38 15.1c-2.4 1.7-4.6 3.5-7.1 5.4a4.29 4.29 0 0 1-.4-1.4c-.4-2.7-.8-5.5-1.3-8.2-.7-4.6-3-6.6-7.6-6.6h-11.5c-6.9 0-8.2 1.3-8.2 8.2v209.3c0 1 0 2 .1 3 .2 3 2 4.9 4.9 5 7 .1 14.1.1 21.1 0 2.9 0 4.7-2 5-5 .1-1 .1-2 .1-3v-72.4c1.1.9 1.7 1.4 2.2 1.9 17.9 14.9 38.5 19.8 61 15.4 20.4-4 34.6-16.5 43.8-34.9 7-13.9 9.9-28.7 10.3-44.1.5-17.1-1.2-33.9-8.1-49.8-8.5-19.6-22.6-32.5-43.9-36.9-3.2-.7-6.5-1-9.8-1.5-2.8-.1-5.5-.1-8.3-.1zM124.6 107a3.48 3.48 0 0 1 1.7-3.3c13.7-9.5 28.8-14.5 45.6-13.2 14.9 1.1 27.1 8.4 33.5 25.9 3.9 10.7 4.9 21.8 4.9 33 0 10.4-.8 20.6-4 30.6-6.8 21.3-22.4 29.4-42.6 28.5-14-.6-26.2-6-37.4-13.9a3.57 3.57 0 0 1-1.7-3.3c.1-14.1 0-28.1 0-42.2s.1-28 0-42.1zm205.7-41.9c-1 .1-2 .3-2.9.4a148 148 0 0 0-28.9 4.1c-6.1 1.6-12 3.8-17.9 5.8-3.6 1.2-5.4 3.8-5.3 7.7.1 3.3-.1 6.6 0 9.9.1 4.8 2.1 6.1 6.8 4.9 7.8-2 15.6-4.2 23.5-5.7 12.3-2.3 24.7-3.3 37.2-1.4 6.5 1 12.6 2.9 16.8 8.4 3.7 4.8 5.1 10.5 5.3 16.4.3 8.3.2 16.6.3 24.9a7.84 7.84 0 0 1-.2 1.4c-.5-.1-.9 0-1.3-.1a180.56 180.56 0 0 0-32-4.9c-11.3-.6-22.5.1-33.3 3.9-12.9 4.5-23.3 12.3-29.4 24.9-4.7 9.8-5.4 20.2-3.9 30.7 2 14 9 24.8 21.4 31.7 11.9 6.6 24.8 7.4 37.9 5.4 15.1-2.3 28.5-8.7 40.3-18.4a7.36 7.36 0 0 1 1.6-1.1c.6 3.8 1.1 7.4 1.8 11 .6 3.1 2.5 5.1 5.4 5.2 5.4.1 10.9.1 16.3 0a4.84 4.84 0 0 0 4.8-4.7 26.2 26.2 0 0 0 .1-2.8v-106a80 80 0 0 0-.9-12.9c-1.9-12.9-7.4-23.5-19-30.4-6.7-4-14.1-6-21.8-7.1-3.6-.5-7.2-.8-10.8-1.3-3.9.1-7.9.1-11.9.1zm35 127.7a3.33 3.33 0 0 1-1.5 3c-11.2 8.1-23.5 13.5-37.4 14.9-5.7.6-11.4.4-16.8-1.8a20.08 20.08 0 0 1-12.4-13.3 32.9 32.9 0 0 1-.1-19.4c2.5-8.3 8.4-13 16.4-15.6a61.33 61.33 0 0 1 24.8-2.2c8.4.7 16.6 2.3 25 3.4 1.6.2 2.1 1 2.1 2.6-.1 4.8 0 9.5 0 14.3s-.2 9.4-.1 14.1zm259.9 129.4c-1-5-4.8-6.9-9.1-8.3a88.42 88.42 0 0 0-21-3.9 147.32 147.32 0 0 0-39.2 1.9c-14.3 2.7-27.9 7.3-40 15.6a13.75 13.75 0 0 0-3.7 3.5 5.11 5.11 0 0 0-.5 4c.4 1.5 2.1 1.9 3.6 1.8a16.2 16.2 0 0 0 2.2-.1c7.8-.8 15.5-1.7 23.3-2.5 11.4-1.1 22.9-1.8 34.3-.9a71.64 71.64 0 0 1 14.4 2.7c5.1 1.4 7.4 5.2 7.6 10.4.4 8-1.4 15.7-3.5 23.3-4.1 15.4-10 30.3-15.8 45.1a17.6 17.6 0 0 0-1 3c-.5 2.9 1.2 4.8 4.1 4.1a10.56 10.56 0 0 0 4.8-2.5 145.91 145.91 0 0 0 12.7-13.4c12.8-16.4 20.3-35.3 24.7-55.6.8-3.6 1.4-7.3 2.1-10.9v-17.3zM493.1 199q-19.35-53.55-38.7-107.2c-2-5.7-4.2-11.3-6.3-16.9-1.1-2.9-3.2-4.8-6.4-4.8-7.6-.1-15.2-.2-22.9-.1-2.5 0-3.7 2-3.2 4.5a43.1 43.1 0 0 0 1.9 6.1q29.4 72.75 59.1 145.5c1.7 4.1 2.1 7.6.2 11.8-3.3 7.3-5.9 15-9.3 22.3-3 6.5-8 11.4-15.2 13.3a42.13 42.13 0 0 1-15.4 1.1c-2.5-.2-5-.8-7.5-1-3.4-.2-5.1 1.3-5.2 4.8q-.15 5 0 9.9c.1 5.5 2 8 7.4 8.9a108.18 108.18 0 0 0 16.9 2c17.1.4 30.7-6.5 39.5-21.4a131.63 131.63 0 0 0 9.2-18.4q35.55-89.7 70.6-179.6a26.62 26.62 0 0 0 1.6-5.5c.4-2.8-.9-4.4-3.7-4.4-6.6-.1-13.3 0-19.9 0a7.54 7.54 0 0 0-7.7 5.2c-.5 1.4-1.1 2.7-1.6 4.1l-34.8 100c-2.5 7.2-5.1 14.5-7.7 22.2-.4-1.1-.6-1.7-.9-2.4z"}}]})(e)}function hS(e){return Ae({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}}]})(e)}function pS(e){return Ae({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function gS(e){return Ae({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"}}]})(e)}function Wt(e){return Ae({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]})(e)}function mS(e){return Ae({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z"}}]})(e)}function B2(e){return Ae({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]})(e)}function yS(e){return Ae({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32z"}}]})(e)}function vS(e){return Ae({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"}}]})(e)}function xS(e){return Ae({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"}}]})(e)}function $S(e){return Ae({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm122.7-533.4c18.7-18.7 49.1-18.7 67.9 0 18.7 18.7 18.7 49.1 0 67.9-18.7 18.7-49.1 18.7-67.9 0-18.7-18.7-18.7-49.1 0-67.9zm283.8 282.9l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z"}}]})(e)}function kl(e){return Ae({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]})(e)}function bS(e){return Ae({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm198.4-588.1a32 32 0 0 0-24.5.5L414.9 415 296.4 686c-3.6 8.2-3.6 17.5 0 25.7 3.4 7.8 9.7 13.9 17.7 17 3.8 1.5 7.7 2.2 11.7 2.2 4.4 0 8.7-.9 12.8-2.7l271-118.6 118.5-271a32.06 32.06 0 0 0-17.7-42.7zM576.8 534.4l26.2 26.2-42.4 42.4-26.2-26.2L380 644.4 447.5 490 422 464.4l42.4-42.4 25.5 25.5L644.4 380l-67.6 154.4zM464.4 422L422 464.4l25.5 25.6 86.9 86.8 26.2 26.2 42.4-42.4-26.2-26.2-86.8-86.9z"}}]})(e)}function Jp(e){return Ae({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"}},{tag:"path",attr:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"}}]})(e)}function Xp(e){return Ae({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]})(e)}function wS(e){return Ae({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 0 1 144-53.5L537 318.9a32.05 32.05 0 0 0 0 45.3l124.5 124.5a32.05 32.05 0 0 0 45.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z"}}]})(e)}function SS(e){return Ae({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M668.6 320c0-4.4-3.6-8-8-8h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.5-1.1.9-2.4.9-3.7zM157.9 504.2a352.7 352.7 0 0 1 103.5-242.4c32.5-32.5 70.3-58.1 112.4-75.9 43.6-18.4 89.9-27.8 137.6-27.8 47.8 0 94.1 9.3 137.6 27.8 42.1 17.8 79.9 43.4 112.4 75.9 10 10 19.3 20.5 27.9 31.4l-50 39.1a8 8 0 0 0 3 14.1l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3l-47.8 37.4C770.7 146.3 648.6 82 511.5 82 277 82 86.3 270.1 82 503.8a8 8 0 0 0 8 8.2h60c4.3 0 7.8-3.5 7.9-7.8zM934 512h-60c-4.3 0-7.9 3.5-8 7.8a352.7 352.7 0 0 1-103.5 242.4 352.57 352.57 0 0 1-112.4 75.9c-43.6 18.4-89.9 27.8-137.6 27.8s-94.1-9.3-137.6-27.8a352.57 352.57 0 0 1-112.4-75.9c-10-10-19.3-20.5-27.9-31.4l49.9-39.1a8 8 0 0 0-3-14.1l-156.8-38.3c-5-1.2-9.9 2.6-9.9 7.7l-.8 161.7c0 6.7 7.7 10.5 12.9 6.3l47.8-37.4C253.3 877.7 375.4 942 512.5 942 747 942 937.7 753.9 942 520.2a8 8 0 0 0-8-8.2z"}}]})(e)}function CS(e){return Ae({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]})(e)}function PS(e){return Ae({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M635 771.7c-34.5 28.6-78.2 44.3-123 44.3s-88.5-15.8-123-44.3a194.02 194.02 0 0 1-59.1-84.7H232v201h560V687h-97.9c-11.6 32.8-32 62.3-59.1 84.7z"}},{tag:"path",attr:{d:"M320 501h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}},{tag:"path",attr:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v201zm0-264H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v488z"}},{tag:"path",attr:{d:"M320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}}]})(e)}const p5=()=>s("div",{children:s(_S,{children:y(OS,{children:[y(uu,{children:[s(lu,{children:"Categories"}),y(su,{children:[s(Dt,{children:"Home Appliances and Founiture"}),s(Dt,{children:"Food Items"})]})]}),y(uu,{children:[s(lu,{children:"Important Links"}),y(su,{children:[s(Dt,{children:"Terms & Conditions"}),s(Dt,{children:"Return & Exchange"}),s(Dt,{children:"Shipping & Deliveries"}),s(Dt,{children:"Privacy Policies"})]})]}),y(uu,{children:[s(lu,{children:"Information"}),y(su,{children:[s(Dt,{children:"About Us"}),s(Dt,{children:"Contact Us"}),s(Dt,{children:"Blog"}),s(Dt,{children:"Stories"}),s(Dt,{children:"FAQ"})]})]}),y(uu,{children:[s(lu,{children:"Socials"}),y(su,{children:[y(Dt,{children:[s("span",{children:s(hS,{size:"16px"})}),"Facebook"]}),y(Dt,{children:[s("span",{children:s(pS,{size:"16px"})}),"Twitter"]}),y(Dt,{children:[s("span",{children:s(xS,{size:"16px"})}),"Instagram"]})]})]})]})})}),Dt=h.div`
  font-size: 14px;
  font-weight: 700;
  color: #4a4747;
  margin-bottom: 10px;

  span{
    margin-right: 10px;
  }
`,su=h.div``,lu=h.div`
  font-size: 25px;
  font-weight: 800;
  color: #232121;
  margin-bottom: 20px;
`,uu=h.div``,OS=h.div`
  width: 95%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`,_S=h.div`
  width: 100%;
  border-top: 2px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  /* background-color: gold; */

`;/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xs(){return Xs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xs.apply(this,arguments)}var Qr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Qr||(Qr={}));const H2="popstate";function kS(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return e1("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:el(i)}return ES(t,n,null,e)}function rt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function NS(){return Math.random().toString(36).substr(2,8)}function Y2(e,t){return{usr:e.state,key:e.key,idx:t}}function e1(e,t,n,r){return n===void 0&&(n=null),Xs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?La(t):t,{state:n,key:t&&t.key||r||NS()})}function el(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function La(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ES(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Qr.Pop,u=null,d=c();d==null&&(d=0,a.replaceState(Xs({},a.state,{idx:d}),""));function c(){return(a.state||{idx:null}).idx}function f(){l=Qr.Pop;let w=c(),m=w==null?null:w-d;d=w,u&&u({action:l,location:b.location,delta:m})}function g(w,m){l=Qr.Push;let p=e1(b.location,w,m);n&&n(p,w),d=c()+1;let x=Y2(p,d),S=b.createHref(p);try{a.pushState(x,"",S)}catch{i.location.assign(S)}o&&u&&u({action:l,location:b.location,delta:1})}function $(w,m){l=Qr.Replace;let p=e1(b.location,w,m);n&&n(p,w),d=c();let x=Y2(p,d),S=b.createHref(p);a.replaceState(x,"",S),o&&u&&u({action:l,location:b.location,delta:0})}function v(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:el(w);return rt(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let b={get action(){return l},get location(){return e(i,a)},listen(w){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(H2,f),u=w,()=>{i.removeEventListener(H2,f),u=null}},createHref(w){return t(i,w)},createURL:v,encodeLocation(w){let m=v(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:$,go(w){return a.go(w)}};return b}var W2;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(W2||(W2={}));function IS(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?La(t):t,i=y5(r.pathname||"/",n);if(i==null)return null;let o=g5(e);TS(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=US(o[l],YS(i));return a}function g5(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};u.relativePath.startsWith("/")&&(rt(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=ui([r,u.relativePath]),c=n.concat(u);o.children&&o.children.length>0&&(rt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),g5(o.children,t,c,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:jS(d,o.index),routesMeta:c})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let u of m5(o.path))i(o,a,u)}),t}function m5(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=m5(r.join("/")),l=[];return l.push(...a.map(u=>u===""?o:[o,u].join("/"))),i&&l.push(...a),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function TS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:zS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const AS=/^:\w+$/,RS=3,FS=2,DS=1,MS=10,LS=-2,V2=e=>e==="*";function jS(e,t){let n=e.split("/"),r=n.length;return n.some(V2)&&(r+=LS),t&&(r+=FS),n.filter(i=>!V2(i)).reduce((i,o)=>i+(AS.test(o)?RS:o===""?DS:MS),r)}function zS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function US(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],u=a===n.length-1,d=i==="/"?t:t.slice(i.length)||"/",c=BS({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d);if(!c)return null;Object.assign(r,c.params);let f=l.route;o.push({params:r,pathname:ui([i,c.pathname]),pathnameBase:GS(ui([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=ui([i,c.pathnameBase]))}return o}function BS(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=HS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,c,f)=>{if(c==="*"){let g=l[f]||"";a=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}return d[c]=WS(l[f]||"",c),d},{}),pathname:o,pathnameBase:a,pattern:e}}function HS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),im(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function YS(e){try{return decodeURI(e)}catch(t){return im(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function WS(e,t){try{return decodeURIComponent(e)}catch(n){return im(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function y5(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function im(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function VS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?La(e):e;return{pathname:n?n.startsWith("/")?n:qS(n,t):t,search:QS(r),hash:KS(i)}}function qS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function yh(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function v5(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function x5(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=La(e):(i=Xs({},e),rt(!i.pathname||!i.pathname.includes("?"),yh("?","pathname","search",i)),rt(!i.pathname||!i.pathname.includes("#"),yh("#","pathname","hash",i)),rt(!i.search||!i.search.includes("#"),yh("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let f=t.length-1;if(a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}l=f>=0?t[f]:"/"}let u=VS(i,l),d=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||c)&&(u.pathname+="/"),u}const ui=e=>e.join("/").replace(/\/\/+/g,"/"),GS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),QS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,KS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ZS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function t1(){return t1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t1.apply(this,arguments)}function JS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const XS=typeof Object.is=="function"?Object.is:JS,{useState:eC,useEffect:tC,useLayoutEffect:nC,useDebugValue:rC}=Z0;function iC(e,t,n){const r=t(),[{inst:i},o]=eC({inst:{value:r,getSnapshot:t}});return nC(()=>{i.value=r,i.getSnapshot=t,vh(i)&&o({inst:i})},[e,r,t]),tC(()=>(vh(i)&&o({inst:i}),e(()=>{vh(i)&&o({inst:i})})),[e]),rC(r),r}function vh(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!XS(n,r)}catch{return!0}}function oC(e,t,n){return t()}const aC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sC=!aC,lC=sC?oC:iC;"useSyncExternalStore"in Z0&&(e=>e.useSyncExternalStore)(Z0);const $5=C.createContext(null),ef=C.createContext(null),Nl=C.createContext(null),tf=C.createContext(null),so=C.createContext({outlet:null,matches:[]}),b5=C.createContext(null);function uC(e,t){let{relative:n}=t===void 0?{}:t;ja()||rt(!1);let{basename:r,navigator:i}=C.useContext(Nl),{hash:o,pathname:a,search:l}=om(e,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:ui([r,a])),i.createHref({pathname:u,search:l,hash:o})}function ja(){return C.useContext(tf)!=null}function El(){return ja()||rt(!1),C.useContext(tf).location}function Ot(){ja()||rt(!1);let{basename:e,navigator:t}=C.useContext(Nl),{matches:n}=C.useContext(so),{pathname:r}=El(),i=JSON.stringify(v5(n).map(l=>l.pathnameBase)),o=C.useRef(!1);return C.useEffect(()=>{o.current=!0}),C.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){t.go(l);return}let d=x5(l,JSON.parse(i),r,u.relative==="path");e!=="/"&&(d.pathname=d.pathname==="/"?e:ui([e,d.pathname])),(u.replace?t.replace:t.push)(d,u.state,u)},[e,t,i,r])}function w5(){let{matches:e}=C.useContext(so),t=e[e.length-1];return t?t.params:{}}function om(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.useContext(so),{pathname:i}=El(),o=JSON.stringify(v5(r).map(a=>a.pathnameBase));return C.useMemo(()=>x5(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function am(e,t){ja()||rt(!1);let{navigator:n}=C.useContext(Nl),r=C.useContext(ef),{matches:i}=C.useContext(so),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=El(),d;if(t){var c;let b=typeof t=="string"?La(t):t;l==="/"||(c=b.pathname)!=null&&c.startsWith(l)||rt(!1),d=b}else d=u;let f=d.pathname||"/",g=l==="/"?f:f.slice(l.length)||"/",$=IS(e,{pathname:g}),v=hC($&&$.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:ui([l,n.encodeLocation?n.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:ui([l,n.encodeLocation?n.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,r||void 0);return t&&v?C.createElement(tf.Provider,{value:{location:t1({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Qr.Pop}},v):v}function dC(){let e=yC(),t=ZS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,o)}class cC extends C.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(so.Provider,{value:this.props.routeContext},C.createElement(b5.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fC(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext($5);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(so.Provider,{value:t},r)}function hC(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||rt(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,l)=>{let u=a.route.id?i==null?void 0:i[a.route.id]:null,d=n?a.route.errorElement||C.createElement(dC,null):null,c=t.concat(r.slice(0,l+1)),f=()=>C.createElement(fC,{match:a,routeContext:{outlet:o,matches:c}},u?d:a.route.element!==void 0?a.route.element:o);return n&&(a.route.errorElement||l===0)?C.createElement(cC,{location:n.location,component:d,error:u,children:f(),routeContext:{outlet:null,matches:c}}):f()},null)}var q2;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(q2||(q2={}));var Gd;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Gd||(Gd={}));function pC(e){let t=C.useContext(ef);return t||rt(!1),t}function gC(e){let t=C.useContext(so);return t||rt(!1),t}function mC(e){let t=gC(),n=t.matches[t.matches.length-1];return n.route.id||rt(!1),n.route.id}function yC(){var e;let t=C.useContext(b5),n=pC(Gd.UseRouteError),r=mC(Gd.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function vC(e){let{to:t,replace:n,state:r,relative:i}=e;ja()||rt(!1);let o=C.useContext(ef),a=Ot();return C.useEffect(()=>{o&&o.navigation.state!=="idle"||a(t,{replace:n,state:r,relative:i})}),null}function td(e){rt(!1)}function xC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Qr.Pop,navigator:o,static:a=!1}=e;ja()&&rt(!1);let l=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=La(r));let{pathname:d="/",search:c="",hash:f="",state:g=null,key:$="default"}=r,v=C.useMemo(()=>{let b=y5(d,l);return b==null?null:{pathname:b,search:c,hash:f,state:g,key:$}},[l,d,c,f,g,$]);return v==null?null:C.createElement(Nl.Provider,{value:u},C.createElement(tf.Provider,{children:n,value:{location:v,navigationType:i}}))}function $C(e){let{children:t,location:n}=e,r=C.useContext($5),i=r&&!t?r.router.routes:n1(t);return am(i,n)}var G2;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(G2||(G2={}));new Promise(()=>{});function n1(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;if(r.type===C.Fragment){n.push.apply(n,n1(r.props.children,t));return}r.type!==td&&rt(!1),!r.props.index||!r.props.children||rt(!1);let o=[...t,i],a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=n1(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qd(){return Qd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qd.apply(this,arguments)}function S5(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function bC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function wC(e,t){return e.button===0&&(!t||t==="_self")&&!bC(e)}const SC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],CC=["aria-current","caseSensitive","className","end","style","to","children"];function PC(e){let{basename:t,children:n,window:r}=e,i=C.useRef();i.current==null&&(i.current=kS({window:r,v5Compat:!0}));let o=i.current,[a,l]=C.useState({action:o.action,location:o.location});return C.useLayoutEffect(()=>o.listen(l),[o]),C.createElement(xC,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const OC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mr=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:u,to:d,preventScrollReset:c}=t,f=S5(t,SC),g=typeof d=="string"?d:el(d),$=/^[a-z+]+:\/\//i.test(g)||g.startsWith("//"),v=g,b=!1;if(OC&&$){let x=new URL(window.location.href),S=g.startsWith("//")?new URL(x.protocol+g):new URL(g);S.origin===x.origin?v=S.pathname+S.search+S.hash:b=!0}let w=uC(v,{relative:i}),m=_C(v,{replace:a,state:l,target:u,preventScrollReset:c,relative:i});function p(x){r&&r(x),x.defaultPrevented||m(x)}return C.createElement("a",Qd({},f,{href:$?g:w,onClick:b||o?r:p,ref:n,target:u}))}),_e=C.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:u,children:d}=t,c=S5(t,CC),f=om(u,{relative:c.relative}),g=El(),$=C.useContext(ef),{navigator:v}=C.useContext(Nl),b=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,w=g.pathname,m=$&&$.navigation&&$.navigation.location?$.navigation.location.pathname:null;i||(w=w.toLowerCase(),m=m?m.toLowerCase():null,b=b.toLowerCase());let p=w===b||!a&&w.startsWith(b)&&w.charAt(b.length)==="/",x=m!=null&&(m===b||!a&&m.startsWith(b)&&m.charAt(b.length)==="/"),S=p?r:void 0,P;typeof o=="function"?P=o({isActive:p,isPending:x}):P=[o,p?"active":null,x?"pending":null].filter(Boolean).join(" ");let _=typeof l=="function"?l({isActive:p,isPending:x}):l;return C.createElement(mr,Qd({},c,{"aria-current":S,className:P,ref:n,style:_,to:u}),typeof d=="function"?d({isActive:p,isPending:x}):d)});var Q2;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Q2||(Q2={}));var K2;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(K2||(K2={}));function _C(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=Ot(),u=El(),d=om(e,{relative:a});return C.useCallback(c=>{if(wC(c,n)){c.preventDefault();let f=r!==void 0?r:el(u)===el(d);l(e,{replace:f,state:i,preventScrollReset:o,relative:a})}},[u,l,d,r,i,n,e,o,a])}const kC=()=>s("div",{children:s(TC,{children:y(IC,{children:[s(EC,{children:"WHY YOU SHOULD SELL ON CROSS AFRICA"}),y(NC,{children:[s(ho,{children:"SELL MORE PRODUCTS"}),s(ho,{children:"SELL MORE PRODUCTS"}),s(ho,{children:"SELL MORE PRODUCTS"}),s(ho,{children:"SELL MORE PRODUCTS"}),s(ho,{children:"SELL MORE PRODUCTS"}),s(ho,{children:"SELL MORE PRODUCTS"})]})]})})}),ho=h.button`
  padding: 10px 20px;
  border: 0px;
  background-color: #ec00b1;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  margin: 20px;
  outline: none;
`,NC=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`,EC=h.div`
  font-size: 30px;
  font-weight: 600;
  margin-top: 70px;
  text-align: center;
`,IC=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 500px;
  min-height: 100%;
`,TC=h.div`
  width: 100%;
  background-color: #902a75;
`,AC=()=>s("div",{children:s(LC,{children:y(MC,{children:[s(DC,{children:"GET STARTED TODAY"}),s(FC,{children:"Join the fast, trusted and best selling platformin Africa"}),s(RC,{to:"/auth",children:"Start Selling Today"})]})})}),RC=h(_e)`
    padding: 15px 70px;
    border: #D975C0;
    background-color: #D975C0;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
`,FC=h.div`
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 15px;
  text-align: center;
`,DC=h.div`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 15px;
    text-align: center;
`,MC=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 500px;
`,LC=h.div`
  width: 100%;
  /* background-color: #f6c8ea; */
`,jC=()=>s("div",{children:s(zC,{children:y(UC,{children:[y(BC,{to:"/",children:[s("img",{src:"/logo 1.png"}),s("div",{children:"Cross Africa"})]}),y(HC,{children:[s(Z2,{to:"/auth",bd:"",bg:"ffff",hbg:"",hbd:"fff",children:"Sign Up"}),s(Z2,{to:"/auth/signin",bd:"fgf",bg:"",hbg:"fff",hbd:"",children:"Log In"})]})]})})}),zC=h.div`
  width: 100%;
  /* background-color: #f8ecf5; */
  /* max-width: 2040px; */
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0px;
  z-index: 1;
`,UC=h.div`
  width: 95%;
  height: 85px;
  display: flex;
  justify-content: space-between;
`,BC=h(_e)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 30px;
  text-decoration: none;
  /* margin-bottom: 10px; */

  img {
    height: 50px;
    width: 50px;
  }

  div {
    font-weight: 700;
    font-size: 17px;
    color: white;
  }
`,HC=h.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 350px;
`,Z2=h(_e)`
  padding: 10px 40px;
  border: ${({bd:e})=>e===""?"0px":"1px solid #D975C0"};
  background-color: ${({bg:e})=>e===""?"transparent":"#D975C0"};
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 345ms ease-in;
  text-decoration: none;
  margin: 10px;

  :hover {
    background-color: ${({hbg:e})=>e===""?"transparent":"#D975C0"};
    border: ${({hbd:e})=>e===""?"0px":"1px solid #D975C0"};
  }
`,YC=()=>y(Rs,{children:[s(jC,{}),y("div",{children:[s(KC,{children:y(QC,{children:[y(GC,{children:[s(qC,{children:"ANYONE CAN SELL ON CROSS AFRICA"}),s(VC,{children:"Become a merchant and sell to thousands of people across africa"}),s(WC,{to:"/auth",children:"Start Selling Today"})]}),s(kC,{}),s(AC,{})]})}),s(p5,{})]})]}),WC=h(_e)`
  padding: 15px 70px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
`,VC=h.div`
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 15px;
  text-align: center;
`,qC=h.div`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center;
`,GC=h.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  /* z-index: -1; */
  /* background-color: #f4caca; */
  background-image: linear-gradient(
      to bottom,
      rgba(23, 23, 24, 0.52),
      rgba(9, 0, 8, 0.73)
    ),
    url("/Frame 114.png");
`,QC=h.div``,KC=h.div`
  width: 100%;
`,ZC=()=>s("div",{children:s(oP,{children:y(iP,{children:[s(rP,{children:"Buying & Selling made easy accross Africa!"}),y(nP,{children:[s(pu,{children:s(XC,{children:y(hu,{children:[s(fu,{children:"Electronics."}),s(cu,{children:"Buying made easy, get TV, home theatre, system and electronics at the comfort of your home."}),s(_e,{to:"/allitems",style:{textDecoration:"none",color:"white"},children:s(du,{children:"Buy Now"})})]})})}),s(pu,{children:s(eP,{children:y(hu,{children:[s(fu,{children:"Mobile Phones."}),s(cu,{children:"Buying made easy, get used phones, laptops, chargers etc.. at the comfort of your home"}),s(_e,{to:"/allitems",style:{textDecoration:"none",color:"white"},children:s(du,{children:"Buy Now"})})]})})}),s(pu,{children:s(tP,{children:y(hu,{children:[s(fu,{children:"Clothing & Fashion."}),s(cu,{children:"Buying made easy, get Trendy and classic wears at the comfort of your home."}),s(_e,{to:"/allitems",style:{textDecoration:"none",color:"white"},children:s(du,{children:"Buy Now"})})]})})}),s(pu,{children:s(JC,{children:y(hu,{children:[s(fu,{children:"Food & Groceries."}),s(cu,{children:"Buying made easy, food and groceries are all available, get them all at the comfort of your home."}),s(_e,{to:"/allitems",style:{textDecoration:"none",color:"white"},children:s(du,{children:"Buy Now"})})]})})})]})]})})}),du=h.button`
  margin-bottom: 20px;
  border: 0px;
  outline: none;
  background: #ee65cc;
  padding: 10px 30px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`,JC=h.div`
  width: 100%;
  height: 100%;
  color: white;
  padding: 0px 18px;
  margin: 0 -17px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(
      to bottom,
      rgba(61, 61, 62, 0.52),
      rgba(2, 2, 2, 0.73)
    ),
    url("/Frame 115.png");
  background-repeat: no-repeat;
  background-size: cover;
`,XC=h.div`
  width: 100%;
  height: 100%;
  color: white;
  padding: 0px 18px;
  margin: 0 -17px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(
      to bottom,
      rgba(61, 61, 62, 0.52),
      rgba(2, 2, 2, 0.73)
    ),
    url("/Frame 112.png");
  background-repeat: no-repeat;
  background-size: cover;
`,eP=h.div`
  width: 100%;
  height: 100%;
  color: white;
  padding: 0px 18px;
  margin: 0 -17px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(
      to bottom,
      rgba(61, 61, 62, 0.52),
      rgba(2, 2, 2, 0.73)
    ),
    url("/Frame 113.png");
  background-repeat: no-repeat;
  background-size: cover;
`,tP=h.div`
  width: 100%;
  height: 100%;
  color: white;
  padding: 0px 18px;
  margin: 0 -17px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(
      to bottom,
      rgba(61, 61, 62, 0.52),
      rgba(2, 2, 2, 0.73)
    ),
    url("/Frame 114.png");
  background-repeat: no-repeat;
  background-size: cover;
`,cu=h.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
`,fu=h.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 20px;
`,hu=h.div`
  /* background-color: gold; */
  margin-bottom: 20px;
`,pu=h.div`
  width: 400px;
  height: 650px;
  color: white;
  padding: 0px 18px;
  margin: 10px;

  display: flex;
  align-items: flex-end;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 5px;
  }
`,nP=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`,rP=h.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 300px;
  /* color: ; */
`,iP=h.div`
  width: 90%;
  margin-top: 30px;
`,oP=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
`,aP={version:4,country_calling_codes:{1:["US","AG","AI","AS","BB","BM","BS","CA","DM","DO","GD","GU","JM","KN","KY","LC","MP","MS","PR","SX","TC","TT","VC","VG","VI"],7:["RU","KZ"],20:["EG"],27:["ZA"],30:["GR"],31:["NL"],32:["BE"],33:["FR"],34:["ES"],36:["HU"],39:["IT","VA"],40:["RO"],41:["CH"],43:["AT"],44:["GB","GG","IM","JE"],45:["DK"],46:["SE"],47:["NO","SJ"],48:["PL"],49:["DE"],51:["PE"],52:["MX"],53:["CU"],54:["AR"],55:["BR"],56:["CL"],57:["CO"],58:["VE"],60:["MY"],61:["AU","CC","CX"],62:["ID"],63:["PH"],64:["NZ"],65:["SG"],66:["TH"],81:["JP"],82:["KR"],84:["VN"],86:["CN"],90:["TR"],91:["IN"],92:["PK"],93:["AF"],94:["LK"],95:["MM"],98:["IR"],211:["SS"],212:["MA","EH"],213:["DZ"],216:["TN"],218:["LY"],220:["GM"],221:["SN"],222:["MR"],223:["ML"],224:["GN"],225:["CI"],226:["BF"],227:["NE"],228:["TG"],229:["BJ"],230:["MU"],231:["LR"],232:["SL"],233:["GH"],234:["NG"],235:["TD"],236:["CF"],237:["CM"],238:["CV"],239:["ST"],240:["GQ"],241:["GA"],242:["CG"],243:["CD"],244:["AO"],245:["GW"],246:["IO"],247:["AC"],248:["SC"],249:["SD"],250:["RW"],251:["ET"],252:["SO"],253:["DJ"],254:["KE"],255:["TZ"],256:["UG"],257:["BI"],258:["MZ"],260:["ZM"],261:["MG"],262:["RE","YT"],263:["ZW"],264:["NA"],265:["MW"],266:["LS"],267:["BW"],268:["SZ"],269:["KM"],290:["SH","TA"],291:["ER"],297:["AW"],298:["FO"],299:["GL"],350:["GI"],351:["PT"],352:["LU"],353:["IE"],354:["IS"],355:["AL"],356:["MT"],357:["CY"],358:["FI","AX"],359:["BG"],370:["LT"],371:["LV"],372:["EE"],373:["MD"],374:["AM"],375:["BY"],376:["AD"],377:["MC"],378:["SM"],380:["UA"],381:["RS"],382:["ME"],383:["XK"],385:["HR"],386:["SI"],387:["BA"],389:["MK"],420:["CZ"],421:["SK"],423:["LI"],500:["FK"],501:["BZ"],502:["GT"],503:["SV"],504:["HN"],505:["NI"],506:["CR"],507:["PA"],508:["PM"],509:["HT"],590:["GP","BL","MF"],591:["BO"],592:["GY"],593:["EC"],594:["GF"],595:["PY"],596:["MQ"],597:["SR"],598:["UY"],599:["CW","BQ"],670:["TL"],672:["NF"],673:["BN"],674:["NR"],675:["PG"],676:["TO"],677:["SB"],678:["VU"],679:["FJ"],680:["PW"],681:["WF"],682:["CK"],683:["NU"],685:["WS"],686:["KI"],687:["NC"],688:["TV"],689:["PF"],690:["TK"],691:["FM"],692:["MH"],850:["KP"],852:["HK"],853:["MO"],855:["KH"],856:["LA"],880:["BD"],886:["TW"],960:["MV"],961:["LB"],962:["JO"],963:["SY"],964:["IQ"],965:["KW"],966:["SA"],967:["YE"],968:["OM"],970:["PS"],971:["AE"],972:["IL"],973:["BH"],974:["QA"],975:["BT"],976:["MN"],977:["NP"],992:["TJ"],993:["TM"],994:["AZ"],995:["GE"],996:["KG"],998:["UZ"]},countries:{AC:["247","00","(?:[01589]\\d|[46])\\d{4}",[5,6]],AD:["376","00","(?:1|6\\d)\\d{7}|[135-9]\\d{5}",[6,8,9],[["(\\d{3})(\\d{3})","$1 $2",["[135-9]"]],["(\\d{4})(\\d{4})","$1 $2",["1"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]]],AE:["971","00","(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",[5,6,7,8,9,10,11,12],[["(\\d{3})(\\d{2,9})","$1 $2",["60|8"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[236]|[479][2-8]"],"0$1"],["(\\d{3})(\\d)(\\d{5})","$1 $2 $3",["[479]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"]],"0"],AF:["93","00","[2-7]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],"0"],AG:["1","011","(?:268|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([457]\\d{6})$|1","268$1",0,"268"],AI:["1","011","(?:264|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2457]\\d{6})$|1","264$1",0,"264"],AL:["355","00","(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",[6,7,8,9],[["(\\d{3})(\\d{3,4})","$1 $2",["80|9"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["[23578]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"]],"0"],AM:["374","00","(?:[1-489]\\d|55|60|77)\\d{6}",[8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]0"],"0 $1"],["(\\d{3})(\\d{5})","$1 $2",["2|3[12]"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[3-9]"],"0$1"]],"0"],AO:["244","00","[29]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[29]"]]]],AR:["54","00","(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",[10,11],[["(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",1],["(\\d)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",0,"$1 $2 $3-$4"],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 15-$3-$4",["91"],"0$1",0,"$1 $2 $3-$4"],["(\\d{3})(\\d{3})(\\d{5})","$1-$2-$3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9"],"0$1",0,"$1 $2 $3-$4"]],"0",0,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?","9$1"],AS:["1","011","(?:[58]\\d\\d|684|900)\\d{7}",[10],0,"1",0,"([267]\\d{6})$|1","684$1",0,"684"],AT:["43","00","1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",[4,5,6,7,8,9,10,11,12,13],[["(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],["(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],["(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],["(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],"0"],AU:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",[5,6,7,8,9,10,12],[["(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|4"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],"0",0,"(183[12])|0",0,0,0,[["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}",[9]],["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,["163\\d{2,6}",[5,6,7,8,9]],["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],AW:["297","00","(?:[25-79]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[25-9]"]]]],AX:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",[5,6,7,8,9,10,11,12],0,"0",0,0,0,0,"18",0,"00"],AZ:["994","00","365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[28]|2|365|46","1[28]|2|365[45]|46","1[28]|2|365(?:4|5[02])|46"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[13-9]"],"0$1"]],"0"],BA:["387","00","6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-3]|[7-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]|6[56]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],"0"],BB:["1","011","(?:246|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","246$1",0,"246"],BD:["880","00","[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{4,6})","$1-$2",["31[5-8]|[459]1"],"0$1"],["(\\d{3})(\\d{3,7})","$1-$2",["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],"0$1"],["(\\d{4})(\\d{3,6})","$1-$2",["[13-9]|22"],"0$1"],["(\\d)(\\d{7,8})","$1-$2",["2"],"0$1"]],"0"],BE:["32","00","4\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[239]|4[23]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[15-8]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4"],"0$1"]],"0"],BF:["226","00","[025-7]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[025-7]"]]]],BG:["359","00","00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",[6,7,8,9,12],[["(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["43[1-6]|70[1-9]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],["(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],"0"],BH:["973","00","[136-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[13679]|8[047]"]]]],BI:["257","00","(?:[267]\\d|31)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2367]"]]]],BJ:["229","00","[24-689]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-689]"]]]],BL:["590","00","590\\d{6}|(?:69|80|9\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["590(?:2[7-9]|5[12]|87)\\d{4}"],["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:395|76[018])\\d|475[01])\\d{4}"]]],BM:["1","011","(?:441|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","441$1",0,"441"],BN:["673","00","[2-578]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-578]"]]]],BO:["591","00(?:1\\d)?","(?:[2-467]\\d\\d|8001)\\d{5}",[8,9],[["(\\d)(\\d{7})","$1 $2",["[23]|4[46]"]],["(\\d{8})","$1",["[67]"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["8"]]],"0",0,"0(1\\d)?"],BQ:["599","00","(?:[34]1|7\\d)\\d{5}",[7],0,0,0,0,0,0,"[347]"],BR:["55","00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",[8,9,10,11],[["(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","4(?:02|37)0|[34]00"]],["(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)"],["(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)"]],"0",0,"(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2"],BS:["1","011","(?:242|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([3-8]\\d{6})$|1","242$1",0,"242"],BT:["975","00","[17]\\d{7}|[2-8]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|7"]]]],BW:["267","00","(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",[7,8,10],[["(\\d{2})(\\d{5})","$1 $2",["90"]],["(\\d{3})(\\d{4})","$1 $2",["[24-6]|3[15-79]"]],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37]"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["8"]]]],BY:["375","810","(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3})","$1 $2",["800"],"8 $1"],["(\\d{3})(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"],["(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:[56]|7[467])|2[1-3]"],"8 0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-4]"],"8 0$1"],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["[89]"],"8 $1"]],"8",0,"0|80?",0,0,0,0,"8~10"],BZ:["501","00","(?:0800\\d|[2-8])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],["(\\d)(\\d{3})(\\d{4})(\\d{3})","$1-$2-$3-$4",["0"]]]],CA:["1","011","(?:[2-8]\\d|90)\\d{8}|3\\d{6}",[7,10],0,"1",0,0,0,0,0,[["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|3[178]|50|68|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",[10]],["",[10]],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",[10]],["900[2-9]\\d{6}",[10]],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}",[10]],0,["310\\d{4}",[7]],0,["600[2-9]\\d{6}",[10]]]],CC:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",[9]],["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CD:["243","00","[189]\\d{8}|[1-68]\\d{6}",[7,9],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]"],"0$1"]],"0"],CF:["236","00","(?:[27]\\d{3}|8776)\\d{4}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[278]"]]]],CG:["242","00","222\\d{6}|(?:0\\d|80)\\d{7}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]]]],CH:["41","00","8\\d{11}|[2-9]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]|81"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["8"],"0$1"]],"0"],CI:["225","00","[02]\\d{9}",[10],[["(\\d{2})(\\d{2})(\\d)(\\d{5})","$1 $2 $3 $4",["2"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3 $4",["0"]]]],CK:["682","00","[2-578]\\d{4}",[5],[["(\\d{2})(\\d{3})","$1 $2",["[2-578]"]]]],CL:["56","(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0","12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",[9,10,11],[["(\\d{5})(\\d{4})","$1 $2",["219","2196"],"($1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[1-36]"],"($1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9[2-9]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],"($1)"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]]],CM:["237","00","[26]\\d{8}|88\\d{6,7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["88"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]|88"]]]],CN:["86","00|1(?:[12]\\d|79)\\d\\d00","1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}",[7,8,9,10,11,12],[["(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]","(?:10|2[0-57-9])(?:10|9[56])","10(?:10|9[56])|2[0-57-9](?:100|9[56])"],"0$1"],["(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]","(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]","85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])","85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1",1],["(\\d{3})(\\d{7,8})","$1 $2",["9"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",1]],"0",0,"(1(?:[12]\\d|79)\\d\\d)|0",0,0,0,0,"00"],CO:["57","00(?:4(?:[14]4|56)|[579])","(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}",[10,11],[["(\\d{3})(\\d{7})","$1 $2",["6"],"($1)"],["(\\d{3})(\\d{7})","$1 $2",["3[0-357]|91"]],["(\\d)(\\d{3})(\\d{7})","$1-$2-$3",["1"],"0$1",0,"$1 $2 $3"]],"0",0,"0(4(?:[14]4|56)|[579])?"],CR:["506","00","(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",[8,10],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[3-9]"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]"]]],0,0,"(19(?:0[0-2468]|1[09]|20|66|77|99))"],CU:["53","119","[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}",[6,7,8,10],[["(\\d{2})(\\d{4,6})","$1 $2",["2[1-4]|[34]"],"(0$1)"],["(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["5"],"0$1"],["(\\d{3})(\\d{7})","$1 $2",["8"],"0$1"]],"0"],CV:["238","0","(?:[2-59]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2-589]"]]]],CW:["599","00","(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[3467]"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["9[4-8]"]]],0,0,0,0,0,"[69]"],CX:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",[9]],["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CY:["357","00","(?:[279]\\d|[58]0)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[257-9]"]]]],CZ:["420","00","(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["96"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]]],DE:["49","00","[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",[4,5,6,7,8,9,10,11,12,13,14,15],[["(\\d{2})(\\d{3,13})","$1 $2",["3[02]|40|[68]9"],"0$1"],["(\\d{3})(\\d{3,12})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1","2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],"0$1"],["(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["138"],"0$1"],["(\\d{5})(\\d{2,10})","$1 $2",["3"],"0$1"],["(\\d{3})(\\d{5,11})","$1 $2",["181"],"0$1"],["(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:3|80)|9"],"0$1"],["(\\d{3})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],["(\\d{3})(\\d{7,12})","$1 $2",["8"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["18[68]"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["15[0568]"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["15[1279]"],"0$1"],["(\\d{3})(\\d{8})","$1 $2",["18"],"0$1"],["(\\d{3})(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"],["(\\d{4})(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],["(\\d{3})(\\d{2})(\\d{8})","$1 $2 $3",["15"],"0$1"]],"0"],DJ:["253","00","(?:2\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[27]"]]]],DK:["45","00","[2-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-9]"]]]],DM:["1","011","(?:[58]\\d\\d|767|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","767$1",0,"767"],DO:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,0,0,0,"8001|8[024]9"],DZ:["213","00","(?:[1-4]|[5-79]\\d|80)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"]],"0"],EC:["593","00","1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",[8,9,10,11],[["(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[2-7]"],"(0$1)",0,"$1-$2-$3"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],"0"],EE:["372","00","8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],["(\\d{4})(\\d{3,4})","$1 $2",["[45]|8(?:00|[1-49])","[45]|8(?:00[1-9]|[1-49])"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],EG:["20","00","[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",[8,9,10],[["(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],["(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|8[2468]|9[235-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[189]"],"0$1"]],"0"],EH:["212","00","[5-8]\\d{8}",[9],0,"0",0,0,0,0,"528[89]"],ER:["291","00","[178]\\d{6}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[178]"],"0$1"]],"0"],ES:["34","00","[5-9]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-9]"]]]],ET:["251","00","(?:11|[2-579]\\d)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-579]"],"0$1"]],"0"],FI:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",[5,6,7,8,9,10,11,12],[["(\\d)(\\d{4,9})","$1 $2",["[2568][1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"],["(\\d{3})(\\d{3,7})","$1 $2",["[12]00|[368]|70[07-9]"],"0$1"],["(\\d{2})(\\d{4,8})","$1 $2",["[1245]|7[135]"],"0$1"],["(\\d{2})(\\d{6,10})","$1 $2",["7"],"0$1"]],"0",0,0,0,0,"1[03-79]|[2-9]",0,"00"],FJ:["679","0(?:0|52)","45\\d{5}|(?:0800\\d|[235-9])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1 $2",["[235-9]|45"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],0,0,0,0,0,0,0,"00"],FK:["500","00","[2-7]\\d{4}",[5]],FM:["691","00","(?:[39]\\d\\d|820)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[389]"]]]],FO:["298","00","[2-9]\\d{5}",[6],[["(\\d{6})","$1",["[2-9]"]]],0,0,"(10(?:01|[12]0|88))"],FR:["33","00","[1-9]\\d{8}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],"0"],GA:["241","00","(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",[7,8],[["(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["11|[67]"],"0$1"]],0,0,"0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})","$1"],GB:["44","00","[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",[7,9,10],[["(\\d{3})(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["845","8454","84546","845464"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["800"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["1(?:[2-69][02-9]|[78])"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[25]|7(?:0|6[02-9])","[25]|7(?:0|6(?:[03-9]|2[356]))"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[1389]"],"0$1"]],"0",0,0,0,0,0,[["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-579])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:[02]\\d|1[0-246-9])))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",[9,10]],["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]],0," x"],GD:["1","011","(?:473|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","473$1",0,"473"],GE:["995","00","(?:[3-57]\\d\\d|800)\\d{6}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["32"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[57]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"]],"0"],GF:["594","00","[56]94\\d{6}|(?:80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[56]|9[47]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[89]"],"0$1"]],"0"],GG:["44","00","(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",[7,9,10],0,"0",0,"([25-9]\\d{5})$|0","1481$1",0,0,[["1481[25-9]\\d{5}",[10]],["7(?:(?:781|839)\\d|911[17])\\d{5}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]]],GH:["233","00","(?:[235]\\d{3}|800)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"]],"0"],GI:["350","00","(?:[25]\\d|60)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["2"]]]],GL:["299","00","(?:19|[2-689]\\d|70)\\d{4}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["19|[2-9]"]]]],GM:["220","00","[2-9]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],GN:["224","00","722\\d{6}|(?:3|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]]],GP:["590","00","590\\d{6}|(?:69|80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0",0,0,0,0,0,[["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1289]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"],["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:395|76[018])\\d|475[01])\\d{4}"]]],GQ:["240","00","222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],["(\\d{3})(\\d{6})","$1 $2",["[89]"]]]],GR:["30","00","5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",[10,11,12],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],["(\\d{4})(\\d{6})","$1 $2",["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2689]"]],["(\\d{3})(\\d{3,4})(\\d{5})","$1 $2 $3",["8"]]]],GT:["502","00","(?:1\\d{3}|[2-7])\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],GU:["1","011","(?:[58]\\d\\d|671|900)\\d{7}",[10],0,"1",0,"([3-9]\\d{6})$|1","671$1",0,"671"],GW:["245","00","[49]\\d{8}|4\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["40"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"]]]],GY:["592","001","9008\\d{3}|(?:[2-467]\\d\\d|862)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-46-9]"]]]],HK:["852","00(?:30|5[09]|[126-9]?)","8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",[5,6,7,8,9,11],[["(\\d{3})(\\d{2,5})","$1 $2",["900","9003"]],["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{3})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],0,0,0,0,0,0,0,"00"],HN:["504","00","8\\d{10}|[237-9]\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1-$2",["[237-9]"]]]],HR:["385","00","(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",[6,7,8,9],[["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["6[01]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-5]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],"0"],HT:["509","00","(?:[2-489]\\d|55)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[2-589]"]]]],HU:["36","00","[235-7]\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"06 $1"]],"06"],ID:["62","00[89]","(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}",[7,8,9,10,11,12,13],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],["(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],["(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],["(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],"(0$1)"],["(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],["(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],["(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"]],"0"],IE:["353","00","(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],["(\\d{3})(\\d{5})","$1 $2",["[45]0"],"(0$1)"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2569]|4[1-69]|7[14]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[78]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["4"],"(0$1)"],["(\\d{2})(\\d)(\\d{3})(\\d{4})","$1 $2 $3 $4",["8"],"0$1"]],"0"],IL:["972","0(?:0|1[2-9])","1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",[7,8,9,10,11,12],[["(\\d{4})(\\d{3})","$1-$2",["125"]],["(\\d{4})(\\d{2})(\\d{2})","$1-$2-$3",["121"]],["(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1-$2-$3",["12"]],["(\\d{4})(\\d{6})","$1-$2",["159"]],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["15"]]],"0"],IM:["44","00","1624\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([25-8]\\d{5})$|0","1624$1",0,"74576|(?:16|7[56])24"],IN:["91","00","(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",[8,9,10,11,12,13],[["(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],0,1],["(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],0,1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"],"0$1",1],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]","1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],"0$1",1],["(\\d{5})(\\d{5})","$1 $2",["[6-9]"],"0$1",1],["(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["1(?:6|8[06])","1(?:6|8[06]0)"],0,1],["(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18"],0,1]],"0"],IO:["246","00","3\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["3"]]]],IQ:["964","00","(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],IR:["98","00","[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",[4,5,6,7,10],[["(\\d{4,5})","$1",["96"],"0$1"],["(\\d{2})(\\d{4,5})","$1 $2",["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"]],"0"],IS:["354","00|1(?:0(?:01|[12]0)|100)","(?:38\\d|[4-9])\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],0,0,0,0,0,0,0,"00"],IT:["39","00","0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",[6,7,8,9,10,11],[["(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],["(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],["(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],["(\\d{4})(\\d{4})","$1 $2",["894"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1(?:44|[679])|[378]"]],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]|14"]],["(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["3"]]],0,0,0,0,0,0,[["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],["3[1-9]\\d{8}|3[2-9]\\d{7}",[9,10]],["80(?:0\\d{3}|3)\\d{3}",[6,9]],["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}",[6,8,9,10]],["1(?:78\\d|99)\\d{6}",[9,10]],0,0,0,["55\\d{8}",[10]],["84(?:[08]\\d{3}|[17])\\d{3}",[6,9]]]],JE:["44","00","1534\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([0-24-8]\\d{5})$|0","1534$1",0,0,[["1534[0-24-8]\\d{5}"],["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"],["80(?:07(?:35|81)|8901)\\d{4}"],["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],["701511\\d{4}"],0,["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],["56\\d{8}"]]],JM:["1","011","(?:[58]\\d\\d|658|900)\\d{7}",[10],0,"1",0,0,0,0,"658|876"],JO:["962","00","(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],["(\\d{3})(\\d{5,6})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["70"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],JP:["81","010","00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",[8,9,10,11,12,13,14,15,16,17],[["(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],["(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:80|9[16])","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])","[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],"0$1"],["(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[289][2-9]|5[3-9]|7[2-4679]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[257-9]"],"0$1"]],"0"],KE:["254","000","(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",[7,8,9,10],[["(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[17]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0"],KG:["996","00","8\\d{9}|(?:[235-8]\\d|99)\\d{7}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["3(?:1[346]|[24-79])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-79]|88"],"0$1"],["(\\d{3})(\\d{3})(\\d)(\\d{2,3})","$1 $2 $3 $4",["8"],"0$1"]],"0"],KH:["855","00[14-9]","1\\d{9}|[1-9]\\d{7,8}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],KI:["686","00","(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",[5,8],0,"0"],KM:["269","00","[3478]\\d{6}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[3478]"]]]],KN:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","869$1",0,"869"],KP:["850","00|99","85\\d{6}|(?:19\\d|[2-7])\\d{7}",[8,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"]],"0"],KR:["82","00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))","00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",[5,6,8,9,10,11,12,13,14],[["(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1"],["(\\d{4})(\\d{4})","$1-$2",["1"]],["(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60|8"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1"]],"0",0,"0(8(?:[1-46-8]|5\\d\\d))?"],KW:["965","00","18\\d{5}|(?:[2569]\\d|41)\\d{6}",[7,8],[["(\\d{4})(\\d{3,4})","$1 $2",["[169]|2(?:[235]|4[1-35-9])|52"]],["(\\d{3})(\\d{5})","$1 $2",["[245]"]]]],KY:["1","011","(?:345|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","345$1",0,"345"],KZ:["7","810","(?:33622|8\\d{8})\\d{5}|[78]\\d{9}",[10,14],0,"8",0,0,0,0,"33|7",0,"8~10"],LA:["856","00","[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["30[013-9]"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[23]"],"0$1"]],"0"],LB:["961","00","[27-9]\\d{7}|[13-9]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27-9]"]]],"0"],LC:["1","011","(?:[58]\\d\\d|758|900)\\d{7}",[10],0,"1",0,"([2-8]\\d{6})$|1","758$1",0,"758"],LI:["423","00","[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",[7,9],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2379]|8(?:0[09]|7)","[2379]|8(?:0(?:02|9)|7)"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["69"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],"0",0,"(1001)|0"],LK:["94","00","[1-9]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"],"0$1"]],"0"],LR:["231","00","(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[4-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23578]"],"0$1"]],"0"],LS:["266","00","(?:[256]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2568]"]]]],LT:["370","00","(?:[3469]\\d|52|[78]0)\\d{6}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["52[0-7]"],"(8-$1)",1],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"8 $1",1],["(\\d{2})(\\d{6})","$1 $2",["37|4(?:[15]|6[1-8])"],"(8-$1)",1],["(\\d{3})(\\d{5})","$1 $2",["[3-6]"],"(8-$1)",1]],"8",0,"[08]"],LU:["352","00","35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",[4,5,6,7,8,9,10,11],[["(\\d{2})(\\d{3})","$1 $2",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20[2-689]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"]],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["80[01]|90[015]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})","$1 $2 $3 $4",["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]],0,0,"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],LV:["371","00","(?:[268]\\d|90)\\d{6}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[269]|8[01]"]]]],LY:["218","00","[2-9]\\d{8}",[9],[["(\\d{2})(\\d{7})","$1-$2",["[2-9]"],"0$1"]],"0"],MA:["212","00","[5-8]\\d{8}",[9],[["(\\d{5})(\\d{4})","$1-$2",["5(?:29|38)","5(?:29[1289]|389)","529(?:1[1-46-9]|2[013-8]|90)|5(?:298|389)[0-46-9]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5[45]"],"0$1"],["(\\d{4})(\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|9)|892","5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"],"0$1"],["(\\d{2})(\\d{7})","$1-$2",["8"],"0$1"],["(\\d{3})(\\d{6})","$1-$2",["[5-7]"],"0$1"]],"0",0,0,0,0,0,[["5293[01]\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|9[0-289])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[0189]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|2[0-2]|6[0-8]|8[0-3]))\\d{6}"],["80\\d{7}"],["89\\d{7}"],0,0,0,0,["592(?:4[0-2]|93)\\d{4}"]]],MC:["377","00","(?:[3489]|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[389]"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1"]],"0"],MD:["373","00","(?:[235-7]\\d|[89]0)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[25-7]"],"0$1"]],"0"],ME:["382","00","(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"0$1"]],"0"],MF:["590","00","590\\d{6}|(?:69|80|9\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"],["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:395|76[018])\\d|475[01])\\d{4}"]]],MG:["261","00","[23]\\d{8}",[9],[["(\\d{2})(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"],"0$1"]],"0",0,"([24-9]\\d{6})$|0","20$1"],MH:["692","011","329\\d{4}|(?:[256]\\d|45)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1-$2",["[2-6]"]]],"1"],MK:["389","00","[2-578]\\d{7}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2|34[47]|4(?:[37]7|5[47]|64)"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],"0"],ML:["223","00","[24-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]]],MM:["95","00","1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",[6,7,8,9,10],[["(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[4-7]|8[1-35]"],"0$1"],["(\\d)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92"],"0$1"],["(\\d)(\\d{5})(\\d{4})","$1 $2 $3",["9"],"0$1"]],"0"],MN:["976","001","[12]\\d{7,9}|[5-9]\\d{7}",[8,9,10],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[12]1"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[5-9]"]],["(\\d{3})(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["[12](?:27|3[2-8]|4[2-68]|5[1-4689])","[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["[12]"],"0$1"]],"0"],MO:["853","00","0800\\d{3}|(?:28|[68]\\d)\\d{6}",[7,8],[["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{4})(\\d{4})","$1 $2",["[268]"]]]],MP:["1","011","[58]\\d{9}|(?:67|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","670$1",0,"670"],MQ:["596","00","596\\d{6}|(?:69|80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],MR:["222","00","(?:[2-4]\\d\\d|800)\\d{5}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-48]"]]]],MS:["1","011","(?:[58]\\d\\d|664|900)\\d{7}",[10],0,"1",0,"([34]\\d{6})$|1","664$1",0,"664"],MT:["356","00","3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2357-9]"]]]],MU:["230","0(?:0|[24-7]0|3[03])","(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[2-46]|8[013]"]],["(\\d{4})(\\d{4})","$1 $2",["[57]"]],["(\\d{5})(\\d{5})","$1 $2",["8"]]],0,0,0,0,0,0,0,"020"],MV:["960","0(?:0|19)","(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",[7,10],[["(\\d{3})(\\d{4})","$1-$2",["[34679]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"]]],0,0,0,0,0,0,0,"00"],MW:["265","00","(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",[7,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[137-9]"],"0$1"]],"0"],MX:["52","0[09]","1(?:(?:[27]2|44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}",[10,11],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"],0,1],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 $3 $4",["1(?:33|5[56]|81)"],0,1],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 $3 $4",["1"],0,1]],"01",0,"0(?:[12]|4[45])|1",0,0,0,0,"00"],MY:["60","00","1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1-$2 $3",["1(?:[02469]|[378][1-9]|53)|8","1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3-$4",["1(?:[367]|80)"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2 $3",["1"],"0$1"]],"0"],MZ:["258","00","(?:2|8\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-79]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],NA:["264","00","[68]\\d{7,8}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["87"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],NC:["687","00","(?:050|[2-57-9]\\d\\d)\\d{3}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[02-57-9]"]]]],NE:["227","00","[027-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["08"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[089]|2[013]|7[04]"]]]],NF:["672","00","[13]\\d{5}",[6],[["(\\d{2})(\\d{4})","$1 $2",["1[0-3]"]],["(\\d)(\\d{5})","$1 $2",["[13]"]]],0,0,"([0-258]\\d{4})$","3$1"],NG:["234","009","(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}",[7,8,10,11,12,13,14],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["78"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|9(?:0[3-9]|[1-9])"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[3-7]|8[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]"],"0$1"],["(\\d{3})(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]"],"0$1"]],"0"],NI:["505","00","(?:1800|[25-8]\\d{3})\\d{4}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[125-8]"]]]],NL:["31","00","(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",[5,6,7,8,9,10,11],[["(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],["(\\d)(\\d{8})","$1 $2",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-578]|91"],"0$1"],["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3",["9"],"0$1"]],"0"],NO:["47","00","(?:0|[2-9]\\d{3})\\d{4}",[5,8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[489]|59"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-7]"]]],0,0,0,0,0,"[02-689]|7[0-8]"],NP:["977","00","(?:1\\d|9)\\d{9}|[1-9]\\d{7}",[8,10,11],[["(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],["(\\d{2})(\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],"0$1"],["(\\d{3})(\\d{7})","$1-$2",["9"]]],"0"],NR:["674","00","(?:444|(?:55|8\\d)\\d|666)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[4-68]"]]]],NU:["683","00","(?:[47]|888\\d)\\d{3}",[4,7],[["(\\d{3})(\\d{4})","$1 $2",["8"]]]],NZ:["64","0(?:0|161)","[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,8})","$1 $2",["8[1-579]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["50[036-8]|[89]0","50(?:[0367]|88)|[89]0"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["24|[346]|7[2-57-9]|9[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|[59]|80"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1|2[028]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:[169]|7[0-35-9])|7|86"],"0$1"]],"0",0,0,0,0,0,0,"00"],OM:["968","00","(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",[7,8,9],[["(\\d{3})(\\d{4,6})","$1 $2",["[58]"]],["(\\d{2})(\\d{6})","$1 $2",["2"]],["(\\d{4})(\\d{4})","$1 $2",["[179]"]]]],PA:["507","00","(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",[7,8,10,11],[["(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],["(\\d{4})(\\d{4})","$1-$2",["[68]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]]],PE:["51","00|19(?:1[124]|77|90)00","(?:[14-8]|9\\d)\\d{7}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["1"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[4-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"]]],"0",0,0,0,0,0,0,"00"," Anexo "],PF:["689","00","4\\d{5}(?:\\d{2})?|8\\d{7,8}",[6,8,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4|8[7-9]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],PG:["675","00|140[1-3]","(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["18|[2-69]|85"]],["(\\d{4})(\\d{4})","$1 $2",["[78]"]]],0,0,0,0,0,0,0,"00"],PH:["63","00","(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",[6,8,9,10,11,12,13],[["(\\d)(\\d{5})","$1 $2",["2"],"(0$1)"],["(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],["(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|8[2-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],"0"],PK:["92","00","122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,7})","$1 $2 $3",["[89]0"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["1"]],["(\\d{3})(\\d{6,7})","$1 $2",["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])","9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],"(0$1)"],["(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],["(\\d{5})(\\d{5})","$1 $2",["58"],"(0$1)"],["(\\d{3})(\\d{7})","$1 $2",["3"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[24-9]"],"(0$1)"]],"0"],PL:["48","00","(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",[6,7,8,9,10],[["(\\d{5})","$1",["19"]],["(\\d{3})(\\d{3})","$1 $2",["11|20|64"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1","(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2-8]|[2-7]|8[1-79]|9[145]"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["8"]]]],PM:["508","00","[45]\\d{5}|(?:708|80\\d)\\d{6}",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[45]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],PR:["1","011","(?:[589]\\d\\d|787)\\d{7}",[10],0,"1",0,0,0,0,"787|939"],PS:["970","00","[2489]2\\d{6}|(?:1\\d|5)\\d{8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2489]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],PT:["351","00","1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["16|[236-9]"]]]],PW:["680","01[12]","(?:[24-8]\\d\\d|345|900)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],PY:["595","00","59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],["(\\d{3})(\\d{4,5})","$1 $2",["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["87"]],["(\\d{3})(\\d{6})","$1 $2",["9(?:[5-79]|8[1-6])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["9"]]],"0"],QA:["974","00","800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",[7,8,9,11],[["(\\d{3})(\\d{4})","$1 $2",["2[16]|8"]],["(\\d{4})(\\d{4})","$1 $2",["[3-7]"]]]],RE:["262","00","(?:26|[689]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2689]"],"0$1"]],"0",0,0,0,0,0,[["26(?:2\\d\\d|3(?:0\\d|1[0-3]))\\d{4}"],["(?:69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|6[0-6]|7[0-27]|8[0-8]|9[0-479]))|9(?:399[0-2]|4790|76(?:2[27]|3[0-37]|9\\d)))\\d{4}"],["80\\d{7}"],["89[1-37-9]\\d{6}"],0,0,0,0,0,["8(?:1[019]|2[0156]|84|90)\\d{6}"]]],RO:["40","00","(?:[2378]\\d|90)\\d{7}|[23]\\d{5}",[6,9],[["(\\d{3})(\\d{3})","$1 $2",["2[3-6]","2[3-6]\\d9"],"0$1"],["(\\d{2})(\\d{4})","$1 $2",["219|31"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[237-9]"],"0$1"]],"0",0,0,0,0,0,0,0," int "],RS:["381","00","38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",[6,7,8,9,10,11,12],[["(\\d{3})(\\d{3,9})","$1 $2",["(?:2[389]|39)0|[7-9]"],"0$1"],["(\\d{2})(\\d{5,10})","$1 $2",["[1-36]"],"0$1"]],"0"],RU:["7","810","8\\d{13}|[347-9]\\d{9}",[10,14],[["(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],"8 ($1)",1],["(\\d{5})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))","7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[349]|8(?:[02-7]|1[1-8])"],"8 ($1)",1],["(\\d{4})(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3 $4",["8"],"8 ($1)"]],"8",0,0,0,0,"3[04-689]|[489]",0,"8~10"],RW:["250","00","(?:06|[27]\\d\\d|[89]00)\\d{6}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"]]],"0"],SA:["966","00","92\\d{7}|(?:[15]|8\\d)\\d{8}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["9"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["81"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],"0"],SB:["677","0[01]","(?:[1-6]|[7-9]\\d\\d)\\d{4}",[5,7],[["(\\d{2})(\\d{5})","$1 $2",["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],SC:["248","010|0[0-2]","800\\d{4}|(?:[249]\\d|64)\\d{5}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]|9[57]"]]],0,0,0,0,0,0,0,"00"],SD:["249","00","[19]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[19]"],"0$1"]],"0"],SE:["46","00","(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{4})","$1-$2",["9(?:00|39|44|9)"],"0$1",0,"$1 $2"],["(\\d{2})(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3"],["(\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{2,3})(\\d{3})","$1-$2 $3",["9(?:00|39|44)"],"0$1",0,"$1 $2 $3"],["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3 $4"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["10|7"],"0$1",0,"$1 $2 $3 $4"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["[26]"],"0$1",0,"$1 $2 $3 $4 $5"]],"0"],SG:["65","0[0-3]\\d","(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",[8,10,11],[["(\\d{4})(\\d{4})","$1 $2",["[369]|8(?:0[1-6]|[1-9])"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],["(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],SH:["290","00","(?:[256]\\d|8)\\d{3}",[4,5],0,0,0,0,0,0,"[256]"],SI:["386","00|10(?:22|66|88|99)","[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",[5,6,7,8],[["(\\d{2})(\\d{3,6})","$1 $2",["8[09]|9"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["59|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-57]"],"(0$1)"]],"0",0,0,0,0,0,0,"00"],SJ:["47","00","0\\d{4}|(?:[489]\\d|[57]9)\\d{6}",[5,8],0,0,0,0,0,0,"79"],SK:["421","00","[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",[6,7,9],[["(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"]],"0"],SL:["232","00","(?:[237-9]\\d|66)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[236-9]"],"(0$1)"]],"0"],SM:["378","00","(?:0549|[5-7]\\d)\\d{6}",[8,10],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],["(\\d{4})(\\d{6})","$1 $2",["0"]]],0,0,"([89]\\d{5})$","0549$1"],SN:["221","00","(?:[378]\\d|93)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]]]],SO:["252","00","[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",[6,7,8,9],[["(\\d{2})(\\d{4})","$1 $2",["8[125]"]],["(\\d{6})","$1",["[134]"]],["(\\d)(\\d{6})","$1 $2",["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],["(\\d)(\\d{7})","$1 $2",["(?:2|90)4|[67]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3478]|64|90"]],["(\\d{2})(\\d{5,7})","$1 $2",["1|28|6(?:0[5-7]|[1-35-9])|9[2-9]"]]],"0"],SR:["597","00","(?:[2-5]|68|[78]\\d)\\d{5}",[6,7],[["(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],["(\\d{3})(\\d{3})","$1-$2",["[2-5]"]],["(\\d{3})(\\d{4})","$1-$2",["[6-8]"]]]],SS:["211","00","[19]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[19]"],"0$1"]],"0"],ST:["239","00","(?:22|9\\d)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[29]"]]]],SV:["503","00","[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",[7,8,11],[["(\\d{3})(\\d{4})","$1 $2",["[89]"]],["(\\d{4})(\\d{4})","$1 $2",["[267]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]]],SX:["1","011","7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"(5\\d{6})$|1","721$1",0,"721"],SY:["963","00","[1-39]\\d{8}|[1-5]\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-5]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1",1]],"0"],SZ:["268","00","0800\\d{4}|(?:[237]\\d|900)\\d{6}",[8,9],[["(\\d{4})(\\d{4})","$1 $2",["[0237]"]],["(\\d{5})(\\d{4})","$1 $2",["9"]]]],TA:["290","00","8\\d{3}",[4],0,0,0,0,0,0,"8"],TC:["1","011","(?:[58]\\d\\d|649|900)\\d{7}",[10],0,"1",0,"([2-479]\\d{6})$|1","649$1",0,"649"],TD:["235","00|16","(?:22|[69]\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2679]"]]],0,0,0,0,0,0,0,"00"],TG:["228","00","[279]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[279]"]]]],TH:["66","00[1-9]","(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",[8,9,10,13],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],TJ:["992","810","(?:00|[1-57-9]\\d)\\d{7}",[9],[["(\\d{6})(\\d)(\\d{2})","$1 $2 $3",["331","3317"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[34]7|91[78]"]],["(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3[1-5]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[0-57-9]"]]],0,0,0,0,0,0,0,"8~10"],TK:["690","00","[2-47]\\d{3,6}",[4,5,6,7]],TL:["670","00","7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],["(\\d{4})(\\d{4})","$1 $2",["7"]]]],TM:["993","810","[1-6]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-5]"],"(8 $1)"],["(\\d{2})(\\d{6})","$1 $2",["6"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],TN:["216","00","[2-57-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]"]]]],TO:["676","00","(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",[5,7],[["(\\d{2})(\\d{3})","$1-$2",["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[5-9]"]]]],TR:["90","00","4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",[7,10,12,13],[["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[01589]|90"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:[0-59]|61)","5(?:[0-59]|616)","5(?:[0-59]|6161)"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24][1-8]|3[1-9]"],"(0$1)",1],["(\\d{3})(\\d{3})(\\d{6,7})","$1 $2 $3",["80"],"0$1",1]],"0"],TT:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-46-8]\\d{6})$|1","868$1",0,"868"],TV:["688","00","(?:2|7\\d\\d|90)\\d{4}",[5,6,7],[["(\\d{2})(\\d{3})","$1 $2",["2"]],["(\\d{2})(\\d{4})","$1 $2",["90"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],TW:["886","0(?:0[25-79]|19)","[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",[7,8,9,10,11],[["(\\d{2})(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[258]0"],"0$1"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]","[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,5})","$1 $2 $3",["7"],"0$1"]],"0",0,0,0,0,0,0,0,"#"],TZ:["255","00[056]","(?:[25-8]\\d|41|90)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["5"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"]],"0"],UA:["380","00","[89]\\d{9}|[3-9]\\d{8}",[9,10],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]","6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])","3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|89|9[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0",0,0,0,0,0,0,"0~0"],UG:["256","00[057]","800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",[9],[["(\\d{4})(\\d{5})","$1 $2",["202","2024"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[27-9]|4(?:6[45]|[7-9])"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[34]"],"0$1"]],"0"],US:["1","011","[2-9]\\d{9}|3\\d{6}",[10],[["(\\d{3})(\\d{4})","$1-$2",["310"],0,1],["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",["[2-9]"],0,1,"$1-$2-$3"]],"1",0,0,0,0,0,[["(?:47220[01]|5(?:05(?:[2-57-9]\\d\\d|6(?:[0-35-9]\\d|4[46]))|57200))\\d{4}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[0-2]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],[""],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],["900[2-9]\\d{6}"],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]]],UY:["598","0(?:0|1[3-9]\\d)","(?:0004|4)\\d{9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}",[7,8,10,13],[["(\\d{3})(\\d{4})","$1 $2",["405|8|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[124]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["4"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["0"]]],"0",0,0,0,0,0,0,"00"," int. "],UZ:["998","810","(?:33|[5-79]\\d|88)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[35-9]"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],VA:["39","00","0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",[6,7,8,9,10,11],0,0,0,0,0,0,"06698"],VC:["1","011","(?:[58]\\d\\d|784|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","784$1",0,"784"],VE:["58","00","[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",[10],[["(\\d{3})(\\d{7})","$1-$2",["[24-689]"],"0$1"]],"0"],VG:["1","011","(?:284|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-578]\\d{6})$|1","284$1",0,"284"],VI:["1","011","[58]\\d{9}|(?:34|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","340$1",0,"340"],VN:["84","00","[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["80"],"0$1",1],["(\\d{4})(\\d{4,6})","$1 $2",["1"],0,1],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[69]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3578]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",1]],"0"],VU:["678","00","[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",[5,7],[["(\\d{3})(\\d{4})","$1 $2",["[57-9]"]]]],WF:["681","00","(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[478]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],WS:["685","0","(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",[5,6,7,10],[["(\\d{5})","$1",["[2-5]|6[1-9]"]],["(\\d{3})(\\d{3,7})","$1 $2",["[68]"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],XK:["383","00","[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[23]"],"0$1"]],"0"],YE:["967","00","(?:1|7\\d)\\d{7}|[1-7]\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7(?:[24-6]|8[0-7])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],"0"],YT:["262","00","(?:(?:(?:26|63)9|80\\d)\\d\\d|93980)\\d{4}",[9],0,"0",0,0,0,0,"269|63|9398"],ZA:["27","00","[1-79]\\d{8}|8\\d{4,9}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],ZM:["260","00","800\\d{6}|(?:21|63|[79]\\d)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[79]"],"0$1"]],"0"],ZW:["263","00","2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",[5,6,7,8,9,10],[["(\\d{3})(\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"],"0$1"],["(\\d)(\\d{3})(\\d{2,4})","$1 $2 $3",["[49]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["80"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2","2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)","2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["29[013-9]|39|54"],"0$1"],["(\\d{4})(\\d{3,5})","$1 $2",["(?:25|54)8","258|5483"],"0$1"]],"0"]},nonGeographic:{800:["800",0,"(?:00|[1-9]\\d)\\d{6}",[8],[["(\\d{4})(\\d{4})","$1 $2",["\\d"]]],0,0,0,0,0,0,[0,0,["(?:00|[1-9]\\d)\\d{6}"]]],808:["808",0,"[1-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[1-9]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,0,["[1-9]\\d{7}"]]],870:["870",0,"7\\d{11}|[35-7]\\d{8}",[9,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[35-7]"]]],0,0,0,0,0,0,[0,["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]],878:["878",0,"10\\d{10}",[12],[["(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3",["1"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["10\\d{10}"]]],881:["881",0,"[0-36-9]\\d{8}",[9],[["(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[0-36-9]"]]],0,0,0,0,0,0,[0,["[0-36-9]\\d{8}"]]],882:["882",0,"[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",[7,8,9,10,11,12],[["(\\d{2})(\\d{5})","$1 $2",["16|342"]],["(\\d{2})(\\d{6})","$1 $2",["49"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["1[36]|9"]],["(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["16"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|23|3(?:[15]|4[57])|4|51"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["34"]],["(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["[1-35]"]]],0,0,0,0,0,0,[0,["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}",[7,8,9,10,12]],0,0,0,0,0,0,["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]],883:["883",0,"(?:[1-4]\\d|51)\\d{6,10}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,8})","$1 $2 $3",["[14]|2[24-689]|3[02-689]|51[24-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["21"]],["(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["51[13]"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[235]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[013-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]],888:["888",0,"\\d{11}",[11],[["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],0,0,0,0,0,0,[0,0,0,0,0,0,["\\d{11}"]]],979:["979",0,"[1359]\\d{8}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[1359]"]]],0,0,0,0,0,0,[0,0,0,["[1359]\\d{8}"]]]}};var K={},sP={get exports(){return K},set exports(e){K=e}},lP="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",uP=lP,dP=uP;function C5(){}function P5(){}P5.resetWarningCache=C5;var cP=function(){function e(r,i,o,a,l,u){if(u!==dP){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:P5,resetWarningCache:C5};return n.PropTypes=n,n};sP.exports=cP();var r1={},fP={get exports(){return r1},set exports(e){r1=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if(a==="string"||a==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var l=n.apply(null,o);l&&r.push(l)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var u in o)t.call(o,u)&&o[u]&&r.push(u)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(fP);const Kd=r1;function hP(e,t,n){switch(n){case"Backspace":t>0&&(e=e.slice(0,t-1)+e.slice(t),t--);break;case"Delete":e=e.slice(0,t)+e.slice(t+1);break}return{value:e,caret:t}}function pP(e,t,n){for(var r="",i=0,o=0;o<e.length;){var a=n(e[o],r);a!==void 0&&(r+=a,t!==void 0&&(t===o?i=r.length-1:t>o&&(i=r.length))),o++}t===void 0&&(i=r.length);var l={value:r,caret:i};return l}function gP(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=mP(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mP(e,t){if(e){if(typeof e=="string")return J2(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return J2(e,t)}}function J2(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i1(e,t){for(var n=0,r=gP(t.split("")),i;!(i=r()).done;){var o=i.value;o===e&&n++}return n}function yP(e,t){for(var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"x",r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:" ",i=e.length,o=i1("(",e),a=i1(")",e),l=o-a;l>0&&i<t.length;)e+=t[i].replace(n,r),t[i]===")"&&l--,i++;return e}function vP(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=xP(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xP(e,t){if(e){if(typeof e=="string")return X2(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X2(e,t)}}function X2(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $P(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"x",n=arguments.length>2?arguments[2]:void 0;if(!e)return function(i){return{text:i}};var r=i1(t,e);return function(i){if(!i)return{text:"",template:e};for(var o=0,a="",l=vP(e.split("")),u;!(u=l()).done;){var d=u.value;if(d!==t){a+=d;continue}if(a+=i[o],o++,o===i.length&&i.length<r)break}return n&&(a=yP(a,e)),{text:a,template:e}}}function bP(e,t,n){typeof n=="string"&&(n=$P(n));var r=n(e)||{},i=r.text,o=r.template;if(i===void 0&&(i=e),o)if(t===void 0)t=i.length;else{for(var a=0,l=!1,u=-1;a<i.length&&a<o.length;){if(i[a]!==o[a]){if(t===0){l=!0,t=a;break}u=a,t--}a++}l||(t=u+1)}return{text:i,caret:t}}function wP(e){return e.hasAttribute("readonly")}function SP(e){if(e.selectionStart!==e.selectionEnd)return{start:e.selectionStart,end:e.selectionEnd}}var ev={Backspace:8,Delete:46};function CP(e){switch(e.keyCode){case ev.Backspace:return"Backspace";case ev.Delete:return"Delete"}}function PP(e){return e.selectionStart}function O5(e,t){t!==void 0&&(OP()?setTimeout(function(){return e.setSelectionRange(t,t)},0):e.setSelectionRange(t,t))}function OP(){if(typeof navigator<"u")return _P.test(navigator.userAgent)}var _P=/Android/i;function kP(e,t,n,r,i){o1(t,n,r,void 0,i)}function NP(e,t,n,r,i){if(!wP(t)){var o=CP(e);switch(o){case"Delete":case"Backspace":e.preventDefault();var a=SP(t);return a?(EP(t,a),o1(t,n,r,void 0,i)):o1(t,n,r,o,i)}}}function EP(e,t){var n=e.value;n=n.slice(0,t.start)+n.slice(t.end),e.value=n,O5(e,t.start)}function o1(e,t,n,r,i){var o=pP(e.value,PP(e),t),a=o.value,l=o.caret;if(r){var u=hP(a,l,r);a=u.value,l=u.caret}var d=bP(a,l,n),c=d.text;l=d.caret,e.value=c,O5(e,l),i(a)}var IP=["value","parse","format","inputComponent","onChange","onKeyDown"];function a1(){return a1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a1.apply(this,arguments)}function TP(e,t){if(e==null)return{};var n=AP(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function AP(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function tl(e,t){var n=e.value,r=e.parse,i=e.format,o=e.inputComponent,a=e.onChange,l=e.onKeyDown,u=TP(e,IP),d=C.useRef(),c=C.useCallback(function($){d.current=$,t&&(typeof t=="function"?t($):t.current=$)},[t]),f=C.useCallback(function($){return kP($,d.current,r,i,a)},[d,r,i,a]),g=C.useCallback(function($){return l&&l($),NP($,d.current,r,i,a)},[d,r,i,a,l]);return ne.createElement(o,a1({},u,{ref:c,value:i(FP(n)?"":n).text,onKeyDown:g,onChange:f}))}tl=ne.forwardRef(tl);tl.propTypes={parse:K.func.isRequired,format:K.func.isRequired,inputComponent:K.elementType.isRequired,type:K.string.isRequired,value:K.string,onChange:K.func.isRequired,onKeyDown:K.func,onCut:K.func,onPaste:K.func};tl.defaultProps={inputComponent:"input",type:"text"};const RP=tl;function FP(e){return e==null}function s1(e){return s1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s1(e)}function tv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function DP(e,t,n){return t&&tv(e.prototype,t),n&&tv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function MP(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function LP(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&nl(e,t)}function jP(e){var t=k5();return function(){var r=rl(e),i;if(t){var o=rl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return zP(this,i)}}function zP(e,t){if(t&&(s1(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _5(e)}function _5(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l1(e){var t=typeof Map=="function"?new Map:void 0;return l1=function(r){if(r===null||!UP(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,i)}function i(){return nd(r,arguments,rl(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),nl(i,r)},l1(e)}function nd(e,t,n){return k5()?nd=Reflect.construct:nd=function(i,o,a){var l=[null];l.push.apply(l,o);var u=Function.bind.apply(i,l),d=new u;return a&&nl(d,a.prototype),d},nd.apply(null,arguments)}function k5(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function UP(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function nl(e,t){return nl=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},nl(e,t)}function rl(e){return rl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},rl(e)}var cr=function(e){LP(n,e);var t=jP(n);function n(r){var i;return MP(this,n),i=t.call(this,r),Object.setPrototypeOf(_5(i),n.prototype),i.name=i.constructor.name,i}return DP(n)}(l1(Error)),sm=2,BP=17,HP=3,Tt="0-9０-９٠-٩۰-۹",YP="-‐-―−ー－",WP="／/",VP="．.",qP="  ­​⁠　",GP="()（）［］\\[\\]",QP="~⁓∼～",Tn="".concat(YP).concat(WP).concat(VP).concat(qP).concat(GP).concat(QP),nf="+＋";function nv(e,t){e=e.split("-"),t=t.split("-");for(var n=e[0].split("."),r=t[0].split("."),i=0;i<3;i++){var o=Number(n[i]),a=Number(r[i]);if(o>a)return 1;if(a>o)return-1;if(!isNaN(o)&&isNaN(a))return 1;if(isNaN(o)&&!isNaN(a))return-1}return e[1]&&t[1]?e[1]>t[1]?1:e[1]<t[1]?-1:0:!e[1]&&t[1]?1:e[1]&&!t[1]?-1:0}function Zd(e){return Zd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zd(e)}function rf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function of(e,t,n){return t&&rv(e.prototype,t),n&&rv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var KP="1.2.0",ZP="1.7.35",iv=" ext. ",JP=/^\d+$/,pt=function(){function e(t){rf(this,e),nO(t),this.metadata=t,E5.call(this,t)}return of(e,[{key:"getCountries",value:function(){return Object.keys(this.metadata.countries).filter(function(n){return n!=="001"})}},{key:"getCountryMetadata",value:function(n){return this.metadata.countries[n]}},{key:"nonGeographic",value:function(){if(!(this.v1||this.v2||this.v3))return this.metadata.nonGeographic||this.metadata.nonGeographical}},{key:"hasCountry",value:function(n){return this.getCountryMetadata(n)!==void 0}},{key:"hasCallingCode",value:function(n){if(this.getCountryCodesForCallingCode(n))return!0;if(this.nonGeographic()){if(this.nonGeographic()[n])return!0}else{var r=this.countryCallingCodes()[n];if(r&&r.length===1&&r[0]==="001")return!0}}},{key:"isNonGeographicCallingCode",value:function(n){return this.nonGeographic()?!!this.nonGeographic()[n]:!this.getCountryCodesForCallingCode(n)}},{key:"country",value:function(n){return this.selectNumberingPlan(n)}},{key:"selectNumberingPlan",value:function(n,r){if(n&&JP.test(n)&&(r=n,n=null),n&&n!=="001"){if(!this.hasCountry(n))throw new Error("Unknown country: ".concat(n));this.numberingPlan=new ov(this.getCountryMetadata(n),this)}else if(r){if(!this.hasCallingCode(r))throw new Error("Unknown calling code: ".concat(r));this.numberingPlan=new ov(this.getNumberingPlanMetadata(r),this)}else this.numberingPlan=void 0;return this}},{key:"getCountryCodesForCallingCode",value:function(n){var r=this.countryCallingCodes()[n];if(r)return r.length===1&&r[0].length===3?void 0:r}},{key:"getCountryCodeForCallingCode",value:function(n){var r=this.getCountryCodesForCallingCode(n);if(r)return r[0]}},{key:"getNumberingPlanMetadata",value:function(n){var r=this.getCountryCodeForCallingCode(n);if(r)return this.getCountryMetadata(r);if(this.nonGeographic()){var i=this.nonGeographic()[n];if(i)return i}else{var o=this.countryCallingCodes()[n];if(o&&o.length===1&&o[0]==="001")return this.metadata.countries["001"]}}},{key:"countryCallingCode",value:function(){return this.numberingPlan.callingCode()}},{key:"IDDPrefix",value:function(){return this.numberingPlan.IDDPrefix()}},{key:"defaultIDDPrefix",value:function(){return this.numberingPlan.defaultIDDPrefix()}},{key:"nationalNumberPattern",value:function(){return this.numberingPlan.nationalNumberPattern()}},{key:"possibleLengths",value:function(){return this.numberingPlan.possibleLengths()}},{key:"formats",value:function(){return this.numberingPlan.formats()}},{key:"nationalPrefixForParsing",value:function(){return this.numberingPlan.nationalPrefixForParsing()}},{key:"nationalPrefixTransformRule",value:function(){return this.numberingPlan.nationalPrefixTransformRule()}},{key:"leadingDigits",value:function(){return this.numberingPlan.leadingDigits()}},{key:"hasTypes",value:function(){return this.numberingPlan.hasTypes()}},{key:"type",value:function(n){return this.numberingPlan.type(n)}},{key:"ext",value:function(){return this.numberingPlan.ext()}},{key:"countryCallingCodes",value:function(){return this.v1?this.metadata.country_phone_code_to_countries:this.metadata.country_calling_codes}},{key:"chooseCountryByCountryCallingCode",value:function(n){return this.selectNumberingPlan(n)}},{key:"hasSelectedNumberingPlan",value:function(){return this.numberingPlan!==void 0}}]),e}(),ov=function(){function e(t,n){rf(this,e),this.globalMetadataObject=n,this.metadata=t,E5.call(this,n.metadata)}return of(e,[{key:"callingCode",value:function(){return this.metadata[0]}},{key:"getDefaultCountryMetadataForRegion",value:function(){return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())}},{key:"IDDPrefix",value:function(){if(!(this.v1||this.v2))return this.metadata[1]}},{key:"defaultIDDPrefix",value:function(){if(!(this.v1||this.v2))return this.metadata[12]}},{key:"nationalNumberPattern",value:function(){return this.v1||this.v2?this.metadata[1]:this.metadata[2]}},{key:"possibleLengths",value:function(){if(!this.v1)return this.metadata[this.v2?2:3]}},{key:"_getFormats",value:function(n){return n[this.v1?2:this.v2?3:4]}},{key:"formats",value:function(){var n=this,r=this._getFormats(this.metadata)||this._getFormats(this.getDefaultCountryMetadataForRegion())||[];return r.map(function(i){return new XP(i,n)})}},{key:"nationalPrefix",value:function(){return this.metadata[this.v1?3:this.v2?4:5]}},{key:"_getNationalPrefixFormattingRule",value:function(n){return n[this.v1?4:this.v2?5:6]}},{key:"nationalPrefixFormattingRule",value:function(){return this._getNationalPrefixFormattingRule(this.metadata)||this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())}},{key:"_nationalPrefixForParsing",value:function(){return this.metadata[this.v1?5:this.v2?6:7]}},{key:"nationalPrefixForParsing",value:function(){return this._nationalPrefixForParsing()||this.nationalPrefix()}},{key:"nationalPrefixTransformRule",value:function(){return this.metadata[this.v1?6:this.v2?7:8]}},{key:"_getNationalPrefixIsOptionalWhenFormatting",value:function(){return!!this.metadata[this.v1?7:this.v2?8:9]}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata)||this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())}},{key:"leadingDigits",value:function(){return this.metadata[this.v1?8:this.v2?9:10]}},{key:"types",value:function(){return this.metadata[this.v1?9:this.v2?10:11]}},{key:"hasTypes",value:function(){return this.types()&&this.types().length===0?!1:!!this.types()}},{key:"type",value:function(n){if(this.hasTypes()&&av(this.types(),n))return new tO(av(this.types(),n),this)}},{key:"ext",value:function(){return this.v1||this.v2?iv:this.metadata[13]||iv}}]),e}(),XP=function(){function e(t,n){rf(this,e),this._format=t,this.metadata=n}return of(e,[{key:"pattern",value:function(){return this._format[0]}},{key:"format",value:function(){return this._format[1]}},{key:"leadingDigitsPatterns",value:function(){return this._format[2]||[]}},{key:"nationalPrefixFormattingRule",value:function(){return this._format[3]||this.metadata.nationalPrefixFormattingRule()}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return!!this._format[4]||this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"nationalPrefixIsMandatoryWhenFormattingInNationalFormat",value:function(){return this.usesNationalPrefix()&&!this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"usesNationalPrefix",value:function(){return!!(this.nationalPrefixFormattingRule()&&!eO.test(this.nationalPrefixFormattingRule()))}},{key:"internationalFormat",value:function(){return this._format[5]||this.format()}}]),e}(),eO=/^\(?\$1\)?$/,tO=function(){function e(t,n){rf(this,e),this.type=t,this.metadata=n}return of(e,[{key:"pattern",value:function(){return this.metadata.v1?this.type:this.type[0]}},{key:"possibleLengths",value:function(){if(!this.metadata.v1)return this.type[1]||this.metadata.possibleLengths()}}]),e}();function av(e,t){switch(t){case"FIXED_LINE":return e[0];case"MOBILE":return e[1];case"TOLL_FREE":return e[2];case"PREMIUM_RATE":return e[3];case"PERSONAL_NUMBER":return e[4];case"VOICEMAIL":return e[5];case"UAN":return e[6];case"PAGER":return e[7];case"VOIP":return e[8];case"SHARED_COST":return e[9]}}function nO(e){if(!e)throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");if(!xh(e)||!xh(e.countries))throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(xh(e)?"an object of shape: { "+Object.keys(e).join(", ")+" }":"a "+rO(e)+": "+e,"."))}var xh=function(t){return Zd(t)==="object"},rO=function(t){return Zd(t)};function wi(e,t){if(t=new pt(t),t.hasCountry(e))return t.country(e).countryCallingCode();throw new Error("Unknown country: ".concat(e))}function N5(e,t){return t.countries[e]!==void 0}function E5(e){var t=e.version;typeof t=="number"?(this.v1=t===1,this.v2=t===2,this.v3=t===3,this.v4=t===4):t?nv(t,KP)===-1?this.v2=!0:nv(t,ZP)===-1?this.v3=!0:this.v4=!0:this.v1=!0}var iO=";ext=",po=function(t){return"([".concat(Tt,"]{1,").concat(t,"})")};function I5(e){var t="20",n="15",r="9",i="6",o="[  \\t,]*",a="[:\\.．]?[  \\t,-]*",l="#?",u="(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)",d="(?:[xｘ#＃~～]|int|ｉｎｔ)",c="[- ]+",f="[  \\t]*",g="(?:,{2}|;)",$=iO+po(t),v=o+u+a+po(t)+l,b=o+d+a+po(r)+l,w=c+po(i)+"#",m=f+g+a+po(n)+l,p=f+"(?:,)+"+a+po(r)+l;return $+"|"+v+"|"+b+"|"+w+"|"+m+"|"+p}var oO="["+Tt+"]{"+sm+"}",aO="["+nf+"]{0,1}(?:["+Tn+"]*["+Tt+"]){3,}["+Tn+Tt+"]*",sO=new RegExp("^["+nf+"]{0,1}(?:["+Tn+"]*["+Tt+"]){1,2}$","i"),lO=aO+"(?:"+I5()+")?",uO=new RegExp("^"+oO+"$|^"+lO+"$","i");function dO(e){return e.length>=sm&&uO.test(e)}function cO(e){return sO.test(e)}var sv=new RegExp("(?:"+I5()+")$","i");function fO(e){var t=e.search(sv);if(t<0)return{};for(var n=e.slice(0,t),r=e.match(sv),i=1;i<r.length;){if(r[i])return{number:n,ext:r[i]};i++}}function hO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=pO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pO(e,t){if(e){if(typeof e=="string")return lv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lv(e,t)}}function lv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var gO={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","０":"0","１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9"};function T5(e){return gO[e]}function Jd(e){for(var t="",n=hO(e.split("")),r;!(r=n()).done;){var i=r.value,o=T5(i);o&&(t+=o)}return t}function mO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=yO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yO(e,t){if(e){if(typeof e=="string")return uv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return uv(e,t)}}function uv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u1(e){for(var t="",n=mO(e.split("")),r;!(r=n()).done;){var i=r.value;t+=A5(i,t)||""}return t}function A5(e,t){return e==="+"?t?void 0:"+":T5(e)}function vO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=xO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xO(e,t){if(e){if(typeof e=="string")return dv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return dv(e,t)}}function dv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $O(e,t){for(var n=e.slice(),r=vO(t),i;!(i=r()).done;){var o=i.value;e.indexOf(o)<0&&n.push(o)}return n.sort(function(a,l){return a-l})}function af(e,t){return R5(e,void 0,t)}function R5(e,t,n){var r=n.type(t),i=r&&r.possibleLengths()||n.possibleLengths();if(!i)return"IS_POSSIBLE";if(t==="FIXED_LINE_OR_MOBILE"){if(!n.type("FIXED_LINE"))return R5(e,"MOBILE",n);var o=n.type("MOBILE");o&&(i=$O(i,o.possibleLengths()))}else if(t&&!r)return"INVALID_LENGTH";var a=e.length,l=i[0];return l===a?"IS_POSSIBLE":l>a?"TOO_SHORT":i[i.length-1]<a?"TOO_LONG":i.indexOf(a,1)>=0?"IS_POSSIBLE":"INVALID_LENGTH"}function bO(e,t,n){if(t===void 0&&(t={}),n=new pt(n),t.v2){if(!e.countryCallingCode)throw new Error("Invalid phone number object passed");n.selectNumberingPlan(e.countryCallingCode)}else{if(!e.phone)return!1;if(e.country){if(!n.hasCountry(e.country))throw new Error("Unknown country: ".concat(e.country));n.country(e.country)}else{if(!e.countryCallingCode)throw new Error("Invalid phone number object passed");n.selectNumberingPlan(e.countryCallingCode)}}if(n.possibleLengths())return F5(e.phone||e.nationalNumber,n);if(e.countryCallingCode&&n.isNonGeographicCallingCode(e.countryCallingCode))return!0;throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')}function F5(e,t){switch(af(e,t)){case"IS_POSSIBLE":return!0;default:return!1}}function Or(e,t){return e=e||"",new RegExp("^(?:"+t+")$").test(e)}function wO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=SO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function SO(e,t){if(e){if(typeof e=="string")return cv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cv(e,t)}}function cv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var CO=["MOBILE","PREMIUM_RATE","TOLL_FREE","SHARED_COST","VOIP","PERSONAL_NUMBER","PAGER","UAN","VOICEMAIL"];function lm(e,t,n){if(t=t||{},!!e.country){n=new pt(n),n.selectNumberingPlan(e.country,e.countryCallingCode);var r=t.v2?e.nationalNumber:e.phone;if(Or(r,n.nationalNumberPattern())){if($h(r,"FIXED_LINE",n))return n.type("MOBILE")&&n.type("MOBILE").pattern()===""||!n.type("MOBILE")||$h(r,"MOBILE",n)?"FIXED_LINE_OR_MOBILE":"FIXED_LINE";for(var i=wO(CO),o;!(o=i()).done;){var a=o.value;if($h(r,a,n))return a}}}}function $h(e,t,n){return t=n.type(t),!t||!t.pattern()||t.possibleLengths()&&t.possibleLengths().indexOf(e.length)<0?!1:Or(e,t.pattern())}function PO(e,t,n){if(t=t||{},n=new pt(n),n.selectNumberingPlan(e.country,e.countryCallingCode),n.hasTypes())return lm(e,t,n.metadata)!==void 0;var r=t.v2?e.nationalNumber:e.phone;return Or(r,n.nationalNumberPattern())}function OO(e,t,n){var r=new pt(n),i=r.getCountryCodesForCallingCode(e);return i?i.filter(function(o){return _O(t,o,n)}):[]}function _O(e,t,n){var r=new pt(n);return r.selectNumberingPlan(t),r.numberingPlan.possibleLengths().indexOf(e.length)>=0}function D5(e){return e.replace(new RegExp("[".concat(Tn,"]+"),"g")," ").trim()}var M5=/(\$\d)/;function L5(e,t,n){var r=n.useInternationalFormat,i=n.withNationalPrefix;n.carrierCode,n.metadata;var o=e.replace(new RegExp(t.pattern()),r?t.internationalFormat():i&&t.nationalPrefixFormattingRule()?t.format().replace(M5,t.nationalPrefixFormattingRule()):t.format());return r?D5(o):o}var kO=/^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;function NO(e,t,n){var r=new pt(n);if(r.selectNumberingPlan(e,t),r.defaultIDDPrefix())return r.defaultIDDPrefix();if(kO.test(r.IDDPrefix()))return r.IDDPrefix()}function EO(e){var t=e.number,n=e.ext;if(!t)return"";if(t[0]!=="+")throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');return"tel:".concat(t).concat(n?";ext="+n:"")}function IO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=TO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function TO(e,t){if(e){if(typeof e=="string")return fv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fv(e,t)}}function fv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function pv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hv(Object(n),!0).forEach(function(r){AO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function AO(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var gv={formatExtension:function(t,n,r){return"".concat(t).concat(r.ext()).concat(n)}};function RO(e,t,n,r){if(n?n=pv(pv({},gv),n):n=gv,r=new pt(r),e.country&&e.country!=="001"){if(!r.hasCountry(e.country))throw new Error("Unknown country: ".concat(e.country));r.country(e.country)}else if(e.countryCallingCode)r.selectNumberingPlan(e.countryCallingCode);else return e.phone||"";var i=r.countryCallingCode(),o=n.v2?e.nationalNumber:e.phone,a;switch(t){case"NATIONAL":return o?(a=Xd(o,e.carrierCode,"NATIONAL",r,n),bh(a,e.ext,r,n.formatExtension)):"";case"INTERNATIONAL":return o?(a=Xd(o,null,"INTERNATIONAL",r,n),a="+".concat(i," ").concat(a),bh(a,e.ext,r,n.formatExtension)):"+".concat(i);case"E.164":return"+".concat(i).concat(o);case"RFC3966":return EO({number:"+".concat(i).concat(o),ext:e.ext});case"IDD":if(!n.fromCountry)return;var l=DO(o,e.carrierCode,i,n.fromCountry,r);return bh(l,e.ext,r,n.formatExtension);default:throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t,'"'))}}function Xd(e,t,n,r,i){var o=FO(r.formats(),e);return o?L5(e,o,{useInternationalFormat:n==="INTERNATIONAL",withNationalPrefix:!(o.nationalPrefixIsOptionalWhenFormattingInNationalFormat()&&i&&i.nationalPrefix===!1),carrierCode:t,metadata:r}):e}function FO(e,t){for(var n=IO(e),r;!(r=n()).done;){var i=r.value;if(i.leadingDigitsPatterns().length>0){var o=i.leadingDigitsPatterns()[i.leadingDigitsPatterns().length-1];if(t.search(o)!==0)continue}if(Or(t,i.pattern()))return i}}function bh(e,t,n,r){return t?r(e,t,n):e}function DO(e,t,n,r,i){var o=wi(r,i.metadata);if(o===n){var a=Xd(e,t,"NATIONAL",i);return n==="1"?n+" "+a:a}var l=NO(r,void 0,i.metadata);if(l)return"".concat(l," ").concat(n," ").concat(Xd(e,null,"INTERNATIONAL",i))}function mv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function yv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mv(Object(n),!0).forEach(function(r){MO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function MO(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function LO(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function jO(e,t,n){return t&&vv(e.prototype,t),n&&vv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var j5=function(){function e(t,n,r){if(LO(this,e),!t)throw new TypeError("`country` or `countryCallingCode` not passed");if(!n)throw new TypeError("`nationalNumber` not passed");if(!r)throw new TypeError("`metadata` not passed");var i=UO(t,r),o=i.country,a=i.countryCallingCode;this.country=o,this.countryCallingCode=a,this.nationalNumber=n,this.number="+"+this.countryCallingCode+this.nationalNumber,this.metadata=r}return jO(e,[{key:"setExt",value:function(n){this.ext=n}},{key:"getPossibleCountries",value:function(){return this.country?[this.country]:OO(this.countryCallingCode,this.nationalNumber,this.metadata)}},{key:"isPossible",value:function(){return bO(this,{v2:!0},this.metadata)}},{key:"isValid",value:function(){return PO(this,{v2:!0},this.metadata)}},{key:"isNonGeographic",value:function(){var n=new pt(this.metadata);return n.isNonGeographicCallingCode(this.countryCallingCode)}},{key:"isEqual",value:function(n){return this.number===n.number&&this.ext===n.ext}},{key:"getType",value:function(){return lm(this,{v2:!0},this.metadata)}},{key:"format",value:function(n,r){return RO(this,n,r?yv(yv({},r),{},{v2:!0}):{v2:!0},this.metadata)}},{key:"formatNational",value:function(n){return this.format("NATIONAL",n)}},{key:"formatInternational",value:function(n){return this.format("INTERNATIONAL",n)}},{key:"getURI",value:function(n){return this.format("RFC3966",n)}}]),e}(),zO=function(t){return/^[A-Z]{2}$/.test(t)};function UO(e,t){var n,r,i=new pt(t);return zO(e)?(n=e,i.selectNumberingPlan(n),r=i.countryCallingCode()):r=e,{country:n,countryCallingCode:r}}var BO=new RegExp("(["+Tt+"])");function z5(e,t,n,r){if(t){var i=new pt(r);i.selectNumberingPlan(t,n);var o=new RegExp(i.IDDPrefix());if(e.search(o)===0){e=e.slice(e.match(o)[0].length);var a=e.match(BO);if(!(a&&a[1]!=null&&a[1].length>0&&a[1]==="0"))return e}}}function d1(e,t){if(e&&t.numberingPlan.nationalPrefixForParsing()){var n=new RegExp("^(?:"+t.numberingPlan.nationalPrefixForParsing()+")"),r=n.exec(e);if(r){var i,o,a=r.length-1,l=a>0&&r[a];if(t.nationalPrefixTransformRule()&&l)i=e.replace(n,t.nationalPrefixTransformRule()),a>1&&(o=r[1]);else{var u=r[0];i=e.slice(u.length),l&&(o=r[1])}var d;if(l){var c=e.indexOf(r[1]),f=e.slice(0,c);f===t.numberingPlan.nationalPrefix()&&(d=t.numberingPlan.nationalPrefix())}else d=r[0];return{nationalNumber:i,nationalPrefix:d,carrierCode:o}}}return{nationalNumber:e}}function c1(e,t){var n=d1(e,t),r=n.carrierCode,i=n.nationalNumber;if(i!==e){if(!HO(e,i,t))return{nationalNumber:e};if(t.possibleLengths()&&!YO(i,t))return{nationalNumber:e}}return{nationalNumber:i,carrierCode:r}}function HO(e,t,n){return!(Or(e,n.nationalNumberPattern())&&!Or(t,n.nationalNumberPattern()))}function YO(e,t){switch(af(e,t)){case"TOO_SHORT":case"INVALID_LENGTH":return!1;default:return!0}}function U5(e,t,n,r){var i=t?wi(t,r):n;if(e.indexOf(i)===0){r=new pt(r),r.selectNumberingPlan(t,n);var o=e.slice(i.length),a=c1(o,r),l=a.nationalNumber,u=c1(e,r),d=u.nationalNumber;if(!Or(d,r.nationalNumberPattern())&&Or(l,r.nationalNumberPattern())||af(d,r)==="TOO_LONG")return{countryCallingCode:i,number:o}}return{number:e}}function B5(e,t,n,r){if(!e)return{};var i;if(e[0]!=="+"){var o=z5(e,t,n,r);if(o&&o!==e)i=!0,e="+"+o;else{if(t||n){var a=U5(e,t,n,r),l=a.countryCallingCode,u=a.number;if(l)return{countryCallingCodeSource:"FROM_NUMBER_WITHOUT_PLUS_SIGN",countryCallingCode:l,number:u}}return{number:e}}}if(e[1]==="0")return{};r=new pt(r);for(var d=2;d-1<=HP&&d<=e.length;){var c=e.slice(1,d);if(r.hasCallingCode(c))return r.selectNumberingPlan(c),{countryCallingCodeSource:i?"FROM_NUMBER_WITH_IDD":"FROM_NUMBER_WITH_PLUS_SIGN",countryCallingCode:c,number:e.slice(d)};d++}return{}}function WO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=VO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function VO(e,t){if(e){if(typeof e=="string")return xv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xv(e,t)}}function xv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function qO(e,t,n){n=new pt(n);for(var r=WO(e),i;!(i=r()).done;){var o=i.value;if(n.country(o),n.leadingDigits()){if(t&&t.search(n.leadingDigits())===0)return o}else if(lm({phone:t,country:o},void 0,n.metadata))return o}}var GO=!1;function H5(e,t,n){if(GO&&n.isNonGeographicCallingCode(e))return"001";var r=n.getCountryCodesForCallingCode(e);if(r)return r.length===1?r[0]:qO(r,t,n.metadata)}var Y5="+",QO="[\\-\\.\\(\\)]?",$v="(["+Tt+"]|"+QO+")",KO="^\\"+Y5+$v+"*["+Tt+"]"+$v+"*$",ZO=new RegExp(KO,"g"),f1=Tt,JO="["+f1+"]+((\\-)*["+f1+"])*",XO="a-zA-Z",e_="["+XO+"]+((\\-)*["+f1+"])*",t_="^("+JO+"\\.)*"+e_+"\\.?$",n_=new RegExp(t_,"g"),bv="tel:",h1=";phone-context=",r_=";isub=";function i_(e){var t=e.indexOf(h1);if(t<0)return null;var n=t+h1.length;if(n>=e.length)return"";var r=e.indexOf(";",n);return r>=0?e.substring(n,r):e.substring(n)}function o_(e){return e===null?!0:e.length===0?!1:ZO.test(e)||n_.test(e)}function a_(e,t){var n=t.extractFormattedPhoneNumber,r=i_(e);if(!o_(r))throw new cr("NOT_A_NUMBER");var i;if(r===null)i=n(e)||"";else{i="",r.charAt(0)===Y5&&(i+=r);var o=e.indexOf(bv),a;o>=0?a=o+bv.length:a=0;var l=e.indexOf(h1);i+=e.substring(a,l)}var u=i.indexOf(r_);if(u>0&&(i=i.substring(0,u)),i!=="")return i}var s_=250,l_=new RegExp("["+nf+Tt+"]"),u_=new RegExp("[^"+Tt+"#]+$");function d_(e,t,n){if(t=t||{},n=new pt(n),t.defaultCountry&&!n.hasCountry(t.defaultCountry))throw t.v2?new cr("INVALID_COUNTRY"):new Error("Unknown country: ".concat(t.defaultCountry));var r=f_(e,t.v2,t.extract),i=r.number,o=r.ext,a=r.error;if(!i){if(t.v2)throw a==="TOO_SHORT"?new cr("TOO_SHORT"):new cr("NOT_A_NUMBER");return{}}var l=p_(i,t.defaultCountry,t.defaultCallingCode,n),u=l.country,d=l.nationalNumber,c=l.countryCallingCode,f=l.countryCallingCodeSource,g=l.carrierCode;if(!n.hasSelectedNumberingPlan()){if(t.v2)throw new cr("INVALID_COUNTRY");return{}}if(!d||d.length<sm){if(t.v2)throw new cr("TOO_SHORT");return{}}if(d.length>BP){if(t.v2)throw new cr("TOO_LONG");return{}}if(t.v2){var $=new j5(c,d,n.metadata);return u&&($.country=u),g&&($.carrierCode=g),o&&($.ext=o),$.__countryCallingCodeSource=f,$}var v=(t.extended?n.hasSelectedNumberingPlan():u)?Or(d,n.nationalNumberPattern()):!1;return t.extended?{country:u,countryCallingCode:c,carrierCode:g,valid:v,possible:v?!0:!!(t.extended===!0&&n.possibleLengths()&&F5(d,n)),phone:d,ext:o}:v?h_(u,d,o):{}}function c_(e,t,n){if(e){if(e.length>s_){if(n)throw new cr("TOO_LONG");return}if(t===!1)return e;var r=e.search(l_);if(!(r<0))return e.slice(r).replace(u_,"")}}function f_(e,t,n){var r=a_(e,{extractFormattedPhoneNumber:function(a){return c_(a,n,t)}});if(!r)return{};if(!dO(r))return cO(r)?{error:"TOO_SHORT"}:{};var i=fO(r);return i.ext?i:{number:r}}function h_(e,t,n){var r={country:e,phone:t};return n&&(r.ext=n),r}function p_(e,t,n,r){var i=B5(u1(e),t,n,r.metadata),o=i.countryCallingCodeSource,a=i.countryCallingCode,l=i.number,u;if(a)r.selectNumberingPlan(a);else if(l&&(t||n))r.selectNumberingPlan(t,n),t&&(u=t),a=n||wi(t,r.metadata);else return{};if(!l)return{countryCallingCodeSource:o,countryCallingCode:a};var d=c1(u1(l),r),c=d.nationalNumber,f=d.carrierCode,g=H5(a,c,r);return g&&(u=g,g==="001"||r.country(u)),{country:u,countryCallingCode:a,countryCallingCodeSource:o,nationalNumber:c,carrierCode:f}}function wv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Sv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wv(Object(n),!0).forEach(function(r){g_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function g_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m_(e,t,n){return d_(e,Sv(Sv({},t),{},{v2:!0}),n)}function p1(e){return p1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p1(e)}function Cv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function y_(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cv(Object(n),!0).forEach(function(r){v_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function v_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x_(e,t){return S_(e)||w_(e,t)||b_(e,t)||$_()}function $_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b_(e,t){if(e){if(typeof e=="string")return Pv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pv(e,t)}}function Pv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w_(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function S_(e){if(Array.isArray(e))return e}function C_(e){var t=Array.prototype.slice.call(e),n=x_(t,4),r=n[0],i=n[1],o=n[2],a=n[3],l,u,d;if(typeof r=="string")l=r;else throw new TypeError("A text for parsing must be a string.");if(!i||typeof i=="string")a?(u=o,d=a):(u=void 0,d=o),i&&(u=y_({defaultCountry:i},u));else if(P_(i))o?(u=i,d=o):d=i;else throw new Error("Invalid second argument: ".concat(i));return{text:l,options:u,metadata:d}}var P_=function(t){return p1(t)==="object"};function Ov(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _v(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ov(Object(n),!0).forEach(function(r){O_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ov(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function O_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function __(e,t,n){t&&t.defaultCountry&&!N5(t.defaultCountry,n)&&(t=_v(_v({},t),{},{defaultCountry:void 0}));try{return m_(e,t,n)}catch(r){if(!(r instanceof cr))throw r}}function k_(){var e=C_(arguments),t=e.text,n=e.options,r=e.metadata;return __(t,n,r)}function N_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function kv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E_(e,t,n){return t&&kv(e.prototype,t),n&&kv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var I_=function(){function e(t){var n=t.onCountryChange,r=t.onCallingCodeChange;N_(this,e),this.onCountryChange=n,this.onCallingCodeChange=r}return E_(e,[{key:"reset",value:function(n){var r=n.country,i=n.callingCode;this.international=!1,this.IDDPrefix=void 0,this.missingPlus=void 0,this.callingCode=void 0,this.digits="",this.resetNationalSignificantNumber(),this.initCountryAndCallingCode(r,i)}},{key:"resetNationalSignificantNumber",value:function(){this.nationalSignificantNumber=this.getNationalDigits(),this.nationalSignificantNumberMatchesInput=!0,this.nationalPrefix=void 0,this.carrierCode=void 0,this.complexPrefixBeforeNationalSignificantNumber=void 0}},{key:"update",value:function(n){for(var r=0,i=Object.keys(n);r<i.length;r++){var o=i[r];this[o]=n[o]}}},{key:"initCountryAndCallingCode",value:function(n,r){this.setCountry(n),this.setCallingCode(r)}},{key:"setCountry",value:function(n){this.country=n,this.onCountryChange(n)}},{key:"setCallingCode",value:function(n){this.callingCode=n,this.onCallingCodeChange(n,this.country)}},{key:"startInternationalNumber",value:function(n,r){this.international=!0,this.initCountryAndCallingCode(n,r)}},{key:"appendDigits",value:function(n){this.digits+=n}},{key:"appendNationalSignificantNumberDigits",value:function(n){this.nationalSignificantNumber+=n}},{key:"getNationalDigits",value:function(){return this.international?this.digits.slice((this.IDDPrefix?this.IDDPrefix.length:0)+(this.callingCode?this.callingCode.length:0)):this.digits}},{key:"getDigitsWithoutInternationalPrefix",value:function(){return this.international&&this.IDDPrefix?this.digits.slice(this.IDDPrefix.length):this.digits}}]),e}();function T_(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=A_(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A_(e,t){if(e){if(typeof e=="string")return Nv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nv(e,t)}}function Nv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Sn="x",wh=new RegExp(Sn);function rd(e,t){if(t<1)return"";for(var n="";t>1;)t&1&&(n+=e),t>>=1,e+=e;return n+e}function Ev(e,t){return e[t]===")"&&t++,R_(e.slice(0,t))}function R_(e){for(var t=[],n=0;n<e.length;)e[n]==="("?t.push(n):e[n]===")"&&t.pop(),n++;var r=0,i="";t.push(e.length);for(var o=0,a=t;o<a.length;o++){var l=a[o];i+=e.slice(r,l),r=l+1}return i}function F_(e,t,n){for(var r=T_(n.split("")),i;!(i=r()).done;){var o=i.value;if(e.slice(t+1).search(wh)<0)return;t=e.search(wh),e=e.replace(wh,o)}return[e,t]}function D_(e,t,n){var r=n.metadata,i=n.shouldTryNationalPrefixFormattingRule,o=n.getSeparatorAfterNationalPrefix,a=new RegExp("^(?:".concat(t.pattern(),")$"));if(a.test(e.nationalSignificantNumber))return L_(e,t,{metadata:r,shouldTryNationalPrefixFormattingRule:i,getSeparatorAfterNationalPrefix:o})}function M_(e,t){return af(e,t)==="IS_POSSIBLE"}function L_(e,t,n){var r=n.metadata,i=n.shouldTryNationalPrefixFormattingRule,o=n.getSeparatorAfterNationalPrefix;if(e.nationalSignificantNumber,e.international,e.nationalPrefix,e.carrierCode,i(t)){var a=Iv(e,t,{useNationalPrefixFormattingRule:!0,getSeparatorAfterNationalPrefix:o,metadata:r});if(a)return a}return Iv(e,t,{useNationalPrefixFormattingRule:!1,getSeparatorAfterNationalPrefix:o,metadata:r})}function Iv(e,t,n){var r=n.metadata,i=n.useNationalPrefixFormattingRule,o=n.getSeparatorAfterNationalPrefix,a=L5(e.nationalSignificantNumber,t,{carrierCode:e.carrierCode,useInternationalFormat:e.international,withNationalPrefix:i,metadata:r});if(i||(e.nationalPrefix?a=e.nationalPrefix+o(t)+a:e.complexPrefixBeforeNationalSignificantNumber&&(a=e.complexPrefixBeforeNationalSignificantNumber+" "+a)),j_(a,e))return a}function j_(e,t){return Jd(e)===t.getNationalDigits()}function z_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Tv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U_(e,t,n){return t&&Tv(e.prototype,t),n&&Tv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var B_=function(){function e(){z_(this,e)}return U_(e,[{key:"parse",value:function(n){if(this.context=[{or:!0,instructions:[]}],this.parsePattern(n),this.context.length!==1)throw new Error("Non-finalized contexts left when pattern parse ended");var r=this.context[0],i=r.branches,o=r.instructions;if(i)return{op:"|",args:i.concat([Sh(o)])};if(o.length===0)throw new Error("Pattern is required");return o.length===1?o[0]:o}},{key:"startContext",value:function(n){this.context.push(n)}},{key:"endContext",value:function(){this.context.pop()}},{key:"getContext",value:function(){return this.context[this.context.length-1]}},{key:"parsePattern",value:function(n){if(!n)throw new Error("Pattern is required");var r=n.match(W_);if(!r){if(Y_.test(n))throw new Error("Illegal characters found in a pattern: ".concat(n));this.getContext().instructions=this.getContext().instructions.concat(n.split(""));return}var i=r[1],o=n.slice(0,r.index),a=n.slice(r.index+i.length);switch(i){case"(?:":o&&this.parsePattern(o),this.startContext({or:!0,instructions:[],branches:[]});break;case")":if(!this.getContext().or)throw new Error('")" operator must be preceded by "(?:" operator');if(o&&this.parsePattern(o),this.getContext().instructions.length===0)throw new Error('No instructions found after "|" operator in an "or" group');var l=this.getContext(),u=l.branches;u.push(Sh(this.getContext().instructions)),this.endContext(),this.getContext().instructions.push({op:"|",args:u});break;case"|":if(!this.getContext().or)throw new Error('"|" operator can only be used inside "or" groups');if(o&&this.parsePattern(o),!this.getContext().branches)if(this.context.length===1)this.getContext().branches=[];else throw new Error('"branches" not found in an "or" group context');this.getContext().branches.push(Sh(this.getContext().instructions)),this.getContext().instructions=[];break;case"[":o&&this.parsePattern(o),this.startContext({oneOfSet:!0});break;case"]":if(!this.getContext().oneOfSet)throw new Error('"]" operator must be preceded by "[" operator');this.endContext(),this.getContext().instructions.push({op:"[]",args:H_(o)});break;default:throw new Error("Unknown operator: ".concat(i))}a&&this.parsePattern(a)}}]),e}();function H_(e){for(var t=[],n=0;n<e.length;){if(e[n]==="-"){if(n===0||n===e.length-1)throw new Error("Couldn't parse a one-of set pattern: ".concat(e));for(var r=e[n-1].charCodeAt(0)+1,i=e[n+1].charCodeAt(0)-1,o=r;o<=i;)t.push(String.fromCharCode(o)),o++}else t.push(e[n]);n++}return t}var Y_=/[\(\)\[\]\?\:\|]/,W_=new RegExp("(\\||\\(\\?\\:|\\)|\\[|\\])");function Sh(e){return e.length===1?e[0]:e}function Av(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=V_(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V_(e,t){if(e){if(typeof e=="string")return Rv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rv(e,t)}}function Rv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function q_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G_(e,t,n){return t&&Fv(e.prototype,t),n&&Fv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var Q_=function(){function e(t){q_(this,e),this.matchTree=new B_().parse(t)}return G_(e,[{key:"match",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.allowOverflow;if(!n)throw new Error("String is required");var o=g1(n.split(""),this.matchTree,!0);if(o&&o.match&&delete o.matchedChars,!(o&&o.overflow&&!i))return o}}]),e}();function g1(e,t,n){if(typeof t=="string"){var r=e.join("");return t.indexOf(r)===0?e.length===t.length?{match:!0,matchedChars:e}:{partialMatch:!0}:r.indexOf(t)===0?n&&e.length>t.length?{overflow:!0}:{match:!0,matchedChars:e.slice(0,t.length)}:void 0}if(Array.isArray(t)){for(var i=e.slice(),o=0;o<t.length;){var a=t[o],l=g1(i,a,n&&o===t.length-1);if(l){if(l.overflow)return l;if(l.match){if(i=i.slice(l.matchedChars.length),i.length===0)return o===t.length-1?{match:!0,matchedChars:e}:{partialMatch:!0}}else{if(l.partialMatch)return{partialMatch:!0};throw new Error(`Unsupported match result:
`.concat(JSON.stringify(l,null,2)))}}else return;o++}return n?{overflow:!0}:{match:!0,matchedChars:e.slice(0,e.length-i.length)}}switch(t.op){case"|":for(var u,d=Av(t.args),c;!(c=d()).done;){var f=c.value,g=g1(e,f,n);if(g){if(g.overflow)return g;if(g.match)return{match:!0,matchedChars:g.matchedChars};if(g.partialMatch)u=!0;else throw new Error(`Unsupported match result:
`.concat(JSON.stringify(g,null,2)))}}return u?{partialMatch:!0}:void 0;case"[]":for(var $=Av(t.args),v;!(v=$()).done;){var b=v.value;if(e[0]===b)return e.length===1?{match:!0,matchedChars:e}:n?{overflow:!0}:{match:!0,matchedChars:[b]}}return;default:throw new Error("Unsupported instruction tree: ".concat(t))}}function Dv(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=K_(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K_(e,t){if(e){if(typeof e=="string")return Mv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mv(e,t)}}function Mv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Z_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J_(e,t,n){return t&&Lv(e.prototype,t),n&&Lv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var m1="9",X_=15,ek=rd(m1,X_),tk=/[- ]/,nk=function(){return/\[([^\[\]])*\]/g},rk=function(){return/\d(?=[^,}][^,}])/g},ik=new RegExp("["+Tn+"]*\\$1["+Tn+"]*(\\$\\d["+Tn+"]*)*$"),jv=3,ok=function(){function e(t){t.state;var n=t.metadata;Z_(this,e),this.metadata=n,this.resetFormat()}return J_(e,[{key:"resetFormat",value:function(){this.chosenFormat=void 0,this.template=void 0,this.nationalNumberTemplate=void 0,this.populatedNationalNumberTemplate=void 0,this.populatedNationalNumberTemplatePosition=-1}},{key:"reset",value:function(n,r){this.resetFormat(),n?(this.isNANP=n.callingCode()==="1",this.matchingFormats=n.formats(),r.nationalSignificantNumber&&this.narrowDownMatchingFormats(r)):(this.isNANP=void 0,this.matchingFormats=[])}},{key:"format",value:function(n,r){var i=this;if(M_(r.nationalSignificantNumber,this.metadata))for(var o=Dv(this.matchingFormats),a;!(a=o()).done;){var l=a.value,u=D_(r,l,{metadata:this.metadata,shouldTryNationalPrefixFormattingRule:function(c){return i.shouldTryNationalPrefixFormattingRule(c,{international:r.international,nationalPrefix:r.nationalPrefix})},getSeparatorAfterNationalPrefix:function(c){return i.getSeparatorAfterNationalPrefix(c)}});if(u)return this.resetFormat(),this.chosenFormat=l,this.setNationalNumberTemplate(u.replace(/\d/g,Sn),r),this.populatedNationalNumberTemplate=u,this.populatedNationalNumberTemplatePosition=this.template.lastIndexOf(Sn),u}return this.formatNationalNumberWithNextDigits(n,r)}},{key:"formatNationalNumberWithNextDigits",value:function(n,r){var i=this.chosenFormat,o=this.chooseFormat(r);if(o)return o===i?this.formatNextNationalNumberDigits(n):this.formatNextNationalNumberDigits(r.getNationalDigits())}},{key:"narrowDownMatchingFormats",value:function(n){var r=this,i=n.nationalSignificantNumber,o=n.nationalPrefix,a=n.international,l=i,u=l.length-jv;u<0&&(u=0),this.matchingFormats=this.matchingFormats.filter(function(d){return r.formatSuits(d,a,o)&&r.formatMatches(d,l,u)}),this.chosenFormat&&this.matchingFormats.indexOf(this.chosenFormat)===-1&&this.resetFormat()}},{key:"formatSuits",value:function(n,r,i){return!(i&&!n.usesNationalPrefix()&&!n.nationalPrefixIsOptionalWhenFormattingInNationalFormat()||!r&&!i&&n.nationalPrefixIsMandatoryWhenFormattingInNationalFormat())}},{key:"formatMatches",value:function(n,r,i){var o=n.leadingDigitsPatterns().length;if(o===0)return!0;i=Math.min(i,o-1);var a=n.leadingDigitsPatterns()[i];if(r.length<jv)try{return new Q_(a).match(r,{allowOverflow:!0})!==void 0}catch(l){return console.error(l),!0}return new RegExp("^(".concat(a,")")).test(r)}},{key:"getFormatFormat",value:function(n,r){return r?n.internationalFormat():n.format()}},{key:"chooseFormat",value:function(n){for(var r=this,i=function(){var d=a.value;return r.chosenFormat===d?"break":ik.test(r.getFormatFormat(d,n.international))?r.createTemplateForFormat(d,n)?(r.chosenFormat=d,"break"):(r.matchingFormats=r.matchingFormats.filter(function(c){return c!==d}),"continue"):"continue"},o=Dv(this.matchingFormats.slice()),a;!(a=o()).done;){var l=i();if(l==="break")break}return this.chosenFormat||this.resetFormat(),this.chosenFormat}},{key:"createTemplateForFormat",value:function(n,r){if(!(n.pattern().indexOf("|")>=0)){var i=this.getTemplateForFormat(n,r);if(i)return this.setNationalNumberTemplate(i,r),!0}}},{key:"getSeparatorAfterNationalPrefix",value:function(n){return this.isNANP||n&&n.nationalPrefixFormattingRule()&&tk.test(n.nationalPrefixFormattingRule())?" ":""}},{key:"getInternationalPrefixBeforeCountryCallingCode",value:function(n,r){var i=n.IDDPrefix,o=n.missingPlus;return i?r&&r.spacing===!1?i:i+" ":o?"":"+"}},{key:"getTemplate",value:function(n){if(this.template){for(var r=-1,i=0,o=n.international?this.getInternationalPrefixBeforeCountryCallingCode(n,{spacing:!1}):"";i<o.length+n.getDigitsWithoutInternationalPrefix().length;)r=this.template.indexOf(Sn,r+1),i++;return Ev(this.template,r+1)}}},{key:"setNationalNumberTemplate",value:function(n,r){this.nationalNumberTemplate=n,this.populatedNationalNumberTemplate=n,this.populatedNationalNumberTemplatePosition=-1,r.international?this.template=this.getInternationalPrefixBeforeCountryCallingCode(r).replace(/[\d\+]/g,Sn)+rd(Sn,r.callingCode.length)+" "+n:this.template=n}},{key:"getTemplateForFormat",value:function(n,r){var i=r.nationalSignificantNumber,o=r.international,a=r.nationalPrefix,l=r.complexPrefixBeforeNationalSignificantNumber,u=n.pattern();u=u.replace(nk(),"\\d").replace(rk(),"\\d");var d=ek.match(u)[0];if(!(i.length>d.length)){var c=new RegExp("^"+u+"$"),f=i.replace(/\d/g,m1);c.test(f)&&(d=f);var g=this.getFormatFormat(n,o),$;if(this.shouldTryNationalPrefixFormattingRule(n,{international:o,nationalPrefix:a})){var v=g.replace(M5,n.nationalPrefixFormattingRule());if(Jd(n.nationalPrefixFormattingRule())===(a||"")+Jd("$1")&&(g=v,$=!0,a))for(var b=a.length;b>0;)g=g.replace(/\d/,Sn),b--}var w=d.replace(new RegExp(u),g).replace(new RegExp(m1,"g"),Sn);return $||(l?w=rd(Sn,l.length)+" "+w:a&&(w=rd(Sn,a.length)+this.getSeparatorAfterNationalPrefix(n)+w)),o&&(w=D5(w)),w}}},{key:"formatNextNationalNumberDigits",value:function(n){var r=F_(this.populatedNationalNumberTemplate,this.populatedNationalNumberTemplatePosition,n);if(!r){this.resetFormat();return}return this.populatedNationalNumberTemplate=r[0],this.populatedNationalNumberTemplatePosition=r[1],Ev(this.populatedNationalNumberTemplate,this.populatedNationalNumberTemplatePosition+1)}},{key:"shouldTryNationalPrefixFormattingRule",value:function(n,r){var i=r.international,o=r.nationalPrefix;if(n.nationalPrefixFormattingRule()){var a=n.usesNationalPrefix();if(a&&o||!a&&!i)return!0}}}]),e}();function W5(e,t){return uk(e)||lk(e,t)||sk(e,t)||ak()}function ak(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sk(e,t){if(e){if(typeof e=="string")return zv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zv(e,t)}}function zv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function lk(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function uk(e){if(Array.isArray(e))return e}function dk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Uv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ck(e,t,n){return t&&Uv(e.prototype,t),n&&Uv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var fk="["+Tn+Tt+"]+",hk=new RegExp("^"+fk+"$","i"),pk="(?:["+nf+"]["+Tn+Tt+"]*|["+Tn+Tt+"]+)",gk=new RegExp("[^"+Tn+Tt+"]+.*$"),mk=/[^\d\[\]]/,yk=function(){function e(t){var n=t.defaultCountry,r=t.defaultCallingCode,i=t.metadata,o=t.onNationalSignificantNumberChange;dk(this,e),this.defaultCountry=n,this.defaultCallingCode=r,this.metadata=i,this.onNationalSignificantNumberChange=o}return ck(e,[{key:"input",value:function(n,r){var i=$k(n),o=W5(i,2),a=o[0],l=o[1],u=Jd(a),d;return l&&(r.digits||(r.startInternationalNumber(),u||(d=!0))),u&&this.inputDigits(u,r),{digits:u,justLeadingPlus:d}}},{key:"inputDigits",value:function(n,r){var i=r.digits,o=i.length<3&&i.length+n.length>=3;if(r.appendDigits(n),o&&this.extractIddPrefix(r),this.isWaitingForCountryCallingCode(r)){if(!this.extractCountryCallingCode(r))return}else r.appendNationalSignificantNumberDigits(n);r.international||this.hasExtractedNationalSignificantNumber||this.extractNationalSignificantNumber(r.getNationalDigits(),function(a){return r.update(a)})}},{key:"isWaitingForCountryCallingCode",value:function(n){var r=n.international,i=n.callingCode;return r&&!i}},{key:"extractCountryCallingCode",value:function(n){var r=B5("+"+n.getDigitsWithoutInternationalPrefix(),this.defaultCountry,this.defaultCallingCode,this.metadata.metadata),i=r.countryCallingCode,o=r.number;if(i)return n.setCallingCode(i),n.update({nationalSignificantNumber:o}),!0}},{key:"reset",value:function(n){if(n){this.hasSelectedNumberingPlan=!0;var r=n._nationalPrefixForParsing();this.couldPossiblyExtractAnotherNationalSignificantNumber=r&&mk.test(r)}else this.hasSelectedNumberingPlan=void 0,this.couldPossiblyExtractAnotherNationalSignificantNumber=void 0}},{key:"extractNationalSignificantNumber",value:function(n,r){if(this.hasSelectedNumberingPlan){var i=d1(n,this.metadata),o=i.nationalPrefix,a=i.nationalNumber,l=i.carrierCode;if(a!==n)return this.onExtractedNationalNumber(o,l,a,n,r),!0}}},{key:"extractAnotherNationalSignificantNumber",value:function(n,r,i){if(!this.hasExtractedNationalSignificantNumber)return this.extractNationalSignificantNumber(n,i);if(this.couldPossiblyExtractAnotherNationalSignificantNumber){var o=d1(n,this.metadata),a=o.nationalPrefix,l=o.nationalNumber,u=o.carrierCode;if(l!==r)return this.onExtractedNationalNumber(a,u,l,n,i),!0}}},{key:"onExtractedNationalNumber",value:function(n,r,i,o,a){var l,u,d=o.lastIndexOf(i);if(d>=0&&d===o.length-i.length){u=!0;var c=o.slice(0,d);c!==n&&(l=c)}a({nationalPrefix:n,carrierCode:r,nationalSignificantNumber:i,nationalSignificantNumberMatchesInput:u,complexPrefixBeforeNationalSignificantNumber:l}),this.hasExtractedNationalSignificantNumber=!0,this.onNationalSignificantNumberChange()}},{key:"reExtractNationalSignificantNumber",value:function(n){if(this.extractAnotherNationalSignificantNumber(n.getNationalDigits(),n.nationalSignificantNumber,function(r){return n.update(r)}))return!0;if(this.extractIddPrefix(n))return this.extractCallingCodeAndNationalSignificantNumber(n),!0;if(this.fixMissingPlus(n))return this.extractCallingCodeAndNationalSignificantNumber(n),!0}},{key:"extractIddPrefix",value:function(n){var r=n.international,i=n.IDDPrefix,o=n.digits;if(n.nationalSignificantNumber,!(r||i)){var a=z5(o,this.defaultCountry,this.defaultCallingCode,this.metadata.metadata);if(a!==void 0&&a!==o)return n.update({IDDPrefix:o.slice(0,o.length-a.length)}),this.startInternationalNumber(n,{country:void 0,callingCode:void 0}),!0}}},{key:"fixMissingPlus",value:function(n){if(!n.international){var r=U5(n.digits,this.defaultCountry,this.defaultCallingCode,this.metadata.metadata),i=r.countryCallingCode;if(r.number,i)return n.update({missingPlus:!0}),this.startInternationalNumber(n,{country:n.country,callingCode:i}),!0}}},{key:"startInternationalNumber",value:function(n,r){var i=r.country,o=r.callingCode;n.startInternationalNumber(i,o),n.nationalSignificantNumber&&(n.resetNationalSignificantNumber(),this.onNationalSignificantNumberChange(),this.hasExtractedNationalSignificantNumber=void 0)}},{key:"extractCallingCodeAndNationalSignificantNumber",value:function(n){this.extractCountryCallingCode(n)&&this.extractNationalSignificantNumber(n.getNationalDigits(),function(r){return n.update(r)})}}]),e}();function vk(e){var t=e.search(pk);if(!(t<0)){e=e.slice(t);var n;return e[0]==="+"&&(n=!0,e=e.slice(1)),e=e.replace(gk,""),n&&(e="+"+e),e}}function xk(e){var t=vk(e)||"";return t[0]==="+"?[t.slice(1),!0]:[t]}function $k(e){var t=xk(e),n=W5(t,2),r=n[0],i=n[1];return hk.test(r)||(r=""),[r,i]}function y1(e){return y1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y1(e)}function bk(e,t){return Pk(e)||Ck(e,t)||Sk(e,t)||wk()}function wk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sk(e,t){if(e){if(typeof e=="string")return Bv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bv(e,t)}}function Bv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ck(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function Pk(e){if(Array.isArray(e))return e}function Ok(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Hv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _k(e,t,n){return t&&Hv(e.prototype,t),n&&Hv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var za=function(){function e(t,n){Ok(this,e),this.metadata=new pt(n);var r=this.getCountryAndCallingCode(t),i=bk(r,2),o=i[0],a=i[1];this.defaultCountry=o,this.defaultCallingCode=a,this.reset()}return _k(e,[{key:"getCountryAndCallingCode",value:function(n){var r,i;return n&&(y1(n)==="object"?(r=n.defaultCountry,i=n.defaultCallingCode):r=n),r&&!this.metadata.hasCountry(r)&&(r=void 0),[r,i]}},{key:"input",value:function(n){var r=this.parser.input(n,this.state),i=r.digits,o=r.justLeadingPlus;if(o)this.formattedOutput="+";else if(i){this.determineTheCountryIfNeeded(),this.state.nationalSignificantNumber&&this.formatter.narrowDownMatchingFormats(this.state);var a;if(this.metadata.hasSelectedNumberingPlan()&&(a=this.formatter.format(i,this.state)),a===void 0&&this.parser.reExtractNationalSignificantNumber(this.state)){this.determineTheCountryIfNeeded();var l=this.state.getNationalDigits();l&&(a=this.formatter.format(l,this.state))}this.formattedOutput=a?this.getFullNumber(a):this.getNonFormattedNumber()}return this.formattedOutput}},{key:"reset",value:function(){var n=this;return this.state=new I_({onCountryChange:function(i){n.country=i},onCallingCodeChange:function(i,o){n.metadata.selectNumberingPlan(o,i),n.formatter.reset(n.metadata.numberingPlan,n.state),n.parser.reset(n.metadata.numberingPlan)}}),this.formatter=new ok({state:this.state,metadata:this.metadata}),this.parser=new yk({defaultCountry:this.defaultCountry,defaultCallingCode:this.defaultCallingCode,metadata:this.metadata,state:this.state,onNationalSignificantNumberChange:function(){n.determineTheCountryIfNeeded(),n.formatter.reset(n.metadata.numberingPlan,n.state)}}),this.state.reset({country:this.defaultCountry,callingCode:this.defaultCallingCode}),this.formattedOutput="",this}},{key:"isInternational",value:function(){return this.state.international}},{key:"getCallingCode",value:function(){if(this.isInternational())return this.state.callingCode}},{key:"getCountryCallingCode",value:function(){return this.getCallingCode()}},{key:"getCountry",value:function(){var n=this.state.digits;if(n)return this._getCountry()}},{key:"_getCountry",value:function(){var n=this.state.country;return n}},{key:"determineTheCountryIfNeeded",value:function(){(!this.state.country||this.isCountryCallingCodeAmbiguous())&&this.determineTheCountry()}},{key:"getFullNumber",value:function(n){var r=this;if(this.isInternational()){var i=function(l){return r.formatter.getInternationalPrefixBeforeCountryCallingCode(r.state,{spacing:!!l})+l},o=this.state.callingCode;return i(o?n?"".concat(o," ").concat(n):o:"".concat(this.state.getDigitsWithoutInternationalPrefix()))}return n}},{key:"getNonFormattedNationalNumberWithPrefix",value:function(){var n=this.state,r=n.nationalSignificantNumber,i=n.complexPrefixBeforeNationalSignificantNumber,o=n.nationalPrefix,a=r,l=i||o;return l&&(a=l+a),a}},{key:"getNonFormattedNumber",value:function(){var n=this.state.nationalSignificantNumberMatchesInput;return this.getFullNumber(n?this.getNonFormattedNationalNumberWithPrefix():this.state.getNationalDigits())}},{key:"getNonFormattedTemplate",value:function(){var n=this.getNonFormattedNumber();if(n)return n.replace(/[\+\d]/g,Sn)}},{key:"isCountryCallingCodeAmbiguous",value:function(){var n=this.state.callingCode,r=this.metadata.getCountryCodesForCallingCode(n);return r&&r.length>1}},{key:"determineTheCountry",value:function(){this.state.setCountry(H5(this.isInternational()?this.state.callingCode:this.defaultCallingCode,this.state.nationalSignificantNumber,this.metadata))}},{key:"getNumberValue",value:function(){var n=this.state,r=n.digits,i=n.callingCode,o=n.country,a=n.nationalSignificantNumber;if(r){if(this.isInternational())return i?"+"+i+a:"+"+r;if(o||i){var l=o?this.metadata.countryCallingCode():i;return"+"+l+a}}}},{key:"getNumber",value:function(){var n=this.state,r=n.nationalSignificantNumber,i=n.carrierCode,o=n.callingCode,a=this._getCountry();if(r&&!(!a&&!o)){var l=new j5(a||o,r,this.metadata.metadata);return i&&(l.carrierCode=i),l}}},{key:"isPossible",value:function(){var n=this.getNumber();return n?n.isPossible():!1}},{key:"isValid",value:function(){var n=this.getNumber();return n?n.isValid():!1}},{key:"getNationalNumber",value:function(){return this.state.nationalSignificantNumber}},{key:"getChars",value:function(){return(this.state.international?"+":"")+this.state.digits}},{key:"getTemplate",value:function(){return this.formatter.getTemplate(this.state)||this.getNonFormattedTemplate()||""}}]),e}();function Yv(e){return new pt(e).getCountries()}function kk(e,t,n){return n||(n=t,t=void 0),new za(t,n).input(e)}function V5(e){var t=e.country,n=e.international,r=e.withCountryCallingCode,i=e.metadata;return t&&n&&!r?"+".concat(wi(t,i)):""}function v1(e,t){return t&&(e=e.slice(t.length),e[0]===" "&&(e=e.slice(1))),e}var Nk=["country","international","withCountryCallingCode","metadata"];function x1(){return x1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x1.apply(this,arguments)}function Ek(e,t){if(e==null)return{};var n=Ik(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ik(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Tk(e){function t(n,r){var i=n.country,o=n.international,a=n.withCountryCallingCode,l=n.metadata,u=Ek(n,Nk),d=C.useCallback(function(c){var f=new za(i,l),g=V5({country:i,international:o,withCountryCallingCode:a,metadata:l}),$=f.input(g+c),v=f.getTemplate();return g&&($=v1($,g),v&&(v=v1(v,g))),{text:$,template:v}},[i,l]);return ne.createElement(RP,x1({},u,{ref:r,parse:A5,format:d}))}return t=ne.forwardRef(t),t.propTypes={value:K.string.isRequired,onChange:K.func.isRequired,country:K.string,international:K.bool,withCountryCallingCode:K.bool,metadata:K.object.isRequired},t.defaultProps={metadata:e},t}const Ak=Tk();var Rk=["value","onChange","country","international","withCountryCallingCode","metadata","inputComponent"];function $1(){return $1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$1.apply(this,arguments)}function Fk(e,t){if(e==null)return{};var n=Dk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Dk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Mk(e){function t(n,r){var i=n.value,o=n.onChange,a=n.country,l=n.international,u=n.withCountryCallingCode,d=n.metadata,c=n.inputComponent,f=Fk(n,Rk),g=V5({country:a,international:l,withCountryCallingCode:u,metadata:d}),$=C.useCallback(function(v){var b=u1(v.target.value);if(b===i){var w=Wv(g,b,a,d);w.indexOf(v.target.value)===0&&(b=b.slice(0,-1))}o(b)},[g,i,o,a,d]);return ne.createElement(c,$1({},f,{ref:r,value:Wv(g,i,a,d),onChange:$}))}return t=ne.forwardRef(t),t.propTypes={value:K.string.isRequired,onChange:K.func.isRequired,country:K.string,international:K.bool,withCountryCallingCode:K.bool,metadata:K.object.isRequired,inputComponent:K.elementType.isRequired},t.defaultProps={metadata:e,inputComponent:"input"},t}const Lk=Mk();function Wv(e,t,n,r){return v1(kk(e+t,n,r),e)}function jk(e){return Vv(e[0])+Vv(e[1])}function Vv(e){return String.fromCodePoint(127462-65+e.toUpperCase().charCodeAt(0))}var zk=["value","onChange","options"],Uk=["value","options","className","iconComponent","getIconAspectRatio","arrowComponent","unicodeFlags"];function Bk(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=Hk(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hk(e,t){if(e){if(typeof e=="string")return qv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qv(e,t)}}function qv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ec(){return ec=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ec.apply(this,arguments)}function q5(e,t){if(e==null)return{};var n=Yk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Yk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function G5(e){var t=e.value,n=e.onChange,r=e.options,i=q5(e,zk),o=C.useCallback(function(a){var l=a.target.value;n(l==="ZZ"?void 0:l)},[n]);return C.useMemo(function(){return Q5(r,t)},[r,t]),ne.createElement("select",ec({},i,{value:t||"ZZ",onChange:o}),r.map(function(a){var l=a.value,u=a.label,d=a.divider;return ne.createElement("option",{key:d?"|":l||"ZZ",value:d?"|":l||"ZZ",disabled:!!d,style:d?Wk:void 0},u)}))}G5.propTypes={value:K.string,onChange:K.func.isRequired,options:K.arrayOf(K.shape({value:K.string,label:K.string,divider:K.bool})).isRequired};var Wk={fontSize:"1px",backgroundColor:"currentColor",color:"inherit"};function um(e){var t=e.value,n=e.options,r=e.className,i=e.iconComponent;e.getIconAspectRatio;var o=e.arrowComponent,a=e.unicodeFlags,l=q5(e,Uk),u=C.useMemo(function(){return Q5(n,t)},[n,t]);return ne.createElement("div",{className:"PhoneInputCountry"},ne.createElement(G5,ec({},l,{value:t,options:n,className:Kd("PhoneInputCountrySelect",r)})),a&&t&&ne.createElement("div",{className:"PhoneInputCountryIconUnicode"},jk(t)),!(a&&t)&&ne.createElement(i,{"aria-hidden":!0,country:t,label:u&&u.label,aspectRatio:a?1:void 0}),ne.createElement(o,null))}um.propTypes={iconComponent:K.elementType,arrowComponent:K.elementType.isRequired,unicodeFlags:K.bool};um.defaultProps={arrowComponent:function(){return ne.createElement("div",{className:"PhoneInputCountrySelectArrow"})}};function Q5(e,t){for(var n=Bk(e),r;!(r=n()).done;){var i=r.value;if(!i.divider&&i.value===t)return i}}var Vk=["country","countryName","flags","flagUrl"];function b1(){return b1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b1.apply(this,arguments)}function qk(e,t){if(e==null)return{};var n=Gk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Gk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function dm(e){var t=e.country,n=e.countryName,r=e.flags,i=e.flagUrl,o=qk(e,Vk);return r&&r[t]?r[t]({title:n}):ne.createElement("img",b1({},o,{alt:n,role:n?void 0:"presentation",src:i.replace("{XX}",t).replace("{xx}",t.toLowerCase())}))}dm.propTypes={country:K.string.isRequired,countryName:K.string.isRequired,flags:K.objectOf(K.elementType),flagUrl:K.string.isRequired};var Qk=["aspectRatio"],Kk=["title"],Zk=["title"];function tc(){return tc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tc.apply(this,arguments)}function cm(e,t){if(e==null)return{};var n=Jk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Jk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function sf(e){var t=e.aspectRatio,n=cm(e,Qk);return t===1?ne.createElement(Z5,n):ne.createElement(K5,n)}sf.propTypes={title:K.string.isRequired,aspectRatio:K.number};function K5(e){var t=e.title,n=cm(e,Kk);return ne.createElement("svg",tc({},n,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 75 50"}),ne.createElement("title",null,t),ne.createElement("g",{className:"PhoneInputInternationalIconGlobe",stroke:"currentColor",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"},ne.createElement("path",{strokeLinecap:"round",d:"M47.2,36.1C48.1,36,49,36,50,36c7.4,0,14,1.7,18.5,4.3"}),ne.createElement("path",{d:"M68.6,9.6C64.2,12.3,57.5,14,50,14c-7.4,0-14-1.7-18.5-4.3"}),ne.createElement("line",{x1:"26",y1:"25",x2:"74",y2:"25"}),ne.createElement("line",{x1:"50",y1:"1",x2:"50",y2:"49"}),ne.createElement("path",{strokeLinecap:"round",d:"M46.3,48.7c1.2,0.2,2.5,0.3,3.7,0.3c13.3,0,24-10.7,24-24S63.3,1,50,1S26,11.7,26,25c0,2,0.3,3.9,0.7,5.8"}),ne.createElement("path",{strokeLinecap:"round",d:"M46.8,48.2c1,0.6,2.1,0.8,3.2,0.8c6.6,0,12-10.7,12-24S56.6,1,50,1S38,11.7,38,25c0,1.4,0.1,2.7,0.2,4c0,0.1,0,0.2,0,0.2"})),ne.createElement("path",{className:"PhoneInputInternationalIconPhone",stroke:"none",fill:"currentColor",d:"M12.4,17.9c2.9-2.9,5.4-4.8,0.3-11.2S4.1,5.2,1.3,8.1C-2,11.4,1.1,23.5,13.1,35.6s24.3,15.2,27.5,11.9c2.8-2.8,7.8-6.3,1.4-11.5s-8.3-2.6-11.2,0.3c-2,2-7.2-2.2-11.7-6.7S10.4,19.9,12.4,17.9z"}))}K5.propTypes={title:K.string.isRequired};function Z5(e){var t=e.title,n=cm(e,Zk);return ne.createElement("svg",tc({},n,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"}),ne.createElement("title",null,t),ne.createElement("g",{className:"PhoneInputInternationalIconGlobe",stroke:"currentColor",fill:"none",strokeWidth:"2",strokeLinecap:"round"},ne.createElement("path",{d:"M8.45,13A21.44,21.44,0,1,1,37.08,41.56"}),ne.createElement("path",{d:"M19.36,35.47a36.9,36.9,0,0,1-2.28-13.24C17.08,10.39,21.88.85,27.8.85s10.72,9.54,10.72,21.38c0,6.48-1.44,12.28-3.71,16.21"}),ne.createElement("path",{d:"M17.41,33.4A39,39,0,0,1,27.8,32.06c6.62,0,12.55,1.5,16.48,3.86"}),ne.createElement("path",{d:"M44.29,8.53c-3.93,2.37-9.86,3.88-16.49,3.88S15.25,10.9,11.31,8.54"}),ne.createElement("line",{x1:"27.8",y1:"0.85",x2:"27.8",y2:"34.61"}),ne.createElement("line",{x1:"15.2",y1:"22.23",x2:"49.15",y2:"22.23"})),ne.createElement("path",{className:"PhoneInputInternationalIconPhone",stroke:"transparent",fill:"currentColor",d:"M9.42,26.64c2.22-2.22,4.15-3.59.22-8.49S3.08,17,.93,19.17c-2.49,2.48-.13,11.74,9,20.89s18.41,11.5,20.89,9c2.15-2.15,5.91-4.77,1-8.71s-6.27-2-8.49.22c-1.55,1.55-5.48-1.69-8.86-5.08S7.87,28.19,9.42,26.64Z"}))}Z5.propTypes={title:K.string.isRequired};function Xk(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=eN(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eN(e,t){if(e){if(typeof e=="string")return Gv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gv(e,t)}}function Gv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tN(e,t){if(!t)return e;for(var n=[],r=[],i=n,o=Xk(t),a;!(a=o()).done;){var l=a.value;l==="|"?i.push({divider:!0}):l==="..."||l==="…"?i=r:function(){var u=void 0;l==="🌐"?u=void 0:u=l;var d=e.indexOf(e.filter(function(f){return f.value===u})[0]),c=e[d];e.splice(d,1),i.push(c)}()}return n.concat(e).concat(r)}function nN(e,t){if(e&&(e=e.filter(function(n){switch(n){case"🌐":case"|":case"...":case"…":return!0;default:return lf(n,t)}}),e.length>0))return e}function lf(e,t){return N5(e,t)?!0:(console.error("Country not found: ".concat(e)),!1)}function J5(e,t){return e&&(e=e.filter(function(n){return lf(n,t)}),e.length===0&&(e=void 0)),e}var rN=["country","label","aspectRatio"];function w1(){return w1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w1.apply(this,arguments)}function iN(e,t){if(e==null)return{};var n=oN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function oN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function X5(e){var t=e.flags,n=e.flagUrl,r=e.flagComponent,i=e.internationalIcon;function o(a){var l=a.country,u=a.label,d=a.aspectRatio,c=iN(a,rN),f=i===sf?d:void 0;return ne.createElement("div",w1({},c,{className:Kd("PhoneInputCountryIcon",{"PhoneInputCountryIcon--square":f===1,"PhoneInputCountryIcon--border":l})}),l?ne.createElement(r,{country:l,countryName:u,flags:t,flagUrl:n,className:"PhoneInputCountryIconImg"}):ne.createElement(i,{title:u,aspectRatio:f,className:"PhoneInputCountryIconImg"}))}return o.propTypes={country:K.string,label:K.string.isRequired,aspectRatio:K.number},o}X5({flagUrl:"https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",flagComponent:dm,internationalIcon:sf});var eb=K.shape({country_calling_codes:K.object.isRequired,countries:K.object.isRequired}),tb=K.objectOf(K.string);function di(e,t){var n="+"+wi(e,t);return n}function aN(e){var t=e.value,n=e.phoneNumber,r=e.defaultCountry,i=e.getAnyCountry,o=e.countries,a=e.required,l=e.metadata,u;return n&&n.country?u=n.country:r&&(!t||ob(t,r,l))&&(u=r),o&&o.indexOf(u)<0&&(u=void 0),!u&&a&&o&&o.length>0&&(u=i()),u}function sN(e){var t=e.countries,n=e.countryNames,r=e.addInternationalOption,i=e.compareStringsLocales,o=e.compareStrings;o||(o=pN);var a=t.map(function(l){return{value:l,label:n[l]||l}});return a.sort(function(l,u){return o(l.label,u.label,i)}),r&&a.unshift({label:n.ZZ}),a}function nb(e,t){return k_(e||"",t)}function lN(e){return e.formatNational().replace(/\D/g,"")}function uN(e,t){var n=t.prevCountry,r=t.newCountry,i=t.metadata,o=t.useNationalFormat;if(n===r)return e;if(!e)return o?"":di(r,i);if(r){if(e[0]==="+"){if(o)return e.indexOf("+"+wi(r,i))===0?gN(e,r,i):"";if(n){var a=di(r,i);return e.indexOf(a)===0?e:a}else{var l=di(r,i);return e.indexOf(l)===0?e:l}}}else if(e[0]!=="+")return oa(e,n,i)||"";return e}function oa(e,t,n){if(e){if(e[0]==="+"){if(e==="+")return;var r=new za(t,n);return r.input(e),r.getNumberValue()}if(t){var i=ib(e,t,n);return"+".concat(wi(t,n)).concat(i||"")}}}function dN(e,t,n){var r=ib(e,t,n);if(r){var i=r.length-cN(t,n);if(i>0)return e.slice(0,e.length-i)}return e}function cN(e,t){return t=new pt(t),t.selectNumberingPlan(e),t.numberingPlan.possibleLengths()[t.numberingPlan.possibleLengths().length-1]}function rb(e,t){var n=t.country,r=t.countries,i=t.required,o=t.metadata;if(e==="+")return n;var a=hN(e,o);return a&&(!r||r.indexOf(a)>=0)?a:n&&!i&&!ob(e,n,o)?void 0:n}function fN(e,t){var n=t.prevPhoneDigits,r=t.country,i=t.defaultCountry,o=t.countryRequired,a=t.getAnyCountry,l=t.countries,u=t.international,d=t.limitMaxLength,c=t.countryCallingCodeEditable,f=t.metadata;if(u&&c===!1){var g=di(r,f);if(e.indexOf(g)!==0){var $;return e&&e[0]!=="+"?(e=g+e,$=oa(e,r,f)):e=g,{phoneDigits:e,value:$,country:r}}}u===!1&&r&&e&&e[0]==="+"&&(e=Qv(e,r,f)),e&&r&&d&&(e=dN(e,r,f)),e&&e[0]!=="+"&&(!r||u)&&(e="+"+e),!e&&n&&n[0]==="+"&&(u?r=void 0:r=i),e==="+"&&n&&n[0]==="+"&&n.length>1&&(r=void 0);var v;return e&&(e[0]==="+"&&(e==="+"||r&&di(r,f).indexOf(e)===0)?v=void 0:v=oa(e,r,f)),v&&(r=rb(v,{country:r,countries:l,metadata:f}),u===!1&&r&&e&&e[0]==="+"&&(e=Qv(e,r,f),v=oa(e,r,f))),!r&&o&&(r=i||a()),{phoneDigits:e,country:r,value:v}}function Qv(e,t,n){if(e.indexOf(di(t,n))===0){var r=new za(t,n);r.input(e);var i=r.getNumber();return i?i.formatNational().replace(/\D/g,""):""}else return e.replace(/\D/g,"")}function hN(e,t){var n=new za(null,t);return n.input(e),n.getCountry()}function pN(e,t,n){return String.prototype.localeCompare?e.localeCompare(t,n):e<t?-1:e>t?1:0}function gN(e,t,n){if(t){var r="+"+wi(t,n);if(e.length<r.length){if(r.indexOf(e)===0)return""}else if(e.indexOf(r)===0)return e.slice(r.length)}for(var i=0,o=Object.keys(n.country_calling_codes);i<o.length;i++){var a=o[i];if(e.indexOf(a)===1)return e.slice(1+a.length)}return""}function ib(e,t,n){var r=new za(t,n);r.input(e);var i=r.getNumber();return i&&i.nationalNumber}function ob(e,t,n){for(var r=di(t,n),i=0;i<e.length&&i<r.length;){if(e[i]!==r[i])return!1;i++}return!0}function ab(e){var t=e.value,n=e.phoneNumber,r=e.defaultCountry,i=e.international,o=e.useNationalFormat,a=e.metadata;return(i===!1||o)&&n&&n.country?lN(n):!t&&i&&r?di(r,a):t}function Kv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function gu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Kv(Object(n),!0).forEach(function(r){mN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yN(e,t,n){var r=e.metadata,i=e.countries,o=e.defaultCountry,a=e.value,l=e.reset,u=e.international,d=e.displayInitialValueAsLocalNumber,c=e.initialValueFormat,f=t.defaultCountry,g=t.value,$=t.reset;n.country;var v=n.value,b=n.hasUserSelectedACountry,w=function(Y){return ab(gu(gu({},Y),{},{international:u,useNationalFormat:d||c==="national",metadata:r}))};if(l!==$)return{phoneDigits:w({value:void 0,defaultCountry:o}),value:void 0,country:o,hasUserSelectedACountry:void 0};if(o!==f){var m=!o||lf(o,r),p=!v||u&&v===w({value:void 0,defaultCountry:f}),x=!a&&p;if(!b&&m&&x)return{country:o,phoneDigits:w({value:void 0,defaultCountry:o}),value:void 0}}if(!Zv(a,g)&&!Zv(a,v)){var S,P;if(a){S=nb(a,r);var _=J5(i,r);S&&S.country?(!_||_.indexOf(S.country)>=0)&&(P=S.country):P=rb(a,{country:void 0,countries:_,metadata:r})}var T;return a||(T={hasUserSelectedACountry:void 0}),gu(gu({},T),{},{phoneDigits:w({phoneNumber:S,value:a,defaultCountry:o}),value:a,country:a?P:o})}}function Zv(e,t){return e===null&&(e=void 0),t===null&&(t=void 0),e===t}function S1(e){return S1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S1(e)}var vN=["name","disabled","readOnly","autoComplete","style","className","inputRef","inputComponent","numberInputProps","smartCaret","countrySelectComponent","countrySelectProps","containerComponent","defaultCountry","countries","countryOptionsOrder","labels","flags","flagComponent","flagUrl","addInternationalOption","internationalIcon","displayInitialValueAsLocalNumber","initialValueFormat","onCountryChange","limitMaxLength","countryCallingCodeEditable","focusInputOnCountrySelection","reset","metadata","international","locales"];function Jv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function xN(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jv(Object(n),!0).forEach(function(r){bn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function il(){return il=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},il.apply(this,arguments)}function $N(e,t){if(e==null)return{};var n=bN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function bN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function wN(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function SN(e,t,n){return t&&Xv(e.prototype,t),n&&Xv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function CN(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C1(e,t)}function C1(e,t){return C1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},C1(e,t)}function PN(e){var t=_N();return function(){var r=nc(e),i;if(t){var o=nc(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return ON(this,i)}}function ON(e,t){if(t&&(S1(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return $n(e)}function $n(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _N(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function nc(e){return nc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},nc(e)}function bn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var kN=function(e){CN(n,e);var t=PN(n);function n(r){var i;wN(this,n),i=t.call(this,r),bn($n(i),"setInputRef",function(m){i.inputRef.current=m;var p=i.props.inputRef;p&&(typeof p=="function"?p(m):p.current=m)}),bn($n(i),"isCountrySupportedWithError",function(m){var p=i.props.metadata;return lf(m,p)}),bn($n(i),"onCountryChange",function(m){var p=i.props,x=p.international,S=p.metadata,P=p.onChange,_=p.focusInputOnCountrySelection,T=i.state,R=T.phoneDigits,Y=T.country,z=uN(R,{prevCountry:Y,newCountry:m,metadata:S,useNationalFormat:!x}),ie=oa(z,m,S);_&&i.inputRef.current.focus(),i.setState({country:m,hasUserSelectedACountry:!0,phoneDigits:z,value:ie},function(){P(ie)})}),bn($n(i),"onChange",function(m){var p=i.props,x=p.defaultCountry,S=p.onChange,P=p.addInternationalOption,_=p.international,T=p.limitMaxLength,R=p.countryCallingCodeEditable,Y=p.metadata,z=i.state,ie=z.countries,M=z.phoneDigits,L=z.country,J=fN(m,{prevPhoneDigits:M,country:L,countryRequired:!P,defaultCountry:x,getAnyCountry:function(){return i.getFirstSupportedCountry({countries:ie})},countries:ie,international:_,limitMaxLength:T,countryCallingCodeEditable:R,metadata:Y}),F=J.phoneDigits,ee=J.country,te=J.value,j={phoneDigits:F,value:te,country:ee};R===!1&&!te&&F===i.state.phoneDigits&&(j.forceRerender={}),i.setState(j,function(){return S(te)})}),bn($n(i),"_onFocus",function(){return i.setState({isFocused:!0})}),bn($n(i),"_onBlur",function(){return i.setState({isFocused:!1})}),bn($n(i),"onFocus",function(m){i._onFocus();var p=i.props.onFocus;p&&p(m)}),bn($n(i),"onBlur",function(m){var p=i.props.onBlur;i._onBlur(),p&&p(m)}),bn($n(i),"onCountryFocus",function(m){i._onFocus();var p=i.props.countrySelectProps;if(p){var x=p.onFocus;x&&x(m)}}),bn($n(i),"onCountryBlur",function(m){i._onBlur();var p=i.props.countrySelectProps;if(p){var x=p.onBlur;x&&x(m)}}),i.inputRef=ne.createRef();var o=i.props,a=o.value;o.labels;var l=o.international,u=o.addInternationalOption,d=o.displayInitialValueAsLocalNumber,c=o.initialValueFormat,f=o.metadata,g=i.props,$=g.defaultCountry,v=g.countries;$&&(i.isCountrySupportedWithError($)||($=void 0)),v=J5(v,f);var b=nb(a,f);i.CountryIcon=X5(i.props);var w=aN({value:a,phoneNumber:b,defaultCountry:$,required:!u,countries:v||Yv(f),getAnyCountry:function(){return i.getFirstSupportedCountry({countries:v})},metadata:f});return i.state={props:i.props,country:w,countries:v,phoneDigits:ab({value:a,phoneNumber:b,defaultCountry:$,international:l,useNationalFormat:d||c==="national",metadata:f}),value:a},i}return SN(n,[{key:"componentDidMount",value:function(){var i=this.props.onCountryChange,o=this.props.defaultCountry,a=this.state.country;i&&(o&&(this.isCountrySupportedWithError(o)||(o=void 0)),a!==o&&i(a))}},{key:"componentDidUpdate",value:function(i,o){var a=this.props.onCountryChange,l=this.state.country;a&&l!==o.country&&a(l)}},{key:"getCountrySelectOptions",value:function(i){var o=i.countries,a=this.props,l=a.international,u=a.countryCallingCodeEditable,d=a.countryOptionsOrder,c=a.addInternationalOption,f=a.labels,g=a.locales,$=a.metadata;return this.useMemoCountrySelectOptions(function(){return tN(sN({countries:o||Yv($),countryNames:f,addInternationalOption:l&&u===!1?!1:c,compareStringsLocales:g}),nN(d,$))},[o,d,c,f,$])}},{key:"useMemoCountrySelectOptions",value:function(i,o){return(!this.countrySelectOptionsMemoDependencies||!EN(o,this.countrySelectOptionsMemoDependencies))&&(this.countrySelectOptionsMemo=i(),this.countrySelectOptionsMemoDependencies=o),this.countrySelectOptionsMemo}},{key:"getFirstSupportedCountry",value:function(i){var o=i.countries,a=this.getCountrySelectOptions({countries:o});return a[0].value}},{key:"render",value:function(){var i=this.props,o=i.name,a=i.disabled,l=i.readOnly,u=i.autoComplete,d=i.style,c=i.className;i.inputRef;var f=i.inputComponent,g=i.numberInputProps,$=i.smartCaret,v=i.countrySelectComponent,b=i.countrySelectProps,w=i.containerComponent;i.defaultCountry,i.countries,i.countryOptionsOrder;var m=i.labels;i.flags,i.flagComponent,i.flagUrl,i.addInternationalOption,i.internationalIcon,i.displayInitialValueAsLocalNumber,i.initialValueFormat,i.onCountryChange,i.limitMaxLength,i.countryCallingCodeEditable,i.focusInputOnCountrySelection,i.reset;var p=i.metadata;i.international,i.locales;var x=$N(i,vN),S=this.state,P=S.country,_=S.countries,T=S.phoneDigits,R=S.isFocused,Y=$?Ak:Lk,z=this.getCountrySelectOptions({countries:_});return ne.createElement(w,{style:d,className:Kd(c,"PhoneInput",{"PhoneInput--focus":R,"PhoneInput--disabled":a,"PhoneInput--readOnly":l})},ne.createElement(v,il({name:o?"".concat(o,"Country"):void 0,"aria-label":m.country},b,{value:P,options:z,onChange:this.onCountryChange,onFocus:this.onCountryFocus,onBlur:this.onCountryBlur,disabled:a||b&&b.disabled,readOnly:l||b&&b.readOnly,iconComponent:this.CountryIcon})),ne.createElement(Y,il({ref:this.setInputRef,type:"tel",autoComplete:u},g,x,{name:o,metadata:p,country:P,value:T||"",onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,disabled:a,readOnly:l,inputComponent:f,className:Kd("PhoneInputInput",g&&g.className,x.className)})))}}],[{key:"getDerivedStateFromProps",value:function(i,o){return xN({props:i},yN(i,o.props,o))}}]),n}(ne.PureComponent),fm=ne.forwardRef(function(e,t){return ne.createElement(kN,il({},e,{inputRef:t}))});fm.propTypes={value:K.string,onChange:K.func.isRequired,onFocus:K.func,onBlur:K.func,disabled:K.bool,readOnly:K.bool,autoComplete:K.string.isRequired,initialValueFormat:K.oneOf(["national"]),displayInitialValueAsLocalNumber:K.bool,defaultCountry:K.string,countries:K.arrayOf(K.string),labels:tb.isRequired,locales:K.oneOfType([K.string,K.arrayOf(K.string)]),flagUrl:K.string.isRequired,flags:K.objectOf(K.elementType),flagComponent:K.elementType.isRequired,addInternationalOption:K.bool.isRequired,internationalIcon:K.elementType.isRequired,countryOptionsOrder:K.arrayOf(K.string),style:K.object,className:K.string,countrySelectComponent:K.elementType.isRequired,countrySelectProps:K.object,inputComponent:K.elementType.isRequired,containerComponent:K.elementType.isRequired,numberInputProps:K.object,smartCaret:K.bool.isRequired,international:K.bool,limitMaxLength:K.bool.isRequired,countryCallingCodeEditable:K.bool.isRequired,metadata:eb.isRequired,onCountryChange:K.func,focusInputOnCountrySelection:K.bool.isRequired};fm.defaultProps={autoComplete:"tel",countrySelectComponent:um,flagComponent:dm,flagUrl:"https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",internationalIcon:sf,inputComponent:"input",containerComponent:"div",reset:K.any,smartCaret:!0,addInternationalOption:!0,limitMaxLength:!1,countryCallingCodeEditable:!0,focusInputOnCountrySelection:!0};const NN=fm;function EN(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;){if(e[n]!==t[n])return!1;n++}return!0}const IN={ext:"ext.",country:"Phone number country",phone:"Phone",AB:"Abkhazia",AC:"Ascension Island",AD:"Andorra",AE:"United Arab Emirates",AF:"Afghanistan",AG:"Antigua and Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:"American Samoa",AT:"Austria",AU:"Australia",AW:"Aruba",AX:"Åland Islands",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BL:"Saint Barthélemy",BM:"Bermuda",BN:"Brunei Darussalam",BO:"Bolivia",BQ:"Bonaire, Sint Eustatius and Saba",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BV:"Bouvet Island",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CC:"Cocos (Keeling) Islands",CD:"Congo, Democratic Republic of the",CF:"Central African Republic",CG:"Congo",CH:"Switzerland",CI:"Cote d'Ivoire",CK:"Cook Islands",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CU:"Cuba",CV:"Cape Verde",CW:"Curaçao",CX:"Christmas Island",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",EH:"Western Sahara",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",FM:"Federated States of Micronesia",FO:"Faroe Islands",FR:"France",GA:"Gabon",GB:"United Kingdom",GD:"Grenada",GE:"Georgia",GF:"French Guiana",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Equatorial Guinea",GR:"Greece",GS:"South Georgia and the South Sandwich Islands",GT:"Guatemala",GU:"Guam",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong",HM:"Heard Island and McDonald Islands",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IM:"Isle of Man",IN:"India",IO:"British Indian Ocean Territory",IQ:"Iraq",IR:"Iran",IS:"Iceland",IT:"Italy",JE:"Jersey",JM:"Jamaica",JO:"Jordan",JP:"Japan",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KI:"Kiribati",KM:"Comoros",KN:"Saint Kitts and Nevis",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Laos",LB:"Lebanon",LC:"Saint Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libya",MA:"Morocco",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MF:"Saint Martin (French Part)",MG:"Madagascar",MH:"Marshall Islands",MK:"North Macedonia",ML:"Mali",MM:"Myanmar",MN:"Mongolia",MO:"Macao",MP:"Northern Mariana Islands",MQ:"Martinique",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NR:"Nauru",NU:"Niue",NZ:"New Zealand",OM:"Oman",OS:"South Ossetia",PA:"Panama",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PM:"Saint Pierre and Miquelon",PN:"Pitcairn",PR:"Puerto Rico",PS:"Palestine",PT:"Portugal",PW:"Palau",PY:"Paraguay",QA:"Qatar",RE:"Reunion",RO:"Romania",RS:"Serbia",RU:"Russia",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SH:"Saint Helena",SI:"Slovenia",SJ:"Svalbard and Jan Mayen",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",SS:"South Sudan",ST:"Sao Tome and Principe",SV:"El Salvador",SX:"Sint Maarten",SY:"Syria",SZ:"Swaziland",TA:"Tristan da Cunha",TC:"Turks and Caicos Islands",TD:"Chad",TF:"French Southern Territories",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TK:"Tokelau",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turkey",TT:"Trinidad and Tobago",TV:"Tuvalu",TW:"Taiwan",TZ:"Tanzania",UA:"Ukraine",UG:"Uganda",UM:"United States Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VA:"Holy See (Vatican City State)",VC:"Saint Vincent and the Grenadines",VE:"Venezuela",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis and Futuna",WS:"Samoa",XK:"Kosovo",YE:"Yemen",YT:"Mayotte",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe",ZZ:"International"};function P1(){return P1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P1.apply(this,arguments)}function sb(e){var t=ne.forwardRef(function(n,r){return ne.createElement(NN,P1({ref:r},n))});return t.propTypes={metadata:eb.isRequired,labels:tb.isRequired},t.defaultProps={metadata:e,labels:IN},t}sb();const TN=sb(aP);function lb(e,t){return function(){return e.apply(t,arguments)}}const{toString:ub}=Object.prototype,{getPrototypeOf:hm}=Object,pm=(e=>t=>{const n=ub.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Er=e=>(e=e.toLowerCase(),t=>pm(t)===e),uf=e=>t=>typeof t===e,{isArray:Ua}=Array,ol=uf("undefined");function AN(e){return e!==null&&!ol(e)&&e.constructor!==null&&!ol(e.constructor)&&mi(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const db=Er("ArrayBuffer");function RN(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&db(e.buffer),t}const FN=uf("string"),mi=uf("function"),cb=uf("number"),gm=e=>e!==null&&typeof e=="object",DN=e=>e===!0||e===!1,id=e=>{if(pm(e)!=="object")return!1;const t=hm(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},MN=Er("Date"),LN=Er("File"),jN=Er("Blob"),zN=Er("FileList"),UN=e=>gm(e)&&mi(e.pipe),BN=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||ub.call(e)===t||mi(e.toString)&&e.toString()===t)},HN=Er("URLSearchParams"),YN=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Il(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Ua(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let l;for(r=0;r<a;r++)l=o[r],t.call(null,e[l],l,e)}}function fb(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const hb=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),pb=e=>!ol(e)&&e!==hb;function O1(){const{caseless:e}=pb(this)&&this||{},t={},n=(r,i)=>{const o=e&&fb(t,i)||i;id(t[o])&&id(r)?t[o]=O1(t[o],r):id(r)?t[o]=O1({},r):Ua(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Il(arguments[r],n);return t}const WN=(e,t,n,{allOwnKeys:r}={})=>(Il(t,(i,o)=>{n&&mi(i)?e[o]=lb(i,n):e[o]=i},{allOwnKeys:r}),e),VN=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),qN=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},GN=(e,t,n,r)=>{let i,o,a;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&hm(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},QN=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},KN=e=>{if(!e)return null;if(Ua(e))return e;let t=e.length;if(!cb(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ZN=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&hm(Uint8Array)),JN=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},XN=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},eE=Er("HTMLFormElement"),tE=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),e3=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),nE=Er("RegExp"),gb=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Il(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},rE=e=>{gb(e,(t,n)=>{if(mi(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(mi(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},iE=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Ua(e)?r(e):r(String(e).split(t)),n},oE=()=>{},aE=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Ch="abcdefghijklmnopqrstuvwxyz",t3="0123456789",mb={DIGIT:t3,ALPHA:Ch,ALPHA_DIGIT:Ch+Ch.toUpperCase()+t3},sE=(e=16,t=mb.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function lE(e){return!!(e&&mi(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const uE=e=>{const t=new Array(10),n=(r,i)=>{if(gm(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Ua(r)?[]:{};return Il(r,(a,l)=>{const u=n(a,i+1);!ol(u)&&(o[l]=u)}),t[i]=void 0,o}}return r};return n(e,0)},B={isArray:Ua,isArrayBuffer:db,isBuffer:AN,isFormData:BN,isArrayBufferView:RN,isString:FN,isNumber:cb,isBoolean:DN,isObject:gm,isPlainObject:id,isUndefined:ol,isDate:MN,isFile:LN,isBlob:jN,isRegExp:nE,isFunction:mi,isStream:UN,isURLSearchParams:HN,isTypedArray:ZN,isFileList:zN,forEach:Il,merge:O1,extend:WN,trim:YN,stripBOM:VN,inherits:qN,toFlatObject:GN,kindOf:pm,kindOfTest:Er,endsWith:QN,toArray:KN,forEachEntry:JN,matchAll:XN,isHTMLForm:eE,hasOwnProperty:e3,hasOwnProp:e3,reduceDescriptors:gb,freezeMethods:rE,toObjectSet:iE,toCamelCase:tE,noop:oE,toFiniteNumber:aE,findKey:fb,global:hb,isContextDefined:pb,ALPHABET:mb,generateString:sE,isSpecCompliantForm:lE,toJSONObject:uE};function we(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}B.inherits(we,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const yb=we.prototype,vb={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{vb[e]={value:e}});Object.defineProperties(we,vb);Object.defineProperty(yb,"isAxiosError",{value:!0});we.from=(e,t,n,r,i,o)=>{const a=Object.create(yb);return B.toFlatObject(e,a,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),we.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const dE=null;function _1(e){return B.isPlainObject(e)||B.isArray(e)}function xb(e){return B.endsWith(e,"[]")?e.slice(0,-2):e}function n3(e,t,n){return e?e.concat(t).map(function(i,o){return i=xb(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function cE(e){return B.isArray(e)&&!e.some(_1)}const fE=B.toFlatObject(B,{},null,function(t){return/^is[A-Z]/.test(t)});function df(e,t,n){if(!B.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=B.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,w){return!B.isUndefined(w[b])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,a=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(t);if(!B.isFunction(i))throw new TypeError("visitor must be a function");function d(v){if(v===null)return"";if(B.isDate(v))return v.toISOString();if(!u&&B.isBlob(v))throw new we("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(v)||B.isTypedArray(v)?u&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function c(v,b,w){let m=v;if(v&&!w&&typeof v=="object"){if(B.endsWith(b,"{}"))b=r?b:b.slice(0,-2),v=JSON.stringify(v);else if(B.isArray(v)&&cE(v)||(B.isFileList(v)||B.endsWith(b,"[]"))&&(m=B.toArray(v)))return b=xb(b),m.forEach(function(x,S){!(B.isUndefined(x)||x===null)&&t.append(a===!0?n3([b],S,o):a===null?b:b+"[]",d(x))}),!1}return _1(v)?!0:(t.append(n3(w,b,o),d(v)),!1)}const f=[],g=Object.assign(fE,{defaultVisitor:c,convertValue:d,isVisitable:_1});function $(v,b){if(!B.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(v),B.forEach(v,function(m,p){(!(B.isUndefined(m)||m===null)&&i.call(t,m,B.isString(p)?p.trim():p,b,g))===!0&&$(m,b?b.concat(p):[p])}),f.pop()}}if(!B.isObject(e))throw new TypeError("data must be an object");return $(e),t}function r3(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function mm(e,t){this._pairs=[],e&&df(e,this,t)}const $b=mm.prototype;$b.append=function(t,n){this._pairs.push([t,n])};$b.toString=function(t){const n=t?function(r){return t.call(this,r,r3)}:r3;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function hE(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function bb(e,t,n){if(!t)return e;const r=n&&n.encode||hE,i=n&&n.serialize;let o;if(i?o=i(t,n):o=B.isURLSearchParams(t)?t.toString():new mm(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class pE{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){B.forEach(this.handlers,function(r){r!==null&&t(r)})}}const i3=pE,wb={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},gE=typeof URLSearchParams<"u"?URLSearchParams:mm,mE=typeof FormData<"u"?FormData:null,yE=typeof Blob<"u"?Blob:null,vE=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),xE=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Vn={isBrowser:!0,classes:{URLSearchParams:gE,FormData:mE,Blob:yE},isStandardBrowserEnv:vE,isStandardBrowserWebWorkerEnv:xE,protocols:["http","https","file","blob","url","data"]};function $E(e,t){return df(e,new Vn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Vn.isNode&&B.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function bE(e){return B.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function wE(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Sb(e){function t(n,r,i,o){let a=n[o++];const l=Number.isFinite(+a),u=o>=n.length;return a=!a&&B.isArray(i)?i.length:a,u?(B.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!l):((!i[a]||!B.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&B.isArray(i[a])&&(i[a]=wE(i[a])),!l)}if(B.isFormData(e)&&B.isFunction(e.entries)){const n={};return B.forEachEntry(e,(r,i)=>{t(bE(r),i,n,0)}),n}return null}const SE={"Content-Type":void 0};function CE(e,t,n){if(B.isString(e))try{return(t||JSON.parse)(e),B.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const cf={transitional:wb,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=B.isObject(t);if(o&&B.isHTMLForm(t)&&(t=new FormData(t)),B.isFormData(t))return i&&i?JSON.stringify(Sb(t)):t;if(B.isArrayBuffer(t)||B.isBuffer(t)||B.isStream(t)||B.isFile(t)||B.isBlob(t))return t;if(B.isArrayBufferView(t))return t.buffer;if(B.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return $E(t,this.formSerializer).toString();if((l=B.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return df(l?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),CE(t)):t}],transformResponse:[function(t){const n=this.transitional||cf.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&B.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?we.from(l,we.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Vn.classes.FormData,Blob:Vn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};B.forEach(["delete","get","head"],function(t){cf.headers[t]={}});B.forEach(["post","put","patch"],function(t){cf.headers[t]=B.merge(SE)});const ym=cf,PE=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),OE=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&PE[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},o3=Symbol("internals");function ns(e){return e&&String(e).trim().toLowerCase()}function od(e){return e===!1||e==null?e:B.isArray(e)?e.map(od):String(e)}function _E(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const kE=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ph(e,t,n,r,i){if(B.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!B.isString(t)){if(B.isString(r))return t.indexOf(r)!==-1;if(B.isRegExp(r))return r.test(t)}}function NE(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function EE(e,t){const n=B.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class ff{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,u,d){const c=ns(u);if(!c)throw new Error("header name must be a non-empty string");const f=B.findKey(i,c);(!f||i[f]===void 0||d===!0||d===void 0&&i[f]!==!1)&&(i[f||u]=od(l))}const a=(l,u)=>B.forEach(l,(d,c)=>o(d,c,u));return B.isPlainObject(t)||t instanceof this.constructor?a(t,n):B.isString(t)&&(t=t.trim())&&!kE(t)?a(OE(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=ns(t),t){const r=B.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return _E(i);if(B.isFunction(n))return n.call(this,i,r);if(B.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ns(t),t){const r=B.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ph(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=ns(a),a){const l=B.findKey(r,a);l&&(!n||Ph(r,r[l],l,n))&&(delete r[l],i=!0)}}return B.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Ph(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return B.forEach(this,(i,o)=>{const a=B.findKey(r,o);if(a){n[a]=od(i),delete n[o];return}const l=t?NE(o):String(o).trim();l!==o&&delete n[o],n[l]=od(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return B.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&B.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[o3]=this[o3]={accessors:{}}).accessors,i=this.prototype;function o(a){const l=ns(a);r[l]||(EE(i,a),r[l]=!0)}return B.isArray(t)?t.forEach(o):o(t),this}}ff.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.freezeMethods(ff.prototype);B.freezeMethods(ff);const $r=ff;function Oh(e,t){const n=this||ym,r=t||n,i=$r.from(r.headers);let o=r.data;return B.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Cb(e){return!!(e&&e.__CANCEL__)}function Tl(e,t,n){we.call(this,e??"canceled",we.ERR_CANCELED,t,n),this.name="CanceledError"}B.inherits(Tl,we,{__CANCEL__:!0});function IE(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new we("Request failed with status code "+n.status,[we.ERR_BAD_REQUEST,we.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const TE=Vn.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,l){const u=[];u.push(n+"="+encodeURIComponent(r)),B.isNumber(i)&&u.push("expires="+new Date(i).toGMTString()),B.isString(o)&&u.push("path="+o),B.isString(a)&&u.push("domain="+a),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function AE(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function RE(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Pb(e,t){return e&&!AE(t)?RE(e,t):t}const FE=Vn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const l=B.isString(a)?i(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function DE(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ME(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(u){const d=Date.now(),c=r[o];a||(a=d),n[i]=u,r[i]=d;let f=o,g=0;for(;f!==i;)g+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),d-a<t)return;const $=c&&d-c;return $?Math.round(g*1e3/$):void 0}}function a3(e,t){let n=0;const r=ME(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-n,u=r(l),d=o<=a;n=o;const c={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&d?(a-o)/u:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const LE=typeof XMLHttpRequest<"u",jE=LE&&function(e){return new Promise(function(n,r){let i=e.data;const o=$r.from(e.headers).normalize(),a=e.responseType;let l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}B.isFormData(i)&&(Vn.isStandardBrowserEnv||Vn.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let d=new XMLHttpRequest;if(e.auth){const $=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa($+":"+v))}const c=Pb(e.baseURL,e.url);d.open(e.method.toUpperCase(),bb(c,e.params,e.paramsSerializer),!0),d.timeout=e.timeout;function f(){if(!d)return;const $=$r.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),b={data:!a||a==="text"||a==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:$,config:e,request:d};IE(function(m){n(m),u()},function(m){r(m),u()},b),d=null}if("onloadend"in d?d.onloadend=f:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(f)},d.onabort=function(){d&&(r(new we("Request aborted",we.ECONNABORTED,e,d)),d=null)},d.onerror=function(){r(new we("Network Error",we.ERR_NETWORK,e,d)),d=null},d.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const b=e.transitional||wb;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),r(new we(v,b.clarifyTimeoutError?we.ETIMEDOUT:we.ECONNABORTED,e,d)),d=null},Vn.isStandardBrowserEnv){const $=(e.withCredentials||FE(c))&&e.xsrfCookieName&&TE.read(e.xsrfCookieName);$&&o.set(e.xsrfHeaderName,$)}i===void 0&&o.setContentType(null),"setRequestHeader"in d&&B.forEach(o.toJSON(),function(v,b){d.setRequestHeader(b,v)}),B.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),a&&a!=="json"&&(d.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&d.addEventListener("progress",a3(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",a3(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=$=>{d&&(r(!$||$.type?new Tl(null,e,d):$),d.abort(),d=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=DE(c);if(g&&Vn.protocols.indexOf(g)===-1){r(new we("Unsupported protocol "+g+":",we.ERR_BAD_REQUEST,e));return}d.send(i||null)})},ad={http:dE,xhr:jE};B.forEach(ad,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const zE={getAdapter:e=>{e=B.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=B.isString(n)?ad[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new we(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(B.hasOwnProp(ad,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!B.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:ad};function _h(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Tl(null,e)}function s3(e){return _h(e),e.headers=$r.from(e.headers),e.data=Oh.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),zE.getAdapter(e.adapter||ym.adapter)(e).then(function(r){return _h(e),r.data=Oh.call(e,e.transformResponse,r),r.headers=$r.from(r.headers),r},function(r){return Cb(r)||(_h(e),r&&r.response&&(r.response.data=Oh.call(e,e.transformResponse,r.response),r.response.headers=$r.from(r.response.headers))),Promise.reject(r)})}const l3=e=>e instanceof $r?e.toJSON():e;function Ia(e,t){t=t||{};const n={};function r(d,c,f){return B.isPlainObject(d)&&B.isPlainObject(c)?B.merge.call({caseless:f},d,c):B.isPlainObject(c)?B.merge({},c):B.isArray(c)?c.slice():c}function i(d,c,f){if(B.isUndefined(c)){if(!B.isUndefined(d))return r(void 0,d,f)}else return r(d,c,f)}function o(d,c){if(!B.isUndefined(c))return r(void 0,c)}function a(d,c){if(B.isUndefined(c)){if(!B.isUndefined(d))return r(void 0,d)}else return r(void 0,c)}function l(d,c,f){if(f in t)return r(d,c);if(f in e)return r(void 0,d)}const u={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(d,c)=>i(l3(d),l3(c),!0)};return B.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const f=u[c]||i,g=f(e[c],t[c],c);B.isUndefined(g)&&f!==l||(n[c]=g)}),n}const Ob="1.3.5",vm={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{vm[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const u3={};vm.transitional=function(t,n,r){function i(o,a){return"[Axios v"+Ob+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,l)=>{if(t===!1)throw new we(i(a," has been removed"+(n?" in "+n:"")),we.ERR_DEPRECATED);return n&&!u3[a]&&(u3[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,l):!0}};function UE(e,t,n){if(typeof e!="object")throw new we("options must be an object",we.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const l=e[o],u=l===void 0||a(l,o,e);if(u!==!0)throw new we("option "+o+" must be "+u,we.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new we("Unknown option "+o,we.ERR_BAD_OPTION)}}const k1={assertOptions:UE,validators:vm},Mr=k1.validators;class rc{constructor(t){this.defaults=t,this.interceptors={request:new i3,response:new i3}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Ia(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&k1.assertOptions(r,{silentJSONParsing:Mr.transitional(Mr.boolean),forcedJSONParsing:Mr.transitional(Mr.boolean),clarifyTimeoutError:Mr.transitional(Mr.boolean)},!1),i!=null&&(B.isFunction(i)?n.paramsSerializer={serialize:i}:k1.assertOptions(i,{encode:Mr.function,serialize:Mr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a;a=o&&B.merge(o.common,o[n.method]),a&&B.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=$r.concat(a,o);const l=[];let u=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(u=u&&b.synchronous,l.unshift(b.fulfilled,b.rejected))});const d=[];this.interceptors.response.forEach(function(b){d.push(b.fulfilled,b.rejected)});let c,f=0,g;if(!u){const v=[s3.bind(this),void 0];for(v.unshift.apply(v,l),v.push.apply(v,d),g=v.length,c=Promise.resolve(n);f<g;)c=c.then(v[f++],v[f++]);return c}g=l.length;let $=n;for(f=0;f<g;){const v=l[f++],b=l[f++];try{$=v($)}catch(w){b.call(this,w);break}}try{c=s3.call(this,$)}catch(v){return Promise.reject(v)}for(f=0,g=d.length;f<g;)c=c.then(d[f++],d[f++]);return c}getUri(t){t=Ia(this.defaults,t);const n=Pb(t.baseURL,t.url);return bb(n,t.params,t.paramsSerializer)}}B.forEach(["delete","get","head","options"],function(t){rc.prototype[t]=function(n,r){return this.request(Ia(r||{},{method:t,url:n,data:(r||{}).data}))}});B.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,l){return this.request(Ia(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}rc.prototype[t]=n(),rc.prototype[t+"Form"]=n(!0)});const sd=rc;class xm{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(l=>{r.subscribe(l),o=l}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,l){r.reason||(r.reason=new Tl(o,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new xm(function(i){t=i}),cancel:t}}}const BE=xm;function HE(e){return function(n){return e.apply(null,n)}}function YE(e){return B.isObject(e)&&e.isAxiosError===!0}const N1={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(N1).forEach(([e,t])=>{N1[t]=e});const WE=N1;function _b(e){const t=new sd(e),n=lb(sd.prototype.request,t);return B.extend(n,sd.prototype,t,{allOwnKeys:!0}),B.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return _b(Ia(e,i))},n}const lt=_b(ym);lt.Axios=sd;lt.CanceledError=Tl;lt.CancelToken=BE;lt.isCancel=Cb;lt.VERSION=Ob;lt.toFormData=df;lt.AxiosError=we;lt.Cancel=lt.CanceledError;lt.all=function(t){return Promise.all(t)};lt.spread=HE;lt.isAxiosError=YE;lt.mergeConfig=Ia;lt.AxiosHeaders=$r;lt.formToJSON=e=>Sb(B.isHTMLForm(e)?new FormData(e):e);lt.HttpStatusCode=WE;lt.default=lt;const dt=lt,lo="https://crossbackend.onrender.com",VE=async({firstName:e,lastName:t,email:n,companyName:r,phoneNum:i,password:o})=>{await dt.post(`${lo}/api/seler/register`,{firstName:e,lastName:t,email:n,companyName:r,phoneNum:i,password:o}).then(a=>{})},qE=async({email:e,password:t})=>{await dt.post(`${lo}/api/seler/signInUser`,{email:e,password:t}).then(n=>{localStorage.setItem("user",JSON.stringify(n.data.data)),alert(n.data.token)})},GE=async({id:e,otp:t})=>{await dt.patch(`${lo}/api/user/${e}/verify`,{otp:t}).then(n=>{console.log(n.data)})},QE=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await dt.patch(`${lo}/api/seler/${e}/update`,t,n).then(r=>{console.log(r.data)}).catch(r=>{console.log(r)})},KE=async({id:e,gender:t,DateOfBirth:n,country:r})=>{await dt.patch(`${lo}/api/seler/${e}/updateuser`,{gender:t,DateOfBirth:n,country:r}).then(i=>{})},ZE=async({id:e,address:t,address2:n,shippingFrom:r,codePostal:i,shopName:o,city:a})=>{await dt.patch(`${lo}/api/seler/${e}/updateuser`,{address:t,address2:n,shippingFrom:r,codePostal:i,shopName:o,city:a}).then(l=>{})},JE=async({id:e,bankName:t,accountName:n,accNumber:r,completed:i})=>{await dt.patch(`${lo}/api/seler/${e}/updateuser`,{bankName:t,accountName:n,accNumber:r,completed:i}).then(o=>{})};function uo(e){this._maxSize=e,this.clear()}uo.prototype.clear=function(){this._size=0,this._values=Object.create(null)};uo.prototype.get=function(e){return this._values[e]};uo.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var XE=/[^.^\]^[]+|(?=\[\]|\.\.)/g,kb=/^\d+$/,eI=/^\d/,tI=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,nI=/^\s*(['"]?)(.*?)(\1)\s*$/,$m=512,d3=new uo($m),c3=new uo($m),f3=new uo($m),Zi={Cache:uo,split:E1,normalizePath:kh,setter:function(e){var t=kh(e);return c3.get(e)||c3.set(e,function(r,i){for(var o=0,a=t.length,l=r;o<a-1;){var u=t[o];if(u==="__proto__"||u==="constructor"||u==="prototype")return r;l=l[t[o++]]}l[t[o]]=i})},getter:function(e,t){var n=kh(e);return f3.get(e)||f3.set(e,function(i){for(var o=0,a=n.length;o<a;)if(i!=null||!t)i=i[n[o++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(bm(n)||kb.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){rI(Array.isArray(e)?e:E1(e),t,n)}};function kh(e){return d3.get(e)||d3.set(e,E1(e).map(function(t){return t.replace(nI,"$2")}))}function E1(e){return e.match(XE)||[""]}function rI(e,t,n){var r=e.length,i,o,a,l;for(o=0;o<r;o++)i=e[o],i&&(aI(i)&&(i='"'+i+'"'),l=bm(i),a=!l&&/^\d+$/.test(i),t.call(n,i,l,a,o,e))}function bm(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function iI(e){return e.match(eI)&&!e.match(kb)}function oI(e){return tI.test(e)}function aI(e){return!bm(e)&&(iI(e)||oI(e))}const sI=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,hf=e=>e.match(sI)||[],pf=e=>e[0].toUpperCase()+e.slice(1),wm=(e,t)=>hf(e).join(t).toLowerCase(),Nb=e=>hf(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),lI=e=>pf(Nb(e)),uI=e=>wm(e,"_"),dI=e=>wm(e,"-"),cI=e=>pf(wm(e," ")),fI=e=>hf(e).map(pf).join(" ");var Nh={words:hf,upperFirst:pf,camelCase:Nb,pascalCase:lI,snakeCase:uI,kebabCase:dI,sentenceCase:cI,titleCase:fI},ic={},hI={get exports(){return ic},set exports(e){ic=e}};hI.exports=function(e){return Eb(pI(e),e)};ic.array=Eb;function Eb(e,t){var n=e.length,r=new Array(n),i={},o=n,a=gI(t),l=mI(e);for(t.forEach(function(d){if(!l.has(d[0])||!l.has(d[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)i[o]||u(e[o],o,new Set);return r;function u(d,c,f){if(f.has(d)){var g;try{g=", node was:"+JSON.stringify(d)}catch{g=""}throw new Error("Cyclic dependency"+g)}if(!l.has(d))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(d));if(!i[c]){i[c]=!0;var $=a.get(d)||new Set;if($=Array.from($),c=$.length){f.add(d);do{var v=$[--c];u(v,l.get(v),f)}while(c);f.delete(d)}r[--n]=d}}}function pI(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function gI(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function mI(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}const yI=Object.prototype.toString,vI=Error.prototype.toString,xI=RegExp.prototype.toString,$I=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",bI=/^Symbol\((.*)\)(.*)$/;function wI(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function h3(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return wI(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return $I.call(e).replace(bI,"Symbol($1)");const r=yI.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+vI.call(e)+"]":r==="RegExp"?xI.call(e):null}function ga(e,t){let n=h3(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let o=h3(this[r],t);return o!==null?o:i},2)}function Ib(e){return e==null?[]:[].concat(e)}let SI=/\$\{\s*(\w+)\s*\}/g;class Vt extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(SI,(i,o)=>ga(n[o])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],Ib(t).forEach(o=>{Vt.isError(o)?(this.errors.push(...o.errors),this.inner=this.inner.concat(o.inner.length?o.inner:o)):this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,Vt)}}let lr={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${ga(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${ga(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${ga(n,!0)}\``+i}},wn={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},zr={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},I1={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},CI={isValue:"${path} field must be ${value}"},T1={noUnknown:"${path} field has unspecified keys: ${unknown}"},PI={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:lr,string:wn,number:zr,date:I1,object:T1,array:PI,boolean:CI});const Sm=e=>e&&e.__isYupSchema__;class oc{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:o}=n,a=typeof r=="function"?r:(...l)=>l.every(u=>u===r);return new oc(t,(l,u)=>{var d;let c=a(...l)?i:o;return(d=c==null?void 0:c(u))!=null?d:u})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(o=>o.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!Sm(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const mu={context:"$",value:"."};function OI(e,t){return new Si(e,t)}class Si{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===mu.context,this.isValue=this.key[0]===mu.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?mu.context:this.isValue?mu.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Zi.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Si.prototype.__isYupRef=!0;const qn=e=>e==null;function go(e){function t({value:n,path:r="",options:i,originalValue:o,schema:a},l,u){const{name:d,test:c,params:f,message:g,skipAbsent:$}=e;let{parent:v,context:b,abortEarly:w=a.spec.abortEarly}=i;function m(z){return Si.isRef(z)?z.getValue(n,v,b):z}function p(z={}){const ie=Object.assign({value:n,originalValue:o,label:a.spec.label,path:z.path||r,spec:a.spec},f,z.params);for(const L of Object.keys(ie))ie[L]=m(ie[L]);const M=new Vt(Vt.formatError(z.message||g,ie),n,ie.path,z.type||d);return M.params=ie,M}const x=w?l:u;let S={path:r,parent:v,type:d,from:i.from,createError:p,resolve:m,options:i,originalValue:o,schema:a};const P=z=>{Vt.isError(z)?x(z):z?u(null):x(p())},_=z=>{Vt.isError(z)?x(z):l(z)},T=$&&qn(n);if(!i.sync){try{Promise.resolve(T?!0:c.call(S,n,S)).then(P,_)}catch(z){_(z)}return}let R;try{var Y;if(R=T?!0:c.call(S,n,S),typeof((Y=R)==null?void 0:Y.then)=="function")throw new Error(`Validation test of type: "${S.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(z){_(z);return}P(R)}return t.OPTIONS=e,t}function _I(e,t,n,r=n){let i,o,a;return t?(Zi.forEach(t,(l,u,d)=>{let c=u?l.slice(1,l.length-1):l;e=e.resolve({context:r,parent:i,value:n});let f=e.type==="tuple",g=d?parseInt(c,10):0;if(e.innerType||f){if(f&&!d)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&g>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[g],e=f?e.spec.types[g]:e.innerType}if(!d){if(!e.fields||!e.fields[c])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);i=n,n=n&&n[c],e=e.fields[c]}o=c,a=u?"["+l+"]":"."+l}),{schema:e,parent:i,parentPath:o}):{parent:i,parentPath:t,schema:e}}class ac extends Set{describe(){const t=[];for(const n of this.values())t.push(Si.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new ac(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function aa(e,t=new Map){if(Sm(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=aa(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,aa(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(aa(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=aa(i,t)}else throw Error(`Unable to clone ${e}`);return n}class Rn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new ac,this._blacklist=new ac,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(lr.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=aa(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(o=>{t.tests.forEach(a=>{o.test(a.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,o)=>o.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",o=r._cast(t,n);if(n.assert!==!1&&!r.isType(o)){if(i&&qn(o))return o;let a=ga(t),l=ga(o);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(l!==a?`result of cast: ${l}`:""))}return o}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,o)=>o.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault()),r}_validate(t,n={},r,i){let{path:o,originalValue:a=t,strict:l=this.spec.strict}=n,u=t;l||(u=this._cast(u,Object.assign({assert:!1},n)));let d=[];for(let c of Object.values(this.internalTests))c&&d.push(c);this.runTests({path:o,value:u,originalValue:a,options:n,tests:d},r,c=>{if(c.length)return i(c,u);this.runTests({path:o,value:u,originalValue:a,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:o,value:a,originalValue:l,path:u,options:d}=t,c=b=>{i||(i=!0,n(b,a))},f=b=>{i||(i=!0,r(b,a))},g=o.length,$=[];if(!g)return f([]);let v={value:a,originalValue:l,path:u,options:d,schema:this};for(let b=0;b<o.length;b++){const w=o[b];w(v,c,function(p){p&&($=$.concat(p)),--g<=0&&f($)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:o,options:a}){const l=t??n;if(l==null)throw TypeError("Must include `key` or `index` for nested validations");const u=typeof l=="number";let d=r[l];const c=Object.assign({},a,{strict:!0,parent:r,value:d,originalValue:o[l],key:void 0,[u?"index":"key"]:l,path:u||l.includes(".")?`${i||""}[${d?l:`"${l}"`}]`:(i?`${i}.`:"")+t});return(f,g,$)=>this.resolve(c)._validate(d,c,g,$)}validate(t,n){let r=this.resolve(Object.assign({},n,{value:t}));return new Promise((i,o)=>r._validate(t,n,(a,l)=>{Vt.isError(a)&&(a.value=l),o(a)},(a,l)=>{a.length?o(new Vt(a,l)):i(l)}))}validateSync(t,n){let r=this.resolve(Object.assign({},n,{value:t})),i;return r._validate(t,Object.assign({},n,{sync:!0}),(o,a)=>{throw Vt.isError(o)&&(o.value=a),o},(o,a)=>{if(o.length)throw new Vt(o,t);i=a}),i}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(Vt.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(Vt.isError(r))return!1;throw r}}_getDefault(){let t=this.spec.default;return t==null?t:typeof t=="function"?t.call(this):aa(t)}getDefault(t){return this.resolve(t||{})._getDefault()}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=go({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=go({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=lr.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=lr.notNull){return this.nullability(!1,t)}required(t=lr.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=lr.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=go(n),o=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===n.name&&(o||a.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=Ib(t).map(o=>new Si(o));return i.forEach(o=>{o.isSibling&&r.deps.push(o.key)}),r.conditions.push(typeof n=="function"?new oc(i,n):oc.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=go({message:t,name:"typeError",test(r){return!qn(r)&&!this.schema._typeCheck(r)?this.createError({params:{type:this.schema.type}}):!0}}),n}oneOf(t,n=lr.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=go({message:n,name:"oneOf",skipAbsent:!0,test(i){let o=this.schema._whitelist,a=o.resolveAll(this.resolve);return a.includes(i)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:a}})}}),r}notOneOf(t,n=lr.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=go({message:n,name:"notOneOf",test(i){let o=this.schema._blacklist,a=o.resolveAll(this.resolve);return a.includes(i)?this.createError({params:{values:Array.from(o).join(", "),resolved:a}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:o,nullable:a}=n.spec;return{meta:i,label:r,optional:o,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(u=>({name:u.OPTIONS.name,params:u.OPTIONS.params})).filter((u,d,c)=>c.findIndex(f=>f.name===u.name)===d)}}}Rn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])Rn.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:o,schema:a}=_I(this,t,n,r.context);return a[e](i&&i[o],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])Rn.prototype[e]=Rn.prototype.oneOf;for(const e of["not","nope"])Rn.prototype[e]=Rn.prototype.notOneOf;let kI=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,NI=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,EI=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,II=e=>qn(e)||e===e.trim(),TI={}.toString();function fr(){return new Tb}class Tb extends Rn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===TI?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||lr.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=wn.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=wn.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=wn.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,o;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:o}=n:i=n),this.test({name:o||"matches",message:i||wn.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&r||a.search(t)!==-1})}email(t=wn.email){return this.matches(kI,{name:"email",message:t,excludeEmptyString:!0})}url(t=wn.url){return this.matches(NI,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=wn.uuid){return this.matches(EI,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=wn.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:II})}lowercase(t=wn.lowercase){return this.transform(n=>qn(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>qn(n)||n===n.toLowerCase()})}uppercase(t=wn.uppercase){return this.transform(n=>qn(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>qn(n)||n===n.toUpperCase()})}}fr.prototype=Tb.prototype;let AI=e=>e!=+e;function Ab(){return new Rb}class Rb extends Rn{constructor(){super({type:"number",check(t){return t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&!AI(t)}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce)return t;let i=t;if(typeof i=="string"){if(i=i.replace(/\s/g,""),i==="")return NaN;i=+i}return r.isType(i)?i:parseFloat(i)})})}min(t,n=zr.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r>=this.resolve(t)}})}max(t,n=zr.max){return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(r){return r<=this.resolve(t)}})}lessThan(t,n=zr.lessThan){return this.test({message:n,name:"max",exclusive:!0,params:{less:t},skipAbsent:!0,test(r){return r<this.resolve(t)}})}moreThan(t,n=zr.moreThan){return this.test({message:n,name:"min",exclusive:!0,params:{more:t},skipAbsent:!0,test(r){return r>this.resolve(t)}})}positive(t=zr.positive){return this.moreThan(0,t)}negative(t=zr.negative){return this.lessThan(0,t)}integer(t=zr.integer){return this.test({name:"integer",message:t,skipAbsent:!0,test:n=>Number.isInteger(n)})}truncate(){return this.transform(t=>qn(t)?t:t|0)}round(t){var n;let r=["ceil","floor","round","trunc"];if(t=((n=t)==null?void 0:n.toLowerCase())||"round",t==="trunc")return this.truncate();if(r.indexOf(t.toLowerCase())===-1)throw new TypeError("Only valid options for round() are: "+r.join(", "));return this.transform(i=>qn(i)?i:Math[t](i))}}Ab.prototype=Rb.prototype;var RI=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function FI(e){var t=[1,4,5,6,7,10,11],n=0,r,i;if(i=RI.exec(e)){for(var o=0,a;a=t[o];++o)i[a]=+i[a]||0;i[2]=(+i[2]||1)-1,i[3]=+i[3]||1,i[7]=i[7]?String(i[7]).substr(0,3):0,(i[8]===void 0||i[8]==="")&&(i[9]===void 0||i[9]==="")?r=+new Date(i[1],i[2],i[3],i[4],i[5],i[6],i[7]):(i[8]!=="Z"&&i[9]!==void 0&&(n=i[10]*60+i[11],i[9]==="+"&&(n=0-n)),r=Date.UTC(i[1],i[2],i[3],i[4],i[5]+n,i[6],i[7]))}else r=Date.parse?Date.parse(e):NaN;return r}let DI=new Date(""),MI=e=>Object.prototype.toString.call(e)==="[object Date]";class gf extends Rn{constructor(){super({type:"date",check(t){return MI(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)?t:(t=FI(t),isNaN(t)?gf.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Si.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=I1.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=I1.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}gf.INVALID_DATE=DI;gf.prototype;function LI(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([a,l])=>`${a}-${l}`));function o(a,l){let u=Zi.split(a)[0];r.add(u),i.has(`${l}-${u}`)||n.push([l,u])}for(const a of Object.keys(e)){let l=e[a];r.add(a),Si.isRef(l)&&l.isSibling?o(l.path,a):Sm(l)&&"deps"in l&&l.deps.forEach(u=>o(u,a))}return ic.array(Array.from(r),n).reverse()}function p3(e,t){let n=1/0;return e.some((r,i)=>{var o;if((o=t.path)!=null&&o.includes(r))return n=i,!0}),n}function Fb(e){return(t,n)=>p3(e,t)-p3(e,n)}const jI=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function ld(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=ld(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=ld(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(ld)}):"optional"in e?e.optional():e}const zI=(e,t)=>{const n=[...Zi.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=Zi.getter(Zi.join(n),!0)(e);return!!(i&&r in i)};let g3=e=>Object.prototype.toString.call(e)==="[object Object]";function UI(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const BI=Fb([]);function Cm(e){return new Db(e)}class Db extends Rn{constructor(t){super({type:"object",check(n){return g3(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=BI,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault();if(!this._typeCheck(i))return i;let o=this.fields,a=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,l=[].concat(this._nodes,Object.keys(i).filter(f=>!this._nodes.includes(f))),u={},d=Object.assign({},n,{parent:u,__validating:n.__validating||!1}),c=!1;for(const f of l){let g=o[f],$=f in i;if(g){let v,b=i[f];d.path=(n.path?`${n.path}.`:"")+f,g=g.resolve({value:b,context:n.context,parent:u});let w=g instanceof Rn?g.spec:void 0,m=w==null?void 0:w.strict;if(w!=null&&w.strip){c=c||f in i;continue}v=!n.__validating||!m?g.cast(i[f],d):i[f],v!==void 0&&(u[f]=v)}else $&&!a&&(u[f]=i[f]);($!==f in u||u[f]!==i[f])&&(c=!0)}return c?u:i}_validate(t,n={},r,i){let{from:o=[],originalValue:a=t,recursive:l=this.spec.recursive}=n;n.from=[{schema:this,value:a},...o],n.__validating=!0,n.originalValue=a,super._validate(t,n,r,(u,d)=>{if(!l||!g3(d)){i(u,d);return}a=a||d;let c=[];for(let f of this._nodes){let g=this.fields[f];!g||Si.isRef(g)||c.push(g.asNestedTest({options:n,key:f,parent:d,parentPath:n.path,originalParent:a}))}this.runTests({tests:c,value:d,originalValue:a,options:n},r,f=>{i(f.sort(this._sortErrors).concat(u),d)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,o]of Object.entries(this.fields)){const a=r[i];r[i]=a===void 0?o:a}return n.withMutation(i=>i.setFields(r,this._excludedEdges))}_getDefault(){if("default"in this.spec)return super._getDefault();if(!this._nodes.length)return;let t={};return this._nodes.forEach(n=>{const r=this.fields[n];t[n]=r&&"getDefault"in r?r.getDefault():void 0}),t}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=LI(t,n),r._sortErrors=Fb(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return ld(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n)}omit(t){const n=Object.assign({},this.fields);for(const r of t)delete n[r];return this.setFields(n)}from(t,n,r){let i=Zi.getter(t,!0);return this.transform(o=>{if(!o)return o;let a=o;return zI(o,t)&&(a=Object.assign({},o),r||delete a[t],a[n]=i(o)),a})}json(){return this.transform(jI)}noUnknown(t=!0,n=T1.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const o=UI(this.schema,i);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=T1.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(Nh.camelCase)}snakeCase(){return this.transformKeys(Nh.snakeCase)}constantCase(){return this.transformKeys(t=>Nh.snakeCase(t).toUpperCase())}describe(t){let n=super.describe(t);n.fields={};for(const[i,o]of Object.entries(this.fields)){var r;let a=t;(r=a)!=null&&r.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[i]})),n.fields[i]=o.describe(a)}return n}}Cm.prototype=Db.prototype;var Al=e=>e.type==="checkbox",sa=e=>e instanceof Date,Et=e=>e==null;const Mb=e=>typeof e=="object";var ut=e=>!Et(e)&&!Array.isArray(e)&&Mb(e)&&!sa(e),HI=e=>ut(e)&&e.target?Al(e.target)?e.target.checked:e.target.value:e,YI=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,WI=(e,t)=>e.has(YI(t)),VI=e=>{const t=e.constructor&&e.constructor.prototype;return ut(t)&&t.hasOwnProperty("isPrototypeOf")},Pm=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Ui(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Pm&&(e instanceof Blob||e instanceof FileList))&&(n||ut(e)))if(t=n?[]:{},!Array.isArray(e)&&!VI(e))t=e;else for(const r in e)t[r]=Ui(e[r]);else return e;return t}var Rl=e=>Array.isArray(e)?e.filter(Boolean):[],tt=e=>e===void 0,ce=(e,t,n)=>{if(!t||!ut(e))return n;const r=Rl(t.split(/[,[\].]+?/)).reduce((i,o)=>Et(i)?i:i[o],e);return tt(r)||r===e?tt(e[t])?n:e[t]:r};const m3={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},_n={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},nr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ne.createContext(null);var qI=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const a=o;return t._proxyFormState[a]!==_n.all&&(t._proxyFormState[a]=!r||_n.all),n&&(n[a]=!0),e[a]}});return i},an=e=>ut(e)&&!Object.keys(e).length,GI=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return an(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(a=>t[a]===(!r||_n.all))},Eh=e=>Array.isArray(e)?e:[e];function QI(e){const t=ne.useRef(e);t.current=e,ne.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var Gn=e=>typeof e=="string",KI=(e,t,n,r,i)=>Gn(e)?(r&&t.watch.add(e),ce(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),ce(n,o))):(r&&(t.watchAll=!0),n),Om=e=>/^\w*$/.test(e),Lb=e=>Rl(e.replace(/["|']|\]/g,"").split(/\.|\[/));function je(e,t,n){let r=-1;const i=Om(t)?[t]:Lb(t),o=i.length,a=o-1;for(;++r<o;){const l=i[r];let u=n;if(r!==a){const d=e[l];u=ut(d)||Array.isArray(d)?d:isNaN(+i[r+1])?{}:[]}e[l]=u,e=e[l]}return e}var jb=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{};const A1=(e,t,n)=>{for(const r of n||Object.keys(e)){const i=ce(e,r);if(i){const{_f:o,...a}=i;if(o&&t(o.name)){if(o.ref.focus){o.ref.focus();break}else if(o.refs&&o.refs[0].focus){o.refs[0].focus();break}}else ut(a)&&A1(a,t)}}};var y3=e=>({isOnSubmit:!e||e===_n.onSubmit,isOnBlur:e===_n.onBlur,isOnChange:e===_n.onChange,isOnAll:e===_n.all,isOnTouch:e===_n.onTouched}),v3=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),ZI=(e,t,n)=>{const r=Rl(ce(e,n));return je(r,"root",t[n]),je(e,n,r),e},ma=e=>typeof e=="boolean",_m=e=>e.type==="file",Kr=e=>typeof e=="function",sc=e=>{if(!Pm)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},ud=e=>Gn(e),km=e=>e.type==="radio",lc=e=>e instanceof RegExp;const x3={value:!1,isValid:!1},$3={value:!0,isValid:!0};var zb=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!tt(e[0].attributes.value)?tt(e[0].value)||e[0].value===""?$3:{value:e[0].value,isValid:!0}:$3:x3}return x3};const b3={isValid:!1,value:null};var Ub=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,b3):b3;function w3(e,t,n="validate"){if(ud(e)||Array.isArray(e)&&e.every(ud)||ma(e)&&!e)return{type:n,message:ud(e)?e:"",ref:t}}var mo=e=>ut(e)&&!lc(e)?e:{value:e,message:""},S3=async(e,t,n,r,i)=>{const{ref:o,refs:a,required:l,maxLength:u,minLength:d,min:c,max:f,pattern:g,validate:$,name:v,valueAsNumber:b,mount:w,disabled:m}=e._f,p=ce(t,v);if(!w||m)return{};const x=a?a[0]:o,S=M=>{r&&x.reportValidity&&(x.setCustomValidity(ma(M)?"":M||""),x.reportValidity())},P={},_=km(o),T=Al(o),R=_||T,Y=(b||_m(o))&&tt(o.value)&&tt(p)||sc(o)&&o.value===""||p===""||Array.isArray(p)&&!p.length,z=jb.bind(null,v,n,P),ie=(M,L,J,F=nr.maxLength,ee=nr.minLength)=>{const te=M?L:J;P[v]={type:M?F:ee,message:te,ref:o,...z(M?F:ee,te)}};if(i?!Array.isArray(p)||!p.length:l&&(!R&&(Y||Et(p))||ma(p)&&!p||T&&!zb(a).isValid||_&&!Ub(a).isValid)){const{value:M,message:L}=ud(l)?{value:!!l,message:l}:mo(l);if(M&&(P[v]={type:nr.required,message:L,ref:x,...z(nr.required,L)},!n))return S(L),P}if(!Y&&(!Et(c)||!Et(f))){let M,L;const J=mo(f),F=mo(c);if(!Et(p)&&!isNaN(p)){const ee=o.valueAsNumber||p&&+p;Et(J.value)||(M=ee>J.value),Et(F.value)||(L=ee<F.value)}else{const ee=o.valueAsDate||new Date(p),te=E=>new Date(new Date().toDateString()+" "+E),j=o.type=="time",N=o.type=="week";Gn(J.value)&&p&&(M=j?te(p)>te(J.value):N?p>J.value:ee>new Date(J.value)),Gn(F.value)&&p&&(L=j?te(p)<te(F.value):N?p<F.value:ee<new Date(F.value))}if((M||L)&&(ie(!!M,J.message,F.message,nr.max,nr.min),!n))return S(P[v].message),P}if((u||d)&&!Y&&(Gn(p)||i&&Array.isArray(p))){const M=mo(u),L=mo(d),J=!Et(M.value)&&p.length>+M.value,F=!Et(L.value)&&p.length<+L.value;if((J||F)&&(ie(J,M.message,L.message),!n))return S(P[v].message),P}if(g&&!Y&&Gn(p)){const{value:M,message:L}=mo(g);if(lc(M)&&!p.match(M)&&(P[v]={type:nr.pattern,message:L,ref:o,...z(nr.pattern,L)},!n))return S(L),P}if($){if(Kr($)){const M=await $(p,t),L=w3(M,x);if(L&&(P[v]={...L,...z(nr.validate,L.message)},!n))return S(L.message),P}else if(ut($)){let M={};for(const L in $){if(!an(M)&&!n)break;const J=w3(await $[L](p,t),x,L);J&&(M={...J,...z(L,J.message)},S(J.message),n&&(P[v]=M))}if(!an(M)&&(P[v]={ref:x,...M},!n))return P}}return S(!0),P};function JI(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=tt(e)?r++:e[t[r++]];return e}function XI(e){for(const t in e)if(!tt(e[t]))return!1;return!0}function mt(e,t){const n=Array.isArray(t)?t:Om(t)?[t]:Lb(t),r=n.length===1?e:JI(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(ut(r)&&an(r)||Array.isArray(r)&&XI(r))&&mt(e,n.slice(0,-1)),e}function Ih(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var uc=e=>Et(e)||!Mb(e);function Vi(e,t){if(uc(e)||uc(t))return e===t;if(sa(e)&&sa(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const a=t[i];if(sa(o)&&sa(a)||ut(o)&&ut(a)||Array.isArray(o)&&Array.isArray(a)?!Vi(o,a):o!==a)return!1}}return!0}var Bb=e=>e.type==="select-multiple",eT=e=>km(e)||Al(e),Th=e=>sc(e)&&e.isConnected,Hb=e=>{for(const t in e)if(Kr(e[t]))return!0;return!1};function dc(e,t={}){const n=Array.isArray(e);if(ut(e)||n)for(const r in e)Array.isArray(e[r])||ut(e[r])&&!Hb(e[r])?(t[r]=Array.isArray(e[r])?[]:{},dc(e[r],t[r])):Et(e[r])||(t[r]=!0);return t}function Yb(e,t,n){const r=Array.isArray(e);if(ut(e)||r)for(const i in e)Array.isArray(e[i])||ut(e[i])&&!Hb(e[i])?tt(t)||uc(n[i])?n[i]=Array.isArray(e[i])?dc(e[i],[]):{...dc(e[i])}:Yb(e[i],Et(t)?{}:t[i],n[i]):n[i]=!Vi(e[i],t[i]);return n}var Ah=(e,t)=>Yb(e,t,dc(t)),Wb=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>tt(e)?e:t?e===""?NaN:e&&+e:n&&Gn(e)?new Date(e):r?r(e):e;function Rh(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return _m(t)?t.files:km(t)?Ub(e.refs).value:Bb(t)?[...t.selectedOptions].map(({value:n})=>n):Al(t)?zb(e.refs).value:Wb(tt(t.value)?e.ref.value:t.value,e)}var tT=(e,t,n,r)=>{const i={};for(const o of e){const a=ce(t,o);a&&je(i,o,a._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},rs=e=>tt(e)?e:lc(e)?e.source:ut(e)?lc(e.value)?e.value.source:e.value:e,nT=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function C3(e,t,n){const r=ce(e,n);if(r||Om(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),a=ce(t,o),l=ce(e,o);if(a&&!Array.isArray(a)&&n!==o)return{name:n};if(l&&l.type)return{name:o,error:l};i.pop()}return{name:n}}var rT=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,iT=(e,t)=>!Rl(ce(e,t)).length&&mt(e,t);const oT={mode:_n.onSubmit,reValidateMode:_n.onChange,shouldFocusError:!0};function aT(e={},t){let n={...oT,...e},r={submitCount:0,isDirty:!1,isLoading:Kr(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},o=ut(n.defaultValues)||ut(n.values)?Ui(n.defaultValues||n.values)||{}:{},a=n.shouldUnregister?{}:Ui(o),l={action:!1,mount:!1,watch:!1},u={mount:new Set,unMount:new Set,array:new Set,watch:new Set},d,c=0;const f={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={values:Ih(),array:Ih(),state:Ih()},$=e.resetOptions&&e.resetOptions.keepDirtyValues,v=y3(n.mode),b=y3(n.reValidateMode),w=n.criteriaMode===_n.all,m=O=>I=>{clearTimeout(c),c=setTimeout(O,I)},p=async O=>{if(f.isValid||O){const I=n.resolver?an((await Y()).errors):await ie(i,!0);I!==r.isValid&&g.state.next({isValid:I})}},x=O=>f.isValidating&&g.state.next({isValidating:O}),S=(O,I=[],A,re,q=!0,V=!0)=>{if(re&&A){if(l.action=!0,V&&Array.isArray(ce(i,O))){const se=A(ce(i,O),re.argA,re.argB);q&&je(i,O,se)}if(V&&Array.isArray(ce(r.errors,O))){const se=A(ce(r.errors,O),re.argA,re.argB);q&&je(r.errors,O,se),iT(r.errors,O)}if(f.touchedFields&&V&&Array.isArray(ce(r.touchedFields,O))){const se=A(ce(r.touchedFields,O),re.argA,re.argB);q&&je(r.touchedFields,O,se)}f.dirtyFields&&(r.dirtyFields=Ah(o,a)),g.state.next({name:O,isDirty:L(O,I),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else je(a,O,I)},P=(O,I)=>{je(r.errors,O,I),g.state.next({errors:r.errors})},_=(O,I,A,re)=>{const q=ce(i,O);if(q){const V=ce(a,O,tt(A)?ce(o,O):A);tt(V)||re&&re.defaultChecked||I?je(a,O,I?V:Rh(q._f)):ee(O,V),l.mount&&p()}},T=(O,I,A,re,q)=>{let V=!1,se=!1;const ve={name:O};if(!A||re){f.isDirty&&(se=r.isDirty,r.isDirty=ve.isDirty=L(),V=se!==ve.isDirty);const ae=Vi(ce(o,O),I);se=ce(r.dirtyFields,O),ae?mt(r.dirtyFields,O):je(r.dirtyFields,O,!0),ve.dirtyFields=r.dirtyFields,V=V||f.dirtyFields&&se!==!ae}if(A){const ae=ce(r.touchedFields,O);ae||(je(r.touchedFields,O,A),ve.touchedFields=r.touchedFields,V=V||f.touchedFields&&ae!==A)}return V&&q&&g.state.next(ve),V?ve:{}},R=(O,I,A,re)=>{const q=ce(r.errors,O),V=f.isValid&&ma(I)&&r.isValid!==I;if(e.delayError&&A?(d=m(()=>P(O,A)),d(e.delayError)):(clearTimeout(c),d=null,A?je(r.errors,O,A):mt(r.errors,O)),(A?!Vi(q,A):q)||!an(re)||V){const se={...re,...V&&ma(I)?{isValid:I}:{},errors:r.errors,name:O};r={...r,...se},g.state.next(se)}x(!1)},Y=async O=>n.resolver(a,n.context,tT(O||u.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),z=async O=>{const{errors:I}=await Y();if(O)for(const A of O){const re=ce(I,A);re?je(r.errors,A,re):mt(r.errors,A)}else r.errors=I;return I},ie=async(O,I,A={valid:!0})=>{for(const re in O){const q=O[re];if(q){const{_f:V,...se}=q;if(V){const ve=u.array.has(V.name),ae=await S3(q,a,w,n.shouldUseNativeValidation&&!I,ve);if(ae[V.name]&&(A.valid=!1,I))break;!I&&(ce(ae,V.name)?ve?ZI(r.errors,ae,V.name):je(r.errors,V.name,ae[V.name]):mt(r.errors,V.name))}se&&await ie(se,I,A)}}return A.valid},M=()=>{for(const O of u.unMount){const I=ce(i,O);I&&(I._f.refs?I._f.refs.every(A=>!Th(A)):!Th(I._f.ref))&&k(O)}u.unMount=new Set},L=(O,I)=>(O&&I&&je(a,O,I),!Vi(U(),o)),J=(O,I,A)=>KI(O,u,{...l.mount?a:tt(I)?o:Gn(O)?{[O]:I}:I},A,I),F=O=>Rl(ce(l.mount?a:o,O,e.shouldUnregister?ce(o,O,[]):[])),ee=(O,I,A={})=>{const re=ce(i,O);let q=I;if(re){const V=re._f;V&&(!V.disabled&&je(a,O,Wb(I,V)),q=sc(V.ref)&&Et(I)?"":I,Bb(V.ref)?[...V.ref.options].forEach(se=>se.selected=q.includes(se.value)):V.refs?Al(V.ref)?V.refs.length>1?V.refs.forEach(se=>(!se.defaultChecked||!se.disabled)&&(se.checked=Array.isArray(q)?!!q.find(ve=>ve===se.value):q===se.value)):V.refs[0]&&(V.refs[0].checked=!!q):V.refs.forEach(se=>se.checked=se.value===q):_m(V.ref)?V.ref.value="":(V.ref.value=q,V.ref.type||g.values.next({name:O,values:{...a}})))}(A.shouldDirty||A.shouldTouch)&&T(O,q,A.shouldTouch,A.shouldDirty,!0),A.shouldValidate&&E(O)},te=(O,I,A)=>{for(const re in I){const q=I[re],V=`${O}.${re}`,se=ce(i,V);(u.array.has(O)||!uc(q)||se&&!se._f)&&!sa(q)?te(V,q,A):ee(V,q,A)}},j=(O,I,A={})=>{const re=ce(i,O),q=u.array.has(O),V=Ui(I);je(a,O,V),q?(g.array.next({name:O,values:{...a}}),(f.isDirty||f.dirtyFields)&&A.shouldDirty&&g.state.next({name:O,dirtyFields:Ah(o,a),isDirty:L(O,V)})):re&&!re._f&&!Et(V)?te(O,V,A):ee(O,V,A),v3(O,u)&&g.state.next({...r}),g.values.next({name:O,values:{...a}}),!l.mount&&t()},N=async O=>{const I=O.target;let A=I.name,re=!0;const q=ce(i,A),V=()=>I.type?Rh(q._f):HI(O);if(q){let se,ve;const ae=V(),Te=O.type===m3.BLUR||O.type===m3.FOCUS_OUT,qa=!nT(q._f)&&!n.resolver&&!ce(r.errors,A)&&!q._f.deps||rT(Te,ce(r.touchedFields,A),r.isSubmitted,b,v),Ci=v3(A,u,Te);je(a,A,ae),Te?(q._f.onBlur&&q._f.onBlur(O),d&&d(0)):q._f.onChange&&q._f.onChange(O);const rn=T(A,ae,Te,!1),w8=!an(rn)||Ci;if(!Te&&g.values.next({name:A,type:O.type,values:{...a}}),qa)return f.isValid&&p(),w8&&g.state.next({name:A,...Ci?{}:rn});if(!Te&&Ci&&g.state.next({...r}),x(!0),n.resolver){const{errors:xy}=await Y([A]),S8=C3(r.errors,i,A),$y=C3(xy,i,S8.name||A);se=$y.error,A=$y.name,ve=an(xy)}else se=(await S3(q,a,w,n.shouldUseNativeValidation))[A],re=isNaN(ae)||ae===ce(a,A,ae),re&&(se?ve=!1:f.isValid&&(ve=await ie(i,!0)));re&&(q._f.deps&&E(q._f.deps),R(A,ve,se,rn))}},E=async(O,I={})=>{let A,re;const q=Eh(O);if(x(!0),n.resolver){const V=await z(tt(O)?O:q);A=an(V),re=O?!q.some(se=>ce(V,se)):A}else O?(re=(await Promise.all(q.map(async V=>{const se=ce(i,V);return await ie(se&&se._f?{[V]:se}:se)}))).every(Boolean),!(!re&&!r.isValid)&&p()):re=A=await ie(i);return g.state.next({...!Gn(O)||f.isValid&&A!==r.isValid?{}:{name:O},...n.resolver||!O?{isValid:A}:{},errors:r.errors,isValidating:!1}),I.shouldFocus&&!re&&A1(i,V=>V&&ce(r.errors,V),O?q:u.mount),re},U=O=>{const I={...o,...l.mount?a:{}};return tt(O)?I:Gn(O)?ce(I,O):O.map(A=>ce(I,A))},D=(O,I)=>({invalid:!!ce((I||r).errors,O),isDirty:!!ce((I||r).dirtyFields,O),isTouched:!!ce((I||r).touchedFields,O),error:ce((I||r).errors,O)}),H=O=>{O&&Eh(O).forEach(I=>mt(r.errors,I)),g.state.next({errors:O?r.errors:{}})},W=(O,I,A)=>{const re=(ce(i,O,{_f:{}})._f||{}).ref;je(r.errors,O,{...I,ref:re}),g.state.next({name:O,errors:r.errors,isValid:!1}),A&&A.shouldFocus&&re&&re.focus&&re.focus()},oe=(O,I)=>Kr(O)?g.values.subscribe({next:A=>O(J(void 0,I),A)}):J(O,I,!0),k=(O,I={})=>{for(const A of O?Eh(O):u.mount)u.mount.delete(A),u.array.delete(A),I.keepValue||(mt(i,A),mt(a,A)),!I.keepError&&mt(r.errors,A),!I.keepDirty&&mt(r.dirtyFields,A),!I.keepTouched&&mt(r.touchedFields,A),!n.shouldUnregister&&!I.keepDefaultValue&&mt(o,A);g.values.next({values:{...a}}),g.state.next({...r,...I.keepDirty?{isDirty:L()}:{}}),!I.keepIsValid&&p()},de=(O,I={})=>{let A=ce(i,O);const re=ma(I.disabled);return je(i,O,{...A||{},_f:{...A&&A._f?A._f:{ref:{name:O}},name:O,mount:!0,...I}}),u.mount.add(O),A?re&&je(a,O,I.disabled?void 0:ce(a,O,Rh(A._f))):_(O,!0,I.value),{...re?{disabled:I.disabled}:{},...n.shouldUseNativeValidation?{required:!!I.required,min:rs(I.min),max:rs(I.max),minLength:rs(I.minLength),maxLength:rs(I.maxLength),pattern:rs(I.pattern)}:{},name:O,onChange:N,onBlur:N,ref:q=>{if(q){de(O,I),A=ce(i,O);const V=tt(q.value)&&q.querySelectorAll&&q.querySelectorAll("input,select,textarea")[0]||q,se=eT(V),ve=A._f.refs||[];if(se?ve.find(ae=>ae===V):V===A._f.ref)return;je(i,O,{_f:{...A._f,...se?{refs:[...ve.filter(Th),V,...Array.isArray(ce(o,O))?[{}]:[]],ref:{type:V.type,name:O}}:{ref:V}}}),_(O,!1,void 0,V)}else A=ce(i,O,{}),A._f&&(A._f.mount=!1),(n.shouldUnregister||I.shouldUnregister)&&!(WI(u.array,O)&&l.action)&&u.unMount.add(O)}}},Z=()=>n.shouldFocusError&&A1(i,O=>O&&ce(r.errors,O),u.mount),Ce=(O,I)=>async A=>{A&&(A.preventDefault&&A.preventDefault(),A.persist&&A.persist());let re=Ui(a);if(g.state.next({isSubmitting:!0}),n.resolver){const{errors:q,values:V}=await Y();r.errors=q,re=V}else await ie(i);mt(r.errors,"root"),an(r.errors)?(g.state.next({errors:{}}),await O(re,A)):(I&&await I({...r.errors},A),Z(),setTimeout(Z)),g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:an(r.errors),submitCount:r.submitCount+1,errors:r.errors})},me=(O,I={})=>{ce(i,O)&&(tt(I.defaultValue)?j(O,ce(o,O)):(j(O,I.defaultValue),je(o,O,I.defaultValue)),I.keepTouched||mt(r.touchedFields,O),I.keepDirty||(mt(r.dirtyFields,O),r.isDirty=I.defaultValue?L(O,ce(o,O)):L()),I.keepError||(mt(r.errors,O),f.isValid&&p()),g.state.next({...r}))},ge=(O,I={})=>{const A=O||o,re=Ui(A),q=O&&!an(O)?re:o;if(I.keepDefaultValues||(o=A),!I.keepValues){if(I.keepDirtyValues||$)for(const V of u.mount)ce(r.dirtyFields,V)?je(q,V,ce(a,V)):j(V,ce(q,V));else{if(Pm&&tt(O))for(const V of u.mount){const se=ce(i,V);if(se&&se._f){const ve=Array.isArray(se._f.refs)?se._f.refs[0]:se._f.ref;if(sc(ve)){const ae=ve.closest("form");if(ae){ae.reset();break}}}}i={}}a=e.shouldUnregister?I.keepDefaultValues?Ui(o):{}:re,g.array.next({values:{...q}}),g.values.next({values:{...q}})}u={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&t(),l.mount=!f.isValid||!!I.keepIsValid,l.watch=!!e.shouldUnregister,g.state.next({submitCount:I.keepSubmitCount?r.submitCount:0,isDirty:I.keepDirty?r.isDirty:!!(I.keepDefaultValues&&!Vi(O,o)),isSubmitted:I.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:I.keepDirtyValues?r.dirtyFields:I.keepDefaultValues&&O?Ah(o,O):{},touchedFields:I.keepTouched?r.touchedFields:{},errors:I.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},he=(O,I)=>ge(Kr(O)?O(a):O,I);return{control:{register:de,unregister:k,getFieldState:D,_executeSchema:Y,_getWatch:J,_getDirty:L,_updateValid:p,_removeUnmounted:M,_updateFieldArray:S,_getFieldArray:F,_reset:ge,_resetDefaultValues:()=>Kr(n.defaultValues)&&n.defaultValues().then(O=>{he(O,n.resetOptions),g.state.next({isLoading:!1})}),_updateFormState:O=>{r={...r,...O}},_subjects:g,_proxyFormState:f,get _fields(){return i},get _formValues(){return a},get _state(){return l},set _state(O){l=O},get _defaultValues(){return o},get _names(){return u},set _names(O){u=O},get _formState(){return r},set _formState(O){r=O},get _options(){return n},set _options(O){n={...n,...O}}},trigger:E,register:de,handleSubmit:Ce,watch:oe,setValue:j,getValues:U,reset:he,resetField:me,clearErrors:H,unregister:k,setError:W,setFocus:(O,I={})=>{const A=ce(i,O),re=A&&A._f;if(re){const q=re.refs?re.refs[0]:re.ref;q.focus&&(q.focus(),I.shouldSelect&&q.select())}},getFieldState:D}}function Vb(e={}){const t=ne.useRef(),[n,r]=ne.useState({isDirty:!1,isValidating:!1,isLoading:Kr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Kr(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...aT(e,()=>r(o=>({...o}))),formState:n});const i=t.current.control;return i._options=e,QI({subject:i._subjects.state,next:o=>{GI(o,i._proxyFormState,i._updateFormState,!0)&&r({...i._formState})}}),ne.useEffect(()=>{e.values&&!Vi(e.values,i._defaultValues)?i._reset(e.values,i._options.resetOptions):i._resetDefaultValues()},[e.values,i]),ne.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=qI(n,i),t.current}var P3=function(e,t,n){if(e&&"reportValidity"in e){var r=ce(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},qb=function(e,t){var n=function(i){var o=t.fields[i];o&&o.ref&&"reportValidity"in o.ref?P3(o.ref,i,e):o.refs&&o.refs.forEach(function(a){return P3(a,i,e)})};for(var r in t.fields)n(r)},sT=function(e,t){t.shouldUseNativeValidation&&qb(e,t);var n={};for(var r in e){var i=ce(t.fields,r);je(n,r,Object.assign(e[r]||{},{ref:i&&i.ref}))}return n},Gb=function(e,t,n){return t===void 0&&(t={}),n===void 0&&(n={}),function(r,i,o){try{return Promise.resolve(function(a,l){try{var u=(t.context,Promise.resolve(e[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},t,{context:i}))).then(function(d){return o.shouldUseNativeValidation&&qb({},o),{values:n.raw?r:d,errors:{}}}))}catch(d){return l(d)}return u&&u.then?u.then(void 0,l):u}(0,function(a){if(!a.inner)throw a;return{values:{},errors:sT((l=a,u=!o.shouldUseNativeValidation&&o.criteriaMode==="all",(l.inner||[]).reduce(function(d,c){if(d[c.path]||(d[c.path]={message:c.message,type:c.type}),u){var f=d[c.path].types,g=f&&f[c.type];d[c.path]=jb(c.path,u,d,c.type,g?[].concat(g,c.message):c.message)}return d},{})),o)};var l,u}))}catch(a){return Promise.reject(a)}}};class Ba{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.push(t),this.onSubscribe(),()=>{this.listeners=this.listeners.filter(n=>n!==t),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}const al=typeof window>"u"||"Deno"in window;function sn(){}function lT(e,t){return typeof e=="function"?e(t):e}function R1(e){return typeof e=="number"&&e>=0&&e!==1/0}function Qb(e,t){return Math.max(e+(t||0)-Date.now(),0)}function xs(e,t,n){return Fl(e)?typeof t=="function"?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function uT(e,t,n){return Fl(e)?typeof t=="function"?{...n,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:typeof e=="function"?{...t,mutationFn:e}:{...e}}function Hr(e,t,n){return Fl(e)?[{...t,queryKey:e},n]:[e||{},t]}function O3(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:a,stale:l}=e;if(Fl(a)){if(r){if(t.queryHash!==Nm(a,t.options))return!1}else if(!cc(t.queryKey,a))return!1}if(n!=="all"){const u=t.isActive();if(n==="active"&&!u||n==="inactive"&&u)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||typeof i<"u"&&i!==t.state.fetchStatus||o&&!o(t))}function _3(e,t){const{exact:n,fetching:r,predicate:i,mutationKey:o}=e;if(Fl(o)){if(!t.options.mutationKey)return!1;if(n){if(qi(t.options.mutationKey)!==qi(o))return!1}else if(!cc(t.options.mutationKey,o))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function Nm(e,t){return((t==null?void 0:t.queryKeyHashFn)||qi)(e)}function qi(e){return JSON.stringify(e,(t,n)=>D1(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function cc(e,t){return Kb(e,t)}function Kb(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!Kb(e[n],t[n])):!1}function Zb(e,t){if(e===t)return e;const n=k3(e)&&k3(t);if(n||D1(e)&&D1(t)){const r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),o=i.length,a=n?[]:{};let l=0;for(let u=0;u<o;u++){const d=n?u:i[u];a[d]=Zb(e[d],t[d]),a[d]===e[d]&&l++}return r===o&&l===r?e:a}return t}function F1(e,t){if(e&&!t||t&&!e)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function k3(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function D1(e){if(!N3(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!N3(n)||!n.hasOwnProperty("isPrototypeOf"))}function N3(e){return Object.prototype.toString.call(e)==="[object Object]"}function Fl(e){return Array.isArray(e)}function Jb(e){return new Promise(t=>{setTimeout(t,e)})}function E3(e){Jb(0).then(e)}function dT(){if(typeof AbortController=="function")return new AbortController}function M1(e,t,n){return n.isDataEqual!=null&&n.isDataEqual(e,t)?e:typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Zb(e,t):t}class cT extends Ba{constructor(){super(),this.setup=t=>{if(!al&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(t){this.focused=t,t&&this.onFocus()}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const fc=new cT;class fT extends Ba{constructor(){super(),this.setup=t=>{if(!al&&window.addEventListener){const n=()=>t();return window.addEventListener("online",n,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(t){this.online=t,t&&this.onOnline()}onOnline(){this.listeners.forEach(t=>{t()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const hc=new fT;function hT(e){return Math.min(1e3*2**e,3e4)}function mf(e){return(e??"online")==="online"?hc.isOnline():!0}class Xb{constructor(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}}function dd(e){return e instanceof Xb}function ew(e){let t=!1,n=0,r=!1,i,o,a;const l=new Promise((w,m)=>{o=w,a=m}),u=w=>{r||($(new Xb(w)),e.abort==null||e.abort())},d=()=>{t=!0},c=()=>{t=!1},f=()=>!fc.isFocused()||e.networkMode!=="always"&&!hc.isOnline(),g=w=>{r||(r=!0,e.onSuccess==null||e.onSuccess(w),i==null||i(),o(w))},$=w=>{r||(r=!0,e.onError==null||e.onError(w),i==null||i(),a(w))},v=()=>new Promise(w=>{i=m=>{const p=r||!f();return p&&w(m),p},e.onPause==null||e.onPause()}).then(()=>{i=void 0,r||e.onContinue==null||e.onContinue()}),b=()=>{if(r)return;let w;try{w=e.fn()}catch(m){w=Promise.reject(m)}Promise.resolve(w).then(g).catch(m=>{var p,x;if(r)return;const S=(p=e.retry)!=null?p:3,P=(x=e.retryDelay)!=null?x:hT,_=typeof P=="function"?P(n,m):P,T=S===!0||typeof S=="number"&&n<S||typeof S=="function"&&S(n,m);if(t||!T){$(m);return}n++,e.onFail==null||e.onFail(n,m),Jb(_).then(()=>{if(f())return v()}).then(()=>{t?$(m):b()})})};return mf(e.networkMode)?b():v().then(b),{promise:l,cancel:u,continue:()=>(i==null?void 0:i())?l:Promise.resolve(),cancelRetry:d,continueRetry:c}}const Em=console;function pT(){let e=[],t=0,n=c=>{c()},r=c=>{c()};const i=c=>{let f;t++;try{f=c()}finally{t--,t||l()}return f},o=c=>{t?e.push(c):E3(()=>{n(c)})},a=c=>(...f)=>{o(()=>{c(...f)})},l=()=>{const c=e;e=[],c.length&&E3(()=>{r(()=>{c.forEach(f=>{n(f)})})})};return{batch:i,batchCalls:a,schedule:o,setNotifyFunction:c=>{n=c},setBatchNotifyFunction:c=>{r=c}}}const Ze=pT();class tw{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),R1(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,t??(al?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class gT extends tw{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||Em,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||mT(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(t,n){const r=M1(this.state.data,t,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){this.dispatch({type:"setState",state:t,setStateOptions:n})}cancel(t){var n;const r=this.promise;return(n=this.retryer)==null||n.cancel(t),r?r.then(sn).catch(sn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!Qb(this.state.dataUpdatedAt,t)}onFocus(){var t;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}onOnline(){var t;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}addObserver(t){this.observers.indexOf(t)===-1&&(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.indexOf(t)!==-1&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,n){var r,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var o;return(o=this.retryer)==null||o.continueRetry(),this.promise}}if(t&&this.setOptions(t),!this.options.queryFn){const $=this.observers.find(v=>v.options.queryFn);$&&this.setOptions($.options)}Array.isArray(this.options.queryKey);const a=dT(),l={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},u=$=>{Object.defineProperty($,"signal",{enumerable:!0,get:()=>{if(a)return this.abortSignalConsumed=!0,a.signal}})};u(l);const d=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(l)):Promise.reject("Missing queryFn"),c={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:d};if(u(c),(r=this.options.behavior)==null||r.onFetch(c),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=c.fetchOptions)==null?void 0:i.meta)){var f;this.dispatch({type:"fetch",meta:(f=c.fetchOptions)==null?void 0:f.meta})}const g=$=>{if(dd($)&&$.silent||this.dispatch({type:"error",error:$}),!dd($)){var v,b,w,m;(v=(b=this.cache.config).onError)==null||v.call(b,$,this),(w=(m=this.cache.config).onSettled)==null||w.call(m,this.state.data,$,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=ew({fn:c.fetchFn,abort:a==null?void 0:a.abort.bind(a),onSuccess:$=>{var v,b,w,m;if(typeof $>"u"){g(new Error("undefined"));return}this.setData($),(v=(b=this.cache.config).onSuccess)==null||v.call(b,$,this),(w=(m=this.cache.config).onSettled)==null||w.call(m,$,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:g,onFail:($,v)=>{this.dispatch({type:"failed",failureCount:$,error:v})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){const n=r=>{var i,o;switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=t.meta)!=null?i:null,fetchStatus:mf(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=t.dataUpdatedAt)!=null?o:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const a=t.error;return dd(a)&&a.revert&&this.revertState?{...this.revertState}:{...r,error:a,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:a,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Ze.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}}function mT(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=typeof t<"u",r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}class yT extends Ba{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,n,r){var i;const o=n.queryKey,a=(i=n.queryHash)!=null?i:Nm(o,n);let l=this.get(a);return l||(l=new gT({cache:this,logger:t.getLogger(),queryKey:o,queryHash:a,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(l)),l}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){const n=this.queriesMap[t.queryHash];n&&(t.destroy(),this.queries=this.queries.filter(r=>r!==t),n===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){Ze.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,n){const[r]=Hr(t,n);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(i=>O3(r,i))}findAll(t,n){const[r]=Hr(t,n);return Object.keys(r).length>0?this.queries.filter(i=>O3(r,i)):this.queries}notify(t){Ze.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Ze.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){Ze.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}}class vT extends tw{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||Em,this.observers=[],this.state=t.state||nw(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.indexOf(t)===-1&&(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(n=>n!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,n;return(t=(n=this.retryer)==null?void 0:n.continue())!=null?t:this.execute()}async execute(){const t=()=>{var T;return this.retryer=ew({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(R,Y)=>{this.dispatch({type:"failed",failureCount:R,error:Y})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(T=this.options.retry)!=null?T:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var r,i,o,a,l,u,d,c;if(!n){var f,g,$,v;this.dispatch({type:"loading",variables:this.options.variables}),await((f=(g=this.mutationCache.config).onMutate)==null?void 0:f.call(g,this.state.variables,this));const R=await(($=(v=this.options).onMutate)==null?void 0:$.call(v,this.state.variables));R!==this.state.context&&this.dispatch({type:"loading",context:R,variables:this.state.variables})}const T=await t();return await((r=(i=this.mutationCache.config).onSuccess)==null?void 0:r.call(i,T,this.state.variables,this.state.context,this)),await((o=(a=this.options).onSuccess)==null?void 0:o.call(a,T,this.state.variables,this.state.context)),await((l=(u=this.mutationCache.config).onSettled)==null?void 0:l.call(u,T,null,this.state.variables,this.state.context,this)),await((d=(c=this.options).onSettled)==null?void 0:d.call(c,T,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:T}),T}catch(T){try{var b,w,m,p,x,S,P,_;throw await((b=(w=this.mutationCache.config).onError)==null?void 0:b.call(w,T,this.state.variables,this.state.context,this)),await((m=(p=this.options).onError)==null?void 0:m.call(p,T,this.state.variables,this.state.context)),await((x=(S=this.mutationCache.config).onSettled)==null?void 0:x.call(S,void 0,T,this.state.variables,this.state.context,this)),await((P=(_=this.options).onSettled)==null?void 0:P.call(_,void 0,T,this.state.variables,this.state.context)),T}finally{this.dispatch({type:"error",error:T})}}}dispatch(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!mf(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...r,...t.state}}};this.state=n(this.state),Ze.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}function nw(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class xT extends Ba{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,n,r){const i=new vT({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(n),state:r,defaultOptions:n.mutationKey?t.getMutationDefaults(n.mutationKey):void 0});return this.add(i),i}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(n=>n!==t),this.notify({type:"removed",mutation:t})}clear(){Ze.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return typeof t.exact>"u"&&(t.exact=!0),this.mutations.find(n=>_3(t,n))}findAll(t){return this.mutations.filter(n=>_3(t,n))}notify(t){Ze.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){var t;return this.resuming=((t=this.resuming)!=null?t:Promise.resolve()).then(()=>{const n=this.mutations.filter(r=>r.state.isPaused);return Ze.batch(()=>n.reduce((r,i)=>r.then(()=>i.continue().catch(sn)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function $T(){return{onFetch:e=>{e.fetchFn=()=>{var t,n,r,i,o,a;const l=(t=e.fetchOptions)==null||(n=t.meta)==null?void 0:n.refetchPage,u=(r=e.fetchOptions)==null||(i=r.meta)==null?void 0:i.fetchMore,d=u==null?void 0:u.pageParam,c=(u==null?void 0:u.direction)==="forward",f=(u==null?void 0:u.direction)==="backward",g=((o=e.state.data)==null?void 0:o.pages)||[],$=((a=e.state.data)==null?void 0:a.pageParams)||[];let v=$,b=!1;const w=_=>{Object.defineProperty(_,"signal",{enumerable:!0,get:()=>{var T;if((T=e.signal)!=null&&T.aborted)b=!0;else{var R;(R=e.signal)==null||R.addEventListener("abort",()=>{b=!0})}return e.signal}})},m=e.options.queryFn||(()=>Promise.reject("Missing queryFn")),p=(_,T,R,Y)=>(v=Y?[T,...v]:[...v,T],Y?[R,..._]:[..._,R]),x=(_,T,R,Y)=>{if(b)return Promise.reject("Cancelled");if(typeof R>"u"&&!T&&_.length)return Promise.resolve(_);const z={queryKey:e.queryKey,pageParam:R,meta:e.options.meta};w(z);const ie=m(z);return Promise.resolve(ie).then(L=>p(_,R,L,Y))};let S;if(!g.length)S=x([]);else if(c){const _=typeof d<"u",T=_?d:I3(e.options,g);S=x(g,_,T)}else if(f){const _=typeof d<"u",T=_?d:bT(e.options,g);S=x(g,_,T,!0)}else{v=[];const _=typeof e.options.getNextPageParam>"u";S=(l&&g[0]?l(g[0],0,g):!0)?x([],_,$[0]):Promise.resolve(p([],$[0],g[0]));for(let R=1;R<g.length;R++)S=S.then(Y=>{if(l&&g[R]?l(g[R],R,g):!0){const ie=_?$[R]:I3(e.options,Y);return x(Y,_,ie)}return Promise.resolve(p(Y,$[R],g[R]))})}return S.then(_=>({pages:_,pageParams:v}))}}}}function I3(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function bT(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}class wT{constructor(t={}){this.queryCache=t.queryCache||new yT,this.mutationCache=t.mutationCache||new xT,this.logger=t.logger||Em,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=fc.subscribe(()=>{fc.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=hc.subscribe(()=>{hc.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,n;this.mountCount--,this.mountCount===0&&((t=this.unsubscribeFocus)==null||t.call(this),this.unsubscribeFocus=void 0,(n=this.unsubscribeOnline)==null||n.call(this),this.unsubscribeOnline=void 0)}isFetching(t,n){const[r]=Hr(t,n);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state.data}ensureQueryData(t,n,r){const i=xs(t,n,r),o=this.getQueryData(i.queryKey);return o?Promise.resolve(o):this.fetchQuery(i)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(t,n,r){const i=this.queryCache.find(t),o=i==null?void 0:i.state.data,a=lT(n,o);if(typeof a>"u")return;const l=xs(t),u=this.defaultQueryOptions(l);return this.queryCache.build(this,u).setData(a,{...r,manual:!0})}setQueriesData(t,n,r){return Ze.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state}removeQueries(t,n){const[r]=Hr(t,n),i=this.queryCache;Ze.batch(()=>{i.findAll(r).forEach(o=>{i.remove(o)})})}resetQueries(t,n,r){const[i,o]=Hr(t,n,r),a=this.queryCache,l={type:"active",...i};return Ze.batch(()=>(a.findAll(i).forEach(u=>{u.reset()}),this.refetchQueries(l,o)))}cancelQueries(t,n,r){const[i,o={}]=Hr(t,n,r);typeof o.revert>"u"&&(o.revert=!0);const a=Ze.batch(()=>this.queryCache.findAll(i).map(l=>l.cancel(o)));return Promise.all(a).then(sn).catch(sn)}invalidateQueries(t,n,r){const[i,o]=Hr(t,n,r);return Ze.batch(()=>{var a,l;if(this.queryCache.findAll(i).forEach(d=>{d.invalidate()}),i.refetchType==="none")return Promise.resolve();const u={...i,type:(a=(l=i.refetchType)!=null?l:i.type)!=null?a:"active"};return this.refetchQueries(u,o)})}refetchQueries(t,n,r){const[i,o]=Hr(t,n,r),a=Ze.batch(()=>this.queryCache.findAll(i).filter(u=>!u.isDisabled()).map(u=>{var d;return u.fetch(void 0,{...o,cancelRefetch:(d=o==null?void 0:o.cancelRefetch)!=null?d:!0,meta:{refetchPage:i.refetchPage}})}));let l=Promise.all(a).then(sn);return o!=null&&o.throwOnError||(l=l.catch(sn)),l}fetchQuery(t,n,r){const i=xs(t,n,r),o=this.defaultQueryOptions(i);typeof o.retry>"u"&&(o.retry=!1);const a=this.queryCache.build(this,o);return a.isStaleByTime(o.staleTime)?a.fetch(o):Promise.resolve(a.state.data)}prefetchQuery(t,n,r){return this.fetchQuery(t,n,r).then(sn).catch(sn)}fetchInfiniteQuery(t,n,r){const i=xs(t,n,r);return i.behavior=$T(),this.fetchQuery(i)}prefetchInfiniteQuery(t,n,r){return this.fetchInfiniteQuery(t,n,r).then(sn).catch(sn)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,n){const r=this.queryDefaults.find(i=>qi(t)===qi(i.queryKey));r?r.defaultOptions=n:this.queryDefaults.push({queryKey:t,defaultOptions:n})}getQueryDefaults(t){if(!t)return;const n=this.queryDefaults.find(r=>cc(t,r.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(t,n){const r=this.mutationDefaults.find(i=>qi(t)===qi(i.mutationKey));r?r.defaultOptions=n:this.mutationDefaults.push({mutationKey:t,defaultOptions:n})}getMutationDefaults(t){if(!t)return;const n=this.mutationDefaults.find(r=>cc(t,r.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(t){if(t!=null&&t._defaulted)return t;const n={...this.defaultOptions.queries,...this.getQueryDefaults(t==null?void 0:t.queryKey),...t,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=Nm(n.queryKey,n)),typeof n.refetchOnReconnect>"u"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary>"u"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(t==null?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}class ST extends Ba{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),T3(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return L1(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return L1(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const r=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),F1(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const o=this.hasListeners();o&&A3(this.currentQuery,i,this.options,r)&&this.executeFetch(),this.updateResult(n),o&&(this.currentQuery!==i||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();const a=this.computeRefetchInterval();o&&(this.currentQuery!==i||this.options.enabled!==r.enabled||a!==this.currentRefetchInterval)&&this.updateRefetchInterval(a)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(r=>{Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),t[r])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),r=this.client.getQueryCache().build(this.client,n);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(sn)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),al||this.currentResult.isStale||!R1(this.options.staleTime))return;const n=Qb(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(al||this.options.enabled===!1||!R1(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||fc.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const r=this.currentQuery,i=this.options,o=this.currentResult,a=this.currentResultState,l=this.currentResultOptions,u=t!==r,d=u?t.state:this.currentQueryInitialState,c=u?this.currentResult:this.previousQueryResult,{state:f}=t;let{dataUpdatedAt:g,error:$,errorUpdatedAt:v,fetchStatus:b,status:w}=f,m=!1,p=!1,x;if(n._optimisticResults){const R=this.hasListeners(),Y=!R&&T3(t,n),z=R&&A3(t,r,n,i);(Y||z)&&(b=mf(t.options.networkMode)?"fetching":"paused",g||(w="loading")),n._optimisticResults==="isRestoring"&&(b="idle")}if(n.keepPreviousData&&!f.dataUpdatedAt&&c!=null&&c.isSuccess&&w!=="error")x=c.data,g=c.dataUpdatedAt,w=c.status,m=!0;else if(n.select&&typeof f.data<"u")if(o&&f.data===(a==null?void 0:a.data)&&n.select===this.selectFn)x=this.selectResult;else try{this.selectFn=n.select,x=n.select(f.data),x=M1(o==null?void 0:o.data,x,n),this.selectResult=x,this.selectError=null}catch(R){this.selectError=R}else x=f.data;if(typeof n.placeholderData<"u"&&typeof x>"u"&&w==="loading"){let R;if(o!=null&&o.isPlaceholderData&&n.placeholderData===(l==null?void 0:l.placeholderData))R=o.data;else if(R=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof R<"u")try{R=n.select(R),this.selectError=null}catch(Y){this.selectError=Y}typeof R<"u"&&(w="success",x=M1(o==null?void 0:o.data,R,n),p=!0)}this.selectError&&($=this.selectError,x=this.selectResult,v=Date.now(),w="error");const S=b==="fetching",P=w==="loading",_=w==="error";return{status:w,fetchStatus:b,isLoading:P,isSuccess:w==="success",isError:_,isInitialLoading:P&&S,data:x,dataUpdatedAt:g,error:$,errorUpdatedAt:v,failureCount:f.fetchFailureCount,failureReason:f.fetchFailureReason,errorUpdateCount:f.errorUpdateCount,isFetched:f.dataUpdateCount>0||f.errorUpdateCount>0,isFetchedAfterMount:f.dataUpdateCount>d.dataUpdateCount||f.errorUpdateCount>d.errorUpdateCount,isFetching:S,isRefetching:S&&!P,isLoadingError:_&&f.dataUpdatedAt===0,isPaused:b==="paused",isPlaceholderData:p,isPreviousData:m,isRefetchError:_&&f.dataUpdatedAt!==0,isStale:Im(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,F1(r,n))return;this.currentResult=r;const i={cache:!0},o=()=>{if(!n)return!0;const{notifyOnChangeProps:a}=this.options;if(a==="all"||!a&&!this.trackedProps.size)return!0;const l=new Set(a??this.trackedProps);return this.options.useErrorBoundary&&l.add("error"),Object.keys(this.currentResult).some(u=>{const d=u;return this.currentResult[d]!==n[d]&&l.has(d)})};(t==null?void 0:t.listeners)!==!1&&o()&&(i.listeners=!0),this.notify({...i,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!dd(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){Ze.batch(()=>{if(t.onSuccess){var n,r,i,o;(n=(r=this.options).onSuccess)==null||n.call(r,this.currentResult.data),(i=(o=this.options).onSettled)==null||i.call(o,this.currentResult.data,null)}else if(t.onError){var a,l,u,d;(a=(l=this.options).onError)==null||a.call(l,this.currentResult.error),(u=(d=this.options).onSettled)==null||u.call(d,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(c=>{c(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function CT(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function T3(e,t){return CT(e,t)||e.state.dataUpdatedAt>0&&L1(e,t,t.refetchOnMount)}function L1(e,t,n){if(t.enabled!==!1){const r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Im(e,t)}return!1}function A3(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Im(e,n)}function Im(e,t){return e.isStaleByTime(t.staleTime)}let PT=class extends Ba{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const r=this.options;this.options=this.client.defaultMutationOptions(t),F1(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.listeners.length){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:nw(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){Ze.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,r,i,o;(n=(r=this.mutateOptions).onSuccess)==null||n.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(i=(o=this.mutateOptions).onSettled)==null||i.call(o,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var a,l,u,d;(a=(l=this.mutateOptions).onError)==null||a.call(l,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(u=(d=this.mutateOptions).onSettled)==null||u.call(d,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(c=>{c(this.currentResult)})})}};var pc={},OT={get exports(){return pc},set exports(e){pc=e}},rw={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta=C;function _T(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kT=typeof Object.is=="function"?Object.is:_T,NT=Ta.useState,ET=Ta.useEffect,IT=Ta.useLayoutEffect,TT=Ta.useDebugValue;function AT(e,t){var n=t(),r=NT({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return IT(function(){i.value=n,i.getSnapshot=t,Fh(i)&&o({inst:i})},[e,n,t]),ET(function(){return Fh(i)&&o({inst:i}),e(function(){Fh(i)&&o({inst:i})})},[e]),TT(n),n}function Fh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kT(e,n)}catch{return!0}}function RT(e,t){return t()}var FT=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?RT:AT;rw.useSyncExternalStore=Ta.useSyncExternalStore!==void 0?Ta.useSyncExternalStore:FT;(function(e){e.exports=rw})(OT);const iw=pc.useSyncExternalStore,R3=C.createContext(void 0),ow=C.createContext(!1);function aw(e,t){return e||(t&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=R3),window.ReactQueryClientContext):R3)}const Ft=({context:e}={})=>{const t=C.useContext(aw(e,C.useContext(ow)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},DT=({client:e,children:t,context:n,contextSharing:r=!1})=>{C.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);const i=aw(n,r);return C.createElement(ow.Provider,{value:!n&&r},C.createElement(i.Provider,{value:e},t))},sw=C.createContext(!1),MT=()=>C.useContext(sw);sw.Provider;function LT(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}const jT=C.createContext(LT()),zT=()=>C.useContext(jT);function lw(e,t){return typeof e=="function"?e(...t):!!e}const UT=(e,t)=>{(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))},BT=e=>{C.useEffect(()=>{e.clearReset()},[e])},HT=({result:e,errorResetBoundary:t,useErrorBoundary:n,query:r})=>e.isError&&!t.isReset()&&!e.isFetching&&lw(n,[e.error,r]),YT=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},WT=(e,t)=>e.isLoading&&e.isFetching&&!t,VT=(e,t,n)=>(e==null?void 0:e.suspense)&&WT(t,n),qT=(e,t,n)=>t.fetchOptimistic(e).then(({data:r})=>{e.onSuccess==null||e.onSuccess(r),e.onSettled==null||e.onSettled(r,null)}).catch(r=>{n.clearReset(),e.onError==null||e.onError(r),e.onSettled==null||e.onSettled(void 0,r)});function GT(e,t){const n=Ft({context:e.context}),r=MT(),i=zT(),o=n.defaultQueryOptions(e);o._optimisticResults=r?"isRestoring":"optimistic",o.onError&&(o.onError=Ze.batchCalls(o.onError)),o.onSuccess&&(o.onSuccess=Ze.batchCalls(o.onSuccess)),o.onSettled&&(o.onSettled=Ze.batchCalls(o.onSettled)),YT(o),UT(o,i),BT(i);const[a]=C.useState(()=>new t(n,o)),l=a.getOptimisticResult(o);if(iw(C.useCallback(u=>r?()=>{}:a.subscribe(Ze.batchCalls(u)),[a,r]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),C.useEffect(()=>{a.setOptions(o,{listeners:!1})},[o,a]),VT(o,l,r))throw qT(o,a,i);if(HT({result:l,errorResetBoundary:i,useErrorBoundary:o.useErrorBoundary,query:a.getCurrentQuery()}))throw l.error;return o.notifyOnChangeProps?l:a.trackResult(l)}function et(e,t,n){const r=xs(e,t,n);return GT(r,ST)}function Ht(e,t,n){const r=uT(e,t,n),i=Ft({context:r.context}),[o]=C.useState(()=>new PT(i,r));C.useEffect(()=>{o.setOptions(r)},[o,r]);const a=iw(C.useCallback(u=>o.subscribe(Ze.batchCalls(u)),[o]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),l=C.useCallback((u,d)=>{o.mutate(u,d).catch(QT)},[o]);if(a.error&&lw(o.options.useErrorBoundary,[a.error]))throw a.error;return{...a,mutate:l,mutateAsync:a.mutate}}function QT(){}const F3=()=>{var $,v,b,w,m,p,x;const[e,t]=C.useState(),[n,r]=C.useState(!0),i=n!==!0,o=Ot(),a=Cm({firstName:fr().required("This field cannot be empty"),lastName:fr().required("This field cannot be empty"),email:fr().email("this is not a valid email").required("This field cannot be empty"),phoneNum:Ab().required("This field cannot be empty"),companyName:fr().required("This field cannot be empty"),password:fr().required("This field cannot be empty"),confirmPassword:fr().oneOf([OI("password"),null],"Password must match")}).required(),{handleSubmit:l,formState:{errors:u},reset:d,register:c}=Vb({resolver:Gb(a)}),f=Ht({mutationKey:["createseler"],mutationFn:VE,onSuccess:S=>{console.log(S),o("/auth/signin")},onError:S=>{console.log(S.message)}}),g=l(S=>{f.mutate(S)});return s("div",{children:s(nA,{children:y(tA,{children:[s(eA,{children:"Seller Account"}),s(XT,{children:"Please enter every necessary information"}),y(JT,{onSubmit:g,children:[y(ki,{children:[s(_i,{children:"Full Name"}),s(Oi,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(yo,{placeholder:"Full Name",...c("firstName")})}),s(Pi,{children:(u==null?void 0:u.firstName)&&(($=u==null?void 0:u.firstName)==null?void 0:$.message)})]}),y(ki,{children:[s(_i,{children:"Last Name"}),s(Oi,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(yo,{placeholder:"Last Name",...c("lastName")})}),s(Pi,{children:(u==null?void 0:u.lastName)&&((v=u==null?void 0:u.lastName)==null?void 0:v.message)})]}),y(ki,{children:[s(_i,{children:"Email Address"}),s(Oi,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(yo,{placeholder:"Email Address",...c("email")})}),s(Pi,{children:(u==null?void 0:u.email)&&((b=u==null?void 0:u.email)==null?void 0:b.message)})]}),y(ki,{children:[s(_i,{children:"Company Name"}),s(Oi,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(yo,{placeholder:"Company Name",...c("companyName")})}),s(Pi,{children:(u==null?void 0:u.companyName)&&((w=u==null?void 0:u.companyName)==null?void 0:w.message)})]}),y(ki,{children:[s(_i,{children:"Phone Number"}),s(Oi,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(TN,{className:"phone",defaultCountry:"NG",...c("phoneNum"),placeholder:"Phone Number",value:e,onChange:t})}),s(Pi,{children:(u==null?void 0:u.phoneNum)&&((m=u==null?void 0:u.phoneNum)==null?void 0:m.message)})]}),y(ki,{children:[s(_i,{children:"Password"}),y(Oi,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:[s(yo,{placeholder:"Password",type:n?"password":"text",id:"pass",...c("password")}),s(D3,{onClick:()=>{r(i)},children:n===!1?s(Xp,{}):s(Jp,{})})]}),s(Pi,{children:(u==null?void 0:u.password)&&((p=u==null?void 0:u.password)==null?void 0:p.message)})]}),y(ki,{children:[s(_i,{children:"Confirm Password"}),y(Oi,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:[s(yo,{placeholder:"Confirm Password",type:n?"password":"text",id:"pass",...c("confirmPassword")}),s(D3,{onClick:()=>{r(i)},children:n===!1?s(Xp,{}):s(Jp,{})})]}),s(Pi,{children:(u==null?void 0:u.confirmPassword)&&((x=u==null?void 0:u.confirmPassword)==null?void 0:x.message)})]}),s(ZT,{type:"submit",disabled:f.status==="loading",children:f.status==="loading"?"Loading...":"Continue"}),y(KT,{children:["Already have an account?"," ",s(_e,{to:"/auth/signin",style:{textDecoration:"none"},children:s("span",{children:"LogIn"})})]})]})]})})})},KT=h.div`
  font-size: 13px;
  font-weight: 500;

  span {
    color: #ec00b1;
    cursor: pointer;
  }
`,ZT=h.button`
  width: 360px;
  height: 50px;
  border: 0px;
  background-color: #ec00b1;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  margin: 20px;
  outline: none;
`,Pi=h.div`
  font-size: 15px;
  font-weight: 700;
  color: #ff0000;
`,D3=h.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Oi=h.div`
  width: 350px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;

  .PhoneInputInput {
    width: 300px;
    height: 30px;
    outline: none;
    border: 0px;
  }
`,yo=h.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: 0px;
  /* margin-bottom: 5px; */
  /* padding-left: 10px;
    padding-right: 10px; */
`,_i=h.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`,ki=h.div`
  margin-bottom: 10px;
`,JT=h.form`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,XT=h.div`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 20px;
`,eA=h.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`,tA=h.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  /* border: 1px solid gray; */
`,nA=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,rA=()=>{var f,g;const e=Ot(),t=Cm({email:fr().email("this is not a valid email").required("This field cannot be empty"),password:fr().required("This field cannot be empty")}).required(),[n,r]=C.useState(!0),i=n!==!0,{handleSubmit:o,formState:{errors:a},reset:l,register:u}=Vb({resolver:Gb(t)}),d=Ht({mutationKey:["seller"],mutationFn:qE,onSuccess:$=>{console.log($),e("/auth/verify")},onError:$=>{console.log($.message)}}),c=o($=>{d.mutate($)});return s("div",{children:s(fA,{children:y(cA,{children:[s(dA,{children:"Seller Account"}),s(uA,{children:"Please enter every necessary information"}),y(lA,{onSubmit:c,children:[y(U3,{children:[s(z3,{children:"Email Address"}),s(L3,{style:{border:`${a!=null&&a.email?"1px solid red":"1px solid lightgray"}`},children:s(j3,{placeholder:"Email Address",type:"email",...u("email")})}),s(M3,{children:(a==null?void 0:a.email)&&((f=a==null?void 0:a.email)==null?void 0:f.message)})]}),y(U3,{children:[s(z3,{children:"Password"}),y(L3,{style:{border:`${a!=null&&a.password?"1px solid red":"1px solid lightgray"}`},children:[s(j3,{placeholder:"Password",type:n?"password":"text",id:"pass",...u("password")}),s(sA,{onClick:()=>{r(i)},children:n===!1?s(Xp,{}):s(Jp,{})})]}),s(M3,{children:(a==null?void 0:a.password)&&((g=a==null?void 0:a.password)==null?void 0:g.message)})]}),s(iA,{children:"Forget Password?"}),s(aA,{type:"submit",disabled:d.status==="loading",children:d.status==="loading"?"Loading...":"Continue"}),y(oA,{children:["Don't have an account? ",s(_e,{to:"/auth/signin",style:{textDecoration:"none"},children:s("span",{children:"Sign Up"})})]})]})]})})})},iA=h.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    width: 360px;
`,oA=h.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,aA=h.button`
    width: 360px;
    height: 50px;
    border: 0px;
    background-color: #ec00b1;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    margin: 20px;
    outline: none;
`,M3=h.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`,sA=h.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,L3=h.div`
    width: 350px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
`,j3=h.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,z3=h.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,U3=h.div`
    margin-bottom: 10px;
`,lA=h.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,uA=h.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 250px;
`,dA=h.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
`,cA=h.div`
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
    /* border: 1px solid gray; */
`,fA=h.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,hA="/assets/camera-91f8abb7.png",pA=()=>{const e=Ot(),[t,n]=C.useState(hA),[r,i]=C.useState(""),[o,a]=C.useState(""),[l,u]=C.useState(""),[d,c]=C.useState(""),f=w=>{const m=w.target.files[0],p=URL.createObjectURL(m);n(p),i(m)},g=w=>{const m=w.target.files[0];c(m)},$=Ht({mutationFn:QE,onSuccess:w=>{console.log(w),e("/auth/bankdetails")},onError:w=>{console.log(w.message)}}),v=JSON.parse(localStorage.getItem("user"));return s("div",{children:s(CA,{children:y(SA,{children:[s(wA,{children:"Business Information"}),s(bA,{children:"Enter every necessary details to create your own seller account"}),y($A,{onSubmit:w=>{w.preventDefault();const m=v._id,p=new FormData;p.append("IDtype",l),p.append("CACNumber",o),p.append("avatar",r),p.append("avatar",d),$.mutate({id:m,formData:p})},type:"multipart/form-data",children:[y(Lh,{children:[s(Mh,{children:"Business owner or legal representative ID type"}),s(Dh,{children:y(gA,{value:l,onChange:w=>{u(w.target.value)},children:[s("option",{children:"Select ID type"}),s("option",{children:"NIN"}),s("option",{children:"BVN"})]})})]}),y(Lh,{children:[s(Mh,{children:"Upload a copy of your valid ID card"}),s(Dh,{children:s(B3,{type:"file",id:"pass",onChange:g})})]}),y(Lh,{children:[s(Mh,{children:"CAC Registration Number"}),s(Dh,{children:s(B3,{placeholder:"NIN OR BVN",type:"number",value:o,onChange:w=>{a(w.target.value)}})})]}),y(vA,{children:[s(mA,{type:"file",onChange:f}),s(yA,{src:t})]}),s(xA,{type:"submit",disabled:$.status==="loading",children:$.status==="loading"?"Loading...":"Continue"})]})]})})})},gA=h.select`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
`,mA=h.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    /* opacity: 0px; */
    display: none;
`,yA=h.img`
    
    /* background-color: gold; */
    width: 80%;
    height: 70%;
    border-radius: 5px;
`,vA=h.label`
    width: 220px;
    height: 220px;
    border: 1px solid gray;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,xA=h.button`
    width: 360px;
    height: 50px;
    border: 0px;
    background-color: #ec00b1;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    margin: 20px;
    outline: none;
`;h.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`;const Dh=h.div`
    width: 350px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
`,B3=h.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
    ::-webkit-outer-spin-button{
    appearance: none;
  }
  ::-webkit-inner-spin-button{
    appearance: none;
  }
`,Mh=h.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,Lh=h.div`
    margin-bottom: 10px;
`,$A=h.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,bA=h.div`
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    width: 300px;
    margin-bottom: 20px;

`,wA=h.div`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
`,SA=h.div`
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
    /* border: 1px solid gray; */
`,CA=h.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;function PA(e){return Ae({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"}}]})(e)}function uw(e){return Ae({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}}]})(e)}function OA(e){return Ae({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"}},{tag:"path",attr:{d:"M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"}}]})(e)}function _A(e){return Ae({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}}]})(e)}function kA(e){return Ae({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z"}}]})(e)}var j1={},NA={get exports(){return j1},set exports(e){j1=e}},dw={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf=C,EA=pc;function IA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var TA=typeof Object.is=="function"?Object.is:IA,AA=EA.useSyncExternalStore,RA=yf.useRef,FA=yf.useEffect,DA=yf.useMemo,MA=yf.useDebugValue;dw.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=RA(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=DA(function(){function u($){if(!d){if(d=!0,c=$,$=r($),i!==void 0&&a.hasValue){var v=a.value;if(i(v,$))return f=v}return f=$}if(v=f,TA(c,$))return v;var b=r($);return i!==void 0&&i(v,b)?v:(c=$,f=b)}var d=!1,c,f,g=n===void 0?null:n;return[function(){return u(t())},g===null?void 0:function(){return u(g())}]},[t,n,r,i]);var l=AA(e,o[0],o[1]);return FA(function(){a.hasValue=!0,a.value=l},[l]),MA(l),l};(function(e){e.exports=dw})(NA);function LA(e){e()}let cw=LA;const jA=e=>cw=e,zA=()=>cw,yi=C.createContext(null);function fw(){return C.useContext(yi)}const UA=()=>{throw new Error("uSES not initialized!")};let hw=UA;const BA=e=>{hw=e},HA=(e,t)=>e===t;function YA(e=yi){const t=e===yi?fw:()=>C.useContext(e);return function(r,i=HA){const{store:o,subscription:a,getServerState:l}=t(),u=hw(a.addNestedSub,o.getState,l||o.getState,r,i);return C.useDebugValue(u),u}}const Aa=YA();var H3={},WA={get exports(){return H3},set exports(e){H3=e}},Ie={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm=Symbol.for("react.element"),Am=Symbol.for("react.portal"),vf=Symbol.for("react.fragment"),xf=Symbol.for("react.strict_mode"),$f=Symbol.for("react.profiler"),bf=Symbol.for("react.provider"),wf=Symbol.for("react.context"),VA=Symbol.for("react.server_context"),Sf=Symbol.for("react.forward_ref"),Cf=Symbol.for("react.suspense"),Pf=Symbol.for("react.suspense_list"),Of=Symbol.for("react.memo"),_f=Symbol.for("react.lazy"),qA=Symbol.for("react.offscreen"),pw;pw=Symbol.for("react.module.reference");function gn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Tm:switch(e=e.type,e){case vf:case $f:case xf:case Cf:case Pf:return e;default:switch(e=e&&e.$$typeof,e){case VA:case wf:case Sf:case _f:case Of:case bf:return e;default:return t}}case Am:return t}}}Ie.ContextConsumer=wf;Ie.ContextProvider=bf;Ie.Element=Tm;Ie.ForwardRef=Sf;Ie.Fragment=vf;Ie.Lazy=_f;Ie.Memo=Of;Ie.Portal=Am;Ie.Profiler=$f;Ie.StrictMode=xf;Ie.Suspense=Cf;Ie.SuspenseList=Pf;Ie.isAsyncMode=function(){return!1};Ie.isConcurrentMode=function(){return!1};Ie.isContextConsumer=function(e){return gn(e)===wf};Ie.isContextProvider=function(e){return gn(e)===bf};Ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tm};Ie.isForwardRef=function(e){return gn(e)===Sf};Ie.isFragment=function(e){return gn(e)===vf};Ie.isLazy=function(e){return gn(e)===_f};Ie.isMemo=function(e){return gn(e)===Of};Ie.isPortal=function(e){return gn(e)===Am};Ie.isProfiler=function(e){return gn(e)===$f};Ie.isStrictMode=function(e){return gn(e)===xf};Ie.isSuspense=function(e){return gn(e)===Cf};Ie.isSuspenseList=function(e){return gn(e)===Pf};Ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===vf||e===$f||e===xf||e===Cf||e===Pf||e===qA||typeof e=="object"&&e!==null&&(e.$$typeof===_f||e.$$typeof===Of||e.$$typeof===bf||e.$$typeof===wf||e.$$typeof===Sf||e.$$typeof===pw||e.getModuleId!==void 0)};Ie.typeOf=gn;(function(e){e.exports=Ie})(WA);function GA(){const e=zA();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const Y3={notify(){},get:()=>[]};function QA(e,t){let n,r=Y3;function i(f){return u(),r.subscribe(f)}function o(){r.notify()}function a(){c.onStateChange&&c.onStateChange()}function l(){return!!n}function u(){n||(n=t?t.addNestedSub(a):e.subscribe(a),r=GA())}function d(){n&&(n(),n=void 0,r.clear(),r=Y3)}const c={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:a,isSubscribed:l,trySubscribe:u,tryUnsubscribe:d,getListeners:()=>r};return c}const KA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZA=KA?C.useLayoutEffect:C.useEffect;function JA({store:e,context:t,children:n,serverState:r}){const i=C.useMemo(()=>{const l=QA(e);return{store:e,subscription:l,getServerState:r?()=>r:void 0}},[e,r]),o=C.useMemo(()=>e.getState(),[e]);ZA(()=>{const{subscription:l}=i;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),o!==e.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[i,o]);const a=t||yi;return ne.createElement(a.Provider,{value:i},n)}function gw(e=yi){const t=e===yi?fw:()=>C.useContext(e);return function(){const{store:r}=t();return r}}const XA=gw();function eR(e=yi){const t=e===yi?XA:gw(e);return function(){return t().dispatch}}const Rm=eR();BA(j1.useSyncExternalStoreWithSelector);jA($d.unstable_batchedUpdates);function kn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function vi(e){return!!e&&!!e[Ye]}function _r(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===uR}(e)||Array.isArray(e)||!!e[Z3]||!!(!((t=e.constructor)===null||t===void 0)&&t[Z3])||Fm(e)||Dm(e))}function io(e,t,n){n===void 0&&(n=!1),Ha(e)===0?(n?Object.keys:va)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Ha(e){var t=e[Ye];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Fm(e)?2:Dm(e)?3:0}function ya(e,t){return Ha(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function tR(e,t){return Ha(e)===2?e.get(t):e[t]}function mw(e,t,n){var r=Ha(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function yw(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Fm(e){return sR&&e instanceof Map}function Dm(e){return lR&&e instanceof Set}function Bi(e){return e.o||e.t}function Mm(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=xw(e);delete t[Ye];for(var n=va(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Lm(e,t){return t===void 0&&(t=!1),jm(e)||vi(e)||!_r(e)||(Ha(e)>1&&(e.set=e.add=e.clear=e.delete=nR),Object.freeze(e),t&&io(e,function(n,r){return Lm(r,!0)},!0)),e}function nR(){kn(2)}function jm(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Jn(e){var t=H1[e];return t||kn(18,e),t}function rR(e,t){H1[e]||(H1[e]=t)}function z1(){return sl}function jh(e,t){t&&(Jn("Patches"),e.u=[],e.s=[],e.v=t)}function gc(e){U1(e),e.p.forEach(iR),e.p=null}function U1(e){e===sl&&(sl=e.l)}function W3(e){return sl={p:[],l:sl,h:e,m:!0,_:0}}function iR(e){var t=e[Ye];t.i===0||t.i===1?t.j():t.g=!0}function zh(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||Jn("ES5").S(t,e,r),r?(n[Ye].P&&(gc(t),kn(4)),_r(e)&&(e=mc(t,e),t.l||yc(t,e)),t.u&&Jn("Patches").M(n[Ye].t,e,t.u,t.s)):e=mc(t,n,[]),gc(t),t.u&&t.v(t.u,t.s),e!==vw?e:void 0}function mc(e,t,n){if(jm(t))return t;var r=t[Ye];if(!r)return io(t,function(l,u){return V3(e,r,t,l,u,n)},!0),t;if(r.A!==e)return t;if(!r.P)return yc(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Mm(r.k):r.o,o=i,a=!1;r.i===3&&(o=new Set(i),i.clear(),a=!0),io(o,function(l,u){return V3(e,r,i,l,u,n,a)}),yc(e,i,!1),n&&e.u&&Jn("Patches").N(r,n,e.u,e.s)}return r.o}function V3(e,t,n,r,i,o,a){if(vi(i)){var l=mc(e,i,o&&t&&t.i!==3&&!ya(t.R,r)?o.concat(r):void 0);if(mw(n,r,l),!vi(l))return;e.m=!1}else a&&n.add(i);if(_r(i)&&!jm(i)){if(!e.h.D&&e._<1)return;mc(e,i),t&&t.A.l||yc(e,i)}}function yc(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Lm(t,n)}function Uh(e,t){var n=e[Ye];return(n?Bi(n):e)[t]}function q3(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Vr(e){e.P||(e.P=!0,e.l&&Vr(e.l))}function Bh(e){e.o||(e.o=Mm(e.t))}function B1(e,t,n){var r=Fm(t)?Jn("MapSet").F(t,n):Dm(t)?Jn("MapSet").T(t,n):e.O?function(i,o){var a=Array.isArray(i),l={i:a?1:0,A:o?o.A:z1(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},u=l,d=ll;a&&(u=[l],d=$s);var c=Proxy.revocable(u,d),f=c.revoke,g=c.proxy;return l.k=g,l.j=f,g}(t,n):Jn("ES5").J(t,n);return(n?n.A:z1()).p.push(r),r}function oR(e){return vi(e)||kn(22,e),function t(n){if(!_r(n))return n;var r,i=n[Ye],o=Ha(n);if(i){if(!i.P&&(i.i<4||!Jn("ES5").K(i)))return i.t;i.I=!0,r=G3(n,o),i.I=!1}else r=G3(n,o);return io(r,function(a,l){i&&tR(i.t,a)===l||mw(r,a,t(l))}),o===3?new Set(r):r}(e)}function G3(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Mm(e)}function aR(){function e(o,a){var l=i[o];return l?l.enumerable=a:i[o]=l={configurable:!0,enumerable:a,get:function(){var u=this[Ye];return ll.get(u,o)},set:function(u){var d=this[Ye];ll.set(d,o,u)}},l}function t(o){for(var a=o.length-1;a>=0;a--){var l=o[a][Ye];if(!l.P)switch(l.i){case 5:r(l)&&Vr(l);break;case 4:n(l)&&Vr(l)}}}function n(o){for(var a=o.t,l=o.k,u=va(l),d=u.length-1;d>=0;d--){var c=u[d];if(c!==Ye){var f=a[c];if(f===void 0&&!ya(a,c))return!0;var g=l[c],$=g&&g[Ye];if($?$.t!==f:!yw(g,f))return!0}}var v=!!a[Ye];return u.length!==va(a).length+(v?0:1)}function r(o){var a=o.k;if(a.length!==o.t.length)return!0;var l=Object.getOwnPropertyDescriptor(a,a.length-1);if(l&&!l.get)return!0;for(var u=0;u<a.length;u++)if(!a.hasOwnProperty(u))return!0;return!1}var i={};rR("ES5",{J:function(o,a){var l=Array.isArray(o),u=function(c,f){if(c){for(var g=Array(f.length),$=0;$<f.length;$++)Object.defineProperty(g,""+$,e($,!0));return g}var v=xw(f);delete v[Ye];for(var b=va(v),w=0;w<b.length;w++){var m=b[w];v[m]=e(m,c||!!v[m].enumerable)}return Object.create(Object.getPrototypeOf(f),v)}(l,o),d={i:l?5:4,A:a?a.A:z1(),P:!1,I:!1,R:{},l:a,t:o,k:u,o:null,g:!1,C:!1};return Object.defineProperty(u,Ye,{value:d,writable:!0}),u},S:function(o,a,l){l?vi(a)&&a[Ye].A===o&&t(o.p):(o.u&&function u(d){if(d&&typeof d=="object"){var c=d[Ye];if(c){var f=c.t,g=c.k,$=c.R,v=c.i;if(v===4)io(g,function(x){x!==Ye&&(f[x]!==void 0||ya(f,x)?$[x]||u(g[x]):($[x]=!0,Vr(c)))}),io(f,function(x){g[x]!==void 0||ya(g,x)||($[x]=!1,Vr(c))});else if(v===5){if(r(c)&&(Vr(c),$.length=!0),g.length<f.length)for(var b=g.length;b<f.length;b++)$[b]=!1;else for(var w=f.length;w<g.length;w++)$[w]=!0;for(var m=Math.min(g.length,f.length),p=0;p<m;p++)g.hasOwnProperty(p)||($[p]=!0),$[p]===void 0&&u(g[p])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var Q3,sl,zm=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",sR=typeof Map<"u",lR=typeof Set<"u",K3=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",vw=zm?Symbol.for("immer-nothing"):((Q3={})["immer-nothing"]=!0,Q3),Z3=zm?Symbol.for("immer-draftable"):"__$immer_draftable",Ye=zm?Symbol.for("immer-state"):"__$immer_state",uR=""+Object.prototype.constructor,va=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,xw=Object.getOwnPropertyDescriptors||function(e){var t={};return va(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},H1={},ll={get:function(e,t){if(t===Ye)return e;var n=Bi(e);if(!ya(n,t))return function(i,o,a){var l,u=q3(o,a);return u?"value"in u?u.value:(l=u.get)===null||l===void 0?void 0:l.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!_r(r)?r:r===Uh(e.t,t)?(Bh(e),e.o[t]=B1(e.A.h,r,e)):r},has:function(e,t){return t in Bi(e)},ownKeys:function(e){return Reflect.ownKeys(Bi(e))},set:function(e,t,n){var r=q3(Bi(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Uh(Bi(e),t),o=i==null?void 0:i[Ye];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(yw(n,i)&&(n!==void 0||ya(e.t,t)))return!0;Bh(e),Vr(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Uh(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Bh(e),Vr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Bi(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){kn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){kn(12)}},$s={};io(ll,function(e,t){$s[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),$s.deleteProperty=function(e,t){return $s.set.call(this,e,t,void 0)},$s.set=function(e,t,n){return ll.set.call(this,e[0],t,n,e[0])};var dR=function(){function e(n){var r=this;this.O=K3,this.D=!0,this.produce=function(i,o,a){if(typeof i=="function"&&typeof o!="function"){var l=o;o=i;var u=r;return function(b){var w=this;b===void 0&&(b=l);for(var m=arguments.length,p=Array(m>1?m-1:0),x=1;x<m;x++)p[x-1]=arguments[x];return u.produce(b,function(S){var P;return(P=o).call.apply(P,[w,S].concat(p))})}}var d;if(typeof o!="function"&&kn(6),a!==void 0&&typeof a!="function"&&kn(7),_r(i)){var c=W3(r),f=B1(r,i,void 0),g=!0;try{d=o(f),g=!1}finally{g?gc(c):U1(c)}return typeof Promise<"u"&&d instanceof Promise?d.then(function(b){return jh(c,a),zh(b,c)},function(b){throw gc(c),b}):(jh(c,a),zh(d,c))}if(!i||typeof i!="object"){if((d=o(i))===void 0&&(d=i),d===vw&&(d=void 0),r.D&&Lm(d,!0),a){var $=[],v=[];Jn("Patches").M(i,d,$,v),a($,v)}return d}kn(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(d){for(var c=arguments.length,f=Array(c>1?c-1:0),g=1;g<c;g++)f[g-1]=arguments[g];return r.produceWithPatches(d,function($){return i.apply(void 0,[$].concat(f))})};var a,l,u=r.produce(i,o,function(d,c){a=d,l=c});return typeof Promise<"u"&&u instanceof Promise?u.then(function(d){return[d,a,l]}):[u,a,l]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){_r(n)||kn(8),vi(n)&&(n=oR(n));var r=W3(this),i=B1(this,n,void 0);return i[Ye].C=!0,U1(r),i},t.finishDraft=function(n,r){var i=n&&n[Ye],o=i.A;return jh(o,r),zh(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!K3&&kn(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var a=Jn("Patches").$;return vi(n)?a(n,r):this.produce(n,function(l){return a(l,r)})},e}(),Zt=new dR,$w=Zt.produce;Zt.produceWithPatches.bind(Zt);Zt.setAutoFreeze.bind(Zt);Zt.setUseProxies.bind(Zt);Zt.applyPatches.bind(Zt);Zt.createDraft.bind(Zt);Zt.finishDraft.bind(Zt);function ul(e){return ul=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ul(e)}function cR(e,t){if(ul(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ul(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fR(e){var t=cR(e,"string");return ul(t)==="symbol"?t:String(t)}function hR(e,t,n){return t=fR(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function X3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?J3(Object(n),!0).forEach(function(r){hR(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var ex=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Hh=function(){return Math.random().toString(36).substring(7).split("").join(".")},vc={INIT:"@@redux/INIT"+Hh(),REPLACE:"@@redux/REPLACE"+Hh(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Hh()}};function pR(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Um(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(wt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(wt(1));return n(Um)(e,t)}if(typeof e!="function")throw new Error(wt(2));var i=e,o=t,a=[],l=a,u=!1;function d(){l===a&&(l=a.slice())}function c(){if(u)throw new Error(wt(3));return o}function f(b){if(typeof b!="function")throw new Error(wt(4));if(u)throw new Error(wt(5));var w=!0;return d(),l.push(b),function(){if(w){if(u)throw new Error(wt(6));w=!1,d();var p=l.indexOf(b);l.splice(p,1),a=null}}}function g(b){if(!pR(b))throw new Error(wt(7));if(typeof b.type>"u")throw new Error(wt(8));if(u)throw new Error(wt(9));try{u=!0,o=i(o,b)}finally{u=!1}for(var w=a=l,m=0;m<w.length;m++){var p=w[m];p()}return b}function $(b){if(typeof b!="function")throw new Error(wt(10));i=b,g({type:vc.REPLACE})}function v(){var b,w=f;return b={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(wt(11));function x(){p.next&&p.next(c())}x();var S=w(x);return{unsubscribe:S}}},b[ex]=function(){return this},b}return g({type:vc.INIT}),r={dispatch:g,subscribe:f,getState:c,replaceReducer:$},r[ex]=v,r}function gR(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:vc.INIT});if(typeof r>"u")throw new Error(wt(12));if(typeof n(void 0,{type:vc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(wt(13))})}function mR(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),a;try{gR(n)}catch(l){a=l}return function(u,d){if(u===void 0&&(u={}),a)throw a;for(var c=!1,f={},g=0;g<o.length;g++){var $=o[g],v=n[$],b=u[$],w=v(b,d);if(typeof w>"u")throw d&&d.type,new Error(wt(14));f[$]=w,c=c||w!==b}return c=c||o.length!==Object.keys(u).length,c?f:u}}function xc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function yR(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(wt(15))},a={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},l=t.map(function(u){return u(a)});return o=xc.apply(void 0,l)(i.dispatch),X3(X3({},i),{},{dispatch:o})}}}function bw(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(a){return function(l){return typeof l=="function"?l(i,o,e):a(l)}}};return t}var ww=bw();ww.withExtraArgument=bw;const tx=ww;var Sw=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),vR=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(d){return function(c){return u([d,c])}}function u(d){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=d[0]&2?i.return:d[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,d[1])).done)return o;switch(i=0,o&&(d=[d[0]&2,o.value]),d[0]){case 0:case 1:o=d;break;case 4:return n.label++,{value:d[1],done:!1};case 5:n.label++,i=d[1],d=[0];continue;case 7:d=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(d[0]===6||d[0]===2)){n=0;continue}if(d[0]===3&&(!o||d[1]>o[0]&&d[1]<o[3])){n.label=d[1];break}if(d[0]===6&&n.label<o[1]){n.label=o[1],o=d;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(d);break}o[2]&&n.ops.pop(),n.trys.pop();continue}d=t.call(e,n)}catch(c){d=[6,c],i=0}finally{r=o=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}},Ra=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},xR=Object.defineProperty,$R=Object.defineProperties,bR=Object.getOwnPropertyDescriptors,nx=Object.getOwnPropertySymbols,wR=Object.prototype.hasOwnProperty,SR=Object.prototype.propertyIsEnumerable,rx=function(e,t,n){return t in e?xR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},ci=function(e,t){for(var n in t||(t={}))wR.call(t,n)&&rx(e,n,t[n]);if(nx)for(var r=0,i=nx(t);r<i.length;r++){var n=i[r];SR.call(t,n)&&rx(e,n,t[n])}return e},Yh=function(e,t){return $R(e,bR(t))},CR=function(e,t,n){return new Promise(function(r,i){var o=function(u){try{l(n.next(u))}catch(d){i(d)}},a=function(u){try{l(n.throw(u))}catch(d){i(d)}},l=function(u){return u.done?r(u.value):Promise.resolve(u.value).then(o,a)};l((n=n.apply(e,t)).next())})},PR=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?xc:xc.apply(null,arguments)};function OR(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var _R=function(e){Sw(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Ra([void 0],n[0].concat(this)))):new(t.bind.apply(t,Ra([void 0],n.concat(this))))},t}(Array),kR=function(e){Sw(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Ra([void 0],n[0].concat(this)))):new(t.bind.apply(t,Ra([void 0],n.concat(this))))},t}(Array);function Y1(e){return _r(e)?$w(e,function(){}):e}function NR(e){return typeof e=="boolean"}function ER(){return function(t){return IR(t)}}function IR(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new _R;return n&&(NR(n)?r.push(tx):r.push(tx.withExtraArgument(n.extraArgument))),r}var TR=!0;function AR(e){var t=ER(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,a=o===void 0?t():o,l=n.devTools,u=l===void 0?!0:l,d=n.preloadedState,c=d===void 0?void 0:d,f=n.enhancers,g=f===void 0?void 0:f,$;if(typeof i=="function")$=i;else if(OR(i))$=mR(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=a;typeof v=="function"&&(v=v(t));var b=yR.apply(void 0,v),w=xc;u&&(w=PR(ci({trace:!TR},typeof u=="object"&&u)));var m=new kR(b),p=m;Array.isArray(g)?p=Ra([b],g):typeof g=="function"&&(p=g(m));var x=w.apply(void 0,p);return Um($,c,x)}function fi(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return ci(ci({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function Cw(e){var t={},n=[],r,i={addCase:function(o,a){var l=typeof o=="string"?o:o.type;if(l in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[l]=a,i},addMatcher:function(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function RR(e){return typeof e=="function"}function FR(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Cw(t):[t,n,r],o=i[0],a=i[1],l=i[2],u;if(RR(e))u=function(){return Y1(e())};else{var d=Y1(e);u=function(){return d}}function c(f,g){f===void 0&&(f=u());var $=Ra([o[g.type]],a.filter(function(v){var b=v.matcher;return b(g)}).map(function(v){var b=v.reducer;return b}));return $.filter(function(v){return!!v}).length===0&&($=[l]),$.reduce(function(v,b){if(b)if(vi(v)){var w=v,m=b(w,g);return m===void 0?v:m}else{if(_r(v))return $w(v,function(p){return b(p,g)});var m=b(v,g);if(m===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return v},f)}return c.getInitialState=u,c}function DR(e,t){return e+"/"+t}function MR(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Y1(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},a={},l={};i.forEach(function(c){var f=r[c],g=DR(t,c),$,v;"reducer"in f?($=f.reducer,v=f.prepare):$=f,o[c]=$,a[g]=$,l[c]=v?fi(g,v):fi(g)});function u(){var c=typeof e.extraReducers=="function"?Cw(e.extraReducers):[e.extraReducers],f=c[0],g=f===void 0?{}:f,$=c[1],v=$===void 0?[]:$,b=c[2],w=b===void 0?void 0:b,m=ci(ci({},g),a);return FR(n,function(p){for(var x in m)p.addCase(x,m[x]);for(var S=0,P=v;S<P.length;S++){var _=P[S];p.addMatcher(_.matcher,_.reducer)}w&&p.addDefaultCase(w)})}var d;return{name:t,reducer:function(c,f){return d||(d=u()),d(c,f)},actions:l,caseReducers:o,getInitialState:function(){return d||(d=u()),d.getInitialState()}}}var LR="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",jR=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=LR[Math.random()*64|0];return t},zR=["name","message","stack","code"],Wh=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),ix=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),UR=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=zR;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=fi(t+"/fulfilled",function(d,c,f,g){return{payload:d,meta:Yh(ci({},g||{}),{arg:f,requestId:c,requestStatus:"fulfilled"})}}),o=fi(t+"/pending",function(d,c,f){return{payload:void 0,meta:Yh(ci({},f||{}),{arg:c,requestId:d,requestStatus:"pending"})}}),a=fi(t+"/rejected",function(d,c,f,g,$){return{payload:g,error:(r&&r.serializeError||UR)(d||"Rejected"),meta:Yh(ci({},$||{}),{arg:f,requestId:c,rejectedWithValue:!!g,requestStatus:"rejected",aborted:(d==null?void 0:d.name)==="AbortError",condition:(d==null?void 0:d.name)==="ConditionError"})}}),l=typeof AbortController<"u"?AbortController:function(){function d(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return d.prototype.abort=function(){},d}();function u(d){return function(c,f,g){var $=r!=null&&r.idGenerator?r.idGenerator(d):jR(),v=new l,b;function w(p){b=p,v.abort()}var m=function(){return CR(this,null,function(){var p,x,S,P,_,T,R;return vR(this,function(Y){switch(Y.label){case 0:return Y.trys.push([0,4,,5]),P=(p=r==null?void 0:r.condition)==null?void 0:p.call(r,d,{getState:f,extra:g}),HR(P)?[4,P]:[3,2];case 1:P=Y.sent(),Y.label=2;case 2:if(P===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return _=new Promise(function(z,ie){return v.signal.addEventListener("abort",function(){return ie({name:"AbortError",message:b||"Aborted"})})}),c(o($,d,(x=r==null?void 0:r.getPendingMeta)==null?void 0:x.call(r,{requestId:$,arg:d},{getState:f,extra:g}))),[4,Promise.race([_,Promise.resolve(n(d,{dispatch:c,getState:f,extra:g,requestId:$,signal:v.signal,abort:w,rejectWithValue:function(z,ie){return new Wh(z,ie)},fulfillWithValue:function(z,ie){return new ix(z,ie)}})).then(function(z){if(z instanceof Wh)throw z;return z instanceof ix?i(z.payload,$,d,z.meta):i(z,$,d)})])];case 3:return S=Y.sent(),[3,5];case 4:return T=Y.sent(),S=T instanceof Wh?a(null,$,d,T.payload,T.meta):a(T,$,d),[3,5];case 5:return R=r&&!r.dispatchConditionRejection&&a.match(S)&&S.meta.condition,R||c(S),[2,S]}})})}();return Object.assign(m,{abort:w,requestId:$,arg:d,unwrap:function(){return m.then(BR)}})}}return Object.assign(u,{pending:o,rejected:a,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function BR(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function HR(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Bm="listenerMiddleware";fi(Bm+"/add");fi(Bm+"/removeAll");fi(Bm+"/remove");var ox;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);aR();const YR={user:null,product:[],cartItem:[],qty:0,totalPrice:0},Pw=MR({name:"userAuth",initialState:YR,reducers:{addProduct:(e,{payload:t})=>{e.product=t},addToCart:(e,{payload:t})=>{const n=e.cartItem.findIndex(r=>r._id===t._id);n>=0?e.cartItem[n].qty+=1:e.cartItem.push({...t,qty:1}),e.qty+=1,e.totalPrice+=t.qty*t.price},removeCart:(e,{payload:t})=>{const n=e.cartItem.findIndex(r=>r._id===t._id);e.cartItem[n].qty>1?e.cartItem[n].qty-=1:e.cartItem=e.cartItem.filter(r=>r._id!==t._id),e.qty-=1,e.totalPrice-=t.price},removeAllCart:e=>{e.cartItem=[],e.qty=0},total:(e,{payload:t})=>{const{totalCost:n,totalItems:r}=e.cart.reduce((i,o)=>{const{price:a,QTY:l}=o,u=a*l;return i.totalItems+=l,i.totalCost+=u,i},{totalCost:0,totalItems:0});e.MyTotalQTY=r,e.MyTotalCost=n},signOut:e=>{e.user=null}}}),{signOut:$q,addProduct:bq,addToCart:ax,removeCart:WR,removeAllCart:VR}=Pw.actions,qR=Pw.reducer,GR=({id:e,avatar:t,data:n,qty:r})=>{const i=Aa(l=>l.reducers.cartItem),o=i==null?void 0:i.find(l=>(l==null?void 0:l._id)===e),a=Rm();return s(cF,{children:s(uF,{children:y(dF,{children:[t==null?void 0:t.map((l,u)=>s(sF,{children:s(aF,{children:s("img",{src:l.url})})},u)),y(lF,{children:[y(oF,{children:[y(iF,{children:[s(nF,{children:s("span",{children:"Select Country"})}),y(rF,{children:[" ",s("div",{children:s(yS,{})}),s("span",{children:s(Wt,{})})]})]}),y(Kh,{children:[s(Gh,{children:s("div",{children:s(PA,{})})}),y(Qh,{children:[s(qh,{children:"Door Delivery"}),y(Vh,{children:["Every Delivery will be at",s("br",{})," your preferred location,",s("br",{})," after 15days of ordering."]})]})]}),y(Kh,{children:[s(Gh,{children:s("div",{children:s(_A,{})})}),y(Qh,{children:[s(qh,{children:"Minimum order"}),y(Vh,{children:["#50,000 worth of item",s("br",{}),"is the minimum"]})]})]}),y(Kh,{children:[s(Gh,{children:s("div",{children:s(OA,{})})}),y(Qh,{children:[s(qh,{children:"Payment Method"}),y(Vh,{children:["All Items will be delivered",s("br",{})," after Payment"]})]})]})]}),y(tF,{children:[s(JR,{children:"Quantity"}),y(XR,{children:[s(QR,{disabled:(o==null?void 0:o.qty)==r,onClick:()=>a(ax(n)),children:"+"}),s(KR,{children:o==null?void 0:o.qty}),s(ZR,{disabled:(o==null?void 0:o.qty)<=0,onClick:()=>a(WR(n)),children:"-"})]}),s(eF,{children:s("button",{disabled:(o==null?void 0:o.qty)==r,onClick:()=>a(ax(n)),children:"Add To Cart"})})]})]})]})})})},QR=h.button`
  width: 70px;
  height: 70px;
  border: 1.6px solid grey;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`,KR=h.div`
  width: 70px;
  height: 70px;
  border: 1.6px solid grey;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  
`,ZR=h.button`
  width: 70px;
  height: 70px;
  border: 1.6px solid grey;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

`,JR=h.div`
  font-size: 22px;
  font-weight: 700;
  font-family: poppins;
`,XR=h.div`
  width: 70%;
  height: 125px;
  display: flex;
  cursor: pointer;

  align-items: center;
  justify-content: space-between;
`,eF=h.div`
  width: 90%;

  button {
    flex: 1;
    background-color: #d975c0;
    color: white;
    font-size: 20px;
    padding: 10px 0;
    width: 100%;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,tF=h.div`
  width: 100%;
  height: 195px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1100px) {
    align-items: center;
  }
`,nF=h.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  span {
    font-size: 22px;
    font-weight: 700;
    font-family: poppins;
  }
`,rF=h.div`
  font-weight: 700;
  width: 95%;
  padding: 0 10px;
  display: flex;
  border: 1.7px solid black;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  // background-color: gold;
  height: 30px;

  span {
    margin-left: 10px;
    position: relative;
    bottom: -3px;
    cursor: pointer;
  }
  div {
  }
`,Vh=h.div`
  font-size: 15px;
  font-weight: 500;
  font-family: poppins;
`,qh=h.div`
  font-size: 25px;
  margin-bottom: 15px;
  font-weight: 500;
  font-family: poppins;
`,Gh=h.div`
  width: 100px;
  border-radius: 5px;
  div {
    font-size: 62px;
  }
`,Qh=h.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`,iF=h.div`
  width: 90%;
  height: 70px;
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`,Kh=h.div`
  width: 90%;
  height: 120px;
  border-bottom: 1.5px solid grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`,oF=h.div`
  border: 1.8px solid black;
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
`;h.div`
  width: 450px;
  height: 330px;
  background-color: burlywood;
  border-radius: 5px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;const aF=h.div`
  width: 450px;
  height: 330px;
  background-color: brown;
  border-radius: 5px;
  margin: 10px;
  img {
    height: 100%;
    width: 100%;
    border-radius: 5px;

    object-fit: cover;
  }

  @media (max-width: 768px){
    width: 300px;
    height: 300px;
  }
`,sF=h.div`
  width: 450px;
  /* flex: 1; */
  padding: 50px 0;
`,lF=h.div`
  width: 550px;
  /* flex: 1; */
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 50px 0;
`,uF=h.div`
  width: 95%;
  /* height: 95%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;h.div`
  width: 100%;
  height: 120px;
  border: 2px solid black;
`;const dF=h.div`
  width: 100%;
  flex-wrap: wrap;
  /* height: 970px; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    justify-content: center;
  }
`,cF=h.div`
  width: 100%;
  /* height: 100vh; */
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
`,fF=({description:e})=>s(yF,{children:s(mF,{children:y(hF,{children:[s(pF,{children:"Product Details"}),s(gF,{children:e})]})})});h.div`
  width: 300px;
  height: 300px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;h.div`
  background-color: #cdc8c8;
  border-radius: 5px;
  width: 250px;
  height: 260px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;h.div`
  font-size: 13px;
  font-weight: 500;
  span {
    margin-left: 10px;
    position: relative;
    bottom: -2px;
    color: #d975c0;
  }
`;h.div`
  font-size: 13px;
  font-weight: 500;
`;h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;h.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`;const hF=h.div`
  width: 94%;
  border: 1.8px solid black;
  border-radius: 3px;
  padding: 0 30px;
`,pF=h.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`,gF=h.div`
  font-size: 16px;
  font-weight: 400;
  margin: 10px 0;
`;h.div`
  width: 94%;
  /* height: 350px; */

  border: 1.8px solid black;
  padding: 0 30px;
  border-radius: 3px;
`;h.div`
  font-size: 22px;
  font-weight: 700;
  font-family: poppins;
`;const mF=h.div`
  width: 95%;
  /* height: 595px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`,yF=h.div`
  width: 100%;
  /* height: 100vh; */
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
`,vF=({name:e,price:t})=>s(SF,{children:y(CF,{children:[y(xF,{children:[y(sx,{children:[s("span",{children:"Home"}),s("div",{children:s(B2,{})})]}),y(sx,{children:[s("span",{children:"All Items"})," ",s("div",{children:s(B2,{})})]})]}),s($F,{children:e}),s(bF,{}),y(wF,{children:["₦",t]})]})}),xF=h.div`
  display: flex;
  width: 122px;
  align-items: center;
  justify-content: space-between;
`,sx=h.div`
  display: flex;
  span {
    font-size: 13px;
    font-weight: 500;
    margin-top: 10px;
  }

  div {
    margin-top: 10px;
  }
`,$F=h.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
`,bF=h.div``,wF=h.div`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0;
`,SF=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`,CF=h.div`
  width: 93.5%;
  border: 1.8px solid black;
  padding: 0 10px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`,Qn=({id:e,index:t,name:n,price:r,img:i})=>y(kF,{children:[s(PF,{children:s("img",{src:i})}),y(OF,{children:[" ",s(lx,{to:`/detail/${e}`,children:n}),s(lx,{to:"/cart",children:s("span",{children:s(uw,{})})})]}),y(_F,{children:["₦",r]})]},t),lx=h(_e)`
  color: black;
  text-decoration: none;
  cursor: pointer;
`,PF=h.div`
  background-color: #cdc8c8;
  border-radius: 5px;
  width: 220px;
  height: 260px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`,OF=h.div`
  font-size: 13px;
  font-weight: 500;
  span {
    margin-left: 10px;
    position: relative;
    bottom: -2px;
    color: #d975c0;
    cursor: pointer;
  }
`,_F=h.div`
  font-size: 13px;
  font-weight: 500;
`,kF=h.div`
  width: 280px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 10px;
`,Ir="https://crossbackend.onrender.com",Dl=async e=>(await dt.get(`${Ir}/api/product/${e}/seller`)).data.data,NF=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await dt.post(`${Ir}/api/product/${e}/create/phone`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},EF=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await dt.post(`${Ir}/api/product/${e}/create/cloth`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},IF=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await dt.post(`${Ir}/api/product/${e}/create/electronics`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},TF=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await dt.post(`${Ir}/api/product/${e}/create/food`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},AF=async({id:e,tag_No:t,quantity:n,startDate:r,endDate:i,active:o})=>{await dt.patch(`${Ir}/api/product/${e}/update`,{id:e,tag_No:t,quantity:n,startDate:r,endDate:i,active:o}).then(a=>{localStorage.setItem("product",JSON.stringify(a.data.data)),console.log(a.data)})},Ml=async()=>await dt.get(`${Ir}/api/product`).then(t=>t.data.data),RF=async e=>(await dt.get(`${Ir}/api/product/${e}`)).data.data,FF=async({ids:e,quantities:t})=>{const n=await dt.patch(`${Ir}/api/product/order`,{ids:e,quantities:t});return console.log(n),n.data.data},DF=()=>{const{data:e}=et({queryKey:["products"],queryFn:Ml}),[t,n]=C.useState(0),r=8,i=t*r,o=e==null?void 0:e.slice(i,i+r);var a=Intl.NumberFormat();return s(UF,{children:y(zF,{children:[s(LF,{children:"Mobiles"}),s(jF,{children:o==null?void 0:o.map((l,u)=>s(Qn,{id:l._id,name:l.name,price:a.format(l==null?void 0:l.price),img:l==null?void 0:l.avatar[0].url}))}),s(MF,{to:"/phone",children:s("button",{children:"See All"})})]})})},MF=h.div`
  width: 97%;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    width: 9%;
    background-color: #d975c0;
    color: white;
    font-size: 12px;
    padding: 8px 0;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,LF=h.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;
`,jF=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
`,zF=h.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  border: 1.9px solid #d975c0;
  padding: 0 10px;
  margin: 20px 0;
  border-radius: 5px;

  
`,UF=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,BF=()=>{const{id:e}=w5();Rm();const{data:t}=et({queryKey:["products",e],queryFn:()=>RF(e)});var n=Intl.NumberFormat();return s(HF,{children:y(YF,{children:[s(vF,{name:t==null?void 0:t.name,price:n.format(t==null?void 0:t.price)}),s(GR,{id:e,qty:t==null?void 0:t.quantity,avatar:t==null?void 0:t.avatar,data:t}),s(fF,{description:t==null?void 0:t.description}),s(DF,{})]})})},HF=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,YF=h.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
`,Hm=({index:e,name:t,price:n,shippingFee:r,totalPrice:i,subtotal:o,qty:a,id:l})=>s("div",{children:y(KF,{children:[y(e0,{children:[y(QF,{children:[s(GF,{children:a}),s(qF,{src:"/Frame 1.png"})]}),y(VF,{children:[s(WF,{children:t}),y(yu,{children:["₦",n]})]})]}),s(Xh,{}),s(e0,{children:y(ux,{children:[y(Zh,{children:[s(Jh,{children:"Subtotal"}),y(yu,{children:["₦",o]})]}),y(Zh,{children:[s(Jh,{children:"Shipping Fee"}),y(yu,{children:["₦",r]})]})]})}),s(Xh,{}),s(e0,{children:s(ux,{children:y(Zh,{children:[s(Jh,{children:"Total"}),y(yu,{children:["₦",i]})]})})}),s(Xh,{})]},l)}),ux=h.div``,Zh=h.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  margin: 10px 0px;
`,yu=h.div`
  font-weight: 700;
`,Jh=h.div`
  font-size: 18px;
  font-weight: 600;
  /* margin-bottom: 10px; */
`,WF=h.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,VF=h.div`
  margin-left: 20px;
`,Xh=h.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,qF=h.img`
  width: 100px;
  height: 100px;
  background-color: gold;
  border-radius: 5px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`,GF=h.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #d975c0;
  color: white;
  position: relative;
  left: 85px;
  top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`,QF=h.div`
  margin-right: 20px;
`,e0=h.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 90%;
`,KF=h.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,ZF=()=>s("div",{children:s(sD,{children:y(aD,{children:[s(oD,{children:y(iD,{children:[y(r0,{children:[s(n0,{children:"Contact"}),y(t0,{children:[s(hx,{placeholder:"email"}),s("span",{children:"Chance"})]})]}),y(r0,{children:[s(n0,{children:"Address"}),y(t0,{children:[s(hx,{placeholder:"Address"}),s("span",{children:"Chance"})]})]}),y(r0,{children:[s(n0,{children:"Payment Method"}),s(t0,{children:y(rD,{children:[y(fx,{children:[s(cx,{bg:"fff"}),s(dx,{children:"Pay on delivery"})]}),s(nD,{}),y(fx,{children:[s(cx,{bg:""}),s(dx,{children:"Pay on delivery"})]})]})})]}),y(tD,{children:[y(eD,{children:[s("span",{children:s(gS,{})}),s("div",{children:"Return to Information"})]}),s(XF,{children:"Complete Order"})]})]})}),s(JF,{children:s(Hm,{})})]})})}),JF=h.div`
    flex: 1;
    height: 100vh;
    border-left: 3px solid lightgray;
    /* background-color: blue; */
`,XF=h.button`
    padding: 15px 20px;
    border: #D975C0;
    background-color: #D975C0;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    cursor: pointer;
`,eD=h.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        font-weight: 600;
        /* margin-left: 10px; */
        color: #3c3c3c;
    }
    span{
        margin-top: 5px;
    }
`,tD=h.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    margin-top: 30px;
`,nD=h.div`
    width: 100%;
    background-color: lightgray;
    height: 2px;
    margin: 10px 0px;
`,dx=h.div`
    font-weight: 700;
    margin-right: 20px;
`,cx=h.div`
    border: 1px solid black;
    background-color: ${({bg:e})=>e?"#D975C0":"transparent"};
    border-radius: 50%;
    height: 25px;
    width: 25px;
    cursor: pointer;
`,fx=h.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,rD=h.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,hx=h.input`
    width: 90%;
    height: 30px;
    border: 0px;
    outline: none;
    margin-left: 10px;

`,t0=h.div`
    border: 1px solid gray;
    width: 100%;
    /* height: 40px; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 10px 0px;

    span{
        color: blue;
        margin-left: 10px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        width: 100px;
    }
`,n0=h.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
`,r0=h.div`
    margin: 10px;
`,iD=h.div`
    width: 90%;
    margin-top: 20px;
`,oD=h.div`
    flex: 1;
    height: 100vh;
    display: flex;
    justify-content: center;
    /* background-color: gold; */
`,aD=h.div`
    width: 95%;
    display: flex;
`,sD=h.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,lD=()=>s(uD,{children:y(dD,{children:[s(cD,{children:s(kl,{fontSize:"50px",color:"green"})}),y(hD,{children:["Account Information has been",s("br",{})," received and will be reviewed ",s("br",{}),"shortly."]}),s(fD,{to:"/seller-dashboard",children:s("button",{children:"Start Selling"})})]})}),uD=h.div`
  width: 100%;
  height: 42vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 30px; */
  padding-top: 80px;
`,dD=h.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`,cD=h.div``,fD=h(mr)`
  width: 40%;
  button {
    flex: 1;
    background-color: #d975c0;
    color: white;
    font-size: 13px;
    padding: 10px 0;
    width: 100%;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,hD=h.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,pD=()=>s(gD,{children:y(mD,{children:[s(yD,{children:s(kl,{fontSize:"50px",color:"green"})}),y(xD,{children:["You have successfully created",s("br",{})," an account"]}),s(vD,{to:"/business",children:s("button",{children:"Continue"})})]})}),gD=h.div`
  width: 100%;
  height: 42vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`,mD=h.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`,yD=h.div``,vD=h(mr)`
  width: 40%;
  button {
    flex: 1;
    background-color: #d975c0;
    color: white;
    font-size: 13px;
    padding: 10px 0;
    width: 100%;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,xD=h.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,$D=()=>{const{data:e}=et({queryKey:["products"],queryFn:Ml}),[t,n]=C.useState(0),r=8,i=t*r,o=e==null?void 0:e.slice(i,i+r),a=o==null?void 0:o.filter(f=>f.category==="phone"),l=o==null?void 0:o.filter(f=>f.category==="electronics"),u=o==null?void 0:o.filter(f=>f.category==="food"),d=o==null?void 0:o.filter(f=>f.category==="clothing");var c=Intl.NumberFormat();return y(bD,{children:[y(bu,{children:[s(xu,{children:"Mobiles"}),s($u,{children:a==null?void 0:a.map((f,g)=>s(Qn,{id:f._id,index:g,name:f.name,price:c.format(f==null?void 0:f.price),img:f==null?void 0:f.avatar[0].url}))}),s(vu,{to:"/phone",children:s("button",{children:"See All"})})]}),y(bu,{children:[s(xu,{children:"Home Appliances"}),s($u,{children:l==null?void 0:l.map((f,g)=>s(Qn,{id:f._id,index:g,name:f.name,price:c.format(f==null?void 0:f.price),img:f==null?void 0:f.avatar[0].url}))}),s(vu,{to:"/electronics",children:s("button",{children:"See All"})})]}),y(bu,{children:[s(xu,{children:"Accessories"}),s($u,{children:d==null?void 0:d.map((f,g)=>s(Qn,{id:f._id,index:g,name:f.name,price:c.format(f==null?void 0:f.price),img:f==null?void 0:f.avatar[0].url}))}),s(vu,{to:"/clothing",children:s("button",{children:"See All"})})]}),y(bu,{children:[s(xu,{children:"Foodstuffs"}),s($u,{children:u==null?void 0:u.map((f,g)=>s(Qn,{id:f._id,index:g,name:f.name,price:c.format(f==null?void 0:f.price),img:f==null?void 0:f.avatar[0].url}))}),s(vu,{to:"/food",children:s("button",{children:"See All"})})]})]})},vu=h(_e)`
  width: 97%;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  button {
    background-color: #d975c0;
    color: white;
    font-size: 12px;
    padding: 8px 15px;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,xu=h.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;
`,$u=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
`,bu=h.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  border: 1.9px solid #d975c0;
  padding: 0 10px;
  margin: 20px 0;
  border-radius: 5px;

  
`,bD=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,wD=()=>s(SD,{children:y(CD,{children:[s(PD,{children:s(vS,{fontSize:"50px",color:"red"})}),s(_D,{children:"Incorrect OTP number, please try again"}),s(OD,{to:"/auth/verify",children:s("button",{children:"Try again"})})]})}),SD=h.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`,CD=h.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`,PD=h.div``,OD=h(_e)`
  width: 40%;
  button {
    flex: 1;
    background-color: #d975c0;
    color: white;
    font-size: 13px;
    padding: 10px 0;
    width: 100%;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,_D=h.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,Ym=[{name:"Nigeria",flag:"https://cdn-icons-png.flaticon.com/512/8603/8603374.png"},{name:"Ghana",flag:"https://cdn-icons-png.flaticon.com/512/8603/8603142.png"}],Ow="https://crossbackend.onrender.com",Tr=async e=>(await dt.get(`${Ow}/api/order`)).data.data,kD=e=>dt.get(`${Ow}/api/order/${e}`).then(n=>n.data.data),ND="https://crossbackend.onrender.com",ED=()=>{const e=Ot();var t=Intl.NumberFormat();const n=Aa(k=>k.reducers.cartItem),r=Aa(k=>k.reducers.qty),i=n==null?void 0:n.reduce((k,de)=>k+de.qty*de.price,0),[o,a]=C.useState(Ym);let[l,u]=C.useState(0);const[d,c]=C.useState(""),[f,g]=C.useState(""),[$,v]=C.useState(""),[b,w]=C.useState(""),[m,p]=C.useState(""),[x,S]=C.useState(""),[P,_]=C.useState(""),[T,R]=C.useState(""),[Y,z]=C.useState(""),[ie,M]=C.useState(),[L,J]=C.useState(!1),[F,ee]=C.useState(!1),[te,j]=C.useState("Payment before delivery"),[N,E]=C.useState([]),U=()=>{const k=n.map(de=>({productID:de._id,sellerID:de.user,qty:de.qty}));E(k)},D=()=>{u(()=>l+1),l>=o.length-1&&u(()=>l=0)},H=()=>{v(o[l].name)},W=Ht({mutationKey:["order"],mutationFn:async({firstName:k,lastName:de,email:Z,order_No:Ce,payment_method:me,country:ge,Localgovt:he,state:ke,apartment:De,nearestBusStop:fe,products:O,subtotal:I,totalQty:A,address:re})=>{await dt.post(`${ND}/api/order/create`,{firstName:k,lastName:de,email:Z,order_No:Ce,payment_method:me,country:ge,Localgovt:he,state:ke,apartment:De,nearestBusStop:fe,products:O,subtotal:I,totalQty:A,address:re}).then(q=>{e("/finishshipping"),console.log(q.data),localStorage.setItem("order",JSON.stringify(q.data.data))}).catch(q=>{console.log(q)})},onError:k=>{console.log(k)}}),oe=k=>{k.preventDefault(),(f.length==0||b.length==0||d.length==0||$.length==0||T.length==0||!te||P.length==0||x.length==0||Y.length==0||N.length==0||x.length==0)&&(ee(!0),alert("All inputs most be filed ")),W.mutate({firstName:f,lastName:b,email:d,order_No:ie,payment_method:te,country:$,Localgovt:T,state:P,apartment:x,nearestBusStop:Y,products:N,subtotal:i,totalQty:r,address:m})};return C.useEffect(()=>{H(),U()},[l]),s("div",{children:s(HD,{children:y(BD,{children:[s(UD,{children:y(zD,{onSubmit:oe,children:[y(gx,{children:[s(o0,{children:"Contact Information"}),s(zn,{children:"Email"}),s(Un,{children:s(rr,{placeholder:"email",value:d,onChange:k=>c(k.target.value)})})]}),y(gx,{children:[s(o0,{children:"Payment Method"}),s(Un,{children:y(jD,{children:[L?y(Cu,{onClick:()=>{J(!1),j("Payment before delivery")},children:[s(Su,{bg:"fff"}),s(wu,{children:"Payment on delivery"})]}):y(Cu,{onClick:()=>{J(!0),j("Payment on delivery")},children:[s(Su,{bg:""}),s(wu,{children:"Payment on delivery"})]}),s(LD,{}),L?y(Cu,{onClick:()=>{J(!1),j("Payment before delivery")},children:[s(Su,{bg:""}),s(wu,{children:"Payment before delivery"})]}):y(Cu,{onClick:()=>{J(!0),j("Payment on delivery")},children:[s(Su,{bg:"fff"}),s(wu,{children:"Payment before delivery"})]})]})})]}),y(Pu,{children:[s(o0,{children:"Shipping Address"}),s(zn,{children:"Country"}),y(AD,{children:[" ",s(ID,{src:o[l].flag}),s(TD,{onClick:D,children:s(Wt,{})})]})]}),y(mx,{children:[y(px,{children:[s(zn,{children:"First Name"}),s(Un,{children:s(rr,{placeholder:"First Name",value:f,onChange:k=>g(k.target.value)})})]}),y(px,{children:[s(zn,{children:"Last Name"}),s(Un,{children:s(rr,{placeholder:"Last Name",value:b,onChange:k=>w(k.target.value)})})]})]}),y(Pu,{children:[s(zn,{children:"Address"}),s(Un,{children:s(rr,{placeholder:"Address",value:m,onChange:k=>p(k.target.value)})})]}),y(Pu,{children:[s(zn,{children:"Apartment, Suite etc.... (Optional)"}),s(Un,{children:s(rr,{placeholder:"Apartment, Suite etc....",value:x,onChange:k=>S(k.target.value)})})]}),y(mx,{children:[y(i0,{children:[s(zn,{children:"State"}),s(Un,{children:s(rr,{placeholder:"Lagos",value:P,onChange:k=>_(k.target.value)})})]}),y(i0,{children:[s(zn,{children:"LGA"}),s(Un,{children:s(rr,{placeholder:"Ajeromi",value:T,onChange:k=>R(k.target.value)})})]}),y(i0,{children:[s(zn,{children:"Nearest B/Stop"}),s(Un,{children:s(rr,{placeholder:"OJA",value:Y,onChange:k=>z(k.target.value)})})]})]}),y(Pu,{children:[s(zn,{children:"Phone number"}),s(Un,{children:s(rr,{placeholder:"Phone number",type:"number",value:ie,onChange:k=>M(k.target.value)})})]}),y(MD,{children:[y(DD,{children:[s("span",{children:s(mS,{})}),s("div",{onClick:()=>{e(-1)},children:"Return to Cart"})]}),s(FD,{type:"submit",children:"Continue Shopping"})]})]})}),s(RD,{children:n==null?void 0:n.map((k,de)=>s(Hm,{index:de,name:k.name,price:t.format(k.price),shippingFee:k==null?void 0:k.shippingFee,totalPrice:t.format(i),subtotal:t.format(k.price*k.qty),qty:k.qty,id:k._id}))})]})})})},ID=h.img`
  width: 40px;
`,TD=h.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,px=h.div`
  width: 45%;
`,i0=h.div`
  width: 30%;
`,AD=h.div`
  font-weight: 700;
  width: 95%;
  padding: 10px 10px;
  display: flex;
  border: 1.7px solid grey;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  // background-color: gold;
  height: 30px;

  span {
    margin-left: 10px;
    position: relative;
    bottom: -3px;
    cursor: pointer;
  }
  div {
  }
`,zn=h.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 6px;
`,RD=h.div`
  flex: 1;

  @media (max-width: 768px ){
    display: none;
  }
  /* background-color: blue; */
`,FD=h.button`
  padding: 15px 20px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`,DD=h.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-weight: 600;
    margin-left: 10px;
    color: #3c3c3c;
  }
`,MD=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin-top: 30px;

  span {
    margin-top: 5px;
  }
`,LD=h.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,wu=h.div`
  font-weight: 700;
  margin-right: 20px;
`,Su=h.div`
  border: 1px solid black;
  background-color: ${({bg:e})=>e?"#D975C0":"transparent"};
  border-radius: 50%;
  height: 25px;
  width: 25px;
  cursor: pointer;
`,Cu=h.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,jD=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,rr=h.input`
  width: 90%;
  height: 30px;
  border: 0px;
  outline: none;
  /* margin-right: 20px; */
`,Un=h.div`
  border: 1px solid gray;
  width: 100%;
  /* height: 40px; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 10px 0px;

  span {
    color: blue;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    width: 100px;
  }
`,o0=h.div`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 14px;
`,gx=h.div`
  margin-bottom: 50px;
`,Pu=h.div`
  margin-bottom: 20px;
`,mx=h.div`
  margin-bottom: 20px;
  display: flex;

  justify-content: space-between;
  align-items: center;
`,zD=h.form`
  width: 90%;
  margin-top: 20px;
`,UD=h.div`
  flex: 1;
  border-right: 2px solid lightgray;
  display: flex;
  justify-content: center;
  /* background-color: gold; */
`,BD=h.div`
  width: 95%;
  display: flex;
`,HD=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,YD=({index:e,totalPrice:t,subtotal:n,props:r})=>{var o,a,l,u,d,c;var i=Intl.NumberFormat();return s("div",{children:y(ZD,{children:[y($x,{children:[y(KD,{children:[s(QD,{children:r.qty}),s(GD,{src:(a=(o=r==null?void 0:r.productID)==null?void 0:o.avatar[0])==null?void 0:a.url})]}),y(qD,{children:[s(VD,{children:(l=r==null?void 0:r.productID)==null?void 0:l.name}),y(a0,{children:["₦ ",i.format((u=r==null?void 0:r.productID)==null?void 0:u.price)]})]})]}),s(xx,{}),s($x,{children:y(WD,{children:[y(yx,{children:[s(vx,{children:"Subtotal"}),y(a0,{children:["₦",i.format((r==null?void 0:r.qty)*((d=r==null?void 0:r.productID)==null?void 0:d.price))]})]}),y(yx,{children:[s(vx,{children:"Shipping Fee"}),y(a0,{children:["₦ ",i.format((c=r==null?void 0:r.productID)==null?void 0:c.shoppingFee)]})]})]})}),s(xx,{})]},e)})},WD=h.div``,yx=h.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  margin: 10px 0px;
`,a0=h.div`
  font-weight: 700;
`,vx=h.div`
  font-size: 18px;
  font-weight: 600;
  /* margin-bottom: 10px; */
`,VD=h.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,qD=h.div`
  margin-left: 20px;
`,xx=h.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,GD=h.img`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 5px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`,QD=h.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #d975c0;
  color: white;
  position: relative;
  left: 85px;
  top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`,KD=h.div`
  margin-right: 20px;
`,$x=h.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 90%;
`,ZD=h.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,JD=()=>{var f,g,$;const e=Rm(),t=Ot(),n=JSON.parse(localStorage.getItem("order")),r=Aa(v=>v.reducers.cartItem),i=n==null?void 0:n._id,{data:o}=et({queryKey:["order",i],queryFn:()=>kD(i)});var a=Intl.NumberFormat();const l=Ht({mutationKey:["products"],mutationFn:FF,onSuccess:()=>{t("/allitems"),e(VR(r)),localStorage.removeItem("order")}}),u=(f=n==null?void 0:n.products)==null?void 0:f.map(v=>v==null?void 0:v.productID),d=(g=n==null?void 0:n.products)==null?void 0:g.map(v=>v==null?void 0:v.qty),c=()=>{l.mutate({ids:u,quantities:d})};return s("div",{children:s(yM,{children:y(mM,{children:[y(gM,{children:[y(oM,{children:[s(aM,{children:s(kl,{fontSize:"32px",color:"white"})}),y(sM,{children:[y(lM,{children:[" ","Order ",s("span",{children:o==null?void 0:o.order_No})]}),y(uM,{children:[" ","Thank you ",s("span",{children:o==null?void 0:o.firstName})]})]})]}),y(pM,{children:[y(f0,{children:[s(c0,{children:"Confirmation"}),s(d0,{children:s(bx,{children:"Your order will be shipped immediately"})})]}),y(f0,{children:[s(c0,{children:"Shipping Update"}),s(d0,{children:s(bx,{children:"You will get shipping and delivery update by email"})})]}),y(f0,{children:[s(c0,{children:"Customer Information"}),s(d0,{children:y(hM,{children:[y(u0,{children:[s(l0,{children:"Contact Information"}),s(s0,{children:o==null?void 0:o.email})]}),y(u0,{children:[s(l0,{children:"Shipping Address"}),s(s0,{children:o==null?void 0:o.address})]}),y(u0,{children:[s(l0,{children:"Payment Method"}),s(s0,{children:o==null?void 0:o.payment_method})]})]})})]}),s(fM,{children:s(cM,{onClick:c,children:"Complete Shipping"})})]})]}),y(dM,{children:[($=o==null?void 0:o.products)==null?void 0:$.map((v,b)=>s(YD,{index:b,totalPrice:a.format(o==null?void 0:o.subtotal),subtotal:o==null?void 0:o.totalQty,props:v})),s(iM,{children:s(XD,{children:y(eM,{children:[s(nM,{children:"Total"}),y(tM,{children:["₦",a.format(o==null?void 0:o.subtotal)]})]})})}),s(rM,{})]})]})})})},XD=h.div``,eM=h.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  margin: 10px 0px;
`,tM=h.div`
  font-weight: 700;
`,nM=h.div`
  font-size: 18px;
  font-weight: 600;
  /* margin-bottom: 10px; */
`,rM=h.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,iM=h.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 90%;
  margin-left: 15px;
`,oM=h.div`
  display: flex;
  padding: 0 10px;
`,aM=h.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d975c0;
  border-radius: 7px;
`,sM=h.div`
  padding: 3px 10px;
`,lM=h.div`
  font-weight: lighter;
  font-size: 12px;
`,uM=h.div`
  font-weight: 500;
  font-size: 14px;
  margin-top: 6px;
`,bx=h.div`
  margin-left: 10px;
  font-weight: 600;
  color: #363636;
`,dM=h.div`
  flex: 1;
  height: 100vh;
  border-left: 3px solid lightgray;
  /* background-color: blue; */

  @media (max-width: 700px){
    display: none;
  }
`,cM=h.button`
  padding: 15px 20px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;h.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-weight: 600;
    margin-left: 10px;
    color: #3c3c3c;
  }
`;const fM=h.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 10px;
  margin-top: 30px;
`;h.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`;const s0=h.div`
  font-weight: 500;
  margin-right: 20px;
`,l0=h.div`
  font-weight: 700;
`,u0=h.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,hM=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;h.input`
  width: 90%;
  height: 30px;
  border: 0px;
  outline: none;
  margin-left: 10px;
`;const d0=h.div`
  border: 1px solid gray;
  width: 100%;
  /* height: 40px; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  border-radius: 5px;
  padding: 10px 0px;

  span {
    color: blue;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    width: 100px;
  }
`,c0=h.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,f0=h.div`
  margin: 10px;
`,pM=h.div`
  width: 90%;
  margin-top: 20px;
`,gM=h.div`
  flex: 1;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: gold; */
`,mM=h.div`
  width: 95%;
  display: flex;
`,yM=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;var wx=function(e){return typeof e=="object"&&e!==null},vM=function(e){var t=e.value,n=t===void 0?"":t,r=e.numInputs,i=r===void 0?4:r,o=e.onChange,a=e.renderInput,l=e.shouldAutoFocus,u=l===void 0?!1:l,d=e.inputType,c=d===void 0?"text":d,f=e.renderSeparator,g=e.placeholder,$=e.containerStyle,v=e.inputStyle,b=ne.useState(0),w=b[0],m=b[1],p=ne.useRef([]),x=function(){return n?n.toString().split(""):[]},S=c==="number"||c==="tel";ne.useEffect(function(){p.current=p.current.slice(0,i)},[i]),ne.useEffect(function(){var F;u&&((F=p.current[0])===null||F===void 0||F.focus())},[u]);var P=function(){if(typeof g=="string"){if(g.length===i)return g;g.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},_=function(F){var ee=S?!isNaN(Number(F)):typeof F=="string";return ee&&F.trim().length===1},T=function(F){var ee=F.target.value;if(_(ee))M(ee),ie(w+1);else{var te=F.nativeEvent;te.data===null&&te.inputType==="deleteContentBackward"&&(F.preventDefault(),M(""),ie(w-1))}},R=function(F){return function(ee){m(ee),F.target.select()}},Y=function(){m(w-1)},z=function(F){var ee=x();F.code==="Backspace"?(F.preventDefault(),M(""),ie(w-1)):F.code==="Delete"?(F.preventDefault(),M("")):F.code==="ArrowLeft"?(F.preventDefault(),ie(w-1)):F.code==="ArrowRight"||F.key===ee[w]?(F.preventDefault(),ie(w+1)):(F.code==="Spacebar"||F.code==="Space"||F.code==="ArrowUp"||F.code==="ArrowDown")&&F.preventDefault()},ie=function(F){var ee,te,j=Math.max(Math.min(i-1,F),0);p.current[j]&&((ee=p.current[j])===null||ee===void 0||ee.focus(),(te=p.current[j])===null||te===void 0||te.select(),m(j))},M=function(F){var ee=x();ee[w]=F[0],L(ee)},L=function(F){var ee=F.join("");o(ee)},J=function(F){var ee;F.preventDefault();var te=x(),j=w,N=F.clipboardData.getData("text/plain").slice(0,i-w).split("");if(!(S&&N.some(function(U){return isNaN(Number(U))}))){for(var E=0;E<i;++E)E>=w&&N.length>0&&(te[E]=(ee=N.shift())!==null&&ee!==void 0?ee:"",j++);ie(j),L(te)}};return ne.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},wx($)&&$),className:typeof $=="string"?$:void 0},Array.from({length:i},function(F,ee){return ee}).map(function(F){var ee,te,j;return ne.createElement(ne.Fragment,{key:F},a({value:(ee=x()[F])!==null&&ee!==void 0?ee:"",placeholder:(j=(te=P())===null||te===void 0?void 0:te[F])!==null&&j!==void 0?j:void 0,ref:function(N){return p.current[F]=N},onChange:T,onFocus:function(N){return R(N)(F)},onBlur:Y,onKeyDown:z,onPaste:J,autoComplete:"off",maxLength:1,"aria-label":"Please enter OTP character ".concat(F+1),style:Object.assign({width:"1em",textAlign:"center"},wx(v)&&v),className:typeof v=="string"?v:void 0,type:c},F),F<i-1&&(typeof f=="function"?f(F):f))}))};const xM=()=>{const e=Ot(),[t,n]=C.useState(""),r=JSON.parse(localStorage.getItem("user")),i=Ht({mutationFn:GE,onSuccess:()=>{r.isSeller===!0&&(r.completed===!0&&e("/seller-dashboard"),e("/auth/personalinfo")),r.completed===!0&&e("/seller-dashboard")},onError:()=>{e("/auth/otperror")}});return s($M,{children:y(bM,{children:[s(wM,{children:"OTP Verification!"}),s(CM,{children:"Please enter the OTP you received"}),s(vM,{style:{border:"1px solid gold"},value:t,onChange:n,numInputs:6,renderSeparator:s("span",{children:" "}),renderInput:a=>s("input",{...a}),containerStyle:"containerStyle",inputStyle:"inputStyle",width:"70px"}),s(SM,{children:s("button",{onClick:()=>{const a=r._id;i.mutate({id:a,otp:t})},children:"Enter"})})]})})},$M=h.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`,bM=h.div`
  /* width: 280px; */
  /* height: 150px; */
  /* border: 1.8px solid #d975c0; */
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;

  .just-display{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,wM=h.div`
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
`,SM=h.div`
  width: 40%;
  button {
    flex: 1;
    background-color: #d975c0;
    color: white;
    font-size: 13px;
    padding: 10px 0;
    width: 100%;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,CM=h.div`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
`;h.input`
  width: 2rem;
  height: 2rem;
  border: 2px solid #d975c0;
  outline: none;
  margin: 5px;

  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
  ::-webkit-outer-spin-button{
    appearance: none;
  }
  ::-webkit-inner-spin-button{
    appearance: none;
  }

`;const PM=()=>{const e=Ot(),[t,n]=C.useState(""),[r,i]=C.useState(""),[o,a]=C.useState(""),l=Ht({mutationFn:JE,onSuccess:c=>{console.log(c),e("/auth/review")},onError:c=>{console.log(c.message)}}),u=JSON.parse(localStorage.getItem("user"));return s("div",{children:s(IM,{children:y(EM,{children:[s(NM,{children:"Provide Bank Details"}),y(kM,{children:["Enter every necessary details to create",s("br",{})," your own seller account"," "]}),y(_M,{onSubmit:c=>{c.preventDefault();const f=u._id,g=!0,$=parseInt(o);l.mutate({id:f,bankName:t,accountName:r,accNumber:$,completed:g})},children:[y(m0,{children:[s(g0,{children:"Bank"}),s(h0,{children:s(p0,{placeholder:"Bank",value:t,onChange:c=>n(c.target.value)})})]}),y(m0,{children:[s(g0,{children:"Account Name"}),s(h0,{children:s(p0,{placeholder:"Account Name",value:r,onChange:c=>i(c.target.value)})})]}),y(m0,{children:[s(g0,{children:"Account Number"}),s(h0,{children:s(p0,{placeholder:"Account Number",type:"number",value:o,onChange:c=>a(c.target.value)})})]}),s(OM,{type:"submit",children:l.status==="Loading..."?"Loadding":"Continue"})]})]})})})},OM=h.button`
  width: 360px;
  height: 50px;
  border: 0px;
  background-color: #ec00b1;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  margin: 20px;
  outline: none;
`;h.div`
  font-size: 15px;
  font-weight: 700;
  color: #ff0000;
`;const h0=h.div`
  width: 350px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`,p0=h.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: 0px;
  /* margin-bottom: 5px; */
  /* padding-left: 10px;
    padding-right: 10px; */
  ::-webkit-outer-spin-button{
    appearance: none;
  }
  ::-webkit-inner-spin-button{
    appearance: none;
  }
`,g0=h.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`,m0=h.div`
  margin-bottom: 10px;
`,_M=h.form`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,kM=h.div`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 20px;
`,NM=h.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`,EM=h.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  /* border: 1px solid gray; */
`,IM=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,TM=()=>{const e=Ot(),[t,n]=C.useState(Ym);let[r,i]=C.useState(0);const[o,a]=C.useState(""),[l,u]=C.useState("Default"),[d,c]=C.useState("123456"),[f,g]=C.useState(""),[$,v]=C.useState(""),[b,w]=C.useState(""),m=()=>{i(()=>r+1),r>=t.length-1&&i(()=>r=0)},p=()=>{w(t[r].name)},x=Ht({mutationFn:ZE,onSuccess:_=>{console.log(_),e("/auth/information")},onError:_=>{console.log(_.message)}});C.useEffect(()=>{p()},[r]);const S=JSON.parse(localStorage.getItem("user")),P=_=>{_.preventDefault();const T=S._id,R=parseInt(d);x.mutate({id:T,address:o,address2:l,shippingFrom:b,codePostal:R,shopName:f,city:$})};return console.log(b),s("div",{children:s(zM,{children:y(jM,{children:[s(LM,{children:"Business Information "}),y(MM,{children:["Enter every necessary details to create your own seller account"," "]}),y(DM,{onSubmit:P,children:[y($o,{children:[s(xo,{children:"Shop Name *"}),s(vo,{children:s(is,{value:f,onChange:_=>g(_.target.value)})})]}),y($o,{children:[s(xo,{children:"Postal code/Zip code"}),s(vo,{children:s(is,{type:"number",value:d,onChange:_=>c(_.target.value)})})]}),y($o,{children:[s(xo,{children:"Address *"}),s(vo,{children:s(is,{value:o,onChange:_=>a(_.target.value)})})]}),y($o,{children:[s(xo,{children:"Address 2"}),s(vo,{children:s(is,{value:l,onChange:_=>u(_.target.value)})})]}),y($o,{children:[s(xo,{children:"City / Town"}),s(vo,{children:s(is,{value:$,onChange:_=>v(_.target.value)})})]}),y($o,{children:[s(xo,{children:"What country are you shipping from?"}),y(vo,{children:[s(AM,{src:t[r].flag}),s(FM,{onClick:m,children:s(Wt,{})})]})]}),s(RM,{type:"submit",children:x.status==="loading"?"Loading...":"Continue"})]})]})})})},AM=h.img`
  width: 40px;
`,RM=h.button`
  width: 360px;
  height: 50px;
  border: 0px;
  background-color: #ec00b1;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  margin: 20px;
  outline: none;
`;h.div`
  font-size: 15px;
  font-weight: 700;
  color: #ff0000;
`;const FM=h.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,vo=h.div`
  width: 350px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`,is=h.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: 0px;
  /* margin-bottom: 5px; */
  /* padding-left: 10px;
    padding-right: 10px; */
    ::-webkit-outer-spin-button{
    appearance: none;
  }
  ::-webkit-inner-spin-button{
    appearance: none;
  }
`,xo=h.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`,$o=h.div`
  margin-bottom: 10px;
`,DM=h.form`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,MM=h.div`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 20px;
`,LM=h.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`,jM=h.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  /* border: 1px solid gray; */
`,zM=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,UM=()=>{const e=Ot(),[t,n]=C.useState(Ym);let[r,i]=C.useState(0),[o,a]=C.useState(!1);const[l,u]=C.useState(""),[d,c]=C.useState(""),[f,g]=C.useState(""),$=()=>{if(o===!0)return a(()=>o=!1);a(()=>o=!0)},v=()=>{i(()=>r+1),r>=t.length-1&&i(()=>r=0)},b=()=>{g(t[r].name)},w=Ht({mutationFn:KE,onSuccess:x=>{console.log(x),e("/auth/businessinfo")},onError:x=>{console.log(x.message)}});C.useEffect(()=>{b()},[r]);const m=JSON.parse(localStorage.getItem("user"));return s("div",{children:s(JM,{children:y(ZM,{children:[s(KM,{children:"Personal Details "}),s(QM,{children:"Almost there, just few more details"}),y(GM,{onSubmit:x=>{x.preventDefault();const S=m._id;w.mutate({id:S,gender:l,DateOfBirth:d,country:f})},children:[y(x0,{children:[s(v0,{children:"Date of Birth"}),s(y0,{children:s(qM,{placeholder:"04/19/1999",type:"date",value:d,onChange:x=>{c(x.target.value)}})})]}),y(x0,{children:[s(v0,{children:"Gender"}),s(y0,{children:y(BM,{value:l,onChange:x=>{u(x.target.value)},children:[s("option",{children:"Select"}),s("option",{children:"Male"}),s("option",{children:"Female"}),s("option",{children:"Other"})]})})]}),y(x0,{children:[s(v0,{children:"Country"}),y(y0,{children:[s(WM,{src:t[r].flag}),s(VM,{onClick:v,children:s(Wt,{})})]})]}),o?s(Sx,{bg:"",type:"submit",children:w.status==="loading"?"Loading...":"Continue"}):s(Sx,{bg:"fff",disabled:!0,children:"Continue"}),y(YM,{children:[" ",s(HM,{type:"checkbox",onClick:$}),"Don't have an account? ",s("span",{children:"Terms and Conditions"})]})]})]})})})},BM=h.select`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
`,HM=h.input`
  margin-right: 10px;
  cursor: pointer;
`,YM=h.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,WM=h.img`
  width: 40px;
`,Sx=h.button`
  width: 360px;
  height: 50px;
  border: 0px;
  background-color:${({bg:e})=>e===""?"#D975C0":"#c4c4c4"};
  border-radius: 5px;
  color: ${({bg:e})=>e===""?"white":"black"};
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  margin: 20px;
  outline: none;
`;h.div`
  font-size: 15px;
  font-weight: 700;
  color: #ff0000;
`;const VM=h.div`
  cursor: pointer;
`,y0=h.div`
  width: 350px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px;

  /* input{
    display: none;
  } */
`,qM=h.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: 0px;
`,v0=h.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`,x0=h.div`
  margin-bottom: 10px;
`,GM=h.form`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,QM=h.div`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 20px;
`,KM=h.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`,ZM=h.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  /* border: 1px solid gray; */
`,JM=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;function XM(e){return Ae({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 6a3.939 3.939 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 0 0-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6zm-1 10h2v2h-2z"}},{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"}}]})(e)}function kf(e){return Ae({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"}}]})(e)}function Ya(e){return Ae({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"}}]})(e)}const eL=()=>{const{data:e}=et({queryKey:["products"],queryFn:Ml}),[t,n]=C.useState(0),r=8,i=t*r,o=e==null?void 0:e.slice(i,i+r);return s(nL,{children:y(tL,{children:[s(iL,{children:"Featured "}),s(sL,{children:o==null?void 0:o.map((a,l)=>s(aL,{children:s(oL,{children:s(rL,{src:a==null?void 0:a.avatar[0].url})})},l))})]})})},tL=h.div`
  width: 93%;
  /* height: 200px; */
  overflow-x: auto;
  -ms-overflow-style: none;
  background: #D9D9D9;
`,nL=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`,rL=h.img`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  background-color: gold;
  margin: 20px;
`,iL=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
  margin-top: 10px;
`,oL=h.div`
  display: flex;
  align-items: center;

  :hover {
    color: blue;
  }
  cursor: pointer;
`;h.div`
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 400;
`;h.tr``;const aL=h.tr`
 
`,sL=h.div`
  width: 78rem;
  /* height: 150px; */
  /* padding: 0px 20px; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* overflow-x: scroll; */
`,lL=()=>{const{data:e}=et({queryKey:["products"],queryFn:Ml}),[t,n]=C.useState(0),r=8,i=t*r,o=e==null?void 0:e.slice(i,i+r),a=o==null?void 0:o.filter(f=>f.category==="phone"),l=o==null?void 0:o.filter(f=>f.category==="electronics"),u=o==null?void 0:o.filter(f=>f.category==="food"),d=o==null?void 0:o.filter(f=>f.category==="clothing");var c=Intl.NumberFormat();return y(uL,{children:[s(eL,{}),y(Nu,{children:[s(_u,{children:"Mobiles"}),s(ku,{children:a==null?void 0:a.map((f,g)=>s(Qn,{id:f._id,name:f.name,price:c.format(f==null?void 0:f.price),img:f==null?void 0:f.avatar[0].url}))}),s(Ou,{to:"/phone",children:s("button",{children:"See All"})})]}),y(Nu,{children:[s(_u,{children:"Home Appliances"}),s(ku,{children:l==null?void 0:l.map((f,g)=>s(Qn,{id:f._id,name:f.name,price:c.format(f==null?void 0:f.price),img:f==null?void 0:f.avatar[0].url}))}),s(Ou,{to:"/electronics",children:s("button",{children:"See All"})})]}),y(Nu,{children:[s(_u,{children:"Accessories"}),s(ku,{children:d==null?void 0:d.map((f,g)=>s(Qn,{id:f._id,name:f.name,price:c.format(f==null?void 0:f.price),img:f==null?void 0:f.avatar[0].url}))}),s(Ou,{to:"/clothing",children:s("button",{children:"See All"})})]}),y(Nu,{children:[s(_u,{children:"Foodstuffs"}),s(ku,{children:u==null?void 0:u.map((f,g)=>s(Qn,{id:f._id,name:f.name,price:c.format(f==null?void 0:f.price),img:f==null?void 0:f.avatar[0].url}))}),s(Ou,{to:"/food",children:s("button",{children:"See All"})})]})]})},Ou=h(_e)`
  width: 97%;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  button {
    width: 9%;
    background-color: #d975c0;
    color: white;
    font-size: 12px;
    padding: 8px 0;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,_u=h.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;
`,ku=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
`,Nu=h.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  border: 1.9px solid #d975c0;
  padding: 0 10px;
  margin: 20px 0;
  border-radius: 5px;

  
`,uL=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,dL=()=>{C.useState();const e=Aa(r=>r.reducers.cartItem),t=e==null?void 0:e.reduce((r,i)=>r+i.qty*i.price,0);var n=Intl.NumberFormat();return s("div",{children:s(bL,{children:y($L,{children:[y(vL,{children:[s(mL,{children:"Shopping Cart"}),y(Px,{children:[s(yL,{children:"Item"}),y(Cx,{children:[s("span",{children:"Price "}),s("span",{children:"Quantity"}),s("span",{children:"Total Price"})]})]})]}),e==null?void 0:e.map(r=>s(pL,{children:y(Px,{children:[y(gL,{children:[s("img",{src:r==null?void 0:r.avatar[0].url}),s("span",{children:r==null?void 0:r.name})]}),y(Cx,{children:[y("span",{children:["₦",r.price]}),s("div",{children:r.qty}),y("span",{children:["₦",n.format(r.qty*r.price)]})]})]})},r._id)),s(xL,{children:y(hL,{children:[s("span",{children:"SUBTOTAL"}),y("div",{children:["₦",n.format(t)]}),s(mr,{to:"/checkout",children:s(fL,{children:" Checkout"})}),y(cL,{children:[s(kA,{color:"#0a223a",fontSize:"40px"}),s(fS,{fontSize:"40px"})]})]})})]})})})},cL=h.div`
  width: 130px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
`,fL=h.button`
  padding: 12px 35px;
  border: 0;
  outline: none;
  background-color: #e8559e;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`,hL=h.div`
  width: 150px;
  margin-right: 34px;
  span {
    font-size: 18px;
    font-weight: 700;
  }

  div {
    font-size: 13px;
    font-weight: 500;
    margin: 8px 0;
  }
`,Cx=h.div`
  display: flex;
  /* width: 20%; */
  display: flex;
  align-items: center;
  span {
    font-size: 13px;
    font-weight: 500;
    margin: 15px;
  }

  div {
    font-size: 13px;
    font-weight: 500;
    border: 1.8px solid black;
    padding: 15px 20px;
  }
`,pL=h.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1.9px solid grey;
  padding: 30px 0;
`,gL=h.div`
  width: 380px;
  display: flex;
  img {
    height: 130px;
    width: 240px;
    object-fit: cover;
    border-radius: 5px;
  }

  span {
    font-size: 13px;
    font-weight: 500;
    padding-left: 10px;
  }
`,mL=h.div`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 40px;
`,yL=h.div`
  margin: 10px;
  font-size: 13px;
  font-weight: 500;
`,Px=h.div`
  width: 92%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,vL=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1.9px solid grey;
  padding: 20px 0;
`,xL=h.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1.9px solid grey;
  padding: 20px 0;
`,$L=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`,bL=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,wL=()=>{const{data:e}=et({queryKey:["products"],queryFn:Ml}),{id:t}=w5(),[n,r]=C.useState(0),i=20,o=n*i,a=e==null?void 0:e.slice(o,o+i),l=a==null?void 0:a.filter(d=>d.category===t);console.log(t);var u=Intl.NumberFormat();return s(OL,{children:y(PL,{children:[s(SL,{children:"Mobiles"}),s(CL,{children:l==null?void 0:l.map((d,c)=>s(Qn,{id:d._id,name:d.name,price:u.format(d==null?void 0:d.price),img:d==null?void 0:d.avatar[0].url}))})]})})},SL=h.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;
`,CL=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* background-color: gold; */
  /* overflow-x: auto; */
`,PL=h.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* border: 1.9px solid #d975c0; */
  padding: 0 10px;
  margin: 10px 0;
  border-radius: 5px;

  
`,OL=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,_L=()=>s("div",{children:s(zL,{children:y(jL,{children:[y(LL,{children:[y(kL,{children:[s(NL,{children:s(kl,{fontSize:"32px",color:"white"})}),y(EL,{children:[y(IL,{children:[" ","Order ",s("span",{children:"05432"})]}),y(TL,{children:[" ","Thank you ",s("span",{children:"Manel"})]})]})]}),y(ML,{children:[y(P0,{children:[s(C0,{children:"Contact"}),s(S0,{children:s(Ox,{children:"You@example.com"})})]}),y(P0,{children:[s(C0,{children:"Shipping Update"}),s(S0,{children:s(Ox,{children:"You will get shipping and delivery update by email"})})]}),y(P0,{children:[s(C0,{children:"Customer Information"}),s(S0,{children:y(DL,{children:[y(w0,{children:[s(b0,{children:"Contact Information"}),s($0,{children:"pay@gmail.com"})]}),y(w0,{children:[s(b0,{children:"Shipping Address"}),s($0,{children:"Location"})]}),y(w0,{children:[s(b0,{children:"Payment Method"}),s($0,{children:"Location"})]})]})})]}),s(FL,{children:s(RL,{children:"Complete Shipping"})})]})]}),s(AL,{children:s(Hm,{})})]})})}),kL=h.div`
  display: flex;
  padding: 0 10px;
`,NL=h.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d975c0;
  border-radius: 7px;
`,EL=h.div`
  padding: 3px 10px;
`,IL=h.div`
  font-weight: lighter;
  font-size: 12px;
`,TL=h.div`
  font-weight: 500;
  font-size: 14px;
  margin-top: 6px;
`,Ox=h.div`
  margin-left: 10px;
  font-weight: 600;
  color: #363636;
`,AL=h.div`
  flex: 1;
  height: 100vh;
  border-left: 3px solid lightgray;
  /* background-color: blue; */
`,RL=h.button`
  padding: 15px 20px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;h.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-weight: 600;
    margin-left: 10px;
    color: #3c3c3c;
  }
`;const FL=h.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 10px;
  margin-top: 30px;
`;h.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`;const $0=h.div`
  font-weight: 500;
  margin-right: 20px;
`,b0=h.div`
  font-weight: 700;
`,w0=h.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,DL=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;h.input`
  width: 90%;
  height: 30px;
  border: 0px;
  outline: none;
  margin-left: 10px;
`;const S0=h.div`
  border: 1px solid gray;
  width: 100%;
  /* height: 40px; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  border-radius: 5px;
  padding: 10px 0px;

  span {
    color: blue;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    width: 100px;
  }
`,C0=h.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,P0=h.div`
  margin: 10px;
`,ML=h.div`
  width: 90%;
  margin-top: 20px;
`,LL=h.div`
  flex: 1;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: gold; */
`,jL=h.div`
  width: 95%;
  display: flex;
`,zL=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,UL=()=>am([{path:"/",children:[{index:!0,element:s(ZC,{})},{path:"/auth",children:[{index:!0,element:s(F3,{})},{path:"user",element:s(F3,{})},{path:"signin",element:s(rA,{})},{path:"verify",element:s(xM,{})},{path:"information",element:s(pA,{})},{path:"bankdetails",element:s(PM,{})},{path:"businessinfo",element:s(TM,{})},{path:"personalInfo",element:s(UM,{})},{path:"review",element:s(lD,{})},{path:"acct-review",element:s(pD,{})},{path:"otperror",element:s(wD,{})}]},{path:"/allitems",element:s($D,{})},{path:"/featured",element:s(lL,{})},{path:"/:id",element:s(wL,{})},{path:"/checkout",element:s(ED,{})},{path:"/finishshipping",element:s(JD,{})},{path:"/ready-to-ship",element:s(_L,{})},{path:"/cart",element:s(dL,{})},{path:"/detail/:id",element:s(BF,{})},{path:"/payment",children:[{index:!0,element:s(ZF,{})}]}]}]);function _x(e){return Ae({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}const BL=({myRef:e})=>{const t=JSON.parse(localStorage.getItem("user"));return s("div",{children:y(HL,{ref:e,children:[s(_e,{to:"/electronics",style:{textDecoration:"none"},children:s(Ni,{children:"Electronics"})}),s(_e,{to:"/phone",style:{textDecoration:"none"},children:s(Ni,{children:"Mobile Phones"})}),s(_e,{to:"/clothing",style:{textDecoration:"none"},children:s(Ni,{children:"Clothing & Fashion"})}),s(_e,{to:"/food",style:{textDecoration:"none"},children:s(Ni,{children:"Food & Groceries"})}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),t?s(Rs,{children:s(Ni,{onClick:()=>{localStorage.removeItem("user")},children:"Log Out"})}):y(Rs,{children:[s(Ni,{children:"Create Account"}),s(Ni,{children:"Create Seller"})]})]})})},HL=h.div`
  width: 250px;
  height: 100vh;
  background-color: white;
  /* background-color: gold; */
  border-radius: 5px;

  position: fixed;
  top: 0px;
  /* left: 150px; */
  left: -1000px;
  z-index: 1;
  transition: all 350ms ease-in-out;
`,Ni=h.div`
  width: 95%;
  line-height: 4;
  padding-left: 10px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  font-weight: 700;
  transition: all 350ms ease-in-out;
  :hover {
    background-color: lightgray;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
  }
`,YL=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[i,o]=C.useState(!1),a=JSON.parse(localStorage.getItem("user")),l=C.useRef(),u=Aa(f=>f.reducers.cartItem),d=()=>{l.current.style.left="0px",o(!0)},c=()=>{l.current.style.left="-1000px",o(!1)};return s("div",{children:s(GL,{children:y(QL,{children:[y(KL,{children:[s("img",{src:"/logo 1.png"}),s("div",{children:"Cross Africa"})]}),y(ZL,{children:[y(Eu,{onMouseOver:()=>{t(!0)},onMouseLeave:()=>{t(!1)},children:[s("div",{children:"Categories"}),s("span",{children:s(Wt,{})})]}),e?y(qL,{onMouseOver:()=>{t(!0)},onMouseLeave:()=>{t(!1)},children:[s(_e,{to:"/electronics",style:{textDecoration:"none",width:"100%"},children:s(Lr,{children:"Electronics"})}),s(_e,{to:"/phone",style:{textDecoration:"none",width:"100%"},children:s(Lr,{children:"Mobile Phones"})}),s(_e,{to:"/clothing",style:{textDecoration:"none",width:"100%"},children:s(Lr,{children:"Clothing & Fashion"})}),s(_e,{to:"/food",style:{textDecoration:"none",width:"100%"},children:s(Lr,{children:"Food & Groceries"})})]}):null,y(XL,{children:[s("input",{placeholder:"Search product"}),s("button",{children:s(Ya,{})})]}),y(Eu,{onMouseOver:()=>{r(!0)},onMouseLeave:()=>{r(!1)},children:[s("div",{children:" Account"}),s("span",{children:s(Wt,{})})]}),n?s(VL,{onMouseOver:()=>{r(!0)},onMouseLeave:()=>{r(!1)},children:a?y(Rs,{children:[s(Lr,{children:"Profile"}),s(Lr,{children:"Log Out"})]}):y(Rs,{children:[s(_e,{to:"/user-signup",style:{textDecoration:"none",width:"100%"},children:s(Lr,{children:"Create Account"})}),s(_e,{to:"/seller-page",style:{textDecoration:"none",width:"100%"},children:s(Lr,{children:"Create Seller"})})]})}):null,y(Eu,{children:[s("div",{children:" Cart"}),s(_e,{to:"/cart",style:{textDecoration:"none"},children:y("span",{children:[s(uw,{color:"black"}),u.length>0?s(WL,{children:u.length}):null]})})]}),y(Eu,{children:[s("div",{children:"Help"}),s("span",{children:s(XM,{})})]}),s(JL,{children:i?s(_x,{size:"20px",onClick:c}):s(_x,{size:"20px",onClick:d})}),s("div",{onClick:c,children:s(BL,{myRef:l})})]})]})})})},WL=h.div`
  color: white;
  position: absolute;
  font-size: 10px;
  font-weight: 500;
  background-color: red;
  border-radius: 50%;
  /* padding: 5px; */
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -5px;
  right: -5px;
`,Lr=h.div`
  width: 100%;
  padding: 10px 0px;
  /* border-bottom: 1px solid lightgray; */
  cursor: pointer;
  text-align: center;
  font-weight: 600;

  :hover {
    background-color: lightgray;
  }
`,VL=h.div`
  width: 210px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  /* border: 1px solid blue; */
  border-radius: 5px;

  position: absolute;
  top: 60px;
  left: 60%;
  right: 40%;
  z-index: 1111;
  @media (max-width: 768px) {
    display: none;
  }
`,qL=h.div`
  width: 210px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  border-radius: 5px;

  position: absolute;
  top: 60px;
  left: 150px;
  z-index: 1111;

  @media (max-width: 768px) {
    display: none;
  }
`,GL=h.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #383333; */
  border-bottom: 1px solid lightgray;
`,QL=h.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`,KL=h.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 30px;
  flex: 0.2 0.3 auto;
  /* background: gold; */
  /* margin-bottom: 10px; */

  img {
    height: 60px;
    width: 60px;
  }

  div {
    font-weight: 700;
    font-size: 20px;
  }
`,ZL=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 85%; */
  flex: 1 0 100px;
  /* background-color: gold; */
  @media (max-width:768px) {
    justify-content: flex-end;
  }
  @media (max-width: 660px) {
    justify-content: flex-end;
  }
  width: 80%;
`,JL=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
`,Eu=h.div`
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: gold;
  height: 30px;
  cursor: pointer;
  margin-left: 10px;

  span {
    margin-left: 10px;
    position: relative;
    bottom: -3px;
  }
  :nth-child(1) {
    @media (max-width: 1000px) {
      display: none;
    }
  }
  :nth-child(3) {
    @media (max-width: 1000px) {
      display: none;
    }
  }
  
  /* :nth-child(1){
    @media (max-width: 1000px){
      display: none;
    }
  } */
`,XL=h.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
  @media (max-width:768px) {
    display: none;
  }
`,ej=()=>y("div",{children:[s(YL,{}),s(UL,{}),s(p5,{})]}),Qe=({children:e})=>{const t=JSON.parse(localStorage.getItem("user"));return(t==null?void 0:t.isSeller)===!0?e:s(vC,{to:"/"})},Iu=({pr:e,da:t,ti:n,bg:r,liveProducts:i,pending:o,approved:a})=>y(dj,{children:[y(uj,{bg:r,children:[s(sj,{children:n}),s(aj,{children:t})]}),y(lj,{children:[y(ij,{children:[y(rj,{children:[s(nj,{children:"Sales"}),s(tj,{children:e})]}),y(k0,{children:[y(_0,{children:[s(wo,{children:"Order/Unit"}),y(bo,{children:["10 ",s("span",{children:"20"})]})]}),y(O0,{children:[s(wo,{children:"Return"}),s(bo,{children:s("div",{children:"20"})})]})]})]}),y(oj,{children:[y(k0,{children:[o&&y(_0,{children:[s(wo,{children:"Pending"}),s(bo,{children:s("div",{children:o})})]}),y(O0,{children:[s(wo,{children:"Cancel Order"}),s(bo,{children:s("div",{children:"20"})})]})]})," ",y(k0,{children:[i&&y(_0,{children:[s(wo,{children:"Live Products"}),s(bo,{children:s("div",{children:i})})]}),a&&y(O0,{children:[s(wo,{children:"Aprroved product"}),s(bo,{children:s("div",{children:a})})]})]})]})]})]}),O0=h.div``,_0=h.div``,bo=h.div`
  margin-top: 8px;
  span {
    margin-left: 20px;
  }
  div {
    margin-left: 10px;
  }
`,wo=h.div``,tj=h.div`
  font-weight: 500;
  font-size: 18px;
`,nj=h.div`
  font-weight: 500;
  font-size: 12px;
`,rj=h.div`
  margin-top: 10px;
`,k0=h.div`
  font-weight: lighter;
  width: 100%;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
`,ij=h.div`
  border-bottom: 1.5px solid grey;
  height: 120px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 15px;
  flex-direction: column;
`,oj=h.div`
  border-bottom: 1.5px solid grey;
  height: 110px;
  padding: 15px 15px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`,aj=h.div`
  font-weight: lighter;
  font-size: 13px;
`,sj=h.div`
  font-weight: 600;
  font-size: 16px;
`,lj=h.div`
  width: 100%;
  height: 310px;
  background-color: #f5f5f5;
  padding-bottom: 10px;
  border-radius: 0 0 5px 5px;
`,uj=h.div`
  width: 91%;
  height: 40px;
  /* background-color: #3d3dee; */
  background-color: ${({bg:e})=>e};
  /* background-color: ${({bg:e})=>e?"#3d3dee":"grey"}; */
  color: white;
  padding: 5px 15px;
  border-radius: 5px 5px 0 0;
`,dj=h.div`
  width: 360px;
  height: 365px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 320px) {
    width: 300px;
  }
  flex-direction: column;
  margin: 20px 20px;
`,it=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[i,o]=C.useState(!1);return s(mj,{children:s(gj,{children:y(pj,{children:[y(kx,{children:[y(Co,{onClick:()=>{t(!0)},children:[s("span",{children:s(PS,{fontSize:"25px",color:"#9661cb"})}),s(So,{children:"Product"}),s("span",{children:s(Wt,{})})]}),e?y(hj,{onClick:()=>{t(!1)},children:[s(on,{to:"/seller-dashboard/all-product",children:"All Products"}),s(on,{to:"/seller-dashboard/live-product",children:"Live Products"}),s(on,{to:"/seller-dashboard/sold-product",children:"Sold Out"}),s(on,{to:"/seller-dashboard/rejected-product",children:"Rejected Products"})]}):null,y(Co,{onClick:()=>{r(!0)},children:[s("span",{children:s($S,{fontSize:"25px",color:"brown"})}),s(So,{children:"Orders"}),s("span",{children:s(Wt,{})})]}),n?y(fj,{onClick:()=>{r(!1)},children:[s(on,{to:"/seller-dashboard/all-orders",children:"All Orders"}),s(on,{to:"/seller-dashboard/pending-orders",children:"Pending Orders"}),s(on,{to:"/seller-dashboard/ready-to-ship",children:"Ready to Ship"}),s(on,{to:"/seller-dashboard/shipped",children:"Shipped"})]}):null,y(Co,{onClick:()=>{o(!0)},children:[s("span",{children:s(bS,{fontSize:"25px",color:"#c05f3e"})}),s(So,{children:"Completed"}),s("span",{children:s(Wt,{})})]}),i?y(cj,{onClick:()=>{o(!1)},children:[s(on,{to:"/seller-dashboard/delivered-orders",children:"Delivard"}),s(on,{to:"/seller-dashboard/cancelled-orders",children:"Cancelled"}),s(on,{to:"/seller-dashboard/failed-orders",children:"Failed"}),s(on,{to:"/seller-dashboard/returned-orders",children:"Returned"})]}):null]}),y(kx,{children:[s(_e,{to:"/seller-dashboard/uploads",style:{textDecoration:"none",color:"black"},children:y(Co,{children:[s("span",{children:s(CS,{fontSize:"25px",color:"#47390f"})}),s(So,{children:"Upload Items"}),s("span",{children:s(Wt,{})})]})}),s(_e,{to:"/seller-dashboard/transactions",style:{textDecoration:"none",color:"black"},children:y(Co,{children:[s("span",{children:s(SS,{fontSize:"25px",color:"gray"})}),s(So,{children:"Transactions"}),s("span",{children:s(Wt,{})})]})}),y(Co,{children:[s("span",{children:s(wS,{fontSize:"25px",color:"#123456"})}),s(So,{children:"Settings"}),s("span",{children:s(Wt,{})})]})]})]})})})},kx=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  width: 100%;

  @media (max-width: 600px){
    flex-direction: column;
  }

  /* flex-wrap: wrap; */
`,on=h(_e)`
  width: 100%;
  padding: 10px 0px;
  /* border-bottom: 1px solid lightgray; */
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  color: black;

  :hover {
    background-color: lightgray;
  }
`,cj=h.div`
  width: 200px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  border-radius: 5px;

  position: absolute;
  top: 200px;
  right: 30px;
  z-index: 1111;

  @media (max-width: 768px){
    top: 215px;
  }
  @media (max-width: 600px){
    right: 30px;
    top: 380px;
  }
`,fj=h.div`
  width: 200px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  border-radius: 5px;

  position: absolute;
  top: 200px;
  right: 500px;
  /* left: 150px; */
  z-index: 1111;

  @media (max-width: 900px){
    right: 300px;
  }
  @media (max-width: 768px){
    right: 300px;
    top: 215px;
  }
  @media (max-width: 600px){
    right: 30px;
    top: 290px;
  }
`,hj=h.div`
  width: 200px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  border-radius: 5px;

  position: absolute;
  top: 200px;
  left: 40px;
  z-index: 1111;

  @media (max-width: 768px){
    top: 215px;
  }
 
`,So=h.div`
  font-size: 12px;
  font-weight: 700;
`,Co=h.div`
  width: 120px;
  height: 40px;
  border-radius: 50px;
  padding: 0 20px;
  /* margin: 30px 100px; */
  /* background-color: black; */
  span {
    position: relative;
    bottom: -3px;
  }
  div {
    position: relative;
    bottom: -1px;
    cursor: pointer;
  }
  border: 1.8px solid #d975c0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin: 20px;
  }
`;h.div`
  width: 95%;
  height: 75px;
  /* min-height: 100%; */
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  min-height: 150px;

  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;const pj=h.div`
  /* background-color: gold; */
  width: 90%;
  /* padding: 0 10px; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`,gj=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`,mj=h.div`
  width: 100%;
  /* height: 60px; */
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 20px; */
`,yj=()=>{const t=JSON.parse(localStorage.getItem("user"))._id,{data:n}=et({queryKey:["products"],queryFn:()=>Dl(t)}),r=n==null?void 0:n.filter(a=>a.status==="pending").length,i=n==null?void 0:n.filter(a=>a.status==="approved").length,o=n==null?void 0:n.filter(a=>a.quantity>0).length;return console.log(r),y(xj,{children:[s(it,{}),y(vj,{children:[s(Iu,{pr:"₦100,000",da:"Mar 16",ti:"Today",bg:"#3d3dee",pending:r,approved:i,liveProducts:o}),s(Iu,{pr:"₦60,000",da:"Mar 15",ti:"Yesterday",bg:"grey"}),s(Iu,{pr:"₦220,000",da:"Mar 1 - Mar 16",ti:"Month to date",bg:"purple"}),s(Iu,{pr:"₦400,000",da:"Feb 1 - Feb 29",ti:"Last month",bg:"orange"})]})]})},vj=h.div`
  width: 87%;
  border-top: 1.8px solid grey;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: gold; */

  flex-wrap: wrap;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`,xj=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`,Nf=({avatar:e,index:t,name:n,price:r,tag:i,created:o,quantity:a,active:l,rejected:u})=>{const[d,c]=C.useState(!1);return console.log(d),y(_j,{children:[s(ir,{children:y(Oj,{children:[s("span",{children:s(Cj,{src:e})}),n]})}),i&&y(ir,{children:[" ",s(jr,{children:i})]}),o&&y(ir,{children:[" ",s(jr,{children:o})," "]}),r&&y(ir,{children:[s(jr,{children:r})," "]}),a&&s(ir,{children:s(jr,{children:a})}),u&&s(ir,{children:s(jr,{children:u})}),l===!0&&s(ir,{children:s(jr,{children:y(Nx,{bg:"fff",children:[s(Sj,{}),s("span",{children:"ON"})]})})}),l===!1&&s(ir,{children:s(jr,{children:y(Nx,{bg:"",children:[s("span",{children:"OFF"}),s(wj,{})]})})}),s(ir,{children:y(jr,{children:[" ",y(bj,{onClick:()=>{c(!0)},children:[s(Pj,{children:"Edit"}),s("span",{children:s(Wt,{})})]}),d?y($j,{onClick:()=>{c(!1)},children:[s(_e,{to:"/seller-dashboard/edit-image",children:s(N0,{children:"Edit Image"})}),s(_e,{to:"/seller-dashboard/edit-image",children:s(N0,{children:"Edit Context"})}),s(N0,{children:"Delete"})]}):null]})})]},t)},N0=h.div`
  width: 100%;
  padding: 10px 0px;
  /* border-bottom: 1px solid lightgray; */
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  color: black;
`,$j=h.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  border-radius: 5px;

  position: sticky;
  bottom: -120px;
  right: 40px;
  /* z-index: 11; */
`,bj=h.div`
  display: flex;
  align-items: flex-end;
`,Nx=h.div`
  width: 100px;
  height: 40px;
  background-color: ${({bg:e})=>e?"#0ebb0e":"red"};
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: white;

  span{
    margin-left: 10px;
  }
`,wj=h.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
  margin-left: 10px;
`,Sj=h.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
`,Cj=h.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background-color: gold;
  margin-right: 10px;
`,Pj=h.div`
  margin: 5px;
  color: blue;
  border-bottom: 2px solid blue;
  font-weight: 600;
  cursor: pointer;
  span {
    margin-left: 3px;
  }
`;h.div``;const jr=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Oj=h.div`
  display: flex;
  align-items: center;

  :hover {
    color: blue;
  }
  cursor: pointer;
`,ir=h.td`
  padding: 10px 10px;
  font-size: 16px;
  font-weight: 400;
  border-left: 1.5px solid #d0d1d2;
`,_j=h.tr`
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;;
`;//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var _w;function X(){return _w.apply(null,arguments)}function kj(e){_w=e}function Fn(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Ji(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function Pe(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Wm(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(Pe(e,t))return!1;return!0}function Mt(e){return e===void 0}function kr(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Ll(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function kw(e,t){var n=[],r,i=e.length;for(r=0;r<i;++r)n.push(t(e[r],r));return n}function Zr(e,t){for(var n in t)Pe(t,n)&&(e[n]=t[n]);return Pe(t,"toString")&&(e.toString=t.toString),Pe(t,"valueOf")&&(e.valueOf=t.valueOf),e}function er(e,t,n,r){return Jw(e,t,n,r,!0).utc()}function Nj(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function ye(e){return e._pf==null&&(e._pf=Nj()),e._pf}var W1;Array.prototype.some?W1=Array.prototype.some:W1=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function Vm(e){if(e._isValid==null){var t=ye(e),n=W1.call(t.parsedDateParts,function(i){return i!=null}),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r}return e._isValid}function Ef(e){var t=er(NaN);return e!=null?Zr(ye(t),e):ye(t).userInvalidated=!0,t}var Ex=X.momentProperties=[],E0=!1;function qm(e,t){var n,r,i,o=Ex.length;if(Mt(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),Mt(t._i)||(e._i=t._i),Mt(t._f)||(e._f=t._f),Mt(t._l)||(e._l=t._l),Mt(t._strict)||(e._strict=t._strict),Mt(t._tzm)||(e._tzm=t._tzm),Mt(t._isUTC)||(e._isUTC=t._isUTC),Mt(t._offset)||(e._offset=t._offset),Mt(t._pf)||(e._pf=ye(t)),Mt(t._locale)||(e._locale=t._locale),o>0)for(n=0;n<o;n++)r=Ex[n],i=t[r],Mt(i)||(e[r]=i);return e}function jl(e){qm(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),E0===!1&&(E0=!0,X.updateOffset(this),E0=!1)}function Dn(e){return e instanceof jl||e!=null&&e._isAMomentObject!=null}function Nw(e){X.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function mn(e,t){var n=!0;return Zr(function(){if(X.deprecationHandler!=null&&X.deprecationHandler(null,e),n){var r=[],i,o,a,l=arguments.length;for(o=0;o<l;o++){if(i="",typeof arguments[o]=="object"){i+=`
[`+o+"] ";for(a in arguments[0])Pe(arguments[0],a)&&(i+=a+": "+arguments[0][a]+", ");i=i.slice(0,-2)}else i=arguments[o];r.push(i)}Nw(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var Ix={};function Ew(e,t){X.deprecationHandler!=null&&X.deprecationHandler(e,t),Ix[e]||(Nw(t),Ix[e]=!0)}X.suppressDeprecationWarnings=!1;X.deprecationHandler=null;function tr(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Ej(e){var t,n;for(n in e)Pe(e,n)&&(t=e[n],tr(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function V1(e,t){var n=Zr({},e),r;for(r in t)Pe(t,r)&&(Ji(e[r])&&Ji(t[r])?(n[r]={},Zr(n[r],e[r]),Zr(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)Pe(e,r)&&!Pe(t,r)&&Ji(e[r])&&(n[r]=Zr({},n[r]));return n}function Gm(e){e!=null&&this.set(e)}var q1;Object.keys?q1=Object.keys:q1=function(e){var t,n=[];for(t in e)Pe(e,t)&&n.push(t);return n};var Ij={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Tj(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return tr(r)?r.call(t,n):r}function Xn(e,t,n){var r=""+Math.abs(e),i=t-r.length,o=e>=0;return(o?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var Qm=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Tu=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,I0={},xa={};function pe(e,t,n,r){var i=r;typeof r=="string"&&(i=function(){return this[r]()}),e&&(xa[e]=i),t&&(xa[t[0]]=function(){return Xn(i.apply(this,arguments),t[1],t[2])}),n&&(xa[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function Aj(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Rj(e){var t=e.match(Qm),n,r;for(n=0,r=t.length;n<r;n++)xa[t[n]]?t[n]=xa[t[n]]:t[n]=Aj(t[n]);return function(i){var o="",a;for(a=0;a<r;a++)o+=tr(t[a])?t[a].call(i,e):t[a];return o}}function cd(e,t){return e.isValid()?(t=Iw(t,e.localeData()),I0[t]=I0[t]||Rj(t),I0[t](e)):e.localeData().invalidDate()}function Iw(e,t){var n=5;function r(i){return t.longDateFormat(i)||i}for(Tu.lastIndex=0;n>=0&&Tu.test(e);)e=e.replace(Tu,r),Tu.lastIndex=0,n-=1;return e}var Fj={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Dj(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(Qm).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var Mj="Invalid date";function Lj(){return this._invalidDate}var jj="%d",zj=/\d{1,2}/;function Uj(e){return this._ordinal.replace("%d",e)}var Bj={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Hj(e,t,n,r){var i=this._relativeTime[n];return tr(i)?i(e,t,n,r):i.replace(/%d/i,e)}function Yj(e,t){var n=this._relativeTime[e>0?"future":"past"];return tr(n)?n(t):n.replace(/%s/i,t)}var Is={};function _t(e,t){var n=e.toLowerCase();Is[n]=Is[n+"s"]=Is[t]=e}function yn(e){return typeof e=="string"?Is[e]||Is[e.toLowerCase()]:void 0}function Km(e){var t={},n,r;for(r in e)Pe(e,r)&&(n=yn(r),n&&(t[n]=e[r]));return t}var Tw={};function kt(e,t){Tw[e]=t}function Wj(e){var t=[],n;for(n in e)Pe(e,n)&&t.push({unit:n,priority:Tw[n]});return t.sort(function(r,i){return r.priority-i.priority}),t}function If(e){return e%4===0&&e%100!==0||e%400===0}function dn(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function xe(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=dn(t)),n}function Wa(e,t){return function(n){return n!=null?(Aw(this,e,n),X.updateOffset(this,t),this):$c(this,e)}}function $c(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function Aw(e,t,n){e.isValid()&&!isNaN(n)&&(t==="FullYear"&&If(e.year())&&e.month()===1&&e.date()===29?(n=xe(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Mf(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Vj(e){return e=yn(e),tr(this[e])?this[e]():this}function qj(e,t){if(typeof e=="object"){e=Km(e);var n=Wj(e),r,i=n.length;for(r=0;r<i;r++)this[n[r].unit](e[n[r].unit])}else if(e=yn(e),tr(this[e]))return this[e](t);return this}var Rw=/\d/,tn=/\d\d/,Fw=/\d{3}/,Zm=/\d{4}/,Tf=/[+-]?\d{6}/,Be=/\d\d?/,Dw=/\d\d\d\d?/,Mw=/\d\d\d\d\d\d?/,Af=/\d{1,3}/,Jm=/\d{1,4}/,Rf=/[+-]?\d{1,6}/,Va=/\d+/,Ff=/[+-]?\d+/,Gj=/Z|[+-]\d\d:?\d\d/gi,Df=/Z|[+-]\d\d(?::?\d\d)?/gi,Qj=/[+-]?\d+(\.\d{1,3})?/,zl=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,bc;bc={};function le(e,t,n){bc[e]=tr(t)?t:function(r,i){return r&&n?n:t}}function Kj(e,t){return Pe(bc,e)?bc[e](t._strict,t._locale):new RegExp(Zj(e))}function Zj(e){return qt(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,i,o){return n||r||i||o}))}function qt(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var G1={};function Re(e,t){var n,r=t,i;for(typeof e=="string"&&(e=[e]),kr(t)&&(r=function(o,a){a[t]=xe(o)}),i=e.length,n=0;n<i;n++)G1[e[n]]=r}function Ul(e,t){Re(e,function(n,r,i,o){i._w=i._w||{},t(n,i._w,i,o)})}function Jj(e,t,n){t!=null&&Pe(G1,e)&&G1[e](t,n._a,n,e)}var Ct=0,yr=1,Wn=2,st=3,Nn=4,vr=5,Gi=6,Xj=7,ez=8;function tz(e,t){return(e%t+t)%t}var Je;Array.prototype.indexOf?Je=Array.prototype.indexOf:Je=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function Mf(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=tz(t,12);return e+=(t-n)/12,n===1?If(e)?29:28:31-n%7%2}pe("M",["MM",2],"Mo",function(){return this.month()+1});pe("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});pe("MMMM",0,0,function(e){return this.localeData().months(this,e)});_t("month","M");kt("month",8);le("M",Be);le("MM",Be,tn);le("MMM",function(e,t){return t.monthsShortRegex(e)});le("MMMM",function(e,t){return t.monthsRegex(e)});Re(["M","MM"],function(e,t){t[yr]=xe(e)-1});Re(["MMM","MMMM"],function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);i!=null?t[yr]=i:ye(n).invalidMonth=e});var nz="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Lw="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),jw=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,rz=zl,iz=zl;function oz(e,t){return e?Fn(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||jw).test(t)?"format":"standalone"][e.month()]:Fn(this._months)?this._months:this._months.standalone}function az(e,t){return e?Fn(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[jw.test(t)?"format":"standalone"][e.month()]:Fn(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function sz(e,t,n){var r,i,o,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)o=er([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(o,"").toLocaleLowerCase();return n?t==="MMM"?(i=Je.call(this._shortMonthsParse,a),i!==-1?i:null):(i=Je.call(this._longMonthsParse,a),i!==-1?i:null):t==="MMM"?(i=Je.call(this._shortMonthsParse,a),i!==-1?i:(i=Je.call(this._longMonthsParse,a),i!==-1?i:null)):(i=Je.call(this._longMonthsParse,a),i!==-1?i:(i=Je.call(this._shortMonthsParse,a),i!==-1?i:null))}function lz(e,t,n){var r,i,o;if(this._monthsParseExact)return sz.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=er([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(o="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(o.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function zw(e,t){var n;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=xe(t);else if(t=e.localeData().monthsParse(t),!kr(t))return e}return n=Math.min(e.date(),Mf(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Uw(e){return e!=null?(zw(this,e),X.updateOffset(this,!0),this):$c(this,"Month")}function uz(){return Mf(this.year(),this.month())}function dz(e){return this._monthsParseExact?(Pe(this,"_monthsRegex")||Bw.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(Pe(this,"_monthsShortRegex")||(this._monthsShortRegex=rz),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function cz(e){return this._monthsParseExact?(Pe(this,"_monthsRegex")||Bw.call(this),e?this._monthsStrictRegex:this._monthsRegex):(Pe(this,"_monthsRegex")||(this._monthsRegex=iz),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Bw(){function e(a,l){return l.length-a.length}var t=[],n=[],r=[],i,o;for(i=0;i<12;i++)o=er([2e3,i]),t.push(this.monthsShort(o,"")),n.push(this.months(o,"")),r.push(this.months(o,"")),r.push(this.monthsShort(o,""));for(t.sort(e),n.sort(e),r.sort(e),i=0;i<12;i++)t[i]=qt(t[i]),n[i]=qt(n[i]);for(i=0;i<24;i++)r[i]=qt(r[i]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}pe("Y",0,0,function(){var e=this.year();return e<=9999?Xn(e,4):"+"+e});pe(0,["YY",2],0,function(){return this.year()%100});pe(0,["YYYY",4],0,"year");pe(0,["YYYYY",5],0,"year");pe(0,["YYYYYY",6,!0],0,"year");_t("year","y");kt("year",1);le("Y",Ff);le("YY",Be,tn);le("YYYY",Jm,Zm);le("YYYYY",Rf,Tf);le("YYYYYY",Rf,Tf);Re(["YYYYY","YYYYYY"],Ct);Re("YYYY",function(e,t){t[Ct]=e.length===2?X.parseTwoDigitYear(e):xe(e)});Re("YY",function(e,t){t[Ct]=X.parseTwoDigitYear(e)});Re("Y",function(e,t){t[Ct]=parseInt(e,10)});function Ts(e){return If(e)?366:365}X.parseTwoDigitYear=function(e){return xe(e)+(xe(e)>68?1900:2e3)};var Hw=Wa("FullYear",!0);function fz(){return If(this.year())}function hz(e,t,n,r,i,o,a){var l;return e<100&&e>=0?(l=new Date(e+400,t,n,r,i,o,a),isFinite(l.getFullYear())&&l.setFullYear(e)):l=new Date(e,t,n,r,i,o,a),l}function dl(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function wc(e,t,n){var r=7+t-n,i=(7+dl(e,0,r).getUTCDay()-t)%7;return-i+r-1}function Yw(e,t,n,r,i){var o=(7+n-r)%7,a=wc(e,r,i),l=1+7*(t-1)+o+a,u,d;return l<=0?(u=e-1,d=Ts(u)+l):l>Ts(e)?(u=e+1,d=l-Ts(e)):(u=e,d=l),{year:u,dayOfYear:d}}function cl(e,t,n){var r=wc(e.year(),t,n),i=Math.floor((e.dayOfYear()-r-1)/7)+1,o,a;return i<1?(a=e.year()-1,o=i+br(a,t,n)):i>br(e.year(),t,n)?(o=i-br(e.year(),t,n),a=e.year()+1):(a=e.year(),o=i),{week:o,year:a}}function br(e,t,n){var r=wc(e,t,n),i=wc(e+1,t,n);return(Ts(e)-r+i)/7}pe("w",["ww",2],"wo","week");pe("W",["WW",2],"Wo","isoWeek");_t("week","w");_t("isoWeek","W");kt("week",5);kt("isoWeek",5);le("w",Be);le("ww",Be,tn);le("W",Be);le("WW",Be,tn);Ul(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=xe(e)});function pz(e){return cl(e,this._week.dow,this._week.doy).week}var gz={dow:0,doy:6};function mz(){return this._week.dow}function yz(){return this._week.doy}function vz(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function xz(e){var t=cl(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}pe("d",0,"do","day");pe("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});pe("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});pe("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});pe("e",0,0,"weekday");pe("E",0,0,"isoWeekday");_t("day","d");_t("weekday","e");_t("isoWeekday","E");kt("day",11);kt("weekday",11);kt("isoWeekday",11);le("d",Be);le("e",Be);le("E",Be);le("dd",function(e,t){return t.weekdaysMinRegex(e)});le("ddd",function(e,t){return t.weekdaysShortRegex(e)});le("dddd",function(e,t){return t.weekdaysRegex(e)});Ul(["dd","ddd","dddd"],function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);i!=null?t.d=i:ye(n).invalidWeekday=e});Ul(["d","e","E"],function(e,t,n,r){t[r]=xe(e)});function $z(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function bz(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Xm(e,t){return e.slice(t,7).concat(e.slice(0,t))}var wz="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Ww="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Sz="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Cz=zl,Pz=zl,Oz=zl;function _z(e,t){var n=Fn(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?Xm(n,this._week.dow):e?n[e.day()]:n}function kz(e){return e===!0?Xm(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Nz(e){return e===!0?Xm(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ez(e,t,n){var r,i,o,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)o=er([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(o,"").toLocaleLowerCase();return n?t==="dddd"?(i=Je.call(this._weekdaysParse,a),i!==-1?i:null):t==="ddd"?(i=Je.call(this._shortWeekdaysParse,a),i!==-1?i:null):(i=Je.call(this._minWeekdaysParse,a),i!==-1?i:null):t==="dddd"?(i=Je.call(this._weekdaysParse,a),i!==-1||(i=Je.call(this._shortWeekdaysParse,a),i!==-1)?i:(i=Je.call(this._minWeekdaysParse,a),i!==-1?i:null)):t==="ddd"?(i=Je.call(this._shortWeekdaysParse,a),i!==-1||(i=Je.call(this._weekdaysParse,a),i!==-1)?i:(i=Je.call(this._minWeekdaysParse,a),i!==-1?i:null)):(i=Je.call(this._minWeekdaysParse,a),i!==-1||(i=Je.call(this._weekdaysParse,a),i!==-1)?i:(i=Je.call(this._shortWeekdaysParse,a),i!==-1?i:null))}function Iz(e,t,n){var r,i,o;if(this._weekdaysParseExact)return Ez.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=er([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(o="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(o.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function Tz(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=$z(e,this.localeData()),this.add(e-t,"d")):t}function Az(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function Rz(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=bz(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function Fz(e){return this._weekdaysParseExact?(Pe(this,"_weekdaysRegex")||ey.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(Pe(this,"_weekdaysRegex")||(this._weekdaysRegex=Cz),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Dz(e){return this._weekdaysParseExact?(Pe(this,"_weekdaysRegex")||ey.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(Pe(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Pz),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Mz(e){return this._weekdaysParseExact?(Pe(this,"_weekdaysRegex")||ey.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(Pe(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Oz),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function ey(){function e(c,f){return f.length-c.length}var t=[],n=[],r=[],i=[],o,a,l,u,d;for(o=0;o<7;o++)a=er([2e3,1]).day(o),l=qt(this.weekdaysMin(a,"")),u=qt(this.weekdaysShort(a,"")),d=qt(this.weekdays(a,"")),t.push(l),n.push(u),r.push(d),i.push(l),i.push(u),i.push(d);t.sort(e),n.sort(e),r.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function ty(){return this.hours()%12||12}function Lz(){return this.hours()||24}pe("H",["HH",2],0,"hour");pe("h",["hh",2],0,ty);pe("k",["kk",2],0,Lz);pe("hmm",0,0,function(){return""+ty.apply(this)+Xn(this.minutes(),2)});pe("hmmss",0,0,function(){return""+ty.apply(this)+Xn(this.minutes(),2)+Xn(this.seconds(),2)});pe("Hmm",0,0,function(){return""+this.hours()+Xn(this.minutes(),2)});pe("Hmmss",0,0,function(){return""+this.hours()+Xn(this.minutes(),2)+Xn(this.seconds(),2)});function Vw(e,t){pe(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}Vw("a",!0);Vw("A",!1);_t("hour","h");kt("hour",13);function qw(e,t){return t._meridiemParse}le("a",qw);le("A",qw);le("H",Be);le("h",Be);le("k",Be);le("HH",Be,tn);le("hh",Be,tn);le("kk",Be,tn);le("hmm",Dw);le("hmmss",Mw);le("Hmm",Dw);le("Hmmss",Mw);Re(["H","HH"],st);Re(["k","kk"],function(e,t,n){var r=xe(e);t[st]=r===24?0:r});Re(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});Re(["h","hh"],function(e,t,n){t[st]=xe(e),ye(n).bigHour=!0});Re("hmm",function(e,t,n){var r=e.length-2;t[st]=xe(e.substr(0,r)),t[Nn]=xe(e.substr(r)),ye(n).bigHour=!0});Re("hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[st]=xe(e.substr(0,r)),t[Nn]=xe(e.substr(r,2)),t[vr]=xe(e.substr(i)),ye(n).bigHour=!0});Re("Hmm",function(e,t,n){var r=e.length-2;t[st]=xe(e.substr(0,r)),t[Nn]=xe(e.substr(r))});Re("Hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[st]=xe(e.substr(0,r)),t[Nn]=xe(e.substr(r,2)),t[vr]=xe(e.substr(i))});function jz(e){return(e+"").toLowerCase().charAt(0)==="p"}var zz=/[ap]\.?m?\.?/i,Uz=Wa("Hours",!0);function Bz(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var Gw={calendar:Ij,longDateFormat:Fj,invalidDate:Mj,ordinal:jj,dayOfMonthOrdinalParse:zj,relativeTime:Bj,months:nz,monthsShort:Lw,week:gz,weekdays:wz,weekdaysMin:Sz,weekdaysShort:Ww,meridiemParse:zz},He={},os={},fl;function Hz(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function Tx(e){return e&&e.toLowerCase().replace("_","-")}function Yz(e){for(var t=0,n,r,i,o;t<e.length;){for(o=Tx(e[t]).split("-"),n=o.length,r=Tx(e[t+1]),r=r?r.split("-"):null;n>0;){if(i=Lf(o.slice(0,n).join("-")),i)return i;if(r&&r.length>=n&&Hz(o,r)>=n-1)break;n--}t++}return fl}function Wz(e){return e.match("^[^/\\\\]*$")!=null}function Lf(e){var t=null,n;if(He[e]===void 0&&typeof xd<"u"&&xd&&xd.exports&&Wz(e))try{t=fl._abbr,n=require,n("./locale/"+e),hi(t)}catch{He[e]=null}return He[e]}function hi(e,t){var n;return e&&(Mt(t)?n=Ar(e):n=ny(e,t),n?fl=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),fl._abbr}function ny(e,t){if(t!==null){var n,r=Gw;if(t.abbr=e,He[e]!=null)Ew("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=He[e]._config;else if(t.parentLocale!=null)if(He[t.parentLocale]!=null)r=He[t.parentLocale]._config;else if(n=Lf(t.parentLocale),n!=null)r=n._config;else return os[t.parentLocale]||(os[t.parentLocale]=[]),os[t.parentLocale].push({name:e,config:t}),null;return He[e]=new Gm(V1(r,t)),os[e]&&os[e].forEach(function(i){ny(i.name,i.config)}),hi(e),He[e]}else return delete He[e],null}function Vz(e,t){if(t!=null){var n,r,i=Gw;He[e]!=null&&He[e].parentLocale!=null?He[e].set(V1(He[e]._config,t)):(r=Lf(e),r!=null&&(i=r._config),t=V1(i,t),r==null&&(t.abbr=e),n=new Gm(t),n.parentLocale=He[e],He[e]=n),hi(e)}else He[e]!=null&&(He[e].parentLocale!=null?(He[e]=He[e].parentLocale,e===hi()&&hi(e)):He[e]!=null&&delete He[e]);return He[e]}function Ar(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return fl;if(!Fn(e)){if(t=Lf(e),t)return t;e=[e]}return Yz(e)}function qz(){return q1(He)}function ry(e){var t,n=e._a;return n&&ye(e).overflow===-2&&(t=n[yr]<0||n[yr]>11?yr:n[Wn]<1||n[Wn]>Mf(n[Ct],n[yr])?Wn:n[st]<0||n[st]>24||n[st]===24&&(n[Nn]!==0||n[vr]!==0||n[Gi]!==0)?st:n[Nn]<0||n[Nn]>59?Nn:n[vr]<0||n[vr]>59?vr:n[Gi]<0||n[Gi]>999?Gi:-1,ye(e)._overflowDayOfYear&&(t<Ct||t>Wn)&&(t=Wn),ye(e)._overflowWeeks&&t===-1&&(t=Xj),ye(e)._overflowWeekday&&t===-1&&(t=ez),ye(e).overflow=t),e}var Gz=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Qz=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Kz=/Z|[+-]\d\d(?::?\d\d)?/,Au=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],T0=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Zz=/^\/?Date\((-?\d+)/i,Jz=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Xz={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Qw(e){var t,n,r=e._i,i=Gz.exec(r)||Qz.exec(r),o,a,l,u,d=Au.length,c=T0.length;if(i){for(ye(e).iso=!0,t=0,n=d;t<n;t++)if(Au[t][1].exec(i[1])){a=Au[t][0],o=Au[t][2]!==!1;break}if(a==null){e._isValid=!1;return}if(i[3]){for(t=0,n=c;t<n;t++)if(T0[t][1].exec(i[3])){l=(i[2]||" ")+T0[t][0];break}if(l==null){e._isValid=!1;return}}if(!o&&l!=null){e._isValid=!1;return}if(i[4])if(Kz.exec(i[4]))u="Z";else{e._isValid=!1;return}e._f=a+(l||"")+(u||""),oy(e)}else e._isValid=!1}function eU(e,t,n,r,i,o){var a=[tU(e),Lw.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return o&&a.push(parseInt(o,10)),a}function tU(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function nU(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function rU(e,t,n){if(e){var r=Ww.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(r!==i)return ye(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function iU(e,t,n){if(e)return Xz[e];if(t)return 0;var r=parseInt(n,10),i=r%100,o=(r-i)/100;return o*60+i}function Kw(e){var t=Jz.exec(nU(e._i)),n;if(t){if(n=eU(t[4],t[3],t[2],t[5],t[6],t[7]),!rU(t[1],n,e))return;e._a=n,e._tzm=iU(t[8],t[9],t[10]),e._d=dl.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),ye(e).rfc2822=!0}else e._isValid=!1}function oU(e){var t=Zz.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(Qw(e),e._isValid===!1)delete e._isValid;else return;if(Kw(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:X.createFromInputFallback(e)}X.createFromInputFallback=mn("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Wo(e,t,n){return e??t??n}function aU(e){var t=new Date(X.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function iy(e){var t,n,r=[],i,o,a;if(!e._d){for(i=aU(e),e._w&&e._a[Wn]==null&&e._a[yr]==null&&sU(e),e._dayOfYear!=null&&(a=Wo(e._a[Ct],i[Ct]),(e._dayOfYear>Ts(a)||e._dayOfYear===0)&&(ye(e)._overflowDayOfYear=!0),n=dl(a,0,e._dayOfYear),e._a[yr]=n.getUTCMonth(),e._a[Wn]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=i[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[st]===24&&e._a[Nn]===0&&e._a[vr]===0&&e._a[Gi]===0&&(e._nextDay=!0,e._a[st]=0),e._d=(e._useUTC?dl:hz).apply(null,r),o=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[st]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==o&&(ye(e).weekdayMismatch=!0)}}function sU(e){var t,n,r,i,o,a,l,u,d;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(o=1,a=4,n=Wo(t.GG,e._a[Ct],cl(Ue(),1,4).year),r=Wo(t.W,1),i=Wo(t.E,1),(i<1||i>7)&&(u=!0)):(o=e._locale._week.dow,a=e._locale._week.doy,d=cl(Ue(),o,a),n=Wo(t.gg,e._a[Ct],d.year),r=Wo(t.w,d.week),t.d!=null?(i=t.d,(i<0||i>6)&&(u=!0)):t.e!=null?(i=t.e+o,(t.e<0||t.e>6)&&(u=!0)):i=o),r<1||r>br(n,o,a)?ye(e)._overflowWeeks=!0:u!=null?ye(e)._overflowWeekday=!0:(l=Yw(n,r,i,o,a),e._a[Ct]=l.year,e._dayOfYear=l.dayOfYear)}X.ISO_8601=function(){};X.RFC_2822=function(){};function oy(e){if(e._f===X.ISO_8601){Qw(e);return}if(e._f===X.RFC_2822){Kw(e);return}e._a=[],ye(e).empty=!0;var t=""+e._i,n,r,i,o,a,l=t.length,u=0,d,c;for(i=Iw(e._f,e._locale).match(Qm)||[],c=i.length,n=0;n<c;n++)o=i[n],r=(t.match(Kj(o,e))||[])[0],r&&(a=t.substr(0,t.indexOf(r)),a.length>0&&ye(e).unusedInput.push(a),t=t.slice(t.indexOf(r)+r.length),u+=r.length),xa[o]?(r?ye(e).empty=!1:ye(e).unusedTokens.push(o),Jj(o,r,e)):e._strict&&!r&&ye(e).unusedTokens.push(o);ye(e).charsLeftOver=l-u,t.length>0&&ye(e).unusedInput.push(t),e._a[st]<=12&&ye(e).bigHour===!0&&e._a[st]>0&&(ye(e).bigHour=void 0),ye(e).parsedDateParts=e._a.slice(0),ye(e).meridiem=e._meridiem,e._a[st]=lU(e._locale,e._a[st],e._meridiem),d=ye(e).era,d!==null&&(e._a[Ct]=e._locale.erasConvertYear(d,e._a[Ct])),iy(e),ry(e)}function lU(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function uU(e){var t,n,r,i,o,a,l=!1,u=e._f.length;if(u===0){ye(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<u;i++)o=0,a=!1,t=qm({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[i],oy(t),Vm(t)&&(a=!0),o+=ye(t).charsLeftOver,o+=ye(t).unusedTokens.length*10,ye(t).score=o,l?o<r&&(r=o,n=t):(r==null||o<r||a)&&(r=o,n=t,a&&(l=!0));Zr(e,n||t)}function dU(e){if(!e._d){var t=Km(e._i),n=t.day===void 0?t.date:t.day;e._a=kw([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),iy(e)}}function cU(e){var t=new jl(ry(Zw(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Zw(e){var t=e._i,n=e._f;return e._locale=e._locale||Ar(e._l),t===null||n===void 0&&t===""?Ef({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),Dn(t)?new jl(ry(t)):(Ll(t)?e._d=t:Fn(n)?uU(e):n?oy(e):fU(e),Vm(e)||(e._d=null),e))}function fU(e){var t=e._i;Mt(t)?e._d=new Date(X.now()):Ll(t)?e._d=new Date(t.valueOf()):typeof t=="string"?oU(e):Fn(t)?(e._a=kw(t.slice(0),function(n){return parseInt(n,10)}),iy(e)):Ji(t)?dU(e):kr(t)?e._d=new Date(t):X.createFromInputFallback(e)}function Jw(e,t,n,r,i){var o={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(Ji(e)&&Wm(e)||Fn(e)&&e.length===0)&&(e=void 0),o._isAMomentObject=!0,o._useUTC=o._isUTC=i,o._l=n,o._i=e,o._f=t,o._strict=r,cU(o)}function Ue(e,t,n,r){return Jw(e,t,n,r,!1)}var hU=mn("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ue.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Ef()}),pU=mn("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ue.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Ef()});function Xw(e,t){var n,r;if(t.length===1&&Fn(t[0])&&(t=t[0]),!t.length)return Ue();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function gU(){var e=[].slice.call(arguments,0);return Xw("isBefore",e)}function mU(){var e=[].slice.call(arguments,0);return Xw("isAfter",e)}var yU=function(){return Date.now?Date.now():+new Date},as=["year","quarter","month","week","day","hour","minute","second","millisecond"];function vU(e){var t,n=!1,r,i=as.length;for(t in e)if(Pe(e,t)&&!(Je.call(as,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<i;++r)if(e[as[r]]){if(n)return!1;parseFloat(e[as[r]])!==xe(e[as[r]])&&(n=!0)}return!0}function xU(){return this._isValid}function $U(){return Ln(NaN)}function jf(e){var t=Km(e),n=t.year||0,r=t.quarter||0,i=t.month||0,o=t.week||t.isoWeek||0,a=t.day||0,l=t.hour||0,u=t.minute||0,d=t.second||0,c=t.millisecond||0;this._isValid=vU(t),this._milliseconds=+c+d*1e3+u*6e4+l*1e3*60*60,this._days=+a+o*7,this._months=+i+r*3+n*12,this._data={},this._locale=Ar(),this._bubble()}function fd(e){return e instanceof jf}function Q1(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function bU(e,t,n){var r=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),o=0,a;for(a=0;a<r;a++)(n&&e[a]!==t[a]||!n&&xe(e[a])!==xe(t[a]))&&o++;return o+i}function e8(e,t){pe(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+Xn(~~(n/60),2)+t+Xn(~~n%60,2)})}e8("Z",":");e8("ZZ","");le("Z",Df);le("ZZ",Df);Re(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=ay(Df,e)});var wU=/([\+\-]|\d\d)/gi;function ay(e,t){var n=(t||"").match(e),r,i,o;return n===null?null:(r=n[n.length-1]||[],i=(r+"").match(wU)||["-",0,0],o=+(i[1]*60)+xe(i[2]),o===0?0:i[0]==="+"?o:-o)}function sy(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(Dn(e)||Ll(e)?e.valueOf():Ue(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),X.updateOffset(n,!1),n):Ue(e).local()}function K1(e){return-Math.round(e._d.getTimezoneOffset())}X.updateOffset=function(){};function SU(e,t,n){var r=this._offset||0,i;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=ay(Df,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(i=K1(this)),this._offset=e,this._isUTC=!0,i!=null&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?r8(this,Ln(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,X.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:K1(this)}function CU(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function PU(e){return this.utcOffset(0,e)}function OU(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(K1(this),"m")),this}function _U(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=ay(Gj,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function kU(e){return this.isValid()?(e=e?Ue(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function NU(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function EU(){if(!Mt(this._isDSTShifted))return this._isDSTShifted;var e={},t;return qm(e,this),e=Zw(e),e._a?(t=e._isUTC?er(e._a):Ue(e._a),this._isDSTShifted=this.isValid()&&bU(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function IU(){return this.isValid()?!this._isUTC:!1}function TU(){return this.isValid()?this._isUTC:!1}function t8(){return this.isValid()?this._isUTC&&this._offset===0:!1}var AU=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,RU=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Ln(e,t){var n=e,r=null,i,o,a;return fd(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:kr(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=AU.exec(e))?(i=r[1]==="-"?-1:1,n={y:0,d:xe(r[Wn])*i,h:xe(r[st])*i,m:xe(r[Nn])*i,s:xe(r[vr])*i,ms:xe(Q1(r[Gi]*1e3))*i}):(r=RU.exec(e))?(i=r[1]==="-"?-1:1,n={y:Ei(r[2],i),M:Ei(r[3],i),w:Ei(r[4],i),d:Ei(r[5],i),h:Ei(r[6],i),m:Ei(r[7],i),s:Ei(r[8],i)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(a=FU(Ue(n.from),Ue(n.to)),n={},n.ms=a.milliseconds,n.M=a.months),o=new jf(n),fd(e)&&Pe(e,"_locale")&&(o._locale=e._locale),fd(e)&&Pe(e,"_isValid")&&(o._isValid=e._isValid),o}Ln.fn=jf.prototype;Ln.invalid=$U;function Ei(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Ax(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function FU(e,t){var n;return e.isValid()&&t.isValid()?(t=sy(t,e),e.isBefore(t)?n=Ax(e,t):(n=Ax(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function n8(e,t){return function(n,r){var i,o;return r!==null&&!isNaN(+r)&&(Ew(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),o=n,n=r,r=o),i=Ln(n,r),r8(this,i,e),this}}function r8(e,t,n,r){var i=t._milliseconds,o=Q1(t._days),a=Q1(t._months);e.isValid()&&(r=r??!0,a&&zw(e,$c(e,"Month")+a*n),o&&Aw(e,"Date",$c(e,"Date")+o*n),i&&e._d.setTime(e._d.valueOf()+i*n),r&&X.updateOffset(e,o||a))}var DU=n8(1,"add"),MU=n8(-1,"subtract");function i8(e){return typeof e=="string"||e instanceof String}function LU(e){return Dn(e)||Ll(e)||i8(e)||kr(e)||zU(e)||jU(e)||e===null||e===void 0}function jU(e){var t=Ji(e)&&!Wm(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,o,a=r.length;for(i=0;i<a;i+=1)o=r[i],n=n||Pe(e,o);return t&&n}function zU(e){var t=Fn(e),n=!1;return t&&(n=e.filter(function(r){return!kr(r)&&i8(e)}).length===0),t&&n}function UU(e){var t=Ji(e)&&!Wm(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,o;for(i=0;i<r.length;i+=1)o=r[i],n=n||Pe(e,o);return t&&n}function BU(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function HU(e,t){arguments.length===1&&(arguments[0]?LU(arguments[0])?(e=arguments[0],t=void 0):UU(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||Ue(),r=sy(n,this).startOf("day"),i=X.calendarFormat(this,r)||"sameElse",o=t&&(tr(t[i])?t[i].call(this,n):t[i]);return this.format(o||this.localeData().calendar(i,this,Ue(n)))}function YU(){return new jl(this)}function WU(e,t){var n=Dn(e)?e:Ue(e);return this.isValid()&&n.isValid()?(t=yn(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function VU(e,t){var n=Dn(e)?e:Ue(e);return this.isValid()&&n.isValid()?(t=yn(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function qU(e,t,n,r){var i=Dn(e)?e:Ue(e),o=Dn(t)?t:Ue(t);return this.isValid()&&i.isValid()&&o.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(i,n):!this.isBefore(i,n))&&(r[1]===")"?this.isBefore(o,n):!this.isAfter(o,n))):!1}function GU(e,t){var n=Dn(e)?e:Ue(e),r;return this.isValid()&&n.isValid()?(t=yn(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function QU(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function KU(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function ZU(e,t,n){var r,i,o;if(!this.isValid())return NaN;if(r=sy(e,this),!r.isValid())return NaN;switch(i=(r.utcOffset()-this.utcOffset())*6e4,t=yn(t),t){case"year":o=hd(this,r)/12;break;case"month":o=hd(this,r);break;case"quarter":o=hd(this,r)/3;break;case"second":o=(this-r)/1e3;break;case"minute":o=(this-r)/6e4;break;case"hour":o=(this-r)/36e5;break;case"day":o=(this-r-i)/864e5;break;case"week":o=(this-r-i)/6048e5;break;default:o=this-r}return n?o:dn(o)}function hd(e,t){if(e.date()<t.date())return-hd(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),i,o;return t-r<0?(i=e.clone().add(n-1,"months"),o=(t-r)/(r-i)):(i=e.clone().add(n+1,"months"),o=(t-r)/(i-r)),-(n+o)||0}X.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";X.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function JU(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function XU(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?cd(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):tr(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",cd(n,"Z")):cd(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function eB(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,i,o;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",o=t+'[")]',this.format(n+r+i+o)}function tB(e){e||(e=this.isUtc()?X.defaultFormatUtc:X.defaultFormat);var t=cd(this,e);return this.localeData().postformat(t)}function nB(e,t){return this.isValid()&&(Dn(e)&&e.isValid()||Ue(e).isValid())?Ln({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function rB(e){return this.from(Ue(),e)}function iB(e,t){return this.isValid()&&(Dn(e)&&e.isValid()||Ue(e).isValid())?Ln({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function oB(e){return this.to(Ue(),e)}function o8(e){var t;return e===void 0?this._locale._abbr:(t=Ar(e),t!=null&&(this._locale=t),this)}var a8=mn("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function s8(){return this._locale}var Sc=1e3,$a=60*Sc,Cc=60*$a,l8=(365*400+97)*24*Cc;function ba(e,t){return(e%t+t)%t}function u8(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-l8:new Date(e,t,n).valueOf()}function d8(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-l8:Date.UTC(e,t,n)}function aB(e){var t,n;if(e=yn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?d8:u8,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=ba(t+(this._isUTC?0:this.utcOffset()*$a),Cc);break;case"minute":t=this._d.valueOf(),t-=ba(t,$a);break;case"second":t=this._d.valueOf(),t-=ba(t,Sc);break}return this._d.setTime(t),X.updateOffset(this,!0),this}function sB(e){var t,n;if(e=yn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?d8:u8,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Cc-ba(t+(this._isUTC?0:this.utcOffset()*$a),Cc)-1;break;case"minute":t=this._d.valueOf(),t+=$a-ba(t,$a)-1;break;case"second":t=this._d.valueOf(),t+=Sc-ba(t,Sc)-1;break}return this._d.setTime(t),X.updateOffset(this,!0),this}function lB(){return this._d.valueOf()-(this._offset||0)*6e4}function uB(){return Math.floor(this.valueOf()/1e3)}function dB(){return new Date(this.valueOf())}function cB(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function fB(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function hB(){return this.isValid()?this.toISOString():null}function pB(){return Vm(this)}function gB(){return Zr({},ye(this))}function mB(){return ye(this).overflow}function yB(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}pe("N",0,0,"eraAbbr");pe("NN",0,0,"eraAbbr");pe("NNN",0,0,"eraAbbr");pe("NNNN",0,0,"eraName");pe("NNNNN",0,0,"eraNarrow");pe("y",["y",1],"yo","eraYear");pe("y",["yy",2],0,"eraYear");pe("y",["yyy",3],0,"eraYear");pe("y",["yyyy",4],0,"eraYear");le("N",ly);le("NN",ly);le("NNN",ly);le("NNNN",kB);le("NNNNN",NB);Re(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var i=n._locale.erasParse(e,r,n._strict);i?ye(n).era=i:ye(n).invalidEra=e});le("y",Va);le("yy",Va);le("yyy",Va);le("yyyy",Va);le("yo",EB);Re(["y","yy","yyy","yyyy"],Ct);Re(["yo"],function(e,t,n,r){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[Ct]=n._locale.eraYearOrdinalParse(e,i):t[Ct]=parseInt(e,10)});function vB(e,t){var n,r,i,o=this._eras||Ar("en")._eras;for(n=0,r=o.length;n<r;++n){switch(typeof o[n].since){case"string":i=X(o[n].since).startOf("day"),o[n].since=i.valueOf();break}switch(typeof o[n].until){case"undefined":o[n].until=1/0;break;case"string":i=X(o[n].until).startOf("day").valueOf(),o[n].until=i.valueOf();break}}return o}function xB(e,t,n){var r,i,o=this.eras(),a,l,u;for(e=e.toUpperCase(),r=0,i=o.length;r<i;++r)if(a=o[r].name.toUpperCase(),l=o[r].abbr.toUpperCase(),u=o[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(l===e)return o[r];break;case"NNNN":if(a===e)return o[r];break;case"NNNNN":if(u===e)return o[r];break}else if([a,l,u].indexOf(e)>=0)return o[r]}function $B(e,t){var n=e.since<=e.until?1:-1;return t===void 0?X(e.since).year():X(e.since).year()+(t-e.offset)*n}function bB(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function wB(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function SB(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function CB(){var e,t,n,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(n=i[e].since<=i[e].until?1:-1,r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return(this.year()-X(i[e].since).year())*n+i[e].offset;return this.year()}function PB(e){return Pe(this,"_erasNameRegex")||uy.call(this),e?this._erasNameRegex:this._erasRegex}function OB(e){return Pe(this,"_erasAbbrRegex")||uy.call(this),e?this._erasAbbrRegex:this._erasRegex}function _B(e){return Pe(this,"_erasNarrowRegex")||uy.call(this),e?this._erasNarrowRegex:this._erasRegex}function ly(e,t){return t.erasAbbrRegex(e)}function kB(e,t){return t.erasNameRegex(e)}function NB(e,t){return t.erasNarrowRegex(e)}function EB(e,t){return t._eraYearOrdinalRegex||Va}function uy(){var e=[],t=[],n=[],r=[],i,o,a=this.eras();for(i=0,o=a.length;i<o;++i)t.push(qt(a[i].name)),e.push(qt(a[i].abbr)),n.push(qt(a[i].narrow)),r.push(qt(a[i].name)),r.push(qt(a[i].abbr)),r.push(qt(a[i].narrow));this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}pe(0,["gg",2],0,function(){return this.weekYear()%100});pe(0,["GG",2],0,function(){return this.isoWeekYear()%100});function zf(e,t){pe(0,[e,e.length],0,t)}zf("gggg","weekYear");zf("ggggg","weekYear");zf("GGGG","isoWeekYear");zf("GGGGG","isoWeekYear");_t("weekYear","gg");_t("isoWeekYear","GG");kt("weekYear",1);kt("isoWeekYear",1);le("G",Ff);le("g",Ff);le("GG",Be,tn);le("gg",Be,tn);le("GGGG",Jm,Zm);le("gggg",Jm,Zm);le("GGGGG",Rf,Tf);le("ggggg",Rf,Tf);Ul(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=xe(e)});Ul(["gg","GG"],function(e,t,n,r){t[r]=X.parseTwoDigitYear(e)});function IB(e){return c8.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function TB(e){return c8.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function AB(){return br(this.year(),1,4)}function RB(){return br(this.isoWeekYear(),1,4)}function FB(){var e=this.localeData()._week;return br(this.year(),e.dow,e.doy)}function DB(){var e=this.localeData()._week;return br(this.weekYear(),e.dow,e.doy)}function c8(e,t,n,r,i){var o;return e==null?cl(this,r,i).year:(o=br(e,r,i),t>o&&(t=o),MB.call(this,e,t,n,r,i))}function MB(e,t,n,r,i){var o=Yw(e,t,n,r,i),a=dl(o.year,0,o.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}pe("Q",0,"Qo","quarter");_t("quarter","Q");kt("quarter",7);le("Q",Rw);Re("Q",function(e,t){t[yr]=(xe(e)-1)*3});function LB(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}pe("D",["DD",2],"Do","date");_t("date","D");kt("date",9);le("D",Be);le("DD",Be,tn);le("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});Re(["D","DD"],Wn);Re("Do",function(e,t){t[Wn]=xe(e.match(Be)[0])});var f8=Wa("Date",!0);pe("DDD",["DDDD",3],"DDDo","dayOfYear");_t("dayOfYear","DDD");kt("dayOfYear",4);le("DDD",Af);le("DDDD",Fw);Re(["DDD","DDDD"],function(e,t,n){n._dayOfYear=xe(e)});function jB(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}pe("m",["mm",2],0,"minute");_t("minute","m");kt("minute",14);le("m",Be);le("mm",Be,tn);Re(["m","mm"],Nn);var zB=Wa("Minutes",!1);pe("s",["ss",2],0,"second");_t("second","s");kt("second",15);le("s",Be);le("ss",Be,tn);Re(["s","ss"],vr);var UB=Wa("Seconds",!1);pe("S",0,0,function(){return~~(this.millisecond()/100)});pe(0,["SS",2],0,function(){return~~(this.millisecond()/10)});pe(0,["SSS",3],0,"millisecond");pe(0,["SSSS",4],0,function(){return this.millisecond()*10});pe(0,["SSSSS",5],0,function(){return this.millisecond()*100});pe(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});pe(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});pe(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});pe(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});_t("millisecond","ms");kt("millisecond",16);le("S",Af,Rw);le("SS",Af,tn);le("SSS",Af,Fw);var Jr,h8;for(Jr="SSSS";Jr.length<=9;Jr+="S")le(Jr,Va);function BB(e,t){t[Gi]=xe(("0."+e)*1e3)}for(Jr="S";Jr.length<=9;Jr+="S")Re(Jr,BB);h8=Wa("Milliseconds",!1);pe("z",0,0,"zoneAbbr");pe("zz",0,0,"zoneName");function HB(){return this._isUTC?"UTC":""}function YB(){return this._isUTC?"Coordinated Universal Time":""}var Q=jl.prototype;Q.add=DU;Q.calendar=HU;Q.clone=YU;Q.diff=ZU;Q.endOf=sB;Q.format=tB;Q.from=nB;Q.fromNow=rB;Q.to=iB;Q.toNow=oB;Q.get=Vj;Q.invalidAt=mB;Q.isAfter=WU;Q.isBefore=VU;Q.isBetween=qU;Q.isSame=GU;Q.isSameOrAfter=QU;Q.isSameOrBefore=KU;Q.isValid=pB;Q.lang=a8;Q.locale=o8;Q.localeData=s8;Q.max=pU;Q.min=hU;Q.parsingFlags=gB;Q.set=qj;Q.startOf=aB;Q.subtract=MU;Q.toArray=cB;Q.toObject=fB;Q.toDate=dB;Q.toISOString=XU;Q.inspect=eB;typeof Symbol<"u"&&Symbol.for!=null&&(Q[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});Q.toJSON=hB;Q.toString=JU;Q.unix=uB;Q.valueOf=lB;Q.creationData=yB;Q.eraName=bB;Q.eraNarrow=wB;Q.eraAbbr=SB;Q.eraYear=CB;Q.year=Hw;Q.isLeapYear=fz;Q.weekYear=IB;Q.isoWeekYear=TB;Q.quarter=Q.quarters=LB;Q.month=Uw;Q.daysInMonth=uz;Q.week=Q.weeks=vz;Q.isoWeek=Q.isoWeeks=xz;Q.weeksInYear=FB;Q.weeksInWeekYear=DB;Q.isoWeeksInYear=AB;Q.isoWeeksInISOWeekYear=RB;Q.date=f8;Q.day=Q.days=Tz;Q.weekday=Az;Q.isoWeekday=Rz;Q.dayOfYear=jB;Q.hour=Q.hours=Uz;Q.minute=Q.minutes=zB;Q.second=Q.seconds=UB;Q.millisecond=Q.milliseconds=h8;Q.utcOffset=SU;Q.utc=PU;Q.local=OU;Q.parseZone=_U;Q.hasAlignedHourOffset=kU;Q.isDST=NU;Q.isLocal=IU;Q.isUtcOffset=TU;Q.isUtc=t8;Q.isUTC=t8;Q.zoneAbbr=HB;Q.zoneName=YB;Q.dates=mn("dates accessor is deprecated. Use date instead.",f8);Q.months=mn("months accessor is deprecated. Use month instead",Uw);Q.years=mn("years accessor is deprecated. Use year instead",Hw);Q.zone=mn("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",CU);Q.isDSTShifted=mn("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",EU);function WB(e){return Ue(e*1e3)}function VB(){return Ue.apply(null,arguments).parseZone()}function p8(e){return e}var Oe=Gm.prototype;Oe.calendar=Tj;Oe.longDateFormat=Dj;Oe.invalidDate=Lj;Oe.ordinal=Uj;Oe.preparse=p8;Oe.postformat=p8;Oe.relativeTime=Hj;Oe.pastFuture=Yj;Oe.set=Ej;Oe.eras=vB;Oe.erasParse=xB;Oe.erasConvertYear=$B;Oe.erasAbbrRegex=OB;Oe.erasNameRegex=PB;Oe.erasNarrowRegex=_B;Oe.months=oz;Oe.monthsShort=az;Oe.monthsParse=lz;Oe.monthsRegex=cz;Oe.monthsShortRegex=dz;Oe.week=pz;Oe.firstDayOfYear=yz;Oe.firstDayOfWeek=mz;Oe.weekdays=_z;Oe.weekdaysMin=Nz;Oe.weekdaysShort=kz;Oe.weekdaysParse=Iz;Oe.weekdaysRegex=Fz;Oe.weekdaysShortRegex=Dz;Oe.weekdaysMinRegex=Mz;Oe.isPM=jz;Oe.meridiem=Bz;function Pc(e,t,n,r){var i=Ar(),o=er().set(r,t);return i[n](o,e)}function g8(e,t,n){if(kr(e)&&(t=e,e=void 0),e=e||"",t!=null)return Pc(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=Pc(e,r,n,"month");return i}function dy(e,t,n,r){typeof e=="boolean"?(kr(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,kr(t)&&(n=t,t=void 0),t=t||"");var i=Ar(),o=e?i._week.dow:0,a,l=[];if(n!=null)return Pc(t,(n+o)%7,r,"day");for(a=0;a<7;a++)l[a]=Pc(t,(a+o)%7,r,"day");return l}function qB(e,t){return g8(e,t,"months")}function GB(e,t){return g8(e,t,"monthsShort")}function QB(e,t,n){return dy(e,t,n,"weekdays")}function KB(e,t,n){return dy(e,t,n,"weekdaysShort")}function ZB(e,t,n){return dy(e,t,n,"weekdaysMin")}hi("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=xe(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});X.lang=mn("moment.lang is deprecated. Use moment.locale instead.",hi);X.langData=mn("moment.langData is deprecated. Use moment.localeData instead.",Ar);var or=Math.abs;function JB(){var e=this._data;return this._milliseconds=or(this._milliseconds),this._days=or(this._days),this._months=or(this._months),e.milliseconds=or(e.milliseconds),e.seconds=or(e.seconds),e.minutes=or(e.minutes),e.hours=or(e.hours),e.months=or(e.months),e.years=or(e.years),this}function m8(e,t,n,r){var i=Ln(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function XB(e,t){return m8(this,e,t,1)}function eH(e,t){return m8(this,e,t,-1)}function Rx(e){return e<0?Math.floor(e):Math.ceil(e)}function tH(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,i,o,a,l,u;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=Rx(Z1(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,i=dn(e/1e3),r.seconds=i%60,o=dn(i/60),r.minutes=o%60,a=dn(o/60),r.hours=a%24,t+=dn(a/24),u=dn(y8(t)),n+=u,t-=Rx(Z1(u)),l=dn(n/12),n%=12,r.days=t,r.months=n,r.years=l,this}function y8(e){return e*4800/146097}function Z1(e){return e*146097/4800}function nH(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=yn(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+y8(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Z1(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function rH(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+xe(this._months/12)*31536e6:NaN}function Rr(e){return function(){return this.as(e)}}var iH=Rr("ms"),oH=Rr("s"),aH=Rr("m"),sH=Rr("h"),lH=Rr("d"),uH=Rr("w"),dH=Rr("M"),cH=Rr("Q"),fH=Rr("y");function hH(){return Ln(this)}function pH(e){return e=yn(e),this.isValid()?this[e+"s"]():NaN}function co(e){return function(){return this.isValid()?this._data[e]:NaN}}var gH=co("milliseconds"),mH=co("seconds"),yH=co("minutes"),vH=co("hours"),xH=co("days"),$H=co("months"),bH=co("years");function wH(){return dn(this.days()/7)}var ur=Math.round,la={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function SH(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function CH(e,t,n,r){var i=Ln(e).abs(),o=ur(i.as("s")),a=ur(i.as("m")),l=ur(i.as("h")),u=ur(i.as("d")),d=ur(i.as("M")),c=ur(i.as("w")),f=ur(i.as("y")),g=o<=n.ss&&["s",o]||o<n.s&&["ss",o]||a<=1&&["m"]||a<n.m&&["mm",a]||l<=1&&["h"]||l<n.h&&["hh",l]||u<=1&&["d"]||u<n.d&&["dd",u];return n.w!=null&&(g=g||c<=1&&["w"]||c<n.w&&["ww",c]),g=g||d<=1&&["M"]||d<n.M&&["MM",d]||f<=1&&["y"]||["yy",f],g[2]=t,g[3]=+e>0,g[4]=r,SH.apply(null,g)}function PH(e){return e===void 0?ur:typeof e=="function"?(ur=e,!0):!1}function OH(e,t){return la[e]===void 0?!1:t===void 0?la[e]:(la[e]=t,e==="s"&&(la.ss=t-1),!0)}function _H(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=la,i,o;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},la,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),i=this.localeData(),o=CH(this,!n,r,i),n&&(o=i.pastFuture(+this,o)),i.postformat(o)}var A0=Math.abs;function Po(e){return(e>0)-(e<0)||+e}function Uf(){if(!this.isValid())return this.localeData().invalidDate();var e=A0(this._milliseconds)/1e3,t=A0(this._days),n=A0(this._months),r,i,o,a,l=this.asSeconds(),u,d,c,f;return l?(r=dn(e/60),i=dn(r/60),e%=60,r%=60,o=dn(n/12),n%=12,a=e?e.toFixed(3).replace(/\.?0+$/,""):"",u=l<0?"-":"",d=Po(this._months)!==Po(l)?"-":"",c=Po(this._days)!==Po(l)?"-":"",f=Po(this._milliseconds)!==Po(l)?"-":"",u+"P"+(o?d+o+"Y":"")+(n?d+n+"M":"")+(t?c+t+"D":"")+(i||r||e?"T":"")+(i?f+i+"H":"")+(r?f+r+"M":"")+(e?f+a+"S":"")):"P0D"}var be=jf.prototype;be.isValid=xU;be.abs=JB;be.add=XB;be.subtract=eH;be.as=nH;be.asMilliseconds=iH;be.asSeconds=oH;be.asMinutes=aH;be.asHours=sH;be.asDays=lH;be.asWeeks=uH;be.asMonths=dH;be.asQuarters=cH;be.asYears=fH;be.valueOf=rH;be._bubble=tH;be.clone=hH;be.get=pH;be.milliseconds=gH;be.seconds=mH;be.minutes=yH;be.hours=vH;be.days=xH;be.weeks=wH;be.months=$H;be.years=bH;be.humanize=_H;be.toISOString=Uf;be.toString=Uf;be.toJSON=Uf;be.locale=o8;be.localeData=s8;be.toIsoString=mn("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Uf);be.lang=a8;pe("X",0,0,"unix");pe("x",0,0,"valueOf");le("x",Ff);le("X",Qj);Re("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});Re("x",function(e,t,n){n._d=new Date(xe(e))});//! moment.js
X.version="2.29.4";kj(Ue);X.fn=Q;X.min=gU;X.max=mU;X.now=yU;X.utc=er;X.unix=WB;X.months=qB;X.isDate=Ll;X.locale=hi;X.invalid=Ef;X.duration=Ln;X.isMoment=Dn;X.weekdays=QB;X.parseZone=VB;X.localeData=Ar;X.isDuration=fd;X.monthsShort=GB;X.weekdaysMin=ZB;X.defineLocale=ny;X.updateLocale=Vz;X.locales=qz;X.weekdaysShort=KB;X.normalizeUnits=yn;X.relativeTimeRounding=PH;X.relativeTimeThreshold=OH;X.calendarFormat=BU;X.prototype=Q;X.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const kH=[{_id:"1",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"David",tag_No:"123",created:"2 may 2022",quantity:0,active:!1,price:100},{_id:"2",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:0,active:!1,price:100},{_id:"3",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"4",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"5",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"6",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"7",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"1",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"8",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100}];var J1={},NH={get exports(){return J1},set exports(e){J1=e}};(function(e,t){(function(n,r){e.exports=r(C)})(O8,n=>(()=>{var r={703:(l,u,d)=>{var c=d(414);function f(){}function g(){}g.resetWarningCache=f,l.exports=function(){function $(w,m,p,x,S,P){if(P!==c){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}function v(){return $}$.isRequired=$;var b={array:$,bigint:$,bool:$,func:$,number:$,object:$,string:$,symbol:$,any:$,arrayOf:v,element:$,elementType:$,instanceOf:v,node:$,objectOf:v,oneOf:v,oneOfType:v,shape:v,exact:v,checkPropTypes:g,resetWarningCache:f};return b.PropTypes=b,b}},697:(l,u,d)=>{l.exports=d(703)()},414:l=>{l.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:l=>{l.exports=n}},i={};function o(l){var u=i[l];if(u!==void 0)return u.exports;var d=i[l]={exports:{}};return r[l](d,d.exports,o),d.exports}o.n=l=>{var u=l&&l.__esModule?()=>l.default:()=>l;return o.d(u,{a:u}),u},o.d=(l,u)=>{for(var d in u)o.o(u,d)&&!o.o(l,d)&&Object.defineProperty(l,d,{enumerable:!0,get:u[d]})},o.o=(l,u)=>Object.prototype.hasOwnProperty.call(l,u),o.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var a={};return(()=>{o.r(a),o.d(a,{default:()=>ie});var l=o(98),u=o.n(l),d=o(697),c=o.n(d);function f(){return f=Object.assign?Object.assign.bind():function(M){for(var L=1;L<arguments.length;L++){var J=arguments[L];for(var F in J)Object.prototype.hasOwnProperty.call(J,F)&&(M[F]=J[F])}return M},f.apply(this,arguments)}var g=function(M){var L=M.pageClassName,J=M.pageLinkClassName,F=M.page,ee=M.selected,te=M.activeClassName,j=M.activeLinkClassName,N=M.getEventListener,E=M.pageSelectedHandler,U=M.href,D=M.extraAriaContext,H=M.pageLabelBuilder,W=M.rel,oe=M.ariaLabel||"Page "+F+(D?" "+D:""),k=null;return ee&&(k="page",oe=M.ariaLabel||"Page "+F+" is your current page",L=L!==void 0?L+" "+te:te,J!==void 0?j!==void 0&&(J=J+" "+j):J=j),u().createElement("li",{className:L},u().createElement("a",f({rel:W,role:U?void 0:"button",className:J,href:U,tabIndex:ee?"-1":"0","aria-label":oe,"aria-current":k,onKeyPress:E},N(E)),H(F)))};g.propTypes={pageSelectedHandler:c().func.isRequired,selected:c().bool.isRequired,pageClassName:c().string,pageLinkClassName:c().string,activeClassName:c().string,activeLinkClassName:c().string,extraAriaContext:c().string,href:c().string,ariaLabel:c().string,page:c().number.isRequired,getEventListener:c().func.isRequired,pageLabelBuilder:c().func.isRequired,rel:c().string};const $=g;function v(){return v=Object.assign?Object.assign.bind():function(M){for(var L=1;L<arguments.length;L++){var J=arguments[L];for(var F in J)Object.prototype.hasOwnProperty.call(J,F)&&(M[F]=J[F])}return M},v.apply(this,arguments)}var b=function(M){var L=M.breakLabel,J=M.breakAriaLabel,F=M.breakClassName,ee=M.breakLinkClassName,te=M.breakHandler,j=M.getEventListener,N=F||"break";return u().createElement("li",{className:N},u().createElement("a",v({className:ee,role:"button",tabIndex:"0","aria-label":J,onKeyPress:te},j(te)),L))};b.propTypes={breakLabel:c().oneOfType([c().string,c().node]),breakAriaLabel:c().string,breakClassName:c().string,breakLinkClassName:c().string,breakHandler:c().func.isRequired,getEventListener:c().func.isRequired};const w=b;function m(M){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return M??L}function p(M){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},p(M)}function x(){return x=Object.assign?Object.assign.bind():function(M){for(var L=1;L<arguments.length;L++){var J=arguments[L];for(var F in J)Object.prototype.hasOwnProperty.call(J,F)&&(M[F]=J[F])}return M},x.apply(this,arguments)}function S(M,L){for(var J=0;J<L.length;J++){var F=L[J];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(M,F.key,F)}}function P(M,L){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(J,F){return J.__proto__=F,J},P(M,L)}function _(M,L){if(L&&(p(L)==="object"||typeof L=="function"))return L;if(L!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return T(M)}function T(M){if(M===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}function R(M){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(L){return L.__proto__||Object.getPrototypeOf(L)},R(M)}function Y(M,L,J){return L in M?Object.defineProperty(M,L,{value:J,enumerable:!0,configurable:!0,writable:!0}):M[L]=J,M}var z=function(M){(function(N,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function");N.prototype=Object.create(E&&E.prototype,{constructor:{value:N,writable:!0,configurable:!0}}),Object.defineProperty(N,"prototype",{writable:!1}),E&&P(N,E)})(j,M);var L,J,F,ee,te=(F=j,ee=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var N,E=R(F);if(ee){var U=R(this).constructor;N=Reflect.construct(E,arguments,U)}else N=E.apply(this,arguments);return _(this,N)});function j(N){var E,U;return function(D,H){if(!(D instanceof H))throw new TypeError("Cannot call a class as a function")}(this,j),Y(T(E=te.call(this,N)),"handlePreviousPage",function(D){var H=E.state.selected;E.handleClick(D,null,H>0?H-1:void 0,{isPrevious:!0})}),Y(T(E),"handleNextPage",function(D){var H=E.state.selected,W=E.props.pageCount;E.handleClick(D,null,H<W-1?H+1:void 0,{isNext:!0})}),Y(T(E),"handlePageSelected",function(D,H){if(E.state.selected===D)return E.callActiveCallback(D),void E.handleClick(H,null,void 0,{isActive:!0});E.handleClick(H,null,D)}),Y(T(E),"handlePageChange",function(D){E.state.selected!==D&&(E.setState({selected:D}),E.callCallback(D))}),Y(T(E),"getEventListener",function(D){return Y({},E.props.eventListener,D)}),Y(T(E),"handleClick",function(D,H,W){var oe=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},k=oe.isPrevious,de=k!==void 0&&k,Z=oe.isNext,Ce=Z!==void 0&&Z,me=oe.isBreak,ge=me!==void 0&&me,he=oe.isActive,ke=he!==void 0&&he;D.preventDefault?D.preventDefault():D.returnValue=!1;var De=E.state.selected,fe=E.props.onClick,O=W;if(fe){var I=fe({index:H,selected:De,nextSelectedPage:W,event:D,isPrevious:de,isNext:Ce,isBreak:ge,isActive:ke});if(I===!1)return;Number.isInteger(I)&&(O=I)}O!==void 0&&E.handlePageChange(O)}),Y(T(E),"handleBreakClick",function(D,H){var W=E.state.selected;E.handleClick(H,D,W<D?E.getForwardJump():E.getBackwardJump(),{isBreak:!0})}),Y(T(E),"callCallback",function(D){E.props.onPageChange!==void 0&&typeof E.props.onPageChange=="function"&&E.props.onPageChange({selected:D})}),Y(T(E),"callActiveCallback",function(D){E.props.onPageActive!==void 0&&typeof E.props.onPageActive=="function"&&E.props.onPageActive({selected:D})}),Y(T(E),"getElementPageRel",function(D){var H=E.state.selected,W=E.props,oe=W.nextPageRel,k=W.prevPageRel,de=W.selectedPageRel;return H-1===D?k:H===D?de:H+1===D?oe:void 0}),Y(T(E),"pagination",function(){var D=[],H=E.props,W=H.pageRangeDisplayed,oe=H.pageCount,k=H.marginPagesDisplayed,de=H.breakLabel,Z=H.breakClassName,Ce=H.breakLinkClassName,me=H.breakAriaLabels,ge=E.state.selected;if(oe<=W)for(var he=0;he<oe;he++)D.push(E.getPageElement(he));else{var ke=W/2,De=W-ke;ge>oe-W/2?ke=W-(De=oe-ge):ge<W/2&&(De=W-(ke=ge));var fe,O,I=function(V){return E.getPageElement(V)},A=[];for(fe=0;fe<oe;fe++){var re=fe+1;if(re<=k)A.push({type:"page",index:fe,display:I(fe)});else if(re>oe-k)A.push({type:"page",index:fe,display:I(fe)});else if(fe>=ge-ke&&fe<=ge+(ge===0&&W>1?De-1:De))A.push({type:"page",index:fe,display:I(fe)});else if(de&&A.length>0&&A[A.length-1].display!==O&&(W>0||k>0)){var q=fe<ge?me.backward:me.forward;O=u().createElement(w,{key:fe,breakAriaLabel:q,breakLabel:de,breakClassName:Z,breakLinkClassName:Ce,breakHandler:E.handleBreakClick.bind(null,fe),getEventListener:E.getEventListener}),A.push({type:"break",index:fe,display:O})}}A.forEach(function(V,se){var ve=V;V.type==="break"&&A[se-1]&&A[se-1].type==="page"&&A[se+1]&&A[se+1].type==="page"&&A[se+1].index-A[se-1].index<=2&&(ve={type:"page",index:V.index,display:I(V.index)}),D.push(ve.display)})}return D}),N.initialPage!==void 0&&N.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(N.initialPage,") and forcePage (").concat(N.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),U=N.initialPage?N.initialPage:N.forcePage?N.forcePage:0,E.state={selected:U},E}return L=j,(J=[{key:"componentDidMount",value:function(){var N=this.props,E=N.initialPage,U=N.disableInitialCallback,D=N.extraAriaContext,H=N.pageCount,W=N.forcePage;E===void 0||U||this.callCallback(E),D&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(H)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(H,"). Did you forget a Math.ceil()?")),E!==void 0&&E>H-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(E," > ").concat(H-1,").")),W!==void 0&&W>H-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(W," > ").concat(H-1,")."))}},{key:"componentDidUpdate",value:function(N){this.props.forcePage!==void 0&&this.props.forcePage!==N.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(N.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var N=this.state.selected,E=this.props,U=E.pageCount,D=N+E.pageRangeDisplayed;return D>=U?U-1:D}},{key:"getBackwardJump",value:function(){var N=this.state.selected-this.props.pageRangeDisplayed;return N<0?0:N}},{key:"getElementHref",value:function(N){var E=this.props,U=E.hrefBuilder,D=E.pageCount,H=E.hrefAllControls;if(U)return H||N>=0&&N<D?U(N+1,D,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(N){var E=N===this.state.selected;if(this.props.ariaLabelBuilder&&N>=0&&N<this.props.pageCount){var U=this.props.ariaLabelBuilder(N+1,E);return this.props.extraAriaContext&&!E&&(U=U+" "+this.props.extraAriaContext),U}}},{key:"getPageElement",value:function(N){var E=this.state.selected,U=this.props,D=U.pageClassName,H=U.pageLinkClassName,W=U.activeClassName,oe=U.activeLinkClassName,k=U.extraAriaContext,de=U.pageLabelBuilder;return u().createElement($,{key:N,pageSelectedHandler:this.handlePageSelected.bind(null,N),selected:E===N,rel:this.getElementPageRel(N),pageClassName:D,pageLinkClassName:H,activeClassName:W,activeLinkClassName:oe,extraAriaContext:k,href:this.getElementHref(N),ariaLabel:this.ariaLabelBuilder(N),page:N+1,pageLabelBuilder:de,getEventListener:this.getEventListener})}},{key:"render",value:function(){var N=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&N!==void 0)return N&&N(this.props);var E=this.props,U=E.disabledClassName,D=E.disabledLinkClassName,H=E.pageCount,W=E.className,oe=E.containerClassName,k=E.previousLabel,de=E.previousClassName,Z=E.previousLinkClassName,Ce=E.previousAriaLabel,me=E.prevRel,ge=E.nextLabel,he=E.nextClassName,ke=E.nextLinkClassName,De=E.nextAriaLabel,fe=E.nextRel,O=this.state.selected,I=O===0,A=O===H-1,re="".concat(m(de)).concat(I?" ".concat(m(U)):""),q="".concat(m(he)).concat(A?" ".concat(m(U)):""),V="".concat(m(Z)).concat(I?" ".concat(m(D)):""),se="".concat(m(ke)).concat(A?" ".concat(m(D)):""),ve=I?"true":"false",ae=A?"true":"false";return u().createElement("ul",{className:W||oe,role:"navigation","aria-label":"Pagination"},u().createElement("li",{className:re},u().createElement("a",x({className:V,href:this.getElementHref(O-1),tabIndex:I?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":ve,"aria-label":Ce,rel:me},this.getEventListener(this.handlePreviousPage)),k)),this.pagination(),u().createElement("li",{className:q},u().createElement("a",x({className:se,href:this.getElementHref(O+1),tabIndex:A?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":ae,"aria-label":De,rel:fe},this.getEventListener(this.handleNextPage)),ge)))}}])&&S(L.prototype,J),Object.defineProperty(L,"prototype",{writable:!1}),j}(l.Component);Y(z,"propTypes",{pageCount:c().number.isRequired,pageRangeDisplayed:c().number,marginPagesDisplayed:c().number,previousLabel:c().node,previousAriaLabel:c().string,prevPageRel:c().string,prevRel:c().string,nextLabel:c().node,nextAriaLabel:c().string,nextPageRel:c().string,nextRel:c().string,breakLabel:c().oneOfType([c().string,c().node]),breakAriaLabels:c().shape({forward:c().string,backward:c().string}),hrefBuilder:c().func,hrefAllControls:c().bool,onPageChange:c().func,onPageActive:c().func,onClick:c().func,initialPage:c().number,forcePage:c().number,disableInitialCallback:c().bool,containerClassName:c().string,className:c().string,pageClassName:c().string,pageLinkClassName:c().string,pageLabelBuilder:c().func,activeClassName:c().string,activeLinkClassName:c().string,previousClassName:c().string,nextClassName:c().string,previousLinkClassName:c().string,nextLinkClassName:c().string,disabledClassName:c().string,disabledLinkClassName:c().string,breakClassName:c().string,breakLinkClassName:c().string,extraAriaContext:c().string,ariaLabelBuilder:c().func,eventListener:c().string,renderOnZeroPageCount:c().func,selectedPageRel:c().string}),Y(z,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(M){return M},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const ie=z})(),a})())})(NH);const nn=Ux(J1);h.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;const EH=()=>{const e=JSON.parse(localStorage.getItem("user"));Ft();const t=e._id,{data:n}=et({queryKey:["posts"],queryFn:()=>Dl(t)}),[r,i]=C.useState(0),o=6,a=r*o,l=Math.ceil((n==null?void 0:n.length)/o),u=n==null?void 0:n.slice(a,a+o),d=({selected:w})=>{i(w)};console.log(n);const[c,f]=C.useState(""),g=["name","brand","tag"],$=w=>{const m=w==null?void 0:w.filter(p=>g.some(x=>{const S=p[x];return typeof S=="string"&&S.toLowerCase().includes(c)}));return c?m!=null&&m.length?m:null:w},v=$(u);var b=Intl.NumberFormat();return y(AH,{children:[s(it,{}),y(RH,{children:[s(FH,{children:"All Products"}),y(IH,{children:[s("input",{placeholder:"Search by name or brand",value:c,onChange:w=>f(w.target.value)}),s("button",{onClick:$,children:s(Ya,{})})]})]}),s(TH,{children:y(MH,{children:[y(DH,{children:[s(Ti,{children:s(Ii,{children:"Product "})}),s(Ti,{children:s(Ii,{children:"Tag "})}),s(Ti,{children:s(Ii,{children:"Created"})}),s(Ti,{children:s(Ii,{children:"Price"})}),s(Ti,{children:s(Ii,{children:"Aval / Qty "})}),s(Ti,{children:s(Ii,{children:"Active "})}),y(Ti,{children:[s(Ii,{children:"Action "})," "]})]}),v==null?void 0:v.map((w,m)=>s(Nf,{index:m,avatar:w==null?void 0:w.avatar[0].url,name:w.name,tag:w.tag_No,created:X(w.createdAt).format("D MMM YYYY"),quantity:w.quantity,active:w.active,price:b.format(w.price)},m))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:l,onPageChange:d,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active"})]})},IH=h.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`,TH=h.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,AH=h.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,RH=h.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,FH=h.div`
  border-bottom: 2px solid blue;
`,Ii=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Ti=h.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,DH=h.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,MH=h.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,LH=()=>{const e=JSON.parse(localStorage.getItem("user"));Ft();const t=e._id,{data:n}=et({queryKey:["posts"],queryFn:()=>Dl(t)}),r=n.filter(w=>w.active===!0),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),c=({selected:w})=>{o(w)};console.log(n);const[f,g]=C.useState("");console.log(f);const $=["name","brand","tag"],v=w=>{const m=w==null?void 0:w.filter(p=>$.some(x=>{const S=p[x];return typeof S=="string"&&S.toLowerCase().includes(f)}));return f?m!=null&&m.length?m:null:w};v(d);var b=Intl.NumberFormat();return y(UH,{children:[s(it,{}),y(BH,{children:[s(HH,{children:"Live Products"}),y(jH,{children:[s("input",{placeholder:"Search by name or brand",value:f,onChange:w=>g(w.target.value)}),s("button",{onClick:v,children:s(Ya,{})})]})]}),s(zH,{children:y(WH,{children:[y(YH,{children:[s(Ri,{children:s(Ai,{children:"Product "})}),s(Ri,{children:s(Ai,{children:"Tag "})}),s(Ri,{children:s(Ai,{children:"Created"})}),s(Ri,{children:s(Ai,{children:"Price"})}),s(Ri,{children:s(Ai,{children:"Aval / Qty "})}),s(Ri,{children:s(Ai,{children:"Active "})}),y(Ri,{children:[s(Ai,{children:"Action "})," "]})]}),d==null?void 0:d.map((w,m)=>s(Nf,{index:m,avatar:w==null?void 0:w.avatar[0].url,name:w.name,tag:w.tag_No,created:X(w.createdAt).format("D MMM YYYY"),quantity:w.quantity,active:w.active,price:b.format(w.price)},m))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:c,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})},jH=h.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`,zH=h.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,UH=h.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,BH=h.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,HH=h.div`
  border-bottom: 2px solid blue;
`,Ai=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Ri=h.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,YH=h.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,WH=h.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,VH=()=>{const e=JSON.parse(localStorage.getItem("user"));Ft();const t=e._id,{data:n}=et({queryKey:["posts"],queryFn:()=>Dl(t)}),r=n.filter(m=>m.active===!1),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),c=({selected:m})=>{o(m)};console.log(n);const[f,g]=C.useState("");console.log(f);const $=["name","brand","tag"],v=m=>{const p=m==null?void 0:m.filter(x=>$.some(S=>{const P=x[S];return typeof P=="string"&&P.toLowerCase().includes(f)}));return f?p!=null&&p.length?p:null:m},b=v(d);var w=Intl.NumberFormat();return y(QH,{children:[s(it,{}),y(KH,{children:[s(ZH,{children:"Sold Out"}),y(qH,{children:[s("input",{placeholder:"Search by name or brand",value:f,onChange:m=>g(m.target.value)}),s("button",{onClick:v,children:s(Ya,{})})]})]}),s(GH,{children:y(XH,{children:[y(JH,{children:[s(Di,{children:s(Fi,{children:"Product "})}),s(Di,{children:s(Fi,{children:"Tag "})}),s(Di,{children:s(Fi,{children:"Created"})}),s(Di,{children:s(Fi,{children:"Price"})}),s(Di,{children:s(Fi,{children:"Aval / Qty "})}),s(Di,{children:s(Fi,{children:"Active "})}),y(Di,{children:[s(Fi,{children:"Action "})," "]})]}),b==null?void 0:b.map((m,p)=>s(Nf,{index:p,avatar:m==null?void 0:m.avatar[0].url,name:m.name,tag:m.tag_No,created:X(m.createdAt).format("D MMM YYYY"),quantity:m.quantity,active:m.active,price:w.format(m.price)},p))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:c,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active"})]})},qH=h.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`,GH=h.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,QH=h.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,KH=h.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,ZH=h.div`
  border-bottom: 2px solid blue;
`,Fi=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Di=h.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,JH=h.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,XH=h.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,eY=()=>{const e=JSON.parse(localStorage.getItem("user"));Ft();const t=e._id,{data:n}=et({queryKey:["posts"],queryFn:()=>Dl(t)}),r=kH.filter(w=>w.rejected),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),c=({selected:w})=>{o(w)};console.log(n);const[f,g]=C.useState("");console.log(f);const $=["name","brand","tag"],v=w=>{const m=w==null?void 0:w.filter(p=>$.some(x=>{const S=p[x];return typeof S=="string"&&S.toLowerCase().includes(f)}));return f?m!=null&&m.length?m:null:w},b=v(d);return y(rY,{children:[s(it,{}),y(iY,{children:[s(oY,{children:"Rejected Products"}),y(tY,{children:[s("input",{placeholder:"Search by name or brand",value:f,onChange:w=>g(w.target.value)}),s("button",{onClick:v,children:s(Ya,{})})]})]}),s(nY,{children:y(sY,{children:[y(aY,{children:[s(ls,{children:s(ss,{children:"Product "})}),s(ls,{children:s(ss,{children:"Tag "})}),s(ls,{children:s(ss,{children:"Created"})}),s(ls,{children:s(ss,{children:"Reason for Rejection"})}),y(ls,{children:[s(ss,{children:"Action "})," "]})]}),b==null?void 0:b.map((w,m)=>s(Nf,{index:m,avatar:w==null?void 0:w.avatar[0].url,name:w.name,tag:w.tag_No,created:X(w.createdAt).format("D MMM YYYY"),rejected},m))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:c,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active"})]})},tY=h.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`,nY=h.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,rY=h.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,iY=h.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,oY=h.div`
  border-bottom: 2px solid blue;
`,ss=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,ls=h.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,aY=h.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,sY=h.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,Fr=({avatar:e,index:t,order_No:n,price:r,pending_days:i,created:o,delivery_status:a,payment_method:l,tag_No:u,name:d,payment_status:c,quantity:f,amount:g})=>(C.useState(!1),y(dY,{children:[n&&y(xn,{children:[" ",s(Bn,{children:n})]}),i&&y(xn,{children:[" ",s(Bn,{children:i})]}),o&&y(xn,{children:[" ",s(Bn,{children:o})," "]}),u&&y(xn,{children:[" ",s(Bn,{children:u})," "]}),e&&s(xn,{children:y(uY,{children:[s("span",{children:s(lY,{src:e})}),d]})}),r&&y(xn,{children:[s(Bn,{children:r})," "]}),f&&y(xn,{children:[s(Bn,{children:f})," "]}),l&&s(xn,{children:s(Bn,{children:l})}),g&&s(xn,{children:s(Bn,{children:g})}),c&&s(xn,{children:s(Bn,{children:c})}),a&&s(xn,{children:s(Bn,{children:s("button",{className:`${a}`,children:a})})})]},t));h.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
  margin-left: 10px;
`;h.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
`;const lY=h.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  /* background-color: gold; */
  margin-right: 10px;
`;h.div`
  margin: 5px;
  color: blue;
  border-bottom: 2px solid blue;
  font-weight: 600;
  cursor: pointer;
  span {
    margin-left: 3px;
  }
`;h.div``;const Bn=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,uY=h.div`
  display: flex;
  align-items: center;

  :hover {
    color: blue;
  }
  cursor: pointer;
`,xn=h.td`
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 400;
  border-left: 1.5px solid #d0d1d2;
`,dY=h.tr`
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;;
`,cY=()=>{const e=JSON.parse(localStorage.getItem("user"));Ft();const t=e._id,{data:n}=et({queryKey:["orders"],queryFn:Tr}),r=n==null?void 0:n.filter(m=>{var x;return((x=m==null?void 0:m.products)==null?void 0:x.filter(S=>S.sellerID===t)).length>0}),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),c=({selected:m})=>{o(m)},[f,g]=C.useState(""),$=["order_No","delivery_status"],b=(m=>{const p=m==null?void 0:m.filter(x=>$.some(S=>{const P=x[S];return typeof P=="string"&&P.toLowerCase().includes(f)}));return f?p!=null&&p.length?p:null:m})(d);var w=Intl.NumberFormat();return y(hY,{children:[s(it,{}),s(pY,{children:s(gY,{children:"All Orders"})}),s(fY,{children:y(yY,{children:[y(mY,{children:[s(ds,{children:s(us,{children:"Order Number "})}),s(ds,{children:s(us,{children:"Order Date"})}),s(ds,{children:s(us,{children:"Price"})}),s(ds,{children:s(us,{children:"Payment Method"})}),s(ds,{children:s(us,{children:"Status "})})]}),b==null?void 0:b.map((m,p)=>s(Fr,{index:p,delivery_status:m.delivery_status,order_No:m.order_No,created:X(m.createdAt).format("D MMM YYYY"),payment_method:m.payment_method,pending_days:m.pending_days,price:w.format(m.price)},p))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:c,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};h.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;const fY=h.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,hY=h.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,pY=h.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0;
`,gY=h.div`
  border-bottom: 2px solid blue;
`,us=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,ds=h.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,mY=h.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,yY=h.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,vY=()=>{const e=JSON.parse(localStorage.getItem("user"));Ft();const t=e._id,{data:n}=et({queryKey:["orders"],queryFn:Tr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="pending"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),f=({selected:p})=>{a(p)},[g,$]=C.useState("");console.log(g);const v=["order_No","delivery_status"],w=(p=>{const x=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?x!=null&&x.length?x:null:p})(c);var m=Intl.NumberFormat();return y($Y,{children:[s(it,{}),s(bY,{children:s(wY,{children:"Pending Orders"})}),s(xY,{children:y(CY,{children:[y(SY,{children:[s(fs,{children:s(cs,{children:"Order Number "})}),s(fs,{children:s(cs,{children:"Order Date"})}),s(fs,{children:s(cs,{children:"Price"})}),s(fs,{children:s(cs,{children:"Payment Method"})}),s(fs,{children:s(cs,{children:"Status "})})]}),w==null?void 0:w.map((p,x)=>s(Fr,{index:x,delivery_status:p.delivery_status,order_No:p.order_No,created:X(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:m.format(p.price)},x))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:f,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};h.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;const xY=h.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,$Y=h.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,bY=h.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,wY=h.div`
  border-bottom: 2px solid blue;
`,cs=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,fs=h.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,SY=h.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,CY=h.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,PY=()=>{const e=JSON.parse(localStorage.getItem("user"));Ft();const t=e._id,{data:n}=et({queryKey:["orders"],queryFn:Tr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="ready to ship"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),f=({selected:p})=>{a(p)},[g,$]=C.useState(""),v=["order_No","delivery_status"],w=(p=>{const x=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?x!=null&&x.length?x:null:p})(c);var m=Intl.NumberFormat();return y(_Y,{children:[s(it,{}),s(kY,{children:s(NY,{children:"Ready To Ship Orders"})}),s(OY,{children:y(IY,{children:[y(EY,{children:[s(ps,{children:s(hs,{children:"Order Number "})}),s(ps,{children:s(hs,{children:"Order Date"})}),s(ps,{children:s(hs,{children:"Price"})}),s(ps,{children:s(hs,{children:"Payment Method"})}),s(ps,{children:s(hs,{children:"Status "})})]}),w==null?void 0:w.map((p,x)=>s(Fr,{index:x,delivery_status:p.delivery_status,order_No:p.order_No,created:X(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:m.format(p.price)},x))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:f,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};h.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;const OY=h.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,_Y=h.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,kY=h.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,NY=h.div`
  border-bottom: 2px solid blue;
`,hs=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,ps=h.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,EY=h.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,IY=h.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,TY=()=>{const e=JSON.parse(localStorage.getItem("user"));Ft();const t=e._id,{data:n}=et({queryKey:["orders"],queryFn:Tr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="shipped"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),f=({selected:p})=>{a(p)},[g,$]=C.useState(""),v=["order_No","delivery_status"],w=(p=>{const x=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?x!=null&&x.length?x:null:p})(c);var m=Intl.NumberFormat();return y(RY,{children:[s(it,{}),s(FY,{children:s(DY,{children:"Shipped"})}),s(AY,{children:y(LY,{children:[y(MY,{children:[s(_o,{children:s(Oo,{children:"Order Number "})}),s(_o,{children:s(Oo,{children:"Pending Days"})}),s(_o,{children:s(Oo,{children:"Order Date"})}),s(_o,{children:s(Oo,{children:"Price"})}),s(_o,{children:s(Oo,{children:"Payment Method"})}),s(_o,{children:s(Oo,{children:"Status "})})]}),w==null?void 0:w.map((p,x)=>s(Fr,{index:x,delivery_status:p.delivery_status,order_No:p.order_No,created:X(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:m.format(p.price)},x))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:f,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};h.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;const AY=h.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,RY=h.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,FY=h.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,DY=h.div`
  border-bottom: 2px solid blue;
`,Oo=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,_o=h.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,MY=h.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,LY=h.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,jY="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA6LSURBVHgB7Z0JrFxVHca/ebVQQNk3sUADZRGIQkGhKjuKUVyIIS4xMRJwjRIUlMREE1RUMGJUgonGgIoGELFBMVK1hhTRCkKRLQXbIpS2tNAWui/v+f8492TOu2/m9NHO3N7/ne+XfJnlzbzcOed853/We1oYDFqmIdNepoNNx5ummY4xHWnax7Rz8bkWBpcRhN+/xbTGtMg03/SQ6d+mx02LTatMmzEANLkwxN/GTH+j6fRCbzIdlPy91eV7g8hI5r2NpidN/zTNMv3FtDTzPVFjYiHf0/RxhAxdhlAzUsPJIzUiddRwkmYUo8Ym00LTb01nmCYiROdBrlhcwYxipp1u+oPpeYSM3ozRxvBSSOtmlpiWfM5K5zrTYUnaixrDmmxv0+cRMk+Roj9GidpUPM41nYdQMckkNYUZs5/pMtMLaNdyMkd/jRKbXo+Z3mvaCQ0yyQQ0A0aO3U1fKvRqtNvF5ZGpkQ7fl4HGqlNatTo8j+m7B8LI4P8QOvOd0tkdTXA6fwONfhVC9GDGDBWPOWMMF5/j6Mx6hJqwEZnaI9hcmlQ8Mq3SiqZcbmK68XMc2fqC6ebic67T1LtB4vWfYZph2i15v5s5+JymWIhQ01HM1PUQhOnDCodpOQWhA05xaDwdreqUvjH6zDOdhZCuqnR2IMwkTvT9CZ37G2mHMv79XtOlppNNB6LdzGxJYyoWRpDJCIWdEXpRKY1z6f090y4QOwxmJPsdPzatxNjh2zSzGB2YuV8zHYr6zZqn11Kn6yLxetj5Ptb0C9OL6D4AEoeBl5s+YHoVxA6B4f400wKEDMmNsjxq+ghCZtVxUisWwqFEdbvGoeJxf9O1aI8UdosiTPdbTIcn33WH11EsFh6G/0+YzsXoZhJJ28QrTBcj9FHIMOoH14KdY3oHwjoxGpkFcBPqQ0zTdaZ/IESU00qfKUe/AxCGfx+G+iKVw5qMi+fS5SPlphU741egXTvXEQ6P/gqhQ7saofnCgYNvIjQh6xjtmJZcxnMbxqZ/zIP4/o0Ii0TdRhFvxAJzAUaboRziaY7fmF6HekbK2K5nmz7OSqfrnvhbPoP69UkivKajEJqvuQESrv6dCqd4dTUz59TieXm+gzBjlphuNT2LkIF1hM2pt6M9tJqage+x3zQJ9Wye8DqfMt2OfPqymTUN9TV6Fo8GYWHh8OFJmc8wI+aYZqPeHIEwERcNUB5qPQRhbVkdC1aM0jMRmoflvl0reW86nOLRIEx4TlpNTl5HYnjnsC4Nshj17hxy41FslkTS5+wQr0d9fwOvi5up5qOzieN7R2H0EhY3eG1i0RxsesQlEJH4fIPpAXRuftWJexAGGmIfKW2/kzsRRrPq+ht4rbw+7jbcgO5rt9gP3AMO8WoQjmDFa+9U+zKzFqH+cAj666YnMLqGZZuezcPri9d1rnlpAi5Q5CBDt+ukOXaFwz6I11lOJna3kanY9l1TvK5z84TcbbrIdL7pRNNahHY9523mw0ezhEbv1lHn9U8s5A6vBtla5Cu36+sM+xhcH/YgwhIY/raXEDrAXn7DeG7g4C56EK2TqQcsYGsKdduLIXYAMkh9qOMSmIFH0/9CZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBlkECEyyCBCZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBm8GaTTHciF6BteI0hdbwQnGoa3HYXc+H8wwpkg8U6EQvQNbwb5NsKZE7yNDM8hlEFEX/FiEN5q9IemCzH6Np11vzGccI6XPgjPzWDkYN+jfBqTEH3Di0F4o+p4tDORMUQleDFI7G9oiFdUiheDyBRih6CZdCEyyCBCZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBlkEFEFnOh1uUxIBhH9hobgIlMuF5oEZ8ggop/EaLGf6cumT5qmwlEUkUFEP4l7d3h674dM3zL92nQonCCDiH7SKj3fyTTNdAWcoFNuRb/ptLntSDjBSwRhJ0/nh/vG5S5QLwZZYtoInSUuKsaLQWaYFqF9owZFE5+4iyJeDDLPdLnpvwhRRMYQleCpk84ostR0puldppMRrl+3/hF9w9so1hzT/aZlpmNNu0ND1aKPeCtcjBZxREtRQ/QdbxFEnXNRKWqeCJFBBhEigwwiRAaPJ0zJ1KIyPBW2OIuu5SaiMjyNYvFaeQzCh03TEeZAdDNr0Ve8GISR7iLTlaa9oGaWqAgvBe0Y0yWmPdFuagGKHt5wN3/lJYK8xzSleK5mlX/cGMWLQQ5AuFY1rfzjKop43HKr6OGPsik2wwmqkUU/iZvbWKkNoz1EPxNO0E0bRD+J0Z4mWYmwTeFm0zVwggwi+klsWtEc3zHda3oAjpBBRL+hSdYhRI5n4KyTrj6IqIp0/soNMoioGkUQIZqCDCJEBhlEiAwyiBAZZBAhMsggQmSQQYTIIIMIkcGjQXRXRVEZXgyyCqOPPZBJRCV4McifTcuhW/6IivFikH+ZfoD29bpc+Cb84WW5+wbTTxBM8THTYQhHCuvuJqKveIkgNMILpqsRbgF0Kdr9EiH6hqdRrLi3mde8AUJUgLdhXh3gKSpFE4VCZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBlkECEyyCBCZJBBhMgggwiRQQYRIoMMIkQGGUT0mkattpZBRC/g/QJ4MGdqjnS351rTGuh8EDGg8Gi1R00Titdx307c8flH0/NwuDVaBhG9gNufv2Gah9FRYovpHtN1xWt3EURnFIrtJRb62aaLTe83nYRwLuFdphmm+XDaN5FBRK9Yj/YptpMQWicvmTbCccddBhG9hB31tYXICJyPaskgotc06lZM6qQLkUEGESKDDCJEBvVBRK9poT0hqE66EAmcSZ9o2s20CWHol48a5hUDD++2f4rpfaajEYZ8OYt+h+mJ4rWoAIbvC00rEBI9rvuJa3+op02HQMciVEFM47eY7kOIGFsKrUYwyBQ4zQt10sX2woppV9NXTdMw+pCjnU3nmj6VvOcKGURsLyz0pyGsvxrG6E46+yRsxp9v2hcOkUFEL9gdo6NDq/Sanfad4RAZRPSCBQj9wfLwbhy9WmJaCW2YEgMICz1X8N6Oduc8vk/xNLAbEXYUuuuDaJhX9AKa4hrTa03TTXsi9EeWmX5n+im0H0QMONwU9WnT2abDEfaB3G+ag7B5yiUyiOgFMTosNv0SYTad77mfHJRBRC+JRtmIhqBOuhAZZBAhMsggQmSQQYTIIIOIXlJeYlJ+7Q4ZRPQKGiGOYnGi8DXQjkIhXobmYGX7NtPnTFMR5kD+arrJNBeiMrRhqp5wJ+FzCMtO0rx4xHQCtGFKDCgs+AchbJjap3hvJHl8vemLcIoMInrBcaZDEQyRdszjIzdT7QvtKBQDyv4YW5bSvSHssO8Kh8ggotc0qt8ngwiRQQYRIoMMIkQGGUSIDDKIEBlkECEyyCBCZPBqEBlbVILXgqZFiL6Iq33doZpYiAwyiBAZZBAhMsggQmSQQYTIIIMIkUEGESKDDCJEBhlEiAwyiBAZmmqQVpfnore4v7Xo1miqQXYyTS4eZZD+wbTlEc9M64loYFo37daj8f6wPLf7+6a7EA6R5Cmsw8VnXN8rtgZEE/A2Pmea3m06xzQJDaxwm2aQWPh5aP0009Gm802zEQ6U/A/Cmd6r0TaMGB8sK3sgHNDJtH2r6XiEk22Z3rFyalQUaWIEIcwo1mYM/zQJb395cfF3nttNg2yGosl4YVrSBLwBXGqAkeTvjTMHaerd3WNtFjMuvVcs+yV7Q2wraaXS6TajjaLJxx+kGaeOeu8YqLTUPIgQGWQQURUu+3tem1gj4/x7fEybW43sTFZAmpa59M191x1eDdJtiDbNMJ50NFT6TmoOmeSVkZpiCGPTdmsjWYogNYCZw8ziUO7PEOY/TkUYr+fkISe3OKEVZ31lkvERj1Tj0Pi6QktN95keMl1iOhEa5q0NudqImUQD0BCcSb/ZdADCmYUHIpx0tEvxGTE+mN6bTC+alpueNS00rTKdgpDWMbKUcW0arwZhDba1mXDO9J5uut20BKHGI5oc3D7SAs+I/E7Twcj379jc3QRRCcwANptY4ONseCoahxmy0XQbQsSYADWpekVMR0aLN5seRkjv9LTh8qnDDyJEGVEBzJwpCGuqYgaMoHPmrDV9Nvme6A2scLj05Aa0K6RO+RDfvwOiMljQmTkz0c6cbjUX//YMwgH38bti+2DkYB/ucoQoHU1QNkjs1PPxSiiCV0ZMaJ7Lnau9YqYxk7iS94LiexMgtgUaI+7/oDnigs9uUTy+z77HORCVwozi0C1HVbbWzIomWWH6CsKIFk0SMzz9n9LYmj6+ZtSearqpSM/NSRrnIvicIs1dRg+vtSkLN2swLmU/Nnm/nAmt5PNcxXuW6Q3Fa2beGoRmQpz48lJ4qzIIy8c+RRp/0PRd0xnF38czMcjRxutNs+B0/41LVxdwHuM8048Q5jfib+n0m0ZKz9ebHjM9aXoEYWx/PTQETGLhZz+Dc0dHIFREUxDSfKj02ZQ0/WgIGoOTiI9DBqkcXjuHDq81fRTtoVxgfCaJE1uMILEtLQLRJDQE58riUpLyZ8rENObnnzNdZroVjjeneV5qwgRnH+Qq034Ie6NztJLvDSXPYyFQ9GhTrmhY+WxtkWe6VoufuwHOzdEEYnv5OIT95lvQfdhR6p/STjkf7zTthbEDIWIHcrZpLtqjVjHjPBU0r8aIw7lM91tMx6Ahw+lNmhNYgNDhnlyoU+2l2qw3jHR4vtL0c4T5qacQool7mjZp9rTp9wjL3TmyxU58NEqaqTLKtlE2BsXlPH83XWO6GmGF73Dps25pYkHhb2LHmxOJnMHlfbFOQLtjHs0ik7wyYprFgs85pL8hVEizECJ441bsNrmQxPticSk212KdZJpuOgrt0TuZZHxEczBacPUuI8bdCH0+7g3ZkHyuUfwfh/SKqT1n13AAAAAASUVORK5CYII=",zY="/assets/Fashion-71a7f00e.png",UY="/assets/Computer-be5aa3f3.png",BY="/assets/Food (1)-e1af81f4.png",HY=()=>y(WY,{children:[s(it,{}),y(YY,{children:[y(Fu,{children:[s(Ru,{src:jY}),s(mr,{to:"/seller-dashboard/uploading",style:{textDecoration:"none",color:"black"},children:s("span",{children:"Mobiles"})})]}),y(Fu,{children:[s(Ru,{src:zY}),s(mr,{to:"/seller-dashboard/upload-cloths",style:{textDecoration:"none",color:"black"},children:s("span",{children:"Clothings"})})]}),y(Fu,{children:[s(Ru,{src:UY}),s(mr,{to:"/seller-dashboard/upload-electronics",style:{textDecoration:"none",color:"black"},children:s("span",{children:"Electronics"})})]}),y(Fu,{children:[s(Ru,{src:BY}),s(mr,{to:"/seller-dashboard/upload-foods",style:{textDecoration:"none",color:"black"},children:s("span",{children:"Foods And Groceries"})})]})]})]}),Ru=h.img`

`,Fu=h.div`
  width: 360px;
  height: 365px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  background: rgba(47, 128, 237, 0.37);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  justify-content: center;
  @media (max-width: 320px) {
    width: 300px;
  }
  flex-direction: column;
  margin: 20px 20px;
  span {
    font-size: 19px;
    font-weight: 500;
    margin-top: 15px;
  }
`,YY=h.div`
  width: 87%;
  border-top: 1.8px solid grey;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  } */
`,WY=h.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`,VY=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(""),[c,f]=C.useState(""),[g,$]=C.useState(""),[v,b]=C.useState(""),[w,m]=C.useState(""),[p,x]=C.useState(""),[S,P]=C.useState(""),[_,T]=C.useState(),[R,Y]=C.useState("phone"),[z,ie]=C.useState(!1),M=Ot(),L=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);t(U),l(E)},J=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);r(U),d(E)},F=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);o(U),f(E)},ee=Ht({mutationFn:NF,onSuccess:()=>{M("/seller-dashboard/variation")},onError:N=>{console.log(N.message)}}),te=JSON.parse(localStorage.getItem("user"));return y(XY,{children:[s(it,{}),y(JY,{onSubmit:N=>{N.preventDefault();const E=te._id;(g.length==0||type.length==0||gender.length==0||v.length==0||S.length==0||!_||a.length==0||u.length==0)&&(ie(!0),alert("All inputs most be filed "));const U=new FormData;U.append("name",g),U.append("ram",w),U.append("condition",p),U.append("brand",v),U.append("description",S),U.append("category",R),U.append("price",_),c&&U.append("avatar",a),u&&U.append("avatar",u),c&&U.append("avatar",c),ee.mutate({id:E,formData:U})},children:[y(ZY,{children:[s("span",{children:"Upload Product Image *"}),y(KY,{children:[y(M0,{style:z?{border:"1px solid red"}:null,children:[a?null:s(F0,{fontSize:"25px"}),s(R0,{type:"file",onChange:L}),a?s(D0,{src:e}):null]}),y(M0,{style:z?{border:"1px solid red"}:null,children:[u?null:s(F0,{fontSize:"25px"}),s(R0,{type:"file",onChange:J}),u?s(D0,{src:n}):null]}),y(M0,{children:[c?null:s(F0,{fontSize:"25px"}),s(R0,{type:"file",onChange:F}),c?s(D0,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),y(QY,{children:[y(ko,{children:[s(Eo,{children:"Name*"}),y(No,{children:[s("input",{placeholder:"name",value:g,onChange:N=>$(N.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),y(ko,{children:[s(Eo,{children:"Brand*"}),y(No,{children:[s("input",{placeholder:"brand",value:v,onChange:N=>b(N.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),y(ko,{children:[s(Eo,{children:"RAM*"}),y(No,{children:[s("input",{placeholder:"RAM",value:w,onChange:N=>m(N.target.value)}),s("span",{children:"kindly specify RAM of product"})]})]}),y(ko,{children:[s(Eo,{children:"Price*"}),y(No,{children:[s("input",{placeholder:"price",type:"number",value:_,onChange:N=>T(N.target.value)}),s("span",{children:"kindly specify RAM of product"})]})]}),y(ko,{children:[s(Eo,{children:"Condition*"}),y(No,{children:[y("select",{placeholder:"Select condition",value:p,onChange:N=>x(N.target.value),children:[s("option",{children:"Select Condition"}),s("option",{children:"New"}),s("option",{children:"Used"})]}),s("span",{children:"kindly specify condition of product"})]})]}),y(ko,{children:[s(Eo,{children:"Description*"}),y(No,{children:[s("textarea",{placeholder:"description",value:S,onChange:N=>P(N.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s(GY,{children:s(qY,{type:"submit",children:"Enter Product Variation"})})]})]})},R0=h.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,F0=h(kf)`
  font-size: 25px;
  position: absolute;
`,D0=h.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,qY=h.button`
  padding: 13px 16px;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: #d6649d;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 3px;
  flex: 0.47;
`,GY=h.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,ko=h.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
`,No=h.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  span {
    font-size: 12px;
    font-weight: 500;
  }

  input {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 30px;
    margin-bottom: 5px;
  }
  select {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 40px;
    margin-bottom: 5px;
  }

  textarea{
    height: 300px;
    resize: none;
    border-radius: 5px;
    padding: 10px;
  }
`,Eo=h.div`
  font-size: 15px;
  font-weight: 500;
`,QY=h.div`
  width: 100%;
`,KY=h.div`
  display: flex;
  padding: 10px 0;
`,M0=h.label`
  width: 200px;
    height: 200px;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,ZY=h.div`
  width: 97%;
  border-top: 1.7px solid grey;
  padding: 10px 0;

  span {
    font-size: 15px;
    font-weight: 500;
  }

  div {
    font-size: 15px;
    font-weight: lighter;
  }
`,JY=h.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,XY=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,eW=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(!0),c=Ot(),f=JSON.parse(localStorage.getItem("product")),g=Ht({mutationFn:AF,onSuccess:()=>{c("/seller-dashboard/success")},onError:v=>{console.log(v.message),alert(v.message)}});return y(aW,{children:[s(it,{}),y(oW,{onSubmit:v=>{v.preventDefault();const b=f._id;g.mutate({id:b,tag_No:e,quantity:n,startDate:i,endDate:a,active:u})},children:[s(tW,{children:"Product Variation"}),y(iW,{children:[y(Du,{children:[s(Lu,{children:"TAG No.*"}),y(Mu,{children:[s("input",{placeholder:"C1000",value:e,onChange:v=>t(v.target.value)}),s("span",{children:"kindly a unique number"})]})]}),y(Du,{children:[s(Lu,{children:"Qty*"}),s(Mu,{children:s("input",{placeholder:"2",type:"number",value:n,onChange:v=>r(v.target.value)})})]}),y(Du,{children:[s(Lu,{children:"start date*"}),s(Mu,{children:s("input",{placeholder:"11/01/23",type:"date",value:i,onChange:v=>o(v.target.value)})})]}),y(Du,{children:[s(Lu,{children:"End date*"}),s(Mu,{children:s("input",{placeholder:"26/09/23",type:"date",value:a,onChange:v=>l(v.target.value)})})]})]}),s(rW,{children:s(nW,{type:"submit",children:"Upload "})})]})]})},tW=h.div`
  padding: 7px 15px;
  font-size: 12px;
  font-weight: 500;
`,nW=h.button`
  padding: 13px 16px;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: #d6649d;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 3px;
  flex: 0.47;
`,rW=h.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 15px;
`,Du=h.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
`,Mu=h.div`
  display: flex;
  flex-direction: column;
  /* margin: 0 18px; */
  width: 500px;
  span {
    font-size: 12px;
    font-weight: 500;
  }

  input {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 30px;
    margin-bottom: 5px;
  }
`,Lu=h.div`
  font-size: 15px;
  font-weight: 500;
`,iW=h.div`
  width: 100%;
`,oW=h.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,aW=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,sW=()=>s(lW,{children:y(uW,{children:[s(dW,{children:s(kl,{fontSize:"50px",color:"green"})}),y(fW,{children:["You have successfully",s("br",{})," uploaded an item, your ",s("br",{})," product will be approved soon."]}),s(cW,{to:"/seller-dashboard",children:s("button",{children:"Dashboard"})})]})}),lW=h.div`
  width: 100%;
  height: 42vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`,uW=h.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  margin-bottom: 50px;
`,dW=h.div``,cW=h(mr)`
  width: 40%;
  margin-top: 15px;
  button {
    flex: 1;
    background-color: #d975c0;
    color: white;
    font-size: 13px;
    padding: 10px 0;
    width: 100%;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,fW=h.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,hW=()=>{const e=JSON.parse(localStorage.getItem("user"));Ft();const t=e._id,{data:n}=et({queryKey:["orders"],queryFn:Tr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="delivered"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),f=({selected:p})=>{a(p)},[g,$]=C.useState(""),v=["order_No","delivery_status"],w=(p=>{const x=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?x!=null&&x.length?x:null:p})(c);var m=Intl.NumberFormat();return y(gW,{children:[s(it,{}),s(mW,{children:s(yW,{children:"Delivered"})}),s(pW,{children:y(xW,{children:[y(vW,{children:[s(To,{children:s(Io,{children:"Order Number "})}),s(To,{children:s(Io,{children:"Pending Days"})}),s(To,{children:s(Io,{children:"Order Date"})}),s(To,{children:s(Io,{children:"Price"})}),s(To,{children:s(Io,{children:"Payment Method"})}),s(To,{children:s(Io,{children:"Status "})})]}),w==null?void 0:w.map((p,x)=>s(Fr,{index:x,delivery_status:p.delivery_status,order_No:p.order_No,created:X(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:m.format(p.price)},x))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:f,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};h.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;const pW=h.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,gW=h.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,mW=h.div`
width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,yW=h.div`
  border-bottom: 2px solid blue;
`,Io=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,To=h.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,vW=h.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,xW=h.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,$W=()=>{const e=JSON.parse(localStorage.getItem("user"));Ft();const t=e._id,{data:n}=et({queryKey:["orders"],queryFn:Tr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="cancelled"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),f=({selected:p})=>{a(p)},[g,$]=C.useState(""),v=["order_No","delivery_status"],w=(p=>{const x=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?x!=null&&x.length?x:null:p})(c);var m=Intl.NumberFormat();return y(wW,{children:[s(it,{}),s(SW,{children:s(CW,{children:"Cancelled"})}),s(bW,{children:y(OW,{children:[y(PW,{children:[s(Ro,{children:s(Ao,{children:"Order Number "})}),s(Ro,{children:s(Ao,{children:"Pending Days"})}),s(Ro,{children:s(Ao,{children:"Order Date"})}),s(Ro,{children:s(Ao,{children:"Price"})}),s(Ro,{children:s(Ao,{children:"Payment Method"})}),s(Ro,{children:s(Ao,{children:"Status "})})]}),w==null?void 0:w.map((p,x)=>s(Fr,{index:x,delivery_status:p.delivery_status,order_No:p.order_No,created:X(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:m.format(p.price)},x))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:f,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};h.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;const bW=h.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,wW=h.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,SW=h.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,CW=h.div`
  border-bottom: 2px solid blue;
`,Ao=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Ro=h.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,PW=h.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,OW=h.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,_W=()=>{const e=JSON.parse(localStorage.getItem("user"));Ft();const t=e._id,{data:n}=et({queryKey:["orders"],queryFn:Tr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="failed"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),f=({selected:p})=>{a(p)},[g,$]=C.useState(""),v=["order_No","delivery_status"],w=(p=>{const x=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?x!=null&&x.length?x:null:p})(c);var m=Intl.NumberFormat();return y(NW,{children:[s(it,{}),s(EW,{children:s(IW,{children:"Failed"})}),s(kW,{children:y(AW,{children:[y(TW,{children:[s(Do,{children:s(Fo,{children:"Order Number "})}),s(Do,{children:s(Fo,{children:"Pending Days"})}),s(Do,{children:s(Fo,{children:"Order Date"})}),s(Do,{children:s(Fo,{children:"Price"})}),s(Do,{children:s(Fo,{children:"Payment Method"})}),s(Do,{children:s(Fo,{children:"Status "})})]}),w==null?void 0:w.map((p,x)=>s(Fr,{index:x,delivery_status:p.delivery_status,order_No:p.order_No,created:X(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:m.format(p.price)},x))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:f,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};h.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;const kW=h.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,NW=h.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,EW=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,IW=h.div`
  border-bottom: 2px solid blue;
`,Fo=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Do=h.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,TW=h.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,AW=h.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,RW=()=>{const e=JSON.parse(localStorage.getItem("user"));Ft();const t=e._id,{data:n}=et({queryKey:["orders"],queryFn:Tr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="returned"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),f=({selected:p})=>{a(p)},[g,$]=C.useState(""),v=["order_No","delivery_status"],w=(p=>{const x=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?x!=null&&x.length?x:null:p})(c);var m=Intl.NumberFormat();return y(DW,{children:[s(it,{}),s(MW,{children:s(LW,{children:"Returned"})}),s(FW,{children:y(zW,{children:[y(jW,{children:[s(Lo,{children:s(Mo,{children:"Order Number "})}),s(Lo,{children:s(Mo,{children:"Pending Days"})}),s(Lo,{children:s(Mo,{children:"Order Date"})}),s(Lo,{children:s(Mo,{children:"Price"})}),s(Lo,{children:s(Mo,{children:"Payment Method"})}),s(Lo,{children:s(Mo,{children:"Status "})})]}),w==null?void 0:w.map((p,x)=>s(Fr,{index:x,delivery_status:p.delivery_status,order_No:p.order_No,created:X(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:m.format(p.price)},x))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:f,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};h.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;const FW=h.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,DW=h.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,MW=h.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,LW=h.div`
  border-bottom: 2px solid blue;
`,Mo=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Lo=h.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,jW=h.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,zW=h.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,UW=()=>{const[e,t]=C.useState(),[n,r]=C.useState(),[i,o]=C.useState(),[a,l]=C.useState(""),[u,d]=C.useState(""),[c,f]=C.useState(""),[g,$]=C.useState(""),[v,b]=C.useState(""),[w,m]=C.useState(""),[p,x]=C.useState(""),[S,P]=C.useState(""),[_,T]=C.useState(),[R,Y]=C.useState(!1),[z,ie]=C.useState("clothing"),M=Ot(),L=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);t(U),l(E)},J=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);r(U),d(E)},F=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);o(U),f(E)},ee=Ht({mutationFn:EF,onSuccess:()=>{M("/seller-dashboard/variation")},onError:N=>{console.log(N.message)}}),te=JSON.parse(localStorage.getItem("user"));return console.log(g.length),y(GW,{children:[s(it,{}),y(qW,{onSubmit:N=>{N.preventDefault();const E=te._id;(g.length==0||w.length==0||p.length==0||v.length==0||S.length==0||!_||a.length==0||u.length==0)&&(Y(!0),alert("All inputs most be filed "));const U=new FormData;U.append("name",g),U.append("type",w),U.append("gender",p),U.append("brand",v),U.append("description",S),U.append("price",_),U.append("category",z),a&&U.append("avatar",a),u&&U.append("avatar",u),c&&U.append("avatar",c),ee.mutate({id:E,formData:U})},children:[y(VW,{children:[s("span",{children:"Upload Product Image *"}),y(WW,{children:[y(U0,{style:R?{border:"1px solid red"}:null,children:[a?null:s(j0,{fontSize:"25px"}),s(L0,{type:"file",onChange:L}),a?s(z0,{src:e}):null]}),y(U0,{style:R?{border:"1px solid red"}:null,children:[u?null:s(j0,{fontSize:"25px"}),s(L0,{type:"file",onChange:J}),u?s(z0,{src:n}):null]}),y(U0,{children:[c?null:s(j0,{fontSize:"25px"}),s(L0,{type:"file",onChange:F}),c?s(z0,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),y(YW,{children:[y(jo,{children:[s(Uo,{children:"Name*"}),y(zo,{children:[s("input",{placeholder:"name",value:g,onChange:N=>$(N.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),y(jo,{children:[s(Uo,{children:"Brand*"}),y(zo,{children:[s("input",{placeholder:"brand",value:v,onChange:N=>b(N.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),y(jo,{children:[s(Uo,{children:"Type*"}),y(zo,{children:[s("input",{placeholder:"type",value:w,onChange:N=>m(N.target.value)}),s("span",{children:"kindly specify type of product"})]})]}),y(jo,{children:[s(Uo,{children:"Gender*"}),y(zo,{children:[y("select",{placeholder:"Select condition",value:p,onChange:N=>x(N.target.value),children:[s("option",{children:"Select Gender"}),s("option",{children:"Male"}),s("option",{children:"Female"})]}),s("span",{children:"kindly specify gender of product"})]})]}),y(jo,{children:[s(Uo,{children:"Price*"}),y(zo,{children:[s("input",{placeholder:"Price",value:_,onChange:N=>T(N.target.value)}),s("span",{children:"kindly specify price of product"})]})]}),y(jo,{children:[s(Uo,{children:"Description*"}),y(zo,{children:[s("textarea",{placeholder:"description",value:S,onChange:N=>P(N.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s(HW,{children:s(BW,{type:"submit",children:"Enter Product Variation"})})]})]})},L0=h.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,j0=h(kf)`
  font-size: 25px;
  position: absolute;
`,z0=h.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,BW=h.button`
  padding: 13px 16px;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: #d6649d;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 3px;
  flex: 0.47;
`,HW=h.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,jo=h.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
`,zo=h.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  span {
    font-size: 12px;
    font-weight: 500;
  }

  input {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 30px;
    margin-bottom: 5px;
  }
  select {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 40px;
    margin-bottom: 5px;
  }

  textarea{
    height: 300px;
    resize: none;
    border-radius: 5px;
    padding: 10px;
  }
`,Uo=h.div`
  font-size: 15px;
  font-weight: 500;
`,YW=h.div`
  width: 100%;
`,WW=h.div`
  display: flex;
  padding: 10px 0;
`,U0=h.label`
  width: 200px;
    height: 200px;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,VW=h.div`
  width: 97%;
  border-top: 1.7px solid grey;
  padding: 10px 0;

  span {
    font-size: 15px;
    font-weight: 500;
  }

  div {
    font-size: 15px;
    font-weight: lighter;
  }
`,qW=h.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,GW=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,QW=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(""),[c,f]=C.useState(""),[g,$]=C.useState(""),[v,b]=C.useState(""),[w,m]=C.useState(""),[p,x]=C.useState(""),[S,P]=C.useState(""),[_,T]=C.useState(),[R,Y]=C.useState("electronics"),[z,ie]=C.useState(!1),M=Ot(),L=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);t(U),l(E)},J=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);r(U),d(E)},F=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);o(U),f(E)},ee=Ht({mutationFn:IF,onSuccess:()=>{M("/seller-dashboard/variation")},onError:N=>{console.log(N.message)}}),te=JSON.parse(localStorage.getItem("user"));return y(nV,{children:[s(it,{}),y(tV,{onSubmit:N=>{N.preventDefault();const E=te._id;(g.length==0||type.length==0||gender.length==0||v.length==0||S.length==0||!_||a.length==0||u.length==0)&&(ie(!0),alert("All inputs most be filed "));const U=new FormData;U.append("name",g),U.append("model",w),U.append("condition",p),U.append("brand",v),U.append("description",S),U.append("price",_),U.append("category",R),a&&U.append("avatar",a),u&&U.append("avatar",u),c&&U.append("avatar",c),ee.mutate({id:E,formData:U})},children:[y(eV,{children:[s("span",{children:"Upload Product Image *"}),y(XW,{children:[y(W0,{style:z?{border:"1px solid red"}:null,children:[a?null:s(H0,{fontSize:"25px"}),s(B0,{type:"file",onChange:L}),a?s(Y0,{src:e}):null]}),y(W0,{style:z?{border:"1px solid red"}:null,children:[u?null:s(H0,{fontSize:"25px"}),s(B0,{type:"file",onChange:J}),u?s(Y0,{src:n}):null]}),y(W0,{children:[c?null:s(H0,{fontSize:"25px"}),s(B0,{type:"file",onChange:F}),c?s(Y0,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),y(JW,{children:[y(Bo,{children:[s(Yo,{children:"Name*"}),y(Ho,{children:[s("input",{placeholder:"name",value:g,onChange:N=>$(N.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),y(Bo,{children:[s(Yo,{children:"Brand*"}),y(Ho,{children:[s("input",{placeholder:"brand",value:v,onChange:N=>b(N.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),y(Bo,{children:[s(Yo,{children:"Model*"}),y(Ho,{children:[s("input",{placeholder:"type",value:w,onChange:N=>m(N.target.value)}),s("span",{children:"kindly specify type of product"})]})]}),y(Bo,{children:[s(Yo,{children:"Condition*"}),y(Ho,{children:[y("select",{placeholder:"Select condition",value:p,onChange:N=>x(N.target.value),children:[s("option",{children:"Select Condition"}),s("option",{children:"New"}),s("option",{children:"Used"})]}),s("span",{children:"kindly specify condition of product"})]})]}),y(Bo,{children:[s(Yo,{children:"Price*"}),y(Ho,{children:[s("input",{placeholder:"Price",value:_,onChange:N=>T(N.target.value)}),s("span",{children:"kindly specify price of product"})]})]}),y(Bo,{children:[s(Yo,{children:"Description*"}),y(Ho,{children:[s("textarea",{placeholder:"description",value:S,onChange:N=>P(N.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s(ZW,{children:s(KW,{type:"submit",children:"Enter Product Variation"})})]})]})},B0=h.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,H0=h(kf)`
  font-size: 25px;
  position: absolute;
`,Y0=h.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,KW=h.button`
  padding: 13px 16px;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: #d6649d;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 3px;
  flex: 0.47;
`,ZW=h.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,Bo=h.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
`,Ho=h.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  span {
    font-size: 12px;
    font-weight: 500;
  }

  input {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 30px;
    margin-bottom: 5px;
  }
  select {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 40px;
    margin-bottom: 5px;
  }

  textarea{
    height: 300px;
    resize: none;
    border-radius: 5px;
    padding: 10px;
  }
`,Yo=h.div`
  font-size: 15px;
  font-weight: 500;
`,JW=h.div`
  width: 100%;
`,XW=h.div`
  display: flex;
  padding: 10px 0;
`,W0=h.label`
  width: 200px;
    height: 200px;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,eV=h.div`
  width: 97%;
  border-top: 1.7px solid grey;
  padding: 10px 0;

  span {
    font-size: 15px;
    font-weight: 500;
  }

  div {
    font-size: 15px;
    font-weight: lighter;
  }
`,tV=h.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,nV=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,rV=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(""),[c,f]=C.useState(""),[g,$]=C.useState(""),[v,b]=C.useState(""),[w,m]=C.useState(""),[p,x]=C.useState(),[S,P]=C.useState("food"),[_,T]=C.useState(!1),R=Ot(),Y=F=>{const ee=F.target.files[0],te=URL.createObjectURL(ee);t(te),l(ee)},z=F=>{const ee=F.target.files[0],te=URL.createObjectURL(ee);r(te),d(ee)},ie=F=>{const ee=F.target.files[0],te=URL.createObjectURL(ee);o(te),f(ee)},M=Ht({mutationFn:TF,onSuccess:()=>{R("/seller-dashboard/variation")},onError:F=>{console.log(F.message)}}),L=JSON.parse(localStorage.getItem("user"));return y(dV,{children:[s(it,{}),y(uV,{onSubmit:F=>{F.preventDefault();const ee=L._id;(g.length==0||type.length==0||gender.length==0||v.length==0||w.length==0||!p||a.length==0||u.length==0)&&(T(!0),alert("All inputs most be filed "));const te=new FormData;te.append("name",g),te.append("brand",v),te.append("description",w),te.append("price",p),te.append("category",S),a&&te.append("avatar",a),u&&te.append("avatar",u),c&&te.append("avatar",c),M.mutate({id:ee,formData:te})},children:[y(lV,{children:[s("span",{children:"Upload Product Image *"}),y(sV,{children:[y(Q0,{style:_?{border:"1px solid red"}:null,children:[a?null:s(q0,{fontSize:"25px"}),s(V0,{type:"file",onChange:Y}),a?s(G0,{src:e}):null]}),y(Q0,{style:_?{border:"1px solid red"}:null,children:[u?null:s(q0,{fontSize:"25px"}),s(V0,{type:"file",onChange:z}),u?s(G0,{src:n}):null]}),y(Q0,{children:[c?null:s(q0,{fontSize:"25px"}),s(V0,{type:"file",onChange:ie}),c?s(G0,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),y(aV,{children:[y(ju,{children:[s(Uu,{children:"Name*"}),y(zu,{children:[s("input",{placeholder:"name",value:g,onChange:F=>$(F.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),y(ju,{children:[s(Uu,{children:"Brand*"}),y(zu,{children:[s("input",{placeholder:"brand",value:v,onChange:F=>b(F.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),y(ju,{children:[s(Uu,{children:"Price*"}),y(zu,{children:[s("input",{placeholder:"Price",value:p,onChange:F=>x(F.target.value)}),s("span",{children:"kindly specify price of product"})]})]}),y(ju,{children:[s(Uu,{children:"Description*"}),y(zu,{children:[s("textarea",{placeholder:"description",value:w,onChange:F=>m(F.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s(oV,{children:s(iV,{type:"submit",children:"Enter Product Variation"})})]})]})},V0=h.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,q0=h(kf)`
  font-size: 25px;
  position: absolute;
`,G0=h.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,iV=h.button`
  padding: 13px 16px;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: #d6649d;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 3px;
  flex: 0.47;
`,oV=h.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,ju=h.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
`,zu=h.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  span {
    font-size: 12px;
    font-weight: 500;
  }

  input {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 30px;
    margin-bottom: 5px;
  }
  select {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 40px;
    margin-bottom: 5px;
  }

  textarea{
    height: 300px;
    resize: none;
    border-radius: 5px;
    padding: 10px;
  }
`,Uu=h.div`
  font-size: 15px;
  font-weight: 500;
`,aV=h.div`
  width: 100%;
`,sV=h.div`
  display: flex;
  padding: 10px 0;
`,Q0=h.label`
  width: 200px;
    height: 200px;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,lV=h.div`
  width: 97%;
  border-top: 1.7px solid grey;
  padding: 10px 0;

  span {
    font-size: 15px;
    font-weight: 500;
  }

  div {
    font-size: 15px;
    font-weight: lighter;
  }
`,uV=h.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,dV=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,cV=()=>{const e=JSON.parse(localStorage.getItem("user"));Ft();const t=e._id,{data:n}=et({queryKey:["orders"],queryFn:Tr}),r=n==null?void 0:n.filter(m=>{var x;return((x=m==null?void 0:m.products)==null?void 0:x.filter(S=>S.sellerID===t)).length>0}),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),c=({selected:m})=>{o(m)},[f,g]=C.useState(""),$=["order_No","delivery_status"],v=m=>{const p=m==null?void 0:m.filter(x=>$.some(S=>{const P=x[S];return typeof P=="string"&&P.toLowerCase().includes(f)}));return f?p!=null&&p.length?p:null:m},b=v(d);var w=Intl.NumberFormat();return y(pV,{children:[s(it,{}),y(hV,{children:[y(gV,{children:[s(mV,{children:"Transactions"}),y(fV,{children:[s("input",{placeholder:"Search by name or brand",value:f,onChange:m=>g(m.target.value)}),s("button",{onClick:v,children:s(Ya,{})})]})]}),y(vV,{children:[y(yV,{children:[s(Li,{children:s(Mi,{children:"Date"})}),s(Li,{children:s(Mi,{children:"Tag"})}),s(Li,{children:s(Mi,{children:"Product"})}),s(Li,{children:s(Mi,{children:"Price"})}),s(Li,{children:s(Mi,{children:"QTY"})}),s(Li,{children:s(Mi,{children:"Amount "})}),s(Li,{children:s(Mi,{children:"Action "})})]}),b==null?void 0:b.map((m,p)=>s(Fr,{index:p,delivery_status:m.delivery_status,order_No:m.order_No,created:X(m.createdAt).format("D MMM YYYY"),payment_method:m.payment_method,pending_days:m.pending_days,price:w.format(m.price)},p))]})]}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:c,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})},fV=h.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`,hV=h.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,pV=h.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,gV=h.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,mV=h.div`
  border-bottom: 2px solid blue;
`,Mi=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Li=h.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,yV=h.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,vV=h.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,xV=()=>am([{path:"/",children:[{index:!0,element:s(Qe,{children:s(yj,{})})},{path:"all-product",element:s(Qe,{children:s(EH,{})})},{path:"live-product",element:s(Qe,{children:s(LH,{})})},{path:"sold-product",element:s(Qe,{children:s(VH,{})})},{path:"rejected-product",element:s(Qe,{children:s(eY,{})})},{path:"all-orders",element:s(Qe,{children:s(cY,{})})},{path:"pending-orders",element:s(Qe,{children:s(vY,{})})},{path:"ready-to-ship",element:s(Qe,{children:s(PY,{})})},{path:"transactions",element:s(Qe,{children:s(cV,{})})},{path:"shipped",element:s(Qe,{children:s(TY,{})})},{path:"uploads",element:s(Qe,{children:s(HY,{})})},{path:"uploading",element:s(Qe,{children:s(VY,{})})},{path:"upload-cloths",element:s(Qe,{children:s(UW,{})})},{path:"upload-electronics",element:s(Qe,{children:s(QW,{})})},{path:"upload-foods",element:s(Qe,{children:s(rV,{})})},{path:"variation",element:s(Qe,{children:s(eW,{})})},{path:"success",element:s(Qe,{children:s(sW,{})})},{path:"delivered-orders",element:s(Qe,{children:s(hW,{})})},{path:"cancelled-orders",element:s(Qe,{children:s($W,{})})},{path:"failed-orders",element:s(Qe,{children:s(_W,{})})},{path:"returned-orders",element:s(Qe,{children:s(RW,{})})}]}]),$V=()=>{C.useState(!1),C.useState(!1);const[e,t]=C.useState(!1);return JSON.parse(localStorage.getItem("user")),C.useRef(),console.log(e),s("div",{children:s(bV,{children:y(wV,{children:[y(SV,{children:[s("img",{src:"/logo 1.png"}),s("div",{children:"Cross Africa"})]}),s(CV,{to:"/seller-dashboard",children:"Dashboard"})]})})})},bV=h.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #383333; */
  border-bottom: 1px solid lightgray;
`,wV=h.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,SV=h.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 30px;
  flex: 0.2 0.3 auto;
  /* background: gold; */
  /* margin-bottom: 10px; */

  img {
    height: 60px;
    width: 60px;
  }

  div {
    font-weight: 700;
    font-size: 20px;
  }
`,CV=h(_e)`
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  color: black;
`,PV=()=>y("div",{children:[s($V,{}),s(xV,{})]}),OV=()=>s("div",{children:y($C,{children:[s(td,{path:"/*",element:s(ej,{})}),s(td,{path:"/seller-page",element:s(YC,{})}),s(td,{path:"/seller-dashboard/*",element:s(Qe,{children:s(PV,{})})})]})}),_V="modulepreload",kV=function(e){return"/"+e},Fx={},NV=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=kV(o),o in Fx)return;Fx[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const f=i[c];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":_V,a||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),a)return new Promise((c,f)=>{d.addEventListener("load",c),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},EV=e=>{e&&e instanceof Function&&NV(()=>import("./web-vitals-60d3425a.js"),[]).then(({getCLS:t,getFID:n,getFCP:r,getLCP:i,getTTFB:o})=>{t(e),n(e),r(e),i(e),o(e)})},IV=function(){return null};var cy="persist:",fy="persist/FLUSH",Bf="persist/REHYDRATE",hy="persist/PAUSE",py="persist/PERSIST",gy="persist/PURGE",my="persist/REGISTER",TV=-1;function pd(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pd=function(n){return typeof n}:pd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},pd(e)}function Dx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function AV(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dx(n,!0).forEach(function(r){RV(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dx(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function RV(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function FV(e,t,n,r){r.debug;var i=AV({},n);return e&&pd(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function DV(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:cy).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(P){return P}:typeof e.serialize=="function"?l=e.serialize:l=MV;var u=e.writeFailHandler||null,d={},c={},f=[],g=null,$=null,v=function(P){Object.keys(P).forEach(function(_){m(_)&&d[_]!==P[_]&&f.indexOf(_)===-1&&f.push(_)}),Object.keys(d).forEach(function(_){P[_]===void 0&&m(_)&&f.indexOf(_)===-1&&d[_]!==void 0&&f.push(_)}),g===null&&(g=setInterval(b,i)),d=P};function b(){if(f.length===0){g&&clearInterval(g),g=null;return}var S=f.shift(),P=r.reduce(function(_,T){return T.in(_,S,d)},d[S]);if(P!==void 0)try{c[S]=l(P)}catch(_){console.error("redux-persist/createPersistoid: error serializing state",_)}else delete c[S];f.length===0&&w()}function w(){Object.keys(c).forEach(function(S){d[S]===void 0&&delete c[S]}),$=a.setItem(o,l(c)).catch(p)}function m(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function p(S){u&&u(S)}var x=function(){for(;f.length!==0;)b();return $||Promise.resolve()};return{update:v,flush:x}}function MV(e){return JSON.stringify(e)}function LV(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:cy).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=jV,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(u){a[u]=t.reduceRight(function(d,c){return c.out(d,u,l)},i(l[u]))}),a}catch(u){throw u}else return})}function jV(e){return JSON.parse(e)}function zV(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:cy).concat(e.key);return t.removeItem(n,UV)}function UV(e){}function Mx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ar(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mx(n,!0).forEach(function(r){BV(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mx(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function BV(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function HV(e,t){if(e==null)return{};var n=YV(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function YV(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var WV=5e3;function VV(e,t){var n=e.version!==void 0?e.version:TV;e.debug;var r=e.stateReconciler===void 0?FV:e.stateReconciler,i=e.getStoredState||LV,o=e.timeout!==void 0?e.timeout:WV,a=null,l=!1,u=!0,d=function(f){return f._persist.rehydrated&&a&&!u&&a.update(f),f};return function(c,f){var g=c||{},$=g._persist,v=HV(g,["_persist"]),b=v;if(f.type===py){var w=!1,m=function(R,Y){w||(f.rehydrate(e.key,R,Y),w=!0)};if(o&&setTimeout(function(){!w&&m(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),u=!1,a||(a=DV(e)),$)return ar({},t(b,f),{_persist:$});if(typeof f.rehydrate!="function"||typeof f.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return f.register(e.key),i(e).then(function(T){var R=e.migrate||function(Y,z){return Promise.resolve(Y)};R(T,n).then(function(Y){m(Y)},function(Y){m(void 0,Y)})},function(T){m(void 0,T)}),ar({},t(b,f),{_persist:{version:n,rehydrated:!1}})}else{if(f.type===gy)return l=!0,f.result(zV(e)),ar({},t(b,f),{_persist:$});if(f.type===fy)return f.result(a&&a.flush()),ar({},t(b,f),{_persist:$});if(f.type===hy)u=!0;else if(f.type===Bf){if(l)return ar({},b,{_persist:ar({},$,{rehydrated:!0})});if(f.key===e.key){var p=t(b,f),x=f.payload,S=r!==!1&&x!==void 0?r(x,c,p,e):p,P=ar({},S,{_persist:ar({},$,{rehydrated:!0})});return d(P)}}}if(!$)return t(c,f);var _=t(b,f);return _===b?c:d(ar({},_,{_persist:$}))}}function Lx(e){return QV(e)||GV(e)||qV()}function qV(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function GV(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function QV(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function jx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function X1(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jx(n,!0).forEach(function(r){KV(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jx(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function KV(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v8={registry:[],bootstrapped:!1},ZV=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:v8,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case my:return X1({},t,{registry:[].concat(Lx(t.registry),[n.key])});case Bf:var r=t.registry.indexOf(n.key),i=Lx(t.registry);return i.splice(r,1),X1({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function JV(e,t,n){var r=n||!1,i=Um(ZV,v8,t&&t.enhancer?t.enhancer:void 0),o=function(d){i.dispatch({type:my,key:d})},a=function(d,c,f){var g={type:Bf,payload:c,err:f,key:d};e.dispatch(g),i.dispatch(g),r&&l.getState().bootstrapped&&(r(),r=!1)},l=X1({},i,{purge:function(){var d=[];return e.dispatch({type:gy,result:function(f){d.push(f)}}),Promise.all(d)},flush:function(){var d=[];return e.dispatch({type:fy,result:function(f){d.push(f)}}),Promise.all(d)},pause:function(){e.dispatch({type:hy})},persist:function(){e.dispatch({type:py,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var yy={},vy={};vy.__esModule=!0;vy.default=tq;function gd(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?gd=function(n){return typeof n}:gd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},gd(e)}function K0(){}var XV={getItem:K0,setItem:K0,removeItem:K0};function eq(e){if((typeof self>"u"?"undefined":gd(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function tq(e){var t="".concat(e,"Storage");return eq(t)?self[t]:XV}yy.__esModule=!0;yy.default=iq;var nq=rq(vy);function rq(e){return e&&e.__esModule?e:{default:e}}function iq(e){var t=(0,nq.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var x8=void 0,oq=aq(yy);function aq(e){return e&&e.__esModule?e:{default:e}}var sq=(0,oq.default)("local");x8=sq;const lq={key:"root",version:1,storage:x8},uq=VV(lq,qR),$8=AR({reducer:{reducers:uq},middleware:e=>e({serializableCheck:{ignoredActions:[fy,Bf,hy,py,gy,my]}})});function md(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?md=function(n){return typeof n}:md=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},md(e)}function dq(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function zx(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function cq(e,t,n){return t&&zx(e.prototype,t),n&&zx(e,n),e}function fq(e,t){return t&&(md(t)==="object"||typeof t=="function")?t:yd(e)}function eg(e){return eg=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},eg(e)}function yd(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function hq(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&tg(e,t)}function tg(e,t){return tg=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},tg(e,t)}function vd(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b8=function(e){hq(t,e);function t(){var n,r;dq(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=fq(this,(n=eg(t)).call.apply(n,[this].concat(o))),vd(yd(r),"state",{bootstrapped:!1}),vd(yd(r),"_unsubscribe",void 0),vd(yd(r),"handlePersistorState",function(){var l=r.props.persistor,u=l.getState(),d=u.bootstrapped;d&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return cq(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(C.PureComponent);vd(b8,"defaultProps",{children:null,loading:null});const pq=new wT;let gq=JV($8);const mq=J0.createRoot(document.getElementById("root"));mq.render(s(ne.StrictMode,{children:s(PC,{children:s(JA,{store:$8,children:s(b8,{persistor:gq,children:y(DT,{client:pq,children:[s(OV,{}),s(IV,{})]})})})})}));EV()});export default yq();
