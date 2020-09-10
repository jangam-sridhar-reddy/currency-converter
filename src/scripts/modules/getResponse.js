
const axios = require("axios");
const  getResponse = async () => {
    try{
        const url = "http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1";
        const response =  await axios.get(url);
        return response;        
    }
    catch (e) {
        console.log(e)
    }    
     
}
export default getResponse;
