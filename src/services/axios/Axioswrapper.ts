import axios from "axios";

export const CountryWrapper =axios.create({
    baseURL:"https://restcountries.com/"

})




const API_KEY = "YXBpS2V5U2VjcmV0"

export const serwercall = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    headers: {
        "Content-Type": "application/json",
        "x-bypass-token": API_KEY,
    }
})


