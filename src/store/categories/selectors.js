export function getCategoriesState(state) {
  //Permet de donner aux composants l'accès au store
  return {
    categories: state.categoriesReducer.categories,
    loadingCategories: state.categoriesReducer.loadingCategories
  };
}
