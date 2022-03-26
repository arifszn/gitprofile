// Type definitions for GitProfile
// Project https://github.com/arifszn/gitprofile
// Author: Ariful Alam <arifulalamszn@gmail.com>

import { Component } from 'react';

interface Github {
  /**
   * GitHub org/user name
   */
  username: string;

  /**
   * stars | updated
   */
  sortBy?: string;

  /**
   * How many projects to display
   */
  limit?: number;

  /**
   * Exclude projects option
   */
  exclude?: {
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

interface Social {
  /**
   * LinkedIn
   */
  linkedin?: string;

  /**
   * Twitter
   */
  twitter?: string;

  /**
   * Facebook
   */
  facebook?: string;

  /**
   * Dribbble
   */
  dribbble?: string;

  /**
   * Behance
   */
  behance?: string;

  /**
   * Medium
   */
  medium?: string;

  /**
   * dev.to
   */
  devto?: string;

  /**
   * Website
   */
  website?: string;

  /**
   * Phone
   */
  phone?: string;

  /**
   * Email
   */
  email?: string;
}

interface Config {
  /**
   * GitHub Config
   */
  github: Github;

  /**
   * Social links
   */
  social?: Social;
}

interface GitProfileProps {
  /**
   * Config values
   */
  config: Config;
}

declare class GitProfile extends Component<GitProfileProps> {}

export default GitProfile;
