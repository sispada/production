import{_ as B,b as s,aw as K,ax as U,d as I,o as i,w as l,av as g,e as a,V as r,f as d,j as k,i as p,ao as T,g as m,m as u,l as f,ay as N,az as z,aA as O,k as S,aB as _,aq as c,a5 as R}from"./App-DX0oeBi7.js";import{V as x}from"./VOtpInput-CvD_sakV.js";const j={name:"welcome-page",setup(){const n=K(),{email:e,forgotPassword:F,password:o,password_confirmation:P,resetFeature:M,twoFactor:w,twoFactorCode:V,twoFactorMode:b,twoModeCode:v,theme:y}=U(n);return{email:e,forgotPassword:F,password:o,password_confirmation:P,resetFeature:M,twoFactor:w,twoFactorCode:V,twoFactorMode:b,twoModeCode:v,theme:y}},data:()=>({visible:!1})},A={class:"d-flex px-6 py-4"},D={key:0,class:"text-h4 font-weight-light"},q={key:1,class:"text-h4 font-weight-light"};function E(n,e,F,o,P,M){const w=I("page-welcome");return i(),s(w,null,{default:l(({authenticate:V,challenge:b,finduser:v,resetpass:y})=>[o.forgotPassword?(i(),s(g,{key:0,color:"transparent"},{default:l(()=>[a(r,null,{default:l(()=>[a(d,{cols:"12",sm:"6"},{default:l(()=>e[15]||(e[15]=[k("div",{class:"text-h4 font-weight-light"}," Temukan akun Anda ",-1)])),_:1}),a(d,{cols:"12",sm:"6"},{default:l(()=>[a(p,{class:"pa-0"},{default:l(()=>[o.resetFeature?T("",!0):(i(),s(r,{key:0},{default:l(()=>[a(d,{cols:"12"},{default:l(()=>[a(m,{label:"Pengguna",placeholder:"Masukan NIP/NIK","hide-details":"",modelValue:o.email,"onUpdate:modelValue":e[0]||(e[0]=t=>o.email=t)},null,8,["modelValue"])]),_:1})]),_:1})),o.resetFeature?(i(),s(r,{key:1},{default:l(()=>[a(d,{cols:"12"},{default:l(()=>[a(m,{"append-inner-icon":n.visible?"visibility":"visibility_off",type:n.visible?"text":"password",label:"Sandi Baru",placeholder:"Masukan Katasandi",modelValue:o.password,"onUpdate:modelValue":e[1]||(e[1]=t=>o.password=t),"hide-details":"","onClick:appendInner":e[2]||(e[2]=t=>n.visible=!n.visible)},null,8,["append-inner-icon","type","modelValue"])]),_:1}),a(d,{cols:"12"},{default:l(()=>[a(m,{"append-inner-icon":n.visible?"visibility":"visibility_off",type:n.visible?"text":"password",label:"Konfirmasi",placeholder:"Masukan Katasandi",modelValue:o.password_confirmation,"onUpdate:modelValue":e[3]||(e[3]=t=>o.password_confirmation=t),"hide-details":"","onClick:appendInner":e[4]||(e[4]=t=>n.visible=!n.visible)},null,8,["append-inner-icon","type","modelValue"])]),_:1})]),_:1})):T("",!0)]),_:1}),a(p,{class:"pa-0 pt-6"},{default:l(()=>[a(r,{dense:""},{default:l(()=>[a(d,{cols:"6"},{default:l(()=>[a(u,{block:"",color:"primary",size:"large",variant:"text",rounded:"pill",onClick:e[5]||(e[5]=t=>{o.forgotPassword=!o.forgotPassword,o.resetFeature=!1})},{default:l(()=>e[16]||(e[16]=[f("Batal")])),_:1})]),_:1}),a(d,{cols:"6"},{default:l(()=>[o.resetFeature?(i(),s(u,{key:1,block:"",color:"primary",size:"large"},{default:l(()=>[e[20]||(e[20]=f(" Reset ")),a(N,{activator:"parent","max-width":"340"},{default:l(({isActive:t})=>[a(g,null,{default:l(()=>[a(z,null,{default:l(()=>[a(O,null,{default:l(()=>e[18]||(e[18]=[f("OTP Token")])),_:1})]),_:1}),a(p,{class:"pb-2"},{default:l(()=>[e[19]||(e[19]=k("p",{class:"text-justify px-2 pt-1 pb-2"}," Silahkan masukan token dari aplikasi Authenticator untuk dapat melakukan perubahan sandi. ",-1)),a(x,{label:"OTP",length:"6",modelValue:o.twoFactorCode,"onUpdate:modelValue":e[6]||(e[6]=C=>o.twoFactorCode=C),"hide-details":""},null,8,["modelValue"])]),_:1}),a(S),k("div",A,[a(_),a(u,{class:"ml-auto",text:"Batal",onClick:C=>t.value=!1},null,8,["onClick"]),a(u,{class:"ml-2",text:"Kirim",onClick:C=>y(()=>t.value=!1)},null,8,["onClick"])])]),_:2},1024)]),_:2},1024)]),_:2},1024)):(i(),s(u,{key:0,block:"",color:"primary",size:"large",rounded:"pill",variant:"flat",onClick:v},{default:l(()=>e[17]||(e[17]=[f("Cari")])),_:2},1032,["onClick"]))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)):(i(),s(g,{key:1,color:"transparent"},{default:l(()=>[a(r,null,{default:l(()=>[a(d,{cols:"12",sm:"6"},{default:l(()=>[o.twoFactor?(i(),c("div",q," Otentikasi OTP ")):(i(),c("div",D," Otentikasi Pengguna "))]),_:1}),a(d,{cols:"12",sm:"6"},{default:l(()=>[a(p,{class:"pa-0"},{default:l(()=>[o.twoFactor?(i(),s(r,{key:1,dense:""},{default:l(()=>[o.twoModeCode?(i(),s(d,{key:0,cols:"12"},{default:l(()=>[a(x,{label:"OTP",length:"6",modelValue:o.twoFactorCode,"onUpdate:modelValue":e[10]||(e[10]=t=>o.twoFactorCode=t),"hide-details":""},null,8,["modelValue"])]),_:1})):(i(),s(d,{key:1,cols:"12"},{default:l(()=>[a(m,{class:"my-3",label:"Kode Pemulihan","hide-details":"",modelValue:o.twoFactorCode,"onUpdate:modelValue":e[11]||(e[11]=t=>o.twoFactorCode=t)},null,8,["modelValue"])]),_:1})),a(d,{cols:"12"},{default:l(()=>[a(R,{modelValue:o.twoModeCode,"onUpdate:modelValue":e[12]||(e[12]=t=>o.twoModeCode=t),label:o.twoModeCode?"Mode Pemulihan":"Mode Token","hide-details":"",inset:""},null,8,["modelValue","label"])]),_:1})]),_:1})):(i(),s(r,{key:0},{default:l(()=>[a(d,{cols:"12"},{default:l(()=>[a(m,{label:"Pengguna",placeholder:"Masukan NIP/NIK","hide-details":"",modelValue:o.email,"onUpdate:modelValue":e[7]||(e[7]=t=>o.email=t)},null,8,["modelValue"])]),_:1}),a(d,{cols:"12"},{default:l(()=>[a(m,{"append-inner-icon":n.visible?"visibility":"visibility_off",type:n.visible?"text":"password",label:"Katasandi",placeholder:"Masukan Katasandi",modelValue:o.password,"onUpdate:modelValue":e[8]||(e[8]=t=>o.password=t),"hide-details":"","onClick:appendInner":e[9]||(e[9]=t=>n.visible=!n.visible)},null,8,["append-inner-icon","type","modelValue"])]),_:1})]),_:1}))]),_:1}),a(p,{class:"pa-0"},{default:l(()=>[k("div",{class:"text-blue font-weight-medium text-center my-4 cursor-pointer",onClick:e[13]||(e[13]=t=>o.forgotPassword=!o.forgotPassword)}," Lupa Password? "),o.twoFactor?(i(),s(r,{key:1,dense:""},{default:l(()=>[a(d,{cols:"4"},{default:l(()=>[a(u,{block:"",color:"primary",size:"large",onClick:e[14]||(e[14]=t=>o.twoFactor=!o.twoFactor)},{default:l(()=>e[22]||(e[22]=[f("Batal")])),_:1})]),_:1}),a(d,{cols:"8"},{default:l(()=>[a(u,{block:"",color:"primary",size:"large",onClick:b},{default:l(()=>e[23]||(e[23]=[f("Konfirmasi")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)):(i(),s(u,{key:0,block:"",color:"primary",size:"large",rounded:"pill",variant:"flat",onClick:V},{default:l(()=>e[21]||(e[21]=[f("Masuk")])),_:2},1032,["onClick"]))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))]),_:1})}const H=B(j,[["render",E]]);export{H as default};
