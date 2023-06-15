import React, { useEffect, useState } from 'react';
import { ga, skeleton, getLeetCodeStats } from '../../helpers/utils';
import PropTypes from 'prop-types';

const LeetCode = ({ loading, username, googleAnalytics }) => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);
  const profileLink = "https://leetcode.com/" + username;
  
  useEffect(() => {
    getLeetCodeStats(username).then((res) => {
      if (res.message != "retrieved") {
        setError(res.message);
        return;
      }
      setStats(res);
    }).catch((err) => {
      setError(err);
      console.error(err);
    });
  }, []);

  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 7; index++) {
      array.push(
        <ListItem
          key={index}
          skeleton={true}
          icon={skeleton({ width: 'w-4', height: 'h-4' })}
          title={skeleton({ width: 'w-24', height: 'h-4' })}
          value={skeleton({ width: 'w-full', height: 'h-4' })}
        />
      );
    }

    return array;
  };

  return (
    <>
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer grow"
        style={{ minWidth: '300px' }}
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
            {`Leetcode (${username})`}
          </h2>
          <div className="justify-between card-actions">
            <div className="ml-2 text-base-content w-full">
              <span className="font-bold">
                {(error)
                  ? (<div>{JSON.stringify(error)}</div>)
                  : (loading || !stats)
                    ? (renderSkeleton())
                    : (
                    <>
                      <ListItem title="Total Solved" value={stats.totalSolved} />
                      <ListItem title="Easy Solved" value={stats.easySolved} />
                      <ListItem title="Medium Solved" value={stats.mediumSolved} />
                      <ListItem title="Hard Solved" value={stats.hardSolved} />
                      <ListItem title="Acceptance Rate" value={stats.acceptanceRate} />
                      <ListItem title="Ranking" value={stats.ranking} />
                      <ListItem title="Contribution Points" value={stats.contributionPoints} />
                    </>
                    )
                }
              </span>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

LeetCode.propTypes = {
  loading: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  googleAnalytics: PropTypes.object.isRequired,
};

export default LeetCode;

const ListItem = ({ title, value, skeleton = false }) => {
  return (
    <div className="flex justify-start py-2 px-1 items-center">
      <div className="flex-grow font-medium gap-2 flex items-center my-1">
        {title}
      </div>
      <div
        className={`${
          skeleton ? 'flex-grow' : ''
        } text-sm font-normal text-right mr-2 ml-3`}
        style={{
          wordBreak: 'break-word',
        }}
      >
        {value}
      </div>
    </div>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  skeleton: PropTypes.bool,
};

