import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./components/Layout";
import { PrivateRoute } from "./components/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import userOperations from "./redux/user/userOperations";

const HomePage = lazy(() => import('./pages/HomePage'));
const UserPage = lazy(() => import('./pages/UserPage'));
const NftsPage = lazy(() => import('./pages/NftsPage'));
const NftsList = lazy(() => import('./components/NftsPageComponents/NftsList/NftsList'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userOperations.refresh());
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/userpage" element={<PrivateRoute><UserPage /></PrivateRoute>} />
        <Route path='/nfts' element={<NftsPage />}>
          <Route index element={<Navigate to='created' />} />
          <Route path=":path" element={<NftsList />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
