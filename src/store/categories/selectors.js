export function getCategoriesState(state) {
  //Permet de donner aux composants l'accès au store
  return {
    categories: state.categories,
    loadingCategories: state.loadingCategories
  };
}
