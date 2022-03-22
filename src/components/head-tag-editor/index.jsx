import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { isThemeDarkish } from '../../helpers/utils';
import config from '../../../gitprofile.config';

const HeadTagEditor = ({ profile, theme }) => {
  return (
    <Fragment>
      {profile && (
        <Helmet>
          {config.googleAnalytics?.id && (
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalytics.id}`}
            ></script>
          )}
          {config.googleAnalytics?.id && (
            <script>
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${config.googleAnalytics.id}');`}
            </script>
          )}
          <title>Portfolio of {profile.name}</title>
          <meta
            name="theme-color"
            content={isThemeDarkish(theme) ? '#000000' : '#ffffff'}
          />

          <meta name="description" content={profile.bio} />

          <meta itemProp="name" content={`Portfolio of ${profile.name}`} />
          <meta itemProp="description" content={profile.bio} />
          <meta itemProp="image" content={profile.avatar} />

          <meta
            property="og:url"
            content={
              typeof config.social.website !== 'undefined'
                ? config.social.website
                : ''
            }
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`Portfolio of ${profile.name}`} />
          <meta property="og:description" content={profile.bio} />
          <meta property="og:image" content={profile.avatar} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`Portfolio of ${profile.name}`} />
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
};

export default HeadTagEditor;
