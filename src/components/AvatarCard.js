import { Image } from "antd";
import { useSelector } from "react-redux";
import { fallbackImage } from "../helpers/utils";

const imageHeight = 300;

const AvatarCard = () => {
    const profile = useSelector(state => state.profile);
    const loading = useSelector(state => state.loading);

    return (
        <div className="card shadow-lg compact bg-base-100">
            <figure>
                {
                    loading ? (
                        <div className="bg-base-300 w-full animate-pulse" style={{height: imageHeight}}/>
                    ) : (
                        <Image
                            className="object-cover"
                            src={profile.avatar ? profile.avatar : fallbackImage}
                            fallback={fallbackImage}
                            alt={profile.name}
                            preview={false}
                            width={'100%'}
                            height={imageHeight}
                            placeholder={
                                <div className="bg-base-300 w-full animate-pulse" style={{height: imageHeight}}/>
                            }
                        />
                    )
                }
            </figure>
            <div className="flex-row items-center space-x-4 card-body">
                <div>
                    <h2 className="card-title">
                        {
                            loading ? (
                                <div className="bg-base-300 w-3/6 h-8 animate-pulse rounded-full" />
                            ) : profile.name
                        }
                    </h2>
                    <p className="text-base-content text-opacity-40 text-justify">
                        {
                            loading ? (
                                <div className="bg-base-300 w-48 h-4 animate-pulse rounded-full" />
                            ) : profile.bio
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AvatarCard;