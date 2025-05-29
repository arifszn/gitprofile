import { ReactElement } from 'react';

export interface CustomError {
  status: number;
  title: string;
  subTitle: string | ReactElement;
}

export const INVALID_CONFIG_ERROR: CustomError = {
  status: 500,
  title: 'Invalid Config!',
  subTitle: (
    <p>
      Please provide correct config in <code>gitprofile.config.ts</code>.
    </p>
  ),
};

export const setTooManyRequestError = (resetTime: string): CustomError => {
  return {
    status: 429,
    title: 'Too Many Requests!',
    subTitle: (
      <p>
        Oh no, you hit the{' '}
        <a
          href="https://developer.github.com/v3/rate_limit/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          rate limit
        </a>
        ! Try again later{` ${resetTime}`}.
      </p>
    ),
  };
};

export const INVALID_GITHUB_USERNAME_ERROR: CustomError = {
  status: 404,
  title: 'Invalid GitHub Username!',
  subTitle: (
    <p>
      Please provide correct github username in{' '}
      <code>gitprofile.config.ts</code>.
    </p>
  ),
};

export const GENERIC_ERROR: CustomError = {
  status: 500,
  title: 'Oops!!',
  subTitle: 'Something went wrong.',
};
