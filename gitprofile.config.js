// gitprofile.config.js

const config = {
  github: {
    username: 'jameskip', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'jameskip',
    // twitter: 'arif_szn',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    stackoverflow: '', // format: userid/username
    website: 'https://jameskip.com',
    phone: '',
    email: 'me@jameskip.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'TypeScript',
    'Playwright',
    'Test Automation',
    'Seleunium',
    'MySQL',
    'Git',
    'Docker',
    'Jenkins',
    'AWS',
    'React',
    'Node',
    'CircleCI',
    'JavaScript',
    'DevTools',
  ],
  experiences: [
    {
      company: 'Bolt',
      position: 'Software Development Engineer In Test',
      from: 'January 2022',
      to: 'January 2023',
      companyLink: 'https://bolt.com',
    },
    {
      company: 'ThriveHive',
      position: 'QA Engineer',
      from: 'June 2019',
      to: 'April 2020',
      companyLink: 'https://localiq.com/',
    },
    {
      company: 'YETI',
      position: 'QA Engineer',
      from: 'March 2018',
      to: 'May 2019',
      companyLink: 'https://yeti.com/',
    },
  ],
  certifications: [
    {
      name: 'Google Mobile Sites',
      year: 'May 2017',
      link: 'https://goo.gl/3m5XLB',
    },
    {
      name: 'Certified Scrum Master',
      year: 'September 2020',
      link: 'http://bcert.me/sfincsanf',
    },
  ],
  education: [
    {
      institution: 'Hack Reactor',
      degree: 'Software Engineering Immersive',
      from: '2016',
      to: '2017',
    },
    {
      institution: 'San Antonio College',
      degree: 'A.A.S. Computer Science',
      from: '2010',
      to: '2012',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Represent',
      description:
        'Built to help understand your representatives voting history and positions.',
      imageUrl:
        'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      link: 'https://github.com/jameskip/represent',
    },
    {
      title: 'Pretzel News',
      description:
        'Pretzel uses advanced algorithms to identify what web searches are trending. Based on these searches we know what people are actually interested in and not just what the news cycle dictates. Using these trends we aggregate news in an unfiltered and unbiased way to keep you better informed.',
      imageUrl:
        'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      link: 'https://github.com/jameskip/pretzel-native',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'jameskip', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with ❤️`,
};

export default config;
