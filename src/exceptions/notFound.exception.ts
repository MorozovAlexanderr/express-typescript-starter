import httpStatus from 'http-status';
import HttpException from '@/exceptions/base.exception';

class NotFoundException extends HttpException {
  constructor(msg?: string) {
    super(httpStatus.NOT_FOUND, msg || 'Not found');
  }
}

export default NotFoundException;
