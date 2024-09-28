import{d as e,u as t,s as a,ct as s,J as l,G as r,H as o,Z as c,bd as u,be as n,o as i,k as p,b as d,c as m,w as f,e as x,f as _,t as g,F as h,l as y,g as v,r as k,a as b,j as w,h as j,m as C,B as P,a2 as S,a4 as z}from"./index-9f08b835.js";import{_ as I}from"./page-meta.d2ccf398.js";import{p as U,_ as A}from"./payment.5a174b91.js";import{_ as F}from"./router-navigate.3e9d7fb5.js";import{_ as L}from"./u-empty.765dbffc.js";import{_ as R}from"./u-icon.f0423eb2.js";import{_ as T}from"./u-popup.6c89de8e.js";import{_ as V}from"./page-status.a37f4663.js";import{_ as O}from"./tabbar.vue_vue_type_script_setup_true_lang.da8cbb67.js";import{r as G,g as N}from"./recharge.1232300e.js";import{u as B}from"./useLockFn.cde70c0d.js";import{F as D}from"./floating-menu.a8f47c3e.js";import{_ as E}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-radio-group.31ee5ed9.js";import"./emitter.1571a5d9.js";import"./u-button.cd082997.js";import"./u-loading.15b95fef.js";import"./u-badge.508fc5b2.js";const H=E(e({__name:"recharge",setup(e){const E=t(),H=a(s.LOADING),J=a({lists:[]});l();const M=a({is_open:1,tips:"立即支付"}),Q=a(),W=r({orderId:"",from:"recharge",showPay:!1,orderAmount:"",showCheck:!1,showPaySuccess:!1}),{isLock:Z,lockFn:$}=B((async()=>{S({mask:!0,title:"请稍后..."});try{const e=await G({package_id:Q.value});W.orderId=e.order_id,W.showPay=!0,W.orderAmount=e.order_amount}catch(e){}finally{z()}})),q=async()=>{W.showPay=!1,W.showPaySuccess=!0},K=async()=>{var e;J.value=await N({page_type:0}),Q.value=(null==(e=J.value.lists.find((e=>e.is_recommend)))?void 0:e.id)||""},X=async()=>{try{await Promise.all([K()]),H.value=s.NORMAL}catch(e){H.value=s.ERROR}};return o((async()=>{X()})),c((e=>{((null==e?void 0:e.id)||e["amp;id"])&&(e.from||e["amp;from"])&&(W.orderId=(null==e?void 0:e.id)||e["amp;id"],W.from=e.from||e["amp;from"]),(null==e?void 0:e.checkPay)&&(W.showCheck=!0)})),u((async()=>{try{await X()}catch(e){}n()})),(e,t)=>{const a=k(b("page-meta"),I),s=w,l=k(b("price"),A),r=j,o=k(b("router-navigate"),F),c=k(b("u-empty"),L),u=k(b("u-icon"),R),n=k(b("u-popup"),T),S=k(b("page-status"),V),z=k(b("tabbar"),O);return i(),p(h,null,[d(a,{"page-style":e.$theme.pageStyle},null,8,["page-style"]),M.value.is_open?(i(),m(S,{key:0,status:H.value},{error:f((()=>[d(c,{text:"加载出错～"})])),default:f((()=>[x(E).getSwitchConfig.recharge_status?(i(),m(s,{key:0,class:"task-center pb-[180rpx]"},{default:f((()=>[d(s,{class:"account-info"},{default:f((()=>[d(s,{class:"text-xl"},{default:f((()=>[_("我的帐号")])),_:1}),d(s,{class:"mt-[30rpx] flex"},{default:f((()=>[d(s,{class:"flex-1 flex flex-col items-center"},{default:f((()=>[d(s,{class:"text-[36rpx]"},{default:f((()=>{var e;return[_(g(null==(e=J.value.extend)?void 0:e.balance),1)]})),_:1}),d(s,{class:"text-muted mt-[10rpx]"},{default:f((()=>[_(g(x(E).getTokenUnit)+"数量 ",1)])),_:1})])),_:1}),d(s,{class:"flex-1 flex flex-col items-center"},{default:f((()=>[d(s,{class:"text-[36rpx]"},{default:f((()=>{var e;return[_(g(null==(e=J.value.extend)?void 0:e.robot_num),1)]})),_:1}),d(s,{class:"text-muted mt-[10rpx]"},{default:f((()=>[_(" 智能体 ")])),_:1})])),_:1})])),_:1})])),_:1}),d(s,{class:"mt-[30rpx] text-xl"},{default:f((()=>[_(" 套餐选择 ")])),_:1}),d(s,null,{default:f((()=>[(i(!0),p(h,null,y(J.value.lists,(e=>(i(),m(s,{class:C(["recharge-template flex relative items-center !pl-0",{"recharge-template--active":e.id==Q.value}]),key:e.id,onClick:t=>Q.value=e.id},{default:f((()=>[e.tags?(i(),m(s,{key:0,style:{background:"#ff7272"},class:"text-white rounded-bl-lg absolute top-0 right-0 px-[12rpx] py-[6rpx] text-xs"},{default:f((()=>[P("span",null,g(e.tags),1)])),_:2},1024)):v("v-if",!0),d(s,{class:"flex flex-col items-center w-[200rpx] px-[20rpx]"},{default:f((()=>[d(s,null,{default:f((()=>[d(l,{content:e.sell_price,color:"#000",fontWeight:"500",mainSize:"42rpx",minorSize:"32rpx"},null,8,["content"])])),_:2},1024),e.line_price>0?(i(),m(s,{key:0},{default:f((()=>[d(l,{color:"#999999",lineThrough:"",content:e.line_price,mainSize:"28rpx",minorSize:"28rpx"},{prefix:f((()=>[P("div",null,"原价￥")])),_:2},1032,["content"])])),_:2},1024)):v("v-if",!0)])),_:2},1024),d(s,{class:"flex-1 min-w-0"},{default:f((()=>[d(s,{class:"text-xl line-clamp-1 font-medium"},{default:f((()=>[_(g(e.name),1)])),_:2},1024),d(s,{class:"mt-[10rpx] flex"},{default:f((()=>[d(s,{class:"text-sm text-info flex-none"},{default:f((()=>[_(g(x(E).getTokenUnit)+"数量： ",1)])),_:1}),d(s,{class:"text-sm flex flex-wrap items-center"},{default:f((()=>[P("span",{class:"mr-[10rpx]"},g(e.chat_balance),1)])),_:2},1024)])),_:2},1024),d(s,{class:"mt-[10rpx] flex"},{default:f((()=>[d(s,{class:"text-sm text-info flex-none"},{default:f((()=>[_(" 智能体个数： ")])),_:1}),d(s,{class:"text-sm flex flex-wrap items-center"},{default:f((()=>[P("span",{class:"mr-[10rpx]"},g(e.robot_number),1)])),_:2},1024)])),_:2},1024),e.is_give?(i(),m(s,{key:0,class:"mt-[10rpx] text-primary text-sm"},{default:f((()=>[_(" 赠: "),e.give_chat_balance?(i(),m(r,{key:0},{default:f((()=>[_(g(e.give_chat_balance)+g(x(E).getTokenUnit)+" "+g(e.give_robot_number?"，":""),1)])),_:2},1024)):v("v-if",!0),e.give_robot_number?(i(),m(r,{key:1},{default:f((()=>[_(g(e.give_robot_number)+"智能体 ",1)])),_:2},1024)):v("v-if",!0)])),_:2},1024)):v("v-if",!0)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1}),d(s,{class:"bg-white fixed bottom-0 w-full left-0"},{default:f((()=>[d(s,{class:"p-[20rpx]"},{default:f((()=>[d(s,{class:"w-full rounded-full recharge-btn py-[20rpx] text-center text-white",onClick:x($)},{default:f((()=>[_(" 立即支付 ")])),_:1},8,["onClick"]),d(o,{class:"text-center text-info text-sm mt-2",to:"/packages/pages/agreement/agreement?type=pay"},{default:f((()=>[_(" 支付即视为您同意《会员支付协议》 ")])),_:1})])),_:1})])),_:1})])),_:1})):(i(),m(s,{key:1,class:"py-[400rpx]"},{default:f((()=>[d(c,{text:"功能未开启"})])),_:1})),d(U,{show:W.showPay,"onUpdate:show":t[0]||(t[0]=e=>W.showPay=e),"order-id":W.orderId,showCheck:W.showCheck,"onUpdate:showCheck":t[1]||(t[1]=e=>W.showCheck=e),from:W.from,redirect:"/mobile/packages/pages/recharge/recharge","order-amount":W.orderAmount,onSuccess:q},null,8,["show","order-id","showCheck","from","order-amount"]),d(n,{modelValue:W.showPaySuccess,"onUpdate:modelValue":t[3]||(t[3]=e=>W.showPaySuccess=e),"safe-area-inset-bottom":!0,"mask-close-able":!1,"border-radius":"14","z-index":899,round:"",mode:"center",width:"600"},{default:f((()=>[d(s,{class:"pt-[20rpx]"},{default:f((()=>[d(s,{class:"px-[30rpx] py-[40rpx]"},{default:f((()=>[d(s,{class:"text-success text-center"},{default:f((()=>[d(u,{name:"checkmark-circle-fill",size:"100"})])),_:1}),d(s,{class:"text-xl font-medium mt-[20rpx] text-center"},{default:f((()=>[_(" 支付成功 ")])),_:1}),d(s,{class:"flex mt-[60rpx]"},{default:f((()=>[d(s,{class:"flex-1"},{default:f((()=>[d(s,{class:"h-[72rpx] leading-[72rpx] rounded-full bg-page text-center",onClick:t[2]||(t[2]=e=>W.showPaySuccess=!1)},{default:f((()=>[d(r,null,{default:f((()=>[_("继续充值")])),_:1})])),_:1})])),_:1}),d(s,{class:"flex-1 ml-[20rpx]"},{default:f((()=>[d(o,{class:"h-[72rpx] leading-[72rpx] rounded-full bg-primary text-center text-btn-text",to:"/pages/index/index","nav-type":"reLaunch"},{default:f((()=>[d(r,null,{default:f((()=>[_("返回首页")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["status"])):v("v-if",!0),v("    悬浮菜单    "),d(D),d(z)],64)}}}),[["__scopeId","data-v-6118894c"]]);export{H as default};