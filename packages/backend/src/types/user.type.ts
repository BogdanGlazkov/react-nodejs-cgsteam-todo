import { Request, Response } from 'express';

export interface IUser {
  email: string;
  password: string;
}

export interface IUserController {
  (req: Request, res: Response): Promise<void>;
}

export interface IUserFull {
  id: any;
  email: string;
  password: string;
  token: string | null;
  verify: boolean;
  verificationToken?: string;
}

export interface IUseReq extends Express.User {
  id: any;
  email: string;
  password: string;
  token: string | null;
  verify: boolean;
  verificationToken: string;
}

export interface IUserEmail {
  email: string;
}
