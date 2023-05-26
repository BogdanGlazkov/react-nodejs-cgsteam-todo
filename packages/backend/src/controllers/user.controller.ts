import { Response, Request } from 'express';
import { userService } from '../services/user.service';
import { HttpStatusCode } from '../libs/constans';
import { emailService } from '../services/email.service';
import { IUserFull, IUserEmail } from '../types/user.type';

class UserController {
  async loginUser(req: Request, res: Response) {
    const databaseUser = req.user;
    const loggingInUser = req.body;
    if (loggingInUser && databaseUser) {
      const token = await userService.loginUser(loggingInUser, <IUserFull>databaseUser);
      res.json({
        status: 'success',
        code: HttpStatusCode.CREATED,
        user: { email: loggingInUser.email, token }
      });
    }
  }

  async logoutUser(req: Request, res: Response) {
    const { user } = req;
    if (user && (user as IUserFull).id) {
      await userService.logoutUser((user as IUserFull).id);
      res.json({
        status: 'success',
        code: HttpStatusCode.NO_CONTENT
      });
    }
  }

  async signupUser(req: Request, res: Response) {
    const credential = req.body;
    const { email, verificationToken } = await userService.createUser(credential);
    const isSend = await emailService.sendEmailVerifyToken(email, verificationToken);
    res.json({
      status: 'success',
      code: HttpStatusCode.CREATED,
      user: { email, sendEmail: isSend }
    });
  }

  async verifyToken(req: Request, res: Response) {
    const { user } = req;
    if (user) {
      await userService.verifyUpdateToken(<IUserFull>user);
      res.json({
        status: 'success',
        code: HttpStatusCode.CREATED,
        message: 'Verification successful'
      });
    }
  }

  async resetPassword(req: Request, res: Response) {
    const { user } = req;
    if (user) {
      const { temporaryPassword, email } = await userService.resetPassword(<IUserFull>user);
      const isSend = await emailService.sendEmailResetPassword(email, temporaryPassword);
      res.json({
        status: 'success',
        code: HttpStatusCode.CREATED,
        user: { email, sendEmail: isSend }
      });
    }
  }

  async changePassword(req: Request, res: Response) {
    const { user } = req;
    const { currentPassword, updatePassword } = req.body;
    if (user) {
      const { email } = await userService.changePassword(
        <IUserFull>user,
        currentPassword,
        updatePassword
      );
      const isSend = await emailService.sendEmailChangePassword(email);
      res.json({
        status: 'success',
        code: HttpStatusCode.CREATED,
        user: { email, sendEmail: isSend }
      });
    }
  }

  async currentUser(req: Request, res: Response) {
    const { user } = req;
    if (user) {
      const { email } = user as IUserEmail;
      res.json({
        status: 'success',
        code: HttpStatusCode.OK,
        user: { email }
      });
    }
  }
}
export const userController = new UserController();
