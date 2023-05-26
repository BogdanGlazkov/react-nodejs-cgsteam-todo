import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import randomstring from 'randomstring';
import 'dotenv/config';
import { User } from '../entities/User.entity';
import { IUser, IUserFull } from '../types/user.type';
import { hashPassword } from '../libs/hashpassword';
import { isValidPassword } from '../libs/validpassword';

class UserService {
  getToken(id: string) {
    const payload = { id };
    const { JWT_SECRET } = process.env;
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    return token;
  }

  async loginUser(loggingInUser: IUser, databaseUser: IUserFull) {
    const isValid = await isValidPassword(loggingInUser.password, databaseUser.password);
    if (!isValid) {
      throw new Error('Password wrong');
    }
    const token = this.getToken(databaseUser.id);
    const userRepository = getRepository(User);
    await userRepository.update({ id: databaseUser.id }, { token });
    return token;
  }

  async logoutUser(id: any) {
    const userRepository = getRepository(User);
    await userRepository.update({ id }, { token: '' });
  }

  async createUser(credential: IUser) {
    const userRepository = getRepository(User);
    const todo = userRepository.create(credential);
    const response = await userRepository.save(todo);
    return response;
  }

  async verifyUpdateToken(user: IUserFull) {
    const userRepository = getRepository(User);
    await userRepository.update({ id: user.id }, { verify: true, verificationToken: '' });
  }

  async resetPassword(user: IUserFull) {
    const temporaryPassword = randomstring.generate({ length: 8, charset: 'alphanumeric' });
    const userRepository = getRepository(User);
    const passwordHash = await hashPassword(temporaryPassword);
    await userRepository.update({ id: user.id }, { password: passwordHash });
    return { temporaryPassword, email: user.email };
  }

  async changePassword(user: IUserFull, currentPassword: string, updatePassword: string) {
    const isValid = await isValidPassword(currentPassword, user.password);
    if (!isValid) {
      throw new Error('Password wrong');
    }
    const passwordHash = await hashPassword(updatePassword);
    const userRepository = getRepository(User);
    await userRepository.update({ id: user.id }, { password: passwordHash });
    return { email: user.email };
  }
}

export const userService = new UserService();
