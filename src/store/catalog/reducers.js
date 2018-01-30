
const initialState = {
  productList: []
}


export default function catalogueReducer(state = initialState, action) {
  switch(action.type) {
    case "xxxxxxxx":
      return {
        ...state,
        loginInputValue: action.value
      };
    default:
      return state;
  }
}
//logique metier que faire en fonction des action du state.
