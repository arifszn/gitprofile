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
    forks?: boolean;

    /**
     * These projects will not be displayed
     *
     * example: ['my-project1', 'my-project2']
     */
    projects?: Array<string>;
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
   * Instagram
   */
  instagram?: string;

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
   * dev
   */
  dev?: string;

  /**
   * Stack Overflow
   */
  stackoverflow?: string;

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
   * medium | dev
   */
  source?: string;

  /**
   * Username
   */
  username?: string;

  /**
   * How many posts to display
   *
   * Max is 10
   */
  limit?: number;
}

export interface GoogleAnalytics {
  /**
   * GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
   */
  id?: string;
}

export interface Hotjar {
  /**
   * Hotjar id
   */
  id?: string;

  /**
   * Snippet Version
   */
  snippetVersion?: number;
}

export interface CustomTheme {
  /**
   * Primary color
   */
  primary?: string;

  /**
   * Secondary color
   */
  secondary?: string;

  /**
   * Accent color
   */
  accent?: string;

  /**
   * Neutral color
   */
  neutral?: string;

  /**
   * Base color of page
   */
  'base-100'?: string;

  /**
   * Border radius of rounded-box
   */
  '--rounded-box'?: string;

  /**
   * Border radius of rounded-btn
   */
  '--rounded-btn'?: string;
}

export interface ThemeConfig {
  /**
   * Default theme
   */
  defaultTheme?: string;

  /**
   * Hides the switch in the navbar
   */
  disableSwitch?: boolean;

  /**
   * Should use the prefers-color-scheme media-query
   */
  respectPrefersColorScheme?: boolean;

  /**
   * Hide the ring in Profile picture
   */
  hideAvatarRing?: boolean;

  /**
   * Available themes
   */
  themes?: Array<string>;

  /**
   * Custom theme
   */
  customTheme?: CustomTheme;
}

export interface Experience {
  company?: string;
  position?: string;
  from?: string;
  to?: string;
  companyLink?: string;
}
export interface Certifications {
  body?: string;
  name?: string;
  year?: string;
  link?: string;
}

export interface ExternalProjects {
  title: string;
  description: string;
  imageUrl?: string;
  link: string;
}

export interface Education {
  institution?: string;
  degree?: string;
  from?: string;
  to?: string;
}

export interface Resume {
  fileUrl?: string;
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
   * Resume
   */
  resume?: Resume;

  /**
   * Skill list
   */
  skills?: Array<string>;

  /**
   * Experience list
   */
  experiences?: Array<Experience>;

  /**
   * External Projects
   */
  externalProjects?: Array<ExternalProjects>;

  /**
   * Certifications list
   */
  certifications?: Array<Certifications>;

  /**
   * Education list
   */
  education?: Array<Education>;

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

  /**
   * Custom footer
   */
  footer?: string;
}

export interface GitProfileProps {
  /**
   * Config values
   */
  config: Config;
}

declare class GitProfile extends Component<GitProfileProps> {}

export default GitProfile;
