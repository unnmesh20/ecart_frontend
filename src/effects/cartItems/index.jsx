import { get } from "..//../http";
import { setCartItems } from "../../actions/cartItems";
import { transformCartItem } from "./transform";
import {createEffect,put,call} from 'redux-cosed';


export function* onFetchCartItems(){
    try{
        const url = "/cart_items";
        let response = yield call(get,url);
        const cartItems = response.map(transformCartItem);
        yield put(setCartItems(cartItems));

    }
    catch(err){
        console.log(err?.message || 'Failed fetching from Categories API')
    }
}


export const fetchCartItems = () => createEffect(onFetchCartItems);