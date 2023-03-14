// gitprofile.config.js

const config = {
  github: {
    username: 'somer-sinnard', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 2, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['-Hello_World-','MyFirstRepo','somer-sinnard.github.io_temp','HW12','somer-sinnard','somer-sinnard.github.io_temp_1','somer-sinnard.github.io_temp'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'somer-sinnard',
    //twitter: 'arif_szn',
    //mastodon: 'arifszn@mastodon.social',
    //facebook: '',
    //instagram: '',
    //dribbble: '',
    //behance: '',
    //medium: 'arifszn',
    //dev: 'arifszn',
    //stackoverflow: '', // format: userid/username
    //skype: '',
    //telegram: '',
    //website: 'https://arifszn.com',
    phone: '(712) 210-2409',
    email: 'sgsinnard@gmail.com',
  },
  resume: {
    fileUrl:
      'https://iowa-my.sharepoint.com/personal/ssinnard_uiowa_edu/Documents/ssinnard_resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Microsoft Office Suite',
    'Python',
    'SQL',
    'Tableau',
    'JMP',
    'Orange',
    'Omeda',
    'Hubspot',
    'Microsoft Azure',
    'Microsoft VBA',
    'Power BI',
  ],
  experiences: [
    {
      company: "Becker's Healthcare",
      position: 'Data and Operations Intern',
      from: 'May 2022',
      to: 'Present',
      companyLink: 'https://www.beckershospitalreview.com/',
    },
    //{
      //company: 'Company Name',
      //position: 'Position',
      //from: 'July 2019',
      //to: 'August 2021',
      //companyLink: 'https://example.com',
    //},
  ],
  certifications: [
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      //body: 'Lorem ipsum dolor sit amet',
      year: 'December 2022',
      link: 'https://www.credly.com/badges/88f6af9d-1ab5-40e5-9b15-d03b2338e254/linked_in?t=rmt3ud'
    },
  ], 
  education: [
    {
      institution: 'University of Iowa, Tippie College of Business',
      degree: 'Master of Science, Business Analytics',
      from: 'August 2021',
      to: 'May 2023',
    },
    {
      institution: 'University of Iowa, Tippie College of Business',
      degree: 'Bachelor of Business Administration, Economics',
      from: 'August 2018',
      to: 'May 2022',
    },
  ],
  
  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Modeling the Characteristics of an Exceptional Vinho Verde; An Analysis of Wine Quality Ratings',
      description:
        'A group report on a multiple regression analysis of wine data with the goal of determining which factors improve Vinho Verde wine ratings.',
      imageUrl: 'https://www.realsimple.com/thmb/5GPNGPLNH228wa7jUJ2HPpaRBao=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/red-wine-health-benefits-ce3be96b730b41cc82f128abb75c2395.jpg',
      link: 'https://iowa-my.sharepoint.com/personal/ssinnard_uiowa_edu/Documents/Wine%20Case%20Study%20.pdf?login_hint=ssinnard%40uiowa.edu',
    },
    {
      title: 'Predicting Loan Defaults Using the Orange Platform',
      description:
        'A group report on predicting individuals that will default on loans using machine learning classfication methods.',
      imageUrl: 'https://www.incimages.com/uploaded_files/image/1920x1080/business-loan-illustration-1940x900_35212.jpg',
      link: 'https://iowa-my.sharepoint.com/personal/ssinnard_uiowa_edu/Documents/Data%20Science%20Project%20Report.pdf?login_hint=ssinnard%40uiowa.edu',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  //blog: {
    //source: 'dev', // medium | dev
    //username: 'arifszn', // to hide blog section, keep it empty
    //limit: 2, // How many posts to display. Max is 10.
  //},
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'pastel',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

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
    //customTheme: {
      //primary: '#fc055b',
      //secondary: '#219aaf',
      //accent: '#e8d03a',
      //neutral: '#2A2730',
      //'base-100': '#E3E3ED',
      //'--rounded-box': '3rem',
      //'--rounded-btn': '3rem',
    //},
  },

  // Optional Footer. Supports plain text or HTML.
  //footer: `Made with <a 
      //class="text-primary" href="https://github.com/arifszn/gitprofile"
      //target="_blank"
      //rel="noreferrer"
    //>GitProfile</a> and ❤️`,
};

export default config;
