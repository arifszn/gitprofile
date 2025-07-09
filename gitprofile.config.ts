// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'whatifnick', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
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
        // projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    // external: {
    //   header: 'My Projects',
    //   // To hide the `External Projects` section, keep it empty.
    //   projects: [
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //   ],
    // },
  },
  seo: {
    title: 'Portfolio of Nick Pasquariello',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'npasquariello',
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
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'npasquariello@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/14bvZZvppltgbHMsEME_eh4OGHN6sxOXB/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  experiences: [
    {
      company: 'Guzman y Gomez Sunshine Coast',
      position: 'Software Developer Consultant',
      from: 'November 2024',
      to: 'Present',
      companyLink: 'https://reshift.online',
    },
    {
      company: 'Mojo Soup',
      position: 'Software Developer',
      from: 'November 2023',
      to: 'November 2024',
      companyLink: 'https://www.mojosoup.com.au/',
    },
    {
      company: 'Studio 71',
      position: 'Front End Software Developer',
      from: 'February 2022',
      to: 'July 2023',
      companyLink: 'https://www.studio71.com/',
    },
    {
      company: 'Degreed',
      position: 'Front End Software Developer',
      from: 'March 2020',
      to: 'February 2022',
      companyLink: 'https://degreed.com/',
    },
    {
      company: 'Adepto',
      position: 'Front End Software Engineer',
      from: 'October 2018',
      to: 'March 2020',
    },
  ],
  educations: [
    {
      institution: 'Coder Academy',
      degree: 'Higher Education Diploma of Information Technologies',
      from: 'February 2018',
      to: 'August 2018',
      link: 'https://coderacademy.edu.au/',
    },
    {
      institution: 'Georgia Institute of Technology',
      degree: 'B.S. in Mechanical Engineering',
      from: 'August 2011',
      to: 'May 2015',
      link: 'https://www.gatech.edu/',
    },
  ],
  certifications: [],
  community: [
    {
      // year: 'March 2022',
      name: 'Out at Degreed Events Coordinator',
      body: 'LGBTQ+ Employee BRG',
      description:
        'Working with like minded individuals to create a safe and inclusive environment to work in. Create events to educate, celebrate, and create understanding around LGBT+ community. Nominated for a Diversity, Inclusion, & Belonging Award',
    },
  ],
  publications: [
    // {
    //   title: 'Reshift',
    //   conferenceName: '',
    //   journalName: 'Shift Manager Progress App',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://reshift.online',
    //   description:
    //     'Web app to score & track shift managers performance, gamifying the experience and significantly improving performance on every metric, while increasing reporting speed and consistency for restaurant managers.',
    // },
  ],
  featuredProjects: [
    {
      title: 'Reshift - Shift Manager Progress App',
      company: 'Guzman y Gomez Sunshine Coast',
      description:
        'Web app to score & track shift managers performance, gamifying the experience and significantly improving performance on every metric, while increasing reporting speed and consistency for restaurant managers.',
      skills: [
        'Typescript',
        'React',
        'Supabase',
        'react-router-dom',
        'Material UI',
        'MUI X',
      ],
      imageUrl: 'reshiftIcon',
      link: 'https://reshift.online',
    },
    {
      title: 'Green & Me',
      company: 'Personal Project',
      description:
        "Web app to score and track one's impact funding fossil fuels based on where their money is kept. This combines my love for activism and the environment. Designed for mobile first.",
      skills: [
        'Javascript',
        'React',
        'Firebase',
        'react-router-dom',
        'Redux',
        'Material UI',
      ],
      imageUrl: 'greenAndMeIcon',
      link: 'https://greenand.me/',
    },
  ],
  skills: {
    languages: [
      { title: 'JavaScript' },
      { title: 'TypeScript' },
      { title: 'HTML' },
      { title: 'CSS/SCSS/SASS' },
      { title: 'Liquid' },
      { title: 'Ruby' },
    ],
    frameworks: [
      { title: 'React/React Native' },
      { title: 'Angular/AngularJS' },
      { title: 'Vue' },
      { title: 'Next.js' },
      { title: 'Ruby on Rails' },
    ],
    design: [{ title: 'Sketch' }, { title: 'Figma' }],
    styling: [
      { title: 'Material UI' },
      { title: 'Semantic UI' },
      { title: 'Fluent UI' },
      { title: 'Tailwind CSS' },
      { title: 'CSS Modules' },
      { title: 'BEM Methodology' },
      { title: 'Bootstrap' },
      { title: 'Styled Components' },
    ],
    'Charts & Graphics': [
      { title: 'D3.js' },
      { title: 'Highcharts' },
      { title: 'ApexCharts' },
      { title: 'AG Charts' },
      { title: 'MUI X' },
      { title: 'Recharts' },
    ],
    packages: [
      { title: 'tanstack/react-query' },
      { title: 'react-router-dom' },
      { title: 'react-hook-form' },
      { title: 'redux' },
      { title: 'ag-grid' },
      { title: 'yup' },
      { title: 'react-big-calendar' },
      { title: 'lodash' },
    ],
    databases: [
      { title: 'Azure' },
      { title: 'Supabase' },
      { title: 'Firebase' },
      { title: 'MongoDB' },
      { title: 'PostgreSQL' },
      { title: 'SQLite' },
    ],
    platforms: [
      { title: 'Atlassian/Jira' },
      { title: 'GitHub' },
      { title: 'GitLab' },
      { title: 'Bitbucket' },
      { title: 'Power BI/Sharepoint' },
      { title: 'Hubspot' },
      { title: 'Squarespace' },
    ],
  },
  professionalProjects: [
    {
      title: 'Medical Timesheet App',
      company: 'Mojo Soup',
      description:
        'Green field time sheeting solution to replace manual timesheet management. This app was built for internal and contract medical shift workers to report work hours to manager, giving them the ability to reject or approve and track billable hours across multiple projects.',
      skills: [
        'Typescript',
        'React',
        'react-big-calendar',
        'ag-grid',
        'Azure',
        'Material UI',
      ],
    },
    {
      title: 'Disaster Reporting Portal',
      company: 'Mojo Soup',
      description:
        "Custom Google Maps component that uses the metadata from user's uploaded photos to position them on the map. The component can upload hundreds of photos at once with the ability to drag and drop them into a drop zone. Users can view photos side by side in draggable modals to compare pre and post road repairs, measure distances between locations, and even display them in street view.",
      skills: [
        'Typescript',
        'React',
        'Google Maps Api',
        'Material UI',
        'AG Grid',
        'PCF (Power Apps Component Framework)',
      ],
    },
    {
      title: 'Digital Delivery Portal',
      company: 'Mojo Soup',
      description:
        'Led the rebuild of an older AngularJS app into React version 18, creating custom reusable components, such as a form builder, to speed of development time. Implemented colocation file structure and atomic design to increase scalability for when the rest of the application is ready for migration.',
      skills: [
        'Typescript',
        'React',
        'AngularJS',
        'Material UI',
        'AG Grid',
        'TanStack Query',
        'Tailwind CSS',
        'SharePoint',
      ],
    },
    {
      title: 'Report Once Solution',
      company: 'Mojo Soup',
      description:
        'Custom react app to track and report strategic initiatives for Queensland Health. Led rewrite of application to make it responsive for all screen sizes, while improving reporting capabilities.',
      skills: [
        'Typescript',
        'React',
        'Material UI',
        'AG Grid',
        'TanStack Query',
        'SharePoint',
      ],
    },
    {
      title: 'ChatGPT Messaging Interface',
      company: 'Studio 71',
      description:
        'Built messaging interface for users to be able to ask metrics questions to retrofitted ChatGPT and receive back search prompts and links.',
      skills: ['Javascript', 'React', 'ChatGPT', 'SemanticUI'],
    },
    {
      title: 'Search Filters Overhaul',
      company: 'Studio 71',
      description:
        'Built reusable filter component to bring uniformity to styles and functionality, deleting over 30 redundant style sheets and implementing new pinning feature to set favorites in local storage to reduce workload of backend team.',
      skills: ['Javascript', 'React', 'CSS Modules'],
    },
    {
      title: 'Profile Overview Page',
      company: 'Degreed',
      description:
        'Summarizing user’s skills, experiences, achievements, and learnings into one central page. Data visualization of skills progress using Highcharts.',
      skills: ['Angular', 'Typescript', 'Highcharts'],
    },
    {
      title: 'Rebuilt profile, settings, & sign up wizard',
      company: 'Adepto',
      description:
        "Migrating from Angular, my team rebuilt and redesigned the user's profile, settings page, and sign up wizard. Implemented 2 factor authentication in settings. Implemented CV parsing in sign up wizard.",
      skills: ['Javascript', 'React', 'Material UI'],
    },
    {
      title: 'Component Library',
      company: 'Adepto',
      description:
        "Individually created central place for developers to view component's source code and properties to learn how to implement new or existing components into the app. This significantly sped up front end development time especially for new hires.",
      skills: ['Storybook', 'React', 'Material UI'],
    },
    {
      title: 'In App Messaging using Twilio',
      company: 'Adepto',
      description:
        'Created new section in app for instant messaging between users. This greatly increased user’s time in app. This was built using the Twilio API',
      skills: ['Javascript', 'React', 'Twilio'],
    },
  ],
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
    defaultTheme: 'emerald',

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

  enablePWA: true,
};

export default CONFIG;
