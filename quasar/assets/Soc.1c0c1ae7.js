import{ai as v,X as w,c as b,d as e,a as r,w as t,a5 as s,e as n,ag as k,aj as f,a1 as Q,a4 as _,o as g,Q as M,a9 as $,a8 as z,aa as h}from"./index.b6be4404.js";import{Q as A}from"./QSeparator.b549cfd9.js";import{u as L}from"./uid.42677368.js";import"./use-dark.6c95071a.js";const T={class:"q-px-md text-body2"},C=n("\uAD00\uC2EC\uC0AC\uC758 \uBD84\uB9AC "),E=e("p",null,[n("\uC774\uBC88 \uCC55\uD130\uC5D0\uC11C\uB294 "),e("strong",null,"\uAD00\uC2EC\uC0AC\uC758 \uBD84\uB9AC(Separation Of Concerns)"),n(" \uB514\uC790\uC778 \uC6D0\uCE59\uC744 \uD65C\uC6A9\uD574 \uBA64\uBC84 \uCE74\uB4DC \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uB2E8\uC21C\uD788 \uBA64\uBC84\uC758 \uB370\uC774\uD130\uB97C \uC804\uB2EC\uBC1B\uACE0 \uC6D0\uD558\uB294 \uACBD\uC6B0\uC5D0 \uBCC0\uACBD\uB41C \uC815\uBCF4\uB9CC\uC744 \uC81C\uACF5\uD558\uB3C4\uB85D \uCF54\uB4DC\uB97C \uC218\uC815\uD574 \uBCF4\uB3C4\uB85D \uD558\uACA0\uC2B5\uB2C8\uB2E4. ")],-1),P={id:"comp","data-name":"\uCEF4\uD3EC\uB10C\uD2B8 \uC218\uC815"},V=n("\uCEF4\uD3EC\uB10C\uD2B8 \uC218\uC815"),O=e("p",null,[e("strong",null,"\uBA64\uBC84 \uCEF4\uD3EC\uB10C\uD2B8 \uCF54\uB4DC\uB97C \uC544\uB798\uC640 \uAC19\uC774 \uC218\uC815\uD588\uC2B5\uB2C8\uB2E4.")],-1),D=e("textarea",{readonly:""},`\r
// Member.vue\r
\r
const props = defineProps({\r
  data: {\r
    type: Object,\r
    default: () => { }\r
  }\r
})\r
        `,-1),N=e("p",{class:"q-pb-xl"},[n("\uC774\uC804 \uCC55\uD130\uC5D0\uC11C \uAC01\uAC01 "),e("em",null,"props"),n("\uB85C \uC804\uB2EC\uBC1B\uC558\uB358 \uB370\uC774\uD130(\uC774\uB984, \uD300, \uC5F0\uB77D\uCC98)\uB4E4\uC744 "),e("strong",null,"\uB2E8\uC77C \uAC1D\uCCB4 \uD615\uC2DD"),n("\uC73C\uB85C \uC804\uB2EC\uBC1B\uB3C4\uB85D \uC218\uC815\uD588\uC2B5\uB2C8\uB2E4. ")],-1),B=e("textarea",{readonly:""},`\r
// Member.vue\r
\r
const _name = ref(props.data.name)\r
const _team = ref(props.data.team)\r
const _contact = ref(props.data.contact)\r
\r
const loading = ref(false)\r
const editable = ref(false)\r
        `,-1),R=e("p",{class:"q-pb-xl"},[n("\uC774\uC804 \uCC55\uD130\uC5D0\uC11C \uC0C1\uC704 \uC694\uC18C\uC5D0 \uD3EC\uD568\uB418\uC5C8\uB358 "),e("code",null,"editable"),n(" \uAC12\uC744 \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uBD80\uC5D0 \uD3EC\uD568\uC2DC\uD0A4\uACE0 \uB85C\uB529 \uC9C4\uD589 \uC0C1\uD0DC\uB97C \uD45C\uC2DC\uD574 \uC904 \uBC18\uC751\uD615 \uAC12\uC744 \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4. ")],-1),F=e("textarea",{readonly:""},`\r
<!-- Member.vue -->\r
\r
<!-- Quasar Inner Loading \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD574 \uB85C\uB529 \uC0C1\uD0DC\uB97C \uD45C\uC2DC -->\r
<q-inner-loading :showing="loading" style="z-index:1">\r
  <q-spinner size="50px" color="primary" />\r
</q-inner-loading>\r
        `,-1),G=n(" Quasar "),U=n("Inner Loading"),X=n(" \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD558\uC5EC "),H=e("code",null,"loading",-1),J=n(" \uAC12\uC5D0 \uB530\uB77C \uD654\uBA74\uC5D0 \uB85C\uB529 \uC0C1\uD0DC\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4. "),K=e("p",null,[n(" \uBCF4\uD1B5 \uC2E4\uBB34\uC791\uC5C5 \uC2DC \uBC31\uC5D4\uB4DC\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uAC70\uB098 \uC800\uC7A5\uD558\uB294\uB370 "),e("strong",null,"\uC9C0\uCCB4\uB418\uB294 \uC2DC\uAC04\uC744 \uC0AC\uC6A9\uC790\uAC00 \uD655\uC778\uD560 \uC218 \uC788\uB3C4\uB85D"),n(" \uB85C\uB529 \uBC14\uB97C \uD45C\uC2DC\uD574 \uC8FC\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. ")],-1),W=e("p",null,"Quasar\uC5D0\uB294 loading \uC0C1\uD0DC\uB97C \uCC98\uB9AC\uD560 \uB9CC\uD55C \uBA87 \uAC00\uC9C0 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC81C\uACF5\uB429\uB2C8\uB2E4.",-1),Y=n("Inner Loading"),Z=n("Linear Progress"),ee=n("Spinners"),ne=e("textarea",{readonly:""},`\r
          <!-- Member.vue -->\r
\r
<div class="q-pa-sm bg-primary">\r
  <div class="row justify-between">\r
    <div class="row items-center q-gutter-x-xs">\r
      <!-- \uC218\uC815 \uBAA8\uB4DC\uC5D0\uC11C\uB9CC \uBA64\uBC84 \uCE74\uB4DC \uC0AD\uC81C \uBC84\uD2BC\uC744 \uB178\uCD9C -->\r
      <q-btn v-if="editable" dense flat round size="sm" color="negative" icon="playlist_remove" @click="remove" />\r
      <div class="text-center text-white">\uBA64\uBC84</div>\r
    </div>\r
    <div>\r
      <!--  -->\r
      <q-btn v-if="!editable" unelevated dense round flat size="sm" color="white" icon="edit" @click="editable = true" />\r
      <template v-else>\r
        <q-btn unelevated dense round flat size="sm" color="white" icon="close" @click="cancel" />\r
        <q-btn unelevated dense round size="sm" color="positive" icon="check" @click="upsert" />\r
      </template>\r
    </div>\r
  </div>\r
</div>\r
        `,-1),re=e("p",{class:"q-pb-xl"},[n("\uCE74\uB4DC \uC0C1\uB2E8\uC5D0 "),e("em",null,"\uC218\uC815"),n(", "),e("em",null,"\uCDE8\uC18C"),n(", "),e("em",null,"\uC800\uC7A5"),n(", "),e("em",null,"\uC0AD\uC81C"),n(" \uBC84\uD2BC\uC744 \uD3EC\uD568\uC2DC\uD0B5\uB2C8\uB2E4. Quasar "),e("em",null,"Flex Grid"),n("\uB97C \uC774\uC6A9\uD574 \uD0C0\uC774\uD2C0\uACFC \uBC84\uD2BC\uB4E4\uC744 \uC801\uB2F9\uD55C \uACF3\uC5D0 \uC704\uCE58\uC2DC\uCF1C \uC90D\uB2C8\uB2E4.")],-1),te=e("textarea",{readonly:""},`\r
// Member.vue\r
\r
// \uC644\uB8CC \uC2DC \uC218\uC815 \uBAA8\uB4DC\uB97C \uBE44\uD65C\uC131\uD654\r
const done = () => {\r
  loading.value = false\r
  editable.value = false\r
}\r
        `,-1),se=e("p",{class:"q-pb-xl"},[n("\uC644\uB8CC \uC2DC \uB85C\uB529 \uAC12 \uBC0F \uC218\uC815 \uC0C1\uD0DC \uAC12\uC744 "),e("em",null,"false"),n("\uB85C \uBCC0\uACBD\uD574 \uC904 \uBA54\uC11C\uB4DC\uB97C \uB9CC\uB4E4\uC5B4 \uC90D\uB2C8\uB2E4. "),e("code",null,"emit"),n(" \uD638\uCD9C \uC2DC \uD30C\uB77C\uBBF8\uD130\uB85C \uB118\uACA8\uC8FC\uBA74 \uC0C1\uC704 \uC694\uC18C\uB294 \uC9C0\uC815\uB41C \uCC98\uB9AC\uAC00 \uC644\uB8CC\uB41C \uACBD\uC6B0 \uC804\uB2EC\uBC1B\uC740 "),e("code",null,"done"),n("\uC744 \uD638\uCD9C\uD569\uB2C8\uB2E4.")],-1),ae=e("textarea",{readonly:""},`\r
// Member.vue\r
\r
// \uC0AD\uC81C \uC2DC Quasar \uC54C\uB9BC \uD50C\uB7EC\uADF8\uC778 \uD638\uCD9C\r
const remove = () => {\r
  $q.notify({\r
    progress: true,\r
    message: '\uD574\uB2F9 \uBA64\uBC84 \uCE74\uB4DC\uB97C \uC0AD\uC81C\uD560\uAE4C\uC694?',\r
    color: 'indigo-5',\r
    multiLine: true,\r
    actions: [\r
      {\r
        label: '\uD655\uC778', color: 'negative', handler: () => {\r
          loading.value = false\r
          emit('remove', props.data.mid)\r
        }\r
      },\r
      { label: '\uCDE8\uC18C', color: 'white' }\r
    ]\r
  })\r
}\r
        `,-1),oe={class:"q-pb-xl"},ie=n("\uBA64\uBC84 \uC0AD\uC81C \uC2DC "),de=n("Notify"),le=n(" \uD50C\uB7EC\uADF8\uC778\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC0AD\uC81C \uC5EC\uBD80\uB97C \uD655\uC778\uD569\uB2C8\uB2E4. "),ce=e("textarea",{readonly:""},`\r
// Member.vue\r
\r
// \uCDE8\uC18C \uC2DC \uAE30\uC874 \uB370\uC774\uD130\uB85C \uB418\uB3CC\uB9BC\r
const cancel = () => {\r
  _name.value = props.data.name\r
  _team.value = props.data.team\r
  _contact.value = props.data.contact\r
  editable.value = false\r
}\r
        `,-1),me=e("p",{class:"q-pb-xl"},[n("\uC218\uC815 \uCDE8\uC18C \uC2DC \uC0DD\uC131\uB41C \uC815\uBCF4\uB4E4\uC744 "),e("em",null,"props"),n("\uB85C \uC804\uB2EC\uBC1B\uC740 \uCD08\uAE30 \uB370\uC774\uD130\uB85C \uB418\uB3CC\uB9BD\uB2C8\uB2E4. ("),e("b",null,"\uB3D9\uC2DC\uC5D0 \uC218\uC815 \uBAA8\uB4DC \uBE44\uD65C\uC131\uD654"),n(")")],-1),ue=e("textarea",{readonly:""},`\r
// Member.vue\r
\r
// \uB370\uC774\uD130\uB97C \uC218\uC815 \uB610\uB294 \uC785\uB825 (\uD604\uC7AC \uBA64\uBC84 \uB370\uC774\uD130\uB97C \uC0C1\uC704 \uCEF4\uD3EC\uB10C\uD2B8 or \uD398\uC774\uC9C0\uC5D0 \uC804\uB2EC)\r
const upsert = () => {\r
  loading.value = true\r
\r
  // \uB85C\uB529 \uBC14\uB97C \uD655\uC778\uD558\uAE30 \uC704\uD574 setTimeout \uC73C\uB85C 2\uCD08\uB97C \uC9C0\uC5F0\r
  setTimeout(() => {\r
    emit('upsert', {\r
      mid: props.data.mid,\r
      name: _name.value,\r
      team: _team.value,\r
      contact: _contact.value\r
    }, done)\r
  }, 2000)\r
}\r
<\/script>\r
        `,-1),pe=e("p",{class:"q-pb-xl"},[n("\uC0C8\uB85C\uC6B4 \uBA64\uBC84 \uC785\uB825 \uB610\uB294 \uC218\uC815 \uC2DC \uD604\uC7AC \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uBC14\uC778\uB529 \uB41C(\uC218\uC815\uB41C) \uB370\uC774\uD130\uB97C \uC0C1\uC704 \uC694\uC18C\uB85C \uC804\uB2EC\uD574 \uC90D\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0 \uB85C\uB529 \uBC14\uB97C \uD655\uC778\uD558\uAE30 \uC704\uD55C "),e("code",null,"setTimeout"),n("\uC744 \uCD94\uAC00\uD574 \uC8FC\uC5C8\uC2B5\uB2C8\uB2E4. ("),e("b",null,[e("code",null,"done"),n(" \uBA54\uC11C\uB4DC \uD30C\uB77C\uBBF8\uD130 \uD3EC\uD568")]),n(") ")],-1),_e={id:"page","data-name":"\uD398\uC774\uC9C0 \uC218\uC815"},ve=n("\uD398\uC774\uC9C0 \uC218\uC815"),be=e("p",null,[e("strong",null,"\uBA64\uBC84 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB294 \uD398\uC774\uC9C0 \uCF54\uB4DC\uB97C \uC544\uB798\uC640 \uAC19\uC774 \uC218\uC815\uD588\uC2B5\uB2C8\uB2E4.")],-1),fe=e("textarea",{readonly:""},`\r
// App.vue\r
\r
// Member\uB97C \uCD94\uAC00\uD558\uB294 \uBA54\uC11C\uB4DC\r
const addMember = () => {\r
  members.unshift({ mid: uid(), name: '', team: '', contact: '' })\r
}\r
        `,-1),ge=e("p",{class:"q-pb-xl"},[n("\uC774\uC804 \uCC55\uD130\uC5D0\uC11C \uB9CC\uB4E4\uC5C8\uB358 "),e("em",null,"addMember"),n(" \uBA54\uC11C\uB4DC \uC548\uC758 \uBA64\uBC84 \uB370\uC774\uD130 \uC911 "),e("code",null,"editable"),n(" \uC18D\uC131\uC740 \uC81C\uAC70\uB429\uB2C8\uB2E4.")],-1),he=e("textarea",{readonly:""},`\r
// App.vue\r
\r
// Member \uC815\uBCF4\uB97C \uC218\uC815\uD558\uB294 \uBA54\uC11C\uB4DC\r
const upsert = (data, done) => {\r
  const findMember = members.find(m => m.mid === data.mid)\r
  const storageMembers = $q.sessionStorage.getItem('members') || []\r
  const findStorageMember = storageMembers.find(m => m.mid === data.mid)\r
\r
  if (findMember) {\r
    findMember.name = data.name\r
    findMember.team = data.team\r
    findMember.contact = data.contact\r
\r
    if (findStorageMember) {\r
      findStorageMember.name = data.name\r
      findStorageMember.team = data.team\r
      findStorageMember.contact = data.contact\r
    }\r
    else\r
      storageMembers.unshift(findMember)\r
  }\r
\r
  $q.sessionStorage.set('members', storageMembers)\r
\r
  done()\r
}\r
        `,-1),qe=k('<p class="q-pb-xl">\uC804\uB2EC\uBC1B\uC740 \uC218\uC815\uB41C(\uD639\uC740 \uCD94\uAC00\uB41C) \uB370\uC774\uD130\uC640 \uC644\uB8CC \uBA54\uC11C\uB4DC(<em>done</em>)\uB97C \uC774\uC6A9\uD574 <em>members</em> \uAC1D\uCCB4 \uBC0F \uC138\uC158 \uC2A4\uD1A0\uB9AC\uC9C0\uC758 \uC815\uBCF4\uB97C \uB3D9\uC2DC\uC5D0 \uC801\uC6A9\uD569\uB2C8\uB2E4. <em>findStorageMember</em>\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0 <em>findMember</em> \uAC12\uC744 <strong>\uC9C1\uC811 \uCD94\uAC00\uD574 \uC90D\uB2C8\uB2E4.</strong> \uCD5C\uC885\uC801\uC73C\uB85C \uC218\uC815\uB41C \uB370\uC774\uD130\uB97C \uC138\uC158 \uC2A4\uD1A0\uB9AC\uC9C0\uC5D0 \uC800\uC7A5\uD558\uACE0 \uC804\uB2EC\uBC1B\uC740 <em>done</em> \uBA54\uC11C\uB4DC\uB97C \uD638\uCD9C\uD558\uBA74 \uC815\uC0C1\uC801\uC73C\uB85C \uC218\uC815\uC774 \uC644\uB8CC\uB41C \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4. </p>',1),Me=e("textarea",{readonly:""},`\r
// App.vue\r
\r
// Member \uC815\uBCF4\uB97C \uC81C\uAC70\uD558\uB294 \uBA54\uC11C\uB4DC\r
const remove = (mid) => {\r
  const findIndex = members.findIndex(m => m.mid === mid)\r
  const storageMembers = $q.sessionStorage.getItem('members') || []\r
  const findStorageIndex = storageMembers.findIndex(m => m.mid === mid)\r
\r
  if (findIndex !== -1) {\r
    members.splice(findIndex, 1)\r
\r
    if (findStorageIndex !== -1)\r
      storageMembers.splice(findStorageIndex, 1)\r
  }\r
\r
  $q.sessionStorage.set('members', storageMembers)\r
}\r
        `,-1),xe=e("p",{class:"q-pb-xl"},[n("\uC804\uB2EC\uBC1B\uC740 "),e("em",null,"mid"),n("\uB97C \uC774\uC6A9\uD574 "),e("em",null,"members"),n(" \uAC1D\uCCB4 \uBC0F \uC138\uC158 \uC2A4\uD1A0\uB9AC\uC9C0\uC758 \uD574\uB2F9 \uBA64\uBC84 \uC815\uBCF4\uB97C \uB3D9\uC2DC\uC5D0 \uC81C\uAC70\uD569\uB2C8\uB2E4. \uCD5C\uC885\uC801\uC73C\uB85C \uB098\uBA38\uC9C0 \uBA64\uBC84 \uB370\uC774\uD130\uB97C \uC138\uC158 \uC2A4\uD1A0\uB9AC\uC9C0\uC5D0 \uC800\uC7A5\uD569\uB2C8\uB2E4. ")],-1),ye=e("textarea",{readonly:""},`\r
<!-- App.vue -->\r
\r
<div v-for="m in members" :key="m" class="col-6 col-md-4">\r
  <Member :data="m" @upsert="upsert" @remove="remove" />\r
</div>\r
        `,-1),Ie=e("p",{class:"q-pb-xl"},[n("\uBA64\uBC84 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0AC\uC6A9\uC740 \uAC04\uC18C\uD558\uAC8C \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uBA64\uBC84 \uC815\uBCF4\uB97C \uC804\uB2EC\uBC1B\uC744 "),e("code",null,"data"),n(", \uC0C8 \uBA64\uBC84 \uCD94\uAC00 \uB610\uB294 \uC218\uC815 \uCC98\uB9AC\uB97C \uC704\uD55C "),e("code",null,"@upsert"),n(" \uC774\uBCA4\uD2B8\uC640 \uBA64\uBC84 \uC0AD\uC81C \uCC98\uB9AC\uB97C \uC704\uD55C "),e("code",null,"@remove"),n(" \uC774\uBCA4\uD2B8\uB97C \uC815\uC758\uD574 \uC8FC\uBA74 \uB429\uB2C8\uB2E4. ")],-1),Se={id:"result","data-name":"\uACB0\uACFC\uBB3C"},je=n("\uACB0\uACFC\uBB3C"),we=e("p",null,[n("\uACB0\uACFC\uBB3C\uC744 \uD655\uC778\uD574 \uBD05\uC2DC\uB2E4. \uBA64\uBC84\uB97C \uCD94\uAC00, \uC218\uC815, \uC0AD\uC81C\uD568\uACFC \uB3D9\uC2DC\uC5D0 \uBE0C\uB77C\uC6B0\uC800\uC758 "),e("em",null,"DevTools"),n("\uB97C \uC0AC\uC6A9\uD574 \uC138\uC158 \uC2A4\uD1A0\uB9AC\uC9C0\uC5D0 \uB370\uC774\uD130\uAC00 \uC5B4\uB5BB\uAC8C \uC800\uC7A5\uB418\uB294\uC9C0 \uD655\uC778\uD574 \uBCF4\uC138\uC694")],-1),ke={class:"row inline-block"},Qe=n(" \uCF54\uB4DC \uBCF4\uAE30 "),$e=n(" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 \uC804\uCCB4 \uC18C\uC2A4\uCF54\uB4DC\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. "),ze=e("textarea",{readonly:""},`\r
<!-- App.vue -->\r
\r
<script setup>\r
import { ref } from 'vue'\r
`+h("import { useQuasar } from 'quasar'")+`\r
\r
const props = defineProps({\r
  data: {\r
    type: Object,\r
    default: () => { }\r
  }\r
})\r
\r
const $q = useQuasar()\r
\r
// \uC0C1\uC704 \uCEF4\uD3EC\uB10C\uD2B8 or \uD398\uC774\uC9C0\uC758 \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uB97C \uC815\uC758\uD574 \uC90D\uB2C8\uB2E4.\r
const emit = defineEmits(['upsert', 'remove'])\r
\r
// \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uBD80\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uBA64\uBC84 \uB370\uC774\uD130\r
const _name = ref(props.data.name)\r
const _team = ref(props.data.team)\r
const _contact = ref(props.data.contact)\r
\r
const loading = ref(false)\r
const editable = ref(false)\r
\r
// \uC644\uB8CC \uC2DC \uC218\uC815 \uBAA8\uB4DC\uB97C \uBE44\uD65C\uC131\uD654\r
const done = () => {\r
  loading.value = false\r
  editable.value = false\r
}\r
\r
// \uC0AD\uC81C \uC2DC Quasar \uC54C\uB9BC \uD50C\uB7EC\uADF8\uC778 \uD638\uCD9C\r
const remove = () => {\r
  $q.notify({\r
    progress: true,\r
    message: '\uD574\uB2F9 \uBA64\uBC84 \uCE74\uB4DC\uB97C \uC0AD\uC81C\uD560\uAE4C\uC694?',\r
    color: 'indigo-5',\r
    multiLine: true,\r
    actions: [\r
      {\r
        label: '\uD655\uC778', color: 'negative', handler: () => {\r
          loading.value = false\r
          emit('remove', props.data.mid)\r
        }\r
      },\r
      { label: '\uCDE8\uC18C', color: 'white' }\r
    ]\r
  })\r
}\r
\r
// \uCDE8\uC18C \uC2DC \uAE30\uC874 \uB370\uC774\uD130\uB85C \uB418\uB3CC\uB9BC\r
const cancel = () => {\r
  _name.value = props.data.name\r
  _team.value = props.data.team\r
  _contact.value = props.data.contact\r
  editable.value = false\r
}\r
\r
// \uB370\uC774\uD130\uB97C \uC218\uC815 \uB610\uB294 \uC785\uB825 (\uD604\uC7AC \uBA64\uBC84 \uB370\uC774\uD130\uB97C \uC0C1\uC704 \uCEF4\uD3EC\uB10C\uD2B8 or \uD398\uC774\uC9C0\uC5D0 \uC804\uB2EC)\r
const upsert = () => {\r
  loading.value = true\r
\r
  // \uB85C\uB529 \uBC14\uB97C \uD655\uC778\uD558\uAE30 \uC704\uD574 setTimeout \uC73C\uB85C 2\uCD08\uB97C \uC9C0\uC5F0\r
  setTimeout(() => {\r
    emit('upsert', {\r
      mid: props.data.mid,\r
      name: _name.value,\r
      team: _team.value,\r
      contact: _contact.value\r
    }, done)\r
  }, 2000)\r
}\r
<\/script>\r
      \r
<template>\r
  <q-card class="overflow-hidden">\r
    <!-- Quasar Inner Loading \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD574 \uB85C\uB529 \uC0C1\uD0DC\uB97C \uD45C\uC2DC -->\r
    <q-inner-loading :showing="loading" style="z-index:1">\r
      <q-spinner size="50px" color="primary" />\r
    </q-inner-loading>\r
    <div class="q-pa-sm bg-primary">\r
      <div class="row justify-between">\r
        <div class="row items-center q-gutter-x-xs">\r
          <!-- \uC218\uC815 \uBAA8\uB4DC\uC5D0\uC11C\uB9CC \uBA64\uBC84 \uCE74\uB4DC \uC0AD\uC81C \uBC84\uD2BC\uC744 \uB178\uCD9C -->\r
          <q-btn v-if="editable" dense flat round size="sm" color="negative" icon="playlist_remove" @click="remove" />\r
          <div class="text-center text-white">\uBA64\uBC84</div>\r
        </div>\r
        <div>\r
          <!--  -->\r
          <q-btn v-if="!editable" unelevated dense round flat size="sm" color="white" icon="edit"\r
            @click="editable = true" />\r
          <template v-else>\r
            <q-btn unelevated dense round flat size="sm" color="white" icon="close" @click="cancel" />\r
            <q-btn unelevated dense round size="sm" color="positive" icon="check" @click="upsert" />\r
          </template>\r
        </div>\r
      </div>\r
    </div>\r
    <q-card-section>\r
      <q-input v-model="_name" :readonly="!editable" dense :borderless="!editable" />\r
      <q-input v-model="_team" :readonly="!editable" dense :borderless="!editable" />\r
      <q-input v-model="_contact" :readonly="!editable" dense :borderless="!editable" />\r
    </q-card-section>\r
  </q-card>\r
</template>\r
      \r
<style scoped>\r
\r
</style>\r
            `,-1),Ae=e("textarea",{readonly:""},`\r
<!-- App.vue -->\r
\r
<script setup>\r
import { reactive, defineAsyncComponent } from 'vue'\r
`+h("import { uid, useQuasar } from 'quasar'")+`\r
\r
// $q \uAC1D\uCCB4\r
const $q = useQuasar()\r
\r
// \uBA64\uBC84 \uB370\uC774\uD130 \uCD08\uAE30\uAC12\uC744 \uC138\uC158 \uC2A4\uD1A0\uB9AC\uC9C0\uC5D0\uC11C \uAC00\uC838\uC635\uB2C8\uB2E4.\r
const members = reactive($q.sessionStorage.getItem('members') || [])\r
\r
// Member \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.\r
const Member = defineAsyncComponent(() => import('./Member.vue'))\r
\r
// Member\uB97C \uCD94\uAC00\uD558\uB294 \uBA54\uC11C\uB4DC\r
const addMember = () => {\r
  members.unshift({ mid: uid(), name: '', team: '', contact: '' })\r
}\r
\r
// Member \uC815\uBCF4\uB97C \uC218\uC815\uD558\uB294 \uBA54\uC11C\uB4DC\r
const upsert = (data, done) => {\r
  const findMember = members.find(m => m.mid === data.mid)\r
  const storageMembers = $q.sessionStorage.getItem('members') || []\r
  const findStorageMember = storageMembers.find(m => m.mid === data.mid)\r
\r
  if (findMember) {\r
    findMember.name = data.name\r
    findMember.team = data.team\r
    findMember.contact = data.contact\r
\r
    if (findStorageMember) {\r
      findStorageMember.name = data.name\r
      findStorageMember.team = data.team\r
      findStorageMember.contact = data.contact\r
    }\r
    else\r
      storageMembers.unshift(findMember)\r
  }\r
\r
  $q.sessionStorage.set('members', storageMembers)\r
\r
  done()\r
}\r
\r
// Member \uC815\uBCF4\uB97C \uC81C\uAC70\uD558\uB294 \uBA54\uC11C\uB4DC\r
const remove = (mid) => {\r
  const findIndex = members.findIndex(m => m.mid === mid)\r
  const storageMembers = $q.sessionStorage.getItem('members') || []\r
  const findStorageIndex = storageMembers.findIndex(m => m.mid === mid)\r
\r
  if (findIndex !== -1) {\r
    members.splice(findIndex, 1)\r
\r
    if (findStorageIndex !== -1)\r
      storageMembers.splice(findStorageIndex, 1)\r
  }\r
\r
  $q.sessionStorage.set('members', storageMembers)\r
}\r
<\/script>\r
      \r
<template>\r
  <div class="row justify-end q-pb-sm">\r
    <q-btn dense icon="add" round color="positive" @click="addMember" />\r
  </div>\r
  <div class="row q-col-gutter-lg">\r
    <div v-for="m in members" :key="m" class="col-6 col-md-4">\r
      <Member :data="m" @upsert="upsert" @remove="remove" />\r
    </div>\r
  </div>\r
  <Info>\r
    <p><b>Member \uB370\uC774\uD130</b></p>\r
    <p>\r
      {{members}}\r
    </p>\r
  </Info>\r
</template>\r
            `,-1),Le={class:"q-pa-sm"},Te={class:"row justify-end q-pb-sm"},Ce={class:"row q-col-gutter-lg"},Ee=e("p",null,[e("b",null,"Member \uB370\uC774\uD130")],-1),Pe=e("div",{class:"q-py-xl"},null,-1),Ve={class:"row justify-between items-cetner"},Fe={__name:"Soc",setup(Oe){const a=v(()=>f(()=>import("./Code.fe4e34ed.js"),["assets/Code.fe4e34ed.js","assets/Code.2d671ef5.css","assets/index.b6be4404.js","assets/index.e8e7ed18.css"])),x=v(()=>f(()=>import("./Practice.0692e7b0.js"),["assets/Practice.0692e7b0.js","assets/Practice.e6958f8f.css","assets/index.b6be4404.js","assets/index.e8e7ed18.css","assets/use-dark.6c95071a.js","assets/use-form.b547680f.js","assets/QSeparator.b549cfd9.js","assets/use-panel.c8073603.js","assets/selection.27ab2460.js"])),y=v(()=>f(()=>import("./CSoc.842beea5.js"),["assets/CSoc.842beea5.js","assets/index.b6be4404.js","assets/index.e8e7ed18.css","assets/QInnerLoading.0e3c46b8.js","assets/use-dark.6c95071a.js","assets/QInput.88f63f3d.js","assets/format.801e7424.js","assets/uid.42677368.js","assets/use-form.b547680f.js","assets/QCard.b8d52c6e.js"])),m=Q(),c=w(m.sessionStorage.getItem("soc")||[]),I=()=>{c.unshift({mid:L(),name:"",team:"",contact:""})},S=(i,u)=>{const o=c.find(p=>p.mid===i.mid),d=m.sessionStorage.getItem("soc")||[],l=d.find(p=>p.mid===i.mid);o&&(o.name=i.name,o.team=i.team,o.contact=i.contact,l?(l.name=i.name,l.team=i.team,l.contact=i.contact):d.unshift(o)),m.sessionStorage.set("soc",d),u()},j=i=>{const u=c.findIndex(l=>l.mid===i),o=m.sessionStorage.getItem("soc")||[],d=o.findIndex(l=>l.mid===i);u!==-1&&(c.splice(u,1),d!==-1&&o.splice(d,1)),m.sessionStorage.set("soc",o)};return(i,u)=>{const o=_("Title"),d=_("Link"),l=_("Info"),p=_("Move");return g(),b("div",T,[e("section",null,[r(o,{head:""},{default:t(()=>[C]),_:1}),E]),e("section",P,[r(o,{sub:""},{default:t(()=>[V]),_:1}),O,r(s(a),{class:"q-mb-sm",language:"javascript",convert:{"javasc  ript":"vue"}},{default:t(()=>[D]),_:1}),N,r(s(a),{class:"q-mb-sm",language:"javascript",convert:{"ja  vascript":"vu  e"}},{default:t(()=>[B]),_:1}),R,r(s(a),{class:"q-mb-sm",language:"html",convert:{html:"  vue"}},{default:t(()=>[F]),_:1}),e("p",null,[G,r(d,{href:"https://quasar.dev/vue-components/inner-loading"},{default:t(()=>[U]),_:1}),X,H,J]),r(l,{advice:"",color:"teal-4",class:"q-pb-xl"},{default:t(()=>[K,W,e("ul",null,[e("li",null,[r(d,{href:"https://quasar.dev/vue-components/inner-loading"},{default:t(()=>[Y]),_:1})]),e("li",null,[r(d,{href:"https://quasar.dev/vue-components/linear-progress"},{default:t(()=>[Z]),_:1})]),e("li",null,[r(d,{href:"https://quasar.dev/vue-components/spinners"},{default:t(()=>[ee]),_:1})])])]),_:1}),r(s(a),{class:"q-mb-sm",language:"html",convert:{html:"  vue"}},{default:t(()=>[ne]),_:1}),re,r(s(a),{class:"q-mb-sm",language:"javascript",convert:{"javascript  ":"vue"}},{default:t(()=>[te]),_:1}),se,r(s(a),{class:"q-mb-sm",language:"javascript",convert:{"javasc  ript":"vue"}},{default:t(()=>[ae]),_:1}),e("p",oe,[ie,r(d,{to:{name:"notify"}},{default:t(()=>[de]),_:1}),le]),r(s(a),{class:"q-mb-sm",language:"javascript",convert:{"javascript  ":"vue"}},{default:t(()=>[ce]),_:1}),me,r(s(a),{class:"q-mb-sm",language:"javascript",convert:{javascript:"vue"}},{default:t(()=>[ue]),_:1}),pe]),e("section",_e,[r(o,{sub:""},{default:t(()=>[ve]),_:1}),be,r(s(a),{class:"q-mb-sm",language:"javascript",convert:{javascript:"vue"}},{default:t(()=>[fe]),_:1}),ge,r(s(a),{class:"q-mb-sm",language:"javascript",convert:{javascript:"vue"}},{default:t(()=>[he]),_:1}),qe,r(s(a),{class:"q-mb-sm",language:"javascript",convert:{javascript:"vue"}},{default:t(()=>[Me]),_:1}),xe,r(s(a),{class:"q-mb-sm",language:"html",convert:{html:"vue"}},{default:t(()=>[ye]),_:1}),Ie]),e("section",Se,[r(o,{sub:""},{default:t(()=>[je]),_:1}),we,r(l,{advice:"",color:"teal-4",class:"q-pb-xl"},{default:t(()=>[e("p",ke,[Qe,r(M,{icon:"code",round:"",size:"sm"}),$e])]),_:1}),r(s(x),{options:[{label:"Member.vue",value:"comp"},{label:"App.vue",value:"app"}]},{comp:t(()=>[r(s(a),{language:"html",convert:{html:"vue"}},{default:t(()=>[ze]),_:1})]),app:t(()=>[r(s(a),{language:"html",convert:{html:"vue"}},{default:t(()=>[Ae]),_:1})]),result:t(()=>[e("div",Le,[e("div",Te,[r(M,{dense:"",icon:"add",round:"",color:"positive",onClick:I})]),e("div",Ce,[(g(!0),b($,null,z(c,q=>(g(),b("div",{key:q,class:"col-6 col-md-4"},[r(s(y),{data:q,onUpsert:S,onRemove:j},null,8,["data"])]))),128))]),r(l,null,{default:t(()=>[Ee,e("p",null,h(c),1)]),_:1})])]),_:1},8,["options"])]),Pe,r(A,{class:"q-mb-lg"}),e("div",null,[e("div",Ve,[r(p,{label:"\uCE74\uB4DC \uC815\uBCF4 \uC800\uC7A5\uD558\uAE30",prev:"",to:{name:"storage"}})])])])}}};export{Fe as default};
