export const initialState ={
    basket: [],
    user: null,
}


export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => {
        return item.price + amount;
    }, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "Set_user":
            return {
                ...state,
                user: action.user
            }
        case 'Add_to_basket':
            //logic for add item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            
        case 'Remove_from_basket':
            //logic for removing item from basket
            
            //clone the basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if(index >=0){
                //item exist in basket, remove it
                newBasket.splice(index,1)

            }
            else {
                console.warn('Can remove ')
            }
            return  { 
                ...state,
                basket: newBasket, 
            }
            
        default:
            return state;
    }
}

export default reducer;
