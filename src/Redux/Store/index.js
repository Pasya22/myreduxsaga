import {
    configureStore
} from "@reduxjs/toolkit";
import {
    combineReducers
} from "redux";
import userReducers from "../Reducer/userReducer";
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../sagas';

// daftar reducer
const saga = createSagaMiddleware()
const reducer = combineReducers({
    userReducer: userReducers,

});

// config store
const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(saga),

});
saga.run(rootSaga);
export default store;