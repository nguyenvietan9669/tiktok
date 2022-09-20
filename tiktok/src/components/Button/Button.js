import PropTypes from 'prop-types';
import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = className.bind(styles);

function Button({
    to,
    href,
    icon,
    onClick,
    className,
    leftIcon,
    rightIcon,
    disabled = false,
    primary = false,
    outline = false,
    rounded = false,
    text = false,
    small = false,
    large = false,
    children,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    const listClass = {
        [className]: className,
        primary,
        outline,
        rounded,
        text,
        small,
        large,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp {...props} className={cx('wrapper', listClass)}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    disabled: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    text: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Button;
