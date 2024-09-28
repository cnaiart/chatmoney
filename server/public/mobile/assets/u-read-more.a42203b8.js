import{D as e,r as t,a as o,o as s,c as n,w as a,b as r,m as i,n as l,K as h,f as d,t as u,g,j as c,h as p}from"./index-9f08b835.js";import{_ as f}from"./u-icon.f0423eb2.js";import{_ as m}from"./_plugin-vue_export-helper.1b428a4d.js";const w=m({name:"u-read-more",emits:["open","close"],props:{showHeight:{type:[Number,String],default:400},toggle:{type:Boolean,default:!1},closeText:{type:String,default:"展开阅读全文"},openText:{type:String,default:"收起"},color:{type:String,default:"#2979ff"},fontSize:{type:[String,Number],default:28},shadowStyle:{type:Object,default:()=>({backgroundImage:"linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)",paddingTop:"300rpx",marginTop:"-300rpx"})},textIndent:{type:String,default:"2em"},index:{type:[Number,String],default:""}},watch:{paramsChange(e){this.init()}},computed:{paramsChange(){return`${this.toggle}-${this.showHeight}`},innerShadowStyle(){return this.showMore?{}:this.shadowStyle}},data(){return{isLongContent:!1,showMore:!1,elId:this.$u.guid()}},mounted(){this.$nextTick((()=>{this.init()}))},methods:{init(){this.$uGetRect("."+this.elId).then((t=>{t.height>e(this.showHeight)&&(this.isLongContent=!0,this.showMore=!1)}))},toggleReadMore(){this.showMore=!this.showMore,0==this.toggle&&(this.isLongContent=!1),this.$emit(this.showMore?"open":"close",this.index)}}},[["render",function(e,m,w,_,y,x){const S=c,M=p,b=t(o("u-icon"),f);return s(),n(S,{class:""},{default:a((()=>[r(S,{class:i(["u-content",[y.elId]]),style:l({height:y.isLongContent&&!y.showMore?w.showHeight+"rpx":"auto",textIndent:w.textIndent})},{default:a((()=>[h(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"]),y.isLongContent?(s(),n(S,{key:0,onClick:x.toggleReadMore,class:i(["u-content__showmore-wrap",{"u-content__show-more":y.showMore}]),style:l([x.innerShadowStyle])},{default:a((()=>[r(M,{class:"u-content__showmore-wrap__readmore-btn",style:l({fontSize:w.fontSize+"rpx",color:w.color})},{default:a((()=>[d(u(y.showMore?w.openText:w.closeText),1)])),_:1},8,["style"]),r(S,{class:"u-content__showmore-wrap__readmore-btn__icon u-flex"},{default:a((()=>[r(b,{color:w.color,size:w.fontSize,name:y.showMore?"arrow-up":"arrow-down"},null,8,["color","size","name"])])),_:1})])),_:1},8,["onClick","class","style"])):g("v-if",!0)])),_:3})}],["__scopeId","data-v-570a9541"]]);export{w as _};