import config from './gitprofile.config';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    themes: [
      ...config.themeConfig.themes,
      { procyon: config.themeConfig.customTheme },
    ],
  },
};
