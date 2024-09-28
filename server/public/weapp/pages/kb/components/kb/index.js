"use strict";const e=require("../../../../common/vendor.js"),s=require("../../../../api/kb.js"),r=require("../../../../stores/user.js");if(require("../../../../utils/request/index.js"),require("../../../../utils/request/http.js"),require("../../../../enums/requestEnums.js"),require("../../../../utils/request/cancel.js"),require("../../../../router/index.js"),require("../../../../utils/cache.js"),require("../../../../enums/constantEnums.js"),require("../../../../config/index.js"),require("../../../../utils/client.js"),require("../../../../enums/appEnums.js"),require("../../../../api/user.js"),require("../../../../utils/auth.js"),require("../../../../utils/unique-id.js"),!Array){(e.resolveComponent("u-image")+e.resolveComponent("u-icon")+e.resolveComponent("z-paging"))()}Math||((()=>"../../../../uni_modules/vk-uview-ui/components/u-image/u-image.js")+(()=>"../../../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js")+(()=>"../../../../node-modules/z-paging/components/z-paging/z-paging.js")+n+u+i)();const n=()=>"../add-btn.js",u=()=>"./add-popup.js",i=()=>"./share-user.js",t=e.defineComponent({__name:"index",props:{tabIndex:null,currentIndex:null},setup(n){const u=r.useUserStore(),i=e.reactive({list:[{name:"全部知识库",type:0},{name:"我的知识库",type:1},{name:"共享给我",type:2}],current:0}),t=e.reactive({show:!1,num:0,kbId:0,isOwner:!1}),o=e.ref(!1),a=e.ref(),l=e.shallowRef(),p=e.useRouter(),c=async(e,r)=>{var n,u;try{const{lists:u=[]}=await s.getKBList({page_size:r,page_no:e,type:i.current});null==(n=l.value)||n.complete(u)}catch(t){null==(u=l.value)||u.complete(!1)}},d=async()=>{if(!u.isLogin)return p.navigateTo("/pages/login/login");o.value=!0},m=()=>{e.nextTick$1((()=>{l.value&&l.value.refresh()}))};return(s,r)=>({a:e.f(i.list,((s,r,n)=>({a:e.t(s.name),b:s.type,c:s.type==i.current?1:"",d:e.o((e=>{return r=s.type,i.current=r,void m();var r}),s.type)}))),b:e.f(a.value,((s,r,n)=>({a:"7c630902-1-"+n+",7c630902-0",b:e.p({src:s.image,width:"100%",height:"272rpx"}),c:"7c630902-2-"+n+",7c630902-0",d:e.t(s.share_user),e:e.o((e=>(e=>{t.show=!0,t.num=e.share_user,t.kbId=e.id,t.isOwner=e.is_super})(s)),s.id),f:e.t(null==s?void 0:s.name),g:e.t((null==s?void 0:s.intro)||"这个知识库还没有介绍~"),h:s.id,i:e.o((e=>{return r=s.id,void p.navigateTo({path:`/packages/pages/kb_info/kb_info?id=${r}`});var r}),s.id)}))),c:e.p({name:"man-add"}),d:e.sr(l,"7c630902-0",{k:"pagingRef"}),e:e.o(c),f:e.o((e=>a.value=e)),g:e.p({"auto-clean-list-when-reload":!1,fixed:!1,modelValue:a.value}),h:e.o(d),i:e.o((()=>{o.value=!1,m()})),j:e.o((e=>o.value=e)),k:e.p({modelValue:o.value}),l:e.o((e=>m())),m:e.o((e=>t.show=e)),n:e.p({...t,show:t.show})})}}),o=e._export_sfc(t,[["__scopeId","data-v-7c630902"]]);wx.createComponent(o);