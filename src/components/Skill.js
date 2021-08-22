import { useSelector } from "react-redux";
import config from "../config";
import { skeleton } from "../helpers/utils";

const Skill = () => {
    const loading = useSelector(state => state.loading);

    const renderSkeleton = () => {
        let array = [];
        for (let index = 0; index < 12; index++) {
            array.push((
                <div key={index}>
                    {skeleton({width: 'w-16', height: 'h-4'})}
                </div>
            ))
        }

        return array;
    }

    return (
        <>
            {
                (typeof config.skills !== 'undefined' && config.skills.length !== 0) && (
                    <div className="card shadow-lg compact side bg-base-100">
                        <div className="card-body">
                            <div className="inline-flex gap-2 flex-wrap justify-center">
                                {
                                    loading ? renderSkeleton() : (
                                        config.skills.map((skill, index) => (
                                            <div class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 badge-primary bg-opacity-75 rounded-full">
                                                {skill}
                                            </div>
                                        ))
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Skill;