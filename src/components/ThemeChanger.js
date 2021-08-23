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
        <div className="card overflow-visible shadow-lg compact bg-base-100">
            <div className="flex-row items-center space-x-4 card-body mx-4">
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
                                    <svg class="inline-block w-5 h-5 stroke-current md:mr-2" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 11.99-36.6.1-47.7z"></path><circle cx="144" cy="208" r="32"></circle><circle cx="152" cy="311" r="32"></circle><circle cx="224" cy="144" r="32"></circle><circle cx="256" cy="367" r="48"></circle><circle cx="328" cy="144" r="32"></circle></svg>
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
                                                        <span className="opacity-60 capitalize flex items-center">
                                                            <svg className="inline-block w-4 h-4 stroke-current mr-2" stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.20348 2.00378C9.46407 2.00378 10.5067 3.10742 10.6786 4.54241L19.1622 13.0259L11.384 20.8041C10.2124 21.9757 8.31291 21.9757 7.14134 20.8041L2.8987 16.5615C1.72713 15.3899 1.72713 13.4904 2.8987 12.3188L5.70348 9.51404V4.96099C5.70348 3.32777 6.82277 2.00378 8.20348 2.00378ZM8.70348 4.96099V6.51404L7.70348 7.51404V4.96099C7.70348 4.63435 7.92734 4.36955 8.20348 4.36955C8.47963 4.36955 8.70348 4.63435 8.70348 4.96099ZM8.70348 10.8754V9.34247L4.31291 13.733C3.92239 14.1236 3.92239 14.7567 4.31291 15.1473L8.55555 19.3899C8.94608 19.7804 9.57924 19.7804 9.96977 19.3899L16.3337 13.0259L10.7035 7.39569V10.8754C10.7035 10.9184 10.7027 10.9612 10.7012 11.0038H8.69168C8.69941 10.9625 8.70348 10.9195 8.70348 10.8754Z" fill="currentColor"></path><path d="M16.8586 16.8749C15.687 18.0465 15.687 19.946 16.8586 21.1175C18.0302 22.2891 19.9297 22.2891 21.1013 21.1175C22.2728 19.946 22.2728 18.0465 21.1013 16.8749L18.9799 14.7536L16.8586 16.8749Z" fill="currentColor"></path></svg>
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

export default memo(ThemeChanger);