import { Request, Response } from 'express';
import { CustomError } from '../utils/error.util';

export const errorHandler = (err: Error | CustomError, req: Request, res: Response) => {
  // eslint-disable-next-line no-console
  console.error(err.stack);
  res.status(500).send(err.message);
};
