import express, { Application, json } from 'express';
import { appRouter } from './router';
import errorHandlerMiddleware from './middlewares/errorHandler.middleware';
import NotFoundException from './exceptions/notFound.exception';

class App {
  private readonly _app: Application;
  private readonly _port: number | string = process.env.PORT || 3000;

  constructor() {
    this._app = express();
    this._initMiddlewares();
    this._routes();
    this._initErrorHandling();
  }

  public listen() {
    this._app.listen(this._port, () =>
      console.log(`Running on port ${this._port}`)
    );
  }

  private _routes() {
    this._app.use('/', appRouter.router);
  }

  private _initMiddlewares() {
    this._app.use(json());
  }

  private _initErrorHandling() {
    this._app.use(errorHandlerMiddleware);
  }
}

export default App;
