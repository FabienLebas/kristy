const initialState = {
  cart: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "PRODUCTS_ADDED_TO_CART":
      return {
        state
      };
    default:
      return state;
  }
}

// ...initialState,
// cart: action.products
