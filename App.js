const express=require("express")
const app=express()

const cors=require("cors")
app.use(cors())
const connectDB=require("./config/database")
const PORT=8081
require('dotenv').config();


connectDB()
app.listen(PORT,(err)=>{
    if(err){
        console.log("server error")
    }else{

        console.log(`server runn successully on http://localhost:${PORT}/`)
    }
})

app.get("/",(req,res)=>{
    res.send("hey there")
})


console.log("File running")