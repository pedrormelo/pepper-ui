import { ref } from 'vue';
import Tab from '../molecules/Tab/Tab.vue';

export default {
  title: 'UI/Molecules/Tab',
  component: Tab,
};

export const Playground = {
  render: () => ({
    components: { Tab },
    setup: () => {
      const value = ref('overview');
      const items = [
        { label: 'Overview', value: 'overview' },
        { label: 'Analytics', value: 'analytics' },
        { label: 'Settings', value: 'settings' },
      ];

      return { value, items };
    },
    template: '<Tab v-model="value" :items="items" />',
  }),
};
