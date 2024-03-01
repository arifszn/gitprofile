import React, { Fragment } from 'react';
import { SanitizedExperience } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  time,
  position,
  company,
  companyLink,
}: {
  time: React.ReactNode;
  position?: React.ReactNode;
  company?: React.ReactNode;
  companyLink?: string;
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{time}</div>
    <h3 className="font-semibold">{position}</h3>
    <div className="mb-4 font-normal">
      <a href={companyLink} target="_blank" rel="noreferrer">
        {company}
      </a>
    </div>
  </li>
);

const PublicationCard = ({
  experiences,
  loading,
}: {
  experiences: SanitizedExperience[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          position={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          company={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }

    return array;
  };
  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <div className="card compact bg-base-100 shadow bg-opacity-40">
            <div className="card-body">
              <div className="mx-3 flex items-center justify-between mb-2">
                <h5 className="card-title">
                  <span className="text-base-content opacity-70">
                    Publications
                  </span>
                </h5>
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    className="card shadow-lg compact bg-base-100 cursor-pointer"
                    href="https://example.com"
                  >
                    <div className="p-8 h-full w-full">
                      <div className="flex items-center flex-col">
                        <div className="w-full">
                          <div className="px-4">
                            <div className="text-center w-full">
                              <h2 className="font-semibold text-lg tracking-wide text-center opacity-60 mb-2">
                                Publication Title
                              </h2>
                              <p className="text-base-content opacity-50 text-sm">
                                Conference / Journal Name
                              </p>
                              <p className="text-base-content opacity-50 text-sm">
                                Authors: John Doe, Jane Smith
                              </p>
                              <p className="mt-1 text-base-content text-opacity-60 text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="card shadow-lg compact bg-base-100 cursor-pointer"
                    href="https://example.com"
                  >
                    <div className="p-8 h-full w-full">
                      <div className="flex items-center flex-col">
                        <div className="w-full">
                          <div className="px-4">
                            <div className="text-center w-full">
                              <h2 className="font-semibold text-lg tracking-wide text-center opacity-60 mb-2">
                                Publication Title
                              </h2>
                              <p className="text-base-content opacity-50 text-sm">
                                Conference / Journal Name
                              </p>
                              <p className="text-base-content opacity-50 text-sm">
                                Authors: John Doe, Jane Smith
                              </p>
                              <p className="mt-1 text-base-content text-opacity-60 text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
