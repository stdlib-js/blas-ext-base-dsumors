"use strict";var o=function(u,r){return function(){try{return r||u((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var v=o(function(A,q){
var n=6;function R(u,r,a,l){var s,e,t,i;if(u<=0)return 0;if(e=l,a===0)return u*r[e];if(s=r[e],e+=a,a===1){if(t=(u-1)%n,t>0)for(i=0;i<t;i++)s+=r[e],e+=a;if(u<n)return s;for(i=t;i<u-1;i+=n)s+=r[e]+r[e+1]+r[e+2]+r[e+3]+r[e+4]+r[e+5],e+=n;return s}for(i=1;i<u;i++)s+=r[e],e+=a;return s}q.exports=R
});var c=o(function(B,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=v();function M(u,r,a){return E(u,r,a,_(u,a))}m.exports=M
});var y=o(function(C,p){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=c(),b=v();O(d,"ndarray",b);p.exports=d
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=y(),f,j=h(g(__dirname,"./native.js"));k(j)?f=w:f=j;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
