import { createSlice } from "@reduxjs/toolkit";
import nftOperations from "./nftOperations";

const initialState = {
    allNft: [],
    details: null,
    usersNft: {
        created: [],
        owned: []
    },
    profileNft: {
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
            state.usersNft = payload;
            state.error = null;
        })
        .addCase(nftOperations.getUsersNft.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })
        .addCase(nftOperations.getDetails.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(nftOperations.getDetails.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.details = payload;
            state.error = null;
        })
        .addCase(nftOperations.getDetails.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })
        .addCase(nftOperations.getAll.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(nftOperations.getAll.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.allNft = payload;
            state.error = null;
        })
        .addCase(nftOperations.getAll.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })
        .addCase(nftOperations.getProfileNft.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(nftOperations.getProfileNft.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.profileNft = payload;
            state.error = null;
        })
        .addCase(nftOperations.getProfileNft.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })
    }
});

export default nftSlice.reducer;