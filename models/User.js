const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        require: true,   
        max: 255     
    },
    email:{
        type: String,
        require: true,
        max: 255      
    },
    password:{
        type: String,
        require: true,
        min: 4,
        max: 30, 
    },
    firstname:{
        type: String,
        require: false 
    },
    lastname:{
        type: String,
        require: false 
    },
    money:{
        type: Number,
        require: true, 
        default: 0
    } 
},{
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)