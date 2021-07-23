const express = require('express')
const auth = require('../../middlewares/auth')
const validate = require('../../middlewares/validate')
const categoryValidation = require('../../validations/category.validation');
const categoryController = require('../../controllers/category.controller');


const router = express.Router()


router.route('/')
    .post(
        auth('Category'), 
        validate(categoryValidation.validateCategory),
        categoryController.createCategry
        )
    .get(
        auth('Category'), 
        validate(categoryValidation.getCategory),
        categoryController.getCategry
    )

router.route('/:id')
    .put(
        auth('Category'), 
        validate(categoryValidation.validateCategory),
        categoryController.updateCategry
    )


module.exports = router