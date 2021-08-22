import { AiFillGithub } from "react-icons/ai";
import { useSelector } from "react-redux";
import config from "../config";
import { skeleton } from "../helpers/utils";

const Experience = () => {
    const loading = useSelector(state => state.loading);

    const renderSkeleton = () => {
        let array = [];
        for (let index = 0; index < 2; index++) {
            array.push((
                <li key={index}>
                    <span className="d-unset">
                        <div className="block justify-between">
                            <div className="font-medium">
                                {skeleton({ width: 'w-48', height: 'h-4', className: "mb-2" })}
                            </div>
                            <div className="opacity-80">
                                {skeleton({ width: 'w-32', height: 'h-4', className: "mb-2" })}
                            </div>
                        </div>
                        <div>
                            {skeleton({ width: 'w-32', height: 'h-3' })}
                        </div>
                    </span>
                </li>
            ))
        }

        return array;
    }

    return (
        <>
            {
                (typeof config.experiences !== 'undefined' && config.experiences.length !== 0) && (
                    <div className="card shadow-lg compact side bg-base-100">
                        <div className="card-body">
                            <ul className="menu row-span-3 bg-base-100 text-base-content text-opacity-40">
                                <li>
                                    <div className="section-title pb-0-important mx-5">
                                        <h5 className="card-title">
                                            {loading ? skeleton({width: 'w-32', height: 'h-8'}) : 'Experience'}
                                        </h5>
                                    </div>
                                </li>
                                {
                                    loading ? renderSkeleton() : (
                                        config.experiences.map((experience, index) => (
                                            <li key={index}>
                                                <span className="d-unset">
                                                    <div className="block justify-between">
                                                        <div className="font-medium">
                                                            {experience.company}
                                                        </div>
                                                        <div className="opacity-80">
                                                            {experience.from} - {experience.to}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {experience.position}
                                                    </div>
                                                </span>
                                            </li>
                                        ))
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Experience;