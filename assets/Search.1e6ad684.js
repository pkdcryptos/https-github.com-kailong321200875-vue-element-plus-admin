import{_ as e}from"./Form.vue_vue_type_script_lang.538125a0.js";import{p as t,h as a,c as o}from"./index.17e476f5.js";import{b as s,r as i,e as n,s as l,u as r,G as c,o as d,j as m,H as u,g as f,l as p,f as h,_ as y,aB as v,a4 as g,Y as b,P as x}from"./vendor.5173cf7d.js";/* empty css                  */import{u as k}from"./useForm.14fbe6ea.js";const _={key:0},w=s({props:{schema:{type:Array,default:()=>[]},isCol:t.bool.def(!1),labelWidth:t.oneOfType([String,Number]).def("auto"),layout:t.string.validate((e=>["inline","bottom"].includes(e))).def("inline"),buttomPosition:t.string.validate((e=>["left","center","right"].includes(e))).def("center"),showSearch:t.bool.def(!0),showReset:t.bool.def(!0),expand:t.bool.def(!1),expandField:t.string.def("")},emits:["search","reset"],setup(t,{emit:s}){const w=t,{t:F}=o(),C=i(!0),j=n((()=>{let e=l(w.schema);if(w.expand&&w.expandField&&!r(C)){const t=a(e,(e=>e.field===w.expandField));if(t>-1){const a=e.length;e.splice(t+1,a)}}return"inline"===w.layout&&(e=e.concat([{field:"action",formItemProps:{labelWidth:"0px"}}])),e})),{register:R,elFormRef:P,methods:S}=k(),q=async()=>{var e;await(null==(e=r(P))?void 0:e.validate((async e=>{if(e){const{getFormData:e}=S,t=await e();s("search",t)}})))},W=async()=>{var e;null==(e=r(P))||e.resetFields();const{getFormData:t}=S,a=await t();s("reset",a)},A=n((()=>({textAlign:w.buttomPosition}))),D=()=>{var e;null==(e=r(P))||e.resetFields(),C.value=!r(C)};return(a,o)=>{const s=c("Icon");return d(),m(g,null,[u(r(e),{"is-custom":!1,"label-width":t.labelWidth,"hide-required-asterisk":"",inline:"","is-col":t.isCol,schema:r(j),onRegister:r(R)},{action:f((()=>["inline"===t.layout?(d(),m("div",_,[t.showSearch?(d(),h(r(y),{key:0,type:"primary",onClick:q},{default:f((()=>[u(s,{icon:"ep:search",class:"mr-5px"}),b(" "+x(r(F)("common.query")),1)])),_:1})):v("v-if",!0),t.showReset?(d(),h(r(y),{key:1,onClick:W},{default:f((()=>[u(s,{icon:"ep:refresh-right",class:"mr-5px"}),b(" "+x(r(F)("common.reset")),1)])),_:1})):v("v-if",!0),t.expand?(d(),h(r(y),{key:2,type:"text",onClick:D},{default:f((()=>[b(x(r(F)(C.value?"common.shrink":"common.expand"))+" ",1),u(s,{icon:C.value?"ant-design:up-outlined":"ant-design:down-outlined"},null,8,["icon"])])),_:1})):v("v-if",!0)])):v("v-if",!0)])),_:1},8,["label-width","is-col","schema","onRegister"]),"bottom"===t.layout?(d(),m("div",{key:0,style:p(r(A))},[t.showSearch?(d(),h(r(y),{key:0,type:"primary",onClick:q},{default:f((()=>[u(s,{icon:"ep:search",class:"mr-5px"}),b(" "+x(r(F)("common.query")),1)])),_:1})):v("v-if",!0),t.showReset?(d(),h(r(y),{key:1,onClick:W},{default:f((()=>[u(s,{icon:"ep:refresh-right",class:"mr-5px"}),b(" "+x(r(F)("common.reset")),1)])),_:1})):v("v-if",!0),t.expand?(d(),h(r(y),{key:2,type:"text",onClick:D},{default:f((()=>[b(x(r(F)(C.value?"common.shrink":"common.expand"))+" ",1),u(s,{icon:C.value?"ant-design:up-outlined":"ant-design:down-outlined"},null,8,["icon"])])),_:1})):v("v-if",!0)],4)):v("v-if",!0)],64)}}});export{w as _};
