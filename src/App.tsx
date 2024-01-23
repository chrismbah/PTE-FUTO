import AppRoutes from "./routes";
import ErrorBoundary from "./pages/error/error-boundries/ErrorBoundary"; // Assuming a custom ErrorBoundary component
import { CustomToaster } from "./components/toast/CustomToaster";
import GPAContextProvider from "./context/GPAContext";
export default function App() {
  return (
    <div className="font-dmSans">
      <ErrorBoundary>
        <GPAContextProvider>
          <AppRoutes />
          <CustomToaster />
        </GPAContextProvider>
      </ErrorBoundary>
    </div>
  );
}
