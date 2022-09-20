import {faCircleXmark,
    faSpinner 

} 
from '@fortawesome/free-solid-svg-icons';
import { useState ,useRef ,useEffect } from 'react';
import classNames from 'classnames/bind'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TippyHeadless from '@tippyjs/react/headless';
import { Wrapper as WapperPopper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import {SearchIcon} from '~/components/Icons'
import styles from './Search.module.scss'
import {useDebounce} from '~/components/Hooks'
import * as searchServices from '~/service/searchServices'


const cx = classNames.bind(styles)

function Search() {
    const inputRef = useRef()

    const [resultList,setResultList] = useState([])
    const [searchValue,setSearchValue] = useState('')
    const [focusInput,setFocusInput] = useState(true)
    const [showLoading,setShowLoading] = useState(false)

    const valueDelay = useDebounce(searchValue,500)

    const handleClear = () => {
        setSearchValue('')
        setResultList([])
        inputRef.current.focus()
    }

    const handleChange = (e) => {
        if(!e.target.value.startsWith(' ')){
            setSearchValue(e.target.value)
        }
    }

    useEffect(()=>{
        if(!valueDelay.trim()){
            setResultList([])
            return
        }
        const fetchApi = async() => {
            setShowLoading(true)
            const result = await searchServices.search(valueDelay)
            setResultList(result)
            setShowLoading(false)
        }
        fetchApi();

    },[valueDelay])

    return ( 
        <div>
            <TippyHeadless 
                interactive
                visible = {focusInput && resultList.length > 0}
                onClickOutside = {
                    ()=> {
                        setFocusInput(false)
                    }
                }
                render={(attrs)=>
                    <div className={cx('search-result')}  tabIndex="-1">
                        <WapperPopper>
                            <h4 className = {cx('lable')} >Accounts</h4>
                            {resultList.map(item => 
                                <AccountItem key={item.id} data = {item} />    
                            )}
                        </WapperPopper>                
                    </div>
            }>
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder='search accounts and videos'  
                        spellCheck = {false}
                        onChange = {handleChange} 
                        onFocus = {()=> setFocusInput(true)} 
                    />
                    {!!searchValue && !showLoading && <button 
                        className={cx('clear')}
                        onClick = {handleClear}
                    >
                        <FontAwesomeIcon icon = {faCircleXmark} />
                    </button>}
                
                    {showLoading && <FontAwesomeIcon className={cx('loading')} icon= {faSpinner}/>}
                    
                        <button className={cx('btn-search')} onMouseDown = {e=> e.preventDefault()} >
                            <SearchIcon width='1.2rem' height='1.2rem'/>
                        </button>
    
                </div>
            </TippyHeadless >
        </div>
        );
}

export default Search;