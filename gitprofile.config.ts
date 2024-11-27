// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'JAC874', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [
            'JAC874/gitprofile',
            'JAC874/clone-example',
            'JAC874/new-repo',
            'JAC874/news-explorer-backend',
          ], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['JAC874/gitprofile', 'JAC874/news-explorer-frontend'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'News Explorer App',
          description:
            'The News Explorer is a modern web application designed for news enthusiasts who want to explore trending topics, save relevant articles, and revisit them at their leisure. Users can: Search for news articles by entering a topic, view a curated list of articles from the past week, save articles for later reading, and explore all their saved articles on a dedicated page. This project focuses on responsive design, clean UI, and efficient handling of dynamic data.',
          imageUrl:
            'https://previews.dropbox.com/p/thumb/ACc5K9dV4enFo_IhZpWT5bHRsn3NaIkJHnkhhTPrySy8Nruba5dkV_OG3dMFvHTFdlUkqyP_nzm3P1l_Q6Vyz7HzCODy1Ad6V82UxAUp2xaaAcPkZe3nV2OhoFGmzWOmr4O61zTNnoFKJLjF8R6kSsP7ib35N_R6cpVWybe06TBrUSaWu9KiJj-LpMozZ4NaF4-8Zn2t6HXKY1-THkKVrtGL0mVRQ1wlCwOvxgwpH21rbDdpkOjnjzaiNAUxfYGQCBxaaeVLSucKYEqdSh3hLNZ7kdH7YbQsCkQ2Vz6nfnkk9NIX6cmJ6vMq-enfiHr5Nr_aPMCsNQZhYXcALENSndsD/p.png?is_prewarmed=true',
          link: 'https://jac874.github.io/news-explorer-frontend/',
        },
        {
          title: 'What to Wear',
          description:
            'This project implements modern back-end concepts to create a robust server for HTTP requests and routing. It includes secure user authentication and authorization for protected routes and session management. Comprehensive error handling is achieved with custom error classes and global handlers for synchronous and asynchronous operations. Middleware enhances code organization, while environment variables and configuration files ensure scalability and security across environments.',
          imageUrl:
            'https://previews.dropbox.com/p/thumb/ACff5sKE8Wg6j_rtPxr-lVRAAVmMMa2eMZyJDTT-xykIOmezdUvD7ULUd7glmBc-Lzya_2qvc2TsxiP9nj75oCjDDacdzMUaSb08wVmR6YTGzYVb-6XqCXdsATZj024LrNZU1fxmUzegDQAjaAX3NCxzQBaqUEoLRJFjD5prewEmVApMUkn0TfUI83CBPNpm-zQdV2XO7stjCcZf7FwS7Ej1a_Gm1vSAQSfy9DRYU6fTa_rLg65WHpqgKqhChOndtTRiSf_Vk5ledePSDRM19nMmw0Xl1U4D2X8TKMnKKow8FoxSahVlR1xHlt_823-x0g-t_9NMwW03pi3F64gRzzgY/p.png?is_prewarmed=true',
          link: 'https://www.wtwr.pixelfucker.com/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Jordon Cunningham',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'jordoncunningham',
    // twitter: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // researchGate: '',
    facebook: 'jordon.cunningham',
    instagram: 'jordoncunningham',
    // reddit: '',
    // threads: '',
    // youtube: '', // example: 'pewdiepie'
    // udemy: '',
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: '',
    // website: 'https://www.arifszn.com',
    // phone: '',
    email: 'jordon.cunningham@me.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    // 'PHP',
    // 'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    // 'Nest.js',
    // 'MySQL',
    // 'PostgreSQL',
    'Git',
    // 'Docker',
    // 'PHPUnit',
    'CSS',
    // 'Antd',
    // 'Tailwind',
  ],
  experiences: [
    {
      company: 'TripleTen',
      position: 'Full Stack Software Engineer | Student',
      from: 'August 2023',
      to: 'November 2024',
      companyLink: 'https://tripleten.com/',
    },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'Penn State University',
      degree: 'MFA - Music Direction',
      from: '2017',
      to: '2020',
    },
    {
      institution: 'Texas State University',
      degree: 'BM - Piano Performance',
      from: '2008',
      to: '2012',
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
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

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
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
