const mongoose = require('mongoose')
const { toJSON, paginate } = require('./plugins')
// const validator = require('validator')

const CustomerSchema = mongoose.Schema({
    tag: {
        type: String,
        required: false,
    },
    code: {
        type: String,
        required: false,
    },
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female']
    },
    birth_date: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
            throw new Error('Invalid email');
            }
        },
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address1: {
        type: String,
        required: true,
    },
    address2: {
        type: String,
        required: false,
    },
    phone_number: {
        type: String,
        required: true,
    },

}, {
    timestamps: true
},)

CustomerSchema.plugin(toJSON)
CustomerSchema.plugin(paginate)

const Customer = mongoose.model('Customer', CustomerSchema)

module.exports = Customer

