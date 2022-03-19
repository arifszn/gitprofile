import PropTypes from 'prop-types';
import { useContext } from 'react';
import { LoadingContext } from '../../contexts/LoadingContext';
import { skeleton } from '../../helpers/utils';
import LazyImage from '../lazy-image';

const AvatarCard = (props) => {
  const { loading } = useContext(LoadingContext);

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="grid place-items-center py-8">
        {loading || !props.profile ? (
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32">
              {skeleton({
                width: 'w-full',
                height: 'h-full',
                shape: '',
              })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32 ring ring-primary ring-offset-base-100 ring-offset-2">
              {
                <LazyImage
                  src={
                    props.profile.avatar ? props.profile.avatar : fallbackImage
                  }
                  alt={props.profile.name}
                  placeholder={skeleton({
                    width: 'w-full',
                    height: 'h-full',
                    shape: '',
                  })}
                />
              }
            </div>
          </div>
        )}
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            {loading || !props.profile ? (
              skeleton({ width: 'w-48', height: 'h-8' })
            ) : (
              <span className="opacity-70">{props.profile.name}</span>
            )}
          </h5>
          <div className="mt-3 text-base-content text-opacity-60">
            {loading || !props.profile
              ? skeleton({ width: 'w-48', height: 'h-5' })
              : props.profile.bio}
          </div>
        </div>
      </div>
    </div>
  );
};

AvatarCard.propTypes = {
  profile: PropTypes.object,
};

export default AvatarCard;
