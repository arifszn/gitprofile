import { MdLocationOn, MdMail } from 'react-icons/md';
import { AiFillGithub, AiFillMediumSquare } from 'react-icons/ai';
import { SiTwitter } from 'react-icons/si';
import { GrLinkedinOption } from 'react-icons/gr';
import { CgDribbble } from 'react-icons/cg';
import { RiPhoneFill } from 'react-icons/ri';
import {
  FaBehanceSquare,
  FaBuilding,
  FaDev,
  FaFacebook,
  FaGlobe,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';
import config from '../../ezprofile.config';

const ListItem = ({ icon, title, value, link }) => {
  return (
    <div class="flex justify-start py-2 px-1 items-center">
      <span class="w-2 m-2">{icon}</span>
      <div class="flex-grow font-medium px-2">{title}</div>
      <div class="text-sm font-normal text-right mr-2 ml-3">
        <a href={link} target="_blank" rel="noreferrer">
          {value}
        </a>
      </div>
    </div>
  );
};

const Details = ({ profile, loading }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 4; index++) {
      array.push(
        <li key={index}>
          <span>
            {skeleton({ width: 'w-6', height: 'h-4', className: 'mr-2' })}
            {skeleton({ width: 'w-32', height: 'h-4' })}
          </span>
        </li>
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        {loading || !profile ? (
          renderSkeleton()
        ) : (
          <div className="bg-base-100 text-base-content text-opacity-60">
            {profile.location && (
              <ListItem
                icon={<MdLocationOn className="mr-2" />}
                title="Based on"
                value={profile.location}
              />
            )}
            {profile.company && (
              <ListItem
                icon={<FaBuilding className="mr-2" />}
                title="Company"
                value={profile.company}
              />
            )}
            <ListItem
              icon={<AiFillGithub className="mr-2" />}
              title="GitHub"
              value={config.github.username}
              link={`https://github.com/${config.github.username}`}
            />
            {typeof config.social.twitter !== 'undefined' &&
              config.social.twitter && (
                <ListItem
                  icon={<SiTwitter className="mr-2" />}
                  title="Twitter"
                  value={config.social.twitter}
                  link={`https://twitter.com/${config.social.twitter}`}
                />
              )}
            {typeof config.social.linkedin !== 'undefined' &&
              config.social.linkedin && (
                <ListItem
                  icon={<GrLinkedinOption className="mr-2" />}
                  title="LinkedIn"
                  value={config.social.linkedin}
                  link={`https://www.linkedin.com/in/${config.social.linkedin}`}
                />
              )}
            {typeof config.social.dribbble !== 'undefined' &&
              config.social.dribbble && (
                <ListItem
                  icon={<CgDribbble className="mr-2" />}
                  title="Dribbble"
                  value={config.social.dribbble}
                  link={`https://dribbble.com/${config.social.dribbble}`}
                />
              )}
            {typeof config.social.behance !== 'undefined' &&
              config.social.behance && (
                <ListItem
                  icon={<FaBehanceSquare className="mr-2" />}
                  title="Behance"
                  value={config.social.behance}
                  link={`https://www.behance.net/${config.social.behance}`}
                />
              )}
          </div>
        )}
        {/* <ul className="menu bg-base-100 text-base-content text-opacity-60">
          {loading || !profile ? (
            renderSkeleton()
          ) : (
            <>
              
              
              
              
              
              {typeof config.social.behance !== 'undefined' &&
                config.social.behance && (
                  <li>
                    <span>
                      <div>
                        <FaBehanceSquare className="mr-2" />
                      </div>
                      <div>
                        <a
                          href={``}
                          target="_blank"
                          rel="noreferrer"
                          className="text-base-content-important"
                        >
                          {config.social.behance}
                        </a>
                      </div>
                    </span>
                  </li>
                )}
              {typeof config.social.facebook !== 'undefined' &&
                config.social.facebook && (
                  <li>
                    <span>
                      <div>
                        <FaFacebook className="mr-2" />
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
                )}
              {typeof config.social.medium !== 'undefined' &&
                config.social.medium && (
                  <li>
                    <span>
                      <div>
                        <AiFillMediumSquare className="mr-2" />
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
                )}
              {typeof config.social.devto !== 'undefined' &&
                config.social.devto && (
                  <li>
                    <span>
                      <div>
                        <FaDev className="mr-2" />
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
                )}
              {typeof config.social.website !== 'undefined' &&
                config.social.website && (
                  <li>
                    <span>
                      <div>
                        <FaGlobe className="mr-2" />
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
                )}
              {typeof config.social.phone !== 'undefined' &&
                config.social.phone && (
                  <li>
                    <span>
                      <div>
                        <RiPhoneFill className="mr-2" />
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
                )}
              {typeof config.social.email !== 'undefined' &&
                config.social.email && (
                  <li>
                    <span>
                      <div>
                        <MdMail className="mr-2" />
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
                )}
            </>
          )}
        </ul> */}

        {/* <div class="bg-base-100 text-base-content text-opacity-60">
          <div class="flex justify-start px-2 py-2 my-2 items-center">
            <span class="w-2 m-2 rounded-full">
              <MdLocationOn className="mr-2" />
            </span>
            <div class="flex-grow font-medium px-2">Based on</div>
            <div class="text-sm font-normal text-gray-500 tracking-wide">
              London
            </div>
          </div>
          <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
            <span class="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
            <div class="flex-grow font-medium px-2">Taylor Otwell</div>
            <div class="text-sm font-normal text-gray-500 tracking-wide">
              Member
            </div>
          </div>
          <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
            <span class="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
            <div class="flex-grow font-medium px-2">Adam Wathan</div>
            <div class="text-sm font-normal text-gray-500 tracking-wide">
              Member
            </div>
          </div>
          <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
            <span class="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
            <div class="flex-grow font-medium px-2">
              Duke Street Studio Inc.
            </div>
            <div class="text-sm font-normal text-gray-500 tracking-wide">
              Team
            </div>
          </div>
          <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
            <span class="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
            <div class="flex-grow font-medium px-2">Jeffrey Wey</div>
            <div class="text-sm font-normal text-gray-500 tracking-wide">
              Member
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

Details.propTypes = {
  profile: PropTypes.object,
};

export default Details;
