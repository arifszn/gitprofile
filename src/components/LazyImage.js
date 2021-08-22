import { useState, Fragment, useEffect } from 'react';

const LazyImage = ({ placeholder, src, ...rest }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const imageToLoad = new Image();
        imageToLoad.src = src;
        
        imageToLoad.onload = () => {
            setLoading(false);
        }
    }, [])

    return (
        <Fragment>
            {
                loading ? placeholder : (
                    <img
                        src={src}
                        {...rest}
                    />
                )
            }
        </Fragment>
    )
}

export default LazyImage;