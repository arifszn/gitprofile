import { Fragment } from 'react';
import { ga, skeleton } from '../../utils';
import { Paper } from 'semanticscholarjs';

const SemanticPublicationCard = ({
  header,
  semanticPapers,
  loading,
  limit,
  id,
  googleAnalyticsId,
}: {
  header: string;
  semanticPapers: Paper[];
  loading: boolean;
  limit: number;
  id: string;
  googleAnalyticsId?: string;
}) => {
  if (!loading && semanticPapers.length === 0) {
    return;
  }

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < limit; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="px-4">
                  <div className="text-center w-full">
                    <h2 className="mb-2">
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div>
                      {skeleton({
                        widthCls: 'w-20',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                    <div>
                      {skeleton({
                        widthCls: 'w-20',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                    <div>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                    <div>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                    <div>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
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

  const renderPublications = () => {
    return semanticPapers.map((item, index) => (
      <div
        className="card shadow-lg compact bg-base-100"
        key={index}
      >
        <div className="p-8 h-full w-full">
          <div className="flex items-center flex-col">
            <div className="w-full">
              <div className="px-4">
                <div className="text-center w-full">
                  <a 
                    className="font-bold text-lg opacity-60 mb-2 cursor-pointer"
                    href={item.url}
                    onClick={(e) => {
                      e.preventDefault();

                      try {
                        if (googleAnalyticsId) {
                          ga.event('Click publication', {
                            publication: item.title || '',
                          });
                        }
                      } catch (error) {
                        console.error(error);
                      }

                      window?.open(item.url, '_blank');
                    }}>
                      {item.title}
                  </a>
                  {item.publicationVenue?.name && (
                    <p className="text-base-content opacity-50 text-sm">
                      {item.publicationVenue.name}
                    </p>
                  )}
                  {item.journal?.name && (
                    <p className="text-base-content opacity-50 text-sm">
                      {item.journal?.name}
                    </p>
                  )}
                  {item.authors && (
                    <div className="flex flex-row flex-wrap gap-x-3 gap-y-2 justify-center text-base-content opacity-50 text-sm mt-3">
                      {item.authors.map((author) => (
                        <a 
                          className="cursor-pointer" 
                          href={author.homepage ? author.homepage : author.url!}>
                            {author.name}
                        </a>
                      ))}
                    </div>
                  )}
                  {item.abstract && (
                    <p className="mt-2 text-base-content text-opacity-60 text-sm line-clamp-2 text-justify">
                      {item.abstract}
                    </p>
                  )}
                  {/* {item.tldr && (
                    <p className="mt-2 text-base-content text-opacity-60 text-sm text-justify">
                      {item.tldr.text}
                    </p>
                  )} */}
                </div>
              </div>
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
                      href={`https://semanticscholar.org/author/${id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base-content opacity-50 hover:underline"
                    >
                      See All
                    </a>
                  )}
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading ? renderSkeleton() : renderPublications()}
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

export default SemanticPublicationCard;
