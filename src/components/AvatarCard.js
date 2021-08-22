import { useSelector } from "react-redux";
import { fallbackImage, skeleton } from "../helpers/utils";
import LazyImage from "./LazyImage";

const imageHeight = 300;

const AvatarCard = () => {
    const profile = useSelector(state => state.profile);
    const loading = useSelector(state => state.loading);

    return (
        <div className="card shadow-lg compact bg-base-100">
            <figure>
                {
                    loading ? (
                        skeleton({
                            width: 'w-full',
                            shape: '',
                            style: {
                                height: imageHeight
                            }
                        })
                    ) : (
                        <LazyImage
                            className="object-cover w-full opacity-90"
                            src={profile.avatar ? profile.avatar : fallbackImage}
                            alt={profile.name}
                            style={{height: imageHeight}}
                            height={imageHeight}
                            placeholder={skeleton({
                                width: 'w-full',
                                shape: '',
                                style: {
                                    height: imageHeight
                                }
                            })}
                        />
                    )
                }
            </figure>
            <div className="flex-row items-center space-x-4 card-body">
                <div>
                    <div className="section-title">
                        <h5 className="card-title">
                            {
                                loading ? (
                                    skeleton({width: 'w-3/6', height: 'h-8'})
                                ) : profile.name
                            }
                        </h5>
                    </div>
                    <span className="text-base-content text-opacity-40 text-justify">
                        {
                            loading ? (
                                skeleton({width: 'w-48', height: 'h-4'})
                            ) : profile.bio
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AvatarCard;