import{ai as g,X as C,c as p,d as e,a as t,w as a,a5 as i,a9 as w,a8 as I,e as n,ag as A,aj as q,a4 as v,o,Q as d,a0 as f,aa as s}from"./index.b6be4404.js";import{Q as j}from"./QSeparator.b549cfd9.js";import{u as l}from"./uid.42677368.js";import"./use-dark.6c95071a.js";const P={class:"q-px-md text-body2"},V=n("\uCE74\uB4DC \uC218\uC815\uD558\uAE30 "),D=n("\uC774\uBC88 \uCC55\uD130\uC5D0\uC11C\uB294 "),L=n(" \uC9C0\uB09C \uCC55\uD130"),T=n("\uC5D0\uC11C \uBD84\uB9AC\uD55C \uBA64\uBC84 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uC218\uC815 \uAE30\uB2A5\uC744 \uCD94\uAC00\uD574 \uBCF4\uB3C4\uB85D \uD558\uACA0\uC2B5\uB2C8\uB2E4. "),O={id:"editable","data-name":"\uC218\uC815 \uBAA8\uB4DC \uB9CC\uB4E4\uAE30"},N=n("\uC218\uC815 \uBAA8\uB4DC \uB9CC\uB4E4\uAE30"),$=e("p",null,[n("\uC9C0\uB09C \uCC55\uD130\uC5D0 \uB9CC\uB4E0 "),e("em",null,"Member.vue"),n(' \uD30C\uC77C\uC744 \uC5F4\uC5B4 "\uC218\uC815 \uBAA8\uB4DC"\uB97C \uCD94\uAC00\uD558\uAE30 \uC704\uD574 '),e("em",null,"Boolean"),n(" \uC720\uD615\uC758 "),e("code",null,"editable"),n(" props\uB97C \uC0C8\uB85C \uC815\uC758\uD574 \uC90D\uB2C8\uB2E4. \uBA64\uBC84 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB294 \uD398\uC774\uC9C0\uB098 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 "),e("code",null,"editable"),n(" props\uB97C \uBCC0\uACBD\uD558\uBA74 \uBA64\uBC84 \uCE74\uB4DC\uB97C \uAD6C\uC131\uD558\uB294 DOM \uC694\uC18C\uAC00 \uC218\uC815 \uAC00\uB2A5 \uC0C1\uD0DC\uC784\uC744 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC54C\uB824\uC8FC\uAE30 \uC704\uD55C \uD654\uBA74 \uCC98\uB9AC\uB3C4 \uD568\uAED8 \uC801\uC6A9\uD574 \uBCF4\uB3C4\uB85D \uD558\uACA0\uC2B5\uB2C8\uB2E4. ")],-1),R=e("textarea",{readonly:""},`\r
<!-- Member.vue -->\r
\r
<script setup>\r
import { ref } from 'vue'\r
\r
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
  },\r
  // \uC218\uC815 \uBAA8\uB4DC\uB97C \uBCC0\uACBD\uD558\uAE30 \uC704\uD55C props\r
  editable: {\r
    type: Boolean,\r
    default: false\r
  }\r
})\r
\r
// \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uBD80\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uBA64\uBC84 \uB370\uC774\uD130\r
const _name = ref(props.name)\r
const _team = ref(props.team)\r
const _contact = ref(props.contact)\r
<\/script>\r
    \r
<template>\r
  <q-card>\r
    <div class="text-center bg-primary text-white">\uBA64\uBC84</div>\r
    <q-card-section>\r
      <q-input v-model="_name" :readonly="!editable" dense :borderless="!editable" />\r
      <q-input v-model="_team" :readonly="!editable" dense :borderless="!editable" />\r
      <q-input v-model="_contact" :readonly="!editable" dense :borderless="!editable" />\r
    </q-card-section>\r
  </q-card>\r
</template>\r
        `,-1),F=A("<p>\uD14D\uC2A4\uD2B8 \uBCF4\uAC04(<em>{{ name }}</em> - \uC77C\uBA85 mustache syntax)\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC815\uBCF4\uB97C \uBC14\uC778\uB529 \uD558\uB358 \uBD80\uBD84\uC744 Quasar\uC758 <em>QInput</em> \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uBCC0\uACBD\uD574 \uC8FC\uC5C8\uC2B5\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 props\uB85C \uC804\uB2EC\uBC1B\uC740 \uC815\uBCF4\uB4E4\uC744 \uCD08\uAE43\uAC12\uC73C\uB85C \uD558\uB294 \uC0C8\uB85C\uC6B4 \uBC18\uC751\uD615 \uAC1D\uCCB4\uB4E4\uC744 \uAC01 <em>QInput</em> \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 v-model\uB85C \uBC14\uC778\uB529 \uD574\uC8FC\uC5C8\uACE0, \uBA64\uBC84 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC218\uC815 \uAC00\uB2A5 \uC0C1\uD0DC\uAC00 \uBC14\uB010\uB2E4\uB294 \uAC83\uC744 \uBA85\uC2DC\uD558\uAE30 \uC704\uD574 <em>QInput</em>\uC758 <code>readonly</code>\uC640 <code>borderless</code>\uB97C <code>editable</code> props\uB85C \uBC14\uC778\uB529 \uD574\uC8FC\uC5C8\uC2B5\uB2C8\uB2E4. (readonly\uC640 borderless\uB294 \uB2E8\uC5B4 \uADF8\uB300\uB85C editable props\uC5D0 \uB530\uB978 DOM \uC694\uC18C\uC758 \uC77D\uAE30 \uC804\uC6A9 \uC18D\uC131 \uBC0F \uD14C\uB450\uB9AC \uD45C\uC2DC \uC804\uD658 \uC0C1\uD0DC\uB97C \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.) </p>",1),U=e("p",null,[e("b",null,[n("\uC65C props\uB85C \uC804\uB2EC\uB41C \uC815\uBCF4 \uAC12\uB4E4\uC744 \uBC14\uB85C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uACE0 "),e("em",null,"_name"),n("\uACFC \uAC19\uC740 \uC0C8 \uBCC0\uC218\uC5D0 \uD560\uB2F9\uD574 \uC8FC\uC5C8\uC744\uAE4C\uC694?")])],-1),X=e("p",null,[e("span",{class:"text-green-7"},"vue.js"),n("\uC5D0\uC11C\uB294 "),e("strong",null,"\uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8 \uC0AC\uC774\uC5D0 \uC804\uB2EC\uB418\uB294 \uBAA8\uB4E0 props \uAC12\uC774 \uB2E8\uBC29\uD5A5\uC73C\uB85C \uCC98\uB9AC\uB429\uB2C8\uB2E4(\uBD80\uBAA8 \u2192 \uC790\uC2DD)"),n(". \uB9CC\uC57D \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC804\uB2EC\uBC1B\uC740 props\uC758 \uBCC0\uACBD(Mutation)\uC744 \uC2DC\uB3C4\uD558\uB294 \uACBD\uC6B0 \uCF58\uC194 \uCC3D\uC5D0 \uACBD\uACE0\uB97C \uD45C\uC2DC\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.")],-1),G=e("p",null,"\uC774\uC81C \uC218\uC815 \uBAA8\uB4DC\uAC00 \uCD94\uAC00\uB41C \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC815\uC0C1\uC801\uC73C\uB85C \uB3D9\uC791\uD558\uB294\uC9C0 \uD655\uC778\uD574 \uBD05\uC2DC\uB2E4. ",-1),H=e("p",null,[n("\uBA3C\uC800 \uBA64\uBC84 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB294 \uC0C1\uC704 \uD398\uC774\uC9C0\uB85C \uB3CC\uC544\uAC00 \uBA64\uBC84 \uB370\uC774\uD130\uC5D0 \uC218\uC815 \uC5EC\uBD80 \uAC12("),e("em",null,"editable: false"),n(")\uC744 \uCD94\uAC00\uD558\uACE0, \uCE74\uB4DC \uC0C1\uB2E8\uC5D0 \uC218\uC815 \uC0C1\uD0DC \uBCC0\uACBD \uBC84\uD2BC\uB3C4 \uCD94\uAC00\uD574 \uC90D\uC2DC\uB2E4.")],-1),J=e("textarea",{readonly:""},`\r
<!-- App.vue -->\r
\r
<script setup>\r
`+s("import { reactive, defineAsyncComponent } from 'vue'")+`\r
`+s("import { uid } from 'quasar'")+`\r
\r
const members = reactive([\r
  { mid: uid(), name: '\uD64D\uAE38\uB3D9', team: '\uB514\uC790\uC778 \uD300', contact: '010-0000-0000', editable: false },\r
  { mid: uid(), name: '\uBDD4', team: '\uC5D4\uD130\uD14C\uC778\uBA3C\uD2B8 \uD300', contact: '010-1111-1111', editable: false },\r
  { mid: uid(), name: '\uC544\uC774\uC720', team: '\uAC00\uC218 \uD300', contact: '010-2222-2222', editable: false }\r
])\r
\r
// Member \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.\r
const Member = defineAsyncComponent(() => import('./Member.vue'))\r
\r
// Member\uB97C \uCD94\uAC00\uD558\uB294 \uBA54\uC11C\uB4DC\r
const addMember = () => {\r
  members.unshift({ mid: uid(), name: '', team: '', contact: '', editable: '' })\r
}\r
<\/script>\r
    \r
<template>\r
  <div class="row justify-end q-pb-sm">\r
    <q-btn dense icon="add" round color="positive" @click="addMember" />\r
  </div>\r
  <div class="row q-col-gutter-lg">\r
    <div v-for="m in members" :key="m" class="col-6 col-md-4">\r
      <!-- \uC218\uC815 \uBAA8\uB4DC \uBCC0\uACBD\uC744 \uC704\uD574 \uBC84\uD2BC \uCD94\uAC00 -->\r
      <q-btn v-if="!m.editable" unelevated dense flat size="sm" color="grey" icon="edit" @click="m.editable = true" />\r
      <q-btn v-else unelevated dense round size="sm" color="primary" icon="check" @click="m.editable = false" />\r
      <Member :mid="m.mid" :name="m.name" :team="m.team" :contact="m.contact" :editable="m.editable" />\r
    </div>\r
  </div>\r
</template>\r
        `,-1),K=e("b",null,"\uACB0\uACFC",-1),W={class:"row justify-end q-pb-sm"},Y={class:"row q-col-gutter-lg"},Z=e("p",{class:"q-py-lg"},null,-1),ee=n("\uAC01 \uCE74\uB4DC\uC758 \uC0C1\uB2E8 "),ne=n(" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 \uD574\uB2F9 \uBA64\uBC84 \uCE74\uB4DC \uC815\uBCF4\uAC00 \uC218\uC815 \uC0C1\uD0DC\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4 ( "),te=n(" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 \uC218\uC815 \uBAA8\uB4DC\uAC00 \uBE44\uD65C\uC131\uD654\uB429\uB2C8\uB2E4). \uC0AC\uC6A9\uC790 \uC785\uC7A5\uC5D0\uC11C\uB294 \uBAA8\uB4E0 \uAE30\uB2A5\uC774 \uC815\uC0C1\uC801\uC73C\uB85C \uB3D9\uC791\uD558\uB294 \uAC83\uCC98\uB7FC \uBCF4\uC774\uC9C0\uB9CC \uB370\uC774\uD130(:\uC544\uB798)\uB97C \uD655\uC778\uD574 \uBCF4\uBA74 "),re=e("b",null,"\uD654\uBA74\uC0C1\uC5D0\uC11C \uC218\uC815\uB41C \uAC12\uB4E4\uC774 \uC2E4\uC81C\uB85C \uC801\uC6A9\uB418\uC9C0 \uC54A\uC740 \uAC83",-1),ae=n("\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4 (\uBA64\uBC84 \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uBD80\uC801\uC73C\uB85C \uC804\uB2EC\uBC1B\uC740 props\uB97C \uCD08\uAE43\uAC12\uC73C\uB85C \uD558\uB294 \uC0C8 \uBC18\uC751\uD615 \uAC1D\uCCB4\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC788\uAE30 \uB54C\uBB38). "),oe=e("p",null,[e("b",null,"Member \uB370\uC774\uD130")],-1),de={id:"apply","data-name":"\uC218\uC815 \uB370\uC774\uD130 \uC801\uC6A9\uD558\uAE30"},le=n("\uC218\uC815 \uB370\uC774\uD130 \uC801\uC6A9\uD558\uAE30"),se=e("p",null,[n("\uC774\uC81C \uBA64\uBC84 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uC218\uC815\uB41C \uB370\uC774\uD130\uB97C \uC0C1\uC704 \uD398\uC774\uC9C0\uC5D0\uC11C \uC2E4\uC81C\uB85C \uC801\uC6A9\uD558\uB294 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uB3C4\uB85D \uD558\uACA0\uC2B5\uB2C8\uB2E4. \uBA64\uBC84 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uBCF4\uAC00 \uC5C5\uB370\uC774\uD2B8\uB418\uBA74 "),e("code",null,"defineEmits"),n(" API\uB97C \uC774\uC6A9\uD574 \uBBF8\uB9AC "),e("em",null,"@update"),n(" \uC774\uBCA4\uD2B8\uB97C \uC815\uC758\uD574 \uB461\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 \uAC01 \uBA64\uBC84 \uB370\uC774\uD130\uC758 \uAC12\uC774 \uBCC0\uACBD\uB418\uBA74 @update\uB97C \uD638\uCD9C\uD558\uACE0, \uC0C1\uC704 \uD398\uC774\uC9C0\uC5D0\uC11C "),e("em",null,"@update"),n("\uB85C \uBC14\uC778\uB529 \uB41C \uC774\uBCA4\uD2B8\uB97C \uC2E4\uD589\uD574\uC11C \uC2E4\uC81C \uB370\uC774\uD130\uB97C \uC5C5\uB370\uC774\uD2B8\uD574 \uC8FC\uBA74 \uB429\uB2C8\uB2E4. ")],-1),ie=e("textarea",{readonly:""},`\r
<!-- Member.vue -->\r
\r
<script setup>\r
`+s("import { ref } from 'vue'")+`\r
\r
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
  },\r
  // \uC218\uC815 \uBAA8\uB4DC\uB97C \uBCC0\uACBD\uD558\uAE30 \uC704\uD55C props\r
  editable: {\r
    type: Boolean,\r
    default: false\r
  }\r
})\r
\r
// emits \uC744 \uC815\uC758\uD574 \uC90D\uB2C8\uB2E4.\r
const emit = defineEmits(['update'])\r
\r
// \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uBD80\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uBA64\uBC84 \uB370\uC774\uD130\r
const _name = ref(props.name)\r
const _team = ref(props.team)\r
const _contact = ref(props.contact)\r
<\/script>\r
    \r
<template>\r
  <q-card>\r
    <div class="text-center bg-primary text-white">\uBA64\uBC84</div>\r
    <q-card-section>\r
      <!-- \r
        @update:model-value \uC774\uBCA4\uD2B8\uB85C QInput\uC5D0 \uBC14\uC778\uB529 \uB41C \uB370\uC774\uD130\uAC00 \uBCC0\uACBD\uB418\uBA74 \r
        \uC0C1\uC704 \uCEF4\uD3EC\uB10C\uD2B8\uC758 @update\uB85C \uBCC0\uACBD\uB41C \uC815\uBCF4\uB97C \uC804\uB2EC\uD574 \uC90D\uB2C8\uB2E4 \r
      -->\r
      <q-input v-model="_name" :readonly="!editable" dense :borderless="!editable"\r
        @update:model-value="val => emit('update', props.mid,'name', val)" />\r
      <q-input v-model="_team" :readonly="!editable" dense :borderless="!editable"\r
        @update:model-value="val => emit('update', props.mid,'team', val)" />\r
      <q-input v-model="_contact" :readonly="!editable" dense :borderless="!editable"\r
        @update:model-value="val => emit('update', props.mid,'contact', val)" />\r
    </q-card-section>\r
  </q-card>\r
</template>\r
        `,-1),ce=e("p",null,[n("\uBA64\uBC84 \uCEF4\uD3EC\uB10C\uD2B8 "),e("em",null,"QInput"),n("\uC758 "),e("em",null,"@update:model-value"),n(" \uC774\uBCA4\uD2B8\uB85C \uBC14\uC778\uB529 \uB41C \uB370\uC774\uD130\uAC00 \uBCC0\uACBD\uB418\uBA74 \uC0C1\uC704 \uCEF4\uD3EC\uB10C\uD2B8\uC758 @update\uB85C \uBCC0\uACBD\uB41C \uC815\uBCF4\uB97C \uC804\uB2EC\uD574 \uC90D\uB2C8\uB2E4 (\uBA64\uBC84\uC758 \uACE0\uC720 \uC544\uC774\uB514, \uBCC0\uACBD\uB418\uB294 \uD56D\uBAA9, \uBCC0\uACBD \uAC12).")],-1),me=e("textarea",{readonly:""},`\r
<!-- App.vue -->\r
\r
<script setup>\r
`+s("import { reactive, defineAsyncComponen } from 'vue'")+`\r
`+s("import { uid } from 'quasar'")+`\r
\r
const members = reactive([\r
  { mid: uid(), name: '\uD64D\uAE38\uB3D9', team: '\uB514\uC790\uC778 \uD300', contact: '010-0000-0000', editable: false },\r
  { mid: uid(), name: '\uBDD4', team: '\uC5D4\uD130\uD14C\uC778\uBA3C\uD2B8 \uD300', contact: '010-1111-1111', editable: false },\r
  { mid: uid(), name: '\uC544\uC774\uC720', team: '\uAC00\uC218 \uD300', contact: '010-2222-2222', editable: false }\r
])\r
\r
// Member \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.\r
const Member = defineAsyncComponent(() => import('./Member.vue'))\r
\r
// Member\uB97C \uCD94\uAC00\uD558\uB294 \uBA54\uC11C\uB4DC\r
const addMember = () => {\r
  members.unshift({ mid: uid(), name: '', team: '', contact: '', editable: false })\r
}\r
\r
// Member \uC815\uBCF4\uB97C \uC218\uC815\uD558\uB294 \uBA54\uC11C\uB4DC\r
const update = (mid, key, val) => {\r
  const findMember = members.find(m => m.mid === mid)\r
\r
  if (findMember)\r
    findMember[key] = val\r
}\r
<\/script>\r
      \r
<template>\r
  <div class="row justify-end q-pb-sm">\r
    <q-btn dense icon="add" round color="positive" @click="addMember" />\r
  </div>\r
  <div class="row q-col-gutter-lg">\r
    <div v-for="m in members" :key="m" class="col-6 col-md-4">\r
      <!-- \uC218\uC815 \uBAA8\uB4DC \uBCC0\uACBD\uC744 \uC704\uD574 \uBC84\uD2BC \uCD94\uAC00 -->\r
      <q-btn v-if="!m.editable" unelevated dense flat size="sm" color="grey" icon="edit" @click="m.editable = true" />\r
      <q-btn v-else unelevated dense round size="sm" color="primary" icon="check" @click="m.editable = false" />\r
      <!-- @update \uC774\uBCA4\uD2B8\uB97C \uBC14\uC778\uB529 -->\r
      <Member :mid="m.mid" :name="m.name" :team="m.team" :contact="m.contact" :editable="m.editable" @update="update" />\r
    </div>\r
  </div>\r
  <Info>\r
    <p><b>Member \uB370\uC774\uD130</b></p>\r
    <p>\r
      {{members}}\r
    </p>\r
  </Info>\r
</template>\r
        `,-1),pe=A("<p>\uBA64\uBC84 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uD638\uCD9C\uB41C <em>@update</em>\uB97C \uCC98\uB9AC\uD560 <code>update</code> \uBA54\uC11C\uB4DC\uB97C \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4. <code>update</code> \uBA54\uC11C\uB4DC\uB294 <code>memebers</code> \uAC1D\uCCB4\uC5D0\uC11C \uC804\uB2EC\uBC1B\uC740 \uACE0\uC720\uC758 <em>mid</em> \uAC12\uC758 \uBA64\uBC84\uAC00 \uC874\uC7AC\uD558\uBA74 \uD574\uB2F9 \uBA64\uBC84\uC758 \uB370\uC774\uD130\uB97C \uC5C5\uB370\uC774\uD2B8\uD574\uC90D\uB2C8\uB2E4. </p><p>\uD604\uC7AC\uAE4C\uC9C0 \uC791\uC131\uB41C \uCF54\uB4DC\uAC00 \uC798 \uB3D9\uC791\uD558\uB294\uC9C0 \uD14C\uC2A4\uD2B8\uD574 \uBD05\uC2DC\uB2E4. \uCE74\uB4DC\uC758 \uBA64\uBC84 \uD56D\uBAA9\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uBA74 \uC2E4\uC81C <code>members</code> \uAC1D\uCCB4\uB3C4 \uD568\uAED8 \uC5C5\uB370\uC774\uD2B8\uB418\uB294 \uAC83\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><b>\uACB0\uACFC</b>",3),ue={class:"row justify-end q-pb-sm"},be={class:"row q-col-gutter-lg"},_e=e("p",{class:"q-py-lg"},null,-1),ve=e("p",null,[e("b",null,"Member \uB370\uC774\uD130")],-1),fe=e("p",null,[n("\uB2E4\uC74C \uCC55\uD130\uC5D0\uC11C\uB294 "),e("b",null,"\uBA64\uBC84 \uCE74\uB4DC \uC815\uBCF4\uB97C \uC2E4\uC81C \uC800\uC7A5\uC18C(\uC138\uC158 \uC2A4\uD1A0\uB9AC\uC9C0)\uC5D0 \uC800\uC7A5"),n("\uD558\uB294 \uC791\uC5C5\uC744 \uC9C4\uD589\uD574 \uBCF4\uB3C4\uB85D \uD558\uACA0\uC2B5\uB2C8\uB2E4.")],-1),he=e("div",{class:"q-py-xl"},null,-1),ye={class:"row justify-between items-cetner"},Ce={__name:"Edit",setup(ge){const u=g(()=>q(()=>import("./Code.fe4e34ed.js"),["assets/Code.fe4e34ed.js","assets/Code.2d671ef5.css","assets/index.b6be4404.js","assets/index.e8e7ed18.css"])),S=g(()=>q(()=>import("./CEdit.783b03db.js"),["assets/CEdit.783b03db.js","assets/QInput.88f63f3d.js","assets/index.b6be4404.js","assets/index.e8e7ed18.css","assets/use-dark.6c95071a.js","assets/format.801e7424.js","assets/uid.42677368.js","assets/use-form.b547680f.js","assets/QCard.b8d52c6e.js"])),z=g(()=>q(()=>import("./CEdit2.7102e5dd.js"),["assets/CEdit2.7102e5dd.js","assets/QInput.88f63f3d.js","assets/index.b6be4404.js","assets/index.e8e7ed18.css","assets/use-dark.6c95071a.js","assets/format.801e7424.js","assets/uid.42677368.js","assets/use-form.b547680f.js","assets/QCard.b8d52c6e.js"])),h=C([{mid:l(),name:"\uD64D\uAE38\uB3D9",team:"\uB514\uC790\uC778 \uD300",contact:"010-0000-0000",editable:!1},{mid:l(),name:"\uBDD4",team:"\uC5D4\uD130\uD14C\uC778\uBA3C\uD2B8 \uD300",contact:"010-1111-1111",editable:!1},{mid:l(),name:"\uC544\uC774\uC720",team:"\uAC00\uC218 \uD300",contact:"010-2222-2222",editable:!1}]),b=C([{mid:l(),name:"\uD64D\uAE38\uB3D9",team:"\uB514\uC790\uC778 \uD300",contact:"010-0000-0000",editable:!1},{mid:l(),name:"\uBDD4",team:"\uC5D4\uD130\uD14C\uC778\uBA3C\uD2B8 \uD300",contact:"010-1111-1111",editable:!1},{mid:l(),name:"\uC544\uC774\uC720",team:"\uAC00\uC218 \uD300",contact:"010-2222-2222",editable:!1}]),E=()=>{h.unshift({mid:l(),name:"",team:"",contact:"",editable:!1})},Q=()=>{b.unshift({mid:l(),name:"",team:"",contact:"",editable:!1})},B=(k,M,c)=>{const _=b.find(m=>m.mid===k);_&&(_[M]=c)};return(k,M)=>{const c=v("Title"),_=v("Link"),m=v("Info"),x=v("Move");return o(),p("div",P,[e("section",null,[t(c,{head:""},{default:a(()=>[V]),_:1}),e("p",null,[D,t(_,{to:{name:"component"}},{default:a(()=>[L]),_:1}),T])]),e("section",O,[t(c,{sub:""},{default:a(()=>[N]),_:1}),$,t(i(u),{class:"q-mb-lg",language:"html",convert:{html:"vue"}},{default:a(()=>[R]),_:1}),F,t(m,{advice:"",color:"teal-4"},{default:a(()=>[U,X]),_:1}),G,H,t(i(u),{class:"q-mb-lg",language:"html",convert:{html:"vue"}},{default:a(()=>[J]),_:1}),K,e("div",W,[t(d,{dense:"",icon:"add",round:"",color:"positive",onClick:E})]),e("div",Y,[(o(!0),p(w,null,I(h,r=>(o(),p("div",{key:r,class:"col-6 col-md-4"},[r.editable?(o(),f(d,{key:1,unelevated:"",dense:"",round:"",size:"sm",color:"primary",icon:"check",onClick:y=>r.editable=!1},null,8,["onClick"])):(o(),f(d,{key:0,unelevated:"",dense:"",flat:"",size:"sm",color:"grey",icon:"edit",onClick:y=>r.editable=!0},null,8,["onClick"])),t(i(S),{mid:r.mid,name:r.name,team:r.team,contact:r.contact,editable:r.editable},null,8,["mid","name","team","contact","editable"])]))),128))]),Z,e("p",null,[ee,t(d,{dense:"",flat:"",icon:"edit",color:"grey",size:"sm"}),ne,t(d,{dense:"",round:"",icon:"check",color:"primary",size:"sm"}),te,re,ae,t(m,null,{default:a(()=>[oe,e("p",null,s(h),1)]),_:1})])]),e("section",de,[t(c,{sub:""},{default:a(()=>[le]),_:1}),se,t(i(u),{class:"q-mb-lg",language:"html",convert:{html:"vue"}},{default:a(()=>[ie]),_:1}),ce,t(i(u),{class:"q-mb-lg",language:"html",convert:{html:"vue"}},{default:a(()=>[me]),_:1}),pe,e("div",ue,[t(d,{dense:"",icon:"add",round:"",color:"positive",onClick:Q})]),e("div",be,[(o(!0),p(w,null,I(b,r=>(o(),p("div",{key:r,class:"col-6 col-md-4"},[r.editable?(o(),f(d,{key:1,unelevated:"",dense:"",round:"",size:"sm",color:"primary",icon:"check",onClick:y=>r.editable=!1},null,8,["onClick"])):(o(),f(d,{key:0,unelevated:"",dense:"",flat:"",size:"sm",color:"grey",icon:"edit",onClick:y=>r.editable=!0},null,8,["onClick"])),t(i(z),{mid:r.mid,name:r.name,team:r.team,contact:r.contact,editable:r.editable,onUpdate:B},null,8,["mid","name","team","contact","editable"])]))),128))]),_e,t(m,null,{default:a(()=>[ve,e("p",null,s(b),1)]),_:1}),fe]),he,t(j,{class:"q-mb-lg"}),e("div",null,[e("div",ye,[t(x,{label:"\uCEF4\uD3EC\uB10C\uD2B8 \uBD84\uB9AC\uD558\uAE30",prev:"",to:{name:"component"}}),t(x,{label:"\uCE74\uB4DC \uC815\uBCF4 \uC800\uC7A5\uD558\uAE30",next:"",to:{name:"storage"}})])])])}}};export{Ce as default};
