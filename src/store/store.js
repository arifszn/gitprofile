import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loadingSlice from './slices/loadingSlice';
import profileSlice from './slices/profileSlice';
import repoSlice from './slices/repoSlice';
import themeSlice from './slices/themeSlice';

const rootReducer = combineReducers({
    profile: profileSlice,
    theme: themeSlice,
    loading: loadingSlice,
    repo: repoSlice,
})

export const store = configureStore({
  reducer: rootReducer
})