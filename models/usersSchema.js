import mongoose from "mongoose";

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
      
       type:[]
    } 
})
export default mongoose.model("UserInfo",Users)