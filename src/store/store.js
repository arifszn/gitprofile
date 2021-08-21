import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileSlice from './slices/profileSlice';

const rootReducer = combineReducers({
    profile: profileSlice
})

export const store = configureStore({
  reducer: rootReducer
})