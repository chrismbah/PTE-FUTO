import AppRoutes from "./routes/AppRoutes";
import ErrorBoundary from "./pages/error/error-boundries/ErrorBoundary"; // Assuming a custom ErrorBoundary component
import { CustomToaster } from "./components/toast/CustomToaster";

export default function App() {
  return (
    <div className="font-dmSans">
      <ErrorBoundary>
        {" "}
        {/* Custom fallback */}
        <AppRoutes />
        <CustomToaster />
      </ErrorBoundary>
    </div>
  );
}
