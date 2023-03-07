import { Router } from 'express';
import AuthController from './auth.controller';

class AuthRouter {
  public router: Router;
  private authController: AuthController;
  private path: string = '/auth';

  constructor() {
    this.router = Router();
    this.authController = new AuthController();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.post(`${this.path}/register`, this.authController.register);
    this.router.post(`${this.path}/login`, this.authController.login)
  }
}