import { GitHubUser } from '../../entities/GitHubUser';
import { IGitHubUserRepository } from '../../repositories/IGitHubUserRepository';
import { IGitHubUserRequestDTO } from './CreateGitHubUserDTO';

class CreateGitHubUserService {
  constructor(private githubUserRepository: IGitHubUserRepository) {}

  async execute({ github_username, repos }: IGitHubUserRequestDTO) {
    const userExists = await this.githubUserRepository.exists(github_username);

    if (userExists) {
      throw new Error('User already exists');
    }

    const userCreate = GitHubUser.create({ github_username, repos });
    const user = await this.githubUserRepository.create(userCreate);

    return user;
  }
}

export { CreateGitHubUserService };
