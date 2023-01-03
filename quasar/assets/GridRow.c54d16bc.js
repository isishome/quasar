import{ai as v,c as h,d as l,a as s,w as o,a5 as n,e as c,aj as m,a4 as r,o as f,Q as p}from"./index.b6be4404.js";import{Q as b}from"./QSeparator.b549cfd9.js";import"./use-dark.6c95071a.js";const w={class:"q-px-md text-body2"},x={id:"intro","data-name":"\uC18C\uAC1C"},y=c("Grid Row"),g=c("Flexbox \uC18C\uAC1C"),j=c("\uC5D0\uC11C \uBC30\uC6B4 Rows\uC5D0 \uB300\uD574 \uB354 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uB3C4\uB85D \uD558\uACA0\uC2B5\uB2C8\uB2E4. "),q=l("p",null,"\uB3D9\uC77C\uD55C \uB108\uBE44\uC758 column\uC5D0 \uB300\uD574 \uC911\uB2E8\uC810\uBCC4 column \uD074\uB798\uC2A4\uB97C \uD65C\uC6A9\uD574 \uBD05\uC2DC\uB2E4. \uC911\uB2E8\uC810 \uB2E8\uC704\uAC00 \uC5C6\uB294 column \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD558\uBA74 \uBAA8\uB4E0 column\uC758 \uB108\uBE44\uAC00 \uAC19\uC544\uC9D1\uB2C8\uB2E4.",-1),k=l("ul",null,[l("li",null," Quasar grid \uC911 row\uB294 column \uBCF4\uB2E4 \uC0AC\uC6A9 \uBE48\uB3C4\uAC00 \uB192\uC2B5\uB2C8\uB2E4. "),l("li",null,[c("column\uC758 \uB108\uBE44\uB97C \uC9C0\uC815\uD55C \uACBD\uC6B0, \uADF8 \uB108\uBE44\uB294 \uD574\uB2F9 \uBD80\uBAA8 \uC694\uC18C(\uCEE8\uD14C\uC774\uB108)\uC758 "),l("strong",null,"12 \uD3EC\uC778\uD2B8 grid\uC5D0 \uD574\uB2F9\uD558\uB294 \uB108\uBE44"),c("\uB97C \uAC00\uC9D1\uB2C8\uB2E4.")]),l("li",null," \uBD80\uBAA8 \uC694\uC18C\uC5D0 row\uB97C \uC0AC\uC6A9\uD560 \uB54C \uC790\uC2DD \uC694\uC18C\uC758 col\uC744 \uB2E4\uB8E8\uB294 \uBC95\uC744 \uC790\uC138\uD788 \uC54C\uC544\uBD05\uC2DC\uB2E4. ")],-1),F={id:"equal","data-name":"\uAC19\uC740 \uB108\uBE44"},P=c("\uAC19\uC740 \uB108\uBE44"),C=l("p",null,"\uC544\uB798 \uCD08\uC18C\uD615(xs) \uCC3D \uB108\uBE44\uBD80\uD130 \uCD08\uB300\uD615(xl) \uCC3D \uB108\uBE44\uAE4C\uC9C0 \uBAA8\uB4E0 \uB514\uBC14\uC774\uC2A4\uC640 \uBDF0\uD3EC\uD2B8\uC5D0 \uAC19\uC740 \uB108\uBE44\uC758 column\uC744 \uAC00\uC9C0\uB294 grid layouts\uC774 \uC788\uC2B5\uB2C8\uB2E4.",-1),E=l("textarea",{readonly:""},`\r
<div class="row">\r
  <div class="col">\r
    .col\r
  </div>\r
  <div class="col">\r
    .col\r
  </div>\r
</div>\r
\r
<div class="row">\r
  <div class="col">\r
    .col\r
  </div>\r
  <div class="col">\r
    .col\r
  </div>\r
  <div class="col">\r
    .col\r
  </div>\r
</div>\r
        `,-1),N=l("div",{class:"row"},[l("div",{class:"col"}," .col "),l("div",{class:"col"}," .col ")],-1),Q=l("div",{class:"row"},[l("div",{class:"col"}," .col "),l("div",{class:"col"}," .col "),l("div",{class:"col"}," .col ")],-1),R={id:"set-width","data-name":"column \uB108\uBE44 \uC124\uC815"},T=c("column \uB108\uBE44 \uC124\uC815"),V=l("p",null,"flexbox grid column\uC5D0\uC11C \uC790\uB3D9 \uB808\uC774\uC544\uC6C3\uC740 \uC77C\uBD80 column\uC758 \uC911\uB2E8\uC810 \uB108\uBE44\uB97C \uC124\uC815\uD558\uBA74 \uB098\uBA38\uC9C0 column\uC740 \uC790\uB3D9\uC73C\uB85C \uB108\uBE44\uAC00 \uC870\uC815\uB418\uB294 \uAC83\uC744 \uB73B\uD569\uB2C8\uB2E4.",-1),B=l("p",null,"\uCCAB \uBC88\uC9F8 row\uC758 \uB450 \uBC88\uC9F8 column\uC740 \uADF8 \uB108\uBE44\uB97C 5\uB85C \uC124\uC815\uD588\uC73C\uBBC0\uB85C(5/12 = 42.6%), \uB098\uBA38\uC9C0 column\uC758 \uB108\uBE44\uB294 7/12 = 57.4% \uAC00 \uB429\uB2C8\uB2E4.",-1),I=l("p",null,"\uB450 \uBC88\uC9F8 row\uC758 \uB450 \uBC88\uC9F8 column\uC740 \uADF8 \uB108\uBE44\uB97C 6\uC73C\uB85C \uC124\uC815\uD588\uC73C\uBBC0\uB85C(6/12 = 50%), \uB098\uBA38\uC9C0 column\uB4E4\uC758 \uB108\uBE44\uB294 3/12 = 25%(\uB098\uBA38\uC9C0 column\uC774 6/12 \uB108\uBE44\uB97C \uB098\uB220\uAC00\uC9D0) \uAC00 \uB429\uB2C8\uB2E4.",-1),L=l("textarea",{readonly:""},`\r
<div class="row">\r
  <div class="col">\r
    .col\r
  </div>\r
  <div class="col-5">\r
    .col\r
  </div>\r
</div>\r
\r
<div class="row">\r
  <div class="col">\r
    .col\r
  </div>\r
  <div class="col-6">\r
    .col\r
  </div>\r
  <div class="col">\r
    .col\r
  </div>\r
</div>\r
        `,-1),A=l("div",{class:"row"},[l("div",{class:"col"}," .col "),l("div",{class:"col-5"}," .col-5 ")],-1),G=l("div",{class:"row"},[l("div",{class:"col"}," .col "),l("div",{class:"col-6"}," .col-6 "),l("div",{class:"col"}," .col ")],-1),S={id:"variable","data-name":"\uAC00\uBCC0 \uB108\uBE44 \uCF58\uD150\uCE20"},D=c("\uAC00\uBCC0 \uB108\uBE44 \uCF58\uD150\uCE20"),M=l("p",null,[l("code",null,"col-{breakpoint}-auto"),c("\uB97C \uC0AC\uC6A9\uD55C column\uC740 \uADF8 \uCF58\uD150\uCE20\uC5D0 \uB530\uB77C \uB108\uBE44\uAC00 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uC870\uC815\uB429\uB2C8\uB2E4. input\uACFC number \uCC98\uB7FC \uD55C \uC904\uC5D0 \uCF58\uD150\uCE20\uB97C \uB2E4\uB904\uC57C \uD560 \uB54C \uC720\uC6A9\uD558\uAC8C \uC0AC\uC6A9\uB429\uB2C8\uB2E4(\uC774 \uD398\uC774\uC9C0 \uB9C8\uC9C0\uB9C9 \uC608\uC81C \uCC38\uC870). \uC218\uD3C9 \uC815\uB82C \uD074\uB798\uC2A4(justify-center\uB4F1)\uC640 \uD568\uAED8 \uBDF0\uD3EC\uD2B8 \uB108\uBE44\uAC00 \uBCC0\uACBD\uB428\uC5D0 \uB530\uB77C column\uC758 \uB108\uBE44\uB97C \uC54C \uC218 \uC5C6\uB294 \uB808\uC774\uC544\uC6C3\uC744 \uC911\uC559\uC5D0 \uBC30\uCE58\uD558\uB294 \uB370 \uB9E4\uC6B0 \uC720\uC6A9\uD569\uB2C8\uB2E4.")],-1),O=l("textarea",{readonly:""},`\r
<div class="row justify-center">\r
  <div class="col-12 col-md-2">\r
    .col-12 .col-md-2\r
  </div>\r
  <div class="col-12 col-md-auto">\r
    .col-12 .col-md-auto(\uAC00\uBCC0 \uB108\uBE44\uC758 \uCF58\uD150\uCE20)\r
  </div>\r
  <div class="col-12 col-md-2">\r
    .col-12 .col-md-2\r
  </div>\r
</div>\r
\r
<div class="row">\r
  <div class="col">\r
    .col\r
  </div>\r
  <div class="col-12 col-md-auto">\r
    .col-12 .col-md-auto(\uAC00\uBCC0 \uB108\uBE44\uC758 \uCF58\uD150\uCE20)\r
  </div>\r
  <div class="col">\r
    .col\r
  </div>\r
</div>\r
        `,-1),z=l("p",{class:"text-caption"},"\uBE0C\uB77C\uC6B0\uC800\uC758 \uD06C\uAE30\uB97C \uBCC0\uACBD\uD574\uAC00\uBA74\uC11C \uD655\uC778\uD574 \uBCF4\uC138\uC694.",-1),H=l("div",{class:"row justify-center"},[l("div",{class:"col-12 col-md-2"}," .col-12 .col-md-2 "),l("div",{class:"col-12 col-md-auto"}," .col-12 .col-md-auto(\uAC00\uBCC0 \uB108\uBE44\uC758 \uCF58\uD150\uCE20) "),l("div",{class:"col-12 col-md-2"}," .col-12 .col-md-2 ")],-1),J=l("div",{class:"row"},[l("div",{class:"col"}," .col "),l("div",{class:"col-12 col-md-auto"}," .col-12 .col-md-auto(\uAC00\uBCC0 \uB108\uBE44\uC758 \uCF58\uD150\uCE20) "),l("div",{class:"col"}," .col ")],-1),K={id:"responsive","data-name":"\uBC18\uC751\uD615 \uD074\uB798\uC2A4"},U=c("\uBC18\uC751\uD615 \uD074\uB798\uC2A4"),W=l("p",null,"grid\uC5D0\uB294 \uBCF5\uC7A1\uD55C \uBC18\uC751\uD615 \uB808\uC774\uC544\uC6C3\uC744 \uAD6C\uCD95\uD558\uAE30 \uC704\uD55C 5\uAC1C \uACC4\uCE35\uC758 \uBBF8\uB9AC \uC815\uC758\uB41C \uD074\uB798\uC2A4\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uCD08\uC18C\uD615(xs), \uC18C\uD615(sm), \uC911\uD615(md), \uB300\uD615(lg) \uB610\uB294 \uCD08\uB300\uD615(xl) \uB514\uBC14\uC774\uC2A4\uC5D0\uC11C column\uC758 \uB108\uBE44\uB97C \uC6D0\uD558\uB294 \uB300\uB85C \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),X={id:"breakpoint","data-name":"\uBAA8\uB4E0 \uC911\uB2E8\uC810",sub:""},Y=c("\uBAA8\uB4E0 \uC911\uB2E8\uC810"),Z=l("p",null,[c("\uAC00\uC7A5 \uC791\uC740 \uB514\uBC14\uC774\uC2A4\uC5D0\uC11C \uAC00\uC7A5 \uD070 \uB514\uBC14\uC774\uC2A4\uAE4C\uC9C0 \uB3D9\uC77C\uD55C grid\uC758 \uACBD\uC6B0 "),l("code",null,".col"),c(" \uBC0F "),l("code",null,".col-*"),c(" \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uD2B9\uC815 \uB108\uBE44\uC758 column\uC774 \uD544\uC694\uD55C \uACBD\uC6B0 \uD3EC\uC778\uD2B8\uAC00 \uC9C0\uC815\uB41C \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD558\uC138\uC694. \uADF8\uB7F0 \uACBD\uC6B0\uAC00 \uC544\uB2C8\uBA74 "),l("code",null,".col"),c("\uC744 \uC0AC\uC6A9\uD558\uC2DC\uBA74 \uB429\uB2C8\uB2E4.")],-1),$=l("textarea",{readonly:""},`\r
<div class="row">\r
  <div class="col">\r
    .col\r
  </div>\r
  <div class="col">\r
    .col\r
  </div>\r
  <div class="col">\r
    .col\r
  </div>\r
  <div class="col">\r
    .col\r
  </div>\r
</div>\r
\r
<div class="row">\r
  <div class="col-8">\r
    .col-8\r
  </div>\r
  <div class="col-4">\r
    .col-4\r
  </div>\r
</div>\r
        `,-1),ll=l("div",{class:"row"},[l("div",{class:"col"}," .col "),l("div",{class:"col"}," .col "),l("div",{class:"col"}," .col "),l("div",{class:"col"}," .col ")],-1),ol=l("div",{class:"row"},[l("div",{class:"col-8"}," .col-8 "),l("div",{class:"col-4"}," .col-4 ")],-1),sl={id:"stack","data-name":"\uC218\uD3C9 \uC313\uAE30",sub:""},cl=c("\uC218\uD3C9 \uC313\uAE30"),nl=l("p",null,[l("code",null,".col-12"),c("\uC640 "),l("code",null,".col-md-*"),c(" \uD074\uB798\uC2A4\uC758 \uC870\uD569\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC18C\uD615 \uB514\uBC14\uC774\uC2A4\uC5D0\uC11C \uC313\uB294 \uC815\uB82C\uB85C \uC2DC\uC791\uD574 \uB370\uC2A4\uD06C\uD1B1(\uC911\uD615) \uB514\uBC14\uC774\uC2A4\uC5D0\uC11C \uC218\uD3C9 \uC815\uB82C\uAE4C\uC9C0 \uAE30\uBCF8 \uADF8\uB9AC\uB4DC \uC2DC\uC2A4\uD15C\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")],-1),dl=l("textarea",{readonly:""},`\r
<div class="row">\r
  <div class="col-12 col-md-8">\r
    .col-12 .col-md-8\r
  </div>\r
  <div class="col-12 col-md-4">\r
    .col-12 .col-md-4\r
  </div>\r
</div>\r
\r
<div class="row">\r
  <div class="col-12 col-md">\r
    .col-12 .col-md\r
  </div>\r
  <div class="col-12 col-md">\r
    .col-12 .col-md\r
  </div>\r
  <div class="col-12 col-md">\r
    .col-12 .col-md\r
  </div>\r
</div>\r
        `,-1),el=l("p",{class:"text-caption"},"\uBE0C\uB77C\uC6B0\uC800\uC758 \uD06C\uAE30\uB97C \uBCC0\uACBD\uD574\uAC00\uBA74\uC11C \uD655\uC778\uD574 \uBCF4\uC138\uC694.",-1),tl=l("div",{class:"row"},[l("div",{class:"col-12 col-md-8"}," .col-12 .col-md-8 "),l("div",{class:"col-12 col-md-4"}," .col-12 .col-md-4 ")],-1),rl=l("div",{class:"row"},[l("div",{class:"col-12 col-md"}," .col-12 .col-md "),l("div",{class:"col-12 col-md"}," .col-12 .col-md "),l("div",{class:"col-12 col-md"}," .col-12 .col-md ")],-1),al=l("p",null,[l("code",null,"col-md"),c(" \uCC98\uB7FC \uB108\uBE44\uB97C \uC9C0\uC815\uD558\uC9C0 \uC54A\uACE0 \uC911\uB2E8\uC810\uB9CC \uC9C0\uC815\uD558\uBA74 \uD574\uB2F9 \uB77C\uC778\uC758 \uB0A8\uC740 \uD3EC\uC778\uD2B8\uB9CC\uD07C \uB108\uBE44\uB97C \uCC44\uC6C1\uB2C8\uB2E4.")],-1),il={id:"mixmatch","data-name":"\uBBF9\uC2A4 \uC564 \uB9E4\uCE58",sub:""},vl=c("\uBBF9\uC2A4 \uC564 \uB9E4\uCE58"),ml=l("p",null,"column\uC774 grid \uACC4\uCE35\uC5D0 \uC313\uC774\uB294 \uAC83\uC744 \uC6D0\uD558\uC9C0 \uC54A\uB098\uC694? \uD544\uC694\uC5D0 \uB530\uB77C \uAC01 \uACC4\uCE35\uC5D0 \uC11C\uB85C \uB2E4\uB978 \uD074\uB798\uC2A4\uB97C \uC870\uD569\uD558\uC5EC \uC0AC\uC6A9\uD558\uC138\uC694. \uBAA8\uB4E0 \uD074\uB798\uC2A4\uB4E4\uC774 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB294\uC9C0 \uC54C\uACE0 \uC2F6\uB2E4\uBA74 \uC544\uB798 \uC608\uC81C\uB97C \uCC38\uACE0\uD558\uC138\uC694. ",-1),ul=l("textarea",{readonly:""},`\r
<div class="row">\r
  <div class="col col-md-8">\r
    .col .col-md-8\r
  </div>\r
  <div class="col-6 col-md-4">\r
    .col-6 .col-md-4\r
  </div>\r
</div>\r
\r
<div class="row">\r
  <div class="col-6 col-md-4">\r
    .col-6 .col-md-4\r
  </div>\r
  <div class="col-6 col-md-4">\r
    .col-6 .col-md-4\r
  </div>\r
  <div class="col-6 col-md-4">\r
    .col-6 .col-md-4\r
  </div>\r
</div>\r
\r
<div class="row">\r
  <div class="col-6">\r
    .col-6\r
  </div>\r
  <div class="col-6">\r
    .col-6\r
  </div>\r
</div>\r
        `,-1),_l=l("p",{class:"text-caption"},"\uBE0C\uB77C\uC6B0\uC800\uC758 \uD06C\uAE30\uB97C \uBCC0\uACBD\uD574\uAC00\uBA74\uC11C \uD655\uC778\uD574 \uBCF4\uC138\uC694.",-1),hl=l("div",{class:"row"},[l("div",{class:"col col-md-8"}," .col .col-md-8 "),l("div",{class:"col-6 col-md-4"}," .col-6 .col-md-4 ")],-1),fl=l("div",{class:"row"},[l("div",{class:"col-6 col-md-4"}," .col-6 .col-md-4 "),l("div",{class:"col-6 col-md-4"}," .col-6 .col-md-4 "),l("div",{class:"col-6 col-md-4"}," .col-6 .col-md-4 ")],-1),pl=l("div",{class:"row"},[l("div",{class:"col-6"}," .col-6 "),l("div",{class:"col-6"}," .col-6 ")],-1),bl={id:"align","data-name":"\uC815\uB82C",sub:""},wl=c("\uC815\uB82C"),xl=l("p",null,"flexbox \uC815\uB82C \uC720\uD2F8\uB9AC\uD2F0\uB97C \uC0AC\uC6A9\uD558\uC5EC column\uC744 \uC218\uC9C1 \uBC0F \uC218\uD3C9\uC73C\uB85C \uC815\uB82C\uD569\uB2C8\uB2E4.",-1),yl=l("textarea",{readonly:""},`\r
<div class="row items-start" style="height:5rem">\r
  <div class="col">\r
    \uC138 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
  <div class="col">\r
    \uC138 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
  <div class="col">\r
    \uC138 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
</div>\r
            `,-1),gl=l("div",{class:"row items-start",style:{height:"5rem"}},[l("div",{class:"col"}," \uC138 \uAC1C\uC758 column \uC911 \uD558\uB098 "),l("div",{class:"col"}," \uC138 \uAC1C\uC758 column \uC911 \uD558\uB098 "),l("div",{class:"col"}," \uC138 \uAC1C\uC758 column \uC911 \uD558\uB098 ")],-1),jl=l("textarea",{readonly:""},`\r
<div class="row items-center" style="height:5rem">\r
  <div class="col">\r
    \uC138 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
  <div class="col">\r
    \uC138 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
  <div class="col">\r
    \uC138 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
</div>\r
            `,-1),ql=l("div",{class:"row items-center",style:{height:"5rem"}},[l("div",{class:"col"}," \uC138 \uAC1C\uC758 column \uC911 \uD558\uB098 "),l("div",{class:"col"}," \uC138 \uAC1C\uC758 column \uC911 \uD558\uB098 "),l("div",{class:"col"}," \uC138 \uAC1C\uC758 column \uC911 \uD558\uB098 ")],-1),kl=l("textarea",{readonly:""},`\r
<div class="row items-end" style="height:5rem">\r
  <div class="col">\r
    \uC138 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
  <div class="col">\r
    \uC138 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
  <div class="col">\r
    \uC138 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
</div>\r
            `,-1),Fl=l("div",{class:"row items-end",style:{height:"5rem"}},[l("div",{class:"col"}," \uC138 \uAC1C\uC758 column \uC911 \uD558\uB098 "),l("div",{class:"col"}," \uC138 \uAC1C\uC758 column \uC911 \uD558\uB098 "),l("div",{class:"col"}," \uC138 \uAC1C\uC758 column \uC911 \uD558\uB098 ")],-1),Pl=l("textarea",{readonly:""},`\r
<div class="row" style="height:5rem">\r
  <div class="col self-start">\r
    .self-start\r
  </div>\r
  <div class="col self-center">\r
    .self-center\r
  </div>\r
  <div class="col self-end">\r
    .self-end\r
  </div>\r
</div>\r
            `,-1),Cl=l("div",{class:"row",style:{height:"5rem"}},[l("div",{class:"col self-start"}," .self-start "),l("div",{class:"col self-center"}," .self-center "),l("div",{class:"col self-end"}," .self-end ")],-1),El=l("textarea",{readonly:""},`\r
<div class="row justify-start">\r
  <div class="col-4">\r
    \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
  <div class="col-4">\r
    \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
</div>\r
            `,-1),Nl=l("div",{class:"row justify-start"},[l("div",{class:"col-4"}," \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098 "),l("div",{class:"col-4"}," \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098 ")],-1),Ql=l("textarea",{readonly:""},`\r
<div class="row justify-center">\r
  <div class="col-4">\r
    \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
  <div class="col-4">\r
    \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
</div>\r
            `,-1),Rl=l("div",{class:"row justify-center"},[l("div",{class:"col-4"}," \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098 "),l("div",{class:"col-4"}," \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098 ")],-1),Tl=l("textarea",{readonly:""},`\r
<div class="row justify-end">\r
  <div class="col-4">\r
    \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
  <div class="col-4">\r
    \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
</div>\r
            `,-1),Vl=l("div",{class:"row justify-end"},[l("div",{class:"col-4"}," \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098 "),l("div",{class:"col-4"}," \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098 ")],-1),Bl=l("textarea",{readonly:""},`\r
<div class="row justify-around">\r
  <div class="col-4">\r
    \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
  <div class="col-4">\r
    \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
</div>\r
            `,-1),Il=l("div",{class:"row justify-around"},[l("div",{class:"col-4"}," \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098 "),l("div",{class:"col-4"}," \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098 ")],-1),Ll=l("textarea",{readonly:""},`\r
<div class="row justify-between">\r
  <div class="col-4">\r
    \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
  <div class="col-4">\r
    \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
</div>\r
            `,-1),Al=l("div",{class:"row justify-between"},[l("div",{class:"col-4"}," \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098 "),l("div",{class:"col-4"}," \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098 ")],-1),Gl=l("textarea",{readonly:""},`\r
<div class="row justify-evenly">\r
  <div class="col-4">\r
    \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
  <div class="col-4">\r
    \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098\r
  </div>\r
</div>\r
            `,-1),Sl=l("div",{class:"row justify-evenly"},[l("div",{class:"col-4"}," \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098 "),l("div",{class:"col-4"}," \uB450 \uAC1C\uC758 column \uC911 \uD558\uB098 ")],-1),Dl=l("p",null,[l("b",null,"\uD301")],-1),Ml=l("p",null,[l("em",null,"items-center"),c(" + "),l("em",null,"justify-center"),c("\uC640 \uD6A8\uACFC\uAC00 \uAC19\uC740 \uD3B8\uB9AC\uD55C "),l("em",null,"flex-center"),c(" CSS \uD074\uB798\uC2A4\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. "),l("em",null,"flex"),c(", "),l("em",null,"row"),c(" \uB610\uB294 "),l("em",null,"column"),c("\uACFC \uD568\uAED8 \uC0AC\uC6A9\uD558\uC138\uC694. ")],-1),Ol={id:"wrap","data-name":"column \uB798\uD551",sub:""},zl=c("column \uB798\uD551"),Hl=l("p",null,"\uB2E8\uC77C row\uC5D0 column\uB4E4\uC758 \uB108\uBE44 \uAC12\uC774 12 \uD3EC\uC778\uD2B8\uB97C \uB118\uB294 \uACBD\uC6B0, \uCD08\uACFC\uB418\uB294 column\uB4E4\uC740 \uC21C\uCC28\uC801\uC73C\uB85C \uC0C8 \uB77C\uC778\uC73C\uB85C \uC904 \uBC14\uAFC8 \uB429\uB2C8\uB2E4.",-1),Jl=l("textarea",{readonly:""},`\r
<div class="row">\r
  <div class="col-9">\r
    .col-9\r
  </div>\r
  <div class="col-4">\r
    .col-4\r
    <br />9 + 4 = 13 > 12\uC774\uBBC0\uB85C\r
    <br />4 \uB108\uBE44\uC758 column\uC740 \uC0C8 \uB77C\uC778\uC73C\uB85C\r
    <br />\uC904 \uBC14\uAFC8 \uB429\uB2C8\uB2E4.\r
  </div>\r
  <div class="col-5">\r
    .col-5\r
    <br />\uB4A4\uC5D0 \uC624\uB294 column\uB4E4\uB3C4\r
    <br />\uC55E column\uACFC \uACC4\uC0B0\uB418\uC5B4\r
    <br />\uC904 \uBC14\uAFC8 \uB429\uB2C8\uB2E4.\r
  </div>\r
</div>\r
\r
<div class="row">\r
  <div class="col-6 col-sm-3">\r
    .col-6 .col-sm-3\r
  </div>\r
  <div class="col-6 col-sm-3">\r
    .col-6 .col-sm-3\r
  </div>\r
  <div class="col-6 col-sm-3">\r
    .col-6 .col-sm-3\r
  </div>\r
</div>\r
        `,-1),Kl=l("p",{class:"text-caption"},"\uBE0C\uB77C\uC6B0\uC800\uC758 \uD06C\uAE30\uB97C \uBCC0\uACBD\uD574\uAC00\uBA74\uC11C \uD655\uC778\uD574 \uBCF4\uC138\uC694.",-1),Ul=l("div",{class:"row"},[l("div",{class:"col-9"}," .col-9 "),l("div",{class:"col-4"},[c(" .col-4 "),l("br"),c("9 + 4 = 13 > 12\uC774\uBBC0\uB85C "),l("br"),c("4 \uB108\uBE44\uC758 column\uC740 \uC0C8 \uB77C\uC778\uC73C\uB85C "),l("br"),c("\uC904 \uBC14\uAFC8 \uB429\uB2C8\uB2E4. ")]),l("div",{class:"col-5"},[c(" .col-5 "),l("br"),c("\uB4A4\uC5D0 \uC624\uB294 column\uB4E4\uB3C4 "),l("br"),c("\uC55E column\uACFC \uACC4\uC0B0\uB418\uC5B4 "),l("br"),c("\uC904 \uBC14\uAFC8 \uB429\uB2C8\uB2E4. ")])],-1),Wl=l("div",{class:"row"},[l("div",{class:"col-6 col-sm-3"}," .col-6 .col-sm-3 "),l("div",{class:"col-6 col-sm-3"}," .col-6 .col-sm-3 "),l("div",{class:"col-6 col-sm-3"}," .col-6 .col-sm-3 ")],-1),Xl={id:"order","data-name":"\uC7AC\uBC30\uCE58",sub:""},Yl=c("\uC7AC\uBC30\uCE58"),Zl=l("textarea",{readonly:""},`\r
<div class="row reverse">\r
  <div class="col">\r
    \uCCAB \uBC88\uC9F8, \uB9C8\uC9C0\uB9C9\uC73C\uB85C\r
  </div>\r
  <div class="col">\r
    \uB450 \uBC88\uC9F8, \uBC14\uB00C\uC9C0 \uC54A\uC74C\r
  </div>\r
  <div class="col">\r
    \uC138 \uBC88\uC9F8, \uCC98\uC74C\uC73C\uB85C\r
  </div>\r
</div>\r
            `,-1),$l=l("div",{class:"row reverse"},[l("div",{class:"col"}," \uCCAB \uBC88\uC9F8, \uB9C8\uC9C0\uB9C9\uC73C\uB85C "),l("div",{class:"col"}," \uB450 \uBC88\uC9F8, \uBC14\uB00C\uC9C0 \uC54A\uC74C "),l("div",{class:"col"}," \uC138 \uBC88\uC9F8, \uCC98\uC74C\uC73C\uB85C ")],-1),lo=l("textarea",{readonly:""},`\r
<div class="row">\r
  <div class="col order-none">\r
    \uCCAB \uBC88\uC9F8, \uC7AC\uBC30\uCE58\uB418\uC9C0 \uC54A\uC74C(.order-none)\r
  </div>\r
  <div class="col-6 order-last">\r
    \uB450\uBC88\uC9F8, \uB9C8\uC9C0\uB9C9\uC73C\uB85C(.order-last)\r
  </div>\r
  <div class="col-6 order-first">\r
    \uC138 \uBC88\uC9F8, \uCC98\uC74C\uC73C\uB85C(.order_first)\r
  </div>\r
</div>\r
            `,-1),oo=l("div",{class:"row"},[l("div",{class:"col order-none"}," \uCCAB \uBC88\uC9F8, \uC7AC\uBC30\uCE58\uB418\uC9C0 \uC54A\uC74C(.order-none) "),l("div",{class:"col-6 order-last"}," \uB450\uBC88\uC9F8, \uB9C8\uC9C0\uB9C9\uC73C\uB85C(.order-last) "),l("div",{class:"col-6 order-first"}," \uC138 \uBC88\uC9F8, \uCC98\uC74C\uC73C\uB85C(.order_first) ")],-1),so={id:"offset","data-name":"column \uC624\uD504\uC14B",sub:""},co=c("column \uC624\uD504\uC14B"),no=l("p",null,[c("column\uC744 \uC6B0\uCE21\uC73C\uB85C \uC774\uB3D9\uC2DC\uD0AC \uB54C "),l("code",null,".offset-md-*"),c(" \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD558\uC138\uC694. \uC774 \uD074\uB798\uC2A4\uB4E4\uC740 column\uC758 \uC88C\uCE21 \uC5EC\uBC31\uC744 \uADF8 \uB108\uBE44(*) \uB9CC\uD07C \uB298\uB9BD\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 "),l("code",null,".offset-md-4"),c("\uB294 "),l("code",null,".col-md-4"),c("\uB97C 4\uB108\uBE44\uB9CC\uD07C \uC774\uB3D9\uC2DC\uD0B5\uB2C8\uB2E4. ")],-1),eo=l("textarea",{readonly:""},`\r
<div class="row">\r
  <div class="col-md-4">\r
    .col-md-4\r
  </div>\r
  <div class="col-md-4 offset-md-4">\r
    .col-md-4 .offset-md-4\r
  </div>\r
</div>\r
\r
<div class="row">\r
  <div class="col-md-3 offset-md-3">\r
    .col-md-3 .offset-md-3\r
  </div>\r
  <div class="col-md-3 offset-md-3">\r
    .col-md-3 .offset-md-3\r
  </div>\r
</div>\r
\r
<div class="row">\r
  <div class="col-md-6 offset-md-3">\r
    .col-md-6 .offset-md-3\r
  </div>\r
</div>\r
        `,-1),to=l("p",{class:"text-caption"},"\uBE0C\uB77C\uC6B0\uC800\uC758 \uD06C\uAE30\uB97C \uBCC0\uACBD\uD574\uAC00\uBA74\uC11C \uD655\uC778\uD574 \uBCF4\uC138\uC694.",-1),ro=l("div",{class:"row"},[l("div",{class:"col-md-4"}," .col-md-4 "),l("div",{class:"col-md-4 offset-md-4"}," .col-md-4 .offset-md-4 ")],-1),ao=l("div",{class:"row"},[l("div",{class:"col-md-3 offset-md-3"}," .col-md-3 .offset-md-3 "),l("div",{class:"col-md-3 offset-md-3"}," .col-md-3 .offset-md-3 ")],-1),io=l("div",{class:"row"},[l("div",{class:"col-md-6 offset-md-3"}," .col-md-6 .offset-md-3 ")],-1),vo={id:"nesting","data-name":"\uC911\uCCA9",sub:""},mo=c("\uC911\uCCA9"),uo=l("p",null,[c("\uAE30\uBCF8 grid\uC5D0 \uCF58\uD150\uCE20\uB97C \uC911\uCCA9\uC2DC\uD0A4\uB824\uBA74 \uAE30\uC874 grid\uC758 "),l("code",null,".col-sm-*"),c(" \uC548\uC5D0 \uC0C8\uB85C\uC6B4 grid("),l("code",null,".row"),c(" \uBC0F "),l("code",null,".col-sm-*"),c(" \uC138\uD2B8)\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4. \uC911\uCCA9\uB41C row\uC5D0\uB294 \uCD5C\uB300 12\uD3EC\uC778\uD2B8 \uC774\uD558\uC758 column\uC774 \uD3EC\uD568\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4(12 \uD3EC\uC778\uD2B8 column\uC744 \uBAA8\uB450 \uC0AC\uC6A9\uD560 \uD544\uC694\uB294 \uC5C6\uC2B5\uB2C8\uB2E4). ")],-1),_o=l("textarea",{readonly:""},`\r
<div class="row">\r
  <div class="col-sm-9">\r
    <p>1\uB2E8\uACC4: .col-sm-9</p>\r
    <div class="row">\r
      <div class="col-8 col-sm-6">\r
        2\uB2E8\uACC4: .col-8 .col-sm-6\r
      </div>\r
      <div class="col-4 col-sm-6">\r
        3\uB2E8\uACC4: .col-4 .col-sm-6\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
        `,-1),ho=l("p",{class:"text-caption"},"\uBE0C\uB77C\uC6B0\uC800\uC758 \uD06C\uAE30\uB97C \uBCC0\uACBD\uD574\uAC00\uBA74\uC11C \uD655\uC778\uD574 \uBCF4\uC138\uC694.",-1),fo=l("div",{class:"row"},[l("div",{class:"col-sm-9"},[l("p",null,"1\uB2E8\uACC4: .col-sm-9"),l("div",{class:"row"},[l("div",{class:"col-8 col-sm-6"}," 2\uB2E8\uACC4: .col-8 .col-sm-6 "),l("div",{class:"col-4 col-sm-6"}," 3\uB2E8\uACC4: .col-4 .col-sm-6 ")])])],-1),po={id:"playground","data-name":"Flex Playground"},bo=c("Flex Playground"),wo=l("p",null,"Flex Playground\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC778\uD130\uB809\uD2F0\uBE0C \uD55C Flex\uC758 \uB3D9\uC791\uC744 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uC138\uC694.",-1),xo=l("div",{class:"q-py-xl"},null,-1),yo={class:"row justify-between items-cetner"},Co={__name:"GridRow",setup(go){const e=v(()=>m(()=>import("./Code.fe4e34ed.js"),["assets/Code.fe4e34ed.js","assets/Code.2d671ef5.css","assets/index.b6be4404.js","assets/index.e8e7ed18.css"])),a=v(()=>m(()=>import("./Practice.0692e7b0.js"),["assets/Practice.0692e7b0.js","assets/Practice.e6958f8f.css","assets/index.b6be4404.js","assets/index.e8e7ed18.css","assets/use-dark.6c95071a.js","assets/use-form.b547680f.js","assets/QSeparator.b549cfd9.js","assets/use-panel.c8073603.js","assets/selection.27ab2460.js"]));return(jo,qo)=>{const t=r("Title"),u=r("Link"),d=r("Info"),_=r("Note"),i=r("Move");return f(),h("div",w,[l("section",x,[s(t,{head:""},{default:o(()=>[y]),_:1}),l("p",null,[s(u,{to:{name:"flexbox"}},{default:o(()=>[g]),_:1}),j]),q,s(d,{advice:"",color:"teal-4"},{default:o(()=>[k]),_:1})]),l("section",F,[s(t,{sub:""},{default:o(()=>[P]),_:1}),C,s(n(e),{language:"html",convert:{html:"vue"},class:"q-mb-md"},{default:o(()=>[E]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[N,Q]),_:1})]),l("section",R,[s(t,{sub:""},{default:o(()=>[T]),_:1}),V,B,I,s(n(e),{language:"html",convert:{html:"vue"},class:"q-mb-md"},{default:o(()=>[L]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[A,G]),_:1})]),l("section",S,[s(t,{sub:""},{default:o(()=>[D]),_:1}),M,s(n(e),{language:"html",convert:{html:"vue"},class:"q-mb-md"},{default:o(()=>[O]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[z,H,J]),_:1})]),l("section",K,[s(t,{sub:""},{default:o(()=>[U]),_:1}),W]),l("section",X,[s(t,{minor:""},{default:o(()=>[Y]),_:1}),Z,s(n(e),{language:"html",convert:{html:"vue"},class:"q-mb-md"},{default:o(()=>[$]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[ll,ol]),_:1})]),l("section",sl,[s(t,{minor:""},{default:o(()=>[cl]),_:1}),nl,s(n(e),{language:"html",convert:{html:"vue"},class:"q-mb-md"},{default:o(()=>[dl]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[el,tl,rl]),_:1}),s(d,{advice:"",color:"teal-4"},{default:o(()=>[al]),_:1})]),l("section",il,[s(t,{minor:""},{default:o(()=>[vl]),_:1}),ml,s(n(e),{language:"html",convert:{html:"vue"},class:"q-mb-md"},{default:o(()=>[ul]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[_l,hl,fl,pl]),_:1})]),l("section",bl,[s(t,{minor:""},{default:o(()=>[wl]),_:1}),xl,s(n(a),{options:[{label:"items-start",value:"items-start"},{label:"items-center",value:"items-center"},{label:"items-end",value:"items-end"},{label:"self-*",value:"self"}]},{"items-start":o(()=>[s(n(e),{language:"html",convert:{html:"vue"}},{default:o(()=>[yl]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[gl]),_:1})]),"items-center":o(()=>[s(n(e),{language:"html",convert:{html:"vue"}},{default:o(()=>[jl]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[ql]),_:1})]),"items-end":o(()=>[s(n(e),{language:"html",convert:{html:"vue"}},{default:o(()=>[kl]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[Fl]),_:1})]),self:o(()=>[s(n(e),{language:"html",convert:{html:"vue"}},{default:o(()=>[Pl]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[Cl]),_:1})]),_:1}),s(n(a),{options:[{label:"justify-start",value:"justify-start"},{label:"justify-center",value:"justify-center"},{label:"justify-end",value:"justify-end"},{label:"justify-around",value:"justify-around"},{label:"justify-between",value:"justify-between"},{label:"justify-evenly",value:"justify-evenly"}]},{"justify-start":o(()=>[s(n(e),{language:"html",convert:{html:"vue"}},{default:o(()=>[El]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[Nl]),_:1})]),"justify-center":o(()=>[s(n(e),{language:"html",convert:{html:"vue"}},{default:o(()=>[Ql]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[Rl]),_:1})]),"justify-end":o(()=>[s(n(e),{language:"html",convert:{html:"vue"}},{default:o(()=>[Tl]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[Vl]),_:1})]),"justify-around":o(()=>[s(n(e),{language:"html",convert:{html:"vue"}},{default:o(()=>[Bl]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[Il]),_:1})]),"justify-between":o(()=>[s(n(e),{language:"html",convert:{html:"vue"}},{default:o(()=>[Ll]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[Al]),_:1})]),"justify-evenly":o(()=>[s(n(e),{language:"html",convert:{html:"vue"}},{default:o(()=>[Gl]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[Sl]),_:1})]),_:1}),s(_,{color:"green-13"},{default:o(()=>[Dl,Ml]),_:1})]),l("section",Ol,[s(t,{minor:""},{default:o(()=>[zl]),_:1}),Hl,s(n(e),{language:"html",convert:{html:"vue"},class:"q-mb-md"},{default:o(()=>[Jl]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[Kl,Ul,Wl]),_:1})]),l("section",Xl,[s(t,{minor:""},{default:o(()=>[Yl]),_:1}),s(n(a),{options:[{label:"\uC5ED\uC21C",value:"reverse"},{label:"Flex \uBC30\uCE58",value:"flex-order"}]},{reverse:o(()=>[s(n(e),{language:"html",convert:{html:"vue"}},{default:o(()=>[Zl]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[$l]),_:1})]),"flex-order":o(()=>[s(n(e),{language:"html",convert:{html:"vue"}},{default:o(()=>[lo]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[oo]),_:1})]),_:1})]),l("section",so,[s(t,{minor:""},{default:o(()=>[co]),_:1}),no,s(n(e),{language:"html",convert:{html:"vue"},class:"q-mb-md"},{default:o(()=>[eo]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[to,ro,ao,io]),_:1})]),l("section",vo,[s(t,{minor:""},{default:o(()=>[mo]),_:1}),uo,s(n(e),{language:"html",convert:{html:"vue"},class:"q-mb-md"},{default:o(()=>[_o]),_:1}),s(d,{label:"\uACB0\uACFC",example:""},{default:o(()=>[ho,fo]),_:1})]),l("section",po,[s(t,{sub:""},{default:o(()=>[bo]),_:1}),wo,s(p,{push:"",label:"Flex Playground","icon-right":"open_in_new",color:"primary",type:"a",href:"https://quasar.dev/layout/grid/flex-playground",target:"_blank",rel:"noopener noreferrer"})]),xo,s(b,{class:"q-mb-lg"}),l("div",null,[l("div",yo,[s(i,{label:"Flexbox \uC18C\uAC1C",prev:"",to:{name:"flexbox"}}),s(i,{label:"Grid Column \uC18C\uAC1C",next:"",to:{name:"gridcolumn"}})])])])}}};export{Co as default};
