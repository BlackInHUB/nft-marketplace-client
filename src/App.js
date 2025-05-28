import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './components/Layout/Layout.jsx';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import userOperations from './redux/user/userOperations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNfts } from './hooks/useNfts.js';
import { useUsers } from './hooks/useUsers.js';
import { Loader } from './components/BaseComponents/Loader/Loader.jsx';

const HomePage = lazy(() => import('./pages/HomePage'));
const UserPage = lazy(() => import('./pages/UserPage'));
const NftPage = lazy(() => import('./pages/NftPage'));
const MarketPage = lazy(() => import('./pages/MarketPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const CollectionPage = lazy(() => import('./pages/CollectionPage'));
const RankingsPage = lazy(() => import('./pages/RankingsPage'));
const RankingsList = lazy(() => import('./components/Rankings/RankingsList/RankingsList'));
const Marketplace = lazy(() => import('./components/Marketplace/Marketplace.jsx'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage.jsx'));

function App() {
  const dispatch = useDispatch();
  const { nftsLoading } = useNfts();
  const { userLoading } = useUsers();

  const isLoading = nftsLoading || userLoading;

  useEffect(() => {
    console.log('i work');
    dispatch(userOperations.refresh());
  }, [dispatch]);

  return (
    <>
      <ToastContainer position="top-center" />

      {isLoading && <Loader />}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/userpage"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/:_id"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/nft/:_id"
            element={
              <PrivateRoute>
                <NftPage />
              </PrivateRoute>
            }
          />
          <Route path="/nfts/collection/:_id" element={<CollectionPage />} />
          <Route path="/marketplace" element={<MarketPage />}>
            <Route index element={<Navigate to="nfts" />} />
            <Route path=":category" element={<Marketplace />} />
          </Route>
          <Route path="/rankings" element={<RankingsPage />}>
            <Route index element={<Navigate to="today" />} />
            <Route path=":period" element={<RankingsList />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
