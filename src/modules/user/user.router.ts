import { Router } from 'express';
import UserController from './user.controller';
import validate from '../../middlewares/validation.middleware';
import { createUserValidation } from './user.validation';

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
    this.router.post(
      `${this.path}`,
      validate(createUserValidation),
      this.userController.createUser
    );
  }
}

export const userRouter = new UserRouter();
