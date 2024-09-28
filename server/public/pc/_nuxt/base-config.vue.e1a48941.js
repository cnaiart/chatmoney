import{_ as U}from"./index.a1e489de.js";import{E as C}from"./el-form-item.f85b8636.js";import{i as B,g as S,E as D}from"./entry.df16adda.js";import{a as I,b as N}from"./el-select.b349f79d.js";import{E as $,a as q}from"./el-radio-group.1cf97d3f.js";import"./el-tag.7a8069da.js";import"./el-scrollbar.f4d658ff.js";import"./el-popper.89e34564.js";/* empty css                 */import{u as K}from"./useDictOptions.e4ac7936.js";import{r as z}from"./my_database.5da0ead6.js";import{_ as F}from"./addPop.vue.823ab49e.js";import{k as L,s as O,a as P,I as r,J as w,a2 as e,a0 as a,K as o,u as t,Z as T,ap as G,ae as i,$ as x,Y as J,n as M}from"./swiper-vue.397ea2eb.js";const Y={class:"pt-[10px]"},Z=o("div",{class:"form-tips"},"建议尺寸：240*240px",-1),j={class:"w-80"},A={class:"w-80"},H={class:"flex"},Q={class:"w-80"},W={class:"ml-2 flex items-center"},X=o("span",{class:"px-1"},"|",-1),ee=o("div",{class:"form-tips"},"需选择同一种训练模型的知识库",-1),oe={class:"flex-1 min-w-0"},le={class:"flex"},te={class:"w-80"},ae=o("div",{class:"form-tips"}," 引导应用的聊天方向，该内容会被固定在上下文的开头。 ",-1),se=o("div",{class:"form-tips"},"不设置的话，对话图标默认拿机器人封面",-1),ne=o("div",{class:"form-tips"},"在前台显示对话上下文，默认显示",-1),de=o("div",{class:"form-tips"},"在前台显示引用内容，默认显示",-1),ge=L({__name:"base-config",props:{modelValue:{}},emits:["update:modelValue"],setup(k,{emit:h}){const _=O(),u=P(!1),s=B(k,"modelValue",h),{optionsData:g,refresh:c}=K({knowledge:{api:z,params:{page_type:0},transformData(f){return f.lists||[]}}}),y=async()=>{u.value=!0,await M(),_.value.open()};return(f,n)=>{const V=U,d=C,p=S,E=N,R=I,b=D,m=$,v=q;return r(),w("div",Y,[e(d,{label:"机器人图标",prop:"image"},{default:a(()=>[o("div",null,[o("div",null,[e(V,{modelValue:t(s).image,"onUpdate:modelValue":n[0]||(n[0]=l=>t(s).image=l)},null,8,["modelValue"])]),Z])]),_:1}),e(d,{label:"机器人名称",prop:"name"},{default:a(()=>[o("div",j,[e(p,{modelValue:t(s).name,"onUpdate:modelValue":n[1]||(n[1]=l=>t(s).name=l),placeholder:"请输入机器人名称",clearable:""},null,8,["modelValue"])])]),_:1}),e(d,{label:"简介",prop:"intro"},{default:a(()=>[o("div",A,[e(p,{modelValue:t(s).intro,"onUpdate:modelValue":n[2]||(n[2]=l=>t(s).intro=l),placeholder:"请简单描述下给你的机器人",type:"textarea",autosize:{minRows:3,maxRows:6},maxlength:200,"show-word-limit":"",clearable:""},null,8,["modelValue"])])]),_:1}),e(d,{label:"关联知识库",prop:"kb_ids"},{default:a(()=>[o("div",null,[o("div",H,[o("div",Q,[e(R,{modelValue:t(s).kb_ids,"onUpdate:modelValue":n[3]||(n[3]=l=>t(s).kb_ids=l),placeholder:"请选择关联知识库",clearable:"",multiple:""},{default:a(()=>[(r(!0),w(T,null,G(t(g).knowledge,l=>(r(),x(E,{key:l.id,label:`${l.name} (${l.embedding_model})`,value:String(l.id)},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),o("div",W,[e(b,{type:"primary",link:"",onClick:y},{default:a(()=>[i(" 新增知识库 ")]),_:1}),X,e(b,{type:"primary",link:"",onClick:t(c)},{default:a(()=>[i(" 刷新 ")]),_:1},8,["onClick"])])]),ee])]),_:1}),e(d,{label:"角色设定",prop:"roles_prompt"},{default:a(()=>[o("div",oe,[o("div",le,[o("div",te,[e(p,{modelValue:t(s).roles_prompt,"onUpdate:modelValue":n[4]||(n[4]=l=>t(s).roles_prompt=l),placeholder:"请输入角色设定",type:"textarea",autosize:{minRows:4,maxRows:6},clearable:""},null,8,["modelValue"])])]),ae])]),_:1}),e(d,{label:"对话图标"},{default:a(()=>[o("div",null,[e(V,{modelValue:t(s).icons,"onUpdate:modelValue":n[5]||(n[5]=l=>t(s).icons=l),"exclude-domain":!1,"can-close":!0},null,8,["modelValue"]),se])]),_:1}),e(d,{label:"对话上下文",prop:"is_show_context"},{default:a(()=>[o("div",null,[e(v,{modelValue:t(s).is_show_context,"onUpdate:modelValue":n[6]||(n[6]=l=>t(s).is_show_context=l)},{default:a(()=>[e(m,{label:1},{default:a(()=>[i(" 显示 ")]),_:1}),e(m,{label:0},{default:a(()=>[i(" 关闭 ")]),_:1})]),_:1},8,["modelValue"]),ne])]),_:1}),e(d,{label:"引用内容",prop:"is_show_quote"},{default:a(()=>[o("div",null,[e(v,{modelValue:t(s).is_show_quote,"onUpdate:modelValue":n[7]||(n[7]=l=>t(s).is_show_quote=l)},{default:a(()=>[e(m,{label:1},{default:a(()=>[i(" 显示 ")]),_:1}),e(m,{label:0},{default:a(()=>[i(" 关闭 ")]),_:1})]),_:1},8,["modelValue"]),de])]),_:1}),t(u)?(r(),x(F,{key:0,ref_key:"addkbPopRef",ref:_,onSuccess:t(c)},null,8,["onSuccess"])):J("",!0)])}}});export{ge as _};