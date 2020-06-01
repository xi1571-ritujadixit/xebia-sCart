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
                <div className='filter-wrap'>PRICE</div>
                <div className="slide-filter">
                    <div className="control-box">
                        <input className="checkbox" type="checkbox" id="chk_Rs. 0 - Rs. 499_0-499" value="on" />
                        <label className="control--checkbox" for="chk_Rs. 0 - Rs. 499_0-499">
                            <span>Rs. 0 - Rs. 499</span>
                            {/* <div className="control__indicator"></div> */}
                        </label>
                    </div>
                    <div className="control-box">
                        <input className="checkbox" type="checkbox" id="chk_Rs. 0 - Rs. 499_0-499" value="on" />
                        <label className="control--checkbox" for="chk_Rs. 0 - Rs. 499_0-499">
                            <span>Rs. 0 - Rs. 499</span>
                            {/* <div class="control__indicator"></div> */}
                        </label>
                    </div>
                    <div className="control-box">
                        <input className="checkbox" type="checkbox" id="chk_Rs. 0 - Rs. 499_0-499" value="on" />
                        <label className="control--checkbox" for="chk_Rs. 0 - Rs. 499_0-499">
                            <span>Rs. 500 - Rs. 999</span>
                            {/* <div class="control__indicator"></div> */}
                        </label>
                    </div>
                    <div className="control-box">
                        <input className="checkbox" type="checkbox" id="chk_Rs. 0 - Rs. 499_0-499" value="on" />
                        <label className="control--checkbox" for="chk_Rs. 0 - Rs. 499_0-499">
                            <span>Rs. 1000 - Rs. 1999</span>
                            {/* <div class="control__indicator"></div> */}
                        </label>
                    </div>
                    <div className="control-box">
                        <input className="checkbox" type="checkbox" id="chk_Rs. 0 - Rs. 499_0-499" value="on" />
                        <label className="control--checkbox" for="chk_Rs. 0 - Rs. 499_0-499">
                            <span>Rs. 4000 & Above</span>
                            {/* <div class="control__indicator"></div> */}
                        </label>
                    </div>
                </div>
                <div className='filter-wrap'>DISCOUNT</div>
                <div className="slide-filter">
                    <div className="control-box">
                        <input className='checkbox' type="radio" id="rdo_40% and above_40-*" name="40% and above" value="on" />
                        <label className="control--checkbox" for="chk_Rs. 0 - Rs. 499_0-499">
                            <span>40% and above</span>
                        </label>
                    </div>
                    <div className="control-box">
                        <input className='checkbox' type="radio" id="rdo_40% and above_40-*" name="40% and above" value="on" />
                        <label className="control--checkbox" for="chk_Rs. 0 - Rs. 499_0-499">
                            <span>30% and above</span>
                        </label>
                    </div>
                    <div className="control-box">
                        <input className='checkbox' type="radio" id="rdo_40% and above_40-*" name="40% and above" value="on" />
                        <label className="control--checkbox" for="chk_Rs. 0 - Rs. 499_0-499">
                            <span>20% and above</span>
                        </label>
                    </div>
                    <div className="control-box">
                        <input className='checkbox' type="radio" id="rdo_40% and above_40-*" name="40% and above" value="on" />
                        <label className="control--checkbox" for="chk_Rs. 0 - Rs. 499_0-499">
                            <span>10% and above</span>
                        </label>
                    </div>
                    <div className="control-box">
                        <input className='checkbox' type="radio" id="rdo_40% and above_40-*" name="40% and above" value="on" />
                        <label className="control--checkbox" for="chk_Rs. 0 - Rs. 499_0-499">
                            <span>Upto 10%</span>
                        </label>
                    </div>
                </div>
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