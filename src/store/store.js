import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileSlice from './slices/profileSlice';
import themeSlice from './slices/themeSlice';

const rootReducer = combineReducers({
    profile: profileSlice,
    theme: themeSlice,
})

export const store = configureStore({
  reducer: rootReducer
})