let defaultState = {
    selectedItems: { items: [], restaurantName: "" },
};

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let newState = { ...state };
            if(action.payload.checkboxValue){
                // console.log("ADD to cart");      
                newState.selectedItems = {
                    items: [...newState.selectedItems.items, action.payload],
                    restaurantName: action.payload.restaurantName,
                };
                // console.log(newState, "👉🏻");
                return newState;

            } else {
                // console.log("REMOVE from cart");
                newState.selectedItems = {
                    items: [
                        ... newState.selectedItems.items.filter(
                            (item) => item.title != action.payload.title
                        ),
                    ],
                    restaurantName: action.payload.restaurantName,
                };
            }
            // console.log(newState, "👉🏻");
            return newState;
                 
        }
        case 'EMPTY_CART': {
            let newState = defaultState;
            return newState;
        }
        
        default:
            return state;
    }
}

export default cartReducer;