import HttpException from '@/exceptions/base.exception';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export class UnauthorizedException extends HttpException {
  constructor() {
    super(StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED);
  }
}

export default UnauthorizedException;
