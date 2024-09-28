import{d as e,u as a,s as t,G as l,o as s,k as r,b as o,w as u,f as i,t as n,e as p,F as c,j as m,r as d,a as f,aA as x,cA as _,L as y,x as v,aE as g,l as h,g as w,c as k,z as b,m as j,R as C,T as V,ah as T,av as z,bc as F,i as S,aD as E}from"./index-9f08b835.js";import{_ as R}from"./page-meta.d2ccf398.js";import{_ as U}from"./u-loading.15b95fef.js";import{_ as B}from"./u-tag.d6be710f.js";import{_ as I}from"./z-paging.5d396652.js";import{F as L}from"./floating-menu.a8f47c3e.js";import{_ as N}from"./u-button.cd082997.js";import{_ as q}from"./u-popup.6c89de8e.js";import{a as A,d as D}from"./video.a7b79a96.js";import{u as $}from"./useCopy.7659937f.js";import{a as G}from"./download.bd561ce2.js";import{I as J}from"./icon_copy.36709540.js";import{I as O,a as Q}from"./icon_delete.577abfad.js";import{I as H,a as K,b as M}from"./error.b4c7b708.js";import{_ as P}from"./u-icon.f0423eb2.js";import{_ as W}from"./u-select.09a21b4d.js";import{u as X}from"./useLockFn.cde70c0d.js";import"./_plugin-vue_export-helper.1b428a4d.js";const Y=e({__name:"video-share",emits:["success","close"],setup(e,{expose:y,emit:v}){a();const g=t(!1),h=t(!1),w=t([]),k=l({category_id:"",records_id:"",style_name:""}),{lockFn:b,isLock:j}=X((async()=>{await _(k),g.value=!1,v("success",k.records_id)})),C=e=>{k.category_id=e[0].value,k.category_name=e[0].label},V=()=>{v("close")};return y({open:e=>{(async()=>{try{const e=await x({type:3,share:1});e.unshift({name:"全部",id:""}),w.value=e}catch(e){console.log("获取视频分类失败=>",e)}})(),g.value=!0,k.records_id=e}}),(e,a)=>{const t=m,l=d(f("u-icon"),P),x=d(f("u-button"),N),_=d(f("u-popup"),q),y=d(f("u-select"),W);return s(),r(c,null,[o(_,{modelValue:g.value,"onUpdate:modelValue":a[1]||(a[1]=e=>g.value=e),mode:"center","border-radius":"14",duration:"16",onClose:V},{default:u((()=>[o(t,{class:"w-[650rpx]"},{default:u((()=>[o(t,{class:"p-[30rpx] text-center text-lg font-medium"},{default:u((()=>[i("分享至广场")])),_:1}),o(t,{class:"h-[230rpx] p-[30rpx]"},{default:u((()=>[o(t,{class:"flex items-center justify-between rounded-[12rpx] p-[20rpx] text-content bg-[#eeeeee]",onClick:a[0]||(a[0]=e=>h.value=!0)},{default:u((()=>[i(n(k.category_name?k.category_name:"全部")+" ",1),o(l,{name:"arrow-right"})])),_:1})])),_:1}),o(t,{class:"flex justify-center mt-[30rpx] pb-[20rpx]"},{default:u((()=>[o(x,{type:"primary",customStyle:{width:"220rpx"},loading:p(j),onClick:p(b)},{default:u((()=>[i(" 确定 ")])),_:1},8,["loading","onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),o(y,{modelValue:h.value,"onUpdate:modelValue":a[2]||(a[2]=e=>h.value=e),list:w.value,valueName:"id",labelName:"name",confirmColor:e.$theme.primaryColor,onConfirm:C},null,8,["modelValue","list","confirmColor"])],64)}}}),Z=e({__name:"video_list",setup(e){const x=b(),_=a(),P=y(),{copy:W}=$(),X=t([]),Z=[{name:"全部",type:-1},{name:"生成中",type:1},{name:"生成成功",type:2},{name:"生成失败",type:3}],ee=t(!1),ae=y(null),te=t([]),le=t(-1),se=l({show:!1,item:{}}),re=async()=>{await W(se.item.video_url),se.show=!1},oe=y(),ue=async(e,a)=>{try{const{lists:t}=await A({page_no:e,page_size:a,status:le.value});P.value.complete(t)}catch(t){P.value.complete(!1)}finally{setTimeout((()=>{clearTimeout(oe.value),[-1,1].includes(le.value)&&X.value.some((e=>1===e.status))&&(oe.value=setTimeout((()=>{ie()}),6e3))}),100)}},ie=()=>{var e;null==(e=P.value)||e.refresh()};return v(le,(()=>{ie()})),g((()=>{clearTimeout(oe.value)})),(e,a)=>{const t=d(f("page-meta"),R),l=m,y=d(f("u-loading"),U),v=d(f("u-tag"),B),g=S,b=E,A=d(f("z-paging"),I),$=d(f("floating-menu"),L),oe=d(f("u-button"),N),ne=d(f("u-popup"),q);return s(),r(c,null,[o(t,{"page-style":e.$theme.pageStyle},null,8,["page-style"]),o(A,{ref_key:"pagingRef",ref:P,modelValue:X.value,"onUpdate:modelValue":a[0]||(a[0]=e=>X.value=e),"auto-clean-list-when-reload":!1,"safe-area-inset-bottom":!0,onQuery:ue,fixed:!0},{top:u((()=>[o(l,{class:"p-[20rpx] flex mx-[-10rpx]"},{default:u((()=>[(s(),r(c,null,h(Z,(e=>o(l,{class:"flex-1 px-[10rpx]",key:e.type},{default:u((()=>[o(l,{class:j(["bg-white py-[16rpx] rounded-[10rpx] shadow-light text-center",{"!bg-primary text-white":e.type===le.value}]),onClick:a=>le.value=e.type},{default:u((()=>[i(n(e.name),1)])),_:2},1032,["class","onClick"])])),_:2},1024))),64))])),_:1})])),default:u((()=>[o(l,{class:"px-[20rpx]"},{default:u((()=>[(s(!0),r(c,null,h(X.value,(e=>(s(),k(l,{class:"mb-[20rpx] rounded-[12rpx] shadow-[0px_3px_16px_0px_#EBEEFD] bg-white",key:e.id},{default:u((()=>[1===e.status?(s(),k(l,{key:0,class:"flex flex-col items-center justify-center h-[768rpx] px-[130rpx] text-center"},{default:u((()=>[o(y,{mode:"flower",size:"80"}),o(l,{class:"text-xl font-medium my-[26rpx]"},{default:u((()=>[i(" 正在生成中 ")])),_:1}),o(l,{class:"text-muted"},{default:u((()=>[i(" 预计花费30~60s时间，可离开后再回来查看效果喔～ ")])),_:1})])),_:1})):w("v-if",!0),2===e.status||3===e.status?(s(),k(l,{key:1,class:"px-[30rpx]"},{default:u((()=>[o(l,{class:"py-[30rpx] flex"},{default:u((()=>[2===e.status?(s(),k(v,{key:0,text:e.status_desc,"border-color":"transparent",type:"success"},null,8,["text"])):w("v-if",!0),3===e.status?(s(),k(v,{key:1,text:e.status_desc,"border-color":"transparent",type:"error"},null,8,["text"])):w("v-if",!0),o(l,{class:"ml-auto flex items-center"},{default:u((()=>[2===e.status?(s(),r(c,{key:0},[o(g,{class:"w-[32rpx] h-[32rpx] ml-[34rpx]",src:p(J),alt:"复制",onClick:a=>p(W)(e.prompt)},null,8,["src","onClick"]),o(g,{class:"w-[32rpx] h-[32rpx] ml-[34rpx]",src:p(O),alt:"下载",onClick:a=>(e=>{F()?(se.show=!0,se.item=e):G(e.video_url,"视频","video")})(e)},null,8,["src","onClick"])],64)):w("v-if",!0),o(g,{class:"w-[32rpx] h-[32rpx] ml-[34rpx]",src:p(H),alt:"重新生成",onClick:a=>(async e=>{const a={type:e.type,prompt:e.prompt,scale:e.scale,image:e.image,style_id:e.style_id};T().length>1?(await x.navigateBack(),z("videoRegenerate",a)):await x.redirectTo({path:"/packages/pages/video/video",query:{data:JSON.stringify(a)}})})(e)},null,8,["src","onClick"]),p(_).getSquareConfig.video_award.is_open?(s(),k(g,{key:1,class:"w-[32rpx] h-[32rpx] ml-[34rpx]",src:p(K),alt:"分享",onClick:a=>(async(e,a)=>{te.value.includes(e)||a?await C({title:"温馨提示",content:"该视频已分享过了！"}):(ee.value=!0,await V(),setTimeout((()=>ae.value.open(e)),50))})(e.id,e.is_share)},null,8,["src","onClick"])):w("v-if",!0),o(g,{class:"w-[32rpx] h-[32rpx] ml-[34rpx]",src:p(Q),alt:"删除",onClick:a=>(async e=>{const{cancel:a}=await C({title:"温馨提示",content:"确定删除？"});a||(await D({id:e}),ie())})(e.id)},null,8,["src","onClick"])])),_:2},1024)])),_:2},1024),3===e.status?(s(),k(l,{key:0,class:"flex min-h-[472rpx] flex-col justify-center items-center"},{default:u((()=>[o(g,{class:"w-[300rpx] h-[300rpx]",src:p(M)},null,8,["src"]),o(l,{class:"text-xl font-medium"},{default:u((()=>[i(" 生成视频失败 ")])),_:1}),e.fail_reason?(s(),k(l,{key:0,class:"text-muted mt-[26rpx]"},{default:u((()=>[i(" 错误信息："+n(e.fail_reason),1)])),_:2},1024)):w("v-if",!0)])),_:2},1024)):2===e.status?(s(),k(l,{key:1,class:"h-[472rpx]"},{default:u((()=>[o(b,{class:"w-full h-full rounded-[10rpx] overflow-hidden",preload:"",playsinline:"","webkit-playsinline":"","x-webkit-airplay":"allow","x5-video-player-fullscreen":"true","x5-video-player-type":"h5",src:e.video_url},null,8,["src"])])),_:2},1024)):w("v-if",!0),o(l,{class:"line-clamp-2 mt-[20rpx]"},{default:u((()=>[i(n(e.prompt),1)])),_:2},1024),o(l,{class:"flex items-center py-[30rpx]"},{default:u((()=>[o(l,{class:"text-muted mr-auto"},{default:u((()=>[i(" 时间："+n(e.create_time),1)])),_:2},1024),o(l,{class:"ml-[20rpx]"},{default:u((()=>[o(v,{text:e.type_desc,size:"mini","border-color":"transparent"},null,8,["text"])])),_:2},1024)])),_:2},1024)])),_:2},1024)):w("v-if",!0)])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"]),w("    悬浮菜单    "),o($),o(ne,{modelValue:se.show,"onUpdate:modelValue":a[1]||(a[1]=e=>se.show=e),mode:"center","border-radius":"15",closeable:""},{default:u((()=>[o(l,{class:"w-[650rpx] p-[40rpx]"},{default:u((()=>[o(l,{class:"text-lg font-bold text-center mb-[40rpx]"},{default:u((()=>[i(" 下载视频 ")])),_:1}),o(l,{class:"mb-[40rpx]"},{default:u((()=>[i(" 当前环境不支持下载，请复制链接到浏览器打开下载 ")])),_:1}),o(oe,{type:"primary",shape:"circle",onClick:re},{default:u((()=>[i(" 复制链接 ")])),_:1})])),_:1})])),_:1},8,["modelValue"]),ee.value?(s(),k(Y,{key:0,ref_key:"shareRef",ref:ae,onClose:a[2]||(a[2]=e=>ee.value=!1),onSuccess:a[3]||(a[3]=e=>te.value.push(e))},null,512)):w("v-if",!0)],64)}}});export{Z as default};