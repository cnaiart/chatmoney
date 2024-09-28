"use strict";const e=require("../../../../common/vendor.js"),t=e=>/^data:image\/(\w+);base64/.test(e);["devtools"].includes(e.index.getSystemInfoSync().platform);let n={};const r=()=>e.wx$1;function s(t){const[,n]=/^data:image\/(\w+);base64,/.exec(t)||[];return new Promise(((s,a)=>{const o=e.index.getFileSystemManager();n||a(new Error("ERROR_BASE64SRC_PARSE"));const i=(new Date).getTime();const c=`${r().env.USER_DATA_PATH}/${i}.${n}`;o.writeFile({filePath:c,data:t.split(",")[1],encoding:"base64",success(){s(c)},fail(e){a(e)}})}))}exports.base64ToPath=s,exports.compareVersion=function(e,t){e=e.split("."),t=t.split(".");const n=Math.max(e.length,t.length);for(;e.length<n;)e.push("0");for(;t.length<n;)t.push("0");for(let r=0;r<n;r++){const n=parseInt(e[r],10),s=parseInt(t[r],10);if(n>s)return 1;if(n<s)return-1}return 0},exports.getImageInfo=function(r,a){const o=this&&this.canvas&&this.canvas.createImage;return new Promise((async(a,i)=>{let c=r;if(n[r]&&n[r].errMsg)a(n[r]);else{try{t(r)&&(c=await s(r))}catch(p){i({...p,src:c})}e.index.getImageInfo({src:c,success:e=>{if(e.path=/^\.|^\/(?=[^\/])/.test(c)?`/${e.path}`:e.path,o){const t=this.canvas.createImage();return t.onload=function(){e.path=t,n[r]=e,a(n[r])},t.onerror=function(e){i({err:e,path:r})},void(t.src=c)}n[r]=e,a(n[r])},fail(e){console.error({err:e,path:r}),i({err:e,path:r})}})}}))},exports.isBase64=t,exports.pathToBase64=function(t){return/^data:/.test(t)?t:new Promise(((n,r)=>{e.index.canIUse("getFileSystemManager")&&e.index.getFileSystemManager().readFile({filePath:t,encoding:"base64",success:e=>{n("data:image/png;base64,"+e.data)},fail:e=>{r(e)}})}))},exports.sleep=function(e){return new Promise((t=>setTimeout(t,e)))},exports.toPx=function t(n,r,s=!1){if("number"==typeof n)return n;if(function(e){return/^-?\d+(\.\d+)?$/.test(e)}(n))return 1*n;if("string"==typeof n){const a=/^-?([0-9]+)?([.]{1}[0-9]+){0,1}(em|rpx|px|%)$/g.exec(n);if(!n||!a)return 0;const o=a[3];n=parseFloat(n);let i=0;return"rpx"===o?i=e.index.upx2px(n):"px"===o?i=1*n:"%"===o?i=n*t(r)/100:"em"===o&&(i=n*t(r||14)),s?1*i.toFixed(2):Math.round(i)}return 0};