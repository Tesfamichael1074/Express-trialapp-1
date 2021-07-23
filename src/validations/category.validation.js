const Joi = require('joi');

const validateCategory = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        image: Joi.string().required(),
        description: Joi.string().required(),
        active: Joi.boolean()
    })
}


module.exports = {
    validateCategory
}