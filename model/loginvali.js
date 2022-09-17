const Joi = require('joi');
module.exports.loginValidate = Joi.object().keys({
   
    Email: Joi.string().email().required(),
    Password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

    // repeat_password: Joi.ref('password')

})
