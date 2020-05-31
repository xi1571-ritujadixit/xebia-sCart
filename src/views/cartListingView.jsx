import React from 'react'

const cartListingView = ( payload ) => {

    const { CartList } = payload

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
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            {listItems}
        </div>
    )

}
export default cartListingView