import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./components/Layout";
import { PrivateRoute } from "./components/PrivateRoute";

const HomePage = lazy(() => import('./pages/HomePage'));
const UserPage = lazy(() => import('./pages/UserPage'));

function App() {
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
