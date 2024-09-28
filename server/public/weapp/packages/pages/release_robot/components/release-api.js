"use strict";const e=require("../../../../common/vendor.js"),t=require("../../../../api/robot.js"),s=require("../../../../config/index.js"),o=require("../../../../hooks/useCopy.js");if(require("../../../../utils/request/index.js"),require("../../../../utils/request/http.js"),require("../../../../enums/requestEnums.js"),require("../../../../utils/request/cancel.js"),require("../../../../stores/user.js"),require("../../../../api/user.js"),require("../../../../enums/constantEnums.js"),require("../../../../utils/auth.js"),require("../../../../utils/cache.js"),require("../../../../utils/unique-id.js"),require("../../../../router/index.js"),require("../../../../utils/client.js"),require("../../../../enums/appEnums.js"),!Array){(e.resolveComponent("u-navbar")+e.resolveComponent("u-button")+e.resolveComponent("u-icon")+e.resolveComponent("z-paging"))()}Math||((()=>"../../../../uni_modules/vk-uview-ui/components/u-navbar/u-navbar.js")+(()=>"../../../../uni_modules/vk-uview-ui/components/u-button/u-button.js")+(()=>"../../../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js")+(()=>"../../../../node-modules/z-paging/components/z-paging/z-paging.js")+a+u)();const a=()=>"./create-api.js",u=()=>"./usage-settings.js",i=e.defineComponent({__name:"release-api",props:{title:null,type:null,robotId:null},setup(a){const u=a,{copy:i}=o.useCopy(),n=e.ref(!1),r=e.ref([]),l=e.shallowRef(),p=async(e,s)=>{var o,a;try{const{lists:a}=await t.getReleaseList({page_no:e,page_size:s,type:u.type,robot_id:u.robotId});null==(o=l.value)||o.complete(a)}catch(i){null==(a=l.value)||a.complete(!1)}},c=e.ref(`${s.config.baseUrl}api`),d=e.reactive({show:!1,data:{}}),m=async e=>{var s;await t.postRelease({...e,type:u.type,robot_id:u.robotId}),null==(s=l.value)||s.refresh()},v=async e=>{var s;await t.putRelease({...e,type:u.type,robot_id:u.robotId}),null==(s=l.value)||s.reload()};return(s,o)=>({a:e.p({"back-text":a.title}),b:e.o((e=>n.value=!0)),c:e.p({type:"primary",size:"medium"}),d:e.t(c.value),e:e.o((t=>e.unref(i)(c.value))),f:e.f(r.value,((s,o,a)=>({a:e.t(s.apikey),b:e.t(s.name),c:e.t(s.use_time),d:"actions-"+a,e:e.r("actions",{item:s},a),f:"ea7b17fc-3-"+a+",ea7b17fc-2",g:e.o((e=>(e=>{d.show=!0,d.data=e})(s)),s.id),h:"ea7b17fc-4-"+a+",ea7b17fc-2",i:e.o((o=>(async s=>{var o;const{cancel:a}=await e.index.showModal({title:"温馨提示",content:"确定要删除？"});a||(await t.delRelease({id:s,type:u.type}),null==(o=l.value)||o.refresh())})(s.id)),s.id),j:s.id}))),g:e.p({name:"setting",size:32}),h:e.p({name:"trash",size:32}),i:e.sr(l,"ea7b17fc-2",{k:"pagingRef"}),j:e.o(p),k:e.o((e=>r.value=e)),l:e.p({"auto-clean-list-when-reload":!1,fixed:!1,modelValue:r.value}),m:e.o(v),n:e.o((e=>n.value=e)),o:e.p({show:n.value}),p:e.o(m),q:e.o((e=>d.show=e)),r:e.p({data:d.data,show:d.show})})}});wx.createComponent(i);