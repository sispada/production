import{_ as n,c as i,w as s,g as d,a as t,h as c,b as l,j as m,i as f,V as p,r as _,o as u}from"./desktop-GGuEFPIP.js";const V={name:"system-user-crete",methods:{grantUserPermission(){this.$http("system/api/user/grant-permissions",{method:"POST"})}}};function k(x,e,C,N,g,o){const a=_("form-data");return u(),i(a,{"hide-addnew":""},{info:s(({theme:r})=>[e[1]||(e[1]=d("div",{class:"text-overline mt-4"}," Aksi ",-1)),t(c,{class:"mb-3"}),t(p,{dense:""},{default:s(()=>[t(l,{cols:"12"},{default:s(()=>[t(m,{color:r,block:"",onClick:o.grantUserPermission},{default:s(()=>e[0]||(e[0]=[f("GRANT PERMISSIONS")])),_:2},1032,["color","onClick"])]),_:2},1024)]),_:2},1024)]),_:1})}const v=n(V,[["render",k]]);export{v as default};
