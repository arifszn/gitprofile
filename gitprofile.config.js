// gitprofile.config.js

const config = {
  github: {
    username: 'zakery1369', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'zakery1369',
    twitter: 'zakery1369',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'zakery1369',
    dev: 'zakery1369',
    stackoverflow: '', // format: userid/username
    skype: 'zakery1369',
    telegram: 'zakery1369',
    website: 'https://zakops.com',
    phone: '',
    email: 'zakery1369@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/uc?export=download&id=1_vpm9hZLrhLZGL6JUOEhZXvl1SQwEZJa', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Docker Swarm',
    'Git',
    'Bash',
    'Nginx',
    'Apache',
    'Ansible',
    'HAProxy',
    'PostgreSQL',
    'Mariadb',
    'Mysql',
    'Selenium',
    'Prometheus',
    'Zabbix',
    'KVM',
    'DevOps',
  ],
  experiences: [
    {
      company: 'Kavano',
      position: 'DevOps Engineer',
      from: 'Jun 2021',
      to: 'Present',
      companyLink: 'https://kavano.co',
    },
    {
      company: 'ATCCE',
      position: 'IT Manager',
      from: 'Feb 2015',
      to: 'May 2021',
      companyLink: 'https://',
    },
  ],
  certifications: [
    {
      name: 'IBM',
      body: 'Introduction to Cloud Computing',
      year: 'Jun 2023',
      link: 'https://www.coursera.org/account/accomplishments/certificate/7M2EKSM2W4NM'
    },
    {
      name: 'IBM',
      body: 'Introduction to DevOps',
      year: 'Jan 2023',
      link: 'https://www.coursera.org/account/accomplishments/certificate/FN3EXMG3LMR5'
    },      
    {
      name: 'Linux Professional Institute',
      body: 'Essentials - 1 - 2',
      year: 'Jan 2020',
      link: 'https://zakops.com/_next/image?url=%2FLPIC2.png&w=1920&q=75'
    },
    {
      name: 'CISCO',
      body: 'CCNA - CCNP',
      year: 'Jan 2012',
      link: ''
    },
     {
      name: 'Microsoft',
      body: 'MCITP',
      year: 'Jan 2012',
      link: ''
    },
    {
      name: 'CompTIA',
      body: 'A+',
      year: 'Jan 2011',
      link: ''
    },
  ],
  education: [
    {
      institution: 'Tehran',
      degree: 'Bachelor of Computer Engineering',
      from: '2008',
      to: '2012',
    },
    /*{
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },*/
  ],

  // To hide the `My Projects` section, keep it empty.
  /* externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ], */
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'zakery1369', // to hide blog section, keep it empty
    limit: 5, // How many posts to display. Max is 10.
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
    defaultTheme: 'business',

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
  footer: `Made with <a 
      class="text-primary" href="https://Zakops.com"
      target="_blank"
      rel="noreferrer"
    >Zakops</a> and ❤️`,
};

export default config;
