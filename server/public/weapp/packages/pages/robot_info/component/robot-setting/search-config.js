"use strict";const e=require("../../../../../common/vendor.js"),r=require("../../../../../stores/app.js");if(require("../../../../../api/app.js"),require("../../../../../utils/request/index.js"),require("../../../../../utils/request/http.js"),require("../../../../../enums/requestEnums.js"),require("../../../../../utils/request/cancel.js"),require("../../../../../stores/user.js"),require("../../../../../api/user.js"),require("../../../../../enums/constantEnums.js"),require("../../../../../utils/auth.js"),require("../../../../../utils/cache.js"),require("../../../../../utils/unique-id.js"),require("../../../../../router/index.js"),require("../../../../../config/index.js"),require("../../../../../utils/client.js"),require("../../../../../enums/appEnums.js"),require("../../../../../api/shop.js"),!Array){(e.resolveComponent("u-icon")+e.resolveComponent("model-picker")+e.resolveComponent("u-form-item")+e.resolveComponent("app-slider")+e.resolveComponent("u-radio")+e.resolveComponent("u-radio-group")+e.resolveComponent("u-input"))()}Math||((()=>"../../../../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js")+(()=>"../../../../../components/model-picker/model-picker.js")+(()=>"../../../../../uni_modules/vk-uview-ui/components/u-form-item/u-form-item.js")+(()=>"../../../../../components/app-slider/app-slider.js")+(()=>"../../../../../uni_modules/vk-uview-ui/components/u-radio/u-radio.js")+(()=>"../../../../../uni_modules/vk-uview-ui/components/u-radio-group/u-radio-group.js")+(()=>"../../../../../uni_modules/vk-uview-ui/components/u-input/u-input.js"))();const i=e.defineComponent({__name:"search-config",props:{modelValue:null},emits:["update:modelValue"],setup(i,{emit:o}){const u=i,s=r.useAppStore(),n=e.useVModel(u,"modelValue",o);return(r,i)=>e.e({a:e.w((({item:r},i,o)=>e.e({a:r.alias},r.alias?{b:e.t(r.alias)}:{},{c:r.alias&&"0"==r.price},r.alias&&"0"==r.price?{}:r.alias?{e:e.t(`消耗${r.price}${e.unref(s).getTokenUnit}/1千字符`)}:{},{d:r.alias},e.unref(n).model_id?{f:"f27316ec-2-"+o+",f27316ec-1",g:e.p({name:"close-circle"}),h:e.o((r=>{e.unref(n).model_id="",e.unref(n).model_sub_id=""}))}:{},{i:"f27316ec-3-"+o+",f27316ec-1",j:o,k:i})),{name:"d",path:"a",vueId:"f27316ec-1,f27316ec-0"}),b:e.unref(n).model_id,c:e.p({name:"arrow-down"}),d:e.unref(n).model_id,e:e.o((r=>e.unref(n).model_id=r)),f:e.o((r=>e.unref(n).model_sub_id=r)),g:e.p({setDefault:!1,id:e.unref(n).model_id,sub_id:e.unref(n).model_sub_id}),h:e.p({label:"AI模型",prop:"model_sub_id",required:!0}),i:e.o((r=>e.unref(n).search_similarity=r)),j:e.p({min:0,max:1,step:.001,activeColor:r.$theme.primaryColor,modelValue:e.unref(n).search_similarity}),k:e.p({label:"相似度",prop:"search_similarity"}),l:e.o((r=>e.unref(n).search_limits=r)),m:e.p({min:0,max:20,activeColor:r.$theme.primaryColor,modelValue:e.unref(n).search_limits}),n:e.p({label:"单次搜索数量",prop:"search_limits"}),o:e.p({name:1}),p:e.p({name:2}),q:e.o((r=>e.unref(n).search_empty_type=r)),r:e.p({modelValue:e.unref(n).search_empty_type}),s:e.p({label:"空搜索回复","label-position":"left","label-width":"150"}),t:2===e.unref(n).search_empty_type},2===e.unref(n).search_empty_type?{v:e.o((r=>e.unref(n).search_empty_text=r)),w:e.p({type:"textarea",height:200,placeholder:"请输入回复内容，当搜索匹配不上内容时，直接回复填写的内容",border:!0,modelValue:e.unref(n).search_empty_text})}:{})}}),o=e._export_sfc(i,[["__scopeId","data-v-f27316ec"]]);wx.createComponent(o);