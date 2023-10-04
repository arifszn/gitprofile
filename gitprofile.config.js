// gitprofile.config.js

const config = {
  github: {
    username: 'nathen418', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 22, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['nathen418.com', 'nathen418'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'nate-goldsborough',
    twitter: '',
    threads: 'nathen418@threads.net',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'nathen418',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    discord: 'nathen418',
    telegram: '',
    website: 'https://nathen418.com',
    phone: '',
    email: 'nathen418@playantares.com',
  },
  resume: {
    fileUrl:
      'https://github.com/nathen418/nathen418.com/raw/main/ResumeForUpload.pdf',
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'MongoDB',
    'MySQL',
    'Discord.js',
    'Node.js',
    'Traefik',
    'Nginx Proxy Manager',
    'ZFS',
    'Cisco Switching and Routing',
    'Docker',
    'Authelia',
    'Proxmox',
    'Ubuntu',
    'Git',
  ],
  experiences: [
    {
      company: 'WEC Energy Group',
      position:
        'Intern - IT Telecom and Infrastructure Operations',
      from: 'May 2023',
      to: 'Present',
      companyLink: 'https://www.wecenergygroup.com/',
    },
    {
      company: 'University of Wisconsin Milwaukee',
      position: 'Lead Audio Visual Technician - Union Event Services',
      from: 'August 2022',
      to: 'Present',
      companyLink: 'https://uwm.edu/union/evs/',
    },
    {
      company: 'University of Wisconsin Milwaukee',
      position: 'Audio Visual Technician - Union Event Services',
      from: 'October 2021',
      to: 'August 2022',
      companyLink: 'https://uwm.edu/union/evs/',
    },
    {
      company: 'University of Wisconsin Milwaukee',
      position: 'Maintenance - University Housing',
      from: 'May 2022',
      to: 'September 2022',
      companyLink: 'https://uwm.edu/housing/',
    },
    {
      company: 'College of DuPage',
      position: 'COVID Screener - Conference and Event Services',
      from: 'August 2020',
      to: 'May 2021',
      companyLink:
        'https://www.cod.edu/about/campus-departments/conference-event-services/',
    },
    {
      company: 'College of DuPage',
      position: 'Assistant Theatre Technician - McAninch Arts Center',
      from: 'August 2020',
      to: 'May 2021',
      companyLink: 'https://www.cod.edu/academics/programs/theater/index.aspx',
    },
  ],
  certifications: [
    {
      name: 'Cert Prep: Scrum Master',
      body: 'LinkedIn',
      year: 'September 2023',
      link: 'https://www.linkedin.com/learning/certificates/b20de7c6ddf1c80a514b15a091f9309b83ccfeb278cc9190c49544102cb498f9?u=77313426',
    },
    {
      name: 'Becoming a Product Manager',
      body: 'LinkedIn',
      year: 'October 2022',
      link: 'https://www.linkedin.com/learning/certificates/06618a2ccb788af62bb88d799aad8baad3656f98b5972609bb898c703c5b1975?u=77313426',
    },
    {
      name: 'Business Analysis Foundations: Business Process Modeling',
      body: 'LinkedIn',
      year: 'October 2022',
      link: 'https://www.linkedin.com/learning/certificates/e88b0d48ca07ca8f0c43dd82754bb49775e02781317e9fd3fae6651b869af557?u=77313426',
    },
    {
      name: 'Adobe XD: Prototyping',
      body: 'LinkedIn',
      year: 'April 2022',
      link: 'https://www.linkedin.com/learning/certificates/0e9e94da0ab17e2acd12e7fa8e1fa47112756cc6a21560c08a440874397a790b?u=77313426',
    },
    {
      name: 'UX Foundations: Prototyping',
      body: 'LinkedIn',
      year: 'March 2022',
      link: 'https://www.linkedin.com/learning/certificates/e29f04083830acd0a23f75962d29830a039b7d421064f7b8b255a705aa5db2e4?u=77313426',
    },
  ],
  education: [
    {
      institution: 'University of Wisconsin Milwaukee',
      degree: 'Bachelor of Science in Information Science and Technology',
      from: '2020',
      to: 'Present',
    },
    {
      institution: 'College of DuPage',
      degree: 'Pre-Engineering',
      from: '2019',
      to: '2020',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Purpose Driven Sisters Website Redesign',
      description:
        'Worked with a small student team to complete a digital presence redesign for Purpose Driven Sisters, a nonprofit organization focused on youth mentorship that strives to empower young girls in Milwaukee. Designed a new website by creating new and transforming existing content, refined their brand story, and defined donation and involvement incentives to prospective sponsors and members so they can better serve their community and grow as an organization. Worked on improving SEO and basic web accessibility and improving the mobile site design. This project was completed as part of the Nonprof-IT program at UW-Milwaukee',
      imageUrl: 'https://antaresnetwork.com/resources/PDS_Logo.jpg',
      link: 'https://purposedsisters.org',
    },
    {
      title: 'Antares Bot',
      description:
        'AntaresBot a small bot with a bunch of features and cool commands. Join in the fun by adding AntaresBot to your server today. Developed for fun by me to learn type script and discord.js. Verified by Discord and in over 250 servers with over 1 million commands used and a 99% uptime. Using Discord\'s new "Slash Commands", Antares Bot supports many commands from fun random images, counting and chance games, a counting game, and more. Use /help in any channel to get a list of commands and features that are accessible. Admins can use /adminhelp',
      imageUrl: 'https://antaresnetwork.com/resources/icon.png',
      link: 'https://bot.antaresnetwork.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'nathen418',
    limit: 5, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-F8K6NR9ZJ2', // Please remove this and use your own tag id or keep it empty
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

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
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
