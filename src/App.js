import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./components/Layout";
import { PrivateRoute } from "./components/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import userOperations from "./redux/user/userOperations";
import { useUsers } from "./hooks/useUsers";

const HomePage = lazy(() => import('./pages/HomePage'));
const UserPage = lazy(() => import('./pages/UserPage'));
const NftPage = lazy(() => import('./pages/NftPage'));
const MarketPage = lazy(() => import('./pages/MarketPage'));
const MarketNfts = lazy(() => import('./components/Marketplace/MarketNfts'));
const MarketCollections = lazy(() => import('./components/Marketplace/MarketCollections'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));

function App() {
  const {isLoggedIn} = useUsers();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userOperations.getAll());

    if(!isLoggedIn) {
      dispatch(userOperations.refresh());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/userpage' element={<PrivateRoute><UserPage /></PrivateRoute>} />
        <Route path='/profile/:_id' element={<ProfilePage />} />
        <Route path='/nft/:_id' element={<NftPage />} />
        <Route path='/marketplace' element={<MarketPage />}>
          <Route index element={<Navigate to='nfts' />} />
          <Route path='nfts' element={<MarketNfts />} />
          <Route path='collections' element={<MarketCollections />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
