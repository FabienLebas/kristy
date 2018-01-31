export default function getCartState(state) {
  //Permet de donner aux composants l'accès au store
  return {
    cart: state.cartReducer.cart,
  };
}
