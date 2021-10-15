import { createStore } from "redux";
import rootReducer from ".";
import reducer from "./reducer";
import { persistStore,persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";


const persistConfig={
    key:"root",
    storage:AsyncStorage,
}

const persistedReducer=persistReducer(persistConfig,rootReducer)

const store = createStore(persistedReducer);

export const persistor = persistStore(store)

export default store;


 