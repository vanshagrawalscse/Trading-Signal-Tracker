require("dotenv").config();


const express=require("express");
const cors=require("cors");


const sequelize=require("./config/database");

const routes=require("./routes/signalRoutes");

const updateStatus=require("./services/statusService");




const app=express();


app.use(cors());

app.use(express.json());


app.use("/api/signals",routes);



sequelize.sync({alter:true})
.then(()=>{

console.log("Database connected");


setInterval(()=>{

updateStatus();

},15000);



app.listen(5000,()=>{

console.log("Server running 5000");

});


})
.catch((error)=>{

console.log("Database error:",error);

});