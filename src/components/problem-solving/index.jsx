import Codeforces from "./codeforces";
import LeetCode from "./leetcode";
import PropTypes from 'prop-types';
import { skeleton } from "../../helpers/utils";

const ProblemSolving = ({ loading, problemSolving, googleAnalytics }) => {

  const showCodeforces = problemSolving.codeforces.username != '';
  const showLeetCode = problemSolving.leetcode.username != '';

  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0">
                <div className="w-24 h-24 mask mask-squircle">
                  {skeleton({
                    width: 'w-full',
                    height: 'h-full',
                    shape: '',
                  })}
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        width: 'w-full',
                        height: 'h-8',
                        className: 'mb-2 mx-auto md:mx-0',
                      })}
                    </h2>
                    {skeleton({
                      width: 'w-24',
                      height: 'h-3',
                      className: 'mx-auto md:mx-0',
                    })}
                    <div className="mt-3">
                      {skeleton({
                        width: 'w-full',
                        height: 'h-4',
                        className: 'mx-auto md:mx-0',
                      })}
                    </div>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                      {skeleton({
                        width: 'w-32',
                        height: 'h-4',
                        className: 'md:mr-2 mx-auto md:mx-0',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return array;
  };


  return (
    <>
      {(showCodeforces || showLeetCode) && (
        <div className="col-span-1 lg:col-span-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <div
                className={`card compact bg-base-100 ${
                  loading || (showCodeforces || showLeetCode)
                    ? 'shadow bg-opacity-40'
                    : 'shadow-lg'
                }`}
              >
                <div className="card-body">
                  <div className="mx-3 mb-2">
                    <h5 className="card-title">
                      {loading ? (
                        skeleton({ width: 'w-28', height: 'h-8' })
                      ) : (
                        <span className="text-base-content opacity-70">
                          Problem Solving
                        </span>
                      )}
                    </h5>
                  </div>
                  <div className="col-span-2">
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 grid"> */}
                    <div className="flex gap-6 flex-wrap sm:flex-nowrap">
                      {loading
                        ? renderSkeleton()
                        : <>
                          {showCodeforces && (
                            <Codeforces
                              loading={loading}
                              username={problemSolving.codeforces.username}
                              limit={problemSolving.codeforces.limit}
                              googleAnalytics={googleAnalytics}
                            />
                          )}
                          {showLeetCode && (
                            <LeetCode
                              loading={loading}
                              username={problemSolving.leetcode.username}
                              googleAnalytics={googleAnalytics}
                            />
                          )}
                        </>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ProblemSolving.propTypes = {
  loading: PropTypes.bool,
  problemSolving: PropTypes.object,
  googleAnalytics: PropTypes.object,
};

export default ProblemSolving;