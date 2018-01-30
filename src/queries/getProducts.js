export default function getProducts(category_id){
  return fetch(`https://decath-product-api.herokuapp.com/categories/${category_id}/products`)
    .then(response => response.json())
    .catch(error => {
      console.warn("Error while retrieving products");
    })
    ;
}
