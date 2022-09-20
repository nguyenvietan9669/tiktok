import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
    faEllipsisVertical,
    faEarthAmericas,
    faCircleQuestion,
    faKeyboard,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from './Search';
import configs from '~/configs';
import Modal from '~/components/Modal';
import Login from '~/components/Login';

const cx = classNames.bind(styles);
function Header() {
    const haveInbox = 12;

    const [open, setOpen] = useState(false);

    const setOpenModal = () => {
        setOpen(true);
    };

    const setCloseModal = () => {
        setOpen(false);
    };

    const LIST_MENU = [
        {
            icon: <FontAwesomeIcon icon={faEarthAmericas} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'Language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'Language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shotcuts',
        },
    ];

    const currentUser = false;

    const USER_MENU = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Wiew profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoin} />,
            title: 'Get coin',
            to: '/getcoin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...LIST_MENU,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            dash: true,
        },
    ];

    const handlerLanguage = (item) => {
        ///handlerLanguage
        console.log(item);
    };

    return (
        <header className={cx('wapper')}>
            <div className={cx('inner')}>
                <Link to={configs.routes.home} className={cx('logo-header')}>
                    <img src={images.logo} alt="logo" />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 100]} content="Message">
                                <button className={cx('btn-message')}>
                                    <MessageIcon width="1.5rem" height="1.5rem" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Upload video">
                                <button className={cx('btn-upload')}>
                                    <UploadIcon width="2rem" height="2rem" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Inbox">
                                <button className={cx('btn-inbox')}>
                                    {haveInbox && <div className={cx('title-inbox')}>{haveInbox}</div>}
                                    <InboxIcon width="2rem" height="2rem" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <div id="test"></div>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                            <button onClick={setOpenModal}>Modal</button>
                        </>
                    )}
                    {currentUser ? (
                        <>
                            <Menu menu={currentUser ? USER_MENU : LIST_MENU} onChange={handlerLanguage}>
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7d802544fd3a82672fbe21170038ea95~c5_100x100.jpeg?x-expires=1661133600&x-signature=iVlmVPxzdZhGlp45tIsxsCqHwhI%3D"
                                    alt="avatar"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Menu menu={LIST_MENU} onChange={handlerLanguage}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
            <Modal isOpen={open}>
                <Login onClose={setCloseModal} />
            </Modal>
        </header>
    );
}

export default Header;
