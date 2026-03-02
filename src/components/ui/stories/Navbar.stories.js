import Navbar from '../organisms/Navbar/Navbar.vue';
import Button from '../atoms/Button/Button.vue';

export default {
  title: 'UI/Organisms/Navbar',
  component: Navbar,
};

export const Playground = {
  render: () => ({
    components: { Navbar, Button },
    setup: () => ({
      items: [
        { label: 'Home', href: '#' },
        { label: 'Docs', href: '#' },
      ],
    }),
    template: `
      <Navbar brand="Pepper UI" :items="items">
        <Button variant="ghost" size="sm">Theme</Button>
      </Navbar>
    `,
  }),
};
