const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    contact: {
        required: true,
        unique:true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    },
    volunteer:{
        required:true,
        type: Boolean
    },
    type:{
        required:true,
        type: String
    },
    account_created_date:{
        required: true,
        type: Date
    }


})
dataSchema.plugin(uniqueValidator)
module.exports = mongoose.model('User', dataSchema)