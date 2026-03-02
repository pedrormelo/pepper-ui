import{c as r,e,t as i,r as d,w as c,a as p,o as m,f as u}from"./iframe-BGT5beL9.js";import{_ as f}from"./Button-DZ51w9Wg.js";import"./preload-helper-PPVm8Dsz.js";const b={class:"w-full max-w-md rounded-xl border border-zinc-200 bg-white p-5 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"},g={class:"mb-4 flex items-center justify-between"},M={class:"text-lg font-semibold"},a={__name:"Modal",props:{open:Boolean,title:{type:String,default:"Modal"}},emits:["close"],setup(o){return(s,t)=>o.open?(m(),r("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",onClick:t[1]||(t[1]=c(l=>s.$emit("close"),["self"]))},[e("div",b,[e("div",g,[e("h3",M,i(o.title),1),e("button",{type:"button",class:"rounded-md p-1 text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800",onClick:t[0]||(t[0]=l=>s.$emit("close"))}," ✕ ")]),e("div",null,[d(s.$slots,"default")])])])):p("",!0)}};a.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"open",type:{name:"boolean"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Modal'"}}],events:[{name:"close"}],slots:[{name:"default"}],sourceFiles:["D:/web/PepperUi/pepper-ui/src/components/ui/organisms/Modal/Modal.vue"]};const z={title:"UI/Organisms/Modal",component:a},n={render:()=>({components:{Modal:a,Button:f},setup:()=>({open:u(!1)}),template:`
      <div>
        <Button @click="open = true">Open Modal</Button>
        <Modal :open="open" title="Confirm action" @close="open = false">
          <p class="text-sm text-zinc-600 dark:text-zinc-300">This is a reusable modal component.</p>
        </Modal>
      </div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Modal,
      Button
    },
    setup: () => {
      const open = ref(false);
      return {
        open
      };
    },
    template: \`
      <div>
        <Button @click="open = true">Open Modal</Button>
        <Modal :open="open" title="Confirm action" @close="open = false">
          <p class="text-sm text-zinc-600 dark:text-zinc-300">This is a reusable modal component.</p>
        </Modal>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};const y=["Playground"];export{n as Playground,y as __namedExportsOrder,z as default};
