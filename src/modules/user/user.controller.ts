import { NextFunction, Request, Response } from 'express';
import { UserModel } from '@/modules/user/user.model';
import NotFoundException from '@/exceptions/notFound.exception';

class UserController {
  public getUserById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userId = req.params.id;
    const user = await UserModel.findById(userId);

    if (user) {
      res.send(user);
    } else {
      return next(new NotFoundException('User not found'));
    }
  };
}

export default UserController;
