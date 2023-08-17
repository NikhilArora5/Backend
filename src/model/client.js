const mongoose=require("mongoose")

const client=mongoose.Schema({


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
    },
    about:{
        type:String,
        // required:true
    }
},{

    timestamps:true
})


module.exports=mongoose.model("client",client)
