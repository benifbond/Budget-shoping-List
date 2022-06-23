// import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
// import { BeersContextProvider } from "./contexts/BeersContext";

// import BarDetailsPage from "./pages/BarDetailsPage";

import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    // <BeersContextProvider>
    <Layout>
      <Routes>
        <Route path="/" element={<h1>Hello anonymous</h1>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/beers" element={<PrivateRoute></PrivateRoute>} />
        <Route
          path="/bars/:barId"
          element={<PrivateRoute>{/* <BarDetailsPage /> */}</PrivateRoute>}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
    // </BeersContextProvider>
  );
}

export default App;
