import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants";

const initialState = {
    data: null,
    loading: false,
    error: null
};

export const fetchAdminSetting = createAsyncThunk(
    "adminSetting/fetchAdminSetting",
    async () => {
        const response = await fetch(`${BASE_URL}/adminSetting/getSettings`, {
            credentials: "include"
        })
        if (!response.ok) {
            throw new Error("Failed to fetch admin settings");
        }

        return await response.json();
    }
)


const adminSettingSlice = createSlice({
    name: "adminSetting",
    initialState,
    reducers: {
        addAdminSetting: (state, action) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdminSetting.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAdminSetting.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAdminSetting.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export const { addAdminSetting } = adminSettingSlice.actions;
export default adminSettingSlice.reducer;