import express from 'express';
import { interfaces } from 'inversify';
import { UserController } from './UserController';

export function createRouter(container: interfaces.Container): express.Router {
  const users = express.Router();
  const controller = container.resolve(UserController);

  users.get('/', (req, res) => controller.getAll(req, res));
  users.get('/:id', (req, res) => controller.get(req, res));

  return users;
}
