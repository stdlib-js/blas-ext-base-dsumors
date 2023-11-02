"use strict";var f=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var c=f(function(z,q){
var o=6;function _(i,r,t){var n,a,u,e;if(n=0,i<=0)return n;if(i===1||t===0)return r[0];if(t===1){if(u=i%o,u>0)for(e=0;e<u;e++)n+=r[e];if(i<o)return n;for(e=u;e<i;e+=o)n+=r[e]+r[e+1]+r[e+2]+r[e+3]+r[e+4]+r[e+5];return n}for(t<0?a=(1-i)*t:a=0,e=0;e<i;e++)n+=r[a],a+=t;return n}q.exports=_
});var y=f(function(A,p){
var s=6;function d(i,r,t,n){var a,u,e,v;if(a=0,i<=0)return a;if(i===1||t===0)return r[n];if(u=n,t===1){if(e=i%s,e>0)for(v=0;v<e;v++)a+=r[u],u+=t;if(i<s)return a;for(v=e;v<i;v+=s)a+=r[u]+r[u+1]+r[u+2]+r[u+3]+r[u+4]+r[u+5],u+=s;return a}for(v=0;v<i;v++)a+=r[u],u+=t;return a}p.exports=d
});var M=f(function(B,l){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=c(),O=y();E(j,"ndarray",O);l.exports=j
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=M(),m,R=g(b(__dirname,"./native.js"));h(R)?m=k:m=R;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
