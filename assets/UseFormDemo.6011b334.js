import{_ as e}from"./Form.vue_vue_type_script_lang.73a8bac7.js";import{_ as o}from"./ContentWrap.0c84c971.js";import{c as l}from"./index.65618426.js";import{u as t}from"./useForm.14fbe6ea.js";import{b as a,V as i,r as m,o as r,j as s,H as f,u as n,g as d,a4 as p,_ as c,Y as u,P as b}from"./vendor.5173cf7d.js";/* empty css                  */import{r as D}from"./formRules.a61da961.js";/* empty css               *//* empty css                  *//* empty css                 *//* empty css               */import"./tsxHelper.29777593.js";/* empty css                        *//* empty css                  *//* empty css                   */import"./InputPassword.5c7b034e.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.d84c6d56.js";/* empty css                */const v=a({setup(a){const{t:v}=l(),_=i([{field:"field1",label:v("formDemo.input"),component:"Input",formItemProps:{rules:[D]}},{field:"field2",label:v("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},{field:"field3",label:v("formDemo.radio"),component:"Radio",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:v("formDemo.checkbox"),component:"Checkbox",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}},{field:"field5",component:"DatePicker",label:v("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:v("formDemo.timeSelect")}]),{register:j,methods:k,elFormRef:h}=t({schema:_}),C=e=>{const{setProps:o}=k;o({labelWidth:e})},P=e=>{const{setProps:o}=k;o({size:e})},g=e=>{const{setProps:o}=k;o({disabled:e})},$=e=>{const{delSchema:o,addSchema:l}=k;e?o("field2"):e||"field2"===_[1].field||l({field:"field2",label:v("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},1)},S=e=>{var o;const{setValues:l}=k;e?null==(o=n(h))||o.resetFields():l({field1:"field1",field2:"2",field3:"2",field4:["1","3"],field5:"2022-01-27",field6:"17:00"})},x=m(7),F=()=>{const{setSchema:e}=k;e([{field:"field2",path:"label",value:`${v("formDemo.select")} ${x.value}`},{field:"field2",path:"componentProps.options",value:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}]),x.value++},R=()=>{const{addSchema:e}=k;n(x)%2==0?e({field:`field${n(x)}`,label:`${v("formDemo.input")}${n(x)}`,component:"Input"}):e({field:`field${n(x)}`,label:`${v("formDemo.input")}${n(x)}`,component:"Input"},n(x)),x.value++},I=()=>{n(h).validate((e=>{}))},V=()=>{var e;null==(e=n(h))||e.resetFields()};return(l,t)=>(r(),s(p,null,[f(n(o),{title:`UseForm ${n(v)("formDemo.operate")}`},{default:d((()=>[f(n(c),{onClick:t[0]||(t[0]=e=>C(150))},{default:d((()=>[u(b(n(v)("formDemo.change"))+" labelWidth",1)])),_:1}),f(n(c),{onClick:t[1]||(t[1]=e=>C("auto"))},{default:d((()=>[u(b(n(v)("formDemo.restore"))+" labelWidth",1)])),_:1}),f(n(c),{onClick:t[2]||(t[2]=e=>P("large"))},{default:d((()=>[u(b(n(v)("formDemo.change"))+" size",1)])),_:1}),f(n(c),{onClick:t[3]||(t[3]=e=>P("default"))},{default:d((()=>[u(b(n(v)("formDemo.restore"))+" size",1)])),_:1}),f(n(c),{onClick:t[4]||(t[4]=e=>g(!0))},{default:d((()=>[u(b(n(v)("formDemo.disabled")),1)])),_:1}),f(n(c),{onClick:t[5]||(t[5]=e=>g(!1))},{default:d((()=>[u(b(n(v)("formDemo.disablement")),1)])),_:1}),f(n(c),{onClick:t[6]||(t[6]=e=>$(!0))},{default:d((()=>[u(b(n(v)("formDemo.delete"))+" "+b(n(v)("formDemo.select")),1)])),_:1}),f(n(c),{onClick:t[7]||(t[7]=e=>$(!1))},{default:d((()=>[u(b(n(v)("formDemo.add"))+" "+b(n(v)("formDemo.select")),1)])),_:1}),f(n(c),{onClick:t[8]||(t[8]=e=>S(!1))},{default:d((()=>[u(b(n(v)("formDemo.setValue")),1)])),_:1}),f(n(c),{onClick:t[9]||(t[9]=e=>S(!0))},{default:d((()=>[u(b(n(v)("formDemo.resetValue")),1)])),_:1}),f(n(c),{onClick:F},{default:d((()=>[u(b(n(v)("formDemo.set"))+" "+b(n(v)("formDemo.select"))+" label ",1)])),_:1}),f(n(c),{onClick:R},{default:d((()=>[u(b(n(v)("formDemo.add"))+" "+b(n(v)("formDemo.subitem")),1)])),_:1}),f(n(c),{onClick:I},{default:d((()=>[u(b(n(v)("formDemo.formValidation")),1)])),_:1}),f(n(c),{onClick:V},{default:d((()=>[u(b(n(v)("formDemo.verifyReset")),1)])),_:1})])),_:1},8,["title"]),f(n(o),{title:`UseForm ${n(v)("formDemo.example")}`},{default:d((()=>[f(n(e),{onRegister:n(j)},null,8,["onRegister"])])),_:1},8,["title"])],64))}});export{v as default};
