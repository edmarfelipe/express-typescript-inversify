import { Container } from 'inversify';

import { UserRepository } from './modules/users/UserRepository';
import { IUserRepository } from './modules/users/IUserRepository';

const container = new Container();

container.bind<IUserRepository>('UserRepository').to(UserRepository);

export { container };
