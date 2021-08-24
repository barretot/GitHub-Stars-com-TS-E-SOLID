import 'express-async-errors';
import { Router } from 'express';
import { createGitHubUserFactory } from '../modules/createGitHubUser/CreateGitHubUserFactory';

const routes = Router();

routes.post('/api/repositories', (req, res) => {
  createGitHubUserFactory().handle(req, res);
});

export { routes };
