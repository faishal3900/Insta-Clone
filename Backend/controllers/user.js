const express=require("express")
const user = require("../models/auth")
const LoginReq = require("../middleware/loginReq")
const router=express.Router()


router.get('/alluser', LoginReq,(req,res)=>{
  user.find().then((user)=>{
    return res.status(200).json({user});
    
  });
});


router.get('/profile/:id', LoginReq,()=>{

})
module.exports = router