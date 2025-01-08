"use strict";var o=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var v=o(function(A,q){
var n=6;function R(i,r,s,l){var a,e,t,u;if(a=0,i<=0)return a;if(e=l,s===0)return i*r[e];if(s===1){if(t=i%n,t>0)for(u=0;u<t;u++)a+=r[e],e+=s;if(i<n)return a;for(u=t;u<i;u+=n)a+=r[e]+r[e+1]+r[e+2]+r[e+3]+r[e+4]+r[e+5],e+=n;return a}for(u=0;u<i;u++)a+=r[e],e+=s;return a}q.exports=R
});var c=o(function(B,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=v();function M(i,r,s){return E(i,r,s,_(i,s))}m.exports=M
});var y=o(function(C,p){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=c(),b=v();O(d,"ndarray",b);p.exports=d
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=y(),f,j=h(g(__dirname,"./native.js"));k(j)?f=w:f=j;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
