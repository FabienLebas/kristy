import { createStore } from "redux"; //après on ira chercher combineReducers
import categoriesReducer from "./categories/reducer";

let store = createStore(categoriesReducer);

export default store;
