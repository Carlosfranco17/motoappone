const { DataTypes} = require('sequelize')
const {db} = require("./../database/config")


const Repair=db.define('repair',{

    id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        unique:true,
        type:DataTypes.INTEGER,
    },

    date:{
        type:DataTypes.DATE, 
        allowNull:false,
    },

    status:{
        type:DataTypes.ENUM('peding','completed','cancelled'),
        allowNull:false,
        defaultValue:'peding'
        
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
       
    },
  
    

})


module.exports= Repair;