const express = require('express')
const auth = require('../../middlewares/auth')
const validate = require('../../middlewares/validate')
const categoryValidation = require('../../validations/category.validation');
const categoryController = require('../../controllers/category.controller');


const router = express.Router()


router.route('/')
    .post(
        auth('addCategory'), 
        validate(categoryValidation.validateCategory),
        categoryController.createCategry
        )


module.exports = router