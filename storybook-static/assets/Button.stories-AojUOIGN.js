import{_ as t}from"./Button-DZ51w9Wg.js";import{_ as e}from"./Icon-BC5XFx5o.js";import"./iframe-BGT5beL9.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"UI/Atoms/Button",component:t,args:{variant:"primary",size:"md",rounded:!1,disabled:!1},argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost"]},size:{control:"select",options:["sm","md","lg"]},rounded:{control:"boolean"},disabled:{control:"boolean"}}},o={render:n=>({components:{Button:t,Icon:e},setup:()=>({args:n}),template:'<Button v-bind="args"><Icon size="18">bolt</Icon>Button</Button>'})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      Icon
    },
    setup: () => ({
      args
    }),
    template: '<Button v-bind="args"><Icon size="18">bolt</Icon>Button</Button>'
  })
}`,...o.parameters?.docs?.source}}};const m=["Playground"];export{o as Playground,m as __namedExportsOrder,i as default};
