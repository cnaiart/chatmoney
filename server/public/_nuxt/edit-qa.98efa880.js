import{f as C,E as z,d as F}from"./entry.dfbfd4fd.js";import{E as I,a as N}from"./index.883ed08b.js";import{_ as P}from"./index.vue.7f39d825.js";import{_ as D}from"./index.6cda5009.js";import"./el-form-item.4ed993c7.js";/* empty css                */import{P as H}from"./index.e94bc8a7.js";import{k as J,s as V,H as m,U as w,V as a,X as s,u as o,R as f,I as x,S as v,J as p,a7 as M}from"./swiper-vue.2eb6bd20.js";import"./castArray.c741e965.js";import"./_baseClone.20563df6.js";import"./_getTag.83294aff.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./el-upload.5844c619.js";import"./el-progress.8f5e9f30.js";import"./cloneDeep.4e82bacf.js";import"./isEqual.0df0ab2c.js";import"./index.6c069afb.js";import"./use-dialog.7d399731.js";import"./isUndefined.aa0326a0.js";import"./refs.cabac943.js";/* empty css                  */const S={class:"flex-1"},T=p("div",{class:"form-tips"},"最多支持上传 9 张图",-1),X={class:"flex-1"},$={class:"max-w-[600px]"},j=p("div",{class:"el-upload__tip"}," 支持上传PDF、docx、excel、等文件格式 ",-1),ue=J({__name:"edit-qa",props:{modelValue:{},title:{},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","confirm"],setup(b,{expose:h,emit:_}){const q=b,c=V(),d=V(),e=C(q,"modelValue",_),E={question:[{validator(l,t,i,r,u){t?i():e.value.type===1?i("请输入内容"):e.value.type===2&&i("请输入问题")}}],answer:[{validator(l,t,i,r,u){t?i():i("请输入答案")}}]},R=()=>{var l;(l=d.value)==null||l.open()},U=()=>{var l;(l=d.value)==null||l.close()},k=async()=>{var l;await((l=c.value)==null?void 0:l.validate()),_("confirm")};return h({open:R,close:U}),(l,t)=>{const i=z,r=I,u=P,y=D,B=F,g=N;return m(),w(H,{ref_key:"popupRef",ref:d,title:l.title,width:"800px","destroy-on-close":!0,async:"",onConfirm:k},{default:a(()=>[s(g,{ref_key:"formRef",ref:c,model:o(e),rules:E,"label-width":"100px",disabled:l.disabled},{default:a(()=>[o(e).type===1?(m(),w(r,{key:0,label:"内容",prop:"question"},{default:a(()=>[s(i,{modelValue:o(e).question,"onUpdate:modelValue":t[0]||(t[0]=n=>o(e).question=n),placeholder:"请输入内容",type:"textarea",resize:"none",rows:20,clearable:""},null,8,["modelValue"])]),_:1})):f("",!0),o(e).type===2?(m(),x(v,{key:1},[s(r,{label:"提问问题",prop:"question"},{default:a(()=>[s(i,{modelValue:o(e).question,"onUpdate:modelValue":t[1]||(t[1]=n=>o(e).question=n),placeholder:"请输入问题",type:"textarea",resize:"none",rows:6,maxlength:"600","show-word-limit":"",clearable:""},null,8,["modelValue"])]),_:1}),s(r,{label:"问题答案",prop:"answer"},{default:a(()=>[s(i,{modelValue:o(e).answer,"onUpdate:modelValue":t[2]||(t[2]=n=>o(e).answer=n),placeholder:"请输入答案",type:"textarea",resize:"none",rows:20,clearable:""},null,8,["modelValue"])]),_:1}),o(e).type===2&&o(e).method===1?(m(),x(v,{key:0},[s(r,{label:"上传图片"},{default:a(()=>[p("div",S,[p("div",null,[s(y,{files:o(e).images,"onUpdate:files":t[3]||(t[3]=n=>o(e).images=n),type:"image","list-type":"picture-card",limit:9,multiple:"","show-file-list":""},{default:a(()=>[s(u,{name:"el-icon-Plus",size:20})]),_:1},8,["files"])]),T])]),_:1}),s(r,{label:"上传附件"},{default:a(()=>[p("div",X,[p("div",$,[s(y,{files:o(e).files,"onUpdate:files":t[4]||(t[4]=n=>o(e).files=n),type:"file","show-file-list":""},{tip:a(()=>[j]),default:a(()=>[s(B,null,{default:a(()=>[M("上传附件")]),_:1})]),_:1},8,["files"])])])]),_:1})],64)):f("",!0)],64)):f("",!0)]),_:1},8,["model","disabled"])]),_:1},8,["title"])}}});export{ue as default};