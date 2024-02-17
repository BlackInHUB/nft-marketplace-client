import { useSelector } from "react-redux";
import {
  getUser,
  getTopRanked,
  getIsLoggedIn,
  getProfile,
  getToken,
  getIsRefreshing,
  getUserLoading,
  getRankings,
  getError,
} from "../redux/user/userSelectors";

export const useUsers = () => {
  const user = useSelector(getUser);
  const isRefreshing = useSelector(getIsRefreshing);
  const token = useSelector(getToken);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const topCreators = useSelector(getTopRanked);
  const rankings = useSelector(getRankings);
  const profile = useSelector(getProfile);
  const userLoading = useSelector(getUserLoading);
  const error = useSelector(getError);

  return {
    user,
    isLoggedIn,
    topCreators,
    rankings,
    profile,
    token,
    isRefreshing,
    userLoading,
    error,
  };
};
