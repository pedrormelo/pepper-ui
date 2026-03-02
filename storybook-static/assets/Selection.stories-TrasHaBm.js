import{j as x,c as d,F as z,e as v,n as c,r as _,a as w,d as y,o as u,i as T,t as B,f as h}from"./iframe-BGT5beL9.js";import"./preload-helper-PPVm8Dsz.js";const A=["id","name","disabled","checked"],q=["id","type","name","disabled","checked","value"],C={key:2,class:"text-sm text-zinc-700 dark:text-zinc-300"},M="border-zinc-300 text-blue-600 transition focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-blue-400",r=x({__name:"Selection",props:{id:{},name:{},modelValue:{type:[Boolean,String,Number,Array]},value:{default:""},variant:{default:"checkbox"},size:{default:"md"},disabled:{type:Boolean,default:!1},label:{default:""}},emits:["update:modelValue","change"],setup(a,{emit:l}){const n=l,e=a,f=y(()=>e.size==="sm"?{input:"h-3.5 w-3.5",toggleTrack:"h-5 w-9",toggleThumb:"h-4 w-4"}:e.size==="lg"?{input:"h-5 w-5",toggleTrack:"h-7 w-12",toggleThumb:"h-6 w-6"}:{input:"h-4 w-4",toggleTrack:"h-6 w-11",toggleThumb:"h-5 w-5"}),s=y(()=>e.variant==="checkbox"||e.variant==="toggle"?Array.isArray(e.modelValue)?e.modelValue.includes(e.value):typeof e.modelValue=="boolean"?e.modelValue:!!e.modelValue:e.modelValue===e.value),V=i=>{const t=i.target;if(e.variant==="checkbox"||e.variant==="toggle"){if(Array.isArray(e.modelValue)){const o=[...e.modelValue],b=o.findIndex(k=>k===e.value);t.checked&&b===-1&&o.push(e.value),!t.checked&&b!==-1&&o.splice(b,1),n("update:modelValue",o),n("change",o);return}const S=t.checked;n("update:modelValue",S),n("change",S);return}e.variant==="radio"&&t.checked&&(n("update:modelValue",e.value),n("change",e.value))};return(i,t)=>(u(),d("label",{class:c(["inline-flex items-center gap-2",e.disabled?"cursor-not-allowed opacity-60":"cursor-pointer"])},[e.variant==="toggle"?(u(),d(z,{key:0},[v("input",{id:e.id,type:"checkbox",class:"peer sr-only",name:e.name,disabled:e.disabled,checked:s.value,onChange:V},null,40,A),v("span",{class:c(["relative rounded-full bg-zinc-300 transition-colors duration-200 dark:bg-zinc-700",f.value.toggleTrack,s.value?"bg-blue-600 dark:bg-blue-500":""])},[v("span",{class:c(["absolute top-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-200",f.value.toggleThumb,s.value?"translate-x-5":"translate-x-0.5"])},null,2)],2)],64)):(u(),d("input",{key:1,id:e.id,type:e.variant,class:c([M,f.value.input]),name:e.name,disabled:e.disabled,checked:s.value,value:e.value,onChange:V},null,42,q)),i.$slots.default||e.label?(u(),d("span",C,[_(i.$slots,"default",{},()=>[T(B(e.label),1)])])):w("",!0)],2))}});r.__docgenInfo={exportName:"default",displayName:"Selection",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"}},{name:"modelValue",required:!1,type:{name:"SelectionModel"}},{name:"value",required:!1,type:{name:"SelectionValue"},defaultValue:{func:!1,value:"''"}},{name:"variant",required:!1,type:{name:"SelectionVariant"},defaultValue:{func:!1,value:"'checkbox'"}},{name:"size",required:!1,type:{name:"SelectionSize"},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue",type:{names:["SelectionModel"]}},{name:"change",type:{names:["SelectionModel"]}}],slots:[{name:"default"}],sourceFiles:["D:/web/PepperUi/pepper-ui/src/components/ui/atoms/Selection/Selection.vue"]};const E={title:"UI/Atoms/Selection",component:r,args:{variant:"checkbox",size:"md",disabled:!1,label:"Accept terms"},argTypes:{variant:{control:"select",options:["checkbox","radio","toggle"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},label:{control:"text"}}},m={render:a=>({components:{Selection:r},setup:()=>{const l=h(!1);return{args:a,modelValue:l}},template:'<Selection v-bind="args" v-model="modelValue" />'})},p={render:()=>({components:{Selection:r},setup:()=>({selected:h("b")}),template:`
      <div class="space-y-2">
        <Selection v-model="selected" variant="radio" name="example" value="a" label="Option A" />
        <Selection v-model="selected" variant="radio" name="example" value="b" label="Option B" />
      </div>
    `})},g={args:{variant:"toggle",label:"Enable notifications"},render:a=>({components:{Selection:r},setup:()=>{const l=h(!0);return{args:a,modelValue:l}},template:'<Selection v-bind="args" v-model="modelValue" />'})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Selection
    },
    setup: () => {
      const modelValue = ref(false);
      return {
        args,
        modelValue
      };
    },
    template: '<Selection v-bind="args" v-model="modelValue" />'
  })
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Selection
    },
    setup: () => {
      const selected = ref('b');
      return {
        selected
      };
    },
    template: \`
      <div class="space-y-2">
        <Selection v-model="selected" variant="radio" name="example" value="a" label="Option A" />
        <Selection v-model="selected" variant="radio" name="example" value="b" label="Option B" />
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'toggle',
    label: 'Enable notifications'
  },
  render: args => ({
    components: {
      Selection
    },
    setup: () => {
      const modelValue = ref(true);
      return {
        args,
        modelValue
      };
    },
    template: '<Selection v-bind="args" v-model="modelValue" />'
  })
}`,...g.parameters?.docs?.source}}};const I=["BooleanModel","RadioGroup","Toggle"];export{m as BooleanModel,p as RadioGroup,g as Toggle,I as __namedExportsOrder,E as default};
