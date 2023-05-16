import { createSlice } from "@reduxjs/toolkit";
import nftOperations from "./nftOperations";

const initialState = {
    allNft: [],
    allCollections: null,
    details: {
        nft: null,
        moreFromAuthor: []
    },
    collectionDetails: null,
    usersNft: {
        created: [],
        owned: [],
        collections: []
    },
    profileNft: {
        created: [],
        owned: [],
        collections: []
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
        .addCase(nftOperations.createCollection.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(nftOperations.createCollection.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.usersNft.collections = [payload, ...state.usersNft.collections];
            state.error = null;
        })
        .addCase(nftOperations.createCollection.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })
        .addCase(nftOperations.getAllCollections.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(nftOperations.getAllCollections.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.allCollections = payload;
            state.error = null;
        })
        .addCase(nftOperations.getAllCollections.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })
        .addCase(nftOperations.getCollectionDetails.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(nftOperations.getCollectionDetails.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.collectionDetails = payload;
            state.error = null;
        })
        .addCase(nftOperations.getCollectionDetails.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })
        .addCase(nftOperations.updateCollection.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(nftOperations.updateCollection.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.usersNft.collections = state.usersNft.collections.map(collection => {
                if (collection._id === payload.collection._id) {
                    return payload.collection;
                };
                return collection;
            });
            state.collectionDetails = payload.details;
            state.error = null;
        })
        .addCase(nftOperations.updateCollection.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })
        .addCase(nftOperations.deleteCollection.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(nftOperations.deleteCollection.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.usersNft.collections = state.usersNft.collections.filter(collection => collection._id !== payload);
            state.allCollections = state.allCollections.filter(collection => collection._id !== payload);
            state.error = null;
        })
        .addCase(nftOperations.deleteCollection.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })
        .addCase(nftOperations.updateNft.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(nftOperations.updateNft.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.usersNft.created = state.usersNft.created.map(nft => {
                if (nft._id === payload._id) {
                    return payload;
                };
                return nft;
            });
            state.details.nft = payload;
            state.details.moreFromAuthor = state.details.moreFromAuthor.map(nft => {
                if (nft._id === payload._id) {
                    return payload;
                };
                return nft;
            });
            state.error = null;
        })
        .addCase(nftOperations.updateNft.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })
        .addCase(nftOperations.deleteNft.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(nftOperations.deleteNft.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.usersNft.created = state.usersNft.created.filter(nft => nft._id !== payload);
            state.error = null;
        })
        .addCase(nftOperations.deleteNft.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })
    }
});

export default nftSlice.reducer;