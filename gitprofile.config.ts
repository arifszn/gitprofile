// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jameskip', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [
            'jameskip',
            'qa-interview-jameskip',
            'material-ui-front-end-starter-pack',
          ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
        },
      },
      // manual: {
      //   // Properties for manually specifying projects
      //   projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      // },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Represent',
          description:
            "A front end to ProPublica's Congress API. Built to help understand your representatives voting history and positions.",
          imageUrl:
            'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
          link: 'https://github.com/jameskip/represent',
        },
        {
          title: 'Pretzel News',
          description:
            'Pretzel uses algorithms to track trending web searches, allowing it to provide unbiased and unfiltered news based on what people are truly interested in, rather than just following the news cycle.',
          imageUrl:
            'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
          link: 'https://github.com/jameskip/pretzel-native',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of James Kip',
    description: 'Software Engineer | Open Source Contributor',
    imageURL: 'https://avatars.githubusercontent.com/u/16872140?v=4',
  },
  social: {
    linkedin: 'jameskip',
    // x: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // researchGate: '',
    // facebook: '',
    // instagram: '',
    // reddit: '',
    // threads: '',
    // youtube: '', // example: 'pewdiepie'
    // udemy: '',
    // dribbble: '',
    // behance: '',
    medium: 'jameskip',
    // dev: '',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: '',
    website: 'https://www.jmekip.com',
    phone: '',
    email: 'jameskip@me.com',
  },
  // resume: {
  //   fileUrl:
  //     'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  // },
  skills: [
    'TypeScript',
    'Playwright',
    'Test Automation',
    'Selenium',
    'MySQL',
    'Git',
    'Docker',
    'Jenkins',
    'AWS',
    'React',
    'Node',
    'BrowserStack',
    'Cypress',
    'CircleCI',
    'JavaScript',
    'DevTools',
  ],
  music: {
    url: 'https://open.spotify.com/playlist/6GiH4L7Cvqfwfl7qfaHjmx?si=ed9d7e7e67794ec1',
  },
  experiences: [
    {
      company: 'Vetspire',
      position: 'Software Development Engineer In Test',
      from: 'March 2024',
      to: 'Present',
      companyLink: 'https://vetspire.com',
    },
    {
      company: 'Bolt',
      position: 'Software Development Engineer In Test',
      from: 'October 2021',
      to: 'April 2023',
      companyLink: 'https://bolt.com',
    },
    {
      company: 'ThriveHive',
      position: 'QA Engineer',
      from: 'June 2019',
      to: 'December 2020',
      companyLink: 'https://localiq.com/',
    },
    {
      company: 'YETI',
      position: 'QA Engineer',
      from: 'July 2017',
      to: 'May 2019',
      companyLink: 'https://yeti.com/',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'jameskip', // to hide blog section, keep it empty
    limit: 8, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-HCHM0NX2TM', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'sunset',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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
  footer: `Made in Austin, Texas. 🤠`,

  enablePWA: true,
};

export default CONFIG;
