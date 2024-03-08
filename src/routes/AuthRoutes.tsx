import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/error/404/NotFound";
// import { BounceLoader } from "../components/loaders/FullBounceLoader";
import LogoSpinner from "../components/loaders/FullLogoSpinner";

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
  const StudentProfile = lazy(() => import("../pages/user/StudentProfile"));
  const Dashboard = lazy(() => import("../pages/user/dashboard/Dashboard"));
  const ProjectTeam = lazy(() => import("../pages/students/ProjectTeam"));
  const AboutUs = lazy(() => import("../pages/about/AboutUs"));
  const PhilosophyAndObjectives = lazy(() => import("../pages/about/P&A"));
  const Admission = lazy(() => import("../pages/about/Admission"));

  return (
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/calculate-gpa" element={<CalculateGPA />} />
        <Route path="/students/project-team" element={<ProjectTeam />} />
        <Route path="/about/about-us" element={<AboutUs />} />
        <Route
          path="/about/philosophy-and-objectives"
          element={<PhilosophyAndObjectives />}
        />
        <Route path="/about/admission" element={<Admission />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AuthenticatedRoutes;
