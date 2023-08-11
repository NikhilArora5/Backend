



const {hashPassword,genToken}=require("../../../utils/authUtils")
const user=require("../../../model/user")
// const user = require("../../../model/user")

const register=async(req,res)=>{
    console.log("-body-",req.body)
    let {email,password,name}=req.body
    if(!email || !password || !name){
        res.status.json({

            status:400,
            message:'Please fill all fields',
            data:{}
        })
    }


    let savedPass= await hashPassword(password)


console.log("type ",typeof(savedPass))
console.log("hash",savedPass)
    let userSaved= await user.create({
        name,
        email,
        password:(savedPass)
    })

let token=await genToken(userSaved._id)

console.log("token",token)
    if(userSaved && token){
        console.log("user saved")
        res.status(200).json({

            status:200,
            message:"user created succesfully",
            data:userSaved
        })
    }
    

  
}












module.exports={
    register
}