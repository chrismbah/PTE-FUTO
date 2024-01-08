import { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "../components/Navbar";
import NotFound from "../pages/error/404/NotFound";

const AppRoutes = () => {
  const [user] = useState(true);
  const Login = lazy(() => import("../pages/auth/Login"));
  const SignUp = lazy(() => import("../pages/auth/SignUp"));
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
