import{c as n,e as s,t as l,F as c,b as m,o as i,n as d,f as u}from"./iframe-BGT5beL9.js";import"./preload-helper-PPVm8Dsz.js";const p={class:"rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"},y={class:"mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400"},b={class:"space-y-1"},v=["onClick"],r={__name:"Sidebar",props:{title:{type:String,default:"Menu"},activeKey:{type:String,default:""},items:{type:Array,default:()=>[]}},emits:["update:activeKey"],setup(e){return(o,g)=>(i(),n("aside",p,[s("h2",y,l(e.title),1),s("ul",b,[(i(!0),n(c,null,m(e.items,t=>(i(),n("li",{key:t.key},[s("button",{type:"button",class:d(["w-full rounded-lg px-3 py-2 text-left text-sm transition",e.activeKey===t.key?"bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900":"text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"]),onClick:f=>o.$emit("update:activeKey",t.key)},l(t.label),11,v)]))),128))])]))}};r.__docgenInfo={exportName:"default",displayName:"Sidebar",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Menu'"}},{name:"activeKey",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"update:activeKey"}],sourceFiles:["D:/web/PepperUi/pepper-ui/src/components/ui/organisms/Sidebar/Sidebar.vue"]};const K={title:"UI/Organisms/Sidebar",component:r},a={render:()=>({components:{Sidebar:r},setup:()=>({activeKey:u("atoms"),items:[{key:"atoms",label:"Atoms"},{key:"molecules",label:"Molecules"},{key:"organisms",label:"Organisms"}]}),template:'<Sidebar title="Navigation" v-model:activeKey="activeKey" :items="items" />'})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Sidebar
    },
    setup: () => {
      const activeKey = ref('atoms');
      const items = [{
        key: 'atoms',
        label: 'Atoms'
      }, {
        key: 'molecules',
        label: 'Molecules'
      }, {
        key: 'organisms',
        label: 'Organisms'
      }];
      return {
        activeKey,
        items
      };
    },
    template: '<Sidebar title="Navigation" v-model:activeKey="activeKey" :items="items" />'
  })
}`,...a.parameters?.docs?.source}}};const S=["Playground"];export{a as Playground,S as __namedExportsOrder,K as default};
