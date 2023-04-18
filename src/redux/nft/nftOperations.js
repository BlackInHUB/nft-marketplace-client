import { createAsyncThunk } from "@reduxjs/toolkit";
import * as nftApi from '../../services/nftApi';

const add = createAsyncThunk('nfts/add', async (newNft, thunkAPI) => {
    try {
        const result = await nftApi.add(newNft);
        return result;
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
});

const nftOperations = {
    add,
};

export default nftOperations;