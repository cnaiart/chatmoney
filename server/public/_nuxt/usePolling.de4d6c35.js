import{a as d}from"./swiper-vue.2eb6bd20.js";const l={};function k(T,p){const{key:t,time:D=2e3,totalTime:r,count:a,callback:c=()=>!1}=p??{};let n=null,o=null,u=0;const s=d(null),f=d(null),m=()=>{if(o&&o<=Date.now()){e(),c();return}if(a&&u>=a){e(),c();return}u++,n=setTimeout(()=>{T().then(i=>{s.value=i,m()}).catch(i=>{f.value=i})},D)},g=()=>{e(),t&&l[t]&&(l[t].end(),delete l[t]),o=r?Date.now()+r:null,m(),t&&(l[t]={end:e})},e=()=>{n&&setTimeout(()=>{clearTimeout(n),n=null,o=null,u=0,t&&delete l[t]},0)};return{start:g,end:e,error:f,result:s}}export{k as u};