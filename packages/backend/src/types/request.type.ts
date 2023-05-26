import { Request } from 'express';
import { IUserFull } from './user.type';

export interface IRequest extends Request {
  user?: IUserFull;
}
