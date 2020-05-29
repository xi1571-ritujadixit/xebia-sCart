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
            filterList: []
        }
    }

    componentDidMount() {
        this.getFiltersList()
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

    render() {
        const { isLoading, filterList } = this.state
        return (
            <FilterBarView 
                {...{
                    isLoading,
                    filterList
                }}
            />
        )
    }

}