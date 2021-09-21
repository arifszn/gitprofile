// config.js
module.exports = {
    github: {
        username: 'abusayed0206', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'abusayed0206',
        twitter: 'abusayed0206',
        facebook: 'lrsayedofficial',
        dribbble: '',
        behance: '',
        medium: 'abusayed0206',
        devto: 'abusayed0206',
        website: 'https://abusayed.dev',
        phone: '',
        email: 'contact@abusayed.dev'
    },
    skills: [
        'PHP',
        'Laravel',
        'JavaScript',
        'React.js',
        'Vue.js',
        'Node.js',
        'Jquery',
        'MySQL',
        'Git',
        'CSS',
        'Antd',
        'Tailwind',
        'Bootstrap',
    ],
    experiences: [
        { 
            company: 'Privacy Bangladesh',
            position: 'Idle⚠️',
            from: 'August 2021',
            to: 'Present'
        },
        { 
            company: 'International Youth Mathe Challenge',
            position: 'Campus Ambassador',
            from: 'February 2019',
            to: 'Present'
        },
        { 
            company: 'American Concrete Institution(ACI)',
            position: 'Student Member',
            from: 'April 2020',
            to: 'Present'
        }
    ],
    education: [
        { 
            institution: 'Chittagong University of Engineering & Technology-Bangladesh',
            degree: 'Bachelor of Science(Civil Engineering)',
            from: 'November 2019',
            to: 'Present'
        },
        { 
            institution: 'Comilla Victoria Govt. College, Cumilla',
            degree: 'Higher Secondary Certificate (HSC)',
            from: '2017',
            to: '2019',
        },
        { 
            institution: 'Bhagaban Govt. High School, Brahmanpara, Cumilla',
            degree: 'Secondary School Certificate (SSC)',
            from: '2012',
            to: '2017'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: 'abusayed0206',
        limit: 2 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: '' // Please remove this and use your own tag id
    },
    themeConfig: {
        default: 'dark',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

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
            'dracula'
        ]
    }
}
