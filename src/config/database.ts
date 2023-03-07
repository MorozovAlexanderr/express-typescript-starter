import mongoose from 'mongoose';
import 'dotenv/config';

const { DB_MONGO_USER, DB_MONGO_PASSWORD, DB_MONGO_PATH } = process.env;

export class Database {
  private _connection: typeof mongoose | undefined = undefined;

  async connect() {
    this._connection = await mongoose.connect(
      `mongodb+srv://${DB_MONGO_USER}:${DB_MONGO_PASSWORD}${DB_MONGO_PATH}`
    );
  }

  async disconnect() {
    await this._connection?.disconnect();
  }
}
