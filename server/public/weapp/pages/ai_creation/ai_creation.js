"use strict";const e=require("../../common/vendor.js"),i=require("../../api/create.js");if(require("../../utils/request/index.js"),require("../../utils/request/http.js"),require("../../enums/requestEnums.js"),require("../../utils/request/cancel.js"),require("../../stores/user.js"),require("../../api/user.js"),require("../../enums/constantEnums.js"),require("../../utils/auth.js"),require("../../utils/cache.js"),require("../../utils/unique-id.js"),require("../../router/index.js"),require("../../config/index.js"),require("../../utils/client.js"),require("../../enums/appEnums.js"),!Array){(e.resolveComponent("u-search")+e.resolveComponent("u-image")+e.resolveComponent("u-icon")+e.resolveComponent("tabbar"))()}Math||((()=>"../../uni_modules/vk-uview-ui/components/u-search/u-search.js")+(()=>"../../uni_modules/vk-uview-ui/components/u-image/u-image.js")+(()=>"../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js")+(()=>"../../components/tabbar/tabbar.js"))();const r=e.defineComponent({__name:"ai_creation",setup(r){const t=e.useRouter(),s=e.ref(""),u=e.ref([]),a=e.reactive({lists:[],current:0}),o=async()=>{u.value=await i.getCreationList({category_id:a.current,keyword:s.value})};return e.watch((()=>a.current),(()=>{o()})),e.onShow((async()=>{await(async()=>{a.lists=await i.getCategoryList()})(),await o()})),(r,n)=>({a:r.$theme.navColor,b:r.$theme.navBgColor,c:r.$theme.pageStyle,d:e.o((e=>o())),e:e.o((e=>o())),f:e.o((e=>o())),g:e.o((e=>s.value=e)),h:e.p({placeholder:"请输入关键词搜索",height:"72","bg-color":"#F7F8F9",modelValue:s.value}),i:e.f(a.lists,((i,r,t)=>({a:e.t(i.name),b:i.id==a.current?1:"",c:i.id,d:e.o((e=>a.current=i.id),i.id)}))),j:e.f(u.value,((r,s,u)=>e.e({a:"ec173522-1-"+u,b:e.p({src:r.image,width:"64",height:"64"}),c:e.t(r.name),d:e.t(r.tips),e:e.t(r.use_num),f:!r.is_collect},r.is_collect?{}:{g:"ec173522-2-"+u,h:e.p({size:38,name:"star",color:"#999"})},{i:!!r.is_collect},r.is_collect?{j:"ec173522-3-"+u,k:e.p({size:38,name:"star-fill",color:"#FFB529"})}:{},{l:e.o((e=>(async e=>{await i.collection({id:e}),await o()})(r.id)),r.id),m:r.id,n:e.o((e=>{return i=r.id,void t.navigateTo({path:"/packages/pages/create/create",query:{id:i}});var i}),r.id)})))})}});wx.createPage(r);