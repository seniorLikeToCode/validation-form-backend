const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    fax: {
        type: String,
        required: true
    },
    physicaladdr1: {
        type: String,
        required: true
    },
    physicaladdr2: {
        type: String,
        required: true
    },
    physicalcity: {
        type: String,
        required: true
    },
    physicalstate: {
        type: String,
        required: true
    },
    physicalpin: {
        type: String,
        required: true
    },
    billingaddr1: {
        type: String,
        required: true
    },
    billingaddr2: {
        type: String,
        required: true
    },
    billingcity: {
        type: String,
        required: true
    },
    billingstate: {
        type: String,
        required: true
    },
    billingpin: {
        type: String,
        required: true
    },
    
    agreement: {
        type: Boolean,
        default: true,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('businessDetails', businessSchema);