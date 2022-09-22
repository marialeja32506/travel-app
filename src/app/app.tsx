import { BrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../components/dashboard-layout";
import LadingPage from "../components/dashboard-layout/content/lading-page";

export const App = (): React.ReactElement => {
  return (
    <DashboardLayout>
      <BrowserRouter>
        <LadingPage />
      </BrowserRouter>
    </DashboardLayout>
  );
};
export default App;
