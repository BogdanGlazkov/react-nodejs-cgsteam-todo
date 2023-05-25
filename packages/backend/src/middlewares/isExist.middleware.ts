import { NextFunction, Response, Request } from 'express';
import { getRepository, ObjectType } from 'typeorm';
import { CustomError } from '../utils/error.util';

declare module 'express-serve-static-core' {
  interface Request {
    user: {
      userId: string;
    };
  }
}

export function isExist<T>(type: ObjectType<T>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const repo = getRepository(type);
      const id: string = String(req.params.id);
      const record = await repo.findOneBy({ id });

      if (!record) {
        throw new CustomError(404, 'User does not exists');
      }
      return next();
    } catch (error) {
      return next(error);
    }
  };
}
