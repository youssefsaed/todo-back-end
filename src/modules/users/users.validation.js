import Joi from "joi";

export const updateSchema={
    body: Joi.object().keys({
        name: Joi.string().alphanum().max(10),
        email: Joi.string().email(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{5,40}$')),
        age: Joi.number().min(10).max(90)
    })
}