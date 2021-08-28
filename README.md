<p align="center">
  <a href="http://arifszn.github.io/ezprofile" target="_blank">
    <img src="https://arifszn.github.io/assets/img/hosted/ezprofile/logo.png" alt="ezProfile" title="ezProfile" width="80">
  </a>
</p>

<h1 align="center">ezProfile</h1>
<p align="center">A modern, responsive and customizable portfolio template for Developers!</p>
<p align="center">https://arifszn.github.io/ezprofile</p>

<br/>

<p align="center">
    <a href="https://arifszn.github.io/ezprofile">
        <img src="https://arifszn.github.io/assets/img/hosted/ezprofile/preview.gif" width="60%" alt="Preview"/>
    </a>
    <br/>
    <a href="#arifszn"><img src="https://arifszn.github.io/assets/img/drop-shadow.png" width="60%" alt="Shadow"/></a>
</p>

**ezProfile** is an easy-to-customize personal dev portfolio template that is created with React.js. When you manage the code in a GitHub repository, it will automatically render a webpage with the owner's profile information, including a photo, bio, and repositories. Also, it includes space to highlight your details, job history, education history, skills, and recent blog posts.

It's all possible using [GitHub API](https://developer.github.com/v3/) (for automatically populating your website with content) and [Article-api](https://github.com/arifszn/article-api) (for fetching recent blog posts).

✓ [21 Themes](#themes)\
✓ [Google Analytics](#google-analytics)\
✓ [Meta Tags](#meta-tags)\
✓ [Avatar and Bio](#avatar-and-bio)\
✓ [Social Links](#social-links)\
✓ [Skills](#skills)\
✓ [Experience](#experience)\
✓ [Education](#education)\
✓ [Projects](#projects)\
✓ [Blog Posts](#blog-posts)

To view a live example, **[click here](https://arifszn.github.io/ezprofile)**.


## 🛠 Installation & Set Up

These instructions will get you a copy of the project up and running on your local machine.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.


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

All the magic happens in the file <code>src/config.js</code>. Open it and modify it according to your preference.

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

There are 21 themes available that can be selected from the dropdown. 

The default theme can be specified.

```js
// config.js
module.exports = {
  // ...
  themeConfig: {
    default: 'light',
    // ...
  }
}
```

![Theme Dropdown](https://arifszn.github.io/assets/img/hosted/ezprofile/themes-1.png)

Here are some screenshots of different themes.\
<br/>
![Themes](https://arifszn.github.io/assets/img/hosted/ezprofile/themes-2.png)\
<br/>
![Themes](https://arifszn.github.io/assets/img/hosted/ezprofile/themes-3.png)\
<br/>
![Themes](https://arifszn.github.io/assets/img/hosted/ezprofile/themes-4.png)\
<br/>
![Themes](https://arifszn.github.io/assets/img/hosted/ezprofile/themes-5.png)\
<br/>
![Themes](https://arifszn.github.io/assets/img/hosted/ezprofile/themes-6.png)\
<br/>
![Themes](https://arifszn.github.io/assets/img/hosted/ezprofile/themes-7.png)


### Google Analytics

ezFolio supports both GA3 and GA4. If you do not want to use Google Analytics, keep the <code>id</code> empty.
```js
// config.js
module.exports = {
  // ...
  googleAnalytics: {
    id: ''
  },
}
```

Besides tracking visitors, ezFolio will track click events on projects and blog posts, and send them to Google Analytics.\
<br/>
![Google Analytics](https://www.arifszn.com/assets/img/hosted/ezprofile/event.png)


### Meta Tags

Meta tags will be auto-generated from configs dynamically. However, you can also manually add meta tags in <code>public\index.html</code>


### Avatar and Bio

Your github avatar and bio will be displayed here.\
<br/>
![Avatar Bio](https://arifszn.github.io/assets/img/hosted/ezprofile/avatar-card.png)


### Social Links

ezProfile supports linking your social media services you're using, including LinkedIn, Twitter, Facebook, Dribbble, Behance, Medium, dev.to, personal website, and email.
```js
// config.js
module.exports = {
  // ...
  social: {
    linkedin: 'ariful-alam',
    twitter: 'arif_swozon',
    facebook: '',
    dribbble: '',
    behance: '',
    medium: '',
    devto: '',
    website: 'https://arifszn.github.io',
    email: ''
  },
}
```


### Skills

To showcase your skills provide them here.
```js
// config.js
module.exports = {
  // ...
  skills: [
    'JavaScript',
    'React.js',
  ],
}
```

Empty array will hide the skills section.


### Experience

Provide your job history in <code>experiences</code>.
```js
// config.js
module.exports = {
  // ...
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
}
```

Empty array will hide the experience section.


### Education

Provide your education history in <code>education</code>.
```js
// config.js
module.exports = {
  // ...
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
}
```

Empty array will hide the education section.


### Projects

Your public repo from github will be displayed here automatically. You can limit how many projects do you want to be displayed. Also, you can hide forked or specific repo.

```js
// config.js
module.exports = {
  // ...
  github: {
    username: 'arifszn',
    sortBy: 'stars',
    limit: 8,
    exclude: {
      forks: false,
      projects: ['my-project1', 'my-project2']
    }
  },
}
```

### Blog Posts

If you have [medium](https://medium.com) or [dev.to](https://dev.to) account, you can show your recent blog posts in here just by providing your medium/dev.to username. You can limit how many posts to display (Max is <code>10</code>).

```js
// config.js
module.exports = {
  // ...
  blog: {
    source: 'dev.to',
    username: 'arifszn',
    limit: 5
  },
}
```

![Blog](https://arifszn.github.io/assets/img/hosted/ezprofile/blog.png)

The posts are fetched by [Article-api](https://github.com/arifszn/article-api).


## 🚀 Deploy

Once you are done with your setup and have completed all steps above, you need to put your website online! The fastest approach is to use [GitHub Pages](https://pages.github.com) which is completely free.

**1. Github Pages:**
  - Rename your forked repository to <code>username.github.io</code> in github, where <code>username</code> is your GitHub username (or organization name).
  - Open <code>package.json</code>, and change <code>homepage</code>'s value to <code>https://username.github.io</code>.
  
    ```js
    // package.json
    {
      // ...
      "homepage": "https://username.github.io",
    }
    ```

  - Run <code>npm run deploy</code>.
  - If you see only <code>README</code> at <code>username.github.io</code>, be sure to change your GitHub Page's source to <code>gh-pages</code> branch. See [how to](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

    Your personal portfolio will be live at <code>username.github.io</code>. For more info, visit [here](https://create-react-app.dev/docs/deployment/#github-pages).

<br/>

**2. Other:** You can also host your website to Netlify, Vercel, Heroku, or other popular services. Please refer to this [doc](https://create-react-app.dev/docs/deployment) for a detailed deployment guide.


## 📢 Please Read

I intend to keep my works open source. Please do not discourage me by claiming this work by copying it as your own or removing the footer notice.


## 💖 Support

If you are using this project and happy with it or just want to encourage me to continue creating stuff, you can do it by just starring and sharing the project.


## 💡 Contributing

Any contributors who want to make this website better can make contributions, which will be greatly appreciated. To contribute, clone this repo locally and commit your code to a new branch. Feel free to create an issue or make a pull request.

## 📄 License

ezProfile is licensed under the [Apache-2.0 License](https://github.com/arifszn/ezprofile/blob/main/LICENSE).
