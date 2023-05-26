import { Request, Response, NextFunction } from 'express';
import { ITodoController } from '../types/todos.type';

function tryCatchMiddleware(controller: ITodoController) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}

export default tryCatchMiddleware;
