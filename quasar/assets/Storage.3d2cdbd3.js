import{ai as y,X as k,c as f,d as e,a as s,w as i,a5 as m,a9 as S,a8 as j,e as t,aj as $,a1 as z,a4 as q,o as d,Q as _,a0 as g,aa as V}from"./index.b6be4404.js";import{Q as P}from"./QSeparator.b549cfd9.js";import{u as x}from"./uid.42677368.js";import"./use-dark.6c95071a.js";const B={class:"q-px-md text-body2"},E=t("\uCE74\uB4DC \uC815\uBCF4 \uC800\uC7A5\uD558\uAE30 "),L=e("p",null,"\uC774\uBC88 \uCC55\uD130\uC5D0\uC11C\uB294 \uBA64\uBC84 \uCE74\uB4DC\uC758 \uC815\uBCF4\uB97C \uB85C\uCEEC \uC138\uC158 \uC2A4\uD1A0\uB9AC\uC9C0\uC5D0 \uC800\uC7A5\uD558\uC5EC \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uB3C4\uB85D \uD558\uACA0\uC2B5\uB2C8\uB2E4. ",-1),D={id:"install","data-name":"\uC124\uCE58"},N=t("\uC124\uCE58"),U=e("p",null,[t("\uB85C\uCEEC \uC138\uC158 \uC2A4\uD1A0\uB9AC\uC9C0\uB97C \uC0AC\uC6A9\uD558\uAE30 \uC704\uD574 "),e("em",null,"main.js"),t(" \uD30C\uC77C\uC758 \uC218\uC815\uC774 \uD544\uC694\uD569\uB2C8\uB2E4. ")],-1),W=e("textarea",{readonly:""},`\r
// main.js\r
\r
import {\r
  Quasar,\r
  SessionStorage\r
} from 'quasar'\r
\r
app.use(Quasar, {\r
  plugins: {\r
    SessionStorage\r
  }\r
})\r
        `,-1),O={id:"usage","data-name":"\uC0AC\uC6A9\uBC95"},R=t("\uC0AC\uC6A9\uBC95"),F=t("Quasar\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uB85C\uCEEC \uC138\uC158 \uC2A4\uD1A0\uB9AC\uC9C0 \uC0AC\uC6A9\uBC95\uC740 \uC544\uC8FC \uAC04\uB2E8\uD569\uB2C8\uB2E4. "),X=e("code",null,"$q",-1),G=t(" \uAC1D\uCCB4\uC5D0 \uBBF8\uB9AC \uC815\uC758\uB41C "),H=t("Web Storage API"),J=t("\uC758 \uB798\uD37C\uC778 "),K=e("code",null,"sessionStorage",-1),Y=t("\uB97C \uC0AC\uC6A9\uD558\uAE30\uB9CC \uD558\uBA74 \uB429\uB2C8\uB2E4. "),Z=e("textarea",{readonly:""},`\r
          // Vue \uD30C\uC77C \uC548\uC5D0\uC11C \uC0AC\uC6A9\r
`+V("import { useQuasar } from 'quasar'")+`\r
\r
const $q = useQuasar()\r
\r
$q.localStorage.set(key, value)\r
const value = $q.localStorage.getItem(key)\r
\r
$q.sessionStorage.set(key, value)\r
const otherValue = $q.sessionStorage.getItem(key)\r
        `,-1),ee={id:"storage","data-name":"\uC800\uC7A5\uD558\uAE30"},te=t("\uC800\uC7A5\uD558\uAE30"),ne=e("p",null,[t("\uC774\uC81C \uC9C0\uB09C \uCC55\uD130\uAE4C\uC9C0 \uC791\uC131\uD588\uB358 "),e("em",null,"App.vue"),t(" \uD30C\uC77C\uC5D0 \uC138\uC158 \uC2A4\uD1A0\uB9AC\uC9C0\uB97C \uC801\uC6A9 \uD574 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4. ")],-1),se=e("textarea",{readonly:""},`\r
// App.vue\r
\r
// $q \uAC1D\uCCB4\r
const $q = useQuasar()\r
\r
const members = reactive($q.sessionStorage.getItem('members') || [])\r
        `,-1),oe=e("p",null,[t("\uBA3C\uC800 "),e("code",null,"$q"),t(" \uAC1D\uCCB4\uB97C \uC815\uC758\uD558\uACE0 "),e("code",null,"members"),t(" \uBC18\uC751\uD615 \uAC1D\uCCB4\uC758 \uCD08\uAE43\uAC12\uC73C\uB85C \uB85C\uCEEC \uC138\uC158 \uC2A4\uD1A0\uB9AC\uC9C0\uC758 'members' \uD0A4\uAC12\uC744 \uAC00\uC838\uC624\uB3C4\uB85D \uC218\uC815\uD569\uB2C8\uB2E4. \uD574\uB2F9 \uD0A4\uAC12\uC744 \uAC16\uB294 \uB370\uC774\uD130\uAC00 \uC5C6\uC744 \uACBD\uC6B0 \uBE48 \uBC30\uC5F4([])\uC744 \uC815\uC758\uD574 \uC90D\uB2C8\uB2E4. ")],-1),re=e("textarea",{readonly:""},`\r
// App.vue\r
\r
// Member \uC815\uBCF4\uB97C \uC138\uC158 \uC2A4\uD1A0\uB9AC\uC9C0\uC5D0 \uC800\uC7A5\r
const store = (mid) => {\r
  const findMember = members.find(m => m.mid === mid)\r
\r
  if (findMember) {\r
    findMember.editable = false\r
    $q.sessionStorage.set('members', members)\r
  }\r
}\r
        `,-1),ae=e("textarea",{readonly:""},`\r
<!-- App.vue -->\r
\r
<q-btn v-else unelevated dense round size="sm" color="primary" icon="check" @click="store(m.mid)" />\r
        `,-1),ie=e("em",null,"<script setup>",-1),ce=t(" \uD558\uB2E8\uC5D0 "),le=e("code",null,"store",-1),de=t("\uB77C\uB294 \uC0C8 \uBA54\uC11C\uB4DC\uB97C \uCD94\uAC00\uD558\uACE0, \uCCB4\uD06C \uBC84\uD2BC\uC758 \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uB85C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774\uC81C \uBA64\uBC84 \uCE74\uB4DC \uC218\uC815 \uBAA8\uB4DC\uC5D0\uC11C "),me=t(" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 "),_e=e("code",null,"mid",-1),ue=t(" \uAC12\uC744 \uC804\uB2EC\uD574 \uD574\uB2F9 \uBA64\uBC84 \uCE74\uB4DC\uB97C \uBE44\uC218\uC815 \uBAA8\uB4DC\uB85C \uC804\uD658\uD558\uACE0 "),be=e("em",null,"members",-1),pe=t(" \uC804\uCCB4 \uB370\uC774\uD130\uB97C \uB85C\uCEEC \uC138\uC158 \uC2A4\uD1A0\uB9AC\uC9C0\uC5D0 'members'\uB77C\uB294 \uD0A4\uAC12\uC73C\uB85C \uC800\uC7A5\uD569\uB2C8\uB2E4. "),fe=e("b",null,"\uACB0\uACFC",-1),he={class:"row justify-end q-pb-sm"},ge={class:"row q-col-gutter-lg"},ve=e("p",{class:"q-py-lg"},null,-1),qe=e("p",null,[t("\uBA64\uBC84 \uCD94\uAC00 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD574 \uBA87 \uAC1C\uC758 \uCE74\uB4DC \uC815\uBCF4\uB97C \uCD94\uAC00\uD558\uACE0 \uC800\uC7A5\uD574 \uC90D\uB2C8\uB2E4. \uBAA8\uB4E0 \uAC83\uC774 \uC644\uBCBD\uD574 \uBCF4\uC785\uB2C8\uB2E4! "),e("strong",null,"\uD558\uC9C0\uB9CC \uBB38\uC81C\uAC00 \uC788\uC2B5\uB2C8\uB2E4."),t(" \uC5EC\uB7EC \uAC1C\uC758 \uBA64\uBC84 \uCE74\uB4DC\uB97C \uC218\uC815 \uBAA8\uB4DC\uB85C \uC804\uD658\uD55C \uC0C1\uD0DC\uC5D0\uC11C \uD2B9\uC815 \uCE74\uB4DC\uC758 \uCCB4\uD06C \uBC84\uD2BC\uC744 \uD074\uB9AD\uD560 \uACBD\uC6B0 \uBAA8\uB4E0 "),e("em",null,"members"),t(" \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC218\uC815 \uC911\uC778 \uB2E4\uB978 \uCE74\uB4DC \uC815\uBCF4\uAE4C\uC9C0 \uBAA8\uB450 \uC5C5\uB370\uC774\uD2B8\uAC00 \uB418\uC5B4\uBC84\uB9BD\uB2C8\uB2E4. \uD398\uC774\uC9C0\uB97C \uC0C8\uB85C\uACE0\uCE68 \uD588\uC744 \uB54C \uC800\uC7A5\uD558\uC9C0 \uC54A\uC740 \uB2E4\uB978 \uBA64\uBC84 \uCE74\uB4DC\uB294 \uAE30\uC874 \uC0C1\uD0DC\uAC00 \uC720\uC9C0\uB418\uB3C4\uB85D \uD558\uB824\uBA74 \uC880 \uB354 \uB514\uD14C\uC77C\uD55C \uCC98\uB9AC\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. ")],-1),Me=e("textarea",{readonly:""},`\r
// App.vue\r
\r
// Member \uC815\uBCF4\uB97C \uC138\uC158 \uC2A4\uD1A0\uB9AC\uC9C0\uC5D0 \uC800\uC7A5\r
const store = (mid) => {\r
  // \uB85C\uCEEC \uC138\uC158 \uC2A4\uD1A0\uB9AC\uC9C0\uC758 members \uB370\uC774\uD130\uB97C \uC784\uC2DC\uB85C \uAC00\uC838\uC634\r
  const tempMembers = $q.sessionStorage.getItem('members') || []\r
  const findMember = members.find(m => m.mid === mid)\r
  // \uC784\uC2DC\uB85C \uAC00\uC838\uC628 \uB370\uC774\uD130\uC5D0\uC11C \uD574\uB2F9 mid \uBA64\uBC84\uB97C \uAC80\uC0C9\r
  const findTempMember = tempMembers.find(m => m.mid === mid)\r
\r
  if (findMember) {\r
    findMember.editable = false\r
\r
    // \uAE30\uC874 \uB370\uC774\uD130\uC5D0 \uD604\uC7AC \uC800\uC7A5\uD558\uB824\uB294 \uBA64\uBC84\uC758 \uB370\uC774\uD130\uAC00 \uC788\uC744 \uACBD\uC6B0 \uC138\uBD80 \uC815\uBCF4\uB97C \uC5C5\uB370\uC774\uD2B8\r
    if (findTempMember) {\r
      findTempMember.name = findMember.name\r
      findTempMember.team = findMember.team\r
      findTempMember.contact = findMember.contact\r
    }\r
    // \uC5C6\uB294 \uACBD\uC6B0 \uC0C8\uB85C \uCD94\uAC00\r
    else\r
      tempMembers.unshift(findMember)\r
\r
    // \uC5C5\uB370\uC774\uD2B8\uB41C \uC0C8 \uBA64\uBC84 \uB370\uC774\uD130\uB97C \uB85C\uCEEC \uC138\uC158 \uC2A4\uD1A0\uB9AC\uC9C0\uC5D0 \uC800\uC7A5\r
    $q.sessionStorage.set('members', tempMembers)\r
  }\r
}\r
        `,-1),ye=e("p",null,"store \uBA54\uC11C\uB4DC\uB97C \uC704\uC640 \uAC19\uC774 \uC218\uC815\uD588\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uC784\uC2DC\uB85C \uB85C\uCEEC \uC138\uC158 \uC2A4\uD1A0\uB9AC\uC9C0 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC640 \uD574\uB2F9 \uBA64\uBC84\uC758 \uB370\uC774\uD130\uB97C \uCC3E\uC544 \uC5C5\uB370\uC774\uD2B8\uD558\uACE0 \uB2E4\uC2DC \uC800\uC7A5\uD558\uB3C4\uB85D \uCC98\uB9AC\uD574 \uC8FC\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uC800\uC7A5\uB418\uB294 \uB370\uC774\uD130\uC758 \uB2E4\uB978 \uBA64\uBC84 \uCE74\uB4DC \uC815\uBCF4\uC5D0 \uC601\uD5A5\uC744 \uC8FC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",-1),ke=e("b",null,"\uACB0\uACFC",-1),Se={class:"row justify-end q-pb-sm"},je={class:"row q-col-gutter-lg"},$e=e("p",{class:"q-py-lg"},null,-1),xe=e("p",null,[t("\uBB38\uC81C\uAC00 \uC0DD\uACBC\uB358 \uBD80\uBD84\uC744 \uB2E4\uC2DC \uD14C\uC2A4\uD2B8\uD574\uBD05\uC2DC\uB2E4. "),e("strong",null,"\uC774\uC81C \uAC01 \uBA64\uBC84 \uCE74\uB4DC \uC815\uBCF4\uAC00 \uB3C5\uB9BD\uC801\uC73C\uB85C \uAD00\uB9AC \uBC0F \uC800\uC7A5\uB429\uB2C8\uB2E4"),t(".")],-1),Ce=e("div",{class:"q-py-xl"},null,-1),Ie={class:"row justify-between items-cetner"},Ve={__name:"Storage",setup(Ae){const u=y(()=>$(()=>import("./Code.fe4e34ed.js"),["assets/Code.fe4e34ed.js","assets/Code.2d671ef5.css","assets/index.b6be4404.js","assets/index.e8e7ed18.css"])),M=y(()=>$(()=>import("./CStorage.aee370b1.js"),["assets/CStorage.aee370b1.js","assets/QInput.88f63f3d.js","assets/index.b6be4404.js","assets/index.e8e7ed18.css","assets/use-dark.6c95071a.js","assets/format.801e7424.js","assets/uid.42677368.js","assets/use-form.b547680f.js","assets/QCard.b8d52c6e.js"])),b=z(),p=k(b.sessionStorage.getItem("members1")||[]),h=k(b.sessionStorage.getItem("members2")||[]),C=()=>{p.unshift({mid:x(),name:"",team:"",contact:"",editable:!1})},I=()=>{h.unshift({mid:x(),name:"",team:"",contact:"",editable:!1})},A=(l,a,o)=>{const r=p.find(c=>c.mid===l);r&&(r[a]=o)},Q=(l,a,o)=>{const r=h.find(c=>c.mid===l);r&&(r[a]=o)},T=l=>{const a=p.find(o=>o.mid===l);a&&(a.editable=!1,b.sessionStorage.set("members1",p))},w=l=>{const a=b.sessionStorage.getItem("members2")||[],o=h.find(c=>c.mid===l),r=a.find(c=>c.mid===l);o&&(o.editable=!1,r?(r.name=o.name,r.team=o.team,r.contact=o.contact):a.unshift(o),b.sessionStorage.set("members2",a))};return(l,a)=>{const o=q("Title"),r=q("Link"),c=q("Move");return d(),f("div",B,[e("section",null,[s(o,{head:""},{default:i(()=>[E]),_:1}),L]),e("section",D,[s(o,{sub:""},{default:i(()=>[N]),_:1}),U,s(m(u),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:i(()=>[W]),_:1})]),e("section",O,[s(o,{sub:""},{default:i(()=>[R]),_:1}),e("p",null,[F,X,G,s(r,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"},{default:i(()=>[H]),_:1}),J,K,Y]),s(m(u),{class:"q-mb-lg",language:"javascript",convert:{javascript:"js"}},{default:i(()=>[Z]),_:1})]),e("section",ee,[s(o,{sub:""},{default:i(()=>[te]),_:1}),ne,s(m(u),{class:"q-mb-lg",language:"javascript",convert:{javascript:"vue"}},{default:i(()=>[se]),_:1}),oe,s(m(u),{class:"q-mb-lg",language:"javascript",convert:{javascript:"vue"}},{default:i(()=>[re]),_:1}),s(m(u),{class:"q-mb-lg",language:"html",convert:{html:"vue"}},{default:i(()=>[ae]),_:1}),e("p",null,[ie,ce,le,de,s(_,{dense:"",round:"",icon:"check",color:"primary",size:"sm"}),me,_e,ue,be,pe]),fe,e("div",he,[s(_,{dense:"",icon:"add",round:"",color:"positive",onClick:C})]),e("div",ge,[(d(!0),f(S,null,j(p,n=>(d(),f("div",{key:n,class:"col-6 col-md-4"},[n.editable?(d(),g(_,{key:1,unelevated:"",dense:"",round:"",size:"sm",color:"primary",icon:"check",onClick:v=>T(n.mid)},null,8,["onClick"])):(d(),g(_,{key:0,unelevated:"",dense:"",flat:"",size:"sm",color:"grey",icon:"edit",onClick:v=>n.editable=!0},null,8,["onClick"])),s(m(M),{mid:n.mid,name:n.name,team:n.team,contact:n.contact,editable:n.editable,onUpdate:A},null,8,["mid","name","team","contact","editable"])]))),128))]),ve,qe,s(m(u),{class:"q-mb-lg",language:"javascript",convert:{javascript:"vue"}},{default:i(()=>[Me]),_:1}),ye,ke,e("div",Se,[s(_,{dense:"",icon:"add",round:"",color:"positive",onClick:I})]),e("div",je,[(d(!0),f(S,null,j(h,n=>(d(),f("div",{key:n,class:"col-6 col-md-4"},[n.editable?(d(),g(_,{key:1,unelevated:"",dense:"",round:"",size:"sm",color:"primary",icon:"check",onClick:v=>w(n.mid)},null,8,["onClick"])):(d(),g(_,{key:0,unelevated:"",dense:"",flat:"",size:"sm",color:"grey",icon:"edit",onClick:v=>n.editable=!0},null,8,["onClick"])),s(m(M),{mid:n.mid,name:n.name,team:n.team,contact:n.contact,editable:n.editable,onUpdate:Q},null,8,["mid","name","team","contact","editable"])]))),128))]),$e,xe]),Ce,s(P,{class:"q-mb-lg"}),e("div",null,[e("div",Ie,[s(c,{label:"\uCE74\uB4DC \uC218\uC815\uD558\uAE30",prev:"",to:{name:"edit"}}),s(c,{label:"\uAD00\uC2EC\uC0AC\uC758 \uBD84\uB9AC",next:"",to:{name:"soc"}})])])])}}};export{Ve as default};
