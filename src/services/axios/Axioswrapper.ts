import axios from "axios";

export const CountryWrapper =axios.create({
    baseURL:"https://restcountries.com/"

})

