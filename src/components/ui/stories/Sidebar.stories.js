import { ref } from 'vue';
import Sidebar from '../organisms/Sidebar/Sidebar.vue';

export default {
  title: 'UI/Organisms/Sidebar',
  component: Sidebar,
};

export const Playground = {
  render: () => ({
    components: { Sidebar },
    setup: () => {
      const activeKey = ref('atoms');
      const items = [
        { key: 'atoms', label: 'Atoms' },
        { key: 'molecules', label: 'Molecules' },
        { key: 'organisms', label: 'Organisms' },
      ];

      return { activeKey, items };
    },
    template: '<Sidebar title="Navigation" v-model:activeKey="activeKey" :items="items" />',
  }),
};
