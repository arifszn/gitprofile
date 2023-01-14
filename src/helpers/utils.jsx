import colors from '../data/colors.json';
import { hotjar } from 'react-hotjar';

export const getInitialTheme = (themeConfig) => {
  if (themeConfig.disableSwitch) {
    return themeConfig.defaultTheme;
  }

  if (
    typeof window !== 'undefined' &&
    !(localStorage.getItem('gitprofile-theme') === null) &&
    themeConfig.themes.includes(localStorage.getItem('gitprofile-theme'))
  ) {
    let theme = localStorage.getItem('gitprofile-theme');

    return theme;
  }

  if (themeConfig.respectPrefersColorScheme && !themeConfig.disableSwitch) {
    return typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : themeConfig.defaultTheme;
  }

  return themeConfig.defaultTheme;
};

export const skeleton = ({
  width = null,
  height = null,
  style = {},
  shape = 'rounded-full',
  className = null,
}) => {
  return (
    <div
      className={`bg-base-300 animate-pulse ${shape}${
        className ? ` ${className}` : ''
      }${width ? ` ${width}` : ''}${height ? ` ${height}` : ''}`}
      style={style}
    />
  );
};

export const languageColor = (language) => {
  if (typeof colors[language] !== 'undefined') {
    return colors[language].color;
  } else {
    return 'gray';
  }
};

export const fallbackImage =
  'data:image/png;base64,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';

export const ga = {
  // initialize google analytic
  initialize: (id) => {
    try {
      if (typeof window !== 'undefined') {
        window.gtag('js', new Date());
        window.gtag('config', id);
      }
    } catch (error) {
      console.error(error);
    }
  },
  // log specific events happening
  event: ({ action, params }) => {
    try {
      window?.gtag('event', action, params);
    } catch (error) {
      console.error(error);
    }
  },
};

export const isDarkishTheme = (theme) => {
  return ['dark', 'halloween', 'forest', 'black', 'luxury', 'dracula'].includes(
    theme
  );
};

export const setupHotjar = (hotjarConfig) => {
  if (hotjarConfig?.id) {
    let snippetVersion = hotjarConfig?.snippetVersion || 6;

    hotjar.initialize(hotjarConfig.id, snippetVersion);
  }
};

export const sanitizeConfig = (config) => {
  const customTheme = config?.themeConfig?.customTheme || {
    primary: '#fc055b',
    secondary: '#219aaf',
    accent: '#e8d03a',
    neutral: '#2A2730',
    'base-100': '#E3E3ED',
    '--rounded-box': '3rem',
    '--rounded-btn': '3rem',
  };

  const themes = config?.themeConfig?.themes || [
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
  ];

  return {
    github: {
      username: config?.github?.username || '',
      sortBy: config?.github?.sortBy || 'stars',
      limit: config?.github?.limit || 8,
      exclude: {
        forks: config?.github?.exclude?.forks || false,
        projects: config?.github?.exclude?.projects || [],
      },
    },
    social: {
      linkedin: config?.social?.linkedin,
      twitter: config?.social?.twitter,
      facebook: config?.social?.facebook,
      instagram: config?.social?.instagram,
      dribbble: config?.social?.dribbble,
      behance: config?.social?.behance,
      medium: config?.social?.medium,
      dev: config?.social?.dev,
      stackoverflow: config?.social?.stackoverflow,
      website: config?.social?.website,
      phone: config?.social?.phone,
      email: config?.social?.email,
    },
    resume: {
      fileUrl: config?.resume?.fileUrl || '',
    },
    skills: config?.skills || [],
    externalProjects: config?.externalProjects || [],
    experiences: config?.experiences || [],
    certifications: config?.certifications || [],
    education: config?.education || [],
    blog: {
      source: config?.blog?.source,
      username: config?.blog?.username,
      limit: config?.blog?.limit || 5,
    },
    googleAnalytics: {
      id: config?.googleAnalytics?.id,
    },
    hotjar: {
      id: config?.hotjar?.id,
      snippetVersion: config?.hotjar?.snippetVersion || 6,
    },
    themeConfig: {
      defaultTheme: config?.themeConfig?.defaultTheme || themes[0],
      disableSwitch: config?.themeConfig?.disableSwitch || false,
      respectPrefersColorScheme:
        config?.themeConfig?.respectPrefersColorScheme || false,
      hideAvatarRing: config?.themeConfig?.hideAvatarRing || false,
      themes: themes,
      customTheme: customTheme,
    },
    footer: config?.footer,
  };
};

export const noConfigError = {
  status: 500,
  title: 'No Config is provided.',
  subTitle: 'Pass the required config as prop.',
};

export const tooManyRequestError = (reset) => {
  return {
    status: 429,
    title: 'Too Many Requests.',
    subTitle: (
      <p>
        Oh no, you hit the{' '}
        <a
          href="https://developer.github.com/v3/rate_limit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          rate limit
        </a>
        ! Try again later{` ${reset}`}.
      </p>
    ),
  };
};

export const notFoundError = {
  status: 404,
  title: 'The Github Username is Incorrect.',
  subTitle: (
    <p>
      Please provide correct github username in{' '}
      <code>gitprofile.config.js</code>.
    </p>
  ),
};

export const genericError = {
  status: 500,
  title: 'Ops!!',
  subTitle: 'Something went wrong.',
};
