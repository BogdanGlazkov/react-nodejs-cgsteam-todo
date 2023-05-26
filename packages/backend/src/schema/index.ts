import Joi from 'joi';

const regex = /^[a-zA-Z0-9]{3,30}$/;
export const todosJoiSchema = Joi.object({
  title: Joi.string().min(5).max(20).required(),
  description: Joi.string().min(10).max(255).required(),
  completed: Joi.boolean().required(),
  privateTodo: Joi.boolean().required(),
  userId: Joi.number().required()
});

export const loginSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string()
    .pattern(regex)
    .min(6)
    .max(30)

    .required()
});

export const resetPasswordSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required()
});

export const changePasswordSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  currentPassword: Joi.string()
    .pattern(regex)
    .min(6)
    .max(30)

    .required(),
  updatePassword: Joi.string()
    .pattern(regex)
    .min(6)
    .max(30)

    .required()
});

export const signupSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string()
    .pattern(regex)
    .min(6)
    .max(30)

    .required()
});
