// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ankurvasani2', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    // github: {
    //   display: true, // Display GitHub projects?
    //   header: 'Github Projects',
    //   mode: 'automatic', // Mode can be: 'automatic' or 'manual'
    //   automatic: {
    //     sortBy: 'stars', // Sort projects by 'stars' or 'updated'
    //     limit: 8, // How many projects to display.
    //     exclude: {
    //       forks: false, // Forked projects will not be displayed if set to true.
    //       projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
    //     },
    //   },
    //   manual: {
    //     // Properties for manually specifying projects
    //     projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
    //   },
    // },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'FridgeMate',
          description:
            "An innovative Intelligent Refrigerator System that leverages the power of Object Detection and Machine Learning to revolutionize home food management. The system's Object Detection capabilities enable automatic scan of internal contents, providing an accurate inventory of stored items. Utilizing machine learning algorithms, the system then suggests recipes based on the scanned items. Furthermore, it predicts the shelf life of products and alerts the user through a mobile app. Additionally, the system automates the creation of frequently used item lists, facilitating seamless online shopping. This integrated approach offers a smart, efficient, and user-friendly solution for organizing, planning, notifying and optimizing household food management, promising to enhance convenience and reduce wastage.",
          imageUrl:
            "https://drive.google.com/file/d/1C0TUfoKl3_bNdtiXz3Uc0xg2rdXZGC13/view?usp=drive_link",
          link: '#',
        },
        {
          title: 'Driver Behaviour analysis and accident prevention',
          description:
            "AI/ML implementation for driver face detection and analysis such as drowsiness detection, yawn detection, seatbelt detection, cigarette smoking detection, accident detection etc. these data was used for automated analysis and provide notification and charge fines to the driver if he commits any crime. in case of emergency the drivers family and the nearest emergency services are informed with drivers precise location and images.",
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '#',
        },
        {
          title: 'E-commerce Site with Admin Panel',
          description:
            "E-commerce electronic sales site with admin panel for controlling users and orders",
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '#',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ankur Vasani',
    description: "Ankur Vasani is a passionate engineering student specializing in Information Technology (IT) with a strong desire to contribute to the digital landscape. He is eager to leverage his technical skills, problem-solving abilities, and innovative mindset to drive impactful solutions in the ever-evolving tech industry. Committed to continuous learning and growth, Ankur seeks opportunities to gain practical experience and collaborate with like-minded professionals. He is open to networking, mentorship, and exploring new horizons within the IT field. Ankur was an intern at Adani Power and has completed his diploma in Information Technology from SVKM's Shri Bhagubhai Mafatlal Polytechnic. He has also published two research papers.",
    imageURL: '',
  },
  social: {
    linkedin: 'ankurmvasani',
    researchGate: '',
    facebook: 'ankurvasani25',
    instagram: 'ankurvasani_25',
    threads: 'ankurvasani_25',
    youtube: 'ankurvasani7903', // example: 'pewdiepie'
    website: 'https://ankurvasani2.github.io',
    email: 'ankurvasani2585@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Adani Power',
      position: 'Web Development Intern',
      from: 'June 2023',
      to: 'July 2023',
      companyLink: 'https://adanipower.com',
    },
    {
      company: 'Code Clause',
      position: 'Python Developer Intern',
      from: 'July 2023',
      to: 'August 2023',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Paper Publication @ Multicon-W 2024 International Conference On Intelligent Computing And Networking ',
      body: 'Thakur College of Engineering and Technology (TCET)',
      year: 'Febuary 2024',
      link: 'https://example.com',
    },
    {
      name: "Tantra Utsav 2024's Technical Paper Presentation",
      body: 'Thakur College of Engineering and Technology (TCET)',
      year: 'Febuary 2024',
      link: 'https://example.com',
    },
    {
      name: "Winner @ TechnoVanza m-Indicator presents Hackathon 2024",
      body: 'Veermata Jijabai Technological Institute (VJTI)',
      year: 'January 2024',
      link: 'https://example.com',
    },
    {
      name: "Mastering Data Structure and Algorithms Using C++",
      body: 'Udemy',
      year: 'November 2022',
      link: 'https://www.udemy.com/certificate/UC-ce01704d-e002-41af-8b8f-e9dfe1e9b9f8/',
    },
  ],
  educations: [
    {
      institution: "SVKM's Shri Bhagubhai Mafatlal Polytechnic",
      degree: 'Diploma in Information Techonology',
      from: '2021',
      to: '2024',
    },
    {
      institution: 'HMP High School',
      degree: 'SSC',
      from: '2011',
      to: '2021',
    },
    
  ],
  publications: [
    {
      title: 'Revolutionizing Traditional Supermarkets: A Comprehensive Solution for Enhancing Efficiency, Security and Customer Satisfaction',
      conferenceName: "ACM's 2024 Sixteenth International Conference on Contemporary Computing (IC3) by Jaypee Institute of Information Technology Noida, Louisiana Tech University, USA and University of Florida, USA . · Jul 1, 2024",
      journalName: '',
      authors: 'Ankur Vasani, Om Tanna, Krishna Thakkar, Malav Gotecha',
      link: '',
      description:
        "Abstract: This research proposes an Artificially Intelligent enabled Smart Supermarket System for enhanced efficiency, security and reduces man power as compared to traditional Supermarkets. In order to ensure a perfect omnichannel shopping experience the system uniquely includes an Artificially Intelligent model. Customers can scan items on the go with the app in their smartphones, select product variants as required, add the product to their virtual cart and pay online for the total cart value. With the help of YOLOv5 computer vision algorithm, eliminating long checkout queues and manpower the system proves to be revolutionizing the traditional supermarket procedures. Moreover, the system also incorporates the indoor navigation assistance on customer’s app to facilitate easy access and navigation to preferred items. This futuristic solution not only provides valuable insights for business development but also is proven to be more efficient and helpful for customers saving their time and companies resources. Keywords: Omnichannel Shopping, Computer Vision, YOLOv5, Artificial Intelligence.",    },
    {
      title: 'New Frontier in Machine Learning: Revolutionizing Home Food Management using IoT and Object Detection',
      conferenceName: 'MULTICON-W 2024 International Conference on Intelligent Computing and Networking - 2024',
      journalName: '',
      authors: 'Ankur Vasani, Rashmi Kamdar',
      link: '',
      description:
        "Abstract:The proposed paper introduces an innovative Intelligent Refrigerator System that leverages the power of Object Detection and Machine Learning to revolutionize home food management. The system's Object Detection capabilities enable the refrigerator to scan its contents, providing an accurate inventory of stored items. Utilizing machine learning algorithms, the system then suggests recipes based on the scanned items. Furthermore, it predicts the shelf life of products and alerts the user through a mobile app. Additionally, the system automates the creation of frequently used item lists, facilitating seamless online shopping. This integrated approach offers a smart, efficient, and user-friendly solution for organizing, planning, and optimizing household food management, promising to enhance convenience and reduce wastage. Keywords—Machine Learning, Object Detection.",
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
    defaultTheme: 'Halloween',

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

  enablePWA: true,
};

export default CONFIG;
