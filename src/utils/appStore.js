import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlices/userSlice";
import usersReducer from "./userSlices/usersSlice";
import adminSettingReducer from "./settingsSlices/adminSettingSlice";
import leaveReducer from "./leaveSlices/leaveSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        users: usersReducer,
        adminSetting: adminSettingReducer,
        leaves: leaveReducer
    }
})

export default appStore;