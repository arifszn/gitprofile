import { Fragment } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';
import { ga } from '../../helpers/utils';
import LazyImage from '../lazy-image';

const Showcase = ({ cases, loading, googleAnalytics }) => {
  const renderSkeleton = () => {
    return [
      <div className="card shadow-lg compact bg-base-100" key="">
        <div className="flex justify-between flex-col p-8 h-full w-full">
          <div>
            <div className="flex items-center">
              <span>
                <h5 className="card-title text-lg">
                  {skeleton({ width: 'w-32', height: 'h-8' })}
                </h5>
              </span>
            </div>
            <div className="mb-5 mt-1">
              {skeleton({
                width: 'w-full',
                height: 'h-4',
                className: 'mb-2',
              })}
              {skeleton({ width: 'w-full', height: 'h-4' })}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-grow">
              <span className="mr-3 flex items-center">
                {skeleton({ width: 'w-12', height: 'h-4' })}
              </span>
              <span className="flex items-center">
                {skeleton({ width: 'w-12', height: 'h-4' })}
              </span>
            </div>
            <div>
              <span className="flex items-center">
                {skeleton({ width: 'w-12', height: 'h-4' })}
              </span>
            </div>
          </div>
        </div>
      </div>,
    ];
  };

  const renderShowcases = () => {
    return cases.map((item, index) => (
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer"
        key={index}
        href={item.link}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalytics?.id) {
              ga.event({
                action: 'Click Showcase',
                params: {
                  post: item.name,
                },
              });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(item.link, '_blank');
        }}
      >
        <div className="p-8 h-full w-full">
          <div className="flex items-center flex-col md:flex-row">
            {item.imageUrl && (
              <div className="avatar mb-5 md:mb-0 opacity-90">
                <div className="w-24 h-24 mask mask-squircle">
                  <LazyImage
                    src={item.imageUrl}
                    alt={'thumbnail'}
                    placeholder={skeleton({
                      width: 'w-full',
                      height: 'h-full',
                      shape: '',
                    })}
                  />
                </div>
              </div>
            )}
            <div className="w-full">
              <div className="flex items-start px-4">
                <div className="text-center md:text-left w-full">
                  <h2 className="font-semibold text-base-content opacity-60">
                    <div className="flex flex-row items-center">
                      <AiOutlineLink className="mr-1" /> {item.name}
                    </div>
                  </h2>
                  <p className="mt-3 text-base-content text-opacity-60 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-gradient-to-br to-base-200 from-base-100 shadow">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ width: 'w-28', height: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        My Showcases
                      </span>
                    )}
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading || !cases ? renderSkeleton() : renderShowcases()}
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

Showcase.propTypes = {
  cases: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  googleAnalytics: PropTypes.object,
};

export default Showcase;
