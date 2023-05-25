import { Router } from 'express';
import todoController from '../../controllers/todo.controller';
import { CreateTodoSchema, EditTodoSchema } from '../../validators/todo.validators';
import { validateBody } from '../../middlewares/validateBody.middleware';
import { responseHandler } from '../../middlewares/response.middleware';
import { errorHandler } from '../../middlewares/error.middleware';
import { isExist } from '../../middlewares/isExist.middleware';
import TodoService from '../../services/todo.service';

const todosRouter: Router = Router();

todosRouter.get('/', responseHandler(todoController.getAllTodo.bind(todoController)), errorHandler);

todosRouter.post(
  '/',
  validateBody(CreateTodoSchema),
  responseHandler(todoController.createTodo.bind(todoController)),
  errorHandler
);

todosRouter.get(
  '/:id',
  isExist(TodoService.findById),
  responseHandler(todoController.getTodoById),
  errorHandler
);

todosRouter.put(
  '/:id',
  isExist(TodoService.findById),
  validateBody(EditTodoSchema),
  responseHandler(todoController.updateTodo.bind(todoController)),
  errorHandler
);

todosRouter.delete(
  '/:id',
  isExist(TodoService.findById),
  responseHandler(todoController.deleteTodo.bind(todoController)),
  errorHandler
);

export default todosRouter;
