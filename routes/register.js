import express  from "express";
import Users from '../models/usersSchema.js'
import bcrypt from 'bcrypt'

const Registerroutes = express.Router()

//routing for creating new users
Registerroutes.post("/",(req,res)=>{
    //check if the email exists 
    Users.findOne(
        {email:req.body.email}
        )
        .then((value)=>{
                if(value === null){      
                        //hashing and salting the password
                        let passwordhash
                        bcrypt.genSalt(10,(err,salt)=>{
                        bcrypt.hash(req.body.password,salt,(err,hash)=>{
                            //values for db
                            const user = new Users({
                                name : req.body.name,
                                email: req.body.email,
                                password: hash
                            })
                                //saves users to db
                                user.save().then((value)=>{
                                    res.json(value)
                                }).catch((err)=>{
                                    res.status(500).json({
                                        message: err
                                    })
                                })  
                            })
                        })
       }else{
        res.json({
            error:"Email already exits please use another email"
        })
       }
    }).catch((err)=>{
        console.log(err)
    })
})
Registerroutes.get("/:id",(req,res)=>{
    let userid = Users.findById(req.params.id).then((value)=>{
            if(userid != null){
                return res.status(200).json(value)
            }else{
                return res.status(400).json({
                    Message:"user not found"
                })
            }
    }).catch((err)=>{
    res.json(err)
   })
})


 //routing to add new customers to user

//  NOTE: usersid would be gotten from user and use to add customers to the db


 Registerroutes.patch('/:id',(req,res)=>{ 
    Users.findByIdAndUpdate(req.params.id,
        { $push: {  customer : [{
            name: req.body.name,
            phonenumber: req.body.phonenumber,
            email: req.body.email,
            ServiceRendered: req.body.ServiceRendered,
            amountPaidUpfront: req.body.amountPaidUpfront,
            Balance: req.body.Balance
        }]} 
    })
    .then((value)=>{
        res.json(value)
    })
    .catch((err)=>{
        res.json({
            message:err
        })
    })



   })



export default Registerroutes