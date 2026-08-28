import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlices/userSlice";
import usersReducer from "./userSlices/usersSlice";
import adminSettingReducer from "./settingsSlices/adminSettingSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        users: usersReducer,
        adminSetting: adminSettingReducer
    }
})

export default appStore;