import{ai as m,c as p,d as t,a as n,w as o,a5 as i,e,aa as r,aj as h,a4 as s,o as f}from"./index.b6be4404.js";import{Q as v}from"./QSeparator.b549cfd9.js";import"./use-dark.6c95071a.js";const g={class:"q-px-md text-body2"},k={id:"intro","data-name":"\uC18C\uAC1C"},q=e("Dark \uD50C\uB7EC\uADF8\uC778 "),b=t("p",null,[t("b",null,"\uD301")],-1),j=e("\uC774 Quasar \uD50C\uB7EC\uADF8\uC778\uC774 \uC798 \uC774\uD574\uAC00 \uB418\uC9C0 \uC54A\uB294\uB2E4\uBA74 \uC2A4\uD0C0\uC77C \uBC0F \uC544\uC774\uB374\uD2F0\uD2F0\uC5D0 "),x=e("\uB2E4\uD06C \uBAA8\uB4DC"),D=e(" \uD398\uC774\uC9C0\uB97C \uCC38\uACE0\uD558\uC138\uC694. "),S=t("p",null,[e("Quasar \uB0B4\uC5D0\uC11C \uC5B4\uB450\uC6B4 \uD14C\uB9C8\uB97C \uC0AC\uC6A9\uD558\uB3C4\uB85D \uB3C4\uC640\uC8FC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4. \uC694\uC998\uC740 \uB300\uBD80\uBD84\uC758 \uC0AC\uC774\uD2B8\uAC00 "),t("b",null,"\uB2E4\uD06C \uBAA8\uB4DC\uB97C \uAE30\uBCF8\uC801\uC73C\uB85C \uC9C0\uC6D0"),e("\uD558\uACE0 \uC788\uC73C\uB2C8 \uD55C\uBC88\uC740 \uAF2D \uC77D\uC5B4\uBCF4\uC138\uC694!")],-1),Q=e("Dark \uD50C\uB7EC\uADF8\uC778\uC758 \uC635\uC158\uC774\uB098 \uBA54\uC11C\uB4DC\uB294 Quasar \uACF5\uC2DD \uD648\uD398\uC774\uC9C0 "),y=e("Dark API"),A=e("\uB97C \uCC38\uACE0\uD558\uC138\uC694. "),V={id:"install","data-name":"\uC124\uCE58"},w=e("\uC124\uCE58"),$=t("p",null," \uC544\uBB34\uAC83\uB3C4 \uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uC2A4\uD06C\uB9B0 \uD50C\uB7EC\uADF8\uC778\uC740 \uC790\uB3D9\uC73C\uB85C \uC124\uCE58\uB429\uB2C8\uB2E4. ",-1),R={id:"usage","data-name":"\uC0AC\uC6A9\uBC95"},C=e("\uC0AC\uC6A9\uBC95"),N=t("p",null,[t("b",null,"\uC8FC\uC758")],-1),I=t("p",null,[e("\uC544\uB798\uC5D0 "),t("em",null,"isActive"),e(" \uB610\uB294 "),t("em",null,"mode"),e("\uC5D0 \uC218\uB3D9\uC73C\uB85C \uAC12\uC744 \uD560\uB2F9\uD558\uC9C0 \uB9C8\uC138\uC694. \uADF8\uB300\uC2E0 "),t("em",null,"set(val)"),e(" \uBA54\uC11C\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC138\uC694.")],-1),L={id:"inside","data-name":"Vue \uD30C\uC77C\uC5D0\uC11C \uC0AC\uC6A9\uD558\uAE30",sub:""},T=e("Vue \uD30C\uC77C\uC5D0\uC11C \uC0AC\uC6A9\uD558\uAE30"),B=t("textarea",{readonly:""},`\r
<script setup>\r
`+r("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
// \uD604\uC7AC \uC0AC\uC6A9 \uC5EC\uBD80 \uAC00\uC838\uC624\uAE30\r
console.log($q.dark.isActive) // true, false\r
\r
// \uD604\uC7AC \uC124\uC815\uB41C \uC0C1\uD0DC \uAC00\uC838\uC624\uAE30\r
console.log($q.dark.mode) // "auto", true, false\r
\r
// \uC0C1\uD0DC \uC124\uC815\uD558\uAE30\r
$q.dark.set(true) // or false or "auto"\r
\r
// \uD1A0\uAE00\r
$q.dark.toggle()\r
<\/script>\r
        `,-1),E={id:"outside","data-name":"Vue \uD30C\uC77C \uC678\uBD80\uC5D0\uC11C \uC0AC\uC6A9\uD558\uAE30",sub:""},P=e("Vue \uD30C\uC77C \uC678\uBD80\uC5D0\uC11C \uC0AC\uC6A9\uD558\uAE30"),M=t("textarea",{readonly:""},`\r
`+r("import { Dark } from 'quasar'")+`\r
\r
// \uD604\uC7AC \uC0AC\uC6A9 \uC5EC\uBD80 \uAC00\uC838\uC624\uAE30\r
console.log(Dark.isActive)\r
\r
// \uD604\uC7AC \uC124\uC815\uB41C \uC0C1\uD0DC \uAC00\uC838\uC624\uAE30\r
console.log(Dark.mode) // "auto", true, false\r
\r
// \uC0C1\uD0DC \uC124\uC815\uD558\uAE30\r
Dark.set(true) // or false or "auto"\r
\r
// \uD1A0\uAE00\r
Dark.toggle()\r
        `,-1),O={id:"main","data-name":"main.js\uB97C \uD1B5\uD574 \uC0AC\uC6A9\uD558\uAE30",sub:""},z=e("main.js\uB97C \uD1B5\uD574 \uC0AC\uC6A9\uD558\uAE30"),F=t("textarea",{readonly:""},`\r
// \uD30C\uC77C: main.js\r
\r
const app = createApp(app)\r
app.use(Quasar, {\r
  config: {\r
    dark: 'auto' // \uB610\uB294 \uBD80\uC6B8 \uAC12 true/false\r
  }\r
})\r
        `,-1),G={id:"ssr","data-name":"SSR\uC5D0 \uAD00\uD55C \uCC38\uACE0\uC0AC\uD56D"},H=e("SSR\uC5D0 \uAD00\uD55C \uCC38\uACE0\uC0AC\uD56D"),J=t("p",null,"SSR \uBE4C\uB4DC \uC2DC:",-1),K=t("ul",null,[t("li",null,[e("\uB2E4\uD06C \uBAA8\uB4DC \uC0AC\uC6A9\uC744 \uC704\uD55C "),t("code",null,r("import { Dark } from 'quasar'")),e("\uB294 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uC9C0\uB9CC \uC791\uB3D9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4 (\uC544\uBB34\uAC83\uB3C4 \uC791\uB3D9\uB418\uC9C0 \uC54A\uC74C). \uADF8\uB7EC\uB098 \uB2E4\uB978 \uB450\uAC00\uC9C0 \uBC29\uBC95\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4 (\uC774\uC804 \uCC55\uD130 \uCC38\uC870). \uADF8\uC911 quasar.config.js\uB97C \uD1B5\uD574 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4.")]),t("li",null,"SSR \uBE4C\uB4DC\uC758 \uACBD\uC6B0 \uB2E4\uD06C \uBAA8\uB4DC\uB97C 'auto'\uB85C \uC124\uC815\uD558\uC9C0 \uC54A\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uD074\uB77C\uC774\uC5B8\uD2B8\uC758 \uB2E4\uD06C \uBAA8\uB4DC \uAE30\uBCF8 \uC124\uC815\uC744 \uC54C \uC218 \uC5C6\uAE30 \uB54C\uBB38\uC5D0 SSR\uC740 \uD56D\uC0C1 \uB77C\uC774\uD2B8 \uBAA8\uB4DC\uB85C \uB80C\uB354\uB9C1 \uD55C \uB2E4\uC74C \uD074\uB77C\uC774\uC5B8\uD2B8\uAC00 \uC804\uB2EC\uBC1B\uC73C\uBA74 \uB2E4\uD06C \uBAA8\uB4DC\uB85C \uC804\uD658\uB429\uB2C8\uB2E4. \uADF8 \uACB0\uACFC \uD654\uBA74\uC774 \uBE60\uB974\uAC8C \uAE5C\uBC15\uC785\uB2C8\uB2E4.")],-1),U={id:"watch","data-name":"\uC0C1\uD0DC \uBCC0\uD654 \uAD00\uCC30"},W=e("\uC0C1\uD0DC \uBCC0\uD654 \uAD00\uCC30"),X=t("textarea",{readonly:""},`\r
<template>...</template>\r
\r
<script setup>\r
`+r("import { useQuasar } from 'quasar'")+`\r
`+r("import { watch } from 'vue'")+`\r
\r
const $q = useQuasar()\r
\r
watch(() => $q.dark.isActive, val => {\r
  console.log(val ? '\uB2E4\uD06C \uBAA8\uB4DC' : '\uB77C\uC774\uD2B8 \uBAA8\uB4DC')\r
})\r
<\/script>\r
        `,-1),Y=t("div",{class:"q-py-xl"},null,-1),Z={class:"row justify-between items-cetner"},rt={__name:"Dark",setup(tt){const l=m(()=>h(()=>import("./Code.fe4e34ed.js"),["assets/Code.fe4e34ed.js","assets/Code.2d671ef5.css","assets/index.b6be4404.js","assets/index.e8e7ed18.css"]));return(et,nt)=>{const a=s("Title"),_=s("Link"),c=s("Note"),u=s("Info"),d=s("Move");return f(),p("div",g,[t("section",k,[n(a,{head:""},{default:o(()=>[q]),_:1}),n(c,null,{default:o(()=>[b,t("p",null,[j,n(_,{to:{name:"darkmode"}},{default:o(()=>[x]),_:1}),D])]),_:1}),n(u,{advice:"",color:"teal-4"},{default:o(()=>[S,t("p",null,[Q,n(_,{href:"https://quasar.dev/quasar-plugins/dark#dark-api"},{default:o(()=>[y]),_:1}),A])]),_:1})]),t("section",V,[n(a,{sub:""},{default:o(()=>[w]),_:1}),$]),t("section",R,[n(a,{sub:""},{default:o(()=>[C]),_:1}),n(c,{color:"amber-5"},{default:o(()=>[N,I]),_:1})]),t("section",L,[n(a,{minor:""},{default:o(()=>[T]),_:1}),n(i(l),{class:"q-mb-lg",language:"html",convert:{html:"vue"}},{default:o(()=>[B]),_:1})]),t("section",E,[n(a,{minor:""},{default:o(()=>[P]),_:1}),n(i(l),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[M]),_:1})]),t("section",O,[n(a,{minor:""},{default:o(()=>[z]),_:1}),n(i(l),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:o(()=>[F]),_:1})]),t("section",G,[n(a,{sub:""},{default:o(()=>[H]),_:1}),J,K]),t("section",U,[n(a,{minor:""},{default:o(()=>[W]),_:1}),n(i(l),{class:"q-mb-lg",language:"html",convert:{html:"vue"}},{default:o(()=>[X]),_:1})]),Y,n(v,{class:"q-mb-lg"}),t("div",null,[t("div",Z,[n(d,{label:"Cookies",prev:"",to:{name:"cookies"}}),n(d,{label:"Loading",next:"",to:{name:"loading"}})])])])}}};export{rt as default};
