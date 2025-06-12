// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'wbgreen0405', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */


  base: '/wgportfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
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
        projects: ['wbgreen0405/FraudShield', 'wbgreen0405/Cuisine-Assistant','wbgreen0405/Financial-Reporting-Agent'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Insurance Claims Fraud Detection',
          description:
            'This AI system detects fraud in insurance claims using advanced computer vision, semantic image search, and machine learning techniques.',
          imageUrl:
            'https://wbgreen0405.github.io/williamgreen.github.io/assets/images/fraud.webp',
          link: '',
        },
        {
          title: 'Mapping Kidney Cells',
          description:
            'This video presents a final project demonstration for the "Hacking the Kidney" competition, highlighting key aspects and outcomes.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/wbgreen0405/HuBMAP---Hacking-the-Kidney',
        },
        {
          title: 'Omdena Sonocare project: Capturing Biometrics through Camera',
          description:
            'Led the development of a modular, end-to-end pipeline for contactless health monitoring at Omdena Sonocare by integrating advanced data preprocessing, self-supervised learning (using synthetic data from GANs), clustering, regression, and model deployment, resulting in seamless transformation of raw video data into actionable health insights. Engineered scalable and maintainable code components, positioning the solution as a strong candidate for real-world, camera-based vital sign monitoring applications.',
          imageUrl:
            'https://github.com/wbgreen0405/wgportfolio/blob/main/public/SonoCare.png',
          link: 'https://www.omdena.com/projects/ai-vital-signs-monitoring',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'greenwilliam',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'dskswu',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: ' ',
    phone: '',
    email: 'william.green@explainableai2021.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'SQL',
    'Python (TensorFlow, Keras)',
    'Cloud & DevOps',
    'Statistical Modeling',
    'Machine Learning',
    'Database management',
    'R programming',
    'Natural Language Processing',
    'Git',
    'Docker',
    'TensorFlow and Keras',
    'Problem-Solving',
    'Spark',
    'Scikit-Learn',
  ],
  experiences: [
    {
      company: 'Department of VA',
      position: 'Data Scientist',
      from: '2017',
      to: 'Present'
    },
    {
      company: 'Explainable AI, LLC',
      position: 'Owner and AI Consultant',
      from: '2021',
      to: 'Present'
    },
    {
      company: 'Omdena',
      position: 'Volunteer- Lead ML Engineer',
      from: '2021',
      to: 'Present'
    },
  ],
  certifications: [
    {
      name: 'Azure Data Fundamentals',
      year: '2025',
    },
    {
      name: 'Azure AI Engineer Associate',
      year: '2025',
    },
    {
      name: 'Azure Data Scientist Associate',
      year: '2025',
    },
    {
      name: 'Github Foundations',
      year: '2025',
    },
    {
      name: 'Azure Fundamentals',
      year: '2022',
    },
  ],
  educations: [
    {
      institution: 'Eastern University',
      degree: 'Master of Science in Data Science',
      from: '2024',
      to: '2024',
    },
    {
      institution: 'Webster University',
      degree: 'Master of Science in Business',
      from: '2009',
      to: '2010',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        '',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'dskswu', // to hide blog section, keep it empty
    limit: 4, // How many articles to display. Max is 10.
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
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
