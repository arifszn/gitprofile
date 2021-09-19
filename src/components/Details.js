import { MdLocationOn, MdMail } from 'react-icons/md';
import { AiFillGithub, AiFillMediumSquare } from 'react-icons/ai';
import { SiTwitter } from 'react-icons/si';
import { GrLinkedinOption } from 'react-icons/gr';
import { CgDribbble } from 'react-icons/cg';
import { RiPhoneFill } from 'react-icons/ri';
import { FaBehanceSquare, FaBuilding, FaDev, FaFacebook, FaGlobe } from 'react-icons/fa';
import config from '../config';
import { skeleton } from '../helpers/utils';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { LoadingContext } from '../contexts/LoadingContext';

const Details = (props) => {
    const [loading] = useContext(LoadingContext);

    const renderSkeleton = () => {
        let array = [];
        for (let index = 0; index < 4; index++) {
            array.push((
                <li key={index}>
                    <span>
                        {skeleton({ width: 'w-6', height: 'h-4', className: 'mr-2' })}
                        {skeleton({ width: 'w-32', height: 'h-4' })}
                    </span>
                </li>
            ))
        }

        return array;
    }

    return (
        <div className="card shadow-lg compact bg-base-100">
            <div className="card-body">
                <ul className="menu row-span-3 bg-base-100 text-base-content text-opacity-60">
                    {
                        (loading || !props.profile) ? renderSkeleton() : (
                            <>
                                {
                                    props.profile.location && (
                                        <li>
                                            <span>
                                                <div>
                                                    <MdLocationOn className="mr-2"/>
                                                </div>
                                                <div>
                                                    {props.profile.location}
                                                </div>
                                            </span>
                                        </li>
                                    )
                                }
                                {
                                    props.profile.company && (
                                        <li>
                                            <span>
                                                <div>
                                                    <FaBuilding className="mr-2"/>
                                                </div>
                                                <div>
                                                    {props.profile.company}
                                                </div>
                                            </span>
                                        </li>
                                    )
                                }
                                <li>
                                    <span>
                                        <div>
                                            <AiFillGithub className="mr-2"/>
                                        </div>
                                        <div>
                                            <a
                                                href={`https://github.com/${config.github.username}`}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-base-content-important"
                                            >
                                                {config.github.username}
                                            </a>
                                        </div>
                                    </span>
                                </li>
                                {
                                    typeof config.social.linkedin !== 'undefined' && config.social.linkedin && (
                                        <li>
                                            <span>
                                                <div>
                                                    <GrLinkedinOption className="mr-2"/>
                                                </div>
                                                <div>
                                                    <a
                                                        href={`https://www.linkedin.com/in/${config.social.linkedin}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-base-content-important"
                                                    >
                                                        {config.social.linkedin}
                                                    </a>
                                                </div>
                                            </span>
                                        </li>
                                    )
                                }
                                {
                                    typeof config.social.twitter !== 'undefined' && config.social.twitter && (
                                        <li>
                                            <span>
                                                <div>
                                                    <SiTwitter className="mr-2"/>
                                                </div>
                                                <div>
                                                    <a
                                                        href={`https://twitter.com/${config.social.twitter}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-base-content-important"
                                                    >
                                                        {config.social.twitter}
                                                    </a>
                                                </div>
                                            </span>
                                        </li>
                                    )
                                }
                                {
                                    typeof config.social.dribbble !== 'undefined' && config.social.dribbble && (
                                        <li>
                                            <span>
                                                <div>
                                                    <CgDribbble className="mr-2"/>
                                                </div>
                                                <div>
                                                    <a
                                                        href={`https://dribbble.com/${config.social.dribbble}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-base-content-important"
                                                    >
                                                        {config.social.dribbble}
                                                    </a>
                                                </div>
                                            </span>
                                        </li>
                                    )
                                }
                                {
                                    typeof config.social.behance !== 'undefined' && config.social.behance && (
                                        <li>
                                            <span>
                                                <div>
                                                    <FaBehanceSquare className="mr-2"/>
                                                </div>
                                                <div>
                                                    <a
                                                        href={`https://www.behance.net/${config.social.behance}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-base-content-important"
                                                    >
                                                        {config.social.behance}
                                                    </a>
                                                </div>
                                            </span>
                                        </li>
                                    )
                                }
                                {
                                    typeof config.social.facebook !== 'undefined' && config.social.facebook && (
                                        <li>
                                            <span>
                                                <div>
                                                    <FaFacebook className="mr-2"/>
                                                </div>
                                                <div>
                                                    <a
                                                        href={`https://www.facebook.com/${config.social.facebook}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-base-content-important"
                                                    >
                                                        {config.social.facebook}
                                                    </a>
                                                </div>
                                            </span>
                                        </li>
                                    )
                                }
                                {
                                    typeof config.social.medium !== 'undefined' && config.social.medium && (
                                        <li>
                                            <span>
                                                <div>
                                                    <AiFillMediumSquare className="mr-2"/>
                                                </div>
                                                <div>
                                                    <a
                                                        href={`https://medium.com/@${config.social.medium}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-base-content-important"
                                                    >
                                                        {config.social.medium}
                                                    </a>
                                                </div>
                                            </span>
                                        </li>
                                    )
                                }
                                {
                                    typeof config.social.devto !== 'undefined' && config.social.devto && (
                                        <li>
                                            <span>
                                                <div>
                                                    <FaDev className="mr-2"/>
                                                </div>
                                                <div>
                                                    <a
                                                        href={`https://dev.to/${config.social.devto}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-base-content-important"
                                                    >
                                                        {config.social.devto}
                                                    </a>
                                                </div>
                                            </span>
                                        </li>
                                    )
                                }
                                {
                                    typeof config.social.website !== 'undefined' && config.social.website && (
                                        <li>
                                            <span>
                                                <div>
                                                    <FaGlobe className="mr-2"/>
                                                </div>
                                                <div>
                                                    <a
                                                        href={`${config.social.website}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-base-content-important"
                                                    >
                                                        {config.social.website}
                                                    </a>
                                                </div>
                                            </span>
                                        </li>
                                    )
                                }
                                {
                                    typeof config.social.phone !== 'undefined' && config.social.phone && (
                                        <li>
                                            <span>
                                                <div>
                                                    <RiPhoneFill className="mr-2"/>
                                                </div>
                                                <div>
                                                    <a
                                                        href={`tel:${config.social.phone}`}
                                                        rel="noreferrer"
                                                        className="text-base-content-important"
                                                    >
                                                        {config.social.phone}
                                                    </a>
                                                </div>
                                            </span>
                                        </li>
                                    )
                                }
                                {
                                    typeof config.social.email !== 'undefined' && config.social.email && (
                                        <li>
                                            <span>
                                                <div>
                                                    <MdMail className="mr-2"/>
                                                </div>
                                                <div>
                                                    <a
                                                        href={`mailto:${config.social.email}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-base-content-important"
                                                    >
                                                        {config.social.email}
                                                    </a>
                                                </div>
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

Details.propTypes = {
    profile: PropTypes.object
}

export default Details;