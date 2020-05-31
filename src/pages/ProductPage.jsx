import React from 'react'
import HeaderView from '../views/headerView'
import ProductListingComponent from '../components/ProductListingComponent'
import FilterBarComponent from '../components/FilterBarComponent'

export default class ProductPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchText:'',
            selectedValue:[],
            cartList: new Set()
        }
        console.log(this.state)
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

    onClickCartOpen = () => {
        this.props.history.push( {
            pathname:'/cart',
            state: {
                ...this.state
            }
        })
    }

    onClickLogo = () => {
        this.props.history.push('/productPage')
    }

    render() {
        return (
            <div className='main-container'>
                <HeaderView { ...{
                    ...this.state,
                    onSearchChange: this.onSearchChange,
                    onClickLogout: this.onClickLogout,
                    onClickCartOpen: this.onClickCartOpen,
                    onClickLogo: this.onClickLogo 
                }}/>
                <div className='main-wrapper'>
                    <FilterBarComponent { ...{
                        ...this.state,
                        onSearchChange: this.onSearchChange
                    }}
                    />
                    <ProductListingComponent { ...{
                        ...this.state,
                        onSearchChange: this.onSearchChange
                    } }/>
                </div>
            </div>
        )
    }
}