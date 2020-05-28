import React from 'react'
import HeaderView from '../views/headerView'

export default class ProductPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchText:''
        }
    }

    onSearchChange = ( payload  ) => {
        this.setState( { ...this.state, ...payload } );
        console.log(this.state)
    }

    onClickLogout = () => {
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('Token');
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <HeaderView { ...{
                    ...this.state,
                    onSearchChange: this.onSearchChange,
                    onClickLogout: this.onClickLogout 
                }}/>
            </>
        )
    }
}