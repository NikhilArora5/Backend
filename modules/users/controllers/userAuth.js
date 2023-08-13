



const {hashPassword,genToken,ComparePasswordFunc}=require("../../../utils/authUtils")
const user=require("../../../model/user")


const register=async(req,res)=>{
    try {
        console.log("-body-",req.body)
    let {email,password,name}=req.body

    if(!email || !password || !name){
       return res.status(400).json({
            status:400,
            message:'Please fill all fields',
            data:{}
        })
    }


    let userExist= await user.findOne({email})
    console.log("User egister",userExist)

    if(userExist){
       return res.status(400).json({
            status:400,
            message:'user with this email already exist',
            data:{}
        })
    }

    let savedPass= await hashPassword(password)

    let userSaved= await user.create({
        name,
        email,
        password:(savedPass)
    })

    let token=await genToken(userSaved._id)

    if(userSaved && token){
        console.log("user saved")
        return res.status(200).json({
            status:200,
            message:"user created succesfully",
            data:userSaved
        })

    }
    } catch (error) {
        return res.status(400).json({
            status:400,
            message:error.message,
            data:userSaved
        })
    }

}



const login=async(req,res)=>{

      /* 
       
        * LOGIN API LEARNING
        * Notes : .lean() is very Imp if not used may change the behaviour
        * userExist.token=token
        *  {...userExist,token}  may  not work
        * use try catch to prevent server crash
    */

 try {
    let {email,password}=req.body
    
    if(!email || !password){
        return res.status(400).json({
            status:400,
            message:'Please fill all fields',
            data:{}
        })
    }


  
   
    let userExist= await user.findOne({email}).lean()

    if(!userExist){
        return res.status(401).json({
            status:401,
            message:'user does not exist',
            data:{}
        })

    }



    let isPassTrue=await ComparePasswordFunc(password,userExist.password)
    
    let token=await genToken(userExist._id)

    userExist.password=""

    if(isPassTrue){

        return res.status(200).json({
            status:200,
            message:'login succesfull',
            data:{...userExist,token}
        })

    }else{
        return res.status(401).json({
            status:401,
            message:'incorrect credentials',
            data:{}
        })

    }
 } catch (error) {
    return res.status(401).json({
        status:401,
        message:error.message,
        data:{}
    })
    
 }

}











module.exports={
    register,login
}