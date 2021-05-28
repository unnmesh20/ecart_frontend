import createReducer from './createReducer';
import { SET_ORDERS } from '../actions/orders';

const setOrders = (state, action) => action.payload;

export default createReducer([], {
  [SET_ORDERS]: setOrders,
});

export const getOrders = (state = {}) => {
  return state.orders;
};