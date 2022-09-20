import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import configs from '~/configs';
import { useEffect, useState } from 'react';
import SuggestedAccount from '~/components/SuggestedAccount';
import * as userServices from '~/service/userServices';

import {
    HomeIcon,
    HomeAcitveIcon,
    AccountGroupIcon,
    AccountGroupAcitveIcon,
    FolowIcon,
    FolowActiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    const [suggest, setSuggest] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchApi = async () => {
            userServices
                .suggest({ page: page, perPage: 5 })
                .then((data) => {
                    setSuggest((prev) => [...prev, ...data]);
                    console.log(suggest);
                })
                .catch((e) => {
                    console.error(e);
                });
        };
        fetchApi();
    }, [page]);

    const handleSeeAll = () => {
        setPage((prev) => prev + 1);
    };

    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={configs.routes.home}
                    icon={<HomeIcon />}
                    iconActive={<HomeAcitveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={configs.routes.following}
                    icon={<AccountGroupIcon />}
                    iconActive={<AccountGroupAcitveIcon />}
                />
                <MenuItem title="LIVE" to={configs.routes.live} icon={<FolowIcon />} iconActive={<FolowActiveIcon />} />
            </Menu>
            <SuggestedAccount title={'Suggested accounts'} data={suggest} onSeeAll={handleSeeAll} />
            <SuggestedAccount title={'Follow accounts'} />
        </div>
    );
}

export default Sidebar;
