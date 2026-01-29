// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";var t=6;function n(r,e,n,i){var s,d,f,o;if(r<=0)return 0;if(d=i,0===n)return r*e[d];if(s=e[d],d+=n,1===n){if((f=(r-1)%t)>0)for(o=0;o<f;o++)s+=e[d],d+=n;if(r<t)return s;for(o=f;o<r-1;o+=t)s+=e[d]+e[d+1]+e[d+2]+e[d+3]+e[d+4]+e[d+5],d+=t;return s}for(o=1;o<r;o++)s+=e[d],d+=n;return s}function i(r,t,i){return n(r,t,i,e(r,i))}r(i,"ndarray",n);export{i as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
