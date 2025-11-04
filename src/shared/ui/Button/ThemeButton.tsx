import { Button } from "@mui/material";
import { useTheme, type SxProps } from "@mui/material/styles";

interface ThemeButtonProps {
  height:string;
  width: string;
  label: string;
  onClick?: () => void;
  sx:SxProps
}

export default function ThemeButton({ label, onClick,sx, height, width }: ThemeButtonProps) {
  const theme = useTheme();

  const isDark = theme.palette.mode === "dark";

  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        textTransform: "none",
        borderRadius: "8px",
        boxShadow: "none",
        height:{height},
        width:{width},
        backgroundColor: isDark ? theme.palette.common.white : theme.palette.grey[900],
        color: isDark ? theme.palette.grey[900] : theme.palette.common.white,
        "&:hover": {
          backgroundColor: isDark
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        },
      }}
    >
      {label}
    </Button>
  );
}
