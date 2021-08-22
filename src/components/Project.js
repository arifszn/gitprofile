import { Fragment } from "react";
import { useSelector } from "react-redux";
import { skeleton } from "../helpers/utils";
import { FiChevronsDown } from 'react-icons/fi';

const LIMIT = 8;

const Project = () => {
    const loading = useSelector(state => state.loading);
    const repo = useSelector(state => state.repo);

    const renderProjects = () => {
        if (loading) {

        } else {
            return repo.slice(0, LIMIT).map((project, index) => (
                <div className="card shadow-lg compact side bg-base-100">
                    <div className="flex justify-between flex-col p-8">
                        <div>
                            <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 mr-2 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            <span>{project.name}</span>
                            </div>
                            <p className="mb-8">{project.description}</p>
                        </div>
                        <div>
                            Stats
                        </div>
                    </div>
                </div>
            ));
        }
        
    }

    return (
        <Fragment>
            <div className="col-span-1 lg:col-span-2">
                <div class="grid grid-cols-2 gap-6">
                    <div class="col-span-2">
                        <div className="card shadow-lg compact side bg-base-100">
                            <div className="card-body">
                                <ul className="menu row-span-3 bg-base-100 text-base-content text-opacity-40">
                                    <li>
                                        <div className="section-title pb-0-important mx-5 flex items-center">
                                            <h5 className="card-title mr-3">
                                                {loading ? skeleton({width: 'w-28', height: 'h-8'}) : 'Project'}
                                            </h5>
                                            {
                                                loading ? skeleton({width: 'w-8', height: 'h-8'}) : (
                                                    <svg class="animate-bounce w-4 h-4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                                    </svg>
                                                )
                                            }
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {renderProjects()}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Project;