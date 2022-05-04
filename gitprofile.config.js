// gitprofile.config.js

const config = {
  github: {
    username: 'nathen418', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['laravel-ecommerce'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'nate-goldsborough',
    twitter: 'nathen418',
    facebook: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'nathen418',
    website: 'https://nathen418.com',
    phone: '',
    email: 'nathen418@playantares.com',
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'MongoDB',
    "MySQL",
    'Discord.js',
    'VMware',
    'Ubuntu',
    'Node.js',
    'Git',
    'HTML5',
  ],
  experiences: [
    {
      company: 'University of Wisconsin Milwaukee',
      position: 'Audio Visual Technician',
      from: 'November 2021',
      to: 'Present'
    },
    {
      company: 'College of DuPage',
      position: 'Health Screening',
      from: 'August 2020',
      to: 'May 2021'
    }
  ],
  education: [
    { 
      institution: 'University of Wisconsin Milwaukee',
      degree: 'Bachelor of Science in Information Science and Technology',
      from: '2020',
      to: 'Present'
  },
  { 
      institution: 'College of DuPage',
      degree: 'Pre-Engineering',
      from: '2019',
      to: '2020',
  }
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'nathen418',
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-F8K6NR9ZJ2', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

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
