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

    render() {
        // const{ cartList } = this.props.location.state
        // const CartList = Array.from(cartList)
        console.log(this.state)
        return (
            <div className='cart-wrapper'>
                <HeaderView />
                <CartListingComponent />
            </div>
        )
    }

}