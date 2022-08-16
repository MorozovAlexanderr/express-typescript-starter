import express, { Application, json } from 'express';
import { appRouter } from './router';
import errorHandlerMiddleware from './middlewares/errorHandler.middleware';

class App {
  private readonly app: Application;
  private readonly port: number | string = process.env.PORT || 3000;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.errorHandling();
  }

  public listen() {
    this.app.listen(this.port, () =>
      console.log(`Running on port ${this.port}`)
    );
  }

  private routes() {
    this.app.use('/', appRouter.router);
  }

  private config() {
    this.app.use(json());
  }

  private errorHandling() {
    this.app.use(errorHandlerMiddleware);
  }

  private databaseSetup() {
    // connect to the database
  }
}

export default App;
