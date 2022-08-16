import httpStatus from 'http-status';
import HttpException from './base.exception';

class NotFoundException extends HttpException {
  constructor() {
    super(httpStatus.NOT_FOUND, 'Not found');
  }
}

export default NotFoundException;
