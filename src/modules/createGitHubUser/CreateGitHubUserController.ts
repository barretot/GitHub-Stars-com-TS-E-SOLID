import axios from 'axios';
import { Request, response, Response } from 'express';
import { CreateGitHubUserService } from './CreateGitHubUserService';

interface Repos {
  node_id: string;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  watchers_count: number;
}

class CreateGitHubUserController {
  constructor(private createUser: CreateGitHubUserService) {}

  async handle(request: Request, response: Response) {
    const { github_username } = request.body;

    const apiResponse = await axios.get(
      `https://api.github.com/users/${github_username}/repos`,
    );

    const repos = apiResponse.data.map(
      ({
        node_id,
        name,
        description,
        html_url,
        language,
        stargazers_count,
        watchers_count,
      }: Repos) => ({
        node_id,
        name,
        description,
        html_url,
        language,
        stargazers_count,
        watchers_count,
      }),
    );

    try {
      const user = await this.createUser.execute({ github_username, repos });

      return response.status(200).json({
        user,
      });
    } catch (err) {
      return response.status(500).json({
        Error: err.message,
      });
    }
  }
}

export { CreateGitHubUserController };
