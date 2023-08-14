const express=require("express")
const {verifyUser}=require("../../../middleware/auth")
const router=express.Router()

const {register,login, getData}=require("../controllers/userAuth")


router.post("/register", register
)

router.get("/", verifyUser,getData
)


router.post("/login",login
)


module.exports=router