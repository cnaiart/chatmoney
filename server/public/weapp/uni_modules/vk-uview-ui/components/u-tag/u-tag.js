"use strict";const e=require("../../../../common/vendor.js"),o={name:"u-tag",emits:["click","close"],props:{type:{type:String,default:"primary"},disabled:{type:[Boolean,String],default:!1},size:{type:String,default:"default"},shape:{type:String,default:"square"},text:{type:[String,Number],default:""},bgColor:{type:String,default:""},color:{type:String,default:""},borderColor:{type:String,default:""},closeColor:{type:String,default:""},index:{type:[Number,String],default:""},mode:{type:String,default:"light"},closeable:{type:Boolean,default:!1},show:{type:Boolean,default:!0}},data:()=>({}),computed:{customStyle(){let e={};return this.color&&(e.color=this.color),this.bgColor&&(e.backgroundColor=this.bgColor),"plain"==this.mode&&this.color&&!this.borderColor?e.borderColor=this.color:e.borderColor=this.borderColor,e},iconStyle(){if(!this.closeable)return;let e={};return"mini"==this.size?e.fontSize="20rpx":e.fontSize="22rpx","plain"==this.mode||"light"==this.mode?e.color=this.type:"dark"==this.mode&&(e.color="#ffffff"),this.closeColor&&(e.color=this.closeColor),e},closeIconColor(){return this.closeColor?this.closeColor:this.color?this.color:"dark"==this.mode?"#ffffff":this.type}},methods:{clickTag(){this.disabled||this.$emit("click",this.index)},close(){this.$emit("close",this.index)}}};if(!Array){e.resolveComponent("u-icon")()}Math;const t=e._export_sfc(o,[["render",function(o,t,l,r,i,s){return e.e({a:l.show},l.show?e.e({b:e.t(l.text),c:l.closeable},l.closeable?{d:e.o(s.close),e:e.s(s.iconStyle),f:e.p({size:"22",color:s.closeIconColor,name:"close"})}:{},{g:e.o((()=>{})),h:e.n(l.disabled?"u-disabled":""),i:e.n("u-size-"+l.size),j:e.n("u-shape-"+l.shape),k:e.n("u-mode-"+l.mode+"-"+l.type),l:e.s(s.customStyle),m:e.o(((...e)=>s.clickTag&&s.clickTag(...e)))}):{})}],["__scopeId","data-v-ded1a498"]]);wx.createComponent(t);