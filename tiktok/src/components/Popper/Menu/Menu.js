import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Menu.module.scss';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as WapperPopper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ menu = [], onChange, hideOnClick = false, children }) {
    const [history, setHistory] = useState([{ data: menu }]);

    const current = history[history.length - 1];

    const showItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    /// back menu -> 1
    const handleReset = () => setHistory((prev) => prev.slice(0, prev.length - 1));
    const handleHide = () => setHistory((prev) => prev.slice(0, 1));
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            hideOnClick={hideOnClick}
            onHide={handleHide}
            // visible
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('info')} tabIndex="-1">
                    <WapperPopper className={cx('wrapper-menu')}>
                        {history.length > 1 && (
                            <Header
                                icon={<FontAwesomeIcon icon={faAngleLeft} />}
                                title={current.title}
                                onBack={handleReset}
                            />
                        )}
                        <div className={cx('menu-body')}>{showItem()}</div>
                    </WapperPopper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    menu: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
    children: PropTypes.node,
};

export default Menu;
