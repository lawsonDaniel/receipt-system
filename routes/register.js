import express  from "express";

const Registerroutes = express.Router()

//routing for creating new users
Registerroutes.post("/",(req,res)=>{
    res.send("register user")
})

export default Registerroutes