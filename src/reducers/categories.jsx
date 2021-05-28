import createReducer from './createReducer';
import {SET_CATEGORIES,ADD_CATEGORIES} from '../actions/categories';

const setCategories = (state,action) => action.payload
const addCategories = (state,action) =>[
    ...state,
    ...action.payload,
];

export default createReducer([],{
    [SET_CATEGORIES]: setCategories,
    [ADD_CATEGORIES]: addCategories,
});

export const getCategories = (state={}) =>{
    return state.categories;
}

