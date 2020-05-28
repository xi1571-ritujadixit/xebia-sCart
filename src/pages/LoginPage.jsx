import React from 'react'
import { loginPageView as LoginPageView } from '../views/loginPageView'
import { fetch } from '../modules/httpServices'
import { constants } from '../modules/constants'
import { cloneDeep } from 'lodash'

// https://codepen.io/iamtimsmith/pen/zJPzwN?editors=0010

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            username: '',
            password: '',
            isValid: true,
            message:''
        }
    }

    onInputChange = ( payload  ) => {
        this.setState( { ...this.state, ...payload, isValid: true } );
    }
    
    onFormSubmit = (e) => {
        e.preventDefault();
        this.setState( { isLoading: true }, this.validateUserInfo )
    }

    validateUserInfo = () => {
        const { username, password } = this.state
        fetch.get ( { url: `${constants.SERVICE_URLS.LOGIN}?username=${username}&password=${password}`, callbackHandler: ( response ) => {
            console.log(response)
            const { status, message, payload } = response
            const _state = cloneDeep( this.state );
            _state.isLoading = false;

            if( status === constants.SUCCESS ) {
                _state.message = ''
                _state.isValid = true
                window.localStorage.setItem('Token', payload.token)
                window.localStorage.setItem('username', username)
            }
            else {
                _state.message = message;
                _state.isValid = false;
                window.localStorage.removeItem('username');
                window.localStorage.removeItem('Token')
            }

            this.setState( _state, this.redirectProductPage)
        }} )
    }

    redirectProductPage = () => {
        const token = window.localStorage.getItem('Token')
        if(token != null) {
            this.props.history.push('/productPage')
        }
    }

    render() {
        return (
            <LoginPageView { ...{
                ...this.state,
                onInputChange: this.onInputChange,
                onFormSubmit: this.onFormSubmit
            }}/>
        )
    }
}