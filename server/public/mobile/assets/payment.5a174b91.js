var e=Object.defineProperty;import{d as a,M as t,cu as s,o as r,c as o,w as n,b as i,m as l,n as u,g as c,K as d,f as p,t as m,e as f,j as y,h as w,aJ as _,cv as h,cw as I,a9 as S,N as P,r as x,a as A,s as v,ct as C,A as g,x as E,ax as N,aa as b,a4 as L,k as j,F as k,l as D,z as O,a2 as W,cx as U,bk as q,cy as F,bl as z}from"./index-9f08b835.js";import{_ as H}from"./u-empty.765dbffc.js";import{_ as R}from"./u-icon.f0423eb2.js";import{_ as T,a as B}from"./u-radio-group.31ee5ed9.js";import{_ as M}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as X}from"./u-button.cd082997.js";import{_ as G}from"./page-status.a37f4663.js";import{_ as V}from"./u-popup.6c89de8e.js";import{u as $}from"./useLockFn.cde70c0d.js";const Y=M(a({__name:"price",props:{content:{default:""},prec:{default:2},autoPrec:{type:Boolean,default:!0},color:{default:"#FA8919"},mainSize:{default:"36rpx"},minorSize:{default:"28rpx"},lineThrough:{type:Boolean,default:!1},fontWeight:{default:"normal"},prefix:{default:"￥"},suffix:{default:""}},setup(e){const a=e,_=t((()=>s({price:a.content,take:"int"}))),h=t((()=>{let e=s({price:a.content,take:"dec",prec:a.prec});return e=e%10==0?e.substr(0,e.length-1):e,a.autoPrec?1*e?"."+e:"":a.prec?"."+e:""}));return(a,t)=>{const s=y,I=w;return r(),o(s,{class:"price-container"},{default:n((()=>[i(s,{class:l(["price-wrap",{"price-wrap--disabled":e.lineThrough}]),style:u({color:e.color})},{default:n((()=>[c(" Prefix "),i(s,{class:"fix-pre",style:u({fontSize:e.minorSize})},{default:n((()=>[d(a.$slots,"prefix",{},(()=>[p(m(e.prefix),1)]),!0)])),_:3},8,["style"]),c(" Content "),i(s,{style:u({"font-weight":e.fontWeight})},{default:n((()=>[c(" Integer "),i(I,{style:u({fontSize:e.mainSize})},{default:n((()=>[p(m(f(_)),1)])),_:1},8,["style"]),c(" Decimals "),i(I,{style:u({fontSize:e.minorSize})},{default:n((()=>[p(m(f(h)),1)])),_:1},8,["style"])])),_:1},8,["style"]),c(" Suffix "),i(s,{class:"fix-suf",style:u({fontSize:e.minorSize})},{default:n((()=>[d(a.$slots,"suffix",{},(()=>[p(m(e.suffix),1)]),!0)])),_:3},8,["style"])])),_:3},8,["class","style"])])),_:3})}}}),[["__scopeId","data-v-a74822ce"]]);const J=class{static inject(e,a){this.modules.set(e,a)}constructor(){for(const[e,a]of J.modules.entries())a.init(e,this)}async payment(e,a){try{const t=this[Z[e]];return t?await t.run(a):Promise.reject(`can not find pay way ${e}`)}catch(t){return Promise.reject(t)}}};let K=J;var Q;((a,t,s)=>{t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s})(K,"symbol"!=typeof(Q="modules")?Q+"":Q,new Map);var Z=(e=>(e[e.BALANCE=1]="BALANCE",e[e.WECHAT=2]="WECHAT",e[e.ALIPAY=3]="ALIPAY",e[e.E_WECHAT=4]="E_WECHAT",e[e.E_ALIPAY=5]="E_ALIPAY",e))(Z||{});const ee=new class{init(e,a){a[e]=this}async run(e){try{return await h({MP_WEIXIN:()=>new Promise((a=>{uni.requestPayment({provider:"wxpay",...e,success(){a(I.SUCCESS)},fail(){a(I.FAIL)}})})),OA_WEIXIN:()=>new Promise((a=>{S.pay(e).then((()=>{a(I.SUCCESS)})).catch((()=>{a(I.FAIL)}))})),H5:()=>new Promise((a=>{window.open(e,"_self"),a(I.PENDING)})),ANDROID:()=>new Promise(((a,t)=>{uni.requestPayment({provider:"wxpay",orderInfo:e,success(){a(I.SUCCESS)},fail(e){console.log(e),a(I.FAIL)}})})),IOS:()=>new Promise(((a,t)=>{e.partnerid=String(e.partnerid),uni.requestPayment({provider:"wxpay",orderInfo:e,success(){a(I.SUCCESS)},fail(e){console.log(e),a(I.FAIL)}})}))})}catch(a){return Promise.reject(a)}}};K.inject(Z[2],ee);const ae=new class{init(e,a){a[e]=this}async run(e){return Promise.resolve(I.SUCCESS)}};K.inject(Z[1],ae);const te=new class{init(e,a){a[e]=this}openNewPage(e){const a=window.open("","_self");a.document.body.innerHTML=e,a.document.forms[0].submit()}async run(e){try{return await h({H5:()=>new Promise((a=>{this.openNewPage(e),a(I.PENDING)})),OA_WEIXIN:()=>new Promise((a=>{this.openNewPage(e),a(I.PENDING)})),ANDROID:()=>new Promise(((a,t)=>{uni.requestPayment({provider:"alipay",orderInfo:e,success(){a(I.SUCCESS)},fail(){a(I.FAIL)}})})),IOS:()=>new Promise(((a,t)=>{uni.requestPayment({provider:"alipay",orderInfo:e,success(){a(I.SUCCESS)},fail(){a(I.FAIL)}})}))})}catch(a){return Promise.reject(a)}}};K.inject(Z[3],te);const se=new class{init(e,a){a[e]=this}openNewPage(e){const a=window.open("","_self");a.document.body.innerHTML=e,a.document.forms[0].submit()}async run(e){try{return await h({H5:()=>new Promise((a=>{this.openNewPage(e),a(I.PENDING)})),OA_WEIXIN:()=>new Promise((a=>{this.openNewPage(e),a(I.PENDING)})),ANDROID:()=>new Promise(((a,t)=>{uni.requestPayment({provider:"alipay",orderInfo:e,success(){a(I.SUCCESS)},fail(){a(I.FAIL)}})})),IOS:()=>new Promise(((a,t)=>{uni.requestPayment({provider:"alipay",orderInfo:e,success(){a(I.SUCCESS)},fail(){a(I.FAIL)}})}))})}catch(a){return Promise.reject(a)}}};K.inject(Z[5],se);const re=new class{init(e,a){a[e]=this}openNewPage(e){const a=window.open("","_self");a.document.body.innerHTML=e,a.document.forms[0].submit()}async run(e){try{return await h({MP_WEIXIN:()=>new Promise((a=>{uni.requestPayment({provider:"wxpay",...e,success(){a(I.SUCCESS)},fail(){a(I.FAIL)}})})),OA_WEIXIN:()=>new Promise((a=>{this.openNewPage(e),a(I.PENDING)})),H5:()=>new Promise((a=>{this.openNewPage(e),a(I.PENDING)})),ANDROID:()=>new Promise(((a,t)=>{uni.requestPayment({provider:"wxpay",orderInfo:e,success(){a(I.SUCCESS)},fail(e){console.log(e),a(I.FAIL)}})})),IOS:()=>new Promise(((a,t)=>{e.partnerid=String(e.partnerid),uni.requestPayment({provider:"wxpay",orderInfo:e,success(){a(I.SUCCESS)},fail(e){console.log(e),a(I.FAIL)}})}))})}catch(a){return Promise.reject(a)}}};K.inject(Z[4],re);const oe=new K,ne=a({__name:"check",props:{show:{type:Boolean,required:!0},orderId:{type:Number,required:!0},from:{type:String,required:!0}},emits:["update:show","success","fail"],setup(e,{emit:a}){const s=e,l=t({get:()=>s.show,set(e){a("update:show",e)}}),u=async(e=!0)=>{var t;0===(await(t={order_id:s.orderId,from:s.from},_.get({url:"/pay/payStatus",data:t},{isAuth:!0}))).pay_status?(1==e&&uni.$u.toast("您的订单还未支付，请重新支付"),a("fail")):(0==e&&uni.$u.toast("您的订单已经支付，请勿重新支付"),a("success")),l.value=!1};return(e,a)=>{const t=y,s=x(A("u-button"),X),c=x(A("u-popup"),V);return r(),o(c,{class:"pay-popup",modelValue:f(l),"onUpdate:modelValue":a[2]||(a[2]=e=>P(l)?l.value=e:null),round:"",mode:"center",borderRadius:"10",maskCloseAble:!1},{default:n((()=>[i(t,{class:"content bg-white w-[560rpx] p-[40rpx]"},{default:n((()=>[i(t,{class:"text-2xl font-medium text-center"},{default:n((()=>[p(" 支付确认 ")])),_:1}),i(t,{class:"pt-[30rpx] pb-[40rpx]"},{default:n((()=>[i(t,null,{default:n((()=>[p(" 请在微信/支付宝内完成支付，如果您已支付成功，请点击`已完成支付`按钮 ")])),_:1})])),_:1}),i(t,{class:"flex"},{default:n((()=>[i(t,{class:"flex-1 mr-[20rpx]"},{default:n((()=>[i(s,{shape:"circle",type:"primary",plain:"",size:"medium","hover-class":"none",customStyle:{width:"100%"},onClick:a[0]||(a[0]=e=>u(!1))},{default:n((()=>[p(" 重新支付 ")])),_:1})])),_:1}),i(t,{class:"flex-1"},{default:n((()=>[i(s,{shape:"circle",type:"primary",size:"medium","hover-class":"none",customStyle:{width:"100%"},onClick:a[1]||(a[1]=e=>u())},{default:n((()=>[p(" 已完成支付 ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}}}),ie=a({__name:"payment",props:{show:{type:Boolean,required:!0},showCheck:{type:Boolean},orderId:{type:Number,required:!0},from:{type:String,required:!0},redirect:{type:String},orderAmount:{type:Number},safeArea:{type:Boolean,required:!0}},emits:["update:showCheck","update:show","close","success","fail"],setup(e,{emit:a}){const s=e;O();const l=v(),u=v(C.LOADING),d=v({lists:[]}),w=t({get:()=>s.showCheck,set(e){a("update:showCheck",e)}}),h=t({get:()=>s.show,set(e){a("update:show",e)}}),M=()=>{h.value=!1,a("close")},J=async()=>{u.value=C.LOADING;try{d.value=await(e={order_id:s.orderId,from:s.from},_.get({url:"/pay/payWay",data:e},{isAuth:!0})),u.value=C.NORMAL;const a=d.value.lists.find((e=>e.is_default))||d.value.lists[0];l.value=null==a?void 0:a.pay_way}catch(a){u.value=C.ERROR}var e},K=g(),Q=async e=>{try{W({title:"正在支付中"});const a=await function(e){return _.post({url:"/pay/prepay",data:e},{isAuth:!0})}({device:U(),order_id:s.orderId,from:s.from,pay_way:l.value,redirect:s.redirect,code:e});return await oe.payment(a.pay_way,(null==a?void 0:a.config)||(null==a?void 0:a.payurl)||(null==a?void 0:a.qrcode))}catch(a){return Promise.reject(a)}},{isLock:ee,lockFn:ae}=$((async()=>{try{const e=await(async()=>{if(0==K.userInfo.is_auth&&[q.OA_WEIXIN,q.MP_WEIXIN].includes(F)&&l.value==Z.WECHAT)switch(F){case q.OA_WEIXIN:return S.getUrl(b.BASE,"snsapi_base",{id:s.orderId,from:s.from}),Promise.reject();case q.MP_WEIXIN:return(await z()).code}})(),a=await Q(e);te(a),L()}catch(e){setTimeout((()=>{L()}),1e3),console.log(e)}})),te=e=>{switch(e){case I.SUCCESS:a("success");break;case I.FAIL:a("fail")}},se=()=>{te(I.SUCCESS)},re=()=>{h.value=!0,te(I.FAIL)};return E((()=>s.show),(async e=>{if(e){if(!s.orderId)return void(u.value=C.ERROR);await J()}}),{immediate:!0}),N((async()=>{const e=S.getAuthData();if(console.log(e),e.code&&e.scene===b.BASE){l.value=Z.WECHAT,h.value=!0;try{const a=await Q(e.code);te(a),L()}catch(a){L(),console.log(a)}finally{S.setAuthData({})}}})),(a,t)=>{const s=x(A("u-empty"),H),_=y,I=x(A("u-icon"),R),S=x(A("u-radio"),T),v=x(A("u-radio-group"),B),C=x(A("price"),Y),g=x(A("u-button"),X),E=x(A("page-status"),G),N=x(A("u-popup"),V);return r(),j(k,null,[i(N,{modelValue:f(h),"onUpdate:modelValue":t[1]||(t[1]=e=>P(h)?h.value=e:null),mode:"bottom","safe-area-inset-bottom":e.safeArea,"mask-close-able":!1,"border-radius":"14",closeable:"","z-index":899,onClose:M},{default:n((()=>[i(_,{class:""},{default:n((()=>[i(E,{status:u.value,fixed:!1},{error:n((()=>[i(s,{text:"订单信息错误，无法查询到订单信息",mode:"order"})])),default:n((()=>[i(_,{class:"payment w-full pb-[20rpx]"},{default:n((()=>[i(_,{class:"header py-[50rpx] flex flex-col items-center"},{default:n((()=>[i(_,{class:"text-[34rpx]"},{default:n((()=>[p("选择支付方式")])),_:1})])),_:1}),i(_,{class:"main min-h-[300rpx] mx-[20rpx]"},{default:n((()=>[i(_,null,{default:n((()=>[i(_,{class:"payway-lists"},{default:n((()=>[i(v,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),class:"w-full","active-color":a.$theme.primaryColor},{default:n((()=>[(r(!0),j(k,null,D(d.value.lists,((e,a)=>(r(),o(_,{class:"p-[20rpx] flex items-center w-full payway-item",key:a,onClick:a=>{return t=e.pay_way,void(l.value=t);var t}},{default:n((()=>[i(I,{class:"flex-none",size:48,name:e.icon},null,8,["name"]),i(_,{class:"mx-[16rpx] flex-1"},{default:n((()=>[i(_,{class:"payway-item--name flex-1"},{default:n((()=>[p(m(e.name),1)])),_:2},1024),i(_,{class:"text-muted text-xs"},{default:n((()=>[p(m(e.extra),1)])),_:2},1024)])),_:2},1024),i(S,{class:"mr-[-20rpx]",name:e.pay_way},null,8,["name"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["modelValue","active-color"])])),_:1})])),_:1})])),_:1}),i(_,{class:"submit-btn p-[20rpx] mt-[50rpx]"},{default:n((()=>[i(g,{onClick:f(ae),shape:"circle",type:"primary",loading:f(ee)},{default:n((()=>[p(" 立即支付 "),e.orderAmount?(r(),o(C,{key:0,content:e.orderAmount,mainSize:"34rpx",minorSize:"34rpx",fontWeight:"500",color:"var(--color-btn-text)"},null,8,["content"])):c("v-if",!0)])),_:1},8,["onClick","loading"])])),_:1})])),_:1})])),_:1},8,["status"])])),_:1})])),_:1},8,["modelValue","safe-area-inset-bottom"]),i(ne,{show:f(w),"onUpdate:show":t[2]||(t[2]=e=>P(w)?w.value=e:null),from:e.from,"order-id":e.orderId,onSuccess:se,onFail:re},null,8,["show","from","order-id"])],64)}}}),le=M(ie,[["__scopeId","data-v-7a8556dc"]]);export{Y as _,le as p};