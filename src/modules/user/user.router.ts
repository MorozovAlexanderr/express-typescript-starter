import { Router } from 'express';
import UserController from './user.controller';

class UserRouter {
  public router: Router;
  private _userController: UserController;
  private _path: string = '/users';

  constructor() {
    this.router = Router();
    this._userController = new UserController();
    this._initRoutes();
  }

  private _initRoutes() {
    this.router.get(`${this._path}/:id`, this._userController.getUserById);
    this.router.post(`${this._path}`, this._userController.createUser);
  }
}

export const userRouter = new UserRouter();
