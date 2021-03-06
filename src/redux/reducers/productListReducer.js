import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function productListReducer(state=initialState.products,action){
    
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload
        case actionTypes.DELETE_PRODUCT_SUCCESS:
                debugger;
                  const newState2 = state.filter(product=> product.id!==action.payload.id);
                  return newState2;
        default:
            return state;
    }
}