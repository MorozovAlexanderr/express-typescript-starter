import express, { Application, json } from 'express';

class App {
  private readonly _app: Application;
  private readonly _port: number | string = process.env.PORT || 3000;

  constructor() {
    this._app = express();
  }

  public listen() {
    this._app.listen(this._port, () =>
      console.log(`Running on port ${this._port}`)
    );
  }
}

export default App;
