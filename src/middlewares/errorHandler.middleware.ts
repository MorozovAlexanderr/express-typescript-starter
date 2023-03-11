import { Request, Response, NextFunction } from 'express';
import HttpException from '@/exceptions/base.exception';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || ReasonPhrases.INTERNAL_SERVER_ERROR;

  res.status(status).send({ status, message });
};

export default errorHandlerMiddleware;
