"use strict";var o=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var v=o(function(A,q){
var n=6;function R(u,r,i,l){var s,e,t,a;if(u<=0)return 0;if(e=l,i===0)return u*r[e];if(s=r[e],e+=i,i===1){if(t=(u-1)%n,t>0)for(a=0;a<t;a++)s+=r[e],e+=i;if(u<n)return s;for(a=t;a<u-1;a+=n)s+=r[e]+r[e+1]+r[e+2]+r[e+3]+r[e+4]+r[e+5],e+=n;return s}for(a=1;a<u;a++)s+=r[e],e+=i;return s}q.exports=R
});var c=o(function(B,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=v();function M(u,r,i){return E(u,r,i,_(u,i))}m.exports=M
});var y=o(function(C,p){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=c(),b=v();O(d,"ndarray",b);p.exports=d
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=y(),f,j=h(g(__dirname,"./native.js"));k(j)?f=w:f=j;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
