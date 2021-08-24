import { MongoGitHubUserRepository } from '../../repositories/mongodb/MongoGitHubUserRepository';
import { CreateGitHubUserController } from './CreateGitHubUserController';
import { CreateGitHubUserService } from './CreateGitHubUserService';

const createGitHubUserFactory = () => {
  const githubUserRepository = new MongoGitHubUserRepository();
  const createUser = new CreateGitHubUserService(githubUserRepository);
  const createGitHubUserController = new CreateGitHubUserController(createUser);

  return createGitHubUserController;
};

export { createGitHubUserFactory };
