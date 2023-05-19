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
        const result = await nftApi.getProfileNft(_id);
        return result;
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
});

const createCollection = createAsyncThunk('nfts/createCollection', async (collection, thunkAPI) => {
    try {
        const result = await nftApi.createCollection(collection);
        return result;
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
});

const getAllCollections = createAsyncThunk('nfts/getAllCollections', async (_, thunkAPI) => {
    try {
        const result = await nftApi.getAllCollections();
        return result;
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
});

const getCollectionDetails = createAsyncThunk('nfts/getCollectionDetails', async (_id, thunkAPI) => {
    try {
        const result = await nftApi.getCollectionDetails(_id);
        return result;
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
});

const updateCollection = createAsyncThunk('nfts/updateCollection', async (data, thunkAPI) => {
    try {
        const result = await nftApi.updateCollection(data);
        return result;
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
});

const deleteCollection = createAsyncThunk('nfts/deleteCollection', async (_id, thunkAPI) => {
    try {
        const result = await nftApi.deleteCollection(_id);
        return result;
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
});

const updateNft = createAsyncThunk('nfts/updateNft', async (data, thunkAPI) => {
    try {
        const result = await nftApi.updateNft(data);
        return result;
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
});

const deleteNft = createAsyncThunk('nfts/deleteNft', async (_id, thunkAPI) => {
    try {
        const result = await nftApi.deleteNft(_id);
        return result;
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
});

const getHighLight = createAsyncThunk('nfts/getHighlight', async (_, thunkAPI) => {
    try {
        const result = await nftApi.getHighLight();
        return result;
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
});

const getTrendingCollections = createAsyncThunk('nfts/getTrendingCollections', async (_, thunkAPI) => {
    try {
        const result = await nftApi.getTrendingCollections();
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
    getProfileNft,
    createCollection,
    getAllCollections,
    getCollectionDetails,
    updateCollection,
    deleteCollection,
    updateNft,
    deleteNft,
    getHighLight,
    getTrendingCollections
};

export default nftOperations;