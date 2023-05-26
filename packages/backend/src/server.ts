import bodyParser from 'body-parser';
import express, { Response, Request, NextFunction } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import helmet from 'helmet';
import 'dotenv/config';
// eslint-disable-next-line import/no-extraneous-dependencies
import cors from 'cors';
import connectDB from './config/database';
import routeTodos from './routes/todos';
import routeUsers from './routes/users';
import { CustomError } from './types/error.type';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(helmet());
app.use(cors());

connectDB();

// Express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/todos', routeTodos);
app.use('/api/v1/auth', routeUsers);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});
/* eslint-disable */
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  const { status = 500 } = err;
  res.status(status).json({ message: err.message });
});
/* eslint-enable */
const server = app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

export default server;
