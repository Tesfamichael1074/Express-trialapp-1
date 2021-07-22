const mongoose = require('mongoose')
const { toJSON, paginate } = require('../plugins')
// const validator = require('validator')

const productDiscountSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    percentage: {
        type: Number,
        required: false,
        default: 0, 
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    products: [ 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product"
        }
      ],
}, {
    timestamps: true
},)

productDiscountSchema.plugin(toJSON)
productDiscountSchema.plugin(paginate)

const ProductDiscount = mongoose.model('ProductDiscount', productDiscountSchema)

module.exports = ProductDiscount

