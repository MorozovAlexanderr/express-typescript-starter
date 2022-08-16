import { Request, Response } from 'express';

class UserController {
  public getUserById = (req: Request, res: Response) => {
    const userId = req.params.id;
    res.send(`user-${userId}`);
  };

  public createUser = (req: Request, res: Response) => {
    const userId = Date.now();
    res.send(`created user-${userId}`);
  };
}

export default UserController;
