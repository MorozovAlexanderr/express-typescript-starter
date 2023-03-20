import { NextFunction, Request, Response } from 'express';
import { ContextRequest, UserRequest } from '@/common/types/requests.types';

class UserController {
  public me = async (
    { context: { user } }: ContextRequest<UserRequest>,
    res: Response,
    next: NextFunction
  ) => {
    res.json({ user: user });
  };
}

export default UserController;
