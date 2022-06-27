import express from "express";
import customers from '../models/customerScheme.js'
import usersSchema from "../models/usersSchema.js";
import mongoose from "mongoose";
const Customerrouter = express.Router()

//get customers
Customerrouter.get('/',(req,res)=>{
    customers.find({"email":"la@gmail.com"})
    .then(value => res.json(value))
    .catch(err => res.json({message:err}))
})
//check a user



// setcustomer
Customerrouter.post("/",(req,res)=>{
    let userid = usersSchema.findById("62b976825281ced3473f7319").then((value)=>{
         console.log(value.customer)
            if(userid != null){
                const customer = new customers({
                    name:req.body.name,
                    phonenumber: req.body.phonenumber,
                    email:req.body.email,
                    ServiceRendered: req.body.ServiceRendered,
                    amountPaidUpfront: req.body.amountPaidUpfront,
                    Balance: req.body.Balance,
                    user: value._id

                })
               
                   customer.save().then((value)=>{
                    res.json(value)
                   }).catch((err)=>{
                    res.json(err)
                   })
                
            }
    }).catch((err)=>{
        res.status(500).json({
            message: err
        })
    })
    
})
export default Customerrouter