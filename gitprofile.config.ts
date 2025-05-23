// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ChristophShyper', // Your GitHub org/user name. (This is the only required config)
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
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
            'devops-infra/docker-terragrunt',
            'devops-infra/velez',
            'devops-infra/action-commit-push',
            'devops-infra/action-pull-request',
            'devops-infra/action-format-hcl',
            'devops-infra/action-tflint',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'DevOps-Infra',
          description:
            'Set of tools for DevOps and Cloud Engineers. It includes tools for managing infrastructure, CI/CD pipelines, and more.',
          imageUrl:
            'https://avatars.githubusercontent.com/u/63716145?s=400&u=37eea168495a5abfc24e66eac21f4cb85f72f222&v=4',
          link: 'https://github.com/devops-infra',
        },
//         {
//           title: 'Project Name',
//           description:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
//           imageUrl:
//             'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
//           link: 'https://example.com',
//         },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Krzysztof Szyper',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'krzysztof-szyper',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: 'ChristophShyper',
    instagram: 'ChristophShyper',
    reddit: '',
    threads: '',
    youtube: 'ChristophShyper', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'krzysztof.szyper',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://shyper.pro',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'AWS',
    'GCP',
    'Terraform',
    'Python',
    'Makefile',
    'Bash',
    'Git',
    'Docker',
    'DevOps',
    'CI/CD',
  ],
  experiences: [
//     {
//       company: 'Company Name',
//       position: 'Position',
//       from: 'September 2021',
//       to: 'Present',
//       companyLink: 'https://example.com',
//     },
//     {
//       company: 'Company Name',
//       position: 'Position',
//       from: 'July 2019',
//       to: 'August 2021',
//       companyLink: 'https://example.com',
//     },
  ],
  certifications: [
//     {
//       name: 'Lorem ipsum',
//       body: 'Lorem ipsum dolor sit amet',
//       year: 'March 2022',
//       link: 'https://example.com',
//     },
  ],
  educations: [
//     {
//       institution: 'Institution Name',
//       degree: 'Degree',
//       from: '2015',
//       to: '2019',
//     },
//     {
//       institution: 'Institution Name',
//       degree: 'Degree',
//       from: '2012',
//       to: '2014',
//     },
  ],
  publications: [
    {
      title: 'Getting started with AWS - the proper way - no more IAM users',
      conferenceName: 'AWS User Group Kraków',
      journalName: '',
      authors: '',
      link: 'https://github.com/ChristophShyper/presentation-okta-saml-aws',
      description:
        'Information about setting up 3rd party IdPs in AWS with SAML.',
    },
    {
      title: 'Managing networking chaos while migrating to AWS multi-account architecture',
      conferenceName: 'AWS User Group Kraków',
      journalName: '',
      authors: '',
      link: 'https://github.com/ChristophShyper/presentation-routing',
      description:
        'Information about ways of leveraging AWS Transit Gateway to simply networking management in AWS at scale.',
    },
    {
      title: 'Understanding AWS Lambda',
      conferenceName: 'DevOps Community Poland (EPAM)',
      journalName: '',
      authors: '',
      link: 'https://github.com/ChristophShyper/presentation-lambda',
      description:
        'Deep dive into AWS Lambda, its architecture and how to use it properly and efficiently.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'krzysztof.szyper', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-CGVLLZ6088', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
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
