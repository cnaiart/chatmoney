import{E as O}from"./el-switch.48cb994a.js";import{E as j,a as k}from"./index.883ed08b.js";import{E as T}from"./index.17567b0d.js";import"./entry.dfbfd4fd.js";import"./el-form-item.4ed993c7.js";/* empty css                *//* empty css                     */import{u as y,T as m}from"./canvas.94886ee6.js";import{_ as C}from"./text-setting.vue.89b70e6b.js";import{c as x}from"./cloneDeep.4e82bacf.js";import{k as E,r as z,l as A,b as _,w as F,j as I,H as w,I as N,J as u,X as f,V as d,u as l}from"./swiper-vue.2eb6bd20.js";const U={class:"avatar-select h-full flex flex-col"},V={class:"flex-1 min-h-0"},P={class:"h-full"},h={class:"p-main"},M=E({__name:"captions",setup(g){const n=y(),o=z({status:0,fontSize:64,fontFamily:"Alibaba PuHuiTi",fill:"#ffffff",stroke:""}),p=A(()=>{var t;return((t=n.activeObject)==null?void 0:t.customType)===m.CAPTIONS}),b=t=>{var e,s;if(t)n.addText("此处是字幕",m.CAPTIONS,o);else{const i=(e=n.canvas)==null?void 0:e.getObjects(),c=i==null?void 0:i.find(r=>r.customType===m.CAPTIONS);(s=n.canvas)==null||s.remove(c)}};_(()=>n.activeObject,t=>{var e;if(p.value)for(const s in o)o[s]=(e=t==null?void 0:t.data)==null?void 0:e[s]},{immediate:!0});const S=["fontSize","fontFamily","fill","stroke"];_(()=>o,t=>{var s,i,c;if(!p.value)return;for(const r in o)if(S.includes(r)){let a=t[r];r==="fontSize"&&(a=n.calcFontSize(a)),(s=n.activeObject)==null||s.set(r,a)}const e=x(o);(i=n.activeObject)==null||i.set("data",e),(c=n.canvas)==null||c.renderAll()},{deep:!0});const v=()=>{var s;const t=(s=n.canvas)==null?void 0:s.getObjects();(t==null?void 0:t.find(i=>i.customType===m.CAPTIONS))?o.status=1:o.status=0};return F(()=>{var t;n.canvas&&((t=n.canvas)==null||t.on("object:removed",v))}),I(()=>{var t;(t=n.canvas)==null||t.off("object:removed",v)}),(t,e)=>{const s=O,i=j,c=k,r=T;return w(),N("div",U,[u("div",V,[u("div",P,[f(r,null,{default:d(()=>[u("div",h,[f(c,null,{default:d(()=>[f(i,{label:"字幕显示"},{default:d(()=>[f(s,{modelValue:l(o).status,"onUpdate:modelValue":e[0]||(e[0]=a=>l(o).status=a),"inline-prompt":"","active-value":1,"inactive-value":0,"active-text":"开启","inactive-text":"关闭",onChange:b},null,8,["modelValue"])]),_:1}),f(C,{font:l(o).fontFamily,"onUpdate:font":e[1]||(e[1]=a=>l(o).fontFamily=a),"font-size":l(o).fontSize,"onUpdate:fontSize":e[2]||(e[2]=a=>l(o).fontSize=a),"font-color":l(o).fill,"onUpdate:fontColor":e[3]||(e[3]=a=>l(o).fill=a),"stroke-color":l(o).stroke,"onUpdate:strokeColor":e[4]||(e[4]=a=>l(o).stroke=a)},null,8,["font","font-size","font-color","stroke-color"])]),_:1})])]),_:1})])])])}}});export{M as _};