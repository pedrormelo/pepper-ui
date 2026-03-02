import{c as s,g as n,h as m,o as u,i as c,f as d}from"./iframe-BGT5beL9.js";import{_ as p}from"./Button-DZ51w9Wg.js";import{_ as i}from"./Input-CVYLMwzt.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-BC5XFx5o.js";const h={class:"flex items-center gap-2"},l={__name:"SearchBar",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:"Search"}},emits:["update:modelValue","search"],setup(a){return(o,e)=>(u(),s("div",h,[n(i,{type:"search",placeholder:a.placeholder,"model-value":a.modelValue,"onUpdate:modelValue":e[0]||(e[0]=t=>o.$emit("update:modelValue",t))},null,8,["placeholder","model-value"]),n(p,{type:"button",variant:"primary",onClick:e[1]||(e[1]=t=>o.$emit("search",a.modelValue))},{default:m(()=>[...e[2]||(e[2]=[c(" Search ",-1)])]),_:1})]))}};l.__docgenInfo={exportName:"default",displayName:"SearchBar",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'Search'"}}],events:[{name:"update:modelValue"},{name:"search"}],sourceFiles:["D:/web/PepperUi/pepper-ui/src/components/ui/molecules/SearchBar/SearchBar.vue"]};const v={title:"UI/Molecules/SearchBar",component:l},r={render:()=>({components:{SearchBar:l},setup:()=>({modelValue:d("")}),template:'<SearchBar v-model="modelValue" placeholder="Search users" />'})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SearchBar
    },
    setup: () => {
      const modelValue = ref('');
      return {
        modelValue
      };
    },
    template: '<SearchBar v-model="modelValue" placeholder="Search users" />'
  })
}`,...r.parameters?.docs?.source}}};const y=["Playground"];export{r as Playground,y as __namedExportsOrder,v as default};
