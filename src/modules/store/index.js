const express=require("express")
const { verifyClient } = require("../../middleware/auth")
const {addStore,}=require("./controllers/addStore")
const {addProduct}=require("./controllers/productSer")
const router=express.Router()


router.post("/addStore",verifyClient, addStore)
router.post("/addProduct",verifyClient, addProduct)






module.exports=router