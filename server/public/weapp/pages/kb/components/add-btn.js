"use strict";const e=require("../../../common/vendor.js");if(!Array){(e.resolveComponent("u-icon")+e.resolveComponent("dragon-button"))()}Math||((()=>"../../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js")+(()=>"../../../components/dragon-button/dragon-button.js"))();const o=e.defineComponent({__name:"add-btn",props:{yEdge:{default:200}},emits:["click"],setup:(o,{emit:n})=>(t,s)=>({a:e.p({name:"plus",size:40}),b:e.o((e=>n("click"))),c:e.p({size:88,xEdge:10,yEdge:o.yEdge})})});wx.createComponent(o);