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

        const { searchText } = this.props
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

        return filteredList
    }

    render() {

        const { isLoading } = this.state

        return (
            <ProductListingView 
                { ...{
                    filteredList: this.filterProductList(),
                    isLoading
                }}
            />
        )
    }
}