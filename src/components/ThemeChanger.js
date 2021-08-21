import { Fragment } from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../store/slices/themeSlice';
import config from '../config';

const { Option } = Select;

const ThemeChanger = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const handleChange = (value) => {
        dispatch(setTheme(value));
    }
    
    return (
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange} bordered={false} value={theme}>
            {
                config.themes.map((item, index) => (
                    <Option key={index} value={item}>
                        <span className="capitalize text-base-content text-opacity-60">{item === config.defaultTheme ? 'Default' : item}</span>
                    </Option>
                ))
            }
        </Select>
    )
}

export default ThemeChanger;