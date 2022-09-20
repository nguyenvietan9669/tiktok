import PropTypes from 'prop-types';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = className.bind(styles);

function AccountItem({ data }) {
    return (
        <Link className={cx('wrapper')} to={`/@${data.nickname}`}>
            <Image className={cx('avatar')} src={data.avatar} alt="image" />
            <div className={cx('info')}>
                <h4 className={cx('info-name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object,
};

export default AccountItem;
