const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');

router.post('/createuser',[
    body('name','name length min 4').isLength({min:4}),
    body('email','Insert a valid Email').isEmail(),
    body('password','password length min 4').isLength({min:5}),
],async (req,res)=>{
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let user = await User.findOne({email:req.body.email})
  if(user){
    return res.status(400).json({error : "user already exists!"})
  }
   user = await User.create({
    name : req.body.name,
    email : req.body.email,
    password : req.body.password
  })
  res.json(user)
})
module.exports = router