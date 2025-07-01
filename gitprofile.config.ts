// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'kg712', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
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
    title: 'Portfolio of Kovid Gopikaramanan',
    description: '',
    image: '',
  },
  social: {
    linkedin: 'kovidg0712',
    // website: 'https://www.arifszn.com',
    phone: '+1 (548) 883-2177',
    email: 'kovidgramanan@icloud.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1i1ICVp7OjHBrJoj1pxO6V86Q_U45DL3B/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'Python',
    'JavaScript',
    'RTOS',
    'Git',
    'Bash',
    'Firebase',
    'Arduino',
    'STM32',
    'Circuitry',
    'Android Studio',
    'XCode',
    'React',
    'Ionic',
    'Android Debug Bridge (ADB)',
  ],
  experiences: [
    {
      company: 'Paige by kiloBryte inc.',
      position: 'Software Developer',
      from: 'January 2025',
      to: 'April 2025',
      companyLink: 'https://www.paigeframe.com',
    },
    {
      company: 'Ankit Aerospace',
      position: 'Manufacturing Engineering Intern',
      from: 'June 2023',
      to: 'July 2023',
      companyLink: 'https://www.ankitgroup.com/group',
    },
  ],
  /*
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  */
  educations: [
    {
      institution: 'University of Waterloo',
      degree: 'Mechatronics Engineering',
      from: 'September 2024',
      to: 'April 2029',
    },
  ],

  publications: [
    {
      title: 'a',
      conferenceName: 's',
      journalName: 'd',
      authors: 'd',
      description: `Hey, I’m Kovid, a Mechatronics Engineering student at the University of Waterloo who’s all about turning ideas into working systems. I love blending hardware and software to build things that are clever, useful, and a little bit exciting.
        
        From circuits to code, I enjoy the full process of creating, breaking problems down, experimenting with solutions, and watching projects come to life. I learn best by getting my hands dirty, asking questions, and building alongside curious, driven people.
        
        Whether it's a device, an app, or something entirely new, if it’s creative, challenging, and has the potential to make an impact, I’m in. Let’s build something awesome.`,
    },
  ],

  // Display articles from your medium or dev account. (Optional)

  blog: {
    /*
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
    */
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
    defaultTheme: 'lemonade',

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
  /*footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
  */
};

export default CONFIG;
