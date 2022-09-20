import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import Preview from './Preview';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (prop) => (
        <div tabIndex={-1} {...prop}>
            <Preview data={data} />
        </div>
    );
    return (
        <div>
            <Tippy offset={[-20, 0]} delay={[700, 0]} interactive placement="bottom" render={renderPreview}>
                <div className={cx('content')}>
                    <Image className={cx('avatar')} src={data.avatar} alt="avatar" />
                    <div className={cx('info')}>
                        <div className={cx('info-header')}>
                            <h4 className={cx('user-name')}>{data.nickname}</h4>
                            {data.tick && <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />}
                        </div>
                        <div className={cx('full-name')}>{data.first_name + data.last_name}</div>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
