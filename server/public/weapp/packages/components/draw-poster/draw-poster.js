"use strict";const e=require("../../../common/vendor.js"),r=require("../../../stores/app.js"),t=require("../../../stores/user.js"),i=require("../../../api/app.js"),s=require("../../../utils/util.js");require("../../../router/index.js"),require("../../../stores/navigationBarTitle.js"),require("../../../utils/request/index.js");const o=require("../../../stores/theme.js");if(require("../../../api/shop.js"),require("../../../utils/client.js"),require("../../../enums/appEnums.js"),require("../../../api/user.js"),require("../../../enums/constantEnums.js"),require("../../../utils/auth.js"),require("../../../utils/cache.js"),require("../../../utils/unique-id.js"),require("../../../utils/request/http.js"),require("../../../enums/requestEnums.js"),require("../../../utils/request/cancel.js"),require("../../../config/index.js"),require("../../../utils/theme.js"),!Array){(e.resolveComponent("l-painter-image")+e.resolveComponent("l-painter-view")+e.resolveComponent("l-painter-text")+e.resolveComponent("l-painter")+e.resolveComponent("u-button")+e.resolveComponent("u-popup"))()}Math||((()=>"../../../uni_modules/lime-painter/components/l-painter-image/l-painter-image.js")+(()=>"../../../uni_modules/lime-painter/components/l-painter-view/l-painter-view.js")+(()=>"../../../uni_modules/lime-painter/components/l-painter-text/l-painter-text.js")+(()=>"../../../uni_modules/lime-painter/components/l-painter/l-painter.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-button/u-button.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-popup/u-popup.js"))();const n=e.defineComponent({__name:"draw-poster",emits:["close"],setup(n,{expose:p,emit:a}){const u=r.useAppStore(),l=t.useUserStore(),{primaryColor:d}=o.useThemeStore(),c=e.ref(!1),m=e.ref(),x=e.ref({}),g=e.ref("");e.ref("");const f=e.ref(""),h=async()=>{e.index.showLoading({title:"生成中"});try{const{result:e}=await i.getMnpQrCode({user_sn:l.userInfo.sn,page:"pages/index/index"});g.value=e,setTimeout((()=>{v()}),500)}catch(r){e.index.hideLoading(),console.log(r)}},v=async()=>{var r;null==(r=m.value)||r.canvasToTempFilePathSync({fileType:"png",quality:1,pathType:"url",success:r=>{e.index.hideLoading(),f.value=r.tempFilePath},fail:r=>{console.log(r),e.index.hideLoading(),e.index.$u.toast("调用海报错误",r)}})},j=()=>{e.index.saveImageToPhotosAlbum({filePath:f.value,success:()=>{e.index.$u.toast("保存成功")},fail:r=>{e.index.$u.toast("保存失败"),console.log(r)}})};return p({open:e=>{c.value=!0,x.value=e,h()}}),(r,t)=>{var i,o,n,p;return{a:e.p({src:null==(i=x.value)?void 0:i.image,css:"width: 100%;object-fit:contain;"}),b:e.p({css:"\n                width: 100%;\n                "}),c:e.p({css:"display: block;font-weight: bold;font-size: 34rpx;text-align: left;color: #101010;lineClamp: 2;",text:(null==(n=null==(o=x.value)?void 0:o.original_prompts)?void 0:n.prompt)||(null==(p=x.value)?void 0:p.prompt)}),d:e.p({css:"margin-top: 20rpx;padding-left: 20rpx;padding-right: 20rpx;margin-bottom: 20rpx;"}),e:e.p({css:"height:10rpx;border-top-width:1px;border-top-style:dashed;border-top-color:#D6D3D3;"}),f:e.p({css:"width:68rpx;height:68rpx;border-radius: 50%;",src:e.unref(l).userInfo.avatar}),g:e.p({css:";font-size: 28rpx;text-align: left;color: #666666;margin-left: 20rpx; lineClamp: 1;",text:e.unref(l).userInfo.nickname}),h:e.p({css:"display:flex;align-items: center;"}),i:e.p({css:"font-size: 32rpx;text-align: left;color: #101010;",text:e.unref(u).getWebsiteConfig.pc_name}),j:e.p({css:"margin-top:20rpx"}),k:e.p({css:`font-size: 30rpx;text-align: left;color: ${e.unref(d)};`,text:e.unref(s.splitDomain)(e.unref(u).config.current_domain)}),l:e.p({css:"margin-top:20rpx;margin-bottom:20rpx"}),m:e.p({css:"margin-top: 20rpx;height: 220rpx; padding-left: 20rpx;padding-right: 20rpx;margin-bottom: 20rpx;display:block;width:60%"}),n:e.p({src:g.value,css:"width: 180rpx; height: 180rpx"}),o:e.p({css:"position: absolute;top:20rpx;right:20px;background-color:#fff;padding:15rpx;border-radius: 10rpx;"}),p:e.p({css:"\n            border-radius: 14rpx;\n            overflow: hidden;\n            background-color: #F2F3F6;\n            "}),q:e.sr(m,"28d8f3ba-0",{k:"painterRef"}),r:e.p({isCanvasToTempFilePath:!1,"custom-style":"position: fixed; left: 200%;"}),s:f.value,t:e.o(j),v:e.p({type:"primary",size:"default",customStyle:{padding:"0 30rpx",height:"82rpx"}}),w:e.o((e=>r.$emit("close"))),x:e.o((e=>c.value=e)),y:e.p({mode:"bottom",closeable:!0,closeIconColor:"#000","safe-area-inset-bottom":!0,height:"90%","border-radius":"14",modelValue:c.value})}}}});wx.createComponent(n);