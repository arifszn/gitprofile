import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

export const profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        setProfile: (state, action) => {
            state = action.payload;

            return state;
        }
    }
})

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;