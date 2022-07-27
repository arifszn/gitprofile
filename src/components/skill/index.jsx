import { skeleton } from '../../helpers/utils';
import PropTypes from 'prop-types';

const Skill = ({ loading, skills }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ width: 'w-16', height: 'h-4', className: 'm-1' })}
        </div>
      );
    }

    return array;
  };

  return (
    <>
      {skills?.length !== 0 && (
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-70">
                    Tech Stack
                  </span>
                )}
              </h5>
            </div>
            <div className="p-3 flow-root">
              <div className="-m-1 flex flex-wrap justify-center">
                {loading
                  ? renderSkeleton()
                  : skills.map((skill, index) => (
                      <div
                        key={index}
                        className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full"
                      >
                        {skill}
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Skill.propTypes = {
  loading: PropTypes.bool.isRequired,
  skills: PropTypes.array.isRequired,
};

export default Skill;
