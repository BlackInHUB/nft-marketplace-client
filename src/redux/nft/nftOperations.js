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

const getUsersNft = createAsyncThunk('nfts/getUsers', async (category, thunkAPI) => {
    try {
        const result = await nftApi.getUsersNft(category);
        return result;
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
})

const nftOperations = {
    addNft,
    getUsersNft
};

export default nftOperations;