import { Document, Schema, model } from 'mongoose';
import { GitHubUser } from '../entities/GitHubUser';
import { v4 as uuid } from 'uuid';

const schema = new Schema<GitHubUser>({
  _id: { type: String, default: uuid() },
  github_username: String,
  tags: [String],
  repos: [
    {
      _id: { type: String, default: uuid() },
      node_id: String,
      name: String,
      description: String,
      html_url: String,
      language: String,
      stargazers_count: Number,
      watchers_count: Number,
    },
  ],
  CreatedAt: {
    type: Date,
    default: Date.now(),
  },
  UpdatedAt: {
    type: Date,
    dafault: Date.now(),
  },
});

const GitHubUserSchema = model<GitHubUser>('GitHubUser', schema);

export { GitHubUserSchema };
