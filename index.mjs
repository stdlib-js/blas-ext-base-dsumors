// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";function n(r,n,e){var f,t,i,u;if(f=0,r<=0)return f;if(1===r||0===e)return n[0];if(1===e){if((i=r%6)>0)for(u=0;u<i;u++)f+=n[u];if(r<6)return f;for(u=i;u<r;u+=6)f+=n[u]+n[u+1]+n[u+2]+n[u+3]+n[u+4]+n[u+5];return f}for(t=e<0?(1-r)*e:0,u=0;u<r;u++)f+=n[t],t+=e;return f}function e(r,n,e,f){var t,i,u,o;if(t=0,r<=0)return t;if(1===r||0===e)return n[f];if(i=f,1===e){if((u=r%6)>0)for(o=0;o<u;o++)t+=n[i],i+=e;if(r<6)return t;for(o=u;o<r;o+=6)t+=n[i]+n[i+1]+n[i+2]+n[i+3]+n[i+4]+n[i+5],i+=6;return t}for(o=0;o<r;o++)t+=n[i],i+=e;return t}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
