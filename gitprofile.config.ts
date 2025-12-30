// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mehtadome', // Your GitHub org/user name. (This is the only required config)
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
          projects: ['mehtadome/Firewire', 'mehtadome/old-mehtadome.github.io', 'mehtadome/Notes', 'mehtadome/mehtadome', 'mehtadome/SCU', 'mehtadome/Programming-Projects'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'mehtadome/Mentoring',
          'mehtadome/FusionAD',
          'mehtadome/ETF-Scanner',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title:
            '# Spotify App & ETF Scanner',
          description:
            "\n### Tools\nPython, ReactJS, TypeScript, Claude, CodeWhisperer\n\n### Overview\nDeveloped a Spotify App which shows the user's top playlists and songs.\nCreated an ETF Scanner which pulls MorningStar's ETF reports and creates suggestions based on factors like risk assessment and total capital.\n\n### Fun Takeaway\nThis was my introduction to vibe-coding alongside Sonnet and AWS!",
          imageUrl: '/img/etf-logo.png',
          link: 'https://github.com/mehtadome/ETF-Scanner',
          year: '2025',
        },
        {
          title:
            '# Senior Thesis',
          description:
            '## Enhanced Sensing Methods for UAV-Based Disaster Recovery\n### Tools\nPython, QGroundControl, OpenImages Dataset v6, SSD Mobile Net\n\n### Overview\nAerial drone which hosts computer vision and networking.\nLarge emphasis on frugality and modularity.\nDrones locate victims through WIFI probing and BLE advertisement framing.\nRaspberry Pi acts as a wireless access point for victims to specify their exact location.',
          imageUrl: '/img/senior-design.jpeg',
          link: 'https://drive.google.com/file/d/1KhvhJbrMApBgDEeJOLCnEku7JF_nC8g_/view?usp=sharing',
          year: '2021',
        },
        {
          title: '# The OASIS Initiative',
          description:
            'The OASIS Initiative is an organization which provides opportunities to further research and leadership for their members in the Sahel Region of Africa.\n\n### Tools\nPython, JavaScript, ReactJS, Google Firebase, RESTful APIs\n\n### Accomplishments\nLead a team of engineering students to create a secured webpage.\nCreated a full-stack system backed by Google Cloud Firebase and ReactJS.\nProject increased connectivity between alumni scattered throughout the Sahel Region.',
          imageUrl:
            '/img/oasis-logo.png',
          link: 'https://cghdde.berkeley.edu/partners/oasis-initiative',
          year: '2019',
        },
        {
          title: '# FusionAD',
          description:
            'FusionAD is an autonomous driving software stack developed by the SJSU Autonomous Driving Team\n\n### Tools\nHTML, CSS, Bootstrap, Flask, SQLAlchemy, Postgresql, Python\n\n### Accomplishments\nVolunteered my work on a close friends senior project creating an autonomous vehicle.\nWorked with YOLO, DarkNet, and Tensorflow to create CNNs.\nThe vehicle was able to utilize LiDAR, sensor fusion, and CV to safely navigate itself around the SJSU campus.',
          imageUrl:
            '/img/fusionad-logo.png',
          link: 'https://github.com/mehtadome/FusionAD',
          year: '2018',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Ruchir Mehta', description: 'Senior Solutions Architect @ Accenture', imageURL: '' },
  social: {
    linkedin: 'ruchir-mehta-55320a153',
    x: '_notruchir',
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
    discord: '',
    telegram: '',
    website: 'https://www.mehtadome.github.io',
    phone: '',
    email: 'ruchirmehta14@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1_fBSWp5XMMKfzMawwp-qWg2HFi3O-c-V/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'React.js',
    'Node.js',
    'TypeScript',
    'Hack',
    'SQL/NoSQL',
    'REST APIs',
    'Git',
    'YAML',
    'Azure',
    'AWS',
    'GCP',
    'Microsoft Visio',
    'Microsoft 365',
    'Gemini 3',
    'Claude Sonnet',
  ],
  experiences: [
    {
      company: 'Accenture',
      position: 'Senior Solutions Architect',
      from: 'July 2022',
      to: 'Present',
      companyLink: 'https://newsroom.accenture.com/news/2019/accenture-launches-synops-a-human-machine-operating-engine-designed-to-help-enterprises-achieve-sustainable-competitive-advantage',
    },
    {
      company: 'Mentor Collective',
      position: 'Technical Mentor',
      from: 'October 2022',
      to: 'Present',
      companyLink: 'https://www.scu.edu/engineering/undergraduate/student-support/mentor-collective/',
    },
    {
      company: 'Hitachi Vantara',
      position: 'Full Stack Engineer',
      from: 'October 2021',
      to: 'June 2022',
      companyLink: 'https://www.hitachivantara.com/en-us/products/storage-platforms?utm_source=google&utm_medium=paid-search&utm_campaign=FY24-Q3-HCIaaS.MHIA-twog_sem-14-All_Seg-AMER-OAPS&utm_keyword=hitachi%20vantara%20object%20storage&gclid=CjwKCAiAjc7KBhBvEiwAE2BDOUU9P2XIXIiqA7BqSfpUWesQjrQWmbKeUvEd6UwSjX0kZ4_f74NZFRoCbtgQAvD_BwE&gad_source=1&gad_campaignid=23265916927&gbraid=0AAAAAC1LAwItsh4slfEEKEzpjgYyyGYGM',
    },
    {
      company: 'CVS Health',
      position: 'Big Data Science Intern',
      from: 'June 2020',
      to: 'August 2020',
      companyLink: 'https://www.aetnacvshealth.com/',
    },
    {
      company: 'KiddoWear',
      position: 'Full Stack Software Engineering Intern',
      from: 'June 2019',
      to: 'August 2019',
      companyLink: '',
    },
    {
      company: 'Hitachi America',
      position: 'Software Engineering Intern',
      from: 'June 2018',
      to: 'August 2018',
      companyLink: 'https://www.hitachi.com/en-us/',
    },
  ],
  certifications: [
    {
      name: 'AZ-900',
      body: 'Microsoft Azure Fundamentals',
      year: 'April 2023',
      link: 'https://www.credly.com/badges/adecfd08-09bc-4389-9ce2-a0357458f75c/linked_in_profile',
    },
  ],
  educations: [
    {
      institution: 'Santa Clara University',
      degree: "Bachelor's of Science in Computer Science and Engineering",
      from: '2017',
      to: '2021',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

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
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
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
