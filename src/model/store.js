const mongoose=require("mongoose")

const store=mongoose.Schema({


    name:{
        type:String,
        required:true
    },
    email:{

        type:String,
        required:true,
        unique:false
    },
   
    about:{
        type:String,
        // required:true
    },

    clientId:{

    },
    address:{
        type:String,
        required:true,

    },
    pincode:{
        type:String,
        required:true,

    },
    about:{
        type:String,
        // required:true,

    },

    timings:{
        type:Date,
        // required:true,
    },

    isDelivery:{
        type:Boolean,
        default:false
    },

    isVeg:{
        type:Boolean,
        default:false
    }

},{

    timestamps:true
})


module.exports=mongoose.model("store",store)
