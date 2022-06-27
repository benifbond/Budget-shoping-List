// import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
// import { BeersContextProvider } from "./contexts/BeersContext";

// import BarDetailsPage from "./pages/BarDetailsPage";

import ErrorPage from "./pages/ErrorPage";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import Profile from "./components/Profile";
import HomePage from "./components/HomePage";
function App() {
  return (
    // <BeersContextProvider>
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/beers" element={<PrivateRoute></PrivateRoute>} />
          <Route
            path="/bars/:barId"
            element={<PrivateRoute>{/* <BarDetailsPage /> */}</PrivateRoute>}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
