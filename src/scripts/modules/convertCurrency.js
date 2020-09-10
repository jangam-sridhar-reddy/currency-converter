import getExchangeRate from "./getExchangeRate";
import getCountries from "./getCountries";

const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    try {
        const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
        const countries  = await getCountries(toCurrency);
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        const message = `${amount} ${fromCurrency} is Worth ${convertedAmount} ${toCurrency}. you can spent these in the following countries; ${countries}`;
        return message;
    } catch (e){
        throw new Error(e);
    }     
};

export default convertCurrency;