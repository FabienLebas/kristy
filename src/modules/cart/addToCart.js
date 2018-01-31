export function addToCart(product) {
  let myArray = JSON.parse(localStorage.getItem("cart"));

  if (myArray === null) {
    myArray = [];
  }
  if (myArray.find(element => element.item.id === product.id) === undefined) {
    const obj = {
      item: product,
      qty: 1
    };
    myArray.push(obj);
  } else {
    const myIndex = myArray.findIndex(element => element.item.id === product.id);
    myArray[myIndex] = {
      item: product,
      qty: myArray[myIndex].qty + 1
    };
  }
  const targetArray = JSON.stringify(myArray);
  storeData("cart", targetArray);
  window.location.reload();
}


export function removeFromCart(product) {
  let myArray = JSON.parse(localStorage.getItem("cart"));

  if (myArray === null) {
    return window.alert("Cart is already empty");
  } else {
    const myIndex = myArray.findIndex(element => element.item.id === product.id);
    if (myArray[myIndex].qty > 1 ) {
      myArray[myIndex] = {
        item: product,
        qty: myArray[myIndex].qty - 1
      };
    } else {
      myArray = myArray.filter( element => element.item.id !== product.id)
    }
    const targetArray = JSON.stringify(myArray);
    storeData("cart", targetArray);
    window.location.reload();
  }


}


function storeData(key, value) {
  try {
    localStorage.setItem(key, value);
    console.log(localStorage.getItem("cart"));
    return true; // All went well
  } catch (error) {
    console.warn("something wrong happened", error);
    return false; // An error occured
  }
}
