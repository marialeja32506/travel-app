import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../components/dashboard-layout";
import LadingPage from "../components/dashboard-layout/content/lading-page";

const queryClient = new QueryClient();

export const App = (): React.ReactElement => {
  return (
    <DashboardLayout>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <LadingPage />
        </QueryClientProvider>
      </BrowserRouter>
    </DashboardLayout>
  );
};
export default App;
