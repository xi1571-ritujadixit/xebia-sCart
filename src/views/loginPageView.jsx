import React from 'react'
import { isEmpty, toString } from 'lodash';

export const loginPageView = (payload) => {

    const { username, password, onFormSubmit, onInputChange, isValid, isLoading } = payload

    const isDisabledButton = ( isEmpty( toString( username ) ) || isEmpty( toString( password ) ) );
    
    return (
        <div className='loginPage-wrapper'>
            <div className="loginPage-container">
                <div className='top-fold'>
                    <a className='logo-bg'></a>
                </div>
                <div className='second-fold'>
                    <h2 className='heading'>Xebia - sCart Login</h2>
                    <form className='form' onSubmit={ onFormSubmit }>
                        { isValid ? null : <div>Please enter correct username or password</div> }
                        <input type='text' className='input' value= { username } placeholder='Enter Username' onChange={ (e) => onInputChange( { username: e.currentTarget.value } ) }/>
                        <input type='password' className='input' value= { password } placeholder='Enter Password' onChange={ (e) => onInputChange( { password: e.currentTarget.value } ) } /> 
                        <button type='submit' className='button' disabled={ isDisabledButton }> 
                            { isLoading ? 'Loading...' : 'Let Me In!' }
                        </button>
                    </form>
                </div>
                
            </div>
        </div>
    )
}