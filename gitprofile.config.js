// gitprofile.config.js

const config = {
  github: {
    username: 'micheldore', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'micheldore',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: '',
    phone: '',
    email: 'michel@doredev.nl',
  },
  skills: ['JavaScript', 'React.js'],
  experiences: [
    {
      company: 'Company name 1',
      position: 'Software Engineer',
      from: 'July 2019',
      to: 'Present',
    },
    {
      company: 'Company name 2',
      position: 'Jr. Software Engineer',
      from: 'January 2019',
      to: ' June 2019',
    },
  ],
  education: [
    {
      institution: 'Institution name 1',
      degree: 'ABC',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution name 2',
      degree: 'XYZ',
      from: '2012',
      to: '2014',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 5, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id
    id: '', // UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the theme change switch
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
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
