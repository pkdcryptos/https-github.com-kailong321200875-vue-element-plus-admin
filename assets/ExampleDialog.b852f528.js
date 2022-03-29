import{_ as e}from"./ContentWrap.9576b624.js";import{_ as a}from"./Search.1e6ad684.js";import{_ as t}from"./Dialog.b8fc4802.js";import{c as l}from"./index.17e476f5.js";import{b as o,V as i,ay as r,aN as s,r as n,o as m,j as p,H as d,u,g as c,a4 as f,k as g,Y as v,P as b,_ as j,f as y,aB as _}from"./vendor.5173cf7d.js";/* empty css                  *//* empty css               */import{_ as D}from"./Table.vue_vue_type_script_lang.396fe360.js";import{g as w,d as x,s as k}from"./index.a06a8857.js";import{u as R}from"./useTable.26d0f292.js";import h from"./Write.b54cc46d.js";import C from"./Detail.cd5916ff.js";/* empty css                *//* empty css                  */import"./Form.vue_vue_type_script_lang.538125a0.js";/* empty css               *//* empty css                 */import"./tsxHelper.25ebaa02.js";/* empty css                        *//* empty css                  *//* empty css                   */import"./InputPassword.6fc6aaf7.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.4ca83914.js";import"./useForm.14fbe6ea.js";/* empty css                   */import"./useAxios.ea975450.js";/* empty css                       */import"./formRules.6d840ae4.js";import"./Descriptions.f2b32209.js";const S={class:"mb-10px"},P=o({setup(o){const{register:P,tableObject:z,methods:L}=R({getListApi:w,delListApi:x,response:{list:"list",total:"total"}}),{getList:F,setSearchParmas:V}=L;F();const{t:A}=l(),T=[{label:A("exampleDemo.title"),value:"",component:"Input",field:"title"}],U=i([{field:"index",label:A("tableDemo.index"),type:"index"},{field:"title",label:A("tableDemo.title")},{field:"author",label:A("tableDemo.author")},{field:"display_time",label:A("tableDemo.displayTime")},{field:"importance",label:A("tableDemo.importance"),formatter:(e,a,t)=>r(s,{type:1===t?"success":2===t?"warning":"danger"},(()=>A(1===t?"tableDemo.important":2===t?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:A("tableDemo.pageviews")},{field:"action",width:"260px",label:A("tableDemo.action")}]),H=n(!1),I=n(""),W=()=>{I.value=A("exampleDemo.add"),z.currentRow=null,H.value=!0},B=n(!1),E=async(e,a)=>{var t;z.currentRow=e;const{delList:l,getSelections:o}=L,i=await o();B.value=!0,await l(a?i.map((e=>e.id)):[null==(t=z.currentRow)?void 0:t.id],a).finally((()=>{B.value=!1}))},N=n(""),O=(e,a)=>{I.value=A("edit"===a?"exampleDemo.edit":"exampleDemo.detail"),N.value=a,z.currentRow=e,H.value=!0},Y=n(),q=n(!1),G=async()=>{var e;const a=u(Y);await(null==(e=null==a?void 0:a.elFormRef)?void 0:e.validate((async e=>{if(e){q.value=!0;const e=await(null==a?void 0:a.getFormData());await k({data:e}).catch((()=>{})).finally((()=>{q.value=!1}))&&(H.value=!1,z.currentPage=1,F())}})))};return(l,o)=>(m(),p(f,null,[d(u(e),null,{default:c((()=>[d(u(a),{schema:T,onSearch:u(V),onReset:u(V)},null,8,["onSearch","onReset"]),g("div",S,[d(u(j),{type:"primary",onClick:W},{default:c((()=>[v(b(u(A)("exampleDemo.add")),1)])),_:1}),d(u(j),{loading:B.value,type:"danger",onClick:o[0]||(o[0]=e=>E(null,!0))},{default:c((()=>[v(b(u(A)("exampleDemo.del")),1)])),_:1},8,["loading"])]),d(u(D),{pageSize:u(z).pageSize,"onUpdate:pageSize":o[1]||(o[1]=e=>u(z).pageSize=e),currentPage:u(z).currentPage,"onUpdate:currentPage":o[2]||(o[2]=e=>u(z).currentPage=e),columns:u(U),data:u(z).tableList,loading:u(z).loading,pagination:{total:u(z).total},onRegister:u(P)},{action:c((({row:e})=>[d(u(j),{type:"primary",onClick:a=>O(e,"edit")},{default:c((()=>[v(b(u(A)("exampleDemo.edit")),1)])),_:2},1032,["onClick"]),d(u(j),{type:"success",onClick:a=>O(e,"detail")},{default:c((()=>[v(b(u(A)("exampleDemo.detail")),1)])),_:2},1032,["onClick"]),d(u(j),{type:"danger",onClick:a=>E(e,!1)},{default:c((()=>[v(b(u(A)("exampleDemo.del")),1)])),_:2},1032,["onClick"])])),_:1},8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),d(u(t),{modelValue:H.value,"onUpdate:modelValue":o[4]||(o[4]=e=>H.value=e),title:I.value},{footer:c((()=>["detail"!==N.value?(m(),y(u(j),{key:0,type:"primary",loading:q.value,onClick:G},{default:c((()=>[v(b(u(A)("exampleDemo.save")),1)])),_:1},8,["loading"])):_("v-if",!0),d(u(j),{onClick:o[3]||(o[3]=e=>H.value=!1)},{default:c((()=>[v(b(u(A)("dialogDemo.close")),1)])),_:1})])),default:c((()=>["detail"!==N.value?(m(),y(h,{key:0,ref_key:"writeRef",ref:Y,"current-row":u(z).currentRow},null,8,["current-row"])):_("v-if",!0),"detail"===N.value?(m(),y(C,{key:1,"current-row":u(z).currentRow},null,8,["current-row"])):_("v-if",!0)])),_:1},8,["modelValue","title"])],64))}});export{P as default};