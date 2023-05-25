// eslint-disable-next-line
import * as Joi from 'joi';

export const CreateTodoSchema = Joi.object({
  title: Joi.string().min(2).trim().required(),
  description: Joi.string().min(6).trim().required(),
  isCompleted: Joi.boolean().optional(),
  isPrivate: Joi.boolean().optional()
});

export const EditTodoSchema = Joi.object({
  title: Joi.string().min(2).trim().optional(),
  description: Joi.string().min(6).trim().optional(),
  isCompleted: Joi.boolean().optional(),
  isPrivate: Joi.boolean().optional()
});
