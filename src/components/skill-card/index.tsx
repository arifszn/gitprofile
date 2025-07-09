import { Skill } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const SkillCard = ({
  loading,
  skills,
}: {
  loading: boolean;
  skills: Record<string, Skill[]>;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 8; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100 w-full" key={index}>
          <div className="flex items-start px-4 py-4 md:px-8 h-full w-full">
            <div className="text-left ">
              <h2 className="font-medium text-base-content text-lg opacity-60">
                {skeleton({
                  widthCls: 'w-32',
                  heightCls: 'h-6',
                })}
              </h2>
              <div className="mt-2 flex items-center flex-wrap justify-start">
                {Array.from({ length: Math.floor(Math.random() * 10) + 2 }).map(
                  () =>
                    skeleton({
                      widthCls: 'w-16',
                      heightCls: 'h-4',
                      className: 'm-1',
                    }),
                )}
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <div className="card shadow-lg compact bg-base-200">
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

              <div className="col-span-2">
                <div className="grid grid-cols-1 gap-6">
                  {loading
                    ? renderSkeleton()
                    : Object.keys(skills).map((skillType, index) => (
                        <div
                          className="card shadow-lg compact bg-base-100 w-full"
                          key={index}
                        >
                          <div className="flex items-start px-4 py-4 md:px-8 h-full w-full">
                            <div className="text-left ">
                              <h2 className="font-medium text-base-content text-lg opacity-60">
                                {skillType.charAt(0).toUpperCase() +
                                  skillType.slice(1)}
                              </h2>
                              <div className="mt-2 flex items-center flex-wrap justify-start">
                                {skills[skillType].map((skill, index2) => (
                                  <div
                                    className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full"
                                    key={index2}
                                  >
                                    {skill.title}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
