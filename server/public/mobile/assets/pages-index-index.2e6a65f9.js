import{d as e,u as t,r as i,a,o as r,c as s,w as l,b as n,n as o,e as d,f as u,t as c,g as p,i as m,h as f,j as g,k as x,F as h,l as y,m as v,p as A,S as _,q as C,s as b,v as k,x as w,y as H,z as B,A as P,B as R,C as S,D as j,E}from"./index-9f08b835.js";import{_ as I}from"./page-meta.d2ccf398.js";import{n as Y,_ as J}from"./tabbar.vue_vue_type_script_setup_true_lang.da8cbb67.js";import{_ as L}from"./u-sticky.37038b68.js";import{_ as N}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as O}from"./u-image.e6fb9592.js";import{_ as U}from"./u-icon.f0423eb2.js";import{c as D}from"./create.9c487682.js";import"./u-badge.508fc5b2.js";const z=N(e({__name:"title",props:{percent:null,isHidden:{type:Boolean},prop:null},setup(e){const x=t();return(t,h)=>{const y=m,v=f,A=g,_=i(a("u-sticky"),L);return e.isHidden?(r(),s(_,{key:0,"h5-nav-height":"0","bg-color":"transparent"},{default:l((()=>[n(A,{class:"header flex items-center",style:o({"background-color":`rgba(255, 255, 255, ${e.percent})`})},{default:l((()=>[n(y,{src:d(x).getWebsiteConfig.pc_logo,class:"w-[50rpx] h-[50rpx] rounded-md"},null,8,["src"]),n(v,{class:"ml-2"},{default:l((()=>[u(c(d(x).getWebsiteConfig.pc_name),1)])),_:1})])),_:1},8,["style"])])),_:1})):p("v-if",!0)}}}),[["__scopeId","data-v-e6a9cac7"]]);const Q=N({name:"u-swiper",emits:["click","change"],props:{list:{type:Array,default:()=>[]},title:{type:Boolean,default:!1},indicator:{type:Object,default:()=>({})},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"},bgColor:{type:String,default:"#f3f4f6"},current:{type:[Number,String],default:0},titleStyle:{type:Object,default:()=>({})}},watch:{list(e,t){e.length!==t.length&&(this.uCurrent=0)},current(e){this.uCurrent=e}},data(){return{uCurrent:this.current}},computed:{justifyContent(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom(){let e=0;return"none"==this.mode?"12rpx":(e=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",e)},elCurrent(){return Number(this.current)}},methods:{listClick(e){this.$emit("click",e)},change(e){let t=e.detail.current;this.uCurrent=t,this.$emit("change",t)},animationfinish(e){}}},[["render",function(e,t,i,a,d,f){const b=m,k=g,w=_,H=C;return r(),s(k,{class:"u-swiper-wrap",style:o({borderRadius:`${i.borderRadius}rpx`})},{default:l((()=>[n(H,{current:f.elCurrent,onChange:f.change,onAnimationfinish:f.animationfinish,interval:i.interval,circular:i.circular,duration:i.duration,autoplay:i.autoplay,"previous-margin":i.effect3d?i.effect3dPreviousMargin+"rpx":"0","next-margin":i.effect3d?i.effect3dPreviousMargin+"rpx":"0",style:o({height:i.height+"rpx",backgroundColor:i.bgColor})},{default:l((()=>[(r(!0),x(h,null,y(i.list,((e,t)=>(r(),s(w,{class:"u-swiper-item",key:t},{default:l((()=>[n(k,{class:v(["u-list-image-wrap",[d.uCurrent!=t?"u-list-scale":""]]),onClick:A((e=>f.listClick(t)),["stop","prevent"]),style:o({borderRadius:`${i.borderRadius}rpx`,transform:i.effect3d&&d.uCurrent!=t?"scaleY(0.9)":"scaleY(1)",margin:i.effect3d&&d.uCurrent!=t?"0 20rpx":0})},{default:l((()=>[n(b,{class:"u-swiper-image",src:e[i.name]||e,mode:i.imgMode},null,8,["src","mode"]),i.title&&e.title?(r(),s(k,{key:0,class:"u-swiper-title u-line-1",style:o([{"padding-bottom":f.titlePaddingBottom},i.titleStyle])},{default:l((()=>[u(c(e.title),1)])),_:2},1032,["style"])):p("v-if",!0)])),_:2},1032,["onClick","class","style"])])),_:2},1024)))),128))])),_:1},8,["current","onChange","onAnimationfinish","interval","circular","duration","autoplay","previous-margin","next-margin","style"]),n(k,{class:"u-swiper-indicator",style:o({top:"topLeft"==i.indicatorPos||"topCenter"==i.indicatorPos||"topRight"==i.indicatorPos?"12rpx":"auto",bottom:"bottomLeft"==i.indicatorPos||"bottomCenter"==i.indicatorPos||"bottomRight"==i.indicatorPos?"12rpx":"auto",justifyContent:f.justifyContent,padding:"0 "+(i.effect3d?"74rpx":"24rpx")})},{default:l((()=>["rect"==i.mode?(r(!0),x(h,{key:0},y(i.list,((e,t)=>(r(),s(k,{class:v(["u-indicator-item-rect",{"u-indicator-item-rect-active":t==d.uCurrent}]),key:t},null,8,["class"])))),128)):p("v-if",!0),"dot"==i.mode?(r(!0),x(h,{key:1},y(i.list,((e,t)=>(r(),s(k,{class:v(["u-indicator-item-dot",{"u-indicator-item-dot-active":t==d.uCurrent}]),key:t},null,8,["class"])))),128)):p("v-if",!0),"round"==i.mode?(r(!0),x(h,{key:2},y(i.list,((e,t)=>(r(),s(k,{class:v(["u-indicator-item-round",{"u-indicator-item-round-active":t==d.uCurrent}]),key:t},null,8,["class"])))),128)):p("v-if",!0),"number"==i.mode?(r(),s(k,{key:3,class:"u-indicator-item-number"},{default:l((()=>[u(c(d.uCurrent+1)+"/"+c(i.list.length),1)])),_:1})):p("v-if",!0)])),_:1},8,["style"])])),_:1},8,["style"])}],["__scopeId","data-v-3d99ed00"]]),F=e({__name:"banner",props:{isHidden:{type:Boolean},prop:null},setup(e){const o=e,{getImageUrl:d}=t(),u=b();k((()=>{try{const e=null==o?void 0:o.prop.data,t=null==e?void 0:e.length;if(!t)return;for(let i=0;i<t;i++){const t=e[i];t.image=d(t.image)}u.value=e.filter((e=>1*e.isShow))}catch(e){console.log("轮播图数据错误",e)}}));const c=e=>{var t;const i=null==(t=u.value[e])?void 0:t.link;i&&Y(i)};return(t,o)=>{const d=i(a("u-swiper"),Q),m=g;return u.value.length&&e.isHidden?(r(),s(m,{key:0,class:"px-[30rpx] pt-[24rpx]"},{default:l((()=>[n(d,{list:u.value,height:280,name:"image",borderRadius:20,onClick:c},null,8,["list"])])),_:1})):p("v-if",!0)}}}),G=e({__name:"ad",props:{isHidden:{type:Boolean},prop:null},setup(e){const m=e,{getImageUrl:f}=t(),v=b([]);w((()=>m.prop.data),(e=>{v.value=e.filter((e=>1*e.isShow))}),{deep:!0,immediate:!0});return(t,m)=>{const A=i(a("u-image"),O),_=g;return e.isHidden?(r(),s(_,{key:0,class:"mx-[30rpx] mt-[30rpx]"},{default:l((()=>[n(_,{class:"grid gap-y-3 gap-x-[30rpx]",style:o({"grid-template-columns":`repeat(${e.prop.showType}, 1fr)`})},{default:l((()=>[(r(!0),x(h,null,y(v.value,((t,i)=>(r(),s(_,{key:i,class:"flex flex-col items-center min-w-[112rpx] bg-white rounded-[20rpx] overflow-hidden",onClick:e=>{var i;(i=t.link)&&Y(i)}},{default:l((()=>[n(A,{class:"w-full",width:2==e.prop.showType?330:210,height:2==e.prop.showType?236:148,src:d(f)(t.image)},null,8,["width","height","src"]),n(_,{class:"w-full pb-[30rpx] pt-[24rpx] px-[20rpx] text-center"},{default:l((()=>[n(_,{class:"text-xl line-clamp-1 font-medium"},{default:l((()=>[u(c(t.title),1)])),_:2},1024),n(_,{class:"text-content line-clamp-1 mt-[5px] text-sm"},{default:l((()=>[u(c(t.desc),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1},8,["style"])])),_:1})):p("v-if",!0)}}}),T=N(e({__name:"menu",props:{isHidden:{type:Boolean},prop:null},setup(e){const m=e,{getImageUrl:f}=t(),A=b(0),k=b([]);w((()=>m.prop.data),(e=>{const t=e.filter((e=>e.isShow));k.value=H(t,8)}),{deep:!0,immediate:!0});const B=e=>{A.value=e.detail.current};return(t,m)=>{const b=i(a("u-image"),O),w=g,H=_,P=C;return e.isHidden?(r(),s(w,{key:0,class:"relative mx-[30rpx] mt-[30rpx] bg-white rounded-[20rpx]"},{default:l((()=>[n(P,{class:"py-[20rpx] uni-swiper",style:o({height:k.value[0].length>4?"320rpx":"140rpx"}),autoplay:!1,"indicator-dots":!1,onChange:B},{default:l((()=>[(r(!0),x(h,null,y(k.value,((e,t)=>(r(),s(H,{key:t},{default:l((()=>[k.value.length?(r(),s(w,{key:0,class:"nav"},{default:l((()=>[n(w,{class:"grid grid-rows-auto gap-y-3 w-full",style:o({"grid-template-columns":"repeat(4, 1fr)"})},{default:l((()=>[(r(!0),x(h,null,y(e,((e,t)=>(r(),s(w,{key:t,class:"flex flex-col items-center",onClick:t=>{var i;(i=e.link)&&Y(i)}},{default:l((()=>[n(b,{width:"80",height:"80",src:d(f)(e.image),alt:""},null,8,["src"]),n(w,{class:"mt-[20rpx] text-sm text-[#222]"},{default:l((()=>[u(c(e.title),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:2},1032,["style"])])),_:2},1024)):p("v-if",!0)])),_:2},1024)))),128))])),_:1},8,["style"]),k.value.length>1?(r(),s(w,{key:0,class:"swiper-indicator"},{default:l((()=>[(r(!0),x(h,null,y(k.value,((e,t)=>(r(),s(w,{class:v(["indicator-item-rect",{"indicator-item-rect-active":t==A.value}]),key:t},null,8,["class"])))),128))])),_:1})):p("v-if",!0)])),_:1})):p("v-if",!0)}}}),[["__scopeId","data-v-ef621f35"]]),q=e({__name:"hot",props:{isHidden:{type:Boolean},prop:null},setup(e){const g=e,v=B(),_=P(),{getImageUrl:C}=t(),k=b([]);w((()=>g.prop.data),(e=>{k.value=e}),{deep:!0,immediate:!0});return(t,b)=>{const k=i(a("u-image"),O),w=m,H=f,B=i(a("u-icon"),U);return e.isHidden?(r(),x("div",{key:0,class:"index-menu px-[15px] pb-4 pt-[15px]"},[R("div",{class:"text-xl font-medium mb-[15px]"},c(e.prop.title),1),R("div",{class:"grid gap-4",style:o({"grid-template-columns":`repeat(${e.prop.showType}, minmax(0, 1fr))`})},[(r(!0),x(h,null,y(e.prop.data,((e,t)=>(r(),x("div",{class:"flex flex-col min-h-0 rounded-[20rpx] px-[24rpx] py-[30rpx] bg-white overflow-hidden",key:t,onClick:t=>{return i=e.id,void v.navigateTo({path:"/packages/pages/create/create",query:{id:i}});var i}},[R("div",{class:"flex items-center"},[R("div",{class:"flex-none"},[n(k,{src:d(C)(e.image),width:"80",height:"80","border-radius":"12"},null,8,["src"])]),R("div",{class:"text-lg font-medium ml-[20rpx] line-clamp-2"},c(e.name),1)]),R("div",{class:"flex-1 mt-[18rpx] text-sm text-[#999] line-clamp-3"},c(e.tips),1),R("div",{class:"flex justify-end mt-[24rpx]"},[R("div",{class:"text-muted flex items-center text-base"},[n(w,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA0NJREFUeF7tmtt1gzAMhmGyJpvAJG0ngU2aTkZrDu4xjmTJujikIS9pT7hYn3/JtqS+e/FP/+L2dyeAUwENCEzTdOn7/j151WX7+xa+l2X5Dt/jOH40GM7uFW4ukBgdjWXZtizLZ0sY5gCkhud0WoEwBTBN00cmddasly4KIDxdwwzAPM9fXddhco++HuW9/h/Ushmfx4gdE08IJgAKxt+2wa8Gcz4FFd2GYbhynlFzjRoANuDfyH4dx5FteDrolhBUAJCBms0UpCxrdxAD8DY+KgKBIFZX7h6mAIZhED+v5LcABDOViQYMzb61NLOYEFaJsMr8fTQxJn2OCQBP4wuuYKICEYB5npeUopf0KRVYvLcaACR/i4Fw1u48Fli4gRpAC/lHOAB8tRtUA/CYBc7sx61zFgxPANrtsUQBzQNgqhDrAHwC4Pofth5bRGLuGLZkS7oheu0YYLECVbuAx1JUoYBdxulRAPJ9uVqGXADAEqxOl1UrIAw2j8St4oD1ChBskQLI83/uKshdz0L+YgBANA7FDbMkRe4SnucPkQI2N2imAsDl1L4fIYsBQCr4TYubu8JhU2Lb4QQqhJhBOHRStHBEXX/SBCmsvKZ5JrbUil0gO6CAVaHaARN1RTNlqXOCEE2iLhgqRKEEvhZKYsEkK429YaW1WpDcjZV4GcRe8NLF0SQm3KWwa2YkvdZzb6FeBoHNSqzwVjVEUHC8+wTUQdCqIYIDwqNPQAWA6fO7AJgGwW0vkfYIoIEwArIOiGIAVENEbV9AqoAAdo3Q+8aq9BKzJbEaALVWawyHDkElEBZBsgoAsv+PO7+mp8HEJVTvZQMoGG8mRyoQenSjsAHkR1Ltfp8ytnazJa1PsgC07geg4Fh2p5AAjmZ8suO8O4pLlkgSgGc2hppp6ndkcqqCYhGAZy6OMo77OxCbqoIyCgBJfJrl4rgGUtdpE7QlAOZVGMoY6e+aLjIUwJF9HzmJirrIQADP4Ps5BGnnCgjAowYnlTf3PmnpHAPw0C4QrtGACnbj5hyW7gA8svwtNTzeJ3EDEoBkd6U1RHq/xHX/FQBJHLgDIJGRdMas7zMBYD2ooz+PPAwd3QDt+E4AWoLPfv8PJZzDXwAweoMAAAAASUVORK5CYII=",class:"w-[34rpx] h-[34rpx]"}),n(H,{class:"ml-[4rpx]"},{default:l((()=>[u(c(e.user_count),1)])),_:2},1024)]),R("div",{class:"text-muted flex items-center text-base ml-[50rpx]",onClick:A((i=>(async(e,t)=>{if(_.isLogin)try{await D({id:e.id}),g.prop.data[t].collect_count+=1,g.prop.data[t].is_collect=!e.is_collect}catch(i){console.log("收藏失败",i)}else v.navigateTo("/pages/login/login")})(e,t)),["stop"])},[e.is_collect?(r(),x(h,{key:1},[p("                        <image"),p('                            v-if="!item.is_collect"'),p('                            src="/static/images/icon/icon_star.png"'),p('                            class="w-[34rpx] h-[34rpx]"'),p("                        ></image>"),n(B,{name:"star-fill",size:"32",color:"#ffcd2c"})],2112)):(r(),s(B,{key:0,name:"star",size:"32",color:"#9a9a9a"})),n(H,{class:"ml-[4rpx]"},{default:l((()=>[u(c(e.collect_count),1)])),_:2},1024)],8,["onClick"])])],8,["onClick"])))),128))],4)])):p("v-if",!0)}}}),M=N(e({__name:"index",setup(e){const o=t(),m=b([]),v=b(0),A=b(0);return S((e=>{v.value=e.scrollTop;const t=j(100);A.value=e.scrollTop/t>.8?.8:e.scrollTop/t})),(async()=>{try{const e=await E({id:7});m.value=JSON.parse(e.data)}catch(e){console.error(e)}})(),(e,t)=>{const v=i(a("page-meta"),I),_=g,C=f,b=i(a("tabbar"),J);return r(),x(h,null,[n(v,{"page-style":e.$theme.pageStyle},null,8,["page-style"]),n(_,null,{default:l((()=>[(r(!0),x(h,null,y(m.value,((e,t)=>(r(),s(_,{key:e.id},{default:l((()=>["index-title"===e.name?(r(),s(z,{key:0,prop:e.content,isHidden:!e.isHidden,percent:A.value},null,8,["prop","isHidden","percent"])):p("v-if",!0),"index-banner"===e.name?(r(),s(F,{key:1,prop:e.content,isHidden:!e.isHidden},null,8,["prop","isHidden"])):p("v-if",!0),"index-ad"===e.name?(r(),s(G,{key:2,prop:e.content,isHidden:!e.isHidden},null,8,["prop","isHidden"])):p("v-if",!0),"index-menu"===e.name?(r(),s(T,{key:3,prop:e.content,isHidden:!e.isHidden},null,8,["prop","isHidden"])):p("v-if",!0),"index-hot"===e.name?(r(),s(q,{key:4,prop:e.content,isHidden:!e.isHidden},null,8,["prop","isHidden"])):p("v-if",!0)])),_:2},1024)))),128)),n(_,{class:"text-center py-4"},{default:l((()=>[(r(!0),x(h,null,y(d(o).getCopyrightConfig,(e=>(r(),x("a",{class:"flex items-center justify-center mx-1 text-xs text-[#495770]",href:e.value,target:"_blank",key:e.key},[e.icon?(r(),x("img",{key:0,src:e.icon,alt:"备案图标",style:{width:"40rpx",height:"40rpx"}},null,8,["src"])):p("v-if",!0),n(C,{class:"mx-1"},{default:l((()=>[u(c(e.key),1)])),_:2},1024)],8,["href"])))),128))])),_:1}),n(b)])),_:1})],64)}}}),[["__scopeId","data-v-fc731eda"]]);export{M as default};