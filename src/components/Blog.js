import { getDevtoArticle, getMediumArticle } from "article-api";
import moment from "moment";
import { memo, useEffect, useState } from "react";
import { CgHashtag } from 'react-icons/cg';
import config from "../config";
import { skeleton } from "../helpers/utils";

const Blog = () => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        if (
            typeof config.blog !== 'undefined' &&
            typeof config.blog.source !== 'undefined' &&
            typeof config.blog.username !== 'undefined' &&
            config.blog.source &&
            config.blog.username
        ) {
            if (config.blog.source === 'medium') {
                getMediumArticle({
                    user: config.blog.username
                })
                    .then(res => {
                        setArticles(res);
                    });
            } else if (config.blog.source === 'dev.to') {
                getDevtoArticle({
                    user: config.blog.username
                })
                    .then(res => {
                        setArticles(res);
                    });
            }
        }
    }, [])

    return (
        <div className="col-span-1 lg:col-span-2">
                <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2">
                        <div className="card compact bg-base-100">
                            <div className="card-body">
                                <ul className="menu row-span-3 bg-base-100 text-base-content text-opacity-40">
                                    <li>
                                        <div className="section-title pb-0-important mx-5 flex items-center">
                                            <h5 className="card-title mr-3">
                                                {!articles ? skeleton({width: 'w-28', height: 'h-8'}) : 'Recent Posts'}
                                            </h5>
                                            {
                                                !articles ? skeleton({width: 'w-8', height: 'h-8'}) : (
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
                    </div>
                    <div className="col-span-2">
                        <div className="grid grid-cols-1 gap-6">
                            {
                                articles && articles.slice(0, 5).map((article, index) => (
                                    <a href={article.link} target="_blank" rel="noreferrer" className="card shadow-lg compact bg-base-100" key={index}>
                                    <div className="p-8 h-full w-full">
                                            <div className="flex items-center flex-col md:flex-row">
                                                <div className="avatar mb-5 md:mb-0">
                                                    <div className="w-24 h-24 mask mask-squircle">
                                                        <img src={article.thumbnail} alt={'thumbnail'}/>
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <div className="flex items-start px-4">
                                                        <div className="text-center md:text-left">
                                                            <h2 className="text-lg font-semibold text-gray-900 -mt-1">{article.title}</h2>
                                                            <p className="text-gray-700">{moment(article.publishedAt).fromNow()}</p>
                                                            <p className="mt-3 text-gray-700 text-sm">
                                                                {article.description}
                                                            </p>
                                                            <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                                                                {
                                                                    article.categories.map((category, index2) => (
                                                                        <div key={index2} className="flex text-gray-700 text-sm mr-3 items-center">
                                                                            <CgHashtag/>
                                                                            <span>{category}</span>
                                                                        </div>
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </a>
                                        
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default memo(Blog);