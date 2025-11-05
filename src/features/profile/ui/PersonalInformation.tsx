import DefaultCard from "@/shared/ui/Card/Card";
import TextInput from "@/shared/ui/Input/TextInput";
import { Avatar, Box, useTheme } from "@mui/material";
import ThemeButton from "@/shared/ui/Button/ThemeButton";

export default function PersonalInformation() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <DefaultCard
      title="Personal Information"
      description="Update your personal details here."
      width={"100%"}
      titleSx={{ fontFamily: "Roboto", fontWeight: 500 }}
      sx={{ paddingBottom: 2 }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 3,
          width: "100%",
          borderBottom: `1px solid ${isDark ? theme.palette.grey[900] : "#eeeeee"}`,
          paddingBottom: 3,
          mt: 3,
        }}
      >
        <Box
          width={"100px"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: "100px", height: "100px" }}>U</Avatar>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextInput label="Full Name" placeholder="Admin" />
          <TextInput label="Email Address" placeholder="admin@bankvault.pro" />
        </Box>
      </Box>

      <Box sx={{ mt: 2, paddingBottom: 0 }}>
        <ThemeButton
          height={"40"}
          width={"125"}
          label={"Save Changes"}
          sx={null}
        />
      </Box>
    </DefaultCard>
  );
}
