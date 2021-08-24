import { v4 as uuid } from 'uuid';

class GitHubUser {
  readonly id?: string;
  github_username: string;
  tags?: string[];
  repos: [
    {
      node_id: string;
      name: string;
      description: string;
      html_url: string;
      language: string;
      stargazers_count: number;
      watchers_count: number;
    },
  ];

  private constructor(props: GitHubUser, id?: string) {
    Object.assign(this, props);

    if (!id) {
      id == uuid();
    }
  }

  static create(props: GitHubUser) {
    const repositories = new GitHubUser(props);

    return repositories;
  }
}

export { GitHubUser };
