const express=require("express")
const User = require("../models/auth")
const Post= require("../models/post")
const LoginReq = require("../middleware/loginReq")
const router=express.Router()


router.get('/alluser', LoginReq,(req,res)=>{
  User.find().then((user)=>{
    return res.status(200).json({user});
    
  });
});


// router.get('/profile/:id',(req,res)=>{
// User.findOne({_id: req.params.id})
//     .then((data)=>{
//       console.log(data)
//       Post.find({postedBY: req.params.id})
//           .then((data)=> {res.json(data)
//             console.log(data);
            
//           })
//           .catch(err=> console.log(err)
//           )
//     })
// })

module.exports = router