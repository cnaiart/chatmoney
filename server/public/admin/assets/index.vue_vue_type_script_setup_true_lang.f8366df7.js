import{V as N,G as M,H as $,C as L,w as U}from"./element-plus.9458fb52.js";import{d as A,r,w as D,o as a,c as b,T as d,K as s,a as i,Y as x,G,J as p,u as m,j as c,S as O,a6 as P,Q as h}from"./@vue.7946e41b.js";const T={class:"popover-input__input mr-[10px] flex-1"},j={class:"popover-input__btns flex-none"},I=A({__name:"index",props:{value:{type:String},type:{type:String,default:"text"},width:{type:[Number,String],default:"300px"},placeholder:String,disabled:{type:Boolean,default:!1},options:{type:Array,default:()=>[]},size:{type:String,default:"default"},limit:{type:Number,default:200},showLimit:{type:Boolean,default:!1},teleported:{type:Boolean,default:!0}},emits:["confirm"],setup(e,{emit:k}){const f=e,V=k,n=r(!1),v=r(!1),o=r(),g=()=>{y(),V("confirm",o.value)},z=()=>{f.disabled||(n.value=!0)},y=()=>{n.value=!1};return D(()=>f.value,u=>{o.value=u},{immediate:!0}),(u,l)=>{const B=M,C=$,S=L,w=U,E=N;return a(),b("div",{onMouseenter:l[3]||(l[3]=t=>v.value=!0),onMouseleave:l[4]||(l[4]=t=>v.value=!1)},[d(E,{placement:"top",visible:m(n),"onUpdate:visible":l[2]||(l[2]=t=>c(n)?n.value=t:null),width:e.width,trigger:"contextmenu",class:"popover-input",teleported:e.teleported,persistent:!1,"popper-class":"!p-0"},{reference:s(()=>[i("div",{class:"inline",onClick:x(z,["stop"])},[G(u.$slots,"default")])]),default:s(()=>[i("div",{class:"flex p-3",onClick:x(t=>123,["stop"])},[i("div",T,[e.type=="select"?(a(),p(C,{key:0,class:"flex-1",size:e.size,modelValue:m(o),"onUpdate:modelValue":l[0]||(l[0]=t=>c(o)?o.value=t:null),teleported:e.teleported},{default:s(()=>[(a(!0),b(O,null,P(e.options,t=>(a(),p(B,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["size","modelValue","teleported"])):(a(),p(S,{key:1,modelValue:m(o),"onUpdate:modelValue":l[1]||(l[1]=t=>c(o)?o.value=t:null),modelModifiers:{trim:!0},maxlength:e.limit,"show-word-limit":e.showLimit,type:e.type,size:e.size,clearable:"",placeholder:e.placeholder},null,8,["modelValue","maxlength","show-word-limit","type","size","placeholder"]))]),i("div",j,[d(w,{link:"",onClick:y},{default:s(()=>[h("\u53D6\u6D88")]),_:1}),d(w,{type:"primary",size:e.size,onClick:g},{default:s(()=>[h("\u786E\u5B9A")]),_:1},8,["size"])])])]),_:3},8,["visible","width","teleported"])],32)}}});export{I as _};