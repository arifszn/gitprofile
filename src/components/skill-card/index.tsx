import { skeleton } from '../../utils';

const SkillCard = ({
  loading,
  skills,
}: {
  loading: boolean;
  skills: string[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
        </div>,
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
              <span className="text-base-content opacity-70">Skills</span>
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
  );
};

export default SkillCard;
