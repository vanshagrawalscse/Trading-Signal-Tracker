const Signal=require("../models/Signal");

const getCurrentPrice=require("./binanceService");



async function updateSignalStatus(){


const signals=
await Signal.findAll({
where:{
status:"OPEN"
}
});



for(let signal of signals){


const price=
await getCurrentPrice(signal.symbol);



let status="OPEN";



if(new Date()>signal.expiry_time){

status="EXPIRED";

}



else if(signal.direction==="BUY"){


if(price>=signal.target_price){

status="TARGET_HIT";

}

else if(price<=signal.stop_loss){

status="STOPLOSS_HIT";

}


}



else{


if(price<=signal.target_price){

status="TARGET_HIT";

}


else if(price>=signal.stop_loss){

status="STOPLOSS_HIT";

}


}



let roi;



if(signal.direction==="BUY"){

roi=
((price-signal.entry_price)
/signal.entry_price)*100;


}

else{


roi=
((signal.entry_price-price)
/signal.entry_price)*100;


}



await signal.update({

status,

realized_roi:roi.toFixed(2)

});

}



}


module.exports=updateSignalStatus;