import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/error/404/NotFound";
import { BounceLoader } from "../components/loaders/BounceLoader";


const AuthenticatedRoutes = () => {
  const Login = lazy(() => import("../pages/auth/login/Login"));
  const SignUp = lazy(() => import("../pages/auth/signup/SignUp"));
  const Home = lazy(() => import("../pages/home/Home"));
  const CalculateGPA = lazy(
    () => import("../pages/academics/gpa/CalculateGPA")
  );
  const CourseOutlines = lazy(
    () => import("../pages/academics/course-outlines/CourseOutline")
  );
  const CourseOutline100 = lazy(
    () => import("../pages/academics/course-outlines/levels/CourseOutline100")
  );
  const CourseOutline200 = lazy(
    () => import("../pages/academics/course-outlines/levels/CourseOutline200")
  );
  const CourseOutline300 = lazy(
    () => import("../pages/academics/course-outlines/levels/CourseOutline300")
  );
  const CourseOutline400 = lazy(
    () => import("../pages/academics/course-outlines/levels/CourseOutline400")
  );
  const CourseOutline500 = lazy(
    () => import("../pages/academics/course-outlines/levels/CourseOutline500")
  );
  return (
    <Suspense fallback={<BounceLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calculate-gpa" element={<CalculateGPA />} />
        <Route path="/course-outlines" element={<CourseOutlines />}>
          <Route path="100-level" element={<CourseOutline100 />} />
          <Route path="200-level" element={<CourseOutline200 />} />
          <Route path="300-level" element={<CourseOutline300 />} />
          <Route path="400-level" element={<CourseOutline400 />} />
          <Route path="500-level" element={<CourseOutline500 />} />
        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
};

export default AuthenticatedRoutes;
