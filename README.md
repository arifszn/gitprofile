<h1 align="center">GitProfile</h1>
<p align="center">Easy to use portfolio builder for every GitHub user!</p>

<p align="center">
<a href="https://www.npmjs.com/package/gitprofile">
  <img src="https://img.shields.io/npm/v/gitprofile"/>
</a>
<a href="https://github.com/arifszn/gitprofile/blob/main/CONTRIBUTING.md">
  <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"/>
</a>
<a href="https://github.com/arifszn/gitprofile/blob/main/LICENSE">
  <img src="https://img.shields.io/github/license/arifszn/gitprofile"/>
</a>
<a href="https://twitter.com/intent/tweet?text=Check%20out%20the%20portfolio%20builder.%20Create%20an%20automatic%20portfolio%20based%20on%20GitHub%20profile.&url=https://github.com/arifszn/gitprofile&hashtags=javascript,opensource,js,webdev,developers">
  <img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Farifszn%2Fgitprofile"/>
</a>
</p>

<p align="center">
  <a href="https://arifszn.github.io/gitprofile">
      <img src="https://arifszn.github.io/assets/img/hosted/gitprofile/preview.gif" width="60%" alt="Preview"/>
  </a>
  <br/>
  <a href="#arifszn"><img src="https://arifszn.github.io/assets/img/drop-shadow.png" width="60%" alt="Shadow"/></a>
</p>

What if you could create your portfolio in 5 minutes just by providing your GitHub username and even host it without any cost? Do you want to display your skills, job history, education, or even blog posts on your website? Introducing **GitProfile**.

**GitProfile** is an easy to use portfolio builder where you can create a portfolio page automatically by just providing your GitHub username. It is built using React.js on top of Vite.js. But it's not necessary to have knowledge on these to get you started. You can make your own copy with zero coding experience.

**Features:**

✓ [30 Themes](#themes)\
✓ [Google Analytics](#google-analytics)\
✓ [Hotjar](#hotjar)\
✓ [SEO](#seo)\
✓ [Avatar and Bio](#avatar-and-bio)\
✓ [Social Links](#social-links)\
✓ [Skills](#skills)\
✓ [Experience](#experience)\
✓ [Education](#education)\
✓ [Projects](#projects)\
✓ [Blog Posts](#blog-posts)

To view a live example, **[click here](https://arifszn.github.io/gitprofile)**.

![Preview](https://arifszn.github.io/assets/img/hosted/gitprofile/preview.png)

## 🛠 Installation & Set Up

There are two ways to use **GitProfile**.

- Installing as a NPM package.
- Forking this repo.

### Installing as a NPM package

Install via <a href="https://www.npmjs.com/package/gitprofile">NPM</a>

```
npm install gitprofile
```

Then, import the package, import and style and provide the config.

```js
import GitProfile from 'gitprofile';
import 'gitprofile/dist/style.css';

function App() {
  return (
    <GitProfile
      config={{
        github: {
          username: 'arifszn',
        },
      }}
    />
  );
}

export default App;
```

List of all config [here](#-customization).

### Forking this repo

These instructions will get you a copy of the project and deploy your website online!

- **[Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo)** the repo so you have your own project to customize by clicking the fork icon on the top right side. A "fork" is a copy of a repository.
- Rename your forked repository to `username.github.io` in GitHub, where `username` is your GitHub username (or organization name).
- Go to your repo's **Actions** page and enable workflows.

  ![Workflows](https://arifszn.github.io/assets/img/hosted/gitprofile/workflows.png)

- Open `vite.config.js`, and change `base`'s value.

  - If you are deploying to `https://<USERNAME>.github.io/`, set `base` to `'/'`.

  - If you are deploying to `https://<USERNAME>.github.io/<REPO>/`, for example your repository is at `https://github.com/<USERNAME>/<REPO>`, then set `base` to `'/<REPO>/'`.

  ```js
  // vite.config.js
  {
    base: '/',
    // ...
  }
  ```

- Now commit to your **main** branch with your changes.
- The CI/CD pipeline will publish your page at the gh-pages branch automatically.
- Go to your repo's **Settings** -> **Pages** -> **Source** and change the branch to gh-pages and click **save**.
- Your personal portfolio will be live at `username.github.io`.
- Any time you commit a change to the **main** branch, the website will be automatically updated.

If you see only `README` at `username.github.io`, be sure to change your GitHub Page's source to `gh-pages` branch. See [how to](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). Also, if you face any issue rendering the website, double-check the `base` value in the `vite.config.js`.

As this is a vite project, you can also host your website to Netlify, Vercel, Heroku, or other popular services. Please refer to this [doc](https://vitejs.dev/guide/static-deploy.html) for a detailed deployment guide to other services.

## 🎨 Customization

All the magic happens in the file `gitprofile.config.js`. Open it and modify it according to your preference.

```js
// gitprofile.config.js

const config = {
  github: {
    username: 'arifszn', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
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
    phone: '',
    email: '',
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
      degree: 'Bachelor of Science',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution name 2',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2012',
      to: '2014',
    },
  ],
  // Display blog posts from your medium or dev.to account. (Optional)
  blog: {
    source: 'dev.to', // medium | dev.to
    username: 'arifszn',
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
};
```

### Themes

There are 30 themes available that can be selected from the dropdown.

The default theme can be specified.

```js
// gitprofile.config.js
module.exports = {
  // ...
  themeConfig: {
    defaultTheme: 'light',
    // ...
  },
};
```

![Theme Dropdown](https://arifszn.github.io/assets/img/hosted/gitprofile/theme-dropdown.png)

You can create your own custom theme by modifying these values. Theme `procyon` will have the custom styles.

```js
// gitprofile.config.js
module.exports = {
  // ...
  themeConfig: {
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
    // ...
  },
};
```

![Theme Procyon](https://arifszn.github.io/assets/img/hosted/gitprofile/theme-procyon.png)

![Theme Garden](https://arifszn.github.io/assets/img/hosted/gitprofile/theme-garden.png)

![Theme Night](https://arifszn.github.io/assets/img/hosted/gitprofile/theme-night.png)

### Google Analytics

**GitProfile** supports both GA3 and GA4. If you do not want to use Google Analytics, keep the `id` empty.

```js
// gitprofile.config.js
module.exports = {
  // ...
  googleAnalytics: {
    id: '',
  },
};
```

Besides tracking visitors, it will track `click events` on projects and blog posts, and send them to Google Analytics.

### Hotjar

**GitProfile** supports hotjar. If you do not want to use Hotjar, keep the `id` empty.

```js
// gitprofile.config.js
module.exports = {
  // ...
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
};
```

### SEO

Meta tags will be auto-generated from configs dynamically. However, you can also manually add meta tags in `public/index.html`.

### Avatar and Bio

Your avatar and bio will be fetched from GitHub automatically.

### Social Links

You can link your social media services you're using, including LinkedIn, Twitter, Facebook, Dribbble, Behance, Medium, dev.to, personal website, phone and email.

```js
// gitprofile.config.js
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
    phone: '',
    email: '',
  },
};
```

### Skills

To showcase your skills provide them here.

```js
// gitprofile.config.js
module.exports = {
  // ...
  skills: ['JavaScript', 'React.js'],
};
```

Empty array will hide the skills section.

### Experience

Provide your job history in `experiences`.

```js
// gitprofile.config.js
module.exports = {
  // ...
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
};
```

Empty array will hide the experience section.

### Education

Provide your education history in `education`.

```js
// gitprofile.config.js
module.exports = {
  // ...
  education: [
    {
      institution: 'Institution name 1',
      degree: 'Bachelor of Science',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution name 2',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2012',
      to: '2014',
    },
  ],
};
```

Empty array will hide the education section.

### Projects

Your public repo from GitHub will be displayed here automatically. You can limit how many projects do you want to be displayed. Also, you can hide forked or specific repo.

```js
// gitprofile.config.js
module.exports = {
  // ...
  github: {
    username: 'arifszn',
    sortBy: 'stars',
    limit: 8,
    exclude: {
      forks: false,
      projects: ['my-project1', 'my-project2'],
    },
  },
};
```

### Blog Posts

If you have [medium](https://medium.com) or [dev.to](https://dev.to) account, you can show your recent blog posts in here just by providing your medium/dev.to username. You can limit how many posts to display (Max is `10`).

```js
// gitprofile.config.js
module.exports = {
  // ...
  blog: {
    source: 'dev.to',
    username: 'arifszn',
    limit: 5,
  },
};
```

![Blog](https://arifszn.github.io/assets/img/hosted/gitprofile/blog.png)

The posts are fetched by [Article-api](https://github.com/arifszn/article-api).

## 💖 Support

<a href="https://www.buymeacoffee.com/arifszn" target="_blank">
  <img src="https://raw.githubusercontent.com/arifszn/arifszn/main/assets/bmc-button.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>

## 💡 Contribute

To contribute, see the [Contributing guide](https://github.com/arifszn/gitprofile/blob/main/CONTRIBUTING.md).

## 📄 License

**GitProfile** is licensed under the [Apache-2.0 License](https://github.com/arifszn/gitprofile/blob/main/LICENSE).
