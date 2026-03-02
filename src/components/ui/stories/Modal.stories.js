import { ref } from 'vue';
import Modal from '../organisms/Modal/Modal.vue';
import Button from '../atoms/Button/Button.vue';

export default {
  title: 'UI/Organisms/Modal',
  component: Modal,
};

export const Playground = {
  render: () => ({
    components: { Modal, Button },
    setup: () => {
      const open = ref(false);
      return { open };
    },
    template: `
      <div>
        <Button @click="open = true">Open Modal</Button>
        <Modal :open="open" title="Confirm action" @close="open = false">
          <p class="text-sm text-zinc-600 dark:text-zinc-300">This is a reusable modal component.</p>
        </Modal>
      </div>
    `,
  }),
};
