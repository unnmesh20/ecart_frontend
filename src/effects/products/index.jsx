import { createEffect, call, put, select } from 'redux-cosed';

import { get } from '../../http';

import { setProducts } from '../../actions/products';
import { transformProduct } from './transform';
// import { getProductFormValues, getProductFormInitialValues } from '../../reducers/form';


export function* onFetchProducts(categoryId) {
  try {
    // debugger;
    const url = `/categories/${categoryId}/products`;
    let response = yield call(get, url);
    const products = response.map(transformProduct);
    console.log(products)
    yield put(setProducts(products));
  } catch (err) {
    console.log(err?.message || 'Failed Products API')
  }
}

export const fetchProducts = (categoryId) =>
  createEffect(onFetchProducts, categoryId);



// export function* onEditProduct() {
//   console.log("Here in onedit effect")
//   try 
//     {
//         const data = yield select(getProductFormValues);
//         const initialData = yield select(getProductFormInitialValues);
//         // 
//         // const url = `/products${1}`;
//         // let resp = yield call(put, url, );
//         // const products = resp.data.map(transformProduct);
//         // yield put(setProducts(products));
//     }  catch (err) {
//       console.log(err?.message || 'Failed Products API')
//     }
//   }
  
//   export const editProduct = () =>
//     createEffect(onEditProduct);