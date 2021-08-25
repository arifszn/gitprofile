module.exports = {
    github: {
        username: 'arifszn',
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // forked projects will not be displayed if set to true
            projects: [
                
            ]
        }
    },
    blog: {
        source: 'dev.to', // medium | dev.to
        username: 'arifszn',
        limit: 5 // How many posts to display. Max is 10.
    },
    social: {
        linkedin: 'ariful-alam',
        twitter: 'arif_swozon',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://www.arifszn.com',
        email: 'contact@arifszn.com'
    },
    skills: [
        'PHP',
        'Laravel',
        'JavaScript',
        'React.js',
        'Node.js',
        'Tailwind',
        'Antd',
        'CSS',
        'Git',
        'Mysql',
        'Jquery',
    ],
    experiences: [
        { 
            company: 'Orangetoolz - My Offer 360 Degree',
            position: 'Jr. Full Stack Engineer',
            from: 'July 2019',
            to: 'Present'
        },
        { 
            company: 'Techvillage',
            position: 'Jr. Software Engineer',
            from: 'January 2019',
            to: ' June 2019'
        }
    ],
    education: [
        { 
            institution: 'American International University-Bangladesh',
            degree: 'Bachelor of Science',
            from: '2015',
            to: '2019'
        },
        { 
            institution: 'Cantonment College, Jessore',
            degree: 'Higher Secondary Certificate (HSC)',
            from: '2012',
            to: '2014',
        },
        { 
            institution: 'Chowgacha Shahadat Pilot High School',
            degree: 'Secondary School Certificate (SSC)',
            from: '2007',
            to: '2012'
        }
    ],
    themeConfig: {
        default: 'light',

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