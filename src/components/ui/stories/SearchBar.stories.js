import { ref } from 'vue';
import SearchBar from '../molecules/SearchBar/SearchBar.vue';

export default {
  title: 'UI/Molecules/SearchBar',
  component: SearchBar,
};

export const Playground = {
  render: () => ({
    components: { SearchBar },
    setup: () => {
      const modelValue = ref('');
      return { modelValue };
    },
    template: '<SearchBar v-model="modelValue" placeholder="Search users" />',
  }),
};
