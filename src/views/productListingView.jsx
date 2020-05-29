import React from 'react'

const productListingView = ( payload ) => {

    const { filteredList, isLoading } = payload    
    console.log(filteredList)
    const listItems = filteredList.map((item) => {

        return (
            <div className='ProductCard-Wrapper'>
                <div className="ProductCard">
                    <div className="row">
                        <div className="image-container">
                            <div className="card-img">
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
                        <div className='button-wrapper'>
                            <button className='button'>ADD TO BAG</button>
                        </div>                     
                        
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className='ProductList-Wrapper'>
            {
                isLoading ? <div className='ProductCard-Wrapper'>Loading...</div> : listItems
            }
        </div>
    )
}

export default productListingView