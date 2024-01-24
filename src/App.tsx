import AppRoutes from "./routes";
import ErrorBoundary from "./pages/error/error-boundries/ErrorBoundary"; 
import { CustomToaster } from "./components/toast/CustomToaster";
import GPAContextProvider from "./context/GPAContext";
import CourseOutlineContextProvider from "./context/CourseOutline";
export default function App() {
  return (
    <div className="font-dmSans">
      <ErrorBoundary>
        <GPAContextProvider>
          <CourseOutlineContextProvider>
            <AppRoutes />
            <CustomToaster />
          </CourseOutlineContextProvider>
        </GPAContextProvider>
      </ErrorBoundary>
    </div>
  );
}
