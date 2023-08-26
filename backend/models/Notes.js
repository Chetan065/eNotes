const mongoose = require('mongoose');
const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    tag:{
        type: String,
        default : "Genaral"
    },
    description : {
        type : String,
        required : true,
    }
})
module.exports = mongoose.model('notes',NotesSchema)