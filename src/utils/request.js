import axios from 'axios';
const BASE_URL = 'https://themealdb.com/api/json/v1/1';
const instance = axios.create ({baseURL: BASE_URL});

export const sidbarReq = () => {
    return instance.get('/categories.php')
        .then(response => response.data.categories)
        .catch(error => console.log(error))

}

export const selectReq = (params) => {
    return instance.get('/filter.php?c=' + params)
        .then(response => response.data.meals)
        .catch(error => console.log(error))
}

export const cardReq = (params) => {
    return instance.get('/search.php?s=' + params)
        .then(response => response.data.meals)
        .catch(error => console.log(error))
}

export const serchReq = (params) => {
    return instance.get('/search.php?f=' + params)
        .then(response => response.data.meals)
        .catch(error => console.log(error))
}