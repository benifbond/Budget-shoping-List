// import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";

import ErrorPage from "./pages/ErrorPage";
// import UserLogin from "./pages/UserLogin";
import UserLoginMaterial from "./components/UserLoginMaterial";
// import UserSignup from "./pages/UserSignup";
import UserSignupMaterial from "./components/UserSignupMaterial";
import UserProfile from "./components/UserProfile";
import HomePage from "./components/HomePage";
// import EmployerSignup from "./pages/EmployerSignup";
import EmployerSignupMaterial from "./components/EmployerSignupMaterial";
// import EmployerLogin from "./pages/EmployerLogin";
import EmployerLoginMaterial from "./components/EmployerLoginMaterial.jsx";
import PostJob from "./components/PostJob";
import EmployerProfile from "./components/EmployerProfile";

import FavouriteJobs from "./components/FavouriteJobs";
import UpdateJob from "./components/UpdateJob";

function App() {
  return (
    // <BeersContextProvider>
    <div>
      <Layout>
        <Routes>
          <Route path="/employer/profile" element={<EmployerProfile />} />
          <Route path="/postJob" element={<PostJob />} />
          <Route path="/employer/signup" element={<EmployerSignupMaterial />} />
          <Route path="/employer/login" element={<EmployerLoginMaterial />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route
            path="/favouriteJobs"
            element={
              <PrivateRoute>
                <FavouriteJobs />
              </PrivateRoute>
            }
          />
          <Route path="/signup" element={<UserSignupMaterial />} />
          <Route path="/user/login" element={<UserLoginMaterial />} />
          <Route path="/beers" element={<PrivateRoute></PrivateRoute>} />
          <Route
            path="/updatejob/:jobId"
            element={
              <PrivateRoute>
                <UpdateJob />
              </PrivateRoute>
            }
          />
          <Route
            path="/job/delete/:jobId"
            element={<PrivateRoute>{<UpdateJob />}</PrivateRoute>}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
