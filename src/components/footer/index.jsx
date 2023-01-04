import PropTypes from 'prop-types';

import { skeleton } from '../../helpers/utils';

const DefaultFooter = () => {
  return (
    <a
      href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <p className="font-mono text-sm">
          Made with <span className="text-primary">GitProfile</span> and ❤️
        </p>
      </div>
    </a>
  );
};

const Footer = ({ content, loading }) => {
  let footerContent = null;
  if (content) {
    footerContent = <div dangerouslySetInnerHTML={{ __html: content }} />;
  } else {
    footerContent = <DefaultFooter />;
  }

  return (
    <div className="card-body">
      {loading ? skeleton({ width: 'w-52', height: 'h-6' }) : footerContent}
    </div>
  );
};

Footer.propTypes = {
  content: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default Footer;
