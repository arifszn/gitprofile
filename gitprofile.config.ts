// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Noraxx1', // Your GitHub org/user name. (This is the only required config)
  },

  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: true,
          projects: ['Noraxx1'],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: '',
      projects: [
      ],
    },
  },
  seo: {
    title: 'Norax',
    description: '',
    imageURL: '',
  },
  social: {
    website: 'https://forum.nim-lang.org/profile/Noraxx',
    discord: 'Norax.2',
  },

  skills: [
    'Nim',
    'Python',
    'Rust',
  ],

  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',


    disableSwitch: false,


    respectPrefersColorScheme: false,


    displayAvatarRing: true,


    themes: [
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
