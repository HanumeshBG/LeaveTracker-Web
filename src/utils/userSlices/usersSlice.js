import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants";

const initialState = {
    data: [],
    loading: false,
    error: null
};

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {

        const response = await fetch(`${BASE_URL}/users/getUsers`, {
                credentials: "include"
            });

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        return await response.json();
    }
);

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default usersSlice.reducer;