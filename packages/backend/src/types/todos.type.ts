import { Request, Response, NextFunction } from 'express';

export interface ITodo {
  title: string;
  description: string;
  completed: boolean;
  privateTodo: boolean;
}

export interface ITodoController {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}
