import PropTypes from 'prop-types';
import { Wrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Preview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Preview({ data }) {
    return (
        <Wrapper>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <img className={cx('avatar')} src={data.avatar} />
                    <Button className={cx('btn-follow')} primary>
                        Follow
                    </Button>
                </div>
                <div className={cx('body')}>
                    <div className={cx('info')}>
                        <div className={cx('info-header')}>
                            <h4 className={cx('user-name')}>{data.nickname}</h4>
                            {data.tick && <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />}
                        </div>
                        <div className={cx('full-name')}>{data.first_name + data.last_name}</div>
                    </div>
                    <div className={cx('statistical')}>
                        <p className={cx('value')}>{data.followers_count}</p>
                        <p className={cx('key')}>Follower</p>
                        <p className={cx('value')}>{data.likes_count}</p>
                        <p className={cx('key')}>Likes</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

Preview.propTypes = {
    data: PropTypes.array,
};

export default Preview;
