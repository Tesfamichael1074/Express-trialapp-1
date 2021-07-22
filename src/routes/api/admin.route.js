const express = require('express')
const validate = require('../../middlewares/validate');
const userController = require('../../controllers/user.controller');
const userValidation = require('../../validations/user.validation');

const router = express.Router();


router.post("/registerSuperAdmin", validate(userValidation.createSupperAdmin), userController.createUser)

module.exports = router