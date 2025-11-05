import LoginCard from "@/shared/ui/Card/LoginCard";
import LoginButton from "@/shared/ui/Button/LoginButton";
import TextInput from "@/shared/ui/Input/TextInput";
import { Logo } from "@/shared/ui/Logo/Logo";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import { Box } from "@mui/material";

export default function LoginForm() {
  const theme = useTheme();
  const nav = useNavigate();

  const handleLogin = async () => {
    await new Promise((r) => setTimeout(r, 1000));
    nav("/dashboard", { replace: true });
  };

  return (
    <div
      className="login-form"
      style={{
        backgroundColor: theme.palette.background.default, // фон по теме
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.text.primary, // цвет текста по теме
        transition: "background-color 0.3s ease, color 0.3s ease", // плавная смена
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
        <TextInput label="AD Username" placeholder="domain\\username" />
        <TextInput
          label="Password"
          type="password"
          placeholder="your AD password"
        />

        <LoginButton onClick={handleLogin}>Sign In with AD</LoginButton>
      </LoginCard>
    </div>
  );
}
