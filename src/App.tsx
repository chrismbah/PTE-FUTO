import AppRoutes from "./routes/AppRoutes";
import ErrorBoundary from "./pages/error/error-boundries/ErrorBoundary"; // Assuming a custom ErrorBoundary component

export default function App() {
  return (
    <div className="font-dmSans">
      <ErrorBoundary> {/* Custom fallback */}
        <AppRoutes />
      </ErrorBoundary>
    </div>
  );
}