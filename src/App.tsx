import AppRoutes from "./routes";
import ErrorBoundary from "./pages/error/error-boundries/ErrorBoundary";
import { CustomToaster } from "./components/toast/CustomToaster";
import AppProvider from "./provider";

export default function App() {
 
  return (
    <>
      <ErrorBoundary>
        <AppProvider>
          <AppRoutes />
          <CustomToaster />
        </AppProvider>
      </ErrorBoundary>
    </>
  );
}
