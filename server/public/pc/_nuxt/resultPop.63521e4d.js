import{f as N,E as C}from"./entry.df16adda.js";import{E as T,a as S}from"./el-checkbox.033475fe.js";import{_ as I}from"./index.34adc8c7.js";import"./el-tag.7a8069da.js";/* empty css                 */import"./el-tooltip.4ed993c7.js";import"./el-popper.89e34564.js";import"./el-scrollbar.f4d658ff.js";import{l as L}from"./lodash.9425e068.js";import{_ as z}from"./adjustDataPop.vue.72404620.js";import{b as K,c as Q,f as U}from"./split.f6195c48.js";import{k as W,a as i,s as g,aq as Y,I as p,$ as r,a0 as a,K as E,W as f,u as m,ae as v,a2 as n,e as A,Y as F,n as G}from"./swiper-vue.397ea2eb.js";import{_ as H}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.6edb46f6.js";import"./isEqual.b93d80e7.js";import"./_getTag.af7a9d71.js";import"./debounce.2369182b.js";import"./el-dialog.64289190.js";import"./use-dialog.825901d5.js";import"./refs.2a024717.js";import"./el-form-item.f85b8636.js";import"./_baseClone.000a3762.js";/* empty css                */const J={class:"mt-4 h-[500px] pr-[10px]"},M=W({__name:"resultPop",emits:["close"],setup(O,{expose:R,emit:X}){const w=i(!1),c=g(),s=i({question:"",answer:""}),h=g(),k=i(-1),x=i([]),d=async()=>{x.value=await U({qa_id:k.value})},b=async e=>{await N.confirm("确定要删除？"),await K({ids:e}),d()},q=async e=>{var t;w.value=!0,await G(),s.value=L.cloneDeep(e),(t=c.value)==null||t.open()},P=async()=>{var e;await Q(s.value),(e=c.value)==null||e.close(),d()},u=i([]),V=e=>{u.value=e.map(t=>t.id)};return R({open:e=>{k.value=e.id,h.value.open(),d()}}),(e,t)=>{const $=C,l=T,y=C,D=S,B=I,_=Y("perms");return p(),r(B,{ref_key:"popRef",ref:h,title:"拆分结果",width:"1000px",onClose:t[2]||(t[2]=o=>e.$emit("close"))},{default:a(()=>[E("div",null,[f((p(),r($,{disabled:m(u).length<=0,onClick:t[0]||(t[0]=o=>b(m(u)))},{default:a(()=>[v(" 批量删除 ")]),_:1},8,["disabled"])),[[_,["know.qa/delete"]]])]),E("div",J,[n(D,{size:"large",data:m(x),height:"500px",onSelectionChange:V},{default:a(()=>[n(l,{type:"selection",width:"55"}),n(l,{label:"问题",prop:"question","min-width":"250"}),n(l,{label:"回答",prop:"answer","min-width":"250"}),n(l,{label:"拆分时间",prop:"create_time","min-width":"150"}),n(l,{label:"操作","min-width":"115",fixed:"right"},{default:a(({row:o})=>[f((p(),r(y,{link:"",type:"primary",onClick:j=>q(o)},{default:a(()=>[v(" 修正 ")]),_:2},1032,["onClick"])),[[_,["know.qa/adjust"]]]),f((p(),r(y,{type:"danger",link:"",onClick:j=>b([o.id])},{default:a(()=>[v(" 删除 ")]),_:2},1032,["onClick"])),[[_,["know.qa/delete"]]])]),_:1})]),_:1},8,["data"])]),m(w)?(p(),r(z,{key:0,ref_key:"adjustPopRef",ref:c,modelValue:m(s),"onUpdate:modelValue":t[1]||(t[1]=o=>A(s)?s.value=o:null),title:"编辑内容",onConfirm:P},null,8,["modelValue"])):F("",!0)]),_:1},512)}}});const Ce=H(M,[["__scopeId","data-v-543ce268"]]);export{Ce as default};