import { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "../components/navbar/Navbar";
import NotFound from "../pages/error/404/NotFound";
// import Spinner from "../components/loaders/Spinner";
import { BounceLoader } from "../components/loaders/BounceLoader";
// import { useAuthState } from "react-firebase-hooks/auth";
// import {auth} from "../config/firebase"

const AppRoutes = () => {
  // const [user] = useAuthState(auth);
  const [user] = useState(true);
  const Login = lazy(() => import("../pages/auth/login/Login"));
  const SignUp = lazy(() => import("../pages/auth/signup/SignUp"));
  const Home = lazy(() => import("../pages/home/Home"));
  const GPACalculator = lazy(
    () => import("../pages/academics/cgpa/CalculateGPA")
  );
  return (
    <div className="">
      <Nav />
      <Suspense fallback={<BounceLoader />}>
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/calculate-gpa" element={<GPACalculator />} />
              <Route path="*" element={<NotFound />} />
            </>
          ) : (
            <Route path="*" element={<NotFound />}></Route>
          )}
        </Routes>
      </Suspense>
    </div>
  );
};
export default AppRoutes;
