import React from 'react'
import Avatar from '../images/avatar.png';
import { OpenCloseHoc  } from '../hoc/openCloseHoc';

const headerView = (payload) => {

    const { searchText, onSearchChange, onClickLogout } = payload
    const userName = window.localStorage.getItem('username');

    return (
        <header>
            <div>Logo</div>
            <input type='text' value= { searchText } onChange={ (e) => onSearchChange( { searchText: e.currentTarget.value } ) }/>
            <OpenCloseHoc render={ ( props ) => {
                const { isOpen, onHandleClick, ref } = props;
                return(
                    <div className='header__userContainer' ref={ ref } onClick={ onHandleClick }>
                        <div className='userContainer__info'>
                            <img src={ Avatar } alt='Avatar' />
                            <span>Welcome { userName }</span>
                        </div>
                        { ! isOpen ? null :
                            <ul className='userContainer__dropdown'>
                                <li className='userContainer__dropdown__item'>Cart</li>
                                <li className='userContainer__dropdown__item' onClick={ onClickLogout }>Logout</li>
                            </ul>
                        }
                    </div>
                );

            } } />
        </header>
    )
}

export default headerView