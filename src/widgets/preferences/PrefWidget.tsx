import DefaultCard from "@/shared/ui/Card/Card";
import Notification from "@/features/preferences/Notifications";
import ThemeButton from "@/shared/ui/Button/ThemeButton";
import LogoutDuration from "@/features/preferences/LogoutDuration";
import { Box } from "@mui/material";
export default function PreferencesWidget() {
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
            borderBottom: "1px solid #eeeeee",
          }}
        >
          <Notification />
        </Box>
        <Box sx={{ mt: 3 }}>
          <ThemeButton
            label="Save Changes"
            sx={{ display: "flex", alignItems: "center" }}
            height="40px"
          />
        </Box>
      </DefaultCard>
    </>
  );
}
