
import rootReducer from './tasks/cont-slice';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


// export const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filtersReducer
// })

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ["filter"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;