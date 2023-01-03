import{u as q,r as o,s as n,f as p,as as N,at as H,aC as k,ah as D,Z as K,t as E,k as Q,E as P,T as se,_ as re,h as ue,o as I,c as B,d as $,a as w,w as L,aa as R,Q as ie,a9 as ce,a8 as de,a0 as ve,aD as F,a7 as fe}from"./index.b6be4404.js";import{u as T,a as z}from"./use-dark.6c95071a.js";import{u as U,a as G}from"./use-form.b547680f.js";import{Q as me}from"./QSeparator.b549cfd9.js";import{u as be,a as ge,b as ke,c as he}from"./use-panel.c8073603.js";import"./selection.27ab2460.js";function Z(e,s){const a=q(null),d=o(()=>e.disable===!0?null:n("span",{ref:a,class:"no-outline",tabindex:-1}));function u(f){const i=s.value;f!==void 0&&f.type.indexOf("key")===0?i!==null&&document.activeElement!==i&&i.contains(document.activeElement)===!0&&i.focus():a.value!==null&&(f===void 0||i!==null&&i.contains(f.target)===!0)&&a.value.focus()}return{refocusTargetEl:d,refocusTarget:u}}const J={xs:30,sm:35,md:40,lg:50,xl:60},_e=n("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24","aria-hidden":"true"},[n("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),n("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]),ye=p({name:"QRadio",props:{...T,...N,...U,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:s,emit:a}){const{proxy:d}=Q(),u=z(e,d.$q),f=H(e,J),i=q(null),{refocusTargetEl:c,refocusTarget:v}=Z(e,i),m=o(()=>k(e.modelValue)===k(e.val)),l=o(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(u.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),_=o(()=>{const r=e.color!==void 0&&(e.keepColor===!0||m.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${m.value===!0?"truthy":"falsy"}${r}`}),b=o(()=>(m.value===!0?e.checkedIcon:e.uncheckedIcon)||null),V=o(()=>e.disable===!0?-1:e.tabindex||0),g=o(()=>{const r={type:"radio"};return e.name!==void 0&&Object.assign(r,{"^checked":m.value===!0?"checked":void 0,name:e.name,value:e.val}),r}),y=G(g);function x(r){r!==void 0&&(P(r),v(r)),e.disable!==!0&&m.value!==!0&&a("update:modelValue",e.val,r)}function O(r){(r.keyCode===13||r.keyCode===32)&&P(r)}function j(r){(r.keyCode===13||r.keyCode===32)&&x(r)}return Object.assign(d,{set:x}),()=>{const r=b.value!==null?[n("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[n(D,{class:"q-radio__icon",name:b.value})])]:[_e];e.disable!==!0&&y(r,"unshift"," q-radio__native q-ma-none q-pa-none");const C=[n("div",{class:_.value,style:f.value},r)];c.value!==null&&C.push(c.value);const S=e.label!==void 0?K(s.default,[e.label]):E(s.default);return S!==void 0&&C.push(n("div",{class:"q-radio__label q-anchor--skip"},S)),n("div",{ref:i,class:l.value,tabindex:V.value,role:"radio","aria-label":e.label,"aria-checked":m.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:x,onKeydown:O,onKeyup:j},C)}}}),W={...T,...N,...U,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},X=["update:modelValue"];function Y(e,s){const{props:a,slots:d,emit:u,proxy:f}=Q(),{$q:i}=f,c=z(a,i),v=q(null),{refocusTargetEl:m,refocusTarget:l}=Z(a,v),_=H(a,J),b=o(()=>a.val!==void 0&&Array.isArray(a.modelValue)),V=o(()=>{const t=k(a.val);return b.value===!0?a.modelValue.findIndex(h=>k(h)===t):-1}),g=o(()=>b.value===!0?V.value>-1:k(a.modelValue)===k(a.trueValue)),y=o(()=>b.value===!0?V.value===-1:k(a.modelValue)===k(a.falseValue)),x=o(()=>g.value===!1&&y.value===!1),O=o(()=>a.disable===!0?-1:a.tabindex||0),j=o(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(a.disable===!0?" disabled":"")+(c.value===!0?` q-${e}--dark`:"")+(a.dense===!0?` q-${e}--dense`:"")+(a.leftLabel===!0?" reverse":"")),r=o(()=>{const t=g.value===!0?"truthy":y.value===!0?"falsy":"indet",h=a.color!==void 0&&(a.keepColor===!0||(e==="toggle"?g.value===!0:y.value!==!0))?` text-${a.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${t}${h}`}),C=o(()=>{const t={type:"checkbox"};return a.name!==void 0&&Object.assign(t,{"^checked":g.value===!0?"checked":void 0,name:a.name,value:b.value===!0?a.val:a.trueValue}),t}),S=G(C),ae=o(()=>{const t={tabindex:O.value,role:"checkbox","aria-label":a.label,"aria-checked":x.value===!0?"mixed":g.value===!0?"true":"false"};return a.disable===!0&&(t["aria-disabled"]="true"),t});function A(t){t!==void 0&&(P(t),l(t)),a.disable!==!0&&u("update:modelValue",le(),t)}function le(){if(b.value===!0){if(g.value===!0){const t=a.modelValue.slice();return t.splice(V.value,1),t}return a.modelValue.concat([a.val])}if(g.value===!0){if(a.toggleOrder!=="ft"||a.toggleIndeterminate===!1)return a.falseValue}else if(y.value===!0){if(a.toggleOrder==="ft"||a.toggleIndeterminate===!1)return a.trueValue}else return a.toggleOrder!=="ft"?a.trueValue:a.falseValue;return a.indeterminateValue}function te(t){(t.keyCode===13||t.keyCode===32)&&P(t)}function ne(t){(t.keyCode===13||t.keyCode===32)&&A(t)}const oe=s(g,x);return Object.assign(f,{toggle:A}),()=>{const t=oe();a.disable!==!0&&S(t,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const h=[n("div",{class:r.value,style:_.value},t)];m.value!==null&&h.push(m.value);const M=a.label!==void 0?K(d.default,[a.label]):E(d.default);return M!==void 0&&h.push(n("div",{class:`q-${e}__label q-anchor--skip`},M)),n("div",{ref:v,class:j.value,...ae.value,onClick:A,onKeydown:te,onKeyup:ne},h)}}const xe=n("div",{key:"svg",class:"q-checkbox__bg absolute"},[n("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24","aria-hidden":"true"},[n("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),n("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]),qe=p({name:"QCheckbox",props:W,emits:X,setup(e){function s(a,d){const u=o(()=>(a.value===!0?e.checkedIcon:d.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>u.value!==null?[n("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[n(D,{class:"q-checkbox__icon",name:u.value})])]:[xe]}return Y("checkbox",s)}}),pe=p({name:"QToggle",props:{...W,icon:String,iconColor:String},emits:X,setup(e){function s(a,d){const u=o(()=>(a.value===!0?e.checkedIcon:d.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),f=o(()=>a.value===!0?e.iconColor:null);return()=>[n("div",{class:"q-toggle__track"}),n("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},u.value!==void 0?[n(D,{name:u.value,color:f.value})]:void 0)]}return Y("toggle",s)}}),ee={radio:ye,checkbox:qe,toggle:pe},Ve=Object.keys(ee),Ce=p({name:"QOptionGroup",props:{...T,modelValue:{required:!0},options:{type:Array,validator:e=>e.every(s=>"value"in s&&"label"in s)},name:String,type:{default:"radio",validator:e=>Ve.includes(e)},color:String,keepColor:Boolean,dense:Boolean,size:String,leftLabel:Boolean,inline:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{emit:s,slots:a}){const{proxy:{$q:d}}=Q(),u=Array.isArray(e.modelValue);e.type==="radio"?u===!0&&console.error("q-option-group: model should not be array"):u===!1&&console.error("q-option-group: model should be array in your case");const f=z(e,d),i=o(()=>ee[e.type]),c=o(()=>"q-option-group q-gutter-x-sm"+(e.inline===!0?" q-option-group--inline":"")),v=o(()=>{const l={};return e.type==="radio"&&(l.role="radiogroup",e.disable===!0&&(l["aria-disabled"]="true")),l});function m(l){s("update:modelValue",l)}return()=>n("div",{class:c.value,...v.value},e.options.map((l,_)=>{const b=a["label-"+_]!==void 0?()=>a["label-"+_](l):a.label!==void 0?()=>a.label(l):void 0;return n("div",[n(i.value,{modelValue:e.modelValue,val:l.value,name:l.name===void 0?e.name:l.name,disable:e.disable||l.disable,label:b===void 0?l.label:null,leftLabel:l.leftLabel===void 0?e.leftLabel:l.leftLabel,color:l.color===void 0?e.color:l.color,checkedIcon:l.checkedIcon,uncheckedIcon:l.uncheckedIcon,dark:l.dark||f.value,size:l.size===void 0?e.size:l.size,dense:e.dense,keepColor:l.keepColor===void 0?e.keepColor:l.keepColor,"onUpdate:modelValue":m},b)])}))}}),Ie=p({name:"QTabPanel",props:be,setup(e,{slots:s}){return()=>n("div",{class:"q-tab-panel"},E(s.default))}}),Se=p({name:"QTabPanels",props:{...ge,...T},emits:ke,setup(e,{slots:s}){const a=Q(),d=z(e,a.proxy.$q),{updatePanelsList:u,getPanelContent:f,panelDirectives:i}=he(),c=o(()=>"q-tab-panels q-panel-parent"+(d.value===!0?" q-tab-panels--dark q-dark":""));return()=>(u(s),se("div",{class:c.value},f(),"pan",e.swipeable,()=>i.value))}});const Be={class:"practice"},$e={class:"q-pa-sm"},we={class:"row justify-between items-center"},Pe={class:"col-12"},Qe={key:0},Te={key:1},ze={__name:"Practice",props:{options:{type:Array,default:()=>[]},nonCode:{type:Boolean,default:!1}},setup(e){const s=e,a=q(""),d=q(null),u=q(!0),f=()=>{d.value.$el.querySelectorAll(".pre-wrap pre").forEach(c=>{c.closest(".pre-wrap")&&(c.closest(".pre-wrap").style.maxHeight=`${c.offsetHeight+10}px`)})};return ue(()=>{setTimeout(()=>{a.value=s.options.length>0?s.options[0].value:""},100)}),(i,c)=>(I(),B("div",Be,[$("div",$e,[$("div",we,[w(Ce,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=v=>a.value=v),inline:"",size:"xs",options:e.options,class:"q-mb-sm col"},{label:L(v=>[$("div",Pe,[e.nonCode?(I(),B("div",Qe,R(v.label),1)):(I(),B("code",Te,R(v.label),1))])]),_:1},8,["modelValue","options"]),$("div",null,[w(ie,{dense:"",round:"",flat:"",size:"sm",padding:"4px",icon:"code",onClick:c[1]||(c[1]=v=>u.value=!u.value)})])])]),w(me),w(Se,{ref_key:"panel",ref:d,class:fe(["panel q-px-sm q-pb-sm",u.value?"hide":""]),modelValue:a.value,"onUpdate:modelValue":c[2]||(c[2]=v=>a.value=v),onTransition:f,animated:"","transition-prev":"jump-down","transition-next":"jump-up"},{default:L(()=>[(I(!0),B(ce,null,de(e.options,v=>(I(),ve(Ie,{key:v.value,name:v.value},{default:L(()=>[F(i.$slots,v.value,{},void 0,!0)]),_:2},1032,["name"]))),128))]),_:3},8,["class","modelValue"]),F(i.$slots,"result",{},void 0,!0)]))}},Me=re(ze,[["__scopeId","data-v-c3c0737f"]]);export{Me as default};
