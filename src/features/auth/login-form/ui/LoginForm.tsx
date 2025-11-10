import React from "react";
import LoginCard from "@/shared/ui/Card/LoginCard";
import LoginButton from "@/shared/ui/Button/LoginButton";
import TextInput from "@/shared/ui/Input/TextInput";
import { Logo } from "@/shared/ui/Logo/Logo";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme, Box } from "@mui/material";
import AlertToast from "@/shared/ui/Alerts/Alert";
import { validateLoginForm } from "../model/validate";
import { setToken } from "@/shared/lib/auth";
import { clearToken } from "@/shared/lib/auth";
type LoginErrors = Partial<{ username: string; password: string }>;

export default function LoginForm() {
  const theme = useTheme();
  const nav = useNavigate();
  const loc = useLocation();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState<LoginErrors>({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navTimer = React.useRef<number | null>(null);
const handleLogin = async () => {
  if (loading) return;

  const validationErrors = validateLoginForm({ username, password });
  setErrors(validationErrors);
  if (Object.keys(validationErrors).length) return;

  setLoading(true);
  try {
    await new Promise((r) => setTimeout(r, 1000));
    setToken(username);
    setOpen(true);
    const from = (loc.state as { from?: string } | null)?.from ?? "/dashboard";
    navTimer.current = window.setTimeout(() => {
      nav(from, { replace: true });
    }, 800);
  } finally {
    setLoading(false);
  }
};
React.useEffect(() => {
  return () => {
    if (navTimer.current) window.clearTimeout(navTimer.current);
  };
}, []);
React.useEffect(() => {
  clearToken();
}, []);


  return (
    <div
      className="login-form"
      style={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.text.primary,
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <LoginCard footer="Enter any username and password to proceed.">
        <Box
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? "#2b2b2b" : "#eeeeee",
            borderRadius: "50%",
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "background-color 0.3s ease",
          }}
        >
          <Logo />
        </Box>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "'Merriweather', 'Times New Roman', serif",
              fontWeight: 700,
              fontSize: "28px",
              textAlign: "center",
              margin: 0,
              color: theme.palette.text.primary,
            }}
          >
            BankVault Pro
          </h1>
          <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
            Sign in with your Active Directory credentials.
          </p>
        </div>

        <TextInput
          label="AD Username"
          placeholder="domain\\username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={!!errors.username}
          helperText={errors.username}
        />

        <TextInput
          label="Password"
          type="password"
          placeholder="your AD password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
        />

        <LoginButton onClick={handleLogin} disabled={loading}>
          {loading ? "Signing in…" : "Sign In with AD"}
        </LoginButton>
      </LoginCard>

      <AlertToast
        open={open}
        onClose={() => setOpen(false)}
        title="Login Successful"
        description={
          <>
            Authenticated via AD. Redirecting to your <br />
            dashboard.
          </>
        }
        variant="success"
        autoHideDuration={8000}
      />
    </div>
  );
}
