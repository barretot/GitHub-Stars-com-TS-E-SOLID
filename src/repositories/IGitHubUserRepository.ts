import { GitHubUser } from '../entities/GitHubUser';

interface IGitHubUserRepository {
  // Liskov substitution principle
  create(repository: GitHubUser): Promise<GitHubUser>;
  exists(github_username: string): Promise<boolean>;
}

export { IGitHubUserRepository };
