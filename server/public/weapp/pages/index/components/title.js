"use strict";const e=require("../../../common/vendor.js"),r=require("../../../stores/app.js");if(require("../../../api/app.js"),require("../../../utils/request/index.js"),require("../../../utils/request/http.js"),require("../../../enums/requestEnums.js"),require("../../../utils/request/cancel.js"),require("../../../stores/user.js"),require("../../../api/user.js"),require("../../../enums/constantEnums.js"),require("../../../utils/auth.js"),require("../../../utils/cache.js"),require("../../../utils/unique-id.js"),require("../../../router/index.js"),require("../../../config/index.js"),require("../../../utils/client.js"),require("../../../enums/appEnums.js"),require("../../../api/shop.js"),!Array){e.resolveComponent("u-sticky")()}Math;const s=e.defineComponent({__name:"title",props:{percent:null,isHidden:{type:Boolean},prop:null},setup(s){const i=r.useAppStore();return(r,u)=>e.e({a:s.isHidden},s.isHidden?{b:e.unref(i).getWebsiteConfig.pc_logo,c:e.t(e.unref(i).getWebsiteConfig.pc_name),d:`rgba(255, 255, 255, ${s.percent})`,e:e.p({"h5-nav-height":"0","bg-color":"transparent"})}:{})}}),i=e._export_sfc(s,[["__scopeId","data-v-e6a9cac7"]]);wx.createComponent(i);