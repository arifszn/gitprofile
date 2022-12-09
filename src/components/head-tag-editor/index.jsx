import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { isDarkishTheme } from '../../helpers/utils';

const HeadTagEditor = ({ profile, theme, googleAnalytics, social }) => {
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
          <title>{profile.name} | A Portfolio</title>
          <meta
            name="theme-color"
            content={isDarkishTheme(theme) ? '#000000' : '#ffffff'}
          />

          <meta name="description" content={profile.bio} />

          <meta itemProp="name" content={`${profile.name} | A Portfolio`} />
          <meta itemProp="description" content={profile.bio} />
          <meta itemProp="image" content={profile.avatar} />

          <meta property="og:url" content="https://nathen418.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${profile.name} | A Portfolio`} />
          <meta property="og:description" content={profile.bio} />
          <meta property="og:image" content={profile.avatar} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${profile.name} | A Portfolio`} />
          <meta name="twitter:description" content={profile.bio} />
          <meta name="twitter:image" content={profile.avatar} />
        </Helmet>
      )}
    </Fragment>
  );
};

HeadTagEditor.propTypes = {
  profile: PropTypes.object,
  theme: PropTypes.string,
  googleAnalytics: PropTypes.object.isRequired,
  social: PropTypes.object.isRequired,
};

export default HeadTagEditor;
