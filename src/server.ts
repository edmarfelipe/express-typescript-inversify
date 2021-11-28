import 'reflect-metadata';
import express from 'express';
import { container } from './container';
import { createRouter } from './modules/users/UserRouter';

const server = express();

server.use('/users', createRouter(container));

export default server;
