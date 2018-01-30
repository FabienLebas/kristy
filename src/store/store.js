import { createStore, combineReducers } from 'redux';
import Catalog from './catalog/reducers';



let store = createStore(Catalog, users);

export default store;
