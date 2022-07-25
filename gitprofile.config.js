// gitprofile.config.js

const config = {
  github: {
    username: 'thirumald', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'thirumal-dharmalingam',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'thirumald',
    dev: 'thirumald',
    website: 'https://thirumald.github.io',
    phone: '+971 50 4422327',
    email: 'd.thirumal@gmail.com',
  },
  skills: [
    'ASP.NET',
    'C#',
    'VB.NET',
    'JavaScript',
    'angular',
    'Node.js',
    'Python',
    'SQL',
    'Postgress',
    'MongoDB',
    'CSS',
    'Antd',
    'Bootstrap',
    'TFS',
    'Git',
    'Docker',
    'Azure',
    'Aws',
  ],
  experiences: [
    {
      company: 'Global Aerospace Logistics LLC',
      position: 'Software Specialist',
      from: 'JUL 2011',
      to: 'Present',
    },
    {
      company: 'Hadeed Emirates Cont. Co.',
      position: 'Software Engineer',
      from: 'May 2010',
      to: 'May 2011',
    },
    {
      company: 'PetroGas Piping',
      position: 'Software Engineer',
      from: 'Apr 2008',
      to: 'Apr 2010',
    },
    {
      company: 'Unilever',
      position: 'Software Engineer',
      from: 'Oct 2006',
      to: 'Mar 2008',
    },
  ],
  education: [
    {
      institution: 'Anna University-Chennai,India',
      degree: 'Master Of Computer Applications',
      from: '2003',
      to: '2006',
    },
    {
      institution: 'Periyar University-Salem,India',
      degree: 'Bachelor of Computer Applications',
      from: '2000',
      to: '2003',
    },
    
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'thirumald',
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
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
