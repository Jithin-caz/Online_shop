import {combineReducers} from 'redux'
import { productReducer,selectedProductReducer } from './productReducer'
import { loggedinReducer } from './authReducers';

const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
    logIn:loggedinReducer,
});

export default reducers