const Sequelize=require("sequelize");
require("dotenv").config({path:"variables.env"});

module.exports=new Sequelize(process.env.BD_NOMBRE,process.env.BD_USER,process.env.BD_PASS,{
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: "mysql",
    define: {
        timestamps: false
    },
    pool:{
        max:5,
        min:0,
        acquire:300000,
        idle:10000
    },
    operatorAliases: false
});


/*
module.exports=new Sequelize("agenciadeviajes","root","root",{
    host:"127.0.0.1",
    port: "3306",
    dialect: "mysql",
    define: {
        timestamps: false
    },
    pool:{
        max:5,
        min:0,
        acquire:300000,
        idle:10000
    },
    operatorAliases: false
});
*/