export function productsActions(dispatch) {
  return {
    getProducts: (category_id) => {
      //Quand on lance, on commence par déclarer le chargement en cours
      dispatch({
        type: "LOADING_PRODUCTS"
      });

      //Puis on fait le fetch, et ensuite on déclare le chargement terminé
      return fetch(`https://decath-product-api.herokuapp.com/categories/${category_id}/products`)
        .then(response => response.json())
        .then(result => dispatch({
          type: "PRODUCTS_LOADED",
          products: result
        }))
        .catch(error => {
          console.warn(error);
        });
    }
  };
}
