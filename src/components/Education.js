import { AiFillGithub } from "react-icons/ai";
import { useSelector } from "react-redux";
import config from "../config";
import { skeleton } from "../helpers/utils";

const Education = () => {
    const loading = useSelector(state => state.loading);

    const renderSkeleton = () => {
        let array = [];
        for (let index = 0; index < 2; index++) {
            array.push((
                <li>
                    <span className="d-unset">
                        <div class="block md:flex justify-between">
                            <div class="font-medium">
                                {skeleton({ width: 'w-48', height: 'h-4', className: "mb-2" })}
                            </div>
                            <div class="opacity-80">
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
                (typeof config.education !== 'undefined' && config.education.length !== 0) && (
                    <div className="card shadow-lg compact side bg-base-100 col-span-1 lg:col-span-2">
                        <div className="card-body">
                            <ul className="menu row-span-3 bg-base-100 text-base-content text-opacity-40">
                                <li>
                                    <div className="section-title pb-0-important mx-5">
                                        <h5 className="card-title">
                                            {loading ? skeleton({width: 'w-32', height: 'h-8'}) : 'Education'}
                                        </h5>
                                    </div>
                                </li>
                                {
                                    loading ? renderSkeleton() : (
                                        config.education.map((item, index) => (
                                            <li>
                                                <span className="d-unset">
                                                    <div class="block md:flex justify-between">
                                                        <div class="font-medium">
                                                            {item.institution}
                                                        </div>
                                                        <div class="opacity-80">
                                                            {item.from} - {item.to}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {item.degree}
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

export default Education;