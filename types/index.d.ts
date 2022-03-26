// Type definitions for GitProfile
// Project https://github.com/arifszn/gitprofile
// Author: Ariful Alam <arifulalamszn@gmail.com>

import { Component } from 'react';

interface github {
  /**
   * GitHub org/user name
   */
  username: string;

  /**
   * stars | updated
   */
  sortBy: string;

  /**
   * How many projects to display
   */
  limit: number;

  /**
   * Exclude projects option
   */
  exclude: {
    /**
     * Forked projects will not be displayed if set to true
     */
    forks: boolean;

    /**
     * These projects will not be displayed
     *
     * example: ['my-project1', 'my-project2']
     */
    projects: Array<string>;
  };
}

interface config {
  /**
   * GitHub Config
   */
  github: github;
}

interface GitProfileProps {
  /**
   * Config values
   */
  config: config;
}

declare class GitProfile extends Component<GitProfileProps> {}

export default GitProfile;
