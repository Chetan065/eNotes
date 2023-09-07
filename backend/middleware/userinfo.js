require("dotenv").config();
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.API_KEY;

const userinfo = (req,res,next)=>{
    const token = req.header('auth-token')
    if(!token){
        res.status(401).send({error : "Please authenticate with a valid auth token"})
    }
    try {
        const userdata =jwt.verify(token,JWT_SECRET);
        req.user = userdata.user;
        next();
    } catch (error) {
        res.status(401).send({error : "Please authenticate with a valid auth token"})
    }
}
module.exports = userinfo;