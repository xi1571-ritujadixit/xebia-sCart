import React from 'react'

export const userHasLogin = ( WrapperView ) => {
    return class UserHasLogin extends React.Component {

        componentDidMount() {
            const token = window.localStorage.getItem('Token');
            if(token==null) {
                this.props.history.push('/')
            }
        }

        render() {
            return(
                <WrapperView { ...this.props } />
            )
        }
    }
}