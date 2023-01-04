<br/>

<p align="center">
  <img src="https://user-images.githubusercontent.com/45073703/177566625-9b84e793-4559-4475-ba54-8d3d5f4123d4.png" width="35%">

  <h4 align="center">Easy to use automatic portfolio builder for every GitHub user!</h4>

  <p align="center">
    <a href="https://codeclimate.com/github/arifszn/gitprofile/maintainability">
      <img src="https://api.codeclimate.com/v1/badges/c60f42d7d0b61bd33e98/maintainability" />
    </a>
    <a href="https://github.com/arifszn/gitprofile/actions/workflows/test-deploy.yml">
      <img src="https://github.com/arifszn/gitprofile/actions/workflows/test-deploy.yml/badge.svg" />
    </a>
    <a href="https://github.com/arifszn/gitprofile/issues">
      <img src="https://img.shields.io/github/issues/arifszn/gitprofile"/>
    </a>
    <a href="https://github.com/arifszn/gitprofile/stargazers">
      <img src="https://img.shields.io/github/stars/arifszn/gitprofile"/>
    </a>
    <a href="https://github.com/arifszn/gitprofile/network/members">
      <img src="https://img.shields.io/github/forks/arifszn/gitprofile"/>
    </a>
    <a href="https://github.com/arifszn/gitprofile/blob/main/package-lock.json">
      <img src="https://img.shields.io/snyk/vulnerabilities/github/arifszn/gitprofile"/>
    </a>
    <a href="https://github.com/arifszn/gitprofile/blob/main/CONTRIBUTING.md">
      <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"/>
    </a>
    <a href="https://github.com/arifszn/gitprofile/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/arifszn/gitprofile"/>
    </a>
    <a href="https://www.buymeacoffee.com/arifszn">
      <img src="https://img.shields.io/badge/sponsor-buy%20me%20a%20coffee-yellow?logo=buymeacoffee"/>
    </a>
    <a href="https://twitter.com/intent/tweet?text=Check%20out%20the%20portfolio%20builder.%20Create%20an%20automatic%20portfolio%20based%20on%20GitHub%20profile.&url=https://github.com/arifszn/gitprofile&hashtags=javascript,opensource,js,webdev,developers">
      <img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Farifszn%2Fgitprofile"/>
    </a>
  </p>

  <p align="center">
    <a href="https://arifszn.github.io/gitprofile">View Demo</a>
    ·
    <a href="https://github.com/arifszn/gitprofile/issues">Report Bug</a>
    ·
    <a href="https://github.com/arifszn/gitprofile/discussions">Request Feature</a>
  </p>
</p>

<p align="center">
  <a href="https://arifszn.github.io/gitprofile">
    <img src="https://arifszn.github.io/assets/img/hosted/gitprofile/preview.gif" alt="Preview" width="60%"/>
  </a>
  <br/>
  <a href="#arifszn"><img src="https://arifszn.github.io/assets/img/drop-shadow.png" width="50%" alt="Shadow"/></a>
</p>

**GitProfile** is an easy to use portfolio builder where you can create a portfolio page automatically by just providing your GitHub username. It is built using React.js on top of Vite. But it's not necessary to have knowledge on these to get you started. You can make your own copy with zero coding experience.

**Features:**

✓ [Easy to Setup](#-installation--setup)  
✓ [30 Themes](#themes)  
✓ [Google Analytics](#google-analytics)  
✓ [Hotjar](#hotjar)  
✓ [SEO](#seo)  
✓ [Avatar and Bio](#avatar-and-bio)  
✓ [Social Links](#social-links)  
✓ [Skill Section](#skills)  
✓ [Experience Section](#experience)  
✓ [Certification Section](#certifications)  
✓ [Education Section](#education)  
✓ [Projects Section](#projects)  
✓ [Blog Posts Section](#blog-posts)

To view a live example, **[click here](https://arifszn.github.io/gitprofile)**.

Or try it **[online](https://stackblitz.com/edit/gitprofile)**.

<p align="center">
  <img src="https://arifszn.github.io/assets/img/hosted/gitprofile/themes.png" alt="Themes">
</p>

## 🎉 Thank you for the 500 ★

<p>
  <a href="https://arifszn.github.io/gitprofile">
    <img src="https://user-images.githubusercontent.com/45073703/202119579-eae272bd-ed39-434d-9361-df25308e0691.gif" alt="Thank You" width="50%"/>
  </a>
</p>

## 🛠 Installation & Setup

There are three ways to use **GitProfile**. Use any.

- Forking this repo _(recommended)_
- Setting up locally
- Installing as package

### Forking this repo

These instructions will get you a copy of the project and deploy your portfolio online!

- **Fork repo:** Click [here](https://github.com/arifszn/gitprofile/fork) to fork the repo so you have your own project to customize. A "fork" is a copy of a repository.
- **Rename repo:**
  - If you want to host your portfolio at `https://<USERNAME>.github.io`, rename your forked repository to `username.github.io` in GitHub, where `username` is your GitHub username (or organization name).
  - If you want to host your portfolio at `https://<USERNAME>.github.io/<REPO>` (e.g. `https://<USERNAME>.github.io/portfolio`), rename your forked repository to `<REPO>` (e.g. `portfolio`) in GitHub.
- **Enable workflows:** Go to your repo's **Actions** tab and enable workflows.

  ![Workflows](https://arifszn.github.io/assets/img/hosted/gitprofile/workflows.png)

- **Base Value:** Open `vite.config.js`, and change `base`'s value.

  - If you are deploying to `https://<USERNAME>.github.io`, set `base` to `'/'`.

  - If you are deploying to `https://<USERNAME>.github.io/<REPO>` (e.g. `https://<USERNAME>.github.io/portfolio`), then set `base` to `'/<REPO>/'` (e.g. `'/portfolio/'`).

  ```js
  // vite.config.js
  {
    base: '/',
    // ...
  }
  ```

- **Commit the changes:** Now commit to your **main** branch with your changes. Wait a few minutes so that the CI/CD pipeline can publish your website to GitHub Pages. You can check the progress in the [Actions](https://github.com/arifszn/gitprofile/actions) tab.

Your portfolio website will be live shortly. Any time you commit a change to the **main** branch, the website will be automatically updated. If you face any issue viewing the website, double-check the `base` value in the `vite.config.js` file. Also, check if **Source** is set to **GitHub Actions** in **Settings** ➜ **Pages** ➜ **Build and deployment**.

If you wish to add a custom domain, no CNAME file is required. Just add it to your repo's **Settings** ➜ **Pages** ➜ **Custom domain**.

As this is a Vite project, you can also host your website to Netlify, Vercel, Heroku, or other popular services. Please refer to this [doc](https://vitejs.dev/guide/static-deploy.html) for a detailed deployment guide to other services.

### Setting up locally

- Clone the project and change directory.

  ```shell
  git clone https://github.com/arifszn/gitprofile.git
  cd gitprofile
  ```

- Install dependencies.

  ```shell
  npm install
  ```

- Run dev server.

  ```shell
  npm run dev
  ```

- Finally, visit [`http://localhost:5173/gitprofile/`](http://localhost:5173/gitprofile/) from your browser.

### Installing as package

You can also use **GitProfile** by installing as an NPM package. First Install **GitProfile** via <a href="https://www.npmjs.com/package/@arifszn/gitprofile">NPM</a>.

```sh
npm install @arifszn/gitprofile
```

Or via <a href="https://yarnpkg.com/package/@arifszn/gitprofile">Yarn</a>.

```sh
yarn add @arifszn/gitprofile
```

Then, import the package, import and style and provide the config.

```js
import GitProfile from '@arifszn/gitprofile';
import '@arifszn/gitprofile/dist/style.css';

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

**If you face any problems or have any questions, open an issue [here](https://github.com/arifszn/gitprofile/issues).**

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
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: ['JavaScript', 'React.js'],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      body: 'Certification Body Name',
      name: 'Sample Certification',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  education: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 5, // How many posts to display. Max is 10.
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
    defaultTheme: 'light',

    // Hides the theme change switch
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

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

<p align="center">
  <img src="https://arifszn.github.io/assets/img/hosted/gitprofile/theme-dropdown.png" alt="Theme Dropdown" width="50%">
</p>

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

**GitProfile** supports [hotjar](https://www.hotjar.com) to track visitor interaction and behavior. If you do not want to use Hotjar, keep the `id` empty.

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

You can link your social media services you're using, including LinkedIn, Twitter, Facebook, Instagram, Dribbble, Behance, Medium, dev, Stack Overflow, personal website, phone and email.

```js
// gitprofile.config.js
module.exports = {
  // ...
  social: {
    linkedin: 'ariful-alam',
    twitter: 'arif_szn',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    website: '',
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
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
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

### Certifications

Provide your industry certifications in `certifications`.

```js
// gitprofile.config.js
module.exports = {
  // ...
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
};
```

Empty array will hide the certifications section.

### Projects

#### Github Projects

Your public repo from GitHub will be displayed in the `Github Projects` section automatically. You can limit how many projects do you want to be displayed. Also, you can hide forked or specific repo.

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

#### External Projects

In this section you can showcase your external/personal projects.

```js
// gitprofile.config.js
module.exports = {
  // ...
  externalProjects: [
    {
      title: 'Project Name',
      description: 'Description',
      link: 'https://example.com',
      imageUrl: 'https://via.placeholder.com/250x250',
    },
  ],
};
```

### Blog Posts

If you have [medium](https://medium.com) or [dev](https://dev.to) account, you can show your recent blog posts in here just by providing your medium/dev username. You can limit how many posts to display (Max is `10`).

```js
// gitprofile.config.js
module.exports = {
  // ...
  blog: {
    source: 'dev',
    username: 'arifszn',
    limit: 5,
  },
};
```

![Blog](https://arifszn.github.io/assets/img/hosted/gitprofile/blog.png)

The posts are fetched by [blog.js](https://github.com/arifszn/blog.js).

## 💖 Support

<p>You can show your support by starring this project. ★</p>
<a href="https://github.com/arifszn/gitprofile/stargazers">
  <img src="https://img.shields.io/github/stars/arifszn/gitprofile?style=social" alt="Github Star">
</a>

## 💡 Contribute

To contribute, see the [Contributing guide](https://github.com/arifszn/gitprofile/blob/main/CONTRIBUTING.md).

## 📄 License

[MIT](https://github.com/arifszn/gitprofile/blob/main/LICENSE)
