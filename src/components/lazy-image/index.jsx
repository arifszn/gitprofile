import { useState, Fragment, useEffect } from 'react';

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

export default LazyImage;
