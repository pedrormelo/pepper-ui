import{c as s,r as d,n as o,o as l}from"./iframe-BGT5beL9.js";import"./preload-helper-PPVm8Dsz.js";const a={__name:"Badge",props:{variant:{type:String,default:"neutral"}},setup(r){const t={neutral:"border-zinc-300 bg-zinc-100 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100",success:"border-emerald-300 bg-emerald-100 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200",warning:"border-amber-300 bg-amber-100 text-amber-800 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-200",danger:"border-rose-300 bg-rose-100 text-rose-800 dark:border-rose-700 dark:bg-rose-900/30 dark:text-rose-200"};return(n,c)=>(l(),s("span",{class:o(["inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",t[r.variant]])},[d(n.$slots,"default")],2))}};a.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},props:[{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'neutral'"}}],slots:[{name:"default"}],sourceFiles:["D:/web/PepperUi/pepper-ui/src/components/ui/atoms/Badge/Badge.vue"]};const m={title:"UI/Atoms/Badge",component:a,args:{variant:"neutral",default:"Badge"},argTypes:{variant:{control:"select",options:["neutral","success","warning","danger"]},default:{control:"text"}}},e={render:r=>({components:{Badge:a},setup:()=>({args:r}),template:'<Badge :variant="args.variant">{{ args.default }}</Badge>'})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge
    },
    setup: () => ({
      args
    }),
    template: '<Badge :variant="args.variant">{{ args.default }}</Badge>'
  })
}`,...e.parameters?.docs?.source}}};const p=["Playground"];export{e as Playground,p as __namedExportsOrder,m as default};
