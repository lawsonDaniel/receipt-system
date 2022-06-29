import  express  from "express";
import usersSchema from "../models/usersSchema.js";
import bcrypt from 'bcrypt'
const LoginRouter = express.Router()

//create user login route

LoginRouter.post("/",(req,res)=>{
    const email = req.body.email
    const password = req.body.password

    //get the user trying to login
    usersSchema.findOne({
        email:email
    }) .then((value)=>{
        
        //check if the user exists
        if(value === null){
            res.status(404).json({
                error:"username does not exists"
            })
        }else{
            //compare password with hashed value
            console.log(password)
            console.log(value.password)
            const isValidPass = bcrypt.compareSync(password, value.password);
            if(isValidPass){
                res.json({
                    message:"Users logged in sucessfully",
                    value:value
                })
            }else{
                res.json({
                    err:"wrong passord"
                })
            }

        
        }
    }).catch((err)=>{
        res.json({
            message:err,
            
        })
    })
})

export default LoginRouter