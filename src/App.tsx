import AppRoutes from "./routes";
import ErrorBoundary from "./pages/error/error-boundries/ErrorBoundary";
import { CustomToaster } from "./components/toast/CustomToaster";
import AppProvider from "./provider";

export default function App() {
 
  return (
    <div className="font-dmSans scroll-smooth">
      <ErrorBoundary>
        <AppProvider>
          <AppRoutes />
          <CustomToaster />
        </AppProvider>
      </ErrorBoundary>
    </div>
  );
}
