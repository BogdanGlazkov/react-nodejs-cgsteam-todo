import { Todo } from '../entities/Todo.entity';
import { ITodo } from '../types/todos.type';

export default class TodoService {
  static async findById(id: string): Promise<Todo | null> {
    const todo = await Todo.findOneBy({ id });
    return todo;
  }

  async create(body: ITodo): Promise<Todo> {
    const createdTodo = await Todo.create(body);
    await createdTodo.save();
    return createdTodo;
  }

  async findAll(): Promise<ITodo[]> {
    const data = await Todo.find();
    return data;
  }

  async update(id: string, body: ITodo): Promise<object> {
    await Todo.update(id, body);
    return { message: 'Todo has been updated' };
  }

  async delete(id: string): Promise<object> {
    await Todo.delete({ id });
    return { message: 'Todo has been deleted' };
  }
}
