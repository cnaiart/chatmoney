import{E as q}from"./el-page-header.84cac8c8.js";import{E as A,v as J,f as z}from"./entry.df16adda.js";import{E as H,a as K}from"./el-checkbox.033475fe.js";import{_ as M}from"./index.vue.403e5f16.js";import{E as W,a as Z,b as G}from"./el-dropdown.becf1ea9.js";import{u as O,_ as Q}from"./index.vue.1307e7a7.js";import"./el-tag.7a8069da.js";import"./el-popper.89e34564.js";import"./el-scrollbar.f4d658ff.js";/* empty css                 */import"./el-tooltip.4ed993c7.js";import"./useCopy.20b5e5cf.js";import{_ as X}from"./create-share.vue.74cda496.js";import{_ as Y}from"./js-embedding.vue.ce06d1d2.js";import{_ as ee}from"./usage-settings.vue.764b0d95.js";import{s as ae,t as te,u as oe,q as ne}from"./robot.5da26683.js";import{k as se,s as h,a as le,A as ie,r as re,b as me,I as v,J as ce,a2 as a,K as u,a0 as o,ae as p,u as l,W as pe,$ as de,e as _e,Z as fe}from"./swiper-vue.397ea2eb.js";const ue={class:"mt-4"},ge={class:"mt-4"},he={class:"flex items-center"},we={class:"flex justify-end mt-4"},Ne=se({__name:"js",props:{appId:{}},emits:["back"],setup(C,{emit:E}){const w=C,R=E,g=h(),y=h(),d=h(),k=le({}),{appId:D}=ie(w),_=re({robot_id:D,type:2}),{pager:i,getLists:n}=O({fetchFun:oe,params:_});n();const $=async t=>{await z.confirm("确定删除？"),await ne({id:t,type:_.type}),n()},x=(t,e)=>{switch(t){case"delete":$(e.id);break;case"usage":V(e)}},S=async t=>{var e;await ae({...t,..._}),(e=g.value)==null||e.close(),n()},B=t=>{k.value=t},I=t=>{var e;B(t),(e=y.value)==null||e.open()},V=t=>{var e,f;(e=d.value)==null||e.open(),(f=d.value)==null||f.setFormData(t)},j=async t=>{var e;await te({...t,..._}),(e=d.value)==null||e.close(),n()};return me(()=>w.appId,()=>{n()}),(t,e)=>{const f=q,r=A,m=H,F=M,b=W,L=Z,N=G,P=K,T=Q,U=J;return v(),ce(fe,null,[a(f,{content:"发布JS嵌入",onBack:e[0]||(e[0]=s=>R("back"))}),u("div",ue,[a(r,{type:"primary",onClick:e[1]||(e[1]=s=>{var c;return(c=l(g))==null?void 0:c.open()})},{default:o(()=>[p(" 创建链接 ")]),_:1})]),u("div",ge,[pe((v(),de(P,{data:l(i).lists,size:"large"},{default:o(()=>[a(m,{label:"apikey",prop:"apikey","min-width":"200"}),a(m,{label:"分享名称",prop:"name","min-width":"180","show-tooltip-when-overflow":""}),a(m,{label:"访问密码",prop:"pwd","min-width":"120"}),a(m,{label:"最后使用时间",prop:"use_time","min-width":"180"}),a(m,{label:"操作","min-width":"150",fixed:"right"},{default:o(({row:s})=>[u("div",he,[a(r,{type:"primary",link:"",onClick:c=>I(s)},{default:o(()=>[p(" 查看代码 ")]),_:2},1032,["onClick"]),a(N,{class:"ml-[10px]",onCommand:c=>x(c,s)},{dropdown:o(()=>[a(L,null,{default:o(()=>[a(b,{command:"usage"},{default:o(()=>[a(r,{type:"primary",link:""},{default:o(()=>[p(" 用量设置 ")]),_:1})]),_:1}),a(b,{command:"delete"},{default:o(()=>[a(r,{type:"danger",link:""},{default:o(()=>[p(" 删除 ")]),_:1})]),_:1})]),_:1})]),default:o(()=>[a(r,{type:"primary",link:""},{default:o(()=>[p(" 更多 "),a(F,{name:"el-icon-ArrowDown"})]),_:1})]),_:2},1032,["onCommand"])])]),_:1})]),_:1},8,["data"])),[[U,l(i).loading]]),u("div",we,[a(T,{modelValue:l(i),"onUpdate:modelValue":e[2]||(e[2]=s=>_e(i)?i.value=s:null),onChange:l(n)},null,8,["modelValue","onChange"])])]),a(X,{ref_key:"createShareRef",ref:g,onConfirm:S},null,512),a(Y,{ref_key:"jsEmbeddingRef",ref:y,"channel-id":l(k).apikey},null,8,["channel-id"]),a(ee,{ref_key:"usageSettingsRef",ref:d,onConfirm:j},null,512)],64)}}});export{Ne as _};