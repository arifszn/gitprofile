import { useSelector } from "react-redux";
import { skeleton } from "../helpers/utils";

const { Fragment } = require("react")

const Blog = () => {
    const loading = useSelector(state => state.loading);

    return (
        <div className="card shadow-lg compact bg-base-100">
            <div className="flex-row items-center space-x-4 card-body">
                <div className="flex-1">
                    <div className="section-title">
                        <h5 className="card-title">
                            {loading ? skeleton({width: 'w-20', height: 'h-8'}) : 'Blog'}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;