const express=require("express")
const router=express.Router()
const {razorPay_instance}=require("../../utils/payment")





const createOrder=async(req,res)=>{
  try {
    let amount=req.body.amount
    console.log("---body-----------",req.body)



const options={
    amount: amount*100,
    currency: "INR",
    receipt: "receipt#1",
    
  }


const myOrder= await razorPay_instance.orders.create(options)

if(myOrder){

   return res.status(200).json({
        data:myOrder,
        status:200,
        message:"order success"
    })
}
else{
    return res.status(400).json({
        data:{},
        status:400,
        message:"order failed"
    })
}
    
  } catch (error) {
    console.log("----ERORRR",error.message)
  }

}

router.post("/order",createOrder)

module.exports=router