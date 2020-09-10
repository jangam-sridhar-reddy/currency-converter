import "@babel/polyfill";
import convertCurrency from "./modules/convertCurrency";
convertCurrency("USD", "EUR", 30);


const returnedCurrency = async (fromCurrency, toCurrency, amount) => {
    const returnedValue = await convertCurrency(fromCurrency, toCurrency, amount);
    return returnedValue;
}

returnedCurrency("USD", "EUR", 30).then((resolve) => {
    if(resolve){       
        console.log(resolve) ;
        return resolve ;
    }
}).catch(error => {
    throw new Error(error);
});