var Y9=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var bQ=Y9((PQ,yd)=>{function V9(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var q9=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ys={},G9={get exports(){return Ys},set exports(e){Ys=e}},Cc={},C={},Q9={get exports(){return C},set exports(e){C=e}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cl=Symbol.for("react.element"),K9=Symbol.for("react.portal"),Z9=Symbol.for("react.fragment"),J9=Symbol.for("react.strict_mode"),X9=Symbol.for("react.profiler"),e8=Symbol.for("react.provider"),t8=Symbol.for("react.context"),n8=Symbol.for("react.forward_ref"),r8=Symbol.for("react.suspense"),i8=Symbol.for("react.memo"),o8=Symbol.for("react.lazy"),Py=Symbol.iterator;function a8(e){return e===null||typeof e!="object"?null:(e=Py&&e[Py]||e["@@iterator"],typeof e=="function"?e:null)}var lb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ub=Object.assign,db={};function Ba(e,t,n){this.props=e,this.context=t,this.refs=db,this.updater=n||lb}Ba.prototype.isReactComponent={};Ba.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ba.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cb(){}cb.prototype=Ba.prototype;function ag(e,t,n){this.props=e,this.context=t,this.refs=db,this.updater=n||lb}var sg=ag.prototype=new cb;sg.constructor=ag;ub(sg,Ba.prototype);sg.isPureReactComponent=!0;var Oy=Array.isArray,fb=Object.prototype.hasOwnProperty,lg={current:null},hb={key:!0,ref:!0,__self:!0,__source:!0};function pb(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)fb.call(t,r)&&!hb.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Cl,type:e,key:o,ref:a,props:i,_owner:lg.current}}function s8(e,t){return{$$typeof:Cl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ug(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cl}function l8(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _y=/\/+/g;function Wf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?l8(""+e.key):t.toString(36)}function Uu(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Cl:case K9:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Wf(a,0):r,Oy(i)?(n="",e!=null&&(n=e.replace(_y,"$&/")+"/"),Uu(i,t,n,"",function(d){return d})):i!=null&&(ug(i)&&(i=s8(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(_y,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Oy(e))for(var l=0;l<e.length;l++){o=e[l];var u=r+Wf(o,l);a+=Uu(o,t,n,u,i)}else if(u=a8(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=r+Wf(o,l++),a+=Uu(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function eu(e,t,n){if(e==null)return e;var r=[],i=0;return Uu(e,r,"","",function(o){return t.call(n,o,i++)}),r}function u8(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ft={current:null},Bu={transition:null},d8={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:Bu,ReactCurrentOwner:lg};$e.Children={map:eu,forEach:function(e,t,n){eu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return eu(e,function(){t++}),t},toArray:function(e){return eu(e,function(t){return t})||[]},only:function(e){if(!ug(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$e.Component=Ba;$e.Fragment=Z9;$e.Profiler=X9;$e.PureComponent=ag;$e.StrictMode=J9;$e.Suspense=r8;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d8;$e.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ub({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=lg.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)fb.call(t,u)&&!hb.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Cl,type:e.type,key:i,ref:o,props:r,_owner:a}};$e.createContext=function(e){return e={$$typeof:t8,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:e8,_context:e},e.Consumer=e};$e.createElement=pb;$e.createFactory=function(e){var t=pb.bind(null,e);return t.type=e,t};$e.createRef=function(){return{current:null}};$e.forwardRef=function(e){return{$$typeof:n8,render:e}};$e.isValidElement=ug;$e.lazy=function(e){return{$$typeof:o8,_payload:{_status:-1,_result:e},_init:u8}};$e.memo=function(e,t){return{$$typeof:i8,type:e,compare:t===void 0?null:t}};$e.startTransition=function(e){var t=Bu.transition;Bu.transition={};try{e()}finally{Bu.transition=t}};$e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$e.useCallback=function(e,t){return Ft.current.useCallback(e,t)};$e.useContext=function(e){return Ft.current.useContext(e)};$e.useDebugValue=function(){};$e.useDeferredValue=function(e){return Ft.current.useDeferredValue(e)};$e.useEffect=function(e,t){return Ft.current.useEffect(e,t)};$e.useId=function(){return Ft.current.useId()};$e.useImperativeHandle=function(e,t,n){return Ft.current.useImperativeHandle(e,t,n)};$e.useInsertionEffect=function(e,t){return Ft.current.useInsertionEffect(e,t)};$e.useLayoutEffect=function(e,t){return Ft.current.useLayoutEffect(e,t)};$e.useMemo=function(e,t){return Ft.current.useMemo(e,t)};$e.useReducer=function(e,t,n){return Ft.current.useReducer(e,t,n)};$e.useRef=function(e){return Ft.current.useRef(e)};$e.useState=function(e){return Ft.current.useState(e)};$e.useSyncExternalStore=function(e,t,n){return Ft.current.useSyncExternalStore(e,t,n)};$e.useTransition=function(){return Ft.current.useTransition()};$e.version="18.2.0";(function(e){e.exports=$e})(Q9);const ne=sb(C),np=V9({__proto__:null,default:ne},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c8=C,f8=Symbol.for("react.element"),h8=Symbol.for("react.fragment"),p8=Object.prototype.hasOwnProperty,g8=c8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m8={key:!0,ref:!0,__self:!0,__source:!0};function gb(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)p8.call(t,r)&&!m8.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:f8,type:e,key:o,ref:a,props:i,_owner:g8.current}}Cc.Fragment=h8;Cc.jsx=gb;Cc.jsxs=gb;(function(e){e.exports=Cc})(G9);const _a=Ys.Fragment,s=Ys.jsx,y=Ys.jsxs;var rp={},vd={},y8={get exports(){return vd},set exports(e){vd=e}},Jt={},ip={},v8={get exports(){return ip},set exports(e){ip=e}},mb={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,_){var k=z.length;z.push(_);e:for(;0<k;){var U=k-1>>>1,D=z[U];if(0<i(D,_))z[U]=_,z[k]=D,k=U;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var _=z[0],k=z.pop();if(k!==_){z[0]=k;e:for(var U=0,D=z.length,H=D>>>1;U<H;){var V=2*(U+1)-1,ie=z[V],I=V+1,G=z[I];if(0>i(ie,k))I<D&&0>i(G,ie)?(z[U]=G,z[I]=k,U=I):(z[U]=ie,z[V]=k,U=V);else if(I<D&&0>i(G,k))z[U]=G,z[I]=k,U=I;else break e}}return _}function i(z,_){var k=z.sortIndex-_.sortIndex;return k!==0?k:z.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],d=[],f=1,h=null,m=3,b=!1,v=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $(z){for(var _=n(d);_!==null;){if(_.callback===null)r(d);else if(_.startTime<=z)r(d),_.sortIndex=_.expirationTime,t(u,_);else break;_=n(d)}}function S(z){if(w=!1,$(z),!v)if(n(u)!==null)v=!0,ee(P);else{var _=n(d);_!==null&&re(S,_.startTime-z)}}function P(z,_){v=!1,w&&(w=!1,p(R),R=-1),b=!0;var k=m;try{for($(_),h=n(u);h!==null&&(!(h.expirationTime>_)||z&&!se());){var U=h.callback;if(typeof U=="function"){h.callback=null,m=h.priorityLevel;var D=U(h.expirationTime<=_);_=e.unstable_now(),typeof D=="function"?h.callback=D:h===n(u)&&r(u),$(_)}else r(u);h=n(u)}if(h!==null)var H=!0;else{var V=n(d);V!==null&&re(S,V.startTime-_),H=!1}return H}finally{h=null,m=k,b=!1}}var N=!1,T=null,R=-1,W=5,L=-1;function se(){return!(e.unstable_now()-L<W)}function M(){if(T!==null){var z=e.unstable_now();L=z;var _=!0;try{_=T(!0,z)}finally{_?j():(N=!1,T=null)}}else N=!1}var j;if(typeof g=="function")j=function(){g(M)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,F=X.port2;X.port1.onmessage=M,j=function(){F.postMessage(null)}}else j=function(){x(M,0)};function ee(z){T=z,N||(N=!0,j())}function re(z,_){R=x(function(){z(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){v||b||(v=!0,ee(P))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var k=m;m=_;try{return z()}finally{m=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,_){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var k=m;m=z;try{return _()}finally{m=k}},e.unstable_scheduleCallback=function(z,_,k){var U=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?U+k:U):k=U,z){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=k+D,z={id:f++,callback:_,priorityLevel:z,startTime:k,expirationTime:D,sortIndex:-1},k>U?(z.sortIndex=k,t(d,z),n(u)===null&&z===n(d)&&(w?(p(R),R=-1):w=!0,re(S,k-U))):(z.sortIndex=D,t(u,z),v||b||(v=!0,ee(P))),z},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(z){var _=m;return function(){var k=m;m=_;try{return z.apply(this,arguments)}finally{m=k}}}})(mb);(function(e){e.exports=mb})(v8);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yb=C,Kt=ip;function Q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vb=new Set,Vs={};function uo(e,t){ka(e,t),ka(e+"Capture",t)}function ka(e,t){for(Vs[e]=t,e=0;e<t.length;e++)vb.add(t[e])}var Sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),op=Object.prototype.hasOwnProperty,x8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ky={},Ny={};function b8(e){return op.call(Ny,e)?!0:op.call(ky,e)?!1:x8.test(e)?Ny[e]=!0:(ky[e]=!0,!1)}function $8(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function w8(e,t,n,r){if(t===null||typeof t>"u"||$8(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Dt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){bt[e]=new Dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];bt[t]=new Dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){bt[e]=new Dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){bt[e]=new Dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){bt[e]=new Dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){bt[e]=new Dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){bt[e]=new Dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){bt[e]=new Dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){bt[e]=new Dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var dg=/[\-:]([a-z])/g;function cg(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(dg,cg);bt[t]=new Dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(dg,cg);bt[t]=new Dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(dg,cg);bt[t]=new Dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){bt[e]=new Dt(e,1,!1,e.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){bt[e]=new Dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function fg(e,t,n,r){var i=bt.hasOwnProperty(t)?bt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(w8(t,n,i,r)&&(n=null),r||i===null?b8(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Er=yb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tu=Symbol.for("react.element"),Zo=Symbol.for("react.portal"),Jo=Symbol.for("react.fragment"),hg=Symbol.for("react.strict_mode"),ap=Symbol.for("react.profiler"),xb=Symbol.for("react.provider"),bb=Symbol.for("react.context"),pg=Symbol.for("react.forward_ref"),sp=Symbol.for("react.suspense"),lp=Symbol.for("react.suspense_list"),gg=Symbol.for("react.memo"),Br=Symbol.for("react.lazy"),$b=Symbol.for("react.offscreen"),Ey=Symbol.iterator;function rs(e){return e===null||typeof e!="object"?null:(e=Ey&&e[Ey]||e["@@iterator"],typeof e=="function"?e:null)}var Qe=Object.assign,Yf;function _s(e){if(Yf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yf=t&&t[1]||""}return`
`+Yf+e}var Vf=!1;function qf(e,t){if(!e||Vf)return"";Vf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{Vf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_s(e):""}function S8(e){switch(e.tag){case 5:return _s(e.type);case 16:return _s("Lazy");case 13:return _s("Suspense");case 19:return _s("SuspenseList");case 0:case 2:case 15:return e=qf(e.type,!1),e;case 11:return e=qf(e.type.render,!1),e;case 1:return e=qf(e.type,!0),e;default:return""}}function up(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jo:return"Fragment";case Zo:return"Portal";case ap:return"Profiler";case hg:return"StrictMode";case sp:return"Suspense";case lp:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bb:return(e.displayName||"Context")+".Consumer";case xb:return(e._context.displayName||"Context")+".Provider";case pg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gg:return t=e.displayName||null,t!==null?t:up(e.type)||"Memo";case Br:t=e._payload,e=e._init;try{return up(e(t))}catch{}}return null}function C8(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return up(t);case 8:return t===hg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wb(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function P8(e){var t=wb(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function nu(e){e._valueTracker||(e._valueTracker=P8(e))}function Sb(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wb(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xd(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dp(e,t){var n=t.checked;return Qe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Iy(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gi(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cb(e,t){t=t.checked,t!=null&&fg(e,"checked",t,!1)}function cp(e,t){Cb(e,t);var n=gi(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fp(e,t.type,n):t.hasOwnProperty("defaultValue")&&fp(e,t.type,gi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ty(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fp(e,t,n){(t!=="number"||xd(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ks=Array.isArray;function pa(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gi(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function hp(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Q(91));return Qe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ay(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Q(92));if(ks(n)){if(1<n.length)throw Error(Q(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gi(n)}}function Pb(e,t){var n=gi(t.value),r=gi(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ry(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ob(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pp(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ob(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ru,_b=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ru=ru||document.createElement("div"),ru.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ru.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var As={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O8=["Webkit","ms","Moz","O"];Object.keys(As).forEach(function(e){O8.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),As[t]=As[e]})});function kb(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||As.hasOwnProperty(e)&&As[e]?(""+t).trim():t+"px"}function Nb(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=kb(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var _8=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gp(e,t){if(t){if(_8[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Q(62))}}function mp(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yp=null;function mg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vp=null,ga=null,ma=null;function Fy(e){if(e=_l(e)){if(typeof vp!="function")throw Error(Q(280));var t=e.stateNode;t&&(t=Nc(t),vp(e.stateNode,e.type,t))}}function Eb(e){ga?ma?ma.push(e):ma=[e]:ga=e}function Ib(){if(ga){var e=ga,t=ma;if(ma=ga=null,Fy(e),t)for(e=0;e<t.length;e++)Fy(t[e])}}function Tb(e,t){return e(t)}function Ab(){}var Gf=!1;function Rb(e,t,n){if(Gf)return e(t,n);Gf=!0;try{return Tb(e,t,n)}finally{Gf=!1,(ga!==null||ma!==null)&&(Ab(),Ib())}}function Gs(e,t){var n=e.stateNode;if(n===null)return null;var r=Nc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var xp=!1;if(Sr)try{var is={};Object.defineProperty(is,"passive",{get:function(){xp=!0}}),window.addEventListener("test",is,is),window.removeEventListener("test",is,is)}catch{xp=!1}function k8(e,t,n,r,i,o,a,l,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(f){this.onError(f)}}var Rs=!1,bd=null,$d=!1,bp=null,N8={onError:function(e){Rs=!0,bd=e}};function E8(e,t,n,r,i,o,a,l,u){Rs=!1,bd=null,k8.apply(N8,arguments)}function I8(e,t,n,r,i,o,a,l,u){if(E8.apply(this,arguments),Rs){if(Rs){var d=bd;Rs=!1,bd=null}else throw Error(Q(198));$d||($d=!0,bp=d)}}function co(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fb(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dy(e){if(co(e)!==e)throw Error(Q(188))}function T8(e){var t=e.alternate;if(!t){if(t=co(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Dy(i),e;if(o===r)return Dy(i),t;o=o.sibling}throw Error(Q(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(Q(189))}}if(n.alternate!==r)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function Db(e){return e=T8(e),e!==null?Mb(e):null}function Mb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mb(e);if(t!==null)return t;e=e.sibling}return null}var jb=Kt.unstable_scheduleCallback,My=Kt.unstable_cancelCallback,A8=Kt.unstable_shouldYield,R8=Kt.unstable_requestPaint,tt=Kt.unstable_now,F8=Kt.unstable_getCurrentPriorityLevel,yg=Kt.unstable_ImmediatePriority,Lb=Kt.unstable_UserBlockingPriority,wd=Kt.unstable_NormalPriority,D8=Kt.unstable_LowPriority,zb=Kt.unstable_IdlePriority,Pc=null,Zn=null;function M8(e){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(Pc,e,void 0,(e.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:z8,j8=Math.log,L8=Math.LN2;function z8(e){return e>>>=0,e===0?32:31-(j8(e)/L8|0)|0}var iu=64,ou=4194304;function Ns(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Sd(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Ns(l):(o&=a,o!==0&&(r=Ns(o)))}else a=n&~i,a!==0?r=Ns(a):o!==0&&(r=Ns(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Rn(t),i=1<<n,r|=e[n],t&=~i;return r}function U8(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function B8(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Rn(o),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=U8(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function $p(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ub(){var e=iu;return iu<<=1,!(iu&4194240)&&(iu=64),e}function Qf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rn(t),e[t]=n}function H8(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Rn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function vg(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Rn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ee=0;function Bb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hb,xg,Wb,Yb,Vb,wp=!1,au=[],ei=null,ti=null,ni=null,Qs=new Map,Ks=new Map,Yr=[],W8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jy(e,t){switch(e){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":Qs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ks.delete(t.pointerId)}}function os(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=_l(t),t!==null&&xg(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Y8(e,t,n,r,i){switch(t){case"focusin":return ei=os(ei,e,t,n,r,i),!0;case"dragenter":return ti=os(ti,e,t,n,r,i),!0;case"mouseover":return ni=os(ni,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Qs.set(o,os(Qs.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ks.set(o,os(Ks.get(o)||null,e,t,n,r,i)),!0}return!1}function qb(e){var t=Yi(e.target);if(t!==null){var n=co(t);if(n!==null){if(t=n.tag,t===13){if(t=Fb(n),t!==null){e.blockedOn=t,Vb(e.priority,function(){Wb(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sp(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yp=r,n.target.dispatchEvent(r),yp=null}else return t=_l(n),t!==null&&xg(t),e.blockedOn=n,!1;t.shift()}return!0}function Ly(e,t,n){Hu(e)&&n.delete(t)}function V8(){wp=!1,ei!==null&&Hu(ei)&&(ei=null),ti!==null&&Hu(ti)&&(ti=null),ni!==null&&Hu(ni)&&(ni=null),Qs.forEach(Ly),Ks.forEach(Ly)}function as(e,t){e.blockedOn===t&&(e.blockedOn=null,wp||(wp=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,V8)))}function Zs(e){function t(i){return as(i,e)}if(0<au.length){as(au[0],e);for(var n=1;n<au.length;n++){var r=au[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ei!==null&&as(ei,e),ti!==null&&as(ti,e),ni!==null&&as(ni,e),Qs.forEach(t),Ks.forEach(t),n=0;n<Yr.length;n++)r=Yr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yr.length&&(n=Yr[0],n.blockedOn===null);)qb(n),n.blockedOn===null&&Yr.shift()}var ya=Er.ReactCurrentBatchConfig,Cd=!0;function q8(e,t,n,r){var i=Ee,o=ya.transition;ya.transition=null;try{Ee=1,bg(e,t,n,r)}finally{Ee=i,ya.transition=o}}function G8(e,t,n,r){var i=Ee,o=ya.transition;ya.transition=null;try{Ee=4,bg(e,t,n,r)}finally{Ee=i,ya.transition=o}}function bg(e,t,n,r){if(Cd){var i=Sp(e,t,n,r);if(i===null)oh(e,t,r,Pd,n),jy(e,r);else if(Y8(i,e,t,n,r))r.stopPropagation();else if(jy(e,r),t&4&&-1<W8.indexOf(e)){for(;i!==null;){var o=_l(i);if(o!==null&&Hb(o),o=Sp(e,t,n,r),o===null&&oh(e,t,r,Pd,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else oh(e,t,r,null,n)}}var Pd=null;function Sp(e,t,n,r){if(Pd=null,e=mg(r),e=Yi(e),e!==null)if(t=co(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fb(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pd=e,null}function Gb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(F8()){case yg:return 1;case Lb:return 4;case wd:case D8:return 16;case zb:return 536870912;default:return 16}default:return 16}}var Gr=null,$g=null,Wu=null;function Qb(){if(Wu)return Wu;var e,t=$g,n=t.length,r,i="value"in Gr?Gr.value:Gr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Wu=i.slice(e,1<r?1-r:void 0)}function Yu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function su(){return!0}function zy(){return!1}function Xt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?su:zy,this.isPropagationStopped=zy,this}return Qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=su)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=su)},persist:function(){},isPersistent:su}),t}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wg=Xt(Ha),Ol=Qe({},Ha,{view:0,detail:0}),Q8=Xt(Ol),Kf,Zf,ss,Oc=Qe({},Ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ss&&(ss&&e.type==="mousemove"?(Kf=e.screenX-ss.screenX,Zf=e.screenY-ss.screenY):Zf=Kf=0,ss=e),Kf)},movementY:function(e){return"movementY"in e?e.movementY:Zf}}),Uy=Xt(Oc),K8=Qe({},Oc,{dataTransfer:0}),Z8=Xt(K8),J8=Qe({},Ol,{relatedTarget:0}),Jf=Xt(J8),X8=Qe({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),e6=Xt(X8),t6=Qe({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),n6=Xt(t6),r6=Qe({},Ha,{data:0}),By=Xt(r6),i6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s6(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=a6[e])?!!t[e]:!1}function Sg(){return s6}var l6=Qe({},Ol,{key:function(e){if(e.key){var t=i6[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?o6[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sg,charCode:function(e){return e.type==="keypress"?Yu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),u6=Xt(l6),d6=Qe({},Oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hy=Xt(d6),c6=Qe({},Ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sg}),f6=Xt(c6),h6=Qe({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),p6=Xt(h6),g6=Qe({},Oc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),m6=Xt(g6),y6=[9,13,27,32],Cg=Sr&&"CompositionEvent"in window,Fs=null;Sr&&"documentMode"in document&&(Fs=document.documentMode);var v6=Sr&&"TextEvent"in window&&!Fs,Kb=Sr&&(!Cg||Fs&&8<Fs&&11>=Fs),Wy=String.fromCharCode(32),Yy=!1;function Zb(e,t){switch(e){case"keyup":return y6.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xo=!1;function x6(e,t){switch(e){case"compositionend":return Jb(t);case"keypress":return t.which!==32?null:(Yy=!0,Wy);case"textInput":return e=t.data,e===Wy&&Yy?null:e;default:return null}}function b6(e,t){if(Xo)return e==="compositionend"||!Cg&&Zb(e,t)?(e=Qb(),Wu=$g=Gr=null,Xo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kb&&t.locale!=="ko"?null:t.data;default:return null}}var $6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$6[e.type]:t==="textarea"}function Xb(e,t,n,r){Eb(r),t=Od(t,"onChange"),0<t.length&&(n=new wg("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ds=null,Js=null;function w6(e){d$(e,0)}function _c(e){var t=na(e);if(Sb(t))return e}function S6(e,t){if(e==="change")return t}var e$=!1;if(Sr){var Xf;if(Sr){var eh="oninput"in document;if(!eh){var qy=document.createElement("div");qy.setAttribute("oninput","return;"),eh=typeof qy.oninput=="function"}Xf=eh}else Xf=!1;e$=Xf&&(!document.documentMode||9<document.documentMode)}function Gy(){Ds&&(Ds.detachEvent("onpropertychange",t$),Js=Ds=null)}function t$(e){if(e.propertyName==="value"&&_c(Js)){var t=[];Xb(t,Js,e,mg(e)),Rb(w6,t)}}function C6(e,t,n){e==="focusin"?(Gy(),Ds=t,Js=n,Ds.attachEvent("onpropertychange",t$)):e==="focusout"&&Gy()}function P6(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _c(Js)}function O6(e,t){if(e==="click")return _c(t)}function _6(e,t){if(e==="input"||e==="change")return _c(t)}function k6(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mn=typeof Object.is=="function"?Object.is:k6;function Xs(e,t){if(Mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!op.call(t,i)||!Mn(e[i],t[i]))return!1}return!0}function Qy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ky(e,t){var n=Qy(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qy(n)}}function n$(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?n$(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function r$(){for(var e=window,t=xd();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xd(e.document)}return t}function Pg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function N6(e){var t=r$(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&n$(n.ownerDocument.documentElement,n)){if(r!==null&&Pg(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ky(n,o);var a=Ky(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var E6=Sr&&"documentMode"in document&&11>=document.documentMode,ea=null,Cp=null,Ms=null,Pp=!1;function Zy(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pp||ea==null||ea!==xd(r)||(r=ea,"selectionStart"in r&&Pg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ms&&Xs(Ms,r)||(Ms=r,r=Od(Cp,"onSelect"),0<r.length&&(t=new wg("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ea)))}function lu(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ta={animationend:lu("Animation","AnimationEnd"),animationiteration:lu("Animation","AnimationIteration"),animationstart:lu("Animation","AnimationStart"),transitionend:lu("Transition","TransitionEnd")},th={},i$={};Sr&&(i$=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function kc(e){if(th[e])return th[e];if(!ta[e])return e;var t=ta[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in i$)return th[e]=t[n];return e}var o$=kc("animationend"),a$=kc("animationiteration"),s$=kc("animationstart"),l$=kc("transitionend"),u$=new Map,Jy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(e,t){u$.set(e,t),uo(t,[e])}for(var nh=0;nh<Jy.length;nh++){var rh=Jy[nh],I6=rh.toLowerCase(),T6=rh[0].toUpperCase()+rh.slice(1);$i(I6,"on"+T6)}$i(o$,"onAnimationEnd");$i(a$,"onAnimationIteration");$i(s$,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(l$,"onTransitionEnd");ka("onMouseEnter",["mouseout","mouseover"]);ka("onMouseLeave",["mouseout","mouseover"]);ka("onPointerEnter",["pointerout","pointerover"]);ka("onPointerLeave",["pointerout","pointerover"]);uo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));uo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));uo("onBeforeInput",["compositionend","keypress","textInput","paste"]);uo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));uo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));uo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Es="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A6=new Set("cancel close invalid load scroll toggle".split(" ").concat(Es));function Xy(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,I8(r,t,void 0,e),e.currentTarget=null}function d$(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;Xy(i,l,d),o=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,d=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;Xy(i,l,d),o=u}}}if($d)throw e=bp,$d=!1,bp=null,e}function je(e,t){var n=t[Ep];n===void 0&&(n=t[Ep]=new Set);var r=e+"__bubble";n.has(r)||(c$(t,e,2,!1),n.add(r))}function ih(e,t,n){var r=0;t&&(r|=4),c$(n,e,r,t)}var uu="_reactListening"+Math.random().toString(36).slice(2);function el(e){if(!e[uu]){e[uu]=!0,vb.forEach(function(n){n!=="selectionchange"&&(A6.has(n)||ih(n,!1,e),ih(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[uu]||(t[uu]=!0,ih("selectionchange",!1,t))}}function c$(e,t,n,r){switch(Gb(t)){case 1:var i=q8;break;case 4:i=G8;break;default:i=bg}n=i.bind(null,t,n,e),i=void 0,!xp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function oh(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Yi(l),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Rb(function(){var d=o,f=mg(n),h=[];e:{var m=u$.get(e);if(m!==void 0){var b=wg,v=e;switch(e){case"keypress":if(Yu(n)===0)break e;case"keydown":case"keyup":b=u6;break;case"focusin":v="focus",b=Jf;break;case"focusout":v="blur",b=Jf;break;case"beforeblur":case"afterblur":b=Jf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Uy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Z8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=f6;break;case o$:case a$:case s$:b=e6;break;case l$:b=p6;break;case"scroll":b=Q8;break;case"wheel":b=m6;break;case"copy":case"cut":case"paste":b=n6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Hy}var w=(t&4)!==0,x=!w&&e==="scroll",p=w?m!==null?m+"Capture":null:m;w=[];for(var g=d,$;g!==null;){$=g;var S=$.stateNode;if($.tag===5&&S!==null&&($=S,p!==null&&(S=Gs(g,p),S!=null&&w.push(tl(g,S,$)))),x)break;g=g.return}0<w.length&&(m=new b(m,v,null,n,f),h.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",m&&n!==yp&&(v=n.relatedTarget||n.fromElement)&&(Yi(v)||v[Cr]))break e;if((b||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,b?(v=n.relatedTarget||n.toElement,b=d,v=v?Yi(v):null,v!==null&&(x=co(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(b=null,v=d),b!==v)){if(w=Uy,S="onMouseLeave",p="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(w=Hy,S="onPointerLeave",p="onPointerEnter",g="pointer"),x=b==null?m:na(b),$=v==null?m:na(v),m=new w(S,g+"leave",b,n,f),m.target=x,m.relatedTarget=$,S=null,Yi(f)===d&&(w=new w(p,g+"enter",v,n,f),w.target=$,w.relatedTarget=x,S=w),x=S,b&&v)t:{for(w=b,p=v,g=0,$=w;$;$=go($))g++;for($=0,S=p;S;S=go(S))$++;for(;0<g-$;)w=go(w),g--;for(;0<$-g;)p=go(p),$--;for(;g--;){if(w===p||p!==null&&w===p.alternate)break t;w=go(w),p=go(p)}w=null}else w=null;b!==null&&e2(h,m,b,w,!1),v!==null&&x!==null&&e2(h,x,v,w,!0)}}e:{if(m=d?na(d):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var P=S6;else if(Vy(m))if(e$)P=_6;else{P=P6;var N=C6}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(P=O6);if(P&&(P=P(e,d))){Xb(h,P,n,f);break e}N&&N(e,m,d),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&fp(m,"number",m.value)}switch(N=d?na(d):window,e){case"focusin":(Vy(N)||N.contentEditable==="true")&&(ea=N,Cp=d,Ms=null);break;case"focusout":Ms=Cp=ea=null;break;case"mousedown":Pp=!0;break;case"contextmenu":case"mouseup":case"dragend":Pp=!1,Zy(h,n,f);break;case"selectionchange":if(E6)break;case"keydown":case"keyup":Zy(h,n,f)}var T;if(Cg)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Xo?Zb(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Kb&&n.locale!=="ko"&&(Xo||R!=="onCompositionStart"?R==="onCompositionEnd"&&Xo&&(T=Qb()):(Gr=f,$g="value"in Gr?Gr.value:Gr.textContent,Xo=!0)),N=Od(d,R),0<N.length&&(R=new By(R,e,null,n,f),h.push({event:R,listeners:N}),T?R.data=T:(T=Jb(n),T!==null&&(R.data=T)))),(T=v6?x6(e,n):b6(e,n))&&(d=Od(d,"onBeforeInput"),0<d.length&&(f=new By("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:d}),f.data=T))}d$(h,t)})}function tl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Od(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Gs(e,n),o!=null&&r.unshift(tl(e,o,i)),o=Gs(e,t),o!=null&&r.push(tl(e,o,i))),e=e.return}return r}function go(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function e2(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=Gs(n,o),u!=null&&a.unshift(tl(n,u,l))):i||(u=Gs(n,o),u!=null&&a.push(tl(n,u,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var R6=/\r\n?/g,F6=/\u0000|\uFFFD/g;function t2(e){return(typeof e=="string"?e:""+e).replace(R6,`
`).replace(F6,"")}function du(e,t,n){if(t=t2(t),t2(e)!==t&&n)throw Error(Q(425))}function _d(){}var Op=null,_p=null;function kp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Np=typeof setTimeout=="function"?setTimeout:void 0,D6=typeof clearTimeout=="function"?clearTimeout:void 0,n2=typeof Promise=="function"?Promise:void 0,M6=typeof queueMicrotask=="function"?queueMicrotask:typeof n2<"u"?function(e){return n2.resolve(null).then(e).catch(j6)}:Np;function j6(e){setTimeout(function(){throw e})}function ah(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Zs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Zs(t)}function ri(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function r2(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Wa=Math.random().toString(36).slice(2),qn="__reactFiber$"+Wa,nl="__reactProps$"+Wa,Cr="__reactContainer$"+Wa,Ep="__reactEvents$"+Wa,L6="__reactListeners$"+Wa,z6="__reactHandles$"+Wa;function Yi(e){var t=e[qn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Cr]||n[qn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=r2(e);e!==null;){if(n=e[qn])return n;e=r2(e)}return t}e=n,n=e.parentNode}return null}function _l(e){return e=e[qn]||e[Cr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function na(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Q(33))}function Nc(e){return e[nl]||null}var Ip=[],ra=-1;function wi(e){return{current:e}}function ze(e){0>ra||(e.current=Ip[ra],Ip[ra]=null,ra--)}function Me(e,t){ra++,Ip[ra]=e.current,e.current=t}var mi={},kt=wi(mi),Bt=wi(!1),no=mi;function Na(e,t){var n=e.type.contextTypes;if(!n)return mi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ht(e){return e=e.childContextTypes,e!=null}function kd(){ze(Bt),ze(kt)}function i2(e,t,n){if(kt.current!==mi)throw Error(Q(168));Me(kt,t),Me(Bt,n)}function f$(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(Q(108,C8(e)||"Unknown",i));return Qe({},n,r)}function Nd(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mi,no=kt.current,Me(kt,e),Me(Bt,Bt.current),!0}function o2(e,t,n){var r=e.stateNode;if(!r)throw Error(Q(169));n?(e=f$(e,t,no),r.__reactInternalMemoizedMergedChildContext=e,ze(Bt),ze(kt),Me(kt,e)):ze(Bt),Me(Bt,n)}var hr=null,Ec=!1,sh=!1;function h$(e){hr===null?hr=[e]:hr.push(e)}function U6(e){Ec=!0,h$(e)}function Si(){if(!sh&&hr!==null){sh=!0;var e=0,t=Ee;try{var n=hr;for(Ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}hr=null,Ec=!1}catch(i){throw hr!==null&&(hr=hr.slice(e+1)),jb(yg,Si),i}finally{Ee=t,sh=!1}}return null}var ia=[],oa=0,Ed=null,Id=0,ln=[],un=0,ro=null,gr=1,mr="";function zi(e,t){ia[oa++]=Id,ia[oa++]=Ed,Ed=e,Id=t}function p$(e,t,n){ln[un++]=gr,ln[un++]=mr,ln[un++]=ro,ro=e;var r=gr;e=mr;var i=32-Rn(r)-1;r&=~(1<<i),n+=1;var o=32-Rn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,gr=1<<32-Rn(t)+i|n<<i|r,mr=o+e}else gr=1<<o|n<<i|r,mr=e}function Og(e){e.return!==null&&(zi(e,1),p$(e,1,0))}function _g(e){for(;e===Ed;)Ed=ia[--oa],ia[oa]=null,Id=ia[--oa],ia[oa]=null;for(;e===ro;)ro=ln[--un],ln[un]=null,mr=ln[--un],ln[un]=null,gr=ln[--un],ln[un]=null}var Qt=null,Gt=null,Ye=!1,En=null;function g$(e,t){var n=fn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function a2(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qt=e,Gt=ri(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qt=e,Gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ro!==null?{id:gr,overflow:mr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=fn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qt=e,Gt=null,!0):!1;default:return!1}}function Tp(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ap(e){if(Ye){var t=Gt;if(t){var n=t;if(!a2(e,t)){if(Tp(e))throw Error(Q(418));t=ri(n.nextSibling);var r=Qt;t&&a2(e,t)?g$(r,n):(e.flags=e.flags&-4097|2,Ye=!1,Qt=e)}}else{if(Tp(e))throw Error(Q(418));e.flags=e.flags&-4097|2,Ye=!1,Qt=e}}}function s2(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qt=e}function cu(e){if(e!==Qt)return!1;if(!Ye)return s2(e),Ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!kp(e.type,e.memoizedProps)),t&&(t=Gt)){if(Tp(e))throw m$(),Error(Q(418));for(;t;)g$(e,t),t=ri(t.nextSibling)}if(s2(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Gt=ri(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Gt=null}}else Gt=Qt?ri(e.stateNode.nextSibling):null;return!0}function m$(){for(var e=Gt;e;)e=ri(e.nextSibling)}function Ea(){Gt=Qt=null,Ye=!1}function kg(e){En===null?En=[e]:En.push(e)}var B6=Er.ReactCurrentBatchConfig;function kn(e,t){if(e&&e.defaultProps){t=Qe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Td=wi(null),Ad=null,aa=null,Ng=null;function Eg(){Ng=aa=Ad=null}function Ig(e){var t=Td.current;ze(Td),e._currentValue=t}function Rp(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function va(e,t){Ad=e,Ng=aa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ut=!0),e.firstContext=null)}function gn(e){var t=e._currentValue;if(Ng!==e)if(e={context:e,memoizedValue:t,next:null},aa===null){if(Ad===null)throw Error(Q(308));aa=e,Ad.dependencies={lanes:0,firstContext:e}}else aa=aa.next=e;return t}var Vi=null;function Tg(e){Vi===null?Vi=[e]:Vi.push(e)}function y$(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Tg(t)):(n.next=i.next,i.next=n),t.interleaved=n,Pr(e,r)}function Pr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Hr=!1;function Ag(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v$(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function br(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ii(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ce&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Pr(e,n)}return i=r.interleaved,i===null?(t.next=t,Tg(r)):(t.next=i.next,i.next=t),r.interleaved=t,Pr(e,n)}function Vu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vg(e,n)}}function l2(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Rd(e,t,n,r){var i=e.updateQueue;Hr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,a===null?o=d:a.next=d,a=u;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(o!==null){var h=i.baseState;a=0,f=d=u=null,l=o;do{var m=l.lane,b=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,w=l;switch(m=t,b=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(b,h,m);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,m=typeof v=="function"?v.call(b,h,m):v,m==null)break e;h=Qe({},h,m);break e;case 2:Hr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else b={eventTime:b,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=b,u=h):f=f.next=b,a|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(f===null&&(u=h),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);oo|=a,e.lanes=a,e.memoizedState=h}}function u2(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(Q(191,i));i.call(r)}}}var x$=new yb.Component().refs;function Fp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Qe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ic={isMounted:function(e){return(e=e._reactInternals)?co(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=At(),i=ai(e),o=br(r,i);o.payload=t,n!=null&&(o.callback=n),t=ii(e,o,i),t!==null&&(Fn(t,e,i,r),Vu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=At(),i=ai(e),o=br(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ii(e,o,i),t!==null&&(Fn(t,e,i,r),Vu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=At(),r=ai(e),i=br(n,r);i.tag=2,t!=null&&(i.callback=t),t=ii(e,i,r),t!==null&&(Fn(t,e,r,n),Vu(t,e,r))}};function d2(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Xs(n,r)||!Xs(i,o):!0}function b$(e,t,n){var r=!1,i=mi,o=t.contextType;return typeof o=="object"&&o!==null?o=gn(o):(i=Ht(t)?no:kt.current,r=t.contextTypes,o=(r=r!=null)?Na(e,i):mi),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ic,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function c2(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ic.enqueueReplaceState(t,t.state,null)}function Dp(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=x$,Ag(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=gn(o):(o=Ht(t)?no:kt.current,i.context=Na(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Fp(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ic.enqueueReplaceState(i,i.state,null),Rd(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ls(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Q(309));var r=n.stateNode}if(!r)throw Error(Q(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===x$&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(Q(284));if(!n._owner)throw Error(Q(290,e))}return e}function fu(e,t){throw e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function f2(e){var t=e._init;return t(e._payload)}function $$(e){function t(p,g){if(e){var $=p.deletions;$===null?(p.deletions=[g],p.flags|=16):$.push(g)}}function n(p,g){if(!e)return null;for(;g!==null;)t(p,g),g=g.sibling;return null}function r(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function i(p,g){return p=si(p,g),p.index=0,p.sibling=null,p}function o(p,g,$){return p.index=$,e?($=p.alternate,$!==null?($=$.index,$<g?(p.flags|=2,g):$):(p.flags|=2,g)):(p.flags|=1048576,g)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,g,$,S){return g===null||g.tag!==6?(g=ph($,p.mode,S),g.return=p,g):(g=i(g,$),g.return=p,g)}function u(p,g,$,S){var P=$.type;return P===Jo?f(p,g,$.props.children,S,$.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Br&&f2(P)===g.type)?(S=i(g,$.props),S.ref=ls(p,g,$),S.return=p,S):(S=Ju($.type,$.key,$.props,null,p.mode,S),S.ref=ls(p,g,$),S.return=p,S)}function d(p,g,$,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==$.containerInfo||g.stateNode.implementation!==$.implementation?(g=gh($,p.mode,S),g.return=p,g):(g=i(g,$.children||[]),g.return=p,g)}function f(p,g,$,S,P){return g===null||g.tag!==7?(g=Xi($,p.mode,S,P),g.return=p,g):(g=i(g,$),g.return=p,g)}function h(p,g,$){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ph(""+g,p.mode,$),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case tu:return $=Ju(g.type,g.key,g.props,null,p.mode,$),$.ref=ls(p,null,g),$.return=p,$;case Zo:return g=gh(g,p.mode,$),g.return=p,g;case Br:var S=g._init;return h(p,S(g._payload),$)}if(ks(g)||rs(g))return g=Xi(g,p.mode,$,null),g.return=p,g;fu(p,g)}return null}function m(p,g,$,S){var P=g!==null?g.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return P!==null?null:l(p,g,""+$,S);if(typeof $=="object"&&$!==null){switch($.$$typeof){case tu:return $.key===P?u(p,g,$,S):null;case Zo:return $.key===P?d(p,g,$,S):null;case Br:return P=$._init,m(p,g,P($._payload),S)}if(ks($)||rs($))return P!==null?null:f(p,g,$,S,null);fu(p,$)}return null}function b(p,g,$,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get($)||null,l(g,p,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case tu:return p=p.get(S.key===null?$:S.key)||null,u(g,p,S,P);case Zo:return p=p.get(S.key===null?$:S.key)||null,d(g,p,S,P);case Br:var N=S._init;return b(p,g,$,N(S._payload),P)}if(ks(S)||rs(S))return p=p.get($)||null,f(g,p,S,P,null);fu(g,S)}return null}function v(p,g,$,S){for(var P=null,N=null,T=g,R=g=0,W=null;T!==null&&R<$.length;R++){T.index>R?(W=T,T=null):W=T.sibling;var L=m(p,T,$[R],S);if(L===null){T===null&&(T=W);break}e&&T&&L.alternate===null&&t(p,T),g=o(L,g,R),N===null?P=L:N.sibling=L,N=L,T=W}if(R===$.length)return n(p,T),Ye&&zi(p,R),P;if(T===null){for(;R<$.length;R++)T=h(p,$[R],S),T!==null&&(g=o(T,g,R),N===null?P=T:N.sibling=T,N=T);return Ye&&zi(p,R),P}for(T=r(p,T);R<$.length;R++)W=b(T,p,R,$[R],S),W!==null&&(e&&W.alternate!==null&&T.delete(W.key===null?R:W.key),g=o(W,g,R),N===null?P=W:N.sibling=W,N=W);return e&&T.forEach(function(se){return t(p,se)}),Ye&&zi(p,R),P}function w(p,g,$,S){var P=rs($);if(typeof P!="function")throw Error(Q(150));if($=P.call($),$==null)throw Error(Q(151));for(var N=P=null,T=g,R=g=0,W=null,L=$.next();T!==null&&!L.done;R++,L=$.next()){T.index>R?(W=T,T=null):W=T.sibling;var se=m(p,T,L.value,S);if(se===null){T===null&&(T=W);break}e&&T&&se.alternate===null&&t(p,T),g=o(se,g,R),N===null?P=se:N.sibling=se,N=se,T=W}if(L.done)return n(p,T),Ye&&zi(p,R),P;if(T===null){for(;!L.done;R++,L=$.next())L=h(p,L.value,S),L!==null&&(g=o(L,g,R),N===null?P=L:N.sibling=L,N=L);return Ye&&zi(p,R),P}for(T=r(p,T);!L.done;R++,L=$.next())L=b(T,p,R,L.value,S),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?R:L.key),g=o(L,g,R),N===null?P=L:N.sibling=L,N=L);return e&&T.forEach(function(M){return t(p,M)}),Ye&&zi(p,R),P}function x(p,g,$,S){if(typeof $=="object"&&$!==null&&$.type===Jo&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case tu:e:{for(var P=$.key,N=g;N!==null;){if(N.key===P){if(P=$.type,P===Jo){if(N.tag===7){n(p,N.sibling),g=i(N,$.props.children),g.return=p,p=g;break e}}else if(N.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Br&&f2(P)===N.type){n(p,N.sibling),g=i(N,$.props),g.ref=ls(p,N,$),g.return=p,p=g;break e}n(p,N);break}else t(p,N);N=N.sibling}$.type===Jo?(g=Xi($.props.children,p.mode,S,$.key),g.return=p,p=g):(S=Ju($.type,$.key,$.props,null,p.mode,S),S.ref=ls(p,g,$),S.return=p,p=S)}return a(p);case Zo:e:{for(N=$.key;g!==null;){if(g.key===N)if(g.tag===4&&g.stateNode.containerInfo===$.containerInfo&&g.stateNode.implementation===$.implementation){n(p,g.sibling),g=i(g,$.children||[]),g.return=p,p=g;break e}else{n(p,g);break}else t(p,g);g=g.sibling}g=gh($,p.mode,S),g.return=p,p=g}return a(p);case Br:return N=$._init,x(p,g,N($._payload),S)}if(ks($))return v(p,g,$,S);if(rs($))return w(p,g,$,S);fu(p,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,g!==null&&g.tag===6?(n(p,g.sibling),g=i(g,$),g.return=p,p=g):(n(p,g),g=ph($,p.mode,S),g.return=p,p=g),a(p)):n(p,g)}return x}var Ia=$$(!0),w$=$$(!1),kl={},Jn=wi(kl),rl=wi(kl),il=wi(kl);function qi(e){if(e===kl)throw Error(Q(174));return e}function Rg(e,t){switch(Me(il,t),Me(rl,e),Me(Jn,kl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pp(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pp(t,e)}ze(Jn),Me(Jn,t)}function Ta(){ze(Jn),ze(rl),ze(il)}function S$(e){qi(il.current);var t=qi(Jn.current),n=pp(t,e.type);t!==n&&(Me(rl,e),Me(Jn,n))}function Fg(e){rl.current===e&&(ze(Jn),ze(rl))}var qe=wi(0);function Fd(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var lh=[];function Dg(){for(var e=0;e<lh.length;e++)lh[e]._workInProgressVersionPrimary=null;lh.length=0}var qu=Er.ReactCurrentDispatcher,uh=Er.ReactCurrentBatchConfig,io=0,Ge=null,st=null,ft=null,Dd=!1,js=!1,ol=0,H6=0;function wt(){throw Error(Q(321))}function Mg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mn(e[n],t[n]))return!1;return!0}function jg(e,t,n,r,i,o){if(io=o,Ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qu.current=e===null||e.memoizedState===null?q6:G6,e=n(r,i),js){o=0;do{if(js=!1,ol=0,25<=o)throw Error(Q(301));o+=1,ft=st=null,t.updateQueue=null,qu.current=Q6,e=n(r,i)}while(js)}if(qu.current=Md,t=st!==null&&st.next!==null,io=0,ft=st=Ge=null,Dd=!1,t)throw Error(Q(300));return e}function Lg(){var e=ol!==0;return ol=0,e}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Ge.memoizedState=ft=e:ft=ft.next=e,ft}function mn(){if(st===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=st.next;var t=ft===null?Ge.memoizedState:ft.next;if(t!==null)ft=t,st=e;else{if(e===null)throw Error(Q(310));st=e,e={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},ft===null?Ge.memoizedState=ft=e:ft=ft.next=e}return ft}function al(e,t){return typeof t=="function"?t(e):t}function dh(e){var t=mn(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var r=st,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,u=null,d=o;do{var f=d.lane;if((io&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=h,a=r):u=u.next=h,Ge.lanes|=f,oo|=f}d=d.next}while(d!==null&&d!==o);u===null?a=r:u.next=l,Mn(r,t.memoizedState)||(Ut=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ge.lanes|=o,oo|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ch(e){var t=mn(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Mn(o,t.memoizedState)||(Ut=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function C$(){}function P$(e,t){var n=Ge,r=mn(),i=t(),o=!Mn(r.memoizedState,i);if(o&&(r.memoizedState=i,Ut=!0),r=r.queue,zg(k$.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ft!==null&&ft.memoizedState.tag&1){if(n.flags|=2048,sl(9,_$.bind(null,n,r,i,t),void 0,null),ht===null)throw Error(Q(349));io&30||O$(n,t,i)}return i}function O$(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _$(e,t,n,r){t.value=n,t.getSnapshot=r,N$(t)&&E$(e)}function k$(e,t,n){return n(function(){N$(t)&&E$(e)})}function N$(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mn(e,n)}catch{return!0}}function E$(e){var t=Pr(e,1);t!==null&&Fn(t,e,1,-1)}function h2(e){var t=Vn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:al,lastRenderedState:e},t.queue=e,e=e.dispatch=V6.bind(null,Ge,e),[t.memoizedState,e]}function sl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function I$(){return mn().memoizedState}function Gu(e,t,n,r){var i=Vn();Ge.flags|=e,i.memoizedState=sl(1|t,n,void 0,r===void 0?null:r)}function Tc(e,t,n,r){var i=mn();r=r===void 0?null:r;var o=void 0;if(st!==null){var a=st.memoizedState;if(o=a.destroy,r!==null&&Mg(r,a.deps)){i.memoizedState=sl(t,n,o,r);return}}Ge.flags|=e,i.memoizedState=sl(1|t,n,o,r)}function p2(e,t){return Gu(8390656,8,e,t)}function zg(e,t){return Tc(2048,8,e,t)}function T$(e,t){return Tc(4,2,e,t)}function A$(e,t){return Tc(4,4,e,t)}function R$(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function F$(e,t,n){return n=n!=null?n.concat([e]):null,Tc(4,4,R$.bind(null,t,e),n)}function Ug(){}function D$(e,t){var n=mn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mg(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function M$(e,t){var n=mn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mg(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function j$(e,t,n){return io&21?(Mn(n,t)||(n=Ub(),Ge.lanes|=n,oo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ut=!0),e.memoizedState=n)}function W6(e,t){var n=Ee;Ee=n!==0&&4>n?n:4,e(!0);var r=uh.transition;uh.transition={};try{e(!1),t()}finally{Ee=n,uh.transition=r}}function L$(){return mn().memoizedState}function Y6(e,t,n){var r=ai(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},z$(e))U$(t,n);else if(n=y$(e,t,n,r),n!==null){var i=At();Fn(n,e,r,i),B$(n,t,r)}}function V6(e,t,n){var r=ai(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(z$(e))U$(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Mn(l,a)){var u=t.interleaved;u===null?(i.next=i,Tg(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=y$(e,t,i,r),n!==null&&(i=At(),Fn(n,e,r,i),B$(n,t,r))}}function z$(e){var t=e.alternate;return e===Ge||t!==null&&t===Ge}function U$(e,t){js=Dd=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function B$(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vg(e,n)}}var Md={readContext:gn,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},q6={readContext:gn,useCallback:function(e,t){return Vn().memoizedState=[e,t===void 0?null:t],e},useContext:gn,useEffect:p2,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Gu(4194308,4,R$.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gu(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gu(4,2,e,t)},useMemo:function(e,t){var n=Vn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Vn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Y6.bind(null,Ge,e),[r.memoizedState,e]},useRef:function(e){var t=Vn();return e={current:e},t.memoizedState=e},useState:h2,useDebugValue:Ug,useDeferredValue:function(e){return Vn().memoizedState=e},useTransition:function(){var e=h2(!1),t=e[0];return e=W6.bind(null,e[1]),Vn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ge,i=Vn();if(Ye){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),ht===null)throw Error(Q(349));io&30||O$(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,p2(k$.bind(null,r,o,e),[e]),r.flags|=2048,sl(9,_$.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Vn(),t=ht.identifierPrefix;if(Ye){var n=mr,r=gr;n=(r&~(1<<32-Rn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ol++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=H6++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},G6={readContext:gn,useCallback:D$,useContext:gn,useEffect:zg,useImperativeHandle:F$,useInsertionEffect:T$,useLayoutEffect:A$,useMemo:M$,useReducer:dh,useRef:I$,useState:function(){return dh(al)},useDebugValue:Ug,useDeferredValue:function(e){var t=mn();return j$(t,st.memoizedState,e)},useTransition:function(){var e=dh(al)[0],t=mn().memoizedState;return[e,t]},useMutableSource:C$,useSyncExternalStore:P$,useId:L$,unstable_isNewReconciler:!1},Q6={readContext:gn,useCallback:D$,useContext:gn,useEffect:zg,useImperativeHandle:F$,useInsertionEffect:T$,useLayoutEffect:A$,useMemo:M$,useReducer:ch,useRef:I$,useState:function(){return ch(al)},useDebugValue:Ug,useDeferredValue:function(e){var t=mn();return st===null?t.memoizedState=e:j$(t,st.memoizedState,e)},useTransition:function(){var e=ch(al)[0],t=mn().memoizedState;return[e,t]},useMutableSource:C$,useSyncExternalStore:P$,useId:L$,unstable_isNewReconciler:!1};function Aa(e,t){try{var n="",r=t;do n+=S8(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function fh(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Mp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var K6=typeof WeakMap=="function"?WeakMap:Map;function H$(e,t,n){n=br(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ld||(Ld=!0,qp=r),Mp(e,t)},n}function W$(e,t,n){n=br(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Mp(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Mp(e,t),typeof r!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function g2(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new K6;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=d7.bind(null,e,t,n),t.then(e,e))}function m2(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function y2(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=br(-1,1),t.tag=2,ii(n,t,1))),n.lanes|=1),e)}var Z6=Er.ReactCurrentOwner,Ut=!1;function It(e,t,n,r){t.child=e===null?w$(t,null,n,r):Ia(t,e.child,n,r)}function v2(e,t,n,r,i){n=n.render;var o=t.ref;return va(t,i),r=jg(e,t,n,r,o,i),n=Lg(),e!==null&&!Ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Or(e,t,i)):(Ye&&n&&Og(t),t.flags|=1,It(e,t,r,i),t.child)}function x2(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Qg(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Y$(e,t,o,r,i)):(e=Ju(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Xs,n(a,r)&&e.ref===t.ref)return Or(e,t,i)}return t.flags|=1,e=si(o,r),e.ref=t.ref,e.return=t,t.child=e}function Y$(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Xs(o,r)&&e.ref===t.ref)if(Ut=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ut=!0);else return t.lanes=e.lanes,Or(e,t,i)}return jp(e,t,n,r,i)}function V$(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(la,Yt),Yt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(la,Yt),Yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Me(la,Yt),Yt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Me(la,Yt),Yt|=r;return It(e,t,i,n),t.child}function q$(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jp(e,t,n,r,i){var o=Ht(n)?no:kt.current;return o=Na(t,o),va(t,i),n=jg(e,t,n,r,o,i),r=Lg(),e!==null&&!Ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Or(e,t,i)):(Ye&&r&&Og(t),t.flags|=1,It(e,t,n,i),t.child)}function b2(e,t,n,r,i){if(Ht(n)){var o=!0;Nd(t)}else o=!1;if(va(t,i),t.stateNode===null)Qu(e,t),b$(t,n,r),Dp(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=gn(d):(d=Ht(n)?no:kt.current,d=Na(t,d));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==d)&&c2(t,a,r,d),Hr=!1;var m=t.memoizedState;a.state=m,Rd(t,r,a,i),u=t.memoizedState,l!==r||m!==u||Bt.current||Hr?(typeof f=="function"&&(Fp(t,n,f,r),u=t.memoizedState),(l=Hr||d2(t,n,l,r,m,u,d))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,v$(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:kn(t.type,l),a.props=d,h=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=gn(u):(u=Ht(n)?no:kt.current,u=Na(t,u));var b=n.getDerivedStateFromProps;(f=typeof b=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||m!==u)&&c2(t,a,r,u),Hr=!1,m=t.memoizedState,a.state=m,Rd(t,r,a,i);var v=t.memoizedState;l!==h||m!==v||Bt.current||Hr?(typeof b=="function"&&(Fp(t,n,b,r),v=t.memoizedState),(d=Hr||d2(t,n,d,r,m,v,u)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Lp(e,t,n,r,o,i)}function Lp(e,t,n,r,i,o){q$(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&o2(t,n,!1),Or(e,t,o);r=t.stateNode,Z6.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ia(t,e.child,null,o),t.child=Ia(t,null,l,o)):It(e,t,l,o),t.memoizedState=r.state,i&&o2(t,n,!0),t.child}function G$(e){var t=e.stateNode;t.pendingContext?i2(e,t.pendingContext,t.pendingContext!==t.context):t.context&&i2(e,t.context,!1),Rg(e,t.containerInfo)}function $2(e,t,n,r,i){return Ea(),kg(i),t.flags|=256,It(e,t,n,r),t.child}var zp={dehydrated:null,treeContext:null,retryLane:0};function Up(e){return{baseLanes:e,cachePool:null,transitions:null}}function Q$(e,t,n){var r=t.pendingProps,i=qe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Me(qe,i&1),e===null)return Ap(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Fc(a,r,0,null),e=Xi(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Up(n),t.memoizedState=zp,e):Bg(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return J6(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=si(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=si(l,o):(o=Xi(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Up(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=zp,r}return o=e.child,e=o.sibling,r=si(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Bg(e,t){return t=Fc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hu(e,t,n,r){return r!==null&&kg(r),Ia(t,e.child,null,n),e=Bg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function J6(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=fh(Error(Q(422))),hu(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Fc({mode:"visible",children:r.children},i,0,null),o=Xi(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ia(t,e.child,null,a),t.child.memoizedState=Up(a),t.memoizedState=zp,o);if(!(t.mode&1))return hu(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(Q(419)),r=fh(o,r,void 0),hu(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ut||l){if(r=ht,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Pr(e,i),Fn(r,e,i,-1))}return Gg(),r=fh(Error(Q(421))),hu(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=c7.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Gt=ri(i.nextSibling),Qt=t,Ye=!0,En=null,e!==null&&(ln[un++]=gr,ln[un++]=mr,ln[un++]=ro,gr=e.id,mr=e.overflow,ro=t),t=Bg(t,r.children),t.flags|=4096,t)}function w2(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Rp(e.return,t,n)}function hh(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function K$(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(It(e,t,r.children,n),r=qe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&w2(e,n,t);else if(e.tag===19)w2(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Me(qe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Fd(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),hh(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fd(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}hh(t,!0,n,null,o);break;case"together":hh(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Or(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),oo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=si(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=si(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function X6(e,t,n){switch(t.tag){case 3:G$(t),Ea();break;case 5:S$(t);break;case 1:Ht(t.type)&&Nd(t);break;case 4:Rg(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Me(Td,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Me(qe,qe.current&1),t.flags|=128,null):n&t.child.childLanes?Q$(e,t,n):(Me(qe,qe.current&1),e=Or(e,t,n),e!==null?e.sibling:null);Me(qe,qe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return K$(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(qe,qe.current),r)break;return null;case 22:case 23:return t.lanes=0,V$(e,t,n)}return Or(e,t,n)}var Z$,Bp,J$,X$;Z$=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bp=function(){};J$=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,qi(Jn.current);var o=null;switch(n){case"input":i=dp(e,i),r=dp(e,r),o=[];break;case"select":i=Qe({},i,{value:void 0}),r=Qe({},r,{value:void 0}),o=[];break;case"textarea":i=hp(e,i),r=hp(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=_d)}gp(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Vs.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Vs.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&je("scroll",e),o||l===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};X$=function(e,t,n,r){n!==r&&(t.flags|=4)};function us(e,t){if(!Ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function St(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function e7(e,t,n){var r=t.pendingProps;switch(_g(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(t),null;case 1:return Ht(t.type)&&kd(),St(t),null;case 3:return r=t.stateNode,Ta(),ze(Bt),ze(kt),Dg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(cu(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,En!==null&&(Kp(En),En=null))),Bp(e,t),St(t),null;case 5:Fg(t);var i=qi(il.current);if(n=t.type,e!==null&&t.stateNode!=null)J$(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Q(166));return St(t),null}if(e=qi(Jn.current),cu(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[qn]=t,r[nl]=o,e=(t.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<Es.length;i++)je(Es[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":Iy(r,o),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},je("invalid",r);break;case"textarea":Ay(r,o),je("invalid",r)}gp(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&du(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&du(r.textContent,l,e),i=["children",""+l]):Vs.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&je("scroll",r)}switch(n){case"input":nu(r),Ty(r,o,!0);break;case"textarea":nu(r),Ry(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=_d)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ob(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[qn]=t,e[nl]=r,Z$(e,t,!1,!1),t.stateNode=e;e:{switch(a=mp(n,r),n){case"dialog":je("cancel",e),je("close",e),i=r;break;case"iframe":case"object":case"embed":je("load",e),i=r;break;case"video":case"audio":for(i=0;i<Es.length;i++)je(Es[i],e);i=r;break;case"source":je("error",e),i=r;break;case"img":case"image":case"link":je("error",e),je("load",e),i=r;break;case"details":je("toggle",e),i=r;break;case"input":Iy(e,r),i=dp(e,r),je("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Qe({},r,{value:void 0}),je("invalid",e);break;case"textarea":Ay(e,r),i=hp(e,r),je("invalid",e);break;default:i=r}gp(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?Nb(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&_b(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&qs(e,u):typeof u=="number"&&qs(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vs.hasOwnProperty(o)?u!=null&&o==="onScroll"&&je("scroll",e):u!=null&&fg(e,o,u,a))}switch(n){case"input":nu(e),Ty(e,r,!1);break;case"textarea":nu(e),Ry(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gi(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?pa(e,!!r.multiple,o,!1):r.defaultValue!=null&&pa(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=_d)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return St(t),null;case 6:if(e&&t.stateNode!=null)X$(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Q(166));if(n=qi(il.current),qi(Jn.current),cu(t)){if(r=t.stateNode,n=t.memoizedProps,r[qn]=t,(o=r.nodeValue!==n)&&(e=Qt,e!==null))switch(e.tag){case 3:du(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&du(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qn]=t,t.stateNode=r}return St(t),null;case 13:if(ze(qe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ye&&Gt!==null&&t.mode&1&&!(t.flags&128))m$(),Ea(),t.flags|=98560,o=!1;else if(o=cu(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(Q(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Q(317));o[qn]=t}else Ea(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;St(t),o=!1}else En!==null&&(Kp(En),En=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||qe.current&1?lt===0&&(lt=3):Gg())),t.updateQueue!==null&&(t.flags|=4),St(t),null);case 4:return Ta(),Bp(e,t),e===null&&el(t.stateNode.containerInfo),St(t),null;case 10:return Ig(t.type._context),St(t),null;case 17:return Ht(t.type)&&kd(),St(t),null;case 19:if(ze(qe),o=t.memoizedState,o===null)return St(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)us(o,!1);else{if(lt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Fd(e),a!==null){for(t.flags|=128,us(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Me(qe,qe.current&1|2),t.child}e=e.sibling}o.tail!==null&&tt()>Ra&&(t.flags|=128,r=!0,us(o,!1),t.lanes=4194304)}else{if(!r)if(e=Fd(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),us(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Ye)return St(t),null}else 2*tt()-o.renderingStartTime>Ra&&n!==1073741824&&(t.flags|=128,r=!0,us(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=tt(),t.sibling=null,n=qe.current,Me(qe,r?n&1|2:n&1),t):(St(t),null);case 22:case 23:return qg(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Yt&1073741824&&(St(t),t.subtreeFlags&6&&(t.flags|=8192)):St(t),null;case 24:return null;case 25:return null}throw Error(Q(156,t.tag))}function t7(e,t){switch(_g(t),t.tag){case 1:return Ht(t.type)&&kd(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ta(),ze(Bt),ze(kt),Dg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fg(t),null;case 13:if(ze(qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));Ea()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(qe),null;case 4:return Ta(),null;case 10:return Ig(t.type._context),null;case 22:case 23:return qg(),null;case 24:return null;default:return null}}var pu=!1,Pt=!1,n7=typeof WeakSet=="function"?WeakSet:Set,de=null;function sa(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ze(e,t,r)}else n.current=null}function Hp(e,t,n){try{n()}catch(r){Ze(e,t,r)}}var S2=!1;function r7(e,t){if(Op=Cd,e=r$(),Pg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,d=0,f=0,h=e,m=null;t:for(;;){for(var b;h!==n||i!==0&&h.nodeType!==3||(l=a+i),h!==o||r!==0&&h.nodeType!==3||(u=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(b=h.firstChild)!==null;)m=h,h=b;for(;;){if(h===e)break t;if(m===n&&++d===i&&(l=a),m===o&&++f===r&&(u=a),(b=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=b}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(_p={focusedElem:e,selectionRange:n},Cd=!1,de=t;de!==null;)if(t=de,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,de=e;else for(;de!==null;){t=de;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,x=v.memoizedState,p=t.stateNode,g=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:kn(t.type,w),x);p.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var $=t.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(S){Ze(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,de=e;break}de=t.return}return v=S2,S2=!1,v}function Ls(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Hp(t,n,o)}i=i.next}while(i!==r)}}function Ac(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function e4(e){var t=e.alternate;t!==null&&(e.alternate=null,e4(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qn],delete t[nl],delete t[Ep],delete t[L6],delete t[z6])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function t4(e){return e.tag===5||e.tag===3||e.tag===4}function C2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||t4(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_d));else if(r!==4&&(e=e.child,e!==null))for(Yp(e,t,n),e=e.sibling;e!==null;)Yp(e,t,n),e=e.sibling}function Vp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vp(e,t,n),e=e.sibling;e!==null;)Vp(e,t,n),e=e.sibling}var vt=null,Nn=!1;function Dr(e,t,n){for(n=n.child;n!==null;)n4(e,t,n),n=n.sibling}function n4(e,t,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(Pc,n)}catch{}switch(n.tag){case 5:Pt||sa(n,t);case 6:var r=vt,i=Nn;vt=null,Dr(e,t,n),vt=r,Nn=i,vt!==null&&(Nn?(e=vt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):vt.removeChild(n.stateNode));break;case 18:vt!==null&&(Nn?(e=vt,n=n.stateNode,e.nodeType===8?ah(e.parentNode,n):e.nodeType===1&&ah(e,n),Zs(e)):ah(vt,n.stateNode));break;case 4:r=vt,i=Nn,vt=n.stateNode.containerInfo,Nn=!0,Dr(e,t,n),vt=r,Nn=i;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Hp(n,t,a),i=i.next}while(i!==r)}Dr(e,t,n);break;case 1:if(!Pt&&(sa(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ze(n,t,l)}Dr(e,t,n);break;case 21:Dr(e,t,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,Dr(e,t,n),Pt=r):Dr(e,t,n);break;default:Dr(e,t,n)}}function P2(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new n7),t.forEach(function(r){var i=f7.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $n(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:vt=l.stateNode,Nn=!1;break e;case 3:vt=l.stateNode.containerInfo,Nn=!0;break e;case 4:vt=l.stateNode.containerInfo,Nn=!0;break e}l=l.return}if(vt===null)throw Error(Q(160));n4(o,a,i),vt=null,Nn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){Ze(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)r4(t,e),t=t.sibling}function r4(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($n(t,e),Bn(e),r&4){try{Ls(3,e,e.return),Ac(3,e)}catch(w){Ze(e,e.return,w)}try{Ls(5,e,e.return)}catch(w){Ze(e,e.return,w)}}break;case 1:$n(t,e),Bn(e),r&512&&n!==null&&sa(n,n.return);break;case 5:if($n(t,e),Bn(e),r&512&&n!==null&&sa(n,n.return),e.flags&32){var i=e.stateNode;try{qs(i,"")}catch(w){Ze(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Cb(i,o),mp(l,a);var d=mp(l,o);for(a=0;a<u.length;a+=2){var f=u[a],h=u[a+1];f==="style"?Nb(i,h):f==="dangerouslySetInnerHTML"?_b(i,h):f==="children"?qs(i,h):fg(i,f,h,d)}switch(l){case"input":cp(i,o);break;case"textarea":Pb(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var b=o.value;b!=null?pa(i,!!o.multiple,b,!1):m!==!!o.multiple&&(o.defaultValue!=null?pa(i,!!o.multiple,o.defaultValue,!0):pa(i,!!o.multiple,o.multiple?[]:"",!1))}i[nl]=o}catch(w){Ze(e,e.return,w)}}break;case 6:if($n(t,e),Bn(e),r&4){if(e.stateNode===null)throw Error(Q(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Ze(e,e.return,w)}}break;case 3:if($n(t,e),Bn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zs(t.containerInfo)}catch(w){Ze(e,e.return,w)}break;case 4:$n(t,e),Bn(e);break;case 13:$n(t,e),Bn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Yg=tt())),r&4&&P2(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Pt=(d=Pt)||f,$n(t,e),Pt=d):$n(t,e),Bn(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(de=e,f=e.child;f!==null;){for(h=de=f;de!==null;){switch(m=de,b=m.child,m.tag){case 0:case 11:case 14:case 15:Ls(4,m,m.return);break;case 1:sa(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){Ze(r,n,w)}}break;case 5:sa(m,m.return);break;case 22:if(m.memoizedState!==null){_2(h);continue}}b!==null?(b.return=m,de=b):_2(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,u=h.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=kb("display",a))}catch(w){Ze(e,e.return,w)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(w){Ze(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:$n(t,e),Bn(e),r&4&&P2(e);break;case 21:break;default:$n(t,e),Bn(e)}}function Bn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(t4(n)){var r=n;break e}n=n.return}throw Error(Q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qs(i,""),r.flags&=-33);var o=C2(e);Vp(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=C2(e);Yp(e,l,a);break;default:throw Error(Q(161))}}catch(u){Ze(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function i7(e,t,n){de=e,i4(e)}function i4(e,t,n){for(var r=(e.mode&1)!==0;de!==null;){var i=de,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||pu;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Pt;l=pu;var d=Pt;if(pu=a,(Pt=u)&&!d)for(de=i;de!==null;)a=de,u=a.child,a.tag===22&&a.memoizedState!==null?k2(i):u!==null?(u.return=a,de=u):k2(i);for(;o!==null;)de=o,i4(o),o=o.sibling;de=i,pu=l,Pt=d}O2(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,de=o):O2(e)}}function O2(e){for(;de!==null;){var t=de;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pt||Ac(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&u2(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}u2(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Zs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}Pt||t.flags&512&&Wp(t)}catch(m){Ze(t,t.return,m)}}if(t===e){de=null;break}if(n=t.sibling,n!==null){n.return=t.return,de=n;break}de=t.return}}function _2(e){for(;de!==null;){var t=de;if(t===e){de=null;break}var n=t.sibling;if(n!==null){n.return=t.return,de=n;break}de=t.return}}function k2(e){for(;de!==null;){var t=de;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ac(4,t)}catch(u){Ze(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Ze(t,i,u)}}var o=t.return;try{Wp(t)}catch(u){Ze(t,o,u)}break;case 5:var a=t.return;try{Wp(t)}catch(u){Ze(t,a,u)}}}catch(u){Ze(t,t.return,u)}if(t===e){de=null;break}var l=t.sibling;if(l!==null){l.return=t.return,de=l;break}de=t.return}}var o7=Math.ceil,jd=Er.ReactCurrentDispatcher,Hg=Er.ReactCurrentOwner,pn=Er.ReactCurrentBatchConfig,Ce=0,ht=null,ot=null,xt=0,Yt=0,la=wi(0),lt=0,ll=null,oo=0,Rc=0,Wg=0,zs=null,zt=null,Yg=0,Ra=1/0,dr=null,Ld=!1,qp=null,oi=null,gu=!1,Qr=null,zd=0,Us=0,Gp=null,Ku=-1,Zu=0;function At(){return Ce&6?tt():Ku!==-1?Ku:Ku=tt()}function ai(e){return e.mode&1?Ce&2&&xt!==0?xt&-xt:B6.transition!==null?(Zu===0&&(Zu=Ub()),Zu):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:Gb(e.type)),e):1}function Fn(e,t,n,r){if(50<Us)throw Us=0,Gp=null,Error(Q(185));Pl(e,n,r),(!(Ce&2)||e!==ht)&&(e===ht&&(!(Ce&2)&&(Rc|=n),lt===4&&Vr(e,xt)),Wt(e,r),n===1&&Ce===0&&!(t.mode&1)&&(Ra=tt()+500,Ec&&Si()))}function Wt(e,t){var n=e.callbackNode;B8(e,t);var r=Sd(e,e===ht?xt:0);if(r===0)n!==null&&My(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&My(n),t===1)e.tag===0?U6(N2.bind(null,e)):h$(N2.bind(null,e)),M6(function(){!(Ce&6)&&Si()}),n=null;else{switch(Bb(r)){case 1:n=yg;break;case 4:n=Lb;break;case 16:n=wd;break;case 536870912:n=zb;break;default:n=wd}n=f4(n,o4.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function o4(e,t){if(Ku=-1,Zu=0,Ce&6)throw Error(Q(327));var n=e.callbackNode;if(xa()&&e.callbackNode!==n)return null;var r=Sd(e,e===ht?xt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ud(e,r);else{t=r;var i=Ce;Ce|=2;var o=s4();(ht!==e||xt!==t)&&(dr=null,Ra=tt()+500,Ji(e,t));do try{l7();break}catch(l){a4(e,l)}while(1);Eg(),jd.current=o,Ce=i,ot!==null?t=0:(ht=null,xt=0,t=lt)}if(t!==0){if(t===2&&(i=$p(e),i!==0&&(r=i,t=Qp(e,i))),t===1)throw n=ll,Ji(e,0),Vr(e,r),Wt(e,tt()),n;if(t===6)Vr(e,r);else{if(i=e.current.alternate,!(r&30)&&!a7(i)&&(t=Ud(e,r),t===2&&(o=$p(e),o!==0&&(r=o,t=Qp(e,o))),t===1))throw n=ll,Ji(e,0),Vr(e,r),Wt(e,tt()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(Q(345));case 2:Ui(e,zt,dr);break;case 3:if(Vr(e,r),(r&130023424)===r&&(t=Yg+500-tt(),10<t)){if(Sd(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){At(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Np(Ui.bind(null,e,zt,dr),t);break}Ui(e,zt,dr);break;case 4:if(Vr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Rn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=tt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*o7(r/1960))-r,10<r){e.timeoutHandle=Np(Ui.bind(null,e,zt,dr),r);break}Ui(e,zt,dr);break;case 5:Ui(e,zt,dr);break;default:throw Error(Q(329))}}}return Wt(e,tt()),e.callbackNode===n?o4.bind(null,e):null}function Qp(e,t){var n=zs;return e.current.memoizedState.isDehydrated&&(Ji(e,t).flags|=256),e=Ud(e,t),e!==2&&(t=zt,zt=n,t!==null&&Kp(t)),e}function Kp(e){zt===null?zt=e:zt.push.apply(zt,e)}function a7(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Mn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vr(e,t){for(t&=~Wg,t&=~Rc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rn(t),r=1<<n;e[n]=-1,t&=~r}}function N2(e){if(Ce&6)throw Error(Q(327));xa();var t=Sd(e,0);if(!(t&1))return Wt(e,tt()),null;var n=Ud(e,t);if(e.tag!==0&&n===2){var r=$p(e);r!==0&&(t=r,n=Qp(e,r))}if(n===1)throw n=ll,Ji(e,0),Vr(e,t),Wt(e,tt()),n;if(n===6)throw Error(Q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ui(e,zt,dr),Wt(e,tt()),null}function Vg(e,t){var n=Ce;Ce|=1;try{return e(t)}finally{Ce=n,Ce===0&&(Ra=tt()+500,Ec&&Si())}}function ao(e){Qr!==null&&Qr.tag===0&&!(Ce&6)&&xa();var t=Ce;Ce|=1;var n=pn.transition,r=Ee;try{if(pn.transition=null,Ee=1,e)return e()}finally{Ee=r,pn.transition=n,Ce=t,!(Ce&6)&&Si()}}function qg(){Yt=la.current,ze(la)}function Ji(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,D6(n)),ot!==null)for(n=ot.return;n!==null;){var r=n;switch(_g(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&kd();break;case 3:Ta(),ze(Bt),ze(kt),Dg();break;case 5:Fg(r);break;case 4:Ta();break;case 13:ze(qe);break;case 19:ze(qe);break;case 10:Ig(r.type._context);break;case 22:case 23:qg()}n=n.return}if(ht=e,ot=e=si(e.current,null),xt=Yt=t,lt=0,ll=null,Wg=Rc=oo=0,zt=zs=null,Vi!==null){for(t=0;t<Vi.length;t++)if(n=Vi[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Vi=null}return e}function a4(e,t){do{var n=ot;try{if(Eg(),qu.current=Md,Dd){for(var r=Ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Dd=!1}if(io=0,ft=st=Ge=null,js=!1,ol=0,Hg.current=null,n===null||n.return===null){lt=1,ll=t,ot=null;break}e:{var o=e,a=n.return,l=n,u=t;if(t=xt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var b=m2(a);if(b!==null){b.flags&=-257,y2(b,a,l,o,t),b.mode&1&&g2(o,d,t),t=b,u=d;var v=t.updateQueue;if(v===null){var w=new Set;w.add(u),t.updateQueue=w}else v.add(u);break e}else{if(!(t&1)){g2(o,d,t),Gg();break e}u=Error(Q(426))}}else if(Ye&&l.mode&1){var x=m2(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),y2(x,a,l,o,t),kg(Aa(u,l));break e}}o=u=Aa(u,l),lt!==4&&(lt=2),zs===null?zs=[o]:zs.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=H$(o,u,t);l2(o,p);break e;case 1:l=u;var g=o.type,$=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(oi===null||!oi.has($)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=W$(o,l,t);l2(o,S);break e}}o=o.return}while(o!==null)}u4(n)}catch(P){t=P,ot===n&&n!==null&&(ot=n=n.return);continue}break}while(1)}function s4(){var e=jd.current;return jd.current=Md,e===null?Md:e}function Gg(){(lt===0||lt===3||lt===2)&&(lt=4),ht===null||!(oo&268435455)&&!(Rc&268435455)||Vr(ht,xt)}function Ud(e,t){var n=Ce;Ce|=2;var r=s4();(ht!==e||xt!==t)&&(dr=null,Ji(e,t));do try{s7();break}catch(i){a4(e,i)}while(1);if(Eg(),Ce=n,jd.current=r,ot!==null)throw Error(Q(261));return ht=null,xt=0,lt}function s7(){for(;ot!==null;)l4(ot)}function l7(){for(;ot!==null&&!A8();)l4(ot)}function l4(e){var t=c4(e.alternate,e,Yt);e.memoizedProps=e.pendingProps,t===null?u4(e):ot=t,Hg.current=null}function u4(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=t7(n,t),n!==null){n.flags&=32767,ot=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{lt=6,ot=null;return}}else if(n=e7(n,t,Yt),n!==null){ot=n;return}if(t=t.sibling,t!==null){ot=t;return}ot=t=e}while(t!==null);lt===0&&(lt=5)}function Ui(e,t,n){var r=Ee,i=pn.transition;try{pn.transition=null,Ee=1,u7(e,t,n,r)}finally{pn.transition=i,Ee=r}return null}function u7(e,t,n,r){do xa();while(Qr!==null);if(Ce&6)throw Error(Q(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Q(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(H8(e,o),e===ht&&(ot=ht=null,xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gu||(gu=!0,f4(wd,function(){return xa(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=pn.transition,pn.transition=null;var a=Ee;Ee=1;var l=Ce;Ce|=4,Hg.current=null,r7(e,n),r4(n,e),N6(_p),Cd=!!Op,_p=Op=null,e.current=n,i7(n),R8(),Ce=l,Ee=a,pn.transition=o}else e.current=n;if(gu&&(gu=!1,Qr=e,zd=i),o=e.pendingLanes,o===0&&(oi=null),M8(n.stateNode),Wt(e,tt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ld)throw Ld=!1,e=qp,qp=null,e;return zd&1&&e.tag!==0&&xa(),o=e.pendingLanes,o&1?e===Gp?Us++:(Us=0,Gp=e):Us=0,Si(),null}function xa(){if(Qr!==null){var e=Bb(zd),t=pn.transition,n=Ee;try{if(pn.transition=null,Ee=16>e?16:e,Qr===null)var r=!1;else{if(e=Qr,Qr=null,zd=0,Ce&6)throw Error(Q(331));var i=Ce;for(Ce|=4,de=e.current;de!==null;){var o=de,a=o.child;if(de.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(de=d;de!==null;){var f=de;switch(f.tag){case 0:case 11:case 15:Ls(8,f,o)}var h=f.child;if(h!==null)h.return=f,de=h;else for(;de!==null;){f=de;var m=f.sibling,b=f.return;if(e4(f),f===d){de=null;break}if(m!==null){m.return=b,de=m;break}de=b}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}de=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,de=a;else e:for(;de!==null;){if(o=de,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ls(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,de=p;break e}de=o.return}}var g=e.current;for(de=g;de!==null;){a=de;var $=a.child;if(a.subtreeFlags&2064&&$!==null)$.return=a,de=$;else e:for(a=g;de!==null;){if(l=de,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ac(9,l)}}catch(P){Ze(l,l.return,P)}if(l===a){de=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,de=S;break e}de=l.return}}if(Ce=i,Si(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(Pc,e)}catch{}r=!0}return r}finally{Ee=n,pn.transition=t}}return!1}function E2(e,t,n){t=Aa(n,t),t=H$(e,t,1),e=ii(e,t,1),t=At(),e!==null&&(Pl(e,1,t),Wt(e,t))}function Ze(e,t,n){if(e.tag===3)E2(e,e,n);else for(;t!==null;){if(t.tag===3){E2(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(oi===null||!oi.has(r))){e=Aa(n,e),e=W$(t,e,1),t=ii(t,e,1),e=At(),t!==null&&(Pl(t,1,e),Wt(t,e));break}}t=t.return}}function d7(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=At(),e.pingedLanes|=e.suspendedLanes&n,ht===e&&(xt&n)===n&&(lt===4||lt===3&&(xt&130023424)===xt&&500>tt()-Yg?Ji(e,0):Wg|=n),Wt(e,t)}function d4(e,t){t===0&&(e.mode&1?(t=ou,ou<<=1,!(ou&130023424)&&(ou=4194304)):t=1);var n=At();e=Pr(e,t),e!==null&&(Pl(e,t,n),Wt(e,n))}function c7(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),d4(e,n)}function f7(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Q(314))}r!==null&&r.delete(t),d4(e,n)}var c4;c4=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Bt.current)Ut=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ut=!1,X6(e,t,n);Ut=!!(e.flags&131072)}else Ut=!1,Ye&&t.flags&1048576&&p$(t,Id,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qu(e,t),e=t.pendingProps;var i=Na(t,kt.current);va(t,n),i=jg(null,t,r,e,i,n);var o=Lg();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ht(r)?(o=!0,Nd(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ag(t),i.updater=Ic,t.stateNode=i,i._reactInternals=t,Dp(t,r,e,n),t=Lp(null,t,r,!0,o,n)):(t.tag=0,Ye&&o&&Og(t),It(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qu(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=p7(r),e=kn(r,e),i){case 0:t=jp(null,t,r,e,n);break e;case 1:t=b2(null,t,r,e,n);break e;case 11:t=v2(null,t,r,e,n);break e;case 14:t=x2(null,t,r,kn(r.type,e),n);break e}throw Error(Q(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),jp(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),b2(e,t,r,i,n);case 3:e:{if(G$(t),e===null)throw Error(Q(387));r=t.pendingProps,o=t.memoizedState,i=o.element,v$(e,t),Rd(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Aa(Error(Q(423)),t),t=$2(e,t,r,n,i);break e}else if(r!==i){i=Aa(Error(Q(424)),t),t=$2(e,t,r,n,i);break e}else for(Gt=ri(t.stateNode.containerInfo.firstChild),Qt=t,Ye=!0,En=null,n=w$(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ea(),r===i){t=Or(e,t,n);break e}It(e,t,r,n)}t=t.child}return t;case 5:return S$(t),e===null&&Ap(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,kp(r,i)?a=null:o!==null&&kp(r,o)&&(t.flags|=32),q$(e,t),It(e,t,a,n),t.child;case 6:return e===null&&Ap(t),null;case 13:return Q$(e,t,n);case 4:return Rg(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ia(t,null,r,n):It(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),v2(e,t,r,i,n);case 7:return It(e,t,t.pendingProps,n),t.child;case 8:return It(e,t,t.pendingProps.children,n),t.child;case 12:return It(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Me(Td,r._currentValue),r._currentValue=a,o!==null)if(Mn(o.value,a)){if(o.children===i.children&&!Bt.current){t=Or(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=br(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Rp(o.return,n,t),l.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(Q(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Rp(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}It(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,va(t,n),i=gn(i),r=r(i),t.flags|=1,It(e,t,r,n),t.child;case 14:return r=t.type,i=kn(r,t.pendingProps),i=kn(r.type,i),x2(e,t,r,i,n);case 15:return Y$(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),Qu(e,t),t.tag=1,Ht(r)?(e=!0,Nd(t)):e=!1,va(t,n),b$(t,r,i),Dp(t,r,i,n),Lp(null,t,r,!0,e,n);case 19:return K$(e,t,n);case 22:return V$(e,t,n)}throw Error(Q(156,t.tag))};function f4(e,t){return jb(e,t)}function h7(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(e,t,n,r){return new h7(e,t,n,r)}function Qg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function p7(e){if(typeof e=="function")return Qg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pg)return 11;if(e===gg)return 14}return 2}function si(e,t){var n=e.alternate;return n===null?(n=fn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ju(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Qg(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Jo:return Xi(n.children,i,o,t);case hg:a=8,i|=8;break;case ap:return e=fn(12,n,t,i|2),e.elementType=ap,e.lanes=o,e;case sp:return e=fn(13,n,t,i),e.elementType=sp,e.lanes=o,e;case lp:return e=fn(19,n,t,i),e.elementType=lp,e.lanes=o,e;case $b:return Fc(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xb:a=10;break e;case bb:a=9;break e;case pg:a=11;break e;case gg:a=14;break e;case Br:a=16,r=null;break e}throw Error(Q(130,e==null?e:typeof e,""))}return t=fn(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Xi(e,t,n,r){return e=fn(7,e,r,t),e.lanes=n,e}function Fc(e,t,n,r){return e=fn(22,e,r,t),e.elementType=$b,e.lanes=n,e.stateNode={isHidden:!1},e}function ph(e,t,n){return e=fn(6,e,null,t),e.lanes=n,e}function gh(e,t,n){return t=fn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function g7(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qf(0),this.expirationTimes=Qf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kg(e,t,n,r,i,o,a,l,u){return e=new g7(e,t,n,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=fn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ag(o),e}function m7(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function h4(e){if(!e)return mi;e=e._reactInternals;e:{if(co(e)!==e||e.tag!==1)throw Error(Q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ht(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Q(171))}if(e.tag===1){var n=e.type;if(Ht(n))return f$(e,n,t)}return t}function p4(e,t,n,r,i,o,a,l,u){return e=Kg(n,r,!0,e,i,o,a,l,u),e.context=h4(null),n=e.current,r=At(),i=ai(n),o=br(r,i),o.callback=t??null,ii(n,o,i),e.current.lanes=i,Pl(e,i,r),Wt(e,r),e}function Dc(e,t,n,r){var i=t.current,o=At(),a=ai(i);return n=h4(n),t.context===null?t.context=n:t.pendingContext=n,t=br(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ii(i,t,a),e!==null&&(Fn(e,i,a,o),Vu(e,i,a)),a}function Bd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function I2(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zg(e,t){I2(e,t),(e=e.alternate)&&I2(e,t)}function y7(){return null}var g4=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jg(e){this._internalRoot=e}Mc.prototype.render=Jg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));Dc(e,t,null,null)};Mc.prototype.unmount=Jg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ao(function(){Dc(null,e,null,null)}),t[Cr]=null}};function Mc(e){this._internalRoot=e}Mc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yb();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yr.length&&t!==0&&t<Yr[n].priority;n++);Yr.splice(n,0,e),n===0&&qb(e)}};function Xg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function T2(){}function v7(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Bd(a);o.call(d)}}var a=p4(t,r,e,0,null,!1,!1,"",T2);return e._reactRootContainer=a,e[Cr]=a.current,el(e.nodeType===8?e.parentNode:e),ao(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Bd(u);l.call(d)}}var u=Kg(e,0,!1,null,null,!1,!1,"",T2);return e._reactRootContainer=u,e[Cr]=u.current,el(e.nodeType===8?e.parentNode:e),ao(function(){Dc(t,u,n,r)}),u}function Lc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var u=Bd(a);l.call(u)}}Dc(t,a,e,i)}else a=v7(n,t,e,i,r);return Bd(a)}Hb=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ns(t.pendingLanes);n!==0&&(vg(t,n|1),Wt(t,tt()),!(Ce&6)&&(Ra=tt()+500,Si()))}break;case 13:ao(function(){var r=Pr(e,1);if(r!==null){var i=At();Fn(r,e,1,i)}}),Zg(e,1)}};xg=function(e){if(e.tag===13){var t=Pr(e,134217728);if(t!==null){var n=At();Fn(t,e,134217728,n)}Zg(e,134217728)}};Wb=function(e){if(e.tag===13){var t=ai(e),n=Pr(e,t);if(n!==null){var r=At();Fn(n,e,t,r)}Zg(e,t)}};Yb=function(){return Ee};Vb=function(e,t){var n=Ee;try{return Ee=e,t()}finally{Ee=n}};vp=function(e,t,n){switch(t){case"input":if(cp(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Nc(r);if(!i)throw Error(Q(90));Sb(r),cp(r,i)}}}break;case"textarea":Pb(e,n);break;case"select":t=n.value,t!=null&&pa(e,!!n.multiple,t,!1)}};Tb=Vg;Ab=ao;var x7={usingClientEntryPoint:!1,Events:[_l,na,Nc,Eb,Ib,Vg]},ds={findFiberByHostInstance:Yi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},b7={bundleType:ds.bundleType,version:ds.version,rendererPackageName:ds.rendererPackageName,rendererConfig:ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Er.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Db(e),e===null?null:e.stateNode},findFiberByHostInstance:ds.findFiberByHostInstance||y7,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mu.isDisabled&&mu.supportsFiber)try{Pc=mu.inject(b7),Zn=mu}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x7;Jt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xg(t))throw Error(Q(200));return m7(e,t,null,n)};Jt.createRoot=function(e,t){if(!Xg(e))throw Error(Q(299));var n=!1,r="",i=g4;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Kg(e,1,!1,null,null,n,!1,r,i),e[Cr]=t.current,el(e.nodeType===8?e.parentNode:e),new Jg(t)};Jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=Db(t),e=e===null?null:e.stateNode,e};Jt.flushSync=function(e){return ao(e)};Jt.hydrate=function(e,t,n){if(!jc(t))throw Error(Q(200));return Lc(null,e,t,!0,n)};Jt.hydrateRoot=function(e,t,n){if(!Xg(e))throw Error(Q(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=g4;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=p4(t,null,e,1,n??null,i,!1,o,a),e[Cr]=t.current,el(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Mc(t)};Jt.render=function(e,t,n){if(!jc(t))throw Error(Q(200));return Lc(null,e,t,!1,n)};Jt.unmountComponentAtNode=function(e){if(!jc(e))throw Error(Q(40));return e._reactRootContainer?(ao(function(){Lc(null,null,e,!1,function(){e._reactRootContainer=null,e[Cr]=null})}),!0):!1};Jt.unstable_batchedUpdates=Vg;Jt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!jc(n))throw Error(Q(200));if(e==null||e._reactInternals===void 0)throw Error(Q(38));return Lc(e,t,n,!1,r)};Jt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Jt})(y8);var A2=vd;rp.createRoot=A2.createRoot,rp.hydrateRoot=A2.hydrateRoot;var Hd={},$7={get exports(){return Hd},set exports(e){Hd=e}},Fe={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=60103,Uc=60106,Nl=60107,El=60108,Il=60114,Tl=60109,Al=60110,Rl=60112,Fl=60113,em=60120,Dl=60115,Ml=60116,m4=60121,y4=60122,v4=60117,x4=60129,b4=60131;if(typeof Symbol=="function"&&Symbol.for){var mt=Symbol.for;zc=mt("react.element"),Uc=mt("react.portal"),Nl=mt("react.fragment"),El=mt("react.strict_mode"),Il=mt("react.profiler"),Tl=mt("react.provider"),Al=mt("react.context"),Rl=mt("react.forward_ref"),Fl=mt("react.suspense"),em=mt("react.suspense_list"),Dl=mt("react.memo"),Ml=mt("react.lazy"),m4=mt("react.block"),y4=mt("react.server.block"),v4=mt("react.fundamental"),x4=mt("react.debug_trace_mode"),b4=mt("react.legacy_hidden")}function zn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case zc:switch(e=e.type,e){case Nl:case Il:case El:case Fl:case em:return e;default:switch(e=e&&e.$$typeof,e){case Al:case Rl:case Ml:case Dl:case Tl:return e;default:return t}}case Uc:return t}}}var w7=Tl,S7=zc,C7=Rl,P7=Nl,O7=Ml,_7=Dl,k7=Uc,N7=Il,E7=El,I7=Fl;Fe.ContextConsumer=Al;Fe.ContextProvider=w7;Fe.Element=S7;Fe.ForwardRef=C7;Fe.Fragment=P7;Fe.Lazy=O7;Fe.Memo=_7;Fe.Portal=k7;Fe.Profiler=N7;Fe.StrictMode=E7;Fe.Suspense=I7;Fe.isAsyncMode=function(){return!1};Fe.isConcurrentMode=function(){return!1};Fe.isContextConsumer=function(e){return zn(e)===Al};Fe.isContextProvider=function(e){return zn(e)===Tl};Fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===zc};Fe.isForwardRef=function(e){return zn(e)===Rl};Fe.isFragment=function(e){return zn(e)===Nl};Fe.isLazy=function(e){return zn(e)===Ml};Fe.isMemo=function(e){return zn(e)===Dl};Fe.isPortal=function(e){return zn(e)===Uc};Fe.isProfiler=function(e){return zn(e)===Il};Fe.isStrictMode=function(e){return zn(e)===El};Fe.isSuspense=function(e){return zn(e)===Fl};Fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Nl||e===Il||e===x4||e===El||e===Fl||e===em||e===b4||typeof e=="object"&&e!==null&&(e.$$typeof===Ml||e.$$typeof===Dl||e.$$typeof===Tl||e.$$typeof===Al||e.$$typeof===Rl||e.$$typeof===v4||e.$$typeof===m4||e[0]===y4)};Fe.typeOf=zn;(function(e){e.exports=Fe})($7);function T7(e){function t(D,H,V,ie,I){for(var G=0,Y=0,Oe=0,me=0,ge,he,Ne=0,De=0,fe,O=fe=ge=0,E=0,A=0,oe=0,K=0,q=V.length,ae=q-1,ve,le="",Ae="",ns="",Oi="",rn;E<q;){if(he=V.charCodeAt(E),E===ae&&Y+me+Oe+G!==0&&(Y!==0&&(he=Y===47?10:47),me=Oe=G=0,q++,ae++),Y+me+Oe+G===0){if(E===ae&&(0<A&&(le=le.replace(m,"")),0<le.trim().length)){switch(he){case 32:case 9:case 59:case 13:case 10:break;default:le+=V.charAt(E)}he=59}switch(he){case 123:for(le=le.trim(),ge=le.charCodeAt(0),fe=1,K=++E;E<q;){switch(he=V.charCodeAt(E)){case 123:fe++;break;case 125:fe--;break;case 47:switch(he=V.charCodeAt(E+1)){case 42:case 47:e:{for(O=E+1;O<ae;++O)switch(V.charCodeAt(O)){case 47:if(he===42&&V.charCodeAt(O-1)===42&&E+2!==O){E=O+1;break e}break;case 10:if(he===47){E=O+1;break e}}E=O}}break;case 91:he++;case 40:he++;case 34:case 39:for(;E++<ae&&V.charCodeAt(E)!==he;);}if(fe===0)break;E++}switch(fe=V.substring(K,E),ge===0&&(ge=(le=le.replace(h,"").trim()).charCodeAt(0)),ge){case 64:switch(0<A&&(le=le.replace(m,"")),he=le.charCodeAt(1),he){case 100:case 109:case 115:case 45:A=H;break;default:A=ee}if(fe=t(H,A,fe,he,I+1),K=fe.length,0<z&&(A=n(ee,le,oe),rn=l(3,fe,A,H,j,M,K,he,I,ie),le=A.join(""),rn!==void 0&&(K=(fe=rn.trim()).length)===0&&(he=0,fe="")),0<K)switch(he){case 115:le=le.replace(N,a);case 100:case 109:case 45:fe=le+"{"+fe+"}";break;case 107:le=le.replace(g,"$1 $2"),fe=le+"{"+fe+"}",fe=F===1||F===2&&o("@"+fe,3)?"@-webkit-"+fe+"@"+fe:"@"+fe;break;default:fe=le+fe,ie===112&&(fe=(Ae+=fe,""))}else fe="";break;default:fe=t(H,n(H,le,oe),fe,ie,I+1)}ns+=fe,fe=oe=A=O=ge=0,le="",he=V.charCodeAt(++E);break;case 125:case 59:if(le=(0<A?le.replace(m,""):le).trim(),1<(K=le.length))switch(O===0&&(ge=le.charCodeAt(0),ge===45||96<ge&&123>ge)&&(K=(le=le.replace(" ",":")).length),0<z&&(rn=l(1,le,H,D,j,M,Ae.length,ie,I,ie))!==void 0&&(K=(le=rn.trim()).length)===0&&(le="\0\0"),ge=le.charCodeAt(0),he=le.charCodeAt(1),ge){case 0:break;case 64:if(he===105||he===99){Oi+=le+V.charAt(E);break}default:le.charCodeAt(K-1)!==58&&(Ae+=i(le,ge,he,le.charCodeAt(2)))}oe=A=O=ge=0,le="",he=V.charCodeAt(++E)}}switch(he){case 13:case 10:Y===47?Y=0:1+ge===0&&ie!==107&&0<le.length&&(A=1,le+="\0"),0<z*k&&l(0,le,H,D,j,M,Ae.length,ie,I,ie),M=1,j++;break;case 59:case 125:if(Y+me+Oe+G===0){M++;break}default:switch(M++,ve=V.charAt(E),he){case 9:case 32:if(me+G+Y===0)switch(Ne){case 44:case 58:case 9:case 32:ve="";break;default:he!==32&&(ve=" ")}break;case 0:ve="\\0";break;case 12:ve="\\f";break;case 11:ve="\\v";break;case 38:me+Y+G===0&&(A=oe=1,ve="\f"+ve);break;case 108:if(me+Y+G+X===0&&0<O)switch(E-O){case 2:Ne===112&&V.charCodeAt(E-3)===58&&(X=Ne);case 8:De===111&&(X=De)}break;case 58:me+Y+G===0&&(O=E);break;case 44:Y+Oe+me+G===0&&(A=1,ve+="\r");break;case 34:case 39:Y===0&&(me=me===he?0:me===0?he:me);break;case 91:me+Y+Oe===0&&G++;break;case 93:me+Y+Oe===0&&G--;break;case 41:me+Y+G===0&&Oe--;break;case 40:if(me+Y+G===0){if(ge===0)switch(2*Ne+3*De){case 533:break;default:ge=1}Oe++}break;case 64:Y+Oe+me+G+O+fe===0&&(fe=1);break;case 42:case 47:if(!(0<me+G+Oe))switch(Y){case 0:switch(2*he+3*V.charCodeAt(E+1)){case 235:Y=47;break;case 220:K=E,Y=42}break;case 42:he===47&&Ne===42&&K+2!==E&&(V.charCodeAt(K+2)===33&&(Ae+=V.substring(K,E+1)),ve="",Y=0)}}Y===0&&(le+=ve)}De=Ne,Ne=he,E++}if(K=Ae.length,0<K){if(A=H,0<z&&(rn=l(2,Ae,A,D,j,M,K,ie,I,ie),rn!==void 0&&(Ae=rn).length===0))return Oi+Ae+ns;if(Ae=A.join(",")+"{"+Ae+"}",F*X!==0){switch(F!==2||o(Ae,2)||(X=0),X){case 111:Ae=Ae.replace(S,":-moz-$1")+Ae;break;case 112:Ae=Ae.replace($,"::-webkit-input-$1")+Ae.replace($,"::-moz-$1")+Ae.replace($,":-ms-input-$1")+Ae}X=0}}return Oi+Ae+ns}function n(D,H,V){var ie=H.trim().split(x);H=ie;var I=ie.length,G=D.length;switch(G){case 0:case 1:var Y=0;for(D=G===0?"":D[0]+" ";Y<I;++Y)H[Y]=r(D,H[Y],V).trim();break;default:var Oe=Y=0;for(H=[];Y<I;++Y)for(var me=0;me<G;++me)H[Oe++]=r(D[me]+" ",ie[Y],V).trim()}return H}function r(D,H,V){var ie=H.charCodeAt(0);switch(33>ie&&(ie=(H=H.trim()).charCodeAt(0)),ie){case 38:return H.replace(p,"$1"+D.trim());case 58:return D.trim()+H.replace(p,"$1"+D.trim());default:if(0<1*V&&0<H.indexOf("\f"))return H.replace(p,(D.charCodeAt(0)===58?"":"$1")+D.trim())}return D+H}function i(D,H,V,ie){var I=D+";",G=2*H+3*V+4*ie;if(G===944){D=I.indexOf(":",9)+1;var Y=I.substring(D,I.length-1).trim();return Y=I.substring(0,D).trim()+Y+";",F===1||F===2&&o(Y,1)?"-webkit-"+Y+Y:Y}if(F===0||F===2&&!o(I,1))return I;switch(G){case 1015:return I.charCodeAt(10)===97?"-webkit-"+I+I:I;case 951:return I.charCodeAt(3)===116?"-webkit-"+I+I:I;case 963:return I.charCodeAt(5)===110?"-webkit-"+I+I:I;case 1009:if(I.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+I+I;case 978:return"-webkit-"+I+"-moz-"+I+I;case 1019:case 983:return"-webkit-"+I+"-moz-"+I+"-ms-"+I+I;case 883:if(I.charCodeAt(8)===45)return"-webkit-"+I+I;if(0<I.indexOf("image-set(",11))return I.replace(se,"$1-webkit-$2")+I;break;case 932:if(I.charCodeAt(4)===45)switch(I.charCodeAt(5)){case 103:return"-webkit-box-"+I.replace("-grow","")+"-webkit-"+I+"-ms-"+I.replace("grow","positive")+I;case 115:return"-webkit-"+I+"-ms-"+I.replace("shrink","negative")+I;case 98:return"-webkit-"+I+"-ms-"+I.replace("basis","preferred-size")+I}return"-webkit-"+I+"-ms-"+I+I;case 964:return"-webkit-"+I+"-ms-flex-"+I+I;case 1023:if(I.charCodeAt(8)!==99)break;return Y=I.substring(I.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+Y+"-webkit-"+I+"-ms-flex-pack"+Y+I;case 1005:return v.test(I)?I.replace(b,":-webkit-")+I.replace(b,":-moz-")+I:I;case 1e3:switch(Y=I.substring(13).trim(),H=Y.indexOf("-")+1,Y.charCodeAt(0)+Y.charCodeAt(H)){case 226:Y=I.replace(P,"tb");break;case 232:Y=I.replace(P,"tb-rl");break;case 220:Y=I.replace(P,"lr");break;default:return I}return"-webkit-"+I+"-ms-"+Y+I;case 1017:if(I.indexOf("sticky",9)===-1)break;case 975:switch(H=(I=D).length-10,Y=(I.charCodeAt(H)===33?I.substring(0,H):I).substring(D.indexOf(":",7)+1).trim(),G=Y.charCodeAt(0)+(Y.charCodeAt(7)|0)){case 203:if(111>Y.charCodeAt(8))break;case 115:I=I.replace(Y,"-webkit-"+Y)+";"+I;break;case 207:case 102:I=I.replace(Y,"-webkit-"+(102<G?"inline-":"")+"box")+";"+I.replace(Y,"-webkit-"+Y)+";"+I.replace(Y,"-ms-"+Y+"box")+";"+I}return I+";";case 938:if(I.charCodeAt(5)===45)switch(I.charCodeAt(6)){case 105:return Y=I.replace("-items",""),"-webkit-"+I+"-webkit-box-"+Y+"-ms-flex-"+Y+I;case 115:return"-webkit-"+I+"-ms-flex-item-"+I.replace(R,"")+I;default:return"-webkit-"+I+"-ms-flex-line-pack"+I.replace("align-content","").replace(R,"")+I}break;case 973:case 989:if(I.charCodeAt(3)!==45||I.charCodeAt(4)===122)break;case 931:case 953:if(L.test(D)===!0)return(Y=D.substring(D.indexOf(":")+1)).charCodeAt(0)===115?i(D.replace("stretch","fill-available"),H,V,ie).replace(":fill-available",":stretch"):I.replace(Y,"-webkit-"+Y)+I.replace(Y,"-moz-"+Y.replace("fill-",""))+I;break;case 962:if(I="-webkit-"+I+(I.charCodeAt(5)===102?"-ms-"+I:"")+I,V+ie===211&&I.charCodeAt(13)===105&&0<I.indexOf("transform",10))return I.substring(0,I.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+I}return I}function o(D,H){var V=D.indexOf(H===1?":":"{"),ie=D.substring(0,H!==3?V:10);return V=D.substring(V+1,D.length-1),_(H!==2?ie:ie.replace(W,"$1"),V,H)}function a(D,H){var V=i(H,H.charCodeAt(0),H.charCodeAt(1),H.charCodeAt(2));return V!==H+";"?V.replace(T," or ($1)").substring(4):"("+H+")"}function l(D,H,V,ie,I,G,Y,Oe,me,ge){for(var he=0,Ne=H,De;he<z;++he)switch(De=re[he].call(f,D,Ne,V,ie,I,G,Y,Oe,me,ge)){case void 0:case!1:case!0:case null:break;default:Ne=De}if(Ne!==H)return Ne}function u(D){switch(D){case void 0:case null:z=re.length=0;break;default:if(typeof D=="function")re[z++]=D;else if(typeof D=="object")for(var H=0,V=D.length;H<V;++H)u(D[H]);else k=!!D|0}return u}function d(D){return D=D.prefix,D!==void 0&&(_=null,D?typeof D!="function"?F=1:(F=2,_=D):F=0),d}function f(D,H){var V=D;if(33>V.charCodeAt(0)&&(V=V.trim()),U=V,V=[U],0<z){var ie=l(-1,H,V,V,j,M,0,0,0,0);ie!==void 0&&typeof ie=="string"&&(H=ie)}var I=t(ee,V,H,0,0);return 0<z&&(ie=l(-2,I,V,V,j,M,I.length,0,0,0),ie!==void 0&&(I=ie)),U="",X=0,M=j=1,I}var h=/^\0+/g,m=/[\0\r\f]/g,b=/: */g,v=/zoo|gra/,w=/([,: ])(transform)/g,x=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,$=/::(place)/g,S=/:(read-only)/g,P=/[svh]\w+-[tblr]{2}/,N=/\(\s*(.*)\s*\)/g,T=/([\s\S]*?);/g,R=/-self|flex-/g,W=/[^]*?(:[rp][el]a[\w-]+)[^]*/,L=/stretch|:\s*\w+\-(?:conte|avail)/,se=/([^-])(image-set\()/,M=1,j=1,X=0,F=1,ee=[],re=[],z=0,_=null,k=0,U="";return f.use=u,f.set=d,e!==void 0&&d(e),f}var A7={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function R7(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var F7=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,R2=R7(function(e){return F7.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Zp={},D7={get exports(){return Zp},set exports(e){Zp=e}},Ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pt=typeof Symbol=="function"&&Symbol.for,tm=pt?Symbol.for("react.element"):60103,nm=pt?Symbol.for("react.portal"):60106,Bc=pt?Symbol.for("react.fragment"):60107,Hc=pt?Symbol.for("react.strict_mode"):60108,Wc=pt?Symbol.for("react.profiler"):60114,Yc=pt?Symbol.for("react.provider"):60109,Vc=pt?Symbol.for("react.context"):60110,rm=pt?Symbol.for("react.async_mode"):60111,qc=pt?Symbol.for("react.concurrent_mode"):60111,Gc=pt?Symbol.for("react.forward_ref"):60112,Qc=pt?Symbol.for("react.suspense"):60113,M7=pt?Symbol.for("react.suspense_list"):60120,Kc=pt?Symbol.for("react.memo"):60115,Zc=pt?Symbol.for("react.lazy"):60116,j7=pt?Symbol.for("react.block"):60121,L7=pt?Symbol.for("react.fundamental"):60117,z7=pt?Symbol.for("react.responder"):60118,U7=pt?Symbol.for("react.scope"):60119;function en(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case tm:switch(e=e.type,e){case rm:case qc:case Bc:case Wc:case Hc:case Qc:return e;default:switch(e=e&&e.$$typeof,e){case Vc:case Gc:case Zc:case Kc:case Yc:return e;default:return t}}case nm:return t}}}function $4(e){return en(e)===qc}Ie.AsyncMode=rm;Ie.ConcurrentMode=qc;Ie.ContextConsumer=Vc;Ie.ContextProvider=Yc;Ie.Element=tm;Ie.ForwardRef=Gc;Ie.Fragment=Bc;Ie.Lazy=Zc;Ie.Memo=Kc;Ie.Portal=nm;Ie.Profiler=Wc;Ie.StrictMode=Hc;Ie.Suspense=Qc;Ie.isAsyncMode=function(e){return $4(e)||en(e)===rm};Ie.isConcurrentMode=$4;Ie.isContextConsumer=function(e){return en(e)===Vc};Ie.isContextProvider=function(e){return en(e)===Yc};Ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===tm};Ie.isForwardRef=function(e){return en(e)===Gc};Ie.isFragment=function(e){return en(e)===Bc};Ie.isLazy=function(e){return en(e)===Zc};Ie.isMemo=function(e){return en(e)===Kc};Ie.isPortal=function(e){return en(e)===nm};Ie.isProfiler=function(e){return en(e)===Wc};Ie.isStrictMode=function(e){return en(e)===Hc};Ie.isSuspense=function(e){return en(e)===Qc};Ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Bc||e===qc||e===Wc||e===Hc||e===Qc||e===M7||typeof e=="object"&&e!==null&&(e.$$typeof===Zc||e.$$typeof===Kc||e.$$typeof===Yc||e.$$typeof===Vc||e.$$typeof===Gc||e.$$typeof===L7||e.$$typeof===z7||e.$$typeof===U7||e.$$typeof===j7)};Ie.typeOf=en;(function(e){e.exports=Ie})(D7);var im=Zp,B7={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},H7={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},W7={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},w4={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},om={};om[im.ForwardRef]=W7;om[im.Memo]=w4;function F2(e){return im.isMemo(e)?w4:om[e.$$typeof]||B7}var Y7=Object.defineProperty,V7=Object.getOwnPropertyNames,D2=Object.getOwnPropertySymbols,q7=Object.getOwnPropertyDescriptor,G7=Object.getPrototypeOf,M2=Object.prototype;function S4(e,t,n){if(typeof t!="string"){if(M2){var r=G7(t);r&&r!==M2&&S4(e,r,n)}var i=V7(t);D2&&(i=i.concat(D2(t)));for(var o=F2(e),a=F2(t),l=0;l<i.length;++l){var u=i[l];if(!H7[u]&&!(n&&n[u])&&!(a&&a[u])&&!(o&&o[u])){var d=q7(t,u);try{Y7(e,u,d)}catch{}}}}return e}var Q7=S4;function yr(){return(yr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var j2=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Jp=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Hd.typeOf(e)},Wd=Object.freeze([]),li=Object.freeze({});function ul(e){return typeof e=="function"}function L2(e){return e.displayName||e.name||"Component"}function am(e){return e&&typeof e.styledComponentId=="string"}var Fa=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",sm=typeof window<"u"&&"HTMLElement"in window,K7=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY);function jl(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Z7=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&jl(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(n+1),d=0,f=r.length;d<f;d++)this.tag.insertRule(u,r[d])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Xu=new Map,Yd=new Map,Bs=1,yu=function(e){if(Xu.has(e))return Xu.get(e);for(;Yd.has(Bs);)Bs++;var t=Bs++;return Xu.set(e,t),Yd.set(t,e),t},J7=function(e){return Yd.get(e)},X7=function(e,t){t>=Bs&&(Bs=t+1),Xu.set(e,t),Yd.set(t,e)},eS="style["+Fa+'][data-styled-version="5.3.6"]',tS=new RegExp("^"+Fa+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),nS=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},rS=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(tS);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(X7(d,u),nS(e,d,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(a)}}},iS=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},C4=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var u=l.childNodes,d=u.length;d>=0;d--){var f=u[d];if(f&&f.nodeType===1&&f.hasAttribute(Fa))return f}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Fa,"active"),r.setAttribute("data-styled-version","5.3.6");var a=iS();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},oS=function(){function e(n){var r=this.element=C4(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var u=o[a];if(u.ownerNode===i)return u}jl(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),aS=function(){function e(n){var r=this.element=C4(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),sS=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),z2=sm,lS={isServer:!sm,useCSSOMInjection:!K7},P4=function(){function e(n,r,i){n===void 0&&(n=li),r===void 0&&(r={}),this.options=yr({},lS,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&sm&&z2&&(z2=!1,function(o){for(var a=document.querySelectorAll(eS),l=0,u=a.length;l<u;l++){var d=a[l];d&&d.getAttribute(Fa)!=="active"&&(rS(o,d),d.parentNode&&d.parentNode.removeChild(d))}}(this))}e.registerId=function(n){return yu(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(yr({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new sS(a):o?new oS(a):new aS(a),new Z7(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(yu(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(yu(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(yu(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=J7(a);if(l!==void 0){var u=n.names.get(l),d=r.getGroup(a);if(u&&d&&u.size){var f=Fa+".g"+a+'[id="'+l+'"]',h="";u!==void 0&&u.forEach(function(m){m.length>0&&(h+=m+",")}),o+=""+d+f+'{content:"'+h+`"}/*!sc*/
`}}}return o}(this)},e}(),uS=/(a)(d)/gi,U2=function(e){return String.fromCharCode(e+(e>25?39:97))};function Xp(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=U2(t%52)+n;return(U2(t%52)+n).replace(uS,"$1-$2")}var ua=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},O4=function(e){return ua(5381,e)};function dS(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ul(n)&&!am(n))return!1}return!0}var cS=O4("5.3.6"),fS=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&dS(t),this.componentId=n,this.baseHash=ua(cS,n),this.baseStyle=r,P4.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=Da(this.rules,t,n,r).join(""),l=Xp(ua(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var u=r(a,"."+l,void 0,i);n.insertRules(i,l,u)}o.push(l),this.staticRulesId=l}else{for(var d=this.rules.length,f=ua(this.baseHash,r.hash),h="",m=0;m<d;m++){var b=this.rules[m];if(typeof b=="string")h+=b;else if(b){var v=Da(b,t,n,r),w=Array.isArray(v)?v.join(""):v;f=ua(f,w+m),h+=w}}if(h){var x=Xp(f>>>0);if(!n.hasNameForId(i,x)){var p=r(h,"."+x,void 0,i);n.insertRules(i,x,p)}o.push(x)}}return o.join(" ")},e}(),hS=/^\s*\/\/.*$/gm,pS=[":","[",".","#"];function gS(e){var t,n,r,i,o=e===void 0?li:e,a=o.options,l=a===void 0?li:a,u=o.plugins,d=u===void 0?Wd:u,f=new T7(l),h=[],m=function(w){function x(p){if(p)try{w(p+"}")}catch{}}return function(p,g,$,S,P,N,T,R,W,L){switch(p){case 1:if(W===0&&g.charCodeAt(0)===64)return w(g+";"),"";break;case 2:if(R===0)return g+"/*|*/";break;case 3:switch(R){case 102:case 112:return w($[0]+g),"";default:return g+(L===0?"/*|*/":"")}case-2:g.split("/*|*/}").forEach(x)}}}(function(w){h.push(w)}),b=function(w,x,p){return x===0&&pS.indexOf(p[n.length])!==-1||p.match(i)?w:"."+t};function v(w,x,p,g){g===void 0&&(g="&");var $=w.replace(hS,""),S=x&&p?p+" "+x+" { "+$+" }":$;return t=g,n=x,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(p||!x?"":x,S)}return f.use([].concat(d,[function(w,x,p){w===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,b))},m,function(w){if(w===-2){var x=h;return h=[],x}}])),v.hash=d.length?d.reduce(function(w,x){return x.name||jl(15),ua(w,x.name)},5381).toString():"",v}var _4=ne.createContext();_4.Consumer;var k4=ne.createContext(),mS=(k4.Consumer,new P4),e1=gS();function yS(){return C.useContext(_4)||mS}function vS(){return C.useContext(k4)||e1}var xS=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=e1);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return jl(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=e1),this.name+t.hash},e}(),bS=/([A-Z])/,$S=/([A-Z])/g,wS=/^ms-/,SS=function(e){return"-"+e.toLowerCase()};function B2(e){return bS.test(e)?e.replace($S,SS).replace(wS,"-ms-"):e}var H2=function(e){return e==null||e===!1||e===""};function Da(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=Da(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(H2(e))return"";if(am(e))return"."+e.styledComponentId;if(ul(e)){if(typeof(d=e)!="function"||d.prototype&&d.prototype.isReactComponent||!t)return e;var u=e(t);return Da(u,t,n,r)}var d;return e instanceof xS?n?(e.inject(n,r),e.getName(r)):e:Jp(e)?function f(h,m){var b,v,w=[];for(var x in h)h.hasOwnProperty(x)&&!H2(h[x])&&(Array.isArray(h[x])&&h[x].isCss||ul(h[x])?w.push(B2(x)+":",h[x],";"):Jp(h[x])?w.push.apply(w,f(h[x],x)):w.push(B2(x)+": "+(b=x,(v=h[x])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||b in A7?String(v).trim():v+"px")+";"));return m?[m+" {"].concat(w,["}"]):w}(e):e.toString()}var W2=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function CS(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ul(e)||Jp(e)?W2(Da(j2(Wd,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:W2(Da(j2(e,n)))}var PS=function(e,t,n){return n===void 0&&(n=li),e.theme!==n.theme&&e.theme||t||n.theme},OS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_S=/(^-|-$)/g;function mh(e){return e.replace(OS,"-").replace(_S,"")}var kS=function(e){return Xp(O4(e)>>>0)};function vu(e){return typeof e=="string"&&!0}var t1=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},NS=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function ES(e,t,n){var r=e[n];t1(t)&&t1(r)?N4(r,t):e[n]=t}function N4(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(t1(a))for(var l in a)NS(l)&&ES(e,a[l],l)}return e}var E4=ne.createContext();E4.Consumer;var yh={};function I4(e,t,n){var r=am(e),i=!vu(e),o=t.attrs,a=o===void 0?Wd:o,l=t.componentId,u=l===void 0?function(g,$){var S=typeof g!="string"?"sc":mh(g);yh[S]=(yh[S]||0)+1;var P=S+"-"+kS("5.3.6"+S+yh[S]);return $?$+"-"+P:P}(t.displayName,t.parentComponentId):l,d=t.displayName,f=d===void 0?function(g){return vu(g)?"styled."+g:"Styled("+L2(g)+")"}(e):d,h=t.displayName&&t.componentId?mh(t.displayName)+"-"+t.componentId:t.componentId||u,m=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,b=t.shouldForwardProp;r&&e.shouldForwardProp&&(b=t.shouldForwardProp?function(g,$,S){return e.shouldForwardProp(g,$,S)&&t.shouldForwardProp(g,$,S)}:e.shouldForwardProp);var v,w=new fS(n,h,r?e.componentStyle:void 0),x=w.isStatic&&a.length===0,p=function(g,$){return function(S,P,N,T){var R=S.attrs,W=S.componentStyle,L=S.defaultProps,se=S.foldedComponentIds,M=S.shouldForwardProp,j=S.styledComponentId,X=S.target,F=function(ie,I,G){ie===void 0&&(ie=li);var Y=yr({},I,{theme:ie}),Oe={};return G.forEach(function(me){var ge,he,Ne,De=me;for(ge in ul(De)&&(De=De(Y)),De)Y[ge]=Oe[ge]=ge==="className"?(he=Oe[ge],Ne=De[ge],he&&Ne?he+" "+Ne:he||Ne):De[ge]}),[Y,Oe]}(PS(P,C.useContext(E4),L)||li,P,R),ee=F[0],re=F[1],z=function(ie,I,G,Y){var Oe=yS(),me=vS(),ge=I?ie.generateAndInjectStyles(li,Oe,me):ie.generateAndInjectStyles(G,Oe,me);return ge}(W,T,ee),_=N,k=re.$as||P.$as||re.as||P.as||X,U=vu(k),D=re!==P?yr({},P,{},re):P,H={};for(var V in D)V[0]!=="$"&&V!=="as"&&(V==="forwardedAs"?H.as=D[V]:(M?M(V,R2,k):!U||R2(V))&&(H[V]=D[V]));return P.style&&re.style!==P.style&&(H.style=yr({},P.style,{},re.style)),H.className=Array.prototype.concat(se,j,z!==j?z:null,P.className,re.className).filter(Boolean).join(" "),H.ref=_,C.createElement(k,H)}(v,g,$,x)};return p.displayName=f,(v=ne.forwardRef(p)).attrs=m,v.componentStyle=w,v.displayName=f,v.shouldForwardProp=b,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Wd,v.styledComponentId=h,v.target=r?e.target:e,v.withComponent=function(g){var $=t.componentId,S=function(N,T){if(N==null)return{};var R,W,L={},se=Object.keys(N);for(W=0;W<se.length;W++)R=se[W],T.indexOf(R)>=0||(L[R]=N[R]);return L}(t,["componentId"]),P=$&&$+"-"+(vu(g)?g:mh(L2(g)));return I4(g,yr({},S,{attrs:m,componentId:P}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?N4({},e.defaultProps,g):g}}),v.toString=function(){return"."+v.styledComponentId},i&&Q7(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var n1=function(e){return function t(n,r,i){if(i===void 0&&(i=li),!Hd.isValidElementType(r))return jl(1,String(r));var o=function(){return n(r,i,CS.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,yr({},i,{},a))},o.attrs=function(a){return t(n,r,yr({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(I4,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){n1[e]=n1(e)});const c=n1;var T4={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Y2=ne.createContext&&ne.createContext(T4),ui=globalThis&&globalThis.__assign||function(){return ui=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ui.apply(this,arguments)},IS=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function A4(e){return e&&e.map(function(t,n){return ne.createElement(t.tag,ui({key:n},t.attr),A4(t.child))})}function Pe(e){return function(t){return ne.createElement(TS,ui({attr:ui({},e.attr)},t),A4(e.child))}}function TS(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=IS(e,["attr","size","title"]),l=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),ne.createElement("svg",ui({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:u,style:ui(ui({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&ne.createElement("title",null,o),e.children)};return Y2!==void 0?ne.createElement(Y2.Consumer,null,function(n){return t(n)}):t(T4)}function AS(e){return Pe({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}}]})(e)}function RS(e){return Pe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function FS(e){return Pe({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"}}]})(e)}function cn(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]})(e)}function DS(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z"}}]})(e)}function V2(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]})(e)}function MS(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32z"}}]})(e)}function jS(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"}}]})(e)}function LS(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"}}]})(e)}function zS(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm122.7-533.4c18.7-18.7 49.1-18.7 67.9 0 18.7 18.7 18.7 49.1 0 67.9-18.7 18.7-49.1 18.7-67.9 0-18.7-18.7-18.7-49.1 0-67.9zm283.8 282.9l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z"}}]})(e)}function Ya(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]})(e)}function US(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm198.4-588.1a32 32 0 0 0-24.5.5L414.9 415 296.4 686c-3.6 8.2-3.6 17.5 0 25.7 3.4 7.8 9.7 13.9 17.7 17 3.8 1.5 7.7 2.2 11.7 2.2 4.4 0 8.7-.9 12.8-2.7l271-118.6 118.5-271a32.06 32.06 0 0 0-17.7-42.7zM576.8 534.4l26.2 26.2-42.4 42.4-26.2-26.2L380 644.4 447.5 490 422 464.4l42.4-42.4 25.5 25.5L644.4 380l-67.6 154.4zM464.4 422L422 464.4l25.5 25.6 86.9 86.8 26.2 26.2 42.4-42.4-26.2-26.2-86.8-86.9z"}}]})(e)}function Ma(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"}},{tag:"path",attr:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"}}]})(e)}function ja(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]})(e)}function BS(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M668.6 320c0-4.4-3.6-8-8-8h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.5-1.1.9-2.4.9-3.7zM157.9 504.2a352.7 352.7 0 0 1 103.5-242.4c32.5-32.5 70.3-58.1 112.4-75.9 43.6-18.4 89.9-27.8 137.6-27.8 47.8 0 94.1 9.3 137.6 27.8 42.1 17.8 79.9 43.4 112.4 75.9 10 10 19.3 20.5 27.9 31.4l-50 39.1a8 8 0 0 0 3 14.1l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3l-47.8 37.4C770.7 146.3 648.6 82 511.5 82 277 82 86.3 270.1 82 503.8a8 8 0 0 0 8 8.2h60c4.3 0 7.8-3.5 7.9-7.8zM934 512h-60c-4.3 0-7.9 3.5-8 7.8a352.7 352.7 0 0 1-103.5 242.4 352.57 352.57 0 0 1-112.4 75.9c-43.6 18.4-89.9 27.8-137.6 27.8s-94.1-9.3-137.6-27.8a352.57 352.57 0 0 1-112.4-75.9c-10-10-19.3-20.5-27.9-31.4l49.9-39.1a8 8 0 0 0-3-14.1l-156.8-38.3c-5-1.2-9.9 2.6-9.9 7.7l-.8 161.7c0 6.7 7.7 10.5 12.9 6.3l47.8-37.4C253.3 877.7 375.4 942 512.5 942 747 942 937.7 753.9 942 520.2a8 8 0 0 0-8-8.2z"}}]})(e)}function HS(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]})(e)}function WS(e){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M635 771.7c-34.5 28.6-78.2 44.3-123 44.3s-88.5-15.8-123-44.3a194.02 194.02 0 0 1-59.1-84.7H232v201h560V687h-97.9c-11.6 32.8-32 62.3-59.1 84.7z"}},{tag:"path",attr:{d:"M320 501h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}},{tag:"path",attr:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v201zm0-264H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v488z"}},{tag:"path",attr:{d:"M320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}}]})(e)}const R4=()=>s("div",{children:s(VS,{children:y(YS,{children:[y($u,{children:[s(bu,{children:"Categories"}),y(xu,{children:[s(jt,{children:"Home Appliances and Founiture"}),s(jt,{children:"Food Items"})]})]}),y($u,{children:[s(bu,{children:"Important Links"}),y(xu,{children:[s(jt,{children:"Terms & Conditions"}),s(jt,{children:"Return & Exchange"}),s(jt,{children:"Shipping & Deliveries"}),s(jt,{children:"Privacy Policies"})]})]}),y($u,{children:[s(bu,{children:"Information"}),y(xu,{children:[s(jt,{children:"About Us"}),s(jt,{children:"Contact Us"}),s(jt,{children:"Blog"}),s(jt,{children:"Stories"}),s(jt,{children:"FAQ"})]})]}),y($u,{children:[s(bu,{children:"Socials"}),y(xu,{children:[y(jt,{children:[s("span",{children:s(AS,{size:"16px"})}),"Facebook"]}),y(jt,{children:[s("span",{children:s(RS,{size:"16px"})}),"Twitter"]}),y(jt,{children:[s("span",{children:s(LS,{size:"16px"})}),"Instagram"]})]})]})]})})}),jt=c.div`
  font-size: 14px;
  font-weight: 700;
  color: #4a4747;
  margin-bottom: 10px;

  span{
    margin-right: 10px;
  }

  @media (max-width: 685px){
    font-size: 12px;
    font-weight: 600px;
  }
`,xu=c.div``,bu=c.div`
  font-size: 25px;
  font-weight: 800;
  color: #232121;
  margin-bottom: 20px;


  @media (max-width: 763px){
    font-size: 20px;
    font-weight: 700px;
  }
`,$u=c.div`
  margin: 5px;

  @media (max-width: 763px){
    margin: 10px;
  }
`,YS=c.div`
  width: 95%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* background-color: gold; */

  @media (max-width: 763px){
    justify-content: center;
  }
  @media (max-width: 500px){
   text-align: center;
  }
`,VS=c.div`
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
 */function dl(){return dl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dl.apply(this,arguments)}var Kr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Kr||(Kr={}));const q2="popstate";function qS(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return r1("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:cl(i)}return QS(t,n,null,e)}function at(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function GS(){return Math.random().toString(36).substr(2,8)}function G2(e,t){return{usr:e.state,key:e.key,idx:t}}function r1(e,t,n,r){return n===void 0&&(n=null),dl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Va(t):t,{state:n,key:t&&t.key||r||GS()})}function cl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Va(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function QS(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Kr.Pop,u=null,d=f();d==null&&(d=0,a.replaceState(dl({},a.state,{idx:d}),""));function f(){return(a.state||{idx:null}).idx}function h(){l=Kr.Pop;let x=f(),p=x==null?null:x-d;d=x,u&&u({action:l,location:w.location,delta:p})}function m(x,p){l=Kr.Push;let g=r1(w.location,x,p);n&&n(g,x),d=f()+1;let $=G2(g,d),S=w.createHref(g);try{a.pushState($,"",S)}catch{i.location.assign(S)}o&&u&&u({action:l,location:w.location,delta:1})}function b(x,p){l=Kr.Replace;let g=r1(w.location,x,p);n&&n(g,x),d=f();let $=G2(g,d),S=w.createHref(g);a.replaceState($,"",S),o&&u&&u({action:l,location:w.location,delta:0})}function v(x){let p=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof x=="string"?x:cl(x);return at(p,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,p)}let w={get action(){return l},get location(){return e(i,a)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(q2,h),u=x,()=>{i.removeEventListener(q2,h),u=null}},createHref(x){return t(i,x)},createURL:v,encodeLocation(x){let p=v(x);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:b,go(x){return a.go(x)}};return w}var Q2;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Q2||(Q2={}));function KS(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Va(t):t,i=M4(r.pathname||"/",n);if(i==null)return null;let o=F4(e);ZS(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=aC(o[l],uC(i));return a}function F4(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};u.relativePath.startsWith("/")&&(at(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=di([r,u.relativePath]),f=n.concat(u);o.children&&o.children.length>0&&(at(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),F4(o.children,t,f,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:iC(d,o.index),routesMeta:f})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let u of D4(o.path))i(o,a,u)}),t}function D4(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=D4(r.join("/")),l=[];return l.push(...a.map(u=>u===""?o:[o,u].join("/"))),i&&l.push(...a),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function ZS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:oC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const JS=/^:\w+$/,XS=3,eC=2,tC=1,nC=10,rC=-2,K2=e=>e==="*";function iC(e,t){let n=e.split("/"),r=n.length;return n.some(K2)&&(r+=rC),t&&(r+=eC),n.filter(i=>!K2(i)).reduce((i,o)=>i+(JS.test(o)?XS:o===""?tC:nC),r)}function oC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function aC(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],u=a===n.length-1,d=i==="/"?t:t.slice(i.length)||"/",f=sC({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d);if(!f)return null;Object.assign(r,f.params);let h=l.route;o.push({params:r,pathname:di([i,f.pathname]),pathnameBase:hC(di([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=di([i,f.pathnameBase]))}return o}function sC(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=lC(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,f,h)=>{if(f==="*"){let m=l[h]||"";a=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return d[f]=dC(l[h]||"",f),d},{}),pathname:o,pathnameBase:a,pattern:e}}function lC(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),lm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function uC(e){try{return decodeURI(e)}catch(t){return lm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function dC(e,t){try{return decodeURIComponent(e)}catch(n){return lm(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function M4(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function lm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cC(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Va(e):e;return{pathname:n?n.startsWith("/")?n:fC(n,t):t,search:pC(r),hash:gC(i)}}function fC(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function vh(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function j4(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function L4(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Va(e):(i=dl({},e),at(!i.pathname||!i.pathname.includes("?"),vh("?","pathname","search",i)),at(!i.pathname||!i.pathname.includes("#"),vh("#","pathname","hash",i)),at(!i.search||!i.search.includes("#"),vh("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let h=t.length-1;if(a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}l=h>=0?t[h]:"/"}let u=cC(i,l),d=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}const di=e=>e.join("/").replace(/\/\/+/g,"/"),hC=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),pC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function mC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function i1(){return i1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i1.apply(this,arguments)}function yC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const vC=typeof Object.is=="function"?Object.is:yC,{useState:xC,useEffect:bC,useLayoutEffect:$C,useDebugValue:wC}=np;function SC(e,t,n){const r=t(),[{inst:i},o]=xC({inst:{value:r,getSnapshot:t}});return $C(()=>{i.value=r,i.getSnapshot=t,xh(i)&&o({inst:i})},[e,r,t]),bC(()=>(xh(i)&&o({inst:i}),e(()=>{xh(i)&&o({inst:i})})),[e]),wC(r),r}function xh(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!vC(n,r)}catch{return!0}}function CC(e,t,n){return t()}const PC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OC=!PC,_C=OC?CC:SC;"useSyncExternalStore"in np&&(e=>e.useSyncExternalStore)(np);const z4=C.createContext(null),Jc=C.createContext(null),Ll=C.createContext(null),Xc=C.createContext(null),fo=C.createContext({outlet:null,matches:[]}),U4=C.createContext(null);function kC(e,t){let{relative:n}=t===void 0?{}:t;qa()||at(!1);let{basename:r,navigator:i}=C.useContext(Ll),{hash:o,pathname:a,search:l}=um(e,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:di([r,a])),i.createHref({pathname:u,search:l,hash:o})}function qa(){return C.useContext(Xc)!=null}function zl(){return qa()||at(!1),C.useContext(Xc).location}function nt(){qa()||at(!1);let{basename:e,navigator:t}=C.useContext(Ll),{matches:n}=C.useContext(fo),{pathname:r}=zl(),i=JSON.stringify(j4(n).map(l=>l.pathnameBase)),o=C.useRef(!1);return C.useEffect(()=>{o.current=!0}),C.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){t.go(l);return}let d=L4(l,JSON.parse(i),r,u.relative==="path");e!=="/"&&(d.pathname=d.pathname==="/"?e:di([e,d.pathname])),(u.replace?t.replace:t.push)(d,u.state,u)},[e,t,i,r])}function B4(){let{matches:e}=C.useContext(fo),t=e[e.length-1];return t?t.params:{}}function um(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.useContext(fo),{pathname:i}=zl(),o=JSON.stringify(j4(r).map(a=>a.pathnameBase));return C.useMemo(()=>L4(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function dm(e,t){qa()||at(!1);let{navigator:n}=C.useContext(Ll),r=C.useContext(Jc),{matches:i}=C.useContext(fo),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=zl(),d;if(t){var f;let w=typeof t=="string"?Va(t):t;l==="/"||(f=w.pathname)!=null&&f.startsWith(l)||at(!1),d=w}else d=u;let h=d.pathname||"/",m=l==="/"?h:h.slice(l.length)||"/",b=KS(e,{pathname:m}),v=TC(b&&b.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:di([l,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:di([l,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return t&&v?C.createElement(Xc.Provider,{value:{location:i1({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Kr.Pop}},v):v}function NC(){let e=DC(),t=mC(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,o)}class EC extends C.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(fo.Provider,{value:this.props.routeContext},C.createElement(U4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function IC(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(z4);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(fo.Provider,{value:t},r)}function TC(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||at(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,l)=>{let u=a.route.id?i==null?void 0:i[a.route.id]:null,d=n?a.route.errorElement||C.createElement(NC,null):null,f=t.concat(r.slice(0,l+1)),h=()=>C.createElement(IC,{match:a,routeContext:{outlet:o,matches:f}},u?d:a.route.element!==void 0?a.route.element:o);return n&&(a.route.errorElement||l===0)?C.createElement(EC,{location:n.location,component:d,error:u,children:h(),routeContext:{outlet:null,matches:f}}):h()},null)}var Z2;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Z2||(Z2={}));var Vd;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Vd||(Vd={}));function AC(e){let t=C.useContext(Jc);return t||at(!1),t}function RC(e){let t=C.useContext(fo);return t||at(!1),t}function FC(e){let t=RC(),n=t.matches[t.matches.length-1];return n.route.id||at(!1),n.route.id}function DC(){var e;let t=C.useContext(U4),n=AC(Vd.UseRouteError),r=FC(Vd.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function MC(e){let{to:t,replace:n,state:r,relative:i}=e;qa()||at(!1);let o=C.useContext(Jc),a=nt();return C.useEffect(()=>{o&&o.navigation.state!=="idle"||a(t,{replace:n,state:r,relative:i})}),null}function Bi(e){at(!1)}function jC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Kr.Pop,navigator:o,static:a=!1}=e;qa()&&at(!1);let l=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=Va(r));let{pathname:d="/",search:f="",hash:h="",state:m=null,key:b="default"}=r,v=C.useMemo(()=>{let w=M4(d,l);return w==null?null:{pathname:w,search:f,hash:h,state:m,key:b}},[l,d,f,h,m,b]);return v==null?null:C.createElement(Ll.Provider,{value:u},C.createElement(Xc.Provider,{children:n,value:{location:v,navigationType:i}}))}function LC(e){let{children:t,location:n}=e,r=C.useContext(z4),i=r&&!t?r.router.routes:o1(t);return dm(i,n)}var J2;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(J2||(J2={}));new Promise(()=>{});function o1(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;if(r.type===C.Fragment){n.push.apply(n,o1(r.props.children,t));return}r.type!==Bi&&at(!1),!r.props.index||!r.props.children||at(!1);let o=[...t,i],a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=o1(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qd(){return qd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qd.apply(this,arguments)}function H4(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function zC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function UC(e,t){return e.button===0&&(!t||t==="_self")&&!zC(e)}const BC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],HC=["aria-current","caseSensitive","className","end","style","to","children"];function WC(e){let{basename:t,children:n,window:r}=e,i=C.useRef();i.current==null&&(i.current=qS({window:r,v5Compat:!0}));let o=i.current,[a,l]=C.useState({action:o.action,location:o.location});return C.useLayoutEffect(()=>o.listen(l),[o]),C.createElement(jC,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const YC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ul=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:u,to:d,preventScrollReset:f}=t,h=H4(t,BC),m=typeof d=="string"?d:cl(d),b=/^[a-z+]+:\/\//i.test(m)||m.startsWith("//"),v=m,w=!1;if(YC&&b){let $=new URL(window.location.href),S=m.startsWith("//")?new URL($.protocol+m):new URL(m);S.origin===$.origin?v=S.pathname+S.search+S.hash:w=!0}let x=kC(v,{relative:i}),p=VC(v,{replace:a,state:l,target:u,preventScrollReset:f,relative:i});function g($){r&&r($),$.defaultPrevented||p($)}return C.createElement("a",qd({},h,{href:b?m:x,onClick:w||o?r:g,ref:n,target:u}))}),be=C.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:u,children:d}=t,f=H4(t,HC),h=um(u,{relative:f.relative}),m=zl(),b=C.useContext(Jc),{navigator:v}=C.useContext(Ll),w=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,x=m.pathname,p=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;i||(x=x.toLowerCase(),p=p?p.toLowerCase():null,w=w.toLowerCase());let g=x===w||!a&&x.startsWith(w)&&x.charAt(w.length)==="/",$=p!=null&&(p===w||!a&&p.startsWith(w)&&p.charAt(w.length)==="/"),S=g?r:void 0,P;typeof o=="function"?P=o({isActive:g,isPending:$}):P=[o,g?"active":null,$?"pending":null].filter(Boolean).join(" ");let N=typeof l=="function"?l({isActive:g,isPending:$}):l;return C.createElement(Ul,qd({},f,{"aria-current":S,className:P,ref:n,style:N,to:u}),typeof d=="function"?d({isActive:g,isPending:$}):d)});var X2;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(X2||(X2={}));var ev;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ev||(ev={}));function VC(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=nt(),u=zl(),d=um(e,{relative:a});return C.useCallback(f=>{if(UC(f,n)){f.preventDefault();let h=r!==void 0?r:cl(u)===cl(d);l(e,{replace:h,state:i,preventScrollReset:o,relative:a})}},[u,l,d,r,i,n,e,o,a])}const qC=()=>s("div",{children:s(ZC,{children:y(KC,{children:[s(QC,{children:"WHY YOU SHOULD SELL ON CROSS AFRICA"}),y(GC,{children:[s(mo,{children:"SELL MORE PRODUCTS"}),s(mo,{children:"SELL MORE PRODUCTS"}),s(mo,{children:"SELL MORE PRODUCTS"}),s(mo,{children:"SELL MORE PRODUCTS"}),s(mo,{children:"SELL MORE PRODUCTS"}),s(mo,{children:"SELL MORE PRODUCTS"})]})]})})}),mo=c.button`
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
`,GC=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`,QC=c.div`
  font-size: 30px;
  font-weight: 600;
  margin-top: 70px;
  text-align: center;
`,KC=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 500px;
  min-height: 100%;
`,ZC=c.div`
  width: 100%;
  background-color: #902a75;
`,JC=()=>s("div",{children:s(rP,{children:y(nP,{children:[s(tP,{children:"GET STARTED TODAY"}),s(eP,{children:"Join the fast, trusted and best selling platformin Africa"}),s(XC,{to:"/auth",children:"Start Selling Today"})]})})}),XC=c(be)`
    padding: 15px 70px;
    border: #D975C0;
    background-color: #D975C0;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
`,eP=c.div`
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 15px;
  text-align: center;
`,tP=c.div`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 15px;
    text-align: center;
`,nP=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 500px;
`,rP=c.div`
  width: 100%;
  /* background-color: #f6c8ea; */
`,iP=()=>s("div",{children:s(oP,{children:y(aP,{children:[y(sP,{to:"/",children:[s("img",{src:"/logo 1.png"}),s("div",{children:"Cross Africa"})]}),y(lP,{children:[s(tv,{to:"/auth",bd:"",bg:"ffff",hbg:"",hbd:"fff",children:"Sign Up"}),s(tv,{to:"/auth/signin",bd:"fgf",bg:"",hbg:"fff",hbd:"",children:"Log In"})]})]})})}),oP=c.div`
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
`,aP=c.div`
  width: 95%;
  height: 85px;
  display: flex;
  justify-content: space-between;
`,sP=c(be)`
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
`,lP=c.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 350px;
`,tv=c(be)`
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
`,uP=()=>y(_a,{children:[s(iP,{}),y("div",{children:[s(gP,{children:y(pP,{children:[y(hP,{children:[s(fP,{children:"ANYONE CAN SELL ON CROSS AFRICA"}),s(cP,{children:"Become a merchant and sell to thousands of people across africa"}),s(dP,{to:"/auth",children:"Start Selling Today"})]}),s(qC,{}),s(JC,{})]})}),s(R4,{})]})]}),dP=c(be)`
  padding: 15px 70px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
`,cP=c.div`
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 15px;
  text-align: center;
`,fP=c.div`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center;
`,hP=c.div`
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
`,pP=c.div``,gP=c.div`
  width: 100%;
`,mP=()=>s("div",{children:s(wP,{children:y($P,{children:[y(bP,{children:["Buying & Selling made easy ",s("div",{children:"accross Africa!"})]}),y(xP,{children:[s(av,{children:s(vP,{children:y(ov,{children:[s(iv,{children:"Mobile Phones."}),s(rv,{children:"Buying made easy, get used phones, laptops, chargers etc.. at the comfort of your home"}),s(be,{to:"/phone",style:{textDecoration:"none",color:"white"},children:s(nv,{children:"Buy Now"})})]})})}),s(av,{children:s(yP,{children:y(ov,{children:[s(iv,{children:"Food & Groceries."}),s(rv,{children:"Buying made easy, food and groceries are all available, get them all at the comfort of your home."}),s(be,{to:"/food",style:{textDecoration:"none",color:"white"},children:s(nv,{children:"Buy Now"})})]})})})]})]})})}),nv=c.button`
  margin-bottom: 20px;
  border: 0px;
  outline: none;
  background: #ee65cc;
  padding: 10px 30px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`,yP=c.div`
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
`,vP=c.div`
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
`,rv=c.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
`,iv=c.div`
  font-size: 35px;
  font-weight: 400;
  margin-bottom: 20px;
`,ov=c.div`
  /* background-color: gold; */
  margin-bottom: 20px;
  height: 227px;
  width: 400px;
`,av=c.div`
  width: 550px;
  height: 650px;
  color: white;
  padding: 0px 18px;
  margin: 10px 0px;

  display: flex;
  align-items: flex-end;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 5px;
  }
  @media (max-width: 1300px){
    width: 500px;
  }
  @media (max-width: 1190px){
    width: 450px;
  }
  @media (max-width: 1080px){
    width: 400px;
  }
  @media (max-width: 980px){
    margin: 10px;
    width: 100%;
  }
`,xP=c.div`
  width: 100%;
  /* background-color: gold; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 980px){
    justify-content: center;
  }
`,bP=c.div`
  /* background-color: gold; */
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 20px;
  /* width: 300px; */
  /* color: ; */
`,$P=c.div`
  width: 90%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`,wP=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
`,SP={version:4,country_calling_codes:{1:["US","AG","AI","AS","BB","BM","BS","CA","DM","DO","GD","GU","JM","KN","KY","LC","MP","MS","PR","SX","TC","TT","VC","VG","VI"],7:["RU","KZ"],20:["EG"],27:["ZA"],30:["GR"],31:["NL"],32:["BE"],33:["FR"],34:["ES"],36:["HU"],39:["IT","VA"],40:["RO"],41:["CH"],43:["AT"],44:["GB","GG","IM","JE"],45:["DK"],46:["SE"],47:["NO","SJ"],48:["PL"],49:["DE"],51:["PE"],52:["MX"],53:["CU"],54:["AR"],55:["BR"],56:["CL"],57:["CO"],58:["VE"],60:["MY"],61:["AU","CC","CX"],62:["ID"],63:["PH"],64:["NZ"],65:["SG"],66:["TH"],81:["JP"],82:["KR"],84:["VN"],86:["CN"],90:["TR"],91:["IN"],92:["PK"],93:["AF"],94:["LK"],95:["MM"],98:["IR"],211:["SS"],212:["MA","EH"],213:["DZ"],216:["TN"],218:["LY"],220:["GM"],221:["SN"],222:["MR"],223:["ML"],224:["GN"],225:["CI"],226:["BF"],227:["NE"],228:["TG"],229:["BJ"],230:["MU"],231:["LR"],232:["SL"],233:["GH"],234:["NG"],235:["TD"],236:["CF"],237:["CM"],238:["CV"],239:["ST"],240:["GQ"],241:["GA"],242:["CG"],243:["CD"],244:["AO"],245:["GW"],246:["IO"],247:["AC"],248:["SC"],249:["SD"],250:["RW"],251:["ET"],252:["SO"],253:["DJ"],254:["KE"],255:["TZ"],256:["UG"],257:["BI"],258:["MZ"],260:["ZM"],261:["MG"],262:["RE","YT"],263:["ZW"],264:["NA"],265:["MW"],266:["LS"],267:["BW"],268:["SZ"],269:["KM"],290:["SH","TA"],291:["ER"],297:["AW"],298:["FO"],299:["GL"],350:["GI"],351:["PT"],352:["LU"],353:["IE"],354:["IS"],355:["AL"],356:["MT"],357:["CY"],358:["FI","AX"],359:["BG"],370:["LT"],371:["LV"],372:["EE"],373:["MD"],374:["AM"],375:["BY"],376:["AD"],377:["MC"],378:["SM"],380:["UA"],381:["RS"],382:["ME"],383:["XK"],385:["HR"],386:["SI"],387:["BA"],389:["MK"],420:["CZ"],421:["SK"],423:["LI"],500:["FK"],501:["BZ"],502:["GT"],503:["SV"],504:["HN"],505:["NI"],506:["CR"],507:["PA"],508:["PM"],509:["HT"],590:["GP","BL","MF"],591:["BO"],592:["GY"],593:["EC"],594:["GF"],595:["PY"],596:["MQ"],597:["SR"],598:["UY"],599:["CW","BQ"],670:["TL"],672:["NF"],673:["BN"],674:["NR"],675:["PG"],676:["TO"],677:["SB"],678:["VU"],679:["FJ"],680:["PW"],681:["WF"],682:["CK"],683:["NU"],685:["WS"],686:["KI"],687:["NC"],688:["TV"],689:["PF"],690:["TK"],691:["FM"],692:["MH"],850:["KP"],852:["HK"],853:["MO"],855:["KH"],856:["LA"],880:["BD"],886:["TW"],960:["MV"],961:["LB"],962:["JO"],963:["SY"],964:["IQ"],965:["KW"],966:["SA"],967:["YE"],968:["OM"],970:["PS"],971:["AE"],972:["IL"],973:["BH"],974:["QA"],975:["BT"],976:["MN"],977:["NP"],992:["TJ"],993:["TM"],994:["AZ"],995:["GE"],996:["KG"],998:["UZ"]},countries:{AC:["247","00","(?:[01589]\\d|[46])\\d{4}",[5,6]],AD:["376","00","(?:1|6\\d)\\d{7}|[135-9]\\d{5}",[6,8,9],[["(\\d{3})(\\d{3})","$1 $2",["[135-9]"]],["(\\d{4})(\\d{4})","$1 $2",["1"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]]],AE:["971","00","(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",[5,6,7,8,9,10,11,12],[["(\\d{3})(\\d{2,9})","$1 $2",["60|8"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[236]|[479][2-8]"],"0$1"],["(\\d{3})(\\d)(\\d{5})","$1 $2 $3",["[479]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"]],"0"],AF:["93","00","[2-7]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],"0"],AG:["1","011","(?:268|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([457]\\d{6})$|1","268$1",0,"268"],AI:["1","011","(?:264|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2457]\\d{6})$|1","264$1",0,"264"],AL:["355","00","(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",[6,7,8,9],[["(\\d{3})(\\d{3,4})","$1 $2",["80|9"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["[23578]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"]],"0"],AM:["374","00","(?:[1-489]\\d|55|60|77)\\d{6}",[8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]0"],"0 $1"],["(\\d{3})(\\d{5})","$1 $2",["2|3[12]"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[3-9]"],"0$1"]],"0"],AO:["244","00","[29]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[29]"]]]],AR:["54","00","(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",[10,11],[["(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",1],["(\\d)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",0,"$1 $2 $3-$4"],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 15-$3-$4",["91"],"0$1",0,"$1 $2 $3-$4"],["(\\d{3})(\\d{3})(\\d{5})","$1-$2-$3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9"],"0$1",0,"$1 $2 $3-$4"]],"0",0,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?","9$1"],AS:["1","011","(?:[58]\\d\\d|684|900)\\d{7}",[10],0,"1",0,"([267]\\d{6})$|1","684$1",0,"684"],AT:["43","00","1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",[4,5,6,7,8,9,10,11,12,13],[["(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],["(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],["(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],["(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],"0"],AU:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",[5,6,7,8,9,10,12],[["(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|4"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],"0",0,"(183[12])|0",0,0,0,[["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}",[9]],["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,["163\\d{2,6}",[5,6,7,8,9]],["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],AW:["297","00","(?:[25-79]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[25-9]"]]]],AX:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",[5,6,7,8,9,10,11,12],0,"0",0,0,0,0,"18",0,"00"],AZ:["994","00","365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[28]|2|365|46","1[28]|2|365[45]|46","1[28]|2|365(?:4|5[02])|46"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[13-9]"],"0$1"]],"0"],BA:["387","00","6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-3]|[7-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]|6[56]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],"0"],BB:["1","011","(?:246|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","246$1",0,"246"],BD:["880","00","[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{4,6})","$1-$2",["31[5-8]|[459]1"],"0$1"],["(\\d{3})(\\d{3,7})","$1-$2",["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],"0$1"],["(\\d{4})(\\d{3,6})","$1-$2",["[13-9]|22"],"0$1"],["(\\d)(\\d{7,8})","$1-$2",["2"],"0$1"]],"0"],BE:["32","00","4\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[239]|4[23]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[15-8]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4"],"0$1"]],"0"],BF:["226","00","[025-7]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[025-7]"]]]],BG:["359","00","00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",[6,7,8,9,12],[["(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["43[1-6]|70[1-9]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],["(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],"0"],BH:["973","00","[136-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[13679]|8[047]"]]]],BI:["257","00","(?:[267]\\d|31)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2367]"]]]],BJ:["229","00","[24-689]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-689]"]]]],BL:["590","00","590\\d{6}|(?:69|80|9\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["590(?:2[7-9]|5[12]|87)\\d{4}"],["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:395|76[018])\\d|475[01])\\d{4}"]]],BM:["1","011","(?:441|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","441$1",0,"441"],BN:["673","00","[2-578]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-578]"]]]],BO:["591","00(?:1\\d)?","(?:[2-467]\\d\\d|8001)\\d{5}",[8,9],[["(\\d)(\\d{7})","$1 $2",["[23]|4[46]"]],["(\\d{8})","$1",["[67]"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["8"]]],"0",0,"0(1\\d)?"],BQ:["599","00","(?:[34]1|7\\d)\\d{5}",[7],0,0,0,0,0,0,"[347]"],BR:["55","00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",[8,9,10,11],[["(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","4(?:02|37)0|[34]00"]],["(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)"],["(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)"]],"0",0,"(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2"],BS:["1","011","(?:242|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([3-8]\\d{6})$|1","242$1",0,"242"],BT:["975","00","[17]\\d{7}|[2-8]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|7"]]]],BW:["267","00","(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",[7,8,10],[["(\\d{2})(\\d{5})","$1 $2",["90"]],["(\\d{3})(\\d{4})","$1 $2",["[24-6]|3[15-79]"]],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37]"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["8"]]]],BY:["375","810","(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3})","$1 $2",["800"],"8 $1"],["(\\d{3})(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"],["(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:[56]|7[467])|2[1-3]"],"8 0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-4]"],"8 0$1"],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["[89]"],"8 $1"]],"8",0,"0|80?",0,0,0,0,"8~10"],BZ:["501","00","(?:0800\\d|[2-8])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],["(\\d)(\\d{3})(\\d{4})(\\d{3})","$1-$2-$3-$4",["0"]]]],CA:["1","011","(?:[2-8]\\d|90)\\d{8}|3\\d{6}",[7,10],0,"1",0,0,0,0,0,[["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|3[178]|50|68|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",[10]],["",[10]],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",[10]],["900[2-9]\\d{6}",[10]],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}",[10]],0,["310\\d{4}",[7]],0,["600[2-9]\\d{6}",[10]]]],CC:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",[9]],["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CD:["243","00","[189]\\d{8}|[1-68]\\d{6}",[7,9],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]"],"0$1"]],"0"],CF:["236","00","(?:[27]\\d{3}|8776)\\d{4}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[278]"]]]],CG:["242","00","222\\d{6}|(?:0\\d|80)\\d{7}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]]]],CH:["41","00","8\\d{11}|[2-9]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]|81"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["8"],"0$1"]],"0"],CI:["225","00","[02]\\d{9}",[10],[["(\\d{2})(\\d{2})(\\d)(\\d{5})","$1 $2 $3 $4",["2"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3 $4",["0"]]]],CK:["682","00","[2-578]\\d{4}",[5],[["(\\d{2})(\\d{3})","$1 $2",["[2-578]"]]]],CL:["56","(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0","12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",[9,10,11],[["(\\d{5})(\\d{4})","$1 $2",["219","2196"],"($1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[1-36]"],"($1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9[2-9]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],"($1)"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]]],CM:["237","00","[26]\\d{8}|88\\d{6,7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["88"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]|88"]]]],CN:["86","00|1(?:[12]\\d|79)\\d\\d00","1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}",[7,8,9,10,11,12],[["(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]","(?:10|2[0-57-9])(?:10|9[56])","10(?:10|9[56])|2[0-57-9](?:100|9[56])"],"0$1"],["(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]","(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]","85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])","85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1",1],["(\\d{3})(\\d{7,8})","$1 $2",["9"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",1]],"0",0,"(1(?:[12]\\d|79)\\d\\d)|0",0,0,0,0,"00"],CO:["57","00(?:4(?:[14]4|56)|[579])","(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}",[10,11],[["(\\d{3})(\\d{7})","$1 $2",["6"],"($1)"],["(\\d{3})(\\d{7})","$1 $2",["3[0-357]|91"]],["(\\d)(\\d{3})(\\d{7})","$1-$2-$3",["1"],"0$1",0,"$1 $2 $3"]],"0",0,"0(4(?:[14]4|56)|[579])?"],CR:["506","00","(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",[8,10],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[3-9]"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]"]]],0,0,"(19(?:0[0-2468]|1[09]|20|66|77|99))"],CU:["53","119","[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}",[6,7,8,10],[["(\\d{2})(\\d{4,6})","$1 $2",["2[1-4]|[34]"],"(0$1)"],["(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["5"],"0$1"],["(\\d{3})(\\d{7})","$1 $2",["8"],"0$1"]],"0"],CV:["238","0","(?:[2-59]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2-589]"]]]],CW:["599","00","(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[3467]"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["9[4-8]"]]],0,0,0,0,0,"[69]"],CX:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",[9]],["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CY:["357","00","(?:[279]\\d|[58]0)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[257-9]"]]]],CZ:["420","00","(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["96"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]]],DE:["49","00","[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",[4,5,6,7,8,9,10,11,12,13,14,15],[["(\\d{2})(\\d{3,13})","$1 $2",["3[02]|40|[68]9"],"0$1"],["(\\d{3})(\\d{3,12})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1","2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],"0$1"],["(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["138"],"0$1"],["(\\d{5})(\\d{2,10})","$1 $2",["3"],"0$1"],["(\\d{3})(\\d{5,11})","$1 $2",["181"],"0$1"],["(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:3|80)|9"],"0$1"],["(\\d{3})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],["(\\d{3})(\\d{7,12})","$1 $2",["8"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["18[68]"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["15[0568]"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["15[1279]"],"0$1"],["(\\d{3})(\\d{8})","$1 $2",["18"],"0$1"],["(\\d{3})(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"],["(\\d{4})(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],["(\\d{3})(\\d{2})(\\d{8})","$1 $2 $3",["15"],"0$1"]],"0"],DJ:["253","00","(?:2\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[27]"]]]],DK:["45","00","[2-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-9]"]]]],DM:["1","011","(?:[58]\\d\\d|767|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","767$1",0,"767"],DO:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,0,0,0,"8001|8[024]9"],DZ:["213","00","(?:[1-4]|[5-79]\\d|80)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"]],"0"],EC:["593","00","1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",[8,9,10,11],[["(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[2-7]"],"(0$1)",0,"$1-$2-$3"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],"0"],EE:["372","00","8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],["(\\d{4})(\\d{3,4})","$1 $2",["[45]|8(?:00|[1-49])","[45]|8(?:00[1-9]|[1-49])"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],EG:["20","00","[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",[8,9,10],[["(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],["(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|8[2468]|9[235-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[189]"],"0$1"]],"0"],EH:["212","00","[5-8]\\d{8}",[9],0,"0",0,0,0,0,"528[89]"],ER:["291","00","[178]\\d{6}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[178]"],"0$1"]],"0"],ES:["34","00","[5-9]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-9]"]]]],ET:["251","00","(?:11|[2-579]\\d)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-579]"],"0$1"]],"0"],FI:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",[5,6,7,8,9,10,11,12],[["(\\d)(\\d{4,9})","$1 $2",["[2568][1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"],["(\\d{3})(\\d{3,7})","$1 $2",["[12]00|[368]|70[07-9]"],"0$1"],["(\\d{2})(\\d{4,8})","$1 $2",["[1245]|7[135]"],"0$1"],["(\\d{2})(\\d{6,10})","$1 $2",["7"],"0$1"]],"0",0,0,0,0,"1[03-79]|[2-9]",0,"00"],FJ:["679","0(?:0|52)","45\\d{5}|(?:0800\\d|[235-9])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1 $2",["[235-9]|45"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],0,0,0,0,0,0,0,"00"],FK:["500","00","[2-7]\\d{4}",[5]],FM:["691","00","(?:[39]\\d\\d|820)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[389]"]]]],FO:["298","00","[2-9]\\d{5}",[6],[["(\\d{6})","$1",["[2-9]"]]],0,0,"(10(?:01|[12]0|88))"],FR:["33","00","[1-9]\\d{8}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],"0"],GA:["241","00","(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",[7,8],[["(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["11|[67]"],"0$1"]],0,0,"0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})","$1"],GB:["44","00","[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",[7,9,10],[["(\\d{3})(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["845","8454","84546","845464"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["800"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["1(?:[2-69][02-9]|[78])"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[25]|7(?:0|6[02-9])","[25]|7(?:0|6(?:[03-9]|2[356]))"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[1389]"],"0$1"]],"0",0,0,0,0,0,[["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-579])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:[02]\\d|1[0-246-9])))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",[9,10]],["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]],0," x"],GD:["1","011","(?:473|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","473$1",0,"473"],GE:["995","00","(?:[3-57]\\d\\d|800)\\d{6}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["32"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[57]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"]],"0"],GF:["594","00","[56]94\\d{6}|(?:80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[56]|9[47]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[89]"],"0$1"]],"0"],GG:["44","00","(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",[7,9,10],0,"0",0,"([25-9]\\d{5})$|0","1481$1",0,0,[["1481[25-9]\\d{5}",[10]],["7(?:(?:781|839)\\d|911[17])\\d{5}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]]],GH:["233","00","(?:[235]\\d{3}|800)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"]],"0"],GI:["350","00","(?:[25]\\d|60)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["2"]]]],GL:["299","00","(?:19|[2-689]\\d|70)\\d{4}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["19|[2-9]"]]]],GM:["220","00","[2-9]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],GN:["224","00","722\\d{6}|(?:3|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]]],GP:["590","00","590\\d{6}|(?:69|80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0",0,0,0,0,0,[["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1289]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"],["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:395|76[018])\\d|475[01])\\d{4}"]]],GQ:["240","00","222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],["(\\d{3})(\\d{6})","$1 $2",["[89]"]]]],GR:["30","00","5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",[10,11,12],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],["(\\d{4})(\\d{6})","$1 $2",["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2689]"]],["(\\d{3})(\\d{3,4})(\\d{5})","$1 $2 $3",["8"]]]],GT:["502","00","(?:1\\d{3}|[2-7])\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],GU:["1","011","(?:[58]\\d\\d|671|900)\\d{7}",[10],0,"1",0,"([3-9]\\d{6})$|1","671$1",0,"671"],GW:["245","00","[49]\\d{8}|4\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["40"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"]]]],GY:["592","001","9008\\d{3}|(?:[2-467]\\d\\d|862)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-46-9]"]]]],HK:["852","00(?:30|5[09]|[126-9]?)","8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",[5,6,7,8,9,11],[["(\\d{3})(\\d{2,5})","$1 $2",["900","9003"]],["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{3})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],0,0,0,0,0,0,0,"00"],HN:["504","00","8\\d{10}|[237-9]\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1-$2",["[237-9]"]]]],HR:["385","00","(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",[6,7,8,9],[["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["6[01]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-5]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],"0"],HT:["509","00","(?:[2-489]\\d|55)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[2-589]"]]]],HU:["36","00","[235-7]\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"06 $1"]],"06"],ID:["62","00[89]","(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}",[7,8,9,10,11,12,13],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],["(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],["(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],["(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],"(0$1)"],["(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],["(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],["(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"]],"0"],IE:["353","00","(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],["(\\d{3})(\\d{5})","$1 $2",["[45]0"],"(0$1)"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2569]|4[1-69]|7[14]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[78]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["4"],"(0$1)"],["(\\d{2})(\\d)(\\d{3})(\\d{4})","$1 $2 $3 $4",["8"],"0$1"]],"0"],IL:["972","0(?:0|1[2-9])","1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",[7,8,9,10,11,12],[["(\\d{4})(\\d{3})","$1-$2",["125"]],["(\\d{4})(\\d{2})(\\d{2})","$1-$2-$3",["121"]],["(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1-$2-$3",["12"]],["(\\d{4})(\\d{6})","$1-$2",["159"]],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["15"]]],"0"],IM:["44","00","1624\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([25-8]\\d{5})$|0","1624$1",0,"74576|(?:16|7[56])24"],IN:["91","00","(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",[8,9,10,11,12,13],[["(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],0,1],["(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],0,1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"],"0$1",1],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]","1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],"0$1",1],["(\\d{5})(\\d{5})","$1 $2",["[6-9]"],"0$1",1],["(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["1(?:6|8[06])","1(?:6|8[06]0)"],0,1],["(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18"],0,1]],"0"],IO:["246","00","3\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["3"]]]],IQ:["964","00","(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],IR:["98","00","[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",[4,5,6,7,10],[["(\\d{4,5})","$1",["96"],"0$1"],["(\\d{2})(\\d{4,5})","$1 $2",["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"]],"0"],IS:["354","00|1(?:0(?:01|[12]0)|100)","(?:38\\d|[4-9])\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],0,0,0,0,0,0,0,"00"],IT:["39","00","0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",[6,7,8,9,10,11],[["(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],["(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],["(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],["(\\d{4})(\\d{4})","$1 $2",["894"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1(?:44|[679])|[378]"]],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]|14"]],["(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["3"]]],0,0,0,0,0,0,[["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],["3[1-9]\\d{8}|3[2-9]\\d{7}",[9,10]],["80(?:0\\d{3}|3)\\d{3}",[6,9]],["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}",[6,8,9,10]],["1(?:78\\d|99)\\d{6}",[9,10]],0,0,0,["55\\d{8}",[10]],["84(?:[08]\\d{3}|[17])\\d{3}",[6,9]]]],JE:["44","00","1534\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([0-24-8]\\d{5})$|0","1534$1",0,0,[["1534[0-24-8]\\d{5}"],["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"],["80(?:07(?:35|81)|8901)\\d{4}"],["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],["701511\\d{4}"],0,["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],["56\\d{8}"]]],JM:["1","011","(?:[58]\\d\\d|658|900)\\d{7}",[10],0,"1",0,0,0,0,"658|876"],JO:["962","00","(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],["(\\d{3})(\\d{5,6})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["70"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],JP:["81","010","00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",[8,9,10,11,12,13,14,15,16,17],[["(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],["(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:80|9[16])","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])","[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],"0$1"],["(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[289][2-9]|5[3-9]|7[2-4679]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[257-9]"],"0$1"]],"0"],KE:["254","000","(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",[7,8,9,10],[["(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[17]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0"],KG:["996","00","8\\d{9}|(?:[235-8]\\d|99)\\d{7}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["3(?:1[346]|[24-79])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-79]|88"],"0$1"],["(\\d{3})(\\d{3})(\\d)(\\d{2,3})","$1 $2 $3 $4",["8"],"0$1"]],"0"],KH:["855","00[14-9]","1\\d{9}|[1-9]\\d{7,8}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],KI:["686","00","(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",[5,8],0,"0"],KM:["269","00","[3478]\\d{6}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[3478]"]]]],KN:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","869$1",0,"869"],KP:["850","00|99","85\\d{6}|(?:19\\d|[2-7])\\d{7}",[8,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"]],"0"],KR:["82","00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))","00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",[5,6,8,9,10,11,12,13,14],[["(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1"],["(\\d{4})(\\d{4})","$1-$2",["1"]],["(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60|8"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1"]],"0",0,"0(8(?:[1-46-8]|5\\d\\d))?"],KW:["965","00","18\\d{5}|(?:[2569]\\d|41)\\d{6}",[7,8],[["(\\d{4})(\\d{3,4})","$1 $2",["[169]|2(?:[235]|4[1-35-9])|52"]],["(\\d{3})(\\d{5})","$1 $2",["[245]"]]]],KY:["1","011","(?:345|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","345$1",0,"345"],KZ:["7","810","(?:33622|8\\d{8})\\d{5}|[78]\\d{9}",[10,14],0,"8",0,0,0,0,"33|7",0,"8~10"],LA:["856","00","[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["30[013-9]"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[23]"],"0$1"]],"0"],LB:["961","00","[27-9]\\d{7}|[13-9]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27-9]"]]],"0"],LC:["1","011","(?:[58]\\d\\d|758|900)\\d{7}",[10],0,"1",0,"([2-8]\\d{6})$|1","758$1",0,"758"],LI:["423","00","[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",[7,9],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2379]|8(?:0[09]|7)","[2379]|8(?:0(?:02|9)|7)"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["69"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],"0",0,"(1001)|0"],LK:["94","00","[1-9]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"],"0$1"]],"0"],LR:["231","00","(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[4-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23578]"],"0$1"]],"0"],LS:["266","00","(?:[256]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2568]"]]]],LT:["370","00","(?:[3469]\\d|52|[78]0)\\d{6}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["52[0-7]"],"(8-$1)",1],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"8 $1",1],["(\\d{2})(\\d{6})","$1 $2",["37|4(?:[15]|6[1-8])"],"(8-$1)",1],["(\\d{3})(\\d{5})","$1 $2",["[3-6]"],"(8-$1)",1]],"8",0,"[08]"],LU:["352","00","35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",[4,5,6,7,8,9,10,11],[["(\\d{2})(\\d{3})","$1 $2",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20[2-689]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"]],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["80[01]|90[015]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})","$1 $2 $3 $4",["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]],0,0,"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],LV:["371","00","(?:[268]\\d|90)\\d{6}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[269]|8[01]"]]]],LY:["218","00","[2-9]\\d{8}",[9],[["(\\d{2})(\\d{7})","$1-$2",["[2-9]"],"0$1"]],"0"],MA:["212","00","[5-8]\\d{8}",[9],[["(\\d{5})(\\d{4})","$1-$2",["5(?:29|38)","5(?:29[1289]|389)","529(?:1[1-46-9]|2[013-8]|90)|5(?:298|389)[0-46-9]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5[45]"],"0$1"],["(\\d{4})(\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|9)|892","5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"],"0$1"],["(\\d{2})(\\d{7})","$1-$2",["8"],"0$1"],["(\\d{3})(\\d{6})","$1-$2",["[5-7]"],"0$1"]],"0",0,0,0,0,0,[["5293[01]\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|9[0-289])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[0189]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|2[0-2]|6[0-8]|8[0-3]))\\d{6}"],["80\\d{7}"],["89\\d{7}"],0,0,0,0,["592(?:4[0-2]|93)\\d{4}"]]],MC:["377","00","(?:[3489]|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[389]"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1"]],"0"],MD:["373","00","(?:[235-7]\\d|[89]0)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[25-7]"],"0$1"]],"0"],ME:["382","00","(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"0$1"]],"0"],MF:["590","00","590\\d{6}|(?:69|80|9\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"],["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:395|76[018])\\d|475[01])\\d{4}"]]],MG:["261","00","[23]\\d{8}",[9],[["(\\d{2})(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"],"0$1"]],"0",0,"([24-9]\\d{6})$|0","20$1"],MH:["692","011","329\\d{4}|(?:[256]\\d|45)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1-$2",["[2-6]"]]],"1"],MK:["389","00","[2-578]\\d{7}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2|34[47]|4(?:[37]7|5[47]|64)"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],"0"],ML:["223","00","[24-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]]],MM:["95","00","1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",[6,7,8,9,10],[["(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[4-7]|8[1-35]"],"0$1"],["(\\d)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92"],"0$1"],["(\\d)(\\d{5})(\\d{4})","$1 $2 $3",["9"],"0$1"]],"0"],MN:["976","001","[12]\\d{7,9}|[5-9]\\d{7}",[8,9,10],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[12]1"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[5-9]"]],["(\\d{3})(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["[12](?:27|3[2-8]|4[2-68]|5[1-4689])","[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["[12]"],"0$1"]],"0"],MO:["853","00","0800\\d{3}|(?:28|[68]\\d)\\d{6}",[7,8],[["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{4})(\\d{4})","$1 $2",["[268]"]]]],MP:["1","011","[58]\\d{9}|(?:67|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","670$1",0,"670"],MQ:["596","00","596\\d{6}|(?:69|80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],MR:["222","00","(?:[2-4]\\d\\d|800)\\d{5}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-48]"]]]],MS:["1","011","(?:[58]\\d\\d|664|900)\\d{7}",[10],0,"1",0,"([34]\\d{6})$|1","664$1",0,"664"],MT:["356","00","3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2357-9]"]]]],MU:["230","0(?:0|[24-7]0|3[03])","(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[2-46]|8[013]"]],["(\\d{4})(\\d{4})","$1 $2",["[57]"]],["(\\d{5})(\\d{5})","$1 $2",["8"]]],0,0,0,0,0,0,0,"020"],MV:["960","0(?:0|19)","(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",[7,10],[["(\\d{3})(\\d{4})","$1-$2",["[34679]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"]]],0,0,0,0,0,0,0,"00"],MW:["265","00","(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",[7,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[137-9]"],"0$1"]],"0"],MX:["52","0[09]","1(?:(?:[27]2|44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}",[10,11],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"],0,1],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 $3 $4",["1(?:33|5[56]|81)"],0,1],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 $3 $4",["1"],0,1]],"01",0,"0(?:[12]|4[45])|1",0,0,0,0,"00"],MY:["60","00","1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1-$2 $3",["1(?:[02469]|[378][1-9]|53)|8","1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3-$4",["1(?:[367]|80)"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2 $3",["1"],"0$1"]],"0"],MZ:["258","00","(?:2|8\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-79]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],NA:["264","00","[68]\\d{7,8}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["87"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],NC:["687","00","(?:050|[2-57-9]\\d\\d)\\d{3}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[02-57-9]"]]]],NE:["227","00","[027-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["08"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[089]|2[013]|7[04]"]]]],NF:["672","00","[13]\\d{5}",[6],[["(\\d{2})(\\d{4})","$1 $2",["1[0-3]"]],["(\\d)(\\d{5})","$1 $2",["[13]"]]],0,0,"([0-258]\\d{4})$","3$1"],NG:["234","009","(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}",[7,8,10,11,12,13,14],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["78"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|9(?:0[3-9]|[1-9])"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[3-7]|8[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]"],"0$1"],["(\\d{3})(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]"],"0$1"]],"0"],NI:["505","00","(?:1800|[25-8]\\d{3})\\d{4}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[125-8]"]]]],NL:["31","00","(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",[5,6,7,8,9,10,11],[["(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],["(\\d)(\\d{8})","$1 $2",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-578]|91"],"0$1"],["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3",["9"],"0$1"]],"0"],NO:["47","00","(?:0|[2-9]\\d{3})\\d{4}",[5,8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[489]|59"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-7]"]]],0,0,0,0,0,"[02-689]|7[0-8]"],NP:["977","00","(?:1\\d|9)\\d{9}|[1-9]\\d{7}",[8,10,11],[["(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],["(\\d{2})(\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],"0$1"],["(\\d{3})(\\d{7})","$1-$2",["9"]]],"0"],NR:["674","00","(?:444|(?:55|8\\d)\\d|666)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[4-68]"]]]],NU:["683","00","(?:[47]|888\\d)\\d{3}",[4,7],[["(\\d{3})(\\d{4})","$1 $2",["8"]]]],NZ:["64","0(?:0|161)","[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,8})","$1 $2",["8[1-579]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["50[036-8]|[89]0","50(?:[0367]|88)|[89]0"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["24|[346]|7[2-57-9]|9[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|[59]|80"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1|2[028]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:[169]|7[0-35-9])|7|86"],"0$1"]],"0",0,0,0,0,0,0,"00"],OM:["968","00","(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",[7,8,9],[["(\\d{3})(\\d{4,6})","$1 $2",["[58]"]],["(\\d{2})(\\d{6})","$1 $2",["2"]],["(\\d{4})(\\d{4})","$1 $2",["[179]"]]]],PA:["507","00","(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",[7,8,10,11],[["(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],["(\\d{4})(\\d{4})","$1-$2",["[68]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]]],PE:["51","00|19(?:1[124]|77|90)00","(?:[14-8]|9\\d)\\d{7}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["1"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[4-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"]]],"0",0,0,0,0,0,0,"00"," Anexo "],PF:["689","00","4\\d{5}(?:\\d{2})?|8\\d{7,8}",[6,8,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4|8[7-9]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],PG:["675","00|140[1-3]","(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["18|[2-69]|85"]],["(\\d{4})(\\d{4})","$1 $2",["[78]"]]],0,0,0,0,0,0,0,"00"],PH:["63","00","(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",[6,8,9,10,11,12,13],[["(\\d)(\\d{5})","$1 $2",["2"],"(0$1)"],["(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],["(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|8[2-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],"0"],PK:["92","00","122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,7})","$1 $2 $3",["[89]0"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["1"]],["(\\d{3})(\\d{6,7})","$1 $2",["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])","9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],"(0$1)"],["(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],["(\\d{5})(\\d{5})","$1 $2",["58"],"(0$1)"],["(\\d{3})(\\d{7})","$1 $2",["3"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[24-9]"],"(0$1)"]],"0"],PL:["48","00","(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",[6,7,8,9,10],[["(\\d{5})","$1",["19"]],["(\\d{3})(\\d{3})","$1 $2",["11|20|64"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1","(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2-8]|[2-7]|8[1-79]|9[145]"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["8"]]]],PM:["508","00","[45]\\d{5}|(?:708|80\\d)\\d{6}",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[45]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],PR:["1","011","(?:[589]\\d\\d|787)\\d{7}",[10],0,"1",0,0,0,0,"787|939"],PS:["970","00","[2489]2\\d{6}|(?:1\\d|5)\\d{8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2489]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],PT:["351","00","1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["16|[236-9]"]]]],PW:["680","01[12]","(?:[24-8]\\d\\d|345|900)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],PY:["595","00","59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],["(\\d{3})(\\d{4,5})","$1 $2",["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["87"]],["(\\d{3})(\\d{6})","$1 $2",["9(?:[5-79]|8[1-6])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["9"]]],"0"],QA:["974","00","800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",[7,8,9,11],[["(\\d{3})(\\d{4})","$1 $2",["2[16]|8"]],["(\\d{4})(\\d{4})","$1 $2",["[3-7]"]]]],RE:["262","00","(?:26|[689]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2689]"],"0$1"]],"0",0,0,0,0,0,[["26(?:2\\d\\d|3(?:0\\d|1[0-3]))\\d{4}"],["(?:69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|6[0-6]|7[0-27]|8[0-8]|9[0-479]))|9(?:399[0-2]|4790|76(?:2[27]|3[0-37]|9\\d)))\\d{4}"],["80\\d{7}"],["89[1-37-9]\\d{6}"],0,0,0,0,0,["8(?:1[019]|2[0156]|84|90)\\d{6}"]]],RO:["40","00","(?:[2378]\\d|90)\\d{7}|[23]\\d{5}",[6,9],[["(\\d{3})(\\d{3})","$1 $2",["2[3-6]","2[3-6]\\d9"],"0$1"],["(\\d{2})(\\d{4})","$1 $2",["219|31"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[237-9]"],"0$1"]],"0",0,0,0,0,0,0,0," int "],RS:["381","00","38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",[6,7,8,9,10,11,12],[["(\\d{3})(\\d{3,9})","$1 $2",["(?:2[389]|39)0|[7-9]"],"0$1"],["(\\d{2})(\\d{5,10})","$1 $2",["[1-36]"],"0$1"]],"0"],RU:["7","810","8\\d{13}|[347-9]\\d{9}",[10,14],[["(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],"8 ($1)",1],["(\\d{5})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))","7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[349]|8(?:[02-7]|1[1-8])"],"8 ($1)",1],["(\\d{4})(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3 $4",["8"],"8 ($1)"]],"8",0,0,0,0,"3[04-689]|[489]",0,"8~10"],RW:["250","00","(?:06|[27]\\d\\d|[89]00)\\d{6}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"]]],"0"],SA:["966","00","92\\d{7}|(?:[15]|8\\d)\\d{8}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["9"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["81"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],"0"],SB:["677","0[01]","(?:[1-6]|[7-9]\\d\\d)\\d{4}",[5,7],[["(\\d{2})(\\d{5})","$1 $2",["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],SC:["248","010|0[0-2]","800\\d{4}|(?:[249]\\d|64)\\d{5}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]|9[57]"]]],0,0,0,0,0,0,0,"00"],SD:["249","00","[19]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[19]"],"0$1"]],"0"],SE:["46","00","(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{4})","$1-$2",["9(?:00|39|44|9)"],"0$1",0,"$1 $2"],["(\\d{2})(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3"],["(\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{2,3})(\\d{3})","$1-$2 $3",["9(?:00|39|44)"],"0$1",0,"$1 $2 $3"],["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3 $4"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["10|7"],"0$1",0,"$1 $2 $3 $4"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["[26]"],"0$1",0,"$1 $2 $3 $4 $5"]],"0"],SG:["65","0[0-3]\\d","(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",[8,10,11],[["(\\d{4})(\\d{4})","$1 $2",["[369]|8(?:0[1-6]|[1-9])"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],["(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],SH:["290","00","(?:[256]\\d|8)\\d{3}",[4,5],0,0,0,0,0,0,"[256]"],SI:["386","00|10(?:22|66|88|99)","[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",[5,6,7,8],[["(\\d{2})(\\d{3,6})","$1 $2",["8[09]|9"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["59|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-57]"],"(0$1)"]],"0",0,0,0,0,0,0,"00"],SJ:["47","00","0\\d{4}|(?:[489]\\d|[57]9)\\d{6}",[5,8],0,0,0,0,0,0,"79"],SK:["421","00","[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",[6,7,9],[["(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"]],"0"],SL:["232","00","(?:[237-9]\\d|66)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[236-9]"],"(0$1)"]],"0"],SM:["378","00","(?:0549|[5-7]\\d)\\d{6}",[8,10],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],["(\\d{4})(\\d{6})","$1 $2",["0"]]],0,0,"([89]\\d{5})$","0549$1"],SN:["221","00","(?:[378]\\d|93)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]]]],SO:["252","00","[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",[6,7,8,9],[["(\\d{2})(\\d{4})","$1 $2",["8[125]"]],["(\\d{6})","$1",["[134]"]],["(\\d)(\\d{6})","$1 $2",["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],["(\\d)(\\d{7})","$1 $2",["(?:2|90)4|[67]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3478]|64|90"]],["(\\d{2})(\\d{5,7})","$1 $2",["1|28|6(?:0[5-7]|[1-35-9])|9[2-9]"]]],"0"],SR:["597","00","(?:[2-5]|68|[78]\\d)\\d{5}",[6,7],[["(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],["(\\d{3})(\\d{3})","$1-$2",["[2-5]"]],["(\\d{3})(\\d{4})","$1-$2",["[6-8]"]]]],SS:["211","00","[19]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[19]"],"0$1"]],"0"],ST:["239","00","(?:22|9\\d)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[29]"]]]],SV:["503","00","[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",[7,8,11],[["(\\d{3})(\\d{4})","$1 $2",["[89]"]],["(\\d{4})(\\d{4})","$1 $2",["[267]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]]],SX:["1","011","7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"(5\\d{6})$|1","721$1",0,"721"],SY:["963","00","[1-39]\\d{8}|[1-5]\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-5]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1",1]],"0"],SZ:["268","00","0800\\d{4}|(?:[237]\\d|900)\\d{6}",[8,9],[["(\\d{4})(\\d{4})","$1 $2",["[0237]"]],["(\\d{5})(\\d{4})","$1 $2",["9"]]]],TA:["290","00","8\\d{3}",[4],0,0,0,0,0,0,"8"],TC:["1","011","(?:[58]\\d\\d|649|900)\\d{7}",[10],0,"1",0,"([2-479]\\d{6})$|1","649$1",0,"649"],TD:["235","00|16","(?:22|[69]\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2679]"]]],0,0,0,0,0,0,0,"00"],TG:["228","00","[279]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[279]"]]]],TH:["66","00[1-9]","(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",[8,9,10,13],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],TJ:["992","810","(?:00|[1-57-9]\\d)\\d{7}",[9],[["(\\d{6})(\\d)(\\d{2})","$1 $2 $3",["331","3317"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[34]7|91[78]"]],["(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3[1-5]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[0-57-9]"]]],0,0,0,0,0,0,0,"8~10"],TK:["690","00","[2-47]\\d{3,6}",[4,5,6,7]],TL:["670","00","7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],["(\\d{4})(\\d{4})","$1 $2",["7"]]]],TM:["993","810","[1-6]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-5]"],"(8 $1)"],["(\\d{2})(\\d{6})","$1 $2",["6"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],TN:["216","00","[2-57-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]"]]]],TO:["676","00","(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",[5,7],[["(\\d{2})(\\d{3})","$1-$2",["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[5-9]"]]]],TR:["90","00","4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",[7,10,12,13],[["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[01589]|90"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:[0-59]|61)","5(?:[0-59]|616)","5(?:[0-59]|6161)"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24][1-8]|3[1-9]"],"(0$1)",1],["(\\d{3})(\\d{3})(\\d{6,7})","$1 $2 $3",["80"],"0$1",1]],"0"],TT:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-46-8]\\d{6})$|1","868$1",0,"868"],TV:["688","00","(?:2|7\\d\\d|90)\\d{4}",[5,6,7],[["(\\d{2})(\\d{3})","$1 $2",["2"]],["(\\d{2})(\\d{4})","$1 $2",["90"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],TW:["886","0(?:0[25-79]|19)","[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",[7,8,9,10,11],[["(\\d{2})(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[258]0"],"0$1"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]","[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,5})","$1 $2 $3",["7"],"0$1"]],"0",0,0,0,0,0,0,0,"#"],TZ:["255","00[056]","(?:[25-8]\\d|41|90)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["5"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"]],"0"],UA:["380","00","[89]\\d{9}|[3-9]\\d{8}",[9,10],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]","6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])","3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|89|9[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0",0,0,0,0,0,0,"0~0"],UG:["256","00[057]","800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",[9],[["(\\d{4})(\\d{5})","$1 $2",["202","2024"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[27-9]|4(?:6[45]|[7-9])"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[34]"],"0$1"]],"0"],US:["1","011","[2-9]\\d{9}|3\\d{6}",[10],[["(\\d{3})(\\d{4})","$1-$2",["310"],0,1],["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",["[2-9]"],0,1,"$1-$2-$3"]],"1",0,0,0,0,0,[["(?:47220[01]|5(?:05(?:[2-57-9]\\d\\d|6(?:[0-35-9]\\d|4[46]))|57200))\\d{4}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[0-2]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],[""],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],["900[2-9]\\d{6}"],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]]],UY:["598","0(?:0|1[3-9]\\d)","(?:0004|4)\\d{9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}",[7,8,10,13],[["(\\d{3})(\\d{4})","$1 $2",["405|8|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[124]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["4"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["0"]]],"0",0,0,0,0,0,0,"00"," int. "],UZ:["998","810","(?:33|[5-79]\\d|88)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[35-9]"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],VA:["39","00","0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",[6,7,8,9,10,11],0,0,0,0,0,0,"06698"],VC:["1","011","(?:[58]\\d\\d|784|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","784$1",0,"784"],VE:["58","00","[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",[10],[["(\\d{3})(\\d{7})","$1-$2",["[24-689]"],"0$1"]],"0"],VG:["1","011","(?:284|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-578]\\d{6})$|1","284$1",0,"284"],VI:["1","011","[58]\\d{9}|(?:34|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","340$1",0,"340"],VN:["84","00","[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["80"],"0$1",1],["(\\d{4})(\\d{4,6})","$1 $2",["1"],0,1],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[69]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3578]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",1]],"0"],VU:["678","00","[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",[5,7],[["(\\d{3})(\\d{4})","$1 $2",["[57-9]"]]]],WF:["681","00","(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[478]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],WS:["685","0","(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",[5,6,7,10],[["(\\d{5})","$1",["[2-5]|6[1-9]"]],["(\\d{3})(\\d{3,7})","$1 $2",["[68]"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],XK:["383","00","[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[23]"],"0$1"]],"0"],YE:["967","00","(?:1|7\\d)\\d{7}|[1-7]\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7(?:[24-6]|8[0-7])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],"0"],YT:["262","00","(?:(?:(?:26|63)9|80\\d)\\d\\d|93980)\\d{4}",[9],0,"0",0,0,0,0,"269|63|9398"],ZA:["27","00","[1-79]\\d{8}|8\\d{4,9}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],ZM:["260","00","800\\d{6}|(?:21|63|[79]\\d)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[79]"],"0$1"]],"0"],ZW:["263","00","2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",[5,6,7,8,9,10],[["(\\d{3})(\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"],"0$1"],["(\\d)(\\d{3})(\\d{2,4})","$1 $2 $3",["[49]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["80"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2","2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)","2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["29[013-9]|39|54"],"0$1"],["(\\d{4})(\\d{3,5})","$1 $2",["(?:25|54)8","258|5483"],"0$1"]],"0"]},nonGeographic:{800:["800",0,"(?:00|[1-9]\\d)\\d{6}",[8],[["(\\d{4})(\\d{4})","$1 $2",["\\d"]]],0,0,0,0,0,0,[0,0,["(?:00|[1-9]\\d)\\d{6}"]]],808:["808",0,"[1-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[1-9]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,0,["[1-9]\\d{7}"]]],870:["870",0,"7\\d{11}|[35-7]\\d{8}",[9,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[35-7]"]]],0,0,0,0,0,0,[0,["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]],878:["878",0,"10\\d{10}",[12],[["(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3",["1"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["10\\d{10}"]]],881:["881",0,"[0-36-9]\\d{8}",[9],[["(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[0-36-9]"]]],0,0,0,0,0,0,[0,["[0-36-9]\\d{8}"]]],882:["882",0,"[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",[7,8,9,10,11,12],[["(\\d{2})(\\d{5})","$1 $2",["16|342"]],["(\\d{2})(\\d{6})","$1 $2",["49"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["1[36]|9"]],["(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["16"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|23|3(?:[15]|4[57])|4|51"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["34"]],["(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["[1-35]"]]],0,0,0,0,0,0,[0,["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}",[7,8,9,10,12]],0,0,0,0,0,0,["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]],883:["883",0,"(?:[1-4]\\d|51)\\d{6,10}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,8})","$1 $2 $3",["[14]|2[24-689]|3[02-689]|51[24-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["21"]],["(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["51[13]"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[235]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[013-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]],888:["888",0,"\\d{11}",[11],[["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],0,0,0,0,0,0,[0,0,0,0,0,0,["\\d{11}"]]],979:["979",0,"[1359]\\d{8}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[1359]"]]],0,0,0,0,0,0,[0,0,0,["[1359]\\d{8}"]]]}};var J={},CP={get exports(){return J},set exports(e){J=e}},PP="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",OP=PP,_P=OP;function W4(){}function Y4(){}Y4.resetWarningCache=W4;var kP=function(){function e(r,i,o,a,l,u){if(u!==_P){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Y4,resetWarningCache:W4};return n.PropTypes=n,n};CP.exports=kP();var a1={},NP={get exports(){return a1},set exports(e){a1=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if(a==="string"||a==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var l=n.apply(null,o);l&&r.push(l)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var u in o)t.call(o,u)&&o[u]&&r.push(u)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(NP);const Gd=a1;function EP(e,t,n){switch(n){case"Backspace":t>0&&(e=e.slice(0,t-1)+e.slice(t),t--);break;case"Delete":e=e.slice(0,t)+e.slice(t+1);break}return{value:e,caret:t}}function IP(e,t,n){for(var r="",i=0,o=0;o<e.length;){var a=n(e[o],r);a!==void 0&&(r+=a,t!==void 0&&(t===o?i=r.length-1:t>o&&(i=r.length))),o++}t===void 0&&(i=r.length);var l={value:r,caret:i};return l}function TP(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=AP(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function AP(e,t){if(e){if(typeof e=="string")return sv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sv(e,t)}}function sv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s1(e,t){for(var n=0,r=TP(t.split("")),i;!(i=r()).done;){var o=i.value;o===e&&n++}return n}function RP(e,t){for(var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"x",r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:" ",i=e.length,o=s1("(",e),a=s1(")",e),l=o-a;l>0&&i<t.length;)e+=t[i].replace(n,r),t[i]===")"&&l--,i++;return e}function FP(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=DP(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DP(e,t){if(e){if(typeof e=="string")return lv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lv(e,t)}}function lv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function MP(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"x",n=arguments.length>2?arguments[2]:void 0;if(!e)return function(i){return{text:i}};var r=s1(t,e);return function(i){if(!i)return{text:"",template:e};for(var o=0,a="",l=FP(e.split("")),u;!(u=l()).done;){var d=u.value;if(d!==t){a+=d;continue}if(a+=i[o],o++,o===i.length&&i.length<r)break}return n&&(a=RP(a,e)),{text:a,template:e}}}function jP(e,t,n){typeof n=="string"&&(n=MP(n));var r=n(e)||{},i=r.text,o=r.template;if(i===void 0&&(i=e),o)if(t===void 0)t=i.length;else{for(var a=0,l=!1,u=-1;a<i.length&&a<o.length;){if(i[a]!==o[a]){if(t===0){l=!0,t=a;break}u=a,t--}a++}l||(t=u+1)}return{text:i,caret:t}}function LP(e){return e.hasAttribute("readonly")}function zP(e){if(e.selectionStart!==e.selectionEnd)return{start:e.selectionStart,end:e.selectionEnd}}var uv={Backspace:8,Delete:46};function UP(e){switch(e.keyCode){case uv.Backspace:return"Backspace";case uv.Delete:return"Delete"}}function BP(e){return e.selectionStart}function V4(e,t){t!==void 0&&(HP()?setTimeout(function(){return e.setSelectionRange(t,t)},0):e.setSelectionRange(t,t))}function HP(){if(typeof navigator<"u")return WP.test(navigator.userAgent)}var WP=/Android/i;function YP(e,t,n,r,i){l1(t,n,r,void 0,i)}function VP(e,t,n,r,i){if(!LP(t)){var o=UP(e);switch(o){case"Delete":case"Backspace":e.preventDefault();var a=zP(t);return a?(qP(t,a),l1(t,n,r,void 0,i)):l1(t,n,r,o,i)}}}function qP(e,t){var n=e.value;n=n.slice(0,t.start)+n.slice(t.end),e.value=n,V4(e,t.start)}function l1(e,t,n,r,i){var o=IP(e.value,BP(e),t),a=o.value,l=o.caret;if(r){var u=EP(a,l,r);a=u.value,l=u.caret}var d=jP(a,l,n),f=d.text;l=d.caret,e.value=f,V4(e,l),i(a)}var GP=["value","parse","format","inputComponent","onChange","onKeyDown"];function u1(){return u1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u1.apply(this,arguments)}function QP(e,t){if(e==null)return{};var n=KP(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function KP(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function fl(e,t){var n=e.value,r=e.parse,i=e.format,o=e.inputComponent,a=e.onChange,l=e.onKeyDown,u=QP(e,GP),d=C.useRef(),f=C.useCallback(function(b){d.current=b,t&&(typeof t=="function"?t(b):t.current=b)},[t]),h=C.useCallback(function(b){return YP(b,d.current,r,i,a)},[d,r,i,a]),m=C.useCallback(function(b){return l&&l(b),VP(b,d.current,r,i,a)},[d,r,i,a,l]);return ne.createElement(o,u1({},u,{ref:f,value:i(JP(n)?"":n).text,onKeyDown:m,onChange:h}))}fl=ne.forwardRef(fl);fl.propTypes={parse:J.func.isRequired,format:J.func.isRequired,inputComponent:J.elementType.isRequired,type:J.string.isRequired,value:J.string,onChange:J.func.isRequired,onKeyDown:J.func,onCut:J.func,onPaste:J.func};fl.defaultProps={inputComponent:"input",type:"text"};const ZP=fl;function JP(e){return e==null}function d1(e){return d1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d1(e)}function dv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function XP(e,t,n){return t&&dv(e.prototype,t),n&&dv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function eO(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function tO(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&hl(e,t)}function nO(e){var t=G4();return function(){var r=pl(e),i;if(t){var o=pl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return rO(this,i)}}function rO(e,t){if(t&&(d1(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return q4(e)}function q4(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c1(e){var t=typeof Map=="function"?new Map:void 0;return c1=function(r){if(r===null||!iO(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,i)}function i(){return ed(r,arguments,pl(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),hl(i,r)},c1(e)}function ed(e,t,n){return G4()?ed=Reflect.construct:ed=function(i,o,a){var l=[null];l.push.apply(l,o);var u=Function.bind.apply(i,l),d=new u;return a&&hl(d,a.prototype),d},ed.apply(null,arguments)}function G4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function iO(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function hl(e,t){return hl=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},hl(e,t)}function pl(e){return pl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},pl(e)}var pr=function(e){tO(n,e);var t=nO(n);function n(r){var i;return eO(this,n),i=t.call(this,r),Object.setPrototypeOf(q4(i),n.prototype),i.name=i.constructor.name,i}return XP(n)}(c1(Error)),cm=2,oO=17,aO=3,Rt="0-9０-９٠-٩۰-۹",sO="-‐-―−ー－",lO="／/",uO="．.",dO="  ­​⁠　",cO="()（）［］\\[\\]",fO="~⁓∼～",Dn="".concat(sO).concat(lO).concat(uO).concat(dO).concat(cO).concat(fO),ef="+＋";function cv(e,t){e=e.split("-"),t=t.split("-");for(var n=e[0].split("."),r=t[0].split("."),i=0;i<3;i++){var o=Number(n[i]),a=Number(r[i]);if(o>a)return 1;if(a>o)return-1;if(!isNaN(o)&&isNaN(a))return 1;if(isNaN(o)&&!isNaN(a))return-1}return e[1]&&t[1]?e[1]>t[1]?1:e[1]<t[1]?-1:0:!e[1]&&t[1]?1:e[1]&&!t[1]?-1:0}function Qd(e){return Qd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qd(e)}function tf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function nf(e,t,n){return t&&fv(e.prototype,t),n&&fv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var hO="1.2.0",pO="1.7.35",hv=" ext. ",gO=/^\d+$/,gt=function(){function e(t){tf(this,e),xO(t),this.metadata=t,K4.call(this,t)}return nf(e,[{key:"getCountries",value:function(){return Object.keys(this.metadata.countries).filter(function(n){return n!=="001"})}},{key:"getCountryMetadata",value:function(n){return this.metadata.countries[n]}},{key:"nonGeographic",value:function(){if(!(this.v1||this.v2||this.v3))return this.metadata.nonGeographic||this.metadata.nonGeographical}},{key:"hasCountry",value:function(n){return this.getCountryMetadata(n)!==void 0}},{key:"hasCallingCode",value:function(n){if(this.getCountryCodesForCallingCode(n))return!0;if(this.nonGeographic()){if(this.nonGeographic()[n])return!0}else{var r=this.countryCallingCodes()[n];if(r&&r.length===1&&r[0]==="001")return!0}}},{key:"isNonGeographicCallingCode",value:function(n){return this.nonGeographic()?!!this.nonGeographic()[n]:!this.getCountryCodesForCallingCode(n)}},{key:"country",value:function(n){return this.selectNumberingPlan(n)}},{key:"selectNumberingPlan",value:function(n,r){if(n&&gO.test(n)&&(r=n,n=null),n&&n!=="001"){if(!this.hasCountry(n))throw new Error("Unknown country: ".concat(n));this.numberingPlan=new pv(this.getCountryMetadata(n),this)}else if(r){if(!this.hasCallingCode(r))throw new Error("Unknown calling code: ".concat(r));this.numberingPlan=new pv(this.getNumberingPlanMetadata(r),this)}else this.numberingPlan=void 0;return this}},{key:"getCountryCodesForCallingCode",value:function(n){var r=this.countryCallingCodes()[n];if(r)return r.length===1&&r[0].length===3?void 0:r}},{key:"getCountryCodeForCallingCode",value:function(n){var r=this.getCountryCodesForCallingCode(n);if(r)return r[0]}},{key:"getNumberingPlanMetadata",value:function(n){var r=this.getCountryCodeForCallingCode(n);if(r)return this.getCountryMetadata(r);if(this.nonGeographic()){var i=this.nonGeographic()[n];if(i)return i}else{var o=this.countryCallingCodes()[n];if(o&&o.length===1&&o[0]==="001")return this.metadata.countries["001"]}}},{key:"countryCallingCode",value:function(){return this.numberingPlan.callingCode()}},{key:"IDDPrefix",value:function(){return this.numberingPlan.IDDPrefix()}},{key:"defaultIDDPrefix",value:function(){return this.numberingPlan.defaultIDDPrefix()}},{key:"nationalNumberPattern",value:function(){return this.numberingPlan.nationalNumberPattern()}},{key:"possibleLengths",value:function(){return this.numberingPlan.possibleLengths()}},{key:"formats",value:function(){return this.numberingPlan.formats()}},{key:"nationalPrefixForParsing",value:function(){return this.numberingPlan.nationalPrefixForParsing()}},{key:"nationalPrefixTransformRule",value:function(){return this.numberingPlan.nationalPrefixTransformRule()}},{key:"leadingDigits",value:function(){return this.numberingPlan.leadingDigits()}},{key:"hasTypes",value:function(){return this.numberingPlan.hasTypes()}},{key:"type",value:function(n){return this.numberingPlan.type(n)}},{key:"ext",value:function(){return this.numberingPlan.ext()}},{key:"countryCallingCodes",value:function(){return this.v1?this.metadata.country_phone_code_to_countries:this.metadata.country_calling_codes}},{key:"chooseCountryByCountryCallingCode",value:function(n){return this.selectNumberingPlan(n)}},{key:"hasSelectedNumberingPlan",value:function(){return this.numberingPlan!==void 0}}]),e}(),pv=function(){function e(t,n){tf(this,e),this.globalMetadataObject=n,this.metadata=t,K4.call(this,n.metadata)}return nf(e,[{key:"callingCode",value:function(){return this.metadata[0]}},{key:"getDefaultCountryMetadataForRegion",value:function(){return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())}},{key:"IDDPrefix",value:function(){if(!(this.v1||this.v2))return this.metadata[1]}},{key:"defaultIDDPrefix",value:function(){if(!(this.v1||this.v2))return this.metadata[12]}},{key:"nationalNumberPattern",value:function(){return this.v1||this.v2?this.metadata[1]:this.metadata[2]}},{key:"possibleLengths",value:function(){if(!this.v1)return this.metadata[this.v2?2:3]}},{key:"_getFormats",value:function(n){return n[this.v1?2:this.v2?3:4]}},{key:"formats",value:function(){var n=this,r=this._getFormats(this.metadata)||this._getFormats(this.getDefaultCountryMetadataForRegion())||[];return r.map(function(i){return new mO(i,n)})}},{key:"nationalPrefix",value:function(){return this.metadata[this.v1?3:this.v2?4:5]}},{key:"_getNationalPrefixFormattingRule",value:function(n){return n[this.v1?4:this.v2?5:6]}},{key:"nationalPrefixFormattingRule",value:function(){return this._getNationalPrefixFormattingRule(this.metadata)||this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())}},{key:"_nationalPrefixForParsing",value:function(){return this.metadata[this.v1?5:this.v2?6:7]}},{key:"nationalPrefixForParsing",value:function(){return this._nationalPrefixForParsing()||this.nationalPrefix()}},{key:"nationalPrefixTransformRule",value:function(){return this.metadata[this.v1?6:this.v2?7:8]}},{key:"_getNationalPrefixIsOptionalWhenFormatting",value:function(){return!!this.metadata[this.v1?7:this.v2?8:9]}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata)||this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())}},{key:"leadingDigits",value:function(){return this.metadata[this.v1?8:this.v2?9:10]}},{key:"types",value:function(){return this.metadata[this.v1?9:this.v2?10:11]}},{key:"hasTypes",value:function(){return this.types()&&this.types().length===0?!1:!!this.types()}},{key:"type",value:function(n){if(this.hasTypes()&&gv(this.types(),n))return new vO(gv(this.types(),n),this)}},{key:"ext",value:function(){return this.v1||this.v2?hv:this.metadata[13]||hv}}]),e}(),mO=function(){function e(t,n){tf(this,e),this._format=t,this.metadata=n}return nf(e,[{key:"pattern",value:function(){return this._format[0]}},{key:"format",value:function(){return this._format[1]}},{key:"leadingDigitsPatterns",value:function(){return this._format[2]||[]}},{key:"nationalPrefixFormattingRule",value:function(){return this._format[3]||this.metadata.nationalPrefixFormattingRule()}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return!!this._format[4]||this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"nationalPrefixIsMandatoryWhenFormattingInNationalFormat",value:function(){return this.usesNationalPrefix()&&!this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"usesNationalPrefix",value:function(){return!!(this.nationalPrefixFormattingRule()&&!yO.test(this.nationalPrefixFormattingRule()))}},{key:"internationalFormat",value:function(){return this._format[5]||this.format()}}]),e}(),yO=/^\(?\$1\)?$/,vO=function(){function e(t,n){tf(this,e),this.type=t,this.metadata=n}return nf(e,[{key:"pattern",value:function(){return this.metadata.v1?this.type:this.type[0]}},{key:"possibleLengths",value:function(){if(!this.metadata.v1)return this.type[1]||this.metadata.possibleLengths()}}]),e}();function gv(e,t){switch(t){case"FIXED_LINE":return e[0];case"MOBILE":return e[1];case"TOLL_FREE":return e[2];case"PREMIUM_RATE":return e[3];case"PERSONAL_NUMBER":return e[4];case"VOICEMAIL":return e[5];case"UAN":return e[6];case"PAGER":return e[7];case"VOIP":return e[8];case"SHARED_COST":return e[9]}}function xO(e){if(!e)throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");if(!bh(e)||!bh(e.countries))throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(bh(e)?"an object of shape: { "+Object.keys(e).join(", ")+" }":"a "+bO(e)+": "+e,"."))}var bh=function(t){return Qd(t)==="object"},bO=function(t){return Qd(t)};function Ci(e,t){if(t=new gt(t),t.hasCountry(e))return t.country(e).countryCallingCode();throw new Error("Unknown country: ".concat(e))}function Q4(e,t){return t.countries[e]!==void 0}function K4(e){var t=e.version;typeof t=="number"?(this.v1=t===1,this.v2=t===2,this.v3=t===3,this.v4=t===4):t?cv(t,hO)===-1?this.v2=!0:cv(t,pO)===-1?this.v3=!0:this.v4=!0:this.v1=!0}var $O=";ext=",yo=function(t){return"([".concat(Rt,"]{1,").concat(t,"})")};function Z4(e){var t="20",n="15",r="9",i="6",o="[  \\t,]*",a="[:\\.．]?[  \\t,-]*",l="#?",u="(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)",d="(?:[xｘ#＃~～]|int|ｉｎｔ)",f="[- ]+",h="[  \\t]*",m="(?:,{2}|;)",b=$O+yo(t),v=o+u+a+yo(t)+l,w=o+d+a+yo(r)+l,x=f+yo(i)+"#",p=h+m+a+yo(n)+l,g=h+"(?:,)+"+a+yo(r)+l;return b+"|"+v+"|"+w+"|"+x+"|"+p+"|"+g}var wO="["+Rt+"]{"+cm+"}",SO="["+ef+"]{0,1}(?:["+Dn+"]*["+Rt+"]){3,}["+Dn+Rt+"]*",CO=new RegExp("^["+ef+"]{0,1}(?:["+Dn+"]*["+Rt+"]){1,2}$","i"),PO=SO+"(?:"+Z4()+")?",OO=new RegExp("^"+wO+"$|^"+PO+"$","i");function _O(e){return e.length>=cm&&OO.test(e)}function kO(e){return CO.test(e)}var mv=new RegExp("(?:"+Z4()+")$","i");function NO(e){var t=e.search(mv);if(t<0)return{};for(var n=e.slice(0,t),r=e.match(mv),i=1;i<r.length;){if(r[i])return{number:n,ext:r[i]};i++}}function EO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=IO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function IO(e,t){if(e){if(typeof e=="string")return yv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yv(e,t)}}function yv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var TO={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","０":"0","１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9"};function J4(e){return TO[e]}function Kd(e){for(var t="",n=EO(e.split("")),r;!(r=n()).done;){var i=r.value,o=J4(i);o&&(t+=o)}return t}function AO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=RO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function RO(e,t){if(e){if(typeof e=="string")return vv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vv(e,t)}}function vv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f1(e){for(var t="",n=AO(e.split("")),r;!(r=n()).done;){var i=r.value;t+=X4(i,t)||""}return t}function X4(e,t){return e==="+"?t?void 0:"+":J4(e)}function FO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=DO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DO(e,t){if(e){if(typeof e=="string")return xv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xv(e,t)}}function xv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function MO(e,t){for(var n=e.slice(),r=FO(t),i;!(i=r()).done;){var o=i.value;e.indexOf(o)<0&&n.push(o)}return n.sort(function(a,l){return a-l})}function rf(e,t){return ew(e,void 0,t)}function ew(e,t,n){var r=n.type(t),i=r&&r.possibleLengths()||n.possibleLengths();if(!i)return"IS_POSSIBLE";if(t==="FIXED_LINE_OR_MOBILE"){if(!n.type("FIXED_LINE"))return ew(e,"MOBILE",n);var o=n.type("MOBILE");o&&(i=MO(i,o.possibleLengths()))}else if(t&&!r)return"INVALID_LENGTH";var a=e.length,l=i[0];return l===a?"IS_POSSIBLE":l>a?"TOO_SHORT":i[i.length-1]<a?"TOO_LONG":i.indexOf(a,1)>=0?"IS_POSSIBLE":"INVALID_LENGTH"}function jO(e,t,n){if(t===void 0&&(t={}),n=new gt(n),t.v2){if(!e.countryCallingCode)throw new Error("Invalid phone number object passed");n.selectNumberingPlan(e.countryCallingCode)}else{if(!e.phone)return!1;if(e.country){if(!n.hasCountry(e.country))throw new Error("Unknown country: ".concat(e.country));n.country(e.country)}else{if(!e.countryCallingCode)throw new Error("Invalid phone number object passed");n.selectNumberingPlan(e.countryCallingCode)}}if(n.possibleLengths())return tw(e.phone||e.nationalNumber,n);if(e.countryCallingCode&&n.isNonGeographicCallingCode(e.countryCallingCode))return!0;throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')}function tw(e,t){switch(rf(e,t)){case"IS_POSSIBLE":return!0;default:return!1}}function _r(e,t){return e=e||"",new RegExp("^(?:"+t+")$").test(e)}function LO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=zO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zO(e,t){if(e){if(typeof e=="string")return bv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bv(e,t)}}function bv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var UO=["MOBILE","PREMIUM_RATE","TOLL_FREE","SHARED_COST","VOIP","PERSONAL_NUMBER","PAGER","UAN","VOICEMAIL"];function fm(e,t,n){if(t=t||{},!!e.country){n=new gt(n),n.selectNumberingPlan(e.country,e.countryCallingCode);var r=t.v2?e.nationalNumber:e.phone;if(_r(r,n.nationalNumberPattern())){if($h(r,"FIXED_LINE",n))return n.type("MOBILE")&&n.type("MOBILE").pattern()===""||!n.type("MOBILE")||$h(r,"MOBILE",n)?"FIXED_LINE_OR_MOBILE":"FIXED_LINE";for(var i=LO(UO),o;!(o=i()).done;){var a=o.value;if($h(r,a,n))return a}}}}function $h(e,t,n){return t=n.type(t),!t||!t.pattern()||t.possibleLengths()&&t.possibleLengths().indexOf(e.length)<0?!1:_r(e,t.pattern())}function BO(e,t,n){if(t=t||{},n=new gt(n),n.selectNumberingPlan(e.country,e.countryCallingCode),n.hasTypes())return fm(e,t,n.metadata)!==void 0;var r=t.v2?e.nationalNumber:e.phone;return _r(r,n.nationalNumberPattern())}function HO(e,t,n){var r=new gt(n),i=r.getCountryCodesForCallingCode(e);return i?i.filter(function(o){return WO(t,o,n)}):[]}function WO(e,t,n){var r=new gt(n);return r.selectNumberingPlan(t),r.numberingPlan.possibleLengths().indexOf(e.length)>=0}function nw(e){return e.replace(new RegExp("[".concat(Dn,"]+"),"g")," ").trim()}var rw=/(\$\d)/;function iw(e,t,n){var r=n.useInternationalFormat,i=n.withNationalPrefix;n.carrierCode,n.metadata;var o=e.replace(new RegExp(t.pattern()),r?t.internationalFormat():i&&t.nationalPrefixFormattingRule()?t.format().replace(rw,t.nationalPrefixFormattingRule()):t.format());return r?nw(o):o}var YO=/^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;function VO(e,t,n){var r=new gt(n);if(r.selectNumberingPlan(e,t),r.defaultIDDPrefix())return r.defaultIDDPrefix();if(YO.test(r.IDDPrefix()))return r.IDDPrefix()}function qO(e){var t=e.number,n=e.ext;if(!t)return"";if(t[0]!=="+")throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');return"tel:".concat(t).concat(n?";ext="+n:"")}function GO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=QO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function QO(e,t){if(e){if(typeof e=="string")return $v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $v(e,t)}}function $v(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function wv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Sv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wv(Object(n),!0).forEach(function(r){KO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function KO(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Cv={formatExtension:function(t,n,r){return"".concat(t).concat(r.ext()).concat(n)}};function ZO(e,t,n,r){if(n?n=Sv(Sv({},Cv),n):n=Cv,r=new gt(r),e.country&&e.country!=="001"){if(!r.hasCountry(e.country))throw new Error("Unknown country: ".concat(e.country));r.country(e.country)}else if(e.countryCallingCode)r.selectNumberingPlan(e.countryCallingCode);else return e.phone||"";var i=r.countryCallingCode(),o=n.v2?e.nationalNumber:e.phone,a;switch(t){case"NATIONAL":return o?(a=Zd(o,e.carrierCode,"NATIONAL",r,n),wh(a,e.ext,r,n.formatExtension)):"";case"INTERNATIONAL":return o?(a=Zd(o,null,"INTERNATIONAL",r,n),a="+".concat(i," ").concat(a),wh(a,e.ext,r,n.formatExtension)):"+".concat(i);case"E.164":return"+".concat(i).concat(o);case"RFC3966":return qO({number:"+".concat(i).concat(o),ext:e.ext});case"IDD":if(!n.fromCountry)return;var l=XO(o,e.carrierCode,i,n.fromCountry,r);return wh(l,e.ext,r,n.formatExtension);default:throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t,'"'))}}function Zd(e,t,n,r,i){var o=JO(r.formats(),e);return o?iw(e,o,{useInternationalFormat:n==="INTERNATIONAL",withNationalPrefix:!(o.nationalPrefixIsOptionalWhenFormattingInNationalFormat()&&i&&i.nationalPrefix===!1),carrierCode:t,metadata:r}):e}function JO(e,t){for(var n=GO(e),r;!(r=n()).done;){var i=r.value;if(i.leadingDigitsPatterns().length>0){var o=i.leadingDigitsPatterns()[i.leadingDigitsPatterns().length-1];if(t.search(o)!==0)continue}if(_r(t,i.pattern()))return i}}function wh(e,t,n,r){return t?r(e,t,n):e}function XO(e,t,n,r,i){var o=Ci(r,i.metadata);if(o===n){var a=Zd(e,t,"NATIONAL",i);return n==="1"?n+" "+a:a}var l=VO(r,void 0,i.metadata);if(l)return"".concat(l," ").concat(n," ").concat(Zd(e,null,"INTERNATIONAL",i))}function Pv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ov(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pv(Object(n),!0).forEach(function(r){e_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function e_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n_(e,t,n){return t&&_v(e.prototype,t),n&&_v(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var ow=function(){function e(t,n,r){if(t_(this,e),!t)throw new TypeError("`country` or `countryCallingCode` not passed");if(!n)throw new TypeError("`nationalNumber` not passed");if(!r)throw new TypeError("`metadata` not passed");var i=i_(t,r),o=i.country,a=i.countryCallingCode;this.country=o,this.countryCallingCode=a,this.nationalNumber=n,this.number="+"+this.countryCallingCode+this.nationalNumber,this.metadata=r}return n_(e,[{key:"setExt",value:function(n){this.ext=n}},{key:"getPossibleCountries",value:function(){return this.country?[this.country]:HO(this.countryCallingCode,this.nationalNumber,this.metadata)}},{key:"isPossible",value:function(){return jO(this,{v2:!0},this.metadata)}},{key:"isValid",value:function(){return BO(this,{v2:!0},this.metadata)}},{key:"isNonGeographic",value:function(){var n=new gt(this.metadata);return n.isNonGeographicCallingCode(this.countryCallingCode)}},{key:"isEqual",value:function(n){return this.number===n.number&&this.ext===n.ext}},{key:"getType",value:function(){return fm(this,{v2:!0},this.metadata)}},{key:"format",value:function(n,r){return ZO(this,n,r?Ov(Ov({},r),{},{v2:!0}):{v2:!0},this.metadata)}},{key:"formatNational",value:function(n){return this.format("NATIONAL",n)}},{key:"formatInternational",value:function(n){return this.format("INTERNATIONAL",n)}},{key:"getURI",value:function(n){return this.format("RFC3966",n)}}]),e}(),r_=function(t){return/^[A-Z]{2}$/.test(t)};function i_(e,t){var n,r,i=new gt(t);return r_(e)?(n=e,i.selectNumberingPlan(n),r=i.countryCallingCode()):r=e,{country:n,countryCallingCode:r}}var o_=new RegExp("(["+Rt+"])");function aw(e,t,n,r){if(t){var i=new gt(r);i.selectNumberingPlan(t,n);var o=new RegExp(i.IDDPrefix());if(e.search(o)===0){e=e.slice(e.match(o)[0].length);var a=e.match(o_);if(!(a&&a[1]!=null&&a[1].length>0&&a[1]==="0"))return e}}}function h1(e,t){if(e&&t.numberingPlan.nationalPrefixForParsing()){var n=new RegExp("^(?:"+t.numberingPlan.nationalPrefixForParsing()+")"),r=n.exec(e);if(r){var i,o,a=r.length-1,l=a>0&&r[a];if(t.nationalPrefixTransformRule()&&l)i=e.replace(n,t.nationalPrefixTransformRule()),a>1&&(o=r[1]);else{var u=r[0];i=e.slice(u.length),l&&(o=r[1])}var d;if(l){var f=e.indexOf(r[1]),h=e.slice(0,f);h===t.numberingPlan.nationalPrefix()&&(d=t.numberingPlan.nationalPrefix())}else d=r[0];return{nationalNumber:i,nationalPrefix:d,carrierCode:o}}}return{nationalNumber:e}}function p1(e,t){var n=h1(e,t),r=n.carrierCode,i=n.nationalNumber;if(i!==e){if(!a_(e,i,t))return{nationalNumber:e};if(t.possibleLengths()&&!s_(i,t))return{nationalNumber:e}}return{nationalNumber:i,carrierCode:r}}function a_(e,t,n){return!(_r(e,n.nationalNumberPattern())&&!_r(t,n.nationalNumberPattern()))}function s_(e,t){switch(rf(e,t)){case"TOO_SHORT":case"INVALID_LENGTH":return!1;default:return!0}}function sw(e,t,n,r){var i=t?Ci(t,r):n;if(e.indexOf(i)===0){r=new gt(r),r.selectNumberingPlan(t,n);var o=e.slice(i.length),a=p1(o,r),l=a.nationalNumber,u=p1(e,r),d=u.nationalNumber;if(!_r(d,r.nationalNumberPattern())&&_r(l,r.nationalNumberPattern())||rf(d,r)==="TOO_LONG")return{countryCallingCode:i,number:o}}return{number:e}}function lw(e,t,n,r){if(!e)return{};var i;if(e[0]!=="+"){var o=aw(e,t,n,r);if(o&&o!==e)i=!0,e="+"+o;else{if(t||n){var a=sw(e,t,n,r),l=a.countryCallingCode,u=a.number;if(l)return{countryCallingCodeSource:"FROM_NUMBER_WITHOUT_PLUS_SIGN",countryCallingCode:l,number:u}}return{number:e}}}if(e[1]==="0")return{};r=new gt(r);for(var d=2;d-1<=aO&&d<=e.length;){var f=e.slice(1,d);if(r.hasCallingCode(f))return r.selectNumberingPlan(f),{countryCallingCodeSource:i?"FROM_NUMBER_WITH_IDD":"FROM_NUMBER_WITH_PLUS_SIGN",countryCallingCode:f,number:e.slice(d)};d++}return{}}function l_(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=u_(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u_(e,t){if(e){if(typeof e=="string")return kv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kv(e,t)}}function kv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d_(e,t,n){n=new gt(n);for(var r=l_(e),i;!(i=r()).done;){var o=i.value;if(n.country(o),n.leadingDigits()){if(t&&t.search(n.leadingDigits())===0)return o}else if(fm({phone:t,country:o},void 0,n.metadata))return o}}var c_=!1;function uw(e,t,n){if(c_&&n.isNonGeographicCallingCode(e))return"001";var r=n.getCountryCodesForCallingCode(e);if(r)return r.length===1?r[0]:d_(r,t,n.metadata)}var dw="+",f_="[\\-\\.\\(\\)]?",Nv="(["+Rt+"]|"+f_+")",h_="^\\"+dw+Nv+"*["+Rt+"]"+Nv+"*$",p_=new RegExp(h_,"g"),g1=Rt,g_="["+g1+"]+((\\-)*["+g1+"])*",m_="a-zA-Z",y_="["+m_+"]+((\\-)*["+g1+"])*",v_="^("+g_+"\\.)*"+y_+"\\.?$",x_=new RegExp(v_,"g"),Ev="tel:",m1=";phone-context=",b_=";isub=";function $_(e){var t=e.indexOf(m1);if(t<0)return null;var n=t+m1.length;if(n>=e.length)return"";var r=e.indexOf(";",n);return r>=0?e.substring(n,r):e.substring(n)}function w_(e){return e===null?!0:e.length===0?!1:p_.test(e)||x_.test(e)}function S_(e,t){var n=t.extractFormattedPhoneNumber,r=$_(e);if(!w_(r))throw new pr("NOT_A_NUMBER");var i;if(r===null)i=n(e)||"";else{i="",r.charAt(0)===dw&&(i+=r);var o=e.indexOf(Ev),a;o>=0?a=o+Ev.length:a=0;var l=e.indexOf(m1);i+=e.substring(a,l)}var u=i.indexOf(b_);if(u>0&&(i=i.substring(0,u)),i!=="")return i}var C_=250,P_=new RegExp("["+ef+Rt+"]"),O_=new RegExp("[^"+Rt+"#]+$");function __(e,t,n){if(t=t||{},n=new gt(n),t.defaultCountry&&!n.hasCountry(t.defaultCountry))throw t.v2?new pr("INVALID_COUNTRY"):new Error("Unknown country: ".concat(t.defaultCountry));var r=N_(e,t.v2,t.extract),i=r.number,o=r.ext,a=r.error;if(!i){if(t.v2)throw a==="TOO_SHORT"?new pr("TOO_SHORT"):new pr("NOT_A_NUMBER");return{}}var l=I_(i,t.defaultCountry,t.defaultCallingCode,n),u=l.country,d=l.nationalNumber,f=l.countryCallingCode,h=l.countryCallingCodeSource,m=l.carrierCode;if(!n.hasSelectedNumberingPlan()){if(t.v2)throw new pr("INVALID_COUNTRY");return{}}if(!d||d.length<cm){if(t.v2)throw new pr("TOO_SHORT");return{}}if(d.length>oO){if(t.v2)throw new pr("TOO_LONG");return{}}if(t.v2){var b=new ow(f,d,n.metadata);return u&&(b.country=u),m&&(b.carrierCode=m),o&&(b.ext=o),b.__countryCallingCodeSource=h,b}var v=(t.extended?n.hasSelectedNumberingPlan():u)?_r(d,n.nationalNumberPattern()):!1;return t.extended?{country:u,countryCallingCode:f,carrierCode:m,valid:v,possible:v?!0:!!(t.extended===!0&&n.possibleLengths()&&tw(d,n)),phone:d,ext:o}:v?E_(u,d,o):{}}function k_(e,t,n){if(e){if(e.length>C_){if(n)throw new pr("TOO_LONG");return}if(t===!1)return e;var r=e.search(P_);if(!(r<0))return e.slice(r).replace(O_,"")}}function N_(e,t,n){var r=S_(e,{extractFormattedPhoneNumber:function(a){return k_(a,n,t)}});if(!r)return{};if(!_O(r))return kO(r)?{error:"TOO_SHORT"}:{};var i=NO(r);return i.ext?i:{number:r}}function E_(e,t,n){var r={country:e,phone:t};return n&&(r.ext=n),r}function I_(e,t,n,r){var i=lw(f1(e),t,n,r.metadata),o=i.countryCallingCodeSource,a=i.countryCallingCode,l=i.number,u;if(a)r.selectNumberingPlan(a);else if(l&&(t||n))r.selectNumberingPlan(t,n),t&&(u=t),a=n||Ci(t,r.metadata);else return{};if(!l)return{countryCallingCodeSource:o,countryCallingCode:a};var d=p1(f1(l),r),f=d.nationalNumber,h=d.carrierCode,m=uw(a,f,r);return m&&(u=m,m==="001"||r.country(u)),{country:u,countryCallingCode:a,countryCallingCodeSource:o,nationalNumber:f,carrierCode:h}}function Iv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Tv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Iv(Object(n),!0).forEach(function(r){T_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Iv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function T_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A_(e,t,n){return __(e,Tv(Tv({},t),{},{v2:!0}),n)}function y1(e){return y1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y1(e)}function Av(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function R_(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Av(Object(n),!0).forEach(function(r){F_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Av(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function F_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D_(e,t){return z_(e)||L_(e,t)||j_(e,t)||M_()}function M_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j_(e,t){if(e){if(typeof e=="string")return Rv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rv(e,t)}}function Rv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L_(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function z_(e){if(Array.isArray(e))return e}function U_(e){var t=Array.prototype.slice.call(e),n=D_(t,4),r=n[0],i=n[1],o=n[2],a=n[3],l,u,d;if(typeof r=="string")l=r;else throw new TypeError("A text for parsing must be a string.");if(!i||typeof i=="string")a?(u=o,d=a):(u=void 0,d=o),i&&(u=R_({defaultCountry:i},u));else if(B_(i))o?(u=i,d=o):d=i;else throw new Error("Invalid second argument: ".concat(i));return{text:l,options:u,metadata:d}}var B_=function(t){return y1(t)==="object"};function Fv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Dv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fv(Object(n),!0).forEach(function(r){H_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function H_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W_(e,t,n){t&&t.defaultCountry&&!Q4(t.defaultCountry,n)&&(t=Dv(Dv({},t),{},{defaultCountry:void 0}));try{return A_(e,t,n)}catch(r){if(!(r instanceof pr))throw r}}function Y_(){var e=U_(arguments),t=e.text,n=e.options,r=e.metadata;return W_(t,n,r)}function V_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Mv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q_(e,t,n){return t&&Mv(e.prototype,t),n&&Mv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var G_=function(){function e(t){var n=t.onCountryChange,r=t.onCallingCodeChange;V_(this,e),this.onCountryChange=n,this.onCallingCodeChange=r}return q_(e,[{key:"reset",value:function(n){var r=n.country,i=n.callingCode;this.international=!1,this.IDDPrefix=void 0,this.missingPlus=void 0,this.callingCode=void 0,this.digits="",this.resetNationalSignificantNumber(),this.initCountryAndCallingCode(r,i)}},{key:"resetNationalSignificantNumber",value:function(){this.nationalSignificantNumber=this.getNationalDigits(),this.nationalSignificantNumberMatchesInput=!0,this.nationalPrefix=void 0,this.carrierCode=void 0,this.complexPrefixBeforeNationalSignificantNumber=void 0}},{key:"update",value:function(n){for(var r=0,i=Object.keys(n);r<i.length;r++){var o=i[r];this[o]=n[o]}}},{key:"initCountryAndCallingCode",value:function(n,r){this.setCountry(n),this.setCallingCode(r)}},{key:"setCountry",value:function(n){this.country=n,this.onCountryChange(n)}},{key:"setCallingCode",value:function(n){this.callingCode=n,this.onCallingCodeChange(n,this.country)}},{key:"startInternationalNumber",value:function(n,r){this.international=!0,this.initCountryAndCallingCode(n,r)}},{key:"appendDigits",value:function(n){this.digits+=n}},{key:"appendNationalSignificantNumberDigits",value:function(n){this.nationalSignificantNumber+=n}},{key:"getNationalDigits",value:function(){return this.international?this.digits.slice((this.IDDPrefix?this.IDDPrefix.length:0)+(this.callingCode?this.callingCode.length:0)):this.digits}},{key:"getDigitsWithoutInternationalPrefix",value:function(){return this.international&&this.IDDPrefix?this.digits.slice(this.IDDPrefix.length):this.digits}}]),e}();function Q_(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=K_(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K_(e,t){if(e){if(typeof e=="string")return jv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jv(e,t)}}function jv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _n="x",Sh=new RegExp(_n);function td(e,t){if(t<1)return"";for(var n="";t>1;)t&1&&(n+=e),t>>=1,e+=e;return n+e}function Lv(e,t){return e[t]===")"&&t++,Z_(e.slice(0,t))}function Z_(e){for(var t=[],n=0;n<e.length;)e[n]==="("?t.push(n):e[n]===")"&&t.pop(),n++;var r=0,i="";t.push(e.length);for(var o=0,a=t;o<a.length;o++){var l=a[o];i+=e.slice(r,l),r=l+1}return i}function J_(e,t,n){for(var r=Q_(n.split("")),i;!(i=r()).done;){var o=i.value;if(e.slice(t+1).search(Sh)<0)return;t=e.search(Sh),e=e.replace(Sh,o)}return[e,t]}function X_(e,t,n){var r=n.metadata,i=n.shouldTryNationalPrefixFormattingRule,o=n.getSeparatorAfterNationalPrefix,a=new RegExp("^(?:".concat(t.pattern(),")$"));if(a.test(e.nationalSignificantNumber))return tk(e,t,{metadata:r,shouldTryNationalPrefixFormattingRule:i,getSeparatorAfterNationalPrefix:o})}function ek(e,t){return rf(e,t)==="IS_POSSIBLE"}function tk(e,t,n){var r=n.metadata,i=n.shouldTryNationalPrefixFormattingRule,o=n.getSeparatorAfterNationalPrefix;if(e.nationalSignificantNumber,e.international,e.nationalPrefix,e.carrierCode,i(t)){var a=zv(e,t,{useNationalPrefixFormattingRule:!0,getSeparatorAfterNationalPrefix:o,metadata:r});if(a)return a}return zv(e,t,{useNationalPrefixFormattingRule:!1,getSeparatorAfterNationalPrefix:o,metadata:r})}function zv(e,t,n){var r=n.metadata,i=n.useNationalPrefixFormattingRule,o=n.getSeparatorAfterNationalPrefix,a=iw(e.nationalSignificantNumber,t,{carrierCode:e.carrierCode,useInternationalFormat:e.international,withNationalPrefix:i,metadata:r});if(i||(e.nationalPrefix?a=e.nationalPrefix+o(t)+a:e.complexPrefixBeforeNationalSignificantNumber&&(a=e.complexPrefixBeforeNationalSignificantNumber+" "+a)),nk(a,e))return a}function nk(e,t){return Kd(e)===t.getNationalDigits()}function rk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Uv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ik(e,t,n){return t&&Uv(e.prototype,t),n&&Uv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var ok=function(){function e(){rk(this,e)}return ik(e,[{key:"parse",value:function(n){if(this.context=[{or:!0,instructions:[]}],this.parsePattern(n),this.context.length!==1)throw new Error("Non-finalized contexts left when pattern parse ended");var r=this.context[0],i=r.branches,o=r.instructions;if(i)return{op:"|",args:i.concat([Ch(o)])};if(o.length===0)throw new Error("Pattern is required");return o.length===1?o[0]:o}},{key:"startContext",value:function(n){this.context.push(n)}},{key:"endContext",value:function(){this.context.pop()}},{key:"getContext",value:function(){return this.context[this.context.length-1]}},{key:"parsePattern",value:function(n){if(!n)throw new Error("Pattern is required");var r=n.match(lk);if(!r){if(sk.test(n))throw new Error("Illegal characters found in a pattern: ".concat(n));this.getContext().instructions=this.getContext().instructions.concat(n.split(""));return}var i=r[1],o=n.slice(0,r.index),a=n.slice(r.index+i.length);switch(i){case"(?:":o&&this.parsePattern(o),this.startContext({or:!0,instructions:[],branches:[]});break;case")":if(!this.getContext().or)throw new Error('")" operator must be preceded by "(?:" operator');if(o&&this.parsePattern(o),this.getContext().instructions.length===0)throw new Error('No instructions found after "|" operator in an "or" group');var l=this.getContext(),u=l.branches;u.push(Ch(this.getContext().instructions)),this.endContext(),this.getContext().instructions.push({op:"|",args:u});break;case"|":if(!this.getContext().or)throw new Error('"|" operator can only be used inside "or" groups');if(o&&this.parsePattern(o),!this.getContext().branches)if(this.context.length===1)this.getContext().branches=[];else throw new Error('"branches" not found in an "or" group context');this.getContext().branches.push(Ch(this.getContext().instructions)),this.getContext().instructions=[];break;case"[":o&&this.parsePattern(o),this.startContext({oneOfSet:!0});break;case"]":if(!this.getContext().oneOfSet)throw new Error('"]" operator must be preceded by "[" operator');this.endContext(),this.getContext().instructions.push({op:"[]",args:ak(o)});break;default:throw new Error("Unknown operator: ".concat(i))}a&&this.parsePattern(a)}}]),e}();function ak(e){for(var t=[],n=0;n<e.length;){if(e[n]==="-"){if(n===0||n===e.length-1)throw new Error("Couldn't parse a one-of set pattern: ".concat(e));for(var r=e[n-1].charCodeAt(0)+1,i=e[n+1].charCodeAt(0)-1,o=r;o<=i;)t.push(String.fromCharCode(o)),o++}else t.push(e[n]);n++}return t}var sk=/[\(\)\[\]\?\:\|]/,lk=new RegExp("(\\||\\(\\?\\:|\\)|\\[|\\])");function Ch(e){return e.length===1?e[0]:e}function Bv(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=uk(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uk(e,t){if(e){if(typeof e=="string")return Hv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hv(e,t)}}function Hv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function dk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ck(e,t,n){return t&&Wv(e.prototype,t),n&&Wv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var fk=function(){function e(t){dk(this,e),this.matchTree=new ok().parse(t)}return ck(e,[{key:"match",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.allowOverflow;if(!n)throw new Error("String is required");var o=v1(n.split(""),this.matchTree,!0);if(o&&o.match&&delete o.matchedChars,!(o&&o.overflow&&!i))return o}}]),e}();function v1(e,t,n){if(typeof t=="string"){var r=e.join("");return t.indexOf(r)===0?e.length===t.length?{match:!0,matchedChars:e}:{partialMatch:!0}:r.indexOf(t)===0?n&&e.length>t.length?{overflow:!0}:{match:!0,matchedChars:e.slice(0,t.length)}:void 0}if(Array.isArray(t)){for(var i=e.slice(),o=0;o<t.length;){var a=t[o],l=v1(i,a,n&&o===t.length-1);if(l){if(l.overflow)return l;if(l.match){if(i=i.slice(l.matchedChars.length),i.length===0)return o===t.length-1?{match:!0,matchedChars:e}:{partialMatch:!0}}else{if(l.partialMatch)return{partialMatch:!0};throw new Error(`Unsupported match result:
`.concat(JSON.stringify(l,null,2)))}}else return;o++}return n?{overflow:!0}:{match:!0,matchedChars:e.slice(0,e.length-i.length)}}switch(t.op){case"|":for(var u,d=Bv(t.args),f;!(f=d()).done;){var h=f.value,m=v1(e,h,n);if(m){if(m.overflow)return m;if(m.match)return{match:!0,matchedChars:m.matchedChars};if(m.partialMatch)u=!0;else throw new Error(`Unsupported match result:
`.concat(JSON.stringify(m,null,2)))}}return u?{partialMatch:!0}:void 0;case"[]":for(var b=Bv(t.args),v;!(v=b()).done;){var w=v.value;if(e[0]===w)return e.length===1?{match:!0,matchedChars:e}:n?{overflow:!0}:{match:!0,matchedChars:[w]}}return;default:throw new Error("Unsupported instruction tree: ".concat(t))}}function Yv(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=hk(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hk(e,t){if(e){if(typeof e=="string")return Vv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vv(e,t)}}function Vv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function gk(e,t,n){return t&&qv(e.prototype,t),n&&qv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var x1="9",mk=15,yk=td(x1,mk),vk=/[- ]/,xk=function(){return/\[([^\[\]])*\]/g},bk=function(){return/\d(?=[^,}][^,}])/g},$k=new RegExp("["+Dn+"]*\\$1["+Dn+"]*(\\$\\d["+Dn+"]*)*$"),Gv=3,wk=function(){function e(t){t.state;var n=t.metadata;pk(this,e),this.metadata=n,this.resetFormat()}return gk(e,[{key:"resetFormat",value:function(){this.chosenFormat=void 0,this.template=void 0,this.nationalNumberTemplate=void 0,this.populatedNationalNumberTemplate=void 0,this.populatedNationalNumberTemplatePosition=-1}},{key:"reset",value:function(n,r){this.resetFormat(),n?(this.isNANP=n.callingCode()==="1",this.matchingFormats=n.formats(),r.nationalSignificantNumber&&this.narrowDownMatchingFormats(r)):(this.isNANP=void 0,this.matchingFormats=[])}},{key:"format",value:function(n,r){var i=this;if(ek(r.nationalSignificantNumber,this.metadata))for(var o=Yv(this.matchingFormats),a;!(a=o()).done;){var l=a.value,u=X_(r,l,{metadata:this.metadata,shouldTryNationalPrefixFormattingRule:function(f){return i.shouldTryNationalPrefixFormattingRule(f,{international:r.international,nationalPrefix:r.nationalPrefix})},getSeparatorAfterNationalPrefix:function(f){return i.getSeparatorAfterNationalPrefix(f)}});if(u)return this.resetFormat(),this.chosenFormat=l,this.setNationalNumberTemplate(u.replace(/\d/g,_n),r),this.populatedNationalNumberTemplate=u,this.populatedNationalNumberTemplatePosition=this.template.lastIndexOf(_n),u}return this.formatNationalNumberWithNextDigits(n,r)}},{key:"formatNationalNumberWithNextDigits",value:function(n,r){var i=this.chosenFormat,o=this.chooseFormat(r);if(o)return o===i?this.formatNextNationalNumberDigits(n):this.formatNextNationalNumberDigits(r.getNationalDigits())}},{key:"narrowDownMatchingFormats",value:function(n){var r=this,i=n.nationalSignificantNumber,o=n.nationalPrefix,a=n.international,l=i,u=l.length-Gv;u<0&&(u=0),this.matchingFormats=this.matchingFormats.filter(function(d){return r.formatSuits(d,a,o)&&r.formatMatches(d,l,u)}),this.chosenFormat&&this.matchingFormats.indexOf(this.chosenFormat)===-1&&this.resetFormat()}},{key:"formatSuits",value:function(n,r,i){return!(i&&!n.usesNationalPrefix()&&!n.nationalPrefixIsOptionalWhenFormattingInNationalFormat()||!r&&!i&&n.nationalPrefixIsMandatoryWhenFormattingInNationalFormat())}},{key:"formatMatches",value:function(n,r,i){var o=n.leadingDigitsPatterns().length;if(o===0)return!0;i=Math.min(i,o-1);var a=n.leadingDigitsPatterns()[i];if(r.length<Gv)try{return new fk(a).match(r,{allowOverflow:!0})!==void 0}catch(l){return console.error(l),!0}return new RegExp("^(".concat(a,")")).test(r)}},{key:"getFormatFormat",value:function(n,r){return r?n.internationalFormat():n.format()}},{key:"chooseFormat",value:function(n){for(var r=this,i=function(){var d=a.value;return r.chosenFormat===d?"break":$k.test(r.getFormatFormat(d,n.international))?r.createTemplateForFormat(d,n)?(r.chosenFormat=d,"break"):(r.matchingFormats=r.matchingFormats.filter(function(f){return f!==d}),"continue"):"continue"},o=Yv(this.matchingFormats.slice()),a;!(a=o()).done;){var l=i();if(l==="break")break}return this.chosenFormat||this.resetFormat(),this.chosenFormat}},{key:"createTemplateForFormat",value:function(n,r){if(!(n.pattern().indexOf("|")>=0)){var i=this.getTemplateForFormat(n,r);if(i)return this.setNationalNumberTemplate(i,r),!0}}},{key:"getSeparatorAfterNationalPrefix",value:function(n){return this.isNANP||n&&n.nationalPrefixFormattingRule()&&vk.test(n.nationalPrefixFormattingRule())?" ":""}},{key:"getInternationalPrefixBeforeCountryCallingCode",value:function(n,r){var i=n.IDDPrefix,o=n.missingPlus;return i?r&&r.spacing===!1?i:i+" ":o?"":"+"}},{key:"getTemplate",value:function(n){if(this.template){for(var r=-1,i=0,o=n.international?this.getInternationalPrefixBeforeCountryCallingCode(n,{spacing:!1}):"";i<o.length+n.getDigitsWithoutInternationalPrefix().length;)r=this.template.indexOf(_n,r+1),i++;return Lv(this.template,r+1)}}},{key:"setNationalNumberTemplate",value:function(n,r){this.nationalNumberTemplate=n,this.populatedNationalNumberTemplate=n,this.populatedNationalNumberTemplatePosition=-1,r.international?this.template=this.getInternationalPrefixBeforeCountryCallingCode(r).replace(/[\d\+]/g,_n)+td(_n,r.callingCode.length)+" "+n:this.template=n}},{key:"getTemplateForFormat",value:function(n,r){var i=r.nationalSignificantNumber,o=r.international,a=r.nationalPrefix,l=r.complexPrefixBeforeNationalSignificantNumber,u=n.pattern();u=u.replace(xk(),"\\d").replace(bk(),"\\d");var d=yk.match(u)[0];if(!(i.length>d.length)){var f=new RegExp("^"+u+"$"),h=i.replace(/\d/g,x1);f.test(h)&&(d=h);var m=this.getFormatFormat(n,o),b;if(this.shouldTryNationalPrefixFormattingRule(n,{international:o,nationalPrefix:a})){var v=m.replace(rw,n.nationalPrefixFormattingRule());if(Kd(n.nationalPrefixFormattingRule())===(a||"")+Kd("$1")&&(m=v,b=!0,a))for(var w=a.length;w>0;)m=m.replace(/\d/,_n),w--}var x=d.replace(new RegExp(u),m).replace(new RegExp(x1,"g"),_n);return b||(l?x=td(_n,l.length)+" "+x:a&&(x=td(_n,a.length)+this.getSeparatorAfterNationalPrefix(n)+x)),o&&(x=nw(x)),x}}},{key:"formatNextNationalNumberDigits",value:function(n){var r=J_(this.populatedNationalNumberTemplate,this.populatedNationalNumberTemplatePosition,n);if(!r){this.resetFormat();return}return this.populatedNationalNumberTemplate=r[0],this.populatedNationalNumberTemplatePosition=r[1],Lv(this.populatedNationalNumberTemplate,this.populatedNationalNumberTemplatePosition+1)}},{key:"shouldTryNationalPrefixFormattingRule",value:function(n,r){var i=r.international,o=r.nationalPrefix;if(n.nationalPrefixFormattingRule()){var a=n.usesNationalPrefix();if(a&&o||!a&&!i)return!0}}}]),e}();function cw(e,t){return Ok(e)||Pk(e,t)||Ck(e,t)||Sk()}function Sk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ck(e,t){if(e){if(typeof e=="string")return Qv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qv(e,t)}}function Qv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Pk(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function Ok(e){if(Array.isArray(e))return e}function _k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function kk(e,t,n){return t&&Kv(e.prototype,t),n&&Kv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var Nk="["+Dn+Rt+"]+",Ek=new RegExp("^"+Nk+"$","i"),Ik="(?:["+ef+"]["+Dn+Rt+"]*|["+Dn+Rt+"]+)",Tk=new RegExp("[^"+Dn+Rt+"]+.*$"),Ak=/[^\d\[\]]/,Rk=function(){function e(t){var n=t.defaultCountry,r=t.defaultCallingCode,i=t.metadata,o=t.onNationalSignificantNumberChange;_k(this,e),this.defaultCountry=n,this.defaultCallingCode=r,this.metadata=i,this.onNationalSignificantNumberChange=o}return kk(e,[{key:"input",value:function(n,r){var i=Mk(n),o=cw(i,2),a=o[0],l=o[1],u=Kd(a),d;return l&&(r.digits||(r.startInternationalNumber(),u||(d=!0))),u&&this.inputDigits(u,r),{digits:u,justLeadingPlus:d}}},{key:"inputDigits",value:function(n,r){var i=r.digits,o=i.length<3&&i.length+n.length>=3;if(r.appendDigits(n),o&&this.extractIddPrefix(r),this.isWaitingForCountryCallingCode(r)){if(!this.extractCountryCallingCode(r))return}else r.appendNationalSignificantNumberDigits(n);r.international||this.hasExtractedNationalSignificantNumber||this.extractNationalSignificantNumber(r.getNationalDigits(),function(a){return r.update(a)})}},{key:"isWaitingForCountryCallingCode",value:function(n){var r=n.international,i=n.callingCode;return r&&!i}},{key:"extractCountryCallingCode",value:function(n){var r=lw("+"+n.getDigitsWithoutInternationalPrefix(),this.defaultCountry,this.defaultCallingCode,this.metadata.metadata),i=r.countryCallingCode,o=r.number;if(i)return n.setCallingCode(i),n.update({nationalSignificantNumber:o}),!0}},{key:"reset",value:function(n){if(n){this.hasSelectedNumberingPlan=!0;var r=n._nationalPrefixForParsing();this.couldPossiblyExtractAnotherNationalSignificantNumber=r&&Ak.test(r)}else this.hasSelectedNumberingPlan=void 0,this.couldPossiblyExtractAnotherNationalSignificantNumber=void 0}},{key:"extractNationalSignificantNumber",value:function(n,r){if(this.hasSelectedNumberingPlan){var i=h1(n,this.metadata),o=i.nationalPrefix,a=i.nationalNumber,l=i.carrierCode;if(a!==n)return this.onExtractedNationalNumber(o,l,a,n,r),!0}}},{key:"extractAnotherNationalSignificantNumber",value:function(n,r,i){if(!this.hasExtractedNationalSignificantNumber)return this.extractNationalSignificantNumber(n,i);if(this.couldPossiblyExtractAnotherNationalSignificantNumber){var o=h1(n,this.metadata),a=o.nationalPrefix,l=o.nationalNumber,u=o.carrierCode;if(l!==r)return this.onExtractedNationalNumber(a,u,l,n,i),!0}}},{key:"onExtractedNationalNumber",value:function(n,r,i,o,a){var l,u,d=o.lastIndexOf(i);if(d>=0&&d===o.length-i.length){u=!0;var f=o.slice(0,d);f!==n&&(l=f)}a({nationalPrefix:n,carrierCode:r,nationalSignificantNumber:i,nationalSignificantNumberMatchesInput:u,complexPrefixBeforeNationalSignificantNumber:l}),this.hasExtractedNationalSignificantNumber=!0,this.onNationalSignificantNumberChange()}},{key:"reExtractNationalSignificantNumber",value:function(n){if(this.extractAnotherNationalSignificantNumber(n.getNationalDigits(),n.nationalSignificantNumber,function(r){return n.update(r)}))return!0;if(this.extractIddPrefix(n))return this.extractCallingCodeAndNationalSignificantNumber(n),!0;if(this.fixMissingPlus(n))return this.extractCallingCodeAndNationalSignificantNumber(n),!0}},{key:"extractIddPrefix",value:function(n){var r=n.international,i=n.IDDPrefix,o=n.digits;if(n.nationalSignificantNumber,!(r||i)){var a=aw(o,this.defaultCountry,this.defaultCallingCode,this.metadata.metadata);if(a!==void 0&&a!==o)return n.update({IDDPrefix:o.slice(0,o.length-a.length)}),this.startInternationalNumber(n,{country:void 0,callingCode:void 0}),!0}}},{key:"fixMissingPlus",value:function(n){if(!n.international){var r=sw(n.digits,this.defaultCountry,this.defaultCallingCode,this.metadata.metadata),i=r.countryCallingCode;if(r.number,i)return n.update({missingPlus:!0}),this.startInternationalNumber(n,{country:n.country,callingCode:i}),!0}}},{key:"startInternationalNumber",value:function(n,r){var i=r.country,o=r.callingCode;n.startInternationalNumber(i,o),n.nationalSignificantNumber&&(n.resetNationalSignificantNumber(),this.onNationalSignificantNumberChange(),this.hasExtractedNationalSignificantNumber=void 0)}},{key:"extractCallingCodeAndNationalSignificantNumber",value:function(n){this.extractCountryCallingCode(n)&&this.extractNationalSignificantNumber(n.getNationalDigits(),function(r){return n.update(r)})}}]),e}();function Fk(e){var t=e.search(Ik);if(!(t<0)){e=e.slice(t);var n;return e[0]==="+"&&(n=!0,e=e.slice(1)),e=e.replace(Tk,""),n&&(e="+"+e),e}}function Dk(e){var t=Fk(e)||"";return t[0]==="+"?[t.slice(1),!0]:[t]}function Mk(e){var t=Dk(e),n=cw(t,2),r=n[0],i=n[1];return Ek.test(r)||(r=""),[r,i]}function b1(e){return b1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b1(e)}function jk(e,t){return Bk(e)||Uk(e,t)||zk(e,t)||Lk()}function Lk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zk(e,t){if(e){if(typeof e=="string")return Zv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zv(e,t)}}function Zv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Uk(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function Bk(e){if(Array.isArray(e))return e}function Hk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Jv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Wk(e,t,n){return t&&Jv(e.prototype,t),n&&Jv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var Ga=function(){function e(t,n){Hk(this,e),this.metadata=new gt(n);var r=this.getCountryAndCallingCode(t),i=jk(r,2),o=i[0],a=i[1];this.defaultCountry=o,this.defaultCallingCode=a,this.reset()}return Wk(e,[{key:"getCountryAndCallingCode",value:function(n){var r,i;return n&&(b1(n)==="object"?(r=n.defaultCountry,i=n.defaultCallingCode):r=n),r&&!this.metadata.hasCountry(r)&&(r=void 0),[r,i]}},{key:"input",value:function(n){var r=this.parser.input(n,this.state),i=r.digits,o=r.justLeadingPlus;if(o)this.formattedOutput="+";else if(i){this.determineTheCountryIfNeeded(),this.state.nationalSignificantNumber&&this.formatter.narrowDownMatchingFormats(this.state);var a;if(this.metadata.hasSelectedNumberingPlan()&&(a=this.formatter.format(i,this.state)),a===void 0&&this.parser.reExtractNationalSignificantNumber(this.state)){this.determineTheCountryIfNeeded();var l=this.state.getNationalDigits();l&&(a=this.formatter.format(l,this.state))}this.formattedOutput=a?this.getFullNumber(a):this.getNonFormattedNumber()}return this.formattedOutput}},{key:"reset",value:function(){var n=this;return this.state=new G_({onCountryChange:function(i){n.country=i},onCallingCodeChange:function(i,o){n.metadata.selectNumberingPlan(o,i),n.formatter.reset(n.metadata.numberingPlan,n.state),n.parser.reset(n.metadata.numberingPlan)}}),this.formatter=new wk({state:this.state,metadata:this.metadata}),this.parser=new Rk({defaultCountry:this.defaultCountry,defaultCallingCode:this.defaultCallingCode,metadata:this.metadata,state:this.state,onNationalSignificantNumberChange:function(){n.determineTheCountryIfNeeded(),n.formatter.reset(n.metadata.numberingPlan,n.state)}}),this.state.reset({country:this.defaultCountry,callingCode:this.defaultCallingCode}),this.formattedOutput="",this}},{key:"isInternational",value:function(){return this.state.international}},{key:"getCallingCode",value:function(){if(this.isInternational())return this.state.callingCode}},{key:"getCountryCallingCode",value:function(){return this.getCallingCode()}},{key:"getCountry",value:function(){var n=this.state.digits;if(n)return this._getCountry()}},{key:"_getCountry",value:function(){var n=this.state.country;return n}},{key:"determineTheCountryIfNeeded",value:function(){(!this.state.country||this.isCountryCallingCodeAmbiguous())&&this.determineTheCountry()}},{key:"getFullNumber",value:function(n){var r=this;if(this.isInternational()){var i=function(l){return r.formatter.getInternationalPrefixBeforeCountryCallingCode(r.state,{spacing:!!l})+l},o=this.state.callingCode;return i(o?n?"".concat(o," ").concat(n):o:"".concat(this.state.getDigitsWithoutInternationalPrefix()))}return n}},{key:"getNonFormattedNationalNumberWithPrefix",value:function(){var n=this.state,r=n.nationalSignificantNumber,i=n.complexPrefixBeforeNationalSignificantNumber,o=n.nationalPrefix,a=r,l=i||o;return l&&(a=l+a),a}},{key:"getNonFormattedNumber",value:function(){var n=this.state.nationalSignificantNumberMatchesInput;return this.getFullNumber(n?this.getNonFormattedNationalNumberWithPrefix():this.state.getNationalDigits())}},{key:"getNonFormattedTemplate",value:function(){var n=this.getNonFormattedNumber();if(n)return n.replace(/[\+\d]/g,_n)}},{key:"isCountryCallingCodeAmbiguous",value:function(){var n=this.state.callingCode,r=this.metadata.getCountryCodesForCallingCode(n);return r&&r.length>1}},{key:"determineTheCountry",value:function(){this.state.setCountry(uw(this.isInternational()?this.state.callingCode:this.defaultCallingCode,this.state.nationalSignificantNumber,this.metadata))}},{key:"getNumberValue",value:function(){var n=this.state,r=n.digits,i=n.callingCode,o=n.country,a=n.nationalSignificantNumber;if(r){if(this.isInternational())return i?"+"+i+a:"+"+r;if(o||i){var l=o?this.metadata.countryCallingCode():i;return"+"+l+a}}}},{key:"getNumber",value:function(){var n=this.state,r=n.nationalSignificantNumber,i=n.carrierCode,o=n.callingCode,a=this._getCountry();if(r&&!(!a&&!o)){var l=new ow(a||o,r,this.metadata.metadata);return i&&(l.carrierCode=i),l}}},{key:"isPossible",value:function(){var n=this.getNumber();return n?n.isPossible():!1}},{key:"isValid",value:function(){var n=this.getNumber();return n?n.isValid():!1}},{key:"getNationalNumber",value:function(){return this.state.nationalSignificantNumber}},{key:"getChars",value:function(){return(this.state.international?"+":"")+this.state.digits}},{key:"getTemplate",value:function(){return this.formatter.getTemplate(this.state)||this.getNonFormattedTemplate()||""}}]),e}();function Xv(e){return new gt(e).getCountries()}function Yk(e,t,n){return n||(n=t,t=void 0),new Ga(t,n).input(e)}function fw(e){var t=e.country,n=e.international,r=e.withCountryCallingCode,i=e.metadata;return t&&n&&!r?"+".concat(Ci(t,i)):""}function $1(e,t){return t&&(e=e.slice(t.length),e[0]===" "&&(e=e.slice(1))),e}var Vk=["country","international","withCountryCallingCode","metadata"];function w1(){return w1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w1.apply(this,arguments)}function qk(e,t){if(e==null)return{};var n=Gk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Gk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Qk(e){function t(n,r){var i=n.country,o=n.international,a=n.withCountryCallingCode,l=n.metadata,u=qk(n,Vk),d=C.useCallback(function(f){var h=new Ga(i,l),m=fw({country:i,international:o,withCountryCallingCode:a,metadata:l}),b=h.input(m+f),v=h.getTemplate();return m&&(b=$1(b,m),v&&(v=$1(v,m))),{text:b,template:v}},[i,l]);return ne.createElement(ZP,w1({},u,{ref:r,parse:X4,format:d}))}return t=ne.forwardRef(t),t.propTypes={value:J.string.isRequired,onChange:J.func.isRequired,country:J.string,international:J.bool,withCountryCallingCode:J.bool,metadata:J.object.isRequired},t.defaultProps={metadata:e},t}const Kk=Qk();var Zk=["value","onChange","country","international","withCountryCallingCode","metadata","inputComponent"];function S1(){return S1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S1.apply(this,arguments)}function Jk(e,t){if(e==null)return{};var n=Xk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Xk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function eN(e){function t(n,r){var i=n.value,o=n.onChange,a=n.country,l=n.international,u=n.withCountryCallingCode,d=n.metadata,f=n.inputComponent,h=Jk(n,Zk),m=fw({country:a,international:l,withCountryCallingCode:u,metadata:d}),b=C.useCallback(function(v){var w=f1(v.target.value);if(w===i){var x=ex(m,w,a,d);x.indexOf(v.target.value)===0&&(w=w.slice(0,-1))}o(w)},[m,i,o,a,d]);return ne.createElement(f,S1({},h,{ref:r,value:ex(m,i,a,d),onChange:b}))}return t=ne.forwardRef(t),t.propTypes={value:J.string.isRequired,onChange:J.func.isRequired,country:J.string,international:J.bool,withCountryCallingCode:J.bool,metadata:J.object.isRequired,inputComponent:J.elementType.isRequired},t.defaultProps={metadata:e,inputComponent:"input"},t}const tN=eN();function ex(e,t,n,r){return $1(Yk(e+t,n,r),e)}function nN(e){return tx(e[0])+tx(e[1])}function tx(e){return String.fromCodePoint(127462-65+e.toUpperCase().charCodeAt(0))}var rN=["value","onChange","options"],iN=["value","options","className","iconComponent","getIconAspectRatio","arrowComponent","unicodeFlags"];function oN(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=aN(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function aN(e,t){if(e){if(typeof e=="string")return nx(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nx(e,t)}}function nx(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Jd(){return Jd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jd.apply(this,arguments)}function hw(e,t){if(e==null)return{};var n=sN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function pw(e){var t=e.value,n=e.onChange,r=e.options,i=hw(e,rN),o=C.useCallback(function(a){var l=a.target.value;n(l==="ZZ"?void 0:l)},[n]);return C.useMemo(function(){return gw(r,t)},[r,t]),ne.createElement("select",Jd({},i,{value:t||"ZZ",onChange:o}),r.map(function(a){var l=a.value,u=a.label,d=a.divider;return ne.createElement("option",{key:d?"|":l||"ZZ",value:d?"|":l||"ZZ",disabled:!!d,style:d?lN:void 0},u)}))}pw.propTypes={value:J.string,onChange:J.func.isRequired,options:J.arrayOf(J.shape({value:J.string,label:J.string,divider:J.bool})).isRequired};var lN={fontSize:"1px",backgroundColor:"currentColor",color:"inherit"};function hm(e){var t=e.value,n=e.options,r=e.className,i=e.iconComponent;e.getIconAspectRatio;var o=e.arrowComponent,a=e.unicodeFlags,l=hw(e,iN),u=C.useMemo(function(){return gw(n,t)},[n,t]);return ne.createElement("div",{className:"PhoneInputCountry"},ne.createElement(pw,Jd({},l,{value:t,options:n,className:Gd("PhoneInputCountrySelect",r)})),a&&t&&ne.createElement("div",{className:"PhoneInputCountryIconUnicode"},nN(t)),!(a&&t)&&ne.createElement(i,{"aria-hidden":!0,country:t,label:u&&u.label,aspectRatio:a?1:void 0}),ne.createElement(o,null))}hm.propTypes={iconComponent:J.elementType,arrowComponent:J.elementType.isRequired,unicodeFlags:J.bool};hm.defaultProps={arrowComponent:function(){return ne.createElement("div",{className:"PhoneInputCountrySelectArrow"})}};function gw(e,t){for(var n=oN(e),r;!(r=n()).done;){var i=r.value;if(!i.divider&&i.value===t)return i}}var uN=["country","countryName","flags","flagUrl"];function C1(){return C1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C1.apply(this,arguments)}function dN(e,t){if(e==null)return{};var n=cN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function cN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function pm(e){var t=e.country,n=e.countryName,r=e.flags,i=e.flagUrl,o=dN(e,uN);return r&&r[t]?r[t]({title:n}):ne.createElement("img",C1({},o,{alt:n,role:n?void 0:"presentation",src:i.replace("{XX}",t).replace("{xx}",t.toLowerCase())}))}pm.propTypes={country:J.string.isRequired,countryName:J.string.isRequired,flags:J.objectOf(J.elementType),flagUrl:J.string.isRequired};var fN=["aspectRatio"],hN=["title"],pN=["title"];function Xd(){return Xd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xd.apply(this,arguments)}function gm(e,t){if(e==null)return{};var n=gN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function gN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function of(e){var t=e.aspectRatio,n=gm(e,fN);return t===1?ne.createElement(yw,n):ne.createElement(mw,n)}of.propTypes={title:J.string.isRequired,aspectRatio:J.number};function mw(e){var t=e.title,n=gm(e,hN);return ne.createElement("svg",Xd({},n,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 75 50"}),ne.createElement("title",null,t),ne.createElement("g",{className:"PhoneInputInternationalIconGlobe",stroke:"currentColor",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"},ne.createElement("path",{strokeLinecap:"round",d:"M47.2,36.1C48.1,36,49,36,50,36c7.4,0,14,1.7,18.5,4.3"}),ne.createElement("path",{d:"M68.6,9.6C64.2,12.3,57.5,14,50,14c-7.4,0-14-1.7-18.5-4.3"}),ne.createElement("line",{x1:"26",y1:"25",x2:"74",y2:"25"}),ne.createElement("line",{x1:"50",y1:"1",x2:"50",y2:"49"}),ne.createElement("path",{strokeLinecap:"round",d:"M46.3,48.7c1.2,0.2,2.5,0.3,3.7,0.3c13.3,0,24-10.7,24-24S63.3,1,50,1S26,11.7,26,25c0,2,0.3,3.9,0.7,5.8"}),ne.createElement("path",{strokeLinecap:"round",d:"M46.8,48.2c1,0.6,2.1,0.8,3.2,0.8c6.6,0,12-10.7,12-24S56.6,1,50,1S38,11.7,38,25c0,1.4,0.1,2.7,0.2,4c0,0.1,0,0.2,0,0.2"})),ne.createElement("path",{className:"PhoneInputInternationalIconPhone",stroke:"none",fill:"currentColor",d:"M12.4,17.9c2.9-2.9,5.4-4.8,0.3-11.2S4.1,5.2,1.3,8.1C-2,11.4,1.1,23.5,13.1,35.6s24.3,15.2,27.5,11.9c2.8-2.8,7.8-6.3,1.4-11.5s-8.3-2.6-11.2,0.3c-2,2-7.2-2.2-11.7-6.7S10.4,19.9,12.4,17.9z"}))}mw.propTypes={title:J.string.isRequired};function yw(e){var t=e.title,n=gm(e,pN);return ne.createElement("svg",Xd({},n,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"}),ne.createElement("title",null,t),ne.createElement("g",{className:"PhoneInputInternationalIconGlobe",stroke:"currentColor",fill:"none",strokeWidth:"2",strokeLinecap:"round"},ne.createElement("path",{d:"M8.45,13A21.44,21.44,0,1,1,37.08,41.56"}),ne.createElement("path",{d:"M19.36,35.47a36.9,36.9,0,0,1-2.28-13.24C17.08,10.39,21.88.85,27.8.85s10.72,9.54,10.72,21.38c0,6.48-1.44,12.28-3.71,16.21"}),ne.createElement("path",{d:"M17.41,33.4A39,39,0,0,1,27.8,32.06c6.62,0,12.55,1.5,16.48,3.86"}),ne.createElement("path",{d:"M44.29,8.53c-3.93,2.37-9.86,3.88-16.49,3.88S15.25,10.9,11.31,8.54"}),ne.createElement("line",{x1:"27.8",y1:"0.85",x2:"27.8",y2:"34.61"}),ne.createElement("line",{x1:"15.2",y1:"22.23",x2:"49.15",y2:"22.23"})),ne.createElement("path",{className:"PhoneInputInternationalIconPhone",stroke:"transparent",fill:"currentColor",d:"M9.42,26.64c2.22-2.22,4.15-3.59.22-8.49S3.08,17,.93,19.17c-2.49,2.48-.13,11.74,9,20.89s18.41,11.5,20.89,9c2.15-2.15,5.91-4.77,1-8.71s-6.27-2-8.49.22c-1.55,1.55-5.48-1.69-8.86-5.08S7.87,28.19,9.42,26.64Z"}))}yw.propTypes={title:J.string.isRequired};function mN(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=yN(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yN(e,t){if(e){if(typeof e=="string")return rx(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rx(e,t)}}function rx(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vN(e,t){if(!t)return e;for(var n=[],r=[],i=n,o=mN(t),a;!(a=o()).done;){var l=a.value;l==="|"?i.push({divider:!0}):l==="..."||l==="…"?i=r:function(){var u=void 0;l==="🌐"?u=void 0:u=l;var d=e.indexOf(e.filter(function(h){return h.value===u})[0]),f=e[d];e.splice(d,1),i.push(f)}()}return n.concat(e).concat(r)}function xN(e,t){if(e&&(e=e.filter(function(n){switch(n){case"🌐":case"|":case"...":case"…":return!0;default:return af(n,t)}}),e.length>0))return e}function af(e,t){return Q4(e,t)?!0:(console.error("Country not found: ".concat(e)),!1)}function vw(e,t){return e&&(e=e.filter(function(n){return af(n,t)}),e.length===0&&(e=void 0)),e}var bN=["country","label","aspectRatio"];function P1(){return P1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P1.apply(this,arguments)}function $N(e,t){if(e==null)return{};var n=wN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function wN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function xw(e){var t=e.flags,n=e.flagUrl,r=e.flagComponent,i=e.internationalIcon;function o(a){var l=a.country,u=a.label,d=a.aspectRatio,f=$N(a,bN),h=i===of?d:void 0;return ne.createElement("div",P1({},f,{className:Gd("PhoneInputCountryIcon",{"PhoneInputCountryIcon--square":h===1,"PhoneInputCountryIcon--border":l})}),l?ne.createElement(r,{country:l,countryName:u,flags:t,flagUrl:n,className:"PhoneInputCountryIconImg"}):ne.createElement(i,{title:u,aspectRatio:h,className:"PhoneInputCountryIconImg"}))}return o.propTypes={country:J.string,label:J.string.isRequired,aspectRatio:J.number},o}xw({flagUrl:"https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",flagComponent:pm,internationalIcon:of});var bw=J.shape({country_calling_codes:J.object.isRequired,countries:J.object.isRequired}),$w=J.objectOf(J.string);function ci(e,t){var n="+"+Ci(e,t);return n}function SN(e){var t=e.value,n=e.phoneNumber,r=e.defaultCountry,i=e.getAnyCountry,o=e.countries,a=e.required,l=e.metadata,u;return n&&n.country?u=n.country:r&&(!t||Pw(t,r,l))&&(u=r),o&&o.indexOf(u)<0&&(u=void 0),!u&&a&&o&&o.length>0&&(u=i()),u}function CN(e){var t=e.countries,n=e.countryNames,r=e.addInternationalOption,i=e.compareStringsLocales,o=e.compareStrings;o||(o=IN);var a=t.map(function(l){return{value:l,label:n[l]||l}});return a.sort(function(l,u){return o(l.label,u.label,i)}),r&&a.unshift({label:n.ZZ}),a}function ww(e,t){return Y_(e||"",t)}function PN(e){return e.formatNational().replace(/\D/g,"")}function ON(e,t){var n=t.prevCountry,r=t.newCountry,i=t.metadata,o=t.useNationalFormat;if(n===r)return e;if(!e)return o?"":ci(r,i);if(r){if(e[0]==="+"){if(o)return e.indexOf("+"+Ci(r,i))===0?TN(e,r,i):"";if(n){var a=ci(r,i);return e.indexOf(a)===0?e:a}else{var l=ci(r,i);return e.indexOf(l)===0?e:l}}}else if(e[0]!=="+")return da(e,n,i)||"";return e}function da(e,t,n){if(e){if(e[0]==="+"){if(e==="+")return;var r=new Ga(t,n);return r.input(e),r.getNumberValue()}if(t){var i=Cw(e,t,n);return"+".concat(Ci(t,n)).concat(i||"")}}}function _N(e,t,n){var r=Cw(e,t,n);if(r){var i=r.length-kN(t,n);if(i>0)return e.slice(0,e.length-i)}return e}function kN(e,t){return t=new gt(t),t.selectNumberingPlan(e),t.numberingPlan.possibleLengths()[t.numberingPlan.possibleLengths().length-1]}function Sw(e,t){var n=t.country,r=t.countries,i=t.required,o=t.metadata;if(e==="+")return n;var a=EN(e,o);return a&&(!r||r.indexOf(a)>=0)?a:n&&!i&&!Pw(e,n,o)?void 0:n}function NN(e,t){var n=t.prevPhoneDigits,r=t.country,i=t.defaultCountry,o=t.countryRequired,a=t.getAnyCountry,l=t.countries,u=t.international,d=t.limitMaxLength,f=t.countryCallingCodeEditable,h=t.metadata;if(u&&f===!1){var m=ci(r,h);if(e.indexOf(m)!==0){var b;return e&&e[0]!=="+"?(e=m+e,b=da(e,r,h)):e=m,{phoneDigits:e,value:b,country:r}}}u===!1&&r&&e&&e[0]==="+"&&(e=ix(e,r,h)),e&&r&&d&&(e=_N(e,r,h)),e&&e[0]!=="+"&&(!r||u)&&(e="+"+e),!e&&n&&n[0]==="+"&&(u?r=void 0:r=i),e==="+"&&n&&n[0]==="+"&&n.length>1&&(r=void 0);var v;return e&&(e[0]==="+"&&(e==="+"||r&&ci(r,h).indexOf(e)===0)?v=void 0:v=da(e,r,h)),v&&(r=Sw(v,{country:r,countries:l,metadata:h}),u===!1&&r&&e&&e[0]==="+"&&(e=ix(e,r,h),v=da(e,r,h))),!r&&o&&(r=i||a()),{phoneDigits:e,country:r,value:v}}function ix(e,t,n){if(e.indexOf(ci(t,n))===0){var r=new Ga(t,n);r.input(e);var i=r.getNumber();return i?i.formatNational().replace(/\D/g,""):""}else return e.replace(/\D/g,"")}function EN(e,t){var n=new Ga(null,t);return n.input(e),n.getCountry()}function IN(e,t,n){return String.prototype.localeCompare?e.localeCompare(t,n):e<t?-1:e>t?1:0}function TN(e,t,n){if(t){var r="+"+Ci(t,n);if(e.length<r.length){if(r.indexOf(e)===0)return""}else if(e.indexOf(r)===0)return e.slice(r.length)}for(var i=0,o=Object.keys(n.country_calling_codes);i<o.length;i++){var a=o[i];if(e.indexOf(a)===1)return e.slice(1+a.length)}return""}function Cw(e,t,n){var r=new Ga(t,n);r.input(e);var i=r.getNumber();return i&&i.nationalNumber}function Pw(e,t,n){for(var r=ci(t,n),i=0;i<e.length&&i<r.length;){if(e[i]!==r[i])return!1;i++}return!0}function Ow(e){var t=e.value,n=e.phoneNumber,r=e.defaultCountry,i=e.international,o=e.useNationalFormat,a=e.metadata;return(i===!1||o)&&n&&n.country?PN(n):!t&&i&&r?ci(r,a):t}function ox(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function wu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ox(Object(n),!0).forEach(function(r){AN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ox(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function AN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function RN(e,t,n){var r=e.metadata,i=e.countries,o=e.defaultCountry,a=e.value,l=e.reset,u=e.international,d=e.displayInitialValueAsLocalNumber,f=e.initialValueFormat,h=t.defaultCountry,m=t.value,b=t.reset;n.country;var v=n.value,w=n.hasUserSelectedACountry,x=function(W){return Ow(wu(wu({},W),{},{international:u,useNationalFormat:d||f==="national",metadata:r}))};if(l!==b)return{phoneDigits:x({value:void 0,defaultCountry:o}),value:void 0,country:o,hasUserSelectedACountry:void 0};if(o!==h){var p=!o||af(o,r),g=!v||u&&v===x({value:void 0,defaultCountry:h}),$=!a&&g;if(!w&&p&&$)return{country:o,phoneDigits:x({value:void 0,defaultCountry:o}),value:void 0}}if(!ax(a,m)&&!ax(a,v)){var S,P;if(a){S=ww(a,r);var N=vw(i,r);S&&S.country?(!N||N.indexOf(S.country)>=0)&&(P=S.country):P=Sw(a,{country:void 0,countries:N,metadata:r})}var T;return a||(T={hasUserSelectedACountry:void 0}),wu(wu({},T),{},{phoneDigits:x({phoneNumber:S,value:a,defaultCountry:o}),value:a,country:a?P:o})}}function ax(e,t){return e===null&&(e=void 0),t===null&&(t=void 0),e===t}function O1(e){return O1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O1(e)}var FN=["name","disabled","readOnly","autoComplete","style","className","inputRef","inputComponent","numberInputProps","smartCaret","countrySelectComponent","countrySelectProps","containerComponent","defaultCountry","countries","countryOptionsOrder","labels","flags","flagComponent","flagUrl","addInternationalOption","internationalIcon","displayInitialValueAsLocalNumber","initialValueFormat","onCountryChange","limitMaxLength","countryCallingCodeEditable","focusInputOnCountrySelection","reset","metadata","international","locales"];function sx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function DN(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sx(Object(n),!0).forEach(function(r){Pn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sx(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gl(){return gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gl.apply(this,arguments)}function MN(e,t){if(e==null)return{};var n=jN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function jN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function LN(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lx(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function zN(e,t,n){return t&&lx(e.prototype,t),n&&lx(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function UN(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_1(e,t)}function _1(e,t){return _1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},_1(e,t)}function BN(e){var t=WN();return function(){var r=ec(e),i;if(t){var o=ec(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return HN(this,i)}}function HN(e,t){if(t&&(O1(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Cn(e)}function Cn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function WN(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ec(e){return ec=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ec(e)}function Pn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var YN=function(e){UN(n,e);var t=BN(n);function n(r){var i;LN(this,n),i=t.call(this,r),Pn(Cn(i),"setInputRef",function(p){i.inputRef.current=p;var g=i.props.inputRef;g&&(typeof g=="function"?g(p):g.current=p)}),Pn(Cn(i),"isCountrySupportedWithError",function(p){var g=i.props.metadata;return af(p,g)}),Pn(Cn(i),"onCountryChange",function(p){var g=i.props,$=g.international,S=g.metadata,P=g.onChange,N=g.focusInputOnCountrySelection,T=i.state,R=T.phoneDigits,W=T.country,L=ON(R,{prevCountry:W,newCountry:p,metadata:S,useNationalFormat:!$}),se=da(L,p,S);N&&i.inputRef.current.focus(),i.setState({country:p,hasUserSelectedACountry:!0,phoneDigits:L,value:se},function(){P(se)})}),Pn(Cn(i),"onChange",function(p){var g=i.props,$=g.defaultCountry,S=g.onChange,P=g.addInternationalOption,N=g.international,T=g.limitMaxLength,R=g.countryCallingCodeEditable,W=g.metadata,L=i.state,se=L.countries,M=L.phoneDigits,j=L.country,X=NN(p,{prevPhoneDigits:M,country:j,countryRequired:!P,defaultCountry:$,getAnyCountry:function(){return i.getFirstSupportedCountry({countries:se})},countries:se,international:N,limitMaxLength:T,countryCallingCodeEditable:R,metadata:W}),F=X.phoneDigits,ee=X.country,re=X.value,z={phoneDigits:F,value:re,country:ee};R===!1&&!re&&F===i.state.phoneDigits&&(z.forceRerender={}),i.setState(z,function(){return S(re)})}),Pn(Cn(i),"_onFocus",function(){return i.setState({isFocused:!0})}),Pn(Cn(i),"_onBlur",function(){return i.setState({isFocused:!1})}),Pn(Cn(i),"onFocus",function(p){i._onFocus();var g=i.props.onFocus;g&&g(p)}),Pn(Cn(i),"onBlur",function(p){var g=i.props.onBlur;i._onBlur(),g&&g(p)}),Pn(Cn(i),"onCountryFocus",function(p){i._onFocus();var g=i.props.countrySelectProps;if(g){var $=g.onFocus;$&&$(p)}}),Pn(Cn(i),"onCountryBlur",function(p){i._onBlur();var g=i.props.countrySelectProps;if(g){var $=g.onBlur;$&&$(p)}}),i.inputRef=ne.createRef();var o=i.props,a=o.value;o.labels;var l=o.international,u=o.addInternationalOption,d=o.displayInitialValueAsLocalNumber,f=o.initialValueFormat,h=o.metadata,m=i.props,b=m.defaultCountry,v=m.countries;b&&(i.isCountrySupportedWithError(b)||(b=void 0)),v=vw(v,h);var w=ww(a,h);i.CountryIcon=xw(i.props);var x=SN({value:a,phoneNumber:w,defaultCountry:b,required:!u,countries:v||Xv(h),getAnyCountry:function(){return i.getFirstSupportedCountry({countries:v})},metadata:h});return i.state={props:i.props,country:x,countries:v,phoneDigits:Ow({value:a,phoneNumber:w,defaultCountry:b,international:l,useNationalFormat:d||f==="national",metadata:h}),value:a},i}return zN(n,[{key:"componentDidMount",value:function(){var i=this.props.onCountryChange,o=this.props.defaultCountry,a=this.state.country;i&&(o&&(this.isCountrySupportedWithError(o)||(o=void 0)),a!==o&&i(a))}},{key:"componentDidUpdate",value:function(i,o){var a=this.props.onCountryChange,l=this.state.country;a&&l!==o.country&&a(l)}},{key:"getCountrySelectOptions",value:function(i){var o=i.countries,a=this.props,l=a.international,u=a.countryCallingCodeEditable,d=a.countryOptionsOrder,f=a.addInternationalOption,h=a.labels,m=a.locales,b=a.metadata;return this.useMemoCountrySelectOptions(function(){return vN(CN({countries:o||Xv(b),countryNames:h,addInternationalOption:l&&u===!1?!1:f,compareStringsLocales:m}),xN(d,b))},[o,d,f,h,b])}},{key:"useMemoCountrySelectOptions",value:function(i,o){return(!this.countrySelectOptionsMemoDependencies||!qN(o,this.countrySelectOptionsMemoDependencies))&&(this.countrySelectOptionsMemo=i(),this.countrySelectOptionsMemoDependencies=o),this.countrySelectOptionsMemo}},{key:"getFirstSupportedCountry",value:function(i){var o=i.countries,a=this.getCountrySelectOptions({countries:o});return a[0].value}},{key:"render",value:function(){var i=this.props,o=i.name,a=i.disabled,l=i.readOnly,u=i.autoComplete,d=i.style,f=i.className;i.inputRef;var h=i.inputComponent,m=i.numberInputProps,b=i.smartCaret,v=i.countrySelectComponent,w=i.countrySelectProps,x=i.containerComponent;i.defaultCountry,i.countries,i.countryOptionsOrder;var p=i.labels;i.flags,i.flagComponent,i.flagUrl,i.addInternationalOption,i.internationalIcon,i.displayInitialValueAsLocalNumber,i.initialValueFormat,i.onCountryChange,i.limitMaxLength,i.countryCallingCodeEditable,i.focusInputOnCountrySelection,i.reset;var g=i.metadata;i.international,i.locales;var $=MN(i,FN),S=this.state,P=S.country,N=S.countries,T=S.phoneDigits,R=S.isFocused,W=b?Kk:tN,L=this.getCountrySelectOptions({countries:N});return ne.createElement(x,{style:d,className:Gd(f,"PhoneInput",{"PhoneInput--focus":R,"PhoneInput--disabled":a,"PhoneInput--readOnly":l})},ne.createElement(v,gl({name:o?"".concat(o,"Country"):void 0,"aria-label":p.country},w,{value:P,options:L,onChange:this.onCountryChange,onFocus:this.onCountryFocus,onBlur:this.onCountryBlur,disabled:a||w&&w.disabled,readOnly:l||w&&w.readOnly,iconComponent:this.CountryIcon})),ne.createElement(W,gl({ref:this.setInputRef,type:"tel",autoComplete:u},m,$,{name:o,metadata:g,country:P,value:T||"",onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,disabled:a,readOnly:l,inputComponent:h,className:Gd("PhoneInputInput",m&&m.className,$.className)})))}}],[{key:"getDerivedStateFromProps",value:function(i,o){return DN({props:i},RN(i,o.props,o))}}]),n}(ne.PureComponent),mm=ne.forwardRef(function(e,t){return ne.createElement(YN,gl({},e,{inputRef:t}))});mm.propTypes={value:J.string,onChange:J.func.isRequired,onFocus:J.func,onBlur:J.func,disabled:J.bool,readOnly:J.bool,autoComplete:J.string.isRequired,initialValueFormat:J.oneOf(["national"]),displayInitialValueAsLocalNumber:J.bool,defaultCountry:J.string,countries:J.arrayOf(J.string),labels:$w.isRequired,locales:J.oneOfType([J.string,J.arrayOf(J.string)]),flagUrl:J.string.isRequired,flags:J.objectOf(J.elementType),flagComponent:J.elementType.isRequired,addInternationalOption:J.bool.isRequired,internationalIcon:J.elementType.isRequired,countryOptionsOrder:J.arrayOf(J.string),style:J.object,className:J.string,countrySelectComponent:J.elementType.isRequired,countrySelectProps:J.object,inputComponent:J.elementType.isRequired,containerComponent:J.elementType.isRequired,numberInputProps:J.object,smartCaret:J.bool.isRequired,international:J.bool,limitMaxLength:J.bool.isRequired,countryCallingCodeEditable:J.bool.isRequired,metadata:bw.isRequired,onCountryChange:J.func,focusInputOnCountrySelection:J.bool.isRequired};mm.defaultProps={autoComplete:"tel",countrySelectComponent:hm,flagComponent:pm,flagUrl:"https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",internationalIcon:of,inputComponent:"input",containerComponent:"div",reset:J.any,smartCaret:!0,addInternationalOption:!0,limitMaxLength:!1,countryCallingCodeEditable:!0,focusInputOnCountrySelection:!0};const VN=mm;function qN(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;){if(e[n]!==t[n])return!1;n++}return!0}const GN={ext:"ext.",country:"Phone number country",phone:"Phone",AB:"Abkhazia",AC:"Ascension Island",AD:"Andorra",AE:"United Arab Emirates",AF:"Afghanistan",AG:"Antigua and Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:"American Samoa",AT:"Austria",AU:"Australia",AW:"Aruba",AX:"Åland Islands",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BL:"Saint Barthélemy",BM:"Bermuda",BN:"Brunei Darussalam",BO:"Bolivia",BQ:"Bonaire, Sint Eustatius and Saba",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BV:"Bouvet Island",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CC:"Cocos (Keeling) Islands",CD:"Congo, Democratic Republic of the",CF:"Central African Republic",CG:"Congo",CH:"Switzerland",CI:"Cote d'Ivoire",CK:"Cook Islands",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CU:"Cuba",CV:"Cape Verde",CW:"Curaçao",CX:"Christmas Island",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",EH:"Western Sahara",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",FM:"Federated States of Micronesia",FO:"Faroe Islands",FR:"France",GA:"Gabon",GB:"United Kingdom",GD:"Grenada",GE:"Georgia",GF:"French Guiana",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Equatorial Guinea",GR:"Greece",GS:"South Georgia and the South Sandwich Islands",GT:"Guatemala",GU:"Guam",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong",HM:"Heard Island and McDonald Islands",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IM:"Isle of Man",IN:"India",IO:"British Indian Ocean Territory",IQ:"Iraq",IR:"Iran",IS:"Iceland",IT:"Italy",JE:"Jersey",JM:"Jamaica",JO:"Jordan",JP:"Japan",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KI:"Kiribati",KM:"Comoros",KN:"Saint Kitts and Nevis",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Laos",LB:"Lebanon",LC:"Saint Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libya",MA:"Morocco",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MF:"Saint Martin (French Part)",MG:"Madagascar",MH:"Marshall Islands",MK:"North Macedonia",ML:"Mali",MM:"Myanmar",MN:"Mongolia",MO:"Macao",MP:"Northern Mariana Islands",MQ:"Martinique",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NR:"Nauru",NU:"Niue",NZ:"New Zealand",OM:"Oman",OS:"South Ossetia",PA:"Panama",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PM:"Saint Pierre and Miquelon",PN:"Pitcairn",PR:"Puerto Rico",PS:"Palestine",PT:"Portugal",PW:"Palau",PY:"Paraguay",QA:"Qatar",RE:"Reunion",RO:"Romania",RS:"Serbia",RU:"Russia",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SH:"Saint Helena",SI:"Slovenia",SJ:"Svalbard and Jan Mayen",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",SS:"South Sudan",ST:"Sao Tome and Principe",SV:"El Salvador",SX:"Sint Maarten",SY:"Syria",SZ:"Swaziland",TA:"Tristan da Cunha",TC:"Turks and Caicos Islands",TD:"Chad",TF:"French Southern Territories",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TK:"Tokelau",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turkey",TT:"Trinidad and Tobago",TV:"Tuvalu",TW:"Taiwan",TZ:"Tanzania",UA:"Ukraine",UG:"Uganda",UM:"United States Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VA:"Holy See (Vatican City State)",VC:"Saint Vincent and the Grenadines",VE:"Venezuela",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis and Futuna",WS:"Samoa",XK:"Kosovo",YE:"Yemen",YT:"Mayotte",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe",ZZ:"International"};function k1(){return k1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k1.apply(this,arguments)}function _w(e){var t=ne.forwardRef(function(n,r){return ne.createElement(VN,k1({ref:r},n))});return t.propTypes={metadata:bw.isRequired,labels:$w.isRequired},t.defaultProps={metadata:e,labels:GN},t}_w();const ym=_w(SP);function kw(e,t){return function(){return e.apply(t,arguments)}}const{toString:Nw}=Object.prototype,{getPrototypeOf:vm}=Object,xm=(e=>t=>{const n=Nw.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ir=e=>(e=e.toLowerCase(),t=>xm(t)===e),sf=e=>t=>typeof t===e,{isArray:Qa}=Array,ml=sf("undefined");function QN(e){return e!==null&&!ml(e)&&e.constructor!==null&&!ml(e.constructor)&&yi(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ew=Ir("ArrayBuffer");function KN(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ew(e.buffer),t}const ZN=sf("string"),yi=sf("function"),Iw=sf("number"),bm=e=>e!==null&&typeof e=="object",JN=e=>e===!0||e===!1,nd=e=>{if(xm(e)!=="object")return!1;const t=vm(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},XN=Ir("Date"),eE=Ir("File"),tE=Ir("Blob"),nE=Ir("FileList"),rE=e=>bm(e)&&yi(e.pipe),iE=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Nw.call(e)===t||yi(e.toString)&&e.toString()===t)},oE=Ir("URLSearchParams"),aE=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Bl(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Qa(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let l;for(r=0;r<a;r++)l=o[r],t.call(null,e[l],l,e)}}function Tw(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Aw=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Rw=e=>!ml(e)&&e!==Aw;function N1(){const{caseless:e}=Rw(this)&&this||{},t={},n=(r,i)=>{const o=e&&Tw(t,i)||i;nd(t[o])&&nd(r)?t[o]=N1(t[o],r):nd(r)?t[o]=N1({},r):Qa(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Bl(arguments[r],n);return t}const sE=(e,t,n,{allOwnKeys:r}={})=>(Bl(t,(i,o)=>{n&&yi(i)?e[o]=kw(i,n):e[o]=i},{allOwnKeys:r}),e),lE=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),uE=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},dE=(e,t,n,r)=>{let i,o,a;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&vm(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},cE=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},fE=e=>{if(!e)return null;if(Qa(e))return e;let t=e.length;if(!Iw(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},hE=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&vm(Uint8Array)),pE=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},gE=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},mE=Ir("HTMLFormElement"),yE=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),ux=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),vE=Ir("RegExp"),Fw=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Bl(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},xE=e=>{Fw(e,(t,n)=>{if(yi(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(yi(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},bE=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Qa(e)?r(e):r(String(e).split(t)),n},$E=()=>{},wE=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Ph="abcdefghijklmnopqrstuvwxyz",dx="0123456789",Dw={DIGIT:dx,ALPHA:Ph,ALPHA_DIGIT:Ph+Ph.toUpperCase()+dx},SE=(e=16,t=Dw.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function CE(e){return!!(e&&yi(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const PE=e=>{const t=new Array(10),n=(r,i)=>{if(bm(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Qa(r)?[]:{};return Bl(r,(a,l)=>{const u=n(a,i+1);!ml(u)&&(o[l]=u)}),t[i]=void 0,o}}return r};return n(e,0)},B={isArray:Qa,isArrayBuffer:Ew,isBuffer:QN,isFormData:iE,isArrayBufferView:KN,isString:ZN,isNumber:Iw,isBoolean:JN,isObject:bm,isPlainObject:nd,isUndefined:ml,isDate:XN,isFile:eE,isBlob:tE,isRegExp:vE,isFunction:yi,isStream:rE,isURLSearchParams:oE,isTypedArray:hE,isFileList:nE,forEach:Bl,merge:N1,extend:sE,trim:aE,stripBOM:lE,inherits:uE,toFlatObject:dE,kindOf:xm,kindOfTest:Ir,endsWith:cE,toArray:fE,forEachEntry:pE,matchAll:gE,isHTMLForm:mE,hasOwnProperty:ux,hasOwnProp:ux,reduceDescriptors:Fw,freezeMethods:xE,toObjectSet:bE,toCamelCase:yE,noop:$E,toFiniteNumber:wE,findKey:Tw,global:Aw,isContextDefined:Rw,ALPHABET:Dw,generateString:SE,isSpecCompliantForm:CE,toJSONObject:PE};function Se(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}B.inherits(Se,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Mw=Se.prototype,jw={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{jw[e]={value:e}});Object.defineProperties(Se,jw);Object.defineProperty(Mw,"isAxiosError",{value:!0});Se.from=(e,t,n,r,i,o)=>{const a=Object.create(Mw);return B.toFlatObject(e,a,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),Se.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const OE=null;function E1(e){return B.isPlainObject(e)||B.isArray(e)}function Lw(e){return B.endsWith(e,"[]")?e.slice(0,-2):e}function cx(e,t,n){return e?e.concat(t).map(function(i,o){return i=Lw(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function _E(e){return B.isArray(e)&&!e.some(E1)}const kE=B.toFlatObject(B,{},null,function(t){return/^is[A-Z]/.test(t)});function lf(e,t,n){if(!B.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=B.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,x){return!B.isUndefined(x[w])});const r=n.metaTokens,i=n.visitor||f,o=n.dots,a=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(t);if(!B.isFunction(i))throw new TypeError("visitor must be a function");function d(v){if(v===null)return"";if(B.isDate(v))return v.toISOString();if(!u&&B.isBlob(v))throw new Se("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(v)||B.isTypedArray(v)?u&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function f(v,w,x){let p=v;if(v&&!x&&typeof v=="object"){if(B.endsWith(w,"{}"))w=r?w:w.slice(0,-2),v=JSON.stringify(v);else if(B.isArray(v)&&_E(v)||(B.isFileList(v)||B.endsWith(w,"[]"))&&(p=B.toArray(v)))return w=Lw(w),p.forEach(function($,S){!(B.isUndefined($)||$===null)&&t.append(a===!0?cx([w],S,o):a===null?w:w+"[]",d($))}),!1}return E1(v)?!0:(t.append(cx(x,w,o),d(v)),!1)}const h=[],m=Object.assign(kE,{defaultVisitor:f,convertValue:d,isVisitable:E1});function b(v,w){if(!B.isUndefined(v)){if(h.indexOf(v)!==-1)throw Error("Circular reference detected in "+w.join("."));h.push(v),B.forEach(v,function(p,g){(!(B.isUndefined(p)||p===null)&&i.call(t,p,B.isString(g)?g.trim():g,w,m))===!0&&b(p,w?w.concat(g):[g])}),h.pop()}}if(!B.isObject(e))throw new TypeError("data must be an object");return b(e),t}function fx(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function $m(e,t){this._pairs=[],e&&lf(e,this,t)}const zw=$m.prototype;zw.append=function(t,n){this._pairs.push([t,n])};zw.toString=function(t){const n=t?function(r){return t.call(this,r,fx)}:fx;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function NE(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Uw(e,t,n){if(!t)return e;const r=n&&n.encode||NE,i=n&&n.serialize;let o;if(i?o=i(t,n):o=B.isURLSearchParams(t)?t.toString():new $m(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class EE{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){B.forEach(this.handlers,function(r){r!==null&&t(r)})}}const hx=EE,Bw={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},IE=typeof URLSearchParams<"u"?URLSearchParams:$m,TE=typeof FormData<"u"?FormData:null,AE=typeof Blob<"u"?Blob:null,RE=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),FE=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Qn={isBrowser:!0,classes:{URLSearchParams:IE,FormData:TE,Blob:AE},isStandardBrowserEnv:RE,isStandardBrowserWebWorkerEnv:FE,protocols:["http","https","file","blob","url","data"]};function DE(e,t){return lf(e,new Qn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Qn.isNode&&B.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function ME(e){return B.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function jE(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Hw(e){function t(n,r,i,o){let a=n[o++];const l=Number.isFinite(+a),u=o>=n.length;return a=!a&&B.isArray(i)?i.length:a,u?(B.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!l):((!i[a]||!B.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&B.isArray(i[a])&&(i[a]=jE(i[a])),!l)}if(B.isFormData(e)&&B.isFunction(e.entries)){const n={};return B.forEachEntry(e,(r,i)=>{t(ME(r),i,n,0)}),n}return null}const LE={"Content-Type":void 0};function zE(e,t,n){if(B.isString(e))try{return(t||JSON.parse)(e),B.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const uf={transitional:Bw,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=B.isObject(t);if(o&&B.isHTMLForm(t)&&(t=new FormData(t)),B.isFormData(t))return i&&i?JSON.stringify(Hw(t)):t;if(B.isArrayBuffer(t)||B.isBuffer(t)||B.isStream(t)||B.isFile(t)||B.isBlob(t))return t;if(B.isArrayBufferView(t))return t.buffer;if(B.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return DE(t,this.formSerializer).toString();if((l=B.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return lf(l?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),zE(t)):t}],transformResponse:[function(t){const n=this.transitional||uf.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&B.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?Se.from(l,Se.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Qn.classes.FormData,Blob:Qn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};B.forEach(["delete","get","head"],function(t){uf.headers[t]={}});B.forEach(["post","put","patch"],function(t){uf.headers[t]=B.merge(LE)});const wm=uf,UE=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),BE=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&UE[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},px=Symbol("internals");function cs(e){return e&&String(e).trim().toLowerCase()}function rd(e){return e===!1||e==null?e:B.isArray(e)?e.map(rd):String(e)}function HE(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const WE=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Oh(e,t,n,r,i){if(B.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!B.isString(t)){if(B.isString(r))return t.indexOf(r)!==-1;if(B.isRegExp(r))return r.test(t)}}function YE(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function VE(e,t){const n=B.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class df{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,u,d){const f=cs(u);if(!f)throw new Error("header name must be a non-empty string");const h=B.findKey(i,f);(!h||i[h]===void 0||d===!0||d===void 0&&i[h]!==!1)&&(i[h||u]=rd(l))}const a=(l,u)=>B.forEach(l,(d,f)=>o(d,f,u));return B.isPlainObject(t)||t instanceof this.constructor?a(t,n):B.isString(t)&&(t=t.trim())&&!WE(t)?a(BE(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=cs(t),t){const r=B.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return HE(i);if(B.isFunction(n))return n.call(this,i,r);if(B.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=cs(t),t){const r=B.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Oh(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=cs(a),a){const l=B.findKey(r,a);l&&(!n||Oh(r,r[l],l,n))&&(delete r[l],i=!0)}}return B.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Oh(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return B.forEach(this,(i,o)=>{const a=B.findKey(r,o);if(a){n[a]=rd(i),delete n[o];return}const l=t?YE(o):String(o).trim();l!==o&&delete n[o],n[l]=rd(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return B.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&B.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[px]=this[px]={accessors:{}}).accessors,i=this.prototype;function o(a){const l=cs(a);r[l]||(VE(i,a),r[l]=!0)}return B.isArray(t)?t.forEach(o):o(t),this}}df.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.freezeMethods(df.prototype);B.freezeMethods(df);const $r=df;function _h(e,t){const n=this||wm,r=t||n,i=$r.from(r.headers);let o=r.data;return B.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Ww(e){return!!(e&&e.__CANCEL__)}function Hl(e,t,n){Se.call(this,e??"canceled",Se.ERR_CANCELED,t,n),this.name="CanceledError"}B.inherits(Hl,Se,{__CANCEL__:!0});function qE(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Se("Request failed with status code "+n.status,[Se.ERR_BAD_REQUEST,Se.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const GE=Qn.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,l){const u=[];u.push(n+"="+encodeURIComponent(r)),B.isNumber(i)&&u.push("expires="+new Date(i).toGMTString()),B.isString(o)&&u.push("path="+o),B.isString(a)&&u.push("domain="+a),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function QE(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function KE(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Yw(e,t){return e&&!QE(t)?KE(e,t):t}const ZE=Qn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const l=B.isString(a)?i(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function JE(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function XE(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(u){const d=Date.now(),f=r[o];a||(a=d),n[i]=u,r[i]=d;let h=o,m=0;for(;h!==i;)m+=n[h++],h=h%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),d-a<t)return;const b=f&&d-f;return b?Math.round(m*1e3/b):void 0}}function gx(e,t){let n=0;const r=XE(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-n,u=r(l),d=o<=a;n=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&d?(a-o)/u:void 0,event:i};f[t?"download":"upload"]=!0,e(f)}}const eI=typeof XMLHttpRequest<"u",tI=eI&&function(e){return new Promise(function(n,r){let i=e.data;const o=$r.from(e.headers).normalize(),a=e.responseType;let l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}B.isFormData(i)&&(Qn.isStandardBrowserEnv||Qn.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let d=new XMLHttpRequest;if(e.auth){const b=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(b+":"+v))}const f=Yw(e.baseURL,e.url);d.open(e.method.toUpperCase(),Uw(f,e.params,e.paramsSerializer),!0),d.timeout=e.timeout;function h(){if(!d)return;const b=$r.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),w={data:!a||a==="text"||a==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:b,config:e,request:d};qE(function(p){n(p),u()},function(p){r(p),u()},w),d=null}if("onloadend"in d?d.onloadend=h:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(h)},d.onabort=function(){d&&(r(new Se("Request aborted",Se.ECONNABORTED,e,d)),d=null)},d.onerror=function(){r(new Se("Network Error",Se.ERR_NETWORK,e,d)),d=null},d.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||Bw;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),r(new Se(v,w.clarifyTimeoutError?Se.ETIMEDOUT:Se.ECONNABORTED,e,d)),d=null},Qn.isStandardBrowserEnv){const b=(e.withCredentials||ZE(f))&&e.xsrfCookieName&&GE.read(e.xsrfCookieName);b&&o.set(e.xsrfHeaderName,b)}i===void 0&&o.setContentType(null),"setRequestHeader"in d&&B.forEach(o.toJSON(),function(v,w){d.setRequestHeader(w,v)}),B.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),a&&a!=="json"&&(d.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&d.addEventListener("progress",gx(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",gx(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=b=>{d&&(r(!b||b.type?new Hl(null,e,d):b),d.abort(),d=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const m=JE(f);if(m&&Qn.protocols.indexOf(m)===-1){r(new Se("Unsupported protocol "+m+":",Se.ERR_BAD_REQUEST,e));return}d.send(i||null)})},id={http:OE,xhr:tI};B.forEach(id,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const nI={getAdapter:e=>{e=B.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=B.isString(n)?id[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new Se(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(B.hasOwnProp(id,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!B.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:id};function kh(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Hl(null,e)}function mx(e){return kh(e),e.headers=$r.from(e.headers),e.data=_h.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),nI.getAdapter(e.adapter||wm.adapter)(e).then(function(r){return kh(e),r.data=_h.call(e,e.transformResponse,r),r.headers=$r.from(r.headers),r},function(r){return Ww(r)||(kh(e),r&&r.response&&(r.response.data=_h.call(e,e.transformResponse,r.response),r.response.headers=$r.from(r.response.headers))),Promise.reject(r)})}const yx=e=>e instanceof $r?e.toJSON():e;function La(e,t){t=t||{};const n={};function r(d,f,h){return B.isPlainObject(d)&&B.isPlainObject(f)?B.merge.call({caseless:h},d,f):B.isPlainObject(f)?B.merge({},f):B.isArray(f)?f.slice():f}function i(d,f,h){if(B.isUndefined(f)){if(!B.isUndefined(d))return r(void 0,d,h)}else return r(d,f,h)}function o(d,f){if(!B.isUndefined(f))return r(void 0,f)}function a(d,f){if(B.isUndefined(f)){if(!B.isUndefined(d))return r(void 0,d)}else return r(void 0,f)}function l(d,f,h){if(h in t)return r(d,f);if(h in e)return r(void 0,d)}const u={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(d,f)=>i(yx(d),yx(f),!0)};return B.forEach(Object.keys(e).concat(Object.keys(t)),function(f){const h=u[f]||i,m=h(e[f],t[f],f);B.isUndefined(m)&&h!==l||(n[f]=m)}),n}const Vw="1.3.5",Sm={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Sm[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const vx={};Sm.transitional=function(t,n,r){function i(o,a){return"[Axios v"+Vw+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,l)=>{if(t===!1)throw new Se(i(a," has been removed"+(n?" in "+n:"")),Se.ERR_DEPRECATED);return n&&!vx[a]&&(vx[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,l):!0}};function rI(e,t,n){if(typeof e!="object")throw new Se("options must be an object",Se.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const l=e[o],u=l===void 0||a(l,o,e);if(u!==!0)throw new Se("option "+o+" must be "+u,Se.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Se("Unknown option "+o,Se.ERR_BAD_OPTION)}}const I1={assertOptions:rI,validators:Sm},Mr=I1.validators;class tc{constructor(t){this.defaults=t,this.interceptors={request:new hx,response:new hx}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=La(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&I1.assertOptions(r,{silentJSONParsing:Mr.transitional(Mr.boolean),forcedJSONParsing:Mr.transitional(Mr.boolean),clarifyTimeoutError:Mr.transitional(Mr.boolean)},!1),i!=null&&(B.isFunction(i)?n.paramsSerializer={serialize:i}:I1.assertOptions(i,{encode:Mr.function,serialize:Mr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a;a=o&&B.merge(o.common,o[n.method]),a&&B.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=$r.concat(a,o);const l=[];let u=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(u=u&&w.synchronous,l.unshift(w.fulfilled,w.rejected))});const d=[];this.interceptors.response.forEach(function(w){d.push(w.fulfilled,w.rejected)});let f,h=0,m;if(!u){const v=[mx.bind(this),void 0];for(v.unshift.apply(v,l),v.push.apply(v,d),m=v.length,f=Promise.resolve(n);h<m;)f=f.then(v[h++],v[h++]);return f}m=l.length;let b=n;for(h=0;h<m;){const v=l[h++],w=l[h++];try{b=v(b)}catch(x){w.call(this,x);break}}try{f=mx.call(this,b)}catch(v){return Promise.reject(v)}for(h=0,m=d.length;h<m;)f=f.then(d[h++],d[h++]);return f}getUri(t){t=La(this.defaults,t);const n=Yw(t.baseURL,t.url);return Uw(n,t.params,t.paramsSerializer)}}B.forEach(["delete","get","head","options"],function(t){tc.prototype[t]=function(n,r){return this.request(La(r||{},{method:t,url:n,data:(r||{}).data}))}});B.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,l){return this.request(La(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}tc.prototype[t]=n(),tc.prototype[t+"Form"]=n(!0)});const od=tc;class Cm{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(l=>{r.subscribe(l),o=l}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,l){r.reason||(r.reason=new Hl(o,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Cm(function(i){t=i}),cancel:t}}}const iI=Cm;function oI(e){return function(n){return e.apply(null,n)}}function aI(e){return B.isObject(e)&&e.isAxiosError===!0}const T1={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(T1).forEach(([e,t])=>{T1[t]=e});const sI=T1;function qw(e){const t=new od(e),n=kw(od.prototype.request,t);return B.extend(n,od.prototype,t,{allOwnKeys:!0}),B.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return qw(La(e,i))},n}const dt=qw(wm);dt.Axios=od;dt.CanceledError=Hl;dt.CancelToken=iI;dt.isCancel=Ww;dt.VERSION=Vw;dt.toFormData=lf;dt.AxiosError=Se;dt.Cancel=dt.CanceledError;dt.all=function(t){return Promise.all(t)};dt.spread=oI;dt.isAxiosError=aI;dt.mergeConfig=La;dt.AxiosHeaders=$r;dt.formToJSON=e=>Hw(B.isHTMLForm(e)?new FormData(e):e);dt.HttpStatusCode=sI;dt.default=dt;const Xe=dt,tr="https://crossbackend.onrender.com",lI=async({firstName:e,lastName:t,email:n,companyName:r,phoneNum:i,password:o})=>{await Xe.post(`${tr}/api/seler/register`,{firstName:e,lastName:t,email:n,companyName:r,phoneNum:i,password:o}).then(a=>{localStorage.setItem("user",JSON.stringify(a.data.data))})},uI=async e=>{await Xe.post(`${tr}/api/user/register`,e).then(t=>{localStorage.setItem("user",JSON.stringify(t.data.data))})},dI=async({email:e,password:t})=>{await Xe.post(`${tr}/api/user/login`,{email:e,password:t}).then(n=>{localStorage.setItem("user",JSON.stringify(n.data.data))})},cI=async({email:e,password:t})=>{await Xe.post(`${tr}/api/seler/signInUser`,{email:e,password:t}).then(n=>{localStorage.setItem("user",JSON.stringify(n.data.data))})},fI=async({id:e,otp:t})=>{await Xe.patch(`${tr}/api/user/${e}/verify2`,{otp:t}).then(n=>{console.log(n.data)})},hI=async({id:e,otp:t})=>{await Xe.patch(`${tr}/api/user/${e}/verify`,{otp:t}).then(n=>{console.log(n.data)})},pI=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.patch(`${tr}/api/seler/${e}/update`,t,n).then(r=>{console.log(r.data)}).catch(r=>{console.log(r)})},gI=async({id:e,gender:t,DateOfBirth:n,country:r})=>{await Xe.patch(`${tr}/api/seler/${e}/updateuser`,{gender:t,DateOfBirth:n,country:r}).then(i=>{})},mI=async({id:e,address:t,address2:n,shippingFrom:r,codePostal:i,shopName:o,city:a})=>{await Xe.patch(`${tr}/api/seler/${e}/updateuser`,{address:t,address2:n,shippingFrom:r,codePostal:i,shopName:o,city:a}).then(l=>{})},yI=async({id:e,bankName:t,accountName:n,accNumber:r,completed:i})=>{await Xe.patch(`${tr}/api/seler/${e}/updateuser`,{bankName:t,accountName:n,accNumber:r,completed:i}).then(o=>{})};function ho(e){this._maxSize=e,this.clear()}ho.prototype.clear=function(){this._size=0,this._values=Object.create(null)};ho.prototype.get=function(e){return this._values[e]};ho.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var vI=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Gw=/^\d+$/,xI=/^\d/,bI=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,$I=/^\s*(['"]?)(.*?)(\1)\s*$/,Pm=512,xx=new ho(Pm),bx=new ho(Pm),$x=new ho(Pm),eo={Cache:ho,split:A1,normalizePath:Nh,setter:function(e){var t=Nh(e);return bx.get(e)||bx.set(e,function(r,i){for(var o=0,a=t.length,l=r;o<a-1;){var u=t[o];if(u==="__proto__"||u==="constructor"||u==="prototype")return r;l=l[t[o++]]}l[t[o]]=i})},getter:function(e,t){var n=Nh(e);return $x.get(e)||$x.set(e,function(i){for(var o=0,a=n.length;o<a;)if(i!=null||!t)i=i[n[o++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(Om(n)||Gw.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){wI(Array.isArray(e)?e:A1(e),t,n)}};function Nh(e){return xx.get(e)||xx.set(e,A1(e).map(function(t){return t.replace($I,"$2")}))}function A1(e){return e.match(vI)||[""]}function wI(e,t,n){var r=e.length,i,o,a,l;for(o=0;o<r;o++)i=e[o],i&&(PI(i)&&(i='"'+i+'"'),l=Om(i),a=!l&&/^\d+$/.test(i),t.call(n,i,l,a,o,e))}function Om(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function SI(e){return e.match(xI)&&!e.match(Gw)}function CI(e){return bI.test(e)}function PI(e){return!Om(e)&&(SI(e)||CI(e))}const OI=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,cf=e=>e.match(OI)||[],ff=e=>e[0].toUpperCase()+e.slice(1),_m=(e,t)=>cf(e).join(t).toLowerCase(),Qw=e=>cf(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),_I=e=>ff(Qw(e)),kI=e=>_m(e,"_"),NI=e=>_m(e,"-"),EI=e=>ff(_m(e," ")),II=e=>cf(e).map(ff).join(" ");var Eh={words:cf,upperFirst:ff,camelCase:Qw,pascalCase:_I,snakeCase:kI,kebabCase:NI,sentenceCase:EI,titleCase:II},nc={},TI={get exports(){return nc},set exports(e){nc=e}};TI.exports=function(e){return Kw(AI(e),e)};nc.array=Kw;function Kw(e,t){var n=e.length,r=new Array(n),i={},o=n,a=RI(t),l=FI(e);for(t.forEach(function(d){if(!l.has(d[0])||!l.has(d[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)i[o]||u(e[o],o,new Set);return r;function u(d,f,h){if(h.has(d)){var m;try{m=", node was:"+JSON.stringify(d)}catch{m=""}throw new Error("Cyclic dependency"+m)}if(!l.has(d))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(d));if(!i[f]){i[f]=!0;var b=a.get(d)||new Set;if(b=Array.from(b),f=b.length){h.add(d);do{var v=b[--f];u(v,l.get(v),h)}while(f);h.delete(d)}r[--n]=d}}}function AI(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function RI(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function FI(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}const DI=Object.prototype.toString,MI=Error.prototype.toString,jI=RegExp.prototype.toString,LI=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",zI=/^Symbol\((.*)\)(.*)$/;function UI(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function wx(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return UI(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return LI.call(e).replace(zI,"Symbol($1)");const r=DI.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+MI.call(e)+"]":r==="RegExp"?jI.call(e):null}function ba(e,t){let n=wx(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let o=wx(this[r],t);return o!==null?o:i},2)}function Zw(e){return e==null?[]:[].concat(e)}let BI=/\$\{\s*(\w+)\s*\}/g;class Vt extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(BI,(i,o)=>ba(n[o])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],Zw(t).forEach(o=>{Vt.isError(o)?(this.errors.push(...o.errors),this.inner=this.inner.concat(o.inner.length?o.inner:o)):this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,Vt)}}let cr={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${ba(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${ba(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${ba(n,!0)}\``+i}},On={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},Ur={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},R1={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},F1={isValue:"${path} field must be ${value}"},D1={noUnknown:"${path} field has unspecified keys: ${unknown}"},HI={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:cr,string:On,number:Ur,date:R1,object:D1,array:HI,boolean:F1});const km=e=>e&&e.__isYupSchema__;class rc{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:o}=n,a=typeof r=="function"?r:(...l)=>l.every(u=>u===r);return new rc(t,(l,u)=>{var d;let f=a(...l)?i:o;return(d=f==null?void 0:f(u))!=null?d:u})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(o=>o.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!km(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Su={context:"$",value:"."};function Jw(e,t){return new Pi(e,t)}class Pi{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Su.context,this.isValue=this.key[0]===Su.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Su.context:this.isValue?Su.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&eo.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Pi.prototype.__isYupRef=!0;const hn=e=>e==null;function vo(e){function t({value:n,path:r="",options:i,originalValue:o,schema:a},l,u){const{name:d,test:f,params:h,message:m,skipAbsent:b}=e;let{parent:v,context:w,abortEarly:x=a.spec.abortEarly}=i;function p(L){return Pi.isRef(L)?L.getValue(n,v,w):L}function g(L={}){const se=Object.assign({value:n,originalValue:o,label:a.spec.label,path:L.path||r,spec:a.spec},h,L.params);for(const j of Object.keys(se))se[j]=p(se[j]);const M=new Vt(Vt.formatError(L.message||m,se),n,se.path,L.type||d);return M.params=se,M}const $=x?l:u;let S={path:r,parent:v,type:d,from:i.from,createError:g,resolve:p,options:i,originalValue:o,schema:a};const P=L=>{Vt.isError(L)?$(L):L?u(null):$(g())},N=L=>{Vt.isError(L)?$(L):l(L)},T=b&&hn(n);if(!i.sync){try{Promise.resolve(T?!0:f.call(S,n,S)).then(P,N)}catch(L){N(L)}return}let R;try{var W;if(R=T?!0:f.call(S,n,S),typeof((W=R)==null?void 0:W.then)=="function")throw new Error(`Validation test of type: "${S.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(L){N(L);return}P(R)}return t.OPTIONS=e,t}function WI(e,t,n,r=n){let i,o,a;return t?(eo.forEach(t,(l,u,d)=>{let f=u?l.slice(1,l.length-1):l;e=e.resolve({context:r,parent:i,value:n});let h=e.type==="tuple",m=d?parseInt(f,10):0;if(e.innerType||h){if(h&&!d)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&m>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[m],e=h?e.spec.types[m]:e.innerType}if(!d){if(!e.fields||!e.fields[f])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);i=n,n=n&&n[f],e=e.fields[f]}o=f,a=u?"["+l+"]":"."+l}),{schema:e,parent:i,parentPath:o}):{parent:i,parentPath:t,schema:e}}class ic extends Set{describe(){const t=[];for(const n of this.values())t.push(Pi.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new ic(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function ca(e,t=new Map){if(km(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=ca(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,ca(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(ca(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=ca(i,t)}else throw Error(`Unable to clone ${e}`);return n}class yn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new ic,this._blacklist=new ic,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(cr.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=ca(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(o=>{t.tests.forEach(a=>{o.test(a.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,o)=>o.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",o=r._cast(t,n);if(n.assert!==!1&&!r.isType(o)){if(i&&hn(o))return o;let a=ba(t),l=ba(o);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(l!==a?`result of cast: ${l}`:""))}return o}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,o)=>o.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault()),r}_validate(t,n={},r,i){let{path:o,originalValue:a=t,strict:l=this.spec.strict}=n,u=t;l||(u=this._cast(u,Object.assign({assert:!1},n)));let d=[];for(let f of Object.values(this.internalTests))f&&d.push(f);this.runTests({path:o,value:u,originalValue:a,options:n,tests:d},r,f=>{if(f.length)return i(f,u);this.runTests({path:o,value:u,originalValue:a,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:o,value:a,originalValue:l,path:u,options:d}=t,f=w=>{i||(i=!0,n(w,a))},h=w=>{i||(i=!0,r(w,a))},m=o.length,b=[];if(!m)return h([]);let v={value:a,originalValue:l,path:u,options:d,schema:this};for(let w=0;w<o.length;w++){const x=o[w];x(v,f,function(g){g&&(b=b.concat(g)),--m<=0&&h(b)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:o,options:a}){const l=t??n;if(l==null)throw TypeError("Must include `key` or `index` for nested validations");const u=typeof l=="number";let d=r[l];const f=Object.assign({},a,{strict:!0,parent:r,value:d,originalValue:o[l],key:void 0,[u?"index":"key"]:l,path:u||l.includes(".")?`${i||""}[${d?l:`"${l}"`}]`:(i?`${i}.`:"")+t});return(h,m,b)=>this.resolve(f)._validate(d,f,m,b)}validate(t,n){let r=this.resolve(Object.assign({},n,{value:t}));return new Promise((i,o)=>r._validate(t,n,(a,l)=>{Vt.isError(a)&&(a.value=l),o(a)},(a,l)=>{a.length?o(new Vt(a,l)):i(l)}))}validateSync(t,n){let r=this.resolve(Object.assign({},n,{value:t})),i;return r._validate(t,Object.assign({},n,{sync:!0}),(o,a)=>{throw Vt.isError(o)&&(o.value=a),o},(o,a)=>{if(o.length)throw new Vt(o,t);i=a}),i}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(Vt.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(Vt.isError(r))return!1;throw r}}_getDefault(){let t=this.spec.default;return t==null?t:typeof t=="function"?t.call(this):ca(t)}getDefault(t){return this.resolve(t||{})._getDefault()}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=vo({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=vo({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=cr.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=cr.notNull){return this.nullability(!1,t)}required(t=cr.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=cr.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=vo(n),o=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===n.name&&(o||a.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=Zw(t).map(o=>new Pi(o));return i.forEach(o=>{o.isSibling&&r.deps.push(o.key)}),r.conditions.push(typeof n=="function"?new rc(i,n):rc.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=vo({message:t,name:"typeError",test(r){return!hn(r)&&!this.schema._typeCheck(r)?this.createError({params:{type:this.schema.type}}):!0}}),n}oneOf(t,n=cr.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=vo({message:n,name:"oneOf",skipAbsent:!0,test(i){let o=this.schema._whitelist,a=o.resolveAll(this.resolve);return a.includes(i)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:a}})}}),r}notOneOf(t,n=cr.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=vo({message:n,name:"notOneOf",test(i){let o=this.schema._blacklist,a=o.resolveAll(this.resolve);return a.includes(i)?this.createError({params:{values:Array.from(o).join(", "),resolved:a}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:o,nullable:a}=n.spec;return{meta:i,label:r,optional:o,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(u=>({name:u.OPTIONS.name,params:u.OPTIONS.params})).filter((u,d,f)=>f.findIndex(h=>h.name===u.name)===d)}}}yn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])yn.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:o,schema:a}=WI(this,t,n,r.context);return a[e](i&&i[o],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])yn.prototype[e]=yn.prototype.oneOf;for(const e of["not","nope"])yn.prototype[e]=yn.prototype.notOneOf;function Xw(){return new e5}class e5 extends yn{constructor(){super({type:"boolean",check(t){return t instanceof Boolean&&(t=t.valueOf()),typeof t=="boolean"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(r.spec.coerce&&!r.isType(t)){if(/^(true|1)$/i.test(String(t)))return!0;if(/^(false|0)$/i.test(String(t)))return!1}return t})})}isTrue(t=F1.isValue){return this.test({message:t,name:"is-value",exclusive:!0,params:{value:"true"},test(n){return hn(n)||n===!0}})}isFalse(t=F1.isValue){return this.test({message:t,name:"is-value",exclusive:!0,params:{value:"false"},test(n){return hn(n)||n===!1}})}default(t){return super.default(t)}defined(t){return super.defined(t)}optional(){return super.optional()}required(t){return super.required(t)}notRequired(){return super.notRequired()}nullable(){return super.nullable()}nonNullable(t){return super.nonNullable(t)}strip(t){return super.strip(t)}}Xw.prototype=e5.prototype;let YI=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,VI=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,qI=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,GI=e=>hn(e)||e===e.trim(),QI={}.toString();function Ot(){return new t5}class t5 extends yn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===QI?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||cr.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=On.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=On.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=On.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,o;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:o}=n:i=n),this.test({name:o||"matches",message:i||On.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&r||a.search(t)!==-1})}email(t=On.email){return this.matches(YI,{name:"email",message:t,excludeEmptyString:!0})}url(t=On.url){return this.matches(VI,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=On.uuid){return this.matches(qI,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=On.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:GI})}lowercase(t=On.lowercase){return this.transform(n=>hn(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>hn(n)||n===n.toLowerCase()})}uppercase(t=On.uppercase){return this.transform(n=>hn(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>hn(n)||n===n.toUpperCase()})}}Ot.prototype=t5.prototype;let KI=e=>e!=+e;function Nm(){return new n5}class n5 extends yn{constructor(){super({type:"number",check(t){return t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&!KI(t)}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce)return t;let i=t;if(typeof i=="string"){if(i=i.replace(/\s/g,""),i==="")return NaN;i=+i}return r.isType(i)?i:parseFloat(i)})})}min(t,n=Ur.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r>=this.resolve(t)}})}max(t,n=Ur.max){return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(r){return r<=this.resolve(t)}})}lessThan(t,n=Ur.lessThan){return this.test({message:n,name:"max",exclusive:!0,params:{less:t},skipAbsent:!0,test(r){return r<this.resolve(t)}})}moreThan(t,n=Ur.moreThan){return this.test({message:n,name:"min",exclusive:!0,params:{more:t},skipAbsent:!0,test(r){return r>this.resolve(t)}})}positive(t=Ur.positive){return this.moreThan(0,t)}negative(t=Ur.negative){return this.lessThan(0,t)}integer(t=Ur.integer){return this.test({name:"integer",message:t,skipAbsent:!0,test:n=>Number.isInteger(n)})}truncate(){return this.transform(t=>hn(t)?t:t|0)}round(t){var n;let r=["ceil","floor","round","trunc"];if(t=((n=t)==null?void 0:n.toLowerCase())||"round",t==="trunc")return this.truncate();if(r.indexOf(t.toLowerCase())===-1)throw new TypeError("Only valid options for round() are: "+r.join(", "));return this.transform(i=>hn(i)?i:Math[t](i))}}Nm.prototype=n5.prototype;var ZI=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function JI(e){var t=[1,4,5,6,7,10,11],n=0,r,i;if(i=ZI.exec(e)){for(var o=0,a;a=t[o];++o)i[a]=+i[a]||0;i[2]=(+i[2]||1)-1,i[3]=+i[3]||1,i[7]=i[7]?String(i[7]).substr(0,3):0,(i[8]===void 0||i[8]==="")&&(i[9]===void 0||i[9]==="")?r=+new Date(i[1],i[2],i[3],i[4],i[5],i[6],i[7]):(i[8]!=="Z"&&i[9]!==void 0&&(n=i[10]*60+i[11],i[9]==="+"&&(n=0-n)),r=Date.UTC(i[1],i[2],i[3],i[4],i[5]+n,i[6],i[7]))}else r=Date.parse?Date.parse(e):NaN;return r}let XI=new Date(""),eT=e=>Object.prototype.toString.call(e)==="[object Date]";class hf extends yn{constructor(){super({type:"date",check(t){return eT(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)?t:(t=JI(t),isNaN(t)?hf.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Pi.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=R1.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=R1.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}hf.INVALID_DATE=XI;hf.prototype;function tT(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([a,l])=>`${a}-${l}`));function o(a,l){let u=eo.split(a)[0];r.add(u),i.has(`${l}-${u}`)||n.push([l,u])}for(const a of Object.keys(e)){let l=e[a];r.add(a),Pi.isRef(l)&&l.isSibling?o(l.path,a):km(l)&&"deps"in l&&l.deps.forEach(u=>o(u,a))}return nc.array(Array.from(r),n).reverse()}function Sx(e,t){let n=1/0;return e.some((r,i)=>{var o;if((o=t.path)!=null&&o.includes(r))return n=i,!0}),n}function r5(e){return(t,n)=>Sx(e,t)-Sx(e,n)}const nT=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function ad(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=ad(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=ad(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(ad)}):"optional"in e?e.optional():e}const rT=(e,t)=>{const n=[...eo.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=eo.getter(eo.join(n),!0)(e);return!!(i&&r in i)};let Cx=e=>Object.prototype.toString.call(e)==="[object Object]";function iT(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const oT=r5([]);function Wl(e){return new i5(e)}class i5 extends yn{constructor(t){super({type:"object",check(n){return Cx(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=oT,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault();if(!this._typeCheck(i))return i;let o=this.fields,a=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,l=[].concat(this._nodes,Object.keys(i).filter(h=>!this._nodes.includes(h))),u={},d=Object.assign({},n,{parent:u,__validating:n.__validating||!1}),f=!1;for(const h of l){let m=o[h],b=h in i;if(m){let v,w=i[h];d.path=(n.path?`${n.path}.`:"")+h,m=m.resolve({value:w,context:n.context,parent:u});let x=m instanceof yn?m.spec:void 0,p=x==null?void 0:x.strict;if(x!=null&&x.strip){f=f||h in i;continue}v=!n.__validating||!p?m.cast(i[h],d):i[h],v!==void 0&&(u[h]=v)}else b&&!a&&(u[h]=i[h]);(b!==h in u||u[h]!==i[h])&&(f=!0)}return f?u:i}_validate(t,n={},r,i){let{from:o=[],originalValue:a=t,recursive:l=this.spec.recursive}=n;n.from=[{schema:this,value:a},...o],n.__validating=!0,n.originalValue=a,super._validate(t,n,r,(u,d)=>{if(!l||!Cx(d)){i(u,d);return}a=a||d;let f=[];for(let h of this._nodes){let m=this.fields[h];!m||Pi.isRef(m)||f.push(m.asNestedTest({options:n,key:h,parent:d,parentPath:n.path,originalParent:a}))}this.runTests({tests:f,value:d,originalValue:a,options:n},r,h=>{i(h.sort(this._sortErrors).concat(u),d)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,o]of Object.entries(this.fields)){const a=r[i];r[i]=a===void 0?o:a}return n.withMutation(i=>i.setFields(r,this._excludedEdges))}_getDefault(){if("default"in this.spec)return super._getDefault();if(!this._nodes.length)return;let t={};return this._nodes.forEach(n=>{const r=this.fields[n];t[n]=r&&"getDefault"in r?r.getDefault():void 0}),t}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=tT(t,n),r._sortErrors=r5(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return ad(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n)}omit(t){const n=Object.assign({},this.fields);for(const r of t)delete n[r];return this.setFields(n)}from(t,n,r){let i=eo.getter(t,!0);return this.transform(o=>{if(!o)return o;let a=o;return rT(o,t)&&(a=Object.assign({},o),r||delete a[t],a[n]=i(o)),a})}json(){return this.transform(nT)}noUnknown(t=!0,n=D1.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const o=iT(this.schema,i);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=D1.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(Eh.camelCase)}snakeCase(){return this.transformKeys(Eh.snakeCase)}constantCase(){return this.transformKeys(t=>Eh.snakeCase(t).toUpperCase())}describe(t){let n=super.describe(t);n.fields={};for(const[i,o]of Object.entries(this.fields)){var r;let a=t;(r=a)!=null&&r.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[i]})),n.fields[i]=o.describe(a)}return n}}Wl.prototype=i5.prototype;var Yl=e=>e.type==="checkbox",fa=e=>e instanceof Date,Tt=e=>e==null;const o5=e=>typeof e=="object";var ct=e=>!Tt(e)&&!Array.isArray(e)&&o5(e)&&!fa(e),aT=e=>ct(e)&&e.target?Yl(e.target)?e.target.checked:e.target.value:e,sT=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,lT=(e,t)=>e.has(sT(t)),uT=e=>{const t=e.constructor&&e.constructor.prototype;return ct(t)&&t.hasOwnProperty("isPrototypeOf")},Em=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Hi(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Em&&(e instanceof Blob||e instanceof FileList))&&(n||ct(e)))if(t=n?[]:{},!Array.isArray(e)&&!uT(e))t=e;else for(const r in e)t[r]=Hi(e[r]);else return e;return t}var Vl=e=>Array.isArray(e)?e.filter(Boolean):[],it=e=>e===void 0,ce=(e,t,n)=>{if(!t||!ct(e))return n;const r=Vl(t.split(/[,[\].]+?/)).reduce((i,o)=>Tt(i)?i:i[o],e);return it(r)||r===e?it(e[t])?n:e[t]:r};const Px={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},In={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},or={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ne.createContext(null);var dT=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const a=o;return t._proxyFormState[a]!==In.all&&(t._proxyFormState[a]=!r||In.all),n&&(n[a]=!0),e[a]}});return i},an=e=>ct(e)&&!Object.keys(e).length,cT=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return an(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(a=>t[a]===(!r||In.all))},Ih=e=>Array.isArray(e)?e:[e];function fT(e){const t=ne.useRef(e);t.current=e,ne.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var Kn=e=>typeof e=="string",hT=(e,t,n,r,i)=>Kn(e)?(r&&t.watch.add(e),ce(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),ce(n,o))):(r&&(t.watchAll=!0),n),Im=e=>/^\w*$/.test(e),a5=e=>Vl(e.replace(/["|']|\]/g,"").split(/\.|\[/));function Le(e,t,n){let r=-1;const i=Im(t)?[t]:a5(t),o=i.length,a=o-1;for(;++r<o;){const l=i[r];let u=n;if(r!==a){const d=e[l];u=ct(d)||Array.isArray(d)?d:isNaN(+i[r+1])?{}:[]}e[l]=u,e=e[l]}return e}var s5=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{};const M1=(e,t,n)=>{for(const r of n||Object.keys(e)){const i=ce(e,r);if(i){const{_f:o,...a}=i;if(o&&t(o.name)){if(o.ref.focus){o.ref.focus();break}else if(o.refs&&o.refs[0].focus){o.refs[0].focus();break}}else ct(a)&&M1(a,t)}}};var Ox=e=>({isOnSubmit:!e||e===In.onSubmit,isOnBlur:e===In.onBlur,isOnChange:e===In.onChange,isOnAll:e===In.all,isOnTouch:e===In.onTouched}),_x=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),pT=(e,t,n)=>{const r=Vl(ce(e,n));return Le(r,"root",t[n]),Le(e,n,r),e},$a=e=>typeof e=="boolean",Tm=e=>e.type==="file",Zr=e=>typeof e=="function",oc=e=>{if(!Em)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},sd=e=>Kn(e),Am=e=>e.type==="radio",ac=e=>e instanceof RegExp;const kx={value:!1,isValid:!1},Nx={value:!0,isValid:!0};var l5=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!it(e[0].attributes.value)?it(e[0].value)||e[0].value===""?Nx:{value:e[0].value,isValid:!0}:Nx:kx}return kx};const Ex={isValid:!1,value:null};var u5=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Ex):Ex;function Ix(e,t,n="validate"){if(sd(e)||Array.isArray(e)&&e.every(sd)||$a(e)&&!e)return{type:n,message:sd(e)?e:"",ref:t}}var xo=e=>ct(e)&&!ac(e)?e:{value:e,message:""},Tx=async(e,t,n,r,i)=>{const{ref:o,refs:a,required:l,maxLength:u,minLength:d,min:f,max:h,pattern:m,validate:b,name:v,valueAsNumber:w,mount:x,disabled:p}=e._f,g=ce(t,v);if(!x||p)return{};const $=a?a[0]:o,S=M=>{r&&$.reportValidity&&($.setCustomValidity($a(M)?"":M||""),$.reportValidity())},P={},N=Am(o),T=Yl(o),R=N||T,W=(w||Tm(o))&&it(o.value)&&it(g)||oc(o)&&o.value===""||g===""||Array.isArray(g)&&!g.length,L=s5.bind(null,v,n,P),se=(M,j,X,F=or.maxLength,ee=or.minLength)=>{const re=M?j:X;P[v]={type:M?F:ee,message:re,ref:o,...L(M?F:ee,re)}};if(i?!Array.isArray(g)||!g.length:l&&(!R&&(W||Tt(g))||$a(g)&&!g||T&&!l5(a).isValid||N&&!u5(a).isValid)){const{value:M,message:j}=sd(l)?{value:!!l,message:l}:xo(l);if(M&&(P[v]={type:or.required,message:j,ref:$,...L(or.required,j)},!n))return S(j),P}if(!W&&(!Tt(f)||!Tt(h))){let M,j;const X=xo(h),F=xo(f);if(!Tt(g)&&!isNaN(g)){const ee=o.valueAsNumber||g&&+g;Tt(X.value)||(M=ee>X.value),Tt(F.value)||(j=ee<F.value)}else{const ee=o.valueAsDate||new Date(g),re=k=>new Date(new Date().toDateString()+" "+k),z=o.type=="time",_=o.type=="week";Kn(X.value)&&g&&(M=z?re(g)>re(X.value):_?g>X.value:ee>new Date(X.value)),Kn(F.value)&&g&&(j=z?re(g)<re(F.value):_?g<F.value:ee<new Date(F.value))}if((M||j)&&(se(!!M,X.message,F.message,or.max,or.min),!n))return S(P[v].message),P}if((u||d)&&!W&&(Kn(g)||i&&Array.isArray(g))){const M=xo(u),j=xo(d),X=!Tt(M.value)&&g.length>+M.value,F=!Tt(j.value)&&g.length<+j.value;if((X||F)&&(se(X,M.message,j.message),!n))return S(P[v].message),P}if(m&&!W&&Kn(g)){const{value:M,message:j}=xo(m);if(ac(M)&&!g.match(M)&&(P[v]={type:or.pattern,message:j,ref:o,...L(or.pattern,j)},!n))return S(j),P}if(b){if(Zr(b)){const M=await b(g,t),j=Ix(M,$);if(j&&(P[v]={...j,...L(or.validate,j.message)},!n))return S(j.message),P}else if(ct(b)){let M={};for(const j in b){if(!an(M)&&!n)break;const X=Ix(await b[j](g,t),$,j);X&&(M={...X,...L(j,X.message)},S(X.message),n&&(P[v]=M))}if(!an(M)&&(P[v]={ref:$,...M},!n))return P}}return S(!0),P};function gT(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=it(e)?r++:e[t[r++]];return e}function mT(e){for(const t in e)if(!it(e[t]))return!1;return!0}function yt(e,t){const n=Array.isArray(t)?t:Im(t)?[t]:a5(t),r=n.length===1?e:gT(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(ct(r)&&an(r)||Array.isArray(r)&&mT(r))&&yt(e,n.slice(0,-1)),e}function Th(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var sc=e=>Tt(e)||!o5(e);function Gi(e,t){if(sc(e)||sc(t))return e===t;if(fa(e)&&fa(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const a=t[i];if(fa(o)&&fa(a)||ct(o)&&ct(a)||Array.isArray(o)&&Array.isArray(a)?!Gi(o,a):o!==a)return!1}}return!0}var d5=e=>e.type==="select-multiple",yT=e=>Am(e)||Yl(e),Ah=e=>oc(e)&&e.isConnected,c5=e=>{for(const t in e)if(Zr(e[t]))return!0;return!1};function lc(e,t={}){const n=Array.isArray(e);if(ct(e)||n)for(const r in e)Array.isArray(e[r])||ct(e[r])&&!c5(e[r])?(t[r]=Array.isArray(e[r])?[]:{},lc(e[r],t[r])):Tt(e[r])||(t[r]=!0);return t}function f5(e,t,n){const r=Array.isArray(e);if(ct(e)||r)for(const i in e)Array.isArray(e[i])||ct(e[i])&&!c5(e[i])?it(t)||sc(n[i])?n[i]=Array.isArray(e[i])?lc(e[i],[]):{...lc(e[i])}:f5(e[i],Tt(t)?{}:t[i],n[i]):n[i]=!Gi(e[i],t[i]);return n}var Rh=(e,t)=>f5(e,t,lc(t)),h5=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>it(e)?e:t?e===""?NaN:e&&+e:n&&Kn(e)?new Date(e):r?r(e):e;function Fh(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Tm(t)?t.files:Am(t)?u5(e.refs).value:d5(t)?[...t.selectedOptions].map(({value:n})=>n):Yl(t)?l5(e.refs).value:h5(it(t.value)?e.ref.value:t.value,e)}var vT=(e,t,n,r)=>{const i={};for(const o of e){const a=ce(t,o);a&&Le(i,o,a._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},fs=e=>it(e)?e:ac(e)?e.source:ct(e)?ac(e.value)?e.value.source:e.value:e,xT=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ax(e,t,n){const r=ce(e,n);if(r||Im(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),a=ce(t,o),l=ce(e,o);if(a&&!Array.isArray(a)&&n!==o)return{name:n};if(l&&l.type)return{name:o,error:l};i.pop()}return{name:n}}var bT=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,$T=(e,t)=>!Vl(ce(e,t)).length&&yt(e,t);const wT={mode:In.onSubmit,reValidateMode:In.onChange,shouldFocusError:!0};function ST(e={},t){let n={...wT,...e},r={submitCount:0,isDirty:!1,isLoading:Zr(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},o=ct(n.defaultValues)||ct(n.values)?Hi(n.defaultValues||n.values)||{}:{},a=n.shouldUnregister?{}:Hi(o),l={action:!1,mount:!1,watch:!1},u={mount:new Set,unMount:new Set,array:new Set,watch:new Set},d,f=0;const h={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:Th(),array:Th(),state:Th()},b=e.resetOptions&&e.resetOptions.keepDirtyValues,v=Ox(n.mode),w=Ox(n.reValidateMode),x=n.criteriaMode===In.all,p=O=>E=>{clearTimeout(f),f=setTimeout(O,E)},g=async O=>{if(h.isValid||O){const E=n.resolver?an((await W()).errors):await se(i,!0);E!==r.isValid&&m.state.next({isValid:E})}},$=O=>h.isValidating&&m.state.next({isValidating:O}),S=(O,E=[],A,oe,K=!0,q=!0)=>{if(oe&&A){if(l.action=!0,q&&Array.isArray(ce(i,O))){const ae=A(ce(i,O),oe.argA,oe.argB);K&&Le(i,O,ae)}if(q&&Array.isArray(ce(r.errors,O))){const ae=A(ce(r.errors,O),oe.argA,oe.argB);K&&Le(r.errors,O,ae),$T(r.errors,O)}if(h.touchedFields&&q&&Array.isArray(ce(r.touchedFields,O))){const ae=A(ce(r.touchedFields,O),oe.argA,oe.argB);K&&Le(r.touchedFields,O,ae)}h.dirtyFields&&(r.dirtyFields=Rh(o,a)),m.state.next({name:O,isDirty:j(O,E),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Le(a,O,E)},P=(O,E)=>{Le(r.errors,O,E),m.state.next({errors:r.errors})},N=(O,E,A,oe)=>{const K=ce(i,O);if(K){const q=ce(a,O,it(A)?ce(o,O):A);it(q)||oe&&oe.defaultChecked||E?Le(a,O,E?q:Fh(K._f)):ee(O,q),l.mount&&g()}},T=(O,E,A,oe,K)=>{let q=!1,ae=!1;const ve={name:O};if(!A||oe){h.isDirty&&(ae=r.isDirty,r.isDirty=ve.isDirty=j(),q=ae!==ve.isDirty);const le=Gi(ce(o,O),E);ae=ce(r.dirtyFields,O),le?yt(r.dirtyFields,O):Le(r.dirtyFields,O,!0),ve.dirtyFields=r.dirtyFields,q=q||h.dirtyFields&&ae!==!le}if(A){const le=ce(r.touchedFields,O);le||(Le(r.touchedFields,O,A),ve.touchedFields=r.touchedFields,q=q||h.touchedFields&&le!==A)}return q&&K&&m.state.next(ve),q?ve:{}},R=(O,E,A,oe)=>{const K=ce(r.errors,O),q=h.isValid&&$a(E)&&r.isValid!==E;if(e.delayError&&A?(d=p(()=>P(O,A)),d(e.delayError)):(clearTimeout(f),d=null,A?Le(r.errors,O,A):yt(r.errors,O)),(A?!Gi(K,A):K)||!an(oe)||q){const ae={...oe,...q&&$a(E)?{isValid:E}:{},errors:r.errors,name:O};r={...r,...ae},m.state.next(ae)}$(!1)},W=async O=>n.resolver(a,n.context,vT(O||u.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),L=async O=>{const{errors:E}=await W();if(O)for(const A of O){const oe=ce(E,A);oe?Le(r.errors,A,oe):yt(r.errors,A)}else r.errors=E;return E},se=async(O,E,A={valid:!0})=>{for(const oe in O){const K=O[oe];if(K){const{_f:q,...ae}=K;if(q){const ve=u.array.has(q.name),le=await Tx(K,a,x,n.shouldUseNativeValidation&&!E,ve);if(le[q.name]&&(A.valid=!1,E))break;!E&&(ce(le,q.name)?ve?pT(r.errors,le,q.name):Le(r.errors,q.name,le[q.name]):yt(r.errors,q.name))}ae&&await se(ae,E,A)}}return A.valid},M=()=>{for(const O of u.unMount){const E=ce(i,O);E&&(E._f.refs?E._f.refs.every(A=>!Ah(A)):!Ah(E._f.ref))&&I(O)}u.unMount=new Set},j=(O,E)=>(O&&E&&Le(a,O,E),!Gi(U(),o)),X=(O,E,A)=>hT(O,u,{...l.mount?a:it(E)?o:Kn(O)?{[O]:E}:E},A,E),F=O=>Vl(ce(l.mount?a:o,O,e.shouldUnregister?ce(o,O,[]):[])),ee=(O,E,A={})=>{const oe=ce(i,O);let K=E;if(oe){const q=oe._f;q&&(!q.disabled&&Le(a,O,h5(E,q)),K=oc(q.ref)&&Tt(E)?"":E,d5(q.ref)?[...q.ref.options].forEach(ae=>ae.selected=K.includes(ae.value)):q.refs?Yl(q.ref)?q.refs.length>1?q.refs.forEach(ae=>(!ae.defaultChecked||!ae.disabled)&&(ae.checked=Array.isArray(K)?!!K.find(ve=>ve===ae.value):K===ae.value)):q.refs[0]&&(q.refs[0].checked=!!K):q.refs.forEach(ae=>ae.checked=ae.value===K):Tm(q.ref)?q.ref.value="":(q.ref.value=K,q.ref.type||m.values.next({name:O,values:{...a}})))}(A.shouldDirty||A.shouldTouch)&&T(O,K,A.shouldTouch,A.shouldDirty,!0),A.shouldValidate&&k(O)},re=(O,E,A)=>{for(const oe in E){const K=E[oe],q=`${O}.${oe}`,ae=ce(i,q);(u.array.has(O)||!sc(K)||ae&&!ae._f)&&!fa(K)?re(q,K,A):ee(q,K,A)}},z=(O,E,A={})=>{const oe=ce(i,O),K=u.array.has(O),q=Hi(E);Le(a,O,q),K?(m.array.next({name:O,values:{...a}}),(h.isDirty||h.dirtyFields)&&A.shouldDirty&&m.state.next({name:O,dirtyFields:Rh(o,a),isDirty:j(O,q)})):oe&&!oe._f&&!Tt(q)?re(O,q,A):ee(O,q,A),_x(O,u)&&m.state.next({...r}),m.values.next({name:O,values:{...a}}),!l.mount&&t()},_=async O=>{const E=O.target;let A=E.name,oe=!0;const K=ce(i,A),q=()=>E.type?Fh(K._f):aT(O);if(K){let ae,ve;const le=q(),Ae=O.type===Px.BLUR||O.type===Px.FOCUS_OUT,ns=!xT(K._f)&&!n.resolver&&!ce(r.errors,A)&&!K._f.deps||bT(Ae,ce(r.touchedFields,A),r.isSubmitted,w,v),Oi=_x(A,u,Ae);Le(a,A,le),Ae?(K._f.onBlur&&K._f.onBlur(O),d&&d(0)):K._f.onChange&&K._f.onChange(O);const rn=T(A,le,Ae,!1),H9=!an(rn)||Oi;if(!Ae&&m.values.next({name:A,type:O.type,values:{...a}}),ns)return h.isValid&&g(),H9&&m.state.next({name:A,...Oi?{}:rn});if(!Ae&&Oi&&m.state.next({...r}),$(!0),n.resolver){const{errors:Sy}=await W([A]),W9=Ax(r.errors,i,A),Cy=Ax(Sy,i,W9.name||A);ae=Cy.error,A=Cy.name,ve=an(Sy)}else ae=(await Tx(K,a,x,n.shouldUseNativeValidation))[A],oe=isNaN(le)||le===ce(a,A,le),oe&&(ae?ve=!1:h.isValid&&(ve=await se(i,!0)));oe&&(K._f.deps&&k(K._f.deps),R(A,ve,ae,rn))}},k=async(O,E={})=>{let A,oe;const K=Ih(O);if($(!0),n.resolver){const q=await L(it(O)?O:K);A=an(q),oe=O?!K.some(ae=>ce(q,ae)):A}else O?(oe=(await Promise.all(K.map(async q=>{const ae=ce(i,q);return await se(ae&&ae._f?{[q]:ae}:ae)}))).every(Boolean),!(!oe&&!r.isValid)&&g()):oe=A=await se(i);return m.state.next({...!Kn(O)||h.isValid&&A!==r.isValid?{}:{name:O},...n.resolver||!O?{isValid:A}:{},errors:r.errors,isValidating:!1}),E.shouldFocus&&!oe&&M1(i,q=>q&&ce(r.errors,q),O?K:u.mount),oe},U=O=>{const E={...o,...l.mount?a:{}};return it(O)?E:Kn(O)?ce(E,O):O.map(A=>ce(E,A))},D=(O,E)=>({invalid:!!ce((E||r).errors,O),isDirty:!!ce((E||r).dirtyFields,O),isTouched:!!ce((E||r).touchedFields,O),error:ce((E||r).errors,O)}),H=O=>{O&&Ih(O).forEach(E=>yt(r.errors,E)),m.state.next({errors:O?r.errors:{}})},V=(O,E,A)=>{const oe=(ce(i,O,{_f:{}})._f||{}).ref;Le(r.errors,O,{...E,ref:oe}),m.state.next({name:O,errors:r.errors,isValid:!1}),A&&A.shouldFocus&&oe&&oe.focus&&oe.focus()},ie=(O,E)=>Zr(O)?m.values.subscribe({next:A=>O(X(void 0,E),A)}):X(O,E,!0),I=(O,E={})=>{for(const A of O?Ih(O):u.mount)u.mount.delete(A),u.array.delete(A),E.keepValue||(yt(i,A),yt(a,A)),!E.keepError&&yt(r.errors,A),!E.keepDirty&&yt(r.dirtyFields,A),!E.keepTouched&&yt(r.touchedFields,A),!n.shouldUnregister&&!E.keepDefaultValue&&yt(o,A);m.values.next({values:{...a}}),m.state.next({...r,...E.keepDirty?{isDirty:j()}:{}}),!E.keepIsValid&&g()},G=(O,E={})=>{let A=ce(i,O);const oe=$a(E.disabled);return Le(i,O,{...A||{},_f:{...A&&A._f?A._f:{ref:{name:O}},name:O,mount:!0,...E}}),u.mount.add(O),A?oe&&Le(a,O,E.disabled?void 0:ce(a,O,Fh(A._f))):N(O,!0,E.value),{...oe?{disabled:E.disabled}:{},...n.shouldUseNativeValidation?{required:!!E.required,min:fs(E.min),max:fs(E.max),minLength:fs(E.minLength),maxLength:fs(E.maxLength),pattern:fs(E.pattern)}:{},name:O,onChange:_,onBlur:_,ref:K=>{if(K){G(O,E),A=ce(i,O);const q=it(K.value)&&K.querySelectorAll&&K.querySelectorAll("input,select,textarea")[0]||K,ae=yT(q),ve=A._f.refs||[];if(ae?ve.find(le=>le===q):q===A._f.ref)return;Le(i,O,{_f:{...A._f,...ae?{refs:[...ve.filter(Ah),q,...Array.isArray(ce(o,O))?[{}]:[]],ref:{type:q.type,name:O}}:{ref:q}}}),N(O,!1,void 0,q)}else A=ce(i,O,{}),A._f&&(A._f.mount=!1),(n.shouldUnregister||E.shouldUnregister)&&!(lT(u.array,O)&&l.action)&&u.unMount.add(O)}}},Y=()=>n.shouldFocusError&&M1(i,O=>O&&ce(r.errors,O),u.mount),Oe=(O,E)=>async A=>{A&&(A.preventDefault&&A.preventDefault(),A.persist&&A.persist());let oe=Hi(a);if(m.state.next({isSubmitting:!0}),n.resolver){const{errors:K,values:q}=await W();r.errors=K,oe=q}else await se(i);yt(r.errors,"root"),an(r.errors)?(m.state.next({errors:{}}),await O(oe,A)):(E&&await E({...r.errors},A),Y(),setTimeout(Y)),m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:an(r.errors),submitCount:r.submitCount+1,errors:r.errors})},me=(O,E={})=>{ce(i,O)&&(it(E.defaultValue)?z(O,ce(o,O)):(z(O,E.defaultValue),Le(o,O,E.defaultValue)),E.keepTouched||yt(r.touchedFields,O),E.keepDirty||(yt(r.dirtyFields,O),r.isDirty=E.defaultValue?j(O,ce(o,O)):j()),E.keepError||(yt(r.errors,O),h.isValid&&g()),m.state.next({...r}))},ge=(O,E={})=>{const A=O||o,oe=Hi(A),K=O&&!an(O)?oe:o;if(E.keepDefaultValues||(o=A),!E.keepValues){if(E.keepDirtyValues||b)for(const q of u.mount)ce(r.dirtyFields,q)?Le(K,q,ce(a,q)):z(q,ce(K,q));else{if(Em&&it(O))for(const q of u.mount){const ae=ce(i,q);if(ae&&ae._f){const ve=Array.isArray(ae._f.refs)?ae._f.refs[0]:ae._f.ref;if(oc(ve)){const le=ve.closest("form");if(le){le.reset();break}}}}i={}}a=e.shouldUnregister?E.keepDefaultValues?Hi(o):{}:oe,m.array.next({values:{...K}}),m.values.next({values:{...K}})}u={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&t(),l.mount=!h.isValid||!!E.keepIsValid,l.watch=!!e.shouldUnregister,m.state.next({submitCount:E.keepSubmitCount?r.submitCount:0,isDirty:E.keepDirty?r.isDirty:!!(E.keepDefaultValues&&!Gi(O,o)),isSubmitted:E.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:E.keepDirtyValues?r.dirtyFields:E.keepDefaultValues&&O?Rh(o,O):{},touchedFields:E.keepTouched?r.touchedFields:{},errors:E.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},he=(O,E)=>ge(Zr(O)?O(a):O,E);return{control:{register:G,unregister:I,getFieldState:D,_executeSchema:W,_getWatch:X,_getDirty:j,_updateValid:g,_removeUnmounted:M,_updateFieldArray:S,_getFieldArray:F,_reset:ge,_resetDefaultValues:()=>Zr(n.defaultValues)&&n.defaultValues().then(O=>{he(O,n.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:O=>{r={...r,...O}},_subjects:m,_proxyFormState:h,get _fields(){return i},get _formValues(){return a},get _state(){return l},set _state(O){l=O},get _defaultValues(){return o},get _names(){return u},set _names(O){u=O},get _formState(){return r},set _formState(O){r=O},get _options(){return n},set _options(O){n={...n,...O}}},trigger:k,register:G,handleSubmit:Oe,watch:ie,setValue:z,getValues:U,reset:he,resetField:me,clearErrors:H,unregister:I,setError:V,setFocus:(O,E={})=>{const A=ce(i,O),oe=A&&A._f;if(oe){const K=oe.refs?oe.refs[0]:oe.ref;K.focus&&(K.focus(),E.shouldSelect&&K.select())}},getFieldState:D}}function pf(e={}){const t=ne.useRef(),[n,r]=ne.useState({isDirty:!1,isValidating:!1,isLoading:Zr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Zr(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...ST(e,()=>r(o=>({...o}))),formState:n});const i=t.current.control;return i._options=e,fT({subject:i._subjects.state,next:o=>{cT(o,i._proxyFormState,i._updateFormState,!0)&&r({...i._formState})}}),ne.useEffect(()=>{e.values&&!Gi(e.values,i._defaultValues)?i._reset(e.values,i._options.resetOptions):i._resetDefaultValues()},[e.values,i]),ne.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=dT(n,i),t.current}var Rx=function(e,t,n){if(e&&"reportValidity"in e){var r=ce(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},p5=function(e,t){var n=function(i){var o=t.fields[i];o&&o.ref&&"reportValidity"in o.ref?Rx(o.ref,i,e):o.refs&&o.refs.forEach(function(a){return Rx(a,i,e)})};for(var r in t.fields)n(r)},CT=function(e,t){t.shouldUseNativeValidation&&p5(e,t);var n={};for(var r in e){var i=ce(t.fields,r);Le(n,r,Object.assign(e[r]||{},{ref:i&&i.ref}))}return n},gf=function(e,t,n){return t===void 0&&(t={}),n===void 0&&(n={}),function(r,i,o){try{return Promise.resolve(function(a,l){try{var u=(t.context,Promise.resolve(e[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},t,{context:i}))).then(function(d){return o.shouldUseNativeValidation&&p5({},o),{values:n.raw?r:d,errors:{}}}))}catch(d){return l(d)}return u&&u.then?u.then(void 0,l):u}(0,function(a){if(!a.inner)throw a;return{values:{},errors:CT((l=a,u=!o.shouldUseNativeValidation&&o.criteriaMode==="all",(l.inner||[]).reduce(function(d,f){if(d[f.path]||(d[f.path]={message:f.message,type:f.type}),u){var h=d[f.path].types,m=h&&h[f.type];d[f.path]=s5(f.path,u,d,f.type,m?[].concat(m,f.message):f.message)}return d},{})),o)};var l,u}))}catch(a){return Promise.reject(a)}}};class Ka{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.push(t),this.onSubscribe(),()=>{this.listeners=this.listeners.filter(n=>n!==t),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}const yl=typeof window>"u"||"Deno"in window;function sn(){}function PT(e,t){return typeof e=="function"?e(t):e}function j1(e){return typeof e=="number"&&e>=0&&e!==1/0}function g5(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Is(e,t,n){return ql(e)?typeof t=="function"?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function OT(e,t,n){return ql(e)?typeof t=="function"?{...n,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:typeof e=="function"?{...t,mutationFn:e}:{...e}}function Wr(e,t,n){return ql(e)?[{...t,queryKey:e},n]:[e||{},t]}function Fx(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:a,stale:l}=e;if(ql(a)){if(r){if(t.queryHash!==Rm(a,t.options))return!1}else if(!uc(t.queryKey,a))return!1}if(n!=="all"){const u=t.isActive();if(n==="active"&&!u||n==="inactive"&&u)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||typeof i<"u"&&i!==t.state.fetchStatus||o&&!o(t))}function Dx(e,t){const{exact:n,fetching:r,predicate:i,mutationKey:o}=e;if(ql(o)){if(!t.options.mutationKey)return!1;if(n){if(Qi(t.options.mutationKey)!==Qi(o))return!1}else if(!uc(t.options.mutationKey,o))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function Rm(e,t){return((t==null?void 0:t.queryKeyHashFn)||Qi)(e)}function Qi(e){return JSON.stringify(e,(t,n)=>z1(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function uc(e,t){return m5(e,t)}function m5(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!m5(e[n],t[n])):!1}function y5(e,t){if(e===t)return e;const n=Mx(e)&&Mx(t);if(n||z1(e)&&z1(t)){const r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),o=i.length,a=n?[]:{};let l=0;for(let u=0;u<o;u++){const d=n?u:i[u];a[d]=y5(e[d],t[d]),a[d]===e[d]&&l++}return r===o&&l===r?e:a}return t}function L1(e,t){if(e&&!t||t&&!e)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function Mx(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function z1(e){if(!jx(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!jx(n)||!n.hasOwnProperty("isPrototypeOf"))}function jx(e){return Object.prototype.toString.call(e)==="[object Object]"}function ql(e){return Array.isArray(e)}function v5(e){return new Promise(t=>{setTimeout(t,e)})}function Lx(e){v5(0).then(e)}function _T(){if(typeof AbortController=="function")return new AbortController}function U1(e,t,n){return n.isDataEqual!=null&&n.isDataEqual(e,t)?e:typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?y5(e,t):t}class kT extends Ka{constructor(){super(),this.setup=t=>{if(!yl&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(t){this.focused=t,t&&this.onFocus()}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const dc=new kT;class NT extends Ka{constructor(){super(),this.setup=t=>{if(!yl&&window.addEventListener){const n=()=>t();return window.addEventListener("online",n,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(t){this.online=t,t&&this.onOnline()}onOnline(){this.listeners.forEach(t=>{t()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const cc=new NT;function ET(e){return Math.min(1e3*2**e,3e4)}function mf(e){return(e??"online")==="online"?cc.isOnline():!0}class x5{constructor(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}}function ld(e){return e instanceof x5}function b5(e){let t=!1,n=0,r=!1,i,o,a;const l=new Promise((x,p)=>{o=x,a=p}),u=x=>{r||(b(new x5(x)),e.abort==null||e.abort())},d=()=>{t=!0},f=()=>{t=!1},h=()=>!dc.isFocused()||e.networkMode!=="always"&&!cc.isOnline(),m=x=>{r||(r=!0,e.onSuccess==null||e.onSuccess(x),i==null||i(),o(x))},b=x=>{r||(r=!0,e.onError==null||e.onError(x),i==null||i(),a(x))},v=()=>new Promise(x=>{i=p=>{const g=r||!h();return g&&x(p),g},e.onPause==null||e.onPause()}).then(()=>{i=void 0,r||e.onContinue==null||e.onContinue()}),w=()=>{if(r)return;let x;try{x=e.fn()}catch(p){x=Promise.reject(p)}Promise.resolve(x).then(m).catch(p=>{var g,$;if(r)return;const S=(g=e.retry)!=null?g:3,P=($=e.retryDelay)!=null?$:ET,N=typeof P=="function"?P(n,p):P,T=S===!0||typeof S=="number"&&n<S||typeof S=="function"&&S(n,p);if(t||!T){b(p);return}n++,e.onFail==null||e.onFail(n,p),v5(N).then(()=>{if(h())return v()}).then(()=>{t?b(p):w()})})};return mf(e.networkMode)?w():v().then(w),{promise:l,cancel:u,continue:()=>(i==null?void 0:i())?l:Promise.resolve(),cancelRetry:d,continueRetry:f}}const Fm=console;function IT(){let e=[],t=0,n=f=>{f()},r=f=>{f()};const i=f=>{let h;t++;try{h=f()}finally{t--,t||l()}return h},o=f=>{t?e.push(f):Lx(()=>{n(f)})},a=f=>(...h)=>{o(()=>{f(...h)})},l=()=>{const f=e;e=[],f.length&&Lx(()=>{r(()=>{f.forEach(h=>{n(h)})})})};return{batch:i,batchCalls:a,schedule:o,setNotifyFunction:f=>{n=f},setBatchNotifyFunction:f=>{r=f}}}const Je=IT();class $5{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),j1(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,t??(yl?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class TT extends $5{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||Fm,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||AT(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(t,n){const r=U1(this.state.data,t,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){this.dispatch({type:"setState",state:t,setStateOptions:n})}cancel(t){var n;const r=this.promise;return(n=this.retryer)==null||n.cancel(t),r?r.then(sn).catch(sn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!g5(this.state.dataUpdatedAt,t)}onFocus(){var t;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}onOnline(){var t;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}addObserver(t){this.observers.indexOf(t)===-1&&(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.indexOf(t)!==-1&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,n){var r,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var o;return(o=this.retryer)==null||o.continueRetry(),this.promise}}if(t&&this.setOptions(t),!this.options.queryFn){const b=this.observers.find(v=>v.options.queryFn);b&&this.setOptions(b.options)}Array.isArray(this.options.queryKey);const a=_T(),l={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},u=b=>{Object.defineProperty(b,"signal",{enumerable:!0,get:()=>{if(a)return this.abortSignalConsumed=!0,a.signal}})};u(l);const d=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(l)):Promise.reject("Missing queryFn"),f={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:d};if(u(f),(r=this.options.behavior)==null||r.onFetch(f),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=f.fetchOptions)==null?void 0:i.meta)){var h;this.dispatch({type:"fetch",meta:(h=f.fetchOptions)==null?void 0:h.meta})}const m=b=>{if(ld(b)&&b.silent||this.dispatch({type:"error",error:b}),!ld(b)){var v,w,x,p;(v=(w=this.cache.config).onError)==null||v.call(w,b,this),(x=(p=this.cache.config).onSettled)==null||x.call(p,this.state.data,b,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=b5({fn:f.fetchFn,abort:a==null?void 0:a.abort.bind(a),onSuccess:b=>{var v,w,x,p;if(typeof b>"u"){m(new Error("undefined"));return}this.setData(b),(v=(w=this.cache.config).onSuccess)==null||v.call(w,b,this),(x=(p=this.cache.config).onSettled)==null||x.call(p,b,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:m,onFail:(b,v)=>{this.dispatch({type:"failed",failureCount:b,error:v})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:f.options.retry,retryDelay:f.options.retryDelay,networkMode:f.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){const n=r=>{var i,o;switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=t.meta)!=null?i:null,fetchStatus:mf(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=t.dataUpdatedAt)!=null?o:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const a=t.error;return ld(a)&&a.revert&&this.revertState?{...this.revertState}:{...r,error:a,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:a,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Je.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}}function AT(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=typeof t<"u",r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}class RT extends Ka{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,n,r){var i;const o=n.queryKey,a=(i=n.queryHash)!=null?i:Rm(o,n);let l=this.get(a);return l||(l=new TT({cache:this,logger:t.getLogger(),queryKey:o,queryHash:a,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(l)),l}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){const n=this.queriesMap[t.queryHash];n&&(t.destroy(),this.queries=this.queries.filter(r=>r!==t),n===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){Je.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,n){const[r]=Wr(t,n);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(i=>Fx(r,i))}findAll(t,n){const[r]=Wr(t,n);return Object.keys(r).length>0?this.queries.filter(i=>Fx(r,i)):this.queries}notify(t){Je.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Je.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){Je.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}}class FT extends $5{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||Fm,this.observers=[],this.state=t.state||w5(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.indexOf(t)===-1&&(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(n=>n!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,n;return(t=(n=this.retryer)==null?void 0:n.continue())!=null?t:this.execute()}async execute(){const t=()=>{var T;return this.retryer=b5({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(R,W)=>{this.dispatch({type:"failed",failureCount:R,error:W})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(T=this.options.retry)!=null?T:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var r,i,o,a,l,u,d,f;if(!n){var h,m,b,v;this.dispatch({type:"loading",variables:this.options.variables}),await((h=(m=this.mutationCache.config).onMutate)==null?void 0:h.call(m,this.state.variables,this));const R=await((b=(v=this.options).onMutate)==null?void 0:b.call(v,this.state.variables));R!==this.state.context&&this.dispatch({type:"loading",context:R,variables:this.state.variables})}const T=await t();return await((r=(i=this.mutationCache.config).onSuccess)==null?void 0:r.call(i,T,this.state.variables,this.state.context,this)),await((o=(a=this.options).onSuccess)==null?void 0:o.call(a,T,this.state.variables,this.state.context)),await((l=(u=this.mutationCache.config).onSettled)==null?void 0:l.call(u,T,null,this.state.variables,this.state.context,this)),await((d=(f=this.options).onSettled)==null?void 0:d.call(f,T,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:T}),T}catch(T){try{var w,x,p,g,$,S,P,N;throw await((w=(x=this.mutationCache.config).onError)==null?void 0:w.call(x,T,this.state.variables,this.state.context,this)),await((p=(g=this.options).onError)==null?void 0:p.call(g,T,this.state.variables,this.state.context)),await(($=(S=this.mutationCache.config).onSettled)==null?void 0:$.call(S,void 0,T,this.state.variables,this.state.context,this)),await((P=(N=this.options).onSettled)==null?void 0:P.call(N,void 0,T,this.state.variables,this.state.context)),T}finally{this.dispatch({type:"error",error:T})}}}dispatch(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!mf(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...r,...t.state}}};this.state=n(this.state),Je.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}function w5(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class DT extends Ka{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,n,r){const i=new FT({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(n),state:r,defaultOptions:n.mutationKey?t.getMutationDefaults(n.mutationKey):void 0});return this.add(i),i}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(n=>n!==t),this.notify({type:"removed",mutation:t})}clear(){Je.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return typeof t.exact>"u"&&(t.exact=!0),this.mutations.find(n=>Dx(t,n))}findAll(t){return this.mutations.filter(n=>Dx(t,n))}notify(t){Je.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){var t;return this.resuming=((t=this.resuming)!=null?t:Promise.resolve()).then(()=>{const n=this.mutations.filter(r=>r.state.isPaused);return Je.batch(()=>n.reduce((r,i)=>r.then(()=>i.continue().catch(sn)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function MT(){return{onFetch:e=>{e.fetchFn=()=>{var t,n,r,i,o,a;const l=(t=e.fetchOptions)==null||(n=t.meta)==null?void 0:n.refetchPage,u=(r=e.fetchOptions)==null||(i=r.meta)==null?void 0:i.fetchMore,d=u==null?void 0:u.pageParam,f=(u==null?void 0:u.direction)==="forward",h=(u==null?void 0:u.direction)==="backward",m=((o=e.state.data)==null?void 0:o.pages)||[],b=((a=e.state.data)==null?void 0:a.pageParams)||[];let v=b,w=!1;const x=N=>{Object.defineProperty(N,"signal",{enumerable:!0,get:()=>{var T;if((T=e.signal)!=null&&T.aborted)w=!0;else{var R;(R=e.signal)==null||R.addEventListener("abort",()=>{w=!0})}return e.signal}})},p=e.options.queryFn||(()=>Promise.reject("Missing queryFn")),g=(N,T,R,W)=>(v=W?[T,...v]:[...v,T],W?[R,...N]:[...N,R]),$=(N,T,R,W)=>{if(w)return Promise.reject("Cancelled");if(typeof R>"u"&&!T&&N.length)return Promise.resolve(N);const L={queryKey:e.queryKey,pageParam:R,meta:e.options.meta};x(L);const se=p(L);return Promise.resolve(se).then(j=>g(N,R,j,W))};let S;if(!m.length)S=$([]);else if(f){const N=typeof d<"u",T=N?d:zx(e.options,m);S=$(m,N,T)}else if(h){const N=typeof d<"u",T=N?d:jT(e.options,m);S=$(m,N,T,!0)}else{v=[];const N=typeof e.options.getNextPageParam>"u";S=(l&&m[0]?l(m[0],0,m):!0)?$([],N,b[0]):Promise.resolve(g([],b[0],m[0]));for(let R=1;R<m.length;R++)S=S.then(W=>{if(l&&m[R]?l(m[R],R,m):!0){const se=N?b[R]:zx(e.options,W);return $(W,N,se)}return Promise.resolve(g(W,b[R],m[R]))})}return S.then(N=>({pages:N,pageParams:v}))}}}}function zx(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function jT(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}class LT{constructor(t={}){this.queryCache=t.queryCache||new RT,this.mutationCache=t.mutationCache||new DT,this.logger=t.logger||Fm,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=dc.subscribe(()=>{dc.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=cc.subscribe(()=>{cc.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,n;this.mountCount--,this.mountCount===0&&((t=this.unsubscribeFocus)==null||t.call(this),this.unsubscribeFocus=void 0,(n=this.unsubscribeOnline)==null||n.call(this),this.unsubscribeOnline=void 0)}isFetching(t,n){const[r]=Wr(t,n);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state.data}ensureQueryData(t,n,r){const i=Is(t,n,r),o=this.getQueryData(i.queryKey);return o?Promise.resolve(o):this.fetchQuery(i)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(t,n,r){const i=this.queryCache.find(t),o=i==null?void 0:i.state.data,a=PT(n,o);if(typeof a>"u")return;const l=Is(t),u=this.defaultQueryOptions(l);return this.queryCache.build(this,u).setData(a,{...r,manual:!0})}setQueriesData(t,n,r){return Je.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state}removeQueries(t,n){const[r]=Wr(t,n),i=this.queryCache;Je.batch(()=>{i.findAll(r).forEach(o=>{i.remove(o)})})}resetQueries(t,n,r){const[i,o]=Wr(t,n,r),a=this.queryCache,l={type:"active",...i};return Je.batch(()=>(a.findAll(i).forEach(u=>{u.reset()}),this.refetchQueries(l,o)))}cancelQueries(t,n,r){const[i,o={}]=Wr(t,n,r);typeof o.revert>"u"&&(o.revert=!0);const a=Je.batch(()=>this.queryCache.findAll(i).map(l=>l.cancel(o)));return Promise.all(a).then(sn).catch(sn)}invalidateQueries(t,n,r){const[i,o]=Wr(t,n,r);return Je.batch(()=>{var a,l;if(this.queryCache.findAll(i).forEach(d=>{d.invalidate()}),i.refetchType==="none")return Promise.resolve();const u={...i,type:(a=(l=i.refetchType)!=null?l:i.type)!=null?a:"active"};return this.refetchQueries(u,o)})}refetchQueries(t,n,r){const[i,o]=Wr(t,n,r),a=Je.batch(()=>this.queryCache.findAll(i).filter(u=>!u.isDisabled()).map(u=>{var d;return u.fetch(void 0,{...o,cancelRefetch:(d=o==null?void 0:o.cancelRefetch)!=null?d:!0,meta:{refetchPage:i.refetchPage}})}));let l=Promise.all(a).then(sn);return o!=null&&o.throwOnError||(l=l.catch(sn)),l}fetchQuery(t,n,r){const i=Is(t,n,r),o=this.defaultQueryOptions(i);typeof o.retry>"u"&&(o.retry=!1);const a=this.queryCache.build(this,o);return a.isStaleByTime(o.staleTime)?a.fetch(o):Promise.resolve(a.state.data)}prefetchQuery(t,n,r){return this.fetchQuery(t,n,r).then(sn).catch(sn)}fetchInfiniteQuery(t,n,r){const i=Is(t,n,r);return i.behavior=MT(),this.fetchQuery(i)}prefetchInfiniteQuery(t,n,r){return this.fetchInfiniteQuery(t,n,r).then(sn).catch(sn)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,n){const r=this.queryDefaults.find(i=>Qi(t)===Qi(i.queryKey));r?r.defaultOptions=n:this.queryDefaults.push({queryKey:t,defaultOptions:n})}getQueryDefaults(t){if(!t)return;const n=this.queryDefaults.find(r=>uc(t,r.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(t,n){const r=this.mutationDefaults.find(i=>Qi(t)===Qi(i.mutationKey));r?r.defaultOptions=n:this.mutationDefaults.push({mutationKey:t,defaultOptions:n})}getMutationDefaults(t){if(!t)return;const n=this.mutationDefaults.find(r=>uc(t,r.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(t){if(t!=null&&t._defaulted)return t;const n={...this.defaultOptions.queries,...this.getQueryDefaults(t==null?void 0:t.queryKey),...t,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=Rm(n.queryKey,n)),typeof n.refetchOnReconnect>"u"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary>"u"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(t==null?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}class zT extends Ka{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),Ux(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return B1(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return B1(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const r=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),L1(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const o=this.hasListeners();o&&Bx(this.currentQuery,i,this.options,r)&&this.executeFetch(),this.updateResult(n),o&&(this.currentQuery!==i||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();const a=this.computeRefetchInterval();o&&(this.currentQuery!==i||this.options.enabled!==r.enabled||a!==this.currentRefetchInterval)&&this.updateRefetchInterval(a)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(r=>{Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),t[r])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),r=this.client.getQueryCache().build(this.client,n);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(sn)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),yl||this.currentResult.isStale||!j1(this.options.staleTime))return;const n=g5(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(yl||this.options.enabled===!1||!j1(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||dc.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const r=this.currentQuery,i=this.options,o=this.currentResult,a=this.currentResultState,l=this.currentResultOptions,u=t!==r,d=u?t.state:this.currentQueryInitialState,f=u?this.currentResult:this.previousQueryResult,{state:h}=t;let{dataUpdatedAt:m,error:b,errorUpdatedAt:v,fetchStatus:w,status:x}=h,p=!1,g=!1,$;if(n._optimisticResults){const R=this.hasListeners(),W=!R&&Ux(t,n),L=R&&Bx(t,r,n,i);(W||L)&&(w=mf(t.options.networkMode)?"fetching":"paused",m||(x="loading")),n._optimisticResults==="isRestoring"&&(w="idle")}if(n.keepPreviousData&&!h.dataUpdatedAt&&f!=null&&f.isSuccess&&x!=="error")$=f.data,m=f.dataUpdatedAt,x=f.status,p=!0;else if(n.select&&typeof h.data<"u")if(o&&h.data===(a==null?void 0:a.data)&&n.select===this.selectFn)$=this.selectResult;else try{this.selectFn=n.select,$=n.select(h.data),$=U1(o==null?void 0:o.data,$,n),this.selectResult=$,this.selectError=null}catch(R){this.selectError=R}else $=h.data;if(typeof n.placeholderData<"u"&&typeof $>"u"&&x==="loading"){let R;if(o!=null&&o.isPlaceholderData&&n.placeholderData===(l==null?void 0:l.placeholderData))R=o.data;else if(R=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof R<"u")try{R=n.select(R),this.selectError=null}catch(W){this.selectError=W}typeof R<"u"&&(x="success",$=U1(o==null?void 0:o.data,R,n),g=!0)}this.selectError&&(b=this.selectError,$=this.selectResult,v=Date.now(),x="error");const S=w==="fetching",P=x==="loading",N=x==="error";return{status:x,fetchStatus:w,isLoading:P,isSuccess:x==="success",isError:N,isInitialLoading:P&&S,data:$,dataUpdatedAt:m,error:b,errorUpdatedAt:v,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>d.dataUpdateCount||h.errorUpdateCount>d.errorUpdateCount,isFetching:S,isRefetching:S&&!P,isLoadingError:N&&h.dataUpdatedAt===0,isPaused:w==="paused",isPlaceholderData:g,isPreviousData:p,isRefetchError:N&&h.dataUpdatedAt!==0,isStale:Dm(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,L1(r,n))return;this.currentResult=r;const i={cache:!0},o=()=>{if(!n)return!0;const{notifyOnChangeProps:a}=this.options;if(a==="all"||!a&&!this.trackedProps.size)return!0;const l=new Set(a??this.trackedProps);return this.options.useErrorBoundary&&l.add("error"),Object.keys(this.currentResult).some(u=>{const d=u;return this.currentResult[d]!==n[d]&&l.has(d)})};(t==null?void 0:t.listeners)!==!1&&o()&&(i.listeners=!0),this.notify({...i,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!ld(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){Je.batch(()=>{if(t.onSuccess){var n,r,i,o;(n=(r=this.options).onSuccess)==null||n.call(r,this.currentResult.data),(i=(o=this.options).onSettled)==null||i.call(o,this.currentResult.data,null)}else if(t.onError){var a,l,u,d;(a=(l=this.options).onError)==null||a.call(l,this.currentResult.error),(u=(d=this.options).onSettled)==null||u.call(d,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(f=>{f(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function UT(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Ux(e,t){return UT(e,t)||e.state.dataUpdatedAt>0&&B1(e,t,t.refetchOnMount)}function B1(e,t,n){if(t.enabled!==!1){const r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Dm(e,t)}return!1}function Bx(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Dm(e,n)}function Dm(e,t){return e.isStaleByTime(t.staleTime)}let BT=class extends Ka{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const r=this.options;this.options=this.client.defaultMutationOptions(t),L1(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.listeners.length){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:w5(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){Je.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,r,i,o;(n=(r=this.mutateOptions).onSuccess)==null||n.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(i=(o=this.mutateOptions).onSettled)==null||i.call(o,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var a,l,u,d;(a=(l=this.mutateOptions).onError)==null||a.call(l,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(u=(d=this.mutateOptions).onSettled)==null||u.call(d,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(f=>{f(this.currentResult)})})}};var fc={},HT={get exports(){return fc},set exports(e){fc=e}},S5={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za=C;function WT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var YT=typeof Object.is=="function"?Object.is:WT,VT=za.useState,qT=za.useEffect,GT=za.useLayoutEffect,QT=za.useDebugValue;function KT(e,t){var n=t(),r=VT({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return GT(function(){i.value=n,i.getSnapshot=t,Dh(i)&&o({inst:i})},[e,n,t]),qT(function(){return Dh(i)&&o({inst:i}),e(function(){Dh(i)&&o({inst:i})})},[e]),QT(n),n}function Dh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!YT(e,n)}catch{return!0}}function ZT(e,t){return t()}var JT=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ZT:KT;S5.useSyncExternalStore=za.useSyncExternalStore!==void 0?za.useSyncExternalStore:JT;(function(e){e.exports=S5})(HT);const C5=fc.useSyncExternalStore,Hx=C.createContext(void 0),P5=C.createContext(!1);function O5(e,t){return e||(t&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Hx),window.ReactQueryClientContext):Hx)}const Mt=({context:e}={})=>{const t=C.useContext(O5(e,C.useContext(P5)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},XT=({client:e,children:t,context:n,contextSharing:r=!1})=>{C.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);const i=O5(n,r);return C.createElement(P5.Provider,{value:!n&&r},C.createElement(i.Provider,{value:e},t))},_5=C.createContext(!1),eA=()=>C.useContext(_5);_5.Provider;function tA(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}const nA=C.createContext(tA()),rA=()=>C.useContext(nA);function k5(e,t){return typeof e=="function"?e(...t):!!e}const iA=(e,t)=>{(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))},oA=e=>{C.useEffect(()=>{e.clearReset()},[e])},aA=({result:e,errorResetBoundary:t,useErrorBoundary:n,query:r})=>e.isError&&!t.isReset()&&!e.isFetching&&k5(n,[e.error,r]),sA=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},lA=(e,t)=>e.isLoading&&e.isFetching&&!t,uA=(e,t,n)=>(e==null?void 0:e.suspense)&&lA(t,n),dA=(e,t,n)=>t.fetchOptimistic(e).then(({data:r})=>{e.onSuccess==null||e.onSuccess(r),e.onSettled==null||e.onSettled(r,null)}).catch(r=>{n.clearReset(),e.onError==null||e.onError(r),e.onSettled==null||e.onSettled(void 0,r)});function cA(e,t){const n=Mt({context:e.context}),r=eA(),i=rA(),o=n.defaultQueryOptions(e);o._optimisticResults=r?"isRestoring":"optimistic",o.onError&&(o.onError=Je.batchCalls(o.onError)),o.onSuccess&&(o.onSuccess=Je.batchCalls(o.onSuccess)),o.onSettled&&(o.onSettled=Je.batchCalls(o.onSettled)),sA(o),iA(o,i),oA(i);const[a]=C.useState(()=>new t(n,o)),l=a.getOptimisticResult(o);if(C5(C.useCallback(u=>r?()=>{}:a.subscribe(Je.batchCalls(u)),[a,r]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),C.useEffect(()=>{a.setOptions(o,{listeners:!1})},[o,a]),uA(o,l,r))throw dA(o,a,i);if(aA({result:l,errorResetBoundary:i,useErrorBoundary:o.useErrorBoundary,query:a.getCurrentQuery()}))throw l.error;return o.notifyOnChangeProps?l:a.trackResult(l)}function Ke(e,t,n){const r=Is(e,t,n);return cA(r,zT)}function $t(e,t,n){const r=OT(e,t,n),i=Mt({context:r.context}),[o]=C.useState(()=>new BT(i,r));C.useEffect(()=>{o.setOptions(r)},[o,r]);const a=C5(C.useCallback(u=>o.subscribe(Je.batchCalls(u)),[o]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),l=C.useCallback((u,d)=>{o.mutate(u,d).catch(fA)},[o]);if(a.error&&k5(o.options.useErrorBoundary,[a.error]))throw a.error;return{...a,mutate:l,mutateAsync:a.mutate}}function fA(){}const hA=()=>{var b,v,w,x,p,g,$;const[e,t]=C.useState(),[n,r]=C.useState(!0),i=n!==!0,o=nt(),a=Wl({firstName:Ot().required("This field cannot be empty"),lastName:Ot().required("This field cannot be empty"),email:Ot().email("this is not a valid email").required("This field cannot be empty"),phoneNum:Nm().required("This field cannot be empty"),companyName:Ot().required("This field cannot be empty"),password:Ot().required("This field cannot be empty"),confirmPassword:Ot().oneOf([Jw("password"),null],"Password must match")}).required(),{handleSubmit:l,formState:{errors:u},reset:d,register:f}=pf({resolver:gf(a)}),h=$t({mutationKey:["createseler"],mutationFn:lI,onSuccess:S=>{console.log(S),o("/auth/personalinfo")},onError:S=>{alert(S.message)}}),m=l(S=>{h.mutate(S)});return s("div",{children:s(bA,{children:y(xA,{children:[s(vA,{children:"Seller Account"}),s(yA,{children:"Please enter every necessary information"}),y(mA,{onSubmit:m,children:[y(Ei,{children:[s(Ni,{children:"Full Name"}),s(ki,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(bo,{placeholder:"Full Name",...f("firstName")})}),s(_i,{children:(u==null?void 0:u.firstName)&&((b=u==null?void 0:u.firstName)==null?void 0:b.message)})]}),y(Ei,{children:[s(Ni,{children:"Last Name"}),s(ki,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(bo,{placeholder:"Last Name",...f("lastName")})}),s(_i,{children:(u==null?void 0:u.lastName)&&((v=u==null?void 0:u.lastName)==null?void 0:v.message)})]}),y(Ei,{children:[s(Ni,{children:"Email Address"}),s(ki,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(bo,{placeholder:"Email Address",...f("email")})}),s(_i,{children:(u==null?void 0:u.email)&&((w=u==null?void 0:u.email)==null?void 0:w.message)})]}),y(Ei,{children:[s(Ni,{children:"Company Name"}),s(ki,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(bo,{placeholder:"Company Name",...f("companyName")})}),s(_i,{children:(u==null?void 0:u.companyName)&&((x=u==null?void 0:u.companyName)==null?void 0:x.message)})]}),y(Ei,{children:[s(Ni,{children:"Phone Number"}),s(ki,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(ym,{className:"phone",defaultCountry:"NG",...f("phoneNum"),placeholder:"Phone Number",value:e,onChange:t})}),s(_i,{children:(u==null?void 0:u.phoneNum)&&((p=u==null?void 0:u.phoneNum)==null?void 0:p.message)})]}),y(Ei,{children:[s(Ni,{children:"Password"}),y(ki,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:[s(bo,{placeholder:"Password",type:n?"password":"text",id:"pass",...f("password")}),s(Wx,{onClick:()=>{r(i)},children:n===!1?s(ja,{}):s(Ma,{})})]}),s(_i,{children:(u==null?void 0:u.password)&&((g=u==null?void 0:u.password)==null?void 0:g.message)})]}),y(Ei,{children:[s(Ni,{children:"Confirm Password"}),y(ki,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:[s(bo,{placeholder:"Confirm Password",type:n?"password":"text",id:"pass",...f("confirmPassword")}),s(Wx,{onClick:()=>{r(i)},children:n===!1?s(ja,{}):s(Ma,{})})]}),s(_i,{children:(u==null?void 0:u.confirmPassword)&&(($=u==null?void 0:u.confirmPassword)==null?void 0:$.message)})]}),s(gA,{type:"submit",disabled:h.status==="loading",children:h.status==="loading"?"Loading...":"Continue"}),y(pA,{children:["Already have an account?"," ",s(be,{to:"/auth/signin",style:{textDecoration:"none"},children:s("span",{children:"LogIn"})})]})]})]})})})};c.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    width: 90%;

    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`;const pA=c.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,gA=c.button`
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
`,_i=c.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`,Wx=c.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,ki=c.div`
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
`,bo=c.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,Ni=c.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,Ei=c.div`
    margin-bottom: 10px;
`,mA=c.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 370px){
        width: 350px;
    }
`,yA=c.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 250px;
`,vA=c.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
`,xA=c.div`
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
`,bA=c.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,$A=()=>{var h,m;const e=nt(),t=Wl({email:Ot().email("this is not a valid email").required("This field cannot be empty"),password:Ot().required("This field cannot be empty")}).required(),[n,r]=C.useState(!0),i=n!==!0,{handleSubmit:o,formState:{errors:a},reset:l,register:u}=pf({resolver:gf(t)}),d=$t({mutationKey:["seller"],mutationFn:cI,onSuccess:b=>{e("/seller-dashboard")},onError:b=>{console.log(b.message)}}),f=o(b=>{d.mutate(b)});return s("div",{children:s(EA,{children:y(NA,{children:[s(kA,{children:"Seller Account"}),s(_A,{children:"Please enter every necessary information"}),y(OA,{onSubmit:f,children:[y(Qx,{children:[s(Gx,{children:"Email Address"}),s(Vx,{style:{border:`${a!=null&&a.email?"1px solid red":"1px solid lightgray"}`},children:s(qx,{placeholder:"Email Address",type:"email",...u("email")})}),s(Yx,{children:(a==null?void 0:a.email)&&((h=a==null?void 0:a.email)==null?void 0:h.message)})]}),y(Qx,{children:[s(Gx,{children:"Password"}),y(Vx,{style:{border:`${a!=null&&a.password?"1px solid red":"1px solid lightgray"}`},children:[s(qx,{placeholder:"Password",type:n?"password":"text",id:"pass",...u("password")}),s(PA,{onClick:()=>{r(i)},children:n===!1?s(ja,{}):s(Ma,{})})]}),s(Yx,{children:(a==null?void 0:a.password)&&((m=a==null?void 0:a.password)==null?void 0:m.message)})]}),s(wA,{children:"Forget Password?"}),s(CA,{type:"submit",disabled:d.status==="loading",children:d.status==="loading"?"Loading...":"Continue"}),y(SA,{children:["Don't have an account? ",s(be,{to:"/auth",style:{textDecoration:"none"},children:s("span",{children:"Sign Up"})})]})]})]})})})},wA=c.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    width: 360px;
`,SA=c.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,CA=c.button`
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
`,Yx=c.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`,PA=c.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,Vx=c.div`
    width: 350px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
`,qx=c.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,Gx=c.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,Qx=c.div`
    margin-bottom: 10px;
`,OA=c.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,_A=c.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 250px;
`,kA=c.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
`,NA=c.div`
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
    /* border: 1px solid gray; */
`,EA=c.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,IA="/assets/camera-91f8abb7.png",TA=()=>{const e=nt(),[t,n]=C.useState(IA),[r,i]=C.useState(""),[o,a]=C.useState(""),[l,u]=C.useState(""),[d,f]=C.useState(""),h=x=>{const p=x.target.files[0],g=URL.createObjectURL(p);n(g),i(p)},m=x=>{const p=x.target.files[0];f(p)},b=$t({mutationFn:pI,onSuccess:x=>{console.log(x),e("/auth/bankdetails")},onError:x=>{console.log(x.message)}}),v=JSON.parse(localStorage.getItem("user"));return s("div",{children:s(BA,{children:y(UA,{children:[s(zA,{children:"Business Information"}),s(LA,{children:"Enter every necessary details to create your own seller account"}),y(jA,{onSubmit:x=>{x.preventDefault();const p=v._id,g=new FormData;g.append("IDtype",l),g.append("CACNumber",o),g.append("avatar",r),g.append("avatar",d),b.mutate({id:p,formData:g})},type:"multipart/form-data",children:[y(Lh,{children:[s(jh,{children:"Business owner or legal representative ID type"}),s(Mh,{children:y(AA,{value:l,onChange:x=>{u(x.target.value)},children:[s("option",{children:"Select ID type"}),s("option",{children:"NIN"}),s("option",{children:"BVN"})]})})]}),y(Lh,{children:[s(jh,{children:"Upload a copy of your valid ID card"}),s(Mh,{children:s(Kx,{type:"file",id:"pass",onChange:m})})]}),y(Lh,{children:[s(jh,{children:"CAC Registration Number"}),s(Mh,{children:s(Kx,{placeholder:"NIN OR BVN",type:"number",value:o,onChange:x=>{a(x.target.value)}})})]}),y(DA,{children:[s(RA,{type:"file",onChange:h}),s(FA,{src:t})]}),s(MA,{type:"submit",disabled:b.status==="loading",children:b.status==="loading"?"Loading...":"Continue"})]})]})})})},AA=c.select`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
`,RA=c.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    /* opacity: 0px; */
    display: none;
`,FA=c.img`
    
    /* background-color: gold; */
    width: 80%;
    height: 70%;
    border-radius: 5px;
`,DA=c.label`
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
`,MA=c.button`
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
`;c.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`;const Mh=c.div`
    width: 350px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
`,Kx=c.input`
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
`,jh=c.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,Lh=c.div`
    margin-bottom: 10px;
`,jA=c.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,LA=c.div`
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    width: 300px;
    margin-bottom: 20px;

`,zA=c.div`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
`,UA=c.div`
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
    /* border: 1px solid gray; */
`,BA=c.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;function HA(e){return Pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"}}]})(e)}function WA(e){return Pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}}]})(e)}function YA(e){return Pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"}},{tag:"path",attr:{d:"M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"}}]})(e)}function VA(e){return Pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}}]})(e)}var H1={},qA={get exports(){return H1},set exports(e){H1=e}},N5={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf=C,GA=fc;function QA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var KA=typeof Object.is=="function"?Object.is:QA,ZA=GA.useSyncExternalStore,JA=yf.useRef,XA=yf.useEffect,eR=yf.useMemo,tR=yf.useDebugValue;N5.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=JA(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=eR(function(){function u(b){if(!d){if(d=!0,f=b,b=r(b),i!==void 0&&a.hasValue){var v=a.value;if(i(v,b))return h=v}return h=b}if(v=h,KA(f,b))return v;var w=r(b);return i!==void 0&&i(v,w)?v:(f=b,h=w)}var d=!1,f,h,m=n===void 0?null:n;return[function(){return u(t())},m===null?void 0:function(){return u(m())}]},[t,n,r,i]);var l=ZA(e,o[0],o[1]);return XA(function(){a.hasValue=!0,a.value=l},[l]),tR(l),l};(function(e){e.exports=N5})(qA);function nR(e){e()}let E5=nR;const rR=e=>E5=e,iR=()=>E5,vi=C.createContext(null);function I5(){return C.useContext(vi)}const oR=()=>{throw new Error("uSES not initialized!")};let T5=oR;const aR=e=>{T5=e},sR=(e,t)=>e===t;function lR(e=vi){const t=e===vi?I5:()=>C.useContext(e);return function(r,i=sR){const{store:o,subscription:a,getServerState:l}=t(),u=T5(a.addNestedSub,o.getState,l||o.getState,r,i);return C.useDebugValue(u),u}}const xi=lR();var Zx={},uR={get exports(){return Zx},set exports(e){Zx=e}},Te={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm=Symbol.for("react.element"),jm=Symbol.for("react.portal"),vf=Symbol.for("react.fragment"),xf=Symbol.for("react.strict_mode"),bf=Symbol.for("react.profiler"),$f=Symbol.for("react.provider"),wf=Symbol.for("react.context"),dR=Symbol.for("react.server_context"),Sf=Symbol.for("react.forward_ref"),Cf=Symbol.for("react.suspense"),Pf=Symbol.for("react.suspense_list"),Of=Symbol.for("react.memo"),_f=Symbol.for("react.lazy"),cR=Symbol.for("react.offscreen"),A5;A5=Symbol.for("react.module.reference");function vn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Mm:switch(e=e.type,e){case vf:case bf:case xf:case Cf:case Pf:return e;default:switch(e=e&&e.$$typeof,e){case dR:case wf:case Sf:case _f:case Of:case $f:return e;default:return t}}case jm:return t}}}Te.ContextConsumer=wf;Te.ContextProvider=$f;Te.Element=Mm;Te.ForwardRef=Sf;Te.Fragment=vf;Te.Lazy=_f;Te.Memo=Of;Te.Portal=jm;Te.Profiler=bf;Te.StrictMode=xf;Te.Suspense=Cf;Te.SuspenseList=Pf;Te.isAsyncMode=function(){return!1};Te.isConcurrentMode=function(){return!1};Te.isContextConsumer=function(e){return vn(e)===wf};Te.isContextProvider=function(e){return vn(e)===$f};Te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mm};Te.isForwardRef=function(e){return vn(e)===Sf};Te.isFragment=function(e){return vn(e)===vf};Te.isLazy=function(e){return vn(e)===_f};Te.isMemo=function(e){return vn(e)===Of};Te.isPortal=function(e){return vn(e)===jm};Te.isProfiler=function(e){return vn(e)===bf};Te.isStrictMode=function(e){return vn(e)===xf};Te.isSuspense=function(e){return vn(e)===Cf};Te.isSuspenseList=function(e){return vn(e)===Pf};Te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===vf||e===bf||e===xf||e===Cf||e===Pf||e===cR||typeof e=="object"&&e!==null&&(e.$$typeof===_f||e.$$typeof===Of||e.$$typeof===$f||e.$$typeof===wf||e.$$typeof===Sf||e.$$typeof===A5||e.getModuleId!==void 0)};Te.typeOf=vn;(function(e){e.exports=Te})(uR);function fR(){const e=iR();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const Jx={notify(){},get:()=>[]};function hR(e,t){let n,r=Jx;function i(h){return u(),r.subscribe(h)}function o(){r.notify()}function a(){f.onStateChange&&f.onStateChange()}function l(){return!!n}function u(){n||(n=t?t.addNestedSub(a):e.subscribe(a),r=fR())}function d(){n&&(n(),n=void 0,r.clear(),r=Jx)}const f={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:a,isSubscribed:l,trySubscribe:u,tryUnsubscribe:d,getListeners:()=>r};return f}const pR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gR=pR?C.useLayoutEffect:C.useEffect;function mR({store:e,context:t,children:n,serverState:r}){const i=C.useMemo(()=>{const l=hR(e);return{store:e,subscription:l,getServerState:r?()=>r:void 0}},[e,r]),o=C.useMemo(()=>e.getState(),[e]);gR(()=>{const{subscription:l}=i;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),o!==e.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[i,o]);const a=t||vi;return ne.createElement(a.Provider,{value:i},n)}function R5(e=vi){const t=e===vi?I5:()=>C.useContext(e);return function(){const{store:r}=t();return r}}const yR=R5();function vR(e=vi){const t=e===vi?yR:R5(e);return function(){return t().dispatch}}const Za=vR();aR(H1.useSyncExternalStoreWithSelector);rR(vd.unstable_batchedUpdates);function Tn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function bi(e){return!!e&&!!e[We]}function kr(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===_R}(e)||Array.isArray(e)||!!e[o3]||!!(!((t=e.constructor)===null||t===void 0)&&t[o3])||Lm(e)||zm(e))}function so(e,t,n){n===void 0&&(n=!1),Ja(e)===0?(n?Object.keys:Sa)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Ja(e){var t=e[We];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Lm(e)?2:zm(e)?3:0}function wa(e,t){return Ja(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function xR(e,t){return Ja(e)===2?e.get(t):e[t]}function F5(e,t,n){var r=Ja(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function D5(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Lm(e){return PR&&e instanceof Map}function zm(e){return OR&&e instanceof Set}function Wi(e){return e.o||e.t}function Um(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=j5(e);delete t[We];for(var n=Sa(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Bm(e,t){return t===void 0&&(t=!1),Hm(e)||bi(e)||!kr(e)||(Ja(e)>1&&(e.set=e.add=e.clear=e.delete=bR),Object.freeze(e),t&&so(e,function(n,r){return Bm(r,!0)},!0)),e}function bR(){Tn(2)}function Hm(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Xn(e){var t=q1[e];return t||Tn(18,e),t}function $R(e,t){q1[e]||(q1[e]=t)}function W1(){return vl}function zh(e,t){t&&(Xn("Patches"),e.u=[],e.s=[],e.v=t)}function hc(e){Y1(e),e.p.forEach(wR),e.p=null}function Y1(e){e===vl&&(vl=e.l)}function Xx(e){return vl={p:[],l:vl,h:e,m:!0,_:0}}function wR(e){var t=e[We];t.i===0||t.i===1?t.j():t.g=!0}function Uh(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||Xn("ES5").S(t,e,r),r?(n[We].P&&(hc(t),Tn(4)),kr(e)&&(e=pc(t,e),t.l||gc(t,e)),t.u&&Xn("Patches").M(n[We].t,e,t.u,t.s)):e=pc(t,n,[]),hc(t),t.u&&t.v(t.u,t.s),e!==M5?e:void 0}function pc(e,t,n){if(Hm(t))return t;var r=t[We];if(!r)return so(t,function(l,u){return e3(e,r,t,l,u,n)},!0),t;if(r.A!==e)return t;if(!r.P)return gc(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Um(r.k):r.o,o=i,a=!1;r.i===3&&(o=new Set(i),i.clear(),a=!0),so(o,function(l,u){return e3(e,r,i,l,u,n,a)}),gc(e,i,!1),n&&e.u&&Xn("Patches").N(r,n,e.u,e.s)}return r.o}function e3(e,t,n,r,i,o,a){if(bi(i)){var l=pc(e,i,o&&t&&t.i!==3&&!wa(t.R,r)?o.concat(r):void 0);if(F5(n,r,l),!bi(l))return;e.m=!1}else a&&n.add(i);if(kr(i)&&!Hm(i)){if(!e.h.D&&e._<1)return;pc(e,i),t&&t.A.l||gc(e,i)}}function gc(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Bm(t,n)}function Bh(e,t){var n=e[We];return(n?Wi(n):e)[t]}function t3(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function qr(e){e.P||(e.P=!0,e.l&&qr(e.l))}function Hh(e){e.o||(e.o=Um(e.t))}function V1(e,t,n){var r=Lm(t)?Xn("MapSet").F(t,n):zm(t)?Xn("MapSet").T(t,n):e.O?function(i,o){var a=Array.isArray(i),l={i:a?1:0,A:o?o.A:W1(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},u=l,d=xl;a&&(u=[l],d=Ts);var f=Proxy.revocable(u,d),h=f.revoke,m=f.proxy;return l.k=m,l.j=h,m}(t,n):Xn("ES5").J(t,n);return(n?n.A:W1()).p.push(r),r}function SR(e){return bi(e)||Tn(22,e),function t(n){if(!kr(n))return n;var r,i=n[We],o=Ja(n);if(i){if(!i.P&&(i.i<4||!Xn("ES5").K(i)))return i.t;i.I=!0,r=n3(n,o),i.I=!1}else r=n3(n,o);return so(r,function(a,l){i&&xR(i.t,a)===l||F5(r,a,t(l))}),o===3?new Set(r):r}(e)}function n3(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Um(e)}function CR(){function e(o,a){var l=i[o];return l?l.enumerable=a:i[o]=l={configurable:!0,enumerable:a,get:function(){var u=this[We];return xl.get(u,o)},set:function(u){var d=this[We];xl.set(d,o,u)}},l}function t(o){for(var a=o.length-1;a>=0;a--){var l=o[a][We];if(!l.P)switch(l.i){case 5:r(l)&&qr(l);break;case 4:n(l)&&qr(l)}}}function n(o){for(var a=o.t,l=o.k,u=Sa(l),d=u.length-1;d>=0;d--){var f=u[d];if(f!==We){var h=a[f];if(h===void 0&&!wa(a,f))return!0;var m=l[f],b=m&&m[We];if(b?b.t!==h:!D5(m,h))return!0}}var v=!!a[We];return u.length!==Sa(a).length+(v?0:1)}function r(o){var a=o.k;if(a.length!==o.t.length)return!0;var l=Object.getOwnPropertyDescriptor(a,a.length-1);if(l&&!l.get)return!0;for(var u=0;u<a.length;u++)if(!a.hasOwnProperty(u))return!0;return!1}var i={};$R("ES5",{J:function(o,a){var l=Array.isArray(o),u=function(f,h){if(f){for(var m=Array(h.length),b=0;b<h.length;b++)Object.defineProperty(m,""+b,e(b,!0));return m}var v=j5(h);delete v[We];for(var w=Sa(v),x=0;x<w.length;x++){var p=w[x];v[p]=e(p,f||!!v[p].enumerable)}return Object.create(Object.getPrototypeOf(h),v)}(l,o),d={i:l?5:4,A:a?a.A:W1(),P:!1,I:!1,R:{},l:a,t:o,k:u,o:null,g:!1,C:!1};return Object.defineProperty(u,We,{value:d,writable:!0}),u},S:function(o,a,l){l?bi(a)&&a[We].A===o&&t(o.p):(o.u&&function u(d){if(d&&typeof d=="object"){var f=d[We];if(f){var h=f.t,m=f.k,b=f.R,v=f.i;if(v===4)so(m,function($){$!==We&&(h[$]!==void 0||wa(h,$)?b[$]||u(m[$]):(b[$]=!0,qr(f)))}),so(h,function($){m[$]!==void 0||wa(m,$)||(b[$]=!1,qr(f))});else if(v===5){if(r(f)&&(qr(f),b.length=!0),m.length<h.length)for(var w=m.length;w<h.length;w++)b[w]=!1;else for(var x=h.length;x<m.length;x++)b[x]=!0;for(var p=Math.min(m.length,h.length),g=0;g<p;g++)m.hasOwnProperty(g)||(b[g]=!0),b[g]===void 0&&u(m[g])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var r3,vl,Wm=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",PR=typeof Map<"u",OR=typeof Set<"u",i3=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",M5=Wm?Symbol.for("immer-nothing"):((r3={})["immer-nothing"]=!0,r3),o3=Wm?Symbol.for("immer-draftable"):"__$immer_draftable",We=Wm?Symbol.for("immer-state"):"__$immer_state",_R=""+Object.prototype.constructor,Sa=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,j5=Object.getOwnPropertyDescriptors||function(e){var t={};return Sa(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},q1={},xl={get:function(e,t){if(t===We)return e;var n=Wi(e);if(!wa(n,t))return function(i,o,a){var l,u=t3(o,a);return u?"value"in u?u.value:(l=u.get)===null||l===void 0?void 0:l.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!kr(r)?r:r===Bh(e.t,t)?(Hh(e),e.o[t]=V1(e.A.h,r,e)):r},has:function(e,t){return t in Wi(e)},ownKeys:function(e){return Reflect.ownKeys(Wi(e))},set:function(e,t,n){var r=t3(Wi(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Bh(Wi(e),t),o=i==null?void 0:i[We];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(D5(n,i)&&(n!==void 0||wa(e.t,t)))return!0;Hh(e),qr(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Bh(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Hh(e),qr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Wi(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Tn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Tn(12)}},Ts={};so(xl,function(e,t){Ts[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Ts.deleteProperty=function(e,t){return Ts.set.call(this,e,t,void 0)},Ts.set=function(e,t,n){return xl.set.call(this,e[0],t,n,e[0])};var kR=function(){function e(n){var r=this;this.O=i3,this.D=!0,this.produce=function(i,o,a){if(typeof i=="function"&&typeof o!="function"){var l=o;o=i;var u=r;return function(w){var x=this;w===void 0&&(w=l);for(var p=arguments.length,g=Array(p>1?p-1:0),$=1;$<p;$++)g[$-1]=arguments[$];return u.produce(w,function(S){var P;return(P=o).call.apply(P,[x,S].concat(g))})}}var d;if(typeof o!="function"&&Tn(6),a!==void 0&&typeof a!="function"&&Tn(7),kr(i)){var f=Xx(r),h=V1(r,i,void 0),m=!0;try{d=o(h),m=!1}finally{m?hc(f):Y1(f)}return typeof Promise<"u"&&d instanceof Promise?d.then(function(w){return zh(f,a),Uh(w,f)},function(w){throw hc(f),w}):(zh(f,a),Uh(d,f))}if(!i||typeof i!="object"){if((d=o(i))===void 0&&(d=i),d===M5&&(d=void 0),r.D&&Bm(d,!0),a){var b=[],v=[];Xn("Patches").M(i,d,b,v),a(b,v)}return d}Tn(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(d){for(var f=arguments.length,h=Array(f>1?f-1:0),m=1;m<f;m++)h[m-1]=arguments[m];return r.produceWithPatches(d,function(b){return i.apply(void 0,[b].concat(h))})};var a,l,u=r.produce(i,o,function(d,f){a=d,l=f});return typeof Promise<"u"&&u instanceof Promise?u.then(function(d){return[d,a,l]}):[u,a,l]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){kr(n)||Tn(8),bi(n)&&(n=SR(n));var r=Xx(this),i=V1(this,n,void 0);return i[We].C=!0,Y1(r),i},t.finishDraft=function(n,r){var i=n&&n[We],o=i.A;return zh(o,r),Uh(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!i3&&Tn(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var a=Xn("Patches").$;return bi(n)?a(n,r):this.produce(n,function(l){return a(l,r)})},e}(),Zt=new kR,L5=Zt.produce;Zt.produceWithPatches.bind(Zt);Zt.setAutoFreeze.bind(Zt);Zt.setUseProxies.bind(Zt);Zt.applyPatches.bind(Zt);Zt.createDraft.bind(Zt);Zt.finishDraft.bind(Zt);function bl(e){return bl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bl(e)}function NR(e,t){if(bl(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(bl(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ER(e){var t=NR(e,"string");return bl(t)==="symbol"?t:String(t)}function IR(e,t,n){return t=ER(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function s3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?a3(Object(n),!0).forEach(function(r){IR(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ct(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var l3=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Wh=function(){return Math.random().toString(36).substring(7).split("").join(".")},mc={INIT:"@@redux/INIT"+Wh(),REPLACE:"@@redux/REPLACE"+Wh(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Wh()}};function TR(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Ym(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ct(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ct(1));return n(Ym)(e,t)}if(typeof e!="function")throw new Error(Ct(2));var i=e,o=t,a=[],l=a,u=!1;function d(){l===a&&(l=a.slice())}function f(){if(u)throw new Error(Ct(3));return o}function h(w){if(typeof w!="function")throw new Error(Ct(4));if(u)throw new Error(Ct(5));var x=!0;return d(),l.push(w),function(){if(x){if(u)throw new Error(Ct(6));x=!1,d();var g=l.indexOf(w);l.splice(g,1),a=null}}}function m(w){if(!TR(w))throw new Error(Ct(7));if(typeof w.type>"u")throw new Error(Ct(8));if(u)throw new Error(Ct(9));try{u=!0,o=i(o,w)}finally{u=!1}for(var x=a=l,p=0;p<x.length;p++){var g=x[p];g()}return w}function b(w){if(typeof w!="function")throw new Error(Ct(10));i=w,m({type:mc.REPLACE})}function v(){var w,x=h;return w={subscribe:function(g){if(typeof g!="object"||g===null)throw new Error(Ct(11));function $(){g.next&&g.next(f())}$();var S=x($);return{unsubscribe:S}}},w[l3]=function(){return this},w}return m({type:mc.INIT}),r={dispatch:m,subscribe:h,getState:f,replaceReducer:b},r[l3]=v,r}function AR(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:mc.INIT});if(typeof r>"u")throw new Error(Ct(12));if(typeof n(void 0,{type:mc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ct(13))})}function RR(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),a;try{AR(n)}catch(l){a=l}return function(u,d){if(u===void 0&&(u={}),a)throw a;for(var f=!1,h={},m=0;m<o.length;m++){var b=o[m],v=n[b],w=u[b],x=v(w,d);if(typeof x>"u")throw d&&d.type,new Error(Ct(14));h[b]=x,f=f||x!==w}return f=f||o.length!==Object.keys(u).length,f?h:u}}function yc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function FR(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(Ct(15))},a={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},l=t.map(function(u){return u(a)});return o=yc.apply(void 0,l)(i.dispatch),s3(s3({},i),{},{dispatch:o})}}}function z5(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(a){return function(l){return typeof l=="function"?l(i,o,e):a(l)}}};return t}var U5=z5();U5.withExtraArgument=z5;const u3=U5;var B5=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),DR=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(d){return function(f){return u([d,f])}}function u(d){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=d[0]&2?i.return:d[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,d[1])).done)return o;switch(i=0,o&&(d=[d[0]&2,o.value]),d[0]){case 0:case 1:o=d;break;case 4:return n.label++,{value:d[1],done:!1};case 5:n.label++,i=d[1],d=[0];continue;case 7:d=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(d[0]===6||d[0]===2)){n=0;continue}if(d[0]===3&&(!o||d[1]>o[0]&&d[1]<o[3])){n.label=d[1];break}if(d[0]===6&&n.label<o[1]){n.label=o[1],o=d;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(d);break}o[2]&&n.ops.pop(),n.trys.pop();continue}d=t.call(e,n)}catch(f){d=[6,f],i=0}finally{r=o=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}},Ua=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},MR=Object.defineProperty,jR=Object.defineProperties,LR=Object.getOwnPropertyDescriptors,d3=Object.getOwnPropertySymbols,zR=Object.prototype.hasOwnProperty,UR=Object.prototype.propertyIsEnumerable,c3=function(e,t,n){return t in e?MR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},fi=function(e,t){for(var n in t||(t={}))zR.call(t,n)&&c3(e,n,t[n]);if(d3)for(var r=0,i=d3(t);r<i.length;r++){var n=i[r];UR.call(t,n)&&c3(e,n,t[n])}return e},Yh=function(e,t){return jR(e,LR(t))},BR=function(e,t,n){return new Promise(function(r,i){var o=function(u){try{l(n.next(u))}catch(d){i(d)}},a=function(u){try{l(n.throw(u))}catch(d){i(d)}},l=function(u){return u.done?r(u.value):Promise.resolve(u.value).then(o,a)};l((n=n.apply(e,t)).next())})},HR=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?yc:yc.apply(null,arguments)};function WR(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var YR=function(e){B5(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Ua([void 0],n[0].concat(this)))):new(t.bind.apply(t,Ua([void 0],n.concat(this))))},t}(Array),VR=function(e){B5(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Ua([void 0],n[0].concat(this)))):new(t.bind.apply(t,Ua([void 0],n.concat(this))))},t}(Array);function G1(e){return kr(e)?L5(e,function(){}):e}function qR(e){return typeof e=="boolean"}function GR(){return function(t){return QR(t)}}function QR(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new YR;return n&&(qR(n)?r.push(u3):r.push(u3.withExtraArgument(n.extraArgument))),r}var KR=!0;function ZR(e){var t=GR(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,a=o===void 0?t():o,l=n.devTools,u=l===void 0?!0:l,d=n.preloadedState,f=d===void 0?void 0:d,h=n.enhancers,m=h===void 0?void 0:h,b;if(typeof i=="function")b=i;else if(WR(i))b=RR(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=a;typeof v=="function"&&(v=v(t));var w=FR.apply(void 0,v),x=yc;u&&(x=HR(fi({trace:!KR},typeof u=="object"&&u)));var p=new VR(w),g=p;Array.isArray(m)?g=Ua([w],m):typeof m=="function"&&(g=m(p));var $=x.apply(void 0,g);return Ym(b,f,$)}function hi(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return fi(fi({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function H5(e){var t={},n=[],r,i={addCase:function(o,a){var l=typeof o=="string"?o:o.type;if(l in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[l]=a,i},addMatcher:function(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function JR(e){return typeof e=="function"}function XR(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?H5(t):[t,n,r],o=i[0],a=i[1],l=i[2],u;if(JR(e))u=function(){return G1(e())};else{var d=G1(e);u=function(){return d}}function f(h,m){h===void 0&&(h=u());var b=Ua([o[m.type]],a.filter(function(v){var w=v.matcher;return w(m)}).map(function(v){var w=v.reducer;return w}));return b.filter(function(v){return!!v}).length===0&&(b=[l]),b.reduce(function(v,w){if(w)if(bi(v)){var x=v,p=w(x,m);return p===void 0?v:p}else{if(kr(v))return L5(v,function(g){return w(g,m)});var p=w(v,m);if(p===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}return v},h)}return f.getInitialState=u,f}function eF(e,t){return e+"/"+t}function tF(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:G1(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},a={},l={};i.forEach(function(f){var h=r[f],m=eF(t,f),b,v;"reducer"in h?(b=h.reducer,v=h.prepare):b=h,o[f]=b,a[m]=b,l[f]=v?hi(m,v):hi(m)});function u(){var f=typeof e.extraReducers=="function"?H5(e.extraReducers):[e.extraReducers],h=f[0],m=h===void 0?{}:h,b=f[1],v=b===void 0?[]:b,w=f[2],x=w===void 0?void 0:w,p=fi(fi({},m),a);return XR(n,function(g){for(var $ in p)g.addCase($,p[$]);for(var S=0,P=v;S<P.length;S++){var N=P[S];g.addMatcher(N.matcher,N.reducer)}x&&g.addDefaultCase(x)})}var d;return{name:t,reducer:function(f,h){return d||(d=u()),d(f,h)},actions:l,caseReducers:o,getInitialState:function(){return d||(d=u()),d.getInitialState()}}}var nF="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",rF=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=nF[Math.random()*64|0];return t},iF=["name","message","stack","code"],Vh=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),f3=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),oF=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=iF;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=hi(t+"/fulfilled",function(d,f,h,m){return{payload:d,meta:Yh(fi({},m||{}),{arg:h,requestId:f,requestStatus:"fulfilled"})}}),o=hi(t+"/pending",function(d,f,h){return{payload:void 0,meta:Yh(fi({},h||{}),{arg:f,requestId:d,requestStatus:"pending"})}}),a=hi(t+"/rejected",function(d,f,h,m,b){return{payload:m,error:(r&&r.serializeError||oF)(d||"Rejected"),meta:Yh(fi({},b||{}),{arg:h,requestId:f,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(d==null?void 0:d.name)==="AbortError",condition:(d==null?void 0:d.name)==="ConditionError"})}}),l=typeof AbortController<"u"?AbortController:function(){function d(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return d.prototype.abort=function(){},d}();function u(d){return function(f,h,m){var b=r!=null&&r.idGenerator?r.idGenerator(d):rF(),v=new l,w;function x(g){w=g,v.abort()}var p=function(){return BR(this,null,function(){var g,$,S,P,N,T,R;return DR(this,function(W){switch(W.label){case 0:return W.trys.push([0,4,,5]),P=(g=r==null?void 0:r.condition)==null?void 0:g.call(r,d,{getState:h,extra:m}),sF(P)?[4,P]:[3,2];case 1:P=W.sent(),W.label=2;case 2:if(P===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return N=new Promise(function(L,se){return v.signal.addEventListener("abort",function(){return se({name:"AbortError",message:w||"Aborted"})})}),f(o(b,d,($=r==null?void 0:r.getPendingMeta)==null?void 0:$.call(r,{requestId:b,arg:d},{getState:h,extra:m}))),[4,Promise.race([N,Promise.resolve(n(d,{dispatch:f,getState:h,extra:m,requestId:b,signal:v.signal,abort:x,rejectWithValue:function(L,se){return new Vh(L,se)},fulfillWithValue:function(L,se){return new f3(L,se)}})).then(function(L){if(L instanceof Vh)throw L;return L instanceof f3?i(L.payload,b,d,L.meta):i(L,b,d)})])];case 3:return S=W.sent(),[3,5];case 4:return T=W.sent(),S=T instanceof Vh?a(null,b,d,T.payload,T.meta):a(T,b,d),[3,5];case 5:return R=r&&!r.dispatchConditionRejection&&a.match(S)&&S.meta.condition,R||f(S),[2,S]}})})}();return Object.assign(p,{abort:x,requestId:b,arg:d,unwrap:function(){return p.then(aF)}})}}return Object.assign(u,{pending:o,rejected:a,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function aF(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function sF(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Vm="listenerMiddleware";hi(Vm+"/add");hi(Vm+"/removeAll");hi(Vm+"/remove");var h3;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);CR();const lF={user:null,product:[],cartItem:[],qty:0,totalPrice:0},W5=tF({name:"userAuth",initialState:lF,reducers:{addProduct:(e,{payload:t})=>{e.product=t},addToCart:(e,{payload:t})=>{const n=e.cartItem.findIndex(r=>r._id===t._id);n>=0?e.cartItem[n].qty+=1:e.cartItem.push({...t,qty:1}),e.qty+=1,e.totalPrice+=t.qty*t.price},removeCart:(e,{payload:t})=>{const n=e.cartItem.findIndex(r=>r._id===t._id);e.cartItem[n].qty>1?e.cartItem[n].qty-=1:e.cartItem=e.cartItem.filter(r=>r._id!==t._id),e.qty-=1,e.totalPrice-=t.price},removeFromCart:(e,{payload:t})=>{e.cartItem=e.cartItem.filter(n=>n._id!==t._id)},removeAllCart:e=>{e.cartItem=[],e.qty=0},total:(e,{payload:t})=>{const{totalCost:n,totalItems:r}=e.cart.reduce((i,o)=>{const{price:a,QTY:l}=o,u=a*l;return i.totalItems+=l,i.totalCost+=u,i},{totalCost:0,totalItems:0});e.MyTotalQTY=r,e.MyTotalCost=n},signOut:e=>{e.user=null}}}),{signOut:SQ,addProduct:CQ,addToCart:lo,removeCart:kf,removeAllCart:uF,removeFromCart:dF}=W5.actions,cF=W5.reducer,fF=({id:e,avatar:t,data:n,qty:r})=>{const i=xi(l=>l.reducers.cartItem),o=i==null?void 0:i.find(l=>(l==null?void 0:l._id)===e),a=Za();return s(EF,{children:s(kF,{children:y(NF,{children:[s(hF,{children:t==null?void 0:t.map((l,u)=>s(OF,{children:s(PF,{children:s("img",{src:l.url})})},u))}),y(_F,{children:[y(CF,{children:[y(SF,{children:[s($F,{children:s("span",{children:"Select Country"})}),y(wF,{children:[" ",s("div",{children:s(MS,{})}),s("span",{children:s(cn,{})})]})]}),y(Zh,{children:[s(Qh,{children:s("div",{children:s(HA,{})})}),y(Kh,{children:[s(Gh,{children:"Door Delivery"}),y(qh,{children:["Every Delivery will be at",s("br",{})," your preferred location,",s("br",{})," after 15days of ordering."]})]})]}),y(Zh,{children:[s(Qh,{children:s("div",{children:s(VA,{})})}),y(Kh,{children:[s(Gh,{children:"Minimum order"}),y(qh,{children:["#50,000 worth of item",s("br",{}),"is the minimum"]})]})]}),y(Zh,{children:[s(Qh,{children:s("div",{children:s(YA,{})})}),y(Kh,{children:[s(Gh,{children:"Payment Method"}),y(qh,{children:["All Items will be delivered",s("br",{})," after Payment"]})]})]})]}),y(bF,{children:[s(yF,{children:"Quantity"}),(o==null?void 0:o.qty)>=1?y(vF,{children:[s(pF,{onClick:()=>a(lo(n)),children:"+"}),s(gF,{children:o==null?void 0:o.qty}),s(mF,{disabled:(o==null?void 0:o.qty)<=0,onClick:()=>a(kf(n)),children:"-"})]}):s(xF,{children:s("button",{onClick:()=>a(lo(n)),children:"Add To Cart"})})]})]})]})})})},hF=c.div`

  @media (max-width: 1076px){
    display: flex;
    overflow-x: auto;
  }
`,pF=c.button`
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
`,gF=c.div`
  width: 70px;
  height: 70px;
  border: 1.6px solid grey;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  
`,mF=c.button`
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

`,yF=c.div`
  font-size: 22px;
  font-weight: 700;
  font-family: poppins;
`,vF=c.div`
  width: 70%;
  height: 125px;
  display: flex;
  cursor: pointer;

  align-items: center;
  justify-content: space-between;
`,xF=c.div`
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
`,bF=c.div`
  width: 100%;
  height: 195px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1100px) {
    align-items: center;
  }
`,$F=c.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  span {
    font-size: 22px;
    font-weight: 700;
    font-family: poppins;
  }
`,wF=c.div`
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
`,qh=c.div`
  font-size: 15px;
  font-weight: 500;
  font-family: poppins;
`,Gh=c.div`
  font-size: 25px;
  margin-bottom: 15px;
  font-weight: 500;
  font-family: poppins;
`,Qh=c.div`
  width: 100px;
  border-radius: 5px;
  div {
    font-size: 62px;
  }
`,Kh=c.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`,SF=c.div`
  width: 90%;
  height: 70px;
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`,Zh=c.div`
  width: 90%;
  height: 120px;
  border-bottom: 1.5px solid grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`,CF=c.div`
  border: 1.8px solid black;
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
`;c.div`
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
`;const PF=c.div`
  width: 450px;
  height: 330px;
  /* background-color: brown; */
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
`,OF=c.div`
  width: 450px;
  /* flex: 1; */
  padding: 50px 0;
`,_F=c.div`
  width: 550px;
  /* flex: 1; */
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 50px 0;
`,kF=c.div`
  width: 95%;
  /* height: 95%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;c.div`
  width: 100%;
  height: 120px;
  border: 2px solid black;
`;const NF=c.div`
  width: 100%;
  flex-wrap: wrap;
  /* height: 970px; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    justify-content: center;
  }
`,EF=c.div`
  width: 100%;
  /* height: 100vh; */
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
`,IF=({description:e})=>s(DF,{children:s(FF,{children:y(TF,{children:[s(AF,{children:"Product Details"}),s(RF,{children:e})]})})});c.div`
  width: 300px;
  height: 300px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;c.div`
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
`;c.div`
  font-size: 13px;
  font-weight: 500;
  span {
    margin-left: 10px;
    position: relative;
    bottom: -2px;
    color: #d975c0;
  }
`;c.div`
  font-size: 13px;
  font-weight: 500;
`;c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;c.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`;const TF=c.div`
  width: 94%;
  border: 1.8px solid black;
  border-radius: 3px;
  padding: 0 30px;
`,AF=c.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`,RF=c.div`
  font-size: 16px;
  font-weight: 400;
  margin: 10px 0;
`;c.div`
  width: 94%;
  /* height: 350px; */

  border: 1.8px solid black;
  padding: 0 30px;
  border-radius: 3px;
`;c.div`
  font-size: 22px;
  font-weight: 700;
  font-family: poppins;
`;const FF=c.div`
  width: 95%;
  /* height: 595px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`,DF=c.div`
  width: 100%;
  /* height: 100vh; */
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
`,MF=({name:e,price:t})=>s(BF,{children:y(HF,{children:[y(jF,{children:[y(p3,{children:[s("span",{children:"Home"}),s("div",{children:s(V2,{})})]}),y(p3,{children:[s("span",{children:"All Items"})," ",s("div",{children:s(V2,{})})]})]}),s(LF,{children:e}),s(zF,{}),y(UF,{children:["₦",t]})]})}),jF=c.div`
  display: flex;
  width: 122px;
  align-items: center;
  justify-content: space-between;
`,p3=c.div`
  display: flex;
  span {
    font-size: 13px;
    font-weight: 500;
    margin-top: 10px;
  }

  div {
    margin-top: 10px;
  }
`,LF=c.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
`,zF=c.div``,UF=c.div`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0;
`,BF=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`,HF=c.div`
  width: 93.5%;
  border: 1.8px solid black;
  padding: 0 10px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`,WF=({id:e,index:t,name:n,price:r,img:i,data:o})=>{const a=xi(d=>d.reducers.cartItem),l=a==null?void 0:a.find(d=>(d==null?void 0:d._id)===e),u=Za();return s(_a,{children:y(JF,{children:[s(g3,{to:`/detail/${e}`,children:s(QF,{children:s("img",{src:i})})}),y(YF,{children:[y(g3,{to:`/detail/${e}`,children:[s(KF,{children:n}),y(ZF,{children:["₦",r]})]}),s(GF,{children:(l==null?void 0:l.qty)>=1?y(VF,{children:[s(m3,{onClick:()=>u(lo(o)),children:"+"}),s("span",{children:l==null?void 0:l.qty}),s(m3,{onClick:()=>u(kf(o)),children:"-"})]}):s(qF,{onClick:()=>u(lo(o)),children:"ADD TO CART"})})]})]},t)})},g3=c(be)`
  text-decoration: none;
  color: black;
`,YF=c.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  @media (max-width: 730px){
    width: 200px;
  }
  @media (max-width: 550px){
    width: 170px;
  }
  @media (max-width: 440px){
    width: 150px;
  }
  @media (max-width: 417px){
    width: 130px;
  }
  @media (max-width: 380px){
    width: 120px;
  }
  @media (max-width: 314px){
    width: 100px;
  }
`,VF=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,m3=c.button`
  padding: 13px 20px;
  border: 0px;
  border-radius: 2px;
  outline: none;

  background-color: #d975c0;
  color: white;
  cursor: pointer
`,qF=c.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  font-weight: 800;
  outline: none;
  border: 0px;
  background-color: #d975c0;
  color: white;
  cursor: pointer;
  @media (max-width: 370px){
    font-size: 12px;
  }
`,GF=c.div`
  /* display: none; */
  margin-bottom: 10px;
`,QF=c.div`
  /* background-color: #cdc8c8; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  width: 270px;
  height: 230px;
  margin: 5px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  @media (max-width: 730px){
    width: 200px;
    height: 200px;
  }
  @media (max-width: 550px){
    width: 170px;
    height: 220px;
  }
  @media (max-width: 440px){
    width: 150px;
    height: 220px;
  }
  @media (max-width: 417px){
    width: 130px;
    height: 200px;
  }
  @media (max-width: 380px){
    width: 120px;
    height: 200px;
  }
  @media (max-width: 350px){
    width: 110px;
    height: 200px;
  }
  @media (max-width: 314px){
    width: 100px;
    height: 160px;
  }
`,KF=c.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 5px;
  span {
    margin-left: 10px;
    position: relative;
    bottom: -2px;
    color: #d975c0;
    cursor: pointer;
  }
  @media (max-width: 550px){
    font-size: 12px;
  }
  @media (max-width: 314px){
    font-size: 10px;
  }
`,ZF=c.div`
  font-size: 13px;
  font-weight: 700;
  color: black;
  margin-bottom: 10px;
`,JF=c.div`
  /* width: 300px; */
  flex: 1 0 100px;
  box-sizing: border-box;
  /* height: 350px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 10px;
  /* background-color: gold; */
`,Ki=({id:e,index:t,name:n,price:r,img:i,data:o})=>{const a=xi(h=>h.reducers.cartItem),l=a==null?void 0:a.find(h=>(h==null?void 0:h._id)===e),[u,d]=C.useState(!1),f=Za();return C.useEffect(()=>{const h=()=>{const m=window.innerWidth<=768;d(m)};return h(),window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}}),s(_a,{children:u?s(WF,{img:i,id:e,index:t,name:n,price:r,data:o}):y(oD,{children:[s(y3,{to:`/detail/${e}`,children:s(nD,{children:s("img",{src:i})})}),y(XF,{children:[y(y3,{to:`/detail/${e}`,children:[s(rD,{children:n}),y(iD,{children:["₦",r]})]}),s(Y5,{children:(l==null?void 0:l.qty)>=1?y(eD,{children:[s(v3,{onClick:()=>f(lo(o)),children:"+"}),s("span",{children:l==null?void 0:l.qty}),s(v3,{onClick:()=>f(kf(o)),children:"-"})]}):s(tD,{onClick:()=>f(lo(o)),children:"ADD TO CART"})})]})]},t)})},y3=c(be)`
  text-decoration: none;
  color: black;
`,XF=c.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`,eD=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,v3=c.button`
  padding: 13px 20px;
  border: 0px;
  border-radius: 2px;
  outline: none;

  background-color: #d975c0;
  color: white;
  cursor: pointer
`,tD=c.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  font-weight: 800;
  outline: none;
  border: 0px;
  background-color: #d975c0;
  color: white;
  cursor: pointer;
`,Y5=c.div`
  display: none;
`,nD=c.div`
  /* background-color: #cdc8c8; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  width: 230px;
  height: 220px;
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
`,rD=c.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 5px;
  span {
    margin-left: 10px;
    position: relative;
    bottom: -2px;
    color: #d975c0;
    cursor: pointer;
  }
  @media (max-width: 550px){
    font-size: 12px;
  }
  @media (max-width: 314px){
    font-size: 10px;
  }
`,iD=c.div`
  font-size: 13px;
  font-weight: 700;
  color: black;
  margin-bottom: 10px;
`,oD=c.div`
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 10px;

  :hover{
    ${Y5}{
      display: block;
      width: 100%;
    }
  }

  @media (max-width: 600px){
    width: 180px;
    height: 270px;
  }
  @media (max-width: 530px){
    width: 170px;
    height: 270px;
  }
  @media (max-width: 440px){
    width: 150px;
    height: 100%;
  }
  @media (max-width: 380px){
    width: 120px;
  }
  @media (max-width: 314px){
    width: 100px;
  }
`,Tr="https://crossbackend.onrender.com",Gl=async e=>(await Xe.get(`${Tr}/api/product/${e}/seller`)).data.data,aD=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.post(`${Tr}/api/product/${e}/create/phone`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},sD=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.post(`${Tr}/api/product/${e}/create/cloth`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},lD=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.post(`${Tr}/api/product/${e}/create/electronics`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},uD=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.post(`${Tr}/api/product/${e}/create/food`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},dD=async({id:e,tag_No:t,quantity:n,startDate:r,endDate:i,active:o})=>{await Xe.patch(`${Tr}/api/product/${e}/update`,{id:e,tag_No:t,quantity:n,startDate:r,endDate:i,active:o}).then(a=>{localStorage.setItem("product",JSON.stringify(a.data.data)),console.log(a.data)})},Xa=async()=>await Xe.get(`${Tr}/api/product`).then(t=>t.data.data),cD=async e=>(await Xe.get(`${Tr}/api/product/${e}`)).data.data,fD=async({ids:e,quantities:t})=>{const n=await Xe.patch(`${Tr}/api/product/order`,{ids:e,quantities:t});return console.log(n),n.data.data},hD=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:Xa}),[t,n]=C.useState(0),r=e==null?void 0:e.filter(u=>u.status==="approved"),i=8,o=t*i,a=r==null?void 0:r.slice(o,o+i);var l=Intl.NumberFormat();return s(yD,{children:y(mD,{children:[s(gD,{children:a==null?void 0:a.map((u,d)=>s(Ki,{id:u._id,name:u.name,price:l.format(u==null?void 0:u.price),img:u==null?void 0:u.avatar[0].url}))}),s(pD,{to:"/phone",children:s("button",{children:"See All"})})]})})},pD=c.div`
  width: 97%;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    /* width: 9%; */
    background-color: #d975c0;
    color: white;
    font-size: 12px;
    padding: 8px 10px;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,gD=c.div`
  margin-top: 10px;
  width: 100%;
  /* height: 360px; */
  display: flex;
  align-items: center;
  overflow-x: auto;
`,mD=c.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  border: 1.9px solid #d975c0;
  padding: 0 10px;
  margin: 20px 0;
  border-radius: 2px;

  
`,yD=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,vD=()=>{const{id:e}=B4();Za();const{data:t}=Ke({queryKey:["products",e],queryFn:()=>cD(e)});var n=Intl.NumberFormat();return s(xD,{children:y(bD,{children:[s(MF,{name:t==null?void 0:t.name,price:n.format(t==null?void 0:t.price)}),s(fF,{id:e,qty:t==null?void 0:t.quantity,avatar:t==null?void 0:t.avatar,data:t}),s(IF,{description:t==null?void 0:t.description}),s(hD,{})]})})},xD=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,bD=c.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
`,qm=({index:e,name:t,price:n,shippingFee:r,totalPrice:i,subtotal:o,qty:a,id:l,avatar:u})=>{var d=Intl.NumberFormat();return s("div",{children:y(_D,{children:[y(w3,{children:[y(OD,{children:[s(PD,{children:a}),s(CD,{src:u})]}),y(SD,{children:[s(wD,{children:t}),y(Jh,{children:["₦",n]})]})]}),s($3,{}),s(w3,{children:y($D,{children:[y(x3,{children:[s(b3,{children:"Subtotal"}),y(Jh,{children:["₦",o]})]}),y(x3,{children:[s(b3,{children:"Shipping Fee"}),y(Jh,{children:["₦",d.format(r*a)]})]})]})}),s($3,{})]},l)})},$D=c.div``,x3=c.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  margin: 10px 0px;
`,Jh=c.div`
  font-weight: 700;
`,b3=c.div`
  font-size: 18px;
  font-weight: 600;
  /* margin-bottom: 10px; */
`,wD=c.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,SD=c.div`
  margin-left: 20px;
`,$3=c.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,CD=c.img`
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
`,PD=c.div`
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
`,OD=c.div`
  margin-right: 20px;
`,w3=c.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 90%;
`,_D=c.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,kD=()=>s("div",{children:s(jD,{children:y(MD,{children:[s(DD,{children:y(FD,{children:[y(t0,{children:[s(e0,{children:"Contact"}),y(Xh,{children:[s(O3,{placeholder:"email"}),s("span",{children:"Chance"})]})]}),y(t0,{children:[s(e0,{children:"Address"}),y(Xh,{children:[s(O3,{placeholder:"Address"}),s("span",{children:"Chance"})]})]}),y(t0,{children:[s(e0,{children:"Payment Method"}),s(Xh,{children:y(RD,{children:[y(P3,{children:[s(C3,{bg:"fff"}),s(S3,{children:"Pay on delivery"})]}),s(AD,{}),y(P3,{children:[s(C3,{bg:""}),s(S3,{children:"Pay on delivery"})]})]})})]}),y(TD,{children:[y(ID,{children:[s("span",{children:s(FS,{})}),s("div",{children:"Return to Information"})]}),s(ED,{children:"Complete Order"})]})]})}),s(ND,{children:s(qm,{})})]})})}),ND=c.div`
    flex: 1;
    height: 100vh;
    border-left: 3px solid lightgray;
    /* background-color: blue; */
`,ED=c.button`
    padding: 15px 20px;
    border: #D975C0;
    background-color: #D975C0;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    cursor: pointer;
`,ID=c.div`
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
`,TD=c.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    margin-top: 30px;
`,AD=c.div`
    width: 100%;
    background-color: lightgray;
    height: 2px;
    margin: 10px 0px;
`,S3=c.div`
    font-weight: 700;
    margin-right: 20px;
`,C3=c.div`
    border: 1px solid black;
    background-color: ${({bg:e})=>e?"#D975C0":"transparent"};
    border-radius: 50%;
    height: 25px;
    width: 25px;
    cursor: pointer;
`,P3=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,RD=c.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,O3=c.input`
    width: 90%;
    height: 30px;
    border: 0px;
    outline: none;
    margin-left: 10px;

`,Xh=c.div`
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
`,e0=c.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
`,t0=c.div`
    margin: 10px;
`,FD=c.div`
    width: 90%;
    margin-top: 20px;
`,DD=c.div`
    flex: 1;
    height: 100vh;
    display: flex;
    justify-content: center;
    /* background-color: gold; */
`,MD=c.div`
    width: 95%;
    display: flex;
`,jD=c.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,LD=()=>s(zD,{children:y(UD,{children:[s(BD,{children:s(Ya,{fontSize:"50px",color:"green"})}),y(WD,{children:["Account Information has been",s("br",{})," received and will be reviewed ",s("br",{}),"shortly."]}),s(HD,{to:"/auth/signin",children:s("button",{children:"Start Selling"})})]})}),zD=c.div`
  width: 100%;
  height: 42vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 30px; */
  padding-top: 80px;
`,UD=c.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`,BD=c.div``,HD=c(Ul)`
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
`,WD=c.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,YD=()=>s(VD,{children:y(qD,{children:[s(GD,{children:s(Ya,{fontSize:"50px",color:"green"})}),y(KD,{children:["You have successfully created",s("br",{})," an account"]}),s(QD,{to:"/business",children:s("button",{children:"Continue"})})]})}),VD=c.div`
  width: 100%;
  height: 42vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`,qD=c.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`,GD=c.div``,QD=c(Ul)`
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
`,KD=c.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,ZD=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:Xa}),[t,n]=C.useState(0),r=8,i=t*r,o=e==null?void 0:e.slice(i,i+r);o==null||o.filter(d=>d.category==="phone"&&d.status==="approved"),o==null||o.filter(d=>d.category==="electronics"&&d.status==="approved");const a=o==null?void 0:o.filter(d=>d.category==="food"&&d.status==="approved"),l=o==null?void 0:o.filter(d=>d.category==="clothing"&&d.status==="approved");console.log(l);var u=Intl.NumberFormat();return s(nM,{children:y(tM,{children:[s(XD,{children:"Foodstuffs"}),s(eM,{children:a==null?void 0:a.map((d,f)=>s(Ki,{id:d._id,index:f,name:d.name,price:u.format(d==null?void 0:d.price),img:d==null?void 0:d.avatar[0].url,data:d}))}),s(JD,{to:"/food",children:s("button",{children:"See All"})})]})})},JD=c(be)`
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
`,XD=c.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;
`,eM=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
`,tM=c.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  border: 1.9px solid #d975c0;
  padding: 0 10px;
  margin: 20px 0;
  border-radius: 2px;

  
`,nM=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,rM=()=>s(iM,{children:y(oM,{children:[s(aM,{children:s(jS,{fontSize:"50px",color:"red"})}),s(lM,{children:"Incorrect OTP number, please try again"}),s(sM,{to:"/auth/verify",children:s("button",{children:"Try again"})})]})}),iM=c.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`,oM=c.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`,aM=c.div``,sM=c(be)`
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
`,lM=c.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,Gm=[{name:"Nigeria",flag:"https://cdn-icons-png.flaticon.com/512/8603/8603374.png"},{name:"Ghana",flag:"https://cdn-icons-png.flaticon.com/512/8603/8603142.png"}],V5="https://crossbackend.onrender.com",nr=async e=>(await Xe.get(`${V5}/api/order`)).data.data,uM=e=>Xe.get(`${V5}/api/order/${e}`).then(n=>n.data.data),dM="https://crossbackend.onrender.com",cM=()=>{const e=nt();var t=Intl.NumberFormat();const n=xi(G=>G.reducers.cartItem),r=xi(G=>G.reducers.qty),i=n==null?void 0:n.reduce((G,Y)=>G+Y.qty*Y.price+Y.shippingFee*Y.qty,0),o=n==null?void 0:n.reduce((G,Y)=>G+Y.qty*Y.shippingFee,0),[a,l]=C.useState(Gm);let[u,d]=C.useState(0);const[f,h]=C.useState(""),[m,b]=C.useState(""),[v,w]=C.useState(""),[x,p]=C.useState(""),[g,$]=C.useState(""),[S,P]=C.useState(""),[N,T]=C.useState(""),[R,W]=C.useState(""),[L,se]=C.useState(""),[M,j]=C.useState(),[X,F]=C.useState(!1),[ee,re]=C.useState(!1),[z,_]=C.useState("Payment before delivery"),[k,U]=C.useState([]),D=()=>{const G=n.map(Y=>({productID:Y._id,sellerID:Y.user,qty:Y.qty,price:Y.price}));U(G)},H=()=>{d(()=>u+1),u>=a.length-1&&d(()=>u=0)},V=()=>{w(a[u].name)},ie=$t({mutationKey:["order"],mutationFn:async({firstName:G,lastName:Y,email:Oe,order_No:me,payment_method:ge,country:he,Localgovt:Ne,state:De,apartment:fe,nearestBusStop:O,products:E,subtotal:A,totalQty:oe,address:K,shippingFee:q})=>{await Xe.post(`${dM}/api/order/create`,{firstName:G,lastName:Y,email:Oe,order_No:me,payment_method:ge,country:he,Localgovt:Ne,state:De,apartment:fe,nearestBusStop:O,products:E,subtotal:A,totalQty:oe,address:K,shippingFee:q}).then(ae=>{e("/finishshipping"),console.log(ae.data),localStorage.setItem("order",JSON.stringify(ae.data.data))}).catch(ae=>{console.log(ae)})},onError:G=>{console.log(G)}}),I=G=>{G.preventDefault(),(m.length==0||x.length==0||f.length==0||v.length==0||!z||N.length==0||S.length==0||L.length==0||k.length==0||S.length==0)&&(re(!0),alert("All inputs most be filed ")),ie.mutate({firstName:m,lastName:x,email:f,order_No:M,payment_method:z,country:v,Localgovt:R,state:N,apartment:S,nearestBusStop:L,products:k,subtotal:i,totalQty:r,address:g,shippingFee:o})};return C.useEffect(()=>{V(),D()},[u]),s("div",{children:s(kM,{children:y(_M,{children:[s(OM,{children:y(PM,{onSubmit:I,children:[y(k3,{children:[s(r0,{children:"Contact Information"}),s(Hn,{children:"Email"}),s(Wn,{children:s(ar,{placeholder:"email",value:f,onChange:G=>h(G.target.value)})})]}),y(k3,{children:[s(r0,{children:"Payment Method"}),s(Wn,{children:y(CM,{children:[X?y(hs,{onClick:()=>{F(!1),_("Payment before delivery")},children:[s(Pu,{bg:"fff"}),s(Cu,{children:"Payment on delivery"})]}):y(hs,{onClick:()=>{F(!0),_("Payment on delivery")},children:[s(Pu,{bg:""}),s(Cu,{children:"Payment on delivery"})]}),s(SM,{}),X?y(hs,{onClick:()=>{F(!1),_("Payment before delivery")},children:[s(Pu,{bg:""}),s(Cu,{children:"Payment before delivery"})]}):y(hs,{onClick:()=>{F(!0),_("Payment on delivery")},children:[s(Pu,{bg:"fff"}),s(Cu,{children:"Payment before delivery"})]})]})})]}),y(Ou,{children:[s(r0,{children:"Shipping Address"}),s(Hn,{children:"Country"}),y(vM,{children:[" ",s(mM,{src:a[u].flag}),s(yM,{onClick:H,children:s(cn,{})})]})]}),y(N3,{children:[y(_3,{children:[s(Hn,{children:"First Name"}),s(Wn,{children:s(ar,{placeholder:"First Name",value:m,onChange:G=>b(G.target.value)})})]}),y(_3,{children:[s(Hn,{children:"Last Name"}),s(Wn,{children:s(ar,{placeholder:"Last Name",value:x,onChange:G=>p(G.target.value)})})]})]}),y(Ou,{children:[s(Hn,{children:"Address"}),s(Wn,{children:s(ar,{placeholder:"Address",value:g,onChange:G=>$(G.target.value)})})]}),y(Ou,{children:[s(Hn,{children:"Apartment, Suite etc.... (Optional)"}),s(Wn,{children:s(ar,{placeholder:"Apartment, Suite etc....",value:S,onChange:G=>P(G.target.value)})})]}),y(N3,{children:[y(n0,{children:[s(Hn,{children:"State"}),s(Wn,{children:s(ar,{placeholder:"Lagos",value:N,onChange:G=>T(G.target.value)})})]}),y(n0,{children:[s(Hn,{children:"LGA"}),s(Wn,{children:s(ar,{placeholder:"Ajeromi",value:R,onChange:G=>W(G.target.value)})})]}),y(n0,{children:[s(Hn,{children:"Nearest B/Stop"}),s(Wn,{children:s(ar,{placeholder:"OJA",value:L,onChange:G=>se(G.target.value)})})]})]}),y(Ou,{children:[s(Hn,{children:"Phone number"}),s(Wn,{children:s(ar,{placeholder:"Phone number",type:"number",value:M,onChange:G=>j(G.target.value)})})]}),y(wM,{children:[y($M,{children:[s("span",{children:s(DS,{})}),s("div",{onClick:()=>{e(-1)},children:"Return to Cart"})]}),s(bM,{type:"submit",disabled:ie.status==="loading",children:ie.status==="loading"?"Loading...":"Continue"})]})]})}),y(xM,{children:[n==null?void 0:n.map((G,Y)=>s(qm,{index:Y,name:G.name,price:t.format(G.price),shippingFee:G==null?void 0:G.shippingFee,totalPrice:t.format(i),subtotal:t.format(G.price*G.qty),qty:G.qty,avatar:G.avatar[0].url,id:G._id})),s(gM,{children:s(hs,{children:y(fM,{children:[s(pM,{children:"Total"}),y(hM,{children:["₦",t.format(i)]})]})})})]})]})})})},fM=c.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  margin: 10px 0px;
`,hM=c.div`
  font-weight: 700;
`,pM=c.div`
  font-size: 18px;
  font-weight: 600;
  /* margin-bottom: 10px; */
`,gM=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: gold; */
  margin-left: 15px;
  width: 90%;
`,mM=c.img`
  width: 40px;
`,yM=c.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,_3=c.div`
  width: 45%;
`,n0=c.div`
  width: 30%;
`,vM=c.div`
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
`,Hn=c.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 6px;
`,xM=c.div`
  flex: 1;

  @media (max-width: 768px ){
    display: none;
  }
  /* background-color: blue; */
`,bM=c.button`
  padding: 15px 20px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`,$M=c.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-weight: 600;
    margin-left: 10px;
    color: #3c3c3c;
  }
`,wM=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin-top: 30px;

  span {
    margin-top: 5px;
  }
`,SM=c.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,Cu=c.div`
  font-weight: 700;
  margin-right: 20px;
`,Pu=c.div`
  border: 1px solid black;
  background-color: ${({bg:e})=>e?"#D975C0":"transparent"};
  border-radius: 50%;
  height: 25px;
  width: 25px;
  cursor: pointer;
`,hs=c.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,CM=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,ar=c.input`
  width: 90%;
  height: 30px;
  border: 0px;
  outline: none;
  /* margin-right: 20px; */
`,Wn=c.div`
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
`,r0=c.div`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 14px;
`,k3=c.div`
  margin-bottom: 50px;
`,Ou=c.div`
  margin-bottom: 20px;
`,N3=c.div`
  margin-bottom: 20px;
  display: flex;

  justify-content: space-between;
  align-items: center;
`,PM=c.form`
  width: 90%;
  margin-top: 20px;
`,OM=c.div`
  flex: 1;
  border-right: 2px solid lightgray;
  display: flex;
  justify-content: center;
  /* background-color: gold; */
`,_M=c.div`
  width: 95%;
  display: flex;
`,kM=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,NM=({index:e,totalPrice:t,subtotal:n,props:r})=>{var o,a,l,u,d,f;var i=Intl.NumberFormat();return s("div",{children:y(DM,{children:[y(A3,{children:[y(FM,{children:[s(RM,{children:r.qty}),s(AM,{src:(a=(o=r==null?void 0:r.productID)==null?void 0:o.avatar[0])==null?void 0:a.url})]}),y(TM,{children:[s(IM,{children:(l=r==null?void 0:r.productID)==null?void 0:l.name}),y(i0,{children:["₦ ",i.format((u=r==null?void 0:r.productID)==null?void 0:u.price)]})]})]}),s(T3,{}),s(A3,{children:y(EM,{children:[y(E3,{children:[s(I3,{children:"Subtotal"}),y(i0,{children:["₦",i.format((r==null?void 0:r.qty)*((d=r==null?void 0:r.productID)==null?void 0:d.price))]})]}),y(E3,{children:[s(I3,{children:"Shipping Fee"}),y(i0,{children:["₦ ",i.format((f=r==null?void 0:r.productID)==null?void 0:f.shippingFee)]})]})]})}),s(T3,{})]},e)})},EM=c.div``,E3=c.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  margin: 10px 0px;
`,i0=c.div`
  font-weight: 700;
`,I3=c.div`
  font-size: 18px;
  font-weight: 600;
  /* margin-bottom: 10px; */
`,IM=c.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,TM=c.div`
  margin-left: 20px;
`,T3=c.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,AM=c.img`
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
`,RM=c.div`
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
`,FM=c.div`
  margin-right: 20px;
`,A3=c.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 90%;
`,DM=c.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,MM=()=>{var h,m,b;const e=Za(),t=nt(),n=JSON.parse(localStorage.getItem("order")),r=xi(v=>v.reducers.cartItem),i=n==null?void 0:n._id,{data:o}=Ke({queryKey:["order",i],queryFn:()=>uM(i)});var a=Intl.NumberFormat();const l=$t({mutationKey:["products"],mutationFn:fD,onSuccess:()=>{t("/payment-review"),e(uF(r)),localStorage.removeItem("order")}}),u=(h=n==null?void 0:n.products)==null?void 0:h.map(v=>v==null?void 0:v.productID),d=(m=n==null?void 0:n.products)==null?void 0:m.map(v=>v==null?void 0:v.qty),f=()=>{l.mutate({ids:u,quantities:d})};return s("div",{children:s(nj,{children:y(tj,{children:[y(ej,{children:[y(WM,{children:[s(YM,{children:s(Ya,{fontSize:"32px",color:"white"})}),y(VM,{children:[y(qM,{children:[" ","Order ",s("span",{children:o==null?void 0:o.order_No})]}),y(GM,{children:[" ","Thank you ",s("span",{children:o==null?void 0:o.firstName})]})]})]}),y(XM,{children:[y(d0,{children:[s(u0,{children:"Confirmation"}),s(l0,{children:s(R3,{children:"Your order will be shipped immediately"})})]}),y(d0,{children:[s(u0,{children:"Shipping Update"}),s(l0,{children:s(R3,{children:"You will get shipping and delivery update by email"})})]}),y(d0,{children:[s(u0,{children:"Customer Information"}),s(l0,{children:y(JM,{children:[y(s0,{children:[s(a0,{children:"Contact Information"}),s(o0,{children:o==null?void 0:o.email})]}),y(s0,{children:[s(a0,{children:"Shipping Address"}),s(o0,{children:o==null?void 0:o.address})]}),y(s0,{children:[s(a0,{children:"Payment Method"}),s(o0,{children:o==null?void 0:o.payment_method})]})]})})]}),s(ZM,{children:s(KM,{onClick:f,children:"Complete Shipping"})})]})]}),y(QM,{children:[(b=o==null?void 0:o.products)==null?void 0:b.map((v,w)=>s(NM,{index:w,totalPrice:a.format(o==null?void 0:o.subtotal),subtotal:o==null?void 0:o.totalQty,props:v})),s(HM,{children:s(jM,{children:y(LM,{children:[s(UM,{children:"Total"}),y(zM,{children:["₦",a.format(o==null?void 0:o.subtotal)]})]})})}),s(BM,{})]})]})})})},jM=c.div``,LM=c.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  margin: 10px 0px;
`,zM=c.div`
  font-weight: 700;
`,UM=c.div`
  font-size: 18px;
  font-weight: 600;
  /* margin-bottom: 10px; */
`,BM=c.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,HM=c.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 90%;
  margin-left: 25px;
`,WM=c.div`
  display: flex;
  padding: 0 10px;
`,YM=c.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d975c0;
  border-radius: 7px;
`,VM=c.div`
  padding: 3px 10px;
`,qM=c.div`
  font-weight: lighter;
  font-size: 12px;
`,GM=c.div`
  font-weight: 500;
  font-size: 14px;
  margin-top: 6px;
`,R3=c.div`
  margin-left: 10px;
  font-weight: 600;
  color: #363636;
`,QM=c.div`
  flex: 1;
  border-left: 3px solid lightgray;
  /* background-color: blue; */

  @media (max-width: 700px){
    display: none;
  }
`,KM=c.button`
  padding: 15px 20px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;c.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-weight: 600;
    margin-left: 10px;
    color: #3c3c3c;
  }
`;const ZM=c.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 10px;
  margin-top: 30px;
`;c.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`;const o0=c.div`
  font-weight: 500;
  margin-right: 20px;
`,a0=c.div`
  font-weight: 700;
`,s0=c.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,JM=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;c.input`
  width: 90%;
  height: 30px;
  border: 0px;
  outline: none;
  margin-left: 10px;
`;const l0=c.div`
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
`,u0=c.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,d0=c.div`
  margin: 10px;
`,XM=c.div`
  width: 90%;
  margin-top: 20px;
`,ej=c.div`
  flex: 1;
  /* height: 90vh; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: gold; */
`,tj=c.div`
  width: 95%;
  display: flex;
`,nj=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;var F3=function(e){return typeof e=="object"&&e!==null},q5=function(e){var t=e.value,n=t===void 0?"":t,r=e.numInputs,i=r===void 0?4:r,o=e.onChange,a=e.renderInput,l=e.shouldAutoFocus,u=l===void 0?!1:l,d=e.inputType,f=d===void 0?"text":d,h=e.renderSeparator,m=e.placeholder,b=e.containerStyle,v=e.inputStyle,w=ne.useState(0),x=w[0],p=w[1],g=ne.useRef([]),$=function(){return n?n.toString().split(""):[]},S=f==="number"||f==="tel";ne.useEffect(function(){g.current=g.current.slice(0,i)},[i]),ne.useEffect(function(){var F;u&&((F=g.current[0])===null||F===void 0||F.focus())},[u]);var P=function(){if(typeof m=="string"){if(m.length===i)return m;m.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},N=function(F){var ee=S?!isNaN(Number(F)):typeof F=="string";return ee&&F.trim().length===1},T=function(F){var ee=F.target.value;if(N(ee))M(ee),se(x+1);else{var re=F.nativeEvent;re.data===null&&re.inputType==="deleteContentBackward"&&(F.preventDefault(),M(""),se(x-1))}},R=function(F){return function(ee){p(ee),F.target.select()}},W=function(){p(x-1)},L=function(F){var ee=$();F.code==="Backspace"?(F.preventDefault(),M(""),se(x-1)):F.code==="Delete"?(F.preventDefault(),M("")):F.code==="ArrowLeft"?(F.preventDefault(),se(x-1)):F.code==="ArrowRight"||F.key===ee[x]?(F.preventDefault(),se(x+1)):(F.code==="Spacebar"||F.code==="Space"||F.code==="ArrowUp"||F.code==="ArrowDown")&&F.preventDefault()},se=function(F){var ee,re,z=Math.max(Math.min(i-1,F),0);g.current[z]&&((ee=g.current[z])===null||ee===void 0||ee.focus(),(re=g.current[z])===null||re===void 0||re.select(),p(z))},M=function(F){var ee=$();ee[x]=F[0],j(ee)},j=function(F){var ee=F.join("");o(ee)},X=function(F){var ee;F.preventDefault();var re=$(),z=x,_=F.clipboardData.getData("text/plain").slice(0,i-x).split("");if(!(S&&_.some(function(U){return isNaN(Number(U))}))){for(var k=0;k<i;++k)k>=x&&_.length>0&&(re[k]=(ee=_.shift())!==null&&ee!==void 0?ee:"",z++);se(z),j(re)}};return ne.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},F3(b)&&b),className:typeof b=="string"?b:void 0},Array.from({length:i},function(F,ee){return ee}).map(function(F){var ee,re,z;return ne.createElement(ne.Fragment,{key:F},a({value:(ee=$()[F])!==null&&ee!==void 0?ee:"",placeholder:(z=(re=P())===null||re===void 0?void 0:re[F])!==null&&z!==void 0?z:void 0,ref:function(_){return g.current[F]=_},onChange:T,onFocus:function(_){return R(_)(F)},onBlur:W,onKeyDown:L,onPaste:X,autoComplete:"off",maxLength:1,"aria-label":"Please enter OTP character ".concat(F+1),style:Object.assign({width:"1em",textAlign:"center"},F3(v)&&v),className:typeof v=="string"?v:void 0,type:f},F),F<i-1&&(typeof h=="function"?h(F):h))}))};const rj=()=>{const e=nt(),[t,n]=C.useState(""),r=JSON.parse(localStorage.getItem("user")),i=$t({mutationFn:hI,onSuccess:()=>{r.isSeller===!0&&e("/auth/personalinfo")},onError:()=>{e("/auth/otperror")}});return s(ij,{children:y(oj,{children:[s(aj,{children:"OTP Verification!"}),s(lj,{children:"Please enter the OTP you received"}),s(q5,{style:{border:"1px solid gold"},value:t,onChange:n,numInputs:6,renderSeparator:s("span",{children:" "}),renderInput:a=>s("input",{...a}),containerStyle:"containerStyle",inputStyle:"inputStyle",width:"70px"}),s(sj,{children:s("button",{onClick:()=>{const a=r._id;i.mutate({id:a,otp:t})},children:"Enter"})})]})})},ij=c.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`,oj=c.div`
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
`,aj=c.div`
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
`,sj=c.div`
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
`,lj=c.div`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
`;c.input`
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

`;const uj=()=>{const e=nt(),[t,n]=C.useState(""),[r,i]=C.useState(""),[o,a]=C.useState(""),l=$t({mutationFn:yI,onSuccess:f=>{console.log(f),e("/auth/review")},onError:f=>{console.log(f.message)}}),u=JSON.parse(localStorage.getItem("user"));return s("div",{children:s(gj,{children:y(pj,{children:[s(hj,{children:"Provide Bank Details"}),y(fj,{children:["Enter every necessary details to create",s("br",{})," your own seller account"," "]}),y(cj,{onSubmit:f=>{f.preventDefault();const h=u._id,m=!0,b=parseInt(o);l.mutate({id:h,bankName:t,accountName:r,accNumber:b,completed:m})},children:[y(p0,{children:[s(h0,{children:"Bank"}),s(c0,{children:s(f0,{placeholder:"Bank",value:t,onChange:f=>n(f.target.value)})})]}),y(p0,{children:[s(h0,{children:"Account Name"}),s(c0,{children:s(f0,{placeholder:"Account Name",value:r,onChange:f=>i(f.target.value)})})]}),y(p0,{children:[s(h0,{children:"Account Number"}),s(c0,{children:s(f0,{placeholder:"Account Number",type:"number",value:o,onChange:f=>a(f.target.value)})})]}),s(dj,{type:"submit",children:l.status==="Loading..."?"Loadding":"Continue"})]})]})})})},dj=c.button`
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
`;c.div`
  font-size: 15px;
  font-weight: 700;
  color: #ff0000;
`;const c0=c.div`
  width: 350px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`,f0=c.input`
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
`,h0=c.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`,p0=c.div`
  margin-bottom: 10px;
`,cj=c.form`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,fj=c.div`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 20px;
`,hj=c.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`,pj=c.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  /* border: 1px solid gray; */
`,gj=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,mj=()=>{const e=nt(),[t,n]=C.useState(Gm);let[r,i]=C.useState(0);const[o,a]=C.useState(""),[l,u]=C.useState("Default"),[d,f]=C.useState("123456"),[h,m]=C.useState(""),[b,v]=C.useState(""),[w,x]=C.useState(""),p=()=>{i(()=>r+1),r>=t.length-1&&i(()=>r=0)},g=()=>{x(t[r].name)},$=$t({mutationFn:mI,onSuccess:N=>{console.log(N),e("/auth/information")},onError:N=>{console.log(N.message)}});C.useEffect(()=>{g()},[r]);const S=JSON.parse(localStorage.getItem("user")),P=N=>{N.preventDefault();const T=S._id,R=parseInt(d);$.mutate({id:T,address:o,address2:l,shippingFrom:w,codePostal:R,shopName:h,city:b})};return console.log(w),s("div",{children:s(Cj,{children:y(Sj,{children:[s(wj,{children:"Business Information "}),y($j,{children:["Enter every necessary details to create your own seller account"," "]}),y(bj,{onSubmit:P,children:[y(So,{children:[s(wo,{children:"Shop Name *"}),s($o,{children:s(ps,{value:h,onChange:N=>m(N.target.value)})})]}),y(So,{children:[s(wo,{children:"Postal code/Zip code"}),s($o,{children:s(ps,{type:"number",value:d,onChange:N=>f(N.target.value)})})]}),y(So,{children:[s(wo,{children:"Address *"}),s($o,{children:s(ps,{value:o,onChange:N=>a(N.target.value)})})]}),y(So,{children:[s(wo,{children:"Address 2"}),s($o,{children:s(ps,{value:l,onChange:N=>u(N.target.value)})})]}),y(So,{children:[s(wo,{children:"City / Town"}),s($o,{children:s(ps,{value:b,onChange:N=>v(N.target.value)})})]}),y(So,{children:[s(wo,{children:"What country are you shipping from?"}),y($o,{children:[s(yj,{src:t[r].flag}),s(xj,{onClick:p,children:s(cn,{})})]})]}),s(vj,{type:"submit",children:$.status==="loading"?"Loading...":"Continue"})]})]})})})},yj=c.img`
  width: 40px;
`,vj=c.button`
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
`;c.div`
  font-size: 15px;
  font-weight: 700;
  color: #ff0000;
`;const xj=c.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,$o=c.div`
  width: 350px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`,ps=c.input`
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
`,wo=c.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`,So=c.div`
  margin-bottom: 10px;
`,bj=c.form`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,$j=c.div`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 20px;
`,wj=c.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`,Sj=c.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  /* border: 1px solid gray; */
`,Cj=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Pj=()=>{const e=nt(),[t,n]=C.useState(Gm);let[r,i]=C.useState(0),[o,a]=C.useState(!1);const[l,u]=C.useState(""),[d,f]=C.useState(""),[h,m]=C.useState(""),b=()=>{if(o===!0)return a(()=>o=!1);a(()=>o=!0)},v=()=>{i(()=>r+1),r>=t.length-1&&i(()=>r=0)},w=()=>{m(t[r].name)},x=$t({mutationFn:gI,onSuccess:$=>{console.log($),e("/auth/businessinfo")},onError:$=>{console.log($.message)}});C.useEffect(()=>{w()},[r]);const p=JSON.parse(localStorage.getItem("user"));return s("div",{children:s(Dj,{children:y(Fj,{children:[s(Rj,{children:"Personal Details "}),s(Aj,{children:"Almost there, just few more details"}),y(Tj,{onSubmit:$=>{$.preventDefault();const S=p._id;x.mutate({id:S,gender:l,DateOfBirth:d,country:h})},children:[y(y0,{children:[s(m0,{children:"Date of Birth"}),s(g0,{children:s(Ij,{placeholder:"04/19/1999",type:"date",value:d,onChange:$=>{f($.target.value)}})})]}),y(y0,{children:[s(m0,{children:"Gender"}),s(g0,{children:y(Oj,{value:l,onChange:$=>{u($.target.value)},children:[s("option",{children:"Select"}),s("option",{children:"Male"}),s("option",{children:"Female"}),s("option",{children:"Other"})]})})]}),y(y0,{children:[s(m0,{children:"Country"}),y(g0,{children:[s(Nj,{src:t[r].flag}),s(Ej,{onClick:v,children:s(cn,{})})]})]}),o?s(D3,{bg:"",type:"submit",children:x.status==="loading"?"Loading...":"Continue"}):s(D3,{bg:"fff",disabled:!0,children:"Continue"}),y(kj,{children:[" ",s(_j,{type:"checkbox",onClick:b}),"Don't have an account? ",s("span",{children:"Terms and Conditions"})]})]})]})})})},Oj=c.select`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
`,_j=c.input`
  margin-right: 10px;
  cursor: pointer;
`,kj=c.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,Nj=c.img`
  width: 40px;
`,D3=c.button`
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
`;c.div`
  font-size: 15px;
  font-weight: 700;
  color: #ff0000;
`;const Ej=c.div`
  cursor: pointer;
`,g0=c.div`
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
`,Ij=c.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: 0px;
`,m0=c.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`,y0=c.div`
  margin-bottom: 10px;
`,Tj=c.form`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,Aj=c.div`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 20px;
`,Rj=c.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`,Fj=c.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  /* border: 1px solid gray; */
`,Dj=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;function Mj(e){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"}}]})(e)}function jj(e){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"}}]})(e)}function Lj(e){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 6a3.939 3.939 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 0 0-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6zm-1 10h2v2h-2z"}},{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"}}]})(e)}function zj(e){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"}}]})(e)}function Nf(e){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"}}]})(e)}function Ql(e){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"}}]})(e)}function Uj(e){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"}}]})(e)}const Bj=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:Xa}),[t,n]=C.useState(0),r=e==null?void 0:e.filter(l=>l.status==="approved"),i=8,o=t*i,a=r==null?void 0:r.slice(o,o+i);return s(Wj,{children:y(Hj,{children:[s(Vj,{children:"Featured "}),s(Qj,{children:a==null?void 0:a.map((l,u)=>s(Gj,{children:s(qj,{children:s(Yj,{src:l==null?void 0:l.avatar[0].url})})},u))})]})})},Hj=c.div`
  width: 93%;
  /* height: 200px; */
  overflow-x: auto;
  -ms-overflow-style: none;
  background: #D9D9D9;
`,Wj=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`,Yj=c.img`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  background-color: gold;
  margin: 20px;
`,Vj=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
  margin-top: 10px;
`,qj=c.div`
  display: flex;
  align-items: center;

  :hover {
    color: blue;
  }
  cursor: pointer;
`;c.div`
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 400;
`;c.tr``;const Gj=c.tr`
 
`,Qj=c.div`
  width: 78rem;
  /* height: 150px; */
  /* padding: 0px 20px; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* overflow-x: scroll; */
`,Kj=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:Xa}),[t,n]=C.useState(0),r=8,i=t*r,o=e==null?void 0:e.slice(i,i+r),a=o==null?void 0:o.filter(h=>h.category==="phone"&&h.status==="approved"),l=o==null?void 0:o.filter(h=>h.category==="electronics"&&h.status==="approved"),u=o==null?void 0:o.filter(h=>h.category==="food"&&h.status==="approved"),d=o==null?void 0:o.filter(h=>h.category==="clothing"&&h.status==="approved");var f=Intl.NumberFormat();return y(Zj,{children:[s(Bj,{}),y(Eu,{children:[s(ku,{children:"Mobiles"}),s(Nu,{children:a==null?void 0:a.map((h,m)=>s(Ki,{id:h._id,name:h.name,price:f.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url,data:h}))}),s(_u,{to:"/phone",children:s("button",{children:"See All"})})]}),y(Eu,{children:[s(ku,{children:"Home Appliances"}),s(Nu,{children:l==null?void 0:l.map((h,m)=>s(Ki,{id:h._id,name:h.name,price:f.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url,data:h}))}),s(_u,{to:"/electronics",children:s("button",{children:"See All"})})]}),y(Eu,{children:[s(ku,{children:"Accessories"}),s(Nu,{children:d==null?void 0:d.map((h,m)=>s(Ki,{id:h._id,name:h.name,price:f.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url,data:h}))}),s(_u,{to:"/clothing",children:s("button",{children:"See All"})})]}),y(Eu,{children:[s(ku,{children:"Foodstuffs"}),s(Nu,{children:u==null?void 0:u.map((h,m)=>s(Ki,{id:h._id,name:h.name,price:f.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url,data:h}))}),s(_u,{to:"/food",children:s("button",{children:"See All"})})]})]})},_u=c(be)`
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
`,ku=c.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;
`,Nu=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
`,Eu=c.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  border: 1.9px solid #d975c0;
  padding: 0 10px;
  margin: 20px 0;
  border-radius: 5px;

  
`,Zj=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;function Jj(e){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}}]})(e)}function Xj(e){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"}}]}]})(e)}function eL(e){return Pe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 6.5v3c0 0.276 0.224 0.5 0.5 0.5h15c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5h-15c-0.276 0-0.5 0.224-0.5 0.5z"}}]})(e)}const tL=()=>{C.useState();const e=nt(),t=JSON.parse(localStorage.getItem("user")),n=xi(l=>l.reducers.cartItem),r=n==null?void 0:n.reduce((l,u)=>l+u.qty*u.price,0),i=Za(),o=()=>{t?r>=5e4?e("/checkout"):alert("You must have a total price of ₦50,000 to perform this action"):e("/login-user")};var a=Intl.NumberFormat();return s("div",{children:s(yL,{children:y(mL,{children:[y(cL,{children:[s(pL,{children:"Shopping Cart"}),n==null?void 0:n.map((l,u)=>y(dL,{children:[y(uL,{children:[y(aL,{children:[s(lL,{src:l.avatar[0].url}),s(sL,{children:l.name})]}),y(oL,{children:["₦",a.format(l.price*l.qty)]})]}),y(iL,{children:[y(rL,{onClick:()=>i(dF(l)),children:[s("span",{children:s(Jj,{size:"20px"})}),"Remove"]}),y(nL,{children:[s(M3,{onClick:()=>i(lo(l)),children:s(Xj,{fontWeight:"700"})}),s("span",{children:l.qty}),s(M3,{onClick:()=>i(kf(l)),children:s(eL,{})})]})]})]},u))]}),s(gL,{children:y(hL,{children:[s("span",{children:"SUBTOTAL"}),y("div",{children:["₦",a.format(r)]}),s(fL,{onClick:o,children:" Checkout"})]})})]})})})},M3=c.button`
  padding: 10px 15px;
  border: 0px;
  border-radius: 2px;
  outline: none;

  background-color: #e8559e;
  color: white;
  cursor: pointer
`,nL=c.div`
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

`,rL=c.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  color: #e8559e;
  cursor: pointer;
  span{
    margin-right: 5px;
  }
`,iL=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,oL=c.div`
  font-size: 17px;
  font-weight: 700;

  @media (max-width: 768px){
    font-size: 14px;
  }

  @media (max-width: 400px){
    font-size: 12px;
    font-weight: 600;
  }
`,aL=c.div`
  display: flex;
  /* background-color: gold; */
  margin-right: 10px;
`,sL=c.div`
  font-size: 17px;
  font-weight: 700;

  @media (max-width: 768px){
    font-size: 14px;
    font-weight: 700;
  }

  @media (max-width: 400px){
    font-size: 12px;
    font-weight: 600;
  }
`,lL=c.img`
  /* background-color: gold; */
  width: 90px;
  height: 90px;
  margin-right: 20px;

  @media (max-width: 400px){
    width: 60px;
    height: 60px;
  }
`,uL=c.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`,dL=c.div`
  margin-bottom: 20px;
  border-bottom: 1px solid lightgray;
  padding: 15px;
`,cL=c.div`
  width: 90%;
  background-color: white;
`;c.div`
  width: 130px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
`;const fL=c.button`
  padding: 12px 35px;
  border: 0;
  outline: none;
  background-color: #e8559e;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`,hL=c.div`
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
`,pL=c.div`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 40px;
  margin-left: 15px;
  margin-top: 10px;
`,gL=c.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1.9px solid grey;
  padding: 20px 0;
`,mL=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`,yL=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  background-color: #F1F1F2;
`,vL=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:Xa}),{id:t}=B4(),[n,r]=C.useState(0),i=20,o=n*i,a=e==null?void 0:e.slice(o,o+i),l=a==null?void 0:a.filter(f=>f.category===t||f.name===t||f.brand===t),u=l==null?void 0:l.filter(f=>f.status==="approved");var d=Intl.NumberFormat();return s($L,{children:s(bL,{children:s(xL,{children:u==null?void 0:u.map((f,h)=>s(Ki,{id:f._id,name:f.name,price:d.format(f==null?void 0:f.price),img:f==null?void 0:f.avatar[0].url,data:f}))})})})};c.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;

  @media (max-width: 380px){
    font-size: 18px;
  }
`;const xL=c.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px){
    justify-content: space-between;
  }
`,bL=c.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 10px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: white;

  @media (max-width: 768px){
    width: 95%;
  }
  
`,$L=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  /* background-color: #f1f1f2; */
`,wL=()=>s("div",{children:s(FL,{children:y(RL,{children:[y(AL,{children:[y(SL,{children:[s(CL,{children:s(Ya,{fontSize:"32px",color:"white"})}),y(PL,{children:[y(OL,{children:[" ","Order ",s("span",{children:"05432"})]}),y(_L,{children:[" ","Thank you ",s("span",{children:"Manel"})]})]})]}),y(TL,{children:[y(S0,{children:[s(w0,{children:"Contact"}),s($0,{children:s(j3,{children:"You@example.com"})})]}),y(S0,{children:[s(w0,{children:"Shipping Update"}),s($0,{children:s(j3,{children:"You will get shipping and delivery update by email"})})]}),y(S0,{children:[s(w0,{children:"Customer Information"}),s($0,{children:y(IL,{children:[y(b0,{children:[s(x0,{children:"Contact Information"}),s(v0,{children:"pay@gmail.com"})]}),y(b0,{children:[s(x0,{children:"Shipping Address"}),s(v0,{children:"Location"})]}),y(b0,{children:[s(x0,{children:"Payment Method"}),s(v0,{children:"Location"})]})]})})]}),s(EL,{children:s(NL,{children:"Complete Shipping"})})]})]}),s(kL,{children:s(qm,{})})]})})}),SL=c.div`
  display: flex;
  padding: 0 10px;
`,CL=c.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d975c0;
  border-radius: 7px;
`,PL=c.div`
  padding: 3px 10px;
`,OL=c.div`
  font-weight: lighter;
  font-size: 12px;
`,_L=c.div`
  font-weight: 500;
  font-size: 14px;
  margin-top: 6px;
`,j3=c.div`
  margin-left: 10px;
  font-weight: 600;
  color: #363636;
`,kL=c.div`
  flex: 1;
  height: 100vh;
  border-left: 3px solid lightgray;
  /* background-color: blue; */
`,NL=c.button`
  padding: 15px 20px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;c.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-weight: 600;
    margin-left: 10px;
    color: #3c3c3c;
  }
`;const EL=c.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 10px;
  margin-top: 30px;
`;c.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`;const v0=c.div`
  font-weight: 500;
  margin-right: 20px;
`,x0=c.div`
  font-weight: 700;
`,b0=c.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,IL=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;c.input`
  width: 90%;
  height: 30px;
  border: 0px;
  outline: none;
  margin-left: 10px;
`;const $0=c.div`
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
`,w0=c.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,S0=c.div`
  margin: 10px;
`,TL=c.div`
  width: 90%;
  margin-top: 20px;
`,AL=c.div`
  flex: 1;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: gold; */
`,RL=c.div`
  width: 95%;
  display: flex;
`,FL=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,DL=()=>s(ML,{children:y(jL,{children:[s(LL,{children:s(Ya,{fontSize:"50px",color:"green"})}),y(UL,{children:["Your Order As Been Received",s("br",{})," SuccessFully"]}),s(zL,{to:"/allItems",children:s("button",{children:"Continue"})})]})}),ML=c.div`
  width: 100%;
  height: 42vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`,jL=c.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`,LL=c.div``,zL=c(Ul)`
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
`,UL=c.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,BL=()=>dm([{path:"/",children:[{index:!0,element:s(mP,{})},{path:"/auth",children:[{index:!0,element:s(hA,{})},{path:"signin",element:s($A,{})},{path:"verify",element:s(rj,{})},{path:"information",element:s(TA,{})},{path:"bankdetails",element:s(uj,{})},{path:"businessinfo",element:s(mj,{})},{path:"personalInfo",element:s(Pj,{})},{path:"review",element:s(LD,{})},{path:"acct-review",element:s(YD,{})},{path:"otperror",element:s(rM,{})}]},{path:"/allitems",element:s(ZD,{})},{path:"/payment-review",element:s(DL,{})},{path:"/featured",element:s(Kj,{})},{path:"/:id",element:s(vL,{})},{path:"/checkout",element:s(cM,{})},{path:"/finishshipping",element:s(MM,{})},{path:"/ready-to-ship",element:s(wL,{})},{path:"/cart",element:s(tL,{})},{path:"/detail/:id",element:s(vD,{})},{path:"/payment",children:[{index:!0,element:s(kD,{})}]}]}]);function C0(e){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function HL(e){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(e)}const WL=({myRef:e})=>{const t=JSON.parse(localStorage.getItem("user"));return s("div",{children:y(YL,{ref:e,children:[s(jr,{to:"/electronics",children:"Electronics"}),s(jr,{to:"/phone",children:"Mobile Phones"}),s(jr,{to:"/clothing",children:"Clothing & Fashion"}),s(jr,{to:"/food",children:"Food & Groceries"}),s(jr,{to:"/allitems",children:"All Products"}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),t?s(_a,{children:s(jr,{to:"/",onClick:()=>{localStorage.removeItem("user")},children:"Log Out"})}):y("div",{children:[s(jr,{to:"/signup-user",children:"Create Account"}),s(jr,{to:"/seller-page",children:"Create Seller"})]})]})})},YL=c.div`
 display: none;

 @media (max-width: 1000px){
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
  z-index: 1111;
  transition: all 350ms ease-in-out;

  ::before{
    content: "";
    position: fixed;
    width: 100%;
    height: 100vh;
    /* background-color: #6a69649a; */
    z-index: -1;
  }
  div{
    display: flex;
    flex-direction: column;
  }
 }
`,jr=c(be)`
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
`,L3=({setshow_search:e})=>{const{data:t}=Ke({queryKey:["products"],queryFn:Xa}),[n,r]=C.useState(0),i=t==null?void 0:t.filter(b=>b.status==="approved"),o=20,a=n*o,l=i==null?void 0:i.slice(a,a+o),[u,d]=C.useState(),f=["name","brand","category"],h=b=>{const v=b==null?void 0:b.filter(w=>f.some(x=>{const p=w[x];return typeof p=="string"&&p.toLowerCase().includes(u==null?void 0:u.toLowerCase())}));return u&&v!=null&&v.length?v:null},m=h(l);return y(GL,{children:[y(qL,{children:[s("span",{onClick:()=>e(!1),children:s(Mj,{size:"30px",color:"white"})}),y(KL,{children:[s("input",{placeholder:"Search by name or brand",value:u,onChange:b=>d(b.target.value)}),s("button",{onClick:()=>{h(l)},children:s(Ql,{})})]})]}),s("div",{children:m==null?void 0:m.map((b,v)=>s(QL,{onClick:()=>{e(!1)},children:s(VL,{to:`/${b.name}`,onClick:()=>{d("")},children:b.name})},b._id))})]})},VL=c(be)`
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
`,qL=c.div`
  display: flex;
`,GL=c.div`

  @media (max-width: 768px){
    width: 100%;
    display: flex;
    flex-direction: column;

    span{
      height: 60px;
      /* background-color: gold; */
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px 15px 10px 5px;
      cursor: pointer;
    }
  }
`,QL=c.div`
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
`,KL=c.div`
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
    cursor: pointer;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
    margin-right: 10px;
    input{
      width: 95%;
    }
  }
`,ZL=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[i,o]=C.useState(!1),[a,l]=C.useState(!1),[u,d]=C.useState(!1),f=JSON.parse(localStorage.getItem("user")),h=C.useRef(),m=xi(p=>p.reducers.cartItem),b=nt(),v=()=>{localStorage.removeItem("user"),b("/")},w=()=>{h.current.style.left="0px",o(!0)},x=()=>{h.current.style.left="-1000px",o(!1)};return y("div",{children:[s(oz,{children:y(az,{children:[s(lz,{to:"/",children:y(sz,{children:[s("img",{src:"/logo 1.png"}),s("div",{children:"Cross Africa"})]})}),y(uz,{children:[y(gs,{onMouseOver:()=>{t(!0)},onMouseLeave:()=>{t(!1)},children:[s("div",{children:"Categories"}),s("span",{children:s(cn,{})})]}),e?y(iz,{onMouseOver:()=>{t(!0)},onMouseLeave:()=>{t(!1)},children:[s(be,{to:"/electronics",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Electronics"})}),s(be,{to:"/phone",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Mobile Phones"})}),s(be,{to:"/clothing",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Clothing & Fashion"})}),s(be,{to:"/food",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Food & Groceries"})})]}):null,s(tz,{children:s(L3,{})}),y(gs,{onMouseOver:()=>{r(!0)},onMouseLeave:()=>{r(!1)},children:[s("div",{children:" Account"}),s("span",{children:s(cn,{})})]}),n?s(rz,{onMouseOver:()=>{r(!0)},onMouseLeave:()=>{r(!1)},children:f?s(_a,{children:s(wn,{onClick:v,children:"Log Out"})}):y(_a,{children:[s(be,{to:"/signup-user",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Create Account"})}),s(be,{to:"/seller-page",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Create Seller"})})]})}):null,y(gs,{onClick:()=>{d(!0)},children:[s("div",{children:"Search"}),s("span",{children:s(HL,{})})]}),y(gs,{children:[s(be,{to:"/cart",style:{textDecoration:"none",color:"black"},children:s("div",{children:" Cart"})}),s(be,{to:"/cart",style:{textDecoration:"none",color:"black"},children:y("span",{children:[s(WA,{color:"black"}),m.length>0?s(nz,{children:m.length}):null]})})]}),y(gs,{children:[s("div",{children:"Help"}),s("span",{children:s(Lj,{})})]}),s(XL,{children:s(C0,{size:"20px",onMouseOver:()=>{l(!0)},onMouseLeave:()=>{l(!1)}})}),a?y(JL,{onMouseOver:()=>{l(!0)},onMouseLeave:()=>{l(!1)},children:[s(be,{to:"/electronics",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Electronics"})}),s(be,{to:"/phone",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Mobile Phones"})}),s(be,{to:"/clothing",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Clothing & Fashion"})}),s(be,{to:"/food",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Food & Groceries"})})]}):null,s(dz,{children:i?s(C0,{size:"20px",onClick:x}):s(C0,{size:"20px",onClick:w})}),s("div",{onClick:x,children:s(WL,{myRef:h})})]})]})}),u?s(ez,{children:s(L3,{setshow_search:d})}):null]})},JL=c.div`
  width: 210px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  /* border: 1px solid blue; */
  border-radius: 5px;

  position: absolute;
  top: 65px;
  /* left: 60%; */
  right: 40px;
  z-index: 1111;
  @media (max-width: 768px) {
    display: none;
  }
`,XL=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;    
  @media (max-width: 1000px) {
      display: none;
  }
`,ez=c.div`
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
`,tz=c.div`
  @media (max-width:768px) {
    display: none;
  } 
`,nz=c.main`
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
`,wn=c.div`
  width: 100%;
  padding: 10px 0px;
  /* border-bottom: 1px solid lightgray; */
  cursor: pointer;
  text-align: center;
  font-weight: 600;

  :hover {
    background-color: lightgray;
  }
`,rz=c.div`
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
`,iz=c.div`
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
  top: 70px;
  /* left: 150px; */
  z-index: 1111;

  @media (max-width: 768px) {
    display: none;
  }
`,oz=c.div`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #383333; */
  border-bottom: 1px solid lightgray;

  @media (max-width: 768px) {
    height: 70px;
  }
`,az=c.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`,sz=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,lz=c(be)`
  height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  margin-right: 30px;
  flex: 0.2 0.3 auto;
  text-decoration: none;
  color: black;
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

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;

    img {
      height: 40px;
      width: 40px;
    }
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
  @media (max-width: 414px){
    img{
      width: 30px;
      height: 30px;
    }
    div{
      font-weight: 700;
      font-size: 14px;
    }
  }
  @media (max-width: 283px){
    img{
      width: 20px;
      height: 20px;
    }
    div{
      font-weight: 500;
      font-size: 12px;
    }
  }
`,uz=c.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 85%; */
  flex: 1 0 100px;
  @media (max-width:768px) {
    flex: 0.5;
    align-items: flex-end;
    height: 65px;
  }
  width: 80%;
`,dz=c.div`
  display: none;
  @media (max-width: 1000px) {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    /* background-color: blue; */
    cursor: pointer;    
  }
`,gs=c.div`
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
  :nth-child(4) {
    display: none;
    @media (max-width: 768px) {
      display: flex;
    }
  }

  @media (max-width: 414px){
    div{
      display: none;
    }
  }
`,cz=()=>y("div",{children:[s(ZL,{}),s(BL,{}),s(R4,{})]}),Ve=({children:e})=>{const t=JSON.parse(localStorage.getItem("user"));return(t==null?void 0:t.isSeller)===!0?e:s(MC,{to:"/"})},Lr=({pr:e,da:t,ti:n,bg:r,sales:i,name:o,sales1:a,id:l})=>s(fz,{children:s(hz,{children:s(pz,{children:y(gz,{children:[s(mz,{children:o}),a&&y(z3,{children:["₦",a]}),i&&s(z3,{children:i})]})})})}),fz=c.div`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  margin: 10px;
`,hz=c.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`,pz=c.div`
  width: 85%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`,gz=c.div`
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`,mz=c.div`
  font-size: 16px;
`,z3=c.div`
  font-size: 16px;
`;c.div`
  width: 100%;
  height: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 10px;
`;c.div`
  background-color: yellow;
  width: 60%;
  height: 100%;
`;c.div`
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
`;const rt=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[i,o]=C.useState(!1);return s(wz,{children:s($z,{children:y(bz,{children:[y(U3,{children:[y(ys,{onClick:()=>{t(!0)},children:[s("span",{children:s(WS,{fontSize:"25px",color:"#9661cb"})}),s(ms,{children:"Product"}),s("span",{children:s(cn,{})})]}),e?y(xz,{onClick:()=>{t(!1)},children:[s(on,{to:"/seller-dashboard/all-product",children:"All Products"}),s(on,{to:"/seller-dashboard/live-product",children:"Live Products"}),s(on,{to:"/seller-dashboard/sold-product",children:"Sold Out"}),s(on,{to:"/seller-dashboard/rejected-product",children:"Rejected Products"})]}):null,y(ys,{onClick:()=>{r(!0)},children:[s("span",{children:s(zS,{fontSize:"25px",color:"brown"})}),s(ms,{children:"Orders"}),s("span",{children:s(cn,{})})]}),n?y(vz,{onClick:()=>{r(!1)},children:[s(on,{to:"/seller-dashboard/all-orders",children:"All Orders"}),s(on,{to:"/seller-dashboard/pending-orders",children:"Pending Orders"}),s(on,{to:"/seller-dashboard/ready-to-ship",children:"Ready to Ship"}),s(on,{to:"/seller-dashboard/shipped",children:"Shipped"})]}):null,y(ys,{onClick:()=>{o(!0)},children:[s("span",{children:s(US,{fontSize:"25px",color:"#c05f3e"})}),s(ms,{children:"Completed"}),s("span",{children:s(cn,{})})]}),i?y(yz,{onClick:()=>{o(!1)},children:[s(on,{to:"/seller-dashboard/delivered-orders",children:"Delivard"}),s(on,{to:"/seller-dashboard/cancelled-orders",children:"Cancelled"}),s(on,{to:"/seller-dashboard/failed-orders",children:"Failed"}),s(on,{to:"/seller-dashboard/returned-orders",children:"Returned"})]}):null]}),y(U3,{children:[s(be,{to:"/seller-dashboard/uploads",style:{textDecoration:"none",color:"black"},children:y(ys,{children:[s("span",{children:s(HS,{fontSize:"25px",color:"#47390f"})}),s(ms,{children:"Upload Items"}),s("span",{children:s(cn,{})})]})}),s(be,{to:"/seller-dashboard/transactions",style:{textDecoration:"none",color:"black"},children:y(ys,{children:[s("span",{children:s(BS,{fontSize:"25px",color:"gray"})}),s(ms,{children:"Transactions"}),s("span",{children:s(cn,{})})]})})]})]})})})},U3=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  width: 100%;

  @media (max-width: 600px){
    flex-direction: column;
  }

  /* flex-wrap: wrap; */
`,on=c(be)`
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
`,yz=c.div`
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
`,vz=c.div`
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
`,xz=c.div`
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
 
`,ms=c.div`
  font-size: 12px;
  font-weight: 700;
`,ys=c.div`
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
`;c.div`
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
`;const bz=c.div`
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
`,$z=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`,wz=c.div`
  width: 100%;
  /* height: 60px; */
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 20px; */
`,Sz=()=>{const t=JSON.parse(localStorage.getItem("user"))._id,{data:n}=Ke({queryKey:["products"],queryFn:()=>Gl(t)}),{data:r}=Ke({queryKey:["orders"],queryFn:nr}),i=r==null?void 0:r.filter(v=>{var x;return((x=v==null?void 0:v.products)==null?void 0:x.filter(p=>p.sellerID===t)).length>0}),o=n==null?void 0:n.filter(v=>v.status==="pending").length,a=n==null?void 0:n.filter(v=>v.status==="approved").length,l=n==null?void 0:n.filter(v=>v.status==="cancled").length,u=n==null?void 0:n.filter(v=>v.quantity>0).length,d=i==null?void 0:i.filter(v=>v.delivery_status==="returned").length;new Date().toLocaleDateString();const f=i==null?void 0:i.reduce((v,w)=>v+(w==null?void 0:w.products.reduce((x,p)=>x+p.price*p.quantity,0)),0),h=()=>{let v=0;if(i==null)console.log(i);else for(const w of i)for(const x of w.products)v+=x.price*x.qty;return v},m=h();C.useEffect(()=>{h()},[]);var b=Intl.NumberFormat();return y(Pz,{children:[s(rt,{}),y(Cz,{children:[s(Lr,{pr:`₦${f}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",sales1:b.format(m),name:"Totals Sales"}),s(Lr,{pr:`₦${f}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:o,name:"Pending Products"}),s(Lr,{pr:`₦${f}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:u,name:"Live Products"}),s(Lr,{pr:`₦${f}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:o,name:"Pending Products"}),s(Lr,{pr:`₦${f}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:a,name:"Approved Products"}),s(Lr,{pr:`₦${f}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:l,name:"Cancled Products"}),s(Lr,{pr:`₦${f}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:i==null?void 0:i.length,name:"Orders"}),s(Lr,{pr:`₦${f}`,da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:d,name:"Returned Products"})]})]})},Cz=c.div`
  width: 87%;
  border-top: 1.8px solid grey;
  /* padding: 30px; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #f7f8f9;
`,Pz=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`,Ef=({avatar:e,index:t,name:n,price:r,tag:i,created:o,quantity:a,active:l,rejected:u})=>{const[d,f]=C.useState(!1);return console.log(d),y(Az,{children:[s(sr,{children:y(Tz,{children:[s("span",{children:s(Ez,{src:e})}),n]})}),i&&y(sr,{children:[" ",s(zr,{children:i})]}),o&&y(sr,{children:[" ",s(zr,{children:o})," "]}),r&&y(sr,{children:[s(zr,{children:r})," "]}),a&&s(sr,{children:s(zr,{children:a})}),u&&s(sr,{children:s(zr,{children:u})}),a>0&&s(sr,{children:s(zr,{children:y(B3,{bg:"fff",children:[s(Nz,{}),s("span",{children:"ON"})]})})}),a<=0&&s(sr,{children:s(zr,{children:y(B3,{bg:"",children:[s("span",{children:"OFF"}),s(kz,{})]})})}),s(sr,{children:y(zr,{children:[" ",y(_z,{onClick:()=>{f(!0)},children:[s(Iz,{children:"Edit"}),s("span",{children:s(cn,{})})]}),d?y(Oz,{onClick:()=>{f(!1)},children:[s(be,{to:"/seller-dashboard/edit-image",children:s(P0,{children:"Edit Image"})}),s(be,{to:"/seller-dashboard/edit-image",children:s(P0,{children:"Edit Context"})}),s(P0,{children:"Delete"})]}):null]})})]},t)},P0=c.div`
  width: 100%;
  padding: 10px 0px;
  /* border-bottom: 1px solid lightgray; */
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  color: black;
`,Oz=c.div`
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
`,_z=c.div`
  display: flex;
  align-items: flex-end;
`,B3=c.div`
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
`,kz=c.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
  margin-left: 10px;
`,Nz=c.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
`,Ez=c.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background-color: gold;
  margin-right: 10px;
`,Iz=c.div`
  margin: 5px;
  color: blue;
  border-bottom: 2px solid blue;
  font-weight: 600;
  cursor: pointer;
  span {
    margin-left: 3px;
  }
`;c.div``;const zr=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Tz=c.div`
  display: flex;
  align-items: center;

  :hover {
    color: blue;
  }
  cursor: pointer;
`,sr=c.td`
  padding: 10px 10px;
  font-size: 16px;
  font-weight: 400;
  border-left: 1.5px solid #d0d1d2;
`,Az=c.tr`
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;;
`;//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var G5;function te(){return G5.apply(null,arguments)}function Rz(e){G5=e}function jn(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function to(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function _e(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Qm(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(_e(e,t))return!1;return!0}function Lt(e){return e===void 0}function Nr(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Kl(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Q5(e,t){var n=[],r,i=e.length;for(r=0;r<i;++r)n.push(t(e[r],r));return n}function Jr(e,t){for(var n in t)_e(t,n)&&(e[n]=t[n]);return _e(t,"toString")&&(e.toString=t.toString),_e(t,"valueOf")&&(e.valueOf=t.valueOf),e}function rr(e,t,n,r){return x9(e,t,n,r,!0).utc()}function Fz(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function ye(e){return e._pf==null&&(e._pf=Fz()),e._pf}var Q1;Array.prototype.some?Q1=Array.prototype.some:Q1=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function Km(e){if(e._isValid==null){var t=ye(e),n=Q1.call(t.parsedDateParts,function(i){return i!=null}),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r}return e._isValid}function If(e){var t=rr(NaN);return e!=null?Jr(ye(t),e):ye(t).userInvalidated=!0,t}var H3=te.momentProperties=[],O0=!1;function Zm(e,t){var n,r,i,o=H3.length;if(Lt(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),Lt(t._i)||(e._i=t._i),Lt(t._f)||(e._f=t._f),Lt(t._l)||(e._l=t._l),Lt(t._strict)||(e._strict=t._strict),Lt(t._tzm)||(e._tzm=t._tzm),Lt(t._isUTC)||(e._isUTC=t._isUTC),Lt(t._offset)||(e._offset=t._offset),Lt(t._pf)||(e._pf=ye(t)),Lt(t._locale)||(e._locale=t._locale),o>0)for(n=0;n<o;n++)r=H3[n],i=t[r],Lt(i)||(e[r]=i);return e}function Zl(e){Zm(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),O0===!1&&(O0=!0,te.updateOffset(this),O0=!1)}function Ln(e){return e instanceof Zl||e!=null&&e._isAMomentObject!=null}function K5(e){te.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function xn(e,t){var n=!0;return Jr(function(){if(te.deprecationHandler!=null&&te.deprecationHandler(null,e),n){var r=[],i,o,a,l=arguments.length;for(o=0;o<l;o++){if(i="",typeof arguments[o]=="object"){i+=`
[`+o+"] ";for(a in arguments[0])_e(arguments[0],a)&&(i+=a+": "+arguments[0][a]+", ");i=i.slice(0,-2)}else i=arguments[o];r.push(i)}K5(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var W3={};function Z5(e,t){te.deprecationHandler!=null&&te.deprecationHandler(e,t),W3[e]||(K5(t),W3[e]=!0)}te.suppressDeprecationWarnings=!1;te.deprecationHandler=null;function ir(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Dz(e){var t,n;for(n in e)_e(e,n)&&(t=e[n],ir(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function K1(e,t){var n=Jr({},e),r;for(r in t)_e(t,r)&&(to(e[r])&&to(t[r])?(n[r]={},Jr(n[r],e[r]),Jr(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)_e(e,r)&&!_e(t,r)&&to(e[r])&&(n[r]=Jr({},n[r]));return n}function Jm(e){e!=null&&this.set(e)}var Z1;Object.keys?Z1=Object.keys:Z1=function(e){var t,n=[];for(t in e)_e(e,t)&&n.push(t);return n};var Mz={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function jz(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return ir(r)?r.call(t,n):r}function er(e,t,n){var r=""+Math.abs(e),i=t-r.length,o=e>=0;return(o?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var Xm=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Iu=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,_0={},Ca={};function pe(e,t,n,r){var i=r;typeof r=="string"&&(i=function(){return this[r]()}),e&&(Ca[e]=i),t&&(Ca[t[0]]=function(){return er(i.apply(this,arguments),t[1],t[2])}),n&&(Ca[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function Lz(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function zz(e){var t=e.match(Xm),n,r;for(n=0,r=t.length;n<r;n++)Ca[t[n]]?t[n]=Ca[t[n]]:t[n]=Lz(t[n]);return function(i){var o="",a;for(a=0;a<r;a++)o+=ir(t[a])?t[a].call(i,e):t[a];return o}}function ud(e,t){return e.isValid()?(t=J5(t,e.localeData()),_0[t]=_0[t]||zz(t),_0[t](e)):e.localeData().invalidDate()}function J5(e,t){var n=5;function r(i){return t.longDateFormat(i)||i}for(Iu.lastIndex=0;n>=0&&Iu.test(e);)e=e.replace(Iu,r),Iu.lastIndex=0,n-=1;return e}var Uz={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Bz(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(Xm).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var Hz="Invalid date";function Wz(){return this._invalidDate}var Yz="%d",Vz=/\d{1,2}/;function qz(e){return this._ordinal.replace("%d",e)}var Gz={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Qz(e,t,n,r){var i=this._relativeTime[n];return ir(i)?i(e,t,n,r):i.replace(/%d/i,e)}function Kz(e,t){var n=this._relativeTime[e>0?"future":"past"];return ir(n)?n(t):n.replace(/%s/i,t)}var Hs={};function Nt(e,t){var n=e.toLowerCase();Hs[n]=Hs[n+"s"]=Hs[t]=e}function bn(e){return typeof e=="string"?Hs[e]||Hs[e.toLowerCase()]:void 0}function ey(e){var t={},n,r;for(r in e)_e(e,r)&&(n=bn(r),n&&(t[n]=e[r]));return t}var X5={};function Et(e,t){X5[e]=t}function Zz(e){var t=[],n;for(n in e)_e(e,n)&&t.push({unit:n,priority:X5[n]});return t.sort(function(r,i){return r.priority-i.priority}),t}function Tf(e){return e%4===0&&e%100!==0||e%400===0}function dn(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function xe(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=dn(t)),n}function es(e,t){return function(n){return n!=null?(e9(this,e,n),te.updateOffset(this,t),this):vc(this,e)}}function vc(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function e9(e,t,n){e.isValid()&&!isNaN(n)&&(t==="FullYear"&&Tf(e.year())&&e.month()===1&&e.date()===29?(n=xe(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),jf(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Jz(e){return e=bn(e),ir(this[e])?this[e]():this}function Xz(e,t){if(typeof e=="object"){e=ey(e);var n=Zz(e),r,i=n.length;for(r=0;r<i;r++)this[n[r].unit](e[n[r].unit])}else if(e=bn(e),ir(this[e]))return this[e](t);return this}var t9=/\d/,tn=/\d\d/,n9=/\d{3}/,ty=/\d{4}/,Af=/[+-]?\d{6}/,Be=/\d\d?/,r9=/\d\d\d\d?/,i9=/\d\d\d\d\d\d?/,Rf=/\d{1,3}/,ny=/\d{1,4}/,Ff=/[+-]?\d{1,6}/,ts=/\d+/,Df=/[+-]?\d+/,eU=/Z|[+-]\d\d:?\d\d/gi,Mf=/Z|[+-]\d\d(?::?\d\d)?/gi,tU=/[+-]?\d+(\.\d{1,3})?/,Jl=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,xc;xc={};function ue(e,t,n){xc[e]=ir(t)?t:function(r,i){return r&&n?n:t}}function nU(e,t){return _e(xc,e)?xc[e](t._strict,t._locale):new RegExp(rU(e))}function rU(e){return qt(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,i,o){return n||r||i||o}))}function qt(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var J1={};function Re(e,t){var n,r=t,i;for(typeof e=="string"&&(e=[e]),Nr(t)&&(r=function(o,a){a[t]=xe(o)}),i=e.length,n=0;n<i;n++)J1[e[n]]=r}function Xl(e,t){Re(e,function(n,r,i,o){i._w=i._w||{},t(n,i._w,i,o)})}function iU(e,t,n){t!=null&&_e(J1,e)&&J1[e](t,n._a,n,e)}var _t=0,vr=1,Gn=2,ut=3,An=4,xr=5,Zi=6,oU=7,aU=8;function sU(e,t){return(e%t+t)%t}var et;Array.prototype.indexOf?et=Array.prototype.indexOf:et=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function jf(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=sU(t,12);return e+=(t-n)/12,n===1?Tf(e)?29:28:31-n%7%2}pe("M",["MM",2],"Mo",function(){return this.month()+1});pe("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});pe("MMMM",0,0,function(e){return this.localeData().months(this,e)});Nt("month","M");Et("month",8);ue("M",Be);ue("MM",Be,tn);ue("MMM",function(e,t){return t.monthsShortRegex(e)});ue("MMMM",function(e,t){return t.monthsRegex(e)});Re(["M","MM"],function(e,t){t[vr]=xe(e)-1});Re(["MMM","MMMM"],function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);i!=null?t[vr]=i:ye(n).invalidMonth=e});var lU="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),o9="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),a9=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,uU=Jl,dU=Jl;function cU(e,t){return e?jn(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||a9).test(t)?"format":"standalone"][e.month()]:jn(this._months)?this._months:this._months.standalone}function fU(e,t){return e?jn(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[a9.test(t)?"format":"standalone"][e.month()]:jn(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function hU(e,t,n){var r,i,o,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)o=rr([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(o,"").toLocaleLowerCase();return n?t==="MMM"?(i=et.call(this._shortMonthsParse,a),i!==-1?i:null):(i=et.call(this._longMonthsParse,a),i!==-1?i:null):t==="MMM"?(i=et.call(this._shortMonthsParse,a),i!==-1?i:(i=et.call(this._longMonthsParse,a),i!==-1?i:null)):(i=et.call(this._longMonthsParse,a),i!==-1?i:(i=et.call(this._shortMonthsParse,a),i!==-1?i:null))}function pU(e,t,n){var r,i,o;if(this._monthsParseExact)return hU.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=rr([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(o="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(o.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function s9(e,t){var n;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=xe(t);else if(t=e.localeData().monthsParse(t),!Nr(t))return e}return n=Math.min(e.date(),jf(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function l9(e){return e!=null?(s9(this,e),te.updateOffset(this,!0),this):vc(this,"Month")}function gU(){return jf(this.year(),this.month())}function mU(e){return this._monthsParseExact?(_e(this,"_monthsRegex")||u9.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(_e(this,"_monthsShortRegex")||(this._monthsShortRegex=uU),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function yU(e){return this._monthsParseExact?(_e(this,"_monthsRegex")||u9.call(this),e?this._monthsStrictRegex:this._monthsRegex):(_e(this,"_monthsRegex")||(this._monthsRegex=dU),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function u9(){function e(a,l){return l.length-a.length}var t=[],n=[],r=[],i,o;for(i=0;i<12;i++)o=rr([2e3,i]),t.push(this.monthsShort(o,"")),n.push(this.months(o,"")),r.push(this.months(o,"")),r.push(this.monthsShort(o,""));for(t.sort(e),n.sort(e),r.sort(e),i=0;i<12;i++)t[i]=qt(t[i]),n[i]=qt(n[i]);for(i=0;i<24;i++)r[i]=qt(r[i]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}pe("Y",0,0,function(){var e=this.year();return e<=9999?er(e,4):"+"+e});pe(0,["YY",2],0,function(){return this.year()%100});pe(0,["YYYY",4],0,"year");pe(0,["YYYYY",5],0,"year");pe(0,["YYYYYY",6,!0],0,"year");Nt("year","y");Et("year",1);ue("Y",Df);ue("YY",Be,tn);ue("YYYY",ny,ty);ue("YYYYY",Ff,Af);ue("YYYYYY",Ff,Af);Re(["YYYYY","YYYYYY"],_t);Re("YYYY",function(e,t){t[_t]=e.length===2?te.parseTwoDigitYear(e):xe(e)});Re("YY",function(e,t){t[_t]=te.parseTwoDigitYear(e)});Re("Y",function(e,t){t[_t]=parseInt(e,10)});function Ws(e){return Tf(e)?366:365}te.parseTwoDigitYear=function(e){return xe(e)+(xe(e)>68?1900:2e3)};var d9=es("FullYear",!0);function vU(){return Tf(this.year())}function xU(e,t,n,r,i,o,a){var l;return e<100&&e>=0?(l=new Date(e+400,t,n,r,i,o,a),isFinite(l.getFullYear())&&l.setFullYear(e)):l=new Date(e,t,n,r,i,o,a),l}function $l(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function bc(e,t,n){var r=7+t-n,i=(7+$l(e,0,r).getUTCDay()-t)%7;return-i+r-1}function c9(e,t,n,r,i){var o=(7+n-r)%7,a=bc(e,r,i),l=1+7*(t-1)+o+a,u,d;return l<=0?(u=e-1,d=Ws(u)+l):l>Ws(e)?(u=e+1,d=l-Ws(e)):(u=e,d=l),{year:u,dayOfYear:d}}function wl(e,t,n){var r=bc(e.year(),t,n),i=Math.floor((e.dayOfYear()-r-1)/7)+1,o,a;return i<1?(a=e.year()-1,o=i+wr(a,t,n)):i>wr(e.year(),t,n)?(o=i-wr(e.year(),t,n),a=e.year()+1):(a=e.year(),o=i),{week:o,year:a}}function wr(e,t,n){var r=bc(e,t,n),i=bc(e+1,t,n);return(Ws(e)-r+i)/7}pe("w",["ww",2],"wo","week");pe("W",["WW",2],"Wo","isoWeek");Nt("week","w");Nt("isoWeek","W");Et("week",5);Et("isoWeek",5);ue("w",Be);ue("ww",Be,tn);ue("W",Be);ue("WW",Be,tn);Xl(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=xe(e)});function bU(e){return wl(e,this._week.dow,this._week.doy).week}var $U={dow:0,doy:6};function wU(){return this._week.dow}function SU(){return this._week.doy}function CU(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function PU(e){var t=wl(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}pe("d",0,"do","day");pe("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});pe("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});pe("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});pe("e",0,0,"weekday");pe("E",0,0,"isoWeekday");Nt("day","d");Nt("weekday","e");Nt("isoWeekday","E");Et("day",11);Et("weekday",11);Et("isoWeekday",11);ue("d",Be);ue("e",Be);ue("E",Be);ue("dd",function(e,t){return t.weekdaysMinRegex(e)});ue("ddd",function(e,t){return t.weekdaysShortRegex(e)});ue("dddd",function(e,t){return t.weekdaysRegex(e)});Xl(["dd","ddd","dddd"],function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);i!=null?t.d=i:ye(n).invalidWeekday=e});Xl(["d","e","E"],function(e,t,n,r){t[r]=xe(e)});function OU(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function _U(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function ry(e,t){return e.slice(t,7).concat(e.slice(0,t))}var kU="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),f9="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),NU="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),EU=Jl,IU=Jl,TU=Jl;function AU(e,t){var n=jn(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?ry(n,this._week.dow):e?n[e.day()]:n}function RU(e){return e===!0?ry(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function FU(e){return e===!0?ry(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function DU(e,t,n){var r,i,o,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)o=rr([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(o,"").toLocaleLowerCase();return n?t==="dddd"?(i=et.call(this._weekdaysParse,a),i!==-1?i:null):t==="ddd"?(i=et.call(this._shortWeekdaysParse,a),i!==-1?i:null):(i=et.call(this._minWeekdaysParse,a),i!==-1?i:null):t==="dddd"?(i=et.call(this._weekdaysParse,a),i!==-1||(i=et.call(this._shortWeekdaysParse,a),i!==-1)?i:(i=et.call(this._minWeekdaysParse,a),i!==-1?i:null)):t==="ddd"?(i=et.call(this._shortWeekdaysParse,a),i!==-1||(i=et.call(this._weekdaysParse,a),i!==-1)?i:(i=et.call(this._minWeekdaysParse,a),i!==-1?i:null)):(i=et.call(this._minWeekdaysParse,a),i!==-1||(i=et.call(this._weekdaysParse,a),i!==-1)?i:(i=et.call(this._shortWeekdaysParse,a),i!==-1?i:null))}function MU(e,t,n){var r,i,o;if(this._weekdaysParseExact)return DU.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=rr([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(o="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(o.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function jU(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=OU(e,this.localeData()),this.add(e-t,"d")):t}function LU(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function zU(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=_U(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function UU(e){return this._weekdaysParseExact?(_e(this,"_weekdaysRegex")||iy.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(_e(this,"_weekdaysRegex")||(this._weekdaysRegex=EU),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function BU(e){return this._weekdaysParseExact?(_e(this,"_weekdaysRegex")||iy.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(_e(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=IU),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function HU(e){return this._weekdaysParseExact?(_e(this,"_weekdaysRegex")||iy.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(_e(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=TU),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function iy(){function e(f,h){return h.length-f.length}var t=[],n=[],r=[],i=[],o,a,l,u,d;for(o=0;o<7;o++)a=rr([2e3,1]).day(o),l=qt(this.weekdaysMin(a,"")),u=qt(this.weekdaysShort(a,"")),d=qt(this.weekdays(a,"")),t.push(l),n.push(u),r.push(d),i.push(l),i.push(u),i.push(d);t.sort(e),n.sort(e),r.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function oy(){return this.hours()%12||12}function WU(){return this.hours()||24}pe("H",["HH",2],0,"hour");pe("h",["hh",2],0,oy);pe("k",["kk",2],0,WU);pe("hmm",0,0,function(){return""+oy.apply(this)+er(this.minutes(),2)});pe("hmmss",0,0,function(){return""+oy.apply(this)+er(this.minutes(),2)+er(this.seconds(),2)});pe("Hmm",0,0,function(){return""+this.hours()+er(this.minutes(),2)});pe("Hmmss",0,0,function(){return""+this.hours()+er(this.minutes(),2)+er(this.seconds(),2)});function h9(e,t){pe(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}h9("a",!0);h9("A",!1);Nt("hour","h");Et("hour",13);function p9(e,t){return t._meridiemParse}ue("a",p9);ue("A",p9);ue("H",Be);ue("h",Be);ue("k",Be);ue("HH",Be,tn);ue("hh",Be,tn);ue("kk",Be,tn);ue("hmm",r9);ue("hmmss",i9);ue("Hmm",r9);ue("Hmmss",i9);Re(["H","HH"],ut);Re(["k","kk"],function(e,t,n){var r=xe(e);t[ut]=r===24?0:r});Re(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});Re(["h","hh"],function(e,t,n){t[ut]=xe(e),ye(n).bigHour=!0});Re("hmm",function(e,t,n){var r=e.length-2;t[ut]=xe(e.substr(0,r)),t[An]=xe(e.substr(r)),ye(n).bigHour=!0});Re("hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[ut]=xe(e.substr(0,r)),t[An]=xe(e.substr(r,2)),t[xr]=xe(e.substr(i)),ye(n).bigHour=!0});Re("Hmm",function(e,t,n){var r=e.length-2;t[ut]=xe(e.substr(0,r)),t[An]=xe(e.substr(r))});Re("Hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[ut]=xe(e.substr(0,r)),t[An]=xe(e.substr(r,2)),t[xr]=xe(e.substr(i))});function YU(e){return(e+"").toLowerCase().charAt(0)==="p"}var VU=/[ap]\.?m?\.?/i,qU=es("Hours",!0);function GU(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var g9={calendar:Mz,longDateFormat:Uz,invalidDate:Hz,ordinal:Yz,dayOfMonthOrdinalParse:Vz,relativeTime:Gz,months:lU,monthsShort:o9,week:$U,weekdays:kU,weekdaysMin:NU,weekdaysShort:f9,meridiemParse:VU},He={},vs={},Sl;function QU(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function Y3(e){return e&&e.toLowerCase().replace("_","-")}function KU(e){for(var t=0,n,r,i,o;t<e.length;){for(o=Y3(e[t]).split("-"),n=o.length,r=Y3(e[t+1]),r=r?r.split("-"):null;n>0;){if(i=Lf(o.slice(0,n).join("-")),i)return i;if(r&&r.length>=n&&QU(o,r)>=n-1)break;n--}t++}return Sl}function ZU(e){return e.match("^[^/\\\\]*$")!=null}function Lf(e){var t=null,n;if(He[e]===void 0&&typeof yd<"u"&&yd&&yd.exports&&ZU(e))try{t=Sl._abbr,n=require,n("./locale/"+e),pi(t)}catch{He[e]=null}return He[e]}function pi(e,t){var n;return e&&(Lt(t)?n=Ar(e):n=ay(e,t),n?Sl=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Sl._abbr}function ay(e,t){if(t!==null){var n,r=g9;if(t.abbr=e,He[e]!=null)Z5("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=He[e]._config;else if(t.parentLocale!=null)if(He[t.parentLocale]!=null)r=He[t.parentLocale]._config;else if(n=Lf(t.parentLocale),n!=null)r=n._config;else return vs[t.parentLocale]||(vs[t.parentLocale]=[]),vs[t.parentLocale].push({name:e,config:t}),null;return He[e]=new Jm(K1(r,t)),vs[e]&&vs[e].forEach(function(i){ay(i.name,i.config)}),pi(e),He[e]}else return delete He[e],null}function JU(e,t){if(t!=null){var n,r,i=g9;He[e]!=null&&He[e].parentLocale!=null?He[e].set(K1(He[e]._config,t)):(r=Lf(e),r!=null&&(i=r._config),t=K1(i,t),r==null&&(t.abbr=e),n=new Jm(t),n.parentLocale=He[e],He[e]=n),pi(e)}else He[e]!=null&&(He[e].parentLocale!=null?(He[e]=He[e].parentLocale,e===pi()&&pi(e)):He[e]!=null&&delete He[e]);return He[e]}function Ar(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Sl;if(!jn(e)){if(t=Lf(e),t)return t;e=[e]}return KU(e)}function XU(){return Z1(He)}function sy(e){var t,n=e._a;return n&&ye(e).overflow===-2&&(t=n[vr]<0||n[vr]>11?vr:n[Gn]<1||n[Gn]>jf(n[_t],n[vr])?Gn:n[ut]<0||n[ut]>24||n[ut]===24&&(n[An]!==0||n[xr]!==0||n[Zi]!==0)?ut:n[An]<0||n[An]>59?An:n[xr]<0||n[xr]>59?xr:n[Zi]<0||n[Zi]>999?Zi:-1,ye(e)._overflowDayOfYear&&(t<_t||t>Gn)&&(t=Gn),ye(e)._overflowWeeks&&t===-1&&(t=oU),ye(e)._overflowWeekday&&t===-1&&(t=aU),ye(e).overflow=t),e}var eB=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,tB=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,nB=/Z|[+-]\d\d(?::?\d\d)?/,Tu=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],k0=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],rB=/^\/?Date\((-?\d+)/i,iB=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,oB={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function m9(e){var t,n,r=e._i,i=eB.exec(r)||tB.exec(r),o,a,l,u,d=Tu.length,f=k0.length;if(i){for(ye(e).iso=!0,t=0,n=d;t<n;t++)if(Tu[t][1].exec(i[1])){a=Tu[t][0],o=Tu[t][2]!==!1;break}if(a==null){e._isValid=!1;return}if(i[3]){for(t=0,n=f;t<n;t++)if(k0[t][1].exec(i[3])){l=(i[2]||" ")+k0[t][0];break}if(l==null){e._isValid=!1;return}}if(!o&&l!=null){e._isValid=!1;return}if(i[4])if(nB.exec(i[4]))u="Z";else{e._isValid=!1;return}e._f=a+(l||"")+(u||""),uy(e)}else e._isValid=!1}function aB(e,t,n,r,i,o){var a=[sB(e),o9.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return o&&a.push(parseInt(o,10)),a}function sB(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function lB(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function uB(e,t,n){if(e){var r=f9.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(r!==i)return ye(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function dB(e,t,n){if(e)return oB[e];if(t)return 0;var r=parseInt(n,10),i=r%100,o=(r-i)/100;return o*60+i}function y9(e){var t=iB.exec(lB(e._i)),n;if(t){if(n=aB(t[4],t[3],t[2],t[5],t[6],t[7]),!uB(t[1],n,e))return;e._a=n,e._tzm=dB(t[8],t[9],t[10]),e._d=$l.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),ye(e).rfc2822=!0}else e._isValid=!1}function cB(e){var t=rB.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(m9(e),e._isValid===!1)delete e._isValid;else return;if(y9(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:te.createFromInputFallback(e)}te.createFromInputFallback=xn("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Ko(e,t,n){return e??t??n}function fB(e){var t=new Date(te.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function ly(e){var t,n,r=[],i,o,a;if(!e._d){for(i=fB(e),e._w&&e._a[Gn]==null&&e._a[vr]==null&&hB(e),e._dayOfYear!=null&&(a=Ko(e._a[_t],i[_t]),(e._dayOfYear>Ws(a)||e._dayOfYear===0)&&(ye(e)._overflowDayOfYear=!0),n=$l(a,0,e._dayOfYear),e._a[vr]=n.getUTCMonth(),e._a[Gn]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=i[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[ut]===24&&e._a[An]===0&&e._a[xr]===0&&e._a[Zi]===0&&(e._nextDay=!0,e._a[ut]=0),e._d=(e._useUTC?$l:xU).apply(null,r),o=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ut]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==o&&(ye(e).weekdayMismatch=!0)}}function hB(e){var t,n,r,i,o,a,l,u,d;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(o=1,a=4,n=Ko(t.GG,e._a[_t],wl(Ue(),1,4).year),r=Ko(t.W,1),i=Ko(t.E,1),(i<1||i>7)&&(u=!0)):(o=e._locale._week.dow,a=e._locale._week.doy,d=wl(Ue(),o,a),n=Ko(t.gg,e._a[_t],d.year),r=Ko(t.w,d.week),t.d!=null?(i=t.d,(i<0||i>6)&&(u=!0)):t.e!=null?(i=t.e+o,(t.e<0||t.e>6)&&(u=!0)):i=o),r<1||r>wr(n,o,a)?ye(e)._overflowWeeks=!0:u!=null?ye(e)._overflowWeekday=!0:(l=c9(n,r,i,o,a),e._a[_t]=l.year,e._dayOfYear=l.dayOfYear)}te.ISO_8601=function(){};te.RFC_2822=function(){};function uy(e){if(e._f===te.ISO_8601){m9(e);return}if(e._f===te.RFC_2822){y9(e);return}e._a=[],ye(e).empty=!0;var t=""+e._i,n,r,i,o,a,l=t.length,u=0,d,f;for(i=J5(e._f,e._locale).match(Xm)||[],f=i.length,n=0;n<f;n++)o=i[n],r=(t.match(nU(o,e))||[])[0],r&&(a=t.substr(0,t.indexOf(r)),a.length>0&&ye(e).unusedInput.push(a),t=t.slice(t.indexOf(r)+r.length),u+=r.length),Ca[o]?(r?ye(e).empty=!1:ye(e).unusedTokens.push(o),iU(o,r,e)):e._strict&&!r&&ye(e).unusedTokens.push(o);ye(e).charsLeftOver=l-u,t.length>0&&ye(e).unusedInput.push(t),e._a[ut]<=12&&ye(e).bigHour===!0&&e._a[ut]>0&&(ye(e).bigHour=void 0),ye(e).parsedDateParts=e._a.slice(0),ye(e).meridiem=e._meridiem,e._a[ut]=pB(e._locale,e._a[ut],e._meridiem),d=ye(e).era,d!==null&&(e._a[_t]=e._locale.erasConvertYear(d,e._a[_t])),ly(e),sy(e)}function pB(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function gB(e){var t,n,r,i,o,a,l=!1,u=e._f.length;if(u===0){ye(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<u;i++)o=0,a=!1,t=Zm({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[i],uy(t),Km(t)&&(a=!0),o+=ye(t).charsLeftOver,o+=ye(t).unusedTokens.length*10,ye(t).score=o,l?o<r&&(r=o,n=t):(r==null||o<r||a)&&(r=o,n=t,a&&(l=!0));Jr(e,n||t)}function mB(e){if(!e._d){var t=ey(e._i),n=t.day===void 0?t.date:t.day;e._a=Q5([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),ly(e)}}function yB(e){var t=new Zl(sy(v9(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function v9(e){var t=e._i,n=e._f;return e._locale=e._locale||Ar(e._l),t===null||n===void 0&&t===""?If({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),Ln(t)?new Zl(sy(t)):(Kl(t)?e._d=t:jn(n)?gB(e):n?uy(e):vB(e),Km(e)||(e._d=null),e))}function vB(e){var t=e._i;Lt(t)?e._d=new Date(te.now()):Kl(t)?e._d=new Date(t.valueOf()):typeof t=="string"?cB(e):jn(t)?(e._a=Q5(t.slice(0),function(n){return parseInt(n,10)}),ly(e)):to(t)?mB(e):Nr(t)?e._d=new Date(t):te.createFromInputFallback(e)}function x9(e,t,n,r,i){var o={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(to(e)&&Qm(e)||jn(e)&&e.length===0)&&(e=void 0),o._isAMomentObject=!0,o._useUTC=o._isUTC=i,o._l=n,o._i=e,o._f=t,o._strict=r,yB(o)}function Ue(e,t,n,r){return x9(e,t,n,r,!1)}var xB=xn("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ue.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:If()}),bB=xn("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ue.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:If()});function b9(e,t){var n,r;if(t.length===1&&jn(t[0])&&(t=t[0]),!t.length)return Ue();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function $B(){var e=[].slice.call(arguments,0);return b9("isBefore",e)}function wB(){var e=[].slice.call(arguments,0);return b9("isAfter",e)}var SB=function(){return Date.now?Date.now():+new Date},xs=["year","quarter","month","week","day","hour","minute","second","millisecond"];function CB(e){var t,n=!1,r,i=xs.length;for(t in e)if(_e(e,t)&&!(et.call(xs,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<i;++r)if(e[xs[r]]){if(n)return!1;parseFloat(e[xs[r]])!==xe(e[xs[r]])&&(n=!0)}return!0}function PB(){return this._isValid}function OB(){return Un(NaN)}function zf(e){var t=ey(e),n=t.year||0,r=t.quarter||0,i=t.month||0,o=t.week||t.isoWeek||0,a=t.day||0,l=t.hour||0,u=t.minute||0,d=t.second||0,f=t.millisecond||0;this._isValid=CB(t),this._milliseconds=+f+d*1e3+u*6e4+l*1e3*60*60,this._days=+a+o*7,this._months=+i+r*3+n*12,this._data={},this._locale=Ar(),this._bubble()}function dd(e){return e instanceof zf}function X1(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function _B(e,t,n){var r=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),o=0,a;for(a=0;a<r;a++)(n&&e[a]!==t[a]||!n&&xe(e[a])!==xe(t[a]))&&o++;return o+i}function $9(e,t){pe(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+er(~~(n/60),2)+t+er(~~n%60,2)})}$9("Z",":");$9("ZZ","");ue("Z",Mf);ue("ZZ",Mf);Re(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=dy(Mf,e)});var kB=/([\+\-]|\d\d)/gi;function dy(e,t){var n=(t||"").match(e),r,i,o;return n===null?null:(r=n[n.length-1]||[],i=(r+"").match(kB)||["-",0,0],o=+(i[1]*60)+xe(i[2]),o===0?0:i[0]==="+"?o:-o)}function cy(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(Ln(e)||Kl(e)?e.valueOf():Ue(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),te.updateOffset(n,!1),n):Ue(e).local()}function eg(e){return-Math.round(e._d.getTimezoneOffset())}te.updateOffset=function(){};function NB(e,t,n){var r=this._offset||0,i;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=dy(Mf,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(i=eg(this)),this._offset=e,this._isUTC=!0,i!=null&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?C9(this,Un(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,te.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:eg(this)}function EB(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function IB(e){return this.utcOffset(0,e)}function TB(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(eg(this),"m")),this}function AB(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=dy(eU,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function RB(e){return this.isValid()?(e=e?Ue(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function FB(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function DB(){if(!Lt(this._isDSTShifted))return this._isDSTShifted;var e={},t;return Zm(e,this),e=v9(e),e._a?(t=e._isUTC?rr(e._a):Ue(e._a),this._isDSTShifted=this.isValid()&&_B(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function MB(){return this.isValid()?!this._isUTC:!1}function jB(){return this.isValid()?this._isUTC:!1}function w9(){return this.isValid()?this._isUTC&&this._offset===0:!1}var LB=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,zB=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Un(e,t){var n=e,r=null,i,o,a;return dd(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:Nr(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=LB.exec(e))?(i=r[1]==="-"?-1:1,n={y:0,d:xe(r[Gn])*i,h:xe(r[ut])*i,m:xe(r[An])*i,s:xe(r[xr])*i,ms:xe(X1(r[Zi]*1e3))*i}):(r=zB.exec(e))?(i=r[1]==="-"?-1:1,n={y:Ii(r[2],i),M:Ii(r[3],i),w:Ii(r[4],i),d:Ii(r[5],i),h:Ii(r[6],i),m:Ii(r[7],i),s:Ii(r[8],i)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(a=UB(Ue(n.from),Ue(n.to)),n={},n.ms=a.milliseconds,n.M=a.months),o=new zf(n),dd(e)&&_e(e,"_locale")&&(o._locale=e._locale),dd(e)&&_e(e,"_isValid")&&(o._isValid=e._isValid),o}Un.fn=zf.prototype;Un.invalid=OB;function Ii(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function V3(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function UB(e,t){var n;return e.isValid()&&t.isValid()?(t=cy(t,e),e.isBefore(t)?n=V3(e,t):(n=V3(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function S9(e,t){return function(n,r){var i,o;return r!==null&&!isNaN(+r)&&(Z5(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),o=n,n=r,r=o),i=Un(n,r),C9(this,i,e),this}}function C9(e,t,n,r){var i=t._milliseconds,o=X1(t._days),a=X1(t._months);e.isValid()&&(r=r??!0,a&&s9(e,vc(e,"Month")+a*n),o&&e9(e,"Date",vc(e,"Date")+o*n),i&&e._d.setTime(e._d.valueOf()+i*n),r&&te.updateOffset(e,o||a))}var BB=S9(1,"add"),HB=S9(-1,"subtract");function P9(e){return typeof e=="string"||e instanceof String}function WB(e){return Ln(e)||Kl(e)||P9(e)||Nr(e)||VB(e)||YB(e)||e===null||e===void 0}function YB(e){var t=to(e)&&!Qm(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,o,a=r.length;for(i=0;i<a;i+=1)o=r[i],n=n||_e(e,o);return t&&n}function VB(e){var t=jn(e),n=!1;return t&&(n=e.filter(function(r){return!Nr(r)&&P9(e)}).length===0),t&&n}function qB(e){var t=to(e)&&!Qm(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,o;for(i=0;i<r.length;i+=1)o=r[i],n=n||_e(e,o);return t&&n}function GB(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function QB(e,t){arguments.length===1&&(arguments[0]?WB(arguments[0])?(e=arguments[0],t=void 0):qB(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||Ue(),r=cy(n,this).startOf("day"),i=te.calendarFormat(this,r)||"sameElse",o=t&&(ir(t[i])?t[i].call(this,n):t[i]);return this.format(o||this.localeData().calendar(i,this,Ue(n)))}function KB(){return new Zl(this)}function ZB(e,t){var n=Ln(e)?e:Ue(e);return this.isValid()&&n.isValid()?(t=bn(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function JB(e,t){var n=Ln(e)?e:Ue(e);return this.isValid()&&n.isValid()?(t=bn(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function XB(e,t,n,r){var i=Ln(e)?e:Ue(e),o=Ln(t)?t:Ue(t);return this.isValid()&&i.isValid()&&o.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(i,n):!this.isBefore(i,n))&&(r[1]===")"?this.isBefore(o,n):!this.isAfter(o,n))):!1}function eH(e,t){var n=Ln(e)?e:Ue(e),r;return this.isValid()&&n.isValid()?(t=bn(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function tH(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function nH(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function rH(e,t,n){var r,i,o;if(!this.isValid())return NaN;if(r=cy(e,this),!r.isValid())return NaN;switch(i=(r.utcOffset()-this.utcOffset())*6e4,t=bn(t),t){case"year":o=cd(this,r)/12;break;case"month":o=cd(this,r);break;case"quarter":o=cd(this,r)/3;break;case"second":o=(this-r)/1e3;break;case"minute":o=(this-r)/6e4;break;case"hour":o=(this-r)/36e5;break;case"day":o=(this-r-i)/864e5;break;case"week":o=(this-r-i)/6048e5;break;default:o=this-r}return n?o:dn(o)}function cd(e,t){if(e.date()<t.date())return-cd(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),i,o;return t-r<0?(i=e.clone().add(n-1,"months"),o=(t-r)/(r-i)):(i=e.clone().add(n+1,"months"),o=(t-r)/(i-r)),-(n+o)||0}te.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";te.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function iH(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function oH(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?ud(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):ir(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",ud(n,"Z")):ud(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function aH(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,i,o;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",o=t+'[")]',this.format(n+r+i+o)}function sH(e){e||(e=this.isUtc()?te.defaultFormatUtc:te.defaultFormat);var t=ud(this,e);return this.localeData().postformat(t)}function lH(e,t){return this.isValid()&&(Ln(e)&&e.isValid()||Ue(e).isValid())?Un({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function uH(e){return this.from(Ue(),e)}function dH(e,t){return this.isValid()&&(Ln(e)&&e.isValid()||Ue(e).isValid())?Un({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function cH(e){return this.to(Ue(),e)}function O9(e){var t;return e===void 0?this._locale._abbr:(t=Ar(e),t!=null&&(this._locale=t),this)}var _9=xn("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function k9(){return this._locale}var $c=1e3,Pa=60*$c,wc=60*Pa,N9=(365*400+97)*24*wc;function Oa(e,t){return(e%t+t)%t}function E9(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-N9:new Date(e,t,n).valueOf()}function I9(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-N9:Date.UTC(e,t,n)}function fH(e){var t,n;if(e=bn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?I9:E9,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=Oa(t+(this._isUTC?0:this.utcOffset()*Pa),wc);break;case"minute":t=this._d.valueOf(),t-=Oa(t,Pa);break;case"second":t=this._d.valueOf(),t-=Oa(t,$c);break}return this._d.setTime(t),te.updateOffset(this,!0),this}function hH(e){var t,n;if(e=bn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?I9:E9,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=wc-Oa(t+(this._isUTC?0:this.utcOffset()*Pa),wc)-1;break;case"minute":t=this._d.valueOf(),t+=Pa-Oa(t,Pa)-1;break;case"second":t=this._d.valueOf(),t+=$c-Oa(t,$c)-1;break}return this._d.setTime(t),te.updateOffset(this,!0),this}function pH(){return this._d.valueOf()-(this._offset||0)*6e4}function gH(){return Math.floor(this.valueOf()/1e3)}function mH(){return new Date(this.valueOf())}function yH(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function vH(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function xH(){return this.isValid()?this.toISOString():null}function bH(){return Km(this)}function $H(){return Jr({},ye(this))}function wH(){return ye(this).overflow}function SH(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}pe("N",0,0,"eraAbbr");pe("NN",0,0,"eraAbbr");pe("NNN",0,0,"eraAbbr");pe("NNNN",0,0,"eraName");pe("NNNNN",0,0,"eraNarrow");pe("y",["y",1],"yo","eraYear");pe("y",["yy",2],0,"eraYear");pe("y",["yyy",3],0,"eraYear");pe("y",["yyyy",4],0,"eraYear");ue("N",fy);ue("NN",fy);ue("NNN",fy);ue("NNNN",RH);ue("NNNNN",FH);Re(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var i=n._locale.erasParse(e,r,n._strict);i?ye(n).era=i:ye(n).invalidEra=e});ue("y",ts);ue("yy",ts);ue("yyy",ts);ue("yyyy",ts);ue("yo",DH);Re(["y","yy","yyy","yyyy"],_t);Re(["yo"],function(e,t,n,r){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[_t]=n._locale.eraYearOrdinalParse(e,i):t[_t]=parseInt(e,10)});function CH(e,t){var n,r,i,o=this._eras||Ar("en")._eras;for(n=0,r=o.length;n<r;++n){switch(typeof o[n].since){case"string":i=te(o[n].since).startOf("day"),o[n].since=i.valueOf();break}switch(typeof o[n].until){case"undefined":o[n].until=1/0;break;case"string":i=te(o[n].until).startOf("day").valueOf(),o[n].until=i.valueOf();break}}return o}function PH(e,t,n){var r,i,o=this.eras(),a,l,u;for(e=e.toUpperCase(),r=0,i=o.length;r<i;++r)if(a=o[r].name.toUpperCase(),l=o[r].abbr.toUpperCase(),u=o[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(l===e)return o[r];break;case"NNNN":if(a===e)return o[r];break;case"NNNNN":if(u===e)return o[r];break}else if([a,l,u].indexOf(e)>=0)return o[r]}function OH(e,t){var n=e.since<=e.until?1:-1;return t===void 0?te(e.since).year():te(e.since).year()+(t-e.offset)*n}function _H(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function kH(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function NH(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function EH(){var e,t,n,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(n=i[e].since<=i[e].until?1:-1,r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return(this.year()-te(i[e].since).year())*n+i[e].offset;return this.year()}function IH(e){return _e(this,"_erasNameRegex")||hy.call(this),e?this._erasNameRegex:this._erasRegex}function TH(e){return _e(this,"_erasAbbrRegex")||hy.call(this),e?this._erasAbbrRegex:this._erasRegex}function AH(e){return _e(this,"_erasNarrowRegex")||hy.call(this),e?this._erasNarrowRegex:this._erasRegex}function fy(e,t){return t.erasAbbrRegex(e)}function RH(e,t){return t.erasNameRegex(e)}function FH(e,t){return t.erasNarrowRegex(e)}function DH(e,t){return t._eraYearOrdinalRegex||ts}function hy(){var e=[],t=[],n=[],r=[],i,o,a=this.eras();for(i=0,o=a.length;i<o;++i)t.push(qt(a[i].name)),e.push(qt(a[i].abbr)),n.push(qt(a[i].narrow)),r.push(qt(a[i].name)),r.push(qt(a[i].abbr)),r.push(qt(a[i].narrow));this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}pe(0,["gg",2],0,function(){return this.weekYear()%100});pe(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Uf(e,t){pe(0,[e,e.length],0,t)}Uf("gggg","weekYear");Uf("ggggg","weekYear");Uf("GGGG","isoWeekYear");Uf("GGGGG","isoWeekYear");Nt("weekYear","gg");Nt("isoWeekYear","GG");Et("weekYear",1);Et("isoWeekYear",1);ue("G",Df);ue("g",Df);ue("GG",Be,tn);ue("gg",Be,tn);ue("GGGG",ny,ty);ue("gggg",ny,ty);ue("GGGGG",Ff,Af);ue("ggggg",Ff,Af);Xl(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=xe(e)});Xl(["gg","GG"],function(e,t,n,r){t[r]=te.parseTwoDigitYear(e)});function MH(e){return T9.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function jH(e){return T9.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function LH(){return wr(this.year(),1,4)}function zH(){return wr(this.isoWeekYear(),1,4)}function UH(){var e=this.localeData()._week;return wr(this.year(),e.dow,e.doy)}function BH(){var e=this.localeData()._week;return wr(this.weekYear(),e.dow,e.doy)}function T9(e,t,n,r,i){var o;return e==null?wl(this,r,i).year:(o=wr(e,r,i),t>o&&(t=o),HH.call(this,e,t,n,r,i))}function HH(e,t,n,r,i){var o=c9(e,t,n,r,i),a=$l(o.year,0,o.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}pe("Q",0,"Qo","quarter");Nt("quarter","Q");Et("quarter",7);ue("Q",t9);Re("Q",function(e,t){t[vr]=(xe(e)-1)*3});function WH(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}pe("D",["DD",2],"Do","date");Nt("date","D");Et("date",9);ue("D",Be);ue("DD",Be,tn);ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});Re(["D","DD"],Gn);Re("Do",function(e,t){t[Gn]=xe(e.match(Be)[0])});var A9=es("Date",!0);pe("DDD",["DDDD",3],"DDDo","dayOfYear");Nt("dayOfYear","DDD");Et("dayOfYear",4);ue("DDD",Rf);ue("DDDD",n9);Re(["DDD","DDDD"],function(e,t,n){n._dayOfYear=xe(e)});function YH(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}pe("m",["mm",2],0,"minute");Nt("minute","m");Et("minute",14);ue("m",Be);ue("mm",Be,tn);Re(["m","mm"],An);var VH=es("Minutes",!1);pe("s",["ss",2],0,"second");Nt("second","s");Et("second",15);ue("s",Be);ue("ss",Be,tn);Re(["s","ss"],xr);var qH=es("Seconds",!1);pe("S",0,0,function(){return~~(this.millisecond()/100)});pe(0,["SS",2],0,function(){return~~(this.millisecond()/10)});pe(0,["SSS",3],0,"millisecond");pe(0,["SSSS",4],0,function(){return this.millisecond()*10});pe(0,["SSSSS",5],0,function(){return this.millisecond()*100});pe(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});pe(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});pe(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});pe(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});Nt("millisecond","ms");Et("millisecond",16);ue("S",Rf,t9);ue("SS",Rf,tn);ue("SSS",Rf,n9);var Xr,R9;for(Xr="SSSS";Xr.length<=9;Xr+="S")ue(Xr,ts);function GH(e,t){t[Zi]=xe(("0."+e)*1e3)}for(Xr="S";Xr.length<=9;Xr+="S")Re(Xr,GH);R9=es("Milliseconds",!1);pe("z",0,0,"zoneAbbr");pe("zz",0,0,"zoneName");function QH(){return this._isUTC?"UTC":""}function KH(){return this._isUTC?"Coordinated Universal Time":""}var Z=Zl.prototype;Z.add=BB;Z.calendar=QB;Z.clone=KB;Z.diff=rH;Z.endOf=hH;Z.format=sH;Z.from=lH;Z.fromNow=uH;Z.to=dH;Z.toNow=cH;Z.get=Jz;Z.invalidAt=wH;Z.isAfter=ZB;Z.isBefore=JB;Z.isBetween=XB;Z.isSame=eH;Z.isSameOrAfter=tH;Z.isSameOrBefore=nH;Z.isValid=bH;Z.lang=_9;Z.locale=O9;Z.localeData=k9;Z.max=bB;Z.min=xB;Z.parsingFlags=$H;Z.set=Xz;Z.startOf=fH;Z.subtract=HB;Z.toArray=yH;Z.toObject=vH;Z.toDate=mH;Z.toISOString=oH;Z.inspect=aH;typeof Symbol<"u"&&Symbol.for!=null&&(Z[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});Z.toJSON=xH;Z.toString=iH;Z.unix=gH;Z.valueOf=pH;Z.creationData=SH;Z.eraName=_H;Z.eraNarrow=kH;Z.eraAbbr=NH;Z.eraYear=EH;Z.year=d9;Z.isLeapYear=vU;Z.weekYear=MH;Z.isoWeekYear=jH;Z.quarter=Z.quarters=WH;Z.month=l9;Z.daysInMonth=gU;Z.week=Z.weeks=CU;Z.isoWeek=Z.isoWeeks=PU;Z.weeksInYear=UH;Z.weeksInWeekYear=BH;Z.isoWeeksInYear=LH;Z.isoWeeksInISOWeekYear=zH;Z.date=A9;Z.day=Z.days=jU;Z.weekday=LU;Z.isoWeekday=zU;Z.dayOfYear=YH;Z.hour=Z.hours=qU;Z.minute=Z.minutes=VH;Z.second=Z.seconds=qH;Z.millisecond=Z.milliseconds=R9;Z.utcOffset=NB;Z.utc=IB;Z.local=TB;Z.parseZone=AB;Z.hasAlignedHourOffset=RB;Z.isDST=FB;Z.isLocal=MB;Z.isUtcOffset=jB;Z.isUtc=w9;Z.isUTC=w9;Z.zoneAbbr=QH;Z.zoneName=KH;Z.dates=xn("dates accessor is deprecated. Use date instead.",A9);Z.months=xn("months accessor is deprecated. Use month instead",l9);Z.years=xn("years accessor is deprecated. Use year instead",d9);Z.zone=xn("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",EB);Z.isDSTShifted=xn("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",DB);function ZH(e){return Ue(e*1e3)}function JH(){return Ue.apply(null,arguments).parseZone()}function F9(e){return e}var ke=Jm.prototype;ke.calendar=jz;ke.longDateFormat=Bz;ke.invalidDate=Wz;ke.ordinal=qz;ke.preparse=F9;ke.postformat=F9;ke.relativeTime=Qz;ke.pastFuture=Kz;ke.set=Dz;ke.eras=CH;ke.erasParse=PH;ke.erasConvertYear=OH;ke.erasAbbrRegex=TH;ke.erasNameRegex=IH;ke.erasNarrowRegex=AH;ke.months=cU;ke.monthsShort=fU;ke.monthsParse=pU;ke.monthsRegex=yU;ke.monthsShortRegex=mU;ke.week=bU;ke.firstDayOfYear=SU;ke.firstDayOfWeek=wU;ke.weekdays=AU;ke.weekdaysMin=FU;ke.weekdaysShort=RU;ke.weekdaysParse=MU;ke.weekdaysRegex=UU;ke.weekdaysShortRegex=BU;ke.weekdaysMinRegex=HU;ke.isPM=YU;ke.meridiem=GU;function Sc(e,t,n,r){var i=Ar(),o=rr().set(r,t);return i[n](o,e)}function D9(e,t,n){if(Nr(e)&&(t=e,e=void 0),e=e||"",t!=null)return Sc(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=Sc(e,r,n,"month");return i}function py(e,t,n,r){typeof e=="boolean"?(Nr(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,Nr(t)&&(n=t,t=void 0),t=t||"");var i=Ar(),o=e?i._week.dow:0,a,l=[];if(n!=null)return Sc(t,(n+o)%7,r,"day");for(a=0;a<7;a++)l[a]=Sc(t,(a+o)%7,r,"day");return l}function XH(e,t){return D9(e,t,"months")}function eW(e,t){return D9(e,t,"monthsShort")}function tW(e,t,n){return py(e,t,n,"weekdays")}function nW(e,t,n){return py(e,t,n,"weekdaysShort")}function rW(e,t,n){return py(e,t,n,"weekdaysMin")}pi("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=xe(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});te.lang=xn("moment.lang is deprecated. Use moment.locale instead.",pi);te.langData=xn("moment.langData is deprecated. Use moment.localeData instead.",Ar);var lr=Math.abs;function iW(){var e=this._data;return this._milliseconds=lr(this._milliseconds),this._days=lr(this._days),this._months=lr(this._months),e.milliseconds=lr(e.milliseconds),e.seconds=lr(e.seconds),e.minutes=lr(e.minutes),e.hours=lr(e.hours),e.months=lr(e.months),e.years=lr(e.years),this}function M9(e,t,n,r){var i=Un(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function oW(e,t){return M9(this,e,t,1)}function aW(e,t){return M9(this,e,t,-1)}function q3(e){return e<0?Math.floor(e):Math.ceil(e)}function sW(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,i,o,a,l,u;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=q3(tg(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,i=dn(e/1e3),r.seconds=i%60,o=dn(i/60),r.minutes=o%60,a=dn(o/60),r.hours=a%24,t+=dn(a/24),u=dn(j9(t)),n+=u,t-=q3(tg(u)),l=dn(n/12),n%=12,r.days=t,r.months=n,r.years=l,this}function j9(e){return e*4800/146097}function tg(e){return e*146097/4800}function lW(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=bn(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+j9(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(tg(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function uW(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+xe(this._months/12)*31536e6:NaN}function Rr(e){return function(){return this.as(e)}}var dW=Rr("ms"),cW=Rr("s"),fW=Rr("m"),hW=Rr("h"),pW=Rr("d"),gW=Rr("w"),mW=Rr("M"),yW=Rr("Q"),vW=Rr("y");function xW(){return Un(this)}function bW(e){return e=bn(e),this.isValid()?this[e+"s"]():NaN}function po(e){return function(){return this.isValid()?this._data[e]:NaN}}var $W=po("milliseconds"),wW=po("seconds"),SW=po("minutes"),CW=po("hours"),PW=po("days"),OW=po("months"),_W=po("years");function kW(){return dn(this.days()/7)}var fr=Math.round,ha={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function NW(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function EW(e,t,n,r){var i=Un(e).abs(),o=fr(i.as("s")),a=fr(i.as("m")),l=fr(i.as("h")),u=fr(i.as("d")),d=fr(i.as("M")),f=fr(i.as("w")),h=fr(i.as("y")),m=o<=n.ss&&["s",o]||o<n.s&&["ss",o]||a<=1&&["m"]||a<n.m&&["mm",a]||l<=1&&["h"]||l<n.h&&["hh",l]||u<=1&&["d"]||u<n.d&&["dd",u];return n.w!=null&&(m=m||f<=1&&["w"]||f<n.w&&["ww",f]),m=m||d<=1&&["M"]||d<n.M&&["MM",d]||h<=1&&["y"]||["yy",h],m[2]=t,m[3]=+e>0,m[4]=r,NW.apply(null,m)}function IW(e){return e===void 0?fr:typeof e=="function"?(fr=e,!0):!1}function TW(e,t){return ha[e]===void 0?!1:t===void 0?ha[e]:(ha[e]=t,e==="s"&&(ha.ss=t-1),!0)}function AW(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=ha,i,o;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},ha,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),i=this.localeData(),o=EW(this,!n,r,i),n&&(o=i.pastFuture(+this,o)),i.postformat(o)}var N0=Math.abs;function Co(e){return(e>0)-(e<0)||+e}function Bf(){if(!this.isValid())return this.localeData().invalidDate();var e=N0(this._milliseconds)/1e3,t=N0(this._days),n=N0(this._months),r,i,o,a,l=this.asSeconds(),u,d,f,h;return l?(r=dn(e/60),i=dn(r/60),e%=60,r%=60,o=dn(n/12),n%=12,a=e?e.toFixed(3).replace(/\.?0+$/,""):"",u=l<0?"-":"",d=Co(this._months)!==Co(l)?"-":"",f=Co(this._days)!==Co(l)?"-":"",h=Co(this._milliseconds)!==Co(l)?"-":"",u+"P"+(o?d+o+"Y":"")+(n?d+n+"M":"")+(t?f+t+"D":"")+(i||r||e?"T":"")+(i?h+i+"H":"")+(r?h+r+"M":"")+(e?h+a+"S":"")):"P0D"}var we=zf.prototype;we.isValid=PB;we.abs=iW;we.add=oW;we.subtract=aW;we.as=lW;we.asMilliseconds=dW;we.asSeconds=cW;we.asMinutes=fW;we.asHours=hW;we.asDays=pW;we.asWeeks=gW;we.asMonths=mW;we.asQuarters=yW;we.asYears=vW;we.valueOf=uW;we._bubble=sW;we.clone=xW;we.get=bW;we.milliseconds=$W;we.seconds=wW;we.minutes=SW;we.hours=CW;we.days=PW;we.weeks=kW;we.months=OW;we.years=_W;we.humanize=AW;we.toISOString=Bf;we.toString=Bf;we.toJSON=Bf;we.locale=O9;we.localeData=k9;we.toIsoString=xn("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Bf);we.lang=_9;pe("X",0,0,"unix");pe("x",0,0,"valueOf");ue("x",Df);ue("X",tU);Re("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});Re("x",function(e,t,n){n._d=new Date(xe(e))});//! moment.js
te.version="2.29.4";Rz(Ue);te.fn=Z;te.min=$B;te.max=wB;te.now=SB;te.utc=rr;te.unix=ZH;te.months=XH;te.isDate=Kl;te.locale=pi;te.invalid=If;te.duration=Un;te.isMoment=Ln;te.weekdays=tW;te.parseZone=JH;te.localeData=Ar;te.isDuration=dd;te.monthsShort=eW;te.weekdaysMin=rW;te.defineLocale=ay;te.updateLocale=JU;te.locales=XU;te.weekdaysShort=nW;te.normalizeUnits=bn;te.relativeTimeRounding=IW;te.relativeTimeThreshold=TW;te.calendarFormat=GB;te.prototype=Z;te.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const RW=[{_id:"1",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"David",tag_No:"123",created:"2 may 2022",quantity:0,active:!1,price:100},{_id:"2",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:0,active:!1,price:100},{_id:"3",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"4",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"5",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"6",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"7",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"1",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"8",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100}];var ng={},FW={get exports(){return ng},set exports(e){ng=e}};(function(e,t){(function(n,r){e.exports=r(C)})(q9,n=>(()=>{var r={703:(l,u,d)=>{var f=d(414);function h(){}function m(){}m.resetWarningCache=h,l.exports=function(){function b(x,p,g,$,S,P){if(P!==f){var N=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw N.name="Invariant Violation",N}}function v(){return b}b.isRequired=b;var w={array:b,bigint:b,bool:b,func:b,number:b,object:b,string:b,symbol:b,any:b,arrayOf:v,element:b,elementType:b,instanceOf:v,node:b,objectOf:v,oneOf:v,oneOfType:v,shape:v,exact:v,checkPropTypes:m,resetWarningCache:h};return w.PropTypes=w,w}},697:(l,u,d)=>{l.exports=d(703)()},414:l=>{l.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:l=>{l.exports=n}},i={};function o(l){var u=i[l];if(u!==void 0)return u.exports;var d=i[l]={exports:{}};return r[l](d,d.exports,o),d.exports}o.n=l=>{var u=l&&l.__esModule?()=>l.default:()=>l;return o.d(u,{a:u}),u},o.d=(l,u)=>{for(var d in u)o.o(u,d)&&!o.o(l,d)&&Object.defineProperty(l,d,{enumerable:!0,get:u[d]})},o.o=(l,u)=>Object.prototype.hasOwnProperty.call(l,u),o.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var a={};return(()=>{o.r(a),o.d(a,{default:()=>se});var l=o(98),u=o.n(l),d=o(697),f=o.n(d);function h(){return h=Object.assign?Object.assign.bind():function(M){for(var j=1;j<arguments.length;j++){var X=arguments[j];for(var F in X)Object.prototype.hasOwnProperty.call(X,F)&&(M[F]=X[F])}return M},h.apply(this,arguments)}var m=function(M){var j=M.pageClassName,X=M.pageLinkClassName,F=M.page,ee=M.selected,re=M.activeClassName,z=M.activeLinkClassName,_=M.getEventListener,k=M.pageSelectedHandler,U=M.href,D=M.extraAriaContext,H=M.pageLabelBuilder,V=M.rel,ie=M.ariaLabel||"Page "+F+(D?" "+D:""),I=null;return ee&&(I="page",ie=M.ariaLabel||"Page "+F+" is your current page",j=j!==void 0?j+" "+re:re,X!==void 0?z!==void 0&&(X=X+" "+z):X=z),u().createElement("li",{className:j},u().createElement("a",h({rel:V,role:U?void 0:"button",className:X,href:U,tabIndex:ee?"-1":"0","aria-label":ie,"aria-current":I,onKeyPress:k},_(k)),H(F)))};m.propTypes={pageSelectedHandler:f().func.isRequired,selected:f().bool.isRequired,pageClassName:f().string,pageLinkClassName:f().string,activeClassName:f().string,activeLinkClassName:f().string,extraAriaContext:f().string,href:f().string,ariaLabel:f().string,page:f().number.isRequired,getEventListener:f().func.isRequired,pageLabelBuilder:f().func.isRequired,rel:f().string};const b=m;function v(){return v=Object.assign?Object.assign.bind():function(M){for(var j=1;j<arguments.length;j++){var X=arguments[j];for(var F in X)Object.prototype.hasOwnProperty.call(X,F)&&(M[F]=X[F])}return M},v.apply(this,arguments)}var w=function(M){var j=M.breakLabel,X=M.breakAriaLabel,F=M.breakClassName,ee=M.breakLinkClassName,re=M.breakHandler,z=M.getEventListener,_=F||"break";return u().createElement("li",{className:_},u().createElement("a",v({className:ee,role:"button",tabIndex:"0","aria-label":X,onKeyPress:re},z(re)),j))};w.propTypes={breakLabel:f().oneOfType([f().string,f().node]),breakAriaLabel:f().string,breakClassName:f().string,breakLinkClassName:f().string,breakHandler:f().func.isRequired,getEventListener:f().func.isRequired};const x=w;function p(M){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return M??j}function g(M){return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(j){return typeof j}:function(j){return j&&typeof Symbol=="function"&&j.constructor===Symbol&&j!==Symbol.prototype?"symbol":typeof j},g(M)}function $(){return $=Object.assign?Object.assign.bind():function(M){for(var j=1;j<arguments.length;j++){var X=arguments[j];for(var F in X)Object.prototype.hasOwnProperty.call(X,F)&&(M[F]=X[F])}return M},$.apply(this,arguments)}function S(M,j){for(var X=0;X<j.length;X++){var F=j[X];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(M,F.key,F)}}function P(M,j){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(X,F){return X.__proto__=F,X},P(M,j)}function N(M,j){if(j&&(g(j)==="object"||typeof j=="function"))return j;if(j!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return T(M)}function T(M){if(M===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}function R(M){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(j){return j.__proto__||Object.getPrototypeOf(j)},R(M)}function W(M,j,X){return j in M?Object.defineProperty(M,j,{value:X,enumerable:!0,configurable:!0,writable:!0}):M[j]=X,M}var L=function(M){(function(_,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function");_.prototype=Object.create(k&&k.prototype,{constructor:{value:_,writable:!0,configurable:!0}}),Object.defineProperty(_,"prototype",{writable:!1}),k&&P(_,k)})(z,M);var j,X,F,ee,re=(F=z,ee=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var _,k=R(F);if(ee){var U=R(this).constructor;_=Reflect.construct(k,arguments,U)}else _=k.apply(this,arguments);return N(this,_)});function z(_){var k,U;return function(D,H){if(!(D instanceof H))throw new TypeError("Cannot call a class as a function")}(this,z),W(T(k=re.call(this,_)),"handlePreviousPage",function(D){var H=k.state.selected;k.handleClick(D,null,H>0?H-1:void 0,{isPrevious:!0})}),W(T(k),"handleNextPage",function(D){var H=k.state.selected,V=k.props.pageCount;k.handleClick(D,null,H<V-1?H+1:void 0,{isNext:!0})}),W(T(k),"handlePageSelected",function(D,H){if(k.state.selected===D)return k.callActiveCallback(D),void k.handleClick(H,null,void 0,{isActive:!0});k.handleClick(H,null,D)}),W(T(k),"handlePageChange",function(D){k.state.selected!==D&&(k.setState({selected:D}),k.callCallback(D))}),W(T(k),"getEventListener",function(D){return W({},k.props.eventListener,D)}),W(T(k),"handleClick",function(D,H,V){var ie=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},I=ie.isPrevious,G=I!==void 0&&I,Y=ie.isNext,Oe=Y!==void 0&&Y,me=ie.isBreak,ge=me!==void 0&&me,he=ie.isActive,Ne=he!==void 0&&he;D.preventDefault?D.preventDefault():D.returnValue=!1;var De=k.state.selected,fe=k.props.onClick,O=V;if(fe){var E=fe({index:H,selected:De,nextSelectedPage:V,event:D,isPrevious:G,isNext:Oe,isBreak:ge,isActive:Ne});if(E===!1)return;Number.isInteger(E)&&(O=E)}O!==void 0&&k.handlePageChange(O)}),W(T(k),"handleBreakClick",function(D,H){var V=k.state.selected;k.handleClick(H,D,V<D?k.getForwardJump():k.getBackwardJump(),{isBreak:!0})}),W(T(k),"callCallback",function(D){k.props.onPageChange!==void 0&&typeof k.props.onPageChange=="function"&&k.props.onPageChange({selected:D})}),W(T(k),"callActiveCallback",function(D){k.props.onPageActive!==void 0&&typeof k.props.onPageActive=="function"&&k.props.onPageActive({selected:D})}),W(T(k),"getElementPageRel",function(D){var H=k.state.selected,V=k.props,ie=V.nextPageRel,I=V.prevPageRel,G=V.selectedPageRel;return H-1===D?I:H===D?G:H+1===D?ie:void 0}),W(T(k),"pagination",function(){var D=[],H=k.props,V=H.pageRangeDisplayed,ie=H.pageCount,I=H.marginPagesDisplayed,G=H.breakLabel,Y=H.breakClassName,Oe=H.breakLinkClassName,me=H.breakAriaLabels,ge=k.state.selected;if(ie<=V)for(var he=0;he<ie;he++)D.push(k.getPageElement(he));else{var Ne=V/2,De=V-Ne;ge>ie-V/2?Ne=V-(De=ie-ge):ge<V/2&&(De=V-(Ne=ge));var fe,O,E=function(q){return k.getPageElement(q)},A=[];for(fe=0;fe<ie;fe++){var oe=fe+1;if(oe<=I)A.push({type:"page",index:fe,display:E(fe)});else if(oe>ie-I)A.push({type:"page",index:fe,display:E(fe)});else if(fe>=ge-Ne&&fe<=ge+(ge===0&&V>1?De-1:De))A.push({type:"page",index:fe,display:E(fe)});else if(G&&A.length>0&&A[A.length-1].display!==O&&(V>0||I>0)){var K=fe<ge?me.backward:me.forward;O=u().createElement(x,{key:fe,breakAriaLabel:K,breakLabel:G,breakClassName:Y,breakLinkClassName:Oe,breakHandler:k.handleBreakClick.bind(null,fe),getEventListener:k.getEventListener}),A.push({type:"break",index:fe,display:O})}}A.forEach(function(q,ae){var ve=q;q.type==="break"&&A[ae-1]&&A[ae-1].type==="page"&&A[ae+1]&&A[ae+1].type==="page"&&A[ae+1].index-A[ae-1].index<=2&&(ve={type:"page",index:q.index,display:E(q.index)}),D.push(ve.display)})}return D}),_.initialPage!==void 0&&_.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(_.initialPage,") and forcePage (").concat(_.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),U=_.initialPage?_.initialPage:_.forcePage?_.forcePage:0,k.state={selected:U},k}return j=z,(X=[{key:"componentDidMount",value:function(){var _=this.props,k=_.initialPage,U=_.disableInitialCallback,D=_.extraAriaContext,H=_.pageCount,V=_.forcePage;k===void 0||U||this.callCallback(k),D&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(H)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(H,"). Did you forget a Math.ceil()?")),k!==void 0&&k>H-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(k," > ").concat(H-1,").")),V!==void 0&&V>H-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(V," > ").concat(H-1,")."))}},{key:"componentDidUpdate",value:function(_){this.props.forcePage!==void 0&&this.props.forcePage!==_.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(_.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var _=this.state.selected,k=this.props,U=k.pageCount,D=_+k.pageRangeDisplayed;return D>=U?U-1:D}},{key:"getBackwardJump",value:function(){var _=this.state.selected-this.props.pageRangeDisplayed;return _<0?0:_}},{key:"getElementHref",value:function(_){var k=this.props,U=k.hrefBuilder,D=k.pageCount,H=k.hrefAllControls;if(U)return H||_>=0&&_<D?U(_+1,D,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(_){var k=_===this.state.selected;if(this.props.ariaLabelBuilder&&_>=0&&_<this.props.pageCount){var U=this.props.ariaLabelBuilder(_+1,k);return this.props.extraAriaContext&&!k&&(U=U+" "+this.props.extraAriaContext),U}}},{key:"getPageElement",value:function(_){var k=this.state.selected,U=this.props,D=U.pageClassName,H=U.pageLinkClassName,V=U.activeClassName,ie=U.activeLinkClassName,I=U.extraAriaContext,G=U.pageLabelBuilder;return u().createElement(b,{key:_,pageSelectedHandler:this.handlePageSelected.bind(null,_),selected:k===_,rel:this.getElementPageRel(_),pageClassName:D,pageLinkClassName:H,activeClassName:V,activeLinkClassName:ie,extraAriaContext:I,href:this.getElementHref(_),ariaLabel:this.ariaLabelBuilder(_),page:_+1,pageLabelBuilder:G,getEventListener:this.getEventListener})}},{key:"render",value:function(){var _=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&_!==void 0)return _&&_(this.props);var k=this.props,U=k.disabledClassName,D=k.disabledLinkClassName,H=k.pageCount,V=k.className,ie=k.containerClassName,I=k.previousLabel,G=k.previousClassName,Y=k.previousLinkClassName,Oe=k.previousAriaLabel,me=k.prevRel,ge=k.nextLabel,he=k.nextClassName,Ne=k.nextLinkClassName,De=k.nextAriaLabel,fe=k.nextRel,O=this.state.selected,E=O===0,A=O===H-1,oe="".concat(p(G)).concat(E?" ".concat(p(U)):""),K="".concat(p(he)).concat(A?" ".concat(p(U)):""),q="".concat(p(Y)).concat(E?" ".concat(p(D)):""),ae="".concat(p(Ne)).concat(A?" ".concat(p(D)):""),ve=E?"true":"false",le=A?"true":"false";return u().createElement("ul",{className:V||ie,role:"navigation","aria-label":"Pagination"},u().createElement("li",{className:oe},u().createElement("a",$({className:q,href:this.getElementHref(O-1),tabIndex:E?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":ve,"aria-label":Oe,rel:me},this.getEventListener(this.handlePreviousPage)),I)),this.pagination(),u().createElement("li",{className:K},u().createElement("a",$({className:ae,href:this.getElementHref(O+1),tabIndex:A?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":le,"aria-label":De,rel:fe},this.getEventListener(this.handleNextPage)),ge)))}}])&&S(j.prototype,X),Object.defineProperty(j,"prototype",{writable:!1}),z}(l.Component);W(L,"propTypes",{pageCount:f().number.isRequired,pageRangeDisplayed:f().number,marginPagesDisplayed:f().number,previousLabel:f().node,previousAriaLabel:f().string,prevPageRel:f().string,prevRel:f().string,nextLabel:f().node,nextAriaLabel:f().string,nextPageRel:f().string,nextRel:f().string,breakLabel:f().oneOfType([f().string,f().node]),breakAriaLabels:f().shape({forward:f().string,backward:f().string}),hrefBuilder:f().func,hrefAllControls:f().bool,onPageChange:f().func,onPageActive:f().func,onClick:f().func,initialPage:f().number,forcePage:f().number,disableInitialCallback:f().bool,containerClassName:f().string,className:f().string,pageClassName:f().string,pageLinkClassName:f().string,pageLabelBuilder:f().func,activeClassName:f().string,activeLinkClassName:f().string,previousClassName:f().string,nextClassName:f().string,previousLinkClassName:f().string,nextLinkClassName:f().string,disabledClassName:f().string,disabledLinkClassName:f().string,breakClassName:f().string,breakLinkClassName:f().string,extraAriaContext:f().string,ariaLabelBuilder:f().func,eventListener:f().string,renderOnZeroPageCount:f().func,selectedPageRel:f().string}),W(L,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(M){return M},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const se=L})(),a})())})(FW);const nn=sb(ng),DW=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["posts"],queryFn:()=>Gl(t)}),[r,i]=C.useState(0),o=6,a=r*o,l=Math.ceil((n==null?void 0:n.length)/o),u=n==null?void 0:n.slice(a,a+o),d=({selected:x})=>{i(x)};console.log(n);const[f,h]=C.useState(""),m=["name","brand","tag"],b=x=>{const p=x==null?void 0:x.filter(g=>m.some($=>{const S=g[$];return typeof S=="string"&&S.toLowerCase().includes(f)}));return f?p!=null&&p.length?p:null:x},v=b(u);var w=Intl.NumberFormat();return y(LW,{children:[s(rt,{}),y(zW,{children:[s(UW,{children:"All Products"}),y(MW,{children:[s("input",{placeholder:"Search by name or brand",value:f,onChange:x=>h(x.target.value)}),s("button",{onClick:b,children:s(Ql,{})})]})]}),s(jW,{children:y(HW,{children:[y(BW,{children:[s(Ai,{children:s(Ti,{children:"Product "})}),s(Ai,{children:s(Ti,{children:"Tag "})}),s(Ai,{children:s(Ti,{children:"Created"})}),s(Ai,{children:s(Ti,{children:"Price"})}),s(Ai,{children:s(Ti,{children:"Aval / Qty "})}),s(Ai,{children:s(Ti,{children:"Active "})}),y(Ai,{children:[s(Ti,{children:"Action "})," "]})]}),v==null?void 0:v.map((x,p)=>s(Ef,{index:p,avatar:x==null?void 0:x.avatar[0].url,name:x.name,tag:x.tag_No,created:te(x.createdAt).format("D MMM YYYY"),quantity:x.quantity,active:x.active,price:w.format(x.price)},p))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:l,onPageChange:d,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active"})]})},MW=c.div`
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
`,jW=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,LW=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,zW=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,UW=c.div`
  border-bottom: 2px solid blue;
`,Ti=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Ai=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,BW=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,HW=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,WW=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["posts"],queryFn:()=>Gl(t)}),r=n.filter(x=>x.active===!0),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),f=({selected:x})=>{o(x)};console.log(n);const[h,m]=C.useState("");console.log(h);const b=["name","brand","tag"],v=x=>{const p=x==null?void 0:x.filter(g=>b.some($=>{const S=g[$];return typeof S=="string"&&S.toLowerCase().includes(h)}));return h?p!=null&&p.length?p:null:x};v(d);var w=Intl.NumberFormat();return y(qW,{children:[s(rt,{}),y(GW,{children:[s(QW,{children:"Live Products"}),y(YW,{children:[s("input",{placeholder:"Search by name or brand",value:h,onChange:x=>m(x.target.value)}),s("button",{onClick:v,children:s(Ql,{})})]})]}),s(VW,{children:y(ZW,{children:[y(KW,{children:[s(Fi,{children:s(Ri,{children:"Product "})}),s(Fi,{children:s(Ri,{children:"Tag "})}),s(Fi,{children:s(Ri,{children:"Created"})}),s(Fi,{children:s(Ri,{children:"Price"})}),s(Fi,{children:s(Ri,{children:"Aval / Qty "})}),s(Fi,{children:s(Ri,{children:"Active "})}),y(Fi,{children:[s(Ri,{children:"Action "})," "]})]}),d==null?void 0:d.map((x,p)=>s(Ef,{index:p,avatar:x==null?void 0:x.avatar[0].url,name:x.name,tag:x.tag_No,created:te(x.createdAt).format("D MMM YYYY"),quantity:x.quantity,active:x.active,price:w.format(x.price)},p))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:f,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})},YW=c.div`
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
`,VW=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,qW=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,GW=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,QW=c.div`
  border-bottom: 2px solid blue;
`,Ri=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Fi=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,KW=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,ZW=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,JW=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["posts"],queryFn:()=>Gl(t)}),r=n.filter(p=>p.active===!1),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),f=({selected:p})=>{o(p)};console.log(n);const[h,m]=C.useState("");console.log(h);const b=["name","brand","tag"],v=p=>{const g=p==null?void 0:p.filter($=>b.some(S=>{const P=$[S];return typeof P=="string"&&P.toLowerCase().includes(h)}));return h?g!=null&&g.length?g:null:p},w=v(d);var x=Intl.NumberFormat();return y(tY,{children:[s(rt,{}),y(nY,{children:[s(rY,{children:"Sold Out"}),y(XW,{children:[s("input",{placeholder:"Search by name or brand",value:h,onChange:p=>m(p.target.value)}),s("button",{onClick:v,children:s(Ql,{})})]})]}),s(eY,{children:y(oY,{children:[y(iY,{children:[s(Mi,{children:s(Di,{children:"Product "})}),s(Mi,{children:s(Di,{children:"Tag "})}),s(Mi,{children:s(Di,{children:"Created"})}),s(Mi,{children:s(Di,{children:"Price"})}),s(Mi,{children:s(Di,{children:"Aval / Qty "})}),s(Mi,{children:s(Di,{children:"Active "})}),y(Mi,{children:[s(Di,{children:"Action "})," "]})]}),w==null?void 0:w.map((p,g)=>s(Ef,{index:g,avatar:p==null?void 0:p.avatar[0].url,name:p.name,tag:p.tag_No,created:te(p.createdAt).format("D MMM YYYY"),quantity:p.quantity,active:p.active,price:x.format(p.price)},g))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:f,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active"})]})},XW=c.div`
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
`,eY=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,tY=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,nY=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,rY=c.div`
  border-bottom: 2px solid blue;
`,Di=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Mi=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,iY=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,oY=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,aY=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["posts"],queryFn:()=>Gl(t)}),r=RW.filter(x=>x.rejected),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),f=({selected:x})=>{o(x)};console.log(n);const[h,m]=C.useState("");console.log(h);const b=["name","brand","tag"],v=x=>{const p=x==null?void 0:x.filter(g=>b.some($=>{const S=g[$];return typeof S=="string"&&S.toLowerCase().includes(h)}));return h?p!=null&&p.length?p:null:x},w=v(d);return y(uY,{children:[s(rt,{}),y(dY,{children:[s(cY,{children:"Rejected Products"}),y(sY,{children:[s("input",{placeholder:"Search by name or brand",value:h,onChange:x=>m(x.target.value)}),s("button",{onClick:v,children:s(Ql,{})})]})]}),s(lY,{children:y(hY,{children:[y(fY,{children:[s($s,{children:s(bs,{children:"Product "})}),s($s,{children:s(bs,{children:"Tag "})}),s($s,{children:s(bs,{children:"Created"})}),s($s,{children:s(bs,{children:"Reason for Rejection"})}),y($s,{children:[s(bs,{children:"Action "})," "]})]}),w==null?void 0:w.map((x,p)=>s(Ef,{index:p,avatar:x==null?void 0:x.avatar[0].url,name:x.name,tag:x.tag_No,created:te(x.createdAt).format("D MMM YYYY"),rejected},p))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:f,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active"})]})},sY=c.div`
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
`,lY=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,uY=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,dY=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,cY=c.div`
  border-bottom: 2px solid blue;
`,bs=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,$s=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,fY=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,hY=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,Fr=({avatar:e,index:t,order_No:n,price:r,pending_days:i,created:o,delivery_status:a,payment_method:l,tag_No:u,name:d,payment_status:f,quantity:h,amount:m,products:b})=>{const v=JSON.parse(localStorage.getItem("user"));C.useState(!1);const w=b==null?void 0:b.filter(x=>x.sellerID===v._id);return y(mY,{children:[n&&y(Sn,{children:[" ",s(Yn,{children:n})]}),i&&y(Sn,{children:[" ",s(Yn,{children:i})]}),o&&y(Sn,{children:[" ",s(Yn,{children:o})," "]}),u&&y(Sn,{children:[" ",s(Yn,{children:u})," "]}),b&&s(Sn,{children:w==null?void 0:w.map(x=>{var p;return y(gY,{children:[s("span",{children:s(pY,{src:(p=x.productID)==null?void 0:p.avatar[0].url})}),x.productID.name]})})}),b&&s(Sn,{children:w==null?void 0:w.map(x=>s(Yn,{children:x.price}))}),h&&y(Sn,{children:[s(Yn,{children:h})," "]}),m&&s(Sn,{children:s(Yn,{children:m})}),l&&s(Sn,{children:s(Yn,{children:l})}),f&&s(Sn,{children:s(Yn,{children:f})}),a&&s(Sn,{children:s(Yn,{className:`${a}`,children:a})})]},t)};c.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
  margin-left: 10px;
`;c.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
`;const pY=c.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  /* background-color: gold; */
  margin-right: 10px;
`;c.div`
  margin: 5px;
  color: blue;
  border-bottom: 2px solid blue;
  font-weight: 600;
  cursor: pointer;
  span {
    margin-left: 3px;
  }
`;c.div``;const Yn=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,gY=c.div`
  display: flex;
  align-items: center;

  :hover {
    color: blue;
  }
  cursor: pointer;
`,Sn=c.td`
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 400;
  border-left: 1.5px solid #d0d1d2;
`,mY=c.tr`
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;;
`,yY=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(x=>{var g;return((g=x==null?void 0:x.products)==null?void 0:g.filter($=>$.sellerID===t)).length>0}),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),f=({selected:x})=>{o(x)},[h,m]=C.useState(""),b=["order_No","delivery_status"],w=(x=>{const p=x==null?void 0:x.filter(g=>b.some($=>{const S=g[$];return typeof S=="string"&&S.toLowerCase().includes(h)}));return h?p!=null&&p.length?p:null:x})(d);return y(xY,{children:[s(rt,{}),s(bY,{children:s($Y,{children:"All Orders"})}),s(vY,{children:y(SY,{children:[y(wY,{children:[s(Oo,{children:s(Po,{children:"Order Number "})}),s(Oo,{children:s(Po,{children:"Pending Days"})}),s(Oo,{children:s(Po,{children:"Order Date"})}),s(Oo,{children:s(Po,{children:"Price"})}),s(Oo,{children:s(Po,{children:"Payment Method"})}),s(Oo,{children:s(Po,{children:"Status "})})]}),w==null?void 0:w.map((x,p)=>{var g;return s(Fr,{index:p,delivery_status:x.delivery_status,order_No:x.order_No,created:te(x.createdAt).format("D MMM YYYY"),payment_method:x.payment_method,pending_days:x.pending_days,amount:(g=x.products)==null?void 0:g.filter($=>$.sellerID===e._id).reduce(($,S)=>$+S.price*S.qty,0)},p)})]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:f,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};c.div`
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
`;const vY=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,xY=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,bY=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0;
`,$Y=c.div`
  border-bottom: 2px solid blue;
`,Po=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Oo=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,wY=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,SY=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,CY=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var $;return(($=p==null?void 0:p.products)==null?void 0:$.filter(S=>S.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="pending"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),f=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[m,b]=C.useState("");console.log(m);const v=["order_No","delivery_status"],x=(p=>{const g=p==null?void 0:p.filter($=>v.some(S=>{const P=$[S];return typeof P=="string"&&P.toLowerCase().includes(m)}));return m?g!=null&&g.length?g:null:p})(f);return y(OY,{children:[s(rt,{}),s(_Y,{children:s(kY,{children:"Pending Orders"})}),s(PY,{children:y(EY,{children:[y(NY,{children:[s(Ss,{children:s(ws,{children:"Order Number "})}),s(Ss,{children:s(ws,{children:"Order Date"})}),s(Ss,{children:s(ws,{children:"Price"})}),s(Ss,{children:s(ws,{children:"Payment Method"})}),s(Ss,{children:s(ws,{children:"Status "})})]}),x==null?void 0:x.map((p,g)=>{var $;return s(Fr,{index:g,delivery_status:p.delivery_status,order_No:p.order_No,created:te(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,amount:($=p.products)==null?void 0:$.filter(S=>S.sellerID===e._id).reduce((S,P)=>S+P.price*P.qty,0)},g)})]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};c.div`
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
`;const PY=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,OY=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,_Y=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,kY=c.div`
  border-bottom: 2px solid blue;
`,ws=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Ss=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,NY=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,EY=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,IY=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var $;return(($=p==null?void 0:p.products)==null?void 0:$.filter(S=>S.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="ready to ship"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),f=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[m,b]=C.useState(""),v=["order_No","delivery_status"],x=(p=>{const g=p==null?void 0:p.filter($=>v.some(S=>{const P=$[S];return typeof P=="string"&&P.toLowerCase().includes(m)}));return m?g!=null&&g.length?g:null:p})(f);return y(AY,{children:[s(rt,{}),s(RY,{children:s(FY,{children:"Ready To Ship Orders"})}),s(TY,{children:y(MY,{children:[y(DY,{children:[s(Ps,{children:s(Cs,{children:"Order Number "})}),s(Ps,{children:s(Cs,{children:"Order Date"})}),s(Ps,{children:s(Cs,{children:"Price"})}),s(Ps,{children:s(Cs,{children:"Payment Method"})}),s(Ps,{children:s(Cs,{children:"Status "})})]}),x==null?void 0:x.map((p,g)=>{var $;return s(Fr,{index:g,delivery_status:p.delivery_status,order_No:p.order_No,created:te(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,amount:($=p.products)==null?void 0:$.filter(S=>S.sellerID===e._id).reduce((S,P)=>S+P.price*P.qty,0)},g)})]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};c.div`
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
`;const TY=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,AY=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,RY=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,FY=c.div`
  border-bottom: 2px solid blue;
`,Cs=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Ps=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,DY=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,MY=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,jY=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var $;return(($=p==null?void 0:p.products)==null?void 0:$.filter(S=>S.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="shipped"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),f=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[m,b]=C.useState(""),v=["order_No","delivery_status"],x=(p=>{const g=p==null?void 0:p.filter($=>v.some(S=>{const P=$[S];return typeof P=="string"&&P.toLowerCase().includes(m)}));return m?g!=null&&g.length?g:null:p})(f);return y(zY,{children:[s(rt,{}),s(UY,{children:s(BY,{children:"Shipped"})}),s(LY,{children:y(WY,{children:[y(HY,{children:[s(ko,{children:s(_o,{children:"Order Number "})}),s(ko,{children:s(_o,{children:"Pending Days"})}),s(ko,{children:s(_o,{children:"Order Date"})}),s(ko,{children:s(_o,{children:"Price"})}),s(ko,{children:s(_o,{children:"Payment Method"})}),s(ko,{children:s(_o,{children:"Status "})})]}),x==null?void 0:x.map((p,g)=>{var $;return s(Fr,{index:g,delivery_status:p.delivery_status,order_No:p.order_No,created:te(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,amount:($=p.products)==null?void 0:$.filter(S=>S.sellerID===e._id).reduce((S,P)=>S+P.price*P.qty,0)},g)})]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};c.div`
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
`;const LY=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,zY=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,UY=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,BY=c.div`
  border-bottom: 2px solid blue;
`,_o=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,ko=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,HY=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,WY=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,YY="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA6LSURBVHgB7Z0JrFxVHca/ebVQQNk3sUADZRGIQkGhKjuKUVyIIS4xMRJwjRIUlMREE1RUMGJUgonGgIoGELFBMVK1hhTRCkKRLQXbIpS2tNAWui/v+f8492TOu2/m9NHO3N7/ne+XfJnlzbzcOed853/We1oYDFqmIdNepoNNx5ummY4xHWnax7Rz8bkWBpcRhN+/xbTGtMg03/SQ6d+mx02LTatMmzEANLkwxN/GTH+j6fRCbzIdlPy91eV7g8hI5r2NpidN/zTNMv3FtDTzPVFjYiHf0/RxhAxdhlAzUsPJIzUiddRwkmYUo8Ym00LTb01nmCYiROdBrlhcwYxipp1u+oPpeYSM3ozRxvBSSOtmlpiWfM5K5zrTYUnaixrDmmxv0+cRMk+Roj9GidpUPM41nYdQMckkNYUZs5/pMtMLaNdyMkd/jRKbXo+Z3mvaCQ0yyQQ0A0aO3U1fKvRqtNvF5ZGpkQ7fl4HGqlNatTo8j+m7B8LI4P8QOvOd0tkdTXA6fwONfhVC9GDGDBWPOWMMF5/j6Mx6hJqwEZnaI9hcmlQ8Mq3SiqZcbmK68XMc2fqC6ebic67T1LtB4vWfYZph2i15v5s5+JymWIhQ01HM1PUQhOnDCodpOQWhA05xaDwdreqUvjH6zDOdhZCuqnR2IMwkTvT9CZ37G2mHMv79XtOlppNNB6LdzGxJYyoWRpDJCIWdEXpRKY1z6f090y4QOwxmJPsdPzatxNjh2zSzGB2YuV8zHYr6zZqn11Kn6yLxetj5Ptb0C9OL6D4AEoeBl5s+YHoVxA6B4f400wKEDMmNsjxq+ghCZtVxUisWwqFEdbvGoeJxf9O1aI8UdosiTPdbTIcn33WH11EsFh6G/0+YzsXoZhJJ28QrTBcj9FHIMOoH14KdY3oHwjoxGpkFcBPqQ0zTdaZ/IESU00qfKUe/AxCGfx+G+iKVw5qMi+fS5SPlphU741egXTvXEQ6P/gqhQ7saofnCgYNvIjQh6xjtmJZcxnMbxqZ/zIP4/o0Ii0TdRhFvxAJzAUaboRziaY7fmF6HekbK2K5nmz7OSqfrnvhbPoP69UkivKajEJqvuQESrv6dCqd4dTUz59TieXm+gzBjlphuNT2LkIF1hM2pt6M9tJqage+x3zQJ9Wye8DqfMt2OfPqymTUN9TV6Fo8GYWHh8OFJmc8wI+aYZqPeHIEwERcNUB5qPQRhbVkdC1aM0jMRmoflvl0reW86nOLRIEx4TlpNTl5HYnjnsC4Nshj17hxy41FslkTS5+wQr0d9fwOvi5up5qOzieN7R2H0EhY3eG1i0RxsesQlEJH4fIPpAXRuftWJexAGGmIfKW2/kzsRRrPq+ht4rbw+7jbcgO5rt9gP3AMO8WoQjmDFa+9U+zKzFqH+cAj666YnMLqGZZuezcPri9d1rnlpAi5Q5CBDt+ukOXaFwz6I11lOJna3kanY9l1TvK5z84TcbbrIdL7pRNNahHY9523mw0ezhEbv1lHn9U8s5A6vBtla5Cu36+sM+xhcH/YgwhIY/raXEDrAXn7DeG7g4C56EK2TqQcsYGsKdduLIXYAMkh9qOMSmIFH0/9CZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBlkECEyyCBCZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBm8GaTTHciF6BteI0hdbwQnGoa3HYXc+H8wwpkg8U6EQvQNbwb5NsKZE7yNDM8hlEFEX/FiEN5q9IemCzH6Np11vzGccI6XPgjPzWDkYN+jfBqTEH3Di0F4o+p4tDORMUQleDFI7G9oiFdUiheDyBRih6CZdCEyyCBCZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBlkEFEFnOh1uUxIBhH9hobgIlMuF5oEZ8ggop/EaLGf6cumT5qmwlEUkUFEP4l7d3h674dM3zL92nQonCCDiH7SKj3fyTTNdAWcoFNuRb/ptLntSDjBSwRhJ0/nh/vG5S5QLwZZYtoInSUuKsaLQWaYFqF9owZFE5+4iyJeDDLPdLnpvwhRRMYQleCpk84ostR0puldppMRrl+3/hF9w9so1hzT/aZlpmNNu0ND1aKPeCtcjBZxREtRQ/QdbxFEnXNRKWqeCJFBBhEigwwiRAaPJ0zJ1KIyPBW2OIuu5SaiMjyNYvFaeQzCh03TEeZAdDNr0Ve8GISR7iLTlaa9oGaWqAgvBe0Y0yWmPdFuagGKHt5wN3/lJYK8xzSleK5mlX/cGMWLQQ5AuFY1rfzjKop43HKr6OGPsik2wwmqkUU/iZvbWKkNoz1EPxNO0E0bRD+J0Z4mWYmwTeFm0zVwggwi+klsWtEc3zHda3oAjpBBRL+hSdYhRI5n4KyTrj6IqIp0/soNMoioGkUQIZqCDCJEBhlEiAwyiBAZZBAhMsggQmSQQYTIIIMIkcGjQXRXRVEZXgyyCqOPPZBJRCV4McifTcuhW/6IivFikH+ZfoD29bpc+Cb84WW5+wbTTxBM8THTYQhHCuvuJqKveIkgNMILpqsRbgF0Kdr9EiH6hqdRrLi3mde8AUJUgLdhXh3gKSpFE4VCZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBlkECEyyCBCZJBBhMgggwiRQQYRIoMMIkQGGUT0mkattpZBRC/g/QJ4MGdqjnS351rTGuh8EDGg8Gi1R00Titdx307c8flH0/NwuDVaBhG9gNufv2Gah9FRYovpHtN1xWt3EURnFIrtJRb62aaLTe83nYRwLuFdphmm+XDaN5FBRK9Yj/YptpMQWicvmTbCccddBhG9hB31tYXICJyPaskgotc06lZM6qQLkUEGESKDDCJEBvVBRK9poT0hqE66EAmcSZ9o2s20CWHol48a5hUDD++2f4rpfaajEYZ8OYt+h+mJ4rWoAIbvC00rEBI9rvuJa3+op02HQMciVEFM47eY7kOIGFsKrUYwyBQ4zQt10sX2woppV9NXTdMw+pCjnU3nmj6VvOcKGURsLyz0pyGsvxrG6E46+yRsxp9v2hcOkUFEL9gdo6NDq/Sanfad4RAZRPSCBQj9wfLwbhy9WmJaCW2YEgMICz1X8N6Oduc8vk/xNLAbEXYUuuuDaJhX9AKa4hrTa03TTXsi9EeWmX5n+im0H0QMONwU9WnT2abDEfaB3G+ag7B5yiUyiOgFMTosNv0SYTad77mfHJRBRC+JRtmIhqBOuhAZZBAhMsggQmSQQYTIIIOIXlJeYlJ+7Q4ZRPQKGiGOYnGi8DXQjkIhXobmYGX7NtPnTFMR5kD+arrJNBeiMrRhqp5wJ+FzCMtO0rx4xHQCtGFKDCgs+AchbJjap3hvJHl8vemLcIoMInrBcaZDEQyRdszjIzdT7QvtKBQDyv4YW5bSvSHssO8Kh8ggotc0qt8ngwiRQQYRIoMMIkQGGUSIDDKIEBlkECEyyCBCZPBqEBlbVILXgqZFiL6Iq33doZpYiAwyiBAZZBAhMsggQmSQQYTIIIMIkUEGESKDDCJEBhlEiAwyiBAZmmqQVpfnore4v7Xo1miqQXYyTS4eZZD+wbTlEc9M64loYFo37daj8f6wPLf7+6a7EA6R5Cmsw8VnXN8rtgZEE/A2Pmea3m06xzQJDaxwm2aQWPh5aP0009Gm802zEQ6U/A/Cmd6r0TaMGB8sK3sgHNDJtH2r6XiEk22Z3rFyalQUaWIEIcwo1mYM/zQJb395cfF3nttNg2yGosl4YVrSBLwBXGqAkeTvjTMHaerd3WNtFjMuvVcs+yV7Q2wraaXS6TajjaLJxx+kGaeOeu8YqLTUPIgQGWQQURUu+3tem1gj4/x7fEybW43sTFZAmpa59M191x1eDdJtiDbNMJ50NFT6TmoOmeSVkZpiCGPTdmsjWYogNYCZw8ziUO7PEOY/TkUYr+fkISe3OKEVZ31lkvERj1Tj0Pi6QktN95keMl1iOhEa5q0NudqImUQD0BCcSb/ZdADCmYUHIpx0tEvxGTE+mN6bTC+alpueNS00rTKdgpDWMbKUcW0arwZhDba1mXDO9J5uut20BKHGI5oc3D7SAs+I/E7Twcj379jc3QRRCcwANptY4ONseCoahxmy0XQbQsSYADWpekVMR0aLN5seRkjv9LTh8qnDDyJEGVEBzJwpCGuqYgaMoHPmrDV9Nvme6A2scLj05Aa0K6RO+RDfvwOiMljQmTkz0c6cbjUX//YMwgH38bti+2DkYB/ucoQoHU1QNkjs1PPxSiiCV0ZMaJ7Lnau9YqYxk7iS94LiexMgtgUaI+7/oDnigs9uUTy+z77HORCVwozi0C1HVbbWzIomWWH6CsKIFk0SMzz9n9LYmj6+ZtSearqpSM/NSRrnIvicIs1dRg+vtSkLN2swLmU/Nnm/nAmt5PNcxXuW6Q3Fa2beGoRmQpz48lJ4qzIIy8c+RRp/0PRd0xnF38czMcjRxutNs+B0/41LVxdwHuM8048Q5jfib+n0m0ZKz9ebHjM9aXoEYWx/PTQETGLhZz+Dc0dHIFREUxDSfKj02ZQ0/WgIGoOTiI9DBqkcXjuHDq81fRTtoVxgfCaJE1uMILEtLQLRJDQE58riUpLyZ8rENObnnzNdZroVjjeneV5qwgRnH+Qq034Ie6NztJLvDSXPYyFQ9GhTrmhY+WxtkWe6VoufuwHOzdEEYnv5OIT95lvQfdhR6p/STjkf7zTthbEDIWIHcrZpLtqjVjHjPBU0r8aIw7lM91tMx6Ahw+lNmhNYgNDhnlyoU+2l2qw3jHR4vtL0c4T5qacQool7mjZp9rTp9wjL3TmyxU58NEqaqTLKtlE2BsXlPH83XWO6GmGF73Dps25pYkHhb2LHmxOJnMHlfbFOQLtjHs0ik7wyYprFgs85pL8hVEizECJ441bsNrmQxPticSk212KdZJpuOgrt0TuZZHxEczBacPUuI8bdCH0+7g3ZkHyuUfwfh/SKqT1n13AAAAAASUVORK5CYII=",VY="/assets/Fashion-71a7f00e.png",qY="/assets/Computer-be5aa3f3.png",GY="/assets/Food (1)-e1af81f4.png",QY=()=>y(ZY,{children:[s(rt,{}),y(KY,{children:[y(Ru,{to:"/seller-dashboard/uploading",children:[s(Au,{src:YY}),s("span",{children:"Mobiles"})]}),y(Ru,{to:"/seller-dashboard/upload-cloths",children:[s(Au,{src:VY}),s("span",{children:"Clothings"})]}),y(Ru,{to:"/seller-dashboard/upload-electronics",children:[s(Au,{src:qY}),s("span",{children:"Electronics"})]}),y(Ru,{to:"/seller-dashboard/upload-foods",children:[s(Au,{src:GY}),s("span",{children:"Foods And Groceries"})]})]})]}),Au=c.img`

`,Ru=c(be)`
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
`,KY=c.div`
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
`,ZY=c.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`,JY=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(""),[f,h]=C.useState(""),[m,b]=C.useState(""),[v,w]=C.useState(""),[x,p]=C.useState(""),[g,$]=C.useState(""),[S,P]=C.useState(""),[N,T]=C.useState(),[R,W]=C.useState("phone"),[L,se]=C.useState(!1),M=nt(),j=_=>{const k=_.target.files[0],U=URL.createObjectURL(k);t(U),l(k)},X=_=>{const k=_.target.files[0],U=URL.createObjectURL(k);r(U),d(k)},F=_=>{const k=_.target.files[0],U=URL.createObjectURL(k);o(U),h(k)},ee=$t({mutationFn:aD,onSuccess:()=>{M("/seller-dashboard/variation")},onError:_=>{alert(_.message)}}),re=JSON.parse(localStorage.getItem("user"));return y(oV,{children:[s(rt,{}),y(iV,{onSubmit:_=>{_.preventDefault();const k=re._id;(m.length==0||x.length==0||v.length==0||S.length==0||g.length==0||!N||a.length==0||u.length==0)&&(se(!0),alert("All inputs most be filed "));const U=new FormData;U.append("name",m),U.append("ram",x),U.append("condition",g),U.append("brand",v),U.append("description",S),U.append("category",R),U.append("price",N),f&&U.append("avatar",a),u&&U.append("avatar",u),f&&U.append("avatar",f),ee.mutate({id:k,formData:U})},children:[y(rV,{children:[s("span",{children:"Upload Product Image *"}),y(nV,{children:[y(A0,{style:L?{border:"1px solid red"}:null,children:[a?null:s(I0,{fontSize:"25px"}),s(E0,{type:"file",onChange:j}),a?s(T0,{src:e}):null]}),y(A0,{style:L?{border:"1px solid red"}:null,children:[u?null:s(I0,{fontSize:"25px"}),s(E0,{type:"file",onChange:X}),u?s(T0,{src:n}):null]}),y(A0,{children:[f?null:s(I0,{fontSize:"25px"}),s(E0,{type:"file",onChange:F}),f?s(T0,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),y(tV,{children:[y(No,{children:[s(Io,{children:"Name*"}),y(Eo,{children:[s("input",{placeholder:"name",value:m,onChange:_=>b(_.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),y(No,{children:[s(Io,{children:"Brand*"}),y(Eo,{children:[s("input",{placeholder:"brand",value:v,onChange:_=>w(_.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),y(No,{children:[s(Io,{children:"RAM*"}),y(Eo,{children:[s("input",{placeholder:"RAM",value:x,onChange:_=>p(_.target.value)}),s("span",{children:"kindly specify RAM of product"})]})]}),y(No,{children:[s(Io,{children:"Price*"}),y(Eo,{children:[s("input",{placeholder:"price",type:"number",value:N,onChange:_=>T(_.target.value)}),s("span",{children:"kindly specify RAM of product"})]})]}),y(No,{children:[s(Io,{children:"Condition*"}),y(Eo,{children:[y("select",{placeholder:"Select condition",value:g,onChange:_=>$(_.target.value),children:[s("option",{children:"Select Condition"}),s("option",{children:"New"}),s("option",{children:"Used"})]}),s("span",{children:"kindly specify condition of product"})]})]}),y(No,{children:[s(Io,{children:"Description*"}),y(Eo,{children:[s("textarea",{placeholder:"description",value:S,onChange:_=>P(_.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s(eV,{children:s(XY,{type:"submit",disabled:ee.status==="loading",children:ee.status==="loading"?"Loading...":"Enter Product Variation"})})]})]})},E0=c.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,I0=c(Nf)`
  font-size: 25px;
  position: absolute;
`,T0=c.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,XY=c.button`
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
`,eV=c.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,No=c.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,Eo=c.div`
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
`,Io=c.div`
  font-size: 15px;
  font-weight: 500;
`,tV=c.div`
  width: 100%;
`,nV=c.div`
  display: flex;
  padding: 10px 0;
`,A0=c.label`
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
`,rV=c.div`
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
`,iV=c.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,oV=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,aV=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(!0),f=nt(),h=JSON.parse(localStorage.getItem("product")),m=$t({mutationFn:dD,onSuccess:()=>{f("/seller-dashboard/success")},onError:v=>{console.log(v.message),alert(v.message)}});return y(fV,{children:[s(rt,{}),y(cV,{onSubmit:v=>{v.preventDefault();const w=h._id;m.mutate({id:w,tag_No:e,quantity:n,startDate:i,endDate:a,active:u})},children:[s(sV,{children:"Product Variation"}),y(dV,{children:[y(Fu,{children:[s(Mu,{children:"TAG No.*"}),y(Du,{children:[s("input",{placeholder:"C1000",value:e,onChange:v=>t(v.target.value)}),s("span",{children:"kindly a unique number"})]})]}),y(Fu,{children:[s(Mu,{children:"Qty*"}),s(Du,{children:s("input",{placeholder:"2",type:"number",value:n,onChange:v=>r(v.target.value)})})]}),y(Fu,{children:[s(Mu,{children:"start date*"}),s(Du,{children:s("input",{placeholder:"11/01/23",type:"date",value:i,onChange:v=>o(v.target.value)})})]}),y(Fu,{children:[s(Mu,{children:"End date*"}),s(Du,{children:s("input",{placeholder:"26/09/23",type:"date",value:a,onChange:v=>l(v.target.value)})})]})]}),s(uV,{children:s(lV,{type:"submit",disabled:m.status==="loading",children:m.status==="loading"?"Loading...":"Upload"})})]})]})},sV=c.div`
  padding: 7px 15px;
  font-size: 12px;
  font-weight: 500;
`,lV=c.button`
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
`,uV=c.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,Fu=c.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,Du=c.div`
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
`,Mu=c.div`
  font-size: 15px;
  font-weight: 500;
`,dV=c.div`
  width: 100%;
`,cV=c.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,fV=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,hV=()=>s(pV,{children:y(gV,{children:[s(mV,{children:s(Ya,{fontSize:"50px",color:"green"})}),y(vV,{children:["You have successfully",s("br",{})," uploaded an item, your ",s("br",{})," product will be approved soon."]}),s(yV,{to:"/seller-dashboard",children:s("button",{children:"Dashboard"})})]})}),pV=c.div`
  width: 100%;
  height: 42vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`,gV=c.div`
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
`,mV=c.div``,yV=c(Ul)`
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
`,vV=c.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,xV=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var $;return(($=p==null?void 0:p.products)==null?void 0:$.filter(S=>S.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="delivered"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),f=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[m,b]=C.useState(""),v=["order_No","delivery_status"],x=(p=>{const g=p==null?void 0:p.filter($=>v.some(S=>{const P=$[S];return typeof P=="string"&&P.toLowerCase().includes(m)}));return m?g!=null&&g.length?g:null:p})(f);return console.log(x),y($V,{children:[s(rt,{}),s(wV,{children:s(SV,{children:"Delivered"})}),s(bV,{children:y(PV,{children:[y(CV,{children:[s(Ao,{children:s(To,{children:"Order Number "})}),s(Ao,{children:s(To,{children:"Pending Days"})}),s(Ao,{children:s(To,{children:"Order Date"})}),s(Ao,{children:s(To,{children:"Price"})}),s(Ao,{children:s(To,{children:"Payment Method"})}),s(Ao,{children:s(To,{children:"Status "})})]}),x==null?void 0:x.map((p,g)=>{var $;return s(Fr,{index:g,delivery_status:p.delivery_status,order_No:p.order_No,created:te(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,amount:($=p.products)==null?void 0:$.filter(S=>S.sellerID===e._id).reduce((S,P)=>S+P.price*P.qty,0)},g)})]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};c.div`
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
`;const bV=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,$V=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,wV=c.div`
width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,SV=c.div`
  border-bottom: 2px solid blue;
`,To=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Ao=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,CV=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,PV=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,OV=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var $;return(($=p==null?void 0:p.products)==null?void 0:$.filter(S=>S.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="cancelled"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),f=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[m,b]=C.useState(""),v=["order_No","delivery_status"],x=(p=>{const g=p==null?void 0:p.filter($=>v.some(S=>{const P=$[S];return typeof P=="string"&&P.toLowerCase().includes(m)}));return m?g!=null&&g.length?g:null:p})(f);return y(kV,{children:[s(rt,{}),s(NV,{children:s(EV,{children:"Cancelled"})}),s(_V,{children:y(TV,{children:[y(IV,{children:[s(Fo,{children:s(Ro,{children:"Order Number "})}),s(Fo,{children:s(Ro,{children:"Pending Days"})}),s(Fo,{children:s(Ro,{children:"Order Date"})}),s(Fo,{children:s(Ro,{children:"Price"})}),s(Fo,{children:s(Ro,{children:"Payment Method"})}),s(Fo,{children:s(Ro,{children:"Status "})})]}),x==null?void 0:x.map((p,g)=>{var $;return s(Fr,{index:g,delivery_status:p.delivery_status,order_No:p.order_No,created:te(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,amount:($=p.products)==null?void 0:$.filter(S=>S.sellerID===e._id).reduce((S,P)=>S+P.price*P.qty,0)},g)})]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};c.div`
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
`;const _V=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,kV=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,NV=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,EV=c.div`
  border-bottom: 2px solid blue;
`,Ro=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Fo=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,IV=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,TV=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,AV=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var $;return(($=p==null?void 0:p.products)==null?void 0:$.filter(S=>S.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="failed"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),f=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[m,b]=C.useState(""),v=["order_No","delivery_status"],x=(p=>{const g=p==null?void 0:p.filter($=>v.some(S=>{const P=$[S];return typeof P=="string"&&P.toLowerCase().includes(m)}));return m?g!=null&&g.length?g:null:p})(f);return y(FV,{children:[s(rt,{}),s(DV,{children:s(MV,{children:"Failed"})}),s(RV,{children:y(LV,{children:[y(jV,{children:[s(Mo,{children:s(Do,{children:"Order Number "})}),s(Mo,{children:s(Do,{children:"Pending Days"})}),s(Mo,{children:s(Do,{children:"Order Date"})}),s(Mo,{children:s(Do,{children:"Price"})}),s(Mo,{children:s(Do,{children:"Payment Method"})}),s(Mo,{children:s(Do,{children:"Status "})})]}),x==null?void 0:x.map((p,g)=>{var $;return s(Fr,{index:g,delivery_status:p.delivery_status,order_No:p.order_No,created:te(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,amount:($=p.products)==null?void 0:$.filter(S=>S.sellerID===e._id).reduce((S,P)=>S+P.price*P.qty,0)},g)})]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};c.div`
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
`;const RV=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,FV=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,DV=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,MV=c.div`
  border-bottom: 2px solid blue;
`,Do=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Mo=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,jV=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,LV=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,zV=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var $;return(($=p==null?void 0:p.products)==null?void 0:$.filter(S=>S.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="returned"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),f=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[m,b]=C.useState(""),v=["order_No","delivery_status"],x=(p=>{const g=p==null?void 0:p.filter($=>v.some(S=>{const P=$[S];return typeof P=="string"&&P.toLowerCase().includes(m)}));return m?g!=null&&g.length?g:null:p})(f);return y(BV,{children:[s(rt,{}),s(HV,{children:s(WV,{children:"Returned"})}),s(UV,{children:y(VV,{children:[y(YV,{children:[s(Lo,{children:s(jo,{children:"Order Number "})}),s(Lo,{children:s(jo,{children:"Pending Days"})}),s(Lo,{children:s(jo,{children:"Order Date"})}),s(Lo,{children:s(jo,{children:"Price"})}),s(Lo,{children:s(jo,{children:"Payment Method"})}),s(Lo,{children:s(jo,{children:"Status "})})]}),x==null?void 0:x.map((p,g)=>{var $;return s(Fr,{index:g,delivery_status:p.delivery_status,order_No:p.order_No,created:te(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,amount:($=p.products)==null?void 0:$.filter(S=>S.sellerID===e._id).reduce((S,P)=>S+P.price*P.qty,0)},g)})]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};c.div`
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
`;const UV=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,BV=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,HV=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,WV=c.div`
  border-bottom: 2px solid blue;
`,jo=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Lo=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,YV=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,VV=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,qV=()=>{const[e,t]=C.useState(),[n,r]=C.useState(),[i,o]=C.useState(),[a,l]=C.useState(""),[u,d]=C.useState(""),[f,h]=C.useState(""),[m,b]=C.useState(""),[v,w]=C.useState(""),[x,p]=C.useState(""),[g,$]=C.useState(""),[S,P]=C.useState(""),[N,T]=C.useState(),[R,W]=C.useState(!1),[L,se]=C.useState("clothing"),M=nt(),j=_=>{const k=_.target.files[0],U=URL.createObjectURL(k);t(U),l(k)},X=_=>{const k=_.target.files[0],U=URL.createObjectURL(k);r(U),d(k)},F=_=>{const k=_.target.files[0],U=URL.createObjectURL(k);o(U),h(k)},ee=$t({mutationFn:sD,onSuccess:()=>{M("/seller-dashboard/variation")},onError:_=>{alert(_.message)}}),re=JSON.parse(localStorage.getItem("user"));return console.log(m.length),y(eq,{children:[s(rt,{}),y(XV,{onSubmit:_=>{_.preventDefault();const k=re._id;(m.length==0||x.length==0||g.length==0||v.length==0||S.length==0||!N||a.length==0||u.length==0)&&(W(!0),alert("All inputs most be filed "));const U=new FormData;U.append("name",m),U.append("type",x),U.append("gender",g),U.append("brand",v),U.append("description",S),U.append("price",N),U.append("category",L),a&&U.append("avatar",a),u&&U.append("avatar",u),f&&U.append("avatar",f),ee.mutate({id:k,formData:U})},children:[y(JV,{children:[s("span",{children:"Upload Product Image *"}),y(ZV,{children:[y(M0,{style:R?{border:"1px solid red"}:null,children:[a?null:s(F0,{fontSize:"25px"}),s(R0,{type:"file",onChange:j}),a?s(D0,{src:e}):null]}),y(M0,{style:R?{border:"1px solid red"}:null,children:[u?null:s(F0,{fontSize:"25px"}),s(R0,{type:"file",onChange:X}),u?s(D0,{src:n}):null]}),y(M0,{children:[f?null:s(F0,{fontSize:"25px"}),s(R0,{type:"file",onChange:F}),f?s(D0,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),y(KV,{children:[y(zo,{children:[s(Bo,{children:"Name*"}),y(Uo,{children:[s("input",{placeholder:"name",value:m,onChange:_=>b(_.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),y(zo,{children:[s(Bo,{children:"Brand*"}),y(Uo,{children:[s("input",{placeholder:"brand",value:v,onChange:_=>w(_.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),y(zo,{children:[s(Bo,{children:"Type*"}),y(Uo,{children:[s("input",{placeholder:"type",value:x,onChange:_=>p(_.target.value)}),s("span",{children:"kindly specify type of product"})]})]}),y(zo,{children:[s(Bo,{children:"Gender*"}),y(Uo,{children:[y("select",{placeholder:"Select condition",value:g,onChange:_=>$(_.target.value),children:[s("option",{children:"Select Gender"}),s("option",{children:"Male"}),s("option",{children:"Female"})]}),s("span",{children:"kindly specify gender of product"})]})]}),y(zo,{children:[s(Bo,{children:"Price*"}),y(Uo,{children:[s("input",{placeholder:"Price",type:"number",value:N,onChange:_=>T(_.target.value)}),s("span",{children:"kindly specify price of product"})]})]}),y(zo,{children:[s(Bo,{children:"Description*"}),y(Uo,{children:[s("textarea",{placeholder:"description",value:S,onChange:_=>P(_.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s(QV,{children:s(GV,{type:"submit",disabled:ee.status==="loading",children:ee.status==="loading"?"Loading...":"Enter Product Variation"})})]})]})},R0=c.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,F0=c(Nf)`
  font-size: 25px;
  position: absolute;
`,D0=c.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,GV=c.button`
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
`,QV=c.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,zo=c.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,Uo=c.div`
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
`,Bo=c.div`
  font-size: 15px;
  font-weight: 500;
`,KV=c.div`
  width: 100%;
`,ZV=c.div`
  display: flex;
  padding: 10px 0;
`,M0=c.label`
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
`,JV=c.div`
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
`,XV=c.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,eq=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,tq=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(""),[f,h]=C.useState(""),[m,b]=C.useState(""),[v,w]=C.useState(""),[x,p]=C.useState(""),[g,$]=C.useState(""),[S,P]=C.useState(""),[N,T]=C.useState(),[R,W]=C.useState("electronics"),[L,se]=C.useState(!1),M=nt(),j=_=>{const k=_.target.files[0],U=URL.createObjectURL(k);t(U),l(k)},X=_=>{const k=_.target.files[0],U=URL.createObjectURL(k);r(U),d(k)},F=_=>{const k=_.target.files[0],U=URL.createObjectURL(k);o(U),h(k)},ee=$t({mutationFn:lD,onSuccess:()=>{M("/seller-dashboard/variation")},onError:_=>{alert(_.message)}}),re=JSON.parse(localStorage.getItem("user"));return y(lq,{children:[s(rt,{}),y(sq,{onSubmit:_=>{_.preventDefault();const k=re._id;(m.length==0||x.length==0||g.length==0||v.length==0||S.length==0||!N||a.length==0||u.length==0)&&(se(!0),alert("All inputs most be filed "));const U=new FormData;U.append("name",m),U.append("model",x),U.append("condition",g),U.append("brand",v),U.append("description",S),U.append("price",N),U.append("category",R),a&&U.append("avatar",a),u&&U.append("avatar",u),f&&U.append("avatar",f),ee.mutate({id:k,formData:U})},children:[y(aq,{children:[s("span",{children:"Upload Product Image *"}),y(oq,{children:[y(U0,{style:L?{border:"1px solid red"}:null,children:[a?null:s(L0,{fontSize:"25px"}),s(j0,{type:"file",onChange:j}),a?s(z0,{src:e}):null]}),y(U0,{style:L?{border:"1px solid red"}:null,children:[u?null:s(L0,{fontSize:"25px"}),s(j0,{type:"file",onChange:X}),u?s(z0,{src:n}):null]}),y(U0,{children:[f?null:s(L0,{fontSize:"25px"}),s(j0,{type:"file",onChange:F}),f?s(z0,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),y(iq,{children:[y(Ho,{children:[s(Yo,{children:"Name*"}),y(Wo,{children:[s("input",{placeholder:"name",value:m,onChange:_=>b(_.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),y(Ho,{children:[s(Yo,{children:"Brand*"}),y(Wo,{children:[s("input",{placeholder:"brand",value:v,onChange:_=>w(_.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),y(Ho,{children:[s(Yo,{children:"Model*"}),y(Wo,{children:[s("input",{placeholder:"type",value:x,onChange:_=>p(_.target.value)}),s("span",{children:"kindly specify type of product"})]})]}),y(Ho,{children:[s(Yo,{children:"Condition*"}),y(Wo,{children:[y("select",{placeholder:"Select condition",value:g,onChange:_=>$(_.target.value),children:[s("option",{children:"Select Condition"}),s("option",{children:"New"}),s("option",{children:"Used"})]}),s("span",{children:"kindly specify condition of product"})]})]}),y(Ho,{children:[s(Yo,{children:"Price*"}),y(Wo,{children:[s("input",{placeholder:"Price",type:"number",value:N,onChange:_=>T(_.target.value)}),s("span",{children:"kindly specify price of product"})]})]}),y(Ho,{children:[s(Yo,{children:"Description*"}),y(Wo,{children:[s("textarea",{placeholder:"description",value:S,onChange:_=>P(_.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s(rq,{children:s(nq,{type:"submit",disabled:ee.status==="loading",children:ee.status==="loading"?"Loading...":"Enter Product Variation"})})]})]})},j0=c.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,L0=c(Nf)`
  font-size: 25px;
  position: absolute;
`,z0=c.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,nq=c.button`
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
`,rq=c.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,Ho=c.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,Wo=c.div`
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
`,Yo=c.div`
  font-size: 15px;
  font-weight: 500;
`,iq=c.div`
  width: 100%;
`,oq=c.div`
  display: flex;
  padding: 10px 0;
`,U0=c.label`
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
`,aq=c.div`
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
`,sq=c.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,lq=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,uq=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(""),[f,h]=C.useState(""),[m,b]=C.useState(""),[v,w]=C.useState(""),[x,p]=C.useState(""),[g,$]=C.useState(),[S,P]=C.useState("food"),[N,T]=C.useState(!1),R=nt(),W=F=>{const ee=F.target.files[0],re=URL.createObjectURL(ee);t(re),l(ee)},L=F=>{const ee=F.target.files[0],re=URL.createObjectURL(ee);r(re),d(ee)},se=F=>{const ee=F.target.files[0],re=URL.createObjectURL(ee);o(re),h(ee)},M=$t({mutationFn:uD,onSuccess:()=>{R("/seller-dashboard/variation")},onError:F=>{alert(F.message)}}),j=JSON.parse(localStorage.getItem("user"));return y(mq,{children:[s(rt,{}),y(gq,{onSubmit:F=>{F.preventDefault();const ee=j._id;(m.length==0||v.length==0||x.length==0||!g||a.length==0||u.length==0)&&(T(!0),alert("All inputs most be filed "));const re=new FormData;re.append("name",m),re.append("brand",v),re.append("description",x),re.append("price",g),re.append("category",S),a&&re.append("avatar",a),u&&re.append("avatar",u),f&&re.append("avatar",f),M.mutate({id:ee,formData:re})},children:[y(pq,{children:[s("span",{children:"Upload Product Image *"}),y(hq,{children:[y(Y0,{style:N?{border:"1px solid red"}:null,children:[a?null:s(H0,{fontSize:"25px"}),s(B0,{type:"file",onChange:W}),a?s(W0,{src:e}):null]}),y(Y0,{style:N?{border:"1px solid red"}:null,children:[u?null:s(H0,{fontSize:"25px"}),s(B0,{type:"file",onChange:L}),u?s(W0,{src:n}):null]}),y(Y0,{children:[f?null:s(H0,{fontSize:"25px"}),s(B0,{type:"file",onChange:se}),f?s(W0,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),y(fq,{children:[y(ju,{children:[s(zu,{children:"Name*"}),y(Lu,{children:[s("input",{placeholder:"name",value:m,onChange:F=>b(F.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),y(ju,{children:[s(zu,{children:"Brand*"}),y(Lu,{children:[s("input",{placeholder:"brand",value:v,onChange:F=>w(F.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),y(ju,{children:[s(zu,{children:"Price*"}),y(Lu,{children:[s("input",{placeholder:"Price",type:"number",value:g,onChange:F=>$(F.target.value)}),s("span",{children:"kindly specify price of product"})]})]}),y(ju,{children:[s(zu,{children:"Description*"}),y(Lu,{children:[s("textarea",{placeholder:"description",value:x,onChange:F=>p(F.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s(cq,{children:s(dq,{type:"submit",disabled:M.status==="loading",children:M.status==="loading"?"Loading...":"Enter Product Variation"})})]})]})},B0=c.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,H0=c(Nf)`
  font-size: 25px;
  position: absolute;
`,W0=c.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,dq=c.button`
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
`,cq=c.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,ju=c.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,Lu=c.div`
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
`,zu=c.div`
  font-size: 15px;
  font-weight: 500;
`,fq=c.div`
  width: 100%;
`,hq=c.div`
  display: flex;
  padding: 10px 0;
`,Y0=c.label`
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
`,pq=c.div`
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
`,gq=c.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,mq=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,yq=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(x=>{var g;return((g=x==null?void 0:x.products)==null?void 0:g.filter($=>$.sellerID===t)).length>0}),[i,o]=C.useState(0),a=10,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),f=({selected:x})=>{o(x)},[h,m]=C.useState(""),b=["order_No","delivery_status"],w=(x=>{const p=x==null?void 0:x.filter(g=>b.some($=>{const S=g[$];return typeof S=="string"&&S.toLowerCase().includes(h)}));return h?p!=null&&p.length?p:null:x})(d);return y(xq,{children:[s(rt,{}),y(vq,{children:[s(bq,{children:s($q,{children:"Transactions"})}),y(Sq,{children:[y(wq,{children:[s(Li,{children:s(ji,{children:"Tag"})}),s(Li,{children:s(ji,{children:"Date"})}),s(Li,{children:s(ji,{children:"Product"})}),s(Li,{children:s(ji,{children:"Price"})}),s(Li,{children:s(ji,{children:"QTY"})}),s(Li,{children:s(ji,{children:"Amount "})}),s(Li,{children:s(ji,{children:"Action "})})]}),w==null?void 0:w.map((x,p)=>{var g,$;return s(Fr,{index:p,delivery_status:x.delivery_status,order_No:x.order_No,created:te(x.createdAt).format("D MMM YYYY"),amount:(g=x.products)==null?void 0:g.filter(S=>S.sellerID===e._id).reduce((S,P)=>S+P.price*P.qty,0),quantity:($=x.products)==null?void 0:$.filter(S=>S.sellerID===e._id).reduce((S,P)=>S+P.qty,0),products:x.products},p)})]})]}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:f,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};c.div`
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
`;const vq=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,xq=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,bq=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,$q=c.div`
  border-bottom: 2px solid blue;
`,ji=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Li=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,wq=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,Sq=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,Cq=()=>s(Nq,{children:y(kq,{children:[y(_q,{children:[s("img",{src:"/Frame 113.png"}),s("span",{children:"Manel"})]}),y(Pq,{children:[s(Oq,{children:"Account Info"}),y(q0,{children:[y("span",{children:[" ",s(Uj,{fontSize:"18px"})]}),s(V0,{children:"Manel"})]}),y(q0,{children:[y("span",{children:[" ",s(jj,{fontSize:"18px"})]}),s(V0,{children:"Manel@test.com"})]}),y(q0,{children:[y("span",{children:[" ",s(zj,{fontSize:"18px"})]}),s(V0,{children:"09012075964"})]})]})]})}),V0=c.div`
  cursor: pointer;
  margin-bottom: 8px;
`,q0=c.div`
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
`,Pq=c.div`
  font-weight: 500;
  font-size: 14px;
  margin-left: 18px;
`,Oq=c.div`
  padding: 7px 0;
`,_q=c.div`
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
`,kq=c.div`
  width: 99%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,Nq=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Eq=()=>s(Aq,{children:y(Tq,{children:[s(Iq,{children:"Settings"}),s(Cq,{})]})}),Iq=c.div`
  font-size: 15px;
  font-weight: 700;
  padding: 8px 0;
`,Tq=c.div`
  width: 95%;
`,Aq=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Rq=()=>{const[e,t]=C.useState();return s(Mq,{children:y(zq,{children:[s(Lq,{children:s(jq,{children:" Personal Details"})}),y(Uq,{children:[s(Fq,{children:y(K0,{children:[s(Q0,{children:"First Name"}),s(G0,{children:s(G3,{placeholder:"First Name"})})]})}),y(Dq,{children:[y(K0,{children:[s(Q0,{children:"Last Name"}),s(G0,{children:s(G3,{placeholder:"Last Name"})})]}),y(K0,{children:[s(Q0,{children:"Country"}),s(G0,{children:s(ym,{className:"phone",defaultCountry:"NG",placeholder:"Country",value:e,onChange:t})})]})]})]})]})})},Fq=c.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,Dq=c.div`
  flex-direction: column;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Mq=c.div`
  /* background-color: #1e1b1b; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 20px; */
`,jq=c.div`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  /* margin-bottom: 20px; */
  /* border-bottom: 1.9px solid grey; */
  padding: 0 24px;
`,Lq=c.div`
  width: 100%;
  border-bottom: 1.9px solid grey;
  padding: 4px 0;
  display: flex;
  align-items: center;
  /* background-color: red; */
  justify-content: flex-start;
`,zq=c.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
  flex-wrap: wrap;
`;c.button`
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
`;c.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`;c.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;const G0=c.div`
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
`,G3=c.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,Q0=c.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,K0=c.div`
    margin-bottom: 10px;
`,Uq=c.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,Bq=()=>(C.useState(),s(Yq,{children:y(Gq,{children:[s(qq,{children:s(Vq,{children:" Change Password"})}),y(Kq,{children:[y(Hq,{children:[y(ep,{children:[s(X0,{children:"Current Password"}),s(Z0,{children:s(J0,{placeholder:"Current Password"})})]}),y(ep,{children:[s(X0,{children:"New Password"}),s(Z0,{children:s(J0,{placeholder:"New Password"})})]})]}),y(Wq,{children:[y(ep,{children:[s(X0,{children:"Confirm New Password"}),s(Z0,{children:s(J0,{placeholder:"Confirm New Password"})})]}),s(Qq,{children:"Save Password"})]})]})]})})),Hq=c.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,Wq=c.div`
  flex-direction: column;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Yq=c.div`
  /* background-color: #1e1b1b; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 20px; */
`,Vq=c.div`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  /* margin-bottom: 20px; */
  /* border-bottom: 1.9px solid grey; */
  padding: 0 24px;
`,qq=c.div`
  width: 100%;
  border-bottom: 1.9px solid grey;
  padding: 4px 0;
  display: flex;
  align-items: center;
  /* background-color: red; */
  justify-content: flex-start;
`,Gq=c.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
  flex-wrap: wrap;
`,Qq=c.button`
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
`;c.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`;c.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;const Z0=c.div`
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
`,J0=c.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,X0=c.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,ep=c.div`
    margin-bottom: 10px;
`,Kq=c.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,Zq=()=>s("div",{children:y(Jq,{children:[s(rt,{}),s(Eq,{}),s(Rq,{}),s(Bq,{})]})}),Jq=c.div`
  width: 100%;
  /* background-color: gold; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,Xq=()=>dm([{path:"/",children:[{index:!0,element:s(Ve,{children:s(Sz,{})})},{path:"all-product",element:s(Ve,{children:s(DW,{})})},{path:"live-product",element:s(Ve,{children:s(WW,{})})},{path:"sold-product",element:s(Ve,{children:s(JW,{})})},{path:"rejected-product",element:s(Ve,{children:s(aY,{})})},{path:"all-orders",element:s(Ve,{children:s(yY,{})})},{path:"pending-orders",element:s(Ve,{children:s(CY,{})})},{path:"ready-to-ship",element:s(Ve,{children:s(IY,{})})},{path:"transactions",element:s(Ve,{children:s(yq,{})})},{path:"shipped",element:s(Ve,{children:s(jY,{})})},{path:"uploads",element:s(Ve,{children:s(QY,{})})},{path:"uploading",element:s(Ve,{children:s(JY,{})})},{path:"upload-cloths",element:s(Ve,{children:s(qV,{})})},{path:"upload-electronics",element:s(Ve,{children:s(tq,{})})},{path:"upload-foods",element:s(Ve,{children:s(uq,{})})},{path:"variation",element:s(Ve,{children:s(aV,{})})},{path:"success",element:s(Ve,{children:s(hV,{})})},{path:"delivered-orders",element:s(Ve,{children:s(xV,{})})},{path:"cancelled-orders",element:s(Ve,{children:s(OV,{})})},{path:"failed-orders",element:s(Ve,{children:s(AV,{})})},{path:"returned-orders",element:s(Ve,{children:s(zV,{})})},{path:"settings",element:s(Ve,{children:s(Zq,{})})}]}]),eG=()=>{C.useState(!1),C.useState(!1);const[e,t]=C.useState(!1);return JSON.parse(localStorage.getItem("user")),C.useRef(),console.log(e),s("div",{children:s(tG,{children:y(nG,{children:[y(rG,{children:[s("img",{src:"/logo 1.png"}),s("div",{children:"Cross Africa"})]}),s(iG,{to:"/seller-dashboard",children:"Dashboard"})]})})})},tG=c.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #383333; */
  border-bottom: 1px solid lightgray;
`,nG=c.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,rG=c.div`
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
`,iG=c(be)`
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  color: black;
`,oG=()=>y("div",{children:[s(eG,{}),s(Xq,{})]}),aG=()=>{var b,v,w,x,p,g;const[e,t]=C.useState(),[n,r]=C.useState(!0),i=n!==!0,o=nt(),a=Wl({firstName:Ot().required("This field cannot be empty"),lastName:Ot().required("This field cannot be empty"),email:Ot().email("this is not a valid email").required("This field cannot be empty"),phoneNum:Nm().required("This field cannot be empty"),password:Ot().required("This field cannot be empty"),isAdmin:Xw(),confirmPassword:Ot().oneOf([Jw("password"),null],"Password must match")}).required(),{handleSubmit:l,formState:{errors:u},reset:d,register:f}=pf({resolver:gf(a)}),h=$t({mutationKey:["createUser"],mutationFn:uI,onSuccess:$=>{console.log($),o("/login-user")},onError:$=>{alert($.message)}}),m=l($=>{$.isAdmin=!1,h.mutate($)});return s("div",{children:s(hG,{children:y(fG,{children:[s(cG,{children:"Create Account"}),s(dG,{children:"Please enter every necessary information"}),y(uG,{onSubmit:m,children:[y(Qo,{children:[s(Go,{children:"First Name"}),s(qo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(Os,{placeholder:"First Name",...f("firstName")})}),s(Vo,{children:(u==null?void 0:u.firstName)&&((b=u==null?void 0:u.firstName)==null?void 0:b.message)})]}),y(Qo,{children:[s(Go,{children:"Last Name"}),s(qo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(Os,{placeholder:"Last Name",...f("lastName")})}),s(Vo,{children:(u==null?void 0:u.lastName)&&((v=u==null?void 0:u.lastName)==null?void 0:v.message)})]}),y(Qo,{children:[s(Go,{children:"Email Address"}),s(qo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(Os,{placeholder:"Email Address",...f("email")})}),s(Vo,{children:(u==null?void 0:u.email)&&((w=u==null?void 0:u.email)==null?void 0:w.message)})]}),y(Qo,{children:[s(Go,{children:"Phone Number"}),s(qo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(ym,{className:"phone",defaultCountry:"NG",...f("phoneNum"),placeholder:"Phone Number",value:e,onChange:t})}),s(Vo,{children:(u==null?void 0:u.phoneNum)&&((x=u==null?void 0:u.phoneNum)==null?void 0:x.message)})]}),y(Qo,{children:[s(Go,{children:"Password"}),y(qo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:[s(Os,{placeholder:"Password",type:n?"password":"text",id:"pass",...f("password")}),s(Q3,{onClick:()=>{r(i)},children:n===!1?s(ja,{}):s(Ma,{})})]}),s(Vo,{children:(u==null?void 0:u.password)&&((p=u==null?void 0:u.password)==null?void 0:p.message)})]}),y(Qo,{children:[s(Go,{children:"Confirm Password"}),y(qo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:[s(Os,{placeholder:"Confirm Password",type:n?"password":"text",id:"pass",...f("confirmPassword")}),s(Q3,{onClick:()=>{r(i)},children:n===!1?s(ja,{}):s(Ma,{})})]}),s(Vo,{children:(u==null?void 0:u.confirmPassword)&&((g=u==null?void 0:u.confirmPassword)==null?void 0:g.message)})]}),s(lG,{type:"submit",disabled:h.status==="loading",children:h.status==="loading"?"Loading...":"Continue"}),y(sG,{children:["Already have an account?"," ",s(be,{to:"/login-user",style:{textDecoration:"none"},children:s("span",{children:"LogIn"})})]})]})]})})})};c.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    width: 90%;

    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`;const sG=c.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,lG=c.button`
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
`,Vo=c.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`,Q3=c.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,qo=c.div`
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
`,Os=c.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,Go=c.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,Qo=c.div`
    margin-bottom: 10px;
`,uG=c.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 370px){
        width: 350px;
    }
`,dG=c.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 250px;
`,cG=c.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
`,fG=c.div`
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
`,hG=c.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,pG=()=>{var h,m;const e=nt(),t=Wl({email:Ot().email("this is not a valid email").required("This field cannot be empty"),password:Ot().required("This field cannot be empty")}).required(),[n,r]=C.useState(!0),i=n!==!0,{handleSubmit:o,formState:{errors:a},reset:l,register:u}=pf({resolver:gf(t)}),d=$t({mutationKey:["Admin"],mutationFn:dI,onSuccess:b=>{e("/")},onError:b=>{console.log(b.message)}}),f=o(b=>{d.mutate(b)});return s("div",{children:s(SG,{children:y(wG,{children:[s($G,{children:"Create Account"}),s(bG,{children:"Please enter every necessary information"}),y(xG,{onSubmit:f,children:[y(eb,{children:[s(X3,{children:"Email Address"}),s(Z3,{style:{border:`${a!=null&&a.email?"1px solid red":"1px solid lightgray"}`},children:s(J3,{placeholder:"Email Address",type:"email",...u("email")})}),s(K3,{children:(a==null?void 0:a.email)&&((h=a==null?void 0:a.email)==null?void 0:h.message)})]}),y(eb,{children:[s(X3,{children:"Password"}),y(Z3,{style:{border:`${a!=null&&a.password?"1px solid red":"1px solid lightgray"}`},children:[s(J3,{placeholder:"Password",type:n?"password":"text",id:"pass",...u("password")}),s(vG,{onClick:()=>{r(i)},children:n===!1?s(ja,{}):s(Ma,{})})]}),s(K3,{children:(a==null?void 0:a.password)&&((m=a==null?void 0:a.password)==null?void 0:m.message)})]}),s(gG,{children:"Forget Password?"}),s(yG,{type:"submit",children:d.status==="loading"?"Loading...":"Log In"}),y(mG,{children:["Don't have an account? ",s(be,{to:"/signup-user",style:{textDecoration:"none"},children:s("span",{children:"Sign Up"})})]})]})]})})})},gG=c.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    width: 90%;

    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`,mG=c.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,yG=c.button`
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
`,K3=c.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`,vG=c.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,Z3=c.div`
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
`,J3=c.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,X3=c.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,eb=c.div`
    margin-bottom: 10px;
`,xG=c.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 370px){
        width: 350px;
    }
`,bG=c.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 250px;
`,$G=c.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
`,wG=c.div`
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
`,SG=c.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,CG=()=>{const e=nt(),[t,n]=C.useState(""),r=JSON.parse(localStorage.getItem("user")),i=$t({mutationFn:fI,onSuccess:()=>{e("/login-user")},onError:()=>{alert("Invalid OTP")}});return s(PG,{children:y(OG,{children:[s(_G,{children:"OTP Verification!"}),s(NG,{children:"Please enter the OTP you received"}),s(q5,{style:{border:"1px solid gold"},value:t,onChange:n,numInputs:6,renderSeparator:s("span",{children:" "}),renderInput:a=>s("input",{...a}),containerStyle:"containerStyle",inputStyle:"inputStyle",width:"70px"}),s(kG,{children:s("button",{onClick:()=>{const a=r==null?void 0:r._id;i.mutate({id:a,otp:t})},children:"Enter"})})]})})},PG=c.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`,OG=c.div`
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
`,_G=c.div`
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
`,kG=c.div`
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
`,NG=c.div`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
`;c.input`
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

`;const EG=()=>s("div",{children:y(LC,{children:[s(Bi,{path:"/*",element:s(cz,{})}),s(Bi,{path:"/signup-user",element:s(aG,{})}),s(Bi,{path:"/login-user",element:s(pG,{})}),s(Bi,{path:"/otp-user",element:s(CG,{})}),s(Bi,{path:"/seller-page",element:s(uP,{})}),s(Bi,{path:"/seller-dashboard/*",element:s(Ve,{children:s(oG,{})})})]})}),IG="modulepreload",TG=function(e){return"/"+e},tb={},AG=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=TG(o),o in tb)return;tb[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const h=i[f];if(h.href===o&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":IG,a||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),a)return new Promise((f,h)=>{d.addEventListener("load",f),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},RG=e=>{e&&e instanceof Function&&AG(()=>import("./web-vitals-60d3425a.js"),[]).then(({getCLS:t,getFID:n,getFCP:r,getLCP:i,getTTFB:o})=>{t(e),n(e),r(e),i(e),o(e)})};var gy="persist:",my="persist/FLUSH",Hf="persist/REHYDRATE",yy="persist/PAUSE",vy="persist/PERSIST",xy="persist/PURGE",by="persist/REGISTER",FG=-1;function fd(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?fd=function(n){return typeof n}:fd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},fd(e)}function nb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function DG(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nb(n,!0).forEach(function(r){MG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nb(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function MG(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jG(e,t,n,r){r.debug;var i=DG({},n);return e&&fd(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function LG(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:gy).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(P){return P}:typeof e.serialize=="function"?l=e.serialize:l=zG;var u=e.writeFailHandler||null,d={},f={},h=[],m=null,b=null,v=function(P){Object.keys(P).forEach(function(N){p(N)&&d[N]!==P[N]&&h.indexOf(N)===-1&&h.push(N)}),Object.keys(d).forEach(function(N){P[N]===void 0&&p(N)&&h.indexOf(N)===-1&&d[N]!==void 0&&h.push(N)}),m===null&&(m=setInterval(w,i)),d=P};function w(){if(h.length===0){m&&clearInterval(m),m=null;return}var S=h.shift(),P=r.reduce(function(N,T){return T.in(N,S,d)},d[S]);if(P!==void 0)try{f[S]=l(P)}catch(N){console.error("redux-persist/createPersistoid: error serializing state",N)}else delete f[S];h.length===0&&x()}function x(){Object.keys(f).forEach(function(S){d[S]===void 0&&delete f[S]}),b=a.setItem(o,l(f)).catch(g)}function p(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function g(S){u&&u(S)}var $=function(){for(;h.length!==0;)w();return b||Promise.resolve()};return{update:v,flush:$}}function zG(e){return JSON.stringify(e)}function UG(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:gy).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=BG,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(u){a[u]=t.reduceRight(function(d,f){return f.out(d,u,l)},i(l[u]))}),a}catch(u){throw u}else return})}function BG(e){return JSON.parse(e)}function HG(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:gy).concat(e.key);return t.removeItem(n,WG)}function WG(e){}function rb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ur(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rb(n,!0).forEach(function(r){YG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rb(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function YG(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function VG(e,t){if(e==null)return{};var n=qG(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function qG(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var GG=5e3;function QG(e,t){var n=e.version!==void 0?e.version:FG;e.debug;var r=e.stateReconciler===void 0?jG:e.stateReconciler,i=e.getStoredState||UG,o=e.timeout!==void 0?e.timeout:GG,a=null,l=!1,u=!0,d=function(h){return h._persist.rehydrated&&a&&!u&&a.update(h),h};return function(f,h){var m=f||{},b=m._persist,v=VG(m,["_persist"]),w=v;if(h.type===vy){var x=!1,p=function(R,W){x||(h.rehydrate(e.key,R,W),x=!0)};if(o&&setTimeout(function(){!x&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),u=!1,a||(a=LG(e)),b)return ur({},t(w,h),{_persist:b});if(typeof h.rehydrate!="function"||typeof h.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return h.register(e.key),i(e).then(function(T){var R=e.migrate||function(W,L){return Promise.resolve(W)};R(T,n).then(function(W){p(W)},function(W){p(void 0,W)})},function(T){p(void 0,T)}),ur({},t(w,h),{_persist:{version:n,rehydrated:!1}})}else{if(h.type===xy)return l=!0,h.result(HG(e)),ur({},t(w,h),{_persist:b});if(h.type===my)return h.result(a&&a.flush()),ur({},t(w,h),{_persist:b});if(h.type===yy)u=!0;else if(h.type===Hf){if(l)return ur({},w,{_persist:ur({},b,{rehydrated:!0})});if(h.key===e.key){var g=t(w,h),$=h.payload,S=r!==!1&&$!==void 0?r($,f,g,e):g,P=ur({},S,{_persist:ur({},b,{rehydrated:!0})});return d(P)}}}if(!b)return t(f,h);var N=t(w,h);return N===w?f:d(ur({},N,{_persist:b}))}}function ib(e){return JG(e)||ZG(e)||KG()}function KG(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function ZG(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function JG(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function ob(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function rg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ob(n,!0).forEach(function(r){XG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ob(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function XG(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L9={registry:[],bootstrapped:!1},eQ=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:L9,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case by:return rg({},t,{registry:[].concat(ib(t.registry),[n.key])});case Hf:var r=t.registry.indexOf(n.key),i=ib(t.registry);return i.splice(r,1),rg({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function tQ(e,t,n){var r=n||!1,i=Ym(eQ,L9,t&&t.enhancer?t.enhancer:void 0),o=function(d){i.dispatch({type:by,key:d})},a=function(d,f,h){var m={type:Hf,payload:f,err:h,key:d};e.dispatch(m),i.dispatch(m),r&&l.getState().bootstrapped&&(r(),r=!1)},l=rg({},i,{purge:function(){var d=[];return e.dispatch({type:xy,result:function(h){d.push(h)}}),Promise.all(d)},flush:function(){var d=[];return e.dispatch({type:my,result:function(h){d.push(h)}}),Promise.all(d)},pause:function(){e.dispatch({type:yy})},persist:function(){e.dispatch({type:vy,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var $y={},wy={};wy.__esModule=!0;wy.default=iQ;function hd(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?hd=function(n){return typeof n}:hd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},hd(e)}function tp(){}var nQ={getItem:tp,setItem:tp,removeItem:tp};function rQ(e){if((typeof self>"u"?"undefined":hd(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function iQ(e){var t="".concat(e,"Storage");return rQ(t)?self[t]:nQ}$y.__esModule=!0;$y.default=sQ;var oQ=aQ(wy);function aQ(e){return e&&e.__esModule?e:{default:e}}function sQ(e){var t=(0,oQ.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var z9=void 0,lQ=uQ($y);function uQ(e){return e&&e.__esModule?e:{default:e}}var dQ=(0,lQ.default)("local");z9=dQ;const cQ={key:"root",version:1,storage:z9},fQ=QG(cQ,cF),U9=ZR({reducer:{reducers:fQ},middleware:e=>e({serializableCheck:{ignoredActions:[my,Hf,yy,vy,xy,by]}})});function pd(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pd=function(n){return typeof n}:pd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},pd(e)}function hQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ab(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pQ(e,t,n){return t&&ab(e.prototype,t),n&&ab(e,n),e}function gQ(e,t){return t&&(pd(t)==="object"||typeof t=="function")?t:gd(e)}function ig(e){return ig=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ig(e)}function gd(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function mQ(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&og(e,t)}function og(e,t){return og=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},og(e,t)}function md(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B9=function(e){mQ(t,e);function t(){var n,r;hQ(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=gQ(this,(n=ig(t)).call.apply(n,[this].concat(o))),md(gd(r),"state",{bootstrapped:!1}),md(gd(r),"_unsubscribe",void 0),md(gd(r),"handlePersistorState",function(){var l=r.props.persistor,u=l.getState(),d=u.bootstrapped;d&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return pQ(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(C.PureComponent);md(B9,"defaultProps",{children:null,loading:null});const yQ=new LT;let vQ=tQ(U9);const xQ=rp.createRoot(document.getElementById("root"));xQ.render(s(ne.StrictMode,{children:s(WC,{children:s(mR,{store:U9,children:s(B9,{persistor:vQ,children:s(XT,{client:yQ,children:s(EG,{})})})})})}));RG()});export default bQ();
