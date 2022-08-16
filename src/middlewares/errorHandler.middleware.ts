import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/base.exception';
import httpStatus from 'http-status';

const errorHandlerMiddleware = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || httpStatus.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Something went wrong';

  res.status(status).send({ status, message });
};

export default errorHandlerMiddleware;
