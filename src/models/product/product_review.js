const mongoose = require('mongoose')
const { toJSON, paginate } = require('../plugins')
// const validator = require('validator')

const productReviewSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
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
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    reviwer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
}, {
    timestamps: true
},)

productReviewSchema.plugin(toJSON)
productReviewSchema.plugin(paginate)

const ProductReview = mongoose.model('ProductReview', productReviewSchema)

module.exports = ProductReview

