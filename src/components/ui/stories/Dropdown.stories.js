import Dropdown from '../molecules/Dropdown/Dropdown.vue';

export default {
  title: 'UI/Molecules/Dropdown',
  component: Dropdown,
  args: {
    modelValue: '',
    placeholder: 'Choose role',
    options: [
      { label: 'Admin', value: 'admin' },
      { label: 'Editor', value: 'editor' },
      { label: 'Viewer', value: 'viewer' },
    ],
  },
};

export const Playground = {};
