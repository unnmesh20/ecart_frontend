import { combineReducers } from 'redux';

import categories from './categories';
import products from './products';
import orders from './orders';
import cartItems from './cartItems';
// import cartItem from './cartItem';

export default combineReducers({
  categories,
  products,
  orders,
cartItems,
//   cartItem,
 });