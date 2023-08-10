import Joi from "joi";

export const addTodoSchema={
    body:Joi.object().required().keys({
        title:Joi.string().required().max(10),
        description:Joi.string().required().max(50)
    }),
   
}

export const updateTodoSchema={
    body:Joi.object().required().keys({
        title:Joi.string().max(10),
        description:Joi.string().max(50),
        status:Joi.string().valid('pending','complete')
    }),
    query:Joi.object().required().keys({
        DoId:Joi.string().hex().length(24)
    })
}

export const deleteTodoSchema={
  
    query:Joi.object().required().keys({
        DoId:Joi.string().hex().length(24)
    })
}

export const searchByTitleSchema={
    query:Joi.object().required().keys({
        word:Joi.string().required().max(10)
    })
}