import axios from "axios";
const CATEGORY = 'https://themealdb.com/api/json/v1/1/categories.php';
const FILTER_RECIPE = 'https://themealdb.com/api/json/v1/1/search.php?s=';
const FILTER_CATEGORY = 'https://themealdb.com/api/json/v1/1/filter.php?c=';
// const SEARCH = 'https://themealdb.com/api/json/v1/1/search.php?f=';

export const sidbarReq = () => {
    return  axios.get(CATEGORY)
         .then(response => response.data.categories)
         .catch(error=> console.log(error))

 }

export const selectReq = (params) => {
    return axios.get(FILTER_CATEGORY + params)
        .then(response =>  response.data.meals)
        .catch(error=> console.log(error))
}

export const cardReq = (params) => {
    return axios.get(FILTER_RECIPE  + params)
        .then(response => response.data.meals)
        .catch(error=> console.log(error))
}
