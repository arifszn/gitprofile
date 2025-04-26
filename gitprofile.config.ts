// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'KatKeilty', // Your GitHub org/user name. (This is the only required config)
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
        projects: [''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Initiatives & Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Tracking & Metrics',
          description:
            'Developed bilingual dashboards and automated scorecard delivery, leveraging data from ERP, QMS, and other sources. Maintained PowerBI reports using SQL, DAX, and Azure DevOps, improving accuracy by transitioning from manual to automated systems. #DataVisualization #PowerBI #WorkflowManagement',
          imageUrl: '',
          link: '',
        },
        {
          title: 'Software Implementation & Database Administration',
          description:
            'Managed Quality Management Software (QMS) implementation, training staff, and transitioning legacy systems. Oversaw software configuration, updates, and access rights while coordinating with IT teams for seamless operation and troubleshooting. #SoftwareImplementation #DatabaseManagement #ProjectManagement',
          imageUrl: '',
          link: '',
        },
        {
          title: 'Audit Digitization & Process Standardization',
          description:
            'Modernized audit processes by leading software implementation, training auditors, and migrating legacy systems seamlessly. Improved efficiency, accuracy & consistency with standardized procedures and innovative tools. #ISOCompliance #ProjectManagement #ProcessImprovement #Auditing',
          imageUrl: '',
          link: '',
        },
        {
          title: 'Digital Transformation & ERP Implementation',
          description:
            'Facilitated seamless collaboration among stakeholders, including francophone partners, while leading training on Oracle NetSuite, M365 and Isovision. Championed data migration with SQL tools, bridging system gaps & driving tech adoption. #ERP #DataMigration #StakeholderManagement',
          imageUrl: '',
          link: '',
        },
        {
          title: 'Dynamic Documentation Design and Management',
          description:
            'Streamlined documentation processes by designing dynamic templates, resolving version control issues, and advising on versioning and branding needs. Supported French translations to ensure cohesive, multilingual materials. #Documentation #WorkflowManagement #VersionControl',
          imageUrl: '',
          link: '',
        },
        {
          title: 'Leadership and Training',
          description:
            'Led training programs for 365, QMS, ERP, and reporting while mentoring staff and improving departmental performance. Developed bilingual SharePoint resources, standardized documentation, and collaborated on adapting processes to new technologies. #Leadership #Training #ProcessImprovement',
          imageUrl: '',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Kat Keilty',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'katkeilty',
    website: '',
    email: 'katkeilty@gmail.com',
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
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
  },
  resume: {
    fileUrl:
      'https://rawcdn.githack.com/KatKeilty/katkeilty.github.io/7891003a4e08d13b94223849fde1a27d54921e7a/public/Kat-Keilty.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'SQL',
    'PowerBI',
    'DAX',
    'PowerQuery',
    'Git',
    'M365',
    'HTML',
    'ETL',
    'Data Analysis',
    'Data Modeling',
    'Database Administration',
    'Stakeholder Management',
    'Requirements Gathering',
    'Solutions Development',
    'Process Improvement',
  ],
  experiences: [
    {
      company: 'Beclawat Manufacturing',
      position: 'Quality Specialist (remote/hybrid)',
      from: '2022',
      to: 'Present',
      companyLink: 'https://beclawat.com/',
    },
    {
      company: 'Beclawat Manufacturing',
      position: 'Quality Auditor (remote/hybrid)',
      from: '2018',
      to: '2022',
      companyLink: 'https://beclawat.com/',
    },
    {
      company: 'Various',
      position: 'Fabrication/fitter',
      from: '2012',
      to: '2018',
      companyLink: 'www.linkedin.com/in/katkeilty',
    },
  ],
  certifications: [
    {
      name: 'Lean Six Sigma Black Belt',
      body: 'Six Sigma Body of Knowledge: Team leadership & dynamics, DMAIC model, Hypothesis testing, Design of Experiment',
      year: '2024',
      link: 'https://www.credential.net/59384ce5-82e8-40b2-b1b1-1b92e48698d7?username=katrinakeilty53897',
    },
    {
      name: 'BIDA Certificate, Business Intelligence & Data Analyst',
      body: 'Advanced Excel, Power BI, Power Query, Power Pivot, SQL, Tableau, Python. Statistical analysis, business intelligence, data science principles.',
      year: '2024',
      link: 'https://www.credential.net/bf3107b3-e933-4ed7-8d00-2c6e75e60f15#acc.I7HWVedr',
    },
    {
      name: 'ISO 9001:2015 & 14001:2015 Internal Auditor',
      body: ' Internal Audits · ISO Standards · Interviewing · Process Improvement · Corrective and Preventive Action (CAPA)',
      year: '2017, 2024',
      link: 'https://www.credential.net/59384ce5-82e8-40b2-b1b1-1b92e48698d7?username=katrinakeilty53897',
    },
    {
      name: 'Failure Modes and Effects Analysis AIAG & VDA FMEA Training',
      body: ' Quality (ISO 9001), Automotive (IATF 16949), Manufacturing & Operations, Process Improvement',
      year: '2023',
      link: 'https://thebrc.ca/product/aiag-vda-fmea-1st-edition-2/',
    },
  ],
  educations: [
    {
      institution: 'Loyalist College',
      degree: 'Diploma, Office Administration – Executive',
      from: '2021',
      to: '2023',
      description:
        'Financial accounting, business law, organizational behaviour, software, management',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
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
    defaultTheme: 'procyon',

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
      primary: '#e98403',
      secondary: '#0368E9',
      accent: '##FC910A',
      neutral: '#b7b2c4',
      'base-100': '#1a103d',
      '--rounded-box': '2rem',
      '--rounded-btn': '2rem',
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
