import { createSlice } from '@reduxjs/toolkit';

const initialState = true;

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: initialState,
    reducers: {
        setLoading: (state, action) => {
            state = action.payload;

            return state;
        }
    }
})

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;