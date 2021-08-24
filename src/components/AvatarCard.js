import { useSelector } from "react-redux";
import { fallbackImage, skeleton } from "../helpers/utils";
import LazyImage from "./LazyImage";

const imageHeight = 300;

const AvatarCard = () => {
    const profile = useSelector(state => state.profile);
    const loading = useSelector(state => state.loading);

    return (
        <div className="card shadow-lg compact bg-base-100">
            <div className="grid place-items-center py-8">
                <div className="avatar">
                    <div className={`mb-8 rounded-full w-32 h-32${!loading ? ' ring ring-primary ring-offset-base-100 ring-offset-2' : ''}`}>
                        {
                            loading ? (
                                skeleton({
                                    width: 'w-full',
                                    height: 'h-full',
                                    shape: '',
                                })
                            ) : (
                                <LazyImage
                                    className="opacity-90"
                                    src={profile.avatar ? profile.avatar : fallbackImage}
                                    alt={profile.name}
                                    height={imageHeight}
                                    placeholder={
                                        skeleton({
                                            width: 'w-full',
                                            height: 'h-full',
                                            shape: '',
                                        })
                                    }
                                />
                            )
                        }
                    </div>
                </div>
                <div className="text-center mx-8">
                    <span className="opacity-60">
                        <h5 className="card-title font-extrabold">
                            {
                            loading ? (
                                skeleton({ width: 'w-48', height: 'h-8' })
                            ) : <span className="opacity-60">{profile.name}</span>
                        }
                        </h5>
                    </span>
                    <div className="mt-3 text-sm text-base-content text-opacity-60">
                        {
                            loading ? (
                                skeleton({ width: 'w-48', height: 'h-4' })
                            ) : profile.bio
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvatarCard;