import {combineReducers, createStore} from "redux";
import { ProductReducer } from "./ProductReducer";
import {CardReducer} from "./CardReducer";
import {AuthReducer} from "./AuthReducer";


const reducers =combineReducers({
      ProductReducer,
      CardReducer,
      AuthReducer,
})


const store = createStore(reducers)


export default store;