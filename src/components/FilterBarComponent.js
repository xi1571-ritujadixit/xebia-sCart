import React from 'react'
import FilterBarView from '../views/filterBarView'
import { fetch } from '../modules/httpServices'
import { constants } from '../modules/constants'
import { cloneDeep } from 'lodash';

export default class FilterBarComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            message: '',
            filterList: [],
            brandText: '',
            selectedValue: [],
            colorText: ''
        }
    }

    componentDidMount() {
        this.getFiltersList()
    }

    onSearchChange = ( payload ) => {
        this.setState( { ...this.state, ...payload} );
    }

    getFiltersList = () => {
        fetch.get( { url: constants.SERVICE_URLS.GET_FILTERS_LIST, callbackHandler: (response) => {

            const { status, message, payload } = response;
            const _state = cloneDeep( this.state )
            _state.isLoading = false

            if( status === constants.SUCCESS ) {
                _state.message = ''
                _state.filterList = payload
            }
            else {
                _state.message = message
            }

            this.setState(_state)
            console.log(_state)
        } } )
    }

    filterBrandList = () => {

        const { brandText, filterList } = this.state

        let currentList = []
        let filteredList = []

        if(brandText !== "") {
            currentList = filterList[0].values

            filteredList = currentList.filter( item => {

                const lc = item.value.toLowerCase()
                const filter = brandText.toLowerCase()

                return lc.includes(filter)

            } )
        }
        else {
            filteredList = currentList
        }
        return filteredList
    }

    filterColorList = () => {

        const { colorText, filterList } = this.state

        let currentList = []
        let filteredList = []

        if(colorText !== "") {
            currentList = filterList[1].values

            filteredList = currentList.filter( item => {

                const lc = item.title.toLowerCase()
                const filter = colorText.toLowerCase()

                return lc.includes(filter)

            } )
        }
        else {
            filteredList = currentList
        }
        return filteredList
    }

    onValueClick = (value) => {

        const  { onSearchChange } = this.props

        const _state = cloneDeep(this.state)
        // console.log(_state.filterList[0]["values"][0]["value"])
        for (var i=0; i<_state.filterList[0]["values"].length; i++) {
            if(value === _state.filterList[0]["values"][i]["value"]) {
                _state.selectedValue.push(_state.filterList[0]["values"][i]["value"])
            }
        }

        for (i=0; i<_state.filterList[1]["values"].length; i++) {
            if(value === _state.filterList[1]["values"][i]["title"]) {
                _state.selectedValue.push(_state.filterList[1]["values"][i]["title"])
            }
        }

        _state.brandText = '';
        _state.colorText = '';
        this.setState( _state );
        console.log(_state.selectedValue)
        onSearchChange( {selectedValue: _state.selectedValue} );
    }

    onRemoveValue = ( value ) => {
        const  { onSearchChange } = this.props
        const _state = cloneDeep( this.state );
        _state.brandText = '';
        _state.selectedValue.splice( value, 1 );
        this.setState( _state );
        onSearchChange( {selectedValue: _state.selectedValue} );
        console.log(_state)
    }

    render() {
        const { isLoading, brandText, colorText, selectedValue } = this.state
        return (
            <FilterBarView 
                {...{
                    isLoading,
                    filterBrandList: this.filterBrandList(),
                    brandText,
                    onSearchChange: this.onSearchChange,
                    colorText,
                    filterColorList: this.filterColorList(),
                    onValueClick: this.onValueClick,
                    selectedValue,
                    onRemoveValue: this.onRemoveValue
                }}
            />
        )
    }

}