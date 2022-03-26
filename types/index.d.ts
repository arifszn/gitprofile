// Type definitions for GitProfile
// Project https://github.com/arifszn/gitprofile
// Author: Ariful Alam <arifulalamszn@gmail.com>

import { Component } from 'react';

export interface Github {
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

export interface Social {
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

export interface Blog {
  /**
   * medium | dev.to
   */
  source: string;

  /**
   * Username
   */
  username: string;

  /**
   * How many posts to display
   *
   * Max is 10
   */
  limit: number;
}

export interface GoogleAnalytics {
  /**
   * GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
   */
  id: string;
}

export interface Hotjar {
  /**
   * Hotjar id
   */
  id: string;

  /**
   * Snippet Version
   */
  snippetVersion: number;
}

export interface ThemeConfig {
  /**
   * Default theme
   */
  defaultTheme: string;

  /**
   * Snippet Version
   */
  snippetVersion: number;
}

export interface Config {
  /**
   * GitHub Config
   */
  github: Github;

  /**
   * Social links
   */
  social?: Social;

  /**
   * Skill list
   */
  skills?: Array<string>;

  /**
   * Experience list
   */
  experiences?: Array<string>;

  /**
   * Education list
   */
  education?: Array<string>;

  /**
   * Blog config
   */
  blog?: Blog;

  /**
   * Google Analytics config
   */
  googleAnalytics?: GoogleAnalytics;

  /**
   * Hotjar config
   */
  hotjar?: Hotjar;

  /**
   * Theme config
   */
  themeConfig?: ThemeConfig;
}

export interface GitProfileProps {
  /**
   * Config values
   */
  config: Config;
}

declare class GitProfile extends Component<GitProfileProps> {}

export default GitProfile;
