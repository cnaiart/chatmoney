"use strict";const e=require("../../../../common/vendor.js"),o={name:"u-loading",props:{mode:{type:String,default:"circle"},color:{type:String,default:"#c7c7c7"},size:{type:[String,Number],default:"34"},show:{type:Boolean,default:!0}},computed:{cricleStyle(){let e={};return e.width=this.size+"rpx",e.height=this.size+"rpx","circle"==this.mode&&(e.borderColor=`#e4e4e4 #e4e4e4 #e4e4e4 ${this.color?this.color:"#c7c7c7"}`),e}}};const t=e._export_sfc(o,[["render",function(o,t,r,c,i,l){return e.e({a:r.show},r.show?{b:e.n("circle"==r.mode?"u-loading-circle":"u-loading-flower"),c:e.s(l.cricleStyle)}:{})}],["__scopeId","data-v-593579e7"]]);wx.createComponent(t);