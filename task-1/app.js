const express = require("express")
const dotenv = require("dotenv")
const mysql2 = require("mysql2")

dotenv.config()
var app = express()

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  })

db.connect((err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("connected to database");
        
    }
})

app.get("./",(req,res)=>{
     res.send("hello")
})  

app.listen(3005,()=>{
   console.log("server running");
})