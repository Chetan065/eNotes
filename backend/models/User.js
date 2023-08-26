const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required : 'Email Address is required'
    },
    password : {
        type : String,
        required : true
    }
})
module.exports = mongoose.model('user',UserSchema)
