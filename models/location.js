const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    street: {
        required: true,
        type: String
    },
    city: {
        required: true,
        type: String
    },
    state: {
        required: true,
        type: String
    },
    pincode: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Location', dataSchema)