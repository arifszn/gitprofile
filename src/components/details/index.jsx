import { MdLocationOn, MdMail } from 'react-icons/md';
import { AiFillGithub, AiFillMediumSquare } from 'react-icons/ai';
import { SiTwitter } from 'react-icons/si';
import { GrLinkedinOption } from 'react-icons/gr';
import { CgDribbble } from 'react-icons/cg';
import { RiPhoneFill } from 'react-icons/ri';
import { Fragment } from 'react';
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

const ListItem = ({ icon, title, value, link, skeleton = false }) => {
  return (
    <div class="flex justify-start py-2 px-1 items-center">
      <span class="w-2 m-2">{icon}</span>
      <div class="flex-grow font-medium px-2">{title}</div>
      <div
        class={`${
          skeleton ? 'flex-grow' : ''
        } text-sm font-normal text-right mr-2 ml-3 ${link ? 'truncate' : ''}`}
      >
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          style={{
            wordBreak: 'break-word',
          }}
        >
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
        <ListItem
          skeleton={true}
          icon={skeleton({ width: 'w-4', height: 'h-4' })}
          title={skeleton({ width: 'w-24', height: 'h-4' })}
          value={skeleton({ width: 'w-full', height: 'h-4' })}
        />
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="text-base-content text-opacity-60">
          {loading || !profile ? (
            renderSkeleton()
          ) : (
            <Fragment>
              {profile.location && (
                <ListItem
                  icon={<MdLocationOn className="mr-2" />}
                  title="Based on:"
                  value={profile.location}
                />
              )}
              {profile.company && (
                <ListItem
                  icon={<FaBuilding className="mr-2" />}
                  title="Company:"
                  value={profile.company}
                />
              )}
              <ListItem
                icon={<AiFillGithub className="mr-2" />}
                title="GitHub:"
                value={config.github.username}
                link={`https://github.com/${config.github.username}`}
              />
              {typeof config.social.twitter !== 'undefined' &&
                config.social.twitter && (
                  <ListItem
                    icon={<SiTwitter className="mr-2" />}
                    title="Twitter:"
                    value={config.social.twitter}
                    link={`https://twitter.com/${config.social.twitter}`}
                  />
                )}
              {typeof config.social.linkedin !== 'undefined' &&
                config.social.linkedin && (
                  <ListItem
                    icon={<GrLinkedinOption className="mr-2" />}
                    title="LinkedIn:"
                    value={config.social.linkedin}
                    link={`https://www.linkedin.com/in/${config.social.linkedin}`}
                  />
                )}
              {typeof config.social.dribbble !== 'undefined' &&
                config.social.dribbble && (
                  <ListItem
                    icon={<CgDribbble className="mr-2" />}
                    title="Dribbble:"
                    value={config.social.dribbble}
                    link={`https://dribbble.com/${config.social.dribbble}`}
                  />
                )}
              {typeof config.social.behance !== 'undefined' &&
                config.social.behance && (
                  <ListItem
                    icon={<FaBehanceSquare className="mr-2" />}
                    title="Behance:"
                    value={config.social.behance}
                    link={`https://www.behance.net/${config.social.behance}`}
                  />
                )}
              {typeof config.social.facebook !== 'undefined' &&
                config.social.facebook && (
                  <ListItem
                    icon={<FaFacebook className="mr-2" />}
                    title="Facebook:"
                    value={config.social.facebook}
                    link={`https://www.facebook.com/${config.social.facebook}`}
                  />
                )}
              {typeof config.social.medium !== 'undefined' &&
                config.social.medium && (
                  <ListItem
                    icon={<AiFillMediumSquare className="mr-2" />}
                    title="Medium:"
                    value={config.social.medium}
                    link={`https://medium.com/@${config.social.medium}`}
                  />
                )}
              {typeof config.social.devto !== 'undefined' &&
                config.social.devto && (
                  <ListItem
                    icon={<FaDev className="mr-2" />}
                    title="Dev:"
                    value={config.social.devto}
                    link={`https://dev.to/${config.social.devto}`}
                  />
                )}
              {typeof config.social.website !== 'undefined' &&
                config.social.website && (
                  <ListItem
                    icon={<FaGlobe className="mr-2" />}
                    title="Website:"
                    value={config.social.website}
                    link={config.social.website}
                  />
                )}
              {typeof config.social.phone !== 'undefined' &&
                config.social.phone && (
                  <ListItem
                    icon={<RiPhoneFill className="mr-2" />}
                    title="Phone:"
                    value={config.social.phone}
                    link={`tel:${config.social.phone}`}
                  />
                )}
              {typeof config.social.email !== 'undefined' &&
                config.social.email && (
                  <ListItem
                    icon={<MdMail className="mr-2" />}
                    title="Email:"
                    value={config.social.email}
                    link={`mailto:${config.social.email}`}
                  />
                )}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  profile: PropTypes.object,
};

export default Details;
