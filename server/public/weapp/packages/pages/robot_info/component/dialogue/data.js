"use strict";const e=require("../../../../../common/vendor.js"),t=require("../../../../../api/robot.js");require("../../../../../utils/request/index.js"),require("../../../../../utils/request/http.js"),require("../../../../../enums/requestEnums.js"),require("../../../../../utils/request/cancel.js"),require("../../../../../stores/user.js"),require("../../../../../api/user.js"),require("../../../../../enums/constantEnums.js"),require("../../../../../utils/auth.js"),require("../../../../../utils/cache.js"),require("../../../../../utils/unique-id.js"),require("../../../../../router/index.js"),require("../../../../../config/index.js"),require("../../../../../utils/client.js"),require("../../../../../enums/appEnums.js");const r=e.defineComponent({__name:"data",setup(r){const i=e.ref([{title:"今日对话次数",key:"robot.todayChatCount"},{title:"昨日对话次数",key:"robot.yesterdayChatCount"},{title:"本周对话次数",key:"robot.weekChatCount"},{title:"全部对话次数",key:"robot.wholeChatCount"},{title:"今日访问用户/人",key:"visitor.todayVisitorCount"},{title:"昨日访问用户/人",key:"visitor.yesterdayVisitorCount"},{title:"本周访问用户/人",key:"visitor.weekVisitorCount"},{title:"全部用户/人",key:"visitor.wholeVisitorCount"}]),u=e.useRoute(),s=e.ref([]);return(async()=>{s.value=await t.getRobotChatData({robot_id:u.query.id})})(),(t,r)=>({a:e.f(i.value,((t,r,i)=>({a:e.t(t.title),b:e.t(e.unref(e.get)(s.value,t.key)),c:t.key})))})}});wx.createComponent(r);