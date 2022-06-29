// import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";

import ErrorPage from "./pages/ErrorPage";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import UserProfile from "./components/UserProfile";
import HomePage from "./components/HomePage";
import EmployerSignup from "./pages/EmployerSignup";
import EmployerLogin from "./pages/EmployerLogin";
import PostJob from "./components/PostJob";
import EmployerProfile from "./components/EmployerProfile";

function App() {
  return (
    // <BeersContextProvider>
    <div>
      <Layout>
        <Routes>
          <Route path="/employer/profile" element={<EmployerProfile />} />
          <Route path="/postJob" element={<PostJob />} />
          <Route path="/employer/signup" element={<EmployerSignup />} />
          <Route path="/employer/login" element={<EmployerLogin />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/user/login" element={<UserLogin />} />
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
