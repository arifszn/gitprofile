import { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

const LazyImage = ({ placeholder, src, alt, ...rest }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;

    imageToLoad.onload = () => {
      setLoading(false);
    };
  }, [src]);

  return (
    <Fragment>
      {loading ? placeholder : <img src={src} alt={alt} {...rest} />}
    </Fragment>
  );
};

LazyImage.propTypes = {
  placeholder: PropTypes.node,
  alt: PropTypes.string,
  src: PropTypes.string,
};

export default LazyImage;
