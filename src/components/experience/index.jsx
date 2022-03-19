import { GoPrimitiveDot } from 'react-icons/go';
import { skeleton } from '../../helpers/utils';
import config from '../../ezprofile.config';
import { Fragment } from 'react';

const Experience = ({ loading }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <li class="mb-5 ml-4">
          <div
            class="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
            style={{ left: '-4.5px' }}
          ></div>
          <div class="my-0.5 text-xs opacity-80">
            {skeleton({
              width: 'w-5/12',
              height: 'h-4',
            })}
          </div>
          <h3 class="font-semibold opacity-90">
            {skeleton({
              width: 'w-6/12',
              height: 'h-4',
              className: 'my-1.5',
            })}
          </h3>
          <p class="mb-4 font-normal opacity-90">
            {skeleton({ width: 'w-6/12', height: 'h-3' })}
          </p>
        </li>
      );
    }

    return array;
  };

  return (
    <>
      {typeof config.experiences !== 'undefined' &&
        config.experiences.length !== 0 && (
          <div className="card shadow-lg compact bg-base-100">
            <div className="card-body">
              <div className="mx-3">
                <h5 className="card-title">
                  {loading ? (
                    skeleton({ width: 'w-32', height: 'h-8' })
                  ) : (
                    <span className="opacity-70">Experience</span>
                  )}
                </h5>
              </div>
              <div className="text-base-content text-opacity-60">
                <ol class="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                  {loading ? (
                    renderSkeleton()
                  ) : (
                    <Fragment>
                      {config.experiences.map((experience, index) => (
                        <li class="mb-5 ml-4">
                          <div
                            class="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
                            style={{ left: '-4.5px' }}
                          ></div>
                          <div class="my-0.5 text-xs opacity-80">
                            {experience.from} - {experience.to}
                          </div>
                          <h3 class="font-semibold opacity-90">
                            {experience.position}
                          </h3>
                          <p class="mb-4 font-normal opacity-90">
                            {experience.company}
                          </p>
                        </li>
                      ))}
                    </Fragment>
                  )}
                </ol>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default Experience;
