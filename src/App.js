import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./components/Layout";
import { PrivateRoute } from "./components/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import userOperations from "./redux/user/userOperations";
// import { PublicRoute } from "./components/PublicRoute";

const HomePage = lazy(() => import('./pages/HomePage'));
const UserPage = lazy(() => import('./pages/UserPage'));
const NftPage = lazy(() => import('./pages/NftPage'));
const MarketPage = lazy(() => import('./pages/MarketPage'));
// const MarketNfts = lazy(() => import('./components/Marketplace/MarketNfts'));
// const MarketCollections = lazy(() => import('./components/Marketplace/MarketCollections'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const CollectionPage = lazy(() => import('./pages/CollectionPage'));
const RankingsPage = lazy(() => import('./pages/RankingsPage'));
const RankingsList = lazy(() => import('./components/Rankings/RankingsList/RankingsList'));
const Marketplace = lazy(() => import('./components/Marketplace/Marketplace.jsx'))

function App() {
  const dispatch = useDispatch();

  useEffect(() =>  {
      dispatch(userOperations.refresh());
  }, [dispatch]);

  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/userpage' element={<PrivateRoute><UserPage /></PrivateRoute>} />
          <Route path='/profile/:_id' element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
          <Route path='/nft/:_id' element={<PrivateRoute><NftPage /></PrivateRoute>} />
          <Route path='/nfts/collection/:_id' element={<CollectionPage />} />
          <Route path='/marketplace' element={<MarketPage />}>
            <Route index element={<Navigate to='nfts' />} />
            <Route path=':category' element={<Marketplace />} />
          </Route>
          <Route path='/rankings' element={<RankingsPage />}>
            <Route index element={<Navigate to='today' />} />
            <Route path=":period" element={<RankingsList />} />
          </Route>
        </Route>
      </Routes>
  );
}

export default App;
