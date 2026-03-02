import Tooltip from '../atoms/Tooltip/Tooltip.vue';
import Button from '../atoms/Button/Button.vue';

export default {
  title: 'UI/Atoms/Tooltip',
  component: Tooltip,
  args: {
    text: 'Helpful hint',
    placement: 'top',
  },
  argTypes: {
    text: { control: 'text' },
    placement: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
  },
};

export const Playground = {
  render: (args) => ({
    components: { Tooltip, Button },
    setup: () => ({ args }),
    template: `
      <Tooltip v-bind="args">
        <Button variant="outline" size="sm">Hover me</Button>
      </Tooltip>
    `,
  }),
};
