export function getProductsState(state) {
  //Permet de donner aux composants l'accès au store
  return {
    products: state.productsReducer.products,
    loadingProducts: state.productsReducer.loadingProducts
  };
}
