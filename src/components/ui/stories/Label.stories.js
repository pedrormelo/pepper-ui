import Label from '../atoms/Label/Label.vue';

export default {
  title: 'UI/Atoms/Label',
  component: Label,
  args: {
    required: false,
    text: 'Email',
  },
  argTypes: {
    required: { control: 'boolean' },
    text: { control: 'text' },
  },
};

export const Playground = {
  render: (args) => ({
    components: { Label },
    setup: () => ({ args }),
    template: '<Label :required="args.required">{{ args.text }}</Label>',
  }),
};
