import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'


function CheckoutProduct({id, title, image, price, rating}) {
    
    const [{basket}, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        //remove item
        dispatch({
            type: "Remove_from_basket",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt =""/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">  
                    <strong>{price}</strong>
                    <small> VND</small> 
                </p>
                
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_)=> (
                            <p class="fa fa-star checked"></p> 
                        ))
                    }
                </div>
                
                <button onClick={ removeFromBasket }>Remove from basket</button>

            </div>
        </div>
    )
}

export default CheckoutProduct
