import{d as e,u as a,s as t,ct as s,Z as l,bd as r,be as c,o,k as i,b as u,w as n,f as d,t as p,p as m,c as _,F as f,l as g,g as h,E as x,r as y,a as b,i as v,h as j,j as w,a5 as k,e as C}from"./index-9f08b835.js";import{_ as L}from"./page-meta.d2ccf398.js";import{_ as I}from"./u-icon.f0423eb2.js";import{_ as O}from"./u-image.e6fb9592.js";import{_ as R}from"./u-empty.765dbffc.js";import{n as V,_ as N}from"./tabbar.vue_vue_type_script_setup_true_lang.da8cbb67.js";import{_ as A}from"./page-status.a37f4663.js";import{_ as E}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-badge.508fc5b2.js";import"./u-loading.15b95fef.js";const F=E(e({__name:"app_center",setup(e){const{getImageUrl:E}=a(),F=t(s.LOADING),S=t({data:[],mobile_title:"",pc_background:"",pc_text_color:1,pc_title:""}),U=t(""),z=t([]),D=()=>{const e=U.value.trim().toLowerCase();z.value=""===e?S.value.data:S.value.data.filter((a=>{const t=a.title.toLowerCase(),s=a.desc.toLowerCase();return console.log(t.includes(e)||s.includes(e)),t.includes(e)||s.includes(e)}))},G=async()=>{try{const e=await x({id:11}),a=JSON.parse(e.data)[0].content;a.data=a.data.filter((e=>1==e.is_show&&e.link.path))||[],S.value=a,F.value=s.NORMAL,D()}catch(e){console.error(e),F.value=s.ERROR}};return l((async()=>{await G()})),r((async()=>{try{await G()}catch(e){}c()})),(e,a)=>{const t=y(b("page-meta"),L),s=v,l=j,r=w,c=k,x=y(b("u-icon"),I),G=y(b("u-image"),O),J=y(b("u-empty"),R),M=y(b("tabbar"),N),Q=y(b("page-status"),A);return o(),i(f,null,[u(t,{"page-style":e.$theme.pageStyle},null,8,["page-style"]),u(r,{class:"app-center"},{default:n((()=>[u(Q,{status:F.value},{error:n((()=>[u(r,{class:"flex justify-center items-center",style:{height:"80vh",color:"#999999"}},{default:n((()=>[d(" 发生错误，请稍后重试 ")])),_:1})])),default:n((()=>[u(r,{class:"header"},{default:n((()=>[u(r,{class:"flex items-center"},{default:n((()=>[u(s,{src:"/mobile/assets/robot-6c84b9bb.png",mode:"widthFix"}),u(l,{class:"title"},{default:n((()=>[d(p(S.value.mobile_title),1)])),_:1})])),_:1}),u(r,{class:"flex items-center search-container"},{default:n((()=>[u(c,{modelValue:U.value,"onUpdate:modelValue":a[0]||(a[0]=e=>U.value=e),class:"search flex-1",placeholder:"输入您想搜索的应用",placeholderClass:"search-placeholder",onInput:D},null,8,["modelValue"]),u(r,{class:"flex justify-center items-center w-[80rpx] h-[80rpx]",onClick:m(D,["stop"])},{default:n((()=>[u(x,{name:"search",size:"32"})])),_:1},8,["onClick"])])),_:1})])),_:1}),u(r,{class:"main"},{default:n((()=>[z.value.length?(o(),_(r,{key:0,class:"grid grid-cols-2",style:{gap:"24rpx"}},{default:n((()=>[(o(!0),i(f,null,g(z.value,((e,a)=>(o(),_(r,{class:"flex items-center p-[20rpx] bg-white rounded-lg",key:a,onClick:m((a=>(e=>{V(e.link)})(e)),["stop"])},{default:n((()=>[u(r,{class:"flex-none"},{default:n((()=>[u(G,{src:C(E)(e.image),width:"82",height:"82","border-radius":"18"},null,8,["src"])])),_:2},1024),u(r,{class:"ml-[20rpx] py-[20rpx]"},{default:n((()=>[u(r,{class:"font-medium text-main text-lg line-clamp-1"},{default:n((()=>[d(p(e.title),1)])),_:2},1024),u(l,{class:"text-muted text-xs mt-2 line-clamp-1"},{default:n((()=>[d(p(e.desc),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})):(o(),i(f,{key:1},[h("        数据为空        "),u(r,{class:"flex justify-center items-center",style:{"min-height":"60vh"}},{default:n((()=>[u(J,{text:"找不到更多应用了～",mode:"list"})])),_:1})],2112))])),_:1}),u(M)])),_:1},8,["status"])])),_:1})],64)}}}),[["__scopeId","data-v-bc19e4c5"]]);export{F as default};