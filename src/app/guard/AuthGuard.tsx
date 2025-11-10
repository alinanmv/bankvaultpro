import { Navigate, useLocation } from "react-router-dom";
import { readToken } from "@/shared/lib/auth";

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const loc = useLocation();
  const token = readToken();

  if (!token) return <Navigate to="/" replace state={{ from: loc.pathname }} />;
  return <>{children}</>;
}
