export const SET_CATEGORIES = 'SET_CATEGORIES';
export const ADD_CATEGORIES = 'ADD_CATEGORIES';

export const setCategories = (payload) =>({
    type: SET_CATEGORIES,
    payload,
});


export const addCategories = (payload) =>({
    type: ADD_CATEGORIES,
    payload,
});