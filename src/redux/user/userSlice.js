import { createSlice } from '@reduxjs/toolkit';
import userOperations from './userOperations';

const initialState = {
  topCreators: null,
  rankings: null,
  user: null,
  profile: null,
  token: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(userOperations.register.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userOperations.register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userOperations.register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(userOperations.login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userOperations.login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userOperations.login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(userOperations.logout.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userOperations.logout.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(userOperations.logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(userOperations.update.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userOperations.update.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = { ...state.user, ...payload };
      })
      .addCase(userOperations.update.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(userOperations.refresh.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(userOperations.refresh.fulfilled, (state, { payload }) => {
        if (!payload) {
          return (state = initialState);
        }
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
        state.user = payload;
        state.isRefreshing = false;
      })
      .addCase(userOperations.refresh.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.isRefreshing = false;
      })
      .addCase(userOperations.getTopRanked.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userOperations.getTopRanked.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.topCreators = payload;
      })
      .addCase(userOperations.getTopRanked.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(userOperations.getRankings.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userOperations.getRankings.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.rankings = payload;
      })
      .addCase(userOperations.getRankings.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(userOperations.getProfile.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userOperations.getProfile.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.profile = payload;
      })
      .addCase(userOperations.getProfile.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(userOperations.following.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userOperations.following.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        if (state.user.iFollow.includes(payload)) {
          state.user.iFollow = state.user.iFollow.filter(item => item !== payload);
          state.profile.followers = state.profile.followers.filter(item => item !== payload);
        } else {
          state.user.iFollow.push(payload);
          state.profile.followers.push(payload);
        }
      })
      .addCase(userOperations.following.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default userSlice.reducer;
