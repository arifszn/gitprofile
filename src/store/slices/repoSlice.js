import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

export const repoSlice = createSlice({
    name: 'repo',
    initialState: initialState,
    reducers: {
        setRepo: (state, action) => {
            state = action.payload;

            return state;
        }
    }
})

export const { setRepo } = repoSlice.actions;

export default repoSlice.reducer;