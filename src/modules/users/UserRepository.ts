import { IUserRepository } from './IUserRepository';
import { injectable } from 'inversify';

@injectable()
export class UserRepository implements IUserRepository {
  getUsers(): Promise<string[]> {
    return Promise.resolve(['João', 'Maria']);
  }

  get(): Promise<string> {
    return Promise.resolve('João');
  }
}
