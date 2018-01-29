export default function getCategories(){
  return fetch("https://decath-product-api.herokuapp.com/categories")
    .then(response => response.json())
    .catch(error => {
      console.warn("Error while retrieving categories");
    })
    ;
}
