const cart = JSON.parse(localStorage.getItem("cart")||"[]");

const cartReducer=(state=cart,action:any)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            let result = state.findIndex((item:any)=>{
                return item.id == action.payload.id
            })
            if(result === -1){
                let products={...action.payload,quantity:1};
                state.push(products);
                localStorage.setItem("cart",JSON.stringify(state))
            }else{
                state[result].quantity = state[result].quantity + 1
                localStorage.setItem("cart",JSON.stringify(state))
            }
            return [...state]
        default:
            return state
    }
}
export default cartReducer;