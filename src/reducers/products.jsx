import createReducer from './createReducer';
import { SET_PRODUCTS } from '../actions/products';

const setProducts = (state, action) => action.payload;

export default createReducer([], {
  [SET_PRODUCTS]: setProducts,
});

export const getProducts = (state = {}) => {
  return state.products;
};