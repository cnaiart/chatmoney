"use strict";const e=require("../../../../common/vendor.js"),u=require("../../../../api/video.js"),o=require("../../../../hooks/useLockFn.js"),r=require("../../../../stores/user.js");if(require("../../../../utils/request/index.js"),require("../../../../utils/request/http.js"),require("../../../../enums/requestEnums.js"),require("../../../../utils/request/cancel.js"),require("../../../../router/index.js"),require("../../../../utils/cache.js"),require("../../../../enums/constantEnums.js"),require("../../../../config/index.js"),require("../../../../utils/client.js"),require("../../../../enums/appEnums.js"),require("../../../../api/user.js"),require("../../../../utils/auth.js"),require("../../../../utils/unique-id.js"),!Array){(e.resolveComponent("u-icon")+e.resolveComponent("u-loading")+e.resolveComponent("l-textarea")+e.resolveComponent("u-form-item"))()}Math||((()=>"../../../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js")+(()=>"../../../../uni_modules/vk-uview-ui/components/u-loading/u-loading.js")+(()=>"../../../../components/l-textarea/l-textarea.js")+(()=>"../../../../uni_modules/vk-uview-ui/components/u-form-item/u-form-item.js"))();const s=e.defineComponent({__name:"prompt",props:{modelValue:{default:""},config:{default:()=>({})},showTranslate:{type:Boolean,default:!1},type:{default:1}},emits:["update:modelValue"],setup(s,{emit:n}){const t=s,i=e.useRouter(),a=r.useUserStore(),{modelValue:l}=e.useVModels(t,n),m=e.computed((()=>1===t.type)),p={1:{label:"视频场景",placeholder:"在此描述你的视频场景，包含内容主体+动作/场景"},2:{label:"描述词",placeholder:"描述视频中需要变化的内容即可～"}},d=e.computed((()=>p[t.type]||{})),c=e.ref(-1),f=()=>{a.isLogin||i.navigateTo("/pages/login/login")},q=()=>{var e;const u=null==(e=t.config.data)?void 0:e.length;if(u){let e=Math.round(Math.random()*(u-1));c.value===e&&(e<u-1?e++:e--),e<0&&(e=0),c.value=e;const o=t.config.data[e];o&&(l.value=o)}},{lockFn:v,isLock:j}=o.useLockFn((async()=>{if(!l.value)return e.index.$u.toast("请输入描述词");const o=await u.translate({prompt:l.value});l.value=o.result}));return(u,o)=>e.e({a:e.unref(m)},e.unref(m)?{b:e.p({name:"bookmark",size:"24"}),c:e.o(q)}:{},{d:s.showTranslate},s.showTranslate?e.e({e:e.unref(j)},e.unref(j)?{f:e.p({mode:"flower",size:"24"})}:{g:e.p({name:"reload",size:"24"})},{h:e.o(((...u)=>e.unref(v)&&e.unref(v)(...u)))}):{},{i:e.p({name:"trash"}),j:e.o((e=>l.value="")),k:e.o(f),l:e.o((u=>e.isRef(l)?l.value=u:null)),m:e.p({rows:4,"custom-class":{background:"#fff",paddingBottom:"70rpx",fontSize:"28rpx"},placeholder:e.unref(d).placeholder,modelValue:e.unref(l)}),n:e.p({label:e.unref(d).label,prop:"title",required:!0})})}});wx.createComponent(s);