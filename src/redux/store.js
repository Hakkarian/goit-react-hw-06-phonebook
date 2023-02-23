
import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from './root-reducer';

import persistStore from 'redux-persist/es/persistStore';


export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)



// const createStore = (reducer, initialStore) => {
//     const startStore = reducer(initialStore);
//     return startStore;
// }