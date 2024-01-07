import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

export default function App() {
  const Login = lazy(() => import("./pages/auth/Login"));
  const SignUp = lazy(() => import("./pages/auth/SignUp"));
  return (
    <div>
      <Router>
        <Navbar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}
