import{a1 as s,u,o as i,a0 as d,Q as f,aE as p}from"./index.b6be4404.js";function y(t){const e=document.createElement("textarea");e.value=t,e.contentEditable="true",e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select();const o=document.execCommand("copy");return e.remove(),o}function m(t){return navigator.clipboard!==void 0?navigator.clipboard.writeText(t):new Promise((e,o)=>{const l=y(t);l?e(!0):o(l)})}const b={__name:"CopyColor",props:{color:{type:String,default:"primary"},textColor:{type:String,default:null},label:{type:String,default:""},square:{type:Boolean,default:!1},type:{type:String,default:"rgb"}},setup(t){const e=t,{getPaletteColor:o}=p,l=s(),r=u(null),n=()=>{if(r.value){let a=getComputedStyle(r.value.$el).getPropertyValue("background-color");e.type==="hex"&&(a=o(e.color)),a&&m(a.trim()).then(()=>{l.notify({color:"grey-10",textColor:"yellow",message:a})}).catch(()=>{l.notify({color:"negative",message:"RGB \uC0C9\uC0C1 \uD074\uB9BD\uBCF4\uB4DC \uBCF5\uC0AC \uC2E4\uD328"})})}};return(c,a)=>(i(),d(f,{ref_key:"btn",ref:r,"no-caps":"",dense:"",unelevated:"",square:t.square,color:t.color,"text-color":t.textColor,label:t.label,class:"no-hover",onClick:n},null,8,["square","color","text-color","label"]))}};export{b as default};
