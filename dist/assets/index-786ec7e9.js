var q6=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var HG=q6((GG,wd)=>{function G6(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Q6=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function u4(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bs={},K6={get exports(){return Bs},set exports(e){Bs=e}},Nc={},C={},Z6={get exports(){return C},set exports(e){C=e}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wl=Symbol.for("react.element"),J6=Symbol.for("react.portal"),X6=Symbol.for("react.fragment"),e8=Symbol.for("react.strict_mode"),t8=Symbol.for("react.profiler"),n8=Symbol.for("react.provider"),r8=Symbol.for("react.context"),i8=Symbol.for("react.forward_ref"),o8=Symbol.for("react.suspense"),a8=Symbol.for("react.memo"),s8=Symbol.for("react.lazy"),Ay=Symbol.iterator;function l8(e){return e===null||typeof e!="object"?null:(e=Ay&&e[Ay]||e["@@iterator"],typeof e=="function"?e:null)}var d4={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},c4=Object.assign,f4={};function La(e,t,n){this.props=e,this.context=t,this.refs=f4,this.updater=n||d4}La.prototype.isReactComponent={};La.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};La.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function h4(){}h4.prototype=La.prototype;function hg(e,t,n){this.props=e,this.context=t,this.refs=f4,this.updater=n||d4}var pg=hg.prototype=new h4;pg.constructor=hg;c4(pg,La.prototype);pg.isPureReactComponent=!0;var Ry=Array.isArray,p4=Object.prototype.hasOwnProperty,gg={current:null},g4={key:!0,ref:!0,__self:!0,__source:!0};function m4(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)p4.call(t,r)&&!g4.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:wl,type:e,key:o,ref:a,props:i,_owner:gg.current}}function u8(e,t){return{$$typeof:wl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mg(e){return typeof e=="object"&&e!==null&&e.$$typeof===wl}function d8(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fy=/\/+/g;function Qf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?d8(""+e.key):t.toString(36)}function Vu(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case wl:case J6:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Qf(a,0):r,Ry(i)?(n="",e!=null&&(n=e.replace(Fy,"$&/")+"/"),Vu(i,t,n,"",function(d){return d})):i!=null&&(mg(i)&&(i=u8(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Fy,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Ry(e))for(var l=0;l<e.length;l++){o=e[l];var u=r+Qf(o,l);a+=Vu(o,t,n,u,i)}else if(u=l8(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=r+Qf(o,l++),a+=Vu(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Zl(e,t,n){if(e==null)return e;var r=[],i=0;return Vu(e,r,"","",function(o){return t.call(n,o,i++)}),r}function c8(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ft={current:null},qu={transition:null},f8={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:qu,ReactCurrentOwner:gg};be.Children={map:Zl,forEach:function(e,t,n){Zl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zl(e,function(){t++}),t},toArray:function(e){return Zl(e,function(t){return t})||[]},only:function(e){if(!mg(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};be.Component=La;be.Fragment=X6;be.Profiler=t8;be.PureComponent=hg;be.StrictMode=e8;be.Suspense=o8;be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f8;be.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=c4({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=gg.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)p4.call(t,u)&&!g4.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:wl,type:e.type,key:i,ref:o,props:r,_owner:a}};be.createContext=function(e){return e={$$typeof:r8,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:n8,_context:e},e.Consumer=e};be.createElement=m4;be.createFactory=function(e){var t=m4.bind(null,e);return t.type=e,t};be.createRef=function(){return{current:null}};be.forwardRef=function(e){return{$$typeof:i8,render:e}};be.isValidElement=mg;be.lazy=function(e){return{$$typeof:s8,_payload:{_status:-1,_result:e},_init:c8}};be.memo=function(e,t){return{$$typeof:a8,type:e,compare:t===void 0?null:t}};be.startTransition=function(e){var t=qu.transition;qu.transition={};try{e()}finally{qu.transition=t}};be.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};be.useCallback=function(e,t){return Ft.current.useCallback(e,t)};be.useContext=function(e){return Ft.current.useContext(e)};be.useDebugValue=function(){};be.useDeferredValue=function(e){return Ft.current.useDeferredValue(e)};be.useEffect=function(e,t){return Ft.current.useEffect(e,t)};be.useId=function(){return Ft.current.useId()};be.useImperativeHandle=function(e,t,n){return Ft.current.useImperativeHandle(e,t,n)};be.useInsertionEffect=function(e,t){return Ft.current.useInsertionEffect(e,t)};be.useLayoutEffect=function(e,t){return Ft.current.useLayoutEffect(e,t)};be.useMemo=function(e,t){return Ft.current.useMemo(e,t)};be.useReducer=function(e,t,n){return Ft.current.useReducer(e,t,n)};be.useRef=function(e){return Ft.current.useRef(e)};be.useState=function(e){return Ft.current.useState(e)};be.useSyncExternalStore=function(e,t,n){return Ft.current.useSyncExternalStore(e,t,n)};be.useTransition=function(){return Ft.current.useTransition()};be.version="18.2.0";(function(e){e.exports=be})(Z6);const ne=u4(C),up=G6({__proto__:null,default:ne},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h8=C,p8=Symbol.for("react.element"),g8=Symbol.for("react.fragment"),m8=Object.prototype.hasOwnProperty,y8=h8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v8={key:!0,ref:!0,__self:!0,__source:!0};function y4(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)m8.call(t,r)&&!v8.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:p8,type:e,key:o,ref:a,props:i,_owner:y8.current}}Nc.Fragment=g8;Nc.jsx=y4;Nc.jsxs=y4;(function(e){e.exports=Nc})(K6);const Hs=Bs.Fragment,s=Bs.jsx,y=Bs.jsxs;var dp={},Sd={},x8={get exports(){return Sd},set exports(e){Sd=e}},Jt={},cp={},b8={get exports(){return cp},set exports(e){cp=e}},v4={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,N){var E=L.length;L.push(N);e:for(;0<E;){var U=E-1>>>1,D=L[U];if(0<i(D,N))L[U]=N,L[E]=D,E=U;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var N=L[0],E=L.pop();if(E!==N){L[0]=E;e:for(var U=0,D=L.length,H=D>>>1;U<H;){var Y=2*(U+1)-1,oe=L[Y],k=Y+1,de=L[k];if(0>i(oe,E))k<D&&0>i(de,oe)?(L[U]=de,L[k]=E,U=k):(L[U]=oe,L[Y]=E,U=Y);else if(k<D&&0>i(de,E))L[U]=de,L[k]=E,U=k;else break e}}return N}function i(L,N){var E=L.sortIndex-N.sortIndex;return E!==0?E:L.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],d=[],c=1,h=null,g=3,b=!1,v=!1,w=!1,$=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var N=n(d);N!==null;){if(N.callback===null)r(d);else if(N.startTime<=L)r(d),N.sortIndex=N.expirationTime,t(u,N);else break;N=n(d)}}function S(L){if(w=!1,x(L),!v)if(n(u)!==null)v=!0,X(P);else{var N=n(d);N!==null&&te(S,N.startTime-L)}}function P(L,N){v=!1,w&&(w=!1,m(R),R=-1),b=!0;var E=g;try{for(x(N),h=n(u);h!==null&&(!(h.expirationTime>N)||L&&!ie());){var U=h.callback;if(typeof U=="function"){h.callback=null,g=h.priorityLevel;var D=U(h.expirationTime<=N);N=e.unstable_now(),typeof D=="function"?h.callback=D:h===n(u)&&r(u),x(N)}else r(u);h=n(u)}if(h!==null)var H=!0;else{var Y=n(d);Y!==null&&te(S,Y.startTime-N),H=!1}return H}finally{h=null,g=E,b=!1}}var _=!1,T=null,R=-1,W=5,z=-1;function ie(){return!(e.unstable_now()-z<W)}function M(){if(T!==null){var L=e.unstable_now();z=L;var N=!0;try{N=T(!0,L)}finally{N?j():(_=!1,T=null)}}else _=!1}var j;if(typeof p=="function")j=function(){p(M)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,F=J.port2;J.port1.onmessage=M,j=function(){F.postMessage(null)}}else j=function(){$(M,0)};function X(L){T=L,_||(_=!0,j())}function te(L,N){R=$(function(){L(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||b||(v=!0,X(P))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(L){switch(g){case 1:case 2:case 3:var N=3;break;default:N=g}var E=g;g=N;try{return L()}finally{g=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,N){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var E=g;g=L;try{return N()}finally{g=E}},e.unstable_scheduleCallback=function(L,N,E){var U=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?U+E:U):E=U,L){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=E+D,L={id:c++,callback:N,priorityLevel:L,startTime:E,expirationTime:D,sortIndex:-1},E>U?(L.sortIndex=E,t(d,L),n(u)===null&&L===n(d)&&(w?(m(R),R=-1):w=!0,te(S,E-U))):(L.sortIndex=D,t(u,L),v||b||(v=!0,X(P))),L},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(L){var N=g;return function(){var E=g;g=N;try{return L.apply(this,arguments)}finally{g=E}}}})(v4);(function(e){e.exports=v4})(b8);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x4=C,Kt=cp;function G(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b4=new Set,Ws={};function lo(e,t){Ca(e,t),Ca(e+"Capture",t)}function Ca(e,t){for(Ws[e]=t,e=0;e<t.length;e++)b4.add(t[e])}var Sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fp=Object.prototype.hasOwnProperty,$8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dy={},My={};function w8(e){return fp.call(My,e)?!0:fp.call(Dy,e)?!1:$8.test(e)?My[e]=!0:(Dy[e]=!0,!1)}function S8(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function C8(e,t,n,r){if(t===null||typeof t>"u"||S8(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Dt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){bt[e]=new Dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];bt[t]=new Dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){bt[e]=new Dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){bt[e]=new Dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){bt[e]=new Dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){bt[e]=new Dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){bt[e]=new Dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){bt[e]=new Dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){bt[e]=new Dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var yg=/[\-:]([a-z])/g;function vg(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yg,vg);bt[t]=new Dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yg,vg);bt[t]=new Dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yg,vg);bt[t]=new Dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){bt[e]=new Dt(e,1,!1,e.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){bt[e]=new Dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function xg(e,t,n,r){var i=bt.hasOwnProperty(t)?bt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(C8(t,n,i,r)&&(n=null),r||i===null?w8(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Er=x4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jl=Symbol.for("react.element"),Go=Symbol.for("react.portal"),Qo=Symbol.for("react.fragment"),bg=Symbol.for("react.strict_mode"),hp=Symbol.for("react.profiler"),$4=Symbol.for("react.provider"),w4=Symbol.for("react.context"),$g=Symbol.for("react.forward_ref"),pp=Symbol.for("react.suspense"),gp=Symbol.for("react.suspense_list"),wg=Symbol.for("react.memo"),Br=Symbol.for("react.lazy"),S4=Symbol.for("react.offscreen"),jy=Symbol.iterator;function Xa(e){return e===null||typeof e!="object"?null:(e=jy&&e[jy]||e["@@iterator"],typeof e=="function"?e:null)}var Qe=Object.assign,Kf;function Cs(e){if(Kf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Kf=t&&t[1]||""}return`
`+Kf+e}var Zf=!1;function Jf(e,t){if(!e||Zf)return"";Zf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{Zf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cs(e):""}function P8(e){switch(e.tag){case 5:return Cs(e.type);case 16:return Cs("Lazy");case 13:return Cs("Suspense");case 19:return Cs("SuspenseList");case 0:case 2:case 15:return e=Jf(e.type,!1),e;case 11:return e=Jf(e.type.render,!1),e;case 1:return e=Jf(e.type,!0),e;default:return""}}function mp(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qo:return"Fragment";case Go:return"Portal";case hp:return"Profiler";case bg:return"StrictMode";case pp:return"Suspense";case gp:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case w4:return(e.displayName||"Context")+".Consumer";case $4:return(e._context.displayName||"Context")+".Provider";case $g:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wg:return t=e.displayName||null,t!==null?t:mp(e.type)||"Memo";case Br:t=e._payload,e=e._init;try{return mp(e(t))}catch{}}return null}function O8(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mp(t);case 8:return t===bg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function C4(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _8(e){var t=C4(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xl(e){e._valueTracker||(e._valueTracker=_8(e))}function P4(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=C4(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Cd(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yp(e,t){var n=t.checked;return Qe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ly(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gi(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function O4(e,t){t=t.checked,t!=null&&xg(e,"checked",t,!1)}function vp(e,t){O4(e,t);var n=gi(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xp(e,t.type,n):t.hasOwnProperty("defaultValue")&&xp(e,t.type,gi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zy(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xp(e,t,n){(t!=="number"||Cd(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ps=Array.isArray;function ca(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gi(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bp(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(G(91));return Qe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Uy(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(G(92));if(Ps(n)){if(1<n.length)throw Error(G(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gi(n)}}function _4(e,t){var n=gi(t.value),r=gi(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function By(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function k4(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $p(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?k4(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var eu,N4=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(eu=eu||document.createElement("div"),eu.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eu.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ys(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Es={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k8=["Webkit","ms","Moz","O"];Object.keys(Es).forEach(function(e){k8.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Es[t]=Es[e]})});function E4(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Es.hasOwnProperty(e)&&Es[e]?(""+t).trim():t+"px"}function I4(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=E4(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var N8=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wp(e,t){if(t){if(N8[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(G(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(G(61))}if(t.style!=null&&typeof t.style!="object")throw Error(G(62))}}function Sp(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cp=null;function Sg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pp=null,fa=null,ha=null;function Hy(e){if(e=Pl(e)){if(typeof Pp!="function")throw Error(G(280));var t=e.stateNode;t&&(t=Rc(t),Pp(e.stateNode,e.type,t))}}function T4(e){fa?ha?ha.push(e):ha=[e]:fa=e}function A4(){if(fa){var e=fa,t=ha;if(ha=fa=null,Hy(e),t)for(e=0;e<t.length;e++)Hy(t[e])}}function R4(e,t){return e(t)}function F4(){}var Xf=!1;function D4(e,t,n){if(Xf)return e(t,n);Xf=!0;try{return R4(e,t,n)}finally{Xf=!1,(fa!==null||ha!==null)&&(F4(),A4())}}function Vs(e,t){var n=e.stateNode;if(n===null)return null;var r=Rc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(G(231,t,typeof n));return n}var Op=!1;if(Sr)try{var es={};Object.defineProperty(es,"passive",{get:function(){Op=!0}}),window.addEventListener("test",es,es),window.removeEventListener("test",es,es)}catch{Op=!1}function E8(e,t,n,r,i,o,a,l,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(c){this.onError(c)}}var Is=!1,Pd=null,Od=!1,_p=null,I8={onError:function(e){Is=!0,Pd=e}};function T8(e,t,n,r,i,o,a,l,u){Is=!1,Pd=null,E8.apply(I8,arguments)}function A8(e,t,n,r,i,o,a,l,u){if(T8.apply(this,arguments),Is){if(Is){var d=Pd;Is=!1,Pd=null}else throw Error(G(198));Od||(Od=!0,_p=d)}}function uo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function M4(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wy(e){if(uo(e)!==e)throw Error(G(188))}function R8(e){var t=e.alternate;if(!t){if(t=uo(e),t===null)throw Error(G(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Wy(i),e;if(o===r)return Wy(i),t;o=o.sibling}throw Error(G(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(G(189))}}if(n.alternate!==r)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?e:t}function j4(e){return e=R8(e),e!==null?L4(e):null}function L4(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=L4(e);if(t!==null)return t;e=e.sibling}return null}var z4=Kt.unstable_scheduleCallback,Yy=Kt.unstable_cancelCallback,F8=Kt.unstable_shouldYield,D8=Kt.unstable_requestPaint,tt=Kt.unstable_now,M8=Kt.unstable_getCurrentPriorityLevel,Cg=Kt.unstable_ImmediatePriority,U4=Kt.unstable_UserBlockingPriority,_d=Kt.unstable_NormalPriority,j8=Kt.unstable_LowPriority,B4=Kt.unstable_IdlePriority,Ec=null,Zn=null;function L8(e){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(Ec,e,void 0,(e.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:B8,z8=Math.log,U8=Math.LN2;function B8(e){return e>>>=0,e===0?32:31-(z8(e)/U8|0)|0}var tu=64,nu=4194304;function Os(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function kd(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Os(l):(o&=a,o!==0&&(r=Os(o)))}else a=n&~i,a!==0?r=Os(a):o!==0&&(r=Os(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-An(t),i=1<<n,r|=e[n],t&=~i;return r}function H8(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W8(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-An(o),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=H8(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function kp(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function H4(){var e=tu;return tu<<=1,!(tu&4194240)&&(tu=64),e}function eh(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-An(t),e[t]=n}function Y8(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-An(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Pg(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-An(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ee=0;function W4(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Y4,Og,V4,q4,G4,Np=!1,ru=[],ei=null,ti=null,ni=null,qs=new Map,Gs=new Map,Yr=[],V8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vy(e,t){switch(e){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":qs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gs.delete(t.pointerId)}}function ts(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Pl(t),t!==null&&Og(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function q8(e,t,n,r,i){switch(t){case"focusin":return ei=ts(ei,e,t,n,r,i),!0;case"dragenter":return ti=ts(ti,e,t,n,r,i),!0;case"mouseover":return ni=ts(ni,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return qs.set(o,ts(qs.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Gs.set(o,ts(Gs.get(o)||null,e,t,n,r,i)),!0}return!1}function Q4(e){var t=Vi(e.target);if(t!==null){var n=uo(t);if(n!==null){if(t=n.tag,t===13){if(t=M4(n),t!==null){e.blockedOn=t,G4(e.priority,function(){V4(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ep(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cp=r,n.target.dispatchEvent(r),Cp=null}else return t=Pl(n),t!==null&&Og(t),e.blockedOn=n,!1;t.shift()}return!0}function qy(e,t,n){Gu(e)&&n.delete(t)}function G8(){Np=!1,ei!==null&&Gu(ei)&&(ei=null),ti!==null&&Gu(ti)&&(ti=null),ni!==null&&Gu(ni)&&(ni=null),qs.forEach(qy),Gs.forEach(qy)}function ns(e,t){e.blockedOn===t&&(e.blockedOn=null,Np||(Np=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,G8)))}function Qs(e){function t(i){return ns(i,e)}if(0<ru.length){ns(ru[0],e);for(var n=1;n<ru.length;n++){var r=ru[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ei!==null&&ns(ei,e),ti!==null&&ns(ti,e),ni!==null&&ns(ni,e),qs.forEach(t),Gs.forEach(t),n=0;n<Yr.length;n++)r=Yr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yr.length&&(n=Yr[0],n.blockedOn===null);)Q4(n),n.blockedOn===null&&Yr.shift()}var pa=Er.ReactCurrentBatchConfig,Nd=!0;function Q8(e,t,n,r){var i=Ee,o=pa.transition;pa.transition=null;try{Ee=1,_g(e,t,n,r)}finally{Ee=i,pa.transition=o}}function K8(e,t,n,r){var i=Ee,o=pa.transition;pa.transition=null;try{Ee=4,_g(e,t,n,r)}finally{Ee=i,pa.transition=o}}function _g(e,t,n,r){if(Nd){var i=Ep(e,t,n,r);if(i===null)dh(e,t,r,Ed,n),Vy(e,r);else if(q8(i,e,t,n,r))r.stopPropagation();else if(Vy(e,r),t&4&&-1<V8.indexOf(e)){for(;i!==null;){var o=Pl(i);if(o!==null&&Y4(o),o=Ep(e,t,n,r),o===null&&dh(e,t,r,Ed,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else dh(e,t,r,null,n)}}var Ed=null;function Ep(e,t,n,r){if(Ed=null,e=Sg(r),e=Vi(e),e!==null)if(t=uo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=M4(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ed=e,null}function K4(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(M8()){case Cg:return 1;case U4:return 4;case _d:case j8:return 16;case B4:return 536870912;default:return 16}default:return 16}}var Gr=null,kg=null,Qu=null;function Z4(){if(Qu)return Qu;var e,t=kg,n=t.length,r,i="value"in Gr?Gr.value:Gr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Qu=i.slice(e,1<r?1-r:void 0)}function Ku(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function iu(){return!0}function Gy(){return!1}function Xt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?iu:Gy,this.isPropagationStopped=Gy,this}return Qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=iu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=iu)},persist:function(){},isPersistent:iu}),t}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ng=Xt(za),Cl=Qe({},za,{view:0,detail:0}),Z8=Xt(Cl),th,nh,rs,Ic=Qe({},Cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rs&&(rs&&e.type==="mousemove"?(th=e.screenX-rs.screenX,nh=e.screenY-rs.screenY):nh=th=0,rs=e),th)},movementY:function(e){return"movementY"in e?e.movementY:nh}}),Qy=Xt(Ic),J8=Qe({},Ic,{dataTransfer:0}),X8=Xt(J8),e9=Qe({},Cl,{relatedTarget:0}),rh=Xt(e9),t9=Qe({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),n9=Xt(t9),r9=Qe({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),i9=Xt(r9),o9=Qe({},za,{data:0}),Ky=Xt(o9),a9={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s9={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l9={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u9(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=l9[e])?!!t[e]:!1}function Eg(){return u9}var d9=Qe({},Cl,{key:function(e){if(e.key){var t=a9[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ku(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?s9[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eg,charCode:function(e){return e.type==="keypress"?Ku(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ku(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),c9=Xt(d9),f9=Qe({},Ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zy=Xt(f9),h9=Qe({},Cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eg}),p9=Xt(h9),g9=Qe({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),m9=Xt(g9),y9=Qe({},Ic,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),v9=Xt(y9),x9=[9,13,27,32],Ig=Sr&&"CompositionEvent"in window,Ts=null;Sr&&"documentMode"in document&&(Ts=document.documentMode);var b9=Sr&&"TextEvent"in window&&!Ts,J4=Sr&&(!Ig||Ts&&8<Ts&&11>=Ts),Jy=String.fromCharCode(32),Xy=!1;function X4(e,t){switch(e){case"keyup":return x9.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ko=!1;function $9(e,t){switch(e){case"compositionend":return eb(t);case"keypress":return t.which!==32?null:(Xy=!0,Jy);case"textInput":return e=t.data,e===Jy&&Xy?null:e;default:return null}}function w9(e,t){if(Ko)return e==="compositionend"||!Ig&&X4(e,t)?(e=Z4(),Qu=kg=Gr=null,Ko=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return J4&&t.locale!=="ko"?null:t.data;default:return null}}var S9={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function e2(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!S9[e.type]:t==="textarea"}function tb(e,t,n,r){T4(r),t=Id(t,"onChange"),0<t.length&&(n=new Ng("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var As=null,Ks=null;function C9(e){fb(e,0)}function Tc(e){var t=Xo(e);if(P4(t))return e}function P9(e,t){if(e==="change")return t}var nb=!1;if(Sr){var ih;if(Sr){var oh="oninput"in document;if(!oh){var t2=document.createElement("div");t2.setAttribute("oninput","return;"),oh=typeof t2.oninput=="function"}ih=oh}else ih=!1;nb=ih&&(!document.documentMode||9<document.documentMode)}function n2(){As&&(As.detachEvent("onpropertychange",rb),Ks=As=null)}function rb(e){if(e.propertyName==="value"&&Tc(Ks)){var t=[];tb(t,Ks,e,Sg(e)),D4(C9,t)}}function O9(e,t,n){e==="focusin"?(n2(),As=t,Ks=n,As.attachEvent("onpropertychange",rb)):e==="focusout"&&n2()}function _9(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tc(Ks)}function k9(e,t){if(e==="click")return Tc(t)}function N9(e,t){if(e==="input"||e==="change")return Tc(t)}function E9(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dn=typeof Object.is=="function"?Object.is:E9;function Zs(e,t){if(Dn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fp.call(t,i)||!Dn(e[i],t[i]))return!1}return!0}function r2(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function i2(e,t){var n=r2(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=r2(n)}}function ib(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ib(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ob(){for(var e=window,t=Cd();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Cd(e.document)}return t}function Tg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function I9(e){var t=ob(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ib(n.ownerDocument.documentElement,n)){if(r!==null&&Tg(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=i2(n,o);var a=i2(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var T9=Sr&&"documentMode"in document&&11>=document.documentMode,Zo=null,Ip=null,Rs=null,Tp=!1;function o2(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tp||Zo==null||Zo!==Cd(r)||(r=Zo,"selectionStart"in r&&Tg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rs&&Zs(Rs,r)||(Rs=r,r=Id(Ip,"onSelect"),0<r.length&&(t=new Ng("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zo)))}function ou(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jo={animationend:ou("Animation","AnimationEnd"),animationiteration:ou("Animation","AnimationIteration"),animationstart:ou("Animation","AnimationStart"),transitionend:ou("Transition","TransitionEnd")},ah={},ab={};Sr&&(ab=document.createElement("div").style,"AnimationEvent"in window||(delete Jo.animationend.animation,delete Jo.animationiteration.animation,delete Jo.animationstart.animation),"TransitionEvent"in window||delete Jo.transitionend.transition);function Ac(e){if(ah[e])return ah[e];if(!Jo[e])return e;var t=Jo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ab)return ah[e]=t[n];return e}var sb=Ac("animationend"),lb=Ac("animationiteration"),ub=Ac("animationstart"),db=Ac("transitionend"),cb=new Map,a2="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bi(e,t){cb.set(e,t),lo(t,[e])}for(var sh=0;sh<a2.length;sh++){var lh=a2[sh],A9=lh.toLowerCase(),R9=lh[0].toUpperCase()+lh.slice(1);bi(A9,"on"+R9)}bi(sb,"onAnimationEnd");bi(lb,"onAnimationIteration");bi(ub,"onAnimationStart");bi("dblclick","onDoubleClick");bi("focusin","onFocus");bi("focusout","onBlur");bi(db,"onTransitionEnd");Ca("onMouseEnter",["mouseout","mouseover"]);Ca("onMouseLeave",["mouseout","mouseover"]);Ca("onPointerEnter",["pointerout","pointerover"]);Ca("onPointerLeave",["pointerout","pointerover"]);lo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lo("onBeforeInput",["compositionend","keypress","textInput","paste"]);lo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F9=new Set("cancel close invalid load scroll toggle".split(" ").concat(_s));function s2(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,A8(r,t,void 0,e),e.currentTarget=null}function fb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;s2(i,l,d),o=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,d=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;s2(i,l,d),o=u}}}if(Od)throw e=_p,Od=!1,_p=null,e}function je(e,t){var n=t[Mp];n===void 0&&(n=t[Mp]=new Set);var r=e+"__bubble";n.has(r)||(hb(t,e,2,!1),n.add(r))}function uh(e,t,n){var r=0;t&&(r|=4),hb(n,e,r,t)}var au="_reactListening"+Math.random().toString(36).slice(2);function Js(e){if(!e[au]){e[au]=!0,b4.forEach(function(n){n!=="selectionchange"&&(F9.has(n)||uh(n,!1,e),uh(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[au]||(t[au]=!0,uh("selectionchange",!1,t))}}function hb(e,t,n,r){switch(K4(t)){case 1:var i=Q8;break;case 4:i=K8;break;default:i=_g}n=i.bind(null,t,n,e),i=void 0,!Op||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function dh(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Vi(l),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}l=l.parentNode}}r=r.return}D4(function(){var d=o,c=Sg(n),h=[];e:{var g=cb.get(e);if(g!==void 0){var b=Ng,v=e;switch(e){case"keypress":if(Ku(n)===0)break e;case"keydown":case"keyup":b=c9;break;case"focusin":v="focus",b=rh;break;case"focusout":v="blur",b=rh;break;case"beforeblur":case"afterblur":b=rh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Qy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=X8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=p9;break;case sb:case lb:case ub:b=n9;break;case db:b=m9;break;case"scroll":b=Z8;break;case"wheel":b=v9;break;case"copy":case"cut":case"paste":b=i9;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Zy}var w=(t&4)!==0,$=!w&&e==="scroll",m=w?g!==null?g+"Capture":null:g;w=[];for(var p=d,x;p!==null;){x=p;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,m!==null&&(S=Vs(p,m),S!=null&&w.push(Xs(p,S,x)))),$)break;p=p.return}0<w.length&&(g=new b(g,v,null,n,c),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",g&&n!==Cp&&(v=n.relatedTarget||n.fromElement)&&(Vi(v)||v[Cr]))break e;if((b||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,b?(v=n.relatedTarget||n.toElement,b=d,v=v?Vi(v):null,v!==null&&($=uo(v),v!==$||v.tag!==5&&v.tag!==6)&&(v=null)):(b=null,v=d),b!==v)){if(w=Qy,S="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=Zy,S="onPointerLeave",m="onPointerEnter",p="pointer"),$=b==null?g:Xo(b),x=v==null?g:Xo(v),g=new w(S,p+"leave",b,n,c),g.target=$,g.relatedTarget=x,S=null,Vi(c)===d&&(w=new w(m,p+"enter",v,n,c),w.target=x,w.relatedTarget=$,S=w),$=S,b&&v)t:{for(w=b,m=v,p=0,x=w;x;x=po(x))p++;for(x=0,S=m;S;S=po(S))x++;for(;0<p-x;)w=po(w),p--;for(;0<x-p;)m=po(m),x--;for(;p--;){if(w===m||m!==null&&w===m.alternate)break t;w=po(w),m=po(m)}w=null}else w=null;b!==null&&l2(h,g,b,w,!1),v!==null&&$!==null&&l2(h,$,v,w,!0)}}e:{if(g=d?Xo(d):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var P=P9;else if(e2(g))if(nb)P=N9;else{P=_9;var _=O9}else(b=g.nodeName)&&b.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(P=k9);if(P&&(P=P(e,d))){tb(h,P,n,c);break e}_&&_(e,g,d),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&xp(g,"number",g.value)}switch(_=d?Xo(d):window,e){case"focusin":(e2(_)||_.contentEditable==="true")&&(Zo=_,Ip=d,Rs=null);break;case"focusout":Rs=Ip=Zo=null;break;case"mousedown":Tp=!0;break;case"contextmenu":case"mouseup":case"dragend":Tp=!1,o2(h,n,c);break;case"selectionchange":if(T9)break;case"keydown":case"keyup":o2(h,n,c)}var T;if(Ig)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ko?X4(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(J4&&n.locale!=="ko"&&(Ko||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ko&&(T=Z4()):(Gr=c,kg="value"in Gr?Gr.value:Gr.textContent,Ko=!0)),_=Id(d,R),0<_.length&&(R=new Ky(R,e,null,n,c),h.push({event:R,listeners:_}),T?R.data=T:(T=eb(n),T!==null&&(R.data=T)))),(T=b9?$9(e,n):w9(e,n))&&(d=Id(d,"onBeforeInput"),0<d.length&&(c=new Ky("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:d}),c.data=T))}fb(h,t)})}function Xs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Id(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Vs(e,n),o!=null&&r.unshift(Xs(e,o,i)),o=Vs(e,t),o!=null&&r.push(Xs(e,o,i))),e=e.return}return r}function po(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function l2(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=Vs(n,o),u!=null&&a.unshift(Xs(n,u,l))):i||(u=Vs(n,o),u!=null&&a.push(Xs(n,u,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var D9=/\r\n?/g,M9=/\u0000|\uFFFD/g;function u2(e){return(typeof e=="string"?e:""+e).replace(D9,`
`).replace(M9,"")}function su(e,t,n){if(t=u2(t),u2(e)!==t&&n)throw Error(G(425))}function Td(){}var Ap=null,Rp=null;function Fp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dp=typeof setTimeout=="function"?setTimeout:void 0,j9=typeof clearTimeout=="function"?clearTimeout:void 0,d2=typeof Promise=="function"?Promise:void 0,L9=typeof queueMicrotask=="function"?queueMicrotask:typeof d2<"u"?function(e){return d2.resolve(null).then(e).catch(z9)}:Dp;function z9(e){setTimeout(function(){throw e})}function ch(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qs(t)}function ri(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function c2(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ua=Math.random().toString(36).slice(2),Vn="__reactFiber$"+Ua,el="__reactProps$"+Ua,Cr="__reactContainer$"+Ua,Mp="__reactEvents$"+Ua,U9="__reactListeners$"+Ua,B9="__reactHandles$"+Ua;function Vi(e){var t=e[Vn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Cr]||n[Vn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=c2(e);e!==null;){if(n=e[Vn])return n;e=c2(e)}return t}e=n,n=e.parentNode}return null}function Pl(e){return e=e[Vn]||e[Cr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function Rc(e){return e[el]||null}var jp=[],ea=-1;function $i(e){return{current:e}}function ze(e){0>ea||(e.current=jp[ea],jp[ea]=null,ea--)}function Me(e,t){ea++,jp[ea]=e.current,e.current=t}var mi={},kt=$i(mi),Bt=$i(!1),no=mi;function Pa(e,t){var n=e.type.contextTypes;if(!n)return mi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ht(e){return e=e.childContextTypes,e!=null}function Ad(){ze(Bt),ze(kt)}function f2(e,t,n){if(kt.current!==mi)throw Error(G(168));Me(kt,t),Me(Bt,n)}function pb(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(G(108,O8(e)||"Unknown",i));return Qe({},n,r)}function Rd(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mi,no=kt.current,Me(kt,e),Me(Bt,Bt.current),!0}function h2(e,t,n){var r=e.stateNode;if(!r)throw Error(G(169));n?(e=pb(e,t,no),r.__reactInternalMemoizedMergedChildContext=e,ze(Bt),ze(kt),Me(kt,e)):ze(Bt),Me(Bt,n)}var hr=null,Fc=!1,fh=!1;function gb(e){hr===null?hr=[e]:hr.push(e)}function H9(e){Fc=!0,gb(e)}function wi(){if(!fh&&hr!==null){fh=!0;var e=0,t=Ee;try{var n=hr;for(Ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}hr=null,Fc=!1}catch(i){throw hr!==null&&(hr=hr.slice(e+1)),z4(Cg,wi),i}finally{Ee=t,fh=!1}}return null}var ta=[],na=0,Fd=null,Dd=0,ln=[],un=0,ro=null,gr=1,mr="";function Ui(e,t){ta[na++]=Dd,ta[na++]=Fd,Fd=e,Dd=t}function mb(e,t,n){ln[un++]=gr,ln[un++]=mr,ln[un++]=ro,ro=e;var r=gr;e=mr;var i=32-An(r)-1;r&=~(1<<i),n+=1;var o=32-An(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,gr=1<<32-An(t)+i|n<<i|r,mr=o+e}else gr=1<<o|n<<i|r,mr=e}function Ag(e){e.return!==null&&(Ui(e,1),mb(e,1,0))}function Rg(e){for(;e===Fd;)Fd=ta[--na],ta[na]=null,Dd=ta[--na],ta[na]=null;for(;e===ro;)ro=ln[--un],ln[un]=null,mr=ln[--un],ln[un]=null,gr=ln[--un],ln[un]=null}var Qt=null,Gt=null,Ye=!1,Nn=null;function yb(e,t){var n=fn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function p2(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qt=e,Gt=ri(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qt=e,Gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ro!==null?{id:gr,overflow:mr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=fn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qt=e,Gt=null,!0):!1;default:return!1}}function Lp(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zp(e){if(Ye){var t=Gt;if(t){var n=t;if(!p2(e,t)){if(Lp(e))throw Error(G(418));t=ri(n.nextSibling);var r=Qt;t&&p2(e,t)?yb(r,n):(e.flags=e.flags&-4097|2,Ye=!1,Qt=e)}}else{if(Lp(e))throw Error(G(418));e.flags=e.flags&-4097|2,Ye=!1,Qt=e}}}function g2(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qt=e}function lu(e){if(e!==Qt)return!1;if(!Ye)return g2(e),Ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fp(e.type,e.memoizedProps)),t&&(t=Gt)){if(Lp(e))throw vb(),Error(G(418));for(;t;)yb(e,t),t=ri(t.nextSibling)}if(g2(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Gt=ri(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Gt=null}}else Gt=Qt?ri(e.stateNode.nextSibling):null;return!0}function vb(){for(var e=Gt;e;)e=ri(e.nextSibling)}function Oa(){Gt=Qt=null,Ye=!1}function Fg(e){Nn===null?Nn=[e]:Nn.push(e)}var W9=Er.ReactCurrentBatchConfig;function _n(e,t){if(e&&e.defaultProps){t=Qe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Md=$i(null),jd=null,ra=null,Dg=null;function Mg(){Dg=ra=jd=null}function jg(e){var t=Md.current;ze(Md),e._currentValue=t}function Up(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ga(e,t){jd=e,Dg=ra=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ut=!0),e.firstContext=null)}function gn(e){var t=e._currentValue;if(Dg!==e)if(e={context:e,memoizedValue:t,next:null},ra===null){if(jd===null)throw Error(G(308));ra=e,jd.dependencies={lanes:0,firstContext:e}}else ra=ra.next=e;return t}var qi=null;function Lg(e){qi===null?qi=[e]:qi.push(e)}function xb(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Lg(t)):(n.next=i.next,i.next=n),t.interleaved=n,Pr(e,r)}function Pr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Hr=!1;function zg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function br(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ii(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Pr(e,n)}return i=r.interleaved,i===null?(t.next=t,Lg(r)):(t.next=i.next,i.next=t),r.interleaved=t,Pr(e,n)}function Zu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pg(e,n)}}function m2(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ld(e,t,n,r){var i=e.updateQueue;Hr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,a===null?o=d:a.next=d,a=u;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=d:l.next=d,c.lastBaseUpdate=u))}if(o!==null){var h=i.baseState;a=0,c=d=u=null,l=o;do{var g=l.lane,b=l.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,w=l;switch(g=t,b=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(b,h,g);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(b,h,g):v,g==null)break e;h=Qe({},h,g);break e;case 2:Hr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else b={eventTime:b,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(d=c=b,u=h):c=c.next=b,a|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);oo|=a,e.lanes=a,e.memoizedState=h}}function y2(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(G(191,i));i.call(r)}}}var $b=new x4.Component().refs;function Bp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Qe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Dc={isMounted:function(e){return(e=e._reactInternals)?uo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=At(),i=ai(e),o=br(r,i);o.payload=t,n!=null&&(o.callback=n),t=ii(e,o,i),t!==null&&(Rn(t,e,i,r),Zu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=At(),i=ai(e),o=br(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ii(e,o,i),t!==null&&(Rn(t,e,i,r),Zu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=At(),r=ai(e),i=br(n,r);i.tag=2,t!=null&&(i.callback=t),t=ii(e,i,r),t!==null&&(Rn(t,e,r,n),Zu(t,e,r))}};function v2(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Zs(n,r)||!Zs(i,o):!0}function wb(e,t,n){var r=!1,i=mi,o=t.contextType;return typeof o=="object"&&o!==null?o=gn(o):(i=Ht(t)?no:kt.current,r=t.contextTypes,o=(r=r!=null)?Pa(e,i):mi),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Dc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function x2(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Dc.enqueueReplaceState(t,t.state,null)}function Hp(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=$b,zg(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=gn(o):(o=Ht(t)?no:kt.current,i.context=Pa(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Bp(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Dc.enqueueReplaceState(i,i.state,null),Ld(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function is(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var r=n.stateNode}if(!r)throw Error(G(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===$b&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,e))}return e}function uu(e,t){throw e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function b2(e){var t=e._init;return t(e._payload)}function Sb(e){function t(m,p){if(e){var x=m.deletions;x===null?(m.deletions=[p],m.flags|=16):x.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=si(m,p),m.index=0,m.sibling=null,m}function o(m,p,x){return m.index=x,e?(x=m.alternate,x!==null?(x=x.index,x<p?(m.flags|=2,p):x):(m.flags|=2,p)):(m.flags|=1048576,p)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,x,S){return p===null||p.tag!==6?(p=xh(x,m.mode,S),p.return=m,p):(p=i(p,x),p.return=m,p)}function u(m,p,x,S){var P=x.type;return P===Qo?c(m,p,x.props.children,S,x.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Br&&b2(P)===p.type)?(S=i(p,x.props),S.ref=is(m,p,x),S.return=m,S):(S=rd(x.type,x.key,x.props,null,m.mode,S),S.ref=is(m,p,x),S.return=m,S)}function d(m,p,x,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=bh(x,m.mode,S),p.return=m,p):(p=i(p,x.children||[]),p.return=m,p)}function c(m,p,x,S,P){return p===null||p.tag!==7?(p=Xi(x,m.mode,S,P),p.return=m,p):(p=i(p,x),p.return=m,p)}function h(m,p,x){if(typeof p=="string"&&p!==""||typeof p=="number")return p=xh(""+p,m.mode,x),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Jl:return x=rd(p.type,p.key,p.props,null,m.mode,x),x.ref=is(m,null,p),x.return=m,x;case Go:return p=bh(p,m.mode,x),p.return=m,p;case Br:var S=p._init;return h(m,S(p._payload),x)}if(Ps(p)||Xa(p))return p=Xi(p,m.mode,x,null),p.return=m,p;uu(m,p)}return null}function g(m,p,x,S){var P=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:l(m,p,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Jl:return x.key===P?u(m,p,x,S):null;case Go:return x.key===P?d(m,p,x,S):null;case Br:return P=x._init,g(m,p,P(x._payload),S)}if(Ps(x)||Xa(x))return P!==null?null:c(m,p,x,S,null);uu(m,x)}return null}function b(m,p,x,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(x)||null,l(p,m,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Jl:return m=m.get(S.key===null?x:S.key)||null,u(p,m,S,P);case Go:return m=m.get(S.key===null?x:S.key)||null,d(p,m,S,P);case Br:var _=S._init;return b(m,p,x,_(S._payload),P)}if(Ps(S)||Xa(S))return m=m.get(x)||null,c(p,m,S,P,null);uu(p,S)}return null}function v(m,p,x,S){for(var P=null,_=null,T=p,R=p=0,W=null;T!==null&&R<x.length;R++){T.index>R?(W=T,T=null):W=T.sibling;var z=g(m,T,x[R],S);if(z===null){T===null&&(T=W);break}e&&T&&z.alternate===null&&t(m,T),p=o(z,p,R),_===null?P=z:_.sibling=z,_=z,T=W}if(R===x.length)return n(m,T),Ye&&Ui(m,R),P;if(T===null){for(;R<x.length;R++)T=h(m,x[R],S),T!==null&&(p=o(T,p,R),_===null?P=T:_.sibling=T,_=T);return Ye&&Ui(m,R),P}for(T=r(m,T);R<x.length;R++)W=b(T,m,R,x[R],S),W!==null&&(e&&W.alternate!==null&&T.delete(W.key===null?R:W.key),p=o(W,p,R),_===null?P=W:_.sibling=W,_=W);return e&&T.forEach(function(ie){return t(m,ie)}),Ye&&Ui(m,R),P}function w(m,p,x,S){var P=Xa(x);if(typeof P!="function")throw Error(G(150));if(x=P.call(x),x==null)throw Error(G(151));for(var _=P=null,T=p,R=p=0,W=null,z=x.next();T!==null&&!z.done;R++,z=x.next()){T.index>R?(W=T,T=null):W=T.sibling;var ie=g(m,T,z.value,S);if(ie===null){T===null&&(T=W);break}e&&T&&ie.alternate===null&&t(m,T),p=o(ie,p,R),_===null?P=ie:_.sibling=ie,_=ie,T=W}if(z.done)return n(m,T),Ye&&Ui(m,R),P;if(T===null){for(;!z.done;R++,z=x.next())z=h(m,z.value,S),z!==null&&(p=o(z,p,R),_===null?P=z:_.sibling=z,_=z);return Ye&&Ui(m,R),P}for(T=r(m,T);!z.done;R++,z=x.next())z=b(T,m,R,z.value,S),z!==null&&(e&&z.alternate!==null&&T.delete(z.key===null?R:z.key),p=o(z,p,R),_===null?P=z:_.sibling=z,_=z);return e&&T.forEach(function(M){return t(m,M)}),Ye&&Ui(m,R),P}function $(m,p,x,S){if(typeof x=="object"&&x!==null&&x.type===Qo&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Jl:e:{for(var P=x.key,_=p;_!==null;){if(_.key===P){if(P=x.type,P===Qo){if(_.tag===7){n(m,_.sibling),p=i(_,x.props.children),p.return=m,m=p;break e}}else if(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Br&&b2(P)===_.type){n(m,_.sibling),p=i(_,x.props),p.ref=is(m,_,x),p.return=m,m=p;break e}n(m,_);break}else t(m,_);_=_.sibling}x.type===Qo?(p=Xi(x.props.children,m.mode,S,x.key),p.return=m,m=p):(S=rd(x.type,x.key,x.props,null,m.mode,S),S.ref=is(m,p,x),S.return=m,m=S)}return a(m);case Go:e:{for(_=x.key;p!==null;){if(p.key===_)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){n(m,p.sibling),p=i(p,x.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=bh(x,m.mode,S),p.return=m,m=p}return a(m);case Br:return _=x._init,$(m,p,_(x._payload),S)}if(Ps(x))return v(m,p,x,S);if(Xa(x))return w(m,p,x,S);uu(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,x),p.return=m,m=p):(n(m,p),p=xh(x,m.mode,S),p.return=m,m=p),a(m)):n(m,p)}return $}var _a=Sb(!0),Cb=Sb(!1),Ol={},Jn=$i(Ol),tl=$i(Ol),nl=$i(Ol);function Gi(e){if(e===Ol)throw Error(G(174));return e}function Ug(e,t){switch(Me(nl,t),Me(tl,e),Me(Jn,Ol),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$p(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$p(t,e)}ze(Jn),Me(Jn,t)}function ka(){ze(Jn),ze(tl),ze(nl)}function Pb(e){Gi(nl.current);var t=Gi(Jn.current),n=$p(t,e.type);t!==n&&(Me(tl,e),Me(Jn,n))}function Bg(e){tl.current===e&&(ze(Jn),ze(tl))}var qe=$i(0);function zd(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hh=[];function Hg(){for(var e=0;e<hh.length;e++)hh[e]._workInProgressVersionPrimary=null;hh.length=0}var Ju=Er.ReactCurrentDispatcher,ph=Er.ReactCurrentBatchConfig,io=0,Ge=null,st=null,ft=null,Ud=!1,Fs=!1,rl=0,Y9=0;function wt(){throw Error(G(321))}function Wg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dn(e[n],t[n]))return!1;return!0}function Yg(e,t,n,r,i,o){if(io=o,Ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ju.current=e===null||e.memoizedState===null?Q9:K9,e=n(r,i),Fs){o=0;do{if(Fs=!1,rl=0,25<=o)throw Error(G(301));o+=1,ft=st=null,t.updateQueue=null,Ju.current=Z9,e=n(r,i)}while(Fs)}if(Ju.current=Bd,t=st!==null&&st.next!==null,io=0,ft=st=Ge=null,Ud=!1,t)throw Error(G(300));return e}function Vg(){var e=rl!==0;return rl=0,e}function Yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Ge.memoizedState=ft=e:ft=ft.next=e,ft}function mn(){if(st===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=st.next;var t=ft===null?Ge.memoizedState:ft.next;if(t!==null)ft=t,st=e;else{if(e===null)throw Error(G(310));st=e,e={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},ft===null?Ge.memoizedState=ft=e:ft=ft.next=e}return ft}function il(e,t){return typeof t=="function"?t(e):t}function gh(e){var t=mn(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=st,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,u=null,d=o;do{var c=d.lane;if((io&c)===c)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:c,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=h,a=r):u=u.next=h,Ge.lanes|=c,oo|=c}d=d.next}while(d!==null&&d!==o);u===null?a=r:u.next=l,Dn(r,t.memoizedState)||(Ut=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ge.lanes|=o,oo|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function mh(e){var t=mn(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Dn(o,t.memoizedState)||(Ut=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ob(){}function _b(e,t){var n=Ge,r=mn(),i=t(),o=!Dn(r.memoizedState,i);if(o&&(r.memoizedState=i,Ut=!0),r=r.queue,qg(Eb.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ft!==null&&ft.memoizedState.tag&1){if(n.flags|=2048,ol(9,Nb.bind(null,n,r,i,t),void 0,null),ht===null)throw Error(G(349));io&30||kb(n,t,i)}return i}function kb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nb(e,t,n,r){t.value=n,t.getSnapshot=r,Ib(t)&&Tb(e)}function Eb(e,t,n){return n(function(){Ib(t)&&Tb(e)})}function Ib(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dn(e,n)}catch{return!0}}function Tb(e){var t=Pr(e,1);t!==null&&Rn(t,e,1,-1)}function $2(e){var t=Yn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:e},t.queue=e,e=e.dispatch=G9.bind(null,Ge,e),[t.memoizedState,e]}function ol(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ab(){return mn().memoizedState}function Xu(e,t,n,r){var i=Yn();Ge.flags|=e,i.memoizedState=ol(1|t,n,void 0,r===void 0?null:r)}function Mc(e,t,n,r){var i=mn();r=r===void 0?null:r;var o=void 0;if(st!==null){var a=st.memoizedState;if(o=a.destroy,r!==null&&Wg(r,a.deps)){i.memoizedState=ol(t,n,o,r);return}}Ge.flags|=e,i.memoizedState=ol(1|t,n,o,r)}function w2(e,t){return Xu(8390656,8,e,t)}function qg(e,t){return Mc(2048,8,e,t)}function Rb(e,t){return Mc(4,2,e,t)}function Fb(e,t){return Mc(4,4,e,t)}function Db(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mb(e,t,n){return n=n!=null?n.concat([e]):null,Mc(4,4,Db.bind(null,t,e),n)}function Gg(){}function jb(e,t){var n=mn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wg(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Lb(e,t){var n=mn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wg(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zb(e,t,n){return io&21?(Dn(n,t)||(n=H4(),Ge.lanes|=n,oo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ut=!0),e.memoizedState=n)}function V9(e,t){var n=Ee;Ee=n!==0&&4>n?n:4,e(!0);var r=ph.transition;ph.transition={};try{e(!1),t()}finally{Ee=n,ph.transition=r}}function Ub(){return mn().memoizedState}function q9(e,t,n){var r=ai(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bb(e))Hb(t,n);else if(n=xb(e,t,n,r),n!==null){var i=At();Rn(n,e,r,i),Wb(n,t,r)}}function G9(e,t,n){var r=ai(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bb(e))Hb(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Dn(l,a)){var u=t.interleaved;u===null?(i.next=i,Lg(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=xb(e,t,i,r),n!==null&&(i=At(),Rn(n,e,r,i),Wb(n,t,r))}}function Bb(e){var t=e.alternate;return e===Ge||t!==null&&t===Ge}function Hb(e,t){Fs=Ud=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wb(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pg(e,n)}}var Bd={readContext:gn,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},Q9={readContext:gn,useCallback:function(e,t){return Yn().memoizedState=[e,t===void 0?null:t],e},useContext:gn,useEffect:w2,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xu(4194308,4,Db.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xu(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xu(4,2,e,t)},useMemo:function(e,t){var n=Yn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Yn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=q9.bind(null,Ge,e),[r.memoizedState,e]},useRef:function(e){var t=Yn();return e={current:e},t.memoizedState=e},useState:$2,useDebugValue:Gg,useDeferredValue:function(e){return Yn().memoizedState=e},useTransition:function(){var e=$2(!1),t=e[0];return e=V9.bind(null,e[1]),Yn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ge,i=Yn();if(Ye){if(n===void 0)throw Error(G(407));n=n()}else{if(n=t(),ht===null)throw Error(G(349));io&30||kb(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,w2(Eb.bind(null,r,o,e),[e]),r.flags|=2048,ol(9,Nb.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Yn(),t=ht.identifierPrefix;if(Ye){var n=mr,r=gr;n=(r&~(1<<32-An(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=rl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Y9++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},K9={readContext:gn,useCallback:jb,useContext:gn,useEffect:qg,useImperativeHandle:Mb,useInsertionEffect:Rb,useLayoutEffect:Fb,useMemo:Lb,useReducer:gh,useRef:Ab,useState:function(){return gh(il)},useDebugValue:Gg,useDeferredValue:function(e){var t=mn();return zb(t,st.memoizedState,e)},useTransition:function(){var e=gh(il)[0],t=mn().memoizedState;return[e,t]},useMutableSource:Ob,useSyncExternalStore:_b,useId:Ub,unstable_isNewReconciler:!1},Z9={readContext:gn,useCallback:jb,useContext:gn,useEffect:qg,useImperativeHandle:Mb,useInsertionEffect:Rb,useLayoutEffect:Fb,useMemo:Lb,useReducer:mh,useRef:Ab,useState:function(){return mh(il)},useDebugValue:Gg,useDeferredValue:function(e){var t=mn();return st===null?t.memoizedState=e:zb(t,st.memoizedState,e)},useTransition:function(){var e=mh(il)[0],t=mn().memoizedState;return[e,t]},useMutableSource:Ob,useSyncExternalStore:_b,useId:Ub,unstable_isNewReconciler:!1};function Na(e,t){try{var n="",r=t;do n+=P8(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function yh(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var J9=typeof WeakMap=="function"?WeakMap:Map;function Yb(e,t,n){n=br(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wd||(Wd=!0,e1=r),Wp(e,t)},n}function Vb(e,t,n){n=br(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Wp(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Wp(e,t),typeof r!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function S2(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new J9;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=f7.bind(null,e,t,n),t.then(e,e))}function C2(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function P2(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=br(-1,1),t.tag=2,ii(n,t,1))),n.lanes|=1),e)}var X9=Er.ReactCurrentOwner,Ut=!1;function It(e,t,n,r){t.child=e===null?Cb(t,null,n,r):_a(t,e.child,n,r)}function O2(e,t,n,r,i){n=n.render;var o=t.ref;return ga(t,i),r=Yg(e,t,n,r,o,i),n=Vg(),e!==null&&!Ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Or(e,t,i)):(Ye&&n&&Ag(t),t.flags|=1,It(e,t,r,i),t.child)}function _2(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!nm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,qb(e,t,o,r,i)):(e=rd(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Zs,n(a,r)&&e.ref===t.ref)return Or(e,t,i)}return t.flags|=1,e=si(o,r),e.ref=t.ref,e.return=t,t.child=e}function qb(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Zs(o,r)&&e.ref===t.ref)if(Ut=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ut=!0);else return t.lanes=e.lanes,Or(e,t,i)}return Yp(e,t,n,r,i)}function Gb(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(oa,Yt),Yt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(oa,Yt),Yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Me(oa,Yt),Yt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Me(oa,Yt),Yt|=r;return It(e,t,i,n),t.child}function Qb(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yp(e,t,n,r,i){var o=Ht(n)?no:kt.current;return o=Pa(t,o),ga(t,i),n=Yg(e,t,n,r,o,i),r=Vg(),e!==null&&!Ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Or(e,t,i)):(Ye&&r&&Ag(t),t.flags|=1,It(e,t,n,i),t.child)}function k2(e,t,n,r,i){if(Ht(n)){var o=!0;Rd(t)}else o=!1;if(ga(t,i),t.stateNode===null)ed(e,t),wb(t,n,r),Hp(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=gn(d):(d=Ht(n)?no:kt.current,d=Pa(t,d));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==d)&&x2(t,a,r,d),Hr=!1;var g=t.memoizedState;a.state=g,Ld(t,r,a,i),u=t.memoizedState,l!==r||g!==u||Bt.current||Hr?(typeof c=="function"&&(Bp(t,n,c,r),u=t.memoizedState),(l=Hr||v2(t,n,l,r,g,u,d))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,bb(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:_n(t.type,l),a.props=d,h=t.pendingProps,g=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=gn(u):(u=Ht(n)?no:kt.current,u=Pa(t,u));var b=n.getDerivedStateFromProps;(c=typeof b=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||g!==u)&&x2(t,a,r,u),Hr=!1,g=t.memoizedState,a.state=g,Ld(t,r,a,i);var v=t.memoizedState;l!==h||g!==v||Bt.current||Hr?(typeof b=="function"&&(Bp(t,n,b,r),v=t.memoizedState),(d=Hr||v2(t,n,d,r,g,v,u)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Vp(e,t,n,r,o,i)}function Vp(e,t,n,r,i,o){Qb(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&h2(t,n,!1),Or(e,t,o);r=t.stateNode,X9.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=_a(t,e.child,null,o),t.child=_a(t,null,l,o)):It(e,t,l,o),t.memoizedState=r.state,i&&h2(t,n,!0),t.child}function Kb(e){var t=e.stateNode;t.pendingContext?f2(e,t.pendingContext,t.pendingContext!==t.context):t.context&&f2(e,t.context,!1),Ug(e,t.containerInfo)}function N2(e,t,n,r,i){return Oa(),Fg(i),t.flags|=256,It(e,t,n,r),t.child}var qp={dehydrated:null,treeContext:null,retryLane:0};function Gp(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zb(e,t,n){var r=t.pendingProps,i=qe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Me(qe,i&1),e===null)return zp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=zc(a,r,0,null),e=Xi(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Gp(n),t.memoizedState=qp,e):Qg(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return e7(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=si(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=si(l,o):(o=Xi(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Gp(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=qp,r}return o=e.child,e=o.sibling,r=si(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qg(e,t){return t=zc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function du(e,t,n,r){return r!==null&&Fg(r),_a(t,e.child,null,n),e=Qg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function e7(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=yh(Error(G(422))),du(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=zc({mode:"visible",children:r.children},i,0,null),o=Xi(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&_a(t,e.child,null,a),t.child.memoizedState=Gp(a),t.memoizedState=qp,o);if(!(t.mode&1))return du(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(G(419)),r=yh(o,r,void 0),du(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ut||l){if(r=ht,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Pr(e,i),Rn(r,e,i,-1))}return tm(),r=yh(Error(G(421))),du(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=h7.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Gt=ri(i.nextSibling),Qt=t,Ye=!0,Nn=null,e!==null&&(ln[un++]=gr,ln[un++]=mr,ln[un++]=ro,gr=e.id,mr=e.overflow,ro=t),t=Qg(t,r.children),t.flags|=4096,t)}function E2(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Up(e.return,t,n)}function vh(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Jb(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(It(e,t,r.children,n),r=qe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&E2(e,n,t);else if(e.tag===19)E2(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Me(qe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&zd(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),vh(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&zd(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}vh(t,!0,n,null,o);break;case"together":vh(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ed(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Or(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),oo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,n=si(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=si(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function t7(e,t,n){switch(t.tag){case 3:Kb(t),Oa();break;case 5:Pb(t);break;case 1:Ht(t.type)&&Rd(t);break;case 4:Ug(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Me(Md,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Me(qe,qe.current&1),t.flags|=128,null):n&t.child.childLanes?Zb(e,t,n):(Me(qe,qe.current&1),e=Or(e,t,n),e!==null?e.sibling:null);Me(qe,qe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jb(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(qe,qe.current),r)break;return null;case 22:case 23:return t.lanes=0,Gb(e,t,n)}return Or(e,t,n)}var Xb,Qp,e$,t$;Xb=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qp=function(){};e$=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Gi(Jn.current);var o=null;switch(n){case"input":i=yp(e,i),r=yp(e,r),o=[];break;case"select":i=Qe({},i,{value:void 0}),r=Qe({},r,{value:void 0}),o=[];break;case"textarea":i=bp(e,i),r=bp(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Td)}wp(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ws.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ws.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&je("scroll",e),o||l===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};t$=function(e,t,n,r){n!==r&&(t.flags|=4)};function os(e,t){if(!Ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function St(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function n7(e,t,n){var r=t.pendingProps;switch(Rg(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(t),null;case 1:return Ht(t.type)&&Ad(),St(t),null;case 3:return r=t.stateNode,ka(),ze(Bt),ze(kt),Hg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(lu(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nn!==null&&(r1(Nn),Nn=null))),Qp(e,t),St(t),null;case 5:Bg(t);var i=Gi(nl.current);if(n=t.type,e!==null&&t.stateNode!=null)e$(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(G(166));return St(t),null}if(e=Gi(Jn.current),lu(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Vn]=t,r[el]=o,e=(t.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<_s.length;i++)je(_s[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":Ly(r,o),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},je("invalid",r);break;case"textarea":Uy(r,o),je("invalid",r)}wp(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&su(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&su(r.textContent,l,e),i=["children",""+l]):Ws.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&je("scroll",r)}switch(n){case"input":Xl(r),zy(r,o,!0);break;case"textarea":Xl(r),By(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Td)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=k4(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Vn]=t,e[el]=r,Xb(e,t,!1,!1),t.stateNode=e;e:{switch(a=Sp(n,r),n){case"dialog":je("cancel",e),je("close",e),i=r;break;case"iframe":case"object":case"embed":je("load",e),i=r;break;case"video":case"audio":for(i=0;i<_s.length;i++)je(_s[i],e);i=r;break;case"source":je("error",e),i=r;break;case"img":case"image":case"link":je("error",e),je("load",e),i=r;break;case"details":je("toggle",e),i=r;break;case"input":Ly(e,r),i=yp(e,r),je("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Qe({},r,{value:void 0}),je("invalid",e);break;case"textarea":Uy(e,r),i=bp(e,r),je("invalid",e);break;default:i=r}wp(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?I4(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&N4(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ys(e,u):typeof u=="number"&&Ys(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ws.hasOwnProperty(o)?u!=null&&o==="onScroll"&&je("scroll",e):u!=null&&xg(e,o,u,a))}switch(n){case"input":Xl(e),zy(e,r,!1);break;case"textarea":Xl(e),By(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gi(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ca(e,!!r.multiple,o,!1):r.defaultValue!=null&&ca(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Td)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return St(t),null;case 6:if(e&&t.stateNode!=null)t$(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(G(166));if(n=Gi(nl.current),Gi(Jn.current),lu(t)){if(r=t.stateNode,n=t.memoizedProps,r[Vn]=t,(o=r.nodeValue!==n)&&(e=Qt,e!==null))switch(e.tag){case 3:su(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&su(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vn]=t,t.stateNode=r}return St(t),null;case 13:if(ze(qe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ye&&Gt!==null&&t.mode&1&&!(t.flags&128))vb(),Oa(),t.flags|=98560,o=!1;else if(o=lu(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(G(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(G(317));o[Vn]=t}else Oa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;St(t),o=!1}else Nn!==null&&(r1(Nn),Nn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||qe.current&1?lt===0&&(lt=3):tm())),t.updateQueue!==null&&(t.flags|=4),St(t),null);case 4:return ka(),Qp(e,t),e===null&&Js(t.stateNode.containerInfo),St(t),null;case 10:return jg(t.type._context),St(t),null;case 17:return Ht(t.type)&&Ad(),St(t),null;case 19:if(ze(qe),o=t.memoizedState,o===null)return St(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)os(o,!1);else{if(lt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=zd(e),a!==null){for(t.flags|=128,os(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Me(qe,qe.current&1|2),t.child}e=e.sibling}o.tail!==null&&tt()>Ea&&(t.flags|=128,r=!0,os(o,!1),t.lanes=4194304)}else{if(!r)if(e=zd(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),os(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Ye)return St(t),null}else 2*tt()-o.renderingStartTime>Ea&&n!==1073741824&&(t.flags|=128,r=!0,os(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=tt(),t.sibling=null,n=qe.current,Me(qe,r?n&1|2:n&1),t):(St(t),null);case 22:case 23:return em(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Yt&1073741824&&(St(t),t.subtreeFlags&6&&(t.flags|=8192)):St(t),null;case 24:return null;case 25:return null}throw Error(G(156,t.tag))}function r7(e,t){switch(Rg(t),t.tag){case 1:return Ht(t.type)&&Ad(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ka(),ze(Bt),ze(kt),Hg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bg(t),null;case 13:if(ze(qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(qe),null;case 4:return ka(),null;case 10:return jg(t.type._context),null;case 22:case 23:return em(),null;case 24:return null;default:return null}}var cu=!1,Pt=!1,i7=typeof WeakSet=="function"?WeakSet:Set,ue=null;function ia(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ze(e,t,r)}else n.current=null}function Kp(e,t,n){try{n()}catch(r){Ze(e,t,r)}}var I2=!1;function o7(e,t){if(Ap=Nd,e=ob(),Tg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,d=0,c=0,h=e,g=null;t:for(;;){for(var b;h!==n||i!==0&&h.nodeType!==3||(l=a+i),h!==o||r!==0&&h.nodeType!==3||(u=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(b=h.firstChild)!==null;)g=h,h=b;for(;;){if(h===e)break t;if(g===n&&++d===i&&(l=a),g===o&&++c===r&&(u=a),(b=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=b}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rp={focusedElem:e,selectionRange:n},Nd=!1,ue=t;ue!==null;)if(t=ue,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ue=e;else for(;ue!==null;){t=ue;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,$=v.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:_n(t.type,w),$);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(S){Ze(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,ue=e;break}ue=t.return}return v=I2,I2=!1,v}function Ds(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Kp(t,n,o)}i=i.next}while(i!==r)}}function jc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function n$(e){var t=e.alternate;t!==null&&(e.alternate=null,n$(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Vn],delete t[el],delete t[Mp],delete t[U9],delete t[B9])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function r$(e){return e.tag===5||e.tag===3||e.tag===4}function T2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||r$(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Td));else if(r!==4&&(e=e.child,e!==null))for(Jp(e,t,n),e=e.sibling;e!==null;)Jp(e,t,n),e=e.sibling}function Xp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xp(e,t,n),e=e.sibling;e!==null;)Xp(e,t,n),e=e.sibling}var vt=null,kn=!1;function Dr(e,t,n){for(n=n.child;n!==null;)i$(e,t,n),n=n.sibling}function i$(e,t,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(Ec,n)}catch{}switch(n.tag){case 5:Pt||ia(n,t);case 6:var r=vt,i=kn;vt=null,Dr(e,t,n),vt=r,kn=i,vt!==null&&(kn?(e=vt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):vt.removeChild(n.stateNode));break;case 18:vt!==null&&(kn?(e=vt,n=n.stateNode,e.nodeType===8?ch(e.parentNode,n):e.nodeType===1&&ch(e,n),Qs(e)):ch(vt,n.stateNode));break;case 4:r=vt,i=kn,vt=n.stateNode.containerInfo,kn=!0,Dr(e,t,n),vt=r,kn=i;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Kp(n,t,a),i=i.next}while(i!==r)}Dr(e,t,n);break;case 1:if(!Pt&&(ia(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ze(n,t,l)}Dr(e,t,n);break;case 21:Dr(e,t,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,Dr(e,t,n),Pt=r):Dr(e,t,n);break;default:Dr(e,t,n)}}function A2(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new i7),t.forEach(function(r){var i=p7.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $n(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:vt=l.stateNode,kn=!1;break e;case 3:vt=l.stateNode.containerInfo,kn=!0;break e;case 4:vt=l.stateNode.containerInfo,kn=!0;break e}l=l.return}if(vt===null)throw Error(G(160));i$(o,a,i),vt=null,kn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){Ze(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)o$(t,e),t=t.sibling}function o$(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($n(t,e),Un(e),r&4){try{Ds(3,e,e.return),jc(3,e)}catch(w){Ze(e,e.return,w)}try{Ds(5,e,e.return)}catch(w){Ze(e,e.return,w)}}break;case 1:$n(t,e),Un(e),r&512&&n!==null&&ia(n,n.return);break;case 5:if($n(t,e),Un(e),r&512&&n!==null&&ia(n,n.return),e.flags&32){var i=e.stateNode;try{Ys(i,"")}catch(w){Ze(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&O4(i,o),Sp(l,a);var d=Sp(l,o);for(a=0;a<u.length;a+=2){var c=u[a],h=u[a+1];c==="style"?I4(i,h):c==="dangerouslySetInnerHTML"?N4(i,h):c==="children"?Ys(i,h):xg(i,c,h,d)}switch(l){case"input":vp(i,o);break;case"textarea":_4(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var b=o.value;b!=null?ca(i,!!o.multiple,b,!1):g!==!!o.multiple&&(o.defaultValue!=null?ca(i,!!o.multiple,o.defaultValue,!0):ca(i,!!o.multiple,o.multiple?[]:"",!1))}i[el]=o}catch(w){Ze(e,e.return,w)}}break;case 6:if($n(t,e),Un(e),r&4){if(e.stateNode===null)throw Error(G(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Ze(e,e.return,w)}}break;case 3:if($n(t,e),Un(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qs(t.containerInfo)}catch(w){Ze(e,e.return,w)}break;case 4:$n(t,e),Un(e);break;case 13:$n(t,e),Un(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Jg=tt())),r&4&&A2(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Pt=(d=Pt)||c,$n(t,e),Pt=d):$n(t,e),Un(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!c&&e.mode&1)for(ue=e,c=e.child;c!==null;){for(h=ue=c;ue!==null;){switch(g=ue,b=g.child,g.tag){case 0:case 11:case 14:case 15:Ds(4,g,g.return);break;case 1:ia(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){Ze(r,n,w)}}break;case 5:ia(g,g.return);break;case 22:if(g.memoizedState!==null){F2(h);continue}}b!==null?(b.return=g,ue=b):F2(h)}c=c.sibling}e:for(c=null,h=e;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,u=h.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=E4("display",a))}catch(w){Ze(e,e.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(w){Ze(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:$n(t,e),Un(e),r&4&&A2(e);break;case 21:break;default:$n(t,e),Un(e)}}function Un(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(r$(n)){var r=n;break e}n=n.return}throw Error(G(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ys(i,""),r.flags&=-33);var o=T2(e);Xp(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=T2(e);Jp(e,l,a);break;default:throw Error(G(161))}}catch(u){Ze(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function a7(e,t,n){ue=e,a$(e)}function a$(e,t,n){for(var r=(e.mode&1)!==0;ue!==null;){var i=ue,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||cu;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Pt;l=cu;var d=Pt;if(cu=a,(Pt=u)&&!d)for(ue=i;ue!==null;)a=ue,u=a.child,a.tag===22&&a.memoizedState!==null?D2(i):u!==null?(u.return=a,ue=u):D2(i);for(;o!==null;)ue=o,a$(o),o=o.sibling;ue=i,cu=l,Pt=d}R2(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ue=o):R2(e)}}function R2(e){for(;ue!==null;){var t=ue;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pt||jc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:_n(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&y2(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}y2(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var c=d.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Qs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}Pt||t.flags&512&&Zp(t)}catch(g){Ze(t,t.return,g)}}if(t===e){ue=null;break}if(n=t.sibling,n!==null){n.return=t.return,ue=n;break}ue=t.return}}function F2(e){for(;ue!==null;){var t=ue;if(t===e){ue=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ue=n;break}ue=t.return}}function D2(e){for(;ue!==null;){var t=ue;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jc(4,t)}catch(u){Ze(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Ze(t,i,u)}}var o=t.return;try{Zp(t)}catch(u){Ze(t,o,u)}break;case 5:var a=t.return;try{Zp(t)}catch(u){Ze(t,a,u)}}}catch(u){Ze(t,t.return,u)}if(t===e){ue=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ue=l;break}ue=t.return}}var s7=Math.ceil,Hd=Er.ReactCurrentDispatcher,Kg=Er.ReactCurrentOwner,pn=Er.ReactCurrentBatchConfig,Se=0,ht=null,ot=null,xt=0,Yt=0,oa=$i(0),lt=0,al=null,oo=0,Lc=0,Zg=0,Ms=null,zt=null,Jg=0,Ea=1/0,dr=null,Wd=!1,e1=null,oi=null,fu=!1,Qr=null,Yd=0,js=0,t1=null,td=-1,nd=0;function At(){return Se&6?tt():td!==-1?td:td=tt()}function ai(e){return e.mode&1?Se&2&&xt!==0?xt&-xt:W9.transition!==null?(nd===0&&(nd=H4()),nd):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:K4(e.type)),e):1}function Rn(e,t,n,r){if(50<js)throw js=0,t1=null,Error(G(185));Sl(e,n,r),(!(Se&2)||e!==ht)&&(e===ht&&(!(Se&2)&&(Lc|=n),lt===4&&Vr(e,xt)),Wt(e,r),n===1&&Se===0&&!(t.mode&1)&&(Ea=tt()+500,Fc&&wi()))}function Wt(e,t){var n=e.callbackNode;W8(e,t);var r=kd(e,e===ht?xt:0);if(r===0)n!==null&&Yy(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Yy(n),t===1)e.tag===0?H9(M2.bind(null,e)):gb(M2.bind(null,e)),L9(function(){!(Se&6)&&wi()}),n=null;else{switch(W4(r)){case 1:n=Cg;break;case 4:n=U4;break;case 16:n=_d;break;case 536870912:n=B4;break;default:n=_d}n=p$(n,s$.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function s$(e,t){if(td=-1,nd=0,Se&6)throw Error(G(327));var n=e.callbackNode;if(ma()&&e.callbackNode!==n)return null;var r=kd(e,e===ht?xt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Vd(e,r);else{t=r;var i=Se;Se|=2;var o=u$();(ht!==e||xt!==t)&&(dr=null,Ea=tt()+500,Ji(e,t));do try{d7();break}catch(l){l$(e,l)}while(1);Mg(),Hd.current=o,Se=i,ot!==null?t=0:(ht=null,xt=0,t=lt)}if(t!==0){if(t===2&&(i=kp(e),i!==0&&(r=i,t=n1(e,i))),t===1)throw n=al,Ji(e,0),Vr(e,r),Wt(e,tt()),n;if(t===6)Vr(e,r);else{if(i=e.current.alternate,!(r&30)&&!l7(i)&&(t=Vd(e,r),t===2&&(o=kp(e),o!==0&&(r=o,t=n1(e,o))),t===1))throw n=al,Ji(e,0),Vr(e,r),Wt(e,tt()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(G(345));case 2:Bi(e,zt,dr);break;case 3:if(Vr(e,r),(r&130023424)===r&&(t=Jg+500-tt(),10<t)){if(kd(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){At(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Dp(Bi.bind(null,e,zt,dr),t);break}Bi(e,zt,dr);break;case 4:if(Vr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-An(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=tt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*s7(r/1960))-r,10<r){e.timeoutHandle=Dp(Bi.bind(null,e,zt,dr),r);break}Bi(e,zt,dr);break;case 5:Bi(e,zt,dr);break;default:throw Error(G(329))}}}return Wt(e,tt()),e.callbackNode===n?s$.bind(null,e):null}function n1(e,t){var n=Ms;return e.current.memoizedState.isDehydrated&&(Ji(e,t).flags|=256),e=Vd(e,t),e!==2&&(t=zt,zt=n,t!==null&&r1(t)),e}function r1(e){zt===null?zt=e:zt.push.apply(zt,e)}function l7(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Dn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vr(e,t){for(t&=~Zg,t&=~Lc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-An(t),r=1<<n;e[n]=-1,t&=~r}}function M2(e){if(Se&6)throw Error(G(327));ma();var t=kd(e,0);if(!(t&1))return Wt(e,tt()),null;var n=Vd(e,t);if(e.tag!==0&&n===2){var r=kp(e);r!==0&&(t=r,n=n1(e,r))}if(n===1)throw n=al,Ji(e,0),Vr(e,t),Wt(e,tt()),n;if(n===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bi(e,zt,dr),Wt(e,tt()),null}function Xg(e,t){var n=Se;Se|=1;try{return e(t)}finally{Se=n,Se===0&&(Ea=tt()+500,Fc&&wi())}}function ao(e){Qr!==null&&Qr.tag===0&&!(Se&6)&&ma();var t=Se;Se|=1;var n=pn.transition,r=Ee;try{if(pn.transition=null,Ee=1,e)return e()}finally{Ee=r,pn.transition=n,Se=t,!(Se&6)&&wi()}}function em(){Yt=oa.current,ze(oa)}function Ji(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,j9(n)),ot!==null)for(n=ot.return;n!==null;){var r=n;switch(Rg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ad();break;case 3:ka(),ze(Bt),ze(kt),Hg();break;case 5:Bg(r);break;case 4:ka();break;case 13:ze(qe);break;case 19:ze(qe);break;case 10:jg(r.type._context);break;case 22:case 23:em()}n=n.return}if(ht=e,ot=e=si(e.current,null),xt=Yt=t,lt=0,al=null,Zg=Lc=oo=0,zt=Ms=null,qi!==null){for(t=0;t<qi.length;t++)if(n=qi[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}qi=null}return e}function l$(e,t){do{var n=ot;try{if(Mg(),Ju.current=Bd,Ud){for(var r=Ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ud=!1}if(io=0,ft=st=Ge=null,Fs=!1,rl=0,Kg.current=null,n===null||n.return===null){lt=1,al=t,ot=null;break}e:{var o=e,a=n.return,l=n,u=t;if(t=xt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,c=l,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var b=C2(a);if(b!==null){b.flags&=-257,P2(b,a,l,o,t),b.mode&1&&S2(o,d,t),t=b,u=d;var v=t.updateQueue;if(v===null){var w=new Set;w.add(u),t.updateQueue=w}else v.add(u);break e}else{if(!(t&1)){S2(o,d,t),tm();break e}u=Error(G(426))}}else if(Ye&&l.mode&1){var $=C2(a);if($!==null){!($.flags&65536)&&($.flags|=256),P2($,a,l,o,t),Fg(Na(u,l));break e}}o=u=Na(u,l),lt!==4&&(lt=2),Ms===null?Ms=[o]:Ms.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Yb(o,u,t);m2(o,m);break e;case 1:l=u;var p=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(oi===null||!oi.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Vb(o,l,t);m2(o,S);break e}}o=o.return}while(o!==null)}c$(n)}catch(P){t=P,ot===n&&n!==null&&(ot=n=n.return);continue}break}while(1)}function u$(){var e=Hd.current;return Hd.current=Bd,e===null?Bd:e}function tm(){(lt===0||lt===3||lt===2)&&(lt=4),ht===null||!(oo&268435455)&&!(Lc&268435455)||Vr(ht,xt)}function Vd(e,t){var n=Se;Se|=2;var r=u$();(ht!==e||xt!==t)&&(dr=null,Ji(e,t));do try{u7();break}catch(i){l$(e,i)}while(1);if(Mg(),Se=n,Hd.current=r,ot!==null)throw Error(G(261));return ht=null,xt=0,lt}function u7(){for(;ot!==null;)d$(ot)}function d7(){for(;ot!==null&&!F8();)d$(ot)}function d$(e){var t=h$(e.alternate,e,Yt);e.memoizedProps=e.pendingProps,t===null?c$(e):ot=t,Kg.current=null}function c$(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=r7(n,t),n!==null){n.flags&=32767,ot=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{lt=6,ot=null;return}}else if(n=n7(n,t,Yt),n!==null){ot=n;return}if(t=t.sibling,t!==null){ot=t;return}ot=t=e}while(t!==null);lt===0&&(lt=5)}function Bi(e,t,n){var r=Ee,i=pn.transition;try{pn.transition=null,Ee=1,c7(e,t,n,r)}finally{pn.transition=i,Ee=r}return null}function c7(e,t,n,r){do ma();while(Qr!==null);if(Se&6)throw Error(G(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Y8(e,o),e===ht&&(ot=ht=null,xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fu||(fu=!0,p$(_d,function(){return ma(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=pn.transition,pn.transition=null;var a=Ee;Ee=1;var l=Se;Se|=4,Kg.current=null,o7(e,n),o$(n,e),I9(Rp),Nd=!!Ap,Rp=Ap=null,e.current=n,a7(n),D8(),Se=l,Ee=a,pn.transition=o}else e.current=n;if(fu&&(fu=!1,Qr=e,Yd=i),o=e.pendingLanes,o===0&&(oi=null),L8(n.stateNode),Wt(e,tt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wd)throw Wd=!1,e=e1,e1=null,e;return Yd&1&&e.tag!==0&&ma(),o=e.pendingLanes,o&1?e===t1?js++:(js=0,t1=e):js=0,wi(),null}function ma(){if(Qr!==null){var e=W4(Yd),t=pn.transition,n=Ee;try{if(pn.transition=null,Ee=16>e?16:e,Qr===null)var r=!1;else{if(e=Qr,Qr=null,Yd=0,Se&6)throw Error(G(331));var i=Se;for(Se|=4,ue=e.current;ue!==null;){var o=ue,a=o.child;if(ue.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(ue=d;ue!==null;){var c=ue;switch(c.tag){case 0:case 11:case 15:Ds(8,c,o)}var h=c.child;if(h!==null)h.return=c,ue=h;else for(;ue!==null;){c=ue;var g=c.sibling,b=c.return;if(n$(c),c===d){ue=null;break}if(g!==null){g.return=b,ue=g;break}ue=b}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var $=w.sibling;w.sibling=null,w=$}while(w!==null)}}ue=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,ue=a;else e:for(;ue!==null;){if(o=ue,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ds(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,ue=m;break e}ue=o.return}}var p=e.current;for(ue=p;ue!==null;){a=ue;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,ue=x;else e:for(a=p;ue!==null;){if(l=ue,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:jc(9,l)}}catch(P){Ze(l,l.return,P)}if(l===a){ue=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,ue=S;break e}ue=l.return}}if(Se=i,wi(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(Ec,e)}catch{}r=!0}return r}finally{Ee=n,pn.transition=t}}return!1}function j2(e,t,n){t=Na(n,t),t=Yb(e,t,1),e=ii(e,t,1),t=At(),e!==null&&(Sl(e,1,t),Wt(e,t))}function Ze(e,t,n){if(e.tag===3)j2(e,e,n);else for(;t!==null;){if(t.tag===3){j2(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(oi===null||!oi.has(r))){e=Na(n,e),e=Vb(t,e,1),t=ii(t,e,1),e=At(),t!==null&&(Sl(t,1,e),Wt(t,e));break}}t=t.return}}function f7(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=At(),e.pingedLanes|=e.suspendedLanes&n,ht===e&&(xt&n)===n&&(lt===4||lt===3&&(xt&130023424)===xt&&500>tt()-Jg?Ji(e,0):Zg|=n),Wt(e,t)}function f$(e,t){t===0&&(e.mode&1?(t=nu,nu<<=1,!(nu&130023424)&&(nu=4194304)):t=1);var n=At();e=Pr(e,t),e!==null&&(Sl(e,t,n),Wt(e,n))}function h7(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),f$(e,n)}function p7(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(G(314))}r!==null&&r.delete(t),f$(e,n)}var h$;h$=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Bt.current)Ut=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ut=!1,t7(e,t,n);Ut=!!(e.flags&131072)}else Ut=!1,Ye&&t.flags&1048576&&mb(t,Dd,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ed(e,t),e=t.pendingProps;var i=Pa(t,kt.current);ga(t,n),i=Yg(null,t,r,e,i,n);var o=Vg();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ht(r)?(o=!0,Rd(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zg(t),i.updater=Dc,t.stateNode=i,i._reactInternals=t,Hp(t,r,e,n),t=Vp(null,t,r,!0,o,n)):(t.tag=0,Ye&&o&&Ag(t),It(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ed(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=m7(r),e=_n(r,e),i){case 0:t=Yp(null,t,r,e,n);break e;case 1:t=k2(null,t,r,e,n);break e;case 11:t=O2(null,t,r,e,n);break e;case 14:t=_2(null,t,r,_n(r.type,e),n);break e}throw Error(G(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_n(r,i),Yp(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_n(r,i),k2(e,t,r,i,n);case 3:e:{if(Kb(t),e===null)throw Error(G(387));r=t.pendingProps,o=t.memoizedState,i=o.element,bb(e,t),Ld(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Na(Error(G(423)),t),t=N2(e,t,r,n,i);break e}else if(r!==i){i=Na(Error(G(424)),t),t=N2(e,t,r,n,i);break e}else for(Gt=ri(t.stateNode.containerInfo.firstChild),Qt=t,Ye=!0,Nn=null,n=Cb(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Oa(),r===i){t=Or(e,t,n);break e}It(e,t,r,n)}t=t.child}return t;case 5:return Pb(t),e===null&&zp(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Fp(r,i)?a=null:o!==null&&Fp(r,o)&&(t.flags|=32),Qb(e,t),It(e,t,a,n),t.child;case 6:return e===null&&zp(t),null;case 13:return Zb(e,t,n);case 4:return Ug(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_a(t,null,r,n):It(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_n(r,i),O2(e,t,r,i,n);case 7:return It(e,t,t.pendingProps,n),t.child;case 8:return It(e,t,t.pendingProps.children,n),t.child;case 12:return It(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Me(Md,r._currentValue),r._currentValue=a,o!==null)if(Dn(o.value,a)){if(o.children===i.children&&!Bt.current){t=Or(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=br(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var c=d.pending;c===null?u.next=u:(u.next=c.next,c.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Up(o.return,n,t),l.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(G(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Up(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}It(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ga(t,n),i=gn(i),r=r(i),t.flags|=1,It(e,t,r,n),t.child;case 14:return r=t.type,i=_n(r,t.pendingProps),i=_n(r.type,i),_2(e,t,r,i,n);case 15:return qb(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_n(r,i),ed(e,t),t.tag=1,Ht(r)?(e=!0,Rd(t)):e=!1,ga(t,n),wb(t,r,i),Hp(t,r,i,n),Vp(null,t,r,!0,e,n);case 19:return Jb(e,t,n);case 22:return Gb(e,t,n)}throw Error(G(156,t.tag))};function p$(e,t){return z4(e,t)}function g7(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(e,t,n,r){return new g7(e,t,n,r)}function nm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function m7(e){if(typeof e=="function")return nm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$g)return 11;if(e===wg)return 14}return 2}function si(e,t){var n=e.alternate;return n===null?(n=fn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function rd(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")nm(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Qo:return Xi(n.children,i,o,t);case bg:a=8,i|=8;break;case hp:return e=fn(12,n,t,i|2),e.elementType=hp,e.lanes=o,e;case pp:return e=fn(13,n,t,i),e.elementType=pp,e.lanes=o,e;case gp:return e=fn(19,n,t,i),e.elementType=gp,e.lanes=o,e;case S4:return zc(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $4:a=10;break e;case w4:a=9;break e;case $g:a=11;break e;case wg:a=14;break e;case Br:a=16,r=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return t=fn(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Xi(e,t,n,r){return e=fn(7,e,r,t),e.lanes=n,e}function zc(e,t,n,r){return e=fn(22,e,r,t),e.elementType=S4,e.lanes=n,e.stateNode={isHidden:!1},e}function xh(e,t,n){return e=fn(6,e,null,t),e.lanes=n,e}function bh(e,t,n){return t=fn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function y7(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eh(0),this.expirationTimes=eh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rm(e,t,n,r,i,o,a,l,u){return e=new y7(e,t,n,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=fn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zg(o),e}function v7(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Go,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function g$(e){if(!e)return mi;e=e._reactInternals;e:{if(uo(e)!==e||e.tag!==1)throw Error(G(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ht(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(G(171))}if(e.tag===1){var n=e.type;if(Ht(n))return pb(e,n,t)}return t}function m$(e,t,n,r,i,o,a,l,u){return e=rm(n,r,!0,e,i,o,a,l,u),e.context=g$(null),n=e.current,r=At(),i=ai(n),o=br(r,i),o.callback=t??null,ii(n,o,i),e.current.lanes=i,Sl(e,i,r),Wt(e,r),e}function Uc(e,t,n,r){var i=t.current,o=At(),a=ai(i);return n=g$(n),t.context===null?t.context=n:t.pendingContext=n,t=br(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ii(i,t,a),e!==null&&(Rn(e,i,a,o),Zu(e,i,a)),a}function qd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function L2(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function im(e,t){L2(e,t),(e=e.alternate)&&L2(e,t)}function x7(){return null}var y$=typeof reportError=="function"?reportError:function(e){console.error(e)};function om(e){this._internalRoot=e}Bc.prototype.render=om.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));Uc(e,t,null,null)};Bc.prototype.unmount=om.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ao(function(){Uc(null,e,null,null)}),t[Cr]=null}};function Bc(e){this._internalRoot=e}Bc.prototype.unstable_scheduleHydration=function(e){if(e){var t=q4();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yr.length&&t!==0&&t<Yr[n].priority;n++);Yr.splice(n,0,e),n===0&&Q4(e)}};function am(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function z2(){}function b7(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=qd(a);o.call(d)}}var a=m$(t,r,e,0,null,!1,!1,"",z2);return e._reactRootContainer=a,e[Cr]=a.current,Js(e.nodeType===8?e.parentNode:e),ao(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=qd(u);l.call(d)}}var u=rm(e,0,!1,null,null,!1,!1,"",z2);return e._reactRootContainer=u,e[Cr]=u.current,Js(e.nodeType===8?e.parentNode:e),ao(function(){Uc(t,u,n,r)}),u}function Wc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var u=qd(a);l.call(u)}}Uc(t,a,e,i)}else a=b7(n,t,e,i,r);return qd(a)}Y4=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Os(t.pendingLanes);n!==0&&(Pg(t,n|1),Wt(t,tt()),!(Se&6)&&(Ea=tt()+500,wi()))}break;case 13:ao(function(){var r=Pr(e,1);if(r!==null){var i=At();Rn(r,e,1,i)}}),im(e,1)}};Og=function(e){if(e.tag===13){var t=Pr(e,134217728);if(t!==null){var n=At();Rn(t,e,134217728,n)}im(e,134217728)}};V4=function(e){if(e.tag===13){var t=ai(e),n=Pr(e,t);if(n!==null){var r=At();Rn(n,e,t,r)}im(e,t)}};q4=function(){return Ee};G4=function(e,t){var n=Ee;try{return Ee=e,t()}finally{Ee=n}};Pp=function(e,t,n){switch(t){case"input":if(vp(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Rc(r);if(!i)throw Error(G(90));P4(r),vp(r,i)}}}break;case"textarea":_4(e,n);break;case"select":t=n.value,t!=null&&ca(e,!!n.multiple,t,!1)}};R4=Xg;F4=ao;var $7={usingClientEntryPoint:!1,Events:[Pl,Xo,Rc,T4,A4,Xg]},as={findFiberByHostInstance:Vi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},w7={bundleType:as.bundleType,version:as.version,rendererPackageName:as.rendererPackageName,rendererConfig:as.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Er.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=j4(e),e===null?null:e.stateNode},findFiberByHostInstance:as.findFiberByHostInstance||x7,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{Ec=hu.inject(w7),Zn=hu}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$7;Jt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!am(t))throw Error(G(200));return v7(e,t,null,n)};Jt.createRoot=function(e,t){if(!am(e))throw Error(G(299));var n=!1,r="",i=y$;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=rm(e,1,!1,null,null,n,!1,r,i),e[Cr]=t.current,Js(e.nodeType===8?e.parentNode:e),new om(t)};Jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=j4(t),e=e===null?null:e.stateNode,e};Jt.flushSync=function(e){return ao(e)};Jt.hydrate=function(e,t,n){if(!Hc(t))throw Error(G(200));return Wc(null,e,t,!0,n)};Jt.hydrateRoot=function(e,t,n){if(!am(e))throw Error(G(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=y$;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=m$(t,null,e,1,n??null,i,!1,o,a),e[Cr]=t.current,Js(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Bc(t)};Jt.render=function(e,t,n){if(!Hc(t))throw Error(G(200));return Wc(null,e,t,!1,n)};Jt.unmountComponentAtNode=function(e){if(!Hc(e))throw Error(G(40));return e._reactRootContainer?(ao(function(){Wc(null,null,e,!1,function(){e._reactRootContainer=null,e[Cr]=null})}),!0):!1};Jt.unstable_batchedUpdates=Xg;Jt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hc(n))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return Wc(e,t,n,!1,r)};Jt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Jt})(x8);var U2=Sd;dp.createRoot=U2.createRoot,dp.hydrateRoot=U2.hydrateRoot;var Gd={},S7={get exports(){return Gd},set exports(e){Gd=e}},Fe={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yc=60103,Vc=60106,_l=60107,kl=60108,Nl=60114,El=60109,Il=60110,Tl=60112,Al=60113,sm=60120,Rl=60115,Fl=60116,v$=60121,x$=60122,b$=60117,$$=60129,w$=60131;if(typeof Symbol=="function"&&Symbol.for){var mt=Symbol.for;Yc=mt("react.element"),Vc=mt("react.portal"),_l=mt("react.fragment"),kl=mt("react.strict_mode"),Nl=mt("react.profiler"),El=mt("react.provider"),Il=mt("react.context"),Tl=mt("react.forward_ref"),Al=mt("react.suspense"),sm=mt("react.suspense_list"),Rl=mt("react.memo"),Fl=mt("react.lazy"),v$=mt("react.block"),x$=mt("react.server.block"),b$=mt("react.fundamental"),$$=mt("react.debug_trace_mode"),w$=mt("react.legacy_hidden")}function Ln(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Yc:switch(e=e.type,e){case _l:case Nl:case kl:case Al:case sm:return e;default:switch(e=e&&e.$$typeof,e){case Il:case Tl:case Fl:case Rl:case El:return e;default:return t}}case Vc:return t}}}var C7=El,P7=Yc,O7=Tl,_7=_l,k7=Fl,N7=Rl,E7=Vc,I7=Nl,T7=kl,A7=Al;Fe.ContextConsumer=Il;Fe.ContextProvider=C7;Fe.Element=P7;Fe.ForwardRef=O7;Fe.Fragment=_7;Fe.Lazy=k7;Fe.Memo=N7;Fe.Portal=E7;Fe.Profiler=I7;Fe.StrictMode=T7;Fe.Suspense=A7;Fe.isAsyncMode=function(){return!1};Fe.isConcurrentMode=function(){return!1};Fe.isContextConsumer=function(e){return Ln(e)===Il};Fe.isContextProvider=function(e){return Ln(e)===El};Fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yc};Fe.isForwardRef=function(e){return Ln(e)===Tl};Fe.isFragment=function(e){return Ln(e)===_l};Fe.isLazy=function(e){return Ln(e)===Fl};Fe.isMemo=function(e){return Ln(e)===Rl};Fe.isPortal=function(e){return Ln(e)===Vc};Fe.isProfiler=function(e){return Ln(e)===Nl};Fe.isStrictMode=function(e){return Ln(e)===kl};Fe.isSuspense=function(e){return Ln(e)===Al};Fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===_l||e===Nl||e===$$||e===kl||e===Al||e===sm||e===w$||typeof e=="object"&&e!==null&&(e.$$typeof===Fl||e.$$typeof===Rl||e.$$typeof===El||e.$$typeof===Il||e.$$typeof===Tl||e.$$typeof===b$||e.$$typeof===v$||e[0]===x$)};Fe.typeOf=Ln;(function(e){e.exports=Fe})(S7);function R7(e){function t(D,H,Y,oe,k){for(var de=0,Z=0,Ce=0,me=0,ge,he,Ne=0,De=0,fe,O=fe=ge=0,I=0,A=0,re=0,q=0,V=Y.length,se=V-1,ve,ae="",Ae="",Ja="",Pi="",rn;I<V;){if(he=Y.charCodeAt(I),I===se&&Z+me+Ce+de!==0&&(Z!==0&&(he=Z===47?10:47),me=Ce=de=0,V++,se++),Z+me+Ce+de===0){if(I===se&&(0<A&&(ae=ae.replace(g,"")),0<ae.trim().length)){switch(he){case 32:case 9:case 59:case 13:case 10:break;default:ae+=Y.charAt(I)}he=59}switch(he){case 123:for(ae=ae.trim(),ge=ae.charCodeAt(0),fe=1,q=++I;I<V;){switch(he=Y.charCodeAt(I)){case 123:fe++;break;case 125:fe--;break;case 47:switch(he=Y.charCodeAt(I+1)){case 42:case 47:e:{for(O=I+1;O<se;++O)switch(Y.charCodeAt(O)){case 47:if(he===42&&Y.charCodeAt(O-1)===42&&I+2!==O){I=O+1;break e}break;case 10:if(he===47){I=O+1;break e}}I=O}}break;case 91:he++;case 40:he++;case 34:case 39:for(;I++<se&&Y.charCodeAt(I)!==he;);}if(fe===0)break;I++}switch(fe=Y.substring(q,I),ge===0&&(ge=(ae=ae.replace(h,"").trim()).charCodeAt(0)),ge){case 64:switch(0<A&&(ae=ae.replace(g,"")),he=ae.charCodeAt(1),he){case 100:case 109:case 115:case 45:A=H;break;default:A=X}if(fe=t(H,A,fe,he,k+1),q=fe.length,0<L&&(A=n(X,ae,re),rn=l(3,fe,A,H,j,M,q,he,k,oe),ae=A.join(""),rn!==void 0&&(q=(fe=rn.trim()).length)===0&&(he=0,fe="")),0<q)switch(he){case 115:ae=ae.replace(_,a);case 100:case 109:case 45:fe=ae+"{"+fe+"}";break;case 107:ae=ae.replace(p,"$1 $2"),fe=ae+"{"+fe+"}",fe=F===1||F===2&&o("@"+fe,3)?"@-webkit-"+fe+"@"+fe:"@"+fe;break;default:fe=ae+fe,oe===112&&(fe=(Ae+=fe,""))}else fe="";break;default:fe=t(H,n(H,ae,re),fe,oe,k+1)}Ja+=fe,fe=re=A=O=ge=0,ae="",he=Y.charCodeAt(++I);break;case 125:case 59:if(ae=(0<A?ae.replace(g,""):ae).trim(),1<(q=ae.length))switch(O===0&&(ge=ae.charCodeAt(0),ge===45||96<ge&&123>ge)&&(q=(ae=ae.replace(" ",":")).length),0<L&&(rn=l(1,ae,H,D,j,M,Ae.length,oe,k,oe))!==void 0&&(q=(ae=rn.trim()).length)===0&&(ae="\0\0"),ge=ae.charCodeAt(0),he=ae.charCodeAt(1),ge){case 0:break;case 64:if(he===105||he===99){Pi+=ae+Y.charAt(I);break}default:ae.charCodeAt(q-1)!==58&&(Ae+=i(ae,ge,he,ae.charCodeAt(2)))}re=A=O=ge=0,ae="",he=Y.charCodeAt(++I)}}switch(he){case 13:case 10:Z===47?Z=0:1+ge===0&&oe!==107&&0<ae.length&&(A=1,ae+="\0"),0<L*E&&l(0,ae,H,D,j,M,Ae.length,oe,k,oe),M=1,j++;break;case 59:case 125:if(Z+me+Ce+de===0){M++;break}default:switch(M++,ve=Y.charAt(I),he){case 9:case 32:if(me+de+Z===0)switch(Ne){case 44:case 58:case 9:case 32:ve="";break;default:he!==32&&(ve=" ")}break;case 0:ve="\\0";break;case 12:ve="\\f";break;case 11:ve="\\v";break;case 38:me+Z+de===0&&(A=re=1,ve="\f"+ve);break;case 108:if(me+Z+de+J===0&&0<O)switch(I-O){case 2:Ne===112&&Y.charCodeAt(I-3)===58&&(J=Ne);case 8:De===111&&(J=De)}break;case 58:me+Z+de===0&&(O=I);break;case 44:Z+Ce+me+de===0&&(A=1,ve+="\r");break;case 34:case 39:Z===0&&(me=me===he?0:me===0?he:me);break;case 91:me+Z+Ce===0&&de++;break;case 93:me+Z+Ce===0&&de--;break;case 41:me+Z+de===0&&Ce--;break;case 40:if(me+Z+de===0){if(ge===0)switch(2*Ne+3*De){case 533:break;default:ge=1}Ce++}break;case 64:Z+Ce+me+de+O+fe===0&&(fe=1);break;case 42:case 47:if(!(0<me+de+Ce))switch(Z){case 0:switch(2*he+3*Y.charCodeAt(I+1)){case 235:Z=47;break;case 220:q=I,Z=42}break;case 42:he===47&&Ne===42&&q+2!==I&&(Y.charCodeAt(q+2)===33&&(Ae+=Y.substring(q,I+1)),ve="",Z=0)}}Z===0&&(ae+=ve)}De=Ne,Ne=he,I++}if(q=Ae.length,0<q){if(A=H,0<L&&(rn=l(2,Ae,A,D,j,M,q,oe,k,oe),rn!==void 0&&(Ae=rn).length===0))return Pi+Ae+Ja;if(Ae=A.join(",")+"{"+Ae+"}",F*J!==0){switch(F!==2||o(Ae,2)||(J=0),J){case 111:Ae=Ae.replace(S,":-moz-$1")+Ae;break;case 112:Ae=Ae.replace(x,"::-webkit-input-$1")+Ae.replace(x,"::-moz-$1")+Ae.replace(x,":-ms-input-$1")+Ae}J=0}}return Pi+Ae+Ja}function n(D,H,Y){var oe=H.trim().split($);H=oe;var k=oe.length,de=D.length;switch(de){case 0:case 1:var Z=0;for(D=de===0?"":D[0]+" ";Z<k;++Z)H[Z]=r(D,H[Z],Y).trim();break;default:var Ce=Z=0;for(H=[];Z<k;++Z)for(var me=0;me<de;++me)H[Ce++]=r(D[me]+" ",oe[Z],Y).trim()}return H}function r(D,H,Y){var oe=H.charCodeAt(0);switch(33>oe&&(oe=(H=H.trim()).charCodeAt(0)),oe){case 38:return H.replace(m,"$1"+D.trim());case 58:return D.trim()+H.replace(m,"$1"+D.trim());default:if(0<1*Y&&0<H.indexOf("\f"))return H.replace(m,(D.charCodeAt(0)===58?"":"$1")+D.trim())}return D+H}function i(D,H,Y,oe){var k=D+";",de=2*H+3*Y+4*oe;if(de===944){D=k.indexOf(":",9)+1;var Z=k.substring(D,k.length-1).trim();return Z=k.substring(0,D).trim()+Z+";",F===1||F===2&&o(Z,1)?"-webkit-"+Z+Z:Z}if(F===0||F===2&&!o(k,1))return k;switch(de){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(ie,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return Z=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+Z+"-webkit-"+k+"-ms-flex-pack"+Z+k;case 1005:return v.test(k)?k.replace(b,":-webkit-")+k.replace(b,":-moz-")+k:k;case 1e3:switch(Z=k.substring(13).trim(),H=Z.indexOf("-")+1,Z.charCodeAt(0)+Z.charCodeAt(H)){case 226:Z=k.replace(P,"tb");break;case 232:Z=k.replace(P,"tb-rl");break;case 220:Z=k.replace(P,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+Z+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(H=(k=D).length-10,Z=(k.charCodeAt(H)===33?k.substring(0,H):k).substring(D.indexOf(":",7)+1).trim(),de=Z.charCodeAt(0)+(Z.charCodeAt(7)|0)){case 203:if(111>Z.charCodeAt(8))break;case 115:k=k.replace(Z,"-webkit-"+Z)+";"+k;break;case 207:case 102:k=k.replace(Z,"-webkit-"+(102<de?"inline-":"")+"box")+";"+k.replace(Z,"-webkit-"+Z)+";"+k.replace(Z,"-ms-"+Z+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return Z=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+Z+"-ms-flex-"+Z+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(R,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(R,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(z.test(D)===!0)return(Z=D.substring(D.indexOf(":")+1)).charCodeAt(0)===115?i(D.replace("stretch","fill-available"),H,Y,oe).replace(":fill-available",":stretch"):k.replace(Z,"-webkit-"+Z)+k.replace(Z,"-moz-"+Z.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,Y+oe===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+k}return k}function o(D,H){var Y=D.indexOf(H===1?":":"{"),oe=D.substring(0,H!==3?Y:10);return Y=D.substring(Y+1,D.length-1),N(H!==2?oe:oe.replace(W,"$1"),Y,H)}function a(D,H){var Y=i(H,H.charCodeAt(0),H.charCodeAt(1),H.charCodeAt(2));return Y!==H+";"?Y.replace(T," or ($1)").substring(4):"("+H+")"}function l(D,H,Y,oe,k,de,Z,Ce,me,ge){for(var he=0,Ne=H,De;he<L;++he)switch(De=te[he].call(c,D,Ne,Y,oe,k,de,Z,Ce,me,ge)){case void 0:case!1:case!0:case null:break;default:Ne=De}if(Ne!==H)return Ne}function u(D){switch(D){case void 0:case null:L=te.length=0;break;default:if(typeof D=="function")te[L++]=D;else if(typeof D=="object")for(var H=0,Y=D.length;H<Y;++H)u(D[H]);else E=!!D|0}return u}function d(D){return D=D.prefix,D!==void 0&&(N=null,D?typeof D!="function"?F=1:(F=2,N=D):F=0),d}function c(D,H){var Y=D;if(33>Y.charCodeAt(0)&&(Y=Y.trim()),U=Y,Y=[U],0<L){var oe=l(-1,H,Y,Y,j,M,0,0,0,0);oe!==void 0&&typeof oe=="string"&&(H=oe)}var k=t(X,Y,H,0,0);return 0<L&&(oe=l(-2,k,Y,Y,j,M,k.length,0,0,0),oe!==void 0&&(k=oe)),U="",J=0,M=j=1,k}var h=/^\0+/g,g=/[\0\r\f]/g,b=/: */g,v=/zoo|gra/,w=/([,: ])(transform)/g,$=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,x=/::(place)/g,S=/:(read-only)/g,P=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,T=/([\s\S]*?);/g,R=/-self|flex-/g,W=/[^]*?(:[rp][el]a[\w-]+)[^]*/,z=/stretch|:\s*\w+\-(?:conte|avail)/,ie=/([^-])(image-set\()/,M=1,j=1,J=0,F=1,X=[],te=[],L=0,N=null,E=0,U="";return c.use=u,c.set=d,e!==void 0&&d(e),c}var F7={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function D7(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var M7=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,B2=D7(function(e){return M7.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),i1={},j7={get exports(){return i1},set exports(e){i1=e}},Ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pt=typeof Symbol=="function"&&Symbol.for,lm=pt?Symbol.for("react.element"):60103,um=pt?Symbol.for("react.portal"):60106,qc=pt?Symbol.for("react.fragment"):60107,Gc=pt?Symbol.for("react.strict_mode"):60108,Qc=pt?Symbol.for("react.profiler"):60114,Kc=pt?Symbol.for("react.provider"):60109,Zc=pt?Symbol.for("react.context"):60110,dm=pt?Symbol.for("react.async_mode"):60111,Jc=pt?Symbol.for("react.concurrent_mode"):60111,Xc=pt?Symbol.for("react.forward_ref"):60112,ef=pt?Symbol.for("react.suspense"):60113,L7=pt?Symbol.for("react.suspense_list"):60120,tf=pt?Symbol.for("react.memo"):60115,nf=pt?Symbol.for("react.lazy"):60116,z7=pt?Symbol.for("react.block"):60121,U7=pt?Symbol.for("react.fundamental"):60117,B7=pt?Symbol.for("react.responder"):60118,H7=pt?Symbol.for("react.scope"):60119;function en(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case lm:switch(e=e.type,e){case dm:case Jc:case qc:case Qc:case Gc:case ef:return e;default:switch(e=e&&e.$$typeof,e){case Zc:case Xc:case nf:case tf:case Kc:return e;default:return t}}case um:return t}}}function S$(e){return en(e)===Jc}Ie.AsyncMode=dm;Ie.ConcurrentMode=Jc;Ie.ContextConsumer=Zc;Ie.ContextProvider=Kc;Ie.Element=lm;Ie.ForwardRef=Xc;Ie.Fragment=qc;Ie.Lazy=nf;Ie.Memo=tf;Ie.Portal=um;Ie.Profiler=Qc;Ie.StrictMode=Gc;Ie.Suspense=ef;Ie.isAsyncMode=function(e){return S$(e)||en(e)===dm};Ie.isConcurrentMode=S$;Ie.isContextConsumer=function(e){return en(e)===Zc};Ie.isContextProvider=function(e){return en(e)===Kc};Ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===lm};Ie.isForwardRef=function(e){return en(e)===Xc};Ie.isFragment=function(e){return en(e)===qc};Ie.isLazy=function(e){return en(e)===nf};Ie.isMemo=function(e){return en(e)===tf};Ie.isPortal=function(e){return en(e)===um};Ie.isProfiler=function(e){return en(e)===Qc};Ie.isStrictMode=function(e){return en(e)===Gc};Ie.isSuspense=function(e){return en(e)===ef};Ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===qc||e===Jc||e===Qc||e===Gc||e===ef||e===L7||typeof e=="object"&&e!==null&&(e.$$typeof===nf||e.$$typeof===tf||e.$$typeof===Kc||e.$$typeof===Zc||e.$$typeof===Xc||e.$$typeof===U7||e.$$typeof===B7||e.$$typeof===H7||e.$$typeof===z7)};Ie.typeOf=en;(function(e){e.exports=Ie})(j7);var cm=i1,W7={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Y7={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},V7={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},C$={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fm={};fm[cm.ForwardRef]=V7;fm[cm.Memo]=C$;function H2(e){return cm.isMemo(e)?C$:fm[e.$$typeof]||W7}var q7=Object.defineProperty,G7=Object.getOwnPropertyNames,W2=Object.getOwnPropertySymbols,Q7=Object.getOwnPropertyDescriptor,K7=Object.getPrototypeOf,Y2=Object.prototype;function P$(e,t,n){if(typeof t!="string"){if(Y2){var r=K7(t);r&&r!==Y2&&P$(e,r,n)}var i=G7(t);W2&&(i=i.concat(W2(t)));for(var o=H2(e),a=H2(t),l=0;l<i.length;++l){var u=i[l];if(!Y7[u]&&!(n&&n[u])&&!(a&&a[u])&&!(o&&o[u])){var d=Q7(t,u);try{q7(e,u,d)}catch{}}}}return e}var Z7=P$;function yr(){return(yr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var V2=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},o1=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Gd.typeOf(e)},Qd=Object.freeze([]),li=Object.freeze({});function sl(e){return typeof e=="function"}function q2(e){return e.displayName||e.name||"Component"}function hm(e){return e&&typeof e.styledComponentId=="string"}var Ia=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",pm=typeof window<"u"&&"HTMLElement"in window,J7=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY);function Dl(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var X7=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&Dl(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(n+1),d=0,c=r.length;d<c;d++)this.tag.insertRule(u,r[d])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),id=new Map,Kd=new Map,Ls=1,pu=function(e){if(id.has(e))return id.get(e);for(;Kd.has(Ls);)Ls++;var t=Ls++;return id.set(e,t),Kd.set(t,e),t},eS=function(e){return Kd.get(e)},tS=function(e,t){t>=Ls&&(Ls=t+1),id.set(e,t),Kd.set(t,e)},nS="style["+Ia+'][data-styled-version="5.3.6"]',rS=new RegExp("^"+Ia+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),iS=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},oS=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(rS);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(tS(d,u),iS(e,d,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(a)}}},aS=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},O$=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var u=l.childNodes,d=u.length;d>=0;d--){var c=u[d];if(c&&c.nodeType===1&&c.hasAttribute(Ia))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ia,"active"),r.setAttribute("data-styled-version","5.3.6");var a=aS();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},sS=function(){function e(n){var r=this.element=O$(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var u=o[a];if(u.ownerNode===i)return u}Dl(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),lS=function(){function e(n){var r=this.element=O$(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),uS=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),G2=pm,dS={isServer:!pm,useCSSOMInjection:!J7},_$=function(){function e(n,r,i){n===void 0&&(n=li),r===void 0&&(r={}),this.options=yr({},dS,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&pm&&G2&&(G2=!1,function(o){for(var a=document.querySelectorAll(nS),l=0,u=a.length;l<u;l++){var d=a[l];d&&d.getAttribute(Ia)!=="active"&&(oS(o,d),d.parentNode&&d.parentNode.removeChild(d))}}(this))}e.registerId=function(n){return pu(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(yr({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new uS(a):o?new sS(a):new lS(a),new X7(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(pu(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(pu(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(pu(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=eS(a);if(l!==void 0){var u=n.names.get(l),d=r.getGroup(a);if(u&&d&&u.size){var c=Ia+".g"+a+'[id="'+l+'"]',h="";u!==void 0&&u.forEach(function(g){g.length>0&&(h+=g+",")}),o+=""+d+c+'{content:"'+h+`"}/*!sc*/
`}}}return o}(this)},e}(),cS=/(a)(d)/gi,Q2=function(e){return String.fromCharCode(e+(e>25?39:97))};function a1(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q2(t%52)+n;return(Q2(t%52)+n).replace(cS,"$1-$2")}var aa=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},k$=function(e){return aa(5381,e)};function fS(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(sl(n)&&!hm(n))return!1}return!0}var hS=k$("5.3.6"),pS=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&fS(t),this.componentId=n,this.baseHash=aa(hS,n),this.baseStyle=r,_$.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=Ta(this.rules,t,n,r).join(""),l=a1(aa(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var u=r(a,"."+l,void 0,i);n.insertRules(i,l,u)}o.push(l),this.staticRulesId=l}else{for(var d=this.rules.length,c=aa(this.baseHash,r.hash),h="",g=0;g<d;g++){var b=this.rules[g];if(typeof b=="string")h+=b;else if(b){var v=Ta(b,t,n,r),w=Array.isArray(v)?v.join(""):v;c=aa(c,w+g),h+=w}}if(h){var $=a1(c>>>0);if(!n.hasNameForId(i,$)){var m=r(h,"."+$,void 0,i);n.insertRules(i,$,m)}o.push($)}}return o.join(" ")},e}(),gS=/^\s*\/\/.*$/gm,mS=[":","[",".","#"];function yS(e){var t,n,r,i,o=e===void 0?li:e,a=o.options,l=a===void 0?li:a,u=o.plugins,d=u===void 0?Qd:u,c=new R7(l),h=[],g=function(w){function $(m){if(m)try{w(m+"}")}catch{}}return function(m,p,x,S,P,_,T,R,W,z){switch(m){case 1:if(W===0&&p.charCodeAt(0)===64)return w(p+";"),"";break;case 2:if(R===0)return p+"/*|*/";break;case 3:switch(R){case 102:case 112:return w(x[0]+p),"";default:return p+(z===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach($)}}}(function(w){h.push(w)}),b=function(w,$,m){return $===0&&mS.indexOf(m[n.length])!==-1||m.match(i)?w:"."+t};function v(w,$,m,p){p===void 0&&(p="&");var x=w.replace(gS,""),S=$&&m?m+" "+$+" { "+x+" }":x;return t=p,n=$,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!$?"":$,S)}return c.use([].concat(d,[function(w,$,m){w===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,b))},g,function(w){if(w===-2){var $=h;return h=[],$}}])),v.hash=d.length?d.reduce(function(w,$){return $.name||Dl(15),aa(w,$.name)},5381).toString():"",v}var N$=ne.createContext();N$.Consumer;var E$=ne.createContext(),vS=(E$.Consumer,new _$),s1=yS();function xS(){return C.useContext(N$)||vS}function bS(){return C.useContext(E$)||s1}var $S=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=s1);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return Dl(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=s1),this.name+t.hash},e}(),wS=/([A-Z])/,SS=/([A-Z])/g,CS=/^ms-/,PS=function(e){return"-"+e.toLowerCase()};function K2(e){return wS.test(e)?e.replace(SS,PS).replace(CS,"-ms-"):e}var Z2=function(e){return e==null||e===!1||e===""};function Ta(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=Ta(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Z2(e))return"";if(hm(e))return"."+e.styledComponentId;if(sl(e)){if(typeof(d=e)!="function"||d.prototype&&d.prototype.isReactComponent||!t)return e;var u=e(t);return Ta(u,t,n,r)}var d;return e instanceof $S?n?(e.inject(n,r),e.getName(r)):e:o1(e)?function c(h,g){var b,v,w=[];for(var $ in h)h.hasOwnProperty($)&&!Z2(h[$])&&(Array.isArray(h[$])&&h[$].isCss||sl(h[$])?w.push(K2($)+":",h[$],";"):o1(h[$])?w.push.apply(w,c(h[$],$)):w.push(K2($)+": "+(b=$,(v=h[$])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||b in F7?String(v).trim():v+"px")+";"));return g?[g+" {"].concat(w,["}"]):w}(e):e.toString()}var J2=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function OS(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return sl(e)||o1(e)?J2(Ta(V2(Qd,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:J2(Ta(V2(e,n)))}var _S=function(e,t,n){return n===void 0&&(n=li),e.theme!==n.theme&&e.theme||t||n.theme},kS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,NS=/(^-|-$)/g;function $h(e){return e.replace(kS,"-").replace(NS,"")}var ES=function(e){return a1(k$(e)>>>0)};function gu(e){return typeof e=="string"&&!0}var l1=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},IS=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function TS(e,t,n){var r=e[n];l1(t)&&l1(r)?I$(r,t):e[n]=t}function I$(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(l1(a))for(var l in a)IS(l)&&TS(e,a[l],l)}return e}var T$=ne.createContext();T$.Consumer;var wh={};function A$(e,t,n){var r=hm(e),i=!gu(e),o=t.attrs,a=o===void 0?Qd:o,l=t.componentId,u=l===void 0?function(p,x){var S=typeof p!="string"?"sc":$h(p);wh[S]=(wh[S]||0)+1;var P=S+"-"+ES("5.3.6"+S+wh[S]);return x?x+"-"+P:P}(t.displayName,t.parentComponentId):l,d=t.displayName,c=d===void 0?function(p){return gu(p)?"styled."+p:"Styled("+q2(p)+")"}(e):d,h=t.displayName&&t.componentId?$h(t.displayName)+"-"+t.componentId:t.componentId||u,g=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,b=t.shouldForwardProp;r&&e.shouldForwardProp&&(b=t.shouldForwardProp?function(p,x,S){return e.shouldForwardProp(p,x,S)&&t.shouldForwardProp(p,x,S)}:e.shouldForwardProp);var v,w=new pS(n,h,r?e.componentStyle:void 0),$=w.isStatic&&a.length===0,m=function(p,x){return function(S,P,_,T){var R=S.attrs,W=S.componentStyle,z=S.defaultProps,ie=S.foldedComponentIds,M=S.shouldForwardProp,j=S.styledComponentId,J=S.target,F=function(oe,k,de){oe===void 0&&(oe=li);var Z=yr({},k,{theme:oe}),Ce={};return de.forEach(function(me){var ge,he,Ne,De=me;for(ge in sl(De)&&(De=De(Z)),De)Z[ge]=Ce[ge]=ge==="className"?(he=Ce[ge],Ne=De[ge],he&&Ne?he+" "+Ne:he||Ne):De[ge]}),[Z,Ce]}(_S(P,C.useContext(T$),z)||li,P,R),X=F[0],te=F[1],L=function(oe,k,de,Z){var Ce=xS(),me=bS(),ge=k?oe.generateAndInjectStyles(li,Ce,me):oe.generateAndInjectStyles(de,Ce,me);return ge}(W,T,X),N=_,E=te.$as||P.$as||te.as||P.as||J,U=gu(E),D=te!==P?yr({},P,{},te):P,H={};for(var Y in D)Y[0]!=="$"&&Y!=="as"&&(Y==="forwardedAs"?H.as=D[Y]:(M?M(Y,B2,E):!U||B2(Y))&&(H[Y]=D[Y]));return P.style&&te.style!==P.style&&(H.style=yr({},P.style,{},te.style)),H.className=Array.prototype.concat(ie,j,L!==j?L:null,P.className,te.className).filter(Boolean).join(" "),H.ref=N,C.createElement(E,H)}(v,p,x,$)};return m.displayName=c,(v=ne.forwardRef(m)).attrs=g,v.componentStyle=w,v.displayName=c,v.shouldForwardProp=b,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Qd,v.styledComponentId=h,v.target=r?e.target:e,v.withComponent=function(p){var x=t.componentId,S=function(_,T){if(_==null)return{};var R,W,z={},ie=Object.keys(_);for(W=0;W<ie.length;W++)R=ie[W],T.indexOf(R)>=0||(z[R]=_[R]);return z}(t,["componentId"]),P=x&&x+"-"+(gu(p)?p:$h(q2(p)));return A$(p,yr({},S,{attrs:g,componentId:P}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?I$({},e.defaultProps,p):p}}),v.toString=function(){return"."+v.styledComponentId},i&&Z7(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var u1=function(e){return function t(n,r,i){if(i===void 0&&(i=li),!Gd.isValidElementType(r))return Dl(1,String(r));var o=function(){return n(r,i,OS.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,yr({},i,{},a))},o.attrs=function(a){return t(n,r,yr({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(A$,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){u1[e]=u1(e)});const f=u1;var R$={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},X2=ne.createContext&&ne.createContext(R$),ui=globalThis&&globalThis.__assign||function(){return ui=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ui.apply(this,arguments)},AS=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function F$(e){return e&&e.map(function(t,n){return ne.createElement(t.tag,ui({key:n},t.attr),F$(t.child))})}function _e(e){return function(t){return ne.createElement(RS,ui({attr:ui({},e.attr)},t),F$(e.child))}}function RS(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=AS(e,["attr","size","title"]),l=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),ne.createElement("svg",ui({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:u,style:ui(ui({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&ne.createElement("title",null,o),e.children)};return X2!==void 0?ne.createElement(X2.Consumer,null,function(n){return t(n)}):t(R$)}function FS(e){return _e({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M14 325.3c2.3-4.2 5.2-4.9 9.7-2.5 10.4 5.6 20.6 11.4 31.2 16.7a595.88 595.88 0 0 0 127.4 46.3 616.61 616.61 0 0 0 63.2 11.8 603.33 603.33 0 0 0 95 5.2c17.4-.4 34.8-1.8 52.1-3.8a603.66 603.66 0 0 0 163.3-42.8c2.9-1.2 5.9-2 9.1-1.2 6.7 1.8 9 9 4.1 13.9a70 70 0 0 1-9.6 7.4c-30.7 21.1-64.2 36.4-99.6 47.9a473.31 473.31 0 0 1-75.1 17.6 431 431 0 0 1-53.2 4.8 21.3 21.3 0 0 0-2.5.3H308a21.3 21.3 0 0 0-2.5-.3c-3.6-.2-7.2-.3-10.7-.4a426.3 426.3 0 0 1-50.4-5.3A448.4 448.4 0 0 1 164 420a443.33 443.33 0 0 1-145.6-87c-1.8-1.6-3-3.8-4.4-5.7zM172 65.1l-4.3.6a80.92 80.92 0 0 0-38 15.1c-2.4 1.7-4.6 3.5-7.1 5.4a4.29 4.29 0 0 1-.4-1.4c-.4-2.7-.8-5.5-1.3-8.2-.7-4.6-3-6.6-7.6-6.6h-11.5c-6.9 0-8.2 1.3-8.2 8.2v209.3c0 1 0 2 .1 3 .2 3 2 4.9 4.9 5 7 .1 14.1.1 21.1 0 2.9 0 4.7-2 5-5 .1-1 .1-2 .1-3v-72.4c1.1.9 1.7 1.4 2.2 1.9 17.9 14.9 38.5 19.8 61 15.4 20.4-4 34.6-16.5 43.8-34.9 7-13.9 9.9-28.7 10.3-44.1.5-17.1-1.2-33.9-8.1-49.8-8.5-19.6-22.6-32.5-43.9-36.9-3.2-.7-6.5-1-9.8-1.5-2.8-.1-5.5-.1-8.3-.1zM124.6 107a3.48 3.48 0 0 1 1.7-3.3c13.7-9.5 28.8-14.5 45.6-13.2 14.9 1.1 27.1 8.4 33.5 25.9 3.9 10.7 4.9 21.8 4.9 33 0 10.4-.8 20.6-4 30.6-6.8 21.3-22.4 29.4-42.6 28.5-14-.6-26.2-6-37.4-13.9a3.57 3.57 0 0 1-1.7-3.3c.1-14.1 0-28.1 0-42.2s.1-28 0-42.1zm205.7-41.9c-1 .1-2 .3-2.9.4a148 148 0 0 0-28.9 4.1c-6.1 1.6-12 3.8-17.9 5.8-3.6 1.2-5.4 3.8-5.3 7.7.1 3.3-.1 6.6 0 9.9.1 4.8 2.1 6.1 6.8 4.9 7.8-2 15.6-4.2 23.5-5.7 12.3-2.3 24.7-3.3 37.2-1.4 6.5 1 12.6 2.9 16.8 8.4 3.7 4.8 5.1 10.5 5.3 16.4.3 8.3.2 16.6.3 24.9a7.84 7.84 0 0 1-.2 1.4c-.5-.1-.9 0-1.3-.1a180.56 180.56 0 0 0-32-4.9c-11.3-.6-22.5.1-33.3 3.9-12.9 4.5-23.3 12.3-29.4 24.9-4.7 9.8-5.4 20.2-3.9 30.7 2 14 9 24.8 21.4 31.7 11.9 6.6 24.8 7.4 37.9 5.4 15.1-2.3 28.5-8.7 40.3-18.4a7.36 7.36 0 0 1 1.6-1.1c.6 3.8 1.1 7.4 1.8 11 .6 3.1 2.5 5.1 5.4 5.2 5.4.1 10.9.1 16.3 0a4.84 4.84 0 0 0 4.8-4.7 26.2 26.2 0 0 0 .1-2.8v-106a80 80 0 0 0-.9-12.9c-1.9-12.9-7.4-23.5-19-30.4-6.7-4-14.1-6-21.8-7.1-3.6-.5-7.2-.8-10.8-1.3-3.9.1-7.9.1-11.9.1zm35 127.7a3.33 3.33 0 0 1-1.5 3c-11.2 8.1-23.5 13.5-37.4 14.9-5.7.6-11.4.4-16.8-1.8a20.08 20.08 0 0 1-12.4-13.3 32.9 32.9 0 0 1-.1-19.4c2.5-8.3 8.4-13 16.4-15.6a61.33 61.33 0 0 1 24.8-2.2c8.4.7 16.6 2.3 25 3.4 1.6.2 2.1 1 2.1 2.6-.1 4.8 0 9.5 0 14.3s-.2 9.4-.1 14.1zm259.9 129.4c-1-5-4.8-6.9-9.1-8.3a88.42 88.42 0 0 0-21-3.9 147.32 147.32 0 0 0-39.2 1.9c-14.3 2.7-27.9 7.3-40 15.6a13.75 13.75 0 0 0-3.7 3.5 5.11 5.11 0 0 0-.5 4c.4 1.5 2.1 1.9 3.6 1.8a16.2 16.2 0 0 0 2.2-.1c7.8-.8 15.5-1.7 23.3-2.5 11.4-1.1 22.9-1.8 34.3-.9a71.64 71.64 0 0 1 14.4 2.7c5.1 1.4 7.4 5.2 7.6 10.4.4 8-1.4 15.7-3.5 23.3-4.1 15.4-10 30.3-15.8 45.1a17.6 17.6 0 0 0-1 3c-.5 2.9 1.2 4.8 4.1 4.1a10.56 10.56 0 0 0 4.8-2.5 145.91 145.91 0 0 0 12.7-13.4c12.8-16.4 20.3-35.3 24.7-55.6.8-3.6 1.4-7.3 2.1-10.9v-17.3zM493.1 199q-19.35-53.55-38.7-107.2c-2-5.7-4.2-11.3-6.3-16.9-1.1-2.9-3.2-4.8-6.4-4.8-7.6-.1-15.2-.2-22.9-.1-2.5 0-3.7 2-3.2 4.5a43.1 43.1 0 0 0 1.9 6.1q29.4 72.75 59.1 145.5c1.7 4.1 2.1 7.6.2 11.8-3.3 7.3-5.9 15-9.3 22.3-3 6.5-8 11.4-15.2 13.3a42.13 42.13 0 0 1-15.4 1.1c-2.5-.2-5-.8-7.5-1-3.4-.2-5.1 1.3-5.2 4.8q-.15 5 0 9.9c.1 5.5 2 8 7.4 8.9a108.18 108.18 0 0 0 16.9 2c17.1.4 30.7-6.5 39.5-21.4a131.63 131.63 0 0 0 9.2-18.4q35.55-89.7 70.6-179.6a26.62 26.62 0 0 0 1.6-5.5c.4-2.8-.9-4.4-3.7-4.4-6.6-.1-13.3 0-19.9 0a7.54 7.54 0 0 0-7.7 5.2c-.5 1.4-1.1 2.7-1.6 4.1l-34.8 100c-2.5 7.2-5.1 14.5-7.7 22.2-.4-1.1-.6-1.7-.9-2.4z"}}]})(e)}function DS(e){return _e({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}}]})(e)}function MS(e){return _e({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function jS(e){return _e({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"}}]})(e)}function cn(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]})(e)}function LS(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z"}}]})(e)}function ev(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]})(e)}function zS(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32z"}}]})(e)}function US(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"}}]})(e)}function BS(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"}}]})(e)}function HS(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm122.7-533.4c18.7-18.7 49.1-18.7 67.9 0 18.7 18.7 18.7 49.1 0 67.9-18.7 18.7-49.1 18.7-67.9 0-18.7-18.7-18.7-49.1 0-67.9zm283.8 282.9l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z"}}]})(e)}function Ml(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]})(e)}function WS(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm198.4-588.1a32 32 0 0 0-24.5.5L414.9 415 296.4 686c-3.6 8.2-3.6 17.5 0 25.7 3.4 7.8 9.7 13.9 17.7 17 3.8 1.5 7.7 2.2 11.7 2.2 4.4 0 8.7-.9 12.8-2.7l271-118.6 118.5-271a32.06 32.06 0 0 0-17.7-42.7zM576.8 534.4l26.2 26.2-42.4 42.4-26.2-26.2L380 644.4 447.5 490 422 464.4l42.4-42.4 25.5 25.5L644.4 380l-67.6 154.4zM464.4 422L422 464.4l25.5 25.6 86.9 86.8 26.2 26.2 42.4-42.4-26.2-26.2-86.8-86.9z"}}]})(e)}function Aa(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"}},{tag:"path",attr:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"}}]})(e)}function Ra(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]})(e)}function YS(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M668.6 320c0-4.4-3.6-8-8-8h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.5-1.1.9-2.4.9-3.7zM157.9 504.2a352.7 352.7 0 0 1 103.5-242.4c32.5-32.5 70.3-58.1 112.4-75.9 43.6-18.4 89.9-27.8 137.6-27.8 47.8 0 94.1 9.3 137.6 27.8 42.1 17.8 79.9 43.4 112.4 75.9 10 10 19.3 20.5 27.9 31.4l-50 39.1a8 8 0 0 0 3 14.1l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3l-47.8 37.4C770.7 146.3 648.6 82 511.5 82 277 82 86.3 270.1 82 503.8a8 8 0 0 0 8 8.2h60c4.3 0 7.8-3.5 7.9-7.8zM934 512h-60c-4.3 0-7.9 3.5-8 7.8a352.7 352.7 0 0 1-103.5 242.4 352.57 352.57 0 0 1-112.4 75.9c-43.6 18.4-89.9 27.8-137.6 27.8s-94.1-9.3-137.6-27.8a352.57 352.57 0 0 1-112.4-75.9c-10-10-19.3-20.5-27.9-31.4l49.9-39.1a8 8 0 0 0-3-14.1l-156.8-38.3c-5-1.2-9.9 2.6-9.9 7.7l-.8 161.7c0 6.7 7.7 10.5 12.9 6.3l47.8-37.4C253.3 877.7 375.4 942 512.5 942 747 942 937.7 753.9 942 520.2a8 8 0 0 0-8-8.2z"}}]})(e)}function VS(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]})(e)}function qS(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M635 771.7c-34.5 28.6-78.2 44.3-123 44.3s-88.5-15.8-123-44.3a194.02 194.02 0 0 1-59.1-84.7H232v201h560V687h-97.9c-11.6 32.8-32 62.3-59.1 84.7z"}},{tag:"path",attr:{d:"M320 501h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}},{tag:"path",attr:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v201zm0-264H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v488z"}},{tag:"path",attr:{d:"M320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}}]})(e)}const D$=()=>s("div",{children:s(QS,{children:y(GS,{children:[y(vu,{children:[s(yu,{children:"Categories"}),y(mu,{children:[s(jt,{children:"Home Appliances and Founiture"}),s(jt,{children:"Food Items"})]})]}),y(vu,{children:[s(yu,{children:"Important Links"}),y(mu,{children:[s(jt,{children:"Terms & Conditions"}),s(jt,{children:"Return & Exchange"}),s(jt,{children:"Shipping & Deliveries"}),s(jt,{children:"Privacy Policies"})]})]}),y(vu,{children:[s(yu,{children:"Information"}),y(mu,{children:[s(jt,{children:"About Us"}),s(jt,{children:"Contact Us"}),s(jt,{children:"Blog"}),s(jt,{children:"Stories"}),s(jt,{children:"FAQ"})]})]}),y(vu,{children:[s(yu,{children:"Socials"}),y(mu,{children:[y(jt,{children:[s("span",{children:s(DS,{size:"16px"})}),"Facebook"]}),y(jt,{children:[s("span",{children:s(MS,{size:"16px"})}),"Twitter"]}),y(jt,{children:[s("span",{children:s(BS,{size:"16px"})}),"Instagram"]})]})]})]})})}),jt=f.div`
  font-size: 14px;
  font-weight: 700;
  color: #4a4747;
  margin-bottom: 10px;

  span{
    margin-right: 10px;
  }
`,mu=f.div``,yu=f.div`
  font-size: 25px;
  font-weight: 800;
  color: #232121;
  margin-bottom: 20px;
`,vu=f.div``,GS=f.div`
  width: 95%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`,QS=f.div`
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
 */function ll(){return ll=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ll.apply(this,arguments)}var Kr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Kr||(Kr={}));const tv="popstate";function KS(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return d1("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ul(i)}return JS(t,n,null,e)}function at(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ZS(){return Math.random().toString(36).substr(2,8)}function nv(e,t){return{usr:e.state,key:e.key,idx:t}}function d1(e,t,n,r){return n===void 0&&(n=null),ll({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ba(t):t,{state:n,key:t&&t.key||r||ZS()})}function ul(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ba(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function JS(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Kr.Pop,u=null,d=c();d==null&&(d=0,a.replaceState(ll({},a.state,{idx:d}),""));function c(){return(a.state||{idx:null}).idx}function h(){l=Kr.Pop;let $=c(),m=$==null?null:$-d;d=$,u&&u({action:l,location:w.location,delta:m})}function g($,m){l=Kr.Push;let p=d1(w.location,$,m);n&&n(p,$),d=c()+1;let x=nv(p,d),S=w.createHref(p);try{a.pushState(x,"",S)}catch{i.location.assign(S)}o&&u&&u({action:l,location:w.location,delta:1})}function b($,m){l=Kr.Replace;let p=d1(w.location,$,m);n&&n(p,$),d=c();let x=nv(p,d),S=w.createHref(p);a.replaceState(x,"",S),o&&u&&u({action:l,location:w.location,delta:0})}function v($){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof $=="string"?$:ul($);return at(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let w={get action(){return l},get location(){return e(i,a)},listen($){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(tv,h),u=$,()=>{i.removeEventListener(tv,h),u=null}},createHref($){return t(i,$)},createURL:v,encodeLocation($){let m=v($);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:b,go($){return a.go($)}};return w}var rv;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(rv||(rv={}));function XS(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ba(t):t,i=L$(r.pathname||"/",n);if(i==null)return null;let o=M$(e);eC(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=uC(o[l],fC(i));return a}function M$(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};u.relativePath.startsWith("/")&&(at(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=di([r,u.relativePath]),c=n.concat(u);o.children&&o.children.length>0&&(at(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),M$(o.children,t,c,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:sC(d,o.index),routesMeta:c})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let u of j$(o.path))i(o,a,u)}),t}function j$(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=j$(r.join("/")),l=[];return l.push(...a.map(u=>u===""?o:[o,u].join("/"))),i&&l.push(...a),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function eC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:lC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const tC=/^:\w+$/,nC=3,rC=2,iC=1,oC=10,aC=-2,iv=e=>e==="*";function sC(e,t){let n=e.split("/"),r=n.length;return n.some(iv)&&(r+=aC),t&&(r+=rC),n.filter(i=>!iv(i)).reduce((i,o)=>i+(tC.test(o)?nC:o===""?iC:oC),r)}function lC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function uC(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],u=a===n.length-1,d=i==="/"?t:t.slice(i.length)||"/",c=dC({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d);if(!c)return null;Object.assign(r,c.params);let h=l.route;o.push({params:r,pathname:di([i,c.pathname]),pathnameBase:mC(di([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=di([i,c.pathnameBase]))}return o}function dC(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=cC(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,c,h)=>{if(c==="*"){let g=l[h]||"";a=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}return d[c]=hC(l[h]||"",c),d},{}),pathname:o,pathnameBase:a,pattern:e}}function cC(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),gm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function fC(e){try{return decodeURI(e)}catch(t){return gm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hC(e,t){try{return decodeURIComponent(e)}catch(n){return gm(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function L$(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function gm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pC(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ba(e):e;return{pathname:n?n.startsWith("/")?n:gC(n,t):t,search:yC(r),hash:vC(i)}}function gC(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sh(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function z$(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function U$(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ba(e):(i=ll({},e),at(!i.pathname||!i.pathname.includes("?"),Sh("?","pathname","search",i)),at(!i.pathname||!i.pathname.includes("#"),Sh("#","pathname","hash",i)),at(!i.search||!i.search.includes("#"),Sh("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let h=t.length-1;if(a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}l=h>=0?t[h]:"/"}let u=pC(i,l),d=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||c)&&(u.pathname+="/"),u}const di=e=>e.join("/").replace(/\/\/+/g,"/"),mC=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),yC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,vC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function xC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function c1(){return c1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c1.apply(this,arguments)}function bC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const $C=typeof Object.is=="function"?Object.is:bC,{useState:wC,useEffect:SC,useLayoutEffect:CC,useDebugValue:PC}=up;function OC(e,t,n){const r=t(),[{inst:i},o]=wC({inst:{value:r,getSnapshot:t}});return CC(()=>{i.value=r,i.getSnapshot=t,Ch(i)&&o({inst:i})},[e,r,t]),SC(()=>(Ch(i)&&o({inst:i}),e(()=>{Ch(i)&&o({inst:i})})),[e]),PC(r),r}function Ch(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!$C(n,r)}catch{return!0}}function _C(e,t,n){return t()}const kC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",NC=!kC,EC=NC?_C:OC;"useSyncExternalStore"in up&&(e=>e.useSyncExternalStore)(up);const B$=C.createContext(null),rf=C.createContext(null),jl=C.createContext(null),of=C.createContext(null),co=C.createContext({outlet:null,matches:[]}),H$=C.createContext(null);function IC(e,t){let{relative:n}=t===void 0?{}:t;Ha()||at(!1);let{basename:r,navigator:i}=C.useContext(jl),{hash:o,pathname:a,search:l}=mm(e,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:di([r,a])),i.createHref({pathname:u,search:l,hash:o})}function Ha(){return C.useContext(of)!=null}function Ll(){return Ha()||at(!1),C.useContext(of).location}function nt(){Ha()||at(!1);let{basename:e,navigator:t}=C.useContext(jl),{matches:n}=C.useContext(co),{pathname:r}=Ll(),i=JSON.stringify(z$(n).map(l=>l.pathnameBase)),o=C.useRef(!1);return C.useEffect(()=>{o.current=!0}),C.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){t.go(l);return}let d=U$(l,JSON.parse(i),r,u.relative==="path");e!=="/"&&(d.pathname=d.pathname==="/"?e:di([e,d.pathname])),(u.replace?t.replace:t.push)(d,u.state,u)},[e,t,i,r])}function W$(){let{matches:e}=C.useContext(co),t=e[e.length-1];return t?t.params:{}}function mm(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.useContext(co),{pathname:i}=Ll(),o=JSON.stringify(z$(r).map(a=>a.pathnameBase));return C.useMemo(()=>U$(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function ym(e,t){Ha()||at(!1);let{navigator:n}=C.useContext(jl),r=C.useContext(rf),{matches:i}=C.useContext(co),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Ll(),d;if(t){var c;let w=typeof t=="string"?Ba(t):t;l==="/"||(c=w.pathname)!=null&&c.startsWith(l)||at(!1),d=w}else d=u;let h=d.pathname||"/",g=l==="/"?h:h.slice(l.length)||"/",b=XS(e,{pathname:g}),v=FC(b&&b.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:di([l,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:di([l,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return t&&v?C.createElement(of.Provider,{value:{location:c1({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Kr.Pop}},v):v}function TC(){let e=LC(),t=xC(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,o)}class AC extends C.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(co.Provider,{value:this.props.routeContext},C.createElement(H$.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RC(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(B$);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(co.Provider,{value:t},r)}function FC(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||at(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,l)=>{let u=a.route.id?i==null?void 0:i[a.route.id]:null,d=n?a.route.errorElement||C.createElement(TC,null):null,c=t.concat(r.slice(0,l+1)),h=()=>C.createElement(RC,{match:a,routeContext:{outlet:o,matches:c}},u?d:a.route.element!==void 0?a.route.element:o);return n&&(a.route.errorElement||l===0)?C.createElement(AC,{location:n.location,component:d,error:u,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var ov;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(ov||(ov={}));var Zd;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Zd||(Zd={}));function DC(e){let t=C.useContext(rf);return t||at(!1),t}function MC(e){let t=C.useContext(co);return t||at(!1),t}function jC(e){let t=MC(),n=t.matches[t.matches.length-1];return n.route.id||at(!1),n.route.id}function LC(){var e;let t=C.useContext(H$),n=DC(Zd.UseRouteError),r=jC(Zd.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function zC(e){let{to:t,replace:n,state:r,relative:i}=e;Ha()||at(!1);let o=C.useContext(rf),a=nt();return C.useEffect(()=>{o&&o.navigation.state!=="idle"||a(t,{replace:n,state:r,relative:i})}),null}function Hi(e){at(!1)}function UC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Kr.Pop,navigator:o,static:a=!1}=e;Ha()&&at(!1);let l=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=Ba(r));let{pathname:d="/",search:c="",hash:h="",state:g=null,key:b="default"}=r,v=C.useMemo(()=>{let w=L$(d,l);return w==null?null:{pathname:w,search:c,hash:h,state:g,key:b}},[l,d,c,h,g,b]);return v==null?null:C.createElement(jl.Provider,{value:u},C.createElement(of.Provider,{children:n,value:{location:v,navigationType:i}}))}function BC(e){let{children:t,location:n}=e,r=C.useContext(B$),i=r&&!t?r.router.routes:f1(t);return ym(i,n)}var av;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(av||(av={}));new Promise(()=>{});function f1(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;if(r.type===C.Fragment){n.push.apply(n,f1(r.props.children,t));return}r.type!==Hi&&at(!1),!r.props.index||!r.props.children||at(!1);let o=[...t,i],a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=f1(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jd(){return Jd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jd.apply(this,arguments)}function Y$(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function HC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function WC(e,t){return e.button===0&&(!t||t==="_self")&&!HC(e)}const YC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],VC=["aria-current","caseSensitive","className","end","style","to","children"];function qC(e){let{basename:t,children:n,window:r}=e,i=C.useRef();i.current==null&&(i.current=KS({window:r,v5Compat:!0}));let o=i.current,[a,l]=C.useState({action:o.action,location:o.location});return C.useLayoutEffect(()=>o.listen(l),[o]),C.createElement(UC,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const GC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",af=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:u,to:d,preventScrollReset:c}=t,h=Y$(t,YC),g=typeof d=="string"?d:ul(d),b=/^[a-z+]+:\/\//i.test(g)||g.startsWith("//"),v=g,w=!1;if(GC&&b){let x=new URL(window.location.href),S=g.startsWith("//")?new URL(x.protocol+g):new URL(g);S.origin===x.origin?v=S.pathname+S.search+S.hash:w=!0}let $=IC(v,{relative:i}),m=QC(v,{replace:a,state:l,target:u,preventScrollReset:c,relative:i});function p(x){r&&r(x),x.defaultPrevented||m(x)}return C.createElement("a",Jd({},h,{href:b?g:$,onClick:w||o?r:p,ref:n,target:u}))}),ke=C.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:u,children:d}=t,c=Y$(t,VC),h=mm(u,{relative:c.relative}),g=Ll(),b=C.useContext(rf),{navigator:v}=C.useContext(jl),w=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,$=g.pathname,m=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;i||($=$.toLowerCase(),m=m?m.toLowerCase():null,w=w.toLowerCase());let p=$===w||!a&&$.startsWith(w)&&$.charAt(w.length)==="/",x=m!=null&&(m===w||!a&&m.startsWith(w)&&m.charAt(w.length)==="/"),S=p?r:void 0,P;typeof o=="function"?P=o({isActive:p,isPending:x}):P=[o,p?"active":null,x?"pending":null].filter(Boolean).join(" ");let _=typeof l=="function"?l({isActive:p,isPending:x}):l;return C.createElement(af,Jd({},c,{"aria-current":S,className:P,ref:n,style:_,to:u}),typeof d=="function"?d({isActive:p,isPending:x}):d)});var sv;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(sv||(sv={}));var lv;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(lv||(lv={}));function QC(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=nt(),u=Ll(),d=mm(e,{relative:a});return C.useCallback(c=>{if(WC(c,n)){c.preventDefault();let h=r!==void 0?r:ul(u)===ul(d);l(e,{replace:h,state:i,preventScrollReset:o,relative:a})}},[u,l,d,r,i,n,e,o,a])}const KC=()=>s("div",{children:s(eP,{children:y(XC,{children:[s(JC,{children:"WHY YOU SHOULD SELL ON CROSS AFRICA"}),y(ZC,{children:[s(go,{children:"SELL MORE PRODUCTS"}),s(go,{children:"SELL MORE PRODUCTS"}),s(go,{children:"SELL MORE PRODUCTS"}),s(go,{children:"SELL MORE PRODUCTS"}),s(go,{children:"SELL MORE PRODUCTS"}),s(go,{children:"SELL MORE PRODUCTS"})]})]})})}),go=f.button`
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
`,ZC=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`,JC=f.div`
  font-size: 30px;
  font-weight: 600;
  margin-top: 70px;
  text-align: center;
`,XC=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 500px;
  min-height: 100%;
`,eP=f.div`
  width: 100%;
  background-color: #902a75;
`,tP=()=>s("div",{children:s(aP,{children:y(oP,{children:[s(iP,{children:"GET STARTED TODAY"}),s(rP,{children:"Join the fast, trusted and best selling platformin Africa"}),s(nP,{to:"/auth",children:"Start Selling Today"})]})})}),nP=f(ke)`
    padding: 15px 70px;
    border: #D975C0;
    background-color: #D975C0;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
`,rP=f.div`
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 15px;
  text-align: center;
`,iP=f.div`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 15px;
    text-align: center;
`,oP=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 500px;
`,aP=f.div`
  width: 100%;
  /* background-color: #f6c8ea; */
`,sP=()=>s("div",{children:s(lP,{children:y(uP,{children:[y(dP,{to:"/",children:[s("img",{src:"/logo 1.png"}),s("div",{children:"Cross Africa"})]}),y(cP,{children:[s(uv,{to:"/auth",bd:"",bg:"ffff",hbg:"",hbd:"fff",children:"Sign Up"}),s(uv,{to:"/auth/signin",bd:"fgf",bg:"",hbg:"fff",hbd:"",children:"Log In"})]})]})})}),lP=f.div`
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
`,uP=f.div`
  width: 95%;
  height: 85px;
  display: flex;
  justify-content: space-between;
`,dP=f(ke)`
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
`,cP=f.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 350px;
`,uv=f(ke)`
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
`,fP=()=>y(Hs,{children:[s(sP,{}),y("div",{children:[s(vP,{children:y(yP,{children:[y(mP,{children:[s(gP,{children:"ANYONE CAN SELL ON CROSS AFRICA"}),s(pP,{children:"Become a merchant and sell to thousands of people across africa"}),s(hP,{to:"/auth",children:"Start Selling Today"})]}),s(KC,{}),s(tP,{})]})}),s(D$,{})]})]}),hP=f(ke)`
  padding: 15px 70px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
`,pP=f.div`
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 15px;
  text-align: center;
`,gP=f.div`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center;
`,mP=f.div`
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
`,yP=f.div``,vP=f.div`
  width: 100%;
`,xP=()=>s("div",{children:s(PP,{children:y(CP,{children:[s(SP,{children:"Buying & Selling made easy accross Africa!"}),y(wP,{children:[s(pv,{children:s($P,{children:y(hv,{children:[s(fv,{children:"Mobile Phones."}),s(cv,{children:"Buying made easy, get used phones, laptops, chargers etc.. at the comfort of your home"}),s(ke,{to:"/phone",style:{textDecoration:"none",color:"white"},children:s(dv,{children:"Buy Now"})})]})})}),s(pv,{children:s(bP,{children:y(hv,{children:[s(fv,{children:"Food & Groceries."}),s(cv,{children:"Buying made easy, food and groceries are all available, get them all at the comfort of your home."}),s(ke,{to:"/food",style:{textDecoration:"none",color:"white"},children:s(dv,{children:"Buy Now"})})]})})})]})]})})}),dv=f.button`
  margin-bottom: 20px;
  border: 0px;
  outline: none;
  background: #ee65cc;
  padding: 10px 30px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`,bP=f.div`
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
`;const $P=f.div`
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
`;const cv=f.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
`,fv=f.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 20px;
`,hv=f.div`
  /* background-color: gold; */
  margin-bottom: 20px;
`,pv=f.div`
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
`,wP=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`,SP=f.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 300px;
  /* color: ; */
`,CP=f.div`
  width: 90%;
  margin-top: 30px;
`,PP=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
`,OP={version:4,country_calling_codes:{1:["US","AG","AI","AS","BB","BM","BS","CA","DM","DO","GD","GU","JM","KN","KY","LC","MP","MS","PR","SX","TC","TT","VC","VG","VI"],7:["RU","KZ"],20:["EG"],27:["ZA"],30:["GR"],31:["NL"],32:["BE"],33:["FR"],34:["ES"],36:["HU"],39:["IT","VA"],40:["RO"],41:["CH"],43:["AT"],44:["GB","GG","IM","JE"],45:["DK"],46:["SE"],47:["NO","SJ"],48:["PL"],49:["DE"],51:["PE"],52:["MX"],53:["CU"],54:["AR"],55:["BR"],56:["CL"],57:["CO"],58:["VE"],60:["MY"],61:["AU","CC","CX"],62:["ID"],63:["PH"],64:["NZ"],65:["SG"],66:["TH"],81:["JP"],82:["KR"],84:["VN"],86:["CN"],90:["TR"],91:["IN"],92:["PK"],93:["AF"],94:["LK"],95:["MM"],98:["IR"],211:["SS"],212:["MA","EH"],213:["DZ"],216:["TN"],218:["LY"],220:["GM"],221:["SN"],222:["MR"],223:["ML"],224:["GN"],225:["CI"],226:["BF"],227:["NE"],228:["TG"],229:["BJ"],230:["MU"],231:["LR"],232:["SL"],233:["GH"],234:["NG"],235:["TD"],236:["CF"],237:["CM"],238:["CV"],239:["ST"],240:["GQ"],241:["GA"],242:["CG"],243:["CD"],244:["AO"],245:["GW"],246:["IO"],247:["AC"],248:["SC"],249:["SD"],250:["RW"],251:["ET"],252:["SO"],253:["DJ"],254:["KE"],255:["TZ"],256:["UG"],257:["BI"],258:["MZ"],260:["ZM"],261:["MG"],262:["RE","YT"],263:["ZW"],264:["NA"],265:["MW"],266:["LS"],267:["BW"],268:["SZ"],269:["KM"],290:["SH","TA"],291:["ER"],297:["AW"],298:["FO"],299:["GL"],350:["GI"],351:["PT"],352:["LU"],353:["IE"],354:["IS"],355:["AL"],356:["MT"],357:["CY"],358:["FI","AX"],359:["BG"],370:["LT"],371:["LV"],372:["EE"],373:["MD"],374:["AM"],375:["BY"],376:["AD"],377:["MC"],378:["SM"],380:["UA"],381:["RS"],382:["ME"],383:["XK"],385:["HR"],386:["SI"],387:["BA"],389:["MK"],420:["CZ"],421:["SK"],423:["LI"],500:["FK"],501:["BZ"],502:["GT"],503:["SV"],504:["HN"],505:["NI"],506:["CR"],507:["PA"],508:["PM"],509:["HT"],590:["GP","BL","MF"],591:["BO"],592:["GY"],593:["EC"],594:["GF"],595:["PY"],596:["MQ"],597:["SR"],598:["UY"],599:["CW","BQ"],670:["TL"],672:["NF"],673:["BN"],674:["NR"],675:["PG"],676:["TO"],677:["SB"],678:["VU"],679:["FJ"],680:["PW"],681:["WF"],682:["CK"],683:["NU"],685:["WS"],686:["KI"],687:["NC"],688:["TV"],689:["PF"],690:["TK"],691:["FM"],692:["MH"],850:["KP"],852:["HK"],853:["MO"],855:["KH"],856:["LA"],880:["BD"],886:["TW"],960:["MV"],961:["LB"],962:["JO"],963:["SY"],964:["IQ"],965:["KW"],966:["SA"],967:["YE"],968:["OM"],970:["PS"],971:["AE"],972:["IL"],973:["BH"],974:["QA"],975:["BT"],976:["MN"],977:["NP"],992:["TJ"],993:["TM"],994:["AZ"],995:["GE"],996:["KG"],998:["UZ"]},countries:{AC:["247","00","(?:[01589]\\d|[46])\\d{4}",[5,6]],AD:["376","00","(?:1|6\\d)\\d{7}|[135-9]\\d{5}",[6,8,9],[["(\\d{3})(\\d{3})","$1 $2",["[135-9]"]],["(\\d{4})(\\d{4})","$1 $2",["1"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]]],AE:["971","00","(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",[5,6,7,8,9,10,11,12],[["(\\d{3})(\\d{2,9})","$1 $2",["60|8"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[236]|[479][2-8]"],"0$1"],["(\\d{3})(\\d)(\\d{5})","$1 $2 $3",["[479]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"]],"0"],AF:["93","00","[2-7]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],"0"],AG:["1","011","(?:268|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([457]\\d{6})$|1","268$1",0,"268"],AI:["1","011","(?:264|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2457]\\d{6})$|1","264$1",0,"264"],AL:["355","00","(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",[6,7,8,9],[["(\\d{3})(\\d{3,4})","$1 $2",["80|9"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["[23578]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"]],"0"],AM:["374","00","(?:[1-489]\\d|55|60|77)\\d{6}",[8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]0"],"0 $1"],["(\\d{3})(\\d{5})","$1 $2",["2|3[12]"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[3-9]"],"0$1"]],"0"],AO:["244","00","[29]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[29]"]]]],AR:["54","00","(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",[10,11],[["(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",1],["(\\d)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",0,"$1 $2 $3-$4"],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 15-$3-$4",["91"],"0$1",0,"$1 $2 $3-$4"],["(\\d{3})(\\d{3})(\\d{5})","$1-$2-$3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9"],"0$1",0,"$1 $2 $3-$4"]],"0",0,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?","9$1"],AS:["1","011","(?:[58]\\d\\d|684|900)\\d{7}",[10],0,"1",0,"([267]\\d{6})$|1","684$1",0,"684"],AT:["43","00","1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",[4,5,6,7,8,9,10,11,12,13],[["(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],["(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],["(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],["(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],"0"],AU:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",[5,6,7,8,9,10,12],[["(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|4"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],"0",0,"(183[12])|0",0,0,0,[["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}",[9]],["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,["163\\d{2,6}",[5,6,7,8,9]],["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],AW:["297","00","(?:[25-79]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[25-9]"]]]],AX:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",[5,6,7,8,9,10,11,12],0,"0",0,0,0,0,"18",0,"00"],AZ:["994","00","365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[28]|2|365|46","1[28]|2|365[45]|46","1[28]|2|365(?:4|5[02])|46"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[13-9]"],"0$1"]],"0"],BA:["387","00","6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-3]|[7-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]|6[56]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],"0"],BB:["1","011","(?:246|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","246$1",0,"246"],BD:["880","00","[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{4,6})","$1-$2",["31[5-8]|[459]1"],"0$1"],["(\\d{3})(\\d{3,7})","$1-$2",["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],"0$1"],["(\\d{4})(\\d{3,6})","$1-$2",["[13-9]|22"],"0$1"],["(\\d)(\\d{7,8})","$1-$2",["2"],"0$1"]],"0"],BE:["32","00","4\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[239]|4[23]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[15-8]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4"],"0$1"]],"0"],BF:["226","00","[025-7]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[025-7]"]]]],BG:["359","00","00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",[6,7,8,9,12],[["(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["43[1-6]|70[1-9]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],["(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],"0"],BH:["973","00","[136-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[13679]|8[047]"]]]],BI:["257","00","(?:[267]\\d|31)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2367]"]]]],BJ:["229","00","[24-689]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-689]"]]]],BL:["590","00","590\\d{6}|(?:69|80|9\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["590(?:2[7-9]|5[12]|87)\\d{4}"],["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:395|76[018])\\d|475[01])\\d{4}"]]],BM:["1","011","(?:441|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","441$1",0,"441"],BN:["673","00","[2-578]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-578]"]]]],BO:["591","00(?:1\\d)?","(?:[2-467]\\d\\d|8001)\\d{5}",[8,9],[["(\\d)(\\d{7})","$1 $2",["[23]|4[46]"]],["(\\d{8})","$1",["[67]"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["8"]]],"0",0,"0(1\\d)?"],BQ:["599","00","(?:[34]1|7\\d)\\d{5}",[7],0,0,0,0,0,0,"[347]"],BR:["55","00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",[8,9,10,11],[["(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","4(?:02|37)0|[34]00"]],["(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)"],["(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)"]],"0",0,"(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2"],BS:["1","011","(?:242|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([3-8]\\d{6})$|1","242$1",0,"242"],BT:["975","00","[17]\\d{7}|[2-8]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|7"]]]],BW:["267","00","(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",[7,8,10],[["(\\d{2})(\\d{5})","$1 $2",["90"]],["(\\d{3})(\\d{4})","$1 $2",["[24-6]|3[15-79]"]],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37]"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["8"]]]],BY:["375","810","(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3})","$1 $2",["800"],"8 $1"],["(\\d{3})(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"],["(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:[56]|7[467])|2[1-3]"],"8 0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-4]"],"8 0$1"],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["[89]"],"8 $1"]],"8",0,"0|80?",0,0,0,0,"8~10"],BZ:["501","00","(?:0800\\d|[2-8])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],["(\\d)(\\d{3})(\\d{4})(\\d{3})","$1-$2-$3-$4",["0"]]]],CA:["1","011","(?:[2-8]\\d|90)\\d{8}|3\\d{6}",[7,10],0,"1",0,0,0,0,0,[["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|3[178]|50|68|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",[10]],["",[10]],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",[10]],["900[2-9]\\d{6}",[10]],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}",[10]],0,["310\\d{4}",[7]],0,["600[2-9]\\d{6}",[10]]]],CC:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",[9]],["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CD:["243","00","[189]\\d{8}|[1-68]\\d{6}",[7,9],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]"],"0$1"]],"0"],CF:["236","00","(?:[27]\\d{3}|8776)\\d{4}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[278]"]]]],CG:["242","00","222\\d{6}|(?:0\\d|80)\\d{7}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]]]],CH:["41","00","8\\d{11}|[2-9]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]|81"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["8"],"0$1"]],"0"],CI:["225","00","[02]\\d{9}",[10],[["(\\d{2})(\\d{2})(\\d)(\\d{5})","$1 $2 $3 $4",["2"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3 $4",["0"]]]],CK:["682","00","[2-578]\\d{4}",[5],[["(\\d{2})(\\d{3})","$1 $2",["[2-578]"]]]],CL:["56","(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0","12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",[9,10,11],[["(\\d{5})(\\d{4})","$1 $2",["219","2196"],"($1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[1-36]"],"($1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9[2-9]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],"($1)"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]]],CM:["237","00","[26]\\d{8}|88\\d{6,7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["88"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]|88"]]]],CN:["86","00|1(?:[12]\\d|79)\\d\\d00","1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}",[7,8,9,10,11,12],[["(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]","(?:10|2[0-57-9])(?:10|9[56])","10(?:10|9[56])|2[0-57-9](?:100|9[56])"],"0$1"],["(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]","(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]","85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])","85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1",1],["(\\d{3})(\\d{7,8})","$1 $2",["9"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",1]],"0",0,"(1(?:[12]\\d|79)\\d\\d)|0",0,0,0,0,"00"],CO:["57","00(?:4(?:[14]4|56)|[579])","(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}",[10,11],[["(\\d{3})(\\d{7})","$1 $2",["6"],"($1)"],["(\\d{3})(\\d{7})","$1 $2",["3[0-357]|91"]],["(\\d)(\\d{3})(\\d{7})","$1-$2-$3",["1"],"0$1",0,"$1 $2 $3"]],"0",0,"0(4(?:[14]4|56)|[579])?"],CR:["506","00","(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",[8,10],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[3-9]"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]"]]],0,0,"(19(?:0[0-2468]|1[09]|20|66|77|99))"],CU:["53","119","[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}",[6,7,8,10],[["(\\d{2})(\\d{4,6})","$1 $2",["2[1-4]|[34]"],"(0$1)"],["(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["5"],"0$1"],["(\\d{3})(\\d{7})","$1 $2",["8"],"0$1"]],"0"],CV:["238","0","(?:[2-59]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2-589]"]]]],CW:["599","00","(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[3467]"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["9[4-8]"]]],0,0,0,0,0,"[69]"],CX:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",[9]],["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CY:["357","00","(?:[279]\\d|[58]0)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[257-9]"]]]],CZ:["420","00","(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["96"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]]],DE:["49","00","[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",[4,5,6,7,8,9,10,11,12,13,14,15],[["(\\d{2})(\\d{3,13})","$1 $2",["3[02]|40|[68]9"],"0$1"],["(\\d{3})(\\d{3,12})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1","2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],"0$1"],["(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["138"],"0$1"],["(\\d{5})(\\d{2,10})","$1 $2",["3"],"0$1"],["(\\d{3})(\\d{5,11})","$1 $2",["181"],"0$1"],["(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:3|80)|9"],"0$1"],["(\\d{3})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],["(\\d{3})(\\d{7,12})","$1 $2",["8"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["18[68]"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["15[0568]"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["15[1279]"],"0$1"],["(\\d{3})(\\d{8})","$1 $2",["18"],"0$1"],["(\\d{3})(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"],["(\\d{4})(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],["(\\d{3})(\\d{2})(\\d{8})","$1 $2 $3",["15"],"0$1"]],"0"],DJ:["253","00","(?:2\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[27]"]]]],DK:["45","00","[2-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-9]"]]]],DM:["1","011","(?:[58]\\d\\d|767|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","767$1",0,"767"],DO:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,0,0,0,"8001|8[024]9"],DZ:["213","00","(?:[1-4]|[5-79]\\d|80)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"]],"0"],EC:["593","00","1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",[8,9,10,11],[["(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[2-7]"],"(0$1)",0,"$1-$2-$3"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],"0"],EE:["372","00","8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],["(\\d{4})(\\d{3,4})","$1 $2",["[45]|8(?:00|[1-49])","[45]|8(?:00[1-9]|[1-49])"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],EG:["20","00","[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",[8,9,10],[["(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],["(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|8[2468]|9[235-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[189]"],"0$1"]],"0"],EH:["212","00","[5-8]\\d{8}",[9],0,"0",0,0,0,0,"528[89]"],ER:["291","00","[178]\\d{6}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[178]"],"0$1"]],"0"],ES:["34","00","[5-9]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-9]"]]]],ET:["251","00","(?:11|[2-579]\\d)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-579]"],"0$1"]],"0"],FI:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",[5,6,7,8,9,10,11,12],[["(\\d)(\\d{4,9})","$1 $2",["[2568][1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"],["(\\d{3})(\\d{3,7})","$1 $2",["[12]00|[368]|70[07-9]"],"0$1"],["(\\d{2})(\\d{4,8})","$1 $2",["[1245]|7[135]"],"0$1"],["(\\d{2})(\\d{6,10})","$1 $2",["7"],"0$1"]],"0",0,0,0,0,"1[03-79]|[2-9]",0,"00"],FJ:["679","0(?:0|52)","45\\d{5}|(?:0800\\d|[235-9])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1 $2",["[235-9]|45"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],0,0,0,0,0,0,0,"00"],FK:["500","00","[2-7]\\d{4}",[5]],FM:["691","00","(?:[39]\\d\\d|820)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[389]"]]]],FO:["298","00","[2-9]\\d{5}",[6],[["(\\d{6})","$1",["[2-9]"]]],0,0,"(10(?:01|[12]0|88))"],FR:["33","00","[1-9]\\d{8}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],"0"],GA:["241","00","(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",[7,8],[["(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["11|[67]"],"0$1"]],0,0,"0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})","$1"],GB:["44","00","[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",[7,9,10],[["(\\d{3})(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["845","8454","84546","845464"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["800"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["1(?:[2-69][02-9]|[78])"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[25]|7(?:0|6[02-9])","[25]|7(?:0|6(?:[03-9]|2[356]))"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[1389]"],"0$1"]],"0",0,0,0,0,0,[["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-579])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:[02]\\d|1[0-246-9])))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",[9,10]],["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]],0," x"],GD:["1","011","(?:473|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","473$1",0,"473"],GE:["995","00","(?:[3-57]\\d\\d|800)\\d{6}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["32"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[57]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"]],"0"],GF:["594","00","[56]94\\d{6}|(?:80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[56]|9[47]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[89]"],"0$1"]],"0"],GG:["44","00","(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",[7,9,10],0,"0",0,"([25-9]\\d{5})$|0","1481$1",0,0,[["1481[25-9]\\d{5}",[10]],["7(?:(?:781|839)\\d|911[17])\\d{5}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]]],GH:["233","00","(?:[235]\\d{3}|800)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"]],"0"],GI:["350","00","(?:[25]\\d|60)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["2"]]]],GL:["299","00","(?:19|[2-689]\\d|70)\\d{4}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["19|[2-9]"]]]],GM:["220","00","[2-9]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],GN:["224","00","722\\d{6}|(?:3|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]]],GP:["590","00","590\\d{6}|(?:69|80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0",0,0,0,0,0,[["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1289]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"],["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:395|76[018])\\d|475[01])\\d{4}"]]],GQ:["240","00","222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],["(\\d{3})(\\d{6})","$1 $2",["[89]"]]]],GR:["30","00","5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",[10,11,12],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],["(\\d{4})(\\d{6})","$1 $2",["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2689]"]],["(\\d{3})(\\d{3,4})(\\d{5})","$1 $2 $3",["8"]]]],GT:["502","00","(?:1\\d{3}|[2-7])\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],GU:["1","011","(?:[58]\\d\\d|671|900)\\d{7}",[10],0,"1",0,"([3-9]\\d{6})$|1","671$1",0,"671"],GW:["245","00","[49]\\d{8}|4\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["40"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"]]]],GY:["592","001","9008\\d{3}|(?:[2-467]\\d\\d|862)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-46-9]"]]]],HK:["852","00(?:30|5[09]|[126-9]?)","8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",[5,6,7,8,9,11],[["(\\d{3})(\\d{2,5})","$1 $2",["900","9003"]],["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{3})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],0,0,0,0,0,0,0,"00"],HN:["504","00","8\\d{10}|[237-9]\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1-$2",["[237-9]"]]]],HR:["385","00","(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",[6,7,8,9],[["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["6[01]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-5]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],"0"],HT:["509","00","(?:[2-489]\\d|55)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[2-589]"]]]],HU:["36","00","[235-7]\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"06 $1"]],"06"],ID:["62","00[89]","(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}",[7,8,9,10,11,12,13],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],["(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],["(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],["(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],"(0$1)"],["(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],["(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],["(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"]],"0"],IE:["353","00","(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],["(\\d{3})(\\d{5})","$1 $2",["[45]0"],"(0$1)"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2569]|4[1-69]|7[14]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[78]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["4"],"(0$1)"],["(\\d{2})(\\d)(\\d{3})(\\d{4})","$1 $2 $3 $4",["8"],"0$1"]],"0"],IL:["972","0(?:0|1[2-9])","1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",[7,8,9,10,11,12],[["(\\d{4})(\\d{3})","$1-$2",["125"]],["(\\d{4})(\\d{2})(\\d{2})","$1-$2-$3",["121"]],["(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1-$2-$3",["12"]],["(\\d{4})(\\d{6})","$1-$2",["159"]],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["15"]]],"0"],IM:["44","00","1624\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([25-8]\\d{5})$|0","1624$1",0,"74576|(?:16|7[56])24"],IN:["91","00","(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",[8,9,10,11,12,13],[["(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],0,1],["(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],0,1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"],"0$1",1],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]","1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],"0$1",1],["(\\d{5})(\\d{5})","$1 $2",["[6-9]"],"0$1",1],["(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["1(?:6|8[06])","1(?:6|8[06]0)"],0,1],["(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18"],0,1]],"0"],IO:["246","00","3\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["3"]]]],IQ:["964","00","(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],IR:["98","00","[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",[4,5,6,7,10],[["(\\d{4,5})","$1",["96"],"0$1"],["(\\d{2})(\\d{4,5})","$1 $2",["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"]],"0"],IS:["354","00|1(?:0(?:01|[12]0)|100)","(?:38\\d|[4-9])\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],0,0,0,0,0,0,0,"00"],IT:["39","00","0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",[6,7,8,9,10,11],[["(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],["(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],["(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],["(\\d{4})(\\d{4})","$1 $2",["894"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1(?:44|[679])|[378]"]],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]|14"]],["(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["3"]]],0,0,0,0,0,0,[["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],["3[1-9]\\d{8}|3[2-9]\\d{7}",[9,10]],["80(?:0\\d{3}|3)\\d{3}",[6,9]],["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}",[6,8,9,10]],["1(?:78\\d|99)\\d{6}",[9,10]],0,0,0,["55\\d{8}",[10]],["84(?:[08]\\d{3}|[17])\\d{3}",[6,9]]]],JE:["44","00","1534\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([0-24-8]\\d{5})$|0","1534$1",0,0,[["1534[0-24-8]\\d{5}"],["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"],["80(?:07(?:35|81)|8901)\\d{4}"],["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],["701511\\d{4}"],0,["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],["56\\d{8}"]]],JM:["1","011","(?:[58]\\d\\d|658|900)\\d{7}",[10],0,"1",0,0,0,0,"658|876"],JO:["962","00","(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],["(\\d{3})(\\d{5,6})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["70"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],JP:["81","010","00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",[8,9,10,11,12,13,14,15,16,17],[["(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],["(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:80|9[16])","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])","[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],"0$1"],["(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[289][2-9]|5[3-9]|7[2-4679]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[257-9]"],"0$1"]],"0"],KE:["254","000","(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",[7,8,9,10],[["(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[17]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0"],KG:["996","00","8\\d{9}|(?:[235-8]\\d|99)\\d{7}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["3(?:1[346]|[24-79])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-79]|88"],"0$1"],["(\\d{3})(\\d{3})(\\d)(\\d{2,3})","$1 $2 $3 $4",["8"],"0$1"]],"0"],KH:["855","00[14-9]","1\\d{9}|[1-9]\\d{7,8}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],KI:["686","00","(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",[5,8],0,"0"],KM:["269","00","[3478]\\d{6}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[3478]"]]]],KN:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","869$1",0,"869"],KP:["850","00|99","85\\d{6}|(?:19\\d|[2-7])\\d{7}",[8,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"]],"0"],KR:["82","00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))","00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",[5,6,8,9,10,11,12,13,14],[["(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1"],["(\\d{4})(\\d{4})","$1-$2",["1"]],["(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60|8"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1"]],"0",0,"0(8(?:[1-46-8]|5\\d\\d))?"],KW:["965","00","18\\d{5}|(?:[2569]\\d|41)\\d{6}",[7,8],[["(\\d{4})(\\d{3,4})","$1 $2",["[169]|2(?:[235]|4[1-35-9])|52"]],["(\\d{3})(\\d{5})","$1 $2",["[245]"]]]],KY:["1","011","(?:345|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","345$1",0,"345"],KZ:["7","810","(?:33622|8\\d{8})\\d{5}|[78]\\d{9}",[10,14],0,"8",0,0,0,0,"33|7",0,"8~10"],LA:["856","00","[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["30[013-9]"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[23]"],"0$1"]],"0"],LB:["961","00","[27-9]\\d{7}|[13-9]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27-9]"]]],"0"],LC:["1","011","(?:[58]\\d\\d|758|900)\\d{7}",[10],0,"1",0,"([2-8]\\d{6})$|1","758$1",0,"758"],LI:["423","00","[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",[7,9],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2379]|8(?:0[09]|7)","[2379]|8(?:0(?:02|9)|7)"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["69"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],"0",0,"(1001)|0"],LK:["94","00","[1-9]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"],"0$1"]],"0"],LR:["231","00","(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[4-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23578]"],"0$1"]],"0"],LS:["266","00","(?:[256]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2568]"]]]],LT:["370","00","(?:[3469]\\d|52|[78]0)\\d{6}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["52[0-7]"],"(8-$1)",1],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"8 $1",1],["(\\d{2})(\\d{6})","$1 $2",["37|4(?:[15]|6[1-8])"],"(8-$1)",1],["(\\d{3})(\\d{5})","$1 $2",["[3-6]"],"(8-$1)",1]],"8",0,"[08]"],LU:["352","00","35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",[4,5,6,7,8,9,10,11],[["(\\d{2})(\\d{3})","$1 $2",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20[2-689]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"]],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["80[01]|90[015]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})","$1 $2 $3 $4",["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]],0,0,"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],LV:["371","00","(?:[268]\\d|90)\\d{6}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[269]|8[01]"]]]],LY:["218","00","[2-9]\\d{8}",[9],[["(\\d{2})(\\d{7})","$1-$2",["[2-9]"],"0$1"]],"0"],MA:["212","00","[5-8]\\d{8}",[9],[["(\\d{5})(\\d{4})","$1-$2",["5(?:29|38)","5(?:29[1289]|389)","529(?:1[1-46-9]|2[013-8]|90)|5(?:298|389)[0-46-9]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5[45]"],"0$1"],["(\\d{4})(\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|9)|892","5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"],"0$1"],["(\\d{2})(\\d{7})","$1-$2",["8"],"0$1"],["(\\d{3})(\\d{6})","$1-$2",["[5-7]"],"0$1"]],"0",0,0,0,0,0,[["5293[01]\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|9[0-289])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[0189]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|2[0-2]|6[0-8]|8[0-3]))\\d{6}"],["80\\d{7}"],["89\\d{7}"],0,0,0,0,["592(?:4[0-2]|93)\\d{4}"]]],MC:["377","00","(?:[3489]|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[389]"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1"]],"0"],MD:["373","00","(?:[235-7]\\d|[89]0)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[25-7]"],"0$1"]],"0"],ME:["382","00","(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"0$1"]],"0"],MF:["590","00","590\\d{6}|(?:69|80|9\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"],["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:395|76[018])\\d|475[01])\\d{4}"]]],MG:["261","00","[23]\\d{8}",[9],[["(\\d{2})(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"],"0$1"]],"0",0,"([24-9]\\d{6})$|0","20$1"],MH:["692","011","329\\d{4}|(?:[256]\\d|45)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1-$2",["[2-6]"]]],"1"],MK:["389","00","[2-578]\\d{7}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2|34[47]|4(?:[37]7|5[47]|64)"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],"0"],ML:["223","00","[24-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]]],MM:["95","00","1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",[6,7,8,9,10],[["(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[4-7]|8[1-35]"],"0$1"],["(\\d)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92"],"0$1"],["(\\d)(\\d{5})(\\d{4})","$1 $2 $3",["9"],"0$1"]],"0"],MN:["976","001","[12]\\d{7,9}|[5-9]\\d{7}",[8,9,10],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[12]1"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[5-9]"]],["(\\d{3})(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["[12](?:27|3[2-8]|4[2-68]|5[1-4689])","[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["[12]"],"0$1"]],"0"],MO:["853","00","0800\\d{3}|(?:28|[68]\\d)\\d{6}",[7,8],[["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{4})(\\d{4})","$1 $2",["[268]"]]]],MP:["1","011","[58]\\d{9}|(?:67|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","670$1",0,"670"],MQ:["596","00","596\\d{6}|(?:69|80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],MR:["222","00","(?:[2-4]\\d\\d|800)\\d{5}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-48]"]]]],MS:["1","011","(?:[58]\\d\\d|664|900)\\d{7}",[10],0,"1",0,"([34]\\d{6})$|1","664$1",0,"664"],MT:["356","00","3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2357-9]"]]]],MU:["230","0(?:0|[24-7]0|3[03])","(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[2-46]|8[013]"]],["(\\d{4})(\\d{4})","$1 $2",["[57]"]],["(\\d{5})(\\d{5})","$1 $2",["8"]]],0,0,0,0,0,0,0,"020"],MV:["960","0(?:0|19)","(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",[7,10],[["(\\d{3})(\\d{4})","$1-$2",["[34679]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"]]],0,0,0,0,0,0,0,"00"],MW:["265","00","(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",[7,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[137-9]"],"0$1"]],"0"],MX:["52","0[09]","1(?:(?:[27]2|44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}",[10,11],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"],0,1],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 $3 $4",["1(?:33|5[56]|81)"],0,1],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 $3 $4",["1"],0,1]],"01",0,"0(?:[12]|4[45])|1",0,0,0,0,"00"],MY:["60","00","1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1-$2 $3",["1(?:[02469]|[378][1-9]|53)|8","1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3-$4",["1(?:[367]|80)"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2 $3",["1"],"0$1"]],"0"],MZ:["258","00","(?:2|8\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-79]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],NA:["264","00","[68]\\d{7,8}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["87"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],NC:["687","00","(?:050|[2-57-9]\\d\\d)\\d{3}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[02-57-9]"]]]],NE:["227","00","[027-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["08"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[089]|2[013]|7[04]"]]]],NF:["672","00","[13]\\d{5}",[6],[["(\\d{2})(\\d{4})","$1 $2",["1[0-3]"]],["(\\d)(\\d{5})","$1 $2",["[13]"]]],0,0,"([0-258]\\d{4})$","3$1"],NG:["234","009","(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}",[7,8,10,11,12,13,14],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["78"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|9(?:0[3-9]|[1-9])"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[3-7]|8[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]"],"0$1"],["(\\d{3})(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]"],"0$1"]],"0"],NI:["505","00","(?:1800|[25-8]\\d{3})\\d{4}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[125-8]"]]]],NL:["31","00","(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",[5,6,7,8,9,10,11],[["(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],["(\\d)(\\d{8})","$1 $2",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-578]|91"],"0$1"],["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3",["9"],"0$1"]],"0"],NO:["47","00","(?:0|[2-9]\\d{3})\\d{4}",[5,8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[489]|59"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-7]"]]],0,0,0,0,0,"[02-689]|7[0-8]"],NP:["977","00","(?:1\\d|9)\\d{9}|[1-9]\\d{7}",[8,10,11],[["(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],["(\\d{2})(\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],"0$1"],["(\\d{3})(\\d{7})","$1-$2",["9"]]],"0"],NR:["674","00","(?:444|(?:55|8\\d)\\d|666)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[4-68]"]]]],NU:["683","00","(?:[47]|888\\d)\\d{3}",[4,7],[["(\\d{3})(\\d{4})","$1 $2",["8"]]]],NZ:["64","0(?:0|161)","[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,8})","$1 $2",["8[1-579]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["50[036-8]|[89]0","50(?:[0367]|88)|[89]0"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["24|[346]|7[2-57-9]|9[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|[59]|80"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1|2[028]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:[169]|7[0-35-9])|7|86"],"0$1"]],"0",0,0,0,0,0,0,"00"],OM:["968","00","(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",[7,8,9],[["(\\d{3})(\\d{4,6})","$1 $2",["[58]"]],["(\\d{2})(\\d{6})","$1 $2",["2"]],["(\\d{4})(\\d{4})","$1 $2",["[179]"]]]],PA:["507","00","(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",[7,8,10,11],[["(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],["(\\d{4})(\\d{4})","$1-$2",["[68]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]]],PE:["51","00|19(?:1[124]|77|90)00","(?:[14-8]|9\\d)\\d{7}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["1"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[4-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"]]],"0",0,0,0,0,0,0,"00"," Anexo "],PF:["689","00","4\\d{5}(?:\\d{2})?|8\\d{7,8}",[6,8,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4|8[7-9]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],PG:["675","00|140[1-3]","(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["18|[2-69]|85"]],["(\\d{4})(\\d{4})","$1 $2",["[78]"]]],0,0,0,0,0,0,0,"00"],PH:["63","00","(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",[6,8,9,10,11,12,13],[["(\\d)(\\d{5})","$1 $2",["2"],"(0$1)"],["(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],["(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|8[2-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],"0"],PK:["92","00","122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,7})","$1 $2 $3",["[89]0"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["1"]],["(\\d{3})(\\d{6,7})","$1 $2",["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])","9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],"(0$1)"],["(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],["(\\d{5})(\\d{5})","$1 $2",["58"],"(0$1)"],["(\\d{3})(\\d{7})","$1 $2",["3"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[24-9]"],"(0$1)"]],"0"],PL:["48","00","(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",[6,7,8,9,10],[["(\\d{5})","$1",["19"]],["(\\d{3})(\\d{3})","$1 $2",["11|20|64"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1","(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2-8]|[2-7]|8[1-79]|9[145]"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["8"]]]],PM:["508","00","[45]\\d{5}|(?:708|80\\d)\\d{6}",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[45]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],PR:["1","011","(?:[589]\\d\\d|787)\\d{7}",[10],0,"1",0,0,0,0,"787|939"],PS:["970","00","[2489]2\\d{6}|(?:1\\d|5)\\d{8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2489]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],PT:["351","00","1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["16|[236-9]"]]]],PW:["680","01[12]","(?:[24-8]\\d\\d|345|900)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],PY:["595","00","59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],["(\\d{3})(\\d{4,5})","$1 $2",["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["87"]],["(\\d{3})(\\d{6})","$1 $2",["9(?:[5-79]|8[1-6])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["9"]]],"0"],QA:["974","00","800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",[7,8,9,11],[["(\\d{3})(\\d{4})","$1 $2",["2[16]|8"]],["(\\d{4})(\\d{4})","$1 $2",["[3-7]"]]]],RE:["262","00","(?:26|[689]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2689]"],"0$1"]],"0",0,0,0,0,0,[["26(?:2\\d\\d|3(?:0\\d|1[0-3]))\\d{4}"],["(?:69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|6[0-6]|7[0-27]|8[0-8]|9[0-479]))|9(?:399[0-2]|4790|76(?:2[27]|3[0-37]|9\\d)))\\d{4}"],["80\\d{7}"],["89[1-37-9]\\d{6}"],0,0,0,0,0,["8(?:1[019]|2[0156]|84|90)\\d{6}"]]],RO:["40","00","(?:[2378]\\d|90)\\d{7}|[23]\\d{5}",[6,9],[["(\\d{3})(\\d{3})","$1 $2",["2[3-6]","2[3-6]\\d9"],"0$1"],["(\\d{2})(\\d{4})","$1 $2",["219|31"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[237-9]"],"0$1"]],"0",0,0,0,0,0,0,0," int "],RS:["381","00","38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",[6,7,8,9,10,11,12],[["(\\d{3})(\\d{3,9})","$1 $2",["(?:2[389]|39)0|[7-9]"],"0$1"],["(\\d{2})(\\d{5,10})","$1 $2",["[1-36]"],"0$1"]],"0"],RU:["7","810","8\\d{13}|[347-9]\\d{9}",[10,14],[["(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],"8 ($1)",1],["(\\d{5})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))","7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[349]|8(?:[02-7]|1[1-8])"],"8 ($1)",1],["(\\d{4})(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3 $4",["8"],"8 ($1)"]],"8",0,0,0,0,"3[04-689]|[489]",0,"8~10"],RW:["250","00","(?:06|[27]\\d\\d|[89]00)\\d{6}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"]]],"0"],SA:["966","00","92\\d{7}|(?:[15]|8\\d)\\d{8}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["9"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["81"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],"0"],SB:["677","0[01]","(?:[1-6]|[7-9]\\d\\d)\\d{4}",[5,7],[["(\\d{2})(\\d{5})","$1 $2",["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],SC:["248","010|0[0-2]","800\\d{4}|(?:[249]\\d|64)\\d{5}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]|9[57]"]]],0,0,0,0,0,0,0,"00"],SD:["249","00","[19]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[19]"],"0$1"]],"0"],SE:["46","00","(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{4})","$1-$2",["9(?:00|39|44|9)"],"0$1",0,"$1 $2"],["(\\d{2})(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3"],["(\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{2,3})(\\d{3})","$1-$2 $3",["9(?:00|39|44)"],"0$1",0,"$1 $2 $3"],["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3 $4"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["10|7"],"0$1",0,"$1 $2 $3 $4"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["[26]"],"0$1",0,"$1 $2 $3 $4 $5"]],"0"],SG:["65","0[0-3]\\d","(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",[8,10,11],[["(\\d{4})(\\d{4})","$1 $2",["[369]|8(?:0[1-6]|[1-9])"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],["(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],SH:["290","00","(?:[256]\\d|8)\\d{3}",[4,5],0,0,0,0,0,0,"[256]"],SI:["386","00|10(?:22|66|88|99)","[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",[5,6,7,8],[["(\\d{2})(\\d{3,6})","$1 $2",["8[09]|9"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["59|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-57]"],"(0$1)"]],"0",0,0,0,0,0,0,"00"],SJ:["47","00","0\\d{4}|(?:[489]\\d|[57]9)\\d{6}",[5,8],0,0,0,0,0,0,"79"],SK:["421","00","[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",[6,7,9],[["(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"]],"0"],SL:["232","00","(?:[237-9]\\d|66)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[236-9]"],"(0$1)"]],"0"],SM:["378","00","(?:0549|[5-7]\\d)\\d{6}",[8,10],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],["(\\d{4})(\\d{6})","$1 $2",["0"]]],0,0,"([89]\\d{5})$","0549$1"],SN:["221","00","(?:[378]\\d|93)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]]]],SO:["252","00","[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",[6,7,8,9],[["(\\d{2})(\\d{4})","$1 $2",["8[125]"]],["(\\d{6})","$1",["[134]"]],["(\\d)(\\d{6})","$1 $2",["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],["(\\d)(\\d{7})","$1 $2",["(?:2|90)4|[67]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3478]|64|90"]],["(\\d{2})(\\d{5,7})","$1 $2",["1|28|6(?:0[5-7]|[1-35-9])|9[2-9]"]]],"0"],SR:["597","00","(?:[2-5]|68|[78]\\d)\\d{5}",[6,7],[["(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],["(\\d{3})(\\d{3})","$1-$2",["[2-5]"]],["(\\d{3})(\\d{4})","$1-$2",["[6-8]"]]]],SS:["211","00","[19]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[19]"],"0$1"]],"0"],ST:["239","00","(?:22|9\\d)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[29]"]]]],SV:["503","00","[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",[7,8,11],[["(\\d{3})(\\d{4})","$1 $2",["[89]"]],["(\\d{4})(\\d{4})","$1 $2",["[267]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]]],SX:["1","011","7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"(5\\d{6})$|1","721$1",0,"721"],SY:["963","00","[1-39]\\d{8}|[1-5]\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-5]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1",1]],"0"],SZ:["268","00","0800\\d{4}|(?:[237]\\d|900)\\d{6}",[8,9],[["(\\d{4})(\\d{4})","$1 $2",["[0237]"]],["(\\d{5})(\\d{4})","$1 $2",["9"]]]],TA:["290","00","8\\d{3}",[4],0,0,0,0,0,0,"8"],TC:["1","011","(?:[58]\\d\\d|649|900)\\d{7}",[10],0,"1",0,"([2-479]\\d{6})$|1","649$1",0,"649"],TD:["235","00|16","(?:22|[69]\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2679]"]]],0,0,0,0,0,0,0,"00"],TG:["228","00","[279]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[279]"]]]],TH:["66","00[1-9]","(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",[8,9,10,13],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],TJ:["992","810","(?:00|[1-57-9]\\d)\\d{7}",[9],[["(\\d{6})(\\d)(\\d{2})","$1 $2 $3",["331","3317"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[34]7|91[78]"]],["(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3[1-5]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[0-57-9]"]]],0,0,0,0,0,0,0,"8~10"],TK:["690","00","[2-47]\\d{3,6}",[4,5,6,7]],TL:["670","00","7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],["(\\d{4})(\\d{4})","$1 $2",["7"]]]],TM:["993","810","[1-6]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-5]"],"(8 $1)"],["(\\d{2})(\\d{6})","$1 $2",["6"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],TN:["216","00","[2-57-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]"]]]],TO:["676","00","(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",[5,7],[["(\\d{2})(\\d{3})","$1-$2",["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[5-9]"]]]],TR:["90","00","4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",[7,10,12,13],[["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[01589]|90"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:[0-59]|61)","5(?:[0-59]|616)","5(?:[0-59]|6161)"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24][1-8]|3[1-9]"],"(0$1)",1],["(\\d{3})(\\d{3})(\\d{6,7})","$1 $2 $3",["80"],"0$1",1]],"0"],TT:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-46-8]\\d{6})$|1","868$1",0,"868"],TV:["688","00","(?:2|7\\d\\d|90)\\d{4}",[5,6,7],[["(\\d{2})(\\d{3})","$1 $2",["2"]],["(\\d{2})(\\d{4})","$1 $2",["90"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],TW:["886","0(?:0[25-79]|19)","[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",[7,8,9,10,11],[["(\\d{2})(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[258]0"],"0$1"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]","[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,5})","$1 $2 $3",["7"],"0$1"]],"0",0,0,0,0,0,0,0,"#"],TZ:["255","00[056]","(?:[25-8]\\d|41|90)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["5"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"]],"0"],UA:["380","00","[89]\\d{9}|[3-9]\\d{8}",[9,10],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]","6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])","3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|89|9[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0",0,0,0,0,0,0,"0~0"],UG:["256","00[057]","800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",[9],[["(\\d{4})(\\d{5})","$1 $2",["202","2024"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[27-9]|4(?:6[45]|[7-9])"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[34]"],"0$1"]],"0"],US:["1","011","[2-9]\\d{9}|3\\d{6}",[10],[["(\\d{3})(\\d{4})","$1-$2",["310"],0,1],["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",["[2-9]"],0,1,"$1-$2-$3"]],"1",0,0,0,0,0,[["(?:47220[01]|5(?:05(?:[2-57-9]\\d\\d|6(?:[0-35-9]\\d|4[46]))|57200))\\d{4}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[0-2]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],[""],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],["900[2-9]\\d{6}"],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]]],UY:["598","0(?:0|1[3-9]\\d)","(?:0004|4)\\d{9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}",[7,8,10,13],[["(\\d{3})(\\d{4})","$1 $2",["405|8|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[124]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["4"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["0"]]],"0",0,0,0,0,0,0,"00"," int. "],UZ:["998","810","(?:33|[5-79]\\d|88)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[35-9]"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],VA:["39","00","0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",[6,7,8,9,10,11],0,0,0,0,0,0,"06698"],VC:["1","011","(?:[58]\\d\\d|784|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","784$1",0,"784"],VE:["58","00","[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",[10],[["(\\d{3})(\\d{7})","$1-$2",["[24-689]"],"0$1"]],"0"],VG:["1","011","(?:284|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-578]\\d{6})$|1","284$1",0,"284"],VI:["1","011","[58]\\d{9}|(?:34|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","340$1",0,"340"],VN:["84","00","[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["80"],"0$1",1],["(\\d{4})(\\d{4,6})","$1 $2",["1"],0,1],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[69]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3578]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",1]],"0"],VU:["678","00","[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",[5,7],[["(\\d{3})(\\d{4})","$1 $2",["[57-9]"]]]],WF:["681","00","(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[478]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],WS:["685","0","(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",[5,6,7,10],[["(\\d{5})","$1",["[2-5]|6[1-9]"]],["(\\d{3})(\\d{3,7})","$1 $2",["[68]"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],XK:["383","00","[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[23]"],"0$1"]],"0"],YE:["967","00","(?:1|7\\d)\\d{7}|[1-7]\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7(?:[24-6]|8[0-7])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],"0"],YT:["262","00","(?:(?:(?:26|63)9|80\\d)\\d\\d|93980)\\d{4}",[9],0,"0",0,0,0,0,"269|63|9398"],ZA:["27","00","[1-79]\\d{8}|8\\d{4,9}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],ZM:["260","00","800\\d{6}|(?:21|63|[79]\\d)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[79]"],"0$1"]],"0"],ZW:["263","00","2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",[5,6,7,8,9,10],[["(\\d{3})(\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"],"0$1"],["(\\d)(\\d{3})(\\d{2,4})","$1 $2 $3",["[49]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["80"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2","2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)","2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["29[013-9]|39|54"],"0$1"],["(\\d{4})(\\d{3,5})","$1 $2",["(?:25|54)8","258|5483"],"0$1"]],"0"]},nonGeographic:{800:["800",0,"(?:00|[1-9]\\d)\\d{6}",[8],[["(\\d{4})(\\d{4})","$1 $2",["\\d"]]],0,0,0,0,0,0,[0,0,["(?:00|[1-9]\\d)\\d{6}"]]],808:["808",0,"[1-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[1-9]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,0,["[1-9]\\d{7}"]]],870:["870",0,"7\\d{11}|[35-7]\\d{8}",[9,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[35-7]"]]],0,0,0,0,0,0,[0,["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]],878:["878",0,"10\\d{10}",[12],[["(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3",["1"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["10\\d{10}"]]],881:["881",0,"[0-36-9]\\d{8}",[9],[["(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[0-36-9]"]]],0,0,0,0,0,0,[0,["[0-36-9]\\d{8}"]]],882:["882",0,"[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",[7,8,9,10,11,12],[["(\\d{2})(\\d{5})","$1 $2",["16|342"]],["(\\d{2})(\\d{6})","$1 $2",["49"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["1[36]|9"]],["(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["16"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|23|3(?:[15]|4[57])|4|51"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["34"]],["(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["[1-35]"]]],0,0,0,0,0,0,[0,["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}",[7,8,9,10,12]],0,0,0,0,0,0,["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]],883:["883",0,"(?:[1-4]\\d|51)\\d{6,10}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,8})","$1 $2 $3",["[14]|2[24-689]|3[02-689]|51[24-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["21"]],["(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["51[13]"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[235]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[013-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]],888:["888",0,"\\d{11}",[11],[["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],0,0,0,0,0,0,[0,0,0,0,0,0,["\\d{11}"]]],979:["979",0,"[1359]\\d{8}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[1359]"]]],0,0,0,0,0,0,[0,0,0,["[1359]\\d{8}"]]]}};var K={},_P={get exports(){return K},set exports(e){K=e}},kP="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",NP=kP,EP=NP;function V$(){}function q$(){}q$.resetWarningCache=V$;var IP=function(){function e(r,i,o,a,l,u){if(u!==EP){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:q$,resetWarningCache:V$};return n.PropTypes=n,n};_P.exports=IP();var h1={},TP={get exports(){return h1},set exports(e){h1=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if(a==="string"||a==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var l=n.apply(null,o);l&&r.push(l)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var u in o)t.call(o,u)&&o[u]&&r.push(u)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(TP);const Xd=h1;function AP(e,t,n){switch(n){case"Backspace":t>0&&(e=e.slice(0,t-1)+e.slice(t),t--);break;case"Delete":e=e.slice(0,t)+e.slice(t+1);break}return{value:e,caret:t}}function RP(e,t,n){for(var r="",i=0,o=0;o<e.length;){var a=n(e[o],r);a!==void 0&&(r+=a,t!==void 0&&(t===o?i=r.length-1:t>o&&(i=r.length))),o++}t===void 0&&(i=r.length);var l={value:r,caret:i};return l}function FP(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=DP(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DP(e,t){if(e){if(typeof e=="string")return gv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gv(e,t)}}function gv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p1(e,t){for(var n=0,r=FP(t.split("")),i;!(i=r()).done;){var o=i.value;o===e&&n++}return n}function MP(e,t){for(var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"x",r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:" ",i=e.length,o=p1("(",e),a=p1(")",e),l=o-a;l>0&&i<t.length;)e+=t[i].replace(n,r),t[i]===")"&&l--,i++;return e}function jP(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=LP(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function LP(e,t){if(e){if(typeof e=="string")return mv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mv(e,t)}}function mv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zP(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"x",n=arguments.length>2?arguments[2]:void 0;if(!e)return function(i){return{text:i}};var r=p1(t,e);return function(i){if(!i)return{text:"",template:e};for(var o=0,a="",l=jP(e.split("")),u;!(u=l()).done;){var d=u.value;if(d!==t){a+=d;continue}if(a+=i[o],o++,o===i.length&&i.length<r)break}return n&&(a=MP(a,e)),{text:a,template:e}}}function UP(e,t,n){typeof n=="string"&&(n=zP(n));var r=n(e)||{},i=r.text,o=r.template;if(i===void 0&&(i=e),o)if(t===void 0)t=i.length;else{for(var a=0,l=!1,u=-1;a<i.length&&a<o.length;){if(i[a]!==o[a]){if(t===0){l=!0,t=a;break}u=a,t--}a++}l||(t=u+1)}return{text:i,caret:t}}function BP(e){return e.hasAttribute("readonly")}function HP(e){if(e.selectionStart!==e.selectionEnd)return{start:e.selectionStart,end:e.selectionEnd}}var yv={Backspace:8,Delete:46};function WP(e){switch(e.keyCode){case yv.Backspace:return"Backspace";case yv.Delete:return"Delete"}}function YP(e){return e.selectionStart}function G$(e,t){t!==void 0&&(VP()?setTimeout(function(){return e.setSelectionRange(t,t)},0):e.setSelectionRange(t,t))}function VP(){if(typeof navigator<"u")return qP.test(navigator.userAgent)}var qP=/Android/i;function GP(e,t,n,r,i){g1(t,n,r,void 0,i)}function QP(e,t,n,r,i){if(!BP(t)){var o=WP(e);switch(o){case"Delete":case"Backspace":e.preventDefault();var a=HP(t);return a?(KP(t,a),g1(t,n,r,void 0,i)):g1(t,n,r,o,i)}}}function KP(e,t){var n=e.value;n=n.slice(0,t.start)+n.slice(t.end),e.value=n,G$(e,t.start)}function g1(e,t,n,r,i){var o=RP(e.value,YP(e),t),a=o.value,l=o.caret;if(r){var u=AP(a,l,r);a=u.value,l=u.caret}var d=UP(a,l,n),c=d.text;l=d.caret,e.value=c,G$(e,l),i(a)}var ZP=["value","parse","format","inputComponent","onChange","onKeyDown"];function m1(){return m1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m1.apply(this,arguments)}function JP(e,t){if(e==null)return{};var n=XP(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function XP(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function dl(e,t){var n=e.value,r=e.parse,i=e.format,o=e.inputComponent,a=e.onChange,l=e.onKeyDown,u=JP(e,ZP),d=C.useRef(),c=C.useCallback(function(b){d.current=b,t&&(typeof t=="function"?t(b):t.current=b)},[t]),h=C.useCallback(function(b){return GP(b,d.current,r,i,a)},[d,r,i,a]),g=C.useCallback(function(b){return l&&l(b),QP(b,d.current,r,i,a)},[d,r,i,a,l]);return ne.createElement(o,m1({},u,{ref:c,value:i(tO(n)?"":n).text,onKeyDown:g,onChange:h}))}dl=ne.forwardRef(dl);dl.propTypes={parse:K.func.isRequired,format:K.func.isRequired,inputComponent:K.elementType.isRequired,type:K.string.isRequired,value:K.string,onChange:K.func.isRequired,onKeyDown:K.func,onCut:K.func,onPaste:K.func};dl.defaultProps={inputComponent:"input",type:"text"};const eO=dl;function tO(e){return e==null}function y1(e){return y1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y1(e)}function vv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function nO(e,t,n){return t&&vv(e.prototype,t),n&&vv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function rO(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function iO(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&cl(e,t)}function oO(e){var t=K$();return function(){var r=fl(e),i;if(t){var o=fl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return aO(this,i)}}function aO(e,t){if(t&&(y1(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Q$(e)}function Q$(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v1(e){var t=typeof Map=="function"?new Map:void 0;return v1=function(r){if(r===null||!sO(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,i)}function i(){return od(r,arguments,fl(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),cl(i,r)},v1(e)}function od(e,t,n){return K$()?od=Reflect.construct:od=function(i,o,a){var l=[null];l.push.apply(l,o);var u=Function.bind.apply(i,l),d=new u;return a&&cl(d,a.prototype),d},od.apply(null,arguments)}function K$(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function sO(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function cl(e,t){return cl=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},cl(e,t)}function fl(e){return fl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},fl(e)}var pr=function(e){iO(n,e);var t=oO(n);function n(r){var i;return rO(this,n),i=t.call(this,r),Object.setPrototypeOf(Q$(i),n.prototype),i.name=i.constructor.name,i}return nO(n)}(v1(Error)),vm=2,lO=17,uO=3,Rt="0-9０-９٠-٩۰-۹",dO="-‐-―−ー－",cO="／/",fO="．.",hO="  ­​⁠　",pO="()（）［］\\[\\]",gO="~⁓∼～",Fn="".concat(dO).concat(cO).concat(fO).concat(hO).concat(pO).concat(gO),sf="+＋";function xv(e,t){e=e.split("-"),t=t.split("-");for(var n=e[0].split("."),r=t[0].split("."),i=0;i<3;i++){var o=Number(n[i]),a=Number(r[i]);if(o>a)return 1;if(a>o)return-1;if(!isNaN(o)&&isNaN(a))return 1;if(isNaN(o)&&!isNaN(a))return-1}return e[1]&&t[1]?e[1]>t[1]?1:e[1]<t[1]?-1:0:!e[1]&&t[1]?1:e[1]&&!t[1]?-1:0}function ec(e){return ec=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ec(e)}function lf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function uf(e,t,n){return t&&bv(e.prototype,t),n&&bv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var mO="1.2.0",yO="1.7.35",$v=" ext. ",vO=/^\d+$/,gt=function(){function e(t){lf(this,e),wO(t),this.metadata=t,J$.call(this,t)}return uf(e,[{key:"getCountries",value:function(){return Object.keys(this.metadata.countries).filter(function(n){return n!=="001"})}},{key:"getCountryMetadata",value:function(n){return this.metadata.countries[n]}},{key:"nonGeographic",value:function(){if(!(this.v1||this.v2||this.v3))return this.metadata.nonGeographic||this.metadata.nonGeographical}},{key:"hasCountry",value:function(n){return this.getCountryMetadata(n)!==void 0}},{key:"hasCallingCode",value:function(n){if(this.getCountryCodesForCallingCode(n))return!0;if(this.nonGeographic()){if(this.nonGeographic()[n])return!0}else{var r=this.countryCallingCodes()[n];if(r&&r.length===1&&r[0]==="001")return!0}}},{key:"isNonGeographicCallingCode",value:function(n){return this.nonGeographic()?!!this.nonGeographic()[n]:!this.getCountryCodesForCallingCode(n)}},{key:"country",value:function(n){return this.selectNumberingPlan(n)}},{key:"selectNumberingPlan",value:function(n,r){if(n&&vO.test(n)&&(r=n,n=null),n&&n!=="001"){if(!this.hasCountry(n))throw new Error("Unknown country: ".concat(n));this.numberingPlan=new wv(this.getCountryMetadata(n),this)}else if(r){if(!this.hasCallingCode(r))throw new Error("Unknown calling code: ".concat(r));this.numberingPlan=new wv(this.getNumberingPlanMetadata(r),this)}else this.numberingPlan=void 0;return this}},{key:"getCountryCodesForCallingCode",value:function(n){var r=this.countryCallingCodes()[n];if(r)return r.length===1&&r[0].length===3?void 0:r}},{key:"getCountryCodeForCallingCode",value:function(n){var r=this.getCountryCodesForCallingCode(n);if(r)return r[0]}},{key:"getNumberingPlanMetadata",value:function(n){var r=this.getCountryCodeForCallingCode(n);if(r)return this.getCountryMetadata(r);if(this.nonGeographic()){var i=this.nonGeographic()[n];if(i)return i}else{var o=this.countryCallingCodes()[n];if(o&&o.length===1&&o[0]==="001")return this.metadata.countries["001"]}}},{key:"countryCallingCode",value:function(){return this.numberingPlan.callingCode()}},{key:"IDDPrefix",value:function(){return this.numberingPlan.IDDPrefix()}},{key:"defaultIDDPrefix",value:function(){return this.numberingPlan.defaultIDDPrefix()}},{key:"nationalNumberPattern",value:function(){return this.numberingPlan.nationalNumberPattern()}},{key:"possibleLengths",value:function(){return this.numberingPlan.possibleLengths()}},{key:"formats",value:function(){return this.numberingPlan.formats()}},{key:"nationalPrefixForParsing",value:function(){return this.numberingPlan.nationalPrefixForParsing()}},{key:"nationalPrefixTransformRule",value:function(){return this.numberingPlan.nationalPrefixTransformRule()}},{key:"leadingDigits",value:function(){return this.numberingPlan.leadingDigits()}},{key:"hasTypes",value:function(){return this.numberingPlan.hasTypes()}},{key:"type",value:function(n){return this.numberingPlan.type(n)}},{key:"ext",value:function(){return this.numberingPlan.ext()}},{key:"countryCallingCodes",value:function(){return this.v1?this.metadata.country_phone_code_to_countries:this.metadata.country_calling_codes}},{key:"chooseCountryByCountryCallingCode",value:function(n){return this.selectNumberingPlan(n)}},{key:"hasSelectedNumberingPlan",value:function(){return this.numberingPlan!==void 0}}]),e}(),wv=function(){function e(t,n){lf(this,e),this.globalMetadataObject=n,this.metadata=t,J$.call(this,n.metadata)}return uf(e,[{key:"callingCode",value:function(){return this.metadata[0]}},{key:"getDefaultCountryMetadataForRegion",value:function(){return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())}},{key:"IDDPrefix",value:function(){if(!(this.v1||this.v2))return this.metadata[1]}},{key:"defaultIDDPrefix",value:function(){if(!(this.v1||this.v2))return this.metadata[12]}},{key:"nationalNumberPattern",value:function(){return this.v1||this.v2?this.metadata[1]:this.metadata[2]}},{key:"possibleLengths",value:function(){if(!this.v1)return this.metadata[this.v2?2:3]}},{key:"_getFormats",value:function(n){return n[this.v1?2:this.v2?3:4]}},{key:"formats",value:function(){var n=this,r=this._getFormats(this.metadata)||this._getFormats(this.getDefaultCountryMetadataForRegion())||[];return r.map(function(i){return new xO(i,n)})}},{key:"nationalPrefix",value:function(){return this.metadata[this.v1?3:this.v2?4:5]}},{key:"_getNationalPrefixFormattingRule",value:function(n){return n[this.v1?4:this.v2?5:6]}},{key:"nationalPrefixFormattingRule",value:function(){return this._getNationalPrefixFormattingRule(this.metadata)||this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())}},{key:"_nationalPrefixForParsing",value:function(){return this.metadata[this.v1?5:this.v2?6:7]}},{key:"nationalPrefixForParsing",value:function(){return this._nationalPrefixForParsing()||this.nationalPrefix()}},{key:"nationalPrefixTransformRule",value:function(){return this.metadata[this.v1?6:this.v2?7:8]}},{key:"_getNationalPrefixIsOptionalWhenFormatting",value:function(){return!!this.metadata[this.v1?7:this.v2?8:9]}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata)||this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())}},{key:"leadingDigits",value:function(){return this.metadata[this.v1?8:this.v2?9:10]}},{key:"types",value:function(){return this.metadata[this.v1?9:this.v2?10:11]}},{key:"hasTypes",value:function(){return this.types()&&this.types().length===0?!1:!!this.types()}},{key:"type",value:function(n){if(this.hasTypes()&&Sv(this.types(),n))return new $O(Sv(this.types(),n),this)}},{key:"ext",value:function(){return this.v1||this.v2?$v:this.metadata[13]||$v}}]),e}(),xO=function(){function e(t,n){lf(this,e),this._format=t,this.metadata=n}return uf(e,[{key:"pattern",value:function(){return this._format[0]}},{key:"format",value:function(){return this._format[1]}},{key:"leadingDigitsPatterns",value:function(){return this._format[2]||[]}},{key:"nationalPrefixFormattingRule",value:function(){return this._format[3]||this.metadata.nationalPrefixFormattingRule()}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return!!this._format[4]||this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"nationalPrefixIsMandatoryWhenFormattingInNationalFormat",value:function(){return this.usesNationalPrefix()&&!this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"usesNationalPrefix",value:function(){return!!(this.nationalPrefixFormattingRule()&&!bO.test(this.nationalPrefixFormattingRule()))}},{key:"internationalFormat",value:function(){return this._format[5]||this.format()}}]),e}(),bO=/^\(?\$1\)?$/,$O=function(){function e(t,n){lf(this,e),this.type=t,this.metadata=n}return uf(e,[{key:"pattern",value:function(){return this.metadata.v1?this.type:this.type[0]}},{key:"possibleLengths",value:function(){if(!this.metadata.v1)return this.type[1]||this.metadata.possibleLengths()}}]),e}();function Sv(e,t){switch(t){case"FIXED_LINE":return e[0];case"MOBILE":return e[1];case"TOLL_FREE":return e[2];case"PREMIUM_RATE":return e[3];case"PERSONAL_NUMBER":return e[4];case"VOICEMAIL":return e[5];case"UAN":return e[6];case"PAGER":return e[7];case"VOIP":return e[8];case"SHARED_COST":return e[9]}}function wO(e){if(!e)throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");if(!Ph(e)||!Ph(e.countries))throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(Ph(e)?"an object of shape: { "+Object.keys(e).join(", ")+" }":"a "+SO(e)+": "+e,"."))}var Ph=function(t){return ec(t)==="object"},SO=function(t){return ec(t)};function Si(e,t){if(t=new gt(t),t.hasCountry(e))return t.country(e).countryCallingCode();throw new Error("Unknown country: ".concat(e))}function Z$(e,t){return t.countries[e]!==void 0}function J$(e){var t=e.version;typeof t=="number"?(this.v1=t===1,this.v2=t===2,this.v3=t===3,this.v4=t===4):t?xv(t,mO)===-1?this.v2=!0:xv(t,yO)===-1?this.v3=!0:this.v4=!0:this.v1=!0}var CO=";ext=",mo=function(t){return"([".concat(Rt,"]{1,").concat(t,"})")};function X$(e){var t="20",n="15",r="9",i="6",o="[  \\t,]*",a="[:\\.．]?[  \\t,-]*",l="#?",u="(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)",d="(?:[xｘ#＃~～]|int|ｉｎｔ)",c="[- ]+",h="[  \\t]*",g="(?:,{2}|;)",b=CO+mo(t),v=o+u+a+mo(t)+l,w=o+d+a+mo(r)+l,$=c+mo(i)+"#",m=h+g+a+mo(n)+l,p=h+"(?:,)+"+a+mo(r)+l;return b+"|"+v+"|"+w+"|"+$+"|"+m+"|"+p}var PO="["+Rt+"]{"+vm+"}",OO="["+sf+"]{0,1}(?:["+Fn+"]*["+Rt+"]){3,}["+Fn+Rt+"]*",_O=new RegExp("^["+sf+"]{0,1}(?:["+Fn+"]*["+Rt+"]){1,2}$","i"),kO=OO+"(?:"+X$()+")?",NO=new RegExp("^"+PO+"$|^"+kO+"$","i");function EO(e){return e.length>=vm&&NO.test(e)}function IO(e){return _O.test(e)}var Cv=new RegExp("(?:"+X$()+")$","i");function TO(e){var t=e.search(Cv);if(t<0)return{};for(var n=e.slice(0,t),r=e.match(Cv),i=1;i<r.length;){if(r[i])return{number:n,ext:r[i]};i++}}function AO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=RO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function RO(e,t){if(e){if(typeof e=="string")return Pv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pv(e,t)}}function Pv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var FO={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","０":"0","１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9"};function e5(e){return FO[e]}function tc(e){for(var t="",n=AO(e.split("")),r;!(r=n()).done;){var i=r.value,o=e5(i);o&&(t+=o)}return t}function DO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=MO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function MO(e,t){if(e){if(typeof e=="string")return Ov(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ov(e,t)}}function Ov(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x1(e){for(var t="",n=DO(e.split("")),r;!(r=n()).done;){var i=r.value;t+=t5(i,t)||""}return t}function t5(e,t){return e==="+"?t?void 0:"+":e5(e)}function jO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=LO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function LO(e,t){if(e){if(typeof e=="string")return _v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _v(e,t)}}function _v(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zO(e,t){for(var n=e.slice(),r=jO(t),i;!(i=r()).done;){var o=i.value;e.indexOf(o)<0&&n.push(o)}return n.sort(function(a,l){return a-l})}function df(e,t){return n5(e,void 0,t)}function n5(e,t,n){var r=n.type(t),i=r&&r.possibleLengths()||n.possibleLengths();if(!i)return"IS_POSSIBLE";if(t==="FIXED_LINE_OR_MOBILE"){if(!n.type("FIXED_LINE"))return n5(e,"MOBILE",n);var o=n.type("MOBILE");o&&(i=zO(i,o.possibleLengths()))}else if(t&&!r)return"INVALID_LENGTH";var a=e.length,l=i[0];return l===a?"IS_POSSIBLE":l>a?"TOO_SHORT":i[i.length-1]<a?"TOO_LONG":i.indexOf(a,1)>=0?"IS_POSSIBLE":"INVALID_LENGTH"}function UO(e,t,n){if(t===void 0&&(t={}),n=new gt(n),t.v2){if(!e.countryCallingCode)throw new Error("Invalid phone number object passed");n.selectNumberingPlan(e.countryCallingCode)}else{if(!e.phone)return!1;if(e.country){if(!n.hasCountry(e.country))throw new Error("Unknown country: ".concat(e.country));n.country(e.country)}else{if(!e.countryCallingCode)throw new Error("Invalid phone number object passed");n.selectNumberingPlan(e.countryCallingCode)}}if(n.possibleLengths())return r5(e.phone||e.nationalNumber,n);if(e.countryCallingCode&&n.isNonGeographicCallingCode(e.countryCallingCode))return!0;throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')}function r5(e,t){switch(df(e,t)){case"IS_POSSIBLE":return!0;default:return!1}}function _r(e,t){return e=e||"",new RegExp("^(?:"+t+")$").test(e)}function BO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=HO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HO(e,t){if(e){if(typeof e=="string")return kv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kv(e,t)}}function kv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var WO=["MOBILE","PREMIUM_RATE","TOLL_FREE","SHARED_COST","VOIP","PERSONAL_NUMBER","PAGER","UAN","VOICEMAIL"];function xm(e,t,n){if(t=t||{},!!e.country){n=new gt(n),n.selectNumberingPlan(e.country,e.countryCallingCode);var r=t.v2?e.nationalNumber:e.phone;if(_r(r,n.nationalNumberPattern())){if(Oh(r,"FIXED_LINE",n))return n.type("MOBILE")&&n.type("MOBILE").pattern()===""||!n.type("MOBILE")||Oh(r,"MOBILE",n)?"FIXED_LINE_OR_MOBILE":"FIXED_LINE";for(var i=BO(WO),o;!(o=i()).done;){var a=o.value;if(Oh(r,a,n))return a}}}}function Oh(e,t,n){return t=n.type(t),!t||!t.pattern()||t.possibleLengths()&&t.possibleLengths().indexOf(e.length)<0?!1:_r(e,t.pattern())}function YO(e,t,n){if(t=t||{},n=new gt(n),n.selectNumberingPlan(e.country,e.countryCallingCode),n.hasTypes())return xm(e,t,n.metadata)!==void 0;var r=t.v2?e.nationalNumber:e.phone;return _r(r,n.nationalNumberPattern())}function VO(e,t,n){var r=new gt(n),i=r.getCountryCodesForCallingCode(e);return i?i.filter(function(o){return qO(t,o,n)}):[]}function qO(e,t,n){var r=new gt(n);return r.selectNumberingPlan(t),r.numberingPlan.possibleLengths().indexOf(e.length)>=0}function i5(e){return e.replace(new RegExp("[".concat(Fn,"]+"),"g")," ").trim()}var o5=/(\$\d)/;function a5(e,t,n){var r=n.useInternationalFormat,i=n.withNationalPrefix;n.carrierCode,n.metadata;var o=e.replace(new RegExp(t.pattern()),r?t.internationalFormat():i&&t.nationalPrefixFormattingRule()?t.format().replace(o5,t.nationalPrefixFormattingRule()):t.format());return r?i5(o):o}var GO=/^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;function QO(e,t,n){var r=new gt(n);if(r.selectNumberingPlan(e,t),r.defaultIDDPrefix())return r.defaultIDDPrefix();if(GO.test(r.IDDPrefix()))return r.IDDPrefix()}function KO(e){var t=e.number,n=e.ext;if(!t)return"";if(t[0]!=="+")throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');return"tel:".concat(t).concat(n?";ext="+n:"")}function ZO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=JO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JO(e,t){if(e){if(typeof e=="string")return Nv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nv(e,t)}}function Nv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ev(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Iv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ev(Object(n),!0).forEach(function(r){XO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ev(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function XO(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Tv={formatExtension:function(t,n,r){return"".concat(t).concat(r.ext()).concat(n)}};function e_(e,t,n,r){if(n?n=Iv(Iv({},Tv),n):n=Tv,r=new gt(r),e.country&&e.country!=="001"){if(!r.hasCountry(e.country))throw new Error("Unknown country: ".concat(e.country));r.country(e.country)}else if(e.countryCallingCode)r.selectNumberingPlan(e.countryCallingCode);else return e.phone||"";var i=r.countryCallingCode(),o=n.v2?e.nationalNumber:e.phone,a;switch(t){case"NATIONAL":return o?(a=nc(o,e.carrierCode,"NATIONAL",r,n),_h(a,e.ext,r,n.formatExtension)):"";case"INTERNATIONAL":return o?(a=nc(o,null,"INTERNATIONAL",r,n),a="+".concat(i," ").concat(a),_h(a,e.ext,r,n.formatExtension)):"+".concat(i);case"E.164":return"+".concat(i).concat(o);case"RFC3966":return KO({number:"+".concat(i).concat(o),ext:e.ext});case"IDD":if(!n.fromCountry)return;var l=n_(o,e.carrierCode,i,n.fromCountry,r);return _h(l,e.ext,r,n.formatExtension);default:throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t,'"'))}}function nc(e,t,n,r,i){var o=t_(r.formats(),e);return o?a5(e,o,{useInternationalFormat:n==="INTERNATIONAL",withNationalPrefix:!(o.nationalPrefixIsOptionalWhenFormattingInNationalFormat()&&i&&i.nationalPrefix===!1),carrierCode:t,metadata:r}):e}function t_(e,t){for(var n=ZO(e),r;!(r=n()).done;){var i=r.value;if(i.leadingDigitsPatterns().length>0){var o=i.leadingDigitsPatterns()[i.leadingDigitsPatterns().length-1];if(t.search(o)!==0)continue}if(_r(t,i.pattern()))return i}}function _h(e,t,n,r){return t?r(e,t,n):e}function n_(e,t,n,r,i){var o=Si(r,i.metadata);if(o===n){var a=nc(e,t,"NATIONAL",i);return n==="1"?n+" "+a:a}var l=QO(r,void 0,i.metadata);if(l)return"".concat(l," ").concat(n," ").concat(nc(e,null,"INTERNATIONAL",i))}function Av(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Rv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Av(Object(n),!0).forEach(function(r){r_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Av(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function r_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o_(e,t,n){return t&&Fv(e.prototype,t),n&&Fv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var s5=function(){function e(t,n,r){if(i_(this,e),!t)throw new TypeError("`country` or `countryCallingCode` not passed");if(!n)throw new TypeError("`nationalNumber` not passed");if(!r)throw new TypeError("`metadata` not passed");var i=s_(t,r),o=i.country,a=i.countryCallingCode;this.country=o,this.countryCallingCode=a,this.nationalNumber=n,this.number="+"+this.countryCallingCode+this.nationalNumber,this.metadata=r}return o_(e,[{key:"setExt",value:function(n){this.ext=n}},{key:"getPossibleCountries",value:function(){return this.country?[this.country]:VO(this.countryCallingCode,this.nationalNumber,this.metadata)}},{key:"isPossible",value:function(){return UO(this,{v2:!0},this.metadata)}},{key:"isValid",value:function(){return YO(this,{v2:!0},this.metadata)}},{key:"isNonGeographic",value:function(){var n=new gt(this.metadata);return n.isNonGeographicCallingCode(this.countryCallingCode)}},{key:"isEqual",value:function(n){return this.number===n.number&&this.ext===n.ext}},{key:"getType",value:function(){return xm(this,{v2:!0},this.metadata)}},{key:"format",value:function(n,r){return e_(this,n,r?Rv(Rv({},r),{},{v2:!0}):{v2:!0},this.metadata)}},{key:"formatNational",value:function(n){return this.format("NATIONAL",n)}},{key:"formatInternational",value:function(n){return this.format("INTERNATIONAL",n)}},{key:"getURI",value:function(n){return this.format("RFC3966",n)}}]),e}(),a_=function(t){return/^[A-Z]{2}$/.test(t)};function s_(e,t){var n,r,i=new gt(t);return a_(e)?(n=e,i.selectNumberingPlan(n),r=i.countryCallingCode()):r=e,{country:n,countryCallingCode:r}}var l_=new RegExp("(["+Rt+"])");function l5(e,t,n,r){if(t){var i=new gt(r);i.selectNumberingPlan(t,n);var o=new RegExp(i.IDDPrefix());if(e.search(o)===0){e=e.slice(e.match(o)[0].length);var a=e.match(l_);if(!(a&&a[1]!=null&&a[1].length>0&&a[1]==="0"))return e}}}function b1(e,t){if(e&&t.numberingPlan.nationalPrefixForParsing()){var n=new RegExp("^(?:"+t.numberingPlan.nationalPrefixForParsing()+")"),r=n.exec(e);if(r){var i,o,a=r.length-1,l=a>0&&r[a];if(t.nationalPrefixTransformRule()&&l)i=e.replace(n,t.nationalPrefixTransformRule()),a>1&&(o=r[1]);else{var u=r[0];i=e.slice(u.length),l&&(o=r[1])}var d;if(l){var c=e.indexOf(r[1]),h=e.slice(0,c);h===t.numberingPlan.nationalPrefix()&&(d=t.numberingPlan.nationalPrefix())}else d=r[0];return{nationalNumber:i,nationalPrefix:d,carrierCode:o}}}return{nationalNumber:e}}function $1(e,t){var n=b1(e,t),r=n.carrierCode,i=n.nationalNumber;if(i!==e){if(!u_(e,i,t))return{nationalNumber:e};if(t.possibleLengths()&&!d_(i,t))return{nationalNumber:e}}return{nationalNumber:i,carrierCode:r}}function u_(e,t,n){return!(_r(e,n.nationalNumberPattern())&&!_r(t,n.nationalNumberPattern()))}function d_(e,t){switch(df(e,t)){case"TOO_SHORT":case"INVALID_LENGTH":return!1;default:return!0}}function u5(e,t,n,r){var i=t?Si(t,r):n;if(e.indexOf(i)===0){r=new gt(r),r.selectNumberingPlan(t,n);var o=e.slice(i.length),a=$1(o,r),l=a.nationalNumber,u=$1(e,r),d=u.nationalNumber;if(!_r(d,r.nationalNumberPattern())&&_r(l,r.nationalNumberPattern())||df(d,r)==="TOO_LONG")return{countryCallingCode:i,number:o}}return{number:e}}function d5(e,t,n,r){if(!e)return{};var i;if(e[0]!=="+"){var o=l5(e,t,n,r);if(o&&o!==e)i=!0,e="+"+o;else{if(t||n){var a=u5(e,t,n,r),l=a.countryCallingCode,u=a.number;if(l)return{countryCallingCodeSource:"FROM_NUMBER_WITHOUT_PLUS_SIGN",countryCallingCode:l,number:u}}return{number:e}}}if(e[1]==="0")return{};r=new gt(r);for(var d=2;d-1<=uO&&d<=e.length;){var c=e.slice(1,d);if(r.hasCallingCode(c))return r.selectNumberingPlan(c),{countryCallingCodeSource:i?"FROM_NUMBER_WITH_IDD":"FROM_NUMBER_WITH_PLUS_SIGN",countryCallingCode:c,number:e.slice(d)};d++}return{}}function c_(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=f_(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f_(e,t){if(e){if(typeof e=="string")return Dv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dv(e,t)}}function Dv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h_(e,t,n){n=new gt(n);for(var r=c_(e),i;!(i=r()).done;){var o=i.value;if(n.country(o),n.leadingDigits()){if(t&&t.search(n.leadingDigits())===0)return o}else if(xm({phone:t,country:o},void 0,n.metadata))return o}}var p_=!1;function c5(e,t,n){if(p_&&n.isNonGeographicCallingCode(e))return"001";var r=n.getCountryCodesForCallingCode(e);if(r)return r.length===1?r[0]:h_(r,t,n.metadata)}var f5="+",g_="[\\-\\.\\(\\)]?",Mv="(["+Rt+"]|"+g_+")",m_="^\\"+f5+Mv+"*["+Rt+"]"+Mv+"*$",y_=new RegExp(m_,"g"),w1=Rt,v_="["+w1+"]+((\\-)*["+w1+"])*",x_="a-zA-Z",b_="["+x_+"]+((\\-)*["+w1+"])*",$_="^("+v_+"\\.)*"+b_+"\\.?$",w_=new RegExp($_,"g"),jv="tel:",S1=";phone-context=",S_=";isub=";function C_(e){var t=e.indexOf(S1);if(t<0)return null;var n=t+S1.length;if(n>=e.length)return"";var r=e.indexOf(";",n);return r>=0?e.substring(n,r):e.substring(n)}function P_(e){return e===null?!0:e.length===0?!1:y_.test(e)||w_.test(e)}function O_(e,t){var n=t.extractFormattedPhoneNumber,r=C_(e);if(!P_(r))throw new pr("NOT_A_NUMBER");var i;if(r===null)i=n(e)||"";else{i="",r.charAt(0)===f5&&(i+=r);var o=e.indexOf(jv),a;o>=0?a=o+jv.length:a=0;var l=e.indexOf(S1);i+=e.substring(a,l)}var u=i.indexOf(S_);if(u>0&&(i=i.substring(0,u)),i!=="")return i}var __=250,k_=new RegExp("["+sf+Rt+"]"),N_=new RegExp("[^"+Rt+"#]+$");function E_(e,t,n){if(t=t||{},n=new gt(n),t.defaultCountry&&!n.hasCountry(t.defaultCountry))throw t.v2?new pr("INVALID_COUNTRY"):new Error("Unknown country: ".concat(t.defaultCountry));var r=T_(e,t.v2,t.extract),i=r.number,o=r.ext,a=r.error;if(!i){if(t.v2)throw a==="TOO_SHORT"?new pr("TOO_SHORT"):new pr("NOT_A_NUMBER");return{}}var l=R_(i,t.defaultCountry,t.defaultCallingCode,n),u=l.country,d=l.nationalNumber,c=l.countryCallingCode,h=l.countryCallingCodeSource,g=l.carrierCode;if(!n.hasSelectedNumberingPlan()){if(t.v2)throw new pr("INVALID_COUNTRY");return{}}if(!d||d.length<vm){if(t.v2)throw new pr("TOO_SHORT");return{}}if(d.length>lO){if(t.v2)throw new pr("TOO_LONG");return{}}if(t.v2){var b=new s5(c,d,n.metadata);return u&&(b.country=u),g&&(b.carrierCode=g),o&&(b.ext=o),b.__countryCallingCodeSource=h,b}var v=(t.extended?n.hasSelectedNumberingPlan():u)?_r(d,n.nationalNumberPattern()):!1;return t.extended?{country:u,countryCallingCode:c,carrierCode:g,valid:v,possible:v?!0:!!(t.extended===!0&&n.possibleLengths()&&r5(d,n)),phone:d,ext:o}:v?A_(u,d,o):{}}function I_(e,t,n){if(e){if(e.length>__){if(n)throw new pr("TOO_LONG");return}if(t===!1)return e;var r=e.search(k_);if(!(r<0))return e.slice(r).replace(N_,"")}}function T_(e,t,n){var r=O_(e,{extractFormattedPhoneNumber:function(a){return I_(a,n,t)}});if(!r)return{};if(!EO(r))return IO(r)?{error:"TOO_SHORT"}:{};var i=TO(r);return i.ext?i:{number:r}}function A_(e,t,n){var r={country:e,phone:t};return n&&(r.ext=n),r}function R_(e,t,n,r){var i=d5(x1(e),t,n,r.metadata),o=i.countryCallingCodeSource,a=i.countryCallingCode,l=i.number,u;if(a)r.selectNumberingPlan(a);else if(l&&(t||n))r.selectNumberingPlan(t,n),t&&(u=t),a=n||Si(t,r.metadata);else return{};if(!l)return{countryCallingCodeSource:o,countryCallingCode:a};var d=$1(x1(l),r),c=d.nationalNumber,h=d.carrierCode,g=c5(a,c,r);return g&&(u=g,g==="001"||r.country(u)),{country:u,countryCallingCode:a,countryCallingCodeSource:o,nationalNumber:c,carrierCode:h}}function Lv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function zv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lv(Object(n),!0).forEach(function(r){F_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function F_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D_(e,t,n){return E_(e,zv(zv({},t),{},{v2:!0}),n)}function C1(e){return C1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C1(e)}function Uv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function M_(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Uv(Object(n),!0).forEach(function(r){j_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function j_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L_(e,t){return H_(e)||B_(e,t)||U_(e,t)||z_()}function z_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U_(e,t){if(e){if(typeof e=="string")return Bv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bv(e,t)}}function Bv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function B_(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function H_(e){if(Array.isArray(e))return e}function W_(e){var t=Array.prototype.slice.call(e),n=L_(t,4),r=n[0],i=n[1],o=n[2],a=n[3],l,u,d;if(typeof r=="string")l=r;else throw new TypeError("A text for parsing must be a string.");if(!i||typeof i=="string")a?(u=o,d=a):(u=void 0,d=o),i&&(u=M_({defaultCountry:i},u));else if(Y_(i))o?(u=i,d=o):d=i;else throw new Error("Invalid second argument: ".concat(i));return{text:l,options:u,metadata:d}}var Y_=function(t){return C1(t)==="object"};function Hv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Wv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hv(Object(n),!0).forEach(function(r){V_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function V_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q_(e,t,n){t&&t.defaultCountry&&!Z$(t.defaultCountry,n)&&(t=Wv(Wv({},t),{},{defaultCountry:void 0}));try{return D_(e,t,n)}catch(r){if(!(r instanceof pr))throw r}}function G_(){var e=W_(arguments),t=e.text,n=e.options,r=e.metadata;return q_(t,n,r)}function Q_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Yv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K_(e,t,n){return t&&Yv(e.prototype,t),n&&Yv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var Z_=function(){function e(t){var n=t.onCountryChange,r=t.onCallingCodeChange;Q_(this,e),this.onCountryChange=n,this.onCallingCodeChange=r}return K_(e,[{key:"reset",value:function(n){var r=n.country,i=n.callingCode;this.international=!1,this.IDDPrefix=void 0,this.missingPlus=void 0,this.callingCode=void 0,this.digits="",this.resetNationalSignificantNumber(),this.initCountryAndCallingCode(r,i)}},{key:"resetNationalSignificantNumber",value:function(){this.nationalSignificantNumber=this.getNationalDigits(),this.nationalSignificantNumberMatchesInput=!0,this.nationalPrefix=void 0,this.carrierCode=void 0,this.complexPrefixBeforeNationalSignificantNumber=void 0}},{key:"update",value:function(n){for(var r=0,i=Object.keys(n);r<i.length;r++){var o=i[r];this[o]=n[o]}}},{key:"initCountryAndCallingCode",value:function(n,r){this.setCountry(n),this.setCallingCode(r)}},{key:"setCountry",value:function(n){this.country=n,this.onCountryChange(n)}},{key:"setCallingCode",value:function(n){this.callingCode=n,this.onCallingCodeChange(n,this.country)}},{key:"startInternationalNumber",value:function(n,r){this.international=!0,this.initCountryAndCallingCode(n,r)}},{key:"appendDigits",value:function(n){this.digits+=n}},{key:"appendNationalSignificantNumberDigits",value:function(n){this.nationalSignificantNumber+=n}},{key:"getNationalDigits",value:function(){return this.international?this.digits.slice((this.IDDPrefix?this.IDDPrefix.length:0)+(this.callingCode?this.callingCode.length:0)):this.digits}},{key:"getDigitsWithoutInternationalPrefix",value:function(){return this.international&&this.IDDPrefix?this.digits.slice(this.IDDPrefix.length):this.digits}}]),e}();function J_(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=X_(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X_(e,t){if(e){if(typeof e=="string")return Vv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vv(e,t)}}function Vv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var On="x",kh=new RegExp(On);function ad(e,t){if(t<1)return"";for(var n="";t>1;)t&1&&(n+=e),t>>=1,e+=e;return n+e}function qv(e,t){return e[t]===")"&&t++,ek(e.slice(0,t))}function ek(e){for(var t=[],n=0;n<e.length;)e[n]==="("?t.push(n):e[n]===")"&&t.pop(),n++;var r=0,i="";t.push(e.length);for(var o=0,a=t;o<a.length;o++){var l=a[o];i+=e.slice(r,l),r=l+1}return i}function tk(e,t,n){for(var r=J_(n.split("")),i;!(i=r()).done;){var o=i.value;if(e.slice(t+1).search(kh)<0)return;t=e.search(kh),e=e.replace(kh,o)}return[e,t]}function nk(e,t,n){var r=n.metadata,i=n.shouldTryNationalPrefixFormattingRule,o=n.getSeparatorAfterNationalPrefix,a=new RegExp("^(?:".concat(t.pattern(),")$"));if(a.test(e.nationalSignificantNumber))return ik(e,t,{metadata:r,shouldTryNationalPrefixFormattingRule:i,getSeparatorAfterNationalPrefix:o})}function rk(e,t){return df(e,t)==="IS_POSSIBLE"}function ik(e,t,n){var r=n.metadata,i=n.shouldTryNationalPrefixFormattingRule,o=n.getSeparatorAfterNationalPrefix;if(e.nationalSignificantNumber,e.international,e.nationalPrefix,e.carrierCode,i(t)){var a=Gv(e,t,{useNationalPrefixFormattingRule:!0,getSeparatorAfterNationalPrefix:o,metadata:r});if(a)return a}return Gv(e,t,{useNationalPrefixFormattingRule:!1,getSeparatorAfterNationalPrefix:o,metadata:r})}function Gv(e,t,n){var r=n.metadata,i=n.useNationalPrefixFormattingRule,o=n.getSeparatorAfterNationalPrefix,a=a5(e.nationalSignificantNumber,t,{carrierCode:e.carrierCode,useInternationalFormat:e.international,withNationalPrefix:i,metadata:r});if(i||(e.nationalPrefix?a=e.nationalPrefix+o(t)+a:e.complexPrefixBeforeNationalSignificantNumber&&(a=e.complexPrefixBeforeNationalSignificantNumber+" "+a)),ok(a,e))return a}function ok(e,t){return tc(e)===t.getNationalDigits()}function ak(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function sk(e,t,n){return t&&Qv(e.prototype,t),n&&Qv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var lk=function(){function e(){ak(this,e)}return sk(e,[{key:"parse",value:function(n){if(this.context=[{or:!0,instructions:[]}],this.parsePattern(n),this.context.length!==1)throw new Error("Non-finalized contexts left when pattern parse ended");var r=this.context[0],i=r.branches,o=r.instructions;if(i)return{op:"|",args:i.concat([Nh(o)])};if(o.length===0)throw new Error("Pattern is required");return o.length===1?o[0]:o}},{key:"startContext",value:function(n){this.context.push(n)}},{key:"endContext",value:function(){this.context.pop()}},{key:"getContext",value:function(){return this.context[this.context.length-1]}},{key:"parsePattern",value:function(n){if(!n)throw new Error("Pattern is required");var r=n.match(ck);if(!r){if(dk.test(n))throw new Error("Illegal characters found in a pattern: ".concat(n));this.getContext().instructions=this.getContext().instructions.concat(n.split(""));return}var i=r[1],o=n.slice(0,r.index),a=n.slice(r.index+i.length);switch(i){case"(?:":o&&this.parsePattern(o),this.startContext({or:!0,instructions:[],branches:[]});break;case")":if(!this.getContext().or)throw new Error('")" operator must be preceded by "(?:" operator');if(o&&this.parsePattern(o),this.getContext().instructions.length===0)throw new Error('No instructions found after "|" operator in an "or" group');var l=this.getContext(),u=l.branches;u.push(Nh(this.getContext().instructions)),this.endContext(),this.getContext().instructions.push({op:"|",args:u});break;case"|":if(!this.getContext().or)throw new Error('"|" operator can only be used inside "or" groups');if(o&&this.parsePattern(o),!this.getContext().branches)if(this.context.length===1)this.getContext().branches=[];else throw new Error('"branches" not found in an "or" group context');this.getContext().branches.push(Nh(this.getContext().instructions)),this.getContext().instructions=[];break;case"[":o&&this.parsePattern(o),this.startContext({oneOfSet:!0});break;case"]":if(!this.getContext().oneOfSet)throw new Error('"]" operator must be preceded by "[" operator');this.endContext(),this.getContext().instructions.push({op:"[]",args:uk(o)});break;default:throw new Error("Unknown operator: ".concat(i))}a&&this.parsePattern(a)}}]),e}();function uk(e){for(var t=[],n=0;n<e.length;){if(e[n]==="-"){if(n===0||n===e.length-1)throw new Error("Couldn't parse a one-of set pattern: ".concat(e));for(var r=e[n-1].charCodeAt(0)+1,i=e[n+1].charCodeAt(0)-1,o=r;o<=i;)t.push(String.fromCharCode(o)),o++}else t.push(e[n]);n++}return t}var dk=/[\(\)\[\]\?\:\|]/,ck=new RegExp("(\\||\\(\\?\\:|\\)|\\[|\\])");function Nh(e){return e.length===1?e[0]:e}function Kv(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=fk(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fk(e,t){if(e){if(typeof e=="string")return Zv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zv(e,t)}}function Zv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Jv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pk(e,t,n){return t&&Jv(e.prototype,t),n&&Jv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var gk=function(){function e(t){hk(this,e),this.matchTree=new lk().parse(t)}return pk(e,[{key:"match",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.allowOverflow;if(!n)throw new Error("String is required");var o=P1(n.split(""),this.matchTree,!0);if(o&&o.match&&delete o.matchedChars,!(o&&o.overflow&&!i))return o}}]),e}();function P1(e,t,n){if(typeof t=="string"){var r=e.join("");return t.indexOf(r)===0?e.length===t.length?{match:!0,matchedChars:e}:{partialMatch:!0}:r.indexOf(t)===0?n&&e.length>t.length?{overflow:!0}:{match:!0,matchedChars:e.slice(0,t.length)}:void 0}if(Array.isArray(t)){for(var i=e.slice(),o=0;o<t.length;){var a=t[o],l=P1(i,a,n&&o===t.length-1);if(l){if(l.overflow)return l;if(l.match){if(i=i.slice(l.matchedChars.length),i.length===0)return o===t.length-1?{match:!0,matchedChars:e}:{partialMatch:!0}}else{if(l.partialMatch)return{partialMatch:!0};throw new Error(`Unsupported match result:
`.concat(JSON.stringify(l,null,2)))}}else return;o++}return n?{overflow:!0}:{match:!0,matchedChars:e.slice(0,e.length-i.length)}}switch(t.op){case"|":for(var u,d=Kv(t.args),c;!(c=d()).done;){var h=c.value,g=P1(e,h,n);if(g){if(g.overflow)return g;if(g.match)return{match:!0,matchedChars:g.matchedChars};if(g.partialMatch)u=!0;else throw new Error(`Unsupported match result:
`.concat(JSON.stringify(g,null,2)))}}return u?{partialMatch:!0}:void 0;case"[]":for(var b=Kv(t.args),v;!(v=b()).done;){var w=v.value;if(e[0]===w)return e.length===1?{match:!0,matchedChars:e}:n?{overflow:!0}:{match:!0,matchedChars:[w]}}return;default:throw new Error("Unsupported instruction tree: ".concat(t))}}function Xv(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=mk(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mk(e,t){if(e){if(typeof e=="string")return e3(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e3(e,t)}}function e3(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function vk(e,t,n){return t&&t3(e.prototype,t),n&&t3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var O1="9",xk=15,bk=ad(O1,xk),$k=/[- ]/,wk=function(){return/\[([^\[\]])*\]/g},Sk=function(){return/\d(?=[^,}][^,}])/g},Ck=new RegExp("["+Fn+"]*\\$1["+Fn+"]*(\\$\\d["+Fn+"]*)*$"),n3=3,Pk=function(){function e(t){t.state;var n=t.metadata;yk(this,e),this.metadata=n,this.resetFormat()}return vk(e,[{key:"resetFormat",value:function(){this.chosenFormat=void 0,this.template=void 0,this.nationalNumberTemplate=void 0,this.populatedNationalNumberTemplate=void 0,this.populatedNationalNumberTemplatePosition=-1}},{key:"reset",value:function(n,r){this.resetFormat(),n?(this.isNANP=n.callingCode()==="1",this.matchingFormats=n.formats(),r.nationalSignificantNumber&&this.narrowDownMatchingFormats(r)):(this.isNANP=void 0,this.matchingFormats=[])}},{key:"format",value:function(n,r){var i=this;if(rk(r.nationalSignificantNumber,this.metadata))for(var o=Xv(this.matchingFormats),a;!(a=o()).done;){var l=a.value,u=nk(r,l,{metadata:this.metadata,shouldTryNationalPrefixFormattingRule:function(c){return i.shouldTryNationalPrefixFormattingRule(c,{international:r.international,nationalPrefix:r.nationalPrefix})},getSeparatorAfterNationalPrefix:function(c){return i.getSeparatorAfterNationalPrefix(c)}});if(u)return this.resetFormat(),this.chosenFormat=l,this.setNationalNumberTemplate(u.replace(/\d/g,On),r),this.populatedNationalNumberTemplate=u,this.populatedNationalNumberTemplatePosition=this.template.lastIndexOf(On),u}return this.formatNationalNumberWithNextDigits(n,r)}},{key:"formatNationalNumberWithNextDigits",value:function(n,r){var i=this.chosenFormat,o=this.chooseFormat(r);if(o)return o===i?this.formatNextNationalNumberDigits(n):this.formatNextNationalNumberDigits(r.getNationalDigits())}},{key:"narrowDownMatchingFormats",value:function(n){var r=this,i=n.nationalSignificantNumber,o=n.nationalPrefix,a=n.international,l=i,u=l.length-n3;u<0&&(u=0),this.matchingFormats=this.matchingFormats.filter(function(d){return r.formatSuits(d,a,o)&&r.formatMatches(d,l,u)}),this.chosenFormat&&this.matchingFormats.indexOf(this.chosenFormat)===-1&&this.resetFormat()}},{key:"formatSuits",value:function(n,r,i){return!(i&&!n.usesNationalPrefix()&&!n.nationalPrefixIsOptionalWhenFormattingInNationalFormat()||!r&&!i&&n.nationalPrefixIsMandatoryWhenFormattingInNationalFormat())}},{key:"formatMatches",value:function(n,r,i){var o=n.leadingDigitsPatterns().length;if(o===0)return!0;i=Math.min(i,o-1);var a=n.leadingDigitsPatterns()[i];if(r.length<n3)try{return new gk(a).match(r,{allowOverflow:!0})!==void 0}catch(l){return console.error(l),!0}return new RegExp("^(".concat(a,")")).test(r)}},{key:"getFormatFormat",value:function(n,r){return r?n.internationalFormat():n.format()}},{key:"chooseFormat",value:function(n){for(var r=this,i=function(){var d=a.value;return r.chosenFormat===d?"break":Ck.test(r.getFormatFormat(d,n.international))?r.createTemplateForFormat(d,n)?(r.chosenFormat=d,"break"):(r.matchingFormats=r.matchingFormats.filter(function(c){return c!==d}),"continue"):"continue"},o=Xv(this.matchingFormats.slice()),a;!(a=o()).done;){var l=i();if(l==="break")break}return this.chosenFormat||this.resetFormat(),this.chosenFormat}},{key:"createTemplateForFormat",value:function(n,r){if(!(n.pattern().indexOf("|")>=0)){var i=this.getTemplateForFormat(n,r);if(i)return this.setNationalNumberTemplate(i,r),!0}}},{key:"getSeparatorAfterNationalPrefix",value:function(n){return this.isNANP||n&&n.nationalPrefixFormattingRule()&&$k.test(n.nationalPrefixFormattingRule())?" ":""}},{key:"getInternationalPrefixBeforeCountryCallingCode",value:function(n,r){var i=n.IDDPrefix,o=n.missingPlus;return i?r&&r.spacing===!1?i:i+" ":o?"":"+"}},{key:"getTemplate",value:function(n){if(this.template){for(var r=-1,i=0,o=n.international?this.getInternationalPrefixBeforeCountryCallingCode(n,{spacing:!1}):"";i<o.length+n.getDigitsWithoutInternationalPrefix().length;)r=this.template.indexOf(On,r+1),i++;return qv(this.template,r+1)}}},{key:"setNationalNumberTemplate",value:function(n,r){this.nationalNumberTemplate=n,this.populatedNationalNumberTemplate=n,this.populatedNationalNumberTemplatePosition=-1,r.international?this.template=this.getInternationalPrefixBeforeCountryCallingCode(r).replace(/[\d\+]/g,On)+ad(On,r.callingCode.length)+" "+n:this.template=n}},{key:"getTemplateForFormat",value:function(n,r){var i=r.nationalSignificantNumber,o=r.international,a=r.nationalPrefix,l=r.complexPrefixBeforeNationalSignificantNumber,u=n.pattern();u=u.replace(wk(),"\\d").replace(Sk(),"\\d");var d=bk.match(u)[0];if(!(i.length>d.length)){var c=new RegExp("^"+u+"$"),h=i.replace(/\d/g,O1);c.test(h)&&(d=h);var g=this.getFormatFormat(n,o),b;if(this.shouldTryNationalPrefixFormattingRule(n,{international:o,nationalPrefix:a})){var v=g.replace(o5,n.nationalPrefixFormattingRule());if(tc(n.nationalPrefixFormattingRule())===(a||"")+tc("$1")&&(g=v,b=!0,a))for(var w=a.length;w>0;)g=g.replace(/\d/,On),w--}var $=d.replace(new RegExp(u),g).replace(new RegExp(O1,"g"),On);return b||(l?$=ad(On,l.length)+" "+$:a&&($=ad(On,a.length)+this.getSeparatorAfterNationalPrefix(n)+$)),o&&($=i5($)),$}}},{key:"formatNextNationalNumberDigits",value:function(n){var r=tk(this.populatedNationalNumberTemplate,this.populatedNationalNumberTemplatePosition,n);if(!r){this.resetFormat();return}return this.populatedNationalNumberTemplate=r[0],this.populatedNationalNumberTemplatePosition=r[1],qv(this.populatedNationalNumberTemplate,this.populatedNationalNumberTemplatePosition+1)}},{key:"shouldTryNationalPrefixFormattingRule",value:function(n,r){var i=r.international,o=r.nationalPrefix;if(n.nationalPrefixFormattingRule()){var a=n.usesNationalPrefix();if(a&&o||!a&&!i)return!0}}}]),e}();function h5(e,t){return Nk(e)||kk(e,t)||_k(e,t)||Ok()}function Ok(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _k(e,t){if(e){if(typeof e=="string")return r3(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r3(e,t)}}function r3(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function kk(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function Nk(e){if(Array.isArray(e))return e}function Ek(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ik(e,t,n){return t&&i3(e.prototype,t),n&&i3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var Tk="["+Fn+Rt+"]+",Ak=new RegExp("^"+Tk+"$","i"),Rk="(?:["+sf+"]["+Fn+Rt+"]*|["+Fn+Rt+"]+)",Fk=new RegExp("[^"+Fn+Rt+"]+.*$"),Dk=/[^\d\[\]]/,Mk=function(){function e(t){var n=t.defaultCountry,r=t.defaultCallingCode,i=t.metadata,o=t.onNationalSignificantNumberChange;Ek(this,e),this.defaultCountry=n,this.defaultCallingCode=r,this.metadata=i,this.onNationalSignificantNumberChange=o}return Ik(e,[{key:"input",value:function(n,r){var i=zk(n),o=h5(i,2),a=o[0],l=o[1],u=tc(a),d;return l&&(r.digits||(r.startInternationalNumber(),u||(d=!0))),u&&this.inputDigits(u,r),{digits:u,justLeadingPlus:d}}},{key:"inputDigits",value:function(n,r){var i=r.digits,o=i.length<3&&i.length+n.length>=3;if(r.appendDigits(n),o&&this.extractIddPrefix(r),this.isWaitingForCountryCallingCode(r)){if(!this.extractCountryCallingCode(r))return}else r.appendNationalSignificantNumberDigits(n);r.international||this.hasExtractedNationalSignificantNumber||this.extractNationalSignificantNumber(r.getNationalDigits(),function(a){return r.update(a)})}},{key:"isWaitingForCountryCallingCode",value:function(n){var r=n.international,i=n.callingCode;return r&&!i}},{key:"extractCountryCallingCode",value:function(n){var r=d5("+"+n.getDigitsWithoutInternationalPrefix(),this.defaultCountry,this.defaultCallingCode,this.metadata.metadata),i=r.countryCallingCode,o=r.number;if(i)return n.setCallingCode(i),n.update({nationalSignificantNumber:o}),!0}},{key:"reset",value:function(n){if(n){this.hasSelectedNumberingPlan=!0;var r=n._nationalPrefixForParsing();this.couldPossiblyExtractAnotherNationalSignificantNumber=r&&Dk.test(r)}else this.hasSelectedNumberingPlan=void 0,this.couldPossiblyExtractAnotherNationalSignificantNumber=void 0}},{key:"extractNationalSignificantNumber",value:function(n,r){if(this.hasSelectedNumberingPlan){var i=b1(n,this.metadata),o=i.nationalPrefix,a=i.nationalNumber,l=i.carrierCode;if(a!==n)return this.onExtractedNationalNumber(o,l,a,n,r),!0}}},{key:"extractAnotherNationalSignificantNumber",value:function(n,r,i){if(!this.hasExtractedNationalSignificantNumber)return this.extractNationalSignificantNumber(n,i);if(this.couldPossiblyExtractAnotherNationalSignificantNumber){var o=b1(n,this.metadata),a=o.nationalPrefix,l=o.nationalNumber,u=o.carrierCode;if(l!==r)return this.onExtractedNationalNumber(a,u,l,n,i),!0}}},{key:"onExtractedNationalNumber",value:function(n,r,i,o,a){var l,u,d=o.lastIndexOf(i);if(d>=0&&d===o.length-i.length){u=!0;var c=o.slice(0,d);c!==n&&(l=c)}a({nationalPrefix:n,carrierCode:r,nationalSignificantNumber:i,nationalSignificantNumberMatchesInput:u,complexPrefixBeforeNationalSignificantNumber:l}),this.hasExtractedNationalSignificantNumber=!0,this.onNationalSignificantNumberChange()}},{key:"reExtractNationalSignificantNumber",value:function(n){if(this.extractAnotherNationalSignificantNumber(n.getNationalDigits(),n.nationalSignificantNumber,function(r){return n.update(r)}))return!0;if(this.extractIddPrefix(n))return this.extractCallingCodeAndNationalSignificantNumber(n),!0;if(this.fixMissingPlus(n))return this.extractCallingCodeAndNationalSignificantNumber(n),!0}},{key:"extractIddPrefix",value:function(n){var r=n.international,i=n.IDDPrefix,o=n.digits;if(n.nationalSignificantNumber,!(r||i)){var a=l5(o,this.defaultCountry,this.defaultCallingCode,this.metadata.metadata);if(a!==void 0&&a!==o)return n.update({IDDPrefix:o.slice(0,o.length-a.length)}),this.startInternationalNumber(n,{country:void 0,callingCode:void 0}),!0}}},{key:"fixMissingPlus",value:function(n){if(!n.international){var r=u5(n.digits,this.defaultCountry,this.defaultCallingCode,this.metadata.metadata),i=r.countryCallingCode;if(r.number,i)return n.update({missingPlus:!0}),this.startInternationalNumber(n,{country:n.country,callingCode:i}),!0}}},{key:"startInternationalNumber",value:function(n,r){var i=r.country,o=r.callingCode;n.startInternationalNumber(i,o),n.nationalSignificantNumber&&(n.resetNationalSignificantNumber(),this.onNationalSignificantNumberChange(),this.hasExtractedNationalSignificantNumber=void 0)}},{key:"extractCallingCodeAndNationalSignificantNumber",value:function(n){this.extractCountryCallingCode(n)&&this.extractNationalSignificantNumber(n.getNationalDigits(),function(r){return n.update(r)})}}]),e}();function jk(e){var t=e.search(Rk);if(!(t<0)){e=e.slice(t);var n;return e[0]==="+"&&(n=!0,e=e.slice(1)),e=e.replace(Fk,""),n&&(e="+"+e),e}}function Lk(e){var t=jk(e)||"";return t[0]==="+"?[t.slice(1),!0]:[t]}function zk(e){var t=Lk(e),n=h5(t,2),r=n[0],i=n[1];return Ak.test(r)||(r=""),[r,i]}function _1(e){return _1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_1(e)}function Uk(e,t){return Yk(e)||Wk(e,t)||Hk(e,t)||Bk()}function Bk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hk(e,t){if(e){if(typeof e=="string")return o3(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o3(e,t)}}function o3(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Wk(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function Yk(e){if(Array.isArray(e))return e}function Vk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function qk(e,t,n){return t&&a3(e.prototype,t),n&&a3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var Wa=function(){function e(t,n){Vk(this,e),this.metadata=new gt(n);var r=this.getCountryAndCallingCode(t),i=Uk(r,2),o=i[0],a=i[1];this.defaultCountry=o,this.defaultCallingCode=a,this.reset()}return qk(e,[{key:"getCountryAndCallingCode",value:function(n){var r,i;return n&&(_1(n)==="object"?(r=n.defaultCountry,i=n.defaultCallingCode):r=n),r&&!this.metadata.hasCountry(r)&&(r=void 0),[r,i]}},{key:"input",value:function(n){var r=this.parser.input(n,this.state),i=r.digits,o=r.justLeadingPlus;if(o)this.formattedOutput="+";else if(i){this.determineTheCountryIfNeeded(),this.state.nationalSignificantNumber&&this.formatter.narrowDownMatchingFormats(this.state);var a;if(this.metadata.hasSelectedNumberingPlan()&&(a=this.formatter.format(i,this.state)),a===void 0&&this.parser.reExtractNationalSignificantNumber(this.state)){this.determineTheCountryIfNeeded();var l=this.state.getNationalDigits();l&&(a=this.formatter.format(l,this.state))}this.formattedOutput=a?this.getFullNumber(a):this.getNonFormattedNumber()}return this.formattedOutput}},{key:"reset",value:function(){var n=this;return this.state=new Z_({onCountryChange:function(i){n.country=i},onCallingCodeChange:function(i,o){n.metadata.selectNumberingPlan(o,i),n.formatter.reset(n.metadata.numberingPlan,n.state),n.parser.reset(n.metadata.numberingPlan)}}),this.formatter=new Pk({state:this.state,metadata:this.metadata}),this.parser=new Mk({defaultCountry:this.defaultCountry,defaultCallingCode:this.defaultCallingCode,metadata:this.metadata,state:this.state,onNationalSignificantNumberChange:function(){n.determineTheCountryIfNeeded(),n.formatter.reset(n.metadata.numberingPlan,n.state)}}),this.state.reset({country:this.defaultCountry,callingCode:this.defaultCallingCode}),this.formattedOutput="",this}},{key:"isInternational",value:function(){return this.state.international}},{key:"getCallingCode",value:function(){if(this.isInternational())return this.state.callingCode}},{key:"getCountryCallingCode",value:function(){return this.getCallingCode()}},{key:"getCountry",value:function(){var n=this.state.digits;if(n)return this._getCountry()}},{key:"_getCountry",value:function(){var n=this.state.country;return n}},{key:"determineTheCountryIfNeeded",value:function(){(!this.state.country||this.isCountryCallingCodeAmbiguous())&&this.determineTheCountry()}},{key:"getFullNumber",value:function(n){var r=this;if(this.isInternational()){var i=function(l){return r.formatter.getInternationalPrefixBeforeCountryCallingCode(r.state,{spacing:!!l})+l},o=this.state.callingCode;return i(o?n?"".concat(o," ").concat(n):o:"".concat(this.state.getDigitsWithoutInternationalPrefix()))}return n}},{key:"getNonFormattedNationalNumberWithPrefix",value:function(){var n=this.state,r=n.nationalSignificantNumber,i=n.complexPrefixBeforeNationalSignificantNumber,o=n.nationalPrefix,a=r,l=i||o;return l&&(a=l+a),a}},{key:"getNonFormattedNumber",value:function(){var n=this.state.nationalSignificantNumberMatchesInput;return this.getFullNumber(n?this.getNonFormattedNationalNumberWithPrefix():this.state.getNationalDigits())}},{key:"getNonFormattedTemplate",value:function(){var n=this.getNonFormattedNumber();if(n)return n.replace(/[\+\d]/g,On)}},{key:"isCountryCallingCodeAmbiguous",value:function(){var n=this.state.callingCode,r=this.metadata.getCountryCodesForCallingCode(n);return r&&r.length>1}},{key:"determineTheCountry",value:function(){this.state.setCountry(c5(this.isInternational()?this.state.callingCode:this.defaultCallingCode,this.state.nationalSignificantNumber,this.metadata))}},{key:"getNumberValue",value:function(){var n=this.state,r=n.digits,i=n.callingCode,o=n.country,a=n.nationalSignificantNumber;if(r){if(this.isInternational())return i?"+"+i+a:"+"+r;if(o||i){var l=o?this.metadata.countryCallingCode():i;return"+"+l+a}}}},{key:"getNumber",value:function(){var n=this.state,r=n.nationalSignificantNumber,i=n.carrierCode,o=n.callingCode,a=this._getCountry();if(r&&!(!a&&!o)){var l=new s5(a||o,r,this.metadata.metadata);return i&&(l.carrierCode=i),l}}},{key:"isPossible",value:function(){var n=this.getNumber();return n?n.isPossible():!1}},{key:"isValid",value:function(){var n=this.getNumber();return n?n.isValid():!1}},{key:"getNationalNumber",value:function(){return this.state.nationalSignificantNumber}},{key:"getChars",value:function(){return(this.state.international?"+":"")+this.state.digits}},{key:"getTemplate",value:function(){return this.formatter.getTemplate(this.state)||this.getNonFormattedTemplate()||""}}]),e}();function s3(e){return new gt(e).getCountries()}function Gk(e,t,n){return n||(n=t,t=void 0),new Wa(t,n).input(e)}function p5(e){var t=e.country,n=e.international,r=e.withCountryCallingCode,i=e.metadata;return t&&n&&!r?"+".concat(Si(t,i)):""}function k1(e,t){return t&&(e=e.slice(t.length),e[0]===" "&&(e=e.slice(1))),e}var Qk=["country","international","withCountryCallingCode","metadata"];function N1(){return N1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N1.apply(this,arguments)}function Kk(e,t){if(e==null)return{};var n=Zk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Zk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jk(e){function t(n,r){var i=n.country,o=n.international,a=n.withCountryCallingCode,l=n.metadata,u=Kk(n,Qk),d=C.useCallback(function(c){var h=new Wa(i,l),g=p5({country:i,international:o,withCountryCallingCode:a,metadata:l}),b=h.input(g+c),v=h.getTemplate();return g&&(b=k1(b,g),v&&(v=k1(v,g))),{text:b,template:v}},[i,l]);return ne.createElement(eO,N1({},u,{ref:r,parse:t5,format:d}))}return t=ne.forwardRef(t),t.propTypes={value:K.string.isRequired,onChange:K.func.isRequired,country:K.string,international:K.bool,withCountryCallingCode:K.bool,metadata:K.object.isRequired},t.defaultProps={metadata:e},t}const Xk=Jk();var eN=["value","onChange","country","international","withCountryCallingCode","metadata","inputComponent"];function E1(){return E1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E1.apply(this,arguments)}function tN(e,t){if(e==null)return{};var n=nN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function nN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function rN(e){function t(n,r){var i=n.value,o=n.onChange,a=n.country,l=n.international,u=n.withCountryCallingCode,d=n.metadata,c=n.inputComponent,h=tN(n,eN),g=p5({country:a,international:l,withCountryCallingCode:u,metadata:d}),b=C.useCallback(function(v){var w=x1(v.target.value);if(w===i){var $=l3(g,w,a,d);$.indexOf(v.target.value)===0&&(w=w.slice(0,-1))}o(w)},[g,i,o,a,d]);return ne.createElement(c,E1({},h,{ref:r,value:l3(g,i,a,d),onChange:b}))}return t=ne.forwardRef(t),t.propTypes={value:K.string.isRequired,onChange:K.func.isRequired,country:K.string,international:K.bool,withCountryCallingCode:K.bool,metadata:K.object.isRequired,inputComponent:K.elementType.isRequired},t.defaultProps={metadata:e,inputComponent:"input"},t}const iN=rN();function l3(e,t,n,r){return k1(Gk(e+t,n,r),e)}function oN(e){return u3(e[0])+u3(e[1])}function u3(e){return String.fromCodePoint(127462-65+e.toUpperCase().charCodeAt(0))}var aN=["value","onChange","options"],sN=["value","options","className","iconComponent","getIconAspectRatio","arrowComponent","unicodeFlags"];function lN(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=uN(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uN(e,t){if(e){if(typeof e=="string")return d3(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d3(e,t)}}function d3(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function rc(){return rc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rc.apply(this,arguments)}function g5(e,t){if(e==null)return{};var n=dN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function dN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function m5(e){var t=e.value,n=e.onChange,r=e.options,i=g5(e,aN),o=C.useCallback(function(a){var l=a.target.value;n(l==="ZZ"?void 0:l)},[n]);return C.useMemo(function(){return y5(r,t)},[r,t]),ne.createElement("select",rc({},i,{value:t||"ZZ",onChange:o}),r.map(function(a){var l=a.value,u=a.label,d=a.divider;return ne.createElement("option",{key:d?"|":l||"ZZ",value:d?"|":l||"ZZ",disabled:!!d,style:d?cN:void 0},u)}))}m5.propTypes={value:K.string,onChange:K.func.isRequired,options:K.arrayOf(K.shape({value:K.string,label:K.string,divider:K.bool})).isRequired};var cN={fontSize:"1px",backgroundColor:"currentColor",color:"inherit"};function bm(e){var t=e.value,n=e.options,r=e.className,i=e.iconComponent;e.getIconAspectRatio;var o=e.arrowComponent,a=e.unicodeFlags,l=g5(e,sN),u=C.useMemo(function(){return y5(n,t)},[n,t]);return ne.createElement("div",{className:"PhoneInputCountry"},ne.createElement(m5,rc({},l,{value:t,options:n,className:Xd("PhoneInputCountrySelect",r)})),a&&t&&ne.createElement("div",{className:"PhoneInputCountryIconUnicode"},oN(t)),!(a&&t)&&ne.createElement(i,{"aria-hidden":!0,country:t,label:u&&u.label,aspectRatio:a?1:void 0}),ne.createElement(o,null))}bm.propTypes={iconComponent:K.elementType,arrowComponent:K.elementType.isRequired,unicodeFlags:K.bool};bm.defaultProps={arrowComponent:function(){return ne.createElement("div",{className:"PhoneInputCountrySelectArrow"})}};function y5(e,t){for(var n=lN(e),r;!(r=n()).done;){var i=r.value;if(!i.divider&&i.value===t)return i}}var fN=["country","countryName","flags","flagUrl"];function I1(){return I1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I1.apply(this,arguments)}function hN(e,t){if(e==null)return{};var n=pN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function pN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function $m(e){var t=e.country,n=e.countryName,r=e.flags,i=e.flagUrl,o=hN(e,fN);return r&&r[t]?r[t]({title:n}):ne.createElement("img",I1({},o,{alt:n,role:n?void 0:"presentation",src:i.replace("{XX}",t).replace("{xx}",t.toLowerCase())}))}$m.propTypes={country:K.string.isRequired,countryName:K.string.isRequired,flags:K.objectOf(K.elementType),flagUrl:K.string.isRequired};var gN=["aspectRatio"],mN=["title"],yN=["title"];function ic(){return ic=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ic.apply(this,arguments)}function wm(e,t){if(e==null)return{};var n=vN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function vN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function cf(e){var t=e.aspectRatio,n=wm(e,gN);return t===1?ne.createElement(x5,n):ne.createElement(v5,n)}cf.propTypes={title:K.string.isRequired,aspectRatio:K.number};function v5(e){var t=e.title,n=wm(e,mN);return ne.createElement("svg",ic({},n,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 75 50"}),ne.createElement("title",null,t),ne.createElement("g",{className:"PhoneInputInternationalIconGlobe",stroke:"currentColor",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"},ne.createElement("path",{strokeLinecap:"round",d:"M47.2,36.1C48.1,36,49,36,50,36c7.4,0,14,1.7,18.5,4.3"}),ne.createElement("path",{d:"M68.6,9.6C64.2,12.3,57.5,14,50,14c-7.4,0-14-1.7-18.5-4.3"}),ne.createElement("line",{x1:"26",y1:"25",x2:"74",y2:"25"}),ne.createElement("line",{x1:"50",y1:"1",x2:"50",y2:"49"}),ne.createElement("path",{strokeLinecap:"round",d:"M46.3,48.7c1.2,0.2,2.5,0.3,3.7,0.3c13.3,0,24-10.7,24-24S63.3,1,50,1S26,11.7,26,25c0,2,0.3,3.9,0.7,5.8"}),ne.createElement("path",{strokeLinecap:"round",d:"M46.8,48.2c1,0.6,2.1,0.8,3.2,0.8c6.6,0,12-10.7,12-24S56.6,1,50,1S38,11.7,38,25c0,1.4,0.1,2.7,0.2,4c0,0.1,0,0.2,0,0.2"})),ne.createElement("path",{className:"PhoneInputInternationalIconPhone",stroke:"none",fill:"currentColor",d:"M12.4,17.9c2.9-2.9,5.4-4.8,0.3-11.2S4.1,5.2,1.3,8.1C-2,11.4,1.1,23.5,13.1,35.6s24.3,15.2,27.5,11.9c2.8-2.8,7.8-6.3,1.4-11.5s-8.3-2.6-11.2,0.3c-2,2-7.2-2.2-11.7-6.7S10.4,19.9,12.4,17.9z"}))}v5.propTypes={title:K.string.isRequired};function x5(e){var t=e.title,n=wm(e,yN);return ne.createElement("svg",ic({},n,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"}),ne.createElement("title",null,t),ne.createElement("g",{className:"PhoneInputInternationalIconGlobe",stroke:"currentColor",fill:"none",strokeWidth:"2",strokeLinecap:"round"},ne.createElement("path",{d:"M8.45,13A21.44,21.44,0,1,1,37.08,41.56"}),ne.createElement("path",{d:"M19.36,35.47a36.9,36.9,0,0,1-2.28-13.24C17.08,10.39,21.88.85,27.8.85s10.72,9.54,10.72,21.38c0,6.48-1.44,12.28-3.71,16.21"}),ne.createElement("path",{d:"M17.41,33.4A39,39,0,0,1,27.8,32.06c6.62,0,12.55,1.5,16.48,3.86"}),ne.createElement("path",{d:"M44.29,8.53c-3.93,2.37-9.86,3.88-16.49,3.88S15.25,10.9,11.31,8.54"}),ne.createElement("line",{x1:"27.8",y1:"0.85",x2:"27.8",y2:"34.61"}),ne.createElement("line",{x1:"15.2",y1:"22.23",x2:"49.15",y2:"22.23"})),ne.createElement("path",{className:"PhoneInputInternationalIconPhone",stroke:"transparent",fill:"currentColor",d:"M9.42,26.64c2.22-2.22,4.15-3.59.22-8.49S3.08,17,.93,19.17c-2.49,2.48-.13,11.74,9,20.89s18.41,11.5,20.89,9c2.15-2.15,5.91-4.77,1-8.71s-6.27-2-8.49.22c-1.55,1.55-5.48-1.69-8.86-5.08S7.87,28.19,9.42,26.64Z"}))}x5.propTypes={title:K.string.isRequired};function xN(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=bN(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bN(e,t){if(e){if(typeof e=="string")return c3(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c3(e,t)}}function c3(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $N(e,t){if(!t)return e;for(var n=[],r=[],i=n,o=xN(t),a;!(a=o()).done;){var l=a.value;l==="|"?i.push({divider:!0}):l==="..."||l==="…"?i=r:function(){var u=void 0;l==="🌐"?u=void 0:u=l;var d=e.indexOf(e.filter(function(h){return h.value===u})[0]),c=e[d];e.splice(d,1),i.push(c)}()}return n.concat(e).concat(r)}function wN(e,t){if(e&&(e=e.filter(function(n){switch(n){case"🌐":case"|":case"...":case"…":return!0;default:return ff(n,t)}}),e.length>0))return e}function ff(e,t){return Z$(e,t)?!0:(console.error("Country not found: ".concat(e)),!1)}function b5(e,t){return e&&(e=e.filter(function(n){return ff(n,t)}),e.length===0&&(e=void 0)),e}var SN=["country","label","aspectRatio"];function T1(){return T1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T1.apply(this,arguments)}function CN(e,t){if(e==null)return{};var n=PN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function PN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function $5(e){var t=e.flags,n=e.flagUrl,r=e.flagComponent,i=e.internationalIcon;function o(a){var l=a.country,u=a.label,d=a.aspectRatio,c=CN(a,SN),h=i===cf?d:void 0;return ne.createElement("div",T1({},c,{className:Xd("PhoneInputCountryIcon",{"PhoneInputCountryIcon--square":h===1,"PhoneInputCountryIcon--border":l})}),l?ne.createElement(r,{country:l,countryName:u,flags:t,flagUrl:n,className:"PhoneInputCountryIconImg"}):ne.createElement(i,{title:u,aspectRatio:h,className:"PhoneInputCountryIconImg"}))}return o.propTypes={country:K.string,label:K.string.isRequired,aspectRatio:K.number},o}$5({flagUrl:"https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",flagComponent:$m,internationalIcon:cf});var w5=K.shape({country_calling_codes:K.object.isRequired,countries:K.object.isRequired}),S5=K.objectOf(K.string);function ci(e,t){var n="+"+Si(e,t);return n}function ON(e){var t=e.value,n=e.phoneNumber,r=e.defaultCountry,i=e.getAnyCountry,o=e.countries,a=e.required,l=e.metadata,u;return n&&n.country?u=n.country:r&&(!t||_5(t,r,l))&&(u=r),o&&o.indexOf(u)<0&&(u=void 0),!u&&a&&o&&o.length>0&&(u=i()),u}function _N(e){var t=e.countries,n=e.countryNames,r=e.addInternationalOption,i=e.compareStringsLocales,o=e.compareStrings;o||(o=RN);var a=t.map(function(l){return{value:l,label:n[l]||l}});return a.sort(function(l,u){return o(l.label,u.label,i)}),r&&a.unshift({label:n.ZZ}),a}function C5(e,t){return G_(e||"",t)}function kN(e){return e.formatNational().replace(/\D/g,"")}function NN(e,t){var n=t.prevCountry,r=t.newCountry,i=t.metadata,o=t.useNationalFormat;if(n===r)return e;if(!e)return o?"":ci(r,i);if(r){if(e[0]==="+"){if(o)return e.indexOf("+"+Si(r,i))===0?FN(e,r,i):"";if(n){var a=ci(r,i);return e.indexOf(a)===0?e:a}else{var l=ci(r,i);return e.indexOf(l)===0?e:l}}}else if(e[0]!=="+")return sa(e,n,i)||"";return e}function sa(e,t,n){if(e){if(e[0]==="+"){if(e==="+")return;var r=new Wa(t,n);return r.input(e),r.getNumberValue()}if(t){var i=O5(e,t,n);return"+".concat(Si(t,n)).concat(i||"")}}}function EN(e,t,n){var r=O5(e,t,n);if(r){var i=r.length-IN(t,n);if(i>0)return e.slice(0,e.length-i)}return e}function IN(e,t){return t=new gt(t),t.selectNumberingPlan(e),t.numberingPlan.possibleLengths()[t.numberingPlan.possibleLengths().length-1]}function P5(e,t){var n=t.country,r=t.countries,i=t.required,o=t.metadata;if(e==="+")return n;var a=AN(e,o);return a&&(!r||r.indexOf(a)>=0)?a:n&&!i&&!_5(e,n,o)?void 0:n}function TN(e,t){var n=t.prevPhoneDigits,r=t.country,i=t.defaultCountry,o=t.countryRequired,a=t.getAnyCountry,l=t.countries,u=t.international,d=t.limitMaxLength,c=t.countryCallingCodeEditable,h=t.metadata;if(u&&c===!1){var g=ci(r,h);if(e.indexOf(g)!==0){var b;return e&&e[0]!=="+"?(e=g+e,b=sa(e,r,h)):e=g,{phoneDigits:e,value:b,country:r}}}u===!1&&r&&e&&e[0]==="+"&&(e=f3(e,r,h)),e&&r&&d&&(e=EN(e,r,h)),e&&e[0]!=="+"&&(!r||u)&&(e="+"+e),!e&&n&&n[0]==="+"&&(u?r=void 0:r=i),e==="+"&&n&&n[0]==="+"&&n.length>1&&(r=void 0);var v;return e&&(e[0]==="+"&&(e==="+"||r&&ci(r,h).indexOf(e)===0)?v=void 0:v=sa(e,r,h)),v&&(r=P5(v,{country:r,countries:l,metadata:h}),u===!1&&r&&e&&e[0]==="+"&&(e=f3(e,r,h),v=sa(e,r,h))),!r&&o&&(r=i||a()),{phoneDigits:e,country:r,value:v}}function f3(e,t,n){if(e.indexOf(ci(t,n))===0){var r=new Wa(t,n);r.input(e);var i=r.getNumber();return i?i.formatNational().replace(/\D/g,""):""}else return e.replace(/\D/g,"")}function AN(e,t){var n=new Wa(null,t);return n.input(e),n.getCountry()}function RN(e,t,n){return String.prototype.localeCompare?e.localeCompare(t,n):e<t?-1:e>t?1:0}function FN(e,t,n){if(t){var r="+"+Si(t,n);if(e.length<r.length){if(r.indexOf(e)===0)return""}else if(e.indexOf(r)===0)return e.slice(r.length)}for(var i=0,o=Object.keys(n.country_calling_codes);i<o.length;i++){var a=o[i];if(e.indexOf(a)===1)return e.slice(1+a.length)}return""}function O5(e,t,n){var r=new Wa(t,n);r.input(e);var i=r.getNumber();return i&&i.nationalNumber}function _5(e,t,n){for(var r=ci(t,n),i=0;i<e.length&&i<r.length;){if(e[i]!==r[i])return!1;i++}return!0}function k5(e){var t=e.value,n=e.phoneNumber,r=e.defaultCountry,i=e.international,o=e.useNationalFormat,a=e.metadata;return(i===!1||o)&&n&&n.country?kN(n):!t&&i&&r?ci(r,a):t}function h3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function xu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?h3(Object(n),!0).forEach(function(r){DN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function DN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function MN(e,t,n){var r=e.metadata,i=e.countries,o=e.defaultCountry,a=e.value,l=e.reset,u=e.international,d=e.displayInitialValueAsLocalNumber,c=e.initialValueFormat,h=t.defaultCountry,g=t.value,b=t.reset;n.country;var v=n.value,w=n.hasUserSelectedACountry,$=function(W){return k5(xu(xu({},W),{},{international:u,useNationalFormat:d||c==="national",metadata:r}))};if(l!==b)return{phoneDigits:$({value:void 0,defaultCountry:o}),value:void 0,country:o,hasUserSelectedACountry:void 0};if(o!==h){var m=!o||ff(o,r),p=!v||u&&v===$({value:void 0,defaultCountry:h}),x=!a&&p;if(!w&&m&&x)return{country:o,phoneDigits:$({value:void 0,defaultCountry:o}),value:void 0}}if(!p3(a,g)&&!p3(a,v)){var S,P;if(a){S=C5(a,r);var _=b5(i,r);S&&S.country?(!_||_.indexOf(S.country)>=0)&&(P=S.country):P=P5(a,{country:void 0,countries:_,metadata:r})}var T;return a||(T={hasUserSelectedACountry:void 0}),xu(xu({},T),{},{phoneDigits:$({phoneNumber:S,value:a,defaultCountry:o}),value:a,country:a?P:o})}}function p3(e,t){return e===null&&(e=void 0),t===null&&(t=void 0),e===t}function A1(e){return A1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A1(e)}var jN=["name","disabled","readOnly","autoComplete","style","className","inputRef","inputComponent","numberInputProps","smartCaret","countrySelectComponent","countrySelectProps","containerComponent","defaultCountry","countries","countryOptionsOrder","labels","flags","flagComponent","flagUrl","addInternationalOption","internationalIcon","displayInitialValueAsLocalNumber","initialValueFormat","onCountryChange","limitMaxLength","countryCallingCodeEditable","focusInputOnCountrySelection","reset","metadata","international","locales"];function g3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function LN(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?g3(Object(n),!0).forEach(function(r){Cn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hl(){return hl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hl.apply(this,arguments)}function zN(e,t){if(e==null)return{};var n=UN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function UN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function BN(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function HN(e,t,n){return t&&m3(e.prototype,t),n&&m3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function WN(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R1(e,t)}function R1(e,t){return R1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},R1(e,t)}function YN(e){var t=qN();return function(){var r=oc(e),i;if(t){var o=oc(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return VN(this,i)}}function VN(e,t){if(t&&(A1(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Sn(e)}function Sn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function qN(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function oc(e){return oc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},oc(e)}function Cn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var GN=function(e){WN(n,e);var t=YN(n);function n(r){var i;BN(this,n),i=t.call(this,r),Cn(Sn(i),"setInputRef",function(m){i.inputRef.current=m;var p=i.props.inputRef;p&&(typeof p=="function"?p(m):p.current=m)}),Cn(Sn(i),"isCountrySupportedWithError",function(m){var p=i.props.metadata;return ff(m,p)}),Cn(Sn(i),"onCountryChange",function(m){var p=i.props,x=p.international,S=p.metadata,P=p.onChange,_=p.focusInputOnCountrySelection,T=i.state,R=T.phoneDigits,W=T.country,z=NN(R,{prevCountry:W,newCountry:m,metadata:S,useNationalFormat:!x}),ie=sa(z,m,S);_&&i.inputRef.current.focus(),i.setState({country:m,hasUserSelectedACountry:!0,phoneDigits:z,value:ie},function(){P(ie)})}),Cn(Sn(i),"onChange",function(m){var p=i.props,x=p.defaultCountry,S=p.onChange,P=p.addInternationalOption,_=p.international,T=p.limitMaxLength,R=p.countryCallingCodeEditable,W=p.metadata,z=i.state,ie=z.countries,M=z.phoneDigits,j=z.country,J=TN(m,{prevPhoneDigits:M,country:j,countryRequired:!P,defaultCountry:x,getAnyCountry:function(){return i.getFirstSupportedCountry({countries:ie})},countries:ie,international:_,limitMaxLength:T,countryCallingCodeEditable:R,metadata:W}),F=J.phoneDigits,X=J.country,te=J.value,L={phoneDigits:F,value:te,country:X};R===!1&&!te&&F===i.state.phoneDigits&&(L.forceRerender={}),i.setState(L,function(){return S(te)})}),Cn(Sn(i),"_onFocus",function(){return i.setState({isFocused:!0})}),Cn(Sn(i),"_onBlur",function(){return i.setState({isFocused:!1})}),Cn(Sn(i),"onFocus",function(m){i._onFocus();var p=i.props.onFocus;p&&p(m)}),Cn(Sn(i),"onBlur",function(m){var p=i.props.onBlur;i._onBlur(),p&&p(m)}),Cn(Sn(i),"onCountryFocus",function(m){i._onFocus();var p=i.props.countrySelectProps;if(p){var x=p.onFocus;x&&x(m)}}),Cn(Sn(i),"onCountryBlur",function(m){i._onBlur();var p=i.props.countrySelectProps;if(p){var x=p.onBlur;x&&x(m)}}),i.inputRef=ne.createRef();var o=i.props,a=o.value;o.labels;var l=o.international,u=o.addInternationalOption,d=o.displayInitialValueAsLocalNumber,c=o.initialValueFormat,h=o.metadata,g=i.props,b=g.defaultCountry,v=g.countries;b&&(i.isCountrySupportedWithError(b)||(b=void 0)),v=b5(v,h);var w=C5(a,h);i.CountryIcon=$5(i.props);var $=ON({value:a,phoneNumber:w,defaultCountry:b,required:!u,countries:v||s3(h),getAnyCountry:function(){return i.getFirstSupportedCountry({countries:v})},metadata:h});return i.state={props:i.props,country:$,countries:v,phoneDigits:k5({value:a,phoneNumber:w,defaultCountry:b,international:l,useNationalFormat:d||c==="national",metadata:h}),value:a},i}return HN(n,[{key:"componentDidMount",value:function(){var i=this.props.onCountryChange,o=this.props.defaultCountry,a=this.state.country;i&&(o&&(this.isCountrySupportedWithError(o)||(o=void 0)),a!==o&&i(a))}},{key:"componentDidUpdate",value:function(i,o){var a=this.props.onCountryChange,l=this.state.country;a&&l!==o.country&&a(l)}},{key:"getCountrySelectOptions",value:function(i){var o=i.countries,a=this.props,l=a.international,u=a.countryCallingCodeEditable,d=a.countryOptionsOrder,c=a.addInternationalOption,h=a.labels,g=a.locales,b=a.metadata;return this.useMemoCountrySelectOptions(function(){return $N(_N({countries:o||s3(b),countryNames:h,addInternationalOption:l&&u===!1?!1:c,compareStringsLocales:g}),wN(d,b))},[o,d,c,h,b])}},{key:"useMemoCountrySelectOptions",value:function(i,o){return(!this.countrySelectOptionsMemoDependencies||!KN(o,this.countrySelectOptionsMemoDependencies))&&(this.countrySelectOptionsMemo=i(),this.countrySelectOptionsMemoDependencies=o),this.countrySelectOptionsMemo}},{key:"getFirstSupportedCountry",value:function(i){var o=i.countries,a=this.getCountrySelectOptions({countries:o});return a[0].value}},{key:"render",value:function(){var i=this.props,o=i.name,a=i.disabled,l=i.readOnly,u=i.autoComplete,d=i.style,c=i.className;i.inputRef;var h=i.inputComponent,g=i.numberInputProps,b=i.smartCaret,v=i.countrySelectComponent,w=i.countrySelectProps,$=i.containerComponent;i.defaultCountry,i.countries,i.countryOptionsOrder;var m=i.labels;i.flags,i.flagComponent,i.flagUrl,i.addInternationalOption,i.internationalIcon,i.displayInitialValueAsLocalNumber,i.initialValueFormat,i.onCountryChange,i.limitMaxLength,i.countryCallingCodeEditable,i.focusInputOnCountrySelection,i.reset;var p=i.metadata;i.international,i.locales;var x=zN(i,jN),S=this.state,P=S.country,_=S.countries,T=S.phoneDigits,R=S.isFocused,W=b?Xk:iN,z=this.getCountrySelectOptions({countries:_});return ne.createElement($,{style:d,className:Xd(c,"PhoneInput",{"PhoneInput--focus":R,"PhoneInput--disabled":a,"PhoneInput--readOnly":l})},ne.createElement(v,hl({name:o?"".concat(o,"Country"):void 0,"aria-label":m.country},w,{value:P,options:z,onChange:this.onCountryChange,onFocus:this.onCountryFocus,onBlur:this.onCountryBlur,disabled:a||w&&w.disabled,readOnly:l||w&&w.readOnly,iconComponent:this.CountryIcon})),ne.createElement(W,hl({ref:this.setInputRef,type:"tel",autoComplete:u},g,x,{name:o,metadata:p,country:P,value:T||"",onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,disabled:a,readOnly:l,inputComponent:h,className:Xd("PhoneInputInput",g&&g.className,x.className)})))}}],[{key:"getDerivedStateFromProps",value:function(i,o){return LN({props:i},MN(i,o.props,o))}}]),n}(ne.PureComponent),Sm=ne.forwardRef(function(e,t){return ne.createElement(GN,hl({},e,{inputRef:t}))});Sm.propTypes={value:K.string,onChange:K.func.isRequired,onFocus:K.func,onBlur:K.func,disabled:K.bool,readOnly:K.bool,autoComplete:K.string.isRequired,initialValueFormat:K.oneOf(["national"]),displayInitialValueAsLocalNumber:K.bool,defaultCountry:K.string,countries:K.arrayOf(K.string),labels:S5.isRequired,locales:K.oneOfType([K.string,K.arrayOf(K.string)]),flagUrl:K.string.isRequired,flags:K.objectOf(K.elementType),flagComponent:K.elementType.isRequired,addInternationalOption:K.bool.isRequired,internationalIcon:K.elementType.isRequired,countryOptionsOrder:K.arrayOf(K.string),style:K.object,className:K.string,countrySelectComponent:K.elementType.isRequired,countrySelectProps:K.object,inputComponent:K.elementType.isRequired,containerComponent:K.elementType.isRequired,numberInputProps:K.object,smartCaret:K.bool.isRequired,international:K.bool,limitMaxLength:K.bool.isRequired,countryCallingCodeEditable:K.bool.isRequired,metadata:w5.isRequired,onCountryChange:K.func,focusInputOnCountrySelection:K.bool.isRequired};Sm.defaultProps={autoComplete:"tel",countrySelectComponent:bm,flagComponent:$m,flagUrl:"https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",internationalIcon:cf,inputComponent:"input",containerComponent:"div",reset:K.any,smartCaret:!0,addInternationalOption:!0,limitMaxLength:!1,countryCallingCodeEditable:!0,focusInputOnCountrySelection:!0};const QN=Sm;function KN(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;){if(e[n]!==t[n])return!1;n++}return!0}const ZN={ext:"ext.",country:"Phone number country",phone:"Phone",AB:"Abkhazia",AC:"Ascension Island",AD:"Andorra",AE:"United Arab Emirates",AF:"Afghanistan",AG:"Antigua and Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:"American Samoa",AT:"Austria",AU:"Australia",AW:"Aruba",AX:"Åland Islands",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BL:"Saint Barthélemy",BM:"Bermuda",BN:"Brunei Darussalam",BO:"Bolivia",BQ:"Bonaire, Sint Eustatius and Saba",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BV:"Bouvet Island",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CC:"Cocos (Keeling) Islands",CD:"Congo, Democratic Republic of the",CF:"Central African Republic",CG:"Congo",CH:"Switzerland",CI:"Cote d'Ivoire",CK:"Cook Islands",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CU:"Cuba",CV:"Cape Verde",CW:"Curaçao",CX:"Christmas Island",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",EH:"Western Sahara",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",FM:"Federated States of Micronesia",FO:"Faroe Islands",FR:"France",GA:"Gabon",GB:"United Kingdom",GD:"Grenada",GE:"Georgia",GF:"French Guiana",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Equatorial Guinea",GR:"Greece",GS:"South Georgia and the South Sandwich Islands",GT:"Guatemala",GU:"Guam",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong",HM:"Heard Island and McDonald Islands",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IM:"Isle of Man",IN:"India",IO:"British Indian Ocean Territory",IQ:"Iraq",IR:"Iran",IS:"Iceland",IT:"Italy",JE:"Jersey",JM:"Jamaica",JO:"Jordan",JP:"Japan",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KI:"Kiribati",KM:"Comoros",KN:"Saint Kitts and Nevis",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Laos",LB:"Lebanon",LC:"Saint Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libya",MA:"Morocco",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MF:"Saint Martin (French Part)",MG:"Madagascar",MH:"Marshall Islands",MK:"North Macedonia",ML:"Mali",MM:"Myanmar",MN:"Mongolia",MO:"Macao",MP:"Northern Mariana Islands",MQ:"Martinique",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NR:"Nauru",NU:"Niue",NZ:"New Zealand",OM:"Oman",OS:"South Ossetia",PA:"Panama",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PM:"Saint Pierre and Miquelon",PN:"Pitcairn",PR:"Puerto Rico",PS:"Palestine",PT:"Portugal",PW:"Palau",PY:"Paraguay",QA:"Qatar",RE:"Reunion",RO:"Romania",RS:"Serbia",RU:"Russia",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SH:"Saint Helena",SI:"Slovenia",SJ:"Svalbard and Jan Mayen",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",SS:"South Sudan",ST:"Sao Tome and Principe",SV:"El Salvador",SX:"Sint Maarten",SY:"Syria",SZ:"Swaziland",TA:"Tristan da Cunha",TC:"Turks and Caicos Islands",TD:"Chad",TF:"French Southern Territories",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TK:"Tokelau",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turkey",TT:"Trinidad and Tobago",TV:"Tuvalu",TW:"Taiwan",TZ:"Tanzania",UA:"Ukraine",UG:"Uganda",UM:"United States Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VA:"Holy See (Vatican City State)",VC:"Saint Vincent and the Grenadines",VE:"Venezuela",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis and Futuna",WS:"Samoa",XK:"Kosovo",YE:"Yemen",YT:"Mayotte",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe",ZZ:"International"};function F1(){return F1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F1.apply(this,arguments)}function N5(e){var t=ne.forwardRef(function(n,r){return ne.createElement(QN,F1({ref:r},n))});return t.propTypes={metadata:w5.isRequired,labels:S5.isRequired},t.defaultProps={metadata:e,labels:ZN},t}N5();const Cm=N5(OP);function E5(e,t){return function(){return e.apply(t,arguments)}}const{toString:I5}=Object.prototype,{getPrototypeOf:Pm}=Object,Om=(e=>t=>{const n=I5.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ir=e=>(e=e.toLowerCase(),t=>Om(t)===e),hf=e=>t=>typeof t===e,{isArray:Ya}=Array,pl=hf("undefined");function JN(e){return e!==null&&!pl(e)&&e.constructor!==null&&!pl(e.constructor)&&yi(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const T5=Ir("ArrayBuffer");function XN(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&T5(e.buffer),t}const eE=hf("string"),yi=hf("function"),A5=hf("number"),_m=e=>e!==null&&typeof e=="object",tE=e=>e===!0||e===!1,sd=e=>{if(Om(e)!=="object")return!1;const t=Pm(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},nE=Ir("Date"),rE=Ir("File"),iE=Ir("Blob"),oE=Ir("FileList"),aE=e=>_m(e)&&yi(e.pipe),sE=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||I5.call(e)===t||yi(e.toString)&&e.toString()===t)},lE=Ir("URLSearchParams"),uE=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function zl(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Ya(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let l;for(r=0;r<a;r++)l=o[r],t.call(null,e[l],l,e)}}function R5(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const F5=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),D5=e=>!pl(e)&&e!==F5;function D1(){const{caseless:e}=D5(this)&&this||{},t={},n=(r,i)=>{const o=e&&R5(t,i)||i;sd(t[o])&&sd(r)?t[o]=D1(t[o],r):sd(r)?t[o]=D1({},r):Ya(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&zl(arguments[r],n);return t}const dE=(e,t,n,{allOwnKeys:r}={})=>(zl(t,(i,o)=>{n&&yi(i)?e[o]=E5(i,n):e[o]=i},{allOwnKeys:r}),e),cE=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),fE=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},hE=(e,t,n,r)=>{let i,o,a;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&Pm(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},pE=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},gE=e=>{if(!e)return null;if(Ya(e))return e;let t=e.length;if(!A5(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},mE=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Pm(Uint8Array)),yE=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},vE=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},xE=Ir("HTMLFormElement"),bE=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),y3=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),$E=Ir("RegExp"),M5=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};zl(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},wE=e=>{M5(e,(t,n)=>{if(yi(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(yi(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},SE=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Ya(e)?r(e):r(String(e).split(t)),n},CE=()=>{},PE=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Eh="abcdefghijklmnopqrstuvwxyz",v3="0123456789",j5={DIGIT:v3,ALPHA:Eh,ALPHA_DIGIT:Eh+Eh.toUpperCase()+v3},OE=(e=16,t=j5.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function _E(e){return!!(e&&yi(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const kE=e=>{const t=new Array(10),n=(r,i)=>{if(_m(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Ya(r)?[]:{};return zl(r,(a,l)=>{const u=n(a,i+1);!pl(u)&&(o[l]=u)}),t[i]=void 0,o}}return r};return n(e,0)},B={isArray:Ya,isArrayBuffer:T5,isBuffer:JN,isFormData:sE,isArrayBufferView:XN,isString:eE,isNumber:A5,isBoolean:tE,isObject:_m,isPlainObject:sd,isUndefined:pl,isDate:nE,isFile:rE,isBlob:iE,isRegExp:$E,isFunction:yi,isStream:aE,isURLSearchParams:lE,isTypedArray:mE,isFileList:oE,forEach:zl,merge:D1,extend:dE,trim:uE,stripBOM:cE,inherits:fE,toFlatObject:hE,kindOf:Om,kindOfTest:Ir,endsWith:pE,toArray:gE,forEachEntry:yE,matchAll:vE,isHTMLForm:xE,hasOwnProperty:y3,hasOwnProp:y3,reduceDescriptors:M5,freezeMethods:wE,toObjectSet:SE,toCamelCase:bE,noop:CE,toFiniteNumber:PE,findKey:R5,global:F5,isContextDefined:D5,ALPHABET:j5,generateString:OE,isSpecCompliantForm:_E,toJSONObject:kE};function we(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}B.inherits(we,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const L5=we.prototype,z5={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{z5[e]={value:e}});Object.defineProperties(we,z5);Object.defineProperty(L5,"isAxiosError",{value:!0});we.from=(e,t,n,r,i,o)=>{const a=Object.create(L5);return B.toFlatObject(e,a,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),we.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const NE=null;function M1(e){return B.isPlainObject(e)||B.isArray(e)}function U5(e){return B.endsWith(e,"[]")?e.slice(0,-2):e}function x3(e,t,n){return e?e.concat(t).map(function(i,o){return i=U5(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function EE(e){return B.isArray(e)&&!e.some(M1)}const IE=B.toFlatObject(B,{},null,function(t){return/^is[A-Z]/.test(t)});function pf(e,t,n){if(!B.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=B.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,$){return!B.isUndefined($[w])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,a=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(t);if(!B.isFunction(i))throw new TypeError("visitor must be a function");function d(v){if(v===null)return"";if(B.isDate(v))return v.toISOString();if(!u&&B.isBlob(v))throw new we("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(v)||B.isTypedArray(v)?u&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function c(v,w,$){let m=v;if(v&&!$&&typeof v=="object"){if(B.endsWith(w,"{}"))w=r?w:w.slice(0,-2),v=JSON.stringify(v);else if(B.isArray(v)&&EE(v)||(B.isFileList(v)||B.endsWith(w,"[]"))&&(m=B.toArray(v)))return w=U5(w),m.forEach(function(x,S){!(B.isUndefined(x)||x===null)&&t.append(a===!0?x3([w],S,o):a===null?w:w+"[]",d(x))}),!1}return M1(v)?!0:(t.append(x3($,w,o),d(v)),!1)}const h=[],g=Object.assign(IE,{defaultVisitor:c,convertValue:d,isVisitable:M1});function b(v,w){if(!B.isUndefined(v)){if(h.indexOf(v)!==-1)throw Error("Circular reference detected in "+w.join("."));h.push(v),B.forEach(v,function(m,p){(!(B.isUndefined(m)||m===null)&&i.call(t,m,B.isString(p)?p.trim():p,w,g))===!0&&b(m,w?w.concat(p):[p])}),h.pop()}}if(!B.isObject(e))throw new TypeError("data must be an object");return b(e),t}function b3(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function km(e,t){this._pairs=[],e&&pf(e,this,t)}const B5=km.prototype;B5.append=function(t,n){this._pairs.push([t,n])};B5.toString=function(t){const n=t?function(r){return t.call(this,r,b3)}:b3;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function TE(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function H5(e,t,n){if(!t)return e;const r=n&&n.encode||TE,i=n&&n.serialize;let o;if(i?o=i(t,n):o=B.isURLSearchParams(t)?t.toString():new km(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class AE{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){B.forEach(this.handlers,function(r){r!==null&&t(r)})}}const $3=AE,W5={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},RE=typeof URLSearchParams<"u"?URLSearchParams:km,FE=typeof FormData<"u"?FormData:null,DE=typeof Blob<"u"?Blob:null,ME=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),jE=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Gn={isBrowser:!0,classes:{URLSearchParams:RE,FormData:FE,Blob:DE},isStandardBrowserEnv:ME,isStandardBrowserWebWorkerEnv:jE,protocols:["http","https","file","blob","url","data"]};function LE(e,t){return pf(e,new Gn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Gn.isNode&&B.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function zE(e){return B.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function UE(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Y5(e){function t(n,r,i,o){let a=n[o++];const l=Number.isFinite(+a),u=o>=n.length;return a=!a&&B.isArray(i)?i.length:a,u?(B.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!l):((!i[a]||!B.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&B.isArray(i[a])&&(i[a]=UE(i[a])),!l)}if(B.isFormData(e)&&B.isFunction(e.entries)){const n={};return B.forEachEntry(e,(r,i)=>{t(zE(r),i,n,0)}),n}return null}const BE={"Content-Type":void 0};function HE(e,t,n){if(B.isString(e))try{return(t||JSON.parse)(e),B.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const gf={transitional:W5,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=B.isObject(t);if(o&&B.isHTMLForm(t)&&(t=new FormData(t)),B.isFormData(t))return i&&i?JSON.stringify(Y5(t)):t;if(B.isArrayBuffer(t)||B.isBuffer(t)||B.isStream(t)||B.isFile(t)||B.isBlob(t))return t;if(B.isArrayBufferView(t))return t.buffer;if(B.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return LE(t,this.formSerializer).toString();if((l=B.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return pf(l?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),HE(t)):t}],transformResponse:[function(t){const n=this.transitional||gf.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&B.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?we.from(l,we.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Gn.classes.FormData,Blob:Gn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};B.forEach(["delete","get","head"],function(t){gf.headers[t]={}});B.forEach(["post","put","patch"],function(t){gf.headers[t]=B.merge(BE)});const Nm=gf,WE=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),YE=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&WE[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},w3=Symbol("internals");function ss(e){return e&&String(e).trim().toLowerCase()}function ld(e){return e===!1||e==null?e:B.isArray(e)?e.map(ld):String(e)}function VE(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const qE=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ih(e,t,n,r,i){if(B.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!B.isString(t)){if(B.isString(r))return t.indexOf(r)!==-1;if(B.isRegExp(r))return r.test(t)}}function GE(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function QE(e,t){const n=B.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class mf{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,u,d){const c=ss(u);if(!c)throw new Error("header name must be a non-empty string");const h=B.findKey(i,c);(!h||i[h]===void 0||d===!0||d===void 0&&i[h]!==!1)&&(i[h||u]=ld(l))}const a=(l,u)=>B.forEach(l,(d,c)=>o(d,c,u));return B.isPlainObject(t)||t instanceof this.constructor?a(t,n):B.isString(t)&&(t=t.trim())&&!qE(t)?a(YE(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=ss(t),t){const r=B.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return VE(i);if(B.isFunction(n))return n.call(this,i,r);if(B.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ss(t),t){const r=B.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ih(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=ss(a),a){const l=B.findKey(r,a);l&&(!n||Ih(r,r[l],l,n))&&(delete r[l],i=!0)}}return B.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Ih(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return B.forEach(this,(i,o)=>{const a=B.findKey(r,o);if(a){n[a]=ld(i),delete n[o];return}const l=t?GE(o):String(o).trim();l!==o&&delete n[o],n[l]=ld(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return B.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&B.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[w3]=this[w3]={accessors:{}}).accessors,i=this.prototype;function o(a){const l=ss(a);r[l]||(QE(i,a),r[l]=!0)}return B.isArray(t)?t.forEach(o):o(t),this}}mf.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.freezeMethods(mf.prototype);B.freezeMethods(mf);const $r=mf;function Th(e,t){const n=this||Nm,r=t||n,i=$r.from(r.headers);let o=r.data;return B.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function V5(e){return!!(e&&e.__CANCEL__)}function Ul(e,t,n){we.call(this,e??"canceled",we.ERR_CANCELED,t,n),this.name="CanceledError"}B.inherits(Ul,we,{__CANCEL__:!0});function KE(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new we("Request failed with status code "+n.status,[we.ERR_BAD_REQUEST,we.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const ZE=Gn.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,l){const u=[];u.push(n+"="+encodeURIComponent(r)),B.isNumber(i)&&u.push("expires="+new Date(i).toGMTString()),B.isString(o)&&u.push("path="+o),B.isString(a)&&u.push("domain="+a),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function JE(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function XE(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function q5(e,t){return e&&!JE(t)?XE(e,t):t}const eI=Gn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const l=B.isString(a)?i(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function tI(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function nI(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(u){const d=Date.now(),c=r[o];a||(a=d),n[i]=u,r[i]=d;let h=o,g=0;for(;h!==i;)g+=n[h++],h=h%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),d-a<t)return;const b=c&&d-c;return b?Math.round(g*1e3/b):void 0}}function S3(e,t){let n=0;const r=nI(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-n,u=r(l),d=o<=a;n=o;const c={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&d?(a-o)/u:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const rI=typeof XMLHttpRequest<"u",iI=rI&&function(e){return new Promise(function(n,r){let i=e.data;const o=$r.from(e.headers).normalize(),a=e.responseType;let l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}B.isFormData(i)&&(Gn.isStandardBrowserEnv||Gn.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let d=new XMLHttpRequest;if(e.auth){const b=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(b+":"+v))}const c=q5(e.baseURL,e.url);d.open(e.method.toUpperCase(),H5(c,e.params,e.paramsSerializer),!0),d.timeout=e.timeout;function h(){if(!d)return;const b=$r.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),w={data:!a||a==="text"||a==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:b,config:e,request:d};KE(function(m){n(m),u()},function(m){r(m),u()},w),d=null}if("onloadend"in d?d.onloadend=h:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(h)},d.onabort=function(){d&&(r(new we("Request aborted",we.ECONNABORTED,e,d)),d=null)},d.onerror=function(){r(new we("Network Error",we.ERR_NETWORK,e,d)),d=null},d.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||W5;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),r(new we(v,w.clarifyTimeoutError?we.ETIMEDOUT:we.ECONNABORTED,e,d)),d=null},Gn.isStandardBrowserEnv){const b=(e.withCredentials||eI(c))&&e.xsrfCookieName&&ZE.read(e.xsrfCookieName);b&&o.set(e.xsrfHeaderName,b)}i===void 0&&o.setContentType(null),"setRequestHeader"in d&&B.forEach(o.toJSON(),function(v,w){d.setRequestHeader(w,v)}),B.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),a&&a!=="json"&&(d.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&d.addEventListener("progress",S3(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",S3(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=b=>{d&&(r(!b||b.type?new Ul(null,e,d):b),d.abort(),d=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=tI(c);if(g&&Gn.protocols.indexOf(g)===-1){r(new we("Unsupported protocol "+g+":",we.ERR_BAD_REQUEST,e));return}d.send(i||null)})},ud={http:NE,xhr:iI};B.forEach(ud,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const oI={getAdapter:e=>{e=B.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=B.isString(n)?ud[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new we(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(B.hasOwnProp(ud,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!B.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:ud};function Ah(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ul(null,e)}function C3(e){return Ah(e),e.headers=$r.from(e.headers),e.data=Th.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),oI.getAdapter(e.adapter||Nm.adapter)(e).then(function(r){return Ah(e),r.data=Th.call(e,e.transformResponse,r),r.headers=$r.from(r.headers),r},function(r){return V5(r)||(Ah(e),r&&r.response&&(r.response.data=Th.call(e,e.transformResponse,r.response),r.response.headers=$r.from(r.response.headers))),Promise.reject(r)})}const P3=e=>e instanceof $r?e.toJSON():e;function Fa(e,t){t=t||{};const n={};function r(d,c,h){return B.isPlainObject(d)&&B.isPlainObject(c)?B.merge.call({caseless:h},d,c):B.isPlainObject(c)?B.merge({},c):B.isArray(c)?c.slice():c}function i(d,c,h){if(B.isUndefined(c)){if(!B.isUndefined(d))return r(void 0,d,h)}else return r(d,c,h)}function o(d,c){if(!B.isUndefined(c))return r(void 0,c)}function a(d,c){if(B.isUndefined(c)){if(!B.isUndefined(d))return r(void 0,d)}else return r(void 0,c)}function l(d,c,h){if(h in t)return r(d,c);if(h in e)return r(void 0,d)}const u={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(d,c)=>i(P3(d),P3(c),!0)};return B.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const h=u[c]||i,g=h(e[c],t[c],c);B.isUndefined(g)&&h!==l||(n[c]=g)}),n}const G5="1.3.5",Em={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Em[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const O3={};Em.transitional=function(t,n,r){function i(o,a){return"[Axios v"+G5+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,l)=>{if(t===!1)throw new we(i(a," has been removed"+(n?" in "+n:"")),we.ERR_DEPRECATED);return n&&!O3[a]&&(O3[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,l):!0}};function aI(e,t,n){if(typeof e!="object")throw new we("options must be an object",we.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const l=e[o],u=l===void 0||a(l,o,e);if(u!==!0)throw new we("option "+o+" must be "+u,we.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new we("Unknown option "+o,we.ERR_BAD_OPTION)}}const j1={assertOptions:aI,validators:Em},Mr=j1.validators;class ac{constructor(t){this.defaults=t,this.interceptors={request:new $3,response:new $3}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Fa(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&j1.assertOptions(r,{silentJSONParsing:Mr.transitional(Mr.boolean),forcedJSONParsing:Mr.transitional(Mr.boolean),clarifyTimeoutError:Mr.transitional(Mr.boolean)},!1),i!=null&&(B.isFunction(i)?n.paramsSerializer={serialize:i}:j1.assertOptions(i,{encode:Mr.function,serialize:Mr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a;a=o&&B.merge(o.common,o[n.method]),a&&B.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=$r.concat(a,o);const l=[];let u=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(u=u&&w.synchronous,l.unshift(w.fulfilled,w.rejected))});const d=[];this.interceptors.response.forEach(function(w){d.push(w.fulfilled,w.rejected)});let c,h=0,g;if(!u){const v=[C3.bind(this),void 0];for(v.unshift.apply(v,l),v.push.apply(v,d),g=v.length,c=Promise.resolve(n);h<g;)c=c.then(v[h++],v[h++]);return c}g=l.length;let b=n;for(h=0;h<g;){const v=l[h++],w=l[h++];try{b=v(b)}catch($){w.call(this,$);break}}try{c=C3.call(this,b)}catch(v){return Promise.reject(v)}for(h=0,g=d.length;h<g;)c=c.then(d[h++],d[h++]);return c}getUri(t){t=Fa(this.defaults,t);const n=q5(t.baseURL,t.url);return H5(n,t.params,t.paramsSerializer)}}B.forEach(["delete","get","head","options"],function(t){ac.prototype[t]=function(n,r){return this.request(Fa(r||{},{method:t,url:n,data:(r||{}).data}))}});B.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,l){return this.request(Fa(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}ac.prototype[t]=n(),ac.prototype[t+"Form"]=n(!0)});const dd=ac;class Im{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(l=>{r.subscribe(l),o=l}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,l){r.reason||(r.reason=new Ul(o,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Im(function(i){t=i}),cancel:t}}}const sI=Im;function lI(e){return function(n){return e.apply(null,n)}}function uI(e){return B.isObject(e)&&e.isAxiosError===!0}const L1={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(L1).forEach(([e,t])=>{L1[t]=e});const dI=L1;function Q5(e){const t=new dd(e),n=E5(dd.prototype.request,t);return B.extend(n,dd.prototype,t,{allOwnKeys:!0}),B.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Q5(Fa(e,i))},n}const dt=Q5(Nm);dt.Axios=dd;dt.CanceledError=Ul;dt.CancelToken=sI;dt.isCancel=V5;dt.VERSION=G5;dt.toFormData=pf;dt.AxiosError=we;dt.Cancel=dt.CanceledError;dt.all=function(t){return Promise.all(t)};dt.spread=lI;dt.isAxiosError=uI;dt.mergeConfig=Fa;dt.AxiosHeaders=$r;dt.formToJSON=e=>Y5(B.isHTMLForm(e)?new FormData(e):e);dt.HttpStatusCode=dI;dt.default=dt;const Xe=dt,tr="https://crossbackend.onrender.com",cI=async({firstName:e,lastName:t,email:n,companyName:r,phoneNum:i,password:o})=>{await Xe.post(`${tr}/api/seler/register`,{firstName:e,lastName:t,email:n,companyName:r,phoneNum:i,password:o}).then(a=>{localStorage.setItem("user",JSON.stringify(a.data.data)),alert(a.data.token)})},fI=async e=>{await Xe.post(`${tr}/api/user/register`,e).then(t=>{localStorage.setItem("user",JSON.stringify(t.data.data)),alert(t.data.token)})},hI=async({email:e,password:t})=>{await Xe.post(`${tr}/api/user/login`,{email:e,password:t}).then(n=>{localStorage.setItem("user",JSON.stringify(n.data.data))})},pI=async({email:e,password:t})=>{await Xe.post(`${tr}/api/seler/signInUser`,{email:e,password:t}).then(n=>{localStorage.setItem("user",JSON.stringify(n.data.data))})},gI=async({id:e,otp:t})=>{await Xe.patch(`${tr}/api/user/${e}/verify2`,{otp:t}).then(n=>{console.log(n.data)})},mI=async({id:e,otp:t})=>{await Xe.patch(`${tr}/api/user/${e}/verify`,{otp:t}).then(n=>{console.log(n.data)})},yI=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.patch(`${tr}/api/seler/${e}/update`,t,n).then(r=>{console.log(r.data)}).catch(r=>{console.log(r)})},vI=async({id:e,gender:t,DateOfBirth:n,country:r})=>{await Xe.patch(`${tr}/api/seler/${e}/updateuser`,{gender:t,DateOfBirth:n,country:r}).then(i=>{})},xI=async({id:e,address:t,address2:n,shippingFrom:r,codePostal:i,shopName:o,city:a})=>{await Xe.patch(`${tr}/api/seler/${e}/updateuser`,{address:t,address2:n,shippingFrom:r,codePostal:i,shopName:o,city:a}).then(l=>{})},bI=async({id:e,bankName:t,accountName:n,accNumber:r,completed:i})=>{await Xe.patch(`${tr}/api/seler/${e}/updateuser`,{bankName:t,accountName:n,accNumber:r,completed:i}).then(o=>{})};function fo(e){this._maxSize=e,this.clear()}fo.prototype.clear=function(){this._size=0,this._values=Object.create(null)};fo.prototype.get=function(e){return this._values[e]};fo.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var $I=/[^.^\]^[]+|(?=\[\]|\.\.)/g,K5=/^\d+$/,wI=/^\d/,SI=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,CI=/^\s*(['"]?)(.*?)(\1)\s*$/,Tm=512,_3=new fo(Tm),k3=new fo(Tm),N3=new fo(Tm),eo={Cache:fo,split:z1,normalizePath:Rh,setter:function(e){var t=Rh(e);return k3.get(e)||k3.set(e,function(r,i){for(var o=0,a=t.length,l=r;o<a-1;){var u=t[o];if(u==="__proto__"||u==="constructor"||u==="prototype")return r;l=l[t[o++]]}l[t[o]]=i})},getter:function(e,t){var n=Rh(e);return N3.get(e)||N3.set(e,function(i){for(var o=0,a=n.length;o<a;)if(i!=null||!t)i=i[n[o++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(Am(n)||K5.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){PI(Array.isArray(e)?e:z1(e),t,n)}};function Rh(e){return _3.get(e)||_3.set(e,z1(e).map(function(t){return t.replace(CI,"$2")}))}function z1(e){return e.match($I)||[""]}function PI(e,t,n){var r=e.length,i,o,a,l;for(o=0;o<r;o++)i=e[o],i&&(kI(i)&&(i='"'+i+'"'),l=Am(i),a=!l&&/^\d+$/.test(i),t.call(n,i,l,a,o,e))}function Am(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function OI(e){return e.match(wI)&&!e.match(K5)}function _I(e){return SI.test(e)}function kI(e){return!Am(e)&&(OI(e)||_I(e))}const NI=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,yf=e=>e.match(NI)||[],vf=e=>e[0].toUpperCase()+e.slice(1),Rm=(e,t)=>yf(e).join(t).toLowerCase(),Z5=e=>yf(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),EI=e=>vf(Z5(e)),II=e=>Rm(e,"_"),TI=e=>Rm(e,"-"),AI=e=>vf(Rm(e," ")),RI=e=>yf(e).map(vf).join(" ");var Fh={words:yf,upperFirst:vf,camelCase:Z5,pascalCase:EI,snakeCase:II,kebabCase:TI,sentenceCase:AI,titleCase:RI},sc={},FI={get exports(){return sc},set exports(e){sc=e}};FI.exports=function(e){return J5(DI(e),e)};sc.array=J5;function J5(e,t){var n=e.length,r=new Array(n),i={},o=n,a=MI(t),l=jI(e);for(t.forEach(function(d){if(!l.has(d[0])||!l.has(d[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)i[o]||u(e[o],o,new Set);return r;function u(d,c,h){if(h.has(d)){var g;try{g=", node was:"+JSON.stringify(d)}catch{g=""}throw new Error("Cyclic dependency"+g)}if(!l.has(d))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(d));if(!i[c]){i[c]=!0;var b=a.get(d)||new Set;if(b=Array.from(b),c=b.length){h.add(d);do{var v=b[--c];u(v,l.get(v),h)}while(c);h.delete(d)}r[--n]=d}}}function DI(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function MI(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function jI(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}const LI=Object.prototype.toString,zI=Error.prototype.toString,UI=RegExp.prototype.toString,BI=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",HI=/^Symbol\((.*)\)(.*)$/;function WI(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function E3(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return WI(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return BI.call(e).replace(HI,"Symbol($1)");const r=LI.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+zI.call(e)+"]":r==="RegExp"?UI.call(e):null}function ya(e,t){let n=E3(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let o=E3(this[r],t);return o!==null?o:i},2)}function X5(e){return e==null?[]:[].concat(e)}let YI=/\$\{\s*(\w+)\s*\}/g;class Vt extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(YI,(i,o)=>ya(n[o])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],X5(t).forEach(o=>{Vt.isError(o)?(this.errors.push(...o.errors),this.inner=this.inner.concat(o.inner.length?o.inner:o)):this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,Vt)}}let cr={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${ya(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${ya(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${ya(n,!0)}\``+i}},Pn={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},Ur={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},U1={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},B1={isValue:"${path} field must be ${value}"},H1={noUnknown:"${path} field has unspecified keys: ${unknown}"},VI={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:cr,string:Pn,number:Ur,date:U1,object:H1,array:VI,boolean:B1});const Fm=e=>e&&e.__isYupSchema__;class lc{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:o}=n,a=typeof r=="function"?r:(...l)=>l.every(u=>u===r);return new lc(t,(l,u)=>{var d;let c=a(...l)?i:o;return(d=c==null?void 0:c(u))!=null?d:u})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(o=>o.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!Fm(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const bu={context:"$",value:"."};function ew(e,t){return new Ci(e,t)}class Ci{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===bu.context,this.isValue=this.key[0]===bu.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?bu.context:this.isValue?bu.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&eo.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Ci.prototype.__isYupRef=!0;const hn=e=>e==null;function yo(e){function t({value:n,path:r="",options:i,originalValue:o,schema:a},l,u){const{name:d,test:c,params:h,message:g,skipAbsent:b}=e;let{parent:v,context:w,abortEarly:$=a.spec.abortEarly}=i;function m(z){return Ci.isRef(z)?z.getValue(n,v,w):z}function p(z={}){const ie=Object.assign({value:n,originalValue:o,label:a.spec.label,path:z.path||r,spec:a.spec},h,z.params);for(const j of Object.keys(ie))ie[j]=m(ie[j]);const M=new Vt(Vt.formatError(z.message||g,ie),n,ie.path,z.type||d);return M.params=ie,M}const x=$?l:u;let S={path:r,parent:v,type:d,from:i.from,createError:p,resolve:m,options:i,originalValue:o,schema:a};const P=z=>{Vt.isError(z)?x(z):z?u(null):x(p())},_=z=>{Vt.isError(z)?x(z):l(z)},T=b&&hn(n);if(!i.sync){try{Promise.resolve(T?!0:c.call(S,n,S)).then(P,_)}catch(z){_(z)}return}let R;try{var W;if(R=T?!0:c.call(S,n,S),typeof((W=R)==null?void 0:W.then)=="function")throw new Error(`Validation test of type: "${S.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(z){_(z);return}P(R)}return t.OPTIONS=e,t}function qI(e,t,n,r=n){let i,o,a;return t?(eo.forEach(t,(l,u,d)=>{let c=u?l.slice(1,l.length-1):l;e=e.resolve({context:r,parent:i,value:n});let h=e.type==="tuple",g=d?parseInt(c,10):0;if(e.innerType||h){if(h&&!d)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&g>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[g],e=h?e.spec.types[g]:e.innerType}if(!d){if(!e.fields||!e.fields[c])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);i=n,n=n&&n[c],e=e.fields[c]}o=c,a=u?"["+l+"]":"."+l}),{schema:e,parent:i,parentPath:o}):{parent:i,parentPath:t,schema:e}}class uc extends Set{describe(){const t=[];for(const n of this.values())t.push(Ci.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new uc(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function la(e,t=new Map){if(Fm(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=la(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,la(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(la(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=la(i,t)}else throw Error(`Unable to clone ${e}`);return n}class yn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new uc,this._blacklist=new uc,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(cr.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=la(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(o=>{t.tests.forEach(a=>{o.test(a.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,o)=>o.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",o=r._cast(t,n);if(n.assert!==!1&&!r.isType(o)){if(i&&hn(o))return o;let a=ya(t),l=ya(o);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(l!==a?`result of cast: ${l}`:""))}return o}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,o)=>o.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault()),r}_validate(t,n={},r,i){let{path:o,originalValue:a=t,strict:l=this.spec.strict}=n,u=t;l||(u=this._cast(u,Object.assign({assert:!1},n)));let d=[];for(let c of Object.values(this.internalTests))c&&d.push(c);this.runTests({path:o,value:u,originalValue:a,options:n,tests:d},r,c=>{if(c.length)return i(c,u);this.runTests({path:o,value:u,originalValue:a,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:o,value:a,originalValue:l,path:u,options:d}=t,c=w=>{i||(i=!0,n(w,a))},h=w=>{i||(i=!0,r(w,a))},g=o.length,b=[];if(!g)return h([]);let v={value:a,originalValue:l,path:u,options:d,schema:this};for(let w=0;w<o.length;w++){const $=o[w];$(v,c,function(p){p&&(b=b.concat(p)),--g<=0&&h(b)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:o,options:a}){const l=t??n;if(l==null)throw TypeError("Must include `key` or `index` for nested validations");const u=typeof l=="number";let d=r[l];const c=Object.assign({},a,{strict:!0,parent:r,value:d,originalValue:o[l],key:void 0,[u?"index":"key"]:l,path:u||l.includes(".")?`${i||""}[${d?l:`"${l}"`}]`:(i?`${i}.`:"")+t});return(h,g,b)=>this.resolve(c)._validate(d,c,g,b)}validate(t,n){let r=this.resolve(Object.assign({},n,{value:t}));return new Promise((i,o)=>r._validate(t,n,(a,l)=>{Vt.isError(a)&&(a.value=l),o(a)},(a,l)=>{a.length?o(new Vt(a,l)):i(l)}))}validateSync(t,n){let r=this.resolve(Object.assign({},n,{value:t})),i;return r._validate(t,Object.assign({},n,{sync:!0}),(o,a)=>{throw Vt.isError(o)&&(o.value=a),o},(o,a)=>{if(o.length)throw new Vt(o,t);i=a}),i}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(Vt.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(Vt.isError(r))return!1;throw r}}_getDefault(){let t=this.spec.default;return t==null?t:typeof t=="function"?t.call(this):la(t)}getDefault(t){return this.resolve(t||{})._getDefault()}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=yo({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=yo({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=cr.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=cr.notNull){return this.nullability(!1,t)}required(t=cr.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=cr.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=yo(n),o=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===n.name&&(o||a.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=X5(t).map(o=>new Ci(o));return i.forEach(o=>{o.isSibling&&r.deps.push(o.key)}),r.conditions.push(typeof n=="function"?new lc(i,n):lc.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=yo({message:t,name:"typeError",test(r){return!hn(r)&&!this.schema._typeCheck(r)?this.createError({params:{type:this.schema.type}}):!0}}),n}oneOf(t,n=cr.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=yo({message:n,name:"oneOf",skipAbsent:!0,test(i){let o=this.schema._whitelist,a=o.resolveAll(this.resolve);return a.includes(i)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:a}})}}),r}notOneOf(t,n=cr.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=yo({message:n,name:"notOneOf",test(i){let o=this.schema._blacklist,a=o.resolveAll(this.resolve);return a.includes(i)?this.createError({params:{values:Array.from(o).join(", "),resolved:a}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:o,nullable:a}=n.spec;return{meta:i,label:r,optional:o,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(u=>({name:u.OPTIONS.name,params:u.OPTIONS.params})).filter((u,d,c)=>c.findIndex(h=>h.name===u.name)===d)}}}yn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])yn.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:o,schema:a}=qI(this,t,n,r.context);return a[e](i&&i[o],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])yn.prototype[e]=yn.prototype.oneOf;for(const e of["not","nope"])yn.prototype[e]=yn.prototype.notOneOf;function tw(){return new nw}class nw extends yn{constructor(){super({type:"boolean",check(t){return t instanceof Boolean&&(t=t.valueOf()),typeof t=="boolean"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(r.spec.coerce&&!r.isType(t)){if(/^(true|1)$/i.test(String(t)))return!0;if(/^(false|0)$/i.test(String(t)))return!1}return t})})}isTrue(t=B1.isValue){return this.test({message:t,name:"is-value",exclusive:!0,params:{value:"true"},test(n){return hn(n)||n===!0}})}isFalse(t=B1.isValue){return this.test({message:t,name:"is-value",exclusive:!0,params:{value:"false"},test(n){return hn(n)||n===!1}})}default(t){return super.default(t)}defined(t){return super.defined(t)}optional(){return super.optional()}required(t){return super.required(t)}notRequired(){return super.notRequired()}nullable(){return super.nullable()}nonNullable(t){return super.nonNullable(t)}strip(t){return super.strip(t)}}tw.prototype=nw.prototype;let GI=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,QI=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,KI=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,ZI=e=>hn(e)||e===e.trim(),JI={}.toString();function Ot(){return new rw}class rw extends yn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===JI?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||cr.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=Pn.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=Pn.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=Pn.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,o;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:o}=n:i=n),this.test({name:o||"matches",message:i||Pn.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&r||a.search(t)!==-1})}email(t=Pn.email){return this.matches(GI,{name:"email",message:t,excludeEmptyString:!0})}url(t=Pn.url){return this.matches(QI,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=Pn.uuid){return this.matches(KI,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=Pn.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:ZI})}lowercase(t=Pn.lowercase){return this.transform(n=>hn(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>hn(n)||n===n.toLowerCase()})}uppercase(t=Pn.uppercase){return this.transform(n=>hn(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>hn(n)||n===n.toUpperCase()})}}Ot.prototype=rw.prototype;let XI=e=>e!=+e;function Dm(){return new iw}class iw extends yn{constructor(){super({type:"number",check(t){return t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&!XI(t)}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce)return t;let i=t;if(typeof i=="string"){if(i=i.replace(/\s/g,""),i==="")return NaN;i=+i}return r.isType(i)?i:parseFloat(i)})})}min(t,n=Ur.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r>=this.resolve(t)}})}max(t,n=Ur.max){return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(r){return r<=this.resolve(t)}})}lessThan(t,n=Ur.lessThan){return this.test({message:n,name:"max",exclusive:!0,params:{less:t},skipAbsent:!0,test(r){return r<this.resolve(t)}})}moreThan(t,n=Ur.moreThan){return this.test({message:n,name:"min",exclusive:!0,params:{more:t},skipAbsent:!0,test(r){return r>this.resolve(t)}})}positive(t=Ur.positive){return this.moreThan(0,t)}negative(t=Ur.negative){return this.lessThan(0,t)}integer(t=Ur.integer){return this.test({name:"integer",message:t,skipAbsent:!0,test:n=>Number.isInteger(n)})}truncate(){return this.transform(t=>hn(t)?t:t|0)}round(t){var n;let r=["ceil","floor","round","trunc"];if(t=((n=t)==null?void 0:n.toLowerCase())||"round",t==="trunc")return this.truncate();if(r.indexOf(t.toLowerCase())===-1)throw new TypeError("Only valid options for round() are: "+r.join(", "));return this.transform(i=>hn(i)?i:Math[t](i))}}Dm.prototype=iw.prototype;var eT=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function tT(e){var t=[1,4,5,6,7,10,11],n=0,r,i;if(i=eT.exec(e)){for(var o=0,a;a=t[o];++o)i[a]=+i[a]||0;i[2]=(+i[2]||1)-1,i[3]=+i[3]||1,i[7]=i[7]?String(i[7]).substr(0,3):0,(i[8]===void 0||i[8]==="")&&(i[9]===void 0||i[9]==="")?r=+new Date(i[1],i[2],i[3],i[4],i[5],i[6],i[7]):(i[8]!=="Z"&&i[9]!==void 0&&(n=i[10]*60+i[11],i[9]==="+"&&(n=0-n)),r=Date.UTC(i[1],i[2],i[3],i[4],i[5]+n,i[6],i[7]))}else r=Date.parse?Date.parse(e):NaN;return r}let nT=new Date(""),rT=e=>Object.prototype.toString.call(e)==="[object Date]";class xf extends yn{constructor(){super({type:"date",check(t){return rT(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)?t:(t=tT(t),isNaN(t)?xf.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Ci.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=U1.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=U1.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}xf.INVALID_DATE=nT;xf.prototype;function iT(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([a,l])=>`${a}-${l}`));function o(a,l){let u=eo.split(a)[0];r.add(u),i.has(`${l}-${u}`)||n.push([l,u])}for(const a of Object.keys(e)){let l=e[a];r.add(a),Ci.isRef(l)&&l.isSibling?o(l.path,a):Fm(l)&&"deps"in l&&l.deps.forEach(u=>o(u,a))}return sc.array(Array.from(r),n).reverse()}function I3(e,t){let n=1/0;return e.some((r,i)=>{var o;if((o=t.path)!=null&&o.includes(r))return n=i,!0}),n}function ow(e){return(t,n)=>I3(e,t)-I3(e,n)}const oT=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function cd(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=cd(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=cd(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(cd)}):"optional"in e?e.optional():e}const aT=(e,t)=>{const n=[...eo.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=eo.getter(eo.join(n),!0)(e);return!!(i&&r in i)};let T3=e=>Object.prototype.toString.call(e)==="[object Object]";function sT(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const lT=ow([]);function Bl(e){return new aw(e)}class aw extends yn{constructor(t){super({type:"object",check(n){return T3(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=lT,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault();if(!this._typeCheck(i))return i;let o=this.fields,a=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,l=[].concat(this._nodes,Object.keys(i).filter(h=>!this._nodes.includes(h))),u={},d=Object.assign({},n,{parent:u,__validating:n.__validating||!1}),c=!1;for(const h of l){let g=o[h],b=h in i;if(g){let v,w=i[h];d.path=(n.path?`${n.path}.`:"")+h,g=g.resolve({value:w,context:n.context,parent:u});let $=g instanceof yn?g.spec:void 0,m=$==null?void 0:$.strict;if($!=null&&$.strip){c=c||h in i;continue}v=!n.__validating||!m?g.cast(i[h],d):i[h],v!==void 0&&(u[h]=v)}else b&&!a&&(u[h]=i[h]);(b!==h in u||u[h]!==i[h])&&(c=!0)}return c?u:i}_validate(t,n={},r,i){let{from:o=[],originalValue:a=t,recursive:l=this.spec.recursive}=n;n.from=[{schema:this,value:a},...o],n.__validating=!0,n.originalValue=a,super._validate(t,n,r,(u,d)=>{if(!l||!T3(d)){i(u,d);return}a=a||d;let c=[];for(let h of this._nodes){let g=this.fields[h];!g||Ci.isRef(g)||c.push(g.asNestedTest({options:n,key:h,parent:d,parentPath:n.path,originalParent:a}))}this.runTests({tests:c,value:d,originalValue:a,options:n},r,h=>{i(h.sort(this._sortErrors).concat(u),d)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,o]of Object.entries(this.fields)){const a=r[i];r[i]=a===void 0?o:a}return n.withMutation(i=>i.setFields(r,this._excludedEdges))}_getDefault(){if("default"in this.spec)return super._getDefault();if(!this._nodes.length)return;let t={};return this._nodes.forEach(n=>{const r=this.fields[n];t[n]=r&&"getDefault"in r?r.getDefault():void 0}),t}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=iT(t,n),r._sortErrors=ow(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return cd(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n)}omit(t){const n=Object.assign({},this.fields);for(const r of t)delete n[r];return this.setFields(n)}from(t,n,r){let i=eo.getter(t,!0);return this.transform(o=>{if(!o)return o;let a=o;return aT(o,t)&&(a=Object.assign({},o),r||delete a[t],a[n]=i(o)),a})}json(){return this.transform(oT)}noUnknown(t=!0,n=H1.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const o=sT(this.schema,i);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=H1.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(Fh.camelCase)}snakeCase(){return this.transformKeys(Fh.snakeCase)}constantCase(){return this.transformKeys(t=>Fh.snakeCase(t).toUpperCase())}describe(t){let n=super.describe(t);n.fields={};for(const[i,o]of Object.entries(this.fields)){var r;let a=t;(r=a)!=null&&r.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[i]})),n.fields[i]=o.describe(a)}return n}}Bl.prototype=aw.prototype;var Hl=e=>e.type==="checkbox",ua=e=>e instanceof Date,Tt=e=>e==null;const sw=e=>typeof e=="object";var ct=e=>!Tt(e)&&!Array.isArray(e)&&sw(e)&&!ua(e),uT=e=>ct(e)&&e.target?Hl(e.target)?e.target.checked:e.target.value:e,dT=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,cT=(e,t)=>e.has(dT(t)),fT=e=>{const t=e.constructor&&e.constructor.prototype;return ct(t)&&t.hasOwnProperty("isPrototypeOf")},Mm=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Wi(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Mm&&(e instanceof Blob||e instanceof FileList))&&(n||ct(e)))if(t=n?[]:{},!Array.isArray(e)&&!fT(e))t=e;else for(const r in e)t[r]=Wi(e[r]);else return e;return t}var Wl=e=>Array.isArray(e)?e.filter(Boolean):[],it=e=>e===void 0,ce=(e,t,n)=>{if(!t||!ct(e))return n;const r=Wl(t.split(/[,[\].]+?/)).reduce((i,o)=>Tt(i)?i:i[o],e);return it(r)||r===e?it(e[t])?n:e[t]:r};const A3={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},En={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},or={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ne.createContext(null);var hT=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const a=o;return t._proxyFormState[a]!==En.all&&(t._proxyFormState[a]=!r||En.all),n&&(n[a]=!0),e[a]}});return i},an=e=>ct(e)&&!Object.keys(e).length,pT=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return an(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(a=>t[a]===(!r||En.all))},Dh=e=>Array.isArray(e)?e:[e];function gT(e){const t=ne.useRef(e);t.current=e,ne.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var Qn=e=>typeof e=="string",mT=(e,t,n,r,i)=>Qn(e)?(r&&t.watch.add(e),ce(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),ce(n,o))):(r&&(t.watchAll=!0),n),jm=e=>/^\w*$/.test(e),lw=e=>Wl(e.replace(/["|']|\]/g,"").split(/\.|\[/));function Le(e,t,n){let r=-1;const i=jm(t)?[t]:lw(t),o=i.length,a=o-1;for(;++r<o;){const l=i[r];let u=n;if(r!==a){const d=e[l];u=ct(d)||Array.isArray(d)?d:isNaN(+i[r+1])?{}:[]}e[l]=u,e=e[l]}return e}var uw=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{};const W1=(e,t,n)=>{for(const r of n||Object.keys(e)){const i=ce(e,r);if(i){const{_f:o,...a}=i;if(o&&t(o.name)){if(o.ref.focus){o.ref.focus();break}else if(o.refs&&o.refs[0].focus){o.refs[0].focus();break}}else ct(a)&&W1(a,t)}}};var R3=e=>({isOnSubmit:!e||e===En.onSubmit,isOnBlur:e===En.onBlur,isOnChange:e===En.onChange,isOnAll:e===En.all,isOnTouch:e===En.onTouched}),F3=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),yT=(e,t,n)=>{const r=Wl(ce(e,n));return Le(r,"root",t[n]),Le(e,n,r),e},va=e=>typeof e=="boolean",Lm=e=>e.type==="file",Zr=e=>typeof e=="function",dc=e=>{if(!Mm)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},fd=e=>Qn(e),zm=e=>e.type==="radio",cc=e=>e instanceof RegExp;const D3={value:!1,isValid:!1},M3={value:!0,isValid:!0};var dw=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!it(e[0].attributes.value)?it(e[0].value)||e[0].value===""?M3:{value:e[0].value,isValid:!0}:M3:D3}return D3};const j3={isValid:!1,value:null};var cw=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,j3):j3;function L3(e,t,n="validate"){if(fd(e)||Array.isArray(e)&&e.every(fd)||va(e)&&!e)return{type:n,message:fd(e)?e:"",ref:t}}var vo=e=>ct(e)&&!cc(e)?e:{value:e,message:""},z3=async(e,t,n,r,i)=>{const{ref:o,refs:a,required:l,maxLength:u,minLength:d,min:c,max:h,pattern:g,validate:b,name:v,valueAsNumber:w,mount:$,disabled:m}=e._f,p=ce(t,v);if(!$||m)return{};const x=a?a[0]:o,S=M=>{r&&x.reportValidity&&(x.setCustomValidity(va(M)?"":M||""),x.reportValidity())},P={},_=zm(o),T=Hl(o),R=_||T,W=(w||Lm(o))&&it(o.value)&&it(p)||dc(o)&&o.value===""||p===""||Array.isArray(p)&&!p.length,z=uw.bind(null,v,n,P),ie=(M,j,J,F=or.maxLength,X=or.minLength)=>{const te=M?j:J;P[v]={type:M?F:X,message:te,ref:o,...z(M?F:X,te)}};if(i?!Array.isArray(p)||!p.length:l&&(!R&&(W||Tt(p))||va(p)&&!p||T&&!dw(a).isValid||_&&!cw(a).isValid)){const{value:M,message:j}=fd(l)?{value:!!l,message:l}:vo(l);if(M&&(P[v]={type:or.required,message:j,ref:x,...z(or.required,j)},!n))return S(j),P}if(!W&&(!Tt(c)||!Tt(h))){let M,j;const J=vo(h),F=vo(c);if(!Tt(p)&&!isNaN(p)){const X=o.valueAsNumber||p&&+p;Tt(J.value)||(M=X>J.value),Tt(F.value)||(j=X<F.value)}else{const X=o.valueAsDate||new Date(p),te=E=>new Date(new Date().toDateString()+" "+E),L=o.type=="time",N=o.type=="week";Qn(J.value)&&p&&(M=L?te(p)>te(J.value):N?p>J.value:X>new Date(J.value)),Qn(F.value)&&p&&(j=L?te(p)<te(F.value):N?p<F.value:X<new Date(F.value))}if((M||j)&&(ie(!!M,J.message,F.message,or.max,or.min),!n))return S(P[v].message),P}if((u||d)&&!W&&(Qn(p)||i&&Array.isArray(p))){const M=vo(u),j=vo(d),J=!Tt(M.value)&&p.length>+M.value,F=!Tt(j.value)&&p.length<+j.value;if((J||F)&&(ie(J,M.message,j.message),!n))return S(P[v].message),P}if(g&&!W&&Qn(p)){const{value:M,message:j}=vo(g);if(cc(M)&&!p.match(M)&&(P[v]={type:or.pattern,message:j,ref:o,...z(or.pattern,j)},!n))return S(j),P}if(b){if(Zr(b)){const M=await b(p,t),j=L3(M,x);if(j&&(P[v]={...j,...z(or.validate,j.message)},!n))return S(j.message),P}else if(ct(b)){let M={};for(const j in b){if(!an(M)&&!n)break;const J=L3(await b[j](p,t),x,j);J&&(M={...J,...z(j,J.message)},S(J.message),n&&(P[v]=M))}if(!an(M)&&(P[v]={ref:x,...M},!n))return P}}return S(!0),P};function vT(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=it(e)?r++:e[t[r++]];return e}function xT(e){for(const t in e)if(!it(e[t]))return!1;return!0}function yt(e,t){const n=Array.isArray(t)?t:jm(t)?[t]:lw(t),r=n.length===1?e:vT(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(ct(r)&&an(r)||Array.isArray(r)&&xT(r))&&yt(e,n.slice(0,-1)),e}function Mh(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var fc=e=>Tt(e)||!sw(e);function Qi(e,t){if(fc(e)||fc(t))return e===t;if(ua(e)&&ua(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const a=t[i];if(ua(o)&&ua(a)||ct(o)&&ct(a)||Array.isArray(o)&&Array.isArray(a)?!Qi(o,a):o!==a)return!1}}return!0}var fw=e=>e.type==="select-multiple",bT=e=>zm(e)||Hl(e),jh=e=>dc(e)&&e.isConnected,hw=e=>{for(const t in e)if(Zr(e[t]))return!0;return!1};function hc(e,t={}){const n=Array.isArray(e);if(ct(e)||n)for(const r in e)Array.isArray(e[r])||ct(e[r])&&!hw(e[r])?(t[r]=Array.isArray(e[r])?[]:{},hc(e[r],t[r])):Tt(e[r])||(t[r]=!0);return t}function pw(e,t,n){const r=Array.isArray(e);if(ct(e)||r)for(const i in e)Array.isArray(e[i])||ct(e[i])&&!hw(e[i])?it(t)||fc(n[i])?n[i]=Array.isArray(e[i])?hc(e[i],[]):{...hc(e[i])}:pw(e[i],Tt(t)?{}:t[i],n[i]):n[i]=!Qi(e[i],t[i]);return n}var Lh=(e,t)=>pw(e,t,hc(t)),gw=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>it(e)?e:t?e===""?NaN:e&&+e:n&&Qn(e)?new Date(e):r?r(e):e;function zh(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Lm(t)?t.files:zm(t)?cw(e.refs).value:fw(t)?[...t.selectedOptions].map(({value:n})=>n):Hl(t)?dw(e.refs).value:gw(it(t.value)?e.ref.value:t.value,e)}var $T=(e,t,n,r)=>{const i={};for(const o of e){const a=ce(t,o);a&&Le(i,o,a._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},ls=e=>it(e)?e:cc(e)?e.source:ct(e)?cc(e.value)?e.value.source:e.value:e,wT=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function U3(e,t,n){const r=ce(e,n);if(r||jm(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),a=ce(t,o),l=ce(e,o);if(a&&!Array.isArray(a)&&n!==o)return{name:n};if(l&&l.type)return{name:o,error:l};i.pop()}return{name:n}}var ST=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,CT=(e,t)=>!Wl(ce(e,t)).length&&yt(e,t);const PT={mode:En.onSubmit,reValidateMode:En.onChange,shouldFocusError:!0};function OT(e={},t){let n={...PT,...e},r={submitCount:0,isDirty:!1,isLoading:Zr(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},o=ct(n.defaultValues)||ct(n.values)?Wi(n.defaultValues||n.values)||{}:{},a=n.shouldUnregister?{}:Wi(o),l={action:!1,mount:!1,watch:!1},u={mount:new Set,unMount:new Set,array:new Set,watch:new Set},d,c=0;const h={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={values:Mh(),array:Mh(),state:Mh()},b=e.resetOptions&&e.resetOptions.keepDirtyValues,v=R3(n.mode),w=R3(n.reValidateMode),$=n.criteriaMode===En.all,m=O=>I=>{clearTimeout(c),c=setTimeout(O,I)},p=async O=>{if(h.isValid||O){const I=n.resolver?an((await W()).errors):await ie(i,!0);I!==r.isValid&&g.state.next({isValid:I})}},x=O=>h.isValidating&&g.state.next({isValidating:O}),S=(O,I=[],A,re,q=!0,V=!0)=>{if(re&&A){if(l.action=!0,V&&Array.isArray(ce(i,O))){const se=A(ce(i,O),re.argA,re.argB);q&&Le(i,O,se)}if(V&&Array.isArray(ce(r.errors,O))){const se=A(ce(r.errors,O),re.argA,re.argB);q&&Le(r.errors,O,se),CT(r.errors,O)}if(h.touchedFields&&V&&Array.isArray(ce(r.touchedFields,O))){const se=A(ce(r.touchedFields,O),re.argA,re.argB);q&&Le(r.touchedFields,O,se)}h.dirtyFields&&(r.dirtyFields=Lh(o,a)),g.state.next({name:O,isDirty:j(O,I),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Le(a,O,I)},P=(O,I)=>{Le(r.errors,O,I),g.state.next({errors:r.errors})},_=(O,I,A,re)=>{const q=ce(i,O);if(q){const V=ce(a,O,it(A)?ce(o,O):A);it(V)||re&&re.defaultChecked||I?Le(a,O,I?V:zh(q._f)):X(O,V),l.mount&&p()}},T=(O,I,A,re,q)=>{let V=!1,se=!1;const ve={name:O};if(!A||re){h.isDirty&&(se=r.isDirty,r.isDirty=ve.isDirty=j(),V=se!==ve.isDirty);const ae=Qi(ce(o,O),I);se=ce(r.dirtyFields,O),ae?yt(r.dirtyFields,O):Le(r.dirtyFields,O,!0),ve.dirtyFields=r.dirtyFields,V=V||h.dirtyFields&&se!==!ae}if(A){const ae=ce(r.touchedFields,O);ae||(Le(r.touchedFields,O,A),ve.touchedFields=r.touchedFields,V=V||h.touchedFields&&ae!==A)}return V&&q&&g.state.next(ve),V?ve:{}},R=(O,I,A,re)=>{const q=ce(r.errors,O),V=h.isValid&&va(I)&&r.isValid!==I;if(e.delayError&&A?(d=m(()=>P(O,A)),d(e.delayError)):(clearTimeout(c),d=null,A?Le(r.errors,O,A):yt(r.errors,O)),(A?!Qi(q,A):q)||!an(re)||V){const se={...re,...V&&va(I)?{isValid:I}:{},errors:r.errors,name:O};r={...r,...se},g.state.next(se)}x(!1)},W=async O=>n.resolver(a,n.context,$T(O||u.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),z=async O=>{const{errors:I}=await W();if(O)for(const A of O){const re=ce(I,A);re?Le(r.errors,A,re):yt(r.errors,A)}else r.errors=I;return I},ie=async(O,I,A={valid:!0})=>{for(const re in O){const q=O[re];if(q){const{_f:V,...se}=q;if(V){const ve=u.array.has(V.name),ae=await z3(q,a,$,n.shouldUseNativeValidation&&!I,ve);if(ae[V.name]&&(A.valid=!1,I))break;!I&&(ce(ae,V.name)?ve?yT(r.errors,ae,V.name):Le(r.errors,V.name,ae[V.name]):yt(r.errors,V.name))}se&&await ie(se,I,A)}}return A.valid},M=()=>{for(const O of u.unMount){const I=ce(i,O);I&&(I._f.refs?I._f.refs.every(A=>!jh(A)):!jh(I._f.ref))&&k(O)}u.unMount=new Set},j=(O,I)=>(O&&I&&Le(a,O,I),!Qi(U(),o)),J=(O,I,A)=>mT(O,u,{...l.mount?a:it(I)?o:Qn(O)?{[O]:I}:I},A,I),F=O=>Wl(ce(l.mount?a:o,O,e.shouldUnregister?ce(o,O,[]):[])),X=(O,I,A={})=>{const re=ce(i,O);let q=I;if(re){const V=re._f;V&&(!V.disabled&&Le(a,O,gw(I,V)),q=dc(V.ref)&&Tt(I)?"":I,fw(V.ref)?[...V.ref.options].forEach(se=>se.selected=q.includes(se.value)):V.refs?Hl(V.ref)?V.refs.length>1?V.refs.forEach(se=>(!se.defaultChecked||!se.disabled)&&(se.checked=Array.isArray(q)?!!q.find(ve=>ve===se.value):q===se.value)):V.refs[0]&&(V.refs[0].checked=!!q):V.refs.forEach(se=>se.checked=se.value===q):Lm(V.ref)?V.ref.value="":(V.ref.value=q,V.ref.type||g.values.next({name:O,values:{...a}})))}(A.shouldDirty||A.shouldTouch)&&T(O,q,A.shouldTouch,A.shouldDirty,!0),A.shouldValidate&&E(O)},te=(O,I,A)=>{for(const re in I){const q=I[re],V=`${O}.${re}`,se=ce(i,V);(u.array.has(O)||!fc(q)||se&&!se._f)&&!ua(q)?te(V,q,A):X(V,q,A)}},L=(O,I,A={})=>{const re=ce(i,O),q=u.array.has(O),V=Wi(I);Le(a,O,V),q?(g.array.next({name:O,values:{...a}}),(h.isDirty||h.dirtyFields)&&A.shouldDirty&&g.state.next({name:O,dirtyFields:Lh(o,a),isDirty:j(O,V)})):re&&!re._f&&!Tt(V)?te(O,V,A):X(O,V,A),F3(O,u)&&g.state.next({...r}),g.values.next({name:O,values:{...a}}),!l.mount&&t()},N=async O=>{const I=O.target;let A=I.name,re=!0;const q=ce(i,A),V=()=>I.type?zh(q._f):uT(O);if(q){let se,ve;const ae=V(),Ae=O.type===A3.BLUR||O.type===A3.FOCUS_OUT,Ja=!wT(q._f)&&!n.resolver&&!ce(r.errors,A)&&!q._f.deps||ST(Ae,ce(r.touchedFields,A),r.isSubmitted,w,v),Pi=F3(A,u,Ae);Le(a,A,ae),Ae?(q._f.onBlur&&q._f.onBlur(O),d&&d(0)):q._f.onChange&&q._f.onChange(O);const rn=T(A,ae,Ae,!1),Y6=!an(rn)||Pi;if(!Ae&&g.values.next({name:A,type:O.type,values:{...a}}),Ja)return h.isValid&&p(),Y6&&g.state.next({name:A,...Pi?{}:rn});if(!Ae&&Pi&&g.state.next({...r}),x(!0),n.resolver){const{errors:Iy}=await W([A]),V6=U3(r.errors,i,A),Ty=U3(Iy,i,V6.name||A);se=Ty.error,A=Ty.name,ve=an(Iy)}else se=(await z3(q,a,$,n.shouldUseNativeValidation))[A],re=isNaN(ae)||ae===ce(a,A,ae),re&&(se?ve=!1:h.isValid&&(ve=await ie(i,!0)));re&&(q._f.deps&&E(q._f.deps),R(A,ve,se,rn))}},E=async(O,I={})=>{let A,re;const q=Dh(O);if(x(!0),n.resolver){const V=await z(it(O)?O:q);A=an(V),re=O?!q.some(se=>ce(V,se)):A}else O?(re=(await Promise.all(q.map(async V=>{const se=ce(i,V);return await ie(se&&se._f?{[V]:se}:se)}))).every(Boolean),!(!re&&!r.isValid)&&p()):re=A=await ie(i);return g.state.next({...!Qn(O)||h.isValid&&A!==r.isValid?{}:{name:O},...n.resolver||!O?{isValid:A}:{},errors:r.errors,isValidating:!1}),I.shouldFocus&&!re&&W1(i,V=>V&&ce(r.errors,V),O?q:u.mount),re},U=O=>{const I={...o,...l.mount?a:{}};return it(O)?I:Qn(O)?ce(I,O):O.map(A=>ce(I,A))},D=(O,I)=>({invalid:!!ce((I||r).errors,O),isDirty:!!ce((I||r).dirtyFields,O),isTouched:!!ce((I||r).touchedFields,O),error:ce((I||r).errors,O)}),H=O=>{O&&Dh(O).forEach(I=>yt(r.errors,I)),g.state.next({errors:O?r.errors:{}})},Y=(O,I,A)=>{const re=(ce(i,O,{_f:{}})._f||{}).ref;Le(r.errors,O,{...I,ref:re}),g.state.next({name:O,errors:r.errors,isValid:!1}),A&&A.shouldFocus&&re&&re.focus&&re.focus()},oe=(O,I)=>Zr(O)?g.values.subscribe({next:A=>O(J(void 0,I),A)}):J(O,I,!0),k=(O,I={})=>{for(const A of O?Dh(O):u.mount)u.mount.delete(A),u.array.delete(A),I.keepValue||(yt(i,A),yt(a,A)),!I.keepError&&yt(r.errors,A),!I.keepDirty&&yt(r.dirtyFields,A),!I.keepTouched&&yt(r.touchedFields,A),!n.shouldUnregister&&!I.keepDefaultValue&&yt(o,A);g.values.next({values:{...a}}),g.state.next({...r,...I.keepDirty?{isDirty:j()}:{}}),!I.keepIsValid&&p()},de=(O,I={})=>{let A=ce(i,O);const re=va(I.disabled);return Le(i,O,{...A||{},_f:{...A&&A._f?A._f:{ref:{name:O}},name:O,mount:!0,...I}}),u.mount.add(O),A?re&&Le(a,O,I.disabled?void 0:ce(a,O,zh(A._f))):_(O,!0,I.value),{...re?{disabled:I.disabled}:{},...n.shouldUseNativeValidation?{required:!!I.required,min:ls(I.min),max:ls(I.max),minLength:ls(I.minLength),maxLength:ls(I.maxLength),pattern:ls(I.pattern)}:{},name:O,onChange:N,onBlur:N,ref:q=>{if(q){de(O,I),A=ce(i,O);const V=it(q.value)&&q.querySelectorAll&&q.querySelectorAll("input,select,textarea")[0]||q,se=bT(V),ve=A._f.refs||[];if(se?ve.find(ae=>ae===V):V===A._f.ref)return;Le(i,O,{_f:{...A._f,...se?{refs:[...ve.filter(jh),V,...Array.isArray(ce(o,O))?[{}]:[]],ref:{type:V.type,name:O}}:{ref:V}}}),_(O,!1,void 0,V)}else A=ce(i,O,{}),A._f&&(A._f.mount=!1),(n.shouldUnregister||I.shouldUnregister)&&!(cT(u.array,O)&&l.action)&&u.unMount.add(O)}}},Z=()=>n.shouldFocusError&&W1(i,O=>O&&ce(r.errors,O),u.mount),Ce=(O,I)=>async A=>{A&&(A.preventDefault&&A.preventDefault(),A.persist&&A.persist());let re=Wi(a);if(g.state.next({isSubmitting:!0}),n.resolver){const{errors:q,values:V}=await W();r.errors=q,re=V}else await ie(i);yt(r.errors,"root"),an(r.errors)?(g.state.next({errors:{}}),await O(re,A)):(I&&await I({...r.errors},A),Z(),setTimeout(Z)),g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:an(r.errors),submitCount:r.submitCount+1,errors:r.errors})},me=(O,I={})=>{ce(i,O)&&(it(I.defaultValue)?L(O,ce(o,O)):(L(O,I.defaultValue),Le(o,O,I.defaultValue)),I.keepTouched||yt(r.touchedFields,O),I.keepDirty||(yt(r.dirtyFields,O),r.isDirty=I.defaultValue?j(O,ce(o,O)):j()),I.keepError||(yt(r.errors,O),h.isValid&&p()),g.state.next({...r}))},ge=(O,I={})=>{const A=O||o,re=Wi(A),q=O&&!an(O)?re:o;if(I.keepDefaultValues||(o=A),!I.keepValues){if(I.keepDirtyValues||b)for(const V of u.mount)ce(r.dirtyFields,V)?Le(q,V,ce(a,V)):L(V,ce(q,V));else{if(Mm&&it(O))for(const V of u.mount){const se=ce(i,V);if(se&&se._f){const ve=Array.isArray(se._f.refs)?se._f.refs[0]:se._f.ref;if(dc(ve)){const ae=ve.closest("form");if(ae){ae.reset();break}}}}i={}}a=e.shouldUnregister?I.keepDefaultValues?Wi(o):{}:re,g.array.next({values:{...q}}),g.values.next({values:{...q}})}u={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&t(),l.mount=!h.isValid||!!I.keepIsValid,l.watch=!!e.shouldUnregister,g.state.next({submitCount:I.keepSubmitCount?r.submitCount:0,isDirty:I.keepDirty?r.isDirty:!!(I.keepDefaultValues&&!Qi(O,o)),isSubmitted:I.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:I.keepDirtyValues?r.dirtyFields:I.keepDefaultValues&&O?Lh(o,O):{},touchedFields:I.keepTouched?r.touchedFields:{},errors:I.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},he=(O,I)=>ge(Zr(O)?O(a):O,I);return{control:{register:de,unregister:k,getFieldState:D,_executeSchema:W,_getWatch:J,_getDirty:j,_updateValid:p,_removeUnmounted:M,_updateFieldArray:S,_getFieldArray:F,_reset:ge,_resetDefaultValues:()=>Zr(n.defaultValues)&&n.defaultValues().then(O=>{he(O,n.resetOptions),g.state.next({isLoading:!1})}),_updateFormState:O=>{r={...r,...O}},_subjects:g,_proxyFormState:h,get _fields(){return i},get _formValues(){return a},get _state(){return l},set _state(O){l=O},get _defaultValues(){return o},get _names(){return u},set _names(O){u=O},get _formState(){return r},set _formState(O){r=O},get _options(){return n},set _options(O){n={...n,...O}}},trigger:E,register:de,handleSubmit:Ce,watch:oe,setValue:L,getValues:U,reset:he,resetField:me,clearErrors:H,unregister:k,setError:Y,setFocus:(O,I={})=>{const A=ce(i,O),re=A&&A._f;if(re){const q=re.refs?re.refs[0]:re.ref;q.focus&&(q.focus(),I.shouldSelect&&q.select())}},getFieldState:D}}function bf(e={}){const t=ne.useRef(),[n,r]=ne.useState({isDirty:!1,isValidating:!1,isLoading:Zr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Zr(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...OT(e,()=>r(o=>({...o}))),formState:n});const i=t.current.control;return i._options=e,gT({subject:i._subjects.state,next:o=>{pT(o,i._proxyFormState,i._updateFormState,!0)&&r({...i._formState})}}),ne.useEffect(()=>{e.values&&!Qi(e.values,i._defaultValues)?i._reset(e.values,i._options.resetOptions):i._resetDefaultValues()},[e.values,i]),ne.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=hT(n,i),t.current}var B3=function(e,t,n){if(e&&"reportValidity"in e){var r=ce(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},mw=function(e,t){var n=function(i){var o=t.fields[i];o&&o.ref&&"reportValidity"in o.ref?B3(o.ref,i,e):o.refs&&o.refs.forEach(function(a){return B3(a,i,e)})};for(var r in t.fields)n(r)},_T=function(e,t){t.shouldUseNativeValidation&&mw(e,t);var n={};for(var r in e){var i=ce(t.fields,r);Le(n,r,Object.assign(e[r]||{},{ref:i&&i.ref}))}return n},$f=function(e,t,n){return t===void 0&&(t={}),n===void 0&&(n={}),function(r,i,o){try{return Promise.resolve(function(a,l){try{var u=(t.context,Promise.resolve(e[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},t,{context:i}))).then(function(d){return o.shouldUseNativeValidation&&mw({},o),{values:n.raw?r:d,errors:{}}}))}catch(d){return l(d)}return u&&u.then?u.then(void 0,l):u}(0,function(a){if(!a.inner)throw a;return{values:{},errors:_T((l=a,u=!o.shouldUseNativeValidation&&o.criteriaMode==="all",(l.inner||[]).reduce(function(d,c){if(d[c.path]||(d[c.path]={message:c.message,type:c.type}),u){var h=d[c.path].types,g=h&&h[c.type];d[c.path]=uw(c.path,u,d,c.type,g?[].concat(g,c.message):c.message)}return d},{})),o)};var l,u}))}catch(a){return Promise.reject(a)}}};class Va{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.push(t),this.onSubscribe(),()=>{this.listeners=this.listeners.filter(n=>n!==t),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}const gl=typeof window>"u"||"Deno"in window;function sn(){}function kT(e,t){return typeof e=="function"?e(t):e}function Y1(e){return typeof e=="number"&&e>=0&&e!==1/0}function yw(e,t){return Math.max(e+(t||0)-Date.now(),0)}function ks(e,t,n){return Yl(e)?typeof t=="function"?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function NT(e,t,n){return Yl(e)?typeof t=="function"?{...n,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:typeof e=="function"?{...t,mutationFn:e}:{...e}}function Wr(e,t,n){return Yl(e)?[{...t,queryKey:e},n]:[e||{},t]}function H3(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:a,stale:l}=e;if(Yl(a)){if(r){if(t.queryHash!==Um(a,t.options))return!1}else if(!pc(t.queryKey,a))return!1}if(n!=="all"){const u=t.isActive();if(n==="active"&&!u||n==="inactive"&&u)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||typeof i<"u"&&i!==t.state.fetchStatus||o&&!o(t))}function W3(e,t){const{exact:n,fetching:r,predicate:i,mutationKey:o}=e;if(Yl(o)){if(!t.options.mutationKey)return!1;if(n){if(Ki(t.options.mutationKey)!==Ki(o))return!1}else if(!pc(t.options.mutationKey,o))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function Um(e,t){return((t==null?void 0:t.queryKeyHashFn)||Ki)(e)}function Ki(e){return JSON.stringify(e,(t,n)=>q1(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function pc(e,t){return vw(e,t)}function vw(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!vw(e[n],t[n])):!1}function xw(e,t){if(e===t)return e;const n=Y3(e)&&Y3(t);if(n||q1(e)&&q1(t)){const r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),o=i.length,a=n?[]:{};let l=0;for(let u=0;u<o;u++){const d=n?u:i[u];a[d]=xw(e[d],t[d]),a[d]===e[d]&&l++}return r===o&&l===r?e:a}return t}function V1(e,t){if(e&&!t||t&&!e)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function Y3(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function q1(e){if(!V3(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!V3(n)||!n.hasOwnProperty("isPrototypeOf"))}function V3(e){return Object.prototype.toString.call(e)==="[object Object]"}function Yl(e){return Array.isArray(e)}function bw(e){return new Promise(t=>{setTimeout(t,e)})}function q3(e){bw(0).then(e)}function ET(){if(typeof AbortController=="function")return new AbortController}function G1(e,t,n){return n.isDataEqual!=null&&n.isDataEqual(e,t)?e:typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?xw(e,t):t}class IT extends Va{constructor(){super(),this.setup=t=>{if(!gl&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(t){this.focused=t,t&&this.onFocus()}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const gc=new IT;class TT extends Va{constructor(){super(),this.setup=t=>{if(!gl&&window.addEventListener){const n=()=>t();return window.addEventListener("online",n,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(t){this.online=t,t&&this.onOnline()}onOnline(){this.listeners.forEach(t=>{t()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const mc=new TT;function AT(e){return Math.min(1e3*2**e,3e4)}function wf(e){return(e??"online")==="online"?mc.isOnline():!0}class $w{constructor(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}}function hd(e){return e instanceof $w}function ww(e){let t=!1,n=0,r=!1,i,o,a;const l=new Promise(($,m)=>{o=$,a=m}),u=$=>{r||(b(new $w($)),e.abort==null||e.abort())},d=()=>{t=!0},c=()=>{t=!1},h=()=>!gc.isFocused()||e.networkMode!=="always"&&!mc.isOnline(),g=$=>{r||(r=!0,e.onSuccess==null||e.onSuccess($),i==null||i(),o($))},b=$=>{r||(r=!0,e.onError==null||e.onError($),i==null||i(),a($))},v=()=>new Promise($=>{i=m=>{const p=r||!h();return p&&$(m),p},e.onPause==null||e.onPause()}).then(()=>{i=void 0,r||e.onContinue==null||e.onContinue()}),w=()=>{if(r)return;let $;try{$=e.fn()}catch(m){$=Promise.reject(m)}Promise.resolve($).then(g).catch(m=>{var p,x;if(r)return;const S=(p=e.retry)!=null?p:3,P=(x=e.retryDelay)!=null?x:AT,_=typeof P=="function"?P(n,m):P,T=S===!0||typeof S=="number"&&n<S||typeof S=="function"&&S(n,m);if(t||!T){b(m);return}n++,e.onFail==null||e.onFail(n,m),bw(_).then(()=>{if(h())return v()}).then(()=>{t?b(m):w()})})};return wf(e.networkMode)?w():v().then(w),{promise:l,cancel:u,continue:()=>(i==null?void 0:i())?l:Promise.resolve(),cancelRetry:d,continueRetry:c}}const Bm=console;function RT(){let e=[],t=0,n=c=>{c()},r=c=>{c()};const i=c=>{let h;t++;try{h=c()}finally{t--,t||l()}return h},o=c=>{t?e.push(c):q3(()=>{n(c)})},a=c=>(...h)=>{o(()=>{c(...h)})},l=()=>{const c=e;e=[],c.length&&q3(()=>{r(()=>{c.forEach(h=>{n(h)})})})};return{batch:i,batchCalls:a,schedule:o,setNotifyFunction:c=>{n=c},setBatchNotifyFunction:c=>{r=c}}}const Je=RT();class Sw{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Y1(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,t??(gl?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class FT extends Sw{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||Bm,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||DT(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(t,n){const r=G1(this.state.data,t,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){this.dispatch({type:"setState",state:t,setStateOptions:n})}cancel(t){var n;const r=this.promise;return(n=this.retryer)==null||n.cancel(t),r?r.then(sn).catch(sn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!yw(this.state.dataUpdatedAt,t)}onFocus(){var t;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}onOnline(){var t;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}addObserver(t){this.observers.indexOf(t)===-1&&(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.indexOf(t)!==-1&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,n){var r,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var o;return(o=this.retryer)==null||o.continueRetry(),this.promise}}if(t&&this.setOptions(t),!this.options.queryFn){const b=this.observers.find(v=>v.options.queryFn);b&&this.setOptions(b.options)}Array.isArray(this.options.queryKey);const a=ET(),l={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},u=b=>{Object.defineProperty(b,"signal",{enumerable:!0,get:()=>{if(a)return this.abortSignalConsumed=!0,a.signal}})};u(l);const d=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(l)):Promise.reject("Missing queryFn"),c={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:d};if(u(c),(r=this.options.behavior)==null||r.onFetch(c),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=c.fetchOptions)==null?void 0:i.meta)){var h;this.dispatch({type:"fetch",meta:(h=c.fetchOptions)==null?void 0:h.meta})}const g=b=>{if(hd(b)&&b.silent||this.dispatch({type:"error",error:b}),!hd(b)){var v,w,$,m;(v=(w=this.cache.config).onError)==null||v.call(w,b,this),($=(m=this.cache.config).onSettled)==null||$.call(m,this.state.data,b,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=ww({fn:c.fetchFn,abort:a==null?void 0:a.abort.bind(a),onSuccess:b=>{var v,w,$,m;if(typeof b>"u"){g(new Error("undefined"));return}this.setData(b),(v=(w=this.cache.config).onSuccess)==null||v.call(w,b,this),($=(m=this.cache.config).onSettled)==null||$.call(m,b,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:g,onFail:(b,v)=>{this.dispatch({type:"failed",failureCount:b,error:v})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){const n=r=>{var i,o;switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=t.meta)!=null?i:null,fetchStatus:wf(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=t.dataUpdatedAt)!=null?o:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const a=t.error;return hd(a)&&a.revert&&this.revertState?{...this.revertState}:{...r,error:a,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:a,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Je.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}}function DT(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=typeof t<"u",r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}class MT extends Va{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,n,r){var i;const o=n.queryKey,a=(i=n.queryHash)!=null?i:Um(o,n);let l=this.get(a);return l||(l=new FT({cache:this,logger:t.getLogger(),queryKey:o,queryHash:a,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(l)),l}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){const n=this.queriesMap[t.queryHash];n&&(t.destroy(),this.queries=this.queries.filter(r=>r!==t),n===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){Je.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,n){const[r]=Wr(t,n);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(i=>H3(r,i))}findAll(t,n){const[r]=Wr(t,n);return Object.keys(r).length>0?this.queries.filter(i=>H3(r,i)):this.queries}notify(t){Je.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Je.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){Je.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}}class jT extends Sw{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||Bm,this.observers=[],this.state=t.state||Cw(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.indexOf(t)===-1&&(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(n=>n!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,n;return(t=(n=this.retryer)==null?void 0:n.continue())!=null?t:this.execute()}async execute(){const t=()=>{var T;return this.retryer=ww({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(R,W)=>{this.dispatch({type:"failed",failureCount:R,error:W})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(T=this.options.retry)!=null?T:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var r,i,o,a,l,u,d,c;if(!n){var h,g,b,v;this.dispatch({type:"loading",variables:this.options.variables}),await((h=(g=this.mutationCache.config).onMutate)==null?void 0:h.call(g,this.state.variables,this));const R=await((b=(v=this.options).onMutate)==null?void 0:b.call(v,this.state.variables));R!==this.state.context&&this.dispatch({type:"loading",context:R,variables:this.state.variables})}const T=await t();return await((r=(i=this.mutationCache.config).onSuccess)==null?void 0:r.call(i,T,this.state.variables,this.state.context,this)),await((o=(a=this.options).onSuccess)==null?void 0:o.call(a,T,this.state.variables,this.state.context)),await((l=(u=this.mutationCache.config).onSettled)==null?void 0:l.call(u,T,null,this.state.variables,this.state.context,this)),await((d=(c=this.options).onSettled)==null?void 0:d.call(c,T,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:T}),T}catch(T){try{var w,$,m,p,x,S,P,_;throw await((w=($=this.mutationCache.config).onError)==null?void 0:w.call($,T,this.state.variables,this.state.context,this)),await((m=(p=this.options).onError)==null?void 0:m.call(p,T,this.state.variables,this.state.context)),await((x=(S=this.mutationCache.config).onSettled)==null?void 0:x.call(S,void 0,T,this.state.variables,this.state.context,this)),await((P=(_=this.options).onSettled)==null?void 0:P.call(_,void 0,T,this.state.variables,this.state.context)),T}finally{this.dispatch({type:"error",error:T})}}}dispatch(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!wf(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...r,...t.state}}};this.state=n(this.state),Je.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}function Cw(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class LT extends Va{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,n,r){const i=new jT({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(n),state:r,defaultOptions:n.mutationKey?t.getMutationDefaults(n.mutationKey):void 0});return this.add(i),i}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(n=>n!==t),this.notify({type:"removed",mutation:t})}clear(){Je.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return typeof t.exact>"u"&&(t.exact=!0),this.mutations.find(n=>W3(t,n))}findAll(t){return this.mutations.filter(n=>W3(t,n))}notify(t){Je.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){var t;return this.resuming=((t=this.resuming)!=null?t:Promise.resolve()).then(()=>{const n=this.mutations.filter(r=>r.state.isPaused);return Je.batch(()=>n.reduce((r,i)=>r.then(()=>i.continue().catch(sn)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function zT(){return{onFetch:e=>{e.fetchFn=()=>{var t,n,r,i,o,a;const l=(t=e.fetchOptions)==null||(n=t.meta)==null?void 0:n.refetchPage,u=(r=e.fetchOptions)==null||(i=r.meta)==null?void 0:i.fetchMore,d=u==null?void 0:u.pageParam,c=(u==null?void 0:u.direction)==="forward",h=(u==null?void 0:u.direction)==="backward",g=((o=e.state.data)==null?void 0:o.pages)||[],b=((a=e.state.data)==null?void 0:a.pageParams)||[];let v=b,w=!1;const $=_=>{Object.defineProperty(_,"signal",{enumerable:!0,get:()=>{var T;if((T=e.signal)!=null&&T.aborted)w=!0;else{var R;(R=e.signal)==null||R.addEventListener("abort",()=>{w=!0})}return e.signal}})},m=e.options.queryFn||(()=>Promise.reject("Missing queryFn")),p=(_,T,R,W)=>(v=W?[T,...v]:[...v,T],W?[R,..._]:[..._,R]),x=(_,T,R,W)=>{if(w)return Promise.reject("Cancelled");if(typeof R>"u"&&!T&&_.length)return Promise.resolve(_);const z={queryKey:e.queryKey,pageParam:R,meta:e.options.meta};$(z);const ie=m(z);return Promise.resolve(ie).then(j=>p(_,R,j,W))};let S;if(!g.length)S=x([]);else if(c){const _=typeof d<"u",T=_?d:G3(e.options,g);S=x(g,_,T)}else if(h){const _=typeof d<"u",T=_?d:UT(e.options,g);S=x(g,_,T,!0)}else{v=[];const _=typeof e.options.getNextPageParam>"u";S=(l&&g[0]?l(g[0],0,g):!0)?x([],_,b[0]):Promise.resolve(p([],b[0],g[0]));for(let R=1;R<g.length;R++)S=S.then(W=>{if(l&&g[R]?l(g[R],R,g):!0){const ie=_?b[R]:G3(e.options,W);return x(W,_,ie)}return Promise.resolve(p(W,b[R],g[R]))})}return S.then(_=>({pages:_,pageParams:v}))}}}}function G3(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function UT(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}class BT{constructor(t={}){this.queryCache=t.queryCache||new MT,this.mutationCache=t.mutationCache||new LT,this.logger=t.logger||Bm,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=gc.subscribe(()=>{gc.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=mc.subscribe(()=>{mc.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,n;this.mountCount--,this.mountCount===0&&((t=this.unsubscribeFocus)==null||t.call(this),this.unsubscribeFocus=void 0,(n=this.unsubscribeOnline)==null||n.call(this),this.unsubscribeOnline=void 0)}isFetching(t,n){const[r]=Wr(t,n);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state.data}ensureQueryData(t,n,r){const i=ks(t,n,r),o=this.getQueryData(i.queryKey);return o?Promise.resolve(o):this.fetchQuery(i)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(t,n,r){const i=this.queryCache.find(t),o=i==null?void 0:i.state.data,a=kT(n,o);if(typeof a>"u")return;const l=ks(t),u=this.defaultQueryOptions(l);return this.queryCache.build(this,u).setData(a,{...r,manual:!0})}setQueriesData(t,n,r){return Je.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state}removeQueries(t,n){const[r]=Wr(t,n),i=this.queryCache;Je.batch(()=>{i.findAll(r).forEach(o=>{i.remove(o)})})}resetQueries(t,n,r){const[i,o]=Wr(t,n,r),a=this.queryCache,l={type:"active",...i};return Je.batch(()=>(a.findAll(i).forEach(u=>{u.reset()}),this.refetchQueries(l,o)))}cancelQueries(t,n,r){const[i,o={}]=Wr(t,n,r);typeof o.revert>"u"&&(o.revert=!0);const a=Je.batch(()=>this.queryCache.findAll(i).map(l=>l.cancel(o)));return Promise.all(a).then(sn).catch(sn)}invalidateQueries(t,n,r){const[i,o]=Wr(t,n,r);return Je.batch(()=>{var a,l;if(this.queryCache.findAll(i).forEach(d=>{d.invalidate()}),i.refetchType==="none")return Promise.resolve();const u={...i,type:(a=(l=i.refetchType)!=null?l:i.type)!=null?a:"active"};return this.refetchQueries(u,o)})}refetchQueries(t,n,r){const[i,o]=Wr(t,n,r),a=Je.batch(()=>this.queryCache.findAll(i).filter(u=>!u.isDisabled()).map(u=>{var d;return u.fetch(void 0,{...o,cancelRefetch:(d=o==null?void 0:o.cancelRefetch)!=null?d:!0,meta:{refetchPage:i.refetchPage}})}));let l=Promise.all(a).then(sn);return o!=null&&o.throwOnError||(l=l.catch(sn)),l}fetchQuery(t,n,r){const i=ks(t,n,r),o=this.defaultQueryOptions(i);typeof o.retry>"u"&&(o.retry=!1);const a=this.queryCache.build(this,o);return a.isStaleByTime(o.staleTime)?a.fetch(o):Promise.resolve(a.state.data)}prefetchQuery(t,n,r){return this.fetchQuery(t,n,r).then(sn).catch(sn)}fetchInfiniteQuery(t,n,r){const i=ks(t,n,r);return i.behavior=zT(),this.fetchQuery(i)}prefetchInfiniteQuery(t,n,r){return this.fetchInfiniteQuery(t,n,r).then(sn).catch(sn)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,n){const r=this.queryDefaults.find(i=>Ki(t)===Ki(i.queryKey));r?r.defaultOptions=n:this.queryDefaults.push({queryKey:t,defaultOptions:n})}getQueryDefaults(t){if(!t)return;const n=this.queryDefaults.find(r=>pc(t,r.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(t,n){const r=this.mutationDefaults.find(i=>Ki(t)===Ki(i.mutationKey));r?r.defaultOptions=n:this.mutationDefaults.push({mutationKey:t,defaultOptions:n})}getMutationDefaults(t){if(!t)return;const n=this.mutationDefaults.find(r=>pc(t,r.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(t){if(t!=null&&t._defaulted)return t;const n={...this.defaultOptions.queries,...this.getQueryDefaults(t==null?void 0:t.queryKey),...t,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=Um(n.queryKey,n)),typeof n.refetchOnReconnect>"u"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary>"u"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(t==null?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}class HT extends Va{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),Q3(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return Q1(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Q1(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const r=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),V1(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const o=this.hasListeners();o&&K3(this.currentQuery,i,this.options,r)&&this.executeFetch(),this.updateResult(n),o&&(this.currentQuery!==i||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();const a=this.computeRefetchInterval();o&&(this.currentQuery!==i||this.options.enabled!==r.enabled||a!==this.currentRefetchInterval)&&this.updateRefetchInterval(a)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(r=>{Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),t[r])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),r=this.client.getQueryCache().build(this.client,n);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(sn)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),gl||this.currentResult.isStale||!Y1(this.options.staleTime))return;const n=yw(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(gl||this.options.enabled===!1||!Y1(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||gc.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const r=this.currentQuery,i=this.options,o=this.currentResult,a=this.currentResultState,l=this.currentResultOptions,u=t!==r,d=u?t.state:this.currentQueryInitialState,c=u?this.currentResult:this.previousQueryResult,{state:h}=t;let{dataUpdatedAt:g,error:b,errorUpdatedAt:v,fetchStatus:w,status:$}=h,m=!1,p=!1,x;if(n._optimisticResults){const R=this.hasListeners(),W=!R&&Q3(t,n),z=R&&K3(t,r,n,i);(W||z)&&(w=wf(t.options.networkMode)?"fetching":"paused",g||($="loading")),n._optimisticResults==="isRestoring"&&(w="idle")}if(n.keepPreviousData&&!h.dataUpdatedAt&&c!=null&&c.isSuccess&&$!=="error")x=c.data,g=c.dataUpdatedAt,$=c.status,m=!0;else if(n.select&&typeof h.data<"u")if(o&&h.data===(a==null?void 0:a.data)&&n.select===this.selectFn)x=this.selectResult;else try{this.selectFn=n.select,x=n.select(h.data),x=G1(o==null?void 0:o.data,x,n),this.selectResult=x,this.selectError=null}catch(R){this.selectError=R}else x=h.data;if(typeof n.placeholderData<"u"&&typeof x>"u"&&$==="loading"){let R;if(o!=null&&o.isPlaceholderData&&n.placeholderData===(l==null?void 0:l.placeholderData))R=o.data;else if(R=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof R<"u")try{R=n.select(R),this.selectError=null}catch(W){this.selectError=W}typeof R<"u"&&($="success",x=G1(o==null?void 0:o.data,R,n),p=!0)}this.selectError&&(b=this.selectError,x=this.selectResult,v=Date.now(),$="error");const S=w==="fetching",P=$==="loading",_=$==="error";return{status:$,fetchStatus:w,isLoading:P,isSuccess:$==="success",isError:_,isInitialLoading:P&&S,data:x,dataUpdatedAt:g,error:b,errorUpdatedAt:v,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>d.dataUpdateCount||h.errorUpdateCount>d.errorUpdateCount,isFetching:S,isRefetching:S&&!P,isLoadingError:_&&h.dataUpdatedAt===0,isPaused:w==="paused",isPlaceholderData:p,isPreviousData:m,isRefetchError:_&&h.dataUpdatedAt!==0,isStale:Hm(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,V1(r,n))return;this.currentResult=r;const i={cache:!0},o=()=>{if(!n)return!0;const{notifyOnChangeProps:a}=this.options;if(a==="all"||!a&&!this.trackedProps.size)return!0;const l=new Set(a??this.trackedProps);return this.options.useErrorBoundary&&l.add("error"),Object.keys(this.currentResult).some(u=>{const d=u;return this.currentResult[d]!==n[d]&&l.has(d)})};(t==null?void 0:t.listeners)!==!1&&o()&&(i.listeners=!0),this.notify({...i,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!hd(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){Je.batch(()=>{if(t.onSuccess){var n,r,i,o;(n=(r=this.options).onSuccess)==null||n.call(r,this.currentResult.data),(i=(o=this.options).onSettled)==null||i.call(o,this.currentResult.data,null)}else if(t.onError){var a,l,u,d;(a=(l=this.options).onError)==null||a.call(l,this.currentResult.error),(u=(d=this.options).onSettled)==null||u.call(d,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(c=>{c(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function WT(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Q3(e,t){return WT(e,t)||e.state.dataUpdatedAt>0&&Q1(e,t,t.refetchOnMount)}function Q1(e,t,n){if(t.enabled!==!1){const r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Hm(e,t)}return!1}function K3(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Hm(e,n)}function Hm(e,t){return e.isStaleByTime(t.staleTime)}let YT=class extends Va{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const r=this.options;this.options=this.client.defaultMutationOptions(t),V1(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.listeners.length){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:Cw(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){Je.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,r,i,o;(n=(r=this.mutateOptions).onSuccess)==null||n.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(i=(o=this.mutateOptions).onSettled)==null||i.call(o,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var a,l,u,d;(a=(l=this.mutateOptions).onError)==null||a.call(l,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(u=(d=this.mutateOptions).onSettled)==null||u.call(d,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(c=>{c(this.currentResult)})})}};var yc={},VT={get exports(){return yc},set exports(e){yc=e}},Pw={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Da=C;function qT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var GT=typeof Object.is=="function"?Object.is:qT,QT=Da.useState,KT=Da.useEffect,ZT=Da.useLayoutEffect,JT=Da.useDebugValue;function XT(e,t){var n=t(),r=QT({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return ZT(function(){i.value=n,i.getSnapshot=t,Uh(i)&&o({inst:i})},[e,n,t]),KT(function(){return Uh(i)&&o({inst:i}),e(function(){Uh(i)&&o({inst:i})})},[e]),JT(n),n}function Uh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!GT(e,n)}catch{return!0}}function eA(e,t){return t()}var tA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?eA:XT;Pw.useSyncExternalStore=Da.useSyncExternalStore!==void 0?Da.useSyncExternalStore:tA;(function(e){e.exports=Pw})(VT);const Ow=yc.useSyncExternalStore,Z3=C.createContext(void 0),_w=C.createContext(!1);function kw(e,t){return e||(t&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Z3),window.ReactQueryClientContext):Z3)}const Mt=({context:e}={})=>{const t=C.useContext(kw(e,C.useContext(_w)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},nA=({client:e,children:t,context:n,contextSharing:r=!1})=>{C.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);const i=kw(n,r);return C.createElement(_w.Provider,{value:!n&&r},C.createElement(i.Provider,{value:e},t))},Nw=C.createContext(!1),rA=()=>C.useContext(Nw);Nw.Provider;function iA(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}const oA=C.createContext(iA()),aA=()=>C.useContext(oA);function Ew(e,t){return typeof e=="function"?e(...t):!!e}const sA=(e,t)=>{(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))},lA=e=>{C.useEffect(()=>{e.clearReset()},[e])},uA=({result:e,errorResetBoundary:t,useErrorBoundary:n,query:r})=>e.isError&&!t.isReset()&&!e.isFetching&&Ew(n,[e.error,r]),dA=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},cA=(e,t)=>e.isLoading&&e.isFetching&&!t,fA=(e,t,n)=>(e==null?void 0:e.suspense)&&cA(t,n),hA=(e,t,n)=>t.fetchOptimistic(e).then(({data:r})=>{e.onSuccess==null||e.onSuccess(r),e.onSettled==null||e.onSettled(r,null)}).catch(r=>{n.clearReset(),e.onError==null||e.onError(r),e.onSettled==null||e.onSettled(void 0,r)});function pA(e,t){const n=Mt({context:e.context}),r=rA(),i=aA(),o=n.defaultQueryOptions(e);o._optimisticResults=r?"isRestoring":"optimistic",o.onError&&(o.onError=Je.batchCalls(o.onError)),o.onSuccess&&(o.onSuccess=Je.batchCalls(o.onSuccess)),o.onSettled&&(o.onSettled=Je.batchCalls(o.onSettled)),dA(o),sA(o,i),lA(i);const[a]=C.useState(()=>new t(n,o)),l=a.getOptimisticResult(o);if(Ow(C.useCallback(u=>r?()=>{}:a.subscribe(Je.batchCalls(u)),[a,r]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),C.useEffect(()=>{a.setOptions(o,{listeners:!1})},[o,a]),fA(o,l,r))throw hA(o,a,i);if(uA({result:l,errorResetBoundary:i,useErrorBoundary:o.useErrorBoundary,query:a.getCurrentQuery()}))throw l.error;return o.notifyOnChangeProps?l:a.trackResult(l)}function Ke(e,t,n){const r=ks(e,t,n);return pA(r,HT)}function $t(e,t,n){const r=NT(e,t,n),i=Mt({context:r.context}),[o]=C.useState(()=>new YT(i,r));C.useEffect(()=>{o.setOptions(r)},[o,r]);const a=Ow(C.useCallback(u=>o.subscribe(Je.batchCalls(u)),[o]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),l=C.useCallback((u,d)=>{o.mutate(u,d).catch(gA)},[o]);if(a.error&&Ew(o.options.useErrorBoundary,[a.error]))throw a.error;return{...a,mutate:l,mutateAsync:a.mutate}}function gA(){}const mA=()=>{var b,v,w,$,m,p,x;const[e,t]=C.useState(),[n,r]=C.useState(!0),i=n!==!0,o=nt(),a=Bl({firstName:Ot().required("This field cannot be empty"),lastName:Ot().required("This field cannot be empty"),email:Ot().email("this is not a valid email").required("This field cannot be empty"),phoneNum:Dm().required("This field cannot be empty"),companyName:Ot().required("This field cannot be empty"),password:Ot().required("This field cannot be empty"),confirmPassword:Ot().oneOf([ew("password"),null],"Password must match")}).required(),{handleSubmit:l,formState:{errors:u},reset:d,register:c}=bf({resolver:$f(a)}),h=$t({mutationKey:["createseler"],mutationFn:cI,onSuccess:S=>{console.log(S),o("/auth/verify")},onError:S=>{alert(S.message)}}),g=l(S=>{h.mutate(S)});return s("div",{children:s(SA,{children:y(wA,{children:[s($A,{children:"Seller Account"}),s(bA,{children:"Please enter every necessary information"}),y(xA,{onSubmit:g,children:[y(Ni,{children:[s(ki,{children:"Full Name"}),s(_i,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(xo,{placeholder:"Full Name",...c("firstName")})}),s(Oi,{children:(u==null?void 0:u.firstName)&&((b=u==null?void 0:u.firstName)==null?void 0:b.message)})]}),y(Ni,{children:[s(ki,{children:"Last Name"}),s(_i,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(xo,{placeholder:"Last Name",...c("lastName")})}),s(Oi,{children:(u==null?void 0:u.lastName)&&((v=u==null?void 0:u.lastName)==null?void 0:v.message)})]}),y(Ni,{children:[s(ki,{children:"Email Address"}),s(_i,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(xo,{placeholder:"Email Address",...c("email")})}),s(Oi,{children:(u==null?void 0:u.email)&&((w=u==null?void 0:u.email)==null?void 0:w.message)})]}),y(Ni,{children:[s(ki,{children:"Company Name"}),s(_i,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(xo,{placeholder:"Company Name",...c("companyName")})}),s(Oi,{children:(u==null?void 0:u.companyName)&&(($=u==null?void 0:u.companyName)==null?void 0:$.message)})]}),y(Ni,{children:[s(ki,{children:"Phone Number"}),s(_i,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(Cm,{className:"phone",defaultCountry:"NG",...c("phoneNum"),placeholder:"Phone Number",value:e,onChange:t})}),s(Oi,{children:(u==null?void 0:u.phoneNum)&&((m=u==null?void 0:u.phoneNum)==null?void 0:m.message)})]}),y(Ni,{children:[s(ki,{children:"Password"}),y(_i,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:[s(xo,{placeholder:"Password",type:n?"password":"text",id:"pass",...c("password")}),s(J3,{onClick:()=>{r(i)},children:n===!1?s(Ra,{}):s(Aa,{})})]}),s(Oi,{children:(u==null?void 0:u.password)&&((p=u==null?void 0:u.password)==null?void 0:p.message)})]}),y(Ni,{children:[s(ki,{children:"Confirm Password"}),y(_i,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:[s(xo,{placeholder:"Confirm Password",type:n?"password":"text",id:"pass",...c("confirmPassword")}),s(J3,{onClick:()=>{r(i)},children:n===!1?s(Ra,{}):s(Aa,{})})]}),s(Oi,{children:(u==null?void 0:u.confirmPassword)&&((x=u==null?void 0:u.confirmPassword)==null?void 0:x.message)})]}),s(vA,{type:"submit",disabled:h.status==="loading",children:h.status==="loading"?"Loading...":"Continue"}),y(yA,{children:["Already have an account?"," ",s(ke,{to:"/auth/signin",style:{textDecoration:"none"},children:s("span",{children:"LogIn"})})]})]})]})})})};f.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    width: 90%;

    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`;const yA=f.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,vA=f.button`
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
`,Oi=f.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`,J3=f.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,_i=f.div`
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
`,xo=f.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,ki=f.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,Ni=f.div`
    margin-bottom: 10px;
`,xA=f.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 370px){
        width: 350px;
    }
`,bA=f.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 250px;
`,$A=f.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
`,wA=f.div`
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
`,SA=f.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,CA=()=>{var h,g;const e=nt(),t=Bl({email:Ot().email("this is not a valid email").required("This field cannot be empty"),password:Ot().required("This field cannot be empty")}).required(),[n,r]=C.useState(!0),i=n!==!0,{handleSubmit:o,formState:{errors:a},reset:l,register:u}=bf({resolver:$f(t)}),d=$t({mutationKey:["seller"],mutationFn:pI,onSuccess:b=>{e("/seller-dashboard")},onError:b=>{console.log(b.message)}}),c=o(b=>{d.mutate(b)});return s("div",{children:s(AA,{children:y(TA,{children:[s(IA,{children:"Seller Account"}),s(EA,{children:"Please enter every necessary information"}),y(NA,{onSubmit:c,children:[y(rx,{children:[s(nx,{children:"Email Address"}),s(ex,{style:{border:`${a!=null&&a.email?"1px solid red":"1px solid lightgray"}`},children:s(tx,{placeholder:"Email Address",type:"email",...u("email")})}),s(X3,{children:(a==null?void 0:a.email)&&((h=a==null?void 0:a.email)==null?void 0:h.message)})]}),y(rx,{children:[s(nx,{children:"Password"}),y(ex,{style:{border:`${a!=null&&a.password?"1px solid red":"1px solid lightgray"}`},children:[s(tx,{placeholder:"Password",type:n?"password":"text",id:"pass",...u("password")}),s(kA,{onClick:()=>{r(i)},children:n===!1?s(Ra,{}):s(Aa,{})})]}),s(X3,{children:(a==null?void 0:a.password)&&((g=a==null?void 0:a.password)==null?void 0:g.message)})]}),s(PA,{children:"Forget Password?"}),s(_A,{type:"submit",disabled:d.status==="loading",children:d.status==="loading"?"Loading...":"Continue"}),y(OA,{children:["Don't have an account? ",s(ke,{to:"/auth",style:{textDecoration:"none"},children:s("span",{children:"Sign Up"})})]})]})]})})})},PA=f.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    width: 360px;
`,OA=f.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,_A=f.button`
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
`,X3=f.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`,kA=f.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,ex=f.div`
    width: 350px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
`,tx=f.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,nx=f.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,rx=f.div`
    margin-bottom: 10px;
`,NA=f.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,EA=f.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 250px;
`,IA=f.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
`,TA=f.div`
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
    /* border: 1px solid gray; */
`,AA=f.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,RA="/assets/camera-91f8abb7.png",FA=()=>{const e=nt(),[t,n]=C.useState(RA),[r,i]=C.useState(""),[o,a]=C.useState(""),[l,u]=C.useState(""),[d,c]=C.useState(""),h=$=>{const m=$.target.files[0],p=URL.createObjectURL(m);n(p),i(m)},g=$=>{const m=$.target.files[0];c(m)},b=$t({mutationFn:yI,onSuccess:$=>{console.log($),e("/auth/bankdetails")},onError:$=>{console.log($.message)}}),v=JSON.parse(localStorage.getItem("user"));return s("div",{children:s(YA,{children:y(WA,{children:[s(HA,{children:"Business Information"}),s(BA,{children:"Enter every necessary details to create your own seller account"}),y(UA,{onSubmit:$=>{$.preventDefault();const m=v._id,p=new FormData;p.append("IDtype",l),p.append("CACNumber",o),p.append("avatar",r),p.append("avatar",d),b.mutate({id:m,formData:p})},type:"multipart/form-data",children:[y(Wh,{children:[s(Hh,{children:"Business owner or legal representative ID type"}),s(Bh,{children:y(DA,{value:l,onChange:$=>{u($.target.value)},children:[s("option",{children:"Select ID type"}),s("option",{children:"NIN"}),s("option",{children:"BVN"})]})})]}),y(Wh,{children:[s(Hh,{children:"Upload a copy of your valid ID card"}),s(Bh,{children:s(ix,{type:"file",id:"pass",onChange:g})})]}),y(Wh,{children:[s(Hh,{children:"CAC Registration Number"}),s(Bh,{children:s(ix,{placeholder:"NIN OR BVN",type:"number",value:o,onChange:$=>{a($.target.value)}})})]}),y(LA,{children:[s(MA,{type:"file",onChange:h}),s(jA,{src:t})]}),s(zA,{type:"submit",disabled:b.status==="loading",children:b.status==="loading"?"Loading...":"Continue"})]})]})})})},DA=f.select`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
`,MA=f.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    /* opacity: 0px; */
    display: none;
`,jA=f.img`
    
    /* background-color: gold; */
    width: 80%;
    height: 70%;
    border-radius: 5px;
`,LA=f.label`
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
`,zA=f.button`
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
`;const Bh=f.div`
    width: 350px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
`,ix=f.input`
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
`,Hh=f.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,Wh=f.div`
    margin-bottom: 10px;
`,UA=f.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,BA=f.div`
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    width: 300px;
    margin-bottom: 20px;

`,HA=f.div`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
`,WA=f.div`
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
    /* border: 1px solid gray; */
`,YA=f.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;function VA(e){return _e({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"}}]})(e)}function Iw(e){return _e({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}}]})(e)}function qA(e){return _e({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"}},{tag:"path",attr:{d:"M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"}}]})(e)}function GA(e){return _e({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}}]})(e)}function QA(e){return _e({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z"}}]})(e)}var K1={},KA={get exports(){return K1},set exports(e){K1=e}},Tw={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf=C,ZA=yc;function JA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var XA=typeof Object.is=="function"?Object.is:JA,eR=ZA.useSyncExternalStore,tR=Sf.useRef,nR=Sf.useEffect,rR=Sf.useMemo,iR=Sf.useDebugValue;Tw.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=tR(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=rR(function(){function u(b){if(!d){if(d=!0,c=b,b=r(b),i!==void 0&&a.hasValue){var v=a.value;if(i(v,b))return h=v}return h=b}if(v=h,XA(c,b))return v;var w=r(b);return i!==void 0&&i(v,w)?v:(c=b,h=w)}var d=!1,c,h,g=n===void 0?null:n;return[function(){return u(t())},g===null?void 0:function(){return u(g())}]},[t,n,r,i]);var l=eR(e,o[0],o[1]);return nR(function(){a.hasValue=!0,a.value=l},[l]),iR(l),l};(function(e){e.exports=Tw})(KA);function oR(e){e()}let Aw=oR;const aR=e=>Aw=e,sR=()=>Aw,vi=C.createContext(null);function Rw(){return C.useContext(vi)}const lR=()=>{throw new Error("uSES not initialized!")};let Fw=lR;const uR=e=>{Fw=e},dR=(e,t)=>e===t;function cR(e=vi){const t=e===vi?Rw:()=>C.useContext(e);return function(r,i=dR){const{store:o,subscription:a,getServerState:l}=t(),u=Fw(a.addNestedSub,o.getState,l||o.getState,r,i);return C.useDebugValue(u),u}}const Ma=cR();var ox={},fR={get exports(){return ox},set exports(e){ox=e}},Te={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm=Symbol.for("react.element"),Ym=Symbol.for("react.portal"),Cf=Symbol.for("react.fragment"),Pf=Symbol.for("react.strict_mode"),Of=Symbol.for("react.profiler"),_f=Symbol.for("react.provider"),kf=Symbol.for("react.context"),hR=Symbol.for("react.server_context"),Nf=Symbol.for("react.forward_ref"),Ef=Symbol.for("react.suspense"),If=Symbol.for("react.suspense_list"),Tf=Symbol.for("react.memo"),Af=Symbol.for("react.lazy"),pR=Symbol.for("react.offscreen"),Dw;Dw=Symbol.for("react.module.reference");function vn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Wm:switch(e=e.type,e){case Cf:case Of:case Pf:case Ef:case If:return e;default:switch(e=e&&e.$$typeof,e){case hR:case kf:case Nf:case Af:case Tf:case _f:return e;default:return t}}case Ym:return t}}}Te.ContextConsumer=kf;Te.ContextProvider=_f;Te.Element=Wm;Te.ForwardRef=Nf;Te.Fragment=Cf;Te.Lazy=Af;Te.Memo=Tf;Te.Portal=Ym;Te.Profiler=Of;Te.StrictMode=Pf;Te.Suspense=Ef;Te.SuspenseList=If;Te.isAsyncMode=function(){return!1};Te.isConcurrentMode=function(){return!1};Te.isContextConsumer=function(e){return vn(e)===kf};Te.isContextProvider=function(e){return vn(e)===_f};Te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wm};Te.isForwardRef=function(e){return vn(e)===Nf};Te.isFragment=function(e){return vn(e)===Cf};Te.isLazy=function(e){return vn(e)===Af};Te.isMemo=function(e){return vn(e)===Tf};Te.isPortal=function(e){return vn(e)===Ym};Te.isProfiler=function(e){return vn(e)===Of};Te.isStrictMode=function(e){return vn(e)===Pf};Te.isSuspense=function(e){return vn(e)===Ef};Te.isSuspenseList=function(e){return vn(e)===If};Te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Cf||e===Of||e===Pf||e===Ef||e===If||e===pR||typeof e=="object"&&e!==null&&(e.$$typeof===Af||e.$$typeof===Tf||e.$$typeof===_f||e.$$typeof===kf||e.$$typeof===Nf||e.$$typeof===Dw||e.getModuleId!==void 0)};Te.typeOf=vn;(function(e){e.exports=Te})(fR);function gR(){const e=sR();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const ax={notify(){},get:()=>[]};function mR(e,t){let n,r=ax;function i(h){return u(),r.subscribe(h)}function o(){r.notify()}function a(){c.onStateChange&&c.onStateChange()}function l(){return!!n}function u(){n||(n=t?t.addNestedSub(a):e.subscribe(a),r=gR())}function d(){n&&(n(),n=void 0,r.clear(),r=ax)}const c={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:a,isSubscribed:l,trySubscribe:u,tryUnsubscribe:d,getListeners:()=>r};return c}const yR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vR=yR?C.useLayoutEffect:C.useEffect;function xR({store:e,context:t,children:n,serverState:r}){const i=C.useMemo(()=>{const l=mR(e);return{store:e,subscription:l,getServerState:r?()=>r:void 0}},[e,r]),o=C.useMemo(()=>e.getState(),[e]);vR(()=>{const{subscription:l}=i;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),o!==e.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[i,o]);const a=t||vi;return ne.createElement(a.Provider,{value:i},n)}function Mw(e=vi){const t=e===vi?Rw:()=>C.useContext(e);return function(){const{store:r}=t();return r}}const bR=Mw();function $R(e=vi){const t=e===vi?bR:Mw(e);return function(){return t().dispatch}}const Vm=$R();uR(K1.useSyncExternalStoreWithSelector);aR(Sd.unstable_batchedUpdates);function In(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function xi(e){return!!e&&!!e[We]}function kr(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===ER}(e)||Array.isArray(e)||!!e[hx]||!!(!((t=e.constructor)===null||t===void 0)&&t[hx])||qm(e)||Gm(e))}function so(e,t,n){n===void 0&&(n=!1),qa(e)===0?(n?Object.keys:ba)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function qa(e){var t=e[We];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:qm(e)?2:Gm(e)?3:0}function xa(e,t){return qa(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function wR(e,t){return qa(e)===2?e.get(t):e[t]}function jw(e,t,n){var r=qa(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Lw(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function qm(e){return kR&&e instanceof Map}function Gm(e){return NR&&e instanceof Set}function Yi(e){return e.o||e.t}function Qm(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Uw(e);delete t[We];for(var n=ba(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Km(e,t){return t===void 0&&(t=!1),Zm(e)||xi(e)||!kr(e)||(qa(e)>1&&(e.set=e.add=e.clear=e.delete=SR),Object.freeze(e),t&&so(e,function(n,r){return Km(r,!0)},!0)),e}function SR(){In(2)}function Zm(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Xn(e){var t=eg[e];return t||In(18,e),t}function CR(e,t){eg[e]||(eg[e]=t)}function Z1(){return ml}function Yh(e,t){t&&(Xn("Patches"),e.u=[],e.s=[],e.v=t)}function vc(e){J1(e),e.p.forEach(PR),e.p=null}function J1(e){e===ml&&(ml=e.l)}function sx(e){return ml={p:[],l:ml,h:e,m:!0,_:0}}function PR(e){var t=e[We];t.i===0||t.i===1?t.j():t.g=!0}function Vh(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||Xn("ES5").S(t,e,r),r?(n[We].P&&(vc(t),In(4)),kr(e)&&(e=xc(t,e),t.l||bc(t,e)),t.u&&Xn("Patches").M(n[We].t,e,t.u,t.s)):e=xc(t,n,[]),vc(t),t.u&&t.v(t.u,t.s),e!==zw?e:void 0}function xc(e,t,n){if(Zm(t))return t;var r=t[We];if(!r)return so(t,function(l,u){return lx(e,r,t,l,u,n)},!0),t;if(r.A!==e)return t;if(!r.P)return bc(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Qm(r.k):r.o,o=i,a=!1;r.i===3&&(o=new Set(i),i.clear(),a=!0),so(o,function(l,u){return lx(e,r,i,l,u,n,a)}),bc(e,i,!1),n&&e.u&&Xn("Patches").N(r,n,e.u,e.s)}return r.o}function lx(e,t,n,r,i,o,a){if(xi(i)){var l=xc(e,i,o&&t&&t.i!==3&&!xa(t.R,r)?o.concat(r):void 0);if(jw(n,r,l),!xi(l))return;e.m=!1}else a&&n.add(i);if(kr(i)&&!Zm(i)){if(!e.h.D&&e._<1)return;xc(e,i),t&&t.A.l||bc(e,i)}}function bc(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Km(t,n)}function qh(e,t){var n=e[We];return(n?Yi(n):e)[t]}function ux(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function qr(e){e.P||(e.P=!0,e.l&&qr(e.l))}function Gh(e){e.o||(e.o=Qm(e.t))}function X1(e,t,n){var r=qm(t)?Xn("MapSet").F(t,n):Gm(t)?Xn("MapSet").T(t,n):e.O?function(i,o){var a=Array.isArray(i),l={i:a?1:0,A:o?o.A:Z1(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},u=l,d=yl;a&&(u=[l],d=Ns);var c=Proxy.revocable(u,d),h=c.revoke,g=c.proxy;return l.k=g,l.j=h,g}(t,n):Xn("ES5").J(t,n);return(n?n.A:Z1()).p.push(r),r}function OR(e){return xi(e)||In(22,e),function t(n){if(!kr(n))return n;var r,i=n[We],o=qa(n);if(i){if(!i.P&&(i.i<4||!Xn("ES5").K(i)))return i.t;i.I=!0,r=dx(n,o),i.I=!1}else r=dx(n,o);return so(r,function(a,l){i&&wR(i.t,a)===l||jw(r,a,t(l))}),o===3?new Set(r):r}(e)}function dx(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Qm(e)}function _R(){function e(o,a){var l=i[o];return l?l.enumerable=a:i[o]=l={configurable:!0,enumerable:a,get:function(){var u=this[We];return yl.get(u,o)},set:function(u){var d=this[We];yl.set(d,o,u)}},l}function t(o){for(var a=o.length-1;a>=0;a--){var l=o[a][We];if(!l.P)switch(l.i){case 5:r(l)&&qr(l);break;case 4:n(l)&&qr(l)}}}function n(o){for(var a=o.t,l=o.k,u=ba(l),d=u.length-1;d>=0;d--){var c=u[d];if(c!==We){var h=a[c];if(h===void 0&&!xa(a,c))return!0;var g=l[c],b=g&&g[We];if(b?b.t!==h:!Lw(g,h))return!0}}var v=!!a[We];return u.length!==ba(a).length+(v?0:1)}function r(o){var a=o.k;if(a.length!==o.t.length)return!0;var l=Object.getOwnPropertyDescriptor(a,a.length-1);if(l&&!l.get)return!0;for(var u=0;u<a.length;u++)if(!a.hasOwnProperty(u))return!0;return!1}var i={};CR("ES5",{J:function(o,a){var l=Array.isArray(o),u=function(c,h){if(c){for(var g=Array(h.length),b=0;b<h.length;b++)Object.defineProperty(g,""+b,e(b,!0));return g}var v=Uw(h);delete v[We];for(var w=ba(v),$=0;$<w.length;$++){var m=w[$];v[m]=e(m,c||!!v[m].enumerable)}return Object.create(Object.getPrototypeOf(h),v)}(l,o),d={i:l?5:4,A:a?a.A:Z1(),P:!1,I:!1,R:{},l:a,t:o,k:u,o:null,g:!1,C:!1};return Object.defineProperty(u,We,{value:d,writable:!0}),u},S:function(o,a,l){l?xi(a)&&a[We].A===o&&t(o.p):(o.u&&function u(d){if(d&&typeof d=="object"){var c=d[We];if(c){var h=c.t,g=c.k,b=c.R,v=c.i;if(v===4)so(g,function(x){x!==We&&(h[x]!==void 0||xa(h,x)?b[x]||u(g[x]):(b[x]=!0,qr(c)))}),so(h,function(x){g[x]!==void 0||xa(g,x)||(b[x]=!1,qr(c))});else if(v===5){if(r(c)&&(qr(c),b.length=!0),g.length<h.length)for(var w=g.length;w<h.length;w++)b[w]=!1;else for(var $=h.length;$<g.length;$++)b[$]=!0;for(var m=Math.min(g.length,h.length),p=0;p<m;p++)g.hasOwnProperty(p)||(b[p]=!0),b[p]===void 0&&u(g[p])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var cx,ml,Jm=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",kR=typeof Map<"u",NR=typeof Set<"u",fx=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",zw=Jm?Symbol.for("immer-nothing"):((cx={})["immer-nothing"]=!0,cx),hx=Jm?Symbol.for("immer-draftable"):"__$immer_draftable",We=Jm?Symbol.for("immer-state"):"__$immer_state",ER=""+Object.prototype.constructor,ba=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Uw=Object.getOwnPropertyDescriptors||function(e){var t={};return ba(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},eg={},yl={get:function(e,t){if(t===We)return e;var n=Yi(e);if(!xa(n,t))return function(i,o,a){var l,u=ux(o,a);return u?"value"in u?u.value:(l=u.get)===null||l===void 0?void 0:l.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!kr(r)?r:r===qh(e.t,t)?(Gh(e),e.o[t]=X1(e.A.h,r,e)):r},has:function(e,t){return t in Yi(e)},ownKeys:function(e){return Reflect.ownKeys(Yi(e))},set:function(e,t,n){var r=ux(Yi(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=qh(Yi(e),t),o=i==null?void 0:i[We];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Lw(n,i)&&(n!==void 0||xa(e.t,t)))return!0;Gh(e),qr(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return qh(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Gh(e),qr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Yi(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){In(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){In(12)}},Ns={};so(yl,function(e,t){Ns[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Ns.deleteProperty=function(e,t){return Ns.set.call(this,e,t,void 0)},Ns.set=function(e,t,n){return yl.set.call(this,e[0],t,n,e[0])};var IR=function(){function e(n){var r=this;this.O=fx,this.D=!0,this.produce=function(i,o,a){if(typeof i=="function"&&typeof o!="function"){var l=o;o=i;var u=r;return function(w){var $=this;w===void 0&&(w=l);for(var m=arguments.length,p=Array(m>1?m-1:0),x=1;x<m;x++)p[x-1]=arguments[x];return u.produce(w,function(S){var P;return(P=o).call.apply(P,[$,S].concat(p))})}}var d;if(typeof o!="function"&&In(6),a!==void 0&&typeof a!="function"&&In(7),kr(i)){var c=sx(r),h=X1(r,i,void 0),g=!0;try{d=o(h),g=!1}finally{g?vc(c):J1(c)}return typeof Promise<"u"&&d instanceof Promise?d.then(function(w){return Yh(c,a),Vh(w,c)},function(w){throw vc(c),w}):(Yh(c,a),Vh(d,c))}if(!i||typeof i!="object"){if((d=o(i))===void 0&&(d=i),d===zw&&(d=void 0),r.D&&Km(d,!0),a){var b=[],v=[];Xn("Patches").M(i,d,b,v),a(b,v)}return d}In(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(d){for(var c=arguments.length,h=Array(c>1?c-1:0),g=1;g<c;g++)h[g-1]=arguments[g];return r.produceWithPatches(d,function(b){return i.apply(void 0,[b].concat(h))})};var a,l,u=r.produce(i,o,function(d,c){a=d,l=c});return typeof Promise<"u"&&u instanceof Promise?u.then(function(d){return[d,a,l]}):[u,a,l]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){kr(n)||In(8),xi(n)&&(n=OR(n));var r=sx(this),i=X1(this,n,void 0);return i[We].C=!0,J1(r),i},t.finishDraft=function(n,r){var i=n&&n[We],o=i.A;return Yh(o,r),Vh(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!fx&&In(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var a=Xn("Patches").$;return xi(n)?a(n,r):this.produce(n,function(l){return a(l,r)})},e}(),Zt=new IR,Bw=Zt.produce;Zt.produceWithPatches.bind(Zt);Zt.setAutoFreeze.bind(Zt);Zt.setUseProxies.bind(Zt);Zt.applyPatches.bind(Zt);Zt.createDraft.bind(Zt);Zt.finishDraft.bind(Zt);function vl(e){return vl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vl(e)}function TR(e,t){if(vl(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(vl(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function AR(e){var t=TR(e,"string");return vl(t)==="symbol"?t:String(t)}function RR(e,t,n){return t=AR(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function px(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function gx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?px(Object(n),!0).forEach(function(r){RR(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):px(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ct(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var mx=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Qh=function(){return Math.random().toString(36).substring(7).split("").join(".")},$c={INIT:"@@redux/INIT"+Qh(),REPLACE:"@@redux/REPLACE"+Qh(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Qh()}};function FR(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Xm(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ct(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ct(1));return n(Xm)(e,t)}if(typeof e!="function")throw new Error(Ct(2));var i=e,o=t,a=[],l=a,u=!1;function d(){l===a&&(l=a.slice())}function c(){if(u)throw new Error(Ct(3));return o}function h(w){if(typeof w!="function")throw new Error(Ct(4));if(u)throw new Error(Ct(5));var $=!0;return d(),l.push(w),function(){if($){if(u)throw new Error(Ct(6));$=!1,d();var p=l.indexOf(w);l.splice(p,1),a=null}}}function g(w){if(!FR(w))throw new Error(Ct(7));if(typeof w.type>"u")throw new Error(Ct(8));if(u)throw new Error(Ct(9));try{u=!0,o=i(o,w)}finally{u=!1}for(var $=a=l,m=0;m<$.length;m++){var p=$[m];p()}return w}function b(w){if(typeof w!="function")throw new Error(Ct(10));i=w,g({type:$c.REPLACE})}function v(){var w,$=h;return w={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(Ct(11));function x(){p.next&&p.next(c())}x();var S=$(x);return{unsubscribe:S}}},w[mx]=function(){return this},w}return g({type:$c.INIT}),r={dispatch:g,subscribe:h,getState:c,replaceReducer:b},r[mx]=v,r}function DR(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:$c.INIT});if(typeof r>"u")throw new Error(Ct(12));if(typeof n(void 0,{type:$c.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ct(13))})}function MR(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),a;try{DR(n)}catch(l){a=l}return function(u,d){if(u===void 0&&(u={}),a)throw a;for(var c=!1,h={},g=0;g<o.length;g++){var b=o[g],v=n[b],w=u[b],$=v(w,d);if(typeof $>"u")throw d&&d.type,new Error(Ct(14));h[b]=$,c=c||$!==w}return c=c||o.length!==Object.keys(u).length,c?h:u}}function wc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function jR(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(Ct(15))},a={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},l=t.map(function(u){return u(a)});return o=wc.apply(void 0,l)(i.dispatch),gx(gx({},i),{},{dispatch:o})}}}function Hw(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(a){return function(l){return typeof l=="function"?l(i,o,e):a(l)}}};return t}var Ww=Hw();Ww.withExtraArgument=Hw;const yx=Ww;var Yw=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),LR=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(d){return function(c){return u([d,c])}}function u(d){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=d[0]&2?i.return:d[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,d[1])).done)return o;switch(i=0,o&&(d=[d[0]&2,o.value]),d[0]){case 0:case 1:o=d;break;case 4:return n.label++,{value:d[1],done:!1};case 5:n.label++,i=d[1],d=[0];continue;case 7:d=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(d[0]===6||d[0]===2)){n=0;continue}if(d[0]===3&&(!o||d[1]>o[0]&&d[1]<o[3])){n.label=d[1];break}if(d[0]===6&&n.label<o[1]){n.label=o[1],o=d;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(d);break}o[2]&&n.ops.pop(),n.trys.pop();continue}d=t.call(e,n)}catch(c){d=[6,c],i=0}finally{r=o=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}},ja=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},zR=Object.defineProperty,UR=Object.defineProperties,BR=Object.getOwnPropertyDescriptors,vx=Object.getOwnPropertySymbols,HR=Object.prototype.hasOwnProperty,WR=Object.prototype.propertyIsEnumerable,xx=function(e,t,n){return t in e?zR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},fi=function(e,t){for(var n in t||(t={}))HR.call(t,n)&&xx(e,n,t[n]);if(vx)for(var r=0,i=vx(t);r<i.length;r++){var n=i[r];WR.call(t,n)&&xx(e,n,t[n])}return e},Kh=function(e,t){return UR(e,BR(t))},YR=function(e,t,n){return new Promise(function(r,i){var o=function(u){try{l(n.next(u))}catch(d){i(d)}},a=function(u){try{l(n.throw(u))}catch(d){i(d)}},l=function(u){return u.done?r(u.value):Promise.resolve(u.value).then(o,a)};l((n=n.apply(e,t)).next())})},VR=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?wc:wc.apply(null,arguments)};function qR(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var GR=function(e){Yw(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,ja([void 0],n[0].concat(this)))):new(t.bind.apply(t,ja([void 0],n.concat(this))))},t}(Array),QR=function(e){Yw(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,ja([void 0],n[0].concat(this)))):new(t.bind.apply(t,ja([void 0],n.concat(this))))},t}(Array);function tg(e){return kr(e)?Bw(e,function(){}):e}function KR(e){return typeof e=="boolean"}function ZR(){return function(t){return JR(t)}}function JR(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new GR;return n&&(KR(n)?r.push(yx):r.push(yx.withExtraArgument(n.extraArgument))),r}var XR=!0;function eF(e){var t=ZR(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,a=o===void 0?t():o,l=n.devTools,u=l===void 0?!0:l,d=n.preloadedState,c=d===void 0?void 0:d,h=n.enhancers,g=h===void 0?void 0:h,b;if(typeof i=="function")b=i;else if(qR(i))b=MR(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=a;typeof v=="function"&&(v=v(t));var w=jR.apply(void 0,v),$=wc;u&&($=VR(fi({trace:!XR},typeof u=="object"&&u)));var m=new QR(w),p=m;Array.isArray(g)?p=ja([w],g):typeof g=="function"&&(p=g(m));var x=$.apply(void 0,p);return Xm(b,c,x)}function hi(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return fi(fi({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function Vw(e){var t={},n=[],r,i={addCase:function(o,a){var l=typeof o=="string"?o:o.type;if(l in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[l]=a,i},addMatcher:function(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function tF(e){return typeof e=="function"}function nF(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Vw(t):[t,n,r],o=i[0],a=i[1],l=i[2],u;if(tF(e))u=function(){return tg(e())};else{var d=tg(e);u=function(){return d}}function c(h,g){h===void 0&&(h=u());var b=ja([o[g.type]],a.filter(function(v){var w=v.matcher;return w(g)}).map(function(v){var w=v.reducer;return w}));return b.filter(function(v){return!!v}).length===0&&(b=[l]),b.reduce(function(v,w){if(w)if(xi(v)){var $=v,m=w($,g);return m===void 0?v:m}else{if(kr(v))return Bw(v,function(p){return w(p,g)});var m=w(v,g);if(m===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return v},h)}return c.getInitialState=u,c}function rF(e,t){return e+"/"+t}function iF(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:tg(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},a={},l={};i.forEach(function(c){var h=r[c],g=rF(t,c),b,v;"reducer"in h?(b=h.reducer,v=h.prepare):b=h,o[c]=b,a[g]=b,l[c]=v?hi(g,v):hi(g)});function u(){var c=typeof e.extraReducers=="function"?Vw(e.extraReducers):[e.extraReducers],h=c[0],g=h===void 0?{}:h,b=c[1],v=b===void 0?[]:b,w=c[2],$=w===void 0?void 0:w,m=fi(fi({},g),a);return nF(n,function(p){for(var x in m)p.addCase(x,m[x]);for(var S=0,P=v;S<P.length;S++){var _=P[S];p.addMatcher(_.matcher,_.reducer)}$&&p.addDefaultCase($)})}var d;return{name:t,reducer:function(c,h){return d||(d=u()),d(c,h)},actions:l,caseReducers:o,getInitialState:function(){return d||(d=u()),d.getInitialState()}}}var oF="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",aF=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=oF[Math.random()*64|0];return t},sF=["name","message","stack","code"],Zh=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),bx=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),lF=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=sF;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=hi(t+"/fulfilled",function(d,c,h,g){return{payload:d,meta:Kh(fi({},g||{}),{arg:h,requestId:c,requestStatus:"fulfilled"})}}),o=hi(t+"/pending",function(d,c,h){return{payload:void 0,meta:Kh(fi({},h||{}),{arg:c,requestId:d,requestStatus:"pending"})}}),a=hi(t+"/rejected",function(d,c,h,g,b){return{payload:g,error:(r&&r.serializeError||lF)(d||"Rejected"),meta:Kh(fi({},b||{}),{arg:h,requestId:c,rejectedWithValue:!!g,requestStatus:"rejected",aborted:(d==null?void 0:d.name)==="AbortError",condition:(d==null?void 0:d.name)==="ConditionError"})}}),l=typeof AbortController<"u"?AbortController:function(){function d(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return d.prototype.abort=function(){},d}();function u(d){return function(c,h,g){var b=r!=null&&r.idGenerator?r.idGenerator(d):aF(),v=new l,w;function $(p){w=p,v.abort()}var m=function(){return YR(this,null,function(){var p,x,S,P,_,T,R;return LR(this,function(W){switch(W.label){case 0:return W.trys.push([0,4,,5]),P=(p=r==null?void 0:r.condition)==null?void 0:p.call(r,d,{getState:h,extra:g}),dF(P)?[4,P]:[3,2];case 1:P=W.sent(),W.label=2;case 2:if(P===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return _=new Promise(function(z,ie){return v.signal.addEventListener("abort",function(){return ie({name:"AbortError",message:w||"Aborted"})})}),c(o(b,d,(x=r==null?void 0:r.getPendingMeta)==null?void 0:x.call(r,{requestId:b,arg:d},{getState:h,extra:g}))),[4,Promise.race([_,Promise.resolve(n(d,{dispatch:c,getState:h,extra:g,requestId:b,signal:v.signal,abort:$,rejectWithValue:function(z,ie){return new Zh(z,ie)},fulfillWithValue:function(z,ie){return new bx(z,ie)}})).then(function(z){if(z instanceof Zh)throw z;return z instanceof bx?i(z.payload,b,d,z.meta):i(z,b,d)})])];case 3:return S=W.sent(),[3,5];case 4:return T=W.sent(),S=T instanceof Zh?a(null,b,d,T.payload,T.meta):a(T,b,d),[3,5];case 5:return R=r&&!r.dispatchConditionRejection&&a.match(S)&&S.meta.condition,R||c(S),[2,S]}})})}();return Object.assign(m,{abort:$,requestId:b,arg:d,unwrap:function(){return m.then(uF)}})}}return Object.assign(u,{pending:o,rejected:a,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function uF(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function dF(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var ey="listenerMiddleware";hi(ey+"/add");hi(ey+"/removeAll");hi(ey+"/remove");var $x;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);_R();const cF={user:null,product:[],cartItem:[],qty:0,totalPrice:0},qw=iF({name:"userAuth",initialState:cF,reducers:{addProduct:(e,{payload:t})=>{e.product=t},addToCart:(e,{payload:t})=>{const n=e.cartItem.findIndex(r=>r._id===t._id);n>=0?e.cartItem[n].qty+=1:e.cartItem.push({...t,qty:1}),e.qty+=1,e.totalPrice+=t.qty*t.price},removeCart:(e,{payload:t})=>{const n=e.cartItem.findIndex(r=>r._id===t._id);e.cartItem[n].qty>1?e.cartItem[n].qty-=1:e.cartItem=e.cartItem.filter(r=>r._id!==t._id),e.qty-=1,e.totalPrice-=t.price},removeAllCart:e=>{e.cartItem=[],e.qty=0},total:(e,{payload:t})=>{const{totalCost:n,totalItems:r}=e.cart.reduce((i,o)=>{const{price:a,QTY:l}=o,u=a*l;return i.totalItems+=l,i.totalCost+=u,i},{totalCost:0,totalItems:0});e.MyTotalQTY=r,e.MyTotalCost=n},signOut:e=>{e.user=null}}}),{signOut:VG,addProduct:qG,addToCart:wx,removeCart:fF,removeAllCart:hF}=qw.actions,pF=qw.reducer,gF=({id:e,avatar:t,data:n,qty:r})=>{const i=Ma(l=>l.reducers.cartItem),o=i==null?void 0:i.find(l=>(l==null?void 0:l._id)===e),a=Vm();return s(TF,{children:s(EF,{children:y(IF,{children:[t==null?void 0:t.map((l,u)=>s(kF,{children:s(_F,{children:s("img",{src:l.url})})},u)),y(NF,{children:[y(OF,{children:[y(PF,{children:[s(SF,{children:s("span",{children:"Select Country"})}),y(CF,{children:[" ",s("div",{children:s(zS,{})}),s("span",{children:s(cn,{})})]})]}),y(n0,{children:[s(e0,{children:s("div",{children:s(VA,{})})}),y(t0,{children:[s(Xh,{children:"Door Delivery"}),y(Jh,{children:["Every Delivery will be at",s("br",{})," your preferred location,",s("br",{})," after 15days of ordering."]})]})]}),y(n0,{children:[s(e0,{children:s("div",{children:s(GA,{})})}),y(t0,{children:[s(Xh,{children:"Minimum order"}),y(Jh,{children:["#50,000 worth of item",s("br",{}),"is the minimum"]})]})]}),y(n0,{children:[s(e0,{children:s("div",{children:s(qA,{})})}),y(t0,{children:[s(Xh,{children:"Payment Method"}),y(Jh,{children:["All Items will be delivered",s("br",{})," after Payment"]})]})]})]}),y(wF,{children:[s(xF,{children:"Quantity"}),y(bF,{children:[s(mF,{onClick:()=>a(wx(n)),children:"+"}),s(yF,{children:o==null?void 0:o.qty}),s(vF,{disabled:(o==null?void 0:o.qty)<=0,onClick:()=>a(fF(n)),children:"-"})]}),s($F,{children:s("button",{onClick:()=>a(wx(n)),children:"Add To Cart"})})]})]})]})})})},mF=f.button`
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
`,yF=f.div`
  width: 70px;
  height: 70px;
  border: 1.6px solid grey;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  
`,vF=f.button`
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

`,xF=f.div`
  font-size: 22px;
  font-weight: 700;
  font-family: poppins;
`,bF=f.div`
  width: 70%;
  height: 125px;
  display: flex;
  cursor: pointer;

  align-items: center;
  justify-content: space-between;
`,$F=f.div`
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
`,wF=f.div`
  width: 100%;
  height: 195px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1100px) {
    align-items: center;
  }
`,SF=f.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  span {
    font-size: 22px;
    font-weight: 700;
    font-family: poppins;
  }
`,CF=f.div`
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
`,Jh=f.div`
  font-size: 15px;
  font-weight: 500;
  font-family: poppins;
`,Xh=f.div`
  font-size: 25px;
  margin-bottom: 15px;
  font-weight: 500;
  font-family: poppins;
`,e0=f.div`
  width: 100px;
  border-radius: 5px;
  div {
    font-size: 62px;
  }
`,t0=f.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`,PF=f.div`
  width: 90%;
  height: 70px;
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`,n0=f.div`
  width: 90%;
  height: 120px;
  border-bottom: 1.5px solid grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`,OF=f.div`
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
`;const _F=f.div`
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
`,kF=f.div`
  width: 450px;
  /* flex: 1; */
  padding: 50px 0;
`,NF=f.div`
  width: 550px;
  /* flex: 1; */
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 50px 0;
`,EF=f.div`
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
`;const IF=f.div`
  width: 100%;
  flex-wrap: wrap;
  /* height: 970px; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    justify-content: center;
  }
`,TF=f.div`
  width: 100%;
  /* height: 100vh; */
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
`,AF=({description:e})=>s(jF,{children:s(MF,{children:y(RF,{children:[s(FF,{children:"Product Details"}),s(DF,{children:e})]})})});f.div`
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
`;const RF=f.div`
  width: 94%;
  border: 1.8px solid black;
  border-radius: 3px;
  padding: 0 30px;
`,FF=f.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`,DF=f.div`
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
`;const MF=f.div`
  width: 95%;
  /* height: 595px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`,jF=f.div`
  width: 100%;
  /* height: 100vh; */
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
`,LF=({name:e,price:t})=>s(WF,{children:y(YF,{children:[y(zF,{children:[y(Sx,{children:[s("span",{children:"Home"}),s("div",{children:s(ev,{})})]}),y(Sx,{children:[s("span",{children:"All Items"})," ",s("div",{children:s(ev,{})})]})]}),s(UF,{children:e}),s(BF,{}),y(HF,{children:["₦",t]})]})}),zF=f.div`
  display: flex;
  width: 122px;
  align-items: center;
  justify-content: space-between;
`,Sx=f.div`
  display: flex;
  span {
    font-size: 13px;
    font-weight: 500;
    margin-top: 10px;
  }

  div {
    margin-top: 10px;
  }
`,UF=f.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
`,BF=f.div``,HF=f.div`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0;
`,WF=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`,YF=f.div`
  width: 93.5%;
  border: 1.8px solid black;
  padding: 0 10px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`,Kn=({id:e,index:t,name:n,price:r,img:i})=>s(Hs,{children:y(QF,{children:[s(VF,{children:s("img",{src:i})}),y(qF,{children:[" ",s(Cx,{to:`/detail/${e}`,children:n}),s(Cx,{to:"/cart",children:s("span",{children:s(Iw,{})})})]}),y(GF,{children:["₦",r]})]},t)}),Cx=f(ke)`
  color: black;
  text-decoration: none;
  cursor: pointer;
`,VF=f.div`
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
`,qF=f.div`
  font-size: 13px;
  font-weight: 500;
  span {
    margin-left: 10px;
    position: relative;
    bottom: -2px;
    color: #d975c0;
    cursor: pointer;
  }
`,GF=f.div`
  font-size: 13px;
  font-weight: 500;
`,QF=f.div`
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
`,Tr="https://crossbackend.onrender.com",Vl=async e=>(await Xe.get(`${Tr}/api/product/${e}/seller`)).data.data,KF=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.post(`${Tr}/api/product/${e}/create/phone`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},ZF=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.post(`${Tr}/api/product/${e}/create/cloth`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},JF=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.post(`${Tr}/api/product/${e}/create/electronics`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},XF=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.post(`${Tr}/api/product/${e}/create/food`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},eD=async({id:e,tag_No:t,quantity:n,startDate:r,endDate:i,active:o})=>{await Xe.patch(`${Tr}/api/product/${e}/update`,{id:e,tag_No:t,quantity:n,startDate:r,endDate:i,active:o}).then(a=>{localStorage.setItem("product",JSON.stringify(a.data.data)),console.log(a.data)})},Ga=async()=>await Xe.get(`${Tr}/api/product`).then(t=>t.data.data),tD=async e=>(await Xe.get(`${Tr}/api/product/${e}`)).data.data,nD=async({ids:e,quantities:t})=>{const n=await Xe.patch(`${Tr}/api/product/order`,{ids:e,quantities:t});return console.log(n),n.data.data},rD=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:Ga}),[t,n]=C.useState(0),r=e==null?void 0:e.filter(u=>u.status==="approved"),i=8,o=t*i,a=r==null?void 0:r.slice(o,o+i);var l=Intl.NumberFormat();return s(lD,{children:y(sD,{children:[s(oD,{children:"Mobiles"}),s(aD,{children:a==null?void 0:a.map((u,d)=>s(Kn,{id:u._id,name:u.name,price:l.format(u==null?void 0:u.price),img:u==null?void 0:u.avatar[0].url}))}),s(iD,{to:"/phone",children:s("button",{children:"See All"})})]})})},iD=f.div`
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
`,oD=f.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;
`,aD=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
`,sD=f.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  border: 1.9px solid #d975c0;
  padding: 0 10px;
  margin: 20px 0;
  border-radius: 5px;

  
`,lD=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,uD=()=>{const{id:e}=W$();Vm();const{data:t}=Ke({queryKey:["products",e],queryFn:()=>tD(e)});var n=Intl.NumberFormat();return s(dD,{children:y(cD,{children:[s(LF,{name:t==null?void 0:t.name,price:n.format(t==null?void 0:t.price)}),s(gF,{id:e,qty:t==null?void 0:t.quantity,avatar:t==null?void 0:t.avatar,data:t}),s(AF,{description:t==null?void 0:t.description}),s(rD,{})]})})},dD=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,cD=f.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
`,ty=({index:e,name:t,price:n,shippingFee:r,totalPrice:i,subtotal:o,qty:a,id:l})=>s("div",{children:y(yD,{children:[y(a0,{children:[y(mD,{children:[s(gD,{children:a}),s(pD,{src:"/Frame 1.png"})]}),y(hD,{children:[s(fD,{children:t}),y($u,{children:["₦",n]})]})]}),s(o0,{}),s(a0,{children:y(Px,{children:[y(r0,{children:[s(i0,{children:"Subtotal"}),y($u,{children:["₦",o]})]}),y(r0,{children:[s(i0,{children:"Shipping Fee"}),y($u,{children:["₦",r]})]})]})}),s(o0,{}),s(a0,{children:s(Px,{children:y(r0,{children:[s(i0,{children:"Total"}),y($u,{children:["₦",i]})]})})}),s(o0,{})]},l)}),Px=f.div``,r0=f.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  margin: 10px 0px;
`,$u=f.div`
  font-weight: 700;
`,i0=f.div`
  font-size: 18px;
  font-weight: 600;
  /* margin-bottom: 10px; */
`,fD=f.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,hD=f.div`
  margin-left: 20px;
`,o0=f.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,pD=f.img`
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
`,gD=f.div`
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
`,mD=f.div`
  margin-right: 20px;
`,a0=f.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 90%;
`,yD=f.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,vD=()=>s("div",{children:s(kD,{children:y(_D,{children:[s(OD,{children:y(PD,{children:[y(u0,{children:[s(l0,{children:"Contact"}),y(s0,{children:[s(Nx,{placeholder:"email"}),s("span",{children:"Chance"})]})]}),y(u0,{children:[s(l0,{children:"Address"}),y(s0,{children:[s(Nx,{placeholder:"Address"}),s("span",{children:"Chance"})]})]}),y(u0,{children:[s(l0,{children:"Payment Method"}),s(s0,{children:y(CD,{children:[y(kx,{children:[s(_x,{bg:"fff"}),s(Ox,{children:"Pay on delivery"})]}),s(SD,{}),y(kx,{children:[s(_x,{bg:""}),s(Ox,{children:"Pay on delivery"})]})]})})]}),y(wD,{children:[y($D,{children:[s("span",{children:s(jS,{})}),s("div",{children:"Return to Information"})]}),s(bD,{children:"Complete Order"})]})]})}),s(xD,{children:s(ty,{})})]})})}),xD=f.div`
    flex: 1;
    height: 100vh;
    border-left: 3px solid lightgray;
    /* background-color: blue; */
`,bD=f.button`
    padding: 15px 20px;
    border: #D975C0;
    background-color: #D975C0;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    cursor: pointer;
`,$D=f.div`
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
`,wD=f.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    margin-top: 30px;
`,SD=f.div`
    width: 100%;
    background-color: lightgray;
    height: 2px;
    margin: 10px 0px;
`,Ox=f.div`
    font-weight: 700;
    margin-right: 20px;
`,_x=f.div`
    border: 1px solid black;
    background-color: ${({bg:e})=>e?"#D975C0":"transparent"};
    border-radius: 50%;
    height: 25px;
    width: 25px;
    cursor: pointer;
`,kx=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,CD=f.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,Nx=f.input`
    width: 90%;
    height: 30px;
    border: 0px;
    outline: none;
    margin-left: 10px;

`,s0=f.div`
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
`,l0=f.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
`,u0=f.div`
    margin: 10px;
`,PD=f.div`
    width: 90%;
    margin-top: 20px;
`,OD=f.div`
    flex: 1;
    height: 100vh;
    display: flex;
    justify-content: center;
    /* background-color: gold; */
`,_D=f.div`
    width: 95%;
    display: flex;
`,kD=f.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,ND=()=>s(ED,{children:y(ID,{children:[s(TD,{children:s(Ml,{fontSize:"50px",color:"green"})}),y(RD,{children:["Account Information has been",s("br",{})," received and will be reviewed ",s("br",{}),"shortly."]}),s(AD,{to:"/auth/signin",children:s("button",{children:"Start Selling"})})]})}),ED=f.div`
  width: 100%;
  height: 42vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 30px; */
  padding-top: 80px;
`,ID=f.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`,TD=f.div``,AD=f(af)`
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
`,RD=f.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,FD=()=>s(DD,{children:y(MD,{children:[s(jD,{children:s(Ml,{fontSize:"50px",color:"green"})}),y(zD,{children:["You have successfully created",s("br",{})," an account"]}),s(LD,{to:"/business",children:s("button",{children:"Continue"})})]})}),DD=f.div`
  width: 100%;
  height: 42vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`,MD=f.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`,jD=f.div``,LD=f(af)`
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
`,zD=f.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,UD=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:Ga}),[t,n]=C.useState(0),r=8,i=t*r,o=e==null?void 0:e.slice(i,i+r),a=o==null?void 0:o.filter(h=>h.category==="phone"&&h.status==="approved"),l=o==null?void 0:o.filter(h=>h.category==="electronics"&&h.status==="approved"),u=o==null?void 0:o.filter(h=>h.category==="food"&&h.status==="approved"),d=o==null?void 0:o.filter(h=>h.category==="clothing"&&h.status==="approved");console.log(d);var c=Intl.NumberFormat();return y(BD,{children:[y(Pu,{children:[s(Su,{children:"Mobiles"}),s(Cu,{children:a==null?void 0:a.map((h,g)=>s(Kn,{id:h._id,index:g,name:h.name,price:c.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url}))}),s(wu,{to:"/phone",children:s("button",{children:"See All"})})]}),y(Pu,{children:[s(Su,{children:"Home Appliances"}),s(Cu,{children:l==null?void 0:l.map((h,g)=>s(Kn,{id:h._id,index:g,name:h.name,price:c.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url}))}),s(wu,{to:"/electronics",children:s("button",{children:"See All"})})]}),y(Pu,{children:[s(Su,{children:"Accessories"}),s(Cu,{children:d==null?void 0:d.map((h,g)=>s(Kn,{id:h._id,index:g,name:h.name,price:c.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url}))}),s(wu,{to:"/clothing",children:s("button",{children:"See All"})})]}),y(Pu,{children:[s(Su,{children:"Foodstuffs"}),s(Cu,{children:u==null?void 0:u.map((h,g)=>s(Kn,{id:h._id,index:g,name:h.name,price:c.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url}))}),s(wu,{to:"/food",children:s("button",{children:"See All"})})]})]})},wu=f(ke)`
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
`,Su=f.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;
`,Cu=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
`,Pu=f.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  border: 1.9px solid #d975c0;
  padding: 0 10px;
  margin: 20px 0;
  border-radius: 5px;

  
`,BD=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,HD=()=>s(WD,{children:y(YD,{children:[s(VD,{children:s(US,{fontSize:"50px",color:"red"})}),s(GD,{children:"Incorrect OTP number, please try again"}),s(qD,{to:"/auth/verify",children:s("button",{children:"Try again"})})]})}),WD=f.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`,YD=f.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`,VD=f.div``,qD=f(ke)`
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
`,GD=f.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,ny=[{name:"Nigeria",flag:"https://cdn-icons-png.flaticon.com/512/8603/8603374.png"},{name:"Ghana",flag:"https://cdn-icons-png.flaticon.com/512/8603/8603142.png"}],Gw="https://crossbackend.onrender.com",nr=async e=>(await Xe.get(`${Gw}/api/order`)).data.data,QD=e=>Xe.get(`${Gw}/api/order/${e}`).then(n=>n.data.data),KD="https://crossbackend.onrender.com",ZD=()=>{const e=nt();var t=Intl.NumberFormat();const n=Ma(k=>k.reducers.cartItem),r=Ma(k=>k.reducers.qty),i=n==null?void 0:n.reduce((k,de)=>k+de.qty*de.price+de.shippingFee,0),[o,a]=C.useState(ny);let[l,u]=C.useState(0);const[d,c]=C.useState(""),[h,g]=C.useState(""),[b,v]=C.useState(""),[w,$]=C.useState(""),[m,p]=C.useState(""),[x,S]=C.useState(""),[P,_]=C.useState(""),[T,R]=C.useState(""),[W,z]=C.useState(""),[ie,M]=C.useState(),[j,J]=C.useState(!1),[F,X]=C.useState(!1),[te,L]=C.useState("Payment before delivery"),[N,E]=C.useState([]),U=()=>{const k=n.map(de=>({productID:de._id,sellerID:de.user,qty:de.qty,price:de.price}));E(k)},D=()=>{u(()=>l+1),l>=o.length-1&&u(()=>l=0)},H=()=>{v(o[l].name)},Y=$t({mutationKey:["order"],mutationFn:async({firstName:k,lastName:de,email:Z,order_No:Ce,payment_method:me,country:ge,Localgovt:he,state:Ne,apartment:De,nearestBusStop:fe,products:O,subtotal:I,totalQty:A,address:re})=>{await Xe.post(`${KD}/api/order/create`,{firstName:k,lastName:de,email:Z,order_No:Ce,payment_method:me,country:ge,Localgovt:he,state:Ne,apartment:De,nearestBusStop:fe,products:O,subtotal:I,totalQty:A,address:re}).then(q=>{e("/finishshipping"),console.log(q.data),localStorage.setItem("order",JSON.stringify(q.data.data))}).catch(q=>{console.log(q)})},onError:k=>{console.log(k)}}),oe=k=>{k.preventDefault(),(h.length==0||w.length==0||d.length==0||b.length==0||T.length==0||!te||P.length==0||x.length==0||W.length==0||N.length==0||x.length==0)&&(X(!0),alert("All inputs most be filed ")),Y.mutate({firstName:h,lastName:w,email:d,order_No:ie,payment_method:te,country:b,Localgovt:T,state:P,apartment:x,nearestBusStop:W,products:N,subtotal:i,totalQty:r,address:m})};return C.useEffect(()=>{H(),U()},[l]),s("div",{children:s(dM,{children:y(uM,{children:[s(lM,{children:y(sM,{onSubmit:oe,children:[y(Ix,{children:[s(c0,{children:"Contact Information"}),s(Bn,{children:"Email"}),s(Hn,{children:s(ar,{placeholder:"email",value:d,onChange:k=>c(k.target.value)})})]}),y(Ix,{children:[s(c0,{children:"Payment Method"}),s(Hn,{children:y(aM,{children:[j?y(ku,{onClick:()=>{J(!1),L("Payment before delivery")},children:[s(_u,{bg:"fff"}),s(Ou,{children:"Payment on delivery"})]}):y(ku,{onClick:()=>{J(!0),L("Payment on delivery")},children:[s(_u,{bg:""}),s(Ou,{children:"Payment on delivery"})]}),s(oM,{}),j?y(ku,{onClick:()=>{J(!1),L("Payment before delivery")},children:[s(_u,{bg:""}),s(Ou,{children:"Payment before delivery"})]}):y(ku,{onClick:()=>{J(!0),L("Payment on delivery")},children:[s(_u,{bg:"fff"}),s(Ou,{children:"Payment before delivery"})]})]})})]}),y(Nu,{children:[s(c0,{children:"Shipping Address"}),s(Bn,{children:"Country"}),y(eM,{children:[" ",s(JD,{src:o[l].flag}),s(XD,{onClick:D,children:s(cn,{})})]})]}),y(Tx,{children:[y(Ex,{children:[s(Bn,{children:"First Name"}),s(Hn,{children:s(ar,{placeholder:"First Name",value:h,onChange:k=>g(k.target.value)})})]}),y(Ex,{children:[s(Bn,{children:"Last Name"}),s(Hn,{children:s(ar,{placeholder:"Last Name",value:w,onChange:k=>$(k.target.value)})})]})]}),y(Nu,{children:[s(Bn,{children:"Address"}),s(Hn,{children:s(ar,{placeholder:"Address",value:m,onChange:k=>p(k.target.value)})})]}),y(Nu,{children:[s(Bn,{children:"Apartment, Suite etc.... (Optional)"}),s(Hn,{children:s(ar,{placeholder:"Apartment, Suite etc....",value:x,onChange:k=>S(k.target.value)})})]}),y(Tx,{children:[y(d0,{children:[s(Bn,{children:"State"}),s(Hn,{children:s(ar,{placeholder:"Lagos",value:P,onChange:k=>_(k.target.value)})})]}),y(d0,{children:[s(Bn,{children:"LGA"}),s(Hn,{children:s(ar,{placeholder:"Ajeromi",value:T,onChange:k=>R(k.target.value)})})]}),y(d0,{children:[s(Bn,{children:"Nearest B/Stop"}),s(Hn,{children:s(ar,{placeholder:"OJA",value:W,onChange:k=>z(k.target.value)})})]})]}),y(Nu,{children:[s(Bn,{children:"Phone number"}),s(Hn,{children:s(ar,{placeholder:"Phone number",type:"number",value:ie,onChange:k=>M(k.target.value)})})]}),y(iM,{children:[y(rM,{children:[s("span",{children:s(LS,{})}),s("div",{onClick:()=>{e(-1)},children:"Return to Cart"})]}),s(nM,{type:"submit",children:"Continue Shopping"})]})]})}),s(tM,{children:n==null?void 0:n.map((k,de)=>s(ty,{index:de,name:k.name,price:t.format(k.price),shippingFee:k==null?void 0:k.shippingFee,totalPrice:t.format(i),subtotal:t.format(k.price*k.qty),qty:k.qty,id:k._id}))})]})})})},JD=f.img`
  width: 40px;
`,XD=f.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Ex=f.div`
  width: 45%;
`,d0=f.div`
  width: 30%;
`,eM=f.div`
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
`,tM=f.div`
  flex: 1;

  @media (max-width: 768px ){
    display: none;
  }
  /* background-color: blue; */
`,nM=f.button`
  padding: 15px 20px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`,rM=f.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-weight: 600;
    margin-left: 10px;
    color: #3c3c3c;
  }
`,iM=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin-top: 30px;

  span {
    margin-top: 5px;
  }
`,oM=f.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,Ou=f.div`
  font-weight: 700;
  margin-right: 20px;
`,_u=f.div`
  border: 1px solid black;
  background-color: ${({bg:e})=>e?"#D975C0":"transparent"};
  border-radius: 50%;
  height: 25px;
  width: 25px;
  cursor: pointer;
`,ku=f.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,aM=f.div`
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
`,c0=f.div`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 14px;
`,Ix=f.div`
  margin-bottom: 50px;
`,Nu=f.div`
  margin-bottom: 20px;
`,Tx=f.div`
  margin-bottom: 20px;
  display: flex;

  justify-content: space-between;
  align-items: center;
`,sM=f.form`
  width: 90%;
  margin-top: 20px;
`,lM=f.div`
  flex: 1;
  border-right: 2px solid lightgray;
  display: flex;
  justify-content: center;
  /* background-color: gold; */
`,uM=f.div`
  width: 95%;
  display: flex;
`,dM=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,cM=({index:e,totalPrice:t,subtotal:n,props:r})=>{var o,a,l,u,d,c;var i=Intl.NumberFormat();return s("div",{children:y(vM,{children:[y(Dx,{children:[y(yM,{children:[s(mM,{children:r.qty}),s(gM,{src:(a=(o=r==null?void 0:r.productID)==null?void 0:o.avatar[0])==null?void 0:a.url})]}),y(pM,{children:[s(hM,{children:(l=r==null?void 0:r.productID)==null?void 0:l.name}),y(f0,{children:["₦ ",i.format((u=r==null?void 0:r.productID)==null?void 0:u.price)]})]})]}),s(Fx,{}),s(Dx,{children:y(fM,{children:[y(Ax,{children:[s(Rx,{children:"Subtotal"}),y(f0,{children:["₦",i.format((r==null?void 0:r.qty)*((d=r==null?void 0:r.productID)==null?void 0:d.price))]})]}),y(Ax,{children:[s(Rx,{children:"Shipping Fee"}),y(f0,{children:["₦ ",i.format((c=r==null?void 0:r.productID)==null?void 0:c.shippingFee)]})]})]})}),s(Fx,{})]},e)})},fM=f.div``,Ax=f.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  margin: 10px 0px;
`,f0=f.div`
  font-weight: 700;
`,Rx=f.div`
  font-size: 18px;
  font-weight: 600;
  /* margin-bottom: 10px; */
`,hM=f.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,pM=f.div`
  margin-left: 20px;
`,Fx=f.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,gM=f.img`
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
`,mM=f.div`
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
`,yM=f.div`
  margin-right: 20px;
`,Dx=f.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 90%;
`,vM=f.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,xM=()=>{var h,g,b;const e=Vm(),t=nt(),n=JSON.parse(localStorage.getItem("order")),r=Ma(v=>v.reducers.cartItem),i=n==null?void 0:n._id,{data:o}=Ke({queryKey:["order",i],queryFn:()=>QD(i)});var a=Intl.NumberFormat();const l=$t({mutationKey:["products"],mutationFn:nD,onSuccess:()=>{t("/allitems"),e(hF(r)),localStorage.removeItem("order")}}),u=(h=n==null?void 0:n.products)==null?void 0:h.map(v=>v==null?void 0:v.productID),d=(g=n==null?void 0:n.products)==null?void 0:g.map(v=>v==null?void 0:v.qty),c=()=>{l.mutate({ids:u,quantities:d})};return s("div",{children:s(jM,{children:y(MM,{children:[y(DM,{children:[y(OM,{children:[s(_M,{children:s(Ml,{fontSize:"32px",color:"white"})}),y(kM,{children:[y(NM,{children:[" ","Order ",s("span",{children:o==null?void 0:o.order_No})]}),y(EM,{children:[" ","Thank you ",s("span",{children:o==null?void 0:o.firstName})]})]})]}),y(FM,{children:[y(v0,{children:[s(y0,{children:"Confirmation"}),s(m0,{children:s(Mx,{children:"Your order will be shipped immediately"})})]}),y(v0,{children:[s(y0,{children:"Shipping Update"}),s(m0,{children:s(Mx,{children:"You will get shipping and delivery update by email"})})]}),y(v0,{children:[s(y0,{children:"Customer Information"}),s(m0,{children:y(RM,{children:[y(g0,{children:[s(p0,{children:"Contact Information"}),s(h0,{children:o==null?void 0:o.email})]}),y(g0,{children:[s(p0,{children:"Shipping Address"}),s(h0,{children:o==null?void 0:o.address})]}),y(g0,{children:[s(p0,{children:"Payment Method"}),s(h0,{children:o==null?void 0:o.payment_method})]})]})})]}),s(AM,{children:s(TM,{onClick:c,children:"Complete Shipping"})})]})]}),y(IM,{children:[(b=o==null?void 0:o.products)==null?void 0:b.map((v,w)=>s(cM,{index:w,totalPrice:a.format(o==null?void 0:o.subtotal),subtotal:o==null?void 0:o.totalQty,props:v})),s(PM,{children:s(bM,{children:y($M,{children:[s(SM,{children:"Total"}),y(wM,{children:["₦",a.format(o==null?void 0:o.subtotal)]})]})})}),s(CM,{})]})]})})})},bM=f.div``,$M=f.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  margin: 10px 0px;
`,wM=f.div`
  font-weight: 700;
`,SM=f.div`
  font-size: 18px;
  font-weight: 600;
  /* margin-bottom: 10px; */
`,CM=f.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,PM=f.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 90%;
  margin-left: 15px;
`,OM=f.div`
  display: flex;
  padding: 0 10px;
`,_M=f.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d975c0;
  border-radius: 7px;
`,kM=f.div`
  padding: 3px 10px;
`,NM=f.div`
  font-weight: lighter;
  font-size: 12px;
`,EM=f.div`
  font-weight: 500;
  font-size: 14px;
  margin-top: 6px;
`,Mx=f.div`
  margin-left: 10px;
  font-weight: 600;
  color: #363636;
`,IM=f.div`
  flex: 1;
  height: 100vh;
  border-left: 3px solid lightgray;
  /* background-color: blue; */

  @media (max-width: 700px){
    display: none;
  }
`,TM=f.button`
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
`;const AM=f.div`
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
`;const h0=f.div`
  font-weight: 500;
  margin-right: 20px;
`,p0=f.div`
  font-weight: 700;
`,g0=f.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,RM=f.div`
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
`;const m0=f.div`
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
`,y0=f.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,v0=f.div`
  margin: 10px;
`,FM=f.div`
  width: 90%;
  margin-top: 20px;
`,DM=f.div`
  flex: 1;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: gold; */
`,MM=f.div`
  width: 95%;
  display: flex;
`,jM=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;var jx=function(e){return typeof e=="object"&&e!==null},Qw=function(e){var t=e.value,n=t===void 0?"":t,r=e.numInputs,i=r===void 0?4:r,o=e.onChange,a=e.renderInput,l=e.shouldAutoFocus,u=l===void 0?!1:l,d=e.inputType,c=d===void 0?"text":d,h=e.renderSeparator,g=e.placeholder,b=e.containerStyle,v=e.inputStyle,w=ne.useState(0),$=w[0],m=w[1],p=ne.useRef([]),x=function(){return n?n.toString().split(""):[]},S=c==="number"||c==="tel";ne.useEffect(function(){p.current=p.current.slice(0,i)},[i]),ne.useEffect(function(){var F;u&&((F=p.current[0])===null||F===void 0||F.focus())},[u]);var P=function(){if(typeof g=="string"){if(g.length===i)return g;g.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},_=function(F){var X=S?!isNaN(Number(F)):typeof F=="string";return X&&F.trim().length===1},T=function(F){var X=F.target.value;if(_(X))M(X),ie($+1);else{var te=F.nativeEvent;te.data===null&&te.inputType==="deleteContentBackward"&&(F.preventDefault(),M(""),ie($-1))}},R=function(F){return function(X){m(X),F.target.select()}},W=function(){m($-1)},z=function(F){var X=x();F.code==="Backspace"?(F.preventDefault(),M(""),ie($-1)):F.code==="Delete"?(F.preventDefault(),M("")):F.code==="ArrowLeft"?(F.preventDefault(),ie($-1)):F.code==="ArrowRight"||F.key===X[$]?(F.preventDefault(),ie($+1)):(F.code==="Spacebar"||F.code==="Space"||F.code==="ArrowUp"||F.code==="ArrowDown")&&F.preventDefault()},ie=function(F){var X,te,L=Math.max(Math.min(i-1,F),0);p.current[L]&&((X=p.current[L])===null||X===void 0||X.focus(),(te=p.current[L])===null||te===void 0||te.select(),m(L))},M=function(F){var X=x();X[$]=F[0],j(X)},j=function(F){var X=F.join("");o(X)},J=function(F){var X;F.preventDefault();var te=x(),L=$,N=F.clipboardData.getData("text/plain").slice(0,i-$).split("");if(!(S&&N.some(function(U){return isNaN(Number(U))}))){for(var E=0;E<i;++E)E>=$&&N.length>0&&(te[E]=(X=N.shift())!==null&&X!==void 0?X:"",L++);ie(L),j(te)}};return ne.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},jx(b)&&b),className:typeof b=="string"?b:void 0},Array.from({length:i},function(F,X){return X}).map(function(F){var X,te,L;return ne.createElement(ne.Fragment,{key:F},a({value:(X=x()[F])!==null&&X!==void 0?X:"",placeholder:(L=(te=P())===null||te===void 0?void 0:te[F])!==null&&L!==void 0?L:void 0,ref:function(N){return p.current[F]=N},onChange:T,onFocus:function(N){return R(N)(F)},onBlur:W,onKeyDown:z,onPaste:J,autoComplete:"off",maxLength:1,"aria-label":"Please enter OTP character ".concat(F+1),style:Object.assign({width:"1em",textAlign:"center"},jx(v)&&v),className:typeof v=="string"?v:void 0,type:c},F),F<i-1&&(typeof h=="function"?h(F):h))}))};const LM=()=>{const e=nt(),[t,n]=C.useState(""),r=JSON.parse(localStorage.getItem("user")),i=$t({mutationFn:mI,onSuccess:()=>{r.isSeller===!0&&e("/auth/personalinfo")},onError:()=>{e("/auth/otperror")}});return s(zM,{children:y(UM,{children:[s(BM,{children:"OTP Verification!"}),s(WM,{children:"Please enter the OTP you received"}),s(Qw,{style:{border:"1px solid gold"},value:t,onChange:n,numInputs:6,renderSeparator:s("span",{children:" "}),renderInput:a=>s("input",{...a}),containerStyle:"containerStyle",inputStyle:"inputStyle",width:"70px"}),s(HM,{children:s("button",{onClick:()=>{const a=r._id;i.mutate({id:a,otp:t})},children:"Enter"})})]})})},zM=f.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`,UM=f.div`
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
`,BM=f.div`
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
`,HM=f.div`
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
`,WM=f.div`
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

`;const YM=()=>{const e=nt(),[t,n]=C.useState(""),[r,i]=C.useState(""),[o,a]=C.useState(""),l=$t({mutationFn:bI,onSuccess:c=>{console.log(c),e("/auth/review")},onError:c=>{console.log(c.message)}}),u=JSON.parse(localStorage.getItem("user"));return s("div",{children:s(ZM,{children:y(KM,{children:[s(QM,{children:"Provide Bank Details"}),y(GM,{children:["Enter every necessary details to create",s("br",{})," your own seller account"," "]}),y(qM,{onSubmit:c=>{c.preventDefault();const h=u._id,g=!0,b=parseInt(o);l.mutate({id:h,bankName:t,accountName:r,accNumber:b,completed:g})},children:[y(w0,{children:[s($0,{children:"Bank"}),s(x0,{children:s(b0,{placeholder:"Bank",value:t,onChange:c=>n(c.target.value)})})]}),y(w0,{children:[s($0,{children:"Account Name"}),s(x0,{children:s(b0,{placeholder:"Account Name",value:r,onChange:c=>i(c.target.value)})})]}),y(w0,{children:[s($0,{children:"Account Number"}),s(x0,{children:s(b0,{placeholder:"Account Number",type:"number",value:o,onChange:c=>a(c.target.value)})})]}),s(VM,{type:"submit",children:l.status==="Loading..."?"Loadding":"Continue"})]})]})})})},VM=f.button`
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
`;const x0=f.div`
  width: 350px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`,b0=f.input`
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
`,$0=f.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`,w0=f.div`
  margin-bottom: 10px;
`,qM=f.form`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,GM=f.div`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 20px;
`,QM=f.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`,KM=f.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  /* border: 1px solid gray; */
`,ZM=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,JM=()=>{const e=nt(),[t,n]=C.useState(ny);let[r,i]=C.useState(0);const[o,a]=C.useState(""),[l,u]=C.useState("Default"),[d,c]=C.useState("123456"),[h,g]=C.useState(""),[b,v]=C.useState(""),[w,$]=C.useState(""),m=()=>{i(()=>r+1),r>=t.length-1&&i(()=>r=0)},p=()=>{$(t[r].name)},x=$t({mutationFn:xI,onSuccess:_=>{console.log(_),e("/auth/information")},onError:_=>{console.log(_.message)}});C.useEffect(()=>{p()},[r]);const S=JSON.parse(localStorage.getItem("user")),P=_=>{_.preventDefault();const T=S._id,R=parseInt(d);x.mutate({id:T,address:o,address2:l,shippingFrom:w,codePostal:R,shopName:h,city:b})};return console.log(w),s("div",{children:s(aj,{children:y(oj,{children:[s(ij,{children:"Business Information "}),y(rj,{children:["Enter every necessary details to create your own seller account"," "]}),y(nj,{onSubmit:P,children:[y(wo,{children:[s($o,{children:"Shop Name *"}),s(bo,{children:s(us,{value:h,onChange:_=>g(_.target.value)})})]}),y(wo,{children:[s($o,{children:"Postal code/Zip code"}),s(bo,{children:s(us,{type:"number",value:d,onChange:_=>c(_.target.value)})})]}),y(wo,{children:[s($o,{children:"Address *"}),s(bo,{children:s(us,{value:o,onChange:_=>a(_.target.value)})})]}),y(wo,{children:[s($o,{children:"Address 2"}),s(bo,{children:s(us,{value:l,onChange:_=>u(_.target.value)})})]}),y(wo,{children:[s($o,{children:"City / Town"}),s(bo,{children:s(us,{value:b,onChange:_=>v(_.target.value)})})]}),y(wo,{children:[s($o,{children:"What country are you shipping from?"}),y(bo,{children:[s(XM,{src:t[r].flag}),s(tj,{onClick:m,children:s(cn,{})})]})]}),s(ej,{type:"submit",children:x.status==="loading"?"Loading...":"Continue"})]})]})})})},XM=f.img`
  width: 40px;
`,ej=f.button`
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
`;const tj=f.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,bo=f.div`
  width: 350px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`,us=f.input`
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
`,$o=f.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`,wo=f.div`
  margin-bottom: 10px;
`,nj=f.form`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,rj=f.div`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 20px;
`,ij=f.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`,oj=f.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  /* border: 1px solid gray; */
`,aj=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,sj=()=>{const e=nt(),[t,n]=C.useState(ny);let[r,i]=C.useState(0),[o,a]=C.useState(!1);const[l,u]=C.useState(""),[d,c]=C.useState(""),[h,g]=C.useState(""),b=()=>{if(o===!0)return a(()=>o=!1);a(()=>o=!0)},v=()=>{i(()=>r+1),r>=t.length-1&&i(()=>r=0)},w=()=>{g(t[r].name)},$=$t({mutationFn:vI,onSuccess:x=>{console.log(x),e("/auth/businessinfo")},onError:x=>{console.log(x.message)}});C.useEffect(()=>{w()},[r]);const m=JSON.parse(localStorage.getItem("user"));return s("div",{children:s(vj,{children:y(yj,{children:[s(mj,{children:"Personal Details "}),s(gj,{children:"Almost there, just few more details"}),y(pj,{onSubmit:x=>{x.preventDefault();const S=m._id;$.mutate({id:S,gender:l,DateOfBirth:d,country:h})},children:[y(P0,{children:[s(C0,{children:"Date of Birth"}),s(S0,{children:s(hj,{placeholder:"04/19/1999",type:"date",value:d,onChange:x=>{c(x.target.value)}})})]}),y(P0,{children:[s(C0,{children:"Gender"}),s(S0,{children:y(lj,{value:l,onChange:x=>{u(x.target.value)},children:[s("option",{children:"Select"}),s("option",{children:"Male"}),s("option",{children:"Female"}),s("option",{children:"Other"})]})})]}),y(P0,{children:[s(C0,{children:"Country"}),y(S0,{children:[s(cj,{src:t[r].flag}),s(fj,{onClick:v,children:s(cn,{})})]})]}),o?s(Lx,{bg:"",type:"submit",children:$.status==="loading"?"Loading...":"Continue"}):s(Lx,{bg:"fff",disabled:!0,children:"Continue"}),y(dj,{children:[" ",s(uj,{type:"checkbox",onClick:b}),"Don't have an account? ",s("span",{children:"Terms and Conditions"})]})]})]})})})},lj=f.select`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
`,uj=f.input`
  margin-right: 10px;
  cursor: pointer;
`,dj=f.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,cj=f.img`
  width: 40px;
`,Lx=f.button`
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
`;const fj=f.div`
  cursor: pointer;
`,S0=f.div`
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
`,hj=f.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: 0px;
`,C0=f.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`,P0=f.div`
  margin-bottom: 10px;
`,pj=f.form`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,gj=f.div`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 20px;
`,mj=f.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`,yj=f.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  /* border: 1px solid gray; */
`,vj=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;function xj(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"}}]})(e)}function bj(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 6a3.939 3.939 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 0 0-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6zm-1 10h2v2h-2z"}},{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"}}]})(e)}function $j(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"}}]})(e)}function Rf(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"}}]})(e)}function Qa(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"}}]})(e)}function wj(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"}}]})(e)}const Sj=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:Ga}),[t,n]=C.useState(0),r=e==null?void 0:e.filter(l=>l.status==="approved"),i=8,o=t*i,a=r==null?void 0:r.slice(o,o+i);return s(Pj,{children:y(Cj,{children:[s(_j,{children:"Featured "}),s(Ej,{children:a==null?void 0:a.map((l,u)=>s(Nj,{children:s(kj,{children:s(Oj,{src:l==null?void 0:l.avatar[0].url})})},u))})]})})},Cj=f.div`
  width: 93%;
  /* height: 200px; */
  overflow-x: auto;
  -ms-overflow-style: none;
  background: #D9D9D9;
`,Pj=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`,Oj=f.img`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  background-color: gold;
  margin: 20px;
`,_j=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
  margin-top: 10px;
`,kj=f.div`
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
`;f.tr``;const Nj=f.tr`
 
`,Ej=f.div`
  width: 78rem;
  /* height: 150px; */
  /* padding: 0px 20px; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* overflow-x: scroll; */
`,Ij=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:Ga}),[t,n]=C.useState(0),r=8,i=t*r,o=e==null?void 0:e.slice(i,i+r),a=o==null?void 0:o.filter(h=>h.category==="phone"&&h.status==="approved"),l=o==null?void 0:o.filter(h=>h.category==="electronics"&&h.status==="approved"),u=o==null?void 0:o.filter(h=>h.category==="food"&&h.status==="approved"),d=o==null?void 0:o.filter(h=>h.category==="clothing"&&h.status==="approved");var c=Intl.NumberFormat();return y(Tj,{children:[s(Sj,{}),y(Au,{children:[s(Iu,{children:"Mobiles"}),s(Tu,{children:a==null?void 0:a.map((h,g)=>s(Kn,{id:h._id,name:h.name,price:c.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url}))}),s(Eu,{to:"/phone",children:s("button",{children:"See All"})})]}),y(Au,{children:[s(Iu,{children:"Home Appliances"}),s(Tu,{children:l==null?void 0:l.map((h,g)=>s(Kn,{id:h._id,name:h.name,price:c.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url}))}),s(Eu,{to:"/electronics",children:s("button",{children:"See All"})})]}),y(Au,{children:[s(Iu,{children:"Accessories"}),s(Tu,{children:d==null?void 0:d.map((h,g)=>s(Kn,{id:h._id,name:h.name,price:c.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url}))}),s(Eu,{to:"/clothing",children:s("button",{children:"See All"})})]}),y(Au,{children:[s(Iu,{children:"Foodstuffs"}),s(Tu,{children:u==null?void 0:u.map((h,g)=>s(Kn,{id:h._id,name:h.name,price:c.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url}))}),s(Eu,{to:"/food",children:s("button",{children:"See All"})})]})]})},Eu=f(ke)`
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
`,Iu=f.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;
`,Tu=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
`,Au=f.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  border: 1.9px solid #d975c0;
  padding: 0 10px;
  margin: 20px 0;
  border-radius: 5px;

  
`,Tj=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,Aj=()=>{C.useState();const e=nt(),t=JSON.parse(localStorage.getItem("user")),n=Ma(a=>a.reducers.cartItem),r=n==null?void 0:n.reduce((a,l)=>a+l.qty*l.price,0),i=()=>{t?r>=5e4?e("/checkout"):alert("You must have a total price of ₦50,000 to perform this action"):e("/login-user")};var o=Intl.NumberFormat();return s("div",{children:s(Vj,{children:y(Yj,{children:[s(Hj,{children:"Shopping Cart"}),s(Lj,{children:y(jj,{children:[y(Mj,{children:[s(Fu,{children:s(Ei,{children:"Item "})}),s(Fu,{children:s(Ei,{children:"Price "})}),s(Fu,{children:s(Ei,{children:"Quantity "})}),s(Fu,{children:s(Ei,{children:"Total Price "})})]}),n==null?void 0:n.map(a=>y(Dj,{children:[s(Ru,{children:y(Fj,{children:[s("span",{children:s(Rj,{src:a==null?void 0:a.avatar[0].url})}),a==null?void 0:a.name]})}),y(Ru,{children:[" ",y(Ei,{children:["₦",o.format(a.price)]})]}),y(Ru,{children:[" ",s(Ei,{children:s("div",{children:a.qty})})]}),y(Ru,{children:[" ",y(Ei,{children:["₦",o.format(a.qty*a.price)]})]})]},a._id))]})}),s(Wj,{children:y(Bj,{children:[s("span",{children:"SUBTOTAL"}),y("div",{children:["₦",o.format(r)]}),s(Uj,{onClick:i,children:" Checkout"}),y(zj,{children:[s(QA,{color:"#0a223a",fontSize:"40px"}),s(FS,{fontSize:"40px"})]})]})})]})})})},Rj=f.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background-color: gold;
  margin-right: 10px;
`,Fj=f.div`
  display: flex;
  align-items: center;

  :hover {
    color: blue;
  }
  cursor: pointer;
`,Ru=f.td`
  padding: 10px 10px;
  font-size: 16px;
  font-weight: 400;
`,Dj=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
  text-align: center;
`,Ei=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    font-size: 13px;
    font-weight: 500;
    border: 1.8px solid black;
    padding: 15px 20px;
  }
`,Fu=f.th`
  padding: 10px 15px;
  
  font-size: 18px;
  font-weight: 600;
`,Mj=f.tr`
`,jj=f.table`
  width: 100%;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
`,Lj=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,zj=f.div`
  width: 130px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
`,Uj=f.button`
  padding: 12px 35px;
  border: 0;
  outline: none;
  background-color: #e8559e;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`,Bj=f.div`
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
`,Hj=f.div`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 40px;
`,Wj=f.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1.9px solid grey;
  padding: 20px 0;
`,Yj=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`,Vj=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,qj=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:Ga}),{id:t}=W$(),[n,r]=C.useState(0),i=20,o=n*i,a=e==null?void 0:e.slice(o,o+i),l=a==null?void 0:a.filter(c=>c.category===t||c.name===t||c.brand===t),u=l==null?void 0:l.filter(c=>c.status==="approved");var d=Intl.NumberFormat();return s(Kj,{children:s(Qj,{children:s(Gj,{children:u==null?void 0:u.map((c,h)=>s(Kn,{id:c._id,name:c.name,price:d.format(c==null?void 0:c.price),img:c==null?void 0:c.avatar[0].url}))})})})};f.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;

  @media (max-width: 380px){
    font-size: 18px;
  }
`;const Gj=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`,Qj=f.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 10px;
  margin: 10px 0;
  border-radius: 5px;

  
`,Kj=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,Zj=()=>s("div",{children:s(dL,{children:y(uL,{children:[y(lL,{children:[y(Jj,{children:[s(Xj,{children:s(Ml,{fontSize:"32px",color:"white"})}),y(eL,{children:[y(tL,{children:[" ","Order ",s("span",{children:"05432"})]}),y(nL,{children:[" ","Thank you ",s("span",{children:"Manel"})]})]})]}),y(sL,{children:[y(I0,{children:[s(E0,{children:"Contact"}),s(N0,{children:s(zx,{children:"You@example.com"})})]}),y(I0,{children:[s(E0,{children:"Shipping Update"}),s(N0,{children:s(zx,{children:"You will get shipping and delivery update by email"})})]}),y(I0,{children:[s(E0,{children:"Customer Information"}),s(N0,{children:y(aL,{children:[y(k0,{children:[s(_0,{children:"Contact Information"}),s(O0,{children:"pay@gmail.com"})]}),y(k0,{children:[s(_0,{children:"Shipping Address"}),s(O0,{children:"Location"})]}),y(k0,{children:[s(_0,{children:"Payment Method"}),s(O0,{children:"Location"})]})]})})]}),s(oL,{children:s(iL,{children:"Complete Shipping"})})]})]}),s(rL,{children:s(ty,{})})]})})}),Jj=f.div`
  display: flex;
  padding: 0 10px;
`,Xj=f.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d975c0;
  border-radius: 7px;
`,eL=f.div`
  padding: 3px 10px;
`,tL=f.div`
  font-weight: lighter;
  font-size: 12px;
`,nL=f.div`
  font-weight: 500;
  font-size: 14px;
  margin-top: 6px;
`,zx=f.div`
  margin-left: 10px;
  font-weight: 600;
  color: #363636;
`,rL=f.div`
  flex: 1;
  height: 100vh;
  border-left: 3px solid lightgray;
  /* background-color: blue; */
`,iL=f.button`
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
`;const oL=f.div`
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
`;const O0=f.div`
  font-weight: 500;
  margin-right: 20px;
`,_0=f.div`
  font-weight: 700;
`,k0=f.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,aL=f.div`
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
`;const N0=f.div`
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
`,E0=f.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,I0=f.div`
  margin: 10px;
`,sL=f.div`
  width: 90%;
  margin-top: 20px;
`,lL=f.div`
  flex: 1;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: gold; */
`,uL=f.div`
  width: 95%;
  display: flex;
`,dL=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,cL=()=>ym([{path:"/",children:[{index:!0,element:s(xP,{})},{path:"/auth",children:[{index:!0,element:s(mA,{})},{path:"signin",element:s(CA,{})},{path:"verify",element:s(LM,{})},{path:"information",element:s(FA,{})},{path:"bankdetails",element:s(YM,{})},{path:"businessinfo",element:s(JM,{})},{path:"personalInfo",element:s(sj,{})},{path:"review",element:s(ND,{})},{path:"acct-review",element:s(FD,{})},{path:"otperror",element:s(HD,{})}]},{path:"/allitems",element:s(UD,{})},{path:"/featured",element:s(Ij,{})},{path:"/:id",element:s(qj,{})},{path:"/checkout",element:s(ZD,{})},{path:"/finishshipping",element:s(xM,{})},{path:"/ready-to-ship",element:s(Zj,{})},{path:"/cart",element:s(Aj,{})},{path:"/detail/:id",element:s(uD,{})},{path:"/payment",children:[{index:!0,element:s(vD,{})}]}]}]);function Ux(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function fL(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(e)}const hL=({myRef:e})=>{const t=JSON.parse(localStorage.getItem("user"));return s("div",{children:y(pL,{ref:e,children:[s(jr,{to:"/electronics",children:"Electronics"}),s(jr,{to:"/phone",children:"Mobile Phones"}),s(jr,{to:"/clothing",children:"Clothing & Fashion"}),s(jr,{to:"/food",children:"Food & Groceries"}),s(jr,{to:"/allitems",children:"All Products"}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),t?s(Hs,{children:s(jr,{to:"/",onClick:()=>{localStorage.removeItem("user")},children:"Log Out"})}):y("div",{children:[s(jr,{to:"/signup-user",children:"Create Account"}),s(jr,{to:"/seller-page",children:"Create Seller"})]})]})})},pL=f.div`
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
`,Bx=({setshow_search:e})=>{const{data:t}=Ke({queryKey:["products"],queryFn:Ga}),[n,r]=C.useState(0),i=t==null?void 0:t.filter(b=>b.status==="approved"),o=20,a=n*o,l=i==null?void 0:i.slice(a,a+o),[u,d]=C.useState(),c=["name","brand","category"],h=b=>{const v=b==null?void 0:b.filter(w=>c.some($=>{const m=w[$];return typeof m=="string"&&m.toLowerCase().includes(u==null?void 0:u.toLowerCase())}));return u&&v!=null&&v.length?v:null},g=h(l);return y(mL,{children:[y(vL,{children:[s("input",{placeholder:"Search by name or brand",value:u,onChange:b=>d(b.target.value)}),s("button",{onClick:h,children:s(Qa,{})})]}),s("div",{children:g==null?void 0:g.map((b,v)=>s(yL,{onClick:()=>{e(!1)},children:s(gL,{to:`/${b.name}`,onClick:()=>{d("")},children:b.name})},b._id))})]})},gL=f(ke)`
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
`,mL=f.div`

  @media (max-width: 768px){
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`,yL=f.div`
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
`,vL=f.div`
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
`,xL=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[i,o]=C.useState(!1),[a,l]=C.useState(!1),u=JSON.parse(localStorage.getItem("user")),d=C.useRef(),c=Ma(w=>w.reducers.cartItem),h=nt(),g=()=>{localStorage.removeItem("user"),h("/")},b=()=>{d.current.style.left="0px",o(!0)},v=()=>{d.current.style.left="-1000px",o(!1)};return y("div",{children:[s(OL,{children:y(_L,{children:[y(kL,{children:[s("img",{src:"/logo 1.png"}),s("div",{children:"Cross Africa"})]}),y(NL,{children:[y(ds,{onMouseOver:()=>{t(!0)},onMouseLeave:()=>{t(!1)},children:[s("div",{children:"Categories"}),s("span",{children:s(cn,{})})]}),e?y(PL,{onMouseOver:()=>{t(!0)},onMouseLeave:()=>{t(!1)},children:[s(ke,{to:"/electronics",style:{textDecoration:"none",width:"100%"},children:s(Ii,{children:"Electronics"})}),s(ke,{to:"/phone",style:{textDecoration:"none",width:"100%"},children:s(Ii,{children:"Mobile Phones"})}),s(ke,{to:"/clothing",style:{textDecoration:"none",width:"100%"},children:s(Ii,{children:"Clothing & Fashion"})}),s(ke,{to:"/food",style:{textDecoration:"none",width:"100%"},children:s(Ii,{children:"Food & Groceries"})})]}):null,s(wL,{children:s(Bx,{})}),y(ds,{onMouseOver:()=>{r(!0)},onMouseLeave:()=>{r(!1)},children:[s("div",{children:" Account"}),s("span",{children:s(cn,{})})]}),n?s(CL,{onMouseOver:()=>{r(!0)},onMouseLeave:()=>{r(!1)},children:u?s(Hs,{children:s(Ii,{onClick:g,children:"Log Out"})}):y(Hs,{children:[s(ke,{to:"/signup-user",style:{textDecoration:"none",width:"100%"},children:s(Ii,{children:"Create Account"})}),s(ke,{to:"/seller-page",style:{textDecoration:"none",width:"100%"},children:s(Ii,{children:"Create Seller"})})]})}):null,s(ds,{onClick:()=>{l(!0)},children:y($L,{children:[s("div",{children:"Search"}),s(fL,{})]})}),y(ds,{children:[s("div",{children:" Cart"}),s(ke,{to:"/cart",style:{textDecoration:"none"},children:y("span",{children:[s(Iw,{color:"black"}),c.length>0?s(SL,{children:c.length}):null]})})]}),y(ds,{children:[s("div",{children:"Help"}),s("span",{children:s(bj,{})})]}),s(EL,{children:i?s(Ux,{size:"20px",onClick:v}):s(Ux,{size:"20px",onClick:b})}),s("div",{onClick:v,children:s(hL,{myRef:d})})]})]})}),a?s(bL,{children:s(Bx,{setshow_search:l})}):null]})},bL=f.div`
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
`,$L=f.span`
  display: none;

  @media (max-width:768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    div{
      margin-right: 10px;
    }
  }   
`,wL=f.div`
  @media (max-width:768px) {
    display: none;
  } 
`,SL=f.div`
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
`,Ii=f.div`
  width: 100%;
  padding: 10px 0px;
  /* border-bottom: 1px solid lightgray; */
  cursor: pointer;
  text-align: center;
  font-weight: 600;

  :hover {
    background-color: lightgray;
  }
`,CL=f.div`
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
`,PL=f.div`
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
`,OL=f.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #383333; */
  border-bottom: 1px solid lightgray;
`,_L=f.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`,kL=f.div`
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
`,NL=f.div`
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
`,EL=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
`,ds=f.div`
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
`;const IL=()=>y("div",{children:[s(xL,{}),s(cL,{}),s(D$,{})]}),Ve=({children:e})=>{const t=JSON.parse(localStorage.getItem("user"));return(t==null?void 0:t.isSeller)===!0?e:s(zC,{to:"/"})},Lr=({pr:e,da:t,ti:n,bg:r,sales:i,name:o})=>s(TL,{children:s(AL,{children:s(RL,{children:y(FL,{children:[s(DL,{children:o}),s(ML,{children:i})]})})})}),TL=f.div`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  margin: 10px;
`,AL=f.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`,RL=f.div`
  width: 85%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`,FL=f.div`
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`,DL=f.div`
  font-size: 16px;
`,ML=f.div`
  font-size: 16px;
`;f.div`
  width: 100%;
  height: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 10px;
`;f.div`
  background-color: yellow;
  width: 60%;
  height: 100%;
`;f.div`
  color: black;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 60%;

  span {
    color: yellow;
    font-size: 13px;
    font-weight: bold;
  }
  h1 {
    color: skyblue;
    font-size: 13px;
    font-weight: bold;
  }
  h2 {
    color: red;
    font-size: 13px;
    font-weight: bold;
  }
  h3 {
    color: purple;
    font-size: 13px;
    font-weight: bold;
  }
`;const rt=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[i,o]=C.useState(!1);return s(HL,{children:s(BL,{children:y(UL,{children:[y(Hx,{children:[y(fs,{onClick:()=>{t(!0)},children:[s("span",{children:s(qS,{fontSize:"25px",color:"#9661cb"})}),s(cs,{children:"Product"}),s("span",{children:s(cn,{})})]}),e?y(zL,{onClick:()=>{t(!1)},children:[s(on,{to:"/seller-dashboard/all-product",children:"All Products"}),s(on,{to:"/seller-dashboard/live-product",children:"Live Products"}),s(on,{to:"/seller-dashboard/sold-product",children:"Sold Out"}),s(on,{to:"/seller-dashboard/rejected-product",children:"Rejected Products"})]}):null,y(fs,{onClick:()=>{r(!0)},children:[s("span",{children:s(HS,{fontSize:"25px",color:"brown"})}),s(cs,{children:"Orders"}),s("span",{children:s(cn,{})})]}),n?y(LL,{onClick:()=>{r(!1)},children:[s(on,{to:"/seller-dashboard/all-orders",children:"All Orders"}),s(on,{to:"/seller-dashboard/pending-orders",children:"Pending Orders"}),s(on,{to:"/seller-dashboard/ready-to-ship",children:"Ready to Ship"}),s(on,{to:"/seller-dashboard/shipped",children:"Shipped"})]}):null,y(fs,{onClick:()=>{o(!0)},children:[s("span",{children:s(WS,{fontSize:"25px",color:"#c05f3e"})}),s(cs,{children:"Completed"}),s("span",{children:s(cn,{})})]}),i?y(jL,{onClick:()=>{o(!1)},children:[s(on,{to:"/seller-dashboard/delivered-orders",children:"Delivard"}),s(on,{to:"/seller-dashboard/cancelled-orders",children:"Cancelled"}),s(on,{to:"/seller-dashboard/failed-orders",children:"Failed"}),s(on,{to:"/seller-dashboard/returned-orders",children:"Returned"})]}):null]}),y(Hx,{children:[s(ke,{to:"/seller-dashboard/uploads",style:{textDecoration:"none",color:"black"},children:y(fs,{children:[s("span",{children:s(VS,{fontSize:"25px",color:"#47390f"})}),s(cs,{children:"Upload Items"}),s("span",{children:s(cn,{})})]})}),s(ke,{to:"/seller-dashboard/transactions",style:{textDecoration:"none",color:"black"},children:y(fs,{children:[s("span",{children:s(YS,{fontSize:"25px",color:"gray"})}),s(cs,{children:"Transactions"}),s("span",{children:s(cn,{})})]})})]})]})})})},Hx=f.div`
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
`,jL=f.div`
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
`,LL=f.div`
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
`,zL=f.div`
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
 
`,cs=f.div`
  font-size: 12px;
  font-weight: 700;
`,fs=f.div`
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
`;const UL=f.div`
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
`,BL=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`,HL=f.div`
  width: 100%;
  /* height: 60px; */
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 20px; */
`,WL=()=>{const t=JSON.parse(localStorage.getItem("user"))._id,{data:n}=Ke({queryKey:["products"],queryFn:()=>Vl(t)}),{data:r}=Ke({queryKey:["orders"],queryFn:nr}),i=r==null?void 0:r.filter(v=>{var $;return(($=v==null?void 0:v.products)==null?void 0:$.filter(m=>m.sellerID===t)).length>0}),o=n==null?void 0:n.filter(v=>v.status==="pending").length,a=n==null?void 0:n.filter(v=>v.status==="approved").length,l=n==null?void 0:n.filter(v=>v.status==="cancled").length,u=n==null?void 0:n.filter(v=>v.quantity>0).length,d=i==null?void 0:i.filter(v=>v.delivery_status==="returned").length,c=new Date().toLocaleDateString(),h=i==null?void 0:i.filter(v=>v.createdAt.includes(c)),g=h==null?void 0:h.reduce((v,w)=>v+w.products.reduce(($,m)=>$+m.price*m.quantity,0),0);var b=Intl.NumberFormat();return y(VL,{children:[s(rt,{}),y(YL,{children:[s(Lr,{pr:`₦${g}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:`₦${b.format(g)}`,name:"Totals Sales"}),s(Lr,{pr:`₦${g}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:o,name:"Pending Products"}),s(Lr,{pr:`₦${g}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:u,name:"Live Products"}),s(Lr,{pr:`₦${g}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:o,name:"Pending Products"}),s(Lr,{pr:`₦${g}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:a,name:"Approved Products"}),s(Lr,{pr:`₦${g}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:l,name:"Cancled Products"}),s(Lr,{pr:`₦${g}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:i==null?void 0:i.length,name:"Orders"}),s(Lr,{pr:`₦${g}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:d,name:"Returned Products"})]})]})},YL=f.div`
  width: 87%;
  border-top: 1.8px solid grey;
  /* padding: 30px; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #f7f8f9;
`,VL=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`,Ff=({avatar:e,index:t,name:n,price:r,tag:i,created:o,quantity:a,active:l,rejected:u})=>{const[d,c]=C.useState(!1);return console.log(d),y(ez,{children:[s(sr,{children:y(XL,{children:[s("span",{children:s(ZL,{src:e})}),n]})}),i&&y(sr,{children:[" ",s(zr,{children:i})]}),o&&y(sr,{children:[" ",s(zr,{children:o})," "]}),r&&y(sr,{children:[s(zr,{children:r})," "]}),a&&s(sr,{children:s(zr,{children:a})}),u&&s(sr,{children:s(zr,{children:u})}),a>0&&s(sr,{children:s(zr,{children:y(Wx,{bg:"fff",children:[s(KL,{}),s("span",{children:"ON"})]})})}),a<=0&&s(sr,{children:s(zr,{children:y(Wx,{bg:"",children:[s("span",{children:"OFF"}),s(QL,{})]})})}),s(sr,{children:y(zr,{children:[" ",y(GL,{onClick:()=>{c(!0)},children:[s(JL,{children:"Edit"}),s("span",{children:s(cn,{})})]}),d?y(qL,{onClick:()=>{c(!1)},children:[s(ke,{to:"/seller-dashboard/edit-image",children:s(T0,{children:"Edit Image"})}),s(ke,{to:"/seller-dashboard/edit-image",children:s(T0,{children:"Edit Context"})}),s(T0,{children:"Delete"})]}):null]})})]},t)},T0=f.div`
  width: 100%;
  padding: 10px 0px;
  /* border-bottom: 1px solid lightgray; */
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  color: black;
`,qL=f.div`
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
`,GL=f.div`
  display: flex;
  align-items: flex-end;
`,Wx=f.div`
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
`,QL=f.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
  margin-left: 10px;
`,KL=f.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
`,ZL=f.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background-color: gold;
  margin-right: 10px;
`,JL=f.div`
  margin: 5px;
  color: blue;
  border-bottom: 2px solid blue;
  font-weight: 600;
  cursor: pointer;
  span {
    margin-left: 3px;
  }
`;f.div``;const zr=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,XL=f.div`
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
`,ez=f.tr`
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;;
`;//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Kw;function ee(){return Kw.apply(null,arguments)}function tz(e){Kw=e}function Mn(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function to(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function Pe(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ry(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(Pe(e,t))return!1;return!0}function Lt(e){return e===void 0}function Nr(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function ql(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Zw(e,t){var n=[],r,i=e.length;for(r=0;r<i;++r)n.push(t(e[r],r));return n}function Jr(e,t){for(var n in t)Pe(t,n)&&(e[n]=t[n]);return Pe(t,"toString")&&(e.toString=t.toString),Pe(t,"valueOf")&&(e.valueOf=t.valueOf),e}function rr(e,t,n,r){return $6(e,t,n,r,!0).utc()}function nz(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function ye(e){return e._pf==null&&(e._pf=nz()),e._pf}var ng;Array.prototype.some?ng=Array.prototype.some:ng=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function iy(e){if(e._isValid==null){var t=ye(e),n=ng.call(t.parsedDateParts,function(i){return i!=null}),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r}return e._isValid}function Df(e){var t=rr(NaN);return e!=null?Jr(ye(t),e):ye(t).userInvalidated=!0,t}var Yx=ee.momentProperties=[],A0=!1;function oy(e,t){var n,r,i,o=Yx.length;if(Lt(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),Lt(t._i)||(e._i=t._i),Lt(t._f)||(e._f=t._f),Lt(t._l)||(e._l=t._l),Lt(t._strict)||(e._strict=t._strict),Lt(t._tzm)||(e._tzm=t._tzm),Lt(t._isUTC)||(e._isUTC=t._isUTC),Lt(t._offset)||(e._offset=t._offset),Lt(t._pf)||(e._pf=ye(t)),Lt(t._locale)||(e._locale=t._locale),o>0)for(n=0;n<o;n++)r=Yx[n],i=t[r],Lt(i)||(e[r]=i);return e}function Gl(e){oy(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),A0===!1&&(A0=!0,ee.updateOffset(this),A0=!1)}function jn(e){return e instanceof Gl||e!=null&&e._isAMomentObject!=null}function Jw(e){ee.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function xn(e,t){var n=!0;return Jr(function(){if(ee.deprecationHandler!=null&&ee.deprecationHandler(null,e),n){var r=[],i,o,a,l=arguments.length;for(o=0;o<l;o++){if(i="",typeof arguments[o]=="object"){i+=`
[`+o+"] ";for(a in arguments[0])Pe(arguments[0],a)&&(i+=a+": "+arguments[0][a]+", ");i=i.slice(0,-2)}else i=arguments[o];r.push(i)}Jw(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var Vx={};function Xw(e,t){ee.deprecationHandler!=null&&ee.deprecationHandler(e,t),Vx[e]||(Jw(t),Vx[e]=!0)}ee.suppressDeprecationWarnings=!1;ee.deprecationHandler=null;function ir(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function rz(e){var t,n;for(n in e)Pe(e,n)&&(t=e[n],ir(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function rg(e,t){var n=Jr({},e),r;for(r in t)Pe(t,r)&&(to(e[r])&&to(t[r])?(n[r]={},Jr(n[r],e[r]),Jr(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)Pe(e,r)&&!Pe(t,r)&&to(e[r])&&(n[r]=Jr({},n[r]));return n}function ay(e){e!=null&&this.set(e)}var ig;Object.keys?ig=Object.keys:ig=function(e){var t,n=[];for(t in e)Pe(e,t)&&n.push(t);return n};var iz={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function oz(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return ir(r)?r.call(t,n):r}function er(e,t,n){var r=""+Math.abs(e),i=t-r.length,o=e>=0;return(o?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var sy=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Du=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,R0={},$a={};function pe(e,t,n,r){var i=r;typeof r=="string"&&(i=function(){return this[r]()}),e&&($a[e]=i),t&&($a[t[0]]=function(){return er(i.apply(this,arguments),t[1],t[2])}),n&&($a[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function az(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function sz(e){var t=e.match(sy),n,r;for(n=0,r=t.length;n<r;n++)$a[t[n]]?t[n]=$a[t[n]]:t[n]=az(t[n]);return function(i){var o="",a;for(a=0;a<r;a++)o+=ir(t[a])?t[a].call(i,e):t[a];return o}}function pd(e,t){return e.isValid()?(t=e6(t,e.localeData()),R0[t]=R0[t]||sz(t),R0[t](e)):e.localeData().invalidDate()}function e6(e,t){var n=5;function r(i){return t.longDateFormat(i)||i}for(Du.lastIndex=0;n>=0&&Du.test(e);)e=e.replace(Du,r),Du.lastIndex=0,n-=1;return e}var lz={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function uz(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(sy).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var dz="Invalid date";function cz(){return this._invalidDate}var fz="%d",hz=/\d{1,2}/;function pz(e){return this._ordinal.replace("%d",e)}var gz={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function mz(e,t,n,r){var i=this._relativeTime[n];return ir(i)?i(e,t,n,r):i.replace(/%d/i,e)}function yz(e,t){var n=this._relativeTime[e>0?"future":"past"];return ir(n)?n(t):n.replace(/%s/i,t)}var zs={};function Nt(e,t){var n=e.toLowerCase();zs[n]=zs[n+"s"]=zs[t]=e}function bn(e){return typeof e=="string"?zs[e]||zs[e.toLowerCase()]:void 0}function ly(e){var t={},n,r;for(r in e)Pe(e,r)&&(n=bn(r),n&&(t[n]=e[r]));return t}var t6={};function Et(e,t){t6[e]=t}function vz(e){var t=[],n;for(n in e)Pe(e,n)&&t.push({unit:n,priority:t6[n]});return t.sort(function(r,i){return r.priority-i.priority}),t}function Mf(e){return e%4===0&&e%100!==0||e%400===0}function dn(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function xe(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=dn(t)),n}function Ka(e,t){return function(n){return n!=null?(n6(this,e,n),ee.updateOffset(this,t),this):Sc(this,e)}}function Sc(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function n6(e,t,n){e.isValid()&&!isNaN(n)&&(t==="FullYear"&&Mf(e.year())&&e.month()===1&&e.date()===29?(n=xe(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Hf(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function xz(e){return e=bn(e),ir(this[e])?this[e]():this}function bz(e,t){if(typeof e=="object"){e=ly(e);var n=vz(e),r,i=n.length;for(r=0;r<i;r++)this[n[r].unit](e[n[r].unit])}else if(e=bn(e),ir(this[e]))return this[e](t);return this}var r6=/\d/,tn=/\d\d/,i6=/\d{3}/,uy=/\d{4}/,jf=/[+-]?\d{6}/,Be=/\d\d?/,o6=/\d\d\d\d?/,a6=/\d\d\d\d\d\d?/,Lf=/\d{1,3}/,dy=/\d{1,4}/,zf=/[+-]?\d{1,6}/,Za=/\d+/,Uf=/[+-]?\d+/,$z=/Z|[+-]\d\d:?\d\d/gi,Bf=/Z|[+-]\d\d(?::?\d\d)?/gi,wz=/[+-]?\d+(\.\d{1,3})?/,Ql=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Cc;Cc={};function le(e,t,n){Cc[e]=ir(t)?t:function(r,i){return r&&n?n:t}}function Sz(e,t){return Pe(Cc,e)?Cc[e](t._strict,t._locale):new RegExp(Cz(e))}function Cz(e){return qt(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,i,o){return n||r||i||o}))}function qt(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var og={};function Re(e,t){var n,r=t,i;for(typeof e=="string"&&(e=[e]),Nr(t)&&(r=function(o,a){a[t]=xe(o)}),i=e.length,n=0;n<i;n++)og[e[n]]=r}function Kl(e,t){Re(e,function(n,r,i,o){i._w=i._w||{},t(n,i._w,i,o)})}function Pz(e,t,n){t!=null&&Pe(og,e)&&og[e](t,n._a,n,e)}var _t=0,vr=1,qn=2,ut=3,Tn=4,xr=5,Zi=6,Oz=7,_z=8;function kz(e,t){return(e%t+t)%t}var et;Array.prototype.indexOf?et=Array.prototype.indexOf:et=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function Hf(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=kz(t,12);return e+=(t-n)/12,n===1?Mf(e)?29:28:31-n%7%2}pe("M",["MM",2],"Mo",function(){return this.month()+1});pe("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});pe("MMMM",0,0,function(e){return this.localeData().months(this,e)});Nt("month","M");Et("month",8);le("M",Be);le("MM",Be,tn);le("MMM",function(e,t){return t.monthsShortRegex(e)});le("MMMM",function(e,t){return t.monthsRegex(e)});Re(["M","MM"],function(e,t){t[vr]=xe(e)-1});Re(["MMM","MMMM"],function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);i!=null?t[vr]=i:ye(n).invalidMonth=e});var Nz="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),s6="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),l6=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ez=Ql,Iz=Ql;function Tz(e,t){return e?Mn(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||l6).test(t)?"format":"standalone"][e.month()]:Mn(this._months)?this._months:this._months.standalone}function Az(e,t){return e?Mn(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[l6.test(t)?"format":"standalone"][e.month()]:Mn(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Rz(e,t,n){var r,i,o,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)o=rr([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(o,"").toLocaleLowerCase();return n?t==="MMM"?(i=et.call(this._shortMonthsParse,a),i!==-1?i:null):(i=et.call(this._longMonthsParse,a),i!==-1?i:null):t==="MMM"?(i=et.call(this._shortMonthsParse,a),i!==-1?i:(i=et.call(this._longMonthsParse,a),i!==-1?i:null)):(i=et.call(this._longMonthsParse,a),i!==-1?i:(i=et.call(this._shortMonthsParse,a),i!==-1?i:null))}function Fz(e,t,n){var r,i,o;if(this._monthsParseExact)return Rz.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=rr([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(o="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(o.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function u6(e,t){var n;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=xe(t);else if(t=e.localeData().monthsParse(t),!Nr(t))return e}return n=Math.min(e.date(),Hf(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function d6(e){return e!=null?(u6(this,e),ee.updateOffset(this,!0),this):Sc(this,"Month")}function Dz(){return Hf(this.year(),this.month())}function Mz(e){return this._monthsParseExact?(Pe(this,"_monthsRegex")||c6.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(Pe(this,"_monthsShortRegex")||(this._monthsShortRegex=Ez),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function jz(e){return this._monthsParseExact?(Pe(this,"_monthsRegex")||c6.call(this),e?this._monthsStrictRegex:this._monthsRegex):(Pe(this,"_monthsRegex")||(this._monthsRegex=Iz),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function c6(){function e(a,l){return l.length-a.length}var t=[],n=[],r=[],i,o;for(i=0;i<12;i++)o=rr([2e3,i]),t.push(this.monthsShort(o,"")),n.push(this.months(o,"")),r.push(this.months(o,"")),r.push(this.monthsShort(o,""));for(t.sort(e),n.sort(e),r.sort(e),i=0;i<12;i++)t[i]=qt(t[i]),n[i]=qt(n[i]);for(i=0;i<24;i++)r[i]=qt(r[i]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}pe("Y",0,0,function(){var e=this.year();return e<=9999?er(e,4):"+"+e});pe(0,["YY",2],0,function(){return this.year()%100});pe(0,["YYYY",4],0,"year");pe(0,["YYYYY",5],0,"year");pe(0,["YYYYYY",6,!0],0,"year");Nt("year","y");Et("year",1);le("Y",Uf);le("YY",Be,tn);le("YYYY",dy,uy);le("YYYYY",zf,jf);le("YYYYYY",zf,jf);Re(["YYYYY","YYYYYY"],_t);Re("YYYY",function(e,t){t[_t]=e.length===2?ee.parseTwoDigitYear(e):xe(e)});Re("YY",function(e,t){t[_t]=ee.parseTwoDigitYear(e)});Re("Y",function(e,t){t[_t]=parseInt(e,10)});function Us(e){return Mf(e)?366:365}ee.parseTwoDigitYear=function(e){return xe(e)+(xe(e)>68?1900:2e3)};var f6=Ka("FullYear",!0);function Lz(){return Mf(this.year())}function zz(e,t,n,r,i,o,a){var l;return e<100&&e>=0?(l=new Date(e+400,t,n,r,i,o,a),isFinite(l.getFullYear())&&l.setFullYear(e)):l=new Date(e,t,n,r,i,o,a),l}function xl(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Pc(e,t,n){var r=7+t-n,i=(7+xl(e,0,r).getUTCDay()-t)%7;return-i+r-1}function h6(e,t,n,r,i){var o=(7+n-r)%7,a=Pc(e,r,i),l=1+7*(t-1)+o+a,u,d;return l<=0?(u=e-1,d=Us(u)+l):l>Us(e)?(u=e+1,d=l-Us(e)):(u=e,d=l),{year:u,dayOfYear:d}}function bl(e,t,n){var r=Pc(e.year(),t,n),i=Math.floor((e.dayOfYear()-r-1)/7)+1,o,a;return i<1?(a=e.year()-1,o=i+wr(a,t,n)):i>wr(e.year(),t,n)?(o=i-wr(e.year(),t,n),a=e.year()+1):(a=e.year(),o=i),{week:o,year:a}}function wr(e,t,n){var r=Pc(e,t,n),i=Pc(e+1,t,n);return(Us(e)-r+i)/7}pe("w",["ww",2],"wo","week");pe("W",["WW",2],"Wo","isoWeek");Nt("week","w");Nt("isoWeek","W");Et("week",5);Et("isoWeek",5);le("w",Be);le("ww",Be,tn);le("W",Be);le("WW",Be,tn);Kl(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=xe(e)});function Uz(e){return bl(e,this._week.dow,this._week.doy).week}var Bz={dow:0,doy:6};function Hz(){return this._week.dow}function Wz(){return this._week.doy}function Yz(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function Vz(e){var t=bl(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}pe("d",0,"do","day");pe("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});pe("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});pe("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});pe("e",0,0,"weekday");pe("E",0,0,"isoWeekday");Nt("day","d");Nt("weekday","e");Nt("isoWeekday","E");Et("day",11);Et("weekday",11);Et("isoWeekday",11);le("d",Be);le("e",Be);le("E",Be);le("dd",function(e,t){return t.weekdaysMinRegex(e)});le("ddd",function(e,t){return t.weekdaysShortRegex(e)});le("dddd",function(e,t){return t.weekdaysRegex(e)});Kl(["dd","ddd","dddd"],function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);i!=null?t.d=i:ye(n).invalidWeekday=e});Kl(["d","e","E"],function(e,t,n,r){t[r]=xe(e)});function qz(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function Gz(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function cy(e,t){return e.slice(t,7).concat(e.slice(0,t))}var Qz="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),p6="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Kz="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Zz=Ql,Jz=Ql,Xz=Ql;function eU(e,t){var n=Mn(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?cy(n,this._week.dow):e?n[e.day()]:n}function tU(e){return e===!0?cy(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function nU(e){return e===!0?cy(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function rU(e,t,n){var r,i,o,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)o=rr([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(o,"").toLocaleLowerCase();return n?t==="dddd"?(i=et.call(this._weekdaysParse,a),i!==-1?i:null):t==="ddd"?(i=et.call(this._shortWeekdaysParse,a),i!==-1?i:null):(i=et.call(this._minWeekdaysParse,a),i!==-1?i:null):t==="dddd"?(i=et.call(this._weekdaysParse,a),i!==-1||(i=et.call(this._shortWeekdaysParse,a),i!==-1)?i:(i=et.call(this._minWeekdaysParse,a),i!==-1?i:null)):t==="ddd"?(i=et.call(this._shortWeekdaysParse,a),i!==-1||(i=et.call(this._weekdaysParse,a),i!==-1)?i:(i=et.call(this._minWeekdaysParse,a),i!==-1?i:null)):(i=et.call(this._minWeekdaysParse,a),i!==-1||(i=et.call(this._weekdaysParse,a),i!==-1)?i:(i=et.call(this._shortWeekdaysParse,a),i!==-1?i:null))}function iU(e,t,n){var r,i,o;if(this._weekdaysParseExact)return rU.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=rr([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(o="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(o.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function oU(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=qz(e,this.localeData()),this.add(e-t,"d")):t}function aU(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function sU(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=Gz(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function lU(e){return this._weekdaysParseExact?(Pe(this,"_weekdaysRegex")||fy.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(Pe(this,"_weekdaysRegex")||(this._weekdaysRegex=Zz),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function uU(e){return this._weekdaysParseExact?(Pe(this,"_weekdaysRegex")||fy.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(Pe(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Jz),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function dU(e){return this._weekdaysParseExact?(Pe(this,"_weekdaysRegex")||fy.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(Pe(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Xz),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function fy(){function e(c,h){return h.length-c.length}var t=[],n=[],r=[],i=[],o,a,l,u,d;for(o=0;o<7;o++)a=rr([2e3,1]).day(o),l=qt(this.weekdaysMin(a,"")),u=qt(this.weekdaysShort(a,"")),d=qt(this.weekdays(a,"")),t.push(l),n.push(u),r.push(d),i.push(l),i.push(u),i.push(d);t.sort(e),n.sort(e),r.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function hy(){return this.hours()%12||12}function cU(){return this.hours()||24}pe("H",["HH",2],0,"hour");pe("h",["hh",2],0,hy);pe("k",["kk",2],0,cU);pe("hmm",0,0,function(){return""+hy.apply(this)+er(this.minutes(),2)});pe("hmmss",0,0,function(){return""+hy.apply(this)+er(this.minutes(),2)+er(this.seconds(),2)});pe("Hmm",0,0,function(){return""+this.hours()+er(this.minutes(),2)});pe("Hmmss",0,0,function(){return""+this.hours()+er(this.minutes(),2)+er(this.seconds(),2)});function g6(e,t){pe(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}g6("a",!0);g6("A",!1);Nt("hour","h");Et("hour",13);function m6(e,t){return t._meridiemParse}le("a",m6);le("A",m6);le("H",Be);le("h",Be);le("k",Be);le("HH",Be,tn);le("hh",Be,tn);le("kk",Be,tn);le("hmm",o6);le("hmmss",a6);le("Hmm",o6);le("Hmmss",a6);Re(["H","HH"],ut);Re(["k","kk"],function(e,t,n){var r=xe(e);t[ut]=r===24?0:r});Re(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});Re(["h","hh"],function(e,t,n){t[ut]=xe(e),ye(n).bigHour=!0});Re("hmm",function(e,t,n){var r=e.length-2;t[ut]=xe(e.substr(0,r)),t[Tn]=xe(e.substr(r)),ye(n).bigHour=!0});Re("hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[ut]=xe(e.substr(0,r)),t[Tn]=xe(e.substr(r,2)),t[xr]=xe(e.substr(i)),ye(n).bigHour=!0});Re("Hmm",function(e,t,n){var r=e.length-2;t[ut]=xe(e.substr(0,r)),t[Tn]=xe(e.substr(r))});Re("Hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[ut]=xe(e.substr(0,r)),t[Tn]=xe(e.substr(r,2)),t[xr]=xe(e.substr(i))});function fU(e){return(e+"").toLowerCase().charAt(0)==="p"}var hU=/[ap]\.?m?\.?/i,pU=Ka("Hours",!0);function gU(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var y6={calendar:iz,longDateFormat:lz,invalidDate:dz,ordinal:fz,dayOfMonthOrdinalParse:hz,relativeTime:gz,months:Nz,monthsShort:s6,week:Bz,weekdays:Qz,weekdaysMin:Kz,weekdaysShort:p6,meridiemParse:hU},He={},hs={},$l;function mU(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function qx(e){return e&&e.toLowerCase().replace("_","-")}function yU(e){for(var t=0,n,r,i,o;t<e.length;){for(o=qx(e[t]).split("-"),n=o.length,r=qx(e[t+1]),r=r?r.split("-"):null;n>0;){if(i=Wf(o.slice(0,n).join("-")),i)return i;if(r&&r.length>=n&&mU(o,r)>=n-1)break;n--}t++}return $l}function vU(e){return e.match("^[^/\\\\]*$")!=null}function Wf(e){var t=null,n;if(He[e]===void 0&&typeof wd<"u"&&wd&&wd.exports&&vU(e))try{t=$l._abbr,n=require,n("./locale/"+e),pi(t)}catch{He[e]=null}return He[e]}function pi(e,t){var n;return e&&(Lt(t)?n=Ar(e):n=py(e,t),n?$l=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),$l._abbr}function py(e,t){if(t!==null){var n,r=y6;if(t.abbr=e,He[e]!=null)Xw("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=He[e]._config;else if(t.parentLocale!=null)if(He[t.parentLocale]!=null)r=He[t.parentLocale]._config;else if(n=Wf(t.parentLocale),n!=null)r=n._config;else return hs[t.parentLocale]||(hs[t.parentLocale]=[]),hs[t.parentLocale].push({name:e,config:t}),null;return He[e]=new ay(rg(r,t)),hs[e]&&hs[e].forEach(function(i){py(i.name,i.config)}),pi(e),He[e]}else return delete He[e],null}function xU(e,t){if(t!=null){var n,r,i=y6;He[e]!=null&&He[e].parentLocale!=null?He[e].set(rg(He[e]._config,t)):(r=Wf(e),r!=null&&(i=r._config),t=rg(i,t),r==null&&(t.abbr=e),n=new ay(t),n.parentLocale=He[e],He[e]=n),pi(e)}else He[e]!=null&&(He[e].parentLocale!=null?(He[e]=He[e].parentLocale,e===pi()&&pi(e)):He[e]!=null&&delete He[e]);return He[e]}function Ar(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return $l;if(!Mn(e)){if(t=Wf(e),t)return t;e=[e]}return yU(e)}function bU(){return ig(He)}function gy(e){var t,n=e._a;return n&&ye(e).overflow===-2&&(t=n[vr]<0||n[vr]>11?vr:n[qn]<1||n[qn]>Hf(n[_t],n[vr])?qn:n[ut]<0||n[ut]>24||n[ut]===24&&(n[Tn]!==0||n[xr]!==0||n[Zi]!==0)?ut:n[Tn]<0||n[Tn]>59?Tn:n[xr]<0||n[xr]>59?xr:n[Zi]<0||n[Zi]>999?Zi:-1,ye(e)._overflowDayOfYear&&(t<_t||t>qn)&&(t=qn),ye(e)._overflowWeeks&&t===-1&&(t=Oz),ye(e)._overflowWeekday&&t===-1&&(t=_z),ye(e).overflow=t),e}var $U=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,wU=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,SU=/Z|[+-]\d\d(?::?\d\d)?/,Mu=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],F0=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],CU=/^\/?Date\((-?\d+)/i,PU=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,OU={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function v6(e){var t,n,r=e._i,i=$U.exec(r)||wU.exec(r),o,a,l,u,d=Mu.length,c=F0.length;if(i){for(ye(e).iso=!0,t=0,n=d;t<n;t++)if(Mu[t][1].exec(i[1])){a=Mu[t][0],o=Mu[t][2]!==!1;break}if(a==null){e._isValid=!1;return}if(i[3]){for(t=0,n=c;t<n;t++)if(F0[t][1].exec(i[3])){l=(i[2]||" ")+F0[t][0];break}if(l==null){e._isValid=!1;return}}if(!o&&l!=null){e._isValid=!1;return}if(i[4])if(SU.exec(i[4]))u="Z";else{e._isValid=!1;return}e._f=a+(l||"")+(u||""),yy(e)}else e._isValid=!1}function _U(e,t,n,r,i,o){var a=[kU(e),s6.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return o&&a.push(parseInt(o,10)),a}function kU(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function NU(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function EU(e,t,n){if(e){var r=p6.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(r!==i)return ye(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function IU(e,t,n){if(e)return OU[e];if(t)return 0;var r=parseInt(n,10),i=r%100,o=(r-i)/100;return o*60+i}function x6(e){var t=PU.exec(NU(e._i)),n;if(t){if(n=_U(t[4],t[3],t[2],t[5],t[6],t[7]),!EU(t[1],n,e))return;e._a=n,e._tzm=IU(t[8],t[9],t[10]),e._d=xl.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),ye(e).rfc2822=!0}else e._isValid=!1}function TU(e){var t=CU.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(v6(e),e._isValid===!1)delete e._isValid;else return;if(x6(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:ee.createFromInputFallback(e)}ee.createFromInputFallback=xn("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function qo(e,t,n){return e??t??n}function AU(e){var t=new Date(ee.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function my(e){var t,n,r=[],i,o,a;if(!e._d){for(i=AU(e),e._w&&e._a[qn]==null&&e._a[vr]==null&&RU(e),e._dayOfYear!=null&&(a=qo(e._a[_t],i[_t]),(e._dayOfYear>Us(a)||e._dayOfYear===0)&&(ye(e)._overflowDayOfYear=!0),n=xl(a,0,e._dayOfYear),e._a[vr]=n.getUTCMonth(),e._a[qn]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=i[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[ut]===24&&e._a[Tn]===0&&e._a[xr]===0&&e._a[Zi]===0&&(e._nextDay=!0,e._a[ut]=0),e._d=(e._useUTC?xl:zz).apply(null,r),o=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ut]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==o&&(ye(e).weekdayMismatch=!0)}}function RU(e){var t,n,r,i,o,a,l,u,d;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(o=1,a=4,n=qo(t.GG,e._a[_t],bl(Ue(),1,4).year),r=qo(t.W,1),i=qo(t.E,1),(i<1||i>7)&&(u=!0)):(o=e._locale._week.dow,a=e._locale._week.doy,d=bl(Ue(),o,a),n=qo(t.gg,e._a[_t],d.year),r=qo(t.w,d.week),t.d!=null?(i=t.d,(i<0||i>6)&&(u=!0)):t.e!=null?(i=t.e+o,(t.e<0||t.e>6)&&(u=!0)):i=o),r<1||r>wr(n,o,a)?ye(e)._overflowWeeks=!0:u!=null?ye(e)._overflowWeekday=!0:(l=h6(n,r,i,o,a),e._a[_t]=l.year,e._dayOfYear=l.dayOfYear)}ee.ISO_8601=function(){};ee.RFC_2822=function(){};function yy(e){if(e._f===ee.ISO_8601){v6(e);return}if(e._f===ee.RFC_2822){x6(e);return}e._a=[],ye(e).empty=!0;var t=""+e._i,n,r,i,o,a,l=t.length,u=0,d,c;for(i=e6(e._f,e._locale).match(sy)||[],c=i.length,n=0;n<c;n++)o=i[n],r=(t.match(Sz(o,e))||[])[0],r&&(a=t.substr(0,t.indexOf(r)),a.length>0&&ye(e).unusedInput.push(a),t=t.slice(t.indexOf(r)+r.length),u+=r.length),$a[o]?(r?ye(e).empty=!1:ye(e).unusedTokens.push(o),Pz(o,r,e)):e._strict&&!r&&ye(e).unusedTokens.push(o);ye(e).charsLeftOver=l-u,t.length>0&&ye(e).unusedInput.push(t),e._a[ut]<=12&&ye(e).bigHour===!0&&e._a[ut]>0&&(ye(e).bigHour=void 0),ye(e).parsedDateParts=e._a.slice(0),ye(e).meridiem=e._meridiem,e._a[ut]=FU(e._locale,e._a[ut],e._meridiem),d=ye(e).era,d!==null&&(e._a[_t]=e._locale.erasConvertYear(d,e._a[_t])),my(e),gy(e)}function FU(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function DU(e){var t,n,r,i,o,a,l=!1,u=e._f.length;if(u===0){ye(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<u;i++)o=0,a=!1,t=oy({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[i],yy(t),iy(t)&&(a=!0),o+=ye(t).charsLeftOver,o+=ye(t).unusedTokens.length*10,ye(t).score=o,l?o<r&&(r=o,n=t):(r==null||o<r||a)&&(r=o,n=t,a&&(l=!0));Jr(e,n||t)}function MU(e){if(!e._d){var t=ly(e._i),n=t.day===void 0?t.date:t.day;e._a=Zw([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),my(e)}}function jU(e){var t=new Gl(gy(b6(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function b6(e){var t=e._i,n=e._f;return e._locale=e._locale||Ar(e._l),t===null||n===void 0&&t===""?Df({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),jn(t)?new Gl(gy(t)):(ql(t)?e._d=t:Mn(n)?DU(e):n?yy(e):LU(e),iy(e)||(e._d=null),e))}function LU(e){var t=e._i;Lt(t)?e._d=new Date(ee.now()):ql(t)?e._d=new Date(t.valueOf()):typeof t=="string"?TU(e):Mn(t)?(e._a=Zw(t.slice(0),function(n){return parseInt(n,10)}),my(e)):to(t)?MU(e):Nr(t)?e._d=new Date(t):ee.createFromInputFallback(e)}function $6(e,t,n,r,i){var o={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(to(e)&&ry(e)||Mn(e)&&e.length===0)&&(e=void 0),o._isAMomentObject=!0,o._useUTC=o._isUTC=i,o._l=n,o._i=e,o._f=t,o._strict=r,jU(o)}function Ue(e,t,n,r){return $6(e,t,n,r,!1)}var zU=xn("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ue.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Df()}),UU=xn("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ue.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Df()});function w6(e,t){var n,r;if(t.length===1&&Mn(t[0])&&(t=t[0]),!t.length)return Ue();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function BU(){var e=[].slice.call(arguments,0);return w6("isBefore",e)}function HU(){var e=[].slice.call(arguments,0);return w6("isAfter",e)}var WU=function(){return Date.now?Date.now():+new Date},ps=["year","quarter","month","week","day","hour","minute","second","millisecond"];function YU(e){var t,n=!1,r,i=ps.length;for(t in e)if(Pe(e,t)&&!(et.call(ps,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<i;++r)if(e[ps[r]]){if(n)return!1;parseFloat(e[ps[r]])!==xe(e[ps[r]])&&(n=!0)}return!0}function VU(){return this._isValid}function qU(){return zn(NaN)}function Yf(e){var t=ly(e),n=t.year||0,r=t.quarter||0,i=t.month||0,o=t.week||t.isoWeek||0,a=t.day||0,l=t.hour||0,u=t.minute||0,d=t.second||0,c=t.millisecond||0;this._isValid=YU(t),this._milliseconds=+c+d*1e3+u*6e4+l*1e3*60*60,this._days=+a+o*7,this._months=+i+r*3+n*12,this._data={},this._locale=Ar(),this._bubble()}function gd(e){return e instanceof Yf}function ag(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function GU(e,t,n){var r=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),o=0,a;for(a=0;a<r;a++)(n&&e[a]!==t[a]||!n&&xe(e[a])!==xe(t[a]))&&o++;return o+i}function S6(e,t){pe(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+er(~~(n/60),2)+t+er(~~n%60,2)})}S6("Z",":");S6("ZZ","");le("Z",Bf);le("ZZ",Bf);Re(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=vy(Bf,e)});var QU=/([\+\-]|\d\d)/gi;function vy(e,t){var n=(t||"").match(e),r,i,o;return n===null?null:(r=n[n.length-1]||[],i=(r+"").match(QU)||["-",0,0],o=+(i[1]*60)+xe(i[2]),o===0?0:i[0]==="+"?o:-o)}function xy(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(jn(e)||ql(e)?e.valueOf():Ue(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),ee.updateOffset(n,!1),n):Ue(e).local()}function sg(e){return-Math.round(e._d.getTimezoneOffset())}ee.updateOffset=function(){};function KU(e,t,n){var r=this._offset||0,i;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=vy(Bf,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(i=sg(this)),this._offset=e,this._isUTC=!0,i!=null&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?O6(this,zn(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,ee.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:sg(this)}function ZU(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function JU(e){return this.utcOffset(0,e)}function XU(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(sg(this),"m")),this}function eB(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=vy($z,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function tB(e){return this.isValid()?(e=e?Ue(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function nB(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function rB(){if(!Lt(this._isDSTShifted))return this._isDSTShifted;var e={},t;return oy(e,this),e=b6(e),e._a?(t=e._isUTC?rr(e._a):Ue(e._a),this._isDSTShifted=this.isValid()&&GU(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function iB(){return this.isValid()?!this._isUTC:!1}function oB(){return this.isValid()?this._isUTC:!1}function C6(){return this.isValid()?this._isUTC&&this._offset===0:!1}var aB=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,sB=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function zn(e,t){var n=e,r=null,i,o,a;return gd(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:Nr(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=aB.exec(e))?(i=r[1]==="-"?-1:1,n={y:0,d:xe(r[qn])*i,h:xe(r[ut])*i,m:xe(r[Tn])*i,s:xe(r[xr])*i,ms:xe(ag(r[Zi]*1e3))*i}):(r=sB.exec(e))?(i=r[1]==="-"?-1:1,n={y:Ti(r[2],i),M:Ti(r[3],i),w:Ti(r[4],i),d:Ti(r[5],i),h:Ti(r[6],i),m:Ti(r[7],i),s:Ti(r[8],i)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(a=lB(Ue(n.from),Ue(n.to)),n={},n.ms=a.milliseconds,n.M=a.months),o=new Yf(n),gd(e)&&Pe(e,"_locale")&&(o._locale=e._locale),gd(e)&&Pe(e,"_isValid")&&(o._isValid=e._isValid),o}zn.fn=Yf.prototype;zn.invalid=qU;function Ti(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Gx(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function lB(e,t){var n;return e.isValid()&&t.isValid()?(t=xy(t,e),e.isBefore(t)?n=Gx(e,t):(n=Gx(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function P6(e,t){return function(n,r){var i,o;return r!==null&&!isNaN(+r)&&(Xw(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),o=n,n=r,r=o),i=zn(n,r),O6(this,i,e),this}}function O6(e,t,n,r){var i=t._milliseconds,o=ag(t._days),a=ag(t._months);e.isValid()&&(r=r??!0,a&&u6(e,Sc(e,"Month")+a*n),o&&n6(e,"Date",Sc(e,"Date")+o*n),i&&e._d.setTime(e._d.valueOf()+i*n),r&&ee.updateOffset(e,o||a))}var uB=P6(1,"add"),dB=P6(-1,"subtract");function _6(e){return typeof e=="string"||e instanceof String}function cB(e){return jn(e)||ql(e)||_6(e)||Nr(e)||hB(e)||fB(e)||e===null||e===void 0}function fB(e){var t=to(e)&&!ry(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,o,a=r.length;for(i=0;i<a;i+=1)o=r[i],n=n||Pe(e,o);return t&&n}function hB(e){var t=Mn(e),n=!1;return t&&(n=e.filter(function(r){return!Nr(r)&&_6(e)}).length===0),t&&n}function pB(e){var t=to(e)&&!ry(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,o;for(i=0;i<r.length;i+=1)o=r[i],n=n||Pe(e,o);return t&&n}function gB(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function mB(e,t){arguments.length===1&&(arguments[0]?cB(arguments[0])?(e=arguments[0],t=void 0):pB(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||Ue(),r=xy(n,this).startOf("day"),i=ee.calendarFormat(this,r)||"sameElse",o=t&&(ir(t[i])?t[i].call(this,n):t[i]);return this.format(o||this.localeData().calendar(i,this,Ue(n)))}function yB(){return new Gl(this)}function vB(e,t){var n=jn(e)?e:Ue(e);return this.isValid()&&n.isValid()?(t=bn(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function xB(e,t){var n=jn(e)?e:Ue(e);return this.isValid()&&n.isValid()?(t=bn(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function bB(e,t,n,r){var i=jn(e)?e:Ue(e),o=jn(t)?t:Ue(t);return this.isValid()&&i.isValid()&&o.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(i,n):!this.isBefore(i,n))&&(r[1]===")"?this.isBefore(o,n):!this.isAfter(o,n))):!1}function $B(e,t){var n=jn(e)?e:Ue(e),r;return this.isValid()&&n.isValid()?(t=bn(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function wB(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function SB(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function CB(e,t,n){var r,i,o;if(!this.isValid())return NaN;if(r=xy(e,this),!r.isValid())return NaN;switch(i=(r.utcOffset()-this.utcOffset())*6e4,t=bn(t),t){case"year":o=md(this,r)/12;break;case"month":o=md(this,r);break;case"quarter":o=md(this,r)/3;break;case"second":o=(this-r)/1e3;break;case"minute":o=(this-r)/6e4;break;case"hour":o=(this-r)/36e5;break;case"day":o=(this-r-i)/864e5;break;case"week":o=(this-r-i)/6048e5;break;default:o=this-r}return n?o:dn(o)}function md(e,t){if(e.date()<t.date())return-md(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),i,o;return t-r<0?(i=e.clone().add(n-1,"months"),o=(t-r)/(r-i)):(i=e.clone().add(n+1,"months"),o=(t-r)/(i-r)),-(n+o)||0}ee.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";ee.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function PB(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function OB(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?pd(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):ir(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",pd(n,"Z")):pd(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function _B(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,i,o;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",o=t+'[")]',this.format(n+r+i+o)}function kB(e){e||(e=this.isUtc()?ee.defaultFormatUtc:ee.defaultFormat);var t=pd(this,e);return this.localeData().postformat(t)}function NB(e,t){return this.isValid()&&(jn(e)&&e.isValid()||Ue(e).isValid())?zn({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function EB(e){return this.from(Ue(),e)}function IB(e,t){return this.isValid()&&(jn(e)&&e.isValid()||Ue(e).isValid())?zn({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function TB(e){return this.to(Ue(),e)}function k6(e){var t;return e===void 0?this._locale._abbr:(t=Ar(e),t!=null&&(this._locale=t),this)}var N6=xn("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function E6(){return this._locale}var Oc=1e3,wa=60*Oc,_c=60*wa,I6=(365*400+97)*24*_c;function Sa(e,t){return(e%t+t)%t}function T6(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-I6:new Date(e,t,n).valueOf()}function A6(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-I6:Date.UTC(e,t,n)}function AB(e){var t,n;if(e=bn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?A6:T6,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=Sa(t+(this._isUTC?0:this.utcOffset()*wa),_c);break;case"minute":t=this._d.valueOf(),t-=Sa(t,wa);break;case"second":t=this._d.valueOf(),t-=Sa(t,Oc);break}return this._d.setTime(t),ee.updateOffset(this,!0),this}function RB(e){var t,n;if(e=bn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?A6:T6,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=_c-Sa(t+(this._isUTC?0:this.utcOffset()*wa),_c)-1;break;case"minute":t=this._d.valueOf(),t+=wa-Sa(t,wa)-1;break;case"second":t=this._d.valueOf(),t+=Oc-Sa(t,Oc)-1;break}return this._d.setTime(t),ee.updateOffset(this,!0),this}function FB(){return this._d.valueOf()-(this._offset||0)*6e4}function DB(){return Math.floor(this.valueOf()/1e3)}function MB(){return new Date(this.valueOf())}function jB(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function LB(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function zB(){return this.isValid()?this.toISOString():null}function UB(){return iy(this)}function BB(){return Jr({},ye(this))}function HB(){return ye(this).overflow}function WB(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}pe("N",0,0,"eraAbbr");pe("NN",0,0,"eraAbbr");pe("NNN",0,0,"eraAbbr");pe("NNNN",0,0,"eraName");pe("NNNNN",0,0,"eraNarrow");pe("y",["y",1],"yo","eraYear");pe("y",["yy",2],0,"eraYear");pe("y",["yyy",3],0,"eraYear");pe("y",["yyyy",4],0,"eraYear");le("N",by);le("NN",by);le("NNN",by);le("NNNN",tH);le("NNNNN",nH);Re(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var i=n._locale.erasParse(e,r,n._strict);i?ye(n).era=i:ye(n).invalidEra=e});le("y",Za);le("yy",Za);le("yyy",Za);le("yyyy",Za);le("yo",rH);Re(["y","yy","yyy","yyyy"],_t);Re(["yo"],function(e,t,n,r){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[_t]=n._locale.eraYearOrdinalParse(e,i):t[_t]=parseInt(e,10)});function YB(e,t){var n,r,i,o=this._eras||Ar("en")._eras;for(n=0,r=o.length;n<r;++n){switch(typeof o[n].since){case"string":i=ee(o[n].since).startOf("day"),o[n].since=i.valueOf();break}switch(typeof o[n].until){case"undefined":o[n].until=1/0;break;case"string":i=ee(o[n].until).startOf("day").valueOf(),o[n].until=i.valueOf();break}}return o}function VB(e,t,n){var r,i,o=this.eras(),a,l,u;for(e=e.toUpperCase(),r=0,i=o.length;r<i;++r)if(a=o[r].name.toUpperCase(),l=o[r].abbr.toUpperCase(),u=o[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(l===e)return o[r];break;case"NNNN":if(a===e)return o[r];break;case"NNNNN":if(u===e)return o[r];break}else if([a,l,u].indexOf(e)>=0)return o[r]}function qB(e,t){var n=e.since<=e.until?1:-1;return t===void 0?ee(e.since).year():ee(e.since).year()+(t-e.offset)*n}function GB(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function QB(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function KB(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function ZB(){var e,t,n,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(n=i[e].since<=i[e].until?1:-1,r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return(this.year()-ee(i[e].since).year())*n+i[e].offset;return this.year()}function JB(e){return Pe(this,"_erasNameRegex")||$y.call(this),e?this._erasNameRegex:this._erasRegex}function XB(e){return Pe(this,"_erasAbbrRegex")||$y.call(this),e?this._erasAbbrRegex:this._erasRegex}function eH(e){return Pe(this,"_erasNarrowRegex")||$y.call(this),e?this._erasNarrowRegex:this._erasRegex}function by(e,t){return t.erasAbbrRegex(e)}function tH(e,t){return t.erasNameRegex(e)}function nH(e,t){return t.erasNarrowRegex(e)}function rH(e,t){return t._eraYearOrdinalRegex||Za}function $y(){var e=[],t=[],n=[],r=[],i,o,a=this.eras();for(i=0,o=a.length;i<o;++i)t.push(qt(a[i].name)),e.push(qt(a[i].abbr)),n.push(qt(a[i].narrow)),r.push(qt(a[i].name)),r.push(qt(a[i].abbr)),r.push(qt(a[i].narrow));this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}pe(0,["gg",2],0,function(){return this.weekYear()%100});pe(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Vf(e,t){pe(0,[e,e.length],0,t)}Vf("gggg","weekYear");Vf("ggggg","weekYear");Vf("GGGG","isoWeekYear");Vf("GGGGG","isoWeekYear");Nt("weekYear","gg");Nt("isoWeekYear","GG");Et("weekYear",1);Et("isoWeekYear",1);le("G",Uf);le("g",Uf);le("GG",Be,tn);le("gg",Be,tn);le("GGGG",dy,uy);le("gggg",dy,uy);le("GGGGG",zf,jf);le("ggggg",zf,jf);Kl(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=xe(e)});Kl(["gg","GG"],function(e,t,n,r){t[r]=ee.parseTwoDigitYear(e)});function iH(e){return R6.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function oH(e){return R6.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function aH(){return wr(this.year(),1,4)}function sH(){return wr(this.isoWeekYear(),1,4)}function lH(){var e=this.localeData()._week;return wr(this.year(),e.dow,e.doy)}function uH(){var e=this.localeData()._week;return wr(this.weekYear(),e.dow,e.doy)}function R6(e,t,n,r,i){var o;return e==null?bl(this,r,i).year:(o=wr(e,r,i),t>o&&(t=o),dH.call(this,e,t,n,r,i))}function dH(e,t,n,r,i){var o=h6(e,t,n,r,i),a=xl(o.year,0,o.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}pe("Q",0,"Qo","quarter");Nt("quarter","Q");Et("quarter",7);le("Q",r6);Re("Q",function(e,t){t[vr]=(xe(e)-1)*3});function cH(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}pe("D",["DD",2],"Do","date");Nt("date","D");Et("date",9);le("D",Be);le("DD",Be,tn);le("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});Re(["D","DD"],qn);Re("Do",function(e,t){t[qn]=xe(e.match(Be)[0])});var F6=Ka("Date",!0);pe("DDD",["DDDD",3],"DDDo","dayOfYear");Nt("dayOfYear","DDD");Et("dayOfYear",4);le("DDD",Lf);le("DDDD",i6);Re(["DDD","DDDD"],function(e,t,n){n._dayOfYear=xe(e)});function fH(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}pe("m",["mm",2],0,"minute");Nt("minute","m");Et("minute",14);le("m",Be);le("mm",Be,tn);Re(["m","mm"],Tn);var hH=Ka("Minutes",!1);pe("s",["ss",2],0,"second");Nt("second","s");Et("second",15);le("s",Be);le("ss",Be,tn);Re(["s","ss"],xr);var pH=Ka("Seconds",!1);pe("S",0,0,function(){return~~(this.millisecond()/100)});pe(0,["SS",2],0,function(){return~~(this.millisecond()/10)});pe(0,["SSS",3],0,"millisecond");pe(0,["SSSS",4],0,function(){return this.millisecond()*10});pe(0,["SSSSS",5],0,function(){return this.millisecond()*100});pe(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});pe(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});pe(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});pe(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});Nt("millisecond","ms");Et("millisecond",16);le("S",Lf,r6);le("SS",Lf,tn);le("SSS",Lf,i6);var Xr,D6;for(Xr="SSSS";Xr.length<=9;Xr+="S")le(Xr,Za);function gH(e,t){t[Zi]=xe(("0."+e)*1e3)}for(Xr="S";Xr.length<=9;Xr+="S")Re(Xr,gH);D6=Ka("Milliseconds",!1);pe("z",0,0,"zoneAbbr");pe("zz",0,0,"zoneName");function mH(){return this._isUTC?"UTC":""}function yH(){return this._isUTC?"Coordinated Universal Time":""}var Q=Gl.prototype;Q.add=uB;Q.calendar=mB;Q.clone=yB;Q.diff=CB;Q.endOf=RB;Q.format=kB;Q.from=NB;Q.fromNow=EB;Q.to=IB;Q.toNow=TB;Q.get=xz;Q.invalidAt=HB;Q.isAfter=vB;Q.isBefore=xB;Q.isBetween=bB;Q.isSame=$B;Q.isSameOrAfter=wB;Q.isSameOrBefore=SB;Q.isValid=UB;Q.lang=N6;Q.locale=k6;Q.localeData=E6;Q.max=UU;Q.min=zU;Q.parsingFlags=BB;Q.set=bz;Q.startOf=AB;Q.subtract=dB;Q.toArray=jB;Q.toObject=LB;Q.toDate=MB;Q.toISOString=OB;Q.inspect=_B;typeof Symbol<"u"&&Symbol.for!=null&&(Q[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});Q.toJSON=zB;Q.toString=PB;Q.unix=DB;Q.valueOf=FB;Q.creationData=WB;Q.eraName=GB;Q.eraNarrow=QB;Q.eraAbbr=KB;Q.eraYear=ZB;Q.year=f6;Q.isLeapYear=Lz;Q.weekYear=iH;Q.isoWeekYear=oH;Q.quarter=Q.quarters=cH;Q.month=d6;Q.daysInMonth=Dz;Q.week=Q.weeks=Yz;Q.isoWeek=Q.isoWeeks=Vz;Q.weeksInYear=lH;Q.weeksInWeekYear=uH;Q.isoWeeksInYear=aH;Q.isoWeeksInISOWeekYear=sH;Q.date=F6;Q.day=Q.days=oU;Q.weekday=aU;Q.isoWeekday=sU;Q.dayOfYear=fH;Q.hour=Q.hours=pU;Q.minute=Q.minutes=hH;Q.second=Q.seconds=pH;Q.millisecond=Q.milliseconds=D6;Q.utcOffset=KU;Q.utc=JU;Q.local=XU;Q.parseZone=eB;Q.hasAlignedHourOffset=tB;Q.isDST=nB;Q.isLocal=iB;Q.isUtcOffset=oB;Q.isUtc=C6;Q.isUTC=C6;Q.zoneAbbr=mH;Q.zoneName=yH;Q.dates=xn("dates accessor is deprecated. Use date instead.",F6);Q.months=xn("months accessor is deprecated. Use month instead",d6);Q.years=xn("years accessor is deprecated. Use year instead",f6);Q.zone=xn("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",ZU);Q.isDSTShifted=xn("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",rB);function vH(e){return Ue(e*1e3)}function xH(){return Ue.apply(null,arguments).parseZone()}function M6(e){return e}var Oe=ay.prototype;Oe.calendar=oz;Oe.longDateFormat=uz;Oe.invalidDate=cz;Oe.ordinal=pz;Oe.preparse=M6;Oe.postformat=M6;Oe.relativeTime=mz;Oe.pastFuture=yz;Oe.set=rz;Oe.eras=YB;Oe.erasParse=VB;Oe.erasConvertYear=qB;Oe.erasAbbrRegex=XB;Oe.erasNameRegex=JB;Oe.erasNarrowRegex=eH;Oe.months=Tz;Oe.monthsShort=Az;Oe.monthsParse=Fz;Oe.monthsRegex=jz;Oe.monthsShortRegex=Mz;Oe.week=Uz;Oe.firstDayOfYear=Wz;Oe.firstDayOfWeek=Hz;Oe.weekdays=eU;Oe.weekdaysMin=nU;Oe.weekdaysShort=tU;Oe.weekdaysParse=iU;Oe.weekdaysRegex=lU;Oe.weekdaysShortRegex=uU;Oe.weekdaysMinRegex=dU;Oe.isPM=fU;Oe.meridiem=gU;function kc(e,t,n,r){var i=Ar(),o=rr().set(r,t);return i[n](o,e)}function j6(e,t,n){if(Nr(e)&&(t=e,e=void 0),e=e||"",t!=null)return kc(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=kc(e,r,n,"month");return i}function wy(e,t,n,r){typeof e=="boolean"?(Nr(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,Nr(t)&&(n=t,t=void 0),t=t||"");var i=Ar(),o=e?i._week.dow:0,a,l=[];if(n!=null)return kc(t,(n+o)%7,r,"day");for(a=0;a<7;a++)l[a]=kc(t,(a+o)%7,r,"day");return l}function bH(e,t){return j6(e,t,"months")}function $H(e,t){return j6(e,t,"monthsShort")}function wH(e,t,n){return wy(e,t,n,"weekdays")}function SH(e,t,n){return wy(e,t,n,"weekdaysShort")}function CH(e,t,n){return wy(e,t,n,"weekdaysMin")}pi("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=xe(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});ee.lang=xn("moment.lang is deprecated. Use moment.locale instead.",pi);ee.langData=xn("moment.langData is deprecated. Use moment.localeData instead.",Ar);var lr=Math.abs;function PH(){var e=this._data;return this._milliseconds=lr(this._milliseconds),this._days=lr(this._days),this._months=lr(this._months),e.milliseconds=lr(e.milliseconds),e.seconds=lr(e.seconds),e.minutes=lr(e.minutes),e.hours=lr(e.hours),e.months=lr(e.months),e.years=lr(e.years),this}function L6(e,t,n,r){var i=zn(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function OH(e,t){return L6(this,e,t,1)}function _H(e,t){return L6(this,e,t,-1)}function Qx(e){return e<0?Math.floor(e):Math.ceil(e)}function kH(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,i,o,a,l,u;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=Qx(lg(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,i=dn(e/1e3),r.seconds=i%60,o=dn(i/60),r.minutes=o%60,a=dn(o/60),r.hours=a%24,t+=dn(a/24),u=dn(z6(t)),n+=u,t-=Qx(lg(u)),l=dn(n/12),n%=12,r.days=t,r.months=n,r.years=l,this}function z6(e){return e*4800/146097}function lg(e){return e*146097/4800}function NH(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=bn(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+z6(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(lg(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function EH(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+xe(this._months/12)*31536e6:NaN}function Rr(e){return function(){return this.as(e)}}var IH=Rr("ms"),TH=Rr("s"),AH=Rr("m"),RH=Rr("h"),FH=Rr("d"),DH=Rr("w"),MH=Rr("M"),jH=Rr("Q"),LH=Rr("y");function zH(){return zn(this)}function UH(e){return e=bn(e),this.isValid()?this[e+"s"]():NaN}function ho(e){return function(){return this.isValid()?this._data[e]:NaN}}var BH=ho("milliseconds"),HH=ho("seconds"),WH=ho("minutes"),YH=ho("hours"),VH=ho("days"),qH=ho("months"),GH=ho("years");function QH(){return dn(this.days()/7)}var fr=Math.round,da={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function KH(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function ZH(e,t,n,r){var i=zn(e).abs(),o=fr(i.as("s")),a=fr(i.as("m")),l=fr(i.as("h")),u=fr(i.as("d")),d=fr(i.as("M")),c=fr(i.as("w")),h=fr(i.as("y")),g=o<=n.ss&&["s",o]||o<n.s&&["ss",o]||a<=1&&["m"]||a<n.m&&["mm",a]||l<=1&&["h"]||l<n.h&&["hh",l]||u<=1&&["d"]||u<n.d&&["dd",u];return n.w!=null&&(g=g||c<=1&&["w"]||c<n.w&&["ww",c]),g=g||d<=1&&["M"]||d<n.M&&["MM",d]||h<=1&&["y"]||["yy",h],g[2]=t,g[3]=+e>0,g[4]=r,KH.apply(null,g)}function JH(e){return e===void 0?fr:typeof e=="function"?(fr=e,!0):!1}function XH(e,t){return da[e]===void 0?!1:t===void 0?da[e]:(da[e]=t,e==="s"&&(da.ss=t-1),!0)}function eW(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=da,i,o;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},da,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),i=this.localeData(),o=ZH(this,!n,r,i),n&&(o=i.pastFuture(+this,o)),i.postformat(o)}var D0=Math.abs;function So(e){return(e>0)-(e<0)||+e}function qf(){if(!this.isValid())return this.localeData().invalidDate();var e=D0(this._milliseconds)/1e3,t=D0(this._days),n=D0(this._months),r,i,o,a,l=this.asSeconds(),u,d,c,h;return l?(r=dn(e/60),i=dn(r/60),e%=60,r%=60,o=dn(n/12),n%=12,a=e?e.toFixed(3).replace(/\.?0+$/,""):"",u=l<0?"-":"",d=So(this._months)!==So(l)?"-":"",c=So(this._days)!==So(l)?"-":"",h=So(this._milliseconds)!==So(l)?"-":"",u+"P"+(o?d+o+"Y":"")+(n?d+n+"M":"")+(t?c+t+"D":"")+(i||r||e?"T":"")+(i?h+i+"H":"")+(r?h+r+"M":"")+(e?h+a+"S":"")):"P0D"}var $e=Yf.prototype;$e.isValid=VU;$e.abs=PH;$e.add=OH;$e.subtract=_H;$e.as=NH;$e.asMilliseconds=IH;$e.asSeconds=TH;$e.asMinutes=AH;$e.asHours=RH;$e.asDays=FH;$e.asWeeks=DH;$e.asMonths=MH;$e.asQuarters=jH;$e.asYears=LH;$e.valueOf=EH;$e._bubble=kH;$e.clone=zH;$e.get=UH;$e.milliseconds=BH;$e.seconds=HH;$e.minutes=WH;$e.hours=YH;$e.days=VH;$e.weeks=QH;$e.months=qH;$e.years=GH;$e.humanize=eW;$e.toISOString=qf;$e.toString=qf;$e.toJSON=qf;$e.locale=k6;$e.localeData=E6;$e.toIsoString=xn("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",qf);$e.lang=N6;pe("X",0,0,"unix");pe("x",0,0,"valueOf");le("x",Uf);le("X",wz);Re("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});Re("x",function(e,t,n){n._d=new Date(xe(e))});//! moment.js
ee.version="2.29.4";tz(Ue);ee.fn=Q;ee.min=BU;ee.max=HU;ee.now=WU;ee.utc=rr;ee.unix=vH;ee.months=bH;ee.isDate=ql;ee.locale=pi;ee.invalid=Df;ee.duration=zn;ee.isMoment=jn;ee.weekdays=wH;ee.parseZone=xH;ee.localeData=Ar;ee.isDuration=gd;ee.monthsShort=$H;ee.weekdaysMin=CH;ee.defineLocale=py;ee.updateLocale=xU;ee.locales=bU;ee.weekdaysShort=SH;ee.normalizeUnits=bn;ee.relativeTimeRounding=JH;ee.relativeTimeThreshold=XH;ee.calendarFormat=gB;ee.prototype=Q;ee.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const tW=[{_id:"1",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"David",tag_No:"123",created:"2 may 2022",quantity:0,active:!1,price:100},{_id:"2",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:0,active:!1,price:100},{_id:"3",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"4",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"5",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"6",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"7",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"1",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"8",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100}];var ug={},nW={get exports(){return ug},set exports(e){ug=e}};(function(e,t){(function(n,r){e.exports=r(C)})(Q6,n=>(()=>{var r={703:(l,u,d)=>{var c=d(414);function h(){}function g(){}g.resetWarningCache=h,l.exports=function(){function b($,m,p,x,S,P){if(P!==c){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}function v(){return b}b.isRequired=b;var w={array:b,bigint:b,bool:b,func:b,number:b,object:b,string:b,symbol:b,any:b,arrayOf:v,element:b,elementType:b,instanceOf:v,node:b,objectOf:v,oneOf:v,oneOfType:v,shape:v,exact:v,checkPropTypes:g,resetWarningCache:h};return w.PropTypes=w,w}},697:(l,u,d)=>{l.exports=d(703)()},414:l=>{l.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:l=>{l.exports=n}},i={};function o(l){var u=i[l];if(u!==void 0)return u.exports;var d=i[l]={exports:{}};return r[l](d,d.exports,o),d.exports}o.n=l=>{var u=l&&l.__esModule?()=>l.default:()=>l;return o.d(u,{a:u}),u},o.d=(l,u)=>{for(var d in u)o.o(u,d)&&!o.o(l,d)&&Object.defineProperty(l,d,{enumerable:!0,get:u[d]})},o.o=(l,u)=>Object.prototype.hasOwnProperty.call(l,u),o.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var a={};return(()=>{o.r(a),o.d(a,{default:()=>ie});var l=o(98),u=o.n(l),d=o(697),c=o.n(d);function h(){return h=Object.assign?Object.assign.bind():function(M){for(var j=1;j<arguments.length;j++){var J=arguments[j];for(var F in J)Object.prototype.hasOwnProperty.call(J,F)&&(M[F]=J[F])}return M},h.apply(this,arguments)}var g=function(M){var j=M.pageClassName,J=M.pageLinkClassName,F=M.page,X=M.selected,te=M.activeClassName,L=M.activeLinkClassName,N=M.getEventListener,E=M.pageSelectedHandler,U=M.href,D=M.extraAriaContext,H=M.pageLabelBuilder,Y=M.rel,oe=M.ariaLabel||"Page "+F+(D?" "+D:""),k=null;return X&&(k="page",oe=M.ariaLabel||"Page "+F+" is your current page",j=j!==void 0?j+" "+te:te,J!==void 0?L!==void 0&&(J=J+" "+L):J=L),u().createElement("li",{className:j},u().createElement("a",h({rel:Y,role:U?void 0:"button",className:J,href:U,tabIndex:X?"-1":"0","aria-label":oe,"aria-current":k,onKeyPress:E},N(E)),H(F)))};g.propTypes={pageSelectedHandler:c().func.isRequired,selected:c().bool.isRequired,pageClassName:c().string,pageLinkClassName:c().string,activeClassName:c().string,activeLinkClassName:c().string,extraAriaContext:c().string,href:c().string,ariaLabel:c().string,page:c().number.isRequired,getEventListener:c().func.isRequired,pageLabelBuilder:c().func.isRequired,rel:c().string};const b=g;function v(){return v=Object.assign?Object.assign.bind():function(M){for(var j=1;j<arguments.length;j++){var J=arguments[j];for(var F in J)Object.prototype.hasOwnProperty.call(J,F)&&(M[F]=J[F])}return M},v.apply(this,arguments)}var w=function(M){var j=M.breakLabel,J=M.breakAriaLabel,F=M.breakClassName,X=M.breakLinkClassName,te=M.breakHandler,L=M.getEventListener,N=F||"break";return u().createElement("li",{className:N},u().createElement("a",v({className:X,role:"button",tabIndex:"0","aria-label":J,onKeyPress:te},L(te)),j))};w.propTypes={breakLabel:c().oneOfType([c().string,c().node]),breakAriaLabel:c().string,breakClassName:c().string,breakLinkClassName:c().string,breakHandler:c().func.isRequired,getEventListener:c().func.isRequired};const $=w;function m(M){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return M??j}function p(M){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(j){return typeof j}:function(j){return j&&typeof Symbol=="function"&&j.constructor===Symbol&&j!==Symbol.prototype?"symbol":typeof j},p(M)}function x(){return x=Object.assign?Object.assign.bind():function(M){for(var j=1;j<arguments.length;j++){var J=arguments[j];for(var F in J)Object.prototype.hasOwnProperty.call(J,F)&&(M[F]=J[F])}return M},x.apply(this,arguments)}function S(M,j){for(var J=0;J<j.length;J++){var F=j[J];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(M,F.key,F)}}function P(M,j){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(J,F){return J.__proto__=F,J},P(M,j)}function _(M,j){if(j&&(p(j)==="object"||typeof j=="function"))return j;if(j!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return T(M)}function T(M){if(M===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}function R(M){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(j){return j.__proto__||Object.getPrototypeOf(j)},R(M)}function W(M,j,J){return j in M?Object.defineProperty(M,j,{value:J,enumerable:!0,configurable:!0,writable:!0}):M[j]=J,M}var z=function(M){(function(N,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function");N.prototype=Object.create(E&&E.prototype,{constructor:{value:N,writable:!0,configurable:!0}}),Object.defineProperty(N,"prototype",{writable:!1}),E&&P(N,E)})(L,M);var j,J,F,X,te=(F=L,X=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var N,E=R(F);if(X){var U=R(this).constructor;N=Reflect.construct(E,arguments,U)}else N=E.apply(this,arguments);return _(this,N)});function L(N){var E,U;return function(D,H){if(!(D instanceof H))throw new TypeError("Cannot call a class as a function")}(this,L),W(T(E=te.call(this,N)),"handlePreviousPage",function(D){var H=E.state.selected;E.handleClick(D,null,H>0?H-1:void 0,{isPrevious:!0})}),W(T(E),"handleNextPage",function(D){var H=E.state.selected,Y=E.props.pageCount;E.handleClick(D,null,H<Y-1?H+1:void 0,{isNext:!0})}),W(T(E),"handlePageSelected",function(D,H){if(E.state.selected===D)return E.callActiveCallback(D),void E.handleClick(H,null,void 0,{isActive:!0});E.handleClick(H,null,D)}),W(T(E),"handlePageChange",function(D){E.state.selected!==D&&(E.setState({selected:D}),E.callCallback(D))}),W(T(E),"getEventListener",function(D){return W({},E.props.eventListener,D)}),W(T(E),"handleClick",function(D,H,Y){var oe=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},k=oe.isPrevious,de=k!==void 0&&k,Z=oe.isNext,Ce=Z!==void 0&&Z,me=oe.isBreak,ge=me!==void 0&&me,he=oe.isActive,Ne=he!==void 0&&he;D.preventDefault?D.preventDefault():D.returnValue=!1;var De=E.state.selected,fe=E.props.onClick,O=Y;if(fe){var I=fe({index:H,selected:De,nextSelectedPage:Y,event:D,isPrevious:de,isNext:Ce,isBreak:ge,isActive:Ne});if(I===!1)return;Number.isInteger(I)&&(O=I)}O!==void 0&&E.handlePageChange(O)}),W(T(E),"handleBreakClick",function(D,H){var Y=E.state.selected;E.handleClick(H,D,Y<D?E.getForwardJump():E.getBackwardJump(),{isBreak:!0})}),W(T(E),"callCallback",function(D){E.props.onPageChange!==void 0&&typeof E.props.onPageChange=="function"&&E.props.onPageChange({selected:D})}),W(T(E),"callActiveCallback",function(D){E.props.onPageActive!==void 0&&typeof E.props.onPageActive=="function"&&E.props.onPageActive({selected:D})}),W(T(E),"getElementPageRel",function(D){var H=E.state.selected,Y=E.props,oe=Y.nextPageRel,k=Y.prevPageRel,de=Y.selectedPageRel;return H-1===D?k:H===D?de:H+1===D?oe:void 0}),W(T(E),"pagination",function(){var D=[],H=E.props,Y=H.pageRangeDisplayed,oe=H.pageCount,k=H.marginPagesDisplayed,de=H.breakLabel,Z=H.breakClassName,Ce=H.breakLinkClassName,me=H.breakAriaLabels,ge=E.state.selected;if(oe<=Y)for(var he=0;he<oe;he++)D.push(E.getPageElement(he));else{var Ne=Y/2,De=Y-Ne;ge>oe-Y/2?Ne=Y-(De=oe-ge):ge<Y/2&&(De=Y-(Ne=ge));var fe,O,I=function(V){return E.getPageElement(V)},A=[];for(fe=0;fe<oe;fe++){var re=fe+1;if(re<=k)A.push({type:"page",index:fe,display:I(fe)});else if(re>oe-k)A.push({type:"page",index:fe,display:I(fe)});else if(fe>=ge-Ne&&fe<=ge+(ge===0&&Y>1?De-1:De))A.push({type:"page",index:fe,display:I(fe)});else if(de&&A.length>0&&A[A.length-1].display!==O&&(Y>0||k>0)){var q=fe<ge?me.backward:me.forward;O=u().createElement($,{key:fe,breakAriaLabel:q,breakLabel:de,breakClassName:Z,breakLinkClassName:Ce,breakHandler:E.handleBreakClick.bind(null,fe),getEventListener:E.getEventListener}),A.push({type:"break",index:fe,display:O})}}A.forEach(function(V,se){var ve=V;V.type==="break"&&A[se-1]&&A[se-1].type==="page"&&A[se+1]&&A[se+1].type==="page"&&A[se+1].index-A[se-1].index<=2&&(ve={type:"page",index:V.index,display:I(V.index)}),D.push(ve.display)})}return D}),N.initialPage!==void 0&&N.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(N.initialPage,") and forcePage (").concat(N.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),U=N.initialPage?N.initialPage:N.forcePage?N.forcePage:0,E.state={selected:U},E}return j=L,(J=[{key:"componentDidMount",value:function(){var N=this.props,E=N.initialPage,U=N.disableInitialCallback,D=N.extraAriaContext,H=N.pageCount,Y=N.forcePage;E===void 0||U||this.callCallback(E),D&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(H)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(H,"). Did you forget a Math.ceil()?")),E!==void 0&&E>H-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(E," > ").concat(H-1,").")),Y!==void 0&&Y>H-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(Y," > ").concat(H-1,")."))}},{key:"componentDidUpdate",value:function(N){this.props.forcePage!==void 0&&this.props.forcePage!==N.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(N.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var N=this.state.selected,E=this.props,U=E.pageCount,D=N+E.pageRangeDisplayed;return D>=U?U-1:D}},{key:"getBackwardJump",value:function(){var N=this.state.selected-this.props.pageRangeDisplayed;return N<0?0:N}},{key:"getElementHref",value:function(N){var E=this.props,U=E.hrefBuilder,D=E.pageCount,H=E.hrefAllControls;if(U)return H||N>=0&&N<D?U(N+1,D,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(N){var E=N===this.state.selected;if(this.props.ariaLabelBuilder&&N>=0&&N<this.props.pageCount){var U=this.props.ariaLabelBuilder(N+1,E);return this.props.extraAriaContext&&!E&&(U=U+" "+this.props.extraAriaContext),U}}},{key:"getPageElement",value:function(N){var E=this.state.selected,U=this.props,D=U.pageClassName,H=U.pageLinkClassName,Y=U.activeClassName,oe=U.activeLinkClassName,k=U.extraAriaContext,de=U.pageLabelBuilder;return u().createElement(b,{key:N,pageSelectedHandler:this.handlePageSelected.bind(null,N),selected:E===N,rel:this.getElementPageRel(N),pageClassName:D,pageLinkClassName:H,activeClassName:Y,activeLinkClassName:oe,extraAriaContext:k,href:this.getElementHref(N),ariaLabel:this.ariaLabelBuilder(N),page:N+1,pageLabelBuilder:de,getEventListener:this.getEventListener})}},{key:"render",value:function(){var N=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&N!==void 0)return N&&N(this.props);var E=this.props,U=E.disabledClassName,D=E.disabledLinkClassName,H=E.pageCount,Y=E.className,oe=E.containerClassName,k=E.previousLabel,de=E.previousClassName,Z=E.previousLinkClassName,Ce=E.previousAriaLabel,me=E.prevRel,ge=E.nextLabel,he=E.nextClassName,Ne=E.nextLinkClassName,De=E.nextAriaLabel,fe=E.nextRel,O=this.state.selected,I=O===0,A=O===H-1,re="".concat(m(de)).concat(I?" ".concat(m(U)):""),q="".concat(m(he)).concat(A?" ".concat(m(U)):""),V="".concat(m(Z)).concat(I?" ".concat(m(D)):""),se="".concat(m(Ne)).concat(A?" ".concat(m(D)):""),ve=I?"true":"false",ae=A?"true":"false";return u().createElement("ul",{className:Y||oe,role:"navigation","aria-label":"Pagination"},u().createElement("li",{className:re},u().createElement("a",x({className:V,href:this.getElementHref(O-1),tabIndex:I?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":ve,"aria-label":Ce,rel:me},this.getEventListener(this.handlePreviousPage)),k)),this.pagination(),u().createElement("li",{className:q},u().createElement("a",x({className:se,href:this.getElementHref(O+1),tabIndex:A?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":ae,"aria-label":De,rel:fe},this.getEventListener(this.handleNextPage)),ge)))}}])&&S(j.prototype,J),Object.defineProperty(j,"prototype",{writable:!1}),L}(l.Component);W(z,"propTypes",{pageCount:c().number.isRequired,pageRangeDisplayed:c().number,marginPagesDisplayed:c().number,previousLabel:c().node,previousAriaLabel:c().string,prevPageRel:c().string,prevRel:c().string,nextLabel:c().node,nextAriaLabel:c().string,nextPageRel:c().string,nextRel:c().string,breakLabel:c().oneOfType([c().string,c().node]),breakAriaLabels:c().shape({forward:c().string,backward:c().string}),hrefBuilder:c().func,hrefAllControls:c().bool,onPageChange:c().func,onPageActive:c().func,onClick:c().func,initialPage:c().number,forcePage:c().number,disableInitialCallback:c().bool,containerClassName:c().string,className:c().string,pageClassName:c().string,pageLinkClassName:c().string,pageLabelBuilder:c().func,activeClassName:c().string,activeLinkClassName:c().string,previousClassName:c().string,nextClassName:c().string,previousLinkClassName:c().string,nextLinkClassName:c().string,disabledClassName:c().string,disabledLinkClassName:c().string,breakClassName:c().string,breakLinkClassName:c().string,extraAriaContext:c().string,ariaLabelBuilder:c().func,eventListener:c().string,renderOnZeroPageCount:c().func,selectedPageRel:c().string}),W(z,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(M){return M},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const ie=z})(),a})())})(nW);const nn=u4(ug),rW=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["posts"],queryFn:()=>Vl(t)}),[r,i]=C.useState(0),o=6,a=r*o,l=Math.ceil((n==null?void 0:n.length)/o),u=n==null?void 0:n.slice(a,a+o),d=({selected:$})=>{i($)};console.log(n);const[c,h]=C.useState(""),g=["name","brand","tag"],b=$=>{const m=$==null?void 0:$.filter(p=>g.some(x=>{const S=p[x];return typeof S=="string"&&S.toLowerCase().includes(c)}));return c?m!=null&&m.length?m:null:$},v=b(u);var w=Intl.NumberFormat();return y(aW,{children:[s(rt,{}),y(sW,{children:[s(lW,{children:"All Products"}),y(iW,{children:[s("input",{placeholder:"Search by name or brand",value:c,onChange:$=>h($.target.value)}),s("button",{onClick:b,children:s(Qa,{})})]})]}),s(oW,{children:y(dW,{children:[y(uW,{children:[s(Ri,{children:s(Ai,{children:"Product "})}),s(Ri,{children:s(Ai,{children:"Tag "})}),s(Ri,{children:s(Ai,{children:"Created"})}),s(Ri,{children:s(Ai,{children:"Price"})}),s(Ri,{children:s(Ai,{children:"Aval / Qty "})}),s(Ri,{children:s(Ai,{children:"Active "})}),y(Ri,{children:[s(Ai,{children:"Action "})," "]})]}),v==null?void 0:v.map(($,m)=>s(Ff,{index:m,avatar:$==null?void 0:$.avatar[0].url,name:$.name,tag:$.tag_No,created:ee($.createdAt).format("D MMM YYYY"),quantity:$.quantity,active:$.active,price:w.format($.price)},m))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:l,onPageChange:d,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active"})]})},iW=f.div`
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
`,oW=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,aW=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,sW=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,lW=f.div`
  border-bottom: 2px solid blue;
`,Ai=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Ri=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,uW=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,dW=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,cW=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["posts"],queryFn:()=>Vl(t)}),r=n.filter($=>$.active===!0),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),c=({selected:$})=>{o($)};console.log(n);const[h,g]=C.useState("");console.log(h);const b=["name","brand","tag"],v=$=>{const m=$==null?void 0:$.filter(p=>b.some(x=>{const S=p[x];return typeof S=="string"&&S.toLowerCase().includes(h)}));return h?m!=null&&m.length?m:null:$};v(d);var w=Intl.NumberFormat();return y(pW,{children:[s(rt,{}),y(gW,{children:[s(mW,{children:"Live Products"}),y(fW,{children:[s("input",{placeholder:"Search by name or brand",value:h,onChange:$=>g($.target.value)}),s("button",{onClick:v,children:s(Qa,{})})]})]}),s(hW,{children:y(vW,{children:[y(yW,{children:[s(Di,{children:s(Fi,{children:"Product "})}),s(Di,{children:s(Fi,{children:"Tag "})}),s(Di,{children:s(Fi,{children:"Created"})}),s(Di,{children:s(Fi,{children:"Price"})}),s(Di,{children:s(Fi,{children:"Aval / Qty "})}),s(Di,{children:s(Fi,{children:"Active "})}),y(Di,{children:[s(Fi,{children:"Action "})," "]})]}),d==null?void 0:d.map(($,m)=>s(Ff,{index:m,avatar:$==null?void 0:$.avatar[0].url,name:$.name,tag:$.tag_No,created:ee($.createdAt).format("D MMM YYYY"),quantity:$.quantity,active:$.active,price:w.format($.price)},m))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:c,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})},fW=f.div`
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
`,hW=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,pW=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,gW=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,mW=f.div`
  border-bottom: 2px solid blue;
`,Fi=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Di=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,yW=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,vW=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,xW=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["posts"],queryFn:()=>Vl(t)}),r=n.filter(m=>m.active===!1),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),c=({selected:m})=>{o(m)};console.log(n);const[h,g]=C.useState("");console.log(h);const b=["name","brand","tag"],v=m=>{const p=m==null?void 0:m.filter(x=>b.some(S=>{const P=x[S];return typeof P=="string"&&P.toLowerCase().includes(h)}));return h?p!=null&&p.length?p:null:m},w=v(d);var $=Intl.NumberFormat();return y(wW,{children:[s(rt,{}),y(SW,{children:[s(CW,{children:"Sold Out"}),y(bW,{children:[s("input",{placeholder:"Search by name or brand",value:h,onChange:m=>g(m.target.value)}),s("button",{onClick:v,children:s(Qa,{})})]})]}),s($W,{children:y(OW,{children:[y(PW,{children:[s(ji,{children:s(Mi,{children:"Product "})}),s(ji,{children:s(Mi,{children:"Tag "})}),s(ji,{children:s(Mi,{children:"Created"})}),s(ji,{children:s(Mi,{children:"Price"})}),s(ji,{children:s(Mi,{children:"Aval / Qty "})}),s(ji,{children:s(Mi,{children:"Active "})}),y(ji,{children:[s(Mi,{children:"Action "})," "]})]}),w==null?void 0:w.map((m,p)=>s(Ff,{index:p,avatar:m==null?void 0:m.avatar[0].url,name:m.name,tag:m.tag_No,created:ee(m.createdAt).format("D MMM YYYY"),quantity:m.quantity,active:m.active,price:$.format(m.price)},p))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:c,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active"})]})},bW=f.div`
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
`,$W=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,wW=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,SW=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,CW=f.div`
  border-bottom: 2px solid blue;
`,Mi=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,ji=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,PW=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,OW=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,_W=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["posts"],queryFn:()=>Vl(t)}),r=tW.filter($=>$.rejected),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),c=({selected:$})=>{o($)};console.log(n);const[h,g]=C.useState("");console.log(h);const b=["name","brand","tag"],v=$=>{const m=$==null?void 0:$.filter(p=>b.some(x=>{const S=p[x];return typeof S=="string"&&S.toLowerCase().includes(h)}));return h?m!=null&&m.length?m:null:$},w=v(d);return y(EW,{children:[s(rt,{}),y(IW,{children:[s(TW,{children:"Rejected Products"}),y(kW,{children:[s("input",{placeholder:"Search by name or brand",value:h,onChange:$=>g($.target.value)}),s("button",{onClick:v,children:s(Qa,{})})]})]}),s(NW,{children:y(RW,{children:[y(AW,{children:[s(ms,{children:s(gs,{children:"Product "})}),s(ms,{children:s(gs,{children:"Tag "})}),s(ms,{children:s(gs,{children:"Created"})}),s(ms,{children:s(gs,{children:"Reason for Rejection"})}),y(ms,{children:[s(gs,{children:"Action "})," "]})]}),w==null?void 0:w.map(($,m)=>s(Ff,{index:m,avatar:$==null?void 0:$.avatar[0].url,name:$.name,tag:$.tag_No,created:ee($.createdAt).format("D MMM YYYY"),rejected},m))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:c,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active"})]})},kW=f.div`
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
`,NW=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,EW=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,IW=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,TW=f.div`
  border-bottom: 2px solid blue;
`,gs=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,ms=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,AW=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,RW=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,Fr=({avatar:e,index:t,order_No:n,price:r,pending_days:i,created:o,delivery_status:a,payment_method:l,tag_No:u,name:d,payment_status:c,quantity:h,amount:g})=>(C.useState(!1),y(MW,{children:[n&&y(wn,{children:[" ",s(Wn,{children:n})]}),i&&y(wn,{children:[" ",s(Wn,{children:i})]}),o&&y(wn,{children:[" ",s(Wn,{children:o})," "]}),u&&y(wn,{children:[" ",s(Wn,{children:u})," "]}),e&&s(wn,{children:y(DW,{children:[s("span",{children:s(FW,{src:e})}),d]})}),r&&y(wn,{children:[s(Wn,{children:r})," "]}),h&&y(wn,{children:[s(Wn,{children:h})," "]}),l&&s(wn,{children:s(Wn,{children:l})}),g&&s(wn,{children:s(Wn,{children:g})}),c&&s(wn,{children:s(Wn,{children:c})}),a&&s(wn,{children:s(Wn,{children:s("button",{className:`${a}`,children:a})})})]},t));f.div`
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
`;const FW=f.img`
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
`,DW=f.div`
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
`,MW=f.tr`
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;;
`,jW=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(m=>{var x;return((x=m==null?void 0:m.products)==null?void 0:x.filter(S=>S.sellerID===t)).length>0}),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),c=({selected:m})=>{o(m)},[h,g]=C.useState(""),b=["order_No","delivery_status"],w=(m=>{const p=m==null?void 0:m.filter(x=>b.some(S=>{const P=x[S];return typeof P=="string"&&P.toLowerCase().includes(h)}));return h?p!=null&&p.length?p:null:m})(d);var $=Intl.NumberFormat();return y(zW,{children:[s(rt,{}),s(UW,{children:s(BW,{children:"All Orders"})}),s(LW,{children:y(WW,{children:[y(HW,{children:[s(vs,{children:s(ys,{children:"Order Number "})}),s(vs,{children:s(ys,{children:"Order Date"})}),s(vs,{children:s(ys,{children:"Price"})}),s(vs,{children:s(ys,{children:"Payment Method"})}),s(vs,{children:s(ys,{children:"Status "})})]}),w==null?void 0:w.map((m,p)=>s(Fr,{index:p,delivery_status:m.delivery_status,order_No:m.order_No,created:ee(m.createdAt).format("D MMM YYYY"),payment_method:m.payment_method,pending_days:m.pending_days,price:$.format(m.price)},p))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:c,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};f.div`
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
`;const LW=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,zW=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,UW=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0;
`,BW=f.div`
  border-bottom: 2px solid blue;
`,ys=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,vs=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,HW=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,WW=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,YW=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="pending"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[g,b]=C.useState("");console.log(g);const v=["order_No","delivery_status"],$=(p=>{const x=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?x!=null&&x.length?x:null:p})(c);var m=Intl.NumberFormat();return y(qW,{children:[s(rt,{}),s(GW,{children:s(QW,{children:"Pending Orders"})}),s(VW,{children:y(ZW,{children:[y(KW,{children:[s(bs,{children:s(xs,{children:"Order Number "})}),s(bs,{children:s(xs,{children:"Order Date"})}),s(bs,{children:s(xs,{children:"Price"})}),s(bs,{children:s(xs,{children:"Payment Method"})}),s(bs,{children:s(xs,{children:"Status "})})]}),$==null?void 0:$.map((p,x)=>s(Fr,{index:x,delivery_status:p.delivery_status,order_No:p.order_No,created:ee(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:m.format(p.price)},x))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};f.div`
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
`;const VW=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,qW=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,GW=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,QW=f.div`
  border-bottom: 2px solid blue;
`,xs=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,bs=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,KW=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,ZW=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,JW=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="ready to ship"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[g,b]=C.useState(""),v=["order_No","delivery_status"],$=(p=>{const x=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?x!=null&&x.length?x:null:p})(c);var m=Intl.NumberFormat();return y(eY,{children:[s(rt,{}),s(tY,{children:s(nY,{children:"Ready To Ship Orders"})}),s(XW,{children:y(iY,{children:[y(rY,{children:[s(ws,{children:s($s,{children:"Order Number "})}),s(ws,{children:s($s,{children:"Order Date"})}),s(ws,{children:s($s,{children:"Price"})}),s(ws,{children:s($s,{children:"Payment Method"})}),s(ws,{children:s($s,{children:"Status "})})]}),$==null?void 0:$.map((p,x)=>s(Fr,{index:x,delivery_status:p.delivery_status,order_No:p.order_No,created:ee(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:m.format(p.price)},x))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};f.div`
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
`;const XW=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,eY=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,tY=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,nY=f.div`
  border-bottom: 2px solid blue;
`,$s=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,ws=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,rY=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,iY=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,oY=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="shipped"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[g,b]=C.useState(""),v=["order_No","delivery_status"],$=(p=>{const x=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?x!=null&&x.length?x:null:p})(c);var m=Intl.NumberFormat();return y(sY,{children:[s(rt,{}),s(lY,{children:s(uY,{children:"Shipped"})}),s(aY,{children:y(cY,{children:[y(dY,{children:[s(Po,{children:s(Co,{children:"Order Number "})}),s(Po,{children:s(Co,{children:"Pending Days"})}),s(Po,{children:s(Co,{children:"Order Date"})}),s(Po,{children:s(Co,{children:"Price"})}),s(Po,{children:s(Co,{children:"Payment Method"})}),s(Po,{children:s(Co,{children:"Status "})})]}),$==null?void 0:$.map((p,x)=>s(Fr,{index:x,delivery_status:p.delivery_status,order_No:p.order_No,created:ee(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:m.format(p.price)},x))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};f.div`
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
`;const aY=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,sY=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,lY=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,uY=f.div`
  border-bottom: 2px solid blue;
`,Co=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Po=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,dY=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,cY=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,fY="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA6LSURBVHgB7Z0JrFxVHca/ebVQQNk3sUADZRGIQkGhKjuKUVyIIS4xMRJwjRIUlMREE1RUMGJUgonGgIoGELFBMVK1hhTRCkKRLQXbIpS2tNAWui/v+f8492TOu2/m9NHO3N7/ne+XfJnlzbzcOed853/We1oYDFqmIdNepoNNx5ummY4xHWnax7Rz8bkWBpcRhN+/xbTGtMg03/SQ6d+mx02LTatMmzEANLkwxN/GTH+j6fRCbzIdlPy91eV7g8hI5r2NpidN/zTNMv3FtDTzPVFjYiHf0/RxhAxdhlAzUsPJIzUiddRwkmYUo8Ym00LTb01nmCYiROdBrlhcwYxipp1u+oPpeYSM3ozRxvBSSOtmlpiWfM5K5zrTYUnaixrDmmxv0+cRMk+Roj9GidpUPM41nYdQMckkNYUZs5/pMtMLaNdyMkd/jRKbXo+Z3mvaCQ0yyQQ0A0aO3U1fKvRqtNvF5ZGpkQ7fl4HGqlNatTo8j+m7B8LI4P8QOvOd0tkdTXA6fwONfhVC9GDGDBWPOWMMF5/j6Mx6hJqwEZnaI9hcmlQ8Mq3SiqZcbmK68XMc2fqC6ebic67T1LtB4vWfYZph2i15v5s5+JymWIhQ01HM1PUQhOnDCodpOQWhA05xaDwdreqUvjH6zDOdhZCuqnR2IMwkTvT9CZ37G2mHMv79XtOlppNNB6LdzGxJYyoWRpDJCIWdEXpRKY1z6f090y4QOwxmJPsdPzatxNjh2zSzGB2YuV8zHYr6zZqn11Kn6yLxetj5Ptb0C9OL6D4AEoeBl5s+YHoVxA6B4f400wKEDMmNsjxq+ghCZtVxUisWwqFEdbvGoeJxf9O1aI8UdosiTPdbTIcn33WH11EsFh6G/0+YzsXoZhJJ28QrTBcj9FHIMOoH14KdY3oHwjoxGpkFcBPqQ0zTdaZ/IESU00qfKUe/AxCGfx+G+iKVw5qMi+fS5SPlphU741egXTvXEQ6P/gqhQ7saofnCgYNvIjQh6xjtmJZcxnMbxqZ/zIP4/o0Ii0TdRhFvxAJzAUaboRziaY7fmF6HekbK2K5nmz7OSqfrnvhbPoP69UkivKajEJqvuQESrv6dCqd4dTUz59TieXm+gzBjlphuNT2LkIF1hM2pt6M9tJqage+x3zQJ9Wye8DqfMt2OfPqymTUN9TV6Fo8GYWHh8OFJmc8wI+aYZqPeHIEwERcNUB5qPQRhbVkdC1aM0jMRmoflvl0reW86nOLRIEx4TlpNTl5HYnjnsC4Nshj17hxy41FslkTS5+wQr0d9fwOvi5up5qOzieN7R2H0EhY3eG1i0RxsesQlEJH4fIPpAXRuftWJexAGGmIfKW2/kzsRRrPq+ht4rbw+7jbcgO5rt9gP3AMO8WoQjmDFa+9U+zKzFqH+cAj666YnMLqGZZuezcPri9d1rnlpAi5Q5CBDt+ukOXaFwz6I11lOJna3kanY9l1TvK5z84TcbbrIdL7pRNNahHY9523mw0ezhEbv1lHn9U8s5A6vBtla5Cu36+sM+xhcH/YgwhIY/raXEDrAXn7DeG7g4C56EK2TqQcsYGsKdduLIXYAMkh9qOMSmIFH0/9CZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBlkECEyyCBCZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBm8GaTTHciF6BteI0hdbwQnGoa3HYXc+H8wwpkg8U6EQvQNbwb5NsKZE7yNDM8hlEFEX/FiEN5q9IemCzH6Np11vzGccI6XPgjPzWDkYN+jfBqTEH3Di0F4o+p4tDORMUQleDFI7G9oiFdUiheDyBRih6CZdCEyyCBCZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBlkEFEFnOh1uUxIBhH9hobgIlMuF5oEZ8ggop/EaLGf6cumT5qmwlEUkUFEP4l7d3h674dM3zL92nQonCCDiH7SKj3fyTTNdAWcoFNuRb/ptLntSDjBSwRhJ0/nh/vG5S5QLwZZYtoInSUuKsaLQWaYFqF9owZFE5+4iyJeDDLPdLnpvwhRRMYQleCpk84ostR0puldppMRrl+3/hF9w9so1hzT/aZlpmNNu0ND1aKPeCtcjBZxREtRQ/QdbxFEnXNRKWqeCJFBBhEigwwiRAaPJ0zJ1KIyPBW2OIuu5SaiMjyNYvFaeQzCh03TEeZAdDNr0Ve8GISR7iLTlaa9oGaWqAgvBe0Y0yWmPdFuagGKHt5wN3/lJYK8xzSleK5mlX/cGMWLQQ5AuFY1rfzjKop43HKr6OGPsik2wwmqkUU/iZvbWKkNoz1EPxNO0E0bRD+J0Z4mWYmwTeFm0zVwggwi+klsWtEc3zHda3oAjpBBRL+hSdYhRI5n4KyTrj6IqIp0/soNMoioGkUQIZqCDCJEBhlEiAwyiBAZZBAhMsggQmSQQYTIIIMIkcGjQXRXRVEZXgyyCqOPPZBJRCV4McifTcuhW/6IivFikH+ZfoD29bpc+Cb84WW5+wbTTxBM8THTYQhHCuvuJqKveIkgNMILpqsRbgF0Kdr9EiH6hqdRrLi3mde8AUJUgLdhXh3gKSpFE4VCZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBlkECEyyCBCZJBBhMgggwiRQQYRIoMMIkQGGUT0mkattpZBRC/g/QJ4MGdqjnS351rTGuh8EDGg8Gi1R00Titdx307c8flH0/NwuDVaBhG9gNufv2Gah9FRYovpHtN1xWt3EURnFIrtJRb62aaLTe83nYRwLuFdphmm+XDaN5FBRK9Yj/YptpMQWicvmTbCccddBhG9hB31tYXICJyPaskgotc06lZM6qQLkUEGESKDDCJEBvVBRK9poT0hqE66EAmcSZ9o2s20CWHol48a5hUDD++2f4rpfaajEYZ8OYt+h+mJ4rWoAIbvC00rEBI9rvuJa3+op02HQMciVEFM47eY7kOIGFsKrUYwyBQ4zQt10sX2woppV9NXTdMw+pCjnU3nmj6VvOcKGURsLyz0pyGsvxrG6E46+yRsxp9v2hcOkUFEL9gdo6NDq/Sanfad4RAZRPSCBQj9wfLwbhy9WmJaCW2YEgMICz1X8N6Oduc8vk/xNLAbEXYUuuuDaJhX9AKa4hrTa03TTXsi9EeWmX5n+im0H0QMONwU9WnT2abDEfaB3G+ag7B5yiUyiOgFMTosNv0SYTad77mfHJRBRC+JRtmIhqBOuhAZZBAhMsggQmSQQYTIIIOIXlJeYlJ+7Q4ZRPQKGiGOYnGi8DXQjkIhXobmYGX7NtPnTFMR5kD+arrJNBeiMrRhqp5wJ+FzCMtO0rx4xHQCtGFKDCgs+AchbJjap3hvJHl8vemLcIoMInrBcaZDEQyRdszjIzdT7QvtKBQDyv4YW5bSvSHssO8Kh8ggotc0qt8ngwiRQQYRIoMMIkQGGUSIDDKIEBlkECEyyCBCZPBqEBlbVILXgqZFiL6Iq33doZpYiAwyiBAZZBAhMsggQmSQQYTIIIMIkUEGESKDDCJEBhlEiAwyiBAZmmqQVpfnore4v7Xo1miqQXYyTS4eZZD+wbTlEc9M64loYFo37daj8f6wPLf7+6a7EA6R5Cmsw8VnXN8rtgZEE/A2Pmea3m06xzQJDaxwm2aQWPh5aP0009Gm802zEQ6U/A/Cmd6r0TaMGB8sK3sgHNDJtH2r6XiEk22Z3rFyalQUaWIEIcwo1mYM/zQJb395cfF3nttNg2yGosl4YVrSBLwBXGqAkeTvjTMHaerd3WNtFjMuvVcs+yV7Q2wraaXS6TajjaLJxx+kGaeOeu8YqLTUPIgQGWQQURUu+3tem1gj4/x7fEybW43sTFZAmpa59M191x1eDdJtiDbNMJ50NFT6TmoOmeSVkZpiCGPTdmsjWYogNYCZw8ziUO7PEOY/TkUYr+fkISe3OKEVZ31lkvERj1Tj0Pi6QktN95keMl1iOhEa5q0NudqImUQD0BCcSb/ZdADCmYUHIpx0tEvxGTE+mN6bTC+alpueNS00rTKdgpDWMbKUcW0arwZhDba1mXDO9J5uut20BKHGI5oc3D7SAs+I/E7Twcj379jc3QRRCcwANptY4ONseCoahxmy0XQbQsSYADWpekVMR0aLN5seRkjv9LTh8qnDDyJEGVEBzJwpCGuqYgaMoHPmrDV9Nvme6A2scLj05Aa0K6RO+RDfvwOiMljQmTkz0c6cbjUX//YMwgH38bti+2DkYB/ucoQoHU1QNkjs1PPxSiiCV0ZMaJ7Lnau9YqYxk7iS94LiexMgtgUaI+7/oDnigs9uUTy+z77HORCVwozi0C1HVbbWzIomWWH6CsKIFk0SMzz9n9LYmj6+ZtSearqpSM/NSRrnIvicIs1dRg+vtSkLN2swLmU/Nnm/nAmt5PNcxXuW6Q3Fa2beGoRmQpz48lJ4qzIIy8c+RRp/0PRd0xnF38czMcjRxutNs+B0/41LVxdwHuM8048Q5jfib+n0m0ZKz9ebHjM9aXoEYWx/PTQETGLhZz+Dc0dHIFREUxDSfKj02ZQ0/WgIGoOTiI9DBqkcXjuHDq81fRTtoVxgfCaJE1uMILEtLQLRJDQE58riUpLyZ8rENObnnzNdZroVjjeneV5qwgRnH+Qq034Ie6NztJLvDSXPYyFQ9GhTrmhY+WxtkWe6VoufuwHOzdEEYnv5OIT95lvQfdhR6p/STjkf7zTthbEDIWIHcrZpLtqjVjHjPBU0r8aIw7lM91tMx6Ahw+lNmhNYgNDhnlyoU+2l2qw3jHR4vtL0c4T5qacQool7mjZp9rTp9wjL3TmyxU58NEqaqTLKtlE2BsXlPH83XWO6GmGF73Dps25pYkHhb2LHmxOJnMHlfbFOQLtjHs0ik7wyYprFgs85pL8hVEizECJ441bsNrmQxPticSk212KdZJpuOgrt0TuZZHxEczBacPUuI8bdCH0+7g3ZkHyuUfwfh/SKqT1n13AAAAAASUVORK5CYII=",hY="/assets/Fashion-71a7f00e.png",pY="/assets/Computer-be5aa3f3.png",gY="/assets/Food (1)-e1af81f4.png",mY=()=>y(vY,{children:[s(rt,{}),y(yY,{children:[y(Lu,{to:"/seller-dashboard/uploading",children:[s(ju,{src:fY}),s("span",{children:"Mobiles"})]}),y(Lu,{to:"/seller-dashboard/upload-cloths",children:[s(ju,{src:hY}),s("span",{children:"Clothings"})]}),y(Lu,{to:"/seller-dashboard/upload-electronics",children:[s(ju,{src:pY}),s("span",{children:"Electronics"})]}),y(Lu,{to:"/seller-dashboard/upload-foods",children:[s(ju,{src:gY}),s("span",{children:"Foods And Groceries"})]})]})]}),ju=f.img`

`,Lu=f(ke)`
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
`,yY=f.div`
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
`,vY=f.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`,xY=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(""),[c,h]=C.useState(""),[g,b]=C.useState(""),[v,w]=C.useState(""),[$,m]=C.useState(""),[p,x]=C.useState(""),[S,P]=C.useState(""),[_,T]=C.useState(),[R,W]=C.useState("phone"),[z,ie]=C.useState(!1),M=nt(),j=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);t(U),l(E)},J=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);r(U),d(E)},F=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);o(U),h(E)},X=$t({mutationFn:KF,onSuccess:()=>{M("/seller-dashboard/variation")},onError:N=>{alert(N.message)}}),te=JSON.parse(localStorage.getItem("user"));return y(OY,{children:[s(rt,{}),y(PY,{onSubmit:N=>{N.preventDefault();const E=te._id;(g.length==0||$.length==0||v.length==0||S.length==0||p.length==0||!_||a.length==0||u.length==0)&&(ie(!0),alert("All inputs most be filed "));const U=new FormData;U.append("name",g),U.append("ram",$),U.append("condition",p),U.append("brand",v),U.append("description",S),U.append("category",R),U.append("price",_),c&&U.append("avatar",a),u&&U.append("avatar",u),c&&U.append("avatar",c),X.mutate({id:E,formData:U})},children:[y(CY,{children:[s("span",{children:"Upload Product Image *"}),y(SY,{children:[y(z0,{style:z?{border:"1px solid red"}:null,children:[a?null:s(j0,{fontSize:"25px"}),s(M0,{type:"file",onChange:j}),a?s(L0,{src:e}):null]}),y(z0,{style:z?{border:"1px solid red"}:null,children:[u?null:s(j0,{fontSize:"25px"}),s(M0,{type:"file",onChange:J}),u?s(L0,{src:n}):null]}),y(z0,{children:[c?null:s(j0,{fontSize:"25px"}),s(M0,{type:"file",onChange:F}),c?s(L0,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),y(wY,{children:[y(Oo,{children:[s(ko,{children:"Name*"}),y(_o,{children:[s("input",{placeholder:"name",value:g,onChange:N=>b(N.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),y(Oo,{children:[s(ko,{children:"Brand*"}),y(_o,{children:[s("input",{placeholder:"brand",value:v,onChange:N=>w(N.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),y(Oo,{children:[s(ko,{children:"RAM*"}),y(_o,{children:[s("input",{placeholder:"RAM",value:$,onChange:N=>m(N.target.value)}),s("span",{children:"kindly specify RAM of product"})]})]}),y(Oo,{children:[s(ko,{children:"Price*"}),y(_o,{children:[s("input",{placeholder:"price",type:"number",value:_,onChange:N=>T(N.target.value)}),s("span",{children:"kindly specify RAM of product"})]})]}),y(Oo,{children:[s(ko,{children:"Condition*"}),y(_o,{children:[y("select",{placeholder:"Select condition",value:p,onChange:N=>x(N.target.value),children:[s("option",{children:"Select Condition"}),s("option",{children:"New"}),s("option",{children:"Used"})]}),s("span",{children:"kindly specify condition of product"})]})]}),y(Oo,{children:[s(ko,{children:"Description*"}),y(_o,{children:[s("textarea",{placeholder:"description",value:S,onChange:N=>P(N.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s($Y,{children:s(bY,{type:"submit",disabled:X.status==="loading",children:X.status==="loading"?"Loading...":"Enter Product Variation"})})]})]})},M0=f.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,j0=f(Rf)`
  font-size: 25px;
  position: absolute;
`,L0=f.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,bY=f.button`
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
`,$Y=f.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,Oo=f.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,_o=f.div`
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
`,ko=f.div`
  font-size: 15px;
  font-weight: 500;
`,wY=f.div`
  width: 100%;
`,SY=f.div`
  display: flex;
  padding: 10px 0;
`,z0=f.label`
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
`,CY=f.div`
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
`,PY=f.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,OY=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,_Y=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(!0),c=nt(),h=JSON.parse(localStorage.getItem("product")),g=$t({mutationFn:eD,onSuccess:()=>{c("/seller-dashboard/success")},onError:v=>{console.log(v.message),alert(v.message)}});return y(AY,{children:[s(rt,{}),y(TY,{onSubmit:v=>{v.preventDefault();const w=h._id;g.mutate({id:w,tag_No:e,quantity:n,startDate:i,endDate:a,active:u})},children:[s(kY,{children:"Product Variation"}),y(IY,{children:[y(zu,{children:[s(Bu,{children:"TAG No.*"}),y(Uu,{children:[s("input",{placeholder:"C1000",value:e,onChange:v=>t(v.target.value)}),s("span",{children:"kindly a unique number"})]})]}),y(zu,{children:[s(Bu,{children:"Qty*"}),s(Uu,{children:s("input",{placeholder:"2",type:"number",value:n,onChange:v=>r(v.target.value)})})]}),y(zu,{children:[s(Bu,{children:"start date*"}),s(Uu,{children:s("input",{placeholder:"11/01/23",type:"date",value:i,onChange:v=>o(v.target.value)})})]}),y(zu,{children:[s(Bu,{children:"End date*"}),s(Uu,{children:s("input",{placeholder:"26/09/23",type:"date",value:a,onChange:v=>l(v.target.value)})})]})]}),s(EY,{children:s(NY,{type:"submit",disabled:g.status==="loading",children:g.status==="loading"?"Loading...":"Upload"})})]})]})},kY=f.div`
  padding: 7px 15px;
  font-size: 12px;
  font-weight: 500;
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
`,zu=f.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,Uu=f.div`
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
`,Bu=f.div`
  font-size: 15px;
  font-weight: 500;
`,IY=f.div`
  width: 100%;
`,TY=f.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,AY=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,RY=()=>s(FY,{children:y(DY,{children:[s(MY,{children:s(Ml,{fontSize:"50px",color:"green"})}),y(LY,{children:["You have successfully",s("br",{})," uploaded an item, your ",s("br",{})," product will be approved soon."]}),s(jY,{to:"/seller-dashboard",children:s("button",{children:"Dashboard"})})]})}),FY=f.div`
  width: 100%;
  height: 42vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`,DY=f.div`
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
`,MY=f.div``,jY=f(af)`
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
`,LY=f.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,zY=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="delivered"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[g,b]=C.useState(""),v=["order_No","delivery_status"],$=(p=>{const x=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?x!=null&&x.length?x:null:p})(c);var m=Intl.NumberFormat();return y(BY,{children:[s(rt,{}),s(HY,{children:s(WY,{children:"Delivered"})}),s(UY,{children:y(VY,{children:[y(YY,{children:[s(Eo,{children:s(No,{children:"Order Number "})}),s(Eo,{children:s(No,{children:"Pending Days"})}),s(Eo,{children:s(No,{children:"Order Date"})}),s(Eo,{children:s(No,{children:"Price"})}),s(Eo,{children:s(No,{children:"Payment Method"})}),s(Eo,{children:s(No,{children:"Status "})})]}),$==null?void 0:$.map((p,x)=>s(Fr,{index:x,delivery_status:p.delivery_status,order_No:p.order_No,created:ee(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:m.format(p.price)},x))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};f.div`
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
`;const UY=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,BY=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,HY=f.div`
width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,WY=f.div`
  border-bottom: 2px solid blue;
`,No=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Eo=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,YY=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,VY=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,qY=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="cancelled"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[g,b]=C.useState(""),v=["order_No","delivery_status"],$=(p=>{const x=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?x!=null&&x.length?x:null:p})(c);var m=Intl.NumberFormat();return y(QY,{children:[s(rt,{}),s(KY,{children:s(ZY,{children:"Cancelled"})}),s(GY,{children:y(XY,{children:[y(JY,{children:[s(To,{children:s(Io,{children:"Order Number "})}),s(To,{children:s(Io,{children:"Pending Days"})}),s(To,{children:s(Io,{children:"Order Date"})}),s(To,{children:s(Io,{children:"Price"})}),s(To,{children:s(Io,{children:"Payment Method"})}),s(To,{children:s(Io,{children:"Status "})})]}),$==null?void 0:$.map((p,x)=>s(Fr,{index:x,delivery_status:p.delivery_status,order_No:p.order_No,created:ee(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:m.format(p.price)},x))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};f.div`
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
`;const GY=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,QY=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,KY=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,ZY=f.div`
  border-bottom: 2px solid blue;
`,Io=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,To=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,JY=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,XY=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,eV=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="failed"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[g,b]=C.useState(""),v=["order_No","delivery_status"],$=(p=>{const x=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?x!=null&&x.length?x:null:p})(c);var m=Intl.NumberFormat();return y(nV,{children:[s(rt,{}),s(rV,{children:s(iV,{children:"Failed"})}),s(tV,{children:y(aV,{children:[y(oV,{children:[s(Ro,{children:s(Ao,{children:"Order Number "})}),s(Ro,{children:s(Ao,{children:"Pending Days"})}),s(Ro,{children:s(Ao,{children:"Order Date"})}),s(Ro,{children:s(Ao,{children:"Price"})}),s(Ro,{children:s(Ao,{children:"Payment Method"})}),s(Ro,{children:s(Ao,{children:"Status "})})]}),$==null?void 0:$.map((p,x)=>s(Fr,{index:x,delivery_status:p.delivery_status,order_No:p.order_No,created:ee(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:m.format(p.price)},x))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};f.div`
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
`;const tV=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,nV=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,rV=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,iV=f.div`
  border-bottom: 2px solid blue;
`,Ao=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Ro=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,oV=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,aV=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,sV=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var S;return((S=p==null?void 0:p.products)==null?void 0:S.filter(P=>P.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="returned"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),c=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[g,b]=C.useState(""),v=["order_No","delivery_status"],$=(p=>{const x=p==null?void 0:p.filter(S=>v.some(P=>{const _=S[P];return typeof _=="string"&&_.toLowerCase().includes(g)}));return g?x!=null&&x.length?x:null:p})(c);var m=Intl.NumberFormat();return y(uV,{children:[s(rt,{}),s(dV,{children:s(cV,{children:"Returned"})}),s(lV,{children:y(hV,{children:[y(fV,{children:[s(Do,{children:s(Fo,{children:"Order Number "})}),s(Do,{children:s(Fo,{children:"Pending Days"})}),s(Do,{children:s(Fo,{children:"Order Date"})}),s(Do,{children:s(Fo,{children:"Price"})}),s(Do,{children:s(Fo,{children:"Payment Method"})}),s(Do,{children:s(Fo,{children:"Status "})})]}),$==null?void 0:$.map((p,x)=>s(Fr,{index:x,delivery_status:p.delivery_status,order_No:p.order_No,created:ee(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,price:m.format(p.price)},x))]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};f.div`
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
`;const lV=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,uV=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,dV=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,cV=f.div`
  border-bottom: 2px solid blue;
`,Fo=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Do=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,fV=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,hV=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,pV=()=>{const[e,t]=C.useState(),[n,r]=C.useState(),[i,o]=C.useState(),[a,l]=C.useState(""),[u,d]=C.useState(""),[c,h]=C.useState(""),[g,b]=C.useState(""),[v,w]=C.useState(""),[$,m]=C.useState(""),[p,x]=C.useState(""),[S,P]=C.useState(""),[_,T]=C.useState(),[R,W]=C.useState(!1),[z,ie]=C.useState("clothing"),M=nt(),j=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);t(U),l(E)},J=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);r(U),d(E)},F=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);o(U),h(E)},X=$t({mutationFn:ZF,onSuccess:()=>{M("/seller-dashboard/variation")},onError:N=>{console.log(N.message)}}),te=JSON.parse(localStorage.getItem("user"));return console.log(g.length),y($V,{children:[s(rt,{}),y(bV,{onSubmit:N=>{N.preventDefault();const E=te._id;(g.length==0||$.length==0||p.length==0||v.length==0||S.length==0||!_||a.length==0||u.length==0)&&(W(!0),alert("All inputs most be filed "));const U=new FormData;U.append("name",g),U.append("type",$),U.append("gender",p),U.append("brand",v),U.append("description",S),U.append("price",_),U.append("category",z),a&&U.append("avatar",a),u&&U.append("avatar",u),c&&U.append("avatar",c),X.mutate({id:E,formData:U})},children:[y(xV,{children:[s("span",{children:"Upload Product Image *"}),y(vV,{children:[y(W0,{style:R?{border:"1px solid red"}:null,children:[a?null:s(B0,{fontSize:"25px"}),s(U0,{type:"file",onChange:j}),a?s(H0,{src:e}):null]}),y(W0,{style:R?{border:"1px solid red"}:null,children:[u?null:s(B0,{fontSize:"25px"}),s(U0,{type:"file",onChange:J}),u?s(H0,{src:n}):null]}),y(W0,{children:[c?null:s(B0,{fontSize:"25px"}),s(U0,{type:"file",onChange:F}),c?s(H0,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),y(yV,{children:[y(Mo,{children:[s(Lo,{children:"Name*"}),y(jo,{children:[s("input",{placeholder:"name",value:g,onChange:N=>b(N.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),y(Mo,{children:[s(Lo,{children:"Brand*"}),y(jo,{children:[s("input",{placeholder:"brand",value:v,onChange:N=>w(N.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),y(Mo,{children:[s(Lo,{children:"Type*"}),y(jo,{children:[s("input",{placeholder:"type",value:$,onChange:N=>m(N.target.value)}),s("span",{children:"kindly specify type of product"})]})]}),y(Mo,{children:[s(Lo,{children:"Gender*"}),y(jo,{children:[y("select",{placeholder:"Select condition",value:p,onChange:N=>x(N.target.value),children:[s("option",{children:"Select Gender"}),s("option",{children:"Male"}),s("option",{children:"Female"})]}),s("span",{children:"kindly specify gender of product"})]})]}),y(Mo,{children:[s(Lo,{children:"Price*"}),y(jo,{children:[s("input",{placeholder:"Price",value:_,onChange:N=>T(N.target.value)}),s("span",{children:"kindly specify price of product"})]})]}),y(Mo,{children:[s(Lo,{children:"Description*"}),y(jo,{children:[s("textarea",{placeholder:"description",value:S,onChange:N=>P(N.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s(mV,{children:s(gV,{type:"submit",disabled:X.status==="loading",children:X.status==="loading"?"Loading...":"Enter Product Variation"})})]})]})},U0=f.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,B0=f(Rf)`
  font-size: 25px;
  position: absolute;
`,H0=f.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,gV=f.button`
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
`,mV=f.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,Mo=f.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,jo=f.div`
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
`,Lo=f.div`
  font-size: 15px;
  font-weight: 500;
`,yV=f.div`
  width: 100%;
`,vV=f.div`
  display: flex;
  padding: 10px 0;
`,W0=f.label`
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
`,xV=f.div`
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
`,bV=f.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,$V=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,wV=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(""),[c,h]=C.useState(""),[g,b]=C.useState(""),[v,w]=C.useState(""),[$,m]=C.useState(""),[p,x]=C.useState(""),[S,P]=C.useState(""),[_,T]=C.useState(),[R,W]=C.useState("electronics"),[z,ie]=C.useState(!1),M=nt(),j=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);t(U),l(E)},J=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);r(U),d(E)},F=N=>{const E=N.target.files[0],U=URL.createObjectURL(E);o(U),h(E)},X=$t({mutationFn:JF,onSuccess:()=>{M("/seller-dashboard/variation")},onError:N=>{console.log(N.message)}}),te=JSON.parse(localStorage.getItem("user"));return y(NV,{children:[s(rt,{}),y(kV,{onSubmit:N=>{N.preventDefault();const E=te._id;(g.length==0||$.length==0||p.length==0||v.length==0||S.length==0||!_||a.length==0||u.length==0)&&(ie(!0),alert("All inputs most be filed "));const U=new FormData;U.append("name",g),U.append("model",$),U.append("condition",p),U.append("brand",v),U.append("description",S),U.append("price",_),U.append("category",R),a&&U.append("avatar",a),u&&U.append("avatar",u),c&&U.append("avatar",c),X.mutate({id:E,formData:U})},children:[y(_V,{children:[s("span",{children:"Upload Product Image *"}),y(OV,{children:[y(G0,{style:z?{border:"1px solid red"}:null,children:[a?null:s(V0,{fontSize:"25px"}),s(Y0,{type:"file",onChange:j}),a?s(q0,{src:e}):null]}),y(G0,{style:z?{border:"1px solid red"}:null,children:[u?null:s(V0,{fontSize:"25px"}),s(Y0,{type:"file",onChange:J}),u?s(q0,{src:n}):null]}),y(G0,{children:[c?null:s(V0,{fontSize:"25px"}),s(Y0,{type:"file",onChange:F}),c?s(q0,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),y(PV,{children:[y(zo,{children:[s(Bo,{children:"Name*"}),y(Uo,{children:[s("input",{placeholder:"name",value:g,onChange:N=>b(N.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),y(zo,{children:[s(Bo,{children:"Brand*"}),y(Uo,{children:[s("input",{placeholder:"brand",value:v,onChange:N=>w(N.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),y(zo,{children:[s(Bo,{children:"Model*"}),y(Uo,{children:[s("input",{placeholder:"type",value:$,onChange:N=>m(N.target.value)}),s("span",{children:"kindly specify type of product"})]})]}),y(zo,{children:[s(Bo,{children:"Condition*"}),y(Uo,{children:[y("select",{placeholder:"Select condition",value:p,onChange:N=>x(N.target.value),children:[s("option",{children:"Select Condition"}),s("option",{children:"New"}),s("option",{children:"Used"})]}),s("span",{children:"kindly specify condition of product"})]})]}),y(zo,{children:[s(Bo,{children:"Price*"}),y(Uo,{children:[s("input",{placeholder:"Price",value:_,onChange:N=>T(N.target.value)}),s("span",{children:"kindly specify price of product"})]})]}),y(zo,{children:[s(Bo,{children:"Description*"}),y(Uo,{children:[s("textarea",{placeholder:"description",value:S,onChange:N=>P(N.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s(CV,{children:s(SV,{type:"submit",disabled:X.status==="loading",children:X.status==="loading"?"Loading...":"Enter Product Variation"})})]})]})},Y0=f.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,V0=f(Rf)`
  font-size: 25px;
  position: absolute;
`,q0=f.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,SV=f.button`
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
`,CV=f.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,zo=f.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,Uo=f.div`
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
`,Bo=f.div`
  font-size: 15px;
  font-weight: 500;
`,PV=f.div`
  width: 100%;
`,OV=f.div`
  display: flex;
  padding: 10px 0;
`,G0=f.label`
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
`,_V=f.div`
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
`,kV=f.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,NV=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,EV=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(""),[c,h]=C.useState(""),[g,b]=C.useState(""),[v,w]=C.useState(""),[$,m]=C.useState(""),[p,x]=C.useState(),[S,P]=C.useState("food"),[_,T]=C.useState(!1),R=nt(),W=F=>{const X=F.target.files[0],te=URL.createObjectURL(X);t(te),l(X)},z=F=>{const X=F.target.files[0],te=URL.createObjectURL(X);r(te),d(X)},ie=F=>{const X=F.target.files[0],te=URL.createObjectURL(X);o(te),h(X)},M=$t({mutationFn:XF,onSuccess:()=>{R("/seller-dashboard/variation")},onError:F=>{console.log(F.message)}}),j=JSON.parse(localStorage.getItem("user"));return y(MV,{children:[s(rt,{}),y(DV,{onSubmit:F=>{F.preventDefault();const X=j._id;(g.length==0||v.length==0||$.length==0||!p||a.length==0||u.length==0)&&(T(!0),alert("All inputs most be filed "));const te=new FormData;te.append("name",g),te.append("brand",v),te.append("description",$),te.append("price",p),te.append("category",S),a&&te.append("avatar",a),u&&te.append("avatar",u),c&&te.append("avatar",c),M.mutate({id:X,formData:te})},children:[y(FV,{children:[s("span",{children:"Upload Product Image *"}),y(RV,{children:[y(J0,{style:_?{border:"1px solid red"}:null,children:[a?null:s(K0,{fontSize:"25px"}),s(Q0,{type:"file",onChange:W}),a?s(Z0,{src:e}):null]}),y(J0,{style:_?{border:"1px solid red"}:null,children:[u?null:s(K0,{fontSize:"25px"}),s(Q0,{type:"file",onChange:z}),u?s(Z0,{src:n}):null]}),y(J0,{children:[c?null:s(K0,{fontSize:"25px"}),s(Q0,{type:"file",onChange:ie}),c?s(Z0,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),y(AV,{children:[y(Hu,{children:[s(Yu,{children:"Name*"}),y(Wu,{children:[s("input",{placeholder:"name",value:g,onChange:F=>b(F.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),y(Hu,{children:[s(Yu,{children:"Brand*"}),y(Wu,{children:[s("input",{placeholder:"brand",value:v,onChange:F=>w(F.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),y(Hu,{children:[s(Yu,{children:"Price*"}),y(Wu,{children:[s("input",{placeholder:"Price",value:p,onChange:F=>x(F.target.value)}),s("span",{children:"kindly specify price of product"})]})]}),y(Hu,{children:[s(Yu,{children:"Description*"}),y(Wu,{children:[s("textarea",{placeholder:"description",value:$,onChange:F=>m(F.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s(TV,{children:s(IV,{type:"submit",disabled:M.status==="loading",children:M.status==="loading"?"Loading...":"Enter Product Variation"})})]})]})},Q0=f.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,K0=f(Rf)`
  font-size: 25px;
  position: absolute;
`,Z0=f.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,IV=f.button`
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
`,TV=f.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,Hu=f.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,Wu=f.div`
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
`,Yu=f.div`
  font-size: 15px;
  font-weight: 500;
`,AV=f.div`
  width: 100%;
`,RV=f.div`
  display: flex;
  padding: 10px 0;
`,J0=f.label`
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
`,FV=f.div`
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
`,DV=f.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,MV=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,jV=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(m=>{var x;return((x=m==null?void 0:m.products)==null?void 0:x.filter(S=>S.sellerID===t)).length>0}),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),c=({selected:m})=>{o(m)},[h,g]=C.useState(""),b=["order_No","delivery_status"],v=m=>{const p=m==null?void 0:m.filter(x=>b.some(S=>{const P=x[S];return typeof P=="string"&&P.toLowerCase().includes(h)}));return h?p!=null&&p.length?p:null:m},w=v(d);var $=Intl.NumberFormat();return y(UV,{children:[s(rt,{}),y(zV,{children:[y(BV,{children:[s(HV,{children:"Transactions"}),y(LV,{children:[s("input",{placeholder:"Search by name or brand",value:h,onChange:m=>g(m.target.value)}),s("button",{onClick:v,children:s(Qa,{})})]})]}),y(YV,{children:[y(WV,{children:[s(zi,{children:s(Li,{children:"Date"})}),s(zi,{children:s(Li,{children:"Tag"})}),s(zi,{children:s(Li,{children:"Product"})}),s(zi,{children:s(Li,{children:"Price"})}),s(zi,{children:s(Li,{children:"QTY"})}),s(zi,{children:s(Li,{children:"Amount "})}),s(zi,{children:s(Li,{children:"Action "})})]}),w==null?void 0:w.map((m,p)=>s(Fr,{index:p,delivery_status:m.delivery_status,order_No:m.order_No,created:ee(m.createdAt).format("D MMM YYYY"),payment_method:m.payment_method,pending_days:m.pending_days,price:$.format(m.price)},p))]})]}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:c,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})},LV=f.div`
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
`,zV=f.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,UV=f.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,BV=f.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,HV=f.div`
  border-bottom: 2px solid blue;
`,Li=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,zi=f.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,WV=f.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,YV=f.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,VV=()=>s(ZV,{children:y(KV,{children:[y(QV,{children:[s("img",{src:"/Frame 113.png"}),s("span",{children:"Manel"})]}),y(qV,{children:[s(GV,{children:"Account Info"}),y(ep,{children:[y("span",{children:[" ",s(wj,{fontSize:"18px"})]}),s(X0,{children:"Manel"})]}),y(ep,{children:[y("span",{children:[" ",s(xj,{fontSize:"18px"})]}),s(X0,{children:"Manel@test.com"})]}),y(ep,{children:[y("span",{children:[" ",s($j,{fontSize:"18px"})]}),s(X0,{children:"09012075964"})]})]})]})}),X0=f.div`
  cursor: pointer;
  margin-bottom: 8px;
`,ep=f.div`
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
`,qV=f.div`
  font-weight: 500;
  font-size: 14px;
  margin-left: 18px;
`,GV=f.div`
  padding: 7px 0;
`,QV=f.div`
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
`,KV=f.div`
  width: 99%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,ZV=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,JV=()=>s(tq,{children:y(eq,{children:[s(XV,{children:"Settings"}),s(VV,{})]})}),XV=f.div`
  font-size: 15px;
  font-weight: 700;
  padding: 8px 0;
`,eq=f.div`
  width: 95%;
`,tq=f.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,nq=()=>{const[e,t]=C.useState();return s(oq,{children:y(lq,{children:[s(sq,{children:s(aq,{children:" Personal Details"})}),y(uq,{children:[s(rq,{children:y(rp,{children:[s(np,{children:"First Name"}),s(tp,{children:s(Kx,{placeholder:"First Name"})})]})}),y(iq,{children:[y(rp,{children:[s(np,{children:"Last Name"}),s(tp,{children:s(Kx,{placeholder:"Last Name"})})]}),y(rp,{children:[s(np,{children:"Country"}),s(tp,{children:s(Cm,{className:"phone",defaultCountry:"NG",placeholder:"Country",value:e,onChange:t})})]})]})]})]})})},rq=f.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,iq=f.div`
  flex-direction: column;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`,oq=f.div`
  /* background-color: #1e1b1b; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 20px; */
`,aq=f.div`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  /* margin-bottom: 20px; */
  /* border-bottom: 1.9px solid grey; */
  padding: 0 24px;
`,sq=f.div`
  width: 100%;
  border-bottom: 1.9px solid grey;
  padding: 4px 0;
  display: flex;
  align-items: center;
  /* background-color: red; */
  justify-content: flex-start;
`,lq=f.div`
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
`;const tp=f.div`
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
`,Kx=f.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,np=f.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,rp=f.div`
    margin-bottom: 10px;
`,uq=f.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,dq=()=>(C.useState(),s(hq,{children:y(mq,{children:[s(gq,{children:s(pq,{children:" Change Password"})}),y(vq,{children:[y(cq,{children:[y(sp,{children:[s(ap,{children:"Current Password"}),s(ip,{children:s(op,{placeholder:"Current Password"})})]}),y(sp,{children:[s(ap,{children:"New Password"}),s(ip,{children:s(op,{placeholder:"New Password"})})]})]}),y(fq,{children:[y(sp,{children:[s(ap,{children:"Confirm New Password"}),s(ip,{children:s(op,{placeholder:"Confirm New Password"})})]}),s(yq,{children:"Save Password"})]})]})]})})),cq=f.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,fq=f.div`
  flex-direction: column;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`,hq=f.div`
  /* background-color: #1e1b1b; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 20px; */
`,pq=f.div`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  /* margin-bottom: 20px; */
  /* border-bottom: 1.9px solid grey; */
  padding: 0 24px;
`,gq=f.div`
  width: 100%;
  border-bottom: 1.9px solid grey;
  padding: 4px 0;
  display: flex;
  align-items: center;
  /* background-color: red; */
  justify-content: flex-start;
`,mq=f.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
  flex-wrap: wrap;
`,yq=f.button`
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
`;const ip=f.div`
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
`,op=f.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,ap=f.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,sp=f.div`
    margin-bottom: 10px;
`,vq=f.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,xq=()=>s("div",{children:y(bq,{children:[s(rt,{}),s(JV,{}),s(nq,{}),s(dq,{})]})}),bq=f.div`
  width: 100%;
  /* background-color: gold; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,$q=()=>ym([{path:"/",children:[{index:!0,element:s(Ve,{children:s(WL,{})})},{path:"all-product",element:s(Ve,{children:s(rW,{})})},{path:"live-product",element:s(Ve,{children:s(cW,{})})},{path:"sold-product",element:s(Ve,{children:s(xW,{})})},{path:"rejected-product",element:s(Ve,{children:s(_W,{})})},{path:"all-orders",element:s(Ve,{children:s(jW,{})})},{path:"pending-orders",element:s(Ve,{children:s(YW,{})})},{path:"ready-to-ship",element:s(Ve,{children:s(JW,{})})},{path:"transactions",element:s(Ve,{children:s(jV,{})})},{path:"shipped",element:s(Ve,{children:s(oY,{})})},{path:"uploads",element:s(Ve,{children:s(mY,{})})},{path:"uploading",element:s(Ve,{children:s(xY,{})})},{path:"upload-cloths",element:s(Ve,{children:s(pV,{})})},{path:"upload-electronics",element:s(Ve,{children:s(wV,{})})},{path:"upload-foods",element:s(Ve,{children:s(EV,{})})},{path:"variation",element:s(Ve,{children:s(_Y,{})})},{path:"success",element:s(Ve,{children:s(RY,{})})},{path:"delivered-orders",element:s(Ve,{children:s(zY,{})})},{path:"cancelled-orders",element:s(Ve,{children:s(qY,{})})},{path:"failed-orders",element:s(Ve,{children:s(eV,{})})},{path:"returned-orders",element:s(Ve,{children:s(sV,{})})},{path:"settings",element:s(Ve,{children:s(xq,{})})}]}]),wq=()=>{C.useState(!1),C.useState(!1);const[e,t]=C.useState(!1);return JSON.parse(localStorage.getItem("user")),C.useRef(),console.log(e),s("div",{children:s(Sq,{children:y(Cq,{children:[y(Pq,{children:[s("img",{src:"/logo 1.png"}),s("div",{children:"Cross Africa"})]}),s(Oq,{to:"/seller-dashboard",children:"Dashboard"})]})})})},Sq=f.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #383333; */
  border-bottom: 1px solid lightgray;
`,Cq=f.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,Pq=f.div`
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
`,Oq=f(ke)`
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  color: black;
`,_q=()=>y("div",{children:[s(wq,{}),s($q,{})]}),kq=()=>{var b,v,w,$,m,p;const[e,t]=C.useState(),[n,r]=C.useState(!0),i=n!==!0,o=nt(),a=Bl({firstName:Ot().required("This field cannot be empty"),lastName:Ot().required("This field cannot be empty"),email:Ot().email("this is not a valid email").required("This field cannot be empty"),phoneNum:Dm().required("This field cannot be empty"),password:Ot().required("This field cannot be empty"),isAdmin:tw(),confirmPassword:Ot().oneOf([ew("password"),null],"Password must match")}).required(),{handleSubmit:l,formState:{errors:u},reset:d,register:c}=bf({resolver:$f(a)}),h=$t({mutationKey:["createUser"],mutationFn:fI,onSuccess:x=>{console.log(x),o("/otp-user")},onError:x=>{alert(x.message)}}),g=l(x=>{x.isAdmin=!1,h.mutate(x)});return s("div",{children:s(Fq,{children:y(Rq,{children:[s(Aq,{children:"Create Account"}),s(Tq,{children:"Please enter every necessary information"}),y(Iq,{onSubmit:g,children:[y(Vo,{children:[s(Yo,{children:"First Name"}),s(Wo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(Ss,{placeholder:"First Name",...c("firstName")})}),s(Ho,{children:(u==null?void 0:u.firstName)&&((b=u==null?void 0:u.firstName)==null?void 0:b.message)})]}),y(Vo,{children:[s(Yo,{children:"Last Name"}),s(Wo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(Ss,{placeholder:"Last Name",...c("lastName")})}),s(Ho,{children:(u==null?void 0:u.lastName)&&((v=u==null?void 0:u.lastName)==null?void 0:v.message)})]}),y(Vo,{children:[s(Yo,{children:"Email Address"}),s(Wo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(Ss,{placeholder:"Email Address",...c("email")})}),s(Ho,{children:(u==null?void 0:u.email)&&((w=u==null?void 0:u.email)==null?void 0:w.message)})]}),y(Vo,{children:[s(Yo,{children:"Phone Number"}),s(Wo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(Cm,{className:"phone",defaultCountry:"NG",...c("phoneNum"),placeholder:"Phone Number",value:e,onChange:t})}),s(Ho,{children:(u==null?void 0:u.phoneNum)&&(($=u==null?void 0:u.phoneNum)==null?void 0:$.message)})]}),y(Vo,{children:[s(Yo,{children:"Password"}),y(Wo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:[s(Ss,{placeholder:"Password",type:n?"password":"text",id:"pass",...c("password")}),s(Zx,{onClick:()=>{r(i)},children:n===!1?s(Ra,{}):s(Aa,{})})]}),s(Ho,{children:(u==null?void 0:u.password)&&((m=u==null?void 0:u.password)==null?void 0:m.message)})]}),y(Vo,{children:[s(Yo,{children:"Confirm Password"}),y(Wo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:[s(Ss,{placeholder:"Confirm Password",type:n?"password":"text",id:"pass",...c("confirmPassword")}),s(Zx,{onClick:()=>{r(i)},children:n===!1?s(Ra,{}):s(Aa,{})})]}),s(Ho,{children:(u==null?void 0:u.confirmPassword)&&((p=u==null?void 0:u.confirmPassword)==null?void 0:p.message)})]}),s(Eq,{type:"submit",disabled:h.status==="loading",children:h.status==="loading"?"Loading...":"Continue"}),y(Nq,{children:["Already have an account?"," ",s(ke,{to:"/login-user",style:{textDecoration:"none"},children:s("span",{children:"LogIn"})})]})]})]})})})};f.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    width: 90%;

    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`;const Nq=f.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,Eq=f.button`
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
`,Ho=f.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`,Zx=f.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,Wo=f.div`
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
`,Ss=f.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,Yo=f.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,Vo=f.div`
    margin-bottom: 10px;
`,Iq=f.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 370px){
        width: 350px;
    }
`,Tq=f.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 250px;
`,Aq=f.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
`,Rq=f.div`
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
`,Fq=f.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,Dq=()=>{var h,g;const e=nt(),t=Bl({email:Ot().email("this is not a valid email").required("This field cannot be empty"),password:Ot().required("This field cannot be empty")}).required(),[n,r]=C.useState(!0),i=n!==!0,{handleSubmit:o,formState:{errors:a},reset:l,register:u}=bf({resolver:$f(t)}),d=$t({mutationKey:["Admin"],mutationFn:hI,onSuccess:b=>{e("/")},onError:b=>{console.log(b.message)}}),c=o(b=>{d.mutate(b)});return s("div",{children:s(Yq,{children:y(Wq,{children:[s(Hq,{children:"Create Account"}),s(Bq,{children:"Please enter every necessary information"}),y(Uq,{onSubmit:c,children:[y(n4,{children:[s(t4,{children:"Email Address"}),s(Xx,{style:{border:`${a!=null&&a.email?"1px solid red":"1px solid lightgray"}`},children:s(e4,{placeholder:"Email Address",type:"email",...u("email")})}),s(Jx,{children:(a==null?void 0:a.email)&&((h=a==null?void 0:a.email)==null?void 0:h.message)})]}),y(n4,{children:[s(t4,{children:"Password"}),y(Xx,{style:{border:`${a!=null&&a.password?"1px solid red":"1px solid lightgray"}`},children:[s(e4,{placeholder:"Password",type:n?"password":"text",id:"pass",...u("password")}),s(zq,{onClick:()=>{r(i)},children:n===!1?s(Ra,{}):s(Aa,{})})]}),s(Jx,{children:(a==null?void 0:a.password)&&((g=a==null?void 0:a.password)==null?void 0:g.message)})]}),s(Mq,{children:"Forget Password?"}),s(Lq,{type:"submit",children:d.status==="loading"?"Loading...":"Log In"}),y(jq,{children:["Don't have an account? ",s(ke,{to:"/signup-user",style:{textDecoration:"none"},children:s("span",{children:"Sign Up"})})]})]})]})})})},Mq=f.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    width: 90%;

    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`,jq=f.div`
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
`,Jx=f.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`,zq=f.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,Xx=f.div`
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
`,e4=f.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,t4=f.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,n4=f.div`
    margin-bottom: 10px;
`,Uq=f.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 370px){
        width: 350px;
    }
`,Bq=f.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 250px;
`,Hq=f.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
`,Wq=f.div`
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
`,Yq=f.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,Vq=()=>{const e=nt(),[t,n]=C.useState(""),r=JSON.parse(localStorage.getItem("user")),i=$t({mutationFn:gI,onSuccess:()=>{e("/login-user")},onError:()=>{alert("Invalid OTP")}});return s(qq,{children:y(Gq,{children:[s(Qq,{children:"OTP Verification!"}),s(Zq,{children:"Please enter the OTP you received"}),s(Qw,{style:{border:"1px solid gold"},value:t,onChange:n,numInputs:6,renderSeparator:s("span",{children:" "}),renderInput:a=>s("input",{...a}),containerStyle:"containerStyle",inputStyle:"inputStyle",width:"70px"}),s(Kq,{children:s("button",{onClick:()=>{const a=r==null?void 0:r._id;i.mutate({id:a,otp:t})},children:"Enter"})})]})})},qq=f.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`,Gq=f.div`
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
`,Qq=f.div`
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
`,Kq=f.div`
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
`,Zq=f.div`
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

`;const Jq=()=>s("div",{children:y(BC,{children:[s(Hi,{path:"/*",element:s(IL,{})}),s(Hi,{path:"/signup-user",element:s(kq,{})}),s(Hi,{path:"/login-user",element:s(Dq,{})}),s(Hi,{path:"/otp-user",element:s(Vq,{})}),s(Hi,{path:"/seller-page",element:s(fP,{})}),s(Hi,{path:"/seller-dashboard/*",element:s(Ve,{children:s(_q,{})})})]})}),Xq="modulepreload",eG=function(e){return"/"+e},r4={},tG=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=eG(o),o in r4)return;r4[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const h=i[c];if(h.href===o&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":Xq,a||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),a)return new Promise((c,h)=>{d.addEventListener("load",c),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},nG=e=>{e&&e instanceof Function&&tG(()=>import("./web-vitals-60d3425a.js"),[]).then(({getCLS:t,getFID:n,getFCP:r,getLCP:i,getTTFB:o})=>{t(e),n(e),r(e),i(e),o(e)})},rG=function(){return null};var Sy="persist:",Cy="persist/FLUSH",Gf="persist/REHYDRATE",Py="persist/PAUSE",Oy="persist/PERSIST",_y="persist/PURGE",ky="persist/REGISTER",iG=-1;function yd(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?yd=function(n){return typeof n}:yd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},yd(e)}function i4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function oG(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?i4(n,!0).forEach(function(r){aG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i4(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function aG(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sG(e,t,n,r){r.debug;var i=oG({},n);return e&&yd(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function lG(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:Sy).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(P){return P}:typeof e.serialize=="function"?l=e.serialize:l=uG;var u=e.writeFailHandler||null,d={},c={},h=[],g=null,b=null,v=function(P){Object.keys(P).forEach(function(_){m(_)&&d[_]!==P[_]&&h.indexOf(_)===-1&&h.push(_)}),Object.keys(d).forEach(function(_){P[_]===void 0&&m(_)&&h.indexOf(_)===-1&&d[_]!==void 0&&h.push(_)}),g===null&&(g=setInterval(w,i)),d=P};function w(){if(h.length===0){g&&clearInterval(g),g=null;return}var S=h.shift(),P=r.reduce(function(_,T){return T.in(_,S,d)},d[S]);if(P!==void 0)try{c[S]=l(P)}catch(_){console.error("redux-persist/createPersistoid: error serializing state",_)}else delete c[S];h.length===0&&$()}function $(){Object.keys(c).forEach(function(S){d[S]===void 0&&delete c[S]}),b=a.setItem(o,l(c)).catch(p)}function m(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function p(S){u&&u(S)}var x=function(){for(;h.length!==0;)w();return b||Promise.resolve()};return{update:v,flush:x}}function uG(e){return JSON.stringify(e)}function dG(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Sy).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=cG,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(u){a[u]=t.reduceRight(function(d,c){return c.out(d,u,l)},i(l[u]))}),a}catch(u){throw u}else return})}function cG(e){return JSON.parse(e)}function fG(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Sy).concat(e.key);return t.removeItem(n,hG)}function hG(e){}function o4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ur(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?o4(n,!0).forEach(function(r){pG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o4(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pG(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gG(e,t){if(e==null)return{};var n=mG(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function mG(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var yG=5e3;function vG(e,t){var n=e.version!==void 0?e.version:iG;e.debug;var r=e.stateReconciler===void 0?sG:e.stateReconciler,i=e.getStoredState||dG,o=e.timeout!==void 0?e.timeout:yG,a=null,l=!1,u=!0,d=function(h){return h._persist.rehydrated&&a&&!u&&a.update(h),h};return function(c,h){var g=c||{},b=g._persist,v=gG(g,["_persist"]),w=v;if(h.type===Oy){var $=!1,m=function(R,W){$||(h.rehydrate(e.key,R,W),$=!0)};if(o&&setTimeout(function(){!$&&m(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),u=!1,a||(a=lG(e)),b)return ur({},t(w,h),{_persist:b});if(typeof h.rehydrate!="function"||typeof h.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return h.register(e.key),i(e).then(function(T){var R=e.migrate||function(W,z){return Promise.resolve(W)};R(T,n).then(function(W){m(W)},function(W){m(void 0,W)})},function(T){m(void 0,T)}),ur({},t(w,h),{_persist:{version:n,rehydrated:!1}})}else{if(h.type===_y)return l=!0,h.result(fG(e)),ur({},t(w,h),{_persist:b});if(h.type===Cy)return h.result(a&&a.flush()),ur({},t(w,h),{_persist:b});if(h.type===Py)u=!0;else if(h.type===Gf){if(l)return ur({},w,{_persist:ur({},b,{rehydrated:!0})});if(h.key===e.key){var p=t(w,h),x=h.payload,S=r!==!1&&x!==void 0?r(x,c,p,e):p,P=ur({},S,{_persist:ur({},b,{rehydrated:!0})});return d(P)}}}if(!b)return t(c,h);var _=t(w,h);return _===w?c:d(ur({},_,{_persist:b}))}}function a4(e){return $G(e)||bG(e)||xG()}function xG(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function bG(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function $G(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function s4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function dg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?s4(n,!0).forEach(function(r){wG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s4(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wG(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var U6={registry:[],bootstrapped:!1},SG=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:U6,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ky:return dg({},t,{registry:[].concat(a4(t.registry),[n.key])});case Gf:var r=t.registry.indexOf(n.key),i=a4(t.registry);return i.splice(r,1),dg({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function CG(e,t,n){var r=n||!1,i=Xm(SG,U6,t&&t.enhancer?t.enhancer:void 0),o=function(d){i.dispatch({type:ky,key:d})},a=function(d,c,h){var g={type:Gf,payload:c,err:h,key:d};e.dispatch(g),i.dispatch(g),r&&l.getState().bootstrapped&&(r(),r=!1)},l=dg({},i,{purge:function(){var d=[];return e.dispatch({type:_y,result:function(h){d.push(h)}}),Promise.all(d)},flush:function(){var d=[];return e.dispatch({type:Cy,result:function(h){d.push(h)}}),Promise.all(d)},pause:function(){e.dispatch({type:Py})},persist:function(){e.dispatch({type:Oy,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var Ny={},Ey={};Ey.__esModule=!0;Ey.default=_G;function vd(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?vd=function(n){return typeof n}:vd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},vd(e)}function lp(){}var PG={getItem:lp,setItem:lp,removeItem:lp};function OG(e){if((typeof self>"u"?"undefined":vd(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function _G(e){var t="".concat(e,"Storage");return OG(t)?self[t]:PG}Ny.__esModule=!0;Ny.default=EG;var kG=NG(Ey);function NG(e){return e&&e.__esModule?e:{default:e}}function EG(e){var t=(0,kG.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var B6=void 0,IG=TG(Ny);function TG(e){return e&&e.__esModule?e:{default:e}}var AG=(0,IG.default)("local");B6=AG;const RG={key:"root",version:1,storage:B6},FG=vG(RG,pF),H6=eF({reducer:{reducers:FG},middleware:e=>e({serializableCheck:{ignoredActions:[Cy,Gf,Py,Oy,_y,ky]}})});function xd(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xd=function(n){return typeof n}:xd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},xd(e)}function DG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function MG(e,t,n){return t&&l4(e.prototype,t),n&&l4(e,n),e}function jG(e,t){return t&&(xd(t)==="object"||typeof t=="function")?t:bd(e)}function cg(e){return cg=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},cg(e)}function bd(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function LG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&fg(e,t)}function fg(e,t){return fg=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},fg(e,t)}function $d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W6=function(e){LG(t,e);function t(){var n,r;DG(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=jG(this,(n=cg(t)).call.apply(n,[this].concat(o))),$d(bd(r),"state",{bootstrapped:!1}),$d(bd(r),"_unsubscribe",void 0),$d(bd(r),"handlePersistorState",function(){var l=r.props.persistor,u=l.getState(),d=u.bootstrapped;d&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return MG(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(C.PureComponent);$d(W6,"defaultProps",{children:null,loading:null});const zG=new BT;let UG=CG(H6);const BG=dp.createRoot(document.getElementById("root"));BG.render(s(ne.StrictMode,{children:s(qC,{children:s(xR,{store:H6,children:s(W6,{persistor:UG,children:y(nA,{client:zG,children:[s(Jq,{}),s(rG,{})]})})})})}));nG()});export default HG();
