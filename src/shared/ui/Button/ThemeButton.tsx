import { Button } from "@mui/material";
import { useTheme, type SxProps } from "@mui/material/styles";

interface ThemeButtonProps {
  height?: string | number;
  width?: string | number;
  label: string;
  icon?: React.ReactNode; // ← необязательная иконка
  onClick?: () => void;
  sx?: SxProps;
}

export default function ThemeButton({
  label,
  icon,
  onClick,
  sx,
  height = 40,
  width = "auto",
}: ThemeButtonProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Button
      variant="contained"
      onClick={onClick}
      startIcon={icon} // ← если иконка передана — появится слева
      sx={{
        textTransform: "none",
        borderRadius: "8px",
        boxShadow: "none",
        height,
        width,
        fontSize: "15px",
        backgroundColor: isDark
          ? theme.palette.common.white
          : theme.palette.grey[900],
        color: isDark ? theme.palette.grey[900] : theme.palette.common.white,
        "&:hover": {
          backgroundColor: isDark
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        },
        ...sx,
      }}
    >
      {label}
    </Button>
  );
}
