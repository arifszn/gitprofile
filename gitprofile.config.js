// gitprofile.config.js

const config = {
  github: {
    username: 'arifszn', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'ariful-alam',
    twitter: 'arif_szn',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'arifszn',
    dev: 'arifszn',
    website: 'https://arifszn.github.io',
    phone: '',
    email: 'arifulalamszn@gmail.com',
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
    'Bootstrap',
  ],
  experiences: [
    {
      company: 'Monstarlab Bangladesh',
      position: 'Backend Engineer II',
      from: 'September 2021',
      to: 'Present',
    },
    {
      company: 'My Offer 360 Degree',
      position: 'Web Application Developer',
      from: 'July 2019',
      to: 'August 2021',
    },
  ],
  education: [
    {
      institution: 'American International University-Bangladesh',
      degree: 'Bachelor of Science',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Cantonment College, Jessore',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2012',
      to: '2014',
    },
    {
      institution: 'Chowgacha Shahadat Pilot High School',
      degree: 'Secondary School Certificate (SSC)',
      from: '2007',
      to: '2012',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn',
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-WLLB5E14M6', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '2617601', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
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
      'procyon',
    ],

    // Custom theme
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
};

export default config;
