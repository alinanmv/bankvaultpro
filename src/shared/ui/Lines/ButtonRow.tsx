import {
  Box,
  Button,
  Typography,
  Stack,
  useTheme,
  type SxProps,
} from "@mui/material";
import React from "react";
import AlertToast from "../Alerts/Alert";
interface SecurityProps {
  title: string;
  description?: string;
  buttonTitle: string;
  sx?: SxProps;
}

export default function ButtonRow({
  title,
  description,
  buttonTitle,
  sx,
}: SecurityProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          ...sx,
        }}
      >
        <Stack sx={{ minWidth: 0, flex: 1 }}>
          <Typography variant="body1" fontWeight={500} noWrap fontSize={14}>
            {title}
          </Typography>

          {description && (
            <Typography
              variant="body2"
              color="text.secondary"
              noWrap
              sx={{ fontSize: "12px" }}
            >
              {description}
            </Typography>
          )}
        </Stack>

        <Button
          variant="outlined"
          onClick={() => setOpen(true)}
          sx={{
            textTransform: "none",
            fontSize: 13,
            paddingX: 2,
            height: 34,
            borderRadius: "8px",

            // --- тема ---
            backgroundColor: isDark
              ? "transparent"
              : theme.palette.common.white,
            color: isDark
              ? theme.palette.common.white
              : theme.palette.text.primary,
            borderColor: isDark
              ? theme.palette.grey[800]
              : theme.palette.grey[300],

            "&:hover": {
              backgroundColor: isDark
                ? "rgba(255,255,255,0.08)"
                : theme.palette.grey[50],
              borderColor: isDark
                ? theme.palette.grey[400]
                : theme.palette.grey[400],
            },
          }}
        >
          {buttonTitle}
        </Button>
      </Box>
      <AlertToast
        open={open}
        onClose={() => setOpen(false)}
        title="Password Reset Email Sent"
        description={"Please check your inbox to reset your password\nshortly."}
        variant="success"
        autoHideDuration={4000}
      />
    </>
  );
}
