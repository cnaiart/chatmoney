"use strict";const e=require("../../../../common/vendor.js"),u=require("../../../../api/digital.js"),o=require("../../../../router/index.js");if(require("../../../../utils/request/index.js"),require("../../../../utils/request/http.js"),require("../../../../enums/requestEnums.js"),require("../../../../utils/request/cancel.js"),require("../../../../stores/user.js"),require("../../../../api/user.js"),require("../../../../enums/constantEnums.js"),require("../../../../utils/auth.js"),require("../../../../utils/cache.js"),require("../../../../utils/unique-id.js"),require("../../../../config/index.js"),require("../../../../utils/client.js"),require("../../../../enums/appEnums.js"),!Array){(e.resolveComponent("u-input")+e.resolveComponent("u-form-item")+e.resolveComponent("app-upload")+e.resolveComponent("u-form")+e.resolveComponent("u-button")+e.resolveComponent("u-popup"))()}Math||((()=>"../../../../uni_modules/vk-uview-ui/components/u-input/u-input.js")+(()=>"../../../../uni_modules/vk-uview-ui/components/u-form-item/u-form-item.js")+(()=>"../../../../components/app-upload/app-upload.js")+(()=>"../../../../uni_modules/vk-uview-ui/components/u-form/u-form.js")+(()=>"../../../../uni_modules/vk-uview-ui/components/u-button/u-button.js")+(()=>"../../../../uni_modules/vk-uview-ui/components/u-popup/u-popup.js"))();const a=e.defineComponent({__name:"add-popup",props:{modelValue:{type:Boolean}},emits:["update:modelValue","update"],setup(a,{emit:r}){const t=a,i=e.shallowRef(),s=e.computed({get:()=>t.modelValue,set(e){r("update:modelValue",e)}}),n=e.ref({image:"",name:"",avatar:""}),l={name:[{required:!0,message:"请输入形象名称"}],image:[{required:!0,message:"请选择形象封面"}],avatar:[{required:!0,message:"请选择形象头像"}]},p=()=>{i.value.validate((async e=>{if(e){const{id:e}=await u.postDigital(n.value);r("update"),s.value=!1,o.router.navigateTo({path:"/packages/pages/digital_setting/digital_setting",query:{id:e}})}}))};return e.watch(s,(e=>{e&&(setTimeout((()=>{i.value.setRules(l)})),n.value={image:"",name:"",avatar:""})})),(u,o)=>({a:e.o((e=>n.value.name=e)),b:e.p({placeholder:"请输入形象名称",border:!0,modelValue:n.value.name}),c:e.p({label:"形象名称",prop:"name",required:!0}),d:e.o((e=>n.value.avatar=e)),e:e.p({modelValue:n.value.avatar}),f:e.p({label:"形象头像",prop:"avatar",required:!0}),g:e.o((e=>n.value.image=e)),h:e.p({modelValue:n.value.image}),i:e.p({label:"形象封面",prop:"image",required:!0}),j:e.sr(i,"03790c9a-1,03790c9a-0",{k:"uFormRef"}),k:e.p({model:n.value,"label-position":"top","border-bottom":!1}),l:e.o(p),m:e.p({type:"primary"}),n:e.o((u=>e.isRef(s)?s.value=u:null)),o:e.p({"safe-area-inset-bottom":!0,closeable:!0,"border-radius":"16",mode:"bottom",modelValue:e.unref(s)})})}});wx.createComponent(a);