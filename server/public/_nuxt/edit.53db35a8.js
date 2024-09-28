import{_ as H}from"./index.17bef7f3.js";import{f as J,E as R,d as B,h as K,e as O,i as X}from"./entry.dfbfd4fd.js";import{E as Y,a as Z}from"./index.883ed08b.js";import{_ as G}from"./index.b46f9587.js";import{_ as Q}from"./index.a373f374.js";import{_ as S}from"./index.vue.7f39d825.js";import{u as z}from"./useAudioPlay.fe45c428.js";import{k as I,H as d,I as b,J as e,Z as W,S as A,u as t,U as C,Y as $,R as ee,T as te,a as P,l as L,X as a,ai as le,V as s,a7 as g,aj as oe,aa as ae,s as ie,f as se,e as ne}from"./swiper-vue.2eb6bd20.js";import{_ as re}from"./_plugin-vue_export-helper.c27b6911.js";import{P as de}from"./index.e94bc8a7.js";import{g as ue,p as me,a as pe,b as _e}from"./digital.2bbc06b8.js";import{E as ce}from"./index.17567b0d.js";import"./el-form-item.4ed993c7.js";/* empty css                *//* empty css                     */import{u as ve}from"./asyncData.eaddccf2.js";import"./index.vue.c62cb732.js";import"./index.8ad94f19.js";import"./isUndefined.aa0326a0.js";import"./el-tooltip.4ed993c7.js";/* empty css                  */import"./el-menu.6e4c94a7.js";import"./index.93ec1a3c.js";import"./index.071e9281.js";import"./castArray.c741e965.js";import"./_baseClone.20563df6.js";import"./_getTag.83294aff.js";import"./el-upload.5844c619.js";import"./el-progress.8f5e9f30.js";import"./cloneDeep.4e82bacf.js";import"./isEqual.0df0ab2c.js";import"./index.f647f618.js";import"./___vite-browser-external.5512611b.js";import"./index.9c8f8f3a.js";import"./index.6c069afb.js";import"./use-dialog.7d399731.js";import"./refs.cabac943.js";/* empty css                  */const fe={class:"flex-1 min-w-0 line-clamp-1"},ye=I({__name:"item",props:{isActive:{type:Boolean},value:{},url:{}},setup(U){const{play:m,pause:V,audioPlaying:p}=z();return(r,_)=>{const f=S;return d(),b("div",{class:te(["dub-item",{"dub-item--is-active":r.isActive}])},[e("div",fe,W(r.value),1),r.url?(d(),b(A,{key:0},[t(p)?(d(),C(f,{key:0,name:"el-icon-VideoPause",size:18,onClick:$(t(V),["stop"])},null,8,["onClick"])):(d(),C(f,{key:1,name:"el-icon-VideoPlay",size:18,onClick:_[0]||(_[0]=$(k=>t(m)(r.url),["stop"]))}))],64)):ee("",!0)],2)}}});const xe=re(ye,[["__scopeId","data-v-1593ed02"]]),ge={class:"inline-flex items-center"},Ve={class:"text-tx-primary flex cursor-pointer"},be={class:"ml-[20px]"},ke={class:"flex flex-wrap mx-[-10px]"},we={class:"w-full"},Ce=I({__name:"picker",props:{modelValue:{}},emits:["update:modelValue"],setup(U,{emit:m}){const V=U,p=P(""),r=J(V,"modelValue",m),{play:_,pause:f,audioPlaying:k}=z(),y=P({}),q=async()=>{y.value=await ue()},o=L(()=>y.value[r.value]||{});return q(),(D,c)=>{const x=S,M=R,v=B,l=xe,h=de;return d(),b("div",ge,[a(M,{"model-value":t(o).name||t(r),readonly:"",placeholder:"请选择配音",clearable:""},le({_:2},[t(o).example?{name:"suffix",fn:s(()=>[e("div",Ve,[t(k)?(d(),C(x,{key:0,name:"el-icon-VideoPause",size:18,onClick:$(t(f),["stop"])},null,8,["onClick"])):(d(),C(x,{key:1,name:"el-icon-VideoPlay",size:18,onClick:c[0]||(c[0]=$(u=>t(_)(t(o).example),["stop"]))}))])]),key:"0"}:void 0]),1032,["model-value"]),a(h,{title:"选择配音",width:"500px",onOpen:c[1]||(c[1]=u=>p.value=t(r)),onConfirm:c[2]||(c[2]=u=>r.value=t(p))},{trigger:s(()=>[e("div",be,[a(v,{type:"primary",plain:""},{default:s(()=>[g(" 选择配音 ")]),_:1})])]),default:s(()=>[e("div",ke,[(d(!0),b(A,null,oe(t(y),(u,n)=>(d(),b("div",{class:"w-[50%] mb-[15px] px-[10px]",key:n},[e("div",we,[a(l,{"is-active":n==t(p),value:u.name,url:u.example,onClick:E=>p.value=n},null,8,["is-active","value","url","onClick"])])]))),128))])]),_:1})])}}}),$e={class:"h-full flex"},Pe={class:"h-full flex-1 min-w-0 py-[16px] pr-[16px]"},Ue={class:"h-full flex flex-col bg-body rounded-2xl"},qe={class:"flex-1 min-h-0"},De={class:"lg:flex"},Me={class:"flex-1 min-w-0"},he={class:"w-[420px]"},Ee=e("div",{class:"form-tips"},"建议尺寸：50*50px",-1),Ie=e("div",{class:"form-tips"},"建议尺寸：280px×187px",-1),Re={class:"form-tips"},Be={class:"form-tips"},Se={class:"form-tips"},ze={class:"form-tips"},Ae={class:"flex flex-1"},Le={class:"w-[420px]"},Ne=e("div",{class:"form-tips"}," 例如：选择5s，每隔5秒就会有一个回复内容，内容是在闲时回复内容的文案 ",-1),je={class:"w-[420px]"},Te=e("div",{class:"form-tips"}," 根据自定义闲时时间段设置后形象回复的内容 ",-1),Fe={class:"flex p-4 items-center justify-center"},qt=I({__name:"edit",async setup(U){let m,V;const p=K(),r=O(),_=L(()=>r.query.id),f=P(""),k=async()=>{if(_.value){const v=await _e({id:_.value});return f.value=v.name,v}else return Promise.reject()},y=P("edit"),q=[{name:"形象设置",icon:"el-icon-Setting",key:"edit"}],{data:o}=([m,V]=ae(()=>ve(()=>k(),{default(){return{name:"",avatar:"",image:"",wide_stay_video:"",wide_talk_video:"",vertical_stay_video:"",vertical_talk_video:"",channel:"",dubbing:"",idle_time:10,idle_reply:""}},lazy:!0},"$bL2ljimD45")),m=await m,V(),m),D=ie(),c=se({name:[{required:!0,message:"请输入形象名称"}],avatar:[{required:!0,type:"string",message:"请选择形象头像"}],image:[{required:!0,type:"string",message:"请选择形象封面"}],wide_stay_video:[{required:!0,type:"string",message:"请选择宽屏人物待机视频"}],wide_talk_video:[{required:!0,type:"string",message:"请选择宽屏人物说话视频"}],vertical_stay_video:[{required:!0,type:"string",message:"请选择竖屏人物待机视频"}],vertical_talk_video:[{required:!0,type:"string",message:"请选择竖屏人物说话视频"}],dubbing:[{required:!0,message:"请选择配音角色"}],idle_time:[{required:!0,message:"请输入自定义闲时时间"}],idle_reply:[{required:!0,type:"string",message:"请输入闲时回复内容"}]}),x=(v,l)=>{o.value[v]=X+"/resource/digital/"+l},M=async()=>{var l;await((l=D.value)==null?void 0:l.validate()),o.value.idle_time=Number(o.value.idle_time),await(_.value?me(o.value):pe(o.value)),setTimeout(()=>{p.replace({path:"/application/layout/digital"})},1e3)};return(v,l)=>{const h=H,u=R,n=Y,E=G,w=Q,N=Ce,j=Z,T=ce,F=B;return d(),b("div",$e,[a(h,{modelValue:t(y),"onUpdate:modelValue":l[0]||(l[0]=i=>ne(y)?y.value=i:null),title:t(f),"back-path":"/application/layout/digital","menu-list":q},null,8,["modelValue","title"]),e("div",Pe,[e("div",Ue,[e("div",qe,[a(T,null,{default:s(()=>[e("div",De,[e("div",Me,[a(j,{class:"p-4",ref_key:"formRef",ref:D,model:t(o),"label-width":"140px",rules:t(c)},{default:s(()=>[a(n,{label:"形象名称",prop:"name"},{default:s(()=>[e("div",he,[a(u,{modelValue:t(o).name,"onUpdate:modelValue":l[1]||(l[1]=i=>t(o).name=i),placeholder:"请输入形象名称",clearable:""},null,8,["modelValue"])])]),_:1}),a(n,{label:"形象头像",prop:"avatar"},{default:s(()=>[e("div",null,[e("div",null,[a(E,{modelValue:t(o).avatar,"onUpdate:modelValue":l[2]||(l[2]=i=>t(o).avatar=i)},null,8,["modelValue"])]),Ee])]),_:1}),a(n,{label:"形象封面",prop:"image"},{default:s(()=>[e("div",null,[e("div",null,[a(E,{modelValue:t(o).image,"onUpdate:modelValue":l[3]||(l[3]=i=>t(o).image=i)},null,8,["modelValue"])]),Ie])]),_:1}),a(n,{label:"宽屏人物待机视频",prop:"wide_stay_video"},{default:s(()=>[e("div",null,[e("div",null,[a(w,{modelValue:t(o).wide_stay_video,"onUpdate:modelValue":l[4]||(l[4]=i=>t(o).wide_stay_video=i)},null,8,["modelValue"])]),e("div",Re,[g(" 格式为MP4，大小不能超过20M "),e("span",{class:"text-primary cursor-pointer",onClick:l[5]||(l[5]=i=>x("wide_stay_video","wide_stay_video.mp4"))}," 使用默认视频 ")])])]),_:1}),a(n,{label:"宽屏人物说话视频",prop:"wide_talk_video"},{default:s(()=>[e("div",null,[e("div",null,[a(w,{modelValue:t(o).wide_talk_video,"onUpdate:modelValue":l[6]||(l[6]=i=>t(o).wide_talk_video=i)},null,8,["modelValue"])]),e("div",Be,[g(" 格式为MP4，大小不能超过20M "),e("span",{class:"text-primary cursor-pointer",onClick:l[7]||(l[7]=i=>x("wide_talk_video","wide_talk_video.mp4"))}," 使用默认视频 ")])])]),_:1}),a(n,{label:"竖屏人物待机视频",prop:"vertical_stay_video"},{default:s(()=>[e("div",null,[e("div",null,[a(w,{modelValue:t(o).vertical_stay_video,"onUpdate:modelValue":l[8]||(l[8]=i=>t(o).vertical_stay_video=i)},null,8,["modelValue"])]),e("div",Se,[g(" 格式为MP4，大小不能超过20M "),e("span",{class:"text-primary cursor-pointer",onClick:l[9]||(l[9]=i=>x("vertical_stay_video","vertical_stay_video.mp4"))}," 使用默认视频 ")])])]),_:1}),a(n,{label:"竖屏人物说话视频",prop:"vertical_talk_video"},{default:s(()=>[e("div",null,[e("div",null,[a(w,{modelValue:t(o).vertical_talk_video,"onUpdate:modelValue":l[10]||(l[10]=i=>t(o).vertical_talk_video=i)},null,8,["modelValue"])]),e("div",ze,[g(" 格式为MP4，大小不能超过20M "),e("span",{class:"text-primary cursor-pointer",onClick:l[11]||(l[11]=i=>x("vertical_talk_video","vertical_talk_video.mp4"))}," 使用默认视频 ")])])]),_:1}),a(n,{label:"配音角色",prop:"dubbing"},{default:s(()=>[e("div",Ae,[a(N,{modelValue:t(o).dubbing,"onUpdate:modelValue":l[12]||(l[12]=i=>t(o).dubbing=i)},null,8,["modelValue"])])]),_:1}),a(n,{label:"自定义闲时时间",prop:"idle_time"},{default:s(()=>[e("div",Le,[a(u,{modelValue:t(o).idle_time,"onUpdate:modelValue":l[13]||(l[13]=i=>t(o).idle_time=i),placeholder:"请输入自定义闲时时间",type:"number"},{append:s(()=>[g("秒")]),_:1},8,["modelValue"]),Ne])]),_:1}),a(n,{label:"闲时回复内容",prop:"idle_reply"},{default:s(()=>[e("div",je,[a(u,{modelValue:t(o).idle_reply,"onUpdate:modelValue":l[14]||(l[14]=i=>t(o).idle_reply=i),placeholder:"请输入闲时回复内容",type:"textarea",rows:4,clearable:""},null,8,["modelValue"]),Te])]),_:1})]),_:1},8,["model","rules"])])])]),_:1})]),e("div",Fe,[a(F,{type:"primary",onClick:M},{default:s(()=>[g("保存")]),_:1})])])])])}}});export{qt as default};