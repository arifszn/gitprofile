import { skeleton } from '../../utils';
import { Spotify } from 'react-spotify-embed';

interface MusicProps {
  loading: boolean;
  url: string;
}

const Music = ({ loading, url }: MusicProps) => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ width: 'w-32', height: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Tune Stack</span>
            )}
          </h5>
        </div>
        <div className="p-3 flow-root">
          <div className="-m-1 flex flex-wrap justify-center">
            {loading ? (
              skeleton({ width: 'w-300', height: 'h-380' })
            ) : (
              <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-opacity-90 rounded-full">
                <Spotify style={{ borderRadius: '.75rem' }} link={url} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
