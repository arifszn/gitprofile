import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../store/slices/themeSlice';
import config from '../config';
import { skeleton } from '../helpers/utils';

const ThemeChanger = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);
    const loading = useSelector(state => state.loading);

    const handleChange = (e) => {
        dispatch(setTheme(e.target.value));
    }
    
    return (
        <div className="card shadow-lg compact side bg-base-100">
            <div className="flex-row items-center space-x-4 card-body">
                <div className="flex-1">
                    <div className="section-title">
                        <h5 className="card-title">
                            {loading ? skeleton({width: 'w-20', height: 'h-8'}) : 'Theme'}
                        </h5>
                    </div>
                    <span className="text-base-content text-opacity-40">{loading ? skeleton({width: 'w-24', height: 'h-4'}) : 'Change Theme'}</span>
                </div>
                <div className="flex-0">
                    {
                        loading ? skeleton({width: 'w-28', height: 'h-10'}) : (
                            <select class="select w-full max-w-xs opacity-50" value={theme} onChange={handleChange}>
                                {
                                    config.themeConfig.themes.map((item, index) => (
                                        <option className="capitalize text-base-content text-opacity-60" value={item}>{item === config.themeConfig.default ? 'Default' : item}</option>
                                    ))
                                }
                            </select>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ThemeChanger;