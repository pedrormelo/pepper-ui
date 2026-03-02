import { ref } from 'vue';
import Selection from '../atoms/Selection/Selection.vue';

export default {
  title: 'UI/Atoms/Selection',
  component: Selection,
  args: {
    variant: 'checkbox',
    size: 'md',
    disabled: false,
    label: 'Accept terms',
  },
  argTypes: {
    variant: { control: 'select', options: ['checkbox', 'radio', 'toggle'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export const BooleanModel = {
  render: (args) => ({
    components: { Selection },
    setup: () => {
      const modelValue = ref(false);
      return { args, modelValue };
    },
    template: '<Selection v-bind="args" v-model="modelValue" />',
  }),
};

export const RadioGroup = {
  render: () => ({
    components: { Selection },
    setup: () => {
      const selected = ref('b');
      return { selected };
    },
    template: `
      <div class="space-y-2">
        <Selection v-model="selected" variant="radio" name="example" value="a" label="Option A" />
        <Selection v-model="selected" variant="radio" name="example" value="b" label="Option B" />
      </div>
    `,
  }),
};

export const Toggle = {
  args: {
    variant: 'toggle',
    label: 'Enable notifications',
  },
  render: (args) => ({
    components: { Selection },
    setup: () => {
      const modelValue = ref(true);
      return { args, modelValue };
    },
    template: '<Selection v-bind="args" v-model="modelValue" />',
  }),
};
