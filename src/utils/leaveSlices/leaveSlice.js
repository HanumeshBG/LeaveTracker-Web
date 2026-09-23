import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants";

export const fetchLeaveData = createAsyncThunk(
    "leave/fetchLeaveData",
    async () => {
        const response = await fetch(`${BASE_URL}/leave/getLeaves`, {
            credentials: "include"
        });
        if(!response.ok){
            throw new Error("Failed to fetch leave data");
        }
        return await response.json();
    }
);

const initialState = {
    data: null,
    loading: false,
    error: null
};

const leaveSlice = createSlice({
    name: "leave",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLeaveData.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchLeaveData.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchLeaveData.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default leaveSlice.reducer;