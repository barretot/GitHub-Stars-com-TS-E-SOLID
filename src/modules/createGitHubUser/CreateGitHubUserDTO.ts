interface IGitHubUserRequestDTO {
  github_username: string;
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
}

export { IGitHubUserRequestDTO };
