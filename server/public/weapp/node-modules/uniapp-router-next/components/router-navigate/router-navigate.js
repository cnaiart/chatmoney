"use strict";const t=require("../../../../common/vendor.js"),e={options:{virtualHost:!0},externalClasses:["class"],props:{to:{type:[String,Object]},navType:{type:String,default:"navigate"},delta:{type:Number,default:1}},computed:{url(){if(this.to){const e=t.NavigationTypesEnums[this.navType],n=this.$uniRouter.resolve(this.to,e);return null==n?void 0:n.fullPath}}},methods:{navigate(){const e=t.NavigationTypesEnums[this.navType];if(null==e)return console.error(` "navType" unknown type \n\n value：${this.navType}`);let n=this.to||{};"navigateBack"==this.navType&&(n={delta:this.delta}),this.$uniRouter.navigate(n,e)}}};const n=t._export_sfc(e,[["render",function(e,n,a,s,i,o){return{a:t.o(((...t)=>o.navigate&&o.navigate(...t)))}}]]);wx.createComponent(n);