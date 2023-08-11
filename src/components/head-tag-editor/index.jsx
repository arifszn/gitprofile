import { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { isDarkishTheme } from '../../helpers/utils';

const HeadTagEditor = ({
  profile,
  tabInfo,
  theme,
  googleAnalytics,
  social,
}) => {
  const updateFaviconByUrl = (faviconUrl) => {
    const faviconLink =
      document.querySelector("link[rel*='icon']") ||
      document.createElement('link');
    faviconLink.type = 'image/x-icon';
    faviconLink.rel = 'shortcut icon';
    faviconLink.href = faviconUrl;
    document.getElementsByTagName('head')[0].appendChild(faviconLink);
  };

  useEffect(() => {
    updateFaviconByUrl(tabInfo.faviconUrl);
  }, []);

  return (
    <Fragment>
      {profile && (
        <Helmet>
          {googleAnalytics?.id && (
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalytics.id}`}
            ></script>
          )}
          {googleAnalytics?.id && (
            <script>
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalytics.id}');`}
            </script>
          )}
          <title>
            {tabInfo.title == 'Portfolio'
              ? `Portfolio${profile.name && ` of ${profile.name}`}`
              : tabInfo.title}
          </title>
          <meta
            name="theme-color"
            content={isDarkishTheme(theme) ? '#000000' : '#ffffff'}
          />

          <meta name="description" content={profile.bio} />

          <meta
            itemProp="name"
            content={
              tabInfo.title == 'Portfolio'
                ? `Portfolio${profile.name && ` of ${profile.name}`}`
                : tabInfo.title
            }
          />
          <meta itemProp="description" content={profile.bio} />
          <meta
            itemProp="image"
            content={
              tabInfo.faviconUrl == '/favicon.ico'
                ? profile.avatar
                : tabInfo.faviconUrl
            }
          />

          <meta property="og:url" content={social?.website || ''} />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content={
              tabInfo.title == 'Portfolio'
                ? `Portfolio${profile.name && ` of ${profile.name}`}`
                : tabInfo.title
            }
          />
          <meta property="og:description" content={profile.bio} />
          <meta
            property="og:image"
            content={
              tabInfo.faviconUrl == '/favicon.ico'
                ? profile.avatar
                : tabInfo.faviconUrl
            }
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content={
              tabInfo.title == 'Portfolio'
                ? `Portfolio${profile.name && ` of ${profile.name}`}`
                : tabInfo.title
            }
          />
          <meta name="twitter:description" content={profile.bio} />
          <meta
            name="twitter:image"
            content={
              tabInfo.faviconUrl == '/favicon.ico'
                ? profile.avatar
                : tabInfo.faviconUrl
            }
          />
        </Helmet>
      )}
    </Fragment>
  );
};

HeadTagEditor.propTypes = {
  profile: PropTypes.object,
  tabInfo: PropTypes.object.isRequired,
  theme: PropTypes.string,
  googleAnalytics: PropTypes.object.isRequired,
  social: PropTypes.object.isRequired,
};

export default HeadTagEditor;
