import React from 'react'

const cartListingView = ( payload ) => {

    const { CartList, grandTotal, onSearchChange, updateCartMap } = payload

    const listItems = CartList.map((item) => {

        return (
            <div className='CartCard-Wrapper' key={item.id}>
                <div className="CartCard">
                    <div className="Cartrow">
                        <div className="cartimage-container">
                            <div className="img-card">
                                <img className="listing-img" src={ item.image } alt={ item.title } />
                            </div>
                        </div>
                        <div className="carttext-wrapper">
                            <div className="text">
                                <h2>{ item.title }</h2>
                                <h2 className='bold'>{ item.brand }</h2>
                                <h2 className='bolder'>₹{ item.price.final_price }&nbsp;|&nbsp;{ item.discount }%&nbsp;OFF</h2>
                                <h2><span className="dot" style={{ backgroundColor: item.colour.color}} />&nbsp;&nbsp;{ item.colour.title }</h2>
                            </div>                            
                        </div>
                        <div className="cartquantity-wrapper">
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
            <div className='payment-wrapper'>
                <div className="payment-container">
                    <header class="payment-detail">Payment Details</header>
                    <div className="payment-tbl-data">
                        <div class="table-row">
                            <div class="name">Bag Total</div>
                            <div class="value">₹{grandTotal}</div>
                        </div>
                        <div class="table-row">
                            <div class="name">Sub Total</div>
                            <div class="value">₹{grandTotal}</div>
                        </div>
                        <div class="table-row">
                            <div class="name">Shipping Charge</div>
                            <div class="value">
                                <i class="info-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                        <path fill="#8C8D94" d="M8 0C3.586 0 0 3.586 0 8s3.586 8 8 8 8-3.586 8-8-3.586-8-8-8zm0 .64A7.355 7.355 0 0 1 15.36 8 7.355 7.355 0 0 1 8 15.36 7.355 7.355 0 0 1 .64 8 7.355 7.355 0 0 1 8 .64zm-.39 3.49c-.069 0-.11.041-.11.11v.84c0 .069.04.12.11.12h.78c.068 0 .11-.051.11-.12v-.84c0-.069-.041-.11-.11-.11h-.78zm-.02 2.31a.114.114 0 0 0-.07.11v5.27c0 .069.041.11.11.11h.74c.069 0 .11-.04.11-.11V6.55c0-.069-.04-.11-.11-.11h-.74c-.017 0-.026-.005-.04 0z">
                                        </path>
                                    </svg>
                                </i>
                                Free
                            </div>
                        </div>
                        <div class="table-row">
                            <div class="name medium">Grand Total</div>
                            <div class="value medium">₹{grandTotal}</div>
                        </div>
                    </div>
                </div>                
            </div>            
        </div>
    )

}
export default cartListingView