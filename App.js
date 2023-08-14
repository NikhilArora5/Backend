const express=require("express")
const app=express()

const cors=require("cors")
app.use(cors())
const connectDB=require("./config/database")
const cookieParser = require("cookie-parser");
const PORT=8081
require('dotenv').config();
connectDB()



// for req,body
app.use(express.json());
// for req.body url-form-encoded
app.use(express.urlencoded({ extended: true }));

// for cookies
app.use(cookieParser());

const userRouter=require("./modules/users/routes/index")


app.use("/",userRouter)

app.listen(PORT,(err)=>{
    if(err){
        console.log("server error")
    }else{

        console.log(`server runn successully on http://localhost:${PORT}/`)
    }
})

console.log("File running")