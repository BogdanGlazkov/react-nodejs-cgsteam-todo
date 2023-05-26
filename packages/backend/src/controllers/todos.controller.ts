import { Response, Request } from 'express';
import { todoService } from '../services/todo.service';
import { HttpStatusCode } from '../libs/constans';
import { IUserFull } from '../types/user.type';

class TodosController {
  async getAllTodos(req: Request, res: Response) {
    const todos = await todoService.findAll();
    res.json({ status: 'success', code: HttpStatusCode.OK, data: todos });
  }

  async getPrivateTodos(req: Request, res: Response) {
    const { user } = req;
    const todos = await todoService.findPrivateTodos((user as IUserFull).id);
    res.json({ status: 'success', code: HttpStatusCode.OK, data: todos });
  }

  async addTodo(req: Request, res: Response) {
    const credential = req.body;
    const { user } = req;
    const todo = await todoService.add(credential, (user as IUserFull).id);
    res.json({ status: 'success', code: HttpStatusCode.CREATED, data: todo });
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const todo = await todoService.findById(Number(id));
    res.json({ status: 'success', code: HttpStatusCode.OK, data: todo });
  }

  async removeTodo(req: Request, res: Response) {
    const { id } = req.params;
    await todoService.deleteById(Number(id));
    res.json({ status: 'success', code: HttpStatusCode.NO_CONTENT });
  }

  async updateTodo(req: Request, res: Response) {
    const { id } = req.params;
    const credential = req.body;
    const todo = await todoService.updateById(Number(id), credential);
    res.json({ status: 'success', code: HttpStatusCode.OK, data: todo });
  }
}
export const todosController = new TodosController();
