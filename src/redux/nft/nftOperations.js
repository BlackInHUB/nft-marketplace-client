import { createAsyncThunk } from "@reduxjs/toolkit";
import * as nftApi from '../../services/nftApi';

const addNft = createAsyncThunk('nfts/add', async (newNft, thunkAPI) => {
    try {
        const result = await nftApi.addNft(newNft);
        return result;
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
});

const getUsersNft = createAsyncThunk('nfts/getUsers', async (_, thunkAPI) => {
    try {
        const result = await nftApi.getUsersNft();
        return result;
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
});

const getDetails = createAsyncThunk('nfts/getDetails', async (_id, thunkAPI) => {
    try {
        const result = await nftApi.getDetails(_id);
        return result;
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
});

const getAll = createAsyncThunk('nfts/getAll', async (_, thunkAPI) => {
    try {
        const result = await nftApi.getAll();
        return result;

    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
});

const getProfileNft = createAsyncThunk('nfts/getProfileNft', async (_id, thunkAPI) => {
    try {
        const result = nftApi.getProfileNft(_id);
        return result;
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
})

const nftOperations = {
    addNft,
    getUsersNft,
    getDetails,
    getAll,
    getProfileNft
};

export default nftOperations;