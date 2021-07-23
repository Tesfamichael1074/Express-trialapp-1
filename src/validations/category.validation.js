const Joi = require('joi');

const validateCategory = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        image: Joi.string().required(),
        description: Joi.string().required(),
        active: Joi.boolean()
    })
}


const getCategory = {
    query: Joi.object().keys({
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    })
}


module.exports = {
    validateCategory,
    getCategory
}