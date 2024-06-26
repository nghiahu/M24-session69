import { combineReducers,createStore } from "redux";
import productReducer from './reducers/productReducer'
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    productReducer,
    cartReducer
    
})
const store = createStore(rootReducer);
export default store;