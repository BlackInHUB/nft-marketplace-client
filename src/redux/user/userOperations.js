import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userApi from '../../services/userApi';

const register = createAsyncThunk('users/register', async (userData, thunkAPI) => {
    try {
        const result = await userApi.register(userData);
        if (result._id) {
            return await userApi.login({email: userData.email, password: userData.password});
        };
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
});

const login = createAsyncThunk('users/login', async (userData, thunkAPI) => {
    try {
        const result = await userApi.login(userData);
        return result;
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
});

const logout = createAsyncThunk('users/logout', async (_, thunkAPI) => {
    try {
        return await userApi.logout();
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
});

const update = createAsyncThunk('users/update', async (userData, thunkAPI) => {
    try {
        const result = await userApi.update(userData);
        return result
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
});

const refresh = createAsyncThunk('users/refresh', async (_, thunkAPI) => {
    const {token} = thunkAPI.getState().users;

    if (!token) {
        return
    };

    try {
        return await userApi.refresh(token);
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
})

const userOperations = {
    register,
    login,
    logout,
    update,
    refresh
};

export default userOperations;