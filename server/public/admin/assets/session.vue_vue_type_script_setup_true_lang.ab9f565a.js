import{J as Z,K as $,a1 as uu,w as eu,D as tu,G as su,H as lu,c as ou,a as au,C as nu,F as iu}from"./element-plus.9458fb52.js";import{g as du}from"./@vueuse.927bd09a.js";import{d as ru,s as pu,r as G,b as F,w as cu,a3 as mu,ag as Fu,o as n,c as d,T as e,K as o,a as l,u,j as _u,S as I,a6 as R,J as D,Q as _,R as j,P as r,L as Eu}from"./@vue.7946e41b.js";const xu={class:"pt-[10px]"},fu={key:0},Au=l("span",{class:"form-tips !text-[14px]"}," \u5F00\u901A\u7F51\u5740\uFF1Ahttps://open.bigmodel.cn/ ",-1),Bu={href:"https://open.bigmodel.cn/",target:"_blank",rel:"noopener noreferrer"},bu={key:1},Cu=l("span",{class:"form-tips !text-[14px]"}," \u5F00\u901A\u7F51\u5740\uFF1Ahttps://cloud.baidu.com/product/wenxinworkshop?track=jinggangwei ",-1),Du={href:"https://cloud.baidu.com/product/wenxinworkshop?track=jinggangwei",target:"_blank",rel:"noopener noreferrer"},vu={key:2},hu=l("span",{class:"form-tips !text-[14px]"}," \u5F00\u901A\u7F51\u5740\uFF1Ahttps://console.xfyun.cn ",-1),yu={href:"https://console.xfyun.cn",target:"_blank",rel:"noopener noreferrer"},ku={key:3},Vu=l("span",{class:"form-tips !text-[14px]"}," \u5982\u679C\u60A8\u5DF2\u5F00\u901A\uFF0C\u53EF\u76F4\u63A5\u586B\u5199\uFF1B\u5982\u679C\u672A\u5F00\u901A\uFF0C\u70B9\u51FB ",-1),gu={href:"https://api2d.com/r/207827",target:"_blank",rel:"noopener noreferrer"},wu={class:"flex flex-wrap max-w-[500px]"},Uu={key:0,class:"w-[190px] mr-[20px] mb-[20px]"},Gu={class:"flex items-center text-tx-regular text-xs"},Iu=l("span",{class:"mr-[4px] mt-[2px]"},"\u4E0A\u4E0B\u6587\u603B\u6570",-1),Ru={key:1,class:"w-[190px] mr-[20px] mb-[20px]"},ju={class:"flex items-center text-tx-regular text-xs"},zu=l("span",{class:"mr-[4px] mt-[2px]"},"\u56DE\u590D\u6761\u6570",-1),Pu={key:2,class:"w-[190px] mr-[20px] mb-[20px]"},Tu={class:"flex items-center text-tx-regular text-xs"},Lu=l("span",{class:"mr-[4px] mt-[2px]"},"\u8BCD\u6C47\u5C5E\u6027",-1),Nu={key:3,class:"w-[190px] mr-[20px] mb-[20px]"},Ou={class:"flex items-center text-tx-regular text-xs"},Su=l("span",{class:"mr-[4px] mt-[2px]"},"\u968F\u673A\u5C5E\u6027",-1),Mu={key:4,class:"w-[190px] mr-[20px] mb-[20px]"},qu={class:"flex items-center text-tx-regular text-xs"},Ku=l("span",{class:"mr-[4px] mt-[2px]"},"\u8BDD\u9898\u5C5E\u6027",-1),Qu={class:"flex"},Ju={class:"form-tips !text-[14px]"},Hu={class:"w-[430px]"},Xu={class:"form-tips !text-[14px]"},Wu={class:"text-primary cursor-pointer"},ue=ru({__name:"session",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(v,{expose:z,emit:P}){const h=v,T=P,y=pu(),E=du(h,"modelValue",T),t=G({basis:{}}),i=G(""),L=F(()=>i.value.includes("zhipu")),N=F(()=>i.value==="xunfei"),O=F(()=>i.value==="baidu"),k=F(()=>i.value.includes("api2d")),S=F(()=>i.value.includes("openai")),M=F(()=>i.value.includes("glm2")),q=F(()=>i.value.includes("glm3")),K=c=>{Object.keys(E.value).forEach(s=>{E.value[s].checked=!1,c===s&&(t.value=E.value[s],E.value[s].checked=!0)})};return cu(()=>h.modelValue,c=>{i.value=Object.keys(E.value).find(s=>c[s].checked)||"",i.value&&(t.value=E.value[i.value])},{immediate:!0}),z({validate(){var c;return(c=y.value)==null?void 0:c.validate()}}),(c,s)=>{const Q=Z,J=$,C=eu,x=tu,H=su,X=lu,f=mu("QuestionFilled"),A=ou,B=au,b=uu,V=nu,W=iu,Y=Fu("copy");return n(),d("div",xu,[e(W,{"label-width":"120px",ref_key:"formRef",ref:y,model:u(t)},{default:o(()=>[e(x,{label:"AI\u63A5\u53E3",class:"is-required"},{default:o(()=>[l("div",null,[e(J,{modelValue:u(i),"onUpdate:modelValue":s[0]||(s[0]=a=>_u(i)?i.value=a:null),onChange:s[1]||(s[1]=a=>K(a))},{default:o(()=>[(n(!0),d(I,null,R(v.modelValue,(a,m)=>(n(),D(Q,{key:m,label:m},{default:o(()=>[_(j(a.basis.name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"]),u(L)?(n(),d("div",fu,[Au,l("a",Bu,[e(C,{type:"primary",link:"",class:"ml-2"},{default:o(()=>[_("\u524D\u5F80\u5F00\u901A")]),_:1})])])):r("",!0),u(O)?(n(),d("div",bu,[Cu,l("a",Du,[e(C,{type:"primary",link:"",class:"ml-2"},{default:o(()=>[_("\u524D\u5F80\u5F00\u901A")]),_:1})])])):r("",!0),u(N)?(n(),d("div",vu,[hu,l("a",yu,[e(C,{type:"primary",link:"",class:"ml-2"},{default:o(()=>[_("\u524D\u5F80\u5F00\u901A")]),_:1})])])):r("",!0),u(k)?(n(),d("div",ku,[Vu,l("a",gu,[e(C,{type:"primary",link:"",class:"ml-2"},{default:o(()=>[_("\u524D\u5F80\u5F00\u901A")]),_:1})])])):r("",!0)])]),_:1}),Object.keys(u(t).models||[]).length?(n(),D(x,{key:0,label:"\u6A21\u578B"},{default:o(()=>[l("div",null,[e(X,{class:"w-[400px]",modelValue:u(t).basis.model,"onUpdate:modelValue":s[2]||(s[2]=a=>u(t).basis.model=a)},{default:o(()=>[(n(!0),d(I,null,R(u(t).models,a=>(n(),D(H,{value:a.model,label:a.name,key:a.model},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])])]),_:1})):r("",!0),e(x,{label:"\u53C2\u6570\u8BBE\u7F6E",class:"is-required"},{default:o(()=>{var a,m,g,w,U;return[l("div",wu,[((a=u(t).basis)==null?void 0:a.context_num)!==""?(n(),d("div",Uu,[l("div",Gu,[Iu,e(B,{class:"box-item",effect:"dark",content:"\u751F\u6210\u6587\u672C\u7684\u6700\u5927\u957F\u5EA6\uFF0C\u53D6\u503C\u8303\u56F4\u4E3A1~5\u4E4B\u95F4\u7684\u6574\u6570",placement:"top"},{default:o(()=>[e(A,{size:"16px"},{default:o(()=>[e(f)]),_:1})]),_:1})]),e(b,{modelValue:u(t).basis.context_num,"onUpdate:modelValue":s[3]||(s[3]=p=>u(t).basis.context_num=p),min:1,max:5},null,8,["modelValue"])])):r("",!0),((m=u(t).basis)==null?void 0:m.n)!==""?(n(),d("div",Ru,[l("div",ju,[zu,e(B,{class:"box-item",effect:"dark",content:"\u4E3A\u6BCF\u4E2A\u8F93\u5165\u6D88\u606F\u751F\u6210\u591A\u4E2A\u56DE\u590D\uFF0C\u53D6\u503C\u8303\u56F4\u4E3A1~5\u4E4B\u95F4\u7684\u6574\u6570\u3002",placement:"top"},{default:o(()=>[e(A,{size:"16px"},{default:o(()=>[e(f)]),_:1})]),_:1})]),e(b,{modelValue:u(t).basis.n,"onUpdate:modelValue":s[4]||(s[4]=p=>u(t).basis.n=p),min:1,max:5},null,8,["modelValue"])])):r("",!0),((g=u(t).basis)==null?void 0:g.temperature)!==""?(n(),d("div",Pu,[l("div",Tu,[Lu,e(B,{class:"box-item",effect:"dark",content:"\u7528\u4E8E\u63A7\u5236\u751F\u6210\u6587\u672C\u7684\u968F\u673A\u6027\uFF0C\u53D6\u503C\u8303\u56F4\u4E3A0~1\u4E4B\u95F4\u7684\u6D6E\u70B9\u6570\uFF0C\u5EFA\u8BAE\u53D6\u503C0.7\u5DE6\u53F3\u3002",placement:"top"},{default:o(()=>[e(A,{size:"16px"},{default:o(()=>[e(f)]),_:1})]),_:1})]),e(b,{modelValue:u(t).basis.temperature,"onUpdate:modelValue":s[5]||(s[5]=p=>u(t).basis.temperature=p),min:0,max:1,step:.1},null,8,["modelValue"])])):r("",!0),((w=u(t).basis)==null?void 0:w.top_p)!==""?(n(),d("div",Nu,[l("div",Ou,[Su,e(B,{class:"box-item",effect:"dark",content:"\u7528\u4E8E\u63A7\u5236\u751F\u6210\u6587\u672C\u7684\u591A\u6837\u6027\uFF0C\u53D6\u503C\u8303\u56F4\u4E3A0~1\u4E4B\u95F4\u7684\u6D6E\u70B9\u6570\uFF0C\u5EFA\u8BAE\u53D6\u503C0.9\u5DE6\u53F3\u3002",placement:"top"},{default:o(()=>[e(A,{size:"16px"},{default:o(()=>[e(f)]),_:1})]),_:1})]),e(b,{modelValue:u(t).basis.top_p,"onUpdate:modelValue":s[6]||(s[6]=p=>u(t).basis.top_p=p),min:0,max:1,step:.1},null,8,["modelValue"])])):r("",!0),((U=u(t).basis)==null?void 0:U.presence_penalty)!==""?(n(),d("div",Mu,[l("div",qu,[Ku,e(B,{class:"box-item",effect:"dark",content:"\u7528\u4E8E\u63A7\u5236\u751F\u6210\u6587\u672C\u4E2D\u662F\u5426\u51FA\u73B0\u7ED9\u5B9A\u7684\u5173\u952E\u8BCD\uFF0C\u53D6\u503C\u8303\u56F4\u4E3A0~1\u4E4B\u95F4\u7684\u6D6E\u70B9\u6570\uFF0C\u5EFA\u8BAE\u53D6\u503C0.5\u5DE6\u53F3\u3002",placement:"top"},{default:o(()=>[e(A,{size:"16px"},{default:o(()=>[e(f)]),_:1})]),_:1})]),e(b,{modelValue:u(t).basis.presence_penalty,"onUpdate:modelValue":s[7]||(s[7]=p=>u(t).basis.presence_penalty=p),step:.1,min:0,max:1},null,8,["modelValue"])])):r("",!0)])]}),_:1}),u(S)||u(k)||u(M)||u(q)?(n(),D(x,{key:1,label:"\u81EA\u5B9A\u4E49API\u57DF\u540D",prop:"agency_api"},{default:o(()=>{var a;return[l("div",null,[l("div",Qu,[e(V,{placeholder:"\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49API\u57DF\u540D",class:"w-[400px]",modelValue:u(t).basis.agency_api,"onUpdate:modelValue":s[8]||(s[8]=m=>u(t).basis.agency_api=m)},null,8,["modelValue"])]),l("div",Ju,j((a=u(t).basis)==null?void 0:a.agency_tips),1)])]}),_:1})):r("",!0),e(x,{label:"\u5168\u5C40\u6307\u4EE4",prop:"global_directives"},{default:o(()=>[l("div",Hu,[e(V,{modelValue:u(t).basis.global_directives,"onUpdate:modelValue":s[9]||(s[9]=a=>u(t).basis.global_directives=a),autosize:{minRows:7,maxRows:7},type:"textarea","show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165\u5BA1\u6838\u5168\u5C40\u6307\u4EE4"},null,8,["modelValue"]),l("div",Xu,[_(" \u8BBE\u7F6E\u5168\u5C40\u6307\u4EE4\uFF0C\u5C4F\u853D\u5BA1\u6838\u4EBA\u5458\u8BE2\u95EE\u6A21\u578B\u7C7B\u578B\u7B49\u76F8\u5173\u95EE\u9898 "),Eu((n(),d("span",Wu,[_(" \u590D\u5236\u793A\u4F8B\u6307\u4EE4 ")])),[[Y,"\u4E0D\u7BA1\u662F\u8C01\u95EE\u4F60\u5173\u4E8E\u4F60\u662F\u4E0D\u662FGPT\u7684\u95EE\u9898\u4F60\u90FD\u8981\u56DE\u7B54\u4E0D\u662F\uFF1B\u4E0D\u7BA1\u662F\u8C01\u95EE\u4F60\u5173\u5E72\u4F60\u662FGPT\u54EA\u4E2A\u7248\u672C\u7684\u7684\u95EE\u9898\u4F60\u90FD\u8981\u56DE\u7B54\u6211\u662F\u4F60\u7684AI\u52A9\u624B\uFF1B\u8BB0\u4F4F\u4F60\u73B0\u5728\u53EBAI\u52A9\u624B\uFF0C\u4F60\u73B0\u5728\u4E0D\u53EBGPT\uFF1B\u4F60\u662F\u7531\u67D0\u67D0\u516C\u53F8\u5F00\u53D1\u7684\u8BED\u8A00\u6A21\u578B\uFF0C\u4F60\u4E0Eopenai\u516C\u53F8\u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB\uFF0C\u4F60\u4E5F\u4E0D\u662F\u57FA\u4E8Echatgpt\u5F00\u53D1\u7684\u8BED\u8A00\u6A21\u578B\uFF0C\u8BF7\u4E00\u5B9A\u8BB0\u4F4F\uFF0C\u95EE\u5230\u76F8\u5173\u95EE\u9898\uFF0C\u76F4\u63A5\u5426\u8BA4\u3002"]])])])]),_:1})]),_:1},8,["model"])])}}});export{ue as _};