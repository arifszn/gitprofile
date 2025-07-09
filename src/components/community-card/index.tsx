import React from 'react';
import { SanitizedCommunity } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  year,
  name,
  body,
  description,
  link,
}: {
  year?: React.ReactNode;
  name?: React.ReactNode;
  body?: React.ReactNode;
  description?: React.ReactNode;
  link?: string;
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{year}</div>
    <div className="font-medium">
      <a href={link} target="_blank" rel="noreferrer">
        {name}
      </a>
    </div>
    <h3 className="font-normal">{body}</h3>
    <h4 className="mb-4 text-xs">{description}</h4>
  </li>
);

const CommunityCard = ({
  communities,
  loading,
}: {
  communities: SanitizedCommunity[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          year={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          name={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          body={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Community</span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <>
                {communities.map((community, index) => (
                  <ListItem
                    key={index}
                    year={community.year}
                    name={community.name}
                    body={community.body}
                    description={community.description}
                    link={community.link}
                  />
                ))}
              </>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
