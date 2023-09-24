import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from "../Slices/AuthSlice";

const reducer = {
    Auth :  AuthReducer,
}; // Your Redux reducers go here

const store = configureStore({
    reducer,
});

export default store;
