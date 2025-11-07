import { Box, Button, useTheme } from "@mui/material";
import { mainPages } from "@/shared/config/navigation";
import { Link as RouterLink } from "react-router-dom";
export default function NavigationButtons() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {mainPages.map((page) => (
        <Button
          key={page.id}
          component={RouterLink}
          to={page.href}
          sx={{
            color: theme.palette.text.secondary,
            textTransform: "none",
            fontWeight: 500,
            "&:hover": {
              color: isLight ? "black" : "white",
              background: "none",
            },
          }}
        >
          {page.label}
        </Button>
      ))}
    </Box>
  );
}
