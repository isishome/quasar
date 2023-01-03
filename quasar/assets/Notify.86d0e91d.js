import{ai as k,c as U,d as r,a as n,w as o,a5 as a,e as s,aj as C,a1 as X,a4 as h,o as J,Q as t,ah as g,aa as c}from"./index.b6be4404.js";import{Q as K}from"./QSeparator.b549cfd9.js";import{Q as Y}from"./QSpinnerGears.7ae31e52.js";import"./use-dark.6c95071a.js";const Z={class:"q-px-md text-body2"},nn={id:"intro","data-name":"\uC18C\uAC1C"},rn=s("Notify \uD50C\uB7EC\uADF8\uC778 "),on=r("p",null,"Notify\uB294 \uC54C\uB9BC \uD615\uD0DC\uB85C \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC560\uB2C8\uBA54\uC774\uC158 \uBA54\uC2DC\uC9C0(\uD398\uC774\uC9C0\uC5D0 \uC788\uB294 \uB2E4\uB978 \uC694\uC18C\uB4E4 \uBCF4\uB2E4 \uC0C1\uC704\uC5D0 \uC788\uB294)\uB97C \uD45C\uC2DC\uD560 \uC218 \uC788\uB294 Quasar \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4. \uC774\uBCA4\uD2B8\uB97C \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC54C\uB9AC\uB294 \uB370 \uC720\uC6A9\uD558\uBA70 \uC561\uC158\uC744 \uD1B5\uD574 \uC0AC\uC6A9\uC790\uC758 \uCC38\uC5EC\uB97C \uC720\uB3C4\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uD1A0\uC2A4\uD2B8 \uB610\uB294 \uC2A4\uB0B5\uBC14\uB77C\uACE0\uB3C4 \uD569\uB2C8\uB2E4.",-1),en=r("p",null,"HTTP \uC694\uCCAD \uC131\uACF5\uC774\uB098 \uC2E4\uD328\uC5D0 \uB300\uD55C \uBA54\uC2DC\uC9C0\uB97C \uBCF4\uC5EC\uC8FC\uAC70\uB098 \uC0AC\uC6A9\uC790 \uB3D9\uC758\uB97C \uBC1B\uB294 \uB4F1 \uB2E4\uC591\uD55C \uACF3\uC5D0 \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),tn=s("Notify \uD50C\uB7EC\uADF8\uC778\uC758 \uC635\uC158\uC774\uB098 \uBA54\uC11C\uB4DC\uB294 Quasar \uACF5\uC2DD \uD648\uD398\uC774\uC9C0 "),sn=s("Notify API"),an=s("\uB97C \uCC38\uACE0\uD558\uC138\uC694. "),ln={id:"install","data-name":"\uC124\uCE58"},cn=s("\uC124\uCE58"),un=r("textarea",{readonly:""},`\r
// main.js\r
\r
import {\r
  Quasar,\r
  Notify\r
} from 'quasar'\r
\r
app.use(Quasar, {\r
  plugins: {\r
    Notify\r
  },\r
  config: {\r
    Notify: { /* API \uCE74\uB4DC\uC5D0\uC11C QuasarConfOptions \uC0B4\uD3B4\uBCF4\uAE30 */ }\r
  }\r
})\r
        `,-1),dn={id:"usage","data-name":"\uC0AC\uC6A9\uBC95"},pn=s("\uC0AC\uC6A9\uBC95"),mn={id:"inside","data-name":"Vue \uD30C\uC77C\uC5D0\uC11C \uC0AC\uC6A9\uD558\uAE30",sub:""},gn=s("Vue \uD30C\uC77C\uC5D0\uC11C \uC0AC\uC6A9\uD558\uAE30"),fn=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
$q.notify('\uBA54\uC2DC\uC9C0')\r
// \uB610\uB294 \uAD6C\uC131 \uAC1D\uCCB4\uC640 \uD568\uAED8:\r
$q.notify({...})\r
<\/script>\r
        `,-1),_n={id:"outside","data-name":"Vue \uD30C\uC77C \uC678\uBD80\uC5D0\uC11C \uC0AC\uC6A9\uD558\uAE30",sub:""},hn=s("Vue \uD30C\uC77C \uC678\uBD80\uC5D0\uC11C \uC0AC\uC6A9\uD558\uAE30"),vn=r("textarea",{readonly:""},`\r
`+c("import { Notify } from 'quasar'")+`\r
\r
Notify.create('\uC704\uD5D8\uD574! \uC138\uB77C\uC57C! \uC704\uD5D8!')\r
// \uB610\uB294 \uAD6C\uC131 \uAC1D\uCCB4\uC640 \uD568\uAED8:\r
Notify.create({\r
  message: '\uC704\uD5D8\uD574! \uC138\uB77C\uC57C! \uC704\uD5D8!'\r
})\r
        `,-1),bn={id:"example","data-name":"\uAE30\uBCF8 \uC608\uC81C",sub:""},yn=s("\uAE30\uBCF8 \uC608\uC81C"),qn=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
const showNotif = () => {\r
  $q.notify({\r
    message: '\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694',\r
    color: 'purple'\r
  })\r
}\r
<\/script>\r
\r
<template>\r
  <q-btn color="purple" @click="showNotif" label="\uC54C\uB9BC \uBCF4\uAE30" />\r
</template>\r
            `,-1),wn={class:"q-pb-md"},kn=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
const showNotif = () => {\r
  $q.notify({\r
    message: '\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694',\r
    caption: '5\uBD84\uC804',\r
    color: 'secondary'\r
  })\r
}\r
<\/script>\r
\r
<template>\r
  <q-btn color="purple" @click="showNotif" label="\uC54C\uB9BC \uBCF4\uAE30" />\r
</template>\r
            `,-1),Cn={class:"q-pb-md"},$n=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
const showNotif = () => {\r
  $q.notify({\r
    message: '\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694',\r
    icon: 'announcement'\r
  })\r
}\r
<\/script>\r
\r
<template>\r
  <q-btn color="purple" @click="showNotif" label="\uC54C\uB9BC \uBCF4\uAE30" />\r
</template>\r
            `,-1),Nn={class:"q-pb-md"},xn=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
const showNotif = () => {\r
  $q.notify({\r
    message: '\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694',\r
    color: 'indigo',\r
    avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png'\r
  })\r
}\r
<\/script>\r
\r
<template>\r
  <q-btn color="purple" @click="showNotif" label="\uC54C\uB9BC \uBCF4\uAE30" />\r
</template>\r
            `,-1),Qn={class:"q-pb-md"},Tn=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
const showNotif = () => {\r
  $q.notify({\r
    spinner: true,\r
    message: '\uAE30\uB2E4\uB824 \uC8FC\uC138\uC694...',\r
    timeout: 2000\r
  })\r
}\r
<\/script>\r
\r
<template>\r
  <q-btn color="purple" @click="showNotif" label="\uC54C\uB9BC \uBCF4\uAE30" />\r
</template>\r
            `,-1),Mn={class:"q-pb-md"},Ln=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar, QSpinnerGears } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
const showNotif = () => {\r
  $q.notify({\r
    spinner: QSpinnerGears,\r
    message: '\uC5C5\uBB34 \uC911...',\r
    timeout: 2000\r
  })\r
}\r
<\/script>\r
\r
<template>\r
  <q-btn color="purple" @click="showNotif" label="\uC54C\uB9BC \uBCF4\uAE30" />\r
</template>\r
            `,-1),zn={class:"q-pb-md"},jn=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
const showNotif = () => {\r
  $q.notify({\r
    message: '\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694',\r
    color: 'indigo',\r
    avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png',\r
    actions: [\r
      { label: '\uBB34\uC2DC', color: 'white', handler: () => { /* ... */ } }\r
    ]\r
  })\r
\r
  $q.notify({\r
    message: '\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694',\r
    color: 'indigo',\r
    avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png',\r
    actions: [\r
      { label: '\uC751\uB2F5', color: 'yellow', handler: () => { /* ... */ } },\r
      { label: '\uBB34\uC2DC', color: 'white', handler: () => { /* ... */ } }\r
    ]\r
  })\r
}\r
<\/script>\r
\r
<template>\r
  <q-btn color="purple" @click="showNotif" label="\uC54C\uB9BC \uBCF4\uAE30" />\r
</template>\r
            `,-1),In={class:"q-pb-md"},Pn=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
const showNotif = () => {\r
  $q.notify({\r
    message: '\uC138\uB77C\uC5D0\uAC8C \uC810\uC2EC \uC2DD\uC0AC \uC5F0\uB77D\uC774 \uC654\uC2B5\uB2C8\uB2E4',\r
    color: 'indigo',\r
    multiLine: true,\r
    avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png',\r
    actions: [\r
      { label: '\uC218\uB77D', color: 'yellow', handler: () => { /* ... */ } }\r
    ]\r
  })\r
}\r
<\/script>\r
\r
<template>\r
  <q-btn color="purple" @click="showNotif" label="\uC54C\uB9BC \uBCF4\uAE30" />\r
</template>\r
            `,-1),Vn={class:"q-pb-md"},An=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
const alerts = [\r
  { color: 'negative', message: '\uC640! \uC704\uD5D8! \uC810\uC810 \uB2A5\uC219\uD574\uC9C0\uACE0 \uC788\uAD70\uC694!', icon: 'report_problem' },\r
  { message: '\uC774\uAC78 \uC54C\uC544\uC57C \uD569\uB2C8\uB2E4!', icon: 'warning' },\r
  { message: '\uC640! \uC798\uD588\uC5B4!', icon: 'thumb_up' },\r
  { color: 'teal', message: 'Quasar \uBA4B\uC9C0\uB2E4! \uADF8\uCD78?', icon: 'tag_faces' },\r
  { color: 'purple', message: '\uC138\uB77C\uAC00 \uBC29\uAE08 \uC804\uD654\uD588\uC5B4', avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png' },\r
  { multiLine: true, message: '\uC2DD\uC0AC\uB294 \uC5C6\uC5B4 \uBC30\uACE0\uD30C\uB3C4 \uC74C\uB8CC\uB294 \uC5C6\uC5B4 \uBAA9\uB9D0\uB77C\uB3C4 \uB2EC\uCF64\uD55C \uB9DB\uB9CC \uB514\uC800\uD2B8\uB9CC \uB9CC \uC6D0\uD558\uAC8C \uB420 \uAC70 \uC54C\uC796\uC544 \uC2DD\uC0AC\uB294 \uC5C6\uC5B4 \uBC30\uACE0\uD30C\uB3C4 \uC74C\uB8CC\uB294 \uC5C6\uC5B4 \uBAA9\uB9D0\uB77C\uB3C4 \uB2EC\uCF64\uD55C \uB9DB\uB9CC \uB514\uC800\uD2B8\uB9CC \uB9CC \uC6D0\uD558\uAC8C \uB420 \uAC70 \uC54C\uC796\uC544' }\r
]\r
\r
const showNotif = (position) => {\r
  const { color, textColor, multiLine, icon, message, avatar } = alerts[\r
    Math.floor(Math.random(alerts.length) * 10) % alerts.length\r
  ]\r
  const random = Math.random() * 100\r
\r
  const twoActions = random > 70\r
  const buttonColor = color ? 'white' : void 0\r
\r
  $q.notify({\r
    color,\r
    textColor,\r
    icon: random > 30 ? icon : null,\r
    message,\r
    position,\r
    avatar,\r
    multiLine,\r
    actions: twoActions\r
      ? [\r
        { label: '\uC751\uB2F5', color: buttonColor, handler: () => { /* console.log('\uC640\uC544\uC544\uC6B0') */ } },\r
        { label: '\uBB34\uC2DC', color: 'yellow', handler: () => { /* console.log('\uC640\uC544\uC544\uC6B0') */ } }\r
      ]\r
      : (random > 40\r
        ? [{ label: '\uC751\uB2F5', color: buttonColor, handler: () => { /* console.log('\uC640\uC544\uC544\uC6B0') */ } }]\r
        : null\r
      ),\r
    timeout: Math.random() * 5000 + 3000\r
  })\r
}\r
<\/script>\r
\r
<template>\r
<div class="q-pa-md q-gutter-y-sm column items-center">\r
  <div>\r
    <div class="row q-gutter-sm">\r
      <q-btn round size="sm" color="secondary" @click="showNotif('top-left')">\r
        <q-icon name="arrow_back" class="rotate-45" />\r
      </q-btn>\r
      <q-btn round size="sm" color="accent" @click="showNotif('top')">\r
        <q-icon name="arrow_upward" />\r
      </q-btn>\r
      <q-btn round size="sm" color="secondary" @click="showNotif('top-right')">\r
        <q-icon name="arrow_upward" class="rotate-45" />\r
      </q-btn>\r
    </div>\r
  </div>\r
\r
  <div>\r
    <div class="row q-gutter-sm">\r
      <div>\r
        <q-btn round size="sm" color="accent" @click="showNotif('left')">\r
          <q-icon name="arrow_back" />\r
        </q-btn>\r
      </div>\r
      <div>\r
        <q-btn round size="sm" color="accent" @click="showNotif('center')">\r
          <q-icon name="fullscreen_exit" />\r
        </q-btn>\r
      </div>\r
      <div>\r
        <q-btn round size="sm" color="accent" @click="showNotif('right')">\r
          <q-icon name="arrow_forward" />\r
        </q-btn>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div>\r
    <div class="row q-gutter-sm">\r
      <div>\r
        <q-btn round size="sm" color="secondary" @click="showNotif('bottom-left')">\r
          <q-icon name="arrow_forward" class="rotate-135" />\r
        </q-btn>\r
      </div>\r
      <div>\r
        <q-btn round size="sm" color="accent" @click="showNotif('bottom')">\r
          <q-icon name="arrow_downward" />\r
        </q-btn>\r
      </div>\r
      <div>\r
        <q-btn round size="sm" color="secondary" @click="showNotif('bottom-right')">\r
          <q-icon name="arrow_forward" class="rotate-45" />\r
        </q-btn>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
</template>\r
            `,-1),Hn={class:"q-pb-md q-gutter-y-sm column items-center"},Gn={class:"row q-gutter-sm"},Sn={class:"row q-gutter-sm"},Rn={class:"row q-gutter-sm"},Bn=r("p",null,[r("b",null,"\uD301")],-1),On=r("p",null,"actions\uC744 \uC815\uC758\uD558\uBA74, \uC0AC\uC6A9\uC790\uAC00 action\uC744 \uC120\uD0DD\uD560 \uB54C \uC54C\uB9BC\uC774 \uC790\uB3D9\uC73C\uB85C \uD574\uC81C\uB429\uB2C8\uB2E4.",-1),En={id:"group","data-name":"\uADF8\uB8F9\uD654",sub:""},Dn=s("\uADF8\uB8F9\uD654"),Wn=r("p",null,"\uAC01 \uC54C\uB9BC\uC5D0\uB294 \uBA54\uC2DC\uC9C0 + \uCEA1\uC158 + \uBA40\uD2F0\uB77C\uC778 + \uC561\uC158 \uB808\uC774\uBE14 + \uD3EC\uC9C0\uC158\uC5D0\uC11C \uACC4\uC0B0\uB418\uB294 \uAE30\uBCF8 \uACE0\uC720 \uADF8\uB8F9\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB3D9\uC77C\uD55C \uADF8\uB8F9\uC5D0\uC11C \uC5EC\uB7EC \uC54C\uB9BC\uC774 \uD2B8\uB9AC\uAC70 \uB418\uBA74 \uBAA8\uB4E0 \uC54C\uB9BC\uC744 \uD3BC\uCCD0 \uD45C\uC2DC\uD558\uB294 \uB300\uC2E0 \uCCAB \uBC88\uC9F8 \uC54C\uB9BC\uB9CC \uBC30\uC9C0\uC640 \uD568\uAED8 \uD654\uBA74\uC5D0 \uB0A8\uC2B5\uB2C8\uB2E4. \uBC30\uC9C0 \uCF58\uD150\uCE20\uB294 \uCCAB \uBC88\uC9F8 \uC54C\uB9BC\uC774 \uD654\uBA74\uC5D0 \uB098\uD0C0\uB09C \uC774\uD6C4 \uB3D9\uC77C\uD55C \uC54C\uB9BC\uC774 \uB3D9\uC77C\uD55C \uC704\uCE58\uC5D0\uC11C \uD2B8\uB9AC\uAC70 \uB41C \uD69F\uC218\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4.",-1),Fn=r("p",null,[s("\uC774 \uB3D9\uC791\uC744 \uBE44\uD65C\uC131\uD654\uD558\uB824\uBA74 "),r("code",null,"group: false"),s("\uB97C \uC9C0\uC815\uD558\uC138\uC694. \uC544\uB798 \uC608\uC5D0\uC11C \uCCAB \uBC88\uC9F8 \uC608\uC81C\uB294 \uD074\uB9AD\uD560 \uB54C\uB9C8\uB2E4 \uB3D9\uC77C\uD55C \uC54C\uB9BC\uC744 \uB450 \uBC88 \uD2B8\uB9AC\uAC70 \uD569\uB2C8\uB2E4. \uB450 \uBC88\uC9F8 \uC608\uC81C\uB294 \uADF8\uB8F9\uD654\uAC00 \uBE44\uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC138 \uBC88\uC9F8 \uC608\uC81C\uB294 \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uADF8\uB8F9\uBA85\uC774 \uC788\uC73C\uBBC0\uB85C \uC774\uD6C4\uC758 \uC54C\uB9BC\uC740 \uC774\uC804 \uC54C\uB9BC\uC744 \uB300\uCCB4\uD558\uACE0 \uBC30\uC9C0 \uBC88\uD638\uB97C \uC99D\uAC00\uC2DC\uD0B5\uB2C8\uB2E4.")],-1),Un=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
const triggerTwice = () => {\r
  $q.notify({\r
    message: '\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694.',\r
    color: 'purple'\r
  })\r
\r
  $q.notify({\r
    message: '\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694.',\r
    color: 'purple'\r
  })\r
}\r
<\/script>\r
\r
<template>\r
  <div class="row q-gutter-sm">\r
    <q-btn no-caps color="teal" @click="triggerTwice" label="\uB450 \uBC88 \uD2B8\uB9AC\uAC70" />\r
  </div>\r
</template>\r
            `,-1),Xn={class:"q-pb-md"},Jn={class:"row q-gutter-sm"},Kn=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
const triggerNoGroupingTwice = () => {\r
  $q.notify({\r
    group: false,\r
    message: '\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694.',\r
    color: 'purple'\r
  })\r
\r
  $q.notify({\r
    group: false,\r
    message: '\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694.',\r
    color: 'purple'\r
  })\r
}\r
<\/script>\r
\r
<template>\r
  <div class="row q-gutter-sm">\r
    <q-btn no-caps color="teal" @click="triggerNoGroupingTwice" label="\uB450 \uBC88 \uD2B8\uB9AC\uAC70(\uADF8\uB8F9\uD654\uB418\uC9C0 \uC54A\uC74C)" />\r
  </div>\r
</template>\r
            `,-1),Yn={class:"q-pb-md"},Zn={class:"row q-gutter-sm"},nr=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
const triggerTwiceCustomGroup = () => {\r
  $q.notify({\r
    group: 'my-group',\r
    message: '\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694.',\r
    color: 'purple'\r
  })\r
\r
  // \uC774\uC804 \uADF8\uB8F9\uACFC \uB3D9\uC77C\uD55C \uADF8\uB8F9\uC774\uBBC0\uB85C\r
  // \uC774\uB97C \uB300\uCCB4\uD558\uACE0 \r
  // \uBC30\uC9C0 \uBC88\uD638\uB97C \uC99D\uAC00\uC2DC\uD0B5\uB2C8\uB2E4:\r
  $q.notify({\r
    group: 'my-group',\r
    message: '\uBDD4\uAC00 \uBA54\uC2DC\uC9C0\uB97C \uBCF4\uB0C8\uC2B5\uB2C8\uB2E4.',\r
    color: 'indigo'\r
  })\r
}\r
<\/script>\r
\r
<template>\r
  <div class="row q-gutter-sm">\r
    <q-btn no-caps color="teal" @click="triggerTwiceCustomGroup" label="\uB450 \uBC88 \uD2B8\uB9AC\uAC70(\uC0AC\uC6A9\uC790 \uC815\uC758 \uADF8\uB8F9\uD654)" />\r
  </div>\r
</template>\r
            `,-1),rr={class:"q-pb-md"},or={class:"row q-gutter-sm"},er=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
const triggerTwice = () => {\r
  $q.notify({\r
    message: '\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694.',\r
    color: 'purple',\r
    badgeColor: 'yellow',\r
    badgeTextColor: 'dark',\r
    badgeClass: 'shadow-3 glossy my-badge-class'\r
  })\r
\r
  $q.notify({\r
    message: '\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694.',\r
    color: 'purple',\r
    badgeColor: 'yellow',\r
    badgeTextColor: 'dark',\r
    badgeClass: 'shadow-3 glossy my-badge-class'\r
  })\r
}\r
<\/script>\r
\r
<template>\r
  <q-btn no-caps color="indigo" @click="triggerTwice" label="\uB450 \uBC88 \uD2B8\uB9AC\uAC70\uC640 \uC0AC\uC6A9\uC790 \uC815\uC758 \uBC30\uC9C0" />\r
</template>\r
            `,-1),tr={class:"q-pb-md"},sr={id:"timeout","data-name":"\uD0C0\uC784\uC544\uC6C3 \uC9C4\uD589 \uC0C1\uD669",sub:""},ar=s("\uD0C0\uC784\uC544\uC6C3 \uC9C4\uD589 \uC0C1\uD669"),lr=r("p",null,"timeout\uC744 0\uC73C\uB85C \uC124\uC815\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0, \uD654\uBA74\uC5D0\uC11C \uC54C\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uB294 \uC2DC\uAC04\uC744 \uC0AC\uC6A9\uC790\uAC00 \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),ir=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
const showNotifs = () => {\r
  $q.notify({\r
    progress: true,\r
    message: '\uC2DD\uC0AC\uB294 \uC5C6\uC5B4 \uBC30\uACE0\uD30C\uB3C4 \uC74C\uB8CC\uB294 \uC5C6\uC5B4 \uBAA9\uB9D0\uB77C\uB3C4 \uB2EC\uCF64\uD55C \uB9DB\uB9CC \uB514\uC800\uD2B8\uB9CC \uB9CC \uC6D0\uD558\uAC8C \uB420 \uAC70 \uC54C\uC796\uC544 \uC2DD\uC0AC\uB294 \uC5C6\uC5B4 \uBC30\uACE0\uD30C\uB3C4 \uC74C\uB8CC\uB294 \uC5C6\uC5B4 \uBAA9\uB9D0\uB77C\uB3C4 \uB2EC\uCF64\uD55C \uB9DB\uB9CC \uB514\uC800\uD2B8\uB9CC \uB9CC \uC6D0\uD558\uAC8C \uB420 \uAC70 \uC54C\uC796\uC544',\r
    color: 'indigo',\r
    multiLine: true,\r
    avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png',\r
    actions: [\r
      { label: '\uC751\uB2F5', color: 'yellow', handler: () => { /* ... */ } }\r
    ]\r
  })\r
\r
  setTimeout(() => {\r
    $q.notify({\r
      progress: true,\r
      message: '\uC138\uB77C\uC5D0\uAC8C \uBA54\uC77C \uC654\uC5B4\uC694.',\r
      icon: 'mail',\r
      color: 'white',\r
      textColor: 'indigo'\r
    })\r
  }, 2000)\r
\r
  setTimeout(() => {\r
    $q.notify({\r
      progress: true,\r
      message: '\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694.',\r
      color: 'purple',\r
      avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png',\r
      actions: [\r
        { label: '\uC751\uB2F5', color: 'yellow', handler: () => { /* ... */ } }\r
      ]\r
    })\r
  }, 3200)\r
}\r
<\/script>\r
\r
<template>\r
  <q-btn no-caps color="purple" @click="showNotifs" label="\uD0C0\uC784\uC544\uC6C3 \uC9C4\uD589 \uC0C1\uD669 \uBCF4\uAE30" />\r
</template>\r
            `,-1),cr={class:"q-pb-md"},ur={id:"update","data-name":"\uC5C5\uB370\uC774\uD2B8 \uAC00\uB2A5\uD55C \uC54C\uB9BC",sub:""},dr=s("\uC5C5\uB370\uC774\uD2B8 \uAC00\uB2A5\uD55C \uC54C\uB9BC"),pr=r("p",null,"\uC9C4\uD589 \uC911\uC778 \uD504\uB85C\uC138\uC2A4\uAC00 \uC788\uC744 \uB54C, \uD604\uC7AC \uC791\uC5C5\uC744 \uC885\uB8CC\uD558\uC9C0 \uC54A\uACE0 \uC9C4\uD589 \uC0C1\uD669\uC744 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC54C\uB9AC\uB824\uBA74 \uC5C5\uB370\uC774\uD2B8 \uAC00\uB2A5\uD55C \uC54C\uB9BC\uC744 \uC0AC\uC6A9\uD558\uC138\uC694. \uC5C5\uB370\uC774\uD2B8\uB418\uB294 \uB3D9\uC548 \uC2A4\uD53C\uB108\uB97C \uBCF4\uC5EC\uC8FC\uB294 \uAC83\uB3C4 \uC88B\uC2B5\uB2C8\uB2E4.",-1),mr=r("p",null,"\uC544\uB798 \uC608\uC81C\uC5D0\uC11C\uB294 \u201Cgroup: false\u201D(\uADF8\uB8F9\uD654\uB418\uC9C0 \uC54A\uC740 \uC54C\uB9BC\uB9CC \uC5C5\uB370\uC774\uD2B8\uD558\uAE30 \uC704\uD574)\uC640 \u201Ctimeout: 0\u201D(\uC54C\uB9BC\uC774 \uD574\uC81C\uB418\uB294 \uB54C\uB97C \uC804\uC801\uC73C\uB85C \uC81C\uC5B4\uD558\uAE30 \uC704\uD574)\uC744 \uBA85\uC2DC\uC801\uC73C\uB85C \uC124\uC815\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. ",-1),gr=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
const showNotif = () => {\r
  const notif = $q.notify({\r
    group: false, // \uC5C5\uB370\uC774\uD2B8 \uAC00\uB2A5\uD574\uC57C \uD568\r
    timeout: 0, // \uC54C\uB9BC\uC774 \uD574\uC81C\uB418\uB294 \uB54C\uB97C \uC804\uC801\uC73C\uB85C \uC81C\uC5B4\uD558\uAE30 \uC704\uD574\r
    spinner: true,\r
    message: '\uC5C5\uB370\uC774\uD2B8 \uD30C\uC77C...',\r
    caption: '0%'\r
  })\r
\r
  // \uC774\uACF3\uC5D0\uC11C \uC9C4\uD589 \uC0C1\uD669\uC744 \uC2DC\uBBAC\uB808\uC774\uC158\r
  let percentage = 0\r
  const interval = setInterval(() => {\r
    percentage = Math.min(100, percentage + Math.floor(Math.random() * 22))\r
\r
    // \uB2E4\uC774\uC5BC\uB85C\uADF8 \uC5C5\uB370\uC774\uD2B8\r
    notif({\r
      caption: \`\${percentage}%\`\r
    })\r
\r
    // \uC644\uB8CC\uB418\uBA74...\r
    if (percentage === 100) {\r
      notif({\r
        icon: 'done', // \uC544\uC774\uCF58\uC744 \uCD94\uAC00\r
        spinner: false, // \uC544\uC774\uCF58\uC774 \uD45C\uC2DC\uB420 \uC218 \uC788\uB3C4\uB85D \uC2A4\uD53C\uB108\uB97C \uCD08\uAE30\uD654\r
        message: '\uC5C5\uB370\uC774\uD2B8 \uC644\uB8CC!',\r
        timeout: 2500 // 2.5\uCD08\uC758 \uD0C0\uC784\uC544\uC6C3\r
      })\r
      clearInterval(interval)\r
    }\r
  }, 500)\r
}\r
<\/script>\r
\r
<template>\r
  <q-btn no-caps color="purple" @click="showNotif" label="\uC5C5\uB370\uC774\uD2B8 \uAC00\uB2A5\uD55C \uC54C\uB9BC \uBCF4\uAE30" />\r
</template>\r
            `,-1),fr={class:"q-pb-md"},_r={id:"predefine","data-name":"\uBBF8\uB9AC \uC815\uC758\uB41C \uC720\uD615",sub:""},hr=s("\uBBF8\uB9AC \uC815\uC758\uB41C \uC720\uD615"),vr=r("p",null,"\u201Cpositive\u201D, \u201Cnegative\u201D, \u201Cwarning\u201D \uBC0F \u201Cinfo\u201D\uC758 \uBBF8\uB9AC \uC815\uC758\uB41C \uB124 \uAC00\uC9C0 \uC720\uD615\uC744 \uAE30\uBCF8\uC801\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),br=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
const triggerPositive = () => {\r
  $q.notify({\r
    type: 'positive',\r
    message: '\uC774\uAC83\uC740 "positive" \uC720\uD615\uC758 \uC54C\uB9BC\uC785\uB2C8\uB2E4.'\r
  })\r
}\r
\r
const triggerNegative = () => {\r
  $q.notify({\r
    type: 'negative',\r
    message: '\uC774\uAC83\uC740 "negative" \uC720\uD615\uC758 \uC54C\uB9BC\uC785\uB2C8\uB2E4.'\r
  })\r
}\r
\r
const triggerWarning = () => {\r
  $q.notify({\r
    type: 'warning',\r
    message: '\uC774\uAC83\uC740 "warning" \uC720\uD615\uC758 \uC54C\uB9BC\uC785\uB2C8\uB2E4.'\r
  })\r
}\r
\r
const triggerInfo = () => {\r
  $q.notify({\r
    type: 'info',\r
    message: '\uC774\uAC83\uC740 "info" \uC720\uD615\uC758 \uC54C\uB9BC\uC785\uB2C8\uB2E4.'\r
  })\r
}\r
\r
const triggerOngoing = () => {\r
  // \uC54C\uB9BC \uCC38\uC870\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.\r
  // \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uD574\uC81C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. ('ongoing' \uC720\uD615\uC740 timeout 0\uC744 \uAC00\uC9D0)\r
  const notif = $q.notify({\r
    type: 'ongoing',\r
    message: '\uAC80\uC0C9\uC5B4\uB97C \uCC3E\uACE0 \uC788\uC2B5\uB2C8\uB2E4...'\r
  })\r
\r
  // simulate delay\r
  setTimeout(() => {\r
    notif({\r
      type: 'positive',\r
      message: '\uC6D0\uD558\uB294 \uACB0\uACFC\uB97C \uCC3E\uC558\uC2B5\uB2C8\uB2E4',\r
      timeout: 1000\r
    })\r
  }, 4000)\r
}\r
<\/script>\r
\r
<template>\r
  <div class="row q-gutter-sm">\r
    <q-btn no-caps unelevated color="positive" @click="triggerPositive" label="'positive' \uD2B8\uB9AC\uAC70" />\r
    <q-btn no-caps unelevated color="negative" @click="triggerNegative" label="'negative' \uD2B8\uB9AC\uAC70" />\r
    <q-btn no-caps unelevated color="warning" text-color="dark" @click="triggerWarning" label="'warning' \uD2B8\uB9AC\uAC70" />\r
    <q-btn no-caps unelevated color="info" @click="triggerInfo" label="'info' \uD2B8\uB9AC\uAC70" />\r
    <q-btn no-caps unelevated color="grey-8" @click="triggerOngoing" label="'ongoing' \uD2B8\uB9AC\uAC70" />\r
  </div>\r
</template>\r
        `,-1),yr={class:"q-pb-md"},qr={class:"row q-gutter-sm"},wr=r("p",null,[s("\uC0AC\uC6A9\uC790 \uC815\uC758 \uC720\uD615\uC744 \uB4F1\uB85D\uD558\uAC70\uB098 \uBBF8\uB9AC \uC815\uC758\uB41C \uC720\uD615\uC744 \uC7AC\uC815\uC758\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. "),r("code",null,"@quasar/app-vite Boot File"),s(" \uB610\uB294 "),r("code",null,"@quasar/app-webpack Boot File"),s("\uC5D0 \uC801\uC6A9\uD574 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uAC00\uC7A5 \uC88B\uC2B5\uB2C8\uB2E4. ")],-1),kr=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
/**\r
 * \uC0AC\uC6A9 \uC804\uC5D0 \uC720\uD615\uC744 \uB4F1\uB85D\uD574 \uB193\uC544\uC57C \uD569\uB2C8\uB2E4.\r
 *\r
 * .vue \uD30C\uC77C \uB300\uC2E0 \uBD80\uD305 \uD30C\uC77C\uC774 \uAC00\uC7A5 \uC88B\uC2B5\uB2C8\uB2E4.\r
 * \uADF8\uAC8C \uC544\uB2C8\uB77C\uBA74 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uB9E4\uBCF8 \uB4F1\uB85D\uD574\uC57C\r
 * \uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4 :)\r
 */\r
\r
$q.notify.registerType('my-notif', {\r
  icon: 'announcement',\r
  progress: true,\r
  color: 'brown',\r
  textColor: 'white',\r
  classes: 'glossy'\r
})\r
\r
const triggerCustomRegisteredType1 = () => {\r
  $q.notify({\r
    type: 'my-notif',\r
    message: '\uC774 \uC54C\uB9BC\uC740 \uC0AC\uC6A9\uC790 \uC815\uC758 \uC720\uD615\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.'\r
  })\r
}\r
\r
const triggerCustomRegisteredType2 = () => {\r
  // this one overrides some of the original\r
  // options of the "my-notif" registered type\r
  $q.notify({\r
    type: 'my-notif',\r
    icon: 'contactless',\r
    message: '\uC774 \uC54C\uB9BC\uC740 \uC0AC\uC6A9\uC790 \uC815\uC758 \uC720\uD615\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.',\r
    caption: 'my-notif \uC720\uD615\uC758 \uAE30\uBCF8 \uC544\uC774\uCF58\uACFC \uC0C9\uC0C1\uC744 \uC7AC\uC815\uC758 \uD569\uB2C8\uB2E4.',\r
    color: 'primary'\r
  })\r
}\r
<\/script>\r
\r
<div class="row q-gutter-sm">\r
  <q-btn no-caps color="brown" @click="triggerCustomRegisteredType1" label="\uC0AC\uC6A9\uC790 \uC815\uC758 \uC720\uD615 1" />\r
  <q-btn no-caps color="primary" @click="triggerCustomRegisteredType2" label="\uC0AC\uC6A9\uC790 \uC815\uC758 \uC720\uD615 2" />\r
</div>\r
</template>\r
        `,-1),Cr={class:"q-pb-md"},$r={class:"row q-gutter-sm"},Nr=r("textarea",{readonly:""},`\r
// \uBD80\uD305 \uD30C\uC77C\uC5D0 \uB4F1\uB85D\uD558\uB294 \uBC29\uBC95\r
\r
`+c("import { Notify } from 'quasar'")+`\r
\r
Notify.registerType('my-notif', {\r
  icon: 'announcement',\r
  progress: true,\r
  color: 'brown',\r
  textColor: 'white',\r
  classes: 'glossy'\r
})\r
        `,-1),xr={id:"html","data-name":"HTML \uC0AC\uC6A9",sub:""},Qr=s("HTML \uC0AC\uC6A9"),Tr=r("p",null,[r("code",null,"html: true"),s(" prop\uC744 \uC9C0\uC815\uD558\uBA74 HTML\uC744 \uBA54\uC2DC\uC9C0\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. "),r("strong",null,"\uC774\uB85C \uC778\uD574 XSS \uACF5\uACA9\uC5D0 \uB178\uCD9C\uB420 \uC704\uD5D8\uC774 \uC788\uC73C\uBBC0\uB85C"),s(" \uBA54\uC2DC\uC9C0\uB97C \uC9C1\uC811 \uC0AD\uC81C\uD574\uC57C \uD569\uB2C8\uB2E4.")],-1),Mr=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
const showNotif = () => {\r
  $q.notify({\r
    message: '<span style="color: green">\uB098\uB294</span> <strong>HTML</strong>\uC744 <span style="color: red">\uC0AC\uC6A9</span> \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4',\r
    html: true\r
  })\r
}\r
<\/script>\r
\r
<template>\r
  <q-btn no-caps color="purple" @click="showNotif" label="HTML \uC54C\uB9BC \uBCF4\uAE30" />\r
</template>\r
        `,-1),Lr={class:"q-pb-md"},zr={id:"attr","data-name":"\uC18D\uC131 \uC124\uC815",sub:""},jr=s("\uC18D\uC131 \uC124\uC815"),Ir=r("p",null,"attr \uAC1D\uCCB4 \uC18D\uC131\uC744 \uC124\uC815\uD558\uC5EC \uC54C\uB9BC \uC790\uCCB4\uC5D0 \uC0AC\uC6A9\uC790 \uC815\uC758 HTML \uC18D\uC131\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC1C\uBCC4 \uC54C\uB9BC \uC561\uC158\uC758 \uACBD\uC6B0 \uB2E4\uB978 prop\uCC98\uB7FC \uC9C1\uC811 \uC804\uB2EC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),Pr=r("textarea",{readonly:""},`\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
$q.notify({\r
  // ...\r
\r
  attrs: {\r
    // \uC54C\uB9BC \uC790\uCCB4\uC758 \uACBD\uC6B0:\r
    role: 'alertdialog'\r
  },\r
\r
  actions: [\r
    {\r
      icon: 'close',\r
      // \uAC1C\uBCC4 \uC561\uC158 (\uBC84\uD2BC):\r
      'aria-label': '\uBB34\uC2DC'\r
    }\r
  ]\r
})\r
<\/script>\r
        `,-1),Vr={id:"close","data-name":"\uD504\uB85C\uADF8\uB798\uBC0D \uBC29\uC2DD\uC73C\uB85C \uB2EB\uAE30",sub:""},Ar=s("\uD504\uB85C\uADF8\uB798\uBC0D \uBC29\uC2DD\uC73C\uB85C \uB2EB\uAE30"),Hr=r("p",null,"\uC54C\uB9BC\uC740 \uC0AC\uC6A9\uC790\uB9CC \uD574\uC81C\uD558\uB3C4\uB85D \uB418\uC5B4 \uC788\uC9C0\uB9CC \uC608\uC678\uC801\uC778 \uACBD\uC6B0\uC5D0\uB294 \uD504\uB85C\uADF8\uB798\uBC0D \uBC29\uC2DD\uC73C\uB85C \uD574\uC81C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBB34\uC81C\uD55C\uC73C\uB85C \uC2DC\uAC04(0)\uC744 \uC124\uC815\uD560 \uB54C \uD2B9\uD788 \uC720\uC6A9\uD569\uB2C8\uB2E4.",-1),Gr=r("textarea",{readonly:""},`\r
const dismiss = $q.notify({...})\r
...\r
dismiss()\r
        `,-1),Sr={id:"default","data-name":"\uAE30\uBCF8\uAC12 \uC124\uC815",sub:""},Rr=s("\uAE30\uBCF8\uAC12 \uC124\uC815"),Br=s("\uBAA8\uB4E0 \uC54C\uB9BC\uC5D0 \uC801\uC6A9\uD560 \uAE30\uBCF8 \uAD6C\uC131\uC744 \uC124\uC815\uD558\uB294 \uB450 \uAC00\uC9C0 \uBC29\uBC95\uC774 \uC788\uC2B5\uB2C8\uB2E4. main.js > framework > config > notify Object( "),Or=s("\uC124\uCE58 \uC139\uC158"),Er=s(" \uCC38\uC870) \uB610\uB294 "),Dr=s("\uD504\uB85C\uADF8\uB798\uBC0D \uBC29\uC2DD"),Wr=s("\uC785\uB2C8\uB2E4. "),Fr=r("p",null,"\uC77C\uBD80 Vue \uD30C\uC77C\uC5D0\uC11C \uAE30\uBCF8\uAC12\uC744 \uC124\uC815\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.",-1),Ur=r("textarea",{readonly:""},`\r
// Vue \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uBD80\r
\r
<script setup>\r
`+c("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
$q.notify.setDefaults({\r
  position: 'top-right',\r
  timeout: 2500,\r
  textColor: 'white',\r
  actions: [{ icon: 'close', color: 'white' }]\r
})\r
<\/script>\r
        `,-1),Xr=r("div",{class:"q-py-xl"},null,-1),Jr={class:"row justify-between items-cetner"},oo={__name:"Notify",setup(Kr){const i=k(()=>C(()=>import("./Code.fe4e34ed.js"),["assets/Code.fe4e34ed.js","assets/Code.2d671ef5.css","assets/index.b6be4404.js","assets/index.e8e7ed18.css"])),q=k(()=>C(()=>import("./Practice.0692e7b0.js"),["assets/Practice.0692e7b0.js","assets/Practice.e6958f8f.css","assets/index.b6be4404.js","assets/index.e8e7ed18.css","assets/use-dark.6c95071a.js","assets/use-form.b547680f.js","assets/QSeparator.b549cfd9.js","assets/use-panel.c8073603.js","assets/selection.27ab2460.js"])),e=X(),$=()=>{e.notify({message:"\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694",color:"purple"})},N=()=>{e.notify({message:"\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694",caption:"5\uBD84\uC804",color:"secondary"})},x=()=>{e.notify({message:"\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694",icon:"announcement"})},Q=()=>{e.notify({message:"\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694",color:"indigo",avatar:"https://quasar.serasome.com/favicon/favicon-32x32.png"})},T=()=>{e.notify({spinner:!0,message:"\uAE30\uB2E4\uB824 \uC8FC\uC138\uC694...",timeout:2e3})},M=()=>{e.notify({spinner:Y,message:"\uC5C5\uBB34 \uC911...",timeout:2e3})},L=()=>{e.notify({message:"\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694",color:"indigo",avatar:"https://quasar.serasome.com/favicon/favicon-32x32.png",actions:[{label:"\uBB34\uC2DC",color:"white",handler:()=>{}}]}),e.notify({message:"\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694",color:"indigo",avatar:"https://quasar.serasome.com/favicon/favicon-32x32.png",actions:[{label:"\uC751\uB2F5",color:"yellow",handler:()=>{}},{label:"\uBB34\uC2DC",color:"white",handler:()=>{}}]})},z=()=>{e.notify({message:"\uC138\uB77C\uC5D0\uAC8C \uC810\uC2EC \uC2DD\uC0AC \uC5F0\uB77D\uC774 \uC654\uC2B5\uB2C8\uB2E4",color:"indigo",multiLine:!0,avatar:"https://quasar.serasome.com/favicon/favicon-32x32.png",actions:[{label:"\uC218\uB77D",color:"yellow",handler:()=>{}}]})},v=[{color:"negative",message:"\uC640! \uC704\uD5D8! \uC810\uC810 \uB2A5\uC219\uD574\uC9C0\uACE0 \uC788\uAD70\uC694!",icon:"report_problem"},{message:"\uC774\uAC78 \uC54C\uC544\uC57C \uD569\uB2C8\uB2E4!",icon:"warning"},{message:"\uC640! \uC798\uD588\uC5B4!",icon:"thumb_up"},{color:"teal",message:"Quasar \uBA4B\uC9C0\uB2E4! \uADF8\uCD78?",icon:"tag_faces"},{color:"purple",message:"\uC138\uB77C\uAC00 \uBC29\uAE08 \uC804\uD654\uD588\uC5B4",avatar:"https://quasar.serasome.com/favicon/favicon-32x32.png"},{multiLine:!0,message:"\uC2DD\uC0AC\uB294 \uC5C6\uC5B4 \uBC30\uACE0\uD30C\uB3C4 \uC74C\uB8CC\uB294 \uC5C6\uC5B4 \uBAA9\uB9D0\uB77C\uB3C4 \uB2EC\uCF64\uD55C \uB9DB\uB9CC \uB514\uC800\uD2B8\uB9CC \uB9CC \uC6D0\uD558\uAC8C \uB420 \uAC70 \uC54C\uC796\uC544 \uC2DD\uC0AC\uB294 \uC5C6\uC5B4 \uBC30\uACE0\uD30C\uB3C4 \uC74C\uB8CC\uB294 \uC5C6\uC5B4 \uBAA9\uB9D0\uB77C\uB3C4 \uB2EC\uCF64\uD55C \uB9DB\uB9CC \uB514\uC800\uD2B8\uB9CC \uB9CC \uC6D0\uD558\uAC8C \uB420 \uAC70 \uC54C\uC796\uC544"}],m=f=>{const{color:l,textColor:d,multiLine:_,icon:u,message:b,avatar:y}=v[Math.floor(Math.random(v.length)*10)%v.length],p=Math.random()*100,F=p>70,w=l?"white":void 0;e.notify({color:l,textColor:d,icon:p>30?u:null,message:b,position:f,avatar:y,multiLine:_,actions:F?[{label:"\uC751\uB2F5",color:w,handler:()=>{}},{label:"\uBB34\uC2DC",color:"yellow",handler:()=>{}}]:p>40?[{label:"\uC751\uB2F5",color:w,handler:()=>{}}]:null,timeout:Math.random()*5e3+3e3})},j=()=>{e.notify({message:"\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694.",color:"purple"}),e.notify({message:"\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694.",color:"purple"})},I=()=>{e.notify({group:!1,message:"\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694.",color:"purple"}),e.notify({group:!1,message:"\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694.",color:"purple"})},P=()=>{e.notify({group:"my-group",message:"\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694.",color:"purple"}),e.notify({group:"my-group",message:"\uBDD4\uAC00 \uBA54\uC2DC\uC9C0\uB97C \uBCF4\uB0C8\uC2B5\uB2C8\uB2E4.",color:"indigo"})},V=()=>{e.notify({message:"\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694.",color:"purple",badgeColor:"yellow",badgeTextColor:"dark",badgeClass:"shadow-3 glossy my-badge-class"}),e.notify({message:"\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694.",color:"purple",badgeColor:"yellow",badgeTextColor:"dark",badgeClass:"shadow-3 glossy my-badge-class"})},A=()=>{e.notify({progress:!0,message:"\uC2DD\uC0AC\uB294 \uC5C6\uC5B4 \uBC30\uACE0\uD30C\uB3C4 \uC74C\uB8CC\uB294 \uC5C6\uC5B4 \uBAA9\uB9D0\uB77C\uB3C4 \uB2EC\uCF64\uD55C \uB9DB\uB9CC \uB514\uC800\uD2B8\uB9CC \uB9CC \uC6D0\uD558\uAC8C \uB420 \uAC70 \uC54C\uC796\uC544 \uC2DD\uC0AC\uB294 \uC5C6\uC5B4 \uBC30\uACE0\uD30C\uB3C4 \uC74C\uB8CC\uB294 \uC5C6\uC5B4 \uBAA9\uB9D0\uB77C\uB3C4 \uB2EC\uCF64\uD55C \uB9DB\uB9CC \uB514\uC800\uD2B8\uB9CC \uB9CC \uC6D0\uD558\uAC8C \uB420 \uAC70 \uC54C\uC796\uC544",color:"indigo",multiLine:!0,avatar:"https://quasar.serasome.com/favicon/favicon-32x32.png",actions:[{label:"\uC751\uB2F5",color:"yellow",handler:()=>{}}]}),setTimeout(()=>{e.notify({progress:!0,message:"\uC138\uB77C\uC5D0\uAC8C \uBA54\uC77C \uC654\uC5B4\uC694.",icon:"mail",color:"white",textColor:"indigo"})},2e3),setTimeout(()=>{e.notify({progress:!0,message:"\uC138\uB77C\uC5D0\uAC8C \uC804\uD654\uAC00 \uC654\uC5B4\uC694.",color:"purple",avatar:"https://quasar.serasome.com/favicon/favicon-32x32.png",actions:[{label:"\uC751\uB2F5",color:"yellow",handler:()=>{}}]})},3200)},H=()=>{const f=e.notify({group:!1,timeout:0,spinner:!0,message:"\uC5C5\uB370\uC774\uD2B8 \uD30C\uC77C...",caption:"0%"});let l=0;const d=setInterval(()=>{l=Math.min(100,l+Math.floor(Math.random()*22)),f({caption:`${l}%`}),l===100&&(f({icon:"done",spinner:!1,message:"\uC5C5\uB370\uC774\uD2B8 \uC644\uB8CC!",timeout:2500}),clearInterval(d))},500)},G=()=>{e.notify({type:"positive",message:'\uC774\uAC83\uC740 "positive" \uC720\uD615\uC758 \uC54C\uB9BC\uC785\uB2C8\uB2E4.'})},S=()=>{e.notify({type:"negative",message:'\uC774\uAC83\uC740 "negative" \uC720\uD615\uC758 \uC54C\uB9BC\uC785\uB2C8\uB2E4.'})},R=()=>{e.notify({type:"warning",message:'\uC774\uAC83\uC740 "warning" \uC720\uD615\uC758 \uC54C\uB9BC\uC785\uB2C8\uB2E4.'})},B=()=>{e.notify({type:"info",message:'\uC774\uAC83\uC740 "info" \uC720\uD615\uC758 \uC54C\uB9BC\uC785\uB2C8\uB2E4.'})},O=()=>{const f=e.notify({type:"ongoing",message:"\uAC80\uC0C9\uC5B4\uB97C \uCC3E\uACE0 \uC788\uC2B5\uB2C8\uB2E4..."});setTimeout(()=>{f({type:"positive",message:"\uC6D0\uD558\uB294 \uACB0\uACFC\uB97C \uCC3E\uC558\uC2B5\uB2C8\uB2E4",timeout:1e3})},4e3)};e.notify.registerType("my-notif",{icon:"announcement",progress:!0,color:"brown",textColor:"white",classes:"glossy"});const E=()=>{e.notify({type:"my-notif",message:"\uC774 \uC54C\uB9BC\uC740 \uC0AC\uC6A9\uC790 \uC815\uC758 \uC720\uD615\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4."})},D=()=>{e.notify({type:"my-notif",icon:"contactless",message:"\uC774 \uC54C\uB9BC\uC740 \uC0AC\uC6A9\uC790 \uC815\uC758 \uC720\uD615\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.",caption:"my-notif \uC720\uD615\uC758 \uAE30\uBCF8 \uC544\uC774\uCF58\uACFC \uC0C9\uC0C1\uC744 \uC7AC\uC815\uC758 \uD569\uB2C8\uB2E4.",color:"primary"})},W=()=>{e.notify({message:'<span style="color: green">\uB098\uB294</span> <strong>HTML</strong>\uC744 <span style="color: red">\uC0AC\uC6A9</span> \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4',html:!0})};return(f,l)=>{const d=h("Title"),_=h("Link"),u=h("Info"),b=h("Note"),y=h("Move");return J(),U("div",Z,[r("section",nn,[n(d,{head:""},{default:o(()=>[rn]),_:1}),on,n(u,{advice:"",color:"teal-4"},{default:o(()=>[en,r("p",null,[tn,n(_,{href:"https://quasar.dev/quasar-plugins/notify#notify-api"},{default:o(()=>[sn]),_:1}),an])]),_:1})]),r("section",ln,[n(d,{sub:""},{default:o(()=>[cn]),_:1}),n(a(i),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[un]),_:1})]),r("section",dn,[n(d,{sub:""},{default:o(()=>[pn]),_:1})]),r("section",mn,[n(d,{minor:""},{default:o(()=>[gn]),_:1}),n(a(i),{class:"q-mb-lg",language:"html",convert:{html:"vue"}},{default:o(()=>[fn]),_:1})]),r("section",_n,[n(d,{minor:""},{default:o(()=>[hn]),_:1}),n(a(i),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[vn]),_:1})]),r("section",bn,[n(d,{minor:""},{default:o(()=>[yn]),_:1}),n(a(q),{options:[{label:"\uAE30\uBCF8",value:"default"},{label:"\uCEA1\uC158",value:"caption"},{label:"\uC544\uC774\uCF58\uACFC \uD568\uAED8",value:"icon"},{label:"\uC544\uBC14\uD0C0\uC640 \uD568\uAED8",value:"avatar"},{label:"\uAE30\uBCF8 \uC2A4\uD53C\uB108\uC640 \uD568\uAED8",value:"spinner1"},{label:"\uC0AC\uC6A9\uC790 \uC2A4\uD53C\uB108\uC640 \uD568\uAED8",value:"spinner2"},{label:"\uC561\uC158\uACFC \uD568\uAED8",value:"action"},{label:"\uBA40\uD2F0\uB77C\uC778",value:"multi"},{label:"\uD3EC\uC9C0\uC154\uB2DD",value:"position"}],"non-code":""},{default:o(()=>[n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[qn]),_:1}),n(u,{label:"\uC2E4\uD589"},{default:o(()=>[r("div",wn,[n(t,{color:"purple",onClick:$,label:"\uC54C\uB9BC \uBCF4\uAE30"})])]),_:1})]),caption:o(()=>[n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[kn]),_:1}),n(u,{label:"\uC2E4\uD589"},{default:o(()=>[r("div",Cn,[n(t,{color:"purple",onClick:N,label:"\uC54C\uB9BC \uBCF4\uAE30"})])]),_:1})]),icon:o(()=>[n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[$n]),_:1}),n(u,{label:"\uC2E4\uD589"},{default:o(()=>[r("div",Nn,[n(t,{color:"purple",onClick:x,label:"\uC54C\uB9BC \uBCF4\uAE30"})])]),_:1})]),avatar:o(()=>[n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[xn]),_:1}),n(u,{label:"\uC2E4\uD589"},{default:o(()=>[r("div",Qn,[n(t,{color:"purple",onClick:Q,label:"\uC54C\uB9BC \uBCF4\uAE30"})])]),_:1})]),spinner1:o(()=>[n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[Tn]),_:1}),n(u,{label:"\uC2E4\uD589"},{default:o(()=>[r("div",Mn,[n(t,{color:"purple",onClick:T,label:"\uC54C\uB9BC \uBCF4\uAE30"})])]),_:1})]),spinner2:o(()=>[n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[Ln]),_:1}),n(u,{label:"\uC2E4\uD589"},{default:o(()=>[r("div",zn,[n(t,{color:"purple",onClick:M,label:"\uC54C\uB9BC \uBCF4\uAE30"})])]),_:1})]),action:o(()=>[n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[jn]),_:1}),n(u,{label:"\uC2E4\uD589"},{default:o(()=>[r("div",In,[n(t,{color:"purple",onClick:L,label:"\uC54C\uB9BC \uBCF4\uAE30"})])]),_:1})]),multi:o(()=>[n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[Pn]),_:1}),n(u,{label:"\uC2E4\uD589"},{default:o(()=>[r("div",Vn,[n(t,{color:"purple",onClick:z,label:"\uC54C\uB9BC \uBCF4\uAE30"})])]),_:1})]),position:o(()=>[n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[An]),_:1}),n(u,{label:"\uC2E4\uD589"},{default:o(()=>[r("div",Hn,[r("div",null,[r("div",Gn,[n(t,{round:"",size:"sm",color:"secondary",onClick:l[0]||(l[0]=p=>m("top-left"))},{default:o(()=>[n(g,{name:"arrow_back",class:"rotate-45"})]),_:1}),n(t,{round:"",size:"sm",color:"accent",onClick:l[1]||(l[1]=p=>m("top"))},{default:o(()=>[n(g,{name:"arrow_upward"})]),_:1}),n(t,{round:"",size:"sm",color:"secondary",onClick:l[2]||(l[2]=p=>m("top-right"))},{default:o(()=>[n(g,{name:"arrow_upward",class:"rotate-45"})]),_:1})])]),r("div",null,[r("div",Sn,[r("div",null,[n(t,{round:"",size:"sm",color:"accent",onClick:l[3]||(l[3]=p=>m("left"))},{default:o(()=>[n(g,{name:"arrow_back"})]),_:1})]),r("div",null,[n(t,{round:"",size:"sm",color:"accent",onClick:l[4]||(l[4]=p=>m("center"))},{default:o(()=>[n(g,{name:"fullscreen_exit"})]),_:1})]),r("div",null,[n(t,{round:"",size:"sm",color:"accent",onClick:l[5]||(l[5]=p=>m("right"))},{default:o(()=>[n(g,{name:"arrow_forward"})]),_:1})])])]),r("div",null,[r("div",Rn,[r("div",null,[n(t,{round:"",size:"sm",color:"secondary",onClick:l[6]||(l[6]=p=>m("bottom-left"))},{default:o(()=>[n(g,{name:"arrow_forward",class:"rotate-135"})]),_:1})]),r("div",null,[n(t,{round:"",size:"sm",color:"accent",onClick:l[7]||(l[7]=p=>m("bottom"))},{default:o(()=>[n(g,{name:"arrow_downward"})]),_:1})]),r("div",null,[n(t,{round:"",size:"sm",color:"secondary",onClick:l[8]||(l[8]=p=>m("bottom-right"))},{default:o(()=>[n(g,{name:"arrow_forward",class:"rotate-45"})]),_:1})])])])])]),_:1})]),_:1}),n(b,null,{default:o(()=>[Bn,On]),_:1})]),r("section",En,[n(d,{minor:""},{default:o(()=>[Dn]),_:1}),Wn,Fn,n(a(q),{options:[{label:"\uB450 \uBC88 \uD2B8\uB9AC\uAC70",value:"trigger"},{label:"\uB450 \uBC88 \uD2B8\uB9AC\uAC70(\uADF8\uB8F9\uD654\uB418\uC9C0 \uC54A\uC74C)",value:"nogroup"},{label:"\uB450 \uBC88 \uD2B8\uB9AC\uAC70(\uC0AC\uC6A9\uC790 \uC815\uC758 \uADF8\uB8F9\uD654)",value:"group"},{label:"\uB450 \uBC88 \uD2B8\uB9AC\uAC70\uC640 \uC0AC\uC6A9\uC790 \uC815\uC758 \uBC30\uC9C0",value:"custom"}],"non-code":""},{trigger:o(()=>[n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[Un]),_:1}),n(u,{label:"\uC2E4\uD589"},{default:o(()=>[r("div",Xn,[r("div",Jn,[n(t,{"no-caps":"",color:"teal",onClick:j,label:"\uB450 \uBC88 \uD2B8\uB9AC\uAC70"})])])]),_:1})]),nogroup:o(()=>[n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[Kn]),_:1}),n(u,{label:"\uC2E4\uD589"},{default:o(()=>[r("div",Yn,[r("div",Zn,[n(t,{"no-caps":"",color:"teal",onClick:I,label:"\uB450 \uBC88 \uD2B8\uB9AC\uAC70(\uADF8\uB8F9\uD654\uB418\uC9C0 \uC54A\uC74C)"})])])]),_:1})]),group:o(()=>[n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[nr]),_:1}),n(u,{label:"\uC2E4\uD589"},{default:o(()=>[r("div",rr,[r("div",or,[n(t,{"no-caps":"",color:"teal",onClick:P,label:"\uB450 \uBC88 \uD2B8\uB9AC\uAC70(\uC0AC\uC6A9\uC790 \uC815\uC758 \uADF8\uB8F9\uD654)"})])])]),_:1})]),custom:o(()=>[n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[er]),_:1}),n(u,{label:"\uC2E4\uD589"},{default:o(()=>[r("div",tr,[n(t,{"no-caps":"",color:"indigo",onClick:V,label:"\uB450 \uBC88 \uD2B8\uB9AC\uAC70\uC640 \uC0AC\uC6A9\uC790 \uC815\uC758 \uBC30\uC9C0"})])]),_:1})]),_:1},8,["options"])]),r("section",sr,[n(d,{minor:""},{default:o(()=>[ar]),_:1}),lr,n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[ir]),_:1}),n(u,{label:"\uC2E4\uD589"},{default:o(()=>[r("div",cr,[n(t,{"no-caps":"",color:"purple",onClick:A,label:"\uD0C0\uC784\uC544\uC6C3 \uC9C4\uD589 \uC0C1\uD669 \uBCF4\uAE30"})])]),_:1})]),r("section",ur,[n(d,{minor:""},{default:o(()=>[dr]),_:1}),pr,mr,n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[gr]),_:1}),n(u,{label:"\uC2E4\uD589"},{default:o(()=>[r("div",fr,[n(t,{"no-caps":"",color:"purple",onClick:H,label:"\uC5C5\uB370\uC774\uD2B8 \uAC00\uB2A5\uD55C \uC54C\uB9BC \uBCF4\uAE30"})])]),_:1})]),r("section",_r,[n(d,{minor:""},{default:o(()=>[hr]),_:1}),vr,n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[br]),_:1}),n(u,{label:"\uC2E4\uD589"},{default:o(()=>[r("div",yr,[r("div",qr,[n(t,{"no-caps":"",unelevated:"",color:"positive",onClick:G,label:"'positive' \uD2B8\uB9AC\uAC70"}),n(t,{"no-caps":"",unelevated:"",color:"negative",onClick:S,label:"'negative' \uD2B8\uB9AC\uAC70"}),n(t,{"no-caps":"",unelevated:"",color:"warning","text-color":"dark",onClick:R,label:"'warning' \uD2B8\uB9AC\uAC70"}),n(t,{"no-caps":"",unelevated:"",color:"info",onClick:B,label:"'info' \uD2B8\uB9AC\uAC70"}),n(t,{"no-caps":"",unelevated:"",color:"grey-8",onClick:O,label:"'ongoing' \uD2B8\uB9AC\uAC70"})])])]),_:1}),wr,n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[kr]),_:1}),n(u,{label:"\uC2E4\uD589"},{default:o(()=>[r("div",Cr,[r("div",$r,[n(t,{"no-caps":"",color:"brown",onClick:E,label:"\uC0AC\uC6A9\uC790 \uC815\uC758 \uC720\uD615 1"}),n(t,{"no-caps":"",color:"primary",onClick:D,label:"\uC0AC\uC6A9\uC790 \uC815\uC758 \uC720\uD615 2"})])])]),_:1}),n(a(i),{language:"javascript",convert:{javascript:"js"}},{default:o(()=>[Nr]),_:1})]),r("section",xr,[n(d,{minor:""},{default:o(()=>[Qr]),_:1}),Tr,n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[Mr]),_:1}),n(u,{label:"\uC2E4\uD589"},{default:o(()=>[r("div",Lr,[n(t,{"no-caps":"",color:"purple",onClick:W,label:"HTML \uC54C\uB9BC \uBCF4\uAE30"})])]),_:1})]),r("section",zr,[n(d,{minor:""},{default:o(()=>[jr]),_:1}),Ir,n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[Pr]),_:1})]),r("section",Vr,[n(d,{minor:""},{default:o(()=>[Ar]),_:1}),Hr,n(a(i),{language:"javascript",convert:{javascript:"js"}},{default:o(()=>[Gr]),_:1})]),r("section",Sr,[n(d,{minor:""},{default:o(()=>[Rr]),_:1}),r("p",null,[Br,n(_,{to:{hash:"#install"}},{default:o(()=>[Or]),_:1}),Er,n(_,{href:"https://quasar.dev/quasar-plugins/notify#setting-defaults"},{default:o(()=>[Dr]),_:1}),Wr]),Fr,n(a(i),{language:"html",convert:{html:"vue"}},{default:o(()=>[Ur]),_:1})]),Xr,n(K,{class:"q-mb-lg"}),r("div",null,[r("div",Jr,[n(y,{label:"Loading",prev:"",to:{name:"loading"}})])])])}}};export{oo as default};
