import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import styles from './Image.module.scss';
import Images from '~/assets/images';

const Image = forwardRef(({ src, alt, fallback: customFallback = Images.noImage, className, ...props }, ref) => {
    const [fallback, setFallback] = useState();

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            onError={handleError}
            {...props}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
    className: PropTypes.string,
};

export default Image;
