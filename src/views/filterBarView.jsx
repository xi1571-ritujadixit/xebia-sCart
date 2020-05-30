import React from 'react'

const filterBarView = ( payload ) => {

    const { isLoading, onSearchChange, brandText, filterBrandList, colorText, filterColorList, onValueClick, selectedValue, onRemoveValue } = payload

    const view = (
        <>
            <div>
                <div>
                    <input type='search' placeholder='Select brand filter' value={ brandText } onChange= { (e) => onSearchChange( { brandText: e.currentTarget.value } ) } />
                    <ul>
                        {
                            filterBrandList.map ( ( brand ) => {
                                return (
                                    <li onClick={ () => onValueClick( brand.value ) }>{brand.value}</li>
                                )
                            } ) 
                        }
                    </ul>
                </div>
                <div>
                    <input type='search' placeholder='Select color filter' value={ colorText } onChange= { (e) => onSearchChange( { colorText: e.currentTarget.value } ) } />
                    <ul>
                        {
                            filterColorList.map ( ( color ) => {
                                return (
                                    <li onClick={ () => onValueClick( color.title ) }>{color.title}</li>
                                )
                            } ) 
                        }
                    </ul>
                </div>
                <ul>
                    {
                        selectedValue.map( (value, index) => {
                            return (
                                <li key={ index }>
                                    <span>{ value }</span>
                                    <span onClick={ () => onRemoveValue( index ) }>&#8722;</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )

    return (
        <div className='filter-bar-container'>
            <div className="filter-sideBar">
                <h3>Filters</h3>
            </div>
            { isLoading ? <div>Loading...</div> : view }
        </div>
    )

}

export default filterBarView