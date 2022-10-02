// gitprofile.config.js

const config = {
  github: {
    username: 'micheldore', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'micheldore',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    website: 'https://micheldore.github.io',
    phone: '',
    email: 'michel@doredev.nl',
  },
  skills: [
    'PHP',
    'JavaScript',
    'React.js',
    'Node.js',
    'NextJS',
    'MySQL',
    'Git',
    'Docker',
    'CSS',
    'Tailwind',
    'Bootstrap',
  ],
  showcase: {
    cases: [
      {
        title: "Hoeveel Auto's",
        description:
          'A website that shows car park statistics for the Netherlands. The website is built with PHP and uses \
          the RDW API.',
        image: 'https://micheldore.github.io/images/hoeveelautos.png',
        url: 'https://hoeveelautos.nl',
      },
      {
        title: 'TranslateDev',
        description:
          'A web app to translate text using the Google Translate API. The app is built with React.js and Express.js. \
        The app is aimed at developers who want to translate text in their code in the frontend.',
        image: 'https://micheldore.github.io/images/translatedev.png',
        url: 'https://translatedev.com',
      },
      {
        title: 'Songsrated',
        description:
          'A website to rate songs from your Spotify library. \
        The website is built with NextJS and uses the Spotify API for authentication and to get the songs.',
        image: 'https://micheldore.github.io/images/songsrated.png',
        url: 'https://songsrated.com',
      },
    ],
  },
  experiences: [
    {
      company: 'Het Codeerbedrijf',
      position: 'Backend Developer',
      from: '2021-11',
      to: '2022-07',
    },
    {
      company: 'Meriad B.V.',
      position: 'Full Stack Developer',
      from: '2021-02',
      to: '2021-11',
    },
    {
      company: 'Student aan Huis',
      position: 'Computer Repair Technician',
      from: '2018',
      to: '',
    },
    {
      company: 'Eljakim B.V.',
      position: 'Junior PHP Developer',
      from: '2015',
      to: '2016',
    },
  ],
  education: [
    {
      institution: 'Utrecht University',
      degree: 'Msc. Applied Data Science',
      from: '2022',
      to: 'Present',
    },
    {
      institution: 'Utrecht University',
      degree: 'Bsc. Artificial Intelligence',
      from: '2015',
      to: '2020',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  //   blog: {
  //     source: 'dev', // medium | dev
  //     username: 'arifszn', // to hide blog section, keep it empty
  //     limit: 3, // How many posts to display. Max is 10.
  //   },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

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
};

export default config;
