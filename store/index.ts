import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import card from "./cardSlice";
const reducers = combineReducers({
    card
});

const storage = typeof  window !== 'undefined' ? AsyncStorage : createWebStorage('local');

const config = {
    key: "root",
    storage,
}
const persistedReducer = persistReducer(config, reducers);
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});

export default store;
