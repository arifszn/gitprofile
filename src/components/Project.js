import { Fragment } from "react";
import { useSelector } from "react-redux";
import { skeleton } from "../helpers/utils";

const Project = () => {
    const loading = useSelector(state => state.loading);

    return (
        <Fragment>
            <div className="alert col-span-1 lg:col-span-2 bg-base-100">
                <div className="flex-1">
                    <div className="section-title pb-0-important mx-5">
                        <h5 className="card-title">
                            {loading ? skeleton({width: 'w-32', height: 'h-8'}) : 'Project'}
                        </h5>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Project;