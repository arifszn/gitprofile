import { Fragment } from "react";
import { useSelector } from "react-redux";
import { languageColor, skeleton } from "../helpers/utils";
import { AiFillStar, AiOutlineFork } from 'react-icons/ai';

const LIMIT = 8;

const Project = () => {
    const loading = useSelector(state => state.loading);
    const repo = useSelector(state => state.repo);

    const renderSkeleton = () => {
        let array = [];
        for (let index = 0; index < LIMIT; index++) {
            array.push((
                <div className="card shadow-lg compact side bg-base-100" key={index}>
                    <div className="flex justify-between flex-col p-8 h-full w-full">
                        <div>
                            <div className="flex items-center opacity-60">
                                <span>
                                    <h5 className="card-title">
                                        {skeleton({width: 'w-32', height: 'h-8'})}
                                    </h5>
                                </span>
                            </div>
                            <span className="mb-5 mt-1 text-base-content text-opacity-40 text-sm">
                                {skeleton({width: 'w-full', height: 'h-4', className: 'mb-2'})}
                                {skeleton({width: 'w-full', height: 'h-4'})}
                            </span>
                        </div>
                        <div className="flex justify-between text-sm text-base-content text-opacity-40">
                            <div className="flex flex-grow">
                                <span className="mr-3 flex items-center">
                                    {skeleton({width: 'w-12', height: 'h-4'})}
                                </span>
                                <span className="flex items-center">
                                    {skeleton({width: 'w-12', height: 'h-4'})}
                                </span>
                            </div>
                            <div>
                                <span className="flex items-center">
                                    {skeleton({width: 'w-12', height: 'h-4'})}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }

        return array;
    }

    const renderProjects = () => {
        return repo.slice(0, LIMIT).map((item, index) => (
            <a href={item.html_url} target="_blank" rel="noreferrer" className="card shadow-lg compact side bg-base-100" key={index}>
                <div className="flex justify-between flex-col p-8 h-full w-full">
                    <div>
                        <div className="flex items-center opacity-60">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            <span>
                                <h5 className="card-title">
                                    {item.name}
                                </h5>
                            </span>
                        </div>
                        <p className="mb-5 mt-1 text-base-content text-opacity-40 text-sm">
                            {item.description}
                        </p>
                    </div>
                    <div className="flex justify-between text-sm text-base-content text-opacity-40">
                        <div className="flex flex-grow">
                            <span className="mr-3 flex items-center">
                                <AiFillStar/>
                                <span>{item.stargazers_count}</span>
                            </span>
                            <span className="flex items-center">
                                <AiOutlineFork/>
                                <span>{item.forks_count}</span>
                            </span>
                        </div>
                        <div>
                            <span className="flex items-center">
                                <div className="w-3 h-3 rounded-full mr-1 opacity-75" style={{backgroundColor: languageColor(item.language)}}/>
                                <span>{item.language}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        ));
    }

    return (
        <Fragment>
            <div className="col-span-1 lg:col-span-2">
                <div className="grid grid-cols-2 gap-6">
                    {/* <div className="col-span-2">
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
                                                    <svg className="animate-bounce w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                                    </svg>
                                                )
                                            }
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {(loading || !repo) ? renderSkeleton() : renderProjects()}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Project;