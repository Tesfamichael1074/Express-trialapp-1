const catchAsync = require('../utils/catchAsync');
const Category = require('../models/category')
// const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');
const logger = require('../config/logger')


const createCategry = catchAsync( async (req, res)=> {
    console.log(req.body)
    try {
        const catg = await Category.create({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            active: req.body.active,
        })
        logger.info('successfully created a category!');
    res.status(httpStatus.CREATED).send(catg)
        
    } catch(e){
        throw new Error('Something wrong creating a category');
    }

});


module.exports = {
    createCategry
}
