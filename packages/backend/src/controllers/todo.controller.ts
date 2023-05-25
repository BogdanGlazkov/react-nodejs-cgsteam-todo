import { Request } from 'express';
import TodoService from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}

  getAllTodo() {
    return this.todoService.findAll();
  }

  getTodoById(req: Request) {
    const { id } = req.params;
    return TodoService.findById(id);
  }

  createTodo(req: Request) {
    return this.todoService.create(req.body);
  }

  updateTodo(req: Request) {
    const { id } = req.params;
    return this.todoService.update(id, req.body);
  }

  deleteTodo(req: Request) {
    const { id } = req.params;
    return this.todoService.delete(id);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
