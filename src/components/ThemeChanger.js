import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../store/slices/themeSlice';
import config from '../config';
import { skeleton } from '../helpers/utils';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { memo } from 'react';

const ThemeChanger = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);
    const loading = useSelector(state => state.loading);

    const changeTheme = (e, selectedTheme) => {
        e.preventDefault();
        dispatch(setTheme(selectedTheme));
    }

    return (
        <div className="card overflow-visible shadow-lg compact side bg-base-100">
            <div className="flex-row items-center space-x-4 card-body p-3">
                <div className="flex-1">
                    <div className="section-title">
                        <h5 className="card-title">
                            {loading ? skeleton({ width: 'w-20', height: 'h-8' }) : 'Theme'}
                        </h5>
                    </div>
                    <span className="text-base-content text-opacity-40 capitalize">{loading ? skeleton({ width: 'w-16', height: 'h-4' }) : (theme === config.themeConfig.default ? 'Default' : theme)}</span>
                </div>
                <div className="flex-0">
                    {
                        loading ? skeleton({ width: 'w-14 md:w-28', height: 'h-10' }) : (
                            <div title="Change Theme" className="dropdown dropdown-end">
                                <div tabIndex={0} className="btn btn-ghost m-1 normal-case opacity-50">
                                    <span className="hidden md:inline">
                                        Change Theme
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" className="inline-block w-4 h-4 ml-1 fill-current">
                                        <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
                                    </svg>
                                </div>
                                <div className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content h-96 w-52 rounded-b-box bg-base-200 text-base-content">
                                    <ul className="p-2 md:p-4 menu compact">
                                        {
                                            config.themeConfig.themes.map((item, index) => (
                                                <li key={index}>
                                                    <a 
                                                        href="#" 
                                                        onClick={(e) => changeTheme(e, item)} 
                                                        className={`${theme === item ? 'active' : ''}`}
                                                    >
                                                        <span className="text-opacity-60 capitalize flex items-center">
                                                            <IoColorPaletteOutline className="inline-block w-4 h-4 stroke-current mr-2"/> {item === config.themeConfig.default ? 'Default' : item}
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

export default memo(ThemeChanger);