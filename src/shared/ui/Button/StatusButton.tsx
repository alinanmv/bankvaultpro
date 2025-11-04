import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface StatusButtonProps {
  status: "operational" | "degraded";
  label?: string;
  onClick?: () => void;
}

export default function StatusButton({
  status,
  label = "Status",
  onClick,
}: StatusButtonProps) {
  const theme = useTheme();
  const isOperational = status === "operational";
  const isDegraded = status === "degraded";

  const backgroundColor = isOperational
    ? theme.palette.mode === "light"
      ? theme.palette.grey[900]        
      : theme.palette.common.white     
    : isDegraded
    ? theme.palette.error.main
    : theme.palette.action.disabledBackground;

  const textColor = isOperational
    ? theme.palette.mode === "light"
      ? theme.palette.common.white     
      : theme.palette.grey[900]        
    : isDegraded
    ? theme.palette.common.white
    : theme.palette.text.disabled;

  return (
    <Button
      variant="contained"
      onClick={onClick}
      disabled={!isOperational && !isDegraded}
      sx={{
        backgroundColor,
        color: textColor,
        textTransform: "none",
        paddingBottom: 0,
        paddingTop: 0,
        paddingRight: 1,
        paddingLeft: 1,
        boxShadow: 0,
        fontSize: "13px",
        borderRadius: "10px",
        "&:hover": { backgroundColor },
      }}
    >
      {label}
    </Button>
  );
}
