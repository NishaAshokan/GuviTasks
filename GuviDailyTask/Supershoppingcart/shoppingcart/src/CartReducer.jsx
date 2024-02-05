
const initialState = {
    cart : []
}
export const getTotal = (cart) => {
    return(
        cart.reduce((amount, item) =>parseInt(item.price) + amount, 0)
    )
}

export function CartReducer(state = initialState, action) {
 switch(action.type){
    case "Add_Item_to_Cart":
        //console.log(state);
        return{
            
           ...state, cart : [...state.cart, action.item]
        }
        case "Remove_Item_From_Cart" :
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id)

            let newCart = [...state.cart]
if(index >= 0) {
    newCart.splice(index, 1)
}
else{
    console.warn("NOthing to delete")
}

            return{
              ...state, cart : newCart  

        }
        default:
            return state   
 }
}

export default CartReducer
