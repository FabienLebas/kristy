export function categoriesActions(dispatch) {
  return {
    getCategories: () => {
      //Quand on lance, on commence par déclarer le chargement en cours
      dispatch({
        type: "LOADING_CATEGORIES"
      });

      //Puis on fait le fetch, et ensuite on déclare le chargement terminé
      return fetch("https://decath-product-api.herokuapp.com/categories")
        .then(response => response.json())
        .then(result => dispatch({
          type: "CATEGORIES_LOADED",
          categories: result
        }))
        .catch(error => {
          console.warn(error);
        });
    }
  };
}
