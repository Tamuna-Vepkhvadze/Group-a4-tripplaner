import axios from "axios";

export const CountryWrapper =axios.create({
    baseURL:"https://restcountries.com/"

})




//instance for post
const API_KEY = 'YXBpS2V5U2VjcmV0'

export const axiosPost = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    headers: {
        "x-bypass-token": API_KEY,
    }
})

