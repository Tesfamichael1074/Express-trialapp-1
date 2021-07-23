const catchAsync = require('../utils/catchAsync');
const Category = require('../models/category')
const httpStatus = require('http-status');
const logger = require('../config/logger')


const createCategry = catchAsync( async (req, res)=> {

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


const getCategry = catchAsync( async (req, res)=> {
    try {
            const categories = await Category.find();
            res.status(httpStatus.OK).json(categories)
    } catch(e){
        throw new Error('Something wrong fetching categories');
    }

});

const updateCategry = catchAsync( async (req, res,)=> {
    try {
            const categories = await Category.updateOne(
                { _id: req.params.id},
                {
                    _id: req.params.id,
                    name: req.body.name,
                    image: req.body.image,
                    description: req.body.description,
                    active: req.body.active,
                }
                )
            logger.info(`Successfull Updated a category with id: ${req.params.id}`)
            res.status(httpStatus.OK).send(categories)
    } catch(e){
        throw new Error('Something wrong updating categories');
    }

});


module.exports = {
    createCategry,
    getCategry,
    updateCategry
}
