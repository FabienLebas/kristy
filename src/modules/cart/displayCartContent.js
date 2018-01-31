export default function displayCartContent() {
  const myArray = JSON.parse(localStorage.getItem("cart"));
  const myItem = [];
  for (let i = 0; i < myArray.length; i++) {
    myItem.push(localStorage.getItem(localStorage.key(i)));
  }
  return myItem;
}
