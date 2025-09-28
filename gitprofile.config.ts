// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'MohammadSaknini', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/Portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['MohammadSakhnini/Portfolio','MohammadSakhnini/Parkhaus-SE1'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '',
          description:
            `Full stack cross-platform application connecting users based on preferences, location and skills
             and presenting them with challenges via specialized joysticks to compete with one another.
             The application was developed using C#, Xamarin, .Net, and AWS.`,
          imageUrl:
            'https://cdn-icons-png.freepik.com/512/9663/9663087.png',
          link: '',
        },
        {
          title: '',
          description:
            `Web application that offers versatile and user-friendly analytical tools
             for analyzing the latest trends through an interactive graphical user interface,
             while focusing on the analysis of the latest trends in the field of technology emerging
             from research papers and encyclopedic articles.
             The application was developed using Python, Dash, Plotly and Nginx.`,
          imageUrl:
            'https://icons.veryicon.com/png/o/internet--web/common-work-social-mobile-terminals/analysis-trend.png',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Mohammad Saknini',
    description: 'Mohammad Saknini - Computer Scientist and a Machine Learning Engineer',
    imageURL: '',
  },
  social: {
    linkedin: 'mohammad-saknini',
    twitter: '',
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
    email: 'mohammadsakhnini99@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1D3UGEfmPtFMzfnpw-ePeoFKy6JX38X9n/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    {
      'title': "Skills",
      'items': ["Python", "C#", "Java", "SQL", "Javascript",
      "Dash", "Flask", ".Net", "Xamrin", "AWS", "Git", "SonarQube", "Jenkins", "Nginx",
      "Plotly", "Pandas", "Polars", "Scikit-Learn", "Tensorflow", "Keras", "Pytorch", "Spacy", "Gensim",
      "Langchain", "Gradient Boosting Trees", "HPC Clusters", "Linux", "Docker"
    ]
    },
  ],
  experiences: [
    {
      company: 'Fraunhofer Institute for Technological Trend Analysis INT',
      position: 'Data Scientist',
      from: 'Oct 2022',
      to: 'present',
      companyLink: 'https://www.int.fraunhofer.de/',
    },
    {
      company: 'Ayl GMBH',
      position: 'Full Stack Developer',
      from: 'Dec 2021',
      to: 'Aug 2022',
      companyLink: '',
    },
    {
      company: 'E&H GmbH',
      position: 'Data Analyst',
      from: 'Sep 2021',
      to: 'Nov 2021',
      companyLink: '',
    },
    {
      company: 'Whitesheep-IT',
      position: 'Intern',
      from: 'Jul 2020',
      to: 'Aug 2020',
      companyLink: 'https://whitesheep-it.de/',
    },
    {
      company: 'DXC.technology',
      position: 'Intern',
      from: 'Feb 2019',
      to: 'March 2019',
      companyLink: 'https://www.dxcfds.com/',
    },
  ],
  // certifications: [ Cisco, Beruflicher abschluss etc..
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'Hochschule Bonn-Rhein-Sieg',
      degree: 'Masters of Science in Computer Science',
      from: 'Sep 2023',
      to: 'Sep 2025',
    },
    {
      institution: 'Hochschule Bonn-Rhein-Sieg',
      degree: 'Bachelor of Science in Computer Science',
      from: 'Sep 2020',
      to: 'Sep 2023',
    },
    {
      institution: 'Heinrich-Hertz-Europakolleg',
      degree: 'High School Degree',
      from: 'Sep 2016',
      to: 'Jul 2020',
    },
  ],
  publications: [
    {
      title: 'Utilizing the Power of Deep Learning to Evaluate Wikipedia Content',
      conferenceName: '',
      journalName: '',
      authors: 'Mohammad Saknini',
      link: 'https://github.com/Mohammadsaknini/WikipediaTools/blob/main/Thesis.pdf',
      description:
        `Implementation of a machine learning model that evaluates the quality of Wikipedia articles using deep learning 
        techniques based on a varity of features that take into considration not only the textual content but
        rather the structure and history of the article.`
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
    defaultTheme: 'Dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

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
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
