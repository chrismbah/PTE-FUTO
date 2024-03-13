/* eslint-disable @typescript-eslint/no-unused-vars */
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/error/404/NotFound";
import LogoSpinner from "../components/loaders/FullLogoSpinner";
import { Navbar } from "../components/navbar/Navbar";
// import ProtectedRoute from "./ProtectedRoute";
// import { PrivateRoute } from "./PrivateRoute";

const AuthenticatedRoutes = () => {
  const Login = lazy(() => import("../pages/auth/login"));
  const SignUp = lazy(() => import("../pages/auth/signup"));
  const Home = lazy(() => import("../pages/home/Home"));
  const CalculateGPA = lazy(
    () => import("../pages/academics/gpa/CalculateGPA")
  );
  const CourseOutline = lazy(
    () => import("../pages/academics/course-outlines/CourseOutline")
  );
  const CoursesOutline = lazy(
    () => import("../pages/academics/course-outlines/CoursesOutline")
  );
  const CourseInfo = lazy(
    () => import("../pages/academics/course-outlines/CourseInfo")
  );
  const LearningResources = lazy(
    () => import("../pages/academics/learning-resources/LearningResources")
  );
  const LearningResourcesCourses = lazy(
    () =>
      import("../pages/academics/learning-resources/LearningResourcesCourses")
  );
  const LearningResourcesContent = lazy(
    () =>
      import("../pages/academics/learning-resources/LearningResourcesContent")
  );
  const Blog = lazy(() => import("../pages/misc/blog/Blog"));
  const BlogPost = lazy(() => import("../pages/misc/blog/post/BlogPost"));
  const ProjectTeam = lazy(() => import("../pages/students/ProjectTeam"));
  const AboutUs = lazy(() => import("../pages/about/AboutUs"));
  const PhilosophyAndObjectives = lazy(() => import("../pages/about/P&A"));
  const Admission = lazy(() => import("../pages/about/Admission"));
  const Dashboard = lazy(() => import("../pages/user/dashboard/Dashboard"));
  const StudentProfile = lazy(() => import("../pages/user/StudentProfile"));
  const DashboardGPACalculator = lazy(
    () =>
      import("../pages/user/dashboard/components/gpa-calculator/GPACalculator")
  );
  const DashboardCourseOutlines = lazy(
    () =>
      import(
        "../pages/user/dashboard/components/course-outlines/CourseOutlines"
      )
  );
  const DashboardLearningResources = lazy(
    () =>
      import(
        "../pages/user/dashboard/components/learning-resources/LearningResources"
      )
  );

  return (
    <>
      <Navbar />
      <Suspense fallback={<LogoSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calculate-gpa" element={<CalculateGPA />} />
          <Route path="/course-outlines" element={<CourseOutline />} />
          <Route path="/course-outlines/:level" element={<CoursesOutline />} />
          <Route path="/course-outlines/:level/:id" element={<CourseInfo />} />
          <Route
            path={"/learning-resources" || "/dashboard/learning-resources"}
            element={<LearningResources />}
          />
          <Route
            path="/learning-resources/:level"
            element={<LearningResourcesCourses />}
          />{" "}
          <Route
            path={"/learning-resources/:level/:id/:courseTitle"}
            element={<LearningResourcesContent />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blog/posts/:title/:postID/:postType"
            element={<BlogPost />}
          />
          <Route path="/profile" element={<StudentProfile />} />
          <Route path="/students/project-team" element={<ProjectTeam />} />
          <Route path="/about/about-us" element={<AboutUs />} />
          <Route
            path="/about/philosophy-and-objectives"
            element={<PhilosophyAndObjectives />}
          />
          <Route path="/about/admission" element={<Admission />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gpa-calculator" element={<CalculateGPA />} />
          {/* <Route element={<PrivateRoute />}> */}
          <Route path="/dasboard" element={<Dashboard />} />
          <Route path="/u/profile" element={<StudentProfile />} />
          <Route
            path="/u/gpa-calculator"
            element={<DashboardGPACalculator />}
          />
          <Route
            path="/u/course-outlines"
            element={<DashboardCourseOutlines />}
          />
          <Route
            path="/u/learning-resources"
            element={<DashboardLearningResources />}
          />
          {/* </Route> */}
          {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />{" "}
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </Suspense>
    </>
  );
};

export default AuthenticatedRoutes;
