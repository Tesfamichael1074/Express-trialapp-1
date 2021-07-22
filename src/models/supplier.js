const mongoose = require('mongoose')
const { toJSON, paginate } = require('./plugins')
// const validator = require('validator')

const SupplierSchema = mongoose.Schema({
    logo: {
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
    url: {
        type: String,
        required: false,
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

SupplierSchema.plugin(toJSON)
SupplierSchema.plugin(paginate)

const Supplier = mongoose.model('Supplier', SupplierSchema)

module.exports = Supplier

