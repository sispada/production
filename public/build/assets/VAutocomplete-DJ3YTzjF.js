import{q as Ce,s as we,u as Se,v as R,x as A,y as q,z as g,B as xe,C as be,D as Ae,E as Fe,H as Ie,I as Pe,G as _,K as Q,L as De,M as Re,N as _e,O as Me,P as Te,Q as Ee,R as Le,S as Ne,g as X,e as o,T as M,U as Y,W as Oe,X as Be,Y as x,Z as Ke,$ as Z,a0 as Ue,a1 as ze,a2 as qe,a3 as He,p as We,a4 as $e,n as Ge,a5 as j,J as Je,at as ee}from"./App-gMpX2Z32.js";function Qe(l,V,u){if(V==null)return l;if(Array.isArray(V))throw new Error("Multiple matches is not implemented");return typeof V=="number"&&~V?o(M,null,[o("span",{class:"v-autocomplete__unmask"},[l.substr(0,V)]),o("span",{class:"v-autocomplete__mask"},[l.substr(V,u)]),o("span",{class:"v-autocomplete__unmask"},[l.substr(V+u)])]):l}const Xe=we({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...Le({filterKeys:["title"]}),...Ee(),...Te(Ne({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Me({transition:!1})},"VAutocomplete"),Ze=Ce()({name:"VAutocomplete",props:Xe(),emits:{"update:focused":l=>!0,"update:search":l=>!0,"update:modelValue":l=>!0,"update:menu":l=>!0},setup(l,V){let{slots:u}=V;const{t:T}=Se(),h=R(),y=A(!1),C=A(!0),E=A(!1),H=R(),L=R(),N=q(l,"menu"),c=g({get:()=>N.value,set:e=>{var t;N.value&&!e&&((t=H.value)!=null&&t.ΨopenChildren.size)||(N.value=e)}}),i=A(-1),le=g(()=>{var e;return(e=h.value)==null?void 0:e.color}),W=g(()=>c.value?l.closeText:l.openText),{items:$,transformIn:te,transformOut:ae}=xe(l),{textColorClasses:ue,textColorStyles:ne}=be(le),v=q(l,"search",""),n=q(l,"modelValue",[],e=>te(e===null?[null]:Ae(e)),e=>{const t=ae(e);return l.multiple?t:t[0]??null}),oe=g(()=>typeof l.counterValue=="function"?l.counterValue(n.value):typeof l.counterValue=="number"?l.counterValue:n.value.length),F=Fe(l),{filteredItems:O,getMatches:se}=Ie(l,$,()=>C.value?"":v.value),k=g(()=>l.hideSelected?O.value.filter(e=>!n.value.some(t=>t.value===e.value)):O.value),I=g(()=>!!(l.chips||u.chip)),b=g(()=>I.value||!!u.selection),ie=g(()=>n.value.map(e=>e.props.value)),B=g(()=>{var t;return(l.autoSelectFirst===!0||l.autoSelectFirst==="exact"&&v.value===((t=k.value[0])==null?void 0:t.title))&&k.value.length>0&&!C.value&&!E.value}),K=g(()=>l.hideNoData&&!k.value.length||F.isReadonly.value||F.isDisabled.value),U=R(),re=Pe(U,h);function ce(e){l.openOnClear&&(c.value=!0),v.value=""}function ve(){K.value||(c.value=!0)}function de(e){K.value||(y.value&&(e.preventDefault(),e.stopPropagation()),c.value=!c.value)}function fe(e){var t;e.key!==" "&&j(e)&&((t=h.value)==null||t.focus())}function me(e){var a,s,m;if(F.isReadonly.value)return;const t=h.value.selectionStart,r=n.value.length;if(["Enter","ArrowDown","ArrowUp"].includes(e.key)&&e.preventDefault(),["Enter","ArrowDown"].includes(e.key)&&(c.value=!0),["Escape"].includes(e.key)&&(c.value=!1),B.value&&["Enter","Tab"].includes(e.key)&&!n.value.some(d=>{let{value:f}=d;return f===k.value[0].value})&&w(k.value[0]),e.key==="ArrowDown"&&B.value&&((a=U.value)==null||a.focus("next")),["Backspace","Delete"].includes(e.key)){if(!l.multiple&&b.value&&n.value.length>0&&!v.value)return w(n.value[0],!1);if(~i.value){e.preventDefault();const d=i.value;w(n.value[i.value],!1),i.value=d>=r-1?r-2:d}else e.key==="Backspace"&&!v.value&&(i.value=r-1);return}if(l.multiple)if(e.key==="ArrowLeft"){if(i.value<0&&t>0)return;const d=i.value>-1?i.value-1:r-1;n.value[d]?i.value=d:(i.value=-1,h.value.setSelectionRange((s=v.value)==null?void 0:s.length,(m=v.value)==null?void 0:m.length))}else if(e.key==="ArrowRight"){if(i.value<0)return;const d=i.value+1;n.value[d]?i.value=d:(i.value=-1,h.value.setSelectionRange(0,0))}else~i.value&&j(e)&&(i.value=-1)}function pe(e){if(ee(h.value,":autofill")||ee(h.value,":-webkit-autofill")){const t=$.value.find(r=>r.title===e.target.value);t&&w(t)}}function he(){var e;l.eager&&((e=L.value)==null||e.calculateVisibleItems())}function ge(){var e;y.value&&(C.value=!0,(e=h.value)==null||e.focus())}function Ve(e){y.value=!0,setTimeout(()=>{E.value=!0})}function ye(e){E.value=!1}function ke(e){(e==null||e===""&&!l.multiple&&!b.value)&&(n.value=[])}const z=A(!1);function w(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!e||e.props.disabled))if(l.multiple){const r=n.value.findIndex(s=>(l.valueComparator||Je)(s.value,e.value)),a=t??!~r;if(~r){const s=a?[...n.value,e]:[...n.value];s.splice(r,1),n.value=s}else a&&(n.value=[...n.value,e]);l.clearOnSelect&&(v.value="")}else{const r=t!==!1;n.value=r?[e]:[],v.value=r&&!b.value?e.title:"",Q(()=>{c.value=!1,C.value=!0})}}return _(y,(e,t)=>{var r;e!==t&&(e?(z.value=!0,v.value=l.multiple||b.value?"":String(((r=n.value.at(-1))==null?void 0:r.props.title)??""),C.value=!0,Q(()=>z.value=!1)):(!l.multiple&&v.value==null&&(n.value=[]),c.value=!1,n.value.some(a=>{let{title:s}=a;return s===v.value})||(v.value=""),i.value=-1))}),_(v,e=>{!y.value||z.value||(e&&(c.value=!0),C.value=!e)}),_(c,()=>{if(!l.hideSelected&&c.value&&n.value.length){const e=k.value.findIndex(t=>n.value.some(r=>t.value===r.value));De&&window.requestAnimationFrame(()=>{var t;e>=0&&((t=L.value)==null||t.scrollToIndex(e))})}}),_(()=>l.items,(e,t)=>{c.value||y.value&&!t.length&&e.length&&(c.value=!0)}),Re(()=>{const e=!!(!l.hideNoData||k.value.length||u["prepend-item"]||u["append-item"]||u["no-data"]),t=n.value.length>0,r=X.filterProps(l);return o(X,x({ref:h},r,{modelValue:v.value,"onUpdate:modelValue":[a=>v.value=a,ke],focused:y.value,"onUpdate:focused":a=>y.value=a,validationValue:n.externalValue,counterValue:oe.value,dirty:t,onChange:pe,class:["v-autocomplete",`v-autocomplete--${l.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":c.value,"v-autocomplete--chips":!!l.chips,"v-autocomplete--selection-slot":!!b.value,"v-autocomplete--selecting-index":i.value>-1},l.class],style:l.style,readonly:F.isReadonly.value,placeholder:t?void 0:l.placeholder,"onClick:clear":ce,"onMousedown:control":ve,onKeydown:me}),{...u,default:()=>o(M,null,[o(Be,x({ref:H,modelValue:c.value,"onUpdate:modelValue":a=>c.value=a,activator:"parent",contentClass:"v-autocomplete__content",disabled:K.value,eager:l.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:l.transition,onAfterEnter:he,onAfterLeave:ge},l.menuProps),{default:()=>[e&&o(Ke,x({ref:U,selected:ie.value,selectStrategy:l.multiple?"independent":"single-independent",onMousedown:a=>a.preventDefault(),onKeydown:fe,onFocusin:Ve,onFocusout:ye,tabindex:"-1","aria-live":"polite",color:l.itemColor??l.color},re,l.listProps),{default:()=>{var a,s,m;return[(a=u["prepend-item"])==null?void 0:a.call(u),!k.value.length&&!l.hideNoData&&(((s=u["no-data"])==null?void 0:s.call(u))??o(Z,{key:"no-data",title:T(l.noDataText)},null)),o(Ue,{ref:L,renderless:!0,items:k.value},{default:d=>{var J;let{item:f,index:S,itemRef:p}=d;const G=x(f.props,{ref:p,key:f.value,active:B.value&&S===0?!0:void 0,onClick:()=>w(f,null)});return((J=u.item)==null?void 0:J.call(u,{item:f,index:S,props:G}))??o(Z,x(G,{role:"option"}),{prepend:P=>{let{isSelected:D}=P;return o(M,null,[l.multiple&&!l.hideSelected?o(ze,{key:f.value,modelValue:D,ripple:!1,tabindex:"-1"},null):void 0,f.props.prependAvatar&&o(qe,{image:f.props.prependAvatar},null),f.props.prependIcon&&o(Y,{icon:f.props.prependIcon},null)])},title:()=>{var P,D;return C.value?f.title:Qe(f.title,(P=se(f))==null?void 0:P.title,((D=v.value)==null?void 0:D.length)??0)}})}}),(m=u["append-item"])==null?void 0:m.call(u)]}})]}),n.value.map((a,s)=>{function m(p){p.stopPropagation(),p.preventDefault(),w(a,!1)}const d={"onClick:close":m,onKeydown(p){p.key!=="Enter"&&p.key!==" "||(p.preventDefault(),p.stopPropagation(),m(p))},onMousedown(p){p.preventDefault(),p.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},f=I.value?!!u.chip:!!u.selection,S=f?He(I.value?u.chip({item:a,index:s,props:d}):u.selection({item:a,index:s})):void 0;if(!(f&&!S))return o("div",{key:a.value,class:["v-autocomplete__selection",s===i.value&&["v-autocomplete__selection--selected",ue.value]],style:s===i.value?ne.value:{}},[I.value?u.chip?o($e,{key:"chip-defaults",defaults:{VChip:{closable:l.closableChips,size:"small",text:a.title}}},{default:()=>[S]}):o(We,x({key:"chip",closable:l.closableChips,size:"small",text:a.title,disabled:a.props.disabled},d),null):S??o("span",{class:"v-autocomplete__selection-text"},[a.title,l.multiple&&s<n.value.length-1&&o("span",{class:"v-autocomplete__selection-comma"},[Ge(",")])])])})]),"append-inner":function(){var d;for(var a=arguments.length,s=new Array(a),m=0;m<a;m++)s[m]=arguments[m];return o(M,null,[(d=u["append-inner"])==null?void 0:d.call(u,...s),l.menuIcon?o(Y,{class:"v-autocomplete__menu-icon",icon:l.menuIcon,onMousedown:de,onClick:Oe,"aria-label":T(W.value),title:T(W.value),tabindex:"-1"},null):void 0])}})}),_e({isFocused:y,isPristine:C,menu:c,search:v,filteredItems:O,select:w},h)}});export{Ze as V};
