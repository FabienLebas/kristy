import { createStore, combineReducers } from "redux"; //après on ira chercher combineReducers
import categoriesReducer from "./categories/reducer";
import productsReducer from "./products/reducer";
import userReducer from "./user/reducer";


let store = createStore(combineReducers({
  categoriesReducer,
  productsReducer,
  userReducer
}) );

export default store;
