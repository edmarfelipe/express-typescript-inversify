import { Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import { IUserRepository } from './IUserRepository';

@injectable()
export class UserController {
  constructor(@inject('UserRepository') private service: IUserRepository) {}

  async getAll(req: Request, res: Response) {
    res.json(await this.service.getUsers());
  }

  async get(req: Request, res: Response) {
    res.json(await this.service.get());
  }
}
