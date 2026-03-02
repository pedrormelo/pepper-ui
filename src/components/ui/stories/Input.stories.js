import Input from '../atoms/Input/Input.vue';

export default {
  title: 'UI/Atoms/Input',
  component: Input,
  args: {
    label: 'Email',
    type: 'text',
    placeholder: 'Type here...',
    modelValue: '',
    size: 'md',
    variant: 'default',
    color: 'primary',
    disabled: false,
    readonly: false,
    required: false,
    textarea: false,
    removable: false,
    helperText: 'Use a valid value',
    errorMessage: '',
  },
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'currency'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'bordered', 'ghost'] },
    color: { control: 'select', options: ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'] },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    modelValue: { control: 'text' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    required: { control: 'boolean' },
    textarea: { control: 'boolean' },
    removable: { control: 'boolean' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
  },
};

export const Playground = {};
