import Button from '../atoms/Button/Button.vue';
import Icon from '../atoms/Icon/Icon.vue';

export default {
  title: 'UI/Atoms/Button',
  component: Button,
  args: {
    variant: 'primary',
    size: 'md',
    rounded: false,
    disabled: false,
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    rounded: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Playground = {
  render: (args) => ({
    components: { Button, Icon },
    setup: () => ({ args }),
    template: '<Button v-bind="args"><Icon size="18">bolt</Icon>Button</Button>',
  }),
};
