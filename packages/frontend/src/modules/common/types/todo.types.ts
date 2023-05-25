export interface ITodo {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  isPrivate: boolean;
}

export interface ITodoData {
  title: string;
  description: string;
  isCompleted?: boolean;
  isPrivate?: boolean;
}
