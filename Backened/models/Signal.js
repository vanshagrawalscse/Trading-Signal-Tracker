const {DataTypes}=require("sequelize");

const sequelize=require("../config/database");


const Signal=sequelize.define("Signal",{


id:{
type:DataTypes.UUID,
defaultValue:DataTypes.UUIDV4,
primaryKey:true
},


symbol:{
type:DataTypes.STRING,
allowNull:false
},


direction:{
type:DataTypes.ENUM("BUY","SELL"),
allowNull:false
},


entry_price:{
type:DataTypes.DECIMAL,
allowNull:false
},


stop_loss:{
type:DataTypes.DECIMAL,
allowNull:false
},


target_price:{
type:DataTypes.DECIMAL,
allowNull:false
},


entry_time:{
type:DataTypes.DATE,
allowNull:false
},


expiry_time:{
type:DataTypes.DATE,
allowNull:false
},


status:{
    type:DataTypes.ENUM(
        "OPEN",
        "CLOSED",
        "EXPIRED"
    ),
    defaultValue:"OPEN"
},

realized_roi:{
type:DataTypes.DECIMAL,
allowNull:true
}


},{
timestamps:true

});


module.exports=Signal;