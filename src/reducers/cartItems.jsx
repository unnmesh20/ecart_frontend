import createReducer from './createReducer';
import { SET_CART_ITEMS } from '../actions/cartItems';

const setCartItems = (state, action) => action.payload;

export default createReducer([], {
  [SET_CART_ITEMS]: setCartItems,
});

export const getCartItems = (state = {}) => {
  return state.cartItems;
};