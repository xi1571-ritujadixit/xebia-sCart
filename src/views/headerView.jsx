import React from 'react'
import Avatar from '../images/avatar.png';
import { OpenCloseHoc  } from '../hoc/openCloseHoc';

const headerView = (payload) => {

    const { searchText, onSearchChange, onClickLogout, onClickCartOpen } = payload
    const userName = window.localStorage.getItem('username');

    return (
        <header className='header'>
            <div className='header-inner-wrapper'>
                <div>Logo</div>
                <div className='SearchBoxContainer'>
                    <div className='search_bar'>
                        <div className='SearchIcon'></div>    
                        <div className='SearchBox'>  
                            <input className='inputbox' placeholder="Search for Products, Brands etc." type='search' value= { searchText } onChange={ (e) => onSearchChange( { searchText: e.currentTarget.value } ) }/>
                        </div>
                    </div>
                </div>
                <OpenCloseHoc render={ ( props ) => {
                    const { isOpen, onHandleClick, ref } = props;
                    return(
                        <div className='userContainer-Wrapper' ref={ ref } onClick={ onHandleClick }>
                            <div className='userContainer'>
                                <img src={ Avatar } alt='Avatar' />
                                <span>Welcome { userName }</span>
                            </div>
                            { ! isOpen ? null :
                                <ul className='dropdown'>
                                    <li className='dropdown__item' onClick={ onClickCartOpen }>Cart</li>
                                    <li className='dropdown__item' onClick={ onClickLogout }>Logout</li>
                                </ul>
                            }
                        </div>
                    );

                } } />
            </div>
        </header>
    )
}

export default headerView