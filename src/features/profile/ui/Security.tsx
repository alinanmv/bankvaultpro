import DefaultCard from "@/shared/ui/Card/Card";
import SettingRow from "@/shared/ui/Lines/SettingRow";
import ButtonRow from "@/shared/ui/Lines/ButtonRow";
import { Box, useTheme } from "@mui/material";

export default function Security() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <>
      <DefaultCard
        width={"100%"}
        title="Security"
        description="Manage your security settings."
        titleSx={{ fontFamily: "Roboto", fontWeight: 500 }}
      >
        <Box
          sx={{
            borderBottom: `1px solid ${
              isDark ? theme.palette.grey[900] : "#eeeeee"
            }`,
            paddingBottom: 3,
            mt: 3,
            width: "100%",
          }}
        >
          <ButtonRow
            title="Reset Password"
            description="An email will be sent to you to reset your password."
            buttonTitle="Reset Password"
          />
        </Box>

        <Box sx={{ mt: 2.5, width: "100%" }}>
          <SettingRow
            title="Active Directory Access"
            description="Sync your account with your organization's AD."
            defaultChecked
          />
        </Box>
      </DefaultCard>
    </>
  );
}
