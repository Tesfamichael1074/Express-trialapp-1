const mongoose = require('mongoose')
const { toJSON , paginate } = require('./plugins')

// Category schema 
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: false,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    active: {
        type: Boolean,
        required: false,
        trim: true
    },
    products: [ 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product"
        }
      ],

},
{
    timestamps: true
}
)


// add plugin that converts mongoose to json
categorySchema.plugin(toJSON);
categorySchema.plugin(paginate);


/**
 * 
 * @param {String} name - category name
 * @returns Bolean
 */
categorySchema.statics.checkCategoryName = async function (catname) {
    const name = await this.findOne({ catname });
    return !!name;
  };

const Category = mongoose.model('Category', categorySchema)

module.exports = Category