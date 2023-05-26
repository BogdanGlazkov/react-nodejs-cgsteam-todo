import { Router } from 'express';
import { todosController } from '../../controllers/todos.controller';
import validation from '../../middlewares/validationWraperSchema';
import { todosJoiSchema } from '../../schema';
import { validationIsExist } from '../../middlewares/validationIsExist';
import tryCatchMiddleware from '../../middlewares/tryCatchMiddleware';
import { authMiddleware } from '../../middlewares/authMiddleware';

const router: Router = Router();

router.get('/', authMiddleware, tryCatchMiddleware(todosController.getAllTodos));
router.get('/private', authMiddleware, tryCatchMiddleware(todosController.getPrivateTodos));
router.get(
  '/:id',
  authMiddleware,
  validationIsExist('Todo'),
  tryCatchMiddleware(todosController.getById)
);
router.post(
  '/',
  authMiddleware,
  validation(todosJoiSchema),
  tryCatchMiddleware(todosController.addTodo)
);
router.put(
  '/:id',
  authMiddleware,
  validationIsExist('Todo'),
  validation(todosJoiSchema),
  tryCatchMiddleware(todosController.updateTodo)
);
router.delete(
  '/:id',
  authMiddleware,
  validationIsExist('Todo'),
  tryCatchMiddleware(todosController.removeTodo)
);

export default router;
