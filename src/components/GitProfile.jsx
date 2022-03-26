import axios from 'axios';
import { Fragment, useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import HeadTagEditor from './head-tag-editor';
import ErrorPage from './error-page';
import ThemeChanger from './theme-changer';
import AvatarCard from './avatar-card';
import Details from './details';
import Skill from './skill';
import Experience from './experience';
import Education from './education';
import Project from './project';
import Blog from './blog';
import {
  constructConfigWithMissingValues,
  getInitialTheme,
  setupHotjar,
} from '../helpers/utils';
import { HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';
import '../assets/index.css';

const GitProfile = ({ config }) => {
  const [error, setError] = useState(
    typeof config === 'undefined'
      ? {
          status: 500,
          title: 'No Config is provided',
          subTitle: 'Pass the required config as prop.',
        }
      : null
  );

  typeof config !== 'undefined' && constructConfigWithMissingValues(config);

  const [theme, setTheme] = useState(
    config ? getInitialTheme(config.themeConfig) : null
  );
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  useEffect(() => {
    config && setupHotjar(config.hotjar);
  }, []);

  const loadData = useCallback(() => {
    axios
      .get(`https://api.github.com/users/${config.github.username}`)
      .then((response) => {
        let data = response.data;

        let profileData = {
          avatar: data.avatar_url,
          name: data.name ? data.name : '',
          bio: data.bio ? data.bio : '',
          location: data.location ? data.location : '',
          company: data.company ? data.company : '',
        };

        setProfile(profileData);
      })
      .then(() => {
        let excludeRepo = ``;

        config.github.exclude.projects.forEach((project) => {
          excludeRepo += `+-repo:${config.github.username}/${project}`;
        });

        let query = `user:${config.github.username}+fork:${!config.github
          .exclude.forks}${excludeRepo}`;

        let url = `https://api.github.com/search/repositories?q=${query}&sort=${config.github.sortBy}&per_page=${config.github.limit}&type=Repositories`;

        axios
          .get(url, {
            headers: {
              'Content-Type': 'application/vnd.github.v3+json',
            },
          })
          .then((response) => {
            let data = response.data;

            setRepo(data.items);
          })
          .catch((error) => {
            handleError(error);
          });
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setLoading]);

  useEffect(() => {
    config && loadData();
  }, [loadData]);

  const handleError = (error) => {
    console.error('Error:', error);
    try {
      let reset = moment(
        new Date(error.response.headers['x-ratelimit-reset'] * 1000)
      ).fromNow();

      if (error.response.status === 403) {
        setError({
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
                rate limit.
              </a>
              ! Try again later{` ${reset}`}.
            </p>
          ),
        });
      } else if (error.response.status === 404) {
        setError({
          status: 404,
          title: 'The Github Username is Incorrect.',
          subTitle: (
            <p>
              Please provide correct github username in <code>config</code>.
            </p>
          ),
        });
      } else {
        setError({
          status: 500,
          title: 'Ops!!',
          subTitle: 'Something went wrong.',
        });
      }
    } catch (error2) {
      setError({
        status: 500,
        title: 'Ops!!',
        subTitle: 'Something went wrong.',
      });
    }
  };

  return (
    <HelmetProvider>
      {!error && (
        <HeadTagEditor
          profile={profile}
          theme={theme}
          googleAnalytics={config.googleAnalytics}
          social={config.social}
        />
      )}
      <div className="fade-in h-screen">
        {error ? (
          <ErrorPage
            status={`${error.status}`}
            title={error.title}
            subTitle={error.subTitle}
          />
        ) : (
          <Fragment>
            <div className="p-4 lg:p-10 min-h-full bg-base-200">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
                <div className="col-span-1">
                  <div className="grid grid-cols-1 gap-6">
                    {!error && !config.themeConfig.disableSwitch && (
                      <ThemeChanger
                        theme={theme}
                        setTheme={setTheme}
                        loading={loading}
                        themeConfig={config.themeConfig}
                      />
                    )}
                    <AvatarCard profile={profile} loading={loading} />
                    <Details
                      profile={profile}
                      loading={loading}
                      github={config.github}
                      social={config.social}
                    />
                    {typeof config.skills !== 'undefined' && (
                      <Skill loading={loading} skills={config.skills} />
                    )}
                    {typeof config.experiences !== 'undefined' && (
                      <Experience
                        loading={loading}
                        experiences={config.experiences}
                      />
                    )}
                    {typeof config.education !== 'undefined' && (
                      <Education
                        loading={loading}
                        education={config.education}
                      />
                    )}
                  </div>
                </div>
                <div className="lg:col-span-2 col-span-1">
                  <div className="grid grid-cols-1 gap-6">
                    <Project
                      repo={repo}
                      loading={loading}
                      github={config.github}
                      googleAnalytics={config.googleAnalytics}
                    />
                    {typeof config.blog !== 'undefined' && (
                      <Blog
                        loading={loading}
                        googleAnalytics={config.googleAnalytics}
                        blog={config.blog}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* DO NOT REMOVE/MODIFY THE FOOTER. FOR MORE INFO https://github.com/arifszn/gitprofile#-please-read */}
            <footer className="p-4 footer bg-base-200 text-base-content footer-center">
              <div className="card compact bg-base-100 shadow">
                <div className="card-body">
                  <div>
                    <p className="font-mono text-sm">
                      Made with{' '}
                      <a
                        className="text-primary"
                        href="https://github.com/arifszn/gitprofile"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitProfile
                      </a>{' '}
                      and ❤️
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </Fragment>
        )}
      </div>
    </HelmetProvider>
  );
};

GitProfile.propTypes = {
  config: PropTypes.shape({
    github: PropTypes.shape({
      username: PropTypes.string.isRequired,
      sortBy: PropTypes.oneOf(['stars', 'updated']),
      limit: PropTypes.number,
      exclude: PropTypes.shape({
        forks: PropTypes.bool.isRequired,
        projects: PropTypes.array.isRequired,
      }),
    }).isRequired,
    social: PropTypes.shape({
      linkedin: PropTypes.string,
      twitter: PropTypes.string,
      facebook: PropTypes.string,
      dribbble: PropTypes.string,
      behance: PropTypes.string,
      medium: PropTypes.string,
      devto: PropTypes.string,
      website: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
    }),
    skills: PropTypes.array,
    experiences: PropTypes.arrayOf(
      PropTypes.shape({
        company: PropTypes.string,
        position: PropTypes.string,
        from: PropTypes.string,
        to: PropTypes.string,
      })
    ),
    education: PropTypes.arrayOf(
      PropTypes.shape({
        institution: PropTypes.string,
        degree: PropTypes.string,
        from: PropTypes.string,
        to: PropTypes.string,
      })
    ),
    blog: PropTypes.shape({
      source: PropTypes.string,
      username: PropTypes.string,
      limit: PropTypes.number,
    }),
    googleAnalytics: PropTypes.shape({
      id: PropTypes.string,
    }),
    hotjar: PropTypes.shape({
      id: PropTypes.string,
      snippetVersion: PropTypes.number,
    }),
    themeConfig: PropTypes.shape({
      defaultTheme: PropTypes.string.isRequired,
      disableSwitch: PropTypes.bool.isRequired,
      respectPrefersColorScheme: PropTypes.bool.isRequired,
      themes: PropTypes.array.isRequired,
      customTheme: PropTypes.object.isRequired,
    }),
  }).isRequired,
};

export default GitProfile;
