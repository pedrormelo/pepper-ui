import Icon from '../atoms/Icon/Icon.vue';

export default {
  title: 'UI/Atoms/Icon',
  component: Icon,
  args: {
    size: 24,
    name: 'home',
  },
  argTypes: {
    size: { control: 'number' },
    name: { control: 'text' },
  },
};

export const Playground = {
  render: (args) => ({
    components: { Icon },
    setup: () => ({ args }),
    template: '<Icon :size="args.size">{{ args.name }}</Icon>',
  }),
};
