import express from "express";
import mongoose from "mongoose";
import  "dotenv/config";
import bodyParser from "body-parser";

//import routes
import Registerroutes from "./routes/register.js"

//init functions
const app = express()

//port
const PORT = 5000

//use body parser


//connect to batabase
mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    console.log('connected to db')
})
.catch((err)=>{
    console.error(err)
})

// test-routes
app.get("/",(req,res)=>{
    res.send('working')
})

//register new users
app.use("/Register",Registerroutes)

//start server
app.listen(PORT,(err)=>{
    if(err) throw err
    console.log(`listening on http://localhost:${PORT}`)
})