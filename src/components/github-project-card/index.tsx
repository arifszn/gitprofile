import { Fragment } from 'react';
import { AiOutlineCode, AiOutlineComment, AiOutlineFork, AiOutlineStar } from 'react-icons/ai';
import { MdInsertLink } from 'react-icons/md';
import { ga, getLanguageColor, skeleton } from '../../utils';
import { GithubProject } from '../../interfaces/github-project';

const GithubProjectCard = ({
  header,
  githubProjects,
  loading,
  limit,
  username,
  googleAnalyticsId,
  type,
  sortBy,
}: {
  header: string;
  githubProjects: GithubProject[];
  loading: boolean;
  limit: number;
  username: string;
  googleAnalyticsId?: string;
  type?: string;
  sortBy?: string;
}) => {
  if (!loading && githubProjects.length === 0) {
    return;
  }

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < limit; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="flex justify-between flex-col p-8 h-full w-full">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="card-title text-lg">
                    {skeleton({
                      widthCls: 'w-32',
                      heightCls: 'h-8',
                      className: 'mb-1',
                    })}
                  </h5>
                </span>
              </div>
              <div className="mb-5 mt-1">
                {skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-4',
                  className: 'mb-2',
                })}
                {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-grow">
                <span className="mr-3 flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderProjects = () => {
    return githubProjects.map((item, index) => (
      <div className="card shadow-lg compact bg-base-100">
        <div className="flex justify-between flex-col p-8 h-full w-full">
          <a
            className="cursor-pointer"
            href={item.html_url}
            key={index}
            onClick={(e) => {
              e.preventDefault();

              try {
                if (googleAnalyticsId) {
                  ga.event(type === 'commits' ? 'Click commit' : 'Click project', {
                    project: item.name,
                  });
                }
              } catch (error) {
                console.error(error);
              }

              window?.open(item.html_url, '_blank');
            }}
          >
            <div className="flex items-center truncate">
              <div className="card-title text-lg tracking-wide flex text-base-content opacity-60">
                <MdInsertLink className="my-auto" />
                <span>{type === 'commits' ? item.repository.name : item.name}</span>
              </div>
            </div>
            <p className="mb-5 mt-1 text-base-content text-opacity-60 text-sm">
              {type === 'commits' ? item.commit.message : item.description}
            </p>
          </a>
          <div className="flex justify-between text-sm text-base-content text-opacity-60 truncate">
            {type === 'commits' ?
              <div className="flex flex-grow gap-x-2">
                <a
                  className="flex items-center cursor-pointer truncate"
                  href={`https://github.com/${item.repository.owner.login}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={item.repository.owner.avatar_url} className="w-5 h-5 rounded-full mr-0.5" alt="avatar" />
                  <span>{item.repository.owner.login}</span>
                </a>
                <a
                  className="flex items-center cursor-pointer truncate"
                  href={`${item.html_url}#comments`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineComment className="mr-0.5" />
                  <span>{item.commit.comment_count}</span>
                </a>
              </div>
            :
              <div className="flex flex-grow gap-x-2">
                <a
                  className="flex items-center cursor-pointer truncate"
                  href={`${item.html_url}/pulse`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineStar className="mr-0.5" />
                  <span>{item.stargazers_count}</span>
                </a>
                <a
                  className="flex items-center cursor-pointer truncate"
                  href={`${item.html_url}/forks`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineFork className="mr-0.5" />
                  <span>{item.forks_count}</span>
                </a>
              </div>
            }
            <div>
              <a
                className="flex items-center cursor-pointer truncate"
                href={type === 'commits' ?
                  `https://github.com/${item.repository.full_name}/tree/${item.sha}` :
                  `https://github.com/search?type=code&q=repo%3A${item.full_name}+language%3A${item.language}` }
                target="_blank"
                rel="noreferrer"
              >
                {type === 'commits' ? <AiOutlineCode className="mr-0.5" /> :
                  <div
                    className="w-3 h-3 rounded-full mr-1 opacity-60"
                    style={{ backgroundColor: getLanguageColor(item.language) }}
                  />
                }
                <span>{type === 'commits' ? item.sha.substring(0,4)+item.sha.substring(36) : item.language}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        {header}
                      </span>
                    )}
                  </h5>
                  {loading ? (
                    skeleton({ widthCls: 'w-10', heightCls: 'h-5' })
                  ) : (
                    <a
                      href={type === 'commits' ?
                        `https://github.com/search?q=author%3A${username}&type=commits&s=${sortBy}&o=desc` :
                        `https://github.com/${username}?tab=repositories`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base-content opacity-50 hover:underline"
                    >
                      {type === 'commits' ? 'Recent Commits' : 'See All'}
                    </a>
                  )}
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading ? renderSkeleton() : renderProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GithubProjectCard;
