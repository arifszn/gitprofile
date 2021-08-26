<p align="center">
  <a href="http://arifszn.github.io/ezprofile" target="_blank">
    <img src="https://raw.githubusercontent.com/arifszn/ezprofile/main/public/logo.png" alt="ezProfile" title="ezProfile" width="80">
  </a>
</p>

<h1 align="center">ezProfile</h1>
<p align="center">A modern, responsive and customizable portfolio template for Developers!</p>

ezProfile is an easy-to-customize personal dev portfolio template that is created with React.js. When you manage the code in a GitHub repository, it will automatically render a webpage with the owner's profile information, including a photo, bio, and repositories. Also it includes space to highlight your details, job history, education history, skills and recent blog posts.

It's all possible using [GitHub API](https://developer.github.com/v3/) (for automatically populating your website with content) and [Article-api](https://github.com/arifszn/article-api) (for fetching recent blog posts).

✔️ 21 Themes\
✔️ Google Analytics\
✔️ Meta Tags\
✔️ Avatar and Bio\
✔️ Social Links\
✔️ Skills\
✔️ Education\
✔️ Experience\
✔️ Projects\
✔️ Blog Posts

To view a live example, **[click here](https://arifszn.github.io/ezprofile)**.


## 🛠 Installation & Set Up

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

<br/>

1. **[Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo)** the repo so you have your own project to customize. A "fork" is a copy of a repository.

2. Once you've found a home for your forked repository, **[clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)** it.

3. Change into your new directory.
```sh
cd ezprofile
```

4. Install dependencies
```sh
npm install
```

5. Start the development server
```sh
npm start
```

## 🎨 Customization

All the magic happens in file <code>src/config</code>. Open it and modify it according to your preference.

These are the default values:

<details>
<summary>config.js</summary>

```js
// config.js
module.exports = {
  github: {
    username: 'arifszn', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
    }
  },
  blog: {
    // Display blog posts from your medium or dev.to account. (Optional)
    source: 'dev.to', // medium | dev.to
    username: 'arifszn',
    limit: 5 // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id
    id: '' // UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  social: {
    linkedin: '',
    twitter: '',
    facebook: '',
    dribbble: '',
    behance: '',
    medium: '',
    devto: '',
    website: '',
    email: ''
  },
  skills: [
    'JavaScript',
    'React.js',
  ],
  experiences: [
    {
      company: 'Company name 1',
      position: 'Software Engineer',
      from: 'July 2019',
      to: 'Present'
    },
    {
      company: 'Company name 2',
      position: 'Jr. Software Engineer',
      from: 'January 2019',
      to: ' June 2019'
    }
  ],
  education: [
    {
      institution: 'Institution name 1',
      degree: 'Bachelor of Science',
      from: '2015',
      to: '2019'
    },
    {
      institution: 'Institution name 2',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2012',
      to: '2014',
    }
  ],
  themeConfig: {
    default: 'light',

    // Hides the theme change switch
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
```
</details>


### Themes

Themes