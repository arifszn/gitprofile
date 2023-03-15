// gitprofile.config.js

const config = {
  github: {
    username: 'Prakash4844', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['Prakash4844', 'My-Dotfiles', 'Version-Control-with-git-final-project', 'Version-Control-with-git-final-project', 'My-KDE-Config-Backup', 'Test-Hugo-Site', 'Get-Audio-Metadata', 'Pop-up-Login-form', 'First-.NET-MAUI-APP', 'My-First-Ever-Webpage', 'Git_Practice', 'Web-Devlopment-by-Angela-Yu', 'BCA-Sem-5-Minor-Project-Synopsis', 'JAVA_Assignments_codes', 'My_Bookmarks', 'Razor-App-with-ASP.NET-Core', 'Simple-Console-Calculator-Library-in-CSharp', 'Simple-Console-Calculator-in-CSharp', 'CSharp_Fundamentals', 'Sample-C-CODES', 'CPP_Codes', 'Java_Practice', 'Practice-Programming-Question', 'SSTP-Footer', 'SSTP-Navbar', 'Sample-CV-using-HTML-And-CSS-Dark', 'Sample-CV-using-HTML-And-CSS', 'HTMLCV', 'CPP-Computer-Graphic-and-Multimedia-CGMA-Lab-File', 'MyCode-For-CodeWithHarry-Python-video', 'Data-Structures-and-Algorithms-Course-by-Abdul-Bari', 'BCA-Sem3-CPP-LAB-File-Questions', 'Data-Structure-and-Algorithm-using-C-and-CPP-LAB-FILE'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'prakash4844',
    twitter: 'Prakash53574940',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: 'ZAPHKILL',
    website: 'prakash4844.github.io',
    phone: '',
    email: 'prakashsahu0518@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/11rt4an2hokUcH1wP2Gw_gS-__eSxJBHM/view?usp=drivesdk', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Git',
    'Github',
    'Github Actions',
    'C',
    'C++',
    'C#',
    '.NET',
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'Jquery',
    'Bootstrap',
    'PHp',
    'markdown',
    'Hugo',
    'Java',
    'Unity Engine',
    'Unread Engine',
    'Vim',
    'Linux',
    'Windows',
    'Bash',
    'MySQL',
    'SQLite',
    'Photoshop',
    'Premier Pro',
    'SVG',
  ],
  experiences: [
    {
      company: 'C# Corner',
      position: 'Technical Content Writer',
      from: 'March 2022',
      to: 'April 2022',
      companyLink: 'https://www.c-sharpcorner.com/',
    },
    /*{
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    }, */
  ],
  certifications: [
    {
      name: 'Introduction to Software, Programming, and Databases',
      body: 'IBM',
      year: 'March 2023',
      link: 'https://www.coursera.org/learn/introduction-software-programming-and-databases'
    },
    {
      name: 'Introduction to Hardware and Operating Systems',
      body: 'IBM',
      year: 'March 2023',
      link: 'https://coursera.org/share/fb8f2d6ec40aeb756e88945b34279104'
    },
    {
      name: 'Version Control with Git',
      body: 'Atlassian',
      year: 'October 2022',
      link: 'https://coursera.org/share/104e9d39200bcee073887781d86ed1aa'
    },
    {
      name: 'Version Control',
      body: 'META',
      year: 'September 2022',
      link: 'https://coursera.org/share/51789acb16511d96d99a58b0cfca30df'
    },
    {
      name: 'Game Design and Development 1',
      body: 'Michigan State University',
      year: 'July 2022',
      link: 'https://coursera.org/share/3cc219bac94d1226b8af9d6a91315f46'
    }
  ],
  education: [
    {
      institution: 'Bachelors of Computer Applications',
      degree: 'Degree',
      from: '2020',
      to: '2023',
    },
    /* {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    }, */
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Let\'s Learn Linux',
      description:
        'It\'s a FOSS project to help people get familiar with Linux environment, it is a long term project and is aiming to be available in multiple locales.',
      imageUrl: 'https://raw.githubusercontent.com/Prakash4844/Let-s-Learn-Linux/f480617b269d33b5e156351c67d8137de0a3b5f7/static/images/fevicon.svg',
      link: 'https://prakash4844.github.io/Let-s-Learn-Linux/',
    },
    {
      title: 'Dressingnity',
      description:
        'A Dummy E-Commerce website',
      imageUrl: 'https://raw.githubusercontent.com/Prakash4844/Dressingnity-Ecommerce-Website/de36eb18936d18ca33ef3446d785017f04f6d62a/Images/SVG%20Samples/Dressingnity%20(LOGO-final).svg',
      link: 'https://dressingnity.rf.gd/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
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
    defaultTheme: 'Dracula',

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
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,
};

export default config;
