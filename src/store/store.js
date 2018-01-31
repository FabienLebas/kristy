import { createStore, combineReducers } from "redux"; //après on ira chercher combineReducers
import categoriesReducer from "./categories/reducer";
import productsReducer from "./products/reducer";


let store = createStore(combineReducers({
  categoriesReducer: categoriesReducer,
  productsReducer: productsReducer
}) );

export default store;
