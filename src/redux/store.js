import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userSlice';
import nftReducer from './nft/nftSlice';

const persistUserConfig = {
    key: 'users',
    storage,
    whitelist: ['token']
};

const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

export const store = configureStore({
    reducer: {
        users: persistedUserReducer,
        nfts: nftReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);