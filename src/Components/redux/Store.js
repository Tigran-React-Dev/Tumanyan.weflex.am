import {applyMiddleware, combineReducers, createStore} from "redux";
import { ProductReducer } from "./ProductReducer";
import {CardReducer} from "./CardReducer";
import {AuthReducer} from "./AuthReducer";
import thunk from "redux-thunk";


const reducers =combineReducers({
      ProductReducer,
      CardReducer,
      AuthReducer,
})


const store = createStore(reducers,applyMiddleware(thunk))


export default store;