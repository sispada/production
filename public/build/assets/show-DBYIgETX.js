import{_ as r,c as m,w as t,g as l,a,h as c,i as f,j as u,V as p,b as h,d as V,ar as _,an as k,f as x,r as v,o as g}from"./desktop-GGuEFPIP.js";const w={name:"system-thirdparty-show",methods:{generateToken(s){this.$http(`system/api/thirdparty/${s.id}/generate-token`).then(e=>{s.token=e.token})}}},C={class:"text-button"};function T(s,e,y,N,E,d){const i=v("form-show");return g(),m(i,{"hide-edit":"","hide-delete":"","with-helpdesk":""},{default:t(({record:o})=>[a(x,null,{default:t(()=>[a(p,{dense:""},{default:t(()=>[a(h,{cols:"12"},{default:t(()=>[a(V,{label:"Nama",modelValue:o.name,"onUpdate:modelValue":n=>o.name=n,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e[0]||(e[0]=l("div",{class:"text-overline mt-4 mb-2"}," ACCESS TOKEN ",-1)),a(_,{class:"d-flex align-center justify-center pa-4",color:"cyan-lighten-5",rounded:"lg"},{default:t(()=>[l("div",C,k(o.token),1)]),_:2},1024)]),_:2},1024)]),info:t(({record:o,theme:n})=>[e[2]||(e[2]=l("div",{class:"text-overline mt-4"}," Aksi ",-1)),a(c),a(u,{class:"mt-3",color:n,block:"",variant:"flat",onClick:$=>d.generateToken(o)},{default:t(()=>e[1]||(e[1]=[f("GENERATE TOKEN")])),_:2},1032,["color","onClick"])]),_:1})}const B=r(w,[["render",T]]);export{B as default};
