import { Router } from 'express';
import { userRouter } from './modules/user/user.router';
import NotFoundException from './exceptions/notFound.exception';

class AppRouter {
  public router: Router;
  private _prefix: string = '/api';

  constructor() {
    this.router = Router();
    this._initRoutes();
  }

  private _initRoutes() {
    this.router.use(this._prefix, userRouter.router);
    // handle 404 error for any unknown api request
    this.router.use((req, res, next) => {
      next(new NotFoundException());
    });
  }
}

export const appRouter = new AppRouter();
