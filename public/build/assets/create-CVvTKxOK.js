import{_ as u,as as p,b as h,w as r,e as c,i as f,d as i,o as _}from"./App-DX0oeBi7.js";import{V}from"./VAutocomplete-CK1RYW1e.js";const b={name:"system-role-create",methods:{searchUser:p(function(e,t){e&&this.$http("system/api/user/search",{method:"GET",params:{search:e.trim()}}).then(s=>{t.combos.users=s})},300)}};function U(e,t,s,x,$,n){const m=i("form-create");return _(),h(m,{"with-helpdesk":""},{default:r(({combos:{users:l},record:o,store:d})=>[c(f,null,{default:r(()=>[c(V,{items:l,"return-object":!1,label:"Pengguna",modelValue:o.name,"onUpdate:modelValue":a=>o.name=a,"onUpdate:search":a=>n.searchUser(a,d),clearable:""},null,8,["items","modelValue","onUpdate:modelValue","onUpdate:search"])]),_:2},1024)]),_:1})}const C=u(b,[["render",U]]);export{C as default};
