import PropTypes from 'prop-types';

import { skeleton } from '../../helpers/utils';

const Footer = ({ content, loading }) => {
  if (!content) return null;

  return (
    <div className="card-body">
      {loading ? (
        skeleton({ width: 'w-52', height: 'h-6' })
      ) : (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  );
};

Footer.propTypes = {
  content: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default Footer;
