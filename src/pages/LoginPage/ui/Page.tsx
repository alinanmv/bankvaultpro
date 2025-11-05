import LoginLayout from "@/widgets/login-layout/ui/LoginLayout";
import { ThemeSwitcher } from "@/features/theme-switcher/ui/ThemeSwitcher";
export default function LoginPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <ThemeSwitcher
        sx={{
          position: "absolute",
          top: "16px",
          right: "16px",
          zIndex: 10,
        }}
      />
      <LoginLayout />
    </div>
  );
}
