// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'vishu42', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
    external: {
      // header: 'My Projects',
      // // To hide the `External Projects` section, keep it empty.
      // projects: [
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   },
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   },
      // ],
    },
  },
  seo: {
    title: 'Vishal Tewatia',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'vishu42',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'vishu42',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://blog.vishaltewatia.com',
    phone: '',
    email: 'tewatiavishal3@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/vishu42/me/releases/download/0.0.11/resume2023-25-jul.docx', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Azure',
    'Go',
    'JavaScript',
    'Kubernetes',
    'Github Actions',
    'Git',
    'Docker',
    'Terraform',
    'Python',
    'Linux',
    'Bash',
    'Helm',
    'Kube-Builder',
  ],
  experiences: [
    {
      company: 'The Talent Enterprise',
      position: 'Senior Devops Engineer',
      from: 'Jan 2024',
      to: 'Present',
      companyLink: 'https://thetalententerprise.com/',
    },
    {
      company: 'Successive Technologies',
      position: 'Senior Associate Engineer',
      from: 'Feb 2019',
      to: 'Dec 2023',
      companyLink: 'https://successive.tech',
    }
  ],
  certifications: [
    {
      name: 'CKAD: Certified Kubernetes Application Developer',
      body: 'The Linux Foundation',
      year: 'Feb 2023',
      link: 'https://www.credly.com/badges/7f3dd84f-b5a4-4346-818a-0e3219896284/linked_in_profile',
    },
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      body: 'Microsoft',
      year: 'Jan 2022',
      link: 'https://www.credly.com/badges/7f3dd84f-b5a4-4346-818a-0e3219896284/linked_in_profile',
    },
  ],
  education: [
    {
      institution: 'Manav Rachna University, Faridabad',
      degree: 'B.Tech in Computer Science',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Tagore Academy Public School, Faridabad',
      degree: 'High School',
      from: '2012',
      to: '2014',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'vishu42', // to hide blog section, keep it empty
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
    defaultTheme: 'Cupcake',

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
