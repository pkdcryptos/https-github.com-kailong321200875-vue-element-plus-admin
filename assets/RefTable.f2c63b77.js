import{_ as e}from"./ContentWrap.9576b624.js";import{c as a}from"./index.17e476f5.js";import{_ as t}from"./Table.vue_vue_type_script_lang.396fe360.js";import{g as l}from"./index.a06a8857.js";import{b as o,V as i,ay as s,aN as n,r,o as d,j as m,H as p,u as b,g as u,a4 as c,_ as f,Y as g,P as D,k as _}from"./vendor.5173cf7d.js";/* empty css               *//* empty css                  */import{u as v}from"./useTable.26d0f292.js";/* empty css                *//* empty css                  */import"./tsxHelper.25ebaa02.js";/* empty css                 */import"./useAxios.ea975450.js";/* empty css                       *//* empty css                   */const x={class:"ml-30px"},j=o({setup(o){const{t:j}=a(),h=i([{field:"index",label:j("tableDemo.index"),type:"index"},{field:"content",label:j("tableDemo.header"),children:[{field:"title",label:j("tableDemo.title")},{field:"author",label:j("tableDemo.author")},{field:"display_time",label:j("tableDemo.displayTime")},{field:"importance",label:j("tableDemo.importance"),formatter:(e,a,t)=>s(n,{type:1===t?"success":2===t?"warning":"danger"},(()=>j(1===t?"tableDemo.important":2===t?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:j("tableDemo.pageviews")}]},{field:"action",label:j("tableDemo.action")}]),{register:k,tableObject:y,methods:C}=v({getListApi:l,response:{list:"list",total:"total"},props:{columns:h}}),{getList:w}=C;w();const P=r(),R=r(),S=e=>{R.value=e?{total:y.total}:void 0},T=e=>{var a;null==(a=b(P))||a.setProps({reserveIndex:e})},z=e=>{var a;null==(a=b(P))||a.setProps({selection:e})},$=r(1),I=()=>{var e;null==(e=b(P))||e.setColumn([{field:"title",path:"label",value:`${j("tableDemo.title")}${b($)}`}]),$.value++},L=e=>{var a;null==(a=b(P))||a.setProps({expand:e})};return(a,l)=>(d(),m(c,null,[p(b(e),{title:`RefTable ${b(j)("tableDemo.operate")}`},{default:u((()=>[p(b(f),{onClick:l[0]||(l[0]=e=>S(!0))},{default:u((()=>[g(D(b(j)("tableDemo.show"))+" "+D(b(j)("tableDemo.pagination")),1)])),_:1}),p(b(f),{onClick:l[1]||(l[1]=e=>S(!1))},{default:u((()=>[g(D(b(j)("tableDemo.hidden"))+" "+D(b(j)("tableDemo.pagination")),1)])),_:1}),p(b(f),{onClick:l[2]||(l[2]=e=>T(!0))},{default:u((()=>[g(D(b(j)("tableDemo.reserveIndex")),1)])),_:1}),p(b(f),{onClick:l[3]||(l[3]=e=>T(!1))},{default:u((()=>[g(D(b(j)("tableDemo.restoreIndex")),1)])),_:1}),p(b(f),{onClick:l[4]||(l[4]=e=>z(!0))},{default:u((()=>[g(D(b(j)("tableDemo.showSelections")),1)])),_:1}),p(b(f),{onClick:l[5]||(l[5]=e=>z(!1))},{default:u((()=>[g(D(b(j)("tableDemo.hiddenSelections")),1)])),_:1}),p(b(f),{onClick:I},{default:u((()=>[g(D(b(j)("tableDemo.changeTitle")),1)])),_:1}),p(b(f),{onClick:l[6]||(l[6]=e=>L(!0))},{default:u((()=>[g(D(b(j)("tableDemo.showExpandedRows")),1)])),_:1}),p(b(f),{onClick:l[7]||(l[7]=e=>L(!1))},{default:u((()=>[g(D(b(j)("tableDemo.hiddenExpandedRows")),1)])),_:1})])),_:1},8,["title"]),p(b(e),{title:`RefTable ${b(j)("tableDemo.example")}`},{default:u((()=>[p(b(t),{ref_key:"tableRef",ref:P,pageSize:b(y).pageSize,"onUpdate:pageSize":l[8]||(l[8]=e=>b(y).pageSize=e),currentPage:b(y).currentPage,"onUpdate:currentPage":l[9]||(l[9]=e=>b(y).currentPage=e),data:b(y).tableList,loading:b(y).loading,pagination:R.value,onRegister:b(k)},{action:u((e=>[p(b(f),{type:"primary",onClick:e=>{}},{default:u((()=>[g(D(b(j)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),expand:u((e=>[_("div",x,[_("div",null,D(b(j)("tableDemo.title"))+"："+D(e.row.title),1),_("div",null,D(b(j)("tableDemo.author"))+"："+D(e.row.author),1),_("div",null,D(b(j)("tableDemo.displayTime"))+"："+D(e.row.display_time),1)])])),_:1},8,["pageSize","currentPage","data","loading","pagination","onRegister"])])),_:1},8,["title"])],64))}});export{j as default};
