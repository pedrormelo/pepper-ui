import '../index.css';

export const globalTypes = {
  theme: {
    name: 'Theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
      showName: true,
    },
  },
};

export const decorators = [
  (story, context) => {
    document.documentElement.classList.toggle('dark', context.globals.theme === 'dark');

    return {
      components: { story },
      template: '<div class="min-h-screen bg-white p-6 dark:bg-zinc-950"><story /></div>',
    };
  },
];
