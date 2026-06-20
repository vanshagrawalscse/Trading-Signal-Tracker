const Signal=require("../models/Signal");



exports.createSignal=async(req,res)=>{


try{


const data = req.body;
        console.log("Data received:", data);



if(data.direction==="BUY"){


if(
data.stop_loss>=data.entry_price ||
data.target_price<=data.entry_price
)

return res.status(400)
.json({
message:"Invalid BUY conditions"
});

}



if(data.direction==="SELL"){


if(
data.stop_loss<=data.entry_price ||
data.target_price>=data.entry_price
)

return res.status(400)
.json({
message:"Invalid SELL conditions"
});

}



const signal=
await Signal.create(data);



res.status(201).json(signal);


}
catch(error){

res.status(500)
.json({
message:error.message
});

}


};



exports.getSignals=async(req,res)=>{


const signals=
await Signal.findAll({
order:[
["createdAt","DESC"]
]
});


res.json(signals);


};



exports.getSignal=async(req,res)=>{


const signal=
await Signal.findByPk(req.params.id);


res.json(signal);


};



exports.deleteSignal = async(req,res)=>{

try{

const deleted = await Signal.destroy({
    where:{
        id:req.params.id
    }
});


if(deleted === 0){
    return res.status(404).json({
        message:"Signal not found"
    });
}


res.json({
    message:"Signal deleted successfully"
});


}
catch(error){

res.status(500).json({
    message:error.message
});

}

};
exports.updateSignal = async(req,res)=>{

try{

const signal = await Signal.findByPk(req.params.id);


if(!signal){
    return res.status(404).json({
        message:"Signal not found"
    });
}


await signal.update(req.body);


res.json(signal);


}
catch(error){

res.status(500).json({
    message:error.message
});

}

};