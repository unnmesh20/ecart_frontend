import { get } from "..//../http";
import { setOrders } from "../../actions/orders";
import { transformOrder } from "./transform";
import {createEffect,put,call} from 'redux-cosed';


export function* onFetchOrders(){
    try{
        const url = "/orders";
        let response = yield call(get,url);
        const orders = response.map(transformOrder);
        yield put(setOrders(orders));

    }
    catch(err){
        console.log(err?.message || 'Failed fetching from Categories API')
    }
}


export const fetchOrders = () => createEffect(onFetchOrders);