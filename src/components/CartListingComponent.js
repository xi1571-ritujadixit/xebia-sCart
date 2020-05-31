import React from 'react'
import CartListingView from '../views/cartListingView'

export default class CartListingComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    getCartList = () => {
        const {CartList} = this.props
        return CartList
    }

    render() {
        return (
            <CartListingView 
                {...{
                    CartList: this.getCartList()
                }}
            />
        )
    }

}