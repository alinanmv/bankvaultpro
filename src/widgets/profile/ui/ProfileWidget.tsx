import PersonalInformation from "@/features/profile/ui/PersonalInformation";
import { Box } from "@mui/material";
import RoleManagement from "@/features/profile/ui/RoleManagement";
import Security from "@/features/profile/ui/Security";
export default function ProfileWidget() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <PersonalInformation />
        <Security />
        <RoleManagement />
      </Box>
    </>
  );
}
