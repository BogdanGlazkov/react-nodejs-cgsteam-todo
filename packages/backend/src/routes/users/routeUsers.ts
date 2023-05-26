import { Router } from 'express';
import { userController } from '../../controllers/user.controller';
import validation from '../../middlewares/validationWraperSchema';
import { signupSchema, loginSchema, resetPasswordSchema, changePasswordSchema } from '../../schema';
import { validationIsExist } from '../../middlewares/validationIsExist';
import tryCatchMiddleware from '../../middlewares/tryCatchMiddleware';
import { authMiddleware } from '../../middlewares/authMiddleware';

const router: Router = Router();

router.post(
  '/login',
  validation(loginSchema),
  validationIsExist('User'),
  tryCatchMiddleware(userController.loginUser)
);
router.get('/logout', authMiddleware, tryCatchMiddleware(userController.logoutUser));
router.post('/signup', validation(signupSchema), tryCatchMiddleware(userController.signupUser));
router.get(
  '/verify/:verificationToken',
  validationIsExist('User'),
  tryCatchMiddleware(userController.verifyToken)
);
router.post(
  '/reset-password',
  validation(resetPasswordSchema),
  validationIsExist('User'),
  tryCatchMiddleware(userController.resetPassword)
);
router.post(
  '/change-password',
  validation(changePasswordSchema),
  validationIsExist('User'),
  tryCatchMiddleware(userController.changePassword)
);
router.get('/current-user', authMiddleware, tryCatchMiddleware(userController.currentUser));
export default router;
