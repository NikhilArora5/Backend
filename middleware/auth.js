const jwt=require("jsonwebtoken")
const user=require("../model/user")
const verifyUser=async(req,res,next)=>{

    try {
        let token=req.headers.token
        let decoded=jwt.verify(token,process.env.JWT_SECRET)

    // console.log("--------------decode",decoded)
    
    let userLogged=await user.findOne({_id:decoded.id},{password:0})
     req.userLogged=userLogged


    if(!userLogged){
        return res.status(401).json({
            message:"validation failed"
            
    })
}
    } catch (error) {

        console.log("------------error.message",error.message)
        return res.status(401).json({
                // message:"validation failed"
                message:error.message
        })
    }
next()
}


module.exports={
    verifyUser
}