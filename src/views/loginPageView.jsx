import React from 'react'
import { isEmpty, toString } from 'lodash';

export const loginPageView = (payload) => {

    const { username, password, onFormSubmit, onInputChange, isValid, isLoading } = payload

    const isDisabledButton = ( isEmpty( toString( username ) ) || isEmpty( toString( password ) ) );
    
    return (
        <div>
            <form onSubmit={ onFormSubmit }>
                { isValid ? null : <div>Please enter correct username or password</div> }
                <input type='text' value= { username } onChange={ (e) => onInputChange( { username: e.currentTarget.value } ) }/>
                <input type='password' value= { password } onChange={ (e) => onInputChange( { password: e.currentTarget.value } ) } /> 
                <button type='submit' disabled={ isDisabledButton }> 
                    { isLoading ? 'Loading...' : 'Login' }
                </button>
            </form>
        </div>
    )
}