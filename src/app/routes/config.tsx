import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/LoginPage/ui/Page";
import DashboardPage from "@/pages/Dashboard/ui/page";


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
         <LoginPage />
    ),
  },
  {
    path: "/dashboard",
    element: (
      <DashboardPage/>
    ),
  },
  { path: "*", element: <div>Not found</div> },
]);
