import { skeleton } from '../../helpers/utils';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ year, name, body, link }) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{year}</div>
    <div className="font-semibold">
      <a href={link} target="_blank" rel="noreferrer">
        {name}
      </a>
    </div>
    <h3 className="mb-4 font-normal">{body}</h3>
  </li>
);

const Certification = ({ certifications, loading }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          year={skeleton({
            width: 'w-5/12',
            height: 'h-4',
          })}
          name={skeleton({
            width: 'w-6/12',
            height: 'h-4',
            className: 'my-1.5',
          })}
          body={skeleton({ width: 'w-6/12', height: 'h-3' })}
        />
      );
    }

    return array;
  };

  return (
    <>
      {certifications?.length !== 0 && (
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-70">
                    Certification
                  </span>
                )}
              </h5>
            </div>
            <div className="text-base-content text-opacity-60">
              <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                {loading ? (
                  renderSkeleton()
                ) : (
                  <Fragment>
                    {certifications.map((certification, index) => (
                      <ListItem
                        key={index}
                        year={`${certification.year}`}
                        name={certification.name}
                        body={certification.body}
                        link={certification.link ? certification.link : null}
                      />
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

ListItem.propTypes = {
  year: PropTypes.node,
  name: PropTypes.node,
  body: PropTypes.node,
  link: PropTypes.string,
};

Certification.propTypes = {
  certifications: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Certification;
