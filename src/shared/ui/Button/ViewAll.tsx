
import { Button, type ButtonProps } from "@mui/material";
import { useTheme, type SxProps, type Theme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

type Props = {
  sx?: SxProps<Theme>;
} & Omit<ButtonProps, "children">;

export default function ViewAllButton({ sx, ...buttonProps }: Props) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const navigate = useNavigate();

  const handleClick = () => navigate("/transactions");

  return (
    <Button
      onClick={handleClick}              
      variant="contained"
      {...buttonProps}                    
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "none",
        borderRadius: 1,
        px: 2,
        py: 0.5,
        bgcolor: isDark ? "#fff" : "#000",
        color: isDark ? "#000" : "#fff",
        "&:hover": { bgcolor: isDark ? "grey.200" : "grey.800" },
        ...sx,                             
      }}
    >
      View All
    </Button>                              
  );
}
