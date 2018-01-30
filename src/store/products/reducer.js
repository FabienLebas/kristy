
const initialState = {
  products: [],
  loadingProducts: false
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING_PRODUCTS":
      return {
        ...initialState,
        loadingProducts: true
      };
    case "PRODUCTS_LOADED":
      return {
        ...initialState,
        loadingProducts: false,
        products: action.products
      };
    default:
      return state;
  }
}
