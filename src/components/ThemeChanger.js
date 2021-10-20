import config from '../config';
import { skeleton } from '../helpers/utils';
import { AiOutlineControl } from 'react-icons/ai';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LoadingContext } from '../contexts/LoadingContext';

const ThemeChanger = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    const [loading] = useContext(LoadingContext);

    const changeTheme = (e, selectedTheme) => {
        e.preventDefault();
        document.querySelector('html').setAttribute('data-theme', selectedTheme);
        localStorage.setItem('ezprofile-theme', selectedTheme);

        setTheme(selectedTheme);
    }

    return (
        <div className="card overflow-visible shadow-lg compact bg-base-100">
            <div className="flex-row items-center space-x-4 flex pl-6 pr-2 py-4">
                <div className="flex-1">
                    <h5 className="card-title">
                        {
                            loading ? skeleton({ width: 'w-20', height: 'h-8' }) : (
                                <span className="opacity-70">Theme</span>
                            )
                        }
                    </h5>
                    <span className="text-base-content text-opacity-40 capitalize text-sm">
                        {
                            loading ? skeleton({ width: 'w-16', height: 'h-5' }) : (theme === config.themeConfig.default ? 'Default' : theme)
                        }
                    </span>
                </div>
                <div className="flex-0">
                    {
                        loading ? skeleton({ width: 'w-14 md:w-28', height: 'h-10', className: 'mr-6' }) : (
                            <div title="Change Theme" className="dropdown dropdown-end">
                                <div tabIndex={0} className="btn btn-ghost m-1 normal-case opacity-50">
                                    <AiOutlineControl className="inline-block w-5 h-5 stroke-current md:mr-2"/>
                                    <span className="hidden md:inline">
                                        Change Theme
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" className="inline-block w-4 h-4 ml-1 fill-current">
                                        <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
                                    </svg>
                                </div>
                                <div tabIndex={0} className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content h-96 w-52 rounded-b-box bg-base-200 text-base-content">
                                    <ul className="p-4 menu compact">
                                        {
                                            [config.themeConfig.default, ...config.themeConfig.themes.filter(item => item !== config.themeConfig.default)].map((item, index) => (
                                                <li key={index}>
                                                    {/* eslint-disable-next-line */}
                                                    <a
                                                        onClick={(e) => changeTheme(e, item)}
                                                        className={`${theme === item ? 'active' : ''}`}
                                                    >
                                                        <span className="opacity-60 capitalize">
                                                            {item === config.themeConfig.default ? 'Default' : item}
                                                        </span>
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ThemeChanger;