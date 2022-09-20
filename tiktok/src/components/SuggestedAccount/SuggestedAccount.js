import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccount({ title, data = [], onSeeAll }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('header')}>{title}</p>
            {data.map((user, index) => {
                return <AccountItem key={index} data={user} />;
            })}
            <p className={cx('see-all')} onClick={onSeeAll}>
                See all
            </p>
        </div>
    );
}

export default SuggestedAccount;
