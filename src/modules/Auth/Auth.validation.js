import Joi from "joi";

export const signUpSchema = {
    body: Joi.object().required().keys({
        name: Joi.string().required().alphanum().min(3).max(15),
        email: Joi.string().email().required(),
        password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{5,40}$')),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
        age: Joi.number().min(10).max(90)
    })
}


export const logInSchema = {
    body: Joi.object().required().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{5,40}$')),
    })
}
