const config = {
  github: {
    username: 'Peter-The-Great', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://paniek.vercel.app',
    phone: '',
    email: 'peter-the-great.io@protonmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'composer',
    'JavaScript',
    'Python',
    'Numpy',
    'Java',
    'MySQL',
    'Git',
    'CSS',
    'Tailwind'
  ],
  experiences: [
    {
      company: 'MIMM BV',
      position: 'Junior Developer',
      from: 'January 2022',
      to: 'April 2022',
      companyLink: 'https://www.pindah-magazine.nl/over-ons-2/',
    },
    {
      company: 'PixelDeluxe',
      position: 'Position',
      from: 'September 2021',
      to: 'December 2021',
      companyLink: 'https://www.pixeldeluxe.nl/',
    },
  ],
  certifications: [
    {
      name: 'Certificate in Advanced English C1',
      body: 'Cambridge University',
      year: 'September 2021',
      link: 'B4833075'
    },
  ], 
  education: [
    {
      institution: 'The Hague University of Applied Science',
      degree: 'Information Technology',
      from: '2022',
      to: '2026',
    },
    {
      institution: 'Grafisch Lyceum Rotterdam (GLR)',
      degree: 'MBO Application and MediaTechnology Developer',
      from: '2019',
      to: '2022',
    },
    {
      institution: 'College St Paul',
      degree: 'VMBO-TL (High School Degree)',
      from: '2015',
      to: '2019',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
//   externalProjects: [
//     {
//       title: 'Project Name',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
//       imageUrl: 'https://via.placeholder.com/250x250',
//       link: 'https://example.com',
//     },
//     {
//       title: 'Project Name',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
//       imageUrl: 'https://via.placeholder.com/250x250',
//       link: 'https://example.com',
//     },
//   ],
  // Display blog posts from your medium or dev account. (Optional)
//   blog: {
//     source: 'substack', // medium | dev
//     username: 'paniek', // to hide blog section, keep it empty
//     limit: 2, // How many posts to display. Max is 10.
//   },
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
