const express=require("express")
const post =require("../models/post")
const router=express.Router()

router.post("/createpost",(req,res)=>{

const {title,body,pic}=req.body

if(!title||!body||!pic){
return res.status(422).json({
    error:"pls fil all details"
    
})
   
}

})