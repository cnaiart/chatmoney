import{ca as m}from"./entry.df16adda.js";import{o as w}from"./swiper-vue.397ea2eb.js";function h(f,T){const u=m(()=>null,"$FkMUrEv73Y"),r=m(()=>null,"$R0fSwpGGZM"),{time:p=2e3,totalTime:a,count:s,callback:c=()=>!1}=T??{};let n=null,t=null,o=0;const i=()=>{if(console.log("count2:",t),t&&t<=Date.now()){e(),c();return}if(s&&o>=s){e(),c();return}o++,n=setTimeout(()=>{f().then(l=>{u.value=l,i()}).catch(l=>{r.value=l})},p)},v=()=>{t=a?Date.now()+a:null,i()},e=()=>{setTimeout(()=>{clearTimeout(n),n=null,t=null,o=0},0)};return w(()=>{e()}),{start:v,end:e,error:r,result:u}}export{h as u};