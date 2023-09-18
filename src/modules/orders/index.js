const express=require("express")

const router=express.Router()



const createOrder=async(req,res)=>{
    let amount=req.body.amount
    console.log("body",req.body)

var instance = new Razorpay({ key_id: 'rzp_test_91ew5wicy4mmG4', key_secret: 'Dm8eBOlU2yKXSAYdfLOYTjiI' })

const options={
    amount: amount*100,
    currency: "INR",
    receipt: "receipt#1",
    
  }


const myOrder= await instance.orders.create(options)

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

}

router.post("order",createOrder)