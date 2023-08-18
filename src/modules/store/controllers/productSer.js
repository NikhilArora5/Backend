
const product=require("../../../model/product")
const store=require("../../../model/store")


const addProduct=async(req,res)=>{

   try {
    let {name, price,storeId}=req.body

    console.log("BODY",req.body)
    let clientLogged=req.clientLogged
    if(!name || !storeId|| !price){
        return res.status(400).json({
            status:400,
            message:'Please fill required fields',
            data:{}
        })
    }
   
    let storeExists=store.findOne({_id:storeId})

    if(!storeExists){
        return res.status(400).json({
            status:400,
            message:'No such store Exist',
            data:{}
        })
    }
   
    let productSaved= await product.create({
        name, price,storeId
    })

    if(productSaved){
        return res.status(200).json({
            status:200,
            message:'product created succesfully',
            data:{}
        })
    }
   } catch (error) {
    return res.status(400).json({
        status:400,
        message:error.message,
        data:{}
    })
   }

}


module.exports={
    addProduct
}