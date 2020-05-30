import React from 'react';
import ProductListingView from '../views/productListingView'
import { constants } from '../modules/constants'
import { cloneDeep } from 'lodash';
import { fetch } from '../modules/httpServices';
debugger
export default class ProductListingComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            productList: [],
            isLoading: true,
            message: ''
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

        const { searchText, selectedValue } = this.props
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

        if(Array.isArray(selectedValue) && selectedValue.length) {
            filteredList = this.filterList(filteredList)
            return filteredList
        }
        
        return filteredList
    }

    filterList = (filteredList) => {

        const { selectedValue } = this.props
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
        console.log(newList)

        return newList
    }

    addToCart = (payload) => {

        alert('hi')
        // console.log(payload)
        // var cartList = new Set()
        
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