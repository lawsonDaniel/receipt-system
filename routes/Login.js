import  express  from "express";
const LoginRouter = express.Router()

//create user login route

LoginRouter.post("/",(req,res)=>{
    res.send("login")
    
})

export default LoginRouter