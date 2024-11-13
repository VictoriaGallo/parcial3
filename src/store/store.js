import { configureStore } from '@reduxjs/toolkit';
import challengeReducer from './slices/challengeSlice';
import { pokemonApi } from './slices/pokemonApi';

export const store = configureStore({
  reducer: {
    challenge: challengeReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});
