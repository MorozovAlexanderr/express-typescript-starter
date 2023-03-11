import mongoose, { model, Schema } from 'mongoose';
import { User, UserMethods, TUserModel } from '@/modules/user/user.types';
import { hashPassword } from '@/modules/auth/auth.utils';
import { compareSync } from 'bcrypt';

const userSchema = new Schema<User, TUserModel, UserMethods>(
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

userSchema.methods.comparePassword = function (password: string) {
  return compareSync(password, this.password);
};

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const UserModel = mongoose.model<User, TUserModel>('User', userSchema);
