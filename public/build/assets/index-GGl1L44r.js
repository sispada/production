import{_ as y,b as u,w as t,d as l,o as n,e as a,aq as c,ao as d,Q as i,i as f,V as m,au as k,f as v}from"./App-DX0oeBi7.js";const V={name:"account-apps",methods:{impersonateLeave:function({mapUserModule:r}){this.$http("account/api/impersonate-leave",{method:"POST"}).then(h=>{r(h)})},openModule:function(r){this.$router.push({name:r.slug+"-dashboard"})}}};function w(r,h,L,$,B,s){const _=l("page-divider"),g=l("widget-apps"),C=l("page-paper"),b=l("user-apps");return n(),u(b,{"page-name":"account-service","onClick:impersonateLeave":s.impersonateLeave,"clear-filters":""},{default:t(({modules:o})=>[a(C,{"user-avatar":""},{default:t(()=>[o.personal&&o.personal.length>0?(n(),c(i,{key:0},[a(_,{label:"personal",uppercase:""}),a(f,null,{default:t(()=>[a(m,{justify:"center","no-gutters":""},{default:t(()=>[(n(!0),c(i,null,k(o.personal,(e,p)=>(n(),u(v,{cols:"3",md:"2",key:p},{default:t(()=>[a(g,{color:e.color,highlight:e.highlight,icon:e.icon,label:e.name,onClick:x=>s.openModule(e)},null,8,["color","highlight","icon","label","onClick"])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)],64)):d("",!0),o.administrator&&o.administrator.length>0?(n(),c(i,{key:1},[a(_,{label:"administrator",uppercase:""}),a(f,null,{default:t(()=>[a(m,{justify:"center","no-gutters":""},{default:t(()=>[(n(!0),c(i,null,k(o.administrator,(e,p)=>(n(),u(v,{cols:"3",md:"2",key:p},{default:t(()=>[a(g,{color:e.color,highlight:e.highlight,icon:e.icon,label:e.name,onClick:x=>s.openModule(e)},null,8,["color","highlight","icon","label","onClick"])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)],64)):d("",!0)]),_:2},1024)]),_:1},8,["onClick:impersonateLeave"])}const j=y(V,[["render",w]]);export{j as default};
