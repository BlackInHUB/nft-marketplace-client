import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./components/Layout";
import { PrivateRoute } from "./components/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import userOperations from "./redux/user/userOperations";

const HomePage = lazy(() => import('./pages/HomePage'));
const UserPage = lazy(() => import('./pages/UserPage'));

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
      </Route>
    </Routes>
  );
}

export default App;
