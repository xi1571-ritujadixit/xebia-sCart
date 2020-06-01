import React from 'react'
import CartListingView from '../views/cartListingView'

export default class CartListingComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            quantity: 0,
            id: '',
            cartMap: new Map(),
            grandTotal: 0 
        }
    }

    componentDidMount() {        
        this.calculatePrice()
    }

    getCartList = () => {
        const {CartList} = this.props
        return CartList
    }

    // getCartMap = () => {
    //     const {CartList} = this.props

    //     var cartMap = new Map();
    //     for(let i=0;i<CartList.length;i++) {
    //         cartMap.set(CartList[i].id,1)
    //     }
        
    //     this.setState({cartMap:cartMap})
    //     console.log(this.state.cartMap)
    // }

    calculatePrice = () => {
        const { CartList } = this.props
        
        var grandTotal = 0
        for(let i=0; i<CartList.length; i++) {
            grandTotal = grandTotal + CartList[i].price.final_price
        }

        this.setState({grandTotal:grandTotal})
    }

    onSearchChange = ( payload ) => {
        this.setState( { ...this.state, ...payload} );
        console.log(this.state)
        // this.addQuantityPrice()
        // this.updateCartMap()
    }

    updateCartMap = () => {
        const { cartMap, id , quantity } = this.state
        cartMap.set(id, quantity)
        
        this.setState({cartMap:cartMap})
        console.log(this.state)
        this.addQuantityPrice()
    }

    addQuantityPrice = () => {

        const { grandTotal, cartMap } = this.state
        const { CartList } = this.props
        var grandTotal1 = grandTotal
        var get_values = cartMap.values();
        
        for(let i=0; i<CartList.length; i++) {
            if(cartMap.get(CartList[i].id) !=null ) {
                grandTotal1 += (cartMap.get(CartList[i].id)-1)*CartList[i].price.final_price
            //console.log("If works")
                console.log(grandTotal1)
            }
            else{
            //console.log("else works")
            }
            console.log(grandTotal1)
        }
        // var i=0
        // for(var i=1;i<get_values.length;i++) {
        //     // console.log(ele);
        //     grandTotal1 += (get_values[i])*CartList[i].price.final_price
        // }

        this.setState({grandTotal:grandTotal1})
    } 

    getGrandTotal = () => {
        const {grandTotal} = this.state
        return grandTotal
    }

    render() {

        const { quantity, id } = this.state

        return (
            <CartListingView 
                {...{
                    CartList: this.getCartList(),
                    grandTotal : this.getGrandTotal(),
                    quantity,
                    id,
                    onSearchChange: this.onSearchChange,
                    updateCartMap: this.updateCartMap
                }}
            />
        )
    }

}