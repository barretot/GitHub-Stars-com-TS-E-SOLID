import { IGitHubUserRepository } from '../IGitHubUserRepository';
import { GitHubUser } from '../../entities/GitHubUser';
import { GitHubUserSchema } from '../../database/schema';

class MongoGitHubUserRepository implements IGitHubUserRepository {
  // Dependency inversion principle
  // Liskov substitution principle
  async exists(github_username: string): Promise<boolean> {
    const user = await GitHubUserSchema.findOne({ github_username });

    return !!user;
  }
  async create({ github_username, repos }: GitHubUser): Promise<GitHubUser> {
    const repository = await GitHubUserSchema.create({
      github_username,
      repos,
    });

    return repository;
  }
}

export { MongoGitHubUserRepository };
