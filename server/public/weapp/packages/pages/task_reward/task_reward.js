"use strict";const e=require("../../../common/vendor.js"),t=require("../../../api/task_reward.js"),a=require("../../../enums/appEnums.js"),s=require("../../../hooks/useCopy.js"),n=require("../../../hooks/useShareMessage.js"),i=require("../../../stores/user.js"),r=require("../../../utils/client.js"),u=require("../../../stores/app.js"),o=require("../../../api/shop.js");if(require("../../../utils/request/index.js"),require("../../../utils/request/http.js"),require("../../../enums/requestEnums.js"),require("../../../utils/request/cancel.js"),require("../../../router/index.js"),require("../../../utils/cache.js"),require("../../../enums/constantEnums.js"),require("../../../config/index.js"),require("../../../utils/util.js"),require("../../../stores/navigationBarTitle.js"),require("../../../mixins/share.js"),require("../../../api/user.js"),require("../../../utils/auth.js"),require("../../../utils/unique-id.js"),require("../../../api/app.js"),!Array){(e.resolveComponent("u-icon")+e.resolveComponent("u-button")+e.resolveComponent("u-empty")+e.resolveComponent("page-status")+e.resolveComponent("tabbar"))()}Math||((()=>"../../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-button/u-button.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-empty/u-empty.js")+(()=>"../../../components/page-status/page-status.js")+(()=>"../../../components/tabbar/tabbar.js"))();const l=e.defineComponent({__name:"task_reward",setup(l){const c=e.ref(a.PageStatusEnum.LOADING),{copy:p}=s.useCopy(),d=e.useRouter(),m=u.useAppStore(),{resolveOptions:g}=n.useShareMessage(),y=e.ref({title:"",subTitle:"",content:[]}),v={1:{num:"0/1",btn_text:"立即签到",desc:"每天签到，可获得",payload:"每天签到，可获得"},2:{num:"0/10",btn_text:"去分享",desc:"邀请1人，可获得",payload:"邀请1人，可获得"},3:{num:"0/3",btn_text:"去分享",desc:"分享1次，可获得",payload:"分享1次，可获得"},4:{num:"0/4",btn_text:"去分享",desc:"分享1次，可获得",payload:"分享1次，可获得"},5:{num:"0/3",btn_text:"去分享",desc:"分享1次，可获得",payload:"分享1次，可获得"},6:{num:"0/3",btn_text:"去分享",desc:"分享1次，可获得",payload:"分享1次，可获得"},7:{num:"0/3",btn_text:"去分享",desc:"分享1次，可获得",payload:"分享1次，可获得"}};e.ref(-1);const h=t=>{r.handleClientEvent({OA_WEIXIN:()=>{e.index.showModal({title:"温馨提示",content:"点击右上角“...”，分享给好友",showCancel:!1})},H5:async()=>{const t=await g();p(t.path||t.link),e.index.showModal({title:"温馨提示",content:"已经复制到剪贴板，请转发给好友",showCancel:!1})},ANDROID:async()=>{const t=await g();e.index.share({provider:"weixin",scene:"WXSceneSession",type:0,href:t.path,title:t.title,imageUrl:t.imageUrl,success:e=>{console.log("分享成功")},fail:t=>{e.index.$u.toast(t.errMsg)}})},IOS:async()=>{const t=await g();e.index.share({provider:"weixin",scene:"WXSceneSession",type:0,href:t.path,title:t.title,imageUrl:t.imageUrl,success:e=>{console.log("分享成功")},fail:t=>{e.index.$u.toast(t.errMsg)}})}})},w=i.useUserStore(),{userInfo:b}=e.storeToRefs(w),j=async()=>{try{await(async()=>{const e=await t.getShareTaskList(),a=JSON.parse(e.data);y.value.content=a.filter((e=>{var t,a;return e.data.num>=e.data.day_num&&(v[e.type].btn_text=1===e.type?"已签到":"已分享"),v[e.type].num=`${null==(t=e.data)?void 0:t.num}/${null==(a=e.data)?void 0:a.day_num}`,v[e.type].desc=`${v[e.type].payload}`,1===e.data.is_open}))})(),await(async()=>{var e;const t=await o.getDecorate({id:10}),a=JSON.parse(t.data)[0];y.value.title=null==a?void 0:a.content.title,y.value.subTitle=null==(e=null==a?void 0:a.content)?void 0:e.subTitle})(),c.value=a.PageStatusEnum.NORMAL}catch(e){console.error(e),c.value=a.PageStatusEnum.ERROR}};return e.onShow((()=>{j(),w.getUser()})),e.onPullDownRefresh((async()=>{try{await j(),await w.getUser()}catch(t){}e.index.stopPullDownRefresh()})),(a,s)=>e.e({a:a.$theme.navColor,b:a.$theme.navBgColor,c:a.$theme.pageStyle,d:e.t(e.unref(m).getTokenUnit),e:e.t(e.unref(b).balance||0),f:y.value.content.length},y.value.content.length?{g:e.t(y.value.title),h:e.t(y.value.subTitle),i:e.f(y.value.content,((a,s,n)=>{var i;return{a:"2087ec09-1-"+n+",2087ec09-0",b:e.p({name:a.image,size:88}),c:e.t(a.customName||a.name),d:e.t(v[a.type].num),e:e.t(v[a.type].desc),f:e.t(null==(i=a.data)?void 0:i.one_award),g:e.t(v[a.type].btn_text),h:e.o((e=>(async e=>{switch(e){case 1:await t.signClick(),await j(),await w.getUser();break;case 4:await d.navigateTo("/packages/pages/draw_list/draw_list");break;case 5:await d.navigateTo("/packages/pages/video_list/video_list");break;case 6:await d.navigateTo("/packages/pages/music_list/music_list");break;case 7:await d.navigateTo("/pages/kb/kb");break;default:h()}})(a.type)),s),i:"2087ec09-2-"+n+",2087ec09-0",j:e.p({type:"primary",shape:"circle",size:"medium",customStyle:{margin:"0",padding:"0 24rpx",height:"56rpx"},disabled:a.data.num>=a.data.day_num,"open-type":2==a.type||3==a.type?"share":""}),k:s}})),j:e.t(e.unref(m).getTokenUnit)}:{},{k:e.p({text:"加载出错～"}),l:e.p({status:c.value})})}});wx.createPage(l);