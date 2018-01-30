import { createStore, combineReducers } from "redux"; //après on ira chercher combineReducers
import categoriesReducer from "./categories/reducer";
import productsReducer from "./products/reducer";
import productDetailsReducer from "./productDetails/reducer";

let store = createStore(combineReducers({
  categoriesReducer: categoriesReducer,
  productsReducer: productsReducer,
  productDetailsReducer : productDetailsReducer
}) );

export default store;
