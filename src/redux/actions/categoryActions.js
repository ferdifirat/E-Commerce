import * as actionTypes from './actionTypes'

export function changeCategory(category){
    return {type : actionTypes.CHANGE_CATEGORY, payload: category}
}
export function getCategoriesSuccess(categories){
    return {type : actionTypes.GET_CATEGORIES_SUCCESS , payload : categories}
}

export function updateCategorySuccess(category){
    return {type:actionTypes.UPDATE_CATEGORY_SUCCESS, payload : category}
}

export function createCategorySuccess(category){
    return {type:actionTypes.CREATE_CATEGORY_SUCCESS, payload : category}
}

export function saveCategoryApi(category){
    return fetch("http://localhost:3001/categories" + (category.id ||""),{
        method: category.id ? "PUT" : "POST",
        header : {"content-type" : "application/json"},
        body: JSON.stringify(category)
    })
    .then (handleResponse)
    .catch(handleError);
}

export function saveCategory(category){
    return function(dispatch){
        return saveCategoryApi(category).then((saveCategory)=>{
            category.id
        ? dispatch(updateCategorySuccess(saveCategory))
        : dispatch(createCategorySuccess(saveCategory));
        }).catch(error=>{throw error});
    }
}

export async function handleResponse(response){
    if(response.ok){
        return response.json();
    }

    const error = await response.text();
    throw new Error(error);
}

export function handleError(error){
    console.error("Bir hata oluştu")
    throw error;
}

export function getCategories(){
    return function(dispatch){
        let url ="http://localhost:3001/categories"
        return fetch(url)
        .then(response=>response.json())
        .then(result=>dispatch(getCategoriesSuccess(result)));
    }
}
