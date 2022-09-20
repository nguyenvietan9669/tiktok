import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login({ onClose }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-login')}>
                <FontAwesomeIcon className={cx('icon-close')} onClick={onClose} icon={faCircleXmark} />
                <h2 className={cx('title')}>Login in to Tiktok</h2>
            </div>
            <div className={cx('body-login')}>this is body</div>
            <div className={cx('footer-login')}>
                Don't have an account
                <a>Sing up</a>
            </div>
        </div>
    );
}

export default Login;
