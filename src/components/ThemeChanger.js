import { Fragment } from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../store/slices/themeSlice';
import config from '../config';

const { Option } = Select;

const ThemeChanger = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);
    const loading = useSelector(state => state.loading);

    const handleChange = (value) => {
        dispatch(setTheme(value));
    }
    
    return (
        <div className="card shadow-lg compact side bg-base-100">
            <div className="flex-row items-center space-x-4 card-body">
                <div className="flex-1">
                    <h2 className="card-title">{loading ? <div className="bg-base-300 w-20 h-8 animate-pulse rounded-full" /> : 'Theme'}</h2>
                    <p className="text-base-content text-opacity-40">{loading ? <div className="bg-base-300 w-24 h-4 animate-pulse rounded-full" /> : 'Change Theme'}</p>
                </div>
                <div className="flex-0">
                    {
                        loading ? <div className="bg-base-300 w-28 h-8 animate-pulse rounded-full" /> : (
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange} bordered={false} value={theme}>
                                {
                                    config.themeConfig.themes.map((item, index) => (
                                        <Option key={index} value={item}>
                                            <span className="capitalize text-base-content text-opacity-60">{item === config.themeConfig.default ? 'Default' : item}</span>
                                        </Option>
                                    ))
                                }
                            </Select>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ThemeChanger;