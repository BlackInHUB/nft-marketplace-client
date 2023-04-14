import { createSlice } from "@reduxjs/toolkit";
import userOperations from "./userOperations";

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    error: null,
    isLoggedIn: false
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(userOperations.register.pending, state => {
                state.isLoading = true;
                state.error = null
            })
            .addCase(userOperations.register.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.error = null;
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            .addCase(userOperations.register.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(userOperations.login.pending, state => {
                state.isLoading = true;
                state.error = null
            })
            .addCase(userOperations.login.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.error = null;
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            .addCase(userOperations.login.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(userOperations.logout.pending, state => {
                state.isLoading = true;
                state.error = null
            })
            .addCase(userOperations.logout.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.error = null;
                state.user = null;
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(userOperations.logout.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(userOperations.update.pending, state => {
                state.isLoading = true;
                state.error = null
            })
            .addCase(userOperations.update.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.error = null;
                state.user = {...state.user, ...payload};
            })
            .addCase(userOperations.update.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(userOperations.refresh.pending, state => {
                state.isLoading = true;
                state.error = null
            })
            .addCase(userOperations.refresh.fulfilled, (state, {payload}) => {
                if (!payload) {
                    return state = initialState;
                };
                state.isLoading = false;
                state.error = null;
                state.isLoggedIn = true;
                state.user = payload;
            })
            .addCase(userOperations.refresh.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload;
            })
    }
});

export default userSlice.reducer;