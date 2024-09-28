import{_ as y}from"./index.vue.403e5f16.js";import{E as U}from"./el-image-viewer.ad15677e.js";import{E as q,a as z,b as J}from"./el-dropdown.becf1ea9.js";import{u as Y,_ as Z}from"./index.vue.1307e7a7.js";import{E as G}from"./el-scrollbar.f4d658ff.js";import{c as H,b as O,d as W,f as x}from"./entry.df16adda.js";import"./el-popper.89e34564.js";import{k as X,a as w,s as ee,r as oe,E as te,I as i,J as p,K as o,a2 as e,a0 as l,u as a,Z as S,ap as se,Y as g,e as ne,$ as ae,n as C,a4 as b,ae as D,a3 as re,an as ie,ao as le}from"./swiper-vue.397ea2eb.js";import{_ as ce}from"./addPop.vue.823ab49e.js";import{_ as pe}from"./tologin.vue.ee5b8f69.js";import{r as me,c as de}from"./my_database.5da0ead6.js";import{u as _e}from"./recharge.98a08a81.js";import{_ as ue}from"./_plugin-vue_export-helper.c27b6911.js";import"./throttle.92cc074e.js";import"./debounce.2369182b.js";import"./position.a44f3ead.js";import"./dropdown.16adff52.js";import"./refs.2a024717.js";import"./el-select.b349f79d.js";import"./strings.294b5976.js";import"./isEqual.b93d80e7.js";import"./_getTag.af7a9d71.js";import"./el-tag.7a8069da.js";import"./el-form-item.f85b8636.js";import"./_baseClone.000a3762.js";import"./index.vue.a507811b.js";import"./useQuery.59804ae0.js";import"./index.a1e489de.js";import"./el-upload.397b9616.js";import"./el-progress.598034ee.js";import"./cloneDeep.8862a013.js";import"./client-only.6cb320c5.js";import"./index.34adc8c7.js";import"./el-dialog.64289190.js";import"./use-dialog.825901d5.js";/* empty css                */var v=(t=>(t[t.Document=1]="Document",t[t.QAndA=2]="QAndA",t))(v||{});const E=t=>(ie("data-v-d560c8a7"),t=t(),le(),t),fe={class:"sm:px-[20px] p-[10px] h-full"},xe=E(()=>o("div",{class:"font-medium text-xl mt-2"},"全部知识库",-1)),we={key:0,class:"flex flex-wrap"},ge=E(()=>o("div",{class:"mt-[10px]"},"新增知识库",-1)),ve=["onClick"],he={class:"px-[15px] py-[12px]"},ke={class:"text-[18px] truncate"},ye={class:"flex justify-between items-center mt-[10px]"},Se={class:"text-info"},Ce={class:"line-clamp-2"},be={key:1},De={class:"flex justify-end mt-4"},Ee=X({__name:"index",setup(t){const c=H(),I=_e(),$=O(),A=W();w("");const L=w({type:"0"}),m=w(!1),u=ee();oe([{name:"全部",type:"0"},{name:"问答型",type:v.QAndA},{name:"文档型",type:v.Document}]);const R=async()=>{if(c.userInfo.kb_num<=0){$.getIsShowRecharge?(await x.confirm("知识库数量已用完，请前往充值"),I.toggleShow(!0)):x.msgError("知识库数量已用完。请联系客服增加");return}if(!c.isLogin)return c.toggleShowLogin();m.value=!0,await C(),u.value.open()},V=async r=>{m.value=!0,await C(),u.value.open({id:r})},P=async(r,n)=>{await x.confirm(`确认删除 ${n} 吗？`),await de({id:r}),_()},{pager:d,getLists:_,resetPage:Ie,resetParams:$e}=Y({fetchFun:me,params:L.value}),B=r=>{A.push(`/application/kb/detail?id=${r}`)};return te(()=>{_()}),(r,n)=>{const M=y,N=U,f=y,h=q,j=z,K=J,Q=Z,F=G;return i(),p(S,null,[o("div",fe,[e(F,null,{default:l(()=>[xe,a(c).isLogin?(i(),p("div",we,[o("div",{class:"sm:w-[200px] w-full bg-white rounded overflow-hidden cursor-pointer mr-[20px] flex-none mt-[20px] flex flex-col items-center justify-center min-h-[150px]",onClick:R},[e(M,{name:"el-icon-Plus",size:24}),ge]),(i(!0),p(S,null,se(a(d).lists,(s,T)=>(i(),p("div",{key:T,class:"sm:w-[200px] w-full bg-white rounded overflow-hidden cursor-pointer mr-[20px] flex-none mt-[20px]",onClick:k=>B(s.id)},[e(N,{src:s.image,class:"w-full h-[160px]",fit:"cover"},null,8,["src"]),o("div",he,[o("div",ke,b(s.name),1),o("div",ye,[o("div",Se,[o("div",Ce,b(s.intro||"这个知识库还没介绍呢～"),1)]),e(K,null,{dropdown:l(()=>[e(j,null,{default:l(()=>[e(h,{onClick:k=>V(s.id)},{default:l(()=>[e(f,{name:"el-icon-Edit"}),D("编辑 ")]),_:2},1032,["onClick"]),e(h,{onClick:k=>P(s.id,s.name)},{default:l(()=>[e(f,{name:"el-icon-Delete"}),D("删除 ")]),_:2},1032,["onClick"])]),_:2},1024)]),default:l(()=>[o("div",{class:"cursor-pointer",onClick:n[0]||(n[0]=re(()=>{},["stop"]))},[e(f,{name:"el-icon-More"})])]),_:2},1024)])])],8,ve))),128))])):g("",!0),a(c).isLogin?g("",!0):(i(),p("div",be,[e(pe)])),o("div",De,[e(Q,{modelValue:a(d),"onUpdate:modelValue":n[1]||(n[1]=s=>ne(d)?d.value=s:null),"hide-on-single-page":!0,onChange:a(_)},null,8,["modelValue","onChange"])])]),_:1})]),a(m)?(i(),ae(ce,{key:0,ref_key:"popRef",ref:u,onSuccess:n[2]||(n[2]=()=>{m.value=!1,a(_)()})},null,512)):g("",!0)],64)}}});const _o=ue(Ee,[["__scopeId","data-v-d560c8a7"]]);export{_o as default};