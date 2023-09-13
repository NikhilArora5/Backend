const express=require("express")
const fileUpload = require("express-fileupload");
const app=express()

const cors=require("cors")
app.use(cors( {origin: "*",credentials: true,}))
const connectDB=require("./config/database")
const cookieParser = require("cookie-parser");
const PORT=8081
require('dotenv').config();
connectDB()

app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
      createParentPath: true,
    })
  );

// for req,body
app.use(express.json());
// for req.body url-form-encoded
app.use(express.urlencoded({ extended: true }));

// for cookies
app.use(cookieParser());

const userRouter=require("./src/modules/users/index")
const clientRouter=require("./src/modules/client/index")
const storeRouter=require("./src/modules/store/index")


app.use("/user/",userRouter)
app.use("/client/",clientRouter)
app.use("/store/",storeRouter)

app.listen(PORT,(err)=>{
    if(err){
        console.log("server error")
    }else{

        console.log(`Server Running  ✔️   on http://localhost:${PORT}/`)
    }
})
