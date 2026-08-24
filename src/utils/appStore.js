import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlices/userSlice";
import usersReducer from "./userSlices/usersSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        users: usersReducer
    }
})

export default appStore;