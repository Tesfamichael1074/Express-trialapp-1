const mongoose = require('mongoose')
const { toJSON, paginate } = require('../plugins')
// const validator = require('validator')

const productInventorySchema = mongoose.Schema({
    spec: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: false,
    },
    quantity: {
        type: Number,
        required: true,
        default: 0, 
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
}, {
    timestamps: true
},)

productInventorySchema.plugin(toJSON)
productInventorySchema.plugin(paginate)

const ProductInventory = mongoose.model('ProductInventory', productInventorySchema)

module.exports = ProductInventory

