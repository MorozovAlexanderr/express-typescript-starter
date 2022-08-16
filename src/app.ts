import express, { Application, json } from 'express';
import { appRouter } from './router';
import errorHandlerMiddleware from './middlewares/errorHandler.middleware';

class App {
  private readonly app: Application;
  private readonly port: number | string = process.env.PORT || 3000;

  constructor() {
    this.app = express();
    this.initMiddlewares();
    this.routes();
    this.initErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () =>
      console.log(`Running on port ${this.port}`)
    );
  }

  private routes() {
    this.app.use('/', appRouter.router);
  }

  private initMiddlewares() {
    this.app.use(json());
  }

  private initErrorHandling() {
    this.app.use(errorHandlerMiddleware);
  }

  private databaseSetup() {
    // connect to the database
  }
}

export default App;
