import mongoose from "mongoose";

const customerScheme = new mongoose.Schema ({
    name:{
        type:String,
        required:true,
    },
    phonenumber:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    isPaidComplete:{
        type:Boolean,
        default:false
    },
    ServiceRendered:{
        type:String,
        required:true,
    },
    amountPaidUpfront:{
        type:Number,
        required:true,
    },
    Balance:{
        type:Number,
        required:true
    },
    CustomerRating:{
        type:Number,
        default:5
    },
    user:{   
        type:mongoose.Types.ObjectId, ref:"UserInfo"
     }
   
})

export default mongoose.model('CustomerInfo', customerScheme)