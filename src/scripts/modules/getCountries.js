const axios = require("axios");


const getCountries = async (toCountries) => {
    try {
        const url = "https://restcountries.eu/rest/v2/currency/";
        const response = await axios.get(`${url}${toCountries}`);
        const countries = response.data.map(country => country.name);
        return countries;
    }
    catch(e) {
        throw new Error(e);
    }
    
}

export default getCountries;