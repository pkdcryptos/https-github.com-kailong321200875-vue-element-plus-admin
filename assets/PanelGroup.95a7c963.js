import{b as e,r as t,V as s,G as a,o as l,f as i,g as o,H as n,u as d,aH as r,aG as c,k as x,n as u,P as m,aw as p,at as _}from"./vendor.5173cf7d.js";/* empty css               *//* empty css                *//* empty css                         */import{_ as f}from"./CountTo.8ba50b55.js";import{c as v,b as g}from"./index.17e476f5.js";import{u as b}from"./useAxios.ea975450.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";const{request:h}=b(),w=()=>h({url:"/analysis/userAccessSource",method:"get"}),j=()=>h({url:"/analysis/weeklyUserActivity",method:"get"}),$=()=>h({url:"/analysis/monthlySales",method:"get"});const k={class:"flex flex-col justify-between"},z={class:"flex flex-col justify-between"},S={class:"flex flex-col justify-between"},A={class:"flex flex-col justify-between"};var P=y(e({setup(e){const{t:b}=v(),{getPrefixCls:y}=g(),w=y("panel"),j=t(!0);let $=s({users:0,messages:0,moneys:0,shoppings:0});return(async()=>{const e=await h({url:"/analysis/total",method:"get"}).catch((()=>{})).finally((()=>{j.value=!1}));$=Object.assign($,(null==e?void 0:e.data)||{})})(),(e,t)=>{const s=a("Icon");return l(),i(d(_),{gutter:20,justify:"space-between",class:u(d(w))},{default:o((()=>[n(d(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[n(d(r),{shadow:"hover",class:"mb-20px"},{default:o((()=>[n(d(c),{loading:j.value,animated:"",rows:2},{default:o((()=>[x("div",{class:u(`${d(w)}__item flex justify-between`)},[x("div",null,[x("div",{class:u(`${d(w)}__item--icon ${d(w)}__item--peoples p-16px inline-block rounded-6px`)},[n(s,{icon:"svg-icon:peoples",size:40})],2)]),x("div",k,[x("div",{class:u(`${d(w)}__item--text text-16px text-gray-500 text-right`)},m(d(b)("analysis.newUser")),3),n(d(f),{class:"text-20px font-700 text-right","start-val":0,"end-val":102400,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),n(d(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[n(d(r),{shadow:"hover",class:"mb-20px"},{default:o((()=>[n(d(c),{loading:j.value,animated:"",rows:2},{default:o((()=>[x("div",{class:u(`${d(w)}__item flex justify-between`)},[x("div",null,[x("div",{class:u(`${d(w)}__item--icon ${d(w)}__item--message p-16px inline-block rounded-6px`)},[n(s,{icon:"svg-icon:message",size:40})],2)]),x("div",z,[x("div",{class:u(`${d(w)}__item--text text-16px text-gray-500 text-right`)},m(d(b)("analysis.unreadInformation")),3),n(d(f),{class:"text-20px font-700 text-right","start-val":0,"end-val":81212,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),n(d(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[n(d(r),{shadow:"hover",class:"mb-20px"},{default:o((()=>[n(d(c),{loading:j.value,animated:"",rows:2},{default:o((()=>[x("div",{class:u(`${d(w)}__item flex justify-between`)},[x("div",null,[x("div",{class:u(`${d(w)}__item--icon ${d(w)}__item--money p-16px inline-block rounded-6px`)},[n(s,{icon:"svg-icon:money",size:40})],2)]),x("div",S,[x("div",{class:u(`${d(w)}__item--text text-16px text-gray-500 text-right`)},m(d(b)("analysis.transactionAmount")),3),n(d(f),{class:"text-20px font-700 text-right","start-val":0,"end-val":9280,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),n(d(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[n(d(r),{shadow:"hover",class:"mb-20px"},{default:o((()=>[n(d(c),{loading:j.value,animated:"",rows:2},{default:o((()=>[x("div",{class:u(`${d(w)}__item flex justify-between`)},[x("div",null,[x("div",{class:u(`${d(w)}__item--icon ${d(w)}__item--shopping p-16px inline-block rounded-6px`)},[n(s,{icon:"svg-icon:shopping",size:40})],2)]),x("div",A,[x("div",{class:u(`${d(w)}__item--text text-16px text-gray-500 text-right`)},m(d(b)("analysis.totalShopping")),3),n(d(f),{class:"text-20px font-700 text-right","start-val":0,"end-val":13600,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1},8,["class"])}}}),[["__scopeId","data-v-11dbf752"]]),I=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));export{P,j as a,$ as b,I as c,w as g};