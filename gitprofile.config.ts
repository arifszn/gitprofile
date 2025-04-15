// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'joel-carter',
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [
            'joel-carter/ord-joel', 
            'joel-carter/State_Of_The_Nation_Data',
            'joel-carter/portfolio'],
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio Joel Carter',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/joel-carter1/',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'joel.carter01@outlook.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Vue.js',
    'C#',
    'Java',
    'Django'
    'MySQL',
    'Swift',
    'Git',
    'Docker',
    'Test Driven Development',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'One Utility Bill',
      position: 'Graduate Software Engineer',
      from: 'February 2025',
      to: 'Present',
      companyLink: 'https://oneutilitybill.co',
    },
    {
      company: 'Outlier AI',
      position: 'AI Model Trainer (Software) - Contractor',
      from: 'December 2024',
      to: 'Present',
      companyLink: 'https://outlier.ai',
    },
    {
      company: 'Enigma Interactive',
      position: 'Software Developer (1 Year Placement)',
      from: 'July 2021',
      to: 'July 2022',
      companyLink: 'https://www.enigma-interactive.co.uk/intro',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'Newcastle University ',
      degree: 'Computer Science with Industrial Placement - Grade: 1st',
      from: '2019',
      to: '2023',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {},
  googleAnalytics: {
    id: 'G-X5V5ENX619', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

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
      'dim',
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
  enablePWA: true,
};

export default CONFIG;
