import mongoose, { model, Schema } from 'mongoose';
import { User } from '@/modules/user/user.types';

const userSchema = new Schema<User>(
  {
    username: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

export const UserModel = mongoose.model('User', userSchema);
