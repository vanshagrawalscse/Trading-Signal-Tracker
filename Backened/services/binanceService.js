const axios=require("axios");


async function getCurrentPrice(symbol){


const response=
await axios.get(
`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
);


return Number(response.data.price);


}


module.exports=getCurrentPrice;