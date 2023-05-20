// gitprofile.config.js

const config = {
  github: {
    username: 'AckonSamuel', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'samuel-yaw-ackon',
    twitter: 'dude_ackon',
    medium: '@ackons433',
    email: 'ackons433@gmail.com',
  },
  resume: {
    fileUrl:
      "https://drive.google.com/file/d/194SESbW-mXxzbIfyFDtwCH-AAnUDC8IB/view?usp=sharing", // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Ruby',
    'Ruby on Rails',
    'Linux',
  ],
  experiences: [
    {
      company: 'Microverse',
      position: ' Student Mentor(Volunteer)',
      from: 'February 2021',
      to: 'Present',
      companyLink: 'https://www.microverse.org',
    },
    {
      company: 'Accra Technical University',
      position: 'IT support engineer intern',
      from: 'December 2022',
      to: 'January 2023',
      companyLink: 'https://atu.edu.gh',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Kwame Nkrumah University of Science and Technology',
      degree: 'BSc Electrical and Electronics Engineering',
      from: '2019',
      to: '2022',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Rest Countries',
      description:
        'This is a web app that displays a collection of countries from the rest countries api. Filter countries by search and filter options, toggle between light and dark modes',
      imageUrl:
        'https://user-images.githubusercontent.com/92922987/238102947-0dae2ebc-7867-4f61-b0b1-9188f16ebf13.jpg',
      link: 'https://rest-countries-theta.vercel.app/',
      source: 'https://www.github.com/AckonSamuel/rest_countries',
    },
    {
      title: 'Space traveller hub',
      description:
        'A web app platform that renders information from the Space-X API about space rockets and their related missions',
      imageUrl:
        'https://user-images.githubusercontent.com/92922987/236263407-5214f883-ca68-47af-9425-ee8daa50dcb4.jpg',
      link: 'https://famous-klepon-e50d82.netlify.app/',
      source: 'https://www.github.com/AckonSamuel/space-travellers-hub',
    },
    {
      title: 'Space flight news',
      description:
        'A web app to release the latest space and space travel news updates. Built with HTML5, CSS3 and JavaScript',
      imageUrl:
        'https://user-images.githubusercontent.com/92922987/236264916-85d98531-d901-4a9d-98e4-dcc957a7652d.jpg',
      link: 'https://ackonsamuel.github.io/space-flight-news/',
      source: 'https://www.github.com/AckonSamuel/space-flight-news',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '@ackons433', // to hide blog section, keep it empty
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
    defaultTheme: 'winter',

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
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
