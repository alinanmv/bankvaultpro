import DefaultCard from "@/shared/ui/Card/Card";
import TextInput from "@/shared/ui/Input/TextInput";
import { Box, useTheme } from "@mui/material";
import ThemeButton from "@/shared/ui/Button/ThemeButton";
import { GenericSelect } from "@/shared/ui/Selects/GenericSelect";
import React from "react";
import ConfirmModal from "./RoleChangeModal";
export default function PersonalInformation() {
  const [role, setRole] = React.useState("Select a role to request");
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <DefaultCard
        title="Role Management"
        description="View your current role and request changes."
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
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextInput label="Current Role" placeholder="Administrator" />
            <GenericSelect
              label="Select New Role"
              value={role}
              onChange={setRole}
              options={["Viewer", "Editor", "Manager"]}
            />
          </Box>
        </Box>

        <Box sx={{ mt: 2, paddingBottom: 0 }}>
          <ThemeButton
            height={"40"}
            width={"175"}
            label={"Request Role Change"}
            sx={null}
            onClick={() => setOpen(true)}
          />
        </Box>
      </DefaultCard>
      <ConfirmModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          console.log("Confirmed");
          setOpen(false);
        }}
        title="Confirm Role Change Request"
        description="Are you sure you want to request this new role? This action will be sent to an administrator for approval.
"
      />
    </>
  );
}
