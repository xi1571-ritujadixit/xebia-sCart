import React from 'react'
import HeaderView from '../views/headerView'
import CartListingComponent from '../components/CartListingComponent'

export default class CartPage extends React.Component {
    
    constructor(props) {
        super(props)
        const{ cartList } = this.props.location.state
        const CartList = Array.from(cartList)
        this.state = {
            CartList: CartList
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

    onClickCartOpen = () => {
        this.props.history.push( {
            pathname:'/cart',
            state: {
                cartList: this.state.cartList
            }
        })
    }

    onClickLogo = () => {
        this.props.history.push({
            pathname:'/productPage',
            state: {
                ...this.state
            }
        })
    }

    render() {

        return (
            <div className='cart-wrapper'>
                <HeaderView { ...{
                    ...this.state,
                    onSearchChange: this.onSearchChange,
                    onClickLogout: this.onClickLogout,
                    onClickCartOpen: this.onClickCartOpen,
                    onClickLogo: this.onClickLogo 
                }}
                />
                <CartListingComponent {...{
                    ...this.state
                }}
                />
            </div>
        )
    }

}