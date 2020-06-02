import React from 'react';
import ProductListingView from '../views/productListingView'
import { constants } from '../modules/constants'
import { cloneDeep } from 'lodash';
import { fetch } from '../modules/httpServices';

export default class ProductListingComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            productList: [],
            isLoading: true,
            message: '',
            cartList: new Set()
        }
    }

    componentDidMount() {
        this.getProductList()
    }

    getProductList = () => {
        fetch.get( { url: constants.SERVICE_URLS.GET_PRODUCT_LIST, callbackHandler: (response) => {
            
            const { status, message, payload } = response;
            const _state = cloneDeep( this.state )
            _state.isLoading = false

            if( status === constants.SUCCESS ) {
                _state.message = ''
                _state.productList = payload
            }
            else {
                _state.message = message
            }

            this.setState(_state)
            
        } } )
    }

    filterProductList = () => {

        const { searchText, selectedValue, priceList } = this.props
        const { productList } = this.state
        
        let currentList = []
        let filteredList = []

        if(searchText !== "") {
            currentList = productList

            filteredList = currentList.filter( item => {

                const lc = item.title.toLowerCase();
                const filter = searchText.toLowerCase();

                return lc.includes(filter)
            })
        }
        else {
            filteredList = productList
        }

        if((Array.isArray(selectedValue) && selectedValue.length) || (Array.isArray(priceList) && priceList.length)) {
            filteredList = this.filterList(filteredList)
            // return filteredList
        }
        
        return filteredList
    }

    filterList = (filteredList) => {

        const { selectedValue, priceList } = this.props
        const { productList } = this.state

        var newList = new Set()

        for(var j=0; j<selectedValue.length; j++) {
            for(var i=0; i<filteredList.length; i++) {
                if(selectedValue[j] === filteredList[i].brand) {
                    console.log(filteredList[i])
                    newList.add(filteredList[i])
                }
                else if(selectedValue[j] === filteredList[i].colour.title){
                    newList.add(filteredList[i])
                }
            }
        }
        newList = Array.from(newList)

        if(!(Array.isArray(newList) && newList.length)) {
            newList = productList
        }

        var finalList = []
        if(Array.isArray(priceList) && priceList.length) {

            for(let i=0;i<priceList.length;i++){
                if(priceList[i]==null) {
                    finalList = productList
                }
                else {
                    for(let j=0;j<newList.length;j++){
                        let temp_price=newList[j].price.final_price
                        if(priceList[i]==="0"){
                            if(temp_price>="0" && temp_price<="499"){
                                finalList.push(newList[j])
                            }                        
                        }
                        else if(priceList[i]==="500"){
                            if(temp_price>="500 "&& temp_price<="999"){
                                finalList.push(newList[j])
                            }
                        }
                        else if(priceList[i]==="1000"){
                            if(temp_price>="1000" && temp_price<="1999"){
                                finalList.push(newList[j])
                            }
                        }
                        else if(priceList[i]==="2000"){
                            if(temp_price>="2000" && temp_price<="3999"){
                                finalList.push(newList[j])
                            }
                        }
                        else{
                            if(temp_price>="4000"){
                                finalList.push(newList[j])
                            }
                        }
                    }
                }
                
            }
        }

        else {
            finalList = newList
        }
        
        console.log(newList)
        return finalList
    }

    addToCart = (item) => {

        const  { onSearchChange } = this.props
        const _state = cloneDeep( this.state );
        _state.cartList.add(item)        
        this.setState(_state)
        onSearchChange( {cartList: _state.cartList} );
    }

    render() {

        const { isLoading } = this.state

        return (
            <ProductListingView 
                { ...{
                    filteredList: this.filterProductList(),
                    isLoading,
                    addToCart: this.addToCart
                }}
            />
        )
    }
}