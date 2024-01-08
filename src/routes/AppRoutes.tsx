import { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "../components/Navbar";
import NotFound from "../pages/error/404/NotFound";
import SignUp from "../pages/auth/signup/SignUp";
import Login from "../pages/auth/login/Login";

const AppRoutes = () => {
  const [user] = useState(true);
  // const Login = lazy(() => import("../pages/auth/login/Login"));
  // const SignUp = lazy(() => import("../pages/auth/signup/SignUp"));
  const Home = lazy(() => import("../pages/home/Home"));
  return (
    <>
      <Nav />
      <Suspense fallback={"Loading..."}>
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </>
          ) : (
            <Route path="*" element={<NotFound />}></Route>
          )}
        </Routes>
      </Suspense>
    </>
  );
};
export default AppRoutes;
