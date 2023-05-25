import { Request } from 'express';
import { Todo } from '../entities/Todo.entity';

export interface IDataBaseRecord {
  id: string;
}

export interface IRequest extends Request {
  user: {
    userId: string;
  };
  params: {
    [key: string]: string;
  };
}

export interface ISubTask {
  title: string;
  description: string;
  isCompleted: boolean;
  isPrivate: boolean;
}

export interface ISubTaskRequest extends IRequest {
  body: ISubTask;
}

export interface ISubTaskDbRecord extends IDataBaseRecord {
  title: string;
  description: string;
  isCompleted: boolean;
  isPrivate: boolean;
  todoId: string;
}

export interface ITodo extends Todo {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  isPrivate: boolean;
}

export interface ITodoRequest extends IRequest {
  body: ITodo;
}

export interface ITodoDbRecord extends IDataBaseRecord {
  title: string;
  description: string;
  isCompleted: boolean;
  isPrivate: boolean;
  groupId?: string;
  userId?: string;
}
