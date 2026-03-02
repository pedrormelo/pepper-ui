import Badge from '../atoms/Badge/Badge.vue';

export default {
  title: 'UI/Atoms/Badge',
  component: Badge,
  args: {
    variant: 'neutral',
    default: 'Badge',
  },
  argTypes: {
    variant: { control: 'select', options: ['neutral', 'success', 'warning', 'danger'] },
    default: { control: 'text' },
  },
};

export const Playground = {
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: '<Badge :variant="args.variant">{{ args.default }}</Badge>',
  }),
};
