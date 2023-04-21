import { createSlice } from "@reduxjs/toolkit";
import nftOperations from "./nftOperations";

const initialState = {
    allNft: [],
    usersNft: {
        created: [],
        owned: []
    },
    isLoading: false,
    error: null
};

const nftSlice = createSlice({
    name: 'nfts',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(nftOperations.addNft.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(nftOperations.addNft.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.usersNft.created = [payload, ...state.usersNft.created];
            state.error = null;
        })
        .addCase(nftOperations.addNft.rejected, (state, {payload}) => {
            state.isLoading = false;
            
            state.error = payload;
        })
        .addCase(nftOperations.getUsersNft.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(nftOperations.getUsersNft.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.usersNft = {...state.users, ...payload};
            state.error = null;
        })
        .addCase(nftOperations.getUsersNft.rejected, (state, {payload}) => {
            state.isLoading = false;
            
            state.error = payload;
        })
    }
});

export default nftSlice.reducer;