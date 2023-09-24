import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from "../Slices/AuthSlice";
import UserReducer from "../Slices/UserSlice";

const reducer = {
    Auth :  AuthReducer,
    User: UserReducer,
}; // Your Redux reducers go here

const store = configureStore({
    reducer,
});

export default store;
