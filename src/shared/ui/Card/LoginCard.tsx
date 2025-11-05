import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
export default function LoginCard(props: any) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          width: 450,
          p: 3,
          borderRadius: "10px",
          borderColor: theme.palette.divider,
          boxShadow:
            theme.palette.mode === "light"
              ? "0 4px 12px rgba(0,0,0,0.08)"
              : "0 4px 12px rgba(0,0,0,0.5)",
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        {props.children}
      </Card>

      {props.footer && (
        <Box
          sx={{
            mt: 1.5,
            color: "text.secondary",
            fontSize: 12,
            textAlign: "center",
          }}
        >
          {props.footer}
        </Box>
      )}
    </Box>
  );
}
