import getResponse from "./getResponse";

const getExchangeRate = async (fromCurrency, toCurrency) => {
    try{
        const response = await getResponse();
        const rate = response.data.rates;
        const euro = 1 / rate[fromCurrency];
        const exchangeRate = euro * rate[toCurrency];
        return exchangeRate;
        
    } catch(error){
        throw new Error(error)
    }
    
}


export default getExchangeRate;