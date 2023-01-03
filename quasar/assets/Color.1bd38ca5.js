import{ai as g,i as y,c as C,d as r,a as n,w as e,a5 as s,e as t,aj as _,a1 as $,a4 as u,o as k,Q as c,aa as m}from"./index.b6be4404.js";import{Q as L}from"./QSeparator.b549cfd9.js";import{Q as x}from"./QSpinnerFacebook.52c129de.js";import{Q as T}from"./QSpinnerGears.7ae31e52.js";import"./use-dark.6c95071a.js";const B={class:"q-px-md text-body2"},U={id:"intro","data-name":"\uC18C\uAC1C"},S=t("Loading \uD50C\uB7EC\uADF8\uC778 "),j=r("p",null,"\uB85C\uB529\uC740 \uBC31\uADF8\uB77C\uC6B4\uB4DC \uC791\uC5C5\uC774 \uC9C4\uD589 \uC911\uC784\uC744 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC54C\uB9AC\uAE30 \uC704\uD574 \uC571 \uCF58\uD150\uCE20 \uC704\uC5D0 \uC2A4\uD53C\uB108\uC640 \uC624\uBC84\uB808\uC774\uB97C \uD45C\uC2DC\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uB294 \uAE30\uB2A5\uC785\uB2C8\uB2E4. \uC804\uC5ED \uBC31\uADF8\uB77C\uC6B4\uB4DC \uC791\uC5C5\uC744 \uC704\uD574 \uD398\uC774\uC9C0 \uB0B4\uC5D0 \uBCF5\uC7A1\uD55C \uB17C\uB9AC\uB97C \uCD94\uAC00\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",-1),V=r("p",null,"\uD2B9\uC815 \uC791\uC5C5 \uC2DC \uB808\uC774\uC544\uC6C3 \uC804\uCCB4\uB97C \uBE44\uD65C\uC131\uD654\uD574\uC57C \uD560 \uB54C \uC720\uC6A9\uD558\uAC8C \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC800\uB294 \uAC1C\uC778\uC801\uC73C\uB85C \u201C\uB85C\uB529 \uD50C\uB7EC\uADF8\u201D\uC778 \uBCF4\uB2E4 \u201C\uB0B4\uBD80 \uB85C\uB529\u201D\uC744 \uB9CE\uC774 \uC0AC\uC6A9\uD558\uB294 \uD3B8\uC785\uB2C8\uB2E4.",-1),D={id:"install","data-name":"\uC124\uCE58"},E=t("\uC124\uCE58"),G=r("textarea",{readonly:""},`\r
// main.js\r
\r
import {\r
  Quasar,\r
  Loading\r
} from 'quasar'\r
\r
app.use(Quasar, {\r
  plugins: {\r
    Loading\r
  },\r
  config: {\r
    loading: { /* API \uCE74\uB4DC\uC5D0\uC11C QuasarConfOptions \uC0B4\uD3B4\uBCF4\uAE30 */ }\r
  }\r
})\r
        `,-1),I={id:"usage","data-name":"\uC0AC\uC6A9\uBC95"},P=t("\uC0AC\uC6A9\uBC95"),A=r("p",null,"Quasar \uB85C\uB529 \uD50C\uB7EC\uADF8\uC778\uC740 \uBE60\uB978 \uC791\uC5C5\uC73C\uB85C \uC778\uD574 \uD654\uBA74\uC774 \uAE5C\uBC15\uC774\uC9C0 \uC54A\uB3C4\uB85D \uC9C0\uC5F0 (500ms)\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uAE5C\uBC15\uC784\uC740 \uC0AC\uC6A9\uC790\uAC00 \uD655\uC778\uD560 \uAE30\uD68C\uB3C4 \uC5C6\uC774 \uC2A4\uD53C\uB108\uC640 \uC624\uBC84\uB808\uC774\uAC00 \uD45C\uC2DC\uB418\uC5C8\uB2E4\uAC00 \uBE60\uB974\uAC8C \uC228\uAE40 \uCC98\uB9AC \uB420 \uB54C \uBC1C\uC0DD\uD569\uB2C8\uB2E4. \uC9C0\uC5F0\uC740 \uB85C\uB529 \uD654\uBA74\uC774 \uBCF4\uC5EC\uAE30 \uC804 \uC774\uB7F0 \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uB294 \uB370 \uB3C4\uC6C0\uC744 \uC90D\uB2C8\uB2E4.",-1),N={id:"inside","data-name":"Vue \uD30C\uC77C\uC5D0\uC11C \uC0AC\uC6A9\uD558\uAE30",sub:""},F=t("Vue \uD30C\uC77C\uC5D0\uC11C \uC0AC\uC6A9\uD558\uAE30"),M=r("textarea",{readonly:""},`\r
<script setup>\r
`+m("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
$q.loading.show({\r
  delay: 400 // \uBC00\uB9AC\uCD08\r
})\r
\r
$q.loading.hide()\r
<\/script>\r
        `,-1),O={id:"outside","data-name":"Vue \uD30C\uC77C \uC678\uBD80\uC5D0\uC11C \uC0AC\uC6A9\uD558\uAE30",sub:""},z=t("Vue \uD30C\uC77C \uC678\uBD80\uC5D0\uC11C \uC0AC\uC6A9\uD558\uAE30"),R=r("textarea",{readonly:""},`\r
import {\r
  Loading,\r
\r
  // \uC120\uD0DD\uC0AC\uD56D!, \uC544\uB798 \uC608\uC81C\uC758 \uC2A4\uD53C\uB108 \uC0AC\uC6A9\uC744 \uC704\uD574\r
  QSpinnerGears\r
} from 'quasar'\r
\r
// \uAE30\uBCF8 \uC635\uC158\r
Loading.show()\r
\r
// \uC0AC\uC6A9\uC790 \uC815\uC758\r
Loading.show({\r
  spinner: QSpinnerGears,\r
  // \uB2E4\uB978 props\r
})\r
\r
Loading.hide()\r
        `,-1),H={id:"example","data-name":"\uC608\uC81C"},J=t("\uC608\uC81C"),K=r("textarea",{readonly:""},`\r
<script sectup>\r
`+m("import { useQuasar } from 'quasar'")+`\r
import { onBeforeUnmount } from 'vue'\r
\r
const $q = useQuasar()\r
let timer\r
\r
const showLoading = () => {\r
  $q.loading.show()\r
\r
  // 2\uCD08 \uD6C4 \uB85C\uB529 \uC228\uAE40\r
  timer = setTimeout(() => {\r
    $q.loading.hide()\r
    timer = void 0\r
  }, 2000)\r
}\r
\r
onBeforeUnmount(() => {\r
  if (timer !== void 0) {\r
    clearTimeout(timer)\r
    $q.loading.hide()\r
  }\r
})\r
<\/script>\r
\r
<template>\r
  <div class="q-pa-md">\r
    <q-btn color="purple" @click="showLoading" label="\uB85C\uB529 \uBCF4\uAE30" />\r
  </div>\r
</template>\r
            `,-1),W={class:"q-pa-md"},X=r("textarea",{readonly:""},`\r
<script sectup>\r
`+m("import { useQuasar } from 'quasar'")+`\r
import { onBeforeUnmount } from 'vue'\r
\r
const $q = useQuasar()\r
let timer\r
\r
const showLoading = () => {\r
  $q.loading.show({\r
    message: '\uBA87 \uAC00\uC9C0 \uC911\uC694\uD55C \uD504\uB85C\uC138\uC2A4\uAC00 \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4. \uAE30\uB2E4\uB9AC\uC138\uC694...'\r
  })\r
\r
  // 3\uCD08 \uD6C4 \uB85C\uB529 \uC228\uAE40\r
  timer = setTimeout(() => {\r
    $q.loading.hide()\r
    timer = void 0\r
  }, 3000)\r
}\r
\r
onBeforeUnmount(() => {\r
  if (timer !== void 0) {\r
    clearTimeout(timer)\r
    $q.loading.hide()\r
  }\r
})\r
<\/script>\r
\r
<template>\r
  <div class="q-pa-md">\r
    <q-btn color="teal" @click="showLoading" label="\uB85C\uB529 \uBCF4\uAE30" />\r
  </div>\r
</template>\r
            `,-1),Y={class:"q-pa-md"},Z=r("textarea",{readonly:""},`\r
<script sectup>\r
`+m("import { useQuasar } from 'quasar'")+`\r
import { onBeforeUnmount } from 'vue'\r
\r
const $q = useQuasar()\r
let timer\r
\r
const showLoading = () => {\r
  $q.loading.show({\r
    message: '\uBB54\uAC00 \uD558\uB294 \uC911\uC785\uB2C8\uB2E4. \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694...',\r
    boxClass: 'bg-grey-2 text-grey-9',\r
    spinnerColor: 'primary'\r
  })\r
\r
  // 3\uCD08 \uD6C4 \uB85C\uB529 \uC228\uAE40\r
  timer = setTimeout(() => {\r
    $q.loading.hide()\r
    timer = void 0\r
  }, 3000)\r
}\r
\r
onBeforeUnmount(() => {\r
  if (timer !== void 0) {\r
    clearTimeout(timer)\r
    $q.loading.hide()\r
  }\r
})\r
<\/script>\r
\r
<template>\r
  <div class="q-pa-md">\r
    <q-btn color="purple" @click="showLoading" label="\uB85C\uB529 \uBCF4\uAE30" />\r
  </div>\r
</template>\r
            `,-1),nn={class:"q-pa-md"},rn=r("textarea",{readonly:""},`\r
<script sectup>\r
`+m("import { useQuasar } from 'quasar'")+`\r
import { onBeforeUnmount } from 'vue'\r
\r
const $q = useQuasar()\r
let timer\r
\r
const showLoading = () => {\r
  $q.loading.show({\r
    message: '\uBA87\uAC00\uC9C0 \uC911\uC694\uD55C <b>\uD504\uB85C\uC138\uC2A4</b>\uAC00 \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4.<br/><span class="text-primary">\uAE30\uB2E4\uB824 \uC8FC\uC138\uC694...</span>',\r
    html: true\r
  })\r
\r
  // 3\uCD08 \uD6C4 \uB85C\uB529 \uC228\uAE40\r
  timer = setTimeout(() => {\r
    $q.loading.hide()\r
    timer = void 0\r
  }, 3000)\r
}\r
\r
onBeforeUnmount(() => {\r
  if (timer !== void 0) {\r
    clearTimeout(timer)\r
    $q.loading.hide()\r
  }\r
})\r
<\/script>\r
\r
<template>\r
  <div class="q-pa-md">\r
    <q-btn color="teal" @click="showLoading" label="\uB85C\uB529 \uBCF4\uAE30" />\r
  </div>\r
</template>\r
            `,-1),en={class:"q-pa-md"},on=r("textarea",{readonly:""},`\r
<script sectup>\r
`+m("import { useQuasar, QSpinnerFacebook } from 'quasar'")+`\r
import { onBeforeUnmount } from 'vue'\r
\r
const $q = useQuasar()\r
let timer\r
\r
const showLoading = () => {\r
  $q.loading.show({\r
    spinner: QSpinnerFacebook,\r
    spinnerColor: 'yellow',\r
    spinnerSize: 140,\r
    backgroundColor: 'purple',\r
    message: '\uBA87 \uAC00\uC9C0 \uC911\uC694\uD55C \uD504\uB85C\uC138\uC2A4\uAC00 \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4. \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694...',\r
    messageColor: 'black'\r
  })\r
\r
  // 3\uCD08 \uD6C4 \uB85C\uB529 \uC228\uAE40\r
  timer = setTimeout(() => {\r
    $q.loading.hide()\r
    timer = void 0\r
  }, 3000)\r
}\r
\r
onBeforeUnmount(() => {\r
  if (timer !== void 0) {\r
    clearTimeout(timer)\r
    $q.loading.hide()\r
  }\r
})\r
<\/script>\r
\r
<template>\r
  <div class="q-pa-md">\r
    <q-btn color="red" @click="showLoading" label="\uB85C\uB529 \uBCF4\uAE30" />\r
  </div>\r
</template>\r
            `,-1),an={class:"q-pa-md"},tn=r("textarea",{readonly:""},`\r
<script sectup>\r
`+m("import { useQuasar, QSpinnerGears } from 'quasar'")+`\r
import { onBeforeUnmount } from 'vue'\r
\r
const $q = useQuasar()\r
let timer\r
\r
const showLoading = () => {\r
  $q.loading.show({\r
    message: '\uCCAB \uBC88\uC9F8 \uBA54\uC2DC\uC9C0. 3\uCD08 \uC548\uC5D0 \uBC14\uB01D\uB2C8\uB2E4...'\r
  })\r
\r
  timer = setTimeout(() => {\r
    $q.loading.show({\r
      spinner: QSpinnerGears,\r
      spinnerColor: 'red',\r
      messageColor: 'black',\r
      backgroundColor: 'yellow',\r
      message: '\uC5C5\uB370\uC774\uD2B8\uB41C \uBA54\uC2DC\uC9C0'\r
    })\r
\r
    timer = setTimeout(() => {\r
      $q.loading.hide()\r
      timer = void 0\r
    }, 2000)\r
  }, 2000)\r
}\r
\r
onBeforeUnmount(() => {\r
  if (timer !== void 0) {\r
    clearTimeout(timer)\r
    $q.loading.hide()\r
  }\r
})\r
<\/script>\r
\r
<template>\r
  <div class="q-pa-md">\r
    <q-btn color="primary" @click="showLoading" label="\uB85C\uB529 \uBCF4\uAE30" />\r
  </div>\r
</template>\r
            `,-1),sn={class:"q-pa-md"},ln={id:"default","data-name":"\uAE30\uBCF8\uAC12 \uC124\uC815"},dn=t("\uAE30\uBCF8\uAC12 \uC124\uC815"),mn=r("p",null,[t("\uB9E4\uBC88 \uD2B9\uC815\uAC12\uC744 \uC0AC\uC6A9\uD558\uB294 \uB300\uC2E0 \uAE30\uBCF8\uAC12\uC744 \uC124\uC815\uD558\uB824\uBA74 "),r("em",null,"main.js > framework > config > loading: {...}"),t("\uC744 \uC0AC\uC6A9\uD558\uAC70\uB098 "),r("code",null,"Loading.setDefaults({...})"),t(" \uB610\uB294 "),r("code",null,"$q.loading.setDefaults({...})"),t("\uB97C \uD638\uCD9C\uD558\uBA74 \uB429\uB2C8\uB2E4. ")],-1),cn=r("div",{class:"q-py-xl"},null,-1),un={class:"row justify-between items-cetner"},wn={__name:"Color",setup(pn){const i=g(()=>_(()=>import("./Code.fe4e34ed.js"),["assets/Code.fe4e34ed.js","assets/Code.2d671ef5.css","assets/index.b6be4404.js","assets/index.e8e7ed18.css"])),h=g(()=>_(()=>import("./Practice.0692e7b0.js"),["assets/Practice.0692e7b0.js","assets/Practice.e6958f8f.css","assets/index.b6be4404.js","assets/index.e8e7ed18.css","assets/use-dark.6c95071a.js","assets/use-form.b547680f.js","assets/QSeparator.b549cfd9.js","assets/use-panel.c8073603.js","assets/selection.27ab2460.js"])),a=$();let o;const f=()=>{a.loading.show(),o=setTimeout(()=>{a.loading.hide(),o=void 0},2e3)},v=()=>{a.loading.show({message:"\uBA87 \uAC00\uC9C0 \uC911\uC694\uD55C \uD504\uB85C\uC138\uC2A4\uAC00 \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4. \uAE30\uB2E4\uB9AC\uC138\uC694..."}),o=setTimeout(()=>{a.loading.hide(),o=void 0},3e3)},b=()=>{a.loading.show({message:"\uBB54\uAC00 \uD558\uB294 \uC911\uC785\uB2C8\uB2E4. \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694...",boxClass:"bg-grey-2 text-grey-9",spinnerColor:"primary"}),o=setTimeout(()=>{a.loading.hide(),o=void 0},3e3)},q=()=>{a.loading.show({message:'\uBA87\uAC00\uC9C0 \uC911\uC694\uD55C <b>\uD504\uB85C\uC138\uC2A4</b>\uAC00 \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4.<br/><span class="text-primary">\uAE30\uB2E4\uB824 \uC8FC\uC138\uC694...</span>',html:!0}),o=setTimeout(()=>{a.loading.hide(),o=void 0},3e3)},w=()=>{a.loading.show({spinner:x,spinnerColor:"yellow",spinnerSize:140,backgroundColor:"purple",message:"\uBA87 \uAC00\uC9C0 \uC911\uC694\uD55C \uD504\uB85C\uC138\uC2A4\uAC00 \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4. \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694...",messageColor:"black"}),o=setTimeout(()=>{a.loading.hide(),o=void 0},3e3)},Q=()=>{a.loading.show({message:"\uCCAB \uBC88\uC9F8 \uBA54\uC2DC\uC9C0. 3\uCD08 \uC548\uC5D0 \uBC14\uB01D\uB2C8\uB2E4..."}),o=setTimeout(()=>{a.loading.show({spinner:T,spinnerColor:"red",messageColor:"black",backgroundColor:"yellow",message:"\uC5C5\uB370\uC774\uD2B8\uB41C \uBA54\uC2DC\uC9C0"}),o=setTimeout(()=>{a.loading.hide(),o=void 0},2e3)},2e3)};return y(()=>{o!==void 0&&(clearTimeout(o),a.loading.hide())}),(gn,_n)=>{const l=u("Title"),d=u("Info"),p=u("Move");return k(),C("div",B,[r("section",U,[n(l,{head:""},{default:e(()=>[S]),_:1}),j,n(d,{advice:"",color:"teal-4"},{default:e(()=>[V]),_:1})]),r("section",D,[n(l,{sub:""},{default:e(()=>[E]),_:1}),n(s(i),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:e(()=>[G]),_:1})]),r("section",I,[n(l,{sub:""},{default:e(()=>[P]),_:1}),A]),r("section",N,[n(l,{minor:""},{default:e(()=>[F]),_:1}),n(s(i),{class:"q-mb-lg",language:"html",convert:{html:"vue"}},{default:e(()=>[M]),_:1})]),r("section",O,[n(l,{minor:""},{default:e(()=>[z]),_:1}),n(s(i),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:e(()=>[R]),_:1})]),r("section",H,[n(l,{sub:""},{default:e(()=>[J]),_:1}),n(s(h),{options:[{label:"\uAE30\uBCF8 \uC635\uC158",value:"default"},{label:"\uBA54\uC2DC\uC9C0",value:"message"},{label:"\uC0AC\uC6A9\uC790 \uC815\uC758 \uBC15\uC2A4",value:"box"},{label:"\uC548\uC804\uD558\uC9C0 \uC54A\uC740 \uBA54\uC2DC\uC9C0",value:"unsafe"},{label:"\uC0AC\uC6A9\uC790 \uC815\uC758",value:"custom"},{label:"\uD45C\uC2DC \uBC0F \uBCC0\uACBD",value:"change"}],"non-code":""},{default:e(()=>[n(s(i),{language:"html",convert:{html:"vue"}},{default:e(()=>[K]),_:1}),n(d,{label:"\uACB0\uACFC"},{default:e(()=>[r("div",W,[n(c,{color:"purple",onClick:f,label:"\uB85C\uB529 \uBCF4\uAE30"})])]),_:1})]),message:e(()=>[n(s(i),{language:"html",convert:{html:"vue"}},{default:e(()=>[X]),_:1}),n(d,{label:"\uACB0\uACFC"},{default:e(()=>[r("div",Y,[n(c,{color:"teal",onClick:v,label:"\uB85C\uB529 \uBCF4\uAE30"})])]),_:1})]),box:e(()=>[n(s(i),{language:"html",convert:{html:"vue"}},{default:e(()=>[Z]),_:1}),n(d,{label:"\uACB0\uACFC"},{default:e(()=>[r("div",nn,[n(c,{color:"purple",onClick:b,label:"\uB85C\uB529 \uBCF4\uAE30"})])]),_:1})]),unsafe:e(()=>[n(s(i),{language:"html",convert:{html:"vue"}},{default:e(()=>[rn]),_:1}),n(d,{label:"\uACB0\uACFC"},{default:e(()=>[r("div",en,[n(c,{color:"teal",onClick:q,label:"\uB85C\uB529 \uBCF4\uAE30"})])]),_:1})]),custom:e(()=>[n(s(i),{language:"html",convert:{html:"vue"}},{default:e(()=>[on]),_:1}),n(d,{label:"\uACB0\uACFC"},{default:e(()=>[r("div",an,[n(c,{color:"red",onClick:w,label:"\uB85C\uB529 \uBCF4\uAE30"})])]),_:1})]),change:e(()=>[n(s(i),{language:"html",convert:{html:"vue"}},{default:e(()=>[tn]),_:1}),n(d,{label:"\uACB0\uACFC"},{default:e(()=>[r("div",sn,[n(c,{color:"primary",onClick:Q,label:"\uB85C\uB529 \uBCF4\uAE30"})])]),_:1})]),_:1})]),r("section",ln,[n(l,{sub:""},{default:e(()=>[dn]),_:1}),mn]),cn,n(L,{class:"q-mb-lg"}),r("div",null,[r("div",un,[n(p,{label:"Dark",prev:"",to:{name:"dark"}}),n(p,{label:"Notify",next:"",to:{name:"notify"}})])])])}}};export{wn as default};
