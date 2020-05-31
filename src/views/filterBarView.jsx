import React from 'react'

const filterBarView = ( payload ) => {

    const { isLoading, onSearchChange, brandText, filterBrandList, colorText, filterColorList, onValueClick, selectedValue, onRemoveValue } = payload

    const view = (
        <>
            <div>
                <div className="filter-wrap">
                    <input className='search-input' type='search' placeholder='Select brand filter' value={ brandText } onChange= { (e) => onSearchChange( { brandText: e.currentTarget.value } ) } />
                    <ul className='search-list'>
                        {
                            filterBrandList.map ( ( brand ) => {
                                return (
                                    <li className='search-list__item' onClick={ () => onValueClick( brand.value ) }>{brand.value}</li>
                                )
                            } ) 
                        }
                    </ul>
                </div>
                <div className="filter-wrap">
                    <input className='search-input' type='search' placeholder='Select color filter' value={ colorText } onChange= { (e) => onSearchChange( { colorText: e.currentTarget.value } ) } />
                    <ul className='search-list'>
                        {
                            filterColorList.map ( ( color ) => {
                                return (
                                    <li className='search-list__item' onClick={ () => onValueClick( color.title ) }>{color.title}</li>
                                )
                            } ) 
                        }
                    </ul>
                </div>
                <ul className='filter-items'>
                    {
                        selectedValue.map( (value, index) => {
                            return (
                                <li key={ index } className='filter-items__item' >
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
                { isLoading ? <div>Loading...</div> : view }
            </div>
            
        </div>
    )

}

export default filterBarView