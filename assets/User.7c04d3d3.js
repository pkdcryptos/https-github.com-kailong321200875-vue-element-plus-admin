import{_ as e}from"./ContentWrap.0c84c971.js";import{c as a}from"./index.65618426.js";import{_ as s}from"./Table.vue_vue_type_script_lang.208b095c.js";import{b as r}from"./index.09580ea0.js";import{b as t,ay as o,r as l,o as i,f as m,g as n,H as p,u,_ as d,Y as c,P as f}from"./vendor.5173cf7d.js";/* empty css                  *//* empty css                *//* empty css                  */import"./tsxHelper.29777593.js";/* empty css               *//* empty css                 */import"./useAxios.4f7b071e.js";const b=t({setup(t){const{t:b}=a(),g=[{field:"index",label:b("userDemo.index"),type:"index"},{field:"username",label:b("userDemo.username")},{field:"password",label:b("userDemo.password")},{field:"role",label:b("userDemo.role")},{field:"remark",label:b("userDemo.remark"),formatter:e=>o("span","admin"===e.username?b("userDemo.remarkMessage1"):b("userDemo.remarkMessage2"))},{field:"action",label:b("userDemo.action")}],j=l(!0);let D=l([]);(async e=>{const a=await r({params:e||{pageIndex:1,pageSize:10}}).catch((()=>{})).finally((()=>{j.value=!1}));a&&(D.value=a.data.list)})();return(a,r)=>(i(),m(u(e),{title:u(b)("userDemo.title"),message:u(b)("userDemo.message")},{default:n((()=>[p(u(s),{columns:g,data:u(D),loading:j.value,selection:!1},{action:n((e=>[p(u(d),{type:"primary",onClick:e=>{}},{default:n((()=>[c(f(u(b)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),_:1},8,["data","loading"])])),_:1},8,["title","message"]))}});export{b as default};
