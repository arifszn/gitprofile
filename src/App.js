import axios from "axios";
import { Fragment, memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AvatarCard from "./components/AvatarCard";
import ErrorPage from "./components/ErrorPage";
import ThemeChanger from "./components/ThemeChanger";
import config from "./config";
import moment from 'moment';
import { setLoading } from "./store/slices/loadingSlice";
import { setProfile } from "./store/slices/profileSlice";
import Details from "./components/Details";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Project from "./components/Project";
import { setRepo } from "./store/slices/repoSlice";
import Blog from "./components/Blog";

function App() {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const [error, setError] = useState(null);
    const [rateLimit, setRateLimit] = useState(null);

    useEffect(() => {
        if (theme) {
            document.documentElement.setAttribute('data-theme', theme);
        }
    }, [theme])

    useEffect(() => {
        loadData();
    }, [])

    const loadData = () => {
        axios.get(`https://api.github.com/users/${config.githubUsername}`)
            .then(response => {
                let data = response.data;

                let profileData = {
                    avatar: data.avatar_url,
                    name: data.name,
                    bio: data.bio,
                    location: data.location,
                    company: data.company,
                    twitter: data.twitter_username,
                }

                dispatch(setProfile(profileData));
            })
            .then(() => {
                loadRepo();
            })
            .catch((error) => {
                console.error('Error:', error);

                try {
                    setRateLimit({
                        remaining: error.response.headers['x-ratelimit-remaining'],
                        reset: moment(new Date(error.response.headers['x-ratelimit-reset'] * 1000)).fromNow(),
                    });

                    if (error.response.status === 403) {
                        setError(403);
                    } else if (error.response.status === 404) {
                        setError(404);
                    } else {
                        setError(500);
                    }
                } catch (error2) {
                    setError(500);
                }
            })
            .finally(() => {
                dispatch(setLoading(false));
            });
    }

    const loadRepo = () => {
        axios.get(`https://api.github.com/search/repositories?q=user:${config.githubUsername}+&s=stars&type=Repositories`)
            .then(response => {
                let data = response.data;

                dispatch(setRepo(data.items));
            })
            .catch((error) => {
                console.error('Error:', error);

                try {
                    setRateLimit({
                        remaining: error.response.headers['x-ratelimit-remaining'],
                        reset: moment(new Date(error.response.headers['x-ratelimit-reset'] * 1000)).fromNow(),
                    });


                } catch (error2) {
                    console.error('Error:', error2);
                }
            });
    }

    return (
        <Fragment>
            <div className="fade-in h-screen">

                {
                    error ? (
                        <ErrorPage
                            status={`${error}`}
                            title={(error === 404) ? 'The Github Username is Incorrect' : (
                                error === 403 ? 'Too Many Request.' : `${error}`
                            )}
                            subTitle={
                                (error === 404) ? (
                                    <p>
                                        Please provide correct github username in <code>src\config.js</code>
                                    </p>
                                ) : (
                                    error === 403 ? (
                                        <p>
                                            Oh no, you hit the{' '}
                                            <a
                                                href="https://developer.github.com/v3/rate_limit/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                rate limit
                                            </a>
                                            ! Try again later{rateLimit && ` ${rateLimit.reset}`}.
                                        </p>
                                    ) : `Something went wrong`
                                )
                            }
                        />
                    ) : (
                        <div className="p-4 lg:p-10 min-h-full bg-base-200">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
                                <div className="col-span-1">
                                    <div className="grid grid-cols-1 gap-6">
                                        {
                                            !config.themeConfig.disableSwitch && (
                                                <ThemeChanger />
                                            )
                                        }
                                        <AvatarCard />
                                        <Details />
                                        <Skill />
                                        <Experience />
                                        <Education />
                                    </div>
                                </div>
                                <div className="lg:col-span-2 col-span-1">
                                    <div className="grid grid-cols-1 gap-6">
                                        <Project />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </Fragment>
    );
}

export default memo(App);
