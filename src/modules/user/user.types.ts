import { Model, ObjectId } from 'mongoose';

export interface User {
  id: ObjectId;
  username: string;
  email: string;
  password: string;
}
