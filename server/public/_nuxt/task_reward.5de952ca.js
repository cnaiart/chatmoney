import{E as C}from"./el-image-viewer.d5621b18.js";import{h as S,m as T,a as L,d as M}from"./entry.dfbfd4fd.js";import{W as B}from"./index.36f10986.js";import{E as D}from"./el-empty.6e01cec2.js";import{k as H,aa as N,H as u,I as _,u as m,X as l,V as b,J as s,Y as A,a7 as y,Z as k}from"./swiper-vue.2eb6bd20.js";import{u as I}from"./asyncData.eaddccf2.js";import{d as J,e as g,f as U}from"./task_reward.d02f9b86.js";import{u as W}from"./useCopy.5611cfa5.js";import{E as j}from"./empty_layer.765c796e.js";import"./throttle.d40f833a.js";import"./debounce.8cbe4cfc.js";import"./position.4bcf7430.js";import"./_plugin-vue_export-helper.c27b6911.js";const z={class:"task-reward flex flex-col min-h-0 h-full bg-body rounded-[12px]"},F={key:0,class:"flex flex-wrap cursor-pointer pr-[20px]"},K={class:"p-[30px] bg-page rounded-[12px]"},O={class:"flex justify-between"},R={class:"text-xl font-medium mt-[20px]"},X=["innerHTML"],Y={class:"text-base text-tx-secondary mt-[5px]"},Z=["innerHTML"],q={key:1,class:"flex items-center justify-center h-full"},_e=H({__name:"task_reward",async setup(G){let o,f;const{copy:x}=W(),r=S(),V=T(),{getTokenUnit:v,config:w}=L(),a={1:{num:"0/1",btn_text:"立即签到",desc:"",payload:"每天签到，可获得"},2:{num:"0/10",btn_text:"复制链接",desc:"",payload:"邀请1人，可获得"},3:{num:"0/3",btn_text:"复制链接",desc:"",payload:"分享1次，可获得"},4:{num:"0/4",btn_text:"立即分享",desc:"",payload:"分享1次，可获得"},5:{num:"0/3",btn_text:"立即分享",desc:"",payload:"分享1次，可获得"},6:{num:"0/3",btn_text:"立即分享",desc:"",payload:"分享1次，可获得"},7:{num:"0/3",btn_text:"立即分享",desc:"",payload:"分享1次，可获得"}},$={4e3:{rowPerView:6},2e3:{rowPerView:5},1800:{rowPerView:4},1600:{rowPerView:4},1440:{rowPerView:4},1360:{rowPerView:3},1280:{rowPerView:3},1024:{rowPerView:3}},{data:h,refresh:E}=([o,f]=N(()=>I(()=>J(),{default(){return[]},lazy:!0,transform:i=>JSON.parse(i.data).filter(e=>{var d,c,p;return e.type===2||e.type===3?a[e.type].btn_text="复制链接":e.data.num>=e.data.day_num&&(a[e.type].btn_text=e.type===1?"已签到":"已分享"),a[e.type].num=`${(d=e.data)==null?void 0:d.num}/${(c=e.data)==null?void 0:c.day_num}`,a[e.type].desc=`${a[e.type].payload}${(p=e.data)==null?void 0:p.one_award}${v}`,e.data.is_open===1})},"$BKJAxy6eS7")),o=await o,f(),o),P=async i=>{switch(i){case 1:await U(),V.getUser(),E();break;case 2:g().then(({share_id:n})=>{x(`${w.current_domain}/?share_id=${n}`)});break;case 3:g().then(({share_id:n})=>{x(`${w.current_domain}/?share_id=${n}`)});break;case 4:await r.push("/draw/sd");break;case 5:await r.push("/video");break;case 6:await r.push("/music");break;case 7:await r.push("/application/layout/robot");break}};return(i,n)=>{const e=C,d=M,c=B,p=D;return u(),_("div",z,[m(h).length?(u(),_("div",F,[l(c,{ref:"waterFull",delay:100,list:m(h),width:364,gutter:20,animationDelay:0,animationDuration:0,backgroundColor:"none",animationPrefix:"none",animated:"none",animationEffect:"none",breakpoints:$},{item:b(({item:t})=>[s("div",K,[s("div",O,[l(e,{src:t.image,class:"w-[70px] h-[70px] rounded-[12px]"},null,8,["src"]),l(d,{style:{"--el-button-bg-color":"#4a92ff"},class:"!border-none",type:"primary",disabled:t.data.num>=t.data.day_num,onClick:A(Q=>P(t.type),["stop"])},{default:b(()=>[y(k(a[t.type].btn_text),1)]),_:2},1032,["disabled","onClick"])]),s("div",null,[s("div",R,[y(k(t.customName||t.name)+" (",1),s("span",{innerHTML:a[t.type].num},null,8,X),y(") ")]),s("div",Y,[s("div",{innerHTML:a[t.type].desc},null,8,Z)])])])]),_:1},8,["list"])])):(u(),_("div",q,[l(p,{image:m(j),"image-size":250,description:"暂无任务奖励"},null,8,["image"])]))])}}});export{_e as default};