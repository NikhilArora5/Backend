const mongoose=require("mongoose")

const admin=mongoose.Schema({


    name:{
        type:String,
        required:true
    },
    email:{

        type:String,
        required:true,
        unique:false
    },
    password:{
        type:String,
        required:true
    }
})

