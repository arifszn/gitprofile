// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'thatdevwolfy', // Your GitHub org/user name. (This is the only required config)
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
      header: 'My Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 15, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ["musidiscordbot/musi-website"], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Owner of Musi Bot',
          description:
            'Hey! Welcome to lrdwolfys bio.',
          imageUrl:
            '', // Add your image URL here if you want to display an image
          link: 'https://musi.lol',
        }
      ],
    },
  },
  seo: {
    title: 'lrdwolfy`s Bio',
    description: 'Hey! Welcome to lrdwolfys bio.',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: 'thatdevwolfy',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://thatdevwolfy.lol',
    phone: '',
    email: 'mail@thatdevwolfy.lol',
  },
  resume: {},
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'Git',
    'Docker',
    'CSS',
    "Python"],
  experiences: [
    {
      company: 'PylexNodes',
      position: 'Adminstrator',
      from: 'October 2023',
      to: 'November 2023',
      companyLink: 'https://pylexnodes.net',
    },
    {
      company: 'PylexNodes',
      position: 'Support Team',
      from: "April 2024",
      to: "June 2024",
      companyLink: 'https://pylexnodes.net',
    },
    {
      company: "Blissradio",
      position: "DJ",
      from: "Feb 2024",
      to: "Present",
      companyLink: "https://blissradio.nl",
    },
    {
      company: "BeatFM",
      position: "Owner",
      from: "May 2024",
      to: "Present",
      companyLink: "https://beatfm.uk",
    },
  ],
  certifications: [],
  educations: [],
  publications: [],
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
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
  footer: `Made with ❤️`,

  enablePWA: false,
};

export default CONFIG;
