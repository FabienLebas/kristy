
export function listallproducts(dispatch) {
  return {
    showAllItem: (event) => dispatch({
      type: "params1",
      value: event.target.value
    }),
    showOneItemDetails: () => dispatch({
      type: "params2"
    }),
    addToCart: () => dispatch({
      type: "params2"
    })
  }
}

//dispatch les nouvelles infos au store pour update du state
