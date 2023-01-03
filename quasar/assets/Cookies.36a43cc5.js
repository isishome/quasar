import{ai as p,c as m,d as e,a as s,w as o,a5 as n,e as t,aa as i,aj as h,a4 as c,o as v}from"./index.b6be4404.js";import{Q as f}from"./QSeparator.b549cfd9.js";import"./use-dark.6c95071a.js";const g={class:"q-px-md text-body2"},k={id:"intro","data-name":"\uC18C\uAC1C"},q=t("Cookies \uD50C\uB7EC\uADF8\uC778"),b=e("p",null,[t(" \uD45C\uC900\uD654\uB41C "),e("code",null,"document.cookie"),t("\uC758 \uB798\uD37C\uC785\uB2C8\uB2E4. ")],-1),j=e("p",null,[e("b",null,"\uBA54\uBAA8")],-1),x=e("p",null,"\uCFE0\uD0A4\uB97C \uB2E4\uB8E8\uB294 \uD45C\uC900 \uBC29\uBC95\uC5D0 \uB354\uD574 \uCFE0\uD0A4 \uD50C\uB7EC\uADF8\uC778\uC744 \uC0AC\uC6A9\uD558\uBA74 JSON \uAC1D\uCCB4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uCFE0\uD0A4\uB97C \uC77D\uACE0 \uC4F8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. SSR\uC758 \uCFE0\uD0A4\uB97C \uAD00\uB9AC\uD558\uB294 \uAC83 \uC5ED\uC2DC \uAC00\uB2A5\uD569\uB2C8\uB2E4.",-1),S=e("p",null,[t("Quasar \uB0B4\uC5D0\uC11C \uCFE0\uD0A4\uB97C \uC0AC\uC6A9\uD558\uB3C4\uB85D \uB3C4\uC640\uC8FC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4. \uC800\uB294 \uC8FC\uB85C \uB2E4\uD06C \uBAA8\uB4DC \uC5EC\uBD80 \uAC12\uC774\uB098 \uB2E4\uAD6D\uC5B4 \uC815\uBCF4("),e("code",null,"ko"),t(", "),e("code",null,"en"),t(" \uB4F1)\uC640 \uAC19\uC774 \uAC04\uB2E8\uD55C \uC815\uBCF4\uB97C \uC800\uC7A5\uD560 \uB54C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.")],-1),C=e("p",null,[t("\uAC04\uD639 \uCFE0\uAE30 \uAC12\uC73C\uB85C \uBD80\uC6B8\uC744 \uC0AC\uC6A9\uD560 \uACBD\uC6B0, \uC815\uC0C1\uC801\uC73C\uB85C \uC778\uC2DD\uC774 \uB418\uC9C0 \uC54A\uB294 \uACBD\uC6B0\uAC00 \uC788\uC73C\uB2C8 "),e("strong",null,"\uCFE0\uD0A4 \uAC12\uC740 string \uC720\uD615\uC774\uB77C\uACE0"),t(" \uC0DD\uAC01\uD558\uACE0 \uC0AC\uC6A9\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.")],-1),y=t("Cookies \uD50C\uB7EC\uADF8\uC778\uC758 \uC635\uC158\uC774\uB098 \uBA54\uC11C\uB4DC\uB294 Quasar \uACF5\uC2DD \uD648\uD398\uC774\uC9C0 "),Q=t("Cookies API"),V=t("\uB97C \uCC38\uACE0\uD558\uC138\uC694. "),R={id:"install","data-name":"\uC124\uCE58"},w=t("\uC124\uCE58"),$=e("textarea",{readonly:""},`\r
// main.js : Quasar Vite \uD50C\uB7EC\uADF8\uC778\r
\r
import {\r
  Quasar,\r
  Cookies\r
} from 'quasar'\r
\r
app.use(Quasar, {\r
  plugins: {\r
    Cookies\r
  }\r
})\r
        `,-1),T={id:"ssr","data-name":"SSR\uC5D0 \uAD00\uD55C \uCC38\uACE0\uC0AC\uD56D"},L=t("SSR\uC5D0 \uAD00\uD55C \uCC38\uACE0\uC0AC\uD56D"),P=e("p",null,[t("SSR \uC6A9\uC73C\uB85C \uBE4C\uB4DC \uD560 \uB54C, "),e("code",null,"$q.cookies"),t(" \uD615\uC2DD\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. "),e("code",null,i("import { Cookies } from 'quasar'")),t("(server-side \uD658\uACBD\uC77C \uB54C)\uB97C \uC0AC\uC6A9\uD574\uC57C \uD558\uB294 \uACBD\uC6B0 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4. ")],-1),I=e("textarea",{readonly:""},`\r
`+i("import { Cookies } from 'quasar'")+`\r
\r
// \`ssrContext\`\uC5D0 \uC811\uADFC\uC774 \uD544\uC694\uD569\uB2C8\uB2E4\r
function (ssrContext) {\r
  const cookies = process.env.SERVER\r
    ? Cookies.parseSSR(ssrContext)\r
    : Cookies // \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uD074\uB77C\uC774\uC5B8\uD2B8 \uD658\uACBD\uC774 \uB429\uB2C8\uB2E4\r
\r
  //  "cookies"\uB294 non-SSR \uBE4C\uB4DC\uC5D0 global import \uC640 \uB3D9\uC77C\uD569\uB2C8\uB2E4\r
}\r
        `,-1),N=e("code",null,"ssrContext",-1),O=t("\uB294 "),A=t("@quasar/app-vite Boot File"),F=t(" \uB610\uB294 "),M=t("@quasar/app-webpack Boot File"),B=t("\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C "),D=t("@quasar/app-vite preFetch"),E=t(" \uB610\uB294 "),H=t("@quasar/app-webpack preFetch"),J=t(" \uAE30\uB2A5\uC5D0\uC11C \uB9E4\uAC1C\uBCC0\uC218\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. "),U=e("p",null,"\uC774\uAC83\uC740 \uD074\uB77C\uC774\uC5B8\uD2B8 \uC804\uC6A9 \uC571\uC5D0\uC11C \uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uAC00 \uBE0C\uB77C\uC6B0\uC800\uC758 \uC0C8\uB85C\uC6B4 \uC571 \uC778\uC2A4\uD134\uC2A4\uB97C \uC0AC\uC6A9\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. server-side \uB80C\uB354\uB9C1\uC5D0 \uB300\uD574\uC11C\uB3C4 \uB3D9\uC77C\uD55C \uAC83\uC744 \uC6D0\uD558\uB294 \uAC83\uC5D0 \uB300\uD574:\uAC01 \uC694\uCCAD\uC5D0\uB294 \uAD50\uCC28 \uC694\uCCAD \uC0C1\uD0DC \uC624\uC5FC\uC774 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uB3C4\uB85D \uC0C8\uB85C\uC6B4 \uACA9\uB9AC \uC571 \uC778\uC2A4\uD134\uC2A4\uB97C \uD544\uC694\uB85C \uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C Cookies\uB294 \uAC01 \uC694\uCCAD\uC5D0 \uBCC4\uB3C4\uB85C \uBC14\uC778\uB529 \uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.",-1),G={id:"read","data-name":"\uCFE0\uD0A4 \uC77D\uAE30"},X=t("\uCFE0\uD0A4 \uC77D\uAE30"),z=e("textarea",{readonly:""},`\r
// Vue \uD30C\uC77C \uBC16\uC5D0\uC11C \uC0AC\uC6A9\r
`+i("import { Cookies } from 'quasar'")+`\r
const value = Cookies.get('cookie_name')\r
        `,-1),K=e("p",null,[t("\uCFE0\uD0A4\uB97C \uC124\uC815\uD558\uC9C0 \uC54A\uC73C\uBA74, "),e("code",null,"null"),t("\uAC12\uC744 \uBC18\uD658\uD55C\uB2E4.")],-1),W=e("textarea",{readonly:""},`\r
<!-- Vue file \uC548\uC5D0\uC11C \uC0AC\uC6A9 -->\r
<script setup>\r
`+i("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
const value = $q.cookies.get('cookie_name')\r
<\/script>\r
        `,-1),Y={id:"readall","data-name":"\uBAA8\uB4E0 \uCFE0\uD0A4 \uC77D\uAE30"},Z=t("\uBAA8\uB4E0 \uCFE0\uD0A4 \uC77D\uAE30"),ee=e("textarea",{readonly:""},`\r
// Vue \uD30C\uC77C \uBC16\uC5D0\uC11C \uC0AC\uC6A9\r
`+i("import { Cookies } from 'quasar'")+`\r
const value = Cookies.getAll()\r
        `,-1),te=e("p",null,[e("code",null,"cookies"),t(" \uBCC0\uC218\uB294 \uD0A4-\uAC12 \uC30D\uC758 \uAC1D\uCCB4 \uC785\uB2C8\uB2E4(cookie_name : cookie_value).")],-1),se=e("textarea",{readonly:""},`\r
<!-- Vue file \uC548\uC5D0\uC11C \uC0AC\uC6A9 -->\r
<script setup>\r
`+i("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
const value = $q.cookies.getAll()\r
<\/script>\r
        `,-1),oe={id:"verify","data-name":"\uCFE0\uD0A4 \uC124\uC815 \uD655\uC778"},ae=t("\uCFE0\uD0A4 \uC124\uC815 \uD655\uC778"),ne=e("textarea",{readonly:""},`\r
// Vue \uD30C\uC77C \uBC16\uC5D0\uC11C \uC0AC\uC6A9\r
`+i("import { Cookies } from 'quasar'")+`\r
Cookies.has('cookie_name') // \uBD80\uC6B8\uAC12\r
        `,-1),re=e("textarea",{readonly:""},`\r
<!-- Vue file \uC548\uC5D0\uC11C \uC0AC\uC6A9 -->\r
<script setup>\r
`+i("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
const hasIt = $q.cookies.has('cookie_name')\r
<\/script>\r
        `,-1),ie={id:"write","data-name":"\uCFE0\uD0A4 \uC4F0\uAE30"},le=t("\uCFE0\uD0A4 \uC4F0\uAE30"),ce=e("textarea",{readonly:""},`\r
// Vue \uD30C\uC77C \uBC16\uC5D0\uC11C \uC0AC\uC6A9\r
`+i("import { Cookies } from 'quasar'")+`\r
\r
Cookies.set('cookie_name', cookie_value)\r
\r
// \uCFE0\uD0A4 \uC635\uC158\uB3C4 \uC804\uB2EC:\r
Cookies.set('cookie_name', cookie_value, options)\r
        `,-1),_e=e("textarea",{readonly:""},`\r
// Vue \uD30C\uC77C \uBC16\uC5D0\uC11C \uC0AC\uC6A9\r
`+i("import { Cookies } from 'quasar'")+`\r
\r
Cookies.set('quasar', 'framework', {\r
  secure: true\r
})\r
        `,-1),ue=e("textarea",{readonly:""},`\r
<!-- Vue file \uC548\uC5D0\uC11C \uC0AC\uC6A9 -->\r
<script setup>\r
`+i("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
$q.cookies.set('cookie_name', cookie_value)\r
// \uCFE0\uD0A4 \uC635\uC158\uB3C4 \uC804\uB2EC:\r
$q.cookies.set('cookie_name', cookie_value, options)\r
<\/script>\r
        `,-1),de=e("p",null,[t("(\uC120\uD0DD\uC0AC\uD56D) "),e("code",null,"options"),t(" \uB9E4\uAC1C\uBCC0\uC218\uB294 \uC18D\uC131\uBCC4\uB85C \uC544\uB798\uC5D0 \uC124\uBA85\uB41C \uAC1D\uCCB4\uC785\uB2C8\uB2E4.")],-1),pe={id:"expires","data-name":"\uC635\uC158: expires",sub:""},me=t("\uC635\uC158: expires"),he=e("textarea",{readonly:""},`\r
expires: 10 // 10\uC77C\r
expires: -1 // \uC5B4\uC81C\r
expires: 'Mon, 06 Jan 2020 12:52:55 GMT'\r
expires: new Date() // \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uB0A0\uC9DC \uAC1D\uCCB4\r
expires: '1d 3h 5m' // 1\uC77C 3\uC2DC\uAC04 5\uBD84\r
expires: '2d' // 2\uC77C\r
expires: '15m 10s' // 15\uBD84 10\uCD08\r
        `,-1),ve=e("p",null,'\uCFE0\uD0A4\uC758 \uC218\uBA85\uC744 \uC815\uC758\uD569\uB2C8\uB2E4. \uAC12\uC740 \uC0DD\uC131 \uC2DC\uC810\uC73C\uB85C\uBD80\uD130 \uB0A0\uC9DC\uB85C \uD574\uC11D\uB418\uB294 \uC22B\uC790 \uB610\uB294 Date \uAC1D\uCCB4 \uB610\uB294 \uC6D0\uC2DC \uBB38\uC790\uC5F4 \uB0A0\uC9DC (\u201CMon, 06 Jan 2020 12:52:55 GMT\u201D) \uB610\uB294 \uD2B9\uC218 \uBB38\uC790\uC5F4 \uD615\uC2DD ("1d", " 15m", "13d", "1d 15m", "1d 3h 5m 3s") \uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0DD\uB7B5\uD558\uBA74 \uCFE0\uD0A4\uB294 \uC138\uC158 \uCFE0\uD0A4\uAC00 \uB429\uB2C8\uB2E4.',-1),fe={id:"path","data-name":"\uC635\uC158: path",sub:""},ge=t("\uC635\uC158: path"),ke=e("textarea",{readonly:""},`\r
path: '/'\r
        `,-1),qe=e("p",null,"\uCFE0\uD0A4\uC758 \uC720\uD6A8 \uACBD\uB85C\uB97C \uC815\uC758\uD569\uB2C8\uB2E4. \uAE30\uBCF8\uC801\uC73C\uB85C \uCFE0\uD0A4\uC758 \uACBD\uB85C\uB294 \uCFE0\uD0A4\uAC00 \uC791\uC131\uB41C \uD398\uC774\uC9C0\uC758 \uACBD\uB85C\uC785\uB2C8\uB2E4(\uD45C\uC900 \uBE0C\uB77C\uC6B0\uC800 \uB3D9\uC791). \uC608\uB97C \uB4E4\uC5B4 \uC804\uCCB4 \uB3C4\uBA54\uC778\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uB824\uBA74 \uACBD\uB85C: '/'\uB97C \uC0AC\uC6A9\uD558\uC138\uC694. \uAE30\uBCF8\uAC12: \uCFE0\uD0A4\uAC00 \uC0DD\uC131\uB41C \uD398\uC774\uC9C0 \uACBD\uB85C\uC785\uB2C8\uB2E4.",-1),be={id:"domain","data-name":"\uC635\uC158: domain",sub:""},je=t("\uC635\uC158: domain"),xe=e("textarea",{readonly:""},`\r
domain: 'quasar.dev'\r
        `,-1),Se=e("p",null,"\uCFE0\uD0A4\uC758 \uC720\uD6A8 \uB3C4\uBA54\uC778\uC744 \uC815\uC758\uD569\uB2C8\uB2E4. \uAE30\uBCF8\uAC12: \uCFE0\uD0A4\uAC00 \uC0DD\uC131\uB41C \uD398\uC774\uC9C0\uC758 \uB3C4\uBA54\uC778\uC785\uB2C8\uB2E4.",-1),Ce={id:"samesite","data-name":"\uC635\uC158: sameSite",sub:""},ye=t("\uC635\uC158: sameSite"),Qe=e("textarea",{readonly:""},`\r
sameSite: 'Strict'\r
// \uB610\uB294\r
sameSite: 'Lax'\r
        `,-1),Ve=e("p",null,"SameSite \uCFE0\uD0A4\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC11C\uBC84\uC5D0\uC11C \uC0AC\uC774\uD2B8 \uAC04 \uC694\uCCAD\uACFC \uD568\uAED8 \uCFE0\uD0A4\uB97C \uBCF4\uB0B4\uC9C0 \uC54A\uB3C4\uB85D \uC694\uAD6C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uC5EC\uAE30\uC11C \uC0AC\uC774\uD2B8\uB294 \uB4F1\uB85D \uAC00\uB2A5\uD55C \uB3C4\uBA54\uC778\uC5D0 \uC758\uD574 \uC815\uC758\uB428). \uC774\uB294 \uC0AC\uC774\uD2B8 \uAC04 \uC694\uCCAD \uC704\uC870 \uACF5\uACA9(CSRF)\uC5D0 \uB300\uD55C \uBCF4\uD638 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.",-1),Re=e("p",null,[e("strong",null,"Strict"),t(" - SameSite \uCFE0\uD0A4\uC5D0 \uC774 \uC18D\uC131\uC774 \uC788\uB294 \uACBD\uC6B0 \uBE0C\uB77C\uC6B0\uC800\uB294 \uC694\uCCAD\uC774 \uCFE0\uD0A4\uB97C \uC124\uC815\uD55C \uC6F9\uC0AC\uC774\uD2B8\uC5D0\uC11C \uC2DC\uC791\uB41C \uACBD\uC6B0\uC5D0\uB9CC \uCFE0\uD0A4\uB97C \uBCF4\uB0C5\uB2C8\uB2E4. \uC694\uCCAD\uC774 \uD604\uC7AC \uC704\uCE58\uC758 URL\uACFC \uB2E4\uB978 URL\uC5D0\uC11C \uBC1C\uC0DD\uD55C \uACBD\uC6B0 Strict \uC18D\uC131\uC774 \uC9C0\uC815\uB41C \uCFE0\uD0A4\uB294 \uD3EC\uD568\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. ")],-1),we=e("p",null,[e("strong",null,"Lax"),t(" - \uC18D\uC131\uC774 Lax\uB85C \uC124\uC815\uB41C \uACBD\uC6B0 SameSite \uCFE0\uAE30\uB294 \uC774\uBBF8\uC9C0\uB098 \uD504\uB808\uC784 \uB85C\uB4DC \uD638\uCD9C\uACFC \uAC19\uC740 \uC0AC\uC774\uD2B8 \uAC04 \uD558\uC704 \uC694\uCCAD\uC740 \uBCF4\uB958\uB418\uC9C0\uB9CC \uC0AC\uC6A9\uC790\uAC00 \uB9C1\uD06C\uB97C \uB530\uB77C\uAC00\uB294 \uAC83\uACFC \uAC19\uC774 \uC678\uBD80 \uC0AC\uC774\uD2B8\uC5D0\uC11C URL\uB85C \uC774\uB3D9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC804\uC1A1\uB429\uB2C8\uB2E4.")],-1),$e=e("code",null,"same-site",-1),Te=t(" \uC124\uC815\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uC815\uBCF4\uB294 "),Le=t("\uC5EC\uAE30"),Pe=t("\uB97C \uCC38\uACE0\uD558\uC138\uC694. "),Ie={id:"httponly","data-name":"\uC635\uC158: httpOnly",sub:""},Ne=t("\uC635\uC158: httpOnly"),Oe=e("textarea",{readonly:""},`\r
httpOnly: true\r
        `,-1),Ae=e("p",null,"\uC0AC\uC774\uD2B8 \uAC04 \uC2A4\uD06C\uB9BD\uD2B8(XSS) \uACF5\uACA9\uC744 \uC644\uD654\uD558\uAE30 \uC704\uD574 HttpOnly \uCFE0\uD0A4\uB294 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC758 document.cookie API\uC5D0 \uC561\uC138\uC2A4\uD560 \uC218 \uC5C6\uC73C\uBA70 \uC11C\uBC84\uB85C\uB9CC \uC804\uC1A1\uB429\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uC11C\uBC84 \uCE21 \uC138\uC158\uC744 \uC720\uC9C0\uD558\uB294 \uCFE0\uD0A4\uB294 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uD544\uC694\uAC00 \uC5C6\uC73C\uBA70 HttpOnly \uD50C\uB798\uADF8\uAC00 \uC124\uC815\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.",-1),Fe={id:"secure","data-name":"\uC635\uC158: secure",sub:""},Me=t("\uC635\uC158: secure"),Be=e("textarea",{readonly:""},`\r
secure: true\r
        `,-1),De=e("p",null,[t("true\uC778 \uACBD\uC6B0 \uCFE0\uD0A4 \uC804\uC1A1\uC5D0\uB294 \uBCF4\uC548 \uD504\uB85C\uD1A0\uCF5C(HTTPS)\uC774 \uD544\uC694\uD558\uBA70 HTTP\uB97C \uD1B5\uD574\uC11C\uB294 \uC804\uC1A1\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uAE30\uBCF8\uAC12\uC740 "),e("code",null,"false"),t("\uC785\uB2C8\uB2E4.")],-1),Ee=e("p",null,[e("b",null,"\uD301")],-1),He=e("p",null,"Quasar CLI \uD658\uACBD\uACFC \uAC1C\uBC1C \uBAA8\uB4DC\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC788\uB2E4\uBA74, quasar.config.js > devServer > https: true\uB97C \uD1B5\uD574 HTTPS\uB97C \uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),Je={id:"other","data-name":"\uC635\uC158: ohter",sub:""},Ue=t("\uC635\uC158: ohter"),Ge=e("textarea",{readonly:""},`\r
other: 'SomeNewProp'\r
        `,-1),Xe=e("p",null,"\uB2E4\uB978 \uCFE0\uD0A4 \uC635\uC158\uC758 \uC6D0\uC2DC \uBB38\uC790\uC5F4\uC785\uB2C8\uB2E4. \uD604\uC7AC Quasar\uC5D0\uC11C \uAD6C\uD604\uB418\uC9C0 \uC54A\uC740 \uC0C8 props\uB97C \uC704\uD55C \uCD5C\uD6C4\uC758 \uC218\uB2E8\uC73C\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.",-1),ze={id:"remove","data-name":"\uCFE0\uD0A4 \uC81C\uAC70"},Ke=t("\uCFE0\uD0A4 \uC81C\uAC70"),We=e("textarea",{readonly:""},`\r
// Vue \uD30C\uC77C \uBC16\uC5D0\uC11C \uC0AC\uC6A9\r
`+i("import { Cookies } from 'quasar'")+`\r
\r
Cookies.remove('cookie_name')\r
\r
// \uCFE0\uD0A4\uAC00 \uACBD\uB85C \uBC0F/\uB610\uB294 \uB3C4\uBA54\uC778\uACFC \uAC19\uC740 \uD2B9\uC815 \uC635\uC158\uC73C\uB85C \uC124\uC815\uB41C \uACBD\uC6B0\r
// \uC81C\uAC70\uD560 \uB54C \uC5ED\uC2DC \uB3D9\uC77C\uD55C \uC18D\uC131\uC758 \uC635\uC158\uC744 \uC124\uC815\uD574\uC57C \uD569\uB2C8\uB2E4:\r
Cookies.remove('cookie_name', options)\r
        `,-1),Ye=e("textarea",{readonly:""},`\r
<!-- Vue file \uC548\uC5D0\uC11C \uC0AC\uC6A9 -->\r
<script setup>\r
`+i("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
$q.cookies.remove('cookie_name')\r
\r
// \uCFE0\uD0A4\uAC00 \uACBD\uB85C \uBC0F/\uB610\uB294 \uB3C4\uBA54\uC778\uACFC \uAC19\uC740 \uD2B9\uC815 \uC635\uC158\uC73C\uB85C \uC124\uC815\uB41C \uACBD\uC6B0\r
// \uC81C\uAC70\uD560 \uB54C \uC5ED\uC2DC \uB3D9\uC77C\uD55C \uC18D\uC131\uC758 \uC635\uC158\uC744 \uC124\uC815\uD574\uC57C \uD569\uB2C8\uB2E4:\r
$q.cookies.remove('cookie_name', options)\r
<\/script>\r
        `,-1),Ze=e("p",null,[e("b",null,"\uC8FC\uC758")],-1),et=e("p",null,[t("\uCFE0\uD0A4\uAC00 \uC774\uC804\uC5D0 \uD2B9\uC815 "),e("em",null,"\uACBD\uB85C"),t(" \uBC0F/\uB610\uB294 "),e("em",null,"\uB3C4\uBA54\uC778"),t("\uC73C\uB85C \uC124\uC815\uB41C \uACBD\uC6B0 "),e("em",null,"options"),t(" \uB9E4\uAC1C\uBCC0\uC218\uB97C \uD1B5\uD574 \uB3D9\uC77C\uD55C \uC18D\uC131\uC774 remove()\uC5D0 \uC804\uB2EC\uB41C \uACBD\uC6B0\uC5D0\uB9CC \uCFE0\uD0A4\uB97C \uC131\uACF5\uC801\uC73C\uB85C \uC81C\uAC70\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uAC83\uC740 RFC6265\uC5D0 \uB530\uB985\uB2C8\uB2E4.")],-1),tt=e("div",{class:"q-py-xl"},null,-1),st={class:"row justify-between items-cetner"},ct={__name:"Cookies",setup(ot){const a=p(()=>h(()=>import("./Code.fe4e34ed.js"),["assets/Code.fe4e34ed.js","assets/Code.2d671ef5.css","assets/index.b6be4404.js","assets/index.e8e7ed18.css"]));return(at,nt)=>{const r=c("Title"),_=c("Note"),l=c("Link"),d=c("Info"),u=c("Move");return v(),m("div",g,[e("section",k,[s(r,{head:""},{default:o(()=>[q]),_:1}),b,s(_,null,{default:o(()=>[j,x]),_:1}),s(d,{advice:"",color:"teal-4"},{default:o(()=>[S,C,e("p",null,[y,s(l,{href:"https://quasar.dev/quasar-plugins/cookies#cookies-api"},{default:o(()=>[Q]),_:1}),V])]),_:1})]),e("section",R,[s(r,{sub:""},{default:o(()=>[w]),_:1}),s(n(a),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[$]),_:1})]),e("section",T,[s(r,{sub:""},{default:o(()=>[L]),_:1}),P,s(n(a),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[I]),_:1}),e("p",null,[N,O,s(l,{href:"https://quasar.dev/quasar-cli-vite/boot-files"},{default:o(()=>[A]),_:1}),F,s(l,{href:"https://quasar.dev/quasar-cli-webpack/boot-files"},{default:o(()=>[M]),_:1}),B,s(l,{href:"https://quasar.dev/quasar-cli-vite/prefetch-feature"},{default:o(()=>[D]),_:1}),E,s(l,{href:"https://quasar.dev/quasar-cli-webpack/prefetch-feature"},{default:o(()=>[H]),_:1}),J]),U]),e("section",G,[s(r,{sub:""},{default:o(()=>[X]),_:1}),s(n(a),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[z]),_:1}),K,s(n(a),{class:"q-mb-lg",language:"html",convert:{html:"vue"}},{default:o(()=>[W]),_:1})]),e("section",Y,[s(r,{sub:""},{default:o(()=>[Z]),_:1}),s(n(a),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[ee]),_:1}),te,s(n(a),{class:"q-mb-lg",language:"html",convert:{html:"vue"}},{default:o(()=>[se]),_:1})]),e("section",oe,[s(r,{sub:""},{default:o(()=>[ae]),_:1}),s(n(a),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[ne]),_:1}),s(n(a),{class:"q-mb-lg",language:"html",convert:{html:"vue"}},{default:o(()=>[re]),_:1})]),e("section",ie,[s(r,{sub:""},{default:o(()=>[le]),_:1}),s(n(a),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[ce]),_:1}),s(n(a),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[_e]),_:1}),s(n(a),{class:"q-mb-lg",language:"html",convert:{html:"vue"}},{default:o(()=>[ue]),_:1}),de]),e("section",pe,[s(r,{minor:""},{default:o(()=>[me]),_:1}),s(n(a),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[he]),_:1}),ve]),e("section",fe,[s(r,{minor:""},{default:o(()=>[ge]),_:1}),s(n(a),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[ke]),_:1}),qe]),e("section",be,[s(r,{minor:""},{default:o(()=>[je]),_:1}),s(n(a),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[xe]),_:1}),Se]),e("section",Ce,[s(r,{minor:""},{default:o(()=>[ye]),_:1}),s(n(a),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[Qe]),_:1}),Ve,Re,we,e("p",null,[$e,Te,s(l,{href:"https://web.dev/samesite-cookies-explained/"},{default:o(()=>[Le]),_:1}),Pe])]),e("section",Ie,[s(r,{minor:""},{default:o(()=>[Ne]),_:1}),s(n(a),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[Oe]),_:1}),Ae]),e("section",Fe,[s(r,{minor:""},{default:o(()=>[Me]),_:1}),s(n(a),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[Be]),_:1}),De,s(_,null,{default:o(()=>[Ee,He]),_:1})]),e("section",Je,[s(r,{minor:""},{default:o(()=>[Ue]),_:1}),s(n(a),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[Ge]),_:1}),Xe]),e("section",ze,[s(r,{sub:""},{default:o(()=>[Ke]),_:1}),s(n(a),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[We]),_:1}),s(n(a),{class:"q-mb-lg",language:"html",convert:{html:"vue"}},{default:o(()=>[Ye]),_:1}),s(_,{color:"amber-5"},{default:o(()=>[Ze,et]),_:1})]),tt,s(f,{class:"q-mb-lg"}),e("div",null,[e("div",st,[s(u,{label:"\uADF8 \uC678 CSS \uD5EC\uD37C \uD074\uB798\uC2A4",prev:"",to:{name:"helper"}}),s(u,{label:"Dark",next:"",to:{name:"dark"}})])])])}}};export{ct as default};
