import{ai as v,X as C,c as s,d as e,a as t,w as o,a5 as a,a9 as b,a8 as f,e as n,ag as g,aj as h,a4 as i,o as d,Q as A,aa as m}from"./index.b6be4404.js";import{Q as w}from"./QSeparator.b549cfd9.js";import{u as l}from"./uid.42677368.js";import"./use-dark.6c95071a.js";const k={class:"q-px-md text-body2"},P=n("\uCEF4\uD3EC\uB10C\uD2B8 \uBD84\uB9AC\uD558\uAE30 "),S=n("\uC774\uBC88 \uCC55\uD130\uC5D0\uC11C\uB294 "),j=n(" \uC9C0\uB09C \uCC55\uD130"),I=n("\uC5D0\uC11C \uB9CC\uB4E4\uC5C8\uB358 \uBA64\uBC84 \uCE74\uB4DC\uB97C "),Q=e("em",null,"Member.vue",-1),E=n("\uB77C\uB294 \uC2F1\uAE00 \uD30C\uC77C \uCEF4\uD3EC\uB10C\uD2B8(SFC)\uB85C \uBD84\uB9AC\uD574 \uBCF4\uB3C4\uB85D \uD558\uACA0\uC2B5\uB2C8\uB2E4. "),V=e("p",null,[n("\uBA3C\uC800 "),e("em",null,"Member.vue"),n(" \uD30C\uC77C\uC744 \uC0DD\uC131\uD574 \uC90D\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 \uC9C0\uB09C\uBC88 \uC608\uC81C\uC5D0 \uC0AC\uC6A9\uD588\uB358 "),e("em",null,"QCard"),n(" \uBD80\uBD84\uC744 "),e("code",null,"<template>"),n("\uC548\uC5D0 \uBCF5\uC0AC \uBD99\uC5EC\uB123\uAE30 \uD574\uC90D\uB2C8\uB2E4. ")],-1),B=e("textarea",{readonly:""},`\r
<!-- Member.vue -->\r
\r
<script setup>\r
<\/script>\r
\r
<template>\r
  <q-card>\r
    <div class="text-center bg-primary text-white">\uBA64\uBC84</div>\r
    <q-card-section>\r
      <div>{{ m.name }}</div>\r
      <div>{{ m.team }}</div>\r
      <div>{{ m.contact }}</div>\r
    </q-card-section>\r
  </q-card>\r
</template>\r
    `,-1),L=e("p",null,[n("\uC774\uB984, \uD300 \uBA85, \uC5F0\uB77D\uCC98 \uC815\uBCF4\uB97C "),e("em",null,"props"),n("\uB85C \uC0C8\uB85C \uC815\uC758\uD574 \uBD05\uC2DC\uB2E4. \uC774 \uC815\uBCF4\uB4E4\uC740 "),e("em",null,"JSON"),n(" \uAC1D\uCCB4 \uC720\uD615\uC73C\uB85C \uADF8\uB8F9\uD654\uD574\uB3C4 \uB418\uC9C0\uB9CC \uC758\uBBF8\uB97C \uBA85\uD655\uD558\uAC8C \uD558\uAE30 \uC704\uD574 \uAC01\uAC01\uC758 props\uB97C \uB098\uB204\uC5B4 \uC815\uC758\uD558\uB3C4\uB85D \uD558\uACA0\uC2B5\uB2C8\uB2E4.")],-1),N=e("p",null,[e("em",null,"<script setup>"),n(" \uBB38\uBC95\uC5D0\uC11C\uB294 "),e("code",null,"defineProps"),n(" API\uB97C \uC774\uC6A9\uD574 props\uB97C \uC815\uC758\uD569\uB2C8\uB2E4.")],-1),T=e("textarea",{readonly:""},`\r
<!-- Member.vue -->\r
\r
<script setup>\r
const props = defineProps({\r
  mid: {\r
    type: String,\r
    required: true\r
  },\r
  name: {\r
    type: String,\r
    default: ''\r
  },\r
  team: {\r
    type: String,\r
    default: ''\r
  },\r
  contact: {\r
    type: String,\r
    default: ''\r
  }\r
})\r
<\/script>\r
\r
<template>\r
  <q-card>\r
    <div class="text-center bg-primary text-white">\uBA64\uBC84</div>\r
    <q-card-section>\r
      <div>{{ name }}</div>\r
      <div>{{ team }}</div>\r
      <div>{{ contact }}</div>\r
    </q-card-section>\r
  </q-card>\r
</template>\r
        `,-1),O=e("p",null,[n("\uC138 \uAC00\uC9C0 props\uC5D0 \uBA64\uBC84\uC758 \uACE0\uC733\uAC12\uC73C\uB85C \uC0AC\uC6A9\uD560 "),e("code",null,"mid"),n(" props\uB3C4 \uCD94\uAC00\uD574 \uC8FC\uC5C8\uC2B5\uB2C8\uB2E4.")],-1),D=e("p",null,[e("b",null,"Composition API"),n("\uC758 "),e("em",null,"<script setup>"),n(" \uBB38\uBC95\uC744 \uC0AC\uC6A9\uD560 \uACBD\uC6B0 "),e("b",null,"Option API"),n("\uB098 "),e("em",null,"setup()"),n(" \uAD6C\uBB38\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB358 \uD615\uC2DD \uB300\uC2E0\uC5D0 props\uB294 "),e("code",null,"defineProps"),n("\uB97C, emit\uC740 "),e("code",null,"defineEmits"),n("\uC744 "),e("strong",null,"\uBBF8\uB9AC \uC815\uC758"),n("\uD574\uC57C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ")],-1),F=g("<p>\uC774\uC81C \uAE30\uC874 \uCF54\uB4DC\uB85C \uB3CC\uC544\uAC00 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC704\uC5D0\uC11C \uB9CC\uB4E4\uC5B4 \uB454 <em>Member.vue</em>\uB97C \uD65C\uC6A9\uD574 \uBD05\uC2DC\uB2E4. \uBA3C\uC800 <code>defineAsyncComponent</code> API\uB97C \uC0AC\uC6A9\uD558\uC5EC Member \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 \uAE30\uC874 <em>QCard</em>\uAC00 \uC788\uB358 \uC790\uB9AC\uC5D0 Member \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC704\uCE58\uC2DC\uD0B5\uB2C8\uB2E4. \uB9C8\uC9C0\uB9C9\uC73C\uB85C <code>v-bind</code> \uB514\uB809\uD2F0\uBE0C\uB97C \uC774\uC6A9\uD574 \uAC01 \uBA64\uBC84 \uB370\uC774\uD130\uB4E4\uC744 \uCEF4\uD3EC\uB10C\uD2B8\uC758 props\uC5D0 \uBC14\uC778\uB529 \uD574\uC90D\uB2C8\uB2E4. (<code>:</code> = <code>v-bind</code> \uB514\uB809\uD2F0\uBE0C\uC758 \uCD95\uC57D\uD615)</p>",1),R=e("textarea",{readonly:""},`\r
<!-- App.vue -->\r
\r
<script setup>\r
`+m("import { reactive, defineAsyncComponent } from 'vue'")+`\r
`+m("import { uid } from 'quasar'")+`\r
\r
const members = reactive([\r
  { mid: uid(), name: '\uD64D\uAE38\uB3D9', team: '\uB514\uC790\uC778 \uD300', contact: '010-0000-0000' },\r
  { mid: uid(), name: '\uBDD4', team: '\uC5D4\uD130\uD14C\uC778\uBA3C\uD2B8 \uD300', contact: '010-1111-1111' },\r
  { mid: uid(), name: '\uC544\uC774\uC720', team: '\uAC00\uC218 \uD300', contact: '010-2222-2222' }\r
])\r
\r
// Member \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.\r
const Member = defineAsyncComponent(() => import('./Member.vue'))\r
<\/script>\r
  \r
<template>\r
  <div class="row q-col-gutter-lg">\r
    <div v-for="m in members" :key="m" class="col-6 col-md-4">\r
      <Member :mid="m.mid" :name="m.name" :team="m.team" :contact="m.contact" />\r
    </div>\r
  </div>\r
</template>\r
        `,-1),J=e("b",null,"\uACB0\uACFC",-1),X={class:"row q-col-gutter-lg"},z=e("p",{class:"q-py-lg"},null,-1),G=e("p",null,"\uBA64\uBC84 \uCE74\uB4DC\uB97C \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uBD84\uB9AC\uD558\uACE0 \uB098\uB2C8 \uCF54\uB4DC\uAC00 \uC880 \uB354 \uC815\uB3C8\uB41C \uB290\uB08C\uC744 \uC90D\uB2C8\uB2E4. ",-1),H=e("p",null,[n("\uC704\uC5D0\uC11C \uC124\uBA85\uD558\uC9C0 \uC54A\uC740 \uCF54\uB4DC\uB3C4 \uBCF4\uC774\uB294\uAD70\uC694(uid). "),e("code",null,"uid"),n("\uB294 Quasar\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uC77C\uC885\uC758 \uACE0\uC720 \uC544\uC774\uB514 \uC0DD\uC131 \uC720\uD2F8\uC785\uB2C8\uB2E4. \uC0AC\uC6A9\uBC95\uC740 \uBA54\uC11C\uB4DC \uD615\uD0DC\uB85C \uD638\uCD9C\uD558\uAC8C \uB418\uBA74 "),e("em",null,"501e7ae1-7e6f-b923-3e84-4e946bff31a8"),n("\uC640 \uAC19\uC740 \uC784\uC758 \uBB38\uC790\uC5F4\uC744 \uBC18\uD658\uD574 \uC90D\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uC5D0\uAC8C\uB294 \uBCF4\uC774\uC9C0 \uC54A\uC9C0\uB9CC \uAC01 \uCEF4\uD3EC\uB10C\uD2B8\uB9C8\uB2E4 \uACE0\uC720\uD55C \uC544\uC774\uB514\uB97C \uAC16\uAC8C \uB41C \uC148\uC774\uC8E0. \uACE0\uC720 \uC544\uC774\uB514\uB294 \uC774\uC5B4\uC9C0\uB294 \uCC55\uD130\uC5D0\uC11C \uC544\uC8FC \uC720\uC6A9\uD558\uAC8C \uC0AC\uC6A9\uB420 \uC608\uC815\uC785\uB2C8\uB2E4. ")],-1),K=e("textarea",{readonly:""},`\r
// \uAC04\uB2E8\uD55C uid \uC720\uD2F8 \uC0AC\uC6A9\uBC95\r
\r
`+m("import { uid } from 'quasar'")+`\r
\r
let uid = uid()\r
// \uC608: 501e7ae1-7e6f-b923-3e84-4e946bff31a8\r
        `,-1),U=e("p",null,"\uCEF4\uD3EC\uB10C\uD2B8 \uBD84\uB9AC \uC791\uC5C5\uC774 \uAC04\uB2E8\uD558\uAC8C \uB9C8\uBB34\uB9AC \uB418\uC5C8\uC73C\uB2C8 \uC0C8 \uBA64\uBC84 \uCE74\uB4DC\uB97C \uCD94\uAC00\uD558\uB294 \uB85C\uC9C1\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uBA3C\uC800 \uB9AC\uC2A4\uD2B8 \uC0C1\uB2E8\uC5D0 \uBC84\uD2BC\uC744 \uCD94\uAC00 \uD574\uBD05\uC2DC\uB2E4.",-1),W=e("textarea",{readonly:""},`\r
<!-- App.vue -->\r
\r
<script setup>\r
`+m("import { reactive, defineAsyncComponent } from 'vue'")+`\r
`+m("import { uid } from 'quasar'")+`\r
\r
const members = reactive([\r
  { mid: uid(), name: '\uD64D\uAE38\uB3D9', team: '\uB514\uC790\uC778 \uD300', contact: '010-0000-0000' },\r
  { mid: uid(), name: '\uBDD4', team: '\uC5D4\uD130\uD14C\uC778\uBA3C\uD2B8 \uD300', contact: '010-1111-1111' },\r
  { mid: uid(), name: '\uC544\uC774\uC720', team: '\uAC00\uC218 \uD300', contact: '010-2222-2222' }\r
])\r
\r
// Member \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.\r
const Member = defineAsyncComponent(() => import('./Member.vue'))\r
  \r
// Member\uB97C \uCD94\uAC00\uD558\uB294 \uBA54\uC11C\uB4DC\r
const addMember = () => {\r
  members.unshift({ mid: uid(), name: '', team: '', contact: '' })\r
}\r
<\/script>\r
  \r
<template>\r
  <div class="row justify-end q-pb-sm">\r
    <q-btn dense icon="add" round color="positive" @click="addMember" />\r
  </div>\r
  <div class="row q-col-gutter-lg">\r
    <div v-for="m in members" :key="m" class="col-6 col-md-4">\r
      <Member :mid="m.mid" :name="m.name" :team="m.team" :contact="m.contact" />\r
    </div>\r
  </div>\r
</template>\r
        `,-1),Y=g("<p>\uCD94\uAC00\uB418\uB294 \uBC84\uD2BC\uC774 \uBA64\uBC84 \uB9AC\uC2A4\uD2B8 \uC6B0\uCE21 \uC0C1\uB2E8\uC5D0 \uC704\uCE58\uD558\uB3C4\uB85D <em>div</em> \uC694\uC18C(\uC0C1\uC704 \uC694\uC18C)\uC5D0 <code>row justify-end</code> \uD074\uB798\uC2A4\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4. \uADF8 \uC548\uC5D0 <em>QBtn</em> \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uCD94\uAC00\uD558\uACE0 click \uC774\uBCA4\uD2B8\uC5D0 \uBA64\uBC84\uB97C \uCD94\uAC00\uD558\uB294 \uBA54\uC11C\uB4DC \uD578\uB4E4\uB7EC(addMember)\uB97C \uC815\uC758\uD574 \uBD05\uC2DC\uB2E4. </p><p><code>addMember</code> \uD578\uB4E4\uB7EC\uB294 \uBA64\uBC84 \uB9AC\uC2A4\uD2B8 \uAC1D\uCCB4(\uBC18\uC751\uD615)\uC758 \uB9E8 \uC55E\uCABD\uC5D0 \uC0C8 \uBA64\uBC84 \uB370\uC774\uD130\uB97C \uCD94\uAC00\uD558\uB294 \uAC04\uB2E8\uD55C \uB85C\uC9C1\uC73C\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4(\uACE0\uC720 \uC544\uC774\uB514 - <em>mid</em>\uB294 \uBBF8\uB9AC \uC815\uC758\uB41C \uC0C1\uD0DC). </p><p>\uC544\uB798 \uBA64\uBC84 \uCD94\uAC00 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD574\uBCF4\uC138\uC694!</p><b>\uACB0\uACFC</b>",4),Z={class:"row justify-end q-pb-sm"},$={class:"row q-col-gutter-lg"},ee=e("p",{class:"q-py-lg"},null,-1),ne=e("p",null,"\uBC84\uD2BC\uC744 \uB204\uB97C \uB54C\uB9C8\uB2E4 \uC55E\uCABD\uC5D0 \uBA64\uBC84 \uCE74\uB4DC\uAC00 \uD55C \uC7A5\uC529 \uCD94\uAC00\uB429\uB2C8\uB2E4.(\uBB3C\uB860 \uBE48 \uAC12\uC744 \uB123\uC5C8\uC73C\uB2C8 \uB0B4\uC6A9\uC774 \uC5C6\uB294 \uBA64\uBC84 \uCE74\uB4DC\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.)",-1),te=e("p",null,[n("\uB2E4\uC74C \uCC55\uD130\uC5D0\uC11C\uB294 "),e("b",null,"\uBA64\uBC84 \uCE74\uB4DC\uB97C \uC218\uC815"),n("\uD558\uB294 \uAE30\uB2A5\uC744 \uB9CC\uB4E4\uC5B4\uBCF4\uB3C4\uB85D \uD558\uACA0\uC2B5\uB2C8\uB2E4.")],-1),re=e("div",{class:"q-py-xl"},null,-1),oe={class:"row justify-between items-cetner"},ue={__name:"Comp",setup(ae){const c=v(()=>h(()=>import("./Code.fe4e34ed.js"),["assets/Code.fe4e34ed.js","assets/Code.2d671ef5.css","assets/index.b6be4404.js","assets/index.e8e7ed18.css"])),p=v(()=>h(()=>import("./CComp.a72c313a.js"),["assets/CComp.a72c313a.js","assets/QCard.b8d52c6e.js","assets/index.b6be4404.js","assets/index.e8e7ed18.css","assets/use-dark.6c95071a.js"])),u=C([{mid:l(),name:"\uD64D\uAE38\uB3D9",team:"\uB514\uC790\uC778 \uD300",contact:"010-0000-0000"},{mid:l(),name:"\uBDD4",team:"\uC5D4\uD130\uD14C\uC778\uBA3C\uD2B8 \uD300",contact:"010-1111-1111"},{mid:l(),name:"\uC544\uC774\uC720",team:"\uAC00\uC218 \uD300",contact:"010-2222-2222"}]),y=()=>{u.unshift({mid:l(),name:"",team:"",contact:""})};return(ce,se)=>{const q=i("Title"),M=i("Link"),x=i("Info"),_=i("Move");return d(),s("div",k,[e("section",null,[t(q,{head:""},{default:o(()=>[P]),_:1}),e("p",null,[S,t(M,{to:{name:"card"}},{default:o(()=>[j]),_:1}),I,Q,E]),V,t(a(c),{class:"q-mb-lg",language:"html",convert:{html:"vue"}},{default:o(()=>[B]),_:1}),L,N,t(a(c),{class:"q-mb-lg",language:"html",convert:{html:"vue"}},{default:o(()=>[T]),_:1}),O,t(x,{advice:"",color:"teal-4"},{default:o(()=>[D]),_:1}),F,t(a(c),{class:"q-mb-lg",language:"html",convert:{html:"vue"}},{default:o(()=>[R]),_:1}),J,e("div",X,[(d(!0),s(b,null,f(u,r=>(d(),s("div",{key:r,class:"col-6 col-md-4"},[t(a(p),{mid:r.mid,name:r.name,team:r.team,contact:r.contact},null,8,["mid","name","team","contact"])]))),128))]),z,G,H,t(a(c),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[K]),_:1}),U,t(a(c),{class:"q-mb-lg",language:"html",convert:{html:"vue"}},{default:o(()=>[W]),_:1}),Y,e("div",Z,[t(A,{dense:"",icon:"add",round:"",color:"positive",onClick:y})]),e("div",$,[(d(!0),s(b,null,f(u,r=>(d(),s("div",{key:r,class:"col-6 col-md-4"},[t(a(p),{mid:r.mid,name:r.name,team:r.team,contact:r.contact},null,8,["mid","name","team","contact"])]))),128))]),ee,ne,te]),re,t(w,{class:"q-mb-lg"}),e("div",null,[e("div",oe,[t(_,{label:"\uCE74\uB4DC \uB9CC\uB4E4\uAE30",prev:"",to:{name:"card"}}),t(_,{label:"\uCE74\uB4DC \uC218\uC815\uD558\uAE30",next:"",to:{name:"edit"}})])])])}}};export{ue as default};
