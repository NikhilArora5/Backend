const express=require("express")
const {verifyUser}=require("../../../middleware/auth")
const router=express.Router()

const {register,login, getData,logout}=require("../controllers/userAuth")


router.post("/register", register
)

router.get("/", verifyUser,getData
)


router.post("/login",login
)

router.post("/logout",logout
)


module.exports=router