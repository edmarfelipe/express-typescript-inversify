export interface IUserRepository {
  getUsers(): Promise<string[]>;
  get(): Promise<string>;
}
