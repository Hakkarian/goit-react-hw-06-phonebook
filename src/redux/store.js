
import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from './root-reducer';

import persistStore from 'redux-persist/es/persistStore';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE]
    }})
})

export const persistor = persistStore(store)



// const createStore = (reducer, initialStore) => {
//     const startStore = reducer(initialStore);
//     return startStore;
// }