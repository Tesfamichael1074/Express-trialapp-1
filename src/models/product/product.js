const mongoose = require('mongoose')
const { toJSON, paginate } = require('../plugins')
// const validator = require('validator')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: false,
    },
    product_code: {
        type: String,
        required: false,
        default: ""
    },
    description: {
        type: String,
        required: false,
    },
    rating: {
        type: Number,
        required: false,
        default: 0, 
    },
    price: {
        type: Number,
        required: false,
        default: 0
    },
    oldePrice: {
        type: Number,
        required: false,
        default: 0
    },
    showPrevPrice: {
        type: Boolean,
        required: false,
        default: false
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier"
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    products_reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductReview"
    }],
    products_discounts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductDiscount"
    }],
    products_inventory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductInventory"
    }],

}, {
    timestamps: true
},)

productSchema.plugin(toJSON)
productSchema.plugin(paginate)

const Product = mongoose.model('Product', productSchema)

module.exports = Product

