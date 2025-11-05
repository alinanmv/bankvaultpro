import { Box, Button, useTheme } from "@mui/material";
import { mainPages } from "@/shared/config/navigation";
import { Link as RouterLink } from "react-router-dom";
export default function NavigationButtons() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const textColor =
    theme.palette.mode === "light"
      ? theme.palette.text.primary
      : theme.palette.grey[100];
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {mainPages.map((page) => (
        <Button
          key={page.id}
          component={RouterLink}
          to={page.href}
          sx={{
            color: textColor,
            textTransform: "none",
            fontWeight: 500,
            "&:hover": {
              background: isLight
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            },
          }}
        >
          {page.label}
        </Button>
      ))}
    </Box>
  );
}
