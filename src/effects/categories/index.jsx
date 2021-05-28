import { get } from "..//../http";
import { setCategories } from "../../actions/categories";
import { transformCategory } from "./transform";
import {createEffect,put,call} from 'redux-cosed';


export function* onFetchCategories(){
    try{
        const url = "/categories";
        let response = yield call(get,url);
        const categories = response.map(transformCategory);
       // console.log("AAAAAAAA",response.map(transformCategory))
       // debugger;
        yield put(setCategories(categories));

    }
    catch(err){
        console.log(err?.message || 'Failed fetching from Categories API')
    }
}


export const fetchCategories = () => createEffect(onFetchCategories);