import { Response, Request, NextFunction } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Schema } from 'joi';

export class CustomError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

function validation(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const messageError = error.details[0].message;
      const validationError = new CustomError(messageError, 400);
      next(validationError);
      return;
    }
    next();
  };
}

export default validation;
