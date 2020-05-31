import React from 'react'

const cartListingView = ( payload ) => {

    const { CartList, grandTotal, onSearchChange, updateCartMap } = payload

    const listItems = CartList.map((item) => {

        return (
            <div className='ProductCard-Wrapper' key={item.id}>
                <div className="ProductCard">
                    <div className="row">
                        <div className="image-container">
                            <div className="car￼d-img">
                                <img className="listing-img" src={ item.image } alt={ item.title } />
                            </div>
                        </div>
                        <div className="text-wrapper">
                            <div className="text">
                                <h2>{ item.title }</h2>
                                <h2>{ item.brand }</h2>
                                <h2>{ item.price.final_price }</h2>
                            </div>                            
                        </div>
                        <div className="quantity-wrapper">
                            Quantity : 
                            <select onChange = { (e) => {onSearchChange( { quantity:e.currentTarget.value, id: item.id } ); updateCartMap();}}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            {listItems}
            <h2>Payment Details</h2>
            <span>Grand Total: </span> {grandTotal}
        </div>
    )

}
export default cartListingView