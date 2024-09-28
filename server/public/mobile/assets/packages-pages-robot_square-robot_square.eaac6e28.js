import{_ as e}from"./page-meta.d2ccf398.js";import{d as l,A as t,G as a,s as i,L as s,x as r,ax as o,o as u,c as n,w as A,b as d,k as c,l as g,F as p,z as m,j as h,I as f,r as I,a as y,m as E,f as v,t as C,g as Q,D as b,ay as x,az as k,n as w,i as B,K as _,aA as R,aB as L,p as G,e as D,aC as z,h as S,aD as V}from"./index-9f08b835.js";import{_ as Z}from"./u-tabs.3aba862d.js";import{_ as j}from"./u-search.333cf11c.js";import{_ as Y}from"./tabbar.vue_vue_type_script_setup_true_lang.da8cbb67.js";import{_ as N}from"./u-image.e6fb9592.js";import{_ as O}from"./z-paging.5d396652.js";import{a as U,b as M,e as T}from"./robot.8b2fb6bb.js";import{w as J}from"./index.73309c03.js";import{_ as W}from"./_plugin-vue_export-helper.1b428a4d.js";import{g as F,d as P,a as H,m as q,b as X,v as K}from"./square.954d0237.js";import{_ as $}from"./icon_music.5ddb40fe.js";import"./u-badge.508fc5b2.js";import"./u-icon.f0423eb2.js";const ee=W(l({__name:"robot",props:{keyword:null},setup(e){const l=e,b=m(),x=t(),k=a({lists:[],current:0}),w=i([]),B=s(),_=async(e,t)=>{var a,i;try{const{lists:i=[]}=await M({keyword:l.keyword,cid:k.current,page_size:t,page_no:e});null==(a=B.value)||a.complete(i)}catch(s){null==(i=B.value)||i.complete(!1)}},R=()=>{var e;null==(e=B.value)||e.reload()};return r((()=>k.current),(()=>{R()})),J((()=>l.keyword),(e=>{R()}),{debounce:500}),o((async()=>{await(async()=>{k.lists=await U(),k.lists.unshift({name:"全部",id:0})})()})),(e,l)=>{const t=h,a=f,i=I(y("u-image"),N),s=I(y("z-paging"),O);return u(),n(t,{class:"flex flex-col min-h-0 h-full"},{default:A((()=>[d(a,{"scroll-x":"",class:"whitespace-nowrap"},{default:A((()=>[d(t,{class:"inline-flex py-[20rpx] px-[10rpx]"},{default:A((()=>[(u(!0),c(p,null,g(k.lists,(e=>(u(),n(t,{class:E(["category-item mx-[10rpx]",{"category-item-active":e.id==k.current}]),key:e.id,onClick:l=>k.current=e.id},{default:A((()=>[v(C(e.name),1)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1}),d(t,{class:"h-full"},{default:A((()=>[d(s,{ref_key:"pagingRef",ref:B,modelValue:w.value,"onUpdate:modelValue":l[0]||(l[0]=e=>w.value=e),fixed:!1,"auto-clean-list-when-reload":!1,onQuery:_},{default:A((()=>[d(t,{class:"px-[20rpx] flex flex-wrap mx-[-15rpx]"},{default:A((()=>[(u(!0),c(p,null,g(w.value,(e=>(u(),n(t,{key:e.id,class:"mb-[30rpx] w-[50%] px-[15rpx]",onClick:l=>(async e=>{x.isLogin||b.navigateTo("/pages/login/login");const{id:l}=await T({id:e.id});b.navigateTo({path:"/packages/pages/square_chat/square_chat",query:{id:l}})})(e)},{default:A((()=>[d(t,{class:"robot-item h-full"},{default:A((()=>[d(t,{class:"flex items-center"},{default:A((()=>[d(i,{src:e.image,width:"80",height:"80",shape:"circle"},null,8,["src"]),d(t,{class:"flex-1 min-w-0 ml-[16rpx]"},{default:A((()=>[d(t,{class:"text-bold line-clamp-1"},{default:A((()=>[v(C(e.name),1)])),_:2},1024),(null==e?void 0:e.author)?(u(),n(t,{key:0,class:"text-xs text-muted line-clamp-1"},{default:A((()=>[v(C(e.author),1)])),_:2},1024)):Q("v-if",!0)])),_:2},1024)])),_:2},1024),d(t,{class:"mt-[20rpx] text-muted flex-1 line-clamp-3"},{default:A((()=>[v(C(e.intro),1)])),_:2},1024),d(t,{class:"entry-btn"},{default:A((()=>[v("开始对话")])),_:1})])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-e5dd7cb2"]]);const le=W({name:"u-lazy-load",emits:["click","load","error"],props:{index:{type:[Number,String]},image:{type:String,default:""},imgMode:{type:String,default:"widthFix"},loadingImg:{type:String,default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUM0QjNBQjkyQUQ2MTFFQTlCNUQ4RTIzNDE5RUIxNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUM0QjNBQkEyQUQ2MTFFQTlCNUQ4RTIzNDE5RUIxNjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QzRCM0FCNzJBRDYxMUVBOUI1RDhFMjM0MTlFQjE2NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QzRCM0FCODJBRDYxMUVBOUI1RDhFMjM0MTlFQjE2NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtRHfPcAAAAzUExURZWVldfX18PDw62trZubm9zc3Li4uKGhoebm5tLS0uHh4c3Nzaenp729vcjIyLKysuvr6141L40AAAcXSURBVHja7NzZlqpGAEBR5lG0//9rIw7IJKJi4or7PGTdtN10wr5SVAEGf/qqArsAiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAg+nmQFMi5Jis+sIniED23jSzIgLTtg2D//iYme/8QBM/9lQ+CAEhbNLM3N9hEHAThX7GPCiBfAxK1b51kD+R7QMLjXg7iCsgWIPUh7pfVozG791oeBPngm48G583uW5GkBvI+SBaM2xXDn1oqum423bX/mgF5FySc2cv93Voug9TdZotsggnkBZB2NzbhrSY5HnoG07jei8dvzsJB/c3W60SALILE46+WCztsbhPR7R2VJq0ukEcT49nyy8QhaKcRa3fYHZD4+ufqOJAcgDz8/59vtw1I3QP5K6JsOG0vm3hce4I8LQp/BaRZGJC3AAn7IKOKXbC+7EdA5vdmmVwOLksgRThqOqiH4XEGsht+peoPUE8U/jJIO5OLH4GEwUslV5G0PTBG5Uiw/Y2jyigO3l9HAHKv9PYb82LloH74dZBoBUgar+l48NsNvtD0fkez9iwrAvIYZDRCl+Xs149Hm/KZmQ+QjUCiO1ei4ru7EsgnQYrkznlQb7thCuRfAzlOAPN72427P4VA/i2Q/DKT/Ls/VR8fvIBsDZIuz7TPF6TCbnk4GJkB2RokejTjuE7/unlgCuSTIO0Cy+Plp6vDfnQlBchy8QtjSHVd3EgmK1bHLm+H6+nXYbz2DuQRSPnqoL7vvq0u70on4zvxgCyWD3b9UyDVdW24PaWaiGTnFZJwPIQAebDpIKheBIm7n124ZthMJipAlkqHO+IZkP1tbfzOJark/A7MgKyvvl60fRqkvXfhuow+t9+q00+0/yyBrK8ZngOtBzldhw2X9tvpNGty0gvkmbPeJ0Cy/r09s/stbmfo0yMWkEdjevgKyOn2t2pxv7UXoibTdCDLje9/Ww1ymqzn87dbp92242ZmMRjI8hASvwKSLq4udqN6ksw8nxXN3tszD9L8Gkg+2mFrQYql5az4tvFj5xOx4VwnSdeBtGdyPwUytxK77pBVlNHdO7OK3rh/eTPUvdutT3fO52tuHMqD4N7llv8pyOQQ//w19YVDfX27+Sfuby9/6nau4pdA8vEdOZuChEH/quHt0Jg+IRJ/5+PrHwKZXfjbDiS73Zo7mu5UkzX7uTsXe0e/7nC3ePf1O69+BUg2XDfZCqSqOu7rGVf8cHBe8zhC2b61dtUHXv0OkGo6ZL4JkpbRYXdUaFevivx2M/1GIOctNh949TtAoumQ+TpIHMX54CJu+8BDd8FkE5BqcZh/59XvAClmTvKfB0nDqIlHo3T70SftyW1eX9dXtgQJqs1f/Q6QaOa/7wmQKtxH8eiGoCRuovODIO3VxOMmruZbHrLyD7z6DSDtGyT7ew1kf9hNn07c986JTovzzem0Id9wUG+Vk/IDr34DSNR7huZJkMFT6vEhqrPx/j5cnlZML8N6/PAzh9Y99Flm5Yde/c9BquDOkvkKkMP58dA4qi9vivE8JOvGz/j8FokfPpr288+pH2ZPOZrLmeGD+7KOh6dqYWJ48ki7yUg0tz0go/fv/LLddfV3sgOLJyaGPY/zrSlh1a36Arkzoue9CyG35ze6E6/dzO2Ga0EGHqdRJIkfn9/8OEjTW8Vq91ZWh39FeehWA7Nu9ft8CpUEk1WWOyDF0OPyEU2Pnzf/bZC0P6IPzmAvu7KauQBVrgKpJ0tG2arHzX8e5Pb3PezNs/PrX+3JMyCLn9XXf37tPFHvt09WfCDDjx+yyn1/p1V11j7GnB/q3leLuVva79S/tzed+db08YpF4uOZtmz/9oXWMq6BCAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiAALELvqt/BBgACqVeUBXxcCkAAAAASUVORK5CYII="},errorImg:{type:String,default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODdDMjhENDYyQUQ2MTFFQTlDQ0VBODgxQjFFOEEyMEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODdDMjhENDcyQUQ2MTFFQTlDQ0VBODgxQjFFOEEyMEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4N0MyOEQ0NDJBRDYxMUVBOUNDRUE4ODFCMUU4QTIwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4N0MyOEQ0NTJBRDYxMUVBOUNDRUE4ODFCMUU4QTIwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhLwhikAAAAzUExURZWVldfX162t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"},threshold:{type:[Number,String],default:100},duration:{type:[Number,String],default:500},effect:{type:String,default:"ease-in-out"},isEffect:{type:Boolean,default:!0},borderRadius:{type:[Number,String],default:0},height:{type:[Number,String],default:"100%"}},data(){return{isShow:!1,opacity:1,time:this.duration,loadStatus:"",isError:!1,elIndex:this.$u.guid()}},computed:{getThreshold(){let e=b(Math.abs(this.threshold));return this.threshold<0?-e:e},imgHeight(){return this.$u.addUnit(this.height)}},created(){this.observer={}},watch:{isShow(e){this.isEffect&&(this.time=0,this.opacity=0,setTimeout((()=>{this.time=this.duration,this.opacity=1}),30))},image(e){e?(this.init(),this.isError=!1):this.isError=!0}},methods:{init(){this.isError=!1,this.loadStatus=""},clickImg(){0==this.isShow||this.isError,this.$emit("click",this.index)},imgLoaded(e){""==this.loadStatus?this.loadStatus="lazyed":"lazyed"==this.loadStatus&&(this.loadStatus="loaded",this.$emit("load",this.index))},errorImgLoaded(){this.$emit("error",this.index)},loadError(){this.isError=!0},disconnectObserver(e){const l=this[e];l&&l.disconnect()}},beforeUnmount(){},mounted(){this.$nextTick((()=>{x("uOnReachBottom",(()=>{this.isShow||(this.isShow=!0)}))})),setTimeout((()=>{this.disconnectObserver("contentObserver");const e=k(this);e.relativeToViewport({bottom:this.getThreshold}).observe(".u-lazy-item-"+this.elIndex,(e=>{e.intersectionRatio>0&&(this.isShow=!0,this.disconnectObserver("contentObserver"))})),this.contentObserver=e}),30)}},[["render",function(e,l,t,a,i,s){const r=B,o=h;return u(),n(o,{class:E(["u-wrap","u-lazy-item-"+i.elIndex]),style:w({opacity:Number(i.opacity),borderRadius:t.borderRadius+"rpx",transition:`opacity ${i.time/1e3}s ease-in-out`})},{default:A((()=>[d(o,{class:E("u-lazy-item-"+i.elIndex)},{default:A((()=>[i.isError?(u(),n(r,{key:1,style:w({borderRadius:t.borderRadius+"rpx",height:s.imgHeight}),class:"u-lazy-item error",src:t.errorImg,mode:t.imgMode,onLoad:s.errorImgLoaded,onClick:s.clickImg},null,8,["style","src","mode","onLoad","onClick"])):(u(),n(r,{key:0,style:w({borderRadius:t.borderRadius+"rpx"}),class:"u-lazy-item",src:i.isShow?t.image:t.loadingImg,mode:t.imgMode,onLoad:s.imgLoaded,onError:s.loadError,onClick:s.clickImg},null,8,["style","src","mode","onLoad","onError","onClick"]))])),_:1},8,["class"])])),_:1},8,["style","class"])}],["__scopeId","data-v-15d32bd3"]]);const te=W({name:"u-waterfall",emits:["update:modelValue","input"],props:{value:{type:Array,default:function(){return[]}},modelValue:{type:Array,default:function(){return[]}},addTime:{type:[Number,String],default:200},idKey:{type:String,default:"id"}},data:()=>({leftList:[],rightList:[],tempList:[],children:[]}),watch:{copyFlowList(e,l){let t=Array.isArray(l)&&l.length>0?l.length:0;this.tempList=this.tempList.concat(this.cloneData(e.slice(t))),this.splitData()}},mounted(){this.tempList=this.cloneData(this.copyFlowList),this.splitData()},computed:{valueCom(){return this.modelValue},copyFlowList(){return this.cloneData(this.valueCom)}},methods:{async splitData(){if(!this.tempList.length)return;let e=await this.$uGetRect("#u-left-column"),l=await this.$uGetRect("#u-right-column"),t=this.tempList[0];t&&(e.height<l.height?this.leftList.push(t):e.height>l.height?this.rightList.push(t):this.leftList.length<=this.rightList.length?this.leftList.push(t):this.rightList.push(t),this.tempList.splice(0,1),this.tempList.length&&setTimeout((()=>{this.splitData()}),this.addTime))},cloneData:e=>JSON.parse(JSON.stringify(e)),clear(){this.leftList=[],this.rightList=[],this.$emit("input",[]),this.$emit("update:modelValue",[]),this.tempList=[]},remove(e){let l=-1;l=this.leftList.findIndex((l=>l[this.idKey]==e)),-1!=l?this.leftList.splice(l,1):(l=this.rightList.findIndex((l=>l[this.idKey]==e)),-1!=l&&this.rightList.splice(l,1)),l=this.value.findIndex((l=>l[this.idKey]==e)),-1!=l&&(this.$emit("input",this.valueCom.splice(l,1)),this.$emit("update:modelValue",this.valueCom.splice(l,1)))},modify(e,l,t){let a=-1;if(a=this.leftList.findIndex((l=>l[this.idKey]==e)),-1!=a?this.leftList[a][l]=t:(a=this.rightList.findIndex((l=>l[this.idKey]==e)),-1!=a&&(this.rightList[a][l]=t)),a=this.valueCom.findIndex((l=>l[this.idKey]==e)),-1!=a){let e=this.cloneData(this.valueCom);e[a][l]=t,this.$emit("input",e),this.$emit("update:modelValue",e)}}}},[["render",function(e,l,t,a,i,s){const r=h;return u(),n(r,{class:"u-waterfall"},{default:A((()=>[d(r,{id:"u-left-column",class:"u-column"},{default:A((()=>[_(e.$slots,"left",{leftList:i.leftList},void 0,!0)])),_:3}),d(r,{id:"u-right-column",class:"u-column"},{default:A((()=>[_(e.$slots,"right",{rightList:i.rightList},void 0,!0)])),_:3})])),_:3})}],["__scopeId","data-v-39ca942e"]]),ae=W(l({__name:"draw",props:{keyword:null},setup(e){const l=e,r=z.baseUrl,b=m(),x=t(),k=i([]),B=s(),_=s(null),S=s(),V=i(!1),Z=a({lists:[],current:""}),j=()=>{var e;null==(e=B.value)||e.reload()},Y=async(e,t)=>{var a,i,s;try{const{lists:s=[]}=await F({keyword:l.keyword,category_id:Z.current,page_size:t,page_no:e});1==e&&(null==(a=_.value)||a.clear()),null==(i=B.value)||i.complete(s)}catch(r){null==(s=B.value)||s.complete(!1)}},U=async e=>{var l,t;if(x.isLogin)try{await P({records_id:e.id,status:e.is_collect?0:1}),0===Z.current?(B.value.refresh(),null==(l=_.value)||l.remove(e.id)):null==(t=_.value)||t.modify(e.id,"is_collect",e.is_collect?0:1)}catch(a){console.error(a),uni.$u.toast(JSON.stringify(a))}else b.navigateTo("/pages/login/login")},M=async e=>{b.navigateTo({path:"/packages/pages/draw_detail/draw_detail",query:{id:e.id,collectId:e.id}})};return J((()=>l.keyword),(e=>{j()}),{debounce:500}),o((async()=>{await(async()=>{Z.lists=await R({type:1}),Z.lists.unshift({name:"全部",id:""})})()})),(e,l)=>{const t=h,a=f,i=I(y("u-lazy-load"),le),s=I(y("u-image"),N),o=I(y("u-waterfall"),te),m=I(y("z-paging"),O),b=L("draw-poster");return u(),n(t,{class:"flex flex-col min-h-0 h-full"},{default:A((()=>[d(a,{"scroll-x":"",class:"whitespace-nowrap"},{default:A((()=>[d(t,{class:"inline-flex py-[20rpx] px-[10rpx]"},{default:A((()=>[(u(!0),c(p,null,g(Z.lists,(e=>(u(),n(t,{class:E(["category-item mx-[10rpx]",{"category-item-active":e.id===Z.current}]),key:e.id,onClick:l=>{return t=e.id,Z.current=t,void j();var t}},{default:A((()=>[v(C(e.name),1)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1}),d(t,{class:"h-full"},{default:A((()=>[d(m,{ref_key:"pagingRef",ref:B,"auto-show-back-to-top":"",modelValue:k.value,"onUpdate:modelValue":l[1]||(l[1]=e=>k.value=e),fixed:!1,"auto-clean-list-when-reload":!0,"auto-scroll-to-top-when-reload":!1,onQuery:Y},{default:A((()=>[d(t,{class:"px-[20rpx]"},{default:A((()=>[d(o,{ref_key:"waterfallRef",ref:_,modelValue:k.value,"onUpdate:modelValue":l[0]||(l[0]=e=>k.value=e),"add-time":"50"},{left:A((({leftList:e})=>[(u(!0),c(p,null,g(e,((e,l)=>(u(),n(t,{key:l,class:"mb-[30rpx] mr-[15rpx]",onClick:l=>M(e)},{default:A((()=>{var a;return[d(t,{class:"relative"},{default:A((()=>[d(i,{threshold:"0","border-radius":"10",image:(null==e?void 0:e.thumbnail)||(null==e?void 0:e.image),index:l},null,8,["image","index"]),Q("    操作    "),d(t,{class:"enter"},{default:A((()=>[d(t,{class:"praise bottom-[16rpx] right-[16rpx]",style:{"background-color":"rgba(0, 0, 0, 0.5)"},onClick:G((l=>U(e)),["stop"])},{default:A((()=>[d(t,{class:E(["praise-animate",e.is_collect?"praise-entry":"praise-leave"]),style:w({backgroundImage:`url(${D(r)}resource/image/api/default/praise.png)`})},null,8,["style","class"])])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024),Q("    描述词    "),d(t,{class:"mt-2 font-medium line-clamp-1"},{default:A((()=>[v(C((null==e?void 0:e.prompts_cn)||(null==e?void 0:e.original_prompts.prompt)),1)])),_:2},1024),Q("    用户信息    "),(null==(a=null==e?void 0:e.user_info)?void 0:a.name)?(u(),n(t,{key:0,class:"flex items-center mt-2"},{default:A((()=>[d(t,{class:"flex-none"},{default:A((()=>[d(s,{src:e.user_info.image,width:"40",height:"40","border-radius":"50"},null,8,["src"])])),_:2},1024),d(t,{class:"ml-2 text-xs line-clamp-1"},{default:A((()=>[v(C(e.user_info.name),1)])),_:2},1024)])),_:2},1024)):Q("v-if",!0)]})),_:2},1032,["onClick"])))),128))])),right:A((({rightList:e})=>[(u(!0),c(p,null,g(e,((e,l)=>(u(),n(t,{key:l,class:"mb-[30rpx] ml-[15rpx] relative",onClick:l=>M(e)},{default:A((()=>{var a;return[d(t,{class:"relative"},{default:A((()=>[d(i,{threshold:"0","border-radius":"10",image:(null==e?void 0:e.thumbnail)||(null==e?void 0:e.image),index:l},null,8,["image","index"]),Q("    操作    "),d(t,{class:"enter"},{default:A((()=>[d(t,{class:"praise bottom-[16rpx] right-[16rpx]",style:{"background-color":"rgba(0, 0, 0, 0.5)"},onClick:G((l=>U(e)),["stop"])},{default:A((()=>[d(t,{class:E(["praise-animate",e.is_collect?"praise-entry":"praise-leave"]),style:w({backgroundImage:`url(${D(r)}resource/image/api/default/praise.png)`})},null,8,["style","class"])])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024),Q("    描述词    "),d(t,{class:"mt-2 font-medium line-clamp-1"},{default:A((()=>[v(C((null==e?void 0:e.prompts_cn)||(null==e?void 0:e.original_prompts.prompt)),1)])),_:2},1024),Q("    用户信息    "),(null==(a=null==e?void 0:e.user_info)?void 0:a.name)?(u(),n(t,{key:0,class:"flex items-center mt-2"},{default:A((()=>[d(t,{class:"flex-none"},{default:A((()=>[d(s,{src:e.user_info.image,width:"40",height:"40","border-radius":"50"},null,8,["src"])])),_:2},1024),d(t,{class:"ml-2 text-xs line-clamp-1"},{default:A((()=>[v(C(e.user_info.name),1)])),_:2},1024)])),_:2},1024)):Q("v-if",!0)]})),_:2},1032,["onClick"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["modelValue"])])),_:1}),V.value?(u(),n(b,{key:0,ref_key:"posterRef",ref:S,onClose:l[2]||(l[2]=e=>V.value=!1)},null,512)):Q("v-if",!0)])),_:1})}}}),[["__scopeId","data-v-6b013af0"]]),ie=W(l({__name:"music",props:{keyword:null},setup(e){const l=e,o=z.baseUrl,b=m(),x=t(),k=i([]),_=s(),L=a({lists:[],current:""}),V=async(e,t)=>{var a,i;try{const{lists:i=[]}=await H({keyword:l.keyword,category_id:L.current,page_size:t,page_no:e});null==(a=_.value)||a.complete(i)}catch(s){null==(i=_.value)||i.complete(!1)}},Z=()=>{var e;null==(e=_.value)||e.refresh()};return r((()=>L.current),(()=>{Z()})),J((()=>l.keyword),(e=>{Z()}),{debounce:500,immediate:!1}),(async()=>{L.lists=await R({type:2}),L.lists.unshift({name:"全部",id:""})})(),(e,l)=>{const t=h,a=f,i=I(y("u-image"),N),s=B,r=S,m=I(y("z-paging"),O);return u(),n(t,{class:"flex flex-col min-h-0 h-full"},{default:A((()=>[d(a,{"scroll-x":"",class:"whitespace-nowrap"},{default:A((()=>[d(t,{class:"inline-flex py-[20rpx] px-[10rpx]"},{default:A((()=>[(u(!0),c(p,null,g(L.lists,(e=>(u(),n(t,{class:E(["category-item mx-[10rpx]",{"category-item-active":e.id===L.current}]),key:e.id,onClick:l=>L.current=e.id},{default:A((()=>[v(C(e.name),1)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1}),d(t,{class:"h-full"},{default:A((()=>[d(m,{ref_key:"pagingRef",ref:_,"auto-show-back-to-top":"",modelValue:k.value,"onUpdate:modelValue":l[0]||(l[0]=e=>k.value=e),fixed:!1,"auto-clean-list-when-reload":!0,"auto-scroll-to-top-when-reload":!1,onQuery:V},{default:A((()=>[d(t,{class:"px-[20rpx] flex flex-wrap mx-[-15rpx]"},{default:A((()=>[(u(!0),c(p,null,g(k.value,(e=>(u(),n(t,{key:e.id,class:"mb-[30rpx] w-[50%] px-[15rpx]",onClick:l=>(async e=>{x.isLogin||b.navigateTo("/pages/login/login"),b.navigateTo({path:"/packages/pages/music_player/music_player",query:{id:e.id,mode:"square"}})})(e)},{default:A((()=>[d(t,{class:"music-item h-full"},{default:A((()=>{var l;return[d(t,{class:"w-full relative"},{default:A((()=>[d(i,{src:e.image_url,width:"100%",height:"340",mode:"aspectFill","border-radius":"15"},null,8,["src"]),d(t,{class:"absolute left-[16rpx] bottom-[16rpx]"},{default:A((()=>[d(t,{class:"bg-[rgba(0,0,0,0.5)] inline-flex text-white p-[10rpx] rounded-full text-xs items-center"},{default:A((()=>[d(s,{src:$,class:"w-[24rpx] h-[24rpx]"}),d(r,{class:"ml-[6rpx]"},{default:A((()=>[v(C(e.duration),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),d(t,{class:"praise right-[16rpx] bottom-[16rpx]",style:{"background-color":"rgba(0, 0, 0, 0.5)"},onClick:G((l=>(async e=>{x.isLogin?(await q({records_id:e.id,status:e.is_collect?0:1}),0===L.current?Z():e.is_collect=e.is_collect?0:1):b.navigateTo("/pages/login/login")})(e)),["stop"])},{default:A((()=>[d(t,{class:E(["praise-animate",e.is_collect?"praise-entry":"praise-leave"]),style:w({backgroundImage:`url(${D(o)}resource/image/api/default/praise.png)`})},null,8,["style","class"])])),_:2},1032,["onClick"])])),_:2},1024),Q("    描述词    "),d(t,{class:"mt-1 font-medium line-clamp-1"},{default:A((()=>[v(C(null==e?void 0:e.title),1)])),_:2},1024),Q("    用户信息    "),(null==(l=null==e?void 0:e.user_info)?void 0:l.name)?(u(),n(t,{key:0,class:"flex items-center mt-2"},{default:A((()=>[d(t,{class:"flex-none"},{default:A((()=>[d(i,{src:e.user_info.image,width:"40",height:"40","border-radius":"50"},null,8,["src"])])),_:2},1024),d(t,{class:"ml-2 text-xs line-clamp-1"},{default:A((()=>[v(C(e.user_info.name),1)])),_:2},1024)])),_:2},1024)):Q("v-if",!0)]})),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-4a2fba04"]]),se=W(l({__name:"video",props:{keyword:null},setup(e){const l=e,o=z.baseUrl,b=m(),x=t(),k=i([]),B=s(),_=a({lists:[],current:""});i(""),i(!1);const L=()=>{var e;null==(e=B.value)||e.refresh()},S=async(e,t)=>{var a,i;try{const{lists:i=[]}=await X({keyword:l.keyword,category_id:_.current,page_size:t,page_no:e});null==(a=B.value)||a.complete(i)}catch(s){null==(i=B.value)||i.complete(!1)}};return r((()=>_.current),(()=>{L()})),J((()=>l.keyword),(e=>{L()}),{debounce:500,immediate:!1}),(async()=>{_.lists=await R({type:3}),_.lists.unshift({name:"全部",id:""})})(),(e,l)=>{const t=h,a=f,i=V,s=I(y("u-image"),N),r=I(y("z-paging"),O);return u(),n(t,{class:"flex flex-col min-h-0 h-full"},{default:A((()=>[d(a,{"scroll-x":"",class:"whitespace-nowrap"},{default:A((()=>[d(t,{class:"inline-flex py-[20rpx] px-[10rpx]"},{default:A((()=>[(u(!0),c(p,null,g(_.lists,(e=>(u(),n(t,{class:E(["category-item mx-[10rpx]",{"category-item-active":e.id===_.current}]),key:e.id,onClick:l=>_.current=e.id},{default:A((()=>[v(C(e.name),1)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1}),d(t,{class:"h-full"},{default:A((()=>[d(r,{ref_key:"pagingRef",ref:B,"auto-show-back-to-top":"",modelValue:k.value,"onUpdate:modelValue":l[0]||(l[0]=e=>k.value=e),fixed:!1,"auto-clean-list-when-reload":!0,"auto-scroll-to-top-when-reload":!1,onQuery:S},{default:A((()=>[d(t,{class:"px-[20rpx] flex flex-wrap mx-[-15rpx]"},{default:A((()=>[(u(!0),c(p,null,g(k.value,((e,l)=>(u(),n(t,{key:l,class:"mb-[30rpx] w-[50%] px-[15rpx] relative",onClick:G((l=>(async e=>{b.navigateTo({path:"/packages/pages/video_detail/video_detail",query:{id:e.id,collectId:e.id}})})(e)),["stop"])},{default:A((()=>{var l;return[d(t,{class:"h-[340rpx] relative"},{default:A((()=>[d(i,{class:"w-full h-full rounded-[10rpx] overflow-hidden pointer-events-none",preload:"","initial-time":"0",playsinline:"","webkit-playsinline":"","show-center-play-btn":!1,controls:!1,"x-webkit-airplay":"allow","x5-video-player-fullscreen":"true","x5-video-player-type":"h5",src:e.video_url},null,8,["src"]),d(t,{class:"praise right-[16rpx] bottom-[16rpx]",style:{"background-color":"rgba(0, 0, 0, 0.5)"},onClick:G((l=>(async e=>{if(x.isLogin)try{await K({records_id:e.id,status:e.is_collect?0:1}),0===_.current?L():e.is_collect=e.is_collect?0:1}catch(l){console.error(l),uni.$u.toast(JSON.stringify(l))}else b.navigateTo("/pages/login/login")})(e)),["stop"])},{default:A((()=>[d(t,{class:E(["praise-animate",e.is_collect?"praise-entry":"praise-leave"]),style:w({backgroundImage:`url(${D(o)}resource/image/api/default/praise.png)`})},null,8,["style","class"])])),_:2},1032,["onClick"])])),_:2},1024),Q("    描述词    "),d(t,{class:"mt-2 font-medium line-clamp-1"},{default:A((()=>[v(C(e.prompt),1)])),_:2},1024),Q("    用户信息    "),(null==(l=null==e?void 0:e.user_info)?void 0:l.name)?(u(),n(t,{key:0,class:"flex items-center mt-2"},{default:A((()=>[d(t,{class:"flex-none"},{default:A((()=>[d(s,{src:e.user_info.image,width:"40",height:"40","border-radius":"50"},null,8,["src"])])),_:2},1024),d(t,{class:"ml-2 text-xs line-clamp-1"},{default:A((()=>[v(C(e.user_info.name),1)])),_:2},1024)])),_:2},1024)):Q("v-if",!0)]})),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-15dbf44e"]]),re=W(l({__name:"robot_square",setup(l){const t=i(""),a=i(0),s=[{name:"智能体",value:0},{name:"AI绘画",value:1},{name:"AI音乐",value:2},{name:"AI视频",value:3}],r=e=>{a.value!==e&&(t.value="",a.value=e)};return(l,i)=>{const o=I(y("page-meta"),e),g=I(y("u-tabs"),Z),m=h,f=I(y("u-search"),j),E=I(y("tabbar"),Y);return u(),c(p,null,[d(o,{"page-style":l.$theme.pageStyle},null,8,["page-style"]),d(m,{class:"square"},{default:A((()=>[d(m,{class:"py-[10rpx] px-[30rpx] bg-white"},{default:A((()=>[d(g,{list:s,"is-scroll":!1,current:a.value,"active-color":l.$theme.primaryColor,onChange:r},null,8,["current","active-color"])])),_:1}),d(m,{class:"py-[14rpx] px-[30rpx] bg-white"},{default:A((()=>[d(f,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),placeholder:"请输入关键词搜索",height:"72","bg-color":"#F7F8F9"},null,8,["modelValue"])])),_:1}),d(m,{class:"flex-1 min-h-0"},{default:A((()=>[0===a.value?(u(),n(ee,{key:0,class:"w-full h-full",keyword:t.value},null,8,["keyword"])):Q("v-if",!0),1===a.value?(u(),n(ae,{key:1,class:"w-full h-full",keyword:t.value},null,8,["keyword"])):Q("v-if",!0),2===a.value?(u(),n(ie,{key:2,class:"w-full h-full",keyword:t.value},null,8,["keyword"])):Q("v-if",!0),3===a.value?(u(),n(se,{key:3,class:"w-full h-full",keyword:t.value},null,8,["keyword"])):Q("v-if",!0)])),_:1}),d(E)])),_:1})],64)}}}),[["__scopeId","data-v-506bb638"]]);export{re as default};