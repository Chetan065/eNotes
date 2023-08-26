const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    obj1 ={
       title : 'chetan',
        description : 'chetan@065'
    }
    res.json(obj1)
})
module.exports = router