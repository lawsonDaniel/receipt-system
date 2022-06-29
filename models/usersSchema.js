import mongoose from "mongoose";

//schemes for customer
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
    }
   
})
//scheme for users
const Users = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true 
    },
    customer:{
      
       type:[customerScheme]
    } 
})
export default mongoose.model("UserInfo",Users)