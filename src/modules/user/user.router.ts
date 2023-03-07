import { Router } from 'express';
import UserController from '@/modules/user/user.controller';
import { createUserValidation } from '@/modules/user/user.validation';
import validate from '@/middlewares/validation.middleware';

class UserRouter {
  public router: Router;
  private userController: UserController;
  private path: string = '/users';

  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(`${this.path}/:id`, this.userController.getUserById);
  }
}

export const userRouter = new UserRouter();
