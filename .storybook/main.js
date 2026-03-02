export default {
  stories: ['../src/components/ui/stories/**/*.stories.@(js|ts)'],
  addons: ['@storybook/addon-a11y'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.build = {
      ...(config.build ?? {}),
      chunkSizeWarningLimit: 1200,
    };

    return config;
  },
};
