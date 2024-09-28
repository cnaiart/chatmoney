import{_ as Y}from"./index.vue.f6fe58b5.js";import{_ as Q,a as G,b as X}from"./index.e1737bf1.js";import{_ as tt}from"./index.vue.403e5f16.js";import{b as et,a as ot,c as at,ck as nt,e as rt,w as st,u as it,z as q,A as B,f as R,E as ct}from"./entry.df16adda.js";import{u as lt}from"./asyncData.10050198.js";import{u as ut}from"./useCopy.20b5e5cf.js";import{_ as pt}from"./login.vue.2ae21ef0.js";import{v as dt,a as mt,c as ft,r as _t}from"./robot.5da26683.js";import{E as ht}from"./el-scrollbar.f4d658ff.js";import{k as vt,s as I,a as L,ah as gt,l as yt,E as wt,j as bt,I as _,J as T,K as c,u as t,Y as S,a4 as O,a2 as m,a0 as h,$ as N,Z as xt,ap as kt,a5 as Et,ae as Ct}from"./swiper-vue.397ea2eb.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./el-image-viewer.ad15677e.js";import"./throttle.92cc074e.js";import"./debounce.2369182b.js";import"./position.a44f3ead.js";import"./el-link.00e3f970.js";import"./useAudioPlay.49014f22.js";import"./el-dialog.64289190.js";import"./use-dialog.825901d5.js";import"./refs.2a024717.js";import"./unique-id.302803f8.js";import"./chat.e58126ff.js";import"./el-popper.89e34564.js";import"./el-tooltip.4ed993c7.js";import"./el-form-item.f85b8636.js";import"./_baseClone.000a3762.js";import"./_getTag.af7a9d71.js";/* empty css                */import"./index.34adc8c7.js";const Rt=""+new URL("user_avatar.43fe6396.png",import.meta.url).href,Lt={class:"h-full flex flex-col bg-white max-w-[720px] mx-auto"},Tt={class:"border-b border-solid border-br-light flex p-main items-center"},St=["src"],$t={class:"text-2xl line-clamp-1"},At={class:"text-tx-secondary line-clamp-1"},zt={class:"flex-1 min-h-0"},qt={class:"p-main"},Bt={class:"my-[5px]"},It={style:{"padding-bottom":"env(safe-area-inset-bottom)"}},fe=vt({__name:"[key]",async setup(Nt){let b,V;const M=et(),j=ot(),f=at(),{copy:U}=ut(),$=I(),{key:p=""}=j.params,v=L(""),{height:F,width:Vt}=nt(),{data:r}=([b,V]=gt(()=>lt(()=>dt({apikey:p}),{default(){return{robot:{}}}},"$89nQiJhyNZ")),b=await b,V(),b),K=yt(()=>{var e;return((e=r.value.menus)==null?void 0:e.map(s=>({keyword:s})))||[]}),x=async()=>{var s;const e=q(B,{});if(v.value=e.value[p]||"",r.value.pwd&&!v.value)return(s=$.value)==null||s.open(),Promise.reject()},P=async e=>{var l;const s=q(B,{});v.value=e.password,s.value=Object.assign(s.value,{[p]:e.password}),(l=$.value)==null||l.close(),await k(),E()},Z=()=>{const e=q(B,{});e.value=Object.assign(e.value,{[p]:""})},d=L([]),k=async()=>{const e=await mt({share_apikey:p,identity:f.visitorId,page_size:25e3},{password:v.value,authorization:p,identity:f.visitorId});d.value=e.lists||[]},J=async()=>{await x(),await R.confirm("确定清空记录？"),await ft({},{password:v.value,authorization:p,identity:f.visitorId}),k()};let o=null;const g=L(!1),A=I(),D=async(e,s="input")=>{var y;if(await f.getFingerprint(),await x(),!e)return R.msgError("请输入问题");if(g.value)return;g.value=!0;const l=Date.now();d.value.push({type:1,content:e}),d.value.push({type:2,typing:!0,content:"",key:l}),(y=A.value)==null||y.setInputValue();const n=d.value.find(i=>i.key===l);o=_t({question:e},{password:v.value,authorization:p,identity:f.visitorId}),o.addEventListener("chat",({data:i})=>{const{data:u,index:w}=i;n.content||(n.content=""),n.content+=u}),o.addEventListener("file",({data:i})=>{try{n.files||(n.files=[]),n.files.push({url:i.data})}catch(u){console.error(u)}}),o.addEventListener("image",({data:i})=>{try{n.images||(n.images=[]),n.images.push({url:i.data})}catch(u){console.error(u)}}),o.addEventListener("close",()=>{setTimeout(async()=>{await k(),n.typing=!1,g.value=!1,E()},600)}),o.addEventListener("error",i=>{var u,w,a;i.errorType==="connectError"&&R.msgError("请求失败，请重试"),((u=i.data)==null?void 0:u.code)===1200&&(R.msgError((w=i.data)==null?void 0:w.message),Z(),setTimeout(()=>{x()},10)),["connectError","responseError"].includes(i.errorType)&&(d.value.splice(d.value.length-2,2),s==="input"&&((a=A.value)==null||a.setInputValue(e))),n.typing=!1,setTimeout(()=>{g.value=!1},200)})},z=I(),H=L(),E=async()=>{var s,l,n;const e=(l=(s=z.value)==null?void 0:s.wrapRef)==null?void 0:l.scrollHeight;(n=z.value)==null||n.setScrollTop(e)},{height:W}=rt(H);return st(W,()=>{g.value&&E()},{throttle:500,immediate:!0}),wt(async()=>{await f.getFingerprint(),await x(),await k(),d.value.length&&E()}),bt(()=>{o==null||o.removeEventListener("chat"),o==null||o.removeEventListener("close"),o==null||o.removeEventListener("error"),o==null||o.abort()}),it({title:r.value.name}),(e,s)=>{const l=Y,n=Q,y=X,i=tt,u=ct,w=G;return _(),T("div",null,[c("div",{class:"bg-page",style:Et({height:`${t(F)}px`})},[c("div",Lt,[c("div",Tt,[t(r).robot.image?(_(),T("img",{key:0,src:t(r).robot.image,class:"w-[40px] h-[40px] mr-[10px] flex-none rounded-full",alt:""},null,8,St)):S("",!0),c("div",null,[c("div",$t,O(t(r).robot.name),1),c("div",At,O(t(r).robot.intro),1)])]),c("div",zt,[m(t(ht),{ref_key:"scrollbarRef",ref:z},{default:h(()=>[c("div",qt,[c("div",{ref_key:"innerRef",ref:H},[t(r).robot.welcome_introducer?(_(),N(n,{key:0,class:"mb-[20px]",type:"left",avatar:`${t(r).robot.icons?t(r).robot.icons:t(r).robot.image}`,bg:"var(--el-bg-color-page)"},{default:h(()=>[m(l,{content:t(r).robot.welcome_introducer,onClickCustomLink:s[0]||(s[0]=a=>D(a,"link"))},null,8,["content"])]),_:1},8,["avatar"])):S("",!0),(_(!0),T(xt,null,kt(t(d),(a,C)=>(_(),T("div",{key:a.id+""+C,class:"mt-4"},[a.type==1?(_(),N(n,{key:0,type:"right",bg:"var(--el-color-primary)",color:"white",avatar:t(Rt)},{actions:h(()=>[c("div",Bt,[m(u,{link:"",type:"info",onClick:Mt=>t(U)(a.content)},{icon:h(()=>[m(i,{name:"el-icon-CopyDocument"})]),default:h(()=>[Ct(" 复制 ")]),_:2},1032,["onClick"])])]),default:h(()=>[m(y,{content:a.content},null,8,["content"])]),_:2},1032,["avatar"])):S("",!0),a.type==2?(_(),N(n,{key:1,type:"left",time:a.create_time,avatar:`${t(r).robot.icons?t(r).robot.icons:t(r).robot.image}`,bg:"var(--el-bg-color-page)"},{default:h(()=>[m(y,{content:String(a.content),type:"html",typing:a.typing,"line-numbers":!t(M).isMobile,"show-copy":"","show-context":!!t(r).robot.is_show_context,"show-quote":!!t(r).robot.is_show_quote,"show-voice":t(M).getIsVoiceOpen,context:a.context,quotes:a.quotes,images:a.images,files:a.files,"record-id":a.id,"record-type":2,channel:t(p),"user-id":t(f).visitorId},null,8,["content","typing","line-numbers","show-context","show-quote","show-voice","context","quotes","images","files","record-id","channel","user-id"])]),_:2},1032,["time","avatar"])):S("",!0)]))),128))],512)])]),_:1},512)]),c("div",It,[m(w,{ref_key:"chatActionRef",ref:A,loading:t(g),menus:t(K),"btn-color":"#f6f6f6",onEnter:D,onClear:J,onPause:s[1]||(s[1]=a=>{var C;return(C=t(o))==null?void 0:C.abort()})},null,8,["loading","menus"])])])],4),m(pt,{ref_key:"loginRef",ref:$,onConfirm:P},null,512)])}}});export{fe as default};