import{c as n,r as m,w as s,o as a}from"./iframe-BGT5beL9.js";import{_ as i}from"./Label-CfH67lOx.js";import{_ as p}from"./Input-CVYLMwzt.js";import{_ as l}from"./Button-DZ51w9Wg.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-BC5XFx5o.js";const o={__name:"Form",emits:["submit"],setup(u){return(r,t)=>(a(),n("form",{class:"space-y-4 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900",onSubmit:t[0]||(t[0]=s(c=>r.$emit("submit"),["prevent"]))},[m(r.$slots,"default")],32))}};o.__docgenInfo={exportName:"default",displayName:"Form",description:"",tags:{},events:[{name:"submit"}],slots:[{name:"default"}],sourceFiles:["D:/web/PepperUi/pepper-ui/src/components/ui/molecules/Form/Form.vue"]};const v={title:"UI/Molecules/Form",component:o},e={render:()=>({components:{Form:o,Label:i,Input:p,Button:l},template:`
      <Form>
        <div class="space-y-2">
          <Label required>Email</Label>
          <Input type="email" placeholder="you@example.com" />
        </div>
        <Button>Submit</Button>
      </Form>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Form,
      Label,
      Input,
      Button
    },
    template: \`
      <Form>
        <div class="space-y-2">
          <Label required>Email</Label>
          <Input type="email" placeholder="you@example.com" />
        </div>
        <Button>Submit</Button>
      </Form>
    \`
  })
}`,...e.parameters?.docs?.source}}};const B=["Playground"];export{e as Playground,B as __namedExportsOrder,v as default};
