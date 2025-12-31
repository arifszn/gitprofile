import { Fragment } from 'react';
import LazyImage from '../lazy-image';
import { MdOpenInNew } from 'react-icons/md';
import { ga, skeleton } from '../../utils';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';

const ExternalProjectCard = ({
  externalProjects,
  header,
  loading,
  googleAnalyticId,
}: {
  externalProjects: SanitizedExternalProject[];
  header: string;
  loading: boolean;
  googleAnalyticId?: string;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < externalProjects.length; index++) {
      array.push(
        <div className="card shadow-md card-sm bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div className="avatar w-full h-full">
                      <div className="w-24 h-24 mask mask-squircle mx-auto">
                        {skeleton({
                          widthCls: 'w-full',
                          heightCls: 'h-full',
                          shape: '',
                        })}
                      </div>
                    </div>
                    <div className="mt-2">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                    <div className="mt-2 flex items-center flex-wrap justify-center">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderExternalProjects = () => {
    return externalProjects.map((item, index) => (
      <div className="card shadow-md card-sm bg-base-100 relative" key={index}>
        <div className="p-8 h-full w-full">
          <div className="flex items-center flex-col">
            <div className="w-full">
              <div className="px-4">
                <div className="text-center w-full">
                  {item.title.startsWith('## ') ? (
                    <h2 className="text-xl font-bold text-center opacity-60 mb-2 whitespace-pre-line">
                      {item.title.slice(3)}
                    </h2>
                  ) : item.title.startsWith('# ') ? (
                    <h1 className="text-2xl font-bold text-center opacity-60 mb-2 whitespace-pre-line">
                      {item.title.slice(2)}
                    </h1>
                  ) : (
                    <h2 className="font-medium text-center opacity-60 mb-2 whitespace-pre-line">
                      {item.title}
                    </h2>
                  )}
                  {item.imageUrl && (
                    <div className="avatar opacity-90">
                      <div className="w-24 h-24 mask mask-squircle">
                        <LazyImage
                          src={item.imageUrl}
                          alt={'thumbnail'}
                          placeholder={skeleton({
                            widthCls: 'w-full',
                            heightCls: 'h-full',
                            shape: '',
                          })}
                        />
                      </div>
                    </div>
                  )}
                  <div className="mt-2 text-base-content text-sm text-left whitespace-pre-line">
                    {item.description?.split('\n').map((line, i) => {
                      if (line.startsWith('### ')) {
                        return (
                          <h3 key={i} className="text-lg font-bold mt-3 mb-1">
                            {line.slice(4)}
                          </h3>
                        );
                      }
                      if (line.startsWith('## ')) {
                        return (
                          <h2 key={i} className="text-xl font-bold mt-4 mb-2">
                            {line.slice(3)}
                          </h2>
                        );
                      }
                      if (line.startsWith('# ')) {
                        return (
                          <h1 key={i} className="text-2xl font-bold mt-4 mb-2">
                            {line.slice(2)}
                          </h1>
                        );
                      }
                      return line ? <p key={i}>{line}</p> : <br key={i} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="absolute top-4 right-4 btn btn-sm btn-circle btn-ghost"
          onClick={(e) => {
            e.stopPropagation();
            try {
              if (googleAnalyticId) {
                ga.event('Click External Project', {
                  post: item.title,
                });
              }
            } catch (error) {
              console.error(error);
            }
          }}
        >
          <MdOpenInNew className="text-lg" />
        </a>
        {item.year && (
          <div className="absolute bottom-4 right-4 badge badge-sm badge-neutral">
            {item.year}
          </div>
        )}
      </div>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="card bg-base-200 shadow-xl border border-base-300">
          <div className="card-body p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center space-x-3">
                {loading ? (
                  skeleton({
                    widthCls: 'w-12',
                    heightCls: 'h-12',
                    className: 'rounded-xl',
                  })
                ) : (
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                    <MdOpenInNew className="text-2xl" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                      : header}
                  </h3>
                  <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-32', heightCls: 'h-4' })
                      : `Showcasing ${externalProjects.length} projects`}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading ? renderSkeleton() : renderExternalProjects()}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExternalProjectCard;
