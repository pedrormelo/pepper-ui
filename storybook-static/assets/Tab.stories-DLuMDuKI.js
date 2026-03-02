import{c as n,F as o,b as i,o as l,n as u,t as c,f as m}from"./iframe-BGT5beL9.js";import"./preload-helper-PPVm8Dsz.js";const d={class:"inline-flex rounded-lg border border-zinc-300 bg-zinc-100 p-1 dark:border-zinc-700 dark:bg-zinc-900"},p=["onClick"],s={__name:"Tab",props:{modelValue:{type:String,default:""},items:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(a){return(r,v)=>(l(),n("div",d,[(l(!0),n(o,null,i(a.items,e=>(l(),n("button",{key:e.value,class:u(["rounded-md px-3 py-1.5 text-sm font-medium transition",[a.modelValue===e.value?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"]]),type:"button",onClick:b=>r.$emit("update:modelValue",e.value)},c(e.label),11,p))),128))]))}};s.__docgenInfo={exportName:"default",displayName:"Tab",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"update:modelValue"}],sourceFiles:["D:/web/PepperUi/pepper-ui/src/components/ui/molecules/Tab/Tab.vue"]};const y={title:"UI/Molecules/Tab",component:s},t={render:()=>({components:{Tab:s},setup:()=>({value:m("overview"),items:[{label:"Overview",value:"overview"},{label:"Analytics",value:"analytics"},{label:"Settings",value:"settings"}]}),template:'<Tab v-model="value" :items="items" />'})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tab
    },
    setup: () => {
      const value = ref('overview');
      const items = [{
        label: 'Overview',
        value: 'overview'
      }, {
        label: 'Analytics',
        value: 'analytics'
      }, {
        label: 'Settings',
        value: 'settings'
      }];
      return {
        value,
        items
      };
    },
    template: '<Tab v-model="value" :items="items" />'
  })
}`,...t.parameters?.docs?.source}}};const x=["Playground"];export{t as Playground,x as __namedExportsOrder,y as default};
