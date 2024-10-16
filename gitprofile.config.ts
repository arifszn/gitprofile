// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'GAD-cell', // Your GitHub org/user name. (This is the only required config)
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
          title: 'Automated Meta-analysis of Scientific Papers',
          description:
            ' Developed a database of over 5,000 research papers; applied NLP techniques using BERT models and analytics to analyze paper success factors.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'AI for Diabetic Retinopathy Diagnosis',
          description:
            ' Created a convolutional neural network for diagnosing diabetic retinopathy from an indian retinal images database, under supervision by the WHO and ITU.',
          imageUrl:
            'https://img.freepik.com/free-photo/portrait-patient-having-eye-checkup_23-2151196678.jpg?t=st=1729086317~exp=1729089917~hmac=80c9466a22980da006016bbf1211f47fd6d8d79225dc09e46b8e6bb4c13cc6d0&w=1060',
          link: 'https://example.com',
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
    linkedin: 'sinoué-gad',
    instagram: 'gad_3dart',
    youtube: 'sinoue_gad', // example: 'pewdiepie'
    email: 'sinoue.gad@telecom-sudparis.eu',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Pytorch',
    'Tensorflow',
    'Scikit learn',
    'Java',
    'C',
    'C++',
    'PHP',
    'MySQL',
    'Git',
  ],
  experiences: [
    {
      company: 'X&Immersion',
      position: 'Data science & IA engineer',
      from: 'June 2024',
      to: 'August 2025',
      companyLink: 'https://www.xandimmersion.com/',
    },
    {
      company: 'Vidéo Club',
      position: 'Président',
      from: 'June 2023',
      to: 'June 2024',
      companyLink: '',
    },
  ],
  certifications: [
    {
    },
  ],
  educations: [
    {
      institution: 'Politecnico di Milano',
      degree: 'Master 2 Track CS/AI - Academic exchange',
      from: 'september 2024',
      to: 'Present',
    },
    {
      institution: 'Télécom-sudParis',
      degree: 'Msc in computer science specializing in Data science and AI',
      from: '2022',
      to: 'Present',
    },
  ],
  publications: [

  ],
  // Display articles from your medium or dev account. (Optional)
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
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
