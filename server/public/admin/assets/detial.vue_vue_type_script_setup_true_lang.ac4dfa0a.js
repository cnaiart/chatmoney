import{W as E,D as h,b as w,F as x}from"./element-plus.9458fb52.js";import{P as v}from"./index.9f63869e.js";import{l as g}from"./distribution.36f7022b.js";import{d as C,s as R,r as T,o as r,c as N,T as n,K as u,u as t,J as o,Q as l,R as a,P as _,a as m}from"./@vue.7946e41b.js";const V={class:"edit-popup"},A={style:{"word-break":"break-all"}},P={style:{"word-break":"break-all"}},S=C({__name:"detial",emits:["success","close"],setup(q,{expose:p,emit:y}){const k=y,f=R(),F=async i=>{var d;(d=f.value)==null||d.open(),e.value=await g({id:i})},b=()=>{k("close")},e=T({});return p({open:F}),(i,d)=>{const c=E,s=h,B=w,D=x;return r(),N("div",V,[n(v,{ref_key:"popupRef",ref:f,title:"\u63D0\u73B0\u8BE6\u60C5",async:!0,width:"550px",onClose:b,cancelButtonText:"",confirmButtonText:""},{default:u(()=>[n(D,{ref:"formRef",class:"mb-[-16px]",model:t(e)},{default:u(()=>[n(s,{label:"\u63D0\u73B0\u72B6\u6001"},{default:u(()=>[t(e).status==1?(r(),o(c,{key:0,type:"primary"},{default:u(()=>[l(a(t(e).status_desc),1)]),_:1})):_("",!0),t(e).status==2?(r(),o(c,{key:1,type:"warning"},{default:u(()=>[l(a(t(e).status_desc),1)]),_:1})):_("",!0),t(e).status==3?(r(),o(c,{key:2,type:"success"},{default:u(()=>[l(a(t(e).status_desc),1)]),_:1})):_("",!0),t(e).status==4?(r(),o(c,{key:3,type:"danger"},{default:u(()=>[l(a(t(e).status_desc),1)]),_:1})):_("",!0)]),_:1}),n(s,{label:"\u7528\u6237\u4FE1\u606F"},{default:u(()=>[l(a(t(e).nickname),1)]),_:1}),n(s,{label:"\u63D0\u73B0\u91D1\u989D"},{default:u(()=>[l(a(t(e).money),1)]),_:1}),n(s,{label:"\u624B\u7EED\u8D39"},{default:u(()=>[l(a(t(e).handling_fee)+"("+a(t(e).handling_fee_ratio)+") ",1)]),_:1}),n(s,{label:"\u5230\u8D26\u91D1\u989D",class:"text-red"},{default:u(()=>[l(a(t(e).left_money),1)]),_:1}),n(s,{label:"\u63D0\u73B0\u65B9\u5F0F"},{default:u(()=>[l(a(t(e).type_desc),1)]),_:1}),t(e).type!=2?(r(),o(s,{key:0,label:"\u771F\u5B9E\u59D3\u540D"},{default:u(()=>[l(a(t(e).real_name),1)]),_:1})):_("",!0),t(e).type!=2?(r(),o(s,{key:1,label:`${t(e).type==3?"\u5FAE\u4FE1":"\u652F\u4ED8\u5B9D"}\u8D26\u53F7`},{default:u(()=>[l(a(t(e).account),1)]),_:1},8,["label"])):_("",!0),t(e).type==3||t(e).type==4?(r(),o(s,{key:2,label:"\u6536\u6B3E\u7801"},{default:u(()=>[n(B,{src:t(e).money_qr_code,class:"w-[60px] h-[60px]","preview-src-list":[t(e).money_qr_code]},null,8,["src","preview-src-list"])]),_:1})):_("",!0),n(s,{label:"\u7533\u8BF7\u65F6\u95F4"},{default:u(()=>[l(a(t(e).create_time),1)]),_:1}),t(e).status!=1?(r(),o(s,{key:3,label:"\u5BA1\u6838\u65F6\u95F4"},{default:u(()=>[l(a(t(e).verify_time||"-"),1)]),_:1})):_("",!0),t(e).status==3?(r(),o(s,{key:4,label:"\u8F6C\u8D26\u65F6\u95F4"},{default:u(()=>[l(a(t(e).finish_time||"-"),1)]),_:1})):_("",!0),t(e).status==4?(r(),o(s,{key:5,label:"\u5931\u8D25\u65F6\u95F4"},{default:u(()=>[l(a(t(e).finish_time||"-"),1)]),_:1})):_("",!0),t(e).transfer_remark?(r(),o(s,{key:6,label:"\u8F6C\u8D26\u8BF4\u660E"},{default:u(()=>[m("div",A,a(t(e).transfer_remark||"-"),1)]),_:1})):_("",!0),t(e).verify_remark?(r(),o(s,{key:7,label:"\u5BA1\u6838\u8BF4\u660E"},{default:u(()=>[m("div",P,a(t(e).verify_remark||"-"),1)]),_:1})):_("",!0)]),_:1},8,["model"])]),_:1},512)])}}});export{S as _};