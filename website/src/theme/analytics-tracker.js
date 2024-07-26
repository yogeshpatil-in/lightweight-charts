"use strict";var c=Object.defineProperty,V=Object.defineProperties,_=Object.getOwnPropertyDescriptor,A=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertyNames,x=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var S=(t,e,n)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,w=(t,e)=>{for(var n in e||(e={}))h.call(e,n)&&S(t,n,e[n]);if(x)for(var n of x(e))k.call(e,n)&&S(t,n,e[n]);return t},U=(t,e)=>V(t,A(e));var L=(t,e)=>{for(var n in e)c(t,n,{get:e[n],enumerable:!0})},O=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of T(e))!h.call(t,r)&&r!==n&&c(t,r,{get:()=>e[r],enumerable:!(i=_(e,r))||i.enumerable});return t};var Q=t=>O(c({},"__esModule",{value:!0}),t);var f=(t,e,n)=>new Promise((i,r)=>{var u=s=>{try{a(n.next(s))}catch(p){r(p)}},l=s=>{try{a(n.throw(s))}catch(p){r(p)}},a=s=>s.done?i(s.value):Promise.resolve(s.value).then(u,l);a((n=n.apply(t,e)).next())});var K={};L(K,{safeTrackPageView:()=>B,trackPageView:()=>P});module.exports=Q(K);var o=[];for(m=0;m<256;++m)o.push((m+256).toString(16).slice(1));var m;function I(t,e=0){return(o[t[e+0]]+o[t[e+1]]+o[t[e+2]]+o[t[e+3]]+"-"+o[t[e+4]]+o[t[e+5]]+"-"+o[t[e+6]]+o[t[e+7]]+"-"+o[t[e+8]]+o[t[e+9]]+"-"+o[t[e+10]]+o[t[e+11]]+o[t[e+12]]+o[t[e+13]]+o[t[e+14]]+o[t[e+15]]).toLowerCase()}var g,R=new Uint8Array(16);function v(){if(!g&&(g=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!g))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(R)}var j=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),y={randomUUID:j};function E(t,e,n){if(y.randomUUID&&!e&&!t)return y.randomUUID();t=t||{};var i=t.random||(t.rng||v)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){n=n||0;for(var r=0;r<16;++r)e[n+r]=i[r];return e}return I(i)}var d=E;var N="https://snowplow-pixel.tradingview.com",z={e:"pv",aid:"tradingview",p:"web"};function J(){return{schema:"iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0",data:[{schema:"iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0",data:{id:d()}}]}}function H(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(t){return}}function q(t){let e=Date.now().toString(),n=Date.now().toString(),i=btoa(JSON.stringify(J())),r=d(),u=window.location.href,l=document.title,a=document.referrer,s=H();return U(w(w({},z),t),{dtm:e,stm:n,cx:i,url:u,page:l,refr:a,tz:s,eid:r})}var b="tradingview_ids",D="tradingview_id_last_used";function C(){if(!window||!window.localStorage)return null;let t=window.localStorage.getItem(b);return t?JSON.parse(t):null}function F(t){return window.localStorage.setItem(D,t.toString()),!0}function G(){if(!window||!window.localStorage)return null;let t=window.localStorage.getItem(D);return t?parseInt(t,10):null}function M(t){return window.localStorage.setItem(b,JSON.stringify(t)),!0}function X(t){return t.match(/^https:\/\/tradingview\.github\.io\/lightweight-charts/)!==null}var Z=30*60*1e3;function P(){return f(this,null,function*(){if(!X(window.location.href))return;let t=C(),e=G(),n=Date.now();F(n),t||(t={duid:d(),sid:d()});let i=!e||n-e>Z;t.sid=i?d():t==null?void 0:t.sid,M(t);let r=q(t),u=new window.URL("i",N);for(let[l,a]of Object.entries(r))u.searchParams.append(l,a);yield window.fetch(u.toString(),{method:"GET",mode:"no-cors"})})}function B(){return f(this,null,function*(){try{yield P()}catch(t){}})}