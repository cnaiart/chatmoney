import{_ as a}from"./page-meta.d2ccf398.js";import{d as e,s,G as t,x as l,H as r,o as i,k as c,b as o,w as u,F as n,l as p,z as m,r as d,a as _,j as f,I as x,c as g,m as y,f as h,t as v,B as w,p as b,g as k}from"./index-9f08b835.js";import{_ as j}from"./u-search.333cf11c.js";import{_ as C}from"./u-image.e6fb9592.js";import{_ as F}from"./u-icon.f0423eb2.js";import{_ as z}from"./tabbar.vue_vue_type_script_setup_true_lang.da8cbb67.js";import{g as V,a as B,c as I}from"./create.9c487682.js";import{_ as S}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-badge.508fc5b2.js";const q=S(e({__name:"ai_creation",setup(e){const S=m(),q=s(""),G=s([]),H=t({lists:[],current:0}),T=async()=>{G.value=await B({category_id:H.current,keyword:q.value})};return l((()=>H.current),(()=>{T()})),r((async()=>{await(async()=>{H.lists=await V()})(),await T()})),(e,s)=>{const t=d(_("page-meta"),a),l=d(_("u-search"),j),r=f,m=x,V=d(_("u-image"),C),B=d(_("u-icon"),F),U=d(_("tabbar"),z);return i(),c(n,null,[o(t,{"page-style":e.$theme.pageStyle},null,8,["page-style"]),o(r,{class:"ai-creation"},{default:u((()=>[o(r,{class:"py-[14rpx] px-[30rpx] bg-white"},{default:u((()=>[o(l,{modelValue:q.value,"onUpdate:modelValue":s[0]||(s[0]=a=>q.value=a),placeholder:"请输入关键词搜索",height:"72","bg-color":"#F7F8F9",onSearch:s[1]||(s[1]=a=>T()),onCustom:s[2]||(s[2]=a=>T()),onClear:s[3]||(s[3]=a=>T())},null,8,["modelValue"])])),_:1}),o(m,{"scroll-x":"",class:"whitespace-nowrap"},{default:u((()=>[o(r,{class:"inline-flex py-[20rpx] px-[10rpx]"},{default:u((()=>[(i(!0),c(n,null,p(H.lists,(a=>(i(),g(r,{class:y(["category-item mx-[10rpx]",{"!text-white !bg-primary":a.id==H.current}]),key:a.id,onClick:e=>H.current=a.id},{default:u((()=>[h(v(a.name),1)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1}),o(r,{class:"flex-1 min-h-0"},{default:u((()=>[o(m,{"scroll-y":"",class:"h-full"},{default:u((()=>[o(r,{class:"px-[20rpx]"},{default:u((()=>[(i(!0),c(n,null,p(G.value,(a=>(i(),g(r,{key:a.id,class:"mb-[20rpx]",onClick:e=>{return s=a.id,void S.navigateTo({path:"/packages/pages/create/create",query:{id:s}});var s}},{default:u((()=>[o(r,{class:"bg-white shadow-[0_3px_10px_#ebeefd] p-[30rpx] rounded-[12rpx] relative"},{default:u((()=>[o(r,{class:"flex items-center"},{default:u((()=>[o(V,{src:a.image,width:"64",height:"64",class:"flex-none"},null,8,["src"]),o(r,{class:"font-medium text-[32rpx] ml-[20rpx]"},{default:u((()=>[h(v(a.name),1)])),_:2},1024)])),_:2},1024),o(r,{class:"text-[26rpx] text-muted line-clamp-2 my-[20rpx]"},{default:u((()=>[h(v(a.tips),1)])),_:2},1024),o(r,{class:"collection flex justify-end"},{default:u((()=>[w("div",{class:"text-muted mr-[20rpx] text-sm"}," 🔥 "+v(a.use_num)+"人使用过 ",1),o(r,{onClick:b((e=>(async a=>{await I({id:a}),await T()})(a.id)),["stop"])},{default:u((()=>[a.is_collect?k("v-if",!0):(i(),g(B,{key:0,size:38,name:"star",color:"#999"})),a.is_collect?(i(),g(B,{key:1,size:38,name:"star-fill",color:"#FFB529"})):k("v-if",!0)])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1}),o(U)])),_:1})],64)}}}),[["__scopeId","data-v-0e8bdc68"]]);export{q as default};