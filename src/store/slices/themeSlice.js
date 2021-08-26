import { createSlice } from '@reduxjs/toolkit';
import { getThemeValue } from '../../helpers/utils';

const initialState = getThemeValue();

export const themeSlice = createSlice({
    name: 'theme',
    initialState: initialState,
    reducers: {
        setTheme: (state, action) => {
            state = action.payload;

            document.documentElement.setAttribute('data-theme', state);
            localStorage.setItem('ezprofileTheme', state);

            return state;
        }
    }
})

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;