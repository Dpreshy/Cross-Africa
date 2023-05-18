var J6=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var JG=J6((rQ,Cd)=>{function X6(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var e8=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function p4(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hs={},t8={get exports(){return Hs},set exports(e){Hs=e}},Ic={},C={},n8={get exports(){return C},set exports(e){C=e}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sl=Symbol.for("react.element"),r8=Symbol.for("react.portal"),i8=Symbol.for("react.fragment"),o8=Symbol.for("react.strict_mode"),a8=Symbol.for("react.profiler"),s8=Symbol.for("react.provider"),l8=Symbol.for("react.context"),u8=Symbol.for("react.forward_ref"),d8=Symbol.for("react.suspense"),c8=Symbol.for("react.memo"),f8=Symbol.for("react.lazy"),jy=Symbol.iterator;function h8(e){return e===null||typeof e!="object"?null:(e=jy&&e[jy]||e["@@iterator"],typeof e=="function"?e:null)}var g4={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m4=Object.assign,y4={};function za(e,t,n){this.props=e,this.context=t,this.refs=y4,this.updater=n||g4}za.prototype.isReactComponent={};za.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};za.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function v4(){}v4.prototype=za.prototype;function vg(e,t,n){this.props=e,this.context=t,this.refs=y4,this.updater=n||g4}var xg=vg.prototype=new v4;xg.constructor=vg;m4(xg,za.prototype);xg.isPureReactComponent=!0;var Ly=Array.isArray,x4=Object.prototype.hasOwnProperty,bg={current:null},b4={key:!0,ref:!0,__self:!0,__source:!0};function $4(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)x4.call(t,r)&&!b4.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Sl,type:e,key:o,ref:a,props:i,_owner:bg.current}}function p8(e,t){return{$$typeof:Sl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $g(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sl}function g8(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zy=/\/+/g;function Zf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?g8(""+e.key):t.toString(36)}function Gu(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Sl:case r8:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Zf(a,0):r,Ly(i)?(n="",e!=null&&(n=e.replace(zy,"$&/")+"/"),Gu(i,t,n,"",function(d){return d})):i!=null&&($g(i)&&(i=p8(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(zy,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Ly(e))for(var l=0;l<e.length;l++){o=e[l];var u=r+Zf(o,l);a+=Gu(o,t,n,u,i)}else if(u=h8(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=r+Zf(o,l++),a+=Gu(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Jl(e,t,n){if(e==null)return e;var r=[],i=0;return Gu(e,r,"","",function(o){return t.call(n,o,i++)}),r}function m8(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ft={current:null},Qu={transition:null},y8={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:Qu,ReactCurrentOwner:bg};be.Children={map:Jl,forEach:function(e,t,n){Jl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Jl(e,function(){t++}),t},toArray:function(e){return Jl(e,function(t){return t})||[]},only:function(e){if(!$g(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};be.Component=za;be.Fragment=i8;be.Profiler=a8;be.PureComponent=vg;be.StrictMode=o8;be.Suspense=d8;be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y8;be.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=m4({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=bg.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)x4.call(t,u)&&!b4.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Sl,type:e.type,key:i,ref:o,props:r,_owner:a}};be.createContext=function(e){return e={$$typeof:l8,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:s8,_context:e},e.Consumer=e};be.createElement=$4;be.createFactory=function(e){var t=$4.bind(null,e);return t.type=e,t};be.createRef=function(){return{current:null}};be.forwardRef=function(e){return{$$typeof:u8,render:e}};be.isValidElement=$g;be.lazy=function(e){return{$$typeof:f8,_payload:{_status:-1,_result:e},_init:m8}};be.memo=function(e,t){return{$$typeof:c8,type:e,compare:t===void 0?null:t}};be.startTransition=function(e){var t=Qu.transition;Qu.transition={};try{e()}finally{Qu.transition=t}};be.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};be.useCallback=function(e,t){return Ft.current.useCallback(e,t)};be.useContext=function(e){return Ft.current.useContext(e)};be.useDebugValue=function(){};be.useDeferredValue=function(e){return Ft.current.useDeferredValue(e)};be.useEffect=function(e,t){return Ft.current.useEffect(e,t)};be.useId=function(){return Ft.current.useId()};be.useImperativeHandle=function(e,t,n){return Ft.current.useImperativeHandle(e,t,n)};be.useInsertionEffect=function(e,t){return Ft.current.useInsertionEffect(e,t)};be.useLayoutEffect=function(e,t){return Ft.current.useLayoutEffect(e,t)};be.useMemo=function(e,t){return Ft.current.useMemo(e,t)};be.useReducer=function(e,t,n){return Ft.current.useReducer(e,t,n)};be.useRef=function(e){return Ft.current.useRef(e)};be.useState=function(e){return Ft.current.useState(e)};be.useSyncExternalStore=function(e,t,n){return Ft.current.useSyncExternalStore(e,t,n)};be.useTransition=function(){return Ft.current.useTransition()};be.version="18.2.0";(function(e){e.exports=be})(n8);const ne=p4(C),pp=X6({__proto__:null,default:ne},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v8=C,x8=Symbol.for("react.element"),b8=Symbol.for("react.fragment"),$8=Object.prototype.hasOwnProperty,w8=v8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S8={key:!0,ref:!0,__self:!0,__source:!0};function w4(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)$8.call(t,r)&&!S8.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:x8,type:e,key:o,ref:a,props:i,_owner:w8.current}}Ic.Fragment=b8;Ic.jsx=w4;Ic.jsxs=w4;(function(e){e.exports=Ic})(t8);const Ws=Hs.Fragment,s=Hs.jsx,m=Hs.jsxs;var gp={},Pd={},C8={get exports(){return Pd},set exports(e){Pd=e}},Jt={},mp={},P8={get exports(){return mp},set exports(e){mp=e}},S4={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,N){var E=L.length;L.push(N);e:for(;0<E;){var U=E-1>>>1,D=L[U];if(0<i(D,N))L[U]=N,L[E]=D,E=U;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var N=L[0],E=L.pop();if(E!==N){L[0]=E;e:for(var U=0,D=L.length,H=D>>>1;U<H;){var Y=2*(U+1)-1,oe=L[Y],k=Y+1,de=L[k];if(0>i(oe,E))k<D&&0>i(de,oe)?(L[U]=de,L[k]=E,U=k):(L[U]=oe,L[Y]=E,U=Y);else if(k<D&&0>i(de,E))L[U]=de,L[k]=E,U=k;else break e}}return N}function i(L,N){var E=L.sortIndex-N.sortIndex;return E!==0?E:L.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],d=[],c=1,h=null,g=3,x=!1,v=!1,$=!1,w=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(L){for(var N=n(d);N!==null;){if(N.callback===null)r(d);else if(N.startTime<=L)r(d),N.sortIndex=N.expirationTime,t(u,N);else break;N=n(d)}}function S(L){if($=!1,b(L),!v)if(n(u)!==null)v=!0,X(P);else{var N=n(d);N!==null&&te(S,N.startTime-L)}}function P(L,N){v=!1,$&&($=!1,y(R),R=-1),x=!0;var E=g;try{for(b(N),h=n(u);h!==null&&(!(h.expirationTime>N)||L&&!ie());){var U=h.callback;if(typeof U=="function"){h.callback=null,g=h.priorityLevel;var D=U(h.expirationTime<=N);N=e.unstable_now(),typeof D=="function"?h.callback=D:h===n(u)&&r(u),b(N)}else r(u);h=n(u)}if(h!==null)var H=!0;else{var Y=n(d);Y!==null&&te(S,Y.startTime-N),H=!1}return H}finally{h=null,g=E,x=!1}}var _=!1,T=null,R=-1,W=5,z=-1;function ie(){return!(e.unstable_now()-z<W)}function M(){if(T!==null){var L=e.unstable_now();z=L;var N=!0;try{N=T(!0,L)}finally{N?j():(_=!1,T=null)}}else _=!1}var j;if(typeof p=="function")j=function(){p(M)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,F=J.port2;J.port1.onmessage=M,j=function(){F.postMessage(null)}}else j=function(){w(M,0)};function X(L){T=L,_||(_=!0,j())}function te(L,N){R=w(function(){L(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,X(P))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(L){switch(g){case 1:case 2:case 3:var N=3;break;default:N=g}var E=g;g=N;try{return L()}finally{g=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,N){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var E=g;g=L;try{return N()}finally{g=E}},e.unstable_scheduleCallback=function(L,N,E){var U=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?U+E:U):E=U,L){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=E+D,L={id:c++,callback:N,priorityLevel:L,startTime:E,expirationTime:D,sortIndex:-1},E>U?(L.sortIndex=E,t(d,L),n(u)===null&&L===n(d)&&($?(y(R),R=-1):$=!0,te(S,E-U))):(L.sortIndex=D,t(u,L),v||x||(v=!0,X(P))),L},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(L){var N=g;return function(){var E=g;g=N;try{return L.apply(this,arguments)}finally{g=E}}}})(S4);(function(e){e.exports=S4})(P8);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C4=C,Kt=mp;function G(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var P4=new Set,Ys={};function so(e,t){Pa(e,t),Pa(e+"Capture",t)}function Pa(e,t){for(Ys[e]=t,e=0;e<t.length;e++)P4.add(t[e])}var Sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yp=Object.prototype.hasOwnProperty,O8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uy={},By={};function _8(e){return yp.call(By,e)?!0:yp.call(Uy,e)?!1:O8.test(e)?By[e]=!0:(Uy[e]=!0,!1)}function k8(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function N8(e,t,n,r){if(t===null||typeof t>"u"||k8(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Dt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){bt[e]=new Dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];bt[t]=new Dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){bt[e]=new Dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){bt[e]=new Dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){bt[e]=new Dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){bt[e]=new Dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){bt[e]=new Dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){bt[e]=new Dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){bt[e]=new Dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var wg=/[\-:]([a-z])/g;function Sg(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wg,Sg);bt[t]=new Dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wg,Sg);bt[t]=new Dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wg,Sg);bt[t]=new Dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){bt[e]=new Dt(e,1,!1,e.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){bt[e]=new Dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cg(e,t,n,r){var i=bt.hasOwnProperty(t)?bt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(N8(t,n,i,r)&&(n=null),r||i===null?_8(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Er=C4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xl=Symbol.for("react.element"),Qo=Symbol.for("react.portal"),Ko=Symbol.for("react.fragment"),Pg=Symbol.for("react.strict_mode"),vp=Symbol.for("react.profiler"),O4=Symbol.for("react.provider"),_4=Symbol.for("react.context"),Og=Symbol.for("react.forward_ref"),xp=Symbol.for("react.suspense"),bp=Symbol.for("react.suspense_list"),_g=Symbol.for("react.memo"),Ur=Symbol.for("react.lazy"),k4=Symbol.for("react.offscreen"),Hy=Symbol.iterator;function es(e){return e===null||typeof e!="object"?null:(e=Hy&&e[Hy]||e["@@iterator"],typeof e=="function"?e:null)}var Qe=Object.assign,Jf;function Ps(e){if(Jf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jf=t&&t[1]||""}return`
`+Jf+e}var Xf=!1;function eh(e,t){if(!e||Xf)return"";Xf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{Xf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ps(e):""}function E8(e){switch(e.tag){case 5:return Ps(e.type);case 16:return Ps("Lazy");case 13:return Ps("Suspense");case 19:return Ps("SuspenseList");case 0:case 2:case 15:return e=eh(e.type,!1),e;case 11:return e=eh(e.type.render,!1),e;case 1:return e=eh(e.type,!0),e;default:return""}}function $p(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ko:return"Fragment";case Qo:return"Portal";case vp:return"Profiler";case Pg:return"StrictMode";case xp:return"Suspense";case bp:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _4:return(e.displayName||"Context")+".Consumer";case O4:return(e._context.displayName||"Context")+".Provider";case Og:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _g:return t=e.displayName||null,t!==null?t:$p(e.type)||"Memo";case Ur:t=e._payload,e=e._init;try{return $p(e(t))}catch{}}return null}function I8(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $p(t);case 8:return t===Pg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function N4(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function T8(e){var t=N4(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function eu(e){e._valueTracker||(e._valueTracker=T8(e))}function E4(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=N4(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Od(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wp(e,t){var n=t.checked;return Qe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wy(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pi(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function I4(e,t){t=t.checked,t!=null&&Cg(e,"checked",t,!1)}function Sp(e,t){I4(e,t);var n=pi(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Cp(e,t.type,n):t.hasOwnProperty("defaultValue")&&Cp(e,t.type,pi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yy(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Cp(e,t,n){(t!=="number"||Od(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Os=Array.isArray;function fa(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pi(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Pp(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(G(91));return Qe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vy(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(G(92));if(Os(n)){if(1<n.length)throw Error(G(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pi(n)}}function T4(e,t){var n=pi(t.value),r=pi(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qy(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function A4(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Op(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?A4(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var tu,R4=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(tu=tu||document.createElement("div"),tu.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=tu.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A8=["Webkit","ms","Moz","O"];Object.keys(Is).forEach(function(e){A8.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Is[t]=Is[e]})});function F4(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Is.hasOwnProperty(e)&&Is[e]?(""+t).trim():t+"px"}function D4(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=F4(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var R8=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _p(e,t){if(t){if(R8[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(G(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(G(61))}if(t.style!=null&&typeof t.style!="object")throw Error(G(62))}}function kp(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Np=null;function kg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ep=null,ha=null,pa=null;function Gy(e){if(e=Ol(e)){if(typeof Ep!="function")throw Error(G(280));var t=e.stateNode;t&&(t=Dc(t),Ep(e.stateNode,e.type,t))}}function M4(e){ha?pa?pa.push(e):pa=[e]:ha=e}function j4(){if(ha){var e=ha,t=pa;if(pa=ha=null,Gy(e),t)for(e=0;e<t.length;e++)Gy(t[e])}}function L4(e,t){return e(t)}function z4(){}var th=!1;function U4(e,t,n){if(th)return e(t,n);th=!0;try{return L4(e,t,n)}finally{th=!1,(ha!==null||pa!==null)&&(z4(),j4())}}function qs(e,t){var n=e.stateNode;if(n===null)return null;var r=Dc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(G(231,t,typeof n));return n}var Ip=!1;if(Sr)try{var ts={};Object.defineProperty(ts,"passive",{get:function(){Ip=!0}}),window.addEventListener("test",ts,ts),window.removeEventListener("test",ts,ts)}catch{Ip=!1}function F8(e,t,n,r,i,o,a,l,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(c){this.onError(c)}}var Ts=!1,_d=null,kd=!1,Tp=null,D8={onError:function(e){Ts=!0,_d=e}};function M8(e,t,n,r,i,o,a,l,u){Ts=!1,_d=null,F8.apply(D8,arguments)}function j8(e,t,n,r,i,o,a,l,u){if(M8.apply(this,arguments),Ts){if(Ts){var d=_d;Ts=!1,_d=null}else throw Error(G(198));kd||(kd=!0,Tp=d)}}function lo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function B4(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qy(e){if(lo(e)!==e)throw Error(G(188))}function L8(e){var t=e.alternate;if(!t){if(t=lo(e),t===null)throw Error(G(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Qy(i),e;if(o===r)return Qy(i),t;o=o.sibling}throw Error(G(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(G(189))}}if(n.alternate!==r)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?e:t}function H4(e){return e=L8(e),e!==null?W4(e):null}function W4(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=W4(e);if(t!==null)return t;e=e.sibling}return null}var Y4=Kt.unstable_scheduleCallback,Ky=Kt.unstable_cancelCallback,z8=Kt.unstable_shouldYield,U8=Kt.unstable_requestPaint,tt=Kt.unstable_now,B8=Kt.unstable_getCurrentPriorityLevel,Ng=Kt.unstable_ImmediatePriority,V4=Kt.unstable_UserBlockingPriority,Nd=Kt.unstable_NormalPriority,H8=Kt.unstable_LowPriority,q4=Kt.unstable_IdlePriority,Tc=null,Zn=null;function W8(e){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(Tc,e,void 0,(e.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:q8,Y8=Math.log,V8=Math.LN2;function q8(e){return e>>>=0,e===0?32:31-(Y8(e)/V8|0)|0}var nu=64,ru=4194304;function _s(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ed(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=_s(l):(o&=a,o!==0&&(r=_s(o)))}else a=n&~i,a!==0?r=_s(a):o!==0&&(r=_s(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-An(t),i=1<<n,r|=e[n],t&=~i;return r}function G8(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q8(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-An(o),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=G8(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function Ap(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function G4(){var e=nu;return nu<<=1,!(nu&4194240)&&(nu=64),e}function nh(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-An(t),e[t]=n}function K8(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-An(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Eg(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-An(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ee=0;function Q4(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var K4,Ig,Z4,J4,X4,Rp=!1,iu=[],Xr=null,ei=null,ti=null,Gs=new Map,Qs=new Map,Wr=[],Z8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zy(e,t){switch(e){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":ei=null;break;case"mouseover":case"mouseout":ti=null;break;case"pointerover":case"pointerout":Gs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(t.pointerId)}}function ns(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ol(t),t!==null&&Ig(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function J8(e,t,n,r,i){switch(t){case"focusin":return Xr=ns(Xr,e,t,n,r,i),!0;case"dragenter":return ei=ns(ei,e,t,n,r,i),!0;case"mouseover":return ti=ns(ti,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Gs.set(o,ns(Gs.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Qs.set(o,ns(Qs.get(o)||null,e,t,n,r,i)),!0}return!1}function eb(e){var t=Yi(e.target);if(t!==null){var n=lo(t);if(n!==null){if(t=n.tag,t===13){if(t=B4(n),t!==null){e.blockedOn=t,X4(e.priority,function(){Z4(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ku(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fp(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Np=r,n.target.dispatchEvent(r),Np=null}else return t=Ol(n),t!==null&&Ig(t),e.blockedOn=n,!1;t.shift()}return!0}function Jy(e,t,n){Ku(e)&&n.delete(t)}function X8(){Rp=!1,Xr!==null&&Ku(Xr)&&(Xr=null),ei!==null&&Ku(ei)&&(ei=null),ti!==null&&Ku(ti)&&(ti=null),Gs.forEach(Jy),Qs.forEach(Jy)}function rs(e,t){e.blockedOn===t&&(e.blockedOn=null,Rp||(Rp=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,X8)))}function Ks(e){function t(i){return rs(i,e)}if(0<iu.length){rs(iu[0],e);for(var n=1;n<iu.length;n++){var r=iu[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xr!==null&&rs(Xr,e),ei!==null&&rs(ei,e),ti!==null&&rs(ti,e),Gs.forEach(t),Qs.forEach(t),n=0;n<Wr.length;n++)r=Wr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wr.length&&(n=Wr[0],n.blockedOn===null);)eb(n),n.blockedOn===null&&Wr.shift()}var ga=Er.ReactCurrentBatchConfig,Id=!0;function e9(e,t,n,r){var i=Ee,o=ga.transition;ga.transition=null;try{Ee=1,Tg(e,t,n,r)}finally{Ee=i,ga.transition=o}}function t9(e,t,n,r){var i=Ee,o=ga.transition;ga.transition=null;try{Ee=4,Tg(e,t,n,r)}finally{Ee=i,ga.transition=o}}function Tg(e,t,n,r){if(Id){var i=Fp(e,t,n,r);if(i===null)fh(e,t,r,Td,n),Zy(e,r);else if(J8(i,e,t,n,r))r.stopPropagation();else if(Zy(e,r),t&4&&-1<Z8.indexOf(e)){for(;i!==null;){var o=Ol(i);if(o!==null&&K4(o),o=Fp(e,t,n,r),o===null&&fh(e,t,r,Td,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else fh(e,t,r,null,n)}}var Td=null;function Fp(e,t,n,r){if(Td=null,e=kg(r),e=Yi(e),e!==null)if(t=lo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=B4(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Td=e,null}function tb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B8()){case Ng:return 1;case V4:return 4;case Nd:case H8:return 16;case q4:return 536870912;default:return 16}default:return 16}}var qr=null,Ag=null,Zu=null;function nb(){if(Zu)return Zu;var e,t=Ag,n=t.length,r,i="value"in qr?qr.value:qr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Zu=i.slice(e,1<r?1-r:void 0)}function Ju(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ou(){return!0}function Xy(){return!1}function Xt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ou:Xy,this.isPropagationStopped=Xy,this}return Qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ou)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ou)},persist:function(){},isPersistent:ou}),t}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rg=Xt(Ua),Pl=Qe({},Ua,{view:0,detail:0}),n9=Xt(Pl),rh,ih,is,Ac=Qe({},Pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==is&&(is&&e.type==="mousemove"?(rh=e.screenX-is.screenX,ih=e.screenY-is.screenY):ih=rh=0,is=e),rh)},movementY:function(e){return"movementY"in e?e.movementY:ih}}),e2=Xt(Ac),r9=Qe({},Ac,{dataTransfer:0}),i9=Xt(r9),o9=Qe({},Pl,{relatedTarget:0}),oh=Xt(o9),a9=Qe({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),s9=Xt(a9),l9=Qe({},Ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),u9=Xt(l9),d9=Qe({},Ua,{data:0}),t2=Xt(d9),c9={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f9={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h9={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p9(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=h9[e])?!!t[e]:!1}function Fg(){return p9}var g9=Qe({},Pl,{key:function(e){if(e.key){var t=c9[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ju(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?f9[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fg,charCode:function(e){return e.type==="keypress"?Ju(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ju(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),m9=Xt(g9),y9=Qe({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),n2=Xt(y9),v9=Qe({},Pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fg}),x9=Xt(v9),b9=Qe({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),$9=Xt(b9),w9=Qe({},Ac,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),S9=Xt(w9),C9=[9,13,27,32],Dg=Sr&&"CompositionEvent"in window,As=null;Sr&&"documentMode"in document&&(As=document.documentMode);var P9=Sr&&"TextEvent"in window&&!As,rb=Sr&&(!Dg||As&&8<As&&11>=As),r2=String.fromCharCode(32),i2=!1;function ib(e,t){switch(e){case"keyup":return C9.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ob(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zo=!1;function O9(e,t){switch(e){case"compositionend":return ob(t);case"keypress":return t.which!==32?null:(i2=!0,r2);case"textInput":return e=t.data,e===r2&&i2?null:e;default:return null}}function _9(e,t){if(Zo)return e==="compositionend"||!Dg&&ib(e,t)?(e=nb(),Zu=Ag=qr=null,Zo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rb&&t.locale!=="ko"?null:t.data;default:return null}}var k9={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function o2(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!k9[e.type]:t==="textarea"}function ab(e,t,n,r){M4(r),t=Ad(t,"onChange"),0<t.length&&(n=new Rg("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rs=null,Zs=null;function N9(e){yb(e,0)}function Rc(e){var t=ea(e);if(E4(t))return e}function E9(e,t){if(e==="change")return t}var sb=!1;if(Sr){var ah;if(Sr){var sh="oninput"in document;if(!sh){var a2=document.createElement("div");a2.setAttribute("oninput","return;"),sh=typeof a2.oninput=="function"}ah=sh}else ah=!1;sb=ah&&(!document.documentMode||9<document.documentMode)}function s2(){Rs&&(Rs.detachEvent("onpropertychange",lb),Zs=Rs=null)}function lb(e){if(e.propertyName==="value"&&Rc(Zs)){var t=[];ab(t,Zs,e,kg(e)),U4(N9,t)}}function I9(e,t,n){e==="focusin"?(s2(),Rs=t,Zs=n,Rs.attachEvent("onpropertychange",lb)):e==="focusout"&&s2()}function T9(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rc(Zs)}function A9(e,t){if(e==="click")return Rc(t)}function R9(e,t){if(e==="input"||e==="change")return Rc(t)}function F9(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dn=typeof Object.is=="function"?Object.is:F9;function Js(e,t){if(Dn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yp.call(t,i)||!Dn(e[i],t[i]))return!1}return!0}function l2(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function u2(e,t){var n=l2(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=l2(n)}}function ub(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ub(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function db(){for(var e=window,t=Od();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Od(e.document)}return t}function Mg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function D9(e){var t=db(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ub(n.ownerDocument.documentElement,n)){if(r!==null&&Mg(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=u2(n,o);var a=u2(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var M9=Sr&&"documentMode"in document&&11>=document.documentMode,Jo=null,Dp=null,Fs=null,Mp=!1;function d2(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mp||Jo==null||Jo!==Od(r)||(r=Jo,"selectionStart"in r&&Mg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fs&&Js(Fs,r)||(Fs=r,r=Ad(Dp,"onSelect"),0<r.length&&(t=new Rg("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jo)))}function au(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xo={animationend:au("Animation","AnimationEnd"),animationiteration:au("Animation","AnimationIteration"),animationstart:au("Animation","AnimationStart"),transitionend:au("Transition","TransitionEnd")},lh={},cb={};Sr&&(cb=document.createElement("div").style,"AnimationEvent"in window||(delete Xo.animationend.animation,delete Xo.animationiteration.animation,delete Xo.animationstart.animation),"TransitionEvent"in window||delete Xo.transitionend.transition);function Fc(e){if(lh[e])return lh[e];if(!Xo[e])return e;var t=Xo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cb)return lh[e]=t[n];return e}var fb=Fc("animationend"),hb=Fc("animationiteration"),pb=Fc("animationstart"),gb=Fc("transitionend"),mb=new Map,c2="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xi(e,t){mb.set(e,t),so(t,[e])}for(var uh=0;uh<c2.length;uh++){var dh=c2[uh],j9=dh.toLowerCase(),L9=dh[0].toUpperCase()+dh.slice(1);xi(j9,"on"+L9)}xi(fb,"onAnimationEnd");xi(hb,"onAnimationIteration");xi(pb,"onAnimationStart");xi("dblclick","onDoubleClick");xi("focusin","onFocus");xi("focusout","onBlur");xi(gb,"onTransitionEnd");Pa("onMouseEnter",["mouseout","mouseover"]);Pa("onMouseLeave",["mouseout","mouseover"]);Pa("onPointerEnter",["pointerout","pointerover"]);Pa("onPointerLeave",["pointerout","pointerover"]);so("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));so("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));so("onBeforeInput",["compositionend","keypress","textInput","paste"]);so("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));so("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));so("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z9=new Set("cancel close invalid load scroll toggle".split(" ").concat(ks));function f2(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,j8(r,t,void 0,e),e.currentTarget=null}function yb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;f2(i,l,d),o=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,d=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;f2(i,l,d),o=u}}}if(kd)throw e=Tp,kd=!1,Tp=null,e}function je(e,t){var n=t[Bp];n===void 0&&(n=t[Bp]=new Set);var r=e+"__bubble";n.has(r)||(vb(t,e,2,!1),n.add(r))}function ch(e,t,n){var r=0;t&&(r|=4),vb(n,e,r,t)}var su="_reactListening"+Math.random().toString(36).slice(2);function Xs(e){if(!e[su]){e[su]=!0,P4.forEach(function(n){n!=="selectionchange"&&(z9.has(n)||ch(n,!1,e),ch(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[su]||(t[su]=!0,ch("selectionchange",!1,t))}}function vb(e,t,n,r){switch(tb(t)){case 1:var i=e9;break;case 4:i=t9;break;default:i=Tg}n=i.bind(null,t,n,e),i=void 0,!Ip||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function fh(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Yi(l),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}l=l.parentNode}}r=r.return}U4(function(){var d=o,c=kg(n),h=[];e:{var g=mb.get(e);if(g!==void 0){var x=Rg,v=e;switch(e){case"keypress":if(Ju(n)===0)break e;case"keydown":case"keyup":x=m9;break;case"focusin":v="focus",x=oh;break;case"focusout":v="blur",x=oh;break;case"beforeblur":case"afterblur":x=oh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=e2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=i9;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=x9;break;case fb:case hb:case pb:x=s9;break;case gb:x=$9;break;case"scroll":x=n9;break;case"wheel":x=S9;break;case"copy":case"cut":case"paste":x=u9;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=n2}var $=(t&4)!==0,w=!$&&e==="scroll",y=$?g!==null?g+"Capture":null:g;$=[];for(var p=d,b;p!==null;){b=p;var S=b.stateNode;if(b.tag===5&&S!==null&&(b=S,y!==null&&(S=qs(p,y),S!=null&&$.push(el(p,S,b)))),w)break;p=p.return}0<$.length&&(g=new x(g,v,null,n,c),h.push({event:g,listeners:$}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==Np&&(v=n.relatedTarget||n.fromElement)&&(Yi(v)||v[Cr]))break e;if((x||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=d,v=v?Yi(v):null,v!==null&&(w=lo(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=d),x!==v)){if($=e2,S="onMouseLeave",y="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&($=n2,S="onPointerLeave",y="onPointerEnter",p="pointer"),w=x==null?g:ea(x),b=v==null?g:ea(v),g=new $(S,p+"leave",x,n,c),g.target=w,g.relatedTarget=b,S=null,Yi(c)===d&&($=new $(y,p+"enter",v,n,c),$.target=b,$.relatedTarget=w,S=$),w=S,x&&v)t:{for($=x,y=v,p=0,b=$;b;b=ho(b))p++;for(b=0,S=y;S;S=ho(S))b++;for(;0<p-b;)$=ho($),p--;for(;0<b-p;)y=ho(y),b--;for(;p--;){if($===y||y!==null&&$===y.alternate)break t;$=ho($),y=ho(y)}$=null}else $=null;x!==null&&h2(h,g,x,$,!1),v!==null&&w!==null&&h2(h,w,v,$,!0)}}e:{if(g=d?ea(d):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var P=E9;else if(o2(g))if(sb)P=R9;else{P=T9;var _=I9}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(P=A9);if(P&&(P=P(e,d))){ab(h,P,n,c);break e}_&&_(e,g,d),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&Cp(g,"number",g.value)}switch(_=d?ea(d):window,e){case"focusin":(o2(_)||_.contentEditable==="true")&&(Jo=_,Dp=d,Fs=null);break;case"focusout":Fs=Dp=Jo=null;break;case"mousedown":Mp=!0;break;case"contextmenu":case"mouseup":case"dragend":Mp=!1,d2(h,n,c);break;case"selectionchange":if(M9)break;case"keydown":case"keyup":d2(h,n,c)}var T;if(Dg)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Zo?ib(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(rb&&n.locale!=="ko"&&(Zo||R!=="onCompositionStart"?R==="onCompositionEnd"&&Zo&&(T=nb()):(qr=c,Ag="value"in qr?qr.value:qr.textContent,Zo=!0)),_=Ad(d,R),0<_.length&&(R=new t2(R,e,null,n,c),h.push({event:R,listeners:_}),T?R.data=T:(T=ob(n),T!==null&&(R.data=T)))),(T=P9?O9(e,n):_9(e,n))&&(d=Ad(d,"onBeforeInput"),0<d.length&&(c=new t2("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:d}),c.data=T))}yb(h,t)})}function el(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ad(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=qs(e,n),o!=null&&r.unshift(el(e,o,i)),o=qs(e,t),o!=null&&r.push(el(e,o,i))),e=e.return}return r}function ho(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function h2(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=qs(n,o),u!=null&&a.unshift(el(n,u,l))):i||(u=qs(n,o),u!=null&&a.push(el(n,u,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var U9=/\r\n?/g,B9=/\u0000|\uFFFD/g;function p2(e){return(typeof e=="string"?e:""+e).replace(U9,`
`).replace(B9,"")}function lu(e,t,n){if(t=p2(t),p2(e)!==t&&n)throw Error(G(425))}function Rd(){}var jp=null,Lp=null;function zp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Up=typeof setTimeout=="function"?setTimeout:void 0,H9=typeof clearTimeout=="function"?clearTimeout:void 0,g2=typeof Promise=="function"?Promise:void 0,W9=typeof queueMicrotask=="function"?queueMicrotask:typeof g2<"u"?function(e){return g2.resolve(null).then(e).catch(Y9)}:Up;function Y9(e){setTimeout(function(){throw e})}function hh(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ks(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ks(t)}function ni(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function m2(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ba=Math.random().toString(36).slice(2),Vn="__reactFiber$"+Ba,tl="__reactProps$"+Ba,Cr="__reactContainer$"+Ba,Bp="__reactEvents$"+Ba,V9="__reactListeners$"+Ba,q9="__reactHandles$"+Ba;function Yi(e){var t=e[Vn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Cr]||n[Vn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=m2(e);e!==null;){if(n=e[Vn])return n;e=m2(e)}return t}e=n,n=e.parentNode}return null}function Ol(e){return e=e[Vn]||e[Cr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ea(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function Dc(e){return e[tl]||null}var Hp=[],ta=-1;function bi(e){return{current:e}}function ze(e){0>ta||(e.current=Hp[ta],Hp[ta]=null,ta--)}function Me(e,t){ta++,Hp[ta]=e.current,e.current=t}var gi={},kt=bi(gi),Bt=bi(!1),to=gi;function Oa(e,t){var n=e.type.contextTypes;if(!n)return gi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ht(e){return e=e.childContextTypes,e!=null}function Fd(){ze(Bt),ze(kt)}function y2(e,t,n){if(kt.current!==gi)throw Error(G(168));Me(kt,t),Me(Bt,n)}function xb(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(G(108,I8(e)||"Unknown",i));return Qe({},n,r)}function Dd(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gi,to=kt.current,Me(kt,e),Me(Bt,Bt.current),!0}function v2(e,t,n){var r=e.stateNode;if(!r)throw Error(G(169));n?(e=xb(e,t,to),r.__reactInternalMemoizedMergedChildContext=e,ze(Bt),ze(kt),Me(kt,e)):ze(Bt),Me(Bt,n)}var hr=null,Mc=!1,ph=!1;function bb(e){hr===null?hr=[e]:hr.push(e)}function G9(e){Mc=!0,bb(e)}function $i(){if(!ph&&hr!==null){ph=!0;var e=0,t=Ee;try{var n=hr;for(Ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}hr=null,Mc=!1}catch(i){throw hr!==null&&(hr=hr.slice(e+1)),Y4(Ng,$i),i}finally{Ee=t,ph=!1}}return null}var na=[],ra=0,Md=null,jd=0,ln=[],un=0,no=null,gr=1,mr="";function zi(e,t){na[ra++]=jd,na[ra++]=Md,Md=e,jd=t}function $b(e,t,n){ln[un++]=gr,ln[un++]=mr,ln[un++]=no,no=e;var r=gr;e=mr;var i=32-An(r)-1;r&=~(1<<i),n+=1;var o=32-An(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,gr=1<<32-An(t)+i|n<<i|r,mr=o+e}else gr=1<<o|n<<i|r,mr=e}function jg(e){e.return!==null&&(zi(e,1),$b(e,1,0))}function Lg(e){for(;e===Md;)Md=na[--ra],na[ra]=null,jd=na[--ra],na[ra]=null;for(;e===no;)no=ln[--un],ln[un]=null,mr=ln[--un],ln[un]=null,gr=ln[--un],ln[un]=null}var Qt=null,Gt=null,Ye=!1,Nn=null;function wb(e,t){var n=fn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function x2(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qt=e,Gt=ni(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qt=e,Gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=no!==null?{id:gr,overflow:mr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=fn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qt=e,Gt=null,!0):!1;default:return!1}}function Wp(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yp(e){if(Ye){var t=Gt;if(t){var n=t;if(!x2(e,t)){if(Wp(e))throw Error(G(418));t=ni(n.nextSibling);var r=Qt;t&&x2(e,t)?wb(r,n):(e.flags=e.flags&-4097|2,Ye=!1,Qt=e)}}else{if(Wp(e))throw Error(G(418));e.flags=e.flags&-4097|2,Ye=!1,Qt=e}}}function b2(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qt=e}function uu(e){if(e!==Qt)return!1;if(!Ye)return b2(e),Ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zp(e.type,e.memoizedProps)),t&&(t=Gt)){if(Wp(e))throw Sb(),Error(G(418));for(;t;)wb(e,t),t=ni(t.nextSibling)}if(b2(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Gt=ni(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Gt=null}}else Gt=Qt?ni(e.stateNode.nextSibling):null;return!0}function Sb(){for(var e=Gt;e;)e=ni(e.nextSibling)}function _a(){Gt=Qt=null,Ye=!1}function zg(e){Nn===null?Nn=[e]:Nn.push(e)}var Q9=Er.ReactCurrentBatchConfig;function _n(e,t){if(e&&e.defaultProps){t=Qe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ld=bi(null),zd=null,ia=null,Ug=null;function Bg(){Ug=ia=zd=null}function Hg(e){var t=Ld.current;ze(Ld),e._currentValue=t}function Vp(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ma(e,t){zd=e,Ug=ia=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ut=!0),e.firstContext=null)}function gn(e){var t=e._currentValue;if(Ug!==e)if(e={context:e,memoizedValue:t,next:null},ia===null){if(zd===null)throw Error(G(308));ia=e,zd.dependencies={lanes:0,firstContext:e}}else ia=ia.next=e;return t}var Vi=null;function Wg(e){Vi===null?Vi=[e]:Vi.push(e)}function Cb(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Wg(t)):(n.next=i.next,i.next=n),t.interleaved=n,Pr(e,r)}function Pr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Br=!1;function Yg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function br(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ri(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Pr(e,n)}return i=r.interleaved,i===null?(t.next=t,Wg(r)):(t.next=i.next,i.next=t),r.interleaved=t,Pr(e,n)}function Xu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eg(e,n)}}function $2(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ud(e,t,n,r){var i=e.updateQueue;Br=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,a===null?o=d:a.next=d,a=u;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=d:l.next=d,c.lastBaseUpdate=u))}if(o!==null){var h=i.baseState;a=0,c=d=u=null,l=o;do{var g=l.lane,x=l.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,$=l;switch(g=t,x=n,$.tag){case 1:if(v=$.payload,typeof v=="function"){h=v.call(x,h,g);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=$.payload,g=typeof v=="function"?v.call(x,h,g):v,g==null)break e;h=Qe({},h,g);break e;case 2:Br=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else x={eventTime:x,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(d=c=x,u=h):c=c.next=x,a|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);io|=a,e.lanes=a,e.memoizedState=h}}function w2(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(G(191,i));i.call(r)}}}var Ob=new C4.Component().refs;function qp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Qe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jc={isMounted:function(e){return(e=e._reactInternals)?lo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=At(),i=oi(e),o=br(r,i);o.payload=t,n!=null&&(o.callback=n),t=ri(e,o,i),t!==null&&(Rn(t,e,i,r),Xu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=At(),i=oi(e),o=br(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ri(e,o,i),t!==null&&(Rn(t,e,i,r),Xu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=At(),r=oi(e),i=br(n,r);i.tag=2,t!=null&&(i.callback=t),t=ri(e,i,r),t!==null&&(Rn(t,e,r,n),Xu(t,e,r))}};function S2(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Js(n,r)||!Js(i,o):!0}function _b(e,t,n){var r=!1,i=gi,o=t.contextType;return typeof o=="object"&&o!==null?o=gn(o):(i=Ht(t)?to:kt.current,r=t.contextTypes,o=(r=r!=null)?Oa(e,i):gi),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function C2(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jc.enqueueReplaceState(t,t.state,null)}function Gp(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ob,Yg(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=gn(o):(o=Ht(t)?to:kt.current,i.context=Oa(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(qp(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&jc.enqueueReplaceState(i,i.state,null),Ud(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function os(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var r=n.stateNode}if(!r)throw Error(G(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Ob&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,e))}return e}function du(e,t){throw e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function P2(e){var t=e._init;return t(e._payload)}function kb(e){function t(y,p){if(e){var b=y.deletions;b===null?(y.deletions=[p],y.flags|=16):b.push(p)}}function n(y,p){if(!e)return null;for(;p!==null;)t(y,p),p=p.sibling;return null}function r(y,p){for(y=new Map;p!==null;)p.key!==null?y.set(p.key,p):y.set(p.index,p),p=p.sibling;return y}function i(y,p){return y=ai(y,p),y.index=0,y.sibling=null,y}function o(y,p,b){return y.index=b,e?(b=y.alternate,b!==null?(b=b.index,b<p?(y.flags|=2,p):b):(y.flags|=2,p)):(y.flags|=1048576,p)}function a(y){return e&&y.alternate===null&&(y.flags|=2),y}function l(y,p,b,S){return p===null||p.tag!==6?(p=$h(b,y.mode,S),p.return=y,p):(p=i(p,b),p.return=y,p)}function u(y,p,b,S){var P=b.type;return P===Ko?c(y,p,b.props.children,S,b.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ur&&P2(P)===p.type)?(S=i(p,b.props),S.ref=os(y,p,b),S.return=y,S):(S=od(b.type,b.key,b.props,null,y.mode,S),S.ref=os(y,p,b),S.return=y,S)}function d(y,p,b,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==b.containerInfo||p.stateNode.implementation!==b.implementation?(p=wh(b,y.mode,S),p.return=y,p):(p=i(p,b.children||[]),p.return=y,p)}function c(y,p,b,S,P){return p===null||p.tag!==7?(p=Ji(b,y.mode,S,P),p.return=y,p):(p=i(p,b),p.return=y,p)}function h(y,p,b){if(typeof p=="string"&&p!==""||typeof p=="number")return p=$h(""+p,y.mode,b),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Xl:return b=od(p.type,p.key,p.props,null,y.mode,b),b.ref=os(y,null,p),b.return=y,b;case Qo:return p=wh(p,y.mode,b),p.return=y,p;case Ur:var S=p._init;return h(y,S(p._payload),b)}if(Os(p)||es(p))return p=Ji(p,y.mode,b,null),p.return=y,p;du(y,p)}return null}function g(y,p,b,S){var P=p!==null?p.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return P!==null?null:l(y,p,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Xl:return b.key===P?u(y,p,b,S):null;case Qo:return b.key===P?d(y,p,b,S):null;case Ur:return P=b._init,g(y,p,P(b._payload),S)}if(Os(b)||es(b))return P!==null?null:c(y,p,b,S,null);du(y,b)}return null}function x(y,p,b,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return y=y.get(b)||null,l(p,y,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Xl:return y=y.get(S.key===null?b:S.key)||null,u(p,y,S,P);case Qo:return y=y.get(S.key===null?b:S.key)||null,d(p,y,S,P);case Ur:var _=S._init;return x(y,p,b,_(S._payload),P)}if(Os(S)||es(S))return y=y.get(b)||null,c(p,y,S,P,null);du(p,S)}return null}function v(y,p,b,S){for(var P=null,_=null,T=p,R=p=0,W=null;T!==null&&R<b.length;R++){T.index>R?(W=T,T=null):W=T.sibling;var z=g(y,T,b[R],S);if(z===null){T===null&&(T=W);break}e&&T&&z.alternate===null&&t(y,T),p=o(z,p,R),_===null?P=z:_.sibling=z,_=z,T=W}if(R===b.length)return n(y,T),Ye&&zi(y,R),P;if(T===null){for(;R<b.length;R++)T=h(y,b[R],S),T!==null&&(p=o(T,p,R),_===null?P=T:_.sibling=T,_=T);return Ye&&zi(y,R),P}for(T=r(y,T);R<b.length;R++)W=x(T,y,R,b[R],S),W!==null&&(e&&W.alternate!==null&&T.delete(W.key===null?R:W.key),p=o(W,p,R),_===null?P=W:_.sibling=W,_=W);return e&&T.forEach(function(ie){return t(y,ie)}),Ye&&zi(y,R),P}function $(y,p,b,S){var P=es(b);if(typeof P!="function")throw Error(G(150));if(b=P.call(b),b==null)throw Error(G(151));for(var _=P=null,T=p,R=p=0,W=null,z=b.next();T!==null&&!z.done;R++,z=b.next()){T.index>R?(W=T,T=null):W=T.sibling;var ie=g(y,T,z.value,S);if(ie===null){T===null&&(T=W);break}e&&T&&ie.alternate===null&&t(y,T),p=o(ie,p,R),_===null?P=ie:_.sibling=ie,_=ie,T=W}if(z.done)return n(y,T),Ye&&zi(y,R),P;if(T===null){for(;!z.done;R++,z=b.next())z=h(y,z.value,S),z!==null&&(p=o(z,p,R),_===null?P=z:_.sibling=z,_=z);return Ye&&zi(y,R),P}for(T=r(y,T);!z.done;R++,z=b.next())z=x(T,y,R,z.value,S),z!==null&&(e&&z.alternate!==null&&T.delete(z.key===null?R:z.key),p=o(z,p,R),_===null?P=z:_.sibling=z,_=z);return e&&T.forEach(function(M){return t(y,M)}),Ye&&zi(y,R),P}function w(y,p,b,S){if(typeof b=="object"&&b!==null&&b.type===Ko&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Xl:e:{for(var P=b.key,_=p;_!==null;){if(_.key===P){if(P=b.type,P===Ko){if(_.tag===7){n(y,_.sibling),p=i(_,b.props.children),p.return=y,y=p;break e}}else if(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ur&&P2(P)===_.type){n(y,_.sibling),p=i(_,b.props),p.ref=os(y,_,b),p.return=y,y=p;break e}n(y,_);break}else t(y,_);_=_.sibling}b.type===Ko?(p=Ji(b.props.children,y.mode,S,b.key),p.return=y,y=p):(S=od(b.type,b.key,b.props,null,y.mode,S),S.ref=os(y,p,b),S.return=y,y=S)}return a(y);case Qo:e:{for(_=b.key;p!==null;){if(p.key===_)if(p.tag===4&&p.stateNode.containerInfo===b.containerInfo&&p.stateNode.implementation===b.implementation){n(y,p.sibling),p=i(p,b.children||[]),p.return=y,y=p;break e}else{n(y,p);break}else t(y,p);p=p.sibling}p=wh(b,y.mode,S),p.return=y,y=p}return a(y);case Ur:return _=b._init,w(y,p,_(b._payload),S)}if(Os(b))return v(y,p,b,S);if(es(b))return $(y,p,b,S);du(y,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,p!==null&&p.tag===6?(n(y,p.sibling),p=i(p,b),p.return=y,y=p):(n(y,p),p=$h(b,y.mode,S),p.return=y,y=p),a(y)):n(y,p)}return w}var ka=kb(!0),Nb=kb(!1),_l={},Jn=bi(_l),nl=bi(_l),rl=bi(_l);function qi(e){if(e===_l)throw Error(G(174));return e}function Vg(e,t){switch(Me(rl,t),Me(nl,e),Me(Jn,_l),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Op(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Op(t,e)}ze(Jn),Me(Jn,t)}function Na(){ze(Jn),ze(nl),ze(rl)}function Eb(e){qi(rl.current);var t=qi(Jn.current),n=Op(t,e.type);t!==n&&(Me(nl,e),Me(Jn,n))}function qg(e){nl.current===e&&(ze(Jn),ze(nl))}var qe=bi(0);function Bd(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gh=[];function Gg(){for(var e=0;e<gh.length;e++)gh[e]._workInProgressVersionPrimary=null;gh.length=0}var ed=Er.ReactCurrentDispatcher,mh=Er.ReactCurrentBatchConfig,ro=0,Ge=null,st=null,ft=null,Hd=!1,Ds=!1,il=0,K9=0;function wt(){throw Error(G(321))}function Qg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dn(e[n],t[n]))return!1;return!0}function Kg(e,t,n,r,i,o){if(ro=o,Ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ed.current=e===null||e.memoizedState===null?e7:t7,e=n(r,i),Ds){o=0;do{if(Ds=!1,il=0,25<=o)throw Error(G(301));o+=1,ft=st=null,t.updateQueue=null,ed.current=n7,e=n(r,i)}while(Ds)}if(ed.current=Wd,t=st!==null&&st.next!==null,ro=0,ft=st=Ge=null,Hd=!1,t)throw Error(G(300));return e}function Zg(){var e=il!==0;return il=0,e}function Yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Ge.memoizedState=ft=e:ft=ft.next=e,ft}function mn(){if(st===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=st.next;var t=ft===null?Ge.memoizedState:ft.next;if(t!==null)ft=t,st=e;else{if(e===null)throw Error(G(310));st=e,e={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},ft===null?Ge.memoizedState=ft=e:ft=ft.next=e}return ft}function ol(e,t){return typeof t=="function"?t(e):t}function yh(e){var t=mn(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=st,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,u=null,d=o;do{var c=d.lane;if((ro&c)===c)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:c,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=h,a=r):u=u.next=h,Ge.lanes|=c,io|=c}d=d.next}while(d!==null&&d!==o);u===null?a=r:u.next=l,Dn(r,t.memoizedState)||(Ut=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ge.lanes|=o,io|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vh(e){var t=mn(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Dn(o,t.memoizedState)||(Ut=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ib(){}function Tb(e,t){var n=Ge,r=mn(),i=t(),o=!Dn(r.memoizedState,i);if(o&&(r.memoizedState=i,Ut=!0),r=r.queue,Jg(Fb.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ft!==null&&ft.memoizedState.tag&1){if(n.flags|=2048,al(9,Rb.bind(null,n,r,i,t),void 0,null),ht===null)throw Error(G(349));ro&30||Ab(n,t,i)}return i}function Ab(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rb(e,t,n,r){t.value=n,t.getSnapshot=r,Db(t)&&Mb(e)}function Fb(e,t,n){return n(function(){Db(t)&&Mb(e)})}function Db(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dn(e,n)}catch{return!0}}function Mb(e){var t=Pr(e,1);t!==null&&Rn(t,e,1,-1)}function O2(e){var t=Yn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ol,lastRenderedState:e},t.queue=e,e=e.dispatch=X9.bind(null,Ge,e),[t.memoizedState,e]}function al(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function jb(){return mn().memoizedState}function td(e,t,n,r){var i=Yn();Ge.flags|=e,i.memoizedState=al(1|t,n,void 0,r===void 0?null:r)}function Lc(e,t,n,r){var i=mn();r=r===void 0?null:r;var o=void 0;if(st!==null){var a=st.memoizedState;if(o=a.destroy,r!==null&&Qg(r,a.deps)){i.memoizedState=al(t,n,o,r);return}}Ge.flags|=e,i.memoizedState=al(1|t,n,o,r)}function _2(e,t){return td(8390656,8,e,t)}function Jg(e,t){return Lc(2048,8,e,t)}function Lb(e,t){return Lc(4,2,e,t)}function zb(e,t){return Lc(4,4,e,t)}function Ub(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bb(e,t,n){return n=n!=null?n.concat([e]):null,Lc(4,4,Ub.bind(null,t,e),n)}function Xg(){}function Hb(e,t){var n=mn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qg(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wb(e,t){var n=mn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qg(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yb(e,t,n){return ro&21?(Dn(n,t)||(n=G4(),Ge.lanes|=n,io|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ut=!0),e.memoizedState=n)}function Z9(e,t){var n=Ee;Ee=n!==0&&4>n?n:4,e(!0);var r=mh.transition;mh.transition={};try{e(!1),t()}finally{Ee=n,mh.transition=r}}function Vb(){return mn().memoizedState}function J9(e,t,n){var r=oi(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qb(e))Gb(t,n);else if(n=Cb(e,t,n,r),n!==null){var i=At();Rn(n,e,r,i),Qb(n,t,r)}}function X9(e,t,n){var r=oi(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qb(e))Gb(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Dn(l,a)){var u=t.interleaved;u===null?(i.next=i,Wg(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Cb(e,t,i,r),n!==null&&(i=At(),Rn(n,e,r,i),Qb(n,t,r))}}function qb(e){var t=e.alternate;return e===Ge||t!==null&&t===Ge}function Gb(e,t){Ds=Hd=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qb(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eg(e,n)}}var Wd={readContext:gn,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},e7={readContext:gn,useCallback:function(e,t){return Yn().memoizedState=[e,t===void 0?null:t],e},useContext:gn,useEffect:_2,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,td(4194308,4,Ub.bind(null,t,e),n)},useLayoutEffect:function(e,t){return td(4194308,4,e,t)},useInsertionEffect:function(e,t){return td(4,2,e,t)},useMemo:function(e,t){var n=Yn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Yn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=J9.bind(null,Ge,e),[r.memoizedState,e]},useRef:function(e){var t=Yn();return e={current:e},t.memoizedState=e},useState:O2,useDebugValue:Xg,useDeferredValue:function(e){return Yn().memoizedState=e},useTransition:function(){var e=O2(!1),t=e[0];return e=Z9.bind(null,e[1]),Yn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ge,i=Yn();if(Ye){if(n===void 0)throw Error(G(407));n=n()}else{if(n=t(),ht===null)throw Error(G(349));ro&30||Ab(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,_2(Fb.bind(null,r,o,e),[e]),r.flags|=2048,al(9,Rb.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Yn(),t=ht.identifierPrefix;if(Ye){var n=mr,r=gr;n=(r&~(1<<32-An(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=il++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=K9++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},t7={readContext:gn,useCallback:Hb,useContext:gn,useEffect:Jg,useImperativeHandle:Bb,useInsertionEffect:Lb,useLayoutEffect:zb,useMemo:Wb,useReducer:yh,useRef:jb,useState:function(){return yh(ol)},useDebugValue:Xg,useDeferredValue:function(e){var t=mn();return Yb(t,st.memoizedState,e)},useTransition:function(){var e=yh(ol)[0],t=mn().memoizedState;return[e,t]},useMutableSource:Ib,useSyncExternalStore:Tb,useId:Vb,unstable_isNewReconciler:!1},n7={readContext:gn,useCallback:Hb,useContext:gn,useEffect:Jg,useImperativeHandle:Bb,useInsertionEffect:Lb,useLayoutEffect:zb,useMemo:Wb,useReducer:vh,useRef:jb,useState:function(){return vh(ol)},useDebugValue:Xg,useDeferredValue:function(e){var t=mn();return st===null?t.memoizedState=e:Yb(t,st.memoizedState,e)},useTransition:function(){var e=vh(ol)[0],t=mn().memoizedState;return[e,t]},useMutableSource:Ib,useSyncExternalStore:Tb,useId:Vb,unstable_isNewReconciler:!1};function Ea(e,t){try{var n="",r=t;do n+=E8(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function xh(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Qp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var r7=typeof WeakMap=="function"?WeakMap:Map;function Kb(e,t,n){n=br(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vd||(Vd=!0,o1=r),Qp(e,t)},n}function Zb(e,t,n){n=br(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Qp(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Qp(e,t),typeof r!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function k2(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new r7;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=y7.bind(null,e,t,n),t.then(e,e))}function N2(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function E2(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=br(-1,1),t.tag=2,ri(n,t,1))),n.lanes|=1),e)}var i7=Er.ReactCurrentOwner,Ut=!1;function It(e,t,n,r){t.child=e===null?Nb(t,null,n,r):ka(t,e.child,n,r)}function I2(e,t,n,r,i){n=n.render;var o=t.ref;return ma(t,i),r=Kg(e,t,n,r,o,i),n=Zg(),e!==null&&!Ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Or(e,t,i)):(Ye&&n&&jg(t),t.flags|=1,It(e,t,r,i),t.child)}function T2(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!sm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Jb(e,t,o,r,i)):(e=od(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Js,n(a,r)&&e.ref===t.ref)return Or(e,t,i)}return t.flags|=1,e=ai(o,r),e.ref=t.ref,e.return=t,t.child=e}function Jb(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Js(o,r)&&e.ref===t.ref)if(Ut=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ut=!0);else return t.lanes=e.lanes,Or(e,t,i)}return Kp(e,t,n,r,i)}function Xb(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(aa,Yt),Yt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(aa,Yt),Yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Me(aa,Yt),Yt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Me(aa,Yt),Yt|=r;return It(e,t,i,n),t.child}function e$(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Kp(e,t,n,r,i){var o=Ht(n)?to:kt.current;return o=Oa(t,o),ma(t,i),n=Kg(e,t,n,r,o,i),r=Zg(),e!==null&&!Ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Or(e,t,i)):(Ye&&r&&jg(t),t.flags|=1,It(e,t,n,i),t.child)}function A2(e,t,n,r,i){if(Ht(n)){var o=!0;Dd(t)}else o=!1;if(ma(t,i),t.stateNode===null)nd(e,t),_b(t,n,r),Gp(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=gn(d):(d=Ht(n)?to:kt.current,d=Oa(t,d));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==d)&&C2(t,a,r,d),Br=!1;var g=t.memoizedState;a.state=g,Ud(t,r,a,i),u=t.memoizedState,l!==r||g!==u||Bt.current||Br?(typeof c=="function"&&(qp(t,n,c,r),u=t.memoizedState),(l=Br||S2(t,n,l,r,g,u,d))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Pb(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:_n(t.type,l),a.props=d,h=t.pendingProps,g=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=gn(u):(u=Ht(n)?to:kt.current,u=Oa(t,u));var x=n.getDerivedStateFromProps;(c=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||g!==u)&&C2(t,a,r,u),Br=!1,g=t.memoizedState,a.state=g,Ud(t,r,a,i);var v=t.memoizedState;l!==h||g!==v||Bt.current||Br?(typeof x=="function"&&(qp(t,n,x,r),v=t.memoizedState),(d=Br||S2(t,n,d,r,g,v,u)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Zp(e,t,n,r,o,i)}function Zp(e,t,n,r,i,o){e$(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&v2(t,n,!1),Or(e,t,o);r=t.stateNode,i7.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ka(t,e.child,null,o),t.child=ka(t,null,l,o)):It(e,t,l,o),t.memoizedState=r.state,i&&v2(t,n,!0),t.child}function t$(e){var t=e.stateNode;t.pendingContext?y2(e,t.pendingContext,t.pendingContext!==t.context):t.context&&y2(e,t.context,!1),Vg(e,t.containerInfo)}function R2(e,t,n,r,i){return _a(),zg(i),t.flags|=256,It(e,t,n,r),t.child}var Jp={dehydrated:null,treeContext:null,retryLane:0};function Xp(e){return{baseLanes:e,cachePool:null,transitions:null}}function n$(e,t,n){var r=t.pendingProps,i=qe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Me(qe,i&1),e===null)return Yp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Bc(a,r,0,null),e=Ji(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Xp(n),t.memoizedState=Jp,e):em(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return o7(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ai(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=ai(l,o):(o=Ji(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Xp(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Jp,r}return o=e.child,e=o.sibling,r=ai(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function em(e,t){return t=Bc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function cu(e,t,n,r){return r!==null&&zg(r),ka(t,e.child,null,n),e=em(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function o7(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=xh(Error(G(422))),cu(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Bc({mode:"visible",children:r.children},i,0,null),o=Ji(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ka(t,e.child,null,a),t.child.memoizedState=Xp(a),t.memoizedState=Jp,o);if(!(t.mode&1))return cu(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(G(419)),r=xh(o,r,void 0),cu(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ut||l){if(r=ht,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Pr(e,i),Rn(r,e,i,-1))}return am(),r=xh(Error(G(421))),cu(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=v7.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Gt=ni(i.nextSibling),Qt=t,Ye=!0,Nn=null,e!==null&&(ln[un++]=gr,ln[un++]=mr,ln[un++]=no,gr=e.id,mr=e.overflow,no=t),t=em(t,r.children),t.flags|=4096,t)}function F2(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vp(e.return,t,n)}function bh(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function r$(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(It(e,t,r.children,n),r=qe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&F2(e,n,t);else if(e.tag===19)F2(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Me(qe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Bd(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),bh(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bd(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}bh(t,!0,n,null,o);break;case"together":bh(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function nd(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Or(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),io|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,n=ai(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ai(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function a7(e,t,n){switch(t.tag){case 3:t$(t),_a();break;case 5:Eb(t);break;case 1:Ht(t.type)&&Dd(t);break;case 4:Vg(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Me(Ld,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Me(qe,qe.current&1),t.flags|=128,null):n&t.child.childLanes?n$(e,t,n):(Me(qe,qe.current&1),e=Or(e,t,n),e!==null?e.sibling:null);Me(qe,qe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return r$(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(qe,qe.current),r)break;return null;case 22:case 23:return t.lanes=0,Xb(e,t,n)}return Or(e,t,n)}var i$,e1,o$,a$;i$=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};e1=function(){};o$=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,qi(Jn.current);var o=null;switch(n){case"input":i=wp(e,i),r=wp(e,r),o=[];break;case"select":i=Qe({},i,{value:void 0}),r=Qe({},r,{value:void 0}),o=[];break;case"textarea":i=Pp(e,i),r=Pp(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Rd)}_p(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ys.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ys.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&je("scroll",e),o||l===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};a$=function(e,t,n,r){n!==r&&(t.flags|=4)};function as(e,t){if(!Ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function St(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function s7(e,t,n){var r=t.pendingProps;switch(Lg(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(t),null;case 1:return Ht(t.type)&&Fd(),St(t),null;case 3:return r=t.stateNode,Na(),ze(Bt),ze(kt),Gg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(uu(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nn!==null&&(l1(Nn),Nn=null))),e1(e,t),St(t),null;case 5:qg(t);var i=qi(rl.current);if(n=t.type,e!==null&&t.stateNode!=null)o$(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(G(166));return St(t),null}if(e=qi(Jn.current),uu(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Vn]=t,r[tl]=o,e=(t.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<ks.length;i++)je(ks[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":Wy(r,o),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},je("invalid",r);break;case"textarea":Vy(r,o),je("invalid",r)}_p(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&lu(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&lu(r.textContent,l,e),i=["children",""+l]):Ys.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&je("scroll",r)}switch(n){case"input":eu(r),Yy(r,o,!0);break;case"textarea":eu(r),qy(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Rd)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=A4(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Vn]=t,e[tl]=r,i$(e,t,!1,!1),t.stateNode=e;e:{switch(a=kp(n,r),n){case"dialog":je("cancel",e),je("close",e),i=r;break;case"iframe":case"object":case"embed":je("load",e),i=r;break;case"video":case"audio":for(i=0;i<ks.length;i++)je(ks[i],e);i=r;break;case"source":je("error",e),i=r;break;case"img":case"image":case"link":je("error",e),je("load",e),i=r;break;case"details":je("toggle",e),i=r;break;case"input":Wy(e,r),i=wp(e,r),je("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Qe({},r,{value:void 0}),je("invalid",e);break;case"textarea":Vy(e,r),i=Pp(e,r),je("invalid",e);break;default:i=r}_p(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?D4(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&R4(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vs(e,u):typeof u=="number"&&Vs(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ys.hasOwnProperty(o)?u!=null&&o==="onScroll"&&je("scroll",e):u!=null&&Cg(e,o,u,a))}switch(n){case"input":eu(e),Yy(e,r,!1);break;case"textarea":eu(e),qy(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pi(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?fa(e,!!r.multiple,o,!1):r.defaultValue!=null&&fa(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Rd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return St(t),null;case 6:if(e&&t.stateNode!=null)a$(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(G(166));if(n=qi(rl.current),qi(Jn.current),uu(t)){if(r=t.stateNode,n=t.memoizedProps,r[Vn]=t,(o=r.nodeValue!==n)&&(e=Qt,e!==null))switch(e.tag){case 3:lu(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&lu(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vn]=t,t.stateNode=r}return St(t),null;case 13:if(ze(qe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ye&&Gt!==null&&t.mode&1&&!(t.flags&128))Sb(),_a(),t.flags|=98560,o=!1;else if(o=uu(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(G(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(G(317));o[Vn]=t}else _a(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;St(t),o=!1}else Nn!==null&&(l1(Nn),Nn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||qe.current&1?lt===0&&(lt=3):am())),t.updateQueue!==null&&(t.flags|=4),St(t),null);case 4:return Na(),e1(e,t),e===null&&Xs(t.stateNode.containerInfo),St(t),null;case 10:return Hg(t.type._context),St(t),null;case 17:return Ht(t.type)&&Fd(),St(t),null;case 19:if(ze(qe),o=t.memoizedState,o===null)return St(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)as(o,!1);else{if(lt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Bd(e),a!==null){for(t.flags|=128,as(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Me(qe,qe.current&1|2),t.child}e=e.sibling}o.tail!==null&&tt()>Ia&&(t.flags|=128,r=!0,as(o,!1),t.lanes=4194304)}else{if(!r)if(e=Bd(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),as(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Ye)return St(t),null}else 2*tt()-o.renderingStartTime>Ia&&n!==1073741824&&(t.flags|=128,r=!0,as(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=tt(),t.sibling=null,n=qe.current,Me(qe,r?n&1|2:n&1),t):(St(t),null);case 22:case 23:return om(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Yt&1073741824&&(St(t),t.subtreeFlags&6&&(t.flags|=8192)):St(t),null;case 24:return null;case 25:return null}throw Error(G(156,t.tag))}function l7(e,t){switch(Lg(t),t.tag){case 1:return Ht(t.type)&&Fd(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Na(),ze(Bt),ze(kt),Gg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qg(t),null;case 13:if(ze(qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));_a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(qe),null;case 4:return Na(),null;case 10:return Hg(t.type._context),null;case 22:case 23:return om(),null;case 24:return null;default:return null}}var fu=!1,Pt=!1,u7=typeof WeakSet=="function"?WeakSet:Set,ue=null;function oa(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ze(e,t,r)}else n.current=null}function t1(e,t,n){try{n()}catch(r){Ze(e,t,r)}}var D2=!1;function d7(e,t){if(jp=Id,e=db(),Mg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,d=0,c=0,h=e,g=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(l=a+i),h!==o||r!==0&&h.nodeType!==3||(u=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(x=h.firstChild)!==null;)g=h,h=x;for(;;){if(h===e)break t;if(g===n&&++d===i&&(l=a),g===o&&++c===r&&(u=a),(x=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lp={focusedElem:e,selectionRange:n},Id=!1,ue=t;ue!==null;)if(t=ue,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ue=e;else for(;ue!==null;){t=ue;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var $=v.memoizedProps,w=v.memoizedState,y=t.stateNode,p=y.getSnapshotBeforeUpdate(t.elementType===t.type?$:_n(t.type,$),w);y.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(S){Ze(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,ue=e;break}ue=t.return}return v=D2,D2=!1,v}function Ms(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&t1(t,n,o)}i=i.next}while(i!==r)}}function zc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function n1(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function s$(e){var t=e.alternate;t!==null&&(e.alternate=null,s$(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Vn],delete t[tl],delete t[Bp],delete t[V9],delete t[q9])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function l$(e){return e.tag===5||e.tag===3||e.tag===4}function M2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||l$(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function r1(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Rd));else if(r!==4&&(e=e.child,e!==null))for(r1(e,t,n),e=e.sibling;e!==null;)r1(e,t,n),e=e.sibling}function i1(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(i1(e,t,n),e=e.sibling;e!==null;)i1(e,t,n),e=e.sibling}var vt=null,kn=!1;function Dr(e,t,n){for(n=n.child;n!==null;)u$(e,t,n),n=n.sibling}function u$(e,t,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(Tc,n)}catch{}switch(n.tag){case 5:Pt||oa(n,t);case 6:var r=vt,i=kn;vt=null,Dr(e,t,n),vt=r,kn=i,vt!==null&&(kn?(e=vt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):vt.removeChild(n.stateNode));break;case 18:vt!==null&&(kn?(e=vt,n=n.stateNode,e.nodeType===8?hh(e.parentNode,n):e.nodeType===1&&hh(e,n),Ks(e)):hh(vt,n.stateNode));break;case 4:r=vt,i=kn,vt=n.stateNode.containerInfo,kn=!0,Dr(e,t,n),vt=r,kn=i;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&t1(n,t,a),i=i.next}while(i!==r)}Dr(e,t,n);break;case 1:if(!Pt&&(oa(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ze(n,t,l)}Dr(e,t,n);break;case 21:Dr(e,t,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,Dr(e,t,n),Pt=r):Dr(e,t,n);break;default:Dr(e,t,n)}}function j2(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new u7),t.forEach(function(r){var i=x7.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $n(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:vt=l.stateNode,kn=!1;break e;case 3:vt=l.stateNode.containerInfo,kn=!0;break e;case 4:vt=l.stateNode.containerInfo,kn=!0;break e}l=l.return}if(vt===null)throw Error(G(160));u$(o,a,i),vt=null,kn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){Ze(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)d$(t,e),t=t.sibling}function d$(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($n(t,e),Un(e),r&4){try{Ms(3,e,e.return),zc(3,e)}catch($){Ze(e,e.return,$)}try{Ms(5,e,e.return)}catch($){Ze(e,e.return,$)}}break;case 1:$n(t,e),Un(e),r&512&&n!==null&&oa(n,n.return);break;case 5:if($n(t,e),Un(e),r&512&&n!==null&&oa(n,n.return),e.flags&32){var i=e.stateNode;try{Vs(i,"")}catch($){Ze(e,e.return,$)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&I4(i,o),kp(l,a);var d=kp(l,o);for(a=0;a<u.length;a+=2){var c=u[a],h=u[a+1];c==="style"?D4(i,h):c==="dangerouslySetInnerHTML"?R4(i,h):c==="children"?Vs(i,h):Cg(i,c,h,d)}switch(l){case"input":Sp(i,o);break;case"textarea":T4(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?fa(i,!!o.multiple,x,!1):g!==!!o.multiple&&(o.defaultValue!=null?fa(i,!!o.multiple,o.defaultValue,!0):fa(i,!!o.multiple,o.multiple?[]:"",!1))}i[tl]=o}catch($){Ze(e,e.return,$)}}break;case 6:if($n(t,e),Un(e),r&4){if(e.stateNode===null)throw Error(G(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch($){Ze(e,e.return,$)}}break;case 3:if($n(t,e),Un(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ks(t.containerInfo)}catch($){Ze(e,e.return,$)}break;case 4:$n(t,e),Un(e);break;case 13:$n(t,e),Un(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(rm=tt())),r&4&&j2(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Pt=(d=Pt)||c,$n(t,e),Pt=d):$n(t,e),Un(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!c&&e.mode&1)for(ue=e,c=e.child;c!==null;){for(h=ue=c;ue!==null;){switch(g=ue,x=g.child,g.tag){case 0:case 11:case 14:case 15:Ms(4,g,g.return);break;case 1:oa(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch($){Ze(r,n,$)}}break;case 5:oa(g,g.return);break;case 22:if(g.memoizedState!==null){z2(h);continue}}x!==null?(x.return=g,ue=x):z2(h)}c=c.sibling}e:for(c=null,h=e;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,u=h.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=F4("display",a))}catch($){Ze(e,e.return,$)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch($){Ze(e,e.return,$)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:$n(t,e),Un(e),r&4&&j2(e);break;case 21:break;default:$n(t,e),Un(e)}}function Un(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(l$(n)){var r=n;break e}n=n.return}throw Error(G(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vs(i,""),r.flags&=-33);var o=M2(e);i1(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=M2(e);r1(e,l,a);break;default:throw Error(G(161))}}catch(u){Ze(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function c7(e,t,n){ue=e,c$(e)}function c$(e,t,n){for(var r=(e.mode&1)!==0;ue!==null;){var i=ue,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||fu;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Pt;l=fu;var d=Pt;if(fu=a,(Pt=u)&&!d)for(ue=i;ue!==null;)a=ue,u=a.child,a.tag===22&&a.memoizedState!==null?U2(i):u!==null?(u.return=a,ue=u):U2(i);for(;o!==null;)ue=o,c$(o),o=o.sibling;ue=i,fu=l,Pt=d}L2(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ue=o):L2(e)}}function L2(e){for(;ue!==null;){var t=ue;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pt||zc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:_n(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&w2(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}w2(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var c=d.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ks(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}Pt||t.flags&512&&n1(t)}catch(g){Ze(t,t.return,g)}}if(t===e){ue=null;break}if(n=t.sibling,n!==null){n.return=t.return,ue=n;break}ue=t.return}}function z2(e){for(;ue!==null;){var t=ue;if(t===e){ue=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ue=n;break}ue=t.return}}function U2(e){for(;ue!==null;){var t=ue;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zc(4,t)}catch(u){Ze(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Ze(t,i,u)}}var o=t.return;try{n1(t)}catch(u){Ze(t,o,u)}break;case 5:var a=t.return;try{n1(t)}catch(u){Ze(t,a,u)}}}catch(u){Ze(t,t.return,u)}if(t===e){ue=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ue=l;break}ue=t.return}}var f7=Math.ceil,Yd=Er.ReactCurrentDispatcher,tm=Er.ReactCurrentOwner,pn=Er.ReactCurrentBatchConfig,Se=0,ht=null,ot=null,xt=0,Yt=0,aa=bi(0),lt=0,sl=null,io=0,Uc=0,nm=0,js=null,zt=null,rm=0,Ia=1/0,dr=null,Vd=!1,o1=null,ii=null,hu=!1,Gr=null,qd=0,Ls=0,a1=null,rd=-1,id=0;function At(){return Se&6?tt():rd!==-1?rd:rd=tt()}function oi(e){return e.mode&1?Se&2&&xt!==0?xt&-xt:Q9.transition!==null?(id===0&&(id=G4()),id):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:tb(e.type)),e):1}function Rn(e,t,n,r){if(50<Ls)throw Ls=0,a1=null,Error(G(185));Cl(e,n,r),(!(Se&2)||e!==ht)&&(e===ht&&(!(Se&2)&&(Uc|=n),lt===4&&Yr(e,xt)),Wt(e,r),n===1&&Se===0&&!(t.mode&1)&&(Ia=tt()+500,Mc&&$i()))}function Wt(e,t){var n=e.callbackNode;Q8(e,t);var r=Ed(e,e===ht?xt:0);if(r===0)n!==null&&Ky(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ky(n),t===1)e.tag===0?G9(B2.bind(null,e)):bb(B2.bind(null,e)),W9(function(){!(Se&6)&&$i()}),n=null;else{switch(Q4(r)){case 1:n=Ng;break;case 4:n=V4;break;case 16:n=Nd;break;case 536870912:n=q4;break;default:n=Nd}n=x$(n,f$.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function f$(e,t){if(rd=-1,id=0,Se&6)throw Error(G(327));var n=e.callbackNode;if(ya()&&e.callbackNode!==n)return null;var r=Ed(e,e===ht?xt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Gd(e,r);else{t=r;var i=Se;Se|=2;var o=p$();(ht!==e||xt!==t)&&(dr=null,Ia=tt()+500,Zi(e,t));do try{g7();break}catch(l){h$(e,l)}while(1);Bg(),Yd.current=o,Se=i,ot!==null?t=0:(ht=null,xt=0,t=lt)}if(t!==0){if(t===2&&(i=Ap(e),i!==0&&(r=i,t=s1(e,i))),t===1)throw n=sl,Zi(e,0),Yr(e,r),Wt(e,tt()),n;if(t===6)Yr(e,r);else{if(i=e.current.alternate,!(r&30)&&!h7(i)&&(t=Gd(e,r),t===2&&(o=Ap(e),o!==0&&(r=o,t=s1(e,o))),t===1))throw n=sl,Zi(e,0),Yr(e,r),Wt(e,tt()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(G(345));case 2:Ui(e,zt,dr);break;case 3:if(Yr(e,r),(r&130023424)===r&&(t=rm+500-tt(),10<t)){if(Ed(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){At(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Up(Ui.bind(null,e,zt,dr),t);break}Ui(e,zt,dr);break;case 4:if(Yr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-An(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=tt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*f7(r/1960))-r,10<r){e.timeoutHandle=Up(Ui.bind(null,e,zt,dr),r);break}Ui(e,zt,dr);break;case 5:Ui(e,zt,dr);break;default:throw Error(G(329))}}}return Wt(e,tt()),e.callbackNode===n?f$.bind(null,e):null}function s1(e,t){var n=js;return e.current.memoizedState.isDehydrated&&(Zi(e,t).flags|=256),e=Gd(e,t),e!==2&&(t=zt,zt=n,t!==null&&l1(t)),e}function l1(e){zt===null?zt=e:zt.push.apply(zt,e)}function h7(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Dn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yr(e,t){for(t&=~nm,t&=~Uc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-An(t),r=1<<n;e[n]=-1,t&=~r}}function B2(e){if(Se&6)throw Error(G(327));ya();var t=Ed(e,0);if(!(t&1))return Wt(e,tt()),null;var n=Gd(e,t);if(e.tag!==0&&n===2){var r=Ap(e);r!==0&&(t=r,n=s1(e,r))}if(n===1)throw n=sl,Zi(e,0),Yr(e,t),Wt(e,tt()),n;if(n===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ui(e,zt,dr),Wt(e,tt()),null}function im(e,t){var n=Se;Se|=1;try{return e(t)}finally{Se=n,Se===0&&(Ia=tt()+500,Mc&&$i())}}function oo(e){Gr!==null&&Gr.tag===0&&!(Se&6)&&ya();var t=Se;Se|=1;var n=pn.transition,r=Ee;try{if(pn.transition=null,Ee=1,e)return e()}finally{Ee=r,pn.transition=n,Se=t,!(Se&6)&&$i()}}function om(){Yt=aa.current,ze(aa)}function Zi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,H9(n)),ot!==null)for(n=ot.return;n!==null;){var r=n;switch(Lg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fd();break;case 3:Na(),ze(Bt),ze(kt),Gg();break;case 5:qg(r);break;case 4:Na();break;case 13:ze(qe);break;case 19:ze(qe);break;case 10:Hg(r.type._context);break;case 22:case 23:om()}n=n.return}if(ht=e,ot=e=ai(e.current,null),xt=Yt=t,lt=0,sl=null,nm=Uc=io=0,zt=js=null,Vi!==null){for(t=0;t<Vi.length;t++)if(n=Vi[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Vi=null}return e}function h$(e,t){do{var n=ot;try{if(Bg(),ed.current=Wd,Hd){for(var r=Ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Hd=!1}if(ro=0,ft=st=Ge=null,Ds=!1,il=0,tm.current=null,n===null||n.return===null){lt=1,sl=t,ot=null;break}e:{var o=e,a=n.return,l=n,u=t;if(t=xt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,c=l,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var x=N2(a);if(x!==null){x.flags&=-257,E2(x,a,l,o,t),x.mode&1&&k2(o,d,t),t=x,u=d;var v=t.updateQueue;if(v===null){var $=new Set;$.add(u),t.updateQueue=$}else v.add(u);break e}else{if(!(t&1)){k2(o,d,t),am();break e}u=Error(G(426))}}else if(Ye&&l.mode&1){var w=N2(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),E2(w,a,l,o,t),zg(Ea(u,l));break e}}o=u=Ea(u,l),lt!==4&&(lt=2),js===null?js=[o]:js.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=Kb(o,u,t);$2(o,y);break e;case 1:l=u;var p=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ii===null||!ii.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Zb(o,l,t);$2(o,S);break e}}o=o.return}while(o!==null)}m$(n)}catch(P){t=P,ot===n&&n!==null&&(ot=n=n.return);continue}break}while(1)}function p$(){var e=Yd.current;return Yd.current=Wd,e===null?Wd:e}function am(){(lt===0||lt===3||lt===2)&&(lt=4),ht===null||!(io&268435455)&&!(Uc&268435455)||Yr(ht,xt)}function Gd(e,t){var n=Se;Se|=2;var r=p$();(ht!==e||xt!==t)&&(dr=null,Zi(e,t));do try{p7();break}catch(i){h$(e,i)}while(1);if(Bg(),Se=n,Yd.current=r,ot!==null)throw Error(G(261));return ht=null,xt=0,lt}function p7(){for(;ot!==null;)g$(ot)}function g7(){for(;ot!==null&&!z8();)g$(ot)}function g$(e){var t=v$(e.alternate,e,Yt);e.memoizedProps=e.pendingProps,t===null?m$(e):ot=t,tm.current=null}function m$(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=l7(n,t),n!==null){n.flags&=32767,ot=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{lt=6,ot=null;return}}else if(n=s7(n,t,Yt),n!==null){ot=n;return}if(t=t.sibling,t!==null){ot=t;return}ot=t=e}while(t!==null);lt===0&&(lt=5)}function Ui(e,t,n){var r=Ee,i=pn.transition;try{pn.transition=null,Ee=1,m7(e,t,n,r)}finally{pn.transition=i,Ee=r}return null}function m7(e,t,n,r){do ya();while(Gr!==null);if(Se&6)throw Error(G(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(K8(e,o),e===ht&&(ot=ht=null,xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hu||(hu=!0,x$(Nd,function(){return ya(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=pn.transition,pn.transition=null;var a=Ee;Ee=1;var l=Se;Se|=4,tm.current=null,d7(e,n),d$(n,e),D9(Lp),Id=!!jp,Lp=jp=null,e.current=n,c7(n),U8(),Se=l,Ee=a,pn.transition=o}else e.current=n;if(hu&&(hu=!1,Gr=e,qd=i),o=e.pendingLanes,o===0&&(ii=null),W8(n.stateNode),Wt(e,tt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vd)throw Vd=!1,e=o1,o1=null,e;return qd&1&&e.tag!==0&&ya(),o=e.pendingLanes,o&1?e===a1?Ls++:(Ls=0,a1=e):Ls=0,$i(),null}function ya(){if(Gr!==null){var e=Q4(qd),t=pn.transition,n=Ee;try{if(pn.transition=null,Ee=16>e?16:e,Gr===null)var r=!1;else{if(e=Gr,Gr=null,qd=0,Se&6)throw Error(G(331));var i=Se;for(Se|=4,ue=e.current;ue!==null;){var o=ue,a=o.child;if(ue.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(ue=d;ue!==null;){var c=ue;switch(c.tag){case 0:case 11:case 15:Ms(8,c,o)}var h=c.child;if(h!==null)h.return=c,ue=h;else for(;ue!==null;){c=ue;var g=c.sibling,x=c.return;if(s$(c),c===d){ue=null;break}if(g!==null){g.return=x,ue=g;break}ue=x}}}var v=o.alternate;if(v!==null){var $=v.child;if($!==null){v.child=null;do{var w=$.sibling;$.sibling=null,$=w}while($!==null)}}ue=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,ue=a;else e:for(;ue!==null;){if(o=ue,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ms(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,ue=y;break e}ue=o.return}}var p=e.current;for(ue=p;ue!==null;){a=ue;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,ue=b;else e:for(a=p;ue!==null;){if(l=ue,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:zc(9,l)}}catch(P){Ze(l,l.return,P)}if(l===a){ue=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,ue=S;break e}ue=l.return}}if(Se=i,$i(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(Tc,e)}catch{}r=!0}return r}finally{Ee=n,pn.transition=t}}return!1}function H2(e,t,n){t=Ea(n,t),t=Kb(e,t,1),e=ri(e,t,1),t=At(),e!==null&&(Cl(e,1,t),Wt(e,t))}function Ze(e,t,n){if(e.tag===3)H2(e,e,n);else for(;t!==null;){if(t.tag===3){H2(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ii===null||!ii.has(r))){e=Ea(n,e),e=Zb(t,e,1),t=ri(t,e,1),e=At(),t!==null&&(Cl(t,1,e),Wt(t,e));break}}t=t.return}}function y7(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=At(),e.pingedLanes|=e.suspendedLanes&n,ht===e&&(xt&n)===n&&(lt===4||lt===3&&(xt&130023424)===xt&&500>tt()-rm?Zi(e,0):nm|=n),Wt(e,t)}function y$(e,t){t===0&&(e.mode&1?(t=ru,ru<<=1,!(ru&130023424)&&(ru=4194304)):t=1);var n=At();e=Pr(e,t),e!==null&&(Cl(e,t,n),Wt(e,n))}function v7(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),y$(e,n)}function x7(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(G(314))}r!==null&&r.delete(t),y$(e,n)}var v$;v$=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Bt.current)Ut=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ut=!1,a7(e,t,n);Ut=!!(e.flags&131072)}else Ut=!1,Ye&&t.flags&1048576&&$b(t,jd,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;nd(e,t),e=t.pendingProps;var i=Oa(t,kt.current);ma(t,n),i=Kg(null,t,r,e,i,n);var o=Zg();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ht(r)?(o=!0,Dd(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yg(t),i.updater=jc,t.stateNode=i,i._reactInternals=t,Gp(t,r,e,n),t=Zp(null,t,r,!0,o,n)):(t.tag=0,Ye&&o&&jg(t),It(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(nd(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=$7(r),e=_n(r,e),i){case 0:t=Kp(null,t,r,e,n);break e;case 1:t=A2(null,t,r,e,n);break e;case 11:t=I2(null,t,r,e,n);break e;case 14:t=T2(null,t,r,_n(r.type,e),n);break e}throw Error(G(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_n(r,i),Kp(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_n(r,i),A2(e,t,r,i,n);case 3:e:{if(t$(t),e===null)throw Error(G(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Pb(e,t),Ud(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ea(Error(G(423)),t),t=R2(e,t,r,n,i);break e}else if(r!==i){i=Ea(Error(G(424)),t),t=R2(e,t,r,n,i);break e}else for(Gt=ni(t.stateNode.containerInfo.firstChild),Qt=t,Ye=!0,Nn=null,n=Nb(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_a(),r===i){t=Or(e,t,n);break e}It(e,t,r,n)}t=t.child}return t;case 5:return Eb(t),e===null&&Yp(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,zp(r,i)?a=null:o!==null&&zp(r,o)&&(t.flags|=32),e$(e,t),It(e,t,a,n),t.child;case 6:return e===null&&Yp(t),null;case 13:return n$(e,t,n);case 4:return Vg(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ka(t,null,r,n):It(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_n(r,i),I2(e,t,r,i,n);case 7:return It(e,t,t.pendingProps,n),t.child;case 8:return It(e,t,t.pendingProps.children,n),t.child;case 12:return It(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Me(Ld,r._currentValue),r._currentValue=a,o!==null)if(Dn(o.value,a)){if(o.children===i.children&&!Bt.current){t=Or(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=br(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var c=d.pending;c===null?u.next=u:(u.next=c.next,c.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Vp(o.return,n,t),l.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(G(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Vp(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}It(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ma(t,n),i=gn(i),r=r(i),t.flags|=1,It(e,t,r,n),t.child;case 14:return r=t.type,i=_n(r,t.pendingProps),i=_n(r.type,i),T2(e,t,r,i,n);case 15:return Jb(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_n(r,i),nd(e,t),t.tag=1,Ht(r)?(e=!0,Dd(t)):e=!1,ma(t,n),_b(t,r,i),Gp(t,r,i,n),Zp(null,t,r,!0,e,n);case 19:return r$(e,t,n);case 22:return Xb(e,t,n)}throw Error(G(156,t.tag))};function x$(e,t){return Y4(e,t)}function b7(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(e,t,n,r){return new b7(e,t,n,r)}function sm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $7(e){if(typeof e=="function")return sm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Og)return 11;if(e===_g)return 14}return 2}function ai(e,t){var n=e.alternate;return n===null?(n=fn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function od(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")sm(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ko:return Ji(n.children,i,o,t);case Pg:a=8,i|=8;break;case vp:return e=fn(12,n,t,i|2),e.elementType=vp,e.lanes=o,e;case xp:return e=fn(13,n,t,i),e.elementType=xp,e.lanes=o,e;case bp:return e=fn(19,n,t,i),e.elementType=bp,e.lanes=o,e;case k4:return Bc(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O4:a=10;break e;case _4:a=9;break e;case Og:a=11;break e;case _g:a=14;break e;case Ur:a=16,r=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return t=fn(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Ji(e,t,n,r){return e=fn(7,e,r,t),e.lanes=n,e}function Bc(e,t,n,r){return e=fn(22,e,r,t),e.elementType=k4,e.lanes=n,e.stateNode={isHidden:!1},e}function $h(e,t,n){return e=fn(6,e,null,t),e.lanes=n,e}function wh(e,t,n){return t=fn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function w7(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nh(0),this.expirationTimes=nh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lm(e,t,n,r,i,o,a,l,u){return e=new w7(e,t,n,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=fn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yg(o),e}function S7(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function b$(e){if(!e)return gi;e=e._reactInternals;e:{if(lo(e)!==e||e.tag!==1)throw Error(G(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ht(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(G(171))}if(e.tag===1){var n=e.type;if(Ht(n))return xb(e,n,t)}return t}function $$(e,t,n,r,i,o,a,l,u){return e=lm(n,r,!0,e,i,o,a,l,u),e.context=b$(null),n=e.current,r=At(),i=oi(n),o=br(r,i),o.callback=t??null,ri(n,o,i),e.current.lanes=i,Cl(e,i,r),Wt(e,r),e}function Hc(e,t,n,r){var i=t.current,o=At(),a=oi(i);return n=b$(n),t.context===null?t.context=n:t.pendingContext=n,t=br(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ri(i,t,a),e!==null&&(Rn(e,i,a,o),Xu(e,i,a)),a}function Qd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function W2(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function um(e,t){W2(e,t),(e=e.alternate)&&W2(e,t)}function C7(){return null}var w$=typeof reportError=="function"?reportError:function(e){console.error(e)};function dm(e){this._internalRoot=e}Wc.prototype.render=dm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));Hc(e,t,null,null)};Wc.prototype.unmount=dm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;oo(function(){Hc(null,e,null,null)}),t[Cr]=null}};function Wc(e){this._internalRoot=e}Wc.prototype.unstable_scheduleHydration=function(e){if(e){var t=J4();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wr.length&&t!==0&&t<Wr[n].priority;n++);Wr.splice(n,0,e),n===0&&eb(e)}};function cm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Y2(){}function P7(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Qd(a);o.call(d)}}var a=$$(t,r,e,0,null,!1,!1,"",Y2);return e._reactRootContainer=a,e[Cr]=a.current,Xs(e.nodeType===8?e.parentNode:e),oo(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Qd(u);l.call(d)}}var u=lm(e,0,!1,null,null,!1,!1,"",Y2);return e._reactRootContainer=u,e[Cr]=u.current,Xs(e.nodeType===8?e.parentNode:e),oo(function(){Hc(t,u,n,r)}),u}function Vc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var u=Qd(a);l.call(u)}}Hc(t,a,e,i)}else a=P7(n,t,e,i,r);return Qd(a)}K4=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_s(t.pendingLanes);n!==0&&(Eg(t,n|1),Wt(t,tt()),!(Se&6)&&(Ia=tt()+500,$i()))}break;case 13:oo(function(){var r=Pr(e,1);if(r!==null){var i=At();Rn(r,e,1,i)}}),um(e,1)}};Ig=function(e){if(e.tag===13){var t=Pr(e,134217728);if(t!==null){var n=At();Rn(t,e,134217728,n)}um(e,134217728)}};Z4=function(e){if(e.tag===13){var t=oi(e),n=Pr(e,t);if(n!==null){var r=At();Rn(n,e,t,r)}um(e,t)}};J4=function(){return Ee};X4=function(e,t){var n=Ee;try{return Ee=e,t()}finally{Ee=n}};Ep=function(e,t,n){switch(t){case"input":if(Sp(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Dc(r);if(!i)throw Error(G(90));E4(r),Sp(r,i)}}}break;case"textarea":T4(e,n);break;case"select":t=n.value,t!=null&&fa(e,!!n.multiple,t,!1)}};L4=im;z4=oo;var O7={usingClientEntryPoint:!1,Events:[Ol,ea,Dc,M4,j4,im]},ss={findFiberByHostInstance:Yi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_7={bundleType:ss.bundleType,version:ss.version,rendererPackageName:ss.rendererPackageName,rendererConfig:ss.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Er.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=H4(e),e===null?null:e.stateNode},findFiberByHostInstance:ss.findFiberByHostInstance||C7,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{Tc=pu.inject(_7),Zn=pu}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O7;Jt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cm(t))throw Error(G(200));return S7(e,t,null,n)};Jt.createRoot=function(e,t){if(!cm(e))throw Error(G(299));var n=!1,r="",i=w$;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=lm(e,1,!1,null,null,n,!1,r,i),e[Cr]=t.current,Xs(e.nodeType===8?e.parentNode:e),new dm(t)};Jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=H4(t),e=e===null?null:e.stateNode,e};Jt.flushSync=function(e){return oo(e)};Jt.hydrate=function(e,t,n){if(!Yc(t))throw Error(G(200));return Vc(null,e,t,!0,n)};Jt.hydrateRoot=function(e,t,n){if(!cm(e))throw Error(G(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=w$;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=$$(t,null,e,1,n??null,i,!1,o,a),e[Cr]=t.current,Xs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Wc(t)};Jt.render=function(e,t,n){if(!Yc(t))throw Error(G(200));return Vc(null,e,t,!1,n)};Jt.unmountComponentAtNode=function(e){if(!Yc(e))throw Error(G(40));return e._reactRootContainer?(oo(function(){Vc(null,null,e,!1,function(){e._reactRootContainer=null,e[Cr]=null})}),!0):!1};Jt.unstable_batchedUpdates=im;Jt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Yc(n))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return Vc(e,t,n,!1,r)};Jt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Jt})(C8);var V2=Pd;gp.createRoot=V2.createRoot,gp.hydrateRoot=V2.hydrateRoot;var Kd={},k7={get exports(){return Kd},set exports(e){Kd=e}},Fe={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=60103,Gc=60106,kl=60107,Nl=60108,El=60114,Il=60109,Tl=60110,Al=60112,Rl=60113,fm=60120,Fl=60115,Dl=60116,S$=60121,C$=60122,P$=60117,O$=60129,_$=60131;if(typeof Symbol=="function"&&Symbol.for){var mt=Symbol.for;qc=mt("react.element"),Gc=mt("react.portal"),kl=mt("react.fragment"),Nl=mt("react.strict_mode"),El=mt("react.profiler"),Il=mt("react.provider"),Tl=mt("react.context"),Al=mt("react.forward_ref"),Rl=mt("react.suspense"),fm=mt("react.suspense_list"),Fl=mt("react.memo"),Dl=mt("react.lazy"),S$=mt("react.block"),C$=mt("react.server.block"),P$=mt("react.fundamental"),O$=mt("react.debug_trace_mode"),_$=mt("react.legacy_hidden")}function Ln(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case qc:switch(e=e.type,e){case kl:case El:case Nl:case Rl:case fm:return e;default:switch(e=e&&e.$$typeof,e){case Tl:case Al:case Dl:case Fl:case Il:return e;default:return t}}case Gc:return t}}}var N7=Il,E7=qc,I7=Al,T7=kl,A7=Dl,R7=Fl,F7=Gc,D7=El,M7=Nl,j7=Rl;Fe.ContextConsumer=Tl;Fe.ContextProvider=N7;Fe.Element=E7;Fe.ForwardRef=I7;Fe.Fragment=T7;Fe.Lazy=A7;Fe.Memo=R7;Fe.Portal=F7;Fe.Profiler=D7;Fe.StrictMode=M7;Fe.Suspense=j7;Fe.isAsyncMode=function(){return!1};Fe.isConcurrentMode=function(){return!1};Fe.isContextConsumer=function(e){return Ln(e)===Tl};Fe.isContextProvider=function(e){return Ln(e)===Il};Fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===qc};Fe.isForwardRef=function(e){return Ln(e)===Al};Fe.isFragment=function(e){return Ln(e)===kl};Fe.isLazy=function(e){return Ln(e)===Dl};Fe.isMemo=function(e){return Ln(e)===Fl};Fe.isPortal=function(e){return Ln(e)===Gc};Fe.isProfiler=function(e){return Ln(e)===El};Fe.isStrictMode=function(e){return Ln(e)===Nl};Fe.isSuspense=function(e){return Ln(e)===Rl};Fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===kl||e===El||e===O$||e===Nl||e===Rl||e===fm||e===_$||typeof e=="object"&&e!==null&&(e.$$typeof===Dl||e.$$typeof===Fl||e.$$typeof===Il||e.$$typeof===Tl||e.$$typeof===Al||e.$$typeof===P$||e.$$typeof===S$||e[0]===C$)};Fe.typeOf=Ln;(function(e){e.exports=Fe})(k7);function L7(e){function t(D,H,Y,oe,k){for(var de=0,Z=0,Ce=0,me=0,ge,he,Ne=0,De=0,fe,O=fe=ge=0,I=0,A=0,re=0,q=0,V=Y.length,se=V-1,ve,ae="",Ae="",Xa="",Ci="",rn;I<V;){if(he=Y.charCodeAt(I),I===se&&Z+me+Ce+de!==0&&(Z!==0&&(he=Z===47?10:47),me=Ce=de=0,V++,se++),Z+me+Ce+de===0){if(I===se&&(0<A&&(ae=ae.replace(g,"")),0<ae.trim().length)){switch(he){case 32:case 9:case 59:case 13:case 10:break;default:ae+=Y.charAt(I)}he=59}switch(he){case 123:for(ae=ae.trim(),ge=ae.charCodeAt(0),fe=1,q=++I;I<V;){switch(he=Y.charCodeAt(I)){case 123:fe++;break;case 125:fe--;break;case 47:switch(he=Y.charCodeAt(I+1)){case 42:case 47:e:{for(O=I+1;O<se;++O)switch(Y.charCodeAt(O)){case 47:if(he===42&&Y.charCodeAt(O-1)===42&&I+2!==O){I=O+1;break e}break;case 10:if(he===47){I=O+1;break e}}I=O}}break;case 91:he++;case 40:he++;case 34:case 39:for(;I++<se&&Y.charCodeAt(I)!==he;);}if(fe===0)break;I++}switch(fe=Y.substring(q,I),ge===0&&(ge=(ae=ae.replace(h,"").trim()).charCodeAt(0)),ge){case 64:switch(0<A&&(ae=ae.replace(g,"")),he=ae.charCodeAt(1),he){case 100:case 109:case 115:case 45:A=H;break;default:A=X}if(fe=t(H,A,fe,he,k+1),q=fe.length,0<L&&(A=n(X,ae,re),rn=l(3,fe,A,H,j,M,q,he,k,oe),ae=A.join(""),rn!==void 0&&(q=(fe=rn.trim()).length)===0&&(he=0,fe="")),0<q)switch(he){case 115:ae=ae.replace(_,a);case 100:case 109:case 45:fe=ae+"{"+fe+"}";break;case 107:ae=ae.replace(p,"$1 $2"),fe=ae+"{"+fe+"}",fe=F===1||F===2&&o("@"+fe,3)?"@-webkit-"+fe+"@"+fe:"@"+fe;break;default:fe=ae+fe,oe===112&&(fe=(Ae+=fe,""))}else fe="";break;default:fe=t(H,n(H,ae,re),fe,oe,k+1)}Xa+=fe,fe=re=A=O=ge=0,ae="",he=Y.charCodeAt(++I);break;case 125:case 59:if(ae=(0<A?ae.replace(g,""):ae).trim(),1<(q=ae.length))switch(O===0&&(ge=ae.charCodeAt(0),ge===45||96<ge&&123>ge)&&(q=(ae=ae.replace(" ",":")).length),0<L&&(rn=l(1,ae,H,D,j,M,Ae.length,oe,k,oe))!==void 0&&(q=(ae=rn.trim()).length)===0&&(ae="\0\0"),ge=ae.charCodeAt(0),he=ae.charCodeAt(1),ge){case 0:break;case 64:if(he===105||he===99){Ci+=ae+Y.charAt(I);break}default:ae.charCodeAt(q-1)!==58&&(Ae+=i(ae,ge,he,ae.charCodeAt(2)))}re=A=O=ge=0,ae="",he=Y.charCodeAt(++I)}}switch(he){case 13:case 10:Z===47?Z=0:1+ge===0&&oe!==107&&0<ae.length&&(A=1,ae+="\0"),0<L*E&&l(0,ae,H,D,j,M,Ae.length,oe,k,oe),M=1,j++;break;case 59:case 125:if(Z+me+Ce+de===0){M++;break}default:switch(M++,ve=Y.charAt(I),he){case 9:case 32:if(me+de+Z===0)switch(Ne){case 44:case 58:case 9:case 32:ve="";break;default:he!==32&&(ve=" ")}break;case 0:ve="\\0";break;case 12:ve="\\f";break;case 11:ve="\\v";break;case 38:me+Z+de===0&&(A=re=1,ve="\f"+ve);break;case 108:if(me+Z+de+J===0&&0<O)switch(I-O){case 2:Ne===112&&Y.charCodeAt(I-3)===58&&(J=Ne);case 8:De===111&&(J=De)}break;case 58:me+Z+de===0&&(O=I);break;case 44:Z+Ce+me+de===0&&(A=1,ve+="\r");break;case 34:case 39:Z===0&&(me=me===he?0:me===0?he:me);break;case 91:me+Z+Ce===0&&de++;break;case 93:me+Z+Ce===0&&de--;break;case 41:me+Z+de===0&&Ce--;break;case 40:if(me+Z+de===0){if(ge===0)switch(2*Ne+3*De){case 533:break;default:ge=1}Ce++}break;case 64:Z+Ce+me+de+O+fe===0&&(fe=1);break;case 42:case 47:if(!(0<me+de+Ce))switch(Z){case 0:switch(2*he+3*Y.charCodeAt(I+1)){case 235:Z=47;break;case 220:q=I,Z=42}break;case 42:he===47&&Ne===42&&q+2!==I&&(Y.charCodeAt(q+2)===33&&(Ae+=Y.substring(q,I+1)),ve="",Z=0)}}Z===0&&(ae+=ve)}De=Ne,Ne=he,I++}if(q=Ae.length,0<q){if(A=H,0<L&&(rn=l(2,Ae,A,D,j,M,q,oe,k,oe),rn!==void 0&&(Ae=rn).length===0))return Ci+Ae+Xa;if(Ae=A.join(",")+"{"+Ae+"}",F*J!==0){switch(F!==2||o(Ae,2)||(J=0),J){case 111:Ae=Ae.replace(S,":-moz-$1")+Ae;break;case 112:Ae=Ae.replace(b,"::-webkit-input-$1")+Ae.replace(b,"::-moz-$1")+Ae.replace(b,":-ms-input-$1")+Ae}J=0}}return Ci+Ae+Xa}function n(D,H,Y){var oe=H.trim().split(w);H=oe;var k=oe.length,de=D.length;switch(de){case 0:case 1:var Z=0;for(D=de===0?"":D[0]+" ";Z<k;++Z)H[Z]=r(D,H[Z],Y).trim();break;default:var Ce=Z=0;for(H=[];Z<k;++Z)for(var me=0;me<de;++me)H[Ce++]=r(D[me]+" ",oe[Z],Y).trim()}return H}function r(D,H,Y){var oe=H.charCodeAt(0);switch(33>oe&&(oe=(H=H.trim()).charCodeAt(0)),oe){case 38:return H.replace(y,"$1"+D.trim());case 58:return D.trim()+H.replace(y,"$1"+D.trim());default:if(0<1*Y&&0<H.indexOf("\f"))return H.replace(y,(D.charCodeAt(0)===58?"":"$1")+D.trim())}return D+H}function i(D,H,Y,oe){var k=D+";",de=2*H+3*Y+4*oe;if(de===944){D=k.indexOf(":",9)+1;var Z=k.substring(D,k.length-1).trim();return Z=k.substring(0,D).trim()+Z+";",F===1||F===2&&o(Z,1)?"-webkit-"+Z+Z:Z}if(F===0||F===2&&!o(k,1))return k;switch(de){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(ie,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return Z=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+Z+"-webkit-"+k+"-ms-flex-pack"+Z+k;case 1005:return v.test(k)?k.replace(x,":-webkit-")+k.replace(x,":-moz-")+k:k;case 1e3:switch(Z=k.substring(13).trim(),H=Z.indexOf("-")+1,Z.charCodeAt(0)+Z.charCodeAt(H)){case 226:Z=k.replace(P,"tb");break;case 232:Z=k.replace(P,"tb-rl");break;case 220:Z=k.replace(P,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+Z+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(H=(k=D).length-10,Z=(k.charCodeAt(H)===33?k.substring(0,H):k).substring(D.indexOf(":",7)+1).trim(),de=Z.charCodeAt(0)+(Z.charCodeAt(7)|0)){case 203:if(111>Z.charCodeAt(8))break;case 115:k=k.replace(Z,"-webkit-"+Z)+";"+k;break;case 207:case 102:k=k.replace(Z,"-webkit-"+(102<de?"inline-":"")+"box")+";"+k.replace(Z,"-webkit-"+Z)+";"+k.replace(Z,"-ms-"+Z+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return Z=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+Z+"-ms-flex-"+Z+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(R,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(R,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(z.test(D)===!0)return(Z=D.substring(D.indexOf(":")+1)).charCodeAt(0)===115?i(D.replace("stretch","fill-available"),H,Y,oe).replace(":fill-available",":stretch"):k.replace(Z,"-webkit-"+Z)+k.replace(Z,"-moz-"+Z.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,Y+oe===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace($,"$1-webkit-$2")+k}return k}function o(D,H){var Y=D.indexOf(H===1?":":"{"),oe=D.substring(0,H!==3?Y:10);return Y=D.substring(Y+1,D.length-1),N(H!==2?oe:oe.replace(W,"$1"),Y,H)}function a(D,H){var Y=i(H,H.charCodeAt(0),H.charCodeAt(1),H.charCodeAt(2));return Y!==H+";"?Y.replace(T," or ($1)").substring(4):"("+H+")"}function l(D,H,Y,oe,k,de,Z,Ce,me,ge){for(var he=0,Ne=H,De;he<L;++he)switch(De=te[he].call(c,D,Ne,Y,oe,k,de,Z,Ce,me,ge)){case void 0:case!1:case!0:case null:break;default:Ne=De}if(Ne!==H)return Ne}function u(D){switch(D){case void 0:case null:L=te.length=0;break;default:if(typeof D=="function")te[L++]=D;else if(typeof D=="object")for(var H=0,Y=D.length;H<Y;++H)u(D[H]);else E=!!D|0}return u}function d(D){return D=D.prefix,D!==void 0&&(N=null,D?typeof D!="function"?F=1:(F=2,N=D):F=0),d}function c(D,H){var Y=D;if(33>Y.charCodeAt(0)&&(Y=Y.trim()),U=Y,Y=[U],0<L){var oe=l(-1,H,Y,Y,j,M,0,0,0,0);oe!==void 0&&typeof oe=="string"&&(H=oe)}var k=t(X,Y,H,0,0);return 0<L&&(oe=l(-2,k,Y,Y,j,M,k.length,0,0,0),oe!==void 0&&(k=oe)),U="",J=0,M=j=1,k}var h=/^\0+/g,g=/[\0\r\f]/g,x=/: */g,v=/zoo|gra/,$=/([,: ])(transform)/g,w=/,\r+?/g,y=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,b=/::(place)/g,S=/:(read-only)/g,P=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,T=/([\s\S]*?);/g,R=/-self|flex-/g,W=/[^]*?(:[rp][el]a[\w-]+)[^]*/,z=/stretch|:\s*\w+\-(?:conte|avail)/,ie=/([^-])(image-set\()/,M=1,j=1,J=0,F=1,X=[],te=[],L=0,N=null,E=0,U="";return c.use=u,c.set=d,e!==void 0&&d(e),c}var z7={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function U7(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var B7=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,q2=U7(function(e){return B7.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),u1={},H7={get exports(){return u1},set exports(e){u1=e}},Ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pt=typeof Symbol=="function"&&Symbol.for,hm=pt?Symbol.for("react.element"):60103,pm=pt?Symbol.for("react.portal"):60106,Qc=pt?Symbol.for("react.fragment"):60107,Kc=pt?Symbol.for("react.strict_mode"):60108,Zc=pt?Symbol.for("react.profiler"):60114,Jc=pt?Symbol.for("react.provider"):60109,Xc=pt?Symbol.for("react.context"):60110,gm=pt?Symbol.for("react.async_mode"):60111,ef=pt?Symbol.for("react.concurrent_mode"):60111,tf=pt?Symbol.for("react.forward_ref"):60112,nf=pt?Symbol.for("react.suspense"):60113,W7=pt?Symbol.for("react.suspense_list"):60120,rf=pt?Symbol.for("react.memo"):60115,of=pt?Symbol.for("react.lazy"):60116,Y7=pt?Symbol.for("react.block"):60121,V7=pt?Symbol.for("react.fundamental"):60117,q7=pt?Symbol.for("react.responder"):60118,G7=pt?Symbol.for("react.scope"):60119;function en(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case hm:switch(e=e.type,e){case gm:case ef:case Qc:case Zc:case Kc:case nf:return e;default:switch(e=e&&e.$$typeof,e){case Xc:case tf:case of:case rf:case Jc:return e;default:return t}}case pm:return t}}}function k$(e){return en(e)===ef}Ie.AsyncMode=gm;Ie.ConcurrentMode=ef;Ie.ContextConsumer=Xc;Ie.ContextProvider=Jc;Ie.Element=hm;Ie.ForwardRef=tf;Ie.Fragment=Qc;Ie.Lazy=of;Ie.Memo=rf;Ie.Portal=pm;Ie.Profiler=Zc;Ie.StrictMode=Kc;Ie.Suspense=nf;Ie.isAsyncMode=function(e){return k$(e)||en(e)===gm};Ie.isConcurrentMode=k$;Ie.isContextConsumer=function(e){return en(e)===Xc};Ie.isContextProvider=function(e){return en(e)===Jc};Ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===hm};Ie.isForwardRef=function(e){return en(e)===tf};Ie.isFragment=function(e){return en(e)===Qc};Ie.isLazy=function(e){return en(e)===of};Ie.isMemo=function(e){return en(e)===rf};Ie.isPortal=function(e){return en(e)===pm};Ie.isProfiler=function(e){return en(e)===Zc};Ie.isStrictMode=function(e){return en(e)===Kc};Ie.isSuspense=function(e){return en(e)===nf};Ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Qc||e===ef||e===Zc||e===Kc||e===nf||e===W7||typeof e=="object"&&e!==null&&(e.$$typeof===of||e.$$typeof===rf||e.$$typeof===Jc||e.$$typeof===Xc||e.$$typeof===tf||e.$$typeof===V7||e.$$typeof===q7||e.$$typeof===G7||e.$$typeof===Y7)};Ie.typeOf=en;(function(e){e.exports=Ie})(H7);var mm=u1,Q7={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},K7={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Z7={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},N$={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ym={};ym[mm.ForwardRef]=Z7;ym[mm.Memo]=N$;function G2(e){return mm.isMemo(e)?N$:ym[e.$$typeof]||Q7}var J7=Object.defineProperty,X7=Object.getOwnPropertyNames,Q2=Object.getOwnPropertySymbols,eS=Object.getOwnPropertyDescriptor,tS=Object.getPrototypeOf,K2=Object.prototype;function E$(e,t,n){if(typeof t!="string"){if(K2){var r=tS(t);r&&r!==K2&&E$(e,r,n)}var i=X7(t);Q2&&(i=i.concat(Q2(t)));for(var o=G2(e),a=G2(t),l=0;l<i.length;++l){var u=i[l];if(!K7[u]&&!(n&&n[u])&&!(a&&a[u])&&!(o&&o[u])){var d=eS(t,u);try{J7(e,u,d)}catch{}}}}return e}var nS=E$;function yr(){return(yr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Z2=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},d1=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Kd.typeOf(e)},Zd=Object.freeze([]),si=Object.freeze({});function ll(e){return typeof e=="function"}function J2(e){return e.displayName||e.name||"Component"}function vm(e){return e&&typeof e.styledComponentId=="string"}var Ta=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",xm=typeof window<"u"&&"HTMLElement"in window,rS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY);function Ml(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var iS=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&Ml(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(n+1),d=0,c=r.length;d<c;d++)this.tag.insertRule(u,r[d])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),ad=new Map,Jd=new Map,zs=1,gu=function(e){if(ad.has(e))return ad.get(e);for(;Jd.has(zs);)zs++;var t=zs++;return ad.set(e,t),Jd.set(t,e),t},oS=function(e){return Jd.get(e)},aS=function(e,t){t>=zs&&(zs=t+1),ad.set(e,t),Jd.set(t,e)},sS="style["+Ta+'][data-styled-version="5.3.6"]',lS=new RegExp("^"+Ta+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),uS=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},dS=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(lS);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(aS(d,u),uS(e,d,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(a)}}},cS=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},I$=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var u=l.childNodes,d=u.length;d>=0;d--){var c=u[d];if(c&&c.nodeType===1&&c.hasAttribute(Ta))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ta,"active"),r.setAttribute("data-styled-version","5.3.6");var a=cS();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},fS=function(){function e(n){var r=this.element=I$(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var u=o[a];if(u.ownerNode===i)return u}Ml(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),hS=function(){function e(n){var r=this.element=I$(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),pS=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),X2=xm,gS={isServer:!xm,useCSSOMInjection:!rS},T$=function(){function e(n,r,i){n===void 0&&(n=si),r===void 0&&(r={}),this.options=yr({},gS,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&xm&&X2&&(X2=!1,function(o){for(var a=document.querySelectorAll(sS),l=0,u=a.length;l<u;l++){var d=a[l];d&&d.getAttribute(Ta)!=="active"&&(dS(o,d),d.parentNode&&d.parentNode.removeChild(d))}}(this))}e.registerId=function(n){return gu(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(yr({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new pS(a):o?new fS(a):new hS(a),new iS(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(gu(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(gu(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(gu(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=oS(a);if(l!==void 0){var u=n.names.get(l),d=r.getGroup(a);if(u&&d&&u.size){var c=Ta+".g"+a+'[id="'+l+'"]',h="";u!==void 0&&u.forEach(function(g){g.length>0&&(h+=g+",")}),o+=""+d+c+'{content:"'+h+`"}/*!sc*/
`}}}return o}(this)},e}(),mS=/(a)(d)/gi,ev=function(e){return String.fromCharCode(e+(e>25?39:97))};function c1(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ev(t%52)+n;return(ev(t%52)+n).replace(mS,"$1-$2")}var sa=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},A$=function(e){return sa(5381,e)};function yS(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ll(n)&&!vm(n))return!1}return!0}var vS=A$("5.3.6"),xS=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&yS(t),this.componentId=n,this.baseHash=sa(vS,n),this.baseStyle=r,T$.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=Aa(this.rules,t,n,r).join(""),l=c1(sa(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var u=r(a,"."+l,void 0,i);n.insertRules(i,l,u)}o.push(l),this.staticRulesId=l}else{for(var d=this.rules.length,c=sa(this.baseHash,r.hash),h="",g=0;g<d;g++){var x=this.rules[g];if(typeof x=="string")h+=x;else if(x){var v=Aa(x,t,n,r),$=Array.isArray(v)?v.join(""):v;c=sa(c,$+g),h+=$}}if(h){var w=c1(c>>>0);if(!n.hasNameForId(i,w)){var y=r(h,"."+w,void 0,i);n.insertRules(i,w,y)}o.push(w)}}return o.join(" ")},e}(),bS=/^\s*\/\/.*$/gm,$S=[":","[",".","#"];function wS(e){var t,n,r,i,o=e===void 0?si:e,a=o.options,l=a===void 0?si:a,u=o.plugins,d=u===void 0?Zd:u,c=new L7(l),h=[],g=function($){function w(y){if(y)try{$(y+"}")}catch{}}return function(y,p,b,S,P,_,T,R,W,z){switch(y){case 1:if(W===0&&p.charCodeAt(0)===64)return $(p+";"),"";break;case 2:if(R===0)return p+"/*|*/";break;case 3:switch(R){case 102:case 112:return $(b[0]+p),"";default:return p+(z===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(w)}}}(function($){h.push($)}),x=function($,w,y){return w===0&&$S.indexOf(y[n.length])!==-1||y.match(i)?$:"."+t};function v($,w,y,p){p===void 0&&(p="&");var b=$.replace(bS,""),S=w&&y?y+" "+w+" { "+b+" }":b;return t=p,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(y||!w?"":w,S)}return c.use([].concat(d,[function($,w,y){$===2&&y.length&&y[0].lastIndexOf(n)>0&&(y[0]=y[0].replace(r,x))},g,function($){if($===-2){var w=h;return h=[],w}}])),v.hash=d.length?d.reduce(function($,w){return w.name||Ml(15),sa($,w.name)},5381).toString():"",v}var R$=ne.createContext();R$.Consumer;var F$=ne.createContext(),SS=(F$.Consumer,new T$),f1=wS();function CS(){return C.useContext(R$)||SS}function PS(){return C.useContext(F$)||f1}var OS=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=f1);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return Ml(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=f1),this.name+t.hash},e}(),_S=/([A-Z])/,kS=/([A-Z])/g,NS=/^ms-/,ES=function(e){return"-"+e.toLowerCase()};function tv(e){return _S.test(e)?e.replace(kS,ES).replace(NS,"-ms-"):e}var nv=function(e){return e==null||e===!1||e===""};function Aa(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=Aa(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(nv(e))return"";if(vm(e))return"."+e.styledComponentId;if(ll(e)){if(typeof(d=e)!="function"||d.prototype&&d.prototype.isReactComponent||!t)return e;var u=e(t);return Aa(u,t,n,r)}var d;return e instanceof OS?n?(e.inject(n,r),e.getName(r)):e:d1(e)?function c(h,g){var x,v,$=[];for(var w in h)h.hasOwnProperty(w)&&!nv(h[w])&&(Array.isArray(h[w])&&h[w].isCss||ll(h[w])?$.push(tv(w)+":",h[w],";"):d1(h[w])?$.push.apply($,c(h[w],w)):$.push(tv(w)+": "+(x=w,(v=h[w])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||x in z7?String(v).trim():v+"px")+";"));return g?[g+" {"].concat($,["}"]):$}(e):e.toString()}var rv=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function IS(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ll(e)||d1(e)?rv(Aa(Z2(Zd,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:rv(Aa(Z2(e,n)))}var TS=function(e,t,n){return n===void 0&&(n=si),e.theme!==n.theme&&e.theme||t||n.theme},AS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,RS=/(^-|-$)/g;function Sh(e){return e.replace(AS,"-").replace(RS,"")}var FS=function(e){return c1(A$(e)>>>0)};function mu(e){return typeof e=="string"&&!0}var h1=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},DS=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function MS(e,t,n){var r=e[n];h1(t)&&h1(r)?D$(r,t):e[n]=t}function D$(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(h1(a))for(var l in a)DS(l)&&MS(e,a[l],l)}return e}var M$=ne.createContext();M$.Consumer;var Ch={};function j$(e,t,n){var r=vm(e),i=!mu(e),o=t.attrs,a=o===void 0?Zd:o,l=t.componentId,u=l===void 0?function(p,b){var S=typeof p!="string"?"sc":Sh(p);Ch[S]=(Ch[S]||0)+1;var P=S+"-"+FS("5.3.6"+S+Ch[S]);return b?b+"-"+P:P}(t.displayName,t.parentComponentId):l,d=t.displayName,c=d===void 0?function(p){return mu(p)?"styled."+p:"Styled("+J2(p)+")"}(e):d,h=t.displayName&&t.componentId?Sh(t.displayName)+"-"+t.componentId:t.componentId||u,g=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,x=t.shouldForwardProp;r&&e.shouldForwardProp&&(x=t.shouldForwardProp?function(p,b,S){return e.shouldForwardProp(p,b,S)&&t.shouldForwardProp(p,b,S)}:e.shouldForwardProp);var v,$=new xS(n,h,r?e.componentStyle:void 0),w=$.isStatic&&a.length===0,y=function(p,b){return function(S,P,_,T){var R=S.attrs,W=S.componentStyle,z=S.defaultProps,ie=S.foldedComponentIds,M=S.shouldForwardProp,j=S.styledComponentId,J=S.target,F=function(oe,k,de){oe===void 0&&(oe=si);var Z=yr({},k,{theme:oe}),Ce={};return de.forEach(function(me){var ge,he,Ne,De=me;for(ge in ll(De)&&(De=De(Z)),De)Z[ge]=Ce[ge]=ge==="className"?(he=Ce[ge],Ne=De[ge],he&&Ne?he+" "+Ne:he||Ne):De[ge]}),[Z,Ce]}(TS(P,C.useContext(M$),z)||si,P,R),X=F[0],te=F[1],L=function(oe,k,de,Z){var Ce=CS(),me=PS(),ge=k?oe.generateAndInjectStyles(si,Ce,me):oe.generateAndInjectStyles(de,Ce,me);return ge}(W,T,X),N=_,E=te.$as||P.$as||te.as||P.as||J,U=mu(E),D=te!==P?yr({},P,{},te):P,H={};for(var Y in D)Y[0]!=="$"&&Y!=="as"&&(Y==="forwardedAs"?H.as=D[Y]:(M?M(Y,q2,E):!U||q2(Y))&&(H[Y]=D[Y]));return P.style&&te.style!==P.style&&(H.style=yr({},P.style,{},te.style)),H.className=Array.prototype.concat(ie,j,L!==j?L:null,P.className,te.className).filter(Boolean).join(" "),H.ref=N,C.createElement(E,H)}(v,p,b,w)};return y.displayName=c,(v=ne.forwardRef(y)).attrs=g,v.componentStyle=$,v.displayName=c,v.shouldForwardProp=x,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Zd,v.styledComponentId=h,v.target=r?e.target:e,v.withComponent=function(p){var b=t.componentId,S=function(_,T){if(_==null)return{};var R,W,z={},ie=Object.keys(_);for(W=0;W<ie.length;W++)R=ie[W],T.indexOf(R)>=0||(z[R]=_[R]);return z}(t,["componentId"]),P=b&&b+"-"+(mu(p)?p:Sh(J2(p)));return j$(p,yr({},S,{attrs:g,componentId:P}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?D$({},e.defaultProps,p):p}}),v.toString=function(){return"."+v.styledComponentId},i&&nS(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var p1=function(e){return function t(n,r,i){if(i===void 0&&(i=si),!Kd.isValidElementType(r))return Ml(1,String(r));var o=function(){return n(r,i,IS.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,yr({},i,{},a))},o.attrs=function(a){return t(n,r,yr({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(j$,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){p1[e]=p1(e)});const f=p1;var L$={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},iv=ne.createContext&&ne.createContext(L$),li=globalThis&&globalThis.__assign||function(){return li=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},li.apply(this,arguments)},jS=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function z$(e){return e&&e.map(function(t,n){return ne.createElement(t.tag,li({key:n},t.attr),z$(t.child))})}function _e(e){return function(t){return ne.createElement(LS,li({attr:li({},e.attr)},t),z$(e.child))}}function LS(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=jS(e,["attr","size","title"]),l=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),ne.createElement("svg",li({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:u,style:li(li({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&ne.createElement("title",null,o),e.children)};return iv!==void 0?ne.createElement(iv.Consumer,null,function(n){return t(n)}):t(L$)}function zS(e){return _e({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M14 325.3c2.3-4.2 5.2-4.9 9.7-2.5 10.4 5.6 20.6 11.4 31.2 16.7a595.88 595.88 0 0 0 127.4 46.3 616.61 616.61 0 0 0 63.2 11.8 603.33 603.33 0 0 0 95 5.2c17.4-.4 34.8-1.8 52.1-3.8a603.66 603.66 0 0 0 163.3-42.8c2.9-1.2 5.9-2 9.1-1.2 6.7 1.8 9 9 4.1 13.9a70 70 0 0 1-9.6 7.4c-30.7 21.1-64.2 36.4-99.6 47.9a473.31 473.31 0 0 1-75.1 17.6 431 431 0 0 1-53.2 4.8 21.3 21.3 0 0 0-2.5.3H308a21.3 21.3 0 0 0-2.5-.3c-3.6-.2-7.2-.3-10.7-.4a426.3 426.3 0 0 1-50.4-5.3A448.4 448.4 0 0 1 164 420a443.33 443.33 0 0 1-145.6-87c-1.8-1.6-3-3.8-4.4-5.7zM172 65.1l-4.3.6a80.92 80.92 0 0 0-38 15.1c-2.4 1.7-4.6 3.5-7.1 5.4a4.29 4.29 0 0 1-.4-1.4c-.4-2.7-.8-5.5-1.3-8.2-.7-4.6-3-6.6-7.6-6.6h-11.5c-6.9 0-8.2 1.3-8.2 8.2v209.3c0 1 0 2 .1 3 .2 3 2 4.9 4.9 5 7 .1 14.1.1 21.1 0 2.9 0 4.7-2 5-5 .1-1 .1-2 .1-3v-72.4c1.1.9 1.7 1.4 2.2 1.9 17.9 14.9 38.5 19.8 61 15.4 20.4-4 34.6-16.5 43.8-34.9 7-13.9 9.9-28.7 10.3-44.1.5-17.1-1.2-33.9-8.1-49.8-8.5-19.6-22.6-32.5-43.9-36.9-3.2-.7-6.5-1-9.8-1.5-2.8-.1-5.5-.1-8.3-.1zM124.6 107a3.48 3.48 0 0 1 1.7-3.3c13.7-9.5 28.8-14.5 45.6-13.2 14.9 1.1 27.1 8.4 33.5 25.9 3.9 10.7 4.9 21.8 4.9 33 0 10.4-.8 20.6-4 30.6-6.8 21.3-22.4 29.4-42.6 28.5-14-.6-26.2-6-37.4-13.9a3.57 3.57 0 0 1-1.7-3.3c.1-14.1 0-28.1 0-42.2s.1-28 0-42.1zm205.7-41.9c-1 .1-2 .3-2.9.4a148 148 0 0 0-28.9 4.1c-6.1 1.6-12 3.8-17.9 5.8-3.6 1.2-5.4 3.8-5.3 7.7.1 3.3-.1 6.6 0 9.9.1 4.8 2.1 6.1 6.8 4.9 7.8-2 15.6-4.2 23.5-5.7 12.3-2.3 24.7-3.3 37.2-1.4 6.5 1 12.6 2.9 16.8 8.4 3.7 4.8 5.1 10.5 5.3 16.4.3 8.3.2 16.6.3 24.9a7.84 7.84 0 0 1-.2 1.4c-.5-.1-.9 0-1.3-.1a180.56 180.56 0 0 0-32-4.9c-11.3-.6-22.5.1-33.3 3.9-12.9 4.5-23.3 12.3-29.4 24.9-4.7 9.8-5.4 20.2-3.9 30.7 2 14 9 24.8 21.4 31.7 11.9 6.6 24.8 7.4 37.9 5.4 15.1-2.3 28.5-8.7 40.3-18.4a7.36 7.36 0 0 1 1.6-1.1c.6 3.8 1.1 7.4 1.8 11 .6 3.1 2.5 5.1 5.4 5.2 5.4.1 10.9.1 16.3 0a4.84 4.84 0 0 0 4.8-4.7 26.2 26.2 0 0 0 .1-2.8v-106a80 80 0 0 0-.9-12.9c-1.9-12.9-7.4-23.5-19-30.4-6.7-4-14.1-6-21.8-7.1-3.6-.5-7.2-.8-10.8-1.3-3.9.1-7.9.1-11.9.1zm35 127.7a3.33 3.33 0 0 1-1.5 3c-11.2 8.1-23.5 13.5-37.4 14.9-5.7.6-11.4.4-16.8-1.8a20.08 20.08 0 0 1-12.4-13.3 32.9 32.9 0 0 1-.1-19.4c2.5-8.3 8.4-13 16.4-15.6a61.33 61.33 0 0 1 24.8-2.2c8.4.7 16.6 2.3 25 3.4 1.6.2 2.1 1 2.1 2.6-.1 4.8 0 9.5 0 14.3s-.2 9.4-.1 14.1zm259.9 129.4c-1-5-4.8-6.9-9.1-8.3a88.42 88.42 0 0 0-21-3.9 147.32 147.32 0 0 0-39.2 1.9c-14.3 2.7-27.9 7.3-40 15.6a13.75 13.75 0 0 0-3.7 3.5 5.11 5.11 0 0 0-.5 4c.4 1.5 2.1 1.9 3.6 1.8a16.2 16.2 0 0 0 2.2-.1c7.8-.8 15.5-1.7 23.3-2.5 11.4-1.1 22.9-1.8 34.3-.9a71.64 71.64 0 0 1 14.4 2.7c5.1 1.4 7.4 5.2 7.6 10.4.4 8-1.4 15.7-3.5 23.3-4.1 15.4-10 30.3-15.8 45.1a17.6 17.6 0 0 0-1 3c-.5 2.9 1.2 4.8 4.1 4.1a10.56 10.56 0 0 0 4.8-2.5 145.91 145.91 0 0 0 12.7-13.4c12.8-16.4 20.3-35.3 24.7-55.6.8-3.6 1.4-7.3 2.1-10.9v-17.3zM493.1 199q-19.35-53.55-38.7-107.2c-2-5.7-4.2-11.3-6.3-16.9-1.1-2.9-3.2-4.8-6.4-4.8-7.6-.1-15.2-.2-22.9-.1-2.5 0-3.7 2-3.2 4.5a43.1 43.1 0 0 0 1.9 6.1q29.4 72.75 59.1 145.5c1.7 4.1 2.1 7.6.2 11.8-3.3 7.3-5.9 15-9.3 22.3-3 6.5-8 11.4-15.2 13.3a42.13 42.13 0 0 1-15.4 1.1c-2.5-.2-5-.8-7.5-1-3.4-.2-5.1 1.3-5.2 4.8q-.15 5 0 9.9c.1 5.5 2 8 7.4 8.9a108.18 108.18 0 0 0 16.9 2c17.1.4 30.7-6.5 39.5-21.4a131.63 131.63 0 0 0 9.2-18.4q35.55-89.7 70.6-179.6a26.62 26.62 0 0 0 1.6-5.5c.4-2.8-.9-4.4-3.7-4.4-6.6-.1-13.3 0-19.9 0a7.54 7.54 0 0 0-7.7 5.2c-.5 1.4-1.1 2.7-1.6 4.1l-34.8 100c-2.5 7.2-5.1 14.5-7.7 22.2-.4-1.1-.6-1.7-.9-2.4z"}}]})(e)}function US(e){return _e({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}}]})(e)}function BS(e){return _e({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function HS(e){return _e({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"}}]})(e)}function cn(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]})(e)}function WS(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z"}}]})(e)}function ov(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]})(e)}function YS(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32z"}}]})(e)}function VS(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"}}]})(e)}function qS(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"}}]})(e)}function GS(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm122.7-533.4c18.7-18.7 49.1-18.7 67.9 0 18.7 18.7 18.7 49.1 0 67.9-18.7 18.7-49.1 18.7-67.9 0-18.7-18.7-18.7-49.1 0-67.9zm283.8 282.9l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z"}}]})(e)}function jl(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]})(e)}function QS(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm198.4-588.1a32 32 0 0 0-24.5.5L414.9 415 296.4 686c-3.6 8.2-3.6 17.5 0 25.7 3.4 7.8 9.7 13.9 17.7 17 3.8 1.5 7.7 2.2 11.7 2.2 4.4 0 8.7-.9 12.8-2.7l271-118.6 118.5-271a32.06 32.06 0 0 0-17.7-42.7zM576.8 534.4l26.2 26.2-42.4 42.4-26.2-26.2L380 644.4 447.5 490 422 464.4l42.4-42.4 25.5 25.5L644.4 380l-67.6 154.4zM464.4 422L422 464.4l25.5 25.6 86.9 86.8 26.2 26.2 42.4-42.4-26.2-26.2-86.8-86.9z"}}]})(e)}function Ra(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"}},{tag:"path",attr:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"}}]})(e)}function Fa(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]})(e)}function KS(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M668.6 320c0-4.4-3.6-8-8-8h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.5-1.1.9-2.4.9-3.7zM157.9 504.2a352.7 352.7 0 0 1 103.5-242.4c32.5-32.5 70.3-58.1 112.4-75.9 43.6-18.4 89.9-27.8 137.6-27.8 47.8 0 94.1 9.3 137.6 27.8 42.1 17.8 79.9 43.4 112.4 75.9 10 10 19.3 20.5 27.9 31.4l-50 39.1a8 8 0 0 0 3 14.1l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3l-47.8 37.4C770.7 146.3 648.6 82 511.5 82 277 82 86.3 270.1 82 503.8a8 8 0 0 0 8 8.2h60c4.3 0 7.8-3.5 7.9-7.8zM934 512h-60c-4.3 0-7.9 3.5-8 7.8a352.7 352.7 0 0 1-103.5 242.4 352.57 352.57 0 0 1-112.4 75.9c-43.6 18.4-89.9 27.8-137.6 27.8s-94.1-9.3-137.6-27.8a352.57 352.57 0 0 1-112.4-75.9c-10-10-19.3-20.5-27.9-31.4l49.9-39.1a8 8 0 0 0-3-14.1l-156.8-38.3c-5-1.2-9.9 2.6-9.9 7.7l-.8 161.7c0 6.7 7.7 10.5 12.9 6.3l47.8-37.4C253.3 877.7 375.4 942 512.5 942 747 942 937.7 753.9 942 520.2a8 8 0 0 0-8-8.2z"}}]})(e)}function ZS(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]})(e)}function JS(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M635 771.7c-34.5 28.6-78.2 44.3-123 44.3s-88.5-15.8-123-44.3a194.02 194.02 0 0 1-59.1-84.7H232v201h560V687h-97.9c-11.6 32.8-32 62.3-59.1 84.7z"}},{tag:"path",attr:{d:"M320 501h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}},{tag:"path",attr:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v201zm0-264H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v488z"}},{tag:"path",attr:{d:"M320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}}]})(e)}const U$=()=>s("div",{children:s(eC,{children:m(XS,{children:[m(xu,{children:[s(vu,{children:"Categories"}),m(yu,{children:[s(jt,{children:"Home Appliances and Founiture"}),s(jt,{children:"Food Items"})]})]}),m(xu,{children:[s(vu,{children:"Important Links"}),m(yu,{children:[s(jt,{children:"Terms & Conditions"}),s(jt,{children:"Return & Exchange"}),s(jt,{children:"Shipping & Deliveries"}),s(jt,{children:"Privacy Policies"})]})]}),m(xu,{children:[s(vu,{children:"Information"}),m(yu,{children:[s(jt,{children:"About Us"}),s(jt,{children:"Contact Us"}),s(jt,{children:"Blog"}),s(jt,{children:"Stories"}),s(jt,{children:"FAQ"})]})]}),m(xu,{children:[s(vu,{children:"Socials"}),m(yu,{children:[m(jt,{children:[s("span",{children:s(US,{size:"16px"})}),"Facebook"]}),m(jt,{children:[s("span",{children:s(BS,{size:"16px"})}),"Twitter"]}),m(jt,{children:[s("span",{children:s(qS,{size:"16px"})}),"Instagram"]})]})]})]})})}),jt=f.div`
  font-size: 14px;
  font-weight: 700;
  color: #4a4747;
  margin-bottom: 10px;

  span{
    margin-right: 10px;
  }
`,yu=f.div``,vu=f.div`
  font-size: 25px;
  font-weight: 800;
  color: #232121;
  margin-bottom: 20px;
`,xu=f.div``,XS=f.div`
  width: 95%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`,eC=f.div`
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
 */function ul(){return ul=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ul.apply(this,arguments)}var Qr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Qr||(Qr={}));const av="popstate";function tC(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return g1("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:dl(i)}return rC(t,n,null,e)}function at(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function nC(){return Math.random().toString(36).substr(2,8)}function sv(e,t){return{usr:e.state,key:e.key,idx:t}}function g1(e,t,n,r){return n===void 0&&(n=null),ul({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ha(t):t,{state:n,key:t&&t.key||r||nC()})}function dl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ha(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function rC(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Qr.Pop,u=null,d=c();d==null&&(d=0,a.replaceState(ul({},a.state,{idx:d}),""));function c(){return(a.state||{idx:null}).idx}function h(){l=Qr.Pop;let w=c(),y=w==null?null:w-d;d=w,u&&u({action:l,location:$.location,delta:y})}function g(w,y){l=Qr.Push;let p=g1($.location,w,y);n&&n(p,w),d=c()+1;let b=sv(p,d),S=$.createHref(p);try{a.pushState(b,"",S)}catch{i.location.assign(S)}o&&u&&u({action:l,location:$.location,delta:1})}function x(w,y){l=Qr.Replace;let p=g1($.location,w,y);n&&n(p,w),d=c();let b=sv(p,d),S=$.createHref(p);a.replaceState(b,"",S),o&&u&&u({action:l,location:$.location,delta:0})}function v(w){let y=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:dl(w);return at(y,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,y)}let $={get action(){return l},get location(){return e(i,a)},listen(w){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(av,h),u=w,()=>{i.removeEventListener(av,h),u=null}},createHref(w){return t(i,w)},createURL:v,encodeLocation(w){let y=v(w);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:g,replace:x,go(w){return a.go(w)}};return $}var lv;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(lv||(lv={}));function iC(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ha(t):t,i=W$(r.pathname||"/",n);if(i==null)return null;let o=B$(e);oC(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=pC(o[l],yC(i));return a}function B$(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};u.relativePath.startsWith("/")&&(at(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=ui([r,u.relativePath]),c=n.concat(u);o.children&&o.children.length>0&&(at(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),B$(o.children,t,c,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:fC(d,o.index),routesMeta:c})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let u of H$(o.path))i(o,a,u)}),t}function H$(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=H$(r.join("/")),l=[];return l.push(...a.map(u=>u===""?o:[o,u].join("/"))),i&&l.push(...a),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function oC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:hC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const aC=/^:\w+$/,sC=3,lC=2,uC=1,dC=10,cC=-2,uv=e=>e==="*";function fC(e,t){let n=e.split("/"),r=n.length;return n.some(uv)&&(r+=cC),t&&(r+=lC),n.filter(i=>!uv(i)).reduce((i,o)=>i+(aC.test(o)?sC:o===""?uC:dC),r)}function hC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function pC(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],u=a===n.length-1,d=i==="/"?t:t.slice(i.length)||"/",c=gC({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d);if(!c)return null;Object.assign(r,c.params);let h=l.route;o.push({params:r,pathname:ui([i,c.pathname]),pathnameBase:$C(ui([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=ui([i,c.pathnameBase]))}return o}function gC(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=mC(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,c,h)=>{if(c==="*"){let g=l[h]||"";a=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}return d[c]=vC(l[h]||"",c),d},{}),pathname:o,pathnameBase:a,pattern:e}}function mC(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),bm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function yC(e){try{return decodeURI(e)}catch(t){return bm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function vC(e,t){try{return decodeURIComponent(e)}catch(n){return bm(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function W$(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function bm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function xC(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ha(e):e;return{pathname:n?n.startsWith("/")?n:bC(n,t):t,search:wC(r),hash:SC(i)}}function bC(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ph(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Y$(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function V$(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ha(e):(i=ul({},e),at(!i.pathname||!i.pathname.includes("?"),Ph("?","pathname","search",i)),at(!i.pathname||!i.pathname.includes("#"),Ph("#","pathname","hash",i)),at(!i.search||!i.search.includes("#"),Ph("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let h=t.length-1;if(a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}l=h>=0?t[h]:"/"}let u=xC(i,l),d=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||c)&&(u.pathname+="/"),u}const ui=e=>e.join("/").replace(/\/\/+/g,"/"),$C=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),wC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,SC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function CC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function m1(){return m1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m1.apply(this,arguments)}function PC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const OC=typeof Object.is=="function"?Object.is:PC,{useState:_C,useEffect:kC,useLayoutEffect:NC,useDebugValue:EC}=pp;function IC(e,t,n){const r=t(),[{inst:i},o]=_C({inst:{value:r,getSnapshot:t}});return NC(()=>{i.value=r,i.getSnapshot=t,Oh(i)&&o({inst:i})},[e,r,t]),kC(()=>(Oh(i)&&o({inst:i}),e(()=>{Oh(i)&&o({inst:i})})),[e]),EC(r),r}function Oh(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!OC(n,r)}catch{return!0}}function TC(e,t,n){return t()}const AC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",RC=!AC,FC=RC?TC:IC;"useSyncExternalStore"in pp&&(e=>e.useSyncExternalStore)(pp);const q$=C.createContext(null),af=C.createContext(null),Ll=C.createContext(null),sf=C.createContext(null),uo=C.createContext({outlet:null,matches:[]}),G$=C.createContext(null);function DC(e,t){let{relative:n}=t===void 0?{}:t;Wa()||at(!1);let{basename:r,navigator:i}=C.useContext(Ll),{hash:o,pathname:a,search:l}=$m(e,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:ui([r,a])),i.createHref({pathname:u,search:l,hash:o})}function Wa(){return C.useContext(sf)!=null}function zl(){return Wa()||at(!1),C.useContext(sf).location}function nt(){Wa()||at(!1);let{basename:e,navigator:t}=C.useContext(Ll),{matches:n}=C.useContext(uo),{pathname:r}=zl(),i=JSON.stringify(Y$(n).map(l=>l.pathnameBase)),o=C.useRef(!1);return C.useEffect(()=>{o.current=!0}),C.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){t.go(l);return}let d=V$(l,JSON.parse(i),r,u.relative==="path");e!=="/"&&(d.pathname=d.pathname==="/"?e:ui([e,d.pathname])),(u.replace?t.replace:t.push)(d,u.state,u)},[e,t,i,r])}function Q$(){let{matches:e}=C.useContext(uo),t=e[e.length-1];return t?t.params:{}}function $m(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.useContext(uo),{pathname:i}=zl(),o=JSON.stringify(Y$(r).map(a=>a.pathnameBase));return C.useMemo(()=>V$(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function wm(e,t){Wa()||at(!1);let{navigator:n}=C.useContext(Ll),r=C.useContext(af),{matches:i}=C.useContext(uo),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=zl(),d;if(t){var c;let $=typeof t=="string"?Ha(t):t;l==="/"||(c=$.pathname)!=null&&c.startsWith(l)||at(!1),d=$}else d=u;let h=d.pathname||"/",g=l==="/"?h:h.slice(l.length)||"/",x=iC(e,{pathname:g}),v=zC(x&&x.map($=>Object.assign({},$,{params:Object.assign({},a,$.params),pathname:ui([l,n.encodeLocation?n.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?l:ui([l,n.encodeLocation?n.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),i,r||void 0);return t&&v?C.createElement(sf.Provider,{value:{location:m1({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Qr.Pop}},v):v}function MC(){let e=WC(),t=CC(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,o)}class jC extends C.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(uo.Provider,{value:this.props.routeContext},C.createElement(G$.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function LC(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(q$);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(uo.Provider,{value:t},r)}function zC(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||at(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,l)=>{let u=a.route.id?i==null?void 0:i[a.route.id]:null,d=n?a.route.errorElement||C.createElement(MC,null):null,c=t.concat(r.slice(0,l+1)),h=()=>C.createElement(LC,{match:a,routeContext:{outlet:o,matches:c}},u?d:a.route.element!==void 0?a.route.element:o);return n&&(a.route.errorElement||l===0)?C.createElement(jC,{location:n.location,component:d,error:u,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var dv;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(dv||(dv={}));var Xd;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Xd||(Xd={}));function UC(e){let t=C.useContext(af);return t||at(!1),t}function BC(e){let t=C.useContext(uo);return t||at(!1),t}function HC(e){let t=BC(),n=t.matches[t.matches.length-1];return n.route.id||at(!1),n.route.id}function WC(){var e;let t=C.useContext(G$),n=UC(Xd.UseRouteError),r=HC(Xd.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function YC(e){let{to:t,replace:n,state:r,relative:i}=e;Wa()||at(!1);let o=C.useContext(af),a=nt();return C.useEffect(()=>{o&&o.navigation.state!=="idle"||a(t,{replace:n,state:r,relative:i})}),null}function Bi(e){at(!1)}function VC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Qr.Pop,navigator:o,static:a=!1}=e;Wa()&&at(!1);let l=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=Ha(r));let{pathname:d="/",search:c="",hash:h="",state:g=null,key:x="default"}=r,v=C.useMemo(()=>{let $=W$(d,l);return $==null?null:{pathname:$,search:c,hash:h,state:g,key:x}},[l,d,c,h,g,x]);return v==null?null:C.createElement(Ll.Provider,{value:u},C.createElement(sf.Provider,{children:n,value:{location:v,navigationType:i}}))}function qC(e){let{children:t,location:n}=e,r=C.useContext(q$),i=r&&!t?r.router.routes:y1(t);return wm(i,n)}var cv;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(cv||(cv={}));new Promise(()=>{});function y1(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;if(r.type===C.Fragment){n.push.apply(n,y1(r.props.children,t));return}r.type!==Bi&&at(!1),!r.props.index||!r.props.children||at(!1);let o=[...t,i],a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=y1(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ec(){return ec=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ec.apply(this,arguments)}function K$(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function GC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function QC(e,t){return e.button===0&&(!t||t==="_self")&&!GC(e)}const KC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],ZC=["aria-current","caseSensitive","className","end","style","to","children"];function JC(e){let{basename:t,children:n,window:r}=e,i=C.useRef();i.current==null&&(i.current=tC({window:r,v5Compat:!0}));let o=i.current,[a,l]=C.useState({action:o.action,location:o.location});return C.useLayoutEffect(()=>o.listen(l),[o]),C.createElement(VC,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const XC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lf=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:u,to:d,preventScrollReset:c}=t,h=K$(t,KC),g=typeof d=="string"?d:dl(d),x=/^[a-z+]+:\/\//i.test(g)||g.startsWith("//"),v=g,$=!1;if(XC&&x){let b=new URL(window.location.href),S=g.startsWith("//")?new URL(b.protocol+g):new URL(g);S.origin===b.origin?v=S.pathname+S.search+S.hash:$=!0}let w=DC(v,{relative:i}),y=eP(v,{replace:a,state:l,target:u,preventScrollReset:c,relative:i});function p(b){r&&r(b),b.defaultPrevented||y(b)}return C.createElement("a",ec({},h,{href:x?g:w,onClick:$||o?r:p,ref:n,target:u}))}),ke=C.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:u,children:d}=t,c=K$(t,ZC),h=$m(u,{relative:c.relative}),g=zl(),x=C.useContext(af),{navigator:v}=C.useContext(Ll),$=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,w=g.pathname,y=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(w=w.toLowerCase(),y=y?y.toLowerCase():null,$=$.toLowerCase());let p=w===$||!a&&w.startsWith($)&&w.charAt($.length)==="/",b=y!=null&&(y===$||!a&&y.startsWith($)&&y.charAt($.length)==="/"),S=p?r:void 0,P;typeof o=="function"?P=o({isActive:p,isPending:b}):P=[o,p?"active":null,b?"pending":null].filter(Boolean).join(" ");let _=typeof l=="function"?l({isActive:p,isPending:b}):l;return C.createElement(lf,ec({},c,{"aria-current":S,className:P,ref:n,style:_,to:u}),typeof d=="function"?d({isActive:p,isPending:b}):d)});var fv;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(fv||(fv={}));var hv;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(hv||(hv={}));function eP(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=nt(),u=zl(),d=$m(e,{relative:a});return C.useCallback(c=>{if(QC(c,n)){c.preventDefault();let h=r!==void 0?r:dl(u)===dl(d);l(e,{replace:h,state:i,preventScrollReset:o,relative:a})}},[u,l,d,r,i,n,e,o,a])}const tP=()=>s("div",{children:s(oP,{children:m(iP,{children:[s(rP,{children:"WHY YOU SHOULD SELL ON CROSS AFRICA"}),m(nP,{children:[s(po,{children:"SELL MORE PRODUCTS"}),s(po,{children:"SELL MORE PRODUCTS"}),s(po,{children:"SELL MORE PRODUCTS"}),s(po,{children:"SELL MORE PRODUCTS"}),s(po,{children:"SELL MORE PRODUCTS"}),s(po,{children:"SELL MORE PRODUCTS"})]})]})})}),po=f.button`
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
`,nP=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`,rP=f.div`
  font-size: 30px;
  font-weight: 600;
  margin-top: 70px;
  text-align: center;
`,iP=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 500px;
  min-height: 100%;
`,oP=f.div`
  width: 100%;
  background-color: #902a75;
`,aP=()=>s("div",{children:s(cP,{children:m(dP,{children:[s(uP,{children:"GET STARTED TODAY"}),s(lP,{children:"Join the fast, trusted and best selling platformin Africa"}),s(sP,{to:"/auth",children:"Start Selling Today"})]})})}),sP=f(ke)`
    padding: 15px 70px;
    border: #D975C0;
    background-color: #D975C0;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
`,lP=f.div`
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 15px;
  text-align: center;
`,uP=f.div`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 15px;
    text-align: center;
`,dP=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 500px;
`,cP=f.div`
  width: 100%;
  /* background-color: #f6c8ea; */
`,fP=()=>s("div",{children:s(hP,{children:m(pP,{children:[m(gP,{to:"/",children:[s("img",{src:"/logo 1.png"}),s("div",{children:"Cross Africa"})]}),m(mP,{children:[s(pv,{to:"/auth",bd:"",bg:"ffff",hbg:"",hbd:"fff",children:"Sign Up"}),s(pv,{to:"/auth/signin",bd:"fgf",bg:"",hbg:"fff",hbd:"",children:"Log In"})]})]})})}),hP=f.div`
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
`,pP=f.div`
  width: 95%;
  height: 85px;
  display: flex;
  justify-content: space-between;
`,gP=f(ke)`
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
`,mP=f.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 350px;
`,pv=f(ke)`
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
`,yP=()=>m(Ws,{children:[s(fP,{}),m("div",{children:[s(SP,{children:m(wP,{children:[m($P,{children:[s(bP,{children:"ANYONE CAN SELL ON CROSS AFRICA"}),s(xP,{children:"Become a merchant and sell to thousands of people across africa"}),s(vP,{to:"/auth",children:"Start Selling Today"})]}),s(tP,{}),s(aP,{})]})}),s(U$,{})]})]}),vP=f(ke)`
  padding: 15px 70px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
`,xP=f.div`
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 15px;
  text-align: center;
`,bP=f.div`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center;
`,$P=f.div`
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
`,wP=f.div``,SP=f.div`
  width: 100%;
`,CP=()=>s("div",{children:s(EP,{children:m(NP,{children:[s(kP,{children:"Buying & Selling made easy accross Africa!"}),m(_P,{children:[s(xv,{children:s(OP,{children:m(vv,{children:[s(yv,{children:"Mobile Phones."}),s(mv,{children:"Buying made easy, get used phones, laptops, chargers etc.. at the comfort of your home"}),s(ke,{to:"/phone",style:{textDecoration:"none",color:"white"},children:s(gv,{children:"Buy Now"})})]})})}),s(xv,{children:s(PP,{children:m(vv,{children:[s(yv,{children:"Food & Groceries."}),s(mv,{children:"Buying made easy, food and groceries are all available, get them all at the comfort of your home."}),s(ke,{to:"/food",style:{textDecoration:"none",color:"white"},children:s(gv,{children:"Buy Now"})})]})})})]})]})})}),gv=f.button`
  margin-bottom: 20px;
  border: 0px;
  outline: none;
  background: #ee65cc;
  padding: 10px 30px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`,PP=f.div`
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
`;f.div`
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
`;const OP=f.div`
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
`;f.div`
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
`;const mv=f.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
`,yv=f.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 20px;
`,vv=f.div`
  /* background-color: gold; */
  margin-bottom: 20px;
`,xv=f.div`
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
`,_P=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`,kP=f.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 300px;
  /* color: ; */
`,NP=f.div`
  width: 90%;
  margin-top: 30px;
`,EP=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
`,IP={version:4,country_calling_codes:{1:["US","AG","AI","AS","BB","BM","BS","CA","DM","DO","GD","GU","JM","KN","KY","LC","MP","MS","PR","SX","TC","TT","VC","VG","VI"],7:["RU","KZ"],20:["EG"],27:["ZA"],30:["GR"],31:["NL"],32:["BE"],33:["FR"],34:["ES"],36:["HU"],39:["IT","VA"],40:["RO"],41:["CH"],43:["AT"],44:["GB","GG","IM","JE"],45:["DK"],46:["SE"],47:["NO","SJ"],48:["PL"],49:["DE"],51:["PE"],52:["MX"],53:["CU"],54:["AR"],55:["BR"],56:["CL"],57:["CO"],58:["VE"],60:["MY"],61:["AU","CC","CX"],62:["ID"],63:["PH"],64:["NZ"],65:["SG"],66:["TH"],81:["JP"],82:["KR"],84:["VN"],86:["CN"],90:["TR"],91:["IN"],92:["PK"],93:["AF"],94:["LK"],95:["MM"],98:["IR"],211:["SS"],212:["MA","EH"],213:["DZ"],216:["TN"],218:["LY"],220:["GM"],221:["SN"],222:["MR"],223:["ML"],224:["GN"],225:["CI"],226:["BF"],227:["NE"],228:["TG"],229:["BJ"],230:["MU"],231:["LR"],232:["SL"],233:["GH"],234:["NG"],235:["TD"],236:["CF"],237:["CM"],238:["CV"],239:["ST"],240:["GQ"],241:["GA"],242:["CG"],243:["CD"],244:["AO"],245:["GW"],246:["IO"],247:["AC"],248:["SC"],249:["SD"],250:["RW"],251:["ET"],252:["SO"],253:["DJ"],254:["KE"],255:["TZ"],256:["UG"],257:["BI"],258:["MZ"],260:["ZM"],261:["MG"],262:["RE","YT"],263:["ZW"],264:["NA"],265:["MW"],266:["LS"],267:["BW"],268:["SZ"],269:["KM"],290:["SH","TA"],291:["ER"],297:["AW"],298:["FO"],299:["GL"],350:["GI"],351:["PT"],352:["LU"],353:["IE"],354:["IS"],355:["AL"],356:["MT"],357:["CY"],358:["FI","AX"],359:["BG"],370:["LT"],371:["LV"],372:["EE"],373:["MD"],374:["AM"],375:["BY"],376:["AD"],377:["MC"],378:["SM"],380:["UA"],381:["RS"],382:["ME"],383:["XK"],385:["HR"],386:["SI"],387:["BA"],389:["MK"],420:["CZ"],421:["SK"],423:["LI"],500:["FK"],501:["BZ"],502:["GT"],503:["SV"],504:["HN"],505:["NI"],506:["CR"],507:["PA"],508:["PM"],509:["HT"],590:["GP","BL","MF"],591:["BO"],592:["GY"],593:["EC"],594:["GF"],595:["PY"],596:["MQ"],597:["SR"],598:["UY"],599:["CW","BQ"],670:["TL"],672:["NF"],673:["BN"],674:["NR"],675:["PG"],676:["TO"],677:["SB"],678:["VU"],679:["FJ"],680:["PW"],681:["WF"],682:["CK"],683:["NU"],685:["WS"],686:["KI"],687:["NC"],688:["TV"],689:["PF"],690:["TK"],691:["FM"],692:["MH"],850:["KP"],852:["HK"],853:["MO"],855:["KH"],856:["LA"],880:["BD"],886:["TW"],960:["MV"],961:["LB"],962:["JO"],963:["SY"],964:["IQ"],965:["KW"],966:["SA"],967:["YE"],968:["OM"],970:["PS"],971:["AE"],972:["IL"],973:["BH"],974:["QA"],975:["BT"],976:["MN"],977:["NP"],992:["TJ"],993:["TM"],994:["AZ"],995:["GE"],996:["KG"],998:["UZ"]},countries:{AC:["247","00","(?:[01589]\\d|[46])\\d{4}",[5,6]],AD:["376","00","(?:1|6\\d)\\d{7}|[135-9]\\d{5}",[6,8,9],[["(\\d{3})(\\d{3})","$1 $2",["[135-9]"]],["(\\d{4})(\\d{4})","$1 $2",["1"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]]],AE:["971","00","(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",[5,6,7,8,9,10,11,12],[["(\\d{3})(\\d{2,9})","$1 $2",["60|8"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[236]|[479][2-8]"],"0$1"],["(\\d{3})(\\d)(\\d{5})","$1 $2 $3",["[479]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"]],"0"],AF:["93","00","[2-7]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],"0"],AG:["1","011","(?:268|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([457]\\d{6})$|1","268$1",0,"268"],AI:["1","011","(?:264|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2457]\\d{6})$|1","264$1",0,"264"],AL:["355","00","(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",[6,7,8,9],[["(\\d{3})(\\d{3,4})","$1 $2",["80|9"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["[23578]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"]],"0"],AM:["374","00","(?:[1-489]\\d|55|60|77)\\d{6}",[8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]0"],"0 $1"],["(\\d{3})(\\d{5})","$1 $2",["2|3[12]"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[3-9]"],"0$1"]],"0"],AO:["244","00","[29]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[29]"]]]],AR:["54","00","(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",[10,11],[["(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",1],["(\\d)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",0,"$1 $2 $3-$4"],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 15-$3-$4",["91"],"0$1",0,"$1 $2 $3-$4"],["(\\d{3})(\\d{3})(\\d{5})","$1-$2-$3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9"],"0$1",0,"$1 $2 $3-$4"]],"0",0,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?","9$1"],AS:["1","011","(?:[58]\\d\\d|684|900)\\d{7}",[10],0,"1",0,"([267]\\d{6})$|1","684$1",0,"684"],AT:["43","00","1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",[4,5,6,7,8,9,10,11,12,13],[["(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],["(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],["(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],["(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],"0"],AU:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",[5,6,7,8,9,10,12],[["(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|4"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],"0",0,"(183[12])|0",0,0,0,[["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}",[9]],["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,["163\\d{2,6}",[5,6,7,8,9]],["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],AW:["297","00","(?:[25-79]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[25-9]"]]]],AX:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",[5,6,7,8,9,10,11,12],0,"0",0,0,0,0,"18",0,"00"],AZ:["994","00","365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[28]|2|365|46","1[28]|2|365[45]|46","1[28]|2|365(?:4|5[02])|46"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[13-9]"],"0$1"]],"0"],BA:["387","00","6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-3]|[7-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]|6[56]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],"0"],BB:["1","011","(?:246|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","246$1",0,"246"],BD:["880","00","[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{4,6})","$1-$2",["31[5-8]|[459]1"],"0$1"],["(\\d{3})(\\d{3,7})","$1-$2",["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],"0$1"],["(\\d{4})(\\d{3,6})","$1-$2",["[13-9]|22"],"0$1"],["(\\d)(\\d{7,8})","$1-$2",["2"],"0$1"]],"0"],BE:["32","00","4\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[239]|4[23]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[15-8]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4"],"0$1"]],"0"],BF:["226","00","[025-7]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[025-7]"]]]],BG:["359","00","00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",[6,7,8,9,12],[["(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["43[1-6]|70[1-9]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],["(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],"0"],BH:["973","00","[136-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[13679]|8[047]"]]]],BI:["257","00","(?:[267]\\d|31)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2367]"]]]],BJ:["229","00","[24-689]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-689]"]]]],BL:["590","00","590\\d{6}|(?:69|80|9\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["590(?:2[7-9]|5[12]|87)\\d{4}"],["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:395|76[018])\\d|475[01])\\d{4}"]]],BM:["1","011","(?:441|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","441$1",0,"441"],BN:["673","00","[2-578]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-578]"]]]],BO:["591","00(?:1\\d)?","(?:[2-467]\\d\\d|8001)\\d{5}",[8,9],[["(\\d)(\\d{7})","$1 $2",["[23]|4[46]"]],["(\\d{8})","$1",["[67]"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["8"]]],"0",0,"0(1\\d)?"],BQ:["599","00","(?:[34]1|7\\d)\\d{5}",[7],0,0,0,0,0,0,"[347]"],BR:["55","00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",[8,9,10,11],[["(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","4(?:02|37)0|[34]00"]],["(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)"],["(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)"]],"0",0,"(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2"],BS:["1","011","(?:242|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([3-8]\\d{6})$|1","242$1",0,"242"],BT:["975","00","[17]\\d{7}|[2-8]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|7"]]]],BW:["267","00","(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",[7,8,10],[["(\\d{2})(\\d{5})","$1 $2",["90"]],["(\\d{3})(\\d{4})","$1 $2",["[24-6]|3[15-79]"]],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37]"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["8"]]]],BY:["375","810","(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3})","$1 $2",["800"],"8 $1"],["(\\d{3})(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"],["(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:[56]|7[467])|2[1-3]"],"8 0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-4]"],"8 0$1"],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["[89]"],"8 $1"]],"8",0,"0|80?",0,0,0,0,"8~10"],BZ:["501","00","(?:0800\\d|[2-8])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],["(\\d)(\\d{3})(\\d{4})(\\d{3})","$1-$2-$3-$4",["0"]]]],CA:["1","011","(?:[2-8]\\d|90)\\d{8}|3\\d{6}",[7,10],0,"1",0,0,0,0,0,[["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|3[178]|50|68|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",[10]],["",[10]],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",[10]],["900[2-9]\\d{6}",[10]],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}",[10]],0,["310\\d{4}",[7]],0,["600[2-9]\\d{6}",[10]]]],CC:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",[9]],["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CD:["243","00","[189]\\d{8}|[1-68]\\d{6}",[7,9],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]"],"0$1"]],"0"],CF:["236","00","(?:[27]\\d{3}|8776)\\d{4}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[278]"]]]],CG:["242","00","222\\d{6}|(?:0\\d|80)\\d{7}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]]]],CH:["41","00","8\\d{11}|[2-9]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]|81"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["8"],"0$1"]],"0"],CI:["225","00","[02]\\d{9}",[10],[["(\\d{2})(\\d{2})(\\d)(\\d{5})","$1 $2 $3 $4",["2"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3 $4",["0"]]]],CK:["682","00","[2-578]\\d{4}",[5],[["(\\d{2})(\\d{3})","$1 $2",["[2-578]"]]]],CL:["56","(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0","12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",[9,10,11],[["(\\d{5})(\\d{4})","$1 $2",["219","2196"],"($1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[1-36]"],"($1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9[2-9]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],"($1)"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]]],CM:["237","00","[26]\\d{8}|88\\d{6,7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["88"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]|88"]]]],CN:["86","00|1(?:[12]\\d|79)\\d\\d00","1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}",[7,8,9,10,11,12],[["(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]","(?:10|2[0-57-9])(?:10|9[56])","10(?:10|9[56])|2[0-57-9](?:100|9[56])"],"0$1"],["(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]","(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]","85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])","85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1",1],["(\\d{3})(\\d{7,8})","$1 $2",["9"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",1]],"0",0,"(1(?:[12]\\d|79)\\d\\d)|0",0,0,0,0,"00"],CO:["57","00(?:4(?:[14]4|56)|[579])","(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}",[10,11],[["(\\d{3})(\\d{7})","$1 $2",["6"],"($1)"],["(\\d{3})(\\d{7})","$1 $2",["3[0-357]|91"]],["(\\d)(\\d{3})(\\d{7})","$1-$2-$3",["1"],"0$1",0,"$1 $2 $3"]],"0",0,"0(4(?:[14]4|56)|[579])?"],CR:["506","00","(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",[8,10],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[3-9]"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]"]]],0,0,"(19(?:0[0-2468]|1[09]|20|66|77|99))"],CU:["53","119","[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}",[6,7,8,10],[["(\\d{2})(\\d{4,6})","$1 $2",["2[1-4]|[34]"],"(0$1)"],["(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["5"],"0$1"],["(\\d{3})(\\d{7})","$1 $2",["8"],"0$1"]],"0"],CV:["238","0","(?:[2-59]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2-589]"]]]],CW:["599","00","(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[3467]"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["9[4-8]"]]],0,0,0,0,0,"[69]"],CX:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",[9]],["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CY:["357","00","(?:[279]\\d|[58]0)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[257-9]"]]]],CZ:["420","00","(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["96"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]]],DE:["49","00","[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",[4,5,6,7,8,9,10,11,12,13,14,15],[["(\\d{2})(\\d{3,13})","$1 $2",["3[02]|40|[68]9"],"0$1"],["(\\d{3})(\\d{3,12})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1","2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],"0$1"],["(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["138"],"0$1"],["(\\d{5})(\\d{2,10})","$1 $2",["3"],"0$1"],["(\\d{3})(\\d{5,11})","$1 $2",["181"],"0$1"],["(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:3|80)|9"],"0$1"],["(\\d{3})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],["(\\d{3})(\\d{7,12})","$1 $2",["8"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["18[68]"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["15[0568]"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["15[1279]"],"0$1"],["(\\d{3})(\\d{8})","$1 $2",["18"],"0$1"],["(\\d{3})(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"],["(\\d{4})(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],["(\\d{3})(\\d{2})(\\d{8})","$1 $2 $3",["15"],"0$1"]],"0"],DJ:["253","00","(?:2\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[27]"]]]],DK:["45","00","[2-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-9]"]]]],DM:["1","011","(?:[58]\\d\\d|767|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","767$1",0,"767"],DO:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,0,0,0,"8001|8[024]9"],DZ:["213","00","(?:[1-4]|[5-79]\\d|80)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"]],"0"],EC:["593","00","1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",[8,9,10,11],[["(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[2-7]"],"(0$1)",0,"$1-$2-$3"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],"0"],EE:["372","00","8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],["(\\d{4})(\\d{3,4})","$1 $2",["[45]|8(?:00|[1-49])","[45]|8(?:00[1-9]|[1-49])"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],EG:["20","00","[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",[8,9,10],[["(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],["(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|8[2468]|9[235-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[189]"],"0$1"]],"0"],EH:["212","00","[5-8]\\d{8}",[9],0,"0",0,0,0,0,"528[89]"],ER:["291","00","[178]\\d{6}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[178]"],"0$1"]],"0"],ES:["34","00","[5-9]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-9]"]]]],ET:["251","00","(?:11|[2-579]\\d)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-579]"],"0$1"]],"0"],FI:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",[5,6,7,8,9,10,11,12],[["(\\d)(\\d{4,9})","$1 $2",["[2568][1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"],["(\\d{3})(\\d{3,7})","$1 $2",["[12]00|[368]|70[07-9]"],"0$1"],["(\\d{2})(\\d{4,8})","$1 $2",["[1245]|7[135]"],"0$1"],["(\\d{2})(\\d{6,10})","$1 $2",["7"],"0$1"]],"0",0,0,0,0,"1[03-79]|[2-9]",0,"00"],FJ:["679","0(?:0|52)","45\\d{5}|(?:0800\\d|[235-9])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1 $2",["[235-9]|45"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],0,0,0,0,0,0,0,"00"],FK:["500","00","[2-7]\\d{4}",[5]],FM:["691","00","(?:[39]\\d\\d|820)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[389]"]]]],FO:["298","00","[2-9]\\d{5}",[6],[["(\\d{6})","$1",["[2-9]"]]],0,0,"(10(?:01|[12]0|88))"],FR:["33","00","[1-9]\\d{8}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],"0"],GA:["241","00","(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",[7,8],[["(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["11|[67]"],"0$1"]],0,0,"0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})","$1"],GB:["44","00","[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",[7,9,10],[["(\\d{3})(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["845","8454","84546","845464"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["800"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["1(?:[2-69][02-9]|[78])"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[25]|7(?:0|6[02-9])","[25]|7(?:0|6(?:[03-9]|2[356]))"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[1389]"],"0$1"]],"0",0,0,0,0,0,[["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-579])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:[02]\\d|1[0-246-9])))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",[9,10]],["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]],0," x"],GD:["1","011","(?:473|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","473$1",0,"473"],GE:["995","00","(?:[3-57]\\d\\d|800)\\d{6}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["32"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[57]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"]],"0"],GF:["594","00","[56]94\\d{6}|(?:80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[56]|9[47]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[89]"],"0$1"]],"0"],GG:["44","00","(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",[7,9,10],0,"0",0,"([25-9]\\d{5})$|0","1481$1",0,0,[["1481[25-9]\\d{5}",[10]],["7(?:(?:781|839)\\d|911[17])\\d{5}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]]],GH:["233","00","(?:[235]\\d{3}|800)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"]],"0"],GI:["350","00","(?:[25]\\d|60)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["2"]]]],GL:["299","00","(?:19|[2-689]\\d|70)\\d{4}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["19|[2-9]"]]]],GM:["220","00","[2-9]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],GN:["224","00","722\\d{6}|(?:3|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]]],GP:["590","00","590\\d{6}|(?:69|80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0",0,0,0,0,0,[["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1289]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"],["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:395|76[018])\\d|475[01])\\d{4}"]]],GQ:["240","00","222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],["(\\d{3})(\\d{6})","$1 $2",["[89]"]]]],GR:["30","00","5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",[10,11,12],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],["(\\d{4})(\\d{6})","$1 $2",["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2689]"]],["(\\d{3})(\\d{3,4})(\\d{5})","$1 $2 $3",["8"]]]],GT:["502","00","(?:1\\d{3}|[2-7])\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],GU:["1","011","(?:[58]\\d\\d|671|900)\\d{7}",[10],0,"1",0,"([3-9]\\d{6})$|1","671$1",0,"671"],GW:["245","00","[49]\\d{8}|4\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["40"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"]]]],GY:["592","001","9008\\d{3}|(?:[2-467]\\d\\d|862)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-46-9]"]]]],HK:["852","00(?:30|5[09]|[126-9]?)","8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",[5,6,7,8,9,11],[["(\\d{3})(\\d{2,5})","$1 $2",["900","9003"]],["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{3})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],0,0,0,0,0,0,0,"00"],HN:["504","00","8\\d{10}|[237-9]\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1-$2",["[237-9]"]]]],HR:["385","00","(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",[6,7,8,9],[["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["6[01]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-5]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],"0"],HT:["509","00","(?:[2-489]\\d|55)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[2-589]"]]]],HU:["36","00","[235-7]\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"06 $1"]],"06"],ID:["62","00[89]","(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}",[7,8,9,10,11,12,13],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],["(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],["(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],["(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],"(0$1)"],["(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],["(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],["(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"]],"0"],IE:["353","00","(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],["(\\d{3})(\\d{5})","$1 $2",["[45]0"],"(0$1)"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2569]|4[1-69]|7[14]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[78]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["4"],"(0$1)"],["(\\d{2})(\\d)(\\d{3})(\\d{4})","$1 $2 $3 $4",["8"],"0$1"]],"0"],IL:["972","0(?:0|1[2-9])","1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",[7,8,9,10,11,12],[["(\\d{4})(\\d{3})","$1-$2",["125"]],["(\\d{4})(\\d{2})(\\d{2})","$1-$2-$3",["121"]],["(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1-$2-$3",["12"]],["(\\d{4})(\\d{6})","$1-$2",["159"]],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["15"]]],"0"],IM:["44","00","1624\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([25-8]\\d{5})$|0","1624$1",0,"74576|(?:16|7[56])24"],IN:["91","00","(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",[8,9,10,11,12,13],[["(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],0,1],["(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],0,1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"],"0$1",1],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]","1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],"0$1",1],["(\\d{5})(\\d{5})","$1 $2",["[6-9]"],"0$1",1],["(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["1(?:6|8[06])","1(?:6|8[06]0)"],0,1],["(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18"],0,1]],"0"],IO:["246","00","3\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["3"]]]],IQ:["964","00","(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],IR:["98","00","[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",[4,5,6,7,10],[["(\\d{4,5})","$1",["96"],"0$1"],["(\\d{2})(\\d{4,5})","$1 $2",["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"]],"0"],IS:["354","00|1(?:0(?:01|[12]0)|100)","(?:38\\d|[4-9])\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],0,0,0,0,0,0,0,"00"],IT:["39","00","0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",[6,7,8,9,10,11],[["(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],["(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],["(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],["(\\d{4})(\\d{4})","$1 $2",["894"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1(?:44|[679])|[378]"]],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]|14"]],["(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["3"]]],0,0,0,0,0,0,[["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],["3[1-9]\\d{8}|3[2-9]\\d{7}",[9,10]],["80(?:0\\d{3}|3)\\d{3}",[6,9]],["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}",[6,8,9,10]],["1(?:78\\d|99)\\d{6}",[9,10]],0,0,0,["55\\d{8}",[10]],["84(?:[08]\\d{3}|[17])\\d{3}",[6,9]]]],JE:["44","00","1534\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([0-24-8]\\d{5})$|0","1534$1",0,0,[["1534[0-24-8]\\d{5}"],["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"],["80(?:07(?:35|81)|8901)\\d{4}"],["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],["701511\\d{4}"],0,["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],["56\\d{8}"]]],JM:["1","011","(?:[58]\\d\\d|658|900)\\d{7}",[10],0,"1",0,0,0,0,"658|876"],JO:["962","00","(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],["(\\d{3})(\\d{5,6})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["70"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],JP:["81","010","00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",[8,9,10,11,12,13,14,15,16,17],[["(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],["(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:80|9[16])","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])","[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],"0$1"],["(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[289][2-9]|5[3-9]|7[2-4679]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[257-9]"],"0$1"]],"0"],KE:["254","000","(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",[7,8,9,10],[["(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[17]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0"],KG:["996","00","8\\d{9}|(?:[235-8]\\d|99)\\d{7}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["3(?:1[346]|[24-79])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-79]|88"],"0$1"],["(\\d{3})(\\d{3})(\\d)(\\d{2,3})","$1 $2 $3 $4",["8"],"0$1"]],"0"],KH:["855","00[14-9]","1\\d{9}|[1-9]\\d{7,8}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],KI:["686","00","(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",[5,8],0,"0"],KM:["269","00","[3478]\\d{6}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[3478]"]]]],KN:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","869$1",0,"869"],KP:["850","00|99","85\\d{6}|(?:19\\d|[2-7])\\d{7}",[8,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"]],"0"],KR:["82","00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))","00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",[5,6,8,9,10,11,12,13,14],[["(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1"],["(\\d{4})(\\d{4})","$1-$2",["1"]],["(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60|8"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1"]],"0",0,"0(8(?:[1-46-8]|5\\d\\d))?"],KW:["965","00","18\\d{5}|(?:[2569]\\d|41)\\d{6}",[7,8],[["(\\d{4})(\\d{3,4})","$1 $2",["[169]|2(?:[235]|4[1-35-9])|52"]],["(\\d{3})(\\d{5})","$1 $2",["[245]"]]]],KY:["1","011","(?:345|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","345$1",0,"345"],KZ:["7","810","(?:33622|8\\d{8})\\d{5}|[78]\\d{9}",[10,14],0,"8",0,0,0,0,"33|7",0,"8~10"],LA:["856","00","[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["30[013-9]"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[23]"],"0$1"]],"0"],LB:["961","00","[27-9]\\d{7}|[13-9]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27-9]"]]],"0"],LC:["1","011","(?:[58]\\d\\d|758|900)\\d{7}",[10],0,"1",0,"([2-8]\\d{6})$|1","758$1",0,"758"],LI:["423","00","[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",[7,9],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2379]|8(?:0[09]|7)","[2379]|8(?:0(?:02|9)|7)"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["69"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],"0",0,"(1001)|0"],LK:["94","00","[1-9]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"],"0$1"]],"0"],LR:["231","00","(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[4-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23578]"],"0$1"]],"0"],LS:["266","00","(?:[256]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2568]"]]]],LT:["370","00","(?:[3469]\\d|52|[78]0)\\d{6}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["52[0-7]"],"(8-$1)",1],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"8 $1",1],["(\\d{2})(\\d{6})","$1 $2",["37|4(?:[15]|6[1-8])"],"(8-$1)",1],["(\\d{3})(\\d{5})","$1 $2",["[3-6]"],"(8-$1)",1]],"8",0,"[08]"],LU:["352","00","35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",[4,5,6,7,8,9,10,11],[["(\\d{2})(\\d{3})","$1 $2",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20[2-689]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"]],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["80[01]|90[015]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})","$1 $2 $3 $4",["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]],0,0,"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],LV:["371","00","(?:[268]\\d|90)\\d{6}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[269]|8[01]"]]]],LY:["218","00","[2-9]\\d{8}",[9],[["(\\d{2})(\\d{7})","$1-$2",["[2-9]"],"0$1"]],"0"],MA:["212","00","[5-8]\\d{8}",[9],[["(\\d{5})(\\d{4})","$1-$2",["5(?:29|38)","5(?:29[1289]|389)","529(?:1[1-46-9]|2[013-8]|90)|5(?:298|389)[0-46-9]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5[45]"],"0$1"],["(\\d{4})(\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|9)|892","5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"],"0$1"],["(\\d{2})(\\d{7})","$1-$2",["8"],"0$1"],["(\\d{3})(\\d{6})","$1-$2",["[5-7]"],"0$1"]],"0",0,0,0,0,0,[["5293[01]\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|9[0-289])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[0189]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|2[0-2]|6[0-8]|8[0-3]))\\d{6}"],["80\\d{7}"],["89\\d{7}"],0,0,0,0,["592(?:4[0-2]|93)\\d{4}"]]],MC:["377","00","(?:[3489]|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[389]"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1"]],"0"],MD:["373","00","(?:[235-7]\\d|[89]0)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[25-7]"],"0$1"]],"0"],ME:["382","00","(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"0$1"]],"0"],MF:["590","00","590\\d{6}|(?:69|80|9\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"],["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:395|76[018])\\d|475[01])\\d{4}"]]],MG:["261","00","[23]\\d{8}",[9],[["(\\d{2})(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"],"0$1"]],"0",0,"([24-9]\\d{6})$|0","20$1"],MH:["692","011","329\\d{4}|(?:[256]\\d|45)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1-$2",["[2-6]"]]],"1"],MK:["389","00","[2-578]\\d{7}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2|34[47]|4(?:[37]7|5[47]|64)"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],"0"],ML:["223","00","[24-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]]],MM:["95","00","1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",[6,7,8,9,10],[["(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[4-7]|8[1-35]"],"0$1"],["(\\d)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92"],"0$1"],["(\\d)(\\d{5})(\\d{4})","$1 $2 $3",["9"],"0$1"]],"0"],MN:["976","001","[12]\\d{7,9}|[5-9]\\d{7}",[8,9,10],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[12]1"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[5-9]"]],["(\\d{3})(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["[12](?:27|3[2-8]|4[2-68]|5[1-4689])","[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["[12]"],"0$1"]],"0"],MO:["853","00","0800\\d{3}|(?:28|[68]\\d)\\d{6}",[7,8],[["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{4})(\\d{4})","$1 $2",["[268]"]]]],MP:["1","011","[58]\\d{9}|(?:67|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","670$1",0,"670"],MQ:["596","00","596\\d{6}|(?:69|80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],MR:["222","00","(?:[2-4]\\d\\d|800)\\d{5}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-48]"]]]],MS:["1","011","(?:[58]\\d\\d|664|900)\\d{7}",[10],0,"1",0,"([34]\\d{6})$|1","664$1",0,"664"],MT:["356","00","3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2357-9]"]]]],MU:["230","0(?:0|[24-7]0|3[03])","(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[2-46]|8[013]"]],["(\\d{4})(\\d{4})","$1 $2",["[57]"]],["(\\d{5})(\\d{5})","$1 $2",["8"]]],0,0,0,0,0,0,0,"020"],MV:["960","0(?:0|19)","(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",[7,10],[["(\\d{3})(\\d{4})","$1-$2",["[34679]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"]]],0,0,0,0,0,0,0,"00"],MW:["265","00","(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",[7,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[137-9]"],"0$1"]],"0"],MX:["52","0[09]","1(?:(?:[27]2|44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}",[10,11],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"],0,1],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 $3 $4",["1(?:33|5[56]|81)"],0,1],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 $3 $4",["1"],0,1]],"01",0,"0(?:[12]|4[45])|1",0,0,0,0,"00"],MY:["60","00","1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1-$2 $3",["1(?:[02469]|[378][1-9]|53)|8","1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3-$4",["1(?:[367]|80)"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2 $3",["1"],"0$1"]],"0"],MZ:["258","00","(?:2|8\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-79]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],NA:["264","00","[68]\\d{7,8}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["87"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],NC:["687","00","(?:050|[2-57-9]\\d\\d)\\d{3}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[02-57-9]"]]]],NE:["227","00","[027-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["08"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[089]|2[013]|7[04]"]]]],NF:["672","00","[13]\\d{5}",[6],[["(\\d{2})(\\d{4})","$1 $2",["1[0-3]"]],["(\\d)(\\d{5})","$1 $2",["[13]"]]],0,0,"([0-258]\\d{4})$","3$1"],NG:["234","009","(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}",[7,8,10,11,12,13,14],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["78"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|9(?:0[3-9]|[1-9])"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[3-7]|8[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]"],"0$1"],["(\\d{3})(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]"],"0$1"]],"0"],NI:["505","00","(?:1800|[25-8]\\d{3})\\d{4}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[125-8]"]]]],NL:["31","00","(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",[5,6,7,8,9,10,11],[["(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],["(\\d)(\\d{8})","$1 $2",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-578]|91"],"0$1"],["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3",["9"],"0$1"]],"0"],NO:["47","00","(?:0|[2-9]\\d{3})\\d{4}",[5,8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[489]|59"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-7]"]]],0,0,0,0,0,"[02-689]|7[0-8]"],NP:["977","00","(?:1\\d|9)\\d{9}|[1-9]\\d{7}",[8,10,11],[["(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],["(\\d{2})(\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],"0$1"],["(\\d{3})(\\d{7})","$1-$2",["9"]]],"0"],NR:["674","00","(?:444|(?:55|8\\d)\\d|666)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[4-68]"]]]],NU:["683","00","(?:[47]|888\\d)\\d{3}",[4,7],[["(\\d{3})(\\d{4})","$1 $2",["8"]]]],NZ:["64","0(?:0|161)","[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,8})","$1 $2",["8[1-579]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["50[036-8]|[89]0","50(?:[0367]|88)|[89]0"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["24|[346]|7[2-57-9]|9[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|[59]|80"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1|2[028]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:[169]|7[0-35-9])|7|86"],"0$1"]],"0",0,0,0,0,0,0,"00"],OM:["968","00","(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",[7,8,9],[["(\\d{3})(\\d{4,6})","$1 $2",["[58]"]],["(\\d{2})(\\d{6})","$1 $2",["2"]],["(\\d{4})(\\d{4})","$1 $2",["[179]"]]]],PA:["507","00","(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",[7,8,10,11],[["(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],["(\\d{4})(\\d{4})","$1-$2",["[68]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]]],PE:["51","00|19(?:1[124]|77|90)00","(?:[14-8]|9\\d)\\d{7}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["1"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[4-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"]]],"0",0,0,0,0,0,0,"00"," Anexo "],PF:["689","00","4\\d{5}(?:\\d{2})?|8\\d{7,8}",[6,8,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4|8[7-9]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],PG:["675","00|140[1-3]","(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["18|[2-69]|85"]],["(\\d{4})(\\d{4})","$1 $2",["[78]"]]],0,0,0,0,0,0,0,"00"],PH:["63","00","(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",[6,8,9,10,11,12,13],[["(\\d)(\\d{5})","$1 $2",["2"],"(0$1)"],["(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],["(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|8[2-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],"0"],PK:["92","00","122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,7})","$1 $2 $3",["[89]0"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["1"]],["(\\d{3})(\\d{6,7})","$1 $2",["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])","9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],"(0$1)"],["(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],["(\\d{5})(\\d{5})","$1 $2",["58"],"(0$1)"],["(\\d{3})(\\d{7})","$1 $2",["3"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[24-9]"],"(0$1)"]],"0"],PL:["48","00","(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",[6,7,8,9,10],[["(\\d{5})","$1",["19"]],["(\\d{3})(\\d{3})","$1 $2",["11|20|64"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1","(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2-8]|[2-7]|8[1-79]|9[145]"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["8"]]]],PM:["508","00","[45]\\d{5}|(?:708|80\\d)\\d{6}",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[45]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],PR:["1","011","(?:[589]\\d\\d|787)\\d{7}",[10],0,"1",0,0,0,0,"787|939"],PS:["970","00","[2489]2\\d{6}|(?:1\\d|5)\\d{8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2489]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],PT:["351","00","1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["16|[236-9]"]]]],PW:["680","01[12]","(?:[24-8]\\d\\d|345|900)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],PY:["595","00","59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],["(\\d{3})(\\d{4,5})","$1 $2",["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["87"]],["(\\d{3})(\\d{6})","$1 $2",["9(?:[5-79]|8[1-6])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["9"]]],"0"],QA:["974","00","800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",[7,8,9,11],[["(\\d{3})(\\d{4})","$1 $2",["2[16]|8"]],["(\\d{4})(\\d{4})","$1 $2",["[3-7]"]]]],RE:["262","00","(?:26|[689]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2689]"],"0$1"]],"0",0,0,0,0,0,[["26(?:2\\d\\d|3(?:0\\d|1[0-3]))\\d{4}"],["(?:69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|6[0-6]|7[0-27]|8[0-8]|9[0-479]))|9(?:399[0-2]|4790|76(?:2[27]|3[0-37]|9\\d)))\\d{4}"],["80\\d{7}"],["89[1-37-9]\\d{6}"],0,0,0,0,0,["8(?:1[019]|2[0156]|84|90)\\d{6}"]]],RO:["40","00","(?:[2378]\\d|90)\\d{7}|[23]\\d{5}",[6,9],[["(\\d{3})(\\d{3})","$1 $2",["2[3-6]","2[3-6]\\d9"],"0$1"],["(\\d{2})(\\d{4})","$1 $2",["219|31"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[237-9]"],"0$1"]],"0",0,0,0,0,0,0,0," int "],RS:["381","00","38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",[6,7,8,9,10,11,12],[["(\\d{3})(\\d{3,9})","$1 $2",["(?:2[389]|39)0|[7-9]"],"0$1"],["(\\d{2})(\\d{5,10})","$1 $2",["[1-36]"],"0$1"]],"0"],RU:["7","810","8\\d{13}|[347-9]\\d{9}",[10,14],[["(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],"8 ($1)",1],["(\\d{5})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))","7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[349]|8(?:[02-7]|1[1-8])"],"8 ($1)",1],["(\\d{4})(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3 $4",["8"],"8 ($1)"]],"8",0,0,0,0,"3[04-689]|[489]",0,"8~10"],RW:["250","00","(?:06|[27]\\d\\d|[89]00)\\d{6}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"]]],"0"],SA:["966","00","92\\d{7}|(?:[15]|8\\d)\\d{8}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["9"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["81"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],"0"],SB:["677","0[01]","(?:[1-6]|[7-9]\\d\\d)\\d{4}",[5,7],[["(\\d{2})(\\d{5})","$1 $2",["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],SC:["248","010|0[0-2]","800\\d{4}|(?:[249]\\d|64)\\d{5}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]|9[57]"]]],0,0,0,0,0,0,0,"00"],SD:["249","00","[19]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[19]"],"0$1"]],"0"],SE:["46","00","(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{4})","$1-$2",["9(?:00|39|44|9)"],"0$1",0,"$1 $2"],["(\\d{2})(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3"],["(\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{2,3})(\\d{3})","$1-$2 $3",["9(?:00|39|44)"],"0$1",0,"$1 $2 $3"],["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3 $4"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["10|7"],"0$1",0,"$1 $2 $3 $4"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["[26]"],"0$1",0,"$1 $2 $3 $4 $5"]],"0"],SG:["65","0[0-3]\\d","(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",[8,10,11],[["(\\d{4})(\\d{4})","$1 $2",["[369]|8(?:0[1-6]|[1-9])"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],["(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],SH:["290","00","(?:[256]\\d|8)\\d{3}",[4,5],0,0,0,0,0,0,"[256]"],SI:["386","00|10(?:22|66|88|99)","[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",[5,6,7,8],[["(\\d{2})(\\d{3,6})","$1 $2",["8[09]|9"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["59|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-57]"],"(0$1)"]],"0",0,0,0,0,0,0,"00"],SJ:["47","00","0\\d{4}|(?:[489]\\d|[57]9)\\d{6}",[5,8],0,0,0,0,0,0,"79"],SK:["421","00","[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",[6,7,9],[["(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"]],"0"],SL:["232","00","(?:[237-9]\\d|66)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[236-9]"],"(0$1)"]],"0"],SM:["378","00","(?:0549|[5-7]\\d)\\d{6}",[8,10],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],["(\\d{4})(\\d{6})","$1 $2",["0"]]],0,0,"([89]\\d{5})$","0549$1"],SN:["221","00","(?:[378]\\d|93)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]]]],SO:["252","00","[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",[6,7,8,9],[["(\\d{2})(\\d{4})","$1 $2",["8[125]"]],["(\\d{6})","$1",["[134]"]],["(\\d)(\\d{6})","$1 $2",["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],["(\\d)(\\d{7})","$1 $2",["(?:2|90)4|[67]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3478]|64|90"]],["(\\d{2})(\\d{5,7})","$1 $2",["1|28|6(?:0[5-7]|[1-35-9])|9[2-9]"]]],"0"],SR:["597","00","(?:[2-5]|68|[78]\\d)\\d{5}",[6,7],[["(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],["(\\d{3})(\\d{3})","$1-$2",["[2-5]"]],["(\\d{3})(\\d{4})","$1-$2",["[6-8]"]]]],SS:["211","00","[19]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[19]"],"0$1"]],"0"],ST:["239","00","(?:22|9\\d)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[29]"]]]],SV:["503","00","[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",[7,8,11],[["(\\d{3})(\\d{4})","$1 $2",["[89]"]],["(\\d{4})(\\d{4})","$1 $2",["[267]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]]],SX:["1","011","7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"(5\\d{6})$|1","721$1",0,"721"],SY:["963","00","[1-39]\\d{8}|[1-5]\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-5]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1",1]],"0"],SZ:["268","00","0800\\d{4}|(?:[237]\\d|900)\\d{6}",[8,9],[["(\\d{4})(\\d{4})","$1 $2",["[0237]"]],["(\\d{5})(\\d{4})","$1 $2",["9"]]]],TA:["290","00","8\\d{3}",[4],0,0,0,0,0,0,"8"],TC:["1","011","(?:[58]\\d\\d|649|900)\\d{7}",[10],0,"1",0,"([2-479]\\d{6})$|1","649$1",0,"649"],TD:["235","00|16","(?:22|[69]\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2679]"]]],0,0,0,0,0,0,0,"00"],TG:["228","00","[279]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[279]"]]]],TH:["66","00[1-9]","(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",[8,9,10,13],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],TJ:["992","810","(?:00|[1-57-9]\\d)\\d{7}",[9],[["(\\d{6})(\\d)(\\d{2})","$1 $2 $3",["331","3317"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[34]7|91[78]"]],["(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3[1-5]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[0-57-9]"]]],0,0,0,0,0,0,0,"8~10"],TK:["690","00","[2-47]\\d{3,6}",[4,5,6,7]],TL:["670","00","7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],["(\\d{4})(\\d{4})","$1 $2",["7"]]]],TM:["993","810","[1-6]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-5]"],"(8 $1)"],["(\\d{2})(\\d{6})","$1 $2",["6"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],TN:["216","00","[2-57-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]"]]]],TO:["676","00","(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",[5,7],[["(\\d{2})(\\d{3})","$1-$2",["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[5-9]"]]]],TR:["90","00","4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",[7,10,12,13],[["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[01589]|90"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:[0-59]|61)","5(?:[0-59]|616)","5(?:[0-59]|6161)"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24][1-8]|3[1-9]"],"(0$1)",1],["(\\d{3})(\\d{3})(\\d{6,7})","$1 $2 $3",["80"],"0$1",1]],"0"],TT:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-46-8]\\d{6})$|1","868$1",0,"868"],TV:["688","00","(?:2|7\\d\\d|90)\\d{4}",[5,6,7],[["(\\d{2})(\\d{3})","$1 $2",["2"]],["(\\d{2})(\\d{4})","$1 $2",["90"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],TW:["886","0(?:0[25-79]|19)","[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",[7,8,9,10,11],[["(\\d{2})(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[258]0"],"0$1"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]","[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,5})","$1 $2 $3",["7"],"0$1"]],"0",0,0,0,0,0,0,0,"#"],TZ:["255","00[056]","(?:[25-8]\\d|41|90)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["5"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"]],"0"],UA:["380","00","[89]\\d{9}|[3-9]\\d{8}",[9,10],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]","6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])","3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|89|9[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0",0,0,0,0,0,0,"0~0"],UG:["256","00[057]","800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",[9],[["(\\d{4})(\\d{5})","$1 $2",["202","2024"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[27-9]|4(?:6[45]|[7-9])"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[34]"],"0$1"]],"0"],US:["1","011","[2-9]\\d{9}|3\\d{6}",[10],[["(\\d{3})(\\d{4})","$1-$2",["310"],0,1],["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",["[2-9]"],0,1,"$1-$2-$3"]],"1",0,0,0,0,0,[["(?:47220[01]|5(?:05(?:[2-57-9]\\d\\d|6(?:[0-35-9]\\d|4[46]))|57200))\\d{4}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[0-2]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],[""],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],["900[2-9]\\d{6}"],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]]],UY:["598","0(?:0|1[3-9]\\d)","(?:0004|4)\\d{9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}",[7,8,10,13],[["(\\d{3})(\\d{4})","$1 $2",["405|8|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[124]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["4"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["0"]]],"0",0,0,0,0,0,0,"00"," int. "],UZ:["998","810","(?:33|[5-79]\\d|88)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[35-9]"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],VA:["39","00","0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",[6,7,8,9,10,11],0,0,0,0,0,0,"06698"],VC:["1","011","(?:[58]\\d\\d|784|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","784$1",0,"784"],VE:["58","00","[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",[10],[["(\\d{3})(\\d{7})","$1-$2",["[24-689]"],"0$1"]],"0"],VG:["1","011","(?:284|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-578]\\d{6})$|1","284$1",0,"284"],VI:["1","011","[58]\\d{9}|(?:34|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","340$1",0,"340"],VN:["84","00","[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["80"],"0$1",1],["(\\d{4})(\\d{4,6})","$1 $2",["1"],0,1],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[69]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3578]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",1]],"0"],VU:["678","00","[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",[5,7],[["(\\d{3})(\\d{4})","$1 $2",["[57-9]"]]]],WF:["681","00","(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[478]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],WS:["685","0","(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",[5,6,7,10],[["(\\d{5})","$1",["[2-5]|6[1-9]"]],["(\\d{3})(\\d{3,7})","$1 $2",["[68]"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],XK:["383","00","[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[23]"],"0$1"]],"0"],YE:["967","00","(?:1|7\\d)\\d{7}|[1-7]\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7(?:[24-6]|8[0-7])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],"0"],YT:["262","00","(?:(?:(?:26|63)9|80\\d)\\d\\d|93980)\\d{4}",[9],0,"0",0,0,0,0,"269|63|9398"],ZA:["27","00","[1-79]\\d{8}|8\\d{4,9}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],ZM:["260","00","800\\d{6}|(?:21|63|[79]\\d)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[79]"],"0$1"]],"0"],ZW:["263","00","2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",[5,6,7,8,9,10],[["(\\d{3})(\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"],"0$1"],["(\\d)(\\d{3})(\\d{2,4})","$1 $2 $3",["[49]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["80"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2","2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)","2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["29[013-9]|39|54"],"0$1"],["(\\d{4})(\\d{3,5})","$1 $2",["(?:25|54)8","258|5483"],"0$1"]],"0"]},nonGeographic:{800:["800",0,"(?:00|[1-9]\\d)\\d{6}",[8],[["(\\d{4})(\\d{4})","$1 $2",["\\d"]]],0,0,0,0,0,0,[0,0,["(?:00|[1-9]\\d)\\d{6}"]]],808:["808",0,"[1-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[1-9]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,0,["[1-9]\\d{7}"]]],870:["870",0,"7\\d{11}|[35-7]\\d{8}",[9,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[35-7]"]]],0,0,0,0,0,0,[0,["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]],878:["878",0,"10\\d{10}",[12],[["(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3",["1"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["10\\d{10}"]]],881:["881",0,"[0-36-9]\\d{8}",[9],[["(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[0-36-9]"]]],0,0,0,0,0,0,[0,["[0-36-9]\\d{8}"]]],882:["882",0,"[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",[7,8,9,10,11,12],[["(\\d{2})(\\d{5})","$1 $2",["16|342"]],["(\\d{2})(\\d{6})","$1 $2",["49"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["1[36]|9"]],["(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["16"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|23|3(?:[15]|4[57])|4|51"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["34"]],["(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["[1-35]"]]],0,0,0,0,0,0,[0,["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}",[7,8,9,10,12]],0,0,0,0,0,0,["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]],883:["883",0,"(?:[1-4]\\d|51)\\d{6,10}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,8})","$1 $2 $3",["[14]|2[24-689]|3[02-689]|51[24-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["21"]],["(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["51[13]"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[235]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[013-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]],888:["888",0,"\\d{11}",[11],[["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],0,0,0,0,0,0,[0,0,0,0,0,0,["\\d{11}"]]],979:["979",0,"[1359]\\d{8}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[1359]"]]],0,0,0,0,0,0,[0,0,0,["[1359]\\d{8}"]]]}};var K={},TP={get exports(){return K},set exports(e){K=e}},AP="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",RP=AP,FP=RP;function Z$(){}function J$(){}J$.resetWarningCache=Z$;var DP=function(){function e(r,i,o,a,l,u){if(u!==FP){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:J$,resetWarningCache:Z$};return n.PropTypes=n,n};TP.exports=DP();var v1={},MP={get exports(){return v1},set exports(e){v1=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if(a==="string"||a==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var l=n.apply(null,o);l&&r.push(l)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var u in o)t.call(o,u)&&o[u]&&r.push(u)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(MP);const tc=v1;function jP(e,t,n){switch(n){case"Backspace":t>0&&(e=e.slice(0,t-1)+e.slice(t),t--);break;case"Delete":e=e.slice(0,t)+e.slice(t+1);break}return{value:e,caret:t}}function LP(e,t,n){for(var r="",i=0,o=0;o<e.length;){var a=n(e[o],r);a!==void 0&&(r+=a,t!==void 0&&(t===o?i=r.length-1:t>o&&(i=r.length))),o++}t===void 0&&(i=r.length);var l={value:r,caret:i};return l}function zP(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=UP(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UP(e,t){if(e){if(typeof e=="string")return bv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bv(e,t)}}function bv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x1(e,t){for(var n=0,r=zP(t.split("")),i;!(i=r()).done;){var o=i.value;o===e&&n++}return n}function BP(e,t){for(var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"x",r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:" ",i=e.length,o=x1("(",e),a=x1(")",e),l=o-a;l>0&&i<t.length;)e+=t[i].replace(n,r),t[i]===")"&&l--,i++;return e}function HP(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=WP(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WP(e,t){if(e){if(typeof e=="string")return $v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $v(e,t)}}function $v(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function YP(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"x",n=arguments.length>2?arguments[2]:void 0;if(!e)return function(i){return{text:i}};var r=x1(t,e);return function(i){if(!i)return{text:"",template:e};for(var o=0,a="",l=HP(e.split("")),u;!(u=l()).done;){var d=u.value;if(d!==t){a+=d;continue}if(a+=i[o],o++,o===i.length&&i.length<r)break}return n&&(a=BP(a,e)),{text:a,template:e}}}function VP(e,t,n){typeof n=="string"&&(n=YP(n));var r=n(e)||{},i=r.text,o=r.template;if(i===void 0&&(i=e),o)if(t===void 0)t=i.length;else{for(var a=0,l=!1,u=-1;a<i.length&&a<o.length;){if(i[a]!==o[a]){if(t===0){l=!0,t=a;break}u=a,t--}a++}l||(t=u+1)}return{text:i,caret:t}}function qP(e){return e.hasAttribute("readonly")}function GP(e){if(e.selectionStart!==e.selectionEnd)return{start:e.selectionStart,end:e.selectionEnd}}var wv={Backspace:8,Delete:46};function QP(e){switch(e.keyCode){case wv.Backspace:return"Backspace";case wv.Delete:return"Delete"}}function KP(e){return e.selectionStart}function X$(e,t){t!==void 0&&(ZP()?setTimeout(function(){return e.setSelectionRange(t,t)},0):e.setSelectionRange(t,t))}function ZP(){if(typeof navigator<"u")return JP.test(navigator.userAgent)}var JP=/Android/i;function XP(e,t,n,r,i){b1(t,n,r,void 0,i)}function eO(e,t,n,r,i){if(!qP(t)){var o=QP(e);switch(o){case"Delete":case"Backspace":e.preventDefault();var a=GP(t);return a?(tO(t,a),b1(t,n,r,void 0,i)):b1(t,n,r,o,i)}}}function tO(e,t){var n=e.value;n=n.slice(0,t.start)+n.slice(t.end),e.value=n,X$(e,t.start)}function b1(e,t,n,r,i){var o=LP(e.value,KP(e),t),a=o.value,l=o.caret;if(r){var u=jP(a,l,r);a=u.value,l=u.caret}var d=VP(a,l,n),c=d.text;l=d.caret,e.value=c,X$(e,l),i(a)}var nO=["value","parse","format","inputComponent","onChange","onKeyDown"];function $1(){return $1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$1.apply(this,arguments)}function rO(e,t){if(e==null)return{};var n=iO(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function iO(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function cl(e,t){var n=e.value,r=e.parse,i=e.format,o=e.inputComponent,a=e.onChange,l=e.onKeyDown,u=rO(e,nO),d=C.useRef(),c=C.useCallback(function(x){d.current=x,t&&(typeof t=="function"?t(x):t.current=x)},[t]),h=C.useCallback(function(x){return XP(x,d.current,r,i,a)},[d,r,i,a]),g=C.useCallback(function(x){return l&&l(x),eO(x,d.current,r,i,a)},[d,r,i,a,l]);return ne.createElement(o,$1({},u,{ref:c,value:i(aO(n)?"":n).text,onKeyDown:g,onChange:h}))}cl=ne.forwardRef(cl);cl.propTypes={parse:K.func.isRequired,format:K.func.isRequired,inputComponent:K.elementType.isRequired,type:K.string.isRequired,value:K.string,onChange:K.func.isRequired,onKeyDown:K.func,onCut:K.func,onPaste:K.func};cl.defaultProps={inputComponent:"input",type:"text"};const oO=cl;function aO(e){return e==null}function w1(e){return w1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w1(e)}function Sv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function sO(e,t,n){return t&&Sv(e.prototype,t),n&&Sv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function lO(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function uO(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&fl(e,t)}function dO(e){var t=t5();return function(){var r=hl(e),i;if(t){var o=hl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return cO(this,i)}}function cO(e,t){if(t&&(w1(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return e5(e)}function e5(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S1(e){var t=typeof Map=="function"?new Map:void 0;return S1=function(r){if(r===null||!fO(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,i)}function i(){return sd(r,arguments,hl(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),fl(i,r)},S1(e)}function sd(e,t,n){return t5()?sd=Reflect.construct:sd=function(i,o,a){var l=[null];l.push.apply(l,o);var u=Function.bind.apply(i,l),d=new u;return a&&fl(d,a.prototype),d},sd.apply(null,arguments)}function t5(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function fO(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function fl(e,t){return fl=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},fl(e,t)}function hl(e){return hl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},hl(e)}var pr=function(e){uO(n,e);var t=dO(n);function n(r){var i;return lO(this,n),i=t.call(this,r),Object.setPrototypeOf(e5(i),n.prototype),i.name=i.constructor.name,i}return sO(n)}(S1(Error)),Sm=2,hO=17,pO=3,Rt="0-9０-９٠-٩۰-۹",gO="-‐-―−ー－",mO="／/",yO="．.",vO="  ­​⁠　",xO="()（）［］\\[\\]",bO="~⁓∼～",Fn="".concat(gO).concat(mO).concat(yO).concat(vO).concat(xO).concat(bO),uf="+＋";function Cv(e,t){e=e.split("-"),t=t.split("-");for(var n=e[0].split("."),r=t[0].split("."),i=0;i<3;i++){var o=Number(n[i]),a=Number(r[i]);if(o>a)return 1;if(a>o)return-1;if(!isNaN(o)&&isNaN(a))return 1;if(isNaN(o)&&!isNaN(a))return-1}return e[1]&&t[1]?e[1]>t[1]?1:e[1]<t[1]?-1:0:!e[1]&&t[1]?1:e[1]&&!t[1]?-1:0}function nc(e){return nc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nc(e)}function df(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Pv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function cf(e,t,n){return t&&Pv(e.prototype,t),n&&Pv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var $O="1.2.0",wO="1.7.35",Ov=" ext. ",SO=/^\d+$/,gt=function(){function e(t){df(this,e),_O(t),this.metadata=t,r5.call(this,t)}return cf(e,[{key:"getCountries",value:function(){return Object.keys(this.metadata.countries).filter(function(n){return n!=="001"})}},{key:"getCountryMetadata",value:function(n){return this.metadata.countries[n]}},{key:"nonGeographic",value:function(){if(!(this.v1||this.v2||this.v3))return this.metadata.nonGeographic||this.metadata.nonGeographical}},{key:"hasCountry",value:function(n){return this.getCountryMetadata(n)!==void 0}},{key:"hasCallingCode",value:function(n){if(this.getCountryCodesForCallingCode(n))return!0;if(this.nonGeographic()){if(this.nonGeographic()[n])return!0}else{var r=this.countryCallingCodes()[n];if(r&&r.length===1&&r[0]==="001")return!0}}},{key:"isNonGeographicCallingCode",value:function(n){return this.nonGeographic()?!!this.nonGeographic()[n]:!this.getCountryCodesForCallingCode(n)}},{key:"country",value:function(n){return this.selectNumberingPlan(n)}},{key:"selectNumberingPlan",value:function(n,r){if(n&&SO.test(n)&&(r=n,n=null),n&&n!=="001"){if(!this.hasCountry(n))throw new Error("Unknown country: ".concat(n));this.numberingPlan=new _v(this.getCountryMetadata(n),this)}else if(r){if(!this.hasCallingCode(r))throw new Error("Unknown calling code: ".concat(r));this.numberingPlan=new _v(this.getNumberingPlanMetadata(r),this)}else this.numberingPlan=void 0;return this}},{key:"getCountryCodesForCallingCode",value:function(n){var r=this.countryCallingCodes()[n];if(r)return r.length===1&&r[0].length===3?void 0:r}},{key:"getCountryCodeForCallingCode",value:function(n){var r=this.getCountryCodesForCallingCode(n);if(r)return r[0]}},{key:"getNumberingPlanMetadata",value:function(n){var r=this.getCountryCodeForCallingCode(n);if(r)return this.getCountryMetadata(r);if(this.nonGeographic()){var i=this.nonGeographic()[n];if(i)return i}else{var o=this.countryCallingCodes()[n];if(o&&o.length===1&&o[0]==="001")return this.metadata.countries["001"]}}},{key:"countryCallingCode",value:function(){return this.numberingPlan.callingCode()}},{key:"IDDPrefix",value:function(){return this.numberingPlan.IDDPrefix()}},{key:"defaultIDDPrefix",value:function(){return this.numberingPlan.defaultIDDPrefix()}},{key:"nationalNumberPattern",value:function(){return this.numberingPlan.nationalNumberPattern()}},{key:"possibleLengths",value:function(){return this.numberingPlan.possibleLengths()}},{key:"formats",value:function(){return this.numberingPlan.formats()}},{key:"nationalPrefixForParsing",value:function(){return this.numberingPlan.nationalPrefixForParsing()}},{key:"nationalPrefixTransformRule",value:function(){return this.numberingPlan.nationalPrefixTransformRule()}},{key:"leadingDigits",value:function(){return this.numberingPlan.leadingDigits()}},{key:"hasTypes",value:function(){return this.numberingPlan.hasTypes()}},{key:"type",value:function(n){return this.numberingPlan.type(n)}},{key:"ext",value:function(){return this.numberingPlan.ext()}},{key:"countryCallingCodes",value:function(){return this.v1?this.metadata.country_phone_code_to_countries:this.metadata.country_calling_codes}},{key:"chooseCountryByCountryCallingCode",value:function(n){return this.selectNumberingPlan(n)}},{key:"hasSelectedNumberingPlan",value:function(){return this.numberingPlan!==void 0}}]),e}(),_v=function(){function e(t,n){df(this,e),this.globalMetadataObject=n,this.metadata=t,r5.call(this,n.metadata)}return cf(e,[{key:"callingCode",value:function(){return this.metadata[0]}},{key:"getDefaultCountryMetadataForRegion",value:function(){return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())}},{key:"IDDPrefix",value:function(){if(!(this.v1||this.v2))return this.metadata[1]}},{key:"defaultIDDPrefix",value:function(){if(!(this.v1||this.v2))return this.metadata[12]}},{key:"nationalNumberPattern",value:function(){return this.v1||this.v2?this.metadata[1]:this.metadata[2]}},{key:"possibleLengths",value:function(){if(!this.v1)return this.metadata[this.v2?2:3]}},{key:"_getFormats",value:function(n){return n[this.v1?2:this.v2?3:4]}},{key:"formats",value:function(){var n=this,r=this._getFormats(this.metadata)||this._getFormats(this.getDefaultCountryMetadataForRegion())||[];return r.map(function(i){return new CO(i,n)})}},{key:"nationalPrefix",value:function(){return this.metadata[this.v1?3:this.v2?4:5]}},{key:"_getNationalPrefixFormattingRule",value:function(n){return n[this.v1?4:this.v2?5:6]}},{key:"nationalPrefixFormattingRule",value:function(){return this._getNationalPrefixFormattingRule(this.metadata)||this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())}},{key:"_nationalPrefixForParsing",value:function(){return this.metadata[this.v1?5:this.v2?6:7]}},{key:"nationalPrefixForParsing",value:function(){return this._nationalPrefixForParsing()||this.nationalPrefix()}},{key:"nationalPrefixTransformRule",value:function(){return this.metadata[this.v1?6:this.v2?7:8]}},{key:"_getNationalPrefixIsOptionalWhenFormatting",value:function(){return!!this.metadata[this.v1?7:this.v2?8:9]}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata)||this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())}},{key:"leadingDigits",value:function(){return this.metadata[this.v1?8:this.v2?9:10]}},{key:"types",value:function(){return this.metadata[this.v1?9:this.v2?10:11]}},{key:"hasTypes",value:function(){return this.types()&&this.types().length===0?!1:!!this.types()}},{key:"type",value:function(n){if(this.hasTypes()&&kv(this.types(),n))return new OO(kv(this.types(),n),this)}},{key:"ext",value:function(){return this.v1||this.v2?Ov:this.metadata[13]||Ov}}]),e}(),CO=function(){function e(t,n){df(this,e),this._format=t,this.metadata=n}return cf(e,[{key:"pattern",value:function(){return this._format[0]}},{key:"format",value:function(){return this._format[1]}},{key:"leadingDigitsPatterns",value:function(){return this._format[2]||[]}},{key:"nationalPrefixFormattingRule",value:function(){return this._format[3]||this.metadata.nationalPrefixFormattingRule()}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return!!this._format[4]||this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"nationalPrefixIsMandatoryWhenFormattingInNationalFormat",value:function(){return this.usesNationalPrefix()&&!this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"usesNationalPrefix",value:function(){return!!(this.nationalPrefixFormattingRule()&&!PO.test(this.nationalPrefixFormattingRule()))}},{key:"internationalFormat",value:function(){return this._format[5]||this.format()}}]),e}(),PO=/^\(?\$1\)?$/,OO=function(){function e(t,n){df(this,e),this.type=t,this.metadata=n}return cf(e,[{key:"pattern",value:function(){return this.metadata.v1?this.type:this.type[0]}},{key:"possibleLengths",value:function(){if(!this.metadata.v1)return this.type[1]||this.metadata.possibleLengths()}}]),e}();function kv(e,t){switch(t){case"FIXED_LINE":return e[0];case"MOBILE":return e[1];case"TOLL_FREE":return e[2];case"PREMIUM_RATE":return e[3];case"PERSONAL_NUMBER":return e[4];case"VOICEMAIL":return e[5];case"UAN":return e[6];case"PAGER":return e[7];case"VOIP":return e[8];case"SHARED_COST":return e[9]}}function _O(e){if(!e)throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");if(!_h(e)||!_h(e.countries))throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(_h(e)?"an object of shape: { "+Object.keys(e).join(", ")+" }":"a "+kO(e)+": "+e,"."))}var _h=function(t){return nc(t)==="object"},kO=function(t){return nc(t)};function wi(e,t){if(t=new gt(t),t.hasCountry(e))return t.country(e).countryCallingCode();throw new Error("Unknown country: ".concat(e))}function n5(e,t){return t.countries[e]!==void 0}function r5(e){var t=e.version;typeof t=="number"?(this.v1=t===1,this.v2=t===2,this.v3=t===3,this.v4=t===4):t?Cv(t,$O)===-1?this.v2=!0:Cv(t,wO)===-1?this.v3=!0:this.v4=!0:this.v1=!0}var NO=";ext=",go=function(t){return"([".concat(Rt,"]{1,").concat(t,"})")};function i5(e){var t="20",n="15",r="9",i="6",o="[  \\t,]*",a="[:\\.．]?[  \\t,-]*",l="#?",u="(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)",d="(?:[xｘ#＃~～]|int|ｉｎｔ)",c="[- ]+",h="[  \\t]*",g="(?:,{2}|;)",x=NO+go(t),v=o+u+a+go(t)+l,$=o+d+a+go(r)+l,w=c+go(i)+"#",y=h+g+a+go(n)+l,p=h+"(?:,)+"+a+go(r)+l;return x+"|"+v+"|"+$+"|"+w+"|"+y+"|"+p}var EO="["+Rt+"]{"+Sm+"}",IO="["+uf+"]{0,1}(?:["+Fn+"]*["+Rt+"]){3,}["+Fn+Rt+"]*",TO=new RegExp("^["+uf+"]{0,1}(?:["+Fn+"]*["+Rt+"]){1,2}$","i"),AO=IO+"(?:"+i5()+")?",RO=new RegExp("^"+EO+"$|^"+AO+"$","i");function FO(e){return e.length>=Sm&&RO.test(e)}function DO(e){return TO.test(e)}var Nv=new RegExp("(?:"+i5()+")$","i");function MO(e){var t=e.search(Nv);if(t<0)return{};for(var n=e.slice(0,t),r=e.match(Nv),i=1;i<r.length;){if(r[i])return{number:n,ext:r[i]};i++}}function jO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=LO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function LO(e,t){if(e){if(typeof e=="string")return Ev(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ev(e,t)}}function Ev(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var zO={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","０":"0","１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9"};function o5(e){return zO[e]}function rc(e){for(var t="",n=jO(e.split("")),r;!(r=n()).done;){var i=r.value,o=o5(i);o&&(t+=o)}return t}function UO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=BO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function BO(e,t){if(e){if(typeof e=="string")return Iv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Iv(e,t)}}function Iv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C1(e){for(var t="",n=UO(e.split("")),r;!(r=n()).done;){var i=r.value;t+=a5(i,t)||""}return t}function a5(e,t){return e==="+"?t?void 0:"+":o5(e)}function HO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=WO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WO(e,t){if(e){if(typeof e=="string")return Tv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tv(e,t)}}function Tv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function YO(e,t){for(var n=e.slice(),r=HO(t),i;!(i=r()).done;){var o=i.value;e.indexOf(o)<0&&n.push(o)}return n.sort(function(a,l){return a-l})}function ff(e,t){return s5(e,void 0,t)}function s5(e,t,n){var r=n.type(t),i=r&&r.possibleLengths()||n.possibleLengths();if(!i)return"IS_POSSIBLE";if(t==="FIXED_LINE_OR_MOBILE"){if(!n.type("FIXED_LINE"))return s5(e,"MOBILE",n);var o=n.type("MOBILE");o&&(i=YO(i,o.possibleLengths()))}else if(t&&!r)return"INVALID_LENGTH";var a=e.length,l=i[0];return l===a?"IS_POSSIBLE":l>a?"TOO_SHORT":i[i.length-1]<a?"TOO_LONG":i.indexOf(a,1)>=0?"IS_POSSIBLE":"INVALID_LENGTH"}function VO(e,t,n){if(t===void 0&&(t={}),n=new gt(n),t.v2){if(!e.countryCallingCode)throw new Error("Invalid phone number object passed");n.selectNumberingPlan(e.countryCallingCode)}else{if(!e.phone)return!1;if(e.country){if(!n.hasCountry(e.country))throw new Error("Unknown country: ".concat(e.country));n.country(e.country)}else{if(!e.countryCallingCode)throw new Error("Invalid phone number object passed");n.selectNumberingPlan(e.countryCallingCode)}}if(n.possibleLengths())return l5(e.phone||e.nationalNumber,n);if(e.countryCallingCode&&n.isNonGeographicCallingCode(e.countryCallingCode))return!0;throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')}function l5(e,t){switch(ff(e,t)){case"IS_POSSIBLE":return!0;default:return!1}}function _r(e,t){return e=e||"",new RegExp("^(?:"+t+")$").test(e)}function qO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=GO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function GO(e,t){if(e){if(typeof e=="string")return Av(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Av(e,t)}}function Av(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var QO=["MOBILE","PREMIUM_RATE","TOLL_FREE","SHARED_COST","VOIP","PERSONAL_NUMBER","PAGER","UAN","VOICEMAIL"];function Cm(e,t,n){if(t=t||{},!!e.country){n=new gt(n),n.selectNumberingPlan(e.country,e.countryCallingCode);var r=t.v2?e.nationalNumber:e.phone;if(_r(r,n.nationalNumberPattern())){if(kh(r,"FIXED_LINE",n))return n.type("MOBILE")&&n.type("MOBILE").pattern()===""||!n.type("MOBILE")||kh(r,"MOBILE",n)?"FIXED_LINE_OR_MOBILE":"FIXED_LINE";for(var i=qO(QO),o;!(o=i()).done;){var a=o.value;if(kh(r,a,n))return a}}}}function kh(e,t,n){return t=n.type(t),!t||!t.pattern()||t.possibleLengths()&&t.possibleLengths().indexOf(e.length)<0?!1:_r(e,t.pattern())}function KO(e,t,n){if(t=t||{},n=new gt(n),n.selectNumberingPlan(e.country,e.countryCallingCode),n.hasTypes())return Cm(e,t,n.metadata)!==void 0;var r=t.v2?e.nationalNumber:e.phone;return _r(r,n.nationalNumberPattern())}function ZO(e,t,n){var r=new gt(n),i=r.getCountryCodesForCallingCode(e);return i?i.filter(function(o){return JO(t,o,n)}):[]}function JO(e,t,n){var r=new gt(n);return r.selectNumberingPlan(t),r.numberingPlan.possibleLengths().indexOf(e.length)>=0}function u5(e){return e.replace(new RegExp("[".concat(Fn,"]+"),"g")," ").trim()}var d5=/(\$\d)/;function c5(e,t,n){var r=n.useInternationalFormat,i=n.withNationalPrefix;n.carrierCode,n.metadata;var o=e.replace(new RegExp(t.pattern()),r?t.internationalFormat():i&&t.nationalPrefixFormattingRule()?t.format().replace(d5,t.nationalPrefixFormattingRule()):t.format());return r?u5(o):o}var XO=/^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;function e_(e,t,n){var r=new gt(n);if(r.selectNumberingPlan(e,t),r.defaultIDDPrefix())return r.defaultIDDPrefix();if(XO.test(r.IDDPrefix()))return r.IDDPrefix()}function t_(e){var t=e.number,n=e.ext;if(!t)return"";if(t[0]!=="+")throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');return"tel:".concat(t).concat(n?";ext="+n:"")}function n_(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=r_(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r_(e,t){if(e){if(typeof e=="string")return Rv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rv(e,t)}}function Rv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Fv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Dv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fv(Object(n),!0).forEach(function(r){i_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function i_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Mv={formatExtension:function(t,n,r){return"".concat(t).concat(r.ext()).concat(n)}};function o_(e,t,n,r){if(n?n=Dv(Dv({},Mv),n):n=Mv,r=new gt(r),e.country&&e.country!=="001"){if(!r.hasCountry(e.country))throw new Error("Unknown country: ".concat(e.country));r.country(e.country)}else if(e.countryCallingCode)r.selectNumberingPlan(e.countryCallingCode);else return e.phone||"";var i=r.countryCallingCode(),o=n.v2?e.nationalNumber:e.phone,a;switch(t){case"NATIONAL":return o?(a=ic(o,e.carrierCode,"NATIONAL",r,n),Nh(a,e.ext,r,n.formatExtension)):"";case"INTERNATIONAL":return o?(a=ic(o,null,"INTERNATIONAL",r,n),a="+".concat(i," ").concat(a),Nh(a,e.ext,r,n.formatExtension)):"+".concat(i);case"E.164":return"+".concat(i).concat(o);case"RFC3966":return t_({number:"+".concat(i).concat(o),ext:e.ext});case"IDD":if(!n.fromCountry)return;var l=s_(o,e.carrierCode,i,n.fromCountry,r);return Nh(l,e.ext,r,n.formatExtension);default:throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t,'"'))}}function ic(e,t,n,r,i){var o=a_(r.formats(),e);return o?c5(e,o,{useInternationalFormat:n==="INTERNATIONAL",withNationalPrefix:!(o.nationalPrefixIsOptionalWhenFormattingInNationalFormat()&&i&&i.nationalPrefix===!1),carrierCode:t,metadata:r}):e}function a_(e,t){for(var n=n_(e),r;!(r=n()).done;){var i=r.value;if(i.leadingDigitsPatterns().length>0){var o=i.leadingDigitsPatterns()[i.leadingDigitsPatterns().length-1];if(t.search(o)!==0)continue}if(_r(t,i.pattern()))return i}}function Nh(e,t,n,r){return t?r(e,t,n):e}function s_(e,t,n,r,i){var o=wi(r,i.metadata);if(o===n){var a=ic(e,t,"NATIONAL",i);return n==="1"?n+" "+a:a}var l=e_(r,void 0,i.metadata);if(l)return"".concat(l," ").concat(n," ").concat(ic(e,null,"INTERNATIONAL",i))}function jv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Lv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jv(Object(n),!0).forEach(function(r){l_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function l_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function zv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d_(e,t,n){return t&&zv(e.prototype,t),n&&zv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var f5=function(){function e(t,n,r){if(u_(this,e),!t)throw new TypeError("`country` or `countryCallingCode` not passed");if(!n)throw new TypeError("`nationalNumber` not passed");if(!r)throw new TypeError("`metadata` not passed");var i=f_(t,r),o=i.country,a=i.countryCallingCode;this.country=o,this.countryCallingCode=a,this.nationalNumber=n,this.number="+"+this.countryCallingCode+this.nationalNumber,this.metadata=r}return d_(e,[{key:"setExt",value:function(n){this.ext=n}},{key:"getPossibleCountries",value:function(){return this.country?[this.country]:ZO(this.countryCallingCode,this.nationalNumber,this.metadata)}},{key:"isPossible",value:function(){return VO(this,{v2:!0},this.metadata)}},{key:"isValid",value:function(){return KO(this,{v2:!0},this.metadata)}},{key:"isNonGeographic",value:function(){var n=new gt(this.metadata);return n.isNonGeographicCallingCode(this.countryCallingCode)}},{key:"isEqual",value:function(n){return this.number===n.number&&this.ext===n.ext}},{key:"getType",value:function(){return Cm(this,{v2:!0},this.metadata)}},{key:"format",value:function(n,r){return o_(this,n,r?Lv(Lv({},r),{},{v2:!0}):{v2:!0},this.metadata)}},{key:"formatNational",value:function(n){return this.format("NATIONAL",n)}},{key:"formatInternational",value:function(n){return this.format("INTERNATIONAL",n)}},{key:"getURI",value:function(n){return this.format("RFC3966",n)}}]),e}(),c_=function(t){return/^[A-Z]{2}$/.test(t)};function f_(e,t){var n,r,i=new gt(t);return c_(e)?(n=e,i.selectNumberingPlan(n),r=i.countryCallingCode()):r=e,{country:n,countryCallingCode:r}}var h_=new RegExp("(["+Rt+"])");function h5(e,t,n,r){if(t){var i=new gt(r);i.selectNumberingPlan(t,n);var o=new RegExp(i.IDDPrefix());if(e.search(o)===0){e=e.slice(e.match(o)[0].length);var a=e.match(h_);if(!(a&&a[1]!=null&&a[1].length>0&&a[1]==="0"))return e}}}function P1(e,t){if(e&&t.numberingPlan.nationalPrefixForParsing()){var n=new RegExp("^(?:"+t.numberingPlan.nationalPrefixForParsing()+")"),r=n.exec(e);if(r){var i,o,a=r.length-1,l=a>0&&r[a];if(t.nationalPrefixTransformRule()&&l)i=e.replace(n,t.nationalPrefixTransformRule()),a>1&&(o=r[1]);else{var u=r[0];i=e.slice(u.length),l&&(o=r[1])}var d;if(l){var c=e.indexOf(r[1]),h=e.slice(0,c);h===t.numberingPlan.nationalPrefix()&&(d=t.numberingPlan.nationalPrefix())}else d=r[0];return{nationalNumber:i,nationalPrefix:d,carrierCode:o}}}return{nationalNumber:e}}function O1(e,t){var n=P1(e,t),r=n.carrierCode,i=n.nationalNumber;if(i!==e){if(!p_(e,i,t))return{nationalNumber:e};if(t.possibleLengths()&&!g_(i,t))return{nationalNumber:e}}return{nationalNumber:i,carrierCode:r}}function p_(e,t,n){return!(_r(e,n.nationalNumberPattern())&&!_r(t,n.nationalNumberPattern()))}function g_(e,t){switch(ff(e,t)){case"TOO_SHORT":case"INVALID_LENGTH":return!1;default:return!0}}function p5(e,t,n,r){var i=t?wi(t,r):n;if(e.indexOf(i)===0){r=new gt(r),r.selectNumberingPlan(t,n);var o=e.slice(i.length),a=O1(o,r),l=a.nationalNumber,u=O1(e,r),d=u.nationalNumber;if(!_r(d,r.nationalNumberPattern())&&_r(l,r.nationalNumberPattern())||ff(d,r)==="TOO_LONG")return{countryCallingCode:i,number:o}}return{number:e}}function g5(e,t,n,r){if(!e)return{};var i;if(e[0]!=="+"){var o=h5(e,t,n,r);if(o&&o!==e)i=!0,e="+"+o;else{if(t||n){var a=p5(e,t,n,r),l=a.countryCallingCode,u=a.number;if(l)return{countryCallingCodeSource:"FROM_NUMBER_WITHOUT_PLUS_SIGN",countryCallingCode:l,number:u}}return{number:e}}}if(e[1]==="0")return{};r=new gt(r);for(var d=2;d-1<=pO&&d<=e.length;){var c=e.slice(1,d);if(r.hasCallingCode(c))return r.selectNumberingPlan(c),{countryCallingCodeSource:i?"FROM_NUMBER_WITH_IDD":"FROM_NUMBER_WITH_PLUS_SIGN",countryCallingCode:c,number:e.slice(d)};d++}return{}}function m_(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=y_(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y_(e,t){if(e){if(typeof e=="string")return Uv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Uv(e,t)}}function Uv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v_(e,t,n){n=new gt(n);for(var r=m_(e),i;!(i=r()).done;){var o=i.value;if(n.country(o),n.leadingDigits()){if(t&&t.search(n.leadingDigits())===0)return o}else if(Cm({phone:t,country:o},void 0,n.metadata))return o}}var x_=!1;function m5(e,t,n){if(x_&&n.isNonGeographicCallingCode(e))return"001";var r=n.getCountryCodesForCallingCode(e);if(r)return r.length===1?r[0]:v_(r,t,n.metadata)}var y5="+",b_="[\\-\\.\\(\\)]?",Bv="(["+Rt+"]|"+b_+")",$_="^\\"+y5+Bv+"*["+Rt+"]"+Bv+"*$",w_=new RegExp($_,"g"),_1=Rt,S_="["+_1+"]+((\\-)*["+_1+"])*",C_="a-zA-Z",P_="["+C_+"]+((\\-)*["+_1+"])*",O_="^("+S_+"\\.)*"+P_+"\\.?$",__=new RegExp(O_,"g"),Hv="tel:",k1=";phone-context=",k_=";isub=";function N_(e){var t=e.indexOf(k1);if(t<0)return null;var n=t+k1.length;if(n>=e.length)return"";var r=e.indexOf(";",n);return r>=0?e.substring(n,r):e.substring(n)}function E_(e){return e===null?!0:e.length===0?!1:w_.test(e)||__.test(e)}function I_(e,t){var n=t.extractFormattedPhoneNumber,r=N_(e);if(!E_(r))throw new pr("NOT_A_NUMBER");var i;if(r===null)i=n(e)||"";else{i="",r.charAt(0)===y5&&(i+=r);var o=e.indexOf(Hv),a;o>=0?a=o+Hv.length:a=0;var l=e.indexOf(k1);i+=e.substring(a,l)}var u=i.indexOf(k_);if(u>0&&(i=i.substring(0,u)),i!=="")return i}var T_=250,A_=new RegExp("["+uf+Rt+"]"),R_=new RegExp("[^"+Rt+"#]+$");function F_(e,t,n){if(t=t||{},n=new gt(n),t.defaultCountry&&!n.hasCountry(t.defaultCountry))throw t.v2?new pr("INVALID_COUNTRY"):new Error("Unknown country: ".concat(t.defaultCountry));var r=M_(e,t.v2,t.extract),i=r.number,o=r.ext,a=r.error;if(!i){if(t.v2)throw a==="TOO_SHORT"?new pr("TOO_SHORT"):new pr("NOT_A_NUMBER");return{}}var l=L_(i,t.defaultCountry,t.defaultCallingCode,n),u=l.country,d=l.nationalNumber,c=l.countryCallingCode,h=l.countryCallingCodeSource,g=l.carrierCode;if(!n.hasSelectedNumberingPlan()){if(t.v2)throw new pr("INVALID_COUNTRY");return{}}if(!d||d.length<Sm){if(t.v2)throw new pr("TOO_SHORT");return{}}if(d.length>hO){if(t.v2)throw new pr("TOO_LONG");return{}}if(t.v2){var x=new f5(c,d,n.metadata);return u&&(x.country=u),g&&(x.carrierCode=g),o&&(x.ext=o),x.__countryCallingCodeSource=h,x}var v=(t.extended?n.hasSelectedNumberingPlan():u)?_r(d,n.nationalNumberPattern()):!1;return t.extended?{country:u,countryCallingCode:c,carrierCode:g,valid:v,possible:v?!0:!!(t.extended===!0&&n.possibleLengths()&&l5(d,n)),phone:d,ext:o}:v?j_(u,d,o):{}}function D_(e,t,n){if(e){if(e.length>T_){if(n)throw new pr("TOO_LONG");return}if(t===!1)return e;var r=e.search(A_);if(!(r<0))return e.slice(r).replace(R_,"")}}function M_(e,t,n){var r=I_(e,{extractFormattedPhoneNumber:function(a){return D_(a,n,t)}});if(!r)return{};if(!FO(r))return DO(r)?{error:"TOO_SHORT"}:{};var i=MO(r);return i.ext?i:{number:r}}function j_(e,t,n){var r={country:e,phone:t};return n&&(r.ext=n),r}function L_(e,t,n,r){var i=g5(C1(e),t,n,r.metadata),o=i.countryCallingCodeSource,a=i.countryCallingCode,l=i.number,u;if(a)r.selectNumberingPlan(a);else if(l&&(t||n))r.selectNumberingPlan(t,n),t&&(u=t),a=n||wi(t,r.metadata);else return{};if(!l)return{countryCallingCodeSource:o,countryCallingCode:a};var d=O1(C1(l),r),c=d.nationalNumber,h=d.carrierCode,g=m5(a,c,r);return g&&(u=g,g==="001"||r.country(u)),{country:u,countryCallingCode:a,countryCallingCodeSource:o,nationalNumber:c,carrierCode:h}}function Wv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Yv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wv(Object(n),!0).forEach(function(r){z_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function z_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U_(e,t,n){return F_(e,Yv(Yv({},t),{},{v2:!0}),n)}function N1(e){return N1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N1(e)}function Vv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function B_(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vv(Object(n),!0).forEach(function(r){H_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function H_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W_(e,t){return G_(e)||q_(e,t)||V_(e,t)||Y_()}function Y_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V_(e,t){if(e){if(typeof e=="string")return qv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qv(e,t)}}function qv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function q_(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function G_(e){if(Array.isArray(e))return e}function Q_(e){var t=Array.prototype.slice.call(e),n=W_(t,4),r=n[0],i=n[1],o=n[2],a=n[3],l,u,d;if(typeof r=="string")l=r;else throw new TypeError("A text for parsing must be a string.");if(!i||typeof i=="string")a?(u=o,d=a):(u=void 0,d=o),i&&(u=B_({defaultCountry:i},u));else if(K_(i))o?(u=i,d=o):d=i;else throw new Error("Invalid second argument: ".concat(i));return{text:l,options:u,metadata:d}}var K_=function(t){return N1(t)==="object"};function Gv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Qv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gv(Object(n),!0).forEach(function(r){Z_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Z_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J_(e,t,n){t&&t.defaultCountry&&!n5(t.defaultCountry,n)&&(t=Qv(Qv({},t),{},{defaultCountry:void 0}));try{return U_(e,t,n)}catch(r){if(!(r instanceof pr))throw r}}function X_(){var e=Q_(arguments),t=e.text,n=e.options,r=e.metadata;return J_(t,n,r)}function ek(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function tk(e,t,n){return t&&Kv(e.prototype,t),n&&Kv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var nk=function(){function e(t){var n=t.onCountryChange,r=t.onCallingCodeChange;ek(this,e),this.onCountryChange=n,this.onCallingCodeChange=r}return tk(e,[{key:"reset",value:function(n){var r=n.country,i=n.callingCode;this.international=!1,this.IDDPrefix=void 0,this.missingPlus=void 0,this.callingCode=void 0,this.digits="",this.resetNationalSignificantNumber(),this.initCountryAndCallingCode(r,i)}},{key:"resetNationalSignificantNumber",value:function(){this.nationalSignificantNumber=this.getNationalDigits(),this.nationalSignificantNumberMatchesInput=!0,this.nationalPrefix=void 0,this.carrierCode=void 0,this.complexPrefixBeforeNationalSignificantNumber=void 0}},{key:"update",value:function(n){for(var r=0,i=Object.keys(n);r<i.length;r++){var o=i[r];this[o]=n[o]}}},{key:"initCountryAndCallingCode",value:function(n,r){this.setCountry(n),this.setCallingCode(r)}},{key:"setCountry",value:function(n){this.country=n,this.onCountryChange(n)}},{key:"setCallingCode",value:function(n){this.callingCode=n,this.onCallingCodeChange(n,this.country)}},{key:"startInternationalNumber",value:function(n,r){this.international=!0,this.initCountryAndCallingCode(n,r)}},{key:"appendDigits",value:function(n){this.digits+=n}},{key:"appendNationalSignificantNumberDigits",value:function(n){this.nationalSignificantNumber+=n}},{key:"getNationalDigits",value:function(){return this.international?this.digits.slice((this.IDDPrefix?this.IDDPrefix.length:0)+(this.callingCode?this.callingCode.length:0)):this.digits}},{key:"getDigitsWithoutInternationalPrefix",value:function(){return this.international&&this.IDDPrefix?this.digits.slice(this.IDDPrefix.length):this.digits}}]),e}();function rk(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=ik(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ik(e,t){if(e){if(typeof e=="string")return Zv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zv(e,t)}}function Zv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var On="x",Eh=new RegExp(On);function ld(e,t){if(t<1)return"";for(var n="";t>1;)t&1&&(n+=e),t>>=1,e+=e;return n+e}function Jv(e,t){return e[t]===")"&&t++,ok(e.slice(0,t))}function ok(e){for(var t=[],n=0;n<e.length;)e[n]==="("?t.push(n):e[n]===")"&&t.pop(),n++;var r=0,i="";t.push(e.length);for(var o=0,a=t;o<a.length;o++){var l=a[o];i+=e.slice(r,l),r=l+1}return i}function ak(e,t,n){for(var r=rk(n.split("")),i;!(i=r()).done;){var o=i.value;if(e.slice(t+1).search(Eh)<0)return;t=e.search(Eh),e=e.replace(Eh,o)}return[e,t]}function sk(e,t,n){var r=n.metadata,i=n.shouldTryNationalPrefixFormattingRule,o=n.getSeparatorAfterNationalPrefix,a=new RegExp("^(?:".concat(t.pattern(),")$"));if(a.test(e.nationalSignificantNumber))return uk(e,t,{metadata:r,shouldTryNationalPrefixFormattingRule:i,getSeparatorAfterNationalPrefix:o})}function lk(e,t){return ff(e,t)==="IS_POSSIBLE"}function uk(e,t,n){var r=n.metadata,i=n.shouldTryNationalPrefixFormattingRule,o=n.getSeparatorAfterNationalPrefix;if(e.nationalSignificantNumber,e.international,e.nationalPrefix,e.carrierCode,i(t)){var a=Xv(e,t,{useNationalPrefixFormattingRule:!0,getSeparatorAfterNationalPrefix:o,metadata:r});if(a)return a}return Xv(e,t,{useNationalPrefixFormattingRule:!1,getSeparatorAfterNationalPrefix:o,metadata:r})}function Xv(e,t,n){var r=n.metadata,i=n.useNationalPrefixFormattingRule,o=n.getSeparatorAfterNationalPrefix,a=c5(e.nationalSignificantNumber,t,{carrierCode:e.carrierCode,useInternationalFormat:e.international,withNationalPrefix:i,metadata:r});if(i||(e.nationalPrefix?a=e.nationalPrefix+o(t)+a:e.complexPrefixBeforeNationalSignificantNumber&&(a=e.complexPrefixBeforeNationalSignificantNumber+" "+a)),dk(a,e))return a}function dk(e,t){return rc(e)===t.getNationalDigits()}function ck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function e3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fk(e,t,n){return t&&e3(e.prototype,t),n&&e3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var hk=function(){function e(){ck(this,e)}return fk(e,[{key:"parse",value:function(n){if(this.context=[{or:!0,instructions:[]}],this.parsePattern(n),this.context.length!==1)throw new Error("Non-finalized contexts left when pattern parse ended");var r=this.context[0],i=r.branches,o=r.instructions;if(i)return{op:"|",args:i.concat([Ih(o)])};if(o.length===0)throw new Error("Pattern is required");return o.length===1?o[0]:o}},{key:"startContext",value:function(n){this.context.push(n)}},{key:"endContext",value:function(){this.context.pop()}},{key:"getContext",value:function(){return this.context[this.context.length-1]}},{key:"parsePattern",value:function(n){if(!n)throw new Error("Pattern is required");var r=n.match(mk);if(!r){if(gk.test(n))throw new Error("Illegal characters found in a pattern: ".concat(n));this.getContext().instructions=this.getContext().instructions.concat(n.split(""));return}var i=r[1],o=n.slice(0,r.index),a=n.slice(r.index+i.length);switch(i){case"(?:":o&&this.parsePattern(o),this.startContext({or:!0,instructions:[],branches:[]});break;case")":if(!this.getContext().or)throw new Error('")" operator must be preceded by "(?:" operator');if(o&&this.parsePattern(o),this.getContext().instructions.length===0)throw new Error('No instructions found after "|" operator in an "or" group');var l=this.getContext(),u=l.branches;u.push(Ih(this.getContext().instructions)),this.endContext(),this.getContext().instructions.push({op:"|",args:u});break;case"|":if(!this.getContext().or)throw new Error('"|" operator can only be used inside "or" groups');if(o&&this.parsePattern(o),!this.getContext().branches)if(this.context.length===1)this.getContext().branches=[];else throw new Error('"branches" not found in an "or" group context');this.getContext().branches.push(Ih(this.getContext().instructions)),this.getContext().instructions=[];break;case"[":o&&this.parsePattern(o),this.startContext({oneOfSet:!0});break;case"]":if(!this.getContext().oneOfSet)throw new Error('"]" operator must be preceded by "[" operator');this.endContext(),this.getContext().instructions.push({op:"[]",args:pk(o)});break;default:throw new Error("Unknown operator: ".concat(i))}a&&this.parsePattern(a)}}]),e}();function pk(e){for(var t=[],n=0;n<e.length;){if(e[n]==="-"){if(n===0||n===e.length-1)throw new Error("Couldn't parse a one-of set pattern: ".concat(e));for(var r=e[n-1].charCodeAt(0)+1,i=e[n+1].charCodeAt(0)-1,o=r;o<=i;)t.push(String.fromCharCode(o)),o++}else t.push(e[n]);n++}return t}var gk=/[\(\)\[\]\?\:\|]/,mk=new RegExp("(\\||\\(\\?\\:|\\)|\\[|\\])");function Ih(e){return e.length===1?e[0]:e}function t3(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=yk(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yk(e,t){if(e){if(typeof e=="string")return n3(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return n3(e,t)}}function n3(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function xk(e,t,n){return t&&r3(e.prototype,t),n&&r3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var bk=function(){function e(t){vk(this,e),this.matchTree=new hk().parse(t)}return xk(e,[{key:"match",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.allowOverflow;if(!n)throw new Error("String is required");var o=E1(n.split(""),this.matchTree,!0);if(o&&o.match&&delete o.matchedChars,!(o&&o.overflow&&!i))return o}}]),e}();function E1(e,t,n){if(typeof t=="string"){var r=e.join("");return t.indexOf(r)===0?e.length===t.length?{match:!0,matchedChars:e}:{partialMatch:!0}:r.indexOf(t)===0?n&&e.length>t.length?{overflow:!0}:{match:!0,matchedChars:e.slice(0,t.length)}:void 0}if(Array.isArray(t)){for(var i=e.slice(),o=0;o<t.length;){var a=t[o],l=E1(i,a,n&&o===t.length-1);if(l){if(l.overflow)return l;if(l.match){if(i=i.slice(l.matchedChars.length),i.length===0)return o===t.length-1?{match:!0,matchedChars:e}:{partialMatch:!0}}else{if(l.partialMatch)return{partialMatch:!0};throw new Error(`Unsupported match result:
`.concat(JSON.stringify(l,null,2)))}}else return;o++}return n?{overflow:!0}:{match:!0,matchedChars:e.slice(0,e.length-i.length)}}switch(t.op){case"|":for(var u,d=t3(t.args),c;!(c=d()).done;){var h=c.value,g=E1(e,h,n);if(g){if(g.overflow)return g;if(g.match)return{match:!0,matchedChars:g.matchedChars};if(g.partialMatch)u=!0;else throw new Error(`Unsupported match result:
`.concat(JSON.stringify(g,null,2)))}}return u?{partialMatch:!0}:void 0;case"[]":for(var x=t3(t.args),v;!(v=x()).done;){var $=v.value;if(e[0]===$)return e.length===1?{match:!0,matchedChars:e}:n?{overflow:!0}:{match:!0,matchedChars:[$]}}return;default:throw new Error("Unsupported instruction tree: ".concat(t))}}function i3(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=$k(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $k(e,t){if(e){if(typeof e=="string")return o3(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o3(e,t)}}function o3(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function wk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Sk(e,t,n){return t&&a3(e.prototype,t),n&&a3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var I1="9",Ck=15,Pk=ld(I1,Ck),Ok=/[- ]/,_k=function(){return/\[([^\[\]])*\]/g},kk=function(){return/\d(?=[^,}][^,}])/g},Nk=new RegExp("["+Fn+"]*\\$1["+Fn+"]*(\\$\\d["+Fn+"]*)*$"),s3=3,Ek=function(){function e(t){t.state;var n=t.metadata;wk(this,e),this.metadata=n,this.resetFormat()}return Sk(e,[{key:"resetFormat",value:function(){this.chosenFormat=void 0,this.template=void 0,this.nationalNumberTemplate=void 0,this.populatedNationalNumberTemplate=void 0,this.populatedNationalNumberTemplatePosition=-1}},{key:"reset",value:function(n,r){this.resetFormat(),n?(this.isNANP=n.callingCode()==="1",this.matchingFormats=n.formats(),r.nationalSignificantNumber&&this.narrowDownMatchingFormats(r)):(this.isNANP=void 0,this.matchingFormats=[])}},{key:"format",value:function(n,r){var i=this;if(lk(r.nationalSignificantNumber,this.metadata))for(var o=i3(this.matchingFormats),a;!(a=o()).done;){var l=a.value,u=sk(r,l,{metadata:this.metadata,shouldTryNationalPrefixFormattingRule:function(c){return i.shouldTryNationalPrefixFormattingRule(c,{international:r.international,nationalPrefix:r.nationalPrefix})},getSeparatorAfterNationalPrefix:function(c){return i.getSeparatorAfterNationalPrefix(c)}});if(u)return this.resetFormat(),this.chosenFormat=l,this.setNationalNumberTemplate(u.replace(/\d/g,On),r),this.populatedNationalNumberTemplate=u,this.populatedNationalNumberTemplatePosition=this.template.lastIndexOf(On),u}return this.formatNationalNumberWithNextDigits(n,r)}},{key:"formatNationalNumberWithNextDigits",value:function(n,r){var i=this.chosenFormat,o=this.chooseFormat(r);if(o)return o===i?this.formatNextNationalNumberDigits(n):this.formatNextNationalNumberDigits(r.getNationalDigits())}},{key:"narrowDownMatchingFormats",value:function(n){var r=this,i=n.nationalSignificantNumber,o=n.nationalPrefix,a=n.international,l=i,u=l.length-s3;u<0&&(u=0),this.matchingFormats=this.matchingFormats.filter(function(d){return r.formatSuits(d,a,o)&&r.formatMatches(d,l,u)}),this.chosenFormat&&this.matchingFormats.indexOf(this.chosenFormat)===-1&&this.resetFormat()}},{key:"formatSuits",value:function(n,r,i){return!(i&&!n.usesNationalPrefix()&&!n.nationalPrefixIsOptionalWhenFormattingInNationalFormat()||!r&&!i&&n.nationalPrefixIsMandatoryWhenFormattingInNationalFormat())}},{key:"formatMatches",value:function(n,r,i){var o=n.leadingDigitsPatterns().length;if(o===0)return!0;i=Math.min(i,o-1);var a=n.leadingDigitsPatterns()[i];if(r.length<s3)try{return new bk(a).match(r,{allowOverflow:!0})!==void 0}catch(l){return console.error(l),!0}return new RegExp("^(".concat(a,")")).test(r)}},{key:"getFormatFormat",value:function(n,r){return r?n.internationalFormat():n.format()}},{key:"chooseFormat",value:function(n){for(var r=this,i=function(){var d=a.value;return r.chosenFormat===d?"break":Nk.test(r.getFormatFormat(d,n.international))?r.createTemplateForFormat(d,n)?(r.chosenFormat=d,"break"):(r.matchingFormats=r.matchingFormats.filter(function(c){return c!==d}),"continue"):"continue"},o=i3(this.matchingFormats.slice()),a;!(a=o()).done;){var l=i();if(l==="break")break}return this.chosenFormat||this.resetFormat(),this.chosenFormat}},{key:"createTemplateForFormat",value:function(n,r){if(!(n.pattern().indexOf("|")>=0)){var i=this.getTemplateForFormat(n,r);if(i)return this.setNationalNumberTemplate(i,r),!0}}},{key:"getSeparatorAfterNationalPrefix",value:function(n){return this.isNANP||n&&n.nationalPrefixFormattingRule()&&Ok.test(n.nationalPrefixFormattingRule())?" ":""}},{key:"getInternationalPrefixBeforeCountryCallingCode",value:function(n,r){var i=n.IDDPrefix,o=n.missingPlus;return i?r&&r.spacing===!1?i:i+" ":o?"":"+"}},{key:"getTemplate",value:function(n){if(this.template){for(var r=-1,i=0,o=n.international?this.getInternationalPrefixBeforeCountryCallingCode(n,{spacing:!1}):"";i<o.length+n.getDigitsWithoutInternationalPrefix().length;)r=this.template.indexOf(On,r+1),i++;return Jv(this.template,r+1)}}},{key:"setNationalNumberTemplate",value:function(n,r){this.nationalNumberTemplate=n,this.populatedNationalNumberTemplate=n,this.populatedNationalNumberTemplatePosition=-1,r.international?this.template=this.getInternationalPrefixBeforeCountryCallingCode(r).replace(/[\d\+]/g,On)+ld(On,r.callingCode.length)+" "+n:this.template=n}},{key:"getTemplateForFormat",value:function(n,r){var i=r.nationalSignificantNumber,o=r.international,a=r.nationalPrefix,l=r.complexPrefixBeforeNationalSignificantNumber,u=n.pattern();u=u.replace(_k(),"\\d").replace(kk(),"\\d");var d=Pk.match(u)[0];if(!(i.length>d.length)){var c=new RegExp("^"+u+"$"),h=i.replace(/\d/g,I1);c.test(h)&&(d=h);var g=this.getFormatFormat(n,o),x;if(this.shouldTryNationalPrefixFormattingRule(n,{international:o,nationalPrefix:a})){var v=g.replace(d5,n.nationalPrefixFormattingRule());if(rc(n.nationalPrefixFormattingRule())===(a||"")+rc("$1")&&(g=v,x=!0,a))for(var $=a.length;$>0;)g=g.replace(/\d/,On),$--}var w=d.replace(new RegExp(u),g).replace(new RegExp(I1,"g"),On);return x||(l?w=ld(On,l.length)+" "+w:a&&(w=ld(On,a.length)+this.getSeparatorAfterNationalPrefix(n)+w)),o&&(w=u5(w)),w}}},{key:"formatNextNationalNumberDigits",value:function(n){var r=ak(this.populatedNationalNumberTemplate,this.populatedNationalNumberTemplatePosition,n);if(!r){this.resetFormat();return}return this.populatedNationalNumberTemplate=r[0],this.populatedNationalNumberTemplatePosition=r[1],Jv(this.populatedNationalNumberTemplate,this.populatedNationalNumberTemplatePosition+1)}},{key:"shouldTryNationalPrefixFormattingRule",value:function(n,r){var i=r.international,o=r.nationalPrefix;if(n.nationalPrefixFormattingRule()){var a=n.usesNationalPrefix();if(a&&o||!a&&!i)return!0}}}]),e}();function v5(e,t){return Rk(e)||Ak(e,t)||Tk(e,t)||Ik()}function Ik(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tk(e,t){if(e){if(typeof e=="string")return l3(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l3(e,t)}}function l3(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ak(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function Rk(e){if(Array.isArray(e))return e}function Fk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Dk(e,t,n){return t&&u3(e.prototype,t),n&&u3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var Mk="["+Fn+Rt+"]+",jk=new RegExp("^"+Mk+"$","i"),Lk="(?:["+uf+"]["+Fn+Rt+"]*|["+Fn+Rt+"]+)",zk=new RegExp("[^"+Fn+Rt+"]+.*$"),Uk=/[^\d\[\]]/,Bk=function(){function e(t){var n=t.defaultCountry,r=t.defaultCallingCode,i=t.metadata,o=t.onNationalSignificantNumberChange;Fk(this,e),this.defaultCountry=n,this.defaultCallingCode=r,this.metadata=i,this.onNationalSignificantNumberChange=o}return Dk(e,[{key:"input",value:function(n,r){var i=Yk(n),o=v5(i,2),a=o[0],l=o[1],u=rc(a),d;return l&&(r.digits||(r.startInternationalNumber(),u||(d=!0))),u&&this.inputDigits(u,r),{digits:u,justLeadingPlus:d}}},{key:"inputDigits",value:function(n,r){var i=r.digits,o=i.length<3&&i.length+n.length>=3;if(r.appendDigits(n),o&&this.extractIddPrefix(r),this.isWaitingForCountryCallingCode(r)){if(!this.extractCountryCallingCode(r))return}else r.appendNationalSignificantNumberDigits(n);r.international||this.hasExtractedNationalSignificantNumber||this.extractNationalSignificantNumber(r.getNationalDigits(),function(a){return r.update(a)})}},{key:"isWaitingForCountryCallingCode",value:function(n){var r=n.international,i=n.callingCode;return r&&!i}},{key:"extractCountryCallingCode",value:function(n){var r=g5("+"+n.getDigitsWithoutInternationalPrefix(),this.defaultCountry,this.defaultCallingCode,this.metadata.metadata),i=r.countryCallingCode,o=r.number;if(i)return n.setCallingCode(i),n.update({nationalSignificantNumber:o}),!0}},{key:"reset",value:function(n){if(n){this.hasSelectedNumberingPlan=!0;var r=n._nationalPrefixForParsing();this.couldPossiblyExtractAnotherNationalSignificantNumber=r&&Uk.test(r)}else this.hasSelectedNumberingPlan=void 0,this.couldPossiblyExtractAnotherNationalSignificantNumber=void 0}},{key:"extractNationalSignificantNumber",value:function(n,r){if(this.hasSelectedNumberingPlan){var i=P1(n,this.metadata),o=i.nationalPrefix,a=i.nationalNumber,l=i.carrierCode;if(a!==n)return this.onExtractedNationalNumber(o,l,a,n,r),!0}}},{key:"extractAnotherNationalSignificantNumber",value:function(n,r,i){if(!this.hasExtractedNationalSignificantNumber)return this.extractNationalSignificantNumber(n,i);if(this.couldPossiblyExtractAnotherNationalSignificantNumber){var o=P1(n,this.metadata),a=o.nationalPrefix,l=o.nationalNumber,u=o.carrierCode;if(l!==r)return this.onExtractedNationalNumber(a,u,l,n,i),!0}}},{key:"onExtractedNationalNumber",value:function(n,r,i,o,a){var l,u,d=o.lastIndexOf(i);if(d>=0&&d===o.length-i.length){u=!0;var c=o.slice(0,d);c!==n&&(l=c)}a({nationalPrefix:n,carrierCode:r,nationalSignificantNumber:i,nationalSignificantNumberMatchesInput:u,complexPrefixBeforeNationalSignificantNumber:l}),this.hasExtractedNationalSignificantNumber=!0,this.onNationalSignificantNumberChange()}},{key:"reExtractNationalSignificantNumber",value:function(n){if(this.extractAnotherNationalSignificantNumber(n.getNationalDigits(),n.nationalSignificantNumber,function(r){return n.update(r)}))return!0;if(this.extractIddPrefix(n))return this.extractCallingCodeAndNationalSignificantNumber(n),!0;if(this.fixMissingPlus(n))return this.extractCallingCodeAndNationalSignificantNumber(n),!0}},{key:"extractIddPrefix",value:function(n){var r=n.international,i=n.IDDPrefix,o=n.digits;if(n.nationalSignificantNumber,!(r||i)){var a=h5(o,this.defaultCountry,this.defaultCallingCode,this.metadata.metadata);if(a!==void 0&&a!==o)return n.update({IDDPrefix:o.slice(0,o.length-a.length)}),this.startInternationalNumber(n,{country:void 0,callingCode:void 0}),!0}}},{key:"fixMissingPlus",value:function(n){if(!n.international){var r=p5(n.digits,this.defaultCountry,this.defaultCallingCode,this.metadata.metadata),i=r.countryCallingCode;if(r.number,i)return n.update({missingPlus:!0}),this.startInternationalNumber(n,{country:n.country,callingCode:i}),!0}}},{key:"startInternationalNumber",value:function(n,r){var i=r.country,o=r.callingCode;n.startInternationalNumber(i,o),n.nationalSignificantNumber&&(n.resetNationalSignificantNumber(),this.onNationalSignificantNumberChange(),this.hasExtractedNationalSignificantNumber=void 0)}},{key:"extractCallingCodeAndNationalSignificantNumber",value:function(n){this.extractCountryCallingCode(n)&&this.extractNationalSignificantNumber(n.getNationalDigits(),function(r){return n.update(r)})}}]),e}();function Hk(e){var t=e.search(Lk);if(!(t<0)){e=e.slice(t);var n;return e[0]==="+"&&(n=!0,e=e.slice(1)),e=e.replace(zk,""),n&&(e="+"+e),e}}function Wk(e){var t=Hk(e)||"";return t[0]==="+"?[t.slice(1),!0]:[t]}function Yk(e){var t=Wk(e),n=v5(t,2),r=n[0],i=n[1];return jk.test(r)||(r=""),[r,i]}function T1(e){return T1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T1(e)}function Vk(e,t){return Kk(e)||Qk(e,t)||Gk(e,t)||qk()}function qk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gk(e,t){if(e){if(typeof e=="string")return d3(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d3(e,t)}}function d3(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Qk(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function Kk(e){if(Array.isArray(e))return e}function Zk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Jk(e,t,n){return t&&c3(e.prototype,t),n&&c3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var Ya=function(){function e(t,n){Zk(this,e),this.metadata=new gt(n);var r=this.getCountryAndCallingCode(t),i=Vk(r,2),o=i[0],a=i[1];this.defaultCountry=o,this.defaultCallingCode=a,this.reset()}return Jk(e,[{key:"getCountryAndCallingCode",value:function(n){var r,i;return n&&(T1(n)==="object"?(r=n.defaultCountry,i=n.defaultCallingCode):r=n),r&&!this.metadata.hasCountry(r)&&(r=void 0),[r,i]}},{key:"input",value:function(n){var r=this.parser.input(n,this.state),i=r.digits,o=r.justLeadingPlus;if(o)this.formattedOutput="+";else if(i){this.determineTheCountryIfNeeded(),this.state.nationalSignificantNumber&&this.formatter.narrowDownMatchingFormats(this.state);var a;if(this.metadata.hasSelectedNumberingPlan()&&(a=this.formatter.format(i,this.state)),a===void 0&&this.parser.reExtractNationalSignificantNumber(this.state)){this.determineTheCountryIfNeeded();var l=this.state.getNationalDigits();l&&(a=this.formatter.format(l,this.state))}this.formattedOutput=a?this.getFullNumber(a):this.getNonFormattedNumber()}return this.formattedOutput}},{key:"reset",value:function(){var n=this;return this.state=new nk({onCountryChange:function(i){n.country=i},onCallingCodeChange:function(i,o){n.metadata.selectNumberingPlan(o,i),n.formatter.reset(n.metadata.numberingPlan,n.state),n.parser.reset(n.metadata.numberingPlan)}}),this.formatter=new Ek({state:this.state,metadata:this.metadata}),this.parser=new Bk({defaultCountry:this.defaultCountry,defaultCallingCode:this.defaultCallingCode,metadata:this.metadata,state:this.state,onNationalSignificantNumberChange:function(){n.determineTheCountryIfNeeded(),n.formatter.reset(n.metadata.numberingPlan,n.state)}}),this.state.reset({country:this.defaultCountry,callingCode:this.defaultCallingCode}),this.formattedOutput="",this}},{key:"isInternational",value:function(){return this.state.international}},{key:"getCallingCode",value:function(){if(this.isInternational())return this.state.callingCode}},{key:"getCountryCallingCode",value:function(){return this.getCallingCode()}},{key:"getCountry",value:function(){var n=this.state.digits;if(n)return this._getCountry()}},{key:"_getCountry",value:function(){var n=this.state.country;return n}},{key:"determineTheCountryIfNeeded",value:function(){(!this.state.country||this.isCountryCallingCodeAmbiguous())&&this.determineTheCountry()}},{key:"getFullNumber",value:function(n){var r=this;if(this.isInternational()){var i=function(l){return r.formatter.getInternationalPrefixBeforeCountryCallingCode(r.state,{spacing:!!l})+l},o=this.state.callingCode;return i(o?n?"".concat(o," ").concat(n):o:"".concat(this.state.getDigitsWithoutInternationalPrefix()))}return n}},{key:"getNonFormattedNationalNumberWithPrefix",value:function(){var n=this.state,r=n.nationalSignificantNumber,i=n.complexPrefixBeforeNationalSignificantNumber,o=n.nationalPrefix,a=r,l=i||o;return l&&(a=l+a),a}},{key:"getNonFormattedNumber",value:function(){var n=this.state.nationalSignificantNumberMatchesInput;return this.getFullNumber(n?this.getNonFormattedNationalNumberWithPrefix():this.state.getNationalDigits())}},{key:"getNonFormattedTemplate",value:function(){var n=this.getNonFormattedNumber();if(n)return n.replace(/[\+\d]/g,On)}},{key:"isCountryCallingCodeAmbiguous",value:function(){var n=this.state.callingCode,r=this.metadata.getCountryCodesForCallingCode(n);return r&&r.length>1}},{key:"determineTheCountry",value:function(){this.state.setCountry(m5(this.isInternational()?this.state.callingCode:this.defaultCallingCode,this.state.nationalSignificantNumber,this.metadata))}},{key:"getNumberValue",value:function(){var n=this.state,r=n.digits,i=n.callingCode,o=n.country,a=n.nationalSignificantNumber;if(r){if(this.isInternational())return i?"+"+i+a:"+"+r;if(o||i){var l=o?this.metadata.countryCallingCode():i;return"+"+l+a}}}},{key:"getNumber",value:function(){var n=this.state,r=n.nationalSignificantNumber,i=n.carrierCode,o=n.callingCode,a=this._getCountry();if(r&&!(!a&&!o)){var l=new f5(a||o,r,this.metadata.metadata);return i&&(l.carrierCode=i),l}}},{key:"isPossible",value:function(){var n=this.getNumber();return n?n.isPossible():!1}},{key:"isValid",value:function(){var n=this.getNumber();return n?n.isValid():!1}},{key:"getNationalNumber",value:function(){return this.state.nationalSignificantNumber}},{key:"getChars",value:function(){return(this.state.international?"+":"")+this.state.digits}},{key:"getTemplate",value:function(){return this.formatter.getTemplate(this.state)||this.getNonFormattedTemplate()||""}}]),e}();function f3(e){return new gt(e).getCountries()}function Xk(e,t,n){return n||(n=t,t=void 0),new Ya(t,n).input(e)}function x5(e){var t=e.country,n=e.international,r=e.withCountryCallingCode,i=e.metadata;return t&&n&&!r?"+".concat(wi(t,i)):""}function A1(e,t){return t&&(e=e.slice(t.length),e[0]===" "&&(e=e.slice(1))),e}var eN=["country","international","withCountryCallingCode","metadata"];function R1(){return R1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R1.apply(this,arguments)}function tN(e,t){if(e==null)return{};var n=nN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function nN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function rN(e){function t(n,r){var i=n.country,o=n.international,a=n.withCountryCallingCode,l=n.metadata,u=tN(n,eN),d=C.useCallback(function(c){var h=new Ya(i,l),g=x5({country:i,international:o,withCountryCallingCode:a,metadata:l}),x=h.input(g+c),v=h.getTemplate();return g&&(x=A1(x,g),v&&(v=A1(v,g))),{text:x,template:v}},[i,l]);return ne.createElement(oO,R1({},u,{ref:r,parse:a5,format:d}))}return t=ne.forwardRef(t),t.propTypes={value:K.string.isRequired,onChange:K.func.isRequired,country:K.string,international:K.bool,withCountryCallingCode:K.bool,metadata:K.object.isRequired},t.defaultProps={metadata:e},t}const iN=rN();var oN=["value","onChange","country","international","withCountryCallingCode","metadata","inputComponent"];function F1(){return F1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F1.apply(this,arguments)}function aN(e,t){if(e==null)return{};var n=sN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function lN(e){function t(n,r){var i=n.value,o=n.onChange,a=n.country,l=n.international,u=n.withCountryCallingCode,d=n.metadata,c=n.inputComponent,h=aN(n,oN),g=x5({country:a,international:l,withCountryCallingCode:u,metadata:d}),x=C.useCallback(function(v){var $=C1(v.target.value);if($===i){var w=h3(g,$,a,d);w.indexOf(v.target.value)===0&&($=$.slice(0,-1))}o($)},[g,i,o,a,d]);return ne.createElement(c,F1({},h,{ref:r,value:h3(g,i,a,d),onChange:x}))}return t=ne.forwardRef(t),t.propTypes={value:K.string.isRequired,onChange:K.func.isRequired,country:K.string,international:K.bool,withCountryCallingCode:K.bool,metadata:K.object.isRequired,inputComponent:K.elementType.isRequired},t.defaultProps={metadata:e,inputComponent:"input"},t}const uN=lN();function h3(e,t,n,r){return A1(Xk(e+t,n,r),e)}function dN(e){return p3(e[0])+p3(e[1])}function p3(e){return String.fromCodePoint(127462-65+e.toUpperCase().charCodeAt(0))}var cN=["value","onChange","options"],fN=["value","options","className","iconComponent","getIconAspectRatio","arrowComponent","unicodeFlags"];function hN(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=pN(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pN(e,t){if(e){if(typeof e=="string")return g3(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g3(e,t)}}function g3(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function oc(){return oc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oc.apply(this,arguments)}function b5(e,t){if(e==null)return{};var n=gN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function gN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function $5(e){var t=e.value,n=e.onChange,r=e.options,i=b5(e,cN),o=C.useCallback(function(a){var l=a.target.value;n(l==="ZZ"?void 0:l)},[n]);return C.useMemo(function(){return w5(r,t)},[r,t]),ne.createElement("select",oc({},i,{value:t||"ZZ",onChange:o}),r.map(function(a){var l=a.value,u=a.label,d=a.divider;return ne.createElement("option",{key:d?"|":l||"ZZ",value:d?"|":l||"ZZ",disabled:!!d,style:d?mN:void 0},u)}))}$5.propTypes={value:K.string,onChange:K.func.isRequired,options:K.arrayOf(K.shape({value:K.string,label:K.string,divider:K.bool})).isRequired};var mN={fontSize:"1px",backgroundColor:"currentColor",color:"inherit"};function Pm(e){var t=e.value,n=e.options,r=e.className,i=e.iconComponent;e.getIconAspectRatio;var o=e.arrowComponent,a=e.unicodeFlags,l=b5(e,fN),u=C.useMemo(function(){return w5(n,t)},[n,t]);return ne.createElement("div",{className:"PhoneInputCountry"},ne.createElement($5,oc({},l,{value:t,options:n,className:tc("PhoneInputCountrySelect",r)})),a&&t&&ne.createElement("div",{className:"PhoneInputCountryIconUnicode"},dN(t)),!(a&&t)&&ne.createElement(i,{"aria-hidden":!0,country:t,label:u&&u.label,aspectRatio:a?1:void 0}),ne.createElement(o,null))}Pm.propTypes={iconComponent:K.elementType,arrowComponent:K.elementType.isRequired,unicodeFlags:K.bool};Pm.defaultProps={arrowComponent:function(){return ne.createElement("div",{className:"PhoneInputCountrySelectArrow"})}};function w5(e,t){for(var n=hN(e),r;!(r=n()).done;){var i=r.value;if(!i.divider&&i.value===t)return i}}var yN=["country","countryName","flags","flagUrl"];function D1(){return D1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D1.apply(this,arguments)}function vN(e,t){if(e==null)return{};var n=xN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function xN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Om(e){var t=e.country,n=e.countryName,r=e.flags,i=e.flagUrl,o=vN(e,yN);return r&&r[t]?r[t]({title:n}):ne.createElement("img",D1({},o,{alt:n,role:n?void 0:"presentation",src:i.replace("{XX}",t).replace("{xx}",t.toLowerCase())}))}Om.propTypes={country:K.string.isRequired,countryName:K.string.isRequired,flags:K.objectOf(K.elementType),flagUrl:K.string.isRequired};var bN=["aspectRatio"],$N=["title"],wN=["title"];function ac(){return ac=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ac.apply(this,arguments)}function _m(e,t){if(e==null)return{};var n=SN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function SN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function hf(e){var t=e.aspectRatio,n=_m(e,bN);return t===1?ne.createElement(C5,n):ne.createElement(S5,n)}hf.propTypes={title:K.string.isRequired,aspectRatio:K.number};function S5(e){var t=e.title,n=_m(e,$N);return ne.createElement("svg",ac({},n,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 75 50"}),ne.createElement("title",null,t),ne.createElement("g",{className:"PhoneInputInternationalIconGlobe",stroke:"currentColor",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"},ne.createElement("path",{strokeLinecap:"round",d:"M47.2,36.1C48.1,36,49,36,50,36c7.4,0,14,1.7,18.5,4.3"}),ne.createElement("path",{d:"M68.6,9.6C64.2,12.3,57.5,14,50,14c-7.4,0-14-1.7-18.5-4.3"}),ne.createElement("line",{x1:"26",y1:"25",x2:"74",y2:"25"}),ne.createElement("line",{x1:"50",y1:"1",x2:"50",y2:"49"}),ne.createElement("path",{strokeLinecap:"round",d:"M46.3,48.7c1.2,0.2,2.5,0.3,3.7,0.3c13.3,0,24-10.7,24-24S63.3,1,50,1S26,11.7,26,25c0,2,0.3,3.9,0.7,5.8"}),ne.createElement("path",{strokeLinecap:"round",d:"M46.8,48.2c1,0.6,2.1,0.8,3.2,0.8c6.6,0,12-10.7,12-24S56.6,1,50,1S38,11.7,38,25c0,1.4,0.1,2.7,0.2,4c0,0.1,0,0.2,0,0.2"})),ne.createElement("path",{className:"PhoneInputInternationalIconPhone",stroke:"none",fill:"currentColor",d:"M12.4,17.9c2.9-2.9,5.4-4.8,0.3-11.2S4.1,5.2,1.3,8.1C-2,11.4,1.1,23.5,13.1,35.6s24.3,15.2,27.5,11.9c2.8-2.8,7.8-6.3,1.4-11.5s-8.3-2.6-11.2,0.3c-2,2-7.2-2.2-11.7-6.7S10.4,19.9,12.4,17.9z"}))}S5.propTypes={title:K.string.isRequired};function C5(e){var t=e.title,n=_m(e,wN);return ne.createElement("svg",ac({},n,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"}),ne.createElement("title",null,t),ne.createElement("g",{className:"PhoneInputInternationalIconGlobe",stroke:"currentColor",fill:"none",strokeWidth:"2",strokeLinecap:"round"},ne.createElement("path",{d:"M8.45,13A21.44,21.44,0,1,1,37.08,41.56"}),ne.createElement("path",{d:"M19.36,35.47a36.9,36.9,0,0,1-2.28-13.24C17.08,10.39,21.88.85,27.8.85s10.72,9.54,10.72,21.38c0,6.48-1.44,12.28-3.71,16.21"}),ne.createElement("path",{d:"M17.41,33.4A39,39,0,0,1,27.8,32.06c6.62,0,12.55,1.5,16.48,3.86"}),ne.createElement("path",{d:"M44.29,8.53c-3.93,2.37-9.86,3.88-16.49,3.88S15.25,10.9,11.31,8.54"}),ne.createElement("line",{x1:"27.8",y1:"0.85",x2:"27.8",y2:"34.61"}),ne.createElement("line",{x1:"15.2",y1:"22.23",x2:"49.15",y2:"22.23"})),ne.createElement("path",{className:"PhoneInputInternationalIconPhone",stroke:"transparent",fill:"currentColor",d:"M9.42,26.64c2.22-2.22,4.15-3.59.22-8.49S3.08,17,.93,19.17c-2.49,2.48-.13,11.74,9,20.89s18.41,11.5,20.89,9c2.15-2.15,5.91-4.77,1-8.71s-6.27-2-8.49.22c-1.55,1.55-5.48-1.69-8.86-5.08S7.87,28.19,9.42,26.64Z"}))}C5.propTypes={title:K.string.isRequired};function CN(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=PN(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PN(e,t){if(e){if(typeof e=="string")return m3(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m3(e,t)}}function m3(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ON(e,t){if(!t)return e;for(var n=[],r=[],i=n,o=CN(t),a;!(a=o()).done;){var l=a.value;l==="|"?i.push({divider:!0}):l==="..."||l==="…"?i=r:function(){var u=void 0;l==="🌐"?u=void 0:u=l;var d=e.indexOf(e.filter(function(h){return h.value===u})[0]),c=e[d];e.splice(d,1),i.push(c)}()}return n.concat(e).concat(r)}function _N(e,t){if(e&&(e=e.filter(function(n){switch(n){case"🌐":case"|":case"...":case"…":return!0;default:return pf(n,t)}}),e.length>0))return e}function pf(e,t){return n5(e,t)?!0:(console.error("Country not found: ".concat(e)),!1)}function P5(e,t){return e&&(e=e.filter(function(n){return pf(n,t)}),e.length===0&&(e=void 0)),e}var kN=["country","label","aspectRatio"];function M1(){return M1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M1.apply(this,arguments)}function NN(e,t){if(e==null)return{};var n=EN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function EN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function O5(e){var t=e.flags,n=e.flagUrl,r=e.flagComponent,i=e.internationalIcon;function o(a){var l=a.country,u=a.label,d=a.aspectRatio,c=NN(a,kN),h=i===hf?d:void 0;return ne.createElement("div",M1({},c,{className:tc("PhoneInputCountryIcon",{"PhoneInputCountryIcon--square":h===1,"PhoneInputCountryIcon--border":l})}),l?ne.createElement(r,{country:l,countryName:u,flags:t,flagUrl:n,className:"PhoneInputCountryIconImg"}):ne.createElement(i,{title:u,aspectRatio:h,className:"PhoneInputCountryIconImg"}))}return o.propTypes={country:K.string,label:K.string.isRequired,aspectRatio:K.number},o}O5({flagUrl:"https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",flagComponent:Om,internationalIcon:hf});var _5=K.shape({country_calling_codes:K.object.isRequired,countries:K.object.isRequired}),k5=K.objectOf(K.string);function di(e,t){var n="+"+wi(e,t);return n}function IN(e){var t=e.value,n=e.phoneNumber,r=e.defaultCountry,i=e.getAnyCountry,o=e.countries,a=e.required,l=e.metadata,u;return n&&n.country?u=n.country:r&&(!t||T5(t,r,l))&&(u=r),o&&o.indexOf(u)<0&&(u=void 0),!u&&a&&o&&o.length>0&&(u=i()),u}function TN(e){var t=e.countries,n=e.countryNames,r=e.addInternationalOption,i=e.compareStringsLocales,o=e.compareStrings;o||(o=LN);var a=t.map(function(l){return{value:l,label:n[l]||l}});return a.sort(function(l,u){return o(l.label,u.label,i)}),r&&a.unshift({label:n.ZZ}),a}function N5(e,t){return X_(e||"",t)}function AN(e){return e.formatNational().replace(/\D/g,"")}function RN(e,t){var n=t.prevCountry,r=t.newCountry,i=t.metadata,o=t.useNationalFormat;if(n===r)return e;if(!e)return o?"":di(r,i);if(r){if(e[0]==="+"){if(o)return e.indexOf("+"+wi(r,i))===0?zN(e,r,i):"";if(n){var a=di(r,i);return e.indexOf(a)===0?e:a}else{var l=di(r,i);return e.indexOf(l)===0?e:l}}}else if(e[0]!=="+")return la(e,n,i)||"";return e}function la(e,t,n){if(e){if(e[0]==="+"){if(e==="+")return;var r=new Ya(t,n);return r.input(e),r.getNumberValue()}if(t){var i=I5(e,t,n);return"+".concat(wi(t,n)).concat(i||"")}}}function FN(e,t,n){var r=I5(e,t,n);if(r){var i=r.length-DN(t,n);if(i>0)return e.slice(0,e.length-i)}return e}function DN(e,t){return t=new gt(t),t.selectNumberingPlan(e),t.numberingPlan.possibleLengths()[t.numberingPlan.possibleLengths().length-1]}function E5(e,t){var n=t.country,r=t.countries,i=t.required,o=t.metadata;if(e==="+")return n;var a=jN(e,o);return a&&(!r||r.indexOf(a)>=0)?a:n&&!i&&!T5(e,n,o)?void 0:n}function MN(e,t){var n=t.prevPhoneDigits,r=t.country,i=t.defaultCountry,o=t.countryRequired,a=t.getAnyCountry,l=t.countries,u=t.international,d=t.limitMaxLength,c=t.countryCallingCodeEditable,h=t.metadata;if(u&&c===!1){var g=di(r,h);if(e.indexOf(g)!==0){var x;return e&&e[0]!=="+"?(e=g+e,x=la(e,r,h)):e=g,{phoneDigits:e,value:x,country:r}}}u===!1&&r&&e&&e[0]==="+"&&(e=y3(e,r,h)),e&&r&&d&&(e=FN(e,r,h)),e&&e[0]!=="+"&&(!r||u)&&(e="+"+e),!e&&n&&n[0]==="+"&&(u?r=void 0:r=i),e==="+"&&n&&n[0]==="+"&&n.length>1&&(r=void 0);var v;return e&&(e[0]==="+"&&(e==="+"||r&&di(r,h).indexOf(e)===0)?v=void 0:v=la(e,r,h)),v&&(r=E5(v,{country:r,countries:l,metadata:h}),u===!1&&r&&e&&e[0]==="+"&&(e=y3(e,r,h),v=la(e,r,h))),!r&&o&&(r=i||a()),{phoneDigits:e,country:r,value:v}}function y3(e,t,n){if(e.indexOf(di(t,n))===0){var r=new Ya(t,n);r.input(e);var i=r.getNumber();return i?i.formatNational().replace(/\D/g,""):""}else return e.replace(/\D/g,"")}function jN(e,t){var n=new Ya(null,t);return n.input(e),n.getCountry()}function LN(e,t,n){return String.prototype.localeCompare?e.localeCompare(t,n):e<t?-1:e>t?1:0}function zN(e,t,n){if(t){var r="+"+wi(t,n);if(e.length<r.length){if(r.indexOf(e)===0)return""}else if(e.indexOf(r)===0)return e.slice(r.length)}for(var i=0,o=Object.keys(n.country_calling_codes);i<o.length;i++){var a=o[i];if(e.indexOf(a)===1)return e.slice(1+a.length)}return""}function I5(e,t,n){var r=new Ya(t,n);r.input(e);var i=r.getNumber();return i&&i.nationalNumber}function T5(e,t,n){for(var r=di(t,n),i=0;i<e.length&&i<r.length;){if(e[i]!==r[i])return!1;i++}return!0}function A5(e){var t=e.value,n=e.phoneNumber,r=e.defaultCountry,i=e.international,o=e.useNationalFormat,a=e.metadata;return(i===!1||o)&&n&&n.country?AN(n):!t&&i&&r?di(r,a):t}function v3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function bu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?v3(Object(n),!0).forEach(function(r){UN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function UN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function BN(e,t,n){var r=e.metadata,i=e.countries,o=e.defaultCountry,a=e.value,l=e.reset,u=e.international,d=e.displayInitialValueAsLocalNumber,c=e.initialValueFormat,h=t.defaultCountry,g=t.value,x=t.reset;n.country;var v=n.value,$=n.hasUserSelectedACountry,w=function(W){return A5(bu(bu({},W),{},{international:u,useNationalFormat:d||c==="national",metadata:r}))};if(l!==x)return{phoneDigits:w({value:void 0,defaultCountry:o}),value:void 0,country:o,hasUserSelectedACountry:void 0};if(o!==h){var y=!o||pf(o,r),p=!v||u&&v===w({value:void 0,defaultCountry:h}),b=!a&&p;if(!$&&y&&b)return{country:o,phoneDigits:w({value:void 0,defaultCountry:o}),value:void 0}}if(!x3(a,g)&&!x3(a,v)){var S,P;if(a){S=N5(a,r);var _=P5(i,r);S&&S.country?(!_||_.indexOf(S.country)>=0)&&(P=S.country):P=E5(a,{country:void 0,countries:_,metadata:r})}var T;return a||(T={hasUserSelectedACountry:void 0}),bu(bu({},T),{},{phoneDigits:w({phoneNumber:S,value:a,defaultCountry:o}),value:a,country:a?P:o})}}function x3(e,t){return e===null&&(e=void 0),t===null&&(t=void 0),e===t}function j1(e){return j1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j1(e)}var HN=["name","disabled","readOnly","autoComplete","style","className","inputRef","inputComponent","numberInputProps","smartCaret","countrySelectComponent","countrySelectProps","containerComponent","defaultCountry","countries","countryOptionsOrder","labels","flags","flagComponent","flagUrl","addInternationalOption","internationalIcon","displayInitialValueAsLocalNumber","initialValueFormat","onCountryChange","limitMaxLength","countryCallingCodeEditable","focusInputOnCountrySelection","reset","metadata","international","locales"];function b3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function WN(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?b3(Object(n),!0).forEach(function(r){Cn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pl(){return pl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pl.apply(this,arguments)}function YN(e,t){if(e==null)return{};var n=VN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function VN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function qN(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function GN(e,t,n){return t&&$3(e.prototype,t),n&&$3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function QN(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L1(e,t)}function L1(e,t){return L1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},L1(e,t)}function KN(e){var t=JN();return function(){var r=sc(e),i;if(t){var o=sc(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return ZN(this,i)}}function ZN(e,t){if(t&&(j1(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Sn(e)}function Sn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function JN(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function sc(e){return sc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},sc(e)}function Cn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var XN=function(e){QN(n,e);var t=KN(n);function n(r){var i;qN(this,n),i=t.call(this,r),Cn(Sn(i),"setInputRef",function(y){i.inputRef.current=y;var p=i.props.inputRef;p&&(typeof p=="function"?p(y):p.current=y)}),Cn(Sn(i),"isCountrySupportedWithError",function(y){var p=i.props.metadata;return pf(y,p)}),Cn(Sn(i),"onCountryChange",function(y){var p=i.props,b=p.international,S=p.metadata,P=p.onChange,_=p.focusInputOnCountrySelection,T=i.state,R=T.phoneDigits,W=T.country,z=RN(R,{prevCountry:W,newCountry:y,metadata:S,useNationalFormat:!b}),ie=la(z,y,S);_&&i.inputRef.current.focus(),i.setState({country:y,hasUserSelectedACountry:!0,phoneDigits:z,value:ie},function(){P(ie)})}),Cn(Sn(i),"onChange",function(y){var p=i.props,b=p.defaultCountry,S=p.onChange,P=p.addInternationalOption,_=p.international,T=p.limitMaxLength,R=p.countryCallingCodeEditable,W=p.metadata,z=i.state,ie=z.countries,M=z.phoneDigits,j=z.country,J=MN(y,{prevPhoneDigits:M,country:j,countryRequired:!P,defaultCountry:b,getAnyCountry:function(){return i.getFirstSupportedCountry({countries:ie})},countries:ie,international:_,limitMaxLength:T,countryCallingCodeEditable:R,metadata:W}),F=J.phoneDigits,X=J.country,te=J.value,L={phoneDigits:F,value:te,country:X};R===!1&&!te&&F===i.state.phoneDigits&&(L.forceRerender={}),i.setState(L,function(){return S(te)})}),Cn(Sn(i),"_onFocus",function(){return i.setState({isFocused:!0})}),Cn(Sn(i),"_onBlur",function(){return i.setState({isFocused:!1})}),Cn(Sn(i),"onFocus",function(y){i._onFocus();var p=i.props.onFocus;p&&p(y)}),Cn(Sn(i),"onBlur",function(y){var p=i.props.onBlur;i._onBlur(),p&&p(y)}),Cn(Sn(i),"onCountryFocus",function(y){i._onFocus();var p=i.props.countrySelectProps;if(p){var b=p.onFocus;b&&b(y)}}),Cn(Sn(i),"onCountryBlur",function(y){i._onBlur();var p=i.props.countrySelectProps;if(p){var b=p.onBlur;b&&b(y)}}),i.inputRef=ne.createRef();var o=i.props,a=o.value;o.labels;var l=o.international,u=o.addInternationalOption,d=o.displayInitialValueAsLocalNumber,c=o.initialValueFormat,h=o.metadata,g=i.props,x=g.defaultCountry,v=g.countries;x&&(i.isCountrySupportedWithError(x)||(x=void 0)),v=P5(v,h);var $=N5(a,h);i.CountryIcon=O5(i.props);var w=IN({value:a,phoneNumber:$,defaultCountry:x,required:!u,countries:v||f3(h),getAnyCountry:function(){return i.getFirstSupportedCountry({countries:v})},metadata:h});return i.state={props:i.props,country:w,countries:v,phoneDigits:A5({value:a,phoneNumber:$,defaultCountry:x,international:l,useNationalFormat:d||c==="national",metadata:h}),value:a},i}return GN(n,[{key:"componentDidMount",value:function(){var i=this.props.onCountryChange,o=this.props.defaultCountry,a=this.state.country;i&&(o&&(this.isCountrySupportedWithError(o)||(o=void 0)),a!==o&&i(a))}},{key:"componentDidUpdate",value:function(i,o){var a=this.props.onCountryChange,l=this.state.country;a&&l!==o.country&&a(l)}},{key:"getCountrySelectOptions",value:function(i){var o=i.countries,a=this.props,l=a.international,u=a.countryCallingCodeEditable,d=a.countryOptionsOrder,c=a.addInternationalOption,h=a.labels,g=a.locales,x=a.metadata;return this.useMemoCountrySelectOptions(function(){return ON(TN({countries:o||f3(x),countryNames:h,addInternationalOption:l&&u===!1?!1:c,compareStringsLocales:g}),_N(d,x))},[o,d,c,h,x])}},{key:"useMemoCountrySelectOptions",value:function(i,o){return(!this.countrySelectOptionsMemoDependencies||!tE(o,this.countrySelectOptionsMemoDependencies))&&(this.countrySelectOptionsMemo=i(),this.countrySelectOptionsMemoDependencies=o),this.countrySelectOptionsMemo}},{key:"getFirstSupportedCountry",value:function(i){var o=i.countries,a=this.getCountrySelectOptions({countries:o});return a[0].value}},{key:"render",value:function(){var i=this.props,o=i.name,a=i.disabled,l=i.readOnly,u=i.autoComplete,d=i.style,c=i.className;i.inputRef;var h=i.inputComponent,g=i.numberInputProps,x=i.smartCaret,v=i.countrySelectComponent,$=i.countrySelectProps,w=i.containerComponent;i.defaultCountry,i.countries,i.countryOptionsOrder;var y=i.labels;i.flags,i.flagComponent,i.flagUrl,i.addInternationalOption,i.internationalIcon,i.displayInitialValueAsLocalNumber,i.initialValueFormat,i.onCountryChange,i.limitMaxLength,i.countryCallingCodeEditable,i.focusInputOnCountrySelection,i.reset;var p=i.metadata;i.international,i.locales;var b=YN(i,HN),S=this.state,P=S.country,_=S.countries,T=S.phoneDigits,R=S.isFocused,W=x?iN:uN,z=this.getCountrySelectOptions({countries:_});return ne.createElement(w,{style:d,className:tc(c,"PhoneInput",{"PhoneInput--focus":R,"PhoneInput--disabled":a,"PhoneInput--readOnly":l})},ne.createElement(v,pl({name:o?"".concat(o,"Country"):void 0,"aria-label":y.country},$,{value:P,options:z,onChange:this.onCountryChange,onFocus:this.onCountryFocus,onBlur:this.onCountryBlur,disabled:a||$&&$.disabled,readOnly:l||$&&$.readOnly,iconComponent:this.CountryIcon})),ne.createElement(W,pl({ref:this.setInputRef,type:"tel",autoComplete:u},g,b,{name:o,metadata:p,country:P,value:T||"",onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,disabled:a,readOnly:l,inputComponent:h,className:tc("PhoneInputInput",g&&g.className,b.className)})))}}],[{key:"getDerivedStateFromProps",value:function(i,o){return WN({props:i},BN(i,o.props,o))}}]),n}(ne.PureComponent),km=ne.forwardRef(function(e,t){return ne.createElement(XN,pl({},e,{inputRef:t}))});km.propTypes={value:K.string,onChange:K.func.isRequired,onFocus:K.func,onBlur:K.func,disabled:K.bool,readOnly:K.bool,autoComplete:K.string.isRequired,initialValueFormat:K.oneOf(["national"]),displayInitialValueAsLocalNumber:K.bool,defaultCountry:K.string,countries:K.arrayOf(K.string),labels:k5.isRequired,locales:K.oneOfType([K.string,K.arrayOf(K.string)]),flagUrl:K.string.isRequired,flags:K.objectOf(K.elementType),flagComponent:K.elementType.isRequired,addInternationalOption:K.bool.isRequired,internationalIcon:K.elementType.isRequired,countryOptionsOrder:K.arrayOf(K.string),style:K.object,className:K.string,countrySelectComponent:K.elementType.isRequired,countrySelectProps:K.object,inputComponent:K.elementType.isRequired,containerComponent:K.elementType.isRequired,numberInputProps:K.object,smartCaret:K.bool.isRequired,international:K.bool,limitMaxLength:K.bool.isRequired,countryCallingCodeEditable:K.bool.isRequired,metadata:_5.isRequired,onCountryChange:K.func,focusInputOnCountrySelection:K.bool.isRequired};km.defaultProps={autoComplete:"tel",countrySelectComponent:Pm,flagComponent:Om,flagUrl:"https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",internationalIcon:hf,inputComponent:"input",containerComponent:"div",reset:K.any,smartCaret:!0,addInternationalOption:!0,limitMaxLength:!1,countryCallingCodeEditable:!0,focusInputOnCountrySelection:!0};const eE=km;function tE(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;){if(e[n]!==t[n])return!1;n++}return!0}const nE={ext:"ext.",country:"Phone number country",phone:"Phone",AB:"Abkhazia",AC:"Ascension Island",AD:"Andorra",AE:"United Arab Emirates",AF:"Afghanistan",AG:"Antigua and Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:"American Samoa",AT:"Austria",AU:"Australia",AW:"Aruba",AX:"Åland Islands",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BL:"Saint Barthélemy",BM:"Bermuda",BN:"Brunei Darussalam",BO:"Bolivia",BQ:"Bonaire, Sint Eustatius and Saba",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BV:"Bouvet Island",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CC:"Cocos (Keeling) Islands",CD:"Congo, Democratic Republic of the",CF:"Central African Republic",CG:"Congo",CH:"Switzerland",CI:"Cote d'Ivoire",CK:"Cook Islands",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CU:"Cuba",CV:"Cape Verde",CW:"Curaçao",CX:"Christmas Island",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",EH:"Western Sahara",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",FM:"Federated States of Micronesia",FO:"Faroe Islands",FR:"France",GA:"Gabon",GB:"United Kingdom",GD:"Grenada",GE:"Georgia",GF:"French Guiana",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Equatorial Guinea",GR:"Greece",GS:"South Georgia and the South Sandwich Islands",GT:"Guatemala",GU:"Guam",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong",HM:"Heard Island and McDonald Islands",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IM:"Isle of Man",IN:"India",IO:"British Indian Ocean Territory",IQ:"Iraq",IR:"Iran",IS:"Iceland",IT:"Italy",JE:"Jersey",JM:"Jamaica",JO:"Jordan",JP:"Japan",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KI:"Kiribati",KM:"Comoros",KN:"Saint Kitts and Nevis",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Laos",LB:"Lebanon",LC:"Saint Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libya",MA:"Morocco",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MF:"Saint Martin (French Part)",MG:"Madagascar",MH:"Marshall Islands",MK:"North Macedonia",ML:"Mali",MM:"Myanmar",MN:"Mongolia",MO:"Macao",MP:"Northern Mariana Islands",MQ:"Martinique",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NR:"Nauru",NU:"Niue",NZ:"New Zealand",OM:"Oman",OS:"South Ossetia",PA:"Panama",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PM:"Saint Pierre and Miquelon",PN:"Pitcairn",PR:"Puerto Rico",PS:"Palestine",PT:"Portugal",PW:"Palau",PY:"Paraguay",QA:"Qatar",RE:"Reunion",RO:"Romania",RS:"Serbia",RU:"Russia",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SH:"Saint Helena",SI:"Slovenia",SJ:"Svalbard and Jan Mayen",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",SS:"South Sudan",ST:"Sao Tome and Principe",SV:"El Salvador",SX:"Sint Maarten",SY:"Syria",SZ:"Swaziland",TA:"Tristan da Cunha",TC:"Turks and Caicos Islands",TD:"Chad",TF:"French Southern Territories",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TK:"Tokelau",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turkey",TT:"Trinidad and Tobago",TV:"Tuvalu",TW:"Taiwan",TZ:"Tanzania",UA:"Ukraine",UG:"Uganda",UM:"United States Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VA:"Holy See (Vatican City State)",VC:"Saint Vincent and the Grenadines",VE:"Venezuela",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis and Futuna",WS:"Samoa",XK:"Kosovo",YE:"Yemen",YT:"Mayotte",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe",ZZ:"International"};function z1(){return z1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z1.apply(this,arguments)}function R5(e){var t=ne.forwardRef(function(n,r){return ne.createElement(eE,z1({ref:r},n))});return t.propTypes={metadata:_5.isRequired,labels:k5.isRequired},t.defaultProps={metadata:e,labels:nE},t}R5();const Nm=R5(IP);function F5(e,t){return function(){return e.apply(t,arguments)}}const{toString:D5}=Object.prototype,{getPrototypeOf:Em}=Object,Im=(e=>t=>{const n=D5.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ir=e=>(e=e.toLowerCase(),t=>Im(t)===e),gf=e=>t=>typeof t===e,{isArray:Va}=Array,gl=gf("undefined");function rE(e){return e!==null&&!gl(e)&&e.constructor!==null&&!gl(e.constructor)&&mi(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const M5=Ir("ArrayBuffer");function iE(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&M5(e.buffer),t}const oE=gf("string"),mi=gf("function"),j5=gf("number"),Tm=e=>e!==null&&typeof e=="object",aE=e=>e===!0||e===!1,ud=e=>{if(Im(e)!=="object")return!1;const t=Em(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},sE=Ir("Date"),lE=Ir("File"),uE=Ir("Blob"),dE=Ir("FileList"),cE=e=>Tm(e)&&mi(e.pipe),fE=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||D5.call(e)===t||mi(e.toString)&&e.toString()===t)},hE=Ir("URLSearchParams"),pE=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ul(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Va(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let l;for(r=0;r<a;r++)l=o[r],t.call(null,e[l],l,e)}}function L5(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const z5=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),U5=e=>!gl(e)&&e!==z5;function U1(){const{caseless:e}=U5(this)&&this||{},t={},n=(r,i)=>{const o=e&&L5(t,i)||i;ud(t[o])&&ud(r)?t[o]=U1(t[o],r):ud(r)?t[o]=U1({},r):Va(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ul(arguments[r],n);return t}const gE=(e,t,n,{allOwnKeys:r}={})=>(Ul(t,(i,o)=>{n&&mi(i)?e[o]=F5(i,n):e[o]=i},{allOwnKeys:r}),e),mE=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),yE=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},vE=(e,t,n,r)=>{let i,o,a;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&Em(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},xE=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},bE=e=>{if(!e)return null;if(Va(e))return e;let t=e.length;if(!j5(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},$E=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Em(Uint8Array)),wE=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},SE=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},CE=Ir("HTMLFormElement"),PE=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),w3=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),OE=Ir("RegExp"),B5=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ul(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},_E=e=>{B5(e,(t,n)=>{if(mi(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(mi(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},kE=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Va(e)?r(e):r(String(e).split(t)),n},NE=()=>{},EE=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Th="abcdefghijklmnopqrstuvwxyz",S3="0123456789",H5={DIGIT:S3,ALPHA:Th,ALPHA_DIGIT:Th+Th.toUpperCase()+S3},IE=(e=16,t=H5.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function TE(e){return!!(e&&mi(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const AE=e=>{const t=new Array(10),n=(r,i)=>{if(Tm(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Va(r)?[]:{};return Ul(r,(a,l)=>{const u=n(a,i+1);!gl(u)&&(o[l]=u)}),t[i]=void 0,o}}return r};return n(e,0)},B={isArray:Va,isArrayBuffer:M5,isBuffer:rE,isFormData:fE,isArrayBufferView:iE,isString:oE,isNumber:j5,isBoolean:aE,isObject:Tm,isPlainObject:ud,isUndefined:gl,isDate:sE,isFile:lE,isBlob:uE,isRegExp:OE,isFunction:mi,isStream:cE,isURLSearchParams:hE,isTypedArray:$E,isFileList:dE,forEach:Ul,merge:U1,extend:gE,trim:pE,stripBOM:mE,inherits:yE,toFlatObject:vE,kindOf:Im,kindOfTest:Ir,endsWith:xE,toArray:bE,forEachEntry:wE,matchAll:SE,isHTMLForm:CE,hasOwnProperty:w3,hasOwnProp:w3,reduceDescriptors:B5,freezeMethods:_E,toObjectSet:kE,toCamelCase:PE,noop:NE,toFiniteNumber:EE,findKey:L5,global:z5,isContextDefined:U5,ALPHABET:H5,generateString:IE,isSpecCompliantForm:TE,toJSONObject:AE};function we(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}B.inherits(we,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const W5=we.prototype,Y5={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Y5[e]={value:e}});Object.defineProperties(we,Y5);Object.defineProperty(W5,"isAxiosError",{value:!0});we.from=(e,t,n,r,i,o)=>{const a=Object.create(W5);return B.toFlatObject(e,a,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),we.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const RE=null;function B1(e){return B.isPlainObject(e)||B.isArray(e)}function V5(e){return B.endsWith(e,"[]")?e.slice(0,-2):e}function C3(e,t,n){return e?e.concat(t).map(function(i,o){return i=V5(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function FE(e){return B.isArray(e)&&!e.some(B1)}const DE=B.toFlatObject(B,{},null,function(t){return/^is[A-Z]/.test(t)});function mf(e,t,n){if(!B.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=B.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function($,w){return!B.isUndefined(w[$])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,a=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(t);if(!B.isFunction(i))throw new TypeError("visitor must be a function");function d(v){if(v===null)return"";if(B.isDate(v))return v.toISOString();if(!u&&B.isBlob(v))throw new we("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(v)||B.isTypedArray(v)?u&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function c(v,$,w){let y=v;if(v&&!w&&typeof v=="object"){if(B.endsWith($,"{}"))$=r?$:$.slice(0,-2),v=JSON.stringify(v);else if(B.isArray(v)&&FE(v)||(B.isFileList(v)||B.endsWith($,"[]"))&&(y=B.toArray(v)))return $=V5($),y.forEach(function(b,S){!(B.isUndefined(b)||b===null)&&t.append(a===!0?C3([$],S,o):a===null?$:$+"[]",d(b))}),!1}return B1(v)?!0:(t.append(C3(w,$,o),d(v)),!1)}const h=[],g=Object.assign(DE,{defaultVisitor:c,convertValue:d,isVisitable:B1});function x(v,$){if(!B.isUndefined(v)){if(h.indexOf(v)!==-1)throw Error("Circular reference detected in "+$.join("."));h.push(v),B.forEach(v,function(y,p){(!(B.isUndefined(y)||y===null)&&i.call(t,y,B.isString(p)?p.trim():p,$,g))===!0&&x(y,$?$.concat(p):[p])}),h.pop()}}if(!B.isObject(e))throw new TypeError("data must be an object");return x(e),t}function P3(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Am(e,t){this._pairs=[],e&&mf(e,this,t)}const q5=Am.prototype;q5.append=function(t,n){this._pairs.push([t,n])};q5.toString=function(t){const n=t?function(r){return t.call(this,r,P3)}:P3;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function ME(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function G5(e,t,n){if(!t)return e;const r=n&&n.encode||ME,i=n&&n.serialize;let o;if(i?o=i(t,n):o=B.isURLSearchParams(t)?t.toString():new Am(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class jE{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){B.forEach(this.handlers,function(r){r!==null&&t(r)})}}const O3=jE,Q5={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},LE=typeof URLSearchParams<"u"?URLSearchParams:Am,zE=typeof FormData<"u"?FormData:null,UE=typeof Blob<"u"?Blob:null,BE=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),HE=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Gn={isBrowser:!0,classes:{URLSearchParams:LE,FormData:zE,Blob:UE},isStandardBrowserEnv:BE,isStandardBrowserWebWorkerEnv:HE,protocols:["http","https","file","blob","url","data"]};function WE(e,t){return mf(e,new Gn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Gn.isNode&&B.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function YE(e){return B.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function VE(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function K5(e){function t(n,r,i,o){let a=n[o++];const l=Number.isFinite(+a),u=o>=n.length;return a=!a&&B.isArray(i)?i.length:a,u?(B.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!l):((!i[a]||!B.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&B.isArray(i[a])&&(i[a]=VE(i[a])),!l)}if(B.isFormData(e)&&B.isFunction(e.entries)){const n={};return B.forEachEntry(e,(r,i)=>{t(YE(r),i,n,0)}),n}return null}const qE={"Content-Type":void 0};function GE(e,t,n){if(B.isString(e))try{return(t||JSON.parse)(e),B.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const yf={transitional:Q5,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=B.isObject(t);if(o&&B.isHTMLForm(t)&&(t=new FormData(t)),B.isFormData(t))return i&&i?JSON.stringify(K5(t)):t;if(B.isArrayBuffer(t)||B.isBuffer(t)||B.isStream(t)||B.isFile(t)||B.isBlob(t))return t;if(B.isArrayBufferView(t))return t.buffer;if(B.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return WE(t,this.formSerializer).toString();if((l=B.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return mf(l?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),GE(t)):t}],transformResponse:[function(t){const n=this.transitional||yf.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&B.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?we.from(l,we.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Gn.classes.FormData,Blob:Gn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};B.forEach(["delete","get","head"],function(t){yf.headers[t]={}});B.forEach(["post","put","patch"],function(t){yf.headers[t]=B.merge(qE)});const Rm=yf,QE=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),KE=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&QE[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},_3=Symbol("internals");function ls(e){return e&&String(e).trim().toLowerCase()}function dd(e){return e===!1||e==null?e:B.isArray(e)?e.map(dd):String(e)}function ZE(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const JE=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ah(e,t,n,r,i){if(B.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!B.isString(t)){if(B.isString(r))return t.indexOf(r)!==-1;if(B.isRegExp(r))return r.test(t)}}function XE(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function eI(e,t){const n=B.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class vf{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,u,d){const c=ls(u);if(!c)throw new Error("header name must be a non-empty string");const h=B.findKey(i,c);(!h||i[h]===void 0||d===!0||d===void 0&&i[h]!==!1)&&(i[h||u]=dd(l))}const a=(l,u)=>B.forEach(l,(d,c)=>o(d,c,u));return B.isPlainObject(t)||t instanceof this.constructor?a(t,n):B.isString(t)&&(t=t.trim())&&!JE(t)?a(KE(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=ls(t),t){const r=B.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return ZE(i);if(B.isFunction(n))return n.call(this,i,r);if(B.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ls(t),t){const r=B.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ah(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=ls(a),a){const l=B.findKey(r,a);l&&(!n||Ah(r,r[l],l,n))&&(delete r[l],i=!0)}}return B.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Ah(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return B.forEach(this,(i,o)=>{const a=B.findKey(r,o);if(a){n[a]=dd(i),delete n[o];return}const l=t?XE(o):String(o).trim();l!==o&&delete n[o],n[l]=dd(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return B.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&B.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[_3]=this[_3]={accessors:{}}).accessors,i=this.prototype;function o(a){const l=ls(a);r[l]||(eI(i,a),r[l]=!0)}return B.isArray(t)?t.forEach(o):o(t),this}}vf.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.freezeMethods(vf.prototype);B.freezeMethods(vf);const $r=vf;function Rh(e,t){const n=this||Rm,r=t||n,i=$r.from(r.headers);let o=r.data;return B.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Z5(e){return!!(e&&e.__CANCEL__)}function Bl(e,t,n){we.call(this,e??"canceled",we.ERR_CANCELED,t,n),this.name="CanceledError"}B.inherits(Bl,we,{__CANCEL__:!0});function tI(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new we("Request failed with status code "+n.status,[we.ERR_BAD_REQUEST,we.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const nI=Gn.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,l){const u=[];u.push(n+"="+encodeURIComponent(r)),B.isNumber(i)&&u.push("expires="+new Date(i).toGMTString()),B.isString(o)&&u.push("path="+o),B.isString(a)&&u.push("domain="+a),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function rI(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function iI(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function J5(e,t){return e&&!rI(t)?iI(e,t):t}const oI=Gn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const l=B.isString(a)?i(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function aI(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function sI(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(u){const d=Date.now(),c=r[o];a||(a=d),n[i]=u,r[i]=d;let h=o,g=0;for(;h!==i;)g+=n[h++],h=h%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),d-a<t)return;const x=c&&d-c;return x?Math.round(g*1e3/x):void 0}}function k3(e,t){let n=0;const r=sI(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-n,u=r(l),d=o<=a;n=o;const c={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&d?(a-o)/u:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const lI=typeof XMLHttpRequest<"u",uI=lI&&function(e){return new Promise(function(n,r){let i=e.data;const o=$r.from(e.headers).normalize(),a=e.responseType;let l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}B.isFormData(i)&&(Gn.isStandardBrowserEnv||Gn.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let d=new XMLHttpRequest;if(e.auth){const x=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(x+":"+v))}const c=J5(e.baseURL,e.url);d.open(e.method.toUpperCase(),G5(c,e.params,e.paramsSerializer),!0),d.timeout=e.timeout;function h(){if(!d)return;const x=$r.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),$={data:!a||a==="text"||a==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:x,config:e,request:d};tI(function(y){n(y),u()},function(y){r(y),u()},$),d=null}if("onloadend"in d?d.onloadend=h:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(h)},d.onabort=function(){d&&(r(new we("Request aborted",we.ECONNABORTED,e,d)),d=null)},d.onerror=function(){r(new we("Network Error",we.ERR_NETWORK,e,d)),d=null},d.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const $=e.transitional||Q5;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),r(new we(v,$.clarifyTimeoutError?we.ETIMEDOUT:we.ECONNABORTED,e,d)),d=null},Gn.isStandardBrowserEnv){const x=(e.withCredentials||oI(c))&&e.xsrfCookieName&&nI.read(e.xsrfCookieName);x&&o.set(e.xsrfHeaderName,x)}i===void 0&&o.setContentType(null),"setRequestHeader"in d&&B.forEach(o.toJSON(),function(v,$){d.setRequestHeader($,v)}),B.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),a&&a!=="json"&&(d.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&d.addEventListener("progress",k3(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",k3(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=x=>{d&&(r(!x||x.type?new Bl(null,e,d):x),d.abort(),d=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=aI(c);if(g&&Gn.protocols.indexOf(g)===-1){r(new we("Unsupported protocol "+g+":",we.ERR_BAD_REQUEST,e));return}d.send(i||null)})},cd={http:RE,xhr:uI};B.forEach(cd,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const dI={getAdapter:e=>{e=B.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=B.isString(n)?cd[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new we(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(B.hasOwnProp(cd,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!B.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:cd};function Fh(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Bl(null,e)}function N3(e){return Fh(e),e.headers=$r.from(e.headers),e.data=Rh.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),dI.getAdapter(e.adapter||Rm.adapter)(e).then(function(r){return Fh(e),r.data=Rh.call(e,e.transformResponse,r),r.headers=$r.from(r.headers),r},function(r){return Z5(r)||(Fh(e),r&&r.response&&(r.response.data=Rh.call(e,e.transformResponse,r.response),r.response.headers=$r.from(r.response.headers))),Promise.reject(r)})}const E3=e=>e instanceof $r?e.toJSON():e;function Da(e,t){t=t||{};const n={};function r(d,c,h){return B.isPlainObject(d)&&B.isPlainObject(c)?B.merge.call({caseless:h},d,c):B.isPlainObject(c)?B.merge({},c):B.isArray(c)?c.slice():c}function i(d,c,h){if(B.isUndefined(c)){if(!B.isUndefined(d))return r(void 0,d,h)}else return r(d,c,h)}function o(d,c){if(!B.isUndefined(c))return r(void 0,c)}function a(d,c){if(B.isUndefined(c)){if(!B.isUndefined(d))return r(void 0,d)}else return r(void 0,c)}function l(d,c,h){if(h in t)return r(d,c);if(h in e)return r(void 0,d)}const u={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(d,c)=>i(E3(d),E3(c),!0)};return B.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const h=u[c]||i,g=h(e[c],t[c],c);B.isUndefined(g)&&h!==l||(n[c]=g)}),n}const X5="1.3.5",Fm={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Fm[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const I3={};Fm.transitional=function(t,n,r){function i(o,a){return"[Axios v"+X5+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,l)=>{if(t===!1)throw new we(i(a," has been removed"+(n?" in "+n:"")),we.ERR_DEPRECATED);return n&&!I3[a]&&(I3[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,l):!0}};function cI(e,t,n){if(typeof e!="object")throw new we("options must be an object",we.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const l=e[o],u=l===void 0||a(l,o,e);if(u!==!0)throw new we("option "+o+" must be "+u,we.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new we("Unknown option "+o,we.ERR_BAD_OPTION)}}const H1={assertOptions:cI,validators:Fm},Mr=H1.validators;class lc{constructor(t){this.defaults=t,this.interceptors={request:new O3,response:new O3}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Da(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&H1.assertOptions(r,{silentJSONParsing:Mr.transitional(Mr.boolean),forcedJSONParsing:Mr.transitional(Mr.boolean),clarifyTimeoutError:Mr.transitional(Mr.boolean)},!1),i!=null&&(B.isFunction(i)?n.paramsSerializer={serialize:i}:H1.assertOptions(i,{encode:Mr.function,serialize:Mr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a;a=o&&B.merge(o.common,o[n.method]),a&&B.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=$r.concat(a,o);const l=[];let u=!0;this.interceptors.request.forEach(function($){typeof $.runWhen=="function"&&$.runWhen(n)===!1||(u=u&&$.synchronous,l.unshift($.fulfilled,$.rejected))});const d=[];this.interceptors.response.forEach(function($){d.push($.fulfilled,$.rejected)});let c,h=0,g;if(!u){const v=[N3.bind(this),void 0];for(v.unshift.apply(v,l),v.push.apply(v,d),g=v.length,c=Promise.resolve(n);h<g;)c=c.then(v[h++],v[h++]);return c}g=l.length;let x=n;for(h=0;h<g;){const v=l[h++],$=l[h++];try{x=v(x)}catch(w){$.call(this,w);break}}try{c=N3.call(this,x)}catch(v){return Promise.reject(v)}for(h=0,g=d.length;h<g;)c=c.then(d[h++],d[h++]);return c}getUri(t){t=Da(this.defaults,t);const n=J5(t.baseURL,t.url);return G5(n,t.params,t.paramsSerializer)}}B.forEach(["delete","get","head","options"],function(t){lc.prototype[t]=function(n,r){return this.request(Da(r||{},{method:t,url:n,data:(r||{}).data}))}});B.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,l){return this.request(Da(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}lc.prototype[t]=n(),lc.prototype[t+"Form"]=n(!0)});const fd=lc;class Dm{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(l=>{r.subscribe(l),o=l}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,l){r.reason||(r.reason=new Bl(o,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Dm(function(i){t=i}),cancel:t}}}const fI=Dm;function hI(e){return function(n){return e.apply(null,n)}}function pI(e){return B.isObject(e)&&e.isAxiosError===!0}const W1={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(W1).forEach(([e,t])=>{W1[t]=e});const gI=W1;function ew(e){const t=new fd(e),n=F5(fd.prototype.request,t);return B.extend(n,fd.prototype,t,{allOwnKeys:!0}),B.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return ew(Da(e,i))},n}const dt=ew(Rm);dt.Axios=fd;dt.CanceledError=Bl;dt.CancelToken=fI;dt.isCancel=Z5;dt.VERSION=X5;dt.toFormData=mf;dt.AxiosError=we;dt.Cancel=dt.CanceledError;dt.all=function(t){return Promise.all(t)};dt.spread=hI;dt.isAxiosError=pI;dt.mergeConfig=Da;dt.AxiosHeaders=$r;dt.formToJSON=e=>K5(B.isHTMLForm(e)?new FormData(e):e);dt.HttpStatusCode=gI;dt.default=dt;const Xe=dt,tr="https://crossbackend.onrender.com",mI=async({firstName:e,lastName:t,email:n,companyName:r,phoneNum:i,password:o})=>{await Xe.post(`${tr}/api/seler/register`,{firstName:e,lastName:t,email:n,companyName:r,phoneNum:i,password:o}).then(a=>{localStorage.setItem("user",JSON.stringify(a.data.data)),alert(a.data.token)})},yI=async e=>{await Xe.post(`${tr}/api/user/register`,e).then(t=>{localStorage.setItem("user",JSON.stringify(t.data.data)),alert(t.data.token)})},vI=async({email:e,password:t})=>{await Xe.post(`${tr}/api/user/login`,{email:e,password:t}).then(n=>{localStorage.setItem("user",JSON.stringify(n.data.data))})},xI=async({email:e,password:t})=>{await Xe.post(`${tr}/api/seler/signInUser`,{email:e,password:t}).then(n=>{localStorage.setItem("user",JSON.stringify(n.data.data))})},bI=async({id:e,otp:t})=>{await Xe.patch(`${tr}/api/user/${e}/verify2`,{otp:t}).then(n=>{console.log(n.data)})},$I=async({id:e,otp:t})=>{await Xe.patch(`${tr}/api/user/${e}/verify`,{otp:t}).then(n=>{console.log(n.data)})},wI=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.patch(`${tr}/api/seler/${e}/update`,t,n).then(r=>{console.log(r.data)}).catch(r=>{console.log(r)})},SI=async({id:e,gender:t,DateOfBirth:n,country:r})=>{await Xe.patch(`${tr}/api/seler/${e}/updateuser`,{gender:t,DateOfBirth:n,country:r}).then(i=>{})},CI=async({id:e,address:t,address2:n,shippingFrom:r,codePostal:i,shopName:o,city:a})=>{await Xe.patch(`${tr}/api/seler/${e}/updateuser`,{address:t,address2:n,shippingFrom:r,codePostal:i,shopName:o,city:a}).then(l=>{})},PI=async({id:e,bankName:t,accountName:n,accNumber:r,completed:i})=>{await Xe.patch(`${tr}/api/seler/${e}/updateuser`,{bankName:t,accountName:n,accNumber:r,completed:i}).then(o=>{})};function co(e){this._maxSize=e,this.clear()}co.prototype.clear=function(){this._size=0,this._values=Object.create(null)};co.prototype.get=function(e){return this._values[e]};co.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var OI=/[^.^\]^[]+|(?=\[\]|\.\.)/g,tw=/^\d+$/,_I=/^\d/,kI=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,NI=/^\s*(['"]?)(.*?)(\1)\s*$/,Mm=512,T3=new co(Mm),A3=new co(Mm),R3=new co(Mm),Xi={Cache:co,split:Y1,normalizePath:Dh,setter:function(e){var t=Dh(e);return A3.get(e)||A3.set(e,function(r,i){for(var o=0,a=t.length,l=r;o<a-1;){var u=t[o];if(u==="__proto__"||u==="constructor"||u==="prototype")return r;l=l[t[o++]]}l[t[o]]=i})},getter:function(e,t){var n=Dh(e);return R3.get(e)||R3.set(e,function(i){for(var o=0,a=n.length;o<a;)if(i!=null||!t)i=i[n[o++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(jm(n)||tw.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){EI(Array.isArray(e)?e:Y1(e),t,n)}};function Dh(e){return T3.get(e)||T3.set(e,Y1(e).map(function(t){return t.replace(NI,"$2")}))}function Y1(e){return e.match(OI)||[""]}function EI(e,t,n){var r=e.length,i,o,a,l;for(o=0;o<r;o++)i=e[o],i&&(AI(i)&&(i='"'+i+'"'),l=jm(i),a=!l&&/^\d+$/.test(i),t.call(n,i,l,a,o,e))}function jm(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function II(e){return e.match(_I)&&!e.match(tw)}function TI(e){return kI.test(e)}function AI(e){return!jm(e)&&(II(e)||TI(e))}const RI=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,xf=e=>e.match(RI)||[],bf=e=>e[0].toUpperCase()+e.slice(1),Lm=(e,t)=>xf(e).join(t).toLowerCase(),nw=e=>xf(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),FI=e=>bf(nw(e)),DI=e=>Lm(e,"_"),MI=e=>Lm(e,"-"),jI=e=>bf(Lm(e," ")),LI=e=>xf(e).map(bf).join(" ");var Mh={words:xf,upperFirst:bf,camelCase:nw,pascalCase:FI,snakeCase:DI,kebabCase:MI,sentenceCase:jI,titleCase:LI},uc={},zI={get exports(){return uc},set exports(e){uc=e}};zI.exports=function(e){return rw(UI(e),e)};uc.array=rw;function rw(e,t){var n=e.length,r=new Array(n),i={},o=n,a=BI(t),l=HI(e);for(t.forEach(function(d){if(!l.has(d[0])||!l.has(d[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)i[o]||u(e[o],o,new Set);return r;function u(d,c,h){if(h.has(d)){var g;try{g=", node was:"+JSON.stringify(d)}catch{g=""}throw new Error("Cyclic dependency"+g)}if(!l.has(d))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(d));if(!i[c]){i[c]=!0;var x=a.get(d)||new Set;if(x=Array.from(x),c=x.length){h.add(d);do{var v=x[--c];u(v,l.get(v),h)}while(c);h.delete(d)}r[--n]=d}}}function UI(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function BI(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function HI(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}const WI=Object.prototype.toString,YI=Error.prototype.toString,VI=RegExp.prototype.toString,qI=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",GI=/^Symbol\((.*)\)(.*)$/;function QI(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function F3(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return QI(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return qI.call(e).replace(GI,"Symbol($1)");const r=WI.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+YI.call(e)+"]":r==="RegExp"?VI.call(e):null}function va(e,t){let n=F3(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let o=F3(this[r],t);return o!==null?o:i},2)}function iw(e){return e==null?[]:[].concat(e)}let KI=/\$\{\s*(\w+)\s*\}/g;class Vt extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(KI,(i,o)=>va(n[o])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],iw(t).forEach(o=>{Vt.isError(o)?(this.errors.push(...o.errors),this.inner=this.inner.concat(o.inner.length?o.inner:o)):this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,Vt)}}let cr={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${va(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${va(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${va(n,!0)}\``+i}},Pn={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},zr={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},V1={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},q1={isValue:"${path} field must be ${value}"},G1={noUnknown:"${path} field has unspecified keys: ${unknown}"},ZI={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:cr,string:Pn,number:zr,date:V1,object:G1,array:ZI,boolean:q1});const zm=e=>e&&e.__isYupSchema__;class dc{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:o}=n,a=typeof r=="function"?r:(...l)=>l.every(u=>u===r);return new dc(t,(l,u)=>{var d;let c=a(...l)?i:o;return(d=c==null?void 0:c(u))!=null?d:u})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(o=>o.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!zm(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const $u={context:"$",value:"."};function ow(e,t){return new Si(e,t)}class Si{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===$u.context,this.isValue=this.key[0]===$u.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?$u.context:this.isValue?$u.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Xi.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Si.prototype.__isYupRef=!0;const hn=e=>e==null;function mo(e){function t({value:n,path:r="",options:i,originalValue:o,schema:a},l,u){const{name:d,test:c,params:h,message:g,skipAbsent:x}=e;let{parent:v,context:$,abortEarly:w=a.spec.abortEarly}=i;function y(z){return Si.isRef(z)?z.getValue(n,v,$):z}function p(z={}){const ie=Object.assign({value:n,originalValue:o,label:a.spec.label,path:z.path||r,spec:a.spec},h,z.params);for(const j of Object.keys(ie))ie[j]=y(ie[j]);const M=new Vt(Vt.formatError(z.message||g,ie),n,ie.path,z.type||d);return M.params=ie,M}const b=w?l:u;let S={path:r,parent:v,type:d,from:i.from,createError:p,resolve:y,options:i,originalValue:o,schema:a};const P=z=>{Vt.isError(z)?b(z):z?u(null):b(p())},_=z=>{Vt.isError(z)?b(z):l(z)},T=x&&hn(n);if(!i.sync){try{Promise.resolve(T?!0:c.call(S,n,S)).then(P,_)}catch(z){_(z)}return}let R;try{var W;if(R=T?!0:c.call(S,n,S),typeof((W=R)==null?void 0:W.then)=="function")throw new Error(`Validation test of type: "${S.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(z){_(z);return}P(R)}return t.OPTIONS=e,t}function JI(e,t,n,r=n){let i,o,a;return t?(Xi.forEach(t,(l,u,d)=>{let c=u?l.slice(1,l.length-1):l;e=e.resolve({context:r,parent:i,value:n});let h=e.type==="tuple",g=d?parseInt(c,10):0;if(e.innerType||h){if(h&&!d)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&g>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[g],e=h?e.spec.types[g]:e.innerType}if(!d){if(!e.fields||!e.fields[c])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);i=n,n=n&&n[c],e=e.fields[c]}o=c,a=u?"["+l+"]":"."+l}),{schema:e,parent:i,parentPath:o}):{parent:i,parentPath:t,schema:e}}class cc extends Set{describe(){const t=[];for(const n of this.values())t.push(Si.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new cc(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function ua(e,t=new Map){if(zm(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=ua(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,ua(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(ua(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=ua(i,t)}else throw Error(`Unable to clone ${e}`);return n}class yn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new cc,this._blacklist=new cc,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(cr.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=ua(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(o=>{t.tests.forEach(a=>{o.test(a.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,o)=>o.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",o=r._cast(t,n);if(n.assert!==!1&&!r.isType(o)){if(i&&hn(o))return o;let a=va(t),l=va(o);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(l!==a?`result of cast: ${l}`:""))}return o}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,o)=>o.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault()),r}_validate(t,n={},r,i){let{path:o,originalValue:a=t,strict:l=this.spec.strict}=n,u=t;l||(u=this._cast(u,Object.assign({assert:!1},n)));let d=[];for(let c of Object.values(this.internalTests))c&&d.push(c);this.runTests({path:o,value:u,originalValue:a,options:n,tests:d},r,c=>{if(c.length)return i(c,u);this.runTests({path:o,value:u,originalValue:a,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:o,value:a,originalValue:l,path:u,options:d}=t,c=$=>{i||(i=!0,n($,a))},h=$=>{i||(i=!0,r($,a))},g=o.length,x=[];if(!g)return h([]);let v={value:a,originalValue:l,path:u,options:d,schema:this};for(let $=0;$<o.length;$++){const w=o[$];w(v,c,function(p){p&&(x=x.concat(p)),--g<=0&&h(x)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:o,options:a}){const l=t??n;if(l==null)throw TypeError("Must include `key` or `index` for nested validations");const u=typeof l=="number";let d=r[l];const c=Object.assign({},a,{strict:!0,parent:r,value:d,originalValue:o[l],key:void 0,[u?"index":"key"]:l,path:u||l.includes(".")?`${i||""}[${d?l:`"${l}"`}]`:(i?`${i}.`:"")+t});return(h,g,x)=>this.resolve(c)._validate(d,c,g,x)}validate(t,n){let r=this.resolve(Object.assign({},n,{value:t}));return new Promise((i,o)=>r._validate(t,n,(a,l)=>{Vt.isError(a)&&(a.value=l),o(a)},(a,l)=>{a.length?o(new Vt(a,l)):i(l)}))}validateSync(t,n){let r=this.resolve(Object.assign({},n,{value:t})),i;return r._validate(t,Object.assign({},n,{sync:!0}),(o,a)=>{throw Vt.isError(o)&&(o.value=a),o},(o,a)=>{if(o.length)throw new Vt(o,t);i=a}),i}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(Vt.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(Vt.isError(r))return!1;throw r}}_getDefault(){let t=this.spec.default;return t==null?t:typeof t=="function"?t.call(this):ua(t)}getDefault(t){return this.resolve(t||{})._getDefault()}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=mo({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=mo({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=cr.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=cr.notNull){return this.nullability(!1,t)}required(t=cr.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=cr.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=mo(n),o=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===n.name&&(o||a.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=iw(t).map(o=>new Si(o));return i.forEach(o=>{o.isSibling&&r.deps.push(o.key)}),r.conditions.push(typeof n=="function"?new dc(i,n):dc.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=mo({message:t,name:"typeError",test(r){return!hn(r)&&!this.schema._typeCheck(r)?this.createError({params:{type:this.schema.type}}):!0}}),n}oneOf(t,n=cr.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=mo({message:n,name:"oneOf",skipAbsent:!0,test(i){let o=this.schema._whitelist,a=o.resolveAll(this.resolve);return a.includes(i)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:a}})}}),r}notOneOf(t,n=cr.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=mo({message:n,name:"notOneOf",test(i){let o=this.schema._blacklist,a=o.resolveAll(this.resolve);return a.includes(i)?this.createError({params:{values:Array.from(o).join(", "),resolved:a}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:o,nullable:a}=n.spec;return{meta:i,label:r,optional:o,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(u=>({name:u.OPTIONS.name,params:u.OPTIONS.params})).filter((u,d,c)=>c.findIndex(h=>h.name===u.name)===d)}}}yn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])yn.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:o,schema:a}=JI(this,t,n,r.context);return a[e](i&&i[o],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])yn.prototype[e]=yn.prototype.oneOf;for(const e of["not","nope"])yn.prototype[e]=yn.prototype.notOneOf;function aw(){return new sw}class sw extends yn{constructor(){super({type:"boolean",check(t){return t instanceof Boolean&&(t=t.valueOf()),typeof t=="boolean"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(r.spec.coerce&&!r.isType(t)){if(/^(true|1)$/i.test(String(t)))return!0;if(/^(false|0)$/i.test(String(t)))return!1}return t})})}isTrue(t=q1.isValue){return this.test({message:t,name:"is-value",exclusive:!0,params:{value:"true"},test(n){return hn(n)||n===!0}})}isFalse(t=q1.isValue){return this.test({message:t,name:"is-value",exclusive:!0,params:{value:"false"},test(n){return hn(n)||n===!1}})}default(t){return super.default(t)}defined(t){return super.defined(t)}optional(){return super.optional()}required(t){return super.required(t)}notRequired(){return super.notRequired()}nullable(){return super.nullable()}nonNullable(t){return super.nonNullable(t)}strip(t){return super.strip(t)}}aw.prototype=sw.prototype;let XI=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,eT=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,tT=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,nT=e=>hn(e)||e===e.trim(),rT={}.toString();function Ot(){return new lw}class lw extends yn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===rT?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||cr.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=Pn.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=Pn.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=Pn.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,o;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:o}=n:i=n),this.test({name:o||"matches",message:i||Pn.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&r||a.search(t)!==-1})}email(t=Pn.email){return this.matches(XI,{name:"email",message:t,excludeEmptyString:!0})}url(t=Pn.url){return this.matches(eT,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=Pn.uuid){return this.matches(tT,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=Pn.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:nT})}lowercase(t=Pn.lowercase){return this.transform(n=>hn(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>hn(n)||n===n.toLowerCase()})}uppercase(t=Pn.uppercase){return this.transform(n=>hn(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>hn(n)||n===n.toUpperCase()})}}Ot.prototype=lw.prototype;let iT=e=>e!=+e;function Um(){return new uw}class uw extends yn{constructor(){super({type:"number",check(t){return t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&!iT(t)}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce)return t;let i=t;if(typeof i=="string"){if(i=i.replace(/\s/g,""),i==="")return NaN;i=+i}return r.isType(i)?i:parseFloat(i)})})}min(t,n=zr.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r>=this.resolve(t)}})}max(t,n=zr.max){return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(r){return r<=this.resolve(t)}})}lessThan(t,n=zr.lessThan){return this.test({message:n,name:"max",exclusive:!0,params:{less:t},skipAbsent:!0,test(r){return r<this.resolve(t)}})}moreThan(t,n=zr.moreThan){return this.test({message:n,name:"min",exclusive:!0,params:{more:t},skipAbsent:!0,test(r){return r>this.resolve(t)}})}positive(t=zr.positive){return this.moreThan(0,t)}negative(t=zr.negative){return this.lessThan(0,t)}integer(t=zr.integer){return this.test({name:"integer",message:t,skipAbsent:!0,test:n=>Number.isInteger(n)})}truncate(){return this.transform(t=>hn(t)?t:t|0)}round(t){var n;let r=["ceil","floor","round","trunc"];if(t=((n=t)==null?void 0:n.toLowerCase())||"round",t==="trunc")return this.truncate();if(r.indexOf(t.toLowerCase())===-1)throw new TypeError("Only valid options for round() are: "+r.join(", "));return this.transform(i=>hn(i)?i:Math[t](i))}}Um.prototype=uw.prototype;var oT=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function aT(e){var t=[1,4,5,6,7,10,11],n=0,r,i;if(i=oT.exec(e)){for(var o=0,a;a=t[o];++o)i[a]=+i[a]||0;i[2]=(+i[2]||1)-1,i[3]=+i[3]||1,i[7]=i[7]?String(i[7]).substr(0,3):0,(i[8]===void 0||i[8]==="")&&(i[9]===void 0||i[9]==="")?r=+new Date(i[1],i[2],i[3],i[4],i[5],i[6],i[7]):(i[8]!=="Z"&&i[9]!==void 0&&(n=i[10]*60+i[11],i[9]==="+"&&(n=0-n)),r=Date.UTC(i[1],i[2],i[3],i[4],i[5]+n,i[6],i[7]))}else r=Date.parse?Date.parse(e):NaN;return r}let sT=new Date(""),lT=e=>Object.prototype.toString.call(e)==="[object Date]";class $f extends yn{constructor(){super({type:"date",check(t){return lT(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)?t:(t=aT(t),isNaN(t)?$f.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Si.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=V1.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=V1.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}$f.INVALID_DATE=sT;$f.prototype;function uT(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([a,l])=>`${a}-${l}`));function o(a,l){let u=Xi.split(a)[0];r.add(u),i.has(`${l}-${u}`)||n.push([l,u])}for(const a of Object.keys(e)){let l=e[a];r.add(a),Si.isRef(l)&&l.isSibling?o(l.path,a):zm(l)&&"deps"in l&&l.deps.forEach(u=>o(u,a))}return uc.array(Array.from(r),n).reverse()}function D3(e,t){let n=1/0;return e.some((r,i)=>{var o;if((o=t.path)!=null&&o.includes(r))return n=i,!0}),n}function dw(e){return(t,n)=>D3(e,t)-D3(e,n)}const dT=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function hd(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=hd(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=hd(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(hd)}):"optional"in e?e.optional():e}const cT=(e,t)=>{const n=[...Xi.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=Xi.getter(Xi.join(n),!0)(e);return!!(i&&r in i)};let M3=e=>Object.prototype.toString.call(e)==="[object Object]";function fT(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const hT=dw([]);function Hl(e){return new cw(e)}class cw extends yn{constructor(t){super({type:"object",check(n){return M3(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=hT,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault();if(!this._typeCheck(i))return i;let o=this.fields,a=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,l=[].concat(this._nodes,Object.keys(i).filter(h=>!this._nodes.includes(h))),u={},d=Object.assign({},n,{parent:u,__validating:n.__validating||!1}),c=!1;for(const h of l){let g=o[h],x=h in i;if(g){let v,$=i[h];d.path=(n.path?`${n.path}.`:"")+h,g=g.resolve({value:$,context:n.context,parent:u});let w=g instanceof yn?g.spec:void 0,y=w==null?void 0:w.strict;if(w!=null&&w.strip){c=c||h in i;continue}v=!n.__validating||!y?g.cast(i[h],d):i[h],v!==void 0&&(u[h]=v)}else x&&!a&&(u[h]=i[h]);(x!==h in u||u[h]!==i[h])&&(c=!0)}return c?u:i}_validate(t,n={},r,i){let{from:o=[],originalValue:a=t,recursive:l=this.spec.recursive}=n;n.from=[{schema:this,value:a},...o],n.__validating=!0,n.originalValue=a,super._validate(t,n,r,(u,d)=>{if(!l||!M3(d)){i(u,d);return}a=a||d;let c=[];for(let h of this._nodes){let g=this.fields[h];!g||Si.isRef(g)||c.push(g.asNestedTest({options:n,key:h,parent:d,parentPath:n.path,originalParent:a}))}this.runTests({tests:c,value:d,originalValue:a,options:n},r,h=>{i(h.sort(this._sortErrors).concat(u),d)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,o]of Object.entries(this.fields)){const a=r[i];r[i]=a===void 0?o:a}return n.withMutation(i=>i.setFields(r,this._excludedEdges))}_getDefault(){if("default"in this.spec)return super._getDefault();if(!this._nodes.length)return;let t={};return this._nodes.forEach(n=>{const r=this.fields[n];t[n]=r&&"getDefault"in r?r.getDefault():void 0}),t}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=uT(t,n),r._sortErrors=dw(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return hd(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n)}omit(t){const n=Object.assign({},this.fields);for(const r of t)delete n[r];return this.setFields(n)}from(t,n,r){let i=Xi.getter(t,!0);return this.transform(o=>{if(!o)return o;let a=o;return cT(o,t)&&(a=Object.assign({},o),r||delete a[t],a[n]=i(o)),a})}json(){return this.transform(dT)}noUnknown(t=!0,n=G1.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const o=fT(this.schema,i);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=G1.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(Mh.camelCase)}snakeCase(){return this.transformKeys(Mh.snakeCase)}constantCase(){return this.transformKeys(t=>Mh.snakeCase(t).toUpperCase())}describe(t){let n=super.describe(t);n.fields={};for(const[i,o]of Object.entries(this.fields)){var r;let a=t;(r=a)!=null&&r.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[i]})),n.fields[i]=o.describe(a)}return n}}Hl.prototype=cw.prototype;var Wl=e=>e.type==="checkbox",da=e=>e instanceof Date,Tt=e=>e==null;const fw=e=>typeof e=="object";var ct=e=>!Tt(e)&&!Array.isArray(e)&&fw(e)&&!da(e),pT=e=>ct(e)&&e.target?Wl(e.target)?e.target.checked:e.target.value:e,gT=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,mT=(e,t)=>e.has(gT(t)),yT=e=>{const t=e.constructor&&e.constructor.prototype;return ct(t)&&t.hasOwnProperty("isPrototypeOf")},Bm=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Hi(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Bm&&(e instanceof Blob||e instanceof FileList))&&(n||ct(e)))if(t=n?[]:{},!Array.isArray(e)&&!yT(e))t=e;else for(const r in e)t[r]=Hi(e[r]);else return e;return t}var Yl=e=>Array.isArray(e)?e.filter(Boolean):[],it=e=>e===void 0,ce=(e,t,n)=>{if(!t||!ct(e))return n;const r=Yl(t.split(/[,[\].]+?/)).reduce((i,o)=>Tt(i)?i:i[o],e);return it(r)||r===e?it(e[t])?n:e[t]:r};const j3={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},En={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},or={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ne.createContext(null);var vT=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const a=o;return t._proxyFormState[a]!==En.all&&(t._proxyFormState[a]=!r||En.all),n&&(n[a]=!0),e[a]}});return i},an=e=>ct(e)&&!Object.keys(e).length,xT=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return an(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(a=>t[a]===(!r||En.all))},jh=e=>Array.isArray(e)?e:[e];function bT(e){const t=ne.useRef(e);t.current=e,ne.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var Qn=e=>typeof e=="string",$T=(e,t,n,r,i)=>Qn(e)?(r&&t.watch.add(e),ce(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),ce(n,o))):(r&&(t.watchAll=!0),n),Hm=e=>/^\w*$/.test(e),hw=e=>Yl(e.replace(/["|']|\]/g,"").split(/\.|\[/));function Le(e,t,n){let r=-1;const i=Hm(t)?[t]:hw(t),o=i.length,a=o-1;for(;++r<o;){const l=i[r];let u=n;if(r!==a){const d=e[l];u=ct(d)||Array.isArray(d)?d:isNaN(+i[r+1])?{}:[]}e[l]=u,e=e[l]}return e}var pw=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{};const Q1=(e,t,n)=>{for(const r of n||Object.keys(e)){const i=ce(e,r);if(i){const{_f:o,...a}=i;if(o&&t(o.name)){if(o.ref.focus){o.ref.focus();break}else if(o.refs&&o.refs[0].focus){o.refs[0].focus();break}}else ct(a)&&Q1(a,t)}}};var L3=e=>({isOnSubmit:!e||e===En.onSubmit,isOnBlur:e===En.onBlur,isOnChange:e===En.onChange,isOnAll:e===En.all,isOnTouch:e===En.onTouched}),z3=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),wT=(e,t,n)=>{const r=Yl(ce(e,n));return Le(r,"root",t[n]),Le(e,n,r),e},xa=e=>typeof e=="boolean",Wm=e=>e.type==="file",Kr=e=>typeof e=="function",fc=e=>{if(!Bm)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},pd=e=>Qn(e),Ym=e=>e.type==="radio",hc=e=>e instanceof RegExp;const U3={value:!1,isValid:!1},B3={value:!0,isValid:!0};var gw=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!it(e[0].attributes.value)?it(e[0].value)||e[0].value===""?B3:{value:e[0].value,isValid:!0}:B3:U3}return U3};const H3={isValid:!1,value:null};var mw=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,H3):H3;function W3(e,t,n="validate"){if(pd(e)||Array.isArray(e)&&e.every(pd)||xa(e)&&!e)return{type:n,message:pd(e)?e:"",ref:t}}var yo=e=>ct(e)&&!hc(e)?e:{value:e,message:""},Y3=async(e,t,n,r,i)=>{const{ref:o,refs:a,required:l,maxLength:u,minLength:d,min:c,max:h,pattern:g,validate:x,name:v,valueAsNumber:$,mount:w,disabled:y}=e._f,p=ce(t,v);if(!w||y)return{};const b=a?a[0]:o,S=M=>{r&&b.reportValidity&&(b.setCustomValidity(xa(M)?"":M||""),b.reportValidity())},P={},_=Ym(o),T=Wl(o),R=_||T,W=($||Wm(o))&&it(o.value)&&it(p)||fc(o)&&o.value===""||p===""||Array.isArray(p)&&!p.length,z=pw.bind(null,v,n,P),ie=(M,j,J,F=or.maxLength,X=or.minLength)=>{const te=M?j:J;P[v]={type:M?F:X,message:te,ref:o,...z(M?F:X,te)}};if(i?!Array.isArray(p)||!p.length:l&&(!R&&(W||Tt(p))||xa(p)&&!p||T&&!gw(a).isValid||_&&!mw(a).isValid)){const{value:M,message:j}=pd(l)?{value:!!l,message:l}:yo(l);if(M&&(P[v]={type:or.required,message:j,ref:b,...z(or.required,j)},!n))return S(j),P}if(!W&&(!Tt(c)||!Tt(h))){let M,j;const J=yo(h),F=yo(c);if(!Tt(p)&&!isNaN(p)){const X=o.valueAsNumber||p&&+p;Tt(J.value)||(M=X>J.value),Tt(F.value)||(j=X<F.value)}else{const X=o.valueAsDate||new Date(p),te=E=>new Date(new Date().toDateString()+" "+E),L=o.type=="time",N=o.type=="week";Qn(J.value)&&p&&(M=L?te(p)>te(J.value):N?p>J.value:X>new Date(J.value)),Qn(F.value)&&p&&(j=L?te(p)<te(F.value):N?p<F.value:X<new Date(F.value))}if((M||j)&&(ie(!!M,J.message,F.message,or.max,or.min),!n))return S(P[v].message),P}if((u||d)&&!W&&(Qn(p)||i&&Array.isArray(p))){const M=yo(u),j=yo(d),J=!Tt(M.value)&&p.length>+M.value,F=!Tt(j.value)&&p.length<+j.value;if((J||F)&&(ie(J,M.message,j.message),!n))return S(P[v].message),P}if(g&&!W&&Qn(p)){const{value:M,message:j}=yo(g);if(hc(M)&&!p.match(M)&&(P[v]={type:or.pattern,message:j,ref:o,...z(or.pattern,j)},!n))return S(j),P}if(x){if(Kr(x)){const M=await x(p,t),j=W3(M,b);if(j&&(P[v]={...j,...z(or.validate,j.message)},!n))return S(j.message),P}else if(ct(x)){let M={};for(const j in x){if(!an(M)&&!n)break;const J=W3(await x[j](p,t),b,j);J&&(M={...J,...z(j,J.message)},S(J.message),n&&(P[v]=M))}if(!an(M)&&(P[v]={ref:b,...M},!n))return P}}return S(!0),P};function ST(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=it(e)?r++:e[t[r++]];return e}function CT(e){for(const t in e)if(!it(e[t]))return!1;return!0}function yt(e,t){const n=Array.isArray(t)?t:Hm(t)?[t]:hw(t),r=n.length===1?e:ST(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(ct(r)&&an(r)||Array.isArray(r)&&CT(r))&&yt(e,n.slice(0,-1)),e}function Lh(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var pc=e=>Tt(e)||!fw(e);function Gi(e,t){if(pc(e)||pc(t))return e===t;if(da(e)&&da(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const a=t[i];if(da(o)&&da(a)||ct(o)&&ct(a)||Array.isArray(o)&&Array.isArray(a)?!Gi(o,a):o!==a)return!1}}return!0}var yw=e=>e.type==="select-multiple",PT=e=>Ym(e)||Wl(e),zh=e=>fc(e)&&e.isConnected,vw=e=>{for(const t in e)if(Kr(e[t]))return!0;return!1};function gc(e,t={}){const n=Array.isArray(e);if(ct(e)||n)for(const r in e)Array.isArray(e[r])||ct(e[r])&&!vw(e[r])?(t[r]=Array.isArray(e[r])?[]:{},gc(e[r],t[r])):Tt(e[r])||(t[r]=!0);return t}function xw(e,t,n){const r=Array.isArray(e);if(ct(e)||r)for(const i in e)Array.isArray(e[i])||ct(e[i])&&!vw(e[i])?it(t)||pc(n[i])?n[i]=Array.isArray(e[i])?gc(e[i],[]):{...gc(e[i])}:xw(e[i],Tt(t)?{}:t[i],n[i]):n[i]=!Gi(e[i],t[i]);return n}var Uh=(e,t)=>xw(e,t,gc(t)),bw=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>it(e)?e:t?e===""?NaN:e&&+e:n&&Qn(e)?new Date(e):r?r(e):e;function Bh(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Wm(t)?t.files:Ym(t)?mw(e.refs).value:yw(t)?[...t.selectedOptions].map(({value:n})=>n):Wl(t)?gw(e.refs).value:bw(it(t.value)?e.ref.value:t.value,e)}var OT=(e,t,n,r)=>{const i={};for(const o of e){const a=ce(t,o);a&&Le(i,o,a._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},us=e=>it(e)?e:hc(e)?e.source:ct(e)?hc(e.value)?e.value.source:e.value:e,_T=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function V3(e,t,n){const r=ce(e,n);if(r||Hm(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),a=ce(t,o),l=ce(e,o);if(a&&!Array.isArray(a)&&n!==o)return{name:n};if(l&&l.type)return{name:o,error:l};i.pop()}return{name:n}}var kT=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,NT=(e,t)=>!Yl(ce(e,t)).length&&yt(e,t);const ET={mode:En.onSubmit,reValidateMode:En.onChange,shouldFocusError:!0};function IT(e={},t){let n={...ET,...e},r={submitCount:0,isDirty:!1,isLoading:Kr(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},o=ct(n.defaultValues)||ct(n.values)?Hi(n.defaultValues||n.values)||{}:{},a=n.shouldUnregister?{}:Hi(o),l={action:!1,mount:!1,watch:!1},u={mount:new Set,unMount:new Set,array:new Set,watch:new Set},d,c=0;const h={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={values:Lh(),array:Lh(),state:Lh()},x=e.resetOptions&&e.resetOptions.keepDirtyValues,v=L3(n.mode),$=L3(n.reValidateMode),w=n.criteriaMode===En.all,y=O=>I=>{clearTimeout(c),c=setTimeout(O,I)},p=async O=>{if(h.isValid||O){const I=n.resolver?an((await W()).errors):await ie(i,!0);I!==r.isValid&&g.state.next({isValid:I})}},b=O=>h.isValidating&&g.state.next({isValidating:O}),S=(O,I=[],A,re,q=!0,V=!0)=>{if(re&&A){if(l.action=!0,V&&Array.isArray(ce(i,O))){const se=A(ce(i,O),re.argA,re.argB);q&&Le(i,O,se)}if(V&&Array.isArray(ce(r.errors,O))){const se=A(ce(r.errors,O),re.argA,re.argB);q&&Le(r.errors,O,se),NT(r.errors,O)}if(h.touchedFields&&V&&Array.isArray(ce(r.touchedFields,O))){const se=A(ce(r.touchedFields,O),re.argA,re.argB);q&&Le(r.touchedFields,O,se)}h.dirtyFields&&(r.dirtyFields=Uh(o,a)),g.state.next({name:O,isDirty:j(O,I),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Le(a,O,I)},P=(O,I)=>{Le(r.errors,O,I),g.state.next({errors:r.errors})},_=(O,I,A,re)=>{const q=ce(i,O);if(q){const V=ce(a,O,it(A)?ce(o,O):A);it(V)||re&&re.defaultChecked||I?Le(a,O,I?V:Bh(q._f)):X(O,V),l.mount&&p()}},T=(O,I,A,re,q)=>{let V=!1,se=!1;const ve={name:O};if(!A||re){h.isDirty&&(se=r.isDirty,r.isDirty=ve.isDirty=j(),V=se!==ve.isDirty);const ae=Gi(ce(o,O),I);se=ce(r.dirtyFields,O),ae?yt(r.dirtyFields,O):Le(r.dirtyFields,O,!0),ve.dirtyFields=r.dirtyFields,V=V||h.dirtyFields&&se!==!ae}if(A){const ae=ce(r.touchedFields,O);ae||(Le(r.touchedFields,O,A),ve.touchedFields=r.touchedFields,V=V||h.touchedFields&&ae!==A)}return V&&q&&g.state.next(ve),V?ve:{}},R=(O,I,A,re)=>{const q=ce(r.errors,O),V=h.isValid&&xa(I)&&r.isValid!==I;if(e.delayError&&A?(d=y(()=>P(O,A)),d(e.delayError)):(clearTimeout(c),d=null,A?Le(r.errors,O,A):yt(r.errors,O)),(A?!Gi(q,A):q)||!an(re)||V){const se={...re,...V&&xa(I)?{isValid:I}:{},errors:r.errors,name:O};r={...r,...se},g.state.next(se)}b(!1)},W=async O=>n.resolver(a,n.context,OT(O||u.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),z=async O=>{const{errors:I}=await W();if(O)for(const A of O){const re=ce(I,A);re?Le(r.errors,A,re):yt(r.errors,A)}else r.errors=I;return I},ie=async(O,I,A={valid:!0})=>{for(const re in O){const q=O[re];if(q){const{_f:V,...se}=q;if(V){const ve=u.array.has(V.name),ae=await Y3(q,a,w,n.shouldUseNativeValidation&&!I,ve);if(ae[V.name]&&(A.valid=!1,I))break;!I&&(ce(ae,V.name)?ve?wT(r.errors,ae,V.name):Le(r.errors,V.name,ae[V.name]):yt(r.errors,V.name))}se&&await ie(se,I,A)}}return A.valid},M=()=>{for(const O of u.unMount){const I=ce(i,O);I&&(I._f.refs?I._f.refs.every(A=>!zh(A)):!zh(I._f.ref))&&k(O)}u.unMount=new Set},j=(O,I)=>(O&&I&&Le(a,O,I),!Gi(U(),o)),J=(O,I,A)=>$T(O,u,{...l.mount?a:it(I)?o:Qn(O)?{[O]:I}:I},A,I),F=O=>Yl(ce(l.mount?a:o,O,e.shouldUnregister?ce(o,O,[]):[])),X=(O,I,A={})=>{const re=ce(i,O);let q=I;if(re){const V=re._f;V&&(!V.disabled&&Le(a,O,bw(I,V)),q=fc(V.ref)&&Tt(I)?"":I,yw(V.ref)?[...V.ref.options].forEach(se=>se.selected=q.includes(se.value)):V.refs?Wl(V.ref)?V.refs.length>1?V.refs.forEach(se=>(!se.defaultChecked||!se.disabled)&&(se.checked=Array.isArray(q)?!!q.find(ve=>ve===se.value):q===se.value)):V.refs[0]&&(V.refs[0].checked=!!q):V.refs.forEach(se=>se.checked=se.value===q):Wm(V.ref)?V.ref.value="":(V.ref.value=q,V.ref.type||g.values.next({name:O,values:{...a}})))}(A.shouldDirty||A.shouldTouch)&&T(O,q,A.shouldTouch,A.shouldDirty,!0),A.shouldValidate&&E(O)},te=(O,I,A)=>{for(const re in I){const q=I[re],V=`${O}.${re}`,se=ce(i,V);(u.array.has(O)||!pc(q)||se&&!se._f)&&!da(q)?te(V,q,A):X(V,q,A)}},L=(O,I,A={})=>{const re=ce(i,O),q=u.array.has(O),V=Hi(I);Le(a,O,V),q?(g.array.next({name:O,values:{...a}}),(h.isDirty||h.dirtyFields)&&A.shouldDirty&&g.state.next({name:O,dirtyFields:Uh(o,a),isDirty:j(O,V)})):re&&!re._f&&!Tt(V)?te(O,V,A):X(O,V,A),z3(O,u)&&g.state.next({...r}),g.values.next({name:O,values:{...a}}),!l.mount&&t()},N=async O=>{const I=O.target;let A=I.name,re=!0;const q=ce(i,A),V=()=>I.type?Bh(q._f):pT(O);if(q){let se,ve;const ae=V(),Ae=O.type===j3.BLUR||O.type===j3.FOCUS_OUT,Xa=!_T(q._f)&&!n.resolver&&!ce(r.errors,A)&&!q._f.deps||kT(Ae,ce(r.touchedFields,A),r.isSubmitted,$,v),Ci=z3(A,u,Ae);Le(a,A,ae),Ae?(q._f.onBlur&&q._f.onBlur(O),d&&d(0)):q._f.onChange&&q._f.onChange(O);const rn=T(A,ae,Ae,!1),K6=!an(rn)||Ci;if(!Ae&&g.values.next({name:A,type:O.type,values:{...a}}),Xa)return h.isValid&&p(),K6&&g.state.next({name:A,...Ci?{}:rn});if(!Ae&&Ci&&g.state.next({...r}),b(!0),n.resolver){const{errors:Dy}=await W([A]),Z6=V3(r.errors,i,A),My=V3(Dy,i,Z6.name||A);se=My.error,A=My.name,ve=an(Dy)}else se=(await Y3(q,a,w,n.shouldUseNativeValidation))[A],re=isNaN(ae)||ae===ce(a,A,ae),re&&(se?ve=!1:h.isValid&&(ve=await ie(i,!0)));re&&(q._f.deps&&E(q._f.deps),R(A,ve,se,rn))}},E=async(O,I={})=>{let A,re;const q=jh(O);if(b(!0),n.resolver){const V=await z(it(O)?O:q);A=an(V),re=O?!q.some(se=>ce(V,se)):A}else O?(re=(await Promise.all(q.map(async V=>{const se=ce(i,V);return await ie(se&&se._f?{[V]:se}:se)}))).every(Boolean),!(!re&&!r.isValid)&&p()):re=A=await ie(i);return g.state.next({...!Qn(O)||h.isValid&&A!==r.isValid?{}:{name:O},...n.resolver||!O?{isValid:A}:{},errors:r.errors,isValidating:!1}),I.shouldFocus&&!re&&Q1(i,V=>V&&ce(r.errors,V),O?q:u.mount),re},U=O=>{const I={...o,...l.mount?a:{}};return it(O)?I:Qn(O)?ce(I,O):O.map(A=>ce(I,A))},D=(O,I)=>({invalid:!!ce((I||r).errors,O),isDirty:!!ce((I||r).dirtyFields,O),isTouched:!!ce((I||r).touchedFields,O),error:ce((I||r).errors,O)}),H=O=>{O&&jh(O).forEach(I=>yt(r.errors,I)),g.state.next({errors:O?r.errors:{}})},Y=(O,I,A)=>{const re=(ce(i,O,{_f:{}})._f||{}).ref;Le(r.errors,O,{...I,ref:re}),g.state.next({name:O,errors:r.errors,isValid:!1}),A&&A.shouldFocus&&re&&re.focus&&re.focus()},oe=(O,I)=>Kr(O)?g.values.subscribe({next:A=>O(J(void 0,I),A)}):J(O,I,!0),k=(O,I={})=>{for(const A of O?jh(O):u.mount)u.mount.delete(A),u.array.delete(A),I.keepValue||(yt(i,A),yt(a,A)),!I.keepError&&yt(r.errors,A),!I.keepDirty&&yt(r.dirtyFields,A),!I.keepTouched&&yt(r.touchedFields,A),!n.shouldUnregister&&!I.keepDefaultValue&&yt(o,A);g.values.next({values:{...a}}),g.state.next({...r,...I.keepDirty?{isDirty:j()}:{}}),!I.keepIsValid&&p()},de=(O,I={})=>{let A=ce(i,O);const re=xa(I.disabled);return Le(i,O,{...A||{},_f:{...A&&A._f?A._f:{ref:{name:O}},name:O,mount:!0,...I}}),u.mount.add(O),A?re&&Le(a,O,I.disabled?void 0:ce(a,O,Bh(A._f))):_(O,!0,I.value),{...re?{disabled:I.disabled}:{},...n.shouldUseNativeValidation?{required:!!I.required,min:us(I.min),max:us(I.max),minLength:us(I.minLength),maxLength:us(I.maxLength),pattern:us(I.pattern)}:{},name:O,onChange:N,onBlur:N,ref:q=>{if(q){de(O,I),A=ce(i,O);const V=it(q.value)&&q.querySelectorAll&&q.querySelectorAll("input,select,textarea")[0]||q,se=PT(V),ve=A._f.refs||[];if(se?ve.find(ae=>ae===V):V===A._f.ref)return;Le(i,O,{_f:{...A._f,...se?{refs:[...ve.filter(zh),V,...Array.isArray(ce(o,O))?[{}]:[]],ref:{type:V.type,name:O}}:{ref:V}}}),_(O,!1,void 0,V)}else A=ce(i,O,{}),A._f&&(A._f.mount=!1),(n.shouldUnregister||I.shouldUnregister)&&!(mT(u.array,O)&&l.action)&&u.unMount.add(O)}}},Z=()=>n.shouldFocusError&&Q1(i,O=>O&&ce(r.errors,O),u.mount),Ce=(O,I)=>async A=>{A&&(A.preventDefault&&A.preventDefault(),A.persist&&A.persist());let re=Hi(a);if(g.state.next({isSubmitting:!0}),n.resolver){const{errors:q,values:V}=await W();r.errors=q,re=V}else await ie(i);yt(r.errors,"root"),an(r.errors)?(g.state.next({errors:{}}),await O(re,A)):(I&&await I({...r.errors},A),Z(),setTimeout(Z)),g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:an(r.errors),submitCount:r.submitCount+1,errors:r.errors})},me=(O,I={})=>{ce(i,O)&&(it(I.defaultValue)?L(O,ce(o,O)):(L(O,I.defaultValue),Le(o,O,I.defaultValue)),I.keepTouched||yt(r.touchedFields,O),I.keepDirty||(yt(r.dirtyFields,O),r.isDirty=I.defaultValue?j(O,ce(o,O)):j()),I.keepError||(yt(r.errors,O),h.isValid&&p()),g.state.next({...r}))},ge=(O,I={})=>{const A=O||o,re=Hi(A),q=O&&!an(O)?re:o;if(I.keepDefaultValues||(o=A),!I.keepValues){if(I.keepDirtyValues||x)for(const V of u.mount)ce(r.dirtyFields,V)?Le(q,V,ce(a,V)):L(V,ce(q,V));else{if(Bm&&it(O))for(const V of u.mount){const se=ce(i,V);if(se&&se._f){const ve=Array.isArray(se._f.refs)?se._f.refs[0]:se._f.ref;if(fc(ve)){const ae=ve.closest("form");if(ae){ae.reset();break}}}}i={}}a=e.shouldUnregister?I.keepDefaultValues?Hi(o):{}:re,g.array.next({values:{...q}}),g.values.next({values:{...q}})}u={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&t(),l.mount=!h.isValid||!!I.keepIsValid,l.watch=!!e.shouldUnregister,g.state.next({submitCount:I.keepSubmitCount?r.submitCount:0,isDirty:I.keepDirty?r.isDirty:!!(I.keepDefaultValues&&!Gi(O,o)),isSubmitted:I.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:I.keepDirtyValues?r.dirtyFields:I.keepDefaultValues&&O?Uh(o,O):{},touchedFields:I.keepTouched?r.touchedFields:{},errors:I.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},he=(O,I)=>ge(Kr(O)?O(a):O,I);return{control:{register:de,unregister:k,getFieldState:D,_executeSchema:W,_getWatch:J,_getDirty:j,_updateValid:p,_removeUnmounted:M,_updateFieldArray:S,_getFieldArray:F,_reset:ge,_resetDefaultValues:()=>Kr(n.defaultValues)&&n.defaultValues().then(O=>{he(O,n.resetOptions),g.state.next({isLoading:!1})}),_updateFormState:O=>{r={...r,...O}},_subjects:g,_proxyFormState:h,get _fields(){return i},get _formValues(){return a},get _state(){return l},set _state(O){l=O},get _defaultValues(){return o},get _names(){return u},set _names(O){u=O},get _formState(){return r},set _formState(O){r=O},get _options(){return n},set _options(O){n={...n,...O}}},trigger:E,register:de,handleSubmit:Ce,watch:oe,setValue:L,getValues:U,reset:he,resetField:me,clearErrors:H,unregister:k,setError:Y,setFocus:(O,I={})=>{const A=ce(i,O),re=A&&A._f;if(re){const q=re.refs?re.refs[0]:re.ref;q.focus&&(q.focus(),I.shouldSelect&&q.select())}},getFieldState:D}}function wf(e={}){const t=ne.useRef(),[n,r]=ne.useState({isDirty:!1,isValidating:!1,isLoading:Kr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Kr(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...IT(e,()=>r(o=>({...o}))),formState:n});const i=t.current.control;return i._options=e,bT({subject:i._subjects.state,next:o=>{xT(o,i._proxyFormState,i._updateFormState,!0)&&r({...i._formState})}}),ne.useEffect(()=>{e.values&&!Gi(e.values,i._defaultValues)?i._reset(e.values,i._options.resetOptions):i._resetDefaultValues()},[e.values,i]),ne.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=vT(n,i),t.current}var q3=function(e,t,n){if(e&&"reportValidity"in e){var r=ce(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},$w=function(e,t){var n=function(i){var o=t.fields[i];o&&o.ref&&"reportValidity"in o.ref?q3(o.ref,i,e):o.refs&&o.refs.forEach(function(a){return q3(a,i,e)})};for(var r in t.fields)n(r)},TT=function(e,t){t.shouldUseNativeValidation&&$w(e,t);var n={};for(var r in e){var i=ce(t.fields,r);Le(n,r,Object.assign(e[r]||{},{ref:i&&i.ref}))}return n},Sf=function(e,t,n){return t===void 0&&(t={}),n===void 0&&(n={}),function(r,i,o){try{return Promise.resolve(function(a,l){try{var u=(t.context,Promise.resolve(e[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},t,{context:i}))).then(function(d){return o.shouldUseNativeValidation&&$w({},o),{values:n.raw?r:d,errors:{}}}))}catch(d){return l(d)}return u&&u.then?u.then(void 0,l):u}(0,function(a){if(!a.inner)throw a;return{values:{},errors:TT((l=a,u=!o.shouldUseNativeValidation&&o.criteriaMode==="all",(l.inner||[]).reduce(function(d,c){if(d[c.path]||(d[c.path]={message:c.message,type:c.type}),u){var h=d[c.path].types,g=h&&h[c.type];d[c.path]=pw(c.path,u,d,c.type,g?[].concat(g,c.message):c.message)}return d},{})),o)};var l,u}))}catch(a){return Promise.reject(a)}}};class qa{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.push(t),this.onSubscribe(),()=>{this.listeners=this.listeners.filter(n=>n!==t),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}const ml=typeof window>"u"||"Deno"in window;function sn(){}function AT(e,t){return typeof e=="function"?e(t):e}function K1(e){return typeof e=="number"&&e>=0&&e!==1/0}function ww(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Ns(e,t,n){return Vl(e)?typeof t=="function"?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function RT(e,t,n){return Vl(e)?typeof t=="function"?{...n,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:typeof e=="function"?{...t,mutationFn:e}:{...e}}function Hr(e,t,n){return Vl(e)?[{...t,queryKey:e},n]:[e||{},t]}function G3(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:a,stale:l}=e;if(Vl(a)){if(r){if(t.queryHash!==Vm(a,t.options))return!1}else if(!mc(t.queryKey,a))return!1}if(n!=="all"){const u=t.isActive();if(n==="active"&&!u||n==="inactive"&&u)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||typeof i<"u"&&i!==t.state.fetchStatus||o&&!o(t))}function Q3(e,t){const{exact:n,fetching:r,predicate:i,mutationKey:o}=e;if(Vl(o)){if(!t.options.mutationKey)return!1;if(n){if(Qi(t.options.mutationKey)!==Qi(o))return!1}else if(!mc(t.options.mutationKey,o))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function Vm(e,t){return((t==null?void 0:t.queryKeyHashFn)||Qi)(e)}function Qi(e){return JSON.stringify(e,(t,n)=>J1(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function mc(e,t){return Sw(e,t)}function Sw(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!Sw(e[n],t[n])):!1}function Cw(e,t){if(e===t)return e;const n=K3(e)&&K3(t);if(n||J1(e)&&J1(t)){const r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),o=i.length,a=n?[]:{};let l=0;for(let u=0;u<o;u++){const d=n?u:i[u];a[d]=Cw(e[d],t[d]),a[d]===e[d]&&l++}return r===o&&l===r?e:a}return t}function Z1(e,t){if(e&&!t||t&&!e)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function K3(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function J1(e){if(!Z3(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!Z3(n)||!n.hasOwnProperty("isPrototypeOf"))}function Z3(e){return Object.prototype.toString.call(e)==="[object Object]"}function Vl(e){return Array.isArray(e)}function Pw(e){return new Promise(t=>{setTimeout(t,e)})}function J3(e){Pw(0).then(e)}function FT(){if(typeof AbortController=="function")return new AbortController}function X1(e,t,n){return n.isDataEqual!=null&&n.isDataEqual(e,t)?e:typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Cw(e,t):t}class DT extends qa{constructor(){super(),this.setup=t=>{if(!ml&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(t){this.focused=t,t&&this.onFocus()}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const yc=new DT;class MT extends qa{constructor(){super(),this.setup=t=>{if(!ml&&window.addEventListener){const n=()=>t();return window.addEventListener("online",n,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(t){this.online=t,t&&this.onOnline()}onOnline(){this.listeners.forEach(t=>{t()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const vc=new MT;function jT(e){return Math.min(1e3*2**e,3e4)}function Cf(e){return(e??"online")==="online"?vc.isOnline():!0}class Ow{constructor(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}}function gd(e){return e instanceof Ow}function _w(e){let t=!1,n=0,r=!1,i,o,a;const l=new Promise((w,y)=>{o=w,a=y}),u=w=>{r||(x(new Ow(w)),e.abort==null||e.abort())},d=()=>{t=!0},c=()=>{t=!1},h=()=>!yc.isFocused()||e.networkMode!=="always"&&!vc.isOnline(),g=w=>{r||(r=!0,e.onSuccess==null||e.onSuccess(w),i==null||i(),o(w))},x=w=>{r||(r=!0,e.onError==null||e.onError(w),i==null||i(),a(w))},v=()=>new Promise(w=>{i=y=>{const p=r||!h();return p&&w(y),p},e.onPause==null||e.onPause()}).then(()=>{i=void 0,r||e.onContinue==null||e.onContinue()}),$=()=>{if(r)return;let w;try{w=e.fn()}catch(y){w=Promise.reject(y)}Promise.resolve(w).then(g).catch(y=>{var p,b;if(r)return;const S=(p=e.retry)!=null?p:3,P=(b=e.retryDelay)!=null?b:jT,_=typeof P=="function"?P(n,y):P,T=S===!0||typeof S=="number"&&n<S||typeof S=="function"&&S(n,y);if(t||!T){x(y);return}n++,e.onFail==null||e.onFail(n,y),Pw(_).then(()=>{if(h())return v()}).then(()=>{t?x(y):$()})})};return Cf(e.networkMode)?$():v().then($),{promise:l,cancel:u,continue:()=>(i==null?void 0:i())?l:Promise.resolve(),cancelRetry:d,continueRetry:c}}const qm=console;function LT(){let e=[],t=0,n=c=>{c()},r=c=>{c()};const i=c=>{let h;t++;try{h=c()}finally{t--,t||l()}return h},o=c=>{t?e.push(c):J3(()=>{n(c)})},a=c=>(...h)=>{o(()=>{c(...h)})},l=()=>{const c=e;e=[],c.length&&J3(()=>{r(()=>{c.forEach(h=>{n(h)})})})};return{batch:i,batchCalls:a,schedule:o,setNotifyFunction:c=>{n=c},setBatchNotifyFunction:c=>{r=c}}}const Je=LT();class kw{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),K1(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,t??(ml?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class zT extends kw{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||qm,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||UT(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(t,n){const r=X1(this.state.data,t,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){this.dispatch({type:"setState",state:t,setStateOptions:n})}cancel(t){var n;const r=this.promise;return(n=this.retryer)==null||n.cancel(t),r?r.then(sn).catch(sn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!ww(this.state.dataUpdatedAt,t)}onFocus(){var t;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}onOnline(){var t;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}addObserver(t){this.observers.indexOf(t)===-1&&(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.indexOf(t)!==-1&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,n){var r,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var o;return(o=this.retryer)==null||o.continueRetry(),this.promise}}if(t&&this.setOptions(t),!this.options.queryFn){const x=this.observers.find(v=>v.options.queryFn);x&&this.setOptions(x.options)}Array.isArray(this.options.queryKey);const a=FT(),l={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},u=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>{if(a)return this.abortSignalConsumed=!0,a.signal}})};u(l);const d=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(l)):Promise.reject("Missing queryFn"),c={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:d};if(u(c),(r=this.options.behavior)==null||r.onFetch(c),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=c.fetchOptions)==null?void 0:i.meta)){var h;this.dispatch({type:"fetch",meta:(h=c.fetchOptions)==null?void 0:h.meta})}const g=x=>{if(gd(x)&&x.silent||this.dispatch({type:"error",error:x}),!gd(x)){var v,$,w,y;(v=($=this.cache.config).onError)==null||v.call($,x,this),(w=(y=this.cache.config).onSettled)==null||w.call(y,this.state.data,x,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=_w({fn:c.fetchFn,abort:a==null?void 0:a.abort.bind(a),onSuccess:x=>{var v,$,w,y;if(typeof x>"u"){g(new Error("undefined"));return}this.setData(x),(v=($=this.cache.config).onSuccess)==null||v.call($,x,this),(w=(y=this.cache.config).onSettled)==null||w.call(y,x,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:g,onFail:(x,v)=>{this.dispatch({type:"failed",failureCount:x,error:v})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){const n=r=>{var i,o;switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=t.meta)!=null?i:null,fetchStatus:Cf(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=t.dataUpdatedAt)!=null?o:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const a=t.error;return gd(a)&&a.revert&&this.revertState?{...this.revertState}:{...r,error:a,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:a,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Je.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}}function UT(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=typeof t<"u",r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}class BT extends qa{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,n,r){var i;const o=n.queryKey,a=(i=n.queryHash)!=null?i:Vm(o,n);let l=this.get(a);return l||(l=new zT({cache:this,logger:t.getLogger(),queryKey:o,queryHash:a,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(l)),l}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){const n=this.queriesMap[t.queryHash];n&&(t.destroy(),this.queries=this.queries.filter(r=>r!==t),n===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){Je.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,n){const[r]=Hr(t,n);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(i=>G3(r,i))}findAll(t,n){const[r]=Hr(t,n);return Object.keys(r).length>0?this.queries.filter(i=>G3(r,i)):this.queries}notify(t){Je.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Je.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){Je.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}}class HT extends kw{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||qm,this.observers=[],this.state=t.state||Nw(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.indexOf(t)===-1&&(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(n=>n!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,n;return(t=(n=this.retryer)==null?void 0:n.continue())!=null?t:this.execute()}async execute(){const t=()=>{var T;return this.retryer=_w({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(R,W)=>{this.dispatch({type:"failed",failureCount:R,error:W})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(T=this.options.retry)!=null?T:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var r,i,o,a,l,u,d,c;if(!n){var h,g,x,v;this.dispatch({type:"loading",variables:this.options.variables}),await((h=(g=this.mutationCache.config).onMutate)==null?void 0:h.call(g,this.state.variables,this));const R=await((x=(v=this.options).onMutate)==null?void 0:x.call(v,this.state.variables));R!==this.state.context&&this.dispatch({type:"loading",context:R,variables:this.state.variables})}const T=await t();return await((r=(i=this.mutationCache.config).onSuccess)==null?void 0:r.call(i,T,this.state.variables,this.state.context,this)),await((o=(a=this.options).onSuccess)==null?void 0:o.call(a,T,this.state.variables,this.state.context)),await((l=(u=this.mutationCache.config).onSettled)==null?void 0:l.call(u,T,null,this.state.variables,this.state.context,this)),await((d=(c=this.options).onSettled)==null?void 0:d.call(c,T,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:T}),T}catch(T){try{var $,w,y,p,b,S,P,_;throw await(($=(w=this.mutationCache.config).onError)==null?void 0:$.call(w,T,this.state.variables,this.state.context,this)),await((y=(p=this.options).onError)==null?void 0:y.call(p,T,this.state.variables,this.state.context)),await((b=(S=this.mutationCache.config).onSettled)==null?void 0:b.call(S,void 0,T,this.state.variables,this.state.context,this)),await((P=(_=this.options).onSettled)==null?void 0:P.call(_,void 0,T,this.state.variables,this.state.context)),T}finally{this.dispatch({type:"error",error:T})}}}dispatch(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!Cf(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...r,...t.state}}};this.state=n(this.state),Je.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}function Nw(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class WT extends qa{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,n,r){const i=new HT({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(n),state:r,defaultOptions:n.mutationKey?t.getMutationDefaults(n.mutationKey):void 0});return this.add(i),i}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(n=>n!==t),this.notify({type:"removed",mutation:t})}clear(){Je.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return typeof t.exact>"u"&&(t.exact=!0),this.mutations.find(n=>Q3(t,n))}findAll(t){return this.mutations.filter(n=>Q3(t,n))}notify(t){Je.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){var t;return this.resuming=((t=this.resuming)!=null?t:Promise.resolve()).then(()=>{const n=this.mutations.filter(r=>r.state.isPaused);return Je.batch(()=>n.reduce((r,i)=>r.then(()=>i.continue().catch(sn)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function YT(){return{onFetch:e=>{e.fetchFn=()=>{var t,n,r,i,o,a;const l=(t=e.fetchOptions)==null||(n=t.meta)==null?void 0:n.refetchPage,u=(r=e.fetchOptions)==null||(i=r.meta)==null?void 0:i.fetchMore,d=u==null?void 0:u.pageParam,c=(u==null?void 0:u.direction)==="forward",h=(u==null?void 0:u.direction)==="backward",g=((o=e.state.data)==null?void 0:o.pages)||[],x=((a=e.state.data)==null?void 0:a.pageParams)||[];let v=x,$=!1;const w=_=>{Object.defineProperty(_,"signal",{enumerable:!0,get:()=>{var T;if((T=e.signal)!=null&&T.aborted)$=!0;else{var R;(R=e.signal)==null||R.addEventListener("abort",()=>{$=!0})}return e.signal}})},y=e.options.queryFn||(()=>Promise.reject("Missing queryFn")),p=(_,T,R,W)=>(v=W?[T,...v]:[...v,T],W?[R,..._]:[..._,R]),b=(_,T,R,W)=>{if($)return Promise.reject("Cancelled");if(typeof R>"u"&&!T&&_.length)return Promise.resolve(_);const z={queryKey:e.queryKey,pageParam:R,meta:e.options.meta};w(z);const ie=y(z);return Promise.resolve(ie).then(j=>p(_,R,j,W))};let S;if(!g.length)S=b([]);else if(c){const _=typeof d<"u",T=_?d:X3(e.options,g);S=b(g,_,T)}else if(h){const _=typeof d<"u",T=_?d:VT(e.options,g);S=b(g,_,T,!0)}else{v=[];const _=typeof e.options.getNextPageParam>"u";S=(l&&g[0]?l(g[0],0,g):!0)?b([],_,x[0]):Promise.resolve(p([],x[0],g[0]));for(let R=1;R<g.length;R++)S=S.then(W=>{if(l&&g[R]?l(g[R],R,g):!0){const ie=_?x[R]:X3(e.options,W);return b(W,_,ie)}return Promise.resolve(p(W,x[R],g[R]))})}return S.then(_=>({pages:_,pageParams:v}))}}}}function X3(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function VT(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}class qT{constructor(t={}){this.queryCache=t.queryCache||new BT,this.mutationCache=t.mutationCache||new WT,this.logger=t.logger||qm,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=yc.subscribe(()=>{yc.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=vc.subscribe(()=>{vc.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,n;this.mountCount--,this.mountCount===0&&((t=this.unsubscribeFocus)==null||t.call(this),this.unsubscribeFocus=void 0,(n=this.unsubscribeOnline)==null||n.call(this),this.unsubscribeOnline=void 0)}isFetching(t,n){const[r]=Hr(t,n);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state.data}ensureQueryData(t,n,r){const i=Ns(t,n,r),o=this.getQueryData(i.queryKey);return o?Promise.resolve(o):this.fetchQuery(i)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(t,n,r){const i=this.queryCache.find(t),o=i==null?void 0:i.state.data,a=AT(n,o);if(typeof a>"u")return;const l=Ns(t),u=this.defaultQueryOptions(l);return this.queryCache.build(this,u).setData(a,{...r,manual:!0})}setQueriesData(t,n,r){return Je.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state}removeQueries(t,n){const[r]=Hr(t,n),i=this.queryCache;Je.batch(()=>{i.findAll(r).forEach(o=>{i.remove(o)})})}resetQueries(t,n,r){const[i,o]=Hr(t,n,r),a=this.queryCache,l={type:"active",...i};return Je.batch(()=>(a.findAll(i).forEach(u=>{u.reset()}),this.refetchQueries(l,o)))}cancelQueries(t,n,r){const[i,o={}]=Hr(t,n,r);typeof o.revert>"u"&&(o.revert=!0);const a=Je.batch(()=>this.queryCache.findAll(i).map(l=>l.cancel(o)));return Promise.all(a).then(sn).catch(sn)}invalidateQueries(t,n,r){const[i,o]=Hr(t,n,r);return Je.batch(()=>{var a,l;if(this.queryCache.findAll(i).forEach(d=>{d.invalidate()}),i.refetchType==="none")return Promise.resolve();const u={...i,type:(a=(l=i.refetchType)!=null?l:i.type)!=null?a:"active"};return this.refetchQueries(u,o)})}refetchQueries(t,n,r){const[i,o]=Hr(t,n,r),a=Je.batch(()=>this.queryCache.findAll(i).filter(u=>!u.isDisabled()).map(u=>{var d;return u.fetch(void 0,{...o,cancelRefetch:(d=o==null?void 0:o.cancelRefetch)!=null?d:!0,meta:{refetchPage:i.refetchPage}})}));let l=Promise.all(a).then(sn);return o!=null&&o.throwOnError||(l=l.catch(sn)),l}fetchQuery(t,n,r){const i=Ns(t,n,r),o=this.defaultQueryOptions(i);typeof o.retry>"u"&&(o.retry=!1);const a=this.queryCache.build(this,o);return a.isStaleByTime(o.staleTime)?a.fetch(o):Promise.resolve(a.state.data)}prefetchQuery(t,n,r){return this.fetchQuery(t,n,r).then(sn).catch(sn)}fetchInfiniteQuery(t,n,r){const i=Ns(t,n,r);return i.behavior=YT(),this.fetchQuery(i)}prefetchInfiniteQuery(t,n,r){return this.fetchInfiniteQuery(t,n,r).then(sn).catch(sn)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,n){const r=this.queryDefaults.find(i=>Qi(t)===Qi(i.queryKey));r?r.defaultOptions=n:this.queryDefaults.push({queryKey:t,defaultOptions:n})}getQueryDefaults(t){if(!t)return;const n=this.queryDefaults.find(r=>mc(t,r.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(t,n){const r=this.mutationDefaults.find(i=>Qi(t)===Qi(i.mutationKey));r?r.defaultOptions=n:this.mutationDefaults.push({mutationKey:t,defaultOptions:n})}getMutationDefaults(t){if(!t)return;const n=this.mutationDefaults.find(r=>mc(t,r.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(t){if(t!=null&&t._defaulted)return t;const n={...this.defaultOptions.queries,...this.getQueryDefaults(t==null?void 0:t.queryKey),...t,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=Vm(n.queryKey,n)),typeof n.refetchOnReconnect>"u"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary>"u"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(t==null?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}class GT extends qa{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),ex(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return eg(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return eg(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const r=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),Z1(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const o=this.hasListeners();o&&tx(this.currentQuery,i,this.options,r)&&this.executeFetch(),this.updateResult(n),o&&(this.currentQuery!==i||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();const a=this.computeRefetchInterval();o&&(this.currentQuery!==i||this.options.enabled!==r.enabled||a!==this.currentRefetchInterval)&&this.updateRefetchInterval(a)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(r=>{Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),t[r])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),r=this.client.getQueryCache().build(this.client,n);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(sn)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),ml||this.currentResult.isStale||!K1(this.options.staleTime))return;const n=ww(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(ml||this.options.enabled===!1||!K1(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||yc.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const r=this.currentQuery,i=this.options,o=this.currentResult,a=this.currentResultState,l=this.currentResultOptions,u=t!==r,d=u?t.state:this.currentQueryInitialState,c=u?this.currentResult:this.previousQueryResult,{state:h}=t;let{dataUpdatedAt:g,error:x,errorUpdatedAt:v,fetchStatus:$,status:w}=h,y=!1,p=!1,b;if(n._optimisticResults){const R=this.hasListeners(),W=!R&&ex(t,n),z=R&&tx(t,r,n,i);(W||z)&&($=Cf(t.options.networkMode)?"fetching":"paused",g||(w="loading")),n._optimisticResults==="isRestoring"&&($="idle")}if(n.keepPreviousData&&!h.dataUpdatedAt&&c!=null&&c.isSuccess&&w!=="error")b=c.data,g=c.dataUpdatedAt,w=c.status,y=!0;else if(n.select&&typeof h.data<"u")if(o&&h.data===(a==null?void 0:a.data)&&n.select===this.selectFn)b=this.selectResult;else try{this.selectFn=n.select,b=n.select(h.data),b=X1(o==null?void 0:o.data,b,n),this.selectResult=b,this.selectError=null}catch(R){this.selectError=R}else b=h.data;if(typeof n.placeholderData<"u"&&typeof b>"u"&&w==="loading"){let R;if(o!=null&&o.isPlaceholderData&&n.placeholderData===(l==null?void 0:l.placeholderData))R=o.data;else if(R=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof R<"u")try{R=n.select(R),this.selectError=null}catch(W){this.selectError=W}typeof R<"u"&&(w="success",b=X1(o==null?void 0:o.data,R,n),p=!0)}this.selectError&&(x=this.selectError,b=this.selectResult,v=Date.now(),w="error");const S=$==="fetching",P=w==="loading",_=w==="error";return{status:w,fetchStatus:$,isLoading:P,isSuccess:w==="success",isError:_,isInitialLoading:P&&S,data:b,dataUpdatedAt:g,error:x,errorUpdatedAt:v,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>d.dataUpdateCount||h.errorUpdateCount>d.errorUpdateCount,isFetching:S,isRefetching:S&&!P,isLoadingError:_&&h.dataUpdatedAt===0,isPaused:$==="paused",isPlaceholderData:p,isPreviousData:y,isRefetchError:_&&h.dataUpdatedAt!==0,isStale:Gm(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,Z1(r,n))return;this.currentResult=r;const i={cache:!0},o=()=>{if(!n)return!0;const{notifyOnChangeProps:a}=this.options;if(a==="all"||!a&&!this.trackedProps.size)return!0;const l=new Set(a??this.trackedProps);return this.options.useErrorBoundary&&l.add("error"),Object.keys(this.currentResult).some(u=>{const d=u;return this.currentResult[d]!==n[d]&&l.has(d)})};(t==null?void 0:t.listeners)!==!1&&o()&&(i.listeners=!0),this.notify({...i,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!gd(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){Je.batch(()=>{if(t.onSuccess){var n,r,i,o;(n=(r=this.options).onSuccess)==null||n.call(r,this.currentResult.data),(i=(o=this.options).onSettled)==null||i.call(o,this.currentResult.data,null)}else if(t.onError){var a,l,u,d;(a=(l=this.options).onError)==null||a.call(l,this.currentResult.error),(u=(d=this.options).onSettled)==null||u.call(d,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(c=>{c(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function QT(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function ex(e,t){return QT(e,t)||e.state.dataUpdatedAt>0&&eg(e,t,t.refetchOnMount)}function eg(e,t,n){if(t.enabled!==!1){const r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Gm(e,t)}return!1}function tx(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Gm(e,n)}function Gm(e,t){return e.isStaleByTime(t.staleTime)}let KT=class extends qa{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const r=this.options;this.options=this.client.defaultMutationOptions(t),Z1(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.listeners.length){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:Nw(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){Je.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,r,i,o;(n=(r=this.mutateOptions).onSuccess)==null||n.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(i=(o=this.mutateOptions).onSettled)==null||i.call(o,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var a,l,u,d;(a=(l=this.mutateOptions).onError)==null||a.call(l,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(u=(d=this.mutateOptions).onSettled)==null||u.call(d,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(c=>{c(this.currentResult)})})}};var xc={},ZT={get exports(){return xc},set exports(e){xc=e}},Ew={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ma=C;function JT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var XT=typeof Object.is=="function"?Object.is:JT,eA=Ma.useState,tA=Ma.useEffect,nA=Ma.useLayoutEffect,rA=Ma.useDebugValue;function iA(e,t){var n=t(),r=eA({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return nA(function(){i.value=n,i.getSnapshot=t,Hh(i)&&o({inst:i})},[e,n,t]),tA(function(){return Hh(i)&&o({inst:i}),e(function(){Hh(i)&&o({inst:i})})},[e]),rA(n),n}function Hh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!XT(e,n)}catch{return!0}}function oA(e,t){return t()}var aA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?oA:iA;Ew.useSyncExternalStore=Ma.useSyncExternalStore!==void 0?Ma.useSyncExternalStore:aA;(function(e){e.exports=Ew})(ZT);const Iw=xc.useSyncExternalStore,nx=C.createContext(void 0),Tw=C.createContext(!1);function Aw(e,t){return e||(t&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=nx),window.ReactQueryClientContext):nx)}const Mt=({context:e}={})=>{const t=C.useContext(Aw(e,C.useContext(Tw)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},sA=({client:e,children:t,context:n,contextSharing:r=!1})=>{C.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);const i=Aw(n,r);return C.createElement(Tw.Provider,{value:!n&&r},C.createElement(i.Provider,{value:e},t))},Rw=C.createContext(!1),lA=()=>C.useContext(Rw);Rw.Provider;function uA(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}const dA=C.createContext(uA()),cA=()=>C.useContext(dA);function Fw(e,t){return typeof e=="function"?e(...t):!!e}const fA=(e,t)=>{(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))},hA=e=>{C.useEffect(()=>{e.clearReset()},[e])},pA=({result:e,errorResetBoundary:t,useErrorBoundary:n,query:r})=>e.isError&&!t.isReset()&&!e.isFetching&&Fw(n,[e.error,r]),gA=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},mA=(e,t)=>e.isLoading&&e.isFetching&&!t,yA=(e,t,n)=>(e==null?void 0:e.suspense)&&mA(t,n),vA=(e,t,n)=>t.fetchOptimistic(e).then(({data:r})=>{e.onSuccess==null||e.onSuccess(r),e.onSettled==null||e.onSettled(r,null)}).catch(r=>{n.clearReset(),e.onError==null||e.onError(r),e.onSettled==null||e.onSettled(void 0,r)});function xA(e,t){const n=Mt({context:e.context}),r=lA(),i=cA(),o=n.defaultQueryOptions(e);o._optimisticResults=r?"isRestoring":"optimistic",o.onError&&(o.onError=Je.batchCalls(o.onError)),o.onSuccess&&(o.onSuccess=Je.batchCalls(o.onSuccess)),o.onSettled&&(o.onSettled=Je.batchCalls(o.onSettled)),gA(o),fA(o,i),hA(i);const[a]=C.useState(()=>new t(n,o)),l=a.getOptimisticResult(o);if(Iw(C.useCallback(u=>r?()=>{}:a.subscribe(Je.batchCalls(u)),[a,r]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),C.useEffect(()=>{a.setOptions(o,{listeners:!1})},[o,a]),yA(o,l,r))throw vA(o,a,i);if(pA({result:l,errorResetBoundary:i,useErrorBoundary:o.useErrorBoundary,query:a.getCurrentQuery()}))throw l.error;return o.notifyOnChangeProps?l:a.trackResult(l)}function Ke(e,t,n){const r=Ns(e,t,n);return xA(r,GT)}function $t(e,t,n){const r=RT(e,t,n),i=Mt({context:r.context}),[o]=C.useState(()=>new KT(i,r));C.useEffect(()=>{o.setOptions(r)},[o,r]);const a=Iw(C.useCallback(u=>o.subscribe(Je.batchCalls(u)),[o]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),l=C.useCallback((u,d)=>{o.mutate(u,d).catch(bA)},[o]);if(a.error&&Fw(o.options.useErrorBoundary,[a.error]))throw a.error;return{...a,mutate:l,mutateAsync:a.mutate}}function bA(){}const $A=()=>{var x,v,$,w,y,p,b;const[e,t]=C.useState(),[n,r]=C.useState(!0),i=n!==!0,o=nt(),a=Hl({firstName:Ot().required("This field cannot be empty"),lastName:Ot().required("This field cannot be empty"),email:Ot().email("this is not a valid email").required("This field cannot be empty"),phoneNum:Um().required("This field cannot be empty"),companyName:Ot().required("This field cannot be empty"),password:Ot().required("This field cannot be empty"),confirmPassword:Ot().oneOf([ow("password"),null],"Password must match")}).required(),{handleSubmit:l,formState:{errors:u},reset:d,register:c}=wf({resolver:Sf(a)}),h=$t({mutationKey:["createseler"],mutationFn:mI,onSuccess:S=>{console.log(S),o("/auth/verify")},onError:S=>{alert(S.message)}}),g=l(S=>{h.mutate(S)});return s("div",{children:s(kA,{children:m(_A,{children:[s(OA,{children:"Seller Account"}),s(PA,{children:"Please enter every necessary information"}),m(CA,{onSubmit:g,children:[m(ki,{children:[s(_i,{children:"Full Name"}),s(Oi,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(vo,{placeholder:"Full Name",...c("firstName")})}),s(Pi,{children:(u==null?void 0:u.firstName)&&((x=u==null?void 0:u.firstName)==null?void 0:x.message)})]}),m(ki,{children:[s(_i,{children:"Last Name"}),s(Oi,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(vo,{placeholder:"Last Name",...c("lastName")})}),s(Pi,{children:(u==null?void 0:u.lastName)&&((v=u==null?void 0:u.lastName)==null?void 0:v.message)})]}),m(ki,{children:[s(_i,{children:"Email Address"}),s(Oi,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(vo,{placeholder:"Email Address",...c("email")})}),s(Pi,{children:(u==null?void 0:u.email)&&(($=u==null?void 0:u.email)==null?void 0:$.message)})]}),m(ki,{children:[s(_i,{children:"Company Name"}),s(Oi,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(vo,{placeholder:"Company Name",...c("companyName")})}),s(Pi,{children:(u==null?void 0:u.companyName)&&((w=u==null?void 0:u.companyName)==null?void 0:w.message)})]}),m(ki,{children:[s(_i,{children:"Phone Number"}),s(Oi,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(Nm,{className:"phone",defaultCountry:"NG",...c("phoneNum"),placeholder:"Phone Number",value:e,onChange:t})}),s(Pi,{children:(u==null?void 0:u.phoneNum)&&((y=u==null?void 0:u.phoneNum)==null?void 0:y.message)})]}),m(ki,{children:[s(_i,{children:"Password"}),m(Oi,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:[s(vo,{placeholder:"Password",type:n?"password":"text",id:"pass",...c("password")}),s(rx,{onClick:()=>{r(i)},children:n===!1?s(Fa,{}):s(Ra,{})})]}),s(Pi,{children:(u==null?void 0:u.password)&&((p=u==null?void 0:u.password)==null?void 0:p.message)})]}),m(ki,{children:[s(_i,{children:"Confirm Password"}),m(Oi,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:[s(vo,{placeholder:"Confirm Password",type:n?"password":"text",id:"pass",...c("confirmPassword")}),s(rx,{onClick:()=>{r(i)},children:n===!1?s(Fa,{}):s(Ra,{})})]}),s(Pi,{children:(u==null?void 0:u.confirmPassword)&&((b=u==null?void 0:u.confirmPassword)==null?void 0:b.message)})]}),s(SA,{type:"submit",disabled:h.status==="loading",children:h.status==="loading"?"Loading...":"Continue"}),m(wA,{children:["Already have an account?"," ",s(ke,{to:"/auth/signin",style:{textDecoration:"none"},children:s("span",{children:"LogIn"})})]})]})]})})})};f.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    width: 90%;

    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`;const wA=f.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,SA=f.button`
    width: 360px;
    height: 40px;
    border: 0px;
    background-color: #ec00b1;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    margin: 20px;
    outline: none;

    @media (max-width: 370px){
        width: 300px;
        height: 30px;
        font-size: 16px;
    }
    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`,Pi=f.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`,rx=f.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,Oi=f.div`
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

    @media (max-width: 370px){
        width: 300px;
        height: 30px;
    }
    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`,vo=f.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,_i=f.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,ki=f.div`
    margin-bottom: 10px;
`,CA=f.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 370px){
        width: 350px;
    }
`,PA=f.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 250px;
`,OA=f.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
`,_A=f.div`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
    /* border: 1px solid gray; */
    /* background-color: gold; */

    /* @media (max-width: 370px){
        width: 90%;
    } */
`,kA=f.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,NA=()=>{var h,g;const e=nt(),t=Hl({email:Ot().email("this is not a valid email").required("This field cannot be empty"),password:Ot().required("This field cannot be empty")}).required(),[n,r]=C.useState(!0),i=n!==!0,{handleSubmit:o,formState:{errors:a},reset:l,register:u}=wf({resolver:Sf(t)}),d=$t({mutationKey:["seller"],mutationFn:xI,onSuccess:x=>{e("/seller-dashboard")},onError:x=>{console.log(x.message)}}),c=o(x=>{d.mutate(x)});return s("div",{children:s(jA,{children:m(MA,{children:[s(DA,{children:"Seller Account"}),s(FA,{children:"Please enter every necessary information"}),m(RA,{onSubmit:c,children:[m(lx,{children:[s(sx,{children:"Email Address"}),s(ox,{style:{border:`${a!=null&&a.email?"1px solid red":"1px solid lightgray"}`},children:s(ax,{placeholder:"Email Address",type:"email",...u("email")})}),s(ix,{children:(a==null?void 0:a.email)&&((h=a==null?void 0:a.email)==null?void 0:h.message)})]}),m(lx,{children:[s(sx,{children:"Password"}),m(ox,{style:{border:`${a!=null&&a.password?"1px solid red":"1px solid lightgray"}`},children:[s(ax,{placeholder:"Password",type:n?"password":"text",id:"pass",...u("password")}),s(AA,{onClick:()=>{r(i)},children:n===!1?s(Fa,{}):s(Ra,{})})]}),s(ix,{children:(a==null?void 0:a.password)&&((g=a==null?void 0:a.password)==null?void 0:g.message)})]}),s(EA,{children:"Forget Password?"}),s(TA,{type:"submit",disabled:d.status==="loading",children:d.status==="loading"?"Loading...":"Continue"}),m(IA,{children:["Don't have an account? ",s(ke,{to:"/auth",style:{textDecoration:"none"},children:s("span",{children:"Sign Up"})})]})]})]})})})},EA=f.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    width: 360px;
`,IA=f.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,TA=f.button`
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
`,ix=f.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`,AA=f.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,ox=f.div`
    width: 350px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
`,ax=f.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,sx=f.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,lx=f.div`
    margin-bottom: 10px;
`,RA=f.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,FA=f.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 250px;
`,DA=f.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
`,MA=f.div`
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
    /* border: 1px solid gray; */
`,jA=f.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,LA="/assets/camera-91f8abb7.png",zA=()=>{const e=nt(),[t,n]=C.useState(LA),[r,i]=C.useState(""),[o,a]=C.useState(""),[l,u]=C.useState(""),[d,c]=C.useState(""),h=w=>{const y=w.target.files[0],p=URL.createObjectURL(y);n(p),i(y)},g=w=>{const y=w.target.files[0];c(y)},x=$t({mutationFn:wI,onSuccess:w=>{console.log(w),e("/auth/bankdetails")},onError:w=>{console.log(w.message)}}),v=JSON.parse(localStorage.getItem("user"));return s("div",{children:s(KA,{children:m(QA,{children:[s(GA,{children:"Business Information"}),s(qA,{children:"Enter every necessary details to create your own seller account"}),m(VA,{onSubmit:w=>{w.preventDefault();const y=v._id,p=new FormData;p.append("IDtype",l),p.append("CACNumber",o),p.append("avatar",r),p.append("avatar",d),x.mutate({id:y,formData:p})},type:"multipart/form-data",children:[m(Vh,{children:[s(Yh,{children:"Business owner or legal representative ID type"}),s(Wh,{children:m(UA,{value:l,onChange:w=>{u(w.target.value)},children:[s("option",{children:"Select ID type"}),s("option",{children:"NIN"}),s("option",{children:"BVN"})]})})]}),m(Vh,{children:[s(Yh,{children:"Upload a copy of your valid ID card"}),s(Wh,{children:s(ux,{type:"file",id:"pass",onChange:g})})]}),m(Vh,{children:[s(Yh,{children:"CAC Registration Number"}),s(Wh,{children:s(ux,{placeholder:"NIN OR BVN",type:"number",value:o,onChange:w=>{a(w.target.value)}})})]}),m(WA,{children:[s(BA,{type:"file",onChange:h}),s(HA,{src:t})]}),s(YA,{type:"submit",disabled:x.status==="loading",children:x.status==="loading"?"Loading...":"Continue"})]})]})})})},UA=f.select`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
`,BA=f.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    /* opacity: 0px; */
    display: none;
`,HA=f.img`
    
    /* background-color: gold; */
    width: 80%;
    height: 70%;
    border-radius: 5px;
`,WA=f.label`
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
`,YA=f.button`
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
`;f.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`;const Wh=f.div`
    width: 350px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
`,ux=f.input`
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
`,Yh=f.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,Vh=f.div`
    margin-bottom: 10px;
`,VA=f.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,qA=f.div`
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    width: 300px;
    margin-bottom: 20px;

`,GA=f.div`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
`,QA=f.div`
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
    /* border: 1px solid gray; */
`,KA=f.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;function ZA(e){return _e({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"}}]})(e)}function Dw(e){return _e({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}}]})(e)}function JA(e){return _e({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"}},{tag:"path",attr:{d:"M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"}}]})(e)}function XA(e){return _e({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}}]})(e)}function eR(e){return _e({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z"}}]})(e)}var tg={},tR={get exports(){return tg},set exports(e){tg=e}},Mw={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pf=C,nR=xc;function rR(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var iR=typeof Object.is=="function"?Object.is:rR,oR=nR.useSyncExternalStore,aR=Pf.useRef,sR=Pf.useEffect,lR=Pf.useMemo,uR=Pf.useDebugValue;Mw.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=aR(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=lR(function(){function u(x){if(!d){if(d=!0,c=x,x=r(x),i!==void 0&&a.hasValue){var v=a.value;if(i(v,x))return h=v}return h=x}if(v=h,iR(c,x))return v;var $=r(x);return i!==void 0&&i(v,$)?v:(c=x,h=$)}var d=!1,c,h,g=n===void 0?null:n;return[function(){return u(t())},g===null?void 0:function(){return u(g())}]},[t,n,r,i]);var l=oR(e,o[0],o[1]);return sR(function(){a.hasValue=!0,a.value=l},[l]),uR(l),l};(function(e){e.exports=Mw})(tR);function dR(e){e()}let jw=dR;const cR=e=>jw=e,fR=()=>jw,yi=C.createContext(null);function Lw(){return C.useContext(yi)}const hR=()=>{throw new Error("uSES not initialized!")};let zw=hR;const pR=e=>{zw=e},gR=(e,t)=>e===t;function mR(e=yi){const t=e===yi?Lw:()=>C.useContext(e);return function(r,i=gR){const{store:o,subscription:a,getServerState:l}=t(),u=zw(a.addNestedSub,o.getState,l||o.getState,r,i);return C.useDebugValue(u),u}}const ja=mR();var dx={},yR={get exports(){return dx},set exports(e){dx=e}},Te={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm=Symbol.for("react.element"),Km=Symbol.for("react.portal"),Of=Symbol.for("react.fragment"),_f=Symbol.for("react.strict_mode"),kf=Symbol.for("react.profiler"),Nf=Symbol.for("react.provider"),Ef=Symbol.for("react.context"),vR=Symbol.for("react.server_context"),If=Symbol.for("react.forward_ref"),Tf=Symbol.for("react.suspense"),Af=Symbol.for("react.suspense_list"),Rf=Symbol.for("react.memo"),Ff=Symbol.for("react.lazy"),xR=Symbol.for("react.offscreen"),Uw;Uw=Symbol.for("react.module.reference");function vn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Qm:switch(e=e.type,e){case Of:case kf:case _f:case Tf:case Af:return e;default:switch(e=e&&e.$$typeof,e){case vR:case Ef:case If:case Ff:case Rf:case Nf:return e;default:return t}}case Km:return t}}}Te.ContextConsumer=Ef;Te.ContextProvider=Nf;Te.Element=Qm;Te.ForwardRef=If;Te.Fragment=Of;Te.Lazy=Ff;Te.Memo=Rf;Te.Portal=Km;Te.Profiler=kf;Te.StrictMode=_f;Te.Suspense=Tf;Te.SuspenseList=Af;Te.isAsyncMode=function(){return!1};Te.isConcurrentMode=function(){return!1};Te.isContextConsumer=function(e){return vn(e)===Ef};Te.isContextProvider=function(e){return vn(e)===Nf};Te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qm};Te.isForwardRef=function(e){return vn(e)===If};Te.isFragment=function(e){return vn(e)===Of};Te.isLazy=function(e){return vn(e)===Ff};Te.isMemo=function(e){return vn(e)===Rf};Te.isPortal=function(e){return vn(e)===Km};Te.isProfiler=function(e){return vn(e)===kf};Te.isStrictMode=function(e){return vn(e)===_f};Te.isSuspense=function(e){return vn(e)===Tf};Te.isSuspenseList=function(e){return vn(e)===Af};Te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Of||e===kf||e===_f||e===Tf||e===Af||e===xR||typeof e=="object"&&e!==null&&(e.$$typeof===Ff||e.$$typeof===Rf||e.$$typeof===Nf||e.$$typeof===Ef||e.$$typeof===If||e.$$typeof===Uw||e.getModuleId!==void 0)};Te.typeOf=vn;(function(e){e.exports=Te})(yR);function bR(){const e=fR();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const cx={notify(){},get:()=>[]};function $R(e,t){let n,r=cx;function i(h){return u(),r.subscribe(h)}function o(){r.notify()}function a(){c.onStateChange&&c.onStateChange()}function l(){return!!n}function u(){n||(n=t?t.addNestedSub(a):e.subscribe(a),r=bR())}function d(){n&&(n(),n=void 0,r.clear(),r=cx)}const c={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:a,isSubscribed:l,trySubscribe:u,tryUnsubscribe:d,getListeners:()=>r};return c}const wR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",SR=wR?C.useLayoutEffect:C.useEffect;function CR({store:e,context:t,children:n,serverState:r}){const i=C.useMemo(()=>{const l=$R(e);return{store:e,subscription:l,getServerState:r?()=>r:void 0}},[e,r]),o=C.useMemo(()=>e.getState(),[e]);SR(()=>{const{subscription:l}=i;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),o!==e.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[i,o]);const a=t||yi;return ne.createElement(a.Provider,{value:i},n)}function Bw(e=yi){const t=e===yi?Lw:()=>C.useContext(e);return function(){const{store:r}=t();return r}}const PR=Bw();function OR(e=yi){const t=e===yi?PR:Bw(e);return function(){return t().dispatch}}const Zm=OR();pR(tg.useSyncExternalStoreWithSelector);cR(Pd.unstable_batchedUpdates);function In(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function vi(e){return!!e&&!!e[We]}function kr(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===FR}(e)||Array.isArray(e)||!!e[vx]||!!(!((t=e.constructor)===null||t===void 0)&&t[vx])||Jm(e)||Xm(e))}function ao(e,t,n){n===void 0&&(n=!1),Ga(e)===0?(n?Object.keys:$a)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Ga(e){var t=e[We];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Jm(e)?2:Xm(e)?3:0}function ba(e,t){return Ga(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function _R(e,t){return Ga(e)===2?e.get(t):e[t]}function Hw(e,t,n){var r=Ga(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Ww(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Jm(e){return AR&&e instanceof Map}function Xm(e){return RR&&e instanceof Set}function Wi(e){return e.o||e.t}function ey(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Vw(e);delete t[We];for(var n=$a(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function ty(e,t){return t===void 0&&(t=!1),ny(e)||vi(e)||!kr(e)||(Ga(e)>1&&(e.set=e.add=e.clear=e.delete=kR),Object.freeze(e),t&&ao(e,function(n,r){return ty(r,!0)},!0)),e}function kR(){In(2)}function ny(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Xn(e){var t=og[e];return t||In(18,e),t}function NR(e,t){og[e]||(og[e]=t)}function ng(){return yl}function qh(e,t){t&&(Xn("Patches"),e.u=[],e.s=[],e.v=t)}function bc(e){rg(e),e.p.forEach(ER),e.p=null}function rg(e){e===yl&&(yl=e.l)}function fx(e){return yl={p:[],l:yl,h:e,m:!0,_:0}}function ER(e){var t=e[We];t.i===0||t.i===1?t.j():t.g=!0}function Gh(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||Xn("ES5").S(t,e,r),r?(n[We].P&&(bc(t),In(4)),kr(e)&&(e=$c(t,e),t.l||wc(t,e)),t.u&&Xn("Patches").M(n[We].t,e,t.u,t.s)):e=$c(t,n,[]),bc(t),t.u&&t.v(t.u,t.s),e!==Yw?e:void 0}function $c(e,t,n){if(ny(t))return t;var r=t[We];if(!r)return ao(t,function(l,u){return hx(e,r,t,l,u,n)},!0),t;if(r.A!==e)return t;if(!r.P)return wc(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=ey(r.k):r.o,o=i,a=!1;r.i===3&&(o=new Set(i),i.clear(),a=!0),ao(o,function(l,u){return hx(e,r,i,l,u,n,a)}),wc(e,i,!1),n&&e.u&&Xn("Patches").N(r,n,e.u,e.s)}return r.o}function hx(e,t,n,r,i,o,a){if(vi(i)){var l=$c(e,i,o&&t&&t.i!==3&&!ba(t.R,r)?o.concat(r):void 0);if(Hw(n,r,l),!vi(l))return;e.m=!1}else a&&n.add(i);if(kr(i)&&!ny(i)){if(!e.h.D&&e._<1)return;$c(e,i),t&&t.A.l||wc(e,i)}}function wc(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&ty(t,n)}function Qh(e,t){var n=e[We];return(n?Wi(n):e)[t]}function px(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Vr(e){e.P||(e.P=!0,e.l&&Vr(e.l))}function Kh(e){e.o||(e.o=ey(e.t))}function ig(e,t,n){var r=Jm(t)?Xn("MapSet").F(t,n):Xm(t)?Xn("MapSet").T(t,n):e.O?function(i,o){var a=Array.isArray(i),l={i:a?1:0,A:o?o.A:ng(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},u=l,d=vl;a&&(u=[l],d=Es);var c=Proxy.revocable(u,d),h=c.revoke,g=c.proxy;return l.k=g,l.j=h,g}(t,n):Xn("ES5").J(t,n);return(n?n.A:ng()).p.push(r),r}function IR(e){return vi(e)||In(22,e),function t(n){if(!kr(n))return n;var r,i=n[We],o=Ga(n);if(i){if(!i.P&&(i.i<4||!Xn("ES5").K(i)))return i.t;i.I=!0,r=gx(n,o),i.I=!1}else r=gx(n,o);return ao(r,function(a,l){i&&_R(i.t,a)===l||Hw(r,a,t(l))}),o===3?new Set(r):r}(e)}function gx(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return ey(e)}function TR(){function e(o,a){var l=i[o];return l?l.enumerable=a:i[o]=l={configurable:!0,enumerable:a,get:function(){var u=this[We];return vl.get(u,o)},set:function(u){var d=this[We];vl.set(d,o,u)}},l}function t(o){for(var a=o.length-1;a>=0;a--){var l=o[a][We];if(!l.P)switch(l.i){case 5:r(l)&&Vr(l);break;case 4:n(l)&&Vr(l)}}}function n(o){for(var a=o.t,l=o.k,u=$a(l),d=u.length-1;d>=0;d--){var c=u[d];if(c!==We){var h=a[c];if(h===void 0&&!ba(a,c))return!0;var g=l[c],x=g&&g[We];if(x?x.t!==h:!Ww(g,h))return!0}}var v=!!a[We];return u.length!==$a(a).length+(v?0:1)}function r(o){var a=o.k;if(a.length!==o.t.length)return!0;var l=Object.getOwnPropertyDescriptor(a,a.length-1);if(l&&!l.get)return!0;for(var u=0;u<a.length;u++)if(!a.hasOwnProperty(u))return!0;return!1}var i={};NR("ES5",{J:function(o,a){var l=Array.isArray(o),u=function(c,h){if(c){for(var g=Array(h.length),x=0;x<h.length;x++)Object.defineProperty(g,""+x,e(x,!0));return g}var v=Vw(h);delete v[We];for(var $=$a(v),w=0;w<$.length;w++){var y=$[w];v[y]=e(y,c||!!v[y].enumerable)}return Object.create(Object.getPrototypeOf(h),v)}(l,o),d={i:l?5:4,A:a?a.A:ng(),P:!1,I:!1,R:{},l:a,t:o,k:u,o:null,g:!1,C:!1};return Object.defineProperty(u,We,{value:d,writable:!0}),u},S:function(o,a,l){l?vi(a)&&a[We].A===o&&t(o.p):(o.u&&function u(d){if(d&&typeof d=="object"){var c=d[We];if(c){var h=c.t,g=c.k,x=c.R,v=c.i;if(v===4)ao(g,function(b){b!==We&&(h[b]!==void 0||ba(h,b)?x[b]||u(g[b]):(x[b]=!0,Vr(c)))}),ao(h,function(b){g[b]!==void 0||ba(g,b)||(x[b]=!1,Vr(c))});else if(v===5){if(r(c)&&(Vr(c),x.length=!0),g.length<h.length)for(var $=g.length;$<h.length;$++)x[$]=!1;else for(var w=h.length;w<g.length;w++)x[w]=!0;for(var y=Math.min(g.length,h.length),p=0;p<y;p++)g.hasOwnProperty(p)||(x[p]=!0),x[p]===void 0&&u(g[p])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var mx,yl,ry=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",AR=typeof Map<"u",RR=typeof Set<"u",yx=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Yw=ry?Symbol.for("immer-nothing"):((mx={})["immer-nothing"]=!0,mx),vx=ry?Symbol.for("immer-draftable"):"__$immer_draftable",We=ry?Symbol.for("immer-state"):"__$immer_state",FR=""+Object.prototype.constructor,$a=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Vw=Object.getOwnPropertyDescriptors||function(e){var t={};return $a(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},og={},vl={get:function(e,t){if(t===We)return e;var n=Wi(e);if(!ba(n,t))return function(i,o,a){var l,u=px(o,a);return u?"value"in u?u.value:(l=u.get)===null||l===void 0?void 0:l.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!kr(r)?r:r===Qh(e.t,t)?(Kh(e),e.o[t]=ig(e.A.h,r,e)):r},has:function(e,t){return t in Wi(e)},ownKeys:function(e){return Reflect.ownKeys(Wi(e))},set:function(e,t,n){var r=px(Wi(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Qh(Wi(e),t),o=i==null?void 0:i[We];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Ww(n,i)&&(n!==void 0||ba(e.t,t)))return!0;Kh(e),Vr(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Qh(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Kh(e),Vr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Wi(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){In(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){In(12)}},Es={};ao(vl,function(e,t){Es[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Es.deleteProperty=function(e,t){return Es.set.call(this,e,t,void 0)},Es.set=function(e,t,n){return vl.set.call(this,e[0],t,n,e[0])};var DR=function(){function e(n){var r=this;this.O=yx,this.D=!0,this.produce=function(i,o,a){if(typeof i=="function"&&typeof o!="function"){var l=o;o=i;var u=r;return function($){var w=this;$===void 0&&($=l);for(var y=arguments.length,p=Array(y>1?y-1:0),b=1;b<y;b++)p[b-1]=arguments[b];return u.produce($,function(S){var P;return(P=o).call.apply(P,[w,S].concat(p))})}}var d;if(typeof o!="function"&&In(6),a!==void 0&&typeof a!="function"&&In(7),kr(i)){var c=fx(r),h=ig(r,i,void 0),g=!0;try{d=o(h),g=!1}finally{g?bc(c):rg(c)}return typeof Promise<"u"&&d instanceof Promise?d.then(function($){return qh(c,a),Gh($,c)},function($){throw bc(c),$}):(qh(c,a),Gh(d,c))}if(!i||typeof i!="object"){if((d=o(i))===void 0&&(d=i),d===Yw&&(d=void 0),r.D&&ty(d,!0),a){var x=[],v=[];Xn("Patches").M(i,d,x,v),a(x,v)}return d}In(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(d){for(var c=arguments.length,h=Array(c>1?c-1:0),g=1;g<c;g++)h[g-1]=arguments[g];return r.produceWithPatches(d,function(x){return i.apply(void 0,[x].concat(h))})};var a,l,u=r.produce(i,o,function(d,c){a=d,l=c});return typeof Promise<"u"&&u instanceof Promise?u.then(function(d){return[d,a,l]}):[u,a,l]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){kr(n)||In(8),vi(n)&&(n=IR(n));var r=fx(this),i=ig(this,n,void 0);return i[We].C=!0,rg(r),i},t.finishDraft=function(n,r){var i=n&&n[We],o=i.A;return qh(o,r),Gh(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!yx&&In(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var a=Xn("Patches").$;return vi(n)?a(n,r):this.produce(n,function(l){return a(l,r)})},e}(),Zt=new DR,qw=Zt.produce;Zt.produceWithPatches.bind(Zt);Zt.setAutoFreeze.bind(Zt);Zt.setUseProxies.bind(Zt);Zt.applyPatches.bind(Zt);Zt.createDraft.bind(Zt);Zt.finishDraft.bind(Zt);function xl(e){return xl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xl(e)}function MR(e,t){if(xl(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(xl(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function jR(e){var t=MR(e,"string");return xl(t)==="symbol"?t:String(t)}function LR(e,t,n){return t=jR(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function bx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xx(Object(n),!0).forEach(function(r){LR(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xx(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ct(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var $x=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Zh=function(){return Math.random().toString(36).substring(7).split("").join(".")},Sc={INIT:"@@redux/INIT"+Zh(),REPLACE:"@@redux/REPLACE"+Zh(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Zh()}};function zR(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function iy(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ct(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ct(1));return n(iy)(e,t)}if(typeof e!="function")throw new Error(Ct(2));var i=e,o=t,a=[],l=a,u=!1;function d(){l===a&&(l=a.slice())}function c(){if(u)throw new Error(Ct(3));return o}function h($){if(typeof $!="function")throw new Error(Ct(4));if(u)throw new Error(Ct(5));var w=!0;return d(),l.push($),function(){if(w){if(u)throw new Error(Ct(6));w=!1,d();var p=l.indexOf($);l.splice(p,1),a=null}}}function g($){if(!zR($))throw new Error(Ct(7));if(typeof $.type>"u")throw new Error(Ct(8));if(u)throw new Error(Ct(9));try{u=!0,o=i(o,$)}finally{u=!1}for(var w=a=l,y=0;y<w.length;y++){var p=w[y];p()}return $}function x($){if(typeof $!="function")throw new Error(Ct(10));i=$,g({type:Sc.REPLACE})}function v(){var $,w=h;return $={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(Ct(11));function b(){p.next&&p.next(c())}b();var S=w(b);return{unsubscribe:S}}},$[$x]=function(){return this},$}return g({type:Sc.INIT}),r={dispatch:g,subscribe:h,getState:c,replaceReducer:x},r[$x]=v,r}function UR(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Sc.INIT});if(typeof r>"u")throw new Error(Ct(12));if(typeof n(void 0,{type:Sc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ct(13))})}function BR(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),a;try{UR(n)}catch(l){a=l}return function(u,d){if(u===void 0&&(u={}),a)throw a;for(var c=!1,h={},g=0;g<o.length;g++){var x=o[g],v=n[x],$=u[x],w=v($,d);if(typeof w>"u")throw d&&d.type,new Error(Ct(14));h[x]=w,c=c||w!==$}return c=c||o.length!==Object.keys(u).length,c?h:u}}function Cc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function HR(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(Ct(15))},a={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},l=t.map(function(u){return u(a)});return o=Cc.apply(void 0,l)(i.dispatch),bx(bx({},i),{},{dispatch:o})}}}function Gw(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(a){return function(l){return typeof l=="function"?l(i,o,e):a(l)}}};return t}var Qw=Gw();Qw.withExtraArgument=Gw;const wx=Qw;var Kw=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),WR=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(d){return function(c){return u([d,c])}}function u(d){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=d[0]&2?i.return:d[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,d[1])).done)return o;switch(i=0,o&&(d=[d[0]&2,o.value]),d[0]){case 0:case 1:o=d;break;case 4:return n.label++,{value:d[1],done:!1};case 5:n.label++,i=d[1],d=[0];continue;case 7:d=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(d[0]===6||d[0]===2)){n=0;continue}if(d[0]===3&&(!o||d[1]>o[0]&&d[1]<o[3])){n.label=d[1];break}if(d[0]===6&&n.label<o[1]){n.label=o[1],o=d;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(d);break}o[2]&&n.ops.pop(),n.trys.pop();continue}d=t.call(e,n)}catch(c){d=[6,c],i=0}finally{r=o=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}},La=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},YR=Object.defineProperty,VR=Object.defineProperties,qR=Object.getOwnPropertyDescriptors,Sx=Object.getOwnPropertySymbols,GR=Object.prototype.hasOwnProperty,QR=Object.prototype.propertyIsEnumerable,Cx=function(e,t,n){return t in e?YR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},ci=function(e,t){for(var n in t||(t={}))GR.call(t,n)&&Cx(e,n,t[n]);if(Sx)for(var r=0,i=Sx(t);r<i.length;r++){var n=i[r];QR.call(t,n)&&Cx(e,n,t[n])}return e},Jh=function(e,t){return VR(e,qR(t))},KR=function(e,t,n){return new Promise(function(r,i){var o=function(u){try{l(n.next(u))}catch(d){i(d)}},a=function(u){try{l(n.throw(u))}catch(d){i(d)}},l=function(u){return u.done?r(u.value):Promise.resolve(u.value).then(o,a)};l((n=n.apply(e,t)).next())})},ZR=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Cc:Cc.apply(null,arguments)};function JR(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var XR=function(e){Kw(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,La([void 0],n[0].concat(this)))):new(t.bind.apply(t,La([void 0],n.concat(this))))},t}(Array),eF=function(e){Kw(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,La([void 0],n[0].concat(this)))):new(t.bind.apply(t,La([void 0],n.concat(this))))},t}(Array);function ag(e){return kr(e)?qw(e,function(){}):e}function tF(e){return typeof e=="boolean"}function nF(){return function(t){return rF(t)}}function rF(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new XR;return n&&(tF(n)?r.push(wx):r.push(wx.withExtraArgument(n.extraArgument))),r}var iF=!0;function oF(e){var t=nF(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,a=o===void 0?t():o,l=n.devTools,u=l===void 0?!0:l,d=n.preloadedState,c=d===void 0?void 0:d,h=n.enhancers,g=h===void 0?void 0:h,x;if(typeof i=="function")x=i;else if(JR(i))x=BR(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=a;typeof v=="function"&&(v=v(t));var $=HR.apply(void 0,v),w=Cc;u&&(w=ZR(ci({trace:!iF},typeof u=="object"&&u)));var y=new eF($),p=y;Array.isArray(g)?p=La([$],g):typeof g=="function"&&(p=g(y));var b=w.apply(void 0,p);return iy(x,c,b)}function fi(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return ci(ci({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function Zw(e){var t={},n=[],r,i={addCase:function(o,a){var l=typeof o=="string"?o:o.type;if(l in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[l]=a,i},addMatcher:function(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function aF(e){return typeof e=="function"}function sF(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Zw(t):[t,n,r],o=i[0],a=i[1],l=i[2],u;if(aF(e))u=function(){return ag(e())};else{var d=ag(e);u=function(){return d}}function c(h,g){h===void 0&&(h=u());var x=La([o[g.type]],a.filter(function(v){var $=v.matcher;return $(g)}).map(function(v){var $=v.reducer;return $}));return x.filter(function(v){return!!v}).length===0&&(x=[l]),x.reduce(function(v,$){if($)if(vi(v)){var w=v,y=$(w,g);return y===void 0?v:y}else{if(kr(v))return qw(v,function(p){return $(p,g)});var y=$(v,g);if(y===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}return v},h)}return c.getInitialState=u,c}function lF(e,t){return e+"/"+t}function uF(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:ag(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},a={},l={};i.forEach(function(c){var h=r[c],g=lF(t,c),x,v;"reducer"in h?(x=h.reducer,v=h.prepare):x=h,o[c]=x,a[g]=x,l[c]=v?fi(g,v):fi(g)});function u(){var c=typeof e.extraReducers=="function"?Zw(e.extraReducers):[e.extraReducers],h=c[0],g=h===void 0?{}:h,x=c[1],v=x===void 0?[]:x,$=c[2],w=$===void 0?void 0:$,y=ci(ci({},g),a);return sF(n,function(p){for(var b in y)p.addCase(b,y[b]);for(var S=0,P=v;S<P.length;S++){var _=P[S];p.addMatcher(_.matcher,_.reducer)}w&&p.addDefaultCase(w)})}var d;return{name:t,reducer:function(c,h){return d||(d=u()),d(c,h)},actions:l,caseReducers:o,getInitialState:function(){return d||(d=u()),d.getInitialState()}}}var dF="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",cF=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=dF[Math.random()*64|0];return t},fF=["name","message","stack","code"],Xh=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Px=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),hF=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=fF;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=fi(t+"/fulfilled",function(d,c,h,g){return{payload:d,meta:Jh(ci({},g||{}),{arg:h,requestId:c,requestStatus:"fulfilled"})}}),o=fi(t+"/pending",function(d,c,h){return{payload:void 0,meta:Jh(ci({},h||{}),{arg:c,requestId:d,requestStatus:"pending"})}}),a=fi(t+"/rejected",function(d,c,h,g,x){return{payload:g,error:(r&&r.serializeError||hF)(d||"Rejected"),meta:Jh(ci({},x||{}),{arg:h,requestId:c,rejectedWithValue:!!g,requestStatus:"rejected",aborted:(d==null?void 0:d.name)==="AbortError",condition:(d==null?void 0:d.name)==="ConditionError"})}}),l=typeof AbortController<"u"?AbortController:function(){function d(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return d.prototype.abort=function(){},d}();function u(d){return function(c,h,g){var x=r!=null&&r.idGenerator?r.idGenerator(d):cF(),v=new l,$;function w(p){$=p,v.abort()}var y=function(){return KR(this,null,function(){var p,b,S,P,_,T,R;return WR(this,function(W){switch(W.label){case 0:return W.trys.push([0,4,,5]),P=(p=r==null?void 0:r.condition)==null?void 0:p.call(r,d,{getState:h,extra:g}),gF(P)?[4,P]:[3,2];case 1:P=W.sent(),W.label=2;case 2:if(P===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return _=new Promise(function(z,ie){return v.signal.addEventListener("abort",function(){return ie({name:"AbortError",message:$||"Aborted"})})}),c(o(x,d,(b=r==null?void 0:r.getPendingMeta)==null?void 0:b.call(r,{requestId:x,arg:d},{getState:h,extra:g}))),[4,Promise.race([_,Promise.resolve(n(d,{dispatch:c,getState:h,extra:g,requestId:x,signal:v.signal,abort:w,rejectWithValue:function(z,ie){return new Xh(z,ie)},fulfillWithValue:function(z,ie){return new Px(z,ie)}})).then(function(z){if(z instanceof Xh)throw z;return z instanceof Px?i(z.payload,x,d,z.meta):i(z,x,d)})])];case 3:return S=W.sent(),[3,5];case 4:return T=W.sent(),S=T instanceof Xh?a(null,x,d,T.payload,T.meta):a(T,x,d),[3,5];case 5:return R=r&&!r.dispatchConditionRejection&&a.match(S)&&S.meta.condition,R||c(S),[2,S]}})})}();return Object.assign(y,{abort:w,requestId:x,arg:d,unwrap:function(){return y.then(pF)}})}}return Object.assign(u,{pending:o,rejected:a,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function pF(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function gF(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var oy="listenerMiddleware";fi(oy+"/add");fi(oy+"/removeAll");fi(oy+"/remove");var Ox;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);TR();const mF={user:null,product:[],cartItem:[],qty:0,totalPrice:0},Jw=uF({name:"userAuth",initialState:mF,reducers:{addProduct:(e,{payload:t})=>{e.product=t},addToCart:(e,{payload:t})=>{const n=e.cartItem.findIndex(r=>r._id===t._id);n>=0?e.cartItem[n].qty+=1:e.cartItem.push({...t,qty:1}),e.qty+=1,e.totalPrice+=t.qty*t.price},removeCart:(e,{payload:t})=>{const n=e.cartItem.findIndex(r=>r._id===t._id);e.cartItem[n].qty>1?e.cartItem[n].qty-=1:e.cartItem=e.cartItem.filter(r=>r._id!==t._id),e.qty-=1,e.totalPrice-=t.price},removeAllCart:e=>{e.cartItem=[],e.qty=0},total:(e,{payload:t})=>{const{totalCost:n,totalItems:r}=e.cart.reduce((i,o)=>{const{price:a,QTY:l}=o,u=a*l;return i.totalItems+=l,i.totalCost+=u,i},{totalCost:0,totalItems:0});e.MyTotalQTY=r,e.MyTotalCost=n},signOut:e=>{e.user=null}}}),{signOut:tQ,addProduct:nQ,addToCart:_x,removeCart:yF,removeAllCart:vF}=Jw.actions,xF=Jw.reducer,bF=({id:e,avatar:t,data:n,qty:r})=>{const i=ja(l=>l.reducers.cartItem),o=i==null?void 0:i.find(l=>(l==null?void 0:l._id)===e),a=Zm();return s(MF,{children:s(FF,{children:m(DF,{children:[t==null?void 0:t.map((l,u)=>s(AF,{children:s(TF,{children:s("img",{src:l.url})})},u)),m(RF,{children:[m(IF,{children:[m(EF,{children:[s(kF,{children:s("span",{children:"Select Country"})}),m(NF,{children:[" ",s("div",{children:s(YS,{})}),s("span",{children:s(cn,{})})]})]}),m(i0,{children:[s(n0,{children:s("div",{children:s(ZA,{})})}),m(r0,{children:[s(t0,{children:"Door Delivery"}),m(e0,{children:["Every Delivery will be at",s("br",{})," your preferred location,",s("br",{})," after 15days of ordering."]})]})]}),m(i0,{children:[s(n0,{children:s("div",{children:s(XA,{})})}),m(r0,{children:[s(t0,{children:"Minimum order"}),m(e0,{children:["#50,000 worth of item",s("br",{}),"is the minimum"]})]})]}),m(i0,{children:[s(n0,{children:s("div",{children:s(JA,{})})}),m(r0,{children:[s(t0,{children:"Payment Method"}),m(e0,{children:["All Items will be delivered",s("br",{})," after Payment"]})]})]})]}),m(_F,{children:[s(CF,{children:"Quantity"}),m(PF,{children:[s($F,{onClick:()=>a(_x(n)),children:"+"}),s(wF,{children:o==null?void 0:o.qty}),s(SF,{disabled:(o==null?void 0:o.qty)<=0,onClick:()=>a(yF(n)),children:"-"})]}),s(OF,{children:s("button",{onClick:()=>a(_x(n)),children:"Add To Cart"})})]})]})]})})})},$F=f.button`
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
`,wF=f.div`
  width: 70px;
  height: 70px;
  border: 1.6px solid grey;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  
`,SF=f.button`
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

`,CF=f.div`
  font-size: 22px;
  font-weight: 700;
  font-family: poppins;
`,PF=f.div`
  width: 70%;
  height: 125px;
  display: flex;
  cursor: pointer;

  align-items: center;
  justify-content: space-between;
`,OF=f.div`
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
`,_F=f.div`
  width: 100%;
  height: 195px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1100px) {
    align-items: center;
  }
`,kF=f.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  span {
    font-size: 22px;
    font-weight: 700;
    font-family: poppins;
  }
`,NF=f.div`
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
`,e0=f.div`
  font-size: 15px;
  font-weight: 500;
  font-family: poppins;
`,t0=f.div`
  font-size: 25px;
  margin-bottom: 15px;
  font-weight: 500;
  font-family: poppins;
`,n0=f.div`
  width: 100px;
  border-radius: 5px;
  div {
    font-size: 62px;
  }
`,r0=f.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`,EF=f.div`
  width: 90%;
  height: 70px;
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`,i0=f.div`
  width: 90%;
  height: 120px;
  border-bottom: 1.5px solid grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`,IF=f.div`
  border: 1.8px solid black;
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
`;f.div`
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
`;const TF=f.div`
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
`,AF=f.div`
  width: 450px;
  /* flex: 1; */
  padding: 50px 0;
`,RF=f.div`
  width: 550px;
  /* flex: 1; */
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 50px 0;
`,FF=f.div`
  width: 95%;
  /* height: 95%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;f.div`
  width: 100%;
  height: 120px;
  border: 2px solid black;
`;const DF=f.div`
  width: 100%;
  flex-wrap: wrap;
  /* height: 970px; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    justify-content: center;
  }
`,MF=f.div`
  width: 100%;
  /* height: 100vh; */
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
`,jF=({description:e})=>s(HF,{children:s(BF,{children:m(LF,{children:[s(zF,{children:"Product Details"}),s(UF,{children:e})]})})});f.div`
  width: 300px;
  height: 300px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;f.div`
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
`;f.div`
  font-size: 13px;
  font-weight: 500;
  span {
    margin-left: 10px;
    position: relative;
    bottom: -2px;
    color: #d975c0;
  }
`;f.div`
  font-size: 13px;
  font-weight: 500;
`;f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;f.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`;const LF=f.div`
  width: 94%;
  border: 1.8px solid black;
  border-radius: 3px;
  padding: 0 30px;
`,zF=f.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`,UF=f.div`
  font-size: 16px;
  font-weight: 400;
  margin: 10px 0;
`;f.div`
  width: 94%;
  /* height: 350px; */

  border: 1.8px solid black;
  padding: 0 30px;
  border-radius: 3px;
`;f.div`
  font-size: 22px;
  font-weight: 700;
  font-family: poppins;
`;const BF=f.div`
  width: 95%;
  /* height: 595px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`,HF=f.div`
  width: 100%;
  /* height: 100vh; */
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
`,WF=({name:e,price:t})=>s(QF,{children:m(KF,{children:[m(YF,{children:[m(kx,{children:[s("span",{children:"Home"}),s("div",{children:s(ov,{})})]}),m(kx,{children:[s("span",{children:"All Items"})," ",s("div",{children:s(ov,{})})]})]}),s(VF,{children:e}),s(qF,{}),m(GF,{children:["₦",t]})]})}),YF=f.div`
  display: flex;
  width: 122px;
  align-items: center;
  justify-content: space-between;
`,kx=f.div`
  display: flex;
  span {
    font-size: 13px;
    font-weight: 500;
    margin-top: 10px;
  }

  div {
    margin-top: 10px;
  }
`,VF=f.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
`,qF=f.div``,GF=f.div`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0;
`,QF=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`,KF=f.div`
  width: 93.5%;
  border: 1.8px solid black;
  padding: 0 10px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`,Kn=({id:e,index:t,name:n,price:r,img:i})=>s(Ws,{children:m(eD,{children:[s(ZF,{children:s("img",{src:i})}),m(JF,{children:[" ",s(Nx,{to:`/detail/${e}`,children:n}),s(Nx,{to:"/cart",children:s("span",{children:s(Dw,{})})})]}),m(XF,{children:["₦",r]})]},t)}),Nx=f(ke)`
  color: black;
  text-decoration: none;
  cursor: pointer;
`,ZF=f.div`
  /* background-color: #cdc8c8; */
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  width: 220px;
  height: 260px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  @media (max-width: 550px){
    width: 170px;
    height: 220px;
  }
  @media (max-width: 440px){
    width: 150px;
    height: 220px;
  }
  @media (max-width: 380px){
    width: 120px;
    height: 200px;
  }
  @media (max-width: 314px){
    width: 100px;
    height: 160px;
  }
`,JF=f.div`
  font-size: 13px;
  font-weight: 500;
  span {
    margin-left: 10px;
    position: relative;
    bottom: -2px;
    color: #d975c0;
    cursor: pointer;
  }
`,XF=f.div`
  font-size: 13px;
  font-weight: 500;
`,eD=f.div`
  width: 220px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 10px;

  @media (max-width: 550px){
    width: 170px;
    height: 270px;
  }
  @media (max-width: 440px){
    width: 150px;
    height: 250px;
  }
  @media (max-width: 380px){
    width: 120px;
    height: 230px;
  }
  @media (max-width: 314px){
    width: 100px;
    height: 180px;
  }
`,Tr="https://crossbackend.onrender.com",ql=async e=>(await Xe.get(`${Tr}/api/product/${e}/seller`)).data.data,tD=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.post(`${Tr}/api/product/${e}/create/phone`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},nD=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.post(`${Tr}/api/product/${e}/create/cloth`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},rD=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.post(`${Tr}/api/product/${e}/create/electronics`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},iD=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.post(`${Tr}/api/product/${e}/create/food`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},oD=async({id:e,tag_No:t,quantity:n,startDate:r,endDate:i,active:o})=>{await Xe.patch(`${Tr}/api/product/${e}/update`,{id:e,tag_No:t,quantity:n,startDate:r,endDate:i,active:o}).then(a=>{localStorage.setItem("product",JSON.stringify(a.data.data)),console.log(a.data)})},Qa=async()=>await Xe.get(`${Tr}/api/product`).then(t=>t.data.data),aD=async e=>(await Xe.get(`${Tr}/api/product/${e}`)).data.data,sD=async({ids:e,quantities:t})=>{const n=await Xe.patch(`${Tr}/api/product/order`,{ids:e,quantities:t});return console.log(n),n.data.data},lD=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:Qa}),[t,n]=C.useState(0),r=e==null?void 0:e.filter(u=>u.status==="approved"),i=8,o=t*i,a=r==null?void 0:r.slice(o,o+i);var l=Intl.NumberFormat();return s(hD,{children:m(fD,{children:[s(dD,{children:"Mobiles"}),s(cD,{children:a==null?void 0:a.map((u,d)=>s(Kn,{id:u._id,name:u.name,price:l.format(u==null?void 0:u.price),img:u==null?void 0:u.avatar[0].url}))}),s(uD,{to:"/phone",children:s("button",{children:"See All"})})]})})},uD=f.div`
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
`,dD=f.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;
`,cD=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
`,fD=f.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  border: 1.9px solid #d975c0;
  padding: 0 10px;
  margin: 20px 0;
  border-radius: 5px;

  
`,hD=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,pD=()=>{const{id:e}=Q$();Zm();const{data:t}=Ke({queryKey:["products",e],queryFn:()=>aD(e)});var n=Intl.NumberFormat();return s(gD,{children:m(mD,{children:[s(WF,{name:t==null?void 0:t.name,price:n.format(t==null?void 0:t.price)}),s(bF,{id:e,qty:t==null?void 0:t.quantity,avatar:t==null?void 0:t.avatar,data:t}),s(jF,{description:t==null?void 0:t.description}),s(lD,{})]})})},gD=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,mD=f.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
`,ay=({index:e,name:t,price:n,shippingFee:r,totalPrice:i,subtotal:o,qty:a,id:l})=>s("div",{children:m(wD,{children:[m(l0,{children:[m($D,{children:[s(bD,{children:a}),s(xD,{src:"/Frame 1.png"})]}),m(vD,{children:[s(yD,{children:t}),m(wu,{children:["₦",n]})]})]}),s(s0,{}),s(l0,{children:m(Ex,{children:[m(o0,{children:[s(a0,{children:"Subtotal"}),m(wu,{children:["₦",o]})]}),m(o0,{children:[s(a0,{children:"Shipping Fee"}),m(wu,{children:["₦",r]})]})]})}),s(s0,{}),s(l0,{children:s(Ex,{children:m(o0,{children:[s(a0,{children:"Total"}),m(wu,{children:["₦",i]})]})})}),s(s0,{})]},l)}),Ex=f.div``,o0=f.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  margin: 10px 0px;
`,wu=f.div`
  font-weight: 700;
`,a0=f.div`
  font-size: 18px;
  font-weight: 600;
  /* margin-bottom: 10px; */
`,yD=f.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,vD=f.div`
  margin-left: 20px;
`,s0=f.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,xD=f.img`
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
`,bD=f.div`
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
`,$D=f.div`
  margin-right: 20px;
`,l0=f.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 90%;
`,wD=f.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,SD=()=>s("div",{children:s(AD,{children:m(TD,{children:[s(ID,{children:m(ED,{children:[m(c0,{children:[s(d0,{children:"Contact"}),m(u0,{children:[s(Rx,{placeholder:"email"}),s("span",{children:"Chance"})]})]}),m(c0,{children:[s(d0,{children:"Address"}),m(u0,{children:[s(Rx,{placeholder:"Address"}),s("span",{children:"Chance"})]})]}),m(c0,{children:[s(d0,{children:"Payment Method"}),s(u0,{children:m(ND,{children:[m(Ax,{children:[s(Tx,{bg:"fff"}),s(Ix,{children:"Pay on delivery"})]}),s(kD,{}),m(Ax,{children:[s(Tx,{bg:""}),s(Ix,{children:"Pay on delivery"})]})]})})]}),m(_D,{children:[m(OD,{children:[s("span",{children:s(HS,{})}),s("div",{children:"Return to Information"})]}),s(PD,{children:"Complete Order"})]})]})}),s(CD,{children:s(ay,{})})]})})}),CD=f.div`
    flex: 1;
    height: 100vh;
    border-left: 3px solid lightgray;
    /* background-color: blue; */
`,PD=f.button`
    padding: 15px 20px;
    border: #D975C0;
    background-color: #D975C0;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    cursor: pointer;
`,OD=f.div`
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
`,_D=f.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    margin-top: 30px;
`,kD=f.div`
    width: 100%;
    background-color: lightgray;
    height: 2px;
    margin: 10px 0px;
`,Ix=f.div`
    font-weight: 700;
    margin-right: 20px;
`,Tx=f.div`
    border: 1px solid black;
    background-color: ${({bg:e})=>e?"#D975C0":"transparent"};
    border-radius: 50%;
    height: 25px;
    width: 25px;
    cursor: pointer;
`,Ax=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,ND=f.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,Rx=f.input`
    width: 90%;
    height: 30px;
    border: 0px;
    outline: none;
    margin-left: 10px;

`,u0=f.div`
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
`,d0=f.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
`,c0=f.div`
    margin: 10px;
`,ED=f.div`
    width: 90%;
    margin-top: 20px;
`,ID=f.div`
    flex: 1;
    height: 100vh;
    display: flex;
    justify-content: center;
    /* background-color: gold; */
`,TD=f.div`
    width: 95%;
    display: flex;
`,AD=f.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,RD=()=>s(FD,{children:m(DD,{children:[s(MD,{children:s(jl,{fontSize:"50px",color:"green"})}),m(LD,{children:["Account Information has been",s("br",{})," received and will be reviewed ",s("br",{}),"shortly."]}),s(jD,{to:"/auth/signin",children:s("button",{children:"Start Selling"})})]})}),FD=f.div`
  width: 100%;
  height: 42vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 30px; */
  padding-top: 80px;
`,DD=f.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`,MD=f.div``,jD=f(lf)`
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
`,LD=f.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,zD=()=>s(UD,{children:m(BD,{children:[s(HD,{children:s(jl,{fontSize:"50px",color:"green"})}),m(YD,{children:["You have successfully created",s("br",{})," an account"]}),s(WD,{to:"/business",children:s("button",{children:"Continue"})})]})}),UD=f.div`
  width: 100%;
  height: 42vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`,BD=f.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`,HD=f.div``,WD=f(lf)`
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
`,YD=f.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,VD=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:Qa}),[t,n]=C.useState(0),r=8,i=t*r,o=e==null?void 0:e.slice(i,i+r),a=o==null?void 0:o.filter(h=>h.category==="phone"&&h.status==="approved"),l=o==null?void 0:o.filter(h=>h.category==="electronics"&&h.status==="approved"),u=o==null?void 0:o.filter(h=>h.category==="food"&&h.status==="approved"),d=o==null?void 0:o.filter(h=>h.category==="clothing"&&h.status==="approved");console.log(d);var c=Intl.NumberFormat();return m(qD,{children:[m(Ou,{children:[s(Cu,{children:"Mobiles"}),s(Pu,{children:a==null?void 0:a.map((h,g)=>s(Kn,{id:h._id,index:g,name:h.name,price:c.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url}))}),s(Su,{to:"/phone",children:s("button",{children:"See All"})})]}),m(Ou,{children:[s(Cu,{children:"Home Appliances"}),s(Pu,{children:l==null?void 0:l.map((h,g)=>s(Kn,{id:h._id,index:g,name:h.name,price:c.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url}))}),s(Su,{to:"/electronics",children:s("button",{children:"See All"})})]}),m(Ou,{children:[s(Cu,{children:"Accessories"}),s(Pu,{children:d==null?void 0:d.map((h,g)=>s(Kn,{id:h._id,index:g,name:h.name,price:c.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url}))}),s(Su,{to:"/clothing",children:s("button",{children:"See All"})})]}),m(Ou,{children:[s(Cu,{children:"Foodstuffs"}),s(Pu,{children:u==null?void 0:u.map((h,g)=>s(Kn,{id:h._id,index:g,name:h.name,price:c.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url}))}),s(Su,{to:"/food",children:s("button",{children:"See All"})})]})]})},Su=f(ke)`
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
`,Cu=f.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;
`,Pu=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
`,Ou=f.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  border: 1.9px solid #d975c0;
  padding: 0 10px;
  margin: 20px 0;
  border-radius: 5px;

  
`,qD=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,GD=()=>s(QD,{children:m(KD,{children:[s(ZD,{children:s(VS,{fontSize:"50px",color:"red"})}),s(XD,{children:"Incorrect OTP number, please try again"}),s(JD,{to:"/auth/verify",children:s("button",{children:"Try again"})})]})}),QD=f.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`,KD=f.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`,ZD=f.div``,JD=f(ke)`
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
`,XD=f.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,sy=[{name:"Nigeria",flag:"https://cdn-icons-png.flaticon.com/512/8603/8603374.png"},{name:"Ghana",flag:"https://cdn-icons-png.flaticon.com/512/8603/8603142.png"}],Xw="https://crossbackend.onrender.com",nr=async e=>(await Xe.get(`${Xw}/api/order`)).data.data,eM=e=>Xe.get(`${Xw}/api/order/${e}`).then(n=>n.data.data),tM="https://crossbackend.onrender.com",nM=()=>{const e=nt();var t=Intl.NumberFormat();const n=ja(k=>k.reducers.cartItem),r=ja(k=>k.reducers.qty),i=n==null?void 0:n.reduce((k,de)=>k+de.qty*de.price+de.shippingFee,0),[o,a]=C.useState(sy);let[l,u]=C.useState(0);const[d,c]=C.useState(""),[h,g]=C.useState(""),[x,v]=C.useState(""),[$,w]=C.useState(""),[y,p]=C.useState(""),[b,S]=C.useState(""),[P,_]=C.useState(""),[T,R]=C.useState(""),[W,z]=C.useState(""),[ie,M]=C.useState(),[j,J]=C.useState(!1),[F,X]=C.useState(!1),[te,L]=C.useState("Payment before delivery"),[N,E]=C.useState([]),U=()=>{const k=n.map(de=>({productID:de._id,sellerID:de.user,qty:de.qty,price:de.price}));E(k)},D=()=>{u(()=>l+1),l>=o.length-1&&u(()=>l=0)},H=()=>{v(o[l].name)},Y=$t({mutationKey:["order"],mutationFn:async({firstName:k,lastName:de,email:Z,order_No:Ce,payment_method:me,country:ge,Localgovt:he,state:Ne,apartment:De,nearestBusStop:fe,products:O,subtotal:I,totalQty:A,address:re})=>{await Xe.post(`${tM}/api/order/create`,{firstName:k,lastName:de,email:Z,order_No:Ce,payment_method:me,country:ge,Localgovt:he,state:Ne,apartment:De,nearestBusStop:fe,products:O,subtotal:I,totalQty:A,address:re}).then(q=>{e("/finishshipping"),console.log(q.data),localStorage.setItem("order",JSON.stringify(q.data.data))}).catch(q=>{console.log(q)})},onError:k=>{console.log(k)}}),oe=k=>{k.preventDefault(),(h.length==0||$.length==0||d.length==0||x.length==0||T.length==0||!te||P.length==0||b.length==0||W.length==0||N.length==0||b.length==0)&&(X(!0),alert("All inputs most be filed ")),Y.mutate({firstName:h,lastName:$,email:d,order_No:ie,payment_method:te,country:x,Localgovt:T,state:P,apartment:b,nearestBusStop:W,products:N,subtotal:i,totalQty:r,address:y})};return C.useEffect(()=>{H(),U()},[l]),s("div",{children:s(gM,{children:m(pM,{children:[s(hM,{children:m(fM,{onSubmit:oe,children:[m(Dx,{children:[s(h0,{children:"Contact Information"}),s(Bn,{children:"Email"}),s(Hn,{children:s(ar,{placeholder:"email",value:d,onChange:k=>c(k.target.value)})})]}),m(Dx,{children:[s(h0,{children:"Payment Method"}),s(Hn,{children:m(cM,{children:[j?m(Nu,{onClick:()=>{J(!1),L("Payment before delivery")},children:[s(ku,{bg:"fff"}),s(_u,{children:"Payment on delivery"})]}):m(Nu,{onClick:()=>{J(!0),L("Payment on delivery")},children:[s(ku,{bg:""}),s(_u,{children:"Payment on delivery"})]}),s(dM,{}),j?m(Nu,{onClick:()=>{J(!1),L("Payment before delivery")},children:[s(ku,{bg:""}),s(_u,{children:"Payment before delivery"})]}):m(Nu,{onClick:()=>{J(!0),L("Payment on delivery")},children:[s(ku,{bg:"fff"}),s(_u,{children:"Payment before delivery"})]})]})})]}),m(Eu,{children:[s(h0,{children:"Shipping Address"}),s(Bn,{children:"Country"}),m(oM,{children:[" ",s(rM,{src:o[l].flag}),s(iM,{onClick:D,children:s(cn,{})})]})]}),m(Mx,{children:[m(Fx,{children:[s(Bn,{children:"First Name"}),s(Hn,{children:s(ar,{placeholder:"First Name",value:h,onChange:k=>g(k.target.value)})})]}),m(Fx,{children:[s(Bn,{children:"Last Name"}),s(Hn,{children:s(ar,{placeholder:"Last Name",value:$,onChange:k=>w(k.target.value)})})]})]}),m(Eu,{children:[s(Bn,{children:"Address"}),s(Hn,{children:s(ar,{placeholder:"Address",value:y,onChange:k=>p(k.target.value)})})]}),m(Eu,{children:[s(Bn,{children:"Apartment, Suite etc.... (Optional)"}),s(Hn,{children:s(ar,{placeholder:"Apartment, Suite etc....",value:b,onChange:k=>S(k.target.value)})})]}),m(Mx,{children:[m(f0,{children:[s(Bn,{children:"State"}),s(Hn,{children:s(ar,{placeholder:"Lagos",value:P,onChange:k=>_(k.target.value)})})]}),m(f0,{children:[s(Bn,{children:"LGA"}),s(Hn,{children:s(ar,{placeholder:"Ajeromi",value:T,onChange:k=>R(k.target.value)})})]}),m(f0,{children:[s(Bn,{children:"Nearest B/Stop"}),s(Hn,{children:s(ar,{placeholder:"OJA",value:W,onChange:k=>z(k.target.value)})})]})]}),m(Eu,{children:[s(Bn,{children:"Phone number"}),s(Hn,{children:s(ar,{placeholder:"Phone number",type:"number",value:ie,onChange:k=>M(k.target.value)})})]}),m(uM,{children:[m(lM,{children:[s("span",{children:s(WS,{})}),s("div",{onClick:()=>{e(-1)},children:"Return to Cart"})]}),s(sM,{type:"submit",children:"Continue Shopping"})]})]})}),s(aM,{children:n==null?void 0:n.map((k,de)=>s(ay,{index:de,name:k.name,price:t.format(k.price),shippingFee:k==null?void 0:k.shippingFee,totalPrice:t.format(i),subtotal:t.format(k.price*k.qty),qty:k.qty,id:k._id}))})]})})})},rM=f.img`
  width: 40px;
`,iM=f.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Fx=f.div`
  width: 45%;
`,f0=f.div`
  width: 30%;
`,oM=f.div`
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
`,Bn=f.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 6px;
`,aM=f.div`
  flex: 1;

  @media (max-width: 768px ){
    display: none;
  }
  /* background-color: blue; */
`,sM=f.button`
  padding: 15px 20px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`,lM=f.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-weight: 600;
    margin-left: 10px;
    color: #3c3c3c;
  }
`,uM=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin-top: 30px;

  span {
    margin-top: 5px;
  }
`,dM=f.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,_u=f.div`
  font-weight: 700;
  margin-right: 20px;
`,ku=f.div`
  border: 1px solid black;
  background-color: ${({bg:e})=>e?"#D975C0":"transparent"};
  border-radius: 50%;
  height: 25px;
  width: 25px;
  cursor: pointer;
`,Nu=f.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,cM=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,ar=f.input`
  width: 90%;
  height: 30px;
  border: 0px;
  outline: none;
  /* margin-right: 20px; */
`,Hn=f.div`
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
`,h0=f.div`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 14px;
`,Dx=f.div`
  margin-bottom: 50px;
`,Eu=f.div`
  margin-bottom: 20px;
`,Mx=f.div`
  margin-bottom: 20px;
  display: flex;

  justify-content: space-between;
  align-items: center;
`,fM=f.form`
  width: 90%;
  margin-top: 20px;
`,hM=f.div`
  flex: 1;
  border-right: 2px solid lightgray;
  display: flex;
  justify-content: center;
  /* background-color: gold; */
`,pM=f.div`
  width: 95%;
  display: flex;
`,gM=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,mM=({index:e,totalPrice:t,subtotal:n,props:r})=>{var o,a,l,u,d,c;var i=Intl.NumberFormat();return s("div",{children:m(SM,{children:[m(Ux,{children:[m(wM,{children:[s($M,{children:r.qty}),s(bM,{src:(a=(o=r==null?void 0:r.productID)==null?void 0:o.avatar[0])==null?void 0:a.url})]}),m(xM,{children:[s(vM,{children:(l=r==null?void 0:r.productID)==null?void 0:l.name}),m(p0,{children:["₦ ",i.format((u=r==null?void 0:r.productID)==null?void 0:u.price)]})]})]}),s(zx,{}),s(Ux,{children:m(yM,{children:[m(jx,{children:[s(Lx,{children:"Subtotal"}),m(p0,{children:["₦",i.format((r==null?void 0:r.qty)*((d=r==null?void 0:r.productID)==null?void 0:d.price))]})]}),m(jx,{children:[s(Lx,{children:"Shipping Fee"}),m(p0,{children:["₦ ",i.format((c=r==null?void 0:r.productID)==null?void 0:c.shippingFee)]})]})]})}),s(zx,{})]},e)})},yM=f.div``,jx=f.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  margin: 10px 0px;
`,p0=f.div`
  font-weight: 700;
`,Lx=f.div`
  font-size: 18px;
  font-weight: 600;
  /* margin-bottom: 10px; */
`,vM=f.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,xM=f.div`
  margin-left: 20px;
`,zx=f.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,bM=f.img`
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
`,$M=f.div`
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
`,wM=f.div`
  margin-right: 20px;
`,Ux=f.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 90%;
`,SM=f.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,CM=()=>{var h,g,x;const e=Zm(),t=nt(),n=JSON.parse(localStorage.getItem("order")),r=ja(v=>v.reducers.cartItem),i=n==null?void 0:n._id,{data:o}=Ke({queryKey:["order",i],queryFn:()=>eM(i)});var a=Intl.NumberFormat();const l=$t({mutationKey:["products"],mutationFn:sD,onSuccess:()=>{t("/allitems"),e(vF(r)),localStorage.removeItem("order")}}),u=(h=n==null?void 0:n.products)==null?void 0:h.map(v=>v==null?void 0:v.productID),d=(g=n==null?void 0:n.products)==null?void 0:g.map(v=>v==null?void 0:v.qty),c=()=>{l.mutate({ids:u,quantities:d})};return s("div",{children:s(HM,{children:m(BM,{children:[m(UM,{children:[m(IM,{children:[s(TM,{children:s(jl,{fontSize:"32px",color:"white"})}),m(AM,{children:[m(RM,{children:[" ","Order ",s("span",{children:o==null?void 0:o.order_No})]}),m(FM,{children:[" ","Thank you ",s("span",{children:o==null?void 0:o.firstName})]})]})]}),m(zM,{children:[m(b0,{children:[s(x0,{children:"Confirmation"}),s(v0,{children:s(Bx,{children:"Your order will be shipped immediately"})})]}),m(b0,{children:[s(x0,{children:"Shipping Update"}),s(v0,{children:s(Bx,{children:"You will get shipping and delivery update by email"})})]}),m(b0,{children:[s(x0,{children:"Customer Information"}),s(v0,{children:m(LM,{children:[m(y0,{children:[s(m0,{children:"Contact Information"}),s(g0,{children:o==null?void 0:o.email})]}),m(y0,{children:[s(m0,{children:"Shipping Address"}),s(g0,{children:o==null?void 0:o.address})]}),m(y0,{children:[s(m0,{children:"Payment Method"}),s(g0,{children:o==null?void 0:o.payment_method})]})]})})]}),s(jM,{children:s(MM,{onClick:c,children:"Complete Shipping"})})]})]}),m(DM,{children:[(x=o==null?void 0:o.products)==null?void 0:x.map((v,$)=>s(mM,{index:$,totalPrice:a.format(o==null?void 0:o.subtotal),subtotal:o==null?void 0:o.totalQty,props:v})),s(EM,{children:s(PM,{children:m(OM,{children:[s(kM,{children:"Total"}),m(_M,{children:["₦",a.format(o==null?void 0:o.subtotal)]})]})})}),s(NM,{})]})]})})})},PM=f.div``,OM=f.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  margin: 10px 0px;
`,_M=f.div`
  font-weight: 700;
`,kM=f.div`
  font-size: 18px;
  font-weight: 600;
  /* margin-bottom: 10px; */
`,NM=f.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,EM=f.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 90%;
  margin-left: 15px;
`,IM=f.div`
  display: flex;
  padding: 0 10px;
`,TM=f.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d975c0;
  border-radius: 7px;
`,AM=f.div`
  padding: 3px 10px;
`,RM=f.div`
  font-weight: lighter;
  font-size: 12px;
`,FM=f.div`
  font-weight: 500;
  font-size: 14px;
  margin-top: 6px;
`,Bx=f.div`
  margin-left: 10px;
  font-weight: 600;
  color: #363636;
`,DM=f.div`
  flex: 1;
  height: 100vh;
  border-left: 3px solid lightgray;
  /* background-color: blue; */

  @media (max-width: 700px){
    display: none;
  }
`,MM=f.button`
  padding: 15px 20px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;f.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-weight: 600;
    margin-left: 10px;
    color: #3c3c3c;
  }
`;const jM=f.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 10px;
  margin-top: 30px;
`;f.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`;const g0=f.div`
  font-weight: 500;
  margin-right: 20px;
`,m0=f.div`
  font-weight: 700;
`,y0=f.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,LM=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;f.input`
  width: 90%;
  height: 30px;
  border: 0px;
  outline: none;
  margin-left: 10px;
`;const v0=f.div`
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
`,x0=f.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,b0=f.div`
  margin: 10px;
`,zM=f.div`
  width: 90%;
  margin-top: 20px;
`,UM=f.div`
  flex: 1;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: gold; */
`,BM=f.div`
  width: 95%;
  display: flex;
`,HM=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;var Hx=function(e){return typeof e=="object"&&e!==null},e6=function(e){var t=e.value,n=t===void 0?"":t,r=e.numInputs,i=r===void 0?4:r,o=e.onChange,a=e.renderInput,l=e.shouldAutoFocus,u=l===void 0?!1:l,d=e.inputType,c=d===void 0?"text":d,h=e.renderSeparator,g=e.placeholder,x=e.containerStyle,v=e.inputStyle,$=ne.useState(0),w=$[0],y=$[1],p=ne.useRef([]),b=function(){return n?n.toString().split(""):[]},S=c==="number"||c==="tel";ne.useEffect(function(){p.current=p.current.slice(0,i)},[i]),ne.useEffect(function(){var F;u&&((F=p.current[0])===null||F===void 0||F.focus())},[u]);var P=function(){if(typeof g=="string"){if(g.length===i)return g;g.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},_=function(F){var X=S?!isNaN(Number(F)):typeof F=="string";return X&&F.trim().length===1},T=function(F){var X=F.target.value;if(_(X))M(X),ie(w+1);else{var te=F.nativeEvent;te.data===null&&te.inputType==="deleteContentBackward"&&(F.preventDefault(),M(""),ie(w-1))}},R=function(F){return function(X){y(X),F.target.select()}},W=function(){y(w-1)},z=function(F){var X=b();F.code==="Backspace"?(F.preventDefault(),M(""),ie(w-1)):F.code==="Delete"?(F.preventDefault(),M("")):F.code==="ArrowLeft"?(F.preventDefault(),ie(w-1)):F.code==="ArrowRight"||F.key===X[w]?(F.preventDefault(),ie(w+1)):(F.code==="Spacebar"||F.code==="Space"||F.code==="ArrowUp"||F.code==="ArrowDown")&&F.preventDefault()},ie=function(F){var X,te,L=Math.max(Math.min(i-1,F),0);p.current[L]&&((X=p.current[L])===null||X===void 0||X.focus(),(te=p.current[L])===null||te===void 0||te.select(),y(L))},M=function(F){var X=b();X[w]=F[0],j(X)},j=function(F){var X=F.join("");o(X)},J=function(F){var X;F.preventDefault();var te=b(),L=w,N=F.clipboardData.getData("text/plain").slice(0,i-w).split("");if(!(S&&N.some(function(U){return isNaN(Number(U))}))){for(var E=0;E<i;++E)E>=w&&N.length>0&&(te[E]=(X=N.shift())!==null&&X!==void 0?X:"",L++);ie(L),j(te)}};return ne.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},Hx(x)&&x),className:typeof x=="string"?x:void 0},Array.from({length:i},function(F,X){return X}).map(function(F){var X,te,L;return ne.createElement(ne.Fragment,{key:F},a({value:(X=b()[F])!==null&&X!==void 0?X:"",placeholder:(L=(te=P())===null||te===void 0?void 0:te[F])!==null&&L!==void 0?L:void 0,ref:function(N){return p.current[F]=N},onChange:T,onFocus:function(N){return R(N)(F)},onBlur:W,onKeyDown:z,onPaste:J,autoComplete:"off",maxLength:1,"aria-label":"Please enter OTP character ".concat(F+1),style:Object.assign({width:"1em",textAlign:"center"},Hx(v)&&v),className:typeof v=="string"?v:void 0,type:c},F),F<i-1&&(typeof h=="function"?h(F):h))}))};const WM=()=>{const e=nt(),[t,n]=C.useState(""),r=JSON.parse(localStorage.getItem("user")),i=$t({mutationFn:$I,onSuccess:()=>{r.isSeller===!0&&e("/auth/personalinfo")},onError:()=>{e("/auth/otperror")}});return s(YM,{children:m(VM,{children:[s(qM,{children:"OTP Verification!"}),s(QM,{children:"Please enter the OTP you received"}),s(e6,{style:{border:"1px solid gold"},value:t,onChange:n,numInputs:6,renderSeparator:s("span",{children:" "}),renderInput:a=>s("input",{...a}),containerStyle:"containerStyle",inputStyle:"inputStyle",width:"70px"}),s(GM,{children:s("button",{onClick:()=>{const a=r._id;i.mutate({id:a,otp:t})},children:"Enter"})})]})})},YM=f.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`,VM=f.div`
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
`,qM=f.div`
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
`,GM=f.div`
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
`,QM=f.div`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
`;f.input`
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

`;const KM=()=>{const e=nt(),[t,n]=C.useState(""),[r,i]=C.useState(""),[o,a]=C.useState(""),l=$t({mutationFn:PI,onSuccess:c=>{console.log(c),e("/auth/review")},onError:c=>{console.log(c.message)}}),u=JSON.parse(localStorage.getItem("user"));return s("div",{children:s(nj,{children:m(tj,{children:[s(ej,{children:"Provide Bank Details"}),m(XM,{children:["Enter every necessary details to create",s("br",{})," your own seller account"," "]}),m(JM,{onSubmit:c=>{c.preventDefault();const h=u._id,g=!0,x=parseInt(o);l.mutate({id:h,bankName:t,accountName:r,accNumber:x,completed:g})},children:[m(C0,{children:[s(S0,{children:"Bank"}),s($0,{children:s(w0,{placeholder:"Bank",value:t,onChange:c=>n(c.target.value)})})]}),m(C0,{children:[s(S0,{children:"Account Name"}),s($0,{children:s(w0,{placeholder:"Account Name",value:r,onChange:c=>i(c.target.value)})})]}),m(C0,{children:[s(S0,{children:"Account Number"}),s($0,{children:s(w0,{placeholder:"Account Number",type:"number",value:o,onChange:c=>a(c.target.value)})})]}),s(ZM,{type:"submit",children:l.status==="Loading..."?"Loadding":"Continue"})]})]})})})},ZM=f.button`
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
`;f.div`
  font-size: 15px;
  font-weight: 700;
  color: #ff0000;
`;const $0=f.div`
  width: 350px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`,w0=f.input`
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
`,S0=f.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`,C0=f.div`
  margin-bottom: 10px;
`,JM=f.form`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,XM=f.div`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 20px;
`,ej=f.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`,tj=f.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  /* border: 1px solid gray; */
`,nj=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,rj=()=>{const e=nt(),[t,n]=C.useState(sy);let[r,i]=C.useState(0);const[o,a]=C.useState(""),[l,u]=C.useState("Default"),[d,c]=C.useState("123456"),[h,g]=C.useState(""),[x,v]=C.useState(""),[$,w]=C.useState(""),y=()=>{i(()=>r+1),r>=t.length-1&&i(()=>r=0)},p=()=>{w(t[r].name)},b=$t({mutationFn:CI,onSuccess:_=>{console.log(_),e("/auth/information")},onError:_=>{console.log(_.message)}});C.useEffect(()=>{p()},[r]);const S=JSON.parse(localStorage.getItem("user")),P=_=>{_.preventDefault();const T=S._id,R=parseInt(d);b.mutate({id:T,address:o,address2:l,shippingFrom:$,codePostal:R,shopName:h,city:x})};return console.log($),s("div",{children:s(cj,{children:m(dj,{children:[s(uj,{children:"Business Information "}),m(lj,{children:["Enter every necessary details to create your own seller account"," "]}),m(sj,{onSubmit:P,children:[m($o,{children:[s(bo,{children:"Shop Name *"}),s(xo,{children:s(ds,{value:h,onChange:_=>g(_.target.value)})})]}),m($o,{children:[s(bo,{children:"Postal code/Zip code"}),s(xo,{children:s(ds,{type:"number",value:d,onChange:_=>c(_.target.value)})})]}),m($o,{children:[s(bo,{children:"Address *"}),s(xo,{children:s(ds,{value:o,onChange:_=>a(_.target.value)})})]}),m($o,{children:[s(bo,{children:"Address 2"}),s(xo,{children:s(ds,{value:l,onChange:_=>u(_.target.value)})})]}),m($o,{children:[s(bo,{children:"City / Town"}),s(xo,{children:s(ds,{value:x,onChange:_=>v(_.target.value)})})]}),m($o,{children:[s(bo,{children:"What country are you shipping from?"}),m(xo,{children:[s(ij,{src:t[r].flag}),s(aj,{onClick:y,children:s(cn,{})})]})]}),s(oj,{type:"submit",children:b.status==="loading"?"Loading...":"Continue"})]})]})})})},ij=f.img`
  width: 40px;
`,oj=f.button`
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
`;f.div`
  font-size: 15px;
  font-weight: 700;
  color: #ff0000;
`;const aj=f.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,xo=f.div`
  width: 350px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`,ds=f.input`
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
`,bo=f.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`,$o=f.div`
  margin-bottom: 10px;
`,sj=f.form`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,lj=f.div`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 20px;
`,uj=f.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`,dj=f.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  /* border: 1px solid gray; */
`,cj=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,fj=()=>{const e=nt(),[t,n]=C.useState(sy);let[r,i]=C.useState(0),[o,a]=C.useState(!1);const[l,u]=C.useState(""),[d,c]=C.useState(""),[h,g]=C.useState(""),x=()=>{if(o===!0)return a(()=>o=!1);a(()=>o=!0)},v=()=>{i(()=>r+1),r>=t.length-1&&i(()=>r=0)},$=()=>{g(t[r].name)},w=$t({mutationFn:SI,onSuccess:b=>{console.log(b),e("/auth/businessinfo")},onError:b=>{console.log(b.message)}});C.useEffect(()=>{$()},[r]);const y=JSON.parse(localStorage.getItem("user"));return s("div",{children:s(Sj,{children:m(wj,{children:[s($j,{children:"Personal Details "}),s(bj,{children:"Almost there, just few more details"}),m(xj,{onSubmit:b=>{b.preventDefault();const S=y._id;w.mutate({id:S,gender:l,DateOfBirth:d,country:h})},children:[m(_0,{children:[s(O0,{children:"Date of Birth"}),s(P0,{children:s(vj,{placeholder:"04/19/1999",type:"date",value:d,onChange:b=>{c(b.target.value)}})})]}),m(_0,{children:[s(O0,{children:"Gender"}),s(P0,{children:m(hj,{value:l,onChange:b=>{u(b.target.value)},children:[s("option",{children:"Select"}),s("option",{children:"Male"}),s("option",{children:"Female"}),s("option",{children:"Other"})]})})]}),m(_0,{children:[s(O0,{children:"Country"}),m(P0,{children:[s(mj,{src:t[r].flag}),s(yj,{onClick:v,children:s(cn,{})})]})]}),o?s(Wx,{bg:"",type:"submit",children:w.status==="loading"?"Loading...":"Continue"}):s(Wx,{bg:"fff",disabled:!0,children:"Continue"}),m(gj,{children:[" ",s(pj,{type:"checkbox",onClick:x}),"Don't have an account? ",s("span",{children:"Terms and Conditions"})]})]})]})})})},hj=f.select`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
`,pj=f.input`
  margin-right: 10px;
  cursor: pointer;
`,gj=f.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,mj=f.img`
  width: 40px;
`,Wx=f.button`
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
`;f.div`
  font-size: 15px;
  font-weight: 700;
  color: #ff0000;
`;const yj=f.div`
  cursor: pointer;
`,P0=f.div`
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
`,vj=f.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: 0px;
`,O0=f.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`,_0=f.div`
  margin-bottom: 10px;
`,xj=f.form`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,bj=f.div`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 20px;
`,$j=f.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`,wj=f.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  /* border: 1px solid gray; */
`,Sj=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;function Cj(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"}}]})(e)}function Pj(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 6a3.939 3.939 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 0 0-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6zm-1 10h2v2h-2z"}},{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"}}]})(e)}function Oj(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"}}]})(e)}function Df(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"}}]})(e)}function Ka(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"}}]})(e)}function _j(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"}}]})(e)}const kj=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:Qa}),[t,n]=C.useState(0),r=e==null?void 0:e.filter(l=>l.status==="approved"),i=8,o=t*i,a=r==null?void 0:r.slice(o,o+i);return s(Ej,{children:m(Nj,{children:[s(Tj,{children:"Featured "}),s(Fj,{children:a==null?void 0:a.map((l,u)=>s(Rj,{children:s(Aj,{children:s(Ij,{src:l==null?void 0:l.avatar[0].url})})},u))})]})})},Nj=f.div`
  width: 93%;
  /* height: 200px; */
  overflow-x: auto;
  -ms-overflow-style: none;
  background: #D9D9D9;
`,Ej=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`,Ij=f.img`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  background-color: gold;
  margin: 20px;
`,Tj=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
  margin-top: 10px;
`,Aj=f.div`
  display: flex;
  align-items: center;

  :hover {
    color: blue;
  }
  cursor: pointer;
`;f.div`
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 400;
`;f.tr``;const Rj=f.tr`
 
`,Fj=f.div`
  width: 78rem;
  /* height: 150px; */
  /* padding: 0px 20px; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* overflow-x: scroll; */
`,Dj=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:Qa}),[t,n]=C.useState(0),r=8,i=t*r,o=e==null?void 0:e.slice(i,i+r),a=o==null?void 0:o.filter(h=>h.category==="phone"&&h.status==="approved"),l=o==null?void 0:o.filter(h=>h.category==="electronics"&&h.status==="approved"),u=o==null?void 0:o.filter(h=>h.category==="food"&&h.status==="approved"),d=o==null?void 0:o.filter(h=>h.category==="clothing"&&h.status==="approved");var c=Intl.NumberFormat();return m(Mj,{children:[s(kj,{}),m(Ru,{children:[s(Tu,{children:"Mobiles"}),s(Au,{children:a==null?void 0:a.map((h,g)=>s(Kn,{id:h._id,name:h.name,price:c.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url}))}),s(Iu,{to:"/phone",children:s("button",{children:"See All"})})]}),m(Ru,{children:[s(Tu,{children:"Home Appliances"}),s(Au,{children:l==null?void 0:l.map((h,g)=>s(Kn,{id:h._id,name:h.name,price:c.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url}))}),s(Iu,{to:"/electronics",children:s("button",{children:"See All"})})]}),m(Ru,{children:[s(Tu,{children:"Accessories"}),s(Au,{children:d==null?void 0:d.map((h,g)=>s(Kn,{id:h._id,name:h.name,price:c.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url}))}),s(Iu,{to:"/clothing",children:s("button",{children:"See All"})})]}),m(Ru,{children:[s(Tu,{children:"Foodstuffs"}),s(Au,{children:u==null?void 0:u.map((h,g)=>s(Kn,{id:h._id,name:h.name,price:c.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url}))}),s(Iu,{to:"/food",children:s("button",{children:"See All"})})]})]})},Iu=f(ke)`
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
`,Tu=f.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;
`,Au=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
`,Ru=f.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  border: 1.9px solid #d975c0;
  padding: 0 10px;
  margin: 20px 0;
  border-radius: 5px;

  
`,Mj=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,jj=()=>{C.useState();const e=nt(),t=JSON.parse(localStorage.getItem("user")),n=ja(a=>a.reducers.cartItem),r=n==null?void 0:n.reduce((a,l)=>a+l.qty*l.price,0),i=()=>{t?r>=5e4?e("/checkout"):alert("You must have a total price of ₦50,000 to perform this action"):e("/login-user")};var o=Intl.NumberFormat();return s("div",{children:s(Zj,{children:m(Kj,{children:[s(Gj,{children:"Shopping Cart"}),s(Wj,{children:m(Hj,{children:[m(Bj,{children:[s(Du,{children:s(Ni,{children:"Item "})}),s(Du,{children:s(Ni,{children:"Price "})}),s(Du,{children:s(Ni,{children:"Quantity "})}),s(Du,{children:s(Ni,{children:"Total Price "})})]}),n==null?void 0:n.map(a=>m(Uj,{children:[s(Fu,{children:m(zj,{children:[s("span",{children:s(Lj,{src:a==null?void 0:a.avatar[0].url})}),a==null?void 0:a.name]})}),m(Fu,{children:[" ",m(Ni,{children:["₦",o.format(a.price)]})]}),m(Fu,{children:[" ",s(Ni,{children:s("div",{children:a.qty})})]}),m(Fu,{children:[" ",m(Ni,{children:["₦",o.format(a.qty*a.price)]})]})]},a._id))]})}),s(Qj,{children:m(qj,{children:[s("span",{children:"SUBTOTAL"}),m("div",{children:["₦",o.format(r)]}),s(Vj,{onClick:i,children:" Checkout"}),m(Yj,{children:[s(eR,{color:"#0a223a",fontSize:"40px"}),s(zS,{fontSize:"40px"})]})]})})]})})})},Lj=f.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background-color: gold;
  margin-right: 10px;
`,zj=f.div`
  display: flex;
  align-items: center;

  :hover {
    color: blue;
  }
  cursor: pointer;
`,Fu=f.td`
  padding: 10px 10px;
  font-size: 16px;
  font-weight: 400;
`,Uj=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
  text-align: center;
`,Ni=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    font-size: 13px;
    font-weight: 500;
    border: 1.8px solid black;
    padding: 15px 20px;
  }
`,Du=f.th`
  padding: 10px 15px;
  
  font-size: 18px;
  font-weight: 600;
`,Bj=f.tr`
`,Hj=f.table`
  width: 100%;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
`,Wj=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,Yj=f.div`
  width: 130px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
`,Vj=f.button`
  padding: 12px 35px;
  border: 0;
  outline: none;
  background-color: #e8559e;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`,qj=f.div`
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
`,Gj=f.div`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 40px;
`,Qj=f.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1.9px solid grey;
  padding: 20px 0;
`,Kj=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`,Zj=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,Jj=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:Qa}),{id:t}=Q$(),[n,r]=C.useState(0),i=20,o=n*i,a=e==null?void 0:e.slice(o,o+i),l=a==null?void 0:a.filter(c=>c.category===t||c.name===t||c.brand===t),u=l==null?void 0:l.filter(c=>c.status==="approved");var d=Intl.NumberFormat();return s(tL,{children:s(eL,{children:s(Xj,{children:u==null?void 0:u.map((c,h)=>s(Kn,{id:c._id,name:c.name,price:d.format(c==null?void 0:c.price),img:c==null?void 0:c.avatar[0].url}))})})})};f.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;

  @media (max-width: 380px){
    font-size: 18px;
  }
`;const Xj=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`,eL=f.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 10px;
  margin: 10px 0;
  border-radius: 5px;

  
`,tL=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,nL=()=>s("div",{children:s(gL,{children:m(pL,{children:[m(hL,{children:[m(rL,{children:[s(iL,{children:s(jl,{fontSize:"32px",color:"white"})}),m(oL,{children:[m(aL,{children:[" ","Order ",s("span",{children:"05432"})]}),m(sL,{children:[" ","Thank you ",s("span",{children:"Manel"})]})]})]}),m(fL,{children:[m(A0,{children:[s(T0,{children:"Contact"}),s(I0,{children:s(Yx,{children:"You@example.com"})})]}),m(A0,{children:[s(T0,{children:"Shipping Update"}),s(I0,{children:s(Yx,{children:"You will get shipping and delivery update by email"})})]}),m(A0,{children:[s(T0,{children:"Customer Information"}),s(I0,{children:m(cL,{children:[m(E0,{children:[s(N0,{children:"Contact Information"}),s(k0,{children:"pay@gmail.com"})]}),m(E0,{children:[s(N0,{children:"Shipping Address"}),s(k0,{children:"Location"})]}),m(E0,{children:[s(N0,{children:"Payment Method"}),s(k0,{children:"Location"})]})]})})]}),s(dL,{children:s(uL,{children:"Complete Shipping"})})]})]}),s(lL,{children:s(ay,{})})]})})}),rL=f.div`
  display: flex;
  padding: 0 10px;
`,iL=f.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d975c0;
  border-radius: 7px;
`,oL=f.div`
  padding: 3px 10px;
`,aL=f.div`
  font-weight: lighter;
  font-size: 12px;
`,sL=f.div`
  font-weight: 500;
  font-size: 14px;
  margin-top: 6px;
`,Yx=f.div`
  margin-left: 10px;
  font-weight: 600;
  color: #363636;
`,lL=f.div`
  flex: 1;
  height: 100vh;
  border-left: 3px solid lightgray;
  /* background-color: blue; */
`,uL=f.button`
  padding: 15px 20px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;f.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-weight: 600;
    margin-left: 10px;
    color: #3c3c3c;
  }
`;const dL=f.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 10px;
  margin-top: 30px;
`;f.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`;const k0=f.div`
  font-weight: 500;
  margin-right: 20px;
`,N0=f.div`
  font-weight: 700;
`,E0=f.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,cL=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;f.input`
  width: 90%;
  height: 30px;
  border: 0px;
  outline: none;
  margin-left: 10px;
`;const I0=f.div`
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
`,T0=f.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,A0=f.div`
  margin: 10px;
`,fL=f.div`
  width: 90%;
  margin-top: 20px;
`,hL=f.div`
  flex: 1;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: gold; */
`,pL=f.div`
  width: 95%;
  display: flex;
`,gL=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,mL=()=>wm([{path:"/",children:[{index:!0,element:s(CP,{})},{path:"/auth",children:[{index:!0,element:s($A,{})},{path:"signin",element:s(NA,{})},{path:"verify",element:s(WM,{})},{path:"information",element:s(zA,{})},{path:"bankdetails",element:s(KM,{})},{path:"businessinfo",element:s(rj,{})},{path:"personalInfo",element:s(fj,{})},{path:"review",element:s(RD,{})},{path:"acct-review",element:s(zD,{})},{path:"otperror",element:s(GD,{})}]},{path:"/allitems",element:s(VD,{})},{path:"/featured",element:s(Dj,{})},{path:"/:id",element:s(Jj,{})},{path:"/checkout",element:s(nM,{})},{path:"/finishshipping",element:s(CM,{})},{path:"/ready-to-ship",element:s(nL,{})},{path:"/cart",element:s(jj,{})},{path:"/detail/:id",element:s(pD,{})},{path:"/payment",children:[{index:!0,element:s(SD,{})}]}]}]);function Vx(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function yL(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(e)}const vL=({myRef:e})=>{const t=JSON.parse(localStorage.getItem("user"));return s("div",{children:m(xL,{ref:e,children:[s(jr,{to:"/electronics",children:"Electronics"}),s(jr,{to:"/phone",children:"Mobile Phones"}),s(jr,{to:"/clothing",children:"Clothing & Fashion"}),s(jr,{to:"/food",children:"Food & Groceries"}),s(jr,{to:"/allitems",children:"All Products"}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),t?s(Ws,{children:s(jr,{to:"/",onClick:()=>{localStorage.removeItem("user")},children:"Log Out"})}):m("div",{children:[s(jr,{to:"/signup-user",children:"Create Account"}),s(jr,{to:"/seller-page",children:"Create Seller"})]})]})})},xL=f.div`
  width: 250px;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  /* background-color: gold; */
  border-radius: 5px;

  position: fixed;
  top: 0px;
  /* left: 150px; */
  left: -1000px;
  z-index: 1;
  transition: all 350ms ease-in-out;
  div{
    display: flex;
    flex-direction: column;
  }
`,jr=f(ke)`
  width: 95%;
  line-height: 4;
  padding-left: 10px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  font-weight: 700;
  transition: all 350ms ease-in-out;
  text-decoration: none;
  color: black;
  :hover {
    background-color: lightgray;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
  }
`,qx=({setshow_search:e})=>{const{data:t}=Ke({queryKey:["products"],queryFn:Qa}),[n,r]=C.useState(0),i=t==null?void 0:t.filter(x=>x.status==="approved"),o=20,a=n*o,l=i==null?void 0:i.slice(a,a+o),[u,d]=C.useState(),c=["name","brand","category"],h=x=>{const v=x==null?void 0:x.filter($=>c.some(w=>{const y=$[w];return typeof y=="string"&&y.toLowerCase().includes(u==null?void 0:u.toLowerCase())}));return u&&v!=null&&v.length?v:null},g=h(l);return m($L,{children:[m(SL,{children:[s("input",{placeholder:"Search by name or brand",value:u,onChange:x=>d(x.target.value)}),s("button",{onClick:h,children:s(Ka,{})})]}),s("div",{children:g==null?void 0:g.map((x,v)=>s(wL,{onClick:()=>{e(!1)},children:s(bL,{to:`/${x.name}`,onClick:()=>{d("")},children:x.name})},x._id))})]})},bL=f(ke)`
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  /* border-bottom: 1px solid lightgray; */
  padding: 10px 5px;

  :hover{
    color: #d975c0;
    background-color: lightgray;
  }
`,$L=f.div`

  @media (max-width: 768px){
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`,wL=f.div`
  width: 400px;
  max-height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  border: 1px solid #d975c0;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  overflow-y: auto;

  @media (max-width: 768px){
    position: relative;
    top: 20px;
    width: 100%;
    border: 0;
    border-radius: 0px;
  }
`,SL=f.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: white;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
    background-color: transparent;
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

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;

    input{
      width: 95%;
    }
  }
  /* @media (max-width:768px) {
    display: none;
  } */
`,CL=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[i,o]=C.useState(!1),[a,l]=C.useState(!1),u=JSON.parse(localStorage.getItem("user")),d=C.useRef(),c=ja($=>$.reducers.cartItem),h=nt(),g=()=>{localStorage.removeItem("user"),h("/")},x=()=>{d.current.style.left="0px",o(!0)},v=()=>{d.current.style.left="-1000px",o(!1)};return m("div",{children:[s(IL,{children:m(TL,{children:[m(AL,{children:[s("img",{src:"/logo 1.png"}),s("div",{children:"Cross Africa"})]}),m(RL,{children:[m(cs,{onMouseOver:()=>{t(!0)},onMouseLeave:()=>{t(!1)},children:[s("div",{children:"Categories"}),s("span",{children:s(cn,{})})]}),e?m(EL,{onMouseOver:()=>{t(!0)},onMouseLeave:()=>{t(!1)},children:[s(ke,{to:"/electronics",style:{textDecoration:"none",width:"100%"},children:s(Ei,{children:"Electronics"})}),s(ke,{to:"/phone",style:{textDecoration:"none",width:"100%"},children:s(Ei,{children:"Mobile Phones"})}),s(ke,{to:"/clothing",style:{textDecoration:"none",width:"100%"},children:s(Ei,{children:"Clothing & Fashion"})}),s(ke,{to:"/food",style:{textDecoration:"none",width:"100%"},children:s(Ei,{children:"Food & Groceries"})})]}):null,s(_L,{children:s(qx,{})}),m(cs,{onMouseOver:()=>{r(!0)},onMouseLeave:()=>{r(!1)},children:[s("div",{children:" Account"}),s("span",{children:s(cn,{})})]}),n?s(NL,{onMouseOver:()=>{r(!0)},onMouseLeave:()=>{r(!1)},children:u?s(Ws,{children:s(Ei,{onClick:g,children:"Log Out"})}):m(Ws,{children:[s(ke,{to:"/signup-user",style:{textDecoration:"none",width:"100%"},children:s(Ei,{children:"Create Account"})}),s(ke,{to:"/seller-page",style:{textDecoration:"none",width:"100%"},children:s(Ei,{children:"Create Seller"})})]})}):null,s(cs,{onClick:()=>{l(!0)},children:m(OL,{children:[s("div",{children:"Search"}),s(yL,{})]})}),m(cs,{children:[s("div",{children:" Cart"}),s(ke,{to:"/cart",style:{textDecoration:"none"},children:m("span",{children:[s(Dw,{color:"black"}),c.length>0?s(kL,{children:c.length}):null]})})]}),m(cs,{children:[s("div",{children:"Help"}),s("span",{children:s(Pj,{})})]}),s(FL,{children:i?s(Vx,{size:"20px",onClick:v}):s(Vx,{size:"20px",onClick:x})}),s("div",{onClick:v,children:s(vL,{myRef:d})})]})]})}),a?s(PL,{children:s(qx,{setshow_search:l})}):null]})},PL=f.div`
  display: none;

  @media (max-width: 768px){
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0px;
  }
`,OL=f.span`
  display: none;

  @media (max-width:768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    div{
      margin-right: 10px;
    }
  }   
`,_L=f.div`
  @media (max-width:768px) {
    display: none;
  } 
`,kL=f.div`
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
`,Ei=f.div`
  width: 100%;
  padding: 10px 0px;
  /* border-bottom: 1px solid lightgray; */
  cursor: pointer;
  text-align: center;
  font-weight: 600;

  :hover {
    background-color: lightgray;
  }
`,NL=f.div`
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
`,EL=f.div`
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
`,IL=f.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #383333; */
  border-bottom: 1px solid lightgray;
`,TL=f.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`,AL=f.div`
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

  @media (max-width: 440px){
    img{
      width: 40px;
      height: 40px;
    }
    div{
      font-weight: 700;
      font-size: 16px;
    }
  }
  @media (max-width: 410px){
    img{
      width: 30px;
      height: 30px;
    }
    div{
      font-weight: 700;
      font-size: 14px;
    }
  }
`,RL=f.div`
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
`,FL=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
`,cs=f.div`
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

  @media (max-width: 410px){
    div{
      display: none;
    }
  }
  
  /* :nth-child(1){
    @media (max-width: 1000px){
      display: none;
    }
  } */
`;f.div`
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
`;const DL=()=>m("div",{children:[s(CL,{}),s(mL,{}),s(U$,{})]}),Ve=({children:e})=>{const t=JSON.parse(localStorage.getItem("user"));return(t==null?void 0:t.isSeller)===!0?e:s(YC,{to:"/"})},Mu=({pr:e,da:t,ti:n,bg:r,liveProducts:i,pending:o,approved:a,cancled:l,orders:u,returned:d})=>m(VL,{children:[m(YL,{bg:r,children:[s(HL,{children:n}),s(BL,{children:t})]}),m(WL,{children:[m(zL,{children:[m(LL,{children:[s(jL,{children:"Sales"}),s(ML,{children:e})]}),m(D0,{children:[m(F0,{children:[s(So,{children:"Order/Unit"}),s(wo,{children:u})]}),m(R0,{children:[s(So,{children:"Return"}),s(wo,{children:s("div",{children:d})})]})]})]}),m(UL,{children:[m(D0,{children:[o&&m(F0,{children:[s(So,{children:"Pending"}),s(wo,{children:s("div",{children:o})})]}),l&&m(R0,{children:[s(So,{children:"Cancel Order"}),s(wo,{children:s("div",{children:l})})]})]})," ",m(D0,{children:[i&&m(F0,{children:[s(So,{children:"Live Products"}),s(wo,{children:s("div",{children:i})})]}),a&&m(R0,{children:[s(So,{children:"Aprroved product"}),s(wo,{children:s("div",{children:a})})]})]})]})]})]}),R0=f.div``,F0=f.div``,wo=f.div`
  margin-top: 8px;
  span {
    margin-left: 20px;
  }
  div {
    margin-left: 10px;
  }
`,So=f.div``,ML=f.div`
  font-weight: 500;
  font-size: 18px;
`,jL=f.div`
  font-weight: 500;
  font-size: 12px;
`,LL=f.div`
  margin-top: 10px;
`,D0=f.div`
  font-weight: lighter;
  width: 100%;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
`,zL=f.div`
  border-bottom: 1.5px solid grey;
  height: 120px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 15px;
  flex-direction: column;
`,UL=f.div`
  border-bottom: 1.5px solid grey;
  height: 110px;
  padding: 15px 15px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`,BL=f.div`
  font-weight: lighter;
  font-size: 13px;
`,HL=f.div`
  font-weight: 600;
  font-size: 16px;
`,WL=f.div`
  width: 100%;
  height: 310px;
  background-color: #f5f5f5;
  padding-bottom: 10px;
  border-radius: 0 0 5px 5px;
`,YL=f.div`
  width: 91%;
  height: 40px;
  /* background-color: #3d3dee; */
  background-color: ${({bg:e})=>e};
  /* background-color: ${({bg:e})=>e?"#3d3dee":"grey"}; */
  color: white;
  padding: 5px 15px;
  border-radius: 5px 5px 0 0;
`,VL=f.div`
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
`,rt=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[i,o]=C.useState(!1);return s(JL,{children:s(ZL,{children:m(KL,{children:[m(Gx,{children:[m(hs,{onClick:()=>{t(!0)},children:[s("span",{children:s(JS,{fontSize:"25px",color:"#9661cb"})}),s(fs,{children:"Product"}),s("span",{children:s(cn,{})})]}),e?m(QL,{onClick:()=>{t(!1)},children:[s(on,{to:"/seller-dashboard/all-product",children:"All Products"}),s(on,{to:"/seller-dashboard/live-product",children:"Live Products"}),s(on,{to:"/seller-dashboard/sold-product",children:"Sold Out"}),s(on,{to:"/seller-dashboard/rejected-product",children:"Rejected Products"})]}):null,m(hs,{onClick:()=>{r(!0)},children:[s("span",{children:s(GS,{fontSize:"25px",color:"brown"})}),s(fs,{children:"Orders"}),s("span",{children:s(cn,{})})]}),n?m(GL,{onClick:()=>{r(!1)},children:[s(on,{to:"/seller-dashboard/all-orders",children:"All Orders"}),s(on,{to:"/seller-dashboard/pending-orders",children:"Pending Orders"}),s(on,{to:"/seller-dashboard/ready-to-ship",children:"Ready to Ship"}),s(on,{to:"/seller-dashboard/shipped",children:"Shipped"})]}):null,m(hs,{onClick:()=>{o(!0)},children:[s("span",{children:s(QS,{fontSize:"25px",color:"#c05f3e"})}),s(fs,{children:"Completed"}),s("span",{children:s(cn,{})})]}),i?m(qL,{onClick:()=>{o(!1)},children:[s(on,{to:"/seller-dashboard/delivered-orders",children:"Delivard"}),s(on,{to:"/seller-dashboard/cancelled-orders",children:"Cancelled"}),s(on,{to:"/seller-dashboard/failed-orders",children:"Failed"}),s(on,{to:"/seller-dashboard/returned-orders",children:"Returned"})]}):null]}),m(Gx,{children:[s(ke,{to:"/seller-dashboard/uploads",style:{textDecoration:"none",color:"black"},children:m(hs,{children:[s("span",{children:s(ZS,{fontSize:"25px",color:"#47390f"})}),s(fs,{children:"Upload Items"}),s("span",{children:s(cn,{})})]})}),s(ke,{to:"/seller-dashboard/transactions",style:{textDecoration:"none",color:"black"},children:m(hs,{children:[s("span",{children:s(KS,{fontSize:"25px",color:"gray"})}),s(fs,{children:"Transactions"}),s("span",{children:s(cn,{})})]})})]})]})})})},Gx=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  width: 100%;

  @media (max-width: 600px){
    flex-direction: column;
  }

  /* flex-wrap: wrap; */
`,on=f(ke)`
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
`,qL=f.div`
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
`,GL=f.div`
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
`,QL=f.div`
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
 
`,fs=f.div`
  font-size: 12px;
  font-weight: 700;
`,hs=f.div`
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
`;f.div`
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
`;const KL=f.div`
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
`,ZL=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`,JL=f.div`
  width: 100%;
  /* height: 60px; */
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 20px; */
`,XL=()=>{const t=JSON.parse(localStorage.getItem("user"))._id,{data:n}=Ke({queryKey:["products"],queryFn:()=>ql(t)}),{data:r}=Ke({queryKey:["orders"],queryFn:nr}),i=r==null?void 0:r.filter(x=>{var $;return(($=x==null?void 0:x.products)==null?void 0:$.filter(w=>w.sellerID===t)).length>0}),o=n==null?void 0:n.filter(x=>x.status==="pending").length,a=n==null?void 0:n.filter(x=>x.status==="approved").length,l=n==null?void 0:n.filter(x=>x.status==="cancled").length,u=n==null?void 0:n.filter(x=>x.quantity>0).length,d=i==null?void 0:i.filter(x=>x.delivery_status==="returned").length,c=new Date().toLocaleDateString(),h=i==null?void 0:i.filter(x=>x.createdAt.includes(c)),g=h==null?void 0:h.reduce((x,v)=>x+v.products.reduce(($,w)=>$+w.price*w.quantity,0),0);return m(tz,{children:[s(rt,{}),m(ez,{children:[s(Mu,{pr:`₦${g}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",pending:o,approved:a,liveProducts:u,cancled:l,orders:i==null?void 0:i.length,returned:d}),s(Mu,{pr:`₦${g}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",pending:o,approved:a,liveProducts:u,cancled:l,orders:i==null?void 0:i.length,returned:d}),s(Mu,{pr:`₦${g}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",pending:o,approved:a,liveProducts:u,cancled:l,orders:i==null?void 0:i.length,returned:d}),s(Mu,{pr:`₦${g}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",pending:o,approved:a,liveProducts:u,cancled:l,orders:i==null?void 0:i.length,returned:d})]})]})},ez=f.div`
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
`,tz=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`,Mf=({avatar:e,index:t,name:n,price:r,tag:i,created:o,quantity:a,active:l,rejected:u})=>{const[d,c]=C.useState(!1);return console.log(d),m(uz,{children:[s(sr,{children:m(lz,{children:[s("span",{children:s(az,{src:e})}),n]})}),i&&m(sr,{children:[" ",s(Lr,{children:i})]}),o&&m(sr,{children:[" ",s(Lr,{children:o})," "]}),r&&m(sr,{children:[s(Lr,{children:r})," "]}),a&&s(sr,{children:s(Lr,{children:a})}),u&&s(sr,{children:s(Lr,{children:u})}),a>0&&s(sr,{children:s(Lr,{children:m(Qx,{bg:"fff",children:[s(oz,{}),s("span",{children:"ON"})]})})}),a<=0&&s(sr,{children:s(Lr,{children:m(Qx,{bg:"",children:[s("span",{children:"OFF"}),s(iz,{})]})})}),s(sr,{children:m(Lr,{children:[" ",m(rz,{onClick:()=>{c(!0)},children:[s(sz,{children:"Edit"}),s("span",{children:s(cn,{})})]}),d?m(nz,{onClick:()=>{c(!1)},children:[s(ke,{to:"/seller-dashboard/edit-image",children:s(M0,{children:"Edit Image"})}),s(ke,{to:"/seller-dashboard/edit-image",children:s(M0,{children:"Edit Context"})}),s(M0,{children:"Delete"})]}):null]})})]},t)},M0=f.div`
  width: 100%;
  padding: 10px 0px;
  /* border-bottom: 1px solid lightgray; */
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  color: black;
`,nz=f.div`
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
`,rz=f.div`
  display: flex;
  align-items: flex-end;
`,Qx=f.div`
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
`,iz=f.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
  margin-left: 10px;
`,oz=f.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
`,az=f.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background-color: gold;
  margin-right: 10px;
`,sz=f.div`
  margin: 5px;
  color: blue;
  border-bottom: 2px solid blue;
  font-weight: 600;
  cursor: pointer;
  span {
    margin-left: 3px;
  }
`;f.div``;const Lr=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,lz=f.div`
  display: flex;
  align-items: center;

  :hover {
    color: blue;
  }
  cursor: pointer;
`,sr=f.td`
  padding: 10px 10px;
  font-size: 16px;
  font-weight: 400;
  border-left: 1.5px solid #d0d1d2;
`,uz=f.tr`
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;;
`;//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var t6;function ee(){return t6.apply(null,arguments)}function dz(e){t6=e}function Mn(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function eo(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function Pe(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ly(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(Pe(e,t))return!1;return!0}function Lt(e){return e===void 0}function Nr(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Gl(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function n6(e,t){var n=[],r,i=e.length;for(r=0;r<i;++r)n.push(t(e[r],r));return n}function Zr(e,t){for(var n in t)Pe(t,n)&&(e[n]=t[n]);return Pe(t,"toString")&&(e.toString=t.toString),Pe(t,"valueOf")&&(e.valueOf=t.valueOf),e}function rr(e,t,n,r){return O6(e,t,n,r,!0).utc()}function cz(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function ye(e){return e._pf==null&&(e._pf=cz()),e._pf}var sg;Array.prototype.some?sg=Array.prototype.some:sg=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function uy(e){if(e._isValid==null){var t=ye(e),n=sg.call(t.parsedDateParts,function(i){return i!=null}),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r}return e._isValid}function jf(e){var t=rr(NaN);return e!=null?Zr(ye(t),e):ye(t).userInvalidated=!0,t}var Kx=ee.momentProperties=[],j0=!1;function dy(e,t){var n,r,i,o=Kx.length;if(Lt(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),Lt(t._i)||(e._i=t._i),Lt(t._f)||(e._f=t._f),Lt(t._l)||(e._l=t._l),Lt(t._strict)||(e._strict=t._strict),Lt(t._tzm)||(e._tzm=t._tzm),Lt(t._isUTC)||(e._isUTC=t._isUTC),Lt(t._offset)||(e._offset=t._offset),Lt(t._pf)||(e._pf=ye(t)),Lt(t._locale)||(e._locale=t._locale),o>0)for(n=0;n<o;n++)r=Kx[n],i=t[r],Lt(i)||(e[r]=i);return e}function Ql(e){dy(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),j0===!1&&(j0=!0,ee.updateOffset(this),j0=!1)}function jn(e){return e instanceof Ql||e!=null&&e._isAMomentObject!=null}function r6(e){ee.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function xn(e,t){var n=!0;return Zr(function(){if(ee.deprecationHandler!=null&&ee.deprecationHandler(null,e),n){var r=[],i,o,a,l=arguments.length;for(o=0;o<l;o++){if(i="",typeof arguments[o]=="object"){i+=`
[`+o+"] ";for(a in arguments[0])Pe(arguments[0],a)&&(i+=a+": "+arguments[0][a]+", ");i=i.slice(0,-2)}else i=arguments[o];r.push(i)}r6(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var Zx={};function i6(e,t){ee.deprecationHandler!=null&&ee.deprecationHandler(e,t),Zx[e]||(r6(t),Zx[e]=!0)}ee.suppressDeprecationWarnings=!1;ee.deprecationHandler=null;function ir(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function fz(e){var t,n;for(n in e)Pe(e,n)&&(t=e[n],ir(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function lg(e,t){var n=Zr({},e),r;for(r in t)Pe(t,r)&&(eo(e[r])&&eo(t[r])?(n[r]={},Zr(n[r],e[r]),Zr(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)Pe(e,r)&&!Pe(t,r)&&eo(e[r])&&(n[r]=Zr({},n[r]));return n}function cy(e){e!=null&&this.set(e)}var ug;Object.keys?ug=Object.keys:ug=function(e){var t,n=[];for(t in e)Pe(e,t)&&n.push(t);return n};var hz={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function pz(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return ir(r)?r.call(t,n):r}function er(e,t,n){var r=""+Math.abs(e),i=t-r.length,o=e>=0;return(o?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var fy=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,ju=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,L0={},wa={};function pe(e,t,n,r){var i=r;typeof r=="string"&&(i=function(){return this[r]()}),e&&(wa[e]=i),t&&(wa[t[0]]=function(){return er(i.apply(this,arguments),t[1],t[2])}),n&&(wa[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function gz(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function mz(e){var t=e.match(fy),n,r;for(n=0,r=t.length;n<r;n++)wa[t[n]]?t[n]=wa[t[n]]:t[n]=gz(t[n]);return function(i){var o="",a;for(a=0;a<r;a++)o+=ir(t[a])?t[a].call(i,e):t[a];return o}}function md(e,t){return e.isValid()?(t=o6(t,e.localeData()),L0[t]=L0[t]||mz(t),L0[t](e)):e.localeData().invalidDate()}function o6(e,t){var n=5;function r(i){return t.longDateFormat(i)||i}for(ju.lastIndex=0;n>=0&&ju.test(e);)e=e.replace(ju,r),ju.lastIndex=0,n-=1;return e}var yz={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function vz(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(fy).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var xz="Invalid date";function bz(){return this._invalidDate}var $z="%d",wz=/\d{1,2}/;function Sz(e){return this._ordinal.replace("%d",e)}var Cz={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Pz(e,t,n,r){var i=this._relativeTime[n];return ir(i)?i(e,t,n,r):i.replace(/%d/i,e)}function Oz(e,t){var n=this._relativeTime[e>0?"future":"past"];return ir(n)?n(t):n.replace(/%s/i,t)}var Us={};function Nt(e,t){var n=e.toLowerCase();Us[n]=Us[n+"s"]=Us[t]=e}function bn(e){return typeof e=="string"?Us[e]||Us[e.toLowerCase()]:void 0}function hy(e){var t={},n,r;for(r in e)Pe(e,r)&&(n=bn(r),n&&(t[n]=e[r]));return t}var a6={};function Et(e,t){a6[e]=t}function _z(e){var t=[],n;for(n in e)Pe(e,n)&&t.push({unit:n,priority:a6[n]});return t.sort(function(r,i){return r.priority-i.priority}),t}function Lf(e){return e%4===0&&e%100!==0||e%400===0}function dn(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function xe(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=dn(t)),n}function Za(e,t){return function(n){return n!=null?(s6(this,e,n),ee.updateOffset(this,t),this):Pc(this,e)}}function Pc(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function s6(e,t,n){e.isValid()&&!isNaN(n)&&(t==="FullYear"&&Lf(e.year())&&e.month()===1&&e.date()===29?(n=xe(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Yf(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function kz(e){return e=bn(e),ir(this[e])?this[e]():this}function Nz(e,t){if(typeof e=="object"){e=hy(e);var n=_z(e),r,i=n.length;for(r=0;r<i;r++)this[n[r].unit](e[n[r].unit])}else if(e=bn(e),ir(this[e]))return this[e](t);return this}var l6=/\d/,tn=/\d\d/,u6=/\d{3}/,py=/\d{4}/,zf=/[+-]?\d{6}/,Be=/\d\d?/,d6=/\d\d\d\d?/,c6=/\d\d\d\d\d\d?/,Uf=/\d{1,3}/,gy=/\d{1,4}/,Bf=/[+-]?\d{1,6}/,Ja=/\d+/,Hf=/[+-]?\d+/,Ez=/Z|[+-]\d\d:?\d\d/gi,Wf=/Z|[+-]\d\d(?::?\d\d)?/gi,Iz=/[+-]?\d+(\.\d{1,3})?/,Kl=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Oc;Oc={};function le(e,t,n){Oc[e]=ir(t)?t:function(r,i){return r&&n?n:t}}function Tz(e,t){return Pe(Oc,e)?Oc[e](t._strict,t._locale):new RegExp(Az(e))}function Az(e){return qt(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,i,o){return n||r||i||o}))}function qt(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var dg={};function Re(e,t){var n,r=t,i;for(typeof e=="string"&&(e=[e]),Nr(t)&&(r=function(o,a){a[t]=xe(o)}),i=e.length,n=0;n<i;n++)dg[e[n]]=r}function Zl(e,t){Re(e,function(n,r,i,o){i._w=i._w||{},t(n,i._w,i,o)})}function Rz(e,t,n){t!=null&&Pe(dg,e)&&dg[e](t,n._a,n,e)}var _t=0,vr=1,qn=2,ut=3,Tn=4,xr=5,Ki=6,Fz=7,Dz=8;function Mz(e,t){return(e%t+t)%t}var et;Array.prototype.indexOf?et=Array.prototype.indexOf:et=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function Yf(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=Mz(t,12);return e+=(t-n)/12,n===1?Lf(e)?29:28:31-n%7%2}pe("M",["MM",2],"Mo",function(){return this.month()+1});pe("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});pe("MMMM",0,0,function(e){return this.localeData().months(this,e)});Nt("month","M");Et("month",8);le("M",Be);le("MM",Be,tn);le("MMM",function(e,t){return t.monthsShortRegex(e)});le("MMMM",function(e,t){return t.monthsRegex(e)});Re(["M","MM"],function(e,t){t[vr]=xe(e)-1});Re(["MMM","MMMM"],function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);i!=null?t[vr]=i:ye(n).invalidMonth=e});var jz="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),f6="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),h6=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Lz=Kl,zz=Kl;function Uz(e,t){return e?Mn(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||h6).test(t)?"format":"standalone"][e.month()]:Mn(this._months)?this._months:this._months.standalone}function Bz(e,t){return e?Mn(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[h6.test(t)?"format":"standalone"][e.month()]:Mn(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Hz(e,t,n){var r,i,o,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)o=rr([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(o,"").toLocaleLowerCase();return n?t==="MMM"?(i=et.call(this._shortMonthsParse,a),i!==-1?i:null):(i=et.call(this._longMonthsParse,a),i!==-1?i:null):t==="MMM"?(i=et.call(this._shortMonthsParse,a),i!==-1?i:(i=et.call(this._longMonthsParse,a),i!==-1?i:null)):(i=et.call(this._longMonthsParse,a),i!==-1?i:(i=et.call(this._shortMonthsParse,a),i!==-1?i:null))}function Wz(e,t,n){var r,i,o;if(this._monthsParseExact)return Hz.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=rr([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(o="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(o.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function p6(e,t){var n;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=xe(t);else if(t=e.localeData().monthsParse(t),!Nr(t))return e}return n=Math.min(e.date(),Yf(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function g6(e){return e!=null?(p6(this,e),ee.updateOffset(this,!0),this):Pc(this,"Month")}function Yz(){return Yf(this.year(),this.month())}function Vz(e){return this._monthsParseExact?(Pe(this,"_monthsRegex")||m6.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(Pe(this,"_monthsShortRegex")||(this._monthsShortRegex=Lz),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function qz(e){return this._monthsParseExact?(Pe(this,"_monthsRegex")||m6.call(this),e?this._monthsStrictRegex:this._monthsRegex):(Pe(this,"_monthsRegex")||(this._monthsRegex=zz),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function m6(){function e(a,l){return l.length-a.length}var t=[],n=[],r=[],i,o;for(i=0;i<12;i++)o=rr([2e3,i]),t.push(this.monthsShort(o,"")),n.push(this.months(o,"")),r.push(this.months(o,"")),r.push(this.monthsShort(o,""));for(t.sort(e),n.sort(e),r.sort(e),i=0;i<12;i++)t[i]=qt(t[i]),n[i]=qt(n[i]);for(i=0;i<24;i++)r[i]=qt(r[i]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}pe("Y",0,0,function(){var e=this.year();return e<=9999?er(e,4):"+"+e});pe(0,["YY",2],0,function(){return this.year()%100});pe(0,["YYYY",4],0,"year");pe(0,["YYYYY",5],0,"year");pe(0,["YYYYYY",6,!0],0,"year");Nt("year","y");Et("year",1);le("Y",Hf);le("YY",Be,tn);le("YYYY",gy,py);le("YYYYY",Bf,zf);le("YYYYYY",Bf,zf);Re(["YYYYY","YYYYYY"],_t);Re("YYYY",function(e,t){t[_t]=e.length===2?ee.parseTwoDigitYear(e):xe(e)});Re("YY",function(e,t){t[_t]=ee.parseTwoDigitYear(e)});Re("Y",function(e,t){t[_t]=parseInt(e,10)});function Bs(e){return Lf(e)?366:365}ee.parseTwoDigitYear=function(e){return xe(e)+(xe(e)>68?1900:2e3)};var y6=Za("FullYear",!0);function Gz(){return Lf(this.year())}function Qz(e,t,n,r,i,o,a){var l;return e<100&&e>=0?(l=new Date(e+400,t,n,r,i,o,a),isFinite(l.getFullYear())&&l.setFullYear(e)):l=new Date(e,t,n,r,i,o,a),l}function bl(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function _c(e,t,n){var r=7+t-n,i=(7+bl(e,0,r).getUTCDay()-t)%7;return-i+r-1}function v6(e,t,n,r,i){var o=(7+n-r)%7,a=_c(e,r,i),l=1+7*(t-1)+o+a,u,d;return l<=0?(u=e-1,d=Bs(u)+l):l>Bs(e)?(u=e+1,d=l-Bs(e)):(u=e,d=l),{year:u,dayOfYear:d}}function $l(e,t,n){var r=_c(e.year(),t,n),i=Math.floor((e.dayOfYear()-r-1)/7)+1,o,a;return i<1?(a=e.year()-1,o=i+wr(a,t,n)):i>wr(e.year(),t,n)?(o=i-wr(e.year(),t,n),a=e.year()+1):(a=e.year(),o=i),{week:o,year:a}}function wr(e,t,n){var r=_c(e,t,n),i=_c(e+1,t,n);return(Bs(e)-r+i)/7}pe("w",["ww",2],"wo","week");pe("W",["WW",2],"Wo","isoWeek");Nt("week","w");Nt("isoWeek","W");Et("week",5);Et("isoWeek",5);le("w",Be);le("ww",Be,tn);le("W",Be);le("WW",Be,tn);Zl(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=xe(e)});function Kz(e){return $l(e,this._week.dow,this._week.doy).week}var Zz={dow:0,doy:6};function Jz(){return this._week.dow}function Xz(){return this._week.doy}function eU(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function tU(e){var t=$l(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}pe("d",0,"do","day");pe("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});pe("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});pe("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});pe("e",0,0,"weekday");pe("E",0,0,"isoWeekday");Nt("day","d");Nt("weekday","e");Nt("isoWeekday","E");Et("day",11);Et("weekday",11);Et("isoWeekday",11);le("d",Be);le("e",Be);le("E",Be);le("dd",function(e,t){return t.weekdaysMinRegex(e)});le("ddd",function(e,t){return t.weekdaysShortRegex(e)});le("dddd",function(e,t){return t.weekdaysRegex(e)});Zl(["dd","ddd","dddd"],function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);i!=null?t.d=i:ye(n).invalidWeekday=e});Zl(["d","e","E"],function(e,t,n,r){t[r]=xe(e)});function nU(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function rU(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function my(e,t){return e.slice(t,7).concat(e.slice(0,t))}var iU="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),x6="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),oU="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),aU=Kl,sU=Kl,lU=Kl;function uU(e,t){var n=Mn(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?my(n,this._week.dow):e?n[e.day()]:n}function dU(e){return e===!0?my(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function cU(e){return e===!0?my(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function fU(e,t,n){var r,i,o,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)o=rr([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(o,"").toLocaleLowerCase();return n?t==="dddd"?(i=et.call(this._weekdaysParse,a),i!==-1?i:null):t==="ddd"?(i=et.call(this._shortWeekdaysParse,a),i!==-1?i:null):(i=et.call(this._minWeekdaysParse,a),i!==-1?i:null):t==="dddd"?(i=et.call(this._weekdaysParse,a),i!==-1||(i=et.call(this._shortWeekdaysParse,a),i!==-1)?i:(i=et.call(this._minWeekdaysParse,a),i!==-1?i:null)):t==="ddd"?(i=et.call(this._shortWeekdaysParse,a),i!==-1||(i=et.call(this._weekdaysParse,a),i!==-1)?i:(i=et.call(this._minWeekdaysParse,a),i!==-1?i:null)):(i=et.call(this._minWeekdaysParse,a),i!==-1||(i=et.call(this._weekdaysParse,a),i!==-1)?i:(i=et.call(this._shortWeekdaysParse,a),i!==-1?i:null))}function hU(e,t,n){var r,i,o;if(this._weekdaysParseExact)return fU.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=rr([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(o="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(o.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function pU(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=nU(e,this.localeData()),this.add(e-t,"d")):t}function gU(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function mU(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=rU(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function yU(e){return this._weekdaysParseExact?(Pe(this,"_weekdaysRegex")||yy.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(Pe(this,"_weekdaysRegex")||(this._weekdaysRegex=aU),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function vU(e){return this._weekdaysParseExact?(Pe(this,"_weekdaysRegex")||yy.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(Pe(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=sU),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function xU(e){return this._weekdaysParseExact?(Pe(this,"_weekdaysRegex")||yy.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(Pe(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=lU),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function yy(){function e(c,h){return h.length-c.length}var t=[],n=[],r=[],i=[],o,a,l,u,d;for(o=0;o<7;o++)a=rr([2e3,1]).day(o),l=qt(this.weekdaysMin(a,"")),u=qt(this.weekdaysShort(a,"")),d=qt(this.weekdays(a,"")),t.push(l),n.push(u),r.push(d),i.push(l),i.push(u),i.push(d);t.sort(e),n.sort(e),r.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function vy(){return this.hours()%12||12}function bU(){return this.hours()||24}pe("H",["HH",2],0,"hour");pe("h",["hh",2],0,vy);pe("k",["kk",2],0,bU);pe("hmm",0,0,function(){return""+vy.apply(this)+er(this.minutes(),2)});pe("hmmss",0,0,function(){return""+vy.apply(this)+er(this.minutes(),2)+er(this.seconds(),2)});pe("Hmm",0,0,function(){return""+this.hours()+er(this.minutes(),2)});pe("Hmmss",0,0,function(){return""+this.hours()+er(this.minutes(),2)+er(this.seconds(),2)});function b6(e,t){pe(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}b6("a",!0);b6("A",!1);Nt("hour","h");Et("hour",13);function $6(e,t){return t._meridiemParse}le("a",$6);le("A",$6);le("H",Be);le("h",Be);le("k",Be);le("HH",Be,tn);le("hh",Be,tn);le("kk",Be,tn);le("hmm",d6);le("hmmss",c6);le("Hmm",d6);le("Hmmss",c6);Re(["H","HH"],ut);Re(["k","kk"],function(e,t,n){var r=xe(e);t[ut]=r===24?0:r});Re(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});Re(["h","hh"],function(e,t,n){t[ut]=xe(e),ye(n).bigHour=!0});Re("hmm",function(e,t,n){var r=e.length-2;t[ut]=xe(e.substr(0,r)),t[Tn]=xe(e.substr(r)),ye(n).bigHour=!0});Re("hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[ut]=xe(e.substr(0,r)),t[Tn]=xe(e.substr(r,2)),t[xr]=xe(e.substr(i)),ye(n).bigHour=!0});Re("Hmm",function(e,t,n){var r=e.length-2;t[ut]=xe(e.substr(0,r)),t[Tn]=xe(e.substr(r))});Re("Hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[ut]=xe(e.substr(0,r)),t[Tn]=xe(e.substr(r,2)),t[xr]=xe(e.substr(i))});function $U(e){return(e+"").toLowerCase().charAt(0)==="p"}var wU=/[ap]\.?m?\.?/i,SU=Za("Hours",!0);function CU(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var w6={calendar:hz,longDateFormat:yz,invalidDate:xz,ordinal:$z,dayOfMonthOrdinalParse:wz,relativeTime:Cz,months:jz,monthsShort:f6,week:Zz,weekdays:iU,weekdaysMin:oU,weekdaysShort:x6,meridiemParse:wU},He={},ps={},wl;function PU(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function Jx(e){return e&&e.toLowerCase().replace("_","-")}function OU(e){for(var t=0,n,r,i,o;t<e.length;){for(o=Jx(e[t]).split("-"),n=o.length,r=Jx(e[t+1]),r=r?r.split("-"):null;n>0;){if(i=Vf(o.slice(0,n).join("-")),i)return i;if(r&&r.length>=n&&PU(o,r)>=n-1)break;n--}t++}return wl}function _U(e){return e.match("^[^/\\\\]*$")!=null}function Vf(e){var t=null,n;if(He[e]===void 0&&typeof Cd<"u"&&Cd&&Cd.exports&&_U(e))try{t=wl._abbr,n=require,n("./locale/"+e),hi(t)}catch{He[e]=null}return He[e]}function hi(e,t){var n;return e&&(Lt(t)?n=Ar(e):n=xy(e,t),n?wl=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),wl._abbr}function xy(e,t){if(t!==null){var n,r=w6;if(t.abbr=e,He[e]!=null)i6("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=He[e]._config;else if(t.parentLocale!=null)if(He[t.parentLocale]!=null)r=He[t.parentLocale]._config;else if(n=Vf(t.parentLocale),n!=null)r=n._config;else return ps[t.parentLocale]||(ps[t.parentLocale]=[]),ps[t.parentLocale].push({name:e,config:t}),null;return He[e]=new cy(lg(r,t)),ps[e]&&ps[e].forEach(function(i){xy(i.name,i.config)}),hi(e),He[e]}else return delete He[e],null}function kU(e,t){if(t!=null){var n,r,i=w6;He[e]!=null&&He[e].parentLocale!=null?He[e].set(lg(He[e]._config,t)):(r=Vf(e),r!=null&&(i=r._config),t=lg(i,t),r==null&&(t.abbr=e),n=new cy(t),n.parentLocale=He[e],He[e]=n),hi(e)}else He[e]!=null&&(He[e].parentLocale!=null?(He[e]=He[e].parentLocale,e===hi()&&hi(e)):He[e]!=null&&delete He[e]);return He[e]}function Ar(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return wl;if(!Mn(e)){if(t=Vf(e),t)return t;e=[e]}return OU(e)}function NU(){return ug(He)}function by(e){var t,n=e._a;return n&&ye(e).overflow===-2&&(t=n[vr]<0||n[vr]>11?vr:n[qn]<1||n[qn]>Yf(n[_t],n[vr])?qn:n[ut]<0||n[ut]>24||n[ut]===24&&(n[Tn]!==0||n[xr]!==0||n[Ki]!==0)?ut:n[Tn]<0||n[Tn]>59?Tn:n[xr]<0||n[xr]>59?xr:n[Ki]<0||n[Ki]>999?Ki:-1,ye(e)._overflowDayOfYear&&(t<_t||t>qn)&&(t=qn),ye(e)._overflowWeeks&&t===-1&&(t=Fz),ye(e)._overflowWeekday&&t===-1&&(t=Dz),ye(e).overflow=t),e}var EU=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,IU=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,TU=/Z|[+-]\d\d(?::?\d\d)?/,Lu=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],z0=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],AU=/^\/?Date\((-?\d+)/i,RU=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,FU={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function S6(e){var t,n,r=e._i,i=EU.exec(r)||IU.exec(r),o,a,l,u,d=Lu.length,c=z0.length;if(i){for(ye(e).iso=!0,t=0,n=d;t<n;t++)if(Lu[t][1].exec(i[1])){a=Lu[t][0],o=Lu[t][2]!==!1;break}if(a==null){e._isValid=!1;return}if(i[3]){for(t=0,n=c;t<n;t++)if(z0[t][1].exec(i[3])){l=(i[2]||" ")+z0[t][0];break}if(l==null){e._isValid=!1;return}}if(!o&&l!=null){e._isValid=!1;return}if(i[4])if(TU.exec(i[4]))u="Z";else{e._isValid=!1;return}e._f=a+(l||"")+(u||""),wy(e)}else e._isValid=!1}function DU(e,t,n,r,i,o){var a=[MU(e),f6.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return o&&a.push(parseInt(o,10)),a}function MU(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function jU(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function LU(e,t,n){if(e){var r=x6.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(r!==i)return ye(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function zU(e,t,n){if(e)return FU[e];if(t)return 0;var r=parseInt(n,10),i=r%100,o=(r-i)/100;return o*60+i}function C6(e){var t=RU.exec(jU(e._i)),n;if(t){if(n=DU(t[4],t[3],t[2],t[5],t[6],t[7]),!LU(t[1],n,e))return;e._a=n,e._tzm=zU(t[8],t[9],t[10]),e._d=bl.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),ye(e).rfc2822=!0}else e._isValid=!1}function UU(e){var t=AU.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(S6(e),e._isValid===!1)delete e._isValid;else return;if(C6(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:ee.createFromInputFallback(e)}ee.createFromInputFallback=xn("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Go(e,t,n){return e??t??n}function BU(e){var t=new Date(ee.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function $y(e){var t,n,r=[],i,o,a;if(!e._d){for(i=BU(e),e._w&&e._a[qn]==null&&e._a[vr]==null&&HU(e),e._dayOfYear!=null&&(a=Go(e._a[_t],i[_t]),(e._dayOfYear>Bs(a)||e._dayOfYear===0)&&(ye(e)._overflowDayOfYear=!0),n=bl(a,0,e._dayOfYear),e._a[vr]=n.getUTCMonth(),e._a[qn]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=i[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[ut]===24&&e._a[Tn]===0&&e._a[xr]===0&&e._a[Ki]===0&&(e._nextDay=!0,e._a[ut]=0),e._d=(e._useUTC?bl:Qz).apply(null,r),o=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ut]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==o&&(ye(e).weekdayMismatch=!0)}}function HU(e){var t,n,r,i,o,a,l,u,d;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(o=1,a=4,n=Go(t.GG,e._a[_t],$l(Ue(),1,4).year),r=Go(t.W,1),i=Go(t.E,1),(i<1||i>7)&&(u=!0)):(o=e._locale._week.dow,a=e._locale._week.doy,d=$l(Ue(),o,a),n=Go(t.gg,e._a[_t],d.year),r=Go(t.w,d.week),t.d!=null?(i=t.d,(i<0||i>6)&&(u=!0)):t.e!=null?(i=t.e+o,(t.e<0||t.e>6)&&(u=!0)):i=o),r<1||r>wr(n,o,a)?ye(e)._overflowWeeks=!0:u!=null?ye(e)._overflowWeekday=!0:(l=v6(n,r,i,o,a),e._a[_t]=l.year,e._dayOfYear=l.dayOfYear)}ee.ISO_8601=function(){};ee.RFC_2822=function(){};function wy(e){if(e._f===ee.ISO_8601){S6(e);return}if(e._f===ee.RFC_2822){C6(e);return}e._a=[],ye(e).empty=!0;var t=""+e._i,n,r,i,o,a,l=t.length,u=0,d,c;for(i=o6(e._f,e._locale).match(fy)||[],c=i.length,n=0;n<c;n++)o=i[n],r=(t.match(Tz(o,e))||[])[0],r&&(a=t.substr(0,t.indexOf(r)),a.length>0&&ye(e).unusedInput.push(a),t=t.slice(t.indexOf(r)+r.length),u+=r.length),wa[o]?(r?ye(e).empty=!1:ye(e).unusedTokens.push(o),Rz(o,r,e)):e._strict&&!r&&ye(e).unusedTokens.push(o);ye(e).charsLeftOver=l-u,t.length>0&&ye(e).unusedInput.push(t),e._a[ut]<=12&&ye(e).bigHour===!0&&e._a[ut]>0&&(ye(e).bigHour=void 0),ye(e).parsedDateParts=e._a.slice(0),ye(e).meridiem=e._meridiem,e._a[ut]=WU(e._locale,e._a[ut],e._meridiem),d=ye(e).era,d!==null&&(e._a[_t]=e._locale.erasConvertYear(d,e._a[_t])),$y(e),by(e)}function WU(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function YU(e){var t,n,r,i,o,a,l=!1,u=e._f.length;if(u===0){ye(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<u;i++)o=0,a=!1,t=dy({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[i],wy(t),uy(t)&&(a=!0),o+=ye(t).charsLeftOver,o+=ye(t).unusedTokens.length*10,ye(t).score=o,l?o<r&&(r=o,n=t):(r==null||o<r||a)&&(r=o,n=t,a&&(l=!0));Zr(e,n||t)}function VU(e){if(!e._d){var t=hy(e._i),n=t.day===void 0?t.date:t.day;e._a=n6([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),$y(e)}}function qU(e){var t=new Ql(by(P6(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function P6(e){var t=e._i,n=e._f;return e._locale=e._locale||Ar(e._l),t===null||n===void 0&&t===""?jf({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),jn(t)?new Ql(by(t)):(Gl(t)?e._d=t:Mn(n)?YU(e):n?wy(e):GU(e),uy(e)||(e._d=null),e))}function GU(e){var t=e._i;Lt(t)?e._d=new Date(ee.now()):Gl(t)?e._d=new Date(t.valueOf()):typeof t=="string"?UU(e):Mn(t)?(e._a=n6(t.slice(0),function(n){return parseInt(n,10)}),$y(e)):eo(t)?VU(e):Nr(t)?e._d=new Date(t):ee.createFromInputFallback(e)}function O6(e,t,n,r,i){var o={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(eo(e)&&ly(e)||Mn(e)&&e.length===0)&&(e=void 0),o._isAMomentObject=!0,o._useUTC=o._isUTC=i,o._l=n,o._i=e,o._f=t,o._strict=r,qU(o)}function Ue(e,t,n,r){return O6(e,t,n,r,!1)}var QU=xn("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ue.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:jf()}),KU=xn("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ue.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:jf()});function _6(e,t){var n,r;if(t.length===1&&Mn(t[0])&&(t=t[0]),!t.length)return Ue();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function ZU(){var e=[].slice.call(arguments,0);return _6("isBefore",e)}function JU(){var e=[].slice.call(arguments,0);return _6("isAfter",e)}var XU=function(){return Date.now?Date.now():+new Date},gs=["year","quarter","month","week","day","hour","minute","second","millisecond"];function eB(e){var t,n=!1,r,i=gs.length;for(t in e)if(Pe(e,t)&&!(et.call(gs,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<i;++r)if(e[gs[r]]){if(n)return!1;parseFloat(e[gs[r]])!==xe(e[gs[r]])&&(n=!0)}return!0}function tB(){return this._isValid}function nB(){return zn(NaN)}function qf(e){var t=hy(e),n=t.year||0,r=t.quarter||0,i=t.month||0,o=t.week||t.isoWeek||0,a=t.day||0,l=t.hour||0,u=t.minute||0,d=t.second||0,c=t.millisecond||0;this._isValid=eB(t),this._milliseconds=+c+d*1e3+u*6e4+l*1e3*60*60,this._days=+a+o*7,this._months=+i+r*3+n*12,this._data={},this._locale=Ar(),this._bubble()}function yd(e){return e instanceof qf}function cg(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function rB(e,t,n){var r=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),o=0,a;for(a=0;a<r;a++)(n&&e[a]!==t[a]||!n&&xe(e[a])!==xe(t[a]))&&o++;return o+i}function k6(e,t){pe(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+er(~~(n/60),2)+t+er(~~n%60,2)})}k6("Z",":");k6("ZZ","");le("Z",Wf);le("ZZ",Wf);Re(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Sy(Wf,e)});var iB=/([\+\-]|\d\d)/gi;function Sy(e,t){var n=(t||"").match(e),r,i,o;return n===null?null:(r=n[n.length-1]||[],i=(r+"").match(iB)||["-",0,0],o=+(i[1]*60)+xe(i[2]),o===0?0:i[0]==="+"?o:-o)}function Cy(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(jn(e)||Gl(e)?e.valueOf():Ue(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),ee.updateOffset(n,!1),n):Ue(e).local()}function fg(e){return-Math.round(e._d.getTimezoneOffset())}ee.updateOffset=function(){};function oB(e,t,n){var r=this._offset||0,i;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Sy(Wf,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(i=fg(this)),this._offset=e,this._isUTC=!0,i!=null&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?I6(this,zn(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,ee.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:fg(this)}function aB(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function sB(e){return this.utcOffset(0,e)}function lB(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(fg(this),"m")),this}function uB(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Sy(Ez,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function dB(e){return this.isValid()?(e=e?Ue(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function cB(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function fB(){if(!Lt(this._isDSTShifted))return this._isDSTShifted;var e={},t;return dy(e,this),e=P6(e),e._a?(t=e._isUTC?rr(e._a):Ue(e._a),this._isDSTShifted=this.isValid()&&rB(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function hB(){return this.isValid()?!this._isUTC:!1}function pB(){return this.isValid()?this._isUTC:!1}function N6(){return this.isValid()?this._isUTC&&this._offset===0:!1}var gB=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,mB=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function zn(e,t){var n=e,r=null,i,o,a;return yd(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:Nr(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=gB.exec(e))?(i=r[1]==="-"?-1:1,n={y:0,d:xe(r[qn])*i,h:xe(r[ut])*i,m:xe(r[Tn])*i,s:xe(r[xr])*i,ms:xe(cg(r[Ki]*1e3))*i}):(r=mB.exec(e))?(i=r[1]==="-"?-1:1,n={y:Ii(r[2],i),M:Ii(r[3],i),w:Ii(r[4],i),d:Ii(r[5],i),h:Ii(r[6],i),m:Ii(r[7],i),s:Ii(r[8],i)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(a=yB(Ue(n.from),Ue(n.to)),n={},n.ms=a.milliseconds,n.M=a.months),o=new qf(n),yd(e)&&Pe(e,"_locale")&&(o._locale=e._locale),yd(e)&&Pe(e,"_isValid")&&(o._isValid=e._isValid),o}zn.fn=qf.prototype;zn.invalid=nB;function Ii(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Xx(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function yB(e,t){var n;return e.isValid()&&t.isValid()?(t=Cy(t,e),e.isBefore(t)?n=Xx(e,t):(n=Xx(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function E6(e,t){return function(n,r){var i,o;return r!==null&&!isNaN(+r)&&(i6(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),o=n,n=r,r=o),i=zn(n,r),I6(this,i,e),this}}function I6(e,t,n,r){var i=t._milliseconds,o=cg(t._days),a=cg(t._months);e.isValid()&&(r=r??!0,a&&p6(e,Pc(e,"Month")+a*n),o&&s6(e,"Date",Pc(e,"Date")+o*n),i&&e._d.setTime(e._d.valueOf()+i*n),r&&ee.updateOffset(e,o||a))}var vB=E6(1,"add"),xB=E6(-1,"subtract");function T6(e){return typeof e=="string"||e instanceof String}function bB(e){return jn(e)||Gl(e)||T6(e)||Nr(e)||wB(e)||$B(e)||e===null||e===void 0}function $B(e){var t=eo(e)&&!ly(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,o,a=r.length;for(i=0;i<a;i+=1)o=r[i],n=n||Pe(e,o);return t&&n}function wB(e){var t=Mn(e),n=!1;return t&&(n=e.filter(function(r){return!Nr(r)&&T6(e)}).length===0),t&&n}function SB(e){var t=eo(e)&&!ly(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,o;for(i=0;i<r.length;i+=1)o=r[i],n=n||Pe(e,o);return t&&n}function CB(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function PB(e,t){arguments.length===1&&(arguments[0]?bB(arguments[0])?(e=arguments[0],t=void 0):SB(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||Ue(),r=Cy(n,this).startOf("day"),i=ee.calendarFormat(this,r)||"sameElse",o=t&&(ir(t[i])?t[i].call(this,n):t[i]);return this.format(o||this.localeData().calendar(i,this,Ue(n)))}function OB(){return new Ql(this)}function _B(e,t){var n=jn(e)?e:Ue(e);return this.isValid()&&n.isValid()?(t=bn(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function kB(e,t){var n=jn(e)?e:Ue(e);return this.isValid()&&n.isValid()?(t=bn(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function NB(e,t,n,r){var i=jn(e)?e:Ue(e),o=jn(t)?t:Ue(t);return this.isValid()&&i.isValid()&&o.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(i,n):!this.isBefore(i,n))&&(r[1]===")"?this.isBefore(o,n):!this.isAfter(o,n))):!1}function EB(e,t){var n=jn(e)?e:Ue(e),r;return this.isValid()&&n.isValid()?(t=bn(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function IB(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function TB(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function AB(e,t,n){var r,i,o;if(!this.isValid())return NaN;if(r=Cy(e,this),!r.isValid())return NaN;switch(i=(r.utcOffset()-this.utcOffset())*6e4,t=bn(t),t){case"year":o=vd(this,r)/12;break;case"month":o=vd(this,r);break;case"quarter":o=vd(this,r)/3;break;case"second":o=(this-r)/1e3;break;case"minute":o=(this-r)/6e4;break;case"hour":o=(this-r)/36e5;break;case"day":o=(this-r-i)/864e5;break;case"week":o=(this-r-i)/6048e5;break;default:o=this-r}return n?o:dn(o)}function vd(e,t){if(e.date()<t.date())return-vd(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),i,o;return t-r<0?(i=e.clone().add(n-1,"months"),o=(t-r)/(r-i)):(i=e.clone().add(n+1,"months"),o=(t-r)/(i-r)),-(n+o)||0}ee.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";ee.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function RB(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function FB(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?md(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):ir(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",md(n,"Z")):md(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function DB(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,i,o;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",o=t+'[")]',this.format(n+r+i+o)}function MB(e){e||(e=this.isUtc()?ee.defaultFormatUtc:ee.defaultFormat);var t=md(this,e);return this.localeData().postformat(t)}function jB(e,t){return this.isValid()&&(jn(e)&&e.isValid()||Ue(e).isValid())?zn({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function LB(e){return this.from(Ue(),e)}function zB(e,t){return this.isValid()&&(jn(e)&&e.isValid()||Ue(e).isValid())?zn({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function UB(e){return this.to(Ue(),e)}function A6(e){var t;return e===void 0?this._locale._abbr:(t=Ar(e),t!=null&&(this._locale=t),this)}var R6=xn("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function F6(){return this._locale}var kc=1e3,Sa=60*kc,Nc=60*Sa,D6=(365*400+97)*24*Nc;function Ca(e,t){return(e%t+t)%t}function M6(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-D6:new Date(e,t,n).valueOf()}function j6(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-D6:Date.UTC(e,t,n)}function BB(e){var t,n;if(e=bn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?j6:M6,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=Ca(t+(this._isUTC?0:this.utcOffset()*Sa),Nc);break;case"minute":t=this._d.valueOf(),t-=Ca(t,Sa);break;case"second":t=this._d.valueOf(),t-=Ca(t,kc);break}return this._d.setTime(t),ee.updateOffset(this,!0),this}function HB(e){var t,n;if(e=bn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?j6:M6,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Nc-Ca(t+(this._isUTC?0:this.utcOffset()*Sa),Nc)-1;break;case"minute":t=this._d.valueOf(),t+=Sa-Ca(t,Sa)-1;break;case"second":t=this._d.valueOf(),t+=kc-Ca(t,kc)-1;break}return this._d.setTime(t),ee.updateOffset(this,!0),this}function WB(){return this._d.valueOf()-(this._offset||0)*6e4}function YB(){return Math.floor(this.valueOf()/1e3)}function VB(){return new Date(this.valueOf())}function qB(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function GB(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function QB(){return this.isValid()?this.toISOString():null}function KB(){return uy(this)}function ZB(){return Zr({},ye(this))}function JB(){return ye(this).overflow}function XB(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}pe("N",0,0,"eraAbbr");pe("NN",0,0,"eraAbbr");pe("NNN",0,0,"eraAbbr");pe("NNNN",0,0,"eraName");pe("NNNNN",0,0,"eraNarrow");pe("y",["y",1],"yo","eraYear");pe("y",["yy",2],0,"eraYear");pe("y",["yyy",3],0,"eraYear");pe("y",["yyyy",4],0,"eraYear");le("N",Py);le("NN",Py);le("NNN",Py);le("NNNN",dH);le("NNNNN",cH);Re(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var i=n._locale.erasParse(e,r,n._strict);i?ye(n).era=i:ye(n).invalidEra=e});le("y",Ja);le("yy",Ja);le("yyy",Ja);le("yyyy",Ja);le("yo",fH);Re(["y","yy","yyy","yyyy"],_t);Re(["yo"],function(e,t,n,r){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[_t]=n._locale.eraYearOrdinalParse(e,i):t[_t]=parseInt(e,10)});function eH(e,t){var n,r,i,o=this._eras||Ar("en")._eras;for(n=0,r=o.length;n<r;++n){switch(typeof o[n].since){case"string":i=ee(o[n].since).startOf("day"),o[n].since=i.valueOf();break}switch(typeof o[n].until){case"undefined":o[n].until=1/0;break;case"string":i=ee(o[n].until).startOf("day").valueOf(),o[n].until=i.valueOf();break}}return o}function tH(e,t,n){var r,i,o=this.eras(),a,l,u;for(e=e.toUpperCase(),r=0,i=o.length;r<i;++r)if(a=o[r].name.toUpperCase(),l=o[r].abbr.toUpperCase(),u=o[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(l===e)return o[r];break;case"NNNN":if(a===e)return o[r];break;case"NNNNN":if(u===e)return o[r];break}else if([a,l,u].indexOf(e)>=0)return o[r]}function nH(e,t){var n=e.since<=e.until?1:-1;return t===void 0?ee(e.since).year():ee(e.since).year()+(t-e.offset)*n}function rH(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function iH(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function oH(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function aH(){var e,t,n,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(n=i[e].since<=i[e].until?1:-1,r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return(this.year()-ee(i[e].since).year())*n+i[e].offset;return this.year()}function sH(e){return Pe(this,"_erasNameRegex")||Oy.call(this),e?this._erasNameRegex:this._erasRegex}function lH(e){return Pe(this,"_erasAbbrRegex")||Oy.call(this),e?this._erasAbbrRegex:this._erasRegex}function uH(e){return Pe(this,"_erasNarrowRegex")||Oy.call(this),e?this._erasNarrowRegex:this._erasRegex}function Py(e,t){return t.erasAbbrRegex(e)}function dH(e,t){return t.erasNameRegex(e)}function cH(e,t){return t.erasNarrowRegex(e)}function fH(e,t){return t._eraYearOrdinalRegex||Ja}function Oy(){var e=[],t=[],n=[],r=[],i,o,a=this.eras();for(i=0,o=a.length;i<o;++i)t.push(qt(a[i].name)),e.push(qt(a[i].abbr)),n.push(qt(a[i].narrow)),r.push(qt(a[i].name)),r.push(qt(a[i].abbr)),r.push(qt(a[i].narrow));this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}pe(0,["gg",2],0,function(){return this.weekYear()%100});pe(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Gf(e,t){pe(0,[e,e.length],0,t)}Gf("gggg","weekYear");Gf("ggggg","weekYear");Gf("GGGG","isoWeekYear");Gf("GGGGG","isoWeekYear");Nt("weekYear","gg");Nt("isoWeekYear","GG");Et("weekYear",1);Et("isoWeekYear",1);le("G",Hf);le("g",Hf);le("GG",Be,tn);le("gg",Be,tn);le("GGGG",gy,py);le("gggg",gy,py);le("GGGGG",Bf,zf);le("ggggg",Bf,zf);Zl(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=xe(e)});Zl(["gg","GG"],function(e,t,n,r){t[r]=ee.parseTwoDigitYear(e)});function hH(e){return L6.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function pH(e){return L6.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function gH(){return wr(this.year(),1,4)}function mH(){return wr(this.isoWeekYear(),1,4)}function yH(){var e=this.localeData()._week;return wr(this.year(),e.dow,e.doy)}function vH(){var e=this.localeData()._week;return wr(this.weekYear(),e.dow,e.doy)}function L6(e,t,n,r,i){var o;return e==null?$l(this,r,i).year:(o=wr(e,r,i),t>o&&(t=o),xH.call(this,e,t,n,r,i))}function xH(e,t,n,r,i){var o=v6(e,t,n,r,i),a=bl(o.year,0,o.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}pe("Q",0,"Qo","quarter");Nt("quarter","Q");Et("quarter",7);le("Q",l6);Re("Q",function(e,t){t[vr]=(xe(e)-1)*3});function bH(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}pe("D",["DD",2],"Do","date");Nt("date","D");Et("date",9);le("D",Be);le("DD",Be,tn);le("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});Re(["D","DD"],qn);Re("Do",function(e,t){t[qn]=xe(e.match(Be)[0])});var z6=Za("Date",!0);pe("DDD",["DDDD",3],"DDDo","dayOfYear");Nt("dayOfYear","DDD");Et("dayOfYear",4);le("DDD",Uf);le("DDDD",u6);Re(["DDD","DDDD"],function(e,t,n){n._dayOfYear=xe(e)});function $H(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}pe("m",["mm",2],0,"minute");Nt("minute","m");Et("minute",14);le("m",Be);le("mm",Be,tn);Re(["m","mm"],Tn);var wH=Za("Minutes",!1);pe("s",["ss",2],0,"second");Nt("second","s");Et("second",15);le("s",Be);le("ss",Be,tn);Re(["s","ss"],xr);var SH=Za("Seconds",!1);pe("S",0,0,function(){return~~(this.millisecond()/100)});pe(0,["SS",2],0,function(){return~~(this.millisecond()/10)});pe(0,["SSS",3],0,"millisecond");pe(0,["SSSS",4],0,function(){return this.millisecond()*10});pe(0,["SSSSS",5],0,function(){return this.millisecond()*100});pe(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});pe(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});pe(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});pe(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});Nt("millisecond","ms");Et("millisecond",16);le("S",Uf,l6);le("SS",Uf,tn);le("SSS",Uf,u6);var Jr,U6;for(Jr="SSSS";Jr.length<=9;Jr+="S")le(Jr,Ja);function CH(e,t){t[Ki]=xe(("0."+e)*1e3)}for(Jr="S";Jr.length<=9;Jr+="S")Re(Jr,CH);U6=Za("Milliseconds",!1);pe("z",0,0,"zoneAbbr");pe("zz",0,0,"zoneName");function PH(){return this._isUTC?"UTC":""}function OH(){return this._isUTC?"Coordinated Universal Time":""}var Q=Ql.prototype;Q.add=vB;Q.calendar=PB;Q.clone=OB;Q.diff=AB;Q.endOf=HB;Q.format=MB;Q.from=jB;Q.fromNow=LB;Q.to=zB;Q.toNow=UB;Q.get=kz;Q.invalidAt=JB;Q.isAfter=_B;Q.isBefore=kB;Q.isBetween=NB;Q.isSame=EB;Q.isSameOrAfter=IB;Q.isSameOrBefore=TB;Q.isValid=KB;Q.lang=R6;Q.locale=A6;Q.localeData=F6;Q.max=KU;Q.min=QU;Q.parsingFlags=ZB;Q.set=Nz;Q.startOf=BB;Q.subtract=xB;Q.toArray=qB;Q.toObject=GB;Q.toDate=VB;Q.toISOString=FB;Q.inspect=DB;typeof Symbol<"u"&&Symbol.for!=null&&(Q[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});Q.toJSON=QB;Q.toString=RB;Q.unix=YB;Q.valueOf=WB;Q.creationData=XB;Q.eraName=rH;Q.eraNarrow=iH;Q.eraAbbr=oH;Q.eraYear=aH;Q.year=y6;Q.isLeapYear=Gz;Q.weekYear=hH;Q.isoWeekYear=pH;Q.quarter=Q.quarters=bH;Q.month=g6;Q.daysInMonth=Yz;Q.week=Q.weeks=eU;Q.isoWeek=Q.isoWeeks=tU;Q.weeksInYear=yH;Q.weeksInWeekYear=vH;Q.isoWeeksInYear=gH;Q.isoWeeksInISOWeekYear=mH;Q.date=z6;Q.day=Q.days=pU;Q.weekday=gU;Q.isoWeekday=mU;Q.dayOfYear=$H;Q.hour=Q.hours=SU;Q.minute=Q.minutes=wH;Q.second=Q.seconds=SH;Q.millisecond=Q.milliseconds=U6;Q.utcOffset=oB;Q.utc=sB;Q.local=lB;Q.parseZone=uB;Q.hasAlignedHourOffset=dB;Q.isDST=cB;Q.isLocal=hB;Q.isUtcOffset=pB;Q.isUtc=N6;Q.isUTC=N6;Q.zoneAbbr=PH;Q.zoneName=OH;Q.dates=xn("dates accessor is deprecated. Use date instead.",z6);Q.months=xn("months accessor is deprecated. Use month instead",g6);Q.years=xn("years accessor is deprecated. Use year instead",y6);Q.zone=xn("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",aB);Q.isDSTShifted=xn("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",fB);function _H(e){return Ue(e*1e3)}function kH(){return Ue.apply(null,arguments).parseZone()}function B6(e){return e}var Oe=cy.prototype;Oe.calendar=pz;Oe.longDateFormat=vz;Oe.invalidDate=bz;Oe.ordinal=Sz;Oe.preparse=B6;Oe.postformat=B6;Oe.relativeTime=Pz;Oe.pastFuture=Oz;Oe.set=fz;Oe.eras=eH;Oe.erasParse=tH;Oe.erasConvertYear=nH;Oe.erasAbbrRegex=lH;Oe.erasNameRegex=sH;Oe.erasNarrowRegex=uH;Oe.months=Uz;Oe.monthsShort=Bz;Oe.monthsParse=Wz;Oe.monthsRegex=qz;Oe.monthsShortRegex=Vz;Oe.week=Kz;Oe.firstDayOfYear=Xz;Oe.firstDayOfWeek=Jz;Oe.weekdays=uU;Oe.weekdaysMin=cU;Oe.weekdaysShort=dU;Oe.weekdaysParse=hU;Oe.weekdaysRegex=yU;Oe.weekdaysShortRegex=vU;Oe.weekdaysMinRegex=xU;Oe.isPM=$U;Oe.meridiem=CU;function Ec(e,t,n,r){var i=Ar(),o=rr().set(r,t);return i[n](o,e)}function H6(e,t,n){if(Nr(e)&&(t=e,e=void 0),e=e||"",t!=null)return Ec(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=Ec(e,r,n,"month");return i}function _y(e,t,n,r){typeof e=="boolean"?(Nr(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,Nr(t)&&(n=t,t=void 0),t=t||"");var i=Ar(),o=e?i._week.dow:0,a,l=[];if(n!=null)return Ec(t,(n+o)%7,r,"day");for(a=0;a<7;a++)l[a]=Ec(t,(a+o)%7,r,"day");return l}function NH(e,t){return H6(e,t,"months")}function EH(e,t){return H6(e,t,"monthsShort")}function IH(e,t,n){return _y(e,t,n,"weekdays")}function TH(e,t,n){return _y(e,t,n,"weekdaysShort")}function AH(e,t,n){return _y(e,t,n,"weekdaysMin")}hi("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=xe(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});ee.lang=xn("moment.lang is deprecated. Use moment.locale instead.",hi);ee.langData=xn("moment.langData is deprecated. Use moment.localeData instead.",Ar);var lr=Math.abs;function RH(){var e=this._data;return this._milliseconds=lr(this._milliseconds),this._days=lr(this._days),this._months=lr(this._months),e.milliseconds=lr(e.milliseconds),e.seconds=lr(e.seconds),e.minutes=lr(e.minutes),e.hours=lr(e.hours),e.months=lr(e.months),e.years=lr(e.years),this}function W6(e,t,n,r){var i=zn(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function FH(e,t){return W6(this,e,t,1)}function DH(e,t){return W6(this,e,t,-1)}function e4(e){return e<0?Math.floor(e):Math.ceil(e)}function MH(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,i,o,a,l,u;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=e4(hg(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,i=dn(e/1e3),r.seconds=i%60,o=dn(i/60),r.minutes=o%60,a=dn(o/60),r.hours=a%24,t+=dn(a/24),u=dn(Y6(t)),n+=u,t-=e4(hg(u)),l=dn(n/12),n%=12,r.days=t,r.months=n,r.years=l,this}function Y6(e){return e*4800/146097}function hg(e){return e*146097/4800}function jH(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=bn(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+Y6(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(hg(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function LH(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+xe(this._months/12)*31536e6:NaN}function Rr(e){return function(){return this.as(e)}}var zH=Rr("ms"),UH=Rr("s"),BH=Rr("m"),HH=Rr("h"),WH=Rr("d"),YH=Rr("w"),VH=Rr("M"),qH=Rr("Q"),GH=Rr("y");function QH(){return zn(this)}function KH(e){return e=bn(e),this.isValid()?this[e+"s"]():NaN}function fo(e){return function(){return this.isValid()?this._data[e]:NaN}}var ZH=fo("milliseconds"),JH=fo("seconds"),XH=fo("minutes"),eW=fo("hours"),tW=fo("days"),nW=fo("months"),rW=fo("years");function iW(){return dn(this.days()/7)}var fr=Math.round,ca={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function oW(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function aW(e,t,n,r){var i=zn(e).abs(),o=fr(i.as("s")),a=fr(i.as("m")),l=fr(i.as("h")),u=fr(i.as("d")),d=fr(i.as("M")),c=fr(i.as("w")),h=fr(i.as("y")),g=o<=n.ss&&["s",o]||o<n.s&&["ss",o]||a<=1&&["m"]||a<n.m&&["mm",a]||l<=1&&["h"]||l<n.h&&["hh",l]||u<=1&&["d"]||u<n.d&&["dd",u];return n.w!=null&&(g=g||c<=1&&["w"]||c<n.w&&["ww",c]),g=g||d<=1&&["M"]||d<n.M&&["MM",d]||h<=1&&["y"]||["yy",h],g[2]=t,g[3]=+e>0,g[4]=r,oW.apply(null,g)}function sW(e){return e===void 0?fr:typeof e=="function"?(fr=e,!0):!1}function lW(e,t){return ca[e]===void 0?!1:t===void 0?ca[e]:(ca[e]=t,e==="s"&&(ca.ss=t-1),!0)}function uW(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=ca,i,o;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},ca,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),i=this.localeData(),o=aW(this,!n,r,i),n&&(o=i.pastFuture(+this,o)),i.postformat(o)}var U0=Math.abs;function Co(e){return(e>0)-(e<0)||+e}function Qf(){if(!this.isValid())return this.localeData().invalidDate();var e=U0(this._milliseconds)/1e3,t=U0(this._days),n=U0(this._months),r,i,o,a,l=this.asSeconds(),u,d,c,h;return l?(r=dn(e/60),i=dn(r/60),e%=60,r%=60,o=dn(n/12),n%=12,a=e?e.toFixed(3).replace(/\.?0+$/,""):"",u=l<0?"-":"",d=Co(this._months)!==Co(l)?"-":"",c=Co(this._days)!==Co(l)?"-":"",h=Co(this._milliseconds)!==Co(l)?"-":"",u+"P"+(o?d+o+"Y":"")+(n?d+n+"M":"")+(t?c+t+"D":"")+(i||r||e?"T":"")+(i?h+i+"H":"")+(r?h+r+"M":"")+(e?h+a+"S":"")):"P0D"}var $e=qf.prototype;$e.isValid=tB;$e.abs=RH;$e.add=FH;$e.subtract=DH;$e.as=jH;$e.asMilliseconds=zH;$e.asSeconds=UH;$e.asMinutes=BH;$e.asHours=HH;$e.asDays=WH;$e.asWeeks=YH;$e.asMonths=VH;$e.asQuarters=qH;$e.asYears=GH;$e.valueOf=LH;$e._bubble=MH;$e.clone=QH;$e.get=KH;$e.milliseconds=ZH;$e.seconds=JH;$e.minutes=XH;$e.hours=eW;$e.days=tW;$e.weeks=iW;$e.months=nW;$e.years=rW;$e.humanize=uW;$e.toISOString=Qf;$e.toString=Qf;$e.toJSON=Qf;$e.locale=A6;$e.localeData=F6;$e.toIsoString=xn("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Qf);$e.lang=R6;pe("X",0,0,"unix");pe("x",0,0,"valueOf");le("x",Hf);le("X",Iz);Re("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});Re("x",function(e,t,n){n._d=new Date(xe(e))});//! moment.js
ee.version="2.29.4";dz(Ue);ee.fn=Q;ee.min=ZU;ee.max=JU;ee.now=XU;ee.utc=rr;ee.unix=_H;ee.months=NH;ee.isDate=Gl;ee.locale=hi;ee.invalid=jf;ee.duration=zn;ee.isMoment=jn;ee.weekdays=IH;ee.parseZone=kH;ee.localeData=Ar;ee.isDuration=yd;ee.monthsShort=EH;ee.weekdaysMin=AH;ee.defineLocale=xy;ee.updateLocale=kU;ee.locales=NU;ee.weekdaysShort=TH;ee.normalizeUnits=bn;ee.relativeTimeRounding=sW;ee.relativeTimeThreshold=lW;ee.calendarFormat=CB;ee.prototype=Q;ee.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const dW=[{_id:"1",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"David",tag_No:"123",created:"2 may 2022",quantity:0,active:!1,price:100},{_id:"2",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:0,active:!1,price:100},{_id:"3",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"4",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"5",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"6",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"7",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"1",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"8",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100}];var pg={},cW={get exports(){return pg},set exports(e){pg=e}};(function(e,t){(function(n,r){e.exports=r(C)})(e8,n=>(()=>{var r={703:(l,u,d)=>{var c=d(414);function h(){}function g(){}g.resetWarningCache=h,l.exports=function(){function x(w,y,p,b,S,P){if(P!==c){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}function v(){return x}x.isRequired=x;var $={array:x,bigint:x,bool:x,func:x,number:x,object:x,string:x,symbol:x,any:x,arrayOf:v,element:x,elementType:x,instanceOf:v,node:x,objectOf:v,oneOf:v,oneOfType:v,shape:v,exact:v,checkPropTypes:g,resetWarningCache:h};return $.PropTypes=$,$}},697:(l,u,d)=>{l.exports=d(703)()},414:l=>{l.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:l=>{l.exports=n}},i={};function o(l){var u=i[l];if(u!==void 0)return u.exports;var d=i[l]={exports:{}};return r[l](d,d.exports,o),d.exports}o.n=l=>{var u=l&&l.__esModule?()=>l.default:()=>l;return o.d(u,{a:u}),u},o.d=(l,u)=>{for(var d in u)o.o(u,d)&&!o.o(l,d)&&Object.defineProperty(l,d,{enumerable:!0,get:u[d]})},o.o=(l,u)=>Object.prototype.hasOwnProperty.call(l,u),o.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var a={};return(()=>{o.r(a),o.d(a,{default:()=>ie});var l=o(98),u=o.n(l),d=o(697),c=o.n(d);function h(){return h=Object.assign?Object.assign.bind():function(M){for(var j=1;j<arguments.length;j++){var J=arguments[j];for(var F in J)Object.prototype.hasOwnProperty.call(J,F)&&(M[F]=J[F])}return M},h.apply(this,arguments)}var g=function(M){var j=M.pageClassName,J=M.pageLinkClassName,F=M.page,X=M.selected,te=M.activeClassName,L=M.activeLinkClassName,N=M.getEventListener,E=M.pageSelectedHandler,U=M.href,D=M.extraAriaContext,H=M.pageLabelBuilder,Y=M.rel,oe=M.ariaLabel||"Page "+F+(D?" "+D:""),k=null;return X&&(k="page",oe=M.ariaLabel||"Page "+F+" is your current page",j=j!==void 0?j+" "+te:te,J!==void 0?L!==void 0&&(J=J+" "+L):J=L),u().createElement("li",{className:j},u().createElement("a",h({rel:Y,role:U?void 0:"button",className:J,href:U,tabIndex:X?"-1":"0","aria-label":oe,"aria-current":k,onKeyPress:E},N(E)),H(F)))};g.propTypes={pageSelectedHandler:c().func.isRequired,selected:c().bool.isRequired,pageClassName:c().string,pageLinkClassName:c().string,activeClassName:c().string,activeLinkClassName:c().string,extraAriaContext:c().string,href:c().string,ariaLabel:c().string,page:c().number.isRequired,getEventListener:c().func.isRequired,pageLabelBuilder:c().func.isRequired,rel:c().string};const x=g;function v(){return v=Object.assign?Object.assign.bind():function(M){for(var j=1;j<arguments.length;j++){var J=arguments[j];for(var F in J)Object.prototype.hasOwnProperty.call(J,F)&&(M[F]=J[F])}return M},v.apply(this,arguments)}var $=function(M){var j=M.breakLabel,J=M.breakAriaLabel,F=M.breakClassName,X=M.breakLinkClassName,te=M.breakHandler,L=M.getEventListener,N=F||"break";return u().createElement("li",{className:N},u().createElement("a",v({className:X,role:"button",tabIndex:"0","aria-label":J,onKeyPress:te},L(te)),j))};$.propTypes={breakLabel:c().oneOfType([c().string,c().node]),breakAriaLabel:c().string,breakClassName:c().string,breakLinkClassName:c().string,breakHandler:c().func.isRequired,getEventListener:c().func.isRequired};const w=$;function y(M){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return M??j}function p(M){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(j){return typeof j}:function(j){return j&&typeof Symbol=="function"&&j.constructor===Symbol&&j!==Symbol.prototype?"symbol":typeof j},p(M)}function b(){return b=Object.assign?Object.assign.bind():function(M){for(var j=1;j<arguments.length;j++){var J=arguments[j];for(var F in J)Object.prototype.hasOwnProperty.call(J,F)&&(M[F]=J[F])}return M},b.apply(this,arguments)}function S(M,j){for(var J=0;J<j.length;J++){var F=j[J];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(M,F.key,F)}}function P(M,j){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(J,F){return J.__proto__=F,J},P(M,j)}function _(M,j){if(j&&(p(j)==="object"||typeof j=="function"))return j;if(j!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return T(M)}function T(M){if(M===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}function R(M){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(j){return j.__proto__||Object.getPrototypeOf(j)},R(M)}function W(M,j,J){return j in M?Object.defineProperty(M,j,{value:J,enumerable:!0,configurable:!0,writable:!0}):M[j]=J,M}var z=function(M){(function(N,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function");N.prototype=Object.create(E&&E.prototype,{constructor:{value:N,writable:!0,configurable:!0}}),Object.defineProperty(N,"prototype",{writable:!1}),E&&P(N,E)})(L,M);var j,J,F,X,te=(F=L,X=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var N,E=R(F);if(X){var U=R(this).constructor;N=Reflect.construct(E,arguments,U)}else N=E.apply(this,arguments);return _(this,N)});function L(N){var E,U;return function(D,H){if(!(D instanceof H))throw new TypeError("Cannot call a class as a function")}(this,L),W(T(E=te.call(this,N)),"handlePreviousPage",function(D){var H=E.state.selected;E.handleClick(D,null,H>0?H-1:void 0,{isPrevious:!0})}),W(T(E),"handleNextPage",function(D){var H=E.state.selected,Y=E.props.pageCount;E.handleClick(D,null,H<Y-1?H+1:void 0,{isNext:!0})}),W(T(E),"handlePageSelected",function(D,H){if(E.state.selected===D)return E.callActiveCallback(D),void E.handleClick(H,null,void 0,{isActive:!0});E.handleClick(H,null,D)}),W(T(E),"handlePageChange",function(D){E.state.selected!==D&&(E.setState({selected:D}),E.callCallback(D))}),W(T(E),"getEventListener",function(D){return W({},E.props.eventListener,D)}),W(T(E),"handleClick",function(D,H,Y){var oe=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},k=oe.isPrevious,de=k!==void 0&&k,Z=oe.isNext,Ce=Z!==void 0&&Z,me=oe.isBreak,ge=me!==void 0&&me,he=oe.isActive,Ne=he!==void 0&&he;D.preventDefault?D.preventDefault():D.returnValue=!1;var De=E.state.selected,fe=E.props.onClick,O=Y;if(fe){var I=fe({index:H,selected:De,nextSelectedPage:Y,event:D,isPrevious:de,isNext:Ce,isBreak:ge,isActive:Ne});if(I===!1)return;Number.isInteger(I)&&(O=I)}O!==void 0&&E.handlePageChange(O)}),W(T(E),"handleBreakClick",function(D,H){var Y=E.state.selected;E.handleClick(H,D,Y<D?E.getForwardJump():E.getBackwardJump(),{isBreak:!0})}),W(T(E),"callCallback",function(D){E.props.onPageChange!==void 0&&typeof E.props.onPageChange=="function"&&E.props.onPageChange({selected:D})}),W(T(E),"callActiveCallback",function(D){E.props.onPageActive!==void 0&&typeof E.props.onPageActive=="function"&&E.props.onPageActive({selected:D})}),W(T(E),"getElementPageRel",function(D){var H=E.state.selected,Y=E.props,oe=Y.nextPageRel,k=Y.prevPageRel,de=Y.selectedPageRel;return H-1===D?k:H===D?de:H+1===D?oe:void 0}),W(T(E),"pagination",function(){var D=[],H=E.props,Y=H.pageRangeDisplayed,oe=H.pageCount,k=H.marginPagesDisplayed,de=H.breakLabel,Z=H.breakClassName,Ce=H.breakLinkClassName,me=H.breakAriaLabels,ge=E.state.selected;if(oe<=Y)for(var he=0;he<oe;he++)D.push(E.getPageElement(he));else{var Ne=Y/2,De=Y-Ne;ge>oe-Y/2?Ne=Y-(De=oe-ge):ge<Y/2&&(De=Y-(Ne=ge));var fe,O,I=function(V){return E.getPageElement(V)},A=[];for(fe=0;fe<oe;fe++){var re=fe+1;if(re<=k)A.push({type:"page",index:fe,display:I(fe)});else if(re>oe-k)A.push({type:"page",index:fe,display:I(fe)});else if(fe>=ge-Ne&&fe<=ge+(ge===0&&Y>1?De-1:De))A.push({type:"page",index:fe,display:I(fe)});else if(de&&A.length>0&&A[A.length-1].display!==O&&(Y>0||k>0)){var q=fe<ge?me.backward:me.forward;O=u().createElement(w,{key:fe,breakAriaLabel:q,breakLabel:de,breakClassName:Z,breakLinkClassName:Ce,breakHandler:E.handleBreakClick.bind(null,fe),getEventListener:E.getEventListener}),A.push({type:"break",index:fe,display:O})}}A.forEach(function(V,se){var ve=V;V.type==="break"&&A[se-1]&&A[se-1].type==="page"&&A[se+1]&&A[se+1].type==="page"&&A[se+1].index-A[se-1].index<=2&&(ve={type:"page",index:V.index,display:I(V.index)}),D.push(ve.display)})}return D}),N.initialPage!==void 0&&N.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(N.initialPage,") and forcePage (").concat(N.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),U=N.initialPage?N.initialPage:N.forcePage?N.forcePage:0,E.state={selected:U},E}return j=L,(J=[{key:"componentDidMount",value:function(){var N=this.props,E=N.initialPage,U=N.disableInitialCallback,D=N.extraAriaContext,H=N.pageCount,Y=N.forcePage;E===void 0||U||this.callCallback(E),D&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(H)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(H,"). Did you forget a Math.ceil()?")),E!==void 0&&E>H-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(E," > ").concat(H-1,").")),Y!==void 0&&Y>H-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(Y," > ").concat(H-1,")."))}},{key:"componentDidUpdate",value:function(N){this.props.forcePage!==void 0&&this.props.forcePage!==N.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(N.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var N=this.state.selected,E=this.props,U=E.pageCount,D=N+E.pageRangeDisplayed;return D>=U?U-1:D}},{key:"getBackwardJump",value:function(){var N=this.state.selected-this.props.pageRangeDisplayed;return N<0?0:N}},{key:"getElementHref",value:function(N){var E=this.props,U=E.hrefBuilder,D=E.pageCount,H=E.hrefAllControls;if(U)return H||N>=0&&N<D?U(N+1,D,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(N){var E=N===this.state.selected;if(this.props.ariaLabelBuilder&&N>=0&&N<this.props.pageCount){var U=this.props.ariaLabelBuilder(N+1,E);return this.props.extraAriaContext&&!E&&(U=U+" "+this.props.extraAriaContext),U}}},{key:"getPageElement",value:function(N){var E=this.state.selected,U=this.props,D=U.pageClassName,H=U.pageLinkClassName,Y=U.activeClassName,oe=U.activeLinkClassName,k=U.extraAriaContext,de=U.pageLabelBuilder;return u().createElement(x,{key:N,pageSelectedHandler:this.handlePageSelected.bind(null,N),selected:E===N,rel:this.getElementPageRel(N),pageClassName:D,pageLinkClassName:H,activeClassName:Y,activeLinkClassName:oe,extraAriaContext:k,href:this.getElementHref(N),ariaLabel:this.ariaLabelBuilder(N),page:N+1,pageLabelBuilder:de,getEventListener:this.getEventListener})}},{key:"render",value:function(){var N=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&N!==void 0)return N&&N(this.props);var E=this.props,U=E.disabledClassName,D=E.disabledLinkClassName,H=E.pageCount,Y=E.className,oe=E.containerClassName,k=E.previousLabel,de=E.previousClassName,Z=E.previousLinkClassName,Ce=E.previousAriaLabel,me=E.prevRel,ge=E.nextLabel,he=E.nextClassName,Ne=E.nextLinkClassName,De=E.nextAriaLabel,fe=E.nextRel,O=this.state.selected,I=O===0,A=O===H-1,re="".concat(y(de)).concat(I?" ".concat(y(U)):""),q="".concat(y(he)).concat(A?" ".concat(y(U)):""),V="".concat(y(Z)).concat(I?" ".concat(y(D)):""),se="".concat(y(Ne)).concat(A?" ".concat(y(D)):""),ve=I?"true":"false",ae=A?"true":"false";return u().createElement("ul",{className:Y||oe,role:"navigation","aria-label":"Pagination"},u().createElement("li",{className:re},u().createElement("a",b({className:V,href:this.getElementHref(O-1),tabIndex:I?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":ve,"aria-label":Ce,rel:me},this.getEventListener(this.handlePreviousPage)),k)),this.pagination(),u().createElement("li",{className:q},u().createElement("a",b({className:se,href:this.getElementHref(O+1),tabIndex:A?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":ae,"aria-label":De,rel:fe},this.getEventListener(this.handleNextPage)),ge)))}}])&&S(j.prototype,J),Object.defineProperty(j,"prototype",{writable:!1}),L}(l.Component);W(z,"propTypes",{pageCount:c().number.isRequired,pageRangeDisplayed:c().number,marginPagesDisplayed:c().number,previousLabel:c().node,previousAriaLabel:c().string,prevPageRel:c().string,prevRel:c().string,nextLabel:c().node,nextAriaLabel:c().string,nextPageRel:c().string,nextRel:c().string,breakLabel:c().oneOfType([c().string,c().node]),breakAriaLabels:c().shape({forward:c().string,backward:c().string}),hrefBuilder:c().func,hrefAllControls:c().bool,onPageChange:c().func,onPageActive:c().func,onClick:c().func,initialPage:c().number,forcePage:c().number,disableInitialCallback:c().bool,containerClassName:c().string,className:c().string,pageClassName:c().string,pageLinkClassName:c().string,pageLabelBuilder:c().func,activeClassName:c().string,activeLinkClassName:c().string,previousClassName:c().string,nextClassName:c().string,previousLinkClassName:c().string,nextLinkClassName:c().string,disabledClassName:c().string,disabledLinkClassName:c().string,breakClassName:c().string,breakLinkClassName:c().string,extraAriaContext:c().string,ariaLabelBuilder:c().func,eventListener:c().string,renderOnZeroPageCount:c().func,selectedPageRel:c().string}),W(z,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(M){return M},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const ie=z})(),a})())})(cW);const nn=p4(pg),fW=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["posts"],queryFn:()=>ql(t)}),[r,i]=C.useState(0),o=6,a=r*o,l=Math.ceil((n==null?void 0:n.length)/o),u=n==null?void 0:n.slice(a,a+o),d=({selected:w})=>{i(w)};console.log(n);const[c,h]=C.useState(""),g=["name","brand","tag"],x=w=>{const y=w==null?void 0:w.filter(p=>g.some(b=>{const S=p[b];return typeof S=="string"&&S.toLowerCase().includes(c)}));return c?y!=null&&y.length?y:null:w},v=x(u);var $=Intl.NumberFormat();return m(gW,{children:[s(rt,{}),m(mW,{children:[s(yW,{children:"All Products"}),m(hW,{children:[s("input",{placeholder:"Search by name or brand",value:c,onChange:w=>h(w.target.value)}),s("button",{onClick:x,children:s(Ka,{})})]})]}),s(pW,{children:m(xW,{children:[m(vW,{children:[s(Ai,{children:s(Ti,{children:"Product "})}),s(Ai,{children:s(Ti,{children:"Tag "})}),s(Ai,{children:s(Ti,{children:"Created"})}),s(Ai,{children:s(Ti,{children:"Price"})}),s(Ai,{children:s(Ti,{children:"Aval / Qty "})}),s(Ai,{children:s(Ti,{children:"Active "})}),m(Ai,{children:[s(Ti,{children:"Action "})," "]})]}),v==null?void 0:v.map((w,y)=>s(Mf,{index:y,avatar:w==null?void 0:w.avatar[0].url,name:w.name,tag:w.tag_No,created:ee(w.createdAt).format("D MMM YYYY"),quantity:w.quantity,active:w.active,price:$.format(w.price)},y))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:l,onPageChange:d,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active"})]})},hW=f.div`
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
`,pW=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,gW=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,mW=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,yW=f.div`
  border-bottom: 2px solid blue;
`,Ti=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Ai=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,vW=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,xW=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,bW=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["posts"],queryFn:()=>ql(t)}),r=n.filter(w=>w.active===!0),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),c=({selected:w})=>{o(w)};console.log(n);const[h,g]=C.useState("");console.log(h);const x=["name","brand","tag"],v=w=>{const y=w==null?void 0:w.filter(p=>x.some(b=>{const S=p[b];return typeof S=="string"&&S.toLowerCase().includes(h)}));return h?y!=null&&y.length?y:null:w};v(d);var $=Intl.NumberFormat();return m(SW,{children:[s(rt,{}),m(CW,{children:[s(PW,{children:"Live Products"}),m($W,{children:[s("input",{placeholder:"Search by name or brand",value:h,onChange:w=>g(w.target.value)}),s("button",{onClick:v,children:s(Ka,{})})]})]}),s(wW,{children:m(_W,{children:[m(OW,{children:[s(Fi,{children:s(Ri,{children:"Product "})}),s(Fi,{children:s(Ri,{children:"Tag "})}),s(Fi,{children:s(Ri,{children:"Created"})}),s(Fi,{children:s(Ri,{children:"Price"})}),s(Fi,{children:s(Ri,{children:"Aval / Qty "})}),s(Fi,{children:s(Ri,{children:"Active "})}),m(Fi,{children:[s(Ri,{children:"Action "})," "]})]}),d==null?void 0:d.map((w,y)=>s(Mf,{index:y,avatar:w==null?void 0:w.avatar[0].url,name:w.name,tag:w.tag_No,created:ee(w.createdAt).format("D MMM YYYY"),quantity:w.quantity,active:w.active,price:$.format(w.price)},y))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:c,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})},$W=f.div`
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
`,wW=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,SW=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,CW=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,PW=f.div`
  border-bottom: 2px solid blue;
`,Ri=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Fi=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,OW=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,_W=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,kW=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["posts"],queryFn:()=>ql(t)}),r=n.filter(y=>y.active===!1),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),c=({selected:y})=>{o(y)};console.log(n);const[h,g]=C.useState("");console.log(h);const x=["name","brand","tag"],v=y=>{const p=y==null?void 0:y.filter(b=>x.some(S=>{const P=b[S];return typeof P=="string"&&P.toLowerCase().includes(h)}));return h?p!=null&&p.length?p:null:y},$=v(d);var w=Intl.NumberFormat();return m(IW,{children:[s(rt,{}),m(TW,{children:[s(AW,{children:"Sold Out"}),m(NW,{children:[s("input",{placeholder:"Search by name or brand",value:h,onChange:y=>g(y.target.value)}),s("button",{onClick:v,children:s(Ka,{})})]})]}),s(EW,{children:m(FW,{children:[m(RW,{children:[s(Mi,{children:s(Di,{children:"Product "})}),s(Mi,{children:s(Di,{children:"Tag "})}),s(Mi,{children:s(Di,{children:"Created"})}),s(Mi,{children:s(Di,{children:"Price"})}),s(Mi,{children:s(Di,{children:"Aval / Qty "})}),s(Mi,{children:s(Di,{children:"Active "})}),m(Mi,{children:[s(Di,{children:"Action "})," "]})]}),$==null?void 0:$.map((y,p)=>s(Mf,{index:p,avatar:y==null?void 0:y.avatar[0].url,name:y.name,tag:y.tag_No,created:ee(y.createdAt).format("D MMM YYYY"),quantity:y.quantity,active:y.active,price:w.format(y.price)},p))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:c,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active"})]})},NW=f.div`
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
`,EW=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,IW=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,TW=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,AW=f.div`
  border-bottom: 2px solid blue;
`,Di=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Mi=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,RW=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,FW=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,DW=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["posts"],queryFn:()=>ql(t)}),r=dW.filter(w=>w.rejected),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),c=({selected:w})=>{o(w)};console.log(n);const[h,g]=C.useState("");console.log(h);const x=["name","brand","tag"],v=w=>{const y=w==null?void 0:w.filter(p=>x.some(b=>{const S=p[b];return typeof S=="string"&&S.toLowerCase().includes(h)}));return h?y!=null&&y.length?y:null:w},$=v(d);return m(LW,{children:[s(rt,{}),m(zW,{children:[s(UW,{children:"Rejected Products"}),m(MW,{children:[s("input",{placeholder:"Search by name or brand",value:h,onChange:w=>g(w.target.value)}),s("button",{onClick:v,children:s(Ka,{})})]})]}),s(jW,{children:m(HW,{children:[m(BW,{children:[s(ys,{children:s(ms,{children:"Product "})}),s(ys,{children:s(ms,{children:"Tag "})}),s(ys,{children:s(ms,{children:"Created"})}),s(ys,{children:s(ms,{children:"Reason for Rejection"})}),m(ys,{children:[s(ms,{children:"Action "})," "]})]}),$==null?void 0:$.map((w,y)=>s(Mf,{index:y,avatar:w==null?void 0:w.avatar[0].url,name:w.name,tag:w.tag_No,created:ee(w.createdAt).format("D MMM YYYY"),rejected},y))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:c,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active"})]})},MW=f.div`
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
`,jW=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,LW=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,zW=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,UW=f.div`
  border-bottom: 2px solid blue;
`,ms=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,ys=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,BW=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,HW=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,Fr=({avatar:e,index:t,order_No:n,price:r,pending_days:i,created:o,delivery_status:a,payment_method:l,tag_No:u,name:d,payment_status:c,quantity:h,amount:g})=>(C.useState(!1),m(VW,{children:[n&&m(wn,{children:[" ",s(Wn,{children:n})]}),i&&m(wn,{children:[" ",s(Wn,{children:i})]}),o&&m(wn,{children:[" ",s(Wn,{children:o})," "]}),u&&m(wn,{children:[" ",s(Wn,{children:u})," "]}),e&&s(wn,{children:m(YW,{children:[s("span",{children:s(WW,{src:e})}),d]})}),r&&m(wn,{children:[s(Wn,{children:r})," "]}),h&&m(wn,{children:[s(Wn,{children:h})," "]}),l&&s(wn,{children:s(Wn,{children:l})}),g&&s(wn,{children:s(Wn,{children:g})}),c&&s(wn,{children:s(Wn,{children:c})}),a&&s(wn,{children:s(Wn,{children:s("button",{className:`${a}`,children:a})})})]},t));f.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
  margin-left: 10px;
`;f.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
`;const WW=f.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  /* background-color: gold; */
  margin-right: 10px;
`;f.div`
  margin: 5px;
  color: blue;
  border-bottom: 2px solid blue;
  font-weight: 600;
  cursor: pointer;
  span {
    margin-left: 3px;
  }
`;f.div``;const Wn=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,YW=f.div`
  display: flex;
  align-items: center;

  :hover {
    color: blue;
  }
  cursor: pointer;
`,wn=f.td`
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 400;
  border-left: 1.5px solid #d0d1d2;
`,VW=f.tr`
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;;
`,qW=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(y=>{var b;return((b=y==null?void 0:y.products)==null?void 0:b.filter(S=>S.sellerID===t)).length>0}),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),c=({selected:y})=>{o(y)},[h,g]=C.useState(""),x=["order_No","delivery_status"],$=(y=>{const p=y==null?void 0:y.filter(b=>x.some(S=>{const P=b[S];return typeof P=="string"&&P.toLowerCase().includes(h)}));return h?p!=null&&p.length?p:null:y})(d);var w=Intl.NumberFormat();return m(QW,{children:[s(rt,{}),s(KW,{children:s(ZW,{children:"All Orders"})}),s(GW,{children:m(XW,{children:[m(JW,{children:[s(xs,{children:s(vs,{children:"Order Number "})}),s(xs,{children:s(vs,{children:"Order Date"})}),s(xs,{children:s(vs,{children:"Price"})}),s(xs,{children:s(vs,{children:"Payment Method"})}),s(xs,{children:s(vs,{children:"Status "})})]}),$==null?void 0:$.map((y,p)=>s(Fr,{index:p,delivery_status:y.delivery_status,order_No:y.order_No,created:ee(y.createdAt).format("D MMM YYYY"),payment_method:y.payment_method,pending_days:y.pending_days,price:w.format(y.price)},p))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:c,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};f.div`
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
`;const GW=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,QW=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,KW=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0;
`,ZW=f.div`
  border-bottom: 2px solid blue;
`,vs=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,xs=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,JW=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,XW=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,eY=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="pending"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[g,x]=C.useState("");console.log(g);const v=["order_No","delivery_status"],w=(p=>{const b=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?b!=null&&b.length?b:null:p})(c);var y=Intl.NumberFormat();return m(nY,{children:[s(rt,{}),s(rY,{children:s(iY,{children:"Pending Orders"})}),s(tY,{children:m(aY,{children:[m(oY,{children:[s($s,{children:s(bs,{children:"Order Number "})}),s($s,{children:s(bs,{children:"Order Date"})}),s($s,{children:s(bs,{children:"Price"})}),s($s,{children:s(bs,{children:"Payment Method"})}),s($s,{children:s(bs,{children:"Status "})})]}),w==null?void 0:w.map((p,b)=>s(Fr,{index:b,delivery_status:p.delivery_status,order_No:p.order_No,created:ee(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:y.format(p.price)},b))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};f.div`
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
`;const tY=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,nY=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,rY=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,iY=f.div`
  border-bottom: 2px solid blue;
`,bs=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,$s=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,oY=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,aY=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,sY=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="ready to ship"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[g,x]=C.useState(""),v=["order_No","delivery_status"],w=(p=>{const b=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?b!=null&&b.length?b:null:p})(c);var y=Intl.NumberFormat();return m(uY,{children:[s(rt,{}),s(dY,{children:s(cY,{children:"Ready To Ship Orders"})}),s(lY,{children:m(hY,{children:[m(fY,{children:[s(Ss,{children:s(ws,{children:"Order Number "})}),s(Ss,{children:s(ws,{children:"Order Date"})}),s(Ss,{children:s(ws,{children:"Price"})}),s(Ss,{children:s(ws,{children:"Payment Method"})}),s(Ss,{children:s(ws,{children:"Status "})})]}),w==null?void 0:w.map((p,b)=>s(Fr,{index:b,delivery_status:p.delivery_status,order_No:p.order_No,created:ee(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:y.format(p.price)},b))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};f.div`
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
`;const lY=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,uY=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,dY=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,cY=f.div`
  border-bottom: 2px solid blue;
`,ws=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Ss=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,fY=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,hY=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,pY=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="shipped"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[g,x]=C.useState(""),v=["order_No","delivery_status"],w=(p=>{const b=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?b!=null&&b.length?b:null:p})(c);var y=Intl.NumberFormat();return m(mY,{children:[s(rt,{}),s(yY,{children:s(vY,{children:"Shipped"})}),s(gY,{children:m(bY,{children:[m(xY,{children:[s(Oo,{children:s(Po,{children:"Order Number "})}),s(Oo,{children:s(Po,{children:"Pending Days"})}),s(Oo,{children:s(Po,{children:"Order Date"})}),s(Oo,{children:s(Po,{children:"Price"})}),s(Oo,{children:s(Po,{children:"Payment Method"})}),s(Oo,{children:s(Po,{children:"Status "})})]}),w==null?void 0:w.map((p,b)=>s(Fr,{index:b,delivery_status:p.delivery_status,order_No:p.order_No,created:ee(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:y.format(p.price)},b))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};f.div`
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
`;const gY=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,mY=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,yY=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,vY=f.div`
  border-bottom: 2px solid blue;
`,Po=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Oo=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,xY=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,bY=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,$Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA6LSURBVHgB7Z0JrFxVHca/ebVQQNk3sUADZRGIQkGhKjuKUVyIIS4xMRJwjRIUlMREE1RUMGJUgonGgIoGELFBMVK1hhTRCkKRLQXbIpS2tNAWui/v+f8492TOu2/m9NHO3N7/ne+XfJnlzbzcOed853/We1oYDFqmIdNepoNNx5ummY4xHWnax7Rz8bkWBpcRhN+/xbTGtMg03/SQ6d+mx02LTatMmzEANLkwxN/GTH+j6fRCbzIdlPy91eV7g8hI5r2NpidN/zTNMv3FtDTzPVFjYiHf0/RxhAxdhlAzUsPJIzUiddRwkmYUo8Ym00LTb01nmCYiROdBrlhcwYxipp1u+oPpeYSM3ozRxvBSSOtmlpiWfM5K5zrTYUnaixrDmmxv0+cRMk+Roj9GidpUPM41nYdQMckkNYUZs5/pMtMLaNdyMkd/jRKbXo+Z3mvaCQ0yyQQ0A0aO3U1fKvRqtNvF5ZGpkQ7fl4HGqlNatTo8j+m7B8LI4P8QOvOd0tkdTXA6fwONfhVC9GDGDBWPOWMMF5/j6Mx6hJqwEZnaI9hcmlQ8Mq3SiqZcbmK68XMc2fqC6ebic67T1LtB4vWfYZph2i15v5s5+JymWIhQ01HM1PUQhOnDCodpOQWhA05xaDwdreqUvjH6zDOdhZCuqnR2IMwkTvT9CZ37G2mHMv79XtOlppNNB6LdzGxJYyoWRpDJCIWdEXpRKY1z6f090y4QOwxmJPsdPzatxNjh2zSzGB2YuV8zHYr6zZqn11Kn6yLxetj5Ptb0C9OL6D4AEoeBl5s+YHoVxA6B4f400wKEDMmNsjxq+ghCZtVxUisWwqFEdbvGoeJxf9O1aI8UdosiTPdbTIcn33WH11EsFh6G/0+YzsXoZhJJ28QrTBcj9FHIMOoH14KdY3oHwjoxGpkFcBPqQ0zTdaZ/IESU00qfKUe/AxCGfx+G+iKVw5qMi+fS5SPlphU741egXTvXEQ6P/gqhQ7saofnCgYNvIjQh6xjtmJZcxnMbxqZ/zIP4/o0Ii0TdRhFvxAJzAUaboRziaY7fmF6HekbK2K5nmz7OSqfrnvhbPoP69UkivKajEJqvuQESrv6dCqd4dTUz59TieXm+gzBjlphuNT2LkIF1hM2pt6M9tJqage+x3zQJ9Wye8DqfMt2OfPqymTUN9TV6Fo8GYWHh8OFJmc8wI+aYZqPeHIEwERcNUB5qPQRhbVkdC1aM0jMRmoflvl0reW86nOLRIEx4TlpNTl5HYnjnsC4Nshj17hxy41FslkTS5+wQr0d9fwOvi5up5qOzieN7R2H0EhY3eG1i0RxsesQlEJH4fIPpAXRuftWJexAGGmIfKW2/kzsRRrPq+ht4rbw+7jbcgO5rt9gP3AMO8WoQjmDFa+9U+zKzFqH+cAj666YnMLqGZZuezcPri9d1rnlpAi5Q5CBDt+ukOXaFwz6I11lOJna3kanY9l1TvK5z84TcbbrIdL7pRNNahHY9523mw0ezhEbv1lHn9U8s5A6vBtla5Cu36+sM+xhcH/YgwhIY/raXEDrAXn7DeG7g4C56EK2TqQcsYGsKdduLIXYAMkh9qOMSmIFH0/9CZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBlkECEyyCBCZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBm8GaTTHciF6BteI0hdbwQnGoa3HYXc+H8wwpkg8U6EQvQNbwb5NsKZE7yNDM8hlEFEX/FiEN5q9IemCzH6Np11vzGccI6XPgjPzWDkYN+jfBqTEH3Di0F4o+p4tDORMUQleDFI7G9oiFdUiheDyBRih6CZdCEyyCBCZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBlkEFEFnOh1uUxIBhH9hobgIlMuF5oEZ8ggop/EaLGf6cumT5qmwlEUkUFEP4l7d3h674dM3zL92nQonCCDiH7SKj3fyTTNdAWcoFNuRb/ptLntSDjBSwRhJ0/nh/vG5S5QLwZZYtoInSUuKsaLQWaYFqF9owZFE5+4iyJeDDLPdLnpvwhRRMYQleCpk84ostR0puldppMRrl+3/hF9w9so1hzT/aZlpmNNu0ND1aKPeCtcjBZxREtRQ/QdbxFEnXNRKWqeCJFBBhEigwwiRAaPJ0zJ1KIyPBW2OIuu5SaiMjyNYvFaeQzCh03TEeZAdDNr0Ve8GISR7iLTlaa9oGaWqAgvBe0Y0yWmPdFuagGKHt5wN3/lJYK8xzSleK5mlX/cGMWLQQ5AuFY1rfzjKop43HKr6OGPsik2wwmqkUU/iZvbWKkNoz1EPxNO0E0bRD+J0Z4mWYmwTeFm0zVwggwi+klsWtEc3zHda3oAjpBBRL+hSdYhRI5n4KyTrj6IqIp0/soNMoioGkUQIZqCDCJEBhlEiAwyiBAZZBAhMsggQmSQQYTIIIMIkcGjQXRXRVEZXgyyCqOPPZBJRCV4McifTcuhW/6IivFikH+ZfoD29bpc+Cb84WW5+wbTTxBM8THTYQhHCuvuJqKveIkgNMILpqsRbgF0Kdr9EiH6hqdRrLi3mde8AUJUgLdhXh3gKSpFE4VCZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBlkECEyyCBCZJBBhMgggwiRQQYRIoMMIkQGGUT0mkattpZBRC/g/QJ4MGdqjnS351rTGuh8EDGg8Gi1R00Titdx307c8flH0/NwuDVaBhG9gNufv2Gah9FRYovpHtN1xWt3EURnFIrtJRb62aaLTe83nYRwLuFdphmm+XDaN5FBRK9Yj/YptpMQWicvmTbCccddBhG9hB31tYXICJyPaskgotc06lZM6qQLkUEGESKDDCJEBvVBRK9poT0hqE66EAmcSZ9o2s20CWHol48a5hUDD++2f4rpfaajEYZ8OYt+h+mJ4rWoAIbvC00rEBI9rvuJa3+op02HQMciVEFM47eY7kOIGFsKrUYwyBQ4zQt10sX2woppV9NXTdMw+pCjnU3nmj6VvOcKGURsLyz0pyGsvxrG6E46+yRsxp9v2hcOkUFEL9gdo6NDq/Sanfad4RAZRPSCBQj9wfLwbhy9WmJaCW2YEgMICz1X8N6Oduc8vk/xNLAbEXYUuuuDaJhX9AKa4hrTa03TTXsi9EeWmX5n+im0H0QMONwU9WnT2abDEfaB3G+ag7B5yiUyiOgFMTosNv0SYTad77mfHJRBRC+JRtmIhqBOuhAZZBAhMsggQmSQQYTIIIOIXlJeYlJ+7Q4ZRPQKGiGOYnGi8DXQjkIhXobmYGX7NtPnTFMR5kD+arrJNBeiMrRhqp5wJ+FzCMtO0rx4xHQCtGFKDCgs+AchbJjap3hvJHl8vemLcIoMInrBcaZDEQyRdszjIzdT7QvtKBQDyv4YW5bSvSHssO8Kh8ggotc0qt8ngwiRQQYRIoMMIkQGGUSIDDKIEBlkECEyyCBCZPBqEBlbVILXgqZFiL6Iq33doZpYiAwyiBAZZBAhMsggQmSQQYTIIIMIkUEGESKDDCJEBhlEiAwyiBAZmmqQVpfnore4v7Xo1miqQXYyTS4eZZD+wbTlEc9M64loYFo37daj8f6wPLf7+6a7EA6R5Cmsw8VnXN8rtgZEE/A2Pmea3m06xzQJDaxwm2aQWPh5aP0009Gm802zEQ6U/A/Cmd6r0TaMGB8sK3sgHNDJtH2r6XiEk22Z3rFyalQUaWIEIcwo1mYM/zQJb395cfF3nttNg2yGosl4YVrSBLwBXGqAkeTvjTMHaerd3WNtFjMuvVcs+yV7Q2wraaXS6TajjaLJxx+kGaeOeu8YqLTUPIgQGWQQURUu+3tem1gj4/x7fEybW43sTFZAmpa59M191x1eDdJtiDbNMJ50NFT6TmoOmeSVkZpiCGPTdmsjWYogNYCZw8ziUO7PEOY/TkUYr+fkISe3OKEVZ31lkvERj1Tj0Pi6QktN95keMl1iOhEa5q0NudqImUQD0BCcSb/ZdADCmYUHIpx0tEvxGTE+mN6bTC+alpueNS00rTKdgpDWMbKUcW0arwZhDba1mXDO9J5uut20BKHGI5oc3D7SAs+I/E7Twcj379jc3QRRCcwANptY4ONseCoahxmy0XQbQsSYADWpekVMR0aLN5seRkjv9LTh8qnDDyJEGVEBzJwpCGuqYgaMoHPmrDV9Nvme6A2scLj05Aa0K6RO+RDfvwOiMljQmTkz0c6cbjUX//YMwgH38bti+2DkYB/ucoQoHU1QNkjs1PPxSiiCV0ZMaJ7Lnau9YqYxk7iS94LiexMgtgUaI+7/oDnigs9uUTy+z77HORCVwozi0C1HVbbWzIomWWH6CsKIFk0SMzz9n9LYmj6+ZtSearqpSM/NSRrnIvicIs1dRg+vtSkLN2swLmU/Nnm/nAmt5PNcxXuW6Q3Fa2beGoRmQpz48lJ4qzIIy8c+RRp/0PRd0xnF38czMcjRxutNs+B0/41LVxdwHuM8048Q5jfib+n0m0ZKz9ebHjM9aXoEYWx/PTQETGLhZz+Dc0dHIFREUxDSfKj02ZQ0/WgIGoOTiI9DBqkcXjuHDq81fRTtoVxgfCaJE1uMILEtLQLRJDQE58riUpLyZ8rENObnnzNdZroVjjeneV5qwgRnH+Qq034Ie6NztJLvDSXPYyFQ9GhTrmhY+WxtkWe6VoufuwHOzdEEYnv5OIT95lvQfdhR6p/STjkf7zTthbEDIWIHcrZpLtqjVjHjPBU0r8aIw7lM91tMx6Ahw+lNmhNYgNDhnlyoU+2l2qw3jHR4vtL0c4T5qacQool7mjZp9rTp9wjL3TmyxU58NEqaqTLKtlE2BsXlPH83XWO6GmGF73Dps25pYkHhb2LHmxOJnMHlfbFOQLtjHs0ik7wyYprFgs85pL8hVEizECJ441bsNrmQxPticSk212KdZJpuOgrt0TuZZHxEczBacPUuI8bdCH0+7g3ZkHyuUfwfh/SKqT1n13AAAAAASUVORK5CYII=",wY="/assets/Fashion-71a7f00e.png",SY="/assets/Computer-be5aa3f3.png",CY="/assets/Food (1)-e1af81f4.png",PY=()=>m(_Y,{children:[s(rt,{}),m(OY,{children:[m(Uu,{to:"/seller-dashboard/uploading",children:[s(zu,{src:$Y}),s("span",{children:"Mobiles"})]}),m(Uu,{to:"/seller-dashboard/upload-cloths",children:[s(zu,{src:wY}),s("span",{children:"Clothings"})]}),m(Uu,{to:"/seller-dashboard/upload-electronics",children:[s(zu,{src:SY}),s("span",{children:"Electronics"})]}),m(Uu,{to:"/seller-dashboard/upload-foods",children:[s(zu,{src:CY}),s("span",{children:"Foods And Groceries"})]})]})]}),zu=f.img`

`,Uu=f(ke)`
  width: 360px;
  height: 365px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  background: rgba(47, 128, 237, 0.37);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  text-decoration: none;
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
`,OY=f.div`
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
`,_Y=f.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`,kY=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(""),[c,h]=C.useState(""),[g,x]=C.useState(""),[v,$]=C.useState(""),[w,y]=C.useState(""),[p,b]=C.useState(""),[S,P]=C.useState(""),[_,T]=C.useState(),[R,W]=C.useState("phone"),[z,ie]=C.useState(!1),M=nt(),j=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);t(U),l(E)},J=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);r(U),d(E)},F=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);o(U),h(E)},X=$t({mutationFn:tD,onSuccess:()=>{M("/seller-dashboard/variation")},onError:N=>{alert(N.message)}}),te=JSON.parse(localStorage.getItem("user"));return m(FY,{children:[s(rt,{}),m(RY,{onSubmit:N=>{N.preventDefault();const E=te._id;(g.length==0||w.length==0||v.length==0||S.length==0||p.length==0||!_||a.length==0||u.length==0)&&(ie(!0),alert("All inputs most be filed "));const U=new FormData;U.append("name",g),U.append("ram",w),U.append("condition",p),U.append("brand",v),U.append("description",S),U.append("category",R),U.append("price",_),c&&U.append("avatar",a),u&&U.append("avatar",u),c&&U.append("avatar",c),X.mutate({id:E,formData:U})},children:[m(AY,{children:[s("span",{children:"Upload Product Image *"}),m(TY,{children:[m(Y0,{style:z?{border:"1px solid red"}:null,children:[a?null:s(H0,{fontSize:"25px"}),s(B0,{type:"file",onChange:j}),a?s(W0,{src:e}):null]}),m(Y0,{style:z?{border:"1px solid red"}:null,children:[u?null:s(H0,{fontSize:"25px"}),s(B0,{type:"file",onChange:J}),u?s(W0,{src:n}):null]}),m(Y0,{children:[c?null:s(H0,{fontSize:"25px"}),s(B0,{type:"file",onChange:F}),c?s(W0,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),m(IY,{children:[m(_o,{children:[s(No,{children:"Name*"}),m(ko,{children:[s("input",{placeholder:"name",value:g,onChange:N=>x(N.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),m(_o,{children:[s(No,{children:"Brand*"}),m(ko,{children:[s("input",{placeholder:"brand",value:v,onChange:N=>$(N.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),m(_o,{children:[s(No,{children:"RAM*"}),m(ko,{children:[s("input",{placeholder:"RAM",value:w,onChange:N=>y(N.target.value)}),s("span",{children:"kindly specify RAM of product"})]})]}),m(_o,{children:[s(No,{children:"Price*"}),m(ko,{children:[s("input",{placeholder:"price",type:"number",value:_,onChange:N=>T(N.target.value)}),s("span",{children:"kindly specify RAM of product"})]})]}),m(_o,{children:[s(No,{children:"Condition*"}),m(ko,{children:[m("select",{placeholder:"Select condition",value:p,onChange:N=>b(N.target.value),children:[s("option",{children:"Select Condition"}),s("option",{children:"New"}),s("option",{children:"Used"})]}),s("span",{children:"kindly specify condition of product"})]})]}),m(_o,{children:[s(No,{children:"Description*"}),m(ko,{children:[s("textarea",{placeholder:"description",value:S,onChange:N=>P(N.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s(EY,{children:s(NY,{type:"submit",disabled:X.status==="loading",children:X.status==="loading"?"Loading...":"Enter Product Variation"})})]})]})},B0=f.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,H0=f(Df)`
  font-size: 25px;
  position: absolute;
`,W0=f.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,NY=f.button`
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
`,EY=f.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,_o=f.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,ko=f.div`
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

  @media (max-width: 680px){
    width: 100%;
  }
`,No=f.div`
  font-size: 15px;
  font-weight: 500;
`,IY=f.div`
  width: 100%;
`,TY=f.div`
  display: flex;
  padding: 10px 0;
`,Y0=f.label`
  width: 200px;
    height: 200px;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

  @media (max-width: 450px){
    height: 100px;
  }
`,AY=f.div`
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
`,RY=f.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,FY=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,DY=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(!0),c=nt(),h=JSON.parse(localStorage.getItem("product")),g=$t({mutationFn:oD,onSuccess:()=>{c("/seller-dashboard/success")},onError:v=>{console.log(v.message),alert(v.message)}});return m(BY,{children:[s(rt,{}),m(UY,{onSubmit:v=>{v.preventDefault();const $=h._id;g.mutate({id:$,tag_No:e,quantity:n,startDate:i,endDate:a,active:u})},children:[s(MY,{children:"Product Variation"}),m(zY,{children:[m(Bu,{children:[s(Wu,{children:"TAG No.*"}),m(Hu,{children:[s("input",{placeholder:"C1000",value:e,onChange:v=>t(v.target.value)}),s("span",{children:"kindly a unique number"})]})]}),m(Bu,{children:[s(Wu,{children:"Qty*"}),s(Hu,{children:s("input",{placeholder:"2",type:"number",value:n,onChange:v=>r(v.target.value)})})]}),m(Bu,{children:[s(Wu,{children:"start date*"}),s(Hu,{children:s("input",{placeholder:"11/01/23",type:"date",value:i,onChange:v=>o(v.target.value)})})]}),m(Bu,{children:[s(Wu,{children:"End date*"}),s(Hu,{children:s("input",{placeholder:"26/09/23",type:"date",value:a,onChange:v=>l(v.target.value)})})]})]}),s(LY,{children:s(jY,{type:"submit",disabled:g.status==="loading",children:g.status==="loading"?"Loading...":"Upload"})})]})]})},MY=f.div`
  padding: 7px 15px;
  font-size: 12px;
  font-weight: 500;
`,jY=f.button`
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
`,LY=f.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,Bu=f.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,Hu=f.div`
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

  @media (max-width: 680px){
    width: 100%;
  }
`,Wu=f.div`
  font-size: 15px;
  font-weight: 500;
`,zY=f.div`
  width: 100%;
`,UY=f.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,BY=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,HY=()=>s(WY,{children:m(YY,{children:[s(VY,{children:s(jl,{fontSize:"50px",color:"green"})}),m(GY,{children:["You have successfully",s("br",{})," uploaded an item, your ",s("br",{})," product will be approved soon."]}),s(qY,{to:"/seller-dashboard",children:s("button",{children:"Dashboard"})})]})}),WY=f.div`
  width: 100%;
  height: 42vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`,YY=f.div`
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
`,VY=f.div``,qY=f(lf)`
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
`,GY=f.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,QY=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="delivered"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[g,x]=C.useState(""),v=["order_No","delivery_status"],w=(p=>{const b=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?b!=null&&b.length?b:null:p})(c);var y=Intl.NumberFormat();return m(ZY,{children:[s(rt,{}),s(JY,{children:s(XY,{children:"Delivered"})}),s(KY,{children:m(tV,{children:[m(eV,{children:[s(Io,{children:s(Eo,{children:"Order Number "})}),s(Io,{children:s(Eo,{children:"Pending Days"})}),s(Io,{children:s(Eo,{children:"Order Date"})}),s(Io,{children:s(Eo,{children:"Price"})}),s(Io,{children:s(Eo,{children:"Payment Method"})}),s(Io,{children:s(Eo,{children:"Status "})})]}),w==null?void 0:w.map((p,b)=>s(Fr,{index:b,delivery_status:p.delivery_status,order_No:p.order_No,created:ee(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:y.format(p.price)},b))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};f.div`
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
`;const KY=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,ZY=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,JY=f.div`
width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,XY=f.div`
  border-bottom: 2px solid blue;
`,Eo=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Io=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,eV=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,tV=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,nV=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="cancelled"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[g,x]=C.useState(""),v=["order_No","delivery_status"],w=(p=>{const b=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?b!=null&&b.length?b:null:p})(c);var y=Intl.NumberFormat();return m(iV,{children:[s(rt,{}),s(oV,{children:s(aV,{children:"Cancelled"})}),s(rV,{children:m(lV,{children:[m(sV,{children:[s(Ao,{children:s(To,{children:"Order Number "})}),s(Ao,{children:s(To,{children:"Pending Days"})}),s(Ao,{children:s(To,{children:"Order Date"})}),s(Ao,{children:s(To,{children:"Price"})}),s(Ao,{children:s(To,{children:"Payment Method"})}),s(Ao,{children:s(To,{children:"Status "})})]}),w==null?void 0:w.map((p,b)=>s(Fr,{index:b,delivery_status:p.delivery_status,order_No:p.order_No,created:ee(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:y.format(p.price)},b))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};f.div`
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
`;const rV=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,iV=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,oV=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,aV=f.div`
  border-bottom: 2px solid blue;
`,To=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Ao=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,sV=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,lV=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,uV=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="failed"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[g,x]=C.useState(""),v=["order_No","delivery_status"],w=(p=>{const b=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?b!=null&&b.length?b:null:p})(c);var y=Intl.NumberFormat();return m(cV,{children:[s(rt,{}),s(fV,{children:s(hV,{children:"Failed"})}),s(dV,{children:m(gV,{children:[m(pV,{children:[s(Fo,{children:s(Ro,{children:"Order Number "})}),s(Fo,{children:s(Ro,{children:"Pending Days"})}),s(Fo,{children:s(Ro,{children:"Order Date"})}),s(Fo,{children:s(Ro,{children:"Price"})}),s(Fo,{children:s(Ro,{children:"Payment Method"})}),s(Fo,{children:s(Ro,{children:"Status "})})]}),w==null?void 0:w.map((p,b)=>s(Fr,{index:b,delivery_status:p.delivery_status,order_No:p.order_No,created:ee(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:y.format(p.price)},b))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};f.div`
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
`;const dV=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,cV=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,fV=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,hV=f.div`
  border-bottom: 2px solid blue;
`,Ro=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Fo=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,pV=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,gV=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,mV=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="returned"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[g,x]=C.useState(""),v=["order_No","delivery_status"],w=(p=>{const b=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?b!=null&&b.length?b:null:p})(c);var y=Intl.NumberFormat();return m(vV,{children:[s(rt,{}),s(xV,{children:s(bV,{children:"Returned"})}),s(yV,{children:m(wV,{children:[m($V,{children:[s(Mo,{children:s(Do,{children:"Order Number "})}),s(Mo,{children:s(Do,{children:"Pending Days"})}),s(Mo,{children:s(Do,{children:"Order Date"})}),s(Mo,{children:s(Do,{children:"Price"})}),s(Mo,{children:s(Do,{children:"Payment Method"})}),s(Mo,{children:s(Do,{children:"Status "})})]}),w==null?void 0:w.map((p,b)=>s(Fr,{index:b,delivery_status:p.delivery_status,order_No:p.order_No,created:ee(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:y.format(p.price)},b))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};f.div`
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
`;const yV=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,vV=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,xV=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,bV=f.div`
  border-bottom: 2px solid blue;
`,Do=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Mo=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,$V=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,wV=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,SV=()=>{const[e,t]=C.useState(),[n,r]=C.useState(),[i,o]=C.useState(),[a,l]=C.useState(""),[u,d]=C.useState(""),[c,h]=C.useState(""),[g,x]=C.useState(""),[v,$]=C.useState(""),[w,y]=C.useState(""),[p,b]=C.useState(""),[S,P]=C.useState(""),[_,T]=C.useState(),[R,W]=C.useState(!1),[z,ie]=C.useState("clothing"),M=nt(),j=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);t(U),l(E)},J=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);r(U),d(E)},F=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);o(U),h(E)},X=$t({mutationFn:nD,onSuccess:()=>{M("/seller-dashboard/variation")},onError:N=>{console.log(N.message)}}),te=JSON.parse(localStorage.getItem("user"));return console.log(g.length),m(EV,{children:[s(rt,{}),m(NV,{onSubmit:N=>{N.preventDefault();const E=te._id;(g.length==0||w.length==0||p.length==0||v.length==0||S.length==0||!_||a.length==0||u.length==0)&&(W(!0),alert("All inputs most be filed "));const U=new FormData;U.append("name",g),U.append("type",w),U.append("gender",p),U.append("brand",v),U.append("description",S),U.append("price",_),U.append("category",z),a&&U.append("avatar",a),u&&U.append("avatar",u),c&&U.append("avatar",c),X.mutate({id:E,formData:U})},children:[m(kV,{children:[s("span",{children:"Upload Product Image *"}),m(_V,{children:[m(Q0,{style:R?{border:"1px solid red"}:null,children:[a?null:s(q0,{fontSize:"25px"}),s(V0,{type:"file",onChange:j}),a?s(G0,{src:e}):null]}),m(Q0,{style:R?{border:"1px solid red"}:null,children:[u?null:s(q0,{fontSize:"25px"}),s(V0,{type:"file",onChange:J}),u?s(G0,{src:n}):null]}),m(Q0,{children:[c?null:s(q0,{fontSize:"25px"}),s(V0,{type:"file",onChange:F}),c?s(G0,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),m(OV,{children:[m(jo,{children:[s(zo,{children:"Name*"}),m(Lo,{children:[s("input",{placeholder:"name",value:g,onChange:N=>x(N.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),m(jo,{children:[s(zo,{children:"Brand*"}),m(Lo,{children:[s("input",{placeholder:"brand",value:v,onChange:N=>$(N.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),m(jo,{children:[s(zo,{children:"Type*"}),m(Lo,{children:[s("input",{placeholder:"type",value:w,onChange:N=>y(N.target.value)}),s("span",{children:"kindly specify type of product"})]})]}),m(jo,{children:[s(zo,{children:"Gender*"}),m(Lo,{children:[m("select",{placeholder:"Select condition",value:p,onChange:N=>b(N.target.value),children:[s("option",{children:"Select Gender"}),s("option",{children:"Male"}),s("option",{children:"Female"})]}),s("span",{children:"kindly specify gender of product"})]})]}),m(jo,{children:[s(zo,{children:"Price*"}),m(Lo,{children:[s("input",{placeholder:"Price",value:_,onChange:N=>T(N.target.value)}),s("span",{children:"kindly specify price of product"})]})]}),m(jo,{children:[s(zo,{children:"Description*"}),m(Lo,{children:[s("textarea",{placeholder:"description",value:S,onChange:N=>P(N.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s(PV,{children:s(CV,{type:"submit",disabled:X.status==="loading",children:X.status==="loading"?"Loading...":"Enter Product Variation"})})]})]})},V0=f.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,q0=f(Df)`
  font-size: 25px;
  position: absolute;
`,G0=f.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,CV=f.button`
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
`,PV=f.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,jo=f.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,Lo=f.div`
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

  @media (max-width: 680px){
    width: 100%;
  }
`,zo=f.div`
  font-size: 15px;
  font-weight: 500;
`,OV=f.div`
  width: 100%;
`,_V=f.div`
  display: flex;
  padding: 10px 0;
`,Q0=f.label`
  width: 200px;
    height: 200px;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

  @media (max-width: 450px){
    height: 100px;
  }
`,kV=f.div`
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
`,NV=f.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,EV=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,IV=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(""),[c,h]=C.useState(""),[g,x]=C.useState(""),[v,$]=C.useState(""),[w,y]=C.useState(""),[p,b]=C.useState(""),[S,P]=C.useState(""),[_,T]=C.useState(),[R,W]=C.useState("electronics"),[z,ie]=C.useState(!1),M=nt(),j=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);t(U),l(E)},J=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);r(U),d(E)},F=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);o(U),h(E)},X=$t({mutationFn:rD,onSuccess:()=>{M("/seller-dashboard/variation")},onError:N=>{console.log(N.message)}}),te=JSON.parse(localStorage.getItem("user"));return m(jV,{children:[s(rt,{}),m(MV,{onSubmit:N=>{N.preventDefault();const E=te._id;(g.length==0||w.length==0||p.length==0||v.length==0||S.length==0||!_||a.length==0||u.length==0)&&(ie(!0),alert("All inputs most be filed "));const U=new FormData;U.append("name",g),U.append("model",w),U.append("condition",p),U.append("brand",v),U.append("description",S),U.append("price",_),U.append("category",R),a&&U.append("avatar",a),u&&U.append("avatar",u),c&&U.append("avatar",c),X.mutate({id:E,formData:U})},children:[m(DV,{children:[s("span",{children:"Upload Product Image *"}),m(FV,{children:[m(X0,{style:z?{border:"1px solid red"}:null,children:[a?null:s(Z0,{fontSize:"25px"}),s(K0,{type:"file",onChange:j}),a?s(J0,{src:e}):null]}),m(X0,{style:z?{border:"1px solid red"}:null,children:[u?null:s(Z0,{fontSize:"25px"}),s(K0,{type:"file",onChange:J}),u?s(J0,{src:n}):null]}),m(X0,{children:[c?null:s(Z0,{fontSize:"25px"}),s(K0,{type:"file",onChange:F}),c?s(J0,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),m(RV,{children:[m(Uo,{children:[s(Ho,{children:"Name*"}),m(Bo,{children:[s("input",{placeholder:"name",value:g,onChange:N=>x(N.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),m(Uo,{children:[s(Ho,{children:"Brand*"}),m(Bo,{children:[s("input",{placeholder:"brand",value:v,onChange:N=>$(N.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),m(Uo,{children:[s(Ho,{children:"Model*"}),m(Bo,{children:[s("input",{placeholder:"type",value:w,onChange:N=>y(N.target.value)}),s("span",{children:"kindly specify type of product"})]})]}),m(Uo,{children:[s(Ho,{children:"Condition*"}),m(Bo,{children:[m("select",{placeholder:"Select condition",value:p,onChange:N=>b(N.target.value),children:[s("option",{children:"Select Condition"}),s("option",{children:"New"}),s("option",{children:"Used"})]}),s("span",{children:"kindly specify condition of product"})]})]}),m(Uo,{children:[s(Ho,{children:"Price*"}),m(Bo,{children:[s("input",{placeholder:"Price",value:_,onChange:N=>T(N.target.value)}),s("span",{children:"kindly specify price of product"})]})]}),m(Uo,{children:[s(Ho,{children:"Description*"}),m(Bo,{children:[s("textarea",{placeholder:"description",value:S,onChange:N=>P(N.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s(AV,{children:s(TV,{type:"submit",disabled:X.status==="loading",children:X.status==="loading"?"Loading...":"Enter Product Variation"})})]})]})},K0=f.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,Z0=f(Df)`
  font-size: 25px;
  position: absolute;
`,J0=f.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,TV=f.button`
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
`,AV=f.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,Uo=f.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,Bo=f.div`
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

  @media (max-width: 680px){
    width: 100%;
  }
`,Ho=f.div`
  font-size: 15px;
  font-weight: 500;
`,RV=f.div`
  width: 100%;
`,FV=f.div`
  display: flex;
  padding: 10px 0;
`,X0=f.label`
  width: 200px;
    height: 200px;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

  @media (max-width: 450px){
    height: 100px;
  }
`,DV=f.div`
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
`,MV=f.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,jV=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,LV=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(""),[c,h]=C.useState(""),[g,x]=C.useState(""),[v,$]=C.useState(""),[w,y]=C.useState(""),[p,b]=C.useState(),[S,P]=C.useState("food"),[_,T]=C.useState(!1),R=nt(),W=F=>{const X=F.target.files[0],te=URL.createObjectURL(X);t(te),l(X)},z=F=>{const X=F.target.files[0],te=URL.createObjectURL(X);r(te),d(X)},ie=F=>{const X=F.target.files[0],te=URL.createObjectURL(X);o(te),h(X)},M=$t({mutationFn:iD,onSuccess:()=>{R("/seller-dashboard/variation")},onError:F=>{console.log(F.message)}}),j=JSON.parse(localStorage.getItem("user"));return m(VV,{children:[s(rt,{}),m(YV,{onSubmit:F=>{F.preventDefault();const X=j._id;(g.length==0||v.length==0||w.length==0||!p||a.length==0||u.length==0)&&(T(!0),alert("All inputs most be filed "));const te=new FormData;te.append("name",g),te.append("brand",v),te.append("description",w),te.append("price",p),te.append("category",S),a&&te.append("avatar",a),u&&te.append("avatar",u),c&&te.append("avatar",c),M.mutate({id:X,formData:te})},children:[m(WV,{children:[s("span",{children:"Upload Product Image *"}),m(HV,{children:[m(rp,{style:_?{border:"1px solid red"}:null,children:[a?null:s(tp,{fontSize:"25px"}),s(ep,{type:"file",onChange:W}),a?s(np,{src:e}):null]}),m(rp,{style:_?{border:"1px solid red"}:null,children:[u?null:s(tp,{fontSize:"25px"}),s(ep,{type:"file",onChange:z}),u?s(np,{src:n}):null]}),m(rp,{children:[c?null:s(tp,{fontSize:"25px"}),s(ep,{type:"file",onChange:ie}),c?s(np,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),m(BV,{children:[m(Yu,{children:[s(qu,{children:"Name*"}),m(Vu,{children:[s("input",{placeholder:"name",value:g,onChange:F=>x(F.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),m(Yu,{children:[s(qu,{children:"Brand*"}),m(Vu,{children:[s("input",{placeholder:"brand",value:v,onChange:F=>$(F.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),m(Yu,{children:[s(qu,{children:"Price*"}),m(Vu,{children:[s("input",{placeholder:"Price",value:p,onChange:F=>b(F.target.value)}),s("span",{children:"kindly specify price of product"})]})]}),m(Yu,{children:[s(qu,{children:"Description*"}),m(Vu,{children:[s("textarea",{placeholder:"description",value:w,onChange:F=>y(F.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s(UV,{children:s(zV,{type:"submit",disabled:M.status==="loading",children:M.status==="loading"?"Loading...":"Enter Product Variation"})})]})]})},ep=f.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,tp=f(Df)`
  font-size: 25px;
  position: absolute;
`,np=f.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,zV=f.button`
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
`,UV=f.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,Yu=f.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,Vu=f.div`
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

  @media (max-width: 680px){
    width: 100%;
  }
`,qu=f.div`
  font-size: 15px;
  font-weight: 500;
`,BV=f.div`
  width: 100%;
`,HV=f.div`
  display: flex;
  padding: 10px 0;
`,rp=f.label`
  width: 200px;
    height: 200px;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

  @media (max-width: 450px){
    height: 100px;
  }
`,WV=f.div`
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
`,YV=f.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,VV=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,qV=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(y=>{var b;return((b=y==null?void 0:y.products)==null?void 0:b.filter(S=>S.sellerID===t)).length>0}),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),c=({selected:y})=>{o(y)},[h,g]=C.useState(""),x=["order_No","delivery_status"],v=y=>{const p=y==null?void 0:y.filter(b=>x.some(S=>{const P=b[S];return typeof P=="string"&&P.toLowerCase().includes(h)}));return h?p!=null&&p.length?p:null:y},$=v(d);var w=Intl.NumberFormat();return m(KV,{children:[s(rt,{}),m(QV,{children:[m(ZV,{children:[s(JV,{children:"Transactions"}),m(GV,{children:[s("input",{placeholder:"Search by name or brand",value:h,onChange:y=>g(y.target.value)}),s("button",{onClick:v,children:s(Ka,{})})]})]}),m(eq,{children:[m(XV,{children:[s(Li,{children:s(ji,{children:"Date"})}),s(Li,{children:s(ji,{children:"Tag"})}),s(Li,{children:s(ji,{children:"Product"})}),s(Li,{children:s(ji,{children:"Price"})}),s(Li,{children:s(ji,{children:"QTY"})}),s(Li,{children:s(ji,{children:"Amount "})}),s(Li,{children:s(ji,{children:"Action "})})]}),$==null?void 0:$.map((y,p)=>s(Fr,{index:p,delivery_status:y.delivery_status,order_No:y.order_No,created:ee(y.createdAt).format("D MMM YYYY"),payment_method:y.payment_method,pending_days:y.pending_days,price:w.format(y.price)},p))]})]}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:c,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})},GV=f.div`
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
`,QV=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,KV=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,ZV=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,JV=f.div`
  border-bottom: 2px solid blue;
`,ji=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Li=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,XV=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,eq=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,tq=()=>s(aq,{children:m(oq,{children:[m(iq,{children:[s("img",{src:"/Frame 113.png"}),s("span",{children:"Manel"})]}),m(nq,{children:[s(rq,{children:"Account Info"}),m(op,{children:[m("span",{children:[" ",s(_j,{fontSize:"18px"})]}),s(ip,{children:"Manel"})]}),m(op,{children:[m("span",{children:[" ",s(Cj,{fontSize:"18px"})]}),s(ip,{children:"Manel@test.com"})]}),m(op,{children:[m("span",{children:[" ",s(Oj,{fontSize:"18px"})]}),s(ip,{children:"09012075964"})]})]})]})}),ip=f.div`
  cursor: pointer;
  margin-bottom: 8px;
`,op=f.div`
  /* width: 200px; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 400;
  font-size: 13px;
  span {
    margin-right: 7px;
    padding: 5px 0;
  }
  /* background-color: red; */
`,nq=f.div`
  font-weight: 500;
  font-size: 14px;
  margin-left: 18px;
`,rq=f.div`
  padding: 7px 0;
`,iq=f.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  width: 100px;
  padding: 20px 0;

  img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    padding: 5px 10px;
  }
`,oq=f.div`
  width: 99%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,aq=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,sq=()=>s(dq,{children:m(uq,{children:[s(lq,{children:"Settings"}),s(tq,{})]})}),lq=f.div`
  font-size: 15px;
  font-weight: 700;
  padding: 8px 0;
`,uq=f.div`
  width: 95%;
`,dq=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,cq=()=>{const[e,t]=C.useState();return s(pq,{children:m(yq,{children:[s(mq,{children:s(gq,{children:" Personal Details"})}),m(vq,{children:[s(fq,{children:m(lp,{children:[s(sp,{children:"First Name"}),s(ap,{children:s(t4,{placeholder:"First Name"})})]})}),m(hq,{children:[m(lp,{children:[s(sp,{children:"Last Name"}),s(ap,{children:s(t4,{placeholder:"Last Name"})})]}),m(lp,{children:[s(sp,{children:"Country"}),s(ap,{children:s(Nm,{className:"phone",defaultCountry:"NG",placeholder:"Country",value:e,onChange:t})})]})]})]})]})})},fq=f.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,hq=f.div`
  flex-direction: column;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`,pq=f.div`
  /* background-color: #1e1b1b; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 20px; */
`,gq=f.div`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  /* margin-bottom: 20px; */
  /* border-bottom: 1.9px solid grey; */
  padding: 0 24px;
`,mq=f.div`
  width: 100%;
  border-bottom: 1.9px solid grey;
  padding: 4px 0;
  display: flex;
  align-items: center;
  /* background-color: red; */
  justify-content: flex-start;
`,yq=f.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
  flex-wrap: wrap;
`;f.button`
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
`;f.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`;f.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;const ap=f.div`
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
`,t4=f.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,sp=f.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,lp=f.div`
    margin-bottom: 10px;
`,vq=f.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,xq=()=>(C.useState(),s(wq,{children:m(Pq,{children:[s(Cq,{children:s(Sq,{children:" Change Password"})}),m(_q,{children:[m(bq,{children:[m(fp,{children:[s(cp,{children:"Current Password"}),s(up,{children:s(dp,{placeholder:"Current Password"})})]}),m(fp,{children:[s(cp,{children:"New Password"}),s(up,{children:s(dp,{placeholder:"New Password"})})]})]}),m($q,{children:[m(fp,{children:[s(cp,{children:"Confirm New Password"}),s(up,{children:s(dp,{placeholder:"Confirm New Password"})})]}),s(Oq,{children:"Save Password"})]})]})]})})),bq=f.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,$q=f.div`
  flex-direction: column;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`,wq=f.div`
  /* background-color: #1e1b1b; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 20px; */
`,Sq=f.div`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  /* margin-bottom: 20px; */
  /* border-bottom: 1.9px solid grey; */
  padding: 0 24px;
`,Cq=f.div`
  width: 100%;
  border-bottom: 1.9px solid grey;
  padding: 4px 0;
  display: flex;
  align-items: center;
  /* background-color: red; */
  justify-content: flex-start;
`,Pq=f.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
  flex-wrap: wrap;
`,Oq=f.button`
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
`;f.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`;f.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;const up=f.div`
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
`,dp=f.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,cp=f.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,fp=f.div`
    margin-bottom: 10px;
`,_q=f.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,kq=()=>s("div",{children:m(Nq,{children:[s(rt,{}),s(sq,{}),s(cq,{}),s(xq,{})]})}),Nq=f.div`
  width: 100%;
  /* background-color: gold; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,Eq=()=>wm([{path:"/",children:[{index:!0,element:s(Ve,{children:s(XL,{})})},{path:"all-product",element:s(Ve,{children:s(fW,{})})},{path:"live-product",element:s(Ve,{children:s(bW,{})})},{path:"sold-product",element:s(Ve,{children:s(kW,{})})},{path:"rejected-product",element:s(Ve,{children:s(DW,{})})},{path:"all-orders",element:s(Ve,{children:s(qW,{})})},{path:"pending-orders",element:s(Ve,{children:s(eY,{})})},{path:"ready-to-ship",element:s(Ve,{children:s(sY,{})})},{path:"transactions",element:s(Ve,{children:s(qV,{})})},{path:"shipped",element:s(Ve,{children:s(pY,{})})},{path:"uploads",element:s(Ve,{children:s(PY,{})})},{path:"uploading",element:s(Ve,{children:s(kY,{})})},{path:"upload-cloths",element:s(Ve,{children:s(SV,{})})},{path:"upload-electronics",element:s(Ve,{children:s(IV,{})})},{path:"upload-foods",element:s(Ve,{children:s(LV,{})})},{path:"variation",element:s(Ve,{children:s(DY,{})})},{path:"success",element:s(Ve,{children:s(HY,{})})},{path:"delivered-orders",element:s(Ve,{children:s(QY,{})})},{path:"cancelled-orders",element:s(Ve,{children:s(nV,{})})},{path:"failed-orders",element:s(Ve,{children:s(uV,{})})},{path:"returned-orders",element:s(Ve,{children:s(mV,{})})},{path:"settings",element:s(Ve,{children:s(kq,{})})}]}]),Iq=()=>{C.useState(!1),C.useState(!1);const[e,t]=C.useState(!1);return JSON.parse(localStorage.getItem("user")),C.useRef(),console.log(e),s("div",{children:s(Tq,{children:m(Aq,{children:[m(Rq,{children:[s("img",{src:"/logo 1.png"}),s("div",{children:"Cross Africa"})]}),s(Fq,{to:"/seller-dashboard",children:"Dashboard"})]})})})},Tq=f.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #383333; */
  border-bottom: 1px solid lightgray;
`,Aq=f.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,Rq=f.div`
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
`,Fq=f(ke)`
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  color: black;
`,Dq=()=>m("div",{children:[s(Iq,{}),s(Eq,{})]}),Mq=()=>{var x,v,$,w,y,p;const[e,t]=C.useState(),[n,r]=C.useState(!0),i=n!==!0,o=nt(),a=Hl({firstName:Ot().required("This field cannot be empty"),lastName:Ot().required("This field cannot be empty"),email:Ot().email("this is not a valid email").required("This field cannot be empty"),phoneNum:Um().required("This field cannot be empty"),password:Ot().required("This field cannot be empty"),isAdmin:aw(),confirmPassword:Ot().oneOf([ow("password"),null],"Password must match")}).required(),{handleSubmit:l,formState:{errors:u},reset:d,register:c}=wf({resolver:Sf(a)}),h=$t({mutationKey:["createUser"],mutationFn:yI,onSuccess:b=>{console.log(b),o("/otp-user")},onError:b=>{alert(b.message)}}),g=l(b=>{b.isAdmin=!1,h.mutate(b)});return s("div",{children:s(Wq,{children:m(Hq,{children:[s(Bq,{children:"Create Account"}),s(Uq,{children:"Please enter every necessary information"}),m(zq,{onSubmit:g,children:[m(qo,{children:[s(Vo,{children:"First Name"}),s(Yo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(Cs,{placeholder:"First Name",...c("firstName")})}),s(Wo,{children:(u==null?void 0:u.firstName)&&((x=u==null?void 0:u.firstName)==null?void 0:x.message)})]}),m(qo,{children:[s(Vo,{children:"Last Name"}),s(Yo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(Cs,{placeholder:"Last Name",...c("lastName")})}),s(Wo,{children:(u==null?void 0:u.lastName)&&((v=u==null?void 0:u.lastName)==null?void 0:v.message)})]}),m(qo,{children:[s(Vo,{children:"Email Address"}),s(Yo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(Cs,{placeholder:"Email Address",...c("email")})}),s(Wo,{children:(u==null?void 0:u.email)&&(($=u==null?void 0:u.email)==null?void 0:$.message)})]}),m(qo,{children:[s(Vo,{children:"Phone Number"}),s(Yo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(Nm,{className:"phone",defaultCountry:"NG",...c("phoneNum"),placeholder:"Phone Number",value:e,onChange:t})}),s(Wo,{children:(u==null?void 0:u.phoneNum)&&((w=u==null?void 0:u.phoneNum)==null?void 0:w.message)})]}),m(qo,{children:[s(Vo,{children:"Password"}),m(Yo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:[s(Cs,{placeholder:"Password",type:n?"password":"text",id:"pass",...c("password")}),s(n4,{onClick:()=>{r(i)},children:n===!1?s(Fa,{}):s(Ra,{})})]}),s(Wo,{children:(u==null?void 0:u.password)&&((y=u==null?void 0:u.password)==null?void 0:y.message)})]}),m(qo,{children:[s(Vo,{children:"Confirm Password"}),m(Yo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:[s(Cs,{placeholder:"Confirm Password",type:n?"password":"text",id:"pass",...c("confirmPassword")}),s(n4,{onClick:()=>{r(i)},children:n===!1?s(Fa,{}):s(Ra,{})})]}),s(Wo,{children:(u==null?void 0:u.confirmPassword)&&((p=u==null?void 0:u.confirmPassword)==null?void 0:p.message)})]}),s(Lq,{type:"submit",disabled:h.status==="loading",children:h.status==="loading"?"Loading...":"Continue"}),m(jq,{children:["Already have an account?"," ",s(ke,{to:"/login-user",style:{textDecoration:"none"},children:s("span",{children:"LogIn"})})]})]})]})})})};f.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    width: 90%;

    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`;const jq=f.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,Lq=f.button`
    width: 360px;
    height: 40px;
    border: 0px;
    background-color: #ec00b1;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    margin: 20px;
    outline: none;

    @media (max-width: 370px){
        width: 300px;
        height: 30px;
        font-size: 16px;
    }
    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`,Wo=f.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`,n4=f.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,Yo=f.div`
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

    @media (max-width: 370px){
        width: 300px;
        height: 30px;
    }
    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`,Cs=f.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,Vo=f.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,qo=f.div`
    margin-bottom: 10px;
`,zq=f.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 370px){
        width: 350px;
    }
`,Uq=f.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 250px;
`,Bq=f.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
`,Hq=f.div`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
    /* border: 1px solid gray; */
    /* background-color: gold; */

    /* @media (max-width: 370px){
        width: 90%;
    } */
`,Wq=f.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,Yq=()=>{var h,g;const e=nt(),t=Hl({email:Ot().email("this is not a valid email").required("This field cannot be empty"),password:Ot().required("This field cannot be empty")}).required(),[n,r]=C.useState(!0),i=n!==!0,{handleSubmit:o,formState:{errors:a},reset:l,register:u}=wf({resolver:Sf(t)}),d=$t({mutationKey:["Admin"],mutationFn:vI,onSuccess:x=>{e("/")},onError:x=>{console.log(x.message)}}),c=o(x=>{d.mutate(x)});return s("div",{children:s(eG,{children:m(Xq,{children:[s(Jq,{children:"Create Account"}),s(Zq,{children:"Please enter every necessary information"}),m(Kq,{onSubmit:c,children:[m(s4,{children:[s(a4,{children:"Email Address"}),s(i4,{style:{border:`${a!=null&&a.email?"1px solid red":"1px solid lightgray"}`},children:s(o4,{placeholder:"Email Address",type:"email",...u("email")})}),s(r4,{children:(a==null?void 0:a.email)&&((h=a==null?void 0:a.email)==null?void 0:h.message)})]}),m(s4,{children:[s(a4,{children:"Password"}),m(i4,{style:{border:`${a!=null&&a.password?"1px solid red":"1px solid lightgray"}`},children:[s(o4,{placeholder:"Password",type:n?"password":"text",id:"pass",...u("password")}),s(Qq,{onClick:()=>{r(i)},children:n===!1?s(Fa,{}):s(Ra,{})})]}),s(r4,{children:(a==null?void 0:a.password)&&((g=a==null?void 0:a.password)==null?void 0:g.message)})]}),s(Vq,{children:"Forget Password?"}),s(Gq,{type:"submit",children:d.status==="loading"?"Loading...":"Log In"}),m(qq,{children:["Don't have an account? ",s(ke,{to:"/signup-user",style:{textDecoration:"none"},children:s("span",{children:"Sign Up"})})]})]})]})})})},Vq=f.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    width: 90%;

    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`,qq=f.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,Gq=f.button`
    width: 360px;
    height: 40px;
    border: 0px;
    background-color: #ec00b1;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    margin: 20px;
    outline: none;

    @media (max-width: 370px){
        width: 300px;
        height: 30px;
        font-size: 16px;
    }
    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`,r4=f.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`,Qq=f.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,i4=f.div`
    width: 350px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;

    @media (max-width: 370px){
        width: 300px;
        height: 30px;
    }
    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`,o4=f.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,a4=f.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,s4=f.div`
    margin-bottom: 10px;
`,Kq=f.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 370px){
        width: 350px;
    }
`,Zq=f.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 250px;
`,Jq=f.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
`,Xq=f.div`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
    /* border: 1px solid gray; */
    /* background-color: gold; */

    /* @media (max-width: 370px){
        width: 90%;
    } */
`,eG=f.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,tG=()=>{const e=nt(),[t,n]=C.useState(""),r=JSON.parse(localStorage.getItem("user")),i=$t({mutationFn:bI,onSuccess:()=>{e("/login-user")},onError:()=>{alert("Invalid OTP")}});return s(nG,{children:m(rG,{children:[s(iG,{children:"OTP Verification!"}),s(aG,{children:"Please enter the OTP you received"}),s(e6,{style:{border:"1px solid gold"},value:t,onChange:n,numInputs:6,renderSeparator:s("span",{children:" "}),renderInput:a=>s("input",{...a}),containerStyle:"containerStyle",inputStyle:"inputStyle",width:"70px"}),s(oG,{children:s("button",{onClick:()=>{const a=r==null?void 0:r._id;i.mutate({id:a,otp:t})},children:"Enter"})})]})})},nG=f.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`,rG=f.div`
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
`,iG=f.div`
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
`,oG=f.div`
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
`,aG=f.div`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
`;f.input`
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

`;const sG=()=>s("div",{children:m(qC,{children:[s(Bi,{path:"/*",element:s(DL,{})}),s(Bi,{path:"/signup-user",element:s(Mq,{})}),s(Bi,{path:"/login-user",element:s(Yq,{})}),s(Bi,{path:"/otp-user",element:s(tG,{})}),s(Bi,{path:"/seller-page",element:s(yP,{})}),s(Bi,{path:"/seller-dashboard/*",element:s(Ve,{children:s(Dq,{})})})]})}),lG="modulepreload",uG=function(e){return"/"+e},l4={},dG=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=uG(o),o in l4)return;l4[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const h=i[c];if(h.href===o&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":lG,a||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),a)return new Promise((c,h)=>{d.addEventListener("load",c),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},cG=e=>{e&&e instanceof Function&&dG(()=>import("./web-vitals-60d3425a.js"),[]).then(({getCLS:t,getFID:n,getFCP:r,getLCP:i,getTTFB:o})=>{t(e),n(e),r(e),i(e),o(e)})},fG=function(){return null};var ky="persist:",Ny="persist/FLUSH",Kf="persist/REHYDRATE",Ey="persist/PAUSE",Iy="persist/PERSIST",Ty="persist/PURGE",Ay="persist/REGISTER",hG=-1;function xd(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xd=function(n){return typeof n}:xd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},xd(e)}function u4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function pG(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?u4(n,!0).forEach(function(r){gG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u4(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gG(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mG(e,t,n,r){r.debug;var i=pG({},n);return e&&xd(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function yG(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:ky).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(P){return P}:typeof e.serialize=="function"?l=e.serialize:l=vG;var u=e.writeFailHandler||null,d={},c={},h=[],g=null,x=null,v=function(P){Object.keys(P).forEach(function(_){y(_)&&d[_]!==P[_]&&h.indexOf(_)===-1&&h.push(_)}),Object.keys(d).forEach(function(_){P[_]===void 0&&y(_)&&h.indexOf(_)===-1&&d[_]!==void 0&&h.push(_)}),g===null&&(g=setInterval($,i)),d=P};function $(){if(h.length===0){g&&clearInterval(g),g=null;return}var S=h.shift(),P=r.reduce(function(_,T){return T.in(_,S,d)},d[S]);if(P!==void 0)try{c[S]=l(P)}catch(_){console.error("redux-persist/createPersistoid: error serializing state",_)}else delete c[S];h.length===0&&w()}function w(){Object.keys(c).forEach(function(S){d[S]===void 0&&delete c[S]}),x=a.setItem(o,l(c)).catch(p)}function y(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function p(S){u&&u(S)}var b=function(){for(;h.length!==0;)$();return x||Promise.resolve()};return{update:v,flush:b}}function vG(e){return JSON.stringify(e)}function xG(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:ky).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=bG,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(u){a[u]=t.reduceRight(function(d,c){return c.out(d,u,l)},i(l[u]))}),a}catch(u){throw u}else return})}function bG(e){return JSON.parse(e)}function $G(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:ky).concat(e.key);return t.removeItem(n,wG)}function wG(e){}function d4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ur(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?d4(n,!0).forEach(function(r){SG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d4(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function SG(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function CG(e,t){if(e==null)return{};var n=PG(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function PG(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var OG=5e3;function _G(e,t){var n=e.version!==void 0?e.version:hG;e.debug;var r=e.stateReconciler===void 0?mG:e.stateReconciler,i=e.getStoredState||xG,o=e.timeout!==void 0?e.timeout:OG,a=null,l=!1,u=!0,d=function(h){return h._persist.rehydrated&&a&&!u&&a.update(h),h};return function(c,h){var g=c||{},x=g._persist,v=CG(g,["_persist"]),$=v;if(h.type===Iy){var w=!1,y=function(R,W){w||(h.rehydrate(e.key,R,W),w=!0)};if(o&&setTimeout(function(){!w&&y(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),u=!1,a||(a=yG(e)),x)return ur({},t($,h),{_persist:x});if(typeof h.rehydrate!="function"||typeof h.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return h.register(e.key),i(e).then(function(T){var R=e.migrate||function(W,z){return Promise.resolve(W)};R(T,n).then(function(W){y(W)},function(W){y(void 0,W)})},function(T){y(void 0,T)}),ur({},t($,h),{_persist:{version:n,rehydrated:!1}})}else{if(h.type===Ty)return l=!0,h.result($G(e)),ur({},t($,h),{_persist:x});if(h.type===Ny)return h.result(a&&a.flush()),ur({},t($,h),{_persist:x});if(h.type===Ey)u=!0;else if(h.type===Kf){if(l)return ur({},$,{_persist:ur({},x,{rehydrated:!0})});if(h.key===e.key){var p=t($,h),b=h.payload,S=r!==!1&&b!==void 0?r(b,c,p,e):p,P=ur({},S,{_persist:ur({},x,{rehydrated:!0})});return d(P)}}}if(!x)return t(c,h);var _=t($,h);return _===$?c:d(ur({},_,{_persist:x}))}}function c4(e){return EG(e)||NG(e)||kG()}function kG(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function NG(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function EG(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function f4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function gg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?f4(n,!0).forEach(function(r){IG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f4(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function IG(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var V6={registry:[],bootstrapped:!1},TG=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V6,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Ay:return gg({},t,{registry:[].concat(c4(t.registry),[n.key])});case Kf:var r=t.registry.indexOf(n.key),i=c4(t.registry);return i.splice(r,1),gg({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function AG(e,t,n){var r=n||!1,i=iy(TG,V6,t&&t.enhancer?t.enhancer:void 0),o=function(d){i.dispatch({type:Ay,key:d})},a=function(d,c,h){var g={type:Kf,payload:c,err:h,key:d};e.dispatch(g),i.dispatch(g),r&&l.getState().bootstrapped&&(r(),r=!1)},l=gg({},i,{purge:function(){var d=[];return e.dispatch({type:Ty,result:function(h){d.push(h)}}),Promise.all(d)},flush:function(){var d=[];return e.dispatch({type:Ny,result:function(h){d.push(h)}}),Promise.all(d)},pause:function(){e.dispatch({type:Ey})},persist:function(){e.dispatch({type:Iy,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var Ry={},Fy={};Fy.__esModule=!0;Fy.default=DG;function bd(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?bd=function(n){return typeof n}:bd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},bd(e)}function hp(){}var RG={getItem:hp,setItem:hp,removeItem:hp};function FG(e){if((typeof self>"u"?"undefined":bd(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function DG(e){var t="".concat(e,"Storage");return FG(t)?self[t]:RG}Ry.__esModule=!0;Ry.default=LG;var MG=jG(Fy);function jG(e){return e&&e.__esModule?e:{default:e}}function LG(e){var t=(0,MG.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var q6=void 0,zG=UG(Ry);function UG(e){return e&&e.__esModule?e:{default:e}}var BG=(0,zG.default)("local");q6=BG;const HG={key:"root",version:1,storage:q6},WG=_G(HG,xF),G6=oF({reducer:{reducers:WG},middleware:e=>e({serializableCheck:{ignoredActions:[Ny,Kf,Ey,Iy,Ty,Ay]}})});function $d(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$d=function(n){return typeof n}:$d=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$d(e)}function YG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function VG(e,t,n){return t&&h4(e.prototype,t),n&&h4(e,n),e}function qG(e,t){return t&&($d(t)==="object"||typeof t=="function")?t:wd(e)}function mg(e){return mg=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},mg(e)}function wd(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function GG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&yg(e,t)}function yg(e,t){return yg=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},yg(e,t)}function Sd(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q6=function(e){GG(t,e);function t(){var n,r;YG(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=qG(this,(n=mg(t)).call.apply(n,[this].concat(o))),Sd(wd(r),"state",{bootstrapped:!1}),Sd(wd(r),"_unsubscribe",void 0),Sd(wd(r),"handlePersistorState",function(){var l=r.props.persistor,u=l.getState(),d=u.bootstrapped;d&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return VG(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(C.PureComponent);Sd(Q6,"defaultProps",{children:null,loading:null});const QG=new qT;let KG=AG(G6);const ZG=gp.createRoot(document.getElementById("root"));ZG.render(s(ne.StrictMode,{children:s(JC,{children:s(CR,{store:G6,children:s(Q6,{persistor:KG,children:m(sA,{client:QG,children:[s(sG,{}),s(fG,{})]})})})})}));cG()});export default JG();
