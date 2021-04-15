import axios from 'axios';
const BASE_URL = 'https://themealdb.com/api/json/v1/1';
const  METHOD = 'get';
const instance = axios.create ({baseURL: BASE_URL, method: METHOD});

const CATEGORY = '/categories.php';
const FILTER_RECIPE = '/search.php?s=';
const FILTER_CATEGORY = '/filter.php?c=';
const SEARCH = '/search.php?f=';

export const sidbarReq = () => {
    return instance(CATEGORY)
        .then(response => response.data.categories)
        .catch(error => console.log(error))

}

export const selectReq = (params) => {
    return instance(FILTER_CATEGORY + params)
        .then(response => response.data.meals)
        .catch(error => console.log(error))
}

export const cardReq = (params) => {
    return instance(FILTER_RECIPE + params)
        .then(response => response.data.meals)
        .catch(error => console.log(error))
}

export const serchReq = (params) => {
    return instance(SEARCH + params)
        .then(response => response.data.meals)
        .catch(error => console.log(error))
}