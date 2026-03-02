import{j as s,o as l,c as p,r as i,e as c,t as m,n as u,d}from"./iframe-BGT5beL9.js";import{_ as f}from"./Button-DZ51w9Wg.js";import"./preload-helper-PPVm8Dsz.js";const g={class:"group relative inline-flex"},n=s({__name:"Tooltip",props:{text:{},placement:{default:"top"}},setup(t){const o=t,a=d(()=>o.placement==="right"?"left-full top-1/2 ml-2 -translate-y-1/2":o.placement==="bottom"?"left-1/2 top-full mt-2 -translate-x-1/2":o.placement==="left"?"right-full top-1/2 mr-2 -translate-y-1/2":"bottom-full left-1/2 mb-2 -translate-x-1/2");return(r,x)=>(l(),p("div",g,[i(r.$slots,"default"),c("span",{class:u(["pointer-events-none absolute z-20 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-xs text-white opacity-0 shadow transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100 dark:bg-zinc-100 dark:text-zinc-900",a.value]),role:"tooltip"},m(t.text),3)]))}});n.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"text",required:!0,type:{name:"string"}},{name:"placement",required:!1,type:{name:"TooltipPlacement"},defaultValue:{func:!1,value:"'top'"}}],slots:[{name:"default"}],sourceFiles:["D:/web/PepperUi/pepper-ui/src/components/ui/atoms/Tooltip/Tooltip.vue"]};const _={title:"UI/Atoms/Tooltip",component:n,args:{text:"Helpful hint",placement:"top"},argTypes:{text:{control:"text"},placement:{control:"select",options:["top","right","bottom","left"]}}},e={render:t=>({components:{Tooltip:n,Button:f},setup:()=>({args:t}),template:`
      <Tooltip v-bind="args">
        <Button variant="outline" size="sm">Hover me</Button>
      </Tooltip>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Tooltip,
      Button
    },
    setup: () => ({
      args
    }),
    template: \`
      <Tooltip v-bind="args">
        <Button variant="outline" size="sm">Hover me</Button>
      </Tooltip>
    \`
  })
}`,...e.parameters?.docs?.source}}};const h=["Playground"];export{e as Playground,h as __namedExportsOrder,_ as default};
