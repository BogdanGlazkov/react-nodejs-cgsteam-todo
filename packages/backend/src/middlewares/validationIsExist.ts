import { Response, NextFunction, Request } from 'express';
import { getRepository } from 'typeorm';
import { CustomError } from './validationWraperSchema';
import { IUserFull } from '../types/user.type';

export const validationIsExist =
  (entityName: string) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, verificationToken } = req.params;
      const { email } = req.body;
      const repository = getRepository(entityName);

      if (id && !(await repository.findOneBy({ id }))) {
        next(new CustomError('Not found by Id', 404));
        return;
      }

      if (verificationToken) {
        const entity = await repository.findOneBy({ verificationToken });
        if (!entity) {
          next(new CustomError('Not found token verify by email', 404));
          return;
        }
        req.user = entity as IUserFull;
      }
      if (email) {
        const entity = await repository.findOneBy({ email });
        if (!entity) {
          next(new CustomError('Not found user by email', 404));
          return;
        }
        req.user = entity as IUserFull;
      }
      next();
    } catch (e) {
      next(new CustomError('Internal Server Error', 500));
    }
  };
