export const getUser = ({ users }) => users.user;

export const getToken = ({ users }) => users.token;

export const getIsRefreshing = ({ users }) => users.isRefreshing;

export const getTopRanked = ({ users }) => users.topCreators;

export const getRankings = ({ users }) => users.rankings;

export const getIsLoggedIn = ({ users }) => users.isLoggedIn;

export const getProfile = ({ users }) => users.profile;

export const getUserLoading = ({ users }) => users.isLoading;

export const getError = ({ users }) => users.error;
