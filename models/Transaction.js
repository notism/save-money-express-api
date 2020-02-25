const mongoose = require('mongoose');

const TranSchema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    money:{
        type: Number,
        require: true, 
        default: 0
    },
    createdBy :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    } 
},{
    timestamps: true
})

module.exports = mongoose.model('Transaction', TranSchema)