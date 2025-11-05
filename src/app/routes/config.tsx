import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/LoginPage/ui/Page";
import DashboardPage from "@/pages/Dashboard/ui/page";
import Transactions from "@/pages/Transactions/ui/page";
import Reports from "@/pages/Reports/ui/page";
import Settings from "@/pages/Settings/ui/page";
import Profile from "@/pages/Profile/ui/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  { path: "*", element: <div>Not found</div> },
  { path: "/transactions", element: <Transactions /> },
  {
    path: "/reports",
    element: <Reports />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
