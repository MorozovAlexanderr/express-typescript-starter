import { NextFunction, Response } from 'express';
import { IBodyRequest } from '@/common/types/requests.types';
import { SignUpPayload } from '@/modules/auth/auth.types';
import { UserModel } from '@/modules/user/user.model';
import UserEmailConflictException from '@/exceptions/userEmailConflict.exception';
import { issueJwt } from '@/modules/auth/auth.utils';

class AuthController {
  public signIn = () => {
    //
  };

  public signUp = async (
    { body: { username, email, password } }: IBodyRequest<SignUpPayload>,
    res: Response,
    next: NextFunction
  ) => {
    const isUserExists = await UserModel.exists({ email });

    if (isUserExists) {
      return next(new UserEmailConflictException());
    }

    const newUser = await UserModel.create({ username, email, password });

    const { accessToken } = issueJwt(newUser.id);

    return res.json({ user: newUser, accessToken });
  };
}

export default AuthController;
