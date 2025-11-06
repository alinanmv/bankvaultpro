import DefaultCard from "@/shared/ui/Card/Card";
import Notification from "@/features/preferences/Notifications";
import ThemeButton from "@/shared/ui/Button/ThemeButton";
import LogoutDuration from "@/features/preferences/LogoutDuration";
import { Box, useTheme } from "@mui/material";
import AlertToast from "@/shared/ui/Alerts/Alert";
import React from "react";
export default function PreferencesWidget() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <DefaultCard
        title="Preferences"
        description="Manage your account settings and preferences."
        width="100%"
        titleSx={{
          fontFamily: "Roboto",
          fontWeight: 500,
        }}
      >
        <Box sx={{ width: "100%", mt: 3 }}>
          <LogoutDuration sx={null} />
        </Box>
        <Box
          width="100%"
          sx={{
            mt: 3,
            paddingBottom: "30px",
            borderBottom: `1px solid ${
              isDark ? theme.palette.grey[900] : "#eeeeee"
            }`,
          }}
        >
          <Notification />
        </Box>
        <Box sx={{ mt: 3 }}>
          <ThemeButton
            label="Save Changes"
            sx={{ display: "flex", alignItems: "center" }}
            height="40px"
            onClick={() => setOpen(true)}
          />
        </Box>
      </DefaultCard>
      <AlertToast
        open={open}
        onClose={() => setOpen(false)}
        title="Settings Saved!"
        description={
          <>
            Your new preferences have been saved <br />
            Successfully.
          </>
        }
        variant="success"
        autoHideDuration={4000}
      />
    </>
  );
}
