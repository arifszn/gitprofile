// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'putuwahyu29', // Your GitHub org/user name. (This is the only required config)
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
      header: 'My Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Website',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Awd Portofolio',
          description:
            'Selamat datang di halaman web portofolio milik agus wahyu',
          imageUrl:
            'https://awd.my.id/images/og-image.png',
          link: 'https://awd.my.id',
        },
        {
          title: 'Awd Blog',
          description:
            'Di sini, Anda akan menemukan banyak artikel yang menarik dan informatif. Berbagai artikel tersebut berfokus pada topik mengenai teknologi.',
          imageUrl:
            'https://blog.awd.my.id/images/og-image.png',
          link: 'https://blog.awd.my.id',
        },
      ],
    },
  },
  seo: {
    title: 'Agus Wahyu',
    description: 'Portofolio Agus Wahyu',
    imageURL: '',
  },
  social: {
    linkedin: 'aguswahyu',
    twitter: '',
    mastodon: '',
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
    website: 'https://awd.my.id',
    phone: '',
    email: 'aguswahyu@awd.my.id',
  },
  resume: {
    fileUrl:
      'https://awd.my.id/cv.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Bootstrap',
    'Redis',
    'Codeigniter 4',
    'Linux',
  ],
  experiences: [
  ],
  certifications: [
  ],
  educations: [
    {
      institution: 'Politeknik Statistika STIS',
      degree: 'D4 Komputasi Statistik',
      from: '2020',
      to: 'Saat Ini',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
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
    defaultTheme: 'dracula',

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
      class="text-primary" href="https://github.com/putuwahyu29"
      target="_blank"
      rel="noreferrer"
    >Awd</a> and ❤️`,

  enablePWA: false,
};

export default CONFIG;
