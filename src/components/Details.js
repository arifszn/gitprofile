import { GoLocation } from 'react-icons/go';
import { AiFillGithub } from 'react-icons/ai';
import { SiTwitter } from 'react-icons/si';
import { BiBuilding } from 'react-icons/bi';
import { GrLinkedinOption, GrMail } from 'react-icons/gr';
import { ImDribbble } from 'react-icons/im';
import { useSelector } from 'react-redux';
import config from '../config';
import { skeleton } from '../helpers/utils';

const Details = () => {
    const profile = useSelector(state => state.profile);
    const loading = useSelector(state => state.loading);

    const renderSkeleton = () => {
        let array = [];
        for (let index = 0; index < 4; index++) {
            array.push((
                <li key={index}>
                    <span>
                        {skeleton({width: 'w-6', height: 'h-4', className: 'mr-2'})}
                        {skeleton({width: 'w-32', height: 'h-4'})}
                    </span>
                </li>
            ))
        }

        return array;
    }

    return (
        <div className="card shadow-lg compact bg-base-100">
            <div className="card-body">
                <ul className="menu row-span-3 bg-base-100 text-base-content text-opacity-40">
                    {
                        loading ? renderSkeleton() : (
                            <>
                                {
                                    profile && profile.location && (
                                        <li>
                                            <span>
                                                <GoLocation className="mr-2"/>
                                                {profile.location}
                                            </span>
                                        </li>
                                    )
                                }
                                {
                                    profile && profile.company && (
                                        <li>
                                            <span>
                                                <BiBuilding className="mr-2"/>
                                                {profile.company}
                                            </span>
                                        </li>
                                    )
                                }
                                <li>
                                    <span>
                                        <AiFillGithub className="mr-2"/>
                                        <a 
                                            href={`https://github.com/${config.githubUsername}`} 
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-base-content-important"
                                        >
                                            {config.githubUsername}
                                        </a>
                                    </span>
                                </li>
                                {
                                    profile && profile.twitter && (
                                        <li>
                                            <span>
                                                <SiTwitter className="mr-2"/>
                                                <a 
                                                    href={`https://twitter.com/${profile.twitter}`} 
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-base-content-important"
                                                >
                                                    {profile.twitter}
                                                </a>
                                            </span>
                                        </li>
                                    )
                                }
                                {
                                    typeof config.linkedinUsername !== 'undefined' && config.linkedinUsername && (
                                        <li>
                                            <span>
                                                <GrLinkedinOption className="mr-2"/>
                                                <a 
                                                    href={`https://www.linkedin.com/in/${config.linkedinUsername}`} 
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-base-content-important"
                                                >
                                                    {config.linkedinUsername}
                                                </a>
                                            </span>
                                        </li>
                                    )
                                }
                                {
                                    typeof config.dribbbleUsername !== 'undefined' && config.dribbbleUsername && (
                                        <li>
                                            <span>
                                                <ImDribbble className="mr-2"/>
                                                <a 
                                                    href={`https://dribbble.com/${config.dribbbleUsername}`} 
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-base-content-important"
                                                >
                                                    {config.dribbbleUsername}
                                                </a>
                                            </span>
                                        </li>
                                    )
                                }
                                {
                                    typeof config.email !== 'undefined' && config.email && (
                                        <li>
                                            <span>
                                                <GrMail className="mr-2"/>
                                                <a 
                                                    href={`mailto:${config.email}`} 
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-base-content-important"
                                                >
                                                    {config.email}
                                                </a>
                                            </span>
                                        </li>
                                    )
                                }
                            </>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Details;