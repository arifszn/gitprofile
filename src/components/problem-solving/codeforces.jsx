import React, { useEffect, useState } from 'react';
import { ga, skeleton, getCodeforcesSolvedProblems } from '../../helpers/utils';
import PropTypes from 'prop-types';

const Codeforces = ({ loading, username, limit, googleAnalytics }) => {
  const [solvedProblems, setSolvedProblems] = useState([]);
  const [error, setError] = useState(null);
  const profileLink = "https://codeforces.com/profile/"+username;

  useEffect(() => {
    getCodeforcesSolvedProblems(username).then((res) => {
      setSolvedProblems(res);
    }).catch((err) => {
      setError(err.message);
    });
  }, []);

  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < limit; index++) {
      array.push(
        <div key={index}>
          {skeleton({ width: 'w-20', height: 'h-7', className: 'm-1' })}
        </div>
      );
    }
    return array;
  };

  return (
    <>
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer"
        href={profileLink}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalytics?.id) {
              ga.event({
                action: 'View Profile',
                params: {
                  username: username,
                },
              });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(profileLink, '_blank');
        }}
      >
        <div className="card-body p-5">
          <h2 className="font-semibold text-lg tracking-wide text-center opacity-60 mb-2">
            {`Codeforces (${username})`}
          </h2>
          <div className="-m-1 flex flex-wrap justify-center">
            {error
              ? <div>{error}</div>
              : loading
                ? renderSkeleton()
                : solvedProblems.sort((a,b)=> b.rating - a.rating).filter((p, i) => i < limit).map((problem, index) => (
                  <div
                    key={index}
                    className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full"
                  >
                    {problem.name + ': ' + problem.rating}
                  </div>
                  ))
            }
          </div>
        </div>
      </a>
    </>
  );
};

Codeforces.propTypes = {
  loading: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
  googleAnalytics: PropTypes.object.isRequired,
};

export default Codeforces;