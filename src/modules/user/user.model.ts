import mongoose, { model, Schema } from 'mongoose';
import { User } from '@/modules/user/user.types';
import { hashPassword } from '@/modules/auth/auth.utils';

const userSchema = new Schema<User>(
  {
    username: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  this.password = await hashPassword(this.password);
  next();
});

export const UserModel = mongoose.model('User', userSchema);
