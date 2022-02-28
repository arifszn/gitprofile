// config.js
module.exports = {
    github: {
        username: 'reyeff', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: ['laravel-ecommerce'] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'reynaldieffendi',
        twitter: '',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://reyeff.github.io',
        phone: '',
        email: 'reynaldi.effendi@gmail.com'
    },
    skills: [
        'PHP',
        'Laravel',
        'JavaScript',
        'React.js',
        'Node.js',
        'MySQL',
        'Git',
        'Docker',
        'CSS',
        'Antd',
        'Tailwind',
        'Bootstrap',
        'HTML',
    ],
    experiences: [
        { 
            company: 'Freelancer',
            position: 'Fullstack Developer',
            from: 'September 2017',
            to: 'Present'
        },
        { 
            company: 'PT CICIL Solusi Mitra Teknologi',
            position: 'Ambassador Student',
            from: 'September 2018',
            to: 'Mei 2019'
        }
    ],
    education: [
        { 
            institution: 'University Bina Nusantara',
            degree: 'Bachelor of Teknik Informatika dan Statistik',
            from: '2017',
            to: '2022',
        },
        { 
            institution: 'Sekolah Pilar Indonesia',
            degree: 'IPA',
            from: '2014',
            to: '2017'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: 'reyeff',
        limit: 3 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: '' // Please remove this and use your own tag id or keep it empty
    },
    hotjar: {
        id: '', //  Please remove this and use your own id or keep it empty
        snippetVersion : 6
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
