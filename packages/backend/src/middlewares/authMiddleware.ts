import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import 'dotenv/config';
import { User } from '../entities/User.entity';
import { IUserFull } from '../types/user.type';
import { IJwtPayload } from '../types/payload.types';
import { HttpStatusCode } from '../libs/constans';

const { JWT_SECRET } = process.env;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
};
const verifyToken = async (payload: IJwtPayload, done: VerifiedCallback) => {
  try {
    const { id } = payload;

    const userRepository = getRepository(User);
    const user = await userRepository.findOneBy({ id });

    if (!user) {
      return done(null, false);
    }

    done(null, user);
  } catch (error) {
    done(error);
  }
};

passport.use(new JwtStrategy(options, verifyToken));

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (error: Error, user: IUserFull | false) => {
    if (error || !user) {
      return res.status(HttpStatusCode.UNAUTHORIZED).json({ message: 'Unauthorized' });
    }

    req.user = user as IUserFull;

    next();
  })(req, res, next);
};
