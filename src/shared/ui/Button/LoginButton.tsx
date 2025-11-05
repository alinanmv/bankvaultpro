// shared/ui/Button/LoginButton.tsx
import * as React from "react";
import { Button, useTheme, CircularProgress } from "@mui/material";

export default function LoginButton({ children, onClick, ...props }: any) {
  const theme = useTheme();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    if (onClick) {
      await onClick();
    } else {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    setIsLoading(false);
  };

  return (
    <Button
      variant="contained"
      fullWidth
      disabled={isLoading}
      onClick={handleClick}
      {...props}
      sx={{
        borderRadius: "10px",
        textTransform: "none",
        fontWeight: 600,
        height: "40px",
        py: 1.2,
        minWidth: 120, // чтобы не прыгала кнопка
        background: theme.palette.mode === "light" ? "black" : "#eeeeee",
        color: theme.palette.mode === "light" ? "#fff" : "#000",
        "&:hover": { opacity: 0.9 },
      }}
    >
      {isLoading ? (
        <>
          <CircularProgress size={18} color="inherit" sx={{ mr: 1 }} />
          Authenticating...
        </>
      ) : (
        children
      )}
    </Button>
  );
}
