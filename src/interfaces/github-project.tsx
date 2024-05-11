export interface GithubProject {
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: string;
  forks_count: string;
  language: string;
  repository: {
    name: string;
    comments_url: string;
    full_name: string;
    owner: {
      login: string;
      avatar_url: string;
    };
  };
  commit: {
    message: string;
    comment_count: string;
  };
  sha: string;
}
