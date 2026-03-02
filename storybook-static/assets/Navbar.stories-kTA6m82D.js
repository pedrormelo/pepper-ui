import{c as r,e,t as i,F as c,b as d,r as m,o as n}from"./iframe-BGT5beL9.js";import{_ as p}from"./Button-DZ51w9Wg.js";import"./preload-helper-PPVm8Dsz.js";const u={class:"border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90"},b={class:"mx-auto flex h-16 max-w-6xl items-center justify-between px-4"},f={class:"text-lg font-semibold"},h={class:"hidden items-center gap-4 md:flex"},v=["href"],_={class:"flex items-center gap-2"},s={__name:"Navbar",props:{brand:{type:String,default:"Brand"},items:{type:Array,default:()=>[]}},setup(o){return(l,g)=>(n(),r("header",u,[e("div",b,[e("div",f,i(o.brand),1),e("nav",h,[(n(!0),r(c,null,d(o.items,t=>(n(),r("a",{key:t.label,href:t.href,class:"text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"},i(t.label),9,v))),128))]),e("div",_,[m(l.$slots,"default")])])]))}};s.__docgenInfo={exportName:"default",displayName:"Navbar",description:"",tags:{},props:[{name:"brand",type:{name:"string"},defaultValue:{func:!1,value:"'Brand'"}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],slots:[{name:"default"}],sourceFiles:["D:/web/PepperUi/pepper-ui/src/components/ui/organisms/Navbar/Navbar.vue"]};const B={title:"UI/Organisms/Navbar",component:s},a={render:()=>({components:{Navbar:s,Button:p},setup:()=>({items:[{label:"Home",href:"#"},{label:"Docs",href:"#"}]}),template:`
      <Navbar brand="Pepper UI" :items="items">
        <Button variant="ghost" size="sm">Theme</Button>
      </Navbar>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Navbar,
      Button
    },
    setup: () => ({
      items: [{
        label: 'Home',
        href: '#'
      }, {
        label: 'Docs',
        href: '#'
      }]
    }),
    template: \`
      <Navbar brand="Pepper UI" :items="items">
        <Button variant="ghost" size="sm">Theme</Button>
      </Navbar>
    \`
  })
}`,...a.parameters?.docs?.source}}};const z=["Playground"];export{a as Playground,z as __namedExportsOrder,B as default};
