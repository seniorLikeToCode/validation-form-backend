const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
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
    addr1: {
        type: String,
        required: true
    },
    addr2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pin: {
        type: String,
        required: true
    },
    employer: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    income: {
        type: String,
        required: true
    },
    rent: {
        type: String,
        required: true
    },
    downPayment: {
        type: String,
        required: true
    },
    agreement: {
        type: Boolean,
        default: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('loanApplication', loanSchema);