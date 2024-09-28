import{ab as e,d as l,M as t,r as a,a as o,o as s,c as u,w as r,b as i,aP as n,e as d,N as p,f as m,t as c,g as f,j as v,cq as x,k as g,F as h,l as _,m as y,s as V,L as w,x as b,T as k,A as j,u as C,G as S,Z as U,bo as R,cr as D,bp as $,R as I,z as q,i as L,aI as T,cs as F,bA as W}from"./index-9f08b835.js";import{_ as z}from"./page-meta.d2ccf398.js";import{_ as B}from"./u-image.e6fb9592.js";import{_ as N}from"./model-picker.dbbe4c90.js";import{_ as E}from"./u-icon.f0423eb2.js";import{_ as M}from"./u-button.cd082997.js";import{_ as A}from"./create_record.3474bfb9.js";import{i as H}from"./chat.05123b79.js";import{b as O}from"./create.9c487682.js";import{d as P}from"./index.f8572cdb.js";import{u as J}from"./useCopy.7659937f.js";import{u as G}from"./useLockFn.cde70c0d.js";import{F as X}from"./floating-menu.a8f47c3e.js";import{C as Y}from"./creation-history-item.6e6c2da3.js";import{_ as Z}from"./u-form-item.95df05ac.js";import{_ as K}from"./u-form.1bf0b756.js";import{_ as Q}from"./u-input.6dc4a2b4.js";import{_ as ee}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as le}from"./u-select.09a21b4d.js";import{h as te}from"./index.73309c03.js";import{c as ae}from"./cloneDeep.bc7b0787.js";import"./u-collapse.3475c9a9.js";import"./u-popup.6c89de8e.js";import"./u-tag.d6be710f.js";import"./u-read-more.a42203b8.js";import"./u-loading.15b95fef.js";import"./text-item.75b27895.js";import"./ua-markdown.f5ba7fba.js";import"./katex.30814119.js";import"./_commonjsHelpers.157f59fb.js";import"./mp-html.6ddc2dff.js";import"./index.c3709e84.js";import"./icon_copy.36709540.js";import"./howler.bdae6f69.js";import"./emitter.1571a5d9.js";const oe=(e,l="yyyy-mm-dd")=>{e||(e=Number(new Date)),10==e.toString().length&&(e*=1e3);const t=new Date(e);let a;const o={"y+":t.getFullYear().toString(),"m+":(t.getMonth()+1).toString(),"d+":t.getDate().toString(),"h+":t.getHours().toString(),"M+":t.getMinutes().toString(),"s+":t.getSeconds().toString()};for(const s in o)a=new RegExp(`(${s})`).exec(l),a&&(l=l.replace(a[1],1==a[1].length?o[s]:o[s].padStart(a[1].length,"0")));return l};var se=(e=>(e[e.Normal=1]="Normal",e[e.Expand=2]="Expand",e[e.Simple=3]="Simple",e[e.Continue=4]="Continue",e[e.Change1=5]="Change1",e[e.Change2=6]="Change2",e[e.Change3=7]="Change3",e))(se||{});const ue=ee(l({__name:"input",props:{modelValue:{default:""},placeholder:{default:"请输入"},showWordLimit:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const x=e,g=t({get:()=>x.modelValue,set(e){l("update:modelValue",e)}});return(l,t)=>{const x=a(o("u-input"),Q),h=v;return s(),u(h,{class:"widget-input"},{default:r((()=>[i(x,n({class:"flex-1 min-w-0",modelValue:d(g),"onUpdate:modelValue":t[0]||(t[0]=e=>p(g)?g.value=e:null),placeholder:e.placeholder,height:"70","placeholder-style":"color: #999"},l.$attrs),null,16,["modelValue","placeholder"]),e.showWordLimit?(s(),u(h,{key:0,class:"text-xs text-muted ml-[20rpx]"},{default:r((()=>{var e;return[m(c(null==(e=d(g))?void 0:e.length)+" / "+c(l.$attrs.maxlength),1)]})),_:1})):f("v-if",!0)])),_:1})}}}),[["__scopeId","data-v-e4159e5b"]]),re=ee(l({__name:"textarea",props:{modelValue:{default:""},placeholder:{default:"请输入"},rows:{default:1},showWordLimit:{type:Boolean,default:!0},autosize:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:l}){const n=e,x=t({get:()=>n.modelValue,set(e){l("update:modelValue",e)}}),g=t((()=>({height:n.autosize?"auto":40*n.rows+"rpx",minHeight:"80rpx",fontSize:"28rpx"})));return(l,t)=>{const n=a(o("u-input"),Q),h=v;return s(),u(h,{class:"widget-textarea"},{default:r((()=>[i(n,{class:"w-full",modelValue:d(x),"onUpdate:modelValue":t[0]||(t[0]=e=>p(x)?x.value=e:null),placeholder:e.placeholder,"auto-height":e.autosize,"custom-style":d(g),"placeholder-style":"color: #999",maxlength:l.$attrs.maxlength,type:"textarea"},null,8,["modelValue","placeholder","auto-height","custom-style","maxlength"]),e.showWordLimit?(s(),u(h,{key:0,class:"text-xs bg-page text-muted absolute right-[20rpx] bottom-[10rpx] leading-[28rpx]"},{default:r((()=>{var e;return[m(c(null==(e=d(x))?void 0:e.length)+" / "+c(l.$attrs.maxlength),1)]})),_:1})):f("v-if",!0)])),_:1})}}}),[["__scopeId","data-v-801ecf90"]]),ie=ee(l({__name:"radio",props:{defaultValue:null,modelValue:{default:""},options:{default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,o=t({get:()=>a.modelValue,set(e){l("update:modelValue",e)}});return x((()=>{a.defaultValue&&(o.value=a.defaultValue)})),(l,t)=>{const a=v;return s(),u(a,{class:"widget-radio"},{default:r((()=>[i(a,{class:"radio-group"},{default:r((()=>[(s(!0),g(h,null,_(e.options,((e,l)=>(s(),u(a,{class:y(["radio-item",{"radio-item--active":d(o)===e}]),key:l,onClick:l=>o.value=e},{default:r((()=>[m(c(e),1)])),_:2},1032,["onClick","class"])))),128))])),_:1})])),_:1})}}}),[["__scopeId","data-v-7dba6fb8"]]),ne=ee(l({__name:"select",props:{defaultValue:null,modelValue:{default:""},options:{default:()=>[]},placeholder:{default:"请输入"}},emits:["update:modelValue"],setup(e,{emit:l}){const u=e,n=t({get:()=>u.modelValue,set(e){l("update:modelValue",e)}}),p=V(!1),f=t((()=>u.options.map((e=>({value:e,label:e}))))),_=e=>{n.value=e[0].value};return x((()=>{u.defaultValue&&(n.value=u.defaultValue)})),(e,l)=>{const t=v,u=a(o("u-icon"),E),x=a(o("u-select"),le);return s(),g(h,null,[i(t,{class:"widget-select"},{default:r((()=>[i(t,{class:"flex-1",onClick:l[0]||(l[0]=e=>p.value=!0)},{default:r((()=>[i(t,{class:y(["h-[70rpx]",d(n)?"text-black":"text-muted"])},{default:r((()=>[m(c(d(n)||"请输入"),1)])),_:1},8,["class"])])),_:1}),i(t,{class:y(["text-muted arrow-icon",{"arrow-icon--top":p.value}])},{default:r((()=>[i(u,{name:"arrow-down"})])),_:1},8,["class"])])),_:1}),i(x,{modelValue:p.value,"onUpdate:modelValue":l[1]||(l[1]=e=>p.value=e),list:d(f),onConfirm:_},null,8,["modelValue","list"])],64)}}}),[["__scopeId","data-v-10bbb22f"]]),de=ee(l({__name:"checkbox",props:{defaultValue:null,modelValue:{default:()=>[]},options:{default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,o=t({get:()=>a.modelValue,set(e){l("update:modelValue",e)}}),n=e=>o.value.includes(e);return x((()=>{a.defaultValue&&(o.value=a.defaultValue)})),(l,t)=>{const a=v;return s(),u(a,{class:"widget-radio"},{default:r((()=>[i(a,{class:"radio-group"},{default:r((()=>[(s(!0),g(h,null,_(e.options,((e,l)=>(s(),u(a,{class:y(["radio-item",{"radio-item--active":n(e)}]),key:l,onClick:l=>(e=>{var l,t,a;const s=null==(l=o.value)?void 0:l.findIndex((l=>e===l));-1===s?null==(t=o.value)||t.push(e):null==(a=o.value)||a.splice(s,1)})(e)},{default:r((()=>[m(c(e),1)])),_:2},1032,["onClick","class"])))),128))])),_:1})])),_:1})}}}),[["__scopeId","data-v-ecc72ec5"]]),pe=l({__name:"form-designer",props:{formLists:{default:()=>[]},modelValue:null,labelPosition:{default:"top"},borderBottom:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{expose:l,emit:i}){const p=e,m=w(),c=t({get:()=>p.modelValue,set(e){i("update:modelValue",e)}}),v=V({});return b((()=>p.formLists),(e=>{v.value=null==e?void 0:e.reduce(((e,l)=>(c.value[l.props.field]=void 0,l.props.isRequired&&(e[l.props.field]=[{required:!0,message:"必填项不能为空"}]),e)),{}),k((()=>{var e;null==(e=m.value)||e.setRules(v.value)}))}),{immediate:!0}),l({validate:async()=>new Promise(((e,l)=>{var t;null==(t=m.value)||t.validate((t=>{t?e(!0):l()}))}))}),(l,t)=>{const i=a(o("u-form-item"),Z),x=a(o("u-form"),K);return s(),u(x,n({model:d(c),ref_key:"formRef",ref:m},{...l.$attrs,...p},{rules:v.value}),{default:r((()=>[(s(!0),g(h,null,_(e.formLists,(l=>(s(),u(i,{key:l.id,prop:l.props.field,label:l.props.title,borderBottom:e.borderBottom,required:l.props.isRequired},{default:r((()=>["WidgetInput"===l.name?(s(),u(ue,n({key:0,class:"w-full"},l.props,{modelValue:d(c)[l.props.field],"onUpdate:modelValue":e=>d(c)[l.props.field]=e}),null,16,["modelValue","onUpdate:modelValue"])):"WidgetTextarea"===l.name?(s(),u(re,n({key:1,class:"w-full"},l.props,{modelValue:d(c)[l.props.field],"onUpdate:modelValue":e=>d(c)[l.props.field]=e}),null,16,["modelValue","onUpdate:modelValue"])):"WidgetRadio"===l.name?(s(),u(ie,n({key:2},l.props,{modelValue:d(c)[l.props.field],"onUpdate:modelValue":e=>d(c)[l.props.field]=e}),null,16,["modelValue","onUpdate:modelValue"])):"WidgetSelect"===l.name?(s(),u(ne,n({key:3,class:"w-full"},l.props,{modelValue:d(c)[l.props.field],"onUpdate:modelValue":e=>d(c)[l.props.field]=e}),null,16,["modelValue","onUpdate:modelValue"])):"WidgetCheckbox"===l.name?(s(),u(de,n({key:4},l.props,{modelValue:d(c)[l.props.field],"onUpdate:modelValue":e=>d(c)[l.props.field]=e}),null,16,["modelValue","onUpdate:modelValue"])):f("v-if",!0)])),_:2},1032,["prop","label","borderBottom","required"])))),128))])),_:1},16,["model","rules"])}}}),me=l({__name:"create",setup(l){const{useShare:t,resolveOptions:n,removeMixinShare:p}=T(),x=j(),y=V(""),b=[{name:"WidgetTextarea",title:"多行文本",props:{field:"question",title:"内容描述",placeholder:"",rows:8,maxlength:400,autosize:!1,isRequired:!1}}],Z=C(),{copy:K}=J(),Q=S({id:0,type:1,token:""}),ee=w(),le=w(),ue=V([]),re=V({}),ie=V({}),ne=V([]),de=V(!1),me=()=>{var e;const l=(null==(e=ie.value)?void 0:e.form[0])||{};return`${l.props.title}：${re.value[l.props.field]||""}`};let ce=Date.now();const fe=async()=>{var l;try{await(null==(l=ee.value)?void 0:l.validate())}catch(t){return console.log(t),void uni.$u.toast("必填项不能为空")}if(x.userInfo.is_chat_limit&&((l,t)=>{const a=e.get(t),o=(new Date).toDateString(),s=!a||a!==o;return s&&l&&e.set(t,o),s})(!0,F)){if((await I({title:"对话上限提示",content:"已超过会员对话上限次数，继续对话将会消耗账户的对话余额",confirmText:"继续",cancelText:"关闭"})).cancel)return}de.value=!0,ce=Date.now();try{await H({model:y.value,other_id:Q.id,question:re.value,creation_type:se.Normal,type:2},{onstart(e){ue.value.length&&(ue.value=[])},onmessage(e){e.trim().split("data:").forEach((async e=>{var l,a,o;if(""!==e)try{const t=JSON.parse(e),{object:s,choices:u,error:r}=t;if(r){const{message:e,code:l}=r;if(1100===l)if(Z.getIsShowRecharge){const{cancel:e}=await I({title:"温馨提示",content:`${Z.getTokenUnit}数量已用完，请前往充值`});if(e)return;ge.navigateTo({path:"/packages/pages/recharge/recharge"})}else uni.$u.toast(`${Z.getTokenUnit}数量已用完。请联系客服增加`);else e&&uni.$u.toast(e);return}let i=ue.value.findIndex((e=>e.id===ce));const n=null==(l=u[0])?void 0:l.index,d=null==(o=null==(a=u[0])?void 0:a.delta)?void 0:o.content;if("chat"===s&&(-1===i&&(ue.value.push({create_time:oe(new Date,"yyyy-mm-dd hh:MM:ss"),title:re.value.question?re.value.question:me(),reply:[],extra:ae(re.value),id:ce}),i=ue.value.length-1),d&&(ue.value[i].reply[n]||(ue.value[i].reply[n]=""),ue.value[i].reply[n]+=d)),"finish"===s)return ue.value[i].reply[n]+=d,void xe()}catch(t){}}))},onclose(){setTimeout((()=>{de.value=!1}),500)}})}catch(t){de.value=!1}},ve=()=>{var e,l;null==(l=null==(e=ie.value)?void 0:e.form)||l.forEach((e=>{e.props.placeholder&&!e.props.defaultValue&&(re.value[e.props.field]=e.props.placeholder)}))},xe=()=>{var e;null==(e=ie.value)||e.form.forEach((e=>{e.props.defaultValue?re.value[e.props.field]=ae(e.props.defaultValue):re.value[e.props.field]=void 0}))},ge=q(),{lockFn:he}=G((async e=>{e&&(W({scrollTop:0,duration:0}),re.value=e,await k(),fe())})),_e=()=>ge.navigateTo({path:"/packages/pages/create_history/create_history",query:{id:Q.id}}),{height:ye}=P(le);return te(ye,(()=>{de.value&&W({selector:"#bottom-line",duration:0})}),{throttle:200}),U((async e=>{Q.id=Number(null==e?void 0:e.id),Q.type=Number(null==e?void 0:e.type),await(async()=>{const e=await O({id:Q.id});ie.value=e,ie.value.form||(ie.value.form=b),t({title:e.name,desc:e.tips,imageUrl:e.image}),ne.value=ae(ie.value.form),xe()})(),R("createRewrite",(e=>{console.log(e),he(e)}))})),D((()=>{$("createRewrite")})),(e,l)=>{const t=a(o("page-meta"),z),n=a(o("u-image"),B),p=v,x=L,V=a(o("model-picker"),N),w=a(o("u-icon"),E),b=a(o("u-button"),M);return s(),g(h,null,[i(t,{"page-style":e.$theme.pageStyle},null,8,["page-style"]),ie.value.name?(s(),u(p,{key:0,class:"safe-area-inset-bottom"},{default:r((()=>[i(p,{class:"pt-[20rpx] pb-[220rpx]"},{default:r((()=>[i(p,{class:"px-[20rpx]"},{default:r((()=>[i(p,{class:"px-[30rpx] py-[24rpx] flex rounded-[14rpx] bg-white items-center"},{default:r((()=>[i(n,{src:ie.value.image,width:"84",height:"84"},null,8,["src"]),i(p,{class:"flex-1 min-w-0 ml-[20rpx]"},{default:r((()=>[i(p,{class:"text-xl font-medium"},{default:r((()=>[m(c(ie.value.name),1)])),_:1}),ie.value.tips?(s(),u(p,{key:0,class:"text-content line-clamp-2 text-xs mt-[10rpx]"},{default:r((()=>[m(c(ie.value.tips),1)])),_:1})):f("v-if",!0)])),_:1}),f(' <view @click="collection(modelData.id)">\n                        <u-icon\n                            v-if="modelData?.is_collect == false"\n                            name="star"\n                            color="#ccc"\n                            size="32"\n                        ></u-icon>\n                        <u-icon\n                            v-if="modelData?.is_collect == true"\n                            name="star-fill"\n                            color="#ffac25"\n                            size="32"\n                        ></u-icon>\n                    </view> ')])),_:1}),i(p,{class:"px-[30rpx] py-[24rpx] rounded-[14rpx] bg-white mt-[20rpx]"},{default:r((()=>[i(pe,{ref_key:"formDesignerRef",ref:ee,formLists:ne.value,modelValue:re.value,"onUpdate:modelValue":l[0]||(l[0]=e=>re.value=e)},null,8,["formLists","modelValue"]),i(p,{class:"bg-[#FFFAF0] text-xs rounded-full inline-block px-[30rpx] py-[14rpx] text-[#FD984E] mt-[10rpx]",onClick:ve},{default:r((()=>[m(" 不知道写啥？点击插入示例 👈🏻 ")])),_:1})])),_:1})])),_:1}),i(p,null,{default:r((()=>[i(p,{class:"flex items-center px-[20rpx] py-[30rpx]"},{default:r((()=>[i(p,{class:"text-lg font-medium mr-auto"},{default:r((()=>[m(" 本次创作结果 ")])),_:1}),i(p,{class:"text-content",onClick:_e},{default:r((()=>[m(" 创作历史 ")])),_:1})])),_:1}),i(p,null,{default:r((()=>[i(p,{class:"current-history",ref_key:"currentHistoryRef",ref:le},{default:r((()=>[i(p,{class:"px-[20rpx]"},{default:r((()=>[(s(!0),g(h,null,_(ue.value,(e=>(s(),u(p,{class:"mt-[20rpx]",key:e.id},{default:r((()=>[(s(!0),g(h,null,_(e.reply,((l,t)=>(s(),u(p,{class:"mt-[20rpx]",key:t},{default:r((()=>[i(Y,{title:e.title,time:e.create_time,content:l,showDelete:!1,"show-rewrite":!de.value,onCopy:d(K),onRewrite:l=>d(he)(e.extra)},null,8,["title","time","content","show-rewrite","onCopy","onRewrite"])])),_:2},1024)))),128))])),_:2},1024)))),128))])),_:1})])),_:1},512)])),_:1})])),_:1}),ue.value.length?f("v-if",!0):(s(),u(p,{key:0,class:"flex flex-col justify-center items-center pb-[200rpx]"},{default:r((()=>[i(x,{class:"w-[300rpx] h-[300rpx]",src:A,alt:""}),i(p,{class:"my-[32rpx] font-medium"},{default:r((()=>[m(" AI创作结果会在显示这里，现在你只需要 ")])),_:1}),i(p,null,{default:r((()=>[i(p,{class:"text-content text-sm"},{default:r((()=>[m(" 1.填写越详细，结果越准确哦 ")])),_:1}),i(p,{class:"text-content text-sm"},{default:r((()=>[m(" 2.点击立即生成按钮，一般在10秒内搞定 ")])),_:1})])),_:1})])),_:1}))])),_:1}),i(p,{id:"bottom-line",class:"h-[1px]"}),i(p,{class:"safe-area-inset-bottom fixed bottom-0 left-0 w-full bg-white z-10"},{default:r((()=>[i(p,{class:"p-[20rpx]"},{default:r((()=>[f(" 模型选择 "),i(V,{sub_id:y.value,"onUpdate:sub_id":l[1]||(l[1]=e=>y.value=e),class:"mb-[20rpx]"},null,8,["sub_id"]),i(p,{class:"flex"},{default:r((()=>[i(p,{class:"w-[40%]"},{default:r((()=>[i(b,{hairLine:!1,"custom-style":{width:"100%",border:"none",background:"#f5f5f5"},onClick:xe},{default:r((()=>[i(w,{name:"trash"}),m(" 重置内容 ")])),_:1})])),_:1}),i(p,{class:"flex-1 ml-[20rpx]"},{default:r((()=>[i(b,{type:"primary",loading:de.value,"custom-style":{width:"100%"},onClick:fe},{default:r((()=>[m(" 立即生成 ")])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1}),f("    悬浮菜单    "),i(X)])),_:1})):f("v-if",!0)],64)}}});export{me as default};