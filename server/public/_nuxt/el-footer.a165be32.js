import{F as c,P as i,T as S,bp as p}from"./entry.dfbfd4fd.js";import{k as n,Q as k,l as h,H as u,I as _,N as d,T as f,u as s,_ as m}from"./swiper-vue.2eb6bd20.js";const w=n({name:"ElContainer"}),C=n({...w,props:{direction:{type:String}},setup(a){const t=a,e=k(),o=c("container"),r=h(()=>t.direction==="vertical"?!0:t.direction==="horizontal"?!1:e&&e.default?e.default().some(v=>{const E=v.type.name;return E==="ElHeader"||E==="ElFooter"}):!1);return(l,v)=>(u(),_("section",{class:f([s(o).b(),s(o).is("vertical",s(r))])},[d(l.$slots,"default")],2))}});var F=i(C,[["__file","container.vue"]]);const H=n({name:"ElAside"}),B=n({...H,props:{width:{type:String,default:null}},setup(a){const t=a,e=c("aside"),o=h(()=>t.width?e.cssVarBlock({width:t.width}):{});return(r,l)=>(u(),_("aside",{class:f(s(e).b()),style:m(s(o))},[d(r.$slots,"default")],6))}});var g=i(B,[["__file","aside.vue"]]);const N=n({name:"ElFooter"}),A=n({...N,props:{height:{type:String,default:null}},setup(a){const t=a,e=c("footer"),o=h(()=>t.height?e.cssVarBlock({height:t.height}):{});return(r,l)=>(u(),_("footer",{class:f(s(e).b()),style:m(s(o))},[d(r.$slots,"default")],6))}});var $=i(A,[["__file","footer.vue"]]);const M=n({name:"ElHeader"}),V=n({...M,props:{height:{type:String,default:null}},setup(a){const t=a,e=c("header"),o=h(()=>t.height?e.cssVarBlock({height:t.height}):{});return(r,l)=>(u(),_("header",{class:f(s(e).b()),style:m(s(o))},[d(r.$slots,"default")],6))}});var y=i(V,[["__file","header.vue"]]);const z=n({name:"ElMain"}),I=n({...z,setup(a){const t=c("main");return(e,o)=>(u(),_("main",{class:f(s(t).b())},[d(e.$slots,"default")],2))}});var b=i(I,[["__file","main.vue"]]);const P=S(F,{Aside:g,Footer:$,Header:y,Main:b}),Q=p(g),j=p($),q=p(y),D=p(b);export{q as E,Q as a,D as b,P as c,j as d};