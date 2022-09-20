import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({ icon, title, onBack }) {
    return (
        <div className={cx('header')}>
            <button onClick={onBack} className={cx('btn-back')}>
                {icon}
            </button>
            <span className={cx('title-header')}>{title}</span>
        </div>
    );
}

Header.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
